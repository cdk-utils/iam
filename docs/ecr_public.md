# `ecr_public` Submodule <a name="`ecr_public` Submodule" id="@cdk_utils/iam.ecr_public"></a>


## Structs <a name="Structs" id="Structs"></a>

### ECRPublicRegistryArnComponents <a name="ECRPublicRegistryArnComponents" id="@cdk_utils/iam.ecr_public.ECRPublicRegistryArnComponents"></a>

Parsed components of a registry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecr_public.ECRPublicRegistryArnComponents.Initializer"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

const eCRPublicRegistryArnComponents: ecr_public.ECRPublicRegistryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRegistryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRegistryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRegistryArnComponents.property.registryId">registryId</a></code> | <code>string</code> | The RegistryId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecr_public.ECRPublicRegistryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecr_public.ECRPublicRegistryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdk_utils/iam.ecr_public.ECRPublicRegistryArnComponents.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

The RegistryId component.

---

### ECRPublicRegistryArnProps <a name="ECRPublicRegistryArnProps" id="@cdk_utils/iam.ecr_public.ECRPublicRegistryArnProps"></a>

Properties for building a registry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecr_public.ECRPublicRegistryArnProps.Initializer"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

const eCRPublicRegistryArnProps: ecr_public.ECRPublicRegistryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRegistryArnProps.property.registryId">registryId</a></code> | <code>string</code> | The RegistryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRegistryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRegistryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdk_utils/iam.ecr_public.ECRPublicRegistryArnProps.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

The RegistryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecr_public.ECRPublicRegistryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecr_public.ECRPublicRegistryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### ECRPublicRepositoryArnComponents <a name="ECRPublicRepositoryArnComponents" id="@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnComponents"></a>

Parsed components of a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnComponents.Initializer"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

const eCRPublicRepositoryArnComponents: ecr_public.ECRPublicRepositoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnComponents.property.repositoryName">repositoryName</a></code> | <code>string</code> | The RepositoryName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnComponents.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The RepositoryName component.

---

### ECRPublicRepositoryArnProps <a name="ECRPublicRepositoryArnProps" id="@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnProps"></a>

Properties for building a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnProps.Initializer"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

const eCRPublicRepositoryArnProps: ecr_public.ECRPublicRepositoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnProps.property.repositoryName">repositoryName</a></code> | <code>string</code> | The RepositoryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnProps.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The RepositoryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### ECRPublicActions <a name="ECRPublicActions" id="@cdk_utils/iam.ecr_public.ECRPublicActions"></a>

IAM action constants for the ecr-public service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecr_public.ECRPublicActions.Initializer"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

new ecr_public.ECRPublicActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.actionGetAuthorizationToken">actionGetAuthorizationToken</a></code> | <code>string</code> | [Read] ecr-public:GetAuthorizationToken. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.actionGetRegistryCatalogData">actionGetRegistryCatalogData</a></code> | <code>string</code> | [Read] ecr-public:GetRegistryCatalogData. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.actionGetRepositoryCatalogData">actionGetRepositoryCatalogData</a></code> | <code>string</code> | [Read] ecr-public:GetRepositoryCatalogData. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.actionGetRepositoryPolicy">actionGetRepositoryPolicy</a></code> | <code>string</code> | [Read] ecr-public:GetRepositoryPolicy. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.actionSetRepositoryPolicy">actionSetRepositoryPolicy</a></code> | <code>string</code> | [PermissionManagement] ecr-public:SetRepositoryPolicy. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.BatchCheckLayerAvailability">BatchCheckLayerAvailability</a></code> | <code>string</code> | [Read] ecr-public:BatchCheckLayerAvailability. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.BatchDeleteImage">BatchDeleteImage</a></code> | <code>string</code> | [Write] ecr-public:BatchDeleteImage. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.CompleteLayerUpload">CompleteLayerUpload</a></code> | <code>string</code> | [Write] ecr-public:CompleteLayerUpload. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.CreateRepository">CreateRepository</a></code> | <code>string</code> | [Write] ecr-public:CreateRepository. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.DeleteRepository">DeleteRepository</a></code> | <code>string</code> | [Write] ecr-public:DeleteRepository. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.DeleteRepositoryPolicy">DeleteRepositoryPolicy</a></code> | <code>string</code> | [Write] ecr-public:DeleteRepositoryPolicy. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.DescribeImages">DescribeImages</a></code> | <code>string</code> | [Read] ecr-public:DescribeImages. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.DescribeImageTags">DescribeImageTags</a></code> | <code>string</code> | [List] ecr-public:DescribeImageTags. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.DescribeRegistries">DescribeRegistries</a></code> | <code>string</code> | [List] ecr-public:DescribeRegistries. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.DescribeRepositories">DescribeRepositories</a></code> | <code>string</code> | [List] ecr-public:DescribeRepositories. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.InitiateLayerUpload">InitiateLayerUpload</a></code> | <code>string</code> | [Write] ecr-public:InitiateLayerUpload. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ecr-public:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.PutImage">PutImage</a></code> | <code>string</code> | [Write] ecr-public:PutImage. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.PutRegistryCatalogData">PutRegistryCatalogData</a></code> | <code>string</code> | [Write] ecr-public:PutRegistryCatalogData. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.PutRepositoryCatalogData">PutRepositoryCatalogData</a></code> | <code>string</code> | [Write] ecr-public:PutRepositoryCatalogData. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ecr-public:TagResource. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ecr-public:UntagResource. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicActions.property.UploadLayerPart">UploadLayerPart</a></code> | <code>string</code> | [Write] ecr-public:UploadLayerPart. |

