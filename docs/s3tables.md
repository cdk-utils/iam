# `s3tables` Submodule <a name="`s3tables` Submodule" id="@cdk_utils/iam.s3tables"></a>


## Structs <a name="Structs" id="Structs"></a>

### S3tablesTableArnComponents <a name="S3tablesTableArnComponents" id="@cdk_utils/iam.s3tables.S3tablesTableArnComponents"></a>

Parsed components of a Table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3tables.S3tablesTableArnComponents.Initializer"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

const s3tablesTableArnComponents: s3tables.S3tablesTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableArnComponents.property.tableBucketName">tableBucketName</a></code> | <code>string</code> | The TableBucketName component. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableArnComponents.property.tableId">tableId</a></code> | <code>string</code> | The TableID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3tables.S3tablesTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3tables.S3tablesTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3tables.S3tablesTableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableBucketName`<sup>Required</sup> <a name="tableBucketName" id="@cdk_utils/iam.s3tables.S3tablesTableArnComponents.property.tableBucketName"></a>

```typescript
public readonly tableBucketName: string;
```

- *Type:* string

The TableBucketName component.

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdk_utils/iam.s3tables.S3tablesTableArnComponents.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The TableID component.

---

### S3tablesTableArnProps <a name="S3tablesTableArnProps" id="@cdk_utils/iam.s3tables.S3tablesTableArnProps"></a>

Properties for building a Table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3tables.S3tablesTableArnProps.Initializer"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

const s3tablesTableArnProps: s3tables.S3tablesTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableArnProps.property.tableBucketName">tableBucketName</a></code> | <code>string</code> | The TableBucketName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableArnProps.property.tableId">tableId</a></code> | <code>string</code> | The TableID component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tableBucketName`<sup>Required</sup> <a name="tableBucketName" id="@cdk_utils/iam.s3tables.S3tablesTableArnProps.property.tableBucketName"></a>

```typescript
public readonly tableBucketName: string;
```

- *Type:* string

The TableBucketName component of the ARN.

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdk_utils/iam.s3tables.S3tablesTableArnProps.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The TableID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3tables.S3tablesTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3tables.S3tablesTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3tables.S3tablesTableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### S3tablesTableBucketArnComponents <a name="S3tablesTableBucketArnComponents" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnComponents"></a>

Parsed components of a TableBucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnComponents.Initializer"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

const s3tablesTableBucketArnComponents: s3tables.S3tablesTableBucketArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableBucketArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableBucketArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableBucketArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableBucketArnComponents.property.tableBucketName">tableBucketName</a></code> | <code>string</code> | The TableBucketName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableBucketName`<sup>Required</sup> <a name="tableBucketName" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnComponents.property.tableBucketName"></a>

```typescript
public readonly tableBucketName: string;
```

- *Type:* string

The TableBucketName component.

---

### S3tablesTableBucketArnProps <a name="S3tablesTableBucketArnProps" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps"></a>

Properties for building a TableBucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps.Initializer"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

const s3tablesTableBucketArnProps: s3tables.S3tablesTableBucketArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps.property.tableBucketName">tableBucketName</a></code> | <code>string</code> | The TableBucketName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tableBucketName`<sup>Required</sup> <a name="tableBucketName" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps.property.tableBucketName"></a>

```typescript
public readonly tableBucketName: string;
```

- *Type:* string

The TableBucketName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### S3tablesActions <a name="S3tablesActions" id="@cdk_utils/iam.s3tables.S3tablesActions"></a>

IAM action constants for the s3tables service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3tables.S3tablesActions.Initializer"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

new s3tables.S3tablesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetNamespace">actionGetNamespace</a></code> | <code>string</code> | [Read] s3tables:GetNamespace. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTable">actionGetTable</a></code> | <code>string</code> | [Read] s3tables:GetTable. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucket">actionGetTableBucket</a></code> | <code>string</code> | [Read] s3tables:GetTableBucket. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketEncryption">actionGetTableBucketEncryption</a></code> | <code>string</code> | [Read] s3tables:GetTableBucketEncryption. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketMaintenanceConfiguration">actionGetTableBucketMaintenanceConfiguration</a></code> | <code>string</code> | [Read] s3tables:GetTableBucketMaintenanceConfiguration. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketMetricsConfiguration">actionGetTableBucketMetricsConfiguration</a></code> | <code>string</code> | [Read] s3tables:GetTableBucketMetricsConfiguration. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketPolicy">actionGetTableBucketPolicy</a></code> | <code>string</code> | [Read] s3tables:GetTableBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketReplication">actionGetTableBucketReplication</a></code> | <code>string</code> | [Read] s3tables:GetTableBucketReplication. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketStorageClass">actionGetTableBucketStorageClass</a></code> | <code>string</code> | [Read] s3tables:GetTableBucketStorageClass. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableData">actionGetTableData</a></code> | <code>string</code> | [Read] s3tables:GetTableData. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableEncryption">actionGetTableEncryption</a></code> | <code>string</code> | [Read] s3tables:GetTableEncryption. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableMaintenanceConfiguration">actionGetTableMaintenanceConfiguration</a></code> | <code>string</code> | [Read] s3tables:GetTableMaintenanceConfiguration. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableMaintenanceJobStatus">actionGetTableMaintenanceJobStatus</a></code> | <code>string</code> | [Read] s3tables:GetTableMaintenanceJobStatus. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableMetadataLocation">actionGetTableMetadataLocation</a></code> | <code>string</code> | [Read] s3tables:GetTableMetadataLocation. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTablePolicy">actionGetTablePolicy</a></code> | <code>string</code> | [Read] s3tables:GetTablePolicy. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableRecordExpirationConfiguration">actionGetTableRecordExpirationConfiguration</a></code> | <code>string</code> | [Read] s3tables:GetTableRecordExpirationConfiguration. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableRecordExpirationJobStatus">actionGetTableRecordExpirationJobStatus</a></code> | <code>string</code> | [Read] s3tables:GetTableRecordExpirationJobStatus. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableReplication">actionGetTableReplication</a></code> | <code>string</code> | [Read] s3tables:GetTableReplication. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableReplicationStatus">actionGetTableReplicationStatus</a></code> | <code>string</code> | [Read] s3tables:GetTableReplicationStatus. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableStorageClass">actionGetTableStorageClass</a></code> | <code>string</code> | [Read] s3tables:GetTableStorageClass. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.CreateNamespace">CreateNamespace</a></code> | <code>string</code> | [Write] s3tables:CreateNamespace. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.CreateTable">CreateTable</a></code> | <code>string</code> | [Write] s3tables:CreateTable. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.CreateTableBucket">CreateTableBucket</a></code> | <code>string</code> | [Write] s3tables:CreateTableBucket. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteNamespace">DeleteNamespace</a></code> | <code>string</code> | [Write] s3tables:DeleteNamespace. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTable">DeleteTable</a></code> | <code>string</code> | [Write] s3tables:DeleteTable. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableBucket">DeleteTableBucket</a></code> | <code>string</code> | [Write] s3tables:DeleteTableBucket. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableBucketEncryption">DeleteTableBucketEncryption</a></code> | <code>string</code> | [Write] s3tables:DeleteTableBucketEncryption. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableBucketMetricsConfiguration">DeleteTableBucketMetricsConfiguration</a></code> | <code>string</code> | [Write] s3tables:DeleteTableBucketMetricsConfiguration. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableBucketPolicy">DeleteTableBucketPolicy</a></code> | <code>string</code> | [PermissionManagement] s3tables:DeleteTableBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableBucketReplication">DeleteTableBucketReplication</a></code> | <code>string</code> | [Write] s3tables:DeleteTableBucketReplication. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTablePolicy">DeleteTablePolicy</a></code> | <code>string</code> | [PermissionManagement] s3tables:DeleteTablePolicy. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableReplication">DeleteTableReplication</a></code> | <code>string</code> | [Write] s3tables:DeleteTableReplication. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.ListNamespaces">ListNamespaces</a></code> | <code>string</code> | [List] s3tables:ListNamespaces. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.ListTableBuckets">ListTableBuckets</a></code> | <code>string</code> | [List] s3tables:ListTableBuckets. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.ListTables">ListTables</a></code> | <code>string</code> | [List] s3tables:ListTables. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] s3tables:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketEncryption">PutTableBucketEncryption</a></code> | <code>string</code> | [Write] s3tables:PutTableBucketEncryption. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketMaintenanceConfiguration">PutTableBucketMaintenanceConfiguration</a></code> | <code>string</code> | [Write] s3tables:PutTableBucketMaintenanceConfiguration. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketMetricsConfiguration">PutTableBucketMetricsConfiguration</a></code> | <code>string</code> | [Write] s3tables:PutTableBucketMetricsConfiguration. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketPolicy">PutTableBucketPolicy</a></code> | <code>string</code> | [PermissionManagement] s3tables:PutTableBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketReplication">PutTableBucketReplication</a></code> | <code>string</code> | [Write] s3tables:PutTableBucketReplication. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketStorageClass">PutTableBucketStorageClass</a></code> | <code>string</code> | [Write] s3tables:PutTableBucketStorageClass. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableData">PutTableData</a></code> | <code>string</code> | [Write] s3tables:PutTableData. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableEncryption">PutTableEncryption</a></code> | <code>string</code> | [Write] s3tables:PutTableEncryption. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableMaintenanceConfiguration">PutTableMaintenanceConfiguration</a></code> | <code>string</code> | [Write] s3tables:PutTableMaintenanceConfiguration. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTablePolicy">PutTablePolicy</a></code> | <code>string</code> | [PermissionManagement] s3tables:PutTablePolicy. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableRecordExpirationConfiguration">PutTableRecordExpirationConfiguration</a></code> | <code>string</code> | [Write] s3tables:PutTableRecordExpirationConfiguration. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableReplication">PutTableReplication</a></code> | <code>string</code> | [Write] s3tables:PutTableReplication. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableStorageClass">PutTableStorageClass</a></code> | <code>string</code> | [Write] s3tables:PutTableStorageClass. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.RenameTable">RenameTable</a></code> | <code>string</code> | [Write] s3tables:RenameTable. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] s3tables:TagResource. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] s3tables:UntagResource. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesActions.property.UpdateTableMetadataLocation">UpdateTableMetadataLocation</a></code> | <code>string</code> | [Write] s3tables:UpdateTableMetadataLocation. |

