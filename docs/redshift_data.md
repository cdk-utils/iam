# `redshift_data` Submodule <a name="`redshift_data` Submodule" id="@cdk_utils/iam.redshift_data"></a>


## Structs <a name="Structs" id="Structs"></a>

### RedshiftDataClusterArnComponents <a name="RedshiftDataClusterArnComponents" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnComponents.Initializer"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

const redshiftDataClusterArnComponents: redshift_data.RedshiftDataClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataClusterArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftDataClusterArnProps <a name="RedshiftDataClusterArnProps" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps.Initializer"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

const redshiftDataClusterArnProps: redshift_data.RedshiftDataClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftDataManagedWorkgroupArnComponents <a name="RedshiftDataManagedWorkgroupArnComponents" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnComponents"></a>

Parsed components of a managed-workgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnComponents.Initializer"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

const redshiftDataManagedWorkgroupArnComponents: redshift_data.RedshiftDataManagedWorkgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnComponents.property.managedWorkgroupId">managedWorkgroupId</a></code> | <code>string</code> | The ManagedWorkgroupId component. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `managedWorkgroupId`<sup>Required</sup> <a name="managedWorkgroupId" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnComponents.property.managedWorkgroupId"></a>

```typescript
public readonly managedWorkgroupId: string;
```

- *Type:* string

The ManagedWorkgroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftDataManagedWorkgroupArnProps <a name="RedshiftDataManagedWorkgroupArnProps" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps"></a>

Properties for building a managed-workgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps.Initializer"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

const redshiftDataManagedWorkgroupArnProps: redshift_data.RedshiftDataManagedWorkgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps.property.managedWorkgroupId">managedWorkgroupId</a></code> | <code>string</code> | The ManagedWorkgroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `managedWorkgroupId`<sup>Required</sup> <a name="managedWorkgroupId" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps.property.managedWorkgroupId"></a>

```typescript
public readonly managedWorkgroupId: string;
```

- *Type:* string

The ManagedWorkgroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftDataWorkgroupArnComponents <a name="RedshiftDataWorkgroupArnComponents" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnComponents"></a>

Parsed components of a workgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnComponents.Initializer"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

const redshiftDataWorkgroupArnComponents: redshift_data.RedshiftDataWorkgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnComponents.property.workgroupId">workgroupId</a></code> | <code>string</code> | The WorkgroupId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workgroupId`<sup>Required</sup> <a name="workgroupId" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnComponents.property.workgroupId"></a>

```typescript
public readonly workgroupId: string;
```

- *Type:* string

The WorkgroupId component.

---

### RedshiftDataWorkgroupArnProps <a name="RedshiftDataWorkgroupArnProps" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps"></a>

Properties for building a workgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps.Initializer"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

const redshiftDataWorkgroupArnProps: redshift_data.RedshiftDataWorkgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps.property.workgroupId">workgroupId</a></code> | <code>string</code> | The WorkgroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workgroupId`<sup>Required</sup> <a name="workgroupId" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps.property.workgroupId"></a>

```typescript
public readonly workgroupId: string;
```

- *Type:* string

The WorkgroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftDataActions <a name="RedshiftDataActions" id="@cdk_utils/iam.redshift_data.RedshiftDataActions"></a>

IAM action constants for the redshift-data service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.Initializer"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

