# `fsx` Submodule <a name="`fsx` Submodule" id="@cdk_utils/iam.fsx"></a>


## Structs <a name="Structs" id="Structs"></a>

### FsxAssociationArnComponents <a name="FsxAssociationArnComponents" id="@cdk_utils/iam.fsx.FsxAssociationArnComponents"></a>

Parsed components of a association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxAssociationArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxAssociationArnComponents: fsx.FsxAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxAssociationArnComponents.property.dataRepositoryAssociationId">dataRepositoryAssociationId</a></code> | <code>string</code> | The DataRepositoryAssociationId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxAssociationArnComponents.property.fileSystemIdOrFileCacheId">fileSystemIdOrFileCacheId</a></code> | <code>string</code> | The FileSystemIdOrFileCacheId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataRepositoryAssociationId`<sup>Required</sup> <a name="dataRepositoryAssociationId" id="@cdk_utils/iam.fsx.FsxAssociationArnComponents.property.dataRepositoryAssociationId"></a>

```typescript
public readonly dataRepositoryAssociationId: string;
```

- *Type:* string

The DataRepositoryAssociationId component.

---

##### `fileSystemIdOrFileCacheId`<sup>Required</sup> <a name="fileSystemIdOrFileCacheId" id="@cdk_utils/iam.fsx.FsxAssociationArnComponents.property.fileSystemIdOrFileCacheId"></a>

```typescript
public readonly fileSystemIdOrFileCacheId: string;
```

- *Type:* string

The FileSystemIdOrFileCacheId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FsxAssociationArnProps <a name="FsxAssociationArnProps" id="@cdk_utils/iam.fsx.FsxAssociationArnProps"></a>

Properties for building a association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxAssociationArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxAssociationArnProps: fsx.FsxAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxAssociationArnProps.property.dataRepositoryAssociationId">dataRepositoryAssociationId</a></code> | <code>string</code> | The DataRepositoryAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxAssociationArnProps.property.fileSystemIdOrFileCacheId">fileSystemIdOrFileCacheId</a></code> | <code>string</code> | The FileSystemIdOrFileCacheId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataRepositoryAssociationId`<sup>Required</sup> <a name="dataRepositoryAssociationId" id="@cdk_utils/iam.fsx.FsxAssociationArnProps.property.dataRepositoryAssociationId"></a>

```typescript
public readonly dataRepositoryAssociationId: string;
```

- *Type:* string

The DataRepositoryAssociationId component of the ARN.

---

##### `fileSystemIdOrFileCacheId`<sup>Required</sup> <a name="fileSystemIdOrFileCacheId" id="@cdk_utils/iam.fsx.FsxAssociationArnProps.property.fileSystemIdOrFileCacheId"></a>

```typescript
public readonly fileSystemIdOrFileCacheId: string;
```

- *Type:* string

The FileSystemIdOrFileCacheId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxBackupArnComponents <a name="FsxBackupArnComponents" id="@cdk_utils/iam.fsx.FsxBackupArnComponents"></a>

Parsed components of a backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxBackupArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxBackupArnComponents: fsx.FsxBackupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxBackupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxBackupArnComponents.property.backupId">backupId</a></code> | <code>string</code> | The BackupId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxBackupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxBackupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxBackupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdk_utils/iam.fsx.FsxBackupArnComponents.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

The BackupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxBackupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxBackupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FsxBackupArnProps <a name="FsxBackupArnProps" id="@cdk_utils/iam.fsx.FsxBackupArnProps"></a>

Properties for building a backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxBackupArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxBackupArnProps: fsx.FsxBackupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxBackupArnProps.property.backupId">backupId</a></code> | <code>string</code> | The BackupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxBackupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxBackupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxBackupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdk_utils/iam.fsx.FsxBackupArnProps.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

The BackupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxBackupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxBackupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxBackupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxClusterPeerArnComponents <a name="FsxClusterPeerArnComponents" id="@cdk_utils/iam.fsx.FsxClusterPeerArnComponents"></a>

Parsed components of a cluster-peer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxClusterPeerArnComponents: fsx.FsxClusterPeerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.property.clusterPeerId">clusterPeerId</a></code> | <code>string</code> | The ClusterPeerId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterPeerId`<sup>Required</sup> <a name="clusterPeerId" id="@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.property.clusterPeerId"></a>

```typescript
public readonly clusterPeerId: string;
```

- *Type:* string

The ClusterPeerId component.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxClusterPeerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FsxClusterPeerArnProps <a name="FsxClusterPeerArnProps" id="@cdk_utils/iam.fsx.FsxClusterPeerArnProps"></a>

Properties for building a cluster-peer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxClusterPeerArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxClusterPeerArnProps: fsx.FsxClusterPeerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnProps.property.clusterPeerId">clusterPeerId</a></code> | <code>string</code> | The ClusterPeerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnProps.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterPeerId`<sup>Required</sup> <a name="clusterPeerId" id="@cdk_utils/iam.fsx.FsxClusterPeerArnProps.property.clusterPeerId"></a>

```typescript
public readonly clusterPeerId: string;
```

- *Type:* string

The ClusterPeerId component of the ARN.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxClusterPeerArnProps.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxClusterPeerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxClusterPeerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxClusterPeerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxFileCacheArnComponents <a name="FsxFileCacheArnComponents" id="@cdk_utils/iam.fsx.FsxFileCacheArnComponents"></a>

Parsed components of a file-cache ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxFileCacheArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxFileCacheArnComponents: fsx.FsxFileCacheArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileCacheArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileCacheArnComponents.property.fileCacheId">fileCacheId</a></code> | <code>string</code> | The FileCacheId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileCacheArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileCacheArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxFileCacheArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileCacheId`<sup>Required</sup> <a name="fileCacheId" id="@cdk_utils/iam.fsx.FsxFileCacheArnComponents.property.fileCacheId"></a>

```typescript
public readonly fileCacheId: string;
```

- *Type:* string

The FileCacheId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxFileCacheArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxFileCacheArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FsxFileCacheArnProps <a name="FsxFileCacheArnProps" id="@cdk_utils/iam.fsx.FsxFileCacheArnProps"></a>

Properties for building a file-cache ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxFileCacheArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxFileCacheArnProps: fsx.FsxFileCacheArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileCacheArnProps.property.fileCacheId">fileCacheId</a></code> | <code>string</code> | The FileCacheId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileCacheArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileCacheArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileCacheArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileCacheId`<sup>Required</sup> <a name="fileCacheId" id="@cdk_utils/iam.fsx.FsxFileCacheArnProps.property.fileCacheId"></a>

```typescript
public readonly fileCacheId: string;
```

- *Type:* string

The FileCacheId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxFileCacheArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxFileCacheArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxFileCacheArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxFileSystemArnComponents <a name="FsxFileSystemArnComponents" id="@cdk_utils/iam.fsx.FsxFileSystemArnComponents"></a>

Parsed components of a file-system ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxFileSystemArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxFileSystemArnComponents: fsx.FsxFileSystemArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileSystemArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileSystemArnComponents.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileSystemArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileSystemArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxFileSystemArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxFileSystemArnComponents.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxFileSystemArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxFileSystemArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FsxFileSystemArnProps <a name="FsxFileSystemArnProps" id="@cdk_utils/iam.fsx.FsxFileSystemArnProps"></a>

Properties for building a file-system ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxFileSystemArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxFileSystemArnProps: fsx.FsxFileSystemArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileSystemArnProps.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileSystemArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileSystemArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxFileSystemArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxFileSystemArnProps.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxFileSystemArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxFileSystemArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxFileSystemArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxSnapmirrorPolicyArnComponents <a name="FsxSnapmirrorPolicyArnComponents" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents"></a>

Parsed components of a snapmirror-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxSnapmirrorPolicyArnComponents: fsx.FsxSnapmirrorPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.property.fileSystemIdOrStorageVirtualMachineId">fileSystemIdOrStorageVirtualMachineId</a></code> | <code>string</code> | The FileSystemIdOrStorageVirtualMachineId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.property.snapmirrorPolicyId">snapmirrorPolicyId</a></code> | <code>string</code> | The SnapmirrorPolicyId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileSystemIdOrStorageVirtualMachineId`<sup>Required</sup> <a name="fileSystemIdOrStorageVirtualMachineId" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.property.fileSystemIdOrStorageVirtualMachineId"></a>

```typescript
public readonly fileSystemIdOrStorageVirtualMachineId: string;
```

- *Type:* string

The FileSystemIdOrStorageVirtualMachineId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapmirrorPolicyId`<sup>Required</sup> <a name="snapmirrorPolicyId" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnComponents.property.snapmirrorPolicyId"></a>

```typescript
public readonly snapmirrorPolicyId: string;
```

- *Type:* string

The SnapmirrorPolicyId component.

---

### FsxSnapmirrorPolicyArnProps <a name="FsxSnapmirrorPolicyArnProps" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps"></a>

Properties for building a snapmirror-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxSnapmirrorPolicyArnProps: fsx.FsxSnapmirrorPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.property.fileSystemIdOrStorageVirtualMachineId">fileSystemIdOrStorageVirtualMachineId</a></code> | <code>string</code> | The FileSystemIdOrStorageVirtualMachineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.property.snapmirrorPolicyId">snapmirrorPolicyId</a></code> | <code>string</code> | The SnapmirrorPolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileSystemIdOrStorageVirtualMachineId`<sup>Required</sup> <a name="fileSystemIdOrStorageVirtualMachineId" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.property.fileSystemIdOrStorageVirtualMachineId"></a>

```typescript
public readonly fileSystemIdOrStorageVirtualMachineId: string;
```

- *Type:* string

The FileSystemIdOrStorageVirtualMachineId component of the ARN.

---

##### `snapmirrorPolicyId`<sup>Required</sup> <a name="snapmirrorPolicyId" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.property.snapmirrorPolicyId"></a>

```typescript
public readonly snapmirrorPolicyId: string;
```

- *Type:* string

The SnapmirrorPolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxSnapmirrorRelationshipArnComponents <a name="FsxSnapmirrorRelationshipArnComponents" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents"></a>

Parsed components of a snapmirror-relationship ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxSnapmirrorRelationshipArnComponents: fsx.FsxSnapmirrorRelationshipArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.snapmirrorRelationshipId">snapmirrorRelationshipId</a></code> | <code>string</code> | The SnapmirrorRelationshipId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapmirrorRelationshipId`<sup>Required</sup> <a name="snapmirrorRelationshipId" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.snapmirrorRelationshipId"></a>

```typescript
public readonly snapmirrorRelationshipId: string;
```

- *Type:* string

The SnapmirrorRelationshipId component.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnComponents.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component.

---

### FsxSnapmirrorRelationshipArnProps <a name="FsxSnapmirrorRelationshipArnProps" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps"></a>

Properties for building a snapmirror-relationship ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxSnapmirrorRelationshipArnProps: fsx.FsxSnapmirrorRelationshipArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.snapmirrorRelationshipId">snapmirrorRelationshipId</a></code> | <code>string</code> | The SnapmirrorRelationshipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component of the ARN.

---

##### `snapmirrorRelationshipId`<sup>Required</sup> <a name="snapmirrorRelationshipId" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.snapmirrorRelationshipId"></a>

```typescript
public readonly snapmirrorRelationshipId: string;
```

- *Type:* string

The SnapmirrorRelationshipId component of the ARN.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxSnapshotArnComponents <a name="FsxSnapshotArnComponents" id="@cdk_utils/iam.fsx.FsxSnapshotArnComponents"></a>

Parsed components of a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxSnapshotArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxSnapshotArnComponents: fsx.FsxSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotArnComponents.property.snapshotId">snapshotId</a></code> | <code>string</code> | The SnapshotId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotArnComponents.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdk_utils/iam.fsx.FsxSnapshotArnComponents.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The SnapshotId component.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.fsx.FsxSnapshotArnComponents.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component.

---

### FsxSnapshotArnProps <a name="FsxSnapshotArnProps" id="@cdk_utils/iam.fsx.FsxSnapshotArnProps"></a>

Properties for building a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxSnapshotArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxSnapshotArnProps: fsx.FsxSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotArnProps.property.snapshotId">snapshotId</a></code> | <code>string</code> | The SnapshotId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotArnProps.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdk_utils/iam.fsx.FsxSnapshotArnProps.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The SnapshotId component of the ARN.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.fsx.FsxSnapshotArnProps.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxSnapshotPolicyArnComponents <a name="FsxSnapshotPolicyArnComponents" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents"></a>

Parsed components of a snapshot-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxSnapshotPolicyArnComponents: fsx.FsxSnapshotPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.property.fileSystemIdOrStorageVirtualMachineId">fileSystemIdOrStorageVirtualMachineId</a></code> | <code>string</code> | The FileSystemIdOrStorageVirtualMachineId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.property.snapshotPolicyId">snapshotPolicyId</a></code> | <code>string</code> | The SnapshotPolicyId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileSystemIdOrStorageVirtualMachineId`<sup>Required</sup> <a name="fileSystemIdOrStorageVirtualMachineId" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.property.fileSystemIdOrStorageVirtualMachineId"></a>

```typescript
public readonly fileSystemIdOrStorageVirtualMachineId: string;
```

- *Type:* string

The FileSystemIdOrStorageVirtualMachineId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapshotPolicyId`<sup>Required</sup> <a name="snapshotPolicyId" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnComponents.property.snapshotPolicyId"></a>

