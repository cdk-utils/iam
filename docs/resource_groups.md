# `resource_groups` Submodule <a name="`resource_groups` Submodule" id="@cdk_utils/iam.resource_groups"></a>


## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupsGroupArnComponents <a name="ResourceGroupsGroupArnComponents" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnComponents"></a>

Parsed components of a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnComponents.Initializer"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

const resourceGroupsGroupArnComponents: resource_groups.ResourceGroupsGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnComponents.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnComponents.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ResourceGroupsGroupArnProps <a name="ResourceGroupsGroupArnProps" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps"></a>

Properties for building a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps.Initializer"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

const resourceGroupsGroupArnProps: resource_groups.ResourceGroupsGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ResourceGroupsTagSyncTaskArnComponents <a name="ResourceGroupsTagSyncTaskArnComponents" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents"></a>

Parsed components of a tagSyncTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.Initializer"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

const resourceGroupsTagSyncTaskArnComponents: resource_groups.ResourceGroupsTagSyncTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnComponents.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component.

---

### ResourceGroupsTagSyncTaskArnProps <a name="ResourceGroupsTagSyncTaskArnProps" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps"></a>

Properties for building a tagSyncTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.Initializer"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

const resourceGroupsTagSyncTaskArnProps: resource_groups.ResourceGroupsTagSyncTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component of the ARN.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupsActions <a name="ResourceGroupsActions" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions"></a>

IAM action constants for the resource-groups service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.Initializer"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

new resource_groups.ResourceGroupsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] resource-groups:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetGroup">actionGetGroup</a></code> | <code>string</code> | [Read] resource-groups:GetGroup. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetGroupConfiguration">actionGetGroupConfiguration</a></code> | <code>string</code> | [Read] resource-groups:GetGroupConfiguration. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetGroupPolicy">actionGetGroupPolicy</a></code> | <code>string</code> | [Read] resource-groups:GetGroupPolicy. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetGroupQuery">actionGetGroupQuery</a></code> | <code>string</code> | [Read] resource-groups:GetGroupQuery. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetTags">actionGetTags</a></code> | <code>string</code> | [Read] resource-groups:GetTags. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetTagSyncTask">actionGetTagSyncTask</a></code> | <code>string</code> | [Read] resource-groups:GetTagSyncTask. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AssociateResource">AssociateResource</a></code> | <code>string</code> | [Write] resource-groups:AssociateResource. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.CancelTagSyncTask">CancelTagSyncTask</a></code> | <code>string</code> | [Write] resource-groups:CancelTagSyncTask. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] resource-groups:CreateGroup. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] resource-groups:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.DeleteGroupPolicy">DeleteGroupPolicy</a></code> | <code>string</code> | [Write] resource-groups:DeleteGroupPolicy. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.DisassociateResource">DisassociateResource</a></code> | <code>string</code> | [Write] resource-groups:DisassociateResource. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.GroupResources">GroupResources</a></code> | <code>string</code> | [Write] resource-groups:GroupResources. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.ListGroupingStatuses">ListGroupingStatuses</a></code> | <code>string</code> | [List] resource-groups:ListGroupingStatuses. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.ListGroupResources">ListGroupResources</a></code> | <code>string</code> | [List] resource-groups:ListGroupResources. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] resource-groups:ListGroups. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.ListResourceTypes">ListResourceTypes</a></code> | <code>string</code> | [List] resource-groups:ListResourceTypes. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.ListTagSyncTasks">ListTagSyncTasks</a></code> | <code>string</code> | [List] resource-groups:ListTagSyncTasks. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.PutGroupConfiguration">PutGroupConfiguration</a></code> | <code>string</code> | [Write] resource-groups:PutGroupConfiguration. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.PutGroupPolicy">PutGroupPolicy</a></code> | <code>string</code> | [Write] resource-groups:PutGroupPolicy. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.SearchResources">SearchResources</a></code> | <code>string</code> | [List] resource-groups:SearchResources. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.StartTagSyncTask">StartTagSyncTask</a></code> | <code>string</code> | [Write] resource-groups:StartTagSyncTask. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.Tag">Tag</a></code> | <code>string</code> | [Tagging] resource-groups:Tag. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.UngroupResources">UngroupResources</a></code> | <code>string</code> | [Write] resource-groups:UngroupResources. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.Untag">Untag</a></code> | <code>string</code> | [Tagging] resource-groups:Untag. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string</code> | [Write] resource-groups:UpdateAccountSettings. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.UpdateGroup">UpdateGroup</a></code> | <code>string</code> | [Write] resource-groups:UpdateGroup. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.UpdateGroupQuery">UpdateGroupQuery</a></code> | <code>string</code> | [Write] resource-groups:UpdateGroupQuery. |

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] resource-groups:GetAccountSettings.