new redshift_data.RedshiftDataActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.actionGetStagingBucketLocation">actionGetStagingBucketLocation</a></code> | <code>string</code> | [Read] redshift-data:GetStagingBucketLocation. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.actionGetStatementResult">actionGetStatementResult</a></code> | <code>string</code> | [Read] redshift-data:GetStatementResult. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.BatchExecuteStatement">BatchExecuteStatement</a></code> | <code>string</code> | [Write] redshift-data:BatchExecuteStatement. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.CancelStatement">CancelStatement</a></code> | <code>string</code> | [Write] redshift-data:CancelStatement. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.DescribeStatement">DescribeStatement</a></code> | <code>string</code> | [Read] redshift-data:DescribeStatement. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.DescribeTable">DescribeTable</a></code> | <code>string</code> | [Read] redshift-data:DescribeTable. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ExecuteStatement">ExecuteStatement</a></code> | <code>string</code> | [Write] redshift-data:ExecuteStatement. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ListDatabases">ListDatabases</a></code> | <code>string</code> | [Read] redshift-data:ListDatabases. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ListSchemas">ListSchemas</a></code> | <code>string</code> | [Read] redshift-data:ListSchemas. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [List] redshift-data:ListSessions. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ListStatements">ListStatements</a></code> | <code>string</code> | [List] redshift-data:ListStatements. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ListTables">ListTables</a></code> | <code>string</code> | [List] redshift-data:ListTables. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetStagingBucketLocation`<sup>Required</sup> <a name="actionGetStagingBucketLocation" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.actionGetStagingBucketLocation"></a>

```typescript
public readonly actionGetStagingBucketLocation: string;
```

- *Type:* string

[Read] redshift-data:GetStagingBucketLocation.

---

##### `actionGetStatementResult`<sup>Required</sup> <a name="actionGetStatementResult" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.actionGetStatementResult"></a>

```typescript
public readonly actionGetStatementResult: string;
```

- *Type:* string

[Read] redshift-data:GetStatementResult.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchExecuteStatement`<sup>Required</sup> <a name="BatchExecuteStatement" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.BatchExecuteStatement"></a>

```typescript
public readonly BatchExecuteStatement: string;
```

- *Type:* string

[Write] redshift-data:BatchExecuteStatement.

---

##### `CancelStatement`<sup>Required</sup> <a name="CancelStatement" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.CancelStatement"></a>

```typescript
public readonly CancelStatement: string;
```

- *Type:* string

[Write] redshift-data:CancelStatement.

---

##### `DescribeStatement`<sup>Required</sup> <a name="DescribeStatement" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.DescribeStatement"></a>

```typescript
public readonly DescribeStatement: string;
```

- *Type:* string

[Read] redshift-data:DescribeStatement.

---

##### `DescribeTable`<sup>Required</sup> <a name="DescribeTable" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.DescribeTable"></a>

```typescript
public readonly DescribeTable: string;
```

- *Type:* string

[Read] redshift-data:DescribeTable.

---

##### `ExecuteStatement`<sup>Required</sup> <a name="ExecuteStatement" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ExecuteStatement"></a>

```typescript
public readonly ExecuteStatement: string;
```

- *Type:* string

[Write] redshift-data:ExecuteStatement.

---

##### `ListDatabases`<sup>Required</sup> <a name="ListDatabases" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ListDatabases"></a>

```typescript
public readonly ListDatabases: string;
```

- *Type:* string

[Read] redshift-data:ListDatabases.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string;
```

- *Type:* string

[Read] redshift-data:ListSchemas.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[List] redshift-data:ListSessions.

---

##### `ListStatements`<sup>Required</sup> <a name="ListStatements" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ListStatements"></a>

```typescript
public readonly ListStatements: string;
```

- *Type:* string

[List] redshift-data:ListStatements.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.ListTables"></a>

```typescript
public readonly ListTables: string;
```

- *Type:* string

[List] redshift-data:ListTables.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.redshift_data.RedshiftDataActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### RedshiftDataConditions <a name="RedshiftDataConditions" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions"></a>

Condition key constants and builders for redshift-data.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.Initializer"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

new redshift_data.RedshiftDataConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.glueCatalogARN">glueCatalogARN</a></code> | Generates a condition block for `redshift-data:glue-catalog-arn`. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.sessionOwnerIAMUserid">sessionOwnerIAMUserid</a></code> | Generates a condition block for `redshift-data:session-owner-iam-userid`. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.statementOwnerIAMUserid">statementOwnerIAMUserid</a></code> | Generates a condition block for `redshift-data:statement-owner-iam-userid`. |

