# `rds_data` Submodule <a name="`rds_data` Submodule" id="@cdk_utils/iam.rds_data"></a>


## Structs <a name="Structs" id="Structs"></a>

### RDSDataClusterArnComponents <a name="RDSDataClusterArnComponents" id="@cdk_utils/iam.rds_data.RDSDataClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds_data.RDSDataClusterArnComponents.Initializer"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

const rDSDataClusterArnComponents: rds_data.RDSDataClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataClusterArnComponents.property.dbClusterInstanceName">dbClusterInstanceName</a></code> | <code>string</code> | The DbClusterInstanceName component. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds_data.RDSDataClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbClusterInstanceName`<sup>Required</sup> <a name="dbClusterInstanceName" id="@cdk_utils/iam.rds_data.RDSDataClusterArnComponents.property.dbClusterInstanceName"></a>

```typescript
public readonly dbClusterInstanceName: string;
```

- *Type:* string

The DbClusterInstanceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds_data.RDSDataClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds_data.RDSDataClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSDataClusterArnProps <a name="RDSDataClusterArnProps" id="@cdk_utils/iam.rds_data.RDSDataClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds_data.RDSDataClusterArnProps.Initializer"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

const rDSDataClusterArnProps: rds_data.RDSDataClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataClusterArnProps.property.dbClusterInstanceName">dbClusterInstanceName</a></code> | <code>string</code> | The DbClusterInstanceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbClusterInstanceName`<sup>Required</sup> <a name="dbClusterInstanceName" id="@cdk_utils/iam.rds_data.RDSDataClusterArnProps.property.dbClusterInstanceName"></a>

```typescript
public readonly dbClusterInstanceName: string;
```

- *Type:* string

The DbClusterInstanceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds_data.RDSDataClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds_data.RDSDataClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds_data.RDSDataClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RDSDataActions <a name="RDSDataActions" id="@cdk_utils/iam.rds_data.RDSDataActions"></a>

IAM action constants for the rds-data service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rds_data.RDSDataActions.Initializer"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

