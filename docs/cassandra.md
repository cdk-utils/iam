# `cassandra` Submodule <a name="`cassandra` Submodule" id="@cdk_utils/iam.cassandra"></a>


## Structs <a name="Structs" id="Structs"></a>

### CassandraKeyspaceArnComponents <a name="CassandraKeyspaceArnComponents" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnComponents"></a>

Parsed components of a keyspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnComponents.Initializer"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

const cassandraKeyspaceArnComponents: cassandra.CassandraKeyspaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraKeyspaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraKeyspaceArnComponents.property.keyspaceName">keyspaceName</a></code> | <code>string</code> | The KeyspaceName component. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraKeyspaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraKeyspaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnComponents.property.keyspaceName"></a>

```typescript
public readonly keyspaceName: string;
```

- *Type:* string

The KeyspaceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CassandraKeyspaceArnProps <a name="CassandraKeyspaceArnProps" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps"></a>

Properties for building a keyspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps.Initializer"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

const cassandraKeyspaceArnProps: cassandra.CassandraKeyspaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps.property.keyspaceName">keyspaceName</a></code> | <code>string</code> | The KeyspaceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps.property.keyspaceName"></a>

```typescript
public readonly keyspaceName: string;
```

- *Type:* string

The KeyspaceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CassandraStreamArnComponents <a name="CassandraStreamArnComponents" id="@cdk_utils/iam.cassandra.CassandraStreamArnComponents"></a>

Parsed components of a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cassandra.CassandraStreamArnComponents.Initializer"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

const cassandraStreamArnComponents: cassandra.CassandraStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.keyspaceName">keyspaceName</a></code> | <code>string</code> | The KeyspaceName component. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.streamLabel">streamLabel</a></code> | <code>string</code> | The StreamLabel component. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.keyspaceName"></a>

```typescript
public readonly keyspaceName: string;
```

- *Type:* string

The KeyspaceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamLabel`<sup>Required</sup> <a name="streamLabel" id="@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.streamLabel"></a>

```typescript
public readonly streamLabel: string;
```

- *Type:* string

The StreamLabel component.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.cassandra.CassandraStreamArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

### CassandraStreamArnProps <a name="CassandraStreamArnProps" id="@cdk_utils/iam.cassandra.CassandraStreamArnProps"></a>

Properties for building a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cassandra.CassandraStreamArnProps.Initializer"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

const cassandraStreamArnProps: cassandra.CassandraStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.keyspaceName">keyspaceName</a></code> | <code>string</code> | The KeyspaceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.streamLabel">streamLabel</a></code> | <code>string</code> | The StreamLabel component of the ARN. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.keyspaceName"></a>

```typescript
public readonly keyspaceName: string;
```

- *Type:* string

The KeyspaceName component of the ARN.

---

##### `streamLabel`<sup>Required</sup> <a name="streamLabel" id="@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.streamLabel"></a>

```typescript
public readonly streamLabel: string;
```

- *Type:* string

The StreamLabel component of the ARN.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cassandra.CassandraStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CassandraTableArnComponents <a name="CassandraTableArnComponents" id="@cdk_utils/iam.cassandra.CassandraTableArnComponents"></a>

Parsed components of a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cassandra.CassandraTableArnComponents.Initializer"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

const cassandraTableArnComponents: cassandra.CassandraTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraTableArnComponents.property.keyspaceName">keyspaceName</a></code> | <code>string</code> | The KeyspaceName component. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraTableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraTableArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cassandra.CassandraTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdk_utils/iam.cassandra.CassandraTableArnComponents.property.keyspaceName"></a>

```typescript
public readonly keyspaceName: string;
```

- *Type:* string

The KeyspaceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cassandra.CassandraTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cassandra.CassandraTableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.cassandra.CassandraTableArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

### CassandraTableArnProps <a name="CassandraTableArnProps" id="@cdk_utils/iam.cassandra.CassandraTableArnProps"></a>

Properties for building a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cassandra.CassandraTableArnProps.Initializer"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

const cassandraTableArnProps: cassandra.CassandraTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraTableArnProps.property.keyspaceName">keyspaceName</a></code> | <code>string</code> | The KeyspaceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraTableArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraTableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdk_utils/iam.cassandra.CassandraTableArnProps.property.keyspaceName"></a>

```typescript
public readonly keyspaceName: string;
```

- *Type:* string

The KeyspaceName component of the ARN.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.cassandra.CassandraTableArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cassandra.CassandraTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cassandra.CassandraTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cassandra.CassandraTableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CassandraActions <a name="CassandraActions" id="@cdk_utils/iam.cassandra.CassandraActions"></a>

IAM action constants for the cassandra service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cassandra.CassandraActions.Initializer"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

new cassandra.CassandraActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.actionGetRecords">actionGetRecords</a></code> | <code>string</code> | [Read] cassandra:GetRecords. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.actionGetShardIterator">actionGetShardIterator</a></code> | <code>string</code> | [Read] cassandra:GetShardIterator. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.actionGetStream">actionGetStream</a></code> | <code>string</code> | [Read] cassandra:GetStream. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.Alter">Alter</a></code> | <code>string</code> | [Write] cassandra:Alter. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.AlterMultiRegionResource">AlterMultiRegionResource</a></code> | <code>string</code> | [Write] cassandra:AlterMultiRegionResource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.Create">Create</a></code> | <code>string</code> | [Write] cassandra:Create. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.CreateMultiRegionResource">CreateMultiRegionResource</a></code> | <code>string</code> | [Write] cassandra:CreateMultiRegionResource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.Drop">Drop</a></code> | <code>string</code> | [Write] cassandra:Drop. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.DropMultiRegionResource">DropMultiRegionResource</a></code> | <code>string</code> | [Write] cassandra:DropMultiRegionResource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.ListStreams">ListStreams</a></code> | <code>string</code> | [List] cassandra:ListStreams. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.Modify">Modify</a></code> | <code>string</code> | [Write] cassandra:Modify. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.ModifyMultiRegionResource">ModifyMultiRegionResource</a></code> | <code>string</code> | [Write] cassandra:ModifyMultiRegionResource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.Restore">Restore</a></code> | <code>string</code> | [Write] cassandra:Restore. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.RestoreMultiRegionTable">RestoreMultiRegionTable</a></code> | <code>string</code> | [Write] cassandra:RestoreMultiRegionTable. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.Select">Select</a></code> | <code>string</code> | [Read] cassandra:Select. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.SelectMultiRegionResource">SelectMultiRegionResource</a></code> | <code>string</code> | [Read] cassandra:SelectMultiRegionResource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.TagMultiRegionResource">TagMultiRegionResource</a></code> | <code>string</code> | [Tagging] cassandra:TagMultiRegionResource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cassandra:TagResource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.UnTagMultiRegionResource">UnTagMultiRegionResource</a></code> | <code>string</code> | [Tagging] cassandra:UnTagMultiRegionResource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cassandra:UntagResource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraActions.property.UpdatePartitioner">UpdatePartitioner</a></code> | <code>string</code> | [Write] cassandra:UpdatePartitioner. |

---

##### `actionGetRecords`<sup>Required</sup> <a name="actionGetRecords" id="@cdk_utils/iam.cassandra.CassandraActions.property.actionGetRecords"></a>

```typescript
public readonly actionGetRecords: string;
```

- *Type:* string

[Read] cassandra:GetRecords.

---

##### `actionGetShardIterator`<sup>Required</sup> <a name="actionGetShardIterator" id="@cdk_utils/iam.cassandra.CassandraActions.property.actionGetShardIterator"></a>

```typescript
public readonly actionGetShardIterator: string;
```

- *Type:* string

[Read] cassandra:GetShardIterator.

---

##### `actionGetStream`<sup>Required</sup> <a name="actionGetStream" id="@cdk_utils/iam.cassandra.CassandraActions.property.actionGetStream"></a>

```typescript
public readonly actionGetStream: string;
```

- *Type:* string

[Read] cassandra:GetStream.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cassandra.CassandraActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cassandra.CassandraActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cassandra.CassandraActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cassandra.CassandraActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cassandra.CassandraActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `Alter`<sup>Required</sup> <a name="Alter" id="@cdk_utils/iam.cassandra.CassandraActions.property.Alter"></a>

```typescript
public readonly Alter: string;
```

- *Type:* string

[Write] cassandra:Alter.

---

##### `AlterMultiRegionResource`<sup>Required</sup> <a name="AlterMultiRegionResource" id="@cdk_utils/iam.cassandra.CassandraActions.property.AlterMultiRegionResource"></a>

```typescript
public readonly AlterMultiRegionResource: string;
```

- *Type:* string

[Write] cassandra:AlterMultiRegionResource.

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdk_utils/iam.cassandra.CassandraActions.property.Create"></a>

```typescript
public readonly Create: string;
```

- *Type:* string

[Write] cassandra:Create.

---

##### `CreateMultiRegionResource`<sup>Required</sup> <a name="CreateMultiRegionResource" id="@cdk_utils/iam.cassandra.CassandraActions.property.CreateMultiRegionResource"></a>

```typescript
public readonly CreateMultiRegionResource: string;
```

- *Type:* string

[Write] cassandra:CreateMultiRegionResource.

---

##### `Drop`<sup>Required</sup> <a name="Drop" id="@cdk_utils/iam.cassandra.CassandraActions.property.Drop"></a>

```typescript
public readonly Drop: string;
```

- *Type:* string

[Write] cassandra:Drop.

---

##### `DropMultiRegionResource`<sup>Required</sup> <a name="DropMultiRegionResource" id="@cdk_utils/iam.cassandra.CassandraActions.property.DropMultiRegionResource"></a>

```typescript
public readonly DropMultiRegionResource: string;
```

- *Type:* string

[Write] cassandra:DropMultiRegionResource.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.cassandra.CassandraActions.property.ListStreams"></a>

```typescript
public readonly ListStreams: string;
```

- *Type:* string

[List] cassandra:ListStreams.

---

##### `Modify`<sup>Required</sup> <a name="Modify" id="@cdk_utils/iam.cassandra.CassandraActions.property.Modify"></a>

```typescript
public readonly Modify: string;
```

- *Type:* string

[Write] cassandra:Modify.

---

##### `ModifyMultiRegionResource`<sup>Required</sup> <a name="ModifyMultiRegionResource" id="@cdk_utils/iam.cassandra.CassandraActions.property.ModifyMultiRegionResource"></a>

```typescript
public readonly ModifyMultiRegionResource: string;
```

- *Type:* string

[Write] cassandra:ModifyMultiRegionResource.

---

##### `Restore`<sup>Required</sup> <a name="Restore" id="@cdk_utils/iam.cassandra.CassandraActions.property.Restore"></a>

```typescript
public readonly Restore: string;
```

- *Type:* string

[Write] cassandra:Restore.

---

##### `RestoreMultiRegionTable`<sup>Required</sup> <a name="RestoreMultiRegionTable" id="@cdk_utils/iam.cassandra.CassandraActions.property.RestoreMultiRegionTable"></a>

```typescript
public readonly RestoreMultiRegionTable: string;
```

- *Type:* string

[Write] cassandra:RestoreMultiRegionTable.

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdk_utils/iam.cassandra.CassandraActions.property.Select"></a>

```typescript
public readonly Select: string;
```

- *Type:* string

[Read] cassandra:Select.

---

##### `SelectMultiRegionResource`<sup>Required</sup> <a name="SelectMultiRegionResource" id="@cdk_utils/iam.cassandra.CassandraActions.property.SelectMultiRegionResource"></a>

```typescript
public readonly SelectMultiRegionResource: string;
```

- *Type:* string

[Read] cassandra:SelectMultiRegionResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cassandra.CassandraActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagMultiRegionResource`<sup>Required</sup> <a name="TagMultiRegionResource" id="@cdk_utils/iam.cassandra.CassandraActions.property.TagMultiRegionResource"></a>

