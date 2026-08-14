# `timestream` Submodule <a name="`timestream` Submodule" id="@cdk_utils/iam.timestream"></a>


## Structs <a name="Structs" id="Structs"></a>

### TimestreamDatabaseArnComponents <a name="TimestreamDatabaseArnComponents" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnComponents"></a>

Parsed components of a database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnComponents.Initializer"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

const timestreamDatabaseArnComponents: timestream.TimestreamDatabaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamDatabaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamDatabaseArnComponents.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamDatabaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamDatabaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnComponents.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TimestreamDatabaseArnProps <a name="TimestreamDatabaseArnProps" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnProps"></a>

Properties for building a database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnProps.Initializer"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

const timestreamDatabaseArnProps: timestream.TimestreamDatabaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamDatabaseArnProps.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component of the ARN. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamDatabaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamDatabaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamDatabaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.timestream.TimestreamDatabaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TimestreamScheduledQueryArnComponents <a name="TimestreamScheduledQueryArnComponents" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnComponents"></a>

Parsed components of a scheduled-query ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnComponents.Initializer"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

const timestreamScheduledQueryArnComponents: timestream.TimestreamScheduledQueryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamScheduledQueryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamScheduledQueryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamScheduledQueryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamScheduledQueryArnComponents.property.scheduledQueryName">scheduledQueryName</a></code> | <code>string</code> | The ScheduledQueryName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scheduledQueryName`<sup>Required</sup> <a name="scheduledQueryName" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnComponents.property.scheduledQueryName"></a>

```typescript
public readonly scheduledQueryName: string;
```

- *Type:* string

The ScheduledQueryName component.

---

### TimestreamScheduledQueryArnProps <a name="TimestreamScheduledQueryArnProps" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps"></a>

Properties for building a scheduled-query ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps.Initializer"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

const timestreamScheduledQueryArnProps: timestream.TimestreamScheduledQueryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps.property.scheduledQueryName">scheduledQueryName</a></code> | <code>string</code> | The ScheduledQueryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `scheduledQueryName`<sup>Required</sup> <a name="scheduledQueryName" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps.property.scheduledQueryName"></a>

```typescript
public readonly scheduledQueryName: string;
```

- *Type:* string

The ScheduledQueryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TimestreamTableArnComponents <a name="TimestreamTableArnComponents" id="@cdk_utils/iam.timestream.TimestreamTableArnComponents"></a>

Parsed components of a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream.TimestreamTableArnComponents.Initializer"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

const timestreamTableArnComponents: timestream.TimestreamTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamTableArnComponents.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamTableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamTableArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.timestream.TimestreamTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.timestream.TimestreamTableArnComponents.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.timestream.TimestreamTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.timestream.TimestreamTableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.timestream.TimestreamTableArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

### TimestreamTableArnProps <a name="TimestreamTableArnProps" id="@cdk_utils/iam.timestream.TimestreamTableArnProps"></a>

Properties for building a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream.TimestreamTableArnProps.Initializer"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

const timestreamTableArnProps: timestream.TimestreamTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamTableArnProps.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component of the ARN. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamTableArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamTableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.timestream.TimestreamTableArnProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component of the ARN.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.timestream.TimestreamTableArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.timestream.TimestreamTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.timestream.TimestreamTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.timestream.TimestreamTableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamActions <a name="TimestreamActions" id="@cdk_utils/iam.timestream.TimestreamActions"></a>

IAM action constants for the timestream service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.timestream.TimestreamActions.Initializer"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

