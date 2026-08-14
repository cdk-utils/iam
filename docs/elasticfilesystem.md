# `elasticfilesystem` Submodule <a name="`elasticfilesystem` Submodule" id="@cdk_utils/iam.elasticfilesystem"></a>


## Structs <a name="Structs" id="Structs"></a>

### ElasticfilesystemAccessPointArnComponents <a name="ElasticfilesystemAccessPointArnComponents" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnComponents"></a>

Parsed components of a access-point ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnComponents.Initializer"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

const elasticfilesystemAccessPointArnComponents: elasticfilesystem.ElasticfilesystemAccessPointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnComponents.property.accessPointId">accessPointId</a></code> | <code>string</code> | The AccessPointId component. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnComponents.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

The AccessPointId component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticfilesystemAccessPointArnProps <a name="ElasticfilesystemAccessPointArnProps" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps"></a>

Properties for building a access-point ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps.Initializer"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

const elasticfilesystemAccessPointArnProps: elasticfilesystem.ElasticfilesystemAccessPointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps.property.accessPointId">accessPointId</a></code> | <code>string</code> | The AccessPointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

The AccessPointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticfilesystemFileSystemArnComponents <a name="ElasticfilesystemFileSystemArnComponents" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnComponents"></a>

Parsed components of a file-system ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnComponents.Initializer"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

const elasticfilesystemFileSystemArnComponents: elasticfilesystem.ElasticfilesystemFileSystemArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnComponents.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnComponents.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticfilesystemFileSystemArnProps <a name="ElasticfilesystemFileSystemArnProps" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps"></a>

Properties for building a file-system ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps.Initializer"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

const elasticfilesystemFileSystemArnProps: elasticfilesystem.ElasticfilesystemFileSystemArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticfilesystemActions <a name="ElasticfilesystemActions" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions"></a>

IAM action constants for the elasticfilesystem service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.Initializer"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