---

##### `actionGetNamespace`<sup>Required</sup> <a name="actionGetNamespace" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetNamespace"></a>

```typescript
public readonly actionGetNamespace: string;
```

- *Type:* string

[Read] s3tables:GetNamespace.

---

##### `actionGetTable`<sup>Required</sup> <a name="actionGetTable" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTable"></a>

```typescript
public readonly actionGetTable: string;
```

- *Type:* string

[Read] s3tables:GetTable.

---

##### `actionGetTableBucket`<sup>Required</sup> <a name="actionGetTableBucket" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucket"></a>

```typescript
public readonly actionGetTableBucket: string;
```

- *Type:* string

[Read] s3tables:GetTableBucket.

---

##### `actionGetTableBucketEncryption`<sup>Required</sup> <a name="actionGetTableBucketEncryption" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketEncryption"></a>

```typescript
public readonly actionGetTableBucketEncryption: string;
```

- *Type:* string

[Read] s3tables:GetTableBucketEncryption.

---

##### `actionGetTableBucketMaintenanceConfiguration`<sup>Required</sup> <a name="actionGetTableBucketMaintenanceConfiguration" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketMaintenanceConfiguration"></a>

```typescript
public readonly actionGetTableBucketMaintenanceConfiguration: string;
```

- *Type:* string

[Read] s3tables:GetTableBucketMaintenanceConfiguration.

---

##### `actionGetTableBucketMetricsConfiguration`<sup>Required</sup> <a name="actionGetTableBucketMetricsConfiguration" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketMetricsConfiguration"></a>

```typescript
public readonly actionGetTableBucketMetricsConfiguration: string;
```

- *Type:* string

[Read] s3tables:GetTableBucketMetricsConfiguration.

---

##### `actionGetTableBucketPolicy`<sup>Required</sup> <a name="actionGetTableBucketPolicy" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketPolicy"></a>

```typescript
public readonly actionGetTableBucketPolicy: string;
```

- *Type:* string

[Read] s3tables:GetTableBucketPolicy.

---

##### `actionGetTableBucketReplication`<sup>Required</sup> <a name="actionGetTableBucketReplication" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketReplication"></a>

```typescript
public readonly actionGetTableBucketReplication: string;
```

- *Type:* string

[Read] s3tables:GetTableBucketReplication.

---

##### `actionGetTableBucketStorageClass`<sup>Required</sup> <a name="actionGetTableBucketStorageClass" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableBucketStorageClass"></a>

```typescript
public readonly actionGetTableBucketStorageClass: string;
```

- *Type:* string

[Read] s3tables:GetTableBucketStorageClass.

---

##### `actionGetTableData`<sup>Required</sup> <a name="actionGetTableData" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableData"></a>

```typescript
public readonly actionGetTableData: string;
```

- *Type:* string

[Read] s3tables:GetTableData.

---

##### `actionGetTableEncryption`<sup>Required</sup> <a name="actionGetTableEncryption" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableEncryption"></a>

```typescript
public readonly actionGetTableEncryption: string;
```

- *Type:* string

[Read] s3tables:GetTableEncryption.

---

##### `actionGetTableMaintenanceConfiguration`<sup>Required</sup> <a name="actionGetTableMaintenanceConfiguration" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableMaintenanceConfiguration"></a>

```typescript
public readonly actionGetTableMaintenanceConfiguration: string;
```

- *Type:* string

[Read] s3tables:GetTableMaintenanceConfiguration.

---

##### `actionGetTableMaintenanceJobStatus`<sup>Required</sup> <a name="actionGetTableMaintenanceJobStatus" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableMaintenanceJobStatus"></a>

```typescript
public readonly actionGetTableMaintenanceJobStatus: string;
```

- *Type:* string

[Read] s3tables:GetTableMaintenanceJobStatus.

---

##### `actionGetTableMetadataLocation`<sup>Required</sup> <a name="actionGetTableMetadataLocation" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableMetadataLocation"></a>

```typescript
public readonly actionGetTableMetadataLocation: string;
```

- *Type:* string

[Read] s3tables:GetTableMetadataLocation.

---

##### `actionGetTablePolicy`<sup>Required</sup> <a name="actionGetTablePolicy" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTablePolicy"></a>

```typescript
public readonly actionGetTablePolicy: string;
```

- *Type:* string

[Read] s3tables:GetTablePolicy.

---

##### `actionGetTableRecordExpirationConfiguration`<sup>Required</sup> <a name="actionGetTableRecordExpirationConfiguration" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableRecordExpirationConfiguration"></a>

```typescript
public readonly actionGetTableRecordExpirationConfiguration: string;
```

- *Type:* string

[Read] s3tables:GetTableRecordExpirationConfiguration.

