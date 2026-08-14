# `payment_cryptography` Submodule <a name="`payment_cryptography` Submodule" id="@cdk_utils/iam.payment_cryptography"></a>


## Structs <a name="Structs" id="Structs"></a>

### PaymentCryptographyAliasArnComponents <a name="PaymentCryptographyAliasArnComponents" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnComponents"></a>

Parsed components of a alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnComponents.Initializer"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

const paymentCryptographyAliasArnComponents: payment_cryptography.PaymentCryptographyAliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnComponents.property.alias">alias</a></code> | <code>string</code> | The Alias component. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnComponents.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The Alias component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PaymentCryptographyAliasArnProps <a name="PaymentCryptographyAliasArnProps" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps"></a>

Properties for building a alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps.Initializer"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

const paymentCryptographyAliasArnProps: payment_cryptography.PaymentCryptographyAliasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps.property.alias">alias</a></code> | <code>string</code> | The Alias component of the ARN. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The Alias component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PaymentCryptographyApprovalTeamArnComponents <a name="PaymentCryptographyApprovalTeamArnComponents" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnComponents"></a>

Parsed components of a approval-team ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnComponents.Initializer"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

const paymentCryptographyApprovalTeamArnComponents: payment_cryptography.PaymentCryptographyApprovalTeamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnComponents.property.approvalTeamId">approvalTeamId</a></code> | <code>string</code> | The ApprovalTeamId component. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `approvalTeamId`<sup>Required</sup> <a name="approvalTeamId" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnComponents.property.approvalTeamId"></a>

```typescript
public readonly approvalTeamId: string;
```

- *Type:* string

The ApprovalTeamId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PaymentCryptographyApprovalTeamArnProps <a name="PaymentCryptographyApprovalTeamArnProps" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps"></a>

Properties for building a approval-team ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps.Initializer"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

const paymentCryptographyApprovalTeamArnProps: payment_cryptography.PaymentCryptographyApprovalTeamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps.property.approvalTeamId">approvalTeamId</a></code> | <code>string</code> | The ApprovalTeamId component of the ARN. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `approvalTeamId`<sup>Required</sup> <a name="approvalTeamId" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps.property.approvalTeamId"></a>

```typescript
public readonly approvalTeamId: string;
```

- *Type:* string

The ApprovalTeamId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PaymentCryptographyKeyArnComponents <a name="PaymentCryptographyKeyArnComponents" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnComponents"></a>

Parsed components of a key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnComponents.Initializer"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

const paymentCryptographyKeyArnComponents: payment_cryptography.PaymentCryptographyKeyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnComponents.property.keyId">keyId</a></code> | <code>string</code> | The KeyId component. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnComponents.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The KeyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PaymentCryptographyKeyArnProps <a name="PaymentCryptographyKeyArnProps" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps"></a>

Properties for building a key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps.Initializer"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

const paymentCryptographyKeyArnProps: payment_cryptography.PaymentCryptographyKeyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps.property.keyId">keyId</a></code> | <code>string</code> | The KeyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The KeyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PaymentCryptographyActions <a name="PaymentCryptographyActions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions"></a>

IAM action constants for the payment-cryptography service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.Initializer"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

new payment_cryptography.PaymentCryptographyActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetAlias">actionGetAlias</a></code> | <code>string</code> | [Read] payment-cryptography:GetAlias. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetCertificateSigningRequest">actionGetCertificateSigningRequest</a></code> | <code>string</code> | [Read] payment-cryptography:GetCertificateSigningRequest. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetDefaultKeyReplicationRegions">actionGetDefaultKeyReplicationRegions</a></code> | <code>string</code> | [Read] payment-cryptography:GetDefaultKeyReplicationRegions. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetKey">actionGetKey</a></code> | <code>string</code> | [Read] payment-cryptography:GetKey. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetMpaTeamAssociation">actionGetMpaTeamAssociation</a></code> | <code>string</code> | [Read] payment-cryptography:GetMpaTeamAssociation. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetParametersForExport">actionGetParametersForExport</a></code> | <code>string</code> | [Read] payment-cryptography:GetParametersForExport. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetParametersForImport">actionGetParametersForImport</a></code> | <code>string</code> | [Read] payment-cryptography:GetParametersForImport. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetPublicKeyCertificate">actionGetPublicKeyCertificate</a></code> | <code>string</code> | [Read] payment-cryptography:GetPublicKeyCertificate. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] payment-cryptography:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AddKeyReplicationRegions">AddKeyReplicationRegions</a></code> | <code>string</code> | [Write] payment-cryptography:AddKeyReplicationRegions. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AssociateMpaTeam">AssociateMpaTeam</a></code> | <code>string</code> | [Write] payment-cryptography:AssociateMpaTeam. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.CreateAlias">CreateAlias</a></code> | <code>string</code> | [Write] payment-cryptography:CreateAlias. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.CreateKey">CreateKey</a></code> | <code>string</code> | [Write] payment-cryptography:CreateKey. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DecryptData">DecryptData</a></code> | <code>string</code> | [Write] payment-cryptography:DecryptData. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DeleteAlias">DeleteAlias</a></code> | <code>string</code> | [Write] payment-cryptography:DeleteAlias. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DeleteKey">DeleteKey</a></code> | <code>string</code> | [Write] payment-cryptography:DeleteKey. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] payment-cryptography:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DisableDefaultKeyReplicationRegions">DisableDefaultKeyReplicationRegions</a></code> | <code>string</code> | [Write] payment-cryptography:DisableDefaultKeyReplicationRegions. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DisassociateMpaTeam">DisassociateMpaTeam</a></code> | <code>string</code> | [Write] payment-cryptography:DisassociateMpaTeam. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.EnableDefaultKeyReplicationRegions">EnableDefaultKeyReplicationRegions</a></code> | <code>string</code> | [Write] payment-cryptography:EnableDefaultKeyReplicationRegions. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.EncryptData">EncryptData</a></code> | <code>string</code> | [Write] payment-cryptography:EncryptData. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ExportKey">ExportKey</a></code> | <code>string</code> | [Write] payment-cryptography:ExportKey. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.GenerateAs2805KekValidation">GenerateAs2805KekValidation</a></code> | <code>string</code> | [Write] payment-cryptography:GenerateAs2805KekValidation. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.GenerateCardValidationData">GenerateCardValidationData</a></code> | <code>string</code> | [Write] payment-cryptography:GenerateCardValidationData. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.GenerateMac">GenerateMac</a></code> | <code>string</code> | [Write] payment-cryptography:GenerateMac. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.GenerateMacEmvPinChange">GenerateMacEmvPinChange</a></code> | <code>string</code> | [Write] payment-cryptography:GenerateMacEmvPinChange. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.GeneratePinData">GeneratePinData</a></code> | <code>string</code> | [Write] payment-cryptography:GeneratePinData. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ImportKey">ImportKey</a></code> | <code>string</code> | [Write] payment-cryptography:ImportKey. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ListAliases">ListAliases</a></code> | <code>string</code> | [List] payment-cryptography:ListAliases. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ListKeys">ListKeys</a></code> | <code>string</code> | [List] payment-cryptography:ListKeys. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] payment-cryptography:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] payment-cryptography:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ReEncryptData">ReEncryptData</a></code> | <code>string</code> | [Write] payment-cryptography:ReEncryptData. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.RemoveKeyReplicationRegions">RemoveKeyReplicationRegions</a></code> | <code>string</code> | [Write] payment-cryptography:RemoveKeyReplicationRegions. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.RestoreKey">RestoreKey</a></code> | <code>string</code> | [Write] payment-cryptography:RestoreKey. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.StartKeyUsage">StartKeyUsage</a></code> | <code>string</code> | [Write] payment-cryptography:StartKeyUsage. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.StopKeyUsage">StopKeyUsage</a></code> | <code>string</code> | [Write] payment-cryptography:StopKeyUsage. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] payment-cryptography:TagResource. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.TranslateKeyMaterial">TranslateKeyMaterial</a></code> | <code>string</code> | [Write] payment-cryptography:TranslateKeyMaterial. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.TranslatePinData">TranslatePinData</a></code> | <code>string</code> | [Write] payment-cryptography:TranslatePinData. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] payment-cryptography:UntagResource. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.UpdateAlias">UpdateAlias</a></code> | <code>string</code> | [Write] payment-cryptography:UpdateAlias. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.VerifyAuthRequestCryptogram">VerifyAuthRequestCryptogram</a></code> | <code>string</code> | [Write] payment-cryptography:VerifyAuthRequestCryptogram. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.VerifyCardValidationData">VerifyCardValidationData</a></code> | <code>string</code> | [Write] payment-cryptography:VerifyCardValidationData. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.VerifyMac">VerifyMac</a></code> | <code>string</code> | [Write] payment-cryptography:VerifyMac. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.VerifyPinData">VerifyPinData</a></code> | <code>string</code> | [Write] payment-cryptography:VerifyPinData. |

