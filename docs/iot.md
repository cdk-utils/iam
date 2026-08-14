# `iot` Submodule <a name="`iot` Submodule" id="@cdk_utils/iam.iot"></a>


## Structs <a name="Structs" id="Structs"></a>

### IotAuthorizerArnComponents <a name="IotAuthorizerArnComponents" id="@cdk_utils/iam.iot.IotAuthorizerArnComponents"></a>

Parsed components of a authorizer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotAuthorizerArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotAuthorizerArnComponents: iot.IotAuthorizerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotAuthorizerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotAuthorizerArnComponents.property.authorizerName">authorizerName</a></code> | <code>string</code> | The AuthorizerName component. |
| <code><a href="#@cdk_utils/iam.iot.IotAuthorizerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotAuthorizerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotAuthorizerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `authorizerName`<sup>Required</sup> <a name="authorizerName" id="@cdk_utils/iam.iot.IotAuthorizerArnComponents.property.authorizerName"></a>

```typescript
public readonly authorizerName: string;
```

- *Type:* string

The AuthorizerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotAuthorizerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotAuthorizerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotAuthorizerArnProps <a name="IotAuthorizerArnProps" id="@cdk_utils/iam.iot.IotAuthorizerArnProps"></a>

Properties for building a authorizer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotAuthorizerArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotAuthorizerArnProps: iot.IotAuthorizerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotAuthorizerArnProps.property.authorizerName">authorizerName</a></code> | <code>string</code> | The AuthorizerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotAuthorizerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotAuthorizerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotAuthorizerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `authorizerName`<sup>Required</sup> <a name="authorizerName" id="@cdk_utils/iam.iot.IotAuthorizerArnProps.property.authorizerName"></a>

```typescript
public readonly authorizerName: string;
```

- *Type:* string

The AuthorizerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotAuthorizerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotAuthorizerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotAuthorizerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotBillinggroupArnComponents <a name="IotBillinggroupArnComponents" id="@cdk_utils/iam.iot.IotBillinggroupArnComponents"></a>

Parsed components of a billinggroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotBillinggroupArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotBillinggroupArnComponents: iot.IotBillinggroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotBillinggroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotBillinggroupArnComponents.property.billingGroupName">billingGroupName</a></code> | <code>string</code> | The BillingGroupName component. |
| <code><a href="#@cdk_utils/iam.iot.IotBillinggroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotBillinggroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotBillinggroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `billingGroupName`<sup>Required</sup> <a name="billingGroupName" id="@cdk_utils/iam.iot.IotBillinggroupArnComponents.property.billingGroupName"></a>

```typescript
public readonly billingGroupName: string;
```

- *Type:* string

The BillingGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotBillinggroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotBillinggroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotBillinggroupArnProps <a name="IotBillinggroupArnProps" id="@cdk_utils/iam.iot.IotBillinggroupArnProps"></a>

Properties for building a billinggroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotBillinggroupArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotBillinggroupArnProps: iot.IotBillinggroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotBillinggroupArnProps.property.billingGroupName">billingGroupName</a></code> | <code>string</code> | The BillingGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotBillinggroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotBillinggroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotBillinggroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `billingGroupName`<sup>Required</sup> <a name="billingGroupName" id="@cdk_utils/iam.iot.IotBillinggroupArnProps.property.billingGroupName"></a>

```typescript
public readonly billingGroupName: string;
```

- *Type:* string

The BillingGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotBillinggroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotBillinggroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotBillinggroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotCacertArnComponents <a name="IotCacertArnComponents" id="@cdk_utils/iam.iot.IotCacertArnComponents"></a>

Parsed components of a cacert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotCacertArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotCacertArnComponents: iot.IotCacertArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotCacertArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotCacertArnComponents.property.caCertificate">caCertificate</a></code> | <code>string</code> | The CACertificate component. |
| <code><a href="#@cdk_utils/iam.iot.IotCacertArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotCacertArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotCacertArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdk_utils/iam.iot.IotCacertArnComponents.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

The CACertificate component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotCacertArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotCacertArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotCacertArnProps <a name="IotCacertArnProps" id="@cdk_utils/iam.iot.IotCacertArnProps"></a>

Properties for building a cacert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotCacertArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotCacertArnProps: iot.IotCacertArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotCacertArnProps.property.caCertificate">caCertificate</a></code> | <code>string</code> | The CACertificate component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotCacertArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotCacertArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotCacertArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdk_utils/iam.iot.IotCacertArnProps.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

The CACertificate component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotCacertArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotCacertArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotCacertArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotCertArnComponents <a name="IotCertArnComponents" id="@cdk_utils/iam.iot.IotCertArnComponents"></a>

Parsed components of a cert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotCertArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotCertArnComponents: iot.IotCertArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotCertArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotCertArnComponents.property.certificate">certificate</a></code> | <code>string</code> | The Certificate component. |
| <code><a href="#@cdk_utils/iam.iot.IotCertArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotCertArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotCertArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdk_utils/iam.iot.IotCertArnComponents.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The Certificate component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotCertArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotCertArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotCertArnProps <a name="IotCertArnProps" id="@cdk_utils/iam.iot.IotCertArnProps"></a>

Properties for building a cert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotCertArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotCertArnProps: iot.IotCertArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotCertArnProps.property.certificate">certificate</a></code> | <code>string</code> | The Certificate component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotCertArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotCertArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotCertArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdk_utils/iam.iot.IotCertArnProps.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The Certificate component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotCertArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotCertArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotCertArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotCertificateproviderArnComponents <a name="IotCertificateproviderArnComponents" id="@cdk_utils/iam.iot.IotCertificateproviderArnComponents"></a>

Parsed components of a certificateprovider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotCertificateproviderArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotCertificateproviderArnComponents: iot.IotCertificateproviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotCertificateproviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotCertificateproviderArnComponents.property.certificateProviderName">certificateProviderName</a></code> | <code>string</code> | The CertificateProviderName component. |
| <code><a href="#@cdk_utils/iam.iot.IotCertificateproviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotCertificateproviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotCertificateproviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `certificateProviderName`<sup>Required</sup> <a name="certificateProviderName" id="@cdk_utils/iam.iot.IotCertificateproviderArnComponents.property.certificateProviderName"></a>

```typescript
public readonly certificateProviderName: string;
```

- *Type:* string

The CertificateProviderName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotCertificateproviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotCertificateproviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotCertificateproviderArnProps <a name="IotCertificateproviderArnProps" id="@cdk_utils/iam.iot.IotCertificateproviderArnProps"></a>

Properties for building a certificateprovider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotCertificateproviderArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotCertificateproviderArnProps: iot.IotCertificateproviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotCertificateproviderArnProps.property.certificateProviderName">certificateProviderName</a></code> | <code>string</code> | The CertificateProviderName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotCertificateproviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotCertificateproviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotCertificateproviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `certificateProviderName`<sup>Required</sup> <a name="certificateProviderName" id="@cdk_utils/iam.iot.IotCertificateproviderArnProps.property.certificateProviderName"></a>

```typescript
public readonly certificateProviderName: string;
```

- *Type:* string

The CertificateProviderName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotCertificateproviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotCertificateproviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotCertificateproviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotClientArnComponents <a name="IotClientArnComponents" id="@cdk_utils/iam.iot.IotClientArnComponents"></a>

Parsed components of a client ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotClientArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotClientArnComponents: iot.IotClientArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotClientArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotClientArnComponents.property.clientId">clientId</a></code> | <code>string</code> | The ClientId component. |
| <code><a href="#@cdk_utils/iam.iot.IotClientArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotClientArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotClientArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdk_utils/iam.iot.IotClientArnComponents.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The ClientId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotClientArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotClientArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotClientArnProps <a name="IotClientArnProps" id="@cdk_utils/iam.iot.IotClientArnProps"></a>

Properties for building a client ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotClientArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotClientArnProps: iot.IotClientArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotClientArnProps.property.clientId">clientId</a></code> | <code>string</code> | The ClientId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotClientArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotClientArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotClientArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdk_utils/iam.iot.IotClientArnProps.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The ClientId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotClientArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotClientArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotClientArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotCommandArnComponents <a name="IotCommandArnComponents" id="@cdk_utils/iam.iot.IotCommandArnComponents"></a>

Parsed components of a command ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotCommandArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotCommandArnComponents: iot.IotCommandArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotCommandArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotCommandArnComponents.property.commandId">commandId</a></code> | <code>string</code> | The CommandId component. |
| <code><a href="#@cdk_utils/iam.iot.IotCommandArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotCommandArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotCommandArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="@cdk_utils/iam.iot.IotCommandArnComponents.property.commandId"></a>

```typescript
public readonly commandId: string;
```

- *Type:* string

The CommandId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotCommandArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotCommandArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotCommandArnProps <a name="IotCommandArnProps" id="@cdk_utils/iam.iot.IotCommandArnProps"></a>

Properties for building a command ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotCommandArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotCommandArnProps: iot.IotCommandArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotCommandArnProps.property.commandId">commandId</a></code> | <code>string</code> | The CommandId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotCommandArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotCommandArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotCommandArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="@cdk_utils/iam.iot.IotCommandArnProps.property.commandId"></a>

```typescript
public readonly commandId: string;
```

- *Type:* string

The CommandId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotCommandArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotCommandArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotCommandArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotCustommetricArnComponents <a name="IotCustommetricArnComponents" id="@cdk_utils/iam.iot.IotCustommetricArnComponents"></a>

Parsed components of a custommetric ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotCustommetricArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotCustommetricArnComponents: iot.IotCustommetricArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotCustommetricArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotCustommetricArnComponents.property.metricName">metricName</a></code> | <code>string</code> | The MetricName component. |
| <code><a href="#@cdk_utils/iam.iot.IotCustommetricArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotCustommetricArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotCustommetricArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdk_utils/iam.iot.IotCustommetricArnComponents.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The MetricName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotCustommetricArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotCustommetricArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotCustommetricArnProps <a name="IotCustommetricArnProps" id="@cdk_utils/iam.iot.IotCustommetricArnProps"></a>

Properties for building a custommetric ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotCustommetricArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotCustommetricArnProps: iot.IotCustommetricArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotCustommetricArnProps.property.metricName">metricName</a></code> | <code>string</code> | The MetricName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotCustommetricArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotCustommetricArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotCustommetricArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdk_utils/iam.iot.IotCustommetricArnProps.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The MetricName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotCustommetricArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotCustommetricArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotCustommetricArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotDestinationArnComponents <a name="IotDestinationArnComponents" id="@cdk_utils/iam.iot.IotDestinationArnComponents"></a>

Parsed components of a destination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotDestinationArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotDestinationArnComponents: iot.IotDestinationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotDestinationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotDestinationArnComponents.property.destinationType">destinationType</a></code> | <code>string</code> | The DestinationType component. |
| <code><a href="#@cdk_utils/iam.iot.IotDestinationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotDestinationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotDestinationArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotDestinationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdk_utils/iam.iot.IotDestinationArnComponents.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

The DestinationType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotDestinationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotDestinationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.iot.IotDestinationArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component.

---

### IotDestinationArnProps <a name="IotDestinationArnProps" id="@cdk_utils/iam.iot.IotDestinationArnProps"></a>

Properties for building a destination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotDestinationArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotDestinationArnProps: iot.IotDestinationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotDestinationArnProps.property.destinationType">destinationType</a></code> | <code>string</code> | The DestinationType component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotDestinationArnProps.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotDestinationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotDestinationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotDestinationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdk_utils/iam.iot.IotDestinationArnProps.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

The DestinationType component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.iot.IotDestinationArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotDestinationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotDestinationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotDestinationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotDimensionArnComponents <a name="IotDimensionArnComponents" id="@cdk_utils/iam.iot.IotDimensionArnComponents"></a>

Parsed components of a dimension ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotDimensionArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotDimensionArnComponents: iot.IotDimensionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotDimensionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotDimensionArnComponents.property.dimensionName">dimensionName</a></code> | <code>string</code> | The DimensionName component. |
| <code><a href="#@cdk_utils/iam.iot.IotDimensionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotDimensionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotDimensionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdk_utils/iam.iot.IotDimensionArnComponents.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

The DimensionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotDimensionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotDimensionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotDimensionArnProps <a name="IotDimensionArnProps" id="@cdk_utils/iam.iot.IotDimensionArnProps"></a>

Properties for building a dimension ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotDimensionArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotDimensionArnProps: iot.IotDimensionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotDimensionArnProps.property.dimensionName">dimensionName</a></code> | <code>string</code> | The DimensionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotDimensionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotDimensionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotDimensionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdk_utils/iam.iot.IotDimensionArnProps.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

The DimensionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotDimensionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotDimensionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotDimensionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotDomainconfigurationArnComponents <a name="IotDomainconfigurationArnComponents" id="@cdk_utils/iam.iot.IotDomainconfigurationArnComponents"></a>

Parsed components of a domainconfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotDomainconfigurationArnComponents: iot.IotDomainconfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.property.domainConfigurationName">domainConfigurationName</a></code> | <code>string</code> | The DomainConfigurationName component. |
| <code><a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainConfigurationName`<sup>Required</sup> <a name="domainConfigurationName" id="@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.property.domainConfigurationName"></a>

```typescript
public readonly domainConfigurationName: string;
```

- *Type:* string

The DomainConfigurationName component.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotDomainconfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotDomainconfigurationArnProps <a name="IotDomainconfigurationArnProps" id="@cdk_utils/iam.iot.IotDomainconfigurationArnProps"></a>

Properties for building a domainconfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotDomainconfigurationArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotDomainconfigurationArnProps: iot.IotDomainconfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnProps.property.domainConfigurationName">domainConfigurationName</a></code> | <code>string</code> | The DomainConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainConfigurationName`<sup>Required</sup> <a name="domainConfigurationName" id="@cdk_utils/iam.iot.IotDomainconfigurationArnProps.property.domainConfigurationName"></a>

```typescript
public readonly domainConfigurationName: string;
```

- *Type:* string

The DomainConfigurationName component of the ARN.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.iot.IotDomainconfigurationArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotDomainconfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotDomainconfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotDomainconfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotDynamicthinggroupArnComponents <a name="IotDynamicthinggroupArnComponents" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnComponents"></a>

Parsed components of a dynamicthinggroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotDynamicthinggroupArnComponents: iot.IotDynamicthinggroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotDynamicthinggroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotDynamicthinggroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotDynamicthinggroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotDynamicthinggroupArnComponents.property.thingGroupName">thingGroupName</a></code> | <code>string</code> | The ThingGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `thingGroupName`<sup>Required</sup> <a name="thingGroupName" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnComponents.property.thingGroupName"></a>

```typescript
public readonly thingGroupName: string;
```

- *Type:* string

The ThingGroupName component.

---

### IotDynamicthinggroupArnProps <a name="IotDynamicthinggroupArnProps" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnProps"></a>

Properties for building a dynamicthinggroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotDynamicthinggroupArnProps: iot.IotDynamicthinggroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotDynamicthinggroupArnProps.property.thingGroupName">thingGroupName</a></code> | <code>string</code> | The ThingGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotDynamicthinggroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotDynamicthinggroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotDynamicthinggroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `thingGroupName`<sup>Required</sup> <a name="thingGroupName" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnProps.property.thingGroupName"></a>

```typescript
public readonly thingGroupName: string;
```

- *Type:* string

The ThingGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotDynamicthinggroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotFleetmetricArnComponents <a name="IotFleetmetricArnComponents" id="@cdk_utils/iam.iot.IotFleetmetricArnComponents"></a>

Parsed components of a fleetmetric ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotFleetmetricArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotFleetmetricArnComponents: iot.IotFleetmetricArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotFleetmetricArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotFleetmetricArnComponents.property.fleetMetricName">fleetMetricName</a></code> | <code>string</code> | The FleetMetricName component. |
| <code><a href="#@cdk_utils/iam.iot.IotFleetmetricArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotFleetmetricArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotFleetmetricArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fleetMetricName`<sup>Required</sup> <a name="fleetMetricName" id="@cdk_utils/iam.iot.IotFleetmetricArnComponents.property.fleetMetricName"></a>

```typescript
public readonly fleetMetricName: string;
```

- *Type:* string

The FleetMetricName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotFleetmetricArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotFleetmetricArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotFleetmetricArnProps <a name="IotFleetmetricArnProps" id="@cdk_utils/iam.iot.IotFleetmetricArnProps"></a>

Properties for building a fleetmetric ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotFleetmetricArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotFleetmetricArnProps: iot.IotFleetmetricArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotFleetmetricArnProps.property.fleetMetricName">fleetMetricName</a></code> | <code>string</code> | The FleetMetricName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotFleetmetricArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotFleetmetricArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotFleetmetricArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fleetMetricName`<sup>Required</sup> <a name="fleetMetricName" id="@cdk_utils/iam.iot.IotFleetmetricArnProps.property.fleetMetricName"></a>

```typescript
public readonly fleetMetricName: string;
```

- *Type:* string

The FleetMetricName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotFleetmetricArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotFleetmetricArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotFleetmetricArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotIndexArnComponents <a name="IotIndexArnComponents" id="@cdk_utils/iam.iot.IotIndexArnComponents"></a>

Parsed components of a index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotIndexArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotIndexArnComponents: iot.IotIndexArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotIndexArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotIndexArnComponents.property.indexName">indexName</a></code> | <code>string</code> | The IndexName component. |
| <code><a href="#@cdk_utils/iam.iot.IotIndexArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotIndexArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotIndexArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdk_utils/iam.iot.IotIndexArnComponents.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The IndexName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotIndexArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotIndexArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotIndexArnProps <a name="IotIndexArnProps" id="@cdk_utils/iam.iot.IotIndexArnProps"></a>

Properties for building a index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotIndexArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotIndexArnProps: iot.IotIndexArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotIndexArnProps.property.indexName">indexName</a></code> | <code>string</code> | The IndexName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotIndexArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotIndexArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotIndexArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdk_utils/iam.iot.IotIndexArnProps.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The IndexName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotIndexArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotIndexArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotIndexArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotJobArnComponents <a name="IotJobArnComponents" id="@cdk_utils/iam.iot.IotJobArnComponents"></a>

Parsed components of a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotJobArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotJobArnComponents: iot.IotJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.iot.IotJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.iot.IotJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotJobArnProps <a name="IotJobArnProps" id="@cdk_utils/iam.iot.IotJobArnProps"></a>

Properties for building a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotJobArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotJobArnProps: iot.IotJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.iot.IotJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotJobtemplateArnComponents <a name="IotJobtemplateArnComponents" id="@cdk_utils/iam.iot.IotJobtemplateArnComponents"></a>

Parsed components of a jobtemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotJobtemplateArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotJobtemplateArnComponents: iot.IotJobtemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotJobtemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotJobtemplateArnComponents.property.jobTemplateId">jobTemplateId</a></code> | <code>string</code> | The JobTemplateId component. |
| <code><a href="#@cdk_utils/iam.iot.IotJobtemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotJobtemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotJobtemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdk_utils/iam.iot.IotJobtemplateArnComponents.property.jobTemplateId"></a>

```typescript
public readonly jobTemplateId: string;
```

- *Type:* string

The JobTemplateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotJobtemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotJobtemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotJobtemplateArnProps <a name="IotJobtemplateArnProps" id="@cdk_utils/iam.iot.IotJobtemplateArnProps"></a>

Properties for building a jobtemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotJobtemplateArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotJobtemplateArnProps: iot.IotJobtemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotJobtemplateArnProps.property.jobTemplateId">jobTemplateId</a></code> | <code>string</code> | The JobTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotJobtemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotJobtemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotJobtemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdk_utils/iam.iot.IotJobtemplateArnProps.property.jobTemplateId"></a>

```typescript
public readonly jobTemplateId: string;
```

- *Type:* string

The JobTemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotJobtemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotJobtemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotJobtemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotMitigationactionArnComponents <a name="IotMitigationactionArnComponents" id="@cdk_utils/iam.iot.IotMitigationactionArnComponents"></a>

Parsed components of a mitigationaction ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotMitigationactionArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotMitigationactionArnComponents: iot.IotMitigationactionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotMitigationactionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotMitigationactionArnComponents.property.mitigationActionName">mitigationActionName</a></code> | <code>string</code> | The MitigationActionName component. |
| <code><a href="#@cdk_utils/iam.iot.IotMitigationactionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotMitigationactionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotMitigationactionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `mitigationActionName`<sup>Required</sup> <a name="mitigationActionName" id="@cdk_utils/iam.iot.IotMitigationactionArnComponents.property.mitigationActionName"></a>

```typescript
public readonly mitigationActionName: string;
```

- *Type:* string

The MitigationActionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotMitigationactionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotMitigationactionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotMitigationactionArnProps <a name="IotMitigationactionArnProps" id="@cdk_utils/iam.iot.IotMitigationactionArnProps"></a>

Properties for building a mitigationaction ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotMitigationactionArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotMitigationactionArnProps: iot.IotMitigationactionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotMitigationactionArnProps.property.mitigationActionName">mitigationActionName</a></code> | <code>string</code> | The MitigationActionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotMitigationactionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotMitigationactionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotMitigationactionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `mitigationActionName`<sup>Required</sup> <a name="mitigationActionName" id="@cdk_utils/iam.iot.IotMitigationactionArnProps.property.mitigationActionName"></a>

```typescript
public readonly mitigationActionName: string;
```

- *Type:* string

The MitigationActionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotMitigationactionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotMitigationactionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotMitigationactionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotOtaupdateArnComponents <a name="IotOtaupdateArnComponents" id="@cdk_utils/iam.iot.IotOtaupdateArnComponents"></a>

Parsed components of a otaupdate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotOtaupdateArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotOtaupdateArnComponents: iot.IotOtaupdateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotOtaupdateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotOtaupdateArnComponents.property.otaUpdateId">otaUpdateId</a></code> | <code>string</code> | The OtaUpdateId component. |
| <code><a href="#@cdk_utils/iam.iot.IotOtaupdateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotOtaupdateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotOtaupdateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `otaUpdateId`<sup>Required</sup> <a name="otaUpdateId" id="@cdk_utils/iam.iot.IotOtaupdateArnComponents.property.otaUpdateId"></a>

```typescript
public readonly otaUpdateId: string;
```

- *Type:* string

The OtaUpdateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotOtaupdateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotOtaupdateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotOtaupdateArnProps <a name="IotOtaupdateArnProps" id="@cdk_utils/iam.iot.IotOtaupdateArnProps"></a>

Properties for building a otaupdate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotOtaupdateArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotOtaupdateArnProps: iot.IotOtaupdateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotOtaupdateArnProps.property.otaUpdateId">otaUpdateId</a></code> | <code>string</code> | The OtaUpdateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotOtaupdateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotOtaupdateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotOtaupdateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `otaUpdateId`<sup>Required</sup> <a name="otaUpdateId" id="@cdk_utils/iam.iot.IotOtaupdateArnProps.property.otaUpdateId"></a>

```typescript
public readonly otaUpdateId: string;
```

- *Type:* string

The OtaUpdateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotOtaupdateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotOtaupdateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotOtaupdateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotPackageArnComponents <a name="IotPackageArnComponents" id="@cdk_utils/iam.iot.IotPackageArnComponents"></a>

Parsed components of a package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotPackageArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotPackageArnComponents: iot.IotPackageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotPackageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageArnComponents.property.packageName">packageName</a></code> | <code>string</code> | The PackageName component. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotPackageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdk_utils/iam.iot.IotPackageArnComponents.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The PackageName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotPackageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotPackageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotPackageArnProps <a name="IotPackageArnProps" id="@cdk_utils/iam.iot.IotPackageArnProps"></a>

Properties for building a package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotPackageArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotPackageArnProps: iot.IotPackageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotPackageArnProps.property.packageName">packageName</a></code> | <code>string</code> | The PackageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdk_utils/iam.iot.IotPackageArnProps.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The PackageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotPackageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotPackageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotPackageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotPackageversionArnComponents <a name="IotPackageversionArnComponents" id="@cdk_utils/iam.iot.IotPackageversionArnComponents"></a>

Parsed components of a packageversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotPackageversionArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotPackageversionArnComponents: iot.IotPackageversionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotPackageversionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageversionArnComponents.property.packageName">packageName</a></code> | <code>string</code> | The PackageName component. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageversionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageversionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageversionArnComponents.property.versionName">versionName</a></code> | <code>string</code> | The VersionName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotPackageversionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdk_utils/iam.iot.IotPackageversionArnComponents.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The PackageName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotPackageversionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotPackageversionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdk_utils/iam.iot.IotPackageversionArnComponents.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

The VersionName component.

---

### IotPackageversionArnProps <a name="IotPackageversionArnProps" id="@cdk_utils/iam.iot.IotPackageversionArnProps"></a>

Properties for building a packageversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotPackageversionArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotPackageversionArnProps: iot.IotPackageversionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotPackageversionArnProps.property.packageName">packageName</a></code> | <code>string</code> | The PackageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageversionArnProps.property.versionName">versionName</a></code> | <code>string</code> | The VersionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageversionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageversionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotPackageversionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdk_utils/iam.iot.IotPackageversionArnProps.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The PackageName component of the ARN.

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdk_utils/iam.iot.IotPackageversionArnProps.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

The VersionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotPackageversionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotPackageversionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotPackageversionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotPolicyArnComponents <a name="IotPolicyArnComponents" id="@cdk_utils/iam.iot.IotPolicyArnComponents"></a>

Parsed components of a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotPolicyArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotPolicyArnComponents: iot.IotPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotPolicyArnComponents.property.policyName">policyName</a></code> | <code>string</code> | The PolicyName component. |
| <code><a href="#@cdk_utils/iam.iot.IotPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdk_utils/iam.iot.IotPolicyArnComponents.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

The PolicyName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotPolicyArnProps <a name="IotPolicyArnProps" id="@cdk_utils/iam.iot.IotPolicyArnProps"></a>

Properties for building a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotPolicyArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotPolicyArnProps: iot.IotPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotPolicyArnProps.property.policyName">policyName</a></code> | <code>string</code> | The PolicyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdk_utils/iam.iot.IotPolicyArnProps.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

The PolicyName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotProvisioningtemplateArnComponents <a name="IotProvisioningtemplateArnComponents" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnComponents"></a>

Parsed components of a provisioningtemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotProvisioningtemplateArnComponents: iot.IotProvisioningtemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotProvisioningtemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotProvisioningtemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotProvisioningtemplateArnComponents.property.provisioningTemplate">provisioningTemplate</a></code> | <code>string</code> | The ProvisioningTemplate component. |
| <code><a href="#@cdk_utils/iam.iot.IotProvisioningtemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `provisioningTemplate`<sup>Required</sup> <a name="provisioningTemplate" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnComponents.property.provisioningTemplate"></a>

```typescript
public readonly provisioningTemplate: string;
```

- *Type:* string

The ProvisioningTemplate component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotProvisioningtemplateArnProps <a name="IotProvisioningtemplateArnProps" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnProps"></a>

Properties for building a provisioningtemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotProvisioningtemplateArnProps: iot.IotProvisioningtemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotProvisioningtemplateArnProps.property.provisioningTemplate">provisioningTemplate</a></code> | <code>string</code> | The ProvisioningTemplate component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotProvisioningtemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotProvisioningtemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotProvisioningtemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `provisioningTemplate`<sup>Required</sup> <a name="provisioningTemplate" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnProps.property.provisioningTemplate"></a>

```typescript
public readonly provisioningTemplate: string;
```

- *Type:* string

The ProvisioningTemplate component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotProvisioningtemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotRolealiasArnComponents <a name="IotRolealiasArnComponents" id="@cdk_utils/iam.iot.IotRolealiasArnComponents"></a>

Parsed components of a rolealias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotRolealiasArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotRolealiasArnComponents: iot.IotRolealiasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotRolealiasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotRolealiasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotRolealiasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotRolealiasArnComponents.property.roleAlias">roleAlias</a></code> | <code>string</code> | The RoleAlias component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotRolealiasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotRolealiasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotRolealiasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `roleAlias`<sup>Required</sup> <a name="roleAlias" id="@cdk_utils/iam.iot.IotRolealiasArnComponents.property.roleAlias"></a>

```typescript
public readonly roleAlias: string;
```

- *Type:* string

The RoleAlias component.

---

### IotRolealiasArnProps <a name="IotRolealiasArnProps" id="@cdk_utils/iam.iot.IotRolealiasArnProps"></a>

Properties for building a rolealias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotRolealiasArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotRolealiasArnProps: iot.IotRolealiasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotRolealiasArnProps.property.roleAlias">roleAlias</a></code> | <code>string</code> | The RoleAlias component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotRolealiasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotRolealiasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotRolealiasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `roleAlias`<sup>Required</sup> <a name="roleAlias" id="@cdk_utils/iam.iot.IotRolealiasArnProps.property.roleAlias"></a>

```typescript
public readonly roleAlias: string;
```

- *Type:* string

The RoleAlias component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotRolealiasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotRolealiasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotRolealiasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotRuleArnComponents <a name="IotRuleArnComponents" id="@cdk_utils/iam.iot.IotRuleArnComponents"></a>

Parsed components of a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotRuleArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotRuleArnComponents: iot.IotRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotRuleArnComponents.property.ruleName">ruleName</a></code> | <code>string</code> | The RuleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdk_utils/iam.iot.IotRuleArnComponents.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The RuleName component.

---

### IotRuleArnProps <a name="IotRuleArnProps" id="@cdk_utils/iam.iot.IotRuleArnProps"></a>

Properties for building a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotRuleArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotRuleArnProps: iot.IotRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotRuleArnProps.property.ruleName">ruleName</a></code> | <code>string</code> | The RuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdk_utils/iam.iot.IotRuleArnProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The RuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotScheduledauditArnComponents <a name="IotScheduledauditArnComponents" id="@cdk_utils/iam.iot.IotScheduledauditArnComponents"></a>

Parsed components of a scheduledaudit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotScheduledauditArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotScheduledauditArnComponents: iot.IotScheduledauditArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotScheduledauditArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotScheduledauditArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotScheduledauditArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotScheduledauditArnComponents.property.scheduleName">scheduleName</a></code> | <code>string</code> | The ScheduleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotScheduledauditArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotScheduledauditArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotScheduledauditArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scheduleName`<sup>Required</sup> <a name="scheduleName" id="@cdk_utils/iam.iot.IotScheduledauditArnComponents.property.scheduleName"></a>

```typescript
public readonly scheduleName: string;
```

- *Type:* string

The ScheduleName component.

---

### IotScheduledauditArnProps <a name="IotScheduledauditArnProps" id="@cdk_utils/iam.iot.IotScheduledauditArnProps"></a>

Properties for building a scheduledaudit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotScheduledauditArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotScheduledauditArnProps: iot.IotScheduledauditArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotScheduledauditArnProps.property.scheduleName">scheduleName</a></code> | <code>string</code> | The ScheduleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotScheduledauditArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotScheduledauditArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotScheduledauditArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `scheduleName`<sup>Required</sup> <a name="scheduleName" id="@cdk_utils/iam.iot.IotScheduledauditArnProps.property.scheduleName"></a>

```typescript
public readonly scheduleName: string;
```

- *Type:* string

The ScheduleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotScheduledauditArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotScheduledauditArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotScheduledauditArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotSecurityprofileArnComponents <a name="IotSecurityprofileArnComponents" id="@cdk_utils/iam.iot.IotSecurityprofileArnComponents"></a>

Parsed components of a securityprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotSecurityprofileArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotSecurityprofileArnComponents: iot.IotSecurityprofileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotSecurityprofileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotSecurityprofileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotSecurityprofileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotSecurityprofileArnComponents.property.securityProfileName">securityProfileName</a></code> | <code>string</code> | The SecurityProfileName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotSecurityprofileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotSecurityprofileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotSecurityprofileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `securityProfileName`<sup>Required</sup> <a name="securityProfileName" id="@cdk_utils/iam.iot.IotSecurityprofileArnComponents.property.securityProfileName"></a>

```typescript
public readonly securityProfileName: string;
```

- *Type:* string

The SecurityProfileName component.

---

### IotSecurityprofileArnProps <a name="IotSecurityprofileArnProps" id="@cdk_utils/iam.iot.IotSecurityprofileArnProps"></a>

Properties for building a securityprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotSecurityprofileArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotSecurityprofileArnProps: iot.IotSecurityprofileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotSecurityprofileArnProps.property.securityProfileName">securityProfileName</a></code> | <code>string</code> | The SecurityProfileName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotSecurityprofileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotSecurityprofileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotSecurityprofileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `securityProfileName`<sup>Required</sup> <a name="securityProfileName" id="@cdk_utils/iam.iot.IotSecurityprofileArnProps.property.securityProfileName"></a>

```typescript
public readonly securityProfileName: string;
```

- *Type:* string

The SecurityProfileName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotSecurityprofileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotSecurityprofileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotSecurityprofileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotStreamArnComponents <a name="IotStreamArnComponents" id="@cdk_utils/iam.iot.IotStreamArnComponents"></a>

Parsed components of a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotStreamArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotStreamArnComponents: iot.IotStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotStreamArnComponents.property.streamId">streamId</a></code> | <code>string</code> | The StreamId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdk_utils/iam.iot.IotStreamArnComponents.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

The StreamId component.

---

### IotStreamArnProps <a name="IotStreamArnProps" id="@cdk_utils/iam.iot.IotStreamArnProps"></a>

Properties for building a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotStreamArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotStreamArnProps: iot.IotStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotStreamArnProps.property.streamId">streamId</a></code> | <code>string</code> | The StreamId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdk_utils/iam.iot.IotStreamArnProps.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

The StreamId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotThingArnComponents <a name="IotThingArnComponents" id="@cdk_utils/iam.iot.IotThingArnComponents"></a>

Parsed components of a thing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotThingArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotThingArnComponents: iot.IotThingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotThingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotThingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotThingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotThingArnComponents.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotThingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotThingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotThingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.iot.IotThingArnComponents.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component.

---

### IotThingArnProps <a name="IotThingArnProps" id="@cdk_utils/iam.iot.IotThingArnProps"></a>

Properties for building a thing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotThingArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotThingArnProps: iot.IotThingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotThingArnProps.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotThingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotThingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotThingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.iot.IotThingArnProps.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotThingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotThingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotThingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotThinggroupArnComponents <a name="IotThinggroupArnComponents" id="@cdk_utils/iam.iot.IotThinggroupArnComponents"></a>

Parsed components of a thinggroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotThinggroupArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotThinggroupArnComponents: iot.IotThinggroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotThinggroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotThinggroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotThinggroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotThinggroupArnComponents.property.thingGroupName">thingGroupName</a></code> | <code>string</code> | The ThingGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotThinggroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotThinggroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotThinggroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `thingGroupName`<sup>Required</sup> <a name="thingGroupName" id="@cdk_utils/iam.iot.IotThinggroupArnComponents.property.thingGroupName"></a>

```typescript
public readonly thingGroupName: string;
```

- *Type:* string

The ThingGroupName component.

---

### IotThinggroupArnProps <a name="IotThinggroupArnProps" id="@cdk_utils/iam.iot.IotThinggroupArnProps"></a>

Properties for building a thinggroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotThinggroupArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotThinggroupArnProps: iot.IotThinggroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotThinggroupArnProps.property.thingGroupName">thingGroupName</a></code> | <code>string</code> | The ThingGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotThinggroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotThinggroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotThinggroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `thingGroupName`<sup>Required</sup> <a name="thingGroupName" id="@cdk_utils/iam.iot.IotThinggroupArnProps.property.thingGroupName"></a>

```typescript
public readonly thingGroupName: string;
```

- *Type:* string

The ThingGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotThinggroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotThinggroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotThinggroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotThingtypeArnComponents <a name="IotThingtypeArnComponents" id="@cdk_utils/iam.iot.IotThingtypeArnComponents"></a>

Parsed components of a thingtype ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotThingtypeArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotThingtypeArnComponents: iot.IotThingtypeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotThingtypeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotThingtypeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotThingtypeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotThingtypeArnComponents.property.thingTypeName">thingTypeName</a></code> | <code>string</code> | The ThingTypeName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotThingtypeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotThingtypeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotThingtypeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `thingTypeName`<sup>Required</sup> <a name="thingTypeName" id="@cdk_utils/iam.iot.IotThingtypeArnComponents.property.thingTypeName"></a>

```typescript
public readonly thingTypeName: string;
```

- *Type:* string

The ThingTypeName component.

---

### IotThingtypeArnProps <a name="IotThingtypeArnProps" id="@cdk_utils/iam.iot.IotThingtypeArnProps"></a>

Properties for building a thingtype ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotThingtypeArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotThingtypeArnProps: iot.IotThingtypeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotThingtypeArnProps.property.thingTypeName">thingTypeName</a></code> | <code>string</code> | The ThingTypeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotThingtypeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotThingtypeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotThingtypeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `thingTypeName`<sup>Required</sup> <a name="thingTypeName" id="@cdk_utils/iam.iot.IotThingtypeArnProps.property.thingTypeName"></a>

```typescript
public readonly thingTypeName: string;
```

- *Type:* string

The ThingTypeName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotThingtypeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotThingtypeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotThingtypeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotTopicArnComponents <a name="IotTopicArnComponents" id="@cdk_utils/iam.iot.IotTopicArnComponents"></a>

Parsed components of a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotTopicArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotTopicArnComponents: iot.IotTopicArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotTopicArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicArnComponents.property.topicName">topicName</a></code> | <code>string</code> | The TopicName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotTopicArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotTopicArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotTopicArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdk_utils/iam.iot.IotTopicArnComponents.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The TopicName component.

---

### IotTopicArnProps <a name="IotTopicArnProps" id="@cdk_utils/iam.iot.IotTopicArnProps"></a>

Properties for building a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotTopicArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotTopicArnProps: iot.IotTopicArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotTopicArnProps.property.topicName">topicName</a></code> | <code>string</code> | The TopicName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdk_utils/iam.iot.IotTopicArnProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The TopicName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotTopicArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotTopicArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotTopicArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotTopicfilterArnComponents <a name="IotTopicfilterArnComponents" id="@cdk_utils/iam.iot.IotTopicfilterArnComponents"></a>

Parsed components of a topicfilter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotTopicfilterArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotTopicfilterArnComponents: iot.IotTopicfilterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotTopicfilterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicfilterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicfilterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicfilterArnComponents.property.topicFilter">topicFilter</a></code> | <code>string</code> | The TopicFilter component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotTopicfilterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotTopicfilterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotTopicfilterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `topicFilter`<sup>Required</sup> <a name="topicFilter" id="@cdk_utils/iam.iot.IotTopicfilterArnComponents.property.topicFilter"></a>

```typescript
public readonly topicFilter: string;
```

- *Type:* string

The TopicFilter component.

---

### IotTopicfilterArnProps <a name="IotTopicfilterArnProps" id="@cdk_utils/iam.iot.IotTopicfilterArnProps"></a>

Properties for building a topicfilter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotTopicfilterArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotTopicfilterArnProps: iot.IotTopicfilterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotTopicfilterArnProps.property.topicFilter">topicFilter</a></code> | <code>string</code> | The TopicFilter component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicfilterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicfilterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotTopicfilterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `topicFilter`<sup>Required</sup> <a name="topicFilter" id="@cdk_utils/iam.iot.IotTopicfilterArnProps.property.topicFilter"></a>

```typescript
public readonly topicFilter: string;
```

- *Type:* string

The TopicFilter component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotTopicfilterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotTopicfilterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotTopicfilterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotTunnelArnComponents <a name="IotTunnelArnComponents" id="@cdk_utils/iam.iot.IotTunnelArnComponents"></a>

Parsed components of a tunnel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotTunnelArnComponents.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotTunnelArnComponents: iot.IotTunnelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotTunnelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotTunnelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotTunnelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iot.IotTunnelArnComponents.property.tunnelId">tunnelId</a></code> | <code>string</code> | The TunnelId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iot.IotTunnelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iot.IotTunnelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iot.IotTunnelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdk_utils/iam.iot.IotTunnelArnComponents.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

The TunnelId component.

---

### IotTunnelArnProps <a name="IotTunnelArnProps" id="@cdk_utils/iam.iot.IotTunnelArnProps"></a>

Properties for building a tunnel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iot.IotTunnelArnProps.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

const iotTunnelArnProps: iot.IotTunnelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotTunnelArnProps.property.tunnelId">tunnelId</a></code> | <code>string</code> | The TunnelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iot.IotTunnelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iot.IotTunnelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iot.IotTunnelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdk_utils/iam.iot.IotTunnelArnProps.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

The TunnelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iot.IotTunnelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iot.IotTunnelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iot.IotTunnelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IotActions <a name="IotActions" id="@cdk_utils/iam.iot.IotActions"></a>

IAM action constants for the iot service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iot.IotActions.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

new iot.IotActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AcceptCertificateTransfer">AcceptCertificateTransfer</a></code> | <code>string</code> | [Write] iot:AcceptCertificateTransfer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetBehaviorModelTrainingSummaries">actionGetBehaviorModelTrainingSummaries</a></code> | <code>string</code> | [List] iot:GetBehaviorModelTrainingSummaries. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetBucketsAggregation">actionGetBucketsAggregation</a></code> | <code>string</code> | [Read] iot:GetBucketsAggregation. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetCardinality">actionGetCardinality</a></code> | <code>string</code> | [Read] iot:GetCardinality. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetCommand">actionGetCommand</a></code> | <code>string</code> | [Read] iot:GetCommand. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetCommandExecution">actionGetCommandExecution</a></code> | <code>string</code> | [Read] iot:GetCommandExecution. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Write] iot:GetConnection. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetEffectivePolicies">actionGetEffectivePolicies</a></code> | <code>string</code> | [Read] iot:GetEffectivePolicies. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetIndexingConfiguration">actionGetIndexingConfiguration</a></code> | <code>string</code> | [Read] iot:GetIndexingConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetJobDocument">actionGetJobDocument</a></code> | <code>string</code> | [Read] iot:GetJobDocument. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetLoggingOptions">actionGetLoggingOptions</a></code> | <code>string</code> | [Read] iot:GetLoggingOptions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetOTAUpdate">actionGetOTAUpdate</a></code> | <code>string</code> | [Read] iot:GetOTAUpdate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetPackage">actionGetPackage</a></code> | <code>string</code> | [Read] iot:GetPackage. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetPackageConfiguration">actionGetPackageConfiguration</a></code> | <code>string</code> | [Read] iot:GetPackageConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetPackageVersion">actionGetPackageVersion</a></code> | <code>string</code> | [Read] iot:GetPackageVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetPercentiles">actionGetPercentiles</a></code> | <code>string</code> | [Read] iot:GetPercentiles. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] iot:GetPolicy. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetPolicyVersion">actionGetPolicyVersion</a></code> | <code>string</code> | [Read] iot:GetPolicyVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetRegistrationCode">actionGetRegistrationCode</a></code> | <code>string</code> | [Read] iot:GetRegistrationCode. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetRetainedMessage">actionGetRetainedMessage</a></code> | <code>string</code> | [Read] iot:GetRetainedMessage. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetStatistics">actionGetStatistics</a></code> | <code>string</code> | [Read] iot:GetStatistics. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetThingConnectivityData">actionGetThingConnectivityData</a></code> | <code>string</code> | [Read] iot:GetThingConnectivityData. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetThingShadow">actionGetThingShadow</a></code> | <code>string</code> | [Read] iot:GetThingShadow. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetTopicRule">actionGetTopicRule</a></code> | <code>string</code> | [Read] iot:GetTopicRule. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetTopicRuleDestination">actionGetTopicRuleDestination</a></code> | <code>string</code> | [Read] iot:GetTopicRuleDestination. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionGetV2LoggingOptions">actionGetV2LoggingOptions</a></code> | <code>string</code> | [Read] iot:GetV2LoggingOptions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionSetDefaultAuthorizer">actionSetDefaultAuthorizer</a></code> | <code>string</code> | [PermissionManagement] iot:SetDefaultAuthorizer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionSetDefaultPolicyVersion">actionSetDefaultPolicyVersion</a></code> | <code>string</code> | [PermissionManagement] iot:SetDefaultPolicyVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionSetLoggingOptions">actionSetLoggingOptions</a></code> | <code>string</code> | [Write] iot:SetLoggingOptions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionSetV2LoggingLevel">actionSetV2LoggingLevel</a></code> | <code>string</code> | [Write] iot:SetV2LoggingLevel. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.actionSetV2LoggingOptions">actionSetV2LoggingOptions</a></code> | <code>string</code> | [Write] iot:SetV2LoggingOptions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AddThingToBillingGroup">AddThingToBillingGroup</a></code> | <code>string</code> | [Write] iot:AddThingToBillingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AddThingToThingGroup">AddThingToThingGroup</a></code> | <code>string</code> | [Write] iot:AddThingToThingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AssociateSbomWithPackageVersion">AssociateSbomWithPackageVersion</a></code> | <code>string</code> | [Write] iot:AssociateSbomWithPackageVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AssociateTargetsWithJob">AssociateTargetsWithJob</a></code> | <code>string</code> | [Write] iot:AssociateTargetsWithJob. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AttachPolicy">AttachPolicy</a></code> | <code>string</code> | [PermissionManagement] iot:AttachPolicy. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AttachPrincipalPolicy">AttachPrincipalPolicy</a></code> | <code>string</code> | [PermissionManagement] iot:AttachPrincipalPolicy. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AttachSecurityProfile">AttachSecurityProfile</a></code> | <code>string</code> | [Write] iot:AttachSecurityProfile. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.AttachThingPrincipal">AttachThingPrincipal</a></code> | <code>string</code> | [Write] iot:AttachThingPrincipal. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CancelAuditMitigationActionsTask">CancelAuditMitigationActionsTask</a></code> | <code>string</code> | [Write] iot:CancelAuditMitigationActionsTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CancelAuditTask">CancelAuditTask</a></code> | <code>string</code> | [Write] iot:CancelAuditTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CancelCertificateTransfer">CancelCertificateTransfer</a></code> | <code>string</code> | [Write] iot:CancelCertificateTransfer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CancelDetectMitigationActionsTask">CancelDetectMitigationActionsTask</a></code> | <code>string</code> | [Write] iot:CancelDetectMitigationActionsTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CancelJob">CancelJob</a></code> | <code>string</code> | [Write] iot:CancelJob. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CancelJobExecution">CancelJobExecution</a></code> | <code>string</code> | [Write] iot:CancelJobExecution. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ClearDefaultAuthorizer">ClearDefaultAuthorizer</a></code> | <code>string</code> | [Write] iot:ClearDefaultAuthorizer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CloseTunnel">CloseTunnel</a></code> | <code>string</code> | [Write] iot:CloseTunnel. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ConfirmTopicRuleDestination">ConfirmTopicRuleDestination</a></code> | <code>string</code> | [Write] iot:ConfirmTopicRuleDestination. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.Connect">Connect</a></code> | <code>string</code> | [Write] iot:Connect. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateAuditSuppression">CreateAuditSuppression</a></code> | <code>string</code> | [Write] iot:CreateAuditSuppression. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateAuthorizer">CreateAuthorizer</a></code> | <code>string</code> | [Write] iot:CreateAuthorizer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateBillingGroup">CreateBillingGroup</a></code> | <code>string</code> | [Write] iot:CreateBillingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateCertificateFromCsr">CreateCertificateFromCsr</a></code> | <code>string</code> | [Write] iot:CreateCertificateFromCsr. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateCertificateProvider">CreateCertificateProvider</a></code> | <code>string</code> | [Write] iot:CreateCertificateProvider. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateCommand">CreateCommand</a></code> | <code>string</code> | [Write] iot:CreateCommand. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateCustomMetric">CreateCustomMetric</a></code> | <code>string</code> | [Write] iot:CreateCustomMetric. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateDimension">CreateDimension</a></code> | <code>string</code> | [Write] iot:CreateDimension. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateDomainConfiguration">CreateDomainConfiguration</a></code> | <code>string</code> | [Write] iot:CreateDomainConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateDynamicThingGroup">CreateDynamicThingGroup</a></code> | <code>string</code> | [Write] iot:CreateDynamicThingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateFleetMetric">CreateFleetMetric</a></code> | <code>string</code> | [Write] iot:CreateFleetMetric. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateJob">CreateJob</a></code> | <code>string</code> | [Write] iot:CreateJob. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateJobTemplate">CreateJobTemplate</a></code> | <code>string</code> | [Write] iot:CreateJobTemplate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateKeysAndCertificate">CreateKeysAndCertificate</a></code> | <code>string</code> | [Write] iot:CreateKeysAndCertificate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateMitigationAction">CreateMitigationAction</a></code> | <code>string</code> | [Write] iot:CreateMitigationAction. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateOTAUpdate">CreateOTAUpdate</a></code> | <code>string</code> | [Write] iot:CreateOTAUpdate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreatePackage">CreatePackage</a></code> | <code>string</code> | [Write] iot:CreatePackage. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreatePackageVersion">CreatePackageVersion</a></code> | <code>string</code> | [Write] iot:CreatePackageVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreatePolicy">CreatePolicy</a></code> | <code>string</code> | [PermissionManagement] iot:CreatePolicy. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreatePolicyVersion">CreatePolicyVersion</a></code> | <code>string</code> | [PermissionManagement] iot:CreatePolicyVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateProvisioningClaim">CreateProvisioningClaim</a></code> | <code>string</code> | [Write] iot:CreateProvisioningClaim. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateProvisioningTemplate">CreateProvisioningTemplate</a></code> | <code>string</code> | [Write] iot:CreateProvisioningTemplate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateProvisioningTemplateVersion">CreateProvisioningTemplateVersion</a></code> | <code>string</code> | [Write] iot:CreateProvisioningTemplateVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateRoleAlias">CreateRoleAlias</a></code> | <code>string</code> | [Write] iot:CreateRoleAlias. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateScheduledAudit">CreateScheduledAudit</a></code> | <code>string</code> | [Write] iot:CreateScheduledAudit. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateSecurityProfile">CreateSecurityProfile</a></code> | <code>string</code> | [Write] iot:CreateSecurityProfile. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateStream">CreateStream</a></code> | <code>string</code> | [Write] iot:CreateStream. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateThing">CreateThing</a></code> | <code>string</code> | [Write] iot:CreateThing. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateThingGroup">CreateThingGroup</a></code> | <code>string</code> | [Write] iot:CreateThingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateThingType">CreateThingType</a></code> | <code>string</code> | [Write] iot:CreateThingType. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateTopicRule">CreateTopicRule</a></code> | <code>string</code> | [Write] iot:CreateTopicRule. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.CreateTopicRuleDestination">CreateTopicRuleDestination</a></code> | <code>string</code> | [Write] iot:CreateTopicRuleDestination. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteAccountAuditConfiguration">DeleteAccountAuditConfiguration</a></code> | <code>string</code> | [Write] iot:DeleteAccountAuditConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteAuditSuppression">DeleteAuditSuppression</a></code> | <code>string</code> | [Write] iot:DeleteAuditSuppression. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteAuthorizer">DeleteAuthorizer</a></code> | <code>string</code> | [Write] iot:DeleteAuthorizer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteBillingGroup">DeleteBillingGroup</a></code> | <code>string</code> | [Write] iot:DeleteBillingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteCACertificate">DeleteCACertificate</a></code> | <code>string</code> | [Write] iot:DeleteCACertificate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteCertificate">DeleteCertificate</a></code> | <code>string</code> | [Write] iot:DeleteCertificate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteCertificateProvider">DeleteCertificateProvider</a></code> | <code>string</code> | [Write] iot:DeleteCertificateProvider. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteCommand">DeleteCommand</a></code> | <code>string</code> | [Write] iot:DeleteCommand. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteCommandExecution">DeleteCommandExecution</a></code> | <code>string</code> | [Write] iot:DeleteCommandExecution. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] iot:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteCustomMetric">DeleteCustomMetric</a></code> | <code>string</code> | [Write] iot:DeleteCustomMetric. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteDimension">DeleteDimension</a></code> | <code>string</code> | [Write] iot:DeleteDimension. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteDomainConfiguration">DeleteDomainConfiguration</a></code> | <code>string</code> | [Write] iot:DeleteDomainConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteDynamicThingGroup">DeleteDynamicThingGroup</a></code> | <code>string</code> | [Write] iot:DeleteDynamicThingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteFleetMetric">DeleteFleetMetric</a></code> | <code>string</code> | [Write] iot:DeleteFleetMetric. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteJob">DeleteJob</a></code> | <code>string</code> | [Write] iot:DeleteJob. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteJobExecution">DeleteJobExecution</a></code> | <code>string</code> | [Write] iot:DeleteJobExecution. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteJobTemplate">DeleteJobTemplate</a></code> | <code>string</code> | [Write] iot:DeleteJobTemplate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteMitigationAction">DeleteMitigationAction</a></code> | <code>string</code> | [Write] iot:DeleteMitigationAction. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteOTAUpdate">DeleteOTAUpdate</a></code> | <code>string</code> | [Write] iot:DeleteOTAUpdate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeletePackage">DeletePackage</a></code> | <code>string</code> | [Write] iot:DeletePackage. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeletePackageVersion">DeletePackageVersion</a></code> | <code>string</code> | [Write] iot:DeletePackageVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [PermissionManagement] iot:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeletePolicyVersion">DeletePolicyVersion</a></code> | <code>string</code> | [PermissionManagement] iot:DeletePolicyVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteProvisioningTemplate">DeleteProvisioningTemplate</a></code> | <code>string</code> | [Write] iot:DeleteProvisioningTemplate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteProvisioningTemplateVersion">DeleteProvisioningTemplateVersion</a></code> | <code>string</code> | [Write] iot:DeleteProvisioningTemplateVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteRegistrationCode">DeleteRegistrationCode</a></code> | <code>string</code> | [Write] iot:DeleteRegistrationCode. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteRoleAlias">DeleteRoleAlias</a></code> | <code>string</code> | [Write] iot:DeleteRoleAlias. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteScheduledAudit">DeleteScheduledAudit</a></code> | <code>string</code> | [Write] iot:DeleteScheduledAudit. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteSecurityProfile">DeleteSecurityProfile</a></code> | <code>string</code> | [Write] iot:DeleteSecurityProfile. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteStream">DeleteStream</a></code> | <code>string</code> | [Write] iot:DeleteStream. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteThing">DeleteThing</a></code> | <code>string</code> | [Write] iot:DeleteThing. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteThingGroup">DeleteThingGroup</a></code> | <code>string</code> | [Write] iot:DeleteThingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteThingShadow">DeleteThingShadow</a></code> | <code>string</code> | [Write] iot:DeleteThingShadow. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteThingType">DeleteThingType</a></code> | <code>string</code> | [Write] iot:DeleteThingType. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteTopicRule">DeleteTopicRule</a></code> | <code>string</code> | [Write] iot:DeleteTopicRule. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteTopicRuleDestination">DeleteTopicRuleDestination</a></code> | <code>string</code> | [Write] iot:DeleteTopicRuleDestination. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeleteV2LoggingLevel">DeleteV2LoggingLevel</a></code> | <code>string</code> | [Write] iot:DeleteV2LoggingLevel. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DeprecateThingType">DeprecateThingType</a></code> | <code>string</code> | [Write] iot:DeprecateThingType. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeAccountAuditConfiguration">DescribeAccountAuditConfiguration</a></code> | <code>string</code> | [Read] iot:DescribeAccountAuditConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeAuditFinding">DescribeAuditFinding</a></code> | <code>string</code> | [Read] iot:DescribeAuditFinding. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeAuditMitigationActionsTask">DescribeAuditMitigationActionsTask</a></code> | <code>string</code> | [Read] iot:DescribeAuditMitigationActionsTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeAuditSuppression">DescribeAuditSuppression</a></code> | <code>string</code> | [Read] iot:DescribeAuditSuppression. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeAuditTask">DescribeAuditTask</a></code> | <code>string</code> | [Read] iot:DescribeAuditTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeAuthorizer">DescribeAuthorizer</a></code> | <code>string</code> | [Read] iot:DescribeAuthorizer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeBillingGroup">DescribeBillingGroup</a></code> | <code>string</code> | [Read] iot:DescribeBillingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeCACertificate">DescribeCACertificate</a></code> | <code>string</code> | [Read] iot:DescribeCACertificate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeCertificate">DescribeCertificate</a></code> | <code>string</code> | [Read] iot:DescribeCertificate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeCertificateProvider">DescribeCertificateProvider</a></code> | <code>string</code> | [Read] iot:DescribeCertificateProvider. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeCustomMetric">DescribeCustomMetric</a></code> | <code>string</code> | [Read] iot:DescribeCustomMetric. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeDefaultAuthorizer">DescribeDefaultAuthorizer</a></code> | <code>string</code> | [Read] iot:DescribeDefaultAuthorizer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeDetectMitigationActionsTask">DescribeDetectMitigationActionsTask</a></code> | <code>string</code> | [Read] iot:DescribeDetectMitigationActionsTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeDimension">DescribeDimension</a></code> | <code>string</code> | [Read] iot:DescribeDimension. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeDomainConfiguration">DescribeDomainConfiguration</a></code> | <code>string</code> | [Read] iot:DescribeDomainConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeEncryptionConfiguration">DescribeEncryptionConfiguration</a></code> | <code>string</code> | [Read] iot:DescribeEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeEndpoint">DescribeEndpoint</a></code> | <code>string</code> | [Read] iot:DescribeEndpoint. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeEventConfigurations">DescribeEventConfigurations</a></code> | <code>string</code> | [Read] iot:DescribeEventConfigurations. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeFleetMetric">DescribeFleetMetric</a></code> | <code>string</code> | [Read] iot:DescribeFleetMetric. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeIndex">DescribeIndex</a></code> | <code>string</code> | [Read] iot:DescribeIndex. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeJob">DescribeJob</a></code> | <code>string</code> | [Read] iot:DescribeJob. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeJobExecution">DescribeJobExecution</a></code> | <code>string</code> | [Read] iot:DescribeJobExecution. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeJobTemplate">DescribeJobTemplate</a></code> | <code>string</code> | [Read] iot:DescribeJobTemplate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeManagedJobTemplate">DescribeManagedJobTemplate</a></code> | <code>string</code> | [Read] iot:DescribeManagedJobTemplate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeMitigationAction">DescribeMitigationAction</a></code> | <code>string</code> | [Read] iot:DescribeMitigationAction. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeProvisioningTemplate">DescribeProvisioningTemplate</a></code> | <code>string</code> | [Read] iot:DescribeProvisioningTemplate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeProvisioningTemplateVersion">DescribeProvisioningTemplateVersion</a></code> | <code>string</code> | [Read] iot:DescribeProvisioningTemplateVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeRoleAlias">DescribeRoleAlias</a></code> | <code>string</code> | [Read] iot:DescribeRoleAlias. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeScheduledAudit">DescribeScheduledAudit</a></code> | <code>string</code> | [Read] iot:DescribeScheduledAudit. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeSecurityProfile">DescribeSecurityProfile</a></code> | <code>string</code> | [Read] iot:DescribeSecurityProfile. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeStream">DescribeStream</a></code> | <code>string</code> | [Read] iot:DescribeStream. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeThing">DescribeThing</a></code> | <code>string</code> | [Read] iot:DescribeThing. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeThingGroup">DescribeThingGroup</a></code> | <code>string</code> | [Read] iot:DescribeThingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeThingRegistrationTask">DescribeThingRegistrationTask</a></code> | <code>string</code> | [Read] iot:DescribeThingRegistrationTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeThingType">DescribeThingType</a></code> | <code>string</code> | [Read] iot:DescribeThingType. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DescribeTunnel">DescribeTunnel</a></code> | <code>string</code> | [Read] iot:DescribeTunnel. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DetachPolicy">DetachPolicy</a></code> | <code>string</code> | [PermissionManagement] iot:DetachPolicy. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DetachPrincipalPolicy">DetachPrincipalPolicy</a></code> | <code>string</code> | [PermissionManagement] iot:DetachPrincipalPolicy. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DetachSecurityProfile">DetachSecurityProfile</a></code> | <code>string</code> | [Write] iot:DetachSecurityProfile. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DetachThingPrincipal">DetachThingPrincipal</a></code> | <code>string</code> | [Write] iot:DetachThingPrincipal. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DisableTopicRule">DisableTopicRule</a></code> | <code>string</code> | [Write] iot:DisableTopicRule. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.DisassociateSbomFromPackageVersion">DisassociateSbomFromPackageVersion</a></code> | <code>string</code> | [Write] iot:DisassociateSbomFromPackageVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.EnableTopicRule">EnableTopicRule</a></code> | <code>string</code> | [Write] iot:EnableTopicRule. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListActiveViolations">ListActiveViolations</a></code> | <code>string</code> | [List] iot:ListActiveViolations. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListAttachedPolicies">ListAttachedPolicies</a></code> | <code>string</code> | [List] iot:ListAttachedPolicies. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListAuditFindings">ListAuditFindings</a></code> | <code>string</code> | [List] iot:ListAuditFindings. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListAuditMitigationActionsExecutions">ListAuditMitigationActionsExecutions</a></code> | <code>string</code> | [List] iot:ListAuditMitigationActionsExecutions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListAuditMitigationActionsTasks">ListAuditMitigationActionsTasks</a></code> | <code>string</code> | [List] iot:ListAuditMitigationActionsTasks. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListAuditSuppressions">ListAuditSuppressions</a></code> | <code>string</code> | [List] iot:ListAuditSuppressions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListAuditTasks">ListAuditTasks</a></code> | <code>string</code> | [List] iot:ListAuditTasks. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListAuthorizers">ListAuthorizers</a></code> | <code>string</code> | [List] iot:ListAuthorizers. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListBillingGroups">ListBillingGroups</a></code> | <code>string</code> | [List] iot:ListBillingGroups. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListCACertificates">ListCACertificates</a></code> | <code>string</code> | [List] iot:ListCACertificates. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListCertificateProviders">ListCertificateProviders</a></code> | <code>string</code> | [List] iot:ListCertificateProviders. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListCertificates">ListCertificates</a></code> | <code>string</code> | [List] iot:ListCertificates. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListCertificatesByCA">ListCertificatesByCA</a></code> | <code>string</code> | [List] iot:ListCertificatesByCA. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListCommandExecutions">ListCommandExecutions</a></code> | <code>string</code> | [List] iot:ListCommandExecutions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListCommands">ListCommands</a></code> | <code>string</code> | [List] iot:ListCommands. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListCustomMetrics">ListCustomMetrics</a></code> | <code>string</code> | [List] iot:ListCustomMetrics. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListDetectMitigationActionsExecutions">ListDetectMitigationActionsExecutions</a></code> | <code>string</code> | [List] iot:ListDetectMitigationActionsExecutions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListDetectMitigationActionsTasks">ListDetectMitigationActionsTasks</a></code> | <code>string</code> | [List] iot:ListDetectMitigationActionsTasks. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListDimensions">ListDimensions</a></code> | <code>string</code> | [List] iot:ListDimensions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListDomainConfigurations">ListDomainConfigurations</a></code> | <code>string</code> | [List] iot:ListDomainConfigurations. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListFleetMetrics">ListFleetMetrics</a></code> | <code>string</code> | [List] iot:ListFleetMetrics. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListIndices">ListIndices</a></code> | <code>string</code> | [List] iot:ListIndices. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListJobExecutionsForJob">ListJobExecutionsForJob</a></code> | <code>string</code> | [List] iot:ListJobExecutionsForJob. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListJobExecutionsForThing">ListJobExecutionsForThing</a></code> | <code>string</code> | [List] iot:ListJobExecutionsForThing. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] iot:ListJobs. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListJobTemplates">ListJobTemplates</a></code> | <code>string</code> | [List] iot:ListJobTemplates. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListManagedJobTemplates">ListManagedJobTemplates</a></code> | <code>string</code> | [List] iot:ListManagedJobTemplates. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListMetricValues">ListMetricValues</a></code> | <code>string</code> | [List] iot:ListMetricValues. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListMitigationActions">ListMitigationActions</a></code> | <code>string</code> | [List] iot:ListMitigationActions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListNamedShadowsForThing">ListNamedShadowsForThing</a></code> | <code>string</code> | [List] iot:ListNamedShadowsForThing. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListOTAUpdates">ListOTAUpdates</a></code> | <code>string</code> | [List] iot:ListOTAUpdates. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListOutgoingCertificates">ListOutgoingCertificates</a></code> | <code>string</code> | [List] iot:ListOutgoingCertificates. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListPackages">ListPackages</a></code> | <code>string</code> | [List] iot:ListPackages. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListPackageVersions">ListPackageVersions</a></code> | <code>string</code> | [List] iot:ListPackageVersions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListPolicies">ListPolicies</a></code> | <code>string</code> | [List] iot:ListPolicies. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListPolicyPrincipals">ListPolicyPrincipals</a></code> | <code>string</code> | [List] iot:ListPolicyPrincipals. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListPolicyVersions">ListPolicyVersions</a></code> | <code>string</code> | [List] iot:ListPolicyVersions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListPrincipalPolicies">ListPrincipalPolicies</a></code> | <code>string</code> | [List] iot:ListPrincipalPolicies. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListPrincipalThings">ListPrincipalThings</a></code> | <code>string</code> | [List] iot:ListPrincipalThings. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListPrincipalThingsV2">ListPrincipalThingsV2</a></code> | <code>string</code> | [List] iot:ListPrincipalThingsV2. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListProvisioningTemplates">ListProvisioningTemplates</a></code> | <code>string</code> | [List] iot:ListProvisioningTemplates. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListProvisioningTemplateVersions">ListProvisioningTemplateVersions</a></code> | <code>string</code> | [List] iot:ListProvisioningTemplateVersions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListRelatedResourcesForAuditFinding">ListRelatedResourcesForAuditFinding</a></code> | <code>string</code> | [List] iot:ListRelatedResourcesForAuditFinding. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListRetainedMessages">ListRetainedMessages</a></code> | <code>string</code> | [List] iot:ListRetainedMessages. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListRoleAliases">ListRoleAliases</a></code> | <code>string</code> | [List] iot:ListRoleAliases. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListSbomValidationResults">ListSbomValidationResults</a></code> | <code>string</code> | [List] iot:ListSbomValidationResults. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListScheduledAudits">ListScheduledAudits</a></code> | <code>string</code> | [List] iot:ListScheduledAudits. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListSecurityProfiles">ListSecurityProfiles</a></code> | <code>string</code> | [List] iot:ListSecurityProfiles. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListSecurityProfilesForTarget">ListSecurityProfilesForTarget</a></code> | <code>string</code> | [List] iot:ListSecurityProfilesForTarget. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListStreams">ListStreams</a></code> | <code>string</code> | [List] iot:ListStreams. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string</code> | [Write] iot:ListSubscriptions. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] iot:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListTargetsForPolicy">ListTargetsForPolicy</a></code> | <code>string</code> | [List] iot:ListTargetsForPolicy. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListTargetsForSecurityProfile">ListTargetsForSecurityProfile</a></code> | <code>string</code> | [List] iot:ListTargetsForSecurityProfile. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListThingGroups">ListThingGroups</a></code> | <code>string</code> | [List] iot:ListThingGroups. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListThingGroupsForThing">ListThingGroupsForThing</a></code> | <code>string</code> | [List] iot:ListThingGroupsForThing. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListThingPrincipals">ListThingPrincipals</a></code> | <code>string</code> | [List] iot:ListThingPrincipals. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListThingPrincipalsV2">ListThingPrincipalsV2</a></code> | <code>string</code> | [List] iot:ListThingPrincipalsV2. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListThingRegistrationTaskReports">ListThingRegistrationTaskReports</a></code> | <code>string</code> | [List] iot:ListThingRegistrationTaskReports. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListThingRegistrationTasks">ListThingRegistrationTasks</a></code> | <code>string</code> | [List] iot:ListThingRegistrationTasks. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListThings">ListThings</a></code> | <code>string</code> | [List] iot:ListThings. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListThingsInBillingGroup">ListThingsInBillingGroup</a></code> | <code>string</code> | [List] iot:ListThingsInBillingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListThingsInThingGroup">ListThingsInThingGroup</a></code> | <code>string</code> | [List] iot:ListThingsInThingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListThingTypes">ListThingTypes</a></code> | <code>string</code> | [List] iot:ListThingTypes. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListTopicRuleDestinations">ListTopicRuleDestinations</a></code> | <code>string</code> | [List] iot:ListTopicRuleDestinations. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListTopicRules">ListTopicRules</a></code> | <code>string</code> | [List] iot:ListTopicRules. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListTunnels">ListTunnels</a></code> | <code>string</code> | [List] iot:ListTunnels. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListV2LoggingLevels">ListV2LoggingLevels</a></code> | <code>string</code> | [List] iot:ListV2LoggingLevels. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ListViolationEvents">ListViolationEvents</a></code> | <code>string</code> | [List] iot:ListViolationEvents. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.OpenTunnel">OpenTunnel</a></code> | <code>string</code> | [Write] iot:OpenTunnel. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.Publish">Publish</a></code> | <code>string</code> | [Write] iot:Publish. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.PutVerificationStateOnViolation">PutVerificationStateOnViolation</a></code> | <code>string</code> | [Write] iot:PutVerificationStateOnViolation. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.Receive">Receive</a></code> | <code>string</code> | [Write] iot:Receive. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.RegisterCACertificate">RegisterCACertificate</a></code> | <code>string</code> | [Write] iot:RegisterCACertificate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.RegisterCertificate">RegisterCertificate</a></code> | <code>string</code> | [Write] iot:RegisterCertificate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.RegisterCertificateWithoutCA">RegisterCertificateWithoutCA</a></code> | <code>string</code> | [Write] iot:RegisterCertificateWithoutCA. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.RegisterThing">RegisterThing</a></code> | <code>string</code> | [Write] iot:RegisterThing. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.RejectCertificateTransfer">RejectCertificateTransfer</a></code> | <code>string</code> | [Write] iot:RejectCertificateTransfer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.RemoveThingFromBillingGroup">RemoveThingFromBillingGroup</a></code> | <code>string</code> | [Write] iot:RemoveThingFromBillingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.RemoveThingFromThingGroup">RemoveThingFromThingGroup</a></code> | <code>string</code> | [Write] iot:RemoveThingFromThingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ReplaceTopicRule">ReplaceTopicRule</a></code> | <code>string</code> | [Write] iot:ReplaceTopicRule. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.RetainPublish">RetainPublish</a></code> | <code>string</code> | [Write] iot:RetainPublish. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.RotateTunnelAccessToken">RotateTunnelAccessToken</a></code> | <code>string</code> | [Write] iot:RotateTunnelAccessToken. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.SearchIndex">SearchIndex</a></code> | <code>string</code> | [Read] iot:SearchIndex. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.SendDirectMessage">SendDirectMessage</a></code> | <code>string</code> | [Write] iot:SendDirectMessage. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.StartAuditMitigationActionsTask">StartAuditMitigationActionsTask</a></code> | <code>string</code> | [Write] iot:StartAuditMitigationActionsTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.StartCommandExecution">StartCommandExecution</a></code> | <code>string</code> | [Write] iot:StartCommandExecution. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.StartDetectMitigationActionsTask">StartDetectMitigationActionsTask</a></code> | <code>string</code> | [Write] iot:StartDetectMitigationActionsTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.StartOnDemandAuditTask">StartOnDemandAuditTask</a></code> | <code>string</code> | [Write] iot:StartOnDemandAuditTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.StartThingRegistrationTask">StartThingRegistrationTask</a></code> | <code>string</code> | [Write] iot:StartThingRegistrationTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.StopThingRegistrationTask">StopThingRegistrationTask</a></code> | <code>string</code> | [Write] iot:StopThingRegistrationTask. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.Subscribe">Subscribe</a></code> | <code>string</code> | [Write] iot:Subscribe. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] iot:TagResource. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.TestAuthorization">TestAuthorization</a></code> | <code>string</code> | [Read] iot:TestAuthorization. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.TestInvokeAuthorizer">TestInvokeAuthorizer</a></code> | <code>string</code> | [Read] iot:TestInvokeAuthorizer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.TransferCertificate">TransferCertificate</a></code> | <code>string</code> | [Write] iot:TransferCertificate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] iot:UntagResource. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateAccountAuditConfiguration">UpdateAccountAuditConfiguration</a></code> | <code>string</code> | [Write] iot:UpdateAccountAuditConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateAuditSuppression">UpdateAuditSuppression</a></code> | <code>string</code> | [Write] iot:UpdateAuditSuppression. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateAuthorizer">UpdateAuthorizer</a></code> | <code>string</code> | [Write] iot:UpdateAuthorizer. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateBillingGroup">UpdateBillingGroup</a></code> | <code>string</code> | [Write] iot:UpdateBillingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateCACertificate">UpdateCACertificate</a></code> | <code>string</code> | [Write] iot:UpdateCACertificate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateCertificate">UpdateCertificate</a></code> | <code>string</code> | [Write] iot:UpdateCertificate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateCertificateProvider">UpdateCertificateProvider</a></code> | <code>string</code> | [Write] iot:UpdateCertificateProvider. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateCommand">UpdateCommand</a></code> | <code>string</code> | [Write] iot:UpdateCommand. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateCustomMetric">UpdateCustomMetric</a></code> | <code>string</code> | [Write] iot:UpdateCustomMetric. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateDimension">UpdateDimension</a></code> | <code>string</code> | [Write] iot:UpdateDimension. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateDomainConfiguration">UpdateDomainConfiguration</a></code> | <code>string</code> | [Write] iot:UpdateDomainConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateDynamicThingGroup">UpdateDynamicThingGroup</a></code> | <code>string</code> | [Write] iot:UpdateDynamicThingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateEncryptionConfiguration">UpdateEncryptionConfiguration</a></code> | <code>string</code> | [Write] iot:UpdateEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateEventConfigurations">UpdateEventConfigurations</a></code> | <code>string</code> | [Write] iot:UpdateEventConfigurations. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateFleetMetric">UpdateFleetMetric</a></code> | <code>string</code> | [Write] iot:UpdateFleetMetric. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateIndexingConfiguration">UpdateIndexingConfiguration</a></code> | <code>string</code> | [Write] iot:UpdateIndexingConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateJob">UpdateJob</a></code> | <code>string</code> | [Write] iot:UpdateJob. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateMitigationAction">UpdateMitigationAction</a></code> | <code>string</code> | [Write] iot:UpdateMitigationAction. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdatePackage">UpdatePackage</a></code> | <code>string</code> | [Write] iot:UpdatePackage. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdatePackageConfiguration">UpdatePackageConfiguration</a></code> | <code>string</code> | [Write] iot:UpdatePackageConfiguration. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdatePackageVersion">UpdatePackageVersion</a></code> | <code>string</code> | [Write] iot:UpdatePackageVersion. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateProvisioningTemplate">UpdateProvisioningTemplate</a></code> | <code>string</code> | [Write] iot:UpdateProvisioningTemplate. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateRoleAlias">UpdateRoleAlias</a></code> | <code>string</code> | [Write] iot:UpdateRoleAlias. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateScheduledAudit">UpdateScheduledAudit</a></code> | <code>string</code> | [Write] iot:UpdateScheduledAudit. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateSecurityProfile">UpdateSecurityProfile</a></code> | <code>string</code> | [Write] iot:UpdateSecurityProfile. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateStream">UpdateStream</a></code> | <code>string</code> | [Write] iot:UpdateStream. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateThing">UpdateThing</a></code> | <code>string</code> | [Write] iot:UpdateThing. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateThingGroup">UpdateThingGroup</a></code> | <code>string</code> | [Write] iot:UpdateThingGroup. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateThingGroupsForThing">UpdateThingGroupsForThing</a></code> | <code>string</code> | [Write] iot:UpdateThingGroupsForThing. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateThingShadow">UpdateThingShadow</a></code> | <code>string</code> | [Write] iot:UpdateThingShadow. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateThingType">UpdateThingType</a></code> | <code>string</code> | [Write] iot:UpdateThingType. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.UpdateTopicRuleDestination">UpdateTopicRuleDestination</a></code> | <code>string</code> | [Write] iot:UpdateTopicRuleDestination. |
| <code><a href="#@cdk_utils/iam.iot.IotActions.property.ValidateSecurityProfileBehaviors">ValidateSecurityProfileBehaviors</a></code> | <code>string</code> | [Read] iot:ValidateSecurityProfileBehaviors. |

---

##### `AcceptCertificateTransfer`<sup>Required</sup> <a name="AcceptCertificateTransfer" id="@cdk_utils/iam.iot.IotActions.property.AcceptCertificateTransfer"></a>

```typescript
public readonly AcceptCertificateTransfer: string;
```

- *Type:* string

[Write] iot:AcceptCertificateTransfer.

---

##### `actionGetBehaviorModelTrainingSummaries`<sup>Required</sup> <a name="actionGetBehaviorModelTrainingSummaries" id="@cdk_utils/iam.iot.IotActions.property.actionGetBehaviorModelTrainingSummaries"></a>

```typescript
public readonly actionGetBehaviorModelTrainingSummaries: string;
```

- *Type:* string

[List] iot:GetBehaviorModelTrainingSummaries.

---

##### `actionGetBucketsAggregation`<sup>Required</sup> <a name="actionGetBucketsAggregation" id="@cdk_utils/iam.iot.IotActions.property.actionGetBucketsAggregation"></a>

```typescript
public readonly actionGetBucketsAggregation: string;
```

- *Type:* string

[Read] iot:GetBucketsAggregation.

---

##### `actionGetCardinality`<sup>Required</sup> <a name="actionGetCardinality" id="@cdk_utils/iam.iot.IotActions.property.actionGetCardinality"></a>

```typescript
public readonly actionGetCardinality: string;
```

- *Type:* string

[Read] iot:GetCardinality.

---

##### `actionGetCommand`<sup>Required</sup> <a name="actionGetCommand" id="@cdk_utils/iam.iot.IotActions.property.actionGetCommand"></a>

```typescript
public readonly actionGetCommand: string;
```

- *Type:* string

[Read] iot:GetCommand.

---

##### `actionGetCommandExecution`<sup>Required</sup> <a name="actionGetCommandExecution" id="@cdk_utils/iam.iot.IotActions.property.actionGetCommandExecution"></a>

```typescript
public readonly actionGetCommandExecution: string;
```

- *Type:* string

[Read] iot:GetCommandExecution.

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.iot.IotActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Write] iot:GetConnection.

---

##### `actionGetEffectivePolicies`<sup>Required</sup> <a name="actionGetEffectivePolicies" id="@cdk_utils/iam.iot.IotActions.property.actionGetEffectivePolicies"></a>

```typescript
public readonly actionGetEffectivePolicies: string;
```

- *Type:* string

[Read] iot:GetEffectivePolicies.

---

##### `actionGetIndexingConfiguration`<sup>Required</sup> <a name="actionGetIndexingConfiguration" id="@cdk_utils/iam.iot.IotActions.property.actionGetIndexingConfiguration"></a>

```typescript
public readonly actionGetIndexingConfiguration: string;
```

- *Type:* string

[Read] iot:GetIndexingConfiguration.

---

##### `actionGetJobDocument`<sup>Required</sup> <a name="actionGetJobDocument" id="@cdk_utils/iam.iot.IotActions.property.actionGetJobDocument"></a>

```typescript
public readonly actionGetJobDocument: string;
```

- *Type:* string

[Read] iot:GetJobDocument.

---

##### `actionGetLoggingOptions`<sup>Required</sup> <a name="actionGetLoggingOptions" id="@cdk_utils/iam.iot.IotActions.property.actionGetLoggingOptions"></a>

```typescript
public readonly actionGetLoggingOptions: string;
```

- *Type:* string

[Read] iot:GetLoggingOptions.

---

##### `actionGetOTAUpdate`<sup>Required</sup> <a name="actionGetOTAUpdate" id="@cdk_utils/iam.iot.IotActions.property.actionGetOTAUpdate"></a>

```typescript
public readonly actionGetOTAUpdate: string;
```

- *Type:* string

[Read] iot:GetOTAUpdate.

---

##### `actionGetPackage`<sup>Required</sup> <a name="actionGetPackage" id="@cdk_utils/iam.iot.IotActions.property.actionGetPackage"></a>

```typescript
public readonly actionGetPackage: string;
```

- *Type:* string

[Read] iot:GetPackage.

---

##### `actionGetPackageConfiguration`<sup>Required</sup> <a name="actionGetPackageConfiguration" id="@cdk_utils/iam.iot.IotActions.property.actionGetPackageConfiguration"></a>

```typescript
public readonly actionGetPackageConfiguration: string;
```

- *Type:* string

[Read] iot:GetPackageConfiguration.

---

##### `actionGetPackageVersion`<sup>Required</sup> <a name="actionGetPackageVersion" id="@cdk_utils/iam.iot.IotActions.property.actionGetPackageVersion"></a>

```typescript
public readonly actionGetPackageVersion: string;
```

- *Type:* string

[Read] iot:GetPackageVersion.

---

##### `actionGetPercentiles`<sup>Required</sup> <a name="actionGetPercentiles" id="@cdk_utils/iam.iot.IotActions.property.actionGetPercentiles"></a>

```typescript
public readonly actionGetPercentiles: string;
```

- *Type:* string

[Read] iot:GetPercentiles.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.iot.IotActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] iot:GetPolicy.

---

##### `actionGetPolicyVersion`<sup>Required</sup> <a name="actionGetPolicyVersion" id="@cdk_utils/iam.iot.IotActions.property.actionGetPolicyVersion"></a>

```typescript
public readonly actionGetPolicyVersion: string;
```

- *Type:* string

[Read] iot:GetPolicyVersion.

---

##### `actionGetRegistrationCode`<sup>Required</sup> <a name="actionGetRegistrationCode" id="@cdk_utils/iam.iot.IotActions.property.actionGetRegistrationCode"></a>

```typescript
public readonly actionGetRegistrationCode: string;
```

- *Type:* string

[Read] iot:GetRegistrationCode.

---

##### `actionGetRetainedMessage`<sup>Required</sup> <a name="actionGetRetainedMessage" id="@cdk_utils/iam.iot.IotActions.property.actionGetRetainedMessage"></a>

```typescript
public readonly actionGetRetainedMessage: string;
```

- *Type:* string

[Read] iot:GetRetainedMessage.

---

##### `actionGetStatistics`<sup>Required</sup> <a name="actionGetStatistics" id="@cdk_utils/iam.iot.IotActions.property.actionGetStatistics"></a>

```typescript
public readonly actionGetStatistics: string;
```

- *Type:* string

[Read] iot:GetStatistics.

---

##### `actionGetThingConnectivityData`<sup>Required</sup> <a name="actionGetThingConnectivityData" id="@cdk_utils/iam.iot.IotActions.property.actionGetThingConnectivityData"></a>

```typescript
public readonly actionGetThingConnectivityData: string;
```

- *Type:* string

[Read] iot:GetThingConnectivityData.

---

##### `actionGetThingShadow`<sup>Required</sup> <a name="actionGetThingShadow" id="@cdk_utils/iam.iot.IotActions.property.actionGetThingShadow"></a>

```typescript
public readonly actionGetThingShadow: string;
```

- *Type:* string

[Read] iot:GetThingShadow.

---

##### `actionGetTopicRule`<sup>Required</sup> <a name="actionGetTopicRule" id="@cdk_utils/iam.iot.IotActions.property.actionGetTopicRule"></a>

```typescript
public readonly actionGetTopicRule: string;
```

- *Type:* string

[Read] iot:GetTopicRule.

---

##### `actionGetTopicRuleDestination`<sup>Required</sup> <a name="actionGetTopicRuleDestination" id="@cdk_utils/iam.iot.IotActions.property.actionGetTopicRuleDestination"></a>

```typescript
public readonly actionGetTopicRuleDestination: string;
```

- *Type:* string

[Read] iot:GetTopicRuleDestination.

---

##### `actionGetV2LoggingOptions`<sup>Required</sup> <a name="actionGetV2LoggingOptions" id="@cdk_utils/iam.iot.IotActions.property.actionGetV2LoggingOptions"></a>

```typescript
public readonly actionGetV2LoggingOptions: string;
```

- *Type:* string

[Read] iot:GetV2LoggingOptions.

---

##### `actionSetDefaultAuthorizer`<sup>Required</sup> <a name="actionSetDefaultAuthorizer" id="@cdk_utils/iam.iot.IotActions.property.actionSetDefaultAuthorizer"></a>

```typescript
public readonly actionSetDefaultAuthorizer: string;
```

- *Type:* string

[PermissionManagement] iot:SetDefaultAuthorizer.

---

##### `actionSetDefaultPolicyVersion`<sup>Required</sup> <a name="actionSetDefaultPolicyVersion" id="@cdk_utils/iam.iot.IotActions.property.actionSetDefaultPolicyVersion"></a>

```typescript
public readonly actionSetDefaultPolicyVersion: string;
```

- *Type:* string

[PermissionManagement] iot:SetDefaultPolicyVersion.

---

##### `actionSetLoggingOptions`<sup>Required</sup> <a name="actionSetLoggingOptions" id="@cdk_utils/iam.iot.IotActions.property.actionSetLoggingOptions"></a>

```typescript
public readonly actionSetLoggingOptions: string;
```

- *Type:* string

[Write] iot:SetLoggingOptions.

---

##### `actionSetV2LoggingLevel`<sup>Required</sup> <a name="actionSetV2LoggingLevel" id="@cdk_utils/iam.iot.IotActions.property.actionSetV2LoggingLevel"></a>

```typescript
public readonly actionSetV2LoggingLevel: string;
```

- *Type:* string

[Write] iot:SetV2LoggingLevel.

---

##### `actionSetV2LoggingOptions`<sup>Required</sup> <a name="actionSetV2LoggingOptions" id="@cdk_utils/iam.iot.IotActions.property.actionSetV2LoggingOptions"></a>

```typescript
public readonly actionSetV2LoggingOptions: string;
```

- *Type:* string

[Write] iot:SetV2LoggingOptions.

---

##### `AddThingToBillingGroup`<sup>Required</sup> <a name="AddThingToBillingGroup" id="@cdk_utils/iam.iot.IotActions.property.AddThingToBillingGroup"></a>

```typescript
public readonly AddThingToBillingGroup: string;
```

- *Type:* string

[Write] iot:AddThingToBillingGroup.

---

##### `AddThingToThingGroup`<sup>Required</sup> <a name="AddThingToThingGroup" id="@cdk_utils/iam.iot.IotActions.property.AddThingToThingGroup"></a>

```typescript
public readonly AddThingToThingGroup: string;
```

- *Type:* string

[Write] iot:AddThingToThingGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iot.IotActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iot.IotActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iot.IotActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iot.IotActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iot.IotActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateSbomWithPackageVersion`<sup>Required</sup> <a name="AssociateSbomWithPackageVersion" id="@cdk_utils/iam.iot.IotActions.property.AssociateSbomWithPackageVersion"></a>

```typescript
public readonly AssociateSbomWithPackageVersion: string;
```

- *Type:* string

[Write] iot:AssociateSbomWithPackageVersion.

---

##### `AssociateTargetsWithJob`<sup>Required</sup> <a name="AssociateTargetsWithJob" id="@cdk_utils/iam.iot.IotActions.property.AssociateTargetsWithJob"></a>

```typescript
public readonly AssociateTargetsWithJob: string;
```

- *Type:* string

[Write] iot:AssociateTargetsWithJob.

---

##### `AttachPolicy`<sup>Required</sup> <a name="AttachPolicy" id="@cdk_utils/iam.iot.IotActions.property.AttachPolicy"></a>

```typescript
public readonly AttachPolicy: string;
```

- *Type:* string

[PermissionManagement] iot:AttachPolicy.

---

##### `AttachPrincipalPolicy`<sup>Required</sup> <a name="AttachPrincipalPolicy" id="@cdk_utils/iam.iot.IotActions.property.AttachPrincipalPolicy"></a>

```typescript
public readonly AttachPrincipalPolicy: string;
```

- *Type:* string

[PermissionManagement] iot:AttachPrincipalPolicy.

---

##### `AttachSecurityProfile`<sup>Required</sup> <a name="AttachSecurityProfile" id="@cdk_utils/iam.iot.IotActions.property.AttachSecurityProfile"></a>

```typescript
public readonly AttachSecurityProfile: string;
```

- *Type:* string

[Write] iot:AttachSecurityProfile.

---

##### `AttachThingPrincipal`<sup>Required</sup> <a name="AttachThingPrincipal" id="@cdk_utils/iam.iot.IotActions.property.AttachThingPrincipal"></a>

```typescript
public readonly AttachThingPrincipal: string;
```

- *Type:* string

[Write] iot:AttachThingPrincipal.

---

##### `CancelAuditMitigationActionsTask`<sup>Required</sup> <a name="CancelAuditMitigationActionsTask" id="@cdk_utils/iam.iot.IotActions.property.CancelAuditMitigationActionsTask"></a>

```typescript
public readonly CancelAuditMitigationActionsTask: string;
```

- *Type:* string

[Write] iot:CancelAuditMitigationActionsTask.

---

##### `CancelAuditTask`<sup>Required</sup> <a name="CancelAuditTask" id="@cdk_utils/iam.iot.IotActions.property.CancelAuditTask"></a>

```typescript
public readonly CancelAuditTask: string;
```

- *Type:* string

[Write] iot:CancelAuditTask.

---

##### `CancelCertificateTransfer`<sup>Required</sup> <a name="CancelCertificateTransfer" id="@cdk_utils/iam.iot.IotActions.property.CancelCertificateTransfer"></a>

```typescript
public readonly CancelCertificateTransfer: string;
```

- *Type:* string

[Write] iot:CancelCertificateTransfer.

---

##### `CancelDetectMitigationActionsTask`<sup>Required</sup> <a name="CancelDetectMitigationActionsTask" id="@cdk_utils/iam.iot.IotActions.property.CancelDetectMitigationActionsTask"></a>

```typescript
public readonly CancelDetectMitigationActionsTask: string;
```

- *Type:* string

[Write] iot:CancelDetectMitigationActionsTask.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.iot.IotActions.property.CancelJob"></a>

```typescript
public readonly CancelJob: string;
```

- *Type:* string

[Write] iot:CancelJob.

---

##### `CancelJobExecution`<sup>Required</sup> <a name="CancelJobExecution" id="@cdk_utils/iam.iot.IotActions.property.CancelJobExecution"></a>

```typescript
public readonly CancelJobExecution: string;
```

- *Type:* string

[Write] iot:CancelJobExecution.

---

##### `ClearDefaultAuthorizer`<sup>Required</sup> <a name="ClearDefaultAuthorizer" id="@cdk_utils/iam.iot.IotActions.property.ClearDefaultAuthorizer"></a>

```typescript
public readonly ClearDefaultAuthorizer: string;
```

- *Type:* string

[Write] iot:ClearDefaultAuthorizer.

---

##### `CloseTunnel`<sup>Required</sup> <a name="CloseTunnel" id="@cdk_utils/iam.iot.IotActions.property.CloseTunnel"></a>

```typescript
public readonly CloseTunnel: string;
```

- *Type:* string

[Write] iot:CloseTunnel.

---

##### `ConfirmTopicRuleDestination`<sup>Required</sup> <a name="ConfirmTopicRuleDestination" id="@cdk_utils/iam.iot.IotActions.property.ConfirmTopicRuleDestination"></a>

```typescript
public readonly ConfirmTopicRuleDestination: string;
```

- *Type:* string

[Write] iot:ConfirmTopicRuleDestination.

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdk_utils/iam.iot.IotActions.property.Connect"></a>

```typescript
public readonly Connect: string;
```

- *Type:* string

[Write] iot:Connect.

---

##### `CreateAuditSuppression`<sup>Required</sup> <a name="CreateAuditSuppression" id="@cdk_utils/iam.iot.IotActions.property.CreateAuditSuppression"></a>

```typescript
public readonly CreateAuditSuppression: string;
```

- *Type:* string

[Write] iot:CreateAuditSuppression.

---

##### `CreateAuthorizer`<sup>Required</sup> <a name="CreateAuthorizer" id="@cdk_utils/iam.iot.IotActions.property.CreateAuthorizer"></a>

```typescript
public readonly CreateAuthorizer: string;
```

- *Type:* string

[Write] iot:CreateAuthorizer.

---

##### `CreateBillingGroup`<sup>Required</sup> <a name="CreateBillingGroup" id="@cdk_utils/iam.iot.IotActions.property.CreateBillingGroup"></a>

```typescript
public readonly CreateBillingGroup: string;
```

- *Type:* string

[Write] iot:CreateBillingGroup.

---

##### `CreateCertificateFromCsr`<sup>Required</sup> <a name="CreateCertificateFromCsr" id="@cdk_utils/iam.iot.IotActions.property.CreateCertificateFromCsr"></a>

```typescript
public readonly CreateCertificateFromCsr: string;
```

- *Type:* string

[Write] iot:CreateCertificateFromCsr.

---

##### `CreateCertificateProvider`<sup>Required</sup> <a name="CreateCertificateProvider" id="@cdk_utils/iam.iot.IotActions.property.CreateCertificateProvider"></a>

```typescript
public readonly CreateCertificateProvider: string;
```

- *Type:* string

[Write] iot:CreateCertificateProvider.

---

##### `CreateCommand`<sup>Required</sup> <a name="CreateCommand" id="@cdk_utils/iam.iot.IotActions.property.CreateCommand"></a>

```typescript
public readonly CreateCommand: string;
```

- *Type:* string

[Write] iot:CreateCommand.

---

##### `CreateCustomMetric`<sup>Required</sup> <a name="CreateCustomMetric" id="@cdk_utils/iam.iot.IotActions.property.CreateCustomMetric"></a>

```typescript
public readonly CreateCustomMetric: string;
```

- *Type:* string

[Write] iot:CreateCustomMetric.

---

##### `CreateDimension`<sup>Required</sup> <a name="CreateDimension" id="@cdk_utils/iam.iot.IotActions.property.CreateDimension"></a>

```typescript
public readonly CreateDimension: string;
```

- *Type:* string

[Write] iot:CreateDimension.

---

##### `CreateDomainConfiguration`<sup>Required</sup> <a name="CreateDomainConfiguration" id="@cdk_utils/iam.iot.IotActions.property.CreateDomainConfiguration"></a>

```typescript
public readonly CreateDomainConfiguration: string;
```

- *Type:* string

[Write] iot:CreateDomainConfiguration.

---

##### `CreateDynamicThingGroup`<sup>Required</sup> <a name="CreateDynamicThingGroup" id="@cdk_utils/iam.iot.IotActions.property.CreateDynamicThingGroup"></a>

```typescript
public readonly CreateDynamicThingGroup: string;
```

- *Type:* string

[Write] iot:CreateDynamicThingGroup.

---

##### `CreateFleetMetric`<sup>Required</sup> <a name="CreateFleetMetric" id="@cdk_utils/iam.iot.IotActions.property.CreateFleetMetric"></a>

```typescript
public readonly CreateFleetMetric: string;
```

- *Type:* string

[Write] iot:CreateFleetMetric.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.iot.IotActions.property.CreateJob"></a>

```typescript
public readonly CreateJob: string;
```

- *Type:* string

[Write] iot:CreateJob.

---

##### `CreateJobTemplate`<sup>Required</sup> <a name="CreateJobTemplate" id="@cdk_utils/iam.iot.IotActions.property.CreateJobTemplate"></a>

```typescript
public readonly CreateJobTemplate: string;
```

- *Type:* string

[Write] iot:CreateJobTemplate.

---

##### `CreateKeysAndCertificate`<sup>Required</sup> <a name="CreateKeysAndCertificate" id="@cdk_utils/iam.iot.IotActions.property.CreateKeysAndCertificate"></a>

```typescript
public readonly CreateKeysAndCertificate: string;
```

- *Type:* string

[Write] iot:CreateKeysAndCertificate.

---

##### `CreateMitigationAction`<sup>Required</sup> <a name="CreateMitigationAction" id="@cdk_utils/iam.iot.IotActions.property.CreateMitigationAction"></a>

```typescript
public readonly CreateMitigationAction: string;
```

- *Type:* string

[Write] iot:CreateMitigationAction.

---

##### `CreateOTAUpdate`<sup>Required</sup> <a name="CreateOTAUpdate" id="@cdk_utils/iam.iot.IotActions.property.CreateOTAUpdate"></a>

```typescript
public readonly CreateOTAUpdate: string;
```

- *Type:* string

[Write] iot:CreateOTAUpdate.

---

##### `CreatePackage`<sup>Required</sup> <a name="CreatePackage" id="@cdk_utils/iam.iot.IotActions.property.CreatePackage"></a>

```typescript
public readonly CreatePackage: string;
```

- *Type:* string

[Write] iot:CreatePackage.

---

##### `CreatePackageVersion`<sup>Required</sup> <a name="CreatePackageVersion" id="@cdk_utils/iam.iot.IotActions.property.CreatePackageVersion"></a>

```typescript
public readonly CreatePackageVersion: string;
```

- *Type:* string

[Write] iot:CreatePackageVersion.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.iot.IotActions.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string;
```

- *Type:* string

[PermissionManagement] iot:CreatePolicy.

---

##### `CreatePolicyVersion`<sup>Required</sup> <a name="CreatePolicyVersion" id="@cdk_utils/iam.iot.IotActions.property.CreatePolicyVersion"></a>

```typescript
public readonly CreatePolicyVersion: string;
```

- *Type:* string

[PermissionManagement] iot:CreatePolicyVersion.

---

##### `CreateProvisioningClaim`<sup>Required</sup> <a name="CreateProvisioningClaim" id="@cdk_utils/iam.iot.IotActions.property.CreateProvisioningClaim"></a>

```typescript
public readonly CreateProvisioningClaim: string;
```

- *Type:* string

[Write] iot:CreateProvisioningClaim.

---

##### `CreateProvisioningTemplate`<sup>Required</sup> <a name="CreateProvisioningTemplate" id="@cdk_utils/iam.iot.IotActions.property.CreateProvisioningTemplate"></a>

```typescript
public readonly CreateProvisioningTemplate: string;
```

- *Type:* string

[Write] iot:CreateProvisioningTemplate.

---

##### `CreateProvisioningTemplateVersion`<sup>Required</sup> <a name="CreateProvisioningTemplateVersion" id="@cdk_utils/iam.iot.IotActions.property.CreateProvisioningTemplateVersion"></a>

```typescript
public readonly CreateProvisioningTemplateVersion: string;
```

- *Type:* string

[Write] iot:CreateProvisioningTemplateVersion.

---

##### `CreateRoleAlias`<sup>Required</sup> <a name="CreateRoleAlias" id="@cdk_utils/iam.iot.IotActions.property.CreateRoleAlias"></a>

```typescript
public readonly CreateRoleAlias: string;
```

- *Type:* string

[Write] iot:CreateRoleAlias.

---

##### `CreateScheduledAudit`<sup>Required</sup> <a name="CreateScheduledAudit" id="@cdk_utils/iam.iot.IotActions.property.CreateScheduledAudit"></a>

```typescript
public readonly CreateScheduledAudit: string;
```

- *Type:* string

[Write] iot:CreateScheduledAudit.

---

##### `CreateSecurityProfile`<sup>Required</sup> <a name="CreateSecurityProfile" id="@cdk_utils/iam.iot.IotActions.property.CreateSecurityProfile"></a>

```typescript
public readonly CreateSecurityProfile: string;
```

- *Type:* string

[Write] iot:CreateSecurityProfile.

---

##### `CreateStream`<sup>Required</sup> <a name="CreateStream" id="@cdk_utils/iam.iot.IotActions.property.CreateStream"></a>

```typescript
public readonly CreateStream: string;
```

- *Type:* string

[Write] iot:CreateStream.

---

##### `CreateThing`<sup>Required</sup> <a name="CreateThing" id="@cdk_utils/iam.iot.IotActions.property.CreateThing"></a>

```typescript
public readonly CreateThing: string;
```

- *Type:* string

[Write] iot:CreateThing.

---

##### `CreateThingGroup`<sup>Required</sup> <a name="CreateThingGroup" id="@cdk_utils/iam.iot.IotActions.property.CreateThingGroup"></a>

```typescript
public readonly CreateThingGroup: string;
```

- *Type:* string

[Write] iot:CreateThingGroup.

---

##### `CreateThingType`<sup>Required</sup> <a name="CreateThingType" id="@cdk_utils/iam.iot.IotActions.property.CreateThingType"></a>

```typescript
public readonly CreateThingType: string;
```

- *Type:* string

[Write] iot:CreateThingType.

---

##### `CreateTopicRule`<sup>Required</sup> <a name="CreateTopicRule" id="@cdk_utils/iam.iot.IotActions.property.CreateTopicRule"></a>

```typescript
public readonly CreateTopicRule: string;
```

- *Type:* string

[Write] iot:CreateTopicRule.

---

##### `CreateTopicRuleDestination`<sup>Required</sup> <a name="CreateTopicRuleDestination" id="@cdk_utils/iam.iot.IotActions.property.CreateTopicRuleDestination"></a>

```typescript
public readonly CreateTopicRuleDestination: string;
```

- *Type:* string

[Write] iot:CreateTopicRuleDestination.

---

##### `DeleteAccountAuditConfiguration`<sup>Required</sup> <a name="DeleteAccountAuditConfiguration" id="@cdk_utils/iam.iot.IotActions.property.DeleteAccountAuditConfiguration"></a>

```typescript
public readonly DeleteAccountAuditConfiguration: string;
```

- *Type:* string

[Write] iot:DeleteAccountAuditConfiguration.

---

##### `DeleteAuditSuppression`<sup>Required</sup> <a name="DeleteAuditSuppression" id="@cdk_utils/iam.iot.IotActions.property.DeleteAuditSuppression"></a>

```typescript
public readonly DeleteAuditSuppression: string;
```

- *Type:* string

[Write] iot:DeleteAuditSuppression.

---

##### `DeleteAuthorizer`<sup>Required</sup> <a name="DeleteAuthorizer" id="@cdk_utils/iam.iot.IotActions.property.DeleteAuthorizer"></a>

```typescript
public readonly DeleteAuthorizer: string;
```

- *Type:* string

[Write] iot:DeleteAuthorizer.

---

##### `DeleteBillingGroup`<sup>Required</sup> <a name="DeleteBillingGroup" id="@cdk_utils/iam.iot.IotActions.property.DeleteBillingGroup"></a>

```typescript
public readonly DeleteBillingGroup: string;
```

- *Type:* string

[Write] iot:DeleteBillingGroup.

---

##### `DeleteCACertificate`<sup>Required</sup> <a name="DeleteCACertificate" id="@cdk_utils/iam.iot.IotActions.property.DeleteCACertificate"></a>

```typescript
public readonly DeleteCACertificate: string;
```

- *Type:* string

[Write] iot:DeleteCACertificate.

---

##### `DeleteCertificate`<sup>Required</sup> <a name="DeleteCertificate" id="@cdk_utils/iam.iot.IotActions.property.DeleteCertificate"></a>

```typescript
public readonly DeleteCertificate: string;
```

- *Type:* string

[Write] iot:DeleteCertificate.

---

##### `DeleteCertificateProvider`<sup>Required</sup> <a name="DeleteCertificateProvider" id="@cdk_utils/iam.iot.IotActions.property.DeleteCertificateProvider"></a>

```typescript
public readonly DeleteCertificateProvider: string;
```

- *Type:* string

[Write] iot:DeleteCertificateProvider.

---

##### `DeleteCommand`<sup>Required</sup> <a name="DeleteCommand" id="@cdk_utils/iam.iot.IotActions.property.DeleteCommand"></a>

```typescript
public readonly DeleteCommand: string;
```

- *Type:* string

[Write] iot:DeleteCommand.

---

##### `DeleteCommandExecution`<sup>Required</sup> <a name="DeleteCommandExecution" id="@cdk_utils/iam.iot.IotActions.property.DeleteCommandExecution"></a>

```typescript
public readonly DeleteCommandExecution: string;
```

- *Type:* string

[Write] iot:DeleteCommandExecution.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.iot.IotActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] iot:DeleteConnection.

---

##### `DeleteCustomMetric`<sup>Required</sup> <a name="DeleteCustomMetric" id="@cdk_utils/iam.iot.IotActions.property.DeleteCustomMetric"></a>

```typescript
public readonly DeleteCustomMetric: string;
```

- *Type:* string

[Write] iot:DeleteCustomMetric.

---

##### `DeleteDimension`<sup>Required</sup> <a name="DeleteDimension" id="@cdk_utils/iam.iot.IotActions.property.DeleteDimension"></a>

```typescript
public readonly DeleteDimension: string;
```

- *Type:* string

[Write] iot:DeleteDimension.

---

##### `DeleteDomainConfiguration`<sup>Required</sup> <a name="DeleteDomainConfiguration" id="@cdk_utils/iam.iot.IotActions.property.DeleteDomainConfiguration"></a>

```typescript
public readonly DeleteDomainConfiguration: string;
```

- *Type:* string

[Write] iot:DeleteDomainConfiguration.

---

##### `DeleteDynamicThingGroup`<sup>Required</sup> <a name="DeleteDynamicThingGroup" id="@cdk_utils/iam.iot.IotActions.property.DeleteDynamicThingGroup"></a>

```typescript
public readonly DeleteDynamicThingGroup: string;
```

- *Type:* string

[Write] iot:DeleteDynamicThingGroup.

---

##### `DeleteFleetMetric`<sup>Required</sup> <a name="DeleteFleetMetric" id="@cdk_utils/iam.iot.IotActions.property.DeleteFleetMetric"></a>

```typescript
public readonly DeleteFleetMetric: string;
```

- *Type:* string

[Write] iot:DeleteFleetMetric.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.iot.IotActions.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string;
```

- *Type:* string

[Write] iot:DeleteJob.

---

##### `DeleteJobExecution`<sup>Required</sup> <a name="DeleteJobExecution" id="@cdk_utils/iam.iot.IotActions.property.DeleteJobExecution"></a>

```typescript
public readonly DeleteJobExecution: string;
```

- *Type:* string

[Write] iot:DeleteJobExecution.

---

##### `DeleteJobTemplate`<sup>Required</sup> <a name="DeleteJobTemplate" id="@cdk_utils/iam.iot.IotActions.property.DeleteJobTemplate"></a>

```typescript
public readonly DeleteJobTemplate: string;
```

- *Type:* string

[Write] iot:DeleteJobTemplate.

---

##### `DeleteMitigationAction`<sup>Required</sup> <a name="DeleteMitigationAction" id="@cdk_utils/iam.iot.IotActions.property.DeleteMitigationAction"></a>

```typescript
public readonly DeleteMitigationAction: string;
```

- *Type:* string

[Write] iot:DeleteMitigationAction.

---

##### `DeleteOTAUpdate`<sup>Required</sup> <a name="DeleteOTAUpdate" id="@cdk_utils/iam.iot.IotActions.property.DeleteOTAUpdate"></a>

```typescript
public readonly DeleteOTAUpdate: string;
```

- *Type:* string

[Write] iot:DeleteOTAUpdate.

---

##### `DeletePackage`<sup>Required</sup> <a name="DeletePackage" id="@cdk_utils/iam.iot.IotActions.property.DeletePackage"></a>

```typescript
public readonly DeletePackage: string;
```

- *Type:* string

[Write] iot:DeletePackage.

---

##### `DeletePackageVersion`<sup>Required</sup> <a name="DeletePackageVersion" id="@cdk_utils/iam.iot.IotActions.property.DeletePackageVersion"></a>

```typescript
public readonly DeletePackageVersion: string;
```

- *Type:* string

[Write] iot:DeletePackageVersion.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.iot.IotActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[PermissionManagement] iot:DeletePolicy.

---

##### `DeletePolicyVersion`<sup>Required</sup> <a name="DeletePolicyVersion" id="@cdk_utils/iam.iot.IotActions.property.DeletePolicyVersion"></a>

```typescript
public readonly DeletePolicyVersion: string;
```

- *Type:* string

[PermissionManagement] iot:DeletePolicyVersion.

---

##### `DeleteProvisioningTemplate`<sup>Required</sup> <a name="DeleteProvisioningTemplate" id="@cdk_utils/iam.iot.IotActions.property.DeleteProvisioningTemplate"></a>

```typescript
public readonly DeleteProvisioningTemplate: string;
```

- *Type:* string

[Write] iot:DeleteProvisioningTemplate.

---

##### `DeleteProvisioningTemplateVersion`<sup>Required</sup> <a name="DeleteProvisioningTemplateVersion" id="@cdk_utils/iam.iot.IotActions.property.DeleteProvisioningTemplateVersion"></a>

```typescript
public readonly DeleteProvisioningTemplateVersion: string;
```

- *Type:* string

[Write] iot:DeleteProvisioningTemplateVersion.

---

##### `DeleteRegistrationCode`<sup>Required</sup> <a name="DeleteRegistrationCode" id="@cdk_utils/iam.iot.IotActions.property.DeleteRegistrationCode"></a>

```typescript
public readonly DeleteRegistrationCode: string;
```

- *Type:* string

[Write] iot:DeleteRegistrationCode.

---

##### `DeleteRoleAlias`<sup>Required</sup> <a name="DeleteRoleAlias" id="@cdk_utils/iam.iot.IotActions.property.DeleteRoleAlias"></a>

```typescript
public readonly DeleteRoleAlias: string;
```

- *Type:* string

[Write] iot:DeleteRoleAlias.

---

##### `DeleteScheduledAudit`<sup>Required</sup> <a name="DeleteScheduledAudit" id="@cdk_utils/iam.iot.IotActions.property.DeleteScheduledAudit"></a>

```typescript
public readonly DeleteScheduledAudit: string;
```

- *Type:* string

[Write] iot:DeleteScheduledAudit.

---

##### `DeleteSecurityProfile`<sup>Required</sup> <a name="DeleteSecurityProfile" id="@cdk_utils/iam.iot.IotActions.property.DeleteSecurityProfile"></a>

```typescript
public readonly DeleteSecurityProfile: string;
```

- *Type:* string

[Write] iot:DeleteSecurityProfile.

---

##### `DeleteStream`<sup>Required</sup> <a name="DeleteStream" id="@cdk_utils/iam.iot.IotActions.property.DeleteStream"></a>

```typescript
public readonly DeleteStream: string;
```

- *Type:* string

[Write] iot:DeleteStream.

---

##### `DeleteThing`<sup>Required</sup> <a name="DeleteThing" id="@cdk_utils/iam.iot.IotActions.property.DeleteThing"></a>

```typescript
public readonly DeleteThing: string;
```

- *Type:* string

[Write] iot:DeleteThing.

---

##### `DeleteThingGroup`<sup>Required</sup> <a name="DeleteThingGroup" id="@cdk_utils/iam.iot.IotActions.property.DeleteThingGroup"></a>

```typescript
public readonly DeleteThingGroup: string;
```

- *Type:* string

[Write] iot:DeleteThingGroup.

---

##### `DeleteThingShadow`<sup>Required</sup> <a name="DeleteThingShadow" id="@cdk_utils/iam.iot.IotActions.property.DeleteThingShadow"></a>

```typescript
public readonly DeleteThingShadow: string;
```

- *Type:* string

[Write] iot:DeleteThingShadow.

---

##### `DeleteThingType`<sup>Required</sup> <a name="DeleteThingType" id="@cdk_utils/iam.iot.IotActions.property.DeleteThingType"></a>

```typescript
public readonly DeleteThingType: string;
```

- *Type:* string

[Write] iot:DeleteThingType.

---

##### `DeleteTopicRule`<sup>Required</sup> <a name="DeleteTopicRule" id="@cdk_utils/iam.iot.IotActions.property.DeleteTopicRule"></a>

```typescript
public readonly DeleteTopicRule: string;
```

- *Type:* string

[Write] iot:DeleteTopicRule.

---

##### `DeleteTopicRuleDestination`<sup>Required</sup> <a name="DeleteTopicRuleDestination" id="@cdk_utils/iam.iot.IotActions.property.DeleteTopicRuleDestination"></a>

```typescript
public readonly DeleteTopicRuleDestination: string;
```

- *Type:* string

[Write] iot:DeleteTopicRuleDestination.

---

##### `DeleteV2LoggingLevel`<sup>Required</sup> <a name="DeleteV2LoggingLevel" id="@cdk_utils/iam.iot.IotActions.property.DeleteV2LoggingLevel"></a>

```typescript
public readonly DeleteV2LoggingLevel: string;
```

- *Type:* string

[Write] iot:DeleteV2LoggingLevel.

---

##### `DeprecateThingType`<sup>Required</sup> <a name="DeprecateThingType" id="@cdk_utils/iam.iot.IotActions.property.DeprecateThingType"></a>

```typescript
public readonly DeprecateThingType: string;
```

- *Type:* string

[Write] iot:DeprecateThingType.

---

##### `DescribeAccountAuditConfiguration`<sup>Required</sup> <a name="DescribeAccountAuditConfiguration" id="@cdk_utils/iam.iot.IotActions.property.DescribeAccountAuditConfiguration"></a>

```typescript
public readonly DescribeAccountAuditConfiguration: string;
```

- *Type:* string

[Read] iot:DescribeAccountAuditConfiguration.

---

##### `DescribeAuditFinding`<sup>Required</sup> <a name="DescribeAuditFinding" id="@cdk_utils/iam.iot.IotActions.property.DescribeAuditFinding"></a>

```typescript
public readonly DescribeAuditFinding: string;
```

- *Type:* string

[Read] iot:DescribeAuditFinding.

---

##### `DescribeAuditMitigationActionsTask`<sup>Required</sup> <a name="DescribeAuditMitigationActionsTask" id="@cdk_utils/iam.iot.IotActions.property.DescribeAuditMitigationActionsTask"></a>

```typescript
public readonly DescribeAuditMitigationActionsTask: string;
```

- *Type:* string

[Read] iot:DescribeAuditMitigationActionsTask.

---

##### `DescribeAuditSuppression`<sup>Required</sup> <a name="DescribeAuditSuppression" id="@cdk_utils/iam.iot.IotActions.property.DescribeAuditSuppression"></a>

```typescript
public readonly DescribeAuditSuppression: string;
```

- *Type:* string

[Read] iot:DescribeAuditSuppression.

---

##### `DescribeAuditTask`<sup>Required</sup> <a name="DescribeAuditTask" id="@cdk_utils/iam.iot.IotActions.property.DescribeAuditTask"></a>

```typescript
public readonly DescribeAuditTask: string;
```

- *Type:* string

[Read] iot:DescribeAuditTask.

---

##### `DescribeAuthorizer`<sup>Required</sup> <a name="DescribeAuthorizer" id="@cdk_utils/iam.iot.IotActions.property.DescribeAuthorizer"></a>

```typescript
public readonly DescribeAuthorizer: string;
```

- *Type:* string

[Read] iot:DescribeAuthorizer.

---

##### `DescribeBillingGroup`<sup>Required</sup> <a name="DescribeBillingGroup" id="@cdk_utils/iam.iot.IotActions.property.DescribeBillingGroup"></a>

```typescript
public readonly DescribeBillingGroup: string;
```

- *Type:* string

[Read] iot:DescribeBillingGroup.

---

##### `DescribeCACertificate`<sup>Required</sup> <a name="DescribeCACertificate" id="@cdk_utils/iam.iot.IotActions.property.DescribeCACertificate"></a>

```typescript
public readonly DescribeCACertificate: string;
```

- *Type:* string

[Read] iot:DescribeCACertificate.

---

##### `DescribeCertificate`<sup>Required</sup> <a name="DescribeCertificate" id="@cdk_utils/iam.iot.IotActions.property.DescribeCertificate"></a>

```typescript
public readonly DescribeCertificate: string;
```

- *Type:* string

[Read] iot:DescribeCertificate.

---

##### `DescribeCertificateProvider`<sup>Required</sup> <a name="DescribeCertificateProvider" id="@cdk_utils/iam.iot.IotActions.property.DescribeCertificateProvider"></a>

```typescript
public readonly DescribeCertificateProvider: string;
```

- *Type:* string

[Read] iot:DescribeCertificateProvider.

---

##### `DescribeCustomMetric`<sup>Required</sup> <a name="DescribeCustomMetric" id="@cdk_utils/iam.iot.IotActions.property.DescribeCustomMetric"></a>

```typescript
public readonly DescribeCustomMetric: string;
```

- *Type:* string

[Read] iot:DescribeCustomMetric.

---

##### `DescribeDefaultAuthorizer`<sup>Required</sup> <a name="DescribeDefaultAuthorizer" id="@cdk_utils/iam.iot.IotActions.property.DescribeDefaultAuthorizer"></a>

```typescript
public readonly DescribeDefaultAuthorizer: string;
```

- *Type:* string

[Read] iot:DescribeDefaultAuthorizer.

---

##### `DescribeDetectMitigationActionsTask`<sup>Required</sup> <a name="DescribeDetectMitigationActionsTask" id="@cdk_utils/iam.iot.IotActions.property.DescribeDetectMitigationActionsTask"></a>

```typescript
public readonly DescribeDetectMitigationActionsTask: string;
```

- *Type:* string

[Read] iot:DescribeDetectMitigationActionsTask.

---

##### `DescribeDimension`<sup>Required</sup> <a name="DescribeDimension" id="@cdk_utils/iam.iot.IotActions.property.DescribeDimension"></a>

```typescript
public readonly DescribeDimension: string;
```

- *Type:* string

[Read] iot:DescribeDimension.

---

##### `DescribeDomainConfiguration`<sup>Required</sup> <a name="DescribeDomainConfiguration" id="@cdk_utils/iam.iot.IotActions.property.DescribeDomainConfiguration"></a>

```typescript
public readonly DescribeDomainConfiguration: string;
```

- *Type:* string

[Read] iot:DescribeDomainConfiguration.

---

##### `DescribeEncryptionConfiguration`<sup>Required</sup> <a name="DescribeEncryptionConfiguration" id="@cdk_utils/iam.iot.IotActions.property.DescribeEncryptionConfiguration"></a>

```typescript
public readonly DescribeEncryptionConfiguration: string;
```

- *Type:* string

[Read] iot:DescribeEncryptionConfiguration.

---

##### `DescribeEndpoint`<sup>Required</sup> <a name="DescribeEndpoint" id="@cdk_utils/iam.iot.IotActions.property.DescribeEndpoint"></a>

```typescript
public readonly DescribeEndpoint: string;
```

- *Type:* string

[Read] iot:DescribeEndpoint.

---

##### `DescribeEventConfigurations`<sup>Required</sup> <a name="DescribeEventConfigurations" id="@cdk_utils/iam.iot.IotActions.property.DescribeEventConfigurations"></a>

```typescript
public readonly DescribeEventConfigurations: string;
```

- *Type:* string

[Read] iot:DescribeEventConfigurations.

---

##### `DescribeFleetMetric`<sup>Required</sup> <a name="DescribeFleetMetric" id="@cdk_utils/iam.iot.IotActions.property.DescribeFleetMetric"></a>

```typescript
public readonly DescribeFleetMetric: string;
```

- *Type:* string

[Read] iot:DescribeFleetMetric.

---

##### `DescribeIndex`<sup>Required</sup> <a name="DescribeIndex" id="@cdk_utils/iam.iot.IotActions.property.DescribeIndex"></a>

```typescript
public readonly DescribeIndex: string;
```

- *Type:* string

[Read] iot:DescribeIndex.

---

##### `DescribeJob`<sup>Required</sup> <a name="DescribeJob" id="@cdk_utils/iam.iot.IotActions.property.DescribeJob"></a>

```typescript
public readonly DescribeJob: string;
```

- *Type:* string

[Read] iot:DescribeJob.

---

##### `DescribeJobExecution`<sup>Required</sup> <a name="DescribeJobExecution" id="@cdk_utils/iam.iot.IotActions.property.DescribeJobExecution"></a>

```typescript
public readonly DescribeJobExecution: string;
```

- *Type:* string

[Read] iot:DescribeJobExecution.

---

##### `DescribeJobTemplate`<sup>Required</sup> <a name="DescribeJobTemplate" id="@cdk_utils/iam.iot.IotActions.property.DescribeJobTemplate"></a>

```typescript
public readonly DescribeJobTemplate: string;
```

- *Type:* string

[Read] iot:DescribeJobTemplate.

---

##### `DescribeManagedJobTemplate`<sup>Required</sup> <a name="DescribeManagedJobTemplate" id="@cdk_utils/iam.iot.IotActions.property.DescribeManagedJobTemplate"></a>

```typescript
public readonly DescribeManagedJobTemplate: string;
```

- *Type:* string

[Read] iot:DescribeManagedJobTemplate.

---

##### `DescribeMitigationAction`<sup>Required</sup> <a name="DescribeMitigationAction" id="@cdk_utils/iam.iot.IotActions.property.DescribeMitigationAction"></a>

```typescript
public readonly DescribeMitigationAction: string;
```

- *Type:* string

[Read] iot:DescribeMitigationAction.

---

##### `DescribeProvisioningTemplate`<sup>Required</sup> <a name="DescribeProvisioningTemplate" id="@cdk_utils/iam.iot.IotActions.property.DescribeProvisioningTemplate"></a>

```typescript
public readonly DescribeProvisioningTemplate: string;
```

- *Type:* string

[Read] iot:DescribeProvisioningTemplate.

---

##### `DescribeProvisioningTemplateVersion`<sup>Required</sup> <a name="DescribeProvisioningTemplateVersion" id="@cdk_utils/iam.iot.IotActions.property.DescribeProvisioningTemplateVersion"></a>

```typescript
public readonly DescribeProvisioningTemplateVersion: string;
```

- *Type:* string

[Read] iot:DescribeProvisioningTemplateVersion.

---

##### `DescribeRoleAlias`<sup>Required</sup> <a name="DescribeRoleAlias" id="@cdk_utils/iam.iot.IotActions.property.DescribeRoleAlias"></a>

```typescript
public readonly DescribeRoleAlias: string;
```

- *Type:* string

[Read] iot:DescribeRoleAlias.

---

##### `DescribeScheduledAudit`<sup>Required</sup> <a name="DescribeScheduledAudit" id="@cdk_utils/iam.iot.IotActions.property.DescribeScheduledAudit"></a>

```typescript
public readonly DescribeScheduledAudit: string;
```

- *Type:* string

[Read] iot:DescribeScheduledAudit.

---

##### `DescribeSecurityProfile`<sup>Required</sup> <a name="DescribeSecurityProfile" id="@cdk_utils/iam.iot.IotActions.property.DescribeSecurityProfile"></a>

```typescript
public readonly DescribeSecurityProfile: string;
```

- *Type:* string

[Read] iot:DescribeSecurityProfile.

---

##### `DescribeStream`<sup>Required</sup> <a name="DescribeStream" id="@cdk_utils/iam.iot.IotActions.property.DescribeStream"></a>

```typescript
public readonly DescribeStream: string;
```

- *Type:* string

[Read] iot:DescribeStream.

---

##### `DescribeThing`<sup>Required</sup> <a name="DescribeThing" id="@cdk_utils/iam.iot.IotActions.property.DescribeThing"></a>

```typescript
public readonly DescribeThing: string;
```

- *Type:* string

[Read] iot:DescribeThing.

---

##### `DescribeThingGroup`<sup>Required</sup> <a name="DescribeThingGroup" id="@cdk_utils/iam.iot.IotActions.property.DescribeThingGroup"></a>

```typescript
public readonly DescribeThingGroup: string;
```

- *Type:* string

[Read] iot:DescribeThingGroup.

---

##### `DescribeThingRegistrationTask`<sup>Required</sup> <a name="DescribeThingRegistrationTask" id="@cdk_utils/iam.iot.IotActions.property.DescribeThingRegistrationTask"></a>

```typescript
public readonly DescribeThingRegistrationTask: string;
```

- *Type:* string

[Read] iot:DescribeThingRegistrationTask.

---

##### `DescribeThingType`<sup>Required</sup> <a name="DescribeThingType" id="@cdk_utils/iam.iot.IotActions.property.DescribeThingType"></a>

```typescript
public readonly DescribeThingType: string;
```

- *Type:* string

[Read] iot:DescribeThingType.

---

##### `DescribeTunnel`<sup>Required</sup> <a name="DescribeTunnel" id="@cdk_utils/iam.iot.IotActions.property.DescribeTunnel"></a>

```typescript
public readonly DescribeTunnel: string;
```

- *Type:* string

[Read] iot:DescribeTunnel.

---

##### `DetachPolicy`<sup>Required</sup> <a name="DetachPolicy" id="@cdk_utils/iam.iot.IotActions.property.DetachPolicy"></a>

```typescript
public readonly DetachPolicy: string;
```

- *Type:* string

[PermissionManagement] iot:DetachPolicy.

---

##### `DetachPrincipalPolicy`<sup>Required</sup> <a name="DetachPrincipalPolicy" id="@cdk_utils/iam.iot.IotActions.property.DetachPrincipalPolicy"></a>

```typescript
public readonly DetachPrincipalPolicy: string;
```

- *Type:* string

[PermissionManagement] iot:DetachPrincipalPolicy.

---

##### `DetachSecurityProfile`<sup>Required</sup> <a name="DetachSecurityProfile" id="@cdk_utils/iam.iot.IotActions.property.DetachSecurityProfile"></a>

```typescript
public readonly DetachSecurityProfile: string;
```

- *Type:* string

[Write] iot:DetachSecurityProfile.

---

##### `DetachThingPrincipal`<sup>Required</sup> <a name="DetachThingPrincipal" id="@cdk_utils/iam.iot.IotActions.property.DetachThingPrincipal"></a>

```typescript
public readonly DetachThingPrincipal: string;
```

- *Type:* string

[Write] iot:DetachThingPrincipal.

---

##### `DisableTopicRule`<sup>Required</sup> <a name="DisableTopicRule" id="@cdk_utils/iam.iot.IotActions.property.DisableTopicRule"></a>

```typescript
public readonly DisableTopicRule: string;
```

- *Type:* string

[Write] iot:DisableTopicRule.

---

##### `DisassociateSbomFromPackageVersion`<sup>Required</sup> <a name="DisassociateSbomFromPackageVersion" id="@cdk_utils/iam.iot.IotActions.property.DisassociateSbomFromPackageVersion"></a>

```typescript
public readonly DisassociateSbomFromPackageVersion: string;
```

- *Type:* string

[Write] iot:DisassociateSbomFromPackageVersion.

---

##### `EnableTopicRule`<sup>Required</sup> <a name="EnableTopicRule" id="@cdk_utils/iam.iot.IotActions.property.EnableTopicRule"></a>

```typescript
public readonly EnableTopicRule: string;
```

- *Type:* string

[Write] iot:EnableTopicRule.

---

##### `ListActiveViolations`<sup>Required</sup> <a name="ListActiveViolations" id="@cdk_utils/iam.iot.IotActions.property.ListActiveViolations"></a>

```typescript
public readonly ListActiveViolations: string;
```

- *Type:* string

[List] iot:ListActiveViolations.

---

##### `ListAttachedPolicies`<sup>Required</sup> <a name="ListAttachedPolicies" id="@cdk_utils/iam.iot.IotActions.property.ListAttachedPolicies"></a>

```typescript
public readonly ListAttachedPolicies: string;
```

- *Type:* string

[List] iot:ListAttachedPolicies.

---

##### `ListAuditFindings`<sup>Required</sup> <a name="ListAuditFindings" id="@cdk_utils/iam.iot.IotActions.property.ListAuditFindings"></a>

```typescript
public readonly ListAuditFindings: string;
```

- *Type:* string

[List] iot:ListAuditFindings.

---

##### `ListAuditMitigationActionsExecutions`<sup>Required</sup> <a name="ListAuditMitigationActionsExecutions" id="@cdk_utils/iam.iot.IotActions.property.ListAuditMitigationActionsExecutions"></a>

```typescript
public readonly ListAuditMitigationActionsExecutions: string;
```

- *Type:* string

[List] iot:ListAuditMitigationActionsExecutions.

---

##### `ListAuditMitigationActionsTasks`<sup>Required</sup> <a name="ListAuditMitigationActionsTasks" id="@cdk_utils/iam.iot.IotActions.property.ListAuditMitigationActionsTasks"></a>

```typescript
public readonly ListAuditMitigationActionsTasks: string;
```

- *Type:* string

[List] iot:ListAuditMitigationActionsTasks.

---

##### `ListAuditSuppressions`<sup>Required</sup> <a name="ListAuditSuppressions" id="@cdk_utils/iam.iot.IotActions.property.ListAuditSuppressions"></a>

```typescript
public readonly ListAuditSuppressions: string;
```

- *Type:* string

[List] iot:ListAuditSuppressions.

---

##### `ListAuditTasks`<sup>Required</sup> <a name="ListAuditTasks" id="@cdk_utils/iam.iot.IotActions.property.ListAuditTasks"></a>

```typescript
public readonly ListAuditTasks: string;
```

- *Type:* string

[List] iot:ListAuditTasks.

---

##### `ListAuthorizers`<sup>Required</sup> <a name="ListAuthorizers" id="@cdk_utils/iam.iot.IotActions.property.ListAuthorizers"></a>

```typescript
public readonly ListAuthorizers: string;
```

- *Type:* string

[List] iot:ListAuthorizers.

---

##### `ListBillingGroups`<sup>Required</sup> <a name="ListBillingGroups" id="@cdk_utils/iam.iot.IotActions.property.ListBillingGroups"></a>

```typescript
public readonly ListBillingGroups: string;
```

- *Type:* string

[List] iot:ListBillingGroups.

---

##### `ListCACertificates`<sup>Required</sup> <a name="ListCACertificates" id="@cdk_utils/iam.iot.IotActions.property.ListCACertificates"></a>

```typescript
public readonly ListCACertificates: string;
```

- *Type:* string

[List] iot:ListCACertificates.

---

##### `ListCertificateProviders`<sup>Required</sup> <a name="ListCertificateProviders" id="@cdk_utils/iam.iot.IotActions.property.ListCertificateProviders"></a>

```typescript
public readonly ListCertificateProviders: string;
```

- *Type:* string

[List] iot:ListCertificateProviders.

---

##### `ListCertificates`<sup>Required</sup> <a name="ListCertificates" id="@cdk_utils/iam.iot.IotActions.property.ListCertificates"></a>

```typescript
public readonly ListCertificates: string;
```

- *Type:* string

[List] iot:ListCertificates.

---

##### `ListCertificatesByCA`<sup>Required</sup> <a name="ListCertificatesByCA" id="@cdk_utils/iam.iot.IotActions.property.ListCertificatesByCA"></a>

```typescript
public readonly ListCertificatesByCA: string;
```

- *Type:* string

[List] iot:ListCertificatesByCA.

---

##### `ListCommandExecutions`<sup>Required</sup> <a name="ListCommandExecutions" id="@cdk_utils/iam.iot.IotActions.property.ListCommandExecutions"></a>

```typescript
public readonly ListCommandExecutions: string;
```

- *Type:* string

[List] iot:ListCommandExecutions.

---

##### `ListCommands`<sup>Required</sup> <a name="ListCommands" id="@cdk_utils/iam.iot.IotActions.property.ListCommands"></a>

```typescript
public readonly ListCommands: string;
```

- *Type:* string

[List] iot:ListCommands.

---

##### `ListCustomMetrics`<sup>Required</sup> <a name="ListCustomMetrics" id="@cdk_utils/iam.iot.IotActions.property.ListCustomMetrics"></a>

```typescript
public readonly ListCustomMetrics: string;
```

- *Type:* string

[List] iot:ListCustomMetrics.

---

##### `ListDetectMitigationActionsExecutions`<sup>Required</sup> <a name="ListDetectMitigationActionsExecutions" id="@cdk_utils/iam.iot.IotActions.property.ListDetectMitigationActionsExecutions"></a>

```typescript
public readonly ListDetectMitigationActionsExecutions: string;
```

- *Type:* string

[List] iot:ListDetectMitigationActionsExecutions.

---

##### `ListDetectMitigationActionsTasks`<sup>Required</sup> <a name="ListDetectMitigationActionsTasks" id="@cdk_utils/iam.iot.IotActions.property.ListDetectMitigationActionsTasks"></a>

```typescript
public readonly ListDetectMitigationActionsTasks: string;
```

- *Type:* string

[List] iot:ListDetectMitigationActionsTasks.

---

##### `ListDimensions`<sup>Required</sup> <a name="ListDimensions" id="@cdk_utils/iam.iot.IotActions.property.ListDimensions"></a>

```typescript
public readonly ListDimensions: string;
```

- *Type:* string

[List] iot:ListDimensions.

---

##### `ListDomainConfigurations`<sup>Required</sup> <a name="ListDomainConfigurations" id="@cdk_utils/iam.iot.IotActions.property.ListDomainConfigurations"></a>

```typescript
public readonly ListDomainConfigurations: string;
```

- *Type:* string

[List] iot:ListDomainConfigurations.

---

##### `ListFleetMetrics`<sup>Required</sup> <a name="ListFleetMetrics" id="@cdk_utils/iam.iot.IotActions.property.ListFleetMetrics"></a>

```typescript
public readonly ListFleetMetrics: string;
```

- *Type:* string

[List] iot:ListFleetMetrics.

---

##### `ListIndices`<sup>Required</sup> <a name="ListIndices" id="@cdk_utils/iam.iot.IotActions.property.ListIndices"></a>

```typescript
public readonly ListIndices: string;
```

- *Type:* string

[List] iot:ListIndices.

---

##### `ListJobExecutionsForJob`<sup>Required</sup> <a name="ListJobExecutionsForJob" id="@cdk_utils/iam.iot.IotActions.property.ListJobExecutionsForJob"></a>

```typescript
public readonly ListJobExecutionsForJob: string;
```

- *Type:* string

[List] iot:ListJobExecutionsForJob.

---

##### `ListJobExecutionsForThing`<sup>Required</sup> <a name="ListJobExecutionsForThing" id="@cdk_utils/iam.iot.IotActions.property.ListJobExecutionsForThing"></a>

```typescript
public readonly ListJobExecutionsForThing: string;
```

- *Type:* string

[List] iot:ListJobExecutionsForThing.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.iot.IotActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] iot:ListJobs.

---

##### `ListJobTemplates`<sup>Required</sup> <a name="ListJobTemplates" id="@cdk_utils/iam.iot.IotActions.property.ListJobTemplates"></a>

```typescript
public readonly ListJobTemplates: string;
```

- *Type:* string

[List] iot:ListJobTemplates.

---

##### `ListManagedJobTemplates`<sup>Required</sup> <a name="ListManagedJobTemplates" id="@cdk_utils/iam.iot.IotActions.property.ListManagedJobTemplates"></a>

```typescript
public readonly ListManagedJobTemplates: string;
```

- *Type:* string

[List] iot:ListManagedJobTemplates.

---

##### `ListMetricValues`<sup>Required</sup> <a name="ListMetricValues" id="@cdk_utils/iam.iot.IotActions.property.ListMetricValues"></a>

```typescript
public readonly ListMetricValues: string;
```

- *Type:* string

[List] iot:ListMetricValues.

---

##### `ListMitigationActions`<sup>Required</sup> <a name="ListMitigationActions" id="@cdk_utils/iam.iot.IotActions.property.ListMitigationActions"></a>

```typescript
public readonly ListMitigationActions: string;
```

- *Type:* string

[List] iot:ListMitigationActions.

---

##### `ListNamedShadowsForThing`<sup>Required</sup> <a name="ListNamedShadowsForThing" id="@cdk_utils/iam.iot.IotActions.property.ListNamedShadowsForThing"></a>

```typescript
public readonly ListNamedShadowsForThing: string;
```

- *Type:* string

[List] iot:ListNamedShadowsForThing.

---

##### `ListOTAUpdates`<sup>Required</sup> <a name="ListOTAUpdates" id="@cdk_utils/iam.iot.IotActions.property.ListOTAUpdates"></a>

```typescript
public readonly ListOTAUpdates: string;
```

- *Type:* string

[List] iot:ListOTAUpdates.

---

##### `ListOutgoingCertificates`<sup>Required</sup> <a name="ListOutgoingCertificates" id="@cdk_utils/iam.iot.IotActions.property.ListOutgoingCertificates"></a>

```typescript
public readonly ListOutgoingCertificates: string;
```

- *Type:* string

[List] iot:ListOutgoingCertificates.

---

##### `ListPackages`<sup>Required</sup> <a name="ListPackages" id="@cdk_utils/iam.iot.IotActions.property.ListPackages"></a>

```typescript
public readonly ListPackages: string;
```

- *Type:* string

[List] iot:ListPackages.

---

##### `ListPackageVersions`<sup>Required</sup> <a name="ListPackageVersions" id="@cdk_utils/iam.iot.IotActions.property.ListPackageVersions"></a>

```typescript
public readonly ListPackageVersions: string;
```

- *Type:* string

[List] iot:ListPackageVersions.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.iot.IotActions.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string;
```

- *Type:* string

[List] iot:ListPolicies.

---

##### `ListPolicyPrincipals`<sup>Required</sup> <a name="ListPolicyPrincipals" id="@cdk_utils/iam.iot.IotActions.property.ListPolicyPrincipals"></a>

```typescript
public readonly ListPolicyPrincipals: string;
```

- *Type:* string

[List] iot:ListPolicyPrincipals.

---

##### `ListPolicyVersions`<sup>Required</sup> <a name="ListPolicyVersions" id="@cdk_utils/iam.iot.IotActions.property.ListPolicyVersions"></a>

```typescript
public readonly ListPolicyVersions: string;
```

- *Type:* string

[List] iot:ListPolicyVersions.

---

##### `ListPrincipalPolicies`<sup>Required</sup> <a name="ListPrincipalPolicies" id="@cdk_utils/iam.iot.IotActions.property.ListPrincipalPolicies"></a>

```typescript
public readonly ListPrincipalPolicies: string;
```

- *Type:* string

[List] iot:ListPrincipalPolicies.

---

##### `ListPrincipalThings`<sup>Required</sup> <a name="ListPrincipalThings" id="@cdk_utils/iam.iot.IotActions.property.ListPrincipalThings"></a>

```typescript
public readonly ListPrincipalThings: string;
```

- *Type:* string

[List] iot:ListPrincipalThings.

---

##### `ListPrincipalThingsV2`<sup>Required</sup> <a name="ListPrincipalThingsV2" id="@cdk_utils/iam.iot.IotActions.property.ListPrincipalThingsV2"></a>

```typescript
public readonly ListPrincipalThingsV2: string;
```

- *Type:* string

[List] iot:ListPrincipalThingsV2.

---

##### `ListProvisioningTemplates`<sup>Required</sup> <a name="ListProvisioningTemplates" id="@cdk_utils/iam.iot.IotActions.property.ListProvisioningTemplates"></a>

```typescript
public readonly ListProvisioningTemplates: string;
```

- *Type:* string

[List] iot:ListProvisioningTemplates.

---

##### `ListProvisioningTemplateVersions`<sup>Required</sup> <a name="ListProvisioningTemplateVersions" id="@cdk_utils/iam.iot.IotActions.property.ListProvisioningTemplateVersions"></a>

```typescript
public readonly ListProvisioningTemplateVersions: string;
```

- *Type:* string

[List] iot:ListProvisioningTemplateVersions.

---

##### `ListRelatedResourcesForAuditFinding`<sup>Required</sup> <a name="ListRelatedResourcesForAuditFinding" id="@cdk_utils/iam.iot.IotActions.property.ListRelatedResourcesForAuditFinding"></a>

```typescript
public readonly ListRelatedResourcesForAuditFinding: string;
```

- *Type:* string

[List] iot:ListRelatedResourcesForAuditFinding.

---

##### `ListRetainedMessages`<sup>Required</sup> <a name="ListRetainedMessages" id="@cdk_utils/iam.iot.IotActions.property.ListRetainedMessages"></a>

```typescript
public readonly ListRetainedMessages: string;
```

- *Type:* string

[List] iot:ListRetainedMessages.

---

##### `ListRoleAliases`<sup>Required</sup> <a name="ListRoleAliases" id="@cdk_utils/iam.iot.IotActions.property.ListRoleAliases"></a>

```typescript
public readonly ListRoleAliases: string;
```

- *Type:* string

[List] iot:ListRoleAliases.

---

##### `ListSbomValidationResults`<sup>Required</sup> <a name="ListSbomValidationResults" id="@cdk_utils/iam.iot.IotActions.property.ListSbomValidationResults"></a>

```typescript
public readonly ListSbomValidationResults: string;
```

- *Type:* string

[List] iot:ListSbomValidationResults.

---

##### `ListScheduledAudits`<sup>Required</sup> <a name="ListScheduledAudits" id="@cdk_utils/iam.iot.IotActions.property.ListScheduledAudits"></a>

```typescript
public readonly ListScheduledAudits: string;
```

- *Type:* string

[List] iot:ListScheduledAudits.

---

##### `ListSecurityProfiles`<sup>Required</sup> <a name="ListSecurityProfiles" id="@cdk_utils/iam.iot.IotActions.property.ListSecurityProfiles"></a>

```typescript
public readonly ListSecurityProfiles: string;
```

- *Type:* string

[List] iot:ListSecurityProfiles.

---

##### `ListSecurityProfilesForTarget`<sup>Required</sup> <a name="ListSecurityProfilesForTarget" id="@cdk_utils/iam.iot.IotActions.property.ListSecurityProfilesForTarget"></a>

```typescript
public readonly ListSecurityProfilesForTarget: string;
```

- *Type:* string

[List] iot:ListSecurityProfilesForTarget.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.iot.IotActions.property.ListStreams"></a>

```typescript
public readonly ListStreams: string;
```

- *Type:* string

[List] iot:ListStreams.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.iot.IotActions.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string;
```

- *Type:* string

[Write] iot:ListSubscriptions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iot.IotActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] iot:ListTagsForResource.

---

##### `ListTargetsForPolicy`<sup>Required</sup> <a name="ListTargetsForPolicy" id="@cdk_utils/iam.iot.IotActions.property.ListTargetsForPolicy"></a>

```typescript
public readonly ListTargetsForPolicy: string;
```

- *Type:* string

[List] iot:ListTargetsForPolicy.

---

##### `ListTargetsForSecurityProfile`<sup>Required</sup> <a name="ListTargetsForSecurityProfile" id="@cdk_utils/iam.iot.IotActions.property.ListTargetsForSecurityProfile"></a>

```typescript
public readonly ListTargetsForSecurityProfile: string;
```

- *Type:* string

[List] iot:ListTargetsForSecurityProfile.

---

##### `ListThingGroups`<sup>Required</sup> <a name="ListThingGroups" id="@cdk_utils/iam.iot.IotActions.property.ListThingGroups"></a>

```typescript
public readonly ListThingGroups: string;
```

- *Type:* string

[List] iot:ListThingGroups.

---

##### `ListThingGroupsForThing`<sup>Required</sup> <a name="ListThingGroupsForThing" id="@cdk_utils/iam.iot.IotActions.property.ListThingGroupsForThing"></a>

```typescript
public readonly ListThingGroupsForThing: string;
```

- *Type:* string

[List] iot:ListThingGroupsForThing.

---

##### `ListThingPrincipals`<sup>Required</sup> <a name="ListThingPrincipals" id="@cdk_utils/iam.iot.IotActions.property.ListThingPrincipals"></a>

```typescript
public readonly ListThingPrincipals: string;
```

- *Type:* string

[List] iot:ListThingPrincipals.

---

##### `ListThingPrincipalsV2`<sup>Required</sup> <a name="ListThingPrincipalsV2" id="@cdk_utils/iam.iot.IotActions.property.ListThingPrincipalsV2"></a>

```typescript
public readonly ListThingPrincipalsV2: string;
```

- *Type:* string

[List] iot:ListThingPrincipalsV2.

---

##### `ListThingRegistrationTaskReports`<sup>Required</sup> <a name="ListThingRegistrationTaskReports" id="@cdk_utils/iam.iot.IotActions.property.ListThingRegistrationTaskReports"></a>

```typescript
public readonly ListThingRegistrationTaskReports: string;
```

- *Type:* string

[List] iot:ListThingRegistrationTaskReports.

---

##### `ListThingRegistrationTasks`<sup>Required</sup> <a name="ListThingRegistrationTasks" id="@cdk_utils/iam.iot.IotActions.property.ListThingRegistrationTasks"></a>

```typescript
public readonly ListThingRegistrationTasks: string;
```

- *Type:* string

[List] iot:ListThingRegistrationTasks.

---

##### `ListThings`<sup>Required</sup> <a name="ListThings" id="@cdk_utils/iam.iot.IotActions.property.ListThings"></a>

```typescript
public readonly ListThings: string;
```

- *Type:* string

[List] iot:ListThings.

---

##### `ListThingsInBillingGroup`<sup>Required</sup> <a name="ListThingsInBillingGroup" id="@cdk_utils/iam.iot.IotActions.property.ListThingsInBillingGroup"></a>

```typescript
public readonly ListThingsInBillingGroup: string;
```

- *Type:* string

[List] iot:ListThingsInBillingGroup.

---

##### `ListThingsInThingGroup`<sup>Required</sup> <a name="ListThingsInThingGroup" id="@cdk_utils/iam.iot.IotActions.property.ListThingsInThingGroup"></a>

```typescript
public readonly ListThingsInThingGroup: string;
```

- *Type:* string

[List] iot:ListThingsInThingGroup.

---

##### `ListThingTypes`<sup>Required</sup> <a name="ListThingTypes" id="@cdk_utils/iam.iot.IotActions.property.ListThingTypes"></a>

```typescript
public readonly ListThingTypes: string;
```

- *Type:* string

[List] iot:ListThingTypes.

---

##### `ListTopicRuleDestinations`<sup>Required</sup> <a name="ListTopicRuleDestinations" id="@cdk_utils/iam.iot.IotActions.property.ListTopicRuleDestinations"></a>

```typescript
public readonly ListTopicRuleDestinations: string;
```

- *Type:* string

[List] iot:ListTopicRuleDestinations.

---

##### `ListTopicRules`<sup>Required</sup> <a name="ListTopicRules" id="@cdk_utils/iam.iot.IotActions.property.ListTopicRules"></a>

```typescript
public readonly ListTopicRules: string;
```

- *Type:* string

[List] iot:ListTopicRules.

---

##### `ListTunnels`<sup>Required</sup> <a name="ListTunnels" id="@cdk_utils/iam.iot.IotActions.property.ListTunnels"></a>

```typescript
public readonly ListTunnels: string;
```

- *Type:* string

[List] iot:ListTunnels.

---

##### `ListV2LoggingLevels`<sup>Required</sup> <a name="ListV2LoggingLevels" id="@cdk_utils/iam.iot.IotActions.property.ListV2LoggingLevels"></a>

```typescript
public readonly ListV2LoggingLevels: string;
```

- *Type:* string

[List] iot:ListV2LoggingLevels.

---

##### `ListViolationEvents`<sup>Required</sup> <a name="ListViolationEvents" id="@cdk_utils/iam.iot.IotActions.property.ListViolationEvents"></a>

```typescript
public readonly ListViolationEvents: string;
```

- *Type:* string

[List] iot:ListViolationEvents.

---

##### `OpenTunnel`<sup>Required</sup> <a name="OpenTunnel" id="@cdk_utils/iam.iot.IotActions.property.OpenTunnel"></a>

```typescript
public readonly OpenTunnel: string;
```

- *Type:* string

[Write] iot:OpenTunnel.

---

##### `Publish`<sup>Required</sup> <a name="Publish" id="@cdk_utils/iam.iot.IotActions.property.Publish"></a>

```typescript
public readonly Publish: string;
```

- *Type:* string

[Write] iot:Publish.

---

##### `PutVerificationStateOnViolation`<sup>Required</sup> <a name="PutVerificationStateOnViolation" id="@cdk_utils/iam.iot.IotActions.property.PutVerificationStateOnViolation"></a>

```typescript
public readonly PutVerificationStateOnViolation: string;
```

- *Type:* string

[Write] iot:PutVerificationStateOnViolation.

---

##### `Receive`<sup>Required</sup> <a name="Receive" id="@cdk_utils/iam.iot.IotActions.property.Receive"></a>

```typescript
public readonly Receive: string;
```

- *Type:* string

[Write] iot:Receive.

---

##### `RegisterCACertificate`<sup>Required</sup> <a name="RegisterCACertificate" id="@cdk_utils/iam.iot.IotActions.property.RegisterCACertificate"></a>

```typescript
public readonly RegisterCACertificate: string;
```

- *Type:* string

[Write] iot:RegisterCACertificate.

---

##### `RegisterCertificate`<sup>Required</sup> <a name="RegisterCertificate" id="@cdk_utils/iam.iot.IotActions.property.RegisterCertificate"></a>

```typescript
public readonly RegisterCertificate: string;
```

- *Type:* string

[Write] iot:RegisterCertificate.

---

##### `RegisterCertificateWithoutCA`<sup>Required</sup> <a name="RegisterCertificateWithoutCA" id="@cdk_utils/iam.iot.IotActions.property.RegisterCertificateWithoutCA"></a>

```typescript
public readonly RegisterCertificateWithoutCA: string;
```

- *Type:* string

[Write] iot:RegisterCertificateWithoutCA.

---

##### `RegisterThing`<sup>Required</sup> <a name="RegisterThing" id="@cdk_utils/iam.iot.IotActions.property.RegisterThing"></a>

```typescript
public readonly RegisterThing: string;
```

- *Type:* string

[Write] iot:RegisterThing.

---

##### `RejectCertificateTransfer`<sup>Required</sup> <a name="RejectCertificateTransfer" id="@cdk_utils/iam.iot.IotActions.property.RejectCertificateTransfer"></a>

```typescript
public readonly RejectCertificateTransfer: string;
```

- *Type:* string

[Write] iot:RejectCertificateTransfer.

---

##### `RemoveThingFromBillingGroup`<sup>Required</sup> <a name="RemoveThingFromBillingGroup" id="@cdk_utils/iam.iot.IotActions.property.RemoveThingFromBillingGroup"></a>

```typescript
public readonly RemoveThingFromBillingGroup: string;
```

- *Type:* string

[Write] iot:RemoveThingFromBillingGroup.

---

##### `RemoveThingFromThingGroup`<sup>Required</sup> <a name="RemoveThingFromThingGroup" id="@cdk_utils/iam.iot.IotActions.property.RemoveThingFromThingGroup"></a>

```typescript
public readonly RemoveThingFromThingGroup: string;
```

- *Type:* string

[Write] iot:RemoveThingFromThingGroup.

---

##### `ReplaceTopicRule`<sup>Required</sup> <a name="ReplaceTopicRule" id="@cdk_utils/iam.iot.IotActions.property.ReplaceTopicRule"></a>

```typescript
public readonly ReplaceTopicRule: string;
```

- *Type:* string

[Write] iot:ReplaceTopicRule.

---

##### `RetainPublish`<sup>Required</sup> <a name="RetainPublish" id="@cdk_utils/iam.iot.IotActions.property.RetainPublish"></a>

```typescript
public readonly RetainPublish: string;
```

- *Type:* string

[Write] iot:RetainPublish.

---

##### `RotateTunnelAccessToken`<sup>Required</sup> <a name="RotateTunnelAccessToken" id="@cdk_utils/iam.iot.IotActions.property.RotateTunnelAccessToken"></a>

```typescript
public readonly RotateTunnelAccessToken: string;
```

- *Type:* string

[Write] iot:RotateTunnelAccessToken.

---

##### `SearchIndex`<sup>Required</sup> <a name="SearchIndex" id="@cdk_utils/iam.iot.IotActions.property.SearchIndex"></a>

```typescript
public readonly SearchIndex: string;
```

- *Type:* string

[Read] iot:SearchIndex.

---

##### `SendDirectMessage`<sup>Required</sup> <a name="SendDirectMessage" id="@cdk_utils/iam.iot.IotActions.property.SendDirectMessage"></a>

```typescript
public readonly SendDirectMessage: string;
```

- *Type:* string

[Write] iot:SendDirectMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iot.IotActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAuditMitigationActionsTask`<sup>Required</sup> <a name="StartAuditMitigationActionsTask" id="@cdk_utils/iam.iot.IotActions.property.StartAuditMitigationActionsTask"></a>

```typescript
public readonly StartAuditMitigationActionsTask: string;
```

- *Type:* string

[Write] iot:StartAuditMitigationActionsTask.

---

##### `StartCommandExecution`<sup>Required</sup> <a name="StartCommandExecution" id="@cdk_utils/iam.iot.IotActions.property.StartCommandExecution"></a>

```typescript
public readonly StartCommandExecution: string;
```

- *Type:* string

[Write] iot:StartCommandExecution.

---

##### `StartDetectMitigationActionsTask`<sup>Required</sup> <a name="StartDetectMitigationActionsTask" id="@cdk_utils/iam.iot.IotActions.property.StartDetectMitigationActionsTask"></a>

```typescript
public readonly StartDetectMitigationActionsTask: string;
```

- *Type:* string

[Write] iot:StartDetectMitigationActionsTask.

---

##### `StartOnDemandAuditTask`<sup>Required</sup> <a name="StartOnDemandAuditTask" id="@cdk_utils/iam.iot.IotActions.property.StartOnDemandAuditTask"></a>

```typescript
public readonly StartOnDemandAuditTask: string;
```

- *Type:* string

[Write] iot:StartOnDemandAuditTask.

---

##### `StartThingRegistrationTask`<sup>Required</sup> <a name="StartThingRegistrationTask" id="@cdk_utils/iam.iot.IotActions.property.StartThingRegistrationTask"></a>

```typescript
public readonly StartThingRegistrationTask: string;
```

- *Type:* string

[Write] iot:StartThingRegistrationTask.

---

##### `StopThingRegistrationTask`<sup>Required</sup> <a name="StopThingRegistrationTask" id="@cdk_utils/iam.iot.IotActions.property.StopThingRegistrationTask"></a>

```typescript
public readonly StopThingRegistrationTask: string;
```

- *Type:* string

[Write] iot:StopThingRegistrationTask.

---

##### `Subscribe`<sup>Required</sup> <a name="Subscribe" id="@cdk_utils/iam.iot.IotActions.property.Subscribe"></a>

```typescript
public readonly Subscribe: string;
```

- *Type:* string

[Write] iot:Subscribe.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iot.IotActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] iot:TagResource.

---

##### `TestAuthorization`<sup>Required</sup> <a name="TestAuthorization" id="@cdk_utils/iam.iot.IotActions.property.TestAuthorization"></a>

```typescript
public readonly TestAuthorization: string;
```

- *Type:* string

[Read] iot:TestAuthorization.

---

##### `TestInvokeAuthorizer`<sup>Required</sup> <a name="TestInvokeAuthorizer" id="@cdk_utils/iam.iot.IotActions.property.TestInvokeAuthorizer"></a>

```typescript
public readonly TestInvokeAuthorizer: string;
```

- *Type:* string

[Read] iot:TestInvokeAuthorizer.

---

##### `TransferCertificate`<sup>Required</sup> <a name="TransferCertificate" id="@cdk_utils/iam.iot.IotActions.property.TransferCertificate"></a>

```typescript
public readonly TransferCertificate: string;
```

- *Type:* string

[Write] iot:TransferCertificate.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iot.IotActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] iot:UntagResource.

---

##### `UpdateAccountAuditConfiguration`<sup>Required</sup> <a name="UpdateAccountAuditConfiguration" id="@cdk_utils/iam.iot.IotActions.property.UpdateAccountAuditConfiguration"></a>

```typescript
public readonly UpdateAccountAuditConfiguration: string;
```

- *Type:* string

[Write] iot:UpdateAccountAuditConfiguration.

---

##### `UpdateAuditSuppression`<sup>Required</sup> <a name="UpdateAuditSuppression" id="@cdk_utils/iam.iot.IotActions.property.UpdateAuditSuppression"></a>

```typescript
public readonly UpdateAuditSuppression: string;
```

- *Type:* string

[Write] iot:UpdateAuditSuppression.

---

##### `UpdateAuthorizer`<sup>Required</sup> <a name="UpdateAuthorizer" id="@cdk_utils/iam.iot.IotActions.property.UpdateAuthorizer"></a>

```typescript
public readonly UpdateAuthorizer: string;
```

- *Type:* string

[Write] iot:UpdateAuthorizer.

---

##### `UpdateBillingGroup`<sup>Required</sup> <a name="UpdateBillingGroup" id="@cdk_utils/iam.iot.IotActions.property.UpdateBillingGroup"></a>

```typescript
public readonly UpdateBillingGroup: string;
```

- *Type:* string

[Write] iot:UpdateBillingGroup.

---

##### `UpdateCACertificate`<sup>Required</sup> <a name="UpdateCACertificate" id="@cdk_utils/iam.iot.IotActions.property.UpdateCACertificate"></a>

```typescript
public readonly UpdateCACertificate: string;
```

- *Type:* string

[Write] iot:UpdateCACertificate.

---

##### `UpdateCertificate`<sup>Required</sup> <a name="UpdateCertificate" id="@cdk_utils/iam.iot.IotActions.property.UpdateCertificate"></a>

```typescript
public readonly UpdateCertificate: string;
```

- *Type:* string

[Write] iot:UpdateCertificate.

---

##### `UpdateCertificateProvider`<sup>Required</sup> <a name="UpdateCertificateProvider" id="@cdk_utils/iam.iot.IotActions.property.UpdateCertificateProvider"></a>

```typescript
public readonly UpdateCertificateProvider: string;
```

- *Type:* string

[Write] iot:UpdateCertificateProvider.

---

##### `UpdateCommand`<sup>Required</sup> <a name="UpdateCommand" id="@cdk_utils/iam.iot.IotActions.property.UpdateCommand"></a>

```typescript
public readonly UpdateCommand: string;
```

- *Type:* string

[Write] iot:UpdateCommand.

---

##### `UpdateCustomMetric`<sup>Required</sup> <a name="UpdateCustomMetric" id="@cdk_utils/iam.iot.IotActions.property.UpdateCustomMetric"></a>

```typescript
public readonly UpdateCustomMetric: string;
```

- *Type:* string

[Write] iot:UpdateCustomMetric.

---

##### `UpdateDimension`<sup>Required</sup> <a name="UpdateDimension" id="@cdk_utils/iam.iot.IotActions.property.UpdateDimension"></a>

```typescript
public readonly UpdateDimension: string;
```

- *Type:* string

[Write] iot:UpdateDimension.

---

##### `UpdateDomainConfiguration`<sup>Required</sup> <a name="UpdateDomainConfiguration" id="@cdk_utils/iam.iot.IotActions.property.UpdateDomainConfiguration"></a>

```typescript
public readonly UpdateDomainConfiguration: string;
```

- *Type:* string

[Write] iot:UpdateDomainConfiguration.

---

##### `UpdateDynamicThingGroup`<sup>Required</sup> <a name="UpdateDynamicThingGroup" id="@cdk_utils/iam.iot.IotActions.property.UpdateDynamicThingGroup"></a>

```typescript
public readonly UpdateDynamicThingGroup: string;
```

- *Type:* string

[Write] iot:UpdateDynamicThingGroup.

---

##### `UpdateEncryptionConfiguration`<sup>Required</sup> <a name="UpdateEncryptionConfiguration" id="@cdk_utils/iam.iot.IotActions.property.UpdateEncryptionConfiguration"></a>

```typescript
public readonly UpdateEncryptionConfiguration: string;
```

- *Type:* string

[Write] iot:UpdateEncryptionConfiguration.

---

##### `UpdateEventConfigurations`<sup>Required</sup> <a name="UpdateEventConfigurations" id="@cdk_utils/iam.iot.IotActions.property.UpdateEventConfigurations"></a>

```typescript
public readonly UpdateEventConfigurations: string;
```

- *Type:* string

[Write] iot:UpdateEventConfigurations.

---

##### `UpdateFleetMetric`<sup>Required</sup> <a name="UpdateFleetMetric" id="@cdk_utils/iam.iot.IotActions.property.UpdateFleetMetric"></a>

```typescript
public readonly UpdateFleetMetric: string;
```

- *Type:* string

[Write] iot:UpdateFleetMetric.

---

##### `UpdateIndexingConfiguration`<sup>Required</sup> <a name="UpdateIndexingConfiguration" id="@cdk_utils/iam.iot.IotActions.property.UpdateIndexingConfiguration"></a>

```typescript
public readonly UpdateIndexingConfiguration: string;
```

- *Type:* string

[Write] iot:UpdateIndexingConfiguration.

---

##### `UpdateJob`<sup>Required</sup> <a name="UpdateJob" id="@cdk_utils/iam.iot.IotActions.property.UpdateJob"></a>

```typescript
public readonly UpdateJob: string;
```

- *Type:* string

[Write] iot:UpdateJob.

---

##### `UpdateMitigationAction`<sup>Required</sup> <a name="UpdateMitigationAction" id="@cdk_utils/iam.iot.IotActions.property.UpdateMitigationAction"></a>

```typescript
public readonly UpdateMitigationAction: string;
```

- *Type:* string

[Write] iot:UpdateMitigationAction.

---

##### `UpdatePackage`<sup>Required</sup> <a name="UpdatePackage" id="@cdk_utils/iam.iot.IotActions.property.UpdatePackage"></a>

```typescript
public readonly UpdatePackage: string;
```

- *Type:* string

[Write] iot:UpdatePackage.

---

##### `UpdatePackageConfiguration`<sup>Required</sup> <a name="UpdatePackageConfiguration" id="@cdk_utils/iam.iot.IotActions.property.UpdatePackageConfiguration"></a>

```typescript
public readonly UpdatePackageConfiguration: string;
```

- *Type:* string

[Write] iot:UpdatePackageConfiguration.

---

##### `UpdatePackageVersion`<sup>Required</sup> <a name="UpdatePackageVersion" id="@cdk_utils/iam.iot.IotActions.property.UpdatePackageVersion"></a>

```typescript
public readonly UpdatePackageVersion: string;
```

- *Type:* string

[Write] iot:UpdatePackageVersion.

---

##### `UpdateProvisioningTemplate`<sup>Required</sup> <a name="UpdateProvisioningTemplate" id="@cdk_utils/iam.iot.IotActions.property.UpdateProvisioningTemplate"></a>

```typescript
public readonly UpdateProvisioningTemplate: string;
```

- *Type:* string

[Write] iot:UpdateProvisioningTemplate.

---

##### `UpdateRoleAlias`<sup>Required</sup> <a name="UpdateRoleAlias" id="@cdk_utils/iam.iot.IotActions.property.UpdateRoleAlias"></a>

```typescript
public readonly UpdateRoleAlias: string;
```

- *Type:* string

[Write] iot:UpdateRoleAlias.

---

##### `UpdateScheduledAudit`<sup>Required</sup> <a name="UpdateScheduledAudit" id="@cdk_utils/iam.iot.IotActions.property.UpdateScheduledAudit"></a>

```typescript
public readonly UpdateScheduledAudit: string;
```

- *Type:* string

[Write] iot:UpdateScheduledAudit.

---

##### `UpdateSecurityProfile`<sup>Required</sup> <a name="UpdateSecurityProfile" id="@cdk_utils/iam.iot.IotActions.property.UpdateSecurityProfile"></a>

```typescript
public readonly UpdateSecurityProfile: string;
```

- *Type:* string

[Write] iot:UpdateSecurityProfile.

---

##### `UpdateStream`<sup>Required</sup> <a name="UpdateStream" id="@cdk_utils/iam.iot.IotActions.property.UpdateStream"></a>

```typescript
public readonly UpdateStream: string;
```

- *Type:* string

[Write] iot:UpdateStream.

---

##### `UpdateThing`<sup>Required</sup> <a name="UpdateThing" id="@cdk_utils/iam.iot.IotActions.property.UpdateThing"></a>

```typescript
public readonly UpdateThing: string;
```

- *Type:* string

[Write] iot:UpdateThing.

---

##### `UpdateThingGroup`<sup>Required</sup> <a name="UpdateThingGroup" id="@cdk_utils/iam.iot.IotActions.property.UpdateThingGroup"></a>

```typescript
public readonly UpdateThingGroup: string;
```

- *Type:* string

[Write] iot:UpdateThingGroup.

---

##### `UpdateThingGroupsForThing`<sup>Required</sup> <a name="UpdateThingGroupsForThing" id="@cdk_utils/iam.iot.IotActions.property.UpdateThingGroupsForThing"></a>

```typescript
public readonly UpdateThingGroupsForThing: string;
```

- *Type:* string

[Write] iot:UpdateThingGroupsForThing.

---

##### `UpdateThingShadow`<sup>Required</sup> <a name="UpdateThingShadow" id="@cdk_utils/iam.iot.IotActions.property.UpdateThingShadow"></a>

```typescript
public readonly UpdateThingShadow: string;
```

- *Type:* string

[Write] iot:UpdateThingShadow.

---

##### `UpdateThingType`<sup>Required</sup> <a name="UpdateThingType" id="@cdk_utils/iam.iot.IotActions.property.UpdateThingType"></a>

```typescript
public readonly UpdateThingType: string;
```

- *Type:* string

[Write] iot:UpdateThingType.

---

##### `UpdateTopicRuleDestination`<sup>Required</sup> <a name="UpdateTopicRuleDestination" id="@cdk_utils/iam.iot.IotActions.property.UpdateTopicRuleDestination"></a>

```typescript
public readonly UpdateTopicRuleDestination: string;
```

- *Type:* string

[Write] iot:UpdateTopicRuleDestination.

---

##### `ValidateSecurityProfileBehaviors`<sup>Required</sup> <a name="ValidateSecurityProfileBehaviors" id="@cdk_utils/iam.iot.IotActions.property.ValidateSecurityProfileBehaviors"></a>

```typescript
public readonly ValidateSecurityProfileBehaviors: string;
```

- *Type:* string

[Read] iot:ValidateSecurityProfileBehaviors.

---

### IotConditions <a name="IotConditions" id="@cdk_utils/iam.iot.IotConditions"></a>

Condition key constants and builders for iot.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iot.IotConditions.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

new iot.IotConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.clientMode">clientMode</a></code> | Generates a condition block for `iot:ClientMode`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.commandExecutionParameterBoolean">commandExecutionParameterBoolean</a></code> | Generates a condition block for `iot:CommandExecutionParameterBoolean/${CommandParameterName}`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.commandExecutionParameterNumber">commandExecutionParameterNumber</a></code> | Generates a condition block for `iot:CommandExecutionParameterNumber/${CommandParameterName}`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.commandExecutionParameterString">commandExecutionParameterString</a></code> | Generates a condition block for `iot:CommandExecutionParameterString/${CommandParameterName}`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.delete">delete</a></code> | Generates a condition block for `iot:Delete`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.domainName">domainName</a></code> | Generates a condition block for `iot:DomainName`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.includeSocketInformation">includeSocketInformation</a></code> | Generates a condition block for `iot:IncludeSocketInformation`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.thingARN">thingARN</a></code> | Generates a condition block for `iot:thingArn`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.thingGroupARN">thingGroupARN</a></code> | Generates a condition block for `iot:ThingGroupArn`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.topic">topic</a></code> | Generates a condition block for `iot:Topic`. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.tunnelDestinationService">tunnelDestinationService</a></code> | Generates a condition block for `iot:TunnelDestinationService`. |

---

##### `clientMode` <a name="clientMode" id="@cdk_utils/iam.iot.IotConditions.clientMode"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.clientMode(value: string)
```

Generates a condition block for `iot:ClientMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.clientMode.parameter.value"></a>

- *Type:* string

---

##### `commandExecutionParameterBoolean` <a name="commandExecutionParameterBoolean" id="@cdk_utils/iam.iot.IotConditions.commandExecutionParameterBoolean"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.commandExecutionParameterBoolean(value: boolean)
```

Generates a condition block for `iot:CommandExecutionParameterBoolean/${CommandParameterName}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.commandExecutionParameterBoolean.parameter.value"></a>

- *Type:* boolean

---

##### `commandExecutionParameterNumber` <a name="commandExecutionParameterNumber" id="@cdk_utils/iam.iot.IotConditions.commandExecutionParameterNumber"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.commandExecutionParameterNumber(value: number)
```

Generates a condition block for `iot:CommandExecutionParameterNumber/${CommandParameterName}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.commandExecutionParameterNumber.parameter.value"></a>

- *Type:* number

---

##### `commandExecutionParameterString` <a name="commandExecutionParameterString" id="@cdk_utils/iam.iot.IotConditions.commandExecutionParameterString"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.commandExecutionParameterString(value: string)
```

Generates a condition block for `iot:CommandExecutionParameterString/${CommandParameterName}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.commandExecutionParameterString.parameter.value"></a>

- *Type:* string

---

##### `delete` <a name="delete" id="@cdk_utils/iam.iot.IotConditions.delete"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.delete(value: boolean)
```

Generates a condition block for `iot:Delete`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.delete.parameter.value"></a>

- *Type:* boolean

---

##### `domainName` <a name="domainName" id="@cdk_utils/iam.iot.IotConditions.domainName"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.domainName(value: string)
```

Generates a condition block for `iot:DomainName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.domainName.parameter.value"></a>

- *Type:* string

---

##### `includeSocketInformation` <a name="includeSocketInformation" id="@cdk_utils/iam.iot.IotConditions.includeSocketInformation"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.includeSocketInformation(value: boolean)
```

Generates a condition block for `iot:IncludeSocketInformation`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.includeSocketInformation.parameter.value"></a>

- *Type:* boolean

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iot.IotConditions.requestTag"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iot.IotConditions.resourceTag"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iot.IotConditions.tagKeys"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iot.IotConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `thingARN` <a name="thingARN" id="@cdk_utils/iam.iot.IotConditions.thingARN"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.thingARN(value: string)
```

Generates a condition block for `iot:thingArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.thingARN.parameter.value"></a>

- *Type:* string

---

##### `thingGroupARN` <a name="thingGroupARN" id="@cdk_utils/iam.iot.IotConditions.thingGroupARN"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.thingGroupARN(values: string[])
```

Generates a condition block for `iot:ThingGroupArn`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iot.IotConditions.thingGroupARN.parameter.values"></a>

- *Type:* string[]

---

##### `topic` <a name="topic" id="@cdk_utils/iam.iot.IotConditions.topic"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.topic(value: string)
```

Generates a condition block for `iot:Topic`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iot.IotConditions.topic.parameter.value"></a>

- *Type:* string

---

##### `tunnelDestinationService` <a name="tunnelDestinationService" id="@cdk_utils/iam.iot.IotConditions.tunnelDestinationService"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotConditions.tunnelDestinationService(values: string[])
```

Generates a condition block for `iot:TunnelDestinationService`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iot.IotConditions.tunnelDestinationService.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.actionGetConnectionConditionKeys">actionGetConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConnection action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.actionGetThingConnectivityDataConditionKeys">actionGetThingConnectivityDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetThingConnectivityData action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.AttachThingPrincipalConditionKeys">AttachThingPrincipalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AttachThingPrincipal action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CLIENT_MODE">CLIENT_MODE</a></code> | <code>string</code> | Condition key: iot:ClientMode (String). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CloseTunnelConditionKeys">CloseTunnelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CloseTunnel action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.COMMAND_EXECUTION_PARAMETER_BOOLEAN">COMMAND_EXECUTION_PARAMETER_BOOLEAN</a></code> | <code>string</code> | Condition key: iot:CommandExecutionParameterBoolean/${CommandParameterName} (Bool). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.COMMAND_EXECUTION_PARAMETER_NUMBER">COMMAND_EXECUTION_PARAMETER_NUMBER</a></code> | <code>string</code> | Condition key: iot:CommandExecutionParameterNumber/${CommandParameterName} (Numeric). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.COMMAND_EXECUTION_PARAMETER_STRING">COMMAND_EXECUTION_PARAMETER_STRING</a></code> | <code>string</code> | Condition key: iot:CommandExecutionParameterString/${CommandParameterName} (String). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateAuthorizerConditionKeys">CreateAuthorizerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAuthorizer action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateBillingGroupConditionKeys">CreateBillingGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBillingGroup action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateCertificateProviderConditionKeys">CreateCertificateProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCertificateProvider action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateCommandConditionKeys">CreateCommandConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCommand action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateCustomMetricConditionKeys">CreateCustomMetricConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomMetric action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateDimensionConditionKeys">CreateDimensionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDimension action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateDomainConfigurationConditionKeys">CreateDomainConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDomainConfiguration action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateDynamicThingGroupConditionKeys">CreateDynamicThingGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDynamicThingGroup action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateFleetMetricConditionKeys">CreateFleetMetricConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFleetMetric action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateJobConditionKeys">CreateJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJob action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateJobTemplateConditionKeys">CreateJobTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJobTemplate action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateMitigationActionConditionKeys">CreateMitigationActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMitigationAction action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateOTAUpdateConditionKeys">CreateOTAUpdateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOTAUpdate action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreatePackageConditionKeys">CreatePackageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePackage action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreatePackageVersionConditionKeys">CreatePackageVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePackageVersion action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreatePolicyConditionKeys">CreatePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePolicy action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateProvisioningTemplateConditionKeys">CreateProvisioningTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProvisioningTemplate action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateRoleAliasConditionKeys">CreateRoleAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRoleAlias action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateScheduledAuditConditionKeys">CreateScheduledAuditConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScheduledAudit action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateSecurityProfileConditionKeys">CreateSecurityProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSecurityProfile action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateStreamConditionKeys">CreateStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStream action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateThingGroupConditionKeys">CreateThingGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateThingGroup action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateThingTypeConditionKeys">CreateThingTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateThingType action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.CreateTopicRuleConditionKeys">CreateTopicRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTopicRule action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.DELETE">DELETE</a></code> | <code>string</code> | Condition key: iot:Delete (Bool). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.DetachThingPrincipalConditionKeys">DetachThingPrincipalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DetachThingPrincipal action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.DOMAIN_NAME">DOMAIN_NAME</a></code> | <code>string</code> | Condition key: iot:DomainName (String). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.INCLUDE_SOCKET_INFORMATION">INCLUDE_SOCKET_INFORMATION</a></code> | <code>string</code> | Condition key: iot:IncludeSocketInformation (Bool). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.OpenTunnelConditionKeys">OpenTunnelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the OpenTunnel action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.RegisterCACertificateConditionKeys">RegisterCACertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterCACertificate action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.RotateTunnelAccessTokenConditionKeys">RotateTunnelAccessTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RotateTunnelAccessToken action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.SendDirectMessageConditionKeys">SendDirectMessageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendDirectMessage action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.StartCommandExecutionConditionKeys">StartCommandExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartCommandExecution action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.THING_ARN">THING_ARN</a></code> | <code>string</code> | Condition key: iot:thingArn (ARN). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.THING_GROUP_ARN">THING_GROUP_ARN</a></code> | <code>string</code> | Condition key: iot:ThingGroupArn (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.TOPIC">TOPIC</a></code> | <code>string</code> | Condition key: iot:Topic (String). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.TUNNEL_DESTINATION_SERVICE">TUNNEL_DESTINATION_SERVICE</a></code> | <code>string</code> | Condition key: iot:TunnelDestinationService (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iot.IotConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetConnectionConditionKeys`<sup>Required</sup> <a name="actionGetConnectionConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.actionGetConnectionConditionKeys"></a>

```typescript
public readonly actionGetConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConnection action.

---

##### `actionGetThingConnectivityDataConditionKeys`<sup>Required</sup> <a name="actionGetThingConnectivityDataConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.actionGetThingConnectivityDataConditionKeys"></a>

```typescript
public readonly actionGetThingConnectivityDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetThingConnectivityData action.

---

##### `AttachThingPrincipalConditionKeys`<sup>Required</sup> <a name="AttachThingPrincipalConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.AttachThingPrincipalConditionKeys"></a>

```typescript
public readonly AttachThingPrincipalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AttachThingPrincipal action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iot.IotConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.iot.IotConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iot.IotConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CLIENT_MODE`<sup>Required</sup> <a name="CLIENT_MODE" id="@cdk_utils/iam.iot.IotConditions.property.CLIENT_MODE"></a>

```typescript
public readonly CLIENT_MODE: string;
```

- *Type:* string

Condition key: iot:ClientMode (String).

---

##### `CloseTunnelConditionKeys`<sup>Required</sup> <a name="CloseTunnelConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CloseTunnelConditionKeys"></a>

```typescript
public readonly CloseTunnelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CloseTunnel action.

---

##### `COMMAND_EXECUTION_PARAMETER_BOOLEAN`<sup>Required</sup> <a name="COMMAND_EXECUTION_PARAMETER_BOOLEAN" id="@cdk_utils/iam.iot.IotConditions.property.COMMAND_EXECUTION_PARAMETER_BOOLEAN"></a>

```typescript
public readonly COMMAND_EXECUTION_PARAMETER_BOOLEAN: string;
```

- *Type:* string

Condition key: iot:CommandExecutionParameterBoolean/${CommandParameterName} (Bool).

---

##### `COMMAND_EXECUTION_PARAMETER_NUMBER`<sup>Required</sup> <a name="COMMAND_EXECUTION_PARAMETER_NUMBER" id="@cdk_utils/iam.iot.IotConditions.property.COMMAND_EXECUTION_PARAMETER_NUMBER"></a>

```typescript
public readonly COMMAND_EXECUTION_PARAMETER_NUMBER: string;
```

- *Type:* string

Condition key: iot:CommandExecutionParameterNumber/${CommandParameterName} (Numeric).

---

##### `COMMAND_EXECUTION_PARAMETER_STRING`<sup>Required</sup> <a name="COMMAND_EXECUTION_PARAMETER_STRING" id="@cdk_utils/iam.iot.IotConditions.property.COMMAND_EXECUTION_PARAMETER_STRING"></a>

```typescript
public readonly COMMAND_EXECUTION_PARAMETER_STRING: string;
```

- *Type:* string

Condition key: iot:CommandExecutionParameterString/${CommandParameterName} (String).

---

##### `CreateAuthorizerConditionKeys`<sup>Required</sup> <a name="CreateAuthorizerConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateAuthorizerConditionKeys"></a>

```typescript
public readonly CreateAuthorizerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAuthorizer action.

---

##### `CreateBillingGroupConditionKeys`<sup>Required</sup> <a name="CreateBillingGroupConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateBillingGroupConditionKeys"></a>

```typescript
public readonly CreateBillingGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBillingGroup action.

---

##### `CreateCertificateProviderConditionKeys`<sup>Required</sup> <a name="CreateCertificateProviderConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateCertificateProviderConditionKeys"></a>

```typescript
public readonly CreateCertificateProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCertificateProvider action.

---

##### `CreateCommandConditionKeys`<sup>Required</sup> <a name="CreateCommandConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateCommandConditionKeys"></a>

```typescript
public readonly CreateCommandConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCommand action.

---

##### `CreateCustomMetricConditionKeys`<sup>Required</sup> <a name="CreateCustomMetricConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateCustomMetricConditionKeys"></a>

```typescript
public readonly CreateCustomMetricConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomMetric action.

---

##### `CreateDimensionConditionKeys`<sup>Required</sup> <a name="CreateDimensionConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateDimensionConditionKeys"></a>

```typescript
public readonly CreateDimensionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDimension action.

---

##### `CreateDomainConfigurationConditionKeys`<sup>Required</sup> <a name="CreateDomainConfigurationConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateDomainConfigurationConditionKeys"></a>

```typescript
public readonly CreateDomainConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDomainConfiguration action.

---

##### `CreateDynamicThingGroupConditionKeys`<sup>Required</sup> <a name="CreateDynamicThingGroupConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateDynamicThingGroupConditionKeys"></a>

```typescript
public readonly CreateDynamicThingGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDynamicThingGroup action.

---

##### `CreateFleetMetricConditionKeys`<sup>Required</sup> <a name="CreateFleetMetricConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateFleetMetricConditionKeys"></a>

```typescript
public readonly CreateFleetMetricConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFleetMetric action.

---

##### `CreateJobConditionKeys`<sup>Required</sup> <a name="CreateJobConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateJobConditionKeys"></a>

```typescript
public readonly CreateJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJob action.

---

##### `CreateJobTemplateConditionKeys`<sup>Required</sup> <a name="CreateJobTemplateConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateJobTemplateConditionKeys"></a>

```typescript
public readonly CreateJobTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJobTemplate action.

---

##### `CreateMitigationActionConditionKeys`<sup>Required</sup> <a name="CreateMitigationActionConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateMitigationActionConditionKeys"></a>

```typescript
public readonly CreateMitigationActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMitigationAction action.

---

##### `CreateOTAUpdateConditionKeys`<sup>Required</sup> <a name="CreateOTAUpdateConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateOTAUpdateConditionKeys"></a>

```typescript
public readonly CreateOTAUpdateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOTAUpdate action.

---

##### `CreatePackageConditionKeys`<sup>Required</sup> <a name="CreatePackageConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreatePackageConditionKeys"></a>

```typescript
public readonly CreatePackageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePackage action.

---

##### `CreatePackageVersionConditionKeys`<sup>Required</sup> <a name="CreatePackageVersionConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreatePackageVersionConditionKeys"></a>

```typescript
public readonly CreatePackageVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePackageVersion action.

---

##### `CreatePolicyConditionKeys`<sup>Required</sup> <a name="CreatePolicyConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreatePolicyConditionKeys"></a>

```typescript
public readonly CreatePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePolicy action.

---

##### `CreateProvisioningTemplateConditionKeys`<sup>Required</sup> <a name="CreateProvisioningTemplateConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateProvisioningTemplateConditionKeys"></a>

```typescript
public readonly CreateProvisioningTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProvisioningTemplate action.

---

##### `CreateRoleAliasConditionKeys`<sup>Required</sup> <a name="CreateRoleAliasConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateRoleAliasConditionKeys"></a>

```typescript
public readonly CreateRoleAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRoleAlias action.

---

##### `CreateScheduledAuditConditionKeys`<sup>Required</sup> <a name="CreateScheduledAuditConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateScheduledAuditConditionKeys"></a>

```typescript
public readonly CreateScheduledAuditConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScheduledAudit action.

---

##### `CreateSecurityProfileConditionKeys`<sup>Required</sup> <a name="CreateSecurityProfileConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateSecurityProfileConditionKeys"></a>

```typescript
public readonly CreateSecurityProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSecurityProfile action.

---

##### `CreateStreamConditionKeys`<sup>Required</sup> <a name="CreateStreamConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateStreamConditionKeys"></a>

```typescript
public readonly CreateStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStream action.

---

##### `CreateThingGroupConditionKeys`<sup>Required</sup> <a name="CreateThingGroupConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateThingGroupConditionKeys"></a>

```typescript
public readonly CreateThingGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateThingGroup action.

---

##### `CreateThingTypeConditionKeys`<sup>Required</sup> <a name="CreateThingTypeConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateThingTypeConditionKeys"></a>

```typescript
public readonly CreateThingTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateThingType action.

---

##### `CreateTopicRuleConditionKeys`<sup>Required</sup> <a name="CreateTopicRuleConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.CreateTopicRuleConditionKeys"></a>

```typescript
public readonly CreateTopicRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTopicRule action.

---

##### `DELETE`<sup>Required</sup> <a name="DELETE" id="@cdk_utils/iam.iot.IotConditions.property.DELETE"></a>

```typescript
public readonly DELETE: string;
```

- *Type:* string

Condition key: iot:Delete (Bool).

---

##### `DetachThingPrincipalConditionKeys`<sup>Required</sup> <a name="DetachThingPrincipalConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.DetachThingPrincipalConditionKeys"></a>

```typescript
public readonly DetachThingPrincipalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DetachThingPrincipal action.

---

##### `DOMAIN_NAME`<sup>Required</sup> <a name="DOMAIN_NAME" id="@cdk_utils/iam.iot.IotConditions.property.DOMAIN_NAME"></a>

```typescript
public readonly DOMAIN_NAME: string;
```

- *Type:* string

Condition key: iot:DomainName (String).

---

##### `INCLUDE_SOCKET_INFORMATION`<sup>Required</sup> <a name="INCLUDE_SOCKET_INFORMATION" id="@cdk_utils/iam.iot.IotConditions.property.INCLUDE_SOCKET_INFORMATION"></a>

```typescript
public readonly INCLUDE_SOCKET_INFORMATION: string;
```

- *Type:* string

Condition key: iot:IncludeSocketInformation (Bool).

---

##### `OpenTunnelConditionKeys`<sup>Required</sup> <a name="OpenTunnelConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.OpenTunnelConditionKeys"></a>

```typescript
public readonly OpenTunnelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the OpenTunnel action.

---

##### `RegisterCACertificateConditionKeys`<sup>Required</sup> <a name="RegisterCACertificateConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.RegisterCACertificateConditionKeys"></a>

```typescript
public readonly RegisterCACertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterCACertificate action.

---

##### `RotateTunnelAccessTokenConditionKeys`<sup>Required</sup> <a name="RotateTunnelAccessTokenConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.RotateTunnelAccessTokenConditionKeys"></a>

```typescript
public readonly RotateTunnelAccessTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RotateTunnelAccessToken action.

---

##### `SendDirectMessageConditionKeys`<sup>Required</sup> <a name="SendDirectMessageConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.SendDirectMessageConditionKeys"></a>

```typescript
public readonly SendDirectMessageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendDirectMessage action.

---

##### `StartCommandExecutionConditionKeys`<sup>Required</sup> <a name="StartCommandExecutionConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.StartCommandExecutionConditionKeys"></a>

```typescript
public readonly StartCommandExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartCommandExecution action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `THING_ARN`<sup>Required</sup> <a name="THING_ARN" id="@cdk_utils/iam.iot.IotConditions.property.THING_ARN"></a>

```typescript
public readonly THING_ARN: string;
```

- *Type:* string

Condition key: iot:thingArn (ARN).

---

##### `THING_GROUP_ARN`<sup>Required</sup> <a name="THING_GROUP_ARN" id="@cdk_utils/iam.iot.IotConditions.property.THING_GROUP_ARN"></a>

```typescript
public readonly THING_GROUP_ARN: string;
```

- *Type:* string

Condition key: iot:ThingGroupArn (ArrayOfARN).

---

##### `TOPIC`<sup>Required</sup> <a name="TOPIC" id="@cdk_utils/iam.iot.IotConditions.property.TOPIC"></a>

```typescript
public readonly TOPIC: string;
```

- *Type:* string

Condition key: iot:Topic (String).

---

##### `TUNNEL_DESTINATION_SERVICE`<sup>Required</sup> <a name="TUNNEL_DESTINATION_SERVICE" id="@cdk_utils/iam.iot.IotConditions.property.TUNNEL_DESTINATION_SERVICE"></a>

```typescript
public readonly TUNNEL_DESTINATION_SERVICE: string;
```

- *Type:* string

Condition key: iot:TunnelDestinationService (ArrayOfString).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.iot.IotConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### IotOperations <a name="IotOperations" id="@cdk_utils/iam.iot.IotOperations"></a>

API operation to required IAM actions mapping for iot.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iot.IotOperations.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

new iot.IotOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.AcceptCertificateTransfer">AcceptCertificateTransfer</a></code> | <code>string[]</code> | IAM actions required for the AcceptCertificateTransfer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.AddThingToBillingGroup">AddThingToBillingGroup</a></code> | <code>string[]</code> | IAM actions required for the AddThingToBillingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.AddThingToThingGroup">AddThingToThingGroup</a></code> | <code>string[]</code> | IAM actions required for the AddThingToThingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.AssociateSbomWithPackageVersion">AssociateSbomWithPackageVersion</a></code> | <code>string[]</code> | IAM actions required for the AssociateSbomWithPackageVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.AssociateTargetsWithJob">AssociateTargetsWithJob</a></code> | <code>string[]</code> | IAM actions required for the AssociateTargetsWithJob API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.AttachPolicy">AttachPolicy</a></code> | <code>string[]</code> | IAM actions required for the AttachPolicy API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.AttachPrincipalPolicy">AttachPrincipalPolicy</a></code> | <code>string[]</code> | IAM actions required for the AttachPrincipalPolicy API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.AttachSecurityProfile">AttachSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the AttachSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.AttachThingPrincipal">AttachThingPrincipal</a></code> | <code>string[]</code> | IAM actions required for the AttachThingPrincipal API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CancelAuditMitigationActionsTask">CancelAuditMitigationActionsTask</a></code> | <code>string[]</code> | IAM actions required for the CancelAuditMitigationActionsTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CancelAuditTask">CancelAuditTask</a></code> | <code>string[]</code> | IAM actions required for the CancelAuditTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CancelCertificateTransfer">CancelCertificateTransfer</a></code> | <code>string[]</code> | IAM actions required for the CancelCertificateTransfer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CancelDetectMitigationActionsTask">CancelDetectMitigationActionsTask</a></code> | <code>string[]</code> | IAM actions required for the CancelDetectMitigationActionsTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CancelJob">CancelJob</a></code> | <code>string[]</code> | IAM actions required for the CancelJob API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CancelJobExecution">CancelJobExecution</a></code> | <code>string[]</code> | IAM actions required for the CancelJobExecution API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ClearDefaultAuthorizer">ClearDefaultAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the ClearDefaultAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CloseTunnel">CloseTunnel</a></code> | <code>string[]</code> | IAM actions required for the CloseTunnel API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ConfirmTopicRuleDestination">ConfirmTopicRuleDestination</a></code> | <code>string[]</code> | IAM actions required for the ConfirmTopicRuleDestination API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateAuditSuppression">CreateAuditSuppression</a></code> | <code>string[]</code> | IAM actions required for the CreateAuditSuppression API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateAuthorizer">CreateAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the CreateAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateBillingGroup">CreateBillingGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateBillingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateCertificateFromCsr">CreateCertificateFromCsr</a></code> | <code>string[]</code> | IAM actions required for the CreateCertificateFromCsr API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateCertificateProvider">CreateCertificateProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateCertificateProvider API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateCommand">CreateCommand</a></code> | <code>string[]</code> | IAM actions required for the CreateCommand API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateCustomMetric">CreateCustomMetric</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomMetric API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateDimension">CreateDimension</a></code> | <code>string[]</code> | IAM actions required for the CreateDimension API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateDomainConfiguration">CreateDomainConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateDomainConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateDynamicThingGroup">CreateDynamicThingGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDynamicThingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateFleetMetric">CreateFleetMetric</a></code> | <code>string[]</code> | IAM actions required for the CreateFleetMetric API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateJob">CreateJob</a></code> | <code>string[]</code> | IAM actions required for the CreateJob API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateJobTemplate">CreateJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateKeysAndCertificate">CreateKeysAndCertificate</a></code> | <code>string[]</code> | IAM actions required for the CreateKeysAndCertificate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateMitigationAction">CreateMitigationAction</a></code> | <code>string[]</code> | IAM actions required for the CreateMitigationAction API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateOTAUpdate">CreateOTAUpdate</a></code> | <code>string[]</code> | IAM actions required for the CreateOTAUpdate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreatePackage">CreatePackage</a></code> | <code>string[]</code> | IAM actions required for the CreatePackage API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreatePackageVersion">CreatePackageVersion</a></code> | <code>string[]</code> | IAM actions required for the CreatePackageVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreatePolicy">CreatePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicy API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreatePolicyVersion">CreatePolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateProvisioningClaim">CreateProvisioningClaim</a></code> | <code>string[]</code> | IAM actions required for the CreateProvisioningClaim API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateProvisioningTemplate">CreateProvisioningTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateProvisioningTemplate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateProvisioningTemplateVersion">CreateProvisioningTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateProvisioningTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateRoleAlias">CreateRoleAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateRoleAlias API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateScheduledAudit">CreateScheduledAudit</a></code> | <code>string[]</code> | IAM actions required for the CreateScheduledAudit API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateSecurityProfile">CreateSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateStream">CreateStream</a></code> | <code>string[]</code> | IAM actions required for the CreateStream API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateThing">CreateThing</a></code> | <code>string[]</code> | IAM actions required for the CreateThing API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateThingGroup">CreateThingGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateThingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateThingType">CreateThingType</a></code> | <code>string[]</code> | IAM actions required for the CreateThingType API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateTopicRule">CreateTopicRule</a></code> | <code>string[]</code> | IAM actions required for the CreateTopicRule API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.CreateTopicRuleDestination">CreateTopicRuleDestination</a></code> | <code>string[]</code> | IAM actions required for the CreateTopicRuleDestination API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteAccountAuditConfiguration">DeleteAccountAuditConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountAuditConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteAuditSuppression">DeleteAuditSuppression</a></code> | <code>string[]</code> | IAM actions required for the DeleteAuditSuppression API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteAuthorizer">DeleteAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the DeleteAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteBillingGroup">DeleteBillingGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteBillingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteCACertificate">DeleteCACertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteCACertificate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteCertificate">DeleteCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteCertificate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteCertificateProvider">DeleteCertificateProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteCertificateProvider API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteCommand">DeleteCommand</a></code> | <code>string[]</code> | IAM actions required for the DeleteCommand API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteCommandExecution">DeleteCommandExecution</a></code> | <code>string[]</code> | IAM actions required for the DeleteCommandExecution API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteCustomMetric">DeleteCustomMetric</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomMetric API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteDimension">DeleteDimension</a></code> | <code>string[]</code> | IAM actions required for the DeleteDimension API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteDomainConfiguration">DeleteDomainConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteDynamicThingGroup">DeleteDynamicThingGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDynamicThingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteFleetMetric">DeleteFleetMetric</a></code> | <code>string[]</code> | IAM actions required for the DeleteFleetMetric API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteJob">DeleteJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteJob API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteJobExecution">DeleteJobExecution</a></code> | <code>string[]</code> | IAM actions required for the DeleteJobExecution API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteJobTemplate">DeleteJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteMitigationAction">DeleteMitigationAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteMitigationAction API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteOTAUpdate">DeleteOTAUpdate</a></code> | <code>string[]</code> | IAM actions required for the DeleteOTAUpdate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeletePackage">DeletePackage</a></code> | <code>string[]</code> | IAM actions required for the DeletePackage API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeletePackageVersion">DeletePackageVersion</a></code> | <code>string[]</code> | IAM actions required for the DeletePackageVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeletePolicyVersion">DeletePolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteProvisioningTemplate">DeleteProvisioningTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteProvisioningTemplate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteProvisioningTemplateVersion">DeleteProvisioningTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteProvisioningTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteRegistrationCode">DeleteRegistrationCode</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistrationCode API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteRoleAlias">DeleteRoleAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoleAlias API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteScheduledAudit">DeleteScheduledAudit</a></code> | <code>string[]</code> | IAM actions required for the DeleteScheduledAudit API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteSecurityProfile">DeleteSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteStream">DeleteStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteStream API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteThing">DeleteThing</a></code> | <code>string[]</code> | IAM actions required for the DeleteThing API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteThingGroup">DeleteThingGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteThingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteThingShadow">DeleteThingShadow</a></code> | <code>string[]</code> | IAM actions required for the DeleteThingShadow API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteThingType">DeleteThingType</a></code> | <code>string[]</code> | IAM actions required for the DeleteThingType API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteTopicRule">DeleteTopicRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteTopicRule API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteTopicRuleDestination">DeleteTopicRuleDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteTopicRuleDestination API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeleteV2LoggingLevel">DeleteV2LoggingLevel</a></code> | <code>string[]</code> | IAM actions required for the DeleteV2LoggingLevel API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DeprecateThingType">DeprecateThingType</a></code> | <code>string[]</code> | IAM actions required for the DeprecateThingType API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeAccountAuditConfiguration">DescribeAccountAuditConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountAuditConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeAuditFinding">DescribeAuditFinding</a></code> | <code>string[]</code> | IAM actions required for the DescribeAuditFinding API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeAuditMitigationActionsTask">DescribeAuditMitigationActionsTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeAuditMitigationActionsTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeAuditSuppression">DescribeAuditSuppression</a></code> | <code>string[]</code> | IAM actions required for the DescribeAuditSuppression API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeAuditTask">DescribeAuditTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeAuditTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeAuthorizer">DescribeAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the DescribeAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeBillingGroup">DescribeBillingGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeBillingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeCACertificate">DescribeCACertificate</a></code> | <code>string[]</code> | IAM actions required for the DescribeCACertificate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeCertificate">DescribeCertificate</a></code> | <code>string[]</code> | IAM actions required for the DescribeCertificate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeCertificateProvider">DescribeCertificateProvider</a></code> | <code>string[]</code> | IAM actions required for the DescribeCertificateProvider API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeCustomMetric">DescribeCustomMetric</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomMetric API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeDefaultAuthorizer">DescribeDefaultAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the DescribeDefaultAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeDetectMitigationActionsTask">DescribeDetectMitigationActionsTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeDetectMitigationActionsTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeDimension">DescribeDimension</a></code> | <code>string[]</code> | IAM actions required for the DescribeDimension API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeDomainConfiguration">DescribeDomainConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomainConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeEncryptionConfiguration">DescribeEncryptionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeEncryptionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeEndpoint">DescribeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeEventConfigurations">DescribeEventConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventConfigurations API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeFleetMetric">DescribeFleetMetric</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetMetric API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeIndex">DescribeIndex</a></code> | <code>string[]</code> | IAM actions required for the DescribeIndex API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeJob">DescribeJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeJob API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeJobExecution">DescribeJobExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobExecution API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeJobTemplate">DescribeJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeManagedJobTemplate">DescribeManagedJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the DescribeManagedJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeMitigationAction">DescribeMitigationAction</a></code> | <code>string[]</code> | IAM actions required for the DescribeMitigationAction API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeProvisioningTemplate">DescribeProvisioningTemplate</a></code> | <code>string[]</code> | IAM actions required for the DescribeProvisioningTemplate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeProvisioningTemplateVersion">DescribeProvisioningTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the DescribeProvisioningTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeRoleAlias">DescribeRoleAlias</a></code> | <code>string[]</code> | IAM actions required for the DescribeRoleAlias API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeScheduledAudit">DescribeScheduledAudit</a></code> | <code>string[]</code> | IAM actions required for the DescribeScheduledAudit API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeSecurityProfile">DescribeSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the DescribeSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeStream">DescribeStream</a></code> | <code>string[]</code> | IAM actions required for the DescribeStream API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeThing">DescribeThing</a></code> | <code>string[]</code> | IAM actions required for the DescribeThing API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeThingGroup">DescribeThingGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeThingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeThingRegistrationTask">DescribeThingRegistrationTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeThingRegistrationTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeThingType">DescribeThingType</a></code> | <code>string[]</code> | IAM actions required for the DescribeThingType API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DescribeTunnel">DescribeTunnel</a></code> | <code>string[]</code> | IAM actions required for the DescribeTunnel API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DetachPolicy">DetachPolicy</a></code> | <code>string[]</code> | IAM actions required for the DetachPolicy API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DetachPrincipalPolicy">DetachPrincipalPolicy</a></code> | <code>string[]</code> | IAM actions required for the DetachPrincipalPolicy API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DetachSecurityProfile">DetachSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the DetachSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DetachThingPrincipal">DetachThingPrincipal</a></code> | <code>string[]</code> | IAM actions required for the DetachThingPrincipal API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DisableTopicRule">DisableTopicRule</a></code> | <code>string[]</code> | IAM actions required for the DisableTopicRule API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.DisassociateSbomFromPackageVersion">DisassociateSbomFromPackageVersion</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSbomFromPackageVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.EnableTopicRule">EnableTopicRule</a></code> | <code>string[]</code> | IAM actions required for the EnableTopicRule API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListActiveViolations">ListActiveViolations</a></code> | <code>string[]</code> | IAM actions required for the ListActiveViolations API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListAttachedPolicies">ListAttachedPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListAttachedPolicies API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListAuditFindings">ListAuditFindings</a></code> | <code>string[]</code> | IAM actions required for the ListAuditFindings API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListAuditMitigationActionsExecutions">ListAuditMitigationActionsExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListAuditMitigationActionsExecutions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListAuditMitigationActionsTasks">ListAuditMitigationActionsTasks</a></code> | <code>string[]</code> | IAM actions required for the ListAuditMitigationActionsTasks API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListAuditSuppressions">ListAuditSuppressions</a></code> | <code>string[]</code> | IAM actions required for the ListAuditSuppressions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListAuditTasks">ListAuditTasks</a></code> | <code>string[]</code> | IAM actions required for the ListAuditTasks API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListAuthorizers">ListAuthorizers</a></code> | <code>string[]</code> | IAM actions required for the ListAuthorizers API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListBillingGroups">ListBillingGroups</a></code> | <code>string[]</code> | IAM actions required for the ListBillingGroups API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListCACertificates">ListCACertificates</a></code> | <code>string[]</code> | IAM actions required for the ListCACertificates API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListCertificateProviders">ListCertificateProviders</a></code> | <code>string[]</code> | IAM actions required for the ListCertificateProviders API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListCertificates">ListCertificates</a></code> | <code>string[]</code> | IAM actions required for the ListCertificates API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListCertificatesByCA">ListCertificatesByCA</a></code> | <code>string[]</code> | IAM actions required for the ListCertificatesByCA API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListCommandExecutions">ListCommandExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListCommandExecutions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListCommands">ListCommands</a></code> | <code>string[]</code> | IAM actions required for the ListCommands API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListCustomMetrics">ListCustomMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListCustomMetrics API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListDetectMitigationActionsExecutions">ListDetectMitigationActionsExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListDetectMitigationActionsExecutions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListDetectMitigationActionsTasks">ListDetectMitigationActionsTasks</a></code> | <code>string[]</code> | IAM actions required for the ListDetectMitigationActionsTasks API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListDimensions">ListDimensions</a></code> | <code>string[]</code> | IAM actions required for the ListDimensions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListDomainConfigurations">ListDomainConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListDomainConfigurations API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListFleetMetrics">ListFleetMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListFleetMetrics API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListIndices">ListIndices</a></code> | <code>string[]</code> | IAM actions required for the ListIndices API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListJobExecutionsForJob">ListJobExecutionsForJob</a></code> | <code>string[]</code> | IAM actions required for the ListJobExecutionsForJob API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListJobExecutionsForThing">ListJobExecutionsForThing</a></code> | <code>string[]</code> | IAM actions required for the ListJobExecutionsForThing API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListJobTemplates">ListJobTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListJobTemplates API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListManagedJobTemplates">ListManagedJobTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListManagedJobTemplates API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListMetricValues">ListMetricValues</a></code> | <code>string[]</code> | IAM actions required for the ListMetricValues API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListMitigationActions">ListMitigationActions</a></code> | <code>string[]</code> | IAM actions required for the ListMitigationActions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListNamedShadowsForThing">ListNamedShadowsForThing</a></code> | <code>string[]</code> | IAM actions required for the ListNamedShadowsForThing API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListOTAUpdates">ListOTAUpdates</a></code> | <code>string[]</code> | IAM actions required for the ListOTAUpdates API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListOutgoingCertificates">ListOutgoingCertificates</a></code> | <code>string[]</code> | IAM actions required for the ListOutgoingCertificates API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListPackages">ListPackages</a></code> | <code>string[]</code> | IAM actions required for the ListPackages API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListPackageVersions">ListPackageVersions</a></code> | <code>string[]</code> | IAM actions required for the ListPackageVersions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListPolicies">ListPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPolicies API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListPolicyPrincipals">ListPolicyPrincipals</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyPrincipals API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListPolicyVersions">ListPolicyVersions</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyVersions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListPrincipalPolicies">ListPrincipalPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPrincipalPolicies API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListPrincipalThings">ListPrincipalThings</a></code> | <code>string[]</code> | IAM actions required for the ListPrincipalThings API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListPrincipalThingsV2">ListPrincipalThingsV2</a></code> | <code>string[]</code> | IAM actions required for the ListPrincipalThingsV2 API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListProvisioningTemplates">ListProvisioningTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListProvisioningTemplates API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListProvisioningTemplateVersions">ListProvisioningTemplateVersions</a></code> | <code>string[]</code> | IAM actions required for the ListProvisioningTemplateVersions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListRelatedResourcesForAuditFinding">ListRelatedResourcesForAuditFinding</a></code> | <code>string[]</code> | IAM actions required for the ListRelatedResourcesForAuditFinding API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListRetainedMessages">ListRetainedMessages</a></code> | <code>string[]</code> | IAM actions required for the ListRetainedMessages API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListRoleAliases">ListRoleAliases</a></code> | <code>string[]</code> | IAM actions required for the ListRoleAliases API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListSbomValidationResults">ListSbomValidationResults</a></code> | <code>string[]</code> | IAM actions required for the ListSbomValidationResults API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListScheduledAudits">ListScheduledAudits</a></code> | <code>string[]</code> | IAM actions required for the ListScheduledAudits API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListSecurityProfiles">ListSecurityProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityProfiles API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListSecurityProfilesForTarget">ListSecurityProfilesForTarget</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityProfilesForTarget API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListStreams">ListStreams</a></code> | <code>string[]</code> | IAM actions required for the ListStreams API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListTargetsForPolicy">ListTargetsForPolicy</a></code> | <code>string[]</code> | IAM actions required for the ListTargetsForPolicy API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListTargetsForSecurityProfile">ListTargetsForSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the ListTargetsForSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListThingGroups">ListThingGroups</a></code> | <code>string[]</code> | IAM actions required for the ListThingGroups API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListThingGroupsForThing">ListThingGroupsForThing</a></code> | <code>string[]</code> | IAM actions required for the ListThingGroupsForThing API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListThingPrincipals">ListThingPrincipals</a></code> | <code>string[]</code> | IAM actions required for the ListThingPrincipals API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListThingPrincipalsV2">ListThingPrincipalsV2</a></code> | <code>string[]</code> | IAM actions required for the ListThingPrincipalsV2 API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListThingRegistrationTaskReports">ListThingRegistrationTaskReports</a></code> | <code>string[]</code> | IAM actions required for the ListThingRegistrationTaskReports API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListThingRegistrationTasks">ListThingRegistrationTasks</a></code> | <code>string[]</code> | IAM actions required for the ListThingRegistrationTasks API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListThings">ListThings</a></code> | <code>string[]</code> | IAM actions required for the ListThings API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListThingsInBillingGroup">ListThingsInBillingGroup</a></code> | <code>string[]</code> | IAM actions required for the ListThingsInBillingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListThingsInThingGroup">ListThingsInThingGroup</a></code> | <code>string[]</code> | IAM actions required for the ListThingsInThingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListThingTypes">ListThingTypes</a></code> | <code>string[]</code> | IAM actions required for the ListThingTypes API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListTopicRuleDestinations">ListTopicRuleDestinations</a></code> | <code>string[]</code> | IAM actions required for the ListTopicRuleDestinations API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListTopicRules">ListTopicRules</a></code> | <code>string[]</code> | IAM actions required for the ListTopicRules API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListTunnels">ListTunnels</a></code> | <code>string[]</code> | IAM actions required for the ListTunnels API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListV2LoggingLevels">ListV2LoggingLevels</a></code> | <code>string[]</code> | IAM actions required for the ListV2LoggingLevels API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ListViolationEvents">ListViolationEvents</a></code> | <code>string[]</code> | IAM actions required for the ListViolationEvents API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.OpenTunnel">OpenTunnel</a></code> | <code>string[]</code> | IAM actions required for the OpenTunnel API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetBehaviorModelTrainingSummaries">opGetBehaviorModelTrainingSummaries</a></code> | <code>string[]</code> | IAM actions required for the GetBehaviorModelTrainingSummaries API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetBucketsAggregation">opGetBucketsAggregation</a></code> | <code>string[]</code> | IAM actions required for the GetBucketsAggregation API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetCardinality">opGetCardinality</a></code> | <code>string[]</code> | IAM actions required for the GetCardinality API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetCommand">opGetCommand</a></code> | <code>string[]</code> | IAM actions required for the GetCommand API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetCommandExecution">opGetCommandExecution</a></code> | <code>string[]</code> | IAM actions required for the GetCommandExecution API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetConnection">opGetConnection</a></code> | <code>string[]</code> | IAM actions required for the GetConnection API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetEffectivePolicies">opGetEffectivePolicies</a></code> | <code>string[]</code> | IAM actions required for the GetEffectivePolicies API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetIndexingConfiguration">opGetIndexingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetIndexingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetJobDocument">opGetJobDocument</a></code> | <code>string[]</code> | IAM actions required for the GetJobDocument API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetLoggingOptions">opGetLoggingOptions</a></code> | <code>string[]</code> | IAM actions required for the GetLoggingOptions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetOTAUpdate">opGetOTAUpdate</a></code> | <code>string[]</code> | IAM actions required for the GetOTAUpdate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetPackage">opGetPackage</a></code> | <code>string[]</code> | IAM actions required for the GetPackage API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetPackageConfiguration">opGetPackageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetPackageConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetPackageVersion">opGetPackageVersion</a></code> | <code>string[]</code> | IAM actions required for the GetPackageVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetPercentiles">opGetPercentiles</a></code> | <code>string[]</code> | IAM actions required for the GetPercentiles API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetPolicyVersion">opGetPolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the GetPolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetRegistrationCode">opGetRegistrationCode</a></code> | <code>string[]</code> | IAM actions required for the GetRegistrationCode API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetRetainedMessage">opGetRetainedMessage</a></code> | <code>string[]</code> | IAM actions required for the GetRetainedMessage API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetStatistics">opGetStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetStatistics API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetThingConnectivityData">opGetThingConnectivityData</a></code> | <code>string[]</code> | IAM actions required for the GetThingConnectivityData API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetThingShadow">opGetThingShadow</a></code> | <code>string[]</code> | IAM actions required for the GetThingShadow API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetTopicRule">opGetTopicRule</a></code> | <code>string[]</code> | IAM actions required for the GetTopicRule API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetTopicRuleDestination">opGetTopicRuleDestination</a></code> | <code>string[]</code> | IAM actions required for the GetTopicRuleDestination API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opGetV2LoggingOptions">opGetV2LoggingOptions</a></code> | <code>string[]</code> | IAM actions required for the GetV2LoggingOptions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opSetDefaultAuthorizer">opSetDefaultAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the SetDefaultAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opSetDefaultPolicyVersion">opSetDefaultPolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the SetDefaultPolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opSetLoggingOptions">opSetLoggingOptions</a></code> | <code>string[]</code> | IAM actions required for the SetLoggingOptions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opSetV2LoggingLevel">opSetV2LoggingLevel</a></code> | <code>string[]</code> | IAM actions required for the SetV2LoggingLevel API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.opSetV2LoggingOptions">opSetV2LoggingOptions</a></code> | <code>string[]</code> | IAM actions required for the SetV2LoggingOptions API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.Publish">Publish</a></code> | <code>string[]</code> | IAM actions required for the Publish API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.PutVerificationStateOnViolation">PutVerificationStateOnViolation</a></code> | <code>string[]</code> | IAM actions required for the PutVerificationStateOnViolation API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.RegisterCACertificate">RegisterCACertificate</a></code> | <code>string[]</code> | IAM actions required for the RegisterCACertificate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.RegisterCertificate">RegisterCertificate</a></code> | <code>string[]</code> | IAM actions required for the RegisterCertificate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.RegisterCertificateWithoutCA">RegisterCertificateWithoutCA</a></code> | <code>string[]</code> | IAM actions required for the RegisterCertificateWithoutCA API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.RegisterThing">RegisterThing</a></code> | <code>string[]</code> | IAM actions required for the RegisterThing API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.RejectCertificateTransfer">RejectCertificateTransfer</a></code> | <code>string[]</code> | IAM actions required for the RejectCertificateTransfer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.RemoveThingFromBillingGroup">RemoveThingFromBillingGroup</a></code> | <code>string[]</code> | IAM actions required for the RemoveThingFromBillingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.RemoveThingFromThingGroup">RemoveThingFromThingGroup</a></code> | <code>string[]</code> | IAM actions required for the RemoveThingFromThingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ReplaceTopicRule">ReplaceTopicRule</a></code> | <code>string[]</code> | IAM actions required for the ReplaceTopicRule API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.RotateTunnelAccessToken">RotateTunnelAccessToken</a></code> | <code>string[]</code> | IAM actions required for the RotateTunnelAccessToken API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.SearchIndex">SearchIndex</a></code> | <code>string[]</code> | IAM actions required for the SearchIndex API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.SendDirectMessage">SendDirectMessage</a></code> | <code>string[]</code> | IAM actions required for the SendDirectMessage API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.StartAuditMitigationActionsTask">StartAuditMitigationActionsTask</a></code> | <code>string[]</code> | IAM actions required for the StartAuditMitigationActionsTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.StartDetectMitigationActionsTask">StartDetectMitigationActionsTask</a></code> | <code>string[]</code> | IAM actions required for the StartDetectMitigationActionsTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.StartOnDemandAuditTask">StartOnDemandAuditTask</a></code> | <code>string[]</code> | IAM actions required for the StartOnDemandAuditTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.StartThingRegistrationTask">StartThingRegistrationTask</a></code> | <code>string[]</code> | IAM actions required for the StartThingRegistrationTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.StopThingRegistrationTask">StopThingRegistrationTask</a></code> | <code>string[]</code> | IAM actions required for the StopThingRegistrationTask API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.TestAuthorization">TestAuthorization</a></code> | <code>string[]</code> | IAM actions required for the TestAuthorization API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.TestInvokeAuthorizer">TestInvokeAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the TestInvokeAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.TransferCertificate">TransferCertificate</a></code> | <code>string[]</code> | IAM actions required for the TransferCertificate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateAccountAuditConfiguration">UpdateAccountAuditConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountAuditConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateAuditSuppression">UpdateAuditSuppression</a></code> | <code>string[]</code> | IAM actions required for the UpdateAuditSuppression API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateAuthorizer">UpdateAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the UpdateAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateBillingGroup">UpdateBillingGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateBillingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateCACertificate">UpdateCACertificate</a></code> | <code>string[]</code> | IAM actions required for the UpdateCACertificate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateCertificate">UpdateCertificate</a></code> | <code>string[]</code> | IAM actions required for the UpdateCertificate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateCertificateProvider">UpdateCertificateProvider</a></code> | <code>string[]</code> | IAM actions required for the UpdateCertificateProvider API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateCommand">UpdateCommand</a></code> | <code>string[]</code> | IAM actions required for the UpdateCommand API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateCustomMetric">UpdateCustomMetric</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomMetric API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateDimension">UpdateDimension</a></code> | <code>string[]</code> | IAM actions required for the UpdateDimension API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateDomainConfiguration">UpdateDomainConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateDynamicThingGroup">UpdateDynamicThingGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateDynamicThingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateEncryptionConfiguration">UpdateEncryptionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateEncryptionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateEventConfigurations">UpdateEventConfigurations</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventConfigurations API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateFleetMetric">UpdateFleetMetric</a></code> | <code>string[]</code> | IAM actions required for the UpdateFleetMetric API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateIndexingConfiguration">UpdateIndexingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateIndexingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateJob">UpdateJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateJob API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateMitigationAction">UpdateMitigationAction</a></code> | <code>string[]</code> | IAM actions required for the UpdateMitigationAction API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdatePackage">UpdatePackage</a></code> | <code>string[]</code> | IAM actions required for the UpdatePackage API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdatePackageConfiguration">UpdatePackageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdatePackageConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdatePackageVersion">UpdatePackageVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdatePackageVersion API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateProvisioningTemplate">UpdateProvisioningTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateProvisioningTemplate API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateRoleAlias">UpdateRoleAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoleAlias API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateScheduledAudit">UpdateScheduledAudit</a></code> | <code>string[]</code> | IAM actions required for the UpdateScheduledAudit API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateSecurityProfile">UpdateSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateStream">UpdateStream</a></code> | <code>string[]</code> | IAM actions required for the UpdateStream API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateThing">UpdateThing</a></code> | <code>string[]</code> | IAM actions required for the UpdateThing API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateThingGroup">UpdateThingGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateThingGroup API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateThingGroupsForThing">UpdateThingGroupsForThing</a></code> | <code>string[]</code> | IAM actions required for the UpdateThingGroupsForThing API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateThingShadow">UpdateThingShadow</a></code> | <code>string[]</code> | IAM actions required for the UpdateThingShadow API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateThingType">UpdateThingType</a></code> | <code>string[]</code> | IAM actions required for the UpdateThingType API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.UpdateTopicRuleDestination">UpdateTopicRuleDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateTopicRuleDestination API call. |
| <code><a href="#@cdk_utils/iam.iot.IotOperations.property.ValidateSecurityProfileBehaviors">ValidateSecurityProfileBehaviors</a></code> | <code>string[]</code> | IAM actions required for the ValidateSecurityProfileBehaviors API call. |

---

##### `AcceptCertificateTransfer`<sup>Required</sup> <a name="AcceptCertificateTransfer" id="@cdk_utils/iam.iot.IotOperations.property.AcceptCertificateTransfer"></a>

```typescript
public readonly AcceptCertificateTransfer: string[];
```

- *Type:* string[]

IAM actions required for the AcceptCertificateTransfer API call.

---

##### `AddThingToBillingGroup`<sup>Required</sup> <a name="AddThingToBillingGroup" id="@cdk_utils/iam.iot.IotOperations.property.AddThingToBillingGroup"></a>

```typescript
public readonly AddThingToBillingGroup: string[];
```

- *Type:* string[]

IAM actions required for the AddThingToBillingGroup API call.

---

##### `AddThingToThingGroup`<sup>Required</sup> <a name="AddThingToThingGroup" id="@cdk_utils/iam.iot.IotOperations.property.AddThingToThingGroup"></a>

```typescript
public readonly AddThingToThingGroup: string[];
```

- *Type:* string[]

IAM actions required for the AddThingToThingGroup API call.

---

##### `AssociateSbomWithPackageVersion`<sup>Required</sup> <a name="AssociateSbomWithPackageVersion" id="@cdk_utils/iam.iot.IotOperations.property.AssociateSbomWithPackageVersion"></a>

```typescript
public readonly AssociateSbomWithPackageVersion: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSbomWithPackageVersion API call.

---

##### `AssociateTargetsWithJob`<sup>Required</sup> <a name="AssociateTargetsWithJob" id="@cdk_utils/iam.iot.IotOperations.property.AssociateTargetsWithJob"></a>

```typescript
public readonly AssociateTargetsWithJob: string[];
```

- *Type:* string[]

IAM actions required for the AssociateTargetsWithJob API call.

---

##### `AttachPolicy`<sup>Required</sup> <a name="AttachPolicy" id="@cdk_utils/iam.iot.IotOperations.property.AttachPolicy"></a>

```typescript
public readonly AttachPolicy: string[];
```

- *Type:* string[]

IAM actions required for the AttachPolicy API call.

---

##### `AttachPrincipalPolicy`<sup>Required</sup> <a name="AttachPrincipalPolicy" id="@cdk_utils/iam.iot.IotOperations.property.AttachPrincipalPolicy"></a>

```typescript
public readonly AttachPrincipalPolicy: string[];
```

- *Type:* string[]

IAM actions required for the AttachPrincipalPolicy API call.

---

##### `AttachSecurityProfile`<sup>Required</sup> <a name="AttachSecurityProfile" id="@cdk_utils/iam.iot.IotOperations.property.AttachSecurityProfile"></a>

```typescript
public readonly AttachSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the AttachSecurityProfile API call.

---

##### `AttachThingPrincipal`<sup>Required</sup> <a name="AttachThingPrincipal" id="@cdk_utils/iam.iot.IotOperations.property.AttachThingPrincipal"></a>

```typescript
public readonly AttachThingPrincipal: string[];
```

- *Type:* string[]

IAM actions required for the AttachThingPrincipal API call.

---

##### `CancelAuditMitigationActionsTask`<sup>Required</sup> <a name="CancelAuditMitigationActionsTask" id="@cdk_utils/iam.iot.IotOperations.property.CancelAuditMitigationActionsTask"></a>

```typescript
public readonly CancelAuditMitigationActionsTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelAuditMitigationActionsTask API call.

---

##### `CancelAuditTask`<sup>Required</sup> <a name="CancelAuditTask" id="@cdk_utils/iam.iot.IotOperations.property.CancelAuditTask"></a>

```typescript
public readonly CancelAuditTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelAuditTask API call.

---

##### `CancelCertificateTransfer`<sup>Required</sup> <a name="CancelCertificateTransfer" id="@cdk_utils/iam.iot.IotOperations.property.CancelCertificateTransfer"></a>

```typescript
public readonly CancelCertificateTransfer: string[];
```

- *Type:* string[]

IAM actions required for the CancelCertificateTransfer API call.

---

##### `CancelDetectMitigationActionsTask`<sup>Required</sup> <a name="CancelDetectMitigationActionsTask" id="@cdk_utils/iam.iot.IotOperations.property.CancelDetectMitigationActionsTask"></a>

```typescript
public readonly CancelDetectMitigationActionsTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelDetectMitigationActionsTask API call.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.iot.IotOperations.property.CancelJob"></a>

```typescript
public readonly CancelJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelJob API call.

---

##### `CancelJobExecution`<sup>Required</sup> <a name="CancelJobExecution" id="@cdk_utils/iam.iot.IotOperations.property.CancelJobExecution"></a>

```typescript
public readonly CancelJobExecution: string[];
```

- *Type:* string[]

IAM actions required for the CancelJobExecution API call.

---

##### `ClearDefaultAuthorizer`<sup>Required</sup> <a name="ClearDefaultAuthorizer" id="@cdk_utils/iam.iot.IotOperations.property.ClearDefaultAuthorizer"></a>

```typescript
public readonly ClearDefaultAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the ClearDefaultAuthorizer API call.

---

##### `CloseTunnel`<sup>Required</sup> <a name="CloseTunnel" id="@cdk_utils/iam.iot.IotOperations.property.CloseTunnel"></a>

```typescript
public readonly CloseTunnel: string[];
```

- *Type:* string[]

IAM actions required for the CloseTunnel API call.

---

##### `ConfirmTopicRuleDestination`<sup>Required</sup> <a name="ConfirmTopicRuleDestination" id="@cdk_utils/iam.iot.IotOperations.property.ConfirmTopicRuleDestination"></a>

```typescript
public readonly ConfirmTopicRuleDestination: string[];
```

- *Type:* string[]

IAM actions required for the ConfirmTopicRuleDestination API call.

---

##### `CreateAuditSuppression`<sup>Required</sup> <a name="CreateAuditSuppression" id="@cdk_utils/iam.iot.IotOperations.property.CreateAuditSuppression"></a>

```typescript
public readonly CreateAuditSuppression: string[];
```

- *Type:* string[]

IAM actions required for the CreateAuditSuppression API call.

---

##### `CreateAuthorizer`<sup>Required</sup> <a name="CreateAuthorizer" id="@cdk_utils/iam.iot.IotOperations.property.CreateAuthorizer"></a>

```typescript
public readonly CreateAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the CreateAuthorizer API call.

---

##### `CreateBillingGroup`<sup>Required</sup> <a name="CreateBillingGroup" id="@cdk_utils/iam.iot.IotOperations.property.CreateBillingGroup"></a>

```typescript
public readonly CreateBillingGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateBillingGroup API call.

---

##### `CreateCertificateFromCsr`<sup>Required</sup> <a name="CreateCertificateFromCsr" id="@cdk_utils/iam.iot.IotOperations.property.CreateCertificateFromCsr"></a>

```typescript
public readonly CreateCertificateFromCsr: string[];
```

- *Type:* string[]

IAM actions required for the CreateCertificateFromCsr API call.

---

##### `CreateCertificateProvider`<sup>Required</sup> <a name="CreateCertificateProvider" id="@cdk_utils/iam.iot.IotOperations.property.CreateCertificateProvider"></a>

```typescript
public readonly CreateCertificateProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateCertificateProvider API call.

---

##### `CreateCommand`<sup>Required</sup> <a name="CreateCommand" id="@cdk_utils/iam.iot.IotOperations.property.CreateCommand"></a>

```typescript
public readonly CreateCommand: string[];
```

- *Type:* string[]

IAM actions required for the CreateCommand API call.

---

##### `CreateCustomMetric`<sup>Required</sup> <a name="CreateCustomMetric" id="@cdk_utils/iam.iot.IotOperations.property.CreateCustomMetric"></a>

```typescript
public readonly CreateCustomMetric: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomMetric API call.

---

##### `CreateDimension`<sup>Required</sup> <a name="CreateDimension" id="@cdk_utils/iam.iot.IotOperations.property.CreateDimension"></a>

```typescript
public readonly CreateDimension: string[];
```

- *Type:* string[]

IAM actions required for the CreateDimension API call.

---

##### `CreateDomainConfiguration`<sup>Required</sup> <a name="CreateDomainConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.CreateDomainConfiguration"></a>

```typescript
public readonly CreateDomainConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomainConfiguration API call.

---

##### `CreateDynamicThingGroup`<sup>Required</sup> <a name="CreateDynamicThingGroup" id="@cdk_utils/iam.iot.IotOperations.property.CreateDynamicThingGroup"></a>

```typescript
public readonly CreateDynamicThingGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDynamicThingGroup API call.

---

##### `CreateFleetMetric`<sup>Required</sup> <a name="CreateFleetMetric" id="@cdk_utils/iam.iot.IotOperations.property.CreateFleetMetric"></a>

```typescript
public readonly CreateFleetMetric: string[];
```

- *Type:* string[]

IAM actions required for the CreateFleetMetric API call.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.iot.IotOperations.property.CreateJob"></a>

```typescript
public readonly CreateJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateJob API call.

---

##### `CreateJobTemplate`<sup>Required</sup> <a name="CreateJobTemplate" id="@cdk_utils/iam.iot.IotOperations.property.CreateJobTemplate"></a>

```typescript
public readonly CreateJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateJobTemplate API call.

---

##### `CreateKeysAndCertificate`<sup>Required</sup> <a name="CreateKeysAndCertificate" id="@cdk_utils/iam.iot.IotOperations.property.CreateKeysAndCertificate"></a>

```typescript
public readonly CreateKeysAndCertificate: string[];
```

- *Type:* string[]

IAM actions required for the CreateKeysAndCertificate API call.

---

##### `CreateMitigationAction`<sup>Required</sup> <a name="CreateMitigationAction" id="@cdk_utils/iam.iot.IotOperations.property.CreateMitigationAction"></a>

```typescript
public readonly CreateMitigationAction: string[];
```

- *Type:* string[]

IAM actions required for the CreateMitigationAction API call.

---

##### `CreateOTAUpdate`<sup>Required</sup> <a name="CreateOTAUpdate" id="@cdk_utils/iam.iot.IotOperations.property.CreateOTAUpdate"></a>

```typescript
public readonly CreateOTAUpdate: string[];
```

- *Type:* string[]

IAM actions required for the CreateOTAUpdate API call.

---

##### `CreatePackage`<sup>Required</sup> <a name="CreatePackage" id="@cdk_utils/iam.iot.IotOperations.property.CreatePackage"></a>

```typescript
public readonly CreatePackage: string[];
```

- *Type:* string[]

IAM actions required for the CreatePackage API call.

---

##### `CreatePackageVersion`<sup>Required</sup> <a name="CreatePackageVersion" id="@cdk_utils/iam.iot.IotOperations.property.CreatePackageVersion"></a>

```typescript
public readonly CreatePackageVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreatePackageVersion API call.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.iot.IotOperations.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicy API call.

---

##### `CreatePolicyVersion`<sup>Required</sup> <a name="CreatePolicyVersion" id="@cdk_utils/iam.iot.IotOperations.property.CreatePolicyVersion"></a>

```typescript
public readonly CreatePolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicyVersion API call.

---

##### `CreateProvisioningClaim`<sup>Required</sup> <a name="CreateProvisioningClaim" id="@cdk_utils/iam.iot.IotOperations.property.CreateProvisioningClaim"></a>

```typescript
public readonly CreateProvisioningClaim: string[];
```

- *Type:* string[]

IAM actions required for the CreateProvisioningClaim API call.

---

##### `CreateProvisioningTemplate`<sup>Required</sup> <a name="CreateProvisioningTemplate" id="@cdk_utils/iam.iot.IotOperations.property.CreateProvisioningTemplate"></a>

```typescript
public readonly CreateProvisioningTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateProvisioningTemplate API call.

---

##### `CreateProvisioningTemplateVersion`<sup>Required</sup> <a name="CreateProvisioningTemplateVersion" id="@cdk_utils/iam.iot.IotOperations.property.CreateProvisioningTemplateVersion"></a>

```typescript
public readonly CreateProvisioningTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateProvisioningTemplateVersion API call.

---

##### `CreateRoleAlias`<sup>Required</sup> <a name="CreateRoleAlias" id="@cdk_utils/iam.iot.IotOperations.property.CreateRoleAlias"></a>

```typescript
public readonly CreateRoleAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoleAlias API call.

---

##### `CreateScheduledAudit`<sup>Required</sup> <a name="CreateScheduledAudit" id="@cdk_utils/iam.iot.IotOperations.property.CreateScheduledAudit"></a>

```typescript
public readonly CreateScheduledAudit: string[];
```

- *Type:* string[]

IAM actions required for the CreateScheduledAudit API call.

---

##### `CreateSecurityProfile`<sup>Required</sup> <a name="CreateSecurityProfile" id="@cdk_utils/iam.iot.IotOperations.property.CreateSecurityProfile"></a>

```typescript
public readonly CreateSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateSecurityProfile API call.

---

##### `CreateStream`<sup>Required</sup> <a name="CreateStream" id="@cdk_utils/iam.iot.IotOperations.property.CreateStream"></a>

```typescript
public readonly CreateStream: string[];
```

- *Type:* string[]

IAM actions required for the CreateStream API call.

---

##### `CreateThing`<sup>Required</sup> <a name="CreateThing" id="@cdk_utils/iam.iot.IotOperations.property.CreateThing"></a>

```typescript
public readonly CreateThing: string[];
```

- *Type:* string[]

IAM actions required for the CreateThing API call.

---

##### `CreateThingGroup`<sup>Required</sup> <a name="CreateThingGroup" id="@cdk_utils/iam.iot.IotOperations.property.CreateThingGroup"></a>

```typescript
public readonly CreateThingGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateThingGroup API call.

---

##### `CreateThingType`<sup>Required</sup> <a name="CreateThingType" id="@cdk_utils/iam.iot.IotOperations.property.CreateThingType"></a>

```typescript
public readonly CreateThingType: string[];
```

- *Type:* string[]

IAM actions required for the CreateThingType API call.

---

##### `CreateTopicRule`<sup>Required</sup> <a name="CreateTopicRule" id="@cdk_utils/iam.iot.IotOperations.property.CreateTopicRule"></a>

```typescript
public readonly CreateTopicRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateTopicRule API call.

---

##### `CreateTopicRuleDestination`<sup>Required</sup> <a name="CreateTopicRuleDestination" id="@cdk_utils/iam.iot.IotOperations.property.CreateTopicRuleDestination"></a>

```typescript
public readonly CreateTopicRuleDestination: string[];
```

- *Type:* string[]

IAM actions required for the CreateTopicRuleDestination API call.

---

##### `DeleteAccountAuditConfiguration`<sup>Required</sup> <a name="DeleteAccountAuditConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.DeleteAccountAuditConfiguration"></a>

```typescript
public readonly DeleteAccountAuditConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountAuditConfiguration API call.

---

##### `DeleteAuditSuppression`<sup>Required</sup> <a name="DeleteAuditSuppression" id="@cdk_utils/iam.iot.IotOperations.property.DeleteAuditSuppression"></a>

```typescript
public readonly DeleteAuditSuppression: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAuditSuppression API call.

---

##### `DeleteAuthorizer`<sup>Required</sup> <a name="DeleteAuthorizer" id="@cdk_utils/iam.iot.IotOperations.property.DeleteAuthorizer"></a>

```typescript
public readonly DeleteAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAuthorizer API call.

---

##### `DeleteBillingGroup`<sup>Required</sup> <a name="DeleteBillingGroup" id="@cdk_utils/iam.iot.IotOperations.property.DeleteBillingGroup"></a>

```typescript
public readonly DeleteBillingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBillingGroup API call.

---

##### `DeleteCACertificate`<sup>Required</sup> <a name="DeleteCACertificate" id="@cdk_utils/iam.iot.IotOperations.property.DeleteCACertificate"></a>

```typescript
public readonly DeleteCACertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCACertificate API call.

---

##### `DeleteCertificate`<sup>Required</sup> <a name="DeleteCertificate" id="@cdk_utils/iam.iot.IotOperations.property.DeleteCertificate"></a>

```typescript
public readonly DeleteCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCertificate API call.

---

##### `DeleteCertificateProvider`<sup>Required</sup> <a name="DeleteCertificateProvider" id="@cdk_utils/iam.iot.IotOperations.property.DeleteCertificateProvider"></a>

```typescript
public readonly DeleteCertificateProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCertificateProvider API call.

---

##### `DeleteCommand`<sup>Required</sup> <a name="DeleteCommand" id="@cdk_utils/iam.iot.IotOperations.property.DeleteCommand"></a>

```typescript
public readonly DeleteCommand: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCommand API call.

---

##### `DeleteCommandExecution`<sup>Required</sup> <a name="DeleteCommandExecution" id="@cdk_utils/iam.iot.IotOperations.property.DeleteCommandExecution"></a>

```typescript
public readonly DeleteCommandExecution: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCommandExecution API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.iot.IotOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DeleteCustomMetric`<sup>Required</sup> <a name="DeleteCustomMetric" id="@cdk_utils/iam.iot.IotOperations.property.DeleteCustomMetric"></a>

```typescript
public readonly DeleteCustomMetric: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomMetric API call.

---

##### `DeleteDimension`<sup>Required</sup> <a name="DeleteDimension" id="@cdk_utils/iam.iot.IotOperations.property.DeleteDimension"></a>

```typescript
public readonly DeleteDimension: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDimension API call.

---

##### `DeleteDomainConfiguration`<sup>Required</sup> <a name="DeleteDomainConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.DeleteDomainConfiguration"></a>

```typescript
public readonly DeleteDomainConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainConfiguration API call.

---

##### `DeleteDynamicThingGroup`<sup>Required</sup> <a name="DeleteDynamicThingGroup" id="@cdk_utils/iam.iot.IotOperations.property.DeleteDynamicThingGroup"></a>

```typescript
public readonly DeleteDynamicThingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDynamicThingGroup API call.

---

##### `DeleteFleetMetric`<sup>Required</sup> <a name="DeleteFleetMetric" id="@cdk_utils/iam.iot.IotOperations.property.DeleteFleetMetric"></a>

```typescript
public readonly DeleteFleetMetric: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFleetMetric API call.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.iot.IotOperations.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJob API call.

---

##### `DeleteJobExecution`<sup>Required</sup> <a name="DeleteJobExecution" id="@cdk_utils/iam.iot.IotOperations.property.DeleteJobExecution"></a>

```typescript
public readonly DeleteJobExecution: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJobExecution API call.

---

##### `DeleteJobTemplate`<sup>Required</sup> <a name="DeleteJobTemplate" id="@cdk_utils/iam.iot.IotOperations.property.DeleteJobTemplate"></a>

```typescript
public readonly DeleteJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJobTemplate API call.

---

##### `DeleteMitigationAction`<sup>Required</sup> <a name="DeleteMitigationAction" id="@cdk_utils/iam.iot.IotOperations.property.DeleteMitigationAction"></a>

```typescript
public readonly DeleteMitigationAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMitigationAction API call.

---

##### `DeleteOTAUpdate`<sup>Required</sup> <a name="DeleteOTAUpdate" id="@cdk_utils/iam.iot.IotOperations.property.DeleteOTAUpdate"></a>

```typescript
public readonly DeleteOTAUpdate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOTAUpdate API call.

---

##### `DeletePackage`<sup>Required</sup> <a name="DeletePackage" id="@cdk_utils/iam.iot.IotOperations.property.DeletePackage"></a>

```typescript
public readonly DeletePackage: string[];
```

- *Type:* string[]

IAM actions required for the DeletePackage API call.

---

##### `DeletePackageVersion`<sup>Required</sup> <a name="DeletePackageVersion" id="@cdk_utils/iam.iot.IotOperations.property.DeletePackageVersion"></a>

```typescript
public readonly DeletePackageVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeletePackageVersion API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.iot.IotOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DeletePolicyVersion`<sup>Required</sup> <a name="DeletePolicyVersion" id="@cdk_utils/iam.iot.IotOperations.property.DeletePolicyVersion"></a>

```typescript
public readonly DeletePolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicyVersion API call.

---

##### `DeleteProvisioningTemplate`<sup>Required</sup> <a name="DeleteProvisioningTemplate" id="@cdk_utils/iam.iot.IotOperations.property.DeleteProvisioningTemplate"></a>

```typescript
public readonly DeleteProvisioningTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProvisioningTemplate API call.

---

##### `DeleteProvisioningTemplateVersion`<sup>Required</sup> <a name="DeleteProvisioningTemplateVersion" id="@cdk_utils/iam.iot.IotOperations.property.DeleteProvisioningTemplateVersion"></a>

```typescript
public readonly DeleteProvisioningTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProvisioningTemplateVersion API call.

---

##### `DeleteRegistrationCode`<sup>Required</sup> <a name="DeleteRegistrationCode" id="@cdk_utils/iam.iot.IotOperations.property.DeleteRegistrationCode"></a>

```typescript
public readonly DeleteRegistrationCode: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistrationCode API call.

---

##### `DeleteRoleAlias`<sup>Required</sup> <a name="DeleteRoleAlias" id="@cdk_utils/iam.iot.IotOperations.property.DeleteRoleAlias"></a>

```typescript
public readonly DeleteRoleAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoleAlias API call.

---

##### `DeleteScheduledAudit`<sup>Required</sup> <a name="DeleteScheduledAudit" id="@cdk_utils/iam.iot.IotOperations.property.DeleteScheduledAudit"></a>

```typescript
public readonly DeleteScheduledAudit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScheduledAudit API call.

---

##### `DeleteSecurityProfile`<sup>Required</sup> <a name="DeleteSecurityProfile" id="@cdk_utils/iam.iot.IotOperations.property.DeleteSecurityProfile"></a>

```typescript
public readonly DeleteSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSecurityProfile API call.

---

##### `DeleteStream`<sup>Required</sup> <a name="DeleteStream" id="@cdk_utils/iam.iot.IotOperations.property.DeleteStream"></a>

```typescript
public readonly DeleteStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStream API call.

---

##### `DeleteThing`<sup>Required</sup> <a name="DeleteThing" id="@cdk_utils/iam.iot.IotOperations.property.DeleteThing"></a>

```typescript
public readonly DeleteThing: string[];
```

- *Type:* string[]

IAM actions required for the DeleteThing API call.

---

##### `DeleteThingGroup`<sup>Required</sup> <a name="DeleteThingGroup" id="@cdk_utils/iam.iot.IotOperations.property.DeleteThingGroup"></a>

```typescript
public readonly DeleteThingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteThingGroup API call.

---

##### `DeleteThingShadow`<sup>Required</sup> <a name="DeleteThingShadow" id="@cdk_utils/iam.iot.IotOperations.property.DeleteThingShadow"></a>

```typescript
public readonly DeleteThingShadow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteThingShadow API call.

---

##### `DeleteThingType`<sup>Required</sup> <a name="DeleteThingType" id="@cdk_utils/iam.iot.IotOperations.property.DeleteThingType"></a>

```typescript
public readonly DeleteThingType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteThingType API call.

---

##### `DeleteTopicRule`<sup>Required</sup> <a name="DeleteTopicRule" id="@cdk_utils/iam.iot.IotOperations.property.DeleteTopicRule"></a>

```typescript
public readonly DeleteTopicRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTopicRule API call.

---

##### `DeleteTopicRuleDestination`<sup>Required</sup> <a name="DeleteTopicRuleDestination" id="@cdk_utils/iam.iot.IotOperations.property.DeleteTopicRuleDestination"></a>

```typescript
public readonly DeleteTopicRuleDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTopicRuleDestination API call.

---

##### `DeleteV2LoggingLevel`<sup>Required</sup> <a name="DeleteV2LoggingLevel" id="@cdk_utils/iam.iot.IotOperations.property.DeleteV2LoggingLevel"></a>

```typescript
public readonly DeleteV2LoggingLevel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteV2LoggingLevel API call.

---

##### `DeprecateThingType`<sup>Required</sup> <a name="DeprecateThingType" id="@cdk_utils/iam.iot.IotOperations.property.DeprecateThingType"></a>

```typescript
public readonly DeprecateThingType: string[];
```

- *Type:* string[]

IAM actions required for the DeprecateThingType API call.

---

##### `DescribeAccountAuditConfiguration`<sup>Required</sup> <a name="DescribeAccountAuditConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.DescribeAccountAuditConfiguration"></a>

```typescript
public readonly DescribeAccountAuditConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountAuditConfiguration API call.

---

##### `DescribeAuditFinding`<sup>Required</sup> <a name="DescribeAuditFinding" id="@cdk_utils/iam.iot.IotOperations.property.DescribeAuditFinding"></a>

```typescript
public readonly DescribeAuditFinding: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAuditFinding API call.

---

##### `DescribeAuditMitigationActionsTask`<sup>Required</sup> <a name="DescribeAuditMitigationActionsTask" id="@cdk_utils/iam.iot.IotOperations.property.DescribeAuditMitigationActionsTask"></a>

```typescript
public readonly DescribeAuditMitigationActionsTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAuditMitigationActionsTask API call.

---

##### `DescribeAuditSuppression`<sup>Required</sup> <a name="DescribeAuditSuppression" id="@cdk_utils/iam.iot.IotOperations.property.DescribeAuditSuppression"></a>

```typescript
public readonly DescribeAuditSuppression: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAuditSuppression API call.

---

##### `DescribeAuditTask`<sup>Required</sup> <a name="DescribeAuditTask" id="@cdk_utils/iam.iot.IotOperations.property.DescribeAuditTask"></a>

```typescript
public readonly DescribeAuditTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAuditTask API call.

---

##### `DescribeAuthorizer`<sup>Required</sup> <a name="DescribeAuthorizer" id="@cdk_utils/iam.iot.IotOperations.property.DescribeAuthorizer"></a>

```typescript
public readonly DescribeAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAuthorizer API call.

---

##### `DescribeBillingGroup`<sup>Required</sup> <a name="DescribeBillingGroup" id="@cdk_utils/iam.iot.IotOperations.property.DescribeBillingGroup"></a>

```typescript
public readonly DescribeBillingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBillingGroup API call.

---

##### `DescribeCACertificate`<sup>Required</sup> <a name="DescribeCACertificate" id="@cdk_utils/iam.iot.IotOperations.property.DescribeCACertificate"></a>

```typescript
public readonly DescribeCACertificate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCACertificate API call.

---

##### `DescribeCertificate`<sup>Required</sup> <a name="DescribeCertificate" id="@cdk_utils/iam.iot.IotOperations.property.DescribeCertificate"></a>

```typescript
public readonly DescribeCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCertificate API call.

---

##### `DescribeCertificateProvider`<sup>Required</sup> <a name="DescribeCertificateProvider" id="@cdk_utils/iam.iot.IotOperations.property.DescribeCertificateProvider"></a>

```typescript
public readonly DescribeCertificateProvider: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCertificateProvider API call.

---

##### `DescribeCustomMetric`<sup>Required</sup> <a name="DescribeCustomMetric" id="@cdk_utils/iam.iot.IotOperations.property.DescribeCustomMetric"></a>

```typescript
public readonly DescribeCustomMetric: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomMetric API call.

---

##### `DescribeDefaultAuthorizer`<sup>Required</sup> <a name="DescribeDefaultAuthorizer" id="@cdk_utils/iam.iot.IotOperations.property.DescribeDefaultAuthorizer"></a>

```typescript
public readonly DescribeDefaultAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDefaultAuthorizer API call.

---

##### `DescribeDetectMitigationActionsTask`<sup>Required</sup> <a name="DescribeDetectMitigationActionsTask" id="@cdk_utils/iam.iot.IotOperations.property.DescribeDetectMitigationActionsTask"></a>

```typescript
public readonly DescribeDetectMitigationActionsTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDetectMitigationActionsTask API call.

---

##### `DescribeDimension`<sup>Required</sup> <a name="DescribeDimension" id="@cdk_utils/iam.iot.IotOperations.property.DescribeDimension"></a>

```typescript
public readonly DescribeDimension: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDimension API call.

---

##### `DescribeDomainConfiguration`<sup>Required</sup> <a name="DescribeDomainConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.DescribeDomainConfiguration"></a>

```typescript
public readonly DescribeDomainConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomainConfiguration API call.

---

##### `DescribeEncryptionConfiguration`<sup>Required</sup> <a name="DescribeEncryptionConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.DescribeEncryptionConfiguration"></a>

```typescript
public readonly DescribeEncryptionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEncryptionConfiguration API call.

---

##### `DescribeEndpoint`<sup>Required</sup> <a name="DescribeEndpoint" id="@cdk_utils/iam.iot.IotOperations.property.DescribeEndpoint"></a>

```typescript
public readonly DescribeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpoint API call.

---

##### `DescribeEventConfigurations`<sup>Required</sup> <a name="DescribeEventConfigurations" id="@cdk_utils/iam.iot.IotOperations.property.DescribeEventConfigurations"></a>

```typescript
public readonly DescribeEventConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventConfigurations API call.

---

##### `DescribeFleetMetric`<sup>Required</sup> <a name="DescribeFleetMetric" id="@cdk_utils/iam.iot.IotOperations.property.DescribeFleetMetric"></a>

```typescript
public readonly DescribeFleetMetric: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetMetric API call.

---

##### `DescribeIndex`<sup>Required</sup> <a name="DescribeIndex" id="@cdk_utils/iam.iot.IotOperations.property.DescribeIndex"></a>

```typescript
public readonly DescribeIndex: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIndex API call.

---

##### `DescribeJob`<sup>Required</sup> <a name="DescribeJob" id="@cdk_utils/iam.iot.IotOperations.property.DescribeJob"></a>

```typescript
public readonly DescribeJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJob API call.

---

##### `DescribeJobExecution`<sup>Required</sup> <a name="DescribeJobExecution" id="@cdk_utils/iam.iot.IotOperations.property.DescribeJobExecution"></a>

```typescript
public readonly DescribeJobExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobExecution API call.

---

##### `DescribeJobTemplate`<sup>Required</sup> <a name="DescribeJobTemplate" id="@cdk_utils/iam.iot.IotOperations.property.DescribeJobTemplate"></a>

```typescript
public readonly DescribeJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobTemplate API call.

---

##### `DescribeManagedJobTemplate`<sup>Required</sup> <a name="DescribeManagedJobTemplate" id="@cdk_utils/iam.iot.IotOperations.property.DescribeManagedJobTemplate"></a>

```typescript
public readonly DescribeManagedJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeManagedJobTemplate API call.

---

##### `DescribeMitigationAction`<sup>Required</sup> <a name="DescribeMitigationAction" id="@cdk_utils/iam.iot.IotOperations.property.DescribeMitigationAction"></a>

```typescript
public readonly DescribeMitigationAction: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMitigationAction API call.

---

##### `DescribeProvisioningTemplate`<sup>Required</sup> <a name="DescribeProvisioningTemplate" id="@cdk_utils/iam.iot.IotOperations.property.DescribeProvisioningTemplate"></a>

```typescript
public readonly DescribeProvisioningTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProvisioningTemplate API call.

---

##### `DescribeProvisioningTemplateVersion`<sup>Required</sup> <a name="DescribeProvisioningTemplateVersion" id="@cdk_utils/iam.iot.IotOperations.property.DescribeProvisioningTemplateVersion"></a>

```typescript
public readonly DescribeProvisioningTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProvisioningTemplateVersion API call.

---

##### `DescribeRoleAlias`<sup>Required</sup> <a name="DescribeRoleAlias" id="@cdk_utils/iam.iot.IotOperations.property.DescribeRoleAlias"></a>

```typescript
public readonly DescribeRoleAlias: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRoleAlias API call.

---

##### `DescribeScheduledAudit`<sup>Required</sup> <a name="DescribeScheduledAudit" id="@cdk_utils/iam.iot.IotOperations.property.DescribeScheduledAudit"></a>

```typescript
public readonly DescribeScheduledAudit: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScheduledAudit API call.

---

##### `DescribeSecurityProfile`<sup>Required</sup> <a name="DescribeSecurityProfile" id="@cdk_utils/iam.iot.IotOperations.property.DescribeSecurityProfile"></a>

```typescript
public readonly DescribeSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSecurityProfile API call.

---

##### `DescribeStream`<sup>Required</sup> <a name="DescribeStream" id="@cdk_utils/iam.iot.IotOperations.property.DescribeStream"></a>

```typescript
public readonly DescribeStream: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStream API call.

---

##### `DescribeThing`<sup>Required</sup> <a name="DescribeThing" id="@cdk_utils/iam.iot.IotOperations.property.DescribeThing"></a>

```typescript
public readonly DescribeThing: string[];
```

- *Type:* string[]

IAM actions required for the DescribeThing API call.

---

##### `DescribeThingGroup`<sup>Required</sup> <a name="DescribeThingGroup" id="@cdk_utils/iam.iot.IotOperations.property.DescribeThingGroup"></a>

```typescript
public readonly DescribeThingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeThingGroup API call.

---

##### `DescribeThingRegistrationTask`<sup>Required</sup> <a name="DescribeThingRegistrationTask" id="@cdk_utils/iam.iot.IotOperations.property.DescribeThingRegistrationTask"></a>

```typescript
public readonly DescribeThingRegistrationTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeThingRegistrationTask API call.

---

##### `DescribeThingType`<sup>Required</sup> <a name="DescribeThingType" id="@cdk_utils/iam.iot.IotOperations.property.DescribeThingType"></a>

```typescript
public readonly DescribeThingType: string[];
```

- *Type:* string[]

IAM actions required for the DescribeThingType API call.

---

##### `DescribeTunnel`<sup>Required</sup> <a name="DescribeTunnel" id="@cdk_utils/iam.iot.IotOperations.property.DescribeTunnel"></a>

```typescript
public readonly DescribeTunnel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTunnel API call.

---

##### `DetachPolicy`<sup>Required</sup> <a name="DetachPolicy" id="@cdk_utils/iam.iot.IotOperations.property.DetachPolicy"></a>

```typescript
public readonly DetachPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DetachPolicy API call.

---

##### `DetachPrincipalPolicy`<sup>Required</sup> <a name="DetachPrincipalPolicy" id="@cdk_utils/iam.iot.IotOperations.property.DetachPrincipalPolicy"></a>

```typescript
public readonly DetachPrincipalPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DetachPrincipalPolicy API call.

---

##### `DetachSecurityProfile`<sup>Required</sup> <a name="DetachSecurityProfile" id="@cdk_utils/iam.iot.IotOperations.property.DetachSecurityProfile"></a>

```typescript
public readonly DetachSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the DetachSecurityProfile API call.

---

##### `DetachThingPrincipal`<sup>Required</sup> <a name="DetachThingPrincipal" id="@cdk_utils/iam.iot.IotOperations.property.DetachThingPrincipal"></a>

```typescript
public readonly DetachThingPrincipal: string[];
```

- *Type:* string[]

IAM actions required for the DetachThingPrincipal API call.

---

##### `DisableTopicRule`<sup>Required</sup> <a name="DisableTopicRule" id="@cdk_utils/iam.iot.IotOperations.property.DisableTopicRule"></a>

```typescript
public readonly DisableTopicRule: string[];
```

- *Type:* string[]

IAM actions required for the DisableTopicRule API call.

---

##### `DisassociateSbomFromPackageVersion`<sup>Required</sup> <a name="DisassociateSbomFromPackageVersion" id="@cdk_utils/iam.iot.IotOperations.property.DisassociateSbomFromPackageVersion"></a>

```typescript
public readonly DisassociateSbomFromPackageVersion: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSbomFromPackageVersion API call.

---

##### `EnableTopicRule`<sup>Required</sup> <a name="EnableTopicRule" id="@cdk_utils/iam.iot.IotOperations.property.EnableTopicRule"></a>

```typescript
public readonly EnableTopicRule: string[];
```

- *Type:* string[]

IAM actions required for the EnableTopicRule API call.

---

##### `ListActiveViolations`<sup>Required</sup> <a name="ListActiveViolations" id="@cdk_utils/iam.iot.IotOperations.property.ListActiveViolations"></a>

```typescript
public readonly ListActiveViolations: string[];
```

- *Type:* string[]

IAM actions required for the ListActiveViolations API call.

---

##### `ListAttachedPolicies`<sup>Required</sup> <a name="ListAttachedPolicies" id="@cdk_utils/iam.iot.IotOperations.property.ListAttachedPolicies"></a>

```typescript
public readonly ListAttachedPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachedPolicies API call.

---

##### `ListAuditFindings`<sup>Required</sup> <a name="ListAuditFindings" id="@cdk_utils/iam.iot.IotOperations.property.ListAuditFindings"></a>

```typescript
public readonly ListAuditFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListAuditFindings API call.

---

##### `ListAuditMitigationActionsExecutions`<sup>Required</sup> <a name="ListAuditMitigationActionsExecutions" id="@cdk_utils/iam.iot.IotOperations.property.ListAuditMitigationActionsExecutions"></a>

```typescript
public readonly ListAuditMitigationActionsExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListAuditMitigationActionsExecutions API call.

---

##### `ListAuditMitigationActionsTasks`<sup>Required</sup> <a name="ListAuditMitigationActionsTasks" id="@cdk_utils/iam.iot.IotOperations.property.ListAuditMitigationActionsTasks"></a>

```typescript
public readonly ListAuditMitigationActionsTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListAuditMitigationActionsTasks API call.

---

##### `ListAuditSuppressions`<sup>Required</sup> <a name="ListAuditSuppressions" id="@cdk_utils/iam.iot.IotOperations.property.ListAuditSuppressions"></a>

```typescript
public readonly ListAuditSuppressions: string[];
```

- *Type:* string[]

IAM actions required for the ListAuditSuppressions API call.

---

##### `ListAuditTasks`<sup>Required</sup> <a name="ListAuditTasks" id="@cdk_utils/iam.iot.IotOperations.property.ListAuditTasks"></a>

```typescript
public readonly ListAuditTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListAuditTasks API call.

---

##### `ListAuthorizers`<sup>Required</sup> <a name="ListAuthorizers" id="@cdk_utils/iam.iot.IotOperations.property.ListAuthorizers"></a>

```typescript
public readonly ListAuthorizers: string[];
```

- *Type:* string[]

IAM actions required for the ListAuthorizers API call.

---

##### `ListBillingGroups`<sup>Required</sup> <a name="ListBillingGroups" id="@cdk_utils/iam.iot.IotOperations.property.ListBillingGroups"></a>

```typescript
public readonly ListBillingGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListBillingGroups API call.

---

##### `ListCACertificates`<sup>Required</sup> <a name="ListCACertificates" id="@cdk_utils/iam.iot.IotOperations.property.ListCACertificates"></a>

```typescript
public readonly ListCACertificates: string[];
```

- *Type:* string[]

IAM actions required for the ListCACertificates API call.

---

##### `ListCertificateProviders`<sup>Required</sup> <a name="ListCertificateProviders" id="@cdk_utils/iam.iot.IotOperations.property.ListCertificateProviders"></a>

```typescript
public readonly ListCertificateProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListCertificateProviders API call.

---

##### `ListCertificates`<sup>Required</sup> <a name="ListCertificates" id="@cdk_utils/iam.iot.IotOperations.property.ListCertificates"></a>

```typescript
public readonly ListCertificates: string[];
```

- *Type:* string[]

IAM actions required for the ListCertificates API call.

---

##### `ListCertificatesByCA`<sup>Required</sup> <a name="ListCertificatesByCA" id="@cdk_utils/iam.iot.IotOperations.property.ListCertificatesByCA"></a>

```typescript
public readonly ListCertificatesByCA: string[];
```

- *Type:* string[]

IAM actions required for the ListCertificatesByCA API call.

---

##### `ListCommandExecutions`<sup>Required</sup> <a name="ListCommandExecutions" id="@cdk_utils/iam.iot.IotOperations.property.ListCommandExecutions"></a>

```typescript
public readonly ListCommandExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListCommandExecutions API call.

---

##### `ListCommands`<sup>Required</sup> <a name="ListCommands" id="@cdk_utils/iam.iot.IotOperations.property.ListCommands"></a>

```typescript
public readonly ListCommands: string[];
```

- *Type:* string[]

IAM actions required for the ListCommands API call.

---

##### `ListCustomMetrics`<sup>Required</sup> <a name="ListCustomMetrics" id="@cdk_utils/iam.iot.IotOperations.property.ListCustomMetrics"></a>

```typescript
public readonly ListCustomMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomMetrics API call.

---

##### `ListDetectMitigationActionsExecutions`<sup>Required</sup> <a name="ListDetectMitigationActionsExecutions" id="@cdk_utils/iam.iot.IotOperations.property.ListDetectMitigationActionsExecutions"></a>

```typescript
public readonly ListDetectMitigationActionsExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListDetectMitigationActionsExecutions API call.

---

##### `ListDetectMitigationActionsTasks`<sup>Required</sup> <a name="ListDetectMitigationActionsTasks" id="@cdk_utils/iam.iot.IotOperations.property.ListDetectMitigationActionsTasks"></a>

```typescript
public readonly ListDetectMitigationActionsTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListDetectMitigationActionsTasks API call.

---

##### `ListDimensions`<sup>Required</sup> <a name="ListDimensions" id="@cdk_utils/iam.iot.IotOperations.property.ListDimensions"></a>

```typescript
public readonly ListDimensions: string[];
```

- *Type:* string[]

IAM actions required for the ListDimensions API call.

---

##### `ListDomainConfigurations`<sup>Required</sup> <a name="ListDomainConfigurations" id="@cdk_utils/iam.iot.IotOperations.property.ListDomainConfigurations"></a>

```typescript
public readonly ListDomainConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainConfigurations API call.

---

##### `ListFleetMetrics`<sup>Required</sup> <a name="ListFleetMetrics" id="@cdk_utils/iam.iot.IotOperations.property.ListFleetMetrics"></a>

```typescript
public readonly ListFleetMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListFleetMetrics API call.

---

##### `ListIndices`<sup>Required</sup> <a name="ListIndices" id="@cdk_utils/iam.iot.IotOperations.property.ListIndices"></a>

```typescript
public readonly ListIndices: string[];
```

- *Type:* string[]

IAM actions required for the ListIndices API call.

---

##### `ListJobExecutionsForJob`<sup>Required</sup> <a name="ListJobExecutionsForJob" id="@cdk_utils/iam.iot.IotOperations.property.ListJobExecutionsForJob"></a>

```typescript
public readonly ListJobExecutionsForJob: string[];
```

- *Type:* string[]

IAM actions required for the ListJobExecutionsForJob API call.

---

##### `ListJobExecutionsForThing`<sup>Required</sup> <a name="ListJobExecutionsForThing" id="@cdk_utils/iam.iot.IotOperations.property.ListJobExecutionsForThing"></a>

```typescript
public readonly ListJobExecutionsForThing: string[];
```

- *Type:* string[]

IAM actions required for the ListJobExecutionsForThing API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.iot.IotOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListJobTemplates`<sup>Required</sup> <a name="ListJobTemplates" id="@cdk_utils/iam.iot.IotOperations.property.ListJobTemplates"></a>

```typescript
public readonly ListJobTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListJobTemplates API call.

---

##### `ListManagedJobTemplates`<sup>Required</sup> <a name="ListManagedJobTemplates" id="@cdk_utils/iam.iot.IotOperations.property.ListManagedJobTemplates"></a>

```typescript
public readonly ListManagedJobTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedJobTemplates API call.

---

##### `ListMetricValues`<sup>Required</sup> <a name="ListMetricValues" id="@cdk_utils/iam.iot.IotOperations.property.ListMetricValues"></a>

```typescript
public readonly ListMetricValues: string[];
```

- *Type:* string[]

IAM actions required for the ListMetricValues API call.

---

##### `ListMitigationActions`<sup>Required</sup> <a name="ListMitigationActions" id="@cdk_utils/iam.iot.IotOperations.property.ListMitigationActions"></a>

```typescript
public readonly ListMitigationActions: string[];
```

- *Type:* string[]

IAM actions required for the ListMitigationActions API call.

---

##### `ListNamedShadowsForThing`<sup>Required</sup> <a name="ListNamedShadowsForThing" id="@cdk_utils/iam.iot.IotOperations.property.ListNamedShadowsForThing"></a>

```typescript
public readonly ListNamedShadowsForThing: string[];
```

- *Type:* string[]

IAM actions required for the ListNamedShadowsForThing API call.

---

##### `ListOTAUpdates`<sup>Required</sup> <a name="ListOTAUpdates" id="@cdk_utils/iam.iot.IotOperations.property.ListOTAUpdates"></a>

```typescript
public readonly ListOTAUpdates: string[];
```

- *Type:* string[]

IAM actions required for the ListOTAUpdates API call.

---

##### `ListOutgoingCertificates`<sup>Required</sup> <a name="ListOutgoingCertificates" id="@cdk_utils/iam.iot.IotOperations.property.ListOutgoingCertificates"></a>

```typescript
public readonly ListOutgoingCertificates: string[];
```

- *Type:* string[]

IAM actions required for the ListOutgoingCertificates API call.

---

##### `ListPackages`<sup>Required</sup> <a name="ListPackages" id="@cdk_utils/iam.iot.IotOperations.property.ListPackages"></a>

```typescript
public readonly ListPackages: string[];
```

- *Type:* string[]

IAM actions required for the ListPackages API call.

---

##### `ListPackageVersions`<sup>Required</sup> <a name="ListPackageVersions" id="@cdk_utils/iam.iot.IotOperations.property.ListPackageVersions"></a>

```typescript
public readonly ListPackageVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListPackageVersions API call.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.iot.IotOperations.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicies API call.

---

##### `ListPolicyPrincipals`<sup>Required</sup> <a name="ListPolicyPrincipals" id="@cdk_utils/iam.iot.IotOperations.property.ListPolicyPrincipals"></a>

```typescript
public readonly ListPolicyPrincipals: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyPrincipals API call.

---

##### `ListPolicyVersions`<sup>Required</sup> <a name="ListPolicyVersions" id="@cdk_utils/iam.iot.IotOperations.property.ListPolicyVersions"></a>

```typescript
public readonly ListPolicyVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyVersions API call.

---

##### `ListPrincipalPolicies`<sup>Required</sup> <a name="ListPrincipalPolicies" id="@cdk_utils/iam.iot.IotOperations.property.ListPrincipalPolicies"></a>

```typescript
public readonly ListPrincipalPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPrincipalPolicies API call.

---

##### `ListPrincipalThings`<sup>Required</sup> <a name="ListPrincipalThings" id="@cdk_utils/iam.iot.IotOperations.property.ListPrincipalThings"></a>

```typescript
public readonly ListPrincipalThings: string[];
```

- *Type:* string[]

IAM actions required for the ListPrincipalThings API call.

---

##### `ListPrincipalThingsV2`<sup>Required</sup> <a name="ListPrincipalThingsV2" id="@cdk_utils/iam.iot.IotOperations.property.ListPrincipalThingsV2"></a>

```typescript
public readonly ListPrincipalThingsV2: string[];
```

- *Type:* string[]

IAM actions required for the ListPrincipalThingsV2 API call.

---

##### `ListProvisioningTemplates`<sup>Required</sup> <a name="ListProvisioningTemplates" id="@cdk_utils/iam.iot.IotOperations.property.ListProvisioningTemplates"></a>

```typescript
public readonly ListProvisioningTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListProvisioningTemplates API call.

---

##### `ListProvisioningTemplateVersions`<sup>Required</sup> <a name="ListProvisioningTemplateVersions" id="@cdk_utils/iam.iot.IotOperations.property.ListProvisioningTemplateVersions"></a>

```typescript
public readonly ListProvisioningTemplateVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListProvisioningTemplateVersions API call.

---

##### `ListRelatedResourcesForAuditFinding`<sup>Required</sup> <a name="ListRelatedResourcesForAuditFinding" id="@cdk_utils/iam.iot.IotOperations.property.ListRelatedResourcesForAuditFinding"></a>

```typescript
public readonly ListRelatedResourcesForAuditFinding: string[];
```

- *Type:* string[]

IAM actions required for the ListRelatedResourcesForAuditFinding API call.

---

##### `ListRetainedMessages`<sup>Required</sup> <a name="ListRetainedMessages" id="@cdk_utils/iam.iot.IotOperations.property.ListRetainedMessages"></a>

```typescript
public readonly ListRetainedMessages: string[];
```

- *Type:* string[]

IAM actions required for the ListRetainedMessages API call.

---

##### `ListRoleAliases`<sup>Required</sup> <a name="ListRoleAliases" id="@cdk_utils/iam.iot.IotOperations.property.ListRoleAliases"></a>

```typescript
public readonly ListRoleAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListRoleAliases API call.

---

##### `ListSbomValidationResults`<sup>Required</sup> <a name="ListSbomValidationResults" id="@cdk_utils/iam.iot.IotOperations.property.ListSbomValidationResults"></a>

```typescript
public readonly ListSbomValidationResults: string[];
```

- *Type:* string[]

IAM actions required for the ListSbomValidationResults API call.

---

##### `ListScheduledAudits`<sup>Required</sup> <a name="ListScheduledAudits" id="@cdk_utils/iam.iot.IotOperations.property.ListScheduledAudits"></a>

```typescript
public readonly ListScheduledAudits: string[];
```

- *Type:* string[]

IAM actions required for the ListScheduledAudits API call.

---

##### `ListSecurityProfiles`<sup>Required</sup> <a name="ListSecurityProfiles" id="@cdk_utils/iam.iot.IotOperations.property.ListSecurityProfiles"></a>

```typescript
public readonly ListSecurityProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityProfiles API call.

---

##### `ListSecurityProfilesForTarget`<sup>Required</sup> <a name="ListSecurityProfilesForTarget" id="@cdk_utils/iam.iot.IotOperations.property.ListSecurityProfilesForTarget"></a>

```typescript
public readonly ListSecurityProfilesForTarget: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityProfilesForTarget API call.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.iot.IotOperations.property.ListStreams"></a>

```typescript
public readonly ListStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListStreams API call.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.iot.IotOperations.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iot.IotOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTargetsForPolicy`<sup>Required</sup> <a name="ListTargetsForPolicy" id="@cdk_utils/iam.iot.IotOperations.property.ListTargetsForPolicy"></a>

```typescript
public readonly ListTargetsForPolicy: string[];
```

- *Type:* string[]

IAM actions required for the ListTargetsForPolicy API call.

---

##### `ListTargetsForSecurityProfile`<sup>Required</sup> <a name="ListTargetsForSecurityProfile" id="@cdk_utils/iam.iot.IotOperations.property.ListTargetsForSecurityProfile"></a>

```typescript
public readonly ListTargetsForSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the ListTargetsForSecurityProfile API call.

---

##### `ListThingGroups`<sup>Required</sup> <a name="ListThingGroups" id="@cdk_utils/iam.iot.IotOperations.property.ListThingGroups"></a>

```typescript
public readonly ListThingGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListThingGroups API call.

---

##### `ListThingGroupsForThing`<sup>Required</sup> <a name="ListThingGroupsForThing" id="@cdk_utils/iam.iot.IotOperations.property.ListThingGroupsForThing"></a>

```typescript
public readonly ListThingGroupsForThing: string[];
```

- *Type:* string[]

IAM actions required for the ListThingGroupsForThing API call.

---

##### `ListThingPrincipals`<sup>Required</sup> <a name="ListThingPrincipals" id="@cdk_utils/iam.iot.IotOperations.property.ListThingPrincipals"></a>

```typescript
public readonly ListThingPrincipals: string[];
```

- *Type:* string[]

IAM actions required for the ListThingPrincipals API call.

---

##### `ListThingPrincipalsV2`<sup>Required</sup> <a name="ListThingPrincipalsV2" id="@cdk_utils/iam.iot.IotOperations.property.ListThingPrincipalsV2"></a>

```typescript
public readonly ListThingPrincipalsV2: string[];
```

- *Type:* string[]

IAM actions required for the ListThingPrincipalsV2 API call.

---

##### `ListThingRegistrationTaskReports`<sup>Required</sup> <a name="ListThingRegistrationTaskReports" id="@cdk_utils/iam.iot.IotOperations.property.ListThingRegistrationTaskReports"></a>

```typescript
public readonly ListThingRegistrationTaskReports: string[];
```

- *Type:* string[]

IAM actions required for the ListThingRegistrationTaskReports API call.

---

##### `ListThingRegistrationTasks`<sup>Required</sup> <a name="ListThingRegistrationTasks" id="@cdk_utils/iam.iot.IotOperations.property.ListThingRegistrationTasks"></a>

```typescript
public readonly ListThingRegistrationTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListThingRegistrationTasks API call.

---

##### `ListThings`<sup>Required</sup> <a name="ListThings" id="@cdk_utils/iam.iot.IotOperations.property.ListThings"></a>

```typescript
public readonly ListThings: string[];
```

- *Type:* string[]

IAM actions required for the ListThings API call.

---

##### `ListThingsInBillingGroup`<sup>Required</sup> <a name="ListThingsInBillingGroup" id="@cdk_utils/iam.iot.IotOperations.property.ListThingsInBillingGroup"></a>

```typescript
public readonly ListThingsInBillingGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListThingsInBillingGroup API call.

---

##### `ListThingsInThingGroup`<sup>Required</sup> <a name="ListThingsInThingGroup" id="@cdk_utils/iam.iot.IotOperations.property.ListThingsInThingGroup"></a>

```typescript
public readonly ListThingsInThingGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListThingsInThingGroup API call.

---

##### `ListThingTypes`<sup>Required</sup> <a name="ListThingTypes" id="@cdk_utils/iam.iot.IotOperations.property.ListThingTypes"></a>

```typescript
public readonly ListThingTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListThingTypes API call.

---

##### `ListTopicRuleDestinations`<sup>Required</sup> <a name="ListTopicRuleDestinations" id="@cdk_utils/iam.iot.IotOperations.property.ListTopicRuleDestinations"></a>

```typescript
public readonly ListTopicRuleDestinations: string[];
```

- *Type:* string[]

IAM actions required for the ListTopicRuleDestinations API call.

---

##### `ListTopicRules`<sup>Required</sup> <a name="ListTopicRules" id="@cdk_utils/iam.iot.IotOperations.property.ListTopicRules"></a>

```typescript
public readonly ListTopicRules: string[];
```

- *Type:* string[]

IAM actions required for the ListTopicRules API call.

---

##### `ListTunnels`<sup>Required</sup> <a name="ListTunnels" id="@cdk_utils/iam.iot.IotOperations.property.ListTunnels"></a>

```typescript
public readonly ListTunnels: string[];
```

- *Type:* string[]

IAM actions required for the ListTunnels API call.

---

##### `ListV2LoggingLevels`<sup>Required</sup> <a name="ListV2LoggingLevels" id="@cdk_utils/iam.iot.IotOperations.property.ListV2LoggingLevels"></a>

```typescript
public readonly ListV2LoggingLevels: string[];
```

- *Type:* string[]

IAM actions required for the ListV2LoggingLevels API call.

---

##### `ListViolationEvents`<sup>Required</sup> <a name="ListViolationEvents" id="@cdk_utils/iam.iot.IotOperations.property.ListViolationEvents"></a>

```typescript
public readonly ListViolationEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListViolationEvents API call.

---

##### `OpenTunnel`<sup>Required</sup> <a name="OpenTunnel" id="@cdk_utils/iam.iot.IotOperations.property.OpenTunnel"></a>

```typescript
public readonly OpenTunnel: string[];
```

- *Type:* string[]

IAM actions required for the OpenTunnel API call.

---

##### `opGetBehaviorModelTrainingSummaries`<sup>Required</sup> <a name="opGetBehaviorModelTrainingSummaries" id="@cdk_utils/iam.iot.IotOperations.property.opGetBehaviorModelTrainingSummaries"></a>

```typescript
public readonly opGetBehaviorModelTrainingSummaries: string[];
```

- *Type:* string[]

IAM actions required for the GetBehaviorModelTrainingSummaries API call.

---

##### `opGetBucketsAggregation`<sup>Required</sup> <a name="opGetBucketsAggregation" id="@cdk_utils/iam.iot.IotOperations.property.opGetBucketsAggregation"></a>

```typescript
public readonly opGetBucketsAggregation: string[];
```

- *Type:* string[]

IAM actions required for the GetBucketsAggregation API call.

---

##### `opGetCardinality`<sup>Required</sup> <a name="opGetCardinality" id="@cdk_utils/iam.iot.IotOperations.property.opGetCardinality"></a>

```typescript
public readonly opGetCardinality: string[];
```

- *Type:* string[]

IAM actions required for the GetCardinality API call.

---

##### `opGetCommand`<sup>Required</sup> <a name="opGetCommand" id="@cdk_utils/iam.iot.IotOperations.property.opGetCommand"></a>

```typescript
public readonly opGetCommand: string[];
```

- *Type:* string[]

IAM actions required for the GetCommand API call.

---

##### `opGetCommandExecution`<sup>Required</sup> <a name="opGetCommandExecution" id="@cdk_utils/iam.iot.IotOperations.property.opGetCommandExecution"></a>

```typescript
public readonly opGetCommandExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetCommandExecution API call.

---

##### `opGetConnection`<sup>Required</sup> <a name="opGetConnection" id="@cdk_utils/iam.iot.IotOperations.property.opGetConnection"></a>

```typescript
public readonly opGetConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetConnection API call.

---

##### `opGetEffectivePolicies`<sup>Required</sup> <a name="opGetEffectivePolicies" id="@cdk_utils/iam.iot.IotOperations.property.opGetEffectivePolicies"></a>

```typescript
public readonly opGetEffectivePolicies: string[];
```

- *Type:* string[]

IAM actions required for the GetEffectivePolicies API call.

---

##### `opGetIndexingConfiguration`<sup>Required</sup> <a name="opGetIndexingConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.opGetIndexingConfiguration"></a>

```typescript
public readonly opGetIndexingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetIndexingConfiguration API call.

---

##### `opGetJobDocument`<sup>Required</sup> <a name="opGetJobDocument" id="@cdk_utils/iam.iot.IotOperations.property.opGetJobDocument"></a>

```typescript
public readonly opGetJobDocument: string[];
```

- *Type:* string[]

IAM actions required for the GetJobDocument API call.

---

##### `opGetLoggingOptions`<sup>Required</sup> <a name="opGetLoggingOptions" id="@cdk_utils/iam.iot.IotOperations.property.opGetLoggingOptions"></a>

```typescript
public readonly opGetLoggingOptions: string[];
```

- *Type:* string[]

IAM actions required for the GetLoggingOptions API call.

---

##### `opGetOTAUpdate`<sup>Required</sup> <a name="opGetOTAUpdate" id="@cdk_utils/iam.iot.IotOperations.property.opGetOTAUpdate"></a>

```typescript
public readonly opGetOTAUpdate: string[];
```

- *Type:* string[]

IAM actions required for the GetOTAUpdate API call.

---

##### `opGetPackage`<sup>Required</sup> <a name="opGetPackage" id="@cdk_utils/iam.iot.IotOperations.property.opGetPackage"></a>

```typescript
public readonly opGetPackage: string[];
```

- *Type:* string[]

IAM actions required for the GetPackage API call.

---

##### `opGetPackageConfiguration`<sup>Required</sup> <a name="opGetPackageConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.opGetPackageConfiguration"></a>

```typescript
public readonly opGetPackageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetPackageConfiguration API call.

---

##### `opGetPackageVersion`<sup>Required</sup> <a name="opGetPackageVersion" id="@cdk_utils/iam.iot.IotOperations.property.opGetPackageVersion"></a>

```typescript
public readonly opGetPackageVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetPackageVersion API call.

---

##### `opGetPercentiles`<sup>Required</sup> <a name="opGetPercentiles" id="@cdk_utils/iam.iot.IotOperations.property.opGetPercentiles"></a>

```typescript
public readonly opGetPercentiles: string[];
```

- *Type:* string[]

IAM actions required for the GetPercentiles API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.iot.IotOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetPolicyVersion`<sup>Required</sup> <a name="opGetPolicyVersion" id="@cdk_utils/iam.iot.IotOperations.property.opGetPolicyVersion"></a>

```typescript
public readonly opGetPolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicyVersion API call.

---

##### `opGetRegistrationCode`<sup>Required</sup> <a name="opGetRegistrationCode" id="@cdk_utils/iam.iot.IotOperations.property.opGetRegistrationCode"></a>

```typescript
public readonly opGetRegistrationCode: string[];
```

- *Type:* string[]

IAM actions required for the GetRegistrationCode API call.

---

##### `opGetRetainedMessage`<sup>Required</sup> <a name="opGetRetainedMessage" id="@cdk_utils/iam.iot.IotOperations.property.opGetRetainedMessage"></a>

```typescript
public readonly opGetRetainedMessage: string[];
```

- *Type:* string[]

IAM actions required for the GetRetainedMessage API call.

---

##### `opGetStatistics`<sup>Required</sup> <a name="opGetStatistics" id="@cdk_utils/iam.iot.IotOperations.property.opGetStatistics"></a>

```typescript
public readonly opGetStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetStatistics API call.

---

##### `opGetThingConnectivityData`<sup>Required</sup> <a name="opGetThingConnectivityData" id="@cdk_utils/iam.iot.IotOperations.property.opGetThingConnectivityData"></a>

```typescript
public readonly opGetThingConnectivityData: string[];
```

- *Type:* string[]

IAM actions required for the GetThingConnectivityData API call.

---

##### `opGetThingShadow`<sup>Required</sup> <a name="opGetThingShadow" id="@cdk_utils/iam.iot.IotOperations.property.opGetThingShadow"></a>

```typescript
public readonly opGetThingShadow: string[];
```

- *Type:* string[]

IAM actions required for the GetThingShadow API call.

---

##### `opGetTopicRule`<sup>Required</sup> <a name="opGetTopicRule" id="@cdk_utils/iam.iot.IotOperations.property.opGetTopicRule"></a>

```typescript
public readonly opGetTopicRule: string[];
```

- *Type:* string[]

IAM actions required for the GetTopicRule API call.

---

##### `opGetTopicRuleDestination`<sup>Required</sup> <a name="opGetTopicRuleDestination" id="@cdk_utils/iam.iot.IotOperations.property.opGetTopicRuleDestination"></a>

```typescript
public readonly opGetTopicRuleDestination: string[];
```

- *Type:* string[]

IAM actions required for the GetTopicRuleDestination API call.

---

##### `opGetV2LoggingOptions`<sup>Required</sup> <a name="opGetV2LoggingOptions" id="@cdk_utils/iam.iot.IotOperations.property.opGetV2LoggingOptions"></a>

```typescript
public readonly opGetV2LoggingOptions: string[];
```

- *Type:* string[]

IAM actions required for the GetV2LoggingOptions API call.

---

##### `opSetDefaultAuthorizer`<sup>Required</sup> <a name="opSetDefaultAuthorizer" id="@cdk_utils/iam.iot.IotOperations.property.opSetDefaultAuthorizer"></a>

```typescript
public readonly opSetDefaultAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the SetDefaultAuthorizer API call.

---

##### `opSetDefaultPolicyVersion`<sup>Required</sup> <a name="opSetDefaultPolicyVersion" id="@cdk_utils/iam.iot.IotOperations.property.opSetDefaultPolicyVersion"></a>

```typescript
public readonly opSetDefaultPolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the SetDefaultPolicyVersion API call.

---

##### `opSetLoggingOptions`<sup>Required</sup> <a name="opSetLoggingOptions" id="@cdk_utils/iam.iot.IotOperations.property.opSetLoggingOptions"></a>

```typescript
public readonly opSetLoggingOptions: string[];
```

- *Type:* string[]

IAM actions required for the SetLoggingOptions API call.

---

##### `opSetV2LoggingLevel`<sup>Required</sup> <a name="opSetV2LoggingLevel" id="@cdk_utils/iam.iot.IotOperations.property.opSetV2LoggingLevel"></a>

```typescript
public readonly opSetV2LoggingLevel: string[];
```

- *Type:* string[]

IAM actions required for the SetV2LoggingLevel API call.

---

##### `opSetV2LoggingOptions`<sup>Required</sup> <a name="opSetV2LoggingOptions" id="@cdk_utils/iam.iot.IotOperations.property.opSetV2LoggingOptions"></a>

```typescript
public readonly opSetV2LoggingOptions: string[];
```

- *Type:* string[]

IAM actions required for the SetV2LoggingOptions API call.

---

##### `Publish`<sup>Required</sup> <a name="Publish" id="@cdk_utils/iam.iot.IotOperations.property.Publish"></a>

```typescript
public readonly Publish: string[];
```

- *Type:* string[]

IAM actions required for the Publish API call.

---

##### `PutVerificationStateOnViolation`<sup>Required</sup> <a name="PutVerificationStateOnViolation" id="@cdk_utils/iam.iot.IotOperations.property.PutVerificationStateOnViolation"></a>

```typescript
public readonly PutVerificationStateOnViolation: string[];
```

- *Type:* string[]

IAM actions required for the PutVerificationStateOnViolation API call.

---

##### `RegisterCACertificate`<sup>Required</sup> <a name="RegisterCACertificate" id="@cdk_utils/iam.iot.IotOperations.property.RegisterCACertificate"></a>

```typescript
public readonly RegisterCACertificate: string[];
```

- *Type:* string[]

IAM actions required for the RegisterCACertificate API call.

---

##### `RegisterCertificate`<sup>Required</sup> <a name="RegisterCertificate" id="@cdk_utils/iam.iot.IotOperations.property.RegisterCertificate"></a>

```typescript
public readonly RegisterCertificate: string[];
```

- *Type:* string[]

IAM actions required for the RegisterCertificate API call.

---

##### `RegisterCertificateWithoutCA`<sup>Required</sup> <a name="RegisterCertificateWithoutCA" id="@cdk_utils/iam.iot.IotOperations.property.RegisterCertificateWithoutCA"></a>

```typescript
public readonly RegisterCertificateWithoutCA: string[];
```

- *Type:* string[]

IAM actions required for the RegisterCertificateWithoutCA API call.

---

##### `RegisterThing`<sup>Required</sup> <a name="RegisterThing" id="@cdk_utils/iam.iot.IotOperations.property.RegisterThing"></a>

```typescript
public readonly RegisterThing: string[];
```

- *Type:* string[]

IAM actions required for the RegisterThing API call.

---

##### `RejectCertificateTransfer`<sup>Required</sup> <a name="RejectCertificateTransfer" id="@cdk_utils/iam.iot.IotOperations.property.RejectCertificateTransfer"></a>

```typescript
public readonly RejectCertificateTransfer: string[];
```

- *Type:* string[]

IAM actions required for the RejectCertificateTransfer API call.

---

##### `RemoveThingFromBillingGroup`<sup>Required</sup> <a name="RemoveThingFromBillingGroup" id="@cdk_utils/iam.iot.IotOperations.property.RemoveThingFromBillingGroup"></a>

```typescript
public readonly RemoveThingFromBillingGroup: string[];
```

- *Type:* string[]

IAM actions required for the RemoveThingFromBillingGroup API call.

---

##### `RemoveThingFromThingGroup`<sup>Required</sup> <a name="RemoveThingFromThingGroup" id="@cdk_utils/iam.iot.IotOperations.property.RemoveThingFromThingGroup"></a>

```typescript
public readonly RemoveThingFromThingGroup: string[];
```

- *Type:* string[]

IAM actions required for the RemoveThingFromThingGroup API call.

---

##### `ReplaceTopicRule`<sup>Required</sup> <a name="ReplaceTopicRule" id="@cdk_utils/iam.iot.IotOperations.property.ReplaceTopicRule"></a>

```typescript
public readonly ReplaceTopicRule: string[];
```

- *Type:* string[]

IAM actions required for the ReplaceTopicRule API call.

---

##### `RotateTunnelAccessToken`<sup>Required</sup> <a name="RotateTunnelAccessToken" id="@cdk_utils/iam.iot.IotOperations.property.RotateTunnelAccessToken"></a>

```typescript
public readonly RotateTunnelAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the RotateTunnelAccessToken API call.

---

##### `SearchIndex`<sup>Required</sup> <a name="SearchIndex" id="@cdk_utils/iam.iot.IotOperations.property.SearchIndex"></a>

```typescript
public readonly SearchIndex: string[];
```

- *Type:* string[]

IAM actions required for the SearchIndex API call.

---

##### `SendDirectMessage`<sup>Required</sup> <a name="SendDirectMessage" id="@cdk_utils/iam.iot.IotOperations.property.SendDirectMessage"></a>

```typescript
public readonly SendDirectMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendDirectMessage API call.

---

##### `StartAuditMitigationActionsTask`<sup>Required</sup> <a name="StartAuditMitigationActionsTask" id="@cdk_utils/iam.iot.IotOperations.property.StartAuditMitigationActionsTask"></a>

```typescript
public readonly StartAuditMitigationActionsTask: string[];
```

- *Type:* string[]

IAM actions required for the StartAuditMitigationActionsTask API call.

---

##### `StartDetectMitigationActionsTask`<sup>Required</sup> <a name="StartDetectMitigationActionsTask" id="@cdk_utils/iam.iot.IotOperations.property.StartDetectMitigationActionsTask"></a>

```typescript
public readonly StartDetectMitigationActionsTask: string[];
```

- *Type:* string[]

IAM actions required for the StartDetectMitigationActionsTask API call.

---

##### `StartOnDemandAuditTask`<sup>Required</sup> <a name="StartOnDemandAuditTask" id="@cdk_utils/iam.iot.IotOperations.property.StartOnDemandAuditTask"></a>

```typescript
public readonly StartOnDemandAuditTask: string[];
```

- *Type:* string[]

IAM actions required for the StartOnDemandAuditTask API call.

---

##### `StartThingRegistrationTask`<sup>Required</sup> <a name="StartThingRegistrationTask" id="@cdk_utils/iam.iot.IotOperations.property.StartThingRegistrationTask"></a>

```typescript
public readonly StartThingRegistrationTask: string[];
```

- *Type:* string[]

IAM actions required for the StartThingRegistrationTask API call.

---

##### `StopThingRegistrationTask`<sup>Required</sup> <a name="StopThingRegistrationTask" id="@cdk_utils/iam.iot.IotOperations.property.StopThingRegistrationTask"></a>

```typescript
public readonly StopThingRegistrationTask: string[];
```

- *Type:* string[]

IAM actions required for the StopThingRegistrationTask API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iot.IotOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestAuthorization`<sup>Required</sup> <a name="TestAuthorization" id="@cdk_utils/iam.iot.IotOperations.property.TestAuthorization"></a>

```typescript
public readonly TestAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the TestAuthorization API call.

---

##### `TestInvokeAuthorizer`<sup>Required</sup> <a name="TestInvokeAuthorizer" id="@cdk_utils/iam.iot.IotOperations.property.TestInvokeAuthorizer"></a>

```typescript
public readonly TestInvokeAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the TestInvokeAuthorizer API call.

---

##### `TransferCertificate`<sup>Required</sup> <a name="TransferCertificate" id="@cdk_utils/iam.iot.IotOperations.property.TransferCertificate"></a>

```typescript
public readonly TransferCertificate: string[];
```

- *Type:* string[]

IAM actions required for the TransferCertificate API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iot.IotOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountAuditConfiguration`<sup>Required</sup> <a name="UpdateAccountAuditConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.UpdateAccountAuditConfiguration"></a>

```typescript
public readonly UpdateAccountAuditConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountAuditConfiguration API call.

---

##### `UpdateAuditSuppression`<sup>Required</sup> <a name="UpdateAuditSuppression" id="@cdk_utils/iam.iot.IotOperations.property.UpdateAuditSuppression"></a>

```typescript
public readonly UpdateAuditSuppression: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAuditSuppression API call.

---

##### `UpdateAuthorizer`<sup>Required</sup> <a name="UpdateAuthorizer" id="@cdk_utils/iam.iot.IotOperations.property.UpdateAuthorizer"></a>

```typescript
public readonly UpdateAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAuthorizer API call.

---

##### `UpdateBillingGroup`<sup>Required</sup> <a name="UpdateBillingGroup" id="@cdk_utils/iam.iot.IotOperations.property.UpdateBillingGroup"></a>

```typescript
public readonly UpdateBillingGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBillingGroup API call.

---

##### `UpdateCACertificate`<sup>Required</sup> <a name="UpdateCACertificate" id="@cdk_utils/iam.iot.IotOperations.property.UpdateCACertificate"></a>

```typescript
public readonly UpdateCACertificate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCACertificate API call.

---

##### `UpdateCertificate`<sup>Required</sup> <a name="UpdateCertificate" id="@cdk_utils/iam.iot.IotOperations.property.UpdateCertificate"></a>

```typescript
public readonly UpdateCertificate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCertificate API call.

---

##### `UpdateCertificateProvider`<sup>Required</sup> <a name="UpdateCertificateProvider" id="@cdk_utils/iam.iot.IotOperations.property.UpdateCertificateProvider"></a>

```typescript
public readonly UpdateCertificateProvider: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCertificateProvider API call.

---

##### `UpdateCommand`<sup>Required</sup> <a name="UpdateCommand" id="@cdk_utils/iam.iot.IotOperations.property.UpdateCommand"></a>

```typescript
public readonly UpdateCommand: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCommand API call.

---

##### `UpdateCustomMetric`<sup>Required</sup> <a name="UpdateCustomMetric" id="@cdk_utils/iam.iot.IotOperations.property.UpdateCustomMetric"></a>

```typescript
public readonly UpdateCustomMetric: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomMetric API call.

---

##### `UpdateDimension`<sup>Required</sup> <a name="UpdateDimension" id="@cdk_utils/iam.iot.IotOperations.property.UpdateDimension"></a>

```typescript
public readonly UpdateDimension: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDimension API call.

---

##### `UpdateDomainConfiguration`<sup>Required</sup> <a name="UpdateDomainConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.UpdateDomainConfiguration"></a>

```typescript
public readonly UpdateDomainConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainConfiguration API call.

---

##### `UpdateDynamicThingGroup`<sup>Required</sup> <a name="UpdateDynamicThingGroup" id="@cdk_utils/iam.iot.IotOperations.property.UpdateDynamicThingGroup"></a>

```typescript
public readonly UpdateDynamicThingGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDynamicThingGroup API call.

---

##### `UpdateEncryptionConfiguration`<sup>Required</sup> <a name="UpdateEncryptionConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.UpdateEncryptionConfiguration"></a>

```typescript
public readonly UpdateEncryptionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEncryptionConfiguration API call.

---

##### `UpdateEventConfigurations`<sup>Required</sup> <a name="UpdateEventConfigurations" id="@cdk_utils/iam.iot.IotOperations.property.UpdateEventConfigurations"></a>

```typescript
public readonly UpdateEventConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventConfigurations API call.

---

##### `UpdateFleetMetric`<sup>Required</sup> <a name="UpdateFleetMetric" id="@cdk_utils/iam.iot.IotOperations.property.UpdateFleetMetric"></a>

```typescript
public readonly UpdateFleetMetric: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFleetMetric API call.

---

##### `UpdateIndexingConfiguration`<sup>Required</sup> <a name="UpdateIndexingConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.UpdateIndexingConfiguration"></a>

```typescript
public readonly UpdateIndexingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIndexingConfiguration API call.

---

##### `UpdateJob`<sup>Required</sup> <a name="UpdateJob" id="@cdk_utils/iam.iot.IotOperations.property.UpdateJob"></a>

```typescript
public readonly UpdateJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJob API call.

---

##### `UpdateMitigationAction`<sup>Required</sup> <a name="UpdateMitigationAction" id="@cdk_utils/iam.iot.IotOperations.property.UpdateMitigationAction"></a>

```typescript
public readonly UpdateMitigationAction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMitigationAction API call.

---

##### `UpdatePackage`<sup>Required</sup> <a name="UpdatePackage" id="@cdk_utils/iam.iot.IotOperations.property.UpdatePackage"></a>

```typescript
public readonly UpdatePackage: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePackage API call.

---

##### `UpdatePackageConfiguration`<sup>Required</sup> <a name="UpdatePackageConfiguration" id="@cdk_utils/iam.iot.IotOperations.property.UpdatePackageConfiguration"></a>

```typescript
public readonly UpdatePackageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePackageConfiguration API call.

---

##### `UpdatePackageVersion`<sup>Required</sup> <a name="UpdatePackageVersion" id="@cdk_utils/iam.iot.IotOperations.property.UpdatePackageVersion"></a>

```typescript
public readonly UpdatePackageVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePackageVersion API call.

---

##### `UpdateProvisioningTemplate`<sup>Required</sup> <a name="UpdateProvisioningTemplate" id="@cdk_utils/iam.iot.IotOperations.property.UpdateProvisioningTemplate"></a>

```typescript
public readonly UpdateProvisioningTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProvisioningTemplate API call.

---

##### `UpdateRoleAlias`<sup>Required</sup> <a name="UpdateRoleAlias" id="@cdk_utils/iam.iot.IotOperations.property.UpdateRoleAlias"></a>

```typescript
public readonly UpdateRoleAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoleAlias API call.

---

##### `UpdateScheduledAudit`<sup>Required</sup> <a name="UpdateScheduledAudit" id="@cdk_utils/iam.iot.IotOperations.property.UpdateScheduledAudit"></a>

```typescript
public readonly UpdateScheduledAudit: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScheduledAudit API call.

---

##### `UpdateSecurityProfile`<sup>Required</sup> <a name="UpdateSecurityProfile" id="@cdk_utils/iam.iot.IotOperations.property.UpdateSecurityProfile"></a>

```typescript
public readonly UpdateSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecurityProfile API call.

---

##### `UpdateStream`<sup>Required</sup> <a name="UpdateStream" id="@cdk_utils/iam.iot.IotOperations.property.UpdateStream"></a>

```typescript
public readonly UpdateStream: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStream API call.

---

##### `UpdateThing`<sup>Required</sup> <a name="UpdateThing" id="@cdk_utils/iam.iot.IotOperations.property.UpdateThing"></a>

```typescript
public readonly UpdateThing: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThing API call.

---

##### `UpdateThingGroup`<sup>Required</sup> <a name="UpdateThingGroup" id="@cdk_utils/iam.iot.IotOperations.property.UpdateThingGroup"></a>

```typescript
public readonly UpdateThingGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThingGroup API call.

---

##### `UpdateThingGroupsForThing`<sup>Required</sup> <a name="UpdateThingGroupsForThing" id="@cdk_utils/iam.iot.IotOperations.property.UpdateThingGroupsForThing"></a>

```typescript
public readonly UpdateThingGroupsForThing: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThingGroupsForThing API call.

---

##### `UpdateThingShadow`<sup>Required</sup> <a name="UpdateThingShadow" id="@cdk_utils/iam.iot.IotOperations.property.UpdateThingShadow"></a>

```typescript
public readonly UpdateThingShadow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThingShadow API call.

---

##### `UpdateThingType`<sup>Required</sup> <a name="UpdateThingType" id="@cdk_utils/iam.iot.IotOperations.property.UpdateThingType"></a>

```typescript
public readonly UpdateThingType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThingType API call.

---

##### `UpdateTopicRuleDestination`<sup>Required</sup> <a name="UpdateTopicRuleDestination" id="@cdk_utils/iam.iot.IotOperations.property.UpdateTopicRuleDestination"></a>

```typescript
public readonly UpdateTopicRuleDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTopicRuleDestination API call.

---

##### `ValidateSecurityProfileBehaviors`<sup>Required</sup> <a name="ValidateSecurityProfileBehaviors" id="@cdk_utils/iam.iot.IotOperations.property.ValidateSecurityProfileBehaviors"></a>

```typescript
public readonly ValidateSecurityProfileBehaviors: string[];
```

- *Type:* string[]

IAM actions required for the ValidateSecurityProfileBehaviors API call.

---

### IotResources <a name="IotResources" id="@cdk_utils/iam.iot.IotResources"></a>

ARN builders, validators, and parsers for iot resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iot.IotResources.Initializer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

new iot.IotResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iot.IotResources.authorizer">authorizer</a></code> | Builds an ARN for the authorizer resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.billinggroup">billinggroup</a></code> | Builds an ARN for the billinggroup resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.cacert">cacert</a></code> | Builds an ARN for the cacert resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.cert">cert</a></code> | Builds an ARN for the cert resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.certificateprovider">certificateprovider</a></code> | Builds an ARN for the certificateprovider resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.client">client</a></code> | Builds an ARN for the client resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.command">command</a></code> | Builds an ARN for the command resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.custommetric">custommetric</a></code> | Builds an ARN for the custommetric resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.destination">destination</a></code> | Builds an ARN for the destination resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.dimension">dimension</a></code> | Builds an ARN for the dimension resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.domainconfiguration">domainconfiguration</a></code> | Builds an ARN for the domainconfiguration resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.dynamicthinggroup">dynamicthinggroup</a></code> | Builds an ARN for the dynamicthinggroup resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.fleetmetric">fleetmetric</a></code> | Builds an ARN for the fleetmetric resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.index">index</a></code> | Builds an ARN for the index resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidAuthorizerArn">isValidAuthorizerArn</a></code> | Validates whether a string is a valid ARN for the authorizer resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidBillinggroupArn">isValidBillinggroupArn</a></code> | Validates whether a string is a valid ARN for the billinggroup resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidCacertArn">isValidCacertArn</a></code> | Validates whether a string is a valid ARN for the cacert resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidCertArn">isValidCertArn</a></code> | Validates whether a string is a valid ARN for the cert resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidCertificateproviderArn">isValidCertificateproviderArn</a></code> | Validates whether a string is a valid ARN for the certificateprovider resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidClientArn">isValidClientArn</a></code> | Validates whether a string is a valid ARN for the client resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidCommandArn">isValidCommandArn</a></code> | Validates whether a string is a valid ARN for the command resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidCustommetricArn">isValidCustommetricArn</a></code> | Validates whether a string is a valid ARN for the custommetric resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidDestinationArn">isValidDestinationArn</a></code> | Validates whether a string is a valid ARN for the destination resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidDimensionArn">isValidDimensionArn</a></code> | Validates whether a string is a valid ARN for the dimension resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidDomainconfigurationArn">isValidDomainconfigurationArn</a></code> | Validates whether a string is a valid ARN for the domainconfiguration resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidDynamicthinggroupArn">isValidDynamicthinggroupArn</a></code> | Validates whether a string is a valid ARN for the dynamicthinggroup resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidFleetmetricArn">isValidFleetmetricArn</a></code> | Validates whether a string is a valid ARN for the fleetmetric resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidIndexArn">isValidIndexArn</a></code> | Validates whether a string is a valid ARN for the index resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidJobtemplateArn">isValidJobtemplateArn</a></code> | Validates whether a string is a valid ARN for the jobtemplate resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidMitigationactionArn">isValidMitigationactionArn</a></code> | Validates whether a string is a valid ARN for the mitigationaction resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidOtaupdateArn">isValidOtaupdateArn</a></code> | Validates whether a string is a valid ARN for the otaupdate resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidPackageArn">isValidPackageArn</a></code> | Validates whether a string is a valid ARN for the package resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidPackageversionArn">isValidPackageversionArn</a></code> | Validates whether a string is a valid ARN for the packageversion resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidPolicyArn">isValidPolicyArn</a></code> | Validates whether a string is a valid ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidProvisioningtemplateArn">isValidProvisioningtemplateArn</a></code> | Validates whether a string is a valid ARN for the provisioningtemplate resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidRolealiasArn">isValidRolealiasArn</a></code> | Validates whether a string is a valid ARN for the rolealias resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidRuleArn">isValidRuleArn</a></code> | Validates whether a string is a valid ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidScheduledauditArn">isValidScheduledauditArn</a></code> | Validates whether a string is a valid ARN for the scheduledaudit resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidSecurityprofileArn">isValidSecurityprofileArn</a></code> | Validates whether a string is a valid ARN for the securityprofile resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidStreamArn">isValidStreamArn</a></code> | Validates whether a string is a valid ARN for the stream resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidThingArn">isValidThingArn</a></code> | Validates whether a string is a valid ARN for the thing resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidThinggroupArn">isValidThinggroupArn</a></code> | Validates whether a string is a valid ARN for the thinggroup resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidThingtypeArn">isValidThingtypeArn</a></code> | Validates whether a string is a valid ARN for the thingtype resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidTopicArn">isValidTopicArn</a></code> | Validates whether a string is a valid ARN for the topic resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidTopicfilterArn">isValidTopicfilterArn</a></code> | Validates whether a string is a valid ARN for the topicfilter resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.isValidTunnelArn">isValidTunnelArn</a></code> | Validates whether a string is a valid ARN for the tunnel resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.job">job</a></code> | Builds an ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.jobtemplate">jobtemplate</a></code> | Builds an ARN for the jobtemplate resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.mitigationaction">mitigationaction</a></code> | Builds an ARN for the mitigationaction resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.otaupdate">otaupdate</a></code> | Builds an ARN for the otaupdate resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.package">package</a></code> | Builds an ARN for the package resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.packageversion">packageversion</a></code> | Builds an ARN for the packageversion resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseAuthorizerArn">parseAuthorizerArn</a></code> | Parses a authorizer ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseBillinggroupArn">parseBillinggroupArn</a></code> | Parses a billinggroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseCacertArn">parseCacertArn</a></code> | Parses a cacert ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseCertArn">parseCertArn</a></code> | Parses a cert ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseCertificateproviderArn">parseCertificateproviderArn</a></code> | Parses a certificateprovider ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseClientArn">parseClientArn</a></code> | Parses a client ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseCommandArn">parseCommandArn</a></code> | Parses a command ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseCustommetricArn">parseCustommetricArn</a></code> | Parses a custommetric ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseDestinationArn">parseDestinationArn</a></code> | Parses a destination ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseDimensionArn">parseDimensionArn</a></code> | Parses a dimension ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseDomainconfigurationArn">parseDomainconfigurationArn</a></code> | Parses a domainconfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseDynamicthinggroupArn">parseDynamicthinggroupArn</a></code> | Parses a dynamicthinggroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseFleetmetricArn">parseFleetmetricArn</a></code> | Parses a fleetmetric ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseIndexArn">parseIndexArn</a></code> | Parses a index ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseJobArn">parseJobArn</a></code> | Parses a job ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseJobtemplateArn">parseJobtemplateArn</a></code> | Parses a jobtemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseMitigationactionArn">parseMitigationactionArn</a></code> | Parses a mitigationaction ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseOtaupdateArn">parseOtaupdateArn</a></code> | Parses a otaupdate ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parsePackageArn">parsePackageArn</a></code> | Parses a package ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parsePackageversionArn">parsePackageversionArn</a></code> | Parses a packageversion ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parsePolicyArn">parsePolicyArn</a></code> | Parses a policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseProvisioningtemplateArn">parseProvisioningtemplateArn</a></code> | Parses a provisioningtemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseRolealiasArn">parseRolealiasArn</a></code> | Parses a rolealias ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseRuleArn">parseRuleArn</a></code> | Parses a rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseScheduledauditArn">parseScheduledauditArn</a></code> | Parses a scheduledaudit ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseSecurityprofileArn">parseSecurityprofileArn</a></code> | Parses a securityprofile ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseStreamArn">parseStreamArn</a></code> | Parses a stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseThingArn">parseThingArn</a></code> | Parses a thing ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseThinggroupArn">parseThinggroupArn</a></code> | Parses a thinggroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseThingtypeArn">parseThingtypeArn</a></code> | Parses a thingtype ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseTopicArn">parseTopicArn</a></code> | Parses a topic ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseTopicfilterArn">parseTopicfilterArn</a></code> | Parses a topicfilter ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.parseTunnelArn">parseTunnelArn</a></code> | Parses a tunnel ARN into its components. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.policy">policy</a></code> | Builds an ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.provisioningtemplate">provisioningtemplate</a></code> | Builds an ARN for the provisioningtemplate resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.rolealias">rolealias</a></code> | Builds an ARN for the rolealias resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.rule">rule</a></code> | Builds an ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.scheduledaudit">scheduledaudit</a></code> | Builds an ARN for the scheduledaudit resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.securityprofile">securityprofile</a></code> | Builds an ARN for the securityprofile resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.stream">stream</a></code> | Builds an ARN for the stream resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.thing">thing</a></code> | Builds an ARN for the thing resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.thinggroup">thinggroup</a></code> | Builds an ARN for the thinggroup resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.thingtype">thingtype</a></code> | Builds an ARN for the thingtype resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.topic">topic</a></code> | Builds an ARN for the topic resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.topicfilter">topicfilter</a></code> | Builds an ARN for the topicfilter resource. |
| <code><a href="#@cdk_utils/iam.iot.IotResources.tunnel">tunnel</a></code> | Builds an ARN for the tunnel resource. |

---

##### `authorizer` <a name="authorizer" id="@cdk_utils/iam.iot.IotResources.authorizer"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.authorizer(props: IotAuthorizerArnProps)
```

Builds an ARN for the authorizer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.authorizer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotAuthorizerArnProps">IotAuthorizerArnProps</a>

---

##### `billinggroup` <a name="billinggroup" id="@cdk_utils/iam.iot.IotResources.billinggroup"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.billinggroup(props: IotBillinggroupArnProps)
```

Builds an ARN for the billinggroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.billinggroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotBillinggroupArnProps">IotBillinggroupArnProps</a>

---

##### `cacert` <a name="cacert" id="@cdk_utils/iam.iot.IotResources.cacert"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.cacert(props: IotCacertArnProps)
```

Builds an ARN for the cacert resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.cacert.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotCacertArnProps">IotCacertArnProps</a>

---

##### `cert` <a name="cert" id="@cdk_utils/iam.iot.IotResources.cert"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.cert(props: IotCertArnProps)
```

Builds an ARN for the cert resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.cert.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotCertArnProps">IotCertArnProps</a>

---

##### `certificateprovider` <a name="certificateprovider" id="@cdk_utils/iam.iot.IotResources.certificateprovider"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.certificateprovider(props: IotCertificateproviderArnProps)
```

Builds an ARN for the certificateprovider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.certificateprovider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotCertificateproviderArnProps">IotCertificateproviderArnProps</a>

---

##### `client` <a name="client" id="@cdk_utils/iam.iot.IotResources.client"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.client(props: IotClientArnProps)
```

Builds an ARN for the client resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.client.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotClientArnProps">IotClientArnProps</a>

---

##### `command` <a name="command" id="@cdk_utils/iam.iot.IotResources.command"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.command(props: IotCommandArnProps)
```

Builds an ARN for the command resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.command.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotCommandArnProps">IotCommandArnProps</a>

---

##### `custommetric` <a name="custommetric" id="@cdk_utils/iam.iot.IotResources.custommetric"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.custommetric(props: IotCustommetricArnProps)
```

Builds an ARN for the custommetric resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.custommetric.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotCustommetricArnProps">IotCustommetricArnProps</a>

---

##### `destination` <a name="destination" id="@cdk_utils/iam.iot.IotResources.destination"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.destination(props: IotDestinationArnProps)
```

Builds an ARN for the destination resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.destination.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotDestinationArnProps">IotDestinationArnProps</a>

---

##### `dimension` <a name="dimension" id="@cdk_utils/iam.iot.IotResources.dimension"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.dimension(props: IotDimensionArnProps)
```

Builds an ARN for the dimension resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.dimension.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotDimensionArnProps">IotDimensionArnProps</a>

---

##### `domainconfiguration` <a name="domainconfiguration" id="@cdk_utils/iam.iot.IotResources.domainconfiguration"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.domainconfiguration(props: IotDomainconfigurationArnProps)
```

Builds an ARN for the domainconfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.domainconfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotDomainconfigurationArnProps">IotDomainconfigurationArnProps</a>

---

##### `dynamicthinggroup` <a name="dynamicthinggroup" id="@cdk_utils/iam.iot.IotResources.dynamicthinggroup"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.dynamicthinggroup(props: IotDynamicthinggroupArnProps)
```

Builds an ARN for the dynamicthinggroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.dynamicthinggroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotDynamicthinggroupArnProps">IotDynamicthinggroupArnProps</a>

---

##### `fleetmetric` <a name="fleetmetric" id="@cdk_utils/iam.iot.IotResources.fleetmetric"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.fleetmetric(props: IotFleetmetricArnProps)
```

Builds an ARN for the fleetmetric resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.fleetmetric.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotFleetmetricArnProps">IotFleetmetricArnProps</a>

---

##### `index` <a name="index" id="@cdk_utils/iam.iot.IotResources.index"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.index(props: IotIndexArnProps)
```

Builds an ARN for the index resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.index.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotIndexArnProps">IotIndexArnProps</a>

---

##### `isValidAuthorizerArn` <a name="isValidAuthorizerArn" id="@cdk_utils/iam.iot.IotResources.isValidAuthorizerArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidAuthorizerArn(arn: string)
```

Validates whether a string is a valid ARN for the authorizer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidAuthorizerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBillinggroupArn` <a name="isValidBillinggroupArn" id="@cdk_utils/iam.iot.IotResources.isValidBillinggroupArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidBillinggroupArn(arn: string)
```

Validates whether a string is a valid ARN for the billinggroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidBillinggroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCacertArn` <a name="isValidCacertArn" id="@cdk_utils/iam.iot.IotResources.isValidCacertArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidCacertArn(arn: string)
```

Validates whether a string is a valid ARN for the cacert resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidCacertArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCertArn` <a name="isValidCertArn" id="@cdk_utils/iam.iot.IotResources.isValidCertArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidCertArn(arn: string)
```

Validates whether a string is a valid ARN for the cert resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidCertArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCertificateproviderArn` <a name="isValidCertificateproviderArn" id="@cdk_utils/iam.iot.IotResources.isValidCertificateproviderArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidCertificateproviderArn(arn: string)
```

Validates whether a string is a valid ARN for the certificateprovider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidCertificateproviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClientArn` <a name="isValidClientArn" id="@cdk_utils/iam.iot.IotResources.isValidClientArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidClientArn(arn: string)
```

Validates whether a string is a valid ARN for the client resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidClientArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCommandArn` <a name="isValidCommandArn" id="@cdk_utils/iam.iot.IotResources.isValidCommandArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidCommandArn(arn: string)
```

Validates whether a string is a valid ARN for the command resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidCommandArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustommetricArn` <a name="isValidCustommetricArn" id="@cdk_utils/iam.iot.IotResources.isValidCustommetricArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidCustommetricArn(arn: string)
```

Validates whether a string is a valid ARN for the custommetric resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidCustommetricArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDestinationArn` <a name="isValidDestinationArn" id="@cdk_utils/iam.iot.IotResources.isValidDestinationArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidDestinationArn(arn: string)
```

Validates whether a string is a valid ARN for the destination resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDimensionArn` <a name="isValidDimensionArn" id="@cdk_utils/iam.iot.IotResources.isValidDimensionArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidDimensionArn(arn: string)
```

Validates whether a string is a valid ARN for the dimension resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidDimensionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainconfigurationArn` <a name="isValidDomainconfigurationArn" id="@cdk_utils/iam.iot.IotResources.isValidDomainconfigurationArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidDomainconfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the domainconfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidDomainconfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDynamicthinggroupArn` <a name="isValidDynamicthinggroupArn" id="@cdk_utils/iam.iot.IotResources.isValidDynamicthinggroupArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidDynamicthinggroupArn(arn: string)
```

Validates whether a string is a valid ARN for the dynamicthinggroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidDynamicthinggroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFleetmetricArn` <a name="isValidFleetmetricArn" id="@cdk_utils/iam.iot.IotResources.isValidFleetmetricArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidFleetmetricArn(arn: string)
```

Validates whether a string is a valid ARN for the fleetmetric resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidFleetmetricArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIndexArn` <a name="isValidIndexArn" id="@cdk_utils/iam.iot.IotResources.isValidIndexArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidIndexArn(arn: string)
```

Validates whether a string is a valid ARN for the index resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.iot.IotResources.isValidJobArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobtemplateArn` <a name="isValidJobtemplateArn" id="@cdk_utils/iam.iot.IotResources.isValidJobtemplateArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidJobtemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the jobtemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidJobtemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMitigationactionArn` <a name="isValidMitigationactionArn" id="@cdk_utils/iam.iot.IotResources.isValidMitigationactionArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidMitigationactionArn(arn: string)
```

Validates whether a string is a valid ARN for the mitigationaction resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidMitigationactionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOtaupdateArn` <a name="isValidOtaupdateArn" id="@cdk_utils/iam.iot.IotResources.isValidOtaupdateArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidOtaupdateArn(arn: string)
```

Validates whether a string is a valid ARN for the otaupdate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidOtaupdateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPackageArn` <a name="isValidPackageArn" id="@cdk_utils/iam.iot.IotResources.isValidPackageArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidPackageArn(arn: string)
```

Validates whether a string is a valid ARN for the package resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidPackageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPackageversionArn` <a name="isValidPackageversionArn" id="@cdk_utils/iam.iot.IotResources.isValidPackageversionArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidPackageversionArn(arn: string)
```

Validates whether a string is a valid ARN for the packageversion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidPackageversionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicyArn` <a name="isValidPolicyArn" id="@cdk_utils/iam.iot.IotResources.isValidPolicyArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProvisioningtemplateArn` <a name="isValidProvisioningtemplateArn" id="@cdk_utils/iam.iot.IotResources.isValidProvisioningtemplateArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidProvisioningtemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the provisioningtemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidProvisioningtemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRolealiasArn` <a name="isValidRolealiasArn" id="@cdk_utils/iam.iot.IotResources.isValidRolealiasArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidRolealiasArn(arn: string)
```

Validates whether a string is a valid ARN for the rolealias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidRolealiasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuleArn` <a name="isValidRuleArn" id="@cdk_utils/iam.iot.IotResources.isValidRuleArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScheduledauditArn` <a name="isValidScheduledauditArn" id="@cdk_utils/iam.iot.IotResources.isValidScheduledauditArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidScheduledauditArn(arn: string)
```

Validates whether a string is a valid ARN for the scheduledaudit resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidScheduledauditArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSecurityprofileArn` <a name="isValidSecurityprofileArn" id="@cdk_utils/iam.iot.IotResources.isValidSecurityprofileArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidSecurityprofileArn(arn: string)
```

Validates whether a string is a valid ARN for the securityprofile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidSecurityprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamArn` <a name="isValidStreamArn" id="@cdk_utils/iam.iot.IotResources.isValidStreamArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidThingArn` <a name="isValidThingArn" id="@cdk_utils/iam.iot.IotResources.isValidThingArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidThingArn(arn: string)
```

Validates whether a string is a valid ARN for the thing resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidThingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidThinggroupArn` <a name="isValidThinggroupArn" id="@cdk_utils/iam.iot.IotResources.isValidThinggroupArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidThinggroupArn(arn: string)
```

Validates whether a string is a valid ARN for the thinggroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidThinggroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidThingtypeArn` <a name="isValidThingtypeArn" id="@cdk_utils/iam.iot.IotResources.isValidThingtypeArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidThingtypeArn(arn: string)
```

Validates whether a string is a valid ARN for the thingtype resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidThingtypeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTopicArn` <a name="isValidTopicArn" id="@cdk_utils/iam.iot.IotResources.isValidTopicArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidTopicArn(arn: string)
```

Validates whether a string is a valid ARN for the topic resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTopicfilterArn` <a name="isValidTopicfilterArn" id="@cdk_utils/iam.iot.IotResources.isValidTopicfilterArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidTopicfilterArn(arn: string)
```

Validates whether a string is a valid ARN for the topicfilter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidTopicfilterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTunnelArn` <a name="isValidTunnelArn" id="@cdk_utils/iam.iot.IotResources.isValidTunnelArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.isValidTunnelArn(arn: string)
```

Validates whether a string is a valid ARN for the tunnel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.isValidTunnelArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.iot.IotResources.job"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.job(props: IotJobArnProps)
```

Builds an ARN for the job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotJobArnProps">IotJobArnProps</a>

---

##### `jobtemplate` <a name="jobtemplate" id="@cdk_utils/iam.iot.IotResources.jobtemplate"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.jobtemplate(props: IotJobtemplateArnProps)
```

Builds an ARN for the jobtemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.jobtemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotJobtemplateArnProps">IotJobtemplateArnProps</a>

---

##### `mitigationaction` <a name="mitigationaction" id="@cdk_utils/iam.iot.IotResources.mitigationaction"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.mitigationaction(props: IotMitigationactionArnProps)
```

Builds an ARN for the mitigationaction resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.mitigationaction.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotMitigationactionArnProps">IotMitigationactionArnProps</a>

---

##### `otaupdate` <a name="otaupdate" id="@cdk_utils/iam.iot.IotResources.otaupdate"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.otaupdate(props: IotOtaupdateArnProps)
```

Builds an ARN for the otaupdate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.otaupdate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotOtaupdateArnProps">IotOtaupdateArnProps</a>

---

##### `package` <a name="package" id="@cdk_utils/iam.iot.IotResources.package"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.package(props: IotPackageArnProps)
```

Builds an ARN for the package resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.package.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotPackageArnProps">IotPackageArnProps</a>

---

##### `packageversion` <a name="packageversion" id="@cdk_utils/iam.iot.IotResources.packageversion"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.packageversion(props: IotPackageversionArnProps)
```

Builds an ARN for the packageversion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.packageversion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotPackageversionArnProps">IotPackageversionArnProps</a>

---

##### `parseAuthorizerArn` <a name="parseAuthorizerArn" id="@cdk_utils/iam.iot.IotResources.parseAuthorizerArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseAuthorizerArn(arn: string)
```

Parses a authorizer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseAuthorizerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBillinggroupArn` <a name="parseBillinggroupArn" id="@cdk_utils/iam.iot.IotResources.parseBillinggroupArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseBillinggroupArn(arn: string)
```

Parses a billinggroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseBillinggroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCacertArn` <a name="parseCacertArn" id="@cdk_utils/iam.iot.IotResources.parseCacertArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseCacertArn(arn: string)
```

Parses a cacert ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseCacertArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCertArn` <a name="parseCertArn" id="@cdk_utils/iam.iot.IotResources.parseCertArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseCertArn(arn: string)
```

Parses a cert ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseCertArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCertificateproviderArn` <a name="parseCertificateproviderArn" id="@cdk_utils/iam.iot.IotResources.parseCertificateproviderArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseCertificateproviderArn(arn: string)
```

Parses a certificateprovider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseCertificateproviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClientArn` <a name="parseClientArn" id="@cdk_utils/iam.iot.IotResources.parseClientArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseClientArn(arn: string)
```

Parses a client ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseClientArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCommandArn` <a name="parseCommandArn" id="@cdk_utils/iam.iot.IotResources.parseCommandArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseCommandArn(arn: string)
```

Parses a command ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseCommandArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustommetricArn` <a name="parseCustommetricArn" id="@cdk_utils/iam.iot.IotResources.parseCustommetricArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseCustommetricArn(arn: string)
```

Parses a custommetric ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseCustommetricArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDestinationArn` <a name="parseDestinationArn" id="@cdk_utils/iam.iot.IotResources.parseDestinationArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseDestinationArn(arn: string)
```

Parses a destination ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDimensionArn` <a name="parseDimensionArn" id="@cdk_utils/iam.iot.IotResources.parseDimensionArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseDimensionArn(arn: string)
```

Parses a dimension ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseDimensionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainconfigurationArn` <a name="parseDomainconfigurationArn" id="@cdk_utils/iam.iot.IotResources.parseDomainconfigurationArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseDomainconfigurationArn(arn: string)
```

Parses a domainconfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseDomainconfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDynamicthinggroupArn` <a name="parseDynamicthinggroupArn" id="@cdk_utils/iam.iot.IotResources.parseDynamicthinggroupArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseDynamicthinggroupArn(arn: string)
```

Parses a dynamicthinggroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseDynamicthinggroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFleetmetricArn` <a name="parseFleetmetricArn" id="@cdk_utils/iam.iot.IotResources.parseFleetmetricArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseFleetmetricArn(arn: string)
```

Parses a fleetmetric ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseFleetmetricArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIndexArn` <a name="parseIndexArn" id="@cdk_utils/iam.iot.IotResources.parseIndexArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseIndexArn(arn: string)
```

Parses a index ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.iot.IotResources.parseJobArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseJobArn(arn: string)
```

Parses a job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobtemplateArn` <a name="parseJobtemplateArn" id="@cdk_utils/iam.iot.IotResources.parseJobtemplateArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseJobtemplateArn(arn: string)
```

Parses a jobtemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseJobtemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMitigationactionArn` <a name="parseMitigationactionArn" id="@cdk_utils/iam.iot.IotResources.parseMitigationactionArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseMitigationactionArn(arn: string)
```

Parses a mitigationaction ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseMitigationactionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOtaupdateArn` <a name="parseOtaupdateArn" id="@cdk_utils/iam.iot.IotResources.parseOtaupdateArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseOtaupdateArn(arn: string)
```

Parses a otaupdate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseOtaupdateArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePackageArn` <a name="parsePackageArn" id="@cdk_utils/iam.iot.IotResources.parsePackageArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parsePackageArn(arn: string)
```

Parses a package ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parsePackageArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePackageversionArn` <a name="parsePackageversionArn" id="@cdk_utils/iam.iot.IotResources.parsePackageversionArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parsePackageversionArn(arn: string)
```

Parses a packageversion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parsePackageversionArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyArn` <a name="parsePolicyArn" id="@cdk_utils/iam.iot.IotResources.parsePolicyArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parsePolicyArn(arn: string)
```

Parses a policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parsePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProvisioningtemplateArn` <a name="parseProvisioningtemplateArn" id="@cdk_utils/iam.iot.IotResources.parseProvisioningtemplateArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseProvisioningtemplateArn(arn: string)
```

Parses a provisioningtemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseProvisioningtemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRolealiasArn` <a name="parseRolealiasArn" id="@cdk_utils/iam.iot.IotResources.parseRolealiasArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseRolealiasArn(arn: string)
```

Parses a rolealias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseRolealiasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleArn` <a name="parseRuleArn" id="@cdk_utils/iam.iot.IotResources.parseRuleArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseRuleArn(arn: string)
```

Parses a rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScheduledauditArn` <a name="parseScheduledauditArn" id="@cdk_utils/iam.iot.IotResources.parseScheduledauditArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseScheduledauditArn(arn: string)
```

Parses a scheduledaudit ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseScheduledauditArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecurityprofileArn` <a name="parseSecurityprofileArn" id="@cdk_utils/iam.iot.IotResources.parseSecurityprofileArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseSecurityprofileArn(arn: string)
```

Parses a securityprofile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseSecurityprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamArn` <a name="parseStreamArn" id="@cdk_utils/iam.iot.IotResources.parseStreamArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseStreamArn(arn: string)
```

Parses a stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThingArn` <a name="parseThingArn" id="@cdk_utils/iam.iot.IotResources.parseThingArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseThingArn(arn: string)
```

Parses a thing ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseThingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThinggroupArn` <a name="parseThinggroupArn" id="@cdk_utils/iam.iot.IotResources.parseThinggroupArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseThinggroupArn(arn: string)
```

Parses a thinggroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseThinggroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThingtypeArn` <a name="parseThingtypeArn" id="@cdk_utils/iam.iot.IotResources.parseThingtypeArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseThingtypeArn(arn: string)
```

Parses a thingtype ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseThingtypeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTopicArn` <a name="parseTopicArn" id="@cdk_utils/iam.iot.IotResources.parseTopicArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseTopicArn(arn: string)
```

Parses a topic ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTopicfilterArn` <a name="parseTopicfilterArn" id="@cdk_utils/iam.iot.IotResources.parseTopicfilterArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseTopicfilterArn(arn: string)
```

Parses a topicfilter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseTopicfilterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTunnelArn` <a name="parseTunnelArn" id="@cdk_utils/iam.iot.IotResources.parseTunnelArn"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.parseTunnelArn(arn: string)
```

Parses a tunnel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iot.IotResources.parseTunnelArn.parameter.arn"></a>

- *Type:* string

---

##### `policy` <a name="policy" id="@cdk_utils/iam.iot.IotResources.policy"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.policy(props: IotPolicyArnProps)
```

Builds an ARN for the policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.policy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotPolicyArnProps">IotPolicyArnProps</a>

---

##### `provisioningtemplate` <a name="provisioningtemplate" id="@cdk_utils/iam.iot.IotResources.provisioningtemplate"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.provisioningtemplate(props: IotProvisioningtemplateArnProps)
```

Builds an ARN for the provisioningtemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.provisioningtemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotProvisioningtemplateArnProps">IotProvisioningtemplateArnProps</a>

---

##### `rolealias` <a name="rolealias" id="@cdk_utils/iam.iot.IotResources.rolealias"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.rolealias(props: IotRolealiasArnProps)
```

Builds an ARN for the rolealias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.rolealias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotRolealiasArnProps">IotRolealiasArnProps</a>

---

##### `rule` <a name="rule" id="@cdk_utils/iam.iot.IotResources.rule"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.rule(props: IotRuleArnProps)
```

Builds an ARN for the rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.rule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotRuleArnProps">IotRuleArnProps</a>

---

##### `scheduledaudit` <a name="scheduledaudit" id="@cdk_utils/iam.iot.IotResources.scheduledaudit"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.scheduledaudit(props: IotScheduledauditArnProps)
```

Builds an ARN for the scheduledaudit resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.scheduledaudit.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotScheduledauditArnProps">IotScheduledauditArnProps</a>

---

##### `securityprofile` <a name="securityprofile" id="@cdk_utils/iam.iot.IotResources.securityprofile"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.securityprofile(props: IotSecurityprofileArnProps)
```

Builds an ARN for the securityprofile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.securityprofile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotSecurityprofileArnProps">IotSecurityprofileArnProps</a>

---

##### `stream` <a name="stream" id="@cdk_utils/iam.iot.IotResources.stream"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.stream(props: IotStreamArnProps)
```

Builds an ARN for the stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.stream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotStreamArnProps">IotStreamArnProps</a>

---

##### `thing` <a name="thing" id="@cdk_utils/iam.iot.IotResources.thing"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.thing(props: IotThingArnProps)
```

Builds an ARN for the thing resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.thing.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotThingArnProps">IotThingArnProps</a>

---

##### `thinggroup` <a name="thinggroup" id="@cdk_utils/iam.iot.IotResources.thinggroup"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.thinggroup(props: IotThinggroupArnProps)
```

Builds an ARN for the thinggroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.thinggroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotThinggroupArnProps">IotThinggroupArnProps</a>

---

##### `thingtype` <a name="thingtype" id="@cdk_utils/iam.iot.IotResources.thingtype"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.thingtype(props: IotThingtypeArnProps)
```

Builds an ARN for the thingtype resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.thingtype.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotThingtypeArnProps">IotThingtypeArnProps</a>

---

##### `topic` <a name="topic" id="@cdk_utils/iam.iot.IotResources.topic"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.topic(props: IotTopicArnProps)
```

Builds an ARN for the topic resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.topic.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotTopicArnProps">IotTopicArnProps</a>

---

##### `topicfilter` <a name="topicfilter" id="@cdk_utils/iam.iot.IotResources.topicfilter"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.topicfilter(props: IotTopicfilterArnProps)
```

Builds an ARN for the topicfilter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.topicfilter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotTopicfilterArnProps">IotTopicfilterArnProps</a>

---

##### `tunnel` <a name="tunnel" id="@cdk_utils/iam.iot.IotResources.tunnel"></a>

```typescript
import { iot } from '@cdk_utils/iam'

iot.IotResources.tunnel(props: IotTunnelArnProps)
```

Builds an ARN for the tunnel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iot.IotResources.tunnel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iot.IotTunnelArnProps">IotTunnelArnProps</a>

---




