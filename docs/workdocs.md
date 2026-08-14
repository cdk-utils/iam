# `workdocs` Submodule <a name="`workdocs` Submodule" id="@cdk_utils/iam.workdocs"></a>


## Structs <a name="Structs" id="Structs"></a>

### WorkDocsOrganizationArnComponents <a name="WorkDocsOrganizationArnComponents" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnComponents"></a>

Parsed components of a organization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnComponents.Initializer"></a>

```typescript
import { workdocs } from '@cdk_utils/iam'

const workDocsOrganizationArnComponents: workdocs.WorkDocsOrganizationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOrganizationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOrganizationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOrganizationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOrganizationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### WorkDocsOrganizationArnProps <a name="WorkDocsOrganizationArnProps" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps"></a>

Properties for building a organization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps.Initializer"></a>

```typescript
import { workdocs } from '@cdk_utils/iam'

const workDocsOrganizationArnProps: workdocs.WorkDocsOrganizationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### WorkDocsActions <a name="WorkDocsActions" id="@cdk_utils/iam.workdocs.WorkDocsActions"></a>

IAM action constants for the workdocs service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workdocs.WorkDocsActions.Initializer"></a>

```typescript
import { workdocs } from '@cdk_utils/iam'

new workdocs.WorkDocsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.AbortDocumentVersionUpload">AbortDocumentVersionUpload</a></code> | <code>string</code> | [Write] workdocs:AbortDocumentVersionUpload. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetCurrentUser">actionGetCurrentUser</a></code> | <code>string</code> | [Read] workdocs:GetCurrentUser. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetDocument">actionGetDocument</a></code> | <code>string</code> | [Read] workdocs:GetDocument. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetDocumentPath">actionGetDocumentPath</a></code> | <code>string</code> | [Read] workdocs:GetDocumentPath. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetDocumentVersion">actionGetDocumentVersion</a></code> | <code>string</code> | [Read] workdocs:GetDocumentVersion. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetFolder">actionGetFolder</a></code> | <code>string</code> | [Read] workdocs:GetFolder. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetFolderPath">actionGetFolderPath</a></code> | <code>string</code> | [Read] workdocs:GetFolderPath. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetGroup">actionGetGroup</a></code> | <code>string</code> | [Read] workdocs:GetGroup. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetResources">actionGetResources</a></code> | <code>string</code> | [Read] workdocs:GetResources. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.ActivateUser">ActivateUser</a></code> | <code>string</code> | [Write] workdocs:ActivateUser. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.AddNotificationPermissions">AddNotificationPermissions</a></code> | <code>string</code> | [Write] workdocs:AddNotificationPermissions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.AddResourcePermissions">AddResourcePermissions</a></code> | <code>string</code> | [Write] workdocs:AddResourcePermissions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.AddUserToGroup">AddUserToGroup</a></code> | <code>string</code> | [Write] workdocs:AddUserToGroup. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.CheckAlias">CheckAlias</a></code> | <code>string</code> | [Read] workdocs:CheckAlias. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateComment">CreateComment</a></code> | <code>string</code> | [Write] workdocs:CreateComment. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateCustomMetadata">CreateCustomMetadata</a></code> | <code>string</code> | [Write] workdocs:CreateCustomMetadata. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateFolder">CreateFolder</a></code> | <code>string</code> | [Write] workdocs:CreateFolder. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateInstance">CreateInstance</a></code> | <code>string</code> | [Write] workdocs:CreateInstance. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateLabels">CreateLabels</a></code> | <code>string</code> | [Write] workdocs:CreateLabels. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateNotificationSubscription">CreateNotificationSubscription</a></code> | <code>string</code> | [Write] workdocs:CreateNotificationSubscription. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] workdocs:CreateUser. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeactivateUser">DeactivateUser</a></code> | <code>string</code> | [Write] workdocs:DeactivateUser. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteComment">DeleteComment</a></code> | <code>string</code> | [Write] workdocs:DeleteComment. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteCustomMetadata">DeleteCustomMetadata</a></code> | <code>string</code> | [Write] workdocs:DeleteCustomMetadata. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteDocument">DeleteDocument</a></code> | <code>string</code> | [Write] workdocs:DeleteDocument. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteDocumentVersion">DeleteDocumentVersion</a></code> | <code>string</code> | [Write] workdocs:DeleteDocumentVersion. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteFolder">DeleteFolder</a></code> | <code>string</code> | [Write] workdocs:DeleteFolder. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteFolderContents">DeleteFolderContents</a></code> | <code>string</code> | [Write] workdocs:DeleteFolderContents. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteInstance">DeleteInstance</a></code> | <code>string</code> | [Write] workdocs:DeleteInstance. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteLabels">DeleteLabels</a></code> | <code>string</code> | [Write] workdocs:DeleteLabels. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteNotificationPermissions">DeleteNotificationPermissions</a></code> | <code>string</code> | [Write] workdocs:DeleteNotificationPermissions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteNotificationSubscription">DeleteNotificationSubscription</a></code> | <code>string</code> | [Write] workdocs:DeleteNotificationSubscription. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] workdocs:DeleteUser. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DeregisterDirectory">DeregisterDirectory</a></code> | <code>string</code> | [Write] workdocs:DeregisterDirectory. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeActivities">DescribeActivities</a></code> | <code>string</code> | [List] workdocs:DescribeActivities. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeAvailableDirectories">DescribeAvailableDirectories</a></code> | <code>string</code> | [List] workdocs:DescribeAvailableDirectories. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeComments">DescribeComments</a></code> | <code>string</code> | [List] workdocs:DescribeComments. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeDocumentVersions">DescribeDocumentVersions</a></code> | <code>string</code> | [List] workdocs:DescribeDocumentVersions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeFolderContents">DescribeFolderContents</a></code> | <code>string</code> | [List] workdocs:DescribeFolderContents. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeGroups">DescribeGroups</a></code> | <code>string</code> | [List] workdocs:DescribeGroups. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeInstanceExports">DescribeInstanceExports</a></code> | <code>string</code> | [List] workdocs:DescribeInstanceExports. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeInstances">DescribeInstances</a></code> | <code>string</code> | [List] workdocs:DescribeInstances. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeNotificationPermissions">DescribeNotificationPermissions</a></code> | <code>string</code> | [List] workdocs:DescribeNotificationPermissions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeNotificationSubscriptions">DescribeNotificationSubscriptions</a></code> | <code>string</code> | [List] workdocs:DescribeNotificationSubscriptions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeResourcePermissions">DescribeResourcePermissions</a></code> | <code>string</code> | [List] workdocs:DescribeResourcePermissions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeRootFolders">DescribeRootFolders</a></code> | <code>string</code> | [List] workdocs:DescribeRootFolders. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeUsers">DescribeUsers</a></code> | <code>string</code> | [List] workdocs:DescribeUsers. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.DownloadDocumentVersion">DownloadDocumentVersion</a></code> | <code>string</code> | [Read] workdocs:DownloadDocumentVersion. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.InitiateDocumentVersionUpload">InitiateDocumentVersionUpload</a></code> | <code>string</code> | [Write] workdocs:InitiateDocumentVersionUpload. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.RegisterDirectory">RegisterDirectory</a></code> | <code>string</code> | [Write] workdocs:RegisterDirectory. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.RemoveAllResourcePermissions">RemoveAllResourcePermissions</a></code> | <code>string</code> | [Write] workdocs:RemoveAllResourcePermissions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.RemoveResourcePermission">RemoveResourcePermission</a></code> | <code>string</code> | [Write] workdocs:RemoveResourcePermission. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.RestoreDocumentVersions">RestoreDocumentVersions</a></code> | <code>string</code> | [Write] workdocs:RestoreDocumentVersions. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.SearchResources">SearchResources</a></code> | <code>string</code> | [List] workdocs:SearchResources. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.StartInstanceExport">StartInstanceExport</a></code> | <code>string</code> | [Write] workdocs:StartInstanceExport. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateDocument">UpdateDocument</a></code> | <code>string</code> | [Write] workdocs:UpdateDocument. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateDocumentVersion">UpdateDocumentVersion</a></code> | <code>string</code> | [Write] workdocs:UpdateDocumentVersion. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateFolder">UpdateFolder</a></code> | <code>string</code> | [Write] workdocs:UpdateFolder. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateInstanceAlias">UpdateInstanceAlias</a></code> | <code>string</code> | [Write] workdocs:UpdateInstanceAlias. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] workdocs:UpdateUser. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateUserAdministrativeSettings">UpdateUserAdministrativeSettings</a></code> | <code>string</code> | [Write] workdocs:UpdateUserAdministrativeSettings. |

---

##### `AbortDocumentVersionUpload`<sup>Required</sup> <a name="AbortDocumentVersionUpload" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.AbortDocumentVersionUpload"></a>

```typescript
public readonly AbortDocumentVersionUpload: string;
```

- *Type:* string

[Write] workdocs:AbortDocumentVersionUpload.

---

##### `actionGetCurrentUser`<sup>Required</sup> <a name="actionGetCurrentUser" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetCurrentUser"></a>

```typescript
public readonly actionGetCurrentUser: string;
```

- *Type:* string

[Read] workdocs:GetCurrentUser.

---

##### `actionGetDocument`<sup>Required</sup> <a name="actionGetDocument" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetDocument"></a>

```typescript
public readonly actionGetDocument: string;
```

- *Type:* string

[Read] workdocs:GetDocument.

---

##### `actionGetDocumentPath`<sup>Required</sup> <a name="actionGetDocumentPath" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetDocumentPath"></a>

```typescript
public readonly actionGetDocumentPath: string;
```

- *Type:* string

[Read] workdocs:GetDocumentPath.

---

##### `actionGetDocumentVersion`<sup>Required</sup> <a name="actionGetDocumentVersion" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetDocumentVersion"></a>

```typescript
public readonly actionGetDocumentVersion: string;
```

- *Type:* string

[Read] workdocs:GetDocumentVersion.

---

##### `actionGetFolder`<sup>Required</sup> <a name="actionGetFolder" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetFolder"></a>

```typescript
public readonly actionGetFolder: string;
```

- *Type:* string

[Read] workdocs:GetFolder.

---

##### `actionGetFolderPath`<sup>Required</sup> <a name="actionGetFolderPath" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetFolderPath"></a>

```typescript
public readonly actionGetFolderPath: string;
```

- *Type:* string

[Read] workdocs:GetFolderPath.

---

##### `actionGetGroup`<sup>Required</sup> <a name="actionGetGroup" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetGroup"></a>

```typescript
public readonly actionGetGroup: string;
```

- *Type:* string

[Read] workdocs:GetGroup.

---

##### `actionGetResources`<sup>Required</sup> <a name="actionGetResources" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.actionGetResources"></a>

```typescript
public readonly actionGetResources: string;
```

- *Type:* string

[Read] workdocs:GetResources.

---

##### `ActivateUser`<sup>Required</sup> <a name="ActivateUser" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.ActivateUser"></a>

```typescript
public readonly ActivateUser: string;
```

- *Type:* string

[Write] workdocs:ActivateUser.

---

##### `AddNotificationPermissions`<sup>Required</sup> <a name="AddNotificationPermissions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.AddNotificationPermissions"></a>

```typescript
public readonly AddNotificationPermissions: string;
```

- *Type:* string

[Write] workdocs:AddNotificationPermissions.

---

##### `AddResourcePermissions`<sup>Required</sup> <a name="AddResourcePermissions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.AddResourcePermissions"></a>

```typescript
public readonly AddResourcePermissions: string;
```

- *Type:* string

[Write] workdocs:AddResourcePermissions.

---

##### `AddUserToGroup`<sup>Required</sup> <a name="AddUserToGroup" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.AddUserToGroup"></a>

```typescript
public readonly AddUserToGroup: string;
```

- *Type:* string

[Write] workdocs:AddUserToGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CheckAlias`<sup>Required</sup> <a name="CheckAlias" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.CheckAlias"></a>

