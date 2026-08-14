# `acm_pca` Submodule <a name="`acm_pca` Submodule" id="@cdk_utils/iam.acm_pca"></a>


## Structs <a name="Structs" id="Structs"></a>

### ACMPcaCertificateAuthorityArnComponents <a name="ACMPcaCertificateAuthorityArnComponents" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnComponents"></a>

Parsed components of a certificate-authority ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnComponents.Initializer"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

const aCMPcaCertificateAuthorityArnComponents: acm_pca.ACMPcaCertificateAuthorityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnComponents.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | The CertificateAuthorityId component. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnComponents.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

The CertificateAuthorityId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ACMPcaCertificateAuthorityArnProps <a name="ACMPcaCertificateAuthorityArnProps" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps"></a>

Properties for building a certificate-authority ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps.Initializer"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

const aCMPcaCertificateAuthorityArnProps: acm_pca.ACMPcaCertificateAuthorityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | The CertificateAuthorityId component of the ARN. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

The CertificateAuthorityId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ACMPcaActions <a name="ACMPcaActions" id="@cdk_utils/iam.acm_pca.ACMPcaActions"></a>

IAM action constants for the acm-pca service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.acm_pca.ACMPcaActions.Initializer"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

new acm_pca.ACMPcaActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.actionGetCertificate">actionGetCertificate</a></code> | <code>string</code> | [Read] acm-pca:GetCertificate. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.actionGetCertificateAuthorityCertificate">actionGetCertificateAuthorityCertificate</a></code> | <code>string</code> | [Read] acm-pca:GetCertificateAuthorityCertificate. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.actionGetCertificateAuthorityCsr">actionGetCertificateAuthorityCsr</a></code> | <code>string</code> | [Read] acm-pca:GetCertificateAuthorityCsr. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] acm-pca:GetPolicy. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.CreateCertificateAuthority">CreateCertificateAuthority</a></code> | <code>string</code> | [Write] acm-pca:CreateCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.CreateCertificateAuthorityAuditReport">CreateCertificateAuthorityAuditReport</a></code> | <code>string</code> | [Write] acm-pca:CreateCertificateAuthorityAuditReport. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.CreatePermission">CreatePermission</a></code> | <code>string</code> | [PermissionManagement] acm-pca:CreatePermission. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.DeleteCertificateAuthority">DeleteCertificateAuthority</a></code> | <code>string</code> | [Write] acm-pca:DeleteCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.DeletePermission">DeletePermission</a></code> | <code>string</code> | [PermissionManagement] acm-pca:DeletePermission. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [PermissionManagement] acm-pca:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.DescribeCertificateAuthority">DescribeCertificateAuthority</a></code> | <code>string</code> | [Read] acm-pca:DescribeCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.DescribeCertificateAuthorityAuditReport">DescribeCertificateAuthorityAuditReport</a></code> | <code>string</code> | [Read] acm-pca:DescribeCertificateAuthorityAuditReport. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.ImportCertificateAuthorityCertificate">ImportCertificateAuthorityCertificate</a></code> | <code>string</code> | [Write] acm-pca:ImportCertificateAuthorityCertificate. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.IssueCertificate">IssueCertificate</a></code> | <code>string</code> | [Write] acm-pca:IssueCertificate. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.ListCertificateAuthorities">ListCertificateAuthorities</a></code> | <code>string</code> | [List] acm-pca:ListCertificateAuthorities. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.ListPermissions">ListPermissions</a></code> | <code>string</code> | [Read] acm-pca:ListPermissions. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.ListTags">ListTags</a></code> | <code>string</code> | [Read] acm-pca:ListTags. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.PutPolicy">PutPolicy</a></code> | <code>string</code> | [PermissionManagement] acm-pca:PutPolicy. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.RestoreCertificateAuthority">RestoreCertificateAuthority</a></code> | <code>string</code> | [Write] acm-pca:RestoreCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.RevokeCertificate">RevokeCertificate</a></code> | <code>string</code> | [Write] acm-pca:RevokeCertificate. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.TagCertificateAuthority">TagCertificateAuthority</a></code> | <code>string</code> | [Tagging] acm-pca:TagCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.UntagCertificateAuthority">UntagCertificateAuthority</a></code> | <code>string</code> | [Tagging] acm-pca:UntagCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaActions.property.UpdateCertificateAuthority">UpdateCertificateAuthority</a></code> | <code>string</code> | [Write] acm-pca:UpdateCertificateAuthority. |

