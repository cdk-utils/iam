# `timestream_influxdb` Submodule <a name="`timestream_influxdb` Submodule" id="@cdk_utils/iam.timestream_influxdb"></a>


## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxdbDBBackupArnComponents <a name="TimestreamInfluxdbDBBackupArnComponents" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents"></a>

Parsed components of a db-backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

const timestreamInfluxdbDBBackupArnComponents: timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents.property.dbBackupId">dbBackupId</a></code> | <code>string</code> | The DbBackupId component. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbBackupId`<sup>Required</sup> <a name="dbBackupId" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents.property.dbBackupId"></a>

```typescript
public readonly dbBackupId: string;
```

- *Type:* string

The DbBackupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TimestreamInfluxdbDBBackupArnProps <a name="TimestreamInfluxdbDBBackupArnProps" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps"></a>

Properties for building a db-backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

const timestreamInfluxdbDBBackupArnProps: timestream_influxdb.TimestreamInfluxdbDBBackupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps.property.dbBackupId">dbBackupId</a></code> | <code>string</code> | The DbBackupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbBackupId`<sup>Required</sup> <a name="dbBackupId" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps.property.dbBackupId"></a>

```typescript
public readonly dbBackupId: string;
```

- *Type:* string

The DbBackupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TimestreamInfluxdbDBClusterArnComponents <a name="TimestreamInfluxdbDBClusterArnComponents" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents"></a>

Parsed components of a db-cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

const timestreamInfluxdbDBClusterArnComponents: timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents.property.dbClusterId">dbClusterId</a></code> | <code>string</code> | The DbClusterId component. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbClusterId`<sup>Required</sup> <a name="dbClusterId" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents.property.dbClusterId"></a>

```typescript
public readonly dbClusterId: string;
```

- *Type:* string

The DbClusterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TimestreamInfluxdbDBClusterArnProps <a name="TimestreamInfluxdbDBClusterArnProps" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps"></a>

Properties for building a db-cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

const timestreamInfluxdbDBClusterArnProps: timestream_influxdb.TimestreamInfluxdbDBClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps.property.dbClusterId">dbClusterId</a></code> | <code>string</code> | The DbClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbClusterId`<sup>Required</sup> <a name="dbClusterId" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps.property.dbClusterId"></a>

```typescript
public readonly dbClusterId: string;
```

- *Type:* string

The DbClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TimestreamInfluxdbDBInstanceArnComponents <a name="TimestreamInfluxdbDBInstanceArnComponents" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents"></a>

Parsed components of a db-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

const timestreamInfluxdbDBInstanceArnComponents: timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | The DbInstanceIdentifier component. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

The DbInstanceIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TimestreamInfluxdbDBInstanceArnProps <a name="TimestreamInfluxdbDBInstanceArnProps" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps"></a>

Properties for building a db-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

const timestreamInfluxdbDBInstanceArnProps: timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | The DbInstanceIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

The DbInstanceIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TimestreamInfluxdbDBParameterGroupArnComponents <a name="TimestreamInfluxdbDBParameterGroupArnComponents" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents"></a>

Parsed components of a db-parameter-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

const timestreamInfluxdbDBParameterGroupArnComponents: timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>string</code> | The DbParameterGroupIdentifier component. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbParameterGroupIdentifier`<sup>Required</sup> <a name="dbParameterGroupIdentifier" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents.property.dbParameterGroupIdentifier"></a>

```typescript
public readonly dbParameterGroupIdentifier: string;
```

- *Type:* string

The DbParameterGroupIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TimestreamInfluxdbDBParameterGroupArnProps <a name="TimestreamInfluxdbDBParameterGroupArnProps" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps"></a>

Properties for building a db-parameter-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

const timestreamInfluxdbDBParameterGroupArnProps: timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>string</code> | The DbParameterGroupIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbParameterGroupIdentifier`<sup>Required</sup> <a name="dbParameterGroupIdentifier" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps.property.dbParameterGroupIdentifier"></a>