---

##### `actionGetAlias`<sup>Required</sup> <a name="actionGetAlias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetAlias"></a>

```typescript
public readonly actionGetAlias: string;
```

- *Type:* string

[Read] payment-cryptography:GetAlias.

---

##### `actionGetCertificateSigningRequest`<sup>Required</sup> <a name="actionGetCertificateSigningRequest" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetCertificateSigningRequest"></a>

```typescript
public readonly actionGetCertificateSigningRequest: string;
```

- *Type:* string

[Read] payment-cryptography:GetCertificateSigningRequest.

---

##### `actionGetDefaultKeyReplicationRegions`<sup>Required</sup> <a name="actionGetDefaultKeyReplicationRegions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetDefaultKeyReplicationRegions"></a>

```typescript
public readonly actionGetDefaultKeyReplicationRegions: string;
```

- *Type:* string

[Read] payment-cryptography:GetDefaultKeyReplicationRegions.

---

##### `actionGetKey`<sup>Required</sup> <a name="actionGetKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetKey"></a>

```typescript
public readonly actionGetKey: string;
```

- *Type:* string

[Read] payment-cryptography:GetKey.

---

##### `actionGetMpaTeamAssociation`<sup>Required</sup> <a name="actionGetMpaTeamAssociation" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetMpaTeamAssociation"></a>

```typescript
public readonly actionGetMpaTeamAssociation: string;
```

- *Type:* string

[Read] payment-cryptography:GetMpaTeamAssociation.

---

##### `actionGetParametersForExport`<sup>Required</sup> <a name="actionGetParametersForExport" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetParametersForExport"></a>

```typescript
public readonly actionGetParametersForExport: string;
```

- *Type:* string

[Read] payment-cryptography:GetParametersForExport.

---

##### `actionGetParametersForImport`<sup>Required</sup> <a name="actionGetParametersForImport" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetParametersForImport"></a>

```typescript
public readonly actionGetParametersForImport: string;
```

- *Type:* string

[Read] payment-cryptography:GetParametersForImport.

---

##### `actionGetPublicKeyCertificate`<sup>Required</sup> <a name="actionGetPublicKeyCertificate" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetPublicKeyCertificate"></a>

```typescript
public readonly actionGetPublicKeyCertificate: string;
```

- *Type:* string

[Read] payment-cryptography:GetPublicKeyCertificate.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] payment-cryptography:GetResourcePolicy.

---

##### `AddKeyReplicationRegions`<sup>Required</sup> <a name="AddKeyReplicationRegions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AddKeyReplicationRegions"></a>

```typescript
public readonly AddKeyReplicationRegions: string;
```

- *Type:* string

[Write] payment-cryptography:AddKeyReplicationRegions.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateMpaTeam`<sup>Required</sup> <a name="AssociateMpaTeam" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.AssociateMpaTeam"></a>

```typescript
public readonly AssociateMpaTeam: string;
```

- *Type:* string

[Write] payment-cryptography:AssociateMpaTeam.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string;
```

- *Type:* string

[Write] payment-cryptography:CreateAlias.

---

##### `CreateKey`<sup>Required</sup> <a name="CreateKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.CreateKey"></a>

```typescript
public readonly CreateKey: string;
```

- *Type:* string

[Write] payment-cryptography:CreateKey.

---

##### `DecryptData`<sup>Required</sup> <a name="DecryptData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DecryptData"></a>

```typescript
public readonly DecryptData: string;
```

- *Type:* string

