# `acm` Submodule <a name="`acm` Submodule" id="@cdk_utils/iam.acm"></a>


## Structs <a name="Structs" id="Structs"></a>

### ACMAcmeDomainValidationArnComponents <a name="ACMAcmeDomainValidationArnComponents" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents"></a>

Parsed components of a acme-domain-validation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

const aCMAcmeDomainValidationArnComponents: acm.ACMAcmeDomainValidationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.property.acmeDomainValidationId">acmeDomainValidationId</a></code> | <code>string</code> | The AcmeDomainValidationId component. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.property.acmeEndpointId">acmeEndpointId</a></code> | <code>string</code> | The AcmeEndpointId component. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `acmeDomainValidationId`<sup>Required</sup> <a name="acmeDomainValidationId" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.property.acmeDomainValidationId"></a>

```typescript
public readonly acmeDomainValidationId: string;
```

- *Type:* string

The AcmeDomainValidationId component.

---

##### `acmeEndpointId`<sup>Required</sup> <a name="acmeEndpointId" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.property.acmeEndpointId"></a>

```typescript
public readonly acmeEndpointId: string;
```

- *Type:* string

The AcmeEndpointId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ACMAcmeDomainValidationArnProps <a name="ACMAcmeDomainValidationArnProps" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps"></a>

Properties for building a acme-domain-validation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

const aCMAcmeDomainValidationArnProps: acm.ACMAcmeDomainValidationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.property.acmeDomainValidationId">acmeDomainValidationId</a></code> | <code>string</code> | The AcmeDomainValidationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.property.acmeEndpointId">acmeEndpointId</a></code> | <code>string</code> | The AcmeEndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `acmeDomainValidationId`<sup>Required</sup> <a name="acmeDomainValidationId" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.property.acmeDomainValidationId"></a>

```typescript
public readonly acmeDomainValidationId: string;
```

- *Type:* string

The AcmeDomainValidationId component of the ARN.

---

##### `acmeEndpointId`<sup>Required</sup> <a name="acmeEndpointId" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.property.acmeEndpointId"></a>

```typescript
public readonly acmeEndpointId: string;
```

- *Type:* string

The AcmeEndpointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ACMAcmeEndpointArnComponents <a name="ACMAcmeEndpointArnComponents" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnComponents"></a>

Parsed components of a acme-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnComponents.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

const aCMAcmeEndpointArnComponents: acm.ACMAcmeEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeEndpointArnComponents.property.acmeEndpointId">acmeEndpointId</a></code> | <code>string</code> | The AcmeEndpointId component. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `acmeEndpointId`<sup>Required</sup> <a name="acmeEndpointId" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnComponents.property.acmeEndpointId"></a>

```typescript
public readonly acmeEndpointId: string;
```

- *Type:* string

The AcmeEndpointId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ACMAcmeEndpointArnProps <a name="ACMAcmeEndpointArnProps" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnProps"></a>

Properties for building a acme-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnProps.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

const aCMAcmeEndpointArnProps: acm.ACMAcmeEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeEndpointArnProps.property.acmeEndpointId">acmeEndpointId</a></code> | <code>string</code> | The AcmeEndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `acmeEndpointId`<sup>Required</sup> <a name="acmeEndpointId" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnProps.property.acmeEndpointId"></a>

```typescript
public readonly acmeEndpointId: string;
```

- *Type:* string

The AcmeEndpointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.acm.ACMAcmeEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ACMAcmeExternalAccountBindingArnComponents <a name="ACMAcmeExternalAccountBindingArnComponents" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents"></a>

Parsed components of a acme-external-account-binding ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

const aCMAcmeExternalAccountBindingArnComponents: acm.ACMAcmeExternalAccountBindingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.property.acmeEndpointId">acmeEndpointId</a></code> | <code>string</code> | The AcmeEndpointId component. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.property.externalAccountBindingId">externalAccountBindingId</a></code> | <code>string</code> | The ExternalAccountBindingId component. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `acmeEndpointId`<sup>Required</sup> <a name="acmeEndpointId" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.property.acmeEndpointId"></a>

```typescript
public readonly acmeEndpointId: string;
```

- *Type:* string

The AcmeEndpointId component.

---

##### `externalAccountBindingId`<sup>Required</sup> <a name="externalAccountBindingId" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.property.externalAccountBindingId"></a>

```typescript
public readonly externalAccountBindingId: string;
```

- *Type:* string

The ExternalAccountBindingId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ACMAcmeExternalAccountBindingArnProps <a name="ACMAcmeExternalAccountBindingArnProps" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps"></a>

Properties for building a acme-external-account-binding ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

const aCMAcmeExternalAccountBindingArnProps: acm.ACMAcmeExternalAccountBindingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.property.acmeEndpointId">acmeEndpointId</a></code> | <code>string</code> | The AcmeEndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.property.externalAccountBindingId">externalAccountBindingId</a></code> | <code>string</code> | The ExternalAccountBindingId component of the ARN. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `acmeEndpointId`<sup>Required</sup> <a name="acmeEndpointId" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.property.acmeEndpointId"></a>

```typescript
public readonly acmeEndpointId: string;
```

- *Type:* string

The AcmeEndpointId component of the ARN.

---

##### `externalAccountBindingId`<sup>Required</sup> <a name="externalAccountBindingId" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.property.externalAccountBindingId"></a>

```typescript
public readonly externalAccountBindingId: string;
```

- *Type:* string

The ExternalAccountBindingId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ACMCertificateArnComponents <a name="ACMCertificateArnComponents" id="@cdk_utils/iam.acm.ACMCertificateArnComponents"></a>

Parsed components of a certificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.acm.ACMCertificateArnComponents.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

const aCMCertificateArnComponents: acm.ACMCertificateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMCertificateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.acm.ACMCertificateArnComponents.property.certificateId">certificateId</a></code> | <code>string</code> | The CertificateId component. |
| <code><a href="#@cdk_utils/iam.acm.ACMCertificateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.acm.ACMCertificateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.acm.ACMCertificateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdk_utils/iam.acm.ACMCertificateArnComponents.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

The CertificateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.acm.ACMCertificateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.acm.ACMCertificateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ACMCertificateArnProps <a name="ACMCertificateArnProps" id="@cdk_utils/iam.acm.ACMCertificateArnProps"></a>

Properties for building a certificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.acm.ACMCertificateArnProps.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

const aCMCertificateArnProps: acm.ACMCertificateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMCertificateArnProps.property.certificateId">certificateId</a></code> | <code>string</code> | The CertificateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.acm.ACMCertificateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.acm.ACMCertificateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.acm.ACMCertificateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdk_utils/iam.acm.ACMCertificateArnProps.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

The CertificateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.acm.ACMCertificateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.acm.ACMCertificateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.acm.ACMCertificateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ACMActions <a name="ACMActions" id="@cdk_utils/iam.acm.ACMActions"></a>

IAM action constants for the acm service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.acm.ACMActions.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

