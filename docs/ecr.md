# `ecr` Submodule <a name="`ecr` Submodule" id="@cdk_utils/iam.ecr"></a>


## Structs <a name="Structs" id="Structs"></a>

### ECRRepositoryArnComponents <a name="ECRRepositoryArnComponents" id="@cdk_utils/iam.ecr.ECRRepositoryArnComponents"></a>

Parsed components of a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecr.ECRRepositoryArnComponents.Initializer"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

const eCRRepositoryArnComponents: ecr.ECRRepositoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr.ECRRepositoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecr.ECRRepositoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecr.ECRRepositoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ecr.ECRRepositoryArnComponents.property.repositoryName">repositoryName</a></code> | <code>string</code> | The RepositoryName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecr.ECRRepositoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecr.ECRRepositoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecr.ECRRepositoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdk_utils/iam.ecr.ECRRepositoryArnComponents.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The RepositoryName component.

---

### ECRRepositoryArnProps <a name="ECRRepositoryArnProps" id="@cdk_utils/iam.ecr.ECRRepositoryArnProps"></a>

Properties for building a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecr.ECRRepositoryArnProps.Initializer"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

const eCRRepositoryArnProps: ecr.ECRRepositoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr.ECRRepositoryArnProps.property.repositoryName">repositoryName</a></code> | <code>string</code> | The RepositoryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecr.ECRRepositoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecr.ECRRepositoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecr.ECRRepositoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdk_utils/iam.ecr.ECRRepositoryArnProps.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The RepositoryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecr.ECRRepositoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecr.ECRRepositoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecr.ECRRepositoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ECRActions <a name="ECRActions" id="@cdk_utils/iam.ecr.ECRActions"></a>

IAM action constants for the ecr service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecr.ECRActions.Initializer"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

new ecr.ECRActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionGetAccountSetting">actionGetAccountSetting</a></code> | <code>string</code> | [Read] ecr:GetAccountSetting. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionGetAuthorizationToken">actionGetAuthorizationToken</a></code> | <code>string</code> | [Read] ecr:GetAuthorizationToken. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionGetDownloadUrlForLayer">actionGetDownloadUrlForLayer</a></code> | <code>string</code> | [Read] ecr:GetDownloadUrlForLayer. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionGetImageCopyStatus">actionGetImageCopyStatus</a></code> | <code>string</code> | [Read] ecr:GetImageCopyStatus. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionGetLifecyclePolicy">actionGetLifecyclePolicy</a></code> | <code>string</code> | [Read] ecr:GetLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionGetLifecyclePolicyPreview">actionGetLifecyclePolicyPreview</a></code> | <code>string</code> | [Read] ecr:GetLifecyclePolicyPreview. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionGetRegistryPolicy">actionGetRegistryPolicy</a></code> | <code>string</code> | [Read] ecr:GetRegistryPolicy. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionGetRegistryScanningConfiguration">actionGetRegistryScanningConfiguration</a></code> | <code>string</code> | [Read] ecr:GetRegistryScanningConfiguration. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionGetRepositoryPolicy">actionGetRepositoryPolicy</a></code> | <code>string</code> | [Read] ecr:GetRepositoryPolicy. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionGetSigningConfiguration">actionGetSigningConfiguration</a></code> | <code>string</code> | [Read] ecr:GetSigningConfiguration. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.actionSetRepositoryPolicy">actionSetRepositoryPolicy</a></code> | <code>string</code> | [PermissionManagement] ecr:SetRepositoryPolicy. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.BatchCheckLayerAvailability">BatchCheckLayerAvailability</a></code> | <code>string</code> | [Read] ecr:BatchCheckLayerAvailability. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.BatchDeleteImage">BatchDeleteImage</a></code> | <code>string</code> | [Write] ecr:BatchDeleteImage. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.BatchGetImage">BatchGetImage</a></code> | <code>string</code> | [Read] ecr:BatchGetImage. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.BatchGetRepositoryScanningConfiguration">BatchGetRepositoryScanningConfiguration</a></code> | <code>string</code> | [Read] ecr:BatchGetRepositoryScanningConfiguration. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.BatchImportUpstreamImage">BatchImportUpstreamImage</a></code> | <code>string</code> | [Write] ecr:BatchImportUpstreamImage. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.CompleteLayerUpload">CompleteLayerUpload</a></code> | <code>string</code> | [Write] ecr:CompleteLayerUpload. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.CreatePullThroughCacheRule">CreatePullThroughCacheRule</a></code> | <code>string</code> | [Write] ecr:CreatePullThroughCacheRule. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.CreateRepository">CreateRepository</a></code> | <code>string</code> | [Write] ecr:CreateRepository. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.CreateRepositoryCreationTemplate">CreateRepositoryCreationTemplate</a></code> | <code>string</code> | [Write] ecr:CreateRepositoryCreationTemplate. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DeleteLifecyclePolicy">DeleteLifecyclePolicy</a></code> | <code>string</code> | [Write] ecr:DeleteLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DeletePullThroughCacheRule">DeletePullThroughCacheRule</a></code> | <code>string</code> | [Write] ecr:DeletePullThroughCacheRule. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DeleteRegistryPolicy">DeleteRegistryPolicy</a></code> | <code>string</code> | [PermissionManagement] ecr:DeleteRegistryPolicy. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DeleteRepository">DeleteRepository</a></code> | <code>string</code> | [Write] ecr:DeleteRepository. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DeleteRepositoryCreationTemplate">DeleteRepositoryCreationTemplate</a></code> | <code>string</code> | [Write] ecr:DeleteRepositoryCreationTemplate. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DeleteRepositoryPolicy">DeleteRepositoryPolicy</a></code> | <code>string</code> | [PermissionManagement] ecr:DeleteRepositoryPolicy. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DeleteSigningConfiguration">DeleteSigningConfiguration</a></code> | <code>string</code> | [Write] ecr:DeleteSigningConfiguration. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DeregisterPullTimeUpdateExclusion">DeregisterPullTimeUpdateExclusion</a></code> | <code>string</code> | [Write] ecr:DeregisterPullTimeUpdateExclusion. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DescribeImageReplicationStatus">DescribeImageReplicationStatus</a></code> | <code>string</code> | [Read] ecr:DescribeImageReplicationStatus. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DescribeImages">DescribeImages</a></code> | <code>string</code> | [List] ecr:DescribeImages. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DescribeImageScanFindings">DescribeImageScanFindings</a></code> | <code>string</code> | [Read] ecr:DescribeImageScanFindings. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DescribeImageSigningStatus">DescribeImageSigningStatus</a></code> | <code>string</code> | [Read] ecr:DescribeImageSigningStatus. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DescribePullThroughCacheRules">DescribePullThroughCacheRules</a></code> | <code>string</code> | [List] ecr:DescribePullThroughCacheRules. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DescribeRegistry">DescribeRegistry</a></code> | <code>string</code> | [Read] ecr:DescribeRegistry. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DescribeRepositories">DescribeRepositories</a></code> | <code>string</code> | [Read] ecr:DescribeRepositories. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.DescribeRepositoryCreationTemplates">DescribeRepositoryCreationTemplates</a></code> | <code>string</code> | [Read] ecr:DescribeRepositoryCreationTemplates. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.InitiateLayerUpload">InitiateLayerUpload</a></code> | <code>string</code> | [Write] ecr:InitiateLayerUpload. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.ListImages">ListImages</a></code> | <code>string</code> | [List] ecr:ListImages. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.ListPullTimeUpdateExclusions">ListPullTimeUpdateExclusions</a></code> | <code>string</code> | [List] ecr:ListPullTimeUpdateExclusions. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ecr:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.PutAccountSetting">PutAccountSetting</a></code> | <code>string</code> | [Write] ecr:PutAccountSetting. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.PutImage">PutImage</a></code> | <code>string</code> | [Write] ecr:PutImage. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.PutImageScanningConfiguration">PutImageScanningConfiguration</a></code> | <code>string</code> | [Write] ecr:PutImageScanningConfiguration. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.PutImageTagMutability">PutImageTagMutability</a></code> | <code>string</code> | [Write] ecr:PutImageTagMutability. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.PutLifecyclePolicy">PutLifecyclePolicy</a></code> | <code>string</code> | [Write] ecr:PutLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.PutRegistryPolicy">PutRegistryPolicy</a></code> | <code>string</code> | [PermissionManagement] ecr:PutRegistryPolicy. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.PutRegistryScanningConfiguration">PutRegistryScanningConfiguration</a></code> | <code>string</code> | [Write] ecr:PutRegistryScanningConfiguration. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.PutReplicationConfiguration">PutReplicationConfiguration</a></code> | <code>string</code> | [Write] ecr:PutReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.PutSigningConfiguration">PutSigningConfiguration</a></code> | <code>string</code> | [Write] ecr:PutSigningConfiguration. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.RegisterPullTimeUpdateExclusion">RegisterPullTimeUpdateExclusion</a></code> | <code>string</code> | [Write] ecr:RegisterPullTimeUpdateExclusion. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.ReplicateImage">ReplicateImage</a></code> | <code>string</code> | [Write] ecr:ReplicateImage. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.StartImageScan">StartImageScan</a></code> | <code>string</code> | [Write] ecr:StartImageScan. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.StartLifecyclePolicyPreview">StartLifecyclePolicyPreview</a></code> | <code>string</code> | [Write] ecr:StartLifecyclePolicyPreview. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ecr:TagResource. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ecr:UntagResource. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.UpdateImageStorageClass">UpdateImageStorageClass</a></code> | <code>string</code> | [Write] ecr:UpdateImageStorageClass. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.UpdatePullThroughCacheRule">UpdatePullThroughCacheRule</a></code> | <code>string</code> | [Write] ecr:UpdatePullThroughCacheRule. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.UpdateRepositoryCreationTemplate">UpdateRepositoryCreationTemplate</a></code> | <code>string</code> | [Write] ecr:UpdateRepositoryCreationTemplate. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.UploadLayerPart">UploadLayerPart</a></code> | <code>string</code> | [Write] ecr:UploadLayerPart. |
| <code><a href="#@cdk_utils/iam.ecr.ECRActions.property.ValidatePullThroughCacheRule">ValidatePullThroughCacheRule</a></code> | <code>string</code> | [Read] ecr:ValidatePullThroughCacheRule. |