[Write] payment-cryptography:DecryptData.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string;
```

- *Type:* string

[Write] payment-cryptography:DeleteAlias.

---

##### `DeleteKey`<sup>Required</sup> <a name="DeleteKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DeleteKey"></a>

```typescript
public readonly DeleteKey: string;
```

- *Type:* string

[Write] payment-cryptography:DeleteKey.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] payment-cryptography:DeleteResourcePolicy.

---

##### `DisableDefaultKeyReplicationRegions`<sup>Required</sup> <a name="DisableDefaultKeyReplicationRegions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DisableDefaultKeyReplicationRegions"></a>

```typescript
public readonly DisableDefaultKeyReplicationRegions: string;
```

- *Type:* string

[Write] payment-cryptography:DisableDefaultKeyReplicationRegions.

---

##### `DisassociateMpaTeam`<sup>Required</sup> <a name="DisassociateMpaTeam" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.DisassociateMpaTeam"></a>

```typescript
public readonly DisassociateMpaTeam: string;
```

- *Type:* string

[Write] payment-cryptography:DisassociateMpaTeam.

---

##### `EnableDefaultKeyReplicationRegions`<sup>Required</sup> <a name="EnableDefaultKeyReplicationRegions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.EnableDefaultKeyReplicationRegions"></a>

```typescript
public readonly EnableDefaultKeyReplicationRegions: string;
```

- *Type:* string

[Write] payment-cryptography:EnableDefaultKeyReplicationRegions.

---

##### `EncryptData`<sup>Required</sup> <a name="EncryptData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.EncryptData"></a>

```typescript
public readonly EncryptData: string;
```

- *Type:* string

[Write] payment-cryptography:EncryptData.

---

##### `ExportKey`<sup>Required</sup> <a name="ExportKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ExportKey"></a>

```typescript
public readonly ExportKey: string;
```

- *Type:* string

[Write] payment-cryptography:ExportKey.

---

##### `GenerateAs2805KekValidation`<sup>Required</sup> <a name="GenerateAs2805KekValidation" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.GenerateAs2805KekValidation"></a>

```typescript
public readonly GenerateAs2805KekValidation: string;
```

- *Type:* string

[Write] payment-cryptography:GenerateAs2805KekValidation.

---

##### `GenerateCardValidationData`<sup>Required</sup> <a name="GenerateCardValidationData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.GenerateCardValidationData"></a>

```typescript
public readonly GenerateCardValidationData: string;
```

- *Type:* string

[Write] payment-cryptography:GenerateCardValidationData.

---

##### `GenerateMac`<sup>Required</sup> <a name="GenerateMac" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.GenerateMac"></a>

```typescript
public readonly GenerateMac: string;
```

- *Type:* string

[Write] payment-cryptography:GenerateMac.

---

##### `GenerateMacEmvPinChange`<sup>Required</sup> <a name="GenerateMacEmvPinChange" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.GenerateMacEmvPinChange"></a>

```typescript
public readonly GenerateMacEmvPinChange: string;
```

- *Type:* string

[Write] payment-cryptography:GenerateMacEmvPinChange.

---

##### `GeneratePinData`<sup>Required</sup> <a name="GeneratePinData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.GeneratePinData"></a>

```typescript
public readonly GeneratePinData: string;
```

- *Type:* string

[Write] payment-cryptography:GeneratePinData.

---

##### `ImportKey`<sup>Required</sup> <a name="ImportKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ImportKey"></a>

```typescript
public readonly ImportKey: string;
```

- *Type:* string

[Write] payment-cryptography:ImportKey.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ListAliases"></a>

```typescript
public readonly ListAliases: string;
```

- *Type:* string

[List] payment-cryptography:ListAliases.

---

##### `ListKeys`<sup>Required</sup> <a name="ListKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ListKeys"></a>

```typescript
public readonly ListKeys: string;
```

- *Type:* string

[List] payment-cryptography:ListKeys.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] payment-cryptography:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] payment-cryptography:PutResourcePolicy.

---

##### `ReEncryptData`<sup>Required</sup> <a name="ReEncryptData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.ReEncryptData"></a>

```typescript
public readonly ReEncryptData: string;
```

- *Type:* string

[Write] payment-cryptography:ReEncryptData.

---

##### `RemoveKeyReplicationRegions`<sup>Required</sup> <a name="RemoveKeyReplicationRegions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.RemoveKeyReplicationRegions"></a>

```typescript
public readonly RemoveKeyReplicationRegions: string;
```

- *Type:* string

[Write] payment-cryptography:RemoveKeyReplicationRegions.

---

##### `RestoreKey`<sup>Required</sup> <a name="RestoreKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.RestoreKey"></a>

```typescript
public readonly RestoreKey: string;
```

- *Type:* string

[Write] payment-cryptography:RestoreKey.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartKeyUsage`<sup>Required</sup> <a name="StartKeyUsage" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.StartKeyUsage"></a>

```typescript
public readonly StartKeyUsage: string;
```

- *Type:* string

[Write] payment-cryptography:StartKeyUsage.

---

##### `StopKeyUsage`<sup>Required</sup> <a name="StopKeyUsage" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.StopKeyUsage"></a>

```typescript
public readonly StopKeyUsage: string;
```

- *Type:* string

[Write] payment-cryptography:StopKeyUsage.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] payment-cryptography:TagResource.

---

##### `TranslateKeyMaterial`<sup>Required</sup> <a name="TranslateKeyMaterial" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.TranslateKeyMaterial"></a>

```typescript
public readonly TranslateKeyMaterial: string;
```

- *Type:* string

[Write] payment-cryptography:TranslateKeyMaterial.

---

##### `TranslatePinData`<sup>Required</sup> <a name="TranslatePinData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.TranslatePinData"></a>

```typescript
public readonly TranslatePinData: string;
```

- *Type:* string

[Write] payment-cryptography:TranslatePinData.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] payment-cryptography:UntagResource.

---

##### `UpdateAlias`<sup>Required</sup> <a name="UpdateAlias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.UpdateAlias"></a>

```typescript
public readonly UpdateAlias: string;
```

- *Type:* string

[Write] payment-cryptography:UpdateAlias.

---

##### `VerifyAuthRequestCryptogram`<sup>Required</sup> <a name="VerifyAuthRequestCryptogram" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.VerifyAuthRequestCryptogram"></a>

```typescript
public readonly VerifyAuthRequestCryptogram: string;
```

- *Type:* string

[Write] payment-cryptography:VerifyAuthRequestCryptogram.

---

##### `VerifyCardValidationData`<sup>Required</sup> <a name="VerifyCardValidationData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.VerifyCardValidationData"></a>

```typescript
public readonly VerifyCardValidationData: string;
```

- *Type:* string

[Write] payment-cryptography:VerifyCardValidationData.

---

##### `VerifyMac`<sup>Required</sup> <a name="VerifyMac" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.VerifyMac"></a>

```typescript
public readonly VerifyMac: string;
```

- *Type:* string

[Write] payment-cryptography:VerifyMac.

---

##### `VerifyPinData`<sup>Required</sup> <a name="VerifyPinData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyActions.property.VerifyPinData"></a>

```typescript
public readonly VerifyPinData: string;
```

- *Type:* string

[Write] payment-cryptography:VerifyPinData.

---

### PaymentCryptographyConditions <a name="PaymentCryptographyConditions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions"></a>

Condition key constants and builders for payment-cryptography.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.Initializer"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

new payment_cryptography.PaymentCryptographyConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.certificateAuthorityPublicKeyIdentifier">certificateAuthorityPublicKeyIdentifier</a></code> | Generates a condition block for `payment-cryptography:CertificateAuthorityPublicKeyIdentifier`. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.importKeyMaterial">importKeyMaterial</a></code> | Generates a condition block for `payment-cryptography:ImportKeyMaterial`. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.keyAlgorithm">keyAlgorithm</a></code> | Generates a condition block for `payment-cryptography:KeyAlgorithm`. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.keyClass">keyClass</a></code> | Generates a condition block for `payment-cryptography:KeyClass`. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.keyUsage">keyUsage</a></code> | Generates a condition block for `payment-cryptography:KeyUsage`. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.requestAlias">requestAlias</a></code> | Generates a condition block for `payment-cryptography:RequestAlias`. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.resourceAliases">resourceAliases</a></code> | Generates a condition block for `payment-cryptography:ResourceAliases`. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.wrappingKeyIdentifier">wrappingKeyIdentifier</a></code> | Generates a condition block for `payment-cryptography:WrappingKeyIdentifier`. |

