# `codecommit` Submodule <a name="`codecommit` Submodule" id="@cdk_utils/iam.codecommit"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodeCommitRepositoryArnComponents <a name="CodeCommitRepositoryArnComponents" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnComponents"></a>

Parsed components of a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnComponents.Initializer"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

const codeCommitRepositoryArnComponents: codecommit.CodeCommitRepositoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitRepositoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitRepositoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitRepositoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitRepositoryArnComponents.property.repositoryName">repositoryName</a></code> | <code>string</code> | The RepositoryName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnComponents.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The RepositoryName component.

---

### CodeCommitRepositoryArnProps <a name="CodeCommitRepositoryArnProps" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps"></a>

Properties for building a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps.Initializer"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

const codeCommitRepositoryArnProps: codecommit.CodeCommitRepositoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps.property.repositoryName">repositoryName</a></code> | <code>string</code> | The RepositoryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The RepositoryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodeCommitActions <a name="CodeCommitActions" id="@cdk_utils/iam.codecommit.CodeCommitActions"></a>

IAM action constants for the codecommit service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codecommit.CodeCommitActions.Initializer"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

new codecommit.CodeCommitActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetApprovalRuleTemplate">actionGetApprovalRuleTemplate</a></code> | <code>string</code> | [Read] codecommit:GetApprovalRuleTemplate. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetBlob">actionGetBlob</a></code> | <code>string</code> | [Read] codecommit:GetBlob. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetBranch">actionGetBranch</a></code> | <code>string</code> | [Read] codecommit:GetBranch. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetComment">actionGetComment</a></code> | <code>string</code> | [Read] codecommit:GetComment. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommentReactions">actionGetCommentReactions</a></code> | <code>string</code> | [Read] codecommit:GetCommentReactions. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommentsForComparedCommit">actionGetCommentsForComparedCommit</a></code> | <code>string</code> | [Read] codecommit:GetCommentsForComparedCommit. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommentsForPullRequest">actionGetCommentsForPullRequest</a></code> | <code>string</code> | [Read] codecommit:GetCommentsForPullRequest. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommit">actionGetCommit</a></code> | <code>string</code> | [Read] codecommit:GetCommit. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommitHistory">actionGetCommitHistory</a></code> | <code>string</code> | [Read] codecommit:GetCommitHistory. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommitsFromMergeBase">actionGetCommitsFromMergeBase</a></code> | <code>string</code> | [Read] codecommit:GetCommitsFromMergeBase. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetDifferences">actionGetDifferences</a></code> | <code>string</code> | [Read] codecommit:GetDifferences. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetFile">actionGetFile</a></code> | <code>string</code> | [Read] codecommit:GetFile. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetFolder">actionGetFolder</a></code> | <code>string</code> | [Read] codecommit:GetFolder. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetMergeCommit">actionGetMergeCommit</a></code> | <code>string</code> | [Read] codecommit:GetMergeCommit. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetMergeConflicts">actionGetMergeConflicts</a></code> | <code>string</code> | [Read] codecommit:GetMergeConflicts. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetMergeOptions">actionGetMergeOptions</a></code> | <code>string</code> | [Read] codecommit:GetMergeOptions. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetObjectIdentifier">actionGetObjectIdentifier</a></code> | <code>string</code> | [Read] codecommit:GetObjectIdentifier. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetPullRequest">actionGetPullRequest</a></code> | <code>string</code> | [Read] codecommit:GetPullRequest. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetPullRequestApprovalStates">actionGetPullRequestApprovalStates</a></code> | <code>string</code> | [Read] codecommit:GetPullRequestApprovalStates. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetPullRequestOverrideState">actionGetPullRequestOverrideState</a></code> | <code>string</code> | [Read] codecommit:GetPullRequestOverrideState. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetReferences">actionGetReferences</a></code> | <code>string</code> | [Read] codecommit:GetReferences. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetRepository">actionGetRepository</a></code> | <code>string</code> | [Read] codecommit:GetRepository. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetRepositoryTriggers">actionGetRepositoryTriggers</a></code> | <code>string</code> | [Read] codecommit:GetRepositoryTriggers. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetTree">actionGetTree</a></code> | <code>string</code> | [Read] codecommit:GetTree. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetUploadArchiveStatus">actionGetUploadArchiveStatus</a></code> | <code>string</code> | [Read] codecommit:GetUploadArchiveStatus. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.AssociateApprovalRuleTemplateWithRepository">AssociateApprovalRuleTemplateWithRepository</a></code> | <code>string</code> | [Write] codecommit:AssociateApprovalRuleTemplateWithRepository. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchAssociateApprovalRuleTemplateWithRepositories">BatchAssociateApprovalRuleTemplateWithRepositories</a></code> | <code>string</code> | [Write] codecommit:BatchAssociateApprovalRuleTemplateWithRepositories. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchDescribeMergeConflicts">BatchDescribeMergeConflicts</a></code> | <code>string</code> | [Read] codecommit:BatchDescribeMergeConflicts. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchDisassociateApprovalRuleTemplateFromRepositories">BatchDisassociateApprovalRuleTemplateFromRepositories</a></code> | <code>string</code> | [Write] codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchGetCommits">BatchGetCommits</a></code> | <code>string</code> | [Read] codecommit:BatchGetCommits. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchGetPullRequests">BatchGetPullRequests</a></code> | <code>string</code> | [Read] codecommit:BatchGetPullRequests. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchGetRepositories">BatchGetRepositories</a></code> | <code>string</code> | [Read] codecommit:BatchGetRepositories. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.CancelUploadArchive">CancelUploadArchive</a></code> | <code>string</code> | [Read] codecommit:CancelUploadArchive. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.CreateApprovalRuleTemplate">CreateApprovalRuleTemplate</a></code> | <code>string</code> | [Write] codecommit:CreateApprovalRuleTemplate. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.CreateBranch">CreateBranch</a></code> | <code>string</code> | [Write] codecommit:CreateBranch. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.CreateCommit">CreateCommit</a></code> | <code>string</code> | [Write] codecommit:CreateCommit. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.CreatePullRequest">CreatePullRequest</a></code> | <code>string</code> | [Write] codecommit:CreatePullRequest. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.CreatePullRequestApprovalRule">CreatePullRequestApprovalRule</a></code> | <code>string</code> | [Write] codecommit:CreatePullRequestApprovalRule. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.CreateRepository">CreateRepository</a></code> | <code>string</code> | [Write] codecommit:CreateRepository. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.CreateUnreferencedMergeCommit">CreateUnreferencedMergeCommit</a></code> | <code>string</code> | [Write] codecommit:CreateUnreferencedMergeCommit. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.DeleteApprovalRuleTemplate">DeleteApprovalRuleTemplate</a></code> | <code>string</code> | [Write] codecommit:DeleteApprovalRuleTemplate. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.DeleteBranch">DeleteBranch</a></code> | <code>string</code> | [Write] codecommit:DeleteBranch. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.DeleteCommentContent">DeleteCommentContent</a></code> | <code>string</code> | [Write] codecommit:DeleteCommentContent. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.DeleteFile">DeleteFile</a></code> | <code>string</code> | [Write] codecommit:DeleteFile. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.DeletePullRequestApprovalRule">DeletePullRequestApprovalRule</a></code> | <code>string</code> | [Write] codecommit:DeletePullRequestApprovalRule. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.DeleteRepository">DeleteRepository</a></code> | <code>string</code> | [Write] codecommit:DeleteRepository. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.DescribeMergeConflicts">DescribeMergeConflicts</a></code> | <code>string</code> | [Read] codecommit:DescribeMergeConflicts. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.DescribePullRequestEvents">DescribePullRequestEvents</a></code> | <code>string</code> | [Read] codecommit:DescribePullRequestEvents. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.DisassociateApprovalRuleTemplateFromRepository">DisassociateApprovalRuleTemplateFromRepository</a></code> | <code>string</code> | [Write] codecommit:DisassociateApprovalRuleTemplateFromRepository. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.EvaluatePullRequestApprovalRules">EvaluatePullRequestApprovalRules</a></code> | <code>string</code> | [Read] codecommit:EvaluatePullRequestApprovalRules. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.GitPull">GitPull</a></code> | <code>string</code> | [Read] codecommit:GitPull. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.GitPush">GitPush</a></code> | <code>string</code> | [Write] codecommit:GitPush. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.ListApprovalRuleTemplates">ListApprovalRuleTemplates</a></code> | <code>string</code> | [List] codecommit:ListApprovalRuleTemplates. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.ListAssociatedApprovalRuleTemplatesForRepository">ListAssociatedApprovalRuleTemplatesForRepository</a></code> | <code>string</code> | [List] codecommit:ListAssociatedApprovalRuleTemplatesForRepository. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.ListBranches">ListBranches</a></code> | <code>string</code> | [List] codecommit:ListBranches. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.ListFileCommitHistory">ListFileCommitHistory</a></code> | <code>string</code> | [List] codecommit:ListFileCommitHistory. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.ListPullRequests">ListPullRequests</a></code> | <code>string</code> | [List] codecommit:ListPullRequests. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.ListRepositories">ListRepositories</a></code> | <code>string</code> | [List] codecommit:ListRepositories. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.ListRepositoriesForApprovalRuleTemplate">ListRepositoriesForApprovalRuleTemplate</a></code> | <code>string</code> | [List] codecommit:ListRepositoriesForApprovalRuleTemplate. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] codecommit:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.MergeBranchesByFastForward">MergeBranchesByFastForward</a></code> | <code>string</code> | [Write] codecommit:MergeBranchesByFastForward. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.MergeBranchesBySquash">MergeBranchesBySquash</a></code> | <code>string</code> | [Write] codecommit:MergeBranchesBySquash. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.MergeBranchesByThreeWay">MergeBranchesByThreeWay</a></code> | <code>string</code> | [Write] codecommit:MergeBranchesByThreeWay. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.MergePullRequestByFastForward">MergePullRequestByFastForward</a></code> | <code>string</code> | [Write] codecommit:MergePullRequestByFastForward. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.MergePullRequestBySquash">MergePullRequestBySquash</a></code> | <code>string</code> | [Write] codecommit:MergePullRequestBySquash. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.MergePullRequestByThreeWay">MergePullRequestByThreeWay</a></code> | <code>string</code> | [Write] codecommit:MergePullRequestByThreeWay. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.OverridePullRequestApprovalRules">OverridePullRequestApprovalRules</a></code> | <code>string</code> | [Write] codecommit:OverridePullRequestApprovalRules. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.PostCommentForComparedCommit">PostCommentForComparedCommit</a></code> | <code>string</code> | [Write] codecommit:PostCommentForComparedCommit. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.PostCommentForPullRequest">PostCommentForPullRequest</a></code> | <code>string</code> | [Write] codecommit:PostCommentForPullRequest. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.PostCommentReply">PostCommentReply</a></code> | <code>string</code> | [Write] codecommit:PostCommentReply. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.PutCommentReaction">PutCommentReaction</a></code> | <code>string</code> | [Write] codecommit:PutCommentReaction. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.PutFile">PutFile</a></code> | <code>string</code> | [Write] codecommit:PutFile. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.PutRepositoryTriggers">PutRepositoryTriggers</a></code> | <code>string</code> | [Write] codecommit:PutRepositoryTriggers. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codecommit:TagResource. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.TestRepositoryTriggers">TestRepositoryTriggers</a></code> | <code>string</code> | [Write] codecommit:TestRepositoryTriggers. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codecommit:UntagResource. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateApprovalRuleTemplateContent">UpdateApprovalRuleTemplateContent</a></code> | <code>string</code> | [Write] codecommit:UpdateApprovalRuleTemplateContent. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateApprovalRuleTemplateDescription">UpdateApprovalRuleTemplateDescription</a></code> | <code>string</code> | [Write] codecommit:UpdateApprovalRuleTemplateDescription. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateApprovalRuleTemplateName">UpdateApprovalRuleTemplateName</a></code> | <code>string</code> | [Write] codecommit:UpdateApprovalRuleTemplateName. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateComment">UpdateComment</a></code> | <code>string</code> | [Write] codecommit:UpdateComment. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateDefaultBranch">UpdateDefaultBranch</a></code> | <code>string</code> | [Write] codecommit:UpdateDefaultBranch. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdatePullRequestApprovalRuleContent">UpdatePullRequestApprovalRuleContent</a></code> | <code>string</code> | [Write] codecommit:UpdatePullRequestApprovalRuleContent. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdatePullRequestApprovalState">UpdatePullRequestApprovalState</a></code> | <code>string</code> | [Write] codecommit:UpdatePullRequestApprovalState. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdatePullRequestDescription">UpdatePullRequestDescription</a></code> | <code>string</code> | [Write] codecommit:UpdatePullRequestDescription. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdatePullRequestStatus">UpdatePullRequestStatus</a></code> | <code>string</code> | [Write] codecommit:UpdatePullRequestStatus. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdatePullRequestTitle">UpdatePullRequestTitle</a></code> | <code>string</code> | [Write] codecommit:UpdatePullRequestTitle. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateRepositoryDescription">UpdateRepositoryDescription</a></code> | <code>string</code> | [Write] codecommit:UpdateRepositoryDescription. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateRepositoryEncryptionKey">UpdateRepositoryEncryptionKey</a></code> | <code>string</code> | [Write] codecommit:UpdateRepositoryEncryptionKey. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateRepositoryName">UpdateRepositoryName</a></code> | <code>string</code> | [Write] codecommit:UpdateRepositoryName. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitActions.property.UploadArchive">UploadArchive</a></code> | <code>string</code> | [Write] codecommit:UploadArchive. |

