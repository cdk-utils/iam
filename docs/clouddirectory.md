# `clouddirectory` Submodule <a name="`clouddirectory` Submodule" id="@cdk_utils/iam.clouddirectory"></a>


## Structs <a name="Structs" id="Structs"></a>

### ClouddirectoryAppliedSchemaArnComponents <a name="ClouddirectoryAppliedSchemaArnComponents" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents"></a>

Parsed components of a appliedSchema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

const clouddirectoryAppliedSchemaArnComponents: clouddirectory.ClouddirectoryAppliedSchemaArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.version">version</a></code> | <code>string</code> | The Version component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnComponents.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component.

---

### ClouddirectoryAppliedSchemaArnProps <a name="ClouddirectoryAppliedSchemaArnProps" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps"></a>

Properties for building a appliedSchema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

const clouddirectoryAppliedSchemaArnProps: clouddirectory.ClouddirectoryAppliedSchemaArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component of the ARN. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.version">version</a></code> | <code>string</code> | The Version component of the ARN. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component of the ARN.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component of the ARN.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ClouddirectoryDevelopmentSchemaArnComponents <a name="ClouddirectoryDevelopmentSchemaArnComponents" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents"></a>

Parsed components of a developmentSchema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

const clouddirectoryDevelopmentSchemaArnComponents: clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnComponents.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component.

---

### ClouddirectoryDevelopmentSchemaArnProps <a name="ClouddirectoryDevelopmentSchemaArnProps" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps"></a>

Properties for building a developmentSchema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

const clouddirectoryDevelopmentSchemaArnProps: clouddirectory.ClouddirectoryDevelopmentSchemaArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component of the ARN. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ClouddirectoryDirectoryArnComponents <a name="ClouddirectoryDirectoryArnComponents" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnComponents"></a>

Parsed components of a directory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnComponents.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

const clouddirectoryDirectoryArnComponents: clouddirectory.ClouddirectoryDirectoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnComponents.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnComponents.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ClouddirectoryDirectoryArnProps <a name="ClouddirectoryDirectoryArnProps" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps"></a>

Properties for building a directory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

const clouddirectoryDirectoryArnProps: clouddirectory.ClouddirectoryDirectoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ClouddirectoryPublishedSchemaArnComponents <a name="ClouddirectoryPublishedSchemaArnComponents" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents"></a>

Parsed components of a publishedSchema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

const clouddirectoryPublishedSchemaArnComponents: clouddirectory.ClouddirectoryPublishedSchemaArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.property.version">version</a></code> | <code>string</code> | The Version component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnComponents.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component.

---

### ClouddirectoryPublishedSchemaArnProps <a name="ClouddirectoryPublishedSchemaArnProps" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps"></a>

Properties for building a publishedSchema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

const clouddirectoryPublishedSchemaArnProps: clouddirectory.ClouddirectoryPublishedSchemaArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component of the ARN. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.property.version">version</a></code> | <code>string</code> | The Version component of the ARN. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component of the ARN.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddirectoryActions <a name="ClouddirectoryActions" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions"></a>

IAM action constants for the clouddirectory service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