---

##### `certificateAuthorityPublicKeyIdentifier` <a name="certificateAuthorityPublicKeyIdentifier" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.certificateAuthorityPublicKeyIdentifier"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.certificateAuthorityPublicKeyIdentifier(value: string)
```

Generates a condition block for `payment-cryptography:CertificateAuthorityPublicKeyIdentifier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.certificateAuthorityPublicKeyIdentifier.parameter.value"></a>

- *Type:* string

---

##### `importKeyMaterial` <a name="importKeyMaterial" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.importKeyMaterial"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.importKeyMaterial(value: string)
```

Generates a condition block for `payment-cryptography:ImportKeyMaterial`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.importKeyMaterial.parameter.value"></a>

- *Type:* string

---

##### `keyAlgorithm` <a name="keyAlgorithm" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.keyAlgorithm"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.keyAlgorithm(value: string)
```

Generates a condition block for `payment-cryptography:KeyAlgorithm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.keyAlgorithm.parameter.value"></a>

- *Type:* string

---

##### `keyClass` <a name="keyClass" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.keyClass"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.keyClass(value: string)
```

Generates a condition block for `payment-cryptography:KeyClass`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.keyClass.parameter.value"></a>

- *Type:* string

---

##### `keyUsage` <a name="keyUsage" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.keyUsage"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.keyUsage(value: string)
```

Generates a condition block for `payment-cryptography:KeyUsage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.keyUsage.parameter.value"></a>

- *Type:* string

---

##### `requestAlias` <a name="requestAlias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.requestAlias"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.requestAlias(value: string)
```

Generates a condition block for `payment-cryptography:RequestAlias`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.requestAlias.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.requestTag"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceAliases` <a name="resourceAliases" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.resourceAliases"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.resourceAliases(values: string[])
```

Generates a condition block for `payment-cryptography:ResourceAliases`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.resourceAliases.parameter.values"></a>

- *Type:* string[]

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.resourceTag"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.tagKeys"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `wrappingKeyIdentifier` <a name="wrappingKeyIdentifier" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.wrappingKeyIdentifier"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyConditions.wrappingKeyIdentifier(value: string)
```

Generates a condition block for `payment-cryptography:WrappingKeyIdentifier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.wrappingKeyIdentifier.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.actionGetAliasConditionKeys">actionGetAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAlias action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.actionGetCertificateSigningRequestConditionKeys">actionGetCertificateSigningRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCertificateSigningRequest action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.actionGetKeyConditionKeys">actionGetKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetKey action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.actionGetPublicKeyCertificateConditionKeys">actionGetPublicKeyCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPublicKeyCertificate action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.AddKeyReplicationRegionsConditionKeys">AddKeyReplicationRegionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddKeyReplicationRegions action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.CERTIFICATE_AUTHORITY_PUBLIC_KEY_IDENTIFIER">CERTIFICATE_AUTHORITY_PUBLIC_KEY_IDENTIFIER</a></code> | <code>string</code> | Condition key: payment-cryptography:CertificateAuthorityPublicKeyIdentifier (String). |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.CreateKeyConditionKeys">CreateKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKey action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.DecryptDataConditionKeys">DecryptDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DecryptData action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.DeleteAliasConditionKeys">DeleteAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAlias action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.DeleteKeyConditionKeys">DeleteKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteKey action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.EncryptDataConditionKeys">EncryptDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EncryptData action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.ExportKeyConditionKeys">ExportKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExportKey action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.GenerateAs2805KekValidationConditionKeys">GenerateAs2805KekValidationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateAs2805KekValidation action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.GenerateCardValidationDataConditionKeys">GenerateCardValidationDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateCardValidationData action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.GenerateMacConditionKeys">GenerateMacConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateMac action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.GenerateMacEmvPinChangeConditionKeys">GenerateMacEmvPinChangeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateMacEmvPinChange action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.GeneratePinDataConditionKeys">GeneratePinDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GeneratePinData action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.IMPORT_KEY_MATERIAL">IMPORT_KEY_MATERIAL</a></code> | <code>string</code> | Condition key: payment-cryptography:ImportKeyMaterial (String). |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.ImportKeyConditionKeys">ImportKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportKey action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.KEY_ALGORITHM">KEY_ALGORITHM</a></code> | <code>string</code> | Condition key: payment-cryptography:KeyAlgorithm (String). |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.KEY_CLASS">KEY_CLASS</a></code> | <code>string</code> | Condition key: payment-cryptography:KeyClass (String). |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.KEY_USAGE">KEY_USAGE</a></code> | <code>string</code> | Condition key: payment-cryptography:KeyUsage (String). |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.ReEncryptDataConditionKeys">ReEncryptDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReEncryptData action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.RemoveKeyReplicationRegionsConditionKeys">RemoveKeyReplicationRegionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveKeyReplicationRegions action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.REQUEST_ALIAS">REQUEST_ALIAS</a></code> | <code>string</code> | Condition key: payment-cryptography:RequestAlias (String). |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.RESOURCE_ALIASES">RESOURCE_ALIASES</a></code> | <code>string</code> | Condition key: payment-cryptography:ResourceAliases (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.RestoreKeyConditionKeys">RestoreKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreKey action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.StartKeyUsageConditionKeys">StartKeyUsageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartKeyUsage action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.StopKeyUsageConditionKeys">StopKeyUsageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopKeyUsage action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.TranslateKeyMaterialConditionKeys">TranslateKeyMaterialConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TranslateKeyMaterial action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.TranslatePinDataConditionKeys">TranslatePinDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TranslatePinData action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.UpdateAliasConditionKeys">UpdateAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAlias action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.VerifyAuthRequestCryptogramConditionKeys">VerifyAuthRequestCryptogramConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyAuthRequestCryptogram action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.VerifyCardValidationDataConditionKeys">VerifyCardValidationDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyCardValidationData action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.VerifyMacConditionKeys">VerifyMacConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyMac action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.VerifyPinDataConditionKeys">VerifyPinDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyPinData action. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.WRAPPING_KEY_IDENTIFIER">WRAPPING_KEY_IDENTIFIER</a></code> | <code>string</code> | Condition key: payment-cryptography:WrappingKeyIdentifier (String). |

---

##### `actionGetAliasConditionKeys`<sup>Required</sup> <a name="actionGetAliasConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.actionGetAliasConditionKeys"></a>

```typescript
public readonly actionGetAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAlias action.

---

##### `actionGetCertificateSigningRequestConditionKeys`<sup>Required</sup> <a name="actionGetCertificateSigningRequestConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.actionGetCertificateSigningRequestConditionKeys"></a>

```typescript
public readonly actionGetCertificateSigningRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCertificateSigningRequest action.

---

##### `actionGetKeyConditionKeys`<sup>Required</sup> <a name="actionGetKeyConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.actionGetKeyConditionKeys"></a>

```typescript
public readonly actionGetKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetKey action.

