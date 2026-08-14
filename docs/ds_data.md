# `ds_data` Submodule <a name="`ds_data` Submodule" id="@cdk_utils/iam.ds_data"></a>


## Structs <a name="Structs" id="Structs"></a>

### DsDataDirectoryArnComponents <a name="DsDataDirectoryArnComponents" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnComponents"></a>

Parsed components of a directory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnComponents.Initializer"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

const dsDataDirectoryArnComponents: ds_data.DsDataDirectoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataDirectoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataDirectoryArnComponents.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataDirectoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataDirectoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnComponents.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DsDataDirectoryArnProps <a name="DsDataDirectoryArnProps" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnProps"></a>

Properties for building a directory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnProps.Initializer"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

const dsDataDirectoryArnProps: ds_data.DsDataDirectoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataDirectoryArnProps.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataDirectoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataDirectoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataDirectoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnProps.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ds_data.DsDataDirectoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DsDataActions <a name="DsDataActions" id="@cdk_utils/iam.ds_data.DsDataActions"></a>

IAM action constants for the ds-data service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ds_data.DsDataActions.Initializer"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

new ds_data.DsDataActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.AddGroupMember">AddGroupMember</a></code> | <code>string</code> | [Write] ds-data:AddGroupMember. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] ds-data:CreateGroup. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] ds-data:CreateUser. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] ds-data:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] ds-data:DeleteUser. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.DescribeGroup">DescribeGroup</a></code> | <code>string</code> | [Read] ds-data:DescribeGroup. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.DescribeUser">DescribeUser</a></code> | <code>string</code> | [Read] ds-data:DescribeUser. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.DisableUser">DisableUser</a></code> | <code>string</code> | [Write] ds-data:DisableUser. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.ListGroupMembers">ListGroupMembers</a></code> | <code>string</code> | [List] ds-data:ListGroupMembers. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] ds-data:ListGroups. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.ListGroupsForMember">ListGroupsForMember</a></code> | <code>string</code> | [List] ds-data:ListGroupsForMember. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] ds-data:ListUsers. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.RemoveGroupMember">RemoveGroupMember</a></code> | <code>string</code> | [Write] ds-data:RemoveGroupMember. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.SearchGroups">SearchGroups</a></code> | <code>string</code> | [Read] ds-data:SearchGroups. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.SearchUsers">SearchUsers</a></code> | <code>string</code> | [Read] ds-data:SearchUsers. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.UpdateGroup">UpdateGroup</a></code> | <code>string</code> | [Write] ds-data:UpdateGroup. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] ds-data:UpdateUser. |

---

##### `AddGroupMember`<sup>Required</sup> <a name="AddGroupMember" id="@cdk_utils/iam.ds_data.DsDataActions.property.AddGroupMember"></a>

```typescript
public readonly AddGroupMember: string;
```

- *Type:* string

[Write] ds-data:AddGroupMember.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ds_data.DsDataActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ds_data.DsDataActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ds_data.DsDataActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ds_data.DsDataActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ds_data.DsDataActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.ds_data.DsDataActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] ds-data:CreateGroup.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.ds_data.DsDataActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] ds-data:CreateUser.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.ds_data.DsDataActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] ds-data:DeleteGroup.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.ds_data.DsDataActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] ds-data:DeleteUser.

---

##### `DescribeGroup`<sup>Required</sup> <a name="DescribeGroup" id="@cdk_utils/iam.ds_data.DsDataActions.property.DescribeGroup"></a>

```typescript
public readonly DescribeGroup: string;
```

- *Type:* string