```typescript
public readonly TagMultiRegionResource: string;
```

- *Type:* string

[Tagging] cassandra:TagMultiRegionResource.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cassandra.CassandraActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cassandra:TagResource.

---

##### `UnTagMultiRegionResource`<sup>Required</sup> <a name="UnTagMultiRegionResource" id="@cdk_utils/iam.cassandra.CassandraActions.property.UnTagMultiRegionResource"></a>

```typescript
public readonly UnTagMultiRegionResource: string;
```

- *Type:* string

[Tagging] cassandra:UnTagMultiRegionResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cassandra.CassandraActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cassandra:UntagResource.

---

##### `UpdatePartitioner`<sup>Required</sup> <a name="UpdatePartitioner" id="@cdk_utils/iam.cassandra.CassandraActions.property.UpdatePartitioner"></a>

```typescript
public readonly UpdatePartitioner: string;
```

- *Type:* string

[Write] cassandra:UpdatePartitioner.

---

### CassandraConditions <a name="CassandraConditions" id="@cdk_utils/iam.cassandra.CassandraConditions"></a>

Condition key constants and builders for cassandra.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cassandra.CassandraConditions.Initializer"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

new cassandra.CassandraConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cassandra.CassandraConditions.requestTag"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cassandra.CassandraConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cassandra.CassandraConditions.resourceTag"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cassandra.CassandraConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cassandra.CassandraConditions.tagKeys"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cassandra.CassandraConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.AlterConditionKeys">AlterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Alter action. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.AlterMultiRegionResourceConditionKeys">AlterMultiRegionResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AlterMultiRegionResource action. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.CreateConditionKeys">CreateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Create action. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.CreateMultiRegionResourceConditionKeys">CreateMultiRegionResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMultiRegionResource action. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.TagMultiRegionResourceConditionKeys">TagMultiRegionResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagMultiRegionResource action. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.UnTagMultiRegionResourceConditionKeys">UnTagMultiRegionResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UnTagMultiRegionResource action. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AlterConditionKeys`<sup>Required</sup> <a name="AlterConditionKeys" id="@cdk_utils/iam.cassandra.CassandraConditions.property.AlterConditionKeys"></a>