---

##### `actionGetTableRecordExpirationJobStatus`<sup>Required</sup> <a name="actionGetTableRecordExpirationJobStatus" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableRecordExpirationJobStatus"></a>

```typescript
public readonly actionGetTableRecordExpirationJobStatus: string;
```

- *Type:* string

[Read] s3tables:GetTableRecordExpirationJobStatus.

---

##### `actionGetTableReplication`<sup>Required</sup> <a name="actionGetTableReplication" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableReplication"></a>

```typescript
public readonly actionGetTableReplication: string;
```

- *Type:* string

[Read] s3tables:GetTableReplication.

---

##### `actionGetTableReplicationStatus`<sup>Required</sup> <a name="actionGetTableReplicationStatus" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableReplicationStatus"></a>

```typescript
public readonly actionGetTableReplicationStatus: string;
```

- *Type:* string

[Read] s3tables:GetTableReplicationStatus.

---

##### `actionGetTableStorageClass`<sup>Required</sup> <a name="actionGetTableStorageClass" id="@cdk_utils/iam.s3tables.S3tablesActions.property.actionGetTableStorageClass"></a>

```typescript
public readonly actionGetTableStorageClass: string;
```

- *Type:* string

[Read] s3tables:GetTableStorageClass.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.s3tables.S3tablesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.s3tables.S3tablesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.s3tables.S3tablesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.s3tables.S3tablesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.s3tables.S3tablesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateNamespace`<sup>Required</sup> <a name="CreateNamespace" id="@cdk_utils/iam.s3tables.S3tablesActions.property.CreateNamespace"></a>

```typescript
public readonly CreateNamespace: string;
```

- *Type:* string

[Write] s3tables:CreateNamespace.

---

##### `CreateTable`<sup>Required</sup> <a name="CreateTable" id="@cdk_utils/iam.s3tables.S3tablesActions.property.CreateTable"></a>

```typescript
public readonly CreateTable: string;
```

- *Type:* string

[Write] s3tables:CreateTable.

---

##### `CreateTableBucket`<sup>Required</sup> <a name="CreateTableBucket" id="@cdk_utils/iam.s3tables.S3tablesActions.property.CreateTableBucket"></a>

```typescript
public readonly CreateTableBucket: string;
```

- *Type:* string

[Write] s3tables:CreateTableBucket.

---

##### `DeleteNamespace`<sup>Required</sup> <a name="DeleteNamespace" id="@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteNamespace"></a>

```typescript
public readonly DeleteNamespace: string;
```

- *Type:* string

[Write] s3tables:DeleteNamespace.

---

##### `DeleteTable`<sup>Required</sup> <a name="DeleteTable" id="@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTable"></a>

```typescript
public readonly DeleteTable: string;
```

- *Type:* string

[Write] s3tables:DeleteTable.

---

##### `DeleteTableBucket`<sup>Required</sup> <a name="DeleteTableBucket" id="@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableBucket"></a>

```typescript
public readonly DeleteTableBucket: string;
```

- *Type:* string

[Write] s3tables:DeleteTableBucket.

---

##### `DeleteTableBucketEncryption`<sup>Required</sup> <a name="DeleteTableBucketEncryption" id="@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableBucketEncryption"></a>

```typescript
public readonly DeleteTableBucketEncryption: string;
```

- *Type:* string

[Write] s3tables:DeleteTableBucketEncryption.

---

##### `DeleteTableBucketMetricsConfiguration`<sup>Required</sup> <a name="DeleteTableBucketMetricsConfiguration" id="@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableBucketMetricsConfiguration"></a>

```typescript
public readonly DeleteTableBucketMetricsConfiguration: string;
```

- *Type:* string

[Write] s3tables:DeleteTableBucketMetricsConfiguration.

---

##### `DeleteTableBucketPolicy`<sup>Required</sup> <a name="DeleteTableBucketPolicy" id="@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableBucketPolicy"></a>

```typescript
public readonly DeleteTableBucketPolicy: string;
```

- *Type:* string

[PermissionManagement] s3tables:DeleteTableBucketPolicy.

---

##### `DeleteTableBucketReplication`<sup>Required</sup> <a name="DeleteTableBucketReplication" id="@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableBucketReplication"></a>

```typescript
public readonly DeleteTableBucketReplication: string;
```

- *Type:* string

[Write] s3tables:DeleteTableBucketReplication.

---

##### `DeleteTablePolicy`<sup>Required</sup> <a name="DeleteTablePolicy" id="@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTablePolicy"></a>

```typescript
public readonly DeleteTablePolicy: string;
```

- *Type:* string

[PermissionManagement] s3tables:DeleteTablePolicy.

---

##### `DeleteTableReplication`<sup>Required</sup> <a name="DeleteTableReplication" id="@cdk_utils/iam.s3tables.S3tablesActions.property.DeleteTableReplication"></a>

```typescript
public readonly DeleteTableReplication: string;
```

- *Type:* string

[Write] s3tables:DeleteTableReplication.

---

##### `ListNamespaces`<sup>Required</sup> <a name="ListNamespaces" id="@cdk_utils/iam.s3tables.S3tablesActions.property.ListNamespaces"></a>

```typescript
public readonly ListNamespaces: string;
```

- *Type:* string

[List] s3tables:ListNamespaces.

---

##### `ListTableBuckets`<sup>Required</sup> <a name="ListTableBuckets" id="@cdk_utils/iam.s3tables.S3tablesActions.property.ListTableBuckets"></a>

```typescript
public readonly ListTableBuckets: string;
```

- *Type:* string

[List] s3tables:ListTableBuckets.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.s3tables.S3tablesActions.property.ListTables"></a>

```typescript
public readonly ListTables: string;
```

- *Type:* string

[List] s3tables:ListTables.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.s3tables.S3tablesActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] s3tables:ListTagsForResource.

---

##### `PutTableBucketEncryption`<sup>Required</sup> <a name="PutTableBucketEncryption" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketEncryption"></a>

```typescript
public readonly PutTableBucketEncryption: string;
```

- *Type:* string

[Write] s3tables:PutTableBucketEncryption.

---

##### `PutTableBucketMaintenanceConfiguration`<sup>Required</sup> <a name="PutTableBucketMaintenanceConfiguration" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketMaintenanceConfiguration"></a>

```typescript
public readonly PutTableBucketMaintenanceConfiguration: string;
```

- *Type:* string

[Write] s3tables:PutTableBucketMaintenanceConfiguration.

---

##### `PutTableBucketMetricsConfiguration`<sup>Required</sup> <a name="PutTableBucketMetricsConfiguration" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketMetricsConfiguration"></a>

```typescript
public readonly PutTableBucketMetricsConfiguration: string;
```

- *Type:* string

[Write] s3tables:PutTableBucketMetricsConfiguration.

---

##### `PutTableBucketPolicy`<sup>Required</sup> <a name="PutTableBucketPolicy" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketPolicy"></a>

```typescript
public readonly PutTableBucketPolicy: string;
```

- *Type:* string

[PermissionManagement] s3tables:PutTableBucketPolicy.

---

##### `PutTableBucketReplication`<sup>Required</sup> <a name="PutTableBucketReplication" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketReplication"></a>

```typescript
public readonly PutTableBucketReplication: string;
```

- *Type:* string

[Write] s3tables:PutTableBucketReplication.

---

##### `PutTableBucketStorageClass`<sup>Required</sup> <a name="PutTableBucketStorageClass" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableBucketStorageClass"></a>

```typescript
public readonly PutTableBucketStorageClass: string;
```

- *Type:* string

[Write] s3tables:PutTableBucketStorageClass.

---

##### `PutTableData`<sup>Required</sup> <a name="PutTableData" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableData"></a>

```typescript
public readonly PutTableData: string;
```

- *Type:* string

[Write] s3tables:PutTableData.

---

##### `PutTableEncryption`<sup>Required</sup> <a name="PutTableEncryption" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableEncryption"></a>

```typescript
public readonly PutTableEncryption: string;
```

- *Type:* string

[Write] s3tables:PutTableEncryption.

---

##### `PutTableMaintenanceConfiguration`<sup>Required</sup> <a name="PutTableMaintenanceConfiguration" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableMaintenanceConfiguration"></a>

```typescript
public readonly PutTableMaintenanceConfiguration: string;
```

- *Type:* string

[Write] s3tables:PutTableMaintenanceConfiguration.

---

##### `PutTablePolicy`<sup>Required</sup> <a name="PutTablePolicy" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTablePolicy"></a>

```typescript
public readonly PutTablePolicy: string;
```

- *Type:* string

[PermissionManagement] s3tables:PutTablePolicy.

---

##### `PutTableRecordExpirationConfiguration`<sup>Required</sup> <a name="PutTableRecordExpirationConfiguration" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableRecordExpirationConfiguration"></a>

```typescript
public readonly PutTableRecordExpirationConfiguration: string;
```

- *Type:* string

[Write] s3tables:PutTableRecordExpirationConfiguration.

---

##### `PutTableReplication`<sup>Required</sup> <a name="PutTableReplication" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableReplication"></a>

```typescript
public readonly PutTableReplication: string;
```

- *Type:* string

[Write] s3tables:PutTableReplication.

---

##### `PutTableStorageClass`<sup>Required</sup> <a name="PutTableStorageClass" id="@cdk_utils/iam.s3tables.S3tablesActions.property.PutTableStorageClass"></a>

```typescript
public readonly PutTableStorageClass: string;
```

- *Type:* string

[Write] s3tables:PutTableStorageClass.

---

##### `RenameTable`<sup>Required</sup> <a name="RenameTable" id="@cdk_utils/iam.s3tables.S3tablesActions.property.RenameTable"></a>

```typescript
public readonly RenameTable: string;
```

- *Type:* string

[Write] s3tables:RenameTable.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.s3tables.S3tablesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.s3tables.S3tablesActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] s3tables:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.s3tables.S3tablesActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] s3tables:UntagResource.

---

##### `UpdateTableMetadataLocation`<sup>Required</sup> <a name="UpdateTableMetadataLocation" id="@cdk_utils/iam.s3tables.S3tablesActions.property.UpdateTableMetadataLocation"></a>

```typescript
public readonly UpdateTableMetadataLocation: string;
```

- *Type:* string

[Write] s3tables:UpdateTableMetadataLocation.

---

### S3tablesConditions <a name="S3tablesConditions" id="@cdk_utils/iam.s3tables.S3tablesConditions"></a>

Condition key constants and builders for s3tables.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3tables.S3tablesConditions.Initializer"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

new s3tables.S3tablesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.kmsKeyARN">kmsKeyARN</a></code> | Generates a condition block for `s3tables:KMSKeyArn`. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.namespace">namespace</a></code> | Generates a condition block for `s3tables:namespace`. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.sseAlgorithm">sseAlgorithm</a></code> | Generates a condition block for `s3tables:SSEAlgorithm`. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.storageClass">storageClass</a></code> | Generates a condition block for `s3tables:StorageClass`. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.tableBucketTag">tableBucketTag</a></code> | Generates a condition block for `s3tables:TableBucketTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.tableName">tableName</a></code> | Generates a condition block for `s3tables:tableName`. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `kmsKeyARN` <a name="kmsKeyARN" id="@cdk_utils/iam.s3tables.S3tablesConditions.kmsKeyARN"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesConditions.kmsKeyARN(value: string)
```

Generates a condition block for `s3tables:KMSKeyArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3tables.S3tablesConditions.kmsKeyARN.parameter.value"></a>

