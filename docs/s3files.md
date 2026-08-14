# `s3files` Submodule <a name="`s3files` Submodule" id="@cdk_utils/iam.s3files"></a>


## Structs <a name="Structs" id="Structs"></a>

### S3filesAccessPointArnComponents <a name="S3filesAccessPointArnComponents" id="@cdk_utils/iam.s3files.S3filesAccessPointArnComponents"></a>

Parsed components of a access-point ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.Initializer"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

const s3filesAccessPointArnComponents: s3files.S3filesAccessPointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.property.accessPointId">accessPointId</a></code> | <code>string</code> | The AccessPointId component. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

The AccessPointId component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3files.S3filesAccessPointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3filesAccessPointArnProps <a name="S3filesAccessPointArnProps" id="@cdk_utils/iam.s3files.S3filesAccessPointArnProps"></a>

Properties for building a access-point ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3files.S3filesAccessPointArnProps.Initializer"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

const s3filesAccessPointArnProps: s3files.S3filesAccessPointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnProps.property.accessPointId">accessPointId</a></code> | <code>string</code> | The AccessPointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnProps.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdk_utils/iam.s3files.S3filesAccessPointArnProps.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

The AccessPointId component of the ARN.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.s3files.S3filesAccessPointArnProps.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3files.S3filesAccessPointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3files.S3filesAccessPointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3files.S3filesAccessPointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### S3filesFileSystemArnComponents <a name="S3filesFileSystemArnComponents" id="@cdk_utils/iam.s3files.S3filesFileSystemArnComponents"></a>

Parsed components of a file-system ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3files.S3filesFileSystemArnComponents.Initializer"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

const s3filesFileSystemArnComponents: s3files.S3filesFileSystemArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3files.S3filesFileSystemArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesFileSystemArnComponents.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesFileSystemArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesFileSystemArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3files.S3filesFileSystemArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.s3files.S3filesFileSystemArnComponents.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3files.S3filesFileSystemArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3files.S3filesFileSystemArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3filesFileSystemArnProps <a name="S3filesFileSystemArnProps" id="@cdk_utils/iam.s3files.S3filesFileSystemArnProps"></a>

Properties for building a file-system ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3files.S3filesFileSystemArnProps.Initializer"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

const s3filesFileSystemArnProps: s3files.S3filesFileSystemArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3files.S3filesFileSystemArnProps.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesFileSystemArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesFileSystemArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesFileSystemArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.s3files.S3filesFileSystemArnProps.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3files.S3filesFileSystemArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3files.S3filesFileSystemArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3files.S3filesFileSystemArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### S3filesActions <a name="S3filesActions" id="@cdk_utils/iam.s3files.S3filesActions"></a>

IAM action constants for the s3files service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3files.S3filesActions.Initializer"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

