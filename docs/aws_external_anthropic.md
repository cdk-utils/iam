# `aws_external_anthropic` Submodule <a name="`aws_external_anthropic` Submodule" id="@cdk_utils/iam.aws_external_anthropic"></a>


## Structs <a name="Structs" id="Structs"></a>

### AWSExternalAnthropicWorkspaceArnComponents <a name="AWSExternalAnthropicWorkspaceArnComponents" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents"></a>

Parsed components of a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents.Initializer"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

const aWSExternalAnthropicWorkspaceArnComponents: aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AWSExternalAnthropicWorkspaceArnProps <a name="AWSExternalAnthropicWorkspaceArnProps" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps"></a>

Properties for building a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps.Initializer"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

const aWSExternalAnthropicWorkspaceArnProps: aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AWSExternalAnthropicActions <a name="AWSExternalAnthropicActions" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions"></a>

IAM action constants for the aws-external-anthropic service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.Initializer"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

new aws_external_anthropic.AWSExternalAnthropicActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetAccountStatus">actionGetAccountStatus</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetAccountStatus. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetAgent">actionGetAgent</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetAgent. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetBatchInference">actionGetBatchInference</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetBatchInference. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetFile">actionGetFile</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetFile. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetMemoryStore">actionGetMemoryStore</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetMemoryStore. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetModel">actionGetModel</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetModel. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetSession. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetSkill">actionGetSkill</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetSkill. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetUserProfile">actionGetUserProfile</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetUserProfile. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetVault">actionGetVault</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetVault. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetWebhook">actionGetWebhook</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetWebhook. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetWorkspace">actionGetWorkspace</a></code> | <code>string</code> | [Read] aws-external-anthropic:GetWorkspace. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveAgent">ArchiveAgent</a></code> | <code>string</code> | [Write] aws-external-anthropic:ArchiveAgent. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveEnvironment">ArchiveEnvironment</a></code> | <code>string</code> | [Write] aws-external-anthropic:ArchiveEnvironment. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveMemoryStore">ArchiveMemoryStore</a></code> | <code>string</code> | [Write] aws-external-anthropic:ArchiveMemoryStore. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveSession">ArchiveSession</a></code> | <code>string</code> | [Write] aws-external-anthropic:ArchiveSession. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveVault">ArchiveVault</a></code> | <code>string</code> | [Write] aws-external-anthropic:ArchiveVault. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveWorkspace">ArchiveWorkspace</a></code> | <code>string</code> | [Write] aws-external-anthropic:ArchiveWorkspace. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AssumeConsole">AssumeConsole</a></code> | <code>string</code> | [Write] aws-external-anthropic:AssumeConsole. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CallWithBearerToken">CallWithBearerToken</a></code> | <code>string</code> | [List] aws-external-anthropic:CallWithBearerToken. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CancelBatchInference">CancelBatchInference</a></code> | <code>string</code> | [Write] aws-external-anthropic:CancelBatchInference. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CountTokens">CountTokens</a></code> | <code>string</code> | [Write] aws-external-anthropic:CountTokens. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateAgent">CreateAgent</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateAgent. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateBatchInference">CreateBatchInference</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateBatchInference. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateFile">CreateFile</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateFile. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateInference">CreateInference</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateInference. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateMemoryStore">CreateMemoryStore</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateMemoryStore. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateSession">CreateSession</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateSession. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateSkill">CreateSkill</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateSkill. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateUserProfile">CreateUserProfile</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateUserProfile. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateUserProfileEnrollmentUrl">CreateUserProfileEnrollmentUrl</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateUserProfileEnrollmentUrl. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateVault">CreateVault</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateVault. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateWebhook">CreateWebhook</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateWebhook. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string</code> | [Write] aws-external-anthropic:CreateWorkspace. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteBatchInference">DeleteBatchInference</a></code> | <code>string</code> | [Write] aws-external-anthropic:DeleteBatchInference. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] aws-external-anthropic:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteFile">DeleteFile</a></code> | <code>string</code> | [Write] aws-external-anthropic:DeleteFile. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteMemoryStore">DeleteMemoryStore</a></code> | <code>string</code> | [Write] aws-external-anthropic:DeleteMemoryStore. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteSession">DeleteSession</a></code> | <code>string</code> | [Write] aws-external-anthropic:DeleteSession. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteSkill">DeleteSkill</a></code> | <code>string</code> | [Write] aws-external-anthropic:DeleteSkill. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteVault">DeleteVault</a></code> | <code>string</code> | [Write] aws-external-anthropic:DeleteVault. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteWebhook">DeleteWebhook</a></code> | <code>string</code> | [Write] aws-external-anthropic:DeleteWebhook. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListAgents">ListAgents</a></code> | <code>string</code> | [List] aws-external-anthropic:ListAgents. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListBatchInferences">ListBatchInferences</a></code> | <code>string</code> | [List] aws-external-anthropic:ListBatchInferences. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] aws-external-anthropic:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListFiles">ListFiles</a></code> | <code>string</code> | [List] aws-external-anthropic:ListFiles. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListMemoryStores">ListMemoryStores</a></code> | <code>string</code> | [List] aws-external-anthropic:ListMemoryStores. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListModels">ListModels</a></code> | <code>string</code> | [List] aws-external-anthropic:ListModels. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [List] aws-external-anthropic:ListSessions. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListSkills">ListSkills</a></code> | <code>string</code> | [List] aws-external-anthropic:ListSkills. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] aws-external-anthropic:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListUserProfiles">ListUserProfiles</a></code> | <code>string</code> | [List] aws-external-anthropic:ListUserProfiles. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListVaults">ListVaults</a></code> | <code>string</code> | [List] aws-external-anthropic:ListVaults. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListWebhooks">ListWebhooks</a></code> | <code>string</code> | [List] aws-external-anthropic:ListWebhooks. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string</code> | [List] aws-external-anthropic:ListWorkspaces. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ProcessEnvironmentWork">ProcessEnvironmentWork</a></code> | <code>string</code> | [Write] aws-external-anthropic:ProcessEnvironmentWork. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.RotateWebhookSecret">RotateWebhookSecret</a></code> | <code>string</code> | [Write] aws-external-anthropic:RotateWebhookSecret. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] aws-external-anthropic:TagResource. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] aws-external-anthropic:UntagResource. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateAgent">UpdateAgent</a></code> | <code>string</code> | [Write] aws-external-anthropic:UpdateAgent. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] aws-external-anthropic:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateMemoryStore">UpdateMemoryStore</a></code> | <code>string</code> | [Write] aws-external-anthropic:UpdateMemoryStore. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateSession">UpdateSession</a></code> | <code>string</code> | [Write] aws-external-anthropic:UpdateSession. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateSkill">UpdateSkill</a></code> | <code>string</code> | [Write] aws-external-anthropic:UpdateSkill. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateUserProfile">UpdateUserProfile</a></code> | <code>string</code> | [Write] aws-external-anthropic:UpdateUserProfile. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateVault">UpdateVault</a></code> | <code>string</code> | [Write] aws-external-anthropic:UpdateVault. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateWebhook">UpdateWebhook</a></code> | <code>string</code> | [Write] aws-external-anthropic:UpdateWebhook. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateWorkspace">UpdateWorkspace</a></code> | <code>string</code> | [Write] aws-external-anthropic:UpdateWorkspace. |