---

##### `actionGetAccountSetting`<sup>Required</sup> <a name="actionGetAccountSetting" id="@cdk_utils/iam.ecr.ECRActions.property.actionGetAccountSetting"></a>

```typescript
public readonly actionGetAccountSetting: string;
```

- *Type:* string

[Read] ecr:GetAccountSetting.

---

##### `actionGetAuthorizationToken`<sup>Required</sup> <a name="actionGetAuthorizationToken" id="@cdk_utils/iam.ecr.ECRActions.property.actionGetAuthorizationToken"></a>

```typescript
public readonly actionGetAuthorizationToken: string;
```

- *Type:* string

[Read] ecr:GetAuthorizationToken.

---

##### `actionGetDownloadUrlForLayer`<sup>Required</sup> <a name="actionGetDownloadUrlForLayer" id="@cdk_utils/iam.ecr.ECRActions.property.actionGetDownloadUrlForLayer"></a>

```typescript
public readonly actionGetDownloadUrlForLayer: string;
```

- *Type:* string

[Read] ecr:GetDownloadUrlForLayer.

---

##### `actionGetImageCopyStatus`<sup>Required</sup> <a name="actionGetImageCopyStatus" id="@cdk_utils/iam.ecr.ECRActions.property.actionGetImageCopyStatus"></a>

```typescript
public readonly actionGetImageCopyStatus: string;
```

- *Type:* string

[Read] ecr:GetImageCopyStatus.

---

##### `actionGetLifecyclePolicy`<sup>Required</sup> <a name="actionGetLifecyclePolicy" id="@cdk_utils/iam.ecr.ECRActions.property.actionGetLifecyclePolicy"></a>

```typescript
public readonly actionGetLifecyclePolicy: string;
```

- *Type:* string

[Read] ecr:GetLifecyclePolicy.

---

##### `actionGetLifecyclePolicyPreview`<sup>Required</sup> <a name="actionGetLifecyclePolicyPreview" id="@cdk_utils/iam.ecr.ECRActions.property.actionGetLifecyclePolicyPreview"></a>

```typescript
public readonly actionGetLifecyclePolicyPreview: string;
```

- *Type:* string

[Read] ecr:GetLifecyclePolicyPreview.

---

##### `actionGetRegistryPolicy`<sup>Required</sup> <a name="actionGetRegistryPolicy" id="@cdk_utils/iam.ecr.ECRActions.property.actionGetRegistryPolicy"></a>

```typescript
public readonly actionGetRegistryPolicy: string;
```

- *Type:* string

[Read] ecr:GetRegistryPolicy.

---

##### `actionGetRegistryScanningConfiguration`<sup>Required</sup> <a name="actionGetRegistryScanningConfiguration" id="@cdk_utils/iam.ecr.ECRActions.property.actionGetRegistryScanningConfiguration"></a>

```typescript
public readonly actionGetRegistryScanningConfiguration: string;
```

- *Type:* string

[Read] ecr:GetRegistryScanningConfiguration.

---

##### `actionGetRepositoryPolicy`<sup>Required</sup> <a name="actionGetRepositoryPolicy" id="@cdk_utils/iam.ecr.ECRActions.property.actionGetRepositoryPolicy"></a>

```typescript
public readonly actionGetRepositoryPolicy: string;
```

- *Type:* string

[Read] ecr:GetRepositoryPolicy.

---

##### `actionGetSigningConfiguration`<sup>Required</sup> <a name="actionGetSigningConfiguration" id="@cdk_utils/iam.ecr.ECRActions.property.actionGetSigningConfiguration"></a>

```typescript
public readonly actionGetSigningConfiguration: string;
```

- *Type:* string

[Read] ecr:GetSigningConfiguration.

---

##### `actionSetRepositoryPolicy`<sup>Required</sup> <a name="actionSetRepositoryPolicy" id="@cdk_utils/iam.ecr.ECRActions.property.actionSetRepositoryPolicy"></a>

```typescript
public readonly actionSetRepositoryPolicy: string;
```

- *Type:* string

