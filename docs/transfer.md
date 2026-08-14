# `transfer` Submodule <a name="`transfer` Submodule" id="@cdk_utils/iam.transfer"></a>


## Structs <a name="Structs" id="Structs"></a>

### TransferAgreementArnComponents <a name="TransferAgreementArnComponents" id="@cdk_utils/iam.transfer.TransferAgreementArnComponents"></a>

Parsed components of a agreement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferAgreementArnComponents.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferAgreementArnComponents: transfer.TransferAgreementArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferAgreementArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferAgreementArnComponents.property.agreementId">agreementId</a></code> | <code>string</code> | The AgreementId component. |
| <code><a href="#@cdk_utils/iam.transfer.TransferAgreementArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferAgreementArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transfer.TransferAgreementArnComponents.property.serverId">serverId</a></code> | <code>string</code> | The ServerId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferAgreementArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="@cdk_utils/iam.transfer.TransferAgreementArnComponents.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

The AgreementId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferAgreementArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferAgreementArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdk_utils/iam.transfer.TransferAgreementArnComponents.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The ServerId component.

---

### TransferAgreementArnProps <a name="TransferAgreementArnProps" id="@cdk_utils/iam.transfer.TransferAgreementArnProps"></a>

Properties for building a agreement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferAgreementArnProps.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferAgreementArnProps: transfer.TransferAgreementArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferAgreementArnProps.property.agreementId">agreementId</a></code> | <code>string</code> | The AgreementId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferAgreementArnProps.property.serverId">serverId</a></code> | <code>string</code> | The ServerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferAgreementArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferAgreementArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferAgreementArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="@cdk_utils/iam.transfer.TransferAgreementArnProps.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

The AgreementId component of the ARN.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdk_utils/iam.transfer.TransferAgreementArnProps.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The ServerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferAgreementArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferAgreementArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferAgreementArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransferCertificateArnComponents <a name="TransferCertificateArnComponents" id="@cdk_utils/iam.transfer.TransferCertificateArnComponents"></a>

Parsed components of a certificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferCertificateArnComponents.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferCertificateArnComponents: transfer.TransferCertificateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferCertificateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferCertificateArnComponents.property.certificateId">certificateId</a></code> | <code>string</code> | The CertificateId component. |
| <code><a href="#@cdk_utils/iam.transfer.TransferCertificateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferCertificateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferCertificateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdk_utils/iam.transfer.TransferCertificateArnComponents.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

The CertificateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferCertificateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferCertificateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TransferCertificateArnProps <a name="TransferCertificateArnProps" id="@cdk_utils/iam.transfer.TransferCertificateArnProps"></a>

Properties for building a certificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferCertificateArnProps.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferCertificateArnProps: transfer.TransferCertificateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferCertificateArnProps.property.certificateId">certificateId</a></code> | <code>string</code> | The CertificateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferCertificateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferCertificateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferCertificateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdk_utils/iam.transfer.TransferCertificateArnProps.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

The CertificateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferCertificateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferCertificateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferCertificateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransferConnectorArnComponents <a name="TransferConnectorArnComponents" id="@cdk_utils/iam.transfer.TransferConnectorArnComponents"></a>

Parsed components of a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferConnectorArnComponents.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferConnectorArnComponents: transfer.TransferConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConnectorArnComponents.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.transfer.TransferConnectorArnComponents.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TransferConnectorArnProps <a name="TransferConnectorArnProps" id="@cdk_utils/iam.transfer.TransferConnectorArnProps"></a>

Properties for building a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferConnectorArnProps.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferConnectorArnProps: transfer.TransferConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferConnectorArnProps.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.transfer.TransferConnectorArnProps.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransferHostKeyArnComponents <a name="TransferHostKeyArnComponents" id="@cdk_utils/iam.transfer.TransferHostKeyArnComponents"></a>

Parsed components of a host-key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferHostKeyArnComponents.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferHostKeyArnComponents: transfer.TransferHostKeyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferHostKeyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferHostKeyArnComponents.property.hostKeyId">hostKeyId</a></code> | <code>string</code> | The HostKeyId component. |
| <code><a href="#@cdk_utils/iam.transfer.TransferHostKeyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferHostKeyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transfer.TransferHostKeyArnComponents.property.serverId">serverId</a></code> | <code>string</code> | The ServerId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferHostKeyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `hostKeyId`<sup>Required</sup> <a name="hostKeyId" id="@cdk_utils/iam.transfer.TransferHostKeyArnComponents.property.hostKeyId"></a>

```typescript
public readonly hostKeyId: string;
```

- *Type:* string

The HostKeyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferHostKeyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferHostKeyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdk_utils/iam.transfer.TransferHostKeyArnComponents.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The ServerId component.

---

### TransferHostKeyArnProps <a name="TransferHostKeyArnProps" id="@cdk_utils/iam.transfer.TransferHostKeyArnProps"></a>

Properties for building a host-key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferHostKeyArnProps.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferHostKeyArnProps: transfer.TransferHostKeyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferHostKeyArnProps.property.hostKeyId">hostKeyId</a></code> | <code>string</code> | The HostKeyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferHostKeyArnProps.property.serverId">serverId</a></code> | <code>string</code> | The ServerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferHostKeyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferHostKeyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferHostKeyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `hostKeyId`<sup>Required</sup> <a name="hostKeyId" id="@cdk_utils/iam.transfer.TransferHostKeyArnProps.property.hostKeyId"></a>

```typescript
public readonly hostKeyId: string;
```

- *Type:* string

The HostKeyId component of the ARN.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdk_utils/iam.transfer.TransferHostKeyArnProps.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The ServerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferHostKeyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferHostKeyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferHostKeyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransferProfileArnComponents <a name="TransferProfileArnComponents" id="@cdk_utils/iam.transfer.TransferProfileArnComponents"></a>

Parsed components of a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferProfileArnComponents.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferProfileArnComponents: transfer.TransferProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferProfileArnComponents.property.profileId">profileId</a></code> | <code>string</code> | The ProfileId component. |
| <code><a href="#@cdk_utils/iam.transfer.TransferProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdk_utils/iam.transfer.TransferProfileArnComponents.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ProfileId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TransferProfileArnProps <a name="TransferProfileArnProps" id="@cdk_utils/iam.transfer.TransferProfileArnProps"></a>

Properties for building a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferProfileArnProps.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferProfileArnProps: transfer.TransferProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferProfileArnProps.property.profileId">profileId</a></code> | <code>string</code> | The ProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdk_utils/iam.transfer.TransferProfileArnProps.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransferServerArnComponents <a name="TransferServerArnComponents" id="@cdk_utils/iam.transfer.TransferServerArnComponents"></a>

Parsed components of a server ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferServerArnComponents.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferServerArnComponents: transfer.TransferServerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferServerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferServerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferServerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transfer.TransferServerArnComponents.property.serverId">serverId</a></code> | <code>string</code> | The ServerId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferServerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferServerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferServerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdk_utils/iam.transfer.TransferServerArnComponents.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The ServerId component.

---

### TransferServerArnProps <a name="TransferServerArnProps" id="@cdk_utils/iam.transfer.TransferServerArnProps"></a>

Properties for building a server ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferServerArnProps.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferServerArnProps: transfer.TransferServerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferServerArnProps.property.serverId">serverId</a></code> | <code>string</code> | The ServerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferServerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferServerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferServerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdk_utils/iam.transfer.TransferServerArnProps.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The ServerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferServerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferServerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferServerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransferUserArnComponents <a name="TransferUserArnComponents" id="@cdk_utils/iam.transfer.TransferUserArnComponents"></a>

Parsed components of a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferUserArnComponents.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferUserArnComponents: transfer.TransferUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transfer.TransferUserArnComponents.property.serverId">serverId</a></code> | <code>string</code> | The ServerId component. |
| <code><a href="#@cdk_utils/iam.transfer.TransferUserArnComponents.property.userName">userName</a></code> | <code>string</code> | The UserName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdk_utils/iam.transfer.TransferUserArnComponents.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The ServerId component.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdk_utils/iam.transfer.TransferUserArnComponents.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

The UserName component.

---

### TransferUserArnProps <a name="TransferUserArnProps" id="@cdk_utils/iam.transfer.TransferUserArnProps"></a>

Properties for building a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferUserArnProps.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferUserArnProps: transfer.TransferUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferUserArnProps.property.serverId">serverId</a></code> | <code>string</code> | The ServerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferUserArnProps.property.userName">userName</a></code> | <code>string</code> | The UserName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdk_utils/iam.transfer.TransferUserArnProps.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The ServerId component of the ARN.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdk_utils/iam.transfer.TransferUserArnProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

The UserName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransferWebappArnComponents <a name="TransferWebappArnComponents" id="@cdk_utils/iam.transfer.TransferWebappArnComponents"></a>