---

##### `actionGetCertificate`<sup>Required</sup> <a name="actionGetCertificate" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.actionGetCertificate"></a>

```typescript
public readonly actionGetCertificate: string;
```

- *Type:* string

[Read] acm-pca:GetCertificate.

---

##### `actionGetCertificateAuthorityCertificate`<sup>Required</sup> <a name="actionGetCertificateAuthorityCertificate" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.actionGetCertificateAuthorityCertificate"></a>

```typescript
public readonly actionGetCertificateAuthorityCertificate: string;
```

- *Type:* string

[Read] acm-pca:GetCertificateAuthorityCertificate.

---

##### `actionGetCertificateAuthorityCsr`<sup>Required</sup> <a name="actionGetCertificateAuthorityCsr" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.actionGetCertificateAuthorityCsr"></a>

```typescript
public readonly actionGetCertificateAuthorityCsr: string;
```

- *Type:* string

[Read] acm-pca:GetCertificateAuthorityCsr.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] acm-pca:GetPolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCertificateAuthority`<sup>Required</sup> <a name="CreateCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.CreateCertificateAuthority"></a>

```typescript
public readonly CreateCertificateAuthority: string;
```

- *Type:* string

[Write] acm-pca:CreateCertificateAuthority.

---

##### `CreateCertificateAuthorityAuditReport`<sup>Required</sup> <a name="CreateCertificateAuthorityAuditReport" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.CreateCertificateAuthorityAuditReport"></a>

```typescript
public readonly CreateCertificateAuthorityAuditReport: string;
```

- *Type:* string

[Write] acm-pca:CreateCertificateAuthorityAuditReport.

---

##### `CreatePermission`<sup>Required</sup> <a name="CreatePermission" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.CreatePermission"></a>

```typescript
public readonly CreatePermission: string;
```

- *Type:* string

[PermissionManagement] acm-pca:CreatePermission.

---

##### `DeleteCertificateAuthority`<sup>Required</sup> <a name="DeleteCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.DeleteCertificateAuthority"></a>

```typescript
public readonly DeleteCertificateAuthority: string;
```

- *Type:* string

[Write] acm-pca:DeleteCertificateAuthority.

---

##### `DeletePermission`<sup>Required</sup> <a name="DeletePermission" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.DeletePermission"></a>

```typescript
public readonly DeletePermission: string;
```

- *Type:* string

[PermissionManagement] acm-pca:DeletePermission.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[PermissionManagement] acm-pca:DeletePolicy.

---

##### `DescribeCertificateAuthority`<sup>Required</sup> <a name="DescribeCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.DescribeCertificateAuthority"></a>

```typescript
public readonly DescribeCertificateAuthority: string;
```

- *Type:* string

[Read] acm-pca:DescribeCertificateAuthority.

---

##### `DescribeCertificateAuthorityAuditReport`<sup>Required</sup> <a name="DescribeCertificateAuthorityAuditReport" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.DescribeCertificateAuthorityAuditReport"></a>

```typescript
public readonly DescribeCertificateAuthorityAuditReport: string;
```

- *Type:* string

[Read] acm-pca:DescribeCertificateAuthorityAuditReport.

---

##### `ImportCertificateAuthorityCertificate`<sup>Required</sup> <a name="ImportCertificateAuthorityCertificate" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.ImportCertificateAuthorityCertificate"></a>

```typescript
public readonly ImportCertificateAuthorityCertificate: string;
```

- *Type:* string

[Write] acm-pca:ImportCertificateAuthorityCertificate.

---

##### `IssueCertificate`<sup>Required</sup> <a name="IssueCertificate" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.IssueCertificate"></a>

```typescript
public readonly IssueCertificate: string;
```

- *Type:* string

[Write] acm-pca:IssueCertificate.

---

##### `ListCertificateAuthorities`<sup>Required</sup> <a name="ListCertificateAuthorities" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.ListCertificateAuthorities"></a>

```typescript
public readonly ListCertificateAuthorities: string;
```

- *Type:* string

[List] acm-pca:ListCertificateAuthorities.

---

##### `ListPermissions`<sup>Required</sup> <a name="ListPermissions" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.ListPermissions"></a>

```typescript
public readonly ListPermissions: string;
```

- *Type:* string

[Read] acm-pca:ListPermissions.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[Read] acm-pca:ListTags.

---

##### `PutPolicy`<sup>Required</sup> <a name="PutPolicy" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.PutPolicy"></a>

```typescript
public readonly PutPolicy: string;
```

- *Type:* string

[PermissionManagement] acm-pca:PutPolicy.

---

##### `RestoreCertificateAuthority`<sup>Required</sup> <a name="RestoreCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.RestoreCertificateAuthority"></a>

```typescript
public readonly RestoreCertificateAuthority: string;
```

- *Type:* string

[Write] acm-pca:RestoreCertificateAuthority.

---

##### `RevokeCertificate`<sup>Required</sup> <a name="RevokeCertificate" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.RevokeCertificate"></a>

```typescript
public readonly RevokeCertificate: string;
```

- *Type:* string

[Write] acm-pca:RevokeCertificate.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagCertificateAuthority`<sup>Required</sup> <a name="TagCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.TagCertificateAuthority"></a>