```typescript
public readonly CheckAlias: string;
```

- *Type:* string

[Read] workdocs:CheckAlias.

---

##### `CreateComment`<sup>Required</sup> <a name="CreateComment" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateComment"></a>

```typescript
public readonly CreateComment: string;
```

- *Type:* string

[Write] workdocs:CreateComment.

---

##### `CreateCustomMetadata`<sup>Required</sup> <a name="CreateCustomMetadata" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateCustomMetadata"></a>

```typescript
public readonly CreateCustomMetadata: string;
```

- *Type:* string

[Write] workdocs:CreateCustomMetadata.

---

##### `CreateFolder`<sup>Required</sup> <a name="CreateFolder" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateFolder"></a>

```typescript
public readonly CreateFolder: string;
```

- *Type:* string

[Write] workdocs:CreateFolder.

---

##### `CreateInstance`<sup>Required</sup> <a name="CreateInstance" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateInstance"></a>

```typescript
public readonly CreateInstance: string;
```

- *Type:* string

[Write] workdocs:CreateInstance.

---

##### `CreateLabels`<sup>Required</sup> <a name="CreateLabels" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateLabels"></a>

```typescript
public readonly CreateLabels: string;
```

- *Type:* string

[Write] workdocs:CreateLabels.

---