---

##### `actionGetGroup`<sup>Required</sup> <a name="actionGetGroup" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetGroup"></a>

```typescript
public readonly actionGetGroup: string;
```

- *Type:* string

[Read] resource-groups:GetGroup.

---

##### `actionGetGroupConfiguration`<sup>Required</sup> <a name="actionGetGroupConfiguration" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetGroupConfiguration"></a>

```typescript
public readonly actionGetGroupConfiguration: string;
```

- *Type:* string

[Read] resource-groups:GetGroupConfiguration.

---

##### `actionGetGroupPolicy`<sup>Required</sup> <a name="actionGetGroupPolicy" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetGroupPolicy"></a>

```typescript
public readonly actionGetGroupPolicy: string;
```

- *Type:* string

[Read] resource-groups:GetGroupPolicy.

---

##### `actionGetGroupQuery`<sup>Required</sup> <a name="actionGetGroupQuery" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetGroupQuery"></a>

```typescript
public readonly actionGetGroupQuery: string;
```

- *Type:* string

[Read] resource-groups:GetGroupQuery.

---

##### `actionGetTags`<sup>Required</sup> <a name="actionGetTags" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetTags"></a>

```typescript
public readonly actionGetTags: string;
```

- *Type:* string

[Read] resource-groups:GetTags.

---

##### `actionGetTagSyncTask`<sup>Required</sup> <a name="actionGetTagSyncTask" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.actionGetTagSyncTask"></a>

```typescript
public readonly actionGetTagSyncTask: string;
```

- *Type:* string

[Read] resource-groups:GetTagSyncTask.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateResource`<sup>Required</sup> <a name="AssociateResource" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.AssociateResource"></a>

```typescript
public readonly AssociateResource: string;
```

- *Type:* string

[Write] resource-groups:AssociateResource.

---

##### `CancelTagSyncTask`<sup>Required</sup> <a name="CancelTagSyncTask" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.CancelTagSyncTask"></a>

```typescript
public readonly CancelTagSyncTask: string;
```

- *Type:* string

[Write] resource-groups:CancelTagSyncTask.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] resource-groups:CreateGroup.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] resource-groups:DeleteGroup.

---

##### `DeleteGroupPolicy`<sup>Required</sup> <a name="DeleteGroupPolicy" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.DeleteGroupPolicy"></a>

```typescript
public readonly DeleteGroupPolicy: string;
```

- *Type:* string

[Write] resource-groups:DeleteGroupPolicy.

---

##### `DisassociateResource`<sup>Required</sup> <a name="DisassociateResource" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.DisassociateResource"></a>

```typescript
public readonly DisassociateResource: string;
```

- *Type:* string

[Write] resource-groups:DisassociateResource.

---

##### `GroupResources`<sup>Required</sup> <a name="GroupResources" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.GroupResources"></a>

```typescript
public readonly GroupResources: string;
```

- *Type:* string

[Write] resource-groups:GroupResources.

---

##### `ListGroupingStatuses`<sup>Required</sup> <a name="ListGroupingStatuses" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.ListGroupingStatuses"></a>

```typescript
public readonly ListGroupingStatuses: string;
```

- *Type:* string

[List] resource-groups:ListGroupingStatuses.

---

##### `ListGroupResources`<sup>Required</sup> <a name="ListGroupResources" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.ListGroupResources"></a>

```typescript
public readonly ListGroupResources: string;
```

- *Type:* string

[List] resource-groups:ListGroupResources.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] resource-groups:ListGroups.

---

##### `ListResourceTypes`<sup>Required</sup> <a name="ListResourceTypes" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.ListResourceTypes"></a>

```typescript
public readonly ListResourceTypes: string;
```

- *Type:* string

[List] resource-groups:ListResourceTypes.

---

##### `ListTagSyncTasks`<sup>Required</sup> <a name="ListTagSyncTasks" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.ListTagSyncTasks"></a>

```typescript
public readonly ListTagSyncTasks: string;
```

- *Type:* string

[List] resource-groups:ListTagSyncTasks.

---

##### `PutGroupConfiguration`<sup>Required</sup> <a name="PutGroupConfiguration" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.PutGroupConfiguration"></a>

```typescript
public readonly PutGroupConfiguration: string;
```

- *Type:* string

[Write] resource-groups:PutGroupConfiguration.

---

##### `PutGroupPolicy`<sup>Required</sup> <a name="PutGroupPolicy" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.PutGroupPolicy"></a>

```typescript
public readonly PutGroupPolicy: string;
```

- *Type:* string

[Write] resource-groups:PutGroupPolicy.

---

##### `SearchResources`<sup>Required</sup> <a name="SearchResources" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.SearchResources"></a>

```typescript
public readonly SearchResources: string;
```

- *Type:* string

[List] resource-groups:SearchResources.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartTagSyncTask`<sup>Required</sup> <a name="StartTagSyncTask" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.StartTagSyncTask"></a>