```typescript
public readonly TagCertificateAuthority: string;
```

- *Type:* string

[Tagging] acm-pca:TagCertificateAuthority.

---

##### `UntagCertificateAuthority`<sup>Required</sup> <a name="UntagCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.UntagCertificateAuthority"></a>

```typescript
public readonly UntagCertificateAuthority: string;
```

- *Type:* string

[Tagging] acm-pca:UntagCertificateAuthority.

---

##### `UpdateCertificateAuthority`<sup>Required</sup> <a name="UpdateCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaActions.property.UpdateCertificateAuthority"></a>

```typescript
public readonly UpdateCertificateAuthority: string;
```

- *Type:* string

[Write] acm-pca:UpdateCertificateAuthority.

---

### ACMPcaConditions <a name="ACMPcaConditions" id="@cdk_utils/iam.acm_pca.ACMPcaConditions"></a>

Condition key constants and builders for acm-pca.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.Initializer"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

new acm_pca.ACMPcaConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.templateARN">templateARN</a></code> | Generates a condition block for `acm-pca:TemplateArn`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.requestTag"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

acm_pca.ACMPcaConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.resourceTag"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

acm_pca.ACMPcaConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.tagKeys"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

acm_pca.ACMPcaConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `templateARN` <a name="templateARN" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.templateARN"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

acm_pca.ACMPcaConditions.templateARN(value: string)
```

Generates a condition block for `acm-pca:TemplateArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.templateARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.property.CreateCertificateAuthorityConditionKeys">CreateCertificateAuthorityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCertificateAuthority action. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.property.IssueCertificateConditionKeys">IssueCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the IssueCertificate action. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.property.TagCertificateAuthorityConditionKeys">TagCertificateAuthorityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagCertificateAuthority action. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.property.TEMPLATE_ARN">TEMPLATE_ARN</a></code> | <code>string</code> | Condition key: acm-pca:TemplateArn (ARN). |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaConditions.property.UntagCertificateAuthorityConditionKeys">UntagCertificateAuthorityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagCertificateAuthority action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCertificateAuthorityConditionKeys`<sup>Required</sup> <a name="CreateCertificateAuthorityConditionKeys" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.property.CreateCertificateAuthorityConditionKeys"></a>

```typescript
public readonly CreateCertificateAuthorityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCertificateAuthority action.

---

##### `IssueCertificateConditionKeys`<sup>Required</sup> <a name="IssueCertificateConditionKeys" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.property.IssueCertificateConditionKeys"></a>

```typescript
public readonly IssueCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the IssueCertificate action.

