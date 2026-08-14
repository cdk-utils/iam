# `codeguru_reviewer` Submodule <a name="`codeguru_reviewer` Submodule" id="@cdk_utils/iam.codeguru_reviewer"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodeguruReviewerAssociationArnComponents <a name="CodeguruReviewerAssociationArnComponents" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnComponents"></a>

Parsed components of a association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnComponents.Initializer"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

const codeguruReviewerAssociationArnComponents: codeguru_reviewer.CodeguruReviewerAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### CodeguruReviewerAssociationArnProps <a name="CodeguruReviewerAssociationArnProps" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps"></a>

Properties for building a association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps.Initializer"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

const codeguruReviewerAssociationArnProps: codeguru_reviewer.CodeguruReviewerAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeguruReviewerCodereviewArnComponents <a name="CodeguruReviewerCodereviewArnComponents" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents"></a>

Parsed components of a codereview ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.Initializer"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

const codeguruReviewerCodereviewArnComponents: codeguru_reviewer.CodeguruReviewerCodereviewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.property.codeReviewId">codeReviewId</a></code> | <code>string</code> | The CodeReviewId component. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `codeReviewId`<sup>Required</sup> <a name="codeReviewId" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.property.codeReviewId"></a>

```typescript
public readonly codeReviewId: string;
```

- *Type:* string

The CodeReviewId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### CodeguruReviewerCodereviewArnProps <a name="CodeguruReviewerCodereviewArnProps" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps"></a>

Properties for building a codereview ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.Initializer"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

const codeguruReviewerCodereviewArnProps: codeguru_reviewer.CodeguruReviewerCodereviewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.property.codeReviewId">codeReviewId</a></code> | <code>string</code> | The CodeReviewId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `codeReviewId`<sup>Required</sup> <a name="codeReviewId" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.property.codeReviewId"></a>

```typescript
public readonly codeReviewId: string;
```

- *Type:* string

The CodeReviewId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodeguruReviewerActions <a name="CodeguruReviewerActions" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions"></a>

IAM action constants for the codeguru-reviewer service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.Initializer"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

new codeguru_reviewer.CodeguruReviewerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.actionGetMetricsData">actionGetMetricsData</a></code> | <code>string</code> | [Read] codeguru-reviewer:GetMetricsData. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AssociateRepository">AssociateRepository</a></code> | <code>string</code> | [Write] codeguru-reviewer:AssociateRepository. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.CreateCodeReview">CreateCodeReview</a></code> | <code>string</code> | [Write] codeguru-reviewer:CreateCodeReview. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.CreateConnectionToken">CreateConnectionToken</a></code> | <code>string</code> | [Read] codeguru-reviewer:CreateConnectionToken. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.DescribeCodeReview">DescribeCodeReview</a></code> | <code>string</code> | [Read] codeguru-reviewer:DescribeCodeReview. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.DescribeRecommendationFeedback">DescribeRecommendationFeedback</a></code> | <code>string</code> | [Read] codeguru-reviewer:DescribeRecommendationFeedback. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.DescribeRepositoryAssociation">DescribeRepositoryAssociation</a></code> | <code>string</code> | [Read] codeguru-reviewer:DescribeRepositoryAssociation. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.DisassociateRepository">DisassociateRepository</a></code> | <code>string</code> | [Write] codeguru-reviewer:DisassociateRepository. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListCodeReviews">ListCodeReviews</a></code> | <code>string</code> | [List] codeguru-reviewer:ListCodeReviews. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListRecommendationFeedback">ListRecommendationFeedback</a></code> | <code>string</code> | [List] codeguru-reviewer:ListRecommendationFeedback. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListRecommendations">ListRecommendations</a></code> | <code>string</code> | [List] codeguru-reviewer:ListRecommendations. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListRepositoryAssociations">ListRepositoryAssociations</a></code> | <code>string</code> | [List] codeguru-reviewer:ListRepositoryAssociations. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] codeguru-reviewer:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListThirdPartyRepositories">ListThirdPartyRepositories</a></code> | <code>string</code> | [Read] codeguru-reviewer:ListThirdPartyRepositories. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.PutRecommendationFeedback">PutRecommendationFeedback</a></code> | <code>string</code> | [Write] codeguru-reviewer:PutRecommendationFeedback. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codeguru-reviewer:TagResource. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.UnTagResource">UnTagResource</a></code> | <code>string</code> | [Tagging] codeguru-reviewer:UnTagResource. |

---

##### `actionGetMetricsData`<sup>Required</sup> <a name="actionGetMetricsData" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.actionGetMetricsData"></a>

```typescript
public readonly actionGetMetricsData: string;
```

- *Type:* string