Parsed components of a webapp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferWebappArnComponents.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferWebappArnComponents: transfer.TransferWebappArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferWebappArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWebappArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWebappArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWebappArnComponents.property.webAppId">webAppId</a></code> | <code>string</code> | The WebAppId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferWebappArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferWebappArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferWebappArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdk_utils/iam.transfer.TransferWebappArnComponents.property.webAppId"></a>

```typescript
public readonly webAppId: string;
```

- *Type:* string

The WebAppId component.

---

### TransferWebappArnProps <a name="TransferWebappArnProps" id="@cdk_utils/iam.transfer.TransferWebappArnProps"></a>

Properties for building a webapp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferWebappArnProps.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferWebappArnProps: transfer.TransferWebappArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferWebappArnProps.property.webAppId">webAppId</a></code> | <code>string</code> | The WebAppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWebappArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWebappArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWebappArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdk_utils/iam.transfer.TransferWebappArnProps.property.webAppId"></a>

```typescript
public readonly webAppId: string;
```

- *Type:* string

The WebAppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferWebappArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferWebappArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferWebappArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransferWorkflowArnComponents <a name="TransferWorkflowArnComponents" id="@cdk_utils/iam.transfer.TransferWorkflowArnComponents"></a>

Parsed components of a workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferWorkflowArnComponents.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferWorkflowArnComponents: transfer.TransferWorkflowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferWorkflowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWorkflowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWorkflowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWorkflowArnComponents.property.workflowId">workflowId</a></code> | <code>string</code> | The WorkflowId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferWorkflowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferWorkflowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferWorkflowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdk_utils/iam.transfer.TransferWorkflowArnComponents.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

The WorkflowId component.

---

### TransferWorkflowArnProps <a name="TransferWorkflowArnProps" id="@cdk_utils/iam.transfer.TransferWorkflowArnProps"></a>

Properties for building a workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transfer.TransferWorkflowArnProps.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

const transferWorkflowArnProps: transfer.TransferWorkflowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferWorkflowArnProps.property.workflowId">workflowId</a></code> | <code>string</code> | The WorkflowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWorkflowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWorkflowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transfer.TransferWorkflowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdk_utils/iam.transfer.TransferWorkflowArnProps.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

The WorkflowId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transfer.TransferWorkflowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transfer.TransferWorkflowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transfer.TransferWorkflowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TransferActions <a name="TransferActions" id="@cdk_utils/iam.transfer.TransferActions"></a>

IAM action constants for the transfer service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transfer.TransferActions.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

new transfer.TransferActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.CreateAccess">CreateAccess</a></code> | <code>string</code> | [Write] transfer:CreateAccess. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.CreateAgreement">CreateAgreement</a></code> | <code>string</code> | [Write] transfer:CreateAgreement. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.CreateConnector">CreateConnector</a></code> | <code>string</code> | [Write] transfer:CreateConnector. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.CreateProfile">CreateProfile</a></code> | <code>string</code> | [Write] transfer:CreateProfile. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.CreateServer">CreateServer</a></code> | <code>string</code> | [Write] transfer:CreateServer. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] transfer:CreateUser. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.CreateWebApp">CreateWebApp</a></code> | <code>string</code> | [Write] transfer:CreateWebApp. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string</code> | [Write] transfer:CreateWorkflow. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteAccess">DeleteAccess</a></code> | <code>string</code> | [Write] transfer:DeleteAccess. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteAgreement">DeleteAgreement</a></code> | <code>string</code> | [Write] transfer:DeleteAgreement. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteCertificate">DeleteCertificate</a></code> | <code>string</code> | [Write] transfer:DeleteCertificate. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteConnector">DeleteConnector</a></code> | <code>string</code> | [Write] transfer:DeleteConnector. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteHostKey">DeleteHostKey</a></code> | <code>string</code> | [Write] transfer:DeleteHostKey. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteProfile">DeleteProfile</a></code> | <code>string</code> | [Write] transfer:DeleteProfile. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteServer">DeleteServer</a></code> | <code>string</code> | [Write] transfer:DeleteServer. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteSshPublicKey">DeleteSshPublicKey</a></code> | <code>string</code> | [Write] transfer:DeleteSshPublicKey. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] transfer:DeleteUser. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteWebApp">DeleteWebApp</a></code> | <code>string</code> | [Write] transfer:DeleteWebApp. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteWebAppCustomization">DeleteWebAppCustomization</a></code> | <code>string</code> | [Write] transfer:DeleteWebAppCustomization. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string</code> | [Write] transfer:DeleteWorkflow. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeAccess">DescribeAccess</a></code> | <code>string</code> | [Read] transfer:DescribeAccess. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeAgreement">DescribeAgreement</a></code> | <code>string</code> | [Read] transfer:DescribeAgreement. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeCertificate">DescribeCertificate</a></code> | <code>string</code> | [Read] transfer:DescribeCertificate. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeConnector">DescribeConnector</a></code> | <code>string</code> | [Read] transfer:DescribeConnector. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeExecution">DescribeExecution</a></code> | <code>string</code> | [Read] transfer:DescribeExecution. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeHostKey">DescribeHostKey</a></code> | <code>string</code> | [Read] transfer:DescribeHostKey. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeProfile">DescribeProfile</a></code> | <code>string</code> | [Read] transfer:DescribeProfile. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeSecurityPolicy">DescribeSecurityPolicy</a></code> | <code>string</code> | [Read] transfer:DescribeSecurityPolicy. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeServer">DescribeServer</a></code> | <code>string</code> | [Read] transfer:DescribeServer. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeUser">DescribeUser</a></code> | <code>string</code> | [Read] transfer:DescribeUser. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeWebApp">DescribeWebApp</a></code> | <code>string</code> | [Read] transfer:DescribeWebApp. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeWebAppCustomization">DescribeWebAppCustomization</a></code> | <code>string</code> | [Read] transfer:DescribeWebAppCustomization. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.DescribeWorkflow">DescribeWorkflow</a></code> | <code>string</code> | [Read] transfer:DescribeWorkflow. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ImportCertificate">ImportCertificate</a></code> | <code>string</code> | [Write] transfer:ImportCertificate. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ImportHostKey">ImportHostKey</a></code> | <code>string</code> | [Write] transfer:ImportHostKey. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ImportSshPublicKey">ImportSshPublicKey</a></code> | <code>string</code> | [Write] transfer:ImportSshPublicKey. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListAccesses">ListAccesses</a></code> | <code>string</code> | [Read] transfer:ListAccesses. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListAgreements">ListAgreements</a></code> | <code>string</code> | [Read] transfer:ListAgreements. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListCertificates">ListCertificates</a></code> | <code>string</code> | [Read] transfer:ListCertificates. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListConnectors">ListConnectors</a></code> | <code>string</code> | [Read] transfer:ListConnectors. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListExecutions">ListExecutions</a></code> | <code>string</code> | [Read] transfer:ListExecutions. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListFileTransferResults">ListFileTransferResults</a></code> | <code>string</code> | [Read] transfer:ListFileTransferResults. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListHostKeys">ListHostKeys</a></code> | <code>string</code> | [Read] transfer:ListHostKeys. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListProfiles">ListProfiles</a></code> | <code>string</code> | [Read] transfer:ListProfiles. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListSecurityPolicies">ListSecurityPolicies</a></code> | <code>string</code> | [List] transfer:ListSecurityPolicies. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListServers">ListServers</a></code> | <code>string</code> | [List] transfer:ListServers. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] transfer:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] transfer:ListUsers. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListWebApps">ListWebApps</a></code> | <code>string</code> | [List] transfer:ListWebApps. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.ListWorkflows">ListWorkflows</a></code> | <code>string</code> | [List] transfer:ListWorkflows. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.SendWorkflowStepState">SendWorkflowStepState</a></code> | <code>string</code> | [Write] transfer:SendWorkflowStepState. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.StartDirectoryListing">StartDirectoryListing</a></code> | <code>string</code> | [Write] transfer:StartDirectoryListing. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.StartFileTransfer">StartFileTransfer</a></code> | <code>string</code> | [Write] transfer:StartFileTransfer. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.StartRemoteDelete">StartRemoteDelete</a></code> | <code>string</code> | [Write] transfer:StartRemoteDelete. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.StartRemoteMove">StartRemoteMove</a></code> | <code>string</code> | [Write] transfer:StartRemoteMove. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.StartServer">StartServer</a></code> | <code>string</code> | [Write] transfer:StartServer. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.StopServer">StopServer</a></code> | <code>string</code> | [Write] transfer:StopServer. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] transfer:TagResource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.TestConnection">TestConnection</a></code> | <code>string</code> | [Write] transfer:TestConnection. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.TestIdentityProvider">TestIdentityProvider</a></code> | <code>string</code> | [Read] transfer:TestIdentityProvider. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] transfer:UntagResource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UpdateAccess">UpdateAccess</a></code> | <code>string</code> | [Write] transfer:UpdateAccess. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UpdateAgreement">UpdateAgreement</a></code> | <code>string</code> | [Write] transfer:UpdateAgreement. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UpdateCertificate">UpdateCertificate</a></code> | <code>string</code> | [Write] transfer:UpdateCertificate. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UpdateConnector">UpdateConnector</a></code> | <code>string</code> | [Write] transfer:UpdateConnector. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UpdateHostKey">UpdateHostKey</a></code> | <code>string</code> | [Write] transfer:UpdateHostKey. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UpdateProfile">UpdateProfile</a></code> | <code>string</code> | [Write] transfer:UpdateProfile. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UpdateServer">UpdateServer</a></code> | <code>string</code> | [Write] transfer:UpdateServer. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] transfer:UpdateUser. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UpdateWebApp">UpdateWebApp</a></code> | <code>string</code> | [Write] transfer:UpdateWebApp. |
| <code><a href="#@cdk_utils/iam.transfer.TransferActions.property.UpdateWebAppCustomization">UpdateWebAppCustomization</a></code> | <code>string</code> | [Write] transfer:UpdateWebAppCustomization. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.transfer.TransferActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.transfer.TransferActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.transfer.TransferActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.transfer.TransferActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.transfer.TransferActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAccess`<sup>Required</sup> <a name="CreateAccess" id="@cdk_utils/iam.transfer.TransferActions.property.CreateAccess"></a>

```typescript
public readonly CreateAccess: string;
```

- *Type:* string

[Write] transfer:CreateAccess.

---

##### `CreateAgreement`<sup>Required</sup> <a name="CreateAgreement" id="@cdk_utils/iam.transfer.TransferActions.property.CreateAgreement"></a>

```typescript
public readonly CreateAgreement: string;
```

- *Type:* string

[Write] transfer:CreateAgreement.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.transfer.TransferActions.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string;
```

