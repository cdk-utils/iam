# `codestar` Submodule <a name="`codestar` Submodule" id="@cdk_utils/iam.codestar"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodeStarProjectArnComponents <a name="CodeStarProjectArnComponents" id="@cdk_utils/iam.codestar.CodeStarProjectArnComponents"></a>

Parsed components of a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar.CodeStarProjectArnComponents.Initializer"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

const codeStarProjectArnComponents: codestar.CodeStarProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarProjectArnComponents.property.projectId">projectId</a></code> | <code>string</code> | The ProjectId component. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codestar.CodeStarProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codestar.CodeStarProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdk_utils/iam.codestar.CodeStarProjectArnComponents.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ProjectId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codestar.CodeStarProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeStarProjectArnProps <a name="CodeStarProjectArnProps" id="@cdk_utils/iam.codestar.CodeStarProjectArnProps"></a>

Properties for building a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar.CodeStarProjectArnProps.Initializer"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

const codeStarProjectArnProps: codestar.CodeStarProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarProjectArnProps.property.projectId">projectId</a></code> | <code>string</code> | The ProjectId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdk_utils/iam.codestar.CodeStarProjectArnProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ProjectId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codestar.CodeStarProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codestar.CodeStarProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codestar.CodeStarProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeStarUserArnComponents <a name="CodeStarUserArnComponents" id="@cdk_utils/iam.codestar.CodeStarUserArnComponents"></a>

Parsed components of a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar.CodeStarUserArnComponents.Initializer"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

const codeStarUserArnComponents: codestar.CodeStarUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarUserArnComponents.property.awsUserName">awsUserName</a></code> | <code>string</code> | The AwsUserName component. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codestar.CodeStarUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `awsUserName`<sup>Required</sup> <a name="awsUserName" id="@cdk_utils/iam.codestar.CodeStarUserArnComponents.property.awsUserName"></a>

```typescript
public readonly awsUserName: string;
```

- *Type:* string

The AwsUserName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codestar.CodeStarUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CodeStarUserArnProps <a name="CodeStarUserArnProps" id="@cdk_utils/iam.codestar.CodeStarUserArnProps"></a>

Properties for building a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar.CodeStarUserArnProps.Initializer"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

const codeStarUserArnProps: codestar.CodeStarUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarUserArnProps.property.awsUserName">awsUserName</a></code> | <code>string</code> | The AwsUserName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `awsUserName`<sup>Required</sup> <a name="awsUserName" id="@cdk_utils/iam.codestar.CodeStarUserArnProps.property.awsUserName"></a>

```typescript
public readonly awsUserName: string;
```

- *Type:* string

The AwsUserName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codestar.CodeStarUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codestar.CodeStarUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### CodeStarActions <a name="CodeStarActions" id="@cdk_utils/iam.codestar.CodeStarActions"></a>

IAM action constants for the codestar service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar.CodeStarActions.Initializer"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

new codestar.CodeStarActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.actionGetExtendedAccess">actionGetExtendedAccess</a></code> | <code>string</code> | [Read] codestar:GetExtendedAccess. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.AssociateTeamMember">AssociateTeamMember</a></code> | <code>string</code> | [PermissionManagement] codestar:AssociateTeamMember. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [PermissionManagement] codestar:CreateProject. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.CreateUserProfile">CreateUserProfile</a></code> | <code>string</code> | [Write] codestar:CreateUserProfile. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.DeleteExtendedAccess">DeleteExtendedAccess</a></code> | <code>string</code> | [Write] codestar:DeleteExtendedAccess. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [PermissionManagement] codestar:DeleteProject. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.DeleteUserProfile">DeleteUserProfile</a></code> | <code>string</code> | [Write] codestar:DeleteUserProfile. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.DescribeProject">DescribeProject</a></code> | <code>string</code> | [Read] codestar:DescribeProject. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.DescribeUserProfile">DescribeUserProfile</a></code> | <code>string</code> | [Read] codestar:DescribeUserProfile. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.DisassociateTeamMember">DisassociateTeamMember</a></code> | <code>string</code> | [PermissionManagement] codestar:DisassociateTeamMember. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [List] codestar:ListProjects. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.ListResources">ListResources</a></code> | <code>string</code> | [List] codestar:ListResources. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.ListTagsForProject">ListTagsForProject</a></code> | <code>string</code> | [List] codestar:ListTagsForProject. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.ListTeamMembers">ListTeamMembers</a></code> | <code>string</code> | [List] codestar:ListTeamMembers. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.ListUserProfiles">ListUserProfiles</a></code> | <code>string</code> | [List] codestar:ListUserProfiles. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.PutExtendedAccess">PutExtendedAccess</a></code> | <code>string</code> | [Write] codestar:PutExtendedAccess. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.TagProject">TagProject</a></code> | <code>string</code> | [Tagging] codestar:TagProject. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.UntagProject">UntagProject</a></code> | <code>string</code> | [Tagging] codestar:UntagProject. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.UpdateProject">UpdateProject</a></code> | <code>string</code> | [Write] codestar:UpdateProject. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.UpdateTeamMember">UpdateTeamMember</a></code> | <code>string</code> | [PermissionManagement] codestar:UpdateTeamMember. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.UpdateUserProfile">UpdateUserProfile</a></code> | <code>string</code> | [Write] codestar:UpdateUserProfile. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarActions.property.VerifyServiceRole">VerifyServiceRole</a></code> | <code>string</code> | [List] codestar:VerifyServiceRole. |