new clouddirectory.ClouddirectoryActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetAppliedSchemaVersion">actionGetAppliedSchemaVersion</a></code> | <code>string</code> | [Read] clouddirectory:GetAppliedSchemaVersion. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetDirectory">actionGetDirectory</a></code> | <code>string</code> | [Read] clouddirectory:GetDirectory. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetFacet">actionGetFacet</a></code> | <code>string</code> | [Read] clouddirectory:GetFacet. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetLinkAttributes">actionGetLinkAttributes</a></code> | <code>string</code> | [Read] clouddirectory:GetLinkAttributes. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetObjectAttributes">actionGetObjectAttributes</a></code> | <code>string</code> | [Read] clouddirectory:GetObjectAttributes. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetObjectInformation">actionGetObjectInformation</a></code> | <code>string</code> | [Read] clouddirectory:GetObjectInformation. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetSchemaAsJson">actionGetSchemaAsJson</a></code> | <code>string</code> | [Read] clouddirectory:GetSchemaAsJson. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetTypedLinkFacetInformation">actionGetTypedLinkFacetInformation</a></code> | <code>string</code> | [Read] clouddirectory:GetTypedLinkFacetInformation. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AddFacetToObject">AddFacetToObject</a></code> | <code>string</code> | [Write] clouddirectory:AddFacetToObject. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ApplySchema">ApplySchema</a></code> | <code>string</code> | [Write] clouddirectory:ApplySchema. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AttachObject">AttachObject</a></code> | <code>string</code> | [Write] clouddirectory:AttachObject. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AttachPolicy">AttachPolicy</a></code> | <code>string</code> | [Write] clouddirectory:AttachPolicy. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AttachToIndex">AttachToIndex</a></code> | <code>string</code> | [Write] clouddirectory:AttachToIndex. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AttachTypedLink">AttachTypedLink</a></code> | <code>string</code> | [Write] clouddirectory:AttachTypedLink. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.BatchRead">BatchRead</a></code> | <code>string</code> | [Read] clouddirectory:BatchRead. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.BatchWrite">BatchWrite</a></code> | <code>string</code> | [Write] clouddirectory:BatchWrite. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateDirectory">CreateDirectory</a></code> | <code>string</code> | [Write] clouddirectory:CreateDirectory. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateFacet">CreateFacet</a></code> | <code>string</code> | [Write] clouddirectory:CreateFacet. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateIndex">CreateIndex</a></code> | <code>string</code> | [Write] clouddirectory:CreateIndex. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateObject">CreateObject</a></code> | <code>string</code> | [Write] clouddirectory:CreateObject. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateSchema">CreateSchema</a></code> | <code>string</code> | [Write] clouddirectory:CreateSchema. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateTypedLinkFacet">CreateTypedLinkFacet</a></code> | <code>string</code> | [Write] clouddirectory:CreateTypedLinkFacet. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DeleteDirectory">DeleteDirectory</a></code> | <code>string</code> | [Write] clouddirectory:DeleteDirectory. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DeleteFacet">DeleteFacet</a></code> | <code>string</code> | [Write] clouddirectory:DeleteFacet. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DeleteObject">DeleteObject</a></code> | <code>string</code> | [Write] clouddirectory:DeleteObject. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DeleteSchema">DeleteSchema</a></code> | <code>string</code> | [Write] clouddirectory:DeleteSchema. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DeleteTypedLinkFacet">DeleteTypedLinkFacet</a></code> | <code>string</code> | [Write] clouddirectory:DeleteTypedLinkFacet. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DetachFromIndex">DetachFromIndex</a></code> | <code>string</code> | [Write] clouddirectory:DetachFromIndex. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DetachObject">DetachObject</a></code> | <code>string</code> | [Write] clouddirectory:DetachObject. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DetachPolicy">DetachPolicy</a></code> | <code>string</code> | [Write] clouddirectory:DetachPolicy. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DetachTypedLink">DetachTypedLink</a></code> | <code>string</code> | [Write] clouddirectory:DetachTypedLink. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DisableDirectory">DisableDirectory</a></code> | <code>string</code> | [Write] clouddirectory:DisableDirectory. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.EnableDirectory">EnableDirectory</a></code> | <code>string</code> | [Write] clouddirectory:EnableDirectory. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListAppliedSchemaArns">ListAppliedSchemaArns</a></code> | <code>string</code> | [List] clouddirectory:ListAppliedSchemaArns. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListAttachedIndices">ListAttachedIndices</a></code> | <code>string</code> | [Read] clouddirectory:ListAttachedIndices. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListDevelopmentSchemaArns">ListDevelopmentSchemaArns</a></code> | <code>string</code> | [List] clouddirectory:ListDevelopmentSchemaArns. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListDirectories">ListDirectories</a></code> | <code>string</code> | [List] clouddirectory:ListDirectories. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListFacetAttributes">ListFacetAttributes</a></code> | <code>string</code> | [Read] clouddirectory:ListFacetAttributes. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListFacetNames">ListFacetNames</a></code> | <code>string</code> | [Read] clouddirectory:ListFacetNames. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListIncomingTypedLinks">ListIncomingTypedLinks</a></code> | <code>string</code> | [Read] clouddirectory:ListIncomingTypedLinks. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListIndex">ListIndex</a></code> | <code>string</code> | [Read] clouddirectory:ListIndex. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListManagedSchemaArns">ListManagedSchemaArns</a></code> | <code>string</code> | [List] clouddirectory:ListManagedSchemaArns. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListObjectAttributes">ListObjectAttributes</a></code> | <code>string</code> | [Read] clouddirectory:ListObjectAttributes. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListObjectChildren">ListObjectChildren</a></code> | <code>string</code> | [Read] clouddirectory:ListObjectChildren. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListObjectParentPaths">ListObjectParentPaths</a></code> | <code>string</code> | [Read] clouddirectory:ListObjectParentPaths. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListObjectParents">ListObjectParents</a></code> | <code>string</code> | [Read] clouddirectory:ListObjectParents. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListObjectPolicies">ListObjectPolicies</a></code> | <code>string</code> | [Read] clouddirectory:ListObjectPolicies. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListOutgoingTypedLinks">ListOutgoingTypedLinks</a></code> | <code>string</code> | [Read] clouddirectory:ListOutgoingTypedLinks. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListPolicyAttachments">ListPolicyAttachments</a></code> | <code>string</code> | [Read] clouddirectory:ListPolicyAttachments. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListPublishedSchemaArns">ListPublishedSchemaArns</a></code> | <code>string</code> | [List] clouddirectory:ListPublishedSchemaArns. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] clouddirectory:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListTypedLinkFacetAttributes">ListTypedLinkFacetAttributes</a></code> | <code>string</code> | [Read] clouddirectory:ListTypedLinkFacetAttributes. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListTypedLinkFacetNames">ListTypedLinkFacetNames</a></code> | <code>string</code> | [Read] clouddirectory:ListTypedLinkFacetNames. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.LookupPolicy">LookupPolicy</a></code> | <code>string</code> | [Read] clouddirectory:LookupPolicy. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.PublishSchema">PublishSchema</a></code> | <code>string</code> | [Write] clouddirectory:PublishSchema. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.PutSchemaFromJson">PutSchemaFromJson</a></code> | <code>string</code> | [Write] clouddirectory:PutSchemaFromJson. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.RemoveFacetFromObject">RemoveFacetFromObject</a></code> | <code>string</code> | [Write] clouddirectory:RemoveFacetFromObject. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] clouddirectory:TagResource. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] clouddirectory:UntagResource. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpdateFacet">UpdateFacet</a></code> | <code>string</code> | [Write] clouddirectory:UpdateFacet. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpdateLinkAttributes">UpdateLinkAttributes</a></code> | <code>string</code> | [Write] clouddirectory:UpdateLinkAttributes. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpdateObjectAttributes">UpdateObjectAttributes</a></code> | <code>string</code> | [Write] clouddirectory:UpdateObjectAttributes. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpdateSchema">UpdateSchema</a></code> | <code>string</code> | [Write] clouddirectory:UpdateSchema. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpdateTypedLinkFacet">UpdateTypedLinkFacet</a></code> | <code>string</code> | [Write] clouddirectory:UpdateTypedLinkFacet. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpgradeAppliedSchema">UpgradeAppliedSchema</a></code> | <code>string</code> | [Write] clouddirectory:UpgradeAppliedSchema. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpgradePublishedSchema">UpgradePublishedSchema</a></code> | <code>string</code> | [Write] clouddirectory:UpgradePublishedSchema. |

---

##### `actionGetAppliedSchemaVersion`<sup>Required</sup> <a name="actionGetAppliedSchemaVersion" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetAppliedSchemaVersion"></a>

```typescript
public readonly actionGetAppliedSchemaVersion: string;
```

- *Type:* string

[Read] clouddirectory:GetAppliedSchemaVersion.

---

##### `actionGetDirectory`<sup>Required</sup> <a name="actionGetDirectory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetDirectory"></a>

```typescript
public readonly actionGetDirectory: string;
```

- *Type:* string

[Read] clouddirectory:GetDirectory.

---

##### `actionGetFacet`<sup>Required</sup> <a name="actionGetFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetFacet"></a>

```typescript
public readonly actionGetFacet: string;
```

- *Type:* string

[Read] clouddirectory:GetFacet.

---

##### `actionGetLinkAttributes`<sup>Required</sup> <a name="actionGetLinkAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetLinkAttributes"></a>

```typescript
public readonly actionGetLinkAttributes: string;
```

- *Type:* string

[Read] clouddirectory:GetLinkAttributes.

---

##### `actionGetObjectAttributes`<sup>Required</sup> <a name="actionGetObjectAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetObjectAttributes"></a>

```typescript
public readonly actionGetObjectAttributes: string;
```

- *Type:* string

[Read] clouddirectory:GetObjectAttributes.

---

##### `actionGetObjectInformation`<sup>Required</sup> <a name="actionGetObjectInformation" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetObjectInformation"></a>

```typescript
public readonly actionGetObjectInformation: string;
```

- *Type:* string

[Read] clouddirectory:GetObjectInformation.

---

##### `actionGetSchemaAsJson`<sup>Required</sup> <a name="actionGetSchemaAsJson" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetSchemaAsJson"></a>

```typescript
public readonly actionGetSchemaAsJson: string;
```

- *Type:* string

[Read] clouddirectory:GetSchemaAsJson.

---

##### `actionGetTypedLinkFacetInformation`<sup>Required</sup> <a name="actionGetTypedLinkFacetInformation" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.actionGetTypedLinkFacetInformation"></a>

```typescript
public readonly actionGetTypedLinkFacetInformation: string;
```

- *Type:* string

[Read] clouddirectory:GetTypedLinkFacetInformation.

---

##### `AddFacetToObject`<sup>Required</sup> <a name="AddFacetToObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AddFacetToObject"></a>

```typescript
public readonly AddFacetToObject: string;
```