##### `CreateNotificationSubscription`<sup>Required</sup> <a name="CreateNotificationSubscription" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateNotificationSubscription"></a>

```typescript
public readonly CreateNotificationSubscription: string;
```

- *Type:* string

[Write] workdocs:CreateNotificationSubscription.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] workdocs:CreateUser.

---

##### `DeactivateUser`<sup>Required</sup> <a name="DeactivateUser" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeactivateUser"></a>

```typescript
public readonly DeactivateUser: string;
```

- *Type:* string

[Write] workdocs:DeactivateUser.

---

##### `DeleteComment`<sup>Required</sup> <a name="DeleteComment" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteComment"></a>

```typescript
public readonly DeleteComment: string;
```

- *Type:* string

[Write] workdocs:DeleteComment.

---

##### `DeleteCustomMetadata`<sup>Required</sup> <a name="DeleteCustomMetadata" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteCustomMetadata"></a>

```typescript
public readonly DeleteCustomMetadata: string;
```

- *Type:* string

[Write] workdocs:DeleteCustomMetadata.

---

##### `DeleteDocument`<sup>Required</sup> <a name="DeleteDocument" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteDocument"></a>

```typescript
public readonly DeleteDocument: string;
```

- *Type:* string

[Write] workdocs:DeleteDocument.

---

##### `DeleteDocumentVersion`<sup>Required</sup> <a name="DeleteDocumentVersion" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteDocumentVersion"></a>

```typescript
public readonly DeleteDocumentVersion: string;
```

- *Type:* string

[Write] workdocs:DeleteDocumentVersion.

---

##### `DeleteFolder`<sup>Required</sup> <a name="DeleteFolder" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteFolder"></a>

```typescript
public readonly DeleteFolder: string;
```