new timestream.TimestreamActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.actionGetAwsBackupStatus">actionGetAwsBackupStatus</a></code> | <code>string</code> | [Read] timestream:GetAwsBackupStatus. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.actionGetAwsRestoreStatus">actionGetAwsRestoreStatus</a></code> | <code>string</code> | [Read] timestream:GetAwsRestoreStatus. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.CancelQuery">CancelQuery</a></code> | <code>string</code> | [Write] timestream:CancelQuery. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.CreateBatchLoadTask">CreateBatchLoadTask</a></code> | <code>string</code> | [Write] timestream:CreateBatchLoadTask. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.CreateDatabase">CreateDatabase</a></code> | <code>string</code> | [Write] timestream:CreateDatabase. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.CreateScheduledQuery">CreateScheduledQuery</a></code> | <code>string</code> | [Write] timestream:CreateScheduledQuery. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.CreateTable">CreateTable</a></code> | <code>string</code> | [Write] timestream:CreateTable. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.DeleteDatabase">DeleteDatabase</a></code> | <code>string</code> | [Write] timestream:DeleteDatabase. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.DeleteScheduledQuery">DeleteScheduledQuery</a></code> | <code>string</code> | [Write] timestream:DeleteScheduledQuery. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.DeleteTable">DeleteTable</a></code> | <code>string</code> | [Write] timestream:DeleteTable. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.DescribeAccountSettings">DescribeAccountSettings</a></code> | <code>string</code> | [Read] timestream:DescribeAccountSettings. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.DescribeBatchLoadTask">DescribeBatchLoadTask</a></code> | <code>string</code> | [Read] timestream:DescribeBatchLoadTask. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.DescribeDatabase">DescribeDatabase</a></code> | <code>string</code> | [Read] timestream:DescribeDatabase. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.DescribeEndpoints">DescribeEndpoints</a></code> | <code>string</code> | [List] timestream:DescribeEndpoints. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.DescribeScheduledQuery">DescribeScheduledQuery</a></code> | <code>string</code> | [Read] timestream:DescribeScheduledQuery. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.DescribeTable">DescribeTable</a></code> | <code>string</code> | [Read] timestream:DescribeTable. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.ExecuteScheduledQuery">ExecuteScheduledQuery</a></code> | <code>string</code> | [Write] timestream:ExecuteScheduledQuery. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.ListBatchLoadTasks">ListBatchLoadTasks</a></code> | <code>string</code> | [List] timestream:ListBatchLoadTasks. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.ListDatabases">ListDatabases</a></code> | <code>string</code> | [List] timestream:ListDatabases. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.ListMeasures">ListMeasures</a></code> | <code>string</code> | [List] timestream:ListMeasures. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.ListScheduledQueries">ListScheduledQueries</a></code> | <code>string</code> | [List] timestream:ListScheduledQueries. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.ListTables">ListTables</a></code> | <code>string</code> | [List] timestream:ListTables. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] timestream:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.PrepareQuery">PrepareQuery</a></code> | <code>string</code> | [Read] timestream:PrepareQuery. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.ResumeBatchLoadTask">ResumeBatchLoadTask</a></code> | <code>string</code> | [Write] timestream:ResumeBatchLoadTask. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.Select">Select</a></code> | <code>string</code> | [Read] timestream:Select. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.SelectValues">SelectValues</a></code> | <code>string</code> | [Read] timestream:SelectValues. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.StartAwsBackupJob">StartAwsBackupJob</a></code> | <code>string</code> | [Write] timestream:StartAwsBackupJob. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.StartAwsRestoreJob">StartAwsRestoreJob</a></code> | <code>string</code> | [Write] timestream:StartAwsRestoreJob. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] timestream:TagResource. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.Unload">Unload</a></code> | <code>string</code> | [Write] timestream:Unload. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] timestream:UntagResource. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string</code> | [Write] timestream:UpdateAccountSettings. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.UpdateDatabase">UpdateDatabase</a></code> | <code>string</code> | [Write] timestream:UpdateDatabase. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.UpdateScheduledQuery">UpdateScheduledQuery</a></code> | <code>string</code> | [Write] timestream:UpdateScheduledQuery. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.UpdateTable">UpdateTable</a></code> | <code>string</code> | [Write] timestream:UpdateTable. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamActions.property.WriteRecords">WriteRecords</a></code> | <code>string</code> | [Write] timestream:WriteRecords. |

---

##### `actionGetAwsBackupStatus`<sup>Required</sup> <a name="actionGetAwsBackupStatus" id="@cdk_utils/iam.timestream.TimestreamActions.property.actionGetAwsBackupStatus"></a>

```typescript
public readonly actionGetAwsBackupStatus: string;
```

- *Type:* string

[Read] timestream:GetAwsBackupStatus.

---

##### `actionGetAwsRestoreStatus`<sup>Required</sup> <a name="actionGetAwsRestoreStatus" id="@cdk_utils/iam.timestream.TimestreamActions.property.actionGetAwsRestoreStatus"></a>

```typescript
public readonly actionGetAwsRestoreStatus: string;
```

- *Type:* string

