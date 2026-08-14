# `monitron` Submodule <a name="`monitron` Submodule" id="@cdk_utils/iam.monitron"></a>


## Structs <a name="Structs" id="Structs"></a>

### MonitronProjectArnComponents <a name="MonitronProjectArnComponents" id="@cdk_utils/iam.monitron.MonitronProjectArnComponents"></a>

Parsed components of a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.monitron.MonitronProjectArnComponents.Initializer"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

const monitronProjectArnComponents: monitron.MonitronProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.monitron.MonitronProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronProjectArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.monitron.MonitronProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.monitron.MonitronProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.monitron.MonitronProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.monitron.MonitronProjectArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### MonitronProjectArnProps <a name="MonitronProjectArnProps" id="@cdk_utils/iam.monitron.MonitronProjectArnProps"></a>

Properties for building a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.monitron.MonitronProjectArnProps.Initializer"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

const monitronProjectArnProps: monitron.MonitronProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.monitron.MonitronProjectArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.monitron.MonitronProjectArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.monitron.MonitronProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.monitron.MonitronProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.monitron.MonitronProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MonitronActions <a name="MonitronActions" id="@cdk_utils/iam.monitron.MonitronActions"></a>

IAM action constants for the monitron service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.monitron.MonitronActions.Initializer"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

new monitron.MonitronActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.actionGetProject">actionGetProject</a></code> | <code>string</code> | [Read] monitron:GetProject. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.actionGetProjectAdminUser">actionGetProjectAdminUser</a></code> | <code>string</code> | [Read] monitron:GetProjectAdminUser. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.AssociateProjectAdminUser">AssociateProjectAdminUser</a></code> | <code>string</code> | [PermissionManagement] monitron:AssociateProjectAdminUser. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] monitron:CreateProject. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.CreateProjectUserAssociation">CreateProjectUserAssociation</a></code> | <code>string</code> | [PermissionManagement] monitron:CreateProjectUserAssociation. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.CreateUserAccessRoleAssociation">CreateUserAccessRoleAssociation</a></code> | <code>string</code> | [PermissionManagement] monitron:CreateUserAccessRoleAssociation. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [Write] monitron:DeleteProject. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.DeleteProjectUserAssociation">DeleteProjectUserAssociation</a></code> | <code>string</code> | [PermissionManagement] monitron:DeleteProjectUserAssociation. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.DeleteUserAccessRoleAssociation">DeleteUserAccessRoleAssociation</a></code> | <code>string</code> | [PermissionManagement] monitron:DeleteUserAccessRoleAssociation. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.DisassociateProjectAdminUser">DisassociateProjectAdminUser</a></code> | <code>string</code> | [PermissionManagement] monitron:DisassociateProjectAdminUser. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.ListProjectAdminUsers">ListProjectAdminUsers</a></code> | <code>string</code> | [PermissionManagement] monitron:ListProjectAdminUsers. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [List] monitron:ListProjects. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.ListProjectUserAssociations">ListProjectUserAssociations</a></code> | <code>string</code> | [List] monitron:ListProjectUserAssociations. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] monitron:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.ListUserAccessRoleAssociations">ListUserAccessRoleAssociations</a></code> | <code>string</code> | [List] monitron:ListUserAccessRoleAssociations. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] monitron:TagResource. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] monitron:UntagResource. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronActions.property.UpdateProject">UpdateProject</a></code> | <code>string</code> | [Write] monitron:UpdateProject. |

---

##### `actionGetProject`<sup>Required</sup> <a name="actionGetProject" id="@cdk_utils/iam.monitron.MonitronActions.property.actionGetProject"></a>

```typescript
public readonly actionGetProject: string;
```

- *Type:* string

[Read] monitron:GetProject.

---

##### `actionGetProjectAdminUser`<sup>Required</sup> <a name="actionGetProjectAdminUser" id="@cdk_utils/iam.monitron.MonitronActions.property.actionGetProjectAdminUser"></a>

```typescript
public readonly actionGetProjectAdminUser: string;
```

- *Type:* string