new acm.ACMActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.actionGetAccountConfiguration">actionGetAccountConfiguration</a></code> | <code>string</code> | [Read] acm:GetAccountConfiguration. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.actionGetAcmeExternalAccountBindingCredentials">actionGetAcmeExternalAccountBindingCredentials</a></code> | <code>string</code> | [Read] acm:GetAcmeExternalAccountBindingCredentials. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.actionGetCertificate">actionGetCertificate</a></code> | <code>string</code> | [Read] acm:GetCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.AddTagsToCertificate">AddTagsToCertificate</a></code> | <code>string</code> | [Tagging] acm:AddTagsToCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.CreateAcmeDomainValidation">CreateAcmeDomainValidation</a></code> | <code>string</code> | [Write] acm:CreateAcmeDomainValidation. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.CreateAcmeEndpoint">CreateAcmeEndpoint</a></code> | <code>string</code> | [Write] acm:CreateAcmeEndpoint. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.CreateAcmeExternalAccountBinding">CreateAcmeExternalAccountBinding</a></code> | <code>string</code> | [Write] acm:CreateAcmeExternalAccountBinding. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.DeleteAcmeDomainValidation">DeleteAcmeDomainValidation</a></code> | <code>string</code> | [Write] acm:DeleteAcmeDomainValidation. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.DeleteAcmeEndpoint">DeleteAcmeEndpoint</a></code> | <code>string</code> | [Write] acm:DeleteAcmeEndpoint. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.DeleteAcmeExternalAccountBinding">DeleteAcmeExternalAccountBinding</a></code> | <code>string</code> | [Write] acm:DeleteAcmeExternalAccountBinding. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.DeleteCertificate">DeleteCertificate</a></code> | <code>string</code> | [Write] acm:DeleteCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.DescribeAcmeAccount">DescribeAcmeAccount</a></code> | <code>string</code> | [Read] acm:DescribeAcmeAccount. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.DescribeAcmeDomainValidation">DescribeAcmeDomainValidation</a></code> | <code>string</code> | [Read] acm:DescribeAcmeDomainValidation. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.DescribeAcmeEndpoint">DescribeAcmeEndpoint</a></code> | <code>string</code> | [Read] acm:DescribeAcmeEndpoint. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.DescribeAcmeExternalAccountBinding">DescribeAcmeExternalAccountBinding</a></code> | <code>string</code> | [Read] acm:DescribeAcmeExternalAccountBinding. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.DescribeCertificate">DescribeCertificate</a></code> | <code>string</code> | [Read] acm:DescribeCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.ExportCertificate">ExportCertificate</a></code> | <code>string</code> | [Read] acm:ExportCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.ImportCertificate">ImportCertificate</a></code> | <code>string</code> | [Write] acm:ImportCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.ListAcmeAccounts">ListAcmeAccounts</a></code> | <code>string</code> | [List] acm:ListAcmeAccounts. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.ListAcmeDomainValidations">ListAcmeDomainValidations</a></code> | <code>string</code> | [List] acm:ListAcmeDomainValidations. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.ListAcmeEndpoints">ListAcmeEndpoints</a></code> | <code>string</code> | [List] acm:ListAcmeEndpoints. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.ListAcmeExternalAccountBindings">ListAcmeExternalAccountBindings</a></code> | <code>string</code> | [List] acm:ListAcmeExternalAccountBindings. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.ListCertificates">ListCertificates</a></code> | <code>string</code> | [List] acm:ListCertificates. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.ListTagsForCertificate">ListTagsForCertificate</a></code> | <code>string</code> | [Read] acm:ListTagsForCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] acm:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.PutAccountConfiguration">PutAccountConfiguration</a></code> | <code>string</code> | [Write] acm:PutAccountConfiguration. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.RemoveTagsFromCertificate">RemoveTagsFromCertificate</a></code> | <code>string</code> | [Tagging] acm:RemoveTagsFromCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.RenewCertificate">RenewCertificate</a></code> | <code>string</code> | [Write] acm:RenewCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.RequestCertificate">RequestCertificate</a></code> | <code>string</code> | [Write] acm:RequestCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.ResendValidationEmail">ResendValidationEmail</a></code> | <code>string</code> | [Write] acm:ResendValidationEmail. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.RevokeAcmeAccount">RevokeAcmeAccount</a></code> | <code>string</code> | [Write] acm:RevokeAcmeAccount. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.RevokeAcmeExternalAccountBinding">RevokeAcmeExternalAccountBinding</a></code> | <code>string</code> | [Write] acm:RevokeAcmeExternalAccountBinding. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.RevokeCertificate">RevokeCertificate</a></code> | <code>string</code> | [Write] acm:RevokeCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.SearchCertificates">SearchCertificates</a></code> | <code>string</code> | [List] acm:SearchCertificates. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] acm:TagResource. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] acm:UntagResource. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.UpdateAcmeDomainValidation">UpdateAcmeDomainValidation</a></code> | <code>string</code> | [Write] acm:UpdateAcmeDomainValidation. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.UpdateAcmeEndpoint">UpdateAcmeEndpoint</a></code> | <code>string</code> | [Write] acm:UpdateAcmeEndpoint. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.UpdateCertificate">UpdateCertificate</a></code> | <code>string</code> | [Write] acm:UpdateCertificate. |
| <code><a href="#@cdk_utils/iam.acm.ACMActions.property.UpdateCertificateOptions">UpdateCertificateOptions</a></code> | <code>string</code> | [Write] acm:UpdateCertificateOptions. |

---

##### `actionGetAccountConfiguration`<sup>Required</sup> <a name="actionGetAccountConfiguration" id="@cdk_utils/iam.acm.ACMActions.property.actionGetAccountConfiguration"></a>

```typescript
public readonly actionGetAccountConfiguration: string;
```

- *Type:* string

[Read] acm:GetAccountConfiguration.

---

##### `actionGetAcmeExternalAccountBindingCredentials`<sup>Required</sup> <a name="actionGetAcmeExternalAccountBindingCredentials" id="@cdk_utils/iam.acm.ACMActions.property.actionGetAcmeExternalAccountBindingCredentials"></a>

```typescript
public readonly actionGetAcmeExternalAccountBindingCredentials: string;
```

- *Type:* string

[Read] acm:GetAcmeExternalAccountBindingCredentials.

---

##### `actionGetCertificate`<sup>Required</sup> <a name="actionGetCertificate" id="@cdk_utils/iam.acm.ACMActions.property.actionGetCertificate"></a>

```typescript
public readonly actionGetCertificate: string;
```

- *Type:* string

[Read] acm:GetCertificate.

---

##### `AddTagsToCertificate`<sup>Required</sup> <a name="AddTagsToCertificate" id="@cdk_utils/iam.acm.ACMActions.property.AddTagsToCertificate"></a>

```typescript
public readonly AddTagsToCertificate: string;
```

- *Type:* string