- *Type:* string

[Write] workdocs:DeleteFolder.

---

##### `DeleteFolderContents`<sup>Required</sup> <a name="DeleteFolderContents" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteFolderContents"></a>

```typescript
public readonly DeleteFolderContents: string;
```

- *Type:* string

[Write] workdocs:DeleteFolderContents.

---

##### `DeleteInstance`<sup>Required</sup> <a name="DeleteInstance" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteInstance"></a>

```typescript
public readonly DeleteInstance: string;
```

- *Type:* string

[Write] workdocs:DeleteInstance.

---

##### `DeleteLabels`<sup>Required</sup> <a name="DeleteLabels" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteLabels"></a>

```typescript
public readonly DeleteLabels: string;
```

- *Type:* string

[Write] workdocs:DeleteLabels.

---

##### `DeleteNotificationPermissions`<sup>Required</sup> <a name="DeleteNotificationPermissions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteNotificationPermissions"></a>

```typescript
public readonly DeleteNotificationPermissions: string;
```

- *Type:* string

[Write] workdocs:DeleteNotificationPermissions.

---

##### `DeleteNotificationSubscription`<sup>Required</sup> <a name="DeleteNotificationSubscription" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteNotificationSubscription"></a>

```typescript
public readonly DeleteNotificationSubscription: string;
```

- *Type:* string

[Write] workdocs:DeleteNotificationSubscription.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] workdocs:DeleteUser.

---

##### `DeregisterDirectory`<sup>Required</sup> <a name="DeregisterDirectory" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DeregisterDirectory"></a>

```typescript
public readonly DeregisterDirectory: string;
```

- *Type:* string

[Write] workdocs:DeregisterDirectory.

---

##### `DescribeActivities`<sup>Required</sup> <a name="DescribeActivities" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeActivities"></a>

```typescript
public readonly DescribeActivities: string;
```

- *Type:* string

[List] workdocs:DescribeActivities.

---

##### `DescribeAvailableDirectories`<sup>Required</sup> <a name="DescribeAvailableDirectories" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeAvailableDirectories"></a>

```typescript
public readonly DescribeAvailableDirectories: string;
```

- *Type:* string

[List] workdocs:DescribeAvailableDirectories.

---

##### `DescribeComments`<sup>Required</sup> <a name="DescribeComments" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeComments"></a>

```typescript
public readonly DescribeComments: string;
```

- *Type:* string

[List] workdocs:DescribeComments.

---

##### `DescribeDocumentVersions`<sup>Required</sup> <a name="DescribeDocumentVersions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeDocumentVersions"></a>

```typescript
public readonly DescribeDocumentVersions: string;
```

- *Type:* string

[List] workdocs:DescribeDocumentVersions.

---

##### `DescribeFolderContents`<sup>Required</sup> <a name="DescribeFolderContents" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeFolderContents"></a>

```typescript
public readonly DescribeFolderContents: string;
```

- *Type:* string

[List] workdocs:DescribeFolderContents.

---

##### `DescribeGroups`<sup>Required</sup> <a name="DescribeGroups" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeGroups"></a>

```typescript
public readonly DescribeGroups: string;
```

- *Type:* string

[List] workdocs:DescribeGroups.

---

##### `DescribeInstanceExports`<sup>Required</sup> <a name="DescribeInstanceExports" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeInstanceExports"></a>

```typescript
public readonly DescribeInstanceExports: string;
```

- *Type:* string

[List] workdocs:DescribeInstanceExports.

---

##### `DescribeInstances`<sup>Required</sup> <a name="DescribeInstances" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeInstances"></a>

```typescript
public readonly DescribeInstances: string;
```

- *Type:* string

[List] workdocs:DescribeInstances.

---

##### `DescribeNotificationPermissions`<sup>Required</sup> <a name="DescribeNotificationPermissions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeNotificationPermissions"></a>

```typescript
public readonly DescribeNotificationPermissions: string;
```

- *Type:* string

[List] workdocs:DescribeNotificationPermissions.

---

##### `DescribeNotificationSubscriptions`<sup>Required</sup> <a name="DescribeNotificationSubscriptions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeNotificationSubscriptions"></a>

```typescript
public readonly DescribeNotificationSubscriptions: string;
```

- *Type:* string

[List] workdocs:DescribeNotificationSubscriptions.

---

##### `DescribeResourcePermissions`<sup>Required</sup> <a name="DescribeResourcePermissions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeResourcePermissions"></a>

```typescript
public readonly DescribeResourcePermissions: string;
```

- *Type:* string

[List] workdocs:DescribeResourcePermissions.

---

##### `DescribeRootFolders`<sup>Required</sup> <a name="DescribeRootFolders" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeRootFolders"></a>

```typescript
public readonly DescribeRootFolders: string;
```

- *Type:* string

[List] workdocs:DescribeRootFolders.

---

##### `DescribeUsers`<sup>Required</sup> <a name="DescribeUsers" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DescribeUsers"></a>

```typescript
public readonly DescribeUsers: string;
```

- *Type:* string

