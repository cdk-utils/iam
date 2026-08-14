# `schemas` Submodule <a name="`schemas` Submodule" id="@cdk_utils/iam.schemas"></a>


## Structs <a name="Structs" id="Structs"></a>

### SchemasDiscovererArnComponents <a name="SchemasDiscovererArnComponents" id="@cdk_utils/iam.schemas.SchemasDiscovererArnComponents"></a>

Parsed components of a discoverer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.schemas.SchemasDiscovererArnComponents.Initializer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

const schemasDiscovererArnComponents: schemas.SchemasDiscovererArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasDiscovererArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasDiscovererArnComponents.property.discovererId">discovererId</a></code> | <code>string</code> | The DiscovererId component. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasDiscovererArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasDiscovererArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.schemas.SchemasDiscovererArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `discovererId`<sup>Required</sup> <a name="discovererId" id="@cdk_utils/iam.schemas.SchemasDiscovererArnComponents.property.discovererId"></a>

```typescript
public readonly discovererId: string;
```

- *Type:* string

The DiscovererId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.schemas.SchemasDiscovererArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.schemas.SchemasDiscovererArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SchemasDiscovererArnProps <a name="SchemasDiscovererArnProps" id="@cdk_utils/iam.schemas.SchemasDiscovererArnProps"></a>

Properties for building a discoverer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.schemas.SchemasDiscovererArnProps.Initializer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

const schemasDiscovererArnProps: schemas.SchemasDiscovererArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasDiscovererArnProps.property.discovererId">discovererId</a></code> | <code>string</code> | The DiscovererId component of the ARN. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasDiscovererArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasDiscovererArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasDiscovererArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `discovererId`<sup>Required</sup> <a name="discovererId" id="@cdk_utils/iam.schemas.SchemasDiscovererArnProps.property.discovererId"></a>

```typescript
public readonly discovererId: string;
```

- *Type:* string

The DiscovererId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.schemas.SchemasDiscovererArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.schemas.SchemasDiscovererArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.schemas.SchemasDiscovererArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SchemasRegistryArnComponents <a name="SchemasRegistryArnComponents" id="@cdk_utils/iam.schemas.SchemasRegistryArnComponents"></a>

Parsed components of a registry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.schemas.SchemasRegistryArnComponents.Initializer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

const schemasRegistryArnComponents: schemas.SchemasRegistryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasRegistryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasRegistryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasRegistryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasRegistryArnComponents.property.registryName">registryName</a></code> | <code>string</code> | The RegistryName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.schemas.SchemasRegistryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.schemas.SchemasRegistryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.schemas.SchemasRegistryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdk_utils/iam.schemas.SchemasRegistryArnComponents.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

The RegistryName component.

---

### SchemasRegistryArnProps <a name="SchemasRegistryArnProps" id="@cdk_utils/iam.schemas.SchemasRegistryArnProps"></a>

Properties for building a registry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.schemas.SchemasRegistryArnProps.Initializer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

const schemasRegistryArnProps: schemas.SchemasRegistryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasRegistryArnProps.property.registryName">registryName</a></code> | <code>string</code> | The RegistryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasRegistryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasRegistryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasRegistryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdk_utils/iam.schemas.SchemasRegistryArnProps.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

The RegistryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.schemas.SchemasRegistryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.schemas.SchemasRegistryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.schemas.SchemasRegistryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SchemasSchemaArnComponents <a name="SchemasSchemaArnComponents" id="@cdk_utils/iam.schemas.SchemasSchemaArnComponents"></a>

Parsed components of a schema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.schemas.SchemasSchemaArnComponents.Initializer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

const schemasSchemaArnComponents: schemas.SchemasSchemaArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasSchemaArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasSchemaArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasSchemaArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasSchemaArnComponents.property.registryName">registryName</a></code> | <code>string</code> | The RegistryName component. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasSchemaArnComponents.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.schemas.SchemasSchemaArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.schemas.SchemasSchemaArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.schemas.SchemasSchemaArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdk_utils/iam.schemas.SchemasSchemaArnComponents.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