[Tagging] acm:AddTagsToCertificate.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.acm.ACMActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.acm.ACMActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.acm.ACMActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.acm.ACMActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.acm.ACMActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAcmeDomainValidation`<sup>Required</sup> <a name="CreateAcmeDomainValidation" id="@cdk_utils/iam.acm.ACMActions.property.CreateAcmeDomainValidation"></a>

```typescript
public readonly CreateAcmeDomainValidation: string;
```

- *Type:* string

[Write] acm:CreateAcmeDomainValidation.

---

##### `CreateAcmeEndpoint`<sup>Required</sup> <a name="CreateAcmeEndpoint" id="@cdk_utils/iam.acm.ACMActions.property.CreateAcmeEndpoint"></a>

```typescript
public readonly CreateAcmeEndpoint: string;
```

- *Type:* string

[Write] acm:CreateAcmeEndpoint.

---

##### `CreateAcmeExternalAccountBinding`<sup>Required</sup> <a name="CreateAcmeExternalAccountBinding" id="@cdk_utils/iam.acm.ACMActions.property.CreateAcmeExternalAccountBinding"></a>

```typescript
public readonly CreateAcmeExternalAccountBinding: string;
```

- *Type:* string

[Write] acm:CreateAcmeExternalAccountBinding.

---

##### `DeleteAcmeDomainValidation`<sup>Required</sup> <a name="DeleteAcmeDomainValidation" id="@cdk_utils/iam.acm.ACMActions.property.DeleteAcmeDomainValidation"></a>

```typescript
public readonly DeleteAcmeDomainValidation: string;
```

- *Type:* string

[Write] acm:DeleteAcmeDomainValidation.

---

##### `DeleteAcmeEndpoint`<sup>Required</sup> <a name="DeleteAcmeEndpoint" id="@cdk_utils/iam.acm.ACMActions.property.DeleteAcmeEndpoint"></a>

```typescript
public readonly DeleteAcmeEndpoint: string;
```

- *Type:* string

[Write] acm:DeleteAcmeEndpoint.

---

##### `DeleteAcmeExternalAccountBinding`<sup>Required</sup> <a name="DeleteAcmeExternalAccountBinding" id="@cdk_utils/iam.acm.ACMActions.property.DeleteAcmeExternalAccountBinding"></a>

```typescript
public readonly DeleteAcmeExternalAccountBinding: string;
```

- *Type:* string

[Write] acm:DeleteAcmeExternalAccountBinding.

---

##### `DeleteCertificate`<sup>Required</sup> <a name="DeleteCertificate" id="@cdk_utils/iam.acm.ACMActions.property.DeleteCertificate"></a>

```typescript
public readonly DeleteCertificate: string;
```

- *Type:* string

[Write] acm:DeleteCertificate.

---

##### `DescribeAcmeAccount`<sup>Required</sup> <a name="DescribeAcmeAccount" id="@cdk_utils/iam.acm.ACMActions.property.DescribeAcmeAccount"></a>

```typescript
public readonly DescribeAcmeAccount: string;
```

- *Type:* string

[Read] acm:DescribeAcmeAccount.

---

##### `DescribeAcmeDomainValidation`<sup>Required</sup> <a name="DescribeAcmeDomainValidation" id="@cdk_utils/iam.acm.ACMActions.property.DescribeAcmeDomainValidation"></a>

```typescript
public readonly DescribeAcmeDomainValidation: string;
```

- *Type:* string

[Read] acm:DescribeAcmeDomainValidation.

---

##### `DescribeAcmeEndpoint`<sup>Required</sup> <a name="DescribeAcmeEndpoint" id="@cdk_utils/iam.acm.ACMActions.property.DescribeAcmeEndpoint"></a>

```typescript
public readonly DescribeAcmeEndpoint: string;
```

- *Type:* string

[Read] acm:DescribeAcmeEndpoint.

---

##### `DescribeAcmeExternalAccountBinding`<sup>Required</sup> <a name="DescribeAcmeExternalAccountBinding" id="@cdk_utils/iam.acm.ACMActions.property.DescribeAcmeExternalAccountBinding"></a>

```typescript
public readonly DescribeAcmeExternalAccountBinding: string;
```

- *Type:* string

[Read] acm:DescribeAcmeExternalAccountBinding.

---

##### `DescribeCertificate`<sup>Required</sup> <a name="DescribeCertificate" id="@cdk_utils/iam.acm.ACMActions.property.DescribeCertificate"></a>

```typescript
public readonly DescribeCertificate: string;
```

- *Type:* string

[Read] acm:DescribeCertificate.

---

##### `ExportCertificate`<sup>Required</sup> <a name="ExportCertificate" id="@cdk_utils/iam.acm.ACMActions.property.ExportCertificate"></a>

```typescript
public readonly ExportCertificate: string;
```

- *Type:* string

[Read] acm:ExportCertificate.

---

##### `ImportCertificate`<sup>Required</sup> <a name="ImportCertificate" id="@cdk_utils/iam.acm.ACMActions.property.ImportCertificate"></a>

```typescript
public readonly ImportCertificate: string;
```

- *Type:* string

[Write] acm:ImportCertificate.

---

##### `ListAcmeAccounts`<sup>Required</sup> <a name="ListAcmeAccounts" id="@cdk_utils/iam.acm.ACMActions.property.ListAcmeAccounts"></a>

```typescript
public readonly ListAcmeAccounts: string;
```

- *Type:* string

[List] acm:ListAcmeAccounts.

---

##### `ListAcmeDomainValidations`<sup>Required</sup> <a name="ListAcmeDomainValidations" id="@cdk_utils/iam.acm.ACMActions.property.ListAcmeDomainValidations"></a>

```typescript
public readonly ListAcmeDomainValidations: string;
```

- *Type:* string

[List] acm:ListAcmeDomainValidations.

---

##### `ListAcmeEndpoints`<sup>Required</sup> <a name="ListAcmeEndpoints" id="@cdk_utils/iam.acm.ACMActions.property.ListAcmeEndpoints"></a>

```typescript
public readonly ListAcmeEndpoints: string;
```

- *Type:* string

[List] acm:ListAcmeEndpoints.

---

##### `ListAcmeExternalAccountBindings`<sup>Required</sup> <a name="ListAcmeExternalAccountBindings" id="@cdk_utils/iam.acm.ACMActions.property.ListAcmeExternalAccountBindings"></a>

```typescript
public readonly ListAcmeExternalAccountBindings: string;
```

- *Type:* string

[List] acm:ListAcmeExternalAccountBindings.

---

##### `ListCertificates`<sup>Required</sup> <a name="ListCertificates" id="@cdk_utils/iam.acm.ACMActions.property.ListCertificates"></a>

```typescript
public readonly ListCertificates: string;
```

- *Type:* string

[List] acm:ListCertificates.

---

##### `ListTagsForCertificate`<sup>Required</sup> <a name="ListTagsForCertificate" id="@cdk_utils/iam.acm.ACMActions.property.ListTagsForCertificate"></a>

```typescript
public readonly ListTagsForCertificate: string;
```

- *Type:* string

[Read] acm:ListTagsForCertificate.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.acm.ACMActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] acm:ListTagsForResource.

---

##### `PutAccountConfiguration`<sup>Required</sup> <a name="PutAccountConfiguration" id="@cdk_utils/iam.acm.ACMActions.property.PutAccountConfiguration"></a>

```typescript
public readonly PutAccountConfiguration: string;
```

- *Type:* string

[Write] acm:PutAccountConfiguration.

---

##### `RemoveTagsFromCertificate`<sup>Required</sup> <a name="RemoveTagsFromCertificate" id="@cdk_utils/iam.acm.ACMActions.property.RemoveTagsFromCertificate"></a>

```typescript
public readonly RemoveTagsFromCertificate: string;
```

- *Type:* string

[Tagging] acm:RemoveTagsFromCertificate.

---

##### `RenewCertificate`<sup>Required</sup> <a name="RenewCertificate" id="@cdk_utils/iam.acm.ACMActions.property.RenewCertificate"></a>

```typescript
public readonly RenewCertificate: string;
```

- *Type:* string

[Write] acm:RenewCertificate.

---

##### `RequestCertificate`<sup>Required</sup> <a name="RequestCertificate" id="@cdk_utils/iam.acm.ACMActions.property.RequestCertificate"></a>

```typescript
public readonly RequestCertificate: string;
```

- *Type:* string

[Write] acm:RequestCertificate.

---

##### `ResendValidationEmail`<sup>Required</sup> <a name="ResendValidationEmail" id="@cdk_utils/iam.acm.ACMActions.property.ResendValidationEmail"></a>

```typescript
public readonly ResendValidationEmail: string;
```

- *Type:* string

[Write] acm:ResendValidationEmail.

---

##### `RevokeAcmeAccount`<sup>Required</sup> <a name="RevokeAcmeAccount" id="@cdk_utils/iam.acm.ACMActions.property.RevokeAcmeAccount"></a>

```typescript
public readonly RevokeAcmeAccount: string;
```

- *Type:* string

[Write] acm:RevokeAcmeAccount.

---

##### `RevokeAcmeExternalAccountBinding`<sup>Required</sup> <a name="RevokeAcmeExternalAccountBinding" id="@cdk_utils/iam.acm.ACMActions.property.RevokeAcmeExternalAccountBinding"></a>

```typescript
public readonly RevokeAcmeExternalAccountBinding: string;
```

- *Type:* string

[Write] acm:RevokeAcmeExternalAccountBinding.

---

##### `RevokeCertificate`<sup>Required</sup> <a name="RevokeCertificate" id="@cdk_utils/iam.acm.ACMActions.property.RevokeCertificate"></a>

```typescript
public readonly RevokeCertificate: string;
```

- *Type:* string

[Write] acm:RevokeCertificate.

---

##### `SearchCertificates`<sup>Required</sup> <a name="SearchCertificates" id="@cdk_utils/iam.acm.ACMActions.property.SearchCertificates"></a>

```typescript
public readonly SearchCertificates: string;
```

- *Type:* string

[List] acm:SearchCertificates.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.acm.ACMActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.acm.ACMActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] acm:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.acm.ACMActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] acm:UntagResource.

---

##### `UpdateAcmeDomainValidation`<sup>Required</sup> <a name="UpdateAcmeDomainValidation" id="@cdk_utils/iam.acm.ACMActions.property.UpdateAcmeDomainValidation"></a>

```typescript
public readonly UpdateAcmeDomainValidation: string;
```

- *Type:* string

[Write] acm:UpdateAcmeDomainValidation.

---

##### `UpdateAcmeEndpoint`<sup>Required</sup> <a name="UpdateAcmeEndpoint" id="@cdk_utils/iam.acm.ACMActions.property.UpdateAcmeEndpoint"></a>

```typescript
public readonly UpdateAcmeEndpoint: string;
```

- *Type:* string

[Write] acm:UpdateAcmeEndpoint.

---

##### `UpdateCertificate`<sup>Required</sup> <a name="UpdateCertificate" id="@cdk_utils/iam.acm.ACMActions.property.UpdateCertificate"></a>

```typescript
public readonly UpdateCertificate: string;
```

- *Type:* string

[Write] acm:UpdateCertificate.

---

##### `UpdateCertificateOptions`<sup>Required</sup> <a name="UpdateCertificateOptions" id="@cdk_utils/iam.acm.ACMActions.property.UpdateCertificateOptions"></a>

```typescript
public readonly UpdateCertificateOptions: string;
```

- *Type:* string

[Write] acm:UpdateCertificateOptions.

---

### ACMConditions <a name="ACMConditions" id="@cdk_utils/iam.acm.ACMConditions"></a>

Condition key constants and builders for acm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.acm.ACMConditions.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

new acm.ACMConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.certificateAuthority">certificateAuthority</a></code> | Generates a condition block for `acm:CertificateAuthority`. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.certificateKeyPairOrigin">certificateKeyPairOrigin</a></code> | Generates a condition block for `acm:CertificateKeyPairOrigin`. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.certificateTransparencyLogging">certificateTransparencyLogging</a></code> | Generates a condition block for `acm:CertificateTransparencyLogging`. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.domainNames">domainNames</a></code> | Generates a condition block for `acm:DomainNames`. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.export">export</a></code> | Generates a condition block for `acm:Export`. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.keyAlgorithm">keyAlgorithm</a></code> | Generates a condition block for `acm:KeyAlgorithm`. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.validationMethod">validationMethod</a></code> | Generates a condition block for `acm:ValidationMethod`. |

---

##### `certificateAuthority` <a name="certificateAuthority" id="@cdk_utils/iam.acm.ACMConditions.certificateAuthority"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMConditions.certificateAuthority(value: string)
```

