# `dynamodb` Submodule <a name="`dynamodb` Submodule" id="@cdk_utils/iam.dynamodb"></a>


## Structs <a name="Structs" id="Structs"></a>

### DynamoDBBackupArnComponents <a name="DynamoDBBackupArnComponents" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents"></a>

Parsed components of a backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBBackupArnComponents: dynamodb.DynamoDBBackupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.property.backupName">backupName</a></code> | <code>string</code> | The BackupName component. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `backupName`<sup>Required</sup> <a name="backupName" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.property.backupName"></a>

```typescript
public readonly backupName: string;
```

- *Type:* string

The BackupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

### DynamoDBBackupArnProps <a name="DynamoDBBackupArnProps" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps"></a>

Properties for building a backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBBackupArnProps: dynamodb.DynamoDBBackupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.property.backupName">backupName</a></code> | <code>string</code> | The BackupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `backupName`<sup>Required</sup> <a name="backupName" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.property.backupName"></a>

```typescript
public readonly backupName: string;
```

- *Type:* string

The BackupName component of the ARN.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DynamoDBExportArnComponents <a name="DynamoDBExportArnComponents" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents"></a>

Parsed components of a export ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBExportArnComponents: dynamodb.DynamoDBExportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.property.exportName">exportName</a></code> | <code>string</code> | The ExportName component. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.property.exportName"></a>

```typescript
public readonly exportName: string;
```

- *Type:* string

The ExportName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

### DynamoDBExportArnProps <a name="DynamoDBExportArnProps" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnProps"></a>

Properties for building a export ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBExportArnProps: dynamodb.DynamoDBExportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.property.exportName">exportName</a></code> | <code>string</code> | The ExportName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.property.exportName"></a>

```typescript
public readonly exportName: string;
```

- *Type:* string

The ExportName component of the ARN.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBExportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DynamoDBGlobalTableArnComponents <a name="DynamoDBGlobalTableArnComponents" id="@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnComponents"></a>

Parsed components of a global-table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnComponents.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBGlobalTableArnComponents: dynamodb.DynamoDBGlobalTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnComponents.property.globalTableName">globalTableName</a></code> | <code>string</code> | The GlobalTableName component. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `globalTableName`<sup>Required</sup> <a name="globalTableName" id="@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnComponents.property.globalTableName"></a>

```typescript
public readonly globalTableName: string;
```

- *Type:* string

The GlobalTableName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### DynamoDBGlobalTableArnProps <a name="DynamoDBGlobalTableArnProps" id="@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnProps"></a>

Properties for building a global-table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnProps.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBGlobalTableArnProps: dynamodb.DynamoDBGlobalTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnProps.property.globalTableName">globalTableName</a></code> | <code>string</code> | The GlobalTableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `globalTableName`<sup>Required</sup> <a name="globalTableName" id="@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnProps.property.globalTableName"></a>

```typescript
public readonly globalTableName: string;
```

- *Type:* string

The GlobalTableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### DynamoDBImportArnComponents <a name="DynamoDBImportArnComponents" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents"></a>

Parsed components of a import ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBImportArnComponents: dynamodb.DynamoDBImportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.property.importName">importName</a></code> | <code>string</code> | The ImportName component. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `importName`<sup>Required</sup> <a name="importName" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.property.importName"></a>

```typescript
public readonly importName: string;
```

- *Type:* string

The ImportName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

### DynamoDBImportArnProps <a name="DynamoDBImportArnProps" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnProps"></a>

Properties for building a import ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBImportArnProps: dynamodb.DynamoDBImportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.property.importName">importName</a></code> | <code>string</code> | The ImportName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `importName`<sup>Required</sup> <a name="importName" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.property.importName"></a>

```typescript
public readonly importName: string;
```

- *Type:* string

The ImportName component of the ARN.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBImportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DynamoDBIndexArnComponents <a name="DynamoDBIndexArnComponents" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents"></a>

Parsed components of a index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBIndexArnComponents: dynamodb.DynamoDBIndexArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.property.indexName">indexName</a></code> | <code>string</code> | The IndexName component. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The IndexName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

### DynamoDBIndexArnProps <a name="DynamoDBIndexArnProps" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps"></a>

Properties for building a index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBIndexArnProps: dynamodb.DynamoDBIndexArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.property.indexName">indexName</a></code> | <code>string</code> | The IndexName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The IndexName component of the ARN.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DynamoDBStreamArnComponents <a name="DynamoDBStreamArnComponents" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents"></a>

Parsed components of a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBStreamArnComponents: dynamodb.DynamoDBStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.property.streamLabel">streamLabel</a></code> | <code>string</code> | The StreamLabel component. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamLabel`<sup>Required</sup> <a name="streamLabel" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.property.streamLabel"></a>

```typescript
public readonly streamLabel: string;
```

- *Type:* string

The StreamLabel component.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

### DynamoDBStreamArnProps <a name="DynamoDBStreamArnProps" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps"></a>

Properties for building a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBStreamArnProps: dynamodb.DynamoDBStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.property.streamLabel">streamLabel</a></code> | <code>string</code> | The StreamLabel component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `streamLabel`<sup>Required</sup> <a name="streamLabel" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.property.streamLabel"></a>

```typescript
public readonly streamLabel: string;
```

- *Type:* string

The StreamLabel component of the ARN.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DynamoDBTableArnComponents <a name="DynamoDBTableArnComponents" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnComponents"></a>

Parsed components of a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnComponents.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBTableArnComponents: dynamodb.DynamoDBTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBTableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBTableArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

### DynamoDBTableArnProps <a name="DynamoDBTableArnProps" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnProps"></a>

Properties for building a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnProps.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

const dynamoDBTableArnProps: dynamodb.DynamoDBTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBTableArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBTableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dynamodb.DynamoDBTableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DynamoDBActions <a name="DynamoDBActions" id="@cdk_utils/iam.dynamodb.DynamoDBActions"></a>

IAM action constants for the dynamodb service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dynamodb.DynamoDBActions.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