The RegistryName component.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.schemas.SchemasSchemaArnComponents.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component.

---

### SchemasSchemaArnProps <a name="SchemasSchemaArnProps" id="@cdk_utils/iam.schemas.SchemasSchemaArnProps"></a>

Properties for building a schema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.schemas.SchemasSchemaArnProps.Initializer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

const schemasSchemaArnProps: schemas.SchemasSchemaArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasSchemaArnProps.property.registryName">registryName</a></code> | <code>string</code> | The RegistryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasSchemaArnProps.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component of the ARN. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasSchemaArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasSchemaArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasSchemaArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdk_utils/iam.schemas.SchemasSchemaArnProps.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

The RegistryName component of the ARN.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.schemas.SchemasSchemaArnProps.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.schemas.SchemasSchemaArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.schemas.SchemasSchemaArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.schemas.SchemasSchemaArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SchemasActions <a name="SchemasActions" id="@cdk_utils/iam.schemas.SchemasActions"></a>

IAM action constants for the schemas service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.schemas.SchemasActions.Initializer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

new schemas.SchemasActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.actionGetCodeBindingSource">actionGetCodeBindingSource</a></code> | <code>string</code> | [Read] schemas:GetCodeBindingSource. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.actionGetDiscoveredSchema">actionGetDiscoveredSchema</a></code> | <code>string</code> | [Read] schemas:GetDiscoveredSchema. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] schemas:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.CreateDiscoverer">CreateDiscoverer</a></code> | <code>string</code> | [Write] schemas:CreateDiscoverer. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.CreateRegistry">CreateRegistry</a></code> | <code>string</code> | [Write] schemas:CreateRegistry. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.CreateSchema">CreateSchema</a></code> | <code>string</code> | [Write] schemas:CreateSchema. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.DeleteDiscoverer">DeleteDiscoverer</a></code> | <code>string</code> | [Write] schemas:DeleteDiscoverer. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.DeleteRegistry">DeleteRegistry</a></code> | <code>string</code> | [Write] schemas:DeleteRegistry. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] schemas:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.DeleteSchema">DeleteSchema</a></code> | <code>string</code> | [Write] schemas:DeleteSchema. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.DeleteSchemaVersion">DeleteSchemaVersion</a></code> | <code>string</code> | [Write] schemas:DeleteSchemaVersion. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.DescribeCodeBinding">DescribeCodeBinding</a></code> | <code>string</code> | [Read] schemas:DescribeCodeBinding. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.DescribeDiscoverer">DescribeDiscoverer</a></code> | <code>string</code> | [Read] schemas:DescribeDiscoverer. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.DescribeRegistry">DescribeRegistry</a></code> | <code>string</code> | [Read] schemas:DescribeRegistry. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.DescribeSchema">DescribeSchema</a></code> | <code>string</code> | [Read] schemas:DescribeSchema. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.ExportSchema">ExportSchema</a></code> | <code>string</code> | [Read] schemas:ExportSchema. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.ListDiscoverers">ListDiscoverers</a></code> | <code>string</code> | [List] schemas:ListDiscoverers. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.ListRegistries">ListRegistries</a></code> | <code>string</code> | [List] schemas:ListRegistries. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.ListSchemas">ListSchemas</a></code> | <code>string</code> | [List] schemas:ListSchemas. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.ListSchemaVersions">ListSchemaVersions</a></code> | <code>string</code> | [List] schemas:ListSchemaVersions. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] schemas:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.PutCodeBinding">PutCodeBinding</a></code> | <code>string</code> | [Write] schemas:PutCodeBinding. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] schemas:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.SearchSchemas">SearchSchemas</a></code> | <code>string</code> | [List] schemas:SearchSchemas. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.StartDiscoverer">StartDiscoverer</a></code> | <code>string</code> | [Write] schemas:StartDiscoverer. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.StopDiscoverer">StopDiscoverer</a></code> | <code>string</code> | [Write] schemas:StopDiscoverer. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] schemas:TagResource. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] schemas:UntagResource. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.UpdateDiscoverer">UpdateDiscoverer</a></code> | <code>string</code> | [Write] schemas:UpdateDiscoverer. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.UpdateRegistry">UpdateRegistry</a></code> | <code>string</code> | [Write] schemas:UpdateRegistry. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasActions.property.UpdateSchema">UpdateSchema</a></code> | <code>string</code> | [Write] schemas:UpdateSchema. |