[Read] timestream:GetAwsRestoreStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.timestream.TimestreamActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.timestream.TimestreamActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.timestream.TimestreamActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.timestream.TimestreamActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.timestream.TimestreamActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelQuery`<sup>Required</sup> <a name="CancelQuery" id="@cdk_utils/iam.timestream.TimestreamActions.property.CancelQuery"></a>

```typescript
public readonly CancelQuery: string;
```

- *Type:* string

[Write] timestream:CancelQuery.

---

##### `CreateBatchLoadTask`<sup>Required</sup> <a name="CreateBatchLoadTask" id="@cdk_utils/iam.timestream.TimestreamActions.property.CreateBatchLoadTask"></a>

```typescript
public readonly CreateBatchLoadTask: string;
```

- *Type:* string

[Write] timestream:CreateBatchLoadTask.

---

##### `CreateDatabase`<sup>Required</sup> <a name="CreateDatabase" id="@cdk_utils/iam.timestream.TimestreamActions.property.CreateDatabase"></a>

```typescript
public readonly CreateDatabase: string;
```

- *Type:* string

[Write] timestream:CreateDatabase.

---

##### `CreateScheduledQuery`<sup>Required</sup> <a name="CreateScheduledQuery" id="@cdk_utils/iam.timestream.TimestreamActions.property.CreateScheduledQuery"></a>

```typescript
public readonly CreateScheduledQuery: string;
```

- *Type:* string

[Write] timestream:CreateScheduledQuery.

---

##### `CreateTable`<sup>Required</sup> <a name="CreateTable" id="@cdk_utils/iam.timestream.TimestreamActions.property.CreateTable"></a>

```typescript
public readonly CreateTable: string;
```

- *Type:* string

[Write] timestream:CreateTable.

---

##### `DeleteDatabase`<sup>Required</sup> <a name="DeleteDatabase" id="@cdk_utils/iam.timestream.TimestreamActions.property.DeleteDatabase"></a>

```typescript
public readonly DeleteDatabase: string;
```

- *Type:* string

[Write] timestream:DeleteDatabase.

---

##### `DeleteScheduledQuery`<sup>Required</sup> <a name="DeleteScheduledQuery" id="@cdk_utils/iam.timestream.TimestreamActions.property.DeleteScheduledQuery"></a>

```typescript
public readonly DeleteScheduledQuery: string;
```

- *Type:* string

[Write] timestream:DeleteScheduledQuery.

---

##### `DeleteTable`<sup>Required</sup> <a name="DeleteTable" id="@cdk_utils/iam.timestream.TimestreamActions.property.DeleteTable"></a>

```typescript
public readonly DeleteTable: string;
```

- *Type:* string

[Write] timestream:DeleteTable.

---

##### `DescribeAccountSettings`<sup>Required</sup> <a name="DescribeAccountSettings" id="@cdk_utils/iam.timestream.TimestreamActions.property.DescribeAccountSettings"></a>

```typescript
public readonly DescribeAccountSettings: string;
```

- *Type:* string

[Read] timestream:DescribeAccountSettings.

---

##### `DescribeBatchLoadTask`<sup>Required</sup> <a name="DescribeBatchLoadTask" id="@cdk_utils/iam.timestream.TimestreamActions.property.DescribeBatchLoadTask"></a>

```typescript
public readonly DescribeBatchLoadTask: string;
```

- *Type:* string

[Read] timestream:DescribeBatchLoadTask.

---

##### `DescribeDatabase`<sup>Required</sup> <a name="DescribeDatabase" id="@cdk_utils/iam.timestream.TimestreamActions.property.DescribeDatabase"></a>

```typescript
public readonly DescribeDatabase: string;
```

- *Type:* string

[Read] timestream:DescribeDatabase.

---

##### `DescribeEndpoints`<sup>Required</sup> <a name="DescribeEndpoints" id="@cdk_utils/iam.timestream.TimestreamActions.property.DescribeEndpoints"></a>

```typescript
public readonly DescribeEndpoints: string;
```

- *Type:* string

[List] timestream:DescribeEndpoints.

---

##### `DescribeScheduledQuery`<sup>Required</sup> <a name="DescribeScheduledQuery" id="@cdk_utils/iam.timestream.TimestreamActions.property.DescribeScheduledQuery"></a>

```typescript
public readonly DescribeScheduledQuery: string;
```

- *Type:* string

[Read] timestream:DescribeScheduledQuery.

---

##### `DescribeTable`<sup>Required</sup> <a name="DescribeTable" id="@cdk_utils/iam.timestream.TimestreamActions.property.DescribeTable"></a>

```typescript
public readonly DescribeTable: string;
```

- *Type:* string

[Read] timestream:DescribeTable.

---

##### `ExecuteScheduledQuery`<sup>Required</sup> <a name="ExecuteScheduledQuery" id="@cdk_utils/iam.timestream.TimestreamActions.property.ExecuteScheduledQuery"></a>

```typescript
public readonly ExecuteScheduledQuery: string;
```

- *Type:* string

[Write] timestream:ExecuteScheduledQuery.

---

##### `ListBatchLoadTasks`<sup>Required</sup> <a name="ListBatchLoadTasks" id="@cdk_utils/iam.timestream.TimestreamActions.property.ListBatchLoadTasks"></a>

```typescript
public readonly ListBatchLoadTasks: string;
```

- *Type:* string

[List] timestream:ListBatchLoadTasks.

---

##### `ListDatabases`<sup>Required</sup> <a name="ListDatabases" id="@cdk_utils/iam.timestream.TimestreamActions.property.ListDatabases"></a>

```typescript
public readonly ListDatabases: string;
```

- *Type:* string

[List] timestream:ListDatabases.

---

##### `ListMeasures`<sup>Required</sup> <a name="ListMeasures" id="@cdk_utils/iam.timestream.TimestreamActions.property.ListMeasures"></a>

```typescript
public readonly ListMeasures: string;
```

- *Type:* string

[List] timestream:ListMeasures.

---

##### `ListScheduledQueries`<sup>Required</sup> <a name="ListScheduledQueries" id="@cdk_utils/iam.timestream.TimestreamActions.property.ListScheduledQueries"></a>

```typescript
public readonly ListScheduledQueries: string;
```

- *Type:* string

[List] timestream:ListScheduledQueries.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.timestream.TimestreamActions.property.ListTables"></a>

```typescript
public readonly ListTables: string;
```

- *Type:* string

[List] timestream:ListTables.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.timestream.TimestreamActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] timestream:ListTagsForResource.

---

##### `PrepareQuery`<sup>Required</sup> <a name="PrepareQuery" id="@cdk_utils/iam.timestream.TimestreamActions.property.PrepareQuery"></a>

```typescript
public readonly PrepareQuery: string;
```

- *Type:* string

[Read] timestream:PrepareQuery.

---

##### `ResumeBatchLoadTask`<sup>Required</sup> <a name="ResumeBatchLoadTask" id="@cdk_utils/iam.timestream.TimestreamActions.property.ResumeBatchLoadTask"></a>

```typescript
public readonly ResumeBatchLoadTask: string;
```

- *Type:* string

[Write] timestream:ResumeBatchLoadTask.

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdk_utils/iam.timestream.TimestreamActions.property.Select"></a>

```typescript
public readonly Select: string;
```

- *Type:* string

[Read] timestream:Select.

---

##### `SelectValues`<sup>Required</sup> <a name="SelectValues" id="@cdk_utils/iam.timestream.TimestreamActions.property.SelectValues"></a>

```typescript
public readonly SelectValues: string;
```

- *Type:* string

[Read] timestream:SelectValues.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.timestream.TimestreamActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAwsBackupJob`<sup>Required</sup> <a name="StartAwsBackupJob" id="@cdk_utils/iam.timestream.TimestreamActions.property.StartAwsBackupJob"></a>