[PermissionManagement] ecr:SetRepositoryPolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ecr.ECRActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ecr.ECRActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ecr.ECRActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ecr.ECRActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ecr.ECRActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchCheckLayerAvailability`<sup>Required</sup> <a name="BatchCheckLayerAvailability" id="@cdk_utils/iam.ecr.ECRActions.property.BatchCheckLayerAvailability"></a>

```typescript
public readonly BatchCheckLayerAvailability: string;
```

- *Type:* string

[Read] ecr:BatchCheckLayerAvailability.

---

##### `BatchDeleteImage`<sup>Required</sup> <a name="BatchDeleteImage" id="@cdk_utils/iam.ecr.ECRActions.property.BatchDeleteImage"></a>

```typescript
public readonly BatchDeleteImage: string;
```

- *Type:* string

[Write] ecr:BatchDeleteImage.

---

##### `BatchGetImage`<sup>Required</sup> <a name="BatchGetImage" id="@cdk_utils/iam.ecr.ECRActions.property.BatchGetImage"></a>

```typescript
public readonly BatchGetImage: string;
```

- *Type:* string

[Read] ecr:BatchGetImage.

---

##### `BatchGetRepositoryScanningConfiguration`<sup>Required</sup> <a name="BatchGetRepositoryScanningConfiguration" id="@cdk_utils/iam.ecr.ECRActions.property.BatchGetRepositoryScanningConfiguration"></a>

```typescript
public readonly BatchGetRepositoryScanningConfiguration: string;
```

- *Type:* string

[Read] ecr:BatchGetRepositoryScanningConfiguration.

---

##### `BatchImportUpstreamImage`<sup>Required</sup> <a name="BatchImportUpstreamImage" id="@cdk_utils/iam.ecr.ECRActions.property.BatchImportUpstreamImage"></a>

```typescript
public readonly BatchImportUpstreamImage: string;
```

- *Type:* string

[Write] ecr:BatchImportUpstreamImage.

---

##### `CompleteLayerUpload`<sup>Required</sup> <a name="CompleteLayerUpload" id="@cdk_utils/iam.ecr.ECRActions.property.CompleteLayerUpload"></a>

```typescript
public readonly CompleteLayerUpload: string;
```

- *Type:* string

[Write] ecr:CompleteLayerUpload.

---

##### `CreatePullThroughCacheRule`<sup>Required</sup> <a name="CreatePullThroughCacheRule" id="@cdk_utils/iam.ecr.ECRActions.property.CreatePullThroughCacheRule"></a>

```typescript
public readonly CreatePullThroughCacheRule: string;
```

- *Type:* string

[Write] ecr:CreatePullThroughCacheRule.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.ecr.ECRActions.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string;
```

- *Type:* string

[Write] ecr:CreateRepository.

---

##### `CreateRepositoryCreationTemplate`<sup>Required</sup> <a name="CreateRepositoryCreationTemplate" id="@cdk_utils/iam.ecr.ECRActions.property.CreateRepositoryCreationTemplate"></a>

```typescript
public readonly CreateRepositoryCreationTemplate: string;
```

- *Type:* string

[Write] ecr:CreateRepositoryCreationTemplate.

---

##### `DeleteLifecyclePolicy`<sup>Required</sup> <a name="DeleteLifecyclePolicy" id="@cdk_utils/iam.ecr.ECRActions.property.DeleteLifecyclePolicy"></a>

```typescript
public readonly DeleteLifecyclePolicy: string;
```

- *Type:* string

[Write] ecr:DeleteLifecyclePolicy.

---

##### `DeletePullThroughCacheRule`<sup>Required</sup> <a name="DeletePullThroughCacheRule" id="@cdk_utils/iam.ecr.ECRActions.property.DeletePullThroughCacheRule"></a>

```typescript
public readonly DeletePullThroughCacheRule: string;
```

- *Type:* string

[Write] ecr:DeletePullThroughCacheRule.

---

##### `DeleteRegistryPolicy`<sup>Required</sup> <a name="DeleteRegistryPolicy" id="@cdk_utils/iam.ecr.ECRActions.property.DeleteRegistryPolicy"></a>

```typescript
public readonly DeleteRegistryPolicy: string;
```

- *Type:* string