---

##### `actionGetApprovalRuleTemplate`<sup>Required</sup> <a name="actionGetApprovalRuleTemplate" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetApprovalRuleTemplate"></a>

```typescript
public readonly actionGetApprovalRuleTemplate: string;
```

- *Type:* string

[Read] codecommit:GetApprovalRuleTemplate.

---

##### `actionGetBlob`<sup>Required</sup> <a name="actionGetBlob" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetBlob"></a>

```typescript
public readonly actionGetBlob: string;
```

- *Type:* string

[Read] codecommit:GetBlob.

---

##### `actionGetBranch`<sup>Required</sup> <a name="actionGetBranch" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetBranch"></a>

```typescript
public readonly actionGetBranch: string;
```

- *Type:* string

[Read] codecommit:GetBranch.

---

##### `actionGetComment`<sup>Required</sup> <a name="actionGetComment" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetComment"></a>

```typescript
public readonly actionGetComment: string;
```

- *Type:* string

[Read] codecommit:GetComment.

---

##### `actionGetCommentReactions`<sup>Required</sup> <a name="actionGetCommentReactions" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommentReactions"></a>

```typescript
public readonly actionGetCommentReactions: string;
```

- *Type:* string

[Read] codecommit:GetCommentReactions.

---

##### `actionGetCommentsForComparedCommit`<sup>Required</sup> <a name="actionGetCommentsForComparedCommit" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommentsForComparedCommit"></a>

```typescript
public readonly actionGetCommentsForComparedCommit: string;
```

- *Type:* string

[Read] codecommit:GetCommentsForComparedCommit.

---

##### `actionGetCommentsForPullRequest`<sup>Required</sup> <a name="actionGetCommentsForPullRequest" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommentsForPullRequest"></a>

```typescript
public readonly actionGetCommentsForPullRequest: string;
```

- *Type:* string

[Read] codecommit:GetCommentsForPullRequest.

---

##### `actionGetCommit`<sup>Required</sup> <a name="actionGetCommit" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommit"></a>

```typescript
public readonly actionGetCommit: string;
```

- *Type:* string

[Read] codecommit:GetCommit.

---

##### `actionGetCommitHistory`<sup>Required</sup> <a name="actionGetCommitHistory" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommitHistory"></a>

```typescript
public readonly actionGetCommitHistory: string;
```

- *Type:* string

[Read] codecommit:GetCommitHistory.

---

##### `actionGetCommitsFromMergeBase`<sup>Required</sup> <a name="actionGetCommitsFromMergeBase" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetCommitsFromMergeBase"></a>

```typescript
public readonly actionGetCommitsFromMergeBase: string;
```

- *Type:* string

[Read] codecommit:GetCommitsFromMergeBase.

---

##### `actionGetDifferences`<sup>Required</sup> <a name="actionGetDifferences" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetDifferences"></a>

```typescript
public readonly actionGetDifferences: string;
```

- *Type:* string

[Read] codecommit:GetDifferences.

---

##### `actionGetFile`<sup>Required</sup> <a name="actionGetFile" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetFile"></a>

```typescript
public readonly actionGetFile: string;
```

- *Type:* string

[Read] codecommit:GetFile.

---

##### `actionGetFolder`<sup>Required</sup> <a name="actionGetFolder" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetFolder"></a>

```typescript
public readonly actionGetFolder: string;
```

- *Type:* string

[Read] codecommit:GetFolder.

---

##### `actionGetMergeCommit`<sup>Required</sup> <a name="actionGetMergeCommit" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetMergeCommit"></a>

```typescript
public readonly actionGetMergeCommit: string;
```

- *Type:* string

[Read] codecommit:GetMergeCommit.

---

##### `actionGetMergeConflicts`<sup>Required</sup> <a name="actionGetMergeConflicts" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetMergeConflicts"></a>

```typescript
public readonly actionGetMergeConflicts: string;
```

- *Type:* string

[Read] codecommit:GetMergeConflicts.

---

##### `actionGetMergeOptions`<sup>Required</sup> <a name="actionGetMergeOptions" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetMergeOptions"></a>

```typescript
public readonly actionGetMergeOptions: string;
```

- *Type:* string

[Read] codecommit:GetMergeOptions.

---

##### `actionGetObjectIdentifier`<sup>Required</sup> <a name="actionGetObjectIdentifier" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetObjectIdentifier"></a>

```typescript
public readonly actionGetObjectIdentifier: string;
```

- *Type:* string

[Read] codecommit:GetObjectIdentifier.

---

##### `actionGetPullRequest`<sup>Required</sup> <a name="actionGetPullRequest" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetPullRequest"></a>

```typescript
public readonly actionGetPullRequest: string;
```

- *Type:* string

[Read] codecommit:GetPullRequest.

---

##### `actionGetPullRequestApprovalStates`<sup>Required</sup> <a name="actionGetPullRequestApprovalStates" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetPullRequestApprovalStates"></a>

```typescript
public readonly actionGetPullRequestApprovalStates: string;
```

- *Type:* string

[Read] codecommit:GetPullRequestApprovalStates.

---

##### `actionGetPullRequestOverrideState`<sup>Required</sup> <a name="actionGetPullRequestOverrideState" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetPullRequestOverrideState"></a>

```typescript
public readonly actionGetPullRequestOverrideState: string;
```

- *Type:* string

[Read] codecommit:GetPullRequestOverrideState.

---

##### `actionGetReferences`<sup>Required</sup> <a name="actionGetReferences" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetReferences"></a>

```typescript
public readonly actionGetReferences: string;
```

- *Type:* string

[Read] codecommit:GetReferences.

---

##### `actionGetRepository`<sup>Required</sup> <a name="actionGetRepository" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetRepository"></a>

```typescript
public readonly actionGetRepository: string;
```