new s3files.S3filesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.actionGetAccessPoint">actionGetAccessPoint</a></code> | <code>string</code> | [Read] s3files:GetAccessPoint. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.actionGetFileSystem">actionGetFileSystem</a></code> | <code>string</code> | [Read] s3files:GetFileSystem. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.actionGetFileSystemPolicy">actionGetFileSystemPolicy</a></code> | <code>string</code> | [Read] s3files:GetFileSystemPolicy. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.actionGetMountTarget">actionGetMountTarget</a></code> | <code>string</code> | [Read] s3files:GetMountTarget. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.actionGetSynchronizationConfiguration">actionGetSynchronizationConfiguration</a></code> | <code>string</code> | [Read] s3files:GetSynchronizationConfiguration. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.ClientMount">ClientMount</a></code> | <code>string</code> | [Read] s3files:ClientMount. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.ClientRootAccess">ClientRootAccess</a></code> | <code>string</code> | [Write] s3files:ClientRootAccess. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.ClientWrite">ClientWrite</a></code> | <code>string</code> | [Write] s3files:ClientWrite. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.CreateAccessPoint">CreateAccessPoint</a></code> | <code>string</code> | [Write] s3files:CreateAccessPoint. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.CreateFileSystem">CreateFileSystem</a></code> | <code>string</code> | [Write] s3files:CreateFileSystem. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.CreateMountTarget">CreateMountTarget</a></code> | <code>string</code> | [Write] s3files:CreateMountTarget. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.DeleteAccessPoint">DeleteAccessPoint</a></code> | <code>string</code> | [Write] s3files:DeleteAccessPoint. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.DeleteFileSystem">DeleteFileSystem</a></code> | <code>string</code> | [Write] s3files:DeleteFileSystem. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.DeleteFileSystemPolicy">DeleteFileSystemPolicy</a></code> | <code>string</code> | [PermissionManagement] s3files:DeleteFileSystemPolicy. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.DeleteMountTarget">DeleteMountTarget</a></code> | <code>string</code> | [Write] s3files:DeleteMountTarget. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.ListAccessPoints">ListAccessPoints</a></code> | <code>string</code> | [List] s3files:ListAccessPoints. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.ListFileSystems">ListFileSystems</a></code> | <code>string</code> | [List] s3files:ListFileSystems. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.ListMountTargets">ListMountTargets</a></code> | <code>string</code> | [List] s3files:ListMountTargets. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] s3files:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.PutFileSystemPolicy">PutFileSystemPolicy</a></code> | <code>string</code> | [PermissionManagement] s3files:PutFileSystemPolicy. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.PutSynchronizationConfiguration">PutSynchronizationConfiguration</a></code> | <code>string</code> | [Write] s3files:PutSynchronizationConfiguration. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] s3files:TagResource. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] s3files:UntagResource. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesActions.property.UpdateMountTarget">UpdateMountTarget</a></code> | <code>string</code> | [Write] s3files:UpdateMountTarget. |

---

##### `actionGetAccessPoint`<sup>Required</sup> <a name="actionGetAccessPoint" id="@cdk_utils/iam.s3files.S3filesActions.property.actionGetAccessPoint"></a>

```typescript
public readonly actionGetAccessPoint: string;
```

- *Type:* string

[Read] s3files:GetAccessPoint.

---

##### `actionGetFileSystem`<sup>Required</sup> <a name="actionGetFileSystem" id="@cdk_utils/iam.s3files.S3filesActions.property.actionGetFileSystem"></a>

```typescript
public readonly actionGetFileSystem: string;
```

- *Type:* string

[Read] s3files:GetFileSystem.

---

##### `actionGetFileSystemPolicy`<sup>Required</sup> <a name="actionGetFileSystemPolicy" id="@cdk_utils/iam.s3files.S3filesActions.property.actionGetFileSystemPolicy"></a>

```typescript
public readonly actionGetFileSystemPolicy: string;
```

- *Type:* string

[Read] s3files:GetFileSystemPolicy.

---

##### `actionGetMountTarget`<sup>Required</sup> <a name="actionGetMountTarget" id="@cdk_utils/iam.s3files.S3filesActions.property.actionGetMountTarget"></a>

```typescript
public readonly actionGetMountTarget: string;
```

- *Type:* string

[Read] s3files:GetMountTarget.

---

##### `actionGetSynchronizationConfiguration`<sup>Required</sup> <a name="actionGetSynchronizationConfiguration" id="@cdk_utils/iam.s3files.S3filesActions.property.actionGetSynchronizationConfiguration"></a>

```typescript
public readonly actionGetSynchronizationConfiguration: string;
```

- *Type:* string