new elasticfilesystem.ElasticfilesystemActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.Backup">Backup</a></code> | <code>string</code> | [Write] elasticfilesystem:Backup. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ClientMount">ClientMount</a></code> | <code>string</code> | [Read] elasticfilesystem:ClientMount. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ClientRootAccess">ClientRootAccess</a></code> | <code>string</code> | [Write] elasticfilesystem:ClientRootAccess. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ClientWrite">ClientWrite</a></code> | <code>string</code> | [Write] elasticfilesystem:ClientWrite. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.CreateAccessPoint">CreateAccessPoint</a></code> | <code>string</code> | [Write] elasticfilesystem:CreateAccessPoint. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.CreateFileSystem">CreateFileSystem</a></code> | <code>string</code> | [Write] elasticfilesystem:CreateFileSystem. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.CreateMountTarget">CreateMountTarget</a></code> | <code>string</code> | [Write] elasticfilesystem:CreateMountTarget. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.CreateReplicationConfiguration">CreateReplicationConfiguration</a></code> | <code>string</code> | [Write] elasticfilesystem:CreateReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.CreateTags">CreateTags</a></code> | <code>string</code> | [Tagging] elasticfilesystem:CreateTags. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteAccessPoint">DeleteAccessPoint</a></code> | <code>string</code> | [Write] elasticfilesystem:DeleteAccessPoint. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteFileSystem">DeleteFileSystem</a></code> | <code>string</code> | [Write] elasticfilesystem:DeleteFileSystem. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteFileSystemPolicy">DeleteFileSystemPolicy</a></code> | <code>string</code> | [PermissionManagement] elasticfilesystem:DeleteFileSystemPolicy. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteMountTarget">DeleteMountTarget</a></code> | <code>string</code> | [Write] elasticfilesystem:DeleteMountTarget. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteReplicationConfiguration">DeleteReplicationConfiguration</a></code> | <code>string</code> | [Write] elasticfilesystem:DeleteReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteTags">DeleteTags</a></code> | <code>string</code> | [Tagging] elasticfilesystem:DeleteTags. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeAccessPoints">DescribeAccessPoints</a></code> | <code>string</code> | [List] elasticfilesystem:DescribeAccessPoints. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeAccountPreferences">DescribeAccountPreferences</a></code> | <code>string</code> | [List] elasticfilesystem:DescribeAccountPreferences. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeBackupPolicy">DescribeBackupPolicy</a></code> | <code>string</code> | [Read] elasticfilesystem:DescribeBackupPolicy. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeFileSystemPolicy">DescribeFileSystemPolicy</a></code> | <code>string</code> | [Read] elasticfilesystem:DescribeFileSystemPolicy. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeFileSystems">DescribeFileSystems</a></code> | <code>string</code> | [List] elasticfilesystem:DescribeFileSystems. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeLifecycleConfiguration">DescribeLifecycleConfiguration</a></code> | <code>string</code> | [Read] elasticfilesystem:DescribeLifecycleConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeMountTargets">DescribeMountTargets</a></code> | <code>string</code> | [Read] elasticfilesystem:DescribeMountTargets. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeMountTargetSecurityGroups">DescribeMountTargetSecurityGroups</a></code> | <code>string</code> | [Read] elasticfilesystem:DescribeMountTargetSecurityGroups. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeReplicationConfigurations">DescribeReplicationConfigurations</a></code> | <code>string</code> | [List] elasticfilesystem:DescribeReplicationConfigurations. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeTags">DescribeTags</a></code> | <code>string</code> | [Read] elasticfilesystem:DescribeTags. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] elasticfilesystem:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ModifyMountTargetSecurityGroups">ModifyMountTargetSecurityGroups</a></code> | <code>string</code> | [Write] elasticfilesystem:ModifyMountTargetSecurityGroups. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.PutAccountPreferences">PutAccountPreferences</a></code> | <code>string</code> | [Write] elasticfilesystem:PutAccountPreferences. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.PutBackupPolicy">PutBackupPolicy</a></code> | <code>string</code> | [Write] elasticfilesystem:PutBackupPolicy. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.PutFileSystemPolicy">PutFileSystemPolicy</a></code> | <code>string</code> | [PermissionManagement] elasticfilesystem:PutFileSystemPolicy. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.PutLifecycleConfiguration">PutLifecycleConfiguration</a></code> | <code>string</code> | [Write] elasticfilesystem:PutLifecycleConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ReplicationRead">ReplicationRead</a></code> | <code>string</code> | [Read] elasticfilesystem:ReplicationRead. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ReplicationWrite">ReplicationWrite</a></code> | <code>string</code> | [Write] elasticfilesystem:ReplicationWrite. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.Restore">Restore</a></code> | <code>string</code> | [Write] elasticfilesystem:Restore. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] elasticfilesystem:TagResource. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] elasticfilesystem:UntagResource. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.UpdateFileSystem">UpdateFileSystem</a></code> | <code>string</code> | [Write] elasticfilesystem:UpdateFileSystem. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.UpdateFileSystemProtection">UpdateFileSystemProtection</a></code> | <code>string</code> | [Write] elasticfilesystem:UpdateFileSystemProtection. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.Backup"></a>

```typescript
public readonly Backup: string;
```

- *Type:* string

[Write] elasticfilesystem:Backup.

---

##### `ClientMount`<sup>Required</sup> <a name="ClientMount" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ClientMount"></a>

```typescript
public readonly ClientMount: string;
```

- *Type:* string

[Read] elasticfilesystem:ClientMount.

---

##### `ClientRootAccess`<sup>Required</sup> <a name="ClientRootAccess" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ClientRootAccess"></a>

```typescript
public readonly ClientRootAccess: string;
```

- *Type:* string

[Write] elasticfilesystem:ClientRootAccess.

---

##### `ClientWrite`<sup>Required</sup> <a name="ClientWrite" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ClientWrite"></a>

```typescript
public readonly ClientWrite: string;
```

- *Type:* string

[Write] elasticfilesystem:ClientWrite.

---

##### `CreateAccessPoint`<sup>Required</sup> <a name="CreateAccessPoint" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.CreateAccessPoint"></a>

```typescript
public readonly CreateAccessPoint: string;
```

- *Type:* string

[Write] elasticfilesystem:CreateAccessPoint.

---

##### `CreateFileSystem`<sup>Required</sup> <a name="CreateFileSystem" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.CreateFileSystem"></a>

```typescript
public readonly CreateFileSystem: string;
```

- *Type:* string

[Write] elasticfilesystem:CreateFileSystem.