- *Type:* string

[Write] transfer:CreateConnector.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.transfer.TransferActions.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string;
```

- *Type:* string

[Write] transfer:CreateProfile.

---

##### `CreateServer`<sup>Required</sup> <a name="CreateServer" id="@cdk_utils/iam.transfer.TransferActions.property.CreateServer"></a>

```typescript
public readonly CreateServer: string;
```

- *Type:* string

[Write] transfer:CreateServer.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.transfer.TransferActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] transfer:CreateUser.

---

##### `CreateWebApp`<sup>Required</sup> <a name="CreateWebApp" id="@cdk_utils/iam.transfer.TransferActions.property.CreateWebApp"></a>

```typescript
public readonly CreateWebApp: string;
```

- *Type:* string

[Write] transfer:CreateWebApp.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.transfer.TransferActions.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string;
```

- *Type:* string

[Write] transfer:CreateWorkflow.

---

##### `DeleteAccess`<sup>Required</sup> <a name="DeleteAccess" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteAccess"></a>

```typescript
public readonly DeleteAccess: string;
```

- *Type:* string

[Write] transfer:DeleteAccess.

---

##### `DeleteAgreement`<sup>Required</sup> <a name="DeleteAgreement" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteAgreement"></a>

```typescript
public readonly DeleteAgreement: string;
```

- *Type:* string

[Write] transfer:DeleteAgreement.

---

##### `DeleteCertificate`<sup>Required</sup> <a name="DeleteCertificate" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteCertificate"></a>

```typescript
public readonly DeleteCertificate: string;
```

- *Type:* string

[Write] transfer:DeleteCertificate.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string;
```

- *Type:* string

[Write] transfer:DeleteConnector.

---

##### `DeleteHostKey`<sup>Required</sup> <a name="DeleteHostKey" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteHostKey"></a>

```typescript
public readonly DeleteHostKey: string;
```

- *Type:* string

[Write] transfer:DeleteHostKey.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string;
```

- *Type:* string

[Write] transfer:DeleteProfile.

---

##### `DeleteServer`<sup>Required</sup> <a name="DeleteServer" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteServer"></a>

```typescript
public readonly DeleteServer: string;
```

- *Type:* string

[Write] transfer:DeleteServer.

---

##### `DeleteSshPublicKey`<sup>Required</sup> <a name="DeleteSshPublicKey" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteSshPublicKey"></a>

```typescript
public readonly DeleteSshPublicKey: string;
```

- *Type:* string

[Write] transfer:DeleteSshPublicKey.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] transfer:DeleteUser.

---

##### `DeleteWebApp`<sup>Required</sup> <a name="DeleteWebApp" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteWebApp"></a>

```typescript
public readonly DeleteWebApp: string;
```

- *Type:* string

[Write] transfer:DeleteWebApp.

---

##### `DeleteWebAppCustomization`<sup>Required</sup> <a name="DeleteWebAppCustomization" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteWebAppCustomization"></a>

```typescript
public readonly DeleteWebAppCustomization: string;
```

- *Type:* string

[Write] transfer:DeleteWebAppCustomization.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.transfer.TransferActions.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string;
```

- *Type:* string

[Write] transfer:DeleteWorkflow.

---

##### `DescribeAccess`<sup>Required</sup> <a name="DescribeAccess" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeAccess"></a>

```typescript
public readonly DescribeAccess: string;
```

- *Type:* string

[Read] transfer:DescribeAccess.

---

##### `DescribeAgreement`<sup>Required</sup> <a name="DescribeAgreement" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeAgreement"></a>

```typescript
public readonly DescribeAgreement: string;
```

- *Type:* string

[Read] transfer:DescribeAgreement.

---

##### `DescribeCertificate`<sup>Required</sup> <a name="DescribeCertificate" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeCertificate"></a>

```typescript
public readonly DescribeCertificate: string;
```

- *Type:* string

[Read] transfer:DescribeCertificate.

---

##### `DescribeConnector`<sup>Required</sup> <a name="DescribeConnector" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeConnector"></a>

```typescript
public readonly DescribeConnector: string;
```

- *Type:* string

[Read] transfer:DescribeConnector.

---

##### `DescribeExecution`<sup>Required</sup> <a name="DescribeExecution" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeExecution"></a>

```typescript
public readonly DescribeExecution: string;
```

- *Type:* string

[Read] transfer:DescribeExecution.

---

##### `DescribeHostKey`<sup>Required</sup> <a name="DescribeHostKey" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeHostKey"></a>

```typescript
public readonly DescribeHostKey: string;
```

- *Type:* string

[Read] transfer:DescribeHostKey.

---

##### `DescribeProfile`<sup>Required</sup> <a name="DescribeProfile" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeProfile"></a>

```typescript
public readonly DescribeProfile: string;
```

- *Type:* string

[Read] transfer:DescribeProfile.

---

##### `DescribeSecurityPolicy`<sup>Required</sup> <a name="DescribeSecurityPolicy" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeSecurityPolicy"></a>

```typescript
public readonly DescribeSecurityPolicy: string;
```

- *Type:* string

[Read] transfer:DescribeSecurityPolicy.

---

##### `DescribeServer`<sup>Required</sup> <a name="DescribeServer" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeServer"></a>

```typescript
public readonly DescribeServer: string;
```

- *Type:* string

[Read] transfer:DescribeServer.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string;
```

- *Type:* string

[Read] transfer:DescribeUser.

---

##### `DescribeWebApp`<sup>Required</sup> <a name="DescribeWebApp" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeWebApp"></a>

```typescript
public readonly DescribeWebApp: string;
```

- *Type:* string

[Read] transfer:DescribeWebApp.

---

##### `DescribeWebAppCustomization`<sup>Required</sup> <a name="DescribeWebAppCustomization" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeWebAppCustomization"></a>

```typescript
public readonly DescribeWebAppCustomization: string;
```

- *Type:* string

[Read] transfer:DescribeWebAppCustomization.

---

##### `DescribeWorkflow`<sup>Required</sup> <a name="DescribeWorkflow" id="@cdk_utils/iam.transfer.TransferActions.property.DescribeWorkflow"></a>

```typescript
public readonly DescribeWorkflow: string;
```

- *Type:* string

[Read] transfer:DescribeWorkflow.

---

##### `ImportCertificate`<sup>Required</sup> <a name="ImportCertificate" id="@cdk_utils/iam.transfer.TransferActions.property.ImportCertificate"></a>

```typescript
public readonly ImportCertificate: string;
```

- *Type:* string

[Write] transfer:ImportCertificate.

---

##### `ImportHostKey`<sup>Required</sup> <a name="ImportHostKey" id="@cdk_utils/iam.transfer.TransferActions.property.ImportHostKey"></a>

```typescript
public readonly ImportHostKey: string;
```

- *Type:* string

[Write] transfer:ImportHostKey.

---

##### `ImportSshPublicKey`<sup>Required</sup> <a name="ImportSshPublicKey" id="@cdk_utils/iam.transfer.TransferActions.property.ImportSshPublicKey"></a>

```typescript
public readonly ImportSshPublicKey: string;
```

- *Type:* string

[Write] transfer:ImportSshPublicKey.

---

##### `ListAccesses`<sup>Required</sup> <a name="ListAccesses" id="@cdk_utils/iam.transfer.TransferActions.property.ListAccesses"></a>

```typescript
public readonly ListAccesses: string;
```

- *Type:* string

[Read] transfer:ListAccesses.

---

##### `ListAgreements`<sup>Required</sup> <a name="ListAgreements" id="@cdk_utils/iam.transfer.TransferActions.property.ListAgreements"></a>