[Read] s3files:GetSynchronizationConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.s3files.S3filesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.s3files.S3filesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.s3files.S3filesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.s3files.S3filesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.s3files.S3filesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ClientMount`<sup>Required</sup> <a name="ClientMount" id="@cdk_utils/iam.s3files.S3filesActions.property.ClientMount"></a>

```typescript
public readonly ClientMount: string;
```

- *Type:* string

[Read] s3files:ClientMount.

---

##### `ClientRootAccess`<sup>Required</sup> <a name="ClientRootAccess" id="@cdk_utils/iam.s3files.S3filesActions.property.ClientRootAccess"></a>

```typescript
public readonly ClientRootAccess: string;
```

- *Type:* string

[Write] s3files:ClientRootAccess.

---

##### `ClientWrite`<sup>Required</sup> <a name="ClientWrite" id="@cdk_utils/iam.s3files.S3filesActions.property.ClientWrite"></a>

```typescript
public readonly ClientWrite: string;
```

- *Type:* string

[Write] s3files:ClientWrite.

---

##### `CreateAccessPoint`<sup>Required</sup> <a name="CreateAccessPoint" id="@cdk_utils/iam.s3files.S3filesActions.property.CreateAccessPoint"></a>

```typescript
public readonly CreateAccessPoint: string;
```

- *Type:* string

[Write] s3files:CreateAccessPoint.

---

##### `CreateFileSystem`<sup>Required</sup> <a name="CreateFileSystem" id="@cdk_utils/iam.s3files.S3filesActions.property.CreateFileSystem"></a>

```typescript
public readonly CreateFileSystem: string;
```

- *Type:* string

[Write] s3files:CreateFileSystem.

---

##### `CreateMountTarget`<sup>Required</sup> <a name="CreateMountTarget" id="@cdk_utils/iam.s3files.S3filesActions.property.CreateMountTarget"></a>

```typescript
public readonly CreateMountTarget: string;
```

- *Type:* string

[Write] s3files:CreateMountTarget.

---

##### `DeleteAccessPoint`<sup>Required</sup> <a name="DeleteAccessPoint" id="@cdk_utils/iam.s3files.S3filesActions.property.DeleteAccessPoint"></a>

```typescript
public readonly DeleteAccessPoint: string;
```

- *Type:* string

[Write] s3files:DeleteAccessPoint.

---

##### `DeleteFileSystem`<sup>Required</sup> <a name="DeleteFileSystem" id="@cdk_utils/iam.s3files.S3filesActions.property.DeleteFileSystem"></a>

```typescript
public readonly DeleteFileSystem: string;
```

- *Type:* string

[Write] s3files:DeleteFileSystem.

---

##### `DeleteFileSystemPolicy`<sup>Required</sup> <a name="DeleteFileSystemPolicy" id="@cdk_utils/iam.s3files.S3filesActions.property.DeleteFileSystemPolicy"></a>

```typescript
public readonly DeleteFileSystemPolicy: string;
```

- *Type:* string

[PermissionManagement] s3files:DeleteFileSystemPolicy.

---

##### `DeleteMountTarget`<sup>Required</sup> <a name="DeleteMountTarget" id="@cdk_utils/iam.s3files.S3filesActions.property.DeleteMountTarget"></a>

```typescript
public readonly DeleteMountTarget: string;
```

- *Type:* string

[Write] s3files:DeleteMountTarget.

---

##### `ListAccessPoints`<sup>Required</sup> <a name="ListAccessPoints" id="@cdk_utils/iam.s3files.S3filesActions.property.ListAccessPoints"></a>

```typescript
public readonly ListAccessPoints: string;
```

- *Type:* string

[List] s3files:ListAccessPoints.

---

##### `ListFileSystems`<sup>Required</sup> <a name="ListFileSystems" id="@cdk_utils/iam.s3files.S3filesActions.property.ListFileSystems"></a>

```typescript
public readonly ListFileSystems: string;
```

- *Type:* string

[List] s3files:ListFileSystems.

---

##### `ListMountTargets`<sup>Required</sup> <a name="ListMountTargets" id="@cdk_utils/iam.s3files.S3filesActions.property.ListMountTargets"></a>

```typescript
public readonly ListMountTargets: string;
```

- *Type:* string

[List] s3files:ListMountTargets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.s3files.S3filesActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] s3files:ListTagsForResource.

---

##### `PutFileSystemPolicy`<sup>Required</sup> <a name="PutFileSystemPolicy" id="@cdk_utils/iam.s3files.S3filesActions.property.PutFileSystemPolicy"></a>

```typescript
public readonly PutFileSystemPolicy: string;
```

- *Type:* string

[PermissionManagement] s3files:PutFileSystemPolicy.

---

##### `PutSynchronizationConfiguration`<sup>Required</sup> <a name="PutSynchronizationConfiguration" id="@cdk_utils/iam.s3files.S3filesActions.property.PutSynchronizationConfiguration"></a>

```typescript
public readonly PutSynchronizationConfiguration: string;
```

- *Type:* string

[Write] s3files:PutSynchronizationConfiguration.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.s3files.S3filesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.s3files.S3filesActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] s3files:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.s3files.S3filesActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] s3files:UntagResource.

---

##### `UpdateMountTarget`<sup>Required</sup> <a name="UpdateMountTarget" id="@cdk_utils/iam.s3files.S3filesActions.property.UpdateMountTarget"></a>

```typescript
public readonly UpdateMountTarget: string;
```

- *Type:* string

[Write] s3files:UpdateMountTarget.

---

### S3filesConditions <a name="S3filesConditions" id="@cdk_utils/iam.s3files.S3filesConditions"></a>

Condition key constants and builders for s3files.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3files.S3filesConditions.Initializer"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

new s3files.S3filesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.accessPointARN">accessPointARN</a></code> | Generates a condition block for `s3files:AccessPointArn`. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.createAction">createAction</a></code> | Generates a condition block for `s3files:CreateAction`. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `accessPointARN` <a name="accessPointARN" id="@cdk_utils/iam.s3files.S3filesConditions.accessPointARN"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesConditions.accessPointARN(value: string)
```