Generates a condition block for `acm:CertificateAuthority`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm.ACMConditions.certificateAuthority.parameter.value"></a>

- *Type:* string

---

##### `certificateKeyPairOrigin` <a name="certificateKeyPairOrigin" id="@cdk_utils/iam.acm.ACMConditions.certificateKeyPairOrigin"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMConditions.certificateKeyPairOrigin(value: string)
```

Generates a condition block for `acm:CertificateKeyPairOrigin`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm.ACMConditions.certificateKeyPairOrigin.parameter.value"></a>

- *Type:* string

---

##### `certificateTransparencyLogging` <a name="certificateTransparencyLogging" id="@cdk_utils/iam.acm.ACMConditions.certificateTransparencyLogging"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMConditions.certificateTransparencyLogging(value: string)
```

Generates a condition block for `acm:CertificateTransparencyLogging`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm.ACMConditions.certificateTransparencyLogging.parameter.value"></a>

- *Type:* string

---

##### `domainNames` <a name="domainNames" id="@cdk_utils/iam.acm.ACMConditions.domainNames"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMConditions.domainNames(values: string[])
```

Generates a condition block for `acm:DomainNames`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.acm.ACMConditions.domainNames.parameter.values"></a>

- *Type:* string[]

---

##### `export` <a name="export" id="@cdk_utils/iam.acm.ACMConditions.export"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMConditions.export(value: string)
```

Generates a condition block for `acm:Export`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm.ACMConditions.export.parameter.value"></a>

- *Type:* string

---