[PermissionManagement] ecr:DeleteRegistryPolicy.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.ecr.ECRActions.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string;
```

- *Type:* string

[Write] ecr:DeleteRepository.

---

##### `DeleteRepositoryCreationTemplate`<sup>Required</sup> <a name="DeleteRepositoryCreationTemplate" id="@cdk_utils/iam.ecr.ECRActions.property.DeleteRepositoryCreationTemplate"></a>

```typescript
public readonly DeleteRepositoryCreationTemplate: string;
```

- *Type:* string

[Write] ecr:DeleteRepositoryCreationTemplate.

---

##### `DeleteRepositoryPolicy`<sup>Required</sup> <a name="DeleteRepositoryPolicy" id="@cdk_utils/iam.ecr.ECRActions.property.DeleteRepositoryPolicy"></a>

```typescript
public readonly DeleteRepositoryPolicy: string;
```

- *Type:* string

[PermissionManagement] ecr:DeleteRepositoryPolicy.

---

##### `DeleteSigningConfiguration`<sup>Required</sup> <a name="DeleteSigningConfiguration" id="@cdk_utils/iam.ecr.ECRActions.property.DeleteSigningConfiguration"></a>

```typescript
public readonly DeleteSigningConfiguration: string;
```

- *Type:* string

[Write] ecr:DeleteSigningConfiguration.

---

##### `DeregisterPullTimeUpdateExclusion`<sup>Required</sup> <a name="DeregisterPullTimeUpdateExclusion" id="@cdk_utils/iam.ecr.ECRActions.property.DeregisterPullTimeUpdateExclusion"></a>

```typescript
public readonly DeregisterPullTimeUpdateExclusion: string;
```

- *Type:* string

[Write] ecr:DeregisterPullTimeUpdateExclusion.

---

##### `DescribeImageReplicationStatus`<sup>Required</sup> <a name="DescribeImageReplicationStatus" id="@cdk_utils/iam.ecr.ECRActions.property.DescribeImageReplicationStatus"></a>

```typescript
public readonly DescribeImageReplicationStatus: string;
```

- *Type:* string

[Read] ecr:DescribeImageReplicationStatus.

---

##### `DescribeImages`<sup>Required</sup> <a name="DescribeImages" id="@cdk_utils/iam.ecr.ECRActions.property.DescribeImages"></a>

```typescript
public readonly DescribeImages: string;
```

- *Type:* string

[List] ecr:DescribeImages.

---

##### `DescribeImageScanFindings`<sup>Required</sup> <a name="DescribeImageScanFindings" id="@cdk_utils/iam.ecr.ECRActions.property.DescribeImageScanFindings"></a>

```typescript
public readonly DescribeImageScanFindings: string;
```

- *Type:* string

[Read] ecr:DescribeImageScanFindings.

---

##### `DescribeImageSigningStatus`<sup>Required</sup> <a name="DescribeImageSigningStatus" id="@cdk_utils/iam.ecr.ECRActions.property.DescribeImageSigningStatus"></a>

```typescript
public readonly DescribeImageSigningStatus: string;
```

- *Type:* string

[Read] ecr:DescribeImageSigningStatus.

---

##### `DescribePullThroughCacheRules`<sup>Required</sup> <a name="DescribePullThroughCacheRules" id="@cdk_utils/iam.ecr.ECRActions.property.DescribePullThroughCacheRules"></a>

```typescript
public readonly DescribePullThroughCacheRules: string;
```

- *Type:* string

[List] ecr:DescribePullThroughCacheRules.

---

##### `DescribeRegistry`<sup>Required</sup> <a name="DescribeRegistry" id="@cdk_utils/iam.ecr.ECRActions.property.DescribeRegistry"></a>

```typescript
public readonly DescribeRegistry: string;
```

- *Type:* string

[Read] ecr:DescribeRegistry.

---

##### `DescribeRepositories`<sup>Required</sup> <a name="DescribeRepositories" id="@cdk_utils/iam.ecr.ECRActions.property.DescribeRepositories"></a>

```typescript
public readonly DescribeRepositories: string;
```

- *Type:* string

[Read] ecr:DescribeRepositories.

---

##### `DescribeRepositoryCreationTemplates`<sup>Required</sup> <a name="DescribeRepositoryCreationTemplates" id="@cdk_utils/iam.ecr.ECRActions.property.DescribeRepositoryCreationTemplates"></a>

```typescript
public readonly DescribeRepositoryCreationTemplates: string;
```

- *Type:* string

[Read] ecr:DescribeRepositoryCreationTemplates.

---

##### `InitiateLayerUpload`<sup>Required</sup> <a name="InitiateLayerUpload" id="@cdk_utils/iam.ecr.ECRActions.property.InitiateLayerUpload"></a>

```typescript
public readonly InitiateLayerUpload: string;
```

- *Type:* string

[Write] ecr:InitiateLayerUpload.

---

##### `ListImages`<sup>Required</sup> <a name="ListImages" id="@cdk_utils/iam.ecr.ECRActions.property.ListImages"></a>

```typescript
public readonly ListImages: string;
```

- *Type:* string

[List] ecr:ListImages.

---

##### `ListPullTimeUpdateExclusions`<sup>Required</sup> <a name="ListPullTimeUpdateExclusions" id="@cdk_utils/iam.ecr.ECRActions.property.ListPullTimeUpdateExclusions"></a>

```typescript
public readonly ListPullTimeUpdateExclusions: string;
```

- *Type:* string

[List] ecr:ListPullTimeUpdateExclusions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ecr.ECRActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ecr:ListTagsForResource.

---

##### `PutAccountSetting`<sup>Required</sup> <a name="PutAccountSetting" id="@cdk_utils/iam.ecr.ECRActions.property.PutAccountSetting"></a>

```typescript
public readonly PutAccountSetting: string;
```

- *Type:* string

[Write] ecr:PutAccountSetting.

---

##### `PutImage`<sup>Required</sup> <a name="PutImage" id="@cdk_utils/iam.ecr.ECRActions.property.PutImage"></a>

```typescript
public readonly PutImage: string;
```

- *Type:* string

[Write] ecr:PutImage.

---

##### `PutImageScanningConfiguration`<sup>Required</sup> <a name="PutImageScanningConfiguration" id="@cdk_utils/iam.ecr.ECRActions.property.PutImageScanningConfiguration"></a>

```typescript
public readonly PutImageScanningConfiguration: string;
```

- *Type:* string

[Write] ecr:PutImageScanningConfiguration.

---

##### `PutImageTagMutability`<sup>Required</sup> <a name="PutImageTagMutability" id="@cdk_utils/iam.ecr.ECRActions.property.PutImageTagMutability"></a>

```typescript
public readonly PutImageTagMutability: string;
```

- *Type:* string

[Write] ecr:PutImageTagMutability.

---

##### `PutLifecyclePolicy`<sup>Required</sup> <a name="PutLifecyclePolicy" id="@cdk_utils/iam.ecr.ECRActions.property.PutLifecyclePolicy"></a>

```typescript
public readonly PutLifecyclePolicy: string;
```

- *Type:* string

[Write] ecr:PutLifecyclePolicy.

---

##### `PutRegistryPolicy`<sup>Required</sup> <a name="PutRegistryPolicy" id="@cdk_utils/iam.ecr.ECRActions.property.PutRegistryPolicy"></a>

```typescript
public readonly PutRegistryPolicy: string;
```

- *Type:* string

[PermissionManagement] ecr:PutRegistryPolicy.

---

##### `PutRegistryScanningConfiguration`<sup>Required</sup> <a name="PutRegistryScanningConfiguration" id="@cdk_utils/iam.ecr.ECRActions.property.PutRegistryScanningConfiguration"></a>

```typescript
public readonly PutRegistryScanningConfiguration: string;
```

- *Type:* string

[Write] ecr:PutRegistryScanningConfiguration.

---

##### `PutReplicationConfiguration`<sup>Required</sup> <a name="PutReplicationConfiguration" id="@cdk_utils/iam.ecr.ECRActions.property.PutReplicationConfiguration"></a>

```typescript
public readonly PutReplicationConfiguration: string;
```

- *Type:* string

[Write] ecr:PutReplicationConfiguration.

---

##### `PutSigningConfiguration`<sup>Required</sup> <a name="PutSigningConfiguration" id="@cdk_utils/iam.ecr.ECRActions.property.PutSigningConfiguration"></a>

```typescript
public readonly PutSigningConfiguration: string;
```

- *Type:* string

[Write] ecr:PutSigningConfiguration.

---

##### `RegisterPullTimeUpdateExclusion`<sup>Required</sup> <a name="RegisterPullTimeUpdateExclusion" id="@cdk_utils/iam.ecr.ECRActions.property.RegisterPullTimeUpdateExclusion"></a>

```typescript
public readonly RegisterPullTimeUpdateExclusion: string;
```

- *Type:* string

[Write] ecr:RegisterPullTimeUpdateExclusion.

---

##### `ReplicateImage`<sup>Required</sup> <a name="ReplicateImage" id="@cdk_utils/iam.ecr.ECRActions.property.ReplicateImage"></a>

```typescript
public readonly ReplicateImage: string;
```

- *Type:* string

[Write] ecr:ReplicateImage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ecr.ECRActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartImageScan`<sup>Required</sup> <a name="StartImageScan" id="@cdk_utils/iam.ecr.ECRActions.property.StartImageScan"></a>

```typescript
public readonly StartImageScan: string;
```

- *Type:* string

[Write] ecr:StartImageScan.

---

##### `StartLifecyclePolicyPreview`<sup>Required</sup> <a name="StartLifecyclePolicyPreview" id="@cdk_utils/iam.ecr.ECRActions.property.StartLifecyclePolicyPreview"></a>

```typescript
public readonly StartLifecyclePolicyPreview: string;
```

- *Type:* string

[Write] ecr:StartLifecyclePolicyPreview.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ecr.ECRActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ecr:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ecr.ECRActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ecr:UntagResource.

---

##### `UpdateImageStorageClass`<sup>Required</sup> <a name="UpdateImageStorageClass" id="@cdk_utils/iam.ecr.ECRActions.property.UpdateImageStorageClass"></a>

```typescript
public readonly UpdateImageStorageClass: string;
```

- *Type:* string

[Write] ecr:UpdateImageStorageClass.

---

##### `UpdatePullThroughCacheRule`<sup>Required</sup> <a name="UpdatePullThroughCacheRule" id="@cdk_utils/iam.ecr.ECRActions.property.UpdatePullThroughCacheRule"></a>

```typescript
public readonly UpdatePullThroughCacheRule: string;
```

- *Type:* string

[Write] ecr:UpdatePullThroughCacheRule.

---

##### `UpdateRepositoryCreationTemplate`<sup>Required</sup> <a name="UpdateRepositoryCreationTemplate" id="@cdk_utils/iam.ecr.ECRActions.property.UpdateRepositoryCreationTemplate"></a>