---

##### `CreateMountTarget`<sup>Required</sup> <a name="CreateMountTarget" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.CreateMountTarget"></a>

```typescript
public readonly CreateMountTarget: string;
```

- *Type:* string

[Write] elasticfilesystem:CreateMountTarget.

---

##### `CreateReplicationConfiguration`<sup>Required</sup> <a name="CreateReplicationConfiguration" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.CreateReplicationConfiguration"></a>

```typescript
public readonly CreateReplicationConfiguration: string;
```

- *Type:* string

[Write] elasticfilesystem:CreateReplicationConfiguration.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.CreateTags"></a>

```typescript
public readonly CreateTags: string;
```

- *Type:* string

[Tagging] elasticfilesystem:CreateTags.

---

##### `DeleteAccessPoint`<sup>Required</sup> <a name="DeleteAccessPoint" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteAccessPoint"></a>

```typescript
public readonly DeleteAccessPoint: string;
```

- *Type:* string

[Write] elasticfilesystem:DeleteAccessPoint.

---

##### `DeleteFileSystem`<sup>Required</sup> <a name="DeleteFileSystem" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteFileSystem"></a>

```typescript
public readonly DeleteFileSystem: string;
```

- *Type:* string

[Write] elasticfilesystem:DeleteFileSystem.

---

##### `DeleteFileSystemPolicy`<sup>Required</sup> <a name="DeleteFileSystemPolicy" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteFileSystemPolicy"></a>

```typescript
public readonly DeleteFileSystemPolicy: string;
```

- *Type:* string

[PermissionManagement] elasticfilesystem:DeleteFileSystemPolicy.

---

##### `DeleteMountTarget`<sup>Required</sup> <a name="DeleteMountTarget" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteMountTarget"></a>

```typescript
public readonly DeleteMountTarget: string;
```

- *Type:* string

[Write] elasticfilesystem:DeleteMountTarget.

---

##### `DeleteReplicationConfiguration`<sup>Required</sup> <a name="DeleteReplicationConfiguration" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteReplicationConfiguration"></a>

```typescript
public readonly DeleteReplicationConfiguration: string;
```

- *Type:* string

[Write] elasticfilesystem:DeleteReplicationConfiguration.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string;
```

- *Type:* string

[Tagging] elasticfilesystem:DeleteTags.

---

##### `DescribeAccessPoints`<sup>Required</sup> <a name="DescribeAccessPoints" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeAccessPoints"></a>

```typescript
public readonly DescribeAccessPoints: string;
```

- *Type:* string

[List] elasticfilesystem:DescribeAccessPoints.

---

##### `DescribeAccountPreferences`<sup>Required</sup> <a name="DescribeAccountPreferences" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeAccountPreferences"></a>

```typescript
public readonly DescribeAccountPreferences: string;
```

- *Type:* string

[List] elasticfilesystem:DescribeAccountPreferences.

---

##### `DescribeBackupPolicy`<sup>Required</sup> <a name="DescribeBackupPolicy" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeBackupPolicy"></a>

```typescript
public readonly DescribeBackupPolicy: string;
```

- *Type:* string

[Read] elasticfilesystem:DescribeBackupPolicy.

---

##### `DescribeFileSystemPolicy`<sup>Required</sup> <a name="DescribeFileSystemPolicy" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeFileSystemPolicy"></a>

```typescript
public readonly DescribeFileSystemPolicy: string;
```

- *Type:* string

[Read] elasticfilesystem:DescribeFileSystemPolicy.

---

##### `DescribeFileSystems`<sup>Required</sup> <a name="DescribeFileSystems" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeFileSystems"></a>

```typescript
public readonly DescribeFileSystems: string;
```

- *Type:* string

[List] elasticfilesystem:DescribeFileSystems.

---

##### `DescribeLifecycleConfiguration`<sup>Required</sup> <a name="DescribeLifecycleConfiguration" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeLifecycleConfiguration"></a>

```typescript
public readonly DescribeLifecycleConfiguration: string;
```

- *Type:* string

[Read] elasticfilesystem:DescribeLifecycleConfiguration.

---

##### `DescribeMountTargets`<sup>Required</sup> <a name="DescribeMountTargets" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeMountTargets"></a>

```typescript
public readonly DescribeMountTargets: string;
```

- *Type:* string

[Read] elasticfilesystem:DescribeMountTargets.

---

##### `DescribeMountTargetSecurityGroups`<sup>Required</sup> <a name="DescribeMountTargetSecurityGroups" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeMountTargetSecurityGroups"></a>

```typescript
public readonly DescribeMountTargetSecurityGroups: string;
```

- *Type:* string

[Read] elasticfilesystem:DescribeMountTargetSecurityGroups.

---

##### `DescribeReplicationConfigurations`<sup>Required</sup> <a name="DescribeReplicationConfigurations" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeReplicationConfigurations"></a>

```typescript
public readonly DescribeReplicationConfigurations: string;
```

- *Type:* string

[List] elasticfilesystem:DescribeReplicationConfigurations.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string;
```