---

##### `actionGetExtendedAccess`<sup>Required</sup> <a name="actionGetExtendedAccess" id="@cdk_utils/iam.codestar.CodeStarActions.property.actionGetExtendedAccess"></a>

```typescript
public readonly actionGetExtendedAccess: string;
```

- *Type:* string

[Read] codestar:GetExtendedAccess.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codestar.CodeStarActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codestar.CodeStarActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codestar.CodeStarActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codestar.CodeStarActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codestar.CodeStarActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateTeamMember`<sup>Required</sup> <a name="AssociateTeamMember" id="@cdk_utils/iam.codestar.CodeStarActions.property.AssociateTeamMember"></a>

```typescript
public readonly AssociateTeamMember: string;
```

- *Type:* string

[PermissionManagement] codestar:AssociateTeamMember.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.codestar.CodeStarActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[PermissionManagement] codestar:CreateProject.

---

##### `CreateUserProfile`<sup>Required</sup> <a name="CreateUserProfile" id="@cdk_utils/iam.codestar.CodeStarActions.property.CreateUserProfile"></a>

```typescript
public readonly CreateUserProfile: string;
```

- *Type:* string

[Write] codestar:CreateUserProfile.

---

##### `DeleteExtendedAccess`<sup>Required</sup> <a name="DeleteExtendedAccess" id="@cdk_utils/iam.codestar.CodeStarActions.property.DeleteExtendedAccess"></a>

```typescript
public readonly DeleteExtendedAccess: string;
```

- *Type:* string

[Write] codestar:DeleteExtendedAccess.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.codestar.CodeStarActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[PermissionManagement] codestar:DeleteProject.

---

##### `DeleteUserProfile`<sup>Required</sup> <a name="DeleteUserProfile" id="@cdk_utils/iam.codestar.CodeStarActions.property.DeleteUserProfile"></a>

```typescript
public readonly DeleteUserProfile: string;
```

- *Type:* string

[Write] codestar:DeleteUserProfile.

---

##### `DescribeProject`<sup>Required</sup> <a name="DescribeProject" id="@cdk_utils/iam.codestar.CodeStarActions.property.DescribeProject"></a>

```typescript
public readonly DescribeProject: string;
```

- *Type:* string

[Read] codestar:DescribeProject.

---

##### `DescribeUserProfile`<sup>Required</sup> <a name="DescribeUserProfile" id="@cdk_utils/iam.codestar.CodeStarActions.property.DescribeUserProfile"></a>

```typescript
public readonly DescribeUserProfile: string;
```

- *Type:* string

[Read] codestar:DescribeUserProfile.

---

##### `DisassociateTeamMember`<sup>Required</sup> <a name="DisassociateTeamMember" id="@cdk_utils/iam.codestar.CodeStarActions.property.DisassociateTeamMember"></a>

```typescript
public readonly DisassociateTeamMember: string;
```

- *Type:* string

[PermissionManagement] codestar:DisassociateTeamMember.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.codestar.CodeStarActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[List] codestar:ListProjects.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.codestar.CodeStarActions.property.ListResources"></a>

```typescript
public readonly ListResources: string;
```

- *Type:* string

[List] codestar:ListResources.

---

##### `ListTagsForProject`<sup>Required</sup> <a name="ListTagsForProject" id="@cdk_utils/iam.codestar.CodeStarActions.property.ListTagsForProject"></a>

```typescript
public readonly ListTagsForProject: string;
```

- *Type:* string

[List] codestar:ListTagsForProject.

---

##### `ListTeamMembers`<sup>Required</sup> <a name="ListTeamMembers" id="@cdk_utils/iam.codestar.CodeStarActions.property.ListTeamMembers"></a>

```typescript
public readonly ListTeamMembers: string;
```

- *Type:* string

[List] codestar:ListTeamMembers.

---

##### `ListUserProfiles`<sup>Required</sup> <a name="ListUserProfiles" id="@cdk_utils/iam.codestar.CodeStarActions.property.ListUserProfiles"></a>

```typescript
public readonly ListUserProfiles: string;
```

- *Type:* string

[List] codestar:ListUserProfiles.

---

##### `PutExtendedAccess`<sup>Required</sup> <a name="PutExtendedAccess" id="@cdk_utils/iam.codestar.CodeStarActions.property.PutExtendedAccess"></a>

```typescript
public readonly PutExtendedAccess: string;
```

- *Type:* string

[Write] codestar:PutExtendedAccess.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codestar.CodeStarActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagProject`<sup>Required</sup> <a name="TagProject" id="@cdk_utils/iam.codestar.CodeStarActions.property.TagProject"></a>