- *Type:* string

---

##### `namespace` <a name="namespace" id="@cdk_utils/iam.s3tables.S3tablesConditions.namespace"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesConditions.namespace(value: string)
```

Generates a condition block for `s3tables:namespace`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3tables.S3tablesConditions.namespace.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.s3tables.S3tablesConditions.requestTag"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3tables.S3tablesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.s3tables.S3tablesConditions.resourceTag"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3tables.S3tablesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `sseAlgorithm` <a name="sseAlgorithm" id="@cdk_utils/iam.s3tables.S3tablesConditions.sseAlgorithm"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesConditions.sseAlgorithm(value: string)
```

Generates a condition block for `s3tables:SSEAlgorithm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3tables.S3tablesConditions.sseAlgorithm.parameter.value"></a>

- *Type:* string

---

##### `storageClass` <a name="storageClass" id="@cdk_utils/iam.s3tables.S3tablesConditions.storageClass"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesConditions.storageClass(value: string)
```

Generates a condition block for `s3tables:StorageClass`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3tables.S3tablesConditions.storageClass.parameter.value"></a>

- *Type:* string

---

##### `tableBucketTag` <a name="tableBucketTag" id="@cdk_utils/iam.s3tables.S3tablesConditions.tableBucketTag"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesConditions.tableBucketTag(value: string)
```

Generates a condition block for `s3tables:TableBucketTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3tables.S3tablesConditions.tableBucketTag.parameter.value"></a>

- *Type:* string

---

##### `tableName` <a name="tableName" id="@cdk_utils/iam.s3tables.S3tablesConditions.tableName"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesConditions.tableName(value: string)
```

Generates a condition block for `s3tables:tableName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3tables.S3tablesConditions.tableName.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.tagKeys"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.s3tables.S3tablesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetNamespaceConditionKeys">actionGetNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetNamespace action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableConditionKeys">actionGetTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTable action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableDataConditionKeys">actionGetTableDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableData action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableEncryptionConditionKeys">actionGetTableEncryptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableEncryption action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableMaintenanceConfigurationConditionKeys">actionGetTableMaintenanceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableMaintenanceConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableMaintenanceJobStatusConditionKeys">actionGetTableMaintenanceJobStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableMaintenanceJobStatus action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableMetadataLocationConditionKeys">actionGetTableMetadataLocationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableMetadataLocation action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTablePolicyConditionKeys">actionGetTablePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTablePolicy action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableRecordExpirationConfigurationConditionKeys">actionGetTableRecordExpirationConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableRecordExpirationConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableRecordExpirationJobStatusConditionKeys">actionGetTableRecordExpirationJobStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableRecordExpirationJobStatus action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableReplicationConditionKeys">actionGetTableReplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableReplication action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableReplicationStatusConditionKeys">actionGetTableReplicationStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableReplicationStatus action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableStorageClassConditionKeys">actionGetTableStorageClassConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableStorageClass action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.CreateTableBucketConditionKeys">CreateTableBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTableBucket action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.CreateTableConditionKeys">CreateTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTable action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.DeleteNamespaceConditionKeys">DeleteNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteNamespace action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.DeleteTableConditionKeys">DeleteTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTable action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.DeleteTablePolicyConditionKeys">DeleteTablePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTablePolicy action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.DeleteTableReplicationConditionKeys">DeleteTableReplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTableReplication action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.KMS_KEY_ARN">KMS_KEY_ARN</a></code> | <code>string</code> | Condition key: s3tables:KMSKeyArn (ARN). |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.ListTablesConditionKeys">ListTablesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTables action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.NAMESPACE">NAMESPACE</a></code> | <code>string</code> | Condition key: s3tables:namespace (String). |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableBucketEncryptionConditionKeys">PutTableBucketEncryptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTableBucketEncryption action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableBucketStorageClassConditionKeys">PutTableBucketStorageClassConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTableBucketStorageClass action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableDataConditionKeys">PutTableDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTableData action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableEncryptionConditionKeys">PutTableEncryptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTableEncryption action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableMaintenanceConfigurationConditionKeys">PutTableMaintenanceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTableMaintenanceConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTablePolicyConditionKeys">PutTablePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTablePolicy action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableRecordExpirationConfigurationConditionKeys">PutTableRecordExpirationConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTableRecordExpirationConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableReplicationConditionKeys">PutTableReplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTableReplication action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableStorageClassConditionKeys">PutTableStorageClassConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTableStorageClass action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.RenameTableConditionKeys">RenameTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RenameTable action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.SSE_ALGORITHM">SSE_ALGORITHM</a></code> | <code>string</code> | Condition key: s3tables:SSEAlgorithm (String). |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.STORAGE_CLASS">STORAGE_CLASS</a></code> | <code>string</code> | Condition key: s3tables:StorageClass (String). |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.TABLE_BUCKET_TAG">TABLE_BUCKET_TAG</a></code> | <code>string</code> | Condition key: s3tables:TableBucketTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.TABLE_NAME">TABLE_NAME</a></code> | <code>string</code> | Condition key: s3tables:tableName (String). |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesConditions.property.UpdateTableMetadataLocationConditionKeys">UpdateTableMetadataLocationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTableMetadataLocation action. |

