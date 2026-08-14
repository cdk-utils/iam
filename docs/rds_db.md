# `rds_db` Submodule <a name="`rds_db` Submodule" id="@cdk_utils/iam.rds_db"></a>


## Structs <a name="Structs" id="Structs"></a>

### RDSDBDBUserArnComponents <a name="RDSDBDBUserArnComponents" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents"></a>

Parsed components of a db-user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.Initializer"></a>

```typescript
import { rds_db } from '@cdk_utils/iam'

const rDSDBDBUserArnComponents: rds_db.RDSDBDBUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.property.dbiResourceId">dbiResourceId</a></code> | <code>string</code> | The DbiResourceId component. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.property.dbUserName">dbUserName</a></code> | <code>string</code> | The DbUserName component. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbiResourceId`<sup>Required</sup> <a name="dbiResourceId" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.property.dbiResourceId"></a>

```typescript
public readonly dbiResourceId: string;
```

- *Type:* string

The DbiResourceId component.

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

The DbUserName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSDBDBUserArnProps <a name="RDSDBDBUserArnProps" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnProps"></a>

Properties for building a db-user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.Initializer"></a>

```typescript
import { rds_db } from '@cdk_utils/iam'

const rDSDBDBUserArnProps: rds_db.RDSDBDBUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.property.dbiResourceId">dbiResourceId</a></code> | <code>string</code> | The DbiResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.property.dbUserName">dbUserName</a></code> | <code>string</code> | The DbUserName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbiResourceId`<sup>Required</sup> <a name="dbiResourceId" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.property.dbiResourceId"></a>

```typescript
public readonly dbiResourceId: string;
```

- *Type:* string

The DbiResourceId component of the ARN.

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

The DbUserName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds_db.RDSDBDBUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RDSDBActions <a name="RDSDBActions" id="@cdk_utils/iam.rds_db.RDSDBActions"></a>

IAM action constants for the rds-db service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rds_db.RDSDBActions.Initializer"></a>

```typescript
import { rds_db } from '@cdk_utils/iam'

new rds_db.RDSDBActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBActions.property.connect">connect</a></code> | <code>string</code> | [PermissionManagement] rds-db:connect. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.rds_db.RDSDBActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.rds_db.RDSDBActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.rds_db.RDSDBActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.rds_db.RDSDBActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.rds_db.RDSDBActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `connect`<sup>Required</sup> <a name="connect" id="@cdk_utils/iam.rds_db.RDSDBActions.property.connect"></a>

```typescript
public readonly connect: string;
```

- *Type:* string

[PermissionManagement] rds-db:connect.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.rds_db.RDSDBActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### RDSDBResources <a name="RDSDBResources" id="@cdk_utils/iam.rds_db.RDSDBResources"></a>

ARN builders, validators, and parsers for rds-db resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rds_db.RDSDBResources.Initializer"></a>

```typescript
import { rds_db } from '@cdk_utils/iam'

new rds_db.RDSDBResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBResources.dbUser">dbUser</a></code> | Builds an ARN for the db-user resource. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBResources.isValidDBUserArn">isValidDBUserArn</a></code> | Validates whether a string is a valid ARN for the db-user resource. |
| <code><a href="#@cdk_utils/iam.rds_db.RDSDBResources.parseDBUserArn">parseDBUserArn</a></code> | Parses a db-user ARN into its components. |

---

##### `dbUser` <a name="dbUser" id="@cdk_utils/iam.rds_db.RDSDBResources.dbUser"></a>

```typescript
import { rds_db } from '@cdk_utils/iam'

rds_db.RDSDBResources.dbUser(props: RDSDBDBUserArnProps)
```

Builds an ARN for the db-user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds_db.RDSDBResources.dbUser.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds_db.RDSDBDBUserArnProps">RDSDBDBUserArnProps</a>

---

##### `isValidDBUserArn` <a name="isValidDBUserArn" id="@cdk_utils/iam.rds_db.RDSDBResources.isValidDBUserArn"></a>

```typescript
import { rds_db } from '@cdk_utils/iam'

rds_db.RDSDBResources.isValidDBUserArn(arn: string)
```

Validates whether a string is a valid ARN for the db-user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds_db.RDSDBResources.isValidDBUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDBUserArn` <a name="parseDBUserArn" id="@cdk_utils/iam.rds_db.RDSDBResources.parseDBUserArn"></a>

```typescript
import { rds_db } from '@cdk_utils/iam'

rds_db.RDSDBResources.parseDBUserArn(arn: string)
```

Parses a db-user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds_db.RDSDBResources.parseDBUserArn.parameter.arn"></a>

- *Type:* string

---