```typescript
public readonly ListAgreements: string;
```

- *Type:* string

[Read] transfer:ListAgreements.

---

##### `ListCertificates`<sup>Required</sup> <a name="ListCertificates" id="@cdk_utils/iam.transfer.TransferActions.property.ListCertificates"></a>

```typescript
public readonly ListCertificates: string;
```

- *Type:* string

[Read] transfer:ListCertificates.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.transfer.TransferActions.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string;
```

- *Type:* string

[Read] transfer:ListConnectors.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.transfer.TransferActions.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string;
```

- *Type:* string

[Read] transfer:ListExecutions.

---

##### `ListFileTransferResults`<sup>Required</sup> <a name="ListFileTransferResults" id="@cdk_utils/iam.transfer.TransferActions.property.ListFileTransferResults"></a>

```typescript
public readonly ListFileTransferResults: string;
```

- *Type:* string

[Read] transfer:ListFileTransferResults.

---

##### `ListHostKeys`<sup>Required</sup> <a name="ListHostKeys" id="@cdk_utils/iam.transfer.TransferActions.property.ListHostKeys"></a>

```typescript
public readonly ListHostKeys: string;
```

- *Type:* string

[Read] transfer:ListHostKeys.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.transfer.TransferActions.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string;
```

- *Type:* string

[Read] transfer:ListProfiles.

---

##### `ListSecurityPolicies`<sup>Required</sup> <a name="ListSecurityPolicies" id="@cdk_utils/iam.transfer.TransferActions.property.ListSecurityPolicies"></a>

```typescript
public readonly ListSecurityPolicies: string;
```

- *Type:* string

[List] transfer:ListSecurityPolicies.

---

##### `ListServers`<sup>Required</sup> <a name="ListServers" id="@cdk_utils/iam.transfer.TransferActions.property.ListServers"></a>

```typescript
public readonly ListServers: string;
```

- *Type:* string

[List] transfer:ListServers.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.transfer.TransferActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] transfer:ListTagsForResource.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.transfer.TransferActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] transfer:ListUsers.

---

##### `ListWebApps`<sup>Required</sup> <a name="ListWebApps" id="@cdk_utils/iam.transfer.TransferActions.property.ListWebApps"></a>

```typescript
public readonly ListWebApps: string;
```

- *Type:* string

[List] transfer:ListWebApps.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.transfer.TransferActions.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string;
```

- *Type:* string

[List] transfer:ListWorkflows.

---

##### `SendWorkflowStepState`<sup>Required</sup> <a name="SendWorkflowStepState" id="@cdk_utils/iam.transfer.TransferActions.property.SendWorkflowStepState"></a>

```typescript
public readonly SendWorkflowStepState: string;
```

- *Type:* string

[Write] transfer:SendWorkflowStepState.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.transfer.TransferActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDirectoryListing`<sup>Required</sup> <a name="StartDirectoryListing" id="@cdk_utils/iam.transfer.TransferActions.property.StartDirectoryListing"></a>

```typescript
public readonly StartDirectoryListing: string;
```

- *Type:* string

[Write] transfer:StartDirectoryListing.

---

##### `StartFileTransfer`<sup>Required</sup> <a name="StartFileTransfer" id="@cdk_utils/iam.transfer.TransferActions.property.StartFileTransfer"></a>

```typescript
public readonly StartFileTransfer: string;
```

- *Type:* string

[Write] transfer:StartFileTransfer.

---

##### `StartRemoteDelete`<sup>Required</sup> <a name="StartRemoteDelete" id="@cdk_utils/iam.transfer.TransferActions.property.StartRemoteDelete"></a>

```typescript
public readonly StartRemoteDelete: string;
```

- *Type:* string

[Write] transfer:StartRemoteDelete.

---

##### `StartRemoteMove`<sup>Required</sup> <a name="StartRemoteMove" id="@cdk_utils/iam.transfer.TransferActions.property.StartRemoteMove"></a>

```typescript
public readonly StartRemoteMove: string;
```

- *Type:* string

[Write] transfer:StartRemoteMove.

---

##### `StartServer`<sup>Required</sup> <a name="StartServer" id="@cdk_utils/iam.transfer.TransferActions.property.StartServer"></a>

```typescript
public readonly StartServer: string;
```

- *Type:* string

[Write] transfer:StartServer.

---

##### `StopServer`<sup>Required</sup> <a name="StopServer" id="@cdk_utils/iam.transfer.TransferActions.property.StopServer"></a>

```typescript
public readonly StopServer: string;
```

- *Type:* string

[Write] transfer:StopServer.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.transfer.TransferActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] transfer:TagResource.

---

##### `TestConnection`<sup>Required</sup> <a name="TestConnection" id="@cdk_utils/iam.transfer.TransferActions.property.TestConnection"></a>

```typescript
public readonly TestConnection: string;
```

- *Type:* string

[Write] transfer:TestConnection.

---

##### `TestIdentityProvider`<sup>Required</sup> <a name="TestIdentityProvider" id="@cdk_utils/iam.transfer.TransferActions.property.TestIdentityProvider"></a>

```typescript
public readonly TestIdentityProvider: string;
```

- *Type:* string

[Read] transfer:TestIdentityProvider.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.transfer.TransferActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] transfer:UntagResource.

---

##### `UpdateAccess`<sup>Required</sup> <a name="UpdateAccess" id="@cdk_utils/iam.transfer.TransferActions.property.UpdateAccess"></a>

```typescript
public readonly UpdateAccess: string;
```

- *Type:* string

[Write] transfer:UpdateAccess.

---

##### `UpdateAgreement`<sup>Required</sup> <a name="UpdateAgreement" id="@cdk_utils/iam.transfer.TransferActions.property.UpdateAgreement"></a>

```typescript
public readonly UpdateAgreement: string;
```

- *Type:* string

[Write] transfer:UpdateAgreement.

---

##### `UpdateCertificate`<sup>Required</sup> <a name="UpdateCertificate" id="@cdk_utils/iam.transfer.TransferActions.property.UpdateCertificate"></a>

```typescript
public readonly UpdateCertificate: string;
```

- *Type:* string

[Write] transfer:UpdateCertificate.

---

##### `UpdateConnector`<sup>Required</sup> <a name="UpdateConnector" id="@cdk_utils/iam.transfer.TransferActions.property.UpdateConnector"></a>

```typescript
public readonly UpdateConnector: string;
```

- *Type:* string

[Write] transfer:UpdateConnector.

---

##### `UpdateHostKey`<sup>Required</sup> <a name="UpdateHostKey" id="@cdk_utils/iam.transfer.TransferActions.property.UpdateHostKey"></a>

```typescript
public readonly UpdateHostKey: string;
```

- *Type:* string

[Write] transfer:UpdateHostKey.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.transfer.TransferActions.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string;
```

- *Type:* string

[Write] transfer:UpdateProfile.

---

##### `UpdateServer`<sup>Required</sup> <a name="UpdateServer" id="@cdk_utils/iam.transfer.TransferActions.property.UpdateServer"></a>

```typescript
public readonly UpdateServer: string;
```

- *Type:* string

[Write] transfer:UpdateServer.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.transfer.TransferActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] transfer:UpdateUser.

---

##### `UpdateWebApp`<sup>Required</sup> <a name="UpdateWebApp" id="@cdk_utils/iam.transfer.TransferActions.property.UpdateWebApp"></a>

```typescript
public readonly UpdateWebApp: string;
```

- *Type:* string

[Write] transfer:UpdateWebApp.

---

##### `UpdateWebAppCustomization`<sup>Required</sup> <a name="UpdateWebAppCustomization" id="@cdk_utils/iam.transfer.TransferActions.property.UpdateWebAppCustomization"></a>

```typescript
public readonly UpdateWebAppCustomization: string;
```

- *Type:* string

[Write] transfer:UpdateWebAppCustomization.

---

### TransferConditions <a name="TransferConditions" id="@cdk_utils/iam.transfer.TransferConditions"></a>

Condition key constants and builders for transfer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transfer.TransferConditions.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

new transfer.TransferConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.requestConnectorProtocol">requestConnectorProtocol</a></code> | Generates a condition block for `transfer:RequestConnectorProtocol`. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.requestSecurityPolicyName">requestSecurityPolicyName</a></code> | Generates a condition block for `transfer:RequestSecurityPolicyName`. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.requestServerDomain">requestServerDomain</a></code> | Generates a condition block for `transfer:RequestServerDomain`. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.requestServerEndpointType">requestServerEndpointType</a></code> | Generates a condition block for `transfer:RequestServerEndpointType`. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.requestServerProtocols">requestServerProtocols</a></code> | Generates a condition block for `transfer:RequestServerProtocols`. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestConnectorProtocol` <a name="requestConnectorProtocol" id="@cdk_utils/iam.transfer.TransferConditions.requestConnectorProtocol"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferConditions.requestConnectorProtocol(value: string)
```

Generates a condition block for `transfer:RequestConnectorProtocol`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transfer.TransferConditions.requestConnectorProtocol.parameter.value"></a>

- *Type:* string

---

##### `requestSecurityPolicyName` <a name="requestSecurityPolicyName" id="@cdk_utils/iam.transfer.TransferConditions.requestSecurityPolicyName"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferConditions.requestSecurityPolicyName(value: string)
```