---

##### `actionGetNamespaceConditionKeys`<sup>Required</sup> <a name="actionGetNamespaceConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetNamespaceConditionKeys"></a>

```typescript
public readonly actionGetNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetNamespace action.

---

##### `actionGetTableConditionKeys`<sup>Required</sup> <a name="actionGetTableConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableConditionKeys"></a>

```typescript
public readonly actionGetTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTable action.

---

##### `actionGetTableDataConditionKeys`<sup>Required</sup> <a name="actionGetTableDataConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableDataConditionKeys"></a>

```typescript
public readonly actionGetTableDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableData action.

---

##### `actionGetTableEncryptionConditionKeys`<sup>Required</sup> <a name="actionGetTableEncryptionConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableEncryptionConditionKeys"></a>

```typescript
public readonly actionGetTableEncryptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableEncryption action.

---

##### `actionGetTableMaintenanceConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetTableMaintenanceConfigurationConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableMaintenanceConfigurationConditionKeys"></a>

```typescript
public readonly actionGetTableMaintenanceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableMaintenanceConfiguration action.

---

##### `actionGetTableMaintenanceJobStatusConditionKeys`<sup>Required</sup> <a name="actionGetTableMaintenanceJobStatusConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableMaintenanceJobStatusConditionKeys"></a>

```typescript
public readonly actionGetTableMaintenanceJobStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableMaintenanceJobStatus action.

---

##### `actionGetTableMetadataLocationConditionKeys`<sup>Required</sup> <a name="actionGetTableMetadataLocationConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableMetadataLocationConditionKeys"></a>

```typescript
public readonly actionGetTableMetadataLocationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableMetadataLocation action.

---

##### `actionGetTablePolicyConditionKeys`<sup>Required</sup> <a name="actionGetTablePolicyConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTablePolicyConditionKeys"></a>

```typescript
public readonly actionGetTablePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTablePolicy action.

---

##### `actionGetTableRecordExpirationConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetTableRecordExpirationConfigurationConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableRecordExpirationConfigurationConditionKeys"></a>

```typescript
public readonly actionGetTableRecordExpirationConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableRecordExpirationConfiguration action.

---

##### `actionGetTableRecordExpirationJobStatusConditionKeys`<sup>Required</sup> <a name="actionGetTableRecordExpirationJobStatusConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableRecordExpirationJobStatusConditionKeys"></a>

```typescript
public readonly actionGetTableRecordExpirationJobStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableRecordExpirationJobStatus action.

---

##### `actionGetTableReplicationConditionKeys`<sup>Required</sup> <a name="actionGetTableReplicationConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableReplicationConditionKeys"></a>

```typescript
public readonly actionGetTableReplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableReplication action.

---

##### `actionGetTableReplicationStatusConditionKeys`<sup>Required</sup> <a name="actionGetTableReplicationStatusConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableReplicationStatusConditionKeys"></a>

```typescript
public readonly actionGetTableReplicationStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableReplicationStatus action.

---

##### `actionGetTableStorageClassConditionKeys`<sup>Required</sup> <a name="actionGetTableStorageClassConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.actionGetTableStorageClassConditionKeys"></a>

```typescript
public readonly actionGetTableStorageClassConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableStorageClass action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateTableBucketConditionKeys`<sup>Required</sup> <a name="CreateTableBucketConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.CreateTableBucketConditionKeys"></a>

```typescript
public readonly CreateTableBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTableBucket action.

---

##### `CreateTableConditionKeys`<sup>Required</sup> <a name="CreateTableConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.CreateTableConditionKeys"></a>

```typescript
public readonly CreateTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTable action.

---

##### `DeleteNamespaceConditionKeys`<sup>Required</sup> <a name="DeleteNamespaceConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.DeleteNamespaceConditionKeys"></a>

```typescript
public readonly DeleteNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteNamespace action.

---

##### `DeleteTableConditionKeys`<sup>Required</sup> <a name="DeleteTableConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.DeleteTableConditionKeys"></a>

```typescript
public readonly DeleteTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTable action.

---

##### `DeleteTablePolicyConditionKeys`<sup>Required</sup> <a name="DeleteTablePolicyConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.DeleteTablePolicyConditionKeys"></a>

```typescript
public readonly DeleteTablePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTablePolicy action.

---

##### `DeleteTableReplicationConditionKeys`<sup>Required</sup> <a name="DeleteTableReplicationConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.DeleteTableReplicationConditionKeys"></a>

```typescript
public readonly DeleteTableReplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTableReplication action.

---

##### `KMS_KEY_ARN`<sup>Required</sup> <a name="KMS_KEY_ARN" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.KMS_KEY_ARN"></a>

```typescript
public readonly KMS_KEY_ARN: string;
```

- *Type:* string

Condition key: s3tables:KMSKeyArn (ARN).

---

##### `ListTablesConditionKeys`<sup>Required</sup> <a name="ListTablesConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.ListTablesConditionKeys"></a>

```typescript
public readonly ListTablesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTables action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `NAMESPACE`<sup>Required</sup> <a name="NAMESPACE" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.NAMESPACE"></a>

```typescript
public readonly NAMESPACE: string;
```

- *Type:* string

Condition key: s3tables:namespace (String).

---

##### `PutTableBucketEncryptionConditionKeys`<sup>Required</sup> <a name="PutTableBucketEncryptionConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableBucketEncryptionConditionKeys"></a>

```typescript
public readonly PutTableBucketEncryptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTableBucketEncryption action.

---

##### `PutTableBucketStorageClassConditionKeys`<sup>Required</sup> <a name="PutTableBucketStorageClassConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableBucketStorageClassConditionKeys"></a>

```typescript
public readonly PutTableBucketStorageClassConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTableBucketStorageClass action.

---

##### `PutTableDataConditionKeys`<sup>Required</sup> <a name="PutTableDataConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableDataConditionKeys"></a>

```typescript
public readonly PutTableDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTableData action.

