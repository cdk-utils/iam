# `kms` Submodule <a name="`kms` Submodule" id="@cdk_utils/iam.kms"></a>


## Structs <a name="Structs" id="Structs"></a>

### KMSAliasArnComponents <a name="KMSAliasArnComponents" id="@cdk_utils/iam.kms.KMSAliasArnComponents"></a>

Parsed components of a alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kms.KMSAliasArnComponents.Initializer"></a>

```typescript
import { kms } from '@cdk_utils/iam'

const kMSAliasArnComponents: kms.KMSAliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kms.KMSAliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kms.KMSAliasArnComponents.property.alias">alias</a></code> | <code>string</code> | The Alias component. |
| <code><a href="#@cdk_utils/iam.kms.KMSAliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kms.KMSAliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kms.KMSAliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdk_utils/iam.kms.KMSAliasArnComponents.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The Alias component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kms.KMSAliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kms.KMSAliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KMSAliasArnProps <a name="KMSAliasArnProps" id="@cdk_utils/iam.kms.KMSAliasArnProps"></a>

Properties for building a alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kms.KMSAliasArnProps.Initializer"></a>

```typescript
import { kms } from '@cdk_utils/iam'

const kMSAliasArnProps: kms.KMSAliasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kms.KMSAliasArnProps.property.alias">alias</a></code> | <code>string</code> | The Alias component of the ARN. |
| <code><a href="#@cdk_utils/iam.kms.KMSAliasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kms.KMSAliasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kms.KMSAliasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdk_utils/iam.kms.KMSAliasArnProps.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The Alias component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kms.KMSAliasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kms.KMSAliasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kms.KMSAliasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KMSKeyArnComponents <a name="KMSKeyArnComponents" id="@cdk_utils/iam.kms.KMSKeyArnComponents"></a>

Parsed components of a key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kms.KMSKeyArnComponents.Initializer"></a>

```typescript
import { kms } from '@cdk_utils/iam'

const kMSKeyArnComponents: kms.KMSKeyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kms.KMSKeyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kms.KMSKeyArnComponents.property.keyId">keyId</a></code> | <code>string</code> | The KeyId component. |
| <code><a href="#@cdk_utils/iam.kms.KMSKeyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kms.KMSKeyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kms.KMSKeyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdk_utils/iam.kms.KMSKeyArnComponents.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The KeyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kms.KMSKeyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kms.KMSKeyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KMSKeyArnProps <a name="KMSKeyArnProps" id="@cdk_utils/iam.kms.KMSKeyArnProps"></a>

Properties for building a key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kms.KMSKeyArnProps.Initializer"></a>

```typescript
import { kms } from '@cdk_utils/iam'

const kMSKeyArnProps: kms.KMSKeyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kms.KMSKeyArnProps.property.keyId">keyId</a></code> | <code>string</code> | The KeyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kms.KMSKeyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kms.KMSKeyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kms.KMSKeyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdk_utils/iam.kms.KMSKeyArnProps.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The KeyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kms.KMSKeyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kms.KMSKeyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kms.KMSKeyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### KMSActions <a name="KMSActions" id="@cdk_utils/iam.kms.KMSActions"></a>

IAM action constants for the kms service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kms.KMSActions.Initializer"></a>

```typescript
import { kms } from '@cdk_utils/iam'

new kms.KMSActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.actionGetKeyLastUsage">actionGetKeyLastUsage</a></code> | <code>string</code> | [Read] kms:GetKeyLastUsage. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.actionGetKeyPolicy">actionGetKeyPolicy</a></code> | <code>string</code> | [Read] kms:GetKeyPolicy. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.actionGetKeyRotationStatus">actionGetKeyRotationStatus</a></code> | <code>string</code> | [Read] kms:GetKeyRotationStatus. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.actionGetParametersForImport">actionGetParametersForImport</a></code> | <code>string</code> | [Read] kms:GetParametersForImport. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.actionGetPublicKey">actionGetPublicKey</a></code> | <code>string</code> | [Read] kms:GetPublicKey. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.CancelKeyDeletion">CancelKeyDeletion</a></code> | <code>string</code> | [Write] kms:CancelKeyDeletion. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ConnectCustomKeyStore">ConnectCustomKeyStore</a></code> | <code>string</code> | [Write] kms:ConnectCustomKeyStore. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.CreateAlias">CreateAlias</a></code> | <code>string</code> | [Write] kms:CreateAlias. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.CreateCustomKeyStore">CreateCustomKeyStore</a></code> | <code>string</code> | [Write] kms:CreateCustomKeyStore. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.CreateGrant">CreateGrant</a></code> | <code>string</code> | [PermissionManagement] kms:CreateGrant. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.CreateKey">CreateKey</a></code> | <code>string</code> | [Write] kms:CreateKey. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.Decrypt">Decrypt</a></code> | <code>string</code> | [Write] kms:Decrypt. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.DeleteAlias">DeleteAlias</a></code> | <code>string</code> | [Write] kms:DeleteAlias. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.DeleteCustomKeyStore">DeleteCustomKeyStore</a></code> | <code>string</code> | [Write] kms:DeleteCustomKeyStore. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.DeleteImportedKeyMaterial">DeleteImportedKeyMaterial</a></code> | <code>string</code> | [Write] kms:DeleteImportedKeyMaterial. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.DeriveSharedSecret">DeriveSharedSecret</a></code> | <code>string</code> | [Write] kms:DeriveSharedSecret. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.DescribeCustomKeyStores">DescribeCustomKeyStores</a></code> | <code>string</code> | [Read] kms:DescribeCustomKeyStores. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.DescribeKey">DescribeKey</a></code> | <code>string</code> | [Read] kms:DescribeKey. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.DisableKey">DisableKey</a></code> | <code>string</code> | [Write] kms:DisableKey. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.DisableKeyRotation">DisableKeyRotation</a></code> | <code>string</code> | [Write] kms:DisableKeyRotation. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.DisconnectCustomKeyStore">DisconnectCustomKeyStore</a></code> | <code>string</code> | [Write] kms:DisconnectCustomKeyStore. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.EnableKey">EnableKey</a></code> | <code>string</code> | [Write] kms:EnableKey. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.EnableKeyRotation">EnableKeyRotation</a></code> | <code>string</code> | [Write] kms:EnableKeyRotation. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.Encrypt">Encrypt</a></code> | <code>string</code> | [Write] kms:Encrypt. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.GenerateDataKey">GenerateDataKey</a></code> | <code>string</code> | [Write] kms:GenerateDataKey. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.GenerateDataKeyPair">GenerateDataKeyPair</a></code> | <code>string</code> | [Write] kms:GenerateDataKeyPair. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.GenerateDataKeyPairWithoutPlaintext">GenerateDataKeyPairWithoutPlaintext</a></code> | <code>string</code> | [Write] kms:GenerateDataKeyPairWithoutPlaintext. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.GenerateDataKeyWithoutPlaintext">GenerateDataKeyWithoutPlaintext</a></code> | <code>string</code> | [Write] kms:GenerateDataKeyWithoutPlaintext. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.GenerateMac">GenerateMac</a></code> | <code>string</code> | [Write] kms:GenerateMac. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.GenerateRandom">GenerateRandom</a></code> | <code>string</code> | [Write] kms:GenerateRandom. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ImportKeyMaterial">ImportKeyMaterial</a></code> | <code>string</code> | [Write] kms:ImportKeyMaterial. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ListAliases">ListAliases</a></code> | <code>string</code> | [List] kms:ListAliases. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ListGrants">ListGrants</a></code> | <code>string</code> | [List] kms:ListGrants. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ListKeyPolicies">ListKeyPolicies</a></code> | <code>string</code> | [List] kms:ListKeyPolicies. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ListKeyRotations">ListKeyRotations</a></code> | <code>string</code> | [List] kms:ListKeyRotations. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ListKeys">ListKeys</a></code> | <code>string</code> | [List] kms:ListKeys. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ListResourceTags">ListResourceTags</a></code> | <code>string</code> | [List] kms:ListResourceTags. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ListRetirableGrants">ListRetirableGrants</a></code> | <code>string</code> | [List] kms:ListRetirableGrants. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.PutKeyPolicy">PutKeyPolicy</a></code> | <code>string</code> | [PermissionManagement] kms:PutKeyPolicy. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ReEncryptFrom">ReEncryptFrom</a></code> | <code>string</code> | [Write] kms:ReEncryptFrom. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ReEncryptTo">ReEncryptTo</a></code> | <code>string</code> | [Write] kms:ReEncryptTo. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ReplicateKey">ReplicateKey</a></code> | <code>string</code> | [Write] kms:ReplicateKey. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.RetireGrant">RetireGrant</a></code> | <code>string</code> | [PermissionManagement] kms:RetireGrant. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.RevokeGrant">RevokeGrant</a></code> | <code>string</code> | [PermissionManagement] kms:RevokeGrant. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.RotateKeyOnDemand">RotateKeyOnDemand</a></code> | <code>string</code> | [Write] kms:RotateKeyOnDemand. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.ScheduleKeyDeletion">ScheduleKeyDeletion</a></code> | <code>string</code> | [Write] kms:ScheduleKeyDeletion. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.Sign">Sign</a></code> | <code>string</code> | [Write] kms:Sign. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.SynchronizeMultiRegionKey">SynchronizeMultiRegionKey</a></code> | <code>string</code> | [Write] kms:SynchronizeMultiRegionKey. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] kms:TagResource. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] kms:UntagResource. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.UpdateAlias">UpdateAlias</a></code> | <code>string</code> | [Write] kms:UpdateAlias. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.UpdateCustomKeyStore">UpdateCustomKeyStore</a></code> | <code>string</code> | [Write] kms:UpdateCustomKeyStore. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.UpdateKeyDescription">UpdateKeyDescription</a></code> | <code>string</code> | [Write] kms:UpdateKeyDescription. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.UpdatePrimaryRegion">UpdatePrimaryRegion</a></code> | <code>string</code> | [Write] kms:UpdatePrimaryRegion. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.Verify">Verify</a></code> | <code>string</code> | [Write] kms:Verify. |
| <code><a href="#@cdk_utils/iam.kms.KMSActions.property.VerifyMac">VerifyMac</a></code> | <code>string</code> | [Write] kms:VerifyMac. |

---

##### `actionGetKeyLastUsage`<sup>Required</sup> <a name="actionGetKeyLastUsage" id="@cdk_utils/iam.kms.KMSActions.property.actionGetKeyLastUsage"></a>

```typescript
public readonly actionGetKeyLastUsage: string;
```

- *Type:* string

[Read] kms:GetKeyLastUsage.

---

##### `actionGetKeyPolicy`<sup>Required</sup> <a name="actionGetKeyPolicy" id="@cdk_utils/iam.kms.KMSActions.property.actionGetKeyPolicy"></a>

```typescript
public readonly actionGetKeyPolicy: string;
```

- *Type:* string

[Read] kms:GetKeyPolicy.

---

##### `actionGetKeyRotationStatus`<sup>Required</sup> <a name="actionGetKeyRotationStatus" id="@cdk_utils/iam.kms.KMSActions.property.actionGetKeyRotationStatus"></a>

```typescript
public readonly actionGetKeyRotationStatus: string;
```

- *Type:* string

[Read] kms:GetKeyRotationStatus.

---

##### `actionGetParametersForImport`<sup>Required</sup> <a name="actionGetParametersForImport" id="@cdk_utils/iam.kms.KMSActions.property.actionGetParametersForImport"></a>

```typescript
public readonly actionGetParametersForImport: string;
```

- *Type:* string

[Read] kms:GetParametersForImport.

---

##### `actionGetPublicKey`<sup>Required</sup> <a name="actionGetPublicKey" id="@cdk_utils/iam.kms.KMSActions.property.actionGetPublicKey"></a>

```typescript
public readonly actionGetPublicKey: string;
```

- *Type:* string

[Read] kms:GetPublicKey.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.kms.KMSActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.kms.KMSActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.kms.KMSActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.kms.KMSActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.kms.KMSActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelKeyDeletion`<sup>Required</sup> <a name="CancelKeyDeletion" id="@cdk_utils/iam.kms.KMSActions.property.CancelKeyDeletion"></a>

```typescript
public readonly CancelKeyDeletion: string;
```

- *Type:* string

[Write] kms:CancelKeyDeletion.

---

##### `ConnectCustomKeyStore`<sup>Required</sup> <a name="ConnectCustomKeyStore" id="@cdk_utils/iam.kms.KMSActions.property.ConnectCustomKeyStore"></a>

```typescript
public readonly ConnectCustomKeyStore: string;
```

- *Type:* string

[Write] kms:ConnectCustomKeyStore.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.kms.KMSActions.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string;
```

- *Type:* string

[Write] kms:CreateAlias.

---

##### `CreateCustomKeyStore`<sup>Required</sup> <a name="CreateCustomKeyStore" id="@cdk_utils/iam.kms.KMSActions.property.CreateCustomKeyStore"></a>

```typescript
public readonly CreateCustomKeyStore: string;
```

- *Type:* string

[Write] kms:CreateCustomKeyStore.

---

##### `CreateGrant`<sup>Required</sup> <a name="CreateGrant" id="@cdk_utils/iam.kms.KMSActions.property.CreateGrant"></a>

```typescript
public readonly CreateGrant: string;
```

- *Type:* string

[PermissionManagement] kms:CreateGrant.

---

##### `CreateKey`<sup>Required</sup> <a name="CreateKey" id="@cdk_utils/iam.kms.KMSActions.property.CreateKey"></a>

```typescript
public readonly CreateKey: string;
```

- *Type:* string

[Write] kms:CreateKey.

---

##### `Decrypt`<sup>Required</sup> <a name="Decrypt" id="@cdk_utils/iam.kms.KMSActions.property.Decrypt"></a>

```typescript
public readonly Decrypt: string;
```

- *Type:* string

[Write] kms:Decrypt.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.kms.KMSActions.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string;
```

- *Type:* string

[Write] kms:DeleteAlias.

---

##### `DeleteCustomKeyStore`<sup>Required</sup> <a name="DeleteCustomKeyStore" id="@cdk_utils/iam.kms.KMSActions.property.DeleteCustomKeyStore"></a>

```typescript
public readonly DeleteCustomKeyStore: string;
```

- *Type:* string

[Write] kms:DeleteCustomKeyStore.

---

##### `DeleteImportedKeyMaterial`<sup>Required</sup> <a name="DeleteImportedKeyMaterial" id="@cdk_utils/iam.kms.KMSActions.property.DeleteImportedKeyMaterial"></a>

```typescript
public readonly DeleteImportedKeyMaterial: string;
```

- *Type:* string

[Write] kms:DeleteImportedKeyMaterial.

---

##### `DeriveSharedSecret`<sup>Required</sup> <a name="DeriveSharedSecret" id="@cdk_utils/iam.kms.KMSActions.property.DeriveSharedSecret"></a>

```typescript
public readonly DeriveSharedSecret: string;
```

- *Type:* string

[Write] kms:DeriveSharedSecret.

---

##### `DescribeCustomKeyStores`<sup>Required</sup> <a name="DescribeCustomKeyStores" id="@cdk_utils/iam.kms.KMSActions.property.DescribeCustomKeyStores"></a>

```typescript
public readonly DescribeCustomKeyStores: string;
```

- *Type:* string

[Read] kms:DescribeCustomKeyStores.

---

##### `DescribeKey`<sup>Required</sup> <a name="DescribeKey" id="@cdk_utils/iam.kms.KMSActions.property.DescribeKey"></a>

```typescript
public readonly DescribeKey: string;
```

- *Type:* string

[Read] kms:DescribeKey.

---