---

##### `actionGetAccountStatus`<sup>Required</sup> <a name="actionGetAccountStatus" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetAccountStatus"></a>

```typescript
public readonly actionGetAccountStatus: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetAccountStatus.

---

##### `actionGetAgent`<sup>Required</sup> <a name="actionGetAgent" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetAgent"></a>

```typescript
public readonly actionGetAgent: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetAgent.

---

##### `actionGetBatchInference`<sup>Required</sup> <a name="actionGetBatchInference" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetBatchInference"></a>

```typescript
public readonly actionGetBatchInference: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetBatchInference.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetEnvironment.

---

##### `actionGetFile`<sup>Required</sup> <a name="actionGetFile" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetFile"></a>

```typescript
public readonly actionGetFile: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetFile.

---

##### `actionGetMemoryStore`<sup>Required</sup> <a name="actionGetMemoryStore" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetMemoryStore"></a>

```typescript
public readonly actionGetMemoryStore: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetMemoryStore.

---

##### `actionGetModel`<sup>Required</sup> <a name="actionGetModel" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetModel"></a>

```typescript
public readonly actionGetModel: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetModel.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetSession.

---

##### `actionGetSkill`<sup>Required</sup> <a name="actionGetSkill" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetSkill"></a>

```typescript
public readonly actionGetSkill: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetSkill.

---

##### `actionGetUserProfile`<sup>Required</sup> <a name="actionGetUserProfile" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetUserProfile"></a>

```typescript
public readonly actionGetUserProfile: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetUserProfile.

---