##### `keyAlgorithm` <a name="keyAlgorithm" id="@cdk_utils/iam.acm.ACMConditions.keyAlgorithm"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMConditions.keyAlgorithm(value: string)
```

Generates a condition block for `acm:KeyAlgorithm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm.ACMConditions.keyAlgorithm.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.acm.ACMConditions.requestTag"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm.ACMConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.acm.ACMConditions.resourceTag"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm.ACMConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.acm.ACMConditions.tagKeys"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.acm.ACMConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `validationMethod` <a name="validationMethod" id="@cdk_utils/iam.acm.ACMConditions.validationMethod"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMConditions.validationMethod(value: string)
```

Generates a condition block for `acm:ValidationMethod`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm.ACMConditions.validationMethod.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.AddTagsToCertificateConditionKeys">AddTagsToCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTagsToCertificate action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.CERTIFICATE_AUTHORITY">CERTIFICATE_AUTHORITY</a></code> | <code>string</code> | Condition key: acm:CertificateAuthority (String). |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.CERTIFICATE_KEY_PAIR_ORIGIN">CERTIFICATE_KEY_PAIR_ORIGIN</a></code> | <code>string</code> | Condition key: acm:CertificateKeyPairOrigin (String). |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.CERTIFICATE_TRANSPARENCY_LOGGING">CERTIFICATE_TRANSPARENCY_LOGGING</a></code> | <code>string</code> | Condition key: acm:CertificateTransparencyLogging (String). |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.CreateAcmeDomainValidationConditionKeys">CreateAcmeDomainValidationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAcmeDomainValidation action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.CreateAcmeEndpointConditionKeys">CreateAcmeEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAcmeEndpoint action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.CreateAcmeExternalAccountBindingConditionKeys">CreateAcmeExternalAccountBindingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAcmeExternalAccountBinding action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.DeleteCertificateConditionKeys">DeleteCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCertificate action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.DOMAIN_NAMES">DOMAIN_NAMES</a></code> | <code>string</code> | Condition key: acm:DomainNames (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.EXPORT">EXPORT</a></code> | <code>string</code> | Condition key: acm:Export (String). |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.ExportCertificateConditionKeys">ExportCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExportCertificate action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.ImportCertificateConditionKeys">ImportCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportCertificate action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.KEY_ALGORITHM">KEY_ALGORITHM</a></code> | <code>string</code> | Condition key: acm:KeyAlgorithm (String). |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.RemoveTagsFromCertificateConditionKeys">RemoveTagsFromCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTagsFromCertificate action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.RequestCertificateConditionKeys">RequestCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RequestCertificate action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.RevokeCertificateConditionKeys">RevokeCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RevokeCertificate action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.UpdateCertificateConditionKeys">UpdateCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCertificate action. |
| <code><a href="#@cdk_utils/iam.acm.ACMConditions.property.VALIDATION_METHOD">VALIDATION_METHOD</a></code> | <code>string</code> | Condition key: acm:ValidationMethod (String). |

---

##### `AddTagsToCertificateConditionKeys`<sup>Required</sup> <a name="AddTagsToCertificateConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.AddTagsToCertificateConditionKeys"></a>

```typescript
public readonly AddTagsToCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTagsToCertificate action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.acm.ACMConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.acm.ACMConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.acm.ACMConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CERTIFICATE_AUTHORITY`<sup>Required</sup> <a name="CERTIFICATE_AUTHORITY" id="@cdk_utils/iam.acm.ACMConditions.property.CERTIFICATE_AUTHORITY"></a>

```typescript
public readonly CERTIFICATE_AUTHORITY: string;
```

- *Type:* string

Condition key: acm:CertificateAuthority (String).

---

##### `CERTIFICATE_KEY_PAIR_ORIGIN`<sup>Required</sup> <a name="CERTIFICATE_KEY_PAIR_ORIGIN" id="@cdk_utils/iam.acm.ACMConditions.property.CERTIFICATE_KEY_PAIR_ORIGIN"></a>

```typescript
public readonly CERTIFICATE_KEY_PAIR_ORIGIN: string;
```

- *Type:* string

Condition key: acm:CertificateKeyPairOrigin (String).

---

##### `CERTIFICATE_TRANSPARENCY_LOGGING`<sup>Required</sup> <a name="CERTIFICATE_TRANSPARENCY_LOGGING" id="@cdk_utils/iam.acm.ACMConditions.property.CERTIFICATE_TRANSPARENCY_LOGGING"></a>

```typescript
public readonly CERTIFICATE_TRANSPARENCY_LOGGING: string;
```

- *Type:* string

Condition key: acm:CertificateTransparencyLogging (String).

---

##### `CreateAcmeDomainValidationConditionKeys`<sup>Required</sup> <a name="CreateAcmeDomainValidationConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.CreateAcmeDomainValidationConditionKeys"></a>

```typescript
public readonly CreateAcmeDomainValidationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAcmeDomainValidation action.

---

##### `CreateAcmeEndpointConditionKeys`<sup>Required</sup> <a name="CreateAcmeEndpointConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.CreateAcmeEndpointConditionKeys"></a>

```typescript
public readonly CreateAcmeEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAcmeEndpoint action.

---

##### `CreateAcmeExternalAccountBindingConditionKeys`<sup>Required</sup> <a name="CreateAcmeExternalAccountBindingConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.CreateAcmeExternalAccountBindingConditionKeys"></a>

```typescript
public readonly CreateAcmeExternalAccountBindingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAcmeExternalAccountBinding action.

---

##### `DeleteCertificateConditionKeys`<sup>Required</sup> <a name="DeleteCertificateConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.DeleteCertificateConditionKeys"></a>

```typescript
public readonly DeleteCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCertificate action.

---

##### `DOMAIN_NAMES`<sup>Required</sup> <a name="DOMAIN_NAMES" id="@cdk_utils/iam.acm.ACMConditions.property.DOMAIN_NAMES"></a>

```typescript
public readonly DOMAIN_NAMES: string;
```

- *Type:* string

Condition key: acm:DomainNames (ArrayOfString).

---

##### `EXPORT`<sup>Required</sup> <a name="EXPORT" id="@cdk_utils/iam.acm.ACMConditions.property.EXPORT"></a>

```typescript
public readonly EXPORT: string;
```

- *Type:* string

Condition key: acm:Export (String).

---

##### `ExportCertificateConditionKeys`<sup>Required</sup> <a name="ExportCertificateConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.ExportCertificateConditionKeys"></a>

```typescript
public readonly ExportCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExportCertificate action.

---

##### `ImportCertificateConditionKeys`<sup>Required</sup> <a name="ImportCertificateConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.ImportCertificateConditionKeys"></a>

```typescript
public readonly ImportCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportCertificate action.

---

##### `KEY_ALGORITHM`<sup>Required</sup> <a name="KEY_ALGORITHM" id="@cdk_utils/iam.acm.ACMConditions.property.KEY_ALGORITHM"></a>

```typescript
public readonly KEY_ALGORITHM: string;
```

- *Type:* string

Condition key: acm:KeyAlgorithm (String).

---

##### `RemoveTagsFromCertificateConditionKeys`<sup>Required</sup> <a name="RemoveTagsFromCertificateConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.RemoveTagsFromCertificateConditionKeys"></a>

```typescript
public readonly RemoveTagsFromCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTagsFromCertificate action.

---

##### `RequestCertificateConditionKeys`<sup>Required</sup> <a name="RequestCertificateConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.RequestCertificateConditionKeys"></a>

```typescript
public readonly RequestCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RequestCertificate action.

---

##### `RevokeCertificateConditionKeys`<sup>Required</sup> <a name="RevokeCertificateConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.RevokeCertificateConditionKeys"></a>

```typescript
public readonly RevokeCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RevokeCertificate action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCertificateConditionKeys`<sup>Required</sup> <a name="UpdateCertificateConditionKeys" id="@cdk_utils/iam.acm.ACMConditions.property.UpdateCertificateConditionKeys"></a>

```typescript
public readonly UpdateCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCertificate action.

---

##### `VALIDATION_METHOD`<sup>Required</sup> <a name="VALIDATION_METHOD" id="@cdk_utils/iam.acm.ACMConditions.property.VALIDATION_METHOD"></a>