##### `DisableKey`<sup>Required</sup> <a name="DisableKey" id="@cdk_utils/iam.kms.KMSActions.property.DisableKey"></a>

```typescript
public readonly DisableKey: string;
```

- *Type:* string

[Write] kms:DisableKey.

---

##### `DisableKeyRotation`<sup>Required</sup> <a name="DisableKeyRotation" id="@cdk_utils/iam.kms.KMSActions.property.DisableKeyRotation"></a>

```typescript
public readonly DisableKeyRotation: string;
```

- *Type:* string

[Write] kms:DisableKeyRotation.

---

##### `DisconnectCustomKeyStore`<sup>Required</sup> <a name="DisconnectCustomKeyStore" id="@cdk_utils/iam.kms.KMSActions.property.DisconnectCustomKeyStore"></a>

```typescript
public readonly DisconnectCustomKeyStore: string;
```

- *Type:* string

[Write] kms:DisconnectCustomKeyStore.

---

##### `EnableKey`<sup>Required</sup> <a name="EnableKey" id="@cdk_utils/iam.kms.KMSActions.property.EnableKey"></a>

```typescript
public readonly EnableKey: string;
```

- *Type:* string

[Write] kms:EnableKey.

---

##### `EnableKeyRotation`<sup>Required</sup> <a name="EnableKeyRotation" id="@cdk_utils/iam.kms.KMSActions.property.EnableKeyRotation"></a>

```typescript
public readonly EnableKeyRotation: string;
```

- *Type:* string

[Write] kms:EnableKeyRotation.

---

##### `Encrypt`<sup>Required</sup> <a name="Encrypt" id="@cdk_utils/iam.kms.KMSActions.property.Encrypt"></a>

```typescript
public readonly Encrypt: string;
```

- *Type:* string

[Write] kms:Encrypt.

---

##### `GenerateDataKey`<sup>Required</sup> <a name="GenerateDataKey" id="@cdk_utils/iam.kms.KMSActions.property.GenerateDataKey"></a>

```typescript
public readonly GenerateDataKey: string;
```

- *Type:* string

[Write] kms:GenerateDataKey.

---

##### `GenerateDataKeyPair`<sup>Required</sup> <a name="GenerateDataKeyPair" id="@cdk_utils/iam.kms.KMSActions.property.GenerateDataKeyPair"></a>

```typescript
public readonly GenerateDataKeyPair: string;
```

- *Type:* string

[Write] kms:GenerateDataKeyPair.

---

##### `GenerateDataKeyPairWithoutPlaintext`<sup>Required</sup> <a name="GenerateDataKeyPairWithoutPlaintext" id="@cdk_utils/iam.kms.KMSActions.property.GenerateDataKeyPairWithoutPlaintext"></a>

```typescript
public readonly GenerateDataKeyPairWithoutPlaintext: string;
```

- *Type:* string

[Write] kms:GenerateDataKeyPairWithoutPlaintext.

---

##### `GenerateDataKeyWithoutPlaintext`<sup>Required</sup> <a name="GenerateDataKeyWithoutPlaintext" id="@cdk_utils/iam.kms.KMSActions.property.GenerateDataKeyWithoutPlaintext"></a>

```typescript
public readonly GenerateDataKeyWithoutPlaintext: string;
```

- *Type:* string

[Write] kms:GenerateDataKeyWithoutPlaintext.

---

##### `GenerateMac`<sup>Required</sup> <a name="GenerateMac" id="@cdk_utils/iam.kms.KMSActions.property.GenerateMac"></a>

```typescript
public readonly GenerateMac: string;
```

- *Type:* string

[Write] kms:GenerateMac.

---

##### `GenerateRandom`<sup>Required</sup> <a name="GenerateRandom" id="@cdk_utils/iam.kms.KMSActions.property.GenerateRandom"></a>

```typescript
public readonly GenerateRandom: string;
```

- *Type:* string

[Write] kms:GenerateRandom.

---

##### `ImportKeyMaterial`<sup>Required</sup> <a name="ImportKeyMaterial" id="@cdk_utils/iam.kms.KMSActions.property.ImportKeyMaterial"></a>

```typescript
public readonly ImportKeyMaterial: string;
```

- *Type:* string

[Write] kms:ImportKeyMaterial.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.kms.KMSActions.property.ListAliases"></a>

```typescript
public readonly ListAliases: string;
```

- *Type:* string

[List] kms:ListAliases.

---

##### `ListGrants`<sup>Required</sup> <a name="ListGrants" id="@cdk_utils/iam.kms.KMSActions.property.ListGrants"></a>

```typescript
public readonly ListGrants: string;
```

- *Type:* string

[List] kms:ListGrants.

---

##### `ListKeyPolicies`<sup>Required</sup> <a name="ListKeyPolicies" id="@cdk_utils/iam.kms.KMSActions.property.ListKeyPolicies"></a>

```typescript
public readonly ListKeyPolicies: string;
```

- *Type:* string

[List] kms:ListKeyPolicies.

---

##### `ListKeyRotations`<sup>Required</sup> <a name="ListKeyRotations" id="@cdk_utils/iam.kms.KMSActions.property.ListKeyRotations"></a>

```typescript
public readonly ListKeyRotations: string;
```

- *Type:* string

[List] kms:ListKeyRotations.

---

##### `ListKeys`<sup>Required</sup> <a name="ListKeys" id="@cdk_utils/iam.kms.KMSActions.property.ListKeys"></a>

```typescript
public readonly ListKeys: string;
```

- *Type:* string

[List] kms:ListKeys.

---

##### `ListResourceTags`<sup>Required</sup> <a name="ListResourceTags" id="@cdk_utils/iam.kms.KMSActions.property.ListResourceTags"></a>

```typescript
public readonly ListResourceTags: string;
```

- *Type:* string

[List] kms:ListResourceTags.

---

##### `ListRetirableGrants`<sup>Required</sup> <a name="ListRetirableGrants" id="@cdk_utils/iam.kms.KMSActions.property.ListRetirableGrants"></a>

```typescript
public readonly ListRetirableGrants: string;
```

- *Type:* string

[List] kms:ListRetirableGrants.

---

##### `PutKeyPolicy`<sup>Required</sup> <a name="PutKeyPolicy" id="@cdk_utils/iam.kms.KMSActions.property.PutKeyPolicy"></a>

```typescript
public readonly PutKeyPolicy: string;
```

- *Type:* string

[PermissionManagement] kms:PutKeyPolicy.

---

##### `ReEncryptFrom`<sup>Required</sup> <a name="ReEncryptFrom" id="@cdk_utils/iam.kms.KMSActions.property.ReEncryptFrom"></a>

```typescript
public readonly ReEncryptFrom: string;
```

- *Type:* string

[Write] kms:ReEncryptFrom.

---

##### `ReEncryptTo`<sup>Required</sup> <a name="ReEncryptTo" id="@cdk_utils/iam.kms.KMSActions.property.ReEncryptTo"></a>

```typescript
public readonly ReEncryptTo: string;
```

- *Type:* string

[Write] kms:ReEncryptTo.

---

##### `ReplicateKey`<sup>Required</sup> <a name="ReplicateKey" id="@cdk_utils/iam.kms.KMSActions.property.ReplicateKey"></a>

```typescript
public readonly ReplicateKey: string;
```

- *Type:* string

[Write] kms:ReplicateKey.

---

##### `RetireGrant`<sup>Required</sup> <a name="RetireGrant" id="@cdk_utils/iam.kms.KMSActions.property.RetireGrant"></a>

```typescript
public readonly RetireGrant: string;
```

- *Type:* string

[PermissionManagement] kms:RetireGrant.

---

##### `RevokeGrant`<sup>Required</sup> <a name="RevokeGrant" id="@cdk_utils/iam.kms.KMSActions.property.RevokeGrant"></a>

```typescript
public readonly RevokeGrant: string;
```

- *Type:* string

[PermissionManagement] kms:RevokeGrant.

---

##### `RotateKeyOnDemand`<sup>Required</sup> <a name="RotateKeyOnDemand" id="@cdk_utils/iam.kms.KMSActions.property.RotateKeyOnDemand"></a>

```typescript
public readonly RotateKeyOnDemand: string;
```

- *Type:* string

[Write] kms:RotateKeyOnDemand.

---

##### `ScheduleKeyDeletion`<sup>Required</sup> <a name="ScheduleKeyDeletion" id="@cdk_utils/iam.kms.KMSActions.property.ScheduleKeyDeletion"></a>

```typescript
public readonly ScheduleKeyDeletion: string;
```

- *Type:* string

[Write] kms:ScheduleKeyDeletion.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.kms.KMSActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `Sign`<sup>Required</sup> <a name="Sign" id="@cdk_utils/iam.kms.KMSActions.property.Sign"></a>

```typescript
public readonly Sign: string;
```

- *Type:* string

[Write] kms:Sign.

---

##### `SynchronizeMultiRegionKey`<sup>Required</sup> <a name="SynchronizeMultiRegionKey" id="@cdk_utils/iam.kms.KMSActions.property.SynchronizeMultiRegionKey"></a>

```typescript
public readonly SynchronizeMultiRegionKey: string;
```

- *Type:* string

[Write] kms:SynchronizeMultiRegionKey.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kms.KMSActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] kms:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kms.KMSActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] kms:UntagResource.

---

##### `UpdateAlias`<sup>Required</sup> <a name="UpdateAlias" id="@cdk_utils/iam.kms.KMSActions.property.UpdateAlias"></a>

```typescript
public readonly UpdateAlias: string;
```

- *Type:* string

[Write] kms:UpdateAlias.

---

##### `UpdateCustomKeyStore`<sup>Required</sup> <a name="UpdateCustomKeyStore" id="@cdk_utils/iam.kms.KMSActions.property.UpdateCustomKeyStore"></a>

```typescript
public readonly UpdateCustomKeyStore: string;
```

- *Type:* string

[Write] kms:UpdateCustomKeyStore.

---

##### `UpdateKeyDescription`<sup>Required</sup> <a name="UpdateKeyDescription" id="@cdk_utils/iam.kms.KMSActions.property.UpdateKeyDescription"></a>

```typescript
public readonly UpdateKeyDescription: string;
```

- *Type:* string

[Write] kms:UpdateKeyDescription.

---

##### `UpdatePrimaryRegion`<sup>Required</sup> <a name="UpdatePrimaryRegion" id="@cdk_utils/iam.kms.KMSActions.property.UpdatePrimaryRegion"></a>

```typescript
public readonly UpdatePrimaryRegion: string;
```

- *Type:* string

[Write] kms:UpdatePrimaryRegion.

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdk_utils/iam.kms.KMSActions.property.Verify"></a>

```typescript
public readonly Verify: string;
```

- *Type:* string

[Write] kms:Verify.

---

##### `VerifyMac`<sup>Required</sup> <a name="VerifyMac" id="@cdk_utils/iam.kms.KMSActions.property.VerifyMac"></a>

```typescript
public readonly VerifyMac: string;
```

- *Type:* string

[Write] kms:VerifyMac.

---

### KMSConditions <a name="KMSConditions" id="@cdk_utils/iam.kms.KMSConditions"></a>

Condition key constants and builders for kms.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kms.KMSConditions.Initializer"></a>

```typescript
import { kms } from '@cdk_utils/iam'

new kms.KMSConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | Generates a condition block for `kms:BypassPolicyLockoutSafetyCheck`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.callerAccount">callerAccount</a></code> | Generates a condition block for `kms:CallerAccount`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.customerMasterKeySpec">customerMasterKeySpec</a></code> | Generates a condition block for `kms:CustomerMasterKeySpec`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.customerMasterKeyUsage">customerMasterKeyUsage</a></code> | Generates a condition block for `kms:CustomerMasterKeyUsage`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.dataKeyPairSpec">dataKeyPairSpec</a></code> | Generates a condition block for `kms:DataKeyPairSpec`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.encryptionAlgorithm">encryptionAlgorithm</a></code> | Generates a condition block for `kms:EncryptionAlgorithm`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.encryptionContext">encryptionContext</a></code> | Generates a condition block for `kms:EncryptionContext:${EncryptionContextKey}`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.encryptionContextKeys">encryptionContextKeys</a></code> | Generates a condition block for `kms:EncryptionContextKeys`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.expirationModel">expirationModel</a></code> | Generates a condition block for `kms:ExpirationModel`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.grantConstraintSourceARN">grantConstraintSourceARN</a></code> | Generates a condition block for `kms:GrantConstraintSourceArn`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.grantConstraintType">grantConstraintType</a></code> | Generates a condition block for `kms:GrantConstraintType`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.granteePrincipal">granteePrincipal</a></code> | Generates a condition block for `kms:GranteePrincipal`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.granteeServicePrincipal">granteeServicePrincipal</a></code> | Generates a condition block for `kms:GranteeServicePrincipal`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.grantIsForAWSResource">grantIsForAWSResource</a></code> | Generates a condition block for `kms:GrantIsForAWSResource`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.grantOperations">grantOperations</a></code> | Generates a condition block for `kms:GrantOperations`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.keyAgreementAlgorithm">keyAgreementAlgorithm</a></code> | Generates a condition block for `kms:KeyAgreementAlgorithm`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.keyOrigin">keyOrigin</a></code> | Generates a condition block for `kms:KeyOrigin`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.keySpec">keySpec</a></code> | Generates a condition block for `kms:KeySpec`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.keyUsage">keyUsage</a></code> | Generates a condition block for `kms:KeyUsage`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.macAlgorithm">macAlgorithm</a></code> | Generates a condition block for `kms:MacAlgorithm`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.messageType">messageType</a></code> | Generates a condition block for `kms:MessageType`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.multiRegion">multiRegion</a></code> | Generates a condition block for `kms:MultiRegion`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.multiRegionKeyType">multiRegionKeyType</a></code> | Generates a condition block for `kms:MultiRegionKeyType`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.primaryRegion">primaryRegion</a></code> | Generates a condition block for `kms:PrimaryRegion`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationImageSha384">recipientAttestationImageSha384</a></code> | Generates a condition block for `kms:RecipientAttestation:ImageSha384`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr0">recipientAttestationNitroTpmpcr0</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR0`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr1">recipientAttestationNitroTpmpcr1</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR1`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr10">recipientAttestationNitroTpmpcr10</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR10`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr11">recipientAttestationNitroTpmpcr11</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR11`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr12">recipientAttestationNitroTpmpcr12</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR12`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr13">recipientAttestationNitroTpmpcr13</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR13`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr14">recipientAttestationNitroTpmpcr14</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR14`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr15">recipientAttestationNitroTpmpcr15</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR15`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr16">recipientAttestationNitroTpmpcr16</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR16`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr17">recipientAttestationNitroTpmpcr17</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR17`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr18">recipientAttestationNitroTpmpcr18</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR18`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr19">recipientAttestationNitroTpmpcr19</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR19`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr2">recipientAttestationNitroTpmpcr2</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR2`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr20">recipientAttestationNitroTpmpcr20</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR20`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr21">recipientAttestationNitroTpmpcr21</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR21`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr22">recipientAttestationNitroTpmpcr22</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR22`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr23">recipientAttestationNitroTpmpcr23</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR23`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr3">recipientAttestationNitroTpmpcr3</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR3`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr4">recipientAttestationNitroTpmpcr4</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR4`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr5">recipientAttestationNitroTpmpcr5</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR5`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr6">recipientAttestationNitroTpmpcr6</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR6`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr7">recipientAttestationNitroTpmpcr7</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR7`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr8">recipientAttestationNitroTpmpcr8</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR8`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr9">recipientAttestationNitroTpmpcr9</a></code> | Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR9`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr0">recipientAttestationPcr0</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR0`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr1">recipientAttestationPcr1</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR1`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr10">recipientAttestationPcr10</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR10`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr11">recipientAttestationPcr11</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR11`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr12">recipientAttestationPcr12</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR12`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr13">recipientAttestationPcr13</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR13`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr14">recipientAttestationPcr14</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR14`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr15">recipientAttestationPcr15</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR15`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr16">recipientAttestationPcr16</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR16`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr17">recipientAttestationPcr17</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR17`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr18">recipientAttestationPcr18</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR18`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr19">recipientAttestationPcr19</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR19`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr2">recipientAttestationPcr2</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR2`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr20">recipientAttestationPcr20</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR20`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr21">recipientAttestationPcr21</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR21`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr22">recipientAttestationPcr22</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR22`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr23">recipientAttestationPcr23</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR23`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr24">recipientAttestationPcr24</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR24`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr25">recipientAttestationPcr25</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR25`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr26">recipientAttestationPcr26</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR26`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr27">recipientAttestationPcr27</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR27`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr28">recipientAttestationPcr28</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR28`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr29">recipientAttestationPcr29</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR29`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr3">recipientAttestationPcr3</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR3`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr30">recipientAttestationPcr30</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR30`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr31">recipientAttestationPcr31</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR31`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr4">recipientAttestationPcr4</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR4`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr5">recipientAttestationPcr5</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR5`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr6">recipientAttestationPcr6</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR6`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr7">recipientAttestationPcr7</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR7`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr8">recipientAttestationPcr8</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR8`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr9">recipientAttestationPcr9</a></code> | Generates a condition block for `kms:RecipientAttestation:PCR9`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.reEncryptOnSameKey">reEncryptOnSameKey</a></code> | Generates a condition block for `kms:ReEncryptOnSameKey`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.replicaRegion">replicaRegion</a></code> | Generates a condition block for `kms:ReplicaRegion`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.requestAlias">requestAlias</a></code> | Generates a condition block for `kms:RequestAlias`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.resourceAliases">resourceAliases</a></code> | Generates a condition block for `kms:ResourceAliases`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.retiringPrincipal">retiringPrincipal</a></code> | Generates a condition block for `kms:RetiringPrincipal`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.retiringServicePrincipal">retiringServicePrincipal</a></code> | Generates a condition block for `kms:RetiringServicePrincipal`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.rotationPeriodInDays">rotationPeriodInDays</a></code> | Generates a condition block for `kms:RotationPeriodInDays`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.scheduleKeyDeletionPendingWindowInDays">scheduleKeyDeletionPendingWindowInDays</a></code> | Generates a condition block for `kms:ScheduleKeyDeletionPendingWindowInDays`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.signingAlgorithm">signingAlgorithm</a></code> | Generates a condition block for `kms:SigningAlgorithm`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.trailingDaysWithoutKeyUsage">trailingDaysWithoutKeyUsage</a></code> | Generates a condition block for `kms:TrailingDaysWithoutKeyUsage`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.validTo">validTo</a></code> | Generates a condition block for `kms:ValidTo`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.viaService">viaService</a></code> | Generates a condition block for `kms:ViaService`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.wrappingAlgorithm">wrappingAlgorithm</a></code> | Generates a condition block for `kms:WrappingAlgorithm`. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.wrappingKeySpec">wrappingKeySpec</a></code> | Generates a condition block for `kms:WrappingKeySpec`. |

