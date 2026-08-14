# `glacier` Submodule <a name="`glacier` Submodule" id="@cdk_utils/iam.glacier"></a>


## Structs <a name="Structs" id="Structs"></a>

### GlacierVaultArnComponents <a name="GlacierVaultArnComponents" id="@cdk_utils/iam.glacier.GlacierVaultArnComponents"></a>

Parsed components of a vault ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glacier.GlacierVaultArnComponents.Initializer"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

const glacierVaultArnComponents: glacier.GlacierVaultArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glacier.GlacierVaultArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierVaultArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierVaultArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierVaultArnComponents.property.vaultName">vaultName</a></code> | <code>string</code> | The VaultName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glacier.GlacierVaultArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glacier.GlacierVaultArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glacier.GlacierVaultArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vaultName`<sup>Required</sup> <a name="vaultName" id="@cdk_utils/iam.glacier.GlacierVaultArnComponents.property.vaultName"></a>

```typescript
public readonly vaultName: string;
```

- *Type:* string

The VaultName component.

---

### GlacierVaultArnProps <a name="GlacierVaultArnProps" id="@cdk_utils/iam.glacier.GlacierVaultArnProps"></a>

Properties for building a vault ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glacier.GlacierVaultArnProps.Initializer"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

const glacierVaultArnProps: glacier.GlacierVaultArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glacier.GlacierVaultArnProps.property.vaultName">vaultName</a></code> | <code>string</code> | The VaultName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierVaultArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierVaultArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierVaultArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vaultName`<sup>Required</sup> <a name="vaultName" id="@cdk_utils/iam.glacier.GlacierVaultArnProps.property.vaultName"></a>

```typescript
public readonly vaultName: string;
```

- *Type:* string

The VaultName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glacier.GlacierVaultArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glacier.GlacierVaultArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glacier.GlacierVaultArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GlacierActions <a name="GlacierActions" id="@cdk_utils/iam.glacier.GlacierActions"></a>

IAM action constants for the glacier service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.glacier.GlacierActions.Initializer"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

new glacier.GlacierActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.AbortMultipartUpload">AbortMultipartUpload</a></code> | <code>string</code> | [Write] glacier:AbortMultipartUpload. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.AbortVaultLock">AbortVaultLock</a></code> | <code>string</code> | [PermissionManagement] glacier:AbortVaultLock. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.actionGetDataRetrievalPolicy">actionGetDataRetrievalPolicy</a></code> | <code>string</code> | [Read] glacier:GetDataRetrievalPolicy. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.actionGetJobOutput">actionGetJobOutput</a></code> | <code>string</code> | [Read] glacier:GetJobOutput. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.actionGetVaultAccessPolicy">actionGetVaultAccessPolicy</a></code> | <code>string</code> | [Read] glacier:GetVaultAccessPolicy. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.actionGetVaultLock">actionGetVaultLock</a></code> | <code>string</code> | [Read] glacier:GetVaultLock. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.actionGetVaultNotifications">actionGetVaultNotifications</a></code> | <code>string</code> | [Read] glacier:GetVaultNotifications. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.actionSetDataRetrievalPolicy">actionSetDataRetrievalPolicy</a></code> | <code>string</code> | [PermissionManagement] glacier:SetDataRetrievalPolicy. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.actionSetVaultAccessPolicy">actionSetVaultAccessPolicy</a></code> | <code>string</code> | [PermissionManagement] glacier:SetVaultAccessPolicy. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.actionSetVaultNotifications">actionSetVaultNotifications</a></code> | <code>string</code> | [Write] glacier:SetVaultNotifications. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.AddTagsToVault">AddTagsToVault</a></code> | <code>string</code> | [Tagging] glacier:AddTagsToVault. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.CompleteMultipartUpload">CompleteMultipartUpload</a></code> | <code>string</code> | [Write] glacier:CompleteMultipartUpload. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.CompleteVaultLock">CompleteVaultLock</a></code> | <code>string</code> | [PermissionManagement] glacier:CompleteVaultLock. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.CreateVault">CreateVault</a></code> | <code>string</code> | [Write] glacier:CreateVault. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.DeleteArchive">DeleteArchive</a></code> | <code>string</code> | [Write] glacier:DeleteArchive. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.DeleteVault">DeleteVault</a></code> | <code>string</code> | [Write] glacier:DeleteVault. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.DeleteVaultAccessPolicy">DeleteVaultAccessPolicy</a></code> | <code>string</code> | [PermissionManagement] glacier:DeleteVaultAccessPolicy. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.DeleteVaultNotifications">DeleteVaultNotifications</a></code> | <code>string</code> | [Write] glacier:DeleteVaultNotifications. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.DescribeJob">DescribeJob</a></code> | <code>string</code> | [Read] glacier:DescribeJob. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.DescribeVault">DescribeVault</a></code> | <code>string</code> | [Read] glacier:DescribeVault. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.InitiateJob">InitiateJob</a></code> | <code>string</code> | [Write] glacier:InitiateJob. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.InitiateMultipartUpload">InitiateMultipartUpload</a></code> | <code>string</code> | [Write] glacier:InitiateMultipartUpload. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.InitiateVaultLock">InitiateVaultLock</a></code> | <code>string</code> | [PermissionManagement] glacier:InitiateVaultLock. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] glacier:ListJobs. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.ListMultipartUploads">ListMultipartUploads</a></code> | <code>string</code> | [List] glacier:ListMultipartUploads. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.ListParts">ListParts</a></code> | <code>string</code> | [List] glacier:ListParts. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.ListProvisionedCapacity">ListProvisionedCapacity</a></code> | <code>string</code> | [List] glacier:ListProvisionedCapacity. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.ListTagsForVault">ListTagsForVault</a></code> | <code>string</code> | [List] glacier:ListTagsForVault. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.ListVaults">ListVaults</a></code> | <code>string</code> | [List] glacier:ListVaults. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.PurchaseProvisionedCapacity">PurchaseProvisionedCapacity</a></code> | <code>string</code> | [Write] glacier:PurchaseProvisionedCapacity. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.RemoveTagsFromVault">RemoveTagsFromVault</a></code> | <code>string</code> | [Tagging] glacier:RemoveTagsFromVault. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.UploadArchive">UploadArchive</a></code> | <code>string</code> | [Write] glacier:UploadArchive. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierActions.property.UploadMultipartPart">UploadMultipartPart</a></code> | <code>string</code> | [Write] glacier:UploadMultipartPart. |