---

##### `glueCatalogARN` <a name="glueCatalogARN" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.glueCatalogARN"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataConditions.glueCatalogARN(value: string)
```

Generates a condition block for `redshift-data:glue-catalog-arn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.glueCatalogARN.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.resourceTag"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `sessionOwnerIAMUserid` <a name="sessionOwnerIAMUserid" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.sessionOwnerIAMUserid"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataConditions.sessionOwnerIAMUserid(value: string)
```

Generates a condition block for `redshift-data:session-owner-iam-userid`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.sessionOwnerIAMUserid.parameter.value"></a>

- *Type:* string

---

##### `statementOwnerIAMUserid` <a name="statementOwnerIAMUserid" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.statementOwnerIAMUserid"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataConditions.statementOwnerIAMUserid(value: string)
```

Generates a condition block for `redshift-data:statement-owner-iam-userid`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.statementOwnerIAMUserid.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.actionGetStatementResultConditionKeys">actionGetStatementResultConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetStatementResult action. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.BatchExecuteStatementConditionKeys">BatchExecuteStatementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchExecuteStatement action. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.CancelStatementConditionKeys">CancelStatementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelStatement action. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.DescribeStatementConditionKeys">DescribeStatementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeStatement action. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.ExecuteStatementConditionKeys">ExecuteStatementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExecuteStatement action. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.GLUE_CATALOG_ARN">GLUE_CATALOG_ARN</a></code> | <code>string</code> | Condition key: redshift-data:glue-catalog-arn (ARN). |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.ListSessionsConditionKeys">ListSessionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSessions action. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.ListStatementsConditionKeys">ListStatementsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListStatements action. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.SESSION_OWNER_IAM_USERID">SESSION_OWNER_IAM_USERID</a></code> | <code>string</code> | Condition key: redshift-data:session-owner-iam-userid (String). |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.STATEMENT_OWNER_IAM_USERID">STATEMENT_OWNER_IAM_USERID</a></code> | <code>string</code> | Condition key: redshift-data:statement-owner-iam-userid (String). |

---

##### `actionGetStatementResultConditionKeys`<sup>Required</sup> <a name="actionGetStatementResultConditionKeys" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.actionGetStatementResultConditionKeys"></a>

```typescript
public readonly actionGetStatementResultConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetStatementResult action.

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `BatchExecuteStatementConditionKeys`<sup>Required</sup> <a name="BatchExecuteStatementConditionKeys" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.BatchExecuteStatementConditionKeys"></a>

```typescript
public readonly BatchExecuteStatementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchExecuteStatement action.

---

##### `CancelStatementConditionKeys`<sup>Required</sup> <a name="CancelStatementConditionKeys" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.CancelStatementConditionKeys"></a>

```typescript
public readonly CancelStatementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelStatement action.

---

##### `DescribeStatementConditionKeys`<sup>Required</sup> <a name="DescribeStatementConditionKeys" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.DescribeStatementConditionKeys"></a>

```typescript
public readonly DescribeStatementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeStatement action.

---

##### `ExecuteStatementConditionKeys`<sup>Required</sup> <a name="ExecuteStatementConditionKeys" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.ExecuteStatementConditionKeys"></a>

```typescript
public readonly ExecuteStatementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExecuteStatement action.

---

##### `GLUE_CATALOG_ARN`<sup>Required</sup> <a name="GLUE_CATALOG_ARN" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.GLUE_CATALOG_ARN"></a>

```typescript
public readonly GLUE_CATALOG_ARN: string;
```

- *Type:* string

Condition key: redshift-data:glue-catalog-arn (ARN).

---

##### `ListSessionsConditionKeys`<sup>Required</sup> <a name="ListSessionsConditionKeys" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.ListSessionsConditionKeys"></a>

```typescript
public readonly ListSessionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSessions action.