---

##### `actionGetAuthorizationToken`<sup>Required</sup> <a name="actionGetAuthorizationToken" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.actionGetAuthorizationToken"></a>

```typescript
public readonly actionGetAuthorizationToken: string;
```

- *Type:* string

[Read] ecr-public:GetAuthorizationToken.

---

##### `actionGetRegistryCatalogData`<sup>Required</sup> <a name="actionGetRegistryCatalogData" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.actionGetRegistryCatalogData"></a>

```typescript
public readonly actionGetRegistryCatalogData: string;
```

- *Type:* string

[Read] ecr-public:GetRegistryCatalogData.

---

##### `actionGetRepositoryCatalogData`<sup>Required</sup> <a name="actionGetRepositoryCatalogData" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.actionGetRepositoryCatalogData"></a>

```typescript
public readonly actionGetRepositoryCatalogData: string;
```

- *Type:* string

[Read] ecr-public:GetRepositoryCatalogData.

---

##### `actionGetRepositoryPolicy`<sup>Required</sup> <a name="actionGetRepositoryPolicy" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.actionGetRepositoryPolicy"></a>

```typescript
public readonly actionGetRepositoryPolicy: string;
```

- *Type:* string

[Read] ecr-public:GetRepositoryPolicy.

---

##### `actionSetRepositoryPolicy`<sup>Required</sup> <a name="actionSetRepositoryPolicy" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.actionSetRepositoryPolicy"></a>

```typescript
public readonly actionSetRepositoryPolicy: string;
```

- *Type:* string

[PermissionManagement] ecr-public:SetRepositoryPolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchCheckLayerAvailability`<sup>Required</sup> <a name="BatchCheckLayerAvailability" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.BatchCheckLayerAvailability"></a>

```typescript
public readonly BatchCheckLayerAvailability: string;
```

- *Type:* string

[Read] ecr-public:BatchCheckLayerAvailability.

---

##### `BatchDeleteImage`<sup>Required</sup> <a name="BatchDeleteImage" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.BatchDeleteImage"></a>

```typescript
public readonly BatchDeleteImage: string;
```

- *Type:* string

[Write] ecr-public:BatchDeleteImage.

---

##### `CompleteLayerUpload`<sup>Required</sup> <a name="CompleteLayerUpload" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.CompleteLayerUpload"></a>

```typescript
public readonly CompleteLayerUpload: string;
```

- *Type:* string

[Write] ecr-public:CompleteLayerUpload.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string;
```

- *Type:* string