[Read] ds-data:DescribeGroup.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.ds_data.DsDataActions.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string;
```

- *Type:* string

[Read] ds-data:DescribeUser.

---

##### `DisableUser`<sup>Required</sup> <a name="DisableUser" id="@cdk_utils/iam.ds_data.DsDataActions.property.DisableUser"></a>

```typescript
public readonly DisableUser: string;
```

- *Type:* string

[Write] ds-data:DisableUser.

---

##### `ListGroupMembers`<sup>Required</sup> <a name="ListGroupMembers" id="@cdk_utils/iam.ds_data.DsDataActions.property.ListGroupMembers"></a>

```typescript
public readonly ListGroupMembers: string;
```

- *Type:* string

[List] ds-data:ListGroupMembers.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.ds_data.DsDataActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] ds-data:ListGroups.

---

##### `ListGroupsForMember`<sup>Required</sup> <a name="ListGroupsForMember" id="@cdk_utils/iam.ds_data.DsDataActions.property.ListGroupsForMember"></a>

```typescript
public readonly ListGroupsForMember: string;
```

- *Type:* string

[List] ds-data:ListGroupsForMember.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.ds_data.DsDataActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] ds-data:ListUsers.

---

##### `RemoveGroupMember`<sup>Required</sup> <a name="RemoveGroupMember" id="@cdk_utils/iam.ds_data.DsDataActions.property.RemoveGroupMember"></a>

```typescript
public readonly RemoveGroupMember: string;
```

- *Type:* string

[Write] ds-data:RemoveGroupMember.

---

##### `SearchGroups`<sup>Required</sup> <a name="SearchGroups" id="@cdk_utils/iam.ds_data.DsDataActions.property.SearchGroups"></a>

```typescript
public readonly SearchGroups: string;
```

- *Type:* string

[Read] ds-data:SearchGroups.

---

##### `SearchUsers`<sup>Required</sup> <a name="SearchUsers" id="@cdk_utils/iam.ds_data.DsDataActions.property.SearchUsers"></a>

```typescript
public readonly SearchUsers: string;
```

- *Type:* string

[Read] ds-data:SearchUsers.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ds_data.DsDataActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.ds_data.DsDataActions.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string;
```

- *Type:* string

[Write] ds-data:UpdateGroup.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.ds_data.DsDataActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] ds-data:UpdateUser.

---

### DsDataConditions <a name="DsDataConditions" id="@cdk_utils/iam.ds_data.DsDataConditions"></a>

Condition key constants and builders for ds-data.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ds_data.DsDataConditions.Initializer"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

new ds_data.DsDataConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.identifier">identifier</a></code> | Generates a condition block for `ds-data:Identifier`. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.memberName">memberName</a></code> | Generates a condition block for `ds-data:MemberName`. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.memberRealm">memberRealm</a></code> | Generates a condition block for `ds-data:MemberRealm`. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.realm">realm</a></code> | Generates a condition block for `ds-data:Realm`. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.samAccountName">samAccountName</a></code> | Generates a condition block for `ds-data:SAMAccountName`. |

---

##### `identifier` <a name="identifier" id="@cdk_utils/iam.ds_data.DsDataConditions.identifier"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

ds_data.DsDataConditions.identifier(value: string)
```

Generates a condition block for `ds-data:Identifier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ds_data.DsDataConditions.identifier.parameter.value"></a>

- *Type:* string

---

##### `memberName` <a name="memberName" id="@cdk_utils/iam.ds_data.DsDataConditions.memberName"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

ds_data.DsDataConditions.memberName(value: string)
```

Generates a condition block for `ds-data:MemberName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ds_data.DsDataConditions.memberName.parameter.value"></a>

- *Type:* string

---

##### `memberRealm` <a name="memberRealm" id="@cdk_utils/iam.ds_data.DsDataConditions.memberRealm"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

ds_data.DsDataConditions.memberRealm(value: string)
```

Generates a condition block for `ds-data:MemberRealm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ds_data.DsDataConditions.memberRealm.parameter.value"></a>

- *Type:* string

---

##### `realm` <a name="realm" id="@cdk_utils/iam.ds_data.DsDataConditions.realm"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

ds_data.DsDataConditions.realm(value: string)
```

Generates a condition block for `ds-data:Realm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ds_data.DsDataConditions.realm.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ds_data.DsDataConditions.resourceTag"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

ds_data.DsDataConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ds_data.DsDataConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `samAccountName` <a name="samAccountName" id="@cdk_utils/iam.ds_data.DsDataConditions.samAccountName"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