Generates a condition block for `transfer:RequestSecurityPolicyName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transfer.TransferConditions.requestSecurityPolicyName.parameter.value"></a>

- *Type:* string

---

##### `requestServerDomain` <a name="requestServerDomain" id="@cdk_utils/iam.transfer.TransferConditions.requestServerDomain"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferConditions.requestServerDomain(value: string)
```

Generates a condition block for `transfer:RequestServerDomain`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transfer.TransferConditions.requestServerDomain.parameter.value"></a>

- *Type:* string

---

##### `requestServerEndpointType` <a name="requestServerEndpointType" id="@cdk_utils/iam.transfer.TransferConditions.requestServerEndpointType"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferConditions.requestServerEndpointType(value: string)
```

Generates a condition block for `transfer:RequestServerEndpointType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transfer.TransferConditions.requestServerEndpointType.parameter.value"></a>

- *Type:* string

---

##### `requestServerProtocols` <a name="requestServerProtocols" id="@cdk_utils/iam.transfer.TransferConditions.requestServerProtocols"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferConditions.requestServerProtocols(values: string[])
```

Generates a condition block for `transfer:RequestServerProtocols`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.transfer.TransferConditions.requestServerProtocols.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.transfer.TransferConditions.requestTag"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transfer.TransferConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.transfer.TransferConditions.resourceTag"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transfer.TransferConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.transfer.TransferConditions.tagKeys"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.transfer.TransferConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.CreateAgreementConditionKeys">CreateAgreementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgreement action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.CreateConnectorConditionKeys">CreateConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnector action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.CreateProfileConditionKeys">CreateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProfile action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.CreateServerConditionKeys">CreateServerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServer action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.CreateUserConditionKeys">CreateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUser action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.CreateWebAppConditionKeys">CreateWebAppConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWebApp action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.CreateWorkflowConditionKeys">CreateWorkflowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkflow action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.ImportCertificateConditionKeys">ImportCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportCertificate action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.ImportHostKeyConditionKeys">ImportHostKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportHostKey action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.REQUEST_CONNECTOR_PROTOCOL">REQUEST_CONNECTOR_PROTOCOL</a></code> | <code>string</code> | Condition key: transfer:RequestConnectorProtocol (String). |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.REQUEST_SECURITY_POLICY_NAME">REQUEST_SECURITY_POLICY_NAME</a></code> | <code>string</code> | Condition key: transfer:RequestSecurityPolicyName (String). |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.REQUEST_SERVER_DOMAIN">REQUEST_SERVER_DOMAIN</a></code> | <code>string</code> | Condition key: transfer:RequestServerDomain (String). |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.REQUEST_SERVER_ENDPOINT_TYPE">REQUEST_SERVER_ENDPOINT_TYPE</a></code> | <code>string</code> | Condition key: transfer:RequestServerEndpointType (String). |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.REQUEST_SERVER_PROTOCOLS">REQUEST_SERVER_PROTOCOLS</a></code> | <code>string</code> | Condition key: transfer:RequestServerProtocols (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.UpdateConnectorConditionKeys">UpdateConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConnector action. |
| <code><a href="#@cdk_utils/iam.transfer.TransferConditions.property.UpdateServerConditionKeys">UpdateServerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateServer action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.transfer.TransferConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.transfer.TransferConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.transfer.TransferConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAgreementConditionKeys`<sup>Required</sup> <a name="CreateAgreementConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.CreateAgreementConditionKeys"></a>

```typescript
public readonly CreateAgreementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgreement action.

---

##### `CreateConnectorConditionKeys`<sup>Required</sup> <a name="CreateConnectorConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.CreateConnectorConditionKeys"></a>

```typescript
public readonly CreateConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnector action.

---

##### `CreateProfileConditionKeys`<sup>Required</sup> <a name="CreateProfileConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.CreateProfileConditionKeys"></a>

```typescript
public readonly CreateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProfile action.

---

##### `CreateServerConditionKeys`<sup>Required</sup> <a name="CreateServerConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.CreateServerConditionKeys"></a>

```typescript
public readonly CreateServerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServer action.

---

##### `CreateUserConditionKeys`<sup>Required</sup> <a name="CreateUserConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.CreateUserConditionKeys"></a>

```typescript
public readonly CreateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUser action.

---

##### `CreateWebAppConditionKeys`<sup>Required</sup> <a name="CreateWebAppConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.CreateWebAppConditionKeys"></a>

```typescript
public readonly CreateWebAppConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWebApp action.

---

##### `CreateWorkflowConditionKeys`<sup>Required</sup> <a name="CreateWorkflowConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.CreateWorkflowConditionKeys"></a>

```typescript
public readonly CreateWorkflowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkflow action.

---

##### `ImportCertificateConditionKeys`<sup>Required</sup> <a name="ImportCertificateConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.ImportCertificateConditionKeys"></a>

```typescript
public readonly ImportCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportCertificate action.

---

##### `ImportHostKeyConditionKeys`<sup>Required</sup> <a name="ImportHostKeyConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.ImportHostKeyConditionKeys"></a>

```typescript
public readonly ImportHostKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportHostKey action.

---

##### `REQUEST_CONNECTOR_PROTOCOL`<sup>Required</sup> <a name="REQUEST_CONNECTOR_PROTOCOL" id="@cdk_utils/iam.transfer.TransferConditions.property.REQUEST_CONNECTOR_PROTOCOL"></a>

```typescript
public readonly REQUEST_CONNECTOR_PROTOCOL: string;
```

- *Type:* string

Condition key: transfer:RequestConnectorProtocol (String).

---

##### `REQUEST_SECURITY_POLICY_NAME`<sup>Required</sup> <a name="REQUEST_SECURITY_POLICY_NAME" id="@cdk_utils/iam.transfer.TransferConditions.property.REQUEST_SECURITY_POLICY_NAME"></a>

```typescript
public readonly REQUEST_SECURITY_POLICY_NAME: string;
```

- *Type:* string

Condition key: transfer:RequestSecurityPolicyName (String).

---

##### `REQUEST_SERVER_DOMAIN`<sup>Required</sup> <a name="REQUEST_SERVER_DOMAIN" id="@cdk_utils/iam.transfer.TransferConditions.property.REQUEST_SERVER_DOMAIN"></a>

```typescript
public readonly REQUEST_SERVER_DOMAIN: string;
```

- *Type:* string

Condition key: transfer:RequestServerDomain (String).

---

##### `REQUEST_SERVER_ENDPOINT_TYPE`<sup>Required</sup> <a name="REQUEST_SERVER_ENDPOINT_TYPE" id="@cdk_utils/iam.transfer.TransferConditions.property.REQUEST_SERVER_ENDPOINT_TYPE"></a>

```typescript
public readonly REQUEST_SERVER_ENDPOINT_TYPE: string;
```

- *Type:* string

Condition key: transfer:RequestServerEndpointType (String).

---

##### `REQUEST_SERVER_PROTOCOLS`<sup>Required</sup> <a name="REQUEST_SERVER_PROTOCOLS" id="@cdk_utils/iam.transfer.TransferConditions.property.REQUEST_SERVER_PROTOCOLS"></a>

```typescript
public readonly REQUEST_SERVER_PROTOCOLS: string;
```

- *Type:* string

Condition key: transfer:RequestServerProtocols (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateConnectorConditionKeys`<sup>Required</sup> <a name="UpdateConnectorConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.UpdateConnectorConditionKeys"></a>

```typescript
public readonly UpdateConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConnector action.

---

##### `UpdateServerConditionKeys`<sup>Required</sup> <a name="UpdateServerConditionKeys" id="@cdk_utils/iam.transfer.TransferConditions.property.UpdateServerConditionKeys"></a>

```typescript
public readonly UpdateServerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateServer action.

---

### TransferOperations <a name="TransferOperations" id="@cdk_utils/iam.transfer.TransferOperations"></a>

API operation to required IAM actions mapping for transfer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transfer.TransferOperations.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