[Write] ecr-public:CreateRepository.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string;
```

- *Type:* string

[Write] ecr-public:DeleteRepository.

---

##### `DeleteRepositoryPolicy`<sup>Required</sup> <a name="DeleteRepositoryPolicy" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.DeleteRepositoryPolicy"></a>

```typescript
public readonly DeleteRepositoryPolicy: string;
```

- *Type:* string

[Write] ecr-public:DeleteRepositoryPolicy.

---

##### `DescribeImages`<sup>Required</sup> <a name="DescribeImages" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.DescribeImages"></a>

```typescript
public readonly DescribeImages: string;
```

- *Type:* string

[Read] ecr-public:DescribeImages.

---

##### `DescribeImageTags`<sup>Required</sup> <a name="DescribeImageTags" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.DescribeImageTags"></a>

```typescript
public readonly DescribeImageTags: string;
```

- *Type:* string

[List] ecr-public:DescribeImageTags.

---

##### `DescribeRegistries`<sup>Required</sup> <a name="DescribeRegistries" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.DescribeRegistries"></a>

```typescript
public readonly DescribeRegistries: string;
```

- *Type:* string

[List] ecr-public:DescribeRegistries.

---

##### `DescribeRepositories`<sup>Required</sup> <a name="DescribeRepositories" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.DescribeRepositories"></a>

```typescript
public readonly DescribeRepositories: string;
```

- *Type:* string

[List] ecr-public:DescribeRepositories.

---

##### `InitiateLayerUpload`<sup>Required</sup> <a name="InitiateLayerUpload" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.InitiateLayerUpload"></a>

```typescript
public readonly InitiateLayerUpload: string;
```

- *Type:* string

[Write] ecr-public:InitiateLayerUpload.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ecr-public:ListTagsForResource.

---

##### `PutImage`<sup>Required</sup> <a name="PutImage" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.PutImage"></a>

```typescript
public readonly PutImage: string;
```

- *Type:* string

[Write] ecr-public:PutImage.

---

##### `PutRegistryCatalogData`<sup>Required</sup> <a name="PutRegistryCatalogData" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.PutRegistryCatalogData"></a>

```typescript
public readonly PutRegistryCatalogData: string;
```

- *Type:* string

[Write] ecr-public:PutRegistryCatalogData.

---

##### `PutRepositoryCatalogData`<sup>Required</sup> <a name="PutRepositoryCatalogData" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.PutRepositoryCatalogData"></a>

```typescript
public readonly PutRepositoryCatalogData: string;
```

- *Type:* string

[Write] ecr-public:PutRepositoryCatalogData.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ecr-public:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ecr-public:UntagResource.

---

##### `UploadLayerPart`<sup>Required</sup> <a name="UploadLayerPart" id="@cdk_utils/iam.ecr_public.ECRPublicActions.property.UploadLayerPart"></a>

```typescript
public readonly UploadLayerPart: string;
```

- *Type:* string

[Write] ecr-public:UploadLayerPart.

---

### ECRPublicConditions <a name="ECRPublicConditions" id="@cdk_utils/iam.ecr_public.ECRPublicConditions"></a>

Condition key constants and builders for ecr-public.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.Initializer"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

new ecr_public.ECRPublicConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.requestTag"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

ecr_public.ECRPublicConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.resourceTag"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

ecr_public.ECRPublicConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.tagKeys"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

ecr_public.ECRPublicConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicConditions.property.CreateRepositoryConditionKeys">CreateRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRepository action. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: ecr-public:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateRepositoryConditionKeys`<sup>Required</sup> <a name="CreateRepositoryConditionKeys" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.property.CreateRepositoryConditionKeys"></a>

```typescript
public readonly CreateRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRepository action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: ecr-public:ResourceTag/${TagKey} (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ecr_public.ECRPublicConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ECRPublicOperations <a name="ECRPublicOperations" id="@cdk_utils/iam.ecr_public.ECRPublicOperations"></a>

API operation to required IAM actions mapping for ecr-public.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.Initializer"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

new ecr_public.ECRPublicOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.BatchCheckLayerAvailability">BatchCheckLayerAvailability</a></code> | <code>string[]</code> | IAM actions required for the BatchCheckLayerAvailability API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.BatchDeleteImage">BatchDeleteImage</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteImage API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.CompleteLayerUpload">CompleteLayerUpload</a></code> | <code>string[]</code> | IAM actions required for the CompleteLayerUpload API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.CreateRepository">CreateRepository</a></code> | <code>string[]</code> | IAM actions required for the CreateRepository API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DeleteRepository">DeleteRepository</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepository API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DeleteRepositoryPolicy">DeleteRepositoryPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepositoryPolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DescribeImages">DescribeImages</a></code> | <code>string[]</code> | IAM actions required for the DescribeImages API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DescribeImageTags">DescribeImageTags</a></code> | <code>string[]</code> | IAM actions required for the DescribeImageTags API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DescribeRegistries">DescribeRegistries</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegistries API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DescribeRepositories">DescribeRepositories</a></code> | <code>string[]</code> | IAM actions required for the DescribeRepositories API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.InitiateLayerUpload">InitiateLayerUpload</a></code> | <code>string[]</code> | IAM actions required for the InitiateLayerUpload API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.opGetAuthorizationToken">opGetAuthorizationToken</a></code> | <code>string[]</code> | IAM actions required for the GetAuthorizationToken API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.opGetRegistryCatalogData">opGetRegistryCatalogData</a></code> | <code>string[]</code> | IAM actions required for the GetRegistryCatalogData API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.opGetRepositoryCatalogData">opGetRepositoryCatalogData</a></code> | <code>string[]</code> | IAM actions required for the GetRepositoryCatalogData API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.opGetRepositoryPolicy">opGetRepositoryPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetRepositoryPolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.opSetRepositoryPolicy">opSetRepositoryPolicy</a></code> | <code>string[]</code> | IAM actions required for the SetRepositoryPolicy API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.PutImage">PutImage</a></code> | <code>string[]</code> | IAM actions required for the PutImage API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.PutRegistryCatalogData">PutRegistryCatalogData</a></code> | <code>string[]</code> | IAM actions required for the PutRegistryCatalogData API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.PutRepositoryCatalogData">PutRepositoryCatalogData</a></code> | <code>string[]</code> | IAM actions required for the PutRepositoryCatalogData API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicOperations.property.UploadLayerPart">UploadLayerPart</a></code> | <code>string[]</code> | IAM actions required for the UploadLayerPart API call. |

---

##### `BatchCheckLayerAvailability`<sup>Required</sup> <a name="BatchCheckLayerAvailability" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.BatchCheckLayerAvailability"></a>

```typescript
public readonly BatchCheckLayerAvailability: string[];
```

- *Type:* string[]

IAM actions required for the BatchCheckLayerAvailability API call.

---

##### `BatchDeleteImage`<sup>Required</sup> <a name="BatchDeleteImage" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.BatchDeleteImage"></a>

```typescript
public readonly BatchDeleteImage: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteImage API call.