---

##### `AbortMultipartUpload`<sup>Required</sup> <a name="AbortMultipartUpload" id="@cdk_utils/iam.glacier.GlacierActions.property.AbortMultipartUpload"></a>

```typescript
public readonly AbortMultipartUpload: string;
```

- *Type:* string

[Write] glacier:AbortMultipartUpload.

---

##### `AbortVaultLock`<sup>Required</sup> <a name="AbortVaultLock" id="@cdk_utils/iam.glacier.GlacierActions.property.AbortVaultLock"></a>

```typescript
public readonly AbortVaultLock: string;
```

- *Type:* string

[PermissionManagement] glacier:AbortVaultLock.

---

##### `actionGetDataRetrievalPolicy`<sup>Required</sup> <a name="actionGetDataRetrievalPolicy" id="@cdk_utils/iam.glacier.GlacierActions.property.actionGetDataRetrievalPolicy"></a>

```typescript
public readonly actionGetDataRetrievalPolicy: string;
```

- *Type:* string

[Read] glacier:GetDataRetrievalPolicy.

---

##### `actionGetJobOutput`<sup>Required</sup> <a name="actionGetJobOutput" id="@cdk_utils/iam.glacier.GlacierActions.property.actionGetJobOutput"></a>

```typescript
public readonly actionGetJobOutput: string;
```

- *Type:* string

[Read] glacier:GetJobOutput.

---

##### `actionGetVaultAccessPolicy`<sup>Required</sup> <a name="actionGetVaultAccessPolicy" id="@cdk_utils/iam.glacier.GlacierActions.property.actionGetVaultAccessPolicy"></a>

```typescript
public readonly actionGetVaultAccessPolicy: string;
```

- *Type:* string

[Read] glacier:GetVaultAccessPolicy.

---

##### `actionGetVaultLock`<sup>Required</sup> <a name="actionGetVaultLock" id="@cdk_utils/iam.glacier.GlacierActions.property.actionGetVaultLock"></a>

```typescript
public readonly actionGetVaultLock: string;
```

- *Type:* string

[Read] glacier:GetVaultLock.

---

##### `actionGetVaultNotifications`<sup>Required</sup> <a name="actionGetVaultNotifications" id="@cdk_utils/iam.glacier.GlacierActions.property.actionGetVaultNotifications"></a>

```typescript
public readonly actionGetVaultNotifications: string;
```

- *Type:* string

[Read] glacier:GetVaultNotifications.

---