ds_data.DsDataConditions.samAccountName(value: string)
```

Generates a condition block for `ds-data:SAMAccountName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ds_data.DsDataConditions.samAccountName.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.AddGroupMemberConditionKeys">AddGroupMemberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddGroupMember action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.CreateGroupConditionKeys">CreateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGroup action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.CreateUserConditionKeys">CreateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUser action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.DeleteGroupConditionKeys">DeleteGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteGroup action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.DeleteUserConditionKeys">DeleteUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUser action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.DescribeGroupConditionKeys">DescribeGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeGroup action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.DescribeUserConditionKeys">DescribeUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeUser action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.DisableUserConditionKeys">DisableUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisableUser action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.IDENTIFIER">IDENTIFIER</a></code> | <code>string</code> | Condition key: ds-data:Identifier (String). |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.ListGroupMembersConditionKeys">ListGroupMembersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListGroupMembers action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.ListGroupsConditionKeys">ListGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListGroups action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.ListGroupsForMemberConditionKeys">ListGroupsForMemberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListGroupsForMember action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.ListUsersConditionKeys">ListUsersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListUsers action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.MEMBER_NAME">MEMBER_NAME</a></code> | <code>string</code> | Condition key: ds-data:MemberName (String). |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.MEMBER_REALM">MEMBER_REALM</a></code> | <code>string</code> | Condition key: ds-data:MemberRealm (String). |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.REALM">REALM</a></code> | <code>string</code> | Condition key: ds-data:Realm (String). |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.RemoveGroupMemberConditionKeys">RemoveGroupMemberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveGroupMember action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.SAM_ACCOUNT_NAME">SAM_ACCOUNT_NAME</a></code> | <code>string</code> | Condition key: ds-data:SAMAccountName (String). |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.SearchGroupsConditionKeys">SearchGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchGroups action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.SearchUsersConditionKeys">SearchUsersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchUsers action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.UpdateGroupConditionKeys">UpdateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateGroup action. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataConditions.property.UpdateUserConditionKeys">UpdateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUser action. |

---

##### `AddGroupMemberConditionKeys`<sup>Required</sup> <a name="AddGroupMemberConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.AddGroupMemberConditionKeys"></a>

```typescript
public readonly AddGroupMemberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddGroupMember action.

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ds_data.DsDataConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `CreateGroupConditionKeys`<sup>Required</sup> <a name="CreateGroupConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.CreateGroupConditionKeys"></a>

```typescript
public readonly CreateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGroup action.

---

##### `CreateUserConditionKeys`<sup>Required</sup> <a name="CreateUserConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.CreateUserConditionKeys"></a>

```typescript
public readonly CreateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUser action.

---

##### `DeleteGroupConditionKeys`<sup>Required</sup> <a name="DeleteGroupConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.DeleteGroupConditionKeys"></a>

```typescript
public readonly DeleteGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteGroup action.

---

##### `DeleteUserConditionKeys`<sup>Required</sup> <a name="DeleteUserConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.DeleteUserConditionKeys"></a>

```typescript
public readonly DeleteUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUser action.

---

##### `DescribeGroupConditionKeys`<sup>Required</sup> <a name="DescribeGroupConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.DescribeGroupConditionKeys"></a>

```typescript
public readonly DescribeGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeGroup action.

---

##### `DescribeUserConditionKeys`<sup>Required</sup> <a name="DescribeUserConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.DescribeUserConditionKeys"></a>

```typescript
public readonly DescribeUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeUser action.

---

##### `DisableUserConditionKeys`<sup>Required</sup> <a name="DisableUserConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.DisableUserConditionKeys"></a>

```typescript
public readonly DisableUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisableUser action.

---

##### `IDENTIFIER`<sup>Required</sup> <a name="IDENTIFIER" id="@cdk_utils/iam.ds_data.DsDataConditions.property.IDENTIFIER"></a>

```typescript
public readonly IDENTIFIER: string;
```

- *Type:* string

Condition key: ds-data:Identifier (String).

---

##### `ListGroupMembersConditionKeys`<sup>Required</sup> <a name="ListGroupMembersConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.ListGroupMembersConditionKeys"></a>

```typescript
public readonly ListGroupMembersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListGroupMembers action.

---

##### `ListGroupsConditionKeys`<sup>Required</sup> <a name="ListGroupsConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.ListGroupsConditionKeys"></a>

```typescript
public readonly ListGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListGroups action.

---

##### `ListGroupsForMemberConditionKeys`<sup>Required</sup> <a name="ListGroupsForMemberConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.ListGroupsForMemberConditionKeys"></a>