---

##### `CompleteLayerUpload`<sup>Required</sup> <a name="CompleteLayerUpload" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.CompleteLayerUpload"></a>

```typescript
public readonly CompleteLayerUpload: string[];
```

- *Type:* string[]

IAM actions required for the CompleteLayerUpload API call.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string[];
```

- *Type:* string[]

IAM actions required for the CreateRepository API call.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepository API call.

---

##### `DeleteRepositoryPolicy`<sup>Required</sup> <a name="DeleteRepositoryPolicy" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DeleteRepositoryPolicy"></a>

```typescript
public readonly DeleteRepositoryPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepositoryPolicy API call.

---

##### `DescribeImages`<sup>Required</sup> <a name="DescribeImages" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DescribeImages"></a>

```typescript
public readonly DescribeImages: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImages API call.

---

##### `DescribeImageTags`<sup>Required</sup> <a name="DescribeImageTags" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DescribeImageTags"></a>

```typescript
public readonly DescribeImageTags: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImageTags API call.

---

##### `DescribeRegistries`<sup>Required</sup> <a name="DescribeRegistries" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DescribeRegistries"></a>

```typescript
public readonly DescribeRegistries: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegistries API call.

---

##### `DescribeRepositories`<sup>Required</sup> <a name="DescribeRepositories" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.DescribeRepositories"></a>

```typescript
public readonly DescribeRepositories: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRepositories API call.

---

##### `InitiateLayerUpload`<sup>Required</sup> <a name="InitiateLayerUpload" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.InitiateLayerUpload"></a>

```typescript
public readonly InitiateLayerUpload: string[];
```

- *Type:* string[]

IAM actions required for the InitiateLayerUpload API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAuthorizationToken`<sup>Required</sup> <a name="opGetAuthorizationToken" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.opGetAuthorizationToken"></a>

```typescript
public readonly opGetAuthorizationToken: string[];
```

- *Type:* string[]

IAM actions required for the GetAuthorizationToken API call.

---

##### `opGetRegistryCatalogData`<sup>Required</sup> <a name="opGetRegistryCatalogData" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.opGetRegistryCatalogData"></a>

```typescript
public readonly opGetRegistryCatalogData: string[];
```

- *Type:* string[]

IAM actions required for the GetRegistryCatalogData API call.

---

##### `opGetRepositoryCatalogData`<sup>Required</sup> <a name="opGetRepositoryCatalogData" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.opGetRepositoryCatalogData"></a>

```typescript
public readonly opGetRepositoryCatalogData: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositoryCatalogData API call.

---

##### `opGetRepositoryPolicy`<sup>Required</sup> <a name="opGetRepositoryPolicy" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.opGetRepositoryPolicy"></a>