- *Type:* string

[Read] elasticfilesystem:DescribeTags.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] elasticfilesystem:ListTagsForResource.

---

##### `ModifyMountTargetSecurityGroups`<sup>Required</sup> <a name="ModifyMountTargetSecurityGroups" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ModifyMountTargetSecurityGroups"></a>

```typescript
public readonly ModifyMountTargetSecurityGroups: string;
```

- *Type:* string

[Write] elasticfilesystem:ModifyMountTargetSecurityGroups.

---

##### `PutAccountPreferences`<sup>Required</sup> <a name="PutAccountPreferences" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.PutAccountPreferences"></a>

```typescript
public readonly PutAccountPreferences: string;
```

- *Type:* string

[Write] elasticfilesystem:PutAccountPreferences.

---

##### `PutBackupPolicy`<sup>Required</sup> <a name="PutBackupPolicy" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.PutBackupPolicy"></a>

```typescript
public readonly PutBackupPolicy: string;
```

- *Type:* string

[Write] elasticfilesystem:PutBackupPolicy.

---

##### `PutFileSystemPolicy`<sup>Required</sup> <a name="PutFileSystemPolicy" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.PutFileSystemPolicy"></a>

```typescript
public readonly PutFileSystemPolicy: string;
```

- *Type:* string

[PermissionManagement] elasticfilesystem:PutFileSystemPolicy.

---

##### `PutLifecycleConfiguration`<sup>Required</sup> <a name="PutLifecycleConfiguration" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.PutLifecycleConfiguration"></a>

```typescript
public readonly PutLifecycleConfiguration: string;
```

- *Type:* string

[Write] elasticfilesystem:PutLifecycleConfiguration.

---

##### `ReplicationRead`<sup>Required</sup> <a name="ReplicationRead" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ReplicationRead"></a>

```typescript
public readonly ReplicationRead: string;
```

- *Type:* string

[Read] elasticfilesystem:ReplicationRead.

---

##### `ReplicationWrite`<sup>Required</sup> <a name="ReplicationWrite" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.ReplicationWrite"></a>

```typescript
public readonly ReplicationWrite: string;
```

- *Type:* string

[Write] elasticfilesystem:ReplicationWrite.

---

##### `Restore`<sup>Required</sup> <a name="Restore" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.Restore"></a>

```typescript
public readonly Restore: string;
```

- *Type:* string

[Write] elasticfilesystem:Restore.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] elasticfilesystem:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] elasticfilesystem:UntagResource.

---

##### `UpdateFileSystem`<sup>Required</sup> <a name="UpdateFileSystem" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.UpdateFileSystem"></a>

```typescript
public readonly UpdateFileSystem: string;
```

- *Type:* string

[Write] elasticfilesystem:UpdateFileSystem.

---

##### `UpdateFileSystemProtection`<sup>Required</sup> <a name="UpdateFileSystemProtection" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemActions.property.UpdateFileSystemProtection"></a>

```typescript
public readonly UpdateFileSystemProtection: string;
```

- *Type:* string

[Write] elasticfilesystem:UpdateFileSystemProtection.

---

### ElasticfilesystemConditions <a name="ElasticfilesystemConditions" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions"></a>

Condition key constants and builders for elasticfilesystem.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.Initializer"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