new transfer.TransferOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.CreateAccess">CreateAccess</a></code> | <code>string[]</code> | IAM actions required for the CreateAccess API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.CreateAgreement">CreateAgreement</a></code> | <code>string[]</code> | IAM actions required for the CreateAgreement API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.CreateConnector">CreateConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateConnector API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.CreateProfile">CreateProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateProfile API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.CreateServer">CreateServer</a></code> | <code>string[]</code> | IAM actions required for the CreateServer API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.CreateWebApp">CreateWebApp</a></code> | <code>string[]</code> | IAM actions required for the CreateWebApp API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflow API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteAccess">DeleteAccess</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccess API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteAgreement">DeleteAgreement</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgreement API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteCertificate">DeleteCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteCertificate API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteConnector">DeleteConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnector API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteHostKey">DeleteHostKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteHostKey API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteProfile">DeleteProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfile API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteServer">DeleteServer</a></code> | <code>string[]</code> | IAM actions required for the DeleteServer API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteSshPublicKey">DeleteSshPublicKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteSshPublicKey API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteWebApp">DeleteWebApp</a></code> | <code>string[]</code> | IAM actions required for the DeleteWebApp API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteWebAppCustomization">DeleteWebAppCustomization</a></code> | <code>string[]</code> | IAM actions required for the DeleteWebAppCustomization API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflow API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeAccess">DescribeAccess</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccess API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeAgreement">DescribeAgreement</a></code> | <code>string[]</code> | IAM actions required for the DescribeAgreement API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeCertificate">DescribeCertificate</a></code> | <code>string[]</code> | IAM actions required for the DescribeCertificate API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeConnector">DescribeConnector</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnector API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeExecution">DescribeExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeExecution API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeHostKey">DescribeHostKey</a></code> | <code>string[]</code> | IAM actions required for the DescribeHostKey API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeProfile">DescribeProfile</a></code> | <code>string[]</code> | IAM actions required for the DescribeProfile API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeSecurityPolicy">DescribeSecurityPolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeSecurityPolicy API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeServer">DescribeServer</a></code> | <code>string[]</code> | IAM actions required for the DescribeServer API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeUser">DescribeUser</a></code> | <code>string[]</code> | IAM actions required for the DescribeUser API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeWebApp">DescribeWebApp</a></code> | <code>string[]</code> | IAM actions required for the DescribeWebApp API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeWebAppCustomization">DescribeWebAppCustomization</a></code> | <code>string[]</code> | IAM actions required for the DescribeWebAppCustomization API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.DescribeWorkflow">DescribeWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkflow API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ImportCertificate">ImportCertificate</a></code> | <code>string[]</code> | IAM actions required for the ImportCertificate API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ImportHostKey">ImportHostKey</a></code> | <code>string[]</code> | IAM actions required for the ImportHostKey API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ImportSshPublicKey">ImportSshPublicKey</a></code> | <code>string[]</code> | IAM actions required for the ImportSshPublicKey API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListAccesses">ListAccesses</a></code> | <code>string[]</code> | IAM actions required for the ListAccesses API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListAgreements">ListAgreements</a></code> | <code>string[]</code> | IAM actions required for the ListAgreements API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListCertificates">ListCertificates</a></code> | <code>string[]</code> | IAM actions required for the ListCertificates API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListConnectors">ListConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListConnectors API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListExecutions">ListExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListExecutions API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListFileTransferResults">ListFileTransferResults</a></code> | <code>string[]</code> | IAM actions required for the ListFileTransferResults API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListHostKeys">ListHostKeys</a></code> | <code>string[]</code> | IAM actions required for the ListHostKeys API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListProfiles">ListProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListProfiles API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListSecurityPolicies">ListSecurityPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityPolicies API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListServers">ListServers</a></code> | <code>string[]</code> | IAM actions required for the ListServers API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListWebApps">ListWebApps</a></code> | <code>string[]</code> | IAM actions required for the ListWebApps API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.ListWorkflows">ListWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflows API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.SendWorkflowStepState">SendWorkflowStepState</a></code> | <code>string[]</code> | IAM actions required for the SendWorkflowStepState API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.StartDirectoryListing">StartDirectoryListing</a></code> | <code>string[]</code> | IAM actions required for the StartDirectoryListing API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.StartFileTransfer">StartFileTransfer</a></code> | <code>string[]</code> | IAM actions required for the StartFileTransfer API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.StartRemoteDelete">StartRemoteDelete</a></code> | <code>string[]</code> | IAM actions required for the StartRemoteDelete API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.StartRemoteMove">StartRemoteMove</a></code> | <code>string[]</code> | IAM actions required for the StartRemoteMove API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.StartServer">StartServer</a></code> | <code>string[]</code> | IAM actions required for the StartServer API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.StopServer">StopServer</a></code> | <code>string[]</code> | IAM actions required for the StopServer API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.TestConnection">TestConnection</a></code> | <code>string[]</code> | IAM actions required for the TestConnection API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.TestIdentityProvider">TestIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the TestIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UpdateAccess">UpdateAccess</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccess API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UpdateAgreement">UpdateAgreement</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgreement API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UpdateCertificate">UpdateCertificate</a></code> | <code>string[]</code> | IAM actions required for the UpdateCertificate API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UpdateConnector">UpdateConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnector API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UpdateHostKey">UpdateHostKey</a></code> | <code>string[]</code> | IAM actions required for the UpdateHostKey API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UpdateProfile">UpdateProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateProfile API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UpdateServer">UpdateServer</a></code> | <code>string[]</code> | IAM actions required for the UpdateServer API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UpdateWebApp">UpdateWebApp</a></code> | <code>string[]</code> | IAM actions required for the UpdateWebApp API call. |
| <code><a href="#@cdk_utils/iam.transfer.TransferOperations.property.UpdateWebAppCustomization">UpdateWebAppCustomization</a></code> | <code>string[]</code> | IAM actions required for the UpdateWebAppCustomization API call. |

---

##### `CreateAccess`<sup>Required</sup> <a name="CreateAccess" id="@cdk_utils/iam.transfer.TransferOperations.property.CreateAccess"></a>

```typescript
public readonly CreateAccess: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccess API call.

---

##### `CreateAgreement`<sup>Required</sup> <a name="CreateAgreement" id="@cdk_utils/iam.transfer.TransferOperations.property.CreateAgreement"></a>

```typescript
public readonly CreateAgreement: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgreement API call.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.transfer.TransferOperations.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnector API call.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.transfer.TransferOperations.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateProfile API call.

---

##### `CreateServer`<sup>Required</sup> <a name="CreateServer" id="@cdk_utils/iam.transfer.TransferOperations.property.CreateServer"></a>

```typescript
public readonly CreateServer: string[];
```

- *Type:* string[]

IAM actions required for the CreateServer API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.transfer.TransferOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `CreateWebApp`<sup>Required</sup> <a name="CreateWebApp" id="@cdk_utils/iam.transfer.TransferOperations.property.CreateWebApp"></a>

```typescript
public readonly CreateWebApp: string[];
```

- *Type:* string[]

IAM actions required for the CreateWebApp API call.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.transfer.TransferOperations.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflow API call.

---

##### `DeleteAccess`<sup>Required</sup> <a name="DeleteAccess" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteAccess"></a>

```typescript
public readonly DeleteAccess: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccess API call.

---

##### `DeleteAgreement`<sup>Required</sup> <a name="DeleteAgreement" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteAgreement"></a>

```typescript
public readonly DeleteAgreement: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgreement API call.

---

##### `DeleteCertificate`<sup>Required</sup> <a name="DeleteCertificate" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteCertificate"></a>

```typescript
public readonly DeleteCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCertificate API call.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnector API call.

---

##### `DeleteHostKey`<sup>Required</sup> <a name="DeleteHostKey" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteHostKey"></a>

```typescript
public readonly DeleteHostKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHostKey API call.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfile API call.

---

##### `DeleteServer`<sup>Required</sup> <a name="DeleteServer" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteServer"></a>

```typescript
public readonly DeleteServer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServer API call.

---

##### `DeleteSshPublicKey`<sup>Required</sup> <a name="DeleteSshPublicKey" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteSshPublicKey"></a>

```typescript
public readonly DeleteSshPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSshPublicKey API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DeleteWebApp`<sup>Required</sup> <a name="DeleteWebApp" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteWebApp"></a>

```typescript
public readonly DeleteWebApp: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWebApp API call.

---

##### `DeleteWebAppCustomization`<sup>Required</sup> <a name="DeleteWebAppCustomization" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteWebAppCustomization"></a>

```typescript
public readonly DeleteWebAppCustomization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWebAppCustomization API call.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.transfer.TransferOperations.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflow API call.

---

##### `DescribeAccess`<sup>Required</sup> <a name="DescribeAccess" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeAccess"></a>

```typescript
public readonly DescribeAccess: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccess API call.

---

##### `DescribeAgreement`<sup>Required</sup> <a name="DescribeAgreement" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeAgreement"></a>

```typescript
public readonly DescribeAgreement: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAgreement API call.

---

##### `DescribeCertificate`<sup>Required</sup> <a name="DescribeCertificate" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeCertificate"></a>

```typescript
public readonly DescribeCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCertificate API call.

---

##### `DescribeConnector`<sup>Required</sup> <a name="DescribeConnector" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeConnector"></a>

```typescript
public readonly DescribeConnector: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnector API call.

---

##### `DescribeExecution`<sup>Required</sup> <a name="DescribeExecution" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeExecution"></a>

```typescript
public readonly DescribeExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExecution API call.

---

##### `DescribeHostKey`<sup>Required</sup> <a name="DescribeHostKey" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeHostKey"></a>

```typescript
public readonly DescribeHostKey: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHostKey API call.

---

##### `DescribeProfile`<sup>Required</sup> <a name="DescribeProfile" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeProfile"></a>

```typescript
public readonly DescribeProfile: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProfile API call.

---