Generates a condition block for `s3files:AccessPointArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3files.S3filesConditions.accessPointARN.parameter.value"></a>

- *Type:* string

---

##### `createAction` <a name="createAction" id="@cdk_utils/iam.s3files.S3filesConditions.createAction"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesConditions.createAction(value: string)
```

Generates a condition block for `s3files:CreateAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3files.S3filesConditions.createAction.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.s3files.S3filesConditions.requestTag"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3files.S3filesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.s3files.S3filesConditions.resourceTag"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3files.S3filesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.s3files.S3filesConditions.tagKeys"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.s3files.S3filesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.ACCESS_POINT_ARN">ACCESS_POINT_ARN</a></code> | <code>string</code> | Condition key: s3files:AccessPointArn (ARN). |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.ClientMountConditionKeys">ClientMountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ClientMount action. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.ClientRootAccessConditionKeys">ClientRootAccessConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ClientRootAccess action. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.ClientWriteConditionKeys">ClientWriteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ClientWrite action. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.CREATE_ACTION">CREATE_ACTION</a></code> | <code>string</code> | Condition key: s3files:CreateAction (String). |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.CreateAccessPointConditionKeys">CreateAccessPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessPoint action. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.CreateFileSystemConditionKeys">CreateFileSystemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFileSystem action. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `ACCESS_POINT_ARN`<sup>Required</sup> <a name="ACCESS_POINT_ARN" id="@cdk_utils/iam.s3files.S3filesConditions.property.ACCESS_POINT_ARN"></a>

```typescript
public readonly ACCESS_POINT_ARN: string;
```

- *Type:* string

Condition key: s3files:AccessPointArn (ARN).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.s3files.S3filesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.s3files.S3filesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.s3files.S3filesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `ClientMountConditionKeys`<sup>Required</sup> <a name="ClientMountConditionKeys" id="@cdk_utils/iam.s3files.S3filesConditions.property.ClientMountConditionKeys"></a>

```typescript
public readonly ClientMountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ClientMount action.

---

##### `ClientRootAccessConditionKeys`<sup>Required</sup> <a name="ClientRootAccessConditionKeys" id="@cdk_utils/iam.s3files.S3filesConditions.property.ClientRootAccessConditionKeys"></a>