---

##### `TagCertificateAuthorityConditionKeys`<sup>Required</sup> <a name="TagCertificateAuthorityConditionKeys" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.property.TagCertificateAuthorityConditionKeys"></a>

```typescript
public readonly TagCertificateAuthorityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagCertificateAuthority action.

---

##### `TEMPLATE_ARN`<sup>Required</sup> <a name="TEMPLATE_ARN" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.property.TEMPLATE_ARN"></a>

```typescript
public readonly TEMPLATE_ARN: string;
```

- *Type:* string

Condition key: acm-pca:TemplateArn (ARN).

---

##### `UntagCertificateAuthorityConditionKeys`<sup>Required</sup> <a name="UntagCertificateAuthorityConditionKeys" id="@cdk_utils/iam.acm_pca.ACMPcaConditions.property.UntagCertificateAuthorityConditionKeys"></a>

```typescript
public readonly UntagCertificateAuthorityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagCertificateAuthority action.

---

### ACMPcaOperations <a name="ACMPcaOperations" id="@cdk_utils/iam.acm_pca.ACMPcaOperations"></a>

API operation to required IAM actions mapping for acm-pca.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.Initializer"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

new acm_pca.ACMPcaOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.CreateCertificateAuthority">CreateCertificateAuthority</a></code> | <code>string[]</code> | IAM actions required for the CreateCertificateAuthority API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.CreateCertificateAuthorityAuditReport">CreateCertificateAuthorityAuditReport</a></code> | <code>string[]</code> | IAM actions required for the CreateCertificateAuthorityAuditReport API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.CreatePermission">CreatePermission</a></code> | <code>string[]</code> | IAM actions required for the CreatePermission API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.DeleteCertificateAuthority">DeleteCertificateAuthority</a></code> | <code>string[]</code> | IAM actions required for the DeleteCertificateAuthority API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.DeletePermission">DeletePermission</a></code> | <code>string[]</code> | IAM actions required for the DeletePermission API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.DescribeCertificateAuthority">DescribeCertificateAuthority</a></code> | <code>string[]</code> | IAM actions required for the DescribeCertificateAuthority API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.DescribeCertificateAuthorityAuditReport">DescribeCertificateAuthorityAuditReport</a></code> | <code>string[]</code> | IAM actions required for the DescribeCertificateAuthorityAuditReport API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.ImportCertificateAuthorityCertificate">ImportCertificateAuthorityCertificate</a></code> | <code>string[]</code> | IAM actions required for the ImportCertificateAuthorityCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.IssueCertificate">IssueCertificate</a></code> | <code>string[]</code> | IAM actions required for the IssueCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.ListCertificateAuthorities">ListCertificateAuthorities</a></code> | <code>string[]</code> | IAM actions required for the ListCertificateAuthorities API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.ListPermissions">ListPermissions</a></code> | <code>string[]</code> | IAM actions required for the ListPermissions API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.ListTags">ListTags</a></code> | <code>string[]</code> | IAM actions required for the ListTags API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.opGetCertificate">opGetCertificate</a></code> | <code>string[]</code> | IAM actions required for the GetCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.opGetCertificateAuthorityCertificate">opGetCertificateAuthorityCertificate</a></code> | <code>string[]</code> | IAM actions required for the GetCertificateAuthorityCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.opGetCertificateAuthorityCsr">opGetCertificateAuthorityCsr</a></code> | <code>string[]</code> | IAM actions required for the GetCertificateAuthorityCsr API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.PutPolicy">PutPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutPolicy API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.RestoreCertificateAuthority">RestoreCertificateAuthority</a></code> | <code>string[]</code> | IAM actions required for the RestoreCertificateAuthority API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.RevokeCertificate">RevokeCertificate</a></code> | <code>string[]</code> | IAM actions required for the RevokeCertificate API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.TagCertificateAuthority">TagCertificateAuthority</a></code> | <code>string[]</code> | IAM actions required for the TagCertificateAuthority API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.UntagCertificateAuthority">UntagCertificateAuthority</a></code> | <code>string[]</code> | IAM actions required for the UntagCertificateAuthority API call. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaOperations.property.UpdateCertificateAuthority">UpdateCertificateAuthority</a></code> | <code>string[]</code> | IAM actions required for the UpdateCertificateAuthority API call. |