- *Type:* string

[Write] clouddirectory:AddFacetToObject.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApplySchema`<sup>Required</sup> <a name="ApplySchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ApplySchema"></a>

```typescript
public readonly ApplySchema: string;
```

- *Type:* string

[Write] clouddirectory:ApplySchema.

---

##### `AttachObject`<sup>Required</sup> <a name="AttachObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AttachObject"></a>

```typescript
public readonly AttachObject: string;
```

- *Type:* string

[Write] clouddirectory:AttachObject.

---

##### `AttachPolicy`<sup>Required</sup> <a name="AttachPolicy" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AttachPolicy"></a>

```typescript
public readonly AttachPolicy: string;
```

- *Type:* string

[Write] clouddirectory:AttachPolicy.

---

##### `AttachToIndex`<sup>Required</sup> <a name="AttachToIndex" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AttachToIndex"></a>

```typescript
public readonly AttachToIndex: string;
```

- *Type:* string

[Write] clouddirectory:AttachToIndex.

---

##### `AttachTypedLink`<sup>Required</sup> <a name="AttachTypedLink" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.AttachTypedLink"></a>

```typescript
public readonly AttachTypedLink: string;
```

- *Type:* string

[Write] clouddirectory:AttachTypedLink.

---

##### `BatchRead`<sup>Required</sup> <a name="BatchRead" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.BatchRead"></a>

```typescript
public readonly BatchRead: string;
```

- *Type:* string

[Read] clouddirectory:BatchRead.

---

##### `BatchWrite`<sup>Required</sup> <a name="BatchWrite" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.BatchWrite"></a>

```typescript
public readonly BatchWrite: string;
```

- *Type:* string

[Write] clouddirectory:BatchWrite.

---

##### `CreateDirectory`<sup>Required</sup> <a name="CreateDirectory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateDirectory"></a>

```typescript
public readonly CreateDirectory: string;
```

- *Type:* string

[Write] clouddirectory:CreateDirectory.

---

##### `CreateFacet`<sup>Required</sup> <a name="CreateFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateFacet"></a>

```typescript
public readonly CreateFacet: string;
```

- *Type:* string

[Write] clouddirectory:CreateFacet.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string;
```

- *Type:* string

[Write] clouddirectory:CreateIndex.

---

##### `CreateObject`<sup>Required</sup> <a name="CreateObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateObject"></a>

```typescript
public readonly CreateObject: string;
```

- *Type:* string

[Write] clouddirectory:CreateObject.

---

##### `CreateSchema`<sup>Required</sup> <a name="CreateSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateSchema"></a>

```typescript
public readonly CreateSchema: string;
```

- *Type:* string

[Write] clouddirectory:CreateSchema.

---

##### `CreateTypedLinkFacet`<sup>Required</sup> <a name="CreateTypedLinkFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.CreateTypedLinkFacet"></a>

```typescript
public readonly CreateTypedLinkFacet: string;
```

- *Type:* string

[Write] clouddirectory:CreateTypedLinkFacet.

---

##### `DeleteDirectory`<sup>Required</sup> <a name="DeleteDirectory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DeleteDirectory"></a>

```typescript
public readonly DeleteDirectory: string;
```

- *Type:* string

[Write] clouddirectory:DeleteDirectory.

---

##### `DeleteFacet`<sup>Required</sup> <a name="DeleteFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DeleteFacet"></a>

```typescript
public readonly DeleteFacet: string;
```

- *Type:* string

[Write] clouddirectory:DeleteFacet.

---

##### `DeleteObject`<sup>Required</sup> <a name="DeleteObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DeleteObject"></a>

```typescript
public readonly DeleteObject: string;
```

- *Type:* string

[Write] clouddirectory:DeleteObject.

---

##### `DeleteSchema`<sup>Required</sup> <a name="DeleteSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DeleteSchema"></a>

```typescript
public readonly DeleteSchema: string;
```

- *Type:* string

[Write] clouddirectory:DeleteSchema.

---

##### `DeleteTypedLinkFacet`<sup>Required</sup> <a name="DeleteTypedLinkFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DeleteTypedLinkFacet"></a>

```typescript
public readonly DeleteTypedLinkFacet: string;
```

- *Type:* string

[Write] clouddirectory:DeleteTypedLinkFacet.

---

##### `DetachFromIndex`<sup>Required</sup> <a name="DetachFromIndex" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DetachFromIndex"></a>

```typescript
public readonly DetachFromIndex: string;
```

- *Type:* string

[Write] clouddirectory:DetachFromIndex.

---

##### `DetachObject`<sup>Required</sup> <a name="DetachObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DetachObject"></a>

```typescript
public readonly DetachObject: string;
```

- *Type:* string

[Write] clouddirectory:DetachObject.

---

##### `DetachPolicy`<sup>Required</sup> <a name="DetachPolicy" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DetachPolicy"></a>

```typescript
public readonly DetachPolicy: string;
```

- *Type:* string

[Write] clouddirectory:DetachPolicy.

---

##### `DetachTypedLink`<sup>Required</sup> <a name="DetachTypedLink" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DetachTypedLink"></a>

```typescript
public readonly DetachTypedLink: string;
```

- *Type:* string

[Write] clouddirectory:DetachTypedLink.

---

##### `DisableDirectory`<sup>Required</sup> <a name="DisableDirectory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.DisableDirectory"></a>

```typescript
public readonly DisableDirectory: string;
```

- *Type:* string

[Write] clouddirectory:DisableDirectory.

---

##### `EnableDirectory`<sup>Required</sup> <a name="EnableDirectory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.EnableDirectory"></a>

```typescript
public readonly EnableDirectory: string;
```

- *Type:* string

[Write] clouddirectory:EnableDirectory.

---

##### `ListAppliedSchemaArns`<sup>Required</sup> <a name="ListAppliedSchemaArns" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListAppliedSchemaArns"></a>

```typescript
public readonly ListAppliedSchemaArns: string;
```

- *Type:* string

[List] clouddirectory:ListAppliedSchemaArns.

---

##### `ListAttachedIndices`<sup>Required</sup> <a name="ListAttachedIndices" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListAttachedIndices"></a>

```typescript
public readonly ListAttachedIndices: string;
```

- *Type:* string

[Read] clouddirectory:ListAttachedIndices.

---

##### `ListDevelopmentSchemaArns`<sup>Required</sup> <a name="ListDevelopmentSchemaArns" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListDevelopmentSchemaArns"></a>

```typescript
public readonly ListDevelopmentSchemaArns: string;
```

- *Type:* string

[List] clouddirectory:ListDevelopmentSchemaArns.

---

##### `ListDirectories`<sup>Required</sup> <a name="ListDirectories" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListDirectories"></a>

```typescript
public readonly ListDirectories: string;
```

- *Type:* string

[List] clouddirectory:ListDirectories.

---

##### `ListFacetAttributes`<sup>Required</sup> <a name="ListFacetAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListFacetAttributes"></a>

```typescript
public readonly ListFacetAttributes: string;
```

- *Type:* string