```typescript
public readonly VALIDATION_METHOD: string;
```

- *Type:* string

Condition key: acm:ValidationMethod (String).

---

### ACMOperations <a name="ACMOperations" id="@cdk_utils/iam.acm.ACMOperations"></a>

API operation to required IAM actions mapping for acm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.acm.ACMOperations.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

new acm.ACMOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.AddTagsToCertificate">AddTagsToCertificate</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.CreateAcmeDomainValidation">CreateAcmeDomainValidation</a></code> | <code>string[]</code> | IAM actions required for the CreateAcmeDomainValidation API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.CreateAcmeEndpoint">CreateAcmeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateAcmeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.CreateAcmeExternalAccountBinding">CreateAcmeExternalAccountBinding</a></code> | <code>string[]</code> | IAM actions required for the CreateAcmeExternalAccountBinding API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.DeleteAcmeDomainValidation">DeleteAcmeDomainValidation</a></code> | <code>string[]</code> | IAM actions required for the DeleteAcmeDomainValidation API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.DeleteAcmeEndpoint">DeleteAcmeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteAcmeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.DeleteAcmeExternalAccountBinding">DeleteAcmeExternalAccountBinding</a></code> | <code>string[]</code> | IAM actions required for the DeleteAcmeExternalAccountBinding API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.DeleteCertificate">DeleteCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.DescribeAcmeAccount">DescribeAcmeAccount</a></code> | <code>string[]</code> | IAM actions required for the DescribeAcmeAccount API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.DescribeAcmeDomainValidation">DescribeAcmeDomainValidation</a></code> | <code>string[]</code> | IAM actions required for the DescribeAcmeDomainValidation API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.DescribeAcmeEndpoint">DescribeAcmeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DescribeAcmeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.DescribeAcmeExternalAccountBinding">DescribeAcmeExternalAccountBinding</a></code> | <code>string[]</code> | IAM actions required for the DescribeAcmeExternalAccountBinding API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.DescribeCertificate">DescribeCertificate</a></code> | <code>string[]</code> | IAM actions required for the DescribeCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.ExportCertificate">ExportCertificate</a></code> | <code>string[]</code> | IAM actions required for the ExportCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.ImportCertificate">ImportCertificate</a></code> | <code>string[]</code> | IAM actions required for the ImportCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.ListAcmeAccounts">ListAcmeAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListAcmeAccounts API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.ListAcmeDomainValidations">ListAcmeDomainValidations</a></code> | <code>string[]</code> | IAM actions required for the ListAcmeDomainValidations API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.ListAcmeEndpoints">ListAcmeEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListAcmeEndpoints API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.ListAcmeExternalAccountBindings">ListAcmeExternalAccountBindings</a></code> | <code>string[]</code> | IAM actions required for the ListAcmeExternalAccountBindings API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.ListCertificates">ListCertificates</a></code> | <code>string[]</code> | IAM actions required for the ListCertificates API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.ListTagsForCertificate">ListTagsForCertificate</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.opGetAccountConfiguration">opGetAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetAccountConfiguration API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.opGetAcmeExternalAccountBindingCredentials">opGetAcmeExternalAccountBindingCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetAcmeExternalAccountBindingCredentials API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.opGetCertificate">opGetCertificate</a></code> | <code>string[]</code> | IAM actions required for the GetCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.PutAccountConfiguration">PutAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutAccountConfiguration API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.RemoveTagsFromCertificate">RemoveTagsFromCertificate</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.RenewCertificate">RenewCertificate</a></code> | <code>string[]</code> | IAM actions required for the RenewCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.RequestCertificate">RequestCertificate</a></code> | <code>string[]</code> | IAM actions required for the RequestCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.ResendValidationEmail">ResendValidationEmail</a></code> | <code>string[]</code> | IAM actions required for the ResendValidationEmail API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.RevokeAcmeAccount">RevokeAcmeAccount</a></code> | <code>string[]</code> | IAM actions required for the RevokeAcmeAccount API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.RevokeAcmeExternalAccountBinding">RevokeAcmeExternalAccountBinding</a></code> | <code>string[]</code> | IAM actions required for the RevokeAcmeExternalAccountBinding API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.RevokeCertificate">RevokeCertificate</a></code> | <code>string[]</code> | IAM actions required for the RevokeCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.SearchCertificates">SearchCertificates</a></code> | <code>string[]</code> | IAM actions required for the SearchCertificates API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.UpdateAcmeDomainValidation">UpdateAcmeDomainValidation</a></code> | <code>string[]</code> | IAM actions required for the UpdateAcmeDomainValidation API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.UpdateAcmeEndpoint">UpdateAcmeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateAcmeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.acm.ACMOperations.property.UpdateCertificateOptions">UpdateCertificateOptions</a></code> | <code>string[]</code> | IAM actions required for the UpdateCertificateOptions API call. |

---

##### `AddTagsToCertificate`<sup>Required</sup> <a name="AddTagsToCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.AddTagsToCertificate"></a>

```typescript
public readonly AddTagsToCertificate: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToCertificate API call.

---

##### `CreateAcmeDomainValidation`<sup>Required</sup> <a name="CreateAcmeDomainValidation" id="@cdk_utils/iam.acm.ACMOperations.property.CreateAcmeDomainValidation"></a>

```typescript
public readonly CreateAcmeDomainValidation: string[];
```

- *Type:* string[]

IAM actions required for the CreateAcmeDomainValidation API call.

---

##### `CreateAcmeEndpoint`<sup>Required</sup> <a name="CreateAcmeEndpoint" id="@cdk_utils/iam.acm.ACMOperations.property.CreateAcmeEndpoint"></a>

```typescript
public readonly CreateAcmeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateAcmeEndpoint API call.

---

##### `CreateAcmeExternalAccountBinding`<sup>Required</sup> <a name="CreateAcmeExternalAccountBinding" id="@cdk_utils/iam.acm.ACMOperations.property.CreateAcmeExternalAccountBinding"></a>

```typescript
public readonly CreateAcmeExternalAccountBinding: string[];
```

- *Type:* string[]

IAM actions required for the CreateAcmeExternalAccountBinding API call.

---

##### `DeleteAcmeDomainValidation`<sup>Required</sup> <a name="DeleteAcmeDomainValidation" id="@cdk_utils/iam.acm.ACMOperations.property.DeleteAcmeDomainValidation"></a>

```typescript
public readonly DeleteAcmeDomainValidation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAcmeDomainValidation API call.

---

##### `DeleteAcmeEndpoint`<sup>Required</sup> <a name="DeleteAcmeEndpoint" id="@cdk_utils/iam.acm.ACMOperations.property.DeleteAcmeEndpoint"></a>

```typescript
public readonly DeleteAcmeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAcmeEndpoint API call.

---

##### `DeleteAcmeExternalAccountBinding`<sup>Required</sup> <a name="DeleteAcmeExternalAccountBinding" id="@cdk_utils/iam.acm.ACMOperations.property.DeleteAcmeExternalAccountBinding"></a>

```typescript
public readonly DeleteAcmeExternalAccountBinding: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAcmeExternalAccountBinding API call.

---

##### `DeleteCertificate`<sup>Required</sup> <a name="DeleteCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.DeleteCertificate"></a>

```typescript
public readonly DeleteCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCertificate API call.