---

##### `actionGetPublicKeyCertificateConditionKeys`<sup>Required</sup> <a name="actionGetPublicKeyCertificateConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.actionGetPublicKeyCertificateConditionKeys"></a>

```typescript
public readonly actionGetPublicKeyCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPublicKeyCertificate action.

---

##### `AddKeyReplicationRegionsConditionKeys`<sup>Required</sup> <a name="AddKeyReplicationRegionsConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.AddKeyReplicationRegionsConditionKeys"></a>

```typescript
public readonly AddKeyReplicationRegionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddKeyReplicationRegions action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CERTIFICATE_AUTHORITY_PUBLIC_KEY_IDENTIFIER`<sup>Required</sup> <a name="CERTIFICATE_AUTHORITY_PUBLIC_KEY_IDENTIFIER" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.CERTIFICATE_AUTHORITY_PUBLIC_KEY_IDENTIFIER"></a>

```typescript
public readonly CERTIFICATE_AUTHORITY_PUBLIC_KEY_IDENTIFIER: string;
```

- *Type:* string

Condition key: payment-cryptography:CertificateAuthorityPublicKeyIdentifier (String).

---

##### `CreateKeyConditionKeys`<sup>Required</sup> <a name="CreateKeyConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.CreateKeyConditionKeys"></a>

```typescript
public readonly CreateKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKey action.

---

##### `DecryptDataConditionKeys`<sup>Required</sup> <a name="DecryptDataConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.DecryptDataConditionKeys"></a>

```typescript
public readonly DecryptDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DecryptData action.

---

##### `DeleteAliasConditionKeys`<sup>Required</sup> <a name="DeleteAliasConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.DeleteAliasConditionKeys"></a>

```typescript
public readonly DeleteAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAlias action.

---

##### `DeleteKeyConditionKeys`<sup>Required</sup> <a name="DeleteKeyConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.DeleteKeyConditionKeys"></a>

```typescript
public readonly DeleteKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteKey action.

---

##### `EncryptDataConditionKeys`<sup>Required</sup> <a name="EncryptDataConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.EncryptDataConditionKeys"></a>

```typescript
public readonly EncryptDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EncryptData action.

---

##### `ExportKeyConditionKeys`<sup>Required</sup> <a name="ExportKeyConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.ExportKeyConditionKeys"></a>

```typescript
public readonly ExportKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExportKey action.

---

##### `GenerateAs2805KekValidationConditionKeys`<sup>Required</sup> <a name="GenerateAs2805KekValidationConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.GenerateAs2805KekValidationConditionKeys"></a>

```typescript
public readonly GenerateAs2805KekValidationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateAs2805KekValidation action.

---

##### `GenerateCardValidationDataConditionKeys`<sup>Required</sup> <a name="GenerateCardValidationDataConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.GenerateCardValidationDataConditionKeys"></a>

```typescript
public readonly GenerateCardValidationDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateCardValidationData action.

---

##### `GenerateMacConditionKeys`<sup>Required</sup> <a name="GenerateMacConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.GenerateMacConditionKeys"></a>

```typescript
public readonly GenerateMacConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateMac action.

---

##### `GenerateMacEmvPinChangeConditionKeys`<sup>Required</sup> <a name="GenerateMacEmvPinChangeConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.GenerateMacEmvPinChangeConditionKeys"></a>

```typescript
public readonly GenerateMacEmvPinChangeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateMacEmvPinChange action.

---

##### `GeneratePinDataConditionKeys`<sup>Required</sup> <a name="GeneratePinDataConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.GeneratePinDataConditionKeys"></a>

```typescript
public readonly GeneratePinDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GeneratePinData action.

---

##### `IMPORT_KEY_MATERIAL`<sup>Required</sup> <a name="IMPORT_KEY_MATERIAL" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.IMPORT_KEY_MATERIAL"></a>

```typescript
public readonly IMPORT_KEY_MATERIAL: string;
```

- *Type:* string

Condition key: payment-cryptography:ImportKeyMaterial (String).

---

##### `ImportKeyConditionKeys`<sup>Required</sup> <a name="ImportKeyConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.ImportKeyConditionKeys"></a>

```typescript
public readonly ImportKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportKey action.

---

##### `KEY_ALGORITHM`<sup>Required</sup> <a name="KEY_ALGORITHM" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.KEY_ALGORITHM"></a>

```typescript
public readonly KEY_ALGORITHM: string;
```

- *Type:* string

Condition key: payment-cryptography:KeyAlgorithm (String).

---

##### `KEY_CLASS`<sup>Required</sup> <a name="KEY_CLASS" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.KEY_CLASS"></a>

```typescript
public readonly KEY_CLASS: string;
```

- *Type:* string

Condition key: payment-cryptography:KeyClass (String).

---

##### `KEY_USAGE`<sup>Required</sup> <a name="KEY_USAGE" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.KEY_USAGE"></a>

```typescript
public readonly KEY_USAGE: string;
```

- *Type:* string

Condition key: payment-cryptography:KeyUsage (String).

---

##### `ReEncryptDataConditionKeys`<sup>Required</sup> <a name="ReEncryptDataConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.ReEncryptDataConditionKeys"></a>

```typescript
public readonly ReEncryptDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReEncryptData action.

---

##### `RemoveKeyReplicationRegionsConditionKeys`<sup>Required</sup> <a name="RemoveKeyReplicationRegionsConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.RemoveKeyReplicationRegionsConditionKeys"></a>

```typescript
public readonly RemoveKeyReplicationRegionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveKeyReplicationRegions action.

---

##### `REQUEST_ALIAS`<sup>Required</sup> <a name="REQUEST_ALIAS" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.REQUEST_ALIAS"></a>

```typescript
public readonly REQUEST_ALIAS: string;
```

- *Type:* string

Condition key: payment-cryptography:RequestAlias (String).

---

##### `RESOURCE_ALIASES`<sup>Required</sup> <a name="RESOURCE_ALIASES" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.RESOURCE_ALIASES"></a>

```typescript
public readonly RESOURCE_ALIASES: string;
```

- *Type:* string

Condition key: payment-cryptography:ResourceAliases (ArrayOfString).

---

##### `RestoreKeyConditionKeys`<sup>Required</sup> <a name="RestoreKeyConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.RestoreKeyConditionKeys"></a>

```typescript
public readonly RestoreKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreKey action.

---

##### `StartKeyUsageConditionKeys`<sup>Required</sup> <a name="StartKeyUsageConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.StartKeyUsageConditionKeys"></a>

```typescript
public readonly StartKeyUsageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartKeyUsage action.

---

##### `StopKeyUsageConditionKeys`<sup>Required</sup> <a name="StopKeyUsageConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.StopKeyUsageConditionKeys"></a>

```typescript
public readonly StopKeyUsageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopKeyUsage action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TranslateKeyMaterialConditionKeys`<sup>Required</sup> <a name="TranslateKeyMaterialConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.TranslateKeyMaterialConditionKeys"></a>

```typescript
public readonly TranslateKeyMaterialConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TranslateKeyMaterial action.