```typescript
public readonly AlterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Alter action.

---

##### `AlterMultiRegionResourceConditionKeys`<sup>Required</sup> <a name="AlterMultiRegionResourceConditionKeys" id="@cdk_utils/iam.cassandra.CassandraConditions.property.AlterMultiRegionResourceConditionKeys"></a>

```typescript
public readonly AlterMultiRegionResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AlterMultiRegionResource action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cassandra.CassandraConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cassandra.CassandraConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cassandra.CassandraConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateConditionKeys`<sup>Required</sup> <a name="CreateConditionKeys" id="@cdk_utils/iam.cassandra.CassandraConditions.property.CreateConditionKeys"></a>

```typescript
public readonly CreateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Create action.

---

##### `CreateMultiRegionResourceConditionKeys`<sup>Required</sup> <a name="CreateMultiRegionResourceConditionKeys" id="@cdk_utils/iam.cassandra.CassandraConditions.property.CreateMultiRegionResourceConditionKeys"></a>

```typescript
public readonly CreateMultiRegionResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMultiRegionResource action.

---

##### `TagMultiRegionResourceConditionKeys`<sup>Required</sup> <a name="TagMultiRegionResourceConditionKeys" id="@cdk_utils/iam.cassandra.CassandraConditions.property.TagMultiRegionResourceConditionKeys"></a>

```typescript
public readonly TagMultiRegionResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagMultiRegionResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cassandra.CassandraConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UnTagMultiRegionResourceConditionKeys`<sup>Required</sup> <a name="UnTagMultiRegionResourceConditionKeys" id="@cdk_utils/iam.cassandra.CassandraConditions.property.UnTagMultiRegionResourceConditionKeys"></a>

```typescript
public readonly UnTagMultiRegionResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UnTagMultiRegionResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cassandra.CassandraConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CassandraOperations <a name="CassandraOperations" id="@cdk_utils/iam.cassandra.CassandraOperations"></a>