```typescript
public readonly ListGroupsForMemberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListGroupsForMember action.

---

##### `ListUsersConditionKeys`<sup>Required</sup> <a name="ListUsersConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.ListUsersConditionKeys"></a>

```typescript
public readonly ListUsersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListUsers action.

---

##### `MEMBER_NAME`<sup>Required</sup> <a name="MEMBER_NAME" id="@cdk_utils/iam.ds_data.DsDataConditions.property.MEMBER_NAME"></a>

```typescript
public readonly MEMBER_NAME: string;
```

- *Type:* string

Condition key: ds-data:MemberName (String).

---

##### `MEMBER_REALM`<sup>Required</sup> <a name="MEMBER_REALM" id="@cdk_utils/iam.ds_data.DsDataConditions.property.MEMBER_REALM"></a>

```typescript
public readonly MEMBER_REALM: string;
```

- *Type:* string

Condition key: ds-data:MemberRealm (String).

---

##### `REALM`<sup>Required</sup> <a name="REALM" id="@cdk_utils/iam.ds_data.DsDataConditions.property.REALM"></a>

```typescript
public readonly REALM: string;
```

- *Type:* string

Condition key: ds-data:Realm (String).

---

##### `RemoveGroupMemberConditionKeys`<sup>Required</sup> <a name="RemoveGroupMemberConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.RemoveGroupMemberConditionKeys"></a>

```typescript
public readonly RemoveGroupMemberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveGroupMember action.

---

##### `SAM_ACCOUNT_NAME`<sup>Required</sup> <a name="SAM_ACCOUNT_NAME" id="@cdk_utils/iam.ds_data.DsDataConditions.property.SAM_ACCOUNT_NAME"></a>

```typescript
public readonly SAM_ACCOUNT_NAME: string;
```

- *Type:* string

Condition key: ds-data:SAMAccountName (String).

---

##### `SearchGroupsConditionKeys`<sup>Required</sup> <a name="SearchGroupsConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.SearchGroupsConditionKeys"></a>

```typescript
public readonly SearchGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchGroups action.

---

##### `SearchUsersConditionKeys`<sup>Required</sup> <a name="SearchUsersConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.SearchUsersConditionKeys"></a>

```typescript
public readonly SearchUsersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchUsers action.

---

##### `UpdateGroupConditionKeys`<sup>Required</sup> <a name="UpdateGroupConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.UpdateGroupConditionKeys"></a>

```typescript
public readonly UpdateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateGroup action.

---

##### `UpdateUserConditionKeys`<sup>Required</sup> <a name="UpdateUserConditionKeys" id="@cdk_utils/iam.ds_data.DsDataConditions.property.UpdateUserConditionKeys"></a>

```typescript
public readonly UpdateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUser action.

---

### DsDataOperations <a name="DsDataOperations" id="@cdk_utils/iam.ds_data.DsDataOperations"></a>

API operation to required IAM actions mapping for ds-data.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ds_data.DsDataOperations.Initializer"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

new ds_data.DsDataOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.AddGroupMember">AddGroupMember</a></code> | <code>string[]</code> | IAM actions required for the AddGroupMember API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.CreateGroup">CreateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGroup API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.DescribeGroup">DescribeGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeGroup API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.DescribeUser">DescribeUser</a></code> | <code>string[]</code> | IAM actions required for the DescribeUser API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.DisableUser">DisableUser</a></code> | <code>string[]</code> | IAM actions required for the DisableUser API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.ListGroupMembers">ListGroupMembers</a></code> | <code>string[]</code> | IAM actions required for the ListGroupMembers API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.ListGroups">ListGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGroups API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.ListGroupsForMember">ListGroupsForMember</a></code> | <code>string[]</code> | IAM actions required for the ListGroupsForMember API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.RemoveGroupMember">RemoveGroupMember</a></code> | <code>string[]</code> | IAM actions required for the RemoveGroupMember API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.SearchGroups">SearchGroups</a></code> | <code>string[]</code> | IAM actions required for the SearchGroups API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.SearchUsers">SearchUsers</a></code> | <code>string[]</code> | IAM actions required for the SearchUsers API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.UpdateGroup">UpdateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroup API call. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |

---

##### `AddGroupMember`<sup>Required</sup> <a name="AddGroupMember" id="@cdk_utils/iam.ds_data.DsDataOperations.property.AddGroupMember"></a>

```typescript
public readonly AddGroupMember: string[];
```

- *Type:* string[]

IAM actions required for the AddGroupMember API call.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.ds_data.DsDataOperations.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroup API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.ds_data.DsDataOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.ds_data.DsDataOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.ds_data.DsDataOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DescribeGroup`<sup>Required</sup> <a name="DescribeGroup" id="@cdk_utils/iam.ds_data.DsDataOperations.property.DescribeGroup"></a>