```typescript
public readonly TagProject: string;
```

- *Type:* string

[Tagging] codestar:TagProject.

---

##### `UntagProject`<sup>Required</sup> <a name="UntagProject" id="@cdk_utils/iam.codestar.CodeStarActions.property.UntagProject"></a>

```typescript
public readonly UntagProject: string;
```

- *Type:* string

[Tagging] codestar:UntagProject.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.codestar.CodeStarActions.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string;
```

- *Type:* string

[Write] codestar:UpdateProject.

---

##### `UpdateTeamMember`<sup>Required</sup> <a name="UpdateTeamMember" id="@cdk_utils/iam.codestar.CodeStarActions.property.UpdateTeamMember"></a>

```typescript
public readonly UpdateTeamMember: string;
```

- *Type:* string

[PermissionManagement] codestar:UpdateTeamMember.

---

##### `UpdateUserProfile`<sup>Required</sup> <a name="UpdateUserProfile" id="@cdk_utils/iam.codestar.CodeStarActions.property.UpdateUserProfile"></a>

```typescript
public readonly UpdateUserProfile: string;
```

- *Type:* string

[Write] codestar:UpdateUserProfile.

---

##### `VerifyServiceRole`<sup>Required</sup> <a name="VerifyServiceRole" id="@cdk_utils/iam.codestar.CodeStarActions.property.VerifyServiceRole"></a>

```typescript
public readonly VerifyServiceRole: string;
```

- *Type:* string

[List] codestar:VerifyServiceRole.

---

### CodeStarConditions <a name="CodeStarConditions" id="@cdk_utils/iam.codestar.CodeStarConditions"></a>

Condition key constants and builders for codestar.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar.CodeStarConditions.Initializer"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

new codestar.CodeStarConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codestar.CodeStarConditions.requestTag"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

codestar.CodeStarConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar.CodeStarConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codestar.CodeStarConditions.resourceTag"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

codestar.CodeStarConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar.CodeStarConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codestar.CodeStarConditions.tagKeys"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

codestar.CodeStarConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codestar.CodeStarConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarConditions.property.CreateProjectConditionKeys">CreateProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProject action. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: iam:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarConditions.property.TagProjectConditionKeys">TagProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagProject action. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarConditions.property.UntagProjectConditionKeys">UntagProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagProject action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codestar.CodeStarConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codestar.CodeStarConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codestar.CodeStarConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateProjectConditionKeys`<sup>Required</sup> <a name="CreateProjectConditionKeys" id="@cdk_utils/iam.codestar.CodeStarConditions.property.CreateProjectConditionKeys"></a>

```typescript
public readonly CreateProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProject action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.codestar.CodeStarConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: iam:ResourceTag/${TagKey} (String).

---

##### `TagProjectConditionKeys`<sup>Required</sup> <a name="TagProjectConditionKeys" id="@cdk_utils/iam.codestar.CodeStarConditions.property.TagProjectConditionKeys"></a>

```typescript
public readonly TagProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagProject action.

---

##### `UntagProjectConditionKeys`<sup>Required</sup> <a name="UntagProjectConditionKeys" id="@cdk_utils/iam.codestar.CodeStarConditions.property.UntagProjectConditionKeys"></a>

```typescript
public readonly UntagProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagProject action.

---

### CodeStarResources <a name="CodeStarResources" id="@cdk_utils/iam.codestar.CodeStarResources"></a>

ARN builders, validators, and parsers for codestar resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar.CodeStarResources.Initializer"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

new codestar.CodeStarResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarResources.parseProjectArn">parseProjectArn</a></code> | Parses a project ARN into its components. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarResources.parseUserArn">parseUserArn</a></code> | Parses a user ARN into its components. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarResources.project">project</a></code> | Builds an ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.codestar.CodeStarResources.user">user</a></code> | Builds an ARN for the user resource. |

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.codestar.CodeStarResources.isValidProjectArn"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

codestar.CodeStarResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar.CodeStarResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.codestar.CodeStarResources.isValidUserArn"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

codestar.CodeStarResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar.CodeStarResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.codestar.CodeStarResources.parseProjectArn"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

codestar.CodeStarResources.parseProjectArn(arn: string)
```

Parses a project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar.CodeStarResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.codestar.CodeStarResources.parseUserArn"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

codestar.CodeStarResources.parseUserArn(arn: string)
```

Parses a user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar.CodeStarResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.codestar.CodeStarResources.project"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

codestar.CodeStarResources.project(props: CodeStarProjectArnProps)
```

Builds an ARN for the project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codestar.CodeStarResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codestar.CodeStarProjectArnProps">CodeStarProjectArnProps</a>

---

##### `user` <a name="user" id="@cdk_utils/iam.codestar.CodeStarResources.user"></a>

```typescript
import { codestar } from '@cdk_utils/iam'

codestar.CodeStarResources.user(props: CodeStarUserArnProps)
```

Builds an ARN for the user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codestar.CodeStarResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codestar.CodeStarUserArnProps">CodeStarUserArnProps</a>

---