- *Type:* string

[Read] codecommit:GetRepository.

---

##### `actionGetRepositoryTriggers`<sup>Required</sup> <a name="actionGetRepositoryTriggers" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetRepositoryTriggers"></a>

```typescript
public readonly actionGetRepositoryTriggers: string;
```

- *Type:* string

[Read] codecommit:GetRepositoryTriggers.

---

##### `actionGetTree`<sup>Required</sup> <a name="actionGetTree" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetTree"></a>

```typescript
public readonly actionGetTree: string;
```

- *Type:* string

[Read] codecommit:GetTree.

---

##### `actionGetUploadArchiveStatus`<sup>Required</sup> <a name="actionGetUploadArchiveStatus" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.actionGetUploadArchiveStatus"></a>

```typescript
public readonly actionGetUploadArchiveStatus: string;
```

- *Type:* string

[Read] codecommit:GetUploadArchiveStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateApprovalRuleTemplateWithRepository`<sup>Required</sup> <a name="AssociateApprovalRuleTemplateWithRepository" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.AssociateApprovalRuleTemplateWithRepository"></a>

```typescript
public readonly AssociateApprovalRuleTemplateWithRepository: string;
```

- *Type:* string

[Write] codecommit:AssociateApprovalRuleTemplateWithRepository.

---

##### `BatchAssociateApprovalRuleTemplateWithRepositories`<sup>Required</sup> <a name="BatchAssociateApprovalRuleTemplateWithRepositories" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchAssociateApprovalRuleTemplateWithRepositories"></a>

```typescript
public readonly BatchAssociateApprovalRuleTemplateWithRepositories: string;
```

- *Type:* string

[Write] codecommit:BatchAssociateApprovalRuleTemplateWithRepositories.

---

##### `BatchDescribeMergeConflicts`<sup>Required</sup> <a name="BatchDescribeMergeConflicts" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchDescribeMergeConflicts"></a>

```typescript
public readonly BatchDescribeMergeConflicts: string;
```

- *Type:* string

[Read] codecommit:BatchDescribeMergeConflicts.

---

##### `BatchDisassociateApprovalRuleTemplateFromRepositories`<sup>Required</sup> <a name="BatchDisassociateApprovalRuleTemplateFromRepositories" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchDisassociateApprovalRuleTemplateFromRepositories"></a>

```typescript
public readonly BatchDisassociateApprovalRuleTemplateFromRepositories: string;
```

- *Type:* string

[Write] codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories.

---

##### `BatchGetCommits`<sup>Required</sup> <a name="BatchGetCommits" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchGetCommits"></a>

```typescript
public readonly BatchGetCommits: string;
```

- *Type:* string

[Read] codecommit:BatchGetCommits.

---

##### `BatchGetPullRequests`<sup>Required</sup> <a name="BatchGetPullRequests" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchGetPullRequests"></a>

```typescript
public readonly BatchGetPullRequests: string;
```

- *Type:* string

[Read] codecommit:BatchGetPullRequests.

---

##### `BatchGetRepositories`<sup>Required</sup> <a name="BatchGetRepositories" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.BatchGetRepositories"></a>

```typescript
public readonly BatchGetRepositories: string;
```

- *Type:* string

[Read] codecommit:BatchGetRepositories.

---

##### `CancelUploadArchive`<sup>Required</sup> <a name="CancelUploadArchive" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.CancelUploadArchive"></a>

```typescript
public readonly CancelUploadArchive: string;
```

- *Type:* string

[Read] codecommit:CancelUploadArchive.

---

##### `CreateApprovalRuleTemplate`<sup>Required</sup> <a name="CreateApprovalRuleTemplate" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.CreateApprovalRuleTemplate"></a>

```typescript
public readonly CreateApprovalRuleTemplate: string;
```

- *Type:* string

[Write] codecommit:CreateApprovalRuleTemplate.

---

##### `CreateBranch`<sup>Required</sup> <a name="CreateBranch" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.CreateBranch"></a>

```typescript
public readonly CreateBranch: string;
```

- *Type:* string

[Write] codecommit:CreateBranch.

---

##### `CreateCommit`<sup>Required</sup> <a name="CreateCommit" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.CreateCommit"></a>

```typescript
public readonly CreateCommit: string;
```

- *Type:* string

[Write] codecommit:CreateCommit.

---

##### `CreatePullRequest`<sup>Required</sup> <a name="CreatePullRequest" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.CreatePullRequest"></a>

```typescript
public readonly CreatePullRequest: string;
```

- *Type:* string

[Write] codecommit:CreatePullRequest.

---

##### `CreatePullRequestApprovalRule`<sup>Required</sup> <a name="CreatePullRequestApprovalRule" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.CreatePullRequestApprovalRule"></a>

```typescript
public readonly CreatePullRequestApprovalRule: string;
```

- *Type:* string

[Write] codecommit:CreatePullRequestApprovalRule.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string;
```

- *Type:* string

[Write] codecommit:CreateRepository.

---

##### `CreateUnreferencedMergeCommit`<sup>Required</sup> <a name="CreateUnreferencedMergeCommit" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.CreateUnreferencedMergeCommit"></a>

```typescript
public readonly CreateUnreferencedMergeCommit: string;
```

- *Type:* string

[Write] codecommit:CreateUnreferencedMergeCommit.

---

##### `DeleteApprovalRuleTemplate`<sup>Required</sup> <a name="DeleteApprovalRuleTemplate" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.DeleteApprovalRuleTemplate"></a>

```typescript
public readonly DeleteApprovalRuleTemplate: string;
```

- *Type:* string

[Write] codecommit:DeleteApprovalRuleTemplate.

---

##### `DeleteBranch`<sup>Required</sup> <a name="DeleteBranch" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.DeleteBranch"></a>

```typescript
public readonly DeleteBranch: string;
```

- *Type:* string

[Write] codecommit:DeleteBranch.

---

##### `DeleteCommentContent`<sup>Required</sup> <a name="DeleteCommentContent" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.DeleteCommentContent"></a>

```typescript
public readonly DeleteCommentContent: string;
```

- *Type:* string

[Write] codecommit:DeleteCommentContent.

---

##### `DeleteFile`<sup>Required</sup> <a name="DeleteFile" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.DeleteFile"></a>

```typescript
public readonly DeleteFile: string;
```

- *Type:* string

[Write] codecommit:DeleteFile.

---

##### `DeletePullRequestApprovalRule`<sup>Required</sup> <a name="DeletePullRequestApprovalRule" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.DeletePullRequestApprovalRule"></a>

```typescript
public readonly DeletePullRequestApprovalRule: string;
```

- *Type:* string