new dynamodb.DynamoDBActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.actionGetAbacStatus">actionGetAbacStatus</a></code> | <code>string</code> | [Read] dynamodb:GetAbacStatus. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.actionGetItem">actionGetItem</a></code> | <code>string</code> | [Read] dynamodb:GetItem. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.actionGetRecords">actionGetRecords</a></code> | <code>string</code> | [Read] dynamodb:GetRecords. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] dynamodb:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.actionGetShardIterator">actionGetShardIterator</a></code> | <code>string</code> | [Read] dynamodb:GetShardIterator. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.AssociateTableReplica">AssociateTableReplica</a></code> | <code>string</code> | [Write] dynamodb:AssociateTableReplica. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.BatchGetItem">BatchGetItem</a></code> | <code>string</code> | [Read] dynamodb:BatchGetItem. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.BatchWriteItem">BatchWriteItem</a></code> | <code>string</code> | [Write] dynamodb:BatchWriteItem. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ConditionCheckItem">ConditionCheckItem</a></code> | <code>string</code> | [Read] dynamodb:ConditionCheckItem. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.CreateBackup">CreateBackup</a></code> | <code>string</code> | [Write] dynamodb:CreateBackup. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.CreateGlobalTable">CreateGlobalTable</a></code> | <code>string</code> | [Write] dynamodb:CreateGlobalTable. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.CreateGlobalTableWitness">CreateGlobalTableWitness</a></code> | <code>string</code> | [Write] dynamodb:CreateGlobalTableWitness. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.CreateTable">CreateTable</a></code> | <code>string</code> | [Write] dynamodb:CreateTable. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.CreateTableReplica">CreateTableReplica</a></code> | <code>string</code> | [Write] dynamodb:CreateTableReplica. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteBackup">DeleteBackup</a></code> | <code>string</code> | [Write] dynamodb:DeleteBackup. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteGlobalTableWitness">DeleteGlobalTableWitness</a></code> | <code>string</code> | [Write] dynamodb:DeleteGlobalTableWitness. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteItem">DeleteItem</a></code> | <code>string</code> | [Write] dynamodb:DeleteItem. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] dynamodb:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteTable">DeleteTable</a></code> | <code>string</code> | [Write] dynamodb:DeleteTable. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteTableReplica">DeleteTableReplica</a></code> | <code>string</code> | [Write] dynamodb:DeleteTableReplica. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeBackup">DescribeBackup</a></code> | <code>string</code> | [Read] dynamodb:DescribeBackup. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeContinuousBackups">DescribeContinuousBackups</a></code> | <code>string</code> | [Read] dynamodb:DescribeContinuousBackups. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeContributorInsights">DescribeContributorInsights</a></code> | <code>string</code> | [Read] dynamodb:DescribeContributorInsights. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeEndpoints">DescribeEndpoints</a></code> | <code>string</code> | [Read] dynamodb:DescribeEndpoints. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeExport">DescribeExport</a></code> | <code>string</code> | [Read] dynamodb:DescribeExport. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeGlobalTable">DescribeGlobalTable</a></code> | <code>string</code> | [Read] dynamodb:DescribeGlobalTable. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeGlobalTableSettings">DescribeGlobalTableSettings</a></code> | <code>string</code> | [Read] dynamodb:DescribeGlobalTableSettings. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeImport">DescribeImport</a></code> | <code>string</code> | [Read] dynamodb:DescribeImport. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeKinesisStreamingDestination">DescribeKinesisStreamingDestination</a></code> | <code>string</code> | [Read] dynamodb:DescribeKinesisStreamingDestination. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeLimits">DescribeLimits</a></code> | <code>string</code> | [Read] dynamodb:DescribeLimits. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeReservedCapacity">DescribeReservedCapacity</a></code> | <code>string</code> | [Read] dynamodb:DescribeReservedCapacity. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeReservedCapacityOfferings">DescribeReservedCapacityOfferings</a></code> | <code>string</code> | [Read] dynamodb:DescribeReservedCapacityOfferings. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeStream">DescribeStream</a></code> | <code>string</code> | [Read] dynamodb:DescribeStream. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeTable">DescribeTable</a></code> | <code>string</code> | [Read] dynamodb:DescribeTable. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeTableReplicaAutoScaling">DescribeTableReplicaAutoScaling</a></code> | <code>string</code> | [Read] dynamodb:DescribeTableReplicaAutoScaling. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeTimeToLive">DescribeTimeToLive</a></code> | <code>string</code> | [Read] dynamodb:DescribeTimeToLive. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.DisableKinesisStreamingDestination">DisableKinesisStreamingDestination</a></code> | <code>string</code> | [Write] dynamodb:DisableKinesisStreamingDestination. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.EnableKinesisStreamingDestination">EnableKinesisStreamingDestination</a></code> | <code>string</code> | [Write] dynamodb:EnableKinesisStreamingDestination. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ExportTableToPointInTime">ExportTableToPointInTime</a></code> | <code>string</code> | [Write] dynamodb:ExportTableToPointInTime. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ImportTable">ImportTable</a></code> | <code>string</code> | [Write] dynamodb:ImportTable. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.InjectError">InjectError</a></code> | <code>string</code> | [Write] dynamodb:InjectError. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListBackups">ListBackups</a></code> | <code>string</code> | [List] dynamodb:ListBackups. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListContributorInsights">ListContributorInsights</a></code> | <code>string</code> | [List] dynamodb:ListContributorInsights. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListExports">ListExports</a></code> | <code>string</code> | [List] dynamodb:ListExports. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListGlobalTables">ListGlobalTables</a></code> | <code>string</code> | [List] dynamodb:ListGlobalTables. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListImports">ListImports</a></code> | <code>string</code> | [List] dynamodb:ListImports. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListStreams">ListStreams</a></code> | <code>string</code> | [Read] dynamodb:ListStreams. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListTables">ListTables</a></code> | <code>string</code> | [List] dynamodb:ListTables. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListTagsOfResource">ListTagsOfResource</a></code> | <code>string</code> | [Read] dynamodb:ListTagsOfResource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.PartiQLDelete">PartiQLDelete</a></code> | <code>string</code> | [Write] dynamodb:PartiQLDelete. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.PartiQLInsert">PartiQLInsert</a></code> | <code>string</code> | [Write] dynamodb:PartiQLInsert. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.PartiQLSelect">PartiQLSelect</a></code> | <code>string</code> | [Read] dynamodb:PartiQLSelect. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.PartiQLUpdate">PartiQLUpdate</a></code> | <code>string</code> | [Write] dynamodb:PartiQLUpdate. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.PurchaseReservedCapacityOfferings">PurchaseReservedCapacityOfferings</a></code> | <code>string</code> | [Write] dynamodb:PurchaseReservedCapacityOfferings. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.PutItem">PutItem</a></code> | <code>string</code> | [Write] dynamodb:PutItem. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] dynamodb:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.Query">Query</a></code> | <code>string</code> | [Read] dynamodb:Query. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ReadDataForReplication">ReadDataForReplication</a></code> | <code>string</code> | [Read] dynamodb:ReadDataForReplication. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.ReplicateSettings">ReplicateSettings</a></code> | <code>string</code> | [Write] dynamodb:ReplicateSettings. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.RestoreTableFromAwsBackup">RestoreTableFromAwsBackup</a></code> | <code>string</code> | [Write] dynamodb:RestoreTableFromAwsBackup. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.RestoreTableFromBackup">RestoreTableFromBackup</a></code> | <code>string</code> | [Write] dynamodb:RestoreTableFromBackup. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.RestoreTableToPointInTime">RestoreTableToPointInTime</a></code> | <code>string</code> | [Write] dynamodb:RestoreTableToPointInTime. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.Scan">Scan</a></code> | <code>string</code> | [Read] dynamodb:Scan. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.SearchVectors">SearchVectors</a></code> | <code>string</code> | [Read] dynamodb:SearchVectors. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.StartAwsBackupJob">StartAwsBackupJob</a></code> | <code>string</code> | [Write] dynamodb:StartAwsBackupJob. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] dynamodb:TagResource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] dynamodb:UntagResource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateAbacStatus">UpdateAbacStatus</a></code> | <code>string</code> | [PermissionManagement] dynamodb:UpdateAbacStatus. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateContinuousBackups">UpdateContinuousBackups</a></code> | <code>string</code> | [Write] dynamodb:UpdateContinuousBackups. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateContributorInsights">UpdateContributorInsights</a></code> | <code>string</code> | [Write] dynamodb:UpdateContributorInsights. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateGlobalTable">UpdateGlobalTable</a></code> | <code>string</code> | [Write] dynamodb:UpdateGlobalTable. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateGlobalTableSettings">UpdateGlobalTableSettings</a></code> | <code>string</code> | [Write] dynamodb:UpdateGlobalTableSettings. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateGlobalTableVersion">UpdateGlobalTableVersion</a></code> | <code>string</code> | [Write] dynamodb:UpdateGlobalTableVersion. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateItem">UpdateItem</a></code> | <code>string</code> | [Write] dynamodb:UpdateItem. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateKinesisStreamingDestination">UpdateKinesisStreamingDestination</a></code> | <code>string</code> | [Write] dynamodb:UpdateKinesisStreamingDestination. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateTable">UpdateTable</a></code> | <code>string</code> | [Write] dynamodb:UpdateTable. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateTableReplicaAutoScaling">UpdateTableReplicaAutoScaling</a></code> | <code>string</code> | [Write] dynamodb:UpdateTableReplicaAutoScaling. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateTimeToLive">UpdateTimeToLive</a></code> | <code>string</code> | [Write] dynamodb:UpdateTimeToLive. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBActions.property.WriteDataForReplication">WriteDataForReplication</a></code> | <code>string</code> | [Write] dynamodb:WriteDataForReplication. |

---

##### `actionGetAbacStatus`<sup>Required</sup> <a name="actionGetAbacStatus" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.actionGetAbacStatus"></a>

```typescript
public readonly actionGetAbacStatus: string;
```

- *Type:* string

[Read] dynamodb:GetAbacStatus.

---

##### `actionGetItem`<sup>Required</sup> <a name="actionGetItem" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.actionGetItem"></a>

```typescript
public readonly actionGetItem: string;
```

- *Type:* string

[Read] dynamodb:GetItem.

---

##### `actionGetRecords`<sup>Required</sup> <a name="actionGetRecords" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.actionGetRecords"></a>

```typescript
public readonly actionGetRecords: string;
```

- *Type:* string

[Read] dynamodb:GetRecords.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] dynamodb:GetResourcePolicy.

---

##### `actionGetShardIterator`<sup>Required</sup> <a name="actionGetShardIterator" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.actionGetShardIterator"></a>

```typescript
public readonly actionGetShardIterator: string;
```

- *Type:* string