##### `actionSetDataRetrievalPolicy`<sup>Required</sup> <a name="actionSetDataRetrievalPolicy" id="@cdk_utils/iam.glacier.GlacierActions.property.actionSetDataRetrievalPolicy"></a>

```typescript
public readonly actionSetDataRetrievalPolicy: string;
```

- *Type:* string

[PermissionManagement] glacier:SetDataRetrievalPolicy.

---

##### `actionSetVaultAccessPolicy`<sup>Required</sup> <a name="actionSetVaultAccessPolicy" id="@cdk_utils/iam.glacier.GlacierActions.property.actionSetVaultAccessPolicy"></a>

```typescript
public readonly actionSetVaultAccessPolicy: string;
```

- *Type:* string

[PermissionManagement] glacier:SetVaultAccessPolicy.

---

##### `actionSetVaultNotifications`<sup>Required</sup> <a name="actionSetVaultNotifications" id="@cdk_utils/iam.glacier.GlacierActions.property.actionSetVaultNotifications"></a>

```typescript
public readonly actionSetVaultNotifications: string;
```

- *Type:* string

[Write] glacier:SetVaultNotifications.

---

##### `AddTagsToVault`<sup>Required</sup> <a name="AddTagsToVault" id="@cdk_utils/iam.glacier.GlacierActions.property.AddTagsToVault"></a>

```typescript
public readonly AddTagsToVault: string;
```

- *Type:* string