new rds_data.RDSDataActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.BatchExecuteStatement">BatchExecuteStatement</a></code> | <code>string</code> | [Write] rds-data:BatchExecuteStatement. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.BeginTransaction">BeginTransaction</a></code> | <code>string</code> | [Write] rds-data:BeginTransaction. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.CommitTransaction">CommitTransaction</a></code> | <code>string</code> | [Write] rds-data:CommitTransaction. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.ExecuteSql">ExecuteSql</a></code> | <code>string</code> | [Write] rds-data:ExecuteSql. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.ExecuteStatement">ExecuteStatement</a></code> | <code>string</code> | [Write] rds-data:ExecuteStatement. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.RollbackTransaction">RollbackTransaction</a></code> | <code>string</code> | [Write] rds-data:RollbackTransaction. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.rds_data.RDSDataActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.rds_data.RDSDataActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.rds_data.RDSDataActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.rds_data.RDSDataActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.rds_data.RDSDataActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchExecuteStatement`<sup>Required</sup> <a name="BatchExecuteStatement" id="@cdk_utils/iam.rds_data.RDSDataActions.property.BatchExecuteStatement"></a>

```typescript
public readonly BatchExecuteStatement: string;
```

- *Type:* string

[Write] rds-data:BatchExecuteStatement.

---

##### `BeginTransaction`<sup>Required</sup> <a name="BeginTransaction" id="@cdk_utils/iam.rds_data.RDSDataActions.property.BeginTransaction"></a>

```typescript
public readonly BeginTransaction: string;
```

- *Type:* string

[Write] rds-data:BeginTransaction.

---

##### `CommitTransaction`<sup>Required</sup> <a name="CommitTransaction" id="@cdk_utils/iam.rds_data.RDSDataActions.property.CommitTransaction"></a>

```typescript
public readonly CommitTransaction: string;
```

- *Type:* string

[Write] rds-data:CommitTransaction.

---

##### `ExecuteSql`<sup>Required</sup> <a name="ExecuteSql" id="@cdk_utils/iam.rds_data.RDSDataActions.property.ExecuteSql"></a>

```typescript
public readonly ExecuteSql: string;
```

- *Type:* string

[Write] rds-data:ExecuteSql.

---

##### `ExecuteStatement`<sup>Required</sup> <a name="ExecuteStatement" id="@cdk_utils/iam.rds_data.RDSDataActions.property.ExecuteStatement"></a>

```typescript
public readonly ExecuteStatement: string;
```

- *Type:* string

[Write] rds-data:ExecuteStatement.

---

##### `RollbackTransaction`<sup>Required</sup> <a name="RollbackTransaction" id="@cdk_utils/iam.rds_data.RDSDataActions.property.RollbackTransaction"></a>

```typescript
public readonly RollbackTransaction: string;
```

- *Type:* string

[Write] rds-data:RollbackTransaction.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.rds_data.RDSDataActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### RDSDataConditions <a name="RDSDataConditions" id="@cdk_utils/iam.rds_data.RDSDataConditions"></a>

Condition key constants and builders for rds-data.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rds_data.RDSDataConditions.Initializer"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

new rds_data.RDSDataConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.rds_data.RDSDataConditions.resourceTag"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

rds_data.RDSDataConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds_data.RDSDataConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.rds_data.RDSDataConditions.tagKeys"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

rds_data.RDSDataConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.rds_data.RDSDataConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataConditions.property.BatchExecuteStatementConditionKeys">BatchExecuteStatementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchExecuteStatement action. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataConditions.property.BeginTransactionConditionKeys">BeginTransactionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BeginTransaction action. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataConditions.property.CommitTransactionConditionKeys">CommitTransactionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CommitTransaction action. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataConditions.property.ExecuteSqlConditionKeys">ExecuteSqlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExecuteSql action. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataConditions.property.ExecuteStatementConditionKeys">ExecuteStatementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExecuteStatement action. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataConditions.property.RollbackTransactionConditionKeys">RollbackTransactionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RollbackTransaction action. |

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.rds_data.RDSDataConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.rds_data.RDSDataConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchExecuteStatementConditionKeys`<sup>Required</sup> <a name="BatchExecuteStatementConditionKeys" id="@cdk_utils/iam.rds_data.RDSDataConditions.property.BatchExecuteStatementConditionKeys"></a>

```typescript
public readonly BatchExecuteStatementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchExecuteStatement action.

---

##### `BeginTransactionConditionKeys`<sup>Required</sup> <a name="BeginTransactionConditionKeys" id="@cdk_utils/iam.rds_data.RDSDataConditions.property.BeginTransactionConditionKeys"></a>

```typescript
public readonly BeginTransactionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BeginTransaction action.

---

##### `CommitTransactionConditionKeys`<sup>Required</sup> <a name="CommitTransactionConditionKeys" id="@cdk_utils/iam.rds_data.RDSDataConditions.property.CommitTransactionConditionKeys"></a>

```typescript
public readonly CommitTransactionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CommitTransaction action.

---

##### `ExecuteSqlConditionKeys`<sup>Required</sup> <a name="ExecuteSqlConditionKeys" id="@cdk_utils/iam.rds_data.RDSDataConditions.property.ExecuteSqlConditionKeys"></a>

```typescript
public readonly ExecuteSqlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExecuteSql action.

---

##### `ExecuteStatementConditionKeys`<sup>Required</sup> <a name="ExecuteStatementConditionKeys" id="@cdk_utils/iam.rds_data.RDSDataConditions.property.ExecuteStatementConditionKeys"></a>

```typescript
public readonly ExecuteStatementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExecuteStatement action.

---

##### `RollbackTransactionConditionKeys`<sup>Required</sup> <a name="RollbackTransactionConditionKeys" id="@cdk_utils/iam.rds_data.RDSDataConditions.property.RollbackTransactionConditionKeys"></a>

```typescript
public readonly RollbackTransactionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RollbackTransaction action.