new elasticfilesystem.ElasticfilesystemConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.accessedViaMountTarget">accessedViaMountTarget</a></code> | Generates a condition block for `elasticfilesystem:AccessedViaMountTarget`. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.accessPointARN">accessPointARN</a></code> | Generates a condition block for `elasticfilesystem:AccessPointArn`. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.createAction">createAction</a></code> | Generates a condition block for `elasticfilesystem:CreateAction`. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.encrypted">encrypted</a></code> | Generates a condition block for `elasticfilesystem:Encrypted`. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `accessedViaMountTarget` <a name="accessedViaMountTarget" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.accessedViaMountTarget"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemConditions.accessedViaMountTarget(value: boolean)
```

Generates a condition block for `elasticfilesystem:AccessedViaMountTarget`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.accessedViaMountTarget.parameter.value"></a>

- *Type:* boolean

---

##### `accessPointARN` <a name="accessPointARN" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.accessPointARN"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemConditions.accessPointARN(value: string)
```

Generates a condition block for `elasticfilesystem:AccessPointArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.accessPointARN.parameter.value"></a>

- *Type:* string

---

##### `createAction` <a name="createAction" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.createAction"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemConditions.createAction(value: string)
```

Generates a condition block for `elasticfilesystem:CreateAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.createAction.parameter.value"></a>

- *Type:* string

---

##### `encrypted` <a name="encrypted" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.encrypted"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemConditions.encrypted(value: boolean)
```

Generates a condition block for `elasticfilesystem:Encrypted`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.encrypted.parameter.value"></a>

- *Type:* boolean

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.requestTag"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.resourceTag"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.tagKeys"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ACCESS_POINT_ARN">ACCESS_POINT_ARN</a></code> | <code>string</code> | Condition key: elasticfilesystem:AccessPointArn (ARN). |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ACCESSED_VIA_MOUNT_TARGET">ACCESSED_VIA_MOUNT_TARGET</a></code> | <code>string</code> | Condition key: elasticfilesystem:AccessedViaMountTarget (Bool). |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ClientMountConditionKeys">ClientMountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ClientMount action. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ClientRootAccessConditionKeys">ClientRootAccessConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ClientRootAccess action. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ClientWriteConditionKeys">ClientWriteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ClientWrite action. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.CREATE_ACTION">CREATE_ACTION</a></code> | <code>string</code> | Condition key: elasticfilesystem:CreateAction (String). |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.CreateAccessPointConditionKeys">CreateAccessPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessPoint action. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.CreateFileSystemConditionKeys">CreateFileSystemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFileSystem action. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.CreateTagsConditionKeys">CreateTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTags action. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.DeleteTagsConditionKeys">DeleteTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTags action. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ENCRYPTED">ENCRYPTED</a></code> | <code>string</code> | Condition key: elasticfilesystem:Encrypted (Bool). |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `ACCESS_POINT_ARN`<sup>Required</sup> <a name="ACCESS_POINT_ARN" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ACCESS_POINT_ARN"></a>

```typescript
public readonly ACCESS_POINT_ARN: string;
```

- *Type:* string

Condition key: elasticfilesystem:AccessPointArn (ARN).

---

##### `ACCESSED_VIA_MOUNT_TARGET`<sup>Required</sup> <a name="ACCESSED_VIA_MOUNT_TARGET" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ACCESSED_VIA_MOUNT_TARGET"></a>

```typescript
public readonly ACCESSED_VIA_MOUNT_TARGET: string;
```

- *Type:* string

Condition key: elasticfilesystem:AccessedViaMountTarget (Bool).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `ClientMountConditionKeys`<sup>Required</sup> <a name="ClientMountConditionKeys" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ClientMountConditionKeys"></a>

```typescript
public readonly ClientMountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ClientMount action.

---

##### `ClientRootAccessConditionKeys`<sup>Required</sup> <a name="ClientRootAccessConditionKeys" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ClientRootAccessConditionKeys"></a>

```typescript
public readonly ClientRootAccessConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ClientRootAccess action.

---

##### `ClientWriteConditionKeys`<sup>Required</sup> <a name="ClientWriteConditionKeys" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ClientWriteConditionKeys"></a>