[Tagging] glacier:AddTagsToVault.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.glacier.GlacierActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.glacier.GlacierActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.glacier.GlacierActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.glacier.GlacierActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.glacier.GlacierActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CompleteMultipartUpload`<sup>Required</sup> <a name="CompleteMultipartUpload" id="@cdk_utils/iam.glacier.GlacierActions.property.CompleteMultipartUpload"></a>

```typescript
public readonly CompleteMultipartUpload: string;
```

- *Type:* string

[Write] glacier:CompleteMultipartUpload.

---

##### `CompleteVaultLock`<sup>Required</sup> <a name="CompleteVaultLock" id="@cdk_utils/iam.glacier.GlacierActions.property.CompleteVaultLock"></a>

```typescript
public readonly CompleteVaultLock: string;
```

- *Type:* string

[PermissionManagement] glacier:CompleteVaultLock.

---

##### `CreateVault`<sup>Required</sup> <a name="CreateVault" id="@cdk_utils/iam.glacier.GlacierActions.property.CreateVault"></a>

```typescript
public readonly CreateVault: string;
```

- *Type:* string

[Write] glacier:CreateVault.

---

##### `DeleteArchive`<sup>Required</sup> <a name="DeleteArchive" id="@cdk_utils/iam.glacier.GlacierActions.property.DeleteArchive"></a>

```typescript
public readonly DeleteArchive: string;
```

- *Type:* string

[Write] glacier:DeleteArchive.

---

##### `DeleteVault`<sup>Required</sup> <a name="DeleteVault" id="@cdk_utils/iam.glacier.GlacierActions.property.DeleteVault"></a>

```typescript
public readonly DeleteVault: string;
```

- *Type:* string

[Write] glacier:DeleteVault.

---

##### `DeleteVaultAccessPolicy`<sup>Required</sup> <a name="DeleteVaultAccessPolicy" id="@cdk_utils/iam.glacier.GlacierActions.property.DeleteVaultAccessPolicy"></a>

```typescript
public readonly DeleteVaultAccessPolicy: string;
```

- *Type:* string

[PermissionManagement] glacier:DeleteVaultAccessPolicy.

---

##### `DeleteVaultNotifications`<sup>Required</sup> <a name="DeleteVaultNotifications" id="@cdk_utils/iam.glacier.GlacierActions.property.DeleteVaultNotifications"></a>

```typescript
public readonly DeleteVaultNotifications: string;
```

- *Type:* string

[Write] glacier:DeleteVaultNotifications.

---

##### `DescribeJob`<sup>Required</sup> <a name="DescribeJob" id="@cdk_utils/iam.glacier.GlacierActions.property.DescribeJob"></a>

```typescript
public readonly DescribeJob: string;
```

- *Type:* string

[Read] glacier:DescribeJob.

---

##### `DescribeVault`<sup>Required</sup> <a name="DescribeVault" id="@cdk_utils/iam.glacier.GlacierActions.property.DescribeVault"></a>

```typescript
public readonly DescribeVault: string;
```

- *Type:* string

[Read] glacier:DescribeVault.

---

##### `InitiateJob`<sup>Required</sup> <a name="InitiateJob" id="@cdk_utils/iam.glacier.GlacierActions.property.InitiateJob"></a>

```typescript
public readonly InitiateJob: string;
```

- *Type:* string

[Write] glacier:InitiateJob.

---

##### `InitiateMultipartUpload`<sup>Required</sup> <a name="InitiateMultipartUpload" id="@cdk_utils/iam.glacier.GlacierActions.property.InitiateMultipartUpload"></a>

```typescript
public readonly InitiateMultipartUpload: string;
```

- *Type:* string

[Write] glacier:InitiateMultipartUpload.

---

##### `InitiateVaultLock`<sup>Required</sup> <a name="InitiateVaultLock" id="@cdk_utils/iam.glacier.GlacierActions.property.InitiateVaultLock"></a>

```typescript
public readonly InitiateVaultLock: string;
```

- *Type:* string

[PermissionManagement] glacier:InitiateVaultLock.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.glacier.GlacierActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] glacier:ListJobs.

---

##### `ListMultipartUploads`<sup>Required</sup> <a name="ListMultipartUploads" id="@cdk_utils/iam.glacier.GlacierActions.property.ListMultipartUploads"></a>

```typescript
public readonly ListMultipartUploads: string;
```

- *Type:* string

[List] glacier:ListMultipartUploads.

---

##### `ListParts`<sup>Required</sup> <a name="ListParts" id="@cdk_utils/iam.glacier.GlacierActions.property.ListParts"></a>

```typescript
public readonly ListParts: string;
```

- *Type:* string

[List] glacier:ListParts.

---

##### `ListProvisionedCapacity`<sup>Required</sup> <a name="ListProvisionedCapacity" id="@cdk_utils/iam.glacier.GlacierActions.property.ListProvisionedCapacity"></a>

```typescript
public readonly ListProvisionedCapacity: string;
```

- *Type:* string

[List] glacier:ListProvisionedCapacity.

---

##### `ListTagsForVault`<sup>Required</sup> <a name="ListTagsForVault" id="@cdk_utils/iam.glacier.GlacierActions.property.ListTagsForVault"></a>

```typescript
public readonly ListTagsForVault: string;
```

- *Type:* string

[List] glacier:ListTagsForVault.

---

##### `ListVaults`<sup>Required</sup> <a name="ListVaults" id="@cdk_utils/iam.glacier.GlacierActions.property.ListVaults"></a>

```typescript
public readonly ListVaults: string;
```

- *Type:* string

[List] glacier:ListVaults.

---

##### `PurchaseProvisionedCapacity`<sup>Required</sup> <a name="PurchaseProvisionedCapacity" id="@cdk_utils/iam.glacier.GlacierActions.property.PurchaseProvisionedCapacity"></a>

```typescript
public readonly PurchaseProvisionedCapacity: string;
```

- *Type:* string

[Write] glacier:PurchaseProvisionedCapacity.

---

##### `RemoveTagsFromVault`<sup>Required</sup> <a name="RemoveTagsFromVault" id="@cdk_utils/iam.glacier.GlacierActions.property.RemoveTagsFromVault"></a>

```typescript
public readonly RemoveTagsFromVault: string;
```

- *Type:* string

[Tagging] glacier:RemoveTagsFromVault.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.glacier.GlacierActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UploadArchive`<sup>Required</sup> <a name="UploadArchive" id="@cdk_utils/iam.glacier.GlacierActions.property.UploadArchive"></a>

```typescript
public readonly UploadArchive: string;
```

- *Type:* string

[Write] glacier:UploadArchive.

---

##### `UploadMultipartPart`<sup>Required</sup> <a name="UploadMultipartPart" id="@cdk_utils/iam.glacier.GlacierActions.property.UploadMultipartPart"></a>

```typescript
public readonly UploadMultipartPart: string;
```

- *Type:* string

[Write] glacier:UploadMultipartPart.

---

### GlacierConditions <a name="GlacierConditions" id="@cdk_utils/iam.glacier.GlacierConditions"></a>

Condition key constants and builders for glacier.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.glacier.GlacierConditions.Initializer"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

new glacier.GlacierConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.glacier.GlacierConditions.archiveAgeInDays">archiveAgeInDays</a></code> | Generates a condition block for `glacier:ArchiveAgeInDays`. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `glacier:ResourceTag/`. |

---

##### `archiveAgeInDays` <a name="archiveAgeInDays" id="@cdk_utils/iam.glacier.GlacierConditions.archiveAgeInDays"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