[Read] codeguru-reviewer:GetMetricsData.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateRepository`<sup>Required</sup> <a name="AssociateRepository" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.AssociateRepository"></a>

```typescript
public readonly AssociateRepository: string;
```

- *Type:* string

[Write] codeguru-reviewer:AssociateRepository.

---

##### `CreateCodeReview`<sup>Required</sup> <a name="CreateCodeReview" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.CreateCodeReview"></a>

```typescript
public readonly CreateCodeReview: string;
```

- *Type:* string

[Write] codeguru-reviewer:CreateCodeReview.

---

##### `CreateConnectionToken`<sup>Required</sup> <a name="CreateConnectionToken" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.CreateConnectionToken"></a>

```typescript
public readonly CreateConnectionToken: string;
```

- *Type:* string

[Read] codeguru-reviewer:CreateConnectionToken.

---

##### `DescribeCodeReview`<sup>Required</sup> <a name="DescribeCodeReview" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.DescribeCodeReview"></a>

```typescript
public readonly DescribeCodeReview: string;
```

- *Type:* string

[Read] codeguru-reviewer:DescribeCodeReview.

---

##### `DescribeRecommendationFeedback`<sup>Required</sup> <a name="DescribeRecommendationFeedback" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.DescribeRecommendationFeedback"></a>

```typescript
public readonly DescribeRecommendationFeedback: string;
```

- *Type:* string

[Read] codeguru-reviewer:DescribeRecommendationFeedback.

---

##### `DescribeRepositoryAssociation`<sup>Required</sup> <a name="DescribeRepositoryAssociation" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.DescribeRepositoryAssociation"></a>

```typescript
public readonly DescribeRepositoryAssociation: string;
```

- *Type:* string

[Read] codeguru-reviewer:DescribeRepositoryAssociation.

---

##### `DisassociateRepository`<sup>Required</sup> <a name="DisassociateRepository" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.DisassociateRepository"></a>

```typescript
public readonly DisassociateRepository: string;
```

- *Type:* string

[Write] codeguru-reviewer:DisassociateRepository.

---

##### `ListCodeReviews`<sup>Required</sup> <a name="ListCodeReviews" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListCodeReviews"></a>

```typescript
public readonly ListCodeReviews: string;
```

- *Type:* string

[List] codeguru-reviewer:ListCodeReviews.

---

##### `ListRecommendationFeedback`<sup>Required</sup> <a name="ListRecommendationFeedback" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListRecommendationFeedback"></a>

```typescript
public readonly ListRecommendationFeedback: string;
```

- *Type:* string

[List] codeguru-reviewer:ListRecommendationFeedback.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string;
```

- *Type:* string

[List] codeguru-reviewer:ListRecommendations.

---

##### `ListRepositoryAssociations`<sup>Required</sup> <a name="ListRepositoryAssociations" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListRepositoryAssociations"></a>

```typescript
public readonly ListRepositoryAssociations: string;
```

- *Type:* string

[List] codeguru-reviewer:ListRepositoryAssociations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] codeguru-reviewer:ListTagsForResource.

---

##### `ListThirdPartyRepositories`<sup>Required</sup> <a name="ListThirdPartyRepositories" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.ListThirdPartyRepositories"></a>

```typescript
public readonly ListThirdPartyRepositories: string;
```

- *Type:* string

[Read] codeguru-reviewer:ListThirdPartyRepositories.

---

##### `PutRecommendationFeedback`<sup>Required</sup> <a name="PutRecommendationFeedback" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.PutRecommendationFeedback"></a>

```typescript
public readonly PutRecommendationFeedback: string;
```

- *Type:* string

[Write] codeguru-reviewer:PutRecommendationFeedback.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codeguru-reviewer:TagResource.

---

##### `UnTagResource`<sup>Required</sup> <a name="UnTagResource" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerActions.property.UnTagResource"></a>

```typescript
public readonly UnTagResource: string;
```

- *Type:* string

[Tagging] codeguru-reviewer:UnTagResource.

---

### CodeguruReviewerConditions <a name="CodeguruReviewerConditions" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions"></a>

Condition key constants and builders for codeguru-reviewer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.Initializer"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

new codeguru_reviewer.CodeguruReviewerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.requestTag"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

codeguru_reviewer.CodeguruReviewerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.resourceTag"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

codeguru_reviewer.CodeguruReviewerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.tagKeys"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

