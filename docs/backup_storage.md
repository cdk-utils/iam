# `backup_storage` Submodule <a name="`backup_storage` Submodule" id="@cdk_utils/iam.backup_storage"></a>



## Classes <a name="Classes" id="Classes"></a>

### BackupStorageActions <a name="BackupStorageActions" id="@cdk_utils/iam.backup_storage.BackupStorageActions"></a>

IAM action constants for the backup-storage service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup_storage.BackupStorageActions.Initializer"></a>

```typescript
import { backup_storage } from '@cdk_utils/iam'

new backup_storage.BackupStorageActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.actionGetBaseBackup">actionGetBaseBackup</a></code> | <code>string</code> | [Write] backup-storage:GetBaseBackup. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.actionGetChunk">actionGetChunk</a></code> | <code>string</code> | [Write] backup-storage:GetChunk. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.actionGetIncrementalBaseBackup">actionGetIncrementalBaseBackup</a></code> | <code>string</code> | [Write] backup-storage:GetIncrementalBaseBackup. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.actionGetObjectMetadata">actionGetObjectMetadata</a></code> | <code>string</code> | [Write] backup-storage:GetObjectMetadata. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.CommitBackupJob">CommitBackupJob</a></code> | <code>string</code> | [Write] backup-storage:CommitBackupJob. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.DeleteObjects">DeleteObjects</a></code> | <code>string</code> | [Write] backup-storage:DeleteObjects. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.DescribeBackupJob">DescribeBackupJob</a></code> | <code>string</code> | [Write] backup-storage:DescribeBackupJob. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.ListChunks">ListChunks</a></code> | <code>string</code> | [Write] backup-storage:ListChunks. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.ListObjects">ListObjects</a></code> | <code>string</code> | [Write] backup-storage:ListObjects. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.MountCapsule">MountCapsule</a></code> | <code>string</code> | [Write] backup-storage:MountCapsule. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.NotifyObjectComplete">NotifyObjectComplete</a></code> | <code>string</code> | [Write] backup-storage:NotifyObjectComplete. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.PutChunk">PutChunk</a></code> | <code>string</code> | [Write] backup-storage:PutChunk. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.PutObject">PutObject</a></code> | <code>string</code> | [Write] backup-storage:PutObject. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.StartObject">StartObject</a></code> | <code>string</code> | [Write] backup-storage:StartObject. |
| <code><a href="#@cdk_utils/iam.backup_storage.BackupStorageActions.property.UpdateObjectComplete">UpdateObjectComplete</a></code> | <code>string</code> | [Write] backup-storage:UpdateObjectComplete. |

---

##### `actionGetBaseBackup`<sup>Required</sup> <a name="actionGetBaseBackup" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.actionGetBaseBackup"></a>

```typescript
public readonly actionGetBaseBackup: string;
```

- *Type:* string

[Write] backup-storage:GetBaseBackup.

---

##### `actionGetChunk`<sup>Required</sup> <a name="actionGetChunk" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.actionGetChunk"></a>

```typescript
public readonly actionGetChunk: string;
```

- *Type:* string

[Write] backup-storage:GetChunk.

---

##### `actionGetIncrementalBaseBackup`<sup>Required</sup> <a name="actionGetIncrementalBaseBackup" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.actionGetIncrementalBaseBackup"></a>

```typescript
public readonly actionGetIncrementalBaseBackup: string;
```

- *Type:* string

[Write] backup-storage:GetIncrementalBaseBackup.

---

##### `actionGetObjectMetadata`<sup>Required</sup> <a name="actionGetObjectMetadata" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.actionGetObjectMetadata"></a>

```typescript
public readonly actionGetObjectMetadata: string;
```

- *Type:* string

[Write] backup-storage:GetObjectMetadata.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CommitBackupJob`<sup>Required</sup> <a name="CommitBackupJob" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.CommitBackupJob"></a>

```typescript
public readonly CommitBackupJob: string;
```

- *Type:* string

[Write] backup-storage:CommitBackupJob.

---

##### `DeleteObjects`<sup>Required</sup> <a name="DeleteObjects" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.DeleteObjects"></a>

```typescript
public readonly DeleteObjects: string;
```

- *Type:* string

[Write] backup-storage:DeleteObjects.

---

##### `DescribeBackupJob`<sup>Required</sup> <a name="DescribeBackupJob" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.DescribeBackupJob"></a>

```typescript
public readonly DescribeBackupJob: string;
```

- *Type:* string

[Write] backup-storage:DescribeBackupJob.

---

##### `ListChunks`<sup>Required</sup> <a name="ListChunks" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.ListChunks"></a>

```typescript
public readonly ListChunks: string;
```

- *Type:* string

[Write] backup-storage:ListChunks.

---

##### `ListObjects`<sup>Required</sup> <a name="ListObjects" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.ListObjects"></a>

```typescript
public readonly ListObjects: string;
```

- *Type:* string

[Write] backup-storage:ListObjects.

---

##### `MountCapsule`<sup>Required</sup> <a name="MountCapsule" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.MountCapsule"></a>

```typescript
public readonly MountCapsule: string;
```

- *Type:* string

[Write] backup-storage:MountCapsule.

---

##### `NotifyObjectComplete`<sup>Required</sup> <a name="NotifyObjectComplete" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.NotifyObjectComplete"></a>

```typescript
public readonly NotifyObjectComplete: string;
```

- *Type:* string

[Write] backup-storage:NotifyObjectComplete.

---

##### `PutChunk`<sup>Required</sup> <a name="PutChunk" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.PutChunk"></a>

```typescript
public readonly PutChunk: string;
```

- *Type:* string

[Write] backup-storage:PutChunk.

---

##### `PutObject`<sup>Required</sup> <a name="PutObject" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.PutObject"></a>

```typescript
public readonly PutObject: string;
```

- *Type:* string

[Write] backup-storage:PutObject.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartObject`<sup>Required</sup> <a name="StartObject" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.StartObject"></a>

```typescript
public readonly StartObject: string;
```

- *Type:* string

[Write] backup-storage:StartObject.

---

##### `UpdateObjectComplete`<sup>Required</sup> <a name="UpdateObjectComplete" id="@cdk_utils/iam.backup_storage.BackupStorageActions.property.UpdateObjectComplete"></a>

```typescript
public readonly UpdateObjectComplete: string;
```

- *Type:* string

[Write] backup-storage:UpdateObjectComplete.

---