```typescript
public readonly UpdateRepositoryCreationTemplate: string;
```

- *Type:* string

[Write] ecr:UpdateRepositoryCreationTemplate.

---

##### `UploadLayerPart`<sup>Required</sup> <a name="UploadLayerPart" id="@cdk_utils/iam.ecr.ECRActions.property.UploadLayerPart"></a>

```typescript
public readonly UploadLayerPart: string;
```

- *Type:* string

[Write] ecr:UploadLayerPart.

---

##### `ValidatePullThroughCacheRule`<sup>Required</sup> <a name="ValidatePullThroughCacheRule" id="@cdk_utils/iam.ecr.ECRActions.property.ValidatePullThroughCacheRule"></a>

```typescript
public readonly ValidatePullThroughCacheRule: string;
```

- *Type:* string

[Read] ecr:ValidatePullThroughCacheRule.

---

### ECRConditions <a name="ECRConditions" id="@cdk_utils/iam.ecr.ECRConditions"></a>

Condition key constants and builders for ecr.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecr.ECRConditions.Initializer"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

new ecr.ECRConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.accountSetting">accountSetting</a></code> | Generates a condition block for `ecr:AccountSetting`. |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `accountSetting` <a name="accountSetting" id="@cdk_utils/iam.ecr.ECRConditions.accountSetting"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

ecr.ECRConditions.accountSetting(value: string)
```

Generates a condition block for `ecr:AccountSetting`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecr.ECRConditions.accountSetting.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ecr.ECRConditions.requestTag"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

ecr.ECRConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecr.ECRConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ecr.ECRConditions.resourceTag"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

ecr.ECRConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecr.ECRConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ecr.ECRConditions.tagKeys"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

ecr.ECRConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ecr.ECRConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.ACCOUNT_SETTING">ACCOUNT_SETTING</a></code> | <code>string</code> | Condition key: ecr:AccountSetting (String). |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.actionGetAccountSettingConditionKeys">actionGetAccountSettingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccountSetting action. |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.CreateRepositoryConditionKeys">CreateRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRepository action. |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.PutAccountSettingConditionKeys">PutAccountSettingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountSetting action. |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: ecr:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ecr.ECRConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `ACCOUNT_SETTING`<sup>Required</sup> <a name="ACCOUNT_SETTING" id="@cdk_utils/iam.ecr.ECRConditions.property.ACCOUNT_SETTING"></a>

```typescript
public readonly ACCOUNT_SETTING: string;
```

- *Type:* string

Condition key: ecr:AccountSetting (String).

---

##### `actionGetAccountSettingConditionKeys`<sup>Required</sup> <a name="actionGetAccountSettingConditionKeys" id="@cdk_utils/iam.ecr.ECRConditions.property.actionGetAccountSettingConditionKeys"></a>

```typescript
public readonly actionGetAccountSettingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccountSetting action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ecr.ECRConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ecr.ECRConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ecr.ECRConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateRepositoryConditionKeys`<sup>Required</sup> <a name="CreateRepositoryConditionKeys" id="@cdk_utils/iam.ecr.ECRConditions.property.CreateRepositoryConditionKeys"></a>

```typescript
public readonly CreateRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRepository action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.ecr.ECRConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `PutAccountSettingConditionKeys`<sup>Required</sup> <a name="PutAccountSettingConditionKeys" id="@cdk_utils/iam.ecr.ECRConditions.property.PutAccountSettingConditionKeys"></a>