---

##### `DescribeAcmeAccount`<sup>Required</sup> <a name="DescribeAcmeAccount" id="@cdk_utils/iam.acm.ACMOperations.property.DescribeAcmeAccount"></a>

```typescript
public readonly DescribeAcmeAccount: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAcmeAccount API call.

---

##### `DescribeAcmeDomainValidation`<sup>Required</sup> <a name="DescribeAcmeDomainValidation" id="@cdk_utils/iam.acm.ACMOperations.property.DescribeAcmeDomainValidation"></a>

```typescript
public readonly DescribeAcmeDomainValidation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAcmeDomainValidation API call.

---

##### `DescribeAcmeEndpoint`<sup>Required</sup> <a name="DescribeAcmeEndpoint" id="@cdk_utils/iam.acm.ACMOperations.property.DescribeAcmeEndpoint"></a>

```typescript
public readonly DescribeAcmeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAcmeEndpoint API call.

---

##### `DescribeAcmeExternalAccountBinding`<sup>Required</sup> <a name="DescribeAcmeExternalAccountBinding" id="@cdk_utils/iam.acm.ACMOperations.property.DescribeAcmeExternalAccountBinding"></a>

```typescript
public readonly DescribeAcmeExternalAccountBinding: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAcmeExternalAccountBinding API call.

---

##### `DescribeCertificate`<sup>Required</sup> <a name="DescribeCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.DescribeCertificate"></a>

```typescript
public readonly DescribeCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCertificate API call.

---

##### `ExportCertificate`<sup>Required</sup> <a name="ExportCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.ExportCertificate"></a>

```typescript
public readonly ExportCertificate: string[];
```

- *Type:* string[]

IAM actions required for the ExportCertificate API call.

---

##### `ImportCertificate`<sup>Required</sup> <a name="ImportCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.ImportCertificate"></a>

```typescript
public readonly ImportCertificate: string[];
```

- *Type:* string[]

IAM actions required for the ImportCertificate API call.

---

##### `ListAcmeAccounts`<sup>Required</sup> <a name="ListAcmeAccounts" id="@cdk_utils/iam.acm.ACMOperations.property.ListAcmeAccounts"></a>

```typescript
public readonly ListAcmeAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListAcmeAccounts API call.

---

##### `ListAcmeDomainValidations`<sup>Required</sup> <a name="ListAcmeDomainValidations" id="@cdk_utils/iam.acm.ACMOperations.property.ListAcmeDomainValidations"></a>

```typescript
public readonly ListAcmeDomainValidations: string[];
```

- *Type:* string[]

IAM actions required for the ListAcmeDomainValidations API call.

---

##### `ListAcmeEndpoints`<sup>Required</sup> <a name="ListAcmeEndpoints" id="@cdk_utils/iam.acm.ACMOperations.property.ListAcmeEndpoints"></a>

```typescript
public readonly ListAcmeEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListAcmeEndpoints API call.

---

##### `ListAcmeExternalAccountBindings`<sup>Required</sup> <a name="ListAcmeExternalAccountBindings" id="@cdk_utils/iam.acm.ACMOperations.property.ListAcmeExternalAccountBindings"></a>

```typescript
public readonly ListAcmeExternalAccountBindings: string[];
```

- *Type:* string[]

IAM actions required for the ListAcmeExternalAccountBindings API call.

---

##### `ListCertificates`<sup>Required</sup> <a name="ListCertificates" id="@cdk_utils/iam.acm.ACMOperations.property.ListCertificates"></a>

```typescript
public readonly ListCertificates: string[];
```

- *Type:* string[]

IAM actions required for the ListCertificates API call.

---

##### `ListTagsForCertificate`<sup>Required</sup> <a name="ListTagsForCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.ListTagsForCertificate"></a>

```typescript
public readonly ListTagsForCertificate: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForCertificate API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.acm.ACMOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccountConfiguration`<sup>Required</sup> <a name="opGetAccountConfiguration" id="@cdk_utils/iam.acm.ACMOperations.property.opGetAccountConfiguration"></a>

```typescript
public readonly opGetAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountConfiguration API call.

---

##### `opGetAcmeExternalAccountBindingCredentials`<sup>Required</sup> <a name="opGetAcmeExternalAccountBindingCredentials" id="@cdk_utils/iam.acm.ACMOperations.property.opGetAcmeExternalAccountBindingCredentials"></a>

```typescript
public readonly opGetAcmeExternalAccountBindingCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetAcmeExternalAccountBindingCredentials API call.

---

##### `opGetCertificate`<sup>Required</sup> <a name="opGetCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.opGetCertificate"></a>

```typescript
public readonly opGetCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GetCertificate API call.

---

##### `PutAccountConfiguration`<sup>Required</sup> <a name="PutAccountConfiguration" id="@cdk_utils/iam.acm.ACMOperations.property.PutAccountConfiguration"></a>

```typescript
public readonly PutAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountConfiguration API call.

---

##### `RemoveTagsFromCertificate`<sup>Required</sup> <a name="RemoveTagsFromCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.RemoveTagsFromCertificate"></a>

```typescript
public readonly RemoveTagsFromCertificate: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromCertificate API call.

---

##### `RenewCertificate`<sup>Required</sup> <a name="RenewCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.RenewCertificate"></a>

```typescript
public readonly RenewCertificate: string[];
```

- *Type:* string[]

IAM actions required for the RenewCertificate API call.

---

##### `RequestCertificate`<sup>Required</sup> <a name="RequestCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.RequestCertificate"></a>

```typescript
public readonly RequestCertificate: string[];
```

- *Type:* string[]

IAM actions required for the RequestCertificate API call.

---

##### `ResendValidationEmail`<sup>Required</sup> <a name="ResendValidationEmail" id="@cdk_utils/iam.acm.ACMOperations.property.ResendValidationEmail"></a>

```typescript
public readonly ResendValidationEmail: string[];
```

- *Type:* string[]

IAM actions required for the ResendValidationEmail API call.

---

##### `RevokeAcmeAccount`<sup>Required</sup> <a name="RevokeAcmeAccount" id="@cdk_utils/iam.acm.ACMOperations.property.RevokeAcmeAccount"></a>

```typescript
public readonly RevokeAcmeAccount: string[];
```

- *Type:* string[]

IAM actions required for the RevokeAcmeAccount API call.

---

##### `RevokeAcmeExternalAccountBinding`<sup>Required</sup> <a name="RevokeAcmeExternalAccountBinding" id="@cdk_utils/iam.acm.ACMOperations.property.RevokeAcmeExternalAccountBinding"></a>

```typescript
public readonly RevokeAcmeExternalAccountBinding: string[];
```

- *Type:* string[]

IAM actions required for the RevokeAcmeExternalAccountBinding API call.

---

##### `RevokeCertificate`<sup>Required</sup> <a name="RevokeCertificate" id="@cdk_utils/iam.acm.ACMOperations.property.RevokeCertificate"></a>

```typescript
public readonly RevokeCertificate: string[];
```

- *Type:* string[]

IAM actions required for the RevokeCertificate API call.

---

##### `SearchCertificates`<sup>Required</sup> <a name="SearchCertificates" id="@cdk_utils/iam.acm.ACMOperations.property.SearchCertificates"></a>