##### `DescribeSecurityPolicy`<sup>Required</sup> <a name="DescribeSecurityPolicy" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeSecurityPolicy"></a>

```typescript
public readonly DescribeSecurityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSecurityPolicy API call.

---

##### `DescribeServer`<sup>Required</sup> <a name="DescribeServer" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeServer"></a>

```typescript
public readonly DescribeServer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServer API call.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUser API call.

---

##### `DescribeWebApp`<sup>Required</sup> <a name="DescribeWebApp" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeWebApp"></a>

```typescript
public readonly DescribeWebApp: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWebApp API call.

---

##### `DescribeWebAppCustomization`<sup>Required</sup> <a name="DescribeWebAppCustomization" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeWebAppCustomization"></a>

```typescript
public readonly DescribeWebAppCustomization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWebAppCustomization API call.

---

##### `DescribeWorkflow`<sup>Required</sup> <a name="DescribeWorkflow" id="@cdk_utils/iam.transfer.TransferOperations.property.DescribeWorkflow"></a>

```typescript
public readonly DescribeWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkflow API call.

---

##### `ImportCertificate`<sup>Required</sup> <a name="ImportCertificate" id="@cdk_utils/iam.transfer.TransferOperations.property.ImportCertificate"></a>

```typescript
public readonly ImportCertificate: string[];
```

- *Type:* string[]

IAM actions required for the ImportCertificate API call.

---

##### `ImportHostKey`<sup>Required</sup> <a name="ImportHostKey" id="@cdk_utils/iam.transfer.TransferOperations.property.ImportHostKey"></a>

```typescript
public readonly ImportHostKey: string[];
```

- *Type:* string[]

IAM actions required for the ImportHostKey API call.

---

##### `ImportSshPublicKey`<sup>Required</sup> <a name="ImportSshPublicKey" id="@cdk_utils/iam.transfer.TransferOperations.property.ImportSshPublicKey"></a>

```typescript
public readonly ImportSshPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the ImportSshPublicKey API call.

---

##### `ListAccesses`<sup>Required</sup> <a name="ListAccesses" id="@cdk_utils/iam.transfer.TransferOperations.property.ListAccesses"></a>

```typescript
public readonly ListAccesses: string[];
```

- *Type:* string[]

IAM actions required for the ListAccesses API call.

---

##### `ListAgreements`<sup>Required</sup> <a name="ListAgreements" id="@cdk_utils/iam.transfer.TransferOperations.property.ListAgreements"></a>

```typescript
public readonly ListAgreements: string[];
```

- *Type:* string[]

IAM actions required for the ListAgreements API call.

---

##### `ListCertificates`<sup>Required</sup> <a name="ListCertificates" id="@cdk_utils/iam.transfer.TransferOperations.property.ListCertificates"></a>

```typescript
public readonly ListCertificates: string[];
```

- *Type:* string[]

IAM actions required for the ListCertificates API call.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.transfer.TransferOperations.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectors API call.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.transfer.TransferOperations.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListExecutions API call.

---

##### `ListFileTransferResults`<sup>Required</sup> <a name="ListFileTransferResults" id="@cdk_utils/iam.transfer.TransferOperations.property.ListFileTransferResults"></a>

```typescript
public readonly ListFileTransferResults: string[];
```

- *Type:* string[]

IAM actions required for the ListFileTransferResults API call.

---

##### `ListHostKeys`<sup>Required</sup> <a name="ListHostKeys" id="@cdk_utils/iam.transfer.TransferOperations.property.ListHostKeys"></a>

```typescript
public readonly ListHostKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListHostKeys API call.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.transfer.TransferOperations.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListProfiles API call.

---

##### `ListSecurityPolicies`<sup>Required</sup> <a name="ListSecurityPolicies" id="@cdk_utils/iam.transfer.TransferOperations.property.ListSecurityPolicies"></a>

```typescript
public readonly ListSecurityPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityPolicies API call.

---

##### `ListServers`<sup>Required</sup> <a name="ListServers" id="@cdk_utils/iam.transfer.TransferOperations.property.ListServers"></a>

```typescript
public readonly ListServers: string[];
```

- *Type:* string[]

IAM actions required for the ListServers API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.transfer.TransferOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.transfer.TransferOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `ListWebApps`<sup>Required</sup> <a name="ListWebApps" id="@cdk_utils/iam.transfer.TransferOperations.property.ListWebApps"></a>

```typescript
public readonly ListWebApps: string[];
```

- *Type:* string[]

IAM actions required for the ListWebApps API call.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.transfer.TransferOperations.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflows API call.

---

##### `SendWorkflowStepState`<sup>Required</sup> <a name="SendWorkflowStepState" id="@cdk_utils/iam.transfer.TransferOperations.property.SendWorkflowStepState"></a>

```typescript
public readonly SendWorkflowStepState: string[];
```

- *Type:* string[]

IAM actions required for the SendWorkflowStepState API call.

---

##### `StartDirectoryListing`<sup>Required</sup> <a name="StartDirectoryListing" id="@cdk_utils/iam.transfer.TransferOperations.property.StartDirectoryListing"></a>

```typescript
public readonly StartDirectoryListing: string[];
```

- *Type:* string[]

IAM actions required for the StartDirectoryListing API call.

---

##### `StartFileTransfer`<sup>Required</sup> <a name="StartFileTransfer" id="@cdk_utils/iam.transfer.TransferOperations.property.StartFileTransfer"></a>

```typescript
public readonly StartFileTransfer: string[];
```

- *Type:* string[]

IAM actions required for the StartFileTransfer API call.

---

##### `StartRemoteDelete`<sup>Required</sup> <a name="StartRemoteDelete" id="@cdk_utils/iam.transfer.TransferOperations.property.StartRemoteDelete"></a>

```typescript
public readonly StartRemoteDelete: string[];
```

- *Type:* string[]

IAM actions required for the StartRemoteDelete API call.

---

##### `StartRemoteMove`<sup>Required</sup> <a name="StartRemoteMove" id="@cdk_utils/iam.transfer.TransferOperations.property.StartRemoteMove"></a>

```typescript
public readonly StartRemoteMove: string[];
```

- *Type:* string[]

IAM actions required for the StartRemoteMove API call.

---

##### `StartServer`<sup>Required</sup> <a name="StartServer" id="@cdk_utils/iam.transfer.TransferOperations.property.StartServer"></a>

```typescript
public readonly StartServer: string[];
```

- *Type:* string[]

IAM actions required for the StartServer API call.

---

##### `StopServer`<sup>Required</sup> <a name="StopServer" id="@cdk_utils/iam.transfer.TransferOperations.property.StopServer"></a>

```typescript
public readonly StopServer: string[];
```

- *Type:* string[]

IAM actions required for the StopServer API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.transfer.TransferOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestConnection`<sup>Required</sup> <a name="TestConnection" id="@cdk_utils/iam.transfer.TransferOperations.property.TestConnection"></a>

```typescript
public readonly TestConnection: string[];
```

- *Type:* string[]

IAM actions required for the TestConnection API call.

---

##### `TestIdentityProvider`<sup>Required</sup> <a name="TestIdentityProvider" id="@cdk_utils/iam.transfer.TransferOperations.property.TestIdentityProvider"></a>

```typescript
public readonly TestIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the TestIdentityProvider API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.transfer.TransferOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccess`<sup>Required</sup> <a name="UpdateAccess" id="@cdk_utils/iam.transfer.TransferOperations.property.UpdateAccess"></a>

```typescript
public readonly UpdateAccess: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccess API call.

---

##### `UpdateAgreement`<sup>Required</sup> <a name="UpdateAgreement" id="@cdk_utils/iam.transfer.TransferOperations.property.UpdateAgreement"></a>

```typescript
public readonly UpdateAgreement: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgreement API call.

---

##### `UpdateCertificate`<sup>Required</sup> <a name="UpdateCertificate" id="@cdk_utils/iam.transfer.TransferOperations.property.UpdateCertificate"></a>

```typescript
public readonly UpdateCertificate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCertificate API call.

---

##### `UpdateConnector`<sup>Required</sup> <a name="UpdateConnector" id="@cdk_utils/iam.transfer.TransferOperations.property.UpdateConnector"></a>

```typescript
public readonly UpdateConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnector API call.

---

##### `UpdateHostKey`<sup>Required</sup> <a name="UpdateHostKey" id="@cdk_utils/iam.transfer.TransferOperations.property.UpdateHostKey"></a>

```typescript
public readonly UpdateHostKey: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHostKey API call.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.transfer.TransferOperations.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProfile API call.

---

##### `UpdateServer`<sup>Required</sup> <a name="UpdateServer" id="@cdk_utils/iam.transfer.TransferOperations.property.UpdateServer"></a>

```typescript
public readonly UpdateServer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServer API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.transfer.TransferOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

##### `UpdateWebApp`<sup>Required</sup> <a name="UpdateWebApp" id="@cdk_utils/iam.transfer.TransferOperations.property.UpdateWebApp"></a>

```typescript
public readonly UpdateWebApp: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWebApp API call.

---

##### `UpdateWebAppCustomization`<sup>Required</sup> <a name="UpdateWebAppCustomization" id="@cdk_utils/iam.transfer.TransferOperations.property.UpdateWebAppCustomization"></a>