```typescript
public readonly dbParameterGroupIdentifier: string;
```

- *Type:* string

The DbParameterGroupIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxdbActions <a name="TimestreamInfluxdbActions" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions"></a>

IAM action constants for the timestream-influxdb service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

new timestream_influxdb.TimestreamInfluxdbActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.actionGetDbBackup">actionGetDbBackup</a></code> | <code>string</code> | [Read] timestream-influxdb:GetDbBackup. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.actionGetDbCluster">actionGetDbCluster</a></code> | <code>string</code> | [Read] timestream-influxdb:GetDbCluster. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.actionGetDbInstance">actionGetDbInstance</a></code> | <code>string</code> | [Read] timestream-influxdb:GetDbInstance. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.actionGetDbParameterGroup">actionGetDbParameterGroup</a></code> | <code>string</code> | [Read] timestream-influxdb:GetDbParameterGroup. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.CreateDbBackup">CreateDbBackup</a></code> | <code>string</code> | [Write] timestream-influxdb:CreateDbBackup. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.CreateDbCluster">CreateDbCluster</a></code> | <code>string</code> | [Write] timestream-influxdb:CreateDbCluster. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.CreateDbInstance">CreateDbInstance</a></code> | <code>string</code> | [Write] timestream-influxdb:CreateDbInstance. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.CreateDbParameterGroup">CreateDbParameterGroup</a></code> | <code>string</code> | [Write] timestream-influxdb:CreateDbParameterGroup. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.DeleteDbBackup">DeleteDbBackup</a></code> | <code>string</code> | [Write] timestream-influxdb:DeleteDbBackup. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.DeleteDbCluster">DeleteDbCluster</a></code> | <code>string</code> | [Write] timestream-influxdb:DeleteDbCluster. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.DeleteDbInstance">DeleteDbInstance</a></code> | <code>string</code> | [Write] timestream-influxdb:DeleteDbInstance. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListDbBackups">ListDbBackups</a></code> | <code>string</code> | [List] timestream-influxdb:ListDbBackups. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListDbClusters">ListDbClusters</a></code> | <code>string</code> | [List] timestream-influxdb:ListDbClusters. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListDbInstances">ListDbInstances</a></code> | <code>string</code> | [List] timestream-influxdb:ListDbInstances. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListDbInstancesForCluster">ListDbInstancesForCluster</a></code> | <code>string</code> | [Read] timestream-influxdb:ListDbInstancesForCluster. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListDbParameterGroups">ListDbParameterGroups</a></code> | <code>string</code> | [List] timestream-influxdb:ListDbParameterGroups. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] timestream-influxdb:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.RebootDbCluster">RebootDbCluster</a></code> | <code>string</code> | [Write] timestream-influxdb:RebootDbCluster. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.RebootDbInstance">RebootDbInstance</a></code> | <code>string</code> | [Write] timestream-influxdb:RebootDbInstance. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.RestoreFromDbBackup">RestoreFromDbBackup</a></code> | <code>string</code> | [Write] timestream-influxdb:RestoreFromDbBackup. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] timestream-influxdb:TagResource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] timestream-influxdb:UntagResource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.UpdateDbCluster">UpdateDbCluster</a></code> | <code>string</code> | [Write] timestream-influxdb:UpdateDbCluster. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.UpdateDbInstance">UpdateDbInstance</a></code> | <code>string</code> | [Write] timestream-influxdb:UpdateDbInstance. |

---

##### `actionGetDbBackup`<sup>Required</sup> <a name="actionGetDbBackup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.actionGetDbBackup"></a>

```typescript
public readonly actionGetDbBackup: string;
```

- *Type:* string

[Read] timestream-influxdb:GetDbBackup.

---

##### `actionGetDbCluster`<sup>Required</sup> <a name="actionGetDbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.actionGetDbCluster"></a>