```typescript
public readonly StartAwsBackupJob: string;
```

- *Type:* string

[Write] timestream:StartAwsBackupJob.

---

##### `StartAwsRestoreJob`<sup>Required</sup> <a name="StartAwsRestoreJob" id="@cdk_utils/iam.timestream.TimestreamActions.property.StartAwsRestoreJob"></a>

```typescript
public readonly StartAwsRestoreJob: string;
```

- *Type:* string

[Write] timestream:StartAwsRestoreJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.timestream.TimestreamActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] timestream:TagResource.

---

##### `Unload`<sup>Required</sup> <a name="Unload" id="@cdk_utils/iam.timestream.TimestreamActions.property.Unload"></a>

```typescript
public readonly Unload: string;
```

- *Type:* string

[Write] timestream:Unload.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.timestream.TimestreamActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] timestream:UntagResource.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.timestream.TimestreamActions.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string;
```

- *Type:* string

[Write] timestream:UpdateAccountSettings.

---

##### `UpdateDatabase`<sup>Required</sup> <a name="UpdateDatabase" id="@cdk_utils/iam.timestream.TimestreamActions.property.UpdateDatabase"></a>

```typescript
public readonly UpdateDatabase: string;
```

- *Type:* string

[Write] timestream:UpdateDatabase.

---

##### `UpdateScheduledQuery`<sup>Required</sup> <a name="UpdateScheduledQuery" id="@cdk_utils/iam.timestream.TimestreamActions.property.UpdateScheduledQuery"></a>

```typescript
public readonly UpdateScheduledQuery: string;
```

- *Type:* string

[Write] timestream:UpdateScheduledQuery.

---

##### `UpdateTable`<sup>Required</sup> <a name="UpdateTable" id="@cdk_utils/iam.timestream.TimestreamActions.property.UpdateTable"></a>

```typescript
public readonly UpdateTable: string;
```

- *Type:* string

[Write] timestream:UpdateTable.

---

##### `WriteRecords`<sup>Required</sup> <a name="WriteRecords" id="@cdk_utils/iam.timestream.TimestreamActions.property.WriteRecords"></a>

```typescript
public readonly WriteRecords: string;
```

- *Type:* string

[Write] timestream:WriteRecords.

---

### TimestreamConditions <a name="TimestreamConditions" id="@cdk_utils/iam.timestream.TimestreamConditions"></a>

Condition key constants and builders for timestream.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.timestream.TimestreamConditions.Initializer"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

new timestream.TimestreamConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.timestream.TimestreamConditions.requestTag"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.timestream.TimestreamConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.timestream.TimestreamConditions.resourceTag"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.timestream.TimestreamConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.timestream.TimestreamConditions.tagKeys"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.timestream.TimestreamConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.property.CreateDatabaseConditionKeys">CreateDatabaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDatabase action. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.property.CreateScheduledQueryConditionKeys">CreateScheduledQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScheduledQuery action. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.property.CreateTableConditionKeys">CreateTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTable action. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.timestream.TimestreamConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.timestream.TimestreamConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.timestream.TimestreamConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDatabaseConditionKeys`<sup>Required</sup> <a name="CreateDatabaseConditionKeys" id="@cdk_utils/iam.timestream.TimestreamConditions.property.CreateDatabaseConditionKeys"></a>