```typescript
public readonly opGetRepositoryPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositoryPolicy API call.

---

##### `opSetRepositoryPolicy`<sup>Required</sup> <a name="opSetRepositoryPolicy" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.opSetRepositoryPolicy"></a>

```typescript
public readonly opSetRepositoryPolicy: string[];
```

- *Type:* string[]

IAM actions required for the SetRepositoryPolicy API call.

---

##### `PutImage`<sup>Required</sup> <a name="PutImage" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.PutImage"></a>

```typescript
public readonly PutImage: string[];
```

- *Type:* string[]

IAM actions required for the PutImage API call.

---

##### `PutRegistryCatalogData`<sup>Required</sup> <a name="PutRegistryCatalogData" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.PutRegistryCatalogData"></a>

```typescript
public readonly PutRegistryCatalogData: string[];
```

- *Type:* string[]

IAM actions required for the PutRegistryCatalogData API call.

---

##### `PutRepositoryCatalogData`<sup>Required</sup> <a name="PutRepositoryCatalogData" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.PutRepositoryCatalogData"></a>

```typescript
public readonly PutRepositoryCatalogData: string[];
```

- *Type:* string[]

IAM actions required for the PutRepositoryCatalogData API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UploadLayerPart`<sup>Required</sup> <a name="UploadLayerPart" id="@cdk_utils/iam.ecr_public.ECRPublicOperations.property.UploadLayerPart"></a>

```typescript
public readonly UploadLayerPart: string[];
```

- *Type:* string[]

IAM actions required for the UploadLayerPart API call.

---

### ECRPublicResources <a name="ECRPublicResources" id="@cdk_utils/iam.ecr_public.ECRPublicResources"></a>

ARN builders, validators, and parsers for ecr-public resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecr_public.ECRPublicResources.Initializer"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

new ecr_public.ECRPublicResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicResources.isValidRegistryArn">isValidRegistryArn</a></code> | Validates whether a string is a valid ARN for the registry resource. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicResources.isValidRepositoryArn">isValidRepositoryArn</a></code> | Validates whether a string is a valid ARN for the repository resource. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicResources.parseRegistryArn">parseRegistryArn</a></code> | Parses a registry ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicResources.parseRepositoryArn">parseRepositoryArn</a></code> | Parses a repository ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicResources.registry">registry</a></code> | Builds an ARN for the registry resource. |
| <code><a href="#@cdk_utils/iam.ecr_public.ECRPublicResources.repository">repository</a></code> | Builds an ARN for the repository resource. |

---

##### `isValidRegistryArn` <a name="isValidRegistryArn" id="@cdk_utils/iam.ecr_public.ECRPublicResources.isValidRegistryArn"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

ecr_public.ECRPublicResources.isValidRegistryArn(arn: string)
```

Validates whether a string is a valid ARN for the registry resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecr_public.ECRPublicResources.isValidRegistryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRepositoryArn` <a name="isValidRepositoryArn" id="@cdk_utils/iam.ecr_public.ECRPublicResources.isValidRepositoryArn"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

ecr_public.ECRPublicResources.isValidRepositoryArn(arn: string)
```

Validates whether a string is a valid ARN for the repository resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecr_public.ECRPublicResources.isValidRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegistryArn` <a name="parseRegistryArn" id="@cdk_utils/iam.ecr_public.ECRPublicResources.parseRegistryArn"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

ecr_public.ECRPublicResources.parseRegistryArn(arn: string)
```

Parses a registry ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecr_public.ECRPublicResources.parseRegistryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRepositoryArn` <a name="parseRepositoryArn" id="@cdk_utils/iam.ecr_public.ECRPublicResources.parseRepositoryArn"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

ecr_public.ECRPublicResources.parseRepositoryArn(arn: string)
```

Parses a repository ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecr_public.ECRPublicResources.parseRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `registry` <a name="registry" id="@cdk_utils/iam.ecr_public.ECRPublicResources.registry"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

ecr_public.ECRPublicResources.registry(props: ECRPublicRegistryArnProps)
```

Builds an ARN for the registry resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecr_public.ECRPublicResources.registry.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecr_public.ECRPublicRegistryArnProps">ECRPublicRegistryArnProps</a>

---

##### `repository` <a name="repository" id="@cdk_utils/iam.ecr_public.ECRPublicResources.repository"></a>

```typescript
import { ecr_public } from '@cdk_utils/iam'

ecr_public.ECRPublicResources.repository(props: ECRPublicRepositoryArnProps)
```

Builds an ARN for the repository resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecr_public.ECRPublicResources.repository.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecr_public.ECRPublicRepositoryArnProps">ECRPublicRepositoryArnProps</a>

---




