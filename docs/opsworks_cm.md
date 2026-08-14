# `opsworks_cm` Submodule <a name="`opsworks_cm` Submodule" id="@cdk_utils/iam.opsworks_cm"></a>


## Structs <a name="Structs" id="Structs"></a>

### OpsworksCmBackupArnComponents <a name="OpsworksCmBackupArnComponents" id="@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnComponents"></a>

Parsed components of a backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnComponents.Initializer"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

const opsworksCmBackupArnComponents: opsworks_cm.OpsworksCmBackupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnComponents.property.serverName">serverName</a></code> | <code>string</code> | The ServerName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnComponents.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The ServerName component.

---

### OpsworksCmBackupArnProps <a name="OpsworksCmBackupArnProps" id="@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnProps"></a>

Properties for building a backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnProps.Initializer"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

const opsworksCmBackupArnProps: opsworks_cm.OpsworksCmBackupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnProps.property.serverName">serverName</a></code> | <code>string</code> | The ServerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnProps.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The ServerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### OpsworksCmServerArnComponents <a name="OpsworksCmServerArnComponents" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnComponents"></a>

Parsed components of a server ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnComponents.Initializer"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

const opsworksCmServerArnComponents: opsworks_cm.OpsworksCmServerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnComponents.property.serverName">serverName</a></code> | <code>string</code> | The ServerName component. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnComponents.property.uniqueId">uniqueId</a></code> | <code>string</code> | The UniqueId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnComponents.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The ServerName component.

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnComponents.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

The UniqueId component.

---

### OpsworksCmServerArnProps <a name="OpsworksCmServerArnProps" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps"></a>

Properties for building a server ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps.Initializer"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

const opsworksCmServerArnProps: opsworks_cm.OpsworksCmServerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps.property.serverName">serverName</a></code> | <code>string</code> | The ServerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps.property.uniqueId">uniqueId</a></code> | <code>string</code> | The UniqueId component of the ARN. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The ServerName component of the ARN.

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

The UniqueId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksCmActions <a name="OpsworksCmActions" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions"></a>

IAM action constants for the opsworks-cm service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.Initializer"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

new opsworks_cm.OpsworksCmActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AssociateNode">AssociateNode</a></code> | <code>string</code> | [Write] opsworks-cm:AssociateNode. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.CreateBackup">CreateBackup</a></code> | <code>string</code> | [Write] opsworks-cm:CreateBackup. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.CreateServer">CreateServer</a></code> | <code>string</code> | [Write] opsworks-cm:CreateServer. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DeleteBackup">DeleteBackup</a></code> | <code>string</code> | [Write] opsworks-cm:DeleteBackup. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DeleteServer">DeleteServer</a></code> | <code>string</code> | [Write] opsworks-cm:DeleteServer. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string</code> | [List] opsworks-cm:DescribeAccountAttributes. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DescribeBackups">DescribeBackups</a></code> | <code>string</code> | [List] opsworks-cm:DescribeBackups. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DescribeEvents">DescribeEvents</a></code> | <code>string</code> | [List] opsworks-cm:DescribeEvents. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DescribeNodeAssociationStatus">DescribeNodeAssociationStatus</a></code> | <code>string</code> | [List] opsworks-cm:DescribeNodeAssociationStatus. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DescribeServers">DescribeServers</a></code> | <code>string</code> | [List] opsworks-cm:DescribeServers. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DisassociateNode">DisassociateNode</a></code> | <code>string</code> | [Write] opsworks-cm:DisassociateNode. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.ExportServerEngineAttribute">ExportServerEngineAttribute</a></code> | <code>string</code> | [Read] opsworks-cm:ExportServerEngineAttribute. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] opsworks-cm:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.RestoreServer">RestoreServer</a></code> | <code>string</code> | [Write] opsworks-cm:RestoreServer. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.StartMaintenance">StartMaintenance</a></code> | <code>string</code> | [Write] opsworks-cm:StartMaintenance. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] opsworks-cm:TagResource. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] opsworks-cm:UntagResource. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.UpdateServer">UpdateServer</a></code> | <code>string</code> | [Write] opsworks-cm:UpdateServer. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.UpdateServerEngineAttributes">UpdateServerEngineAttributes</a></code> | <code>string</code> | [Write] opsworks-cm:UpdateServerEngineAttributes. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateNode`<sup>Required</sup> <a name="AssociateNode" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.AssociateNode"></a>

```typescript
public readonly AssociateNode: string;
```

- *Type:* string

[Write] opsworks-cm:AssociateNode.

---

##### `CreateBackup`<sup>Required</sup> <a name="CreateBackup" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.CreateBackup"></a>

```typescript
public readonly CreateBackup: string;
```

- *Type:* string

[Write] opsworks-cm:CreateBackup.

---

##### `CreateServer`<sup>Required</sup> <a name="CreateServer" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.CreateServer"></a>

```typescript
public readonly CreateServer: string;
```

- *Type:* string

[Write] opsworks-cm:CreateServer.

---

##### `DeleteBackup`<sup>Required</sup> <a name="DeleteBackup" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DeleteBackup"></a>

```typescript
public readonly DeleteBackup: string;
```

- *Type:* string

[Write] opsworks-cm:DeleteBackup.

---

##### `DeleteServer`<sup>Required</sup> <a name="DeleteServer" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DeleteServer"></a>