glacier.GlacierConditions.archiveAgeInDays(value: string)
```

Generates a condition block for `glacier:ArchiveAgeInDays`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.glacier.GlacierConditions.archiveAgeInDays.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.glacier.GlacierConditions.resourceTag"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

glacier.GlacierConditions.resourceTag(value: string)
```

Generates a condition block for `glacier:ResourceTag/`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.glacier.GlacierConditions.resourceTag.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glacier.GlacierConditions.property.ARCHIVE_AGE_IN_DAYS">ARCHIVE_AGE_IN_DAYS</a></code> | <code>string</code> | Condition key: glacier:ArchiveAgeInDays (String). |
| <code><a href="#@cdk_utils/iam.glacier.GlacierConditions.property.DeleteArchiveConditionKeys">DeleteArchiveConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteArchive action. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierConditions.property.InitiateJobConditionKeys">InitiateJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InitiateJob action. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: glacier:ResourceTag/ (String). |

---

##### `ARCHIVE_AGE_IN_DAYS`<sup>Required</sup> <a name="ARCHIVE_AGE_IN_DAYS" id="@cdk_utils/iam.glacier.GlacierConditions.property.ARCHIVE_AGE_IN_DAYS"></a>

```typescript
public readonly ARCHIVE_AGE_IN_DAYS: string;
```

- *Type:* string

Condition key: glacier:ArchiveAgeInDays (String).

---

##### `DeleteArchiveConditionKeys`<sup>Required</sup> <a name="DeleteArchiveConditionKeys" id="@cdk_utils/iam.glacier.GlacierConditions.property.DeleteArchiveConditionKeys"></a>

```typescript
public readonly DeleteArchiveConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteArchive action.

---

##### `InitiateJobConditionKeys`<sup>Required</sup> <a name="InitiateJobConditionKeys" id="@cdk_utils/iam.glacier.GlacierConditions.property.InitiateJobConditionKeys"></a>

```typescript
public readonly InitiateJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InitiateJob action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.glacier.GlacierConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: glacier:ResourceTag/ (String).

---

### GlacierOperations <a name="GlacierOperations" id="@cdk_utils/iam.glacier.GlacierOperations"></a>

API operation to required IAM actions mapping for glacier.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.glacier.GlacierOperations.Initializer"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

new glacier.GlacierOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.AbortMultipartUpload">AbortMultipartUpload</a></code> | <code>string[]</code> | IAM actions required for the AbortMultipartUpload API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.AbortVaultLock">AbortVaultLock</a></code> | <code>string[]</code> | IAM actions required for the AbortVaultLock API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.AddTagsToVault">AddTagsToVault</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToVault API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.CompleteMultipartUpload">CompleteMultipartUpload</a></code> | <code>string[]</code> | IAM actions required for the CompleteMultipartUpload API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.CompleteVaultLock">CompleteVaultLock</a></code> | <code>string[]</code> | IAM actions required for the CompleteVaultLock API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.CreateVault">CreateVault</a></code> | <code>string[]</code> | IAM actions required for the CreateVault API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.DeleteArchive">DeleteArchive</a></code> | <code>string[]</code> | IAM actions required for the DeleteArchive API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.DeleteVault">DeleteVault</a></code> | <code>string[]</code> | IAM actions required for the DeleteVault API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.DeleteVaultAccessPolicy">DeleteVaultAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteVaultAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.DeleteVaultNotifications">DeleteVaultNotifications</a></code> | <code>string[]</code> | IAM actions required for the DeleteVaultNotifications API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.DescribeJob">DescribeJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeJob API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.DescribeVault">DescribeVault</a></code> | <code>string[]</code> | IAM actions required for the DescribeVault API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.InitiateJob">InitiateJob</a></code> | <code>string[]</code> | IAM actions required for the InitiateJob API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.InitiateMultipartUpload">InitiateMultipartUpload</a></code> | <code>string[]</code> | IAM actions required for the InitiateMultipartUpload API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.InitiateVaultLock">InitiateVaultLock</a></code> | <code>string[]</code> | IAM actions required for the InitiateVaultLock API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.ListMultipartUploads">ListMultipartUploads</a></code> | <code>string[]</code> | IAM actions required for the ListMultipartUploads API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.ListParts">ListParts</a></code> | <code>string[]</code> | IAM actions required for the ListParts API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.ListProvisionedCapacity">ListProvisionedCapacity</a></code> | <code>string[]</code> | IAM actions required for the ListProvisionedCapacity API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.ListTagsForVault">ListTagsForVault</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForVault API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.ListVaults">ListVaults</a></code> | <code>string[]</code> | IAM actions required for the ListVaults API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.opGetDataRetrievalPolicy">opGetDataRetrievalPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetDataRetrievalPolicy API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.opGetJobOutput">opGetJobOutput</a></code> | <code>string[]</code> | IAM actions required for the GetJobOutput API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.opGetVaultAccessPolicy">opGetVaultAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetVaultAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.opGetVaultLock">opGetVaultLock</a></code> | <code>string[]</code> | IAM actions required for the GetVaultLock API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.opGetVaultNotifications">opGetVaultNotifications</a></code> | <code>string[]</code> | IAM actions required for the GetVaultNotifications API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.opSetDataRetrievalPolicy">opSetDataRetrievalPolicy</a></code> | <code>string[]</code> | IAM actions required for the SetDataRetrievalPolicy API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.opSetVaultAccessPolicy">opSetVaultAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the SetVaultAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.opSetVaultNotifications">opSetVaultNotifications</a></code> | <code>string[]</code> | IAM actions required for the SetVaultNotifications API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.PurchaseProvisionedCapacity">PurchaseProvisionedCapacity</a></code> | <code>string[]</code> | IAM actions required for the PurchaseProvisionedCapacity API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.RemoveTagsFromVault">RemoveTagsFromVault</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromVault API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.UploadArchive">UploadArchive</a></code> | <code>string[]</code> | IAM actions required for the UploadArchive API call. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierOperations.property.UploadMultipartPart">UploadMultipartPart</a></code> | <code>string[]</code> | IAM actions required for the UploadMultipartPart API call. |