```typescript
public readonly snapshotPolicyId: string;
```

- *Type:* string

The SnapshotPolicyId component.

---

### FsxSnapshotPolicyArnProps <a name="FsxSnapshotPolicyArnProps" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps"></a>

Properties for building a snapshot-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxSnapshotPolicyArnProps: fsx.FsxSnapshotPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.property.fileSystemIdOrStorageVirtualMachineId">fileSystemIdOrStorageVirtualMachineId</a></code> | <code>string</code> | The FileSystemIdOrStorageVirtualMachineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.property.snapshotPolicyId">snapshotPolicyId</a></code> | <code>string</code> | The SnapshotPolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileSystemIdOrStorageVirtualMachineId`<sup>Required</sup> <a name="fileSystemIdOrStorageVirtualMachineId" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.property.fileSystemIdOrStorageVirtualMachineId"></a>

```typescript
public readonly fileSystemIdOrStorageVirtualMachineId: string;
```

- *Type:* string

The FileSystemIdOrStorageVirtualMachineId component of the ARN.

---

##### `snapshotPolicyId`<sup>Required</sup> <a name="snapshotPolicyId" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.property.snapshotPolicyId"></a>

```typescript
public readonly snapshotPolicyId: string;
```

- *Type:* string

The SnapshotPolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxStorageVirtualMachineArnComponents <a name="FsxStorageVirtualMachineArnComponents" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents"></a>

Parsed components of a storage-virtual-machine ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxStorageVirtualMachineArnComponents: fsx.FsxStorageVirtualMachineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>string</code> | The StorageVirtualMachineId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnComponents.property.storageVirtualMachineId"></a>

```typescript
public readonly storageVirtualMachineId: string;
```

- *Type:* string

The StorageVirtualMachineId component.

---

### FsxStorageVirtualMachineArnProps <a name="FsxStorageVirtualMachineArnProps" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps"></a>

Properties for building a storage-virtual-machine ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxStorageVirtualMachineArnProps: fsx.FsxStorageVirtualMachineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>string</code> | The StorageVirtualMachineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component of the ARN.

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.property.storageVirtualMachineId"></a>

```typescript
public readonly storageVirtualMachineId: string;
```

- *Type:* string

The StorageVirtualMachineId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxSvmPeerArnComponents <a name="FsxSvmPeerArnComponents" id="@cdk_utils/iam.fsx.FsxSvmPeerArnComponents"></a>

Parsed components of a svm-peer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxSvmPeerArnComponents: fsx.FsxSvmPeerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>string</code> | The StorageVirtualMachineId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.storageVirtualMachinePeerId">storageVirtualMachinePeerId</a></code> | <code>string</code> | The StorageVirtualMachinePeerId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.storageVirtualMachineId"></a>

```typescript
public readonly storageVirtualMachineId: string;
```

- *Type:* string

The StorageVirtualMachineId component.

---

##### `storageVirtualMachinePeerId`<sup>Required</sup> <a name="storageVirtualMachinePeerId" id="@cdk_utils/iam.fsx.FsxSvmPeerArnComponents.property.storageVirtualMachinePeerId"></a>

```typescript
public readonly storageVirtualMachinePeerId: string;
```

- *Type:* string

The StorageVirtualMachinePeerId component.

---

### FsxSvmPeerArnProps <a name="FsxSvmPeerArnProps" id="@cdk_utils/iam.fsx.FsxSvmPeerArnProps"></a>

Properties for building a svm-peer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxSvmPeerArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxSvmPeerArnProps: fsx.FsxSvmPeerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>string</code> | The StorageVirtualMachineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.storageVirtualMachinePeerId">storageVirtualMachinePeerId</a></code> | <code>string</code> | The StorageVirtualMachinePeerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component of the ARN.

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.storageVirtualMachineId"></a>

```typescript
public readonly storageVirtualMachineId: string;
```

- *Type:* string

The StorageVirtualMachineId component of the ARN.

---

##### `storageVirtualMachinePeerId`<sup>Required</sup> <a name="storageVirtualMachinePeerId" id="@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.storageVirtualMachinePeerId"></a>

```typescript
public readonly storageVirtualMachinePeerId: string;
```

- *Type:* string

The StorageVirtualMachinePeerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxSvmPeerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxTaskArnComponents <a name="FsxTaskArnComponents" id="@cdk_utils/iam.fsx.FsxTaskArnComponents"></a>

Parsed components of a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxTaskArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxTaskArnComponents: fsx.FsxTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.fsx.FsxTaskArnComponents.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.fsx.FsxTaskArnComponents.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component.

---

### FsxTaskArnProps <a name="FsxTaskArnProps" id="@cdk_utils/iam.fsx.FsxTaskArnProps"></a>

Properties for building a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxTaskArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxTaskArnProps: fsx.FsxTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxTaskArnProps.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.fsx.FsxTaskArnProps.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FsxVolumeArnComponents <a name="FsxVolumeArnComponents" id="@cdk_utils/iam.fsx.FsxVolumeArnComponents"></a>

Parsed components of a volume ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxVolumeArnComponents.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxVolumeArnComponents: fsx.FsxVolumeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxVolumeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxVolumeArnComponents.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component. |
| <code><a href="#@cdk_utils/iam.fsx.FsxVolumeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxVolumeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.fsx.FsxVolumeArnComponents.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxVolumeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxVolumeArnComponents.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxVolumeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxVolumeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.fsx.FsxVolumeArnComponents.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component.

---

### FsxVolumeArnProps <a name="FsxVolumeArnProps" id="@cdk_utils/iam.fsx.FsxVolumeArnProps"></a>

Properties for building a volume ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fsx.FsxVolumeArnProps.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

const fsxVolumeArnProps: fsx.FsxVolumeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxVolumeArnProps.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The FileSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxVolumeArnProps.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.fsx.FsxVolumeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fsx.FsxVolumeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fsx.FsxVolumeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdk_utils/iam.fsx.FsxVolumeArnProps.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The FileSystemId component of the ARN.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.fsx.FsxVolumeArnProps.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fsx.FsxVolumeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fsx.FsxVolumeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fsx.FsxVolumeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### FsxActions <a name="FsxActions" id="@cdk_utils/iam.fsx.FsxActions"></a>

IAM action constants for the fsx service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fsx.FsxActions.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

new fsx.FsxActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] fsx:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.AssociateFileGateway">AssociateFileGateway</a></code> | <code>string</code> | [Write] fsx:AssociateFileGateway. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.AssociateFileSystemAliases">AssociateFileSystemAliases</a></code> | <code>string</code> | [Write] fsx:AssociateFileSystemAliases. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.BypassSnaplockEnterpriseRetention">BypassSnaplockEnterpriseRetention</a></code> | <code>string</code> | [PermissionManagement] fsx:BypassSnaplockEnterpriseRetention. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CancelDataRepositoryTask">CancelDataRepositoryTask</a></code> | <code>string</code> | [Write] fsx:CancelDataRepositoryTask. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CopyBackup">CopyBackup</a></code> | <code>string</code> | [Write] fsx:CopyBackup. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CopySnapshotAndUpdateVolume">CopySnapshotAndUpdateVolume</a></code> | <code>string</code> | [Write] fsx:CopySnapshotAndUpdateVolume. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateAndAttachS3AccessPoint">CreateAndAttachS3AccessPoint</a></code> | <code>string</code> | [Write] fsx:CreateAndAttachS3AccessPoint. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateBackup">CreateBackup</a></code> | <code>string</code> | [Write] fsx:CreateBackup. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateClusterPeer">CreateClusterPeer</a></code> | <code>string</code> | [Write] fsx:CreateClusterPeer. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateDataRepositoryAssociation">CreateDataRepositoryAssociation</a></code> | <code>string</code> | [Write] fsx:CreateDataRepositoryAssociation. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateDataRepositoryTask">CreateDataRepositoryTask</a></code> | <code>string</code> | [Write] fsx:CreateDataRepositoryTask. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateFileCache">CreateFileCache</a></code> | <code>string</code> | [Write] fsx:CreateFileCache. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateFileSystem">CreateFileSystem</a></code> | <code>string</code> | [Write] fsx:CreateFileSystem. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateFileSystemFromBackup">CreateFileSystemFromBackup</a></code> | <code>string</code> | [Write] fsx:CreateFileSystemFromBackup. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateSnapmirrorPolicy">CreateSnapmirrorPolicy</a></code> | <code>string</code> | [Write] fsx:CreateSnapmirrorPolicy. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateSnapmirrorRelationship">CreateSnapmirrorRelationship</a></code> | <code>string</code> | [Write] fsx:CreateSnapmirrorRelationship. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string</code> | [Write] fsx:CreateSnapshot. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateSnapshotPolicy">CreateSnapshotPolicy</a></code> | <code>string</code> | [Write] fsx:CreateSnapshotPolicy. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateStorageVirtualMachine">CreateStorageVirtualMachine</a></code> | <code>string</code> | [Write] fsx:CreateStorageVirtualMachine. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateStorageVirtualMachinePeer">CreateStorageVirtualMachinePeer</a></code> | <code>string</code> | [Write] fsx:CreateStorageVirtualMachinePeer. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateVolume">CreateVolume</a></code> | <code>string</code> | [Write] fsx:CreateVolume. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.CreateVolumeFromBackup">CreateVolumeFromBackup</a></code> | <code>string</code> | [Write] fsx:CreateVolumeFromBackup. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteBackup">DeleteBackup</a></code> | <code>string</code> | [Write] fsx:DeleteBackup. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteClusterPeer">DeleteClusterPeer</a></code> | <code>string</code> | [Write] fsx:DeleteClusterPeer. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteDataRepositoryAssociation">DeleteDataRepositoryAssociation</a></code> | <code>string</code> | [Write] fsx:DeleteDataRepositoryAssociation. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteFileCache">DeleteFileCache</a></code> | <code>string</code> | [Write] fsx:DeleteFileCache. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteFileSystem">DeleteFileSystem</a></code> | <code>string</code> | [Write] fsx:DeleteFileSystem. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] fsx:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteSnapmirrorPolicy">DeleteSnapmirrorPolicy</a></code> | <code>string</code> | [Write] fsx:DeleteSnapmirrorPolicy. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteSnapmirrorRelationship">DeleteSnapmirrorRelationship</a></code> | <code>string</code> | [Write] fsx:DeleteSnapmirrorRelationship. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteSnapshot">DeleteSnapshot</a></code> | <code>string</code> | [Write] fsx:DeleteSnapshot. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteSnapshotPolicy">DeleteSnapshotPolicy</a></code> | <code>string</code> | [Write] fsx:DeleteSnapshotPolicy. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteStorageVirtualMachine">DeleteStorageVirtualMachine</a></code> | <code>string</code> | [Write] fsx:DeleteStorageVirtualMachine. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteStorageVirtualMachinePeer">DeleteStorageVirtualMachinePeer</a></code> | <code>string</code> | [Write] fsx:DeleteStorageVirtualMachinePeer. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DeleteVolume">DeleteVolume</a></code> | <code>string</code> | [Write] fsx:DeleteVolume. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeAssociatedFileGateways">DescribeAssociatedFileGateways</a></code> | <code>string</code> | [Read] fsx:DescribeAssociatedFileGateways. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeBackups">DescribeBackups</a></code> | <code>string</code> | [Read] fsx:DescribeBackups. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeClusterPeers">DescribeClusterPeers</a></code> | <code>string</code> | [Read] fsx:DescribeClusterPeers. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeDataRepositoryAssociations">DescribeDataRepositoryAssociations</a></code> | <code>string</code> | [Read] fsx:DescribeDataRepositoryAssociations. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeDataRepositoryTasks">DescribeDataRepositoryTasks</a></code> | <code>string</code> | [Read] fsx:DescribeDataRepositoryTasks. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeFileCaches">DescribeFileCaches</a></code> | <code>string</code> | [Read] fsx:DescribeFileCaches. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeFileSystemAliases">DescribeFileSystemAliases</a></code> | <code>string</code> | [Read] fsx:DescribeFileSystemAliases. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeFileSystems">DescribeFileSystems</a></code> | <code>string</code> | [Read] fsx:DescribeFileSystems. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeS3AccessPointAttachments">DescribeS3AccessPointAttachments</a></code> | <code>string</code> | [Read] fsx:DescribeS3AccessPointAttachments. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeSharedVpcConfiguration">DescribeSharedVpcConfiguration</a></code> | <code>string</code> | [Read] fsx:DescribeSharedVpcConfiguration. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeSnapmirrorPolicies">DescribeSnapmirrorPolicies</a></code> | <code>string</code> | [Read] fsx:DescribeSnapmirrorPolicies. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeSnapmirrorRelationships">DescribeSnapmirrorRelationships</a></code> | <code>string</code> | [Read] fsx:DescribeSnapmirrorRelationships. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeSnapshotPolicies">DescribeSnapshotPolicies</a></code> | <code>string</code> | [Read] fsx:DescribeSnapshotPolicies. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeSnapshots">DescribeSnapshots</a></code> | <code>string</code> | [Read] fsx:DescribeSnapshots. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeStorageVirtualMachinePeers">DescribeStorageVirtualMachinePeers</a></code> | <code>string</code> | [Read] fsx:DescribeStorageVirtualMachinePeers. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeStorageVirtualMachines">DescribeStorageVirtualMachines</a></code> | <code>string</code> | [Read] fsx:DescribeStorageVirtualMachines. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DescribeVolumes">DescribeVolumes</a></code> | <code>string</code> | [Read] fsx:DescribeVolumes. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DetachAndDeleteS3AccessPoint">DetachAndDeleteS3AccessPoint</a></code> | <code>string</code> | [Write] fsx:DetachAndDeleteS3AccessPoint. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DisassociateFileGateway">DisassociateFileGateway</a></code> | <code>string</code> | [Write] fsx:DisassociateFileGateway. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.DisassociateFileSystemAliases">DisassociateFileSystemAliases</a></code> | <code>string</code> | [Write] fsx:DisassociateFileSystemAliases. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] fsx:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.ManageBackupPrincipalAssociations">ManageBackupPrincipalAssociations</a></code> | <code>string</code> | [PermissionManagement] fsx:ManageBackupPrincipalAssociations. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] fsx:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.ReleaseFileSystemNfsV3Locks">ReleaseFileSystemNfsV3Locks</a></code> | <code>string</code> | [Write] fsx:ReleaseFileSystemNfsV3Locks. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.RestoreVolumeFromSnapshot">RestoreVolumeFromSnapshot</a></code> | <code>string</code> | [Write] fsx:RestoreVolumeFromSnapshot. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.StartMisconfiguredStateRecovery">StartMisconfiguredStateRecovery</a></code> | <code>string</code> | [Write] fsx:StartMisconfiguredStateRecovery. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] fsx:TagResource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] fsx:UntagResource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateClusterPeer">UpdateClusterPeer</a></code> | <code>string</code> | [Write] fsx:UpdateClusterPeer. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateDataRepositoryAssociation">UpdateDataRepositoryAssociation</a></code> | <code>string</code> | [Write] fsx:UpdateDataRepositoryAssociation. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateFileCache">UpdateFileCache</a></code> | <code>string</code> | [Write] fsx:UpdateFileCache. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateFileSystem">UpdateFileSystem</a></code> | <code>string</code> | [Write] fsx:UpdateFileSystem. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateSharedVpcConfiguration">UpdateSharedVpcConfiguration</a></code> | <code>string</code> | [Write] fsx:UpdateSharedVpcConfiguration. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateSnapmirrorPolicy">UpdateSnapmirrorPolicy</a></code> | <code>string</code> | [Write] fsx:UpdateSnapmirrorPolicy. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateSnapmirrorRelationship">UpdateSnapmirrorRelationship</a></code> | <code>string</code> | [Write] fsx:UpdateSnapmirrorRelationship. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateSnapshot">UpdateSnapshot</a></code> | <code>string</code> | [Write] fsx:UpdateSnapshot. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateSnapshotPolicy">UpdateSnapshotPolicy</a></code> | <code>string</code> | [Write] fsx:UpdateSnapshotPolicy. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateStorageVirtualMachine">UpdateStorageVirtualMachine</a></code> | <code>string</code> | [Write] fsx:UpdateStorageVirtualMachine. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateStorageVirtualMachinePeer">UpdateStorageVirtualMachinePeer</a></code> | <code>string</code> | [Write] fsx:UpdateStorageVirtualMachinePeer. |
| <code><a href="#@cdk_utils/iam.fsx.FsxActions.property.UpdateVolume">UpdateVolume</a></code> | <code>string</code> | [Write] fsx:UpdateVolume. |

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.fsx.FsxActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] fsx:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.fsx.FsxActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.fsx.FsxActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.fsx.FsxActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.fsx.FsxActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.fsx.FsxActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateFileGateway`<sup>Required</sup> <a name="AssociateFileGateway" id="@cdk_utils/iam.fsx.FsxActions.property.AssociateFileGateway"></a>