```typescript
public readonly DescribeGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGroup API call.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.ds_data.DsDataOperations.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUser API call.

---

##### `DisableUser`<sup>Required</sup> <a name="DisableUser" id="@cdk_utils/iam.ds_data.DsDataOperations.property.DisableUser"></a>

```typescript
public readonly DisableUser: string[];
```

- *Type:* string[]

IAM actions required for the DisableUser API call.

---

##### `ListGroupMembers`<sup>Required</sup> <a name="ListGroupMembers" id="@cdk_utils/iam.ds_data.DsDataOperations.property.ListGroupMembers"></a>

```typescript
public readonly ListGroupMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupMembers API call.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.ds_data.DsDataOperations.property.ListGroups"></a>

```typescript
public readonly ListGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGroups API call.

---

##### `ListGroupsForMember`<sup>Required</sup> <a name="ListGroupsForMember" id="@cdk_utils/iam.ds_data.DsDataOperations.property.ListGroupsForMember"></a>

```typescript
public readonly ListGroupsForMember: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupsForMember API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.ds_data.DsDataOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `RemoveGroupMember`<sup>Required</sup> <a name="RemoveGroupMember" id="@cdk_utils/iam.ds_data.DsDataOperations.property.RemoveGroupMember"></a>

```typescript
public readonly RemoveGroupMember: string[];
```

- *Type:* string[]

IAM actions required for the RemoveGroupMember API call.

---

##### `SearchGroups`<sup>Required</sup> <a name="SearchGroups" id="@cdk_utils/iam.ds_data.DsDataOperations.property.SearchGroups"></a>

```typescript
public readonly SearchGroups: string[];
```

- *Type:* string[]

IAM actions required for the SearchGroups API call.

---

##### `SearchUsers`<sup>Required</sup> <a name="SearchUsers" id="@cdk_utils/iam.ds_data.DsDataOperations.property.SearchUsers"></a>

```typescript
public readonly SearchUsers: string[];
```

- *Type:* string[]

IAM actions required for the SearchUsers API call.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.ds_data.DsDataOperations.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroup API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.ds_data.DsDataOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

### DsDataResources <a name="DsDataResources" id="@cdk_utils/iam.ds_data.DsDataResources"></a>

ARN builders, validators, and parsers for ds-data resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ds_data.DsDataResources.Initializer"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

new ds_data.DsDataResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataResources.directory">directory</a></code> | Builds an ARN for the directory resource. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataResources.isValidDirectoryArn">isValidDirectoryArn</a></code> | Validates whether a string is a valid ARN for the directory resource. |
| <code><a href="#@cdk_utils/iam.ds_data.DsDataResources.parseDirectoryArn">parseDirectoryArn</a></code> | Parses a directory ARN into its components. |

---

##### `directory` <a name="directory" id="@cdk_utils/iam.ds_data.DsDataResources.directory"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

ds_data.DsDataResources.directory(props: DsDataDirectoryArnProps)
```

Builds an ARN for the directory resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ds_data.DsDataResources.directory.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ds_data.DsDataDirectoryArnProps">DsDataDirectoryArnProps</a>

---

##### `isValidDirectoryArn` <a name="isValidDirectoryArn" id="@cdk_utils/iam.ds_data.DsDataResources.isValidDirectoryArn"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

ds_data.DsDataResources.isValidDirectoryArn(arn: string)
```

Validates whether a string is a valid ARN for the directory resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ds_data.DsDataResources.isValidDirectoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDirectoryArn` <a name="parseDirectoryArn" id="@cdk_utils/iam.ds_data.DsDataResources.parseDirectoryArn"></a>

```typescript
import { ds_data } from '@cdk_utils/iam'

ds_data.DsDataResources.parseDirectoryArn(arn: string)
```

Parses a directory ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ds_data.DsDataResources.parseDirectoryArn.parameter.arn"></a>

- *Type:* string

---