[Read] clouddirectory:ListFacetAttributes.

---

##### `ListFacetNames`<sup>Required</sup> <a name="ListFacetNames" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListFacetNames"></a>

```typescript
public readonly ListFacetNames: string;
```

- *Type:* string

[Read] clouddirectory:ListFacetNames.

---

##### `ListIncomingTypedLinks`<sup>Required</sup> <a name="ListIncomingTypedLinks" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListIncomingTypedLinks"></a>

```typescript
public readonly ListIncomingTypedLinks: string;
```

- *Type:* string

[Read] clouddirectory:ListIncomingTypedLinks.

---

##### `ListIndex`<sup>Required</sup> <a name="ListIndex" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListIndex"></a>

```typescript
public readonly ListIndex: string;
```

- *Type:* string

[Read] clouddirectory:ListIndex.

---

##### `ListManagedSchemaArns`<sup>Required</sup> <a name="ListManagedSchemaArns" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListManagedSchemaArns"></a>

```typescript
public readonly ListManagedSchemaArns: string;
```

- *Type:* string

[List] clouddirectory:ListManagedSchemaArns.

---

##### `ListObjectAttributes`<sup>Required</sup> <a name="ListObjectAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListObjectAttributes"></a>

```typescript
public readonly ListObjectAttributes: string;
```

- *Type:* string

[Read] clouddirectory:ListObjectAttributes.

---

##### `ListObjectChildren`<sup>Required</sup> <a name="ListObjectChildren" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListObjectChildren"></a>

```typescript
public readonly ListObjectChildren: string;
```

- *Type:* string

[Read] clouddirectory:ListObjectChildren.

---

##### `ListObjectParentPaths`<sup>Required</sup> <a name="ListObjectParentPaths" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListObjectParentPaths"></a>

```typescript
public readonly ListObjectParentPaths: string;
```

- *Type:* string

[Read] clouddirectory:ListObjectParentPaths.

---

##### `ListObjectParents`<sup>Required</sup> <a name="ListObjectParents" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListObjectParents"></a>

```typescript
public readonly ListObjectParents: string;
```

- *Type:* string

[Read] clouddirectory:ListObjectParents.

---

##### `ListObjectPolicies`<sup>Required</sup> <a name="ListObjectPolicies" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListObjectPolicies"></a>

```typescript
public readonly ListObjectPolicies: string;
```

- *Type:* string

[Read] clouddirectory:ListObjectPolicies.

---

##### `ListOutgoingTypedLinks`<sup>Required</sup> <a name="ListOutgoingTypedLinks" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListOutgoingTypedLinks"></a>

```typescript
public readonly ListOutgoingTypedLinks: string;
```

- *Type:* string

[Read] clouddirectory:ListOutgoingTypedLinks.

---

##### `ListPolicyAttachments`<sup>Required</sup> <a name="ListPolicyAttachments" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListPolicyAttachments"></a>

```typescript
public readonly ListPolicyAttachments: string;
```

- *Type:* string

[Read] clouddirectory:ListPolicyAttachments.

---

##### `ListPublishedSchemaArns`<sup>Required</sup> <a name="ListPublishedSchemaArns" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListPublishedSchemaArns"></a>

```typescript
public readonly ListPublishedSchemaArns: string;
```

- *Type:* string

[List] clouddirectory:ListPublishedSchemaArns.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] clouddirectory:ListTagsForResource.

---

##### `ListTypedLinkFacetAttributes`<sup>Required</sup> <a name="ListTypedLinkFacetAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListTypedLinkFacetAttributes"></a>

```typescript
public readonly ListTypedLinkFacetAttributes: string;
```

- *Type:* string

[Read] clouddirectory:ListTypedLinkFacetAttributes.

---

##### `ListTypedLinkFacetNames`<sup>Required</sup> <a name="ListTypedLinkFacetNames" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.ListTypedLinkFacetNames"></a>

```typescript
public readonly ListTypedLinkFacetNames: string;
```

- *Type:* string

[Read] clouddirectory:ListTypedLinkFacetNames.

---

##### `LookupPolicy`<sup>Required</sup> <a name="LookupPolicy" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.LookupPolicy"></a>

```typescript
public readonly LookupPolicy: string;
```

- *Type:* string

[Read] clouddirectory:LookupPolicy.

---

##### `PublishSchema`<sup>Required</sup> <a name="PublishSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.PublishSchema"></a>

```typescript
public readonly PublishSchema: string;
```

- *Type:* string

[Write] clouddirectory:PublishSchema.

---

##### `PutSchemaFromJson`<sup>Required</sup> <a name="PutSchemaFromJson" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.PutSchemaFromJson"></a>

```typescript
public readonly PutSchemaFromJson: string;
```

- *Type:* string

[Write] clouddirectory:PutSchemaFromJson.

---

##### `RemoveFacetFromObject`<sup>Required</sup> <a name="RemoveFacetFromObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.RemoveFacetFromObject"></a>

```typescript
public readonly RemoveFacetFromObject: string;
```

- *Type:* string

[Write] clouddirectory:RemoveFacetFromObject.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] clouddirectory:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] clouddirectory:UntagResource.

---

##### `UpdateFacet`<sup>Required</sup> <a name="UpdateFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpdateFacet"></a>

```typescript
public readonly UpdateFacet: string;
```

- *Type:* string

[Write] clouddirectory:UpdateFacet.

---

##### `UpdateLinkAttributes`<sup>Required</sup> <a name="UpdateLinkAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpdateLinkAttributes"></a>

```typescript
public readonly UpdateLinkAttributes: string;
```

- *Type:* string

[Write] clouddirectory:UpdateLinkAttributes.

---

##### `UpdateObjectAttributes`<sup>Required</sup> <a name="UpdateObjectAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpdateObjectAttributes"></a>

```typescript
public readonly UpdateObjectAttributes: string;
```

- *Type:* string

[Write] clouddirectory:UpdateObjectAttributes.

---

##### `UpdateSchema`<sup>Required</sup> <a name="UpdateSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpdateSchema"></a>

```typescript
public readonly UpdateSchema: string;
```

- *Type:* string

[Write] clouddirectory:UpdateSchema.

---

##### `UpdateTypedLinkFacet`<sup>Required</sup> <a name="UpdateTypedLinkFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpdateTypedLinkFacet"></a>

```typescript
public readonly UpdateTypedLinkFacet: string;
```

- *Type:* string

[Write] clouddirectory:UpdateTypedLinkFacet.

---

##### `UpgradeAppliedSchema`<sup>Required</sup> <a name="UpgradeAppliedSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpgradeAppliedSchema"></a>

```typescript
public readonly UpgradeAppliedSchema: string;
```

- *Type:* string

[Write] clouddirectory:UpgradeAppliedSchema.

---

##### `UpgradePublishedSchema`<sup>Required</sup> <a name="UpgradePublishedSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryActions.property.UpgradePublishedSchema"></a>

```typescript
public readonly UpgradePublishedSchema: string;
```

- *Type:* string

[Write] clouddirectory:UpgradePublishedSchema.