[List] workdocs:DescribeUsers.

---

##### `DownloadDocumentVersion`<sup>Required</sup> <a name="DownloadDocumentVersion" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.DownloadDocumentVersion"></a>

```typescript
public readonly DownloadDocumentVersion: string;
```

- *Type:* string

[Read] workdocs:DownloadDocumentVersion.

---

##### `InitiateDocumentVersionUpload`<sup>Required</sup> <a name="InitiateDocumentVersionUpload" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.InitiateDocumentVersionUpload"></a>

```typescript
public readonly InitiateDocumentVersionUpload: string;
```

- *Type:* string

[Write] workdocs:InitiateDocumentVersionUpload.

---

##### `RegisterDirectory`<sup>Required</sup> <a name="RegisterDirectory" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.RegisterDirectory"></a>

```typescript
public readonly RegisterDirectory: string;
```

- *Type:* string

[Write] workdocs:RegisterDirectory.

---

##### `RemoveAllResourcePermissions`<sup>Required</sup> <a name="RemoveAllResourcePermissions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.RemoveAllResourcePermissions"></a>

```typescript
public readonly RemoveAllResourcePermissions: string;
```

- *Type:* string

[Write] workdocs:RemoveAllResourcePermissions.

---

##### `RemoveResourcePermission`<sup>Required</sup> <a name="RemoveResourcePermission" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.RemoveResourcePermission"></a>

```typescript
public readonly RemoveResourcePermission: string;
```

- *Type:* string

[Write] workdocs:RemoveResourcePermission.

---

##### `RestoreDocumentVersions`<sup>Required</sup> <a name="RestoreDocumentVersions" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.RestoreDocumentVersions"></a>

```typescript
public readonly RestoreDocumentVersions: string;
```

- *Type:* string

[Write] workdocs:RestoreDocumentVersions.

---

##### `SearchResources`<sup>Required</sup> <a name="SearchResources" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.SearchResources"></a>

```typescript
public readonly SearchResources: string;
```

- *Type:* string

[List] workdocs:SearchResources.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartInstanceExport`<sup>Required</sup> <a name="StartInstanceExport" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.StartInstanceExport"></a>

```typescript
public readonly StartInstanceExport: string;
```

- *Type:* string

[Write] workdocs:StartInstanceExport.

---

##### `UpdateDocument`<sup>Required</sup> <a name="UpdateDocument" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateDocument"></a>

```typescript
public readonly UpdateDocument: string;
```

- *Type:* string

[Write] workdocs:UpdateDocument.

---

##### `UpdateDocumentVersion`<sup>Required</sup> <a name="UpdateDocumentVersion" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateDocumentVersion"></a>

```typescript
public readonly UpdateDocumentVersion: string;
```

- *Type:* string

[Write] workdocs:UpdateDocumentVersion.

---

##### `UpdateFolder`<sup>Required</sup> <a name="UpdateFolder" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateFolder"></a>

```typescript
public readonly UpdateFolder: string;
```

- *Type:* string

[Write] workdocs:UpdateFolder.

---

##### `UpdateInstanceAlias`<sup>Required</sup> <a name="UpdateInstanceAlias" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateInstanceAlias"></a>

```typescript
public readonly UpdateInstanceAlias: string;
```

- *Type:* string

[Write] workdocs:UpdateInstanceAlias.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] workdocs:UpdateUser.

---

##### `UpdateUserAdministrativeSettings`<sup>Required</sup> <a name="UpdateUserAdministrativeSettings" id="@cdk_utils/iam.workdocs.WorkDocsActions.property.UpdateUserAdministrativeSettings"></a>

```typescript
public readonly UpdateUserAdministrativeSettings: string;
```

- *Type:* string

[Write] workdocs:UpdateUserAdministrativeSettings.

---

### WorkDocsOperations <a name="WorkDocsOperations" id="@cdk_utils/iam.workdocs.WorkDocsOperations"></a>

API operation to required IAM actions mapping for workdocs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workdocs.WorkDocsOperations.Initializer"></a>

```typescript
import { workdocs } from '@cdk_utils/iam'