---

##### `AbortMultipartUpload`<sup>Required</sup> <a name="AbortMultipartUpload" id="@cdk_utils/iam.glacier.GlacierOperations.property.AbortMultipartUpload"></a>

```typescript
public readonly AbortMultipartUpload: string[];
```

- *Type:* string[]

IAM actions required for the AbortMultipartUpload API call.

---

##### `AbortVaultLock`<sup>Required</sup> <a name="AbortVaultLock" id="@cdk_utils/iam.glacier.GlacierOperations.property.AbortVaultLock"></a>

```typescript
public readonly AbortVaultLock: string[];
```

- *Type:* string[]

IAM actions required for the AbortVaultLock API call.

---

##### `AddTagsToVault`<sup>Required</sup> <a name="AddTagsToVault" id="@cdk_utils/iam.glacier.GlacierOperations.property.AddTagsToVault"></a>

```typescript
public readonly AddTagsToVault: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToVault API call.

---

##### `CompleteMultipartUpload`<sup>Required</sup> <a name="CompleteMultipartUpload" id="@cdk_utils/iam.glacier.GlacierOperations.property.CompleteMultipartUpload"></a>

```typescript
public readonly CompleteMultipartUpload: string[];
```

- *Type:* string[]

IAM actions required for the CompleteMultipartUpload API call.

---

##### `CompleteVaultLock`<sup>Required</sup> <a name="CompleteVaultLock" id="@cdk_utils/iam.glacier.GlacierOperations.property.CompleteVaultLock"></a>

```typescript
public readonly CompleteVaultLock: string[];
```

- *Type:* string[]

IAM actions required for the CompleteVaultLock API call.

---

##### `CreateVault`<sup>Required</sup> <a name="CreateVault" id="@cdk_utils/iam.glacier.GlacierOperations.property.CreateVault"></a>

```typescript
public readonly CreateVault: string[];
```

- *Type:* string[]

IAM actions required for the CreateVault API call.

---

##### `DeleteArchive`<sup>Required</sup> <a name="DeleteArchive" id="@cdk_utils/iam.glacier.GlacierOperations.property.DeleteArchive"></a>

```typescript
public readonly DeleteArchive: string[];
```

- *Type:* string[]

IAM actions required for the DeleteArchive API call.

---

##### `DeleteVault`<sup>Required</sup> <a name="DeleteVault" id="@cdk_utils/iam.glacier.GlacierOperations.property.DeleteVault"></a>

```typescript
public readonly DeleteVault: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVault API call.

---

##### `DeleteVaultAccessPolicy`<sup>Required</sup> <a name="DeleteVaultAccessPolicy" id="@cdk_utils/iam.glacier.GlacierOperations.property.DeleteVaultAccessPolicy"></a>