---

##### `actionGetCodeBindingSource`<sup>Required</sup> <a name="actionGetCodeBindingSource" id="@cdk_utils/iam.schemas.SchemasActions.property.actionGetCodeBindingSource"></a>

```typescript
public readonly actionGetCodeBindingSource: string;
```

- *Type:* string

[Read] schemas:GetCodeBindingSource.

---

##### `actionGetDiscoveredSchema`<sup>Required</sup> <a name="actionGetDiscoveredSchema" id="@cdk_utils/iam.schemas.SchemasActions.property.actionGetDiscoveredSchema"></a>

```typescript
public readonly actionGetDiscoveredSchema: string;
```

- *Type:* string

[Read] schemas:GetDiscoveredSchema.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.schemas.SchemasActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] schemas:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.schemas.SchemasActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.schemas.SchemasActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.schemas.SchemasActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.schemas.SchemasActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.schemas.SchemasActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateDiscoverer`<sup>Required</sup> <a name="CreateDiscoverer" id="@cdk_utils/iam.schemas.SchemasActions.property.CreateDiscoverer"></a>

```typescript
public readonly CreateDiscoverer: string;
```

- *Type:* string

[Write] schemas:CreateDiscoverer.

---

##### `CreateRegistry`<sup>Required</sup> <a name="CreateRegistry" id="@cdk_utils/iam.schemas.SchemasActions.property.CreateRegistry"></a>

```typescript
public readonly CreateRegistry: string;
```

- *Type:* string

[Write] schemas:CreateRegistry.

---

##### `CreateSchema`<sup>Required</sup> <a name="CreateSchema" id="@cdk_utils/iam.schemas.SchemasActions.property.CreateSchema"></a>

```typescript
public readonly CreateSchema: string;
```

- *Type:* string

[Write] schemas:CreateSchema.

---

##### `DeleteDiscoverer`<sup>Required</sup> <a name="DeleteDiscoverer" id="@cdk_utils/iam.schemas.SchemasActions.property.DeleteDiscoverer"></a>

```typescript
public readonly DeleteDiscoverer: string;
```

- *Type:* string

[Write] schemas:DeleteDiscoverer.

---

##### `DeleteRegistry`<sup>Required</sup> <a name="DeleteRegistry" id="@cdk_utils/iam.schemas.SchemasActions.property.DeleteRegistry"></a>

```typescript
public readonly DeleteRegistry: string;
```

- *Type:* string

[Write] schemas:DeleteRegistry.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.schemas.SchemasActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] schemas:DeleteResourcePolicy.

---

##### `DeleteSchema`<sup>Required</sup> <a name="DeleteSchema" id="@cdk_utils/iam.schemas.SchemasActions.property.DeleteSchema"></a>

```typescript
public readonly DeleteSchema: string;
```

- *Type:* string

[Write] schemas:DeleteSchema.

---

##### `DeleteSchemaVersion`<sup>Required</sup> <a name="DeleteSchemaVersion" id="@cdk_utils/iam.schemas.SchemasActions.property.DeleteSchemaVersion"></a>

```typescript
public readonly DeleteSchemaVersion: string;
```

- *Type:* string

[Write] schemas:DeleteSchemaVersion.

---

##### `DescribeCodeBinding`<sup>Required</sup> <a name="DescribeCodeBinding" id="@cdk_utils/iam.schemas.SchemasActions.property.DescribeCodeBinding"></a>

```typescript
public readonly DescribeCodeBinding: string;
```

- *Type:* string

[Read] schemas:DescribeCodeBinding.

---

##### `DescribeDiscoverer`<sup>Required</sup> <a name="DescribeDiscoverer" id="@cdk_utils/iam.schemas.SchemasActions.property.DescribeDiscoverer"></a>

```typescript
public readonly DescribeDiscoverer: string;
```

- *Type:* string

[Read] schemas:DescribeDiscoverer.

---

##### `DescribeRegistry`<sup>Required</sup> <a name="DescribeRegistry" id="@cdk_utils/iam.schemas.SchemasActions.property.DescribeRegistry"></a>

```typescript
public readonly DescribeRegistry: string;
```

- *Type:* string

[Read] schemas:DescribeRegistry.

---

##### `DescribeSchema`<sup>Required</sup> <a name="DescribeSchema" id="@cdk_utils/iam.schemas.SchemasActions.property.DescribeSchema"></a>

```typescript
public readonly DescribeSchema: string;
```

- *Type:* string

[Read] schemas:DescribeSchema.

---

##### `ExportSchema`<sup>Required</sup> <a name="ExportSchema" id="@cdk_utils/iam.schemas.SchemasActions.property.ExportSchema"></a>

```typescript
public readonly ExportSchema: string;
```

- *Type:* string

[Read] schemas:ExportSchema.

---

##### `ListDiscoverers`<sup>Required</sup> <a name="ListDiscoverers" id="@cdk_utils/iam.schemas.SchemasActions.property.ListDiscoverers"></a>

```typescript
public readonly ListDiscoverers: string;
```

- *Type:* string

[List] schemas:ListDiscoverers.

---

##### `ListRegistries`<sup>Required</sup> <a name="ListRegistries" id="@cdk_utils/iam.schemas.SchemasActions.property.ListRegistries"></a>

```typescript
public readonly ListRegistries: string;
```

- *Type:* string

[List] schemas:ListRegistries.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.schemas.SchemasActions.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string;
```