```typescript
public readonly CreateDatabaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDatabase action.

---

##### `CreateScheduledQueryConditionKeys`<sup>Required</sup> <a name="CreateScheduledQueryConditionKeys" id="@cdk_utils/iam.timestream.TimestreamConditions.property.CreateScheduledQueryConditionKeys"></a>

```typescript
public readonly CreateScheduledQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScheduledQuery action.

---

##### `CreateTableConditionKeys`<sup>Required</sup> <a name="CreateTableConditionKeys" id="@cdk_utils/iam.timestream.TimestreamConditions.property.CreateTableConditionKeys"></a>

```typescript
public readonly CreateTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTable action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.timestream.TimestreamConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.timestream.TimestreamConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### TimestreamOperations <a name="TimestreamOperations" id="@cdk_utils/iam.timestream.TimestreamOperations"></a>

API operation to required IAM actions mapping for timestream.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.timestream.TimestreamOperations.Initializer"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

new timestream.TimestreamOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.CancelQuery">CancelQuery</a></code> | <code>string[]</code> | IAM actions required for the CancelQuery API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.CreateBatchLoadTask">CreateBatchLoadTask</a></code> | <code>string[]</code> | IAM actions required for the CreateBatchLoadTask API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.CreateDatabase">CreateDatabase</a></code> | <code>string[]</code> | IAM actions required for the CreateDatabase API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.CreateScheduledQuery">CreateScheduledQuery</a></code> | <code>string[]</code> | IAM actions required for the CreateScheduledQuery API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.CreateTable">CreateTable</a></code> | <code>string[]</code> | IAM actions required for the CreateTable API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.DeleteDatabase">DeleteDatabase</a></code> | <code>string[]</code> | IAM actions required for the DeleteDatabase API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.DeleteScheduledQuery">DeleteScheduledQuery</a></code> | <code>string[]</code> | IAM actions required for the DeleteScheduledQuery API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.DeleteTable">DeleteTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteTable API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeAccountSettings">DescribeAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeBatchLoadTask">DescribeBatchLoadTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeBatchLoadTask API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeDatabase">DescribeDatabase</a></code> | <code>string[]</code> | IAM actions required for the DescribeDatabase API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeEndpoints">DescribeEndpoints</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpoints API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeScheduledQuery">DescribeScheduledQuery</a></code> | <code>string[]</code> | IAM actions required for the DescribeScheduledQuery API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeTable">DescribeTable</a></code> | <code>string[]</code> | IAM actions required for the DescribeTable API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.ExecuteScheduledQuery">ExecuteScheduledQuery</a></code> | <code>string[]</code> | IAM actions required for the ExecuteScheduledQuery API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.ListBatchLoadTasks">ListBatchLoadTasks</a></code> | <code>string[]</code> | IAM actions required for the ListBatchLoadTasks API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.ListDatabases">ListDatabases</a></code> | <code>string[]</code> | IAM actions required for the ListDatabases API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.ListScheduledQueries">ListScheduledQueries</a></code> | <code>string[]</code> | IAM actions required for the ListScheduledQueries API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.ListTables">ListTables</a></code> | <code>string[]</code> | IAM actions required for the ListTables API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.PrepareQuery">PrepareQuery</a></code> | <code>string[]</code> | IAM actions required for the PrepareQuery API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.Query">Query</a></code> | <code>string[]</code> | IAM actions required for the Query API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.ResumeBatchLoadTask">ResumeBatchLoadTask</a></code> | <code>string[]</code> | IAM actions required for the ResumeBatchLoadTask API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.UpdateDatabase">UpdateDatabase</a></code> | <code>string[]</code> | IAM actions required for the UpdateDatabase API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.UpdateScheduledQuery">UpdateScheduledQuery</a></code> | <code>string[]</code> | IAM actions required for the UpdateScheduledQuery API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.UpdateTable">UpdateTable</a></code> | <code>string[]</code> | IAM actions required for the UpdateTable API call. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamOperations.property.WriteRecords">WriteRecords</a></code> | <code>string[]</code> | IAM actions required for the WriteRecords API call. |

---

##### `CancelQuery`<sup>Required</sup> <a name="CancelQuery" id="@cdk_utils/iam.timestream.TimestreamOperations.property.CancelQuery"></a>

```typescript
public readonly CancelQuery: string[];
```

- *Type:* string[]

IAM actions required for the CancelQuery API call.

---

##### `CreateBatchLoadTask`<sup>Required</sup> <a name="CreateBatchLoadTask" id="@cdk_utils/iam.timestream.TimestreamOperations.property.CreateBatchLoadTask"></a>

```typescript
public readonly CreateBatchLoadTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateBatchLoadTask API call.