```typescript
public readonly StartTagSyncTask: string;
```

- *Type:* string

[Write] resource-groups:StartTagSyncTask.

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.Tag"></a>

```typescript
public readonly Tag: string;
```

- *Type:* string

[Tagging] resource-groups:Tag.

---

##### `UngroupResources`<sup>Required</sup> <a name="UngroupResources" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.UngroupResources"></a>

```typescript
public readonly UngroupResources: string;
```

- *Type:* string

[Write] resource-groups:UngroupResources.

---

##### `Untag`<sup>Required</sup> <a name="Untag" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.Untag"></a>

```typescript
public readonly Untag: string;
```

- *Type:* string

[Tagging] resource-groups:Untag.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string;
```

- *Type:* string

[Write] resource-groups:UpdateAccountSettings.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string;
```

- *Type:* string

[Write] resource-groups:UpdateGroup.

---

##### `UpdateGroupQuery`<sup>Required</sup> <a name="UpdateGroupQuery" id="@cdk_utils/iam.resource_groups.ResourceGroupsActions.property.UpdateGroupQuery"></a>

```typescript
public readonly UpdateGroupQuery: string;
```

- *Type:* string

[Write] resource-groups:UpdateGroupQuery.

---

### ResourceGroupsConditions <a name="ResourceGroupsConditions" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions"></a>

Condition key constants and builders for resource-groups.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.Initializer"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

new resource_groups.ResourceGroupsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.requestTag"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

resource_groups.ResourceGroupsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.resourceTag"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

resource_groups.ResourceGroupsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.tagKeys"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

resource_groups.ResourceGroupsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.CreateGroupConditionKeys">CreateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGroup action. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.TagConditionKeys">TagConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Tag action. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.UntagConditionKeys">UntagConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Untag action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateGroupConditionKeys`<sup>Required</sup> <a name="CreateGroupConditionKeys" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.CreateGroupConditionKeys"></a>

```typescript
public readonly CreateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGroup action.

---

##### `TagConditionKeys`<sup>Required</sup> <a name="TagConditionKeys" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.TagConditionKeys"></a>

```typescript
public readonly TagConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Tag action.

---

##### `UntagConditionKeys`<sup>Required</sup> <a name="UntagConditionKeys" id="@cdk_utils/iam.resource_groups.ResourceGroupsConditions.property.UntagConditionKeys"></a>