```typescript
public readonly SearchCertificates: string[];
```

- *Type:* string[]

IAM actions required for the SearchCertificates API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.acm.ACMOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.acm.ACMOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAcmeDomainValidation`<sup>Required</sup> <a name="UpdateAcmeDomainValidation" id="@cdk_utils/iam.acm.ACMOperations.property.UpdateAcmeDomainValidation"></a>

```typescript
public readonly UpdateAcmeDomainValidation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAcmeDomainValidation API call.

---

##### `UpdateAcmeEndpoint`<sup>Required</sup> <a name="UpdateAcmeEndpoint" id="@cdk_utils/iam.acm.ACMOperations.property.UpdateAcmeEndpoint"></a>

```typescript
public readonly UpdateAcmeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAcmeEndpoint API call.

---

##### `UpdateCertificateOptions`<sup>Required</sup> <a name="UpdateCertificateOptions" id="@cdk_utils/iam.acm.ACMOperations.property.UpdateCertificateOptions"></a>

```typescript
public readonly UpdateCertificateOptions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCertificateOptions API call.

---

### ACMResources <a name="ACMResources" id="@cdk_utils/iam.acm.ACMResources"></a>

ARN builders, validators, and parsers for acm resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.acm.ACMResources.Initializer"></a>

```typescript
import { acm } from '@cdk_utils/iam'

new acm.ACMResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.acmeDomainValidation">acmeDomainValidation</a></code> | Builds an ARN for the acme-domain-validation resource. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.acmeEndpoint">acmeEndpoint</a></code> | Builds an ARN for the acme-endpoint resource. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.acmeExternalAccountBinding">acmeExternalAccountBinding</a></code> | Builds an ARN for the acme-external-account-binding resource. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.certificate">certificate</a></code> | Builds an ARN for the certificate resource. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.isValidAcmeDomainValidationArn">isValidAcmeDomainValidationArn</a></code> | Validates whether a string is a valid ARN for the acme-domain-validation resource. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.isValidAcmeEndpointArn">isValidAcmeEndpointArn</a></code> | Validates whether a string is a valid ARN for the acme-endpoint resource. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.isValidAcmeExternalAccountBindingArn">isValidAcmeExternalAccountBindingArn</a></code> | Validates whether a string is a valid ARN for the acme-external-account-binding resource. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.isValidCertificateArn">isValidCertificateArn</a></code> | Validates whether a string is a valid ARN for the certificate resource. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.parseAcmeDomainValidationArn">parseAcmeDomainValidationArn</a></code> | Parses a acme-domain-validation ARN into its components. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.parseAcmeEndpointArn">parseAcmeEndpointArn</a></code> | Parses a acme-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.parseAcmeExternalAccountBindingArn">parseAcmeExternalAccountBindingArn</a></code> | Parses a acme-external-account-binding ARN into its components. |
| <code><a href="#@cdk_utils/iam.acm.ACMResources.parseCertificateArn">parseCertificateArn</a></code> | Parses a certificate ARN into its components. |

---

##### `acmeDomainValidation` <a name="acmeDomainValidation" id="@cdk_utils/iam.acm.ACMResources.acmeDomainValidation"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.acmeDomainValidation(props: ACMAcmeDomainValidationArnProps)
```

Builds an ARN for the acme-domain-validation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.acm.ACMResources.acmeDomainValidation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.acm.ACMAcmeDomainValidationArnProps">ACMAcmeDomainValidationArnProps</a>

---

##### `acmeEndpoint` <a name="acmeEndpoint" id="@cdk_utils/iam.acm.ACMResources.acmeEndpoint"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.acmeEndpoint(props: ACMAcmeEndpointArnProps)
```

Builds an ARN for the acme-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.acm.ACMResources.acmeEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.acm.ACMAcmeEndpointArnProps">ACMAcmeEndpointArnProps</a>

---

##### `acmeExternalAccountBinding` <a name="acmeExternalAccountBinding" id="@cdk_utils/iam.acm.ACMResources.acmeExternalAccountBinding"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.acmeExternalAccountBinding(props: ACMAcmeExternalAccountBindingArnProps)
```

Builds an ARN for the acme-external-account-binding resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.acm.ACMResources.acmeExternalAccountBinding.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.acm.ACMAcmeExternalAccountBindingArnProps">ACMAcmeExternalAccountBindingArnProps</a>

---

##### `certificate` <a name="certificate" id="@cdk_utils/iam.acm.ACMResources.certificate"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.certificate(props: ACMCertificateArnProps)
```

Builds an ARN for the certificate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.acm.ACMResources.certificate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.acm.ACMCertificateArnProps">ACMCertificateArnProps</a>

---

##### `isValidAcmeDomainValidationArn` <a name="isValidAcmeDomainValidationArn" id="@cdk_utils/iam.acm.ACMResources.isValidAcmeDomainValidationArn"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.isValidAcmeDomainValidationArn(arn: string)
```

Validates whether a string is a valid ARN for the acme-domain-validation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.acm.ACMResources.isValidAcmeDomainValidationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAcmeEndpointArn` <a name="isValidAcmeEndpointArn" id="@cdk_utils/iam.acm.ACMResources.isValidAcmeEndpointArn"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.isValidAcmeEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the acme-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.acm.ACMResources.isValidAcmeEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAcmeExternalAccountBindingArn` <a name="isValidAcmeExternalAccountBindingArn" id="@cdk_utils/iam.acm.ACMResources.isValidAcmeExternalAccountBindingArn"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.isValidAcmeExternalAccountBindingArn(arn: string)
```

Validates whether a string is a valid ARN for the acme-external-account-binding resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.acm.ACMResources.isValidAcmeExternalAccountBindingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCertificateArn` <a name="isValidCertificateArn" id="@cdk_utils/iam.acm.ACMResources.isValidCertificateArn"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.isValidCertificateArn(arn: string)
```

Validates whether a string is a valid ARN for the certificate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.acm.ACMResources.isValidCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAcmeDomainValidationArn` <a name="parseAcmeDomainValidationArn" id="@cdk_utils/iam.acm.ACMResources.parseAcmeDomainValidationArn"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.parseAcmeDomainValidationArn(arn: string)
```

Parses a acme-domain-validation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.acm.ACMResources.parseAcmeDomainValidationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAcmeEndpointArn` <a name="parseAcmeEndpointArn" id="@cdk_utils/iam.acm.ACMResources.parseAcmeEndpointArn"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.parseAcmeEndpointArn(arn: string)
```

Parses a acme-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.acm.ACMResources.parseAcmeEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAcmeExternalAccountBindingArn` <a name="parseAcmeExternalAccountBindingArn" id="@cdk_utils/iam.acm.ACMResources.parseAcmeExternalAccountBindingArn"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.parseAcmeExternalAccountBindingArn(arn: string)
```

Parses a acme-external-account-binding ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.acm.ACMResources.parseAcmeExternalAccountBindingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCertificateArn` <a name="parseCertificateArn" id="@cdk_utils/iam.acm.ACMResources.parseCertificateArn"></a>

```typescript
import { acm } from '@cdk_utils/iam'

acm.ACMResources.parseCertificateArn(arn: string)
```

Parses a certificate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.acm.ACMResources.parseCertificateArn.parameter.arn"></a>

- *Type:* string

---