---

### ClouddirectoryOperations <a name="ClouddirectoryOperations" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations"></a>

API operation to required IAM actions mapping for clouddirectory.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

new clouddirectory.ClouddirectoryOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.AddFacetToObject">AddFacetToObject</a></code> | <code>string[]</code> | IAM actions required for the AddFacetToObject API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ApplySchema">ApplySchema</a></code> | <code>string[]</code> | IAM actions required for the ApplySchema API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.AttachObject">AttachObject</a></code> | <code>string[]</code> | IAM actions required for the AttachObject API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.AttachPolicy">AttachPolicy</a></code> | <code>string[]</code> | IAM actions required for the AttachPolicy API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.AttachToIndex">AttachToIndex</a></code> | <code>string[]</code> | IAM actions required for the AttachToIndex API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.AttachTypedLink">AttachTypedLink</a></code> | <code>string[]</code> | IAM actions required for the AttachTypedLink API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.BatchRead">BatchRead</a></code> | <code>string[]</code> | IAM actions required for the BatchRead API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.BatchWrite">BatchWrite</a></code> | <code>string[]</code> | IAM actions required for the BatchWrite API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateDirectory">CreateDirectory</a></code> | <code>string[]</code> | IAM actions required for the CreateDirectory API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateFacet">CreateFacet</a></code> | <code>string[]</code> | IAM actions required for the CreateFacet API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateIndex">CreateIndex</a></code> | <code>string[]</code> | IAM actions required for the CreateIndex API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateObject">CreateObject</a></code> | <code>string[]</code> | IAM actions required for the CreateObject API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateSchema">CreateSchema</a></code> | <code>string[]</code> | IAM actions required for the CreateSchema API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateTypedLinkFacet">CreateTypedLinkFacet</a></code> | <code>string[]</code> | IAM actions required for the CreateTypedLinkFacet API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DeleteDirectory">DeleteDirectory</a></code> | <code>string[]</code> | IAM actions required for the DeleteDirectory API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DeleteFacet">DeleteFacet</a></code> | <code>string[]</code> | IAM actions required for the DeleteFacet API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DeleteObject">DeleteObject</a></code> | <code>string[]</code> | IAM actions required for the DeleteObject API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DeleteSchema">DeleteSchema</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchema API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DeleteTypedLinkFacet">DeleteTypedLinkFacet</a></code> | <code>string[]</code> | IAM actions required for the DeleteTypedLinkFacet API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DetachFromIndex">DetachFromIndex</a></code> | <code>string[]</code> | IAM actions required for the DetachFromIndex API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DetachObject">DetachObject</a></code> | <code>string[]</code> | IAM actions required for the DetachObject API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DetachPolicy">DetachPolicy</a></code> | <code>string[]</code> | IAM actions required for the DetachPolicy API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DetachTypedLink">DetachTypedLink</a></code> | <code>string[]</code> | IAM actions required for the DetachTypedLink API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DisableDirectory">DisableDirectory</a></code> | <code>string[]</code> | IAM actions required for the DisableDirectory API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.EnableDirectory">EnableDirectory</a></code> | <code>string[]</code> | IAM actions required for the EnableDirectory API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListAppliedSchemaArns">ListAppliedSchemaArns</a></code> | <code>string[]</code> | IAM actions required for the ListAppliedSchemaArns API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListAttachedIndices">ListAttachedIndices</a></code> | <code>string[]</code> | IAM actions required for the ListAttachedIndices API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListDevelopmentSchemaArns">ListDevelopmentSchemaArns</a></code> | <code>string[]</code> | IAM actions required for the ListDevelopmentSchemaArns API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListDirectories">ListDirectories</a></code> | <code>string[]</code> | IAM actions required for the ListDirectories API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListFacetAttributes">ListFacetAttributes</a></code> | <code>string[]</code> | IAM actions required for the ListFacetAttributes API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListFacetNames">ListFacetNames</a></code> | <code>string[]</code> | IAM actions required for the ListFacetNames API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListIncomingTypedLinks">ListIncomingTypedLinks</a></code> | <code>string[]</code> | IAM actions required for the ListIncomingTypedLinks API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListIndex">ListIndex</a></code> | <code>string[]</code> | IAM actions required for the ListIndex API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListManagedSchemaArns">ListManagedSchemaArns</a></code> | <code>string[]</code> | IAM actions required for the ListManagedSchemaArns API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListObjectAttributes">ListObjectAttributes</a></code> | <code>string[]</code> | IAM actions required for the ListObjectAttributes API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListObjectChildren">ListObjectChildren</a></code> | <code>string[]</code> | IAM actions required for the ListObjectChildren API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListObjectParentPaths">ListObjectParentPaths</a></code> | <code>string[]</code> | IAM actions required for the ListObjectParentPaths API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListObjectParents">ListObjectParents</a></code> | <code>string[]</code> | IAM actions required for the ListObjectParents API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListObjectPolicies">ListObjectPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListObjectPolicies API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListOutgoingTypedLinks">ListOutgoingTypedLinks</a></code> | <code>string[]</code> | IAM actions required for the ListOutgoingTypedLinks API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListPolicyAttachments">ListPolicyAttachments</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyAttachments API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListPublishedSchemaArns">ListPublishedSchemaArns</a></code> | <code>string[]</code> | IAM actions required for the ListPublishedSchemaArns API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListTypedLinkFacetAttributes">ListTypedLinkFacetAttributes</a></code> | <code>string[]</code> | IAM actions required for the ListTypedLinkFacetAttributes API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListTypedLinkFacetNames">ListTypedLinkFacetNames</a></code> | <code>string[]</code> | IAM actions required for the ListTypedLinkFacetNames API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.LookupPolicy">LookupPolicy</a></code> | <code>string[]</code> | IAM actions required for the LookupPolicy API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetAppliedSchemaVersion">opGetAppliedSchemaVersion</a></code> | <code>string[]</code> | IAM actions required for the GetAppliedSchemaVersion API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetDirectory">opGetDirectory</a></code> | <code>string[]</code> | IAM actions required for the GetDirectory API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetFacet">opGetFacet</a></code> | <code>string[]</code> | IAM actions required for the GetFacet API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetLinkAttributes">opGetLinkAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetLinkAttributes API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetObjectAttributes">opGetObjectAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetObjectAttributes API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetObjectInformation">opGetObjectInformation</a></code> | <code>string[]</code> | IAM actions required for the GetObjectInformation API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetSchemaAsJson">opGetSchemaAsJson</a></code> | <code>string[]</code> | IAM actions required for the GetSchemaAsJson API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetTypedLinkFacetInformation">opGetTypedLinkFacetInformation</a></code> | <code>string[]</code> | IAM actions required for the GetTypedLinkFacetInformation API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.PublishSchema">PublishSchema</a></code> | <code>string[]</code> | IAM actions required for the PublishSchema API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.PutSchemaFromJson">PutSchemaFromJson</a></code> | <code>string[]</code> | IAM actions required for the PutSchemaFromJson API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.RemoveFacetFromObject">RemoveFacetFromObject</a></code> | <code>string[]</code> | IAM actions required for the RemoveFacetFromObject API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpdateFacet">UpdateFacet</a></code> | <code>string[]</code> | IAM actions required for the UpdateFacet API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpdateLinkAttributes">UpdateLinkAttributes</a></code> | <code>string[]</code> | IAM actions required for the UpdateLinkAttributes API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpdateObjectAttributes">UpdateObjectAttributes</a></code> | <code>string[]</code> | IAM actions required for the UpdateObjectAttributes API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpdateSchema">UpdateSchema</a></code> | <code>string[]</code> | IAM actions required for the UpdateSchema API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpdateTypedLinkFacet">UpdateTypedLinkFacet</a></code> | <code>string[]</code> | IAM actions required for the UpdateTypedLinkFacet API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpgradeAppliedSchema">UpgradeAppliedSchema</a></code> | <code>string[]</code> | IAM actions required for the UpgradeAppliedSchema API call. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpgradePublishedSchema">UpgradePublishedSchema</a></code> | <code>string[]</code> | IAM actions required for the UpgradePublishedSchema API call. |