---

##### `ListStatementsConditionKeys`<sup>Required</sup> <a name="ListStatementsConditionKeys" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.ListStatementsConditionKeys"></a>

```typescript
public readonly ListStatementsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListStatements action.

---

##### `SESSION_OWNER_IAM_USERID`<sup>Required</sup> <a name="SESSION_OWNER_IAM_USERID" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.SESSION_OWNER_IAM_USERID"></a>

```typescript
public readonly SESSION_OWNER_IAM_USERID: string;
```

- *Type:* string

Condition key: redshift-data:session-owner-iam-userid (String).

---

##### `STATEMENT_OWNER_IAM_USERID`<sup>Required</sup> <a name="STATEMENT_OWNER_IAM_USERID" id="@cdk_utils/iam.redshift_data.RedshiftDataConditions.property.STATEMENT_OWNER_IAM_USERID"></a>

```typescript
public readonly STATEMENT_OWNER_IAM_USERID: string;
```

- *Type:* string

Condition key: redshift-data:statement-owner-iam-userid (String).

---

### RedshiftDataOperations <a name="RedshiftDataOperations" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations"></a>

API operation to required IAM actions mapping for redshift-data.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.Initializer"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

new redshift_data.RedshiftDataOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.BatchExecuteStatement">BatchExecuteStatement</a></code> | <code>string[]</code> | IAM actions required for the BatchExecuteStatement API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.CancelStatement">CancelStatement</a></code> | <code>string[]</code> | IAM actions required for the CancelStatement API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.DescribeStatement">DescribeStatement</a></code> | <code>string[]</code> | IAM actions required for the DescribeStatement API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.DescribeTable">DescribeTable</a></code> | <code>string[]</code> | IAM actions required for the DescribeTable API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ExecuteStatement">ExecuteStatement</a></code> | <code>string[]</code> | IAM actions required for the ExecuteStatement API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ListDatabases">ListDatabases</a></code> | <code>string[]</code> | IAM actions required for the ListDatabases API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ListSchemas">ListSchemas</a></code> | <code>string[]</code> | IAM actions required for the ListSchemas API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ListStatements">ListStatements</a></code> | <code>string[]</code> | IAM actions required for the ListStatements API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ListTables">ListTables</a></code> | <code>string[]</code> | IAM actions required for the ListTables API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.opGetStatementResult">opGetStatementResult</a></code> | <code>string[]</code> | IAM actions required for the GetStatementResult API call. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.opGetStatementResultV2">opGetStatementResultV2</a></code> | <code>string[]</code> | IAM actions required for the GetStatementResultV2 API call. |

---

##### `BatchExecuteStatement`<sup>Required</sup> <a name="BatchExecuteStatement" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.BatchExecuteStatement"></a>

```typescript
public readonly BatchExecuteStatement: string[];
```

- *Type:* string[]

IAM actions required for the BatchExecuteStatement API call.

---

##### `CancelStatement`<sup>Required</sup> <a name="CancelStatement" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.CancelStatement"></a>

```typescript
public readonly CancelStatement: string[];
```

- *Type:* string[]

IAM actions required for the CancelStatement API call.

---

##### `DescribeStatement`<sup>Required</sup> <a name="DescribeStatement" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.DescribeStatement"></a>

```typescript
public readonly DescribeStatement: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStatement API call.

---

##### `DescribeTable`<sup>Required</sup> <a name="DescribeTable" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.DescribeTable"></a>

```typescript
public readonly DescribeTable: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTable API call.

---

##### `ExecuteStatement`<sup>Required</sup> <a name="ExecuteStatement" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ExecuteStatement"></a>

```typescript
public readonly ExecuteStatement: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteStatement API call.

---

##### `ListDatabases`<sup>Required</sup> <a name="ListDatabases" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ListDatabases"></a>

```typescript
public readonly ListDatabases: string[];
```

- *Type:* string[]