[Read] dynamodb:GetShardIterator.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateTableReplica`<sup>Required</sup> <a name="AssociateTableReplica" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.AssociateTableReplica"></a>

```typescript
public readonly AssociateTableReplica: string;
```

- *Type:* string

[Write] dynamodb:AssociateTableReplica.

---

##### `BatchGetItem`<sup>Required</sup> <a name="BatchGetItem" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.BatchGetItem"></a>

```typescript
public readonly BatchGetItem: string;
```

- *Type:* string

[Read] dynamodb:BatchGetItem.

---

##### `BatchWriteItem`<sup>Required</sup> <a name="BatchWriteItem" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.BatchWriteItem"></a>

```typescript
public readonly BatchWriteItem: string;
```

- *Type:* string

[Write] dynamodb:BatchWriteItem.

---

##### `ConditionCheckItem`<sup>Required</sup> <a name="ConditionCheckItem" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ConditionCheckItem"></a>

```typescript
public readonly ConditionCheckItem: string;
```

- *Type:* string

[Read] dynamodb:ConditionCheckItem.

---

##### `CreateBackup`<sup>Required</sup> <a name="CreateBackup" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.CreateBackup"></a>

```typescript
public readonly CreateBackup: string;
```

- *Type:* string

[Write] dynamodb:CreateBackup.

---

##### `CreateGlobalTable`<sup>Required</sup> <a name="CreateGlobalTable" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.CreateGlobalTable"></a>

```typescript
public readonly CreateGlobalTable: string;
```

- *Type:* string

[Write] dynamodb:CreateGlobalTable.

---

##### `CreateGlobalTableWitness`<sup>Required</sup> <a name="CreateGlobalTableWitness" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.CreateGlobalTableWitness"></a>

```typescript
public readonly CreateGlobalTableWitness: string;
```

- *Type:* string

[Write] dynamodb:CreateGlobalTableWitness.

---

##### `CreateTable`<sup>Required</sup> <a name="CreateTable" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.CreateTable"></a>

```typescript
public readonly CreateTable: string;
```

- *Type:* string

[Write] dynamodb:CreateTable.

---

##### `CreateTableReplica`<sup>Required</sup> <a name="CreateTableReplica" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.CreateTableReplica"></a>

```typescript
public readonly CreateTableReplica: string;
```

- *Type:* string

[Write] dynamodb:CreateTableReplica.

---

##### `DeleteBackup`<sup>Required</sup> <a name="DeleteBackup" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteBackup"></a>

```typescript
public readonly DeleteBackup: string;
```

- *Type:* string

[Write] dynamodb:DeleteBackup.

---

##### `DeleteGlobalTableWitness`<sup>Required</sup> <a name="DeleteGlobalTableWitness" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteGlobalTableWitness"></a>

```typescript
public readonly DeleteGlobalTableWitness: string;
```

- *Type:* string

[Write] dynamodb:DeleteGlobalTableWitness.

---

##### `DeleteItem`<sup>Required</sup> <a name="DeleteItem" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteItem"></a>

```typescript
public readonly DeleteItem: string;
```

- *Type:* string

[Write] dynamodb:DeleteItem.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] dynamodb:DeleteResourcePolicy.

---

##### `DeleteTable`<sup>Required</sup> <a name="DeleteTable" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteTable"></a>

```typescript
public readonly DeleteTable: string;
```

- *Type:* string

[Write] dynamodb:DeleteTable.

---

##### `DeleteTableReplica`<sup>Required</sup> <a name="DeleteTableReplica" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DeleteTableReplica"></a>

```typescript
public readonly DeleteTableReplica: string;
```

- *Type:* string

[Write] dynamodb:DeleteTableReplica.

---

##### `DescribeBackup`<sup>Required</sup> <a name="DescribeBackup" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeBackup"></a>

```typescript
public readonly DescribeBackup: string;
```

- *Type:* string

[Read] dynamodb:DescribeBackup.

---

##### `DescribeContinuousBackups`<sup>Required</sup> <a name="DescribeContinuousBackups" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeContinuousBackups"></a>

```typescript
public readonly DescribeContinuousBackups: string;
```

- *Type:* string

[Read] dynamodb:DescribeContinuousBackups.

---

##### `DescribeContributorInsights`<sup>Required</sup> <a name="DescribeContributorInsights" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeContributorInsights"></a>

```typescript
public readonly DescribeContributorInsights: string;
```

- *Type:* string

[Read] dynamodb:DescribeContributorInsights.

---

##### `DescribeEndpoints`<sup>Required</sup> <a name="DescribeEndpoints" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeEndpoints"></a>

```typescript
public readonly DescribeEndpoints: string;
```

- *Type:* string

[Read] dynamodb:DescribeEndpoints.

---

##### `DescribeExport`<sup>Required</sup> <a name="DescribeExport" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeExport"></a>

```typescript
public readonly DescribeExport: string;
```

- *Type:* string

[Read] dynamodb:DescribeExport.

---

##### `DescribeGlobalTable`<sup>Required</sup> <a name="DescribeGlobalTable" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeGlobalTable"></a>

```typescript
public readonly DescribeGlobalTable: string;
```

- *Type:* string

[Read] dynamodb:DescribeGlobalTable.

---

##### `DescribeGlobalTableSettings`<sup>Required</sup> <a name="DescribeGlobalTableSettings" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeGlobalTableSettings"></a>

```typescript
public readonly DescribeGlobalTableSettings: string;
```

- *Type:* string

[Read] dynamodb:DescribeGlobalTableSettings.

---

##### `DescribeImport`<sup>Required</sup> <a name="DescribeImport" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeImport"></a>

```typescript
public readonly DescribeImport: string;
```

- *Type:* string

[Read] dynamodb:DescribeImport.

---

##### `DescribeKinesisStreamingDestination`<sup>Required</sup> <a name="DescribeKinesisStreamingDestination" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeKinesisStreamingDestination"></a>

```typescript
public readonly DescribeKinesisStreamingDestination: string;
```

- *Type:* string

[Read] dynamodb:DescribeKinesisStreamingDestination.

---

##### `DescribeLimits`<sup>Required</sup> <a name="DescribeLimits" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeLimits"></a>

```typescript
public readonly DescribeLimits: string;
```

- *Type:* string

[Read] dynamodb:DescribeLimits.

---

##### `DescribeReservedCapacity`<sup>Required</sup> <a name="DescribeReservedCapacity" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeReservedCapacity"></a>

```typescript
public readonly DescribeReservedCapacity: string;
```

- *Type:* string

[Read] dynamodb:DescribeReservedCapacity.

---

##### `DescribeReservedCapacityOfferings`<sup>Required</sup> <a name="DescribeReservedCapacityOfferings" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeReservedCapacityOfferings"></a>

```typescript
public readonly DescribeReservedCapacityOfferings: string;
```

- *Type:* string

[Read] dynamodb:DescribeReservedCapacityOfferings.

---

##### `DescribeStream`<sup>Required</sup> <a name="DescribeStream" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeStream"></a>

```typescript
public readonly DescribeStream: string;
```

- *Type:* string

[Read] dynamodb:DescribeStream.

---

##### `DescribeTable`<sup>Required</sup> <a name="DescribeTable" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeTable"></a>

```typescript
public readonly DescribeTable: string;
```

- *Type:* string

[Read] dynamodb:DescribeTable.

---

##### `DescribeTableReplicaAutoScaling`<sup>Required</sup> <a name="DescribeTableReplicaAutoScaling" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeTableReplicaAutoScaling"></a>

```typescript
public readonly DescribeTableReplicaAutoScaling: string;
```

- *Type:* string

[Read] dynamodb:DescribeTableReplicaAutoScaling.

---

##### `DescribeTimeToLive`<sup>Required</sup> <a name="DescribeTimeToLive" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DescribeTimeToLive"></a>

```typescript
public readonly DescribeTimeToLive: string;
```

- *Type:* string

[Read] dynamodb:DescribeTimeToLive.

---

##### `DisableKinesisStreamingDestination`<sup>Required</sup> <a name="DisableKinesisStreamingDestination" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.DisableKinesisStreamingDestination"></a>

```typescript
public readonly DisableKinesisStreamingDestination: string;
```

- *Type:* string

[Write] dynamodb:DisableKinesisStreamingDestination.

---

##### `EnableKinesisStreamingDestination`<sup>Required</sup> <a name="EnableKinesisStreamingDestination" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.EnableKinesisStreamingDestination"></a>

```typescript
public readonly EnableKinesisStreamingDestination: string;
```

- *Type:* string

[Write] dynamodb:EnableKinesisStreamingDestination.

---

##### `ExportTableToPointInTime`<sup>Required</sup> <a name="ExportTableToPointInTime" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ExportTableToPointInTime"></a>

```typescript
public readonly ExportTableToPointInTime: string;
```

- *Type:* string

[Write] dynamodb:ExportTableToPointInTime.

---

##### `ImportTable`<sup>Required</sup> <a name="ImportTable" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ImportTable"></a>

```typescript
public readonly ImportTable: string;
```

- *Type:* string

[Write] dynamodb:ImportTable.

---

##### `InjectError`<sup>Required</sup> <a name="InjectError" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.InjectError"></a>

```typescript
public readonly InjectError: string;
```

- *Type:* string

[Write] dynamodb:InjectError.

---

##### `ListBackups`<sup>Required</sup> <a name="ListBackups" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListBackups"></a>

```typescript
public readonly ListBackups: string;
```

- *Type:* string

[List] dynamodb:ListBackups.

---

##### `ListContributorInsights`<sup>Required</sup> <a name="ListContributorInsights" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListContributorInsights"></a>

```typescript
public readonly ListContributorInsights: string;
```

- *Type:* string

[List] dynamodb:ListContributorInsights.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListExports"></a>

```typescript
public readonly ListExports: string;
```

- *Type:* string

[List] dynamodb:ListExports.

---

##### `ListGlobalTables`<sup>Required</sup> <a name="ListGlobalTables" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListGlobalTables"></a>

```typescript
public readonly ListGlobalTables: string;
```

- *Type:* string

[List] dynamodb:ListGlobalTables.

---

##### `ListImports`<sup>Required</sup> <a name="ListImports" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListImports"></a>

```typescript
public readonly ListImports: string;
```

- *Type:* string

[List] dynamodb:ListImports.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListStreams"></a>

```typescript
public readonly ListStreams: string;
```

- *Type:* string

[Read] dynamodb:ListStreams.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListTables"></a>

```typescript
public readonly ListTables: string;
```

- *Type:* string

[List] dynamodb:ListTables.

---

##### `ListTagsOfResource`<sup>Required</sup> <a name="ListTagsOfResource" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ListTagsOfResource"></a>

```typescript
public readonly ListTagsOfResource: string;
```

- *Type:* string

[Read] dynamodb:ListTagsOfResource.

---

##### `PartiQLDelete`<sup>Required</sup> <a name="PartiQLDelete" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.PartiQLDelete"></a>

```typescript
public readonly PartiQLDelete: string;
```

- *Type:* string

[Write] dynamodb:PartiQLDelete.

---

##### `PartiQLInsert`<sup>Required</sup> <a name="PartiQLInsert" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.PartiQLInsert"></a>

```typescript
public readonly PartiQLInsert: string;
```

- *Type:* string

[Write] dynamodb:PartiQLInsert.

---

##### `PartiQLSelect`<sup>Required</sup> <a name="PartiQLSelect" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.PartiQLSelect"></a>

```typescript
public readonly PartiQLSelect: string;
```

- *Type:* string

[Read] dynamodb:PartiQLSelect.

---

##### `PartiQLUpdate`<sup>Required</sup> <a name="PartiQLUpdate" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.PartiQLUpdate"></a>

```typescript
public readonly PartiQLUpdate: string;
```

- *Type:* string

[Write] dynamodb:PartiQLUpdate.

---

##### `PurchaseReservedCapacityOfferings`<sup>Required</sup> <a name="PurchaseReservedCapacityOfferings" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.PurchaseReservedCapacityOfferings"></a>

```typescript
public readonly PurchaseReservedCapacityOfferings: string;
```

- *Type:* string

[Write] dynamodb:PurchaseReservedCapacityOfferings.

---

##### `PutItem`<sup>Required</sup> <a name="PutItem" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.PutItem"></a>

```typescript
public readonly PutItem: string;
```

- *Type:* string

[Write] dynamodb:PutItem.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] dynamodb:PutResourcePolicy.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.Query"></a>

```typescript
public readonly Query: string;
```

- *Type:* string

[Read] dynamodb:Query.

---

##### `ReadDataForReplication`<sup>Required</sup> <a name="ReadDataForReplication" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ReadDataForReplication"></a>

```typescript
public readonly ReadDataForReplication: string;
```

- *Type:* string

[Read] dynamodb:ReadDataForReplication.

---

##### `ReplicateSettings`<sup>Required</sup> <a name="ReplicateSettings" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.ReplicateSettings"></a>

```typescript
public readonly ReplicateSettings: string;
```

- *Type:* string

[Write] dynamodb:ReplicateSettings.

---

##### `RestoreTableFromAwsBackup`<sup>Required</sup> <a name="RestoreTableFromAwsBackup" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.RestoreTableFromAwsBackup"></a>

```typescript
public readonly RestoreTableFromAwsBackup: string;
```

- *Type:* string

[Write] dynamodb:RestoreTableFromAwsBackup.

---

##### `RestoreTableFromBackup`<sup>Required</sup> <a name="RestoreTableFromBackup" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.RestoreTableFromBackup"></a>

```typescript
public readonly RestoreTableFromBackup: string;
```

- *Type:* string

[Write] dynamodb:RestoreTableFromBackup.

---

##### `RestoreTableToPointInTime`<sup>Required</sup> <a name="RestoreTableToPointInTime" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.RestoreTableToPointInTime"></a>

```typescript
public readonly RestoreTableToPointInTime: string;
```

- *Type:* string

[Write] dynamodb:RestoreTableToPointInTime.

---

##### `Scan`<sup>Required</sup> <a name="Scan" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.Scan"></a>

```typescript
public readonly Scan: string;
```

- *Type:* string

[Read] dynamodb:Scan.

---

##### `SearchVectors`<sup>Required</sup> <a name="SearchVectors" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.SearchVectors"></a>

```typescript
public readonly SearchVectors: string;
```

- *Type:* string

[Read] dynamodb:SearchVectors.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAwsBackupJob`<sup>Required</sup> <a name="StartAwsBackupJob" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.StartAwsBackupJob"></a>