```typescript
public readonly AssociateFileGateway: string;
```

- *Type:* string

[Write] fsx:AssociateFileGateway.

---

##### `AssociateFileSystemAliases`<sup>Required</sup> <a name="AssociateFileSystemAliases" id="@cdk_utils/iam.fsx.FsxActions.property.AssociateFileSystemAliases"></a>

```typescript
public readonly AssociateFileSystemAliases: string;
```

- *Type:* string

[Write] fsx:AssociateFileSystemAliases.

---

##### `BypassSnaplockEnterpriseRetention`<sup>Required</sup> <a name="BypassSnaplockEnterpriseRetention" id="@cdk_utils/iam.fsx.FsxActions.property.BypassSnaplockEnterpriseRetention"></a>

```typescript
public readonly BypassSnaplockEnterpriseRetention: string;
```

- *Type:* string

[PermissionManagement] fsx:BypassSnaplockEnterpriseRetention.

---

##### `CancelDataRepositoryTask`<sup>Required</sup> <a name="CancelDataRepositoryTask" id="@cdk_utils/iam.fsx.FsxActions.property.CancelDataRepositoryTask"></a>

```typescript
public readonly CancelDataRepositoryTask: string;
```

- *Type:* string

[Write] fsx:CancelDataRepositoryTask.

---

##### `CopyBackup`<sup>Required</sup> <a name="CopyBackup" id="@cdk_utils/iam.fsx.FsxActions.property.CopyBackup"></a>

```typescript
public readonly CopyBackup: string;
```

- *Type:* string

[Write] fsx:CopyBackup.

---

##### `CopySnapshotAndUpdateVolume`<sup>Required</sup> <a name="CopySnapshotAndUpdateVolume" id="@cdk_utils/iam.fsx.FsxActions.property.CopySnapshotAndUpdateVolume"></a>

```typescript
public readonly CopySnapshotAndUpdateVolume: string;
```

- *Type:* string

[Write] fsx:CopySnapshotAndUpdateVolume.

---

##### `CreateAndAttachS3AccessPoint`<sup>Required</sup> <a name="CreateAndAttachS3AccessPoint" id="@cdk_utils/iam.fsx.FsxActions.property.CreateAndAttachS3AccessPoint"></a>

```typescript
public readonly CreateAndAttachS3AccessPoint: string;
```

- *Type:* string

[Write] fsx:CreateAndAttachS3AccessPoint.

---

##### `CreateBackup`<sup>Required</sup> <a name="CreateBackup" id="@cdk_utils/iam.fsx.FsxActions.property.CreateBackup"></a>

```typescript
public readonly CreateBackup: string;
```

- *Type:* string

[Write] fsx:CreateBackup.

---

##### `CreateClusterPeer`<sup>Required</sup> <a name="CreateClusterPeer" id="@cdk_utils/iam.fsx.FsxActions.property.CreateClusterPeer"></a>

```typescript
public readonly CreateClusterPeer: string;
```

- *Type:* string

[Write] fsx:CreateClusterPeer.

---

##### `CreateDataRepositoryAssociation`<sup>Required</sup> <a name="CreateDataRepositoryAssociation" id="@cdk_utils/iam.fsx.FsxActions.property.CreateDataRepositoryAssociation"></a>

```typescript
public readonly CreateDataRepositoryAssociation: string;
```

- *Type:* string

[Write] fsx:CreateDataRepositoryAssociation.

---

##### `CreateDataRepositoryTask`<sup>Required</sup> <a name="CreateDataRepositoryTask" id="@cdk_utils/iam.fsx.FsxActions.property.CreateDataRepositoryTask"></a>

```typescript
public readonly CreateDataRepositoryTask: string;
```

- *Type:* string

[Write] fsx:CreateDataRepositoryTask.

---

##### `CreateFileCache`<sup>Required</sup> <a name="CreateFileCache" id="@cdk_utils/iam.fsx.FsxActions.property.CreateFileCache"></a>

```typescript
public readonly CreateFileCache: string;
```

- *Type:* string

[Write] fsx:CreateFileCache.

---

##### `CreateFileSystem`<sup>Required</sup> <a name="CreateFileSystem" id="@cdk_utils/iam.fsx.FsxActions.property.CreateFileSystem"></a>

```typescript
public readonly CreateFileSystem: string;
```

- *Type:* string

[Write] fsx:CreateFileSystem.

---

##### `CreateFileSystemFromBackup`<sup>Required</sup> <a name="CreateFileSystemFromBackup" id="@cdk_utils/iam.fsx.FsxActions.property.CreateFileSystemFromBackup"></a>

```typescript
public readonly CreateFileSystemFromBackup: string;
```

- *Type:* string

[Write] fsx:CreateFileSystemFromBackup.

---

##### `CreateSnapmirrorPolicy`<sup>Required</sup> <a name="CreateSnapmirrorPolicy" id="@cdk_utils/iam.fsx.FsxActions.property.CreateSnapmirrorPolicy"></a>

```typescript
public readonly CreateSnapmirrorPolicy: string;
```

- *Type:* string

[Write] fsx:CreateSnapmirrorPolicy.

---

##### `CreateSnapmirrorRelationship`<sup>Required</sup> <a name="CreateSnapmirrorRelationship" id="@cdk_utils/iam.fsx.FsxActions.property.CreateSnapmirrorRelationship"></a>

```typescript
public readonly CreateSnapmirrorRelationship: string;
```

- *Type:* string