```typescript
public readonly actionGetDbCluster: string;
```

- *Type:* string

[Read] timestream-influxdb:GetDbCluster.

---

##### `actionGetDbInstance`<sup>Required</sup> <a name="actionGetDbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.actionGetDbInstance"></a>

```typescript
public readonly actionGetDbInstance: string;
```

- *Type:* string

[Read] timestream-influxdb:GetDbInstance.

---

##### `actionGetDbParameterGroup`<sup>Required</sup> <a name="actionGetDbParameterGroup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.actionGetDbParameterGroup"></a>

```typescript
public readonly actionGetDbParameterGroup: string;
```

- *Type:* string

[Read] timestream-influxdb:GetDbParameterGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateDbBackup`<sup>Required</sup> <a name="CreateDbBackup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.CreateDbBackup"></a>

```typescript
public readonly CreateDbBackup: string;
```

- *Type:* string

[Write] timestream-influxdb:CreateDbBackup.

---

##### `CreateDbCluster`<sup>Required</sup> <a name="CreateDbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.CreateDbCluster"></a>

```typescript
public readonly CreateDbCluster: string;
```

- *Type:* string

[Write] timestream-influxdb:CreateDbCluster.

---

##### `CreateDbInstance`<sup>Required</sup> <a name="CreateDbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.CreateDbInstance"></a>

```typescript
public readonly CreateDbInstance: string;
```

- *Type:* string

[Write] timestream-influxdb:CreateDbInstance.

---

##### `CreateDbParameterGroup`<sup>Required</sup> <a name="CreateDbParameterGroup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.CreateDbParameterGroup"></a>

```typescript
public readonly CreateDbParameterGroup: string;
```

- *Type:* string

[Write] timestream-influxdb:CreateDbParameterGroup.

---

##### `DeleteDbBackup`<sup>Required</sup> <a name="DeleteDbBackup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.DeleteDbBackup"></a>

```typescript
public readonly DeleteDbBackup: string;
```

- *Type:* string

[Write] timestream-influxdb:DeleteDbBackup.

---

##### `DeleteDbCluster`<sup>Required</sup> <a name="DeleteDbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.DeleteDbCluster"></a>

```typescript
public readonly DeleteDbCluster: string;
```

- *Type:* string

[Write] timestream-influxdb:DeleteDbCluster.

---

##### `DeleteDbInstance`<sup>Required</sup> <a name="DeleteDbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.DeleteDbInstance"></a>

```typescript
public readonly DeleteDbInstance: string;
```

- *Type:* string

[Write] timestream-influxdb:DeleteDbInstance.

---

##### `ListDbBackups`<sup>Required</sup> <a name="ListDbBackups" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListDbBackups"></a>

```typescript
public readonly ListDbBackups: string;
```

- *Type:* string

[List] timestream-influxdb:ListDbBackups.

---

##### `ListDbClusters`<sup>Required</sup> <a name="ListDbClusters" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListDbClusters"></a>

```typescript
public readonly ListDbClusters: string;
```

- *Type:* string

[List] timestream-influxdb:ListDbClusters.

---

##### `ListDbInstances`<sup>Required</sup> <a name="ListDbInstances" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListDbInstances"></a>

```typescript
public readonly ListDbInstances: string;
```

- *Type:* string

[List] timestream-influxdb:ListDbInstances.

---

##### `ListDbInstancesForCluster`<sup>Required</sup> <a name="ListDbInstancesForCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListDbInstancesForCluster"></a>

```typescript
public readonly ListDbInstancesForCluster: string;
```

- *Type:* string

[Read] timestream-influxdb:ListDbInstancesForCluster.

---

##### `ListDbParameterGroups`<sup>Required</sup> <a name="ListDbParameterGroups" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListDbParameterGroups"></a>

```typescript
public readonly ListDbParameterGroups: string;
```

- *Type:* string

[List] timestream-influxdb:ListDbParameterGroups.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] timestream-influxdb:ListTagsForResource.

---

##### `RebootDbCluster`<sup>Required</sup> <a name="RebootDbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.RebootDbCluster"></a>

```typescript
public readonly RebootDbCluster: string;
```

- *Type:* string

[Write] timestream-influxdb:RebootDbCluster.

---

##### `RebootDbInstance`<sup>Required</sup> <a name="RebootDbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.RebootDbInstance"></a>

```typescript
public readonly RebootDbInstance: string;
```

- *Type:* string

[Write] timestream-influxdb:RebootDbInstance.

---

##### `RestoreFromDbBackup`<sup>Required</sup> <a name="RestoreFromDbBackup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.RestoreFromDbBackup"></a>

```typescript
public readonly RestoreFromDbBackup: string;
```

- *Type:* string

[Write] timestream-influxdb:RestoreFromDbBackup.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] timestream-influxdb:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] timestream-influxdb:UntagResource.

---

##### `UpdateDbCluster`<sup>Required</sup> <a name="UpdateDbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.UpdateDbCluster"></a>

```typescript
public readonly UpdateDbCluster: string;
```

- *Type:* string

[Write] timestream-influxdb:UpdateDbCluster.

---

##### `UpdateDbInstance`<sup>Required</sup> <a name="UpdateDbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbActions.property.UpdateDbInstance"></a>

```typescript
public readonly UpdateDbInstance: string;
```

- *Type:* string

[Write] timestream-influxdb:UpdateDbInstance.

---

### TimestreamInfluxdbConditions <a name="TimestreamInfluxdbConditions" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions"></a>

Condition key constants and builders for timestream-influxdb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

new timestream_influxdb.TimestreamInfluxdbConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.restoreMode">restoreMode</a></code> | Generates a condition block for `timestream-influxdb:RestoreMode`. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.requestTag"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.resourceTag"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `restoreMode` <a name="restoreMode" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.restoreMode"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbConditions.restoreMode(value: string)
```