```typescript
public readonly UntagConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Untag action.

---

### ResourceGroupsOperations <a name="ResourceGroupsOperations" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations"></a>

API operation to required IAM actions mapping for resource-groups.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.Initializer"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

new resource_groups.ResourceGroupsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.CancelTagSyncTask">CancelTagSyncTask</a></code> | <code>string[]</code> | IAM actions required for the CancelTagSyncTask API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.CreateGroup">CreateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGroup API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.GroupResources">GroupResources</a></code> | <code>string[]</code> | IAM actions required for the GroupResources API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.ListGroupingStatuses">ListGroupingStatuses</a></code> | <code>string[]</code> | IAM actions required for the ListGroupingStatuses API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.ListGroupResources">ListGroupResources</a></code> | <code>string[]</code> | IAM actions required for the ListGroupResources API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.ListGroups">ListGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGroups API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.ListTagSyncTasks">ListTagSyncTasks</a></code> | <code>string[]</code> | IAM actions required for the ListTagSyncTasks API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetAccountSettings">opGetAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetGroup">opGetGroup</a></code> | <code>string[]</code> | IAM actions required for the GetGroup API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetGroupConfiguration">opGetGroupConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetGroupConfiguration API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetGroupQuery">opGetGroupQuery</a></code> | <code>string[]</code> | IAM actions required for the GetGroupQuery API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetTags">opGetTags</a></code> | <code>string[]</code> | IAM actions required for the GetTags API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetTagSyncTask">opGetTagSyncTask</a></code> | <code>string[]</code> | IAM actions required for the GetTagSyncTask API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.PutGroupConfiguration">PutGroupConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutGroupConfiguration API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.SearchResources">SearchResources</a></code> | <code>string[]</code> | IAM actions required for the SearchResources API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.StartTagSyncTask">StartTagSyncTask</a></code> | <code>string[]</code> | IAM actions required for the StartTagSyncTask API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.Tag">Tag</a></code> | <code>string[]</code> | IAM actions required for the Tag API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.UngroupResources">UngroupResources</a></code> | <code>string[]</code> | IAM actions required for the UngroupResources API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.Untag">Untag</a></code> | <code>string[]</code> | IAM actions required for the Untag API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.UpdateGroup">UpdateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroup API call. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.UpdateGroupQuery">UpdateGroupQuery</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroupQuery API call. |

---

##### `CancelTagSyncTask`<sup>Required</sup> <a name="CancelTagSyncTask" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.CancelTagSyncTask"></a>

```typescript
public readonly CancelTagSyncTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelTagSyncTask API call.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroup API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `GroupResources`<sup>Required</sup> <a name="GroupResources" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.GroupResources"></a>

```typescript
public readonly GroupResources: string[];
```

- *Type:* string[]

IAM actions required for the GroupResources API call.

---

##### `ListGroupingStatuses`<sup>Required</sup> <a name="ListGroupingStatuses" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.ListGroupingStatuses"></a>

```typescript
public readonly ListGroupingStatuses: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupingStatuses API call.

---

##### `ListGroupResources`<sup>Required</sup> <a name="ListGroupResources" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.ListGroupResources"></a>

```typescript
public readonly ListGroupResources: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupResources API call.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.ListGroups"></a>

```typescript
public readonly ListGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGroups API call.

---

##### `ListTagSyncTasks`<sup>Required</sup> <a name="ListTagSyncTasks" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.ListTagSyncTasks"></a>

```typescript
public readonly ListTagSyncTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListTagSyncTasks API call.

---

##### `opGetAccountSettings`<sup>Required</sup> <a name="opGetAccountSettings" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetAccountSettings"></a>

```typescript
public readonly opGetAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSettings API call.

---

##### `opGetGroup`<sup>Required</sup> <a name="opGetGroup" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetGroup"></a>

```typescript
public readonly opGetGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetGroup API call.

---

##### `opGetGroupConfiguration`<sup>Required</sup> <a name="opGetGroupConfiguration" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetGroupConfiguration"></a>

```typescript
public readonly opGetGroupConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetGroupConfiguration API call.

---

##### `opGetGroupQuery`<sup>Required</sup> <a name="opGetGroupQuery" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetGroupQuery"></a>

```typescript
public readonly opGetGroupQuery: string[];
```

- *Type:* string[]

IAM actions required for the GetGroupQuery API call.

---

##### `opGetTags`<sup>Required</sup> <a name="opGetTags" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetTags"></a>

```typescript
public readonly opGetTags: string[];
```

- *Type:* string[]

IAM actions required for the GetTags API call.

---

##### `opGetTagSyncTask`<sup>Required</sup> <a name="opGetTagSyncTask" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.opGetTagSyncTask"></a>

```typescript
public readonly opGetTagSyncTask: string[];
```

- *Type:* string[]

IAM actions required for the GetTagSyncTask API call.

---

##### `PutGroupConfiguration`<sup>Required</sup> <a name="PutGroupConfiguration" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.PutGroupConfiguration"></a>

```typescript
public readonly PutGroupConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutGroupConfiguration API call.