new workdocs.WorkDocsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.AbortDocumentVersionUpload">AbortDocumentVersionUpload</a></code> | <code>string[]</code> | IAM actions required for the AbortDocumentVersionUpload API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.ActivateUser">ActivateUser</a></code> | <code>string[]</code> | IAM actions required for the ActivateUser API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.AddResourcePermissions">AddResourcePermissions</a></code> | <code>string[]</code> | IAM actions required for the AddResourcePermissions API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateComment">CreateComment</a></code> | <code>string[]</code> | IAM actions required for the CreateComment API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateCustomMetadata">CreateCustomMetadata</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomMetadata API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateFolder">CreateFolder</a></code> | <code>string[]</code> | IAM actions required for the CreateFolder API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateLabels">CreateLabels</a></code> | <code>string[]</code> | IAM actions required for the CreateLabels API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateNotificationSubscription">CreateNotificationSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateNotificationSubscription API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeactivateUser">DeactivateUser</a></code> | <code>string[]</code> | IAM actions required for the DeactivateUser API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteComment">DeleteComment</a></code> | <code>string[]</code> | IAM actions required for the DeleteComment API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteCustomMetadata">DeleteCustomMetadata</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomMetadata API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteDocument">DeleteDocument</a></code> | <code>string[]</code> | IAM actions required for the DeleteDocument API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteDocumentVersion">DeleteDocumentVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteDocumentVersion API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteFolder">DeleteFolder</a></code> | <code>string[]</code> | IAM actions required for the DeleteFolder API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteFolderContents">DeleteFolderContents</a></code> | <code>string[]</code> | IAM actions required for the DeleteFolderContents API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteLabels">DeleteLabels</a></code> | <code>string[]</code> | IAM actions required for the DeleteLabels API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteNotificationSubscription">DeleteNotificationSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotificationSubscription API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeActivities">DescribeActivities</a></code> | <code>string[]</code> | IAM actions required for the DescribeActivities API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeComments">DescribeComments</a></code> | <code>string[]</code> | IAM actions required for the DescribeComments API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeDocumentVersions">DescribeDocumentVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeDocumentVersions API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeFolderContents">DescribeFolderContents</a></code> | <code>string[]</code> | IAM actions required for the DescribeFolderContents API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeGroups">DescribeGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeGroups API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeNotificationSubscriptions">DescribeNotificationSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeNotificationSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeResourcePermissions">DescribeResourcePermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourcePermissions API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeRootFolders">DescribeRootFolders</a></code> | <code>string[]</code> | IAM actions required for the DescribeRootFolders API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeUsers">DescribeUsers</a></code> | <code>string[]</code> | IAM actions required for the DescribeUsers API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.InitiateDocumentVersionUpload">InitiateDocumentVersionUpload</a></code> | <code>string[]</code> | IAM actions required for the InitiateDocumentVersionUpload API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetCurrentUser">opGetCurrentUser</a></code> | <code>string[]</code> | IAM actions required for the GetCurrentUser API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetDocument">opGetDocument</a></code> | <code>string[]</code> | IAM actions required for the GetDocument API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetDocumentPath">opGetDocumentPath</a></code> | <code>string[]</code> | IAM actions required for the GetDocumentPath API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetDocumentVersion">opGetDocumentVersion</a></code> | <code>string[]</code> | IAM actions required for the GetDocumentVersion API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetFolder">opGetFolder</a></code> | <code>string[]</code> | IAM actions required for the GetFolder API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetFolderPath">opGetFolderPath</a></code> | <code>string[]</code> | IAM actions required for the GetFolderPath API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetResources">opGetResources</a></code> | <code>string[]</code> | IAM actions required for the GetResources API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.RemoveAllResourcePermissions">RemoveAllResourcePermissions</a></code> | <code>string[]</code> | IAM actions required for the RemoveAllResourcePermissions API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.RemoveResourcePermission">RemoveResourcePermission</a></code> | <code>string[]</code> | IAM actions required for the RemoveResourcePermission API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.RestoreDocumentVersions">RestoreDocumentVersions</a></code> | <code>string[]</code> | IAM actions required for the RestoreDocumentVersions API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.SearchResources">SearchResources</a></code> | <code>string[]</code> | IAM actions required for the SearchResources API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.UpdateDocument">UpdateDocument</a></code> | <code>string[]</code> | IAM actions required for the UpdateDocument API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.UpdateDocumentVersion">UpdateDocumentVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateDocumentVersion API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.UpdateFolder">UpdateFolder</a></code> | <code>string[]</code> | IAM actions required for the UpdateFolder API call. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |

---

##### `AbortDocumentVersionUpload`<sup>Required</sup> <a name="AbortDocumentVersionUpload" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.AbortDocumentVersionUpload"></a>

```typescript
public readonly AbortDocumentVersionUpload: string[];
```

- *Type:* string[]

IAM actions required for the AbortDocumentVersionUpload API call.

---

##### `ActivateUser`<sup>Required</sup> <a name="ActivateUser" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.ActivateUser"></a>

```typescript
public readonly ActivateUser: string[];
```

- *Type:* string[]

IAM actions required for the ActivateUser API call.

---

##### `AddResourcePermissions`<sup>Required</sup> <a name="AddResourcePermissions" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.AddResourcePermissions"></a>

```typescript
public readonly AddResourcePermissions: string[];
```

- *Type:* string[]

IAM actions required for the AddResourcePermissions API call.

---

##### `CreateComment`<sup>Required</sup> <a name="CreateComment" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateComment"></a>

```typescript
public readonly CreateComment: string[];
```

- *Type:* string[]

IAM actions required for the CreateComment API call.

---

##### `CreateCustomMetadata`<sup>Required</sup> <a name="CreateCustomMetadata" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateCustomMetadata"></a>