Generates a condition block for `timestream-influxdb:RestoreMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.restoreMode.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.tagKeys"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.CreateDbBackupConditionKeys">CreateDbBackupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDbBackup action. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.CreateDbClusterConditionKeys">CreateDbClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDbCluster action. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.CreateDbInstanceConditionKeys">CreateDbInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDbInstance action. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.CreateDbParameterGroupConditionKeys">CreateDbParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDbParameterGroup action. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.RESTORE_MODE">RESTORE_MODE</a></code> | <code>string</code> | Condition key: timestream-influxdb:RestoreMode (String). |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.RestoreFromDbBackupConditionKeys">RestoreFromDbBackupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreFromDbBackup action. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDbBackupConditionKeys`<sup>Required</sup> <a name="CreateDbBackupConditionKeys" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.CreateDbBackupConditionKeys"></a>

```typescript
public readonly CreateDbBackupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDbBackup action.

---

##### `CreateDbClusterConditionKeys`<sup>Required</sup> <a name="CreateDbClusterConditionKeys" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.CreateDbClusterConditionKeys"></a>

```typescript
public readonly CreateDbClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDbCluster action.

---

##### `CreateDbInstanceConditionKeys`<sup>Required</sup> <a name="CreateDbInstanceConditionKeys" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.CreateDbInstanceConditionKeys"></a>

```typescript
public readonly CreateDbInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDbInstance action.

---

##### `CreateDbParameterGroupConditionKeys`<sup>Required</sup> <a name="CreateDbParameterGroupConditionKeys" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.CreateDbParameterGroupConditionKeys"></a>

```typescript
public readonly CreateDbParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDbParameterGroup action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `RESTORE_MODE`<sup>Required</sup> <a name="RESTORE_MODE" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.RESTORE_MODE"></a>

```typescript
public readonly RESTORE_MODE: string;
```