```typescript
public readonly StartAwsBackupJob: string;
```

- *Type:* string

[Write] dynamodb:StartAwsBackupJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] dynamodb:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] dynamodb:UntagResource.

---

##### `UpdateAbacStatus`<sup>Required</sup> <a name="UpdateAbacStatus" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateAbacStatus"></a>

```typescript
public readonly UpdateAbacStatus: string;
```

- *Type:* string

[PermissionManagement] dynamodb:UpdateAbacStatus.

---

##### `UpdateContinuousBackups`<sup>Required</sup> <a name="UpdateContinuousBackups" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateContinuousBackups"></a>

```typescript
public readonly UpdateContinuousBackups: string;
```

- *Type:* string

[Write] dynamodb:UpdateContinuousBackups.

---

##### `UpdateContributorInsights`<sup>Required</sup> <a name="UpdateContributorInsights" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateContributorInsights"></a>

```typescript
public readonly UpdateContributorInsights: string;
```

- *Type:* string

[Write] dynamodb:UpdateContributorInsights.

---

##### `UpdateGlobalTable`<sup>Required</sup> <a name="UpdateGlobalTable" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateGlobalTable"></a>

```typescript
public readonly UpdateGlobalTable: string;
```

- *Type:* string

[Write] dynamodb:UpdateGlobalTable.

---

##### `UpdateGlobalTableSettings`<sup>Required</sup> <a name="UpdateGlobalTableSettings" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateGlobalTableSettings"></a>

```typescript
public readonly UpdateGlobalTableSettings: string;
```

- *Type:* string

[Write] dynamodb:UpdateGlobalTableSettings.

---

##### `UpdateGlobalTableVersion`<sup>Required</sup> <a name="UpdateGlobalTableVersion" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateGlobalTableVersion"></a>

```typescript
public readonly UpdateGlobalTableVersion: string;
```

- *Type:* string

[Write] dynamodb:UpdateGlobalTableVersion.

---

##### `UpdateItem`<sup>Required</sup> <a name="UpdateItem" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateItem"></a>

```typescript
public readonly UpdateItem: string;
```

- *Type:* string

[Write] dynamodb:UpdateItem.

---

##### `UpdateKinesisStreamingDestination`<sup>Required</sup> <a name="UpdateKinesisStreamingDestination" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateKinesisStreamingDestination"></a>

```typescript
public readonly UpdateKinesisStreamingDestination: string;
```

- *Type:* string

[Write] dynamodb:UpdateKinesisStreamingDestination.

---

##### `UpdateTable`<sup>Required</sup> <a name="UpdateTable" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateTable"></a>

```typescript
public readonly UpdateTable: string;
```

- *Type:* string

[Write] dynamodb:UpdateTable.

---

##### `UpdateTableReplicaAutoScaling`<sup>Required</sup> <a name="UpdateTableReplicaAutoScaling" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateTableReplicaAutoScaling"></a>

```typescript
public readonly UpdateTableReplicaAutoScaling: string;
```

- *Type:* string

[Write] dynamodb:UpdateTableReplicaAutoScaling.

---

##### `UpdateTimeToLive`<sup>Required</sup> <a name="UpdateTimeToLive" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.UpdateTimeToLive"></a>

```typescript
public readonly UpdateTimeToLive: string;
```

- *Type:* string

[Write] dynamodb:UpdateTimeToLive.

---

##### `WriteDataForReplication`<sup>Required</sup> <a name="WriteDataForReplication" id="@cdk_utils/iam.dynamodb.DynamoDBActions.property.WriteDataForReplication"></a>

```typescript
public readonly WriteDataForReplication: string;
```

- *Type:* string

[Write] dynamodb:WriteDataForReplication.

---

### DynamoDBConditions <a name="DynamoDBConditions" id="@cdk_utils/iam.dynamodb.DynamoDBConditions"></a>

Condition key constants and builders for dynamodb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

new dynamodb.DynamoDBConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.attributes">attributes</a></code> | Generates a condition block for `dynamodb:Attributes`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.enclosingOperation">enclosingOperation</a></code> | Generates a condition block for `dynamodb:EnclosingOperation`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.firstPartitionKeyValues">firstPartitionKeyValues</a></code> | Generates a condition block for `dynamodb:FirstPartitionKeyValues`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.fisActionId">fisActionId</a></code> | Generates a condition block for `dynamodb:FisActionId`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.fisTargetArns">fisTargetArns</a></code> | Generates a condition block for `dynamodb:FisTargetArns`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.fourthPartitionKeyValues">fourthPartitionKeyValues</a></code> | Generates a condition block for `dynamodb:FourthPartitionKeyValues`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.fullTableScan">fullTableScan</a></code> | Generates a condition block for `dynamodb:FullTableScan`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.leadingKeys">leadingKeys</a></code> | Generates a condition block for `dynamodb:LeadingKeys`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.returnConsumedCapacity">returnConsumedCapacity</a></code> | Generates a condition block for `dynamodb:ReturnConsumedCapacity`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.returnValues">returnValues</a></code> | Generates a condition block for `dynamodb:ReturnValues`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.secondPartitionKeyValues">secondPartitionKeyValues</a></code> | Generates a condition block for `dynamodb:SecondPartitionKeyValues`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.select">select</a></code> | Generates a condition block for `dynamodb:Select`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.thirdPartitionKeyValues">thirdPartitionKeyValues</a></code> | Generates a condition block for `dynamodb:ThirdPartitionKeyValues`. |

---

##### `attributes` <a name="attributes" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.attributes"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.attributes(values: string[])
```

Generates a condition block for `dynamodb:Attributes`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.attributes.parameter.values"></a>

- *Type:* string[]

---

##### `enclosingOperation` <a name="enclosingOperation" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.enclosingOperation"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.enclosingOperation(value: string)
```

Generates a condition block for `dynamodb:EnclosingOperation`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.enclosingOperation.parameter.value"></a>

- *Type:* string

---

##### `firstPartitionKeyValues` <a name="firstPartitionKeyValues" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.firstPartitionKeyValues"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.firstPartitionKeyValues(values: string[])
```

Generates a condition block for `dynamodb:FirstPartitionKeyValues`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.firstPartitionKeyValues.parameter.values"></a>

- *Type:* string[]

---

##### `fisActionId` <a name="fisActionId" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.fisActionId"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.fisActionId(value: string)
```

Generates a condition block for `dynamodb:FisActionId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.fisActionId.parameter.value"></a>

- *Type:* string

---

##### `fisTargetArns` <a name="fisTargetArns" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.fisTargetArns"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.fisTargetArns(values: string[])
```

Generates a condition block for `dynamodb:FisTargetArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.fisTargetArns.parameter.values"></a>

- *Type:* string[]

---

##### `fourthPartitionKeyValues` <a name="fourthPartitionKeyValues" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.fourthPartitionKeyValues"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.fourthPartitionKeyValues(values: string[])
```

Generates a condition block for `dynamodb:FourthPartitionKeyValues`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.fourthPartitionKeyValues.parameter.values"></a>