```typescript
public readonly ClientWriteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ClientWrite action.

---

##### `CREATE_ACTION`<sup>Required</sup> <a name="CREATE_ACTION" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.CREATE_ACTION"></a>

```typescript
public readonly CREATE_ACTION: string;
```

- *Type:* string

Condition key: elasticfilesystem:CreateAction (String).

---

##### `CreateAccessPointConditionKeys`<sup>Required</sup> <a name="CreateAccessPointConditionKeys" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.CreateAccessPointConditionKeys"></a>

```typescript
public readonly CreateAccessPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessPoint action.

---

##### `CreateFileSystemConditionKeys`<sup>Required</sup> <a name="CreateFileSystemConditionKeys" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.CreateFileSystemConditionKeys"></a>

```typescript
public readonly CreateFileSystemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFileSystem action.

---

##### `CreateTagsConditionKeys`<sup>Required</sup> <a name="CreateTagsConditionKeys" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.CreateTagsConditionKeys"></a>

```typescript
public readonly CreateTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTags action.

---

##### `DeleteTagsConditionKeys`<sup>Required</sup> <a name="DeleteTagsConditionKeys" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.DeleteTagsConditionKeys"></a>

```typescript
public readonly DeleteTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTags action.

---

##### `ENCRYPTED`<sup>Required</sup> <a name="ENCRYPTED" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.ENCRYPTED"></a>

```typescript
public readonly ENCRYPTED: string;
```

- *Type:* string

Condition key: elasticfilesystem:Encrypted (Bool).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ElasticfilesystemOperations <a name="ElasticfilesystemOperations" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations"></a>

API operation to required IAM actions mapping for elasticfilesystem.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.Initializer"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

new elasticfilesystem.ElasticfilesystemOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.CreateAccessPoint">CreateAccessPoint</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessPoint API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.CreateFileSystem">CreateFileSystem</a></code> | <code>string[]</code> | IAM actions required for the CreateFileSystem API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.CreateMountTarget">CreateMountTarget</a></code> | <code>string[]</code> | IAM actions required for the CreateMountTarget API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.CreateReplicationConfiguration">CreateReplicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateReplicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.CreateTags">CreateTags</a></code> | <code>string[]</code> | IAM actions required for the CreateTags API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteAccessPoint">DeleteAccessPoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessPoint API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteFileSystem">DeleteFileSystem</a></code> | <code>string[]</code> | IAM actions required for the DeleteFileSystem API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteFileSystemPolicy">DeleteFileSystemPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteFileSystemPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteMountTarget">DeleteMountTarget</a></code> | <code>string[]</code> | IAM actions required for the DeleteMountTarget API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteReplicationConfiguration">DeleteReplicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteTags">DeleteTags</a></code> | <code>string[]</code> | IAM actions required for the DeleteTags API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeAccessPoints">DescribeAccessPoints</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccessPoints API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeAccountPreferences">DescribeAccountPreferences</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountPreferences API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeBackupPolicy">DescribeBackupPolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeBackupPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeFileSystemPolicy">DescribeFileSystemPolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeFileSystemPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeFileSystems">DescribeFileSystems</a></code> | <code>string[]</code> | IAM actions required for the DescribeFileSystems API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeLifecycleConfiguration">DescribeLifecycleConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeLifecycleConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeMountTargets">DescribeMountTargets</a></code> | <code>string[]</code> | IAM actions required for the DescribeMountTargets API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeMountTargetSecurityGroups">DescribeMountTargetSecurityGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeMountTargetSecurityGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeReplicationConfigurations">DescribeReplicationConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationConfigurations API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeTags">DescribeTags</a></code> | <code>string[]</code> | IAM actions required for the DescribeTags API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.ModifyMountTargetSecurityGroups">ModifyMountTargetSecurityGroups</a></code> | <code>string[]</code> | IAM actions required for the ModifyMountTargetSecurityGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.PutAccountPreferences">PutAccountPreferences</a></code> | <code>string[]</code> | IAM actions required for the PutAccountPreferences API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.PutBackupPolicy">PutBackupPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutBackupPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.PutFileSystemPolicy">PutFileSystemPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutFileSystemPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.PutLifecycleConfiguration">PutLifecycleConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutLifecycleConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.UpdateFileSystem">UpdateFileSystem</a></code> | <code>string[]</code> | IAM actions required for the UpdateFileSystem API call. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.UpdateFileSystemProtection">UpdateFileSystemProtection</a></code> | <code>string[]</code> | IAM actions required for the UpdateFileSystemProtection API call. |

---

##### `CreateAccessPoint`<sup>Required</sup> <a name="CreateAccessPoint" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.CreateAccessPoint"></a>

```typescript
public readonly CreateAccessPoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessPoint API call.