[Write] codecommit:DeletePullRequestApprovalRule.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string;
```

- *Type:* string

[Write] codecommit:DeleteRepository.

---

##### `DescribeMergeConflicts`<sup>Required</sup> <a name="DescribeMergeConflicts" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.DescribeMergeConflicts"></a>

```typescript
public readonly DescribeMergeConflicts: string;
```

- *Type:* string

[Read] codecommit:DescribeMergeConflicts.

---

##### `DescribePullRequestEvents`<sup>Required</sup> <a name="DescribePullRequestEvents" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.DescribePullRequestEvents"></a>

```typescript
public readonly DescribePullRequestEvents: string;
```

- *Type:* string

[Read] codecommit:DescribePullRequestEvents.

---

##### `DisassociateApprovalRuleTemplateFromRepository`<sup>Required</sup> <a name="DisassociateApprovalRuleTemplateFromRepository" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.DisassociateApprovalRuleTemplateFromRepository"></a>

```typescript
public readonly DisassociateApprovalRuleTemplateFromRepository: string;
```

- *Type:* string

[Write] codecommit:DisassociateApprovalRuleTemplateFromRepository.

---

##### `EvaluatePullRequestApprovalRules`<sup>Required</sup> <a name="EvaluatePullRequestApprovalRules" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.EvaluatePullRequestApprovalRules"></a>

```typescript
public readonly EvaluatePullRequestApprovalRules: string;
```

- *Type:* string

[Read] codecommit:EvaluatePullRequestApprovalRules.

---

##### `GitPull`<sup>Required</sup> <a name="GitPull" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.GitPull"></a>

```typescript
public readonly GitPull: string;
```

- *Type:* string

[Read] codecommit:GitPull.

---

##### `GitPush`<sup>Required</sup> <a name="GitPush" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.GitPush"></a>

```typescript
public readonly GitPush: string;
```

- *Type:* string

[Write] codecommit:GitPush.

---

##### `ListApprovalRuleTemplates`<sup>Required</sup> <a name="ListApprovalRuleTemplates" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.ListApprovalRuleTemplates"></a>

```typescript
public readonly ListApprovalRuleTemplates: string;
```

- *Type:* string

[List] codecommit:ListApprovalRuleTemplates.

---

##### `ListAssociatedApprovalRuleTemplatesForRepository`<sup>Required</sup> <a name="ListAssociatedApprovalRuleTemplatesForRepository" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.ListAssociatedApprovalRuleTemplatesForRepository"></a>

```typescript
public readonly ListAssociatedApprovalRuleTemplatesForRepository: string;
```

- *Type:* string

[List] codecommit:ListAssociatedApprovalRuleTemplatesForRepository.

---

##### `ListBranches`<sup>Required</sup> <a name="ListBranches" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.ListBranches"></a>

```typescript
public readonly ListBranches: string;
```

- *Type:* string

[List] codecommit:ListBranches.

---

##### `ListFileCommitHistory`<sup>Required</sup> <a name="ListFileCommitHistory" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.ListFileCommitHistory"></a>

```typescript
public readonly ListFileCommitHistory: string;
```

- *Type:* string

[List] codecommit:ListFileCommitHistory.

---

##### `ListPullRequests`<sup>Required</sup> <a name="ListPullRequests" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.ListPullRequests"></a>

```typescript
public readonly ListPullRequests: string;
```

- *Type:* string

[List] codecommit:ListPullRequests.

---

##### `ListRepositories`<sup>Required</sup> <a name="ListRepositories" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.ListRepositories"></a>

```typescript
public readonly ListRepositories: string;
```

- *Type:* string

[List] codecommit:ListRepositories.

---

##### `ListRepositoriesForApprovalRuleTemplate`<sup>Required</sup> <a name="ListRepositoriesForApprovalRuleTemplate" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.ListRepositoriesForApprovalRuleTemplate"></a>

```typescript
public readonly ListRepositoriesForApprovalRuleTemplate: string;
```

- *Type:* string

[List] codecommit:ListRepositoriesForApprovalRuleTemplate.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] codecommit:ListTagsForResource.

---

##### `MergeBranchesByFastForward`<sup>Required</sup> <a name="MergeBranchesByFastForward" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.MergeBranchesByFastForward"></a>

```typescript
public readonly MergeBranchesByFastForward: string;
```

- *Type:* string

[Write] codecommit:MergeBranchesByFastForward.

---

##### `MergeBranchesBySquash`<sup>Required</sup> <a name="MergeBranchesBySquash" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.MergeBranchesBySquash"></a>

```typescript
public readonly MergeBranchesBySquash: string;
```

- *Type:* string

[Write] codecommit:MergeBranchesBySquash.

---

##### `MergeBranchesByThreeWay`<sup>Required</sup> <a name="MergeBranchesByThreeWay" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.MergeBranchesByThreeWay"></a>

```typescript
public readonly MergeBranchesByThreeWay: string;
```

- *Type:* string

[Write] codecommit:MergeBranchesByThreeWay.

---

##### `MergePullRequestByFastForward`<sup>Required</sup> <a name="MergePullRequestByFastForward" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.MergePullRequestByFastForward"></a>

```typescript
public readonly MergePullRequestByFastForward: string;
```

- *Type:* string

[Write] codecommit:MergePullRequestByFastForward.

---

##### `MergePullRequestBySquash`<sup>Required</sup> <a name="MergePullRequestBySquash" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.MergePullRequestBySquash"></a>

```typescript
public readonly MergePullRequestBySquash: string;
```

- *Type:* string

[Write] codecommit:MergePullRequestBySquash.

---

##### `MergePullRequestByThreeWay`<sup>Required</sup> <a name="MergePullRequestByThreeWay" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.MergePullRequestByThreeWay"></a>

```typescript
public readonly MergePullRequestByThreeWay: string;
```

- *Type:* string

[Write] codecommit:MergePullRequestByThreeWay.

---

##### `OverridePullRequestApprovalRules`<sup>Required</sup> <a name="OverridePullRequestApprovalRules" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.OverridePullRequestApprovalRules"></a>

```typescript
public readonly OverridePullRequestApprovalRules: string;
```

- *Type:* string

[Write] codecommit:OverridePullRequestApprovalRules.

---

##### `PostCommentForComparedCommit`<sup>Required</sup> <a name="PostCommentForComparedCommit" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.PostCommentForComparedCommit"></a>

```typescript
public readonly PostCommentForComparedCommit: string;
```

- *Type:* string

[Write] codecommit:PostCommentForComparedCommit.

---

##### `PostCommentForPullRequest`<sup>Required</sup> <a name="PostCommentForPullRequest" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.PostCommentForPullRequest"></a>

```typescript
public readonly PostCommentForPullRequest: string;
```

- *Type:* string

[Write] codecommit:PostCommentForPullRequest.

---

##### `PostCommentReply`<sup>Required</sup> <a name="PostCommentReply" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.PostCommentReply"></a>

```typescript
public readonly PostCommentReply: string;
```

- *Type:* string

[Write] codecommit:PostCommentReply.

---

##### `PutCommentReaction`<sup>Required</sup> <a name="PutCommentReaction" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.PutCommentReaction"></a>

```typescript
public readonly PutCommentReaction: string;
```

- *Type:* string

[Write] codecommit:PutCommentReaction.

---

##### `PutFile`<sup>Required</sup> <a name="PutFile" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.PutFile"></a>

```typescript
public readonly PutFile: string;
```

- *Type:* string

[Write] codecommit:PutFile.

---

##### `PutRepositoryTriggers`<sup>Required</sup> <a name="PutRepositoryTriggers" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.PutRepositoryTriggers"></a>

```typescript
public readonly PutRepositoryTriggers: string;
```

- *Type:* string

[Write] codecommit:PutRepositoryTriggers.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codecommit:TagResource.

---

##### `TestRepositoryTriggers`<sup>Required</sup> <a name="TestRepositoryTriggers" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.TestRepositoryTriggers"></a>

```typescript
public readonly TestRepositoryTriggers: string;
```

- *Type:* string

[Write] codecommit:TestRepositoryTriggers.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codecommit:UntagResource.

---

##### `UpdateApprovalRuleTemplateContent`<sup>Required</sup> <a name="UpdateApprovalRuleTemplateContent" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateApprovalRuleTemplateContent"></a>

```typescript
public readonly UpdateApprovalRuleTemplateContent: string;
```

- *Type:* string

[Write] codecommit:UpdateApprovalRuleTemplateContent.

---

##### `UpdateApprovalRuleTemplateDescription`<sup>Required</sup> <a name="UpdateApprovalRuleTemplateDescription" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateApprovalRuleTemplateDescription"></a>

```typescript
public readonly UpdateApprovalRuleTemplateDescription: string;
```

- *Type:* string

[Write] codecommit:UpdateApprovalRuleTemplateDescription.

---

##### `UpdateApprovalRuleTemplateName`<sup>Required</sup> <a name="UpdateApprovalRuleTemplateName" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateApprovalRuleTemplateName"></a>

```typescript
public readonly UpdateApprovalRuleTemplateName: string;
```

- *Type:* string

[Write] codecommit:UpdateApprovalRuleTemplateName.

---

##### `UpdateComment`<sup>Required</sup> <a name="UpdateComment" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateComment"></a>

```typescript
public readonly UpdateComment: string;
```

- *Type:* string

[Write] codecommit:UpdateComment.

---

##### `UpdateDefaultBranch`<sup>Required</sup> <a name="UpdateDefaultBranch" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateDefaultBranch"></a>

```typescript
public readonly UpdateDefaultBranch: string;
```

- *Type:* string

[Write] codecommit:UpdateDefaultBranch.

---

##### `UpdatePullRequestApprovalRuleContent`<sup>Required</sup> <a name="UpdatePullRequestApprovalRuleContent" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdatePullRequestApprovalRuleContent"></a>

```typescript
public readonly UpdatePullRequestApprovalRuleContent: string;
```

- *Type:* string

[Write] codecommit:UpdatePullRequestApprovalRuleContent.

---

##### `UpdatePullRequestApprovalState`<sup>Required</sup> <a name="UpdatePullRequestApprovalState" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdatePullRequestApprovalState"></a>

```typescript
public readonly UpdatePullRequestApprovalState: string;
```

- *Type:* string

[Write] codecommit:UpdatePullRequestApprovalState.

---

##### `UpdatePullRequestDescription`<sup>Required</sup> <a name="UpdatePullRequestDescription" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdatePullRequestDescription"></a>

```typescript
public readonly UpdatePullRequestDescription: string;
```

- *Type:* string

[Write] codecommit:UpdatePullRequestDescription.

---

##### `UpdatePullRequestStatus`<sup>Required</sup> <a name="UpdatePullRequestStatus" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdatePullRequestStatus"></a>

```typescript
public readonly UpdatePullRequestStatus: string;
```

- *Type:* string

[Write] codecommit:UpdatePullRequestStatus.

---

##### `UpdatePullRequestTitle`<sup>Required</sup> <a name="UpdatePullRequestTitle" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdatePullRequestTitle"></a>

```typescript
public readonly UpdatePullRequestTitle: string;
```

- *Type:* string

[Write] codecommit:UpdatePullRequestTitle.

---

##### `UpdateRepositoryDescription`<sup>Required</sup> <a name="UpdateRepositoryDescription" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateRepositoryDescription"></a>

```typescript
public readonly UpdateRepositoryDescription: string;
```

- *Type:* string

[Write] codecommit:UpdateRepositoryDescription.

---

##### `UpdateRepositoryEncryptionKey`<sup>Required</sup> <a name="UpdateRepositoryEncryptionKey" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateRepositoryEncryptionKey"></a>

```typescript
public readonly UpdateRepositoryEncryptionKey: string;
```

- *Type:* string

[Write] codecommit:UpdateRepositoryEncryptionKey.

---

##### `UpdateRepositoryName`<sup>Required</sup> <a name="UpdateRepositoryName" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UpdateRepositoryName"></a>

```typescript
public readonly UpdateRepositoryName: string;
```

- *Type:* string

[Write] codecommit:UpdateRepositoryName.

---

##### `UploadArchive`<sup>Required</sup> <a name="UploadArchive" id="@cdk_utils/iam.codecommit.CodeCommitActions.property.UploadArchive"></a>

```typescript
public readonly UploadArchive: string;
```

- *Type:* string

[Write] codecommit:UploadArchive.

---

### CodeCommitConditions <a name="CodeCommitConditions" id="@cdk_utils/iam.codecommit.CodeCommitConditions"></a>

Condition key constants and builders for codecommit.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codecommit.CodeCommitConditions.Initializer"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

new codecommit.CodeCommitConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.references">references</a></code> | Generates a condition block for `codecommit:References`. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `references` <a name="references" id="@cdk_utils/iam.codecommit.CodeCommitConditions.references"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

codecommit.CodeCommitConditions.references(value: string)
```