- *Type:* string

Condition key: timestream-influxdb:RestoreMode (String).

---

##### `RestoreFromDbBackupConditionKeys`<sup>Required</sup> <a name="RestoreFromDbBackupConditionKeys" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.RestoreFromDbBackupConditionKeys"></a>

```typescript
public readonly RestoreFromDbBackupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreFromDbBackup action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### TimestreamInfluxdbOperations <a name="TimestreamInfluxdbOperations" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations"></a>

API operation to required IAM actions mapping for timestream-influxdb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

new timestream_influxdb.TimestreamInfluxdbOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.CreateDbBackup">CreateDbBackup</a></code> | <code>string[]</code> | IAM actions required for the CreateDbBackup API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.CreateDbCluster">CreateDbCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateDbCluster API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.CreateDbInstance">CreateDbInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateDbInstance API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.CreateDbParameterGroup">CreateDbParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDbParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.DeleteDbBackup">DeleteDbBackup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDbBackup API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.DeleteDbCluster">DeleteDbCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteDbCluster API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.DeleteDbInstance">DeleteDbInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteDbInstance API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListDbBackups">ListDbBackups</a></code> | <code>string[]</code> | IAM actions required for the ListDbBackups API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListDbClusters">ListDbClusters</a></code> | <code>string[]</code> | IAM actions required for the ListDbClusters API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListDbInstances">ListDbInstances</a></code> | <code>string[]</code> | IAM actions required for the ListDbInstances API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListDbInstancesForCluster">ListDbInstancesForCluster</a></code> | <code>string[]</code> | IAM actions required for the ListDbInstancesForCluster API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListDbParameterGroups">ListDbParameterGroups</a></code> | <code>string[]</code> | IAM actions required for the ListDbParameterGroups API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.opGetDbBackup">opGetDbBackup</a></code> | <code>string[]</code> | IAM actions required for the GetDbBackup API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.opGetDbCluster">opGetDbCluster</a></code> | <code>string[]</code> | IAM actions required for the GetDbCluster API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.opGetDbInstance">opGetDbInstance</a></code> | <code>string[]</code> | IAM actions required for the GetDbInstance API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.opGetDbParameterGroup">opGetDbParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the GetDbParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.RebootDbCluster">RebootDbCluster</a></code> | <code>string[]</code> | IAM actions required for the RebootDbCluster API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.RebootDbInstance">RebootDbInstance</a></code> | <code>string[]</code> | IAM actions required for the RebootDbInstance API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.RestoreFromDbBackup">RestoreFromDbBackup</a></code> | <code>string[]</code> | IAM actions required for the RestoreFromDbBackup API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.UpdateDbCluster">UpdateDbCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateDbCluster API call. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.UpdateDbInstance">UpdateDbInstance</a></code> | <code>string[]</code> | IAM actions required for the UpdateDbInstance API call. |

---

##### `CreateDbBackup`<sup>Required</sup> <a name="CreateDbBackup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.CreateDbBackup"></a>

```typescript
public readonly CreateDbBackup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDbBackup API call.

---

##### `CreateDbCluster`<sup>Required</sup> <a name="CreateDbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.CreateDbCluster"></a>

```typescript
public readonly CreateDbCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateDbCluster API call.

---

##### `CreateDbInstance`<sup>Required</sup> <a name="CreateDbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.CreateDbInstance"></a>

```typescript
public readonly CreateDbInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateDbInstance API call.

---

##### `CreateDbParameterGroup`<sup>Required</sup> <a name="CreateDbParameterGroup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.CreateDbParameterGroup"></a>

```typescript
public readonly CreateDbParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDbParameterGroup API call.

---

##### `DeleteDbBackup`<sup>Required</sup> <a name="DeleteDbBackup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.DeleteDbBackup"></a>

```typescript
public readonly DeleteDbBackup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDbBackup API call.

---