[Write] fsx:CreateSnapmirrorRelationship.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.fsx.FsxActions.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string;
```

- *Type:* string

[Write] fsx:CreateSnapshot.

---

##### `CreateSnapshotPolicy`<sup>Required</sup> <a name="CreateSnapshotPolicy" id="@cdk_utils/iam.fsx.FsxActions.property.CreateSnapshotPolicy"></a>

```typescript
public readonly CreateSnapshotPolicy: string;
```

- *Type:* string

[Write] fsx:CreateSnapshotPolicy.

---

##### `CreateStorageVirtualMachine`<sup>Required</sup> <a name="CreateStorageVirtualMachine" id="@cdk_utils/iam.fsx.FsxActions.property.CreateStorageVirtualMachine"></a>

```typescript
public readonly CreateStorageVirtualMachine: string;
```

- *Type:* string

[Write] fsx:CreateStorageVirtualMachine.

---

##### `CreateStorageVirtualMachinePeer`<sup>Required</sup> <a name="CreateStorageVirtualMachinePeer" id="@cdk_utils/iam.fsx.FsxActions.property.CreateStorageVirtualMachinePeer"></a>

```typescript
public readonly CreateStorageVirtualMachinePeer: string;
```

- *Type:* string

[Write] fsx:CreateStorageVirtualMachinePeer.

---

##### `CreateVolume`<sup>Required</sup> <a name="CreateVolume" id="@cdk_utils/iam.fsx.FsxActions.property.CreateVolume"></a>

```typescript
public readonly CreateVolume: string;
```

- *Type:* string

[Write] fsx:CreateVolume.

---

##### `CreateVolumeFromBackup`<sup>Required</sup> <a name="CreateVolumeFromBackup" id="@cdk_utils/iam.fsx.FsxActions.property.CreateVolumeFromBackup"></a>

```typescript
public readonly CreateVolumeFromBackup: string;
```

- *Type:* string

[Write] fsx:CreateVolumeFromBackup.

---

##### `DeleteBackup`<sup>Required</sup> <a name="DeleteBackup" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteBackup"></a>

```typescript
public readonly DeleteBackup: string;
```

- *Type:* string

[Write] fsx:DeleteBackup.

---

##### `DeleteClusterPeer`<sup>Required</sup> <a name="DeleteClusterPeer" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteClusterPeer"></a>

```typescript
public readonly DeleteClusterPeer: string;
```

- *Type:* string

[Write] fsx:DeleteClusterPeer.

---

##### `DeleteDataRepositoryAssociation`<sup>Required</sup> <a name="DeleteDataRepositoryAssociation" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteDataRepositoryAssociation"></a>

```typescript
public readonly DeleteDataRepositoryAssociation: string;
```

- *Type:* string

[Write] fsx:DeleteDataRepositoryAssociation.

---

##### `DeleteFileCache`<sup>Required</sup> <a name="DeleteFileCache" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteFileCache"></a>

```typescript
public readonly DeleteFileCache: string;
```

- *Type:* string

[Write] fsx:DeleteFileCache.

---

##### `DeleteFileSystem`<sup>Required</sup> <a name="DeleteFileSystem" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteFileSystem"></a>

```typescript
public readonly DeleteFileSystem: string;
```

- *Type:* string

[Write] fsx:DeleteFileSystem.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] fsx:DeleteResourcePolicy.

---

##### `DeleteSnapmirrorPolicy`<sup>Required</sup> <a name="DeleteSnapmirrorPolicy" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteSnapmirrorPolicy"></a>

```typescript
public readonly DeleteSnapmirrorPolicy: string;
```

- *Type:* string

[Write] fsx:DeleteSnapmirrorPolicy.

---

##### `DeleteSnapmirrorRelationship`<sup>Required</sup> <a name="DeleteSnapmirrorRelationship" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteSnapmirrorRelationship"></a>

```typescript
public readonly DeleteSnapmirrorRelationship: string;
```

- *Type:* string

[Write] fsx:DeleteSnapmirrorRelationship.

---

##### `DeleteSnapshot`<sup>Required</sup> <a name="DeleteSnapshot" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteSnapshot"></a>

```typescript
public readonly DeleteSnapshot: string;
```

- *Type:* string

[Write] fsx:DeleteSnapshot.

---

##### `DeleteSnapshotPolicy`<sup>Required</sup> <a name="DeleteSnapshotPolicy" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteSnapshotPolicy"></a>

```typescript
public readonly DeleteSnapshotPolicy: string;
```

- *Type:* string

[Write] fsx:DeleteSnapshotPolicy.

---

##### `DeleteStorageVirtualMachine`<sup>Required</sup> <a name="DeleteStorageVirtualMachine" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteStorageVirtualMachine"></a>

```typescript
public readonly DeleteStorageVirtualMachine: string;
```

- *Type:* string

[Write] fsx:DeleteStorageVirtualMachine.

---

##### `DeleteStorageVirtualMachinePeer`<sup>Required</sup> <a name="DeleteStorageVirtualMachinePeer" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteStorageVirtualMachinePeer"></a>

```typescript
public readonly DeleteStorageVirtualMachinePeer: string;
```

- *Type:* string

[Write] fsx:DeleteStorageVirtualMachinePeer.

---

##### `DeleteVolume`<sup>Required</sup> <a name="DeleteVolume" id="@cdk_utils/iam.fsx.FsxActions.property.DeleteVolume"></a>

```typescript
public readonly DeleteVolume: string;
```

- *Type:* string

[Write] fsx:DeleteVolume.

---

##### `DescribeAssociatedFileGateways`<sup>Required</sup> <a name="DescribeAssociatedFileGateways" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeAssociatedFileGateways"></a>

```typescript
public readonly DescribeAssociatedFileGateways: string;
```

- *Type:* string

[Read] fsx:DescribeAssociatedFileGateways.

---

##### `DescribeBackups`<sup>Required</sup> <a name="DescribeBackups" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeBackups"></a>

```typescript
public readonly DescribeBackups: string;
```

- *Type:* string

[Read] fsx:DescribeBackups.

---

##### `DescribeClusterPeers`<sup>Required</sup> <a name="DescribeClusterPeers" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeClusterPeers"></a>

```typescript
public readonly DescribeClusterPeers: string;
```

- *Type:* string

[Read] fsx:DescribeClusterPeers.

---

##### `DescribeDataRepositoryAssociations`<sup>Required</sup> <a name="DescribeDataRepositoryAssociations" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeDataRepositoryAssociations"></a>

```typescript
public readonly DescribeDataRepositoryAssociations: string;
```

- *Type:* string

[Read] fsx:DescribeDataRepositoryAssociations.

---

##### `DescribeDataRepositoryTasks`<sup>Required</sup> <a name="DescribeDataRepositoryTasks" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeDataRepositoryTasks"></a>

```typescript
public readonly DescribeDataRepositoryTasks: string;
```

- *Type:* string

[Read] fsx:DescribeDataRepositoryTasks.

---

##### `DescribeFileCaches`<sup>Required</sup> <a name="DescribeFileCaches" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeFileCaches"></a>

```typescript
public readonly DescribeFileCaches: string;
```

- *Type:* string

[Read] fsx:DescribeFileCaches.

---

##### `DescribeFileSystemAliases`<sup>Required</sup> <a name="DescribeFileSystemAliases" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeFileSystemAliases"></a>

```typescript
public readonly DescribeFileSystemAliases: string;
```

- *Type:* string

[Read] fsx:DescribeFileSystemAliases.

---

##### `DescribeFileSystems`<sup>Required</sup> <a name="DescribeFileSystems" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeFileSystems"></a>

```typescript
public readonly DescribeFileSystems: string;
```

- *Type:* string

[Read] fsx:DescribeFileSystems.

---

##### `DescribeS3AccessPointAttachments`<sup>Required</sup> <a name="DescribeS3AccessPointAttachments" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeS3AccessPointAttachments"></a>

```typescript
public readonly DescribeS3AccessPointAttachments: string;
```

- *Type:* string

[Read] fsx:DescribeS3AccessPointAttachments.

---

##### `DescribeSharedVpcConfiguration`<sup>Required</sup> <a name="DescribeSharedVpcConfiguration" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeSharedVpcConfiguration"></a>

```typescript
public readonly DescribeSharedVpcConfiguration: string;
```

- *Type:* string

[Read] fsx:DescribeSharedVpcConfiguration.

---

##### `DescribeSnapmirrorPolicies`<sup>Required</sup> <a name="DescribeSnapmirrorPolicies" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeSnapmirrorPolicies"></a>

```typescript
public readonly DescribeSnapmirrorPolicies: string;
```

- *Type:* string

[Read] fsx:DescribeSnapmirrorPolicies.

---

##### `DescribeSnapmirrorRelationships`<sup>Required</sup> <a name="DescribeSnapmirrorRelationships" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeSnapmirrorRelationships"></a>

```typescript
public readonly DescribeSnapmirrorRelationships: string;
```

- *Type:* string

[Read] fsx:DescribeSnapmirrorRelationships.

---

##### `DescribeSnapshotPolicies`<sup>Required</sup> <a name="DescribeSnapshotPolicies" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeSnapshotPolicies"></a>

```typescript
public readonly DescribeSnapshotPolicies: string;
```

- *Type:* string

[Read] fsx:DescribeSnapshotPolicies.

---

##### `DescribeSnapshots`<sup>Required</sup> <a name="DescribeSnapshots" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeSnapshots"></a>

```typescript
public readonly DescribeSnapshots: string;
```

- *Type:* string

[Read] fsx:DescribeSnapshots.

---

##### `DescribeStorageVirtualMachinePeers`<sup>Required</sup> <a name="DescribeStorageVirtualMachinePeers" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeStorageVirtualMachinePeers"></a>

```typescript
public readonly DescribeStorageVirtualMachinePeers: string;
```

- *Type:* string

[Read] fsx:DescribeStorageVirtualMachinePeers.

---

##### `DescribeStorageVirtualMachines`<sup>Required</sup> <a name="DescribeStorageVirtualMachines" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeStorageVirtualMachines"></a>

```typescript
public readonly DescribeStorageVirtualMachines: string;
```

- *Type:* string

[Read] fsx:DescribeStorageVirtualMachines.

---

##### `DescribeVolumes`<sup>Required</sup> <a name="DescribeVolumes" id="@cdk_utils/iam.fsx.FsxActions.property.DescribeVolumes"></a>

```typescript
public readonly DescribeVolumes: string;
```

- *Type:* string

[Read] fsx:DescribeVolumes.

---

##### `DetachAndDeleteS3AccessPoint`<sup>Required</sup> <a name="DetachAndDeleteS3AccessPoint" id="@cdk_utils/iam.fsx.FsxActions.property.DetachAndDeleteS3AccessPoint"></a>

```typescript
public readonly DetachAndDeleteS3AccessPoint: string;
```

- *Type:* string

[Write] fsx:DetachAndDeleteS3AccessPoint.

---

##### `DisassociateFileGateway`<sup>Required</sup> <a name="DisassociateFileGateway" id="@cdk_utils/iam.fsx.FsxActions.property.DisassociateFileGateway"></a>

```typescript
public readonly DisassociateFileGateway: string;
```

- *Type:* string

[Write] fsx:DisassociateFileGateway.

---

##### `DisassociateFileSystemAliases`<sup>Required</sup> <a name="DisassociateFileSystemAliases" id="@cdk_utils/iam.fsx.FsxActions.property.DisassociateFileSystemAliases"></a>

```typescript
public readonly DisassociateFileSystemAliases: string;
```

- *Type:* string

[Write] fsx:DisassociateFileSystemAliases.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.fsx.FsxActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] fsx:ListTagsForResource.

---

##### `ManageBackupPrincipalAssociations`<sup>Required</sup> <a name="ManageBackupPrincipalAssociations" id="@cdk_utils/iam.fsx.FsxActions.property.ManageBackupPrincipalAssociations"></a>

```typescript
public readonly ManageBackupPrincipalAssociations: string;
```

- *Type:* string

[PermissionManagement] fsx:ManageBackupPrincipalAssociations.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.fsx.FsxActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] fsx:PutResourcePolicy.

---

##### `ReleaseFileSystemNfsV3Locks`<sup>Required</sup> <a name="ReleaseFileSystemNfsV3Locks" id="@cdk_utils/iam.fsx.FsxActions.property.ReleaseFileSystemNfsV3Locks"></a>

```typescript
public readonly ReleaseFileSystemNfsV3Locks: string;
```

- *Type:* string

[Write] fsx:ReleaseFileSystemNfsV3Locks.

---

##### `RestoreVolumeFromSnapshot`<sup>Required</sup> <a name="RestoreVolumeFromSnapshot" id="@cdk_utils/iam.fsx.FsxActions.property.RestoreVolumeFromSnapshot"></a>

```typescript
public readonly RestoreVolumeFromSnapshot: string;
```

- *Type:* string

[Write] fsx:RestoreVolumeFromSnapshot.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.fsx.FsxActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartMisconfiguredStateRecovery`<sup>Required</sup> <a name="StartMisconfiguredStateRecovery" id="@cdk_utils/iam.fsx.FsxActions.property.StartMisconfiguredStateRecovery"></a>

```typescript
public readonly StartMisconfiguredStateRecovery: string;
```

- *Type:* string

[Write] fsx:StartMisconfiguredStateRecovery.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.fsx.FsxActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] fsx:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.fsx.FsxActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] fsx:UntagResource.

---

##### `UpdateClusterPeer`<sup>Required</sup> <a name="UpdateClusterPeer" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateClusterPeer"></a>

```typescript
public readonly UpdateClusterPeer: string;
```

- *Type:* string

[Write] fsx:UpdateClusterPeer.

---

##### `UpdateDataRepositoryAssociation`<sup>Required</sup> <a name="UpdateDataRepositoryAssociation" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateDataRepositoryAssociation"></a>

```typescript
public readonly UpdateDataRepositoryAssociation: string;
```

- *Type:* string

[Write] fsx:UpdateDataRepositoryAssociation.

---

##### `UpdateFileCache`<sup>Required</sup> <a name="UpdateFileCache" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateFileCache"></a>

```typescript
public readonly UpdateFileCache: string;
```

- *Type:* string

[Write] fsx:UpdateFileCache.

---

##### `UpdateFileSystem`<sup>Required</sup> <a name="UpdateFileSystem" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateFileSystem"></a>

```typescript
public readonly UpdateFileSystem: string;
```

- *Type:* string

[Write] fsx:UpdateFileSystem.

---

##### `UpdateSharedVpcConfiguration`<sup>Required</sup> <a name="UpdateSharedVpcConfiguration" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateSharedVpcConfiguration"></a>

```typescript
public readonly UpdateSharedVpcConfiguration: string;
```

- *Type:* string

[Write] fsx:UpdateSharedVpcConfiguration.

---

##### `UpdateSnapmirrorPolicy`<sup>Required</sup> <a name="UpdateSnapmirrorPolicy" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateSnapmirrorPolicy"></a>

```typescript
public readonly UpdateSnapmirrorPolicy: string;
```

- *Type:* string

[Write] fsx:UpdateSnapmirrorPolicy.

---

##### `UpdateSnapmirrorRelationship`<sup>Required</sup> <a name="UpdateSnapmirrorRelationship" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateSnapmirrorRelationship"></a>

```typescript
public readonly UpdateSnapmirrorRelationship: string;
```

- *Type:* string

[Write] fsx:UpdateSnapmirrorRelationship.

---

##### `UpdateSnapshot`<sup>Required</sup> <a name="UpdateSnapshot" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateSnapshot"></a>

```typescript
public readonly UpdateSnapshot: string;
```

- *Type:* string

[Write] fsx:UpdateSnapshot.

---

##### `UpdateSnapshotPolicy`<sup>Required</sup> <a name="UpdateSnapshotPolicy" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateSnapshotPolicy"></a>

```typescript
public readonly UpdateSnapshotPolicy: string;
```

- *Type:* string

[Write] fsx:UpdateSnapshotPolicy.

---

##### `UpdateStorageVirtualMachine`<sup>Required</sup> <a name="UpdateStorageVirtualMachine" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateStorageVirtualMachine"></a>

```typescript
public readonly UpdateStorageVirtualMachine: string;
```

- *Type:* string

[Write] fsx:UpdateStorageVirtualMachine.

---

##### `UpdateStorageVirtualMachinePeer`<sup>Required</sup> <a name="UpdateStorageVirtualMachinePeer" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateStorageVirtualMachinePeer"></a>

```typescript
public readonly UpdateStorageVirtualMachinePeer: string;
```

- *Type:* string

[Write] fsx:UpdateStorageVirtualMachinePeer.

---

##### `UpdateVolume`<sup>Required</sup> <a name="UpdateVolume" id="@cdk_utils/iam.fsx.FsxActions.property.UpdateVolume"></a>

```typescript
public readonly UpdateVolume: string;
```

- *Type:* string

[Write] fsx:UpdateVolume.

---

### FsxConditions <a name="FsxConditions" id="@cdk_utils/iam.fsx.FsxConditions"></a>

Condition key constants and builders for fsx.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fsx.FsxConditions.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