---

##### `AddFacetToObject`<sup>Required</sup> <a name="AddFacetToObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.AddFacetToObject"></a>

```typescript
public readonly AddFacetToObject: string[];
```

- *Type:* string[]

IAM actions required for the AddFacetToObject API call.

---

##### `ApplySchema`<sup>Required</sup> <a name="ApplySchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ApplySchema"></a>

```typescript
public readonly ApplySchema: string[];
```

- *Type:* string[]

IAM actions required for the ApplySchema API call.

---

##### `AttachObject`<sup>Required</sup> <a name="AttachObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.AttachObject"></a>

```typescript
public readonly AttachObject: string[];
```

- *Type:* string[]

IAM actions required for the AttachObject API call.

---

##### `AttachPolicy`<sup>Required</sup> <a name="AttachPolicy" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.AttachPolicy"></a>

```typescript
public readonly AttachPolicy: string[];
```

- *Type:* string[]

IAM actions required for the AttachPolicy API call.

---

##### `AttachToIndex`<sup>Required</sup> <a name="AttachToIndex" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.AttachToIndex"></a>

```typescript
public readonly AttachToIndex: string[];
```

- *Type:* string[]

IAM actions required for the AttachToIndex API call.

---

##### `AttachTypedLink`<sup>Required</sup> <a name="AttachTypedLink" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.AttachTypedLink"></a>

```typescript
public readonly AttachTypedLink: string[];
```

- *Type:* string[]

IAM actions required for the AttachTypedLink API call.

---

##### `BatchRead`<sup>Required</sup> <a name="BatchRead" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.BatchRead"></a>

```typescript
public readonly BatchRead: string[];
```

- *Type:* string[]

IAM actions required for the BatchRead API call.

---

##### `BatchWrite`<sup>Required</sup> <a name="BatchWrite" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.BatchWrite"></a>

```typescript
public readonly BatchWrite: string[];
```

- *Type:* string[]

IAM actions required for the BatchWrite API call.

---

##### `CreateDirectory`<sup>Required</sup> <a name="CreateDirectory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateDirectory"></a>

```typescript
public readonly CreateDirectory: string[];
```

- *Type:* string[]

IAM actions required for the CreateDirectory API call.

---

##### `CreateFacet`<sup>Required</sup> <a name="CreateFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateFacet"></a>

```typescript
public readonly CreateFacet: string[];
```

- *Type:* string[]

IAM actions required for the CreateFacet API call.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string[];
```

- *Type:* string[]

IAM actions required for the CreateIndex API call.

---

##### `CreateObject`<sup>Required</sup> <a name="CreateObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateObject"></a>

```typescript
public readonly CreateObject: string[];
```

- *Type:* string[]

IAM actions required for the CreateObject API call.

---

##### `CreateSchema`<sup>Required</sup> <a name="CreateSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateSchema"></a>

```typescript
public readonly CreateSchema: string[];
```

- *Type:* string[]

IAM actions required for the CreateSchema API call.

---

##### `CreateTypedLinkFacet`<sup>Required</sup> <a name="CreateTypedLinkFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.CreateTypedLinkFacet"></a>

```typescript
public readonly CreateTypedLinkFacet: string[];
```

- *Type:* string[]

IAM actions required for the CreateTypedLinkFacet API call.

---

##### `DeleteDirectory`<sup>Required</sup> <a name="DeleteDirectory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DeleteDirectory"></a>

```typescript
public readonly DeleteDirectory: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDirectory API call.

---

##### `DeleteFacet`<sup>Required</sup> <a name="DeleteFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DeleteFacet"></a>

```typescript
public readonly DeleteFacet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFacet API call.

---

##### `DeleteObject`<sup>Required</sup> <a name="DeleteObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DeleteObject"></a>

```typescript
public readonly DeleteObject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteObject API call.

---

##### `DeleteSchema`<sup>Required</sup> <a name="DeleteSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DeleteSchema"></a>

```typescript
public readonly DeleteSchema: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchema API call.

---

##### `DeleteTypedLinkFacet`<sup>Required</sup> <a name="DeleteTypedLinkFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DeleteTypedLinkFacet"></a>

```typescript
public readonly DeleteTypedLinkFacet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTypedLinkFacet API call.

---

##### `DetachFromIndex`<sup>Required</sup> <a name="DetachFromIndex" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DetachFromIndex"></a>

```typescript
public readonly DetachFromIndex: string[];
```

- *Type:* string[]

IAM actions required for the DetachFromIndex API call.

---

##### `DetachObject`<sup>Required</sup> <a name="DetachObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DetachObject"></a>

```typescript
public readonly DetachObject: string[];
```

- *Type:* string[]

IAM actions required for the DetachObject API call.

---

##### `DetachPolicy`<sup>Required</sup> <a name="DetachPolicy" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DetachPolicy"></a>

```typescript
public readonly DetachPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DetachPolicy API call.

---

##### `DetachTypedLink`<sup>Required</sup> <a name="DetachTypedLink" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DetachTypedLink"></a>

```typescript
public readonly DetachTypedLink: string[];
```

- *Type:* string[]

IAM actions required for the DetachTypedLink API call.

---

##### `DisableDirectory`<sup>Required</sup> <a name="DisableDirectory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.DisableDirectory"></a>

```typescript
public readonly DisableDirectory: string[];
```

- *Type:* string[]

IAM actions required for the DisableDirectory API call.

---

##### `EnableDirectory`<sup>Required</sup> <a name="EnableDirectory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.EnableDirectory"></a>

```typescript
public readonly EnableDirectory: string[];
```

- *Type:* string[]

IAM actions required for the EnableDirectory API call.

---

##### `ListAppliedSchemaArns`<sup>Required</sup> <a name="ListAppliedSchemaArns" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListAppliedSchemaArns"></a>

```typescript
public readonly ListAppliedSchemaArns: string[];
```

- *Type:* string[]

IAM actions required for the ListAppliedSchemaArns API call.

---

##### `ListAttachedIndices`<sup>Required</sup> <a name="ListAttachedIndices" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListAttachedIndices"></a>

```typescript
public readonly ListAttachedIndices: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachedIndices API call.