API operation to required IAM actions mapping for cassandra.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cassandra.CassandraOperations.Initializer"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

new cassandra.CassandraOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.CreateKeyspace">CreateKeyspace</a></code> | <code>string[]</code> | IAM actions required for the CreateKeyspace API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.CreateTable">CreateTable</a></code> | <code>string[]</code> | IAM actions required for the CreateTable API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.CreateType">CreateType</a></code> | <code>string[]</code> | IAM actions required for the CreateType API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.DeleteKeyspace">DeleteKeyspace</a></code> | <code>string[]</code> | IAM actions required for the DeleteKeyspace API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.DeleteTable">DeleteTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteTable API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.DeleteType">DeleteType</a></code> | <code>string[]</code> | IAM actions required for the DeleteType API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.ListKeyspaces">ListKeyspaces</a></code> | <code>string[]</code> | IAM actions required for the ListKeyspaces API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.ListStreams">ListStreams</a></code> | <code>string[]</code> | IAM actions required for the ListStreams API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.ListTables">ListTables</a></code> | <code>string[]</code> | IAM actions required for the ListTables API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.ListTypes">ListTypes</a></code> | <code>string[]</code> | IAM actions required for the ListTypes API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.opGetKeyspace">opGetKeyspace</a></code> | <code>string[]</code> | IAM actions required for the GetKeyspace API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.opGetRecords">opGetRecords</a></code> | <code>string[]</code> | IAM actions required for the GetRecords API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.opGetShardIterator">opGetShardIterator</a></code> | <code>string[]</code> | IAM actions required for the GetShardIterator API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.opGetStream">opGetStream</a></code> | <code>string[]</code> | IAM actions required for the GetStream API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.opGetTable">opGetTable</a></code> | <code>string[]</code> | IAM actions required for the GetTable API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.opGetTableAutoScalingSettings">opGetTableAutoScalingSettings</a></code> | <code>string[]</code> | IAM actions required for the GetTableAutoScalingSettings API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.opGetType">opGetType</a></code> | <code>string[]</code> | IAM actions required for the GetType API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.RestoreTable">RestoreTable</a></code> | <code>string[]</code> | IAM actions required for the RestoreTable API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.UpdateKeyspace">UpdateKeyspace</a></code> | <code>string[]</code> | IAM actions required for the UpdateKeyspace API call. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraOperations.property.UpdateTable">UpdateTable</a></code> | <code>string[]</code> | IAM actions required for the UpdateTable API call. |

---

##### `CreateKeyspace`<sup>Required</sup> <a name="CreateKeyspace" id="@cdk_utils/iam.cassandra.CassandraOperations.property.CreateKeyspace"></a>

```typescript
public readonly CreateKeyspace: string[];
```

- *Type:* string[]

IAM actions required for the CreateKeyspace API call.

---

##### `CreateTable`<sup>Required</sup> <a name="CreateTable" id="@cdk_utils/iam.cassandra.CassandraOperations.property.CreateTable"></a>

```typescript
public readonly CreateTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateTable API call.

---

##### `CreateType`<sup>Required</sup> <a name="CreateType" id="@cdk_utils/iam.cassandra.CassandraOperations.property.CreateType"></a>

```typescript
public readonly CreateType: string[];
```

- *Type:* string[]

IAM actions required for the CreateType API call.

---

##### `DeleteKeyspace`<sup>Required</sup> <a name="DeleteKeyspace" id="@cdk_utils/iam.cassandra.CassandraOperations.property.DeleteKeyspace"></a>

```typescript
public readonly DeleteKeyspace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKeyspace API call.

---

##### `DeleteTable`<sup>Required</sup> <a name="DeleteTable" id="@cdk_utils/iam.cassandra.CassandraOperations.property.DeleteTable"></a>