```typescript
public readonly PutAccountSettingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountSetting action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.ecr.ECRConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: ecr:ResourceTag/${TagKey} (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ecr.ECRConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ecr.ECRConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ECROperations <a name="ECROperations" id="@cdk_utils/iam.ecr.ECROperations"></a>

API operation to required IAM actions mapping for ecr.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecr.ECROperations.Initializer"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

new ecr.ECROperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.BatchCheckLayerAvailability">BatchCheckLayerAvailability</a></code> | <code>string[]</code> | IAM actions required for the BatchCheckLayerAvailability API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.BatchDeleteImage">BatchDeleteImage</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteImage API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.BatchGetImage">BatchGetImage</a></code> | <code>string[]</code> | IAM actions required for the BatchGetImage API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.BatchGetRepositoryScanningConfiguration">BatchGetRepositoryScanningConfiguration</a></code> | <code>string[]</code> | IAM actions required for the BatchGetRepositoryScanningConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.CompleteLayerUpload">CompleteLayerUpload</a></code> | <code>string[]</code> | IAM actions required for the CompleteLayerUpload API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.CreatePullThroughCacheRule">CreatePullThroughCacheRule</a></code> | <code>string[]</code> | IAM actions required for the CreatePullThroughCacheRule API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.CreateRepository">CreateRepository</a></code> | <code>string[]</code> | IAM actions required for the CreateRepository API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.CreateRepositoryCreationTemplate">CreateRepositoryCreationTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateRepositoryCreationTemplate API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DeleteLifecyclePolicy">DeleteLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DeletePullThroughCacheRule">DeletePullThroughCacheRule</a></code> | <code>string[]</code> | IAM actions required for the DeletePullThroughCacheRule API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DeleteRegistryPolicy">DeleteRegistryPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistryPolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DeleteRepository">DeleteRepository</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepository API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DeleteRepositoryCreationTemplate">DeleteRepositoryCreationTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepositoryCreationTemplate API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DeleteRepositoryPolicy">DeleteRepositoryPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepositoryPolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DeleteSigningConfiguration">DeleteSigningConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSigningConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DeregisterPullTimeUpdateExclusion">DeregisterPullTimeUpdateExclusion</a></code> | <code>string[]</code> | IAM actions required for the DeregisterPullTimeUpdateExclusion API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DescribeImageReplicationStatus">DescribeImageReplicationStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeImageReplicationStatus API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DescribeImages">DescribeImages</a></code> | <code>string[]</code> | IAM actions required for the DescribeImages API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DescribeImageScanFindings">DescribeImageScanFindings</a></code> | <code>string[]</code> | IAM actions required for the DescribeImageScanFindings API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DescribeImageSigningStatus">DescribeImageSigningStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeImageSigningStatus API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DescribePullThroughCacheRules">DescribePullThroughCacheRules</a></code> | <code>string[]</code> | IAM actions required for the DescribePullThroughCacheRules API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DescribeRegistry">DescribeRegistry</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegistry API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DescribeRepositories">DescribeRepositories</a></code> | <code>string[]</code> | IAM actions required for the DescribeRepositories API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.DescribeRepositoryCreationTemplates">DescribeRepositoryCreationTemplates</a></code> | <code>string[]</code> | IAM actions required for the DescribeRepositoryCreationTemplates API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.InitiateLayerUpload">InitiateLayerUpload</a></code> | <code>string[]</code> | IAM actions required for the InitiateLayerUpload API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.ListImageReferrers">ListImageReferrers</a></code> | <code>string[]</code> | IAM actions required for the ListImageReferrers API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.ListImages">ListImages</a></code> | <code>string[]</code> | IAM actions required for the ListImages API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.ListPullTimeUpdateExclusions">ListPullTimeUpdateExclusions</a></code> | <code>string[]</code> | IAM actions required for the ListPullTimeUpdateExclusions API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.opGetAccountSetting">opGetAccountSetting</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSetting API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.opGetAuthorizationToken">opGetAuthorizationToken</a></code> | <code>string[]</code> | IAM actions required for the GetAuthorizationToken API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.opGetDownloadUrlForLayer">opGetDownloadUrlForLayer</a></code> | <code>string[]</code> | IAM actions required for the GetDownloadUrlForLayer API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.opGetLifecyclePolicy">opGetLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.opGetLifecyclePolicyPreview">opGetLifecyclePolicyPreview</a></code> | <code>string[]</code> | IAM actions required for the GetLifecyclePolicyPreview API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.opGetRegistryPolicy">opGetRegistryPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetRegistryPolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.opGetRegistryScanningConfiguration">opGetRegistryScanningConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetRegistryScanningConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.opGetRepositoryPolicy">opGetRepositoryPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetRepositoryPolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.opGetSigningConfiguration">opGetSigningConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetSigningConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.opSetRepositoryPolicy">opSetRepositoryPolicy</a></code> | <code>string[]</code> | IAM actions required for the SetRepositoryPolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.PutAccountSetting">PutAccountSetting</a></code> | <code>string[]</code> | IAM actions required for the PutAccountSetting API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.PutImage">PutImage</a></code> | <code>string[]</code> | IAM actions required for the PutImage API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.PutImageScanningConfiguration">PutImageScanningConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutImageScanningConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.PutImageTagMutability">PutImageTagMutability</a></code> | <code>string[]</code> | IAM actions required for the PutImageTagMutability API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.PutLifecyclePolicy">PutLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.PutRegistryPolicy">PutRegistryPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutRegistryPolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.PutRegistryScanningConfiguration">PutRegistryScanningConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutRegistryScanningConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.PutReplicationConfiguration">PutReplicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutReplicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.PutSigningConfiguration">PutSigningConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutSigningConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.RegisterPullTimeUpdateExclusion">RegisterPullTimeUpdateExclusion</a></code> | <code>string[]</code> | IAM actions required for the RegisterPullTimeUpdateExclusion API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.StartImageScan">StartImageScan</a></code> | <code>string[]</code> | IAM actions required for the StartImageScan API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.StartLifecyclePolicyPreview">StartLifecyclePolicyPreview</a></code> | <code>string[]</code> | IAM actions required for the StartLifecyclePolicyPreview API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.UpdateImageStorageClass">UpdateImageStorageClass</a></code> | <code>string[]</code> | IAM actions required for the UpdateImageStorageClass API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.UpdatePullThroughCacheRule">UpdatePullThroughCacheRule</a></code> | <code>string[]</code> | IAM actions required for the UpdatePullThroughCacheRule API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.UpdateRepositoryCreationTemplate">UpdateRepositoryCreationTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateRepositoryCreationTemplate API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.UploadLayerPart">UploadLayerPart</a></code> | <code>string[]</code> | IAM actions required for the UploadLayerPart API call. |
| <code><a href="#@cdk_utils/iam.ecr.ECROperations.property.ValidatePullThroughCacheRule">ValidatePullThroughCacheRule</a></code> | <code>string[]</code> | IAM actions required for the ValidatePullThroughCacheRule API call. |

---

##### `BatchCheckLayerAvailability`<sup>Required</sup> <a name="BatchCheckLayerAvailability" id="@cdk_utils/iam.ecr.ECROperations.property.BatchCheckLayerAvailability"></a>

```typescript
public readonly BatchCheckLayerAvailability: string[];
```

- *Type:* string[]

IAM actions required for the BatchCheckLayerAvailability API call.

---

##### `BatchDeleteImage`<sup>Required</sup> <a name="BatchDeleteImage" id="@cdk_utils/iam.ecr.ECROperations.property.BatchDeleteImage"></a>

```typescript
public readonly BatchDeleteImage: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteImage API call.

---

##### `BatchGetImage`<sup>Required</sup> <a name="BatchGetImage" id="@cdk_utils/iam.ecr.ECROperations.property.BatchGetImage"></a>

```typescript
public readonly BatchGetImage: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetImage API call.

---

##### `BatchGetRepositoryScanningConfiguration`<sup>Required</sup> <a name="BatchGetRepositoryScanningConfiguration" id="@cdk_utils/iam.ecr.ECROperations.property.BatchGetRepositoryScanningConfiguration"></a>

```typescript
public readonly BatchGetRepositoryScanningConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetRepositoryScanningConfiguration API call.

---

##### `CompleteLayerUpload`<sup>Required</sup> <a name="CompleteLayerUpload" id="@cdk_utils/iam.ecr.ECROperations.property.CompleteLayerUpload"></a>

```typescript
public readonly CompleteLayerUpload: string[];
```

- *Type:* string[]

IAM actions required for the CompleteLayerUpload API call.

---

##### `CreatePullThroughCacheRule`<sup>Required</sup> <a name="CreatePullThroughCacheRule" id="@cdk_utils/iam.ecr.ECROperations.property.CreatePullThroughCacheRule"></a>

```typescript
public readonly CreatePullThroughCacheRule: string[];
```

- *Type:* string[]

IAM actions required for the CreatePullThroughCacheRule API call.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.ecr.ECROperations.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string[];
```

- *Type:* string[]

IAM actions required for the CreateRepository API call.

---

##### `CreateRepositoryCreationTemplate`<sup>Required</sup> <a name="CreateRepositoryCreationTemplate" id="@cdk_utils/iam.ecr.ECROperations.property.CreateRepositoryCreationTemplate"></a>

```typescript
public readonly CreateRepositoryCreationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateRepositoryCreationTemplate API call.

---

##### `DeleteLifecyclePolicy`<sup>Required</sup> <a name="DeleteLifecyclePolicy" id="@cdk_utils/iam.ecr.ECROperations.property.DeleteLifecyclePolicy"></a>

```typescript
public readonly DeleteLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLifecyclePolicy API call.

---

##### `DeletePullThroughCacheRule`<sup>Required</sup> <a name="DeletePullThroughCacheRule" id="@cdk_utils/iam.ecr.ECROperations.property.DeletePullThroughCacheRule"></a>

```typescript
public readonly DeletePullThroughCacheRule: string[];
```

- *Type:* string[]

IAM actions required for the DeletePullThroughCacheRule API call.

---

##### `DeleteRegistryPolicy`<sup>Required</sup> <a name="DeleteRegistryPolicy" id="@cdk_utils/iam.ecr.ECROperations.property.DeleteRegistryPolicy"></a>

```typescript
public readonly DeleteRegistryPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistryPolicy API call.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.ecr.ECROperations.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepository API call.

---

##### `DeleteRepositoryCreationTemplate`<sup>Required</sup> <a name="DeleteRepositoryCreationTemplate" id="@cdk_utils/iam.ecr.ECROperations.property.DeleteRepositoryCreationTemplate"></a>

```typescript
public readonly DeleteRepositoryCreationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepositoryCreationTemplate API call.

---

##### `DeleteRepositoryPolicy`<sup>Required</sup> <a name="DeleteRepositoryPolicy" id="@cdk_utils/iam.ecr.ECROperations.property.DeleteRepositoryPolicy"></a>

```typescript
public readonly DeleteRepositoryPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepositoryPolicy API call.

---