---

##### `ListDevelopmentSchemaArns`<sup>Required</sup> <a name="ListDevelopmentSchemaArns" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListDevelopmentSchemaArns"></a>

```typescript
public readonly ListDevelopmentSchemaArns: string[];
```

- *Type:* string[]

IAM actions required for the ListDevelopmentSchemaArns API call.

---

##### `ListDirectories`<sup>Required</sup> <a name="ListDirectories" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListDirectories"></a>

```typescript
public readonly ListDirectories: string[];
```

- *Type:* string[]

IAM actions required for the ListDirectories API call.

---

##### `ListFacetAttributes`<sup>Required</sup> <a name="ListFacetAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListFacetAttributes"></a>

```typescript
public readonly ListFacetAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ListFacetAttributes API call.

---

##### `ListFacetNames`<sup>Required</sup> <a name="ListFacetNames" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListFacetNames"></a>

```typescript
public readonly ListFacetNames: string[];
```

- *Type:* string[]

IAM actions required for the ListFacetNames API call.

---

##### `ListIncomingTypedLinks`<sup>Required</sup> <a name="ListIncomingTypedLinks" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListIncomingTypedLinks"></a>

```typescript
public readonly ListIncomingTypedLinks: string[];
```

- *Type:* string[]

IAM actions required for the ListIncomingTypedLinks API call.

---

##### `ListIndex`<sup>Required</sup> <a name="ListIndex" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListIndex"></a>

```typescript
public readonly ListIndex: string[];
```

- *Type:* string[]

IAM actions required for the ListIndex API call.

---

##### `ListManagedSchemaArns`<sup>Required</sup> <a name="ListManagedSchemaArns" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListManagedSchemaArns"></a>

```typescript
public readonly ListManagedSchemaArns: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedSchemaArns API call.

---

##### `ListObjectAttributes`<sup>Required</sup> <a name="ListObjectAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListObjectAttributes"></a>

```typescript
public readonly ListObjectAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ListObjectAttributes API call.

---

##### `ListObjectChildren`<sup>Required</sup> <a name="ListObjectChildren" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListObjectChildren"></a>

```typescript
public readonly ListObjectChildren: string[];
```

- *Type:* string[]

IAM actions required for the ListObjectChildren API call.

---

##### `ListObjectParentPaths`<sup>Required</sup> <a name="ListObjectParentPaths" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListObjectParentPaths"></a>

```typescript
public readonly ListObjectParentPaths: string[];
```

- *Type:* string[]

IAM actions required for the ListObjectParentPaths API call.

---

##### `ListObjectParents`<sup>Required</sup> <a name="ListObjectParents" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListObjectParents"></a>

```typescript
public readonly ListObjectParents: string[];
```

- *Type:* string[]

IAM actions required for the ListObjectParents API call.

---

##### `ListObjectPolicies`<sup>Required</sup> <a name="ListObjectPolicies" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListObjectPolicies"></a>

```typescript
public readonly ListObjectPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListObjectPolicies API call.

---

##### `ListOutgoingTypedLinks`<sup>Required</sup> <a name="ListOutgoingTypedLinks" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListOutgoingTypedLinks"></a>

```typescript
public readonly ListOutgoingTypedLinks: string[];
```

- *Type:* string[]

IAM actions required for the ListOutgoingTypedLinks API call.

---

##### `ListPolicyAttachments`<sup>Required</sup> <a name="ListPolicyAttachments" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListPolicyAttachments"></a>

```typescript
public readonly ListPolicyAttachments: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyAttachments API call.

---

##### `ListPublishedSchemaArns`<sup>Required</sup> <a name="ListPublishedSchemaArns" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListPublishedSchemaArns"></a>

```typescript
public readonly ListPublishedSchemaArns: string[];
```

- *Type:* string[]

IAM actions required for the ListPublishedSchemaArns API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTypedLinkFacetAttributes`<sup>Required</sup> <a name="ListTypedLinkFacetAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListTypedLinkFacetAttributes"></a>

```typescript
public readonly ListTypedLinkFacetAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ListTypedLinkFacetAttributes API call.

---

##### `ListTypedLinkFacetNames`<sup>Required</sup> <a name="ListTypedLinkFacetNames" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.ListTypedLinkFacetNames"></a>

```typescript
public readonly ListTypedLinkFacetNames: string[];
```

- *Type:* string[]

IAM actions required for the ListTypedLinkFacetNames API call.

---

##### `LookupPolicy`<sup>Required</sup> <a name="LookupPolicy" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.LookupPolicy"></a>

```typescript
public readonly LookupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the LookupPolicy API call.

---

##### `opGetAppliedSchemaVersion`<sup>Required</sup> <a name="opGetAppliedSchemaVersion" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetAppliedSchemaVersion"></a>

```typescript
public readonly opGetAppliedSchemaVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetAppliedSchemaVersion API call.

---

##### `opGetDirectory`<sup>Required</sup> <a name="opGetDirectory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetDirectory"></a>

```typescript
public readonly opGetDirectory: string[];
```

- *Type:* string[]

IAM actions required for the GetDirectory API call.

---

##### `opGetFacet`<sup>Required</sup> <a name="opGetFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetFacet"></a>

```typescript
public readonly opGetFacet: string[];
```

- *Type:* string[]

IAM actions required for the GetFacet API call.

---

##### `opGetLinkAttributes`<sup>Required</sup> <a name="opGetLinkAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetLinkAttributes"></a>

```typescript
public readonly opGetLinkAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetLinkAttributes API call.

---

##### `opGetObjectAttributes`<sup>Required</sup> <a name="opGetObjectAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetObjectAttributes"></a>

```typescript
public readonly opGetObjectAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetObjectAttributes API call.

---

##### `opGetObjectInformation`<sup>Required</sup> <a name="opGetObjectInformation" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetObjectInformation"></a>

```typescript
public readonly opGetObjectInformation: string[];
```

- *Type:* string[]

IAM actions required for the GetObjectInformation API call.

---

##### `opGetSchemaAsJson`<sup>Required</sup> <a name="opGetSchemaAsJson" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetSchemaAsJson"></a>

```typescript
public readonly opGetSchemaAsJson: string[];
```

- *Type:* string[]

IAM actions required for the GetSchemaAsJson API call.

---

##### `opGetTypedLinkFacetInformation`<sup>Required</sup> <a name="opGetTypedLinkFacetInformation" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.opGetTypedLinkFacetInformation"></a>

```typescript
public readonly opGetTypedLinkFacetInformation: string[];
```

- *Type:* string[]

IAM actions required for the GetTypedLinkFacetInformation API call.

---

##### `PublishSchema`<sup>Required</sup> <a name="PublishSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.PublishSchema"></a>

```typescript
public readonly PublishSchema: string[];
```

- *Type:* string[]

IAM actions required for the PublishSchema API call.

---

##### `PutSchemaFromJson`<sup>Required</sup> <a name="PutSchemaFromJson" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.PutSchemaFromJson"></a>

```typescript
public readonly PutSchemaFromJson: string[];
```

- *Type:* string[]

IAM actions required for the PutSchemaFromJson API call.

---

##### `RemoveFacetFromObject`<sup>Required</sup> <a name="RemoveFacetFromObject" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.RemoveFacetFromObject"></a>

```typescript
public readonly RemoveFacetFromObject: string[];
```

- *Type:* string[]

IAM actions required for the RemoveFacetFromObject API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateFacet`<sup>Required</sup> <a name="UpdateFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpdateFacet"></a>