---

##### `TranslatePinDataConditionKeys`<sup>Required</sup> <a name="TranslatePinDataConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.TranslatePinDataConditionKeys"></a>

```typescript
public readonly TranslatePinDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TranslatePinData action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAliasConditionKeys`<sup>Required</sup> <a name="UpdateAliasConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.UpdateAliasConditionKeys"></a>

```typescript
public readonly UpdateAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAlias action.

---

##### `VerifyAuthRequestCryptogramConditionKeys`<sup>Required</sup> <a name="VerifyAuthRequestCryptogramConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.VerifyAuthRequestCryptogramConditionKeys"></a>

```typescript
public readonly VerifyAuthRequestCryptogramConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyAuthRequestCryptogram action.

---

##### `VerifyCardValidationDataConditionKeys`<sup>Required</sup> <a name="VerifyCardValidationDataConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.VerifyCardValidationDataConditionKeys"></a>

```typescript
public readonly VerifyCardValidationDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyCardValidationData action.

---

##### `VerifyMacConditionKeys`<sup>Required</sup> <a name="VerifyMacConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.VerifyMacConditionKeys"></a>

```typescript
public readonly VerifyMacConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyMac action.

---

##### `VerifyPinDataConditionKeys`<sup>Required</sup> <a name="VerifyPinDataConditionKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.VerifyPinDataConditionKeys"></a>

```typescript
public readonly VerifyPinDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyPinData action.

---

##### `WRAPPING_KEY_IDENTIFIER`<sup>Required</sup> <a name="WRAPPING_KEY_IDENTIFIER" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyConditions.property.WRAPPING_KEY_IDENTIFIER"></a>

```typescript
public readonly WRAPPING_KEY_IDENTIFIER: string;
```

- *Type:* string

Condition key: payment-cryptography:WrappingKeyIdentifier (String).

---

### PaymentCryptographyOperations <a name="PaymentCryptographyOperations" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations"></a>

API operation to required IAM actions mapping for payment-cryptography.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.Initializer"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

new payment_cryptography.PaymentCryptographyOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.AddKeyReplicationRegions">AddKeyReplicationRegions</a></code> | <code>string[]</code> | IAM actions required for the AddKeyReplicationRegions API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.AssociateMpaTeam">AssociateMpaTeam</a></code> | <code>string[]</code> | IAM actions required for the AssociateMpaTeam API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.CreateAlias">CreateAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateAlias API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.CreateKey">CreateKey</a></code> | <code>string[]</code> | IAM actions required for the CreateKey API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DecryptData">DecryptData</a></code> | <code>string[]</code> | IAM actions required for the DecryptData API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DeleteAlias">DeleteAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlias API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DeleteKey">DeleteKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteKey API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DisableDefaultKeyReplicationRegions">DisableDefaultKeyReplicationRegions</a></code> | <code>string[]</code> | IAM actions required for the DisableDefaultKeyReplicationRegions API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DisassociateMpaTeam">DisassociateMpaTeam</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMpaTeam API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.EnableDefaultKeyReplicationRegions">EnableDefaultKeyReplicationRegions</a></code> | <code>string[]</code> | IAM actions required for the EnableDefaultKeyReplicationRegions API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.EncryptData">EncryptData</a></code> | <code>string[]</code> | IAM actions required for the EncryptData API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ExportKey">ExportKey</a></code> | <code>string[]</code> | IAM actions required for the ExportKey API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GenerateAs2805KekValidation">GenerateAs2805KekValidation</a></code> | <code>string[]</code> | IAM actions required for the GenerateAs2805KekValidation API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GenerateAuthRequestCryptogram">GenerateAuthRequestCryptogram</a></code> | <code>string[]</code> | IAM actions required for the GenerateAuthRequestCryptogram API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GenerateCardValidationData">GenerateCardValidationData</a></code> | <code>string[]</code> | IAM actions required for the GenerateCardValidationData API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GenerateMac">GenerateMac</a></code> | <code>string[]</code> | IAM actions required for the GenerateMac API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GenerateMacEmvPinChange">GenerateMacEmvPinChange</a></code> | <code>string[]</code> | IAM actions required for the GenerateMacEmvPinChange API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GeneratePinData">GeneratePinData</a></code> | <code>string[]</code> | IAM actions required for the GeneratePinData API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ImportKey">ImportKey</a></code> | <code>string[]</code> | IAM actions required for the ImportKey API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ListAliases">ListAliases</a></code> | <code>string[]</code> | IAM actions required for the ListAliases API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ListKeys">ListKeys</a></code> | <code>string[]</code> | IAM actions required for the ListKeys API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetAlias">opGetAlias</a></code> | <code>string[]</code> | IAM actions required for the GetAlias API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetCertificateSigningRequest">opGetCertificateSigningRequest</a></code> | <code>string[]</code> | IAM actions required for the GetCertificateSigningRequest API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetDefaultKeyReplicationRegions">opGetDefaultKeyReplicationRegions</a></code> | <code>string[]</code> | IAM actions required for the GetDefaultKeyReplicationRegions API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetKey">opGetKey</a></code> | <code>string[]</code> | IAM actions required for the GetKey API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetMpaTeamAssociation">opGetMpaTeamAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetMpaTeamAssociation API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetParametersForExport">opGetParametersForExport</a></code> | <code>string[]</code> | IAM actions required for the GetParametersForExport API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetParametersForImport">opGetParametersForImport</a></code> | <code>string[]</code> | IAM actions required for the GetParametersForImport API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetPublicKeyCertificate">opGetPublicKeyCertificate</a></code> | <code>string[]</code> | IAM actions required for the GetPublicKeyCertificate API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ReEncryptData">ReEncryptData</a></code> | <code>string[]</code> | IAM actions required for the ReEncryptData API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.RemoveKeyReplicationRegions">RemoveKeyReplicationRegions</a></code> | <code>string[]</code> | IAM actions required for the RemoveKeyReplicationRegions API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.RestoreKey">RestoreKey</a></code> | <code>string[]</code> | IAM actions required for the RestoreKey API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.StartKeyUsage">StartKeyUsage</a></code> | <code>string[]</code> | IAM actions required for the StartKeyUsage API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.StopKeyUsage">StopKeyUsage</a></code> | <code>string[]</code> | IAM actions required for the StopKeyUsage API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.TranslateKeyMaterial">TranslateKeyMaterial</a></code> | <code>string[]</code> | IAM actions required for the TranslateKeyMaterial API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.TranslatePinData">TranslatePinData</a></code> | <code>string[]</code> | IAM actions required for the TranslatePinData API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.UpdateAlias">UpdateAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateAlias API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.VerifyAuthRequestCryptogram">VerifyAuthRequestCryptogram</a></code> | <code>string[]</code> | IAM actions required for the VerifyAuthRequestCryptogram API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.VerifyCardValidationData">VerifyCardValidationData</a></code> | <code>string[]</code> | IAM actions required for the VerifyCardValidationData API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.VerifyMac">VerifyMac</a></code> | <code>string[]</code> | IAM actions required for the VerifyMac API call. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.VerifyPinData">VerifyPinData</a></code> | <code>string[]</code> | IAM actions required for the VerifyPinData API call. |

---

##### `AddKeyReplicationRegions`<sup>Required</sup> <a name="AddKeyReplicationRegions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.AddKeyReplicationRegions"></a>

```typescript
public readonly AddKeyReplicationRegions: string[];
```

- *Type:* string[]

IAM actions required for the AddKeyReplicationRegions API call.

---

##### `AssociateMpaTeam`<sup>Required</sup> <a name="AssociateMpaTeam" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.AssociateMpaTeam"></a>

```typescript
public readonly AssociateMpaTeam: string[];
```

- *Type:* string[]

IAM actions required for the AssociateMpaTeam API call.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateAlias API call.

---

##### `CreateKey`<sup>Required</sup> <a name="CreateKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.CreateKey"></a>

```typescript
public readonly CreateKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateKey API call.