##### `DeleteSigningConfiguration`<sup>Required</sup> <a name="DeleteSigningConfiguration" id="@cdk_utils/iam.ecr.ECROperations.property.DeleteSigningConfiguration"></a>

```typescript
public readonly DeleteSigningConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSigningConfiguration API call.

---

##### `DeregisterPullTimeUpdateExclusion`<sup>Required</sup> <a name="DeregisterPullTimeUpdateExclusion" id="@cdk_utils/iam.ecr.ECROperations.property.DeregisterPullTimeUpdateExclusion"></a>

```typescript
public readonly DeregisterPullTimeUpdateExclusion: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterPullTimeUpdateExclusion API call.

---

##### `DescribeImageReplicationStatus`<sup>Required</sup> <a name="DescribeImageReplicationStatus" id="@cdk_utils/iam.ecr.ECROperations.property.DescribeImageReplicationStatus"></a>

```typescript
public readonly DescribeImageReplicationStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImageReplicationStatus API call.

---

##### `DescribeImages`<sup>Required</sup> <a name="DescribeImages" id="@cdk_utils/iam.ecr.ECROperations.property.DescribeImages"></a>

```typescript
public readonly DescribeImages: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImages API call.

---

##### `DescribeImageScanFindings`<sup>Required</sup> <a name="DescribeImageScanFindings" id="@cdk_utils/iam.ecr.ECROperations.property.DescribeImageScanFindings"></a>

```typescript
public readonly DescribeImageScanFindings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImageScanFindings API call.

---

##### `DescribeImageSigningStatus`<sup>Required</sup> <a name="DescribeImageSigningStatus" id="@cdk_utils/iam.ecr.ECROperations.property.DescribeImageSigningStatus"></a>

```typescript
public readonly DescribeImageSigningStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImageSigningStatus API call.

---

##### `DescribePullThroughCacheRules`<sup>Required</sup> <a name="DescribePullThroughCacheRules" id="@cdk_utils/iam.ecr.ECROperations.property.DescribePullThroughCacheRules"></a>

```typescript
public readonly DescribePullThroughCacheRules: string[];
```

- *Type:* string[]

IAM actions required for the DescribePullThroughCacheRules API call.

---

##### `DescribeRegistry`<sup>Required</sup> <a name="DescribeRegistry" id="@cdk_utils/iam.ecr.ECROperations.property.DescribeRegistry"></a>

```typescript
public readonly DescribeRegistry: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegistry API call.

---

##### `DescribeRepositories`<sup>Required</sup> <a name="DescribeRepositories" id="@cdk_utils/iam.ecr.ECROperations.property.DescribeRepositories"></a>

```typescript
public readonly DescribeRepositories: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRepositories API call.

---

##### `DescribeRepositoryCreationTemplates`<sup>Required</sup> <a name="DescribeRepositoryCreationTemplates" id="@cdk_utils/iam.ecr.ECROperations.property.DescribeRepositoryCreationTemplates"></a>

```typescript
public readonly DescribeRepositoryCreationTemplates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRepositoryCreationTemplates API call.

---

##### `InitiateLayerUpload`<sup>Required</sup> <a name="InitiateLayerUpload" id="@cdk_utils/iam.ecr.ECROperations.property.InitiateLayerUpload"></a>

```typescript
public readonly InitiateLayerUpload: string[];
```

- *Type:* string[]

IAM actions required for the InitiateLayerUpload API call.

---

##### `ListImageReferrers`<sup>Required</sup> <a name="ListImageReferrers" id="@cdk_utils/iam.ecr.ECROperations.property.ListImageReferrers"></a>

```typescript
public readonly ListImageReferrers: string[];
```

- *Type:* string[]

IAM actions required for the ListImageReferrers API call.

---

##### `ListImages`<sup>Required</sup> <a name="ListImages" id="@cdk_utils/iam.ecr.ECROperations.property.ListImages"></a>

```typescript
public readonly ListImages: string[];
```

- *Type:* string[]

IAM actions required for the ListImages API call.

---

##### `ListPullTimeUpdateExclusions`<sup>Required</sup> <a name="ListPullTimeUpdateExclusions" id="@cdk_utils/iam.ecr.ECROperations.property.ListPullTimeUpdateExclusions"></a>

```typescript
public readonly ListPullTimeUpdateExclusions: string[];
```

- *Type:* string[]

IAM actions required for the ListPullTimeUpdateExclusions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ecr.ECROperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccountSetting`<sup>Required</sup> <a name="opGetAccountSetting" id="@cdk_utils/iam.ecr.ECROperations.property.opGetAccountSetting"></a>

```typescript
public readonly opGetAccountSetting: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSetting API call.

---

##### `opGetAuthorizationToken`<sup>Required</sup> <a name="opGetAuthorizationToken" id="@cdk_utils/iam.ecr.ECROperations.property.opGetAuthorizationToken"></a>

```typescript
public readonly opGetAuthorizationToken: string[];
```

- *Type:* string[]

IAM actions required for the GetAuthorizationToken API call.

---

##### `opGetDownloadUrlForLayer`<sup>Required</sup> <a name="opGetDownloadUrlForLayer" id="@cdk_utils/iam.ecr.ECROperations.property.opGetDownloadUrlForLayer"></a>

```typescript
public readonly opGetDownloadUrlForLayer: string[];
```

- *Type:* string[]

IAM actions required for the GetDownloadUrlForLayer API call.

---

##### `opGetLifecyclePolicy`<sup>Required</sup> <a name="opGetLifecyclePolicy" id="@cdk_utils/iam.ecr.ECROperations.property.opGetLifecyclePolicy"></a>

```typescript
public readonly opGetLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetLifecyclePolicy API call.

---

##### `opGetLifecyclePolicyPreview`<sup>Required</sup> <a name="opGetLifecyclePolicyPreview" id="@cdk_utils/iam.ecr.ECROperations.property.opGetLifecyclePolicyPreview"></a>

```typescript
public readonly opGetLifecyclePolicyPreview: string[];
```

- *Type:* string[]

IAM actions required for the GetLifecyclePolicyPreview API call.

---

##### `opGetRegistryPolicy`<sup>Required</sup> <a name="opGetRegistryPolicy" id="@cdk_utils/iam.ecr.ECROperations.property.opGetRegistryPolicy"></a>

```typescript
public readonly opGetRegistryPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetRegistryPolicy API call.

---

##### `opGetRegistryScanningConfiguration`<sup>Required</sup> <a name="opGetRegistryScanningConfiguration" id="@cdk_utils/iam.ecr.ECROperations.property.opGetRegistryScanningConfiguration"></a>

```typescript
public readonly opGetRegistryScanningConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetRegistryScanningConfiguration API call.

---

##### `opGetRepositoryPolicy`<sup>Required</sup> <a name="opGetRepositoryPolicy" id="@cdk_utils/iam.ecr.ECROperations.property.opGetRepositoryPolicy"></a>

```typescript
public readonly opGetRepositoryPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositoryPolicy API call.

---

##### `opGetSigningConfiguration`<sup>Required</sup> <a name="opGetSigningConfiguration" id="@cdk_utils/iam.ecr.ECROperations.property.opGetSigningConfiguration"></a>

```typescript
public readonly opGetSigningConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetSigningConfiguration API call.

---