```typescript
public readonly ClientRootAccessConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ClientRootAccess action.

---

##### `ClientWriteConditionKeys`<sup>Required</sup> <a name="ClientWriteConditionKeys" id="@cdk_utils/iam.s3files.S3filesConditions.property.ClientWriteConditionKeys"></a>

```typescript
public readonly ClientWriteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ClientWrite action.

---

##### `CREATE_ACTION`<sup>Required</sup> <a name="CREATE_ACTION" id="@cdk_utils/iam.s3files.S3filesConditions.property.CREATE_ACTION"></a>

```typescript
public readonly CREATE_ACTION: string;
```

- *Type:* string

Condition key: s3files:CreateAction (String).

---

##### `CreateAccessPointConditionKeys`<sup>Required</sup> <a name="CreateAccessPointConditionKeys" id="@cdk_utils/iam.s3files.S3filesConditions.property.CreateAccessPointConditionKeys"></a>

```typescript
public readonly CreateAccessPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessPoint action.

---

##### `CreateFileSystemConditionKeys`<sup>Required</sup> <a name="CreateFileSystemConditionKeys" id="@cdk_utils/iam.s3files.S3filesConditions.property.CreateFileSystemConditionKeys"></a>

```typescript
public readonly CreateFileSystemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFileSystem action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.s3files.S3filesConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.s3files.S3filesConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### S3filesOperations <a name="S3filesOperations" id="@cdk_utils/iam.s3files.S3filesOperations"></a>

API operation to required IAM actions mapping for s3files.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3files.S3filesOperations.Initializer"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

new s3files.S3filesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.CreateAccessPoint">CreateAccessPoint</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessPoint API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.CreateFileSystem">CreateFileSystem</a></code> | <code>string[]</code> | IAM actions required for the CreateFileSystem API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.CreateMountTarget">CreateMountTarget</a></code> | <code>string[]</code> | IAM actions required for the CreateMountTarget API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.DeleteAccessPoint">DeleteAccessPoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessPoint API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.DeleteFileSystem">DeleteFileSystem</a></code> | <code>string[]</code> | IAM actions required for the DeleteFileSystem API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.DeleteFileSystemPolicy">DeleteFileSystemPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteFileSystemPolicy API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.DeleteMountTarget">DeleteMountTarget</a></code> | <code>string[]</code> | IAM actions required for the DeleteMountTarget API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.ListAccessPoints">ListAccessPoints</a></code> | <code>string[]</code> | IAM actions required for the ListAccessPoints API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.ListFileSystems">ListFileSystems</a></code> | <code>string[]</code> | IAM actions required for the ListFileSystems API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.ListMountTargets">ListMountTargets</a></code> | <code>string[]</code> | IAM actions required for the ListMountTargets API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.opGetAccessPoint">opGetAccessPoint</a></code> | <code>string[]</code> | IAM actions required for the GetAccessPoint API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.opGetFileSystem">opGetFileSystem</a></code> | <code>string[]</code> | IAM actions required for the GetFileSystem API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.opGetFileSystemPolicy">opGetFileSystemPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetFileSystemPolicy API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.opGetMountTarget">opGetMountTarget</a></code> | <code>string[]</code> | IAM actions required for the GetMountTarget API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.opGetSynchronizationConfiguration">opGetSynchronizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetSynchronizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.PutFileSystemPolicy">PutFileSystemPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutFileSystemPolicy API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.PutSynchronizationConfiguration">PutSynchronizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutSynchronizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesOperations.property.UpdateMountTarget">UpdateMountTarget</a></code> | <code>string[]</code> | IAM actions required for the UpdateMountTarget API call. |

---

##### `CreateAccessPoint`<sup>Required</sup> <a name="CreateAccessPoint" id="@cdk_utils/iam.s3files.S3filesOperations.property.CreateAccessPoint"></a>

```typescript
public readonly CreateAccessPoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessPoint API call.

---

##### `CreateFileSystem`<sup>Required</sup> <a name="CreateFileSystem" id="@cdk_utils/iam.s3files.S3filesOperations.property.CreateFileSystem"></a>

```typescript
public readonly CreateFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the CreateFileSystem API call.