```typescript
public readonly UpdateWebAppCustomization: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWebAppCustomization API call.

---

### TransferResources <a name="TransferResources" id="@cdk_utils/iam.transfer.TransferResources"></a>

ARN builders, validators, and parsers for transfer resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transfer.TransferResources.Initializer"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

new transfer.TransferResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.agreement">agreement</a></code> | Builds an ARN for the agreement resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.certificate">certificate</a></code> | Builds an ARN for the certificate resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.connector">connector</a></code> | Builds an ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.hostKey">hostKey</a></code> | Builds an ARN for the host-key resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.isValidAgreementArn">isValidAgreementArn</a></code> | Validates whether a string is a valid ARN for the agreement resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.isValidCertificateArn">isValidCertificateArn</a></code> | Validates whether a string is a valid ARN for the certificate resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.isValidConnectorArn">isValidConnectorArn</a></code> | Validates whether a string is a valid ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.isValidHostKeyArn">isValidHostKeyArn</a></code> | Validates whether a string is a valid ARN for the host-key resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.isValidProfileArn">isValidProfileArn</a></code> | Validates whether a string is a valid ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.isValidServerArn">isValidServerArn</a></code> | Validates whether a string is a valid ARN for the server resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.isValidWebappArn">isValidWebappArn</a></code> | Validates whether a string is a valid ARN for the webapp resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.isValidWorkflowArn">isValidWorkflowArn</a></code> | Validates whether a string is a valid ARN for the workflow resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.parseAgreementArn">parseAgreementArn</a></code> | Parses a agreement ARN into its components. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.parseCertificateArn">parseCertificateArn</a></code> | Parses a certificate ARN into its components. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.parseConnectorArn">parseConnectorArn</a></code> | Parses a connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.parseHostKeyArn">parseHostKeyArn</a></code> | Parses a host-key ARN into its components. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.parseProfileArn">parseProfileArn</a></code> | Parses a profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.parseServerArn">parseServerArn</a></code> | Parses a server ARN into its components. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.parseUserArn">parseUserArn</a></code> | Parses a user ARN into its components. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.parseWebappArn">parseWebappArn</a></code> | Parses a webapp ARN into its components. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.parseWorkflowArn">parseWorkflowArn</a></code> | Parses a workflow ARN into its components. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.profile">profile</a></code> | Builds an ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.server">server</a></code> | Builds an ARN for the server resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.user">user</a></code> | Builds an ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.webapp">webapp</a></code> | Builds an ARN for the webapp resource. |
| <code><a href="#@cdk_utils/iam.transfer.TransferResources.workflow">workflow</a></code> | Builds an ARN for the workflow resource. |

---

##### `agreement` <a name="agreement" id="@cdk_utils/iam.transfer.TransferResources.agreement"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.agreement(props: TransferAgreementArnProps)
```

Builds an ARN for the agreement resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transfer.TransferResources.agreement.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transfer.TransferAgreementArnProps">TransferAgreementArnProps</a>

---

##### `certificate` <a name="certificate" id="@cdk_utils/iam.transfer.TransferResources.certificate"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.certificate(props: TransferCertificateArnProps)
```

Builds an ARN for the certificate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transfer.TransferResources.certificate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transfer.TransferCertificateArnProps">TransferCertificateArnProps</a>

---

##### `connector` <a name="connector" id="@cdk_utils/iam.transfer.TransferResources.connector"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.connector(props: TransferConnectorArnProps)
```

Builds an ARN for the connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transfer.TransferResources.connector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transfer.TransferConnectorArnProps">TransferConnectorArnProps</a>

---

##### `hostKey` <a name="hostKey" id="@cdk_utils/iam.transfer.TransferResources.hostKey"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.hostKey(props: TransferHostKeyArnProps)
```

Builds an ARN for the host-key resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transfer.TransferResources.hostKey.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transfer.TransferHostKeyArnProps">TransferHostKeyArnProps</a>

---

##### `isValidAgreementArn` <a name="isValidAgreementArn" id="@cdk_utils/iam.transfer.TransferResources.isValidAgreementArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.isValidAgreementArn(arn: string)
```

Validates whether a string is a valid ARN for the agreement resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.isValidAgreementArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCertificateArn` <a name="isValidCertificateArn" id="@cdk_utils/iam.transfer.TransferResources.isValidCertificateArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.isValidCertificateArn(arn: string)
```

Validates whether a string is a valid ARN for the certificate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.isValidCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorArn` <a name="isValidConnectorArn" id="@cdk_utils/iam.transfer.TransferResources.isValidConnectorArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.isValidConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.isValidConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHostKeyArn` <a name="isValidHostKeyArn" id="@cdk_utils/iam.transfer.TransferResources.isValidHostKeyArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.isValidHostKeyArn(arn: string)
```

Validates whether a string is a valid ARN for the host-key resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.isValidHostKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProfileArn` <a name="isValidProfileArn" id="@cdk_utils/iam.transfer.TransferResources.isValidProfileArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.isValidProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.isValidProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServerArn` <a name="isValidServerArn" id="@cdk_utils/iam.transfer.TransferResources.isValidServerArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.isValidServerArn(arn: string)
```

Validates whether a string is a valid ARN for the server resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.isValidServerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.transfer.TransferResources.isValidUserArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWebappArn` <a name="isValidWebappArn" id="@cdk_utils/iam.transfer.TransferResources.isValidWebappArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.isValidWebappArn(arn: string)
```

Validates whether a string is a valid ARN for the webapp resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.isValidWebappArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkflowArn` <a name="isValidWorkflowArn" id="@cdk_utils/iam.transfer.TransferResources.isValidWorkflowArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.isValidWorkflowArn(arn: string)
```

Validates whether a string is a valid ARN for the workflow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.isValidWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAgreementArn` <a name="parseAgreementArn" id="@cdk_utils/iam.transfer.TransferResources.parseAgreementArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.parseAgreementArn(arn: string)
```

Parses a agreement ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.parseAgreementArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCertificateArn` <a name="parseCertificateArn" id="@cdk_utils/iam.transfer.TransferResources.parseCertificateArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.parseCertificateArn(arn: string)
```

Parses a certificate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.parseCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorArn` <a name="parseConnectorArn" id="@cdk_utils/iam.transfer.TransferResources.parseConnectorArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.parseConnectorArn(arn: string)
```

Parses a connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.parseConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHostKeyArn` <a name="parseHostKeyArn" id="@cdk_utils/iam.transfer.TransferResources.parseHostKeyArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.parseHostKeyArn(arn: string)
```

Parses a host-key ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.parseHostKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProfileArn` <a name="parseProfileArn" id="@cdk_utils/iam.transfer.TransferResources.parseProfileArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.parseProfileArn(arn: string)
```

Parses a profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.parseProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServerArn` <a name="parseServerArn" id="@cdk_utils/iam.transfer.TransferResources.parseServerArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.parseServerArn(arn: string)
```

Parses a server ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.parseServerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.transfer.TransferResources.parseUserArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.parseUserArn(arn: string)
```

Parses a user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWebappArn` <a name="parseWebappArn" id="@cdk_utils/iam.transfer.TransferResources.parseWebappArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.parseWebappArn(arn: string)
```

Parses a webapp ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.parseWebappArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowArn` <a name="parseWorkflowArn" id="@cdk_utils/iam.transfer.TransferResources.parseWorkflowArn"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.parseWorkflowArn(arn: string)
```

Parses a workflow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transfer.TransferResources.parseWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `profile` <a name="profile" id="@cdk_utils/iam.transfer.TransferResources.profile"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.profile(props: TransferProfileArnProps)
```

Builds an ARN for the profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transfer.TransferResources.profile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transfer.TransferProfileArnProps">TransferProfileArnProps</a>

---

##### `server` <a name="server" id="@cdk_utils/iam.transfer.TransferResources.server"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.server(props: TransferServerArnProps)
```

Builds an ARN for the server resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transfer.TransferResources.server.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transfer.TransferServerArnProps">TransferServerArnProps</a>

---

##### `user` <a name="user" id="@cdk_utils/iam.transfer.TransferResources.user"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.user(props: TransferUserArnProps)
```

Builds an ARN for the user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transfer.TransferResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transfer.TransferUserArnProps">TransferUserArnProps</a>

---

##### `webapp` <a name="webapp" id="@cdk_utils/iam.transfer.TransferResources.webapp"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.webapp(props: TransferWebappArnProps)
```

Builds an ARN for the webapp resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transfer.TransferResources.webapp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transfer.TransferWebappArnProps">TransferWebappArnProps</a>

---

##### `workflow` <a name="workflow" id="@cdk_utils/iam.transfer.TransferResources.workflow"></a>

```typescript
import { transfer } from '@cdk_utils/iam'

transfer.TransferResources.workflow(props: TransferWorkflowArnProps)
```

Builds an ARN for the workflow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transfer.TransferResources.workflow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transfer.TransferWorkflowArnProps">TransferWorkflowArnProps</a>

---