---

##### `PutTableEncryptionConditionKeys`<sup>Required</sup> <a name="PutTableEncryptionConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableEncryptionConditionKeys"></a>

```typescript
public readonly PutTableEncryptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTableEncryption action.

---

##### `PutTableMaintenanceConfigurationConditionKeys`<sup>Required</sup> <a name="PutTableMaintenanceConfigurationConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableMaintenanceConfigurationConditionKeys"></a>

```typescript
public readonly PutTableMaintenanceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTableMaintenanceConfiguration action.

---

##### `PutTablePolicyConditionKeys`<sup>Required</sup> <a name="PutTablePolicyConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTablePolicyConditionKeys"></a>

```typescript
public readonly PutTablePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTablePolicy action.

---

##### `PutTableRecordExpirationConfigurationConditionKeys`<sup>Required</sup> <a name="PutTableRecordExpirationConfigurationConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableRecordExpirationConfigurationConditionKeys"></a>

```typescript
public readonly PutTableRecordExpirationConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTableRecordExpirationConfiguration action.

---

##### `PutTableReplicationConditionKeys`<sup>Required</sup> <a name="PutTableReplicationConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableReplicationConditionKeys"></a>

```typescript
public readonly PutTableReplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTableReplication action.

---

##### `PutTableStorageClassConditionKeys`<sup>Required</sup> <a name="PutTableStorageClassConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.PutTableStorageClassConditionKeys"></a>

```typescript
public readonly PutTableStorageClassConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTableStorageClass action.

---

##### `RenameTableConditionKeys`<sup>Required</sup> <a name="RenameTableConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.RenameTableConditionKeys"></a>

```typescript
public readonly RenameTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RenameTable action.

---

##### `SSE_ALGORITHM`<sup>Required</sup> <a name="SSE_ALGORITHM" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.SSE_ALGORITHM"></a>

```typescript
public readonly SSE_ALGORITHM: string;
```

- *Type:* string

Condition key: s3tables:SSEAlgorithm (String).

---

##### `STORAGE_CLASS`<sup>Required</sup> <a name="STORAGE_CLASS" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.STORAGE_CLASS"></a>

```typescript
public readonly STORAGE_CLASS: string;
```

- *Type:* string

Condition key: s3tables:StorageClass (String).

---

##### `TABLE_BUCKET_TAG`<sup>Required</sup> <a name="TABLE_BUCKET_TAG" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.TABLE_BUCKET_TAG"></a>

```typescript
public readonly TABLE_BUCKET_TAG: string;
```

- *Type:* string

Condition key: s3tables:TableBucketTag/${TagKey} (String).

---

##### `TABLE_NAME`<sup>Required</sup> <a name="TABLE_NAME" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.TABLE_NAME"></a>

```typescript
public readonly TABLE_NAME: string;
```

- *Type:* string

Condition key: s3tables:tableName (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateTableMetadataLocationConditionKeys`<sup>Required</sup> <a name="UpdateTableMetadataLocationConditionKeys" id="@cdk_utils/iam.s3tables.S3tablesConditions.property.UpdateTableMetadataLocationConditionKeys"></a>

```typescript
public readonly UpdateTableMetadataLocationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTableMetadataLocation action.

---

### S3tablesOperations <a name="S3tablesOperations" id="@cdk_utils/iam.s3tables.S3tablesOperations"></a>

API operation to required IAM actions mapping for s3tables.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3tables.S3tablesOperations.Initializer"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

new s3tables.S3tablesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.CreateNamespace">CreateNamespace</a></code> | <code>string[]</code> | IAM actions required for the CreateNamespace API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.CreateTable">CreateTable</a></code> | <code>string[]</code> | IAM actions required for the CreateTable API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.CreateTableBucket">CreateTableBucket</a></code> | <code>string[]</code> | IAM actions required for the CreateTableBucket API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteNamespace">DeleteNamespace</a></code> | <code>string[]</code> | IAM actions required for the DeleteNamespace API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTable">DeleteTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteTable API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableBucket">DeleteTableBucket</a></code> | <code>string[]</code> | IAM actions required for the DeleteTableBucket API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableBucketEncryption">DeleteTableBucketEncryption</a></code> | <code>string[]</code> | IAM actions required for the DeleteTableBucketEncryption API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableBucketMetricsConfiguration">DeleteTableBucketMetricsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteTableBucketMetricsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableBucketPolicy">DeleteTableBucketPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteTableBucketPolicy API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableBucketReplication">DeleteTableBucketReplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteTableBucketReplication API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTablePolicy">DeleteTablePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteTablePolicy API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableReplication">DeleteTableReplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteTableReplication API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.ListNamespaces">ListNamespaces</a></code> | <code>string[]</code> | IAM actions required for the ListNamespaces API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.ListTableBuckets">ListTableBuckets</a></code> | <code>string[]</code> | IAM actions required for the ListTableBuckets API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.ListTables">ListTables</a></code> | <code>string[]</code> | IAM actions required for the ListTables API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetNamespace">opGetNamespace</a></code> | <code>string[]</code> | IAM actions required for the GetNamespace API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTable">opGetTable</a></code> | <code>string[]</code> | IAM actions required for the GetTable API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucket">opGetTableBucket</a></code> | <code>string[]</code> | IAM actions required for the GetTableBucket API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketEncryption">opGetTableBucketEncryption</a></code> | <code>string[]</code> | IAM actions required for the GetTableBucketEncryption API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketMaintenanceConfiguration">opGetTableBucketMaintenanceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetTableBucketMaintenanceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketMetricsConfiguration">opGetTableBucketMetricsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetTableBucketMetricsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketPolicy">opGetTableBucketPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetTableBucketPolicy API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketReplication">opGetTableBucketReplication</a></code> | <code>string[]</code> | IAM actions required for the GetTableBucketReplication API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketStorageClass">opGetTableBucketStorageClass</a></code> | <code>string[]</code> | IAM actions required for the GetTableBucketStorageClass API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableEncryption">opGetTableEncryption</a></code> | <code>string[]</code> | IAM actions required for the GetTableEncryption API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableMaintenanceConfiguration">opGetTableMaintenanceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetTableMaintenanceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableMaintenanceJobStatus">opGetTableMaintenanceJobStatus</a></code> | <code>string[]</code> | IAM actions required for the GetTableMaintenanceJobStatus API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableMetadataLocation">opGetTableMetadataLocation</a></code> | <code>string[]</code> | IAM actions required for the GetTableMetadataLocation API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTablePolicy">opGetTablePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetTablePolicy API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableRecordExpirationConfiguration">opGetTableRecordExpirationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetTableRecordExpirationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableRecordExpirationJobStatus">opGetTableRecordExpirationJobStatus</a></code> | <code>string[]</code> | IAM actions required for the GetTableRecordExpirationJobStatus API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableReplication">opGetTableReplication</a></code> | <code>string[]</code> | IAM actions required for the GetTableReplication API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableReplicationStatus">opGetTableReplicationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetTableReplicationStatus API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableStorageClass">opGetTableStorageClass</a></code> | <code>string[]</code> | IAM actions required for the GetTableStorageClass API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketEncryption">PutTableBucketEncryption</a></code> | <code>string[]</code> | IAM actions required for the PutTableBucketEncryption API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketMaintenanceConfiguration">PutTableBucketMaintenanceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutTableBucketMaintenanceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketMetricsConfiguration">PutTableBucketMetricsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutTableBucketMetricsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketPolicy">PutTableBucketPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutTableBucketPolicy API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketReplication">PutTableBucketReplication</a></code> | <code>string[]</code> | IAM actions required for the PutTableBucketReplication API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketStorageClass">PutTableBucketStorageClass</a></code> | <code>string[]</code> | IAM actions required for the PutTableBucketStorageClass API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableMaintenanceConfiguration">PutTableMaintenanceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutTableMaintenanceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTablePolicy">PutTablePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutTablePolicy API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableRecordExpirationConfiguration">PutTableRecordExpirationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutTableRecordExpirationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableReplication">PutTableReplication</a></code> | <code>string[]</code> | IAM actions required for the PutTableReplication API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.RenameTable">RenameTable</a></code> | <code>string[]</code> | IAM actions required for the RenameTable API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesOperations.property.UpdateTableMetadataLocation">UpdateTableMetadataLocation</a></code> | <code>string[]</code> | IAM actions required for the UpdateTableMetadataLocation API call. |

---

##### `CreateNamespace`<sup>Required</sup> <a name="CreateNamespace" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.CreateNamespace"></a>

```typescript
public readonly CreateNamespace: string[];
```

- *Type:* string[]

IAM actions required for the CreateNamespace API call.

---

##### `CreateTable`<sup>Required</sup> <a name="CreateTable" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.CreateTable"></a>

```typescript
public readonly CreateTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateTable API call.