##### `actionGetVault`<sup>Required</sup> <a name="actionGetVault" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetVault"></a>

```typescript
public readonly actionGetVault: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetVault.

---

##### `actionGetWebhook`<sup>Required</sup> <a name="actionGetWebhook" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetWebhook"></a>

```typescript
public readonly actionGetWebhook: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetWebhook.

---

##### `actionGetWorkspace`<sup>Required</sup> <a name="actionGetWorkspace" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.actionGetWorkspace"></a>

```typescript
public readonly actionGetWorkspace: string;
```

- *Type:* string

[Read] aws-external-anthropic:GetWorkspace.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ArchiveAgent`<sup>Required</sup> <a name="ArchiveAgent" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveAgent"></a>

```typescript
public readonly ArchiveAgent: string;
```

- *Type:* string

[Write] aws-external-anthropic:ArchiveAgent.

---

##### `ArchiveEnvironment`<sup>Required</sup> <a name="ArchiveEnvironment" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveEnvironment"></a>

```typescript
public readonly ArchiveEnvironment: string;
```

- *Type:* string

[Write] aws-external-anthropic:ArchiveEnvironment.

---

##### `ArchiveMemoryStore`<sup>Required</sup> <a name="ArchiveMemoryStore" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveMemoryStore"></a>

```typescript
public readonly ArchiveMemoryStore: string;
```

- *Type:* string

[Write] aws-external-anthropic:ArchiveMemoryStore.

---

##### `ArchiveSession`<sup>Required</sup> <a name="ArchiveSession" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveSession"></a>

```typescript
public readonly ArchiveSession: string;
```

- *Type:* string

[Write] aws-external-anthropic:ArchiveSession.

---

##### `ArchiveVault`<sup>Required</sup> <a name="ArchiveVault" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveVault"></a>

```typescript
public readonly ArchiveVault: string;
```

- *Type:* string

[Write] aws-external-anthropic:ArchiveVault.

---

##### `ArchiveWorkspace`<sup>Required</sup> <a name="ArchiveWorkspace" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ArchiveWorkspace"></a>

```typescript
public readonly ArchiveWorkspace: string;
```

- *Type:* string

[Write] aws-external-anthropic:ArchiveWorkspace.

---

##### `AssumeConsole`<sup>Required</sup> <a name="AssumeConsole" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.AssumeConsole"></a>

```typescript
public readonly AssumeConsole: string;
```

- *Type:* string

[Write] aws-external-anthropic:AssumeConsole.

---

##### `CallWithBearerToken`<sup>Required</sup> <a name="CallWithBearerToken" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CallWithBearerToken"></a>

```typescript
public readonly CallWithBearerToken: string;
```

- *Type:* string

[List] aws-external-anthropic:CallWithBearerToken.

---

##### `CancelBatchInference`<sup>Required</sup> <a name="CancelBatchInference" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CancelBatchInference"></a>

```typescript
public readonly CancelBatchInference: string;
```

- *Type:* string

[Write] aws-external-anthropic:CancelBatchInference.

---

##### `CountTokens`<sup>Required</sup> <a name="CountTokens" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CountTokens"></a>

```typescript
public readonly CountTokens: string;
```

- *Type:* string

[Write] aws-external-anthropic:CountTokens.

---

##### `CreateAgent`<sup>Required</sup> <a name="CreateAgent" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateAgent"></a>

```typescript
public readonly CreateAgent: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateAgent.

---

##### `CreateBatchInference`<sup>Required</sup> <a name="CreateBatchInference" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateBatchInference"></a>

```typescript
public readonly CreateBatchInference: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateBatchInference.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateEnvironment.

---

##### `CreateFile`<sup>Required</sup> <a name="CreateFile" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateFile"></a>

```typescript
public readonly CreateFile: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateFile.

---

##### `CreateInference`<sup>Required</sup> <a name="CreateInference" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateInference"></a>

```typescript
public readonly CreateInference: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateInference.

---

##### `CreateMemoryStore`<sup>Required</sup> <a name="CreateMemoryStore" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateMemoryStore"></a>

```typescript
public readonly CreateMemoryStore: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateMemoryStore.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateSession"></a>

```typescript
public readonly CreateSession: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateSession.

---

##### `CreateSkill`<sup>Required</sup> <a name="CreateSkill" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateSkill"></a>

```typescript
public readonly CreateSkill: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateSkill.

---

##### `CreateUserProfile`<sup>Required</sup> <a name="CreateUserProfile" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateUserProfile"></a>