```typescript
public readonly UpdateFacet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFacet API call.

---

##### `UpdateLinkAttributes`<sup>Required</sup> <a name="UpdateLinkAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpdateLinkAttributes"></a>

```typescript
public readonly UpdateLinkAttributes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLinkAttributes API call.

---

##### `UpdateObjectAttributes`<sup>Required</sup> <a name="UpdateObjectAttributes" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpdateObjectAttributes"></a>

```typescript
public readonly UpdateObjectAttributes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateObjectAttributes API call.

---

##### `UpdateSchema`<sup>Required</sup> <a name="UpdateSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpdateSchema"></a>

```typescript
public readonly UpdateSchema: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSchema API call.

---

##### `UpdateTypedLinkFacet`<sup>Required</sup> <a name="UpdateTypedLinkFacet" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpdateTypedLinkFacet"></a>

```typescript
public readonly UpdateTypedLinkFacet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTypedLinkFacet API call.

---

##### `UpgradeAppliedSchema`<sup>Required</sup> <a name="UpgradeAppliedSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpgradeAppliedSchema"></a>

```typescript
public readonly UpgradeAppliedSchema: string[];
```

- *Type:* string[]

IAM actions required for the UpgradeAppliedSchema API call.

---

##### `UpgradePublishedSchema`<sup>Required</sup> <a name="UpgradePublishedSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryOperations.property.UpgradePublishedSchema"></a>

```typescript
public readonly UpgradePublishedSchema: string[];
```

- *Type:* string[]

IAM actions required for the UpgradePublishedSchema API call.

---

### ClouddirectoryResources <a name="ClouddirectoryResources" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources"></a>

ARN builders, validators, and parsers for clouddirectory resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.Initializer"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

new clouddirectory.ClouddirectoryResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.appliedSchema">appliedSchema</a></code> | Builds an ARN for the appliedSchema resource. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.developmentSchema">developmentSchema</a></code> | Builds an ARN for the developmentSchema resource. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.directory">directory</a></code> | Builds an ARN for the directory resource. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidAppliedSchemaArn">isValidAppliedSchemaArn</a></code> | Validates whether a string is a valid ARN for the appliedSchema resource. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidDevelopmentSchemaArn">isValidDevelopmentSchemaArn</a></code> | Validates whether a string is a valid ARN for the developmentSchema resource. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidDirectoryArn">isValidDirectoryArn</a></code> | Validates whether a string is a valid ARN for the directory resource. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidPublishedSchemaArn">isValidPublishedSchemaArn</a></code> | Validates whether a string is a valid ARN for the publishedSchema resource. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parseAppliedSchemaArn">parseAppliedSchemaArn</a></code> | Parses a appliedSchema ARN into its components. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parseDevelopmentSchemaArn">parseDevelopmentSchemaArn</a></code> | Parses a developmentSchema ARN into its components. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parseDirectoryArn">parseDirectoryArn</a></code> | Parses a directory ARN into its components. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parsePublishedSchemaArn">parsePublishedSchemaArn</a></code> | Parses a publishedSchema ARN into its components. |
| <code><a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryResources.publishedSchema">publishedSchema</a></code> | Builds an ARN for the publishedSchema resource. |

---

##### `appliedSchema` <a name="appliedSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.appliedSchema"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.appliedSchema(props: ClouddirectoryAppliedSchemaArnProps)
```

Builds an ARN for the appliedSchema resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.appliedSchema.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryAppliedSchemaArnProps">ClouddirectoryAppliedSchemaArnProps</a>

---

##### `developmentSchema` <a name="developmentSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.developmentSchema"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.developmentSchema(props: ClouddirectoryDevelopmentSchemaArnProps)
```

Builds an ARN for the developmentSchema resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.developmentSchema.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDevelopmentSchemaArnProps">ClouddirectoryDevelopmentSchemaArnProps</a>

---

##### `directory` <a name="directory" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.directory"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.directory(props: ClouddirectoryDirectoryArnProps)
```

Builds an ARN for the directory resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.directory.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryDirectoryArnProps">ClouddirectoryDirectoryArnProps</a>

---

##### `isValidAppliedSchemaArn` <a name="isValidAppliedSchemaArn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidAppliedSchemaArn"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.isValidAppliedSchemaArn(arn: string)
```

Validates whether a string is a valid ARN for the appliedSchema resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidAppliedSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDevelopmentSchemaArn` <a name="isValidDevelopmentSchemaArn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidDevelopmentSchemaArn"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.isValidDevelopmentSchemaArn(arn: string)
```

Validates whether a string is a valid ARN for the developmentSchema resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidDevelopmentSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDirectoryArn` <a name="isValidDirectoryArn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidDirectoryArn"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.isValidDirectoryArn(arn: string)
```

Validates whether a string is a valid ARN for the directory resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidDirectoryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPublishedSchemaArn` <a name="isValidPublishedSchemaArn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidPublishedSchemaArn"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.isValidPublishedSchemaArn(arn: string)
```

Validates whether a string is a valid ARN for the publishedSchema resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.isValidPublishedSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppliedSchemaArn` <a name="parseAppliedSchemaArn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parseAppliedSchemaArn"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.parseAppliedSchemaArn(arn: string)
```

Parses a appliedSchema ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parseAppliedSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDevelopmentSchemaArn` <a name="parseDevelopmentSchemaArn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parseDevelopmentSchemaArn"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.parseDevelopmentSchemaArn(arn: string)
```

Parses a developmentSchema ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parseDevelopmentSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDirectoryArn` <a name="parseDirectoryArn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parseDirectoryArn"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.parseDirectoryArn(arn: string)
```

Parses a directory ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parseDirectoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePublishedSchemaArn` <a name="parsePublishedSchemaArn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parsePublishedSchemaArn"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.parsePublishedSchemaArn(arn: string)
```

Parses a publishedSchema ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.parsePublishedSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `publishedSchema` <a name="publishedSchema" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.publishedSchema"></a>

```typescript
import { clouddirectory } from '@cdk_utils/iam'

clouddirectory.ClouddirectoryResources.publishedSchema(props: ClouddirectoryPublishedSchemaArnProps)
```

Builds an ARN for the publishedSchema resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.clouddirectory.ClouddirectoryResources.publishedSchema.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.clouddirectory.ClouddirectoryPublishedSchemaArnProps">ClouddirectoryPublishedSchemaArnProps</a>

---