- *Type:* string

[List] schemas:ListSchemas.

---

##### `ListSchemaVersions`<sup>Required</sup> <a name="ListSchemaVersions" id="@cdk_utils/iam.schemas.SchemasActions.property.ListSchemaVersions"></a>

```typescript
public readonly ListSchemaVersions: string;
```

- *Type:* string

[List] schemas:ListSchemaVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.schemas.SchemasActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] schemas:ListTagsForResource.

---

##### `PutCodeBinding`<sup>Required</sup> <a name="PutCodeBinding" id="@cdk_utils/iam.schemas.SchemasActions.property.PutCodeBinding"></a>

```typescript
public readonly PutCodeBinding: string;
```

- *Type:* string

[Write] schemas:PutCodeBinding.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.schemas.SchemasActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] schemas:PutResourcePolicy.

---

##### `SearchSchemas`<sup>Required</sup> <a name="SearchSchemas" id="@cdk_utils/iam.schemas.SchemasActions.property.SearchSchemas"></a>

```typescript
public readonly SearchSchemas: string;
```

- *Type:* string

[List] schemas:SearchSchemas.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.schemas.SchemasActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDiscoverer`<sup>Required</sup> <a name="StartDiscoverer" id="@cdk_utils/iam.schemas.SchemasActions.property.StartDiscoverer"></a>

```typescript
public readonly StartDiscoverer: string;
```

- *Type:* string

[Write] schemas:StartDiscoverer.

---

##### `StopDiscoverer`<sup>Required</sup> <a name="StopDiscoverer" id="@cdk_utils/iam.schemas.SchemasActions.property.StopDiscoverer"></a>

```typescript
public readonly StopDiscoverer: string;
```

- *Type:* string

[Write] schemas:StopDiscoverer.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.schemas.SchemasActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] schemas:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.schemas.SchemasActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] schemas:UntagResource.

---

##### `UpdateDiscoverer`<sup>Required</sup> <a name="UpdateDiscoverer" id="@cdk_utils/iam.schemas.SchemasActions.property.UpdateDiscoverer"></a>

```typescript
public readonly UpdateDiscoverer: string;
```

- *Type:* string

[Write] schemas:UpdateDiscoverer.

---

##### `UpdateRegistry`<sup>Required</sup> <a name="UpdateRegistry" id="@cdk_utils/iam.schemas.SchemasActions.property.UpdateRegistry"></a>

```typescript
public readonly UpdateRegistry: string;
```

- *Type:* string

[Write] schemas:UpdateRegistry.

---

##### `UpdateSchema`<sup>Required</sup> <a name="UpdateSchema" id="@cdk_utils/iam.schemas.SchemasActions.property.UpdateSchema"></a>

```typescript
public readonly UpdateSchema: string;
```

- *Type:* string

[Write] schemas:UpdateSchema.

---

### SchemasConditions <a name="SchemasConditions" id="@cdk_utils/iam.schemas.SchemasConditions"></a>

Condition key constants and builders for schemas.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.schemas.SchemasConditions.Initializer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

new schemas.SchemasConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.schemas.SchemasConditions.requestTag"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.schemas.SchemasConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.schemas.SchemasConditions.resourceTag"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.schemas.SchemasConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.schemas.SchemasConditions.tagKeys"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.schemas.SchemasConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.property.CreateDiscovererConditionKeys">CreateDiscovererConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDiscoverer action. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.property.CreateRegistryConditionKeys">CreateRegistryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRegistry action. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.property.CreateSchemaConditionKeys">CreateSchemaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSchema action. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.schemas.SchemasConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.schemas.SchemasConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.schemas.SchemasConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDiscovererConditionKeys`<sup>Required</sup> <a name="CreateDiscovererConditionKeys" id="@cdk_utils/iam.schemas.SchemasConditions.property.CreateDiscovererConditionKeys"></a>