---

##### `CreateMountTarget`<sup>Required</sup> <a name="CreateMountTarget" id="@cdk_utils/iam.s3files.S3filesOperations.property.CreateMountTarget"></a>

```typescript
public readonly CreateMountTarget: string[];
```

- *Type:* string[]

IAM actions required for the CreateMountTarget API call.

---

##### `DeleteAccessPoint`<sup>Required</sup> <a name="DeleteAccessPoint" id="@cdk_utils/iam.s3files.S3filesOperations.property.DeleteAccessPoint"></a>

```typescript
public readonly DeleteAccessPoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessPoint API call.

---

##### `DeleteFileSystem`<sup>Required</sup> <a name="DeleteFileSystem" id="@cdk_utils/iam.s3files.S3filesOperations.property.DeleteFileSystem"></a>

```typescript
public readonly DeleteFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFileSystem API call.

---

##### `DeleteFileSystemPolicy`<sup>Required</sup> <a name="DeleteFileSystemPolicy" id="@cdk_utils/iam.s3files.S3filesOperations.property.DeleteFileSystemPolicy"></a>

```typescript
public readonly DeleteFileSystemPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFileSystemPolicy API call.

---

##### `DeleteMountTarget`<sup>Required</sup> <a name="DeleteMountTarget" id="@cdk_utils/iam.s3files.S3filesOperations.property.DeleteMountTarget"></a>

```typescript
public readonly DeleteMountTarget: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMountTarget API call.

---

##### `ListAccessPoints`<sup>Required</sup> <a name="ListAccessPoints" id="@cdk_utils/iam.s3files.S3filesOperations.property.ListAccessPoints"></a>

```typescript
public readonly ListAccessPoints: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessPoints API call.

---

##### `ListFileSystems`<sup>Required</sup> <a name="ListFileSystems" id="@cdk_utils/iam.s3files.S3filesOperations.property.ListFileSystems"></a>

```typescript
public readonly ListFileSystems: string[];
```

- *Type:* string[]

IAM actions required for the ListFileSystems API call.

---

##### `ListMountTargets`<sup>Required</sup> <a name="ListMountTargets" id="@cdk_utils/iam.s3files.S3filesOperations.property.ListMountTargets"></a>

```typescript
public readonly ListMountTargets: string[];
```

- *Type:* string[]

IAM actions required for the ListMountTargets API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.s3files.S3filesOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccessPoint`<sup>Required</sup> <a name="opGetAccessPoint" id="@cdk_utils/iam.s3files.S3filesOperations.property.opGetAccessPoint"></a>

```typescript
public readonly opGetAccessPoint: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessPoint API call.

---

##### `opGetFileSystem`<sup>Required</sup> <a name="opGetFileSystem" id="@cdk_utils/iam.s3files.S3filesOperations.property.opGetFileSystem"></a>

```typescript
public readonly opGetFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the GetFileSystem API call.

---

##### `opGetFileSystemPolicy`<sup>Required</sup> <a name="opGetFileSystemPolicy" id="@cdk_utils/iam.s3files.S3filesOperations.property.opGetFileSystemPolicy"></a>

```typescript
public readonly opGetFileSystemPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetFileSystemPolicy API call.

---

##### `opGetMountTarget`<sup>Required</sup> <a name="opGetMountTarget" id="@cdk_utils/iam.s3files.S3filesOperations.property.opGetMountTarget"></a>

```typescript
public readonly opGetMountTarget: string[];
```

- *Type:* string[]

IAM actions required for the GetMountTarget API call.

---

##### `opGetSynchronizationConfiguration`<sup>Required</sup> <a name="opGetSynchronizationConfiguration" id="@cdk_utils/iam.s3files.S3filesOperations.property.opGetSynchronizationConfiguration"></a>

```typescript
public readonly opGetSynchronizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetSynchronizationConfiguration API call.