---

##### `bypassPolicyLockoutSafetyCheck` <a name="bypassPolicyLockoutSafetyCheck" id="@cdk_utils/iam.kms.KMSConditions.bypassPolicyLockoutSafetyCheck"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.bypassPolicyLockoutSafetyCheck(value: boolean)
```

Generates a condition block for `kms:BypassPolicyLockoutSafetyCheck`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.bypassPolicyLockoutSafetyCheck.parameter.value"></a>

- *Type:* boolean

---

##### `callerAccount` <a name="callerAccount" id="@cdk_utils/iam.kms.KMSConditions.callerAccount"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.callerAccount(value: string)
```

Generates a condition block for `kms:CallerAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.callerAccount.parameter.value"></a>

- *Type:* string

---

##### `customerMasterKeySpec` <a name="customerMasterKeySpec" id="@cdk_utils/iam.kms.KMSConditions.customerMasterKeySpec"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.customerMasterKeySpec(value: string)
```

Generates a condition block for `kms:CustomerMasterKeySpec`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.customerMasterKeySpec.parameter.value"></a>

- *Type:* string

---

##### `customerMasterKeyUsage` <a name="customerMasterKeyUsage" id="@cdk_utils/iam.kms.KMSConditions.customerMasterKeyUsage"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.customerMasterKeyUsage(value: string)
```

Generates a condition block for `kms:CustomerMasterKeyUsage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.customerMasterKeyUsage.parameter.value"></a>

- *Type:* string

---

##### `dataKeyPairSpec` <a name="dataKeyPairSpec" id="@cdk_utils/iam.kms.KMSConditions.dataKeyPairSpec"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.dataKeyPairSpec(value: string)
```

Generates a condition block for `kms:DataKeyPairSpec`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.dataKeyPairSpec.parameter.value"></a>

- *Type:* string

---

##### `encryptionAlgorithm` <a name="encryptionAlgorithm" id="@cdk_utils/iam.kms.KMSConditions.encryptionAlgorithm"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.encryptionAlgorithm(value: string)
```

Generates a condition block for `kms:EncryptionAlgorithm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.encryptionAlgorithm.parameter.value"></a>

- *Type:* string

---

##### `encryptionContext` <a name="encryptionContext" id="@cdk_utils/iam.kms.KMSConditions.encryptionContext"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.encryptionContext(value: string)
```

Generates a condition block for `kms:EncryptionContext:${EncryptionContextKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.encryptionContext.parameter.value"></a>

- *Type:* string

---

##### `encryptionContextKeys` <a name="encryptionContextKeys" id="@cdk_utils/iam.kms.KMSConditions.encryptionContextKeys"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.encryptionContextKeys(values: string[])
```

Generates a condition block for `kms:EncryptionContextKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kms.KMSConditions.encryptionContextKeys.parameter.values"></a>

- *Type:* string[]

---

##### `expirationModel` <a name="expirationModel" id="@cdk_utils/iam.kms.KMSConditions.expirationModel"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.expirationModel(value: string)
```

Generates a condition block for `kms:ExpirationModel`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.expirationModel.parameter.value"></a>

- *Type:* string

---

##### `grantConstraintSourceARN` <a name="grantConstraintSourceARN" id="@cdk_utils/iam.kms.KMSConditions.grantConstraintSourceARN"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.grantConstraintSourceARN(value: string)
```

Generates a condition block for `kms:GrantConstraintSourceArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.grantConstraintSourceARN.parameter.value"></a>

- *Type:* string

---

##### `grantConstraintType` <a name="grantConstraintType" id="@cdk_utils/iam.kms.KMSConditions.grantConstraintType"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.grantConstraintType(value: string)
```

Generates a condition block for `kms:GrantConstraintType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.grantConstraintType.parameter.value"></a>

- *Type:* string

---

##### `granteePrincipal` <a name="granteePrincipal" id="@cdk_utils/iam.kms.KMSConditions.granteePrincipal"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.granteePrincipal(value: string)
```

Generates a condition block for `kms:GranteePrincipal`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.granteePrincipal.parameter.value"></a>

- *Type:* string

---

##### `granteeServicePrincipal` <a name="granteeServicePrincipal" id="@cdk_utils/iam.kms.KMSConditions.granteeServicePrincipal"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.granteeServicePrincipal(value: string)
```

Generates a condition block for `kms:GranteeServicePrincipal`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.granteeServicePrincipal.parameter.value"></a>

- *Type:* string

---

##### `grantIsForAWSResource` <a name="grantIsForAWSResource" id="@cdk_utils/iam.kms.KMSConditions.grantIsForAWSResource"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.grantIsForAWSResource(value: boolean)
```

Generates a condition block for `kms:GrantIsForAWSResource`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.grantIsForAWSResource.parameter.value"></a>

- *Type:* boolean

---

##### `grantOperations` <a name="grantOperations" id="@cdk_utils/iam.kms.KMSConditions.grantOperations"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.grantOperations(values: string[])
```

Generates a condition block for `kms:GrantOperations`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kms.KMSConditions.grantOperations.parameter.values"></a>

- *Type:* string[]

---

##### `keyAgreementAlgorithm` <a name="keyAgreementAlgorithm" id="@cdk_utils/iam.kms.KMSConditions.keyAgreementAlgorithm"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.keyAgreementAlgorithm(value: string)
```

Generates a condition block for `kms:KeyAgreementAlgorithm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.keyAgreementAlgorithm.parameter.value"></a>

- *Type:* string

---

##### `keyOrigin` <a name="keyOrigin" id="@cdk_utils/iam.kms.KMSConditions.keyOrigin"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.keyOrigin(value: string)
```

Generates a condition block for `kms:KeyOrigin`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.keyOrigin.parameter.value"></a>

- *Type:* string

---

##### `keySpec` <a name="keySpec" id="@cdk_utils/iam.kms.KMSConditions.keySpec"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.keySpec(value: string)
```

Generates a condition block for `kms:KeySpec`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.keySpec.parameter.value"></a>

- *Type:* string

---

##### `keyUsage` <a name="keyUsage" id="@cdk_utils/iam.kms.KMSConditions.keyUsage"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.keyUsage(value: string)
```

Generates a condition block for `kms:KeyUsage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.keyUsage.parameter.value"></a>

- *Type:* string

---

##### `macAlgorithm` <a name="macAlgorithm" id="@cdk_utils/iam.kms.KMSConditions.macAlgorithm"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.macAlgorithm(value: string)
```

Generates a condition block for `kms:MacAlgorithm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.macAlgorithm.parameter.value"></a>

- *Type:* string

---

##### `messageType` <a name="messageType" id="@cdk_utils/iam.kms.KMSConditions.messageType"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.messageType(value: string)
```

Generates a condition block for `kms:MessageType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.messageType.parameter.value"></a>

- *Type:* string

---

##### `multiRegion` <a name="multiRegion" id="@cdk_utils/iam.kms.KMSConditions.multiRegion"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.multiRegion(value: boolean)
```

Generates a condition block for `kms:MultiRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.multiRegion.parameter.value"></a>

- *Type:* boolean

---

##### `multiRegionKeyType` <a name="multiRegionKeyType" id="@cdk_utils/iam.kms.KMSConditions.multiRegionKeyType"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.multiRegionKeyType(value: string)
```

Generates a condition block for `kms:MultiRegionKeyType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.multiRegionKeyType.parameter.value"></a>

- *Type:* string

---

##### `primaryRegion` <a name="primaryRegion" id="@cdk_utils/iam.kms.KMSConditions.primaryRegion"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.primaryRegion(value: string)
```

Generates a condition block for `kms:PrimaryRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.primaryRegion.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationImageSha384` <a name="recipientAttestationImageSha384" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationImageSha384"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationImageSha384(value: string)
```