```typescript
public readonly CreateDiscovererConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDiscoverer action.

---

##### `CreateRegistryConditionKeys`<sup>Required</sup> <a name="CreateRegistryConditionKeys" id="@cdk_utils/iam.schemas.SchemasConditions.property.CreateRegistryConditionKeys"></a>

```typescript
public readonly CreateRegistryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRegistry action.

---

##### `CreateSchemaConditionKeys`<sup>Required</sup> <a name="CreateSchemaConditionKeys" id="@cdk_utils/iam.schemas.SchemasConditions.property.CreateSchemaConditionKeys"></a>

```typescript
public readonly CreateSchemaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSchema action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.schemas.SchemasConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.schemas.SchemasConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SchemasOperations <a name="SchemasOperations" id="@cdk_utils/iam.schemas.SchemasOperations"></a>

API operation to required IAM actions mapping for schemas.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.schemas.SchemasOperations.Initializer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

new schemas.SchemasOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.CreateDiscoverer">CreateDiscoverer</a></code> | <code>string[]</code> | IAM actions required for the CreateDiscoverer API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.CreateRegistry">CreateRegistry</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistry API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.CreateSchema">CreateSchema</a></code> | <code>string[]</code> | IAM actions required for the CreateSchema API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.DeleteDiscoverer">DeleteDiscoverer</a></code> | <code>string[]</code> | IAM actions required for the DeleteDiscoverer API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.DeleteRegistry">DeleteRegistry</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistry API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.DeleteSchema">DeleteSchema</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchema API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.DeleteSchemaVersion">DeleteSchemaVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchemaVersion API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.DescribeCodeBinding">DescribeCodeBinding</a></code> | <code>string[]</code> | IAM actions required for the DescribeCodeBinding API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.DescribeDiscoverer">DescribeDiscoverer</a></code> | <code>string[]</code> | IAM actions required for the DescribeDiscoverer API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.DescribeRegistry">DescribeRegistry</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegistry API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.DescribeSchema">DescribeSchema</a></code> | <code>string[]</code> | IAM actions required for the DescribeSchema API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.ExportSchema">ExportSchema</a></code> | <code>string[]</code> | IAM actions required for the ExportSchema API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.ListDiscoverers">ListDiscoverers</a></code> | <code>string[]</code> | IAM actions required for the ListDiscoverers API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.ListRegistries">ListRegistries</a></code> | <code>string[]</code> | IAM actions required for the ListRegistries API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.ListSchemas">ListSchemas</a></code> | <code>string[]</code> | IAM actions required for the ListSchemas API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.ListSchemaVersions">ListSchemaVersions</a></code> | <code>string[]</code> | IAM actions required for the ListSchemaVersions API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.opGetCodeBindingSource">opGetCodeBindingSource</a></code> | <code>string[]</code> | IAM actions required for the GetCodeBindingSource API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.opGetDiscoveredSchema">opGetDiscoveredSchema</a></code> | <code>string[]</code> | IAM actions required for the GetDiscoveredSchema API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.PutCodeBinding">PutCodeBinding</a></code> | <code>string[]</code> | IAM actions required for the PutCodeBinding API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.SearchSchemas">SearchSchemas</a></code> | <code>string[]</code> | IAM actions required for the SearchSchemas API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.StartDiscoverer">StartDiscoverer</a></code> | <code>string[]</code> | IAM actions required for the StartDiscoverer API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.StopDiscoverer">StopDiscoverer</a></code> | <code>string[]</code> | IAM actions required for the StopDiscoverer API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.UpdateDiscoverer">UpdateDiscoverer</a></code> | <code>string[]</code> | IAM actions required for the UpdateDiscoverer API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.UpdateRegistry">UpdateRegistry</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegistry API call. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasOperations.property.UpdateSchema">UpdateSchema</a></code> | <code>string[]</code> | IAM actions required for the UpdateSchema API call. |

---

##### `CreateDiscoverer`<sup>Required</sup> <a name="CreateDiscoverer" id="@cdk_utils/iam.schemas.SchemasOperations.property.CreateDiscoverer"></a>

```typescript
public readonly CreateDiscoverer: string[];
```

- *Type:* string[]

IAM actions required for the CreateDiscoverer API call.

---

##### `CreateRegistry`<sup>Required</sup> <a name="CreateRegistry" id="@cdk_utils/iam.schemas.SchemasOperations.property.CreateRegistry"></a>

```typescript
public readonly CreateRegistry: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistry API call.