---

##### `CreateCertificateAuthority`<sup>Required</sup> <a name="CreateCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.CreateCertificateAuthority"></a>

```typescript
public readonly CreateCertificateAuthority: string[];
```

- *Type:* string[]

IAM actions required for the CreateCertificateAuthority API call.

---

##### `CreateCertificateAuthorityAuditReport`<sup>Required</sup> <a name="CreateCertificateAuthorityAuditReport" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.CreateCertificateAuthorityAuditReport"></a>

```typescript
public readonly CreateCertificateAuthorityAuditReport: string[];
```

- *Type:* string[]

IAM actions required for the CreateCertificateAuthorityAuditReport API call.

---

##### `CreatePermission`<sup>Required</sup> <a name="CreatePermission" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.CreatePermission"></a>

```typescript
public readonly CreatePermission: string[];
```

- *Type:* string[]

IAM actions required for the CreatePermission API call.

---

##### `DeleteCertificateAuthority`<sup>Required</sup> <a name="DeleteCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.DeleteCertificateAuthority"></a>

```typescript
public readonly DeleteCertificateAuthority: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCertificateAuthority API call.

---

##### `DeletePermission`<sup>Required</sup> <a name="DeletePermission" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.DeletePermission"></a>

```typescript
public readonly DeletePermission: string[];
```

- *Type:* string[]

IAM actions required for the DeletePermission API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DescribeCertificateAuthority`<sup>Required</sup> <a name="DescribeCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.DescribeCertificateAuthority"></a>

```typescript
public readonly DescribeCertificateAuthority: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCertificateAuthority API call.

---

##### `DescribeCertificateAuthorityAuditReport`<sup>Required</sup> <a name="DescribeCertificateAuthorityAuditReport" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.DescribeCertificateAuthorityAuditReport"></a>

```typescript
public readonly DescribeCertificateAuthorityAuditReport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCertificateAuthorityAuditReport API call.

---

##### `ImportCertificateAuthorityCertificate`<sup>Required</sup> <a name="ImportCertificateAuthorityCertificate" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.ImportCertificateAuthorityCertificate"></a>

```typescript
public readonly ImportCertificateAuthorityCertificate: string[];
```

- *Type:* string[]

IAM actions required for the ImportCertificateAuthorityCertificate API call.

---

##### `IssueCertificate`<sup>Required</sup> <a name="IssueCertificate" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.IssueCertificate"></a>

```typescript
public readonly IssueCertificate: string[];
```

- *Type:* string[]

IAM actions required for the IssueCertificate API call.

---

##### `ListCertificateAuthorities`<sup>Required</sup> <a name="ListCertificateAuthorities" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.ListCertificateAuthorities"></a>

```typescript
public readonly ListCertificateAuthorities: string[];
```

- *Type:* string[]

IAM actions required for the ListCertificateAuthorities API call.

---

##### `ListPermissions`<sup>Required</sup> <a name="ListPermissions" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.ListPermissions"></a>

```typescript
public readonly ListPermissions: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissions API call.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.ListTags"></a>

```typescript
public readonly ListTags: string[];
```

- *Type:* string[]

IAM actions required for the ListTags API call.

---

##### `opGetCertificate`<sup>Required</sup> <a name="opGetCertificate" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.opGetCertificate"></a>

```typescript
public readonly opGetCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GetCertificate API call.

---

##### `opGetCertificateAuthorityCertificate`<sup>Required</sup> <a name="opGetCertificateAuthorityCertificate" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.opGetCertificateAuthorityCertificate"></a>