[Read] monitron:GetProjectAdminUser.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.monitron.MonitronActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.monitron.MonitronActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.monitron.MonitronActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.monitron.MonitronActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.monitron.MonitronActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateProjectAdminUser`<sup>Required</sup> <a name="AssociateProjectAdminUser" id="@cdk_utils/iam.monitron.MonitronActions.property.AssociateProjectAdminUser"></a>

```typescript
public readonly AssociateProjectAdminUser: string;
```

- *Type:* string

[PermissionManagement] monitron:AssociateProjectAdminUser.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.monitron.MonitronActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] monitron:CreateProject.

---

##### `CreateProjectUserAssociation`<sup>Required</sup> <a name="CreateProjectUserAssociation" id="@cdk_utils/iam.monitron.MonitronActions.property.CreateProjectUserAssociation"></a>

```typescript
public readonly CreateProjectUserAssociation: string;
```

- *Type:* string

[PermissionManagement] monitron:CreateProjectUserAssociation.

---

##### `CreateUserAccessRoleAssociation`<sup>Required</sup> <a name="CreateUserAccessRoleAssociation" id="@cdk_utils/iam.monitron.MonitronActions.property.CreateUserAccessRoleAssociation"></a>

```typescript
public readonly CreateUserAccessRoleAssociation: string;
```

- *Type:* string

[PermissionManagement] monitron:CreateUserAccessRoleAssociation.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.monitron.MonitronActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[Write] monitron:DeleteProject.

---

##### `DeleteProjectUserAssociation`<sup>Required</sup> <a name="DeleteProjectUserAssociation" id="@cdk_utils/iam.monitron.MonitronActions.property.DeleteProjectUserAssociation"></a>

```typescript
public readonly DeleteProjectUserAssociation: string;
```

- *Type:* string

[PermissionManagement] monitron:DeleteProjectUserAssociation.

---

##### `DeleteUserAccessRoleAssociation`<sup>Required</sup> <a name="DeleteUserAccessRoleAssociation" id="@cdk_utils/iam.monitron.MonitronActions.property.DeleteUserAccessRoleAssociation"></a>

```typescript
public readonly DeleteUserAccessRoleAssociation: string;
```

- *Type:* string

[PermissionManagement] monitron:DeleteUserAccessRoleAssociation.

---

##### `DisassociateProjectAdminUser`<sup>Required</sup> <a name="DisassociateProjectAdminUser" id="@cdk_utils/iam.monitron.MonitronActions.property.DisassociateProjectAdminUser"></a>

```typescript
public readonly DisassociateProjectAdminUser: string;
```

- *Type:* string

[PermissionManagement] monitron:DisassociateProjectAdminUser.

---

##### `ListProjectAdminUsers`<sup>Required</sup> <a name="ListProjectAdminUsers" id="@cdk_utils/iam.monitron.MonitronActions.property.ListProjectAdminUsers"></a>

```typescript
public readonly ListProjectAdminUsers: string;
```

- *Type:* string

[PermissionManagement] monitron:ListProjectAdminUsers.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.monitron.MonitronActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[List] monitron:ListProjects.

---

##### `ListProjectUserAssociations`<sup>Required</sup> <a name="ListProjectUserAssociations" id="@cdk_utils/iam.monitron.MonitronActions.property.ListProjectUserAssociations"></a>

```typescript
public readonly ListProjectUserAssociations: string;
```

- *Type:* string

[List] monitron:ListProjectUserAssociations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.monitron.MonitronActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] monitron:ListTagsForResource.

---

##### `ListUserAccessRoleAssociations`<sup>Required</sup> <a name="ListUserAccessRoleAssociations" id="@cdk_utils/iam.monitron.MonitronActions.property.ListUserAccessRoleAssociations"></a>

```typescript
public readonly ListUserAccessRoleAssociations: string;
```

- *Type:* string

[List] monitron:ListUserAccessRoleAssociations.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.monitron.MonitronActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.monitron.MonitronActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] monitron:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.monitron.MonitronActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] monitron:UntagResource.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.monitron.MonitronActions.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string;
```

- *Type:* string

[Write] monitron:UpdateProject.

---

### MonitronConditions <a name="MonitronConditions" id="@cdk_utils/iam.monitron.MonitronConditions"></a>

Condition key constants and builders for monitron.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.monitron.MonitronConditions.Initializer"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

new monitron.MonitronConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.monitron.MonitronConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.monitron.MonitronConditions.requestTag"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

monitron.MonitronConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.monitron.MonitronConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.monitron.MonitronConditions.resourceTag"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

monitron.MonitronConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.monitron.MonitronConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.monitron.MonitronConditions.tagKeys"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

monitron.MonitronConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.monitron.MonitronConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.monitron.MonitronConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.monitron.MonitronConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.monitron.MonitronConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.monitron.MonitronConditions.property.CreateProjectConditionKeys">CreateProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProject action. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.monitron.MonitronConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.monitron.MonitronConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.monitron.MonitronConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateProjectConditionKeys`<sup>Required</sup> <a name="CreateProjectConditionKeys" id="@cdk_utils/iam.monitron.MonitronConditions.property.CreateProjectConditionKeys"></a>

```typescript
public readonly CreateProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProject action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.monitron.MonitronConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.monitron.MonitronConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MonitronResources <a name="MonitronResources" id="@cdk_utils/iam.monitron.MonitronResources"></a>

ARN builders, validators, and parsers for monitron resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.monitron.MonitronResources.Initializer"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

new monitron.MonitronResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.monitron.MonitronResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronResources.parseProjectArn">parseProjectArn</a></code> | Parses a project ARN into its components. |
| <code><a href="#@cdk_utils/iam.monitron.MonitronResources.project">project</a></code> | Builds an ARN for the project resource. |

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.monitron.MonitronResources.isValidProjectArn"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

monitron.MonitronResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.monitron.MonitronResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.monitron.MonitronResources.parseProjectArn"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

monitron.MonitronResources.parseProjectArn(arn: string)
```

Parses a project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.monitron.MonitronResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.monitron.MonitronResources.project"></a>

```typescript
import { monitron } from '@cdk_utils/iam'

monitron.MonitronResources.project(props: MonitronProjectArnProps)
```

Builds an ARN for the project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.monitron.MonitronResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.monitron.MonitronProjectArnProps">MonitronProjectArnProps</a>

---