```typescript
public readonly CreateCustomMetadata: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomMetadata API call.

---

##### `CreateFolder`<sup>Required</sup> <a name="CreateFolder" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateFolder"></a>

```typescript
public readonly CreateFolder: string[];
```

- *Type:* string[]

IAM actions required for the CreateFolder API call.

---

##### `CreateLabels`<sup>Required</sup> <a name="CreateLabels" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateLabels"></a>

```typescript
public readonly CreateLabels: string[];
```

- *Type:* string[]

IAM actions required for the CreateLabels API call.

---

##### `CreateNotificationSubscription`<sup>Required</sup> <a name="CreateNotificationSubscription" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateNotificationSubscription"></a>

```typescript
public readonly CreateNotificationSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateNotificationSubscription API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `DeactivateUser`<sup>Required</sup> <a name="DeactivateUser" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeactivateUser"></a>

```typescript
public readonly DeactivateUser: string[];
```

- *Type:* string[]

IAM actions required for the DeactivateUser API call.

---

##### `DeleteComment`<sup>Required</sup> <a name="DeleteComment" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteComment"></a>

```typescript
public readonly DeleteComment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteComment API call.

---

##### `DeleteCustomMetadata`<sup>Required</sup> <a name="DeleteCustomMetadata" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteCustomMetadata"></a>

```typescript
public readonly DeleteCustomMetadata: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomMetadata API call.

---

##### `DeleteDocument`<sup>Required</sup> <a name="DeleteDocument" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteDocument"></a>

```typescript
public readonly DeleteDocument: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDocument API call.

---

##### `DeleteDocumentVersion`<sup>Required</sup> <a name="DeleteDocumentVersion" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteDocumentVersion"></a>

```typescript
public readonly DeleteDocumentVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDocumentVersion API call.

---

##### `DeleteFolder`<sup>Required</sup> <a name="DeleteFolder" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteFolder"></a>

```typescript
public readonly DeleteFolder: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFolder API call.

---

##### `DeleteFolderContents`<sup>Required</sup> <a name="DeleteFolderContents" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteFolderContents"></a>

```typescript
public readonly DeleteFolderContents: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFolderContents API call.

---

##### `DeleteLabels`<sup>Required</sup> <a name="DeleteLabels" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteLabels"></a>

```typescript
public readonly DeleteLabels: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLabels API call.

---

##### `DeleteNotificationSubscription`<sup>Required</sup> <a name="DeleteNotificationSubscription" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteNotificationSubscription"></a>

```typescript
public readonly DeleteNotificationSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotificationSubscription API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DescribeActivities`<sup>Required</sup> <a name="DescribeActivities" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeActivities"></a>

```typescript
public readonly DescribeActivities: string[];
```

- *Type:* string[]

IAM actions required for the DescribeActivities API call.

---

##### `DescribeComments`<sup>Required</sup> <a name="DescribeComments" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeComments"></a>

```typescript
public readonly DescribeComments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeComments API call.

---

##### `DescribeDocumentVersions`<sup>Required</sup> <a name="DescribeDocumentVersions" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeDocumentVersions"></a>

```typescript
public readonly DescribeDocumentVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDocumentVersions API call.

---

##### `DescribeFolderContents`<sup>Required</sup> <a name="DescribeFolderContents" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeFolderContents"></a>

```typescript
public readonly DescribeFolderContents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFolderContents API call.

---

##### `DescribeGroups`<sup>Required</sup> <a name="DescribeGroups" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeGroups"></a>

```typescript
public readonly DescribeGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGroups API call.

---

##### `DescribeNotificationSubscriptions`<sup>Required</sup> <a name="DescribeNotificationSubscriptions" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeNotificationSubscriptions"></a>

```typescript
public readonly DescribeNotificationSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNotificationSubscriptions API call.

---

##### `DescribeResourcePermissions`<sup>Required</sup> <a name="DescribeResourcePermissions" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeResourcePermissions"></a>

```typescript
public readonly DescribeResourcePermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourcePermissions API call.

---

##### `DescribeRootFolders`<sup>Required</sup> <a name="DescribeRootFolders" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeRootFolders"></a>

```typescript
public readonly DescribeRootFolders: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRootFolders API call.

---

##### `DescribeUsers`<sup>Required</sup> <a name="DescribeUsers" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.DescribeUsers"></a>

```typescript
public readonly DescribeUsers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUsers API call.

---

##### `InitiateDocumentVersionUpload`<sup>Required</sup> <a name="InitiateDocumentVersionUpload" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.InitiateDocumentVersionUpload"></a>

```typescript
public readonly InitiateDocumentVersionUpload: string[];
```

- *Type:* string[]

IAM actions required for the InitiateDocumentVersionUpload API call.

---

##### `opGetCurrentUser`<sup>Required</sup> <a name="opGetCurrentUser" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetCurrentUser"></a>

```typescript
public readonly opGetCurrentUser: string[];
```

- *Type:* string[]

IAM actions required for the GetCurrentUser API call.

---

##### `opGetDocument`<sup>Required</sup> <a name="opGetDocument" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetDocument"></a>

```typescript
public readonly opGetDocument: string[];
```

- *Type:* string[]

IAM actions required for the GetDocument API call.

---

##### `opGetDocumentPath`<sup>Required</sup> <a name="opGetDocumentPath" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetDocumentPath"></a>

```typescript
public readonly opGetDocumentPath: string[];
```

- *Type:* string[]

IAM actions required for the GetDocumentPath API call.

---

##### `opGetDocumentVersion`<sup>Required</sup> <a name="opGetDocumentVersion" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetDocumentVersion"></a>

```typescript
public readonly opGetDocumentVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetDocumentVersion API call.