---

##### `DecryptData`<sup>Required</sup> <a name="DecryptData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DecryptData"></a>

```typescript
public readonly DecryptData: string[];
```

- *Type:* string[]

IAM actions required for the DecryptData API call.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlias API call.

---

##### `DeleteKey`<sup>Required</sup> <a name="DeleteKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DeleteKey"></a>

```typescript
public readonly DeleteKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKey API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DisableDefaultKeyReplicationRegions`<sup>Required</sup> <a name="DisableDefaultKeyReplicationRegions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DisableDefaultKeyReplicationRegions"></a>

```typescript
public readonly DisableDefaultKeyReplicationRegions: string[];
```

- *Type:* string[]

IAM actions required for the DisableDefaultKeyReplicationRegions API call.

---

##### `DisassociateMpaTeam`<sup>Required</sup> <a name="DisassociateMpaTeam" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.DisassociateMpaTeam"></a>

```typescript
public readonly DisassociateMpaTeam: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMpaTeam API call.

---

##### `EnableDefaultKeyReplicationRegions`<sup>Required</sup> <a name="EnableDefaultKeyReplicationRegions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.EnableDefaultKeyReplicationRegions"></a>

```typescript
public readonly EnableDefaultKeyReplicationRegions: string[];
```

- *Type:* string[]

IAM actions required for the EnableDefaultKeyReplicationRegions API call.

---

##### `EncryptData`<sup>Required</sup> <a name="EncryptData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.EncryptData"></a>

```typescript
public readonly EncryptData: string[];
```

- *Type:* string[]

IAM actions required for the EncryptData API call.

---

##### `ExportKey`<sup>Required</sup> <a name="ExportKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ExportKey"></a>

```typescript
public readonly ExportKey: string[];
```

- *Type:* string[]

IAM actions required for the ExportKey API call.

---

##### `GenerateAs2805KekValidation`<sup>Required</sup> <a name="GenerateAs2805KekValidation" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GenerateAs2805KekValidation"></a>

```typescript
public readonly GenerateAs2805KekValidation: string[];
```

- *Type:* string[]

IAM actions required for the GenerateAs2805KekValidation API call.

---

##### `GenerateAuthRequestCryptogram`<sup>Required</sup> <a name="GenerateAuthRequestCryptogram" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GenerateAuthRequestCryptogram"></a>

```typescript
public readonly GenerateAuthRequestCryptogram: string[];
```

- *Type:* string[]

IAM actions required for the GenerateAuthRequestCryptogram API call.

---

##### `GenerateCardValidationData`<sup>Required</sup> <a name="GenerateCardValidationData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GenerateCardValidationData"></a>

```typescript
public readonly GenerateCardValidationData: string[];
```

- *Type:* string[]

IAM actions required for the GenerateCardValidationData API call.

---

##### `GenerateMac`<sup>Required</sup> <a name="GenerateMac" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GenerateMac"></a>

```typescript
public readonly GenerateMac: string[];
```

- *Type:* string[]

IAM actions required for the GenerateMac API call.

---

##### `GenerateMacEmvPinChange`<sup>Required</sup> <a name="GenerateMacEmvPinChange" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GenerateMacEmvPinChange"></a>

```typescript
public readonly GenerateMacEmvPinChange: string[];
```

- *Type:* string[]

IAM actions required for the GenerateMacEmvPinChange API call.

---

##### `GeneratePinData`<sup>Required</sup> <a name="GeneratePinData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.GeneratePinData"></a>

```typescript
public readonly GeneratePinData: string[];
```

- *Type:* string[]

IAM actions required for the GeneratePinData API call.

---

##### `ImportKey`<sup>Required</sup> <a name="ImportKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ImportKey"></a>

```typescript
public readonly ImportKey: string[];
```

- *Type:* string[]

IAM actions required for the ImportKey API call.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ListAliases"></a>

```typescript
public readonly ListAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListAliases API call.

---

##### `ListKeys`<sup>Required</sup> <a name="ListKeys" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ListKeys"></a>

```typescript
public readonly ListKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListKeys API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAlias`<sup>Required</sup> <a name="opGetAlias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetAlias"></a>

```typescript
public readonly opGetAlias: string[];
```

- *Type:* string[]

IAM actions required for the GetAlias API call.

---

##### `opGetCertificateSigningRequest`<sup>Required</sup> <a name="opGetCertificateSigningRequest" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetCertificateSigningRequest"></a>

```typescript
public readonly opGetCertificateSigningRequest: string[];
```

- *Type:* string[]

IAM actions required for the GetCertificateSigningRequest API call.

---

##### `opGetDefaultKeyReplicationRegions`<sup>Required</sup> <a name="opGetDefaultKeyReplicationRegions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetDefaultKeyReplicationRegions"></a>

```typescript
public readonly opGetDefaultKeyReplicationRegions: string[];
```

- *Type:* string[]

IAM actions required for the GetDefaultKeyReplicationRegions API call.

---

##### `opGetKey`<sup>Required</sup> <a name="opGetKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetKey"></a>

```typescript
public readonly opGetKey: string[];
```

- *Type:* string[]

IAM actions required for the GetKey API call.

---

##### `opGetMpaTeamAssociation`<sup>Required</sup> <a name="opGetMpaTeamAssociation" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetMpaTeamAssociation"></a>