Generates a condition block for `codecommit:References`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codecommit.CodeCommitConditions.references.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codecommit.CodeCommitConditions.requestTag"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

codecommit.CodeCommitConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codecommit.CodeCommitConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codecommit.CodeCommitConditions.resourceTag"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

codecommit.CodeCommitConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codecommit.CodeCommitConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.tagKeys"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

codecommit.CodeCommitConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codecommit.CodeCommitConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.actionGetMergeCommitConditionKeys">actionGetMergeCommitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMergeCommit action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.CreateBranchConditionKeys">CreateBranchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBranch action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.CreateCommitConditionKeys">CreateCommitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCommit action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.CreateRepositoryConditionKeys">CreateRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRepository action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.CreateUnreferencedMergeCommitConditionKeys">CreateUnreferencedMergeCommitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUnreferencedMergeCommit action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.DeleteBranchConditionKeys">DeleteBranchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteBranch action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.DeleteFileConditionKeys">DeleteFileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteFile action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.GitPushConditionKeys">GitPushConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GitPush action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergeBranchesByFastForwardConditionKeys">MergeBranchesByFastForwardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the MergeBranchesByFastForward action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergeBranchesBySquashConditionKeys">MergeBranchesBySquashConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the MergeBranchesBySquash action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergeBranchesByThreeWayConditionKeys">MergeBranchesByThreeWayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the MergeBranchesByThreeWay action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergePullRequestByFastForwardConditionKeys">MergePullRequestByFastForwardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the MergePullRequestByFastForward action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergePullRequestBySquashConditionKeys">MergePullRequestBySquashConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the MergePullRequestBySquash action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergePullRequestByThreeWayConditionKeys">MergePullRequestByThreeWayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the MergePullRequestByThreeWay action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.PutFileConditionKeys">PutFileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutFile action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.REFERENCES">REFERENCES</a></code> | <code>string</code> | Condition key: codecommit:References (String). |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetMergeCommitConditionKeys`<sup>Required</sup> <a name="actionGetMergeCommitConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.actionGetMergeCommitConditionKeys"></a>

```typescript
public readonly actionGetMergeCommitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMergeCommit action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateBranchConditionKeys`<sup>Required</sup> <a name="CreateBranchConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.CreateBranchConditionKeys"></a>

```typescript
public readonly CreateBranchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBranch action.

---

##### `CreateCommitConditionKeys`<sup>Required</sup> <a name="CreateCommitConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.CreateCommitConditionKeys"></a>

```typescript
public readonly CreateCommitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCommit action.

---

##### `CreateRepositoryConditionKeys`<sup>Required</sup> <a name="CreateRepositoryConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.CreateRepositoryConditionKeys"></a>

```typescript
public readonly CreateRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRepository action.

---

##### `CreateUnreferencedMergeCommitConditionKeys`<sup>Required</sup> <a name="CreateUnreferencedMergeCommitConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.CreateUnreferencedMergeCommitConditionKeys"></a>

```typescript
public readonly CreateUnreferencedMergeCommitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUnreferencedMergeCommit action.

---

##### `DeleteBranchConditionKeys`<sup>Required</sup> <a name="DeleteBranchConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.DeleteBranchConditionKeys"></a>

```typescript
public readonly DeleteBranchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteBranch action.

---

##### `DeleteFileConditionKeys`<sup>Required</sup> <a name="DeleteFileConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.DeleteFileConditionKeys"></a>

```typescript
public readonly DeleteFileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteFile action.

---

##### `GitPushConditionKeys`<sup>Required</sup> <a name="GitPushConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.GitPushConditionKeys"></a>

```typescript
public readonly GitPushConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GitPush action.

---

##### `MergeBranchesByFastForwardConditionKeys`<sup>Required</sup> <a name="MergeBranchesByFastForwardConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergeBranchesByFastForwardConditionKeys"></a>

```typescript
public readonly MergeBranchesByFastForwardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the MergeBranchesByFastForward action.

---

##### `MergeBranchesBySquashConditionKeys`<sup>Required</sup> <a name="MergeBranchesBySquashConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergeBranchesBySquashConditionKeys"></a>

```typescript
public readonly MergeBranchesBySquashConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the MergeBranchesBySquash action.

---

##### `MergeBranchesByThreeWayConditionKeys`<sup>Required</sup> <a name="MergeBranchesByThreeWayConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergeBranchesByThreeWayConditionKeys"></a>

```typescript
public readonly MergeBranchesByThreeWayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the MergeBranchesByThreeWay action.

---

##### `MergePullRequestByFastForwardConditionKeys`<sup>Required</sup> <a name="MergePullRequestByFastForwardConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergePullRequestByFastForwardConditionKeys"></a>

```typescript
public readonly MergePullRequestByFastForwardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the MergePullRequestByFastForward action.

---

##### `MergePullRequestBySquashConditionKeys`<sup>Required</sup> <a name="MergePullRequestBySquashConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergePullRequestBySquashConditionKeys"></a>

```typescript
public readonly MergePullRequestBySquashConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the MergePullRequestBySquash action.

---

##### `MergePullRequestByThreeWayConditionKeys`<sup>Required</sup> <a name="MergePullRequestByThreeWayConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.MergePullRequestByThreeWayConditionKeys"></a>

```typescript
public readonly MergePullRequestByThreeWayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the MergePullRequestByThreeWay action.

---

##### `PutFileConditionKeys`<sup>Required</sup> <a name="PutFileConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.PutFileConditionKeys"></a>