---

##### `CreateSchema`<sup>Required</sup> <a name="CreateSchema" id="@cdk_utils/iam.schemas.SchemasOperations.property.CreateSchema"></a>

```typescript
public readonly CreateSchema: string[];
```

- *Type:* string[]

IAM actions required for the CreateSchema API call.

---

##### `DeleteDiscoverer`<sup>Required</sup> <a name="DeleteDiscoverer" id="@cdk_utils/iam.schemas.SchemasOperations.property.DeleteDiscoverer"></a>

```typescript
public readonly DeleteDiscoverer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDiscoverer API call.

---

##### `DeleteRegistry`<sup>Required</sup> <a name="DeleteRegistry" id="@cdk_utils/iam.schemas.SchemasOperations.property.DeleteRegistry"></a>

```typescript
public readonly DeleteRegistry: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistry API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.schemas.SchemasOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteSchema`<sup>Required</sup> <a name="DeleteSchema" id="@cdk_utils/iam.schemas.SchemasOperations.property.DeleteSchema"></a>

```typescript
public readonly DeleteSchema: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchema API call.

---

##### `DeleteSchemaVersion`<sup>Required</sup> <a name="DeleteSchemaVersion" id="@cdk_utils/iam.schemas.SchemasOperations.property.DeleteSchemaVersion"></a>

```typescript
public readonly DeleteSchemaVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchemaVersion API call.

---

##### `DescribeCodeBinding`<sup>Required</sup> <a name="DescribeCodeBinding" id="@cdk_utils/iam.schemas.SchemasOperations.property.DescribeCodeBinding"></a>

```typescript
public readonly DescribeCodeBinding: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCodeBinding API call.

---

##### `DescribeDiscoverer`<sup>Required</sup> <a name="DescribeDiscoverer" id="@cdk_utils/iam.schemas.SchemasOperations.property.DescribeDiscoverer"></a>

```typescript
public readonly DescribeDiscoverer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDiscoverer API call.

---

##### `DescribeRegistry`<sup>Required</sup> <a name="DescribeRegistry" id="@cdk_utils/iam.schemas.SchemasOperations.property.DescribeRegistry"></a>

```typescript
public readonly DescribeRegistry: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegistry API call.

---

##### `DescribeSchema`<sup>Required</sup> <a name="DescribeSchema" id="@cdk_utils/iam.schemas.SchemasOperations.property.DescribeSchema"></a>