---

##### `CreateTableBucket`<sup>Required</sup> <a name="CreateTableBucket" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.CreateTableBucket"></a>

```typescript
public readonly CreateTableBucket: string[];
```

- *Type:* string[]

IAM actions required for the CreateTableBucket API call.

---

##### `DeleteNamespace`<sup>Required</sup> <a name="DeleteNamespace" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteNamespace"></a>

```typescript
public readonly DeleteNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNamespace API call.

---

##### `DeleteTable`<sup>Required</sup> <a name="DeleteTable" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTable"></a>

```typescript
public readonly DeleteTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTable API call.

---

##### `DeleteTableBucket`<sup>Required</sup> <a name="DeleteTableBucket" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableBucket"></a>

```typescript
public readonly DeleteTableBucket: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTableBucket API call.

---

##### `DeleteTableBucketEncryption`<sup>Required</sup> <a name="DeleteTableBucketEncryption" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableBucketEncryption"></a>

```typescript
public readonly DeleteTableBucketEncryption: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTableBucketEncryption API call.

---

##### `DeleteTableBucketMetricsConfiguration`<sup>Required</sup> <a name="DeleteTableBucketMetricsConfiguration" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableBucketMetricsConfiguration"></a>

```typescript
public readonly DeleteTableBucketMetricsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTableBucketMetricsConfiguration API call.

---

##### `DeleteTableBucketPolicy`<sup>Required</sup> <a name="DeleteTableBucketPolicy" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableBucketPolicy"></a>

```typescript
public readonly DeleteTableBucketPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTableBucketPolicy API call.

---

##### `DeleteTableBucketReplication`<sup>Required</sup> <a name="DeleteTableBucketReplication" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableBucketReplication"></a>

```typescript
public readonly DeleteTableBucketReplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTableBucketReplication API call.

---

##### `DeleteTablePolicy`<sup>Required</sup> <a name="DeleteTablePolicy" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTablePolicy"></a>

```typescript
public readonly DeleteTablePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTablePolicy API call.

---

##### `DeleteTableReplication`<sup>Required</sup> <a name="DeleteTableReplication" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.DeleteTableReplication"></a>

```typescript
public readonly DeleteTableReplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTableReplication API call.

---

##### `ListNamespaces`<sup>Required</sup> <a name="ListNamespaces" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.ListNamespaces"></a>

```typescript
public readonly ListNamespaces: string[];
```

- *Type:* string[]

IAM actions required for the ListNamespaces API call.

---

##### `ListTableBuckets`<sup>Required</sup> <a name="ListTableBuckets" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.ListTableBuckets"></a>

```typescript
public readonly ListTableBuckets: string[];
```

- *Type:* string[]

IAM actions required for the ListTableBuckets API call.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.ListTables"></a>

```typescript
public readonly ListTables: string[];
```

- *Type:* string[]

IAM actions required for the ListTables API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetNamespace`<sup>Required</sup> <a name="opGetNamespace" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetNamespace"></a>

```typescript
public readonly opGetNamespace: string[];
```

- *Type:* string[]

IAM actions required for the GetNamespace API call.

---

##### `opGetTable`<sup>Required</sup> <a name="opGetTable" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTable"></a>

```typescript
public readonly opGetTable: string[];
```

- *Type:* string[]

IAM actions required for the GetTable API call.

---

##### `opGetTableBucket`<sup>Required</sup> <a name="opGetTableBucket" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucket"></a>

```typescript
public readonly opGetTableBucket: string[];
```

- *Type:* string[]

IAM actions required for the GetTableBucket API call.

---

##### `opGetTableBucketEncryption`<sup>Required</sup> <a name="opGetTableBucketEncryption" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketEncryption"></a>

```typescript
public readonly opGetTableBucketEncryption: string[];
```

- *Type:* string[]

IAM actions required for the GetTableBucketEncryption API call.

---

##### `opGetTableBucketMaintenanceConfiguration`<sup>Required</sup> <a name="opGetTableBucketMaintenanceConfiguration" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketMaintenanceConfiguration"></a>

```typescript
public readonly opGetTableBucketMaintenanceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetTableBucketMaintenanceConfiguration API call.

---

##### `opGetTableBucketMetricsConfiguration`<sup>Required</sup> <a name="opGetTableBucketMetricsConfiguration" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketMetricsConfiguration"></a>

```typescript
public readonly opGetTableBucketMetricsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetTableBucketMetricsConfiguration API call.

---

##### `opGetTableBucketPolicy`<sup>Required</sup> <a name="opGetTableBucketPolicy" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketPolicy"></a>

```typescript
public readonly opGetTableBucketPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetTableBucketPolicy API call.

---

##### `opGetTableBucketReplication`<sup>Required</sup> <a name="opGetTableBucketReplication" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketReplication"></a>

```typescript
public readonly opGetTableBucketReplication: string[];
```

- *Type:* string[]

IAM actions required for the GetTableBucketReplication API call.

---

##### `opGetTableBucketStorageClass`<sup>Required</sup> <a name="opGetTableBucketStorageClass" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableBucketStorageClass"></a>

```typescript
public readonly opGetTableBucketStorageClass: string[];
```

- *Type:* string[]

IAM actions required for the GetTableBucketStorageClass API call.

---

##### `opGetTableEncryption`<sup>Required</sup> <a name="opGetTableEncryption" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableEncryption"></a>

```typescript
public readonly opGetTableEncryption: string[];
```

- *Type:* string[]

IAM actions required for the GetTableEncryption API call.

---

##### `opGetTableMaintenanceConfiguration`<sup>Required</sup> <a name="opGetTableMaintenanceConfiguration" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableMaintenanceConfiguration"></a>

```typescript
public readonly opGetTableMaintenanceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetTableMaintenanceConfiguration API call.

---

##### `opGetTableMaintenanceJobStatus`<sup>Required</sup> <a name="opGetTableMaintenanceJobStatus" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableMaintenanceJobStatus"></a>

```typescript
public readonly opGetTableMaintenanceJobStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetTableMaintenanceJobStatus API call.

---

##### `opGetTableMetadataLocation`<sup>Required</sup> <a name="opGetTableMetadataLocation" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableMetadataLocation"></a>

```typescript
public readonly opGetTableMetadataLocation: string[];
```

- *Type:* string[]

IAM actions required for the GetTableMetadataLocation API call.

---

##### `opGetTablePolicy`<sup>Required</sup> <a name="opGetTablePolicy" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTablePolicy"></a>

```typescript
public readonly opGetTablePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetTablePolicy API call.