new fsx.FsxConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.isBackupCopyDestination">isBackupCopyDestination</a></code> | Generates a condition block for `fsx:IsBackupCopyDestination`. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.isBackupCopySource">isBackupCopySource</a></code> | Generates a condition block for `fsx:IsBackupCopySource`. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.nfsDataRepositoryAuthenticationEnabled">nfsDataRepositoryAuthenticationEnabled</a></code> | Generates a condition block for `fsx:NfsDataRepositoryAuthenticationEnabled`. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.nfsDataRepositoryEncryptionInTransitEnabled">nfsDataRepositoryEncryptionInTransitEnabled</a></code> | Generates a condition block for `fsx:NfsDataRepositoryEncryptionInTransitEnabled`. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.parentVolumeId">parentVolumeId</a></code> | Generates a condition block for `fsx:ParentVolumeId`. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.snapmirrorSourcePath">snapmirrorSourcePath</a></code> | Generates a condition block for `fsx:SnapmirrorSourcePath`. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.storageVirtualMachineId">storageVirtualMachineId</a></code> | Generates a condition block for `fsx:StorageVirtualMachineId`. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `isBackupCopyDestination` <a name="isBackupCopyDestination" id="@cdk_utils/iam.fsx.FsxConditions.isBackupCopyDestination"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxConditions.isBackupCopyDestination(value: boolean)
```

Generates a condition block for `fsx:IsBackupCopyDestination`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fsx.FsxConditions.isBackupCopyDestination.parameter.value"></a>

- *Type:* boolean

---

##### `isBackupCopySource` <a name="isBackupCopySource" id="@cdk_utils/iam.fsx.FsxConditions.isBackupCopySource"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxConditions.isBackupCopySource(value: boolean)
```

Generates a condition block for `fsx:IsBackupCopySource`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fsx.FsxConditions.isBackupCopySource.parameter.value"></a>

- *Type:* boolean

---

##### `nfsDataRepositoryAuthenticationEnabled` <a name="nfsDataRepositoryAuthenticationEnabled" id="@cdk_utils/iam.fsx.FsxConditions.nfsDataRepositoryAuthenticationEnabled"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxConditions.nfsDataRepositoryAuthenticationEnabled(value: boolean)
```

Generates a condition block for `fsx:NfsDataRepositoryAuthenticationEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fsx.FsxConditions.nfsDataRepositoryAuthenticationEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `nfsDataRepositoryEncryptionInTransitEnabled` <a name="nfsDataRepositoryEncryptionInTransitEnabled" id="@cdk_utils/iam.fsx.FsxConditions.nfsDataRepositoryEncryptionInTransitEnabled"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxConditions.nfsDataRepositoryEncryptionInTransitEnabled(value: boolean)
```

Generates a condition block for `fsx:NfsDataRepositoryEncryptionInTransitEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fsx.FsxConditions.nfsDataRepositoryEncryptionInTransitEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `parentVolumeId` <a name="parentVolumeId" id="@cdk_utils/iam.fsx.FsxConditions.parentVolumeId"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxConditions.parentVolumeId(value: string)
```

Generates a condition block for `fsx:ParentVolumeId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fsx.FsxConditions.parentVolumeId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.fsx.FsxConditions.requestTag"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fsx.FsxConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.fsx.FsxConditions.resourceTag"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fsx.FsxConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `snapmirrorSourcePath` <a name="snapmirrorSourcePath" id="@cdk_utils/iam.fsx.FsxConditions.snapmirrorSourcePath"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxConditions.snapmirrorSourcePath(value: string)
```

Generates a condition block for `fsx:SnapmirrorSourcePath`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fsx.FsxConditions.snapmirrorSourcePath.parameter.value"></a>

- *Type:* string

---

##### `storageVirtualMachineId` <a name="storageVirtualMachineId" id="@cdk_utils/iam.fsx.FsxConditions.storageVirtualMachineId"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxConditions.storageVirtualMachineId(value: string)
```

Generates a condition block for `fsx:StorageVirtualMachineId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fsx.FsxConditions.storageVirtualMachineId.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.fsx.FsxConditions.tagKeys"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.fsx.FsxConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CopyBackupConditionKeys">CopyBackupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyBackup action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateBackupConditionKeys">CreateBackupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBackup action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateClusterPeerConditionKeys">CreateClusterPeerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateClusterPeer action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateDataRepositoryAssociationConditionKeys">CreateDataRepositoryAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataRepositoryAssociation action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateDataRepositoryTaskConditionKeys">CreateDataRepositoryTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataRepositoryTask action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateFileCacheConditionKeys">CreateFileCacheConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFileCache action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateFileSystemConditionKeys">CreateFileSystemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFileSystem action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateFileSystemFromBackupConditionKeys">CreateFileSystemFromBackupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFileSystemFromBackup action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateSnapmirrorPolicyConditionKeys">CreateSnapmirrorPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapmirrorPolicy action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateSnapmirrorRelationshipConditionKeys">CreateSnapmirrorRelationshipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapmirrorRelationship action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateSnapshotConditionKeys">CreateSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapshot action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateSnapshotPolicyConditionKeys">CreateSnapshotPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapshotPolicy action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateStorageVirtualMachineConditionKeys">CreateStorageVirtualMachineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStorageVirtualMachine action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateStorageVirtualMachinePeerConditionKeys">CreateStorageVirtualMachinePeerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStorageVirtualMachinePeer action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.CreateVolumeFromBackupConditionKeys">CreateVolumeFromBackupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVolumeFromBackup action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.IS_BACKUP_COPY_DESTINATION">IS_BACKUP_COPY_DESTINATION</a></code> | <code>string</code> | Condition key: fsx:IsBackupCopyDestination (Bool). |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.IS_BACKUP_COPY_SOURCE">IS_BACKUP_COPY_SOURCE</a></code> | <code>string</code> | Condition key: fsx:IsBackupCopySource (Bool). |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.NFS_DATA_REPOSITORY_AUTHENTICATION_ENABLED">NFS_DATA_REPOSITORY_AUTHENTICATION_ENABLED</a></code> | <code>string</code> | Condition key: fsx:NfsDataRepositoryAuthenticationEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.NFS_DATA_REPOSITORY_ENCRYPTION_IN_TRANSIT_ENABLED">NFS_DATA_REPOSITORY_ENCRYPTION_IN_TRANSIT_ENABLED</a></code> | <code>string</code> | Condition key: fsx:NfsDataRepositoryEncryptionInTransitEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.PARENT_VOLUME_ID">PARENT_VOLUME_ID</a></code> | <code>string</code> | Condition key: fsx:ParentVolumeId (String). |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.SNAPMIRROR_SOURCE_PATH">SNAPMIRROR_SOURCE_PATH</a></code> | <code>string</code> | Condition key: fsx:SnapmirrorSourcePath (String). |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.STORAGE_VIRTUAL_MACHINE_ID">STORAGE_VIRTUAL_MACHINE_ID</a></code> | <code>string</code> | Condition key: fsx:StorageVirtualMachineId (String). |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.fsx.FsxConditions.property.UpdateVolumeConditionKeys">UpdateVolumeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateVolume action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.fsx.FsxConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.fsx.FsxConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.fsx.FsxConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CopyBackupConditionKeys`<sup>Required</sup> <a name="CopyBackupConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CopyBackupConditionKeys"></a>

```typescript
public readonly CopyBackupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyBackup action.

---

##### `CreateBackupConditionKeys`<sup>Required</sup> <a name="CreateBackupConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateBackupConditionKeys"></a>

```typescript
public readonly CreateBackupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBackup action.

---

##### `CreateClusterPeerConditionKeys`<sup>Required</sup> <a name="CreateClusterPeerConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateClusterPeerConditionKeys"></a>

```typescript
public readonly CreateClusterPeerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateClusterPeer action.

---

##### `CreateDataRepositoryAssociationConditionKeys`<sup>Required</sup> <a name="CreateDataRepositoryAssociationConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateDataRepositoryAssociationConditionKeys"></a>

```typescript
public readonly CreateDataRepositoryAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataRepositoryAssociation action.

---

##### `CreateDataRepositoryTaskConditionKeys`<sup>Required</sup> <a name="CreateDataRepositoryTaskConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateDataRepositoryTaskConditionKeys"></a>

```typescript
public readonly CreateDataRepositoryTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataRepositoryTask action.

---

##### `CreateFileCacheConditionKeys`<sup>Required</sup> <a name="CreateFileCacheConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateFileCacheConditionKeys"></a>

```typescript
public readonly CreateFileCacheConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFileCache action.

---

##### `CreateFileSystemConditionKeys`<sup>Required</sup> <a name="CreateFileSystemConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateFileSystemConditionKeys"></a>

```typescript
public readonly CreateFileSystemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFileSystem action.

---

##### `CreateFileSystemFromBackupConditionKeys`<sup>Required</sup> <a name="CreateFileSystemFromBackupConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateFileSystemFromBackupConditionKeys"></a>

```typescript
public readonly CreateFileSystemFromBackupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFileSystemFromBackup action.

---

##### `CreateSnapmirrorPolicyConditionKeys`<sup>Required</sup> <a name="CreateSnapmirrorPolicyConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateSnapmirrorPolicyConditionKeys"></a>

```typescript
public readonly CreateSnapmirrorPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapmirrorPolicy action.

---

##### `CreateSnapmirrorRelationshipConditionKeys`<sup>Required</sup> <a name="CreateSnapmirrorRelationshipConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateSnapmirrorRelationshipConditionKeys"></a>

```typescript
public readonly CreateSnapmirrorRelationshipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapmirrorRelationship action.

---

##### `CreateSnapshotConditionKeys`<sup>Required</sup> <a name="CreateSnapshotConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateSnapshotConditionKeys"></a>

```typescript
public readonly CreateSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapshot action.

---

##### `CreateSnapshotPolicyConditionKeys`<sup>Required</sup> <a name="CreateSnapshotPolicyConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateSnapshotPolicyConditionKeys"></a>

```typescript
public readonly CreateSnapshotPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapshotPolicy action.

---

##### `CreateStorageVirtualMachineConditionKeys`<sup>Required</sup> <a name="CreateStorageVirtualMachineConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateStorageVirtualMachineConditionKeys"></a>

```typescript
public readonly CreateStorageVirtualMachineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStorageVirtualMachine action.

---

##### `CreateStorageVirtualMachinePeerConditionKeys`<sup>Required</sup> <a name="CreateStorageVirtualMachinePeerConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateStorageVirtualMachinePeerConditionKeys"></a>

```typescript
public readonly CreateStorageVirtualMachinePeerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStorageVirtualMachinePeer action.

---

##### `CreateVolumeFromBackupConditionKeys`<sup>Required</sup> <a name="CreateVolumeFromBackupConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.CreateVolumeFromBackupConditionKeys"></a>

```typescript
public readonly CreateVolumeFromBackupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVolumeFromBackup action.

---

##### `IS_BACKUP_COPY_DESTINATION`<sup>Required</sup> <a name="IS_BACKUP_COPY_DESTINATION" id="@cdk_utils/iam.fsx.FsxConditions.property.IS_BACKUP_COPY_DESTINATION"></a>

```typescript
public readonly IS_BACKUP_COPY_DESTINATION: string;
```

- *Type:* string

Condition key: fsx:IsBackupCopyDestination (Bool).

---

##### `IS_BACKUP_COPY_SOURCE`<sup>Required</sup> <a name="IS_BACKUP_COPY_SOURCE" id="@cdk_utils/iam.fsx.FsxConditions.property.IS_BACKUP_COPY_SOURCE"></a>

```typescript
public readonly IS_BACKUP_COPY_SOURCE: string;
```

- *Type:* string

Condition key: fsx:IsBackupCopySource (Bool).

---

##### `NFS_DATA_REPOSITORY_AUTHENTICATION_ENABLED`<sup>Required</sup> <a name="NFS_DATA_REPOSITORY_AUTHENTICATION_ENABLED" id="@cdk_utils/iam.fsx.FsxConditions.property.NFS_DATA_REPOSITORY_AUTHENTICATION_ENABLED"></a>

```typescript
public readonly NFS_DATA_REPOSITORY_AUTHENTICATION_ENABLED: string;
```

- *Type:* string

Condition key: fsx:NfsDataRepositoryAuthenticationEnabled (Bool).

---

##### `NFS_DATA_REPOSITORY_ENCRYPTION_IN_TRANSIT_ENABLED`<sup>Required</sup> <a name="NFS_DATA_REPOSITORY_ENCRYPTION_IN_TRANSIT_ENABLED" id="@cdk_utils/iam.fsx.FsxConditions.property.NFS_DATA_REPOSITORY_ENCRYPTION_IN_TRANSIT_ENABLED"></a>

```typescript
public readonly NFS_DATA_REPOSITORY_ENCRYPTION_IN_TRANSIT_ENABLED: string;
```

- *Type:* string

Condition key: fsx:NfsDataRepositoryEncryptionInTransitEnabled (Bool).

---

##### `PARENT_VOLUME_ID`<sup>Required</sup> <a name="PARENT_VOLUME_ID" id="@cdk_utils/iam.fsx.FsxConditions.property.PARENT_VOLUME_ID"></a>

```typescript
public readonly PARENT_VOLUME_ID: string;
```

- *Type:* string

Condition key: fsx:ParentVolumeId (String).

---

##### `SNAPMIRROR_SOURCE_PATH`<sup>Required</sup> <a name="SNAPMIRROR_SOURCE_PATH" id="@cdk_utils/iam.fsx.FsxConditions.property.SNAPMIRROR_SOURCE_PATH"></a>

```typescript
public readonly SNAPMIRROR_SOURCE_PATH: string;
```

- *Type:* string

Condition key: fsx:SnapmirrorSourcePath (String).

---

##### `STORAGE_VIRTUAL_MACHINE_ID`<sup>Required</sup> <a name="STORAGE_VIRTUAL_MACHINE_ID" id="@cdk_utils/iam.fsx.FsxConditions.property.STORAGE_VIRTUAL_MACHINE_ID"></a>

```typescript
public readonly STORAGE_VIRTUAL_MACHINE_ID: string;
```

- *Type:* string

Condition key: fsx:StorageVirtualMachineId (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateVolumeConditionKeys`<sup>Required</sup> <a name="UpdateVolumeConditionKeys" id="@cdk_utils/iam.fsx.FsxConditions.property.UpdateVolumeConditionKeys"></a>