```typescript
public readonly DeleteVaultAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVaultAccessPolicy API call.

---

##### `DeleteVaultNotifications`<sup>Required</sup> <a name="DeleteVaultNotifications" id="@cdk_utils/iam.glacier.GlacierOperations.property.DeleteVaultNotifications"></a>

```typescript
public readonly DeleteVaultNotifications: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVaultNotifications API call.

---

##### `DescribeJob`<sup>Required</sup> <a name="DescribeJob" id="@cdk_utils/iam.glacier.GlacierOperations.property.DescribeJob"></a>

```typescript
public readonly DescribeJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJob API call.

---

##### `DescribeVault`<sup>Required</sup> <a name="DescribeVault" id="@cdk_utils/iam.glacier.GlacierOperations.property.DescribeVault"></a>

```typescript
public readonly DescribeVault: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVault API call.

---

##### `InitiateJob`<sup>Required</sup> <a name="InitiateJob" id="@cdk_utils/iam.glacier.GlacierOperations.property.InitiateJob"></a>

```typescript
public readonly InitiateJob: string[];
```

- *Type:* string[]

IAM actions required for the InitiateJob API call.

---

##### `InitiateMultipartUpload`<sup>Required</sup> <a name="InitiateMultipartUpload" id="@cdk_utils/iam.glacier.GlacierOperations.property.InitiateMultipartUpload"></a>

```typescript
public readonly InitiateMultipartUpload: string[];
```

- *Type:* string[]

IAM actions required for the InitiateMultipartUpload API call.

---

##### `InitiateVaultLock`<sup>Required</sup> <a name="InitiateVaultLock" id="@cdk_utils/iam.glacier.GlacierOperations.property.InitiateVaultLock"></a>

```typescript
public readonly InitiateVaultLock: string[];
```

- *Type:* string[]

IAM actions required for the InitiateVaultLock API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.glacier.GlacierOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListMultipartUploads`<sup>Required</sup> <a name="ListMultipartUploads" id="@cdk_utils/iam.glacier.GlacierOperations.property.ListMultipartUploads"></a>

```typescript
public readonly ListMultipartUploads: string[];
```

- *Type:* string[]

IAM actions required for the ListMultipartUploads API call.

---

##### `ListParts`<sup>Required</sup> <a name="ListParts" id="@cdk_utils/iam.glacier.GlacierOperations.property.ListParts"></a>

```typescript
public readonly ListParts: string[];
```

- *Type:* string[]

IAM actions required for the ListParts API call.

---

##### `ListProvisionedCapacity`<sup>Required</sup> <a name="ListProvisionedCapacity" id="@cdk_utils/iam.glacier.GlacierOperations.property.ListProvisionedCapacity"></a>

```typescript
public readonly ListProvisionedCapacity: string[];
```

- *Type:* string[]

IAM actions required for the ListProvisionedCapacity API call.

---

##### `ListTagsForVault`<sup>Required</sup> <a name="ListTagsForVault" id="@cdk_utils/iam.glacier.GlacierOperations.property.ListTagsForVault"></a>

```typescript
public readonly ListTagsForVault: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForVault API call.

---

##### `ListVaults`<sup>Required</sup> <a name="ListVaults" id="@cdk_utils/iam.glacier.GlacierOperations.property.ListVaults"></a>

```typescript
public readonly ListVaults: string[];
```

- *Type:* string[]

IAM actions required for the ListVaults API call.

---

##### `opGetDataRetrievalPolicy`<sup>Required</sup> <a name="opGetDataRetrievalPolicy" id="@cdk_utils/iam.glacier.GlacierOperations.property.opGetDataRetrievalPolicy"></a>

```typescript
public readonly opGetDataRetrievalPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetDataRetrievalPolicy API call.

---

##### `opGetJobOutput`<sup>Required</sup> <a name="opGetJobOutput" id="@cdk_utils/iam.glacier.GlacierOperations.property.opGetJobOutput"></a>

```typescript
public readonly opGetJobOutput: string[];
```

- *Type:* string[]

IAM actions required for the GetJobOutput API call.

---

##### `opGetVaultAccessPolicy`<sup>Required</sup> <a name="opGetVaultAccessPolicy" id="@cdk_utils/iam.glacier.GlacierOperations.property.opGetVaultAccessPolicy"></a>

```typescript
public readonly opGetVaultAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetVaultAccessPolicy API call.

---

##### `opGetVaultLock`<sup>Required</sup> <a name="opGetVaultLock" id="@cdk_utils/iam.glacier.GlacierOperations.property.opGetVaultLock"></a>

```typescript
public readonly opGetVaultLock: string[];
```