```typescript
public readonly opGetCertificateAuthorityCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GetCertificateAuthorityCertificate API call.

---

##### `opGetCertificateAuthorityCsr`<sup>Required</sup> <a name="opGetCertificateAuthorityCsr" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.opGetCertificateAuthorityCsr"></a>

```typescript
public readonly opGetCertificateAuthorityCsr: string[];
```

- *Type:* string[]

IAM actions required for the GetCertificateAuthorityCsr API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `PutPolicy`<sup>Required</sup> <a name="PutPolicy" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.PutPolicy"></a>

```typescript
public readonly PutPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutPolicy API call.

---

##### `RestoreCertificateAuthority`<sup>Required</sup> <a name="RestoreCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.RestoreCertificateAuthority"></a>

```typescript
public readonly RestoreCertificateAuthority: string[];
```

- *Type:* string[]

IAM actions required for the RestoreCertificateAuthority API call.

---

##### `RevokeCertificate`<sup>Required</sup> <a name="RevokeCertificate" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.RevokeCertificate"></a>

```typescript
public readonly RevokeCertificate: string[];
```

- *Type:* string[]

IAM actions required for the RevokeCertificate API call.

---

##### `TagCertificateAuthority`<sup>Required</sup> <a name="TagCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.TagCertificateAuthority"></a>

```typescript
public readonly TagCertificateAuthority: string[];
```

- *Type:* string[]

IAM actions required for the TagCertificateAuthority API call.

---

##### `UntagCertificateAuthority`<sup>Required</sup> <a name="UntagCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.UntagCertificateAuthority"></a>

```typescript
public readonly UntagCertificateAuthority: string[];
```

- *Type:* string[]

IAM actions required for the UntagCertificateAuthority API call.

---

##### `UpdateCertificateAuthority`<sup>Required</sup> <a name="UpdateCertificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaOperations.property.UpdateCertificateAuthority"></a>

```typescript
public readonly UpdateCertificateAuthority: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCertificateAuthority API call.

---

### ACMPcaResources <a name="ACMPcaResources" id="@cdk_utils/iam.acm_pca.ACMPcaResources"></a>

ARN builders, validators, and parsers for acm-pca resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.acm_pca.ACMPcaResources.Initializer"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

new acm_pca.ACMPcaResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaResources.certificateAuthority">certificateAuthority</a></code> | Builds an ARN for the certificate-authority resource. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaResources.isValidCertificateAuthorityArn">isValidCertificateAuthorityArn</a></code> | Validates whether a string is a valid ARN for the certificate-authority resource. |
| <code><a href="#@cdk_utils/iam.acm_pca.ACMPcaResources.parseCertificateAuthorityArn">parseCertificateAuthorityArn</a></code> | Parses a certificate-authority ARN into its components. |

---

##### `certificateAuthority` <a name="certificateAuthority" id="@cdk_utils/iam.acm_pca.ACMPcaResources.certificateAuthority"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

acm_pca.ACMPcaResources.certificateAuthority(props: ACMPcaCertificateAuthorityArnProps)
```

Builds an ARN for the certificate-authority resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.acm_pca.ACMPcaResources.certificateAuthority.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.acm_pca.ACMPcaCertificateAuthorityArnProps">ACMPcaCertificateAuthorityArnProps</a>

---

##### `isValidCertificateAuthorityArn` <a name="isValidCertificateAuthorityArn" id="@cdk_utils/iam.acm_pca.ACMPcaResources.isValidCertificateAuthorityArn"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

acm_pca.ACMPcaResources.isValidCertificateAuthorityArn(arn: string)
```

Validates whether a string is a valid ARN for the certificate-authority resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.acm_pca.ACMPcaResources.isValidCertificateAuthorityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCertificateAuthorityArn` <a name="parseCertificateAuthorityArn" id="@cdk_utils/iam.acm_pca.ACMPcaResources.parseCertificateAuthorityArn"></a>

```typescript
import { acm_pca } from '@cdk_utils/iam'

acm_pca.ACMPcaResources.parseCertificateAuthorityArn(arn: string)
```

Parses a certificate-authority ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.acm_pca.ACMPcaResources.parseCertificateAuthorityArn.parameter.arn"></a>

- *Type:* string

---