---

##### `CreateDatabase`<sup>Required</sup> <a name="CreateDatabase" id="@cdk_utils/iam.timestream.TimestreamOperations.property.CreateDatabase"></a>

```typescript
public readonly CreateDatabase: string[];
```

- *Type:* string[]

IAM actions required for the CreateDatabase API call.

---

##### `CreateScheduledQuery`<sup>Required</sup> <a name="CreateScheduledQuery" id="@cdk_utils/iam.timestream.TimestreamOperations.property.CreateScheduledQuery"></a>

```typescript
public readonly CreateScheduledQuery: string[];
```

- *Type:* string[]

IAM actions required for the CreateScheduledQuery API call.

---

##### `CreateTable`<sup>Required</sup> <a name="CreateTable" id="@cdk_utils/iam.timestream.TimestreamOperations.property.CreateTable"></a>

```typescript
public readonly CreateTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateTable API call.

---

##### `DeleteDatabase`<sup>Required</sup> <a name="DeleteDatabase" id="@cdk_utils/iam.timestream.TimestreamOperations.property.DeleteDatabase"></a>

```typescript
public readonly DeleteDatabase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDatabase API call.

---

##### `DeleteScheduledQuery`<sup>Required</sup> <a name="DeleteScheduledQuery" id="@cdk_utils/iam.timestream.TimestreamOperations.property.DeleteScheduledQuery"></a>

```typescript
public readonly DeleteScheduledQuery: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScheduledQuery API call.

---

##### `DeleteTable`<sup>Required</sup> <a name="DeleteTable" id="@cdk_utils/iam.timestream.TimestreamOperations.property.DeleteTable"></a>

```typescript
public readonly DeleteTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTable API call.

---

##### `DescribeAccountSettings`<sup>Required</sup> <a name="DescribeAccountSettings" id="@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeAccountSettings"></a>