codeguru_reviewer.CodeguruReviewerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.AssociateRepositoryConditionKeys">AssociateRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateRepository action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.CreateCodeReviewConditionKeys">CreateCodeReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCodeReview action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.DescribeCodeReviewConditionKeys">DescribeCodeReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCodeReview action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.DescribeRecommendationFeedbackConditionKeys">DescribeRecommendationFeedbackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeRecommendationFeedback action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.DescribeRepositoryAssociationConditionKeys">DescribeRepositoryAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeRepositoryAssociation action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.DisassociateRepositoryConditionKeys">DisassociateRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateRepository action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.ListRecommendationFeedbackConditionKeys">ListRecommendationFeedbackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRecommendationFeedback action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.ListRecommendationsConditionKeys">ListRecommendationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRecommendations action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.PutRecommendationFeedbackConditionKeys">PutRecommendationFeedbackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutRecommendationFeedback action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.UnTagResourceConditionKeys">UnTagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UnTagResource action. |

---

##### `AssociateRepositoryConditionKeys`<sup>Required</sup> <a name="AssociateRepositoryConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.AssociateRepositoryConditionKeys"></a>

```typescript
public readonly AssociateRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateRepository action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCodeReviewConditionKeys`<sup>Required</sup> <a name="CreateCodeReviewConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.CreateCodeReviewConditionKeys"></a>

```typescript
public readonly CreateCodeReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCodeReview action.

---

##### `DescribeCodeReviewConditionKeys`<sup>Required</sup> <a name="DescribeCodeReviewConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.DescribeCodeReviewConditionKeys"></a>

```typescript
public readonly DescribeCodeReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCodeReview action.

---

##### `DescribeRecommendationFeedbackConditionKeys`<sup>Required</sup> <a name="DescribeRecommendationFeedbackConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.DescribeRecommendationFeedbackConditionKeys"></a>

```typescript
public readonly DescribeRecommendationFeedbackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeRecommendationFeedback action.

---

##### `DescribeRepositoryAssociationConditionKeys`<sup>Required</sup> <a name="DescribeRepositoryAssociationConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.DescribeRepositoryAssociationConditionKeys"></a>

```typescript
public readonly DescribeRepositoryAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeRepositoryAssociation action.

---

##### `DisassociateRepositoryConditionKeys`<sup>Required</sup> <a name="DisassociateRepositoryConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.DisassociateRepositoryConditionKeys"></a>

```typescript
public readonly DisassociateRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateRepository action.

---

##### `ListRecommendationFeedbackConditionKeys`<sup>Required</sup> <a name="ListRecommendationFeedbackConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.ListRecommendationFeedbackConditionKeys"></a>

```typescript
public readonly ListRecommendationFeedbackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRecommendationFeedback action.

---

##### `ListRecommendationsConditionKeys`<sup>Required</sup> <a name="ListRecommendationsConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.ListRecommendationsConditionKeys"></a>

```typescript
public readonly ListRecommendationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRecommendations action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `PutRecommendationFeedbackConditionKeys`<sup>Required</sup> <a name="PutRecommendationFeedbackConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.PutRecommendationFeedbackConditionKeys"></a>

```typescript
public readonly PutRecommendationFeedbackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutRecommendationFeedback action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UnTagResourceConditionKeys`<sup>Required</sup> <a name="UnTagResourceConditionKeys" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerConditions.property.UnTagResourceConditionKeys"></a>

```typescript
public readonly UnTagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UnTagResource action.

---

### CodeguruReviewerOperations <a name="CodeguruReviewerOperations" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations"></a>

API operation to required IAM actions mapping for codeguru-reviewer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.Initializer"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

new codeguru_reviewer.CodeguruReviewerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.AssociateRepository">AssociateRepository</a></code> | <code>string[]</code> | IAM actions required for the AssociateRepository API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.CreateCodeReview">CreateCodeReview</a></code> | <code>string[]</code> | IAM actions required for the CreateCodeReview API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.DescribeCodeReview">DescribeCodeReview</a></code> | <code>string[]</code> | IAM actions required for the DescribeCodeReview API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.DescribeRecommendationFeedback">DescribeRecommendationFeedback</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecommendationFeedback API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.DescribeRepositoryAssociation">DescribeRepositoryAssociation</a></code> | <code>string[]</code> | IAM actions required for the DescribeRepositoryAssociation API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.DisassociateRepository">DisassociateRepository</a></code> | <code>string[]</code> | IAM actions required for the DisassociateRepository API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.ListCodeReviews">ListCodeReviews</a></code> | <code>string[]</code> | IAM actions required for the ListCodeReviews API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.ListRecommendationFeedback">ListRecommendationFeedback</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendationFeedback API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.ListRecommendations">ListRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendations API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.ListRepositoryAssociations">ListRepositoryAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListRepositoryAssociations API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.PutRecommendationFeedback">PutRecommendationFeedback</a></code> | <code>string[]</code> | IAM actions required for the PutRecommendationFeedback API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `AssociateRepository`<sup>Required</sup> <a name="AssociateRepository" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.AssociateRepository"></a>

```typescript
public readonly AssociateRepository: string[];
```