```typescript
public readonly CreateUserProfile: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateUserProfile.

---

##### `CreateUserProfileEnrollmentUrl`<sup>Required</sup> <a name="CreateUserProfileEnrollmentUrl" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateUserProfileEnrollmentUrl"></a>

```typescript
public readonly CreateUserProfileEnrollmentUrl: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateUserProfileEnrollmentUrl.

---

##### `CreateVault`<sup>Required</sup> <a name="CreateVault" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateVault"></a>

```typescript
public readonly CreateVault: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateVault.

---

##### `CreateWebhook`<sup>Required</sup> <a name="CreateWebhook" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateWebhook"></a>

```typescript
public readonly CreateWebhook: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateWebhook.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string;
```

- *Type:* string

[Write] aws-external-anthropic:CreateWorkspace.

---

##### `DeleteBatchInference`<sup>Required</sup> <a name="DeleteBatchInference" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteBatchInference"></a>

```typescript
public readonly DeleteBatchInference: string;
```

- *Type:* string

[Write] aws-external-anthropic:DeleteBatchInference.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] aws-external-anthropic:DeleteEnvironment.

---

##### `DeleteFile`<sup>Required</sup> <a name="DeleteFile" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteFile"></a>

```typescript
public readonly DeleteFile: string;
```

- *Type:* string

[Write] aws-external-anthropic:DeleteFile.

---

##### `DeleteMemoryStore`<sup>Required</sup> <a name="DeleteMemoryStore" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteMemoryStore"></a>

```typescript
public readonly DeleteMemoryStore: string;
```

- *Type:* string

[Write] aws-external-anthropic:DeleteMemoryStore.

---

##### `DeleteSession`<sup>Required</sup> <a name="DeleteSession" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteSession"></a>

```typescript
public readonly DeleteSession: string;
```

- *Type:* string

[Write] aws-external-anthropic:DeleteSession.

---

##### `DeleteSkill`<sup>Required</sup> <a name="DeleteSkill" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteSkill"></a>

```typescript
public readonly DeleteSkill: string;
```

- *Type:* string

[Write] aws-external-anthropic:DeleteSkill.

---

##### `DeleteVault`<sup>Required</sup> <a name="DeleteVault" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteVault"></a>

```typescript
public readonly DeleteVault: string;
```

- *Type:* string

[Write] aws-external-anthropic:DeleteVault.

---

##### `DeleteWebhook`<sup>Required</sup> <a name="DeleteWebhook" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.DeleteWebhook"></a>

```typescript
public readonly DeleteWebhook: string;
```

- *Type:* string

[Write] aws-external-anthropic:DeleteWebhook.

---

##### `ListAgents`<sup>Required</sup> <a name="ListAgents" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListAgents"></a>

```typescript
public readonly ListAgents: string;
```

- *Type:* string

[List] aws-external-anthropic:ListAgents.

---

##### `ListBatchInferences`<sup>Required</sup> <a name="ListBatchInferences" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListBatchInferences"></a>

```typescript
public readonly ListBatchInferences: string;
```

- *Type:* string

[List] aws-external-anthropic:ListBatchInferences.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] aws-external-anthropic:ListEnvironments.

---

##### `ListFiles`<sup>Required</sup> <a name="ListFiles" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListFiles"></a>

```typescript
public readonly ListFiles: string;
```

- *Type:* string

[List] aws-external-anthropic:ListFiles.

---

##### `ListMemoryStores`<sup>Required</sup> <a name="ListMemoryStores" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListMemoryStores"></a>

```typescript
public readonly ListMemoryStores: string;
```

- *Type:* string

[List] aws-external-anthropic:ListMemoryStores.

---

##### `ListModels`<sup>Required</sup> <a name="ListModels" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListModels"></a>

```typescript
public readonly ListModels: string;
```

- *Type:* string

[List] aws-external-anthropic:ListModels.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[List] aws-external-anthropic:ListSessions.

---

##### `ListSkills`<sup>Required</sup> <a name="ListSkills" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListSkills"></a>

```typescript
public readonly ListSkills: string;
```

- *Type:* string

[List] aws-external-anthropic:ListSkills.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] aws-external-anthropic:ListTagsForResource.

---

##### `ListUserProfiles`<sup>Required</sup> <a name="ListUserProfiles" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListUserProfiles"></a>

```typescript
public readonly ListUserProfiles: string;
```

- *Type:* string

[List] aws-external-anthropic:ListUserProfiles.

---

##### `ListVaults`<sup>Required</sup> <a name="ListVaults" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListVaults"></a>

```typescript
public readonly ListVaults: string;
```

- *Type:* string

[List] aws-external-anthropic:ListVaults.

---

##### `ListWebhooks`<sup>Required</sup> <a name="ListWebhooks" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListWebhooks"></a>

```typescript
public readonly ListWebhooks: string;
```

- *Type:* string

[List] aws-external-anthropic:ListWebhooks.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string;
```