IAM actions required for the ListDatabases API call.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string[];
```

- *Type:* string[]

IAM actions required for the ListSchemas API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListStatements`<sup>Required</sup> <a name="ListStatements" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ListStatements"></a>

```typescript
public readonly ListStatements: string[];
```

- *Type:* string[]

IAM actions required for the ListStatements API call.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.ListTables"></a>

```typescript
public readonly ListTables: string[];
```

- *Type:* string[]

IAM actions required for the ListTables API call.

---

##### `opGetStatementResult`<sup>Required</sup> <a name="opGetStatementResult" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.opGetStatementResult"></a>

```typescript
public readonly opGetStatementResult: string[];
```

- *Type:* string[]

IAM actions required for the GetStatementResult API call.

---

##### `opGetStatementResultV2`<sup>Required</sup> <a name="opGetStatementResultV2" id="@cdk_utils/iam.redshift_data.RedshiftDataOperations.property.opGetStatementResultV2"></a>

```typescript
public readonly opGetStatementResultV2: string[];
```

- *Type:* string[]

IAM actions required for the GetStatementResultV2 API call.

---

### RedshiftDataResources <a name="RedshiftDataResources" id="@cdk_utils/iam.redshift_data.RedshiftDataResources"></a>

ARN builders, validators, and parsers for redshift-data resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.Initializer"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

new redshift_data.RedshiftDataResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataResources.isValidManagedWorkgroupArn">isValidManagedWorkgroupArn</a></code> | Validates whether a string is a valid ARN for the managed-workgroup resource. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataResources.isValidWorkgroupArn">isValidWorkgroupArn</a></code> | Validates whether a string is a valid ARN for the workgroup resource. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataResources.managedWorkgroup">managedWorkgroup</a></code> | Builds an ARN for the managed-workgroup resource. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataResources.parseManagedWorkgroupArn">parseManagedWorkgroupArn</a></code> | Parses a managed-workgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataResources.parseWorkgroupArn">parseWorkgroupArn</a></code> | Parses a workgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift_data.RedshiftDataResources.workgroup">workgroup</a></code> | Builds an ARN for the workgroup resource. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.cluster"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataResources.cluster(props: RedshiftDataClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift_data.RedshiftDataClusterArnProps">RedshiftDataClusterArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.isValidClusterArn"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedWorkgroupArn` <a name="isValidManagedWorkgroupArn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.isValidManagedWorkgroupArn"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataResources.isValidManagedWorkgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the managed-workgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.isValidManagedWorkgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkgroupArn` <a name="isValidWorkgroupArn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.isValidWorkgroupArn"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataResources.isValidWorkgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the workgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.isValidWorkgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `managedWorkgroup` <a name="managedWorkgroup" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.managedWorkgroup"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataResources.managedWorkgroup(props: RedshiftDataManagedWorkgroupArnProps)
```

Builds an ARN for the managed-workgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.managedWorkgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift_data.RedshiftDataManagedWorkgroupArnProps">RedshiftDataManagedWorkgroupArnProps</a>

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.parseClusterArn"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedWorkgroupArn` <a name="parseManagedWorkgroupArn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.parseManagedWorkgroupArn"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataResources.parseManagedWorkgroupArn(arn: string)
```

Parses a managed-workgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.parseManagedWorkgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkgroupArn` <a name="parseWorkgroupArn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.parseWorkgroupArn"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataResources.parseWorkgroupArn(arn: string)
```

Parses a workgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.parseWorkgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `workgroup` <a name="workgroup" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.workgroup"></a>

```typescript
import { redshift_data } from '@cdk_utils/iam'

redshift_data.RedshiftDataResources.workgroup(props: RedshiftDataWorkgroupArnProps)
```

Builds an ARN for the workgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift_data.RedshiftDataResources.workgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift_data.RedshiftDataWorkgroupArnProps">RedshiftDataWorkgroupArnProps</a>

---