```typescript
public readonly DeleteTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTable API call.

---

##### `DeleteType`<sup>Required</sup> <a name="DeleteType" id="@cdk_utils/iam.cassandra.CassandraOperations.property.DeleteType"></a>

```typescript
public readonly DeleteType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteType API call.

---

##### `ListKeyspaces`<sup>Required</sup> <a name="ListKeyspaces" id="@cdk_utils/iam.cassandra.CassandraOperations.property.ListKeyspaces"></a>

```typescript
public readonly ListKeyspaces: string[];
```

- *Type:* string[]

IAM actions required for the ListKeyspaces API call.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.cassandra.CassandraOperations.property.ListStreams"></a>

```typescript
public readonly ListStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListStreams API call.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.cassandra.CassandraOperations.property.ListTables"></a>

```typescript
public readonly ListTables: string[];
```

- *Type:* string[]

IAM actions required for the ListTables API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cassandra.CassandraOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTypes`<sup>Required</sup> <a name="ListTypes" id="@cdk_utils/iam.cassandra.CassandraOperations.property.ListTypes"></a>

```typescript
public readonly ListTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListTypes API call.

---

##### `opGetKeyspace`<sup>Required</sup> <a name="opGetKeyspace" id="@cdk_utils/iam.cassandra.CassandraOperations.property.opGetKeyspace"></a>

```typescript
public readonly opGetKeyspace: string[];
```

- *Type:* string[]

IAM actions required for the GetKeyspace API call.

---

##### `opGetRecords`<sup>Required</sup> <a name="opGetRecords" id="@cdk_utils/iam.cassandra.CassandraOperations.property.opGetRecords"></a>

```typescript
public readonly opGetRecords: string[];
```

- *Type:* string[]

IAM actions required for the GetRecords API call.

---

##### `opGetShardIterator`<sup>Required</sup> <a name="opGetShardIterator" id="@cdk_utils/iam.cassandra.CassandraOperations.property.opGetShardIterator"></a>

```typescript
public readonly opGetShardIterator: string[];
```

- *Type:* string[]

IAM actions required for the GetShardIterator API call.

---

##### `opGetStream`<sup>Required</sup> <a name="opGetStream" id="@cdk_utils/iam.cassandra.CassandraOperations.property.opGetStream"></a>

```typescript
public readonly opGetStream: string[];
```

- *Type:* string[]

IAM actions required for the GetStream API call.

---

##### `opGetTable`<sup>Required</sup> <a name="opGetTable" id="@cdk_utils/iam.cassandra.CassandraOperations.property.opGetTable"></a>

```typescript
public readonly opGetTable: string[];
```

- *Type:* string[]

IAM actions required for the GetTable API call.

---

##### `opGetTableAutoScalingSettings`<sup>Required</sup> <a name="opGetTableAutoScalingSettings" id="@cdk_utils/iam.cassandra.CassandraOperations.property.opGetTableAutoScalingSettings"></a>

```typescript
public readonly opGetTableAutoScalingSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetTableAutoScalingSettings API call.

---

##### `opGetType`<sup>Required</sup> <a name="opGetType" id="@cdk_utils/iam.cassandra.CassandraOperations.property.opGetType"></a>

```typescript
public readonly opGetType: string[];
```

- *Type:* string[]

IAM actions required for the GetType API call.

---

##### `RestoreTable`<sup>Required</sup> <a name="RestoreTable" id="@cdk_utils/iam.cassandra.CassandraOperations.property.RestoreTable"></a>

```typescript
public readonly RestoreTable: string[];
```

- *Type:* string[]

IAM actions required for the RestoreTable API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cassandra.CassandraOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cassandra.CassandraOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateKeyspace`<sup>Required</sup> <a name="UpdateKeyspace" id="@cdk_utils/iam.cassandra.CassandraOperations.property.UpdateKeyspace"></a>

```typescript
public readonly UpdateKeyspace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKeyspace API call.

---

##### `UpdateTable`<sup>Required</sup> <a name="UpdateTable" id="@cdk_utils/iam.cassandra.CassandraOperations.property.UpdateTable"></a>