##### `DeleteDbCluster`<sup>Required</sup> <a name="DeleteDbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.DeleteDbCluster"></a>

```typescript
public readonly DeleteDbCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDbCluster API call.

---

##### `DeleteDbInstance`<sup>Required</sup> <a name="DeleteDbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.DeleteDbInstance"></a>

```typescript
public readonly DeleteDbInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDbInstance API call.

---

##### `ListDbBackups`<sup>Required</sup> <a name="ListDbBackups" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListDbBackups"></a>

```typescript
public readonly ListDbBackups: string[];
```

- *Type:* string[]

IAM actions required for the ListDbBackups API call.

---

##### `ListDbClusters`<sup>Required</sup> <a name="ListDbClusters" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListDbClusters"></a>

```typescript
public readonly ListDbClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListDbClusters API call.

---

##### `ListDbInstances`<sup>Required</sup> <a name="ListDbInstances" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListDbInstances"></a>

```typescript
public readonly ListDbInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListDbInstances API call.

---

##### `ListDbInstancesForCluster`<sup>Required</sup> <a name="ListDbInstancesForCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListDbInstancesForCluster"></a>

```typescript
public readonly ListDbInstancesForCluster: string[];
```

- *Type:* string[]

IAM actions required for the ListDbInstancesForCluster API call.

---

##### `ListDbParameterGroups`<sup>Required</sup> <a name="ListDbParameterGroups" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListDbParameterGroups"></a>

```typescript
public readonly ListDbParameterGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListDbParameterGroups API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDbBackup`<sup>Required</sup> <a name="opGetDbBackup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.opGetDbBackup"></a>

```typescript
public readonly opGetDbBackup: string[];
```

- *Type:* string[]

IAM actions required for the GetDbBackup API call.

---

##### `opGetDbCluster`<sup>Required</sup> <a name="opGetDbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.opGetDbCluster"></a>

```typescript
public readonly opGetDbCluster: string[];
```

- *Type:* string[]

IAM actions required for the GetDbCluster API call.

---

##### `opGetDbInstance`<sup>Required</sup> <a name="opGetDbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.opGetDbInstance"></a>

```typescript
public readonly opGetDbInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetDbInstance API call.

---

##### `opGetDbParameterGroup`<sup>Required</sup> <a name="opGetDbParameterGroup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.opGetDbParameterGroup"></a>

```typescript
public readonly opGetDbParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetDbParameterGroup API call.

---

##### `RebootDbCluster`<sup>Required</sup> <a name="RebootDbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.RebootDbCluster"></a>

```typescript
public readonly RebootDbCluster: string[];
```

- *Type:* string[]

IAM actions required for the RebootDbCluster API call.

---

##### `RebootDbInstance`<sup>Required</sup> <a name="RebootDbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.RebootDbInstance"></a>

```typescript
public readonly RebootDbInstance: string[];
```

- *Type:* string[]

IAM actions required for the RebootDbInstance API call.

---

##### `RestoreFromDbBackup`<sup>Required</sup> <a name="RestoreFromDbBackup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.RestoreFromDbBackup"></a>

```typescript
public readonly RestoreFromDbBackup: string[];
```

- *Type:* string[]

IAM actions required for the RestoreFromDbBackup API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDbCluster`<sup>Required</sup> <a name="UpdateDbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.UpdateDbCluster"></a>

```typescript
public readonly UpdateDbCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDbCluster API call.

---

##### `UpdateDbInstance`<sup>Required</sup> <a name="UpdateDbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbOperations.property.UpdateDbInstance"></a>