- *Type:* string[]

---

##### `fullTableScan` <a name="fullTableScan" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.fullTableScan"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.fullTableScan(value: boolean)
```

Generates a condition block for `dynamodb:FullTableScan`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.fullTableScan.parameter.value"></a>

- *Type:* boolean

---

##### `leadingKeys` <a name="leadingKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.leadingKeys"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.leadingKeys(values: string[])
```

Generates a condition block for `dynamodb:LeadingKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.leadingKeys.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.requestTag"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.resourceTag"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `returnConsumedCapacity` <a name="returnConsumedCapacity" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.returnConsumedCapacity"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.returnConsumedCapacity(value: string)
```

Generates a condition block for `dynamodb:ReturnConsumedCapacity`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.returnConsumedCapacity.parameter.value"></a>

- *Type:* string

---

##### `returnValues` <a name="returnValues" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.returnValues"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.returnValues(value: string)
```

Generates a condition block for `dynamodb:ReturnValues`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.returnValues.parameter.value"></a>

- *Type:* string

---

##### `secondPartitionKeyValues` <a name="secondPartitionKeyValues" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.secondPartitionKeyValues"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.secondPartitionKeyValues(values: string[])
```

Generates a condition block for `dynamodb:SecondPartitionKeyValues`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.secondPartitionKeyValues.parameter.values"></a>

- *Type:* string[]

---

##### `select` <a name="select" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.select"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.select(value: string)
```

Generates a condition block for `dynamodb:Select`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.select.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.tagKeys"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `thirdPartitionKeyValues` <a name="thirdPartitionKeyValues" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.thirdPartitionKeyValues"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBConditions.thirdPartitionKeyValues(values: string[])
```