```typescript
public readonly UpdateTable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTable API call.

---

### CassandraResources <a name="CassandraResources" id="@cdk_utils/iam.cassandra.CassandraResources"></a>

ARN builders, validators, and parsers for cassandra resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cassandra.CassandraResources.Initializer"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

new cassandra.CassandraResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraResources.isValidKeyspaceArn">isValidKeyspaceArn</a></code> | Validates whether a string is a valid ARN for the keyspace resource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraResources.isValidStreamArn">isValidStreamArn</a></code> | Validates whether a string is a valid ARN for the stream resource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraResources.isValidTableArn">isValidTableArn</a></code> | Validates whether a string is a valid ARN for the table resource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraResources.keyspace">keyspace</a></code> | Builds an ARN for the keyspace resource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraResources.parseKeyspaceArn">parseKeyspaceArn</a></code> | Parses a keyspace ARN into its components. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraResources.parseStreamArn">parseStreamArn</a></code> | Parses a stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraResources.parseTableArn">parseTableArn</a></code> | Parses a table ARN into its components. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraResources.stream">stream</a></code> | Builds an ARN for the stream resource. |
| <code><a href="#@cdk_utils/iam.cassandra.CassandraResources.table">table</a></code> | Builds an ARN for the table resource. |

---

##### `isValidKeyspaceArn` <a name="isValidKeyspaceArn" id="@cdk_utils/iam.cassandra.CassandraResources.isValidKeyspaceArn"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraResources.isValidKeyspaceArn(arn: string)
```

Validates whether a string is a valid ARN for the keyspace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cassandra.CassandraResources.isValidKeyspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamArn` <a name="isValidStreamArn" id="@cdk_utils/iam.cassandra.CassandraResources.isValidStreamArn"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraResources.isValidStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cassandra.CassandraResources.isValidStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTableArn` <a name="isValidTableArn" id="@cdk_utils/iam.cassandra.CassandraResources.isValidTableArn"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraResources.isValidTableArn(arn: string)
```

Validates whether a string is a valid ARN for the table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cassandra.CassandraResources.isValidTableArn.parameter.arn"></a>

- *Type:* string

---

##### `keyspace` <a name="keyspace" id="@cdk_utils/iam.cassandra.CassandraResources.keyspace"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraResources.keyspace(props: CassandraKeyspaceArnProps)
```

Builds an ARN for the keyspace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cassandra.CassandraResources.keyspace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cassandra.CassandraKeyspaceArnProps">CassandraKeyspaceArnProps</a>

---

##### `parseKeyspaceArn` <a name="parseKeyspaceArn" id="@cdk_utils/iam.cassandra.CassandraResources.parseKeyspaceArn"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraResources.parseKeyspaceArn(arn: string)
```

Parses a keyspace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cassandra.CassandraResources.parseKeyspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamArn` <a name="parseStreamArn" id="@cdk_utils/iam.cassandra.CassandraResources.parseStreamArn"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraResources.parseStreamArn(arn: string)
```

Parses a stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cassandra.CassandraResources.parseStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTableArn` <a name="parseTableArn" id="@cdk_utils/iam.cassandra.CassandraResources.parseTableArn"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraResources.parseTableArn(arn: string)
```

Parses a table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cassandra.CassandraResources.parseTableArn.parameter.arn"></a>

- *Type:* string

---

##### `stream` <a name="stream" id="@cdk_utils/iam.cassandra.CassandraResources.stream"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraResources.stream(props: CassandraStreamArnProps)
```

Builds an ARN for the stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cassandra.CassandraResources.stream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cassandra.CassandraStreamArnProps">CassandraStreamArnProps</a>

---

##### `table` <a name="table" id="@cdk_utils/iam.cassandra.CassandraResources.table"></a>

```typescript
import { cassandra } from '@cdk_utils/iam'

cassandra.CassandraResources.table(props: CassandraTableArnProps)
```

Builds an ARN for the table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cassandra.CassandraResources.table.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cassandra.CassandraTableArnProps">CassandraTableArnProps</a>

---