```typescript
public readonly PutFileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutFile action.

---

##### `REFERENCES`<sup>Required</sup> <a name="REFERENCES" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.REFERENCES"></a>

```typescript
public readonly REFERENCES: string;
```

- *Type:* string

Condition key: codecommit:References (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codecommit.CodeCommitConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CodeCommitOperations <a name="CodeCommitOperations" id="@cdk_utils/iam.codecommit.CodeCommitOperations"></a>

API operation to required IAM actions mapping for codecommit.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codecommit.CodeCommitOperations.Initializer"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

new codecommit.CodeCommitOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.AssociateApprovalRuleTemplateWithRepository">AssociateApprovalRuleTemplateWithRepository</a></code> | <code>string[]</code> | IAM actions required for the AssociateApprovalRuleTemplateWithRepository API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.BatchAssociateApprovalRuleTemplateWithRepositories">BatchAssociateApprovalRuleTemplateWithRepositories</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateApprovalRuleTemplateWithRepositories API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.BatchDescribeMergeConflicts">BatchDescribeMergeConflicts</a></code> | <code>string[]</code> | IAM actions required for the BatchDescribeMergeConflicts API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.BatchDisassociateApprovalRuleTemplateFromRepositories">BatchDisassociateApprovalRuleTemplateFromRepositories</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateApprovalRuleTemplateFromRepositories API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.BatchGetCommits">BatchGetCommits</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCommits API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.BatchGetRepositories">BatchGetRepositories</a></code> | <code>string[]</code> | IAM actions required for the BatchGetRepositories API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreateApprovalRuleTemplate">CreateApprovalRuleTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateApprovalRuleTemplate API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreateBranch">CreateBranch</a></code> | <code>string[]</code> | IAM actions required for the CreateBranch API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreateCommit">CreateCommit</a></code> | <code>string[]</code> | IAM actions required for the CreateCommit API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreatePullRequest">CreatePullRequest</a></code> | <code>string[]</code> | IAM actions required for the CreatePullRequest API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreatePullRequestApprovalRule">CreatePullRequestApprovalRule</a></code> | <code>string[]</code> | IAM actions required for the CreatePullRequestApprovalRule API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreateRepository">CreateRepository</a></code> | <code>string[]</code> | IAM actions required for the CreateRepository API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreateUnreferencedMergeCommit">CreateUnreferencedMergeCommit</a></code> | <code>string[]</code> | IAM actions required for the CreateUnreferencedMergeCommit API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeleteApprovalRuleTemplate">DeleteApprovalRuleTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteApprovalRuleTemplate API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeleteBranch">DeleteBranch</a></code> | <code>string[]</code> | IAM actions required for the DeleteBranch API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeleteCommentContent">DeleteCommentContent</a></code> | <code>string[]</code> | IAM actions required for the DeleteCommentContent API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeleteFile">DeleteFile</a></code> | <code>string[]</code> | IAM actions required for the DeleteFile API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeletePullRequestApprovalRule">DeletePullRequestApprovalRule</a></code> | <code>string[]</code> | IAM actions required for the DeletePullRequestApprovalRule API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeleteRepository">DeleteRepository</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepository API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.DescribeMergeConflicts">DescribeMergeConflicts</a></code> | <code>string[]</code> | IAM actions required for the DescribeMergeConflicts API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.DescribePullRequestEvents">DescribePullRequestEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribePullRequestEvents API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.DisassociateApprovalRuleTemplateFromRepository">DisassociateApprovalRuleTemplateFromRepository</a></code> | <code>string[]</code> | IAM actions required for the DisassociateApprovalRuleTemplateFromRepository API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.EvaluatePullRequestApprovalRules">EvaluatePullRequestApprovalRules</a></code> | <code>string[]</code> | IAM actions required for the EvaluatePullRequestApprovalRules API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListApprovalRuleTemplates">ListApprovalRuleTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListApprovalRuleTemplates API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListAssociatedApprovalRuleTemplatesForRepository">ListAssociatedApprovalRuleTemplatesForRepository</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedApprovalRuleTemplatesForRepository API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListBranches">ListBranches</a></code> | <code>string[]</code> | IAM actions required for the ListBranches API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListFileCommitHistory">ListFileCommitHistory</a></code> | <code>string[]</code> | IAM actions required for the ListFileCommitHistory API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListPullRequests">ListPullRequests</a></code> | <code>string[]</code> | IAM actions required for the ListPullRequests API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListRepositories">ListRepositories</a></code> | <code>string[]</code> | IAM actions required for the ListRepositories API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListRepositoriesForApprovalRuleTemplate">ListRepositoriesForApprovalRuleTemplate</a></code> | <code>string[]</code> | IAM actions required for the ListRepositoriesForApprovalRuleTemplate API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergeBranchesByFastForward">MergeBranchesByFastForward</a></code> | <code>string[]</code> | IAM actions required for the MergeBranchesByFastForward API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergeBranchesBySquash">MergeBranchesBySquash</a></code> | <code>string[]</code> | IAM actions required for the MergeBranchesBySquash API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergeBranchesByThreeWay">MergeBranchesByThreeWay</a></code> | <code>string[]</code> | IAM actions required for the MergeBranchesByThreeWay API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergePullRequestByFastForward">MergePullRequestByFastForward</a></code> | <code>string[]</code> | IAM actions required for the MergePullRequestByFastForward API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergePullRequestBySquash">MergePullRequestBySquash</a></code> | <code>string[]</code> | IAM actions required for the MergePullRequestBySquash API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergePullRequestByThreeWay">MergePullRequestByThreeWay</a></code> | <code>string[]</code> | IAM actions required for the MergePullRequestByThreeWay API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetApprovalRuleTemplate">opGetApprovalRuleTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetApprovalRuleTemplate API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetBlob">opGetBlob</a></code> | <code>string[]</code> | IAM actions required for the GetBlob API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetBranch">opGetBranch</a></code> | <code>string[]</code> | IAM actions required for the GetBranch API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetComment">opGetComment</a></code> | <code>string[]</code> | IAM actions required for the GetComment API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetCommentReactions">opGetCommentReactions</a></code> | <code>string[]</code> | IAM actions required for the GetCommentReactions API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetCommentsForComparedCommit">opGetCommentsForComparedCommit</a></code> | <code>string[]</code> | IAM actions required for the GetCommentsForComparedCommit API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetCommentsForPullRequest">opGetCommentsForPullRequest</a></code> | <code>string[]</code> | IAM actions required for the GetCommentsForPullRequest API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetCommit">opGetCommit</a></code> | <code>string[]</code> | IAM actions required for the GetCommit API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetDifferences">opGetDifferences</a></code> | <code>string[]</code> | IAM actions required for the GetDifferences API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetFile">opGetFile</a></code> | <code>string[]</code> | IAM actions required for the GetFile API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetFolder">opGetFolder</a></code> | <code>string[]</code> | IAM actions required for the GetFolder API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetMergeCommit">opGetMergeCommit</a></code> | <code>string[]</code> | IAM actions required for the GetMergeCommit API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetMergeConflicts">opGetMergeConflicts</a></code> | <code>string[]</code> | IAM actions required for the GetMergeConflicts API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetMergeOptions">opGetMergeOptions</a></code> | <code>string[]</code> | IAM actions required for the GetMergeOptions API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetPullRequest">opGetPullRequest</a></code> | <code>string[]</code> | IAM actions required for the GetPullRequest API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetPullRequestApprovalStates">opGetPullRequestApprovalStates</a></code> | <code>string[]</code> | IAM actions required for the GetPullRequestApprovalStates API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetPullRequestOverrideState">opGetPullRequestOverrideState</a></code> | <code>string[]</code> | IAM actions required for the GetPullRequestOverrideState API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetRepository">opGetRepository</a></code> | <code>string[]</code> | IAM actions required for the GetRepository API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetRepositoryTriggers">opGetRepositoryTriggers</a></code> | <code>string[]</code> | IAM actions required for the GetRepositoryTriggers API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.OverridePullRequestApprovalRules">OverridePullRequestApprovalRules</a></code> | <code>string[]</code> | IAM actions required for the OverridePullRequestApprovalRules API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.PostCommentForComparedCommit">PostCommentForComparedCommit</a></code> | <code>string[]</code> | IAM actions required for the PostCommentForComparedCommit API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.PostCommentForPullRequest">PostCommentForPullRequest</a></code> | <code>string[]</code> | IAM actions required for the PostCommentForPullRequest API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.PostCommentReply">PostCommentReply</a></code> | <code>string[]</code> | IAM actions required for the PostCommentReply API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.PutCommentReaction">PutCommentReaction</a></code> | <code>string[]</code> | IAM actions required for the PutCommentReaction API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.PutFile">PutFile</a></code> | <code>string[]</code> | IAM actions required for the PutFile API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.PutRepositoryTriggers">PutRepositoryTriggers</a></code> | <code>string[]</code> | IAM actions required for the PutRepositoryTriggers API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.TestRepositoryTriggers">TestRepositoryTriggers</a></code> | <code>string[]</code> | IAM actions required for the TestRepositoryTriggers API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateApprovalRuleTemplateContent">UpdateApprovalRuleTemplateContent</a></code> | <code>string[]</code> | IAM actions required for the UpdateApprovalRuleTemplateContent API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateApprovalRuleTemplateDescription">UpdateApprovalRuleTemplateDescription</a></code> | <code>string[]</code> | IAM actions required for the UpdateApprovalRuleTemplateDescription API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateApprovalRuleTemplateName">UpdateApprovalRuleTemplateName</a></code> | <code>string[]</code> | IAM actions required for the UpdateApprovalRuleTemplateName API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateComment">UpdateComment</a></code> | <code>string[]</code> | IAM actions required for the UpdateComment API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateDefaultBranch">UpdateDefaultBranch</a></code> | <code>string[]</code> | IAM actions required for the UpdateDefaultBranch API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdatePullRequestApprovalRuleContent">UpdatePullRequestApprovalRuleContent</a></code> | <code>string[]</code> | IAM actions required for the UpdatePullRequestApprovalRuleContent API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdatePullRequestApprovalState">UpdatePullRequestApprovalState</a></code> | <code>string[]</code> | IAM actions required for the UpdatePullRequestApprovalState API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdatePullRequestDescription">UpdatePullRequestDescription</a></code> | <code>string[]</code> | IAM actions required for the UpdatePullRequestDescription API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdatePullRequestStatus">UpdatePullRequestStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdatePullRequestStatus API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdatePullRequestTitle">UpdatePullRequestTitle</a></code> | <code>string[]</code> | IAM actions required for the UpdatePullRequestTitle API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateRepositoryDescription">UpdateRepositoryDescription</a></code> | <code>string[]</code> | IAM actions required for the UpdateRepositoryDescription API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateRepositoryEncryptionKey">UpdateRepositoryEncryptionKey</a></code> | <code>string[]</code> | IAM actions required for the UpdateRepositoryEncryptionKey API call. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateRepositoryName">UpdateRepositoryName</a></code> | <code>string[]</code> | IAM actions required for the UpdateRepositoryName API call. |

---

##### `AssociateApprovalRuleTemplateWithRepository`<sup>Required</sup> <a name="AssociateApprovalRuleTemplateWithRepository" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.AssociateApprovalRuleTemplateWithRepository"></a>

```typescript
public readonly AssociateApprovalRuleTemplateWithRepository: string[];
```

- *Type:* string[]

IAM actions required for the AssociateApprovalRuleTemplateWithRepository API call.

---

##### `BatchAssociateApprovalRuleTemplateWithRepositories`<sup>Required</sup> <a name="BatchAssociateApprovalRuleTemplateWithRepositories" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.BatchAssociateApprovalRuleTemplateWithRepositories"></a>

```typescript
public readonly BatchAssociateApprovalRuleTemplateWithRepositories: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateApprovalRuleTemplateWithRepositories API call.

---

##### `BatchDescribeMergeConflicts`<sup>Required</sup> <a name="BatchDescribeMergeConflicts" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.BatchDescribeMergeConflicts"></a>

```typescript
public readonly BatchDescribeMergeConflicts: string[];
```

- *Type:* string[]

IAM actions required for the BatchDescribeMergeConflicts API call.

---

##### `BatchDisassociateApprovalRuleTemplateFromRepositories`<sup>Required</sup> <a name="BatchDisassociateApprovalRuleTemplateFromRepositories" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.BatchDisassociateApprovalRuleTemplateFromRepositories"></a>

```typescript
public readonly BatchDisassociateApprovalRuleTemplateFromRepositories: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateApprovalRuleTemplateFromRepositories API call.

---

##### `BatchGetCommits`<sup>Required</sup> <a name="BatchGetCommits" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.BatchGetCommits"></a>

```typescript
public readonly BatchGetCommits: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCommits API call.

---

##### `BatchGetRepositories`<sup>Required</sup> <a name="BatchGetRepositories" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.BatchGetRepositories"></a>

```typescript
public readonly BatchGetRepositories: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetRepositories API call.

---

##### `CreateApprovalRuleTemplate`<sup>Required</sup> <a name="CreateApprovalRuleTemplate" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreateApprovalRuleTemplate"></a>

```typescript
public readonly CreateApprovalRuleTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateApprovalRuleTemplate API call.

---

##### `CreateBranch`<sup>Required</sup> <a name="CreateBranch" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreateBranch"></a>

```typescript
public readonly CreateBranch: string[];
```

- *Type:* string[]

IAM actions required for the CreateBranch API call.

---

##### `CreateCommit`<sup>Required</sup> <a name="CreateCommit" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreateCommit"></a>

```typescript
public readonly CreateCommit: string[];
```