```typescript
public readonly DescribeAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountSettings API call.

---

##### `DescribeBatchLoadTask`<sup>Required</sup> <a name="DescribeBatchLoadTask" id="@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeBatchLoadTask"></a>

```typescript
public readonly DescribeBatchLoadTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBatchLoadTask API call.

---

##### `DescribeDatabase`<sup>Required</sup> <a name="DescribeDatabase" id="@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeDatabase"></a>

```typescript
public readonly DescribeDatabase: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDatabase API call.

---

##### `DescribeEndpoints`<sup>Required</sup> <a name="DescribeEndpoints" id="@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeEndpoints"></a>

```typescript
public readonly DescribeEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpoints API call.

---

##### `DescribeScheduledQuery`<sup>Required</sup> <a name="DescribeScheduledQuery" id="@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeScheduledQuery"></a>

```typescript
public readonly DescribeScheduledQuery: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScheduledQuery API call.

---

##### `DescribeTable`<sup>Required</sup> <a name="DescribeTable" id="@cdk_utils/iam.timestream.TimestreamOperations.property.DescribeTable"></a>

```typescript
public readonly DescribeTable: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTable API call.

---

##### `ExecuteScheduledQuery`<sup>Required</sup> <a name="ExecuteScheduledQuery" id="@cdk_utils/iam.timestream.TimestreamOperations.property.ExecuteScheduledQuery"></a>

```typescript
public readonly ExecuteScheduledQuery: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteScheduledQuery API call.

---

##### `ListBatchLoadTasks`<sup>Required</sup> <a name="ListBatchLoadTasks" id="@cdk_utils/iam.timestream.TimestreamOperations.property.ListBatchLoadTasks"></a>

```typescript
public readonly ListBatchLoadTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListBatchLoadTasks API call.

---

##### `ListDatabases`<sup>Required</sup> <a name="ListDatabases" id="@cdk_utils/iam.timestream.TimestreamOperations.property.ListDatabases"></a>

```typescript
public readonly ListDatabases: string[];
```

- *Type:* string[]

IAM actions required for the ListDatabases API call.

---

##### `ListScheduledQueries`<sup>Required</sup> <a name="ListScheduledQueries" id="@cdk_utils/iam.timestream.TimestreamOperations.property.ListScheduledQueries"></a>

```typescript
public readonly ListScheduledQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListScheduledQueries API call.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.timestream.TimestreamOperations.property.ListTables"></a>

```typescript
public readonly ListTables: string[];
```

- *Type:* string[]

IAM actions required for the ListTables API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.timestream.TimestreamOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `PrepareQuery`<sup>Required</sup> <a name="PrepareQuery" id="@cdk_utils/iam.timestream.TimestreamOperations.property.PrepareQuery"></a>

```typescript
public readonly PrepareQuery: string[];
```

- *Type:* string[]

IAM actions required for the PrepareQuery API call.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdk_utils/iam.timestream.TimestreamOperations.property.Query"></a>

```typescript
public readonly Query: string[];
```

- *Type:* string[]

IAM actions required for the Query API call.

---

##### `ResumeBatchLoadTask`<sup>Required</sup> <a name="ResumeBatchLoadTask" id="@cdk_utils/iam.timestream.TimestreamOperations.property.ResumeBatchLoadTask"></a>

```typescript
public readonly ResumeBatchLoadTask: string[];
```

- *Type:* string[]

IAM actions required for the ResumeBatchLoadTask API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.timestream.TimestreamOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.timestream.TimestreamOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.timestream.TimestreamOperations.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountSettings API call.

---

##### `UpdateDatabase`<sup>Required</sup> <a name="UpdateDatabase" id="@cdk_utils/iam.timestream.TimestreamOperations.property.UpdateDatabase"></a>

```typescript
public readonly UpdateDatabase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDatabase API call.

---

##### `UpdateScheduledQuery`<sup>Required</sup> <a name="UpdateScheduledQuery" id="@cdk_utils/iam.timestream.TimestreamOperations.property.UpdateScheduledQuery"></a>

```typescript
public readonly UpdateScheduledQuery: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScheduledQuery API call.

---

##### `UpdateTable`<sup>Required</sup> <a name="UpdateTable" id="@cdk_utils/iam.timestream.TimestreamOperations.property.UpdateTable"></a>

```typescript
public readonly UpdateTable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTable API call.

---

##### `WriteRecords`<sup>Required</sup> <a name="WriteRecords" id="@cdk_utils/iam.timestream.TimestreamOperations.property.WriteRecords"></a>