---

##### `SearchResources`<sup>Required</sup> <a name="SearchResources" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.SearchResources"></a>

```typescript
public readonly SearchResources: string[];
```

- *Type:* string[]

IAM actions required for the SearchResources API call.

---

##### `StartTagSyncTask`<sup>Required</sup> <a name="StartTagSyncTask" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.StartTagSyncTask"></a>

```typescript
public readonly StartTagSyncTask: string[];
```

- *Type:* string[]

IAM actions required for the StartTagSyncTask API call.

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.Tag"></a>

```typescript
public readonly Tag: string[];
```

- *Type:* string[]

IAM actions required for the Tag API call.

---

##### `UngroupResources`<sup>Required</sup> <a name="UngroupResources" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.UngroupResources"></a>

```typescript
public readonly UngroupResources: string[];
```

- *Type:* string[]

IAM actions required for the UngroupResources API call.

---

##### `Untag`<sup>Required</sup> <a name="Untag" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.Untag"></a>

```typescript
public readonly Untag: string[];
```

- *Type:* string[]

IAM actions required for the Untag API call.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountSettings API call.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroup API call.

---

##### `UpdateGroupQuery`<sup>Required</sup> <a name="UpdateGroupQuery" id="@cdk_utils/iam.resource_groups.ResourceGroupsOperations.property.UpdateGroupQuery"></a>

```typescript
public readonly UpdateGroupQuery: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroupQuery API call.

---

### ResourceGroupsResources <a name="ResourceGroupsResources" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources"></a>

ARN builders, validators, and parsers for resource-groups resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.Initializer"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

new resource_groups.ResourceGroupsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsResources.group">group</a></code> | Builds an ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsResources.isValidGroupArn">isValidGroupArn</a></code> | Validates whether a string is a valid ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsResources.isValidTagSyncTaskArn">isValidTagSyncTaskArn</a></code> | Validates whether a string is a valid ARN for the tagSyncTask resource. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsResources.parseGroupArn">parseGroupArn</a></code> | Parses a group ARN into its components. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsResources.parseTagSyncTaskArn">parseTagSyncTaskArn</a></code> | Parses a tagSyncTask ARN into its components. |
| <code><a href="#@cdk_utils/iam.resource_groups.ResourceGroupsResources.tagSyncTask">tagSyncTask</a></code> | Builds an ARN for the tagSyncTask resource. |

---

##### `group` <a name="group" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.group"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

resource_groups.ResourceGroupsResources.group(props: ResourceGroupsGroupArnProps)
```

Builds an ARN for the group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.group.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resource_groups.ResourceGroupsGroupArnProps">ResourceGroupsGroupArnProps</a>

---

##### `isValidGroupArn` <a name="isValidGroupArn" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.isValidGroupArn"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

resource_groups.ResourceGroupsResources.isValidGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.isValidGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTagSyncTaskArn` <a name="isValidTagSyncTaskArn" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.isValidTagSyncTaskArn"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

resource_groups.ResourceGroupsResources.isValidTagSyncTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the tagSyncTask resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.isValidTagSyncTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupArn` <a name="parseGroupArn" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.parseGroupArn"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

resource_groups.ResourceGroupsResources.parseGroupArn(arn: string)
```

Parses a group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.parseGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTagSyncTaskArn` <a name="parseTagSyncTaskArn" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.parseTagSyncTaskArn"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

resource_groups.ResourceGroupsResources.parseTagSyncTaskArn(arn: string)
```

Parses a tagSyncTask ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.parseTagSyncTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `tagSyncTask` <a name="tagSyncTask" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.tagSyncTask"></a>

```typescript
import { resource_groups } from '@cdk_utils/iam'

resource_groups.ResourceGroupsResources.tagSyncTask(props: ResourceGroupsTagSyncTaskArnProps)
```

Builds an ARN for the tagSyncTask resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resource_groups.ResourceGroupsResources.tagSyncTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resource_groups.ResourceGroupsTagSyncTaskArnProps">ResourceGroupsTagSyncTaskArnProps</a>

---