```typescript
public readonly opGetMpaTeamAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetMpaTeamAssociation API call.

---

##### `opGetParametersForExport`<sup>Required</sup> <a name="opGetParametersForExport" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetParametersForExport"></a>

```typescript
public readonly opGetParametersForExport: string[];
```

- *Type:* string[]

IAM actions required for the GetParametersForExport API call.

---

##### `opGetParametersForImport`<sup>Required</sup> <a name="opGetParametersForImport" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetParametersForImport"></a>

```typescript
public readonly opGetParametersForImport: string[];
```

- *Type:* string[]

IAM actions required for the GetParametersForImport API call.

---

##### `opGetPublicKeyCertificate`<sup>Required</sup> <a name="opGetPublicKeyCertificate" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetPublicKeyCertificate"></a>

```typescript
public readonly opGetPublicKeyCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GetPublicKeyCertificate API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `ReEncryptData`<sup>Required</sup> <a name="ReEncryptData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.ReEncryptData"></a>

```typescript
public readonly ReEncryptData: string[];
```

- *Type:* string[]

IAM actions required for the ReEncryptData API call.

---

##### `RemoveKeyReplicationRegions`<sup>Required</sup> <a name="RemoveKeyReplicationRegions" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.RemoveKeyReplicationRegions"></a>

```typescript
public readonly RemoveKeyReplicationRegions: string[];
```

- *Type:* string[]

IAM actions required for the RemoveKeyReplicationRegions API call.

---

##### `RestoreKey`<sup>Required</sup> <a name="RestoreKey" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.RestoreKey"></a>

```typescript
public readonly RestoreKey: string[];
```

- *Type:* string[]

IAM actions required for the RestoreKey API call.

---

##### `StartKeyUsage`<sup>Required</sup> <a name="StartKeyUsage" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.StartKeyUsage"></a>

```typescript
public readonly StartKeyUsage: string[];
```

- *Type:* string[]

IAM actions required for the StartKeyUsage API call.

---

##### `StopKeyUsage`<sup>Required</sup> <a name="StopKeyUsage" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.StopKeyUsage"></a>

```typescript
public readonly StopKeyUsage: string[];
```

- *Type:* string[]

IAM actions required for the StopKeyUsage API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TranslateKeyMaterial`<sup>Required</sup> <a name="TranslateKeyMaterial" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.TranslateKeyMaterial"></a>

```typescript
public readonly TranslateKeyMaterial: string[];
```

- *Type:* string[]

IAM actions required for the TranslateKeyMaterial API call.

---

##### `TranslatePinData`<sup>Required</sup> <a name="TranslatePinData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.TranslatePinData"></a>

```typescript
public readonly TranslatePinData: string[];
```

- *Type:* string[]

IAM actions required for the TranslatePinData API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAlias`<sup>Required</sup> <a name="UpdateAlias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.UpdateAlias"></a>

```typescript
public readonly UpdateAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAlias API call.

---

##### `VerifyAuthRequestCryptogram`<sup>Required</sup> <a name="VerifyAuthRequestCryptogram" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.VerifyAuthRequestCryptogram"></a>

```typescript
public readonly VerifyAuthRequestCryptogram: string[];
```

- *Type:* string[]

IAM actions required for the VerifyAuthRequestCryptogram API call.

---

##### `VerifyCardValidationData`<sup>Required</sup> <a name="VerifyCardValidationData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.VerifyCardValidationData"></a>

```typescript
public readonly VerifyCardValidationData: string[];
```

- *Type:* string[]

IAM actions required for the VerifyCardValidationData API call.

---

##### `VerifyMac`<sup>Required</sup> <a name="VerifyMac" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.VerifyMac"></a>

```typescript
public readonly VerifyMac: string[];
```

- *Type:* string[]

IAM actions required for the VerifyMac API call.

---

##### `VerifyPinData`<sup>Required</sup> <a name="VerifyPinData" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyOperations.property.VerifyPinData"></a>

```typescript
public readonly VerifyPinData: string[];
```

- *Type:* string[]

IAM actions required for the VerifyPinData API call.

---

### PaymentCryptographyResources <a name="PaymentCryptographyResources" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources"></a>

ARN builders, validators, and parsers for payment-cryptography resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.Initializer"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

new payment_cryptography.PaymentCryptographyResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.alias">alias</a></code> | Builds an ARN for the alias resource. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.approvalTeam">approvalTeam</a></code> | Builds an ARN for the approval-team resource. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.isValidAliasArn">isValidAliasArn</a></code> | Validates whether a string is a valid ARN for the alias resource. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.isValidApprovalTeamArn">isValidApprovalTeamArn</a></code> | Validates whether a string is a valid ARN for the approval-team resource. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.isValidKeyArn">isValidKeyArn</a></code> | Validates whether a string is a valid ARN for the key resource. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.key">key</a></code> | Builds an ARN for the key resource. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.parseAliasArn">parseAliasArn</a></code> | Parses a alias ARN into its components. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.parseApprovalTeamArn">parseApprovalTeamArn</a></code> | Parses a approval-team ARN into its components. |
| <code><a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.parseKeyArn">parseKeyArn</a></code> | Parses a key ARN into its components. |

---

##### `alias` <a name="alias" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.alias"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyResources.alias(props: PaymentCryptographyAliasArnProps)
```

Builds an ARN for the alias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.alias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyAliasArnProps">PaymentCryptographyAliasArnProps</a>

---

##### `approvalTeam` <a name="approvalTeam" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.approvalTeam"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyResources.approvalTeam(props: PaymentCryptographyApprovalTeamArnProps)
```

Builds an ARN for the approval-team resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.approvalTeam.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyApprovalTeamArnProps">PaymentCryptographyApprovalTeamArnProps</a>

---

##### `isValidAliasArn` <a name="isValidAliasArn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.isValidAliasArn"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyResources.isValidAliasArn(arn: string)
```

Validates whether a string is a valid ARN for the alias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.isValidAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApprovalTeamArn` <a name="isValidApprovalTeamArn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.isValidApprovalTeamArn"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyResources.isValidApprovalTeamArn(arn: string)
```

Validates whether a string is a valid ARN for the approval-team resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.isValidApprovalTeamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKeyArn` <a name="isValidKeyArn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.isValidKeyArn"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyResources.isValidKeyArn(arn: string)
```

Validates whether a string is a valid ARN for the key resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.isValidKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `key` <a name="key" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.key"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyResources.key(props: PaymentCryptographyKeyArnProps)
```

Builds an ARN for the key resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.key.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.payment_cryptography.PaymentCryptographyKeyArnProps">PaymentCryptographyKeyArnProps</a>

---

##### `parseAliasArn` <a name="parseAliasArn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.parseAliasArn"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyResources.parseAliasArn(arn: string)
```

Parses a alias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.parseAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApprovalTeamArn` <a name="parseApprovalTeamArn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.parseApprovalTeamArn"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyResources.parseApprovalTeamArn(arn: string)
```

Parses a approval-team ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.parseApprovalTeamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKeyArn` <a name="parseKeyArn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.parseKeyArn"></a>

```typescript
import { payment_cryptography } from '@cdk_utils/iam'

payment_cryptography.PaymentCryptographyResources.parseKeyArn(arn: string)
```

Parses a key ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.payment_cryptography.PaymentCryptographyResources.parseKeyArn.parameter.arn"></a>

- *Type:* string

---