```typescript
public readonly WriteRecords: string[];
```

- *Type:* string[]

IAM actions required for the WriteRecords API call.

---

### TimestreamResources <a name="TimestreamResources" id="@cdk_utils/iam.timestream.TimestreamResources"></a>

ARN builders, validators, and parsers for timestream resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.timestream.TimestreamResources.Initializer"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

new timestream.TimestreamResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamResources.database">database</a></code> | Builds an ARN for the database resource. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamResources.isValidDatabaseArn">isValidDatabaseArn</a></code> | Validates whether a string is a valid ARN for the database resource. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamResources.isValidScheduledQueryArn">isValidScheduledQueryArn</a></code> | Validates whether a string is a valid ARN for the scheduled-query resource. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamResources.isValidTableArn">isValidTableArn</a></code> | Validates whether a string is a valid ARN for the table resource. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamResources.parseDatabaseArn">parseDatabaseArn</a></code> | Parses a database ARN into its components. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamResources.parseScheduledQueryArn">parseScheduledQueryArn</a></code> | Parses a scheduled-query ARN into its components. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamResources.parseTableArn">parseTableArn</a></code> | Parses a table ARN into its components. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamResources.scheduledQuery">scheduledQuery</a></code> | Builds an ARN for the scheduled-query resource. |
| <code><a href="#@cdk_utils/iam.timestream.TimestreamResources.table">table</a></code> | Builds an ARN for the table resource. |

---

##### `database` <a name="database" id="@cdk_utils/iam.timestream.TimestreamResources.database"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamResources.database(props: TimestreamDatabaseArnProps)
```

Builds an ARN for the database resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.timestream.TimestreamResources.database.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.timestream.TimestreamDatabaseArnProps">TimestreamDatabaseArnProps</a>

---

##### `isValidDatabaseArn` <a name="isValidDatabaseArn" id="@cdk_utils/iam.timestream.TimestreamResources.isValidDatabaseArn"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamResources.isValidDatabaseArn(arn: string)
```

Validates whether a string is a valid ARN for the database resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream.TimestreamResources.isValidDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScheduledQueryArn` <a name="isValidScheduledQueryArn" id="@cdk_utils/iam.timestream.TimestreamResources.isValidScheduledQueryArn"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamResources.isValidScheduledQueryArn(arn: string)
```

Validates whether a string is a valid ARN for the scheduled-query resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream.TimestreamResources.isValidScheduledQueryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTableArn` <a name="isValidTableArn" id="@cdk_utils/iam.timestream.TimestreamResources.isValidTableArn"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamResources.isValidTableArn(arn: string)
```

Validates whether a string is a valid ARN for the table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream.TimestreamResources.isValidTableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatabaseArn` <a name="parseDatabaseArn" id="@cdk_utils/iam.timestream.TimestreamResources.parseDatabaseArn"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamResources.parseDatabaseArn(arn: string)
```

Parses a database ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream.TimestreamResources.parseDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScheduledQueryArn` <a name="parseScheduledQueryArn" id="@cdk_utils/iam.timestream.TimestreamResources.parseScheduledQueryArn"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamResources.parseScheduledQueryArn(arn: string)
```

Parses a scheduled-query ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream.TimestreamResources.parseScheduledQueryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTableArn` <a name="parseTableArn" id="@cdk_utils/iam.timestream.TimestreamResources.parseTableArn"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamResources.parseTableArn(arn: string)
```

Parses a table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream.TimestreamResources.parseTableArn.parameter.arn"></a>

- *Type:* string

---

##### `scheduledQuery` <a name="scheduledQuery" id="@cdk_utils/iam.timestream.TimestreamResources.scheduledQuery"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamResources.scheduledQuery(props: TimestreamScheduledQueryArnProps)
```

Builds an ARN for the scheduled-query resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.timestream.TimestreamResources.scheduledQuery.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.timestream.TimestreamScheduledQueryArnProps">TimestreamScheduledQueryArnProps</a>

---

##### `table` <a name="table" id="@cdk_utils/iam.timestream.TimestreamResources.table"></a>

```typescript
import { timestream } from '@cdk_utils/iam'

timestream.TimestreamResources.table(props: TimestreamTableArnProps)
```

Builds an ARN for the table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.timestream.TimestreamResources.table.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.timestream.TimestreamTableArnProps">TimestreamTableArnProps</a>

---