```typescript
public readonly DeleteServer: string;
```

- *Type:* string

[Write] opsworks-cm:DeleteServer.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string;
```

- *Type:* string

[List] opsworks-cm:DescribeAccountAttributes.

---

##### `DescribeBackups`<sup>Required</sup> <a name="DescribeBackups" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DescribeBackups"></a>

```typescript
public readonly DescribeBackups: string;
```

- *Type:* string

[List] opsworks-cm:DescribeBackups.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string;
```

- *Type:* string

[List] opsworks-cm:DescribeEvents.

---

##### `DescribeNodeAssociationStatus`<sup>Required</sup> <a name="DescribeNodeAssociationStatus" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DescribeNodeAssociationStatus"></a>

```typescript
public readonly DescribeNodeAssociationStatus: string;
```

- *Type:* string

[List] opsworks-cm:DescribeNodeAssociationStatus.

---

##### `DescribeServers`<sup>Required</sup> <a name="DescribeServers" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DescribeServers"></a>

```typescript
public readonly DescribeServers: string;
```

- *Type:* string

[List] opsworks-cm:DescribeServers.

---

##### `DisassociateNode`<sup>Required</sup> <a name="DisassociateNode" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.DisassociateNode"></a>

```typescript
public readonly DisassociateNode: string;
```

- *Type:* string

[Write] opsworks-cm:DisassociateNode.

---

##### `ExportServerEngineAttribute`<sup>Required</sup> <a name="ExportServerEngineAttribute" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.ExportServerEngineAttribute"></a>

```typescript
public readonly ExportServerEngineAttribute: string;
```

- *Type:* string

[Read] opsworks-cm:ExportServerEngineAttribute.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] opsworks-cm:ListTagsForResource.

---

##### `RestoreServer`<sup>Required</sup> <a name="RestoreServer" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.RestoreServer"></a>

```typescript
public readonly RestoreServer: string;
```

- *Type:* string

[Write] opsworks-cm:RestoreServer.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartMaintenance`<sup>Required</sup> <a name="StartMaintenance" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.StartMaintenance"></a>

```typescript
public readonly StartMaintenance: string;
```

- *Type:* string

[Write] opsworks-cm:StartMaintenance.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] opsworks-cm:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] opsworks-cm:UntagResource.

---

##### `UpdateServer`<sup>Required</sup> <a name="UpdateServer" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.UpdateServer"></a>

```typescript
public readonly UpdateServer: string;
```

- *Type:* string

[Write] opsworks-cm:UpdateServer.

---

##### `UpdateServerEngineAttributes`<sup>Required</sup> <a name="UpdateServerEngineAttributes" id="@cdk_utils/iam.opsworks_cm.OpsworksCmActions.property.UpdateServerEngineAttributes"></a>

```typescript
public readonly UpdateServerEngineAttributes: string;
```

- *Type:* string

[Write] opsworks-cm:UpdateServerEngineAttributes.

---

### OpsworksCmResources <a name="OpsworksCmResources" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources"></a>

ARN builders, validators, and parsers for opsworks-cm resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.Initializer"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

new opsworks_cm.OpsworksCmResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmResources.backup">backup</a></code> | Builds an ARN for the backup resource. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmResources.isValidBackupArn">isValidBackupArn</a></code> | Validates whether a string is a valid ARN for the backup resource. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmResources.isValidServerArn">isValidServerArn</a></code> | Validates whether a string is a valid ARN for the server resource. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmResources.parseBackupArn">parseBackupArn</a></code> | Parses a backup ARN into its components. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmResources.parseServerArn">parseServerArn</a></code> | Parses a server ARN into its components. |
| <code><a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmResources.server">server</a></code> | Builds an ARN for the server resource. |

---

##### `backup` <a name="backup" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.backup"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

opsworks_cm.OpsworksCmResources.backup(props: OpsworksCmBackupArnProps)
```

Builds an ARN for the backup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.backup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmBackupArnProps">OpsworksCmBackupArnProps</a>

---

##### `isValidBackupArn` <a name="isValidBackupArn" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.isValidBackupArn"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

opsworks_cm.OpsworksCmResources.isValidBackupArn(arn: string)
```

Validates whether a string is a valid ARN for the backup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.isValidBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServerArn` <a name="isValidServerArn" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.isValidServerArn"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

opsworks_cm.OpsworksCmResources.isValidServerArn(arn: string)
```

Validates whether a string is a valid ARN for the server resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.isValidServerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBackupArn` <a name="parseBackupArn" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.parseBackupArn"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

opsworks_cm.OpsworksCmResources.parseBackupArn(arn: string)
```

Parses a backup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.parseBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServerArn` <a name="parseServerArn" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.parseServerArn"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

opsworks_cm.OpsworksCmResources.parseServerArn(arn: string)
```

Parses a server ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.parseServerArn.parameter.arn"></a>

- *Type:* string

---

##### `server` <a name="server" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.server"></a>

```typescript
import { opsworks_cm } from '@cdk_utils/iam'

opsworks_cm.OpsworksCmResources.server(props: OpsworksCmServerArnProps)
```

Builds an ARN for the server resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.opsworks_cm.OpsworksCmResources.server.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.opsworks_cm.OpsworksCmServerArnProps">OpsworksCmServerArnProps</a>

---