---

##### `opGetTableRecordExpirationConfiguration`<sup>Required</sup> <a name="opGetTableRecordExpirationConfiguration" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableRecordExpirationConfiguration"></a>

```typescript
public readonly opGetTableRecordExpirationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetTableRecordExpirationConfiguration API call.

---

##### `opGetTableRecordExpirationJobStatus`<sup>Required</sup> <a name="opGetTableRecordExpirationJobStatus" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableRecordExpirationJobStatus"></a>

```typescript
public readonly opGetTableRecordExpirationJobStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetTableRecordExpirationJobStatus API call.

---

##### `opGetTableReplication`<sup>Required</sup> <a name="opGetTableReplication" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableReplication"></a>

```typescript
public readonly opGetTableReplication: string[];
```

- *Type:* string[]

IAM actions required for the GetTableReplication API call.

---

##### `opGetTableReplicationStatus`<sup>Required</sup> <a name="opGetTableReplicationStatus" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableReplicationStatus"></a>

```typescript
public readonly opGetTableReplicationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetTableReplicationStatus API call.

---

##### `opGetTableStorageClass`<sup>Required</sup> <a name="opGetTableStorageClass" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.opGetTableStorageClass"></a>

```typescript
public readonly opGetTableStorageClass: string[];
```

- *Type:* string[]

IAM actions required for the GetTableStorageClass API call.

---

##### `PutTableBucketEncryption`<sup>Required</sup> <a name="PutTableBucketEncryption" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketEncryption"></a>

```typescript
public readonly PutTableBucketEncryption: string[];
```

- *Type:* string[]

IAM actions required for the PutTableBucketEncryption API call.

---

##### `PutTableBucketMaintenanceConfiguration`<sup>Required</sup> <a name="PutTableBucketMaintenanceConfiguration" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketMaintenanceConfiguration"></a>

```typescript
public readonly PutTableBucketMaintenanceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutTableBucketMaintenanceConfiguration API call.

---

##### `PutTableBucketMetricsConfiguration`<sup>Required</sup> <a name="PutTableBucketMetricsConfiguration" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketMetricsConfiguration"></a>

```typescript
public readonly PutTableBucketMetricsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutTableBucketMetricsConfiguration API call.

---

##### `PutTableBucketPolicy`<sup>Required</sup> <a name="PutTableBucketPolicy" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketPolicy"></a>

```typescript
public readonly PutTableBucketPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutTableBucketPolicy API call.

---

##### `PutTableBucketReplication`<sup>Required</sup> <a name="PutTableBucketReplication" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketReplication"></a>

```typescript
public readonly PutTableBucketReplication: string[];
```

- *Type:* string[]

IAM actions required for the PutTableBucketReplication API call.

---

##### `PutTableBucketStorageClass`<sup>Required</sup> <a name="PutTableBucketStorageClass" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableBucketStorageClass"></a>

```typescript
public readonly PutTableBucketStorageClass: string[];
```

- *Type:* string[]

IAM actions required for the PutTableBucketStorageClass API call.

---

##### `PutTableMaintenanceConfiguration`<sup>Required</sup> <a name="PutTableMaintenanceConfiguration" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableMaintenanceConfiguration"></a>

```typescript
public readonly PutTableMaintenanceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutTableMaintenanceConfiguration API call.

---

##### `PutTablePolicy`<sup>Required</sup> <a name="PutTablePolicy" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTablePolicy"></a>

```typescript
public readonly PutTablePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutTablePolicy API call.

---

##### `PutTableRecordExpirationConfiguration`<sup>Required</sup> <a name="PutTableRecordExpirationConfiguration" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableRecordExpirationConfiguration"></a>

```typescript
public readonly PutTableRecordExpirationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutTableRecordExpirationConfiguration API call.

---

##### `PutTableReplication`<sup>Required</sup> <a name="PutTableReplication" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.PutTableReplication"></a>

```typescript
public readonly PutTableReplication: string[];
```

- *Type:* string[]

IAM actions required for the PutTableReplication API call.

---

##### `RenameTable`<sup>Required</sup> <a name="RenameTable" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.RenameTable"></a>

```typescript
public readonly RenameTable: string[];
```

- *Type:* string[]

IAM actions required for the RenameTable API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateTableMetadataLocation`<sup>Required</sup> <a name="UpdateTableMetadataLocation" id="@cdk_utils/iam.s3tables.S3tablesOperations.property.UpdateTableMetadataLocation"></a>

```typescript
public readonly UpdateTableMetadataLocation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTableMetadataLocation API call.

---

### S3tablesResources <a name="S3tablesResources" id="@cdk_utils/iam.s3tables.S3tablesResources"></a>

ARN builders, validators, and parsers for s3tables resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3tables.S3tablesResources.Initializer"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

new s3tables.S3tablesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesResources.isValidTableArn">isValidTableArn</a></code> | Validates whether a string is a valid ARN for the Table resource. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesResources.isValidTableBucketArn">isValidTableBucketArn</a></code> | Validates whether a string is a valid ARN for the TableBucket resource. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesResources.parseTableArn">parseTableArn</a></code> | Parses a Table ARN into its components. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesResources.parseTableBucketArn">parseTableBucketArn</a></code> | Parses a TableBucket ARN into its components. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesResources.table">table</a></code> | Builds an ARN for the Table resource. |
| <code><a href="#@cdk_utils/iam.s3tables.S3tablesResources.tableBucket">tableBucket</a></code> | Builds an ARN for the TableBucket resource. |

---

##### `isValidTableArn` <a name="isValidTableArn" id="@cdk_utils/iam.s3tables.S3tablesResources.isValidTableArn"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesResources.isValidTableArn(arn: string)
```

Validates whether a string is a valid ARN for the Table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3tables.S3tablesResources.isValidTableArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTableBucketArn` <a name="isValidTableBucketArn" id="@cdk_utils/iam.s3tables.S3tablesResources.isValidTableBucketArn"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesResources.isValidTableBucketArn(arn: string)
```

Validates whether a string is a valid ARN for the TableBucket resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3tables.S3tablesResources.isValidTableBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTableArn` <a name="parseTableArn" id="@cdk_utils/iam.s3tables.S3tablesResources.parseTableArn"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesResources.parseTableArn(arn: string)
```

Parses a Table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3tables.S3tablesResources.parseTableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTableBucketArn` <a name="parseTableBucketArn" id="@cdk_utils/iam.s3tables.S3tablesResources.parseTableBucketArn"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesResources.parseTableBucketArn(arn: string)
```

Parses a TableBucket ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3tables.S3tablesResources.parseTableBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `table` <a name="table" id="@cdk_utils/iam.s3tables.S3tablesResources.table"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesResources.table(props: S3tablesTableArnProps)
```

Builds an ARN for the Table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3tables.S3tablesResources.table.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3tables.S3tablesTableArnProps">S3tablesTableArnProps</a>

---

##### `tableBucket` <a name="tableBucket" id="@cdk_utils/iam.s3tables.S3tablesResources.tableBucket"></a>

```typescript
import { s3tables } from '@cdk_utils/iam'

s3tables.S3tablesResources.tableBucket(props: S3tablesTableBucketArnProps)
```

Builds an ARN for the TableBucket resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3tables.S3tablesResources.tableBucket.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3tables.S3tablesTableBucketArnProps">S3tablesTableBucketArnProps</a>

---