---

##### `CreateFileSystem`<sup>Required</sup> <a name="CreateFileSystem" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.CreateFileSystem"></a>

```typescript
public readonly CreateFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the CreateFileSystem API call.

---

##### `CreateMountTarget`<sup>Required</sup> <a name="CreateMountTarget" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.CreateMountTarget"></a>

```typescript
public readonly CreateMountTarget: string[];
```

- *Type:* string[]

IAM actions required for the CreateMountTarget API call.

---

##### `CreateReplicationConfiguration`<sup>Required</sup> <a name="CreateReplicationConfiguration" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.CreateReplicationConfiguration"></a>

```typescript
public readonly CreateReplicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateReplicationConfiguration API call.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.CreateTags"></a>

```typescript
public readonly CreateTags: string[];
```

- *Type:* string[]

IAM actions required for the CreateTags API call.

---

##### `DeleteAccessPoint`<sup>Required</sup> <a name="DeleteAccessPoint" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteAccessPoint"></a>

```typescript
public readonly DeleteAccessPoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessPoint API call.

---

##### `DeleteFileSystem`<sup>Required</sup> <a name="DeleteFileSystem" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteFileSystem"></a>

```typescript
public readonly DeleteFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFileSystem API call.

---

##### `DeleteFileSystemPolicy`<sup>Required</sup> <a name="DeleteFileSystemPolicy" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteFileSystemPolicy"></a>

```typescript
public readonly DeleteFileSystemPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFileSystemPolicy API call.

---

##### `DeleteMountTarget`<sup>Required</sup> <a name="DeleteMountTarget" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteMountTarget"></a>

```typescript
public readonly DeleteMountTarget: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMountTarget API call.

---

##### `DeleteReplicationConfiguration`<sup>Required</sup> <a name="DeleteReplicationConfiguration" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteReplicationConfiguration"></a>

```typescript
public readonly DeleteReplicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicationConfiguration API call.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTags API call.

---

##### `DescribeAccessPoints`<sup>Required</sup> <a name="DescribeAccessPoints" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeAccessPoints"></a>

```typescript
public readonly DescribeAccessPoints: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccessPoints API call.

---

##### `DescribeAccountPreferences`<sup>Required</sup> <a name="DescribeAccountPreferences" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeAccountPreferences"></a>

```typescript
public readonly DescribeAccountPreferences: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountPreferences API call.

---

##### `DescribeBackupPolicy`<sup>Required</sup> <a name="DescribeBackupPolicy" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeBackupPolicy"></a>

```typescript
public readonly DescribeBackupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBackupPolicy API call.

---

##### `DescribeFileSystemPolicy`<sup>Required</sup> <a name="DescribeFileSystemPolicy" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeFileSystemPolicy"></a>

```typescript
public readonly DescribeFileSystemPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFileSystemPolicy API call.

---

##### `DescribeFileSystems`<sup>Required</sup> <a name="DescribeFileSystems" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeFileSystems"></a>

```typescript
public readonly DescribeFileSystems: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFileSystems API call.

---

##### `DescribeLifecycleConfiguration`<sup>Required</sup> <a name="DescribeLifecycleConfiguration" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeLifecycleConfiguration"></a>

```typescript
public readonly DescribeLifecycleConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLifecycleConfiguration API call.

---

##### `DescribeMountTargets`<sup>Required</sup> <a name="DescribeMountTargets" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeMountTargets"></a>

```typescript
public readonly DescribeMountTargets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMountTargets API call.

---

##### `DescribeMountTargetSecurityGroups`<sup>Required</sup> <a name="DescribeMountTargetSecurityGroups" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeMountTargetSecurityGroups"></a>

```typescript
public readonly DescribeMountTargetSecurityGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMountTargetSecurityGroups API call.

---

##### `DescribeReplicationConfigurations`<sup>Required</sup> <a name="DescribeReplicationConfigurations" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeReplicationConfigurations"></a>

```typescript
public readonly DescribeReplicationConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationConfigurations API call.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTags API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ModifyMountTargetSecurityGroups`<sup>Required</sup> <a name="ModifyMountTargetSecurityGroups" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.ModifyMountTargetSecurityGroups"></a>

```typescript
public readonly ModifyMountTargetSecurityGroups: string[];
```

- *Type:* string[]

IAM actions required for the ModifyMountTargetSecurityGroups API call.

---

##### `PutAccountPreferences`<sup>Required</sup> <a name="PutAccountPreferences" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.PutAccountPreferences"></a>

```typescript
public readonly PutAccountPreferences: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountPreferences API call.

---

##### `PutBackupPolicy`<sup>Required</sup> <a name="PutBackupPolicy" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.PutBackupPolicy"></a>

```typescript
public readonly PutBackupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutBackupPolicy API call.

---

##### `PutFileSystemPolicy`<sup>Required</sup> <a name="PutFileSystemPolicy" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.PutFileSystemPolicy"></a>

```typescript
public readonly PutFileSystemPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutFileSystemPolicy API call.

---

##### `PutLifecycleConfiguration`<sup>Required</sup> <a name="PutLifecycleConfiguration" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.PutLifecycleConfiguration"></a>

```typescript
public readonly PutLifecycleConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutLifecycleConfiguration API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateFileSystem`<sup>Required</sup> <a name="UpdateFileSystem" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.UpdateFileSystem"></a>

```typescript
public readonly UpdateFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFileSystem API call.

---

##### `UpdateFileSystemProtection`<sup>Required</sup> <a name="UpdateFileSystemProtection" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemOperations.property.UpdateFileSystemProtection"></a>

```typescript
public readonly UpdateFileSystemProtection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFileSystemProtection API call.

---

### ElasticfilesystemResources <a name="ElasticfilesystemResources" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources"></a>

ARN builders, validators, and parsers for elasticfilesystem resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.Initializer"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

new elasticfilesystem.ElasticfilesystemResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.accessPoint">accessPoint</a></code> | Builds an ARN for the access-point resource. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.fileSystem">fileSystem</a></code> | Builds an ARN for the file-system resource. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.isValidAccessPointArn">isValidAccessPointArn</a></code> | Validates whether a string is a valid ARN for the access-point resource. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.isValidFileSystemArn">isValidFileSystemArn</a></code> | Validates whether a string is a valid ARN for the file-system resource. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.parseAccessPointArn">parseAccessPointArn</a></code> | Parses a access-point ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.parseFileSystemArn">parseFileSystemArn</a></code> | Parses a file-system ARN into its components. |

---

##### `accessPoint` <a name="accessPoint" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.accessPoint"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemResources.accessPoint(props: ElasticfilesystemAccessPointArnProps)
```

Builds an ARN for the access-point resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.accessPoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemAccessPointArnProps">ElasticfilesystemAccessPointArnProps</a>

---

##### `fileSystem` <a name="fileSystem" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.fileSystem"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemResources.fileSystem(props: ElasticfilesystemFileSystemArnProps)
```

Builds an ARN for the file-system resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.fileSystem.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticfilesystem.ElasticfilesystemFileSystemArnProps">ElasticfilesystemFileSystemArnProps</a>

---

##### `isValidAccessPointArn` <a name="isValidAccessPointArn" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.isValidAccessPointArn"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemResources.isValidAccessPointArn(arn: string)
```

Validates whether a string is a valid ARN for the access-point resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.isValidAccessPointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFileSystemArn` <a name="isValidFileSystemArn" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.isValidFileSystemArn"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemResources.isValidFileSystemArn(arn: string)
```

Validates whether a string is a valid ARN for the file-system resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.isValidFileSystemArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccessPointArn` <a name="parseAccessPointArn" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.parseAccessPointArn"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemResources.parseAccessPointArn(arn: string)
```

Parses a access-point ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.parseAccessPointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFileSystemArn` <a name="parseFileSystemArn" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.parseFileSystemArn"></a>

```typescript
import { elasticfilesystem } from '@cdk_utils/iam'

elasticfilesystem.ElasticfilesystemResources.parseFileSystemArn(arn: string)
```

Parses a file-system ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticfilesystem.ElasticfilesystemResources.parseFileSystemArn.parameter.arn"></a>

- *Type:* string

---