```typescript
public readonly UpdateVolumeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateVolume action.

---

### FsxOperations <a name="FsxOperations" id="@cdk_utils/iam.fsx.FsxOperations"></a>

API operation to required IAM actions mapping for fsx.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fsx.FsxOperations.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

new fsx.FsxOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.AssociateFileSystemAliases">AssociateFileSystemAliases</a></code> | <code>string[]</code> | IAM actions required for the AssociateFileSystemAliases API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CancelDataRepositoryTask">CancelDataRepositoryTask</a></code> | <code>string[]</code> | IAM actions required for the CancelDataRepositoryTask API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CopyBackup">CopyBackup</a></code> | <code>string[]</code> | IAM actions required for the CopyBackup API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CopySnapshotAndUpdateVolume">CopySnapshotAndUpdateVolume</a></code> | <code>string[]</code> | IAM actions required for the CopySnapshotAndUpdateVolume API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateAndAttachS3AccessPoint">CreateAndAttachS3AccessPoint</a></code> | <code>string[]</code> | IAM actions required for the CreateAndAttachS3AccessPoint API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateBackup">CreateBackup</a></code> | <code>string[]</code> | IAM actions required for the CreateBackup API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateClusterPeer">CreateClusterPeer</a></code> | <code>string[]</code> | IAM actions required for the CreateClusterPeer API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateDataRepositoryAssociation">CreateDataRepositoryAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateDataRepositoryAssociation API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateDataRepositoryTask">CreateDataRepositoryTask</a></code> | <code>string[]</code> | IAM actions required for the CreateDataRepositoryTask API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateFileCache">CreateFileCache</a></code> | <code>string[]</code> | IAM actions required for the CreateFileCache API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateFileSystem">CreateFileSystem</a></code> | <code>string[]</code> | IAM actions required for the CreateFileSystem API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateFileSystemFromBackup">CreateFileSystemFromBackup</a></code> | <code>string[]</code> | IAM actions required for the CreateFileSystemFromBackup API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateSnapmirrorPolicy">CreateSnapmirrorPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapmirrorPolicy API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateSnapmirrorRelationship">CreateSnapmirrorRelationship</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapmirrorRelationship API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshot API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateSnapshotPolicy">CreateSnapshotPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshotPolicy API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateStorageVirtualMachine">CreateStorageVirtualMachine</a></code> | <code>string[]</code> | IAM actions required for the CreateStorageVirtualMachine API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateStorageVirtualMachinePeer">CreateStorageVirtualMachinePeer</a></code> | <code>string[]</code> | IAM actions required for the CreateStorageVirtualMachinePeer API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateVolume">CreateVolume</a></code> | <code>string[]</code> | IAM actions required for the CreateVolume API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.CreateVolumeFromBackup">CreateVolumeFromBackup</a></code> | <code>string[]</code> | IAM actions required for the CreateVolumeFromBackup API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteBackup">DeleteBackup</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackup API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteClusterPeer">DeleteClusterPeer</a></code> | <code>string[]</code> | IAM actions required for the DeleteClusterPeer API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteDataRepositoryAssociation">DeleteDataRepositoryAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataRepositoryAssociation API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteFileCache">DeleteFileCache</a></code> | <code>string[]</code> | IAM actions required for the DeleteFileCache API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteFileSystem">DeleteFileSystem</a></code> | <code>string[]</code> | IAM actions required for the DeleteFileSystem API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteSnapmirrorPolicy">DeleteSnapmirrorPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapmirrorPolicy API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteSnapmirrorRelationship">DeleteSnapmirrorRelationship</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapmirrorRelationship API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteSnapshot">DeleteSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapshot API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteSnapshotPolicy">DeleteSnapshotPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapshotPolicy API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteStorageVirtualMachine">DeleteStorageVirtualMachine</a></code> | <code>string[]</code> | IAM actions required for the DeleteStorageVirtualMachine API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteStorageVirtualMachinePeer">DeleteStorageVirtualMachinePeer</a></code> | <code>string[]</code> | IAM actions required for the DeleteStorageVirtualMachinePeer API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DeleteVolume">DeleteVolume</a></code> | <code>string[]</code> | IAM actions required for the DeleteVolume API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeBackups">DescribeBackups</a></code> | <code>string[]</code> | IAM actions required for the DescribeBackups API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeClusterPeers">DescribeClusterPeers</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterPeers API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeDataRepositoryAssociations">DescribeDataRepositoryAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataRepositoryAssociations API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeDataRepositoryTasks">DescribeDataRepositoryTasks</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataRepositoryTasks API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeFileCaches">DescribeFileCaches</a></code> | <code>string[]</code> | IAM actions required for the DescribeFileCaches API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeFileSystemAliases">DescribeFileSystemAliases</a></code> | <code>string[]</code> | IAM actions required for the DescribeFileSystemAliases API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeFileSystems">DescribeFileSystems</a></code> | <code>string[]</code> | IAM actions required for the DescribeFileSystems API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeS3AccessPointAttachments">DescribeS3AccessPointAttachments</a></code> | <code>string[]</code> | IAM actions required for the DescribeS3AccessPointAttachments API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeSharedVpcConfiguration">DescribeSharedVpcConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeSharedVpcConfiguration API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeSnapmirrorPolicies">DescribeSnapmirrorPolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeSnapmirrorPolicies API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeSnapmirrorRelationships">DescribeSnapmirrorRelationships</a></code> | <code>string[]</code> | IAM actions required for the DescribeSnapmirrorRelationships API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeSnapshotPolicies">DescribeSnapshotPolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeSnapshotPolicies API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeSnapshots">DescribeSnapshots</a></code> | <code>string[]</code> | IAM actions required for the DescribeSnapshots API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeStorageVirtualMachinePeers">DescribeStorageVirtualMachinePeers</a></code> | <code>string[]</code> | IAM actions required for the DescribeStorageVirtualMachinePeers API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeStorageVirtualMachines">DescribeStorageVirtualMachines</a></code> | <code>string[]</code> | IAM actions required for the DescribeStorageVirtualMachines API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DescribeVolumes">DescribeVolumes</a></code> | <code>string[]</code> | IAM actions required for the DescribeVolumes API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DetachAndDeleteS3AccessPoint">DetachAndDeleteS3AccessPoint</a></code> | <code>string[]</code> | IAM actions required for the DetachAndDeleteS3AccessPoint API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.DisassociateFileSystemAliases">DisassociateFileSystemAliases</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFileSystemAliases API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.ReleaseFileSystemNfsV3Locks">ReleaseFileSystemNfsV3Locks</a></code> | <code>string[]</code> | IAM actions required for the ReleaseFileSystemNfsV3Locks API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.RestoreVolumeFromSnapshot">RestoreVolumeFromSnapshot</a></code> | <code>string[]</code> | IAM actions required for the RestoreVolumeFromSnapshot API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.StartMisconfiguredStateRecovery">StartMisconfiguredStateRecovery</a></code> | <code>string[]</code> | IAM actions required for the StartMisconfiguredStateRecovery API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateClusterPeer">UpdateClusterPeer</a></code> | <code>string[]</code> | IAM actions required for the UpdateClusterPeer API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateDataRepositoryAssociation">UpdateDataRepositoryAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataRepositoryAssociation API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateFileCache">UpdateFileCache</a></code> | <code>string[]</code> | IAM actions required for the UpdateFileCache API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateFileSystem">UpdateFileSystem</a></code> | <code>string[]</code> | IAM actions required for the UpdateFileSystem API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateSharedVpcConfiguration">UpdateSharedVpcConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateSharedVpcConfiguration API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateSnapmirrorPolicy">UpdateSnapmirrorPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateSnapmirrorPolicy API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateSnapmirrorRelationship">UpdateSnapmirrorRelationship</a></code> | <code>string[]</code> | IAM actions required for the UpdateSnapmirrorRelationship API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateSnapshot">UpdateSnapshot</a></code> | <code>string[]</code> | IAM actions required for the UpdateSnapshot API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateSnapshotPolicy">UpdateSnapshotPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateSnapshotPolicy API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateStorageVirtualMachine">UpdateStorageVirtualMachine</a></code> | <code>string[]</code> | IAM actions required for the UpdateStorageVirtualMachine API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateStorageVirtualMachinePeer">UpdateStorageVirtualMachinePeer</a></code> | <code>string[]</code> | IAM actions required for the UpdateStorageVirtualMachinePeer API call. |
| <code><a href="#@cdk_utils/iam.fsx.FsxOperations.property.UpdateVolume">UpdateVolume</a></code> | <code>string[]</code> | IAM actions required for the UpdateVolume API call. |

---

##### `AssociateFileSystemAliases`<sup>Required</sup> <a name="AssociateFileSystemAliases" id="@cdk_utils/iam.fsx.FsxOperations.property.AssociateFileSystemAliases"></a>

```typescript
public readonly AssociateFileSystemAliases: string[];
```

- *Type:* string[]

IAM actions required for the AssociateFileSystemAliases API call.

---

##### `CancelDataRepositoryTask`<sup>Required</sup> <a name="CancelDataRepositoryTask" id="@cdk_utils/iam.fsx.FsxOperations.property.CancelDataRepositoryTask"></a>

```typescript
public readonly CancelDataRepositoryTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelDataRepositoryTask API call.

---

##### `CopyBackup`<sup>Required</sup> <a name="CopyBackup" id="@cdk_utils/iam.fsx.FsxOperations.property.CopyBackup"></a>

```typescript
public readonly CopyBackup: string[];
```

- *Type:* string[]

IAM actions required for the CopyBackup API call.

---

##### `CopySnapshotAndUpdateVolume`<sup>Required</sup> <a name="CopySnapshotAndUpdateVolume" id="@cdk_utils/iam.fsx.FsxOperations.property.CopySnapshotAndUpdateVolume"></a>

```typescript
public readonly CopySnapshotAndUpdateVolume: string[];
```

- *Type:* string[]

IAM actions required for the CopySnapshotAndUpdateVolume API call.

---

##### `CreateAndAttachS3AccessPoint`<sup>Required</sup> <a name="CreateAndAttachS3AccessPoint" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateAndAttachS3AccessPoint"></a>

```typescript
public readonly CreateAndAttachS3AccessPoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateAndAttachS3AccessPoint API call.

---

##### `CreateBackup`<sup>Required</sup> <a name="CreateBackup" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateBackup"></a>

```typescript
public readonly CreateBackup: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackup API call.

---

##### `CreateClusterPeer`<sup>Required</sup> <a name="CreateClusterPeer" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateClusterPeer"></a>

```typescript
public readonly CreateClusterPeer: string[];
```

- *Type:* string[]

IAM actions required for the CreateClusterPeer API call.

---

##### `CreateDataRepositoryAssociation`<sup>Required</sup> <a name="CreateDataRepositoryAssociation" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateDataRepositoryAssociation"></a>

```typescript
public readonly CreateDataRepositoryAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataRepositoryAssociation API call.

---

##### `CreateDataRepositoryTask`<sup>Required</sup> <a name="CreateDataRepositoryTask" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateDataRepositoryTask"></a>

```typescript
public readonly CreateDataRepositoryTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataRepositoryTask API call.

---

##### `CreateFileCache`<sup>Required</sup> <a name="CreateFileCache" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateFileCache"></a>

```typescript
public readonly CreateFileCache: string[];
```

- *Type:* string[]

IAM actions required for the CreateFileCache API call.

---

##### `CreateFileSystem`<sup>Required</sup> <a name="CreateFileSystem" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateFileSystem"></a>

```typescript
public readonly CreateFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the CreateFileSystem API call.

---

##### `CreateFileSystemFromBackup`<sup>Required</sup> <a name="CreateFileSystemFromBackup" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateFileSystemFromBackup"></a>

```typescript
public readonly CreateFileSystemFromBackup: string[];
```

- *Type:* string[]

IAM actions required for the CreateFileSystemFromBackup API call.

---

##### `CreateSnapmirrorPolicy`<sup>Required</sup> <a name="CreateSnapmirrorPolicy" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateSnapmirrorPolicy"></a>

```typescript
public readonly CreateSnapmirrorPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapmirrorPolicy API call.

---

##### `CreateSnapmirrorRelationship`<sup>Required</sup> <a name="CreateSnapmirrorRelationship" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateSnapmirrorRelationship"></a>

```typescript
public readonly CreateSnapmirrorRelationship: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapmirrorRelationship API call.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshot API call.

---

##### `CreateSnapshotPolicy`<sup>Required</sup> <a name="CreateSnapshotPolicy" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateSnapshotPolicy"></a>

```typescript
public readonly CreateSnapshotPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshotPolicy API call.

---

##### `CreateStorageVirtualMachine`<sup>Required</sup> <a name="CreateStorageVirtualMachine" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateStorageVirtualMachine"></a>