Generates a condition block for `kms:RecipientAttestation:ImageSha384`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationImageSha384.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr0` <a name="recipientAttestationNitroTpmpcr0" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr0"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr0(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR0`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr0.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr1` <a name="recipientAttestationNitroTpmpcr1" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr1"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr1(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR1`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr1.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr10` <a name="recipientAttestationNitroTpmpcr10" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr10"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr10(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR10`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr10.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr11` <a name="recipientAttestationNitroTpmpcr11" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr11"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr11(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR11`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr11.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr12` <a name="recipientAttestationNitroTpmpcr12" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr12"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr12(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR12`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr12.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr13` <a name="recipientAttestationNitroTpmpcr13" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr13"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr13(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR13`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr13.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr14` <a name="recipientAttestationNitroTpmpcr14" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr14"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr14(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR14`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr14.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr15` <a name="recipientAttestationNitroTpmpcr15" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr15"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr15(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR15`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr15.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr16` <a name="recipientAttestationNitroTpmpcr16" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr16"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr16(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR16`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr16.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr17` <a name="recipientAttestationNitroTpmpcr17" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr17"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr17(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR17`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr17.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr18` <a name="recipientAttestationNitroTpmpcr18" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr18"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr18(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR18`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr18.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr19` <a name="recipientAttestationNitroTpmpcr19" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr19"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr19(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR19`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr19.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr2` <a name="recipientAttestationNitroTpmpcr2" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr2"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr2(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR2`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr2.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr20` <a name="recipientAttestationNitroTpmpcr20" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr20"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr20(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR20`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr20.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr21` <a name="recipientAttestationNitroTpmpcr21" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr21"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr21(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR21`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr21.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr22` <a name="recipientAttestationNitroTpmpcr22" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr22"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr22(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR22`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr22.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr23` <a name="recipientAttestationNitroTpmpcr23" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr23"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr23(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR23`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr23.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr3` <a name="recipientAttestationNitroTpmpcr3" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr3"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr3(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR3`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr3.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr4` <a name="recipientAttestationNitroTpmpcr4" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr4"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr4(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR4`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr4.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr5` <a name="recipientAttestationNitroTpmpcr5" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr5"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr5(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR5`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr5.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr6` <a name="recipientAttestationNitroTpmpcr6" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr6"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr6(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR6`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr6.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr7` <a name="recipientAttestationNitroTpmpcr7" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr7"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr7(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR7`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr7.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr8` <a name="recipientAttestationNitroTpmpcr8" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr8"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr8(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR8`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr8.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationNitroTpmpcr9` <a name="recipientAttestationNitroTpmpcr9" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr9"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationNitroTpmpcr9(value: string)
```

Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR9`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationNitroTpmpcr9.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr0` <a name="recipientAttestationPcr0" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr0"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr0(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR0`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr0.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr1` <a name="recipientAttestationPcr1" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr1"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr1(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR1`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr1.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr10` <a name="recipientAttestationPcr10" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr10"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr10(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR10`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr10.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr11` <a name="recipientAttestationPcr11" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr11"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr11(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR11`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr11.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr12` <a name="recipientAttestationPcr12" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr12"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr12(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR12`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr12.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr13` <a name="recipientAttestationPcr13" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr13"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr13(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR13`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr13.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr14` <a name="recipientAttestationPcr14" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr14"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr14(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR14`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr14.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr15` <a name="recipientAttestationPcr15" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr15"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr15(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR15`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr15.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr16` <a name="recipientAttestationPcr16" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr16"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr16(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR16`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr16.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr17` <a name="recipientAttestationPcr17" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr17"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr17(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR17`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr17.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr18` <a name="recipientAttestationPcr18" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr18"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr18(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR18`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr18.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr19` <a name="recipientAttestationPcr19" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr19"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr19(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR19`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr19.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr2` <a name="recipientAttestationPcr2" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr2"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr2(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR2`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr2.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr20` <a name="recipientAttestationPcr20" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr20"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr20(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR20`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr20.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr21` <a name="recipientAttestationPcr21" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr21"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr21(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR21`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr21.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr22` <a name="recipientAttestationPcr22" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr22"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr22(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR22`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr22.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr23` <a name="recipientAttestationPcr23" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr23"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr23(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR23`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr23.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr24` <a name="recipientAttestationPcr24" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr24"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr24(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR24`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr24.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr25` <a name="recipientAttestationPcr25" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr25"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr25(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR25`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr25.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr26` <a name="recipientAttestationPcr26" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr26"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr26(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR26`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr26.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr27` <a name="recipientAttestationPcr27" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr27"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr27(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR27`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr27.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr28` <a name="recipientAttestationPcr28" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr28"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr28(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR28`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr28.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr29` <a name="recipientAttestationPcr29" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr29"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr29(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR29`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr29.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr3` <a name="recipientAttestationPcr3" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr3"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr3(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR3`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr3.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr30` <a name="recipientAttestationPcr30" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr30"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr30(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR30`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr30.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr31` <a name="recipientAttestationPcr31" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr31"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr31(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR31`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr31.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr4` <a name="recipientAttestationPcr4" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr4"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr4(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR4`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr4.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr5` <a name="recipientAttestationPcr5" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr5"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr5(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR5`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr5.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr6` <a name="recipientAttestationPcr6" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr6"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr6(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR6`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr6.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr7` <a name="recipientAttestationPcr7" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr7"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr7(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR7`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr7.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr8` <a name="recipientAttestationPcr8" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr8"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr8(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR8`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr8.parameter.value"></a>

- *Type:* string

---

##### `recipientAttestationPcr9` <a name="recipientAttestationPcr9" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr9"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.recipientAttestationPcr9(value: string)
```

Generates a condition block for `kms:RecipientAttestation:PCR9`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.recipientAttestationPcr9.parameter.value"></a>

- *Type:* string

---

##### `reEncryptOnSameKey` <a name="reEncryptOnSameKey" id="@cdk_utils/iam.kms.KMSConditions.reEncryptOnSameKey"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.reEncryptOnSameKey(value: boolean)
```

Generates a condition block for `kms:ReEncryptOnSameKey`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.reEncryptOnSameKey.parameter.value"></a>

- *Type:* boolean

---

##### `replicaRegion` <a name="replicaRegion" id="@cdk_utils/iam.kms.KMSConditions.replicaRegion"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.replicaRegion(value: string)
```

Generates a condition block for `kms:ReplicaRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.replicaRegion.parameter.value"></a>

- *Type:* string

---

##### `requestAlias` <a name="requestAlias" id="@cdk_utils/iam.kms.KMSConditions.requestAlias"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.requestAlias(value: string)
```

Generates a condition block for `kms:RequestAlias`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.requestAlias.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.kms.KMSConditions.requestTag"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceAliases` <a name="resourceAliases" id="@cdk_utils/iam.kms.KMSConditions.resourceAliases"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.resourceAliases(values: string[])
```

Generates a condition block for `kms:ResourceAliases`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kms.KMSConditions.resourceAliases.parameter.values"></a>

- *Type:* string[]

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.kms.KMSConditions.resourceTag"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `retiringPrincipal` <a name="retiringPrincipal" id="@cdk_utils/iam.kms.KMSConditions.retiringPrincipal"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.retiringPrincipal(value: string)
```

Generates a condition block for `kms:RetiringPrincipal`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.retiringPrincipal.parameter.value"></a>

- *Type:* string

---

##### `retiringServicePrincipal` <a name="retiringServicePrincipal" id="@cdk_utils/iam.kms.KMSConditions.retiringServicePrincipal"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.retiringServicePrincipal(value: string)
```

Generates a condition block for `kms:RetiringServicePrincipal`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.retiringServicePrincipal.parameter.value"></a>

- *Type:* string

---

##### `rotationPeriodInDays` <a name="rotationPeriodInDays" id="@cdk_utils/iam.kms.KMSConditions.rotationPeriodInDays"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.rotationPeriodInDays(value: number)
```

Generates a condition block for `kms:RotationPeriodInDays`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.rotationPeriodInDays.parameter.value"></a>

- *Type:* number

---

##### `scheduleKeyDeletionPendingWindowInDays` <a name="scheduleKeyDeletionPendingWindowInDays" id="@cdk_utils/iam.kms.KMSConditions.scheduleKeyDeletionPendingWindowInDays"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.scheduleKeyDeletionPendingWindowInDays(value: number)
```

Generates a condition block for `kms:ScheduleKeyDeletionPendingWindowInDays`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.scheduleKeyDeletionPendingWindowInDays.parameter.value"></a>

- *Type:* number

---

##### `signingAlgorithm` <a name="signingAlgorithm" id="@cdk_utils/iam.kms.KMSConditions.signingAlgorithm"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.signingAlgorithm(value: string)
```

Generates a condition block for `kms:SigningAlgorithm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.signingAlgorithm.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.kms.KMSConditions.tagKeys"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kms.KMSConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `trailingDaysWithoutKeyUsage` <a name="trailingDaysWithoutKeyUsage" id="@cdk_utils/iam.kms.KMSConditions.trailingDaysWithoutKeyUsage"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.trailingDaysWithoutKeyUsage(value: number)
```

Generates a condition block for `kms:TrailingDaysWithoutKeyUsage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.trailingDaysWithoutKeyUsage.parameter.value"></a>

- *Type:* number

---

##### `validTo` <a name="validTo" id="@cdk_utils/iam.kms.KMSConditions.validTo"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.validTo(value: string)
```

Generates a condition block for `kms:ValidTo`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.validTo.parameter.value"></a>

- *Type:* string

---

##### `viaService` <a name="viaService" id="@cdk_utils/iam.kms.KMSConditions.viaService"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.viaService(value: string)
```

Generates a condition block for `kms:ViaService`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.viaService.parameter.value"></a>

- *Type:* string

---

##### `wrappingAlgorithm` <a name="wrappingAlgorithm" id="@cdk_utils/iam.kms.KMSConditions.wrappingAlgorithm"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.wrappingAlgorithm(value: string)
```

Generates a condition block for `kms:WrappingAlgorithm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.wrappingAlgorithm.parameter.value"></a>

- *Type:* string

---

##### `wrappingKeySpec` <a name="wrappingKeySpec" id="@cdk_utils/iam.kms.KMSConditions.wrappingKeySpec"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSConditions.wrappingKeySpec(value: string)
```

Generates a condition block for `kms:WrappingKeySpec`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kms.KMSConditions.wrappingKeySpec.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.actionGetKeyLastUsageConditionKeys">actionGetKeyLastUsageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetKeyLastUsage action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.actionGetKeyPolicyConditionKeys">actionGetKeyPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetKeyPolicy action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.actionGetKeyRotationStatusConditionKeys">actionGetKeyRotationStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetKeyRotationStatus action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.actionGetParametersForImportConditionKeys">actionGetParametersForImportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetParametersForImport action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.actionGetPublicKeyConditionKeys">actionGetPublicKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPublicKey action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.BYPASS_POLICY_LOCKOUT_SAFETY_CHECK">BYPASS_POLICY_LOCKOUT_SAFETY_CHECK</a></code> | <code>string</code> | Condition key: kms:BypassPolicyLockoutSafetyCheck (Bool). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.CALLER_ACCOUNT">CALLER_ACCOUNT</a></code> | <code>string</code> | Condition key: kms:CallerAccount (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.CancelKeyDeletionConditionKeys">CancelKeyDeletionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelKeyDeletion action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ConnectCustomKeyStoreConditionKeys">ConnectCustomKeyStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ConnectCustomKeyStore action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.CreateAliasConditionKeys">CreateAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAlias action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.CreateCustomKeyStoreConditionKeys">CreateCustomKeyStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomKeyStore action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.CreateGrantConditionKeys">CreateGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGrant action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.CreateKeyConditionKeys">CreateKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKey action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.CUSTOMER_MASTER_KEY_SPEC">CUSTOMER_MASTER_KEY_SPEC</a></code> | <code>string</code> | Condition key: kms:CustomerMasterKeySpec (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.CUSTOMER_MASTER_KEY_USAGE">CUSTOMER_MASTER_KEY_USAGE</a></code> | <code>string</code> | Condition key: kms:CustomerMasterKeyUsage (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DATA_KEY_PAIR_SPEC">DATA_KEY_PAIR_SPEC</a></code> | <code>string</code> | Condition key: kms:DataKeyPairSpec (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DecryptConditionKeys">DecryptConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Decrypt action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DeleteAliasConditionKeys">DeleteAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAlias action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DeleteCustomKeyStoreConditionKeys">DeleteCustomKeyStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCustomKeyStore action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DeleteImportedKeyMaterialConditionKeys">DeleteImportedKeyMaterialConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteImportedKeyMaterial action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DeriveSharedSecretConditionKeys">DeriveSharedSecretConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeriveSharedSecret action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DescribeCustomKeyStoresConditionKeys">DescribeCustomKeyStoresConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCustomKeyStores action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DescribeKeyConditionKeys">DescribeKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeKey action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DisableKeyConditionKeys">DisableKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisableKey action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DisableKeyRotationConditionKeys">DisableKeyRotationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisableKeyRotation action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.DisconnectCustomKeyStoreConditionKeys">DisconnectCustomKeyStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisconnectCustomKeyStore action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.EnableKeyConditionKeys">EnableKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableKey action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.EnableKeyRotationConditionKeys">EnableKeyRotationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableKeyRotation action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.EncryptConditionKeys">EncryptConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Encrypt action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ENCRYPTION_ALGORITHM">ENCRYPTION_ALGORITHM</a></code> | <code>string</code> | Condition key: kms:EncryptionAlgorithm (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ENCRYPTION_CONTEXT">ENCRYPTION_CONTEXT</a></code> | <code>string</code> | Condition key: kms:EncryptionContext:${EncryptionContextKey} (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ENCRYPTION_CONTEXT_KEYS">ENCRYPTION_CONTEXT_KEYS</a></code> | <code>string</code> | Condition key: kms:EncryptionContextKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.EXPIRATION_MODEL">EXPIRATION_MODEL</a></code> | <code>string</code> | Condition key: kms:ExpirationModel (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GenerateDataKeyConditionKeys">GenerateDataKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateDataKey action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GenerateDataKeyPairConditionKeys">GenerateDataKeyPairConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateDataKeyPair action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GenerateDataKeyPairWithoutPlaintextConditionKeys">GenerateDataKeyPairWithoutPlaintextConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateDataKeyPairWithoutPlaintext action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GenerateDataKeyWithoutPlaintextConditionKeys">GenerateDataKeyWithoutPlaintextConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateDataKeyWithoutPlaintext action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GenerateMacConditionKeys">GenerateMacConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateMac action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GenerateRandomConditionKeys">GenerateRandomConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateRandom action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GRANT_CONSTRAINT_SOURCE_ARN">GRANT_CONSTRAINT_SOURCE_ARN</a></code> | <code>string</code> | Condition key: kms:GrantConstraintSourceArn (ARN). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GRANT_CONSTRAINT_TYPE">GRANT_CONSTRAINT_TYPE</a></code> | <code>string</code> | Condition key: kms:GrantConstraintType (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GRANT_IS_FOR_AWS_RESOURCE">GRANT_IS_FOR_AWS_RESOURCE</a></code> | <code>string</code> | Condition key: kms:GrantIsForAWSResource (Bool). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GRANT_OPERATIONS">GRANT_OPERATIONS</a></code> | <code>string</code> | Condition key: kms:GrantOperations (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GRANTEE_PRINCIPAL">GRANTEE_PRINCIPAL</a></code> | <code>string</code> | Condition key: kms:GranteePrincipal (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.GRANTEE_SERVICE_PRINCIPAL">GRANTEE_SERVICE_PRINCIPAL</a></code> | <code>string</code> | Condition key: kms:GranteeServicePrincipal (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ImportKeyMaterialConditionKeys">ImportKeyMaterialConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportKeyMaterial action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.KEY_AGREEMENT_ALGORITHM">KEY_AGREEMENT_ALGORITHM</a></code> | <code>string</code> | Condition key: kms:KeyAgreementAlgorithm (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.KEY_ORIGIN">KEY_ORIGIN</a></code> | <code>string</code> | Condition key: kms:KeyOrigin (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.KEY_SPEC">KEY_SPEC</a></code> | <code>string</code> | Condition key: kms:KeySpec (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.KEY_USAGE">KEY_USAGE</a></code> | <code>string</code> | Condition key: kms:KeyUsage (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ListGrantsConditionKeys">ListGrantsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListGrants action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ListKeyPoliciesConditionKeys">ListKeyPoliciesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListKeyPolicies action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ListKeyRotationsConditionKeys">ListKeyRotationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListKeyRotations action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ListResourceTagsConditionKeys">ListResourceTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceTags action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.MAC_ALGORITHM">MAC_ALGORITHM</a></code> | <code>string</code> | Condition key: kms:MacAlgorithm (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.MESSAGE_TYPE">MESSAGE_TYPE</a></code> | <code>string</code> | Condition key: kms:MessageType (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.MULTI_REGION">MULTI_REGION</a></code> | <code>string</code> | Condition key: kms:MultiRegion (Bool). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.MULTI_REGION_KEY_TYPE">MULTI_REGION_KEY_TYPE</a></code> | <code>string</code> | Condition key: kms:MultiRegionKeyType (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.PRIMARY_REGION">PRIMARY_REGION</a></code> | <code>string</code> | Condition key: kms:PrimaryRegion (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.PutKeyPolicyConditionKeys">PutKeyPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutKeyPolicy action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RE_ENCRYPT_ON_SAME_KEY">RE_ENCRYPT_ON_SAME_KEY</a></code> | <code>string</code> | Condition key: kms:ReEncryptOnSameKey (Bool). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_IMAGE_SHA384">RECIPIENT_ATTESTATION_IMAGE_SHA384</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:ImageSha384 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR0">RECIPIENT_ATTESTATION_NITRO_TPMPCR0</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR0 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR1">RECIPIENT_ATTESTATION_NITRO_TPMPCR1</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR1 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR10">RECIPIENT_ATTESTATION_NITRO_TPMPCR10</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR10 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR11">RECIPIENT_ATTESTATION_NITRO_TPMPCR11</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR11 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR12">RECIPIENT_ATTESTATION_NITRO_TPMPCR12</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR12 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR13">RECIPIENT_ATTESTATION_NITRO_TPMPCR13</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR13 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR14">RECIPIENT_ATTESTATION_NITRO_TPMPCR14</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR14 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR15">RECIPIENT_ATTESTATION_NITRO_TPMPCR15</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR15 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR16">RECIPIENT_ATTESTATION_NITRO_TPMPCR16</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR16 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR17">RECIPIENT_ATTESTATION_NITRO_TPMPCR17</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR17 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR18">RECIPIENT_ATTESTATION_NITRO_TPMPCR18</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR18 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR19">RECIPIENT_ATTESTATION_NITRO_TPMPCR19</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR19 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR2">RECIPIENT_ATTESTATION_NITRO_TPMPCR2</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR2 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR20">RECIPIENT_ATTESTATION_NITRO_TPMPCR20</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR20 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR21">RECIPIENT_ATTESTATION_NITRO_TPMPCR21</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR21 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR22">RECIPIENT_ATTESTATION_NITRO_TPMPCR22</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR22 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR23">RECIPIENT_ATTESTATION_NITRO_TPMPCR23</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR23 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR3">RECIPIENT_ATTESTATION_NITRO_TPMPCR3</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR3 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR4">RECIPIENT_ATTESTATION_NITRO_TPMPCR4</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR4 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR5">RECIPIENT_ATTESTATION_NITRO_TPMPCR5</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR5 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR6">RECIPIENT_ATTESTATION_NITRO_TPMPCR6</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR6 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR7">RECIPIENT_ATTESTATION_NITRO_TPMPCR7</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR7 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR8">RECIPIENT_ATTESTATION_NITRO_TPMPCR8</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR8 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR9">RECIPIENT_ATTESTATION_NITRO_TPMPCR9</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:NitroTPMPCR9 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR0">RECIPIENT_ATTESTATION_PCR0</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR0 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR1">RECIPIENT_ATTESTATION_PCR1</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR1 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR10">RECIPIENT_ATTESTATION_PCR10</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR10 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR11">RECIPIENT_ATTESTATION_PCR11</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR11 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR12">RECIPIENT_ATTESTATION_PCR12</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR12 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR13">RECIPIENT_ATTESTATION_PCR13</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR13 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR14">RECIPIENT_ATTESTATION_PCR14</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR14 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR15">RECIPIENT_ATTESTATION_PCR15</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR15 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR16">RECIPIENT_ATTESTATION_PCR16</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR16 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR17">RECIPIENT_ATTESTATION_PCR17</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR17 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR18">RECIPIENT_ATTESTATION_PCR18</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR18 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR19">RECIPIENT_ATTESTATION_PCR19</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR19 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR2">RECIPIENT_ATTESTATION_PCR2</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR2 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR20">RECIPIENT_ATTESTATION_PCR20</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR20 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR21">RECIPIENT_ATTESTATION_PCR21</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR21 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR22">RECIPIENT_ATTESTATION_PCR22</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR22 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR23">RECIPIENT_ATTESTATION_PCR23</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR23 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR24">RECIPIENT_ATTESTATION_PCR24</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR24 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR25">RECIPIENT_ATTESTATION_PCR25</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR25 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR26">RECIPIENT_ATTESTATION_PCR26</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR26 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR27">RECIPIENT_ATTESTATION_PCR27</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR27 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR28">RECIPIENT_ATTESTATION_PCR28</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR28 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR29">RECIPIENT_ATTESTATION_PCR29</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR29 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR3">RECIPIENT_ATTESTATION_PCR3</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR3 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR30">RECIPIENT_ATTESTATION_PCR30</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR30 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR31">RECIPIENT_ATTESTATION_PCR31</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR31 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR4">RECIPIENT_ATTESTATION_PCR4</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR4 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR5">RECIPIENT_ATTESTATION_PCR5</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR5 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR6">RECIPIENT_ATTESTATION_PCR6</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR6 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR7">RECIPIENT_ATTESTATION_PCR7</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR7 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR8">RECIPIENT_ATTESTATION_PCR8</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR8 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR9">RECIPIENT_ATTESTATION_PCR9</a></code> | <code>string</code> | Condition key: kms:RecipientAttestation:PCR9 (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ReEncryptFromConditionKeys">ReEncryptFromConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReEncryptFrom action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ReEncryptToConditionKeys">ReEncryptToConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReEncryptTo action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.REPLICA_REGION">REPLICA_REGION</a></code> | <code>string</code> | Condition key: kms:ReplicaRegion (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ReplicateKeyConditionKeys">ReplicateKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReplicateKey action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.REQUEST_ALIAS">REQUEST_ALIAS</a></code> | <code>string</code> | Condition key: kms:RequestAlias (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RESOURCE_ALIASES">RESOURCE_ALIASES</a></code> | <code>string</code> | Condition key: kms:ResourceAliases (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RetireGrantConditionKeys">RetireGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RetireGrant action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RETIRING_PRINCIPAL">RETIRING_PRINCIPAL</a></code> | <code>string</code> | Condition key: kms:RetiringPrincipal (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RETIRING_SERVICE_PRINCIPAL">RETIRING_SERVICE_PRINCIPAL</a></code> | <code>string</code> | Condition key: kms:RetiringServicePrincipal (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RevokeGrantConditionKeys">RevokeGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RevokeGrant action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.RotateKeyOnDemandConditionKeys">RotateKeyOnDemandConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RotateKeyOnDemand action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ROTATION_PERIOD_IN_DAYS">ROTATION_PERIOD_IN_DAYS</a></code> | <code>string</code> | Condition key: kms:RotationPeriodInDays (Numeric). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.SCHEDULE_KEY_DELETION_PENDING_WINDOW_IN_DAYS">SCHEDULE_KEY_DELETION_PENDING_WINDOW_IN_DAYS</a></code> | <code>string</code> | Condition key: kms:ScheduleKeyDeletionPendingWindowInDays (Numeric). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.ScheduleKeyDeletionConditionKeys">ScheduleKeyDeletionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ScheduleKeyDeletion action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.SignConditionKeys">SignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Sign action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.SIGNING_ALGORITHM">SIGNING_ALGORITHM</a></code> | <code>string</code> | Condition key: kms:SigningAlgorithm (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.TRAILING_DAYS_WITHOUT_KEY_USAGE">TRAILING_DAYS_WITHOUT_KEY_USAGE</a></code> | <code>string</code> | Condition key: kms:TrailingDaysWithoutKeyUsage (Numeric). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.UpdateAliasConditionKeys">UpdateAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAlias action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.UpdateCustomKeyStoreConditionKeys">UpdateCustomKeyStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCustomKeyStore action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.UpdateKeyDescriptionConditionKeys">UpdateKeyDescriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateKeyDescription action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.UpdatePrimaryRegionConditionKeys">UpdatePrimaryRegionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePrimaryRegion action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.VALID_TO">VALID_TO</a></code> | <code>string</code> | Condition key: kms:ValidTo (Date). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.VerifyConditionKeys">VerifyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Verify action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.VerifyMacConditionKeys">VerifyMacConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyMac action. |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.VIA_SERVICE">VIA_SERVICE</a></code> | <code>string</code> | Condition key: kms:ViaService (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.WRAPPING_ALGORITHM">WRAPPING_ALGORITHM</a></code> | <code>string</code> | Condition key: kms:WrappingAlgorithm (String). |
| <code><a href="#@cdk_utils/iam.kms.KMSConditions.property.WRAPPING_KEY_SPEC">WRAPPING_KEY_SPEC</a></code> | <code>string</code> | Condition key: kms:WrappingKeySpec (String). |

---

##### `actionGetKeyLastUsageConditionKeys`<sup>Required</sup> <a name="actionGetKeyLastUsageConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.actionGetKeyLastUsageConditionKeys"></a>

```typescript
public readonly actionGetKeyLastUsageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetKeyLastUsage action.

---

##### `actionGetKeyPolicyConditionKeys`<sup>Required</sup> <a name="actionGetKeyPolicyConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.actionGetKeyPolicyConditionKeys"></a>

```typescript
public readonly actionGetKeyPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetKeyPolicy action.

---

##### `actionGetKeyRotationStatusConditionKeys`<sup>Required</sup> <a name="actionGetKeyRotationStatusConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.actionGetKeyRotationStatusConditionKeys"></a>

```typescript
public readonly actionGetKeyRotationStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetKeyRotationStatus action.

---

##### `actionGetParametersForImportConditionKeys`<sup>Required</sup> <a name="actionGetParametersForImportConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.actionGetParametersForImportConditionKeys"></a>

```typescript
public readonly actionGetParametersForImportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetParametersForImport action.

---

##### `actionGetPublicKeyConditionKeys`<sup>Required</sup> <a name="actionGetPublicKeyConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.actionGetPublicKeyConditionKeys"></a>

```typescript
public readonly actionGetPublicKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPublicKey action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.kms.KMSConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.kms.KMSConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.kms.KMSConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BYPASS_POLICY_LOCKOUT_SAFETY_CHECK`<sup>Required</sup> <a name="BYPASS_POLICY_LOCKOUT_SAFETY_CHECK" id="@cdk_utils/iam.kms.KMSConditions.property.BYPASS_POLICY_LOCKOUT_SAFETY_CHECK"></a>

```typescript
public readonly BYPASS_POLICY_LOCKOUT_SAFETY_CHECK: string;
```

- *Type:* string

Condition key: kms:BypassPolicyLockoutSafetyCheck (Bool).

---

##### `CALLER_ACCOUNT`<sup>Required</sup> <a name="CALLER_ACCOUNT" id="@cdk_utils/iam.kms.KMSConditions.property.CALLER_ACCOUNT"></a>

```typescript
public readonly CALLER_ACCOUNT: string;
```

- *Type:* string

Condition key: kms:CallerAccount (String).

---

##### `CancelKeyDeletionConditionKeys`<sup>Required</sup> <a name="CancelKeyDeletionConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.CancelKeyDeletionConditionKeys"></a>

```typescript
public readonly CancelKeyDeletionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelKeyDeletion action.

---

##### `ConnectCustomKeyStoreConditionKeys`<sup>Required</sup> <a name="ConnectCustomKeyStoreConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.ConnectCustomKeyStoreConditionKeys"></a>

```typescript
public readonly ConnectCustomKeyStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ConnectCustomKeyStore action.

---

##### `CreateAliasConditionKeys`<sup>Required</sup> <a name="CreateAliasConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.CreateAliasConditionKeys"></a>

```typescript
public readonly CreateAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAlias action.

---

##### `CreateCustomKeyStoreConditionKeys`<sup>Required</sup> <a name="CreateCustomKeyStoreConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.CreateCustomKeyStoreConditionKeys"></a>

```typescript
public readonly CreateCustomKeyStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomKeyStore action.

---

##### `CreateGrantConditionKeys`<sup>Required</sup> <a name="CreateGrantConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.CreateGrantConditionKeys"></a>

```typescript
public readonly CreateGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGrant action.

---

##### `CreateKeyConditionKeys`<sup>Required</sup> <a name="CreateKeyConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.CreateKeyConditionKeys"></a>

```typescript
public readonly CreateKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKey action.

---

##### `CUSTOMER_MASTER_KEY_SPEC`<sup>Required</sup> <a name="CUSTOMER_MASTER_KEY_SPEC" id="@cdk_utils/iam.kms.KMSConditions.property.CUSTOMER_MASTER_KEY_SPEC"></a>

```typescript
public readonly CUSTOMER_MASTER_KEY_SPEC: string;
```

- *Type:* string

Condition key: kms:CustomerMasterKeySpec (String).

---

##### `CUSTOMER_MASTER_KEY_USAGE`<sup>Required</sup> <a name="CUSTOMER_MASTER_KEY_USAGE" id="@cdk_utils/iam.kms.KMSConditions.property.CUSTOMER_MASTER_KEY_USAGE"></a>

```typescript
public readonly CUSTOMER_MASTER_KEY_USAGE: string;
```

- *Type:* string

Condition key: kms:CustomerMasterKeyUsage (String).

---

##### `DATA_KEY_PAIR_SPEC`<sup>Required</sup> <a name="DATA_KEY_PAIR_SPEC" id="@cdk_utils/iam.kms.KMSConditions.property.DATA_KEY_PAIR_SPEC"></a>

```typescript
public readonly DATA_KEY_PAIR_SPEC: string;
```

- *Type:* string

Condition key: kms:DataKeyPairSpec (String).

---

##### `DecryptConditionKeys`<sup>Required</sup> <a name="DecryptConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.DecryptConditionKeys"></a>

```typescript
public readonly DecryptConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Decrypt action.

---

##### `DeleteAliasConditionKeys`<sup>Required</sup> <a name="DeleteAliasConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.DeleteAliasConditionKeys"></a>

```typescript
public readonly DeleteAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAlias action.

---

##### `DeleteCustomKeyStoreConditionKeys`<sup>Required</sup> <a name="DeleteCustomKeyStoreConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.DeleteCustomKeyStoreConditionKeys"></a>

```typescript
public readonly DeleteCustomKeyStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCustomKeyStore action.

---

##### `DeleteImportedKeyMaterialConditionKeys`<sup>Required</sup> <a name="DeleteImportedKeyMaterialConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.DeleteImportedKeyMaterialConditionKeys"></a>

```typescript
public readonly DeleteImportedKeyMaterialConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteImportedKeyMaterial action.

---

##### `DeriveSharedSecretConditionKeys`<sup>Required</sup> <a name="DeriveSharedSecretConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.DeriveSharedSecretConditionKeys"></a>

```typescript
public readonly DeriveSharedSecretConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeriveSharedSecret action.

---

##### `DescribeCustomKeyStoresConditionKeys`<sup>Required</sup> <a name="DescribeCustomKeyStoresConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.DescribeCustomKeyStoresConditionKeys"></a>

```typescript
public readonly DescribeCustomKeyStoresConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCustomKeyStores action.

---

##### `DescribeKeyConditionKeys`<sup>Required</sup> <a name="DescribeKeyConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.DescribeKeyConditionKeys"></a>

```typescript
public readonly DescribeKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeKey action.

---

##### `DisableKeyConditionKeys`<sup>Required</sup> <a name="DisableKeyConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.DisableKeyConditionKeys"></a>

```typescript
public readonly DisableKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisableKey action.

---

##### `DisableKeyRotationConditionKeys`<sup>Required</sup> <a name="DisableKeyRotationConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.DisableKeyRotationConditionKeys"></a>

```typescript
public readonly DisableKeyRotationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisableKeyRotation action.

---

##### `DisconnectCustomKeyStoreConditionKeys`<sup>Required</sup> <a name="DisconnectCustomKeyStoreConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.DisconnectCustomKeyStoreConditionKeys"></a>

```typescript
public readonly DisconnectCustomKeyStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisconnectCustomKeyStore action.

---

##### `EnableKeyConditionKeys`<sup>Required</sup> <a name="EnableKeyConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.EnableKeyConditionKeys"></a>

```typescript
public readonly EnableKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableKey action.

---

##### `EnableKeyRotationConditionKeys`<sup>Required</sup> <a name="EnableKeyRotationConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.EnableKeyRotationConditionKeys"></a>

```typescript
public readonly EnableKeyRotationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableKeyRotation action.

---

##### `EncryptConditionKeys`<sup>Required</sup> <a name="EncryptConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.EncryptConditionKeys"></a>

```typescript
public readonly EncryptConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Encrypt action.

---

##### `ENCRYPTION_ALGORITHM`<sup>Required</sup> <a name="ENCRYPTION_ALGORITHM" id="@cdk_utils/iam.kms.KMSConditions.property.ENCRYPTION_ALGORITHM"></a>

```typescript
public readonly ENCRYPTION_ALGORITHM: string;
```

- *Type:* string

Condition key: kms:EncryptionAlgorithm (String).

---

##### `ENCRYPTION_CONTEXT`<sup>Required</sup> <a name="ENCRYPTION_CONTEXT" id="@cdk_utils/iam.kms.KMSConditions.property.ENCRYPTION_CONTEXT"></a>

```typescript
public readonly ENCRYPTION_CONTEXT: string;
```

- *Type:* string

Condition key: kms:EncryptionContext:${EncryptionContextKey} (String).

---

##### `ENCRYPTION_CONTEXT_KEYS`<sup>Required</sup> <a name="ENCRYPTION_CONTEXT_KEYS" id="@cdk_utils/iam.kms.KMSConditions.property.ENCRYPTION_CONTEXT_KEYS"></a>

```typescript
public readonly ENCRYPTION_CONTEXT_KEYS: string;
```

- *Type:* string

Condition key: kms:EncryptionContextKeys (ArrayOfString).

---

##### `EXPIRATION_MODEL`<sup>Required</sup> <a name="EXPIRATION_MODEL" id="@cdk_utils/iam.kms.KMSConditions.property.EXPIRATION_MODEL"></a>

```typescript
public readonly EXPIRATION_MODEL: string;
```

- *Type:* string

Condition key: kms:ExpirationModel (String).

---

##### `GenerateDataKeyConditionKeys`<sup>Required</sup> <a name="GenerateDataKeyConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.GenerateDataKeyConditionKeys"></a>

```typescript
public readonly GenerateDataKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateDataKey action.

---

##### `GenerateDataKeyPairConditionKeys`<sup>Required</sup> <a name="GenerateDataKeyPairConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.GenerateDataKeyPairConditionKeys"></a>

```typescript
public readonly GenerateDataKeyPairConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateDataKeyPair action.

---

##### `GenerateDataKeyPairWithoutPlaintextConditionKeys`<sup>Required</sup> <a name="GenerateDataKeyPairWithoutPlaintextConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.GenerateDataKeyPairWithoutPlaintextConditionKeys"></a>

```typescript
public readonly GenerateDataKeyPairWithoutPlaintextConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateDataKeyPairWithoutPlaintext action.

---

##### `GenerateDataKeyWithoutPlaintextConditionKeys`<sup>Required</sup> <a name="GenerateDataKeyWithoutPlaintextConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.GenerateDataKeyWithoutPlaintextConditionKeys"></a>

```typescript
public readonly GenerateDataKeyWithoutPlaintextConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateDataKeyWithoutPlaintext action.

---

##### `GenerateMacConditionKeys`<sup>Required</sup> <a name="GenerateMacConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.GenerateMacConditionKeys"></a>

```typescript
public readonly GenerateMacConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateMac action.

---

##### `GenerateRandomConditionKeys`<sup>Required</sup> <a name="GenerateRandomConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.GenerateRandomConditionKeys"></a>

```typescript
public readonly GenerateRandomConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateRandom action.

---

##### `GRANT_CONSTRAINT_SOURCE_ARN`<sup>Required</sup> <a name="GRANT_CONSTRAINT_SOURCE_ARN" id="@cdk_utils/iam.kms.KMSConditions.property.GRANT_CONSTRAINT_SOURCE_ARN"></a>

```typescript
public readonly GRANT_CONSTRAINT_SOURCE_ARN: string;
```

- *Type:* string

Condition key: kms:GrantConstraintSourceArn (ARN).

---

##### `GRANT_CONSTRAINT_TYPE`<sup>Required</sup> <a name="GRANT_CONSTRAINT_TYPE" id="@cdk_utils/iam.kms.KMSConditions.property.GRANT_CONSTRAINT_TYPE"></a>

```typescript
public readonly GRANT_CONSTRAINT_TYPE: string;
```

- *Type:* string

Condition key: kms:GrantConstraintType (String).

---

##### `GRANT_IS_FOR_AWS_RESOURCE`<sup>Required</sup> <a name="GRANT_IS_FOR_AWS_RESOURCE" id="@cdk_utils/iam.kms.KMSConditions.property.GRANT_IS_FOR_AWS_RESOURCE"></a>

```typescript
public readonly GRANT_IS_FOR_AWS_RESOURCE: string;
```

- *Type:* string

Condition key: kms:GrantIsForAWSResource (Bool).

---

##### `GRANT_OPERATIONS`<sup>Required</sup> <a name="GRANT_OPERATIONS" id="@cdk_utils/iam.kms.KMSConditions.property.GRANT_OPERATIONS"></a>

```typescript
public readonly GRANT_OPERATIONS: string;
```

- *Type:* string

Condition key: kms:GrantOperations (ArrayOfString).

---

##### `GRANTEE_PRINCIPAL`<sup>Required</sup> <a name="GRANTEE_PRINCIPAL" id="@cdk_utils/iam.kms.KMSConditions.property.GRANTEE_PRINCIPAL"></a>

```typescript
public readonly GRANTEE_PRINCIPAL: string;
```

- *Type:* string

Condition key: kms:GranteePrincipal (String).

---

##### `GRANTEE_SERVICE_PRINCIPAL`<sup>Required</sup> <a name="GRANTEE_SERVICE_PRINCIPAL" id="@cdk_utils/iam.kms.KMSConditions.property.GRANTEE_SERVICE_PRINCIPAL"></a>

```typescript
public readonly GRANTEE_SERVICE_PRINCIPAL: string;
```

- *Type:* string

Condition key: kms:GranteeServicePrincipal (String).

---

##### `ImportKeyMaterialConditionKeys`<sup>Required</sup> <a name="ImportKeyMaterialConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.ImportKeyMaterialConditionKeys"></a>

```typescript
public readonly ImportKeyMaterialConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportKeyMaterial action.

---

##### `KEY_AGREEMENT_ALGORITHM`<sup>Required</sup> <a name="KEY_AGREEMENT_ALGORITHM" id="@cdk_utils/iam.kms.KMSConditions.property.KEY_AGREEMENT_ALGORITHM"></a>

```typescript
public readonly KEY_AGREEMENT_ALGORITHM: string;
```

- *Type:* string

Condition key: kms:KeyAgreementAlgorithm (String).

---

##### `KEY_ORIGIN`<sup>Required</sup> <a name="KEY_ORIGIN" id="@cdk_utils/iam.kms.KMSConditions.property.KEY_ORIGIN"></a>

```typescript
public readonly KEY_ORIGIN: string;
```

- *Type:* string

Condition key: kms:KeyOrigin (String).

---

##### `KEY_SPEC`<sup>Required</sup> <a name="KEY_SPEC" id="@cdk_utils/iam.kms.KMSConditions.property.KEY_SPEC"></a>

```typescript
public readonly KEY_SPEC: string;
```

- *Type:* string

Condition key: kms:KeySpec (String).

---

##### `KEY_USAGE`<sup>Required</sup> <a name="KEY_USAGE" id="@cdk_utils/iam.kms.KMSConditions.property.KEY_USAGE"></a>

```typescript
public readonly KEY_USAGE: string;
```

- *Type:* string

Condition key: kms:KeyUsage (String).

---

##### `ListGrantsConditionKeys`<sup>Required</sup> <a name="ListGrantsConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.ListGrantsConditionKeys"></a>

```typescript
public readonly ListGrantsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListGrants action.

---

##### `ListKeyPoliciesConditionKeys`<sup>Required</sup> <a name="ListKeyPoliciesConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.ListKeyPoliciesConditionKeys"></a>

```typescript
public readonly ListKeyPoliciesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListKeyPolicies action.

---

##### `ListKeyRotationsConditionKeys`<sup>Required</sup> <a name="ListKeyRotationsConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.ListKeyRotationsConditionKeys"></a>

```typescript
public readonly ListKeyRotationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListKeyRotations action.

---

##### `ListResourceTagsConditionKeys`<sup>Required</sup> <a name="ListResourceTagsConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.ListResourceTagsConditionKeys"></a>

```typescript
public readonly ListResourceTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceTags action.

---

##### `MAC_ALGORITHM`<sup>Required</sup> <a name="MAC_ALGORITHM" id="@cdk_utils/iam.kms.KMSConditions.property.MAC_ALGORITHM"></a>

```typescript
public readonly MAC_ALGORITHM: string;
```

- *Type:* string

Condition key: kms:MacAlgorithm (String).

---

##### `MESSAGE_TYPE`<sup>Required</sup> <a name="MESSAGE_TYPE" id="@cdk_utils/iam.kms.KMSConditions.property.MESSAGE_TYPE"></a>

```typescript
public readonly MESSAGE_TYPE: string;
```

- *Type:* string

Condition key: kms:MessageType (String).

---

##### `MULTI_REGION`<sup>Required</sup> <a name="MULTI_REGION" id="@cdk_utils/iam.kms.KMSConditions.property.MULTI_REGION"></a>

```typescript
public readonly MULTI_REGION: string;
```

- *Type:* string

Condition key: kms:MultiRegion (Bool).

---

##### `MULTI_REGION_KEY_TYPE`<sup>Required</sup> <a name="MULTI_REGION_KEY_TYPE" id="@cdk_utils/iam.kms.KMSConditions.property.MULTI_REGION_KEY_TYPE"></a>

```typescript
public readonly MULTI_REGION_KEY_TYPE: string;
```

- *Type:* string

Condition key: kms:MultiRegionKeyType (String).

---

##### `PRIMARY_REGION`<sup>Required</sup> <a name="PRIMARY_REGION" id="@cdk_utils/iam.kms.KMSConditions.property.PRIMARY_REGION"></a>

```typescript
public readonly PRIMARY_REGION: string;
```

- *Type:* string

Condition key: kms:PrimaryRegion (String).

---

##### `PutKeyPolicyConditionKeys`<sup>Required</sup> <a name="PutKeyPolicyConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.PutKeyPolicyConditionKeys"></a>

```typescript
public readonly PutKeyPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutKeyPolicy action.

---

##### `RE_ENCRYPT_ON_SAME_KEY`<sup>Required</sup> <a name="RE_ENCRYPT_ON_SAME_KEY" id="@cdk_utils/iam.kms.KMSConditions.property.RE_ENCRYPT_ON_SAME_KEY"></a>

```typescript
public readonly RE_ENCRYPT_ON_SAME_KEY: string;
```

- *Type:* string

Condition key: kms:ReEncryptOnSameKey (Bool).

---

##### `RECIPIENT_ATTESTATION_IMAGE_SHA384`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_IMAGE_SHA384" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_IMAGE_SHA384"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_IMAGE_SHA384: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:ImageSha384 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR0`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR0" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR0"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR0: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR0 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR1`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR1" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR1"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR1: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR1 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR10`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR10" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR10"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR10: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR10 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR11`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR11" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR11"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR11: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR11 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR12`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR12" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR12"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR12: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR12 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR13`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR13" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR13"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR13: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR13 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR14`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR14" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR14"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR14: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR14 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR15`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR15" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR15"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR15: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR15 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR16`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR16" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR16"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR16: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR16 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR17`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR17" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR17"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR17: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR17 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR18`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR18" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR18"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR18: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR18 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR19`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR19" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR19"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR19: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR19 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR2`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR2" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR2"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR2: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR2 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR20`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR20" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR20"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR20: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR20 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR21`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR21" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR21"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR21: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR21 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR22`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR22" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR22"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR22: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR22 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR23`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR23" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR23"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR23: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR23 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR3`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR3" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR3"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR3: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR3 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR4`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR4" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR4"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR4: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR4 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR5`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR5" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR5"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR5: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR5 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR6`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR6" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR6"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR6: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR6 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR7`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR7" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR7"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR7: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR7 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR8`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR8" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR8"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR8: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR8 (String).

---

##### `RECIPIENT_ATTESTATION_NITRO_TPMPCR9`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_NITRO_TPMPCR9" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_NITRO_TPMPCR9"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR9: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:NitroTPMPCR9 (String).

---

##### `RECIPIENT_ATTESTATION_PCR0`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR0" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR0"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR0: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR0 (String).

---

##### `RECIPIENT_ATTESTATION_PCR1`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR1" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR1"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR1: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR1 (String).

---

##### `RECIPIENT_ATTESTATION_PCR10`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR10" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR10"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR10: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR10 (String).

---

##### `RECIPIENT_ATTESTATION_PCR11`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR11" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR11"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR11: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR11 (String).

---

##### `RECIPIENT_ATTESTATION_PCR12`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR12" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR12"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR12: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR12 (String).

---

##### `RECIPIENT_ATTESTATION_PCR13`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR13" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR13"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR13: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR13 (String).

---

##### `RECIPIENT_ATTESTATION_PCR14`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR14" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR14"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR14: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR14 (String).

---

##### `RECIPIENT_ATTESTATION_PCR15`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR15" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR15"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR15: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR15 (String).

---

##### `RECIPIENT_ATTESTATION_PCR16`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR16" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR16"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR16: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR16 (String).

---

##### `RECIPIENT_ATTESTATION_PCR17`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR17" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR17"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR17: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR17 (String).

---

##### `RECIPIENT_ATTESTATION_PCR18`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR18" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR18"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR18: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR18 (String).

---

##### `RECIPIENT_ATTESTATION_PCR19`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR19" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR19"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR19: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR19 (String).

---

##### `RECIPIENT_ATTESTATION_PCR2`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR2" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR2"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR2: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR2 (String).

---

##### `RECIPIENT_ATTESTATION_PCR20`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR20" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR20"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR20: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR20 (String).

---

##### `RECIPIENT_ATTESTATION_PCR21`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR21" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR21"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR21: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR21 (String).

---

##### `RECIPIENT_ATTESTATION_PCR22`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR22" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR22"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR22: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR22 (String).

---

##### `RECIPIENT_ATTESTATION_PCR23`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR23" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR23"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR23: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR23 (String).

---

##### `RECIPIENT_ATTESTATION_PCR24`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR24" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR24"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR24: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR24 (String).

---

##### `RECIPIENT_ATTESTATION_PCR25`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR25" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR25"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR25: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR25 (String).

---

##### `RECIPIENT_ATTESTATION_PCR26`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR26" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR26"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR26: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR26 (String).

---

##### `RECIPIENT_ATTESTATION_PCR27`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR27" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR27"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR27: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR27 (String).

---

##### `RECIPIENT_ATTESTATION_PCR28`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR28" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR28"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR28: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR28 (String).

---

##### `RECIPIENT_ATTESTATION_PCR29`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR29" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR29"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR29: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR29 (String).

---

##### `RECIPIENT_ATTESTATION_PCR3`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR3" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR3"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR3: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR3 (String).

---

##### `RECIPIENT_ATTESTATION_PCR30`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR30" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR30"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR30: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR30 (String).

---

##### `RECIPIENT_ATTESTATION_PCR31`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR31" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR31"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR31: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR31 (String).

---

##### `RECIPIENT_ATTESTATION_PCR4`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR4" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR4"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR4: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR4 (String).

---

##### `RECIPIENT_ATTESTATION_PCR5`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR5" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR5"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR5: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR5 (String).

---

##### `RECIPIENT_ATTESTATION_PCR6`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR6" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR6"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR6: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR6 (String).

---

##### `RECIPIENT_ATTESTATION_PCR7`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR7" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR7"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR7: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR7 (String).

---

##### `RECIPIENT_ATTESTATION_PCR8`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR8" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR8"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR8: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR8 (String).

---

##### `RECIPIENT_ATTESTATION_PCR9`<sup>Required</sup> <a name="RECIPIENT_ATTESTATION_PCR9" id="@cdk_utils/iam.kms.KMSConditions.property.RECIPIENT_ATTESTATION_PCR9"></a>

```typescript
public readonly RECIPIENT_ATTESTATION_PCR9: string;
```

- *Type:* string

Condition key: kms:RecipientAttestation:PCR9 (String).

---

##### `ReEncryptFromConditionKeys`<sup>Required</sup> <a name="ReEncryptFromConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.ReEncryptFromConditionKeys"></a>

```typescript
public readonly ReEncryptFromConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReEncryptFrom action.

---

##### `ReEncryptToConditionKeys`<sup>Required</sup> <a name="ReEncryptToConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.ReEncryptToConditionKeys"></a>

```typescript
public readonly ReEncryptToConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReEncryptTo action.

---

##### `REPLICA_REGION`<sup>Required</sup> <a name="REPLICA_REGION" id="@cdk_utils/iam.kms.KMSConditions.property.REPLICA_REGION"></a>

```typescript
public readonly REPLICA_REGION: string;
```

- *Type:* string

Condition key: kms:ReplicaRegion (String).

---

##### `ReplicateKeyConditionKeys`<sup>Required</sup> <a name="ReplicateKeyConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.ReplicateKeyConditionKeys"></a>

```typescript
public readonly ReplicateKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReplicateKey action.

---

##### `REQUEST_ALIAS`<sup>Required</sup> <a name="REQUEST_ALIAS" id="@cdk_utils/iam.kms.KMSConditions.property.REQUEST_ALIAS"></a>

```typescript
public readonly REQUEST_ALIAS: string;
```

- *Type:* string

Condition key: kms:RequestAlias (String).

---

##### `RESOURCE_ALIASES`<sup>Required</sup> <a name="RESOURCE_ALIASES" id="@cdk_utils/iam.kms.KMSConditions.property.RESOURCE_ALIASES"></a>

```typescript
public readonly RESOURCE_ALIASES: string;
```

- *Type:* string

Condition key: kms:ResourceAliases (ArrayOfString).

---

##### `RetireGrantConditionKeys`<sup>Required</sup> <a name="RetireGrantConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.RetireGrantConditionKeys"></a>

```typescript
public readonly RetireGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RetireGrant action.

---

##### `RETIRING_PRINCIPAL`<sup>Required</sup> <a name="RETIRING_PRINCIPAL" id="@cdk_utils/iam.kms.KMSConditions.property.RETIRING_PRINCIPAL"></a>

```typescript
public readonly RETIRING_PRINCIPAL: string;
```

- *Type:* string

Condition key: kms:RetiringPrincipal (String).

---

##### `RETIRING_SERVICE_PRINCIPAL`<sup>Required</sup> <a name="RETIRING_SERVICE_PRINCIPAL" id="@cdk_utils/iam.kms.KMSConditions.property.RETIRING_SERVICE_PRINCIPAL"></a>

```typescript
public readonly RETIRING_SERVICE_PRINCIPAL: string;
```

- *Type:* string

Condition key: kms:RetiringServicePrincipal (String).

---

##### `RevokeGrantConditionKeys`<sup>Required</sup> <a name="RevokeGrantConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.RevokeGrantConditionKeys"></a>

```typescript
public readonly RevokeGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RevokeGrant action.

---

##### `RotateKeyOnDemandConditionKeys`<sup>Required</sup> <a name="RotateKeyOnDemandConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.RotateKeyOnDemandConditionKeys"></a>

```typescript
public readonly RotateKeyOnDemandConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RotateKeyOnDemand action.

---

##### `ROTATION_PERIOD_IN_DAYS`<sup>Required</sup> <a name="ROTATION_PERIOD_IN_DAYS" id="@cdk_utils/iam.kms.KMSConditions.property.ROTATION_PERIOD_IN_DAYS"></a>

```typescript
public readonly ROTATION_PERIOD_IN_DAYS: string;
```

- *Type:* string

Condition key: kms:RotationPeriodInDays (Numeric).

---

##### `SCHEDULE_KEY_DELETION_PENDING_WINDOW_IN_DAYS`<sup>Required</sup> <a name="SCHEDULE_KEY_DELETION_PENDING_WINDOW_IN_DAYS" id="@cdk_utils/iam.kms.KMSConditions.property.SCHEDULE_KEY_DELETION_PENDING_WINDOW_IN_DAYS"></a>

```typescript
public readonly SCHEDULE_KEY_DELETION_PENDING_WINDOW_IN_DAYS: string;
```

- *Type:* string

Condition key: kms:ScheduleKeyDeletionPendingWindowInDays (Numeric).

---

##### `ScheduleKeyDeletionConditionKeys`<sup>Required</sup> <a name="ScheduleKeyDeletionConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.ScheduleKeyDeletionConditionKeys"></a>

```typescript
public readonly ScheduleKeyDeletionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ScheduleKeyDeletion action.

---

##### `SignConditionKeys`<sup>Required</sup> <a name="SignConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.SignConditionKeys"></a>

```typescript
public readonly SignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Sign action.

---

##### `SIGNING_ALGORITHM`<sup>Required</sup> <a name="SIGNING_ALGORITHM" id="@cdk_utils/iam.kms.KMSConditions.property.SIGNING_ALGORITHM"></a>

```typescript
public readonly SIGNING_ALGORITHM: string;
```

- *Type:* string

Condition key: kms:SigningAlgorithm (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TRAILING_DAYS_WITHOUT_KEY_USAGE`<sup>Required</sup> <a name="TRAILING_DAYS_WITHOUT_KEY_USAGE" id="@cdk_utils/iam.kms.KMSConditions.property.TRAILING_DAYS_WITHOUT_KEY_USAGE"></a>

```typescript
public readonly TRAILING_DAYS_WITHOUT_KEY_USAGE: string;
```

- *Type:* string

Condition key: kms:TrailingDaysWithoutKeyUsage (Numeric).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAliasConditionKeys`<sup>Required</sup> <a name="UpdateAliasConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.UpdateAliasConditionKeys"></a>

```typescript
public readonly UpdateAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAlias action.

---

##### `UpdateCustomKeyStoreConditionKeys`<sup>Required</sup> <a name="UpdateCustomKeyStoreConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.UpdateCustomKeyStoreConditionKeys"></a>

```typescript
public readonly UpdateCustomKeyStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCustomKeyStore action.

---

##### `UpdateKeyDescriptionConditionKeys`<sup>Required</sup> <a name="UpdateKeyDescriptionConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.UpdateKeyDescriptionConditionKeys"></a>

```typescript
public readonly UpdateKeyDescriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateKeyDescription action.

---

##### `UpdatePrimaryRegionConditionKeys`<sup>Required</sup> <a name="UpdatePrimaryRegionConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.UpdatePrimaryRegionConditionKeys"></a>

```typescript
public readonly UpdatePrimaryRegionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePrimaryRegion action.

---

##### `VALID_TO`<sup>Required</sup> <a name="VALID_TO" id="@cdk_utils/iam.kms.KMSConditions.property.VALID_TO"></a>

```typescript
public readonly VALID_TO: string;
```

- *Type:* string

Condition key: kms:ValidTo (Date).

---

##### `VerifyConditionKeys`<sup>Required</sup> <a name="VerifyConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.VerifyConditionKeys"></a>

```typescript
public readonly VerifyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Verify action.

---

##### `VerifyMacConditionKeys`<sup>Required</sup> <a name="VerifyMacConditionKeys" id="@cdk_utils/iam.kms.KMSConditions.property.VerifyMacConditionKeys"></a>

```typescript
public readonly VerifyMacConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyMac action.

---

##### `VIA_SERVICE`<sup>Required</sup> <a name="VIA_SERVICE" id="@cdk_utils/iam.kms.KMSConditions.property.VIA_SERVICE"></a>

```typescript
public readonly VIA_SERVICE: string;
```

- *Type:* string

Condition key: kms:ViaService (String).

---

##### `WRAPPING_ALGORITHM`<sup>Required</sup> <a name="WRAPPING_ALGORITHM" id="@cdk_utils/iam.kms.KMSConditions.property.WRAPPING_ALGORITHM"></a>

```typescript
public readonly WRAPPING_ALGORITHM: string;
```

- *Type:* string

Condition key: kms:WrappingAlgorithm (String).

---

##### `WRAPPING_KEY_SPEC`<sup>Required</sup> <a name="WRAPPING_KEY_SPEC" id="@cdk_utils/iam.kms.KMSConditions.property.WRAPPING_KEY_SPEC"></a>

```typescript
public readonly WRAPPING_KEY_SPEC: string;
```

- *Type:* string

Condition key: kms:WrappingKeySpec (String).

---

### KMSOperations <a name="KMSOperations" id="@cdk_utils/iam.kms.KMSOperations"></a>

API operation to required IAM actions mapping for kms.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kms.KMSOperations.Initializer"></a>

```typescript
import { kms } from '@cdk_utils/iam'

new kms.KMSOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.CancelKeyDeletion">CancelKeyDeletion</a></code> | <code>string[]</code> | IAM actions required for the CancelKeyDeletion API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ConnectCustomKeyStore">ConnectCustomKeyStore</a></code> | <code>string[]</code> | IAM actions required for the ConnectCustomKeyStore API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.CreateAlias">CreateAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateAlias API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.CreateCustomKeyStore">CreateCustomKeyStore</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomKeyStore API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.CreateGrant">CreateGrant</a></code> | <code>string[]</code> | IAM actions required for the CreateGrant API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.CreateKey">CreateKey</a></code> | <code>string[]</code> | IAM actions required for the CreateKey API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.Decrypt">Decrypt</a></code> | <code>string[]</code> | IAM actions required for the Decrypt API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.DeleteAlias">DeleteAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlias API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.DeleteCustomKeyStore">DeleteCustomKeyStore</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomKeyStore API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.DeleteImportedKeyMaterial">DeleteImportedKeyMaterial</a></code> | <code>string[]</code> | IAM actions required for the DeleteImportedKeyMaterial API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.DeriveSharedSecret">DeriveSharedSecret</a></code> | <code>string[]</code> | IAM actions required for the DeriveSharedSecret API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.DescribeCustomKeyStores">DescribeCustomKeyStores</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomKeyStores API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.DescribeKey">DescribeKey</a></code> | <code>string[]</code> | IAM actions required for the DescribeKey API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.DisableKey">DisableKey</a></code> | <code>string[]</code> | IAM actions required for the DisableKey API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.DisableKeyRotation">DisableKeyRotation</a></code> | <code>string[]</code> | IAM actions required for the DisableKeyRotation API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.DisconnectCustomKeyStore">DisconnectCustomKeyStore</a></code> | <code>string[]</code> | IAM actions required for the DisconnectCustomKeyStore API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.EnableKey">EnableKey</a></code> | <code>string[]</code> | IAM actions required for the EnableKey API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.EnableKeyRotation">EnableKeyRotation</a></code> | <code>string[]</code> | IAM actions required for the EnableKeyRotation API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.Encrypt">Encrypt</a></code> | <code>string[]</code> | IAM actions required for the Encrypt API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.GenerateDataKey">GenerateDataKey</a></code> | <code>string[]</code> | IAM actions required for the GenerateDataKey API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.GenerateDataKeyPair">GenerateDataKeyPair</a></code> | <code>string[]</code> | IAM actions required for the GenerateDataKeyPair API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.GenerateDataKeyPairWithoutPlaintext">GenerateDataKeyPairWithoutPlaintext</a></code> | <code>string[]</code> | IAM actions required for the GenerateDataKeyPairWithoutPlaintext API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.GenerateDataKeyWithoutPlaintext">GenerateDataKeyWithoutPlaintext</a></code> | <code>string[]</code> | IAM actions required for the GenerateDataKeyWithoutPlaintext API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.GenerateMac">GenerateMac</a></code> | <code>string[]</code> | IAM actions required for the GenerateMac API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.GenerateRandom">GenerateRandom</a></code> | <code>string[]</code> | IAM actions required for the GenerateRandom API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ImportKeyMaterial">ImportKeyMaterial</a></code> | <code>string[]</code> | IAM actions required for the ImportKeyMaterial API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ListAliases">ListAliases</a></code> | <code>string[]</code> | IAM actions required for the ListAliases API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ListGrants">ListGrants</a></code> | <code>string[]</code> | IAM actions required for the ListGrants API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ListKeyPolicies">ListKeyPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListKeyPolicies API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ListKeyRotations">ListKeyRotations</a></code> | <code>string[]</code> | IAM actions required for the ListKeyRotations API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ListKeys">ListKeys</a></code> | <code>string[]</code> | IAM actions required for the ListKeys API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ListResourceTags">ListResourceTags</a></code> | <code>string[]</code> | IAM actions required for the ListResourceTags API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ListRetirableGrants">ListRetirableGrants</a></code> | <code>string[]</code> | IAM actions required for the ListRetirableGrants API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.opGetKeyLastUsage">opGetKeyLastUsage</a></code> | <code>string[]</code> | IAM actions required for the GetKeyLastUsage API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.opGetKeyPolicy">opGetKeyPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetKeyPolicy API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.opGetKeyRotationStatus">opGetKeyRotationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetKeyRotationStatus API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.opGetParametersForImport">opGetParametersForImport</a></code> | <code>string[]</code> | IAM actions required for the GetParametersForImport API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.opGetPublicKey">opGetPublicKey</a></code> | <code>string[]</code> | IAM actions required for the GetPublicKey API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.PutKeyPolicy">PutKeyPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutKeyPolicy API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ReEncrypt">ReEncrypt</a></code> | <code>string[]</code> | IAM actions required for the ReEncrypt API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ReplicateKey">ReplicateKey</a></code> | <code>string[]</code> | IAM actions required for the ReplicateKey API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.RetireGrant">RetireGrant</a></code> | <code>string[]</code> | IAM actions required for the RetireGrant API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.RevokeGrant">RevokeGrant</a></code> | <code>string[]</code> | IAM actions required for the RevokeGrant API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.RotateKeyOnDemand">RotateKeyOnDemand</a></code> | <code>string[]</code> | IAM actions required for the RotateKeyOnDemand API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.ScheduleKeyDeletion">ScheduleKeyDeletion</a></code> | <code>string[]</code> | IAM actions required for the ScheduleKeyDeletion API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.Sign">Sign</a></code> | <code>string[]</code> | IAM actions required for the Sign API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.UpdateAlias">UpdateAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateAlias API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.UpdateCustomKeyStore">UpdateCustomKeyStore</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomKeyStore API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.UpdateKeyDescription">UpdateKeyDescription</a></code> | <code>string[]</code> | IAM actions required for the UpdateKeyDescription API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.UpdatePrimaryRegion">UpdatePrimaryRegion</a></code> | <code>string[]</code> | IAM actions required for the UpdatePrimaryRegion API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.Verify">Verify</a></code> | <code>string[]</code> | IAM actions required for the Verify API call. |
| <code><a href="#@cdk_utils/iam.kms.KMSOperations.property.VerifyMac">VerifyMac</a></code> | <code>string[]</code> | IAM actions required for the VerifyMac API call. |

---

##### `CancelKeyDeletion`<sup>Required</sup> <a name="CancelKeyDeletion" id="@cdk_utils/iam.kms.KMSOperations.property.CancelKeyDeletion"></a>

```typescript
public readonly CancelKeyDeletion: string[];
```

- *Type:* string[]

IAM actions required for the CancelKeyDeletion API call.

---

##### `ConnectCustomKeyStore`<sup>Required</sup> <a name="ConnectCustomKeyStore" id="@cdk_utils/iam.kms.KMSOperations.property.ConnectCustomKeyStore"></a>

```typescript
public readonly ConnectCustomKeyStore: string[];
```

- *Type:* string[]

IAM actions required for the ConnectCustomKeyStore API call.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.kms.KMSOperations.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateAlias API call.

---

##### `CreateCustomKeyStore`<sup>Required</sup> <a name="CreateCustomKeyStore" id="@cdk_utils/iam.kms.KMSOperations.property.CreateCustomKeyStore"></a>

```typescript
public readonly CreateCustomKeyStore: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomKeyStore API call.

---

##### `CreateGrant`<sup>Required</sup> <a name="CreateGrant" id="@cdk_utils/iam.kms.KMSOperations.property.CreateGrant"></a>

```typescript
public readonly CreateGrant: string[];
```

- *Type:* string[]

IAM actions required for the CreateGrant API call.

---

##### `CreateKey`<sup>Required</sup> <a name="CreateKey" id="@cdk_utils/iam.kms.KMSOperations.property.CreateKey"></a>

```typescript
public readonly CreateKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateKey API call.

---

##### `Decrypt`<sup>Required</sup> <a name="Decrypt" id="@cdk_utils/iam.kms.KMSOperations.property.Decrypt"></a>

```typescript
public readonly Decrypt: string[];
```

- *Type:* string[]

IAM actions required for the Decrypt API call.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.kms.KMSOperations.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlias API call.

---

##### `DeleteCustomKeyStore`<sup>Required</sup> <a name="DeleteCustomKeyStore" id="@cdk_utils/iam.kms.KMSOperations.property.DeleteCustomKeyStore"></a>

```typescript
public readonly DeleteCustomKeyStore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomKeyStore API call.

---

##### `DeleteImportedKeyMaterial`<sup>Required</sup> <a name="DeleteImportedKeyMaterial" id="@cdk_utils/iam.kms.KMSOperations.property.DeleteImportedKeyMaterial"></a>

```typescript
public readonly DeleteImportedKeyMaterial: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImportedKeyMaterial API call.

---

##### `DeriveSharedSecret`<sup>Required</sup> <a name="DeriveSharedSecret" id="@cdk_utils/iam.kms.KMSOperations.property.DeriveSharedSecret"></a>

```typescript
public readonly DeriveSharedSecret: string[];
```

- *Type:* string[]

IAM actions required for the DeriveSharedSecret API call.

---

##### `DescribeCustomKeyStores`<sup>Required</sup> <a name="DescribeCustomKeyStores" id="@cdk_utils/iam.kms.KMSOperations.property.DescribeCustomKeyStores"></a>

```typescript
public readonly DescribeCustomKeyStores: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomKeyStores API call.

---

##### `DescribeKey`<sup>Required</sup> <a name="DescribeKey" id="@cdk_utils/iam.kms.KMSOperations.property.DescribeKey"></a>

```typescript
public readonly DescribeKey: string[];
```

- *Type:* string[]

IAM actions required for the DescribeKey API call.

---

##### `DisableKey`<sup>Required</sup> <a name="DisableKey" id="@cdk_utils/iam.kms.KMSOperations.property.DisableKey"></a>

```typescript
public readonly DisableKey: string[];
```

- *Type:* string[]

IAM actions required for the DisableKey API call.

---

##### `DisableKeyRotation`<sup>Required</sup> <a name="DisableKeyRotation" id="@cdk_utils/iam.kms.KMSOperations.property.DisableKeyRotation"></a>

```typescript
public readonly DisableKeyRotation: string[];
```

- *Type:* string[]

IAM actions required for the DisableKeyRotation API call.

---

##### `DisconnectCustomKeyStore`<sup>Required</sup> <a name="DisconnectCustomKeyStore" id="@cdk_utils/iam.kms.KMSOperations.property.DisconnectCustomKeyStore"></a>

```typescript
public readonly DisconnectCustomKeyStore: string[];
```

- *Type:* string[]

IAM actions required for the DisconnectCustomKeyStore API call.

---

##### `EnableKey`<sup>Required</sup> <a name="EnableKey" id="@cdk_utils/iam.kms.KMSOperations.property.EnableKey"></a>

```typescript
public readonly EnableKey: string[];
```

- *Type:* string[]

IAM actions required for the EnableKey API call.

---

##### `EnableKeyRotation`<sup>Required</sup> <a name="EnableKeyRotation" id="@cdk_utils/iam.kms.KMSOperations.property.EnableKeyRotation"></a>

```typescript
public readonly EnableKeyRotation: string[];
```

- *Type:* string[]

IAM actions required for the EnableKeyRotation API call.

---

##### `Encrypt`<sup>Required</sup> <a name="Encrypt" id="@cdk_utils/iam.kms.KMSOperations.property.Encrypt"></a>

```typescript
public readonly Encrypt: string[];
```

- *Type:* string[]

IAM actions required for the Encrypt API call.

---

##### `GenerateDataKey`<sup>Required</sup> <a name="GenerateDataKey" id="@cdk_utils/iam.kms.KMSOperations.property.GenerateDataKey"></a>

```typescript
public readonly GenerateDataKey: string[];
```

- *Type:* string[]

IAM actions required for the GenerateDataKey API call.

---

##### `GenerateDataKeyPair`<sup>Required</sup> <a name="GenerateDataKeyPair" id="@cdk_utils/iam.kms.KMSOperations.property.GenerateDataKeyPair"></a>

```typescript
public readonly GenerateDataKeyPair: string[];
```

- *Type:* string[]

IAM actions required for the GenerateDataKeyPair API call.

---

##### `GenerateDataKeyPairWithoutPlaintext`<sup>Required</sup> <a name="GenerateDataKeyPairWithoutPlaintext" id="@cdk_utils/iam.kms.KMSOperations.property.GenerateDataKeyPairWithoutPlaintext"></a>

```typescript
public readonly GenerateDataKeyPairWithoutPlaintext: string[];
```

- *Type:* string[]

IAM actions required for the GenerateDataKeyPairWithoutPlaintext API call.

---

##### `GenerateDataKeyWithoutPlaintext`<sup>Required</sup> <a name="GenerateDataKeyWithoutPlaintext" id="@cdk_utils/iam.kms.KMSOperations.property.GenerateDataKeyWithoutPlaintext"></a>

```typescript
public readonly GenerateDataKeyWithoutPlaintext: string[];
```

- *Type:* string[]

IAM actions required for the GenerateDataKeyWithoutPlaintext API call.

---

##### `GenerateMac`<sup>Required</sup> <a name="GenerateMac" id="@cdk_utils/iam.kms.KMSOperations.property.GenerateMac"></a>

```typescript
public readonly GenerateMac: string[];
```

- *Type:* string[]

IAM actions required for the GenerateMac API call.

---

##### `GenerateRandom`<sup>Required</sup> <a name="GenerateRandom" id="@cdk_utils/iam.kms.KMSOperations.property.GenerateRandom"></a>

```typescript
public readonly GenerateRandom: string[];
```

- *Type:* string[]

IAM actions required for the GenerateRandom API call.

---

##### `ImportKeyMaterial`<sup>Required</sup> <a name="ImportKeyMaterial" id="@cdk_utils/iam.kms.KMSOperations.property.ImportKeyMaterial"></a>

```typescript
public readonly ImportKeyMaterial: string[];
```

- *Type:* string[]

IAM actions required for the ImportKeyMaterial API call.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.kms.KMSOperations.property.ListAliases"></a>

```typescript
public readonly ListAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListAliases API call.

---

##### `ListGrants`<sup>Required</sup> <a name="ListGrants" id="@cdk_utils/iam.kms.KMSOperations.property.ListGrants"></a>

```typescript
public readonly ListGrants: string[];
```

- *Type:* string[]

IAM actions required for the ListGrants API call.

---

##### `ListKeyPolicies`<sup>Required</sup> <a name="ListKeyPolicies" id="@cdk_utils/iam.kms.KMSOperations.property.ListKeyPolicies"></a>

```typescript
public readonly ListKeyPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListKeyPolicies API call.

---

##### `ListKeyRotations`<sup>Required</sup> <a name="ListKeyRotations" id="@cdk_utils/iam.kms.KMSOperations.property.ListKeyRotations"></a>

```typescript
public readonly ListKeyRotations: string[];
```

- *Type:* string[]

IAM actions required for the ListKeyRotations API call.

---

##### `ListKeys`<sup>Required</sup> <a name="ListKeys" id="@cdk_utils/iam.kms.KMSOperations.property.ListKeys"></a>

```typescript
public readonly ListKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListKeys API call.

---

##### `ListResourceTags`<sup>Required</sup> <a name="ListResourceTags" id="@cdk_utils/iam.kms.KMSOperations.property.ListResourceTags"></a>

```typescript
public readonly ListResourceTags: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceTags API call.

---

##### `ListRetirableGrants`<sup>Required</sup> <a name="ListRetirableGrants" id="@cdk_utils/iam.kms.KMSOperations.property.ListRetirableGrants"></a>

```typescript
public readonly ListRetirableGrants: string[];
```

- *Type:* string[]

IAM actions required for the ListRetirableGrants API call.

---

##### `opGetKeyLastUsage`<sup>Required</sup> <a name="opGetKeyLastUsage" id="@cdk_utils/iam.kms.KMSOperations.property.opGetKeyLastUsage"></a>

```typescript
public readonly opGetKeyLastUsage: string[];
```

- *Type:* string[]

IAM actions required for the GetKeyLastUsage API call.

---

##### `opGetKeyPolicy`<sup>Required</sup> <a name="opGetKeyPolicy" id="@cdk_utils/iam.kms.KMSOperations.property.opGetKeyPolicy"></a>

```typescript
public readonly opGetKeyPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetKeyPolicy API call.

---

##### `opGetKeyRotationStatus`<sup>Required</sup> <a name="opGetKeyRotationStatus" id="@cdk_utils/iam.kms.KMSOperations.property.opGetKeyRotationStatus"></a>

```typescript
public readonly opGetKeyRotationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetKeyRotationStatus API call.

---

##### `opGetParametersForImport`<sup>Required</sup> <a name="opGetParametersForImport" id="@cdk_utils/iam.kms.KMSOperations.property.opGetParametersForImport"></a>

```typescript
public readonly opGetParametersForImport: string[];
```

- *Type:* string[]

IAM actions required for the GetParametersForImport API call.

---

##### `opGetPublicKey`<sup>Required</sup> <a name="opGetPublicKey" id="@cdk_utils/iam.kms.KMSOperations.property.opGetPublicKey"></a>

```typescript
public readonly opGetPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the GetPublicKey API call.

---

##### `PutKeyPolicy`<sup>Required</sup> <a name="PutKeyPolicy" id="@cdk_utils/iam.kms.KMSOperations.property.PutKeyPolicy"></a>

```typescript
public readonly PutKeyPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutKeyPolicy API call.

---

##### `ReEncrypt`<sup>Required</sup> <a name="ReEncrypt" id="@cdk_utils/iam.kms.KMSOperations.property.ReEncrypt"></a>

```typescript
public readonly ReEncrypt: string[];
```

- *Type:* string[]

IAM actions required for the ReEncrypt API call.

---

##### `ReplicateKey`<sup>Required</sup> <a name="ReplicateKey" id="@cdk_utils/iam.kms.KMSOperations.property.ReplicateKey"></a>

```typescript
public readonly ReplicateKey: string[];
```

- *Type:* string[]

IAM actions required for the ReplicateKey API call.

---

##### `RetireGrant`<sup>Required</sup> <a name="RetireGrant" id="@cdk_utils/iam.kms.KMSOperations.property.RetireGrant"></a>

```typescript
public readonly RetireGrant: string[];
```

- *Type:* string[]

IAM actions required for the RetireGrant API call.

---

##### `RevokeGrant`<sup>Required</sup> <a name="RevokeGrant" id="@cdk_utils/iam.kms.KMSOperations.property.RevokeGrant"></a>

```typescript
public readonly RevokeGrant: string[];
```

- *Type:* string[]

IAM actions required for the RevokeGrant API call.

---

##### `RotateKeyOnDemand`<sup>Required</sup> <a name="RotateKeyOnDemand" id="@cdk_utils/iam.kms.KMSOperations.property.RotateKeyOnDemand"></a>

```typescript
public readonly RotateKeyOnDemand: string[];
```

- *Type:* string[]

IAM actions required for the RotateKeyOnDemand API call.

---

##### `ScheduleKeyDeletion`<sup>Required</sup> <a name="ScheduleKeyDeletion" id="@cdk_utils/iam.kms.KMSOperations.property.ScheduleKeyDeletion"></a>

```typescript
public readonly ScheduleKeyDeletion: string[];
```

- *Type:* string[]

IAM actions required for the ScheduleKeyDeletion API call.

---

##### `Sign`<sup>Required</sup> <a name="Sign" id="@cdk_utils/iam.kms.KMSOperations.property.Sign"></a>

```typescript
public readonly Sign: string[];
```

- *Type:* string[]

IAM actions required for the Sign API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kms.KMSOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kms.KMSOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAlias`<sup>Required</sup> <a name="UpdateAlias" id="@cdk_utils/iam.kms.KMSOperations.property.UpdateAlias"></a>

```typescript
public readonly UpdateAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAlias API call.

---

##### `UpdateCustomKeyStore`<sup>Required</sup> <a name="UpdateCustomKeyStore" id="@cdk_utils/iam.kms.KMSOperations.property.UpdateCustomKeyStore"></a>

```typescript
public readonly UpdateCustomKeyStore: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomKeyStore API call.

---

##### `UpdateKeyDescription`<sup>Required</sup> <a name="UpdateKeyDescription" id="@cdk_utils/iam.kms.KMSOperations.property.UpdateKeyDescription"></a>

```typescript
public readonly UpdateKeyDescription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKeyDescription API call.

---

##### `UpdatePrimaryRegion`<sup>Required</sup> <a name="UpdatePrimaryRegion" id="@cdk_utils/iam.kms.KMSOperations.property.UpdatePrimaryRegion"></a>

```typescript
public readonly UpdatePrimaryRegion: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePrimaryRegion API call.

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdk_utils/iam.kms.KMSOperations.property.Verify"></a>

```typescript
public readonly Verify: string[];
```

- *Type:* string[]

IAM actions required for the Verify API call.

---

##### `VerifyMac`<sup>Required</sup> <a name="VerifyMac" id="@cdk_utils/iam.kms.KMSOperations.property.VerifyMac"></a>

```typescript
public readonly VerifyMac: string[];
```

- *Type:* string[]

IAM actions required for the VerifyMac API call.

---

### KMSResources <a name="KMSResources" id="@cdk_utils/iam.kms.KMSResources"></a>

ARN builders, validators, and parsers for kms resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kms.KMSResources.Initializer"></a>

```typescript
import { kms } from '@cdk_utils/iam'

new kms.KMSResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kms.KMSResources.alias">alias</a></code> | Builds an ARN for the alias resource. |
| <code><a href="#@cdk_utils/iam.kms.KMSResources.isValidAliasArn">isValidAliasArn</a></code> | Validates whether a string is a valid ARN for the alias resource. |
| <code><a href="#@cdk_utils/iam.kms.KMSResources.isValidKeyArn">isValidKeyArn</a></code> | Validates whether a string is a valid ARN for the key resource. |
| <code><a href="#@cdk_utils/iam.kms.KMSResources.key">key</a></code> | Builds an ARN for the key resource. |
| <code><a href="#@cdk_utils/iam.kms.KMSResources.parseAliasArn">parseAliasArn</a></code> | Parses a alias ARN into its components. |
| <code><a href="#@cdk_utils/iam.kms.KMSResources.parseKeyArn">parseKeyArn</a></code> | Parses a key ARN into its components. |

---

##### `alias` <a name="alias" id="@cdk_utils/iam.kms.KMSResources.alias"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSResources.alias(props: KMSAliasArnProps)
```

Builds an ARN for the alias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kms.KMSResources.alias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kms.KMSAliasArnProps">KMSAliasArnProps</a>

---

##### `isValidAliasArn` <a name="isValidAliasArn" id="@cdk_utils/iam.kms.KMSResources.isValidAliasArn"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSResources.isValidAliasArn(arn: string)
```

Validates whether a string is a valid ARN for the alias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kms.KMSResources.isValidAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKeyArn` <a name="isValidKeyArn" id="@cdk_utils/iam.kms.KMSResources.isValidKeyArn"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSResources.isValidKeyArn(arn: string)
```

Validates whether a string is a valid ARN for the key resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kms.KMSResources.isValidKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `key` <a name="key" id="@cdk_utils/iam.kms.KMSResources.key"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSResources.key(props: KMSKeyArnProps)
```

Builds an ARN for the key resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kms.KMSResources.key.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kms.KMSKeyArnProps">KMSKeyArnProps</a>

---

##### `parseAliasArn` <a name="parseAliasArn" id="@cdk_utils/iam.kms.KMSResources.parseAliasArn"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSResources.parseAliasArn(arn: string)
```

Parses a alias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kms.KMSResources.parseAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKeyArn` <a name="parseKeyArn" id="@cdk_utils/iam.kms.KMSResources.parseKeyArn"></a>

```typescript
import { kms } from '@cdk_utils/iam'

kms.KMSResources.parseKeyArn(arn: string)
```

Parses a key ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kms.KMSResources.parseKeyArn.parameter.arn"></a>

- *Type:* string

---