---

##### `opGetFolder`<sup>Required</sup> <a name="opGetFolder" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetFolder"></a>

```typescript
public readonly opGetFolder: string[];
```

- *Type:* string[]

IAM actions required for the GetFolder API call.

---

##### `opGetFolderPath`<sup>Required</sup> <a name="opGetFolderPath" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetFolderPath"></a>

```typescript
public readonly opGetFolderPath: string[];
```

- *Type:* string[]

IAM actions required for the GetFolderPath API call.

---

##### `opGetResources`<sup>Required</sup> <a name="opGetResources" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.opGetResources"></a>

```typescript
public readonly opGetResources: string[];
```

- *Type:* string[]

IAM actions required for the GetResources API call.

---

##### `RemoveAllResourcePermissions`<sup>Required</sup> <a name="RemoveAllResourcePermissions" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.RemoveAllResourcePermissions"></a>

```typescript
public readonly RemoveAllResourcePermissions: string[];
```

- *Type:* string[]

IAM actions required for the RemoveAllResourcePermissions API call.

---

##### `RemoveResourcePermission`<sup>Required</sup> <a name="RemoveResourcePermission" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.RemoveResourcePermission"></a>

```typescript
public readonly RemoveResourcePermission: string[];
```

- *Type:* string[]

IAM actions required for the RemoveResourcePermission API call.

---

##### `RestoreDocumentVersions`<sup>Required</sup> <a name="RestoreDocumentVersions" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.RestoreDocumentVersions"></a>

```typescript
public readonly RestoreDocumentVersions: string[];
```

- *Type:* string[]

IAM actions required for the RestoreDocumentVersions API call.

---

##### `SearchResources`<sup>Required</sup> <a name="SearchResources" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.SearchResources"></a>

```typescript
public readonly SearchResources: string[];
```

- *Type:* string[]

IAM actions required for the SearchResources API call.

---

##### `UpdateDocument`<sup>Required</sup> <a name="UpdateDocument" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.UpdateDocument"></a>

```typescript
public readonly UpdateDocument: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDocument API call.

---

##### `UpdateDocumentVersion`<sup>Required</sup> <a name="UpdateDocumentVersion" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.UpdateDocumentVersion"></a>

```typescript
public readonly UpdateDocumentVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDocumentVersion API call.

---

##### `UpdateFolder`<sup>Required</sup> <a name="UpdateFolder" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.UpdateFolder"></a>

```typescript
public readonly UpdateFolder: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFolder API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.workdocs.WorkDocsOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

### WorkDocsResources <a name="WorkDocsResources" id="@cdk_utils/iam.workdocs.WorkDocsResources"></a>

ARN builders, validators, and parsers for workdocs resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workdocs.WorkDocsResources.Initializer"></a>

```typescript
import { workdocs } from '@cdk_utils/iam'

new workdocs.WorkDocsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsResources.isValidOrganizationArn">isValidOrganizationArn</a></code> | Validates whether a string is a valid ARN for the organization resource. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsResources.organization">organization</a></code> | Builds an ARN for the organization resource. |
| <code><a href="#@cdk_utils/iam.workdocs.WorkDocsResources.parseOrganizationArn">parseOrganizationArn</a></code> | Parses a organization ARN into its components. |

---

##### `isValidOrganizationArn` <a name="isValidOrganizationArn" id="@cdk_utils/iam.workdocs.WorkDocsResources.isValidOrganizationArn"></a>

```typescript
import { workdocs } from '@cdk_utils/iam'

workdocs.WorkDocsResources.isValidOrganizationArn(arn: string)
```

Validates whether a string is a valid ARN for the organization resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workdocs.WorkDocsResources.isValidOrganizationArn.parameter.arn"></a>

- *Type:* string

---

##### `organization` <a name="organization" id="@cdk_utils/iam.workdocs.WorkDocsResources.organization"></a>

```typescript
import { workdocs } from '@cdk_utils/iam'

workdocs.WorkDocsResources.organization(props: WorkDocsOrganizationArnProps)
```

Builds an ARN for the organization resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workdocs.WorkDocsResources.organization.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workdocs.WorkDocsOrganizationArnProps">WorkDocsOrganizationArnProps</a>

---

##### `parseOrganizationArn` <a name="parseOrganizationArn" id="@cdk_utils/iam.workdocs.WorkDocsResources.parseOrganizationArn"></a>

```typescript
import { workdocs } from '@cdk_utils/iam'

workdocs.WorkDocsResources.parseOrganizationArn(arn: string)
```

Parses a organization ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workdocs.WorkDocsResources.parseOrganizationArn.parameter.arn"></a>

- *Type:* string

---