```typescript
public readonly CreateStorageVirtualMachine: string[];
```

- *Type:* string[]

IAM actions required for the CreateStorageVirtualMachine API call.

---

##### `CreateStorageVirtualMachinePeer`<sup>Required</sup> <a name="CreateStorageVirtualMachinePeer" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateStorageVirtualMachinePeer"></a>

```typescript
public readonly CreateStorageVirtualMachinePeer: string[];
```

- *Type:* string[]

IAM actions required for the CreateStorageVirtualMachinePeer API call.

---

##### `CreateVolume`<sup>Required</sup> <a name="CreateVolume" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateVolume"></a>

```typescript
public readonly CreateVolume: string[];
```

- *Type:* string[]

IAM actions required for the CreateVolume API call.

---

##### `CreateVolumeFromBackup`<sup>Required</sup> <a name="CreateVolumeFromBackup" id="@cdk_utils/iam.fsx.FsxOperations.property.CreateVolumeFromBackup"></a>

```typescript
public readonly CreateVolumeFromBackup: string[];
```

- *Type:* string[]

IAM actions required for the CreateVolumeFromBackup API call.

---

##### `DeleteBackup`<sup>Required</sup> <a name="DeleteBackup" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteBackup"></a>

```typescript
public readonly DeleteBackup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackup API call.

---

##### `DeleteClusterPeer`<sup>Required</sup> <a name="DeleteClusterPeer" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteClusterPeer"></a>

```typescript
public readonly DeleteClusterPeer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClusterPeer API call.

---

##### `DeleteDataRepositoryAssociation`<sup>Required</sup> <a name="DeleteDataRepositoryAssociation" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteDataRepositoryAssociation"></a>

```typescript
public readonly DeleteDataRepositoryAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataRepositoryAssociation API call.

---

##### `DeleteFileCache`<sup>Required</sup> <a name="DeleteFileCache" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteFileCache"></a>

```typescript
public readonly DeleteFileCache: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFileCache API call.

---

##### `DeleteFileSystem`<sup>Required</sup> <a name="DeleteFileSystem" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteFileSystem"></a>

```typescript
public readonly DeleteFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFileSystem API call.

---

##### `DeleteSnapmirrorPolicy`<sup>Required</sup> <a name="DeleteSnapmirrorPolicy" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteSnapmirrorPolicy"></a>

```typescript
public readonly DeleteSnapmirrorPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapmirrorPolicy API call.

---

##### `DeleteSnapmirrorRelationship`<sup>Required</sup> <a name="DeleteSnapmirrorRelationship" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteSnapmirrorRelationship"></a>

```typescript
public readonly DeleteSnapmirrorRelationship: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapmirrorRelationship API call.

---

##### `DeleteSnapshot`<sup>Required</sup> <a name="DeleteSnapshot" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteSnapshot"></a>

```typescript
public readonly DeleteSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapshot API call.

---

##### `DeleteSnapshotPolicy`<sup>Required</sup> <a name="DeleteSnapshotPolicy" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteSnapshotPolicy"></a>

```typescript
public readonly DeleteSnapshotPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapshotPolicy API call.

---

##### `DeleteStorageVirtualMachine`<sup>Required</sup> <a name="DeleteStorageVirtualMachine" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteStorageVirtualMachine"></a>

```typescript
public readonly DeleteStorageVirtualMachine: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStorageVirtualMachine API call.

---

##### `DeleteStorageVirtualMachinePeer`<sup>Required</sup> <a name="DeleteStorageVirtualMachinePeer" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteStorageVirtualMachinePeer"></a>

```typescript
public readonly DeleteStorageVirtualMachinePeer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStorageVirtualMachinePeer API call.

---

##### `DeleteVolume`<sup>Required</sup> <a name="DeleteVolume" id="@cdk_utils/iam.fsx.FsxOperations.property.DeleteVolume"></a>

```typescript
public readonly DeleteVolume: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVolume API call.

---

##### `DescribeBackups`<sup>Required</sup> <a name="DescribeBackups" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeBackups"></a>

```typescript
public readonly DescribeBackups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBackups API call.

---

##### `DescribeClusterPeers`<sup>Required</sup> <a name="DescribeClusterPeers" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeClusterPeers"></a>

```typescript
public readonly DescribeClusterPeers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterPeers API call.

---

##### `DescribeDataRepositoryAssociations`<sup>Required</sup> <a name="DescribeDataRepositoryAssociations" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeDataRepositoryAssociations"></a>

```typescript
public readonly DescribeDataRepositoryAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataRepositoryAssociations API call.

---

##### `DescribeDataRepositoryTasks`<sup>Required</sup> <a name="DescribeDataRepositoryTasks" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeDataRepositoryTasks"></a>

```typescript
public readonly DescribeDataRepositoryTasks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataRepositoryTasks API call.

---

##### `DescribeFileCaches`<sup>Required</sup> <a name="DescribeFileCaches" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeFileCaches"></a>

```typescript
public readonly DescribeFileCaches: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFileCaches API call.

---

##### `DescribeFileSystemAliases`<sup>Required</sup> <a name="DescribeFileSystemAliases" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeFileSystemAliases"></a>

```typescript
public readonly DescribeFileSystemAliases: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFileSystemAliases API call.

---

##### `DescribeFileSystems`<sup>Required</sup> <a name="DescribeFileSystems" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeFileSystems"></a>

```typescript
public readonly DescribeFileSystems: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFileSystems API call.

---

##### `DescribeS3AccessPointAttachments`<sup>Required</sup> <a name="DescribeS3AccessPointAttachments" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeS3AccessPointAttachments"></a>

```typescript
public readonly DescribeS3AccessPointAttachments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeS3AccessPointAttachments API call.

---

##### `DescribeSharedVpcConfiguration`<sup>Required</sup> <a name="DescribeSharedVpcConfiguration" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeSharedVpcConfiguration"></a>

```typescript
public readonly DescribeSharedVpcConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSharedVpcConfiguration API call.

---

##### `DescribeSnapmirrorPolicies`<sup>Required</sup> <a name="DescribeSnapmirrorPolicies" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeSnapmirrorPolicies"></a>

```typescript
public readonly DescribeSnapmirrorPolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSnapmirrorPolicies API call.

---

##### `DescribeSnapmirrorRelationships`<sup>Required</sup> <a name="DescribeSnapmirrorRelationships" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeSnapmirrorRelationships"></a>

```typescript
public readonly DescribeSnapmirrorRelationships: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSnapmirrorRelationships API call.

---

##### `DescribeSnapshotPolicies`<sup>Required</sup> <a name="DescribeSnapshotPolicies" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeSnapshotPolicies"></a>

```typescript
public readonly DescribeSnapshotPolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSnapshotPolicies API call.

---

##### `DescribeSnapshots`<sup>Required</sup> <a name="DescribeSnapshots" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeSnapshots"></a>

```typescript
public readonly DescribeSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSnapshots API call.

---

##### `DescribeStorageVirtualMachinePeers`<sup>Required</sup> <a name="DescribeStorageVirtualMachinePeers" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeStorageVirtualMachinePeers"></a>

```typescript
public readonly DescribeStorageVirtualMachinePeers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStorageVirtualMachinePeers API call.

---

##### `DescribeStorageVirtualMachines`<sup>Required</sup> <a name="DescribeStorageVirtualMachines" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeStorageVirtualMachines"></a>

```typescript
public readonly DescribeStorageVirtualMachines: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStorageVirtualMachines API call.

---

##### `DescribeVolumes`<sup>Required</sup> <a name="DescribeVolumes" id="@cdk_utils/iam.fsx.FsxOperations.property.DescribeVolumes"></a>

```typescript
public readonly DescribeVolumes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVolumes API call.

---

##### `DetachAndDeleteS3AccessPoint`<sup>Required</sup> <a name="DetachAndDeleteS3AccessPoint" id="@cdk_utils/iam.fsx.FsxOperations.property.DetachAndDeleteS3AccessPoint"></a>

```typescript
public readonly DetachAndDeleteS3AccessPoint: string[];
```

- *Type:* string[]

IAM actions required for the DetachAndDeleteS3AccessPoint API call.

---

##### `DisassociateFileSystemAliases`<sup>Required</sup> <a name="DisassociateFileSystemAliases" id="@cdk_utils/iam.fsx.FsxOperations.property.DisassociateFileSystemAliases"></a>

```typescript
public readonly DisassociateFileSystemAliases: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFileSystemAliases API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.fsx.FsxOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ReleaseFileSystemNfsV3Locks`<sup>Required</sup> <a name="ReleaseFileSystemNfsV3Locks" id="@cdk_utils/iam.fsx.FsxOperations.property.ReleaseFileSystemNfsV3Locks"></a>

```typescript
public readonly ReleaseFileSystemNfsV3Locks: string[];
```

- *Type:* string[]

IAM actions required for the ReleaseFileSystemNfsV3Locks API call.

---

##### `RestoreVolumeFromSnapshot`<sup>Required</sup> <a name="RestoreVolumeFromSnapshot" id="@cdk_utils/iam.fsx.FsxOperations.property.RestoreVolumeFromSnapshot"></a>

```typescript
public readonly RestoreVolumeFromSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the RestoreVolumeFromSnapshot API call.

---

##### `StartMisconfiguredStateRecovery`<sup>Required</sup> <a name="StartMisconfiguredStateRecovery" id="@cdk_utils/iam.fsx.FsxOperations.property.StartMisconfiguredStateRecovery"></a>

```typescript
public readonly StartMisconfiguredStateRecovery: string[];
```

- *Type:* string[]

IAM actions required for the StartMisconfiguredStateRecovery API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.fsx.FsxOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.fsx.FsxOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateClusterPeer`<sup>Required</sup> <a name="UpdateClusterPeer" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateClusterPeer"></a>

```typescript
public readonly UpdateClusterPeer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateClusterPeer API call.

---

##### `UpdateDataRepositoryAssociation`<sup>Required</sup> <a name="UpdateDataRepositoryAssociation" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateDataRepositoryAssociation"></a>

```typescript
public readonly UpdateDataRepositoryAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataRepositoryAssociation API call.

---

##### `UpdateFileCache`<sup>Required</sup> <a name="UpdateFileCache" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateFileCache"></a>

```typescript
public readonly UpdateFileCache: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFileCache API call.

---

##### `UpdateFileSystem`<sup>Required</sup> <a name="UpdateFileSystem" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateFileSystem"></a>

```typescript
public readonly UpdateFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFileSystem API call.

---

##### `UpdateSharedVpcConfiguration`<sup>Required</sup> <a name="UpdateSharedVpcConfiguration" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateSharedVpcConfiguration"></a>

```typescript
public readonly UpdateSharedVpcConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSharedVpcConfiguration API call.

---

##### `UpdateSnapmirrorPolicy`<sup>Required</sup> <a name="UpdateSnapmirrorPolicy" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateSnapmirrorPolicy"></a>

```typescript
public readonly UpdateSnapmirrorPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSnapmirrorPolicy API call.

---

##### `UpdateSnapmirrorRelationship`<sup>Required</sup> <a name="UpdateSnapmirrorRelationship" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateSnapmirrorRelationship"></a>

```typescript
public readonly UpdateSnapmirrorRelationship: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSnapmirrorRelationship API call.

---

##### `UpdateSnapshot`<sup>Required</sup> <a name="UpdateSnapshot" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateSnapshot"></a>

```typescript
public readonly UpdateSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSnapshot API call.

---

##### `UpdateSnapshotPolicy`<sup>Required</sup> <a name="UpdateSnapshotPolicy" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateSnapshotPolicy"></a>

```typescript
public readonly UpdateSnapshotPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSnapshotPolicy API call.

---

##### `UpdateStorageVirtualMachine`<sup>Required</sup> <a name="UpdateStorageVirtualMachine" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateStorageVirtualMachine"></a>

```typescript
public readonly UpdateStorageVirtualMachine: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStorageVirtualMachine API call.

---

##### `UpdateStorageVirtualMachinePeer`<sup>Required</sup> <a name="UpdateStorageVirtualMachinePeer" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateStorageVirtualMachinePeer"></a>

```typescript
public readonly UpdateStorageVirtualMachinePeer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStorageVirtualMachinePeer API call.

---

##### `UpdateVolume`<sup>Required</sup> <a name="UpdateVolume" id="@cdk_utils/iam.fsx.FsxOperations.property.UpdateVolume"></a>

```typescript
public readonly UpdateVolume: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVolume API call.

---

### FsxResources <a name="FsxResources" id="@cdk_utils/iam.fsx.FsxResources"></a>

ARN builders, validators, and parsers for fsx resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fsx.FsxResources.Initializer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