- *Type:* string[]

IAM actions required for the CreateCommit API call.

---

##### `CreatePullRequest`<sup>Required</sup> <a name="CreatePullRequest" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreatePullRequest"></a>

```typescript
public readonly CreatePullRequest: string[];
```

- *Type:* string[]

IAM actions required for the CreatePullRequest API call.

---

##### `CreatePullRequestApprovalRule`<sup>Required</sup> <a name="CreatePullRequestApprovalRule" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreatePullRequestApprovalRule"></a>

```typescript
public readonly CreatePullRequestApprovalRule: string[];
```

- *Type:* string[]

IAM actions required for the CreatePullRequestApprovalRule API call.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string[];
```

- *Type:* string[]

IAM actions required for the CreateRepository API call.

---

##### `CreateUnreferencedMergeCommit`<sup>Required</sup> <a name="CreateUnreferencedMergeCommit" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.CreateUnreferencedMergeCommit"></a>

```typescript
public readonly CreateUnreferencedMergeCommit: string[];
```

- *Type:* string[]

IAM actions required for the CreateUnreferencedMergeCommit API call.

---

##### `DeleteApprovalRuleTemplate`<sup>Required</sup> <a name="DeleteApprovalRuleTemplate" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeleteApprovalRuleTemplate"></a>

```typescript
public readonly DeleteApprovalRuleTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApprovalRuleTemplate API call.

---

##### `DeleteBranch`<sup>Required</sup> <a name="DeleteBranch" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeleteBranch"></a>

```typescript
public readonly DeleteBranch: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBranch API call.

---

##### `DeleteCommentContent`<sup>Required</sup> <a name="DeleteCommentContent" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeleteCommentContent"></a>

```typescript
public readonly DeleteCommentContent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCommentContent API call.

---

##### `DeleteFile`<sup>Required</sup> <a name="DeleteFile" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeleteFile"></a>

```typescript
public readonly DeleteFile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFile API call.

---

##### `DeletePullRequestApprovalRule`<sup>Required</sup> <a name="DeletePullRequestApprovalRule" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeletePullRequestApprovalRule"></a>

```typescript
public readonly DeletePullRequestApprovalRule: string[];
```

- *Type:* string[]

IAM actions required for the DeletePullRequestApprovalRule API call.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepository API call.

---

##### `DescribeMergeConflicts`<sup>Required</sup> <a name="DescribeMergeConflicts" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.DescribeMergeConflicts"></a>

```typescript
public readonly DescribeMergeConflicts: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMergeConflicts API call.

---

##### `DescribePullRequestEvents`<sup>Required</sup> <a name="DescribePullRequestEvents" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.DescribePullRequestEvents"></a>

```typescript
public readonly DescribePullRequestEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribePullRequestEvents API call.

---

##### `DisassociateApprovalRuleTemplateFromRepository`<sup>Required</sup> <a name="DisassociateApprovalRuleTemplateFromRepository" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.DisassociateApprovalRuleTemplateFromRepository"></a>

```typescript
public readonly DisassociateApprovalRuleTemplateFromRepository: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateApprovalRuleTemplateFromRepository API call.

---

##### `EvaluatePullRequestApprovalRules`<sup>Required</sup> <a name="EvaluatePullRequestApprovalRules" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.EvaluatePullRequestApprovalRules"></a>

```typescript
public readonly EvaluatePullRequestApprovalRules: string[];
```

- *Type:* string[]

IAM actions required for the EvaluatePullRequestApprovalRules API call.

---

##### `ListApprovalRuleTemplates`<sup>Required</sup> <a name="ListApprovalRuleTemplates" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListApprovalRuleTemplates"></a>

```typescript
public readonly ListApprovalRuleTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListApprovalRuleTemplates API call.

---

##### `ListAssociatedApprovalRuleTemplatesForRepository`<sup>Required</sup> <a name="ListAssociatedApprovalRuleTemplatesForRepository" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListAssociatedApprovalRuleTemplatesForRepository"></a>

```typescript
public readonly ListAssociatedApprovalRuleTemplatesForRepository: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedApprovalRuleTemplatesForRepository API call.

---

##### `ListBranches`<sup>Required</sup> <a name="ListBranches" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListBranches"></a>

```typescript
public readonly ListBranches: string[];
```

- *Type:* string[]

IAM actions required for the ListBranches API call.

---

##### `ListFileCommitHistory`<sup>Required</sup> <a name="ListFileCommitHistory" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListFileCommitHistory"></a>

```typescript
public readonly ListFileCommitHistory: string[];
```

- *Type:* string[]

IAM actions required for the ListFileCommitHistory API call.

---

##### `ListPullRequests`<sup>Required</sup> <a name="ListPullRequests" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListPullRequests"></a>

```typescript
public readonly ListPullRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListPullRequests API call.

---

##### `ListRepositories`<sup>Required</sup> <a name="ListRepositories" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListRepositories"></a>

```typescript
public readonly ListRepositories: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositories API call.

---

##### `ListRepositoriesForApprovalRuleTemplate`<sup>Required</sup> <a name="ListRepositoriesForApprovalRuleTemplate" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListRepositoriesForApprovalRuleTemplate"></a>

```typescript
public readonly ListRepositoriesForApprovalRuleTemplate: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositoriesForApprovalRuleTemplate API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `MergeBranchesByFastForward`<sup>Required</sup> <a name="MergeBranchesByFastForward" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergeBranchesByFastForward"></a>

```typescript
public readonly MergeBranchesByFastForward: string[];
```

- *Type:* string[]

IAM actions required for the MergeBranchesByFastForward API call.

---

##### `MergeBranchesBySquash`<sup>Required</sup> <a name="MergeBranchesBySquash" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergeBranchesBySquash"></a>

```typescript
public readonly MergeBranchesBySquash: string[];
```

- *Type:* string[]

IAM actions required for the MergeBranchesBySquash API call.

---

##### `MergeBranchesByThreeWay`<sup>Required</sup> <a name="MergeBranchesByThreeWay" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergeBranchesByThreeWay"></a>

```typescript
public readonly MergeBranchesByThreeWay: string[];
```

- *Type:* string[]

IAM actions required for the MergeBranchesByThreeWay API call.

---

##### `MergePullRequestByFastForward`<sup>Required</sup> <a name="MergePullRequestByFastForward" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergePullRequestByFastForward"></a>

```typescript
public readonly MergePullRequestByFastForward: string[];
```

- *Type:* string[]

IAM actions required for the MergePullRequestByFastForward API call.

---

##### `MergePullRequestBySquash`<sup>Required</sup> <a name="MergePullRequestBySquash" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergePullRequestBySquash"></a>

```typescript
public readonly MergePullRequestBySquash: string[];
```

- *Type:* string[]

IAM actions required for the MergePullRequestBySquash API call.

---

##### `MergePullRequestByThreeWay`<sup>Required</sup> <a name="MergePullRequestByThreeWay" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.MergePullRequestByThreeWay"></a>

```typescript
public readonly MergePullRequestByThreeWay: string[];
```

- *Type:* string[]

IAM actions required for the MergePullRequestByThreeWay API call.

---

##### `opGetApprovalRuleTemplate`<sup>Required</sup> <a name="opGetApprovalRuleTemplate" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetApprovalRuleTemplate"></a>

```typescript
public readonly opGetApprovalRuleTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetApprovalRuleTemplate API call.

---

##### `opGetBlob`<sup>Required</sup> <a name="opGetBlob" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetBlob"></a>

```typescript
public readonly opGetBlob: string[];
```

- *Type:* string[]

IAM actions required for the GetBlob API call.

---

##### `opGetBranch`<sup>Required</sup> <a name="opGetBranch" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetBranch"></a>

```typescript
public readonly opGetBranch: string[];
```

- *Type:* string[]

IAM actions required for the GetBranch API call.

---

##### `opGetComment`<sup>Required</sup> <a name="opGetComment" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetComment"></a>

```typescript
public readonly opGetComment: string[];
```

- *Type:* string[]

IAM actions required for the GetComment API call.

---

##### `opGetCommentReactions`<sup>Required</sup> <a name="opGetCommentReactions" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetCommentReactions"></a>

```typescript
public readonly opGetCommentReactions: string[];
```

- *Type:* string[]

IAM actions required for the GetCommentReactions API call.

---

##### `opGetCommentsForComparedCommit`<sup>Required</sup> <a name="opGetCommentsForComparedCommit" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetCommentsForComparedCommit"></a>

```typescript
public readonly opGetCommentsForComparedCommit: string[];
```

- *Type:* string[]

IAM actions required for the GetCommentsForComparedCommit API call.

---

##### `opGetCommentsForPullRequest`<sup>Required</sup> <a name="opGetCommentsForPullRequest" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetCommentsForPullRequest"></a>

```typescript
public readonly opGetCommentsForPullRequest: string[];
```

- *Type:* string[]

IAM actions required for the GetCommentsForPullRequest API call.

---

##### `opGetCommit`<sup>Required</sup> <a name="opGetCommit" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetCommit"></a>

```typescript
public readonly opGetCommit: string[];
```

- *Type:* string[]

IAM actions required for the GetCommit API call.

---

##### `opGetDifferences`<sup>Required</sup> <a name="opGetDifferences" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetDifferences"></a>

```typescript
public readonly opGetDifferences: string[];
```

- *Type:* string[]

IAM actions required for the GetDifferences API call.

---

##### `opGetFile`<sup>Required</sup> <a name="opGetFile" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetFile"></a>

```typescript
public readonly opGetFile: string[];
```

- *Type:* string[]

IAM actions required for the GetFile API call.

---

##### `opGetFolder`<sup>Required</sup> <a name="opGetFolder" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetFolder"></a>