##### `opSetRepositoryPolicy`<sup>Required</sup> <a name="opSetRepositoryPolicy" id="@cdk_utils/iam.ecr.ECROperations.property.opSetRepositoryPolicy"></a>

```typescript
public readonly opSetRepositoryPolicy: string[];
```

- *Type:* string[]

IAM actions required for the SetRepositoryPolicy API call.

---

##### `PutAccountSetting`<sup>Required</sup> <a name="PutAccountSetting" id="@cdk_utils/iam.ecr.ECROperations.property.PutAccountSetting"></a>

```typescript
public readonly PutAccountSetting: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountSetting API call.

---

##### `PutImage`<sup>Required</sup> <a name="PutImage" id="@cdk_utils/iam.ecr.ECROperations.property.PutImage"></a>

```typescript
public readonly PutImage: string[];
```

- *Type:* string[]

IAM actions required for the PutImage API call.

---

##### `PutImageScanningConfiguration`<sup>Required</sup> <a name="PutImageScanningConfiguration" id="@cdk_utils/iam.ecr.ECROperations.property.PutImageScanningConfiguration"></a>

```typescript
public readonly PutImageScanningConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutImageScanningConfiguration API call.

---

##### `PutImageTagMutability`<sup>Required</sup> <a name="PutImageTagMutability" id="@cdk_utils/iam.ecr.ECROperations.property.PutImageTagMutability"></a>

```typescript
public readonly PutImageTagMutability: string[];
```

- *Type:* string[]

IAM actions required for the PutImageTagMutability API call.

---

##### `PutLifecyclePolicy`<sup>Required</sup> <a name="PutLifecyclePolicy" id="@cdk_utils/iam.ecr.ECROperations.property.PutLifecyclePolicy"></a>

```typescript
public readonly PutLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutLifecyclePolicy API call.

---

##### `PutRegistryPolicy`<sup>Required</sup> <a name="PutRegistryPolicy" id="@cdk_utils/iam.ecr.ECROperations.property.PutRegistryPolicy"></a>

```typescript
public readonly PutRegistryPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutRegistryPolicy API call.

---

##### `PutRegistryScanningConfiguration`<sup>Required</sup> <a name="PutRegistryScanningConfiguration" id="@cdk_utils/iam.ecr.ECROperations.property.PutRegistryScanningConfiguration"></a>

```typescript
public readonly PutRegistryScanningConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutRegistryScanningConfiguration API call.

---

##### `PutReplicationConfiguration`<sup>Required</sup> <a name="PutReplicationConfiguration" id="@cdk_utils/iam.ecr.ECROperations.property.PutReplicationConfiguration"></a>

```typescript
public readonly PutReplicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutReplicationConfiguration API call.

---

##### `PutSigningConfiguration`<sup>Required</sup> <a name="PutSigningConfiguration" id="@cdk_utils/iam.ecr.ECROperations.property.PutSigningConfiguration"></a>

```typescript
public readonly PutSigningConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutSigningConfiguration API call.

---

##### `RegisterPullTimeUpdateExclusion`<sup>Required</sup> <a name="RegisterPullTimeUpdateExclusion" id="@cdk_utils/iam.ecr.ECROperations.property.RegisterPullTimeUpdateExclusion"></a>

```typescript
public readonly RegisterPullTimeUpdateExclusion: string[];
```

- *Type:* string[]

IAM actions required for the RegisterPullTimeUpdateExclusion API call.

---

##### `StartImageScan`<sup>Required</sup> <a name="StartImageScan" id="@cdk_utils/iam.ecr.ECROperations.property.StartImageScan"></a>

```typescript
public readonly StartImageScan: string[];
```

- *Type:* string[]

IAM actions required for the StartImageScan API call.

---

##### `StartLifecyclePolicyPreview`<sup>Required</sup> <a name="StartLifecyclePolicyPreview" id="@cdk_utils/iam.ecr.ECROperations.property.StartLifecyclePolicyPreview"></a>

```typescript
public readonly StartLifecyclePolicyPreview: string[];
```

- *Type:* string[]

IAM actions required for the StartLifecyclePolicyPreview API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ecr.ECROperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ecr.ECROperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateImageStorageClass`<sup>Required</sup> <a name="UpdateImageStorageClass" id="@cdk_utils/iam.ecr.ECROperations.property.UpdateImageStorageClass"></a>

```typescript
public readonly UpdateImageStorageClass: string[];
```

- *Type:* string[]

IAM actions required for the UpdateImageStorageClass API call.

---

##### `UpdatePullThroughCacheRule`<sup>Required</sup> <a name="UpdatePullThroughCacheRule" id="@cdk_utils/iam.ecr.ECROperations.property.UpdatePullThroughCacheRule"></a>

```typescript
public readonly UpdatePullThroughCacheRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePullThroughCacheRule API call.

---

##### `UpdateRepositoryCreationTemplate`<sup>Required</sup> <a name="UpdateRepositoryCreationTemplate" id="@cdk_utils/iam.ecr.ECROperations.property.UpdateRepositoryCreationTemplate"></a>

```typescript
public readonly UpdateRepositoryCreationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRepositoryCreationTemplate API call.

---

##### `UploadLayerPart`<sup>Required</sup> <a name="UploadLayerPart" id="@cdk_utils/iam.ecr.ECROperations.property.UploadLayerPart"></a>

```typescript
public readonly UploadLayerPart: string[];
```

- *Type:* string[]

IAM actions required for the UploadLayerPart API call.

---

##### `ValidatePullThroughCacheRule`<sup>Required</sup> <a name="ValidatePullThroughCacheRule" id="@cdk_utils/iam.ecr.ECROperations.property.ValidatePullThroughCacheRule"></a>

```typescript
public readonly ValidatePullThroughCacheRule: string[];
```

- *Type:* string[]

IAM actions required for the ValidatePullThroughCacheRule API call.

---

### ECRResources <a name="ECRResources" id="@cdk_utils/iam.ecr.ECRResources"></a>

ARN builders, validators, and parsers for ecr resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecr.ECRResources.Initializer"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

new ecr.ECRResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ecr.ECRResources.isValidRepositoryArn">isValidRepositoryArn</a></code> | Validates whether a string is a valid ARN for the repository resource. |
| <code><a href="#@cdk_utils/iam.ecr.ECRResources.parseRepositoryArn">parseRepositoryArn</a></code> | Parses a repository ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecr.ECRResources.repository">repository</a></code> | Builds an ARN for the repository resource. |

---

##### `isValidRepositoryArn` <a name="isValidRepositoryArn" id="@cdk_utils/iam.ecr.ECRResources.isValidRepositoryArn"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

ecr.ECRResources.isValidRepositoryArn(arn: string)
```

Validates whether a string is a valid ARN for the repository resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecr.ECRResources.isValidRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRepositoryArn` <a name="parseRepositoryArn" id="@cdk_utils/iam.ecr.ECRResources.parseRepositoryArn"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

ecr.ECRResources.parseRepositoryArn(arn: string)
```

Parses a repository ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecr.ECRResources.parseRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `repository` <a name="repository" id="@cdk_utils/iam.ecr.ECRResources.repository"></a>

```typescript
import { ecr } from '@cdk_utils/iam'

ecr.ECRResources.repository(props: ECRRepositoryArnProps)
```

Builds an ARN for the repository resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecr.ECRResources.repository.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecr.ECRRepositoryArnProps">ECRRepositoryArnProps</a>

---