---

### RDSDataOperations <a name="RDSDataOperations" id="@cdk_utils/iam.rds_data.RDSDataOperations"></a>

API operation to required IAM actions mapping for rds-data.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rds_data.RDSDataOperations.Initializer"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

new rds_data.RDSDataOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataOperations.property.BatchExecuteStatement">BatchExecuteStatement</a></code> | <code>string[]</code> | IAM actions required for the BatchExecuteStatement API call. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataOperations.property.BeginTransaction">BeginTransaction</a></code> | <code>string[]</code> | IAM actions required for the BeginTransaction API call. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataOperations.property.CommitTransaction">CommitTransaction</a></code> | <code>string[]</code> | IAM actions required for the CommitTransaction API call. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataOperations.property.ExecuteSql">ExecuteSql</a></code> | <code>string[]</code> | IAM actions required for the ExecuteSql API call. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataOperations.property.ExecuteStatement">ExecuteStatement</a></code> | <code>string[]</code> | IAM actions required for the ExecuteStatement API call. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataOperations.property.RollbackTransaction">RollbackTransaction</a></code> | <code>string[]</code> | IAM actions required for the RollbackTransaction API call. |

---

##### `BatchExecuteStatement`<sup>Required</sup> <a name="BatchExecuteStatement" id="@cdk_utils/iam.rds_data.RDSDataOperations.property.BatchExecuteStatement"></a>

```typescript
public readonly BatchExecuteStatement: string[];
```

- *Type:* string[]

IAM actions required for the BatchExecuteStatement API call.

---

##### `BeginTransaction`<sup>Required</sup> <a name="BeginTransaction" id="@cdk_utils/iam.rds_data.RDSDataOperations.property.BeginTransaction"></a>

```typescript
public readonly BeginTransaction: string[];
```

- *Type:* string[]

IAM actions required for the BeginTransaction API call.

---

##### `CommitTransaction`<sup>Required</sup> <a name="CommitTransaction" id="@cdk_utils/iam.rds_data.RDSDataOperations.property.CommitTransaction"></a>

```typescript
public readonly CommitTransaction: string[];
```

- *Type:* string[]

IAM actions required for the CommitTransaction API call.

---

##### `ExecuteSql`<sup>Required</sup> <a name="ExecuteSql" id="@cdk_utils/iam.rds_data.RDSDataOperations.property.ExecuteSql"></a>

```typescript
public readonly ExecuteSql: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteSql API call.

---

##### `ExecuteStatement`<sup>Required</sup> <a name="ExecuteStatement" id="@cdk_utils/iam.rds_data.RDSDataOperations.property.ExecuteStatement"></a>

```typescript
public readonly ExecuteStatement: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteStatement API call.

---

##### `RollbackTransaction`<sup>Required</sup> <a name="RollbackTransaction" id="@cdk_utils/iam.rds_data.RDSDataOperations.property.RollbackTransaction"></a>

```typescript
public readonly RollbackTransaction: string[];
```

- *Type:* string[]

IAM actions required for the RollbackTransaction API call.

---

### RDSDataResources <a name="RDSDataResources" id="@cdk_utils/iam.rds_data.RDSDataResources"></a>

ARN builders, validators, and parsers for rds-data resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rds_data.RDSDataResources.Initializer"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

new rds_data.RDSDataResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.rds_data.RDSDataResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.rds_data.RDSDataResources.cluster"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

rds_data.RDSDataResources.cluster(props: RDSDataClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds_data.RDSDataResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds_data.RDSDataClusterArnProps">RDSDataClusterArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.rds_data.RDSDataResources.isValidClusterArn"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

rds_data.RDSDataResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds_data.RDSDataResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.rds_data.RDSDataResources.parseClusterArn"></a>

```typescript
import { rds_data } from '@cdk_utils/iam'

rds_data.RDSDataResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds_data.RDSDataResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---