```typescript
public readonly DescribeSchema: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSchema API call.

---

##### `ExportSchema`<sup>Required</sup> <a name="ExportSchema" id="@cdk_utils/iam.schemas.SchemasOperations.property.ExportSchema"></a>

```typescript
public readonly ExportSchema: string[];
```

- *Type:* string[]

IAM actions required for the ExportSchema API call.

---

##### `ListDiscoverers`<sup>Required</sup> <a name="ListDiscoverers" id="@cdk_utils/iam.schemas.SchemasOperations.property.ListDiscoverers"></a>

```typescript
public readonly ListDiscoverers: string[];
```

- *Type:* string[]

IAM actions required for the ListDiscoverers API call.

---

##### `ListRegistries`<sup>Required</sup> <a name="ListRegistries" id="@cdk_utils/iam.schemas.SchemasOperations.property.ListRegistries"></a>

```typescript
public readonly ListRegistries: string[];
```

- *Type:* string[]

IAM actions required for the ListRegistries API call.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.schemas.SchemasOperations.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string[];
```

- *Type:* string[]

IAM actions required for the ListSchemas API call.

---

##### `ListSchemaVersions`<sup>Required</sup> <a name="ListSchemaVersions" id="@cdk_utils/iam.schemas.SchemasOperations.property.ListSchemaVersions"></a>

```typescript
public readonly ListSchemaVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListSchemaVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.schemas.SchemasOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetCodeBindingSource`<sup>Required</sup> <a name="opGetCodeBindingSource" id="@cdk_utils/iam.schemas.SchemasOperations.property.opGetCodeBindingSource"></a>

```typescript
public readonly opGetCodeBindingSource: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeBindingSource API call.

---

##### `opGetDiscoveredSchema`<sup>Required</sup> <a name="opGetDiscoveredSchema" id="@cdk_utils/iam.schemas.SchemasOperations.property.opGetDiscoveredSchema"></a>

```typescript
public readonly opGetDiscoveredSchema: string[];
```

- *Type:* string[]

IAM actions required for the GetDiscoveredSchema API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.schemas.SchemasOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `PutCodeBinding`<sup>Required</sup> <a name="PutCodeBinding" id="@cdk_utils/iam.schemas.SchemasOperations.property.PutCodeBinding"></a>

```typescript
public readonly PutCodeBinding: string[];
```

- *Type:* string[]

IAM actions required for the PutCodeBinding API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.schemas.SchemasOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `SearchSchemas`<sup>Required</sup> <a name="SearchSchemas" id="@cdk_utils/iam.schemas.SchemasOperations.property.SearchSchemas"></a>

```typescript
public readonly SearchSchemas: string[];
```

- *Type:* string[]

IAM actions required for the SearchSchemas API call.

---

##### `StartDiscoverer`<sup>Required</sup> <a name="StartDiscoverer" id="@cdk_utils/iam.schemas.SchemasOperations.property.StartDiscoverer"></a>

```typescript
public readonly StartDiscoverer: string[];
```

- *Type:* string[]

IAM actions required for the StartDiscoverer API call.

---

##### `StopDiscoverer`<sup>Required</sup> <a name="StopDiscoverer" id="@cdk_utils/iam.schemas.SchemasOperations.property.StopDiscoverer"></a>

```typescript
public readonly StopDiscoverer: string[];
```

- *Type:* string[]

IAM actions required for the StopDiscoverer API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.schemas.SchemasOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.schemas.SchemasOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDiscoverer`<sup>Required</sup> <a name="UpdateDiscoverer" id="@cdk_utils/iam.schemas.SchemasOperations.property.UpdateDiscoverer"></a>

```typescript
public readonly UpdateDiscoverer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDiscoverer API call.

---

##### `UpdateRegistry`<sup>Required</sup> <a name="UpdateRegistry" id="@cdk_utils/iam.schemas.SchemasOperations.property.UpdateRegistry"></a>

```typescript
public readonly UpdateRegistry: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegistry API call.

---

##### `UpdateSchema`<sup>Required</sup> <a name="UpdateSchema" id="@cdk_utils/iam.schemas.SchemasOperations.property.UpdateSchema"></a>