- *Type:* string[]

IAM actions required for the AssociateRepository API call.

---

##### `CreateCodeReview`<sup>Required</sup> <a name="CreateCodeReview" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.CreateCodeReview"></a>

```typescript
public readonly CreateCodeReview: string[];
```

- *Type:* string[]

IAM actions required for the CreateCodeReview API call.

---

##### `DescribeCodeReview`<sup>Required</sup> <a name="DescribeCodeReview" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.DescribeCodeReview"></a>

```typescript
public readonly DescribeCodeReview: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCodeReview API call.

---

##### `DescribeRecommendationFeedback`<sup>Required</sup> <a name="DescribeRecommendationFeedback" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.DescribeRecommendationFeedback"></a>

```typescript
public readonly DescribeRecommendationFeedback: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecommendationFeedback API call.

---

##### `DescribeRepositoryAssociation`<sup>Required</sup> <a name="DescribeRepositoryAssociation" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.DescribeRepositoryAssociation"></a>

```typescript
public readonly DescribeRepositoryAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRepositoryAssociation API call.

---

##### `DisassociateRepository`<sup>Required</sup> <a name="DisassociateRepository" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.DisassociateRepository"></a>

```typescript
public readonly DisassociateRepository: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateRepository API call.

---

##### `ListCodeReviews`<sup>Required</sup> <a name="ListCodeReviews" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.ListCodeReviews"></a>

```typescript
public readonly ListCodeReviews: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeReviews API call.

---

##### `ListRecommendationFeedback`<sup>Required</sup> <a name="ListRecommendationFeedback" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.ListRecommendationFeedback"></a>

```typescript
public readonly ListRecommendationFeedback: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendationFeedback API call.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendations API call.

---

##### `ListRepositoryAssociations`<sup>Required</sup> <a name="ListRepositoryAssociations" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.ListRepositoryAssociations"></a>

```typescript
public readonly ListRepositoryAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositoryAssociations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `PutRecommendationFeedback`<sup>Required</sup> <a name="PutRecommendationFeedback" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.PutRecommendationFeedback"></a>

```typescript
public readonly PutRecommendationFeedback: string[];
```

- *Type:* string[]

IAM actions required for the PutRecommendationFeedback API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### CodeguruReviewerResources <a name="CodeguruReviewerResources" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources"></a>

ARN builders, validators, and parsers for codeguru-reviewer resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.Initializer"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

new codeguru_reviewer.CodeguruReviewerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.association">association</a></code> | Builds an ARN for the association resource. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.codereview">codereview</a></code> | Builds an ARN for the codereview resource. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.isValidAssociationArn">isValidAssociationArn</a></code> | Validates whether a string is a valid ARN for the association resource. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.isValidCodereviewArn">isValidCodereviewArn</a></code> | Validates whether a string is a valid ARN for the codereview resource. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.parseAssociationArn">parseAssociationArn</a></code> | Parses a association ARN into its components. |
| <code><a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.parseCodereviewArn">parseCodereviewArn</a></code> | Parses a codereview ARN into its components. |

---

##### `association` <a name="association" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.association"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

codeguru_reviewer.CodeguruReviewerResources.association(props: CodeguruReviewerAssociationArnProps)
```

Builds an ARN for the association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.association.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerAssociationArnProps">CodeguruReviewerAssociationArnProps</a>

---

##### `codereview` <a name="codereview" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.codereview"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

codeguru_reviewer.CodeguruReviewerResources.codereview(props: CodeguruReviewerCodereviewArnProps)
```

Builds an ARN for the codereview resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.codereview.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerCodereviewArnProps">CodeguruReviewerCodereviewArnProps</a>

---

##### `isValidAssociationArn` <a name="isValidAssociationArn" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.isValidAssociationArn"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

codeguru_reviewer.CodeguruReviewerResources.isValidAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.isValidAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCodereviewArn` <a name="isValidCodereviewArn" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.isValidCodereviewArn"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

codeguru_reviewer.CodeguruReviewerResources.isValidCodereviewArn(arn: string)
```

Validates whether a string is a valid ARN for the codereview resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.isValidCodereviewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssociationArn` <a name="parseAssociationArn" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.parseAssociationArn"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

codeguru_reviewer.CodeguruReviewerResources.parseAssociationArn(arn: string)
```

Parses a association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.parseAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCodereviewArn` <a name="parseCodereviewArn" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.parseCodereviewArn"></a>

```typescript
import { codeguru_reviewer } from '@cdk_utils/iam'

codeguru_reviewer.CodeguruReviewerResources.parseCodereviewArn(arn: string)
```

Parses a codereview ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeguru_reviewer.CodeguruReviewerResources.parseCodereviewArn.parameter.arn"></a>

- *Type:* string

---