- *Type:* string[]

IAM actions required for the GetVaultLock API call.

---

##### `opGetVaultNotifications`<sup>Required</sup> <a name="opGetVaultNotifications" id="@cdk_utils/iam.glacier.GlacierOperations.property.opGetVaultNotifications"></a>

```typescript
public readonly opGetVaultNotifications: string[];
```

- *Type:* string[]

IAM actions required for the GetVaultNotifications API call.

---

##### `opSetDataRetrievalPolicy`<sup>Required</sup> <a name="opSetDataRetrievalPolicy" id="@cdk_utils/iam.glacier.GlacierOperations.property.opSetDataRetrievalPolicy"></a>

```typescript
public readonly opSetDataRetrievalPolicy: string[];
```

- *Type:* string[]

IAM actions required for the SetDataRetrievalPolicy API call.

---

##### `opSetVaultAccessPolicy`<sup>Required</sup> <a name="opSetVaultAccessPolicy" id="@cdk_utils/iam.glacier.GlacierOperations.property.opSetVaultAccessPolicy"></a>

```typescript
public readonly opSetVaultAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the SetVaultAccessPolicy API call.

---

##### `opSetVaultNotifications`<sup>Required</sup> <a name="opSetVaultNotifications" id="@cdk_utils/iam.glacier.GlacierOperations.property.opSetVaultNotifications"></a>

```typescript
public readonly opSetVaultNotifications: string[];
```

- *Type:* string[]

IAM actions required for the SetVaultNotifications API call.

---

##### `PurchaseProvisionedCapacity`<sup>Required</sup> <a name="PurchaseProvisionedCapacity" id="@cdk_utils/iam.glacier.GlacierOperations.property.PurchaseProvisionedCapacity"></a>

```typescript
public readonly PurchaseProvisionedCapacity: string[];
```

- *Type:* string[]

IAM actions required for the PurchaseProvisionedCapacity API call.

---

##### `RemoveTagsFromVault`<sup>Required</sup> <a name="RemoveTagsFromVault" id="@cdk_utils/iam.glacier.GlacierOperations.property.RemoveTagsFromVault"></a>

```typescript
public readonly RemoveTagsFromVault: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromVault API call.

---

##### `UploadArchive`<sup>Required</sup> <a name="UploadArchive" id="@cdk_utils/iam.glacier.GlacierOperations.property.UploadArchive"></a>

```typescript
public readonly UploadArchive: string[];
```

- *Type:* string[]

IAM actions required for the UploadArchive API call.

---

##### `UploadMultipartPart`<sup>Required</sup> <a name="UploadMultipartPart" id="@cdk_utils/iam.glacier.GlacierOperations.property.UploadMultipartPart"></a>

```typescript
public readonly UploadMultipartPart: string[];
```

- *Type:* string[]

IAM actions required for the UploadMultipartPart API call.

---

### GlacierResources <a name="GlacierResources" id="@cdk_utils/iam.glacier.GlacierResources"></a>

ARN builders, validators, and parsers for glacier resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.glacier.GlacierResources.Initializer"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

new glacier.GlacierResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.glacier.GlacierResources.isValidVaultArn">isValidVaultArn</a></code> | Validates whether a string is a valid ARN for the vault resource. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierResources.parseVaultArn">parseVaultArn</a></code> | Parses a vault ARN into its components. |
| <code><a href="#@cdk_utils/iam.glacier.GlacierResources.vault">vault</a></code> | Builds an ARN for the vault resource. |

---

##### `isValidVaultArn` <a name="isValidVaultArn" id="@cdk_utils/iam.glacier.GlacierResources.isValidVaultArn"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

glacier.GlacierResources.isValidVaultArn(arn: string)
```

Validates whether a string is a valid ARN for the vault resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glacier.GlacierResources.isValidVaultArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVaultArn` <a name="parseVaultArn" id="@cdk_utils/iam.glacier.GlacierResources.parseVaultArn"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

glacier.GlacierResources.parseVaultArn(arn: string)
```

Parses a vault ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glacier.GlacierResources.parseVaultArn.parameter.arn"></a>

- *Type:* string

---

##### `vault` <a name="vault" id="@cdk_utils/iam.glacier.GlacierResources.vault"></a>

```typescript
import { glacier } from '@cdk_utils/iam'

glacier.GlacierResources.vault(props: GlacierVaultArnProps)
```

Builds an ARN for the vault resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glacier.GlacierResources.vault.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glacier.GlacierVaultArnProps">GlacierVaultArnProps</a>

---