```typescript
public readonly opGetFolder: string[];
```

- *Type:* string[]

IAM actions required for the GetFolder API call.

---

##### `opGetMergeCommit`<sup>Required</sup> <a name="opGetMergeCommit" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetMergeCommit"></a>

```typescript
public readonly opGetMergeCommit: string[];
```

- *Type:* string[]

IAM actions required for the GetMergeCommit API call.

---

##### `opGetMergeConflicts`<sup>Required</sup> <a name="opGetMergeConflicts" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetMergeConflicts"></a>

```typescript
public readonly opGetMergeConflicts: string[];
```

- *Type:* string[]

IAM actions required for the GetMergeConflicts API call.

---

##### `opGetMergeOptions`<sup>Required</sup> <a name="opGetMergeOptions" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetMergeOptions"></a>

```typescript
public readonly opGetMergeOptions: string[];
```

- *Type:* string[]

IAM actions required for the GetMergeOptions API call.

---

##### `opGetPullRequest`<sup>Required</sup> <a name="opGetPullRequest" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetPullRequest"></a>

```typescript
public readonly opGetPullRequest: string[];
```

- *Type:* string[]

IAM actions required for the GetPullRequest API call.

---

##### `opGetPullRequestApprovalStates`<sup>Required</sup> <a name="opGetPullRequestApprovalStates" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetPullRequestApprovalStates"></a>

```typescript
public readonly opGetPullRequestApprovalStates: string[];
```

- *Type:* string[]

IAM actions required for the GetPullRequestApprovalStates API call.

---

##### `opGetPullRequestOverrideState`<sup>Required</sup> <a name="opGetPullRequestOverrideState" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetPullRequestOverrideState"></a>

```typescript
public readonly opGetPullRequestOverrideState: string[];
```

- *Type:* string[]

IAM actions required for the GetPullRequestOverrideState API call.

---

##### `opGetRepository`<sup>Required</sup> <a name="opGetRepository" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetRepository"></a>

```typescript
public readonly opGetRepository: string[];
```

- *Type:* string[]

IAM actions required for the GetRepository API call.

---

##### `opGetRepositoryTriggers`<sup>Required</sup> <a name="opGetRepositoryTriggers" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.opGetRepositoryTriggers"></a>

```typescript
public readonly opGetRepositoryTriggers: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositoryTriggers API call.

---

##### `OverridePullRequestApprovalRules`<sup>Required</sup> <a name="OverridePullRequestApprovalRules" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.OverridePullRequestApprovalRules"></a>

```typescript
public readonly OverridePullRequestApprovalRules: string[];
```

- *Type:* string[]

IAM actions required for the OverridePullRequestApprovalRules API call.

---

##### `PostCommentForComparedCommit`<sup>Required</sup> <a name="PostCommentForComparedCommit" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.PostCommentForComparedCommit"></a>

```typescript
public readonly PostCommentForComparedCommit: string[];
```

- *Type:* string[]

IAM actions required for the PostCommentForComparedCommit API call.

---

##### `PostCommentForPullRequest`<sup>Required</sup> <a name="PostCommentForPullRequest" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.PostCommentForPullRequest"></a>

```typescript
public readonly PostCommentForPullRequest: string[];
```

- *Type:* string[]

IAM actions required for the PostCommentForPullRequest API call.

---

##### `PostCommentReply`<sup>Required</sup> <a name="PostCommentReply" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.PostCommentReply"></a>

```typescript
public readonly PostCommentReply: string[];
```

- *Type:* string[]

IAM actions required for the PostCommentReply API call.

---

##### `PutCommentReaction`<sup>Required</sup> <a name="PutCommentReaction" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.PutCommentReaction"></a>

```typescript
public readonly PutCommentReaction: string[];
```

- *Type:* string[]

IAM actions required for the PutCommentReaction API call.

---

##### `PutFile`<sup>Required</sup> <a name="PutFile" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.PutFile"></a>

```typescript
public readonly PutFile: string[];
```

- *Type:* string[]

IAM actions required for the PutFile API call.

---

##### `PutRepositoryTriggers`<sup>Required</sup> <a name="PutRepositoryTriggers" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.PutRepositoryTriggers"></a>

```typescript
public readonly PutRepositoryTriggers: string[];
```

- *Type:* string[]

IAM actions required for the PutRepositoryTriggers API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestRepositoryTriggers`<sup>Required</sup> <a name="TestRepositoryTriggers" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.TestRepositoryTriggers"></a>

```typescript
public readonly TestRepositoryTriggers: string[];
```

- *Type:* string[]

IAM actions required for the TestRepositoryTriggers API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApprovalRuleTemplateContent`<sup>Required</sup> <a name="UpdateApprovalRuleTemplateContent" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateApprovalRuleTemplateContent"></a>

```typescript
public readonly UpdateApprovalRuleTemplateContent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApprovalRuleTemplateContent API call.

---

##### `UpdateApprovalRuleTemplateDescription`<sup>Required</sup> <a name="UpdateApprovalRuleTemplateDescription" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateApprovalRuleTemplateDescription"></a>

```typescript
public readonly UpdateApprovalRuleTemplateDescription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApprovalRuleTemplateDescription API call.

---

##### `UpdateApprovalRuleTemplateName`<sup>Required</sup> <a name="UpdateApprovalRuleTemplateName" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateApprovalRuleTemplateName"></a>

```typescript
public readonly UpdateApprovalRuleTemplateName: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApprovalRuleTemplateName API call.

---

##### `UpdateComment`<sup>Required</sup> <a name="UpdateComment" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateComment"></a>

```typescript
public readonly UpdateComment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateComment API call.

---

##### `UpdateDefaultBranch`<sup>Required</sup> <a name="UpdateDefaultBranch" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateDefaultBranch"></a>

```typescript
public readonly UpdateDefaultBranch: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDefaultBranch API call.

---

##### `UpdatePullRequestApprovalRuleContent`<sup>Required</sup> <a name="UpdatePullRequestApprovalRuleContent" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdatePullRequestApprovalRuleContent"></a>

```typescript
public readonly UpdatePullRequestApprovalRuleContent: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePullRequestApprovalRuleContent API call.

---

##### `UpdatePullRequestApprovalState`<sup>Required</sup> <a name="UpdatePullRequestApprovalState" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdatePullRequestApprovalState"></a>

```typescript
public readonly UpdatePullRequestApprovalState: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePullRequestApprovalState API call.

---

##### `UpdatePullRequestDescription`<sup>Required</sup> <a name="UpdatePullRequestDescription" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdatePullRequestDescription"></a>

```typescript
public readonly UpdatePullRequestDescription: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePullRequestDescription API call.

---

##### `UpdatePullRequestStatus`<sup>Required</sup> <a name="UpdatePullRequestStatus" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdatePullRequestStatus"></a>

```typescript
public readonly UpdatePullRequestStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePullRequestStatus API call.

---

##### `UpdatePullRequestTitle`<sup>Required</sup> <a name="UpdatePullRequestTitle" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdatePullRequestTitle"></a>

```typescript
public readonly UpdatePullRequestTitle: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePullRequestTitle API call.

---

##### `UpdateRepositoryDescription`<sup>Required</sup> <a name="UpdateRepositoryDescription" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateRepositoryDescription"></a>

```typescript
public readonly UpdateRepositoryDescription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRepositoryDescription API call.

---

##### `UpdateRepositoryEncryptionKey`<sup>Required</sup> <a name="UpdateRepositoryEncryptionKey" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateRepositoryEncryptionKey"></a>

```typescript
public readonly UpdateRepositoryEncryptionKey: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRepositoryEncryptionKey API call.

---

##### `UpdateRepositoryName`<sup>Required</sup> <a name="UpdateRepositoryName" id="@cdk_utils/iam.codecommit.CodeCommitOperations.property.UpdateRepositoryName"></a>

```typescript
public readonly UpdateRepositoryName: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRepositoryName API call.

---

### CodeCommitResources <a name="CodeCommitResources" id="@cdk_utils/iam.codecommit.CodeCommitResources"></a>

ARN builders, validators, and parsers for codecommit resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codecommit.CodeCommitResources.Initializer"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

new codecommit.CodeCommitResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitResources.isValidRepositoryArn">isValidRepositoryArn</a></code> | Validates whether a string is a valid ARN for the repository resource. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitResources.parseRepositoryArn">parseRepositoryArn</a></code> | Parses a repository ARN into its components. |
| <code><a href="#@cdk_utils/iam.codecommit.CodeCommitResources.repository">repository</a></code> | Builds an ARN for the repository resource. |

---

##### `isValidRepositoryArn` <a name="isValidRepositoryArn" id="@cdk_utils/iam.codecommit.CodeCommitResources.isValidRepositoryArn"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

codecommit.CodeCommitResources.isValidRepositoryArn(arn: string)
```

Validates whether a string is a valid ARN for the repository resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codecommit.CodeCommitResources.isValidRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRepositoryArn` <a name="parseRepositoryArn" id="@cdk_utils/iam.codecommit.CodeCommitResources.parseRepositoryArn"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

codecommit.CodeCommitResources.parseRepositoryArn(arn: string)
```

Parses a repository ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codecommit.CodeCommitResources.parseRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `repository` <a name="repository" id="@cdk_utils/iam.codecommit.CodeCommitResources.repository"></a>

```typescript
import { codecommit } from '@cdk_utils/iam'

codecommit.CodeCommitResources.repository(props: CodeCommitRepositoryArnProps)
```

Builds an ARN for the repository resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codecommit.CodeCommitResources.repository.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codecommit.CodeCommitRepositoryArnProps">CodeCommitRepositoryArnProps</a>

---