- *Type:* string

[List] aws-external-anthropic:ListWorkspaces.

---

##### `ProcessEnvironmentWork`<sup>Required</sup> <a name="ProcessEnvironmentWork" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.ProcessEnvironmentWork"></a>

```typescript
public readonly ProcessEnvironmentWork: string;
```

- *Type:* string

[Write] aws-external-anthropic:ProcessEnvironmentWork.

---

##### `RotateWebhookSecret`<sup>Required</sup> <a name="RotateWebhookSecret" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.RotateWebhookSecret"></a>

```typescript
public readonly RotateWebhookSecret: string;
```

- *Type:* string

[Write] aws-external-anthropic:RotateWebhookSecret.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] aws-external-anthropic:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] aws-external-anthropic:UntagResource.

---

##### `UpdateAgent`<sup>Required</sup> <a name="UpdateAgent" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateAgent"></a>

```typescript
public readonly UpdateAgent: string;
```

- *Type:* string

[Write] aws-external-anthropic:UpdateAgent.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] aws-external-anthropic:UpdateEnvironment.

---

##### `UpdateMemoryStore`<sup>Required</sup> <a name="UpdateMemoryStore" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateMemoryStore"></a>

```typescript
public readonly UpdateMemoryStore: string;
```

- *Type:* string

[Write] aws-external-anthropic:UpdateMemoryStore.

---

##### `UpdateSession`<sup>Required</sup> <a name="UpdateSession" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateSession"></a>

```typescript
public readonly UpdateSession: string;
```

- *Type:* string

[Write] aws-external-anthropic:UpdateSession.

---

##### `UpdateSkill`<sup>Required</sup> <a name="UpdateSkill" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateSkill"></a>

```typescript
public readonly UpdateSkill: string;
```

- *Type:* string

[Write] aws-external-anthropic:UpdateSkill.

---

##### `UpdateUserProfile`<sup>Required</sup> <a name="UpdateUserProfile" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateUserProfile"></a>

```typescript
public readonly UpdateUserProfile: string;
```

- *Type:* string

[Write] aws-external-anthropic:UpdateUserProfile.

---

##### `UpdateVault`<sup>Required</sup> <a name="UpdateVault" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateVault"></a>

```typescript
public readonly UpdateVault: string;
```

- *Type:* string

[Write] aws-external-anthropic:UpdateVault.

---

##### `UpdateWebhook`<sup>Required</sup> <a name="UpdateWebhook" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateWebhook"></a>

```typescript
public readonly UpdateWebhook: string;
```

- *Type:* string

[Write] aws-external-anthropic:UpdateWebhook.

---

##### `UpdateWorkspace`<sup>Required</sup> <a name="UpdateWorkspace" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicActions.property.UpdateWorkspace"></a>

```typescript
public readonly UpdateWorkspace: string;
```

- *Type:* string

[Write] aws-external-anthropic:UpdateWorkspace.

---

### AWSExternalAnthropicConditions <a name="AWSExternalAnthropicConditions" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions"></a>

Condition key constants and builders for aws-external-anthropic.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.Initializer"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

new aws_external_anthropic.AWSExternalAnthropicConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.bearerTokenType">bearerTokenType</a></code> | Generates a condition block for `aws-external-anthropic:BearerTokenType`. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.calledViaConsole">calledViaConsole</a></code> | Generates a condition block for `aws-external-anthropic:CalledViaConsole`. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.capability">capability</a></code> | Generates a condition block for `aws-external-anthropic:Capability`. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `bearerTokenType` <a name="bearerTokenType" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.bearerTokenType"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

aws_external_anthropic.AWSExternalAnthropicConditions.bearerTokenType(value: string)
```

Generates a condition block for `aws-external-anthropic:BearerTokenType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.bearerTokenType.parameter.value"></a>

- *Type:* string

---

##### `calledViaConsole` <a name="calledViaConsole" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.calledViaConsole"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