new fsx.FsxResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.association">association</a></code> | Builds an ARN for the association resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.backup">backup</a></code> | Builds an ARN for the backup resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.clusterPeer">clusterPeer</a></code> | Builds an ARN for the cluster-peer resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.fileCache">fileCache</a></code> | Builds an ARN for the file-cache resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.fileSystem">fileSystem</a></code> | Builds an ARN for the file-system resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidAssociationArn">isValidAssociationArn</a></code> | Validates whether a string is a valid ARN for the association resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidBackupArn">isValidBackupArn</a></code> | Validates whether a string is a valid ARN for the backup resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidClusterPeerArn">isValidClusterPeerArn</a></code> | Validates whether a string is a valid ARN for the cluster-peer resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidFileCacheArn">isValidFileCacheArn</a></code> | Validates whether a string is a valid ARN for the file-cache resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidFileSystemArn">isValidFileSystemArn</a></code> | Validates whether a string is a valid ARN for the file-system resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidSnapmirrorPolicyArn">isValidSnapmirrorPolicyArn</a></code> | Validates whether a string is a valid ARN for the snapmirror-policy resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidSnapmirrorRelationshipArn">isValidSnapmirrorRelationshipArn</a></code> | Validates whether a string is a valid ARN for the snapmirror-relationship resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidSnapshotArn">isValidSnapshotArn</a></code> | Validates whether a string is a valid ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidSnapshotPolicyArn">isValidSnapshotPolicyArn</a></code> | Validates whether a string is a valid ARN for the snapshot-policy resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidStorageVirtualMachineArn">isValidStorageVirtualMachineArn</a></code> | Validates whether a string is a valid ARN for the storage-virtual-machine resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidSvmPeerArn">isValidSvmPeerArn</a></code> | Validates whether a string is a valid ARN for the svm-peer resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidTaskArn">isValidTaskArn</a></code> | Validates whether a string is a valid ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.isValidVolumeArn">isValidVolumeArn</a></code> | Validates whether a string is a valid ARN for the volume resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseAssociationArn">parseAssociationArn</a></code> | Parses a association ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseBackupArn">parseBackupArn</a></code> | Parses a backup ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseClusterPeerArn">parseClusterPeerArn</a></code> | Parses a cluster-peer ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseFileCacheArn">parseFileCacheArn</a></code> | Parses a file-cache ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseFileSystemArn">parseFileSystemArn</a></code> | Parses a file-system ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseSnapmirrorPolicyArn">parseSnapmirrorPolicyArn</a></code> | Parses a snapmirror-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseSnapmirrorRelationshipArn">parseSnapmirrorRelationshipArn</a></code> | Parses a snapmirror-relationship ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseSnapshotArn">parseSnapshotArn</a></code> | Parses a snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseSnapshotPolicyArn">parseSnapshotPolicyArn</a></code> | Parses a snapshot-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseStorageVirtualMachineArn">parseStorageVirtualMachineArn</a></code> | Parses a storage-virtual-machine ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseSvmPeerArn">parseSvmPeerArn</a></code> | Parses a svm-peer ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseTaskArn">parseTaskArn</a></code> | Parses a task ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.parseVolumeArn">parseVolumeArn</a></code> | Parses a volume ARN into its components. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.snapmirrorPolicy">snapmirrorPolicy</a></code> | Builds an ARN for the snapmirror-policy resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.snapmirrorRelationship">snapmirrorRelationship</a></code> | Builds an ARN for the snapmirror-relationship resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.snapshot">snapshot</a></code> | Builds an ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.snapshotPolicy">snapshotPolicy</a></code> | Builds an ARN for the snapshot-policy resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.storageVirtualMachine">storageVirtualMachine</a></code> | Builds an ARN for the storage-virtual-machine resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.svmPeer">svmPeer</a></code> | Builds an ARN for the svm-peer resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.task">task</a></code> | Builds an ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.fsx.FsxResources.volume">volume</a></code> | Builds an ARN for the volume resource. |

---

##### `association` <a name="association" id="@cdk_utils/iam.fsx.FsxResources.association"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.association(props: FsxAssociationArnProps)
```

Builds an ARN for the association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.association.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxAssociationArnProps">FsxAssociationArnProps</a>

---

##### `backup` <a name="backup" id="@cdk_utils/iam.fsx.FsxResources.backup"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.backup(props: FsxBackupArnProps)
```

Builds an ARN for the backup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.backup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxBackupArnProps">FsxBackupArnProps</a>

---

##### `clusterPeer` <a name="clusterPeer" id="@cdk_utils/iam.fsx.FsxResources.clusterPeer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.clusterPeer(props: FsxClusterPeerArnProps)
```

Builds an ARN for the cluster-peer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.clusterPeer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxClusterPeerArnProps">FsxClusterPeerArnProps</a>

---

##### `fileCache` <a name="fileCache" id="@cdk_utils/iam.fsx.FsxResources.fileCache"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.fileCache(props: FsxFileCacheArnProps)
```

Builds an ARN for the file-cache resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.fileCache.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxFileCacheArnProps">FsxFileCacheArnProps</a>

---

##### `fileSystem` <a name="fileSystem" id="@cdk_utils/iam.fsx.FsxResources.fileSystem"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.fileSystem(props: FsxFileSystemArnProps)
```

Builds an ARN for the file-system resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.fileSystem.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxFileSystemArnProps">FsxFileSystemArnProps</a>

---

##### `isValidAssociationArn` <a name="isValidAssociationArn" id="@cdk_utils/iam.fsx.FsxResources.isValidAssociationArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBackupArn` <a name="isValidBackupArn" id="@cdk_utils/iam.fsx.FsxResources.isValidBackupArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidBackupArn(arn: string)
```

Validates whether a string is a valid ARN for the backup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterPeerArn` <a name="isValidClusterPeerArn" id="@cdk_utils/iam.fsx.FsxResources.isValidClusterPeerArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidClusterPeerArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster-peer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidClusterPeerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFileCacheArn` <a name="isValidFileCacheArn" id="@cdk_utils/iam.fsx.FsxResources.isValidFileCacheArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidFileCacheArn(arn: string)
```

Validates whether a string is a valid ARN for the file-cache resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidFileCacheArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFileSystemArn` <a name="isValidFileSystemArn" id="@cdk_utils/iam.fsx.FsxResources.isValidFileSystemArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidFileSystemArn(arn: string)
```

Validates whether a string is a valid ARN for the file-system resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidFileSystemArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapmirrorPolicyArn` <a name="isValidSnapmirrorPolicyArn" id="@cdk_utils/iam.fsx.FsxResources.isValidSnapmirrorPolicyArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidSnapmirrorPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the snapmirror-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidSnapmirrorPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapmirrorRelationshipArn` <a name="isValidSnapmirrorRelationshipArn" id="@cdk_utils/iam.fsx.FsxResources.isValidSnapmirrorRelationshipArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidSnapmirrorRelationshipArn(arn: string)
```

Validates whether a string is a valid ARN for the snapmirror-relationship resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidSnapmirrorRelationshipArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapshotArn` <a name="isValidSnapshotArn" id="@cdk_utils/iam.fsx.FsxResources.isValidSnapshotArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapshotPolicyArn` <a name="isValidSnapshotPolicyArn" id="@cdk_utils/iam.fsx.FsxResources.isValidSnapshotPolicyArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidSnapshotPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshot-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidSnapshotPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStorageVirtualMachineArn` <a name="isValidStorageVirtualMachineArn" id="@cdk_utils/iam.fsx.FsxResources.isValidStorageVirtualMachineArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidStorageVirtualMachineArn(arn: string)
```

Validates whether a string is a valid ARN for the storage-virtual-machine resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidStorageVirtualMachineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSvmPeerArn` <a name="isValidSvmPeerArn" id="@cdk_utils/iam.fsx.FsxResources.isValidSvmPeerArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidSvmPeerArn(arn: string)
```

Validates whether a string is a valid ARN for the svm-peer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidSvmPeerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskArn` <a name="isValidTaskArn" id="@cdk_utils/iam.fsx.FsxResources.isValidTaskArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVolumeArn` <a name="isValidVolumeArn" id="@cdk_utils/iam.fsx.FsxResources.isValidVolumeArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.isValidVolumeArn(arn: string)
```

Validates whether a string is a valid ARN for the volume resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.isValidVolumeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssociationArn` <a name="parseAssociationArn" id="@cdk_utils/iam.fsx.FsxResources.parseAssociationArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseAssociationArn(arn: string)
```

Parses a association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBackupArn` <a name="parseBackupArn" id="@cdk_utils/iam.fsx.FsxResources.parseBackupArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseBackupArn(arn: string)
```

Parses a backup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterPeerArn` <a name="parseClusterPeerArn" id="@cdk_utils/iam.fsx.FsxResources.parseClusterPeerArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseClusterPeerArn(arn: string)
```

Parses a cluster-peer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseClusterPeerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFileCacheArn` <a name="parseFileCacheArn" id="@cdk_utils/iam.fsx.FsxResources.parseFileCacheArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseFileCacheArn(arn: string)
```

Parses a file-cache ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseFileCacheArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFileSystemArn` <a name="parseFileSystemArn" id="@cdk_utils/iam.fsx.FsxResources.parseFileSystemArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseFileSystemArn(arn: string)
```

Parses a file-system ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseFileSystemArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapmirrorPolicyArn` <a name="parseSnapmirrorPolicyArn" id="@cdk_utils/iam.fsx.FsxResources.parseSnapmirrorPolicyArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseSnapmirrorPolicyArn(arn: string)
```

Parses a snapmirror-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseSnapmirrorPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapmirrorRelationshipArn` <a name="parseSnapmirrorRelationshipArn" id="@cdk_utils/iam.fsx.FsxResources.parseSnapmirrorRelationshipArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseSnapmirrorRelationshipArn(arn: string)
```

Parses a snapmirror-relationship ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseSnapmirrorRelationshipArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotArn` <a name="parseSnapshotArn" id="@cdk_utils/iam.fsx.FsxResources.parseSnapshotArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseSnapshotArn(arn: string)
```

Parses a snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotPolicyArn` <a name="parseSnapshotPolicyArn" id="@cdk_utils/iam.fsx.FsxResources.parseSnapshotPolicyArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseSnapshotPolicyArn(arn: string)
```

Parses a snapshot-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseSnapshotPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStorageVirtualMachineArn` <a name="parseStorageVirtualMachineArn" id="@cdk_utils/iam.fsx.FsxResources.parseStorageVirtualMachineArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseStorageVirtualMachineArn(arn: string)
```

Parses a storage-virtual-machine ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseStorageVirtualMachineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSvmPeerArn` <a name="parseSvmPeerArn" id="@cdk_utils/iam.fsx.FsxResources.parseSvmPeerArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseSvmPeerArn(arn: string)
```

Parses a svm-peer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseSvmPeerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskArn` <a name="parseTaskArn" id="@cdk_utils/iam.fsx.FsxResources.parseTaskArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseTaskArn(arn: string)
```

Parses a task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVolumeArn` <a name="parseVolumeArn" id="@cdk_utils/iam.fsx.FsxResources.parseVolumeArn"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.parseVolumeArn(arn: string)
```

Parses a volume ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fsx.FsxResources.parseVolumeArn.parameter.arn"></a>

- *Type:* string

---

##### `snapmirrorPolicy` <a name="snapmirrorPolicy" id="@cdk_utils/iam.fsx.FsxResources.snapmirrorPolicy"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.snapmirrorPolicy(props: FsxSnapmirrorPolicyArnProps)
```

Builds an ARN for the snapmirror-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.snapmirrorPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxSnapmirrorPolicyArnProps">FsxSnapmirrorPolicyArnProps</a>

---

##### `snapmirrorRelationship` <a name="snapmirrorRelationship" id="@cdk_utils/iam.fsx.FsxResources.snapmirrorRelationship"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.snapmirrorRelationship(props: FsxSnapmirrorRelationshipArnProps)
```

Builds an ARN for the snapmirror-relationship resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.snapmirrorRelationship.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxSnapmirrorRelationshipArnProps">FsxSnapmirrorRelationshipArnProps</a>

---

##### `snapshot` <a name="snapshot" id="@cdk_utils/iam.fsx.FsxResources.snapshot"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.snapshot(props: FsxSnapshotArnProps)
```

Builds an ARN for the snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.snapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxSnapshotArnProps">FsxSnapshotArnProps</a>

---

##### `snapshotPolicy` <a name="snapshotPolicy" id="@cdk_utils/iam.fsx.FsxResources.snapshotPolicy"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.snapshotPolicy(props: FsxSnapshotPolicyArnProps)
```

Builds an ARN for the snapshot-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.snapshotPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxSnapshotPolicyArnProps">FsxSnapshotPolicyArnProps</a>

---

##### `storageVirtualMachine` <a name="storageVirtualMachine" id="@cdk_utils/iam.fsx.FsxResources.storageVirtualMachine"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.storageVirtualMachine(props: FsxStorageVirtualMachineArnProps)
```

Builds an ARN for the storage-virtual-machine resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.storageVirtualMachine.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxStorageVirtualMachineArnProps">FsxStorageVirtualMachineArnProps</a>

---

##### `svmPeer` <a name="svmPeer" id="@cdk_utils/iam.fsx.FsxResources.svmPeer"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.svmPeer(props: FsxSvmPeerArnProps)
```

Builds an ARN for the svm-peer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.svmPeer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxSvmPeerArnProps">FsxSvmPeerArnProps</a>

---

##### `task` <a name="task" id="@cdk_utils/iam.fsx.FsxResources.task"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.task(props: FsxTaskArnProps)
```

Builds an ARN for the task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.task.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxTaskArnProps">FsxTaskArnProps</a>

---

##### `volume` <a name="volume" id="@cdk_utils/iam.fsx.FsxResources.volume"></a>

```typescript
import { fsx } from '@cdk_utils/iam'

fsx.FsxResources.volume(props: FsxVolumeArnProps)
```

Builds an ARN for the volume resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fsx.FsxResources.volume.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fsx.FsxVolumeArnProps">FsxVolumeArnProps</a>

---