```typescript
public readonly UpdateSchema: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSchema API call.

---

### SchemasResources <a name="SchemasResources" id="@cdk_utils/iam.schemas.SchemasResources"></a>

ARN builders, validators, and parsers for schemas resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.schemas.SchemasResources.Initializer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

new schemas.SchemasResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.schemas.SchemasResources.discoverer">discoverer</a></code> | Builds an ARN for the discoverer resource. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasResources.isValidDiscovererArn">isValidDiscovererArn</a></code> | Validates whether a string is a valid ARN for the discoverer resource. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasResources.isValidRegistryArn">isValidRegistryArn</a></code> | Validates whether a string is a valid ARN for the registry resource. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasResources.isValidSchemaArn">isValidSchemaArn</a></code> | Validates whether a string is a valid ARN for the schema resource. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasResources.parseDiscovererArn">parseDiscovererArn</a></code> | Parses a discoverer ARN into its components. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasResources.parseRegistryArn">parseRegistryArn</a></code> | Parses a registry ARN into its components. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasResources.parseSchemaArn">parseSchemaArn</a></code> | Parses a schema ARN into its components. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasResources.registry">registry</a></code> | Builds an ARN for the registry resource. |
| <code><a href="#@cdk_utils/iam.schemas.SchemasResources.schema">schema</a></code> | Builds an ARN for the schema resource. |

---

##### `discoverer` <a name="discoverer" id="@cdk_utils/iam.schemas.SchemasResources.discoverer"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasResources.discoverer(props: SchemasDiscovererArnProps)
```

Builds an ARN for the discoverer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.schemas.SchemasResources.discoverer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.schemas.SchemasDiscovererArnProps">SchemasDiscovererArnProps</a>

---

##### `isValidDiscovererArn` <a name="isValidDiscovererArn" id="@cdk_utils/iam.schemas.SchemasResources.isValidDiscovererArn"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasResources.isValidDiscovererArn(arn: string)
```

Validates whether a string is a valid ARN for the discoverer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.schemas.SchemasResources.isValidDiscovererArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegistryArn` <a name="isValidRegistryArn" id="@cdk_utils/iam.schemas.SchemasResources.isValidRegistryArn"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasResources.isValidRegistryArn(arn: string)
```

Validates whether a string is a valid ARN for the registry resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.schemas.SchemasResources.isValidRegistryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSchemaArn` <a name="isValidSchemaArn" id="@cdk_utils/iam.schemas.SchemasResources.isValidSchemaArn"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasResources.isValidSchemaArn(arn: string)
```

Validates whether a string is a valid ARN for the schema resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.schemas.SchemasResources.isValidSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDiscovererArn` <a name="parseDiscovererArn" id="@cdk_utils/iam.schemas.SchemasResources.parseDiscovererArn"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasResources.parseDiscovererArn(arn: string)
```

Parses a discoverer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.schemas.SchemasResources.parseDiscovererArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegistryArn` <a name="parseRegistryArn" id="@cdk_utils/iam.schemas.SchemasResources.parseRegistryArn"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasResources.parseRegistryArn(arn: string)
```

Parses a registry ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.schemas.SchemasResources.parseRegistryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSchemaArn` <a name="parseSchemaArn" id="@cdk_utils/iam.schemas.SchemasResources.parseSchemaArn"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasResources.parseSchemaArn(arn: string)
```

Parses a schema ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.schemas.SchemasResources.parseSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `registry` <a name="registry" id="@cdk_utils/iam.schemas.SchemasResources.registry"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasResources.registry(props: SchemasRegistryArnProps)
```

Builds an ARN for the registry resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.schemas.SchemasResources.registry.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.schemas.SchemasRegistryArnProps">SchemasRegistryArnProps</a>

---

##### `schema` <a name="schema" id="@cdk_utils/iam.schemas.SchemasResources.schema"></a>

```typescript
import { schemas } from '@cdk_utils/iam'

schemas.SchemasResources.schema(props: SchemasSchemaArnProps)
```

Builds an ARN for the schema resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.schemas.SchemasResources.schema.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.schemas.SchemasSchemaArnProps">SchemasSchemaArnProps</a>

---