aws_external_anthropic.AWSExternalAnthropicConditions.calledViaConsole(value: boolean)
```

Generates a condition block for `aws-external-anthropic:CalledViaConsole`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.calledViaConsole.parameter.value"></a>

- *Type:* boolean

---

##### `capability` <a name="capability" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.capability"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

aws_external_anthropic.AWSExternalAnthropicConditions.capability(value: string)
```

Generates a condition block for `aws-external-anthropic:Capability`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.capability.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.requestTag"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

aws_external_anthropic.AWSExternalAnthropicConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.resourceTag"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

aws_external_anthropic.AWSExternalAnthropicConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.tagKeys"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

aws_external_anthropic.AWSExternalAnthropicConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.AssumeConsoleConditionKeys">AssumeConsoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssumeConsole action. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.BEARER_TOKEN_TYPE">BEARER_TOKEN_TYPE</a></code> | <code>string</code> | Condition key: aws-external-anthropic:BearerTokenType (String). |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.CALLED_VIA_CONSOLE">CALLED_VIA_CONSOLE</a></code> | <code>string</code> | Condition key: aws-external-anthropic:CalledViaConsole (Bool). |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.CallWithBearerTokenConditionKeys">CallWithBearerTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CallWithBearerToken action. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.CAPABILITY">CAPABILITY</a></code> | <code>string</code> | Condition key: aws-external-anthropic:Capability (String). |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.CreateWorkspaceConditionKeys">CreateWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkspace action. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AssumeConsoleConditionKeys`<sup>Required</sup> <a name="AssumeConsoleConditionKeys" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.AssumeConsoleConditionKeys"></a>

```typescript
public readonly AssumeConsoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssumeConsole action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BEARER_TOKEN_TYPE`<sup>Required</sup> <a name="BEARER_TOKEN_TYPE" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.BEARER_TOKEN_TYPE"></a>

```typescript
public readonly BEARER_TOKEN_TYPE: string;
```

- *Type:* string

Condition key: aws-external-anthropic:BearerTokenType (String).

---

##### `CALLED_VIA_CONSOLE`<sup>Required</sup> <a name="CALLED_VIA_CONSOLE" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.CALLED_VIA_CONSOLE"></a>

```typescript
public readonly CALLED_VIA_CONSOLE: string;
```

- *Type:* string

Condition key: aws-external-anthropic:CalledViaConsole (Bool).

---

##### `CallWithBearerTokenConditionKeys`<sup>Required</sup> <a name="CallWithBearerTokenConditionKeys" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.CallWithBearerTokenConditionKeys"></a>

```typescript
public readonly CallWithBearerTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CallWithBearerToken action.

---

##### `CAPABILITY`<sup>Required</sup> <a name="CAPABILITY" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.CAPABILITY"></a>

```typescript
public readonly CAPABILITY: string;
```

- *Type:* string

Condition key: aws-external-anthropic:Capability (String).

---

##### `CreateWorkspaceConditionKeys`<sup>Required</sup> <a name="CreateWorkspaceConditionKeys" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.CreateWorkspaceConditionKeys"></a>

```typescript
public readonly CreateWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkspace action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AWSExternalAnthropicResources <a name="AWSExternalAnthropicResources" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources"></a>

ARN builders, validators, and parsers for aws-external-anthropic resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources.Initializer"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

new aws_external_anthropic.AWSExternalAnthropicResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources.isValidWorkspaceArn">isValidWorkspaceArn</a></code> | Validates whether a string is a valid ARN for the workspace resource. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources.parseWorkspaceArn">parseWorkspaceArn</a></code> | Parses a workspace ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources.workspace">workspace</a></code> | Builds an ARN for the workspace resource. |

---

##### `isValidWorkspaceArn` <a name="isValidWorkspaceArn" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources.isValidWorkspaceArn"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

aws_external_anthropic.AWSExternalAnthropicResources.isValidWorkspaceArn(arn: string)
```

Validates whether a string is a valid ARN for the workspace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources.isValidWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceArn` <a name="parseWorkspaceArn" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources.parseWorkspaceArn"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

aws_external_anthropic.AWSExternalAnthropicResources.parseWorkspaceArn(arn: string)
```

Parses a workspace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources.parseWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `workspace` <a name="workspace" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources.workspace"></a>

```typescript
import { aws_external_anthropic } from '@cdk_utils/iam'

aws_external_anthropic.AWSExternalAnthropicResources.workspace(props: AWSExternalAnthropicWorkspaceArnProps)
```

Builds an ARN for the workspace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicResources.workspace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_external_anthropic.AWSExternalAnthropicWorkspaceArnProps">AWSExternalAnthropicWorkspaceArnProps</a>

---