Generates a condition block for `dynamodb:ThirdPartitionKeyValues`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.thirdPartitionKeyValues.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.actionGetItemConditionKeys">actionGetItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetItem action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.ATTRIBUTES">ATTRIBUTES</a></code> | <code>string</code> | Condition key: dynamodb:Attributes (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.BatchGetItemConditionKeys">BatchGetItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchGetItem action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.BatchWriteItemConditionKeys">BatchWriteItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchWriteItem action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.ConditionCheckItemConditionKeys">ConditionCheckItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ConditionCheckItem action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.CreateTableConditionKeys">CreateTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTable action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.DeleteItemConditionKeys">DeleteItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteItem action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.ENCLOSING_OPERATION">ENCLOSING_OPERATION</a></code> | <code>string</code> | Condition key: dynamodb:EnclosingOperation (String). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.FIRST_PARTITION_KEY_VALUES">FIRST_PARTITION_KEY_VALUES</a></code> | <code>string</code> | Condition key: dynamodb:FirstPartitionKeyValues (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.FIS_ACTION_ID">FIS_ACTION_ID</a></code> | <code>string</code> | Condition key: dynamodb:FisActionId (String). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.FIS_TARGET_ARNS">FIS_TARGET_ARNS</a></code> | <code>string</code> | Condition key: dynamodb:FisTargetArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.FOURTH_PARTITION_KEY_VALUES">FOURTH_PARTITION_KEY_VALUES</a></code> | <code>string</code> | Condition key: dynamodb:FourthPartitionKeyValues (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.FULL_TABLE_SCAN">FULL_TABLE_SCAN</a></code> | <code>string</code> | Condition key: dynamodb:FullTableScan (Bool). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.InjectErrorConditionKeys">InjectErrorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InjectError action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.LEADING_KEYS">LEADING_KEYS</a></code> | <code>string</code> | Condition key: dynamodb:LeadingKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.PartiQLDeleteConditionKeys">PartiQLDeleteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PartiQLDelete action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.PartiQLInsertConditionKeys">PartiQLInsertConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PartiQLInsert action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.PartiQLSelectConditionKeys">PartiQLSelectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PartiQLSelect action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.PartiQLUpdateConditionKeys">PartiQLUpdateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PartiQLUpdate action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.PutItemConditionKeys">PutItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutItem action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.QueryConditionKeys">QueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Query action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.RETURN_CONSUMED_CAPACITY">RETURN_CONSUMED_CAPACITY</a></code> | <code>string</code> | Condition key: dynamodb:ReturnConsumedCapacity (String). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.RETURN_VALUES">RETURN_VALUES</a></code> | <code>string</code> | Condition key: dynamodb:ReturnValues (String). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.ScanConditionKeys">ScanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Scan action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.SECOND_PARTITION_KEY_VALUES">SECOND_PARTITION_KEY_VALUES</a></code> | <code>string</code> | Condition key: dynamodb:SecondPartitionKeyValues (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.SELECT">SELECT</a></code> | <code>string</code> | Condition key: dynamodb:Select (String). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.THIRD_PARTITION_KEY_VALUES">THIRD_PARTITION_KEY_VALUES</a></code> | <code>string</code> | Condition key: dynamodb:ThirdPartitionKeyValues (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBConditions.property.UpdateItemConditionKeys">UpdateItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateItem action. |

---

##### `actionGetItemConditionKeys`<sup>Required</sup> <a name="actionGetItemConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.actionGetItemConditionKeys"></a>

```typescript
public readonly actionGetItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetItem action.

---

##### `ATTRIBUTES`<sup>Required</sup> <a name="ATTRIBUTES" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.ATTRIBUTES"></a>

```typescript
public readonly ATTRIBUTES: string;
```

- *Type:* string

Condition key: dynamodb:Attributes (ArrayOfString).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchGetItemConditionKeys`<sup>Required</sup> <a name="BatchGetItemConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.BatchGetItemConditionKeys"></a>

```typescript
public readonly BatchGetItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchGetItem action.

---

##### `BatchWriteItemConditionKeys`<sup>Required</sup> <a name="BatchWriteItemConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.BatchWriteItemConditionKeys"></a>

```typescript
public readonly BatchWriteItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchWriteItem action.

---

##### `ConditionCheckItemConditionKeys`<sup>Required</sup> <a name="ConditionCheckItemConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.ConditionCheckItemConditionKeys"></a>

```typescript
public readonly ConditionCheckItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ConditionCheckItem action.

---

##### `CreateTableConditionKeys`<sup>Required</sup> <a name="CreateTableConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.CreateTableConditionKeys"></a>

```typescript
public readonly CreateTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTable action.

---

##### `DeleteItemConditionKeys`<sup>Required</sup> <a name="DeleteItemConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.DeleteItemConditionKeys"></a>

```typescript
public readonly DeleteItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteItem action.

---

##### `ENCLOSING_OPERATION`<sup>Required</sup> <a name="ENCLOSING_OPERATION" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.ENCLOSING_OPERATION"></a>

```typescript
public readonly ENCLOSING_OPERATION: string;
```

- *Type:* string

Condition key: dynamodb:EnclosingOperation (String).

---

##### `FIRST_PARTITION_KEY_VALUES`<sup>Required</sup> <a name="FIRST_PARTITION_KEY_VALUES" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.FIRST_PARTITION_KEY_VALUES"></a>

```typescript
public readonly FIRST_PARTITION_KEY_VALUES: string;
```

- *Type:* string

Condition key: dynamodb:FirstPartitionKeyValues (ArrayOfString).

---

##### `FIS_ACTION_ID`<sup>Required</sup> <a name="FIS_ACTION_ID" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.FIS_ACTION_ID"></a>

```typescript
public readonly FIS_ACTION_ID: string;
```

- *Type:* string

Condition key: dynamodb:FisActionId (String).

---

##### `FIS_TARGET_ARNS`<sup>Required</sup> <a name="FIS_TARGET_ARNS" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.FIS_TARGET_ARNS"></a>

```typescript
public readonly FIS_TARGET_ARNS: string;
```

- *Type:* string

Condition key: dynamodb:FisTargetArns (ArrayOfARN).

---

##### `FOURTH_PARTITION_KEY_VALUES`<sup>Required</sup> <a name="FOURTH_PARTITION_KEY_VALUES" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.FOURTH_PARTITION_KEY_VALUES"></a>

```typescript
public readonly FOURTH_PARTITION_KEY_VALUES: string;
```

- *Type:* string

Condition key: dynamodb:FourthPartitionKeyValues (ArrayOfString).

---

##### `FULL_TABLE_SCAN`<sup>Required</sup> <a name="FULL_TABLE_SCAN" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.FULL_TABLE_SCAN"></a>

```typescript
public readonly FULL_TABLE_SCAN: string;
```

- *Type:* string

Condition key: dynamodb:FullTableScan (Bool).

---

##### `InjectErrorConditionKeys`<sup>Required</sup> <a name="InjectErrorConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.InjectErrorConditionKeys"></a>

```typescript
public readonly InjectErrorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InjectError action.

---

##### `LEADING_KEYS`<sup>Required</sup> <a name="LEADING_KEYS" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.LEADING_KEYS"></a>

```typescript
public readonly LEADING_KEYS: string;
```

- *Type:* string

Condition key: dynamodb:LeadingKeys (ArrayOfString).

---

##### `PartiQLDeleteConditionKeys`<sup>Required</sup> <a name="PartiQLDeleteConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.PartiQLDeleteConditionKeys"></a>

```typescript
public readonly PartiQLDeleteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PartiQLDelete action.

---

##### `PartiQLInsertConditionKeys`<sup>Required</sup> <a name="PartiQLInsertConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.PartiQLInsertConditionKeys"></a>

```typescript
public readonly PartiQLInsertConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PartiQLInsert action.

---

##### `PartiQLSelectConditionKeys`<sup>Required</sup> <a name="PartiQLSelectConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.PartiQLSelectConditionKeys"></a>

```typescript
public readonly PartiQLSelectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PartiQLSelect action.

---

##### `PartiQLUpdateConditionKeys`<sup>Required</sup> <a name="PartiQLUpdateConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.PartiQLUpdateConditionKeys"></a>

```typescript
public readonly PartiQLUpdateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PartiQLUpdate action.

---

##### `PutItemConditionKeys`<sup>Required</sup> <a name="PutItemConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.PutItemConditionKeys"></a>

```typescript
public readonly PutItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutItem action.

---

##### `QueryConditionKeys`<sup>Required</sup> <a name="QueryConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.QueryConditionKeys"></a>

```typescript
public readonly QueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Query action.

---

##### `RETURN_CONSUMED_CAPACITY`<sup>Required</sup> <a name="RETURN_CONSUMED_CAPACITY" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.RETURN_CONSUMED_CAPACITY"></a>

```typescript
public readonly RETURN_CONSUMED_CAPACITY: string;
```

- *Type:* string

Condition key: dynamodb:ReturnConsumedCapacity (String).

---

##### `RETURN_VALUES`<sup>Required</sup> <a name="RETURN_VALUES" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.RETURN_VALUES"></a>

```typescript
public readonly RETURN_VALUES: string;
```

- *Type:* string

Condition key: dynamodb:ReturnValues (String).

---

##### `ScanConditionKeys`<sup>Required</sup> <a name="ScanConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.ScanConditionKeys"></a>

```typescript
public readonly ScanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Scan action.

---

##### `SECOND_PARTITION_KEY_VALUES`<sup>Required</sup> <a name="SECOND_PARTITION_KEY_VALUES" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.SECOND_PARTITION_KEY_VALUES"></a>

```typescript
public readonly SECOND_PARTITION_KEY_VALUES: string;
```

- *Type:* string

Condition key: dynamodb:SecondPartitionKeyValues (ArrayOfString).

---

##### `SELECT`<sup>Required</sup> <a name="SELECT" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.SELECT"></a>

```typescript
public readonly SELECT: string;
```

- *Type:* string

Condition key: dynamodb:Select (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `THIRD_PARTITION_KEY_VALUES`<sup>Required</sup> <a name="THIRD_PARTITION_KEY_VALUES" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.THIRD_PARTITION_KEY_VALUES"></a>

```typescript
public readonly THIRD_PARTITION_KEY_VALUES: string;
```

- *Type:* string

Condition key: dynamodb:ThirdPartitionKeyValues (ArrayOfString).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateItemConditionKeys`<sup>Required</sup> <a name="UpdateItemConditionKeys" id="@cdk_utils/iam.dynamodb.DynamoDBConditions.property.UpdateItemConditionKeys"></a>

```typescript
public readonly UpdateItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateItem action.

---

### DynamoDBOperations <a name="DynamoDBOperations" id="@cdk_utils/iam.dynamodb.DynamoDBOperations"></a>

API operation to required IAM actions mapping for dynamodb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

new dynamodb.DynamoDBOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.BatchExecuteStatement">BatchExecuteStatement</a></code> | <code>string[]</code> | IAM actions required for the BatchExecuteStatement API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.BatchGetItem">BatchGetItem</a></code> | <code>string[]</code> | IAM actions required for the BatchGetItem API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.BatchWriteItem">BatchWriteItem</a></code> | <code>string[]</code> | IAM actions required for the BatchWriteItem API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.CreateBackup">CreateBackup</a></code> | <code>string[]</code> | IAM actions required for the CreateBackup API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.CreateGlobalTable">CreateGlobalTable</a></code> | <code>string[]</code> | IAM actions required for the CreateGlobalTable API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.CreateTable">CreateTable</a></code> | <code>string[]</code> | IAM actions required for the CreateTable API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DeleteBackup">DeleteBackup</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackup API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DeleteItem">DeleteItem</a></code> | <code>string[]</code> | IAM actions required for the DeleteItem API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DeleteTable">DeleteTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteTable API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeBackup">DescribeBackup</a></code> | <code>string[]</code> | IAM actions required for the DescribeBackup API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeContinuousBackups">DescribeContinuousBackups</a></code> | <code>string[]</code> | IAM actions required for the DescribeContinuousBackups API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeContributorInsights">DescribeContributorInsights</a></code> | <code>string[]</code> | IAM actions required for the DescribeContributorInsights API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeEndpoints">DescribeEndpoints</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpoints API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeExport">DescribeExport</a></code> | <code>string[]</code> | IAM actions required for the DescribeExport API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeGlobalTable">DescribeGlobalTable</a></code> | <code>string[]</code> | IAM actions required for the DescribeGlobalTable API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeGlobalTableSettings">DescribeGlobalTableSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeGlobalTableSettings API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeImport">DescribeImport</a></code> | <code>string[]</code> | IAM actions required for the DescribeImport API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeKinesisStreamingDestination">DescribeKinesisStreamingDestination</a></code> | <code>string[]</code> | IAM actions required for the DescribeKinesisStreamingDestination API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeLimits">DescribeLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeLimits API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeStream">DescribeStream</a></code> | <code>string[]</code> | IAM actions required for the DescribeStream API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeTable">DescribeTable</a></code> | <code>string[]</code> | IAM actions required for the DescribeTable API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeTableReplicaAutoScaling">DescribeTableReplicaAutoScaling</a></code> | <code>string[]</code> | IAM actions required for the DescribeTableReplicaAutoScaling API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeTimeToLive">DescribeTimeToLive</a></code> | <code>string[]</code> | IAM actions required for the DescribeTimeToLive API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DisableKinesisStreamingDestination">DisableKinesisStreamingDestination</a></code> | <code>string[]</code> | IAM actions required for the DisableKinesisStreamingDestination API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.EnableKinesisStreamingDestination">EnableKinesisStreamingDestination</a></code> | <code>string[]</code> | IAM actions required for the EnableKinesisStreamingDestination API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ExecuteStatement">ExecuteStatement</a></code> | <code>string[]</code> | IAM actions required for the ExecuteStatement API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ExecuteTransaction">ExecuteTransaction</a></code> | <code>string[]</code> | IAM actions required for the ExecuteTransaction API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ExportTableToPointInTime">ExportTableToPointInTime</a></code> | <code>string[]</code> | IAM actions required for the ExportTableToPointInTime API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ImportTable">ImportTable</a></code> | <code>string[]</code> | IAM actions required for the ImportTable API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListBackups">ListBackups</a></code> | <code>string[]</code> | IAM actions required for the ListBackups API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListContributorInsights">ListContributorInsights</a></code> | <code>string[]</code> | IAM actions required for the ListContributorInsights API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListExports">ListExports</a></code> | <code>string[]</code> | IAM actions required for the ListExports API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListGlobalTables">ListGlobalTables</a></code> | <code>string[]</code> | IAM actions required for the ListGlobalTables API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListImports">ListImports</a></code> | <code>string[]</code> | IAM actions required for the ListImports API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListStreams">ListStreams</a></code> | <code>string[]</code> | IAM actions required for the ListStreams API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListTables">ListTables</a></code> | <code>string[]</code> | IAM actions required for the ListTables API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListTagsOfResource">ListTagsOfResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsOfResource API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.opGetItem">opGetItem</a></code> | <code>string[]</code> | IAM actions required for the GetItem API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.opGetRecords">opGetRecords</a></code> | <code>string[]</code> | IAM actions required for the GetRecords API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.opGetShardIterator">opGetShardIterator</a></code> | <code>string[]</code> | IAM actions required for the GetShardIterator API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.PutItem">PutItem</a></code> | <code>string[]</code> | IAM actions required for the PutItem API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.Query">Query</a></code> | <code>string[]</code> | IAM actions required for the Query API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.RestoreTableFromBackup">RestoreTableFromBackup</a></code> | <code>string[]</code> | IAM actions required for the RestoreTableFromBackup API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.RestoreTableToPointInTime">RestoreTableToPointInTime</a></code> | <code>string[]</code> | IAM actions required for the RestoreTableToPointInTime API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.Scan">Scan</a></code> | <code>string[]</code> | IAM actions required for the Scan API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.SearchVectors">SearchVectors</a></code> | <code>string[]</code> | IAM actions required for the SearchVectors API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.TransactGetItems">TransactGetItems</a></code> | <code>string[]</code> | IAM actions required for the TransactGetItems API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.TransactWriteItems">TransactWriteItems</a></code> | <code>string[]</code> | IAM actions required for the TransactWriteItems API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateContinuousBackups">UpdateContinuousBackups</a></code> | <code>string[]</code> | IAM actions required for the UpdateContinuousBackups API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateContributorInsights">UpdateContributorInsights</a></code> | <code>string[]</code> | IAM actions required for the UpdateContributorInsights API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateGlobalTable">UpdateGlobalTable</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlobalTable API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateGlobalTableSettings">UpdateGlobalTableSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlobalTableSettings API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateItem">UpdateItem</a></code> | <code>string[]</code> | IAM actions required for the UpdateItem API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateKinesisStreamingDestination">UpdateKinesisStreamingDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateKinesisStreamingDestination API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateTable">UpdateTable</a></code> | <code>string[]</code> | IAM actions required for the UpdateTable API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateTableReplicaAutoScaling">UpdateTableReplicaAutoScaling</a></code> | <code>string[]</code> | IAM actions required for the UpdateTableReplicaAutoScaling API call. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateTimeToLive">UpdateTimeToLive</a></code> | <code>string[]</code> | IAM actions required for the UpdateTimeToLive API call. |

---

##### `BatchExecuteStatement`<sup>Required</sup> <a name="BatchExecuteStatement" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.BatchExecuteStatement"></a>

```typescript
public readonly BatchExecuteStatement: string[];
```

- *Type:* string[]

IAM actions required for the BatchExecuteStatement API call.

---

##### `BatchGetItem`<sup>Required</sup> <a name="BatchGetItem" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.BatchGetItem"></a>

```typescript
public readonly BatchGetItem: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetItem API call.

---

##### `BatchWriteItem`<sup>Required</sup> <a name="BatchWriteItem" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.BatchWriteItem"></a>

```typescript
public readonly BatchWriteItem: string[];
```

- *Type:* string[]

IAM actions required for the BatchWriteItem API call.

---

##### `CreateBackup`<sup>Required</sup> <a name="CreateBackup" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.CreateBackup"></a>

```typescript
public readonly CreateBackup: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackup API call.

---

##### `CreateGlobalTable`<sup>Required</sup> <a name="CreateGlobalTable" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.CreateGlobalTable"></a>

```typescript
public readonly CreateGlobalTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateGlobalTable API call.

---

##### `CreateTable`<sup>Required</sup> <a name="CreateTable" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.CreateTable"></a>

```typescript
public readonly CreateTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateTable API call.

---

##### `DeleteBackup`<sup>Required</sup> <a name="DeleteBackup" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DeleteBackup"></a>

```typescript
public readonly DeleteBackup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackup API call.

---

##### `DeleteItem`<sup>Required</sup> <a name="DeleteItem" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DeleteItem"></a>

```typescript
public readonly DeleteItem: string[];
```

- *Type:* string[]

IAM actions required for the DeleteItem API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteTable`<sup>Required</sup> <a name="DeleteTable" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DeleteTable"></a>

```typescript
public readonly DeleteTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTable API call.

---

##### `DescribeBackup`<sup>Required</sup> <a name="DescribeBackup" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeBackup"></a>

```typescript
public readonly DescribeBackup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBackup API call.

---

##### `DescribeContinuousBackups`<sup>Required</sup> <a name="DescribeContinuousBackups" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeContinuousBackups"></a>

```typescript
public readonly DescribeContinuousBackups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContinuousBackups API call.

---

##### `DescribeContributorInsights`<sup>Required</sup> <a name="DescribeContributorInsights" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeContributorInsights"></a>

```typescript
public readonly DescribeContributorInsights: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContributorInsights API call.

---

##### `DescribeEndpoints`<sup>Required</sup> <a name="DescribeEndpoints" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeEndpoints"></a>

```typescript
public readonly DescribeEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpoints API call.

---

##### `DescribeExport`<sup>Required</sup> <a name="DescribeExport" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeExport"></a>

```typescript
public readonly DescribeExport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExport API call.

---

##### `DescribeGlobalTable`<sup>Required</sup> <a name="DescribeGlobalTable" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeGlobalTable"></a>

```typescript
public readonly DescribeGlobalTable: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGlobalTable API call.

---

##### `DescribeGlobalTableSettings`<sup>Required</sup> <a name="DescribeGlobalTableSettings" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeGlobalTableSettings"></a>

```typescript
public readonly DescribeGlobalTableSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGlobalTableSettings API call.

---

##### `DescribeImport`<sup>Required</sup> <a name="DescribeImport" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeImport"></a>

```typescript
public readonly DescribeImport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImport API call.

---

##### `DescribeKinesisStreamingDestination`<sup>Required</sup> <a name="DescribeKinesisStreamingDestination" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeKinesisStreamingDestination"></a>

```typescript
public readonly DescribeKinesisStreamingDestination: string[];
```

- *Type:* string[]

IAM actions required for the DescribeKinesisStreamingDestination API call.

---

##### `DescribeLimits`<sup>Required</sup> <a name="DescribeLimits" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeLimits"></a>

```typescript
public readonly DescribeLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLimits API call.

---

##### `DescribeStream`<sup>Required</sup> <a name="DescribeStream" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeStream"></a>

```typescript
public readonly DescribeStream: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStream API call.

---

##### `DescribeTable`<sup>Required</sup> <a name="DescribeTable" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeTable"></a>

```typescript
public readonly DescribeTable: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTable API call.

---

##### `DescribeTableReplicaAutoScaling`<sup>Required</sup> <a name="DescribeTableReplicaAutoScaling" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeTableReplicaAutoScaling"></a>

```typescript
public readonly DescribeTableReplicaAutoScaling: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTableReplicaAutoScaling API call.

---

##### `DescribeTimeToLive`<sup>Required</sup> <a name="DescribeTimeToLive" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DescribeTimeToLive"></a>

```typescript
public readonly DescribeTimeToLive: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTimeToLive API call.

---

##### `DisableKinesisStreamingDestination`<sup>Required</sup> <a name="DisableKinesisStreamingDestination" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.DisableKinesisStreamingDestination"></a>

```typescript
public readonly DisableKinesisStreamingDestination: string[];
```

- *Type:* string[]

IAM actions required for the DisableKinesisStreamingDestination API call.

---

##### `EnableKinesisStreamingDestination`<sup>Required</sup> <a name="EnableKinesisStreamingDestination" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.EnableKinesisStreamingDestination"></a>

```typescript
public readonly EnableKinesisStreamingDestination: string[];
```

- *Type:* string[]

IAM actions required for the EnableKinesisStreamingDestination API call.

---

##### `ExecuteStatement`<sup>Required</sup> <a name="ExecuteStatement" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ExecuteStatement"></a>

```typescript
public readonly ExecuteStatement: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteStatement API call.

---

##### `ExecuteTransaction`<sup>Required</sup> <a name="ExecuteTransaction" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ExecuteTransaction"></a>

```typescript
public readonly ExecuteTransaction: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteTransaction API call.

---

##### `ExportTableToPointInTime`<sup>Required</sup> <a name="ExportTableToPointInTime" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ExportTableToPointInTime"></a>

```typescript
public readonly ExportTableToPointInTime: string[];
```

- *Type:* string[]

IAM actions required for the ExportTableToPointInTime API call.

---

##### `ImportTable`<sup>Required</sup> <a name="ImportTable" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ImportTable"></a>

```typescript
public readonly ImportTable: string[];
```

- *Type:* string[]

IAM actions required for the ImportTable API call.

---

##### `ListBackups`<sup>Required</sup> <a name="ListBackups" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListBackups"></a>

```typescript
public readonly ListBackups: string[];
```

- *Type:* string[]

IAM actions required for the ListBackups API call.

---

##### `ListContributorInsights`<sup>Required</sup> <a name="ListContributorInsights" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListContributorInsights"></a>

```typescript
public readonly ListContributorInsights: string[];
```

- *Type:* string[]

IAM actions required for the ListContributorInsights API call.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListExports"></a>

```typescript
public readonly ListExports: string[];
```

- *Type:* string[]

IAM actions required for the ListExports API call.

---

##### `ListGlobalTables`<sup>Required</sup> <a name="ListGlobalTables" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListGlobalTables"></a>

```typescript
public readonly ListGlobalTables: string[];
```

- *Type:* string[]

IAM actions required for the ListGlobalTables API call.

---

##### `ListImports`<sup>Required</sup> <a name="ListImports" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListImports"></a>

```typescript
public readonly ListImports: string[];
```

- *Type:* string[]

IAM actions required for the ListImports API call.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListStreams"></a>

```typescript
public readonly ListStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListStreams API call.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListTables"></a>

```typescript
public readonly ListTables: string[];
```

- *Type:* string[]

IAM actions required for the ListTables API call.

---

##### `ListTagsOfResource`<sup>Required</sup> <a name="ListTagsOfResource" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.ListTagsOfResource"></a>

```typescript
public readonly ListTagsOfResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsOfResource API call.

---

##### `opGetItem`<sup>Required</sup> <a name="opGetItem" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.opGetItem"></a>

```typescript
public readonly opGetItem: string[];
```

- *Type:* string[]

IAM actions required for the GetItem API call.

---

##### `opGetRecords`<sup>Required</sup> <a name="opGetRecords" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.opGetRecords"></a>

```typescript
public readonly opGetRecords: string[];
```

- *Type:* string[]

IAM actions required for the GetRecords API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetShardIterator`<sup>Required</sup> <a name="opGetShardIterator" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.opGetShardIterator"></a>

```typescript
public readonly opGetShardIterator: string[];
```

- *Type:* string[]

IAM actions required for the GetShardIterator API call.

---

##### `PutItem`<sup>Required</sup> <a name="PutItem" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.PutItem"></a>

```typescript
public readonly PutItem: string[];
```

- *Type:* string[]

IAM actions required for the PutItem API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.Query"></a>

```typescript
public readonly Query: string[];
```

- *Type:* string[]

IAM actions required for the Query API call.

---

##### `RestoreTableFromBackup`<sup>Required</sup> <a name="RestoreTableFromBackup" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.RestoreTableFromBackup"></a>

```typescript
public readonly RestoreTableFromBackup: string[];
```

- *Type:* string[]

IAM actions required for the RestoreTableFromBackup API call.

---

##### `RestoreTableToPointInTime`<sup>Required</sup> <a name="RestoreTableToPointInTime" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.RestoreTableToPointInTime"></a>

```typescript
public readonly RestoreTableToPointInTime: string[];
```

- *Type:* string[]

IAM actions required for the RestoreTableToPointInTime API call.

---

##### `Scan`<sup>Required</sup> <a name="Scan" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.Scan"></a>

```typescript
public readonly Scan: string[];
```

- *Type:* string[]

IAM actions required for the Scan API call.

---

##### `SearchVectors`<sup>Required</sup> <a name="SearchVectors" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.SearchVectors"></a>

```typescript
public readonly SearchVectors: string[];
```

- *Type:* string[]

IAM actions required for the SearchVectors API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TransactGetItems`<sup>Required</sup> <a name="TransactGetItems" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.TransactGetItems"></a>

```typescript
public readonly TransactGetItems: string[];
```

- *Type:* string[]

IAM actions required for the TransactGetItems API call.

---

##### `TransactWriteItems`<sup>Required</sup> <a name="TransactWriteItems" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.TransactWriteItems"></a>

```typescript
public readonly TransactWriteItems: string[];
```

- *Type:* string[]

IAM actions required for the TransactWriteItems API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateContinuousBackups`<sup>Required</sup> <a name="UpdateContinuousBackups" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateContinuousBackups"></a>

```typescript
public readonly UpdateContinuousBackups: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContinuousBackups API call.

---

##### `UpdateContributorInsights`<sup>Required</sup> <a name="UpdateContributorInsights" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateContributorInsights"></a>

```typescript
public readonly UpdateContributorInsights: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContributorInsights API call.

---

##### `UpdateGlobalTable`<sup>Required</sup> <a name="UpdateGlobalTable" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateGlobalTable"></a>

```typescript
public readonly UpdateGlobalTable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlobalTable API call.

---

##### `UpdateGlobalTableSettings`<sup>Required</sup> <a name="UpdateGlobalTableSettings" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateGlobalTableSettings"></a>

```typescript
public readonly UpdateGlobalTableSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlobalTableSettings API call.

---

##### `UpdateItem`<sup>Required</sup> <a name="UpdateItem" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateItem"></a>

```typescript
public readonly UpdateItem: string[];
```

- *Type:* string[]

IAM actions required for the UpdateItem API call.

---

##### `UpdateKinesisStreamingDestination`<sup>Required</sup> <a name="UpdateKinesisStreamingDestination" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateKinesisStreamingDestination"></a>

```typescript
public readonly UpdateKinesisStreamingDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKinesisStreamingDestination API call.

---

##### `UpdateTable`<sup>Required</sup> <a name="UpdateTable" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateTable"></a>

```typescript
public readonly UpdateTable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTable API call.

---

##### `UpdateTableReplicaAutoScaling`<sup>Required</sup> <a name="UpdateTableReplicaAutoScaling" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateTableReplicaAutoScaling"></a>

```typescript
public readonly UpdateTableReplicaAutoScaling: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTableReplicaAutoScaling API call.

---

##### `UpdateTimeToLive`<sup>Required</sup> <a name="UpdateTimeToLive" id="@cdk_utils/iam.dynamodb.DynamoDBOperations.property.UpdateTimeToLive"></a>

```typescript
public readonly UpdateTimeToLive: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTimeToLive API call.

---

### DynamoDBResources <a name="DynamoDBResources" id="@cdk_utils/iam.dynamodb.DynamoDBResources"></a>

ARN builders, validators, and parsers for dynamodb resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dynamodb.DynamoDBResources.Initializer"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

new dynamodb.DynamoDBResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.backup">backup</a></code> | Builds an ARN for the backup resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.export">export</a></code> | Builds an ARN for the export resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.globalTable">globalTable</a></code> | Builds an ARN for the global-table resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.import">import</a></code> | Builds an ARN for the import resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.index">index</a></code> | Builds an ARN for the index resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.isValidBackupArn">isValidBackupArn</a></code> | Validates whether a string is a valid ARN for the backup resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.isValidExportArn">isValidExportArn</a></code> | Validates whether a string is a valid ARN for the export resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.isValidGlobalTableArn">isValidGlobalTableArn</a></code> | Validates whether a string is a valid ARN for the global-table resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.isValidImportArn">isValidImportArn</a></code> | Validates whether a string is a valid ARN for the import resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.isValidIndexArn">isValidIndexArn</a></code> | Validates whether a string is a valid ARN for the index resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.isValidStreamArn">isValidStreamArn</a></code> | Validates whether a string is a valid ARN for the stream resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.isValidTableArn">isValidTableArn</a></code> | Validates whether a string is a valid ARN for the table resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.parseBackupArn">parseBackupArn</a></code> | Parses a backup ARN into its components. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.parseExportArn">parseExportArn</a></code> | Parses a export ARN into its components. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.parseGlobalTableArn">parseGlobalTableArn</a></code> | Parses a global-table ARN into its components. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.parseImportArn">parseImportArn</a></code> | Parses a import ARN into its components. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.parseIndexArn">parseIndexArn</a></code> | Parses a index ARN into its components. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.parseStreamArn">parseStreamArn</a></code> | Parses a stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.parseTableArn">parseTableArn</a></code> | Parses a table ARN into its components. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.stream">stream</a></code> | Builds an ARN for the stream resource. |
| <code><a href="#@cdk_utils/iam.dynamodb.DynamoDBResources.table">table</a></code> | Builds an ARN for the table resource. |

---

##### `backup` <a name="backup" id="@cdk_utils/iam.dynamodb.DynamoDBResources.backup"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.backup(props: DynamoDBBackupArnProps)
```

Builds an ARN for the backup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dynamodb.DynamoDBResources.backup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dynamodb.DynamoDBBackupArnProps">DynamoDBBackupArnProps</a>

---

##### `export` <a name="export" id="@cdk_utils/iam.dynamodb.DynamoDBResources.export"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.export(props: DynamoDBExportArnProps)
```

Builds an ARN for the export resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dynamodb.DynamoDBResources.export.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dynamodb.DynamoDBExportArnProps">DynamoDBExportArnProps</a>

---

##### `globalTable` <a name="globalTable" id="@cdk_utils/iam.dynamodb.DynamoDBResources.globalTable"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.globalTable(props: DynamoDBGlobalTableArnProps)
```

Builds an ARN for the global-table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dynamodb.DynamoDBResources.globalTable.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dynamodb.DynamoDBGlobalTableArnProps">DynamoDBGlobalTableArnProps</a>

---

##### `import` <a name="import" id="@cdk_utils/iam.dynamodb.DynamoDBResources.import"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.import(props: DynamoDBImportArnProps)
```

Builds an ARN for the import resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dynamodb.DynamoDBResources.import.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dynamodb.DynamoDBImportArnProps">DynamoDBImportArnProps</a>

---

##### `index` <a name="index" id="@cdk_utils/iam.dynamodb.DynamoDBResources.index"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.index(props: DynamoDBIndexArnProps)
```

Builds an ARN for the index resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dynamodb.DynamoDBResources.index.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dynamodb.DynamoDBIndexArnProps">DynamoDBIndexArnProps</a>

---

##### `isValidBackupArn` <a name="isValidBackupArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidBackupArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.isValidBackupArn(arn: string)
```

Validates whether a string is a valid ARN for the backup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExportArn` <a name="isValidExportArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidExportArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.isValidExportArn(arn: string)
```

Validates whether a string is a valid ARN for the export resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidExportArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGlobalTableArn` <a name="isValidGlobalTableArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidGlobalTableArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.isValidGlobalTableArn(arn: string)
```

Validates whether a string is a valid ARN for the global-table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidGlobalTableArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImportArn` <a name="isValidImportArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidImportArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.isValidImportArn(arn: string)
```

Validates whether a string is a valid ARN for the import resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidImportArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIndexArn` <a name="isValidIndexArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidIndexArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.isValidIndexArn(arn: string)
```

Validates whether a string is a valid ARN for the index resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamArn` <a name="isValidStreamArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidStreamArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.isValidStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTableArn` <a name="isValidTableArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidTableArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.isValidTableArn(arn: string)
```

Validates whether a string is a valid ARN for the table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.isValidTableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBackupArn` <a name="parseBackupArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseBackupArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.parseBackupArn(arn: string)
```

Parses a backup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExportArn` <a name="parseExportArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseExportArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.parseExportArn(arn: string)
```

Parses a export ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseExportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGlobalTableArn` <a name="parseGlobalTableArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseGlobalTableArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.parseGlobalTableArn(arn: string)
```

Parses a global-table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseGlobalTableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImportArn` <a name="parseImportArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseImportArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.parseImportArn(arn: string)
```

Parses a import ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseImportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIndexArn` <a name="parseIndexArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseIndexArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.parseIndexArn(arn: string)
```

Parses a index ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamArn` <a name="parseStreamArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseStreamArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.parseStreamArn(arn: string)
```

Parses a stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTableArn` <a name="parseTableArn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseTableArn"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.parseTableArn(arn: string)
```

Parses a table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dynamodb.DynamoDBResources.parseTableArn.parameter.arn"></a>

- *Type:* string

---

##### `stream` <a name="stream" id="@cdk_utils/iam.dynamodb.DynamoDBResources.stream"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.stream(props: DynamoDBStreamArnProps)
```

Builds an ARN for the stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dynamodb.DynamoDBResources.stream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dynamodb.DynamoDBStreamArnProps">DynamoDBStreamArnProps</a>

---

##### `table` <a name="table" id="@cdk_utils/iam.dynamodb.DynamoDBResources.table"></a>

```typescript
import { dynamodb } from '@cdk_utils/iam'

dynamodb.DynamoDBResources.table(props: DynamoDBTableArnProps)
```

Builds an ARN for the table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dynamodb.DynamoDBResources.table.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dynamodb.DynamoDBTableArnProps">DynamoDBTableArnProps</a>

---