```typescript
public readonly UpdateDbInstance: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDbInstance API call.

---

### TimestreamInfluxdbResources <a name="TimestreamInfluxdbResources" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources"></a>

ARN builders, validators, and parsers for timestream-influxdb resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.Initializer"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

new timestream_influxdb.TimestreamInfluxdbResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbBackup">dbBackup</a></code> | Builds an ARN for the db-backup resource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbCluster">dbCluster</a></code> | Builds an ARN for the db-cluster resource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbInstance">dbInstance</a></code> | Builds an ARN for the db-instance resource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbParameterGroup">dbParameterGroup</a></code> | Builds an ARN for the db-parameter-group resource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBBackupArn">isValidDBBackupArn</a></code> | Validates whether a string is a valid ARN for the db-backup resource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBClusterArn">isValidDBClusterArn</a></code> | Validates whether a string is a valid ARN for the db-cluster resource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBInstanceArn">isValidDBInstanceArn</a></code> | Validates whether a string is a valid ARN for the db-instance resource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBParameterGroupArn">isValidDBParameterGroupArn</a></code> | Validates whether a string is a valid ARN for the db-parameter-group resource. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBBackupArn">parseDBBackupArn</a></code> | Parses a db-backup ARN into its components. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBClusterArn">parseDBClusterArn</a></code> | Parses a db-cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBInstanceArn">parseDBInstanceArn</a></code> | Parses a db-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBParameterGroupArn">parseDBParameterGroupArn</a></code> | Parses a db-parameter-group ARN into its components. |

---

##### `dbBackup` <a name="dbBackup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbBackup"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.dbBackup(props: TimestreamInfluxdbDBBackupArnProps)
```

Builds an ARN for the db-backup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbBackup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBBackupArnProps">TimestreamInfluxdbDBBackupArnProps</a>

---

##### `dbCluster` <a name="dbCluster" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbCluster"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.dbCluster(props: TimestreamInfluxdbDBClusterArnProps)
```

Builds an ARN for the db-cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbCluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBClusterArnProps">TimestreamInfluxdbDBClusterArnProps</a>

---

##### `dbInstance` <a name="dbInstance" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbInstance"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.dbInstance(props: TimestreamInfluxdbDBInstanceArnProps)
```

Builds an ARN for the db-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBInstanceArnProps">TimestreamInfluxdbDBInstanceArnProps</a>

---

##### `dbParameterGroup` <a name="dbParameterGroup" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbParameterGroup"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.dbParameterGroup(props: TimestreamInfluxdbDBParameterGroupArnProps)
```

Builds an ARN for the db-parameter-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.dbParameterGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbDBParameterGroupArnProps">TimestreamInfluxdbDBParameterGroupArnProps</a>

---

##### `isValidDBBackupArn` <a name="isValidDBBackupArn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBBackupArn"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.isValidDBBackupArn(arn: string)
```

Validates whether a string is a valid ARN for the db-backup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDBClusterArn` <a name="isValidDBClusterArn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBClusterArn"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.isValidDBClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the db-cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDBInstanceArn` <a name="isValidDBInstanceArn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBInstanceArn"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.isValidDBInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the db-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDBParameterGroupArn` <a name="isValidDBParameterGroupArn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBParameterGroupArn"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.isValidDBParameterGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the db-parameter-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.isValidDBParameterGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDBBackupArn` <a name="parseDBBackupArn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBBackupArn"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.parseDBBackupArn(arn: string)
```

Parses a db-backup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDBClusterArn` <a name="parseDBClusterArn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBClusterArn"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.parseDBClusterArn(arn: string)
```

Parses a db-cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDBInstanceArn` <a name="parseDBInstanceArn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBInstanceArn"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.parseDBInstanceArn(arn: string)
```

Parses a db-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDBParameterGroupArn` <a name="parseDBParameterGroupArn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBParameterGroupArn"></a>

```typescript
import { timestream_influxdb } from '@cdk_utils/iam'

timestream_influxdb.TimestreamInfluxdbResources.parseDBParameterGroupArn(arn: string)
```

Parses a db-parameter-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.timestream_influxdb.TimestreamInfluxdbResources.parseDBParameterGroupArn.parameter.arn"></a>

- *Type:* string

---