---

##### `PutFileSystemPolicy`<sup>Required</sup> <a name="PutFileSystemPolicy" id="@cdk_utils/iam.s3files.S3filesOperations.property.PutFileSystemPolicy"></a>

```typescript
public readonly PutFileSystemPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutFileSystemPolicy API call.

---

##### `PutSynchronizationConfiguration`<sup>Required</sup> <a name="PutSynchronizationConfiguration" id="@cdk_utils/iam.s3files.S3filesOperations.property.PutSynchronizationConfiguration"></a>

```typescript
public readonly PutSynchronizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutSynchronizationConfiguration API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.s3files.S3filesOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.s3files.S3filesOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateMountTarget`<sup>Required</sup> <a name="UpdateMountTarget" id="@cdk_utils/iam.s3files.S3filesOperations.property.UpdateMountTarget"></a>

```typescript
public readonly UpdateMountTarget: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMountTarget API call.

---

### S3filesResources <a name="S3filesResources" id="@cdk_utils/iam.s3files.S3filesResources"></a>

ARN builders, validators, and parsers for s3files resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3files.S3filesResources.Initializer"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

new s3files.S3filesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3files.S3filesResources.accessPoint">accessPoint</a></code> | Builds an ARN for the access-point resource. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesResources.fileSystem">fileSystem</a></code> | Builds an ARN for the file-system resource. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesResources.isValidAccessPointArn">isValidAccessPointArn</a></code> | Validates whether a string is a valid ARN for the access-point resource. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesResources.isValidFileSystemArn">isValidFileSystemArn</a></code> | Validates whether a string is a valid ARN for the file-system resource. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesResources.parseAccessPointArn">parseAccessPointArn</a></code> | Parses a access-point ARN into its components. |
| <code><a href="#@cdk_utils/iam.s3files.S3filesResources.parseFileSystemArn">parseFileSystemArn</a></code> | Parses a file-system ARN into its components. |

---

##### `accessPoint` <a name="accessPoint" id="@cdk_utils/iam.s3files.S3filesResources.accessPoint"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesResources.accessPoint(props: S3filesAccessPointArnProps)
```

Builds an ARN for the access-point resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3files.S3filesResources.accessPoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3files.S3filesAccessPointArnProps">S3filesAccessPointArnProps</a>

---

##### `fileSystem` <a name="fileSystem" id="@cdk_utils/iam.s3files.S3filesResources.fileSystem"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesResources.fileSystem(props: S3filesFileSystemArnProps)
```

Builds an ARN for the file-system resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3files.S3filesResources.fileSystem.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3files.S3filesFileSystemArnProps">S3filesFileSystemArnProps</a>

---

##### `isValidAccessPointArn` <a name="isValidAccessPointArn" id="@cdk_utils/iam.s3files.S3filesResources.isValidAccessPointArn"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesResources.isValidAccessPointArn(arn: string)
```

Validates whether a string is a valid ARN for the access-point resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3files.S3filesResources.isValidAccessPointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFileSystemArn` <a name="isValidFileSystemArn" id="@cdk_utils/iam.s3files.S3filesResources.isValidFileSystemArn"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesResources.isValidFileSystemArn(arn: string)
```

Validates whether a string is a valid ARN for the file-system resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3files.S3filesResources.isValidFileSystemArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccessPointArn` <a name="parseAccessPointArn" id="@cdk_utils/iam.s3files.S3filesResources.parseAccessPointArn"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesResources.parseAccessPointArn(arn: string)
```

Parses a access-point ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3files.S3filesResources.parseAccessPointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFileSystemArn` <a name="parseFileSystemArn" id="@cdk_utils/iam.s3files.S3filesResources.parseFileSystemArn"></a>

```typescript
import { s3files } from '@cdk_utils/iam'

s3files.S3filesResources.parseFileSystemArn(arn: string)
```

Parses a file-system ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3files.S3filesResources.parseFileSystemArn.parameter.arn"></a>

- *Type:* string

---




