# `glue` Submodule <a name="`glue` Submodule" id="@cdk_utils/iam.glue"></a>


## Structs <a name="Structs" id="Structs"></a>

### GlueBlueprintArnComponents <a name="GlueBlueprintArnComponents" id="@cdk_utils/iam.glue.GlueBlueprintArnComponents"></a>

Parsed components of a blueprint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueBlueprintArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueBlueprintArnComponents: glue.GlueBlueprintArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueBlueprintArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueBlueprintArnComponents.property.blueprintName">blueprintName</a></code> | <code>string</code> | The BlueprintName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueBlueprintArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueBlueprintArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueBlueprintArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `blueprintName`<sup>Required</sup> <a name="blueprintName" id="@cdk_utils/iam.glue.GlueBlueprintArnComponents.property.blueprintName"></a>

```typescript
public readonly blueprintName: string;
```

- *Type:* string

The BlueprintName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueBlueprintArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueBlueprintArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueBlueprintArnProps <a name="GlueBlueprintArnProps" id="@cdk_utils/iam.glue.GlueBlueprintArnProps"></a>

Properties for building a blueprint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueBlueprintArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueBlueprintArnProps: glue.GlueBlueprintArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueBlueprintArnProps.property.blueprintName">blueprintName</a></code> | <code>string</code> | The BlueprintName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueBlueprintArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueBlueprintArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueBlueprintArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `blueprintName`<sup>Required</sup> <a name="blueprintName" id="@cdk_utils/iam.glue.GlueBlueprintArnProps.property.blueprintName"></a>

```typescript
public readonly blueprintName: string;
```

- *Type:* string

The BlueprintName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueBlueprintArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueBlueprintArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueBlueprintArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueCatalogArnComponents <a name="GlueCatalogArnComponents" id="@cdk_utils/iam.glue.GlueCatalogArnComponents"></a>

Parsed components of a catalog ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueCatalogArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueCatalogArnComponents: glue.GlueCatalogArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueCatalogArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueCatalogArnComponents.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueCatalogArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueCatalogArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueCatalogArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.glue.GlueCatalogArnComponents.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueCatalogArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueCatalogArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueCatalogArnProps <a name="GlueCatalogArnProps" id="@cdk_utils/iam.glue.GlueCatalogArnProps"></a>

Properties for building a catalog ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueCatalogArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueCatalogArnProps: glue.GlueCatalogArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueCatalogArnProps.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueCatalogArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueCatalogArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueCatalogArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.glue.GlueCatalogArnProps.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueCatalogArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueCatalogArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueCatalogArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueCompletionArnComponents <a name="GlueCompletionArnComponents" id="@cdk_utils/iam.glue.GlueCompletionArnComponents"></a>

Parsed components of a completion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueCompletionArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueCompletionArnComponents: glue.GlueCompletionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueCompletionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueCompletionArnComponents.property.completionId">completionId</a></code> | <code>string</code> | The CompletionId component. |
| <code><a href="#@cdk_utils/iam.glue.GlueCompletionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueCompletionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueCompletionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `completionId`<sup>Required</sup> <a name="completionId" id="@cdk_utils/iam.glue.GlueCompletionArnComponents.property.completionId"></a>

```typescript
public readonly completionId: string;
```

- *Type:* string

The CompletionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueCompletionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueCompletionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueCompletionArnProps <a name="GlueCompletionArnProps" id="@cdk_utils/iam.glue.GlueCompletionArnProps"></a>

Properties for building a completion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueCompletionArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueCompletionArnProps: glue.GlueCompletionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueCompletionArnProps.property.completionId">completionId</a></code> | <code>string</code> | The CompletionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueCompletionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueCompletionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueCompletionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `completionId`<sup>Required</sup> <a name="completionId" id="@cdk_utils/iam.glue.GlueCompletionArnProps.property.completionId"></a>

```typescript
public readonly completionId: string;
```

- *Type:* string

The CompletionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueCompletionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueCompletionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueCompletionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueConnectionArnComponents <a name="GlueConnectionArnComponents" id="@cdk_utils/iam.glue.GlueConnectionArnComponents"></a>

Parsed components of a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueConnectionArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueConnectionArnComponents: glue.GlueConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionArnComponents.property.connectionName">connectionName</a></code> | <code>string</code> | The ConnectionName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdk_utils/iam.glue.GlueConnectionArnComponents.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The ConnectionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueConnectionArnProps <a name="GlueConnectionArnProps" id="@cdk_utils/iam.glue.GlueConnectionArnProps"></a>

Properties for building a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueConnectionArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueConnectionArnProps: glue.GlueConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionArnProps.property.connectionName">connectionName</a></code> | <code>string</code> | The ConnectionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdk_utils/iam.glue.GlueConnectionArnProps.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The ConnectionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueConnectionTypeArnComponents <a name="GlueConnectionTypeArnComponents" id="@cdk_utils/iam.glue.GlueConnectionTypeArnComponents"></a>

Parsed components of a connectionType ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueConnectionTypeArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueConnectionTypeArnComponents: glue.GlueConnectionTypeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionTypeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionTypeArnComponents.property.connectionTypeName">connectionTypeName</a></code> | <code>string</code> | The ConnectionTypeName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionTypeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionTypeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueConnectionTypeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionTypeName`<sup>Required</sup> <a name="connectionTypeName" id="@cdk_utils/iam.glue.GlueConnectionTypeArnComponents.property.connectionTypeName"></a>

```typescript
public readonly connectionTypeName: string;
```

- *Type:* string

The ConnectionTypeName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueConnectionTypeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueConnectionTypeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueConnectionTypeArnProps <a name="GlueConnectionTypeArnProps" id="@cdk_utils/iam.glue.GlueConnectionTypeArnProps"></a>

Properties for building a connectionType ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueConnectionTypeArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueConnectionTypeArnProps: glue.GlueConnectionTypeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionTypeArnProps.property.connectionTypeName">connectionTypeName</a></code> | <code>string</code> | The ConnectionTypeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionTypeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionTypeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueConnectionTypeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionTypeName`<sup>Required</sup> <a name="connectionTypeName" id="@cdk_utils/iam.glue.GlueConnectionTypeArnProps.property.connectionTypeName"></a>

```typescript
public readonly connectionTypeName: string;
```

- *Type:* string

The ConnectionTypeName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueConnectionTypeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueConnectionTypeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueConnectionTypeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueCrawlerArnComponents <a name="GlueCrawlerArnComponents" id="@cdk_utils/iam.glue.GlueCrawlerArnComponents"></a>

Parsed components of a crawler ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueCrawlerArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueCrawlerArnComponents: glue.GlueCrawlerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueCrawlerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueCrawlerArnComponents.property.crawlerName">crawlerName</a></code> | <code>string</code> | The CrawlerName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueCrawlerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueCrawlerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueCrawlerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `crawlerName`<sup>Required</sup> <a name="crawlerName" id="@cdk_utils/iam.glue.GlueCrawlerArnComponents.property.crawlerName"></a>

```typescript
public readonly crawlerName: string;
```

- *Type:* string

The CrawlerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueCrawlerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueCrawlerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueCrawlerArnProps <a name="GlueCrawlerArnProps" id="@cdk_utils/iam.glue.GlueCrawlerArnProps"></a>

Properties for building a crawler ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueCrawlerArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueCrawlerArnProps: glue.GlueCrawlerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueCrawlerArnProps.property.crawlerName">crawlerName</a></code> | <code>string</code> | The CrawlerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueCrawlerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueCrawlerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueCrawlerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `crawlerName`<sup>Required</sup> <a name="crawlerName" id="@cdk_utils/iam.glue.GlueCrawlerArnProps.property.crawlerName"></a>

```typescript
public readonly crawlerName: string;
```

- *Type:* string

The CrawlerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueCrawlerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueCrawlerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueCrawlerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueCustomEntityTypeArnComponents <a name="GlueCustomEntityTypeArnComponents" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnComponents"></a>

Parsed components of a customEntityType ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueCustomEntityTypeArnComponents: glue.GlueCustomEntityTypeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueCustomEntityTypeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueCustomEntityTypeArnComponents.property.customEntityTypeId">customEntityTypeId</a></code> | <code>string</code> | The CustomEntityTypeId component. |
| <code><a href="#@cdk_utils/iam.glue.GlueCustomEntityTypeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueCustomEntityTypeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `customEntityTypeId`<sup>Required</sup> <a name="customEntityTypeId" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnComponents.property.customEntityTypeId"></a>

```typescript
public readonly customEntityTypeId: string;
```

- *Type:* string

The CustomEntityTypeId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueCustomEntityTypeArnProps <a name="GlueCustomEntityTypeArnProps" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps"></a>

Properties for building a customEntityType ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueCustomEntityTypeArnProps: glue.GlueCustomEntityTypeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps.property.customEntityTypeId">customEntityTypeId</a></code> | <code>string</code> | The CustomEntityTypeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `customEntityTypeId`<sup>Required</sup> <a name="customEntityTypeId" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps.property.customEntityTypeId"></a>

```typescript
public readonly customEntityTypeId: string;
```

- *Type:* string

The CustomEntityTypeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueDatabaseArnComponents <a name="GlueDatabaseArnComponents" id="@cdk_utils/iam.glue.GlueDatabaseArnComponents"></a>

Parsed components of a database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueDatabaseArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueDatabaseArnComponents: glue.GlueDatabaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueDatabaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueDatabaseArnComponents.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueDatabaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueDatabaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueDatabaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.glue.GlueDatabaseArnComponents.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueDatabaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueDatabaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueDatabaseArnProps <a name="GlueDatabaseArnProps" id="@cdk_utils/iam.glue.GlueDatabaseArnProps"></a>

Properties for building a database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueDatabaseArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueDatabaseArnProps: glue.GlueDatabaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueDatabaseArnProps.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueDatabaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueDatabaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueDatabaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.glue.GlueDatabaseArnProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueDatabaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueDatabaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueDatabaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueDataQualityRulesetArnComponents <a name="GlueDataQualityRulesetArnComponents" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnComponents"></a>

Parsed components of a dataQualityRuleset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueDataQualityRulesetArnComponents: glue.GlueDataQualityRulesetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueDataQualityRulesetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueDataQualityRulesetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueDataQualityRulesetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueDataQualityRulesetArnComponents.property.rulesetName">rulesetName</a></code> | <code>string</code> | The RulesetName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `rulesetName`<sup>Required</sup> <a name="rulesetName" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnComponents.property.rulesetName"></a>

```typescript
public readonly rulesetName: string;
```

- *Type:* string

The RulesetName component.

---

### GlueDataQualityRulesetArnProps <a name="GlueDataQualityRulesetArnProps" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps"></a>

Properties for building a dataQualityRuleset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueDataQualityRulesetArnProps: glue.GlueDataQualityRulesetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps.property.rulesetName">rulesetName</a></code> | <code>string</code> | The RulesetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `rulesetName`<sup>Required</sup> <a name="rulesetName" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps.property.rulesetName"></a>

```typescript
public readonly rulesetName: string;
```

- *Type:* string

The RulesetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueDevendpointArnComponents <a name="GlueDevendpointArnComponents" id="@cdk_utils/iam.glue.GlueDevendpointArnComponents"></a>

Parsed components of a devendpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueDevendpointArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueDevendpointArnComponents: glue.GlueDevendpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueDevendpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueDevendpointArnComponents.property.devEndpointName">devEndpointName</a></code> | <code>string</code> | The DevEndpointName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueDevendpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueDevendpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueDevendpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `devEndpointName`<sup>Required</sup> <a name="devEndpointName" id="@cdk_utils/iam.glue.GlueDevendpointArnComponents.property.devEndpointName"></a>

```typescript
public readonly devEndpointName: string;
```

- *Type:* string

The DevEndpointName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueDevendpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueDevendpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueDevendpointArnProps <a name="GlueDevendpointArnProps" id="@cdk_utils/iam.glue.GlueDevendpointArnProps"></a>

Properties for building a devendpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueDevendpointArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueDevendpointArnProps: glue.GlueDevendpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueDevendpointArnProps.property.devEndpointName">devEndpointName</a></code> | <code>string</code> | The DevEndpointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueDevendpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueDevendpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueDevendpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `devEndpointName`<sup>Required</sup> <a name="devEndpointName" id="@cdk_utils/iam.glue.GlueDevendpointArnProps.property.devEndpointName"></a>

```typescript
public readonly devEndpointName: string;
```

- *Type:* string

The DevEndpointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueDevendpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueDevendpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueDevendpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueIntegrationArnComponents <a name="GlueIntegrationArnComponents" id="@cdk_utils/iam.glue.GlueIntegrationArnComponents"></a>

Parsed components of a integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueIntegrationArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueIntegrationArnComponents: glue.GlueIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationArnComponents.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.glue.GlueIntegrationArnComponents.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueIntegrationArnProps <a name="GlueIntegrationArnProps" id="@cdk_utils/iam.glue.GlueIntegrationArnProps"></a>

Properties for building a integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueIntegrationArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueIntegrationArnProps: glue.GlueIntegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationArnProps.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.glue.GlueIntegrationArnProps.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueIntegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueIntegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueIntegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueIntegrationResourcePropertyArnComponents <a name="GlueIntegrationResourcePropertyArnComponents" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents"></a>

Parsed components of a integrationResourceProperty ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueIntegrationResourcePropertyArnComponents: glue.GlueIntegrationResourcePropertyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.property.resourceType">resourceType</a></code> | <code>string</code> | The ResourceType component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnComponents.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The ResourceType component.

---

### GlueIntegrationResourcePropertyArnProps <a name="GlueIntegrationResourcePropertyArnProps" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps"></a>

Properties for building a integrationResourceProperty ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueIntegrationResourcePropertyArnProps: glue.GlueIntegrationResourcePropertyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.property.resourceType">resourceType</a></code> | <code>string</code> | The ResourceType component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component of the ARN.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The ResourceType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueJobArnComponents <a name="GlueJobArnComponents" id="@cdk_utils/iam.glue.GlueJobArnComponents"></a>

Parsed components of a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueJobArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueJobArnComponents: glue.GlueJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueJobArnComponents.property.jobName">jobName</a></code> | <code>string</code> | The JobName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdk_utils/iam.glue.GlueJobArnComponents.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The JobName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueJobArnProps <a name="GlueJobArnProps" id="@cdk_utils/iam.glue.GlueJobArnProps"></a>

Properties for building a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueJobArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueJobArnProps: glue.GlueJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueJobArnProps.property.jobName">jobName</a></code> | <code>string</code> | The JobName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdk_utils/iam.glue.GlueJobArnProps.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The JobName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueMlTransformArnComponents <a name="GlueMlTransformArnComponents" id="@cdk_utils/iam.glue.GlueMlTransformArnComponents"></a>

Parsed components of a mlTransform ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueMlTransformArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueMlTransformArnComponents: glue.GlueMlTransformArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueMlTransformArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueMlTransformArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueMlTransformArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueMlTransformArnComponents.property.transformId">transformId</a></code> | <code>string</code> | The TransformId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueMlTransformArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueMlTransformArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueMlTransformArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `transformId`<sup>Required</sup> <a name="transformId" id="@cdk_utils/iam.glue.GlueMlTransformArnComponents.property.transformId"></a>

```typescript
public readonly transformId: string;
```

- *Type:* string

The TransformId component.

---

### GlueMlTransformArnProps <a name="GlueMlTransformArnProps" id="@cdk_utils/iam.glue.GlueMlTransformArnProps"></a>

Properties for building a mlTransform ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueMlTransformArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueMlTransformArnProps: glue.GlueMlTransformArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueMlTransformArnProps.property.transformId">transformId</a></code> | <code>string</code> | The TransformId component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueMlTransformArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueMlTransformArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueMlTransformArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `transformId`<sup>Required</sup> <a name="transformId" id="@cdk_utils/iam.glue.GlueMlTransformArnProps.property.transformId"></a>

```typescript
public readonly transformId: string;
```

- *Type:* string

The TransformId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueMlTransformArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueMlTransformArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueMlTransformArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueRegistryArnComponents <a name="GlueRegistryArnComponents" id="@cdk_utils/iam.glue.GlueRegistryArnComponents"></a>

Parsed components of a registry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueRegistryArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueRegistryArnComponents: glue.GlueRegistryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueRegistryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueRegistryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueRegistryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueRegistryArnComponents.property.registryName">registryName</a></code> | <code>string</code> | The RegistryName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueRegistryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueRegistryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueRegistryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdk_utils/iam.glue.GlueRegistryArnComponents.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

The RegistryName component.

---

### GlueRegistryArnProps <a name="GlueRegistryArnProps" id="@cdk_utils/iam.glue.GlueRegistryArnProps"></a>

Properties for building a registry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueRegistryArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueRegistryArnProps: glue.GlueRegistryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueRegistryArnProps.property.registryName">registryName</a></code> | <code>string</code> | The RegistryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueRegistryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueRegistryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueRegistryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdk_utils/iam.glue.GlueRegistryArnProps.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

The RegistryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueRegistryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueRegistryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueRegistryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueRootcatalogArnComponents <a name="GlueRootcatalogArnComponents" id="@cdk_utils/iam.glue.GlueRootcatalogArnComponents"></a>

Parsed components of a rootcatalog ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueRootcatalogArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueRootcatalogArnComponents: glue.GlueRootcatalogArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueRootcatalogArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueRootcatalogArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueRootcatalogArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueRootcatalogArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueRootcatalogArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueRootcatalogArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GlueRootcatalogArnProps <a name="GlueRootcatalogArnProps" id="@cdk_utils/iam.glue.GlueRootcatalogArnProps"></a>

Properties for building a rootcatalog ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueRootcatalogArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueRootcatalogArnProps: glue.GlueRootcatalogArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueRootcatalogArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueRootcatalogArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueRootcatalogArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueRootcatalogArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueRootcatalogArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueRootcatalogArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueSchemaArnComponents <a name="GlueSchemaArnComponents" id="@cdk_utils/iam.glue.GlueSchemaArnComponents"></a>

Parsed components of a schema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueSchemaArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueSchemaArnComponents: glue.GlueSchemaArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueSchemaArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueSchemaArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueSchemaArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueSchemaArnComponents.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueSchemaArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueSchemaArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueSchemaArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.glue.GlueSchemaArnComponents.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component.

---

### GlueSchemaArnProps <a name="GlueSchemaArnProps" id="@cdk_utils/iam.glue.GlueSchemaArnProps"></a>

Properties for building a schema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueSchemaArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueSchemaArnProps: glue.GlueSchemaArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueSchemaArnProps.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueSchemaArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueSchemaArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueSchemaArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.glue.GlueSchemaArnProps.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueSchemaArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueSchemaArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueSchemaArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueSessionArnComponents <a name="GlueSessionArnComponents" id="@cdk_utils/iam.glue.GlueSessionArnComponents"></a>

Parsed components of a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueSessionArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueSessionArnComponents: glue.GlueSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.glue.GlueSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

### GlueSessionArnProps <a name="GlueSessionArnProps" id="@cdk_utils/iam.glue.GlueSessionArnProps"></a>

Properties for building a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueSessionArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueSessionArnProps: glue.GlueSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.glue.GlueSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueTableArnComponents <a name="GlueTableArnComponents" id="@cdk_utils/iam.glue.GlueTableArnComponents"></a>

Parsed components of a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueTableArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueTableArnComponents: glue.GlueTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableArnComponents.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.glue.GlueTableArnComponents.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueTableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.glue.GlueTableArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

### GlueTableArnProps <a name="GlueTableArnProps" id="@cdk_utils/iam.glue.GlueTableArnProps"></a>

Properties for building a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueTableArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueTableArnProps: glue.GlueTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueTableArnProps.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.glue.GlueTableArnProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component of the ARN.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.glue.GlueTableArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueTableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueTableversionArnComponents <a name="GlueTableversionArnComponents" id="@cdk_utils/iam.glue.GlueTableversionArnComponents"></a>

Parsed components of a tableversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueTableversionArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueTableversionArnComponents: glue.GlueTableversionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnComponents.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnComponents.property.tableName">tableName</a></code> | <code>string</code> | The TableName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnComponents.property.tableVersionName">tableVersionName</a></code> | <code>string</code> | The TableVersionName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueTableversionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.glue.GlueTableversionArnComponents.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueTableversionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueTableversionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.glue.GlueTableversionArnComponents.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component.

---

##### `tableVersionName`<sup>Required</sup> <a name="tableVersionName" id="@cdk_utils/iam.glue.GlueTableversionArnComponents.property.tableVersionName"></a>

```typescript
public readonly tableVersionName: string;
```

- *Type:* string

The TableVersionName component.

---

### GlueTableversionArnProps <a name="GlueTableversionArnProps" id="@cdk_utils/iam.glue.GlueTableversionArnProps"></a>

Properties for building a tableversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueTableversionArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueTableversionArnProps: glue.GlueTableversionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnProps.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnProps.property.tableName">tableName</a></code> | <code>string</code> | The TableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnProps.property.tableVersionName">tableVersionName</a></code> | <code>string</code> | The TableVersionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueTableversionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.glue.GlueTableversionArnProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component of the ARN.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdk_utils/iam.glue.GlueTableversionArnProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The TableName component of the ARN.

---

##### `tableVersionName`<sup>Required</sup> <a name="tableVersionName" id="@cdk_utils/iam.glue.GlueTableversionArnProps.property.tableVersionName"></a>

```typescript
public readonly tableVersionName: string;
```

- *Type:* string

The TableVersionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueTableversionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueTableversionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueTableversionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueTriggerArnComponents <a name="GlueTriggerArnComponents" id="@cdk_utils/iam.glue.GlueTriggerArnComponents"></a>

Parsed components of a trigger ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueTriggerArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueTriggerArnComponents: glue.GlueTriggerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueTriggerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueTriggerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueTriggerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueTriggerArnComponents.property.triggerName">triggerName</a></code> | <code>string</code> | The TriggerName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueTriggerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueTriggerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueTriggerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdk_utils/iam.glue.GlueTriggerArnComponents.property.triggerName"></a>

```typescript
public readonly triggerName: string;
```

- *Type:* string

The TriggerName component.

---

### GlueTriggerArnProps <a name="GlueTriggerArnProps" id="@cdk_utils/iam.glue.GlueTriggerArnProps"></a>

Properties for building a trigger ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueTriggerArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueTriggerArnProps: glue.GlueTriggerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueTriggerArnProps.property.triggerName">triggerName</a></code> | <code>string</code> | The TriggerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueTriggerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueTriggerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueTriggerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdk_utils/iam.glue.GlueTriggerArnProps.property.triggerName"></a>

```typescript
public readonly triggerName: string;
```

- *Type:* string

The TriggerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueTriggerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueTriggerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueTriggerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueUsageProfileArnComponents <a name="GlueUsageProfileArnComponents" id="@cdk_utils/iam.glue.GlueUsageProfileArnComponents"></a>

Parsed components of a usageProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueUsageProfileArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueUsageProfileArnComponents: glue.GlueUsageProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueUsageProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueUsageProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueUsageProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueUsageProfileArnComponents.property.usageProfileId">usageProfileId</a></code> | <code>string</code> | The UsageProfileId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueUsageProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueUsageProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueUsageProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `usageProfileId`<sup>Required</sup> <a name="usageProfileId" id="@cdk_utils/iam.glue.GlueUsageProfileArnComponents.property.usageProfileId"></a>

```typescript
public readonly usageProfileId: string;
```

- *Type:* string

The UsageProfileId component.

---

### GlueUsageProfileArnProps <a name="GlueUsageProfileArnProps" id="@cdk_utils/iam.glue.GlueUsageProfileArnProps"></a>

Properties for building a usageProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueUsageProfileArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueUsageProfileArnProps: glue.GlueUsageProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueUsageProfileArnProps.property.usageProfileId">usageProfileId</a></code> | <code>string</code> | The UsageProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueUsageProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueUsageProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueUsageProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `usageProfileId`<sup>Required</sup> <a name="usageProfileId" id="@cdk_utils/iam.glue.GlueUsageProfileArnProps.property.usageProfileId"></a>

```typescript
public readonly usageProfileId: string;
```

- *Type:* string

The UsageProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueUsageProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueUsageProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueUsageProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueUserdefinedfunctionArnComponents <a name="GlueUserdefinedfunctionArnComponents" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents"></a>

Parsed components of a userdefinedfunction ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueUserdefinedfunctionArnComponents: glue.GlueUserdefinedfunctionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component. |
| <code><a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.property.userDefinedFunctionName">userDefinedFunctionName</a></code> | <code>string</code> | The UserDefinedFunctionName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userDefinedFunctionName`<sup>Required</sup> <a name="userDefinedFunctionName" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnComponents.property.userDefinedFunctionName"></a>

```typescript
public readonly userDefinedFunctionName: string;
```

- *Type:* string

The UserDefinedFunctionName component.

---

### GlueUserdefinedfunctionArnProps <a name="GlueUserdefinedfunctionArnProps" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps"></a>

Properties for building a userdefinedfunction ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueUserdefinedfunctionArnProps: glue.GlueUserdefinedfunctionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.property.databaseName">databaseName</a></code> | <code>string</code> | The DatabaseName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.property.userDefinedFunctionName">userDefinedFunctionName</a></code> | <code>string</code> | The UserDefinedFunctionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The DatabaseName component of the ARN.

---

##### `userDefinedFunctionName`<sup>Required</sup> <a name="userDefinedFunctionName" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.property.userDefinedFunctionName"></a>

```typescript
public readonly userDefinedFunctionName: string;
```

- *Type:* string

The UserDefinedFunctionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GlueWorkflowArnComponents <a name="GlueWorkflowArnComponents" id="@cdk_utils/iam.glue.GlueWorkflowArnComponents"></a>

Parsed components of a workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueWorkflowArnComponents.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueWorkflowArnComponents: glue.GlueWorkflowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueWorkflowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueWorkflowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueWorkflowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.glue.GlueWorkflowArnComponents.property.workflowName">workflowName</a></code> | <code>string</code> | The WorkflowName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.glue.GlueWorkflowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueWorkflowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.glue.GlueWorkflowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdk_utils/iam.glue.GlueWorkflowArnComponents.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The WorkflowName component.

---

### GlueWorkflowArnProps <a name="GlueWorkflowArnProps" id="@cdk_utils/iam.glue.GlueWorkflowArnProps"></a>

Properties for building a workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.glue.GlueWorkflowArnProps.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

const glueWorkflowArnProps: glue.GlueWorkflowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueWorkflowArnProps.property.workflowName">workflowName</a></code> | <code>string</code> | The WorkflowName component of the ARN. |
| <code><a href="#@cdk_utils/iam.glue.GlueWorkflowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.glue.GlueWorkflowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.glue.GlueWorkflowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdk_utils/iam.glue.GlueWorkflowArnProps.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The WorkflowName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.glue.GlueWorkflowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.glue.GlueWorkflowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.glue.GlueWorkflowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GlueActions <a name="GlueActions" id="@cdk_utils/iam.glue.GlueActions"></a>

IAM action constants for the glue service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.glue.GlueActions.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

new glue.GlueActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.AccessDataQualityRuntimeConfiguration">AccessDataQualityRuntimeConfiguration</a></code> | <code>string</code> | [Read] glue:AccessDataQualityRuntimeConfiguration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetBlueprint">actionGetBlueprint</a></code> | <code>string</code> | [Read] glue:GetBlueprint. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetBlueprintRun">actionGetBlueprintRun</a></code> | <code>string</code> | [Read] glue:GetBlueprintRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetBlueprintRuns">actionGetBlueprintRuns</a></code> | <code>string</code> | [Read] glue:GetBlueprintRuns. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetCatalog">actionGetCatalog</a></code> | <code>string</code> | [Read] glue:GetCatalog. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetCatalogImportStatus">actionGetCatalogImportStatus</a></code> | <code>string</code> | [Read] glue:GetCatalogImportStatus. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetCatalogs">actionGetCatalogs</a></code> | <code>string</code> | [Read] glue:GetCatalogs. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetClassifier">actionGetClassifier</a></code> | <code>string</code> | [Read] glue:GetClassifier. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetClassifiers">actionGetClassifiers</a></code> | <code>string</code> | [Read] glue:GetClassifiers. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetColumnStatisticsForPartition">actionGetColumnStatisticsForPartition</a></code> | <code>string</code> | [Read] glue:GetColumnStatisticsForPartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetColumnStatisticsForTable">actionGetColumnStatisticsForTable</a></code> | <code>string</code> | [Read] glue:GetColumnStatisticsForTable. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetColumnStatisticsTaskRun">actionGetColumnStatisticsTaskRun</a></code> | <code>string</code> | [Read] glue:GetColumnStatisticsTaskRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetColumnStatisticsTaskRuns">actionGetColumnStatisticsTaskRuns</a></code> | <code>string</code> | [Read] glue:GetColumnStatisticsTaskRuns. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetColumnStatisticsTaskSettings">actionGetColumnStatisticsTaskSettings</a></code> | <code>string</code> | [Read] glue:GetColumnStatisticsTaskSettings. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetCompletion">actionGetCompletion</a></code> | <code>string</code> | [Read] glue:GetCompletion. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] glue:GetConnection. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetConnections">actionGetConnections</a></code> | <code>string</code> | [Read] glue:GetConnections. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetCrawler">actionGetCrawler</a></code> | <code>string</code> | [Read] glue:GetCrawler. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetCrawlerMetrics">actionGetCrawlerMetrics</a></code> | <code>string</code> | [Read] glue:GetCrawlerMetrics. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetCrawlers">actionGetCrawlers</a></code> | <code>string</code> | [Read] glue:GetCrawlers. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetCustomEntityType">actionGetCustomEntityType</a></code> | <code>string</code> | [Read] glue:GetCustomEntityType. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDashboardUrl">actionGetDashboardUrl</a></code> | <code>string</code> | [Read] glue:GetDashboardUrl. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDatabase">actionGetDatabase</a></code> | <code>string</code> | [Read] glue:GetDatabase. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDatabases">actionGetDatabases</a></code> | <code>string</code> | [Read] glue:GetDatabases. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDataCatalogEncryptionSettings">actionGetDataCatalogEncryptionSettings</a></code> | <code>string</code> | [Read] glue:GetDataCatalogEncryptionSettings. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDataflowGraph">actionGetDataflowGraph</a></code> | <code>string</code> | [Read] glue:GetDataflowGraph. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDataPreviewStatement">actionGetDataPreviewStatement</a></code> | <code>string</code> | [PermissionManagement] glue:GetDataPreviewStatement. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityModel">actionGetDataQualityModel</a></code> | <code>string</code> | [Read] glue:GetDataQualityModel. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityModelResult">actionGetDataQualityModelResult</a></code> | <code>string</code> | [Read] glue:GetDataQualityModelResult. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityResult">actionGetDataQualityResult</a></code> | <code>string</code> | [Read] glue:GetDataQualityResult. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityRuleRecommendationRun">actionGetDataQualityRuleRecommendationRun</a></code> | <code>string</code> | [Read] glue:GetDataQualityRuleRecommendationRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityRuleset">actionGetDataQualityRuleset</a></code> | <code>string</code> | [Read] glue:GetDataQualityRuleset. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityRulesetEvaluationRun">actionGetDataQualityRulesetEvaluationRun</a></code> | <code>string</code> | [Read] glue:GetDataQualityRulesetEvaluationRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDevEndpoint">actionGetDevEndpoint</a></code> | <code>string</code> | [Read] glue:GetDevEndpoint. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetDevEndpoints">actionGetDevEndpoints</a></code> | <code>string</code> | [Read] glue:GetDevEndpoints. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetEntityRecords">actionGetEntityRecords</a></code> | <code>string</code> | [Read] glue:GetEntityRecords. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [PermissionManagement] glue:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetExecutors">actionGetExecutors</a></code> | <code>string</code> | [PermissionManagement] glue:GetExecutors. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetExecutorsThreads">actionGetExecutorsThreads</a></code> | <code>string</code> | [PermissionManagement] glue:GetExecutorsThreads. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetGeneratedCode">actionGetGeneratedCode</a></code> | <code>string</code> | [Read] glue:GetGeneratedCode. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetGlueIdentityCenterConfiguration">actionGetGlueIdentityCenterConfiguration</a></code> | <code>string</code> | [Read] glue:GetGlueIdentityCenterConfiguration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetIntegrationResourceProperty">actionGetIntegrationResourceProperty</a></code> | <code>string</code> | [Read] glue:GetIntegrationResourceProperty. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetIntegrationTableProperties">actionGetIntegrationTableProperties</a></code> | <code>string</code> | [Read] glue:GetIntegrationTableProperties. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetJob">actionGetJob</a></code> | <code>string</code> | [Read] glue:GetJob. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetJobBookmark">actionGetJobBookmark</a></code> | <code>string</code> | [Read] glue:GetJobBookmark. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetJobRun">actionGetJobRun</a></code> | <code>string</code> | [Read] glue:GetJobRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetJobRuns">actionGetJobRuns</a></code> | <code>string</code> | [Read] glue:GetJobRuns. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetJobs">actionGetJobs</a></code> | <code>string</code> | [Read] glue:GetJobs. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetJobUpgradeAnalysis">actionGetJobUpgradeAnalysis</a></code> | <code>string</code> | [Read] glue:GetJobUpgradeAnalysis. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetLogParsingStatus">actionGetLogParsingStatus</a></code> | <code>string</code> | [PermissionManagement] glue:GetLogParsingStatus. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetMapping">actionGetMapping</a></code> | <code>string</code> | [Read] glue:GetMapping. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetMLTaskRun">actionGetMLTaskRun</a></code> | <code>string</code> | [Read] glue:GetMLTaskRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetMLTaskRuns">actionGetMLTaskRuns</a></code> | <code>string</code> | [List] glue:GetMLTaskRuns. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetMLTransform">actionGetMLTransform</a></code> | <code>string</code> | [Read] glue:GetMLTransform. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetMLTransforms">actionGetMLTransforms</a></code> | <code>string</code> | [List] glue:GetMLTransforms. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetNotebookInstanceStatus">actionGetNotebookInstanceStatus</a></code> | <code>string</code> | [PermissionManagement] glue:GetNotebookInstanceStatus. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetPartition">actionGetPartition</a></code> | <code>string</code> | [Read] glue:GetPartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetPartitionIndexes">actionGetPartitionIndexes</a></code> | <code>string</code> | [Read] glue:GetPartitionIndexes. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetPartitions">actionGetPartitions</a></code> | <code>string</code> | [Read] glue:GetPartitions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetPlan">actionGetPlan</a></code> | <code>string</code> | [Read] glue:GetPlan. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetQueries">actionGetQueries</a></code> | <code>string</code> | [PermissionManagement] glue:GetQueries. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetQuery">actionGetQuery</a></code> | <code>string</code> | [PermissionManagement] glue:GetQuery. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetRecipeAction">actionGetRecipeAction</a></code> | <code>string</code> | [PermissionManagement] glue:GetRecipeAction. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetRegistry">actionGetRegistry</a></code> | <code>string</code> | [Read] glue:GetRegistry. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetResourcePolicies">actionGetResourcePolicies</a></code> | <code>string</code> | [Read] glue:GetResourcePolicies. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] glue:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetSchema">actionGetSchema</a></code> | <code>string</code> | [Read] glue:GetSchema. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetSchemaByDefinition">actionGetSchemaByDefinition</a></code> | <code>string</code> | [Read] glue:GetSchemaByDefinition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetSchemaVersion">actionGetSchemaVersion</a></code> | <code>string</code> | [Read] glue:GetSchemaVersion. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetSchemaVersionsDiff">actionGetSchemaVersionsDiff</a></code> | <code>string</code> | [Read] glue:GetSchemaVersionsDiff. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetSecurityConfiguration">actionGetSecurityConfiguration</a></code> | <code>string</code> | [Read] glue:GetSecurityConfiguration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetSecurityConfigurations">actionGetSecurityConfigurations</a></code> | <code>string</code> | [Read] glue:GetSecurityConfigurations. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] glue:GetSession. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetSessionEndpoint">actionGetSessionEndpoint</a></code> | <code>string</code> | [Read] glue:GetSessionEndpoint. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetStage">actionGetStage</a></code> | <code>string</code> | [PermissionManagement] glue:GetStage. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetStageAttempt">actionGetStageAttempt</a></code> | <code>string</code> | [PermissionManagement] glue:GetStageAttempt. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetStageAttemptTaskList">actionGetStageAttemptTaskList</a></code> | <code>string</code> | [PermissionManagement] glue:GetStageAttemptTaskList. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetStageAttemptTaskSummary">actionGetStageAttemptTaskSummary</a></code> | <code>string</code> | [PermissionManagement] glue:GetStageAttemptTaskSummary. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetStageFiles">actionGetStageFiles</a></code> | <code>string</code> | [PermissionManagement] glue:GetStageFiles. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetStages">actionGetStages</a></code> | <code>string</code> | [PermissionManagement] glue:GetStages. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetStatement">actionGetStatement</a></code> | <code>string</code> | [Read] glue:GetStatement. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetStorage">actionGetStorage</a></code> | <code>string</code> | [PermissionManagement] glue:GetStorage. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetStorageUnit">actionGetStorageUnit</a></code> | <code>string</code> | [PermissionManagement] glue:GetStorageUnit. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetTable">actionGetTable</a></code> | <code>string</code> | [Read] glue:GetTable. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetTableOptimizer">actionGetTableOptimizer</a></code> | <code>string</code> | [Read] glue:GetTableOptimizer. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetTables">actionGetTables</a></code> | <code>string</code> | [Read] glue:GetTables. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetTableVersion">actionGetTableVersion</a></code> | <code>string</code> | [Read] glue:GetTableVersion. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetTableVersions">actionGetTableVersions</a></code> | <code>string</code> | [Read] glue:GetTableVersions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetTags">actionGetTags</a></code> | <code>string</code> | [Read] glue:GetTags. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetTrigger">actionGetTrigger</a></code> | <code>string</code> | [Read] glue:GetTrigger. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetTriggers">actionGetTriggers</a></code> | <code>string</code> | [Read] glue:GetTriggers. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetUsageProfile">actionGetUsageProfile</a></code> | <code>string</code> | [Read] glue:GetUsageProfile. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetUserDefinedFunction">actionGetUserDefinedFunction</a></code> | <code>string</code> | [Read] glue:GetUserDefinedFunction. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetUserDefinedFunctions">actionGetUserDefinedFunctions</a></code> | <code>string</code> | [Read] glue:GetUserDefinedFunctions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetWorkflow">actionGetWorkflow</a></code> | <code>string</code> | [Read] glue:GetWorkflow. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetWorkflowRun">actionGetWorkflowRun</a></code> | <code>string</code> | [Read] glue:GetWorkflowRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetWorkflowRunProperties">actionGetWorkflowRunProperties</a></code> | <code>string</code> | [Read] glue:GetWorkflowRunProperties. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.actionGetWorkflowRuns">actionGetWorkflowRuns</a></code> | <code>string</code> | [Read] glue:GetWorkflowRuns. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.AuthorizeInboundIntegration">AuthorizeInboundIntegration</a></code> | <code>string</code> | [Write] glue:AuthorizeInboundIntegration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchCreatePartition">BatchCreatePartition</a></code> | <code>string</code> | [Write] glue:BatchCreatePartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchDeleteConnection">BatchDeleteConnection</a></code> | <code>string</code> | [Write] glue:BatchDeleteConnection. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchDeletePartition">BatchDeletePartition</a></code> | <code>string</code> | [Write] glue:BatchDeletePartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchDeleteTable">BatchDeleteTable</a></code> | <code>string</code> | [Write] glue:BatchDeleteTable. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchDeleteTableVersion">BatchDeleteTableVersion</a></code> | <code>string</code> | [Write] glue:BatchDeleteTableVersion. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchGetBlueprints">BatchGetBlueprints</a></code> | <code>string</code> | [Read] glue:BatchGetBlueprints. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchGetCrawlers">BatchGetCrawlers</a></code> | <code>string</code> | [Read] glue:BatchGetCrawlers. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchGetCustomEntityTypes">BatchGetCustomEntityTypes</a></code> | <code>string</code> | [Read] glue:BatchGetCustomEntityTypes. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchGetDevEndpoints">BatchGetDevEndpoints</a></code> | <code>string</code> | [Read] glue:BatchGetDevEndpoints. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchGetJobs">BatchGetJobs</a></code> | <code>string</code> | [Read] glue:BatchGetJobs. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchGetPartition">BatchGetPartition</a></code> | <code>string</code> | [Read] glue:BatchGetPartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchGetStageFiles">BatchGetStageFiles</a></code> | <code>string</code> | [PermissionManagement] glue:BatchGetStageFiles. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchGetTableOptimizer">BatchGetTableOptimizer</a></code> | <code>string</code> | [Read] glue:BatchGetTableOptimizer. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchGetTriggers">BatchGetTriggers</a></code> | <code>string</code> | [Read] glue:BatchGetTriggers. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchGetWorkflows">BatchGetWorkflows</a></code> | <code>string</code> | [Read] glue:BatchGetWorkflows. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchStopJobRun">BatchStopJobRun</a></code> | <code>string</code> | [Write] glue:BatchStopJobRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.BatchUpdatePartition">BatchUpdatePartition</a></code> | <code>string</code> | [Write] glue:BatchUpdatePartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CancelDataQualityRuleRecommendationRun">CancelDataQualityRuleRecommendationRun</a></code> | <code>string</code> | [Write] glue:CancelDataQualityRuleRecommendationRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CancelDataQualityRulesetEvaluationRun">CancelDataQualityRulesetEvaluationRun</a></code> | <code>string</code> | [Write] glue:CancelDataQualityRulesetEvaluationRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CancelMLTaskRun">CancelMLTaskRun</a></code> | <code>string</code> | [Write] glue:CancelMLTaskRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CancelStatement">CancelStatement</a></code> | <code>string</code> | [Write] glue:CancelStatement. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CheckSchemaVersionValidity">CheckSchemaVersionValidity</a></code> | <code>string</code> | [Read] glue:CheckSchemaVersionValidity. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateBlueprint">CreateBlueprint</a></code> | <code>string</code> | [Write] glue:CreateBlueprint. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateCatalog">CreateCatalog</a></code> | <code>string</code> | [Write] glue:CreateCatalog. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateClassifier">CreateClassifier</a></code> | <code>string</code> | [Write] glue:CreateClassifier. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateColumnStatisticsTaskSettings">CreateColumnStatisticsTaskSettings</a></code> | <code>string</code> | [Write] glue:CreateColumnStatisticsTaskSettings. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] glue:CreateConnection. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateCrawler">CreateCrawler</a></code> | <code>string</code> | [Write] glue:CreateCrawler. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateCustomEntityType">CreateCustomEntityType</a></code> | <code>string</code> | [Write] glue:CreateCustomEntityType. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateDatabase">CreateDatabase</a></code> | <code>string</code> | [Write] glue:CreateDatabase. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateDataQualityRuleset">CreateDataQualityRuleset</a></code> | <code>string</code> | [Write] glue:CreateDataQualityRuleset. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateDevEndpoint">CreateDevEndpoint</a></code> | <code>string</code> | [Write] glue:CreateDevEndpoint. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateGlueIdentityCenterConfiguration">CreateGlueIdentityCenterConfiguration</a></code> | <code>string</code> | [Write] glue:CreateGlueIdentityCenterConfiguration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateInboundIntegration">CreateInboundIntegration</a></code> | <code>string</code> | [Write] glue:CreateInboundIntegration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateIntegration">CreateIntegration</a></code> | <code>string</code> | [Write] glue:CreateIntegration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateIntegrationResourceProperty">CreateIntegrationResourceProperty</a></code> | <code>string</code> | [Write] glue:CreateIntegrationResourceProperty. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateIntegrationTableProperties">CreateIntegrationTableProperties</a></code> | <code>string</code> | [Write] glue:CreateIntegrationTableProperties. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateJob">CreateJob</a></code> | <code>string</code> | [Write] glue:CreateJob. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateMLTransform">CreateMLTransform</a></code> | <code>string</code> | [Write] glue:CreateMLTransform. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreatePartition">CreatePartition</a></code> | <code>string</code> | [Write] glue:CreatePartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreatePartitionIndex">CreatePartitionIndex</a></code> | <code>string</code> | [Write] glue:CreatePartitionIndex. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateRegistry">CreateRegistry</a></code> | <code>string</code> | [Write] glue:CreateRegistry. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateSchema">CreateSchema</a></code> | <code>string</code> | [Write] glue:CreateSchema. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateScript">CreateScript</a></code> | <code>string</code> | [Write] glue:CreateScript. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateSecurityConfiguration">CreateSecurityConfiguration</a></code> | <code>string</code> | [Write] glue:CreateSecurityConfiguration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateSession">CreateSession</a></code> | <code>string</code> | [Write] glue:CreateSession. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateTable">CreateTable</a></code> | <code>string</code> | [Write] glue:CreateTable. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateTableOptimizer">CreateTableOptimizer</a></code> | <code>string</code> | [Write] glue:CreateTableOptimizer. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateTrigger">CreateTrigger</a></code> | <code>string</code> | [Write] glue:CreateTrigger. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateUsageProfile">CreateUsageProfile</a></code> | <code>string</code> | [Write] glue:CreateUsageProfile. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateUserDefinedFunction">CreateUserDefinedFunction</a></code> | <code>string</code> | [Write] glue:CreateUserDefinedFunction. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string</code> | [Write] glue:CreateWorkflow. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteBlueprint">DeleteBlueprint</a></code> | <code>string</code> | [Write] glue:DeleteBlueprint. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteCatalog">DeleteCatalog</a></code> | <code>string</code> | [Write] glue:DeleteCatalog. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteClassifier">DeleteClassifier</a></code> | <code>string</code> | [Write] glue:DeleteClassifier. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteColumnStatisticsForPartition">DeleteColumnStatisticsForPartition</a></code> | <code>string</code> | [Write] glue:DeleteColumnStatisticsForPartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteColumnStatisticsForTable">DeleteColumnStatisticsForTable</a></code> | <code>string</code> | [Write] glue:DeleteColumnStatisticsForTable. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteColumnStatisticsTaskSettings">DeleteColumnStatisticsTaskSettings</a></code> | <code>string</code> | [Write] glue:DeleteColumnStatisticsTaskSettings. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] glue:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteConnectionType">DeleteConnectionType</a></code> | <code>string</code> | [Write] glue:DeleteConnectionType. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteCrawler">DeleteCrawler</a></code> | <code>string</code> | [Write] glue:DeleteCrawler. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteCustomEntityType">DeleteCustomEntityType</a></code> | <code>string</code> | [Write] glue:DeleteCustomEntityType. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteDatabase">DeleteDatabase</a></code> | <code>string</code> | [Write] glue:DeleteDatabase. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteDataQualityRuleset">DeleteDataQualityRuleset</a></code> | <code>string</code> | [Write] glue:DeleteDataQualityRuleset. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteDevEndpoint">DeleteDevEndpoint</a></code> | <code>string</code> | [Write] glue:DeleteDevEndpoint. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteGlueIdentityCenterConfiguration">DeleteGlueIdentityCenterConfiguration</a></code> | <code>string</code> | [Write] glue:DeleteGlueIdentityCenterConfiguration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] glue:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteIntegrationResourceProperty">DeleteIntegrationResourceProperty</a></code> | <code>string</code> | [Write] glue:DeleteIntegrationResourceProperty. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteIntegrationTableProperties">DeleteIntegrationTableProperties</a></code> | <code>string</code> | [Write] glue:DeleteIntegrationTableProperties. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteJob">DeleteJob</a></code> | <code>string</code> | [Write] glue:DeleteJob. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteMLTransform">DeleteMLTransform</a></code> | <code>string</code> | [Write] glue:DeleteMLTransform. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeletePartition">DeletePartition</a></code> | <code>string</code> | [Write] glue:DeletePartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeletePartitionIndex">DeletePartitionIndex</a></code> | <code>string</code> | [Write] glue:DeletePartitionIndex. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteRegistry">DeleteRegistry</a></code> | <code>string</code> | [Write] glue:DeleteRegistry. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] glue:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteSchema">DeleteSchema</a></code> | <code>string</code> | [Write] glue:DeleteSchema. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteSchemaVersions">DeleteSchemaVersions</a></code> | <code>string</code> | [Write] glue:DeleteSchemaVersions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteSecurityConfiguration">DeleteSecurityConfiguration</a></code> | <code>string</code> | [Write] glue:DeleteSecurityConfiguration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteSession">DeleteSession</a></code> | <code>string</code> | [Write] glue:DeleteSession. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteTable">DeleteTable</a></code> | <code>string</code> | [Write] glue:DeleteTable. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteTableOptimizer">DeleteTableOptimizer</a></code> | <code>string</code> | [Write] glue:DeleteTableOptimizer. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteTableVersion">DeleteTableVersion</a></code> | <code>string</code> | [Write] glue:DeleteTableVersion. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteTrigger">DeleteTrigger</a></code> | <code>string</code> | [Write] glue:DeleteTrigger. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteUsageProfile">DeleteUsageProfile</a></code> | <code>string</code> | [Write] glue:DeleteUsageProfile. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteUserDefinedFunction">DeleteUserDefinedFunction</a></code> | <code>string</code> | [Write] glue:DeleteUserDefinedFunction. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string</code> | [Write] glue:DeleteWorkflow. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DeregisterDataPreview">DeregisterDataPreview</a></code> | <code>string</code> | [PermissionManagement] glue:DeregisterDataPreview. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DescribeConnectionType">DescribeConnectionType</a></code> | <code>string</code> | [PermissionManagement] glue:DescribeConnectionType. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DescribeEntity">DescribeEntity</a></code> | <code>string</code> | [PermissionManagement] glue:DescribeEntity. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DescribeInboundIntegrations">DescribeInboundIntegrations</a></code> | <code>string</code> | [List] glue:DescribeInboundIntegrations. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.DescribeIntegrations">DescribeIntegrations</a></code> | <code>string</code> | [List] glue:DescribeIntegrations. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.FederateAuthorization">FederateAuthorization</a></code> | <code>string</code> | [Write] glue:FederateAuthorization. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.GlueNotebookAuthorize">GlueNotebookAuthorize</a></code> | <code>string</code> | [PermissionManagement] glue:GlueNotebookAuthorize. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.GlueNotebookRefreshCredentials">GlueNotebookRefreshCredentials</a></code> | <code>string</code> | [PermissionManagement] glue:GlueNotebookRefreshCredentials. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ImportCatalogToGlue">ImportCatalogToGlue</a></code> | <code>string</code> | [Write] glue:ImportCatalogToGlue. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListBlueprints">ListBlueprints</a></code> | <code>string</code> | [List] glue:ListBlueprints. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListColumnStatisticsTaskRuns">ListColumnStatisticsTaskRuns</a></code> | <code>string</code> | [Read] glue:ListColumnStatisticsTaskRuns. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListConnectionTypes">ListConnectionTypes</a></code> | <code>string</code> | [PermissionManagement] glue:ListConnectionTypes. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListCrawlers">ListCrawlers</a></code> | <code>string</code> | [List] glue:ListCrawlers. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListCrawls">ListCrawls</a></code> | <code>string</code> | [List] glue:ListCrawls. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListCustomEntityTypes">ListCustomEntityTypes</a></code> | <code>string</code> | [List] glue:ListCustomEntityTypes. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListDataQualityResults">ListDataQualityResults</a></code> | <code>string</code> | [List] glue:ListDataQualityResults. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListDataQualityRuleRecommendationRuns">ListDataQualityRuleRecommendationRuns</a></code> | <code>string</code> | [List] glue:ListDataQualityRuleRecommendationRuns. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListDataQualityRulesetEvaluationRuns">ListDataQualityRulesetEvaluationRuns</a></code> | <code>string</code> | [List] glue:ListDataQualityRulesetEvaluationRuns. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListDataQualityRulesets">ListDataQualityRulesets</a></code> | <code>string</code> | [List] glue:ListDataQualityRulesets. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListDevEndpoints">ListDevEndpoints</a></code> | <code>string</code> | [List] glue:ListDevEndpoints. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListEntities">ListEntities</a></code> | <code>string</code> | [PermissionManagement] glue:ListEntities. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListIntegrationResourceProperties">ListIntegrationResourceProperties</a></code> | <code>string</code> | [List] glue:ListIntegrationResourceProperties. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] glue:ListJobs. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListJobUpgradeAnalyses">ListJobUpgradeAnalyses</a></code> | <code>string</code> | [List] glue:ListJobUpgradeAnalyses. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListMLTransforms">ListMLTransforms</a></code> | <code>string</code> | [List] glue:ListMLTransforms. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListRegistries">ListRegistries</a></code> | <code>string</code> | [List] glue:ListRegistries. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListSchemas">ListSchemas</a></code> | <code>string</code> | [List] glue:ListSchemas. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListSchemaVersions">ListSchemaVersions</a></code> | <code>string</code> | [List] glue:ListSchemaVersions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [List] glue:ListSessions. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListStatements">ListStatements</a></code> | <code>string</code> | [List] glue:ListStatements. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListTableOptimizerRuns">ListTableOptimizerRuns</a></code> | <code>string</code> | [List] glue:ListTableOptimizerRuns. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListTriggers">ListTriggers</a></code> | <code>string</code> | [List] glue:ListTriggers. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListUsageProfiles">ListUsageProfiles</a></code> | <code>string</code> | [List] glue:ListUsageProfiles. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ListWorkflows">ListWorkflows</a></code> | <code>string</code> | [List] glue:ListWorkflows. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ManagedConnector">ManagedConnector</a></code> | <code>string</code> | [PermissionManagement] glue:ManagedConnector. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ModifyIntegration">ModifyIntegration</a></code> | <code>string</code> | [Write] glue:ModifyIntegration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.NotifyEvent">NotifyEvent</a></code> | <code>string</code> | [Write] glue:NotifyEvent. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.PassConnection">PassConnection</a></code> | <code>string</code> | [Write] glue:PassConnection. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.PublishDataQuality">PublishDataQuality</a></code> | <code>string</code> | [Write] glue:PublishDataQuality. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.PutDataCatalogEncryptionSettings">PutDataCatalogEncryptionSettings</a></code> | <code>string</code> | [Write] glue:PutDataCatalogEncryptionSettings. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.PutDataQualityProfileAnnotation">PutDataQualityProfileAnnotation</a></code> | <code>string</code> | [Write] glue:PutDataQualityProfileAnnotation. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.PutDataQualityStatisticAnnotation">PutDataQualityStatisticAnnotation</a></code> | <code>string</code> | [Write] glue:PutDataQualityStatisticAnnotation. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] glue:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.PutSchemaVersionMetadata">PutSchemaVersionMetadata</a></code> | <code>string</code> | [Write] glue:PutSchemaVersionMetadata. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.PutWorkflowRunProperties">PutWorkflowRunProperties</a></code> | <code>string</code> | [Write] glue:PutWorkflowRunProperties. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.QuerySchemaVersionMetadata">QuerySchemaVersionMetadata</a></code> | <code>string</code> | [List] glue:QuerySchemaVersionMetadata. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.RefreshOAuth2Tokens">RefreshOAuth2Tokens</a></code> | <code>string</code> | [PermissionManagement] glue:RefreshOAuth2Tokens. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.RegisterConnectionType">RegisterConnectionType</a></code> | <code>string</code> | [Write] glue:RegisterConnectionType. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.RegisterSchemaVersion">RegisterSchemaVersion</a></code> | <code>string</code> | [Write] glue:RegisterSchemaVersion. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.RemoveSchemaVersionMetadata">RemoveSchemaVersionMetadata</a></code> | <code>string</code> | [Write] glue:RemoveSchemaVersionMetadata. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.RenameTable">RenameTable</a></code> | <code>string</code> | [Write] glue:RenameTable. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.RequestLogParsing">RequestLogParsing</a></code> | <code>string</code> | [PermissionManagement] glue:RequestLogParsing. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ResetJobBookmark">ResetJobBookmark</a></code> | <code>string</code> | [Write] glue:ResetJobBookmark. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.ResumeWorkflowRun">ResumeWorkflowRun</a></code> | <code>string</code> | [Write] glue:ResumeWorkflowRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.RunDataPreviewStatement">RunDataPreviewStatement</a></code> | <code>string</code> | [PermissionManagement] glue:RunDataPreviewStatement. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.RunStatement">RunStatement</a></code> | <code>string</code> | [Write] glue:RunStatement. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.SearchTables">SearchTables</a></code> | <code>string</code> | [Read] glue:SearchTables. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.SendFeedback">SendFeedback</a></code> | <code>string</code> | [Write] glue:SendFeedback. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.SendRecipeAction">SendRecipeAction</a></code> | <code>string</code> | [PermissionManagement] glue:SendRecipeAction. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartBlueprintRun">StartBlueprintRun</a></code> | <code>string</code> | [Write] glue:StartBlueprintRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartColumnStatisticsTaskRun">StartColumnStatisticsTaskRun</a></code> | <code>string</code> | [Write] glue:StartColumnStatisticsTaskRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartColumnStatisticsTaskRunSchedule">StartColumnStatisticsTaskRunSchedule</a></code> | <code>string</code> | [Write] glue:StartColumnStatisticsTaskRunSchedule. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartCompletion">StartCompletion</a></code> | <code>string</code> | [Write] glue:StartCompletion. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartCrawler">StartCrawler</a></code> | <code>string</code> | [Write] glue:StartCrawler. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartCrawlerSchedule">StartCrawlerSchedule</a></code> | <code>string</code> | [Write] glue:StartCrawlerSchedule. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartDataQualityRuleRecommendationRun">StartDataQualityRuleRecommendationRun</a></code> | <code>string</code> | [Write] glue:StartDataQualityRuleRecommendationRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartDataQualityRulesetEvaluationRun">StartDataQualityRulesetEvaluationRun</a></code> | <code>string</code> | [Write] glue:StartDataQualityRulesetEvaluationRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartExportLabelsTaskRun">StartExportLabelsTaskRun</a></code> | <code>string</code> | [Write] glue:StartExportLabelsTaskRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartImportLabelsTaskRun">StartImportLabelsTaskRun</a></code> | <code>string</code> | [Write] glue:StartImportLabelsTaskRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartJobRun">StartJobRun</a></code> | <code>string</code> | [Write] glue:StartJobRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartJobUpgradeAnalysis">StartJobUpgradeAnalysis</a></code> | <code>string</code> | [Write] glue:StartJobUpgradeAnalysis. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartMLEvaluationTaskRun">StartMLEvaluationTaskRun</a></code> | <code>string</code> | [Write] glue:StartMLEvaluationTaskRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartMLLabelingSetGenerationTaskRun">StartMLLabelingSetGenerationTaskRun</a></code> | <code>string</code> | [Write] glue:StartMLLabelingSetGenerationTaskRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartNotebook">StartNotebook</a></code> | <code>string</code> | [PermissionManagement] glue:StartNotebook. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartTrigger">StartTrigger</a></code> | <code>string</code> | [Write] glue:StartTrigger. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StartWorkflowRun">StartWorkflowRun</a></code> | <code>string</code> | [Write] glue:StartWorkflowRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StopColumnStatisticsTaskRun">StopColumnStatisticsTaskRun</a></code> | <code>string</code> | [Write] glue:StopColumnStatisticsTaskRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StopColumnStatisticsTaskRunSchedule">StopColumnStatisticsTaskRunSchedule</a></code> | <code>string</code> | [Write] glue:StopColumnStatisticsTaskRunSchedule. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StopCrawler">StopCrawler</a></code> | <code>string</code> | [Write] glue:StopCrawler. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StopCrawlerSchedule">StopCrawlerSchedule</a></code> | <code>string</code> | [Write] glue:StopCrawlerSchedule. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StopJobUpgradeAnalysis">StopJobUpgradeAnalysis</a></code> | <code>string</code> | [Write] glue:StopJobUpgradeAnalysis. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StopSession">StopSession</a></code> | <code>string</code> | [Write] glue:StopSession. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StopTrigger">StopTrigger</a></code> | <code>string</code> | [Write] glue:StopTrigger. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.StopWorkflowRun">StopWorkflowRun</a></code> | <code>string</code> | [Write] glue:StopWorkflowRun. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] glue:TagResource. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.TerminateNotebook">TerminateNotebook</a></code> | <code>string</code> | [PermissionManagement] glue:TerminateNotebook. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.TestConnection">TestConnection</a></code> | <code>string</code> | [PermissionManagement] glue:TestConnection. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] glue:UntagResource. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateBlueprint">UpdateBlueprint</a></code> | <code>string</code> | [Write] glue:UpdateBlueprint. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateCatalog">UpdateCatalog</a></code> | <code>string</code> | [Write] glue:UpdateCatalog. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateClassifier">UpdateClassifier</a></code> | <code>string</code> | [Write] glue:UpdateClassifier. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateColumnStatisticsForPartition">UpdateColumnStatisticsForPartition</a></code> | <code>string</code> | [Write] glue:UpdateColumnStatisticsForPartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateColumnStatisticsForTable">UpdateColumnStatisticsForTable</a></code> | <code>string</code> | [Write] glue:UpdateColumnStatisticsForTable. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateColumnStatisticsTaskSettings">UpdateColumnStatisticsTaskSettings</a></code> | <code>string</code> | [Write] glue:UpdateColumnStatisticsTaskSettings. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateConnection">UpdateConnection</a></code> | <code>string</code> | [Write] glue:UpdateConnection. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateCrawler">UpdateCrawler</a></code> | <code>string</code> | [Write] glue:UpdateCrawler. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateCrawlerSchedule">UpdateCrawlerSchedule</a></code> | <code>string</code> | [Write] glue:UpdateCrawlerSchedule. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateDatabase">UpdateDatabase</a></code> | <code>string</code> | [Write] glue:UpdateDatabase. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateDataQualityRuleset">UpdateDataQualityRuleset</a></code> | <code>string</code> | [Write] glue:UpdateDataQualityRuleset. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateDevEndpoint">UpdateDevEndpoint</a></code> | <code>string</code> | [Write] glue:UpdateDevEndpoint. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateGlueIdentityCenterConfiguration">UpdateGlueIdentityCenterConfiguration</a></code> | <code>string</code> | [Write] glue:UpdateGlueIdentityCenterConfiguration. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateIntegrationResourceProperty">UpdateIntegrationResourceProperty</a></code> | <code>string</code> | [Write] glue:UpdateIntegrationResourceProperty. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateIntegrationTableProperties">UpdateIntegrationTableProperties</a></code> | <code>string</code> | [Write] glue:UpdateIntegrationTableProperties. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateJob">UpdateJob</a></code> | <code>string</code> | [Write] glue:UpdateJob. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateJobFromSourceControl">UpdateJobFromSourceControl</a></code> | <code>string</code> | [Write] glue:UpdateJobFromSourceControl. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateMLTransform">UpdateMLTransform</a></code> | <code>string</code> | [Write] glue:UpdateMLTransform. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdatePartition">UpdatePartition</a></code> | <code>string</code> | [Write] glue:UpdatePartition. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateRegistry">UpdateRegistry</a></code> | <code>string</code> | [Write] glue:UpdateRegistry. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateSchema">UpdateSchema</a></code> | <code>string</code> | [Write] glue:UpdateSchema. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateSourceControlFromJob">UpdateSourceControlFromJob</a></code> | <code>string</code> | [Write] glue:UpdateSourceControlFromJob. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateTable">UpdateTable</a></code> | <code>string</code> | [Write] glue:UpdateTable. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateTableOptimizer">UpdateTableOptimizer</a></code> | <code>string</code> | [Write] glue:UpdateTableOptimizer. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateTrigger">UpdateTrigger</a></code> | <code>string</code> | [Write] glue:UpdateTrigger. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateUsageProfile">UpdateUsageProfile</a></code> | <code>string</code> | [Write] glue:UpdateUsageProfile. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateUserDefinedFunction">UpdateUserDefinedFunction</a></code> | <code>string</code> | [Write] glue:UpdateUserDefinedFunction. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpdateWorkflow">UpdateWorkflow</a></code> | <code>string</code> | [Write] glue:UpdateWorkflow. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UpgradeJob">UpgradeJob</a></code> | <code>string</code> | [Write] glue:UpgradeJob. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UseGlueStudio">UseGlueStudio</a></code> | <code>string</code> | [PermissionManagement] glue:UseGlueStudio. |
| <code><a href="#@cdk_utils/iam.glue.GlueActions.property.UseMLTransforms">UseMLTransforms</a></code> | <code>string</code> | [Write] glue:UseMLTransforms. |

---

##### `AccessDataQualityRuntimeConfiguration`<sup>Required</sup> <a name="AccessDataQualityRuntimeConfiguration" id="@cdk_utils/iam.glue.GlueActions.property.AccessDataQualityRuntimeConfiguration"></a>

```typescript
public readonly AccessDataQualityRuntimeConfiguration: string;
```

- *Type:* string

[Read] glue:AccessDataQualityRuntimeConfiguration.

---

##### `actionGetBlueprint`<sup>Required</sup> <a name="actionGetBlueprint" id="@cdk_utils/iam.glue.GlueActions.property.actionGetBlueprint"></a>

```typescript
public readonly actionGetBlueprint: string;
```

- *Type:* string

[Read] glue:GetBlueprint.

---

##### `actionGetBlueprintRun`<sup>Required</sup> <a name="actionGetBlueprintRun" id="@cdk_utils/iam.glue.GlueActions.property.actionGetBlueprintRun"></a>

```typescript
public readonly actionGetBlueprintRun: string;
```

- *Type:* string

[Read] glue:GetBlueprintRun.

---

##### `actionGetBlueprintRuns`<sup>Required</sup> <a name="actionGetBlueprintRuns" id="@cdk_utils/iam.glue.GlueActions.property.actionGetBlueprintRuns"></a>

```typescript
public readonly actionGetBlueprintRuns: string;
```

- *Type:* string

[Read] glue:GetBlueprintRuns.

---

##### `actionGetCatalog`<sup>Required</sup> <a name="actionGetCatalog" id="@cdk_utils/iam.glue.GlueActions.property.actionGetCatalog"></a>

```typescript
public readonly actionGetCatalog: string;
```

- *Type:* string

[Read] glue:GetCatalog.

---

##### `actionGetCatalogImportStatus`<sup>Required</sup> <a name="actionGetCatalogImportStatus" id="@cdk_utils/iam.glue.GlueActions.property.actionGetCatalogImportStatus"></a>

```typescript
public readonly actionGetCatalogImportStatus: string;
```

- *Type:* string

[Read] glue:GetCatalogImportStatus.

---

##### `actionGetCatalogs`<sup>Required</sup> <a name="actionGetCatalogs" id="@cdk_utils/iam.glue.GlueActions.property.actionGetCatalogs"></a>

```typescript
public readonly actionGetCatalogs: string;
```

- *Type:* string

[Read] glue:GetCatalogs.

---

##### `actionGetClassifier`<sup>Required</sup> <a name="actionGetClassifier" id="@cdk_utils/iam.glue.GlueActions.property.actionGetClassifier"></a>

```typescript
public readonly actionGetClassifier: string;
```

- *Type:* string

[Read] glue:GetClassifier.

---

##### `actionGetClassifiers`<sup>Required</sup> <a name="actionGetClassifiers" id="@cdk_utils/iam.glue.GlueActions.property.actionGetClassifiers"></a>

```typescript
public readonly actionGetClassifiers: string;
```

- *Type:* string

[Read] glue:GetClassifiers.

---

##### `actionGetColumnStatisticsForPartition`<sup>Required</sup> <a name="actionGetColumnStatisticsForPartition" id="@cdk_utils/iam.glue.GlueActions.property.actionGetColumnStatisticsForPartition"></a>

```typescript
public readonly actionGetColumnStatisticsForPartition: string;
```

- *Type:* string

[Read] glue:GetColumnStatisticsForPartition.

---

##### `actionGetColumnStatisticsForTable`<sup>Required</sup> <a name="actionGetColumnStatisticsForTable" id="@cdk_utils/iam.glue.GlueActions.property.actionGetColumnStatisticsForTable"></a>

```typescript
public readonly actionGetColumnStatisticsForTable: string;
```

- *Type:* string

[Read] glue:GetColumnStatisticsForTable.

---

##### `actionGetColumnStatisticsTaskRun`<sup>Required</sup> <a name="actionGetColumnStatisticsTaskRun" id="@cdk_utils/iam.glue.GlueActions.property.actionGetColumnStatisticsTaskRun"></a>

```typescript
public readonly actionGetColumnStatisticsTaskRun: string;
```

- *Type:* string

[Read] glue:GetColumnStatisticsTaskRun.

---

##### `actionGetColumnStatisticsTaskRuns`<sup>Required</sup> <a name="actionGetColumnStatisticsTaskRuns" id="@cdk_utils/iam.glue.GlueActions.property.actionGetColumnStatisticsTaskRuns"></a>

```typescript
public readonly actionGetColumnStatisticsTaskRuns: string;
```

- *Type:* string

[Read] glue:GetColumnStatisticsTaskRuns.

---

##### `actionGetColumnStatisticsTaskSettings`<sup>Required</sup> <a name="actionGetColumnStatisticsTaskSettings" id="@cdk_utils/iam.glue.GlueActions.property.actionGetColumnStatisticsTaskSettings"></a>

```typescript
public readonly actionGetColumnStatisticsTaskSettings: string;
```

- *Type:* string

[Read] glue:GetColumnStatisticsTaskSettings.

---

##### `actionGetCompletion`<sup>Required</sup> <a name="actionGetCompletion" id="@cdk_utils/iam.glue.GlueActions.property.actionGetCompletion"></a>

```typescript
public readonly actionGetCompletion: string;
```

- *Type:* string

[Read] glue:GetCompletion.

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.glue.GlueActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] glue:GetConnection.

---

##### `actionGetConnections`<sup>Required</sup> <a name="actionGetConnections" id="@cdk_utils/iam.glue.GlueActions.property.actionGetConnections"></a>

```typescript
public readonly actionGetConnections: string;
```

- *Type:* string

[Read] glue:GetConnections.

---

##### `actionGetCrawler`<sup>Required</sup> <a name="actionGetCrawler" id="@cdk_utils/iam.glue.GlueActions.property.actionGetCrawler"></a>

```typescript
public readonly actionGetCrawler: string;
```

- *Type:* string

[Read] glue:GetCrawler.

---

##### `actionGetCrawlerMetrics`<sup>Required</sup> <a name="actionGetCrawlerMetrics" id="@cdk_utils/iam.glue.GlueActions.property.actionGetCrawlerMetrics"></a>

```typescript
public readonly actionGetCrawlerMetrics: string;
```

- *Type:* string

[Read] glue:GetCrawlerMetrics.

---

##### `actionGetCrawlers`<sup>Required</sup> <a name="actionGetCrawlers" id="@cdk_utils/iam.glue.GlueActions.property.actionGetCrawlers"></a>

```typescript
public readonly actionGetCrawlers: string;
```

- *Type:* string

[Read] glue:GetCrawlers.

---

##### `actionGetCustomEntityType`<sup>Required</sup> <a name="actionGetCustomEntityType" id="@cdk_utils/iam.glue.GlueActions.property.actionGetCustomEntityType"></a>

```typescript
public readonly actionGetCustomEntityType: string;
```

- *Type:* string

[Read] glue:GetCustomEntityType.

---

##### `actionGetDashboardUrl`<sup>Required</sup> <a name="actionGetDashboardUrl" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDashboardUrl"></a>

```typescript
public readonly actionGetDashboardUrl: string;
```

- *Type:* string

[Read] glue:GetDashboardUrl.

---

##### `actionGetDatabase`<sup>Required</sup> <a name="actionGetDatabase" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDatabase"></a>

```typescript
public readonly actionGetDatabase: string;
```

- *Type:* string

[Read] glue:GetDatabase.

---

##### `actionGetDatabases`<sup>Required</sup> <a name="actionGetDatabases" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDatabases"></a>

```typescript
public readonly actionGetDatabases: string;
```

- *Type:* string

[Read] glue:GetDatabases.

---

##### `actionGetDataCatalogEncryptionSettings`<sup>Required</sup> <a name="actionGetDataCatalogEncryptionSettings" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDataCatalogEncryptionSettings"></a>

```typescript
public readonly actionGetDataCatalogEncryptionSettings: string;
```

- *Type:* string

[Read] glue:GetDataCatalogEncryptionSettings.

---

##### `actionGetDataflowGraph`<sup>Required</sup> <a name="actionGetDataflowGraph" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDataflowGraph"></a>

```typescript
public readonly actionGetDataflowGraph: string;
```

- *Type:* string

[Read] glue:GetDataflowGraph.

---

##### `actionGetDataPreviewStatement`<sup>Required</sup> <a name="actionGetDataPreviewStatement" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDataPreviewStatement"></a>

```typescript
public readonly actionGetDataPreviewStatement: string;
```

- *Type:* string

[PermissionManagement] glue:GetDataPreviewStatement.

---

##### `actionGetDataQualityModel`<sup>Required</sup> <a name="actionGetDataQualityModel" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityModel"></a>

```typescript
public readonly actionGetDataQualityModel: string;
```

- *Type:* string

[Read] glue:GetDataQualityModel.

---

##### `actionGetDataQualityModelResult`<sup>Required</sup> <a name="actionGetDataQualityModelResult" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityModelResult"></a>

```typescript
public readonly actionGetDataQualityModelResult: string;
```

- *Type:* string

[Read] glue:GetDataQualityModelResult.

---

##### `actionGetDataQualityResult`<sup>Required</sup> <a name="actionGetDataQualityResult" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityResult"></a>

```typescript
public readonly actionGetDataQualityResult: string;
```

- *Type:* string

[Read] glue:GetDataQualityResult.

---

##### `actionGetDataQualityRuleRecommendationRun`<sup>Required</sup> <a name="actionGetDataQualityRuleRecommendationRun" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityRuleRecommendationRun"></a>

```typescript
public readonly actionGetDataQualityRuleRecommendationRun: string;
```

- *Type:* string

[Read] glue:GetDataQualityRuleRecommendationRun.

---

##### `actionGetDataQualityRuleset`<sup>Required</sup> <a name="actionGetDataQualityRuleset" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityRuleset"></a>

```typescript
public readonly actionGetDataQualityRuleset: string;
```

- *Type:* string

[Read] glue:GetDataQualityRuleset.

---

##### `actionGetDataQualityRulesetEvaluationRun`<sup>Required</sup> <a name="actionGetDataQualityRulesetEvaluationRun" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDataQualityRulesetEvaluationRun"></a>

```typescript
public readonly actionGetDataQualityRulesetEvaluationRun: string;
```

- *Type:* string

[Read] glue:GetDataQualityRulesetEvaluationRun.

---

##### `actionGetDevEndpoint`<sup>Required</sup> <a name="actionGetDevEndpoint" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDevEndpoint"></a>

```typescript
public readonly actionGetDevEndpoint: string;
```

- *Type:* string

[Read] glue:GetDevEndpoint.

---

##### `actionGetDevEndpoints`<sup>Required</sup> <a name="actionGetDevEndpoints" id="@cdk_utils/iam.glue.GlueActions.property.actionGetDevEndpoints"></a>

```typescript
public readonly actionGetDevEndpoints: string;
```

- *Type:* string

[Read] glue:GetDevEndpoints.

---

##### `actionGetEntityRecords`<sup>Required</sup> <a name="actionGetEntityRecords" id="@cdk_utils/iam.glue.GlueActions.property.actionGetEntityRecords"></a>

```typescript
public readonly actionGetEntityRecords: string;
```

- *Type:* string

[Read] glue:GetEntityRecords.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.glue.GlueActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[PermissionManagement] glue:GetEnvironment.

---

##### `actionGetExecutors`<sup>Required</sup> <a name="actionGetExecutors" id="@cdk_utils/iam.glue.GlueActions.property.actionGetExecutors"></a>

```typescript
public readonly actionGetExecutors: string;
```

- *Type:* string

[PermissionManagement] glue:GetExecutors.

---

##### `actionGetExecutorsThreads`<sup>Required</sup> <a name="actionGetExecutorsThreads" id="@cdk_utils/iam.glue.GlueActions.property.actionGetExecutorsThreads"></a>

```typescript
public readonly actionGetExecutorsThreads: string;
```

- *Type:* string

[PermissionManagement] glue:GetExecutorsThreads.

---

##### `actionGetGeneratedCode`<sup>Required</sup> <a name="actionGetGeneratedCode" id="@cdk_utils/iam.glue.GlueActions.property.actionGetGeneratedCode"></a>

```typescript
public readonly actionGetGeneratedCode: string;
```

- *Type:* string

[Read] glue:GetGeneratedCode.

---

##### `actionGetGlueIdentityCenterConfiguration`<sup>Required</sup> <a name="actionGetGlueIdentityCenterConfiguration" id="@cdk_utils/iam.glue.GlueActions.property.actionGetGlueIdentityCenterConfiguration"></a>

```typescript
public readonly actionGetGlueIdentityCenterConfiguration: string;
```

- *Type:* string

[Read] glue:GetGlueIdentityCenterConfiguration.

---

##### `actionGetIntegrationResourceProperty`<sup>Required</sup> <a name="actionGetIntegrationResourceProperty" id="@cdk_utils/iam.glue.GlueActions.property.actionGetIntegrationResourceProperty"></a>

```typescript
public readonly actionGetIntegrationResourceProperty: string;
```

- *Type:* string

[Read] glue:GetIntegrationResourceProperty.

---

##### `actionGetIntegrationTableProperties`<sup>Required</sup> <a name="actionGetIntegrationTableProperties" id="@cdk_utils/iam.glue.GlueActions.property.actionGetIntegrationTableProperties"></a>

```typescript
public readonly actionGetIntegrationTableProperties: string;
```

- *Type:* string

[Read] glue:GetIntegrationTableProperties.

---

##### `actionGetJob`<sup>Required</sup> <a name="actionGetJob" id="@cdk_utils/iam.glue.GlueActions.property.actionGetJob"></a>

```typescript
public readonly actionGetJob: string;
```

- *Type:* string

[Read] glue:GetJob.

---

##### `actionGetJobBookmark`<sup>Required</sup> <a name="actionGetJobBookmark" id="@cdk_utils/iam.glue.GlueActions.property.actionGetJobBookmark"></a>

```typescript
public readonly actionGetJobBookmark: string;
```

- *Type:* string

[Read] glue:GetJobBookmark.

---

##### `actionGetJobRun`<sup>Required</sup> <a name="actionGetJobRun" id="@cdk_utils/iam.glue.GlueActions.property.actionGetJobRun"></a>

```typescript
public readonly actionGetJobRun: string;
```

- *Type:* string

[Read] glue:GetJobRun.

---

##### `actionGetJobRuns`<sup>Required</sup> <a name="actionGetJobRuns" id="@cdk_utils/iam.glue.GlueActions.property.actionGetJobRuns"></a>

```typescript
public readonly actionGetJobRuns: string;
```

- *Type:* string

[Read] glue:GetJobRuns.

---

##### `actionGetJobs`<sup>Required</sup> <a name="actionGetJobs" id="@cdk_utils/iam.glue.GlueActions.property.actionGetJobs"></a>

```typescript
public readonly actionGetJobs: string;
```

- *Type:* string

[Read] glue:GetJobs.

---

##### `actionGetJobUpgradeAnalysis`<sup>Required</sup> <a name="actionGetJobUpgradeAnalysis" id="@cdk_utils/iam.glue.GlueActions.property.actionGetJobUpgradeAnalysis"></a>

```typescript
public readonly actionGetJobUpgradeAnalysis: string;
```

- *Type:* string

[Read] glue:GetJobUpgradeAnalysis.

---

##### `actionGetLogParsingStatus`<sup>Required</sup> <a name="actionGetLogParsingStatus" id="@cdk_utils/iam.glue.GlueActions.property.actionGetLogParsingStatus"></a>

```typescript
public readonly actionGetLogParsingStatus: string;
```

- *Type:* string

[PermissionManagement] glue:GetLogParsingStatus.

---

##### `actionGetMapping`<sup>Required</sup> <a name="actionGetMapping" id="@cdk_utils/iam.glue.GlueActions.property.actionGetMapping"></a>

```typescript
public readonly actionGetMapping: string;
```

- *Type:* string

[Read] glue:GetMapping.

---

##### `actionGetMLTaskRun`<sup>Required</sup> <a name="actionGetMLTaskRun" id="@cdk_utils/iam.glue.GlueActions.property.actionGetMLTaskRun"></a>

```typescript
public readonly actionGetMLTaskRun: string;
```

- *Type:* string

[Read] glue:GetMLTaskRun.

---

##### `actionGetMLTaskRuns`<sup>Required</sup> <a name="actionGetMLTaskRuns" id="@cdk_utils/iam.glue.GlueActions.property.actionGetMLTaskRuns"></a>

```typescript
public readonly actionGetMLTaskRuns: string;
```

- *Type:* string

[List] glue:GetMLTaskRuns.

---

##### `actionGetMLTransform`<sup>Required</sup> <a name="actionGetMLTransform" id="@cdk_utils/iam.glue.GlueActions.property.actionGetMLTransform"></a>

```typescript
public readonly actionGetMLTransform: string;
```

- *Type:* string

[Read] glue:GetMLTransform.

---

##### `actionGetMLTransforms`<sup>Required</sup> <a name="actionGetMLTransforms" id="@cdk_utils/iam.glue.GlueActions.property.actionGetMLTransforms"></a>

```typescript
public readonly actionGetMLTransforms: string;
```

- *Type:* string

[List] glue:GetMLTransforms.

---

##### `actionGetNotebookInstanceStatus`<sup>Required</sup> <a name="actionGetNotebookInstanceStatus" id="@cdk_utils/iam.glue.GlueActions.property.actionGetNotebookInstanceStatus"></a>

```typescript
public readonly actionGetNotebookInstanceStatus: string;
```

- *Type:* string

[PermissionManagement] glue:GetNotebookInstanceStatus.

---

##### `actionGetPartition`<sup>Required</sup> <a name="actionGetPartition" id="@cdk_utils/iam.glue.GlueActions.property.actionGetPartition"></a>

```typescript
public readonly actionGetPartition: string;
```

- *Type:* string

[Read] glue:GetPartition.

---

##### `actionGetPartitionIndexes`<sup>Required</sup> <a name="actionGetPartitionIndexes" id="@cdk_utils/iam.glue.GlueActions.property.actionGetPartitionIndexes"></a>

```typescript
public readonly actionGetPartitionIndexes: string;
```

- *Type:* string

[Read] glue:GetPartitionIndexes.

---

##### `actionGetPartitions`<sup>Required</sup> <a name="actionGetPartitions" id="@cdk_utils/iam.glue.GlueActions.property.actionGetPartitions"></a>

```typescript
public readonly actionGetPartitions: string;
```

- *Type:* string

[Read] glue:GetPartitions.

---

##### `actionGetPlan`<sup>Required</sup> <a name="actionGetPlan" id="@cdk_utils/iam.glue.GlueActions.property.actionGetPlan"></a>

```typescript
public readonly actionGetPlan: string;
```

- *Type:* string

[Read] glue:GetPlan.

---

##### `actionGetQueries`<sup>Required</sup> <a name="actionGetQueries" id="@cdk_utils/iam.glue.GlueActions.property.actionGetQueries"></a>

```typescript
public readonly actionGetQueries: string;
```

- *Type:* string

[PermissionManagement] glue:GetQueries.

---

##### `actionGetQuery`<sup>Required</sup> <a name="actionGetQuery" id="@cdk_utils/iam.glue.GlueActions.property.actionGetQuery"></a>

```typescript
public readonly actionGetQuery: string;
```

- *Type:* string

[PermissionManagement] glue:GetQuery.

---

##### `actionGetRecipeAction`<sup>Required</sup> <a name="actionGetRecipeAction" id="@cdk_utils/iam.glue.GlueActions.property.actionGetRecipeAction"></a>

```typescript
public readonly actionGetRecipeAction: string;
```

- *Type:* string

[PermissionManagement] glue:GetRecipeAction.

---

##### `actionGetRegistry`<sup>Required</sup> <a name="actionGetRegistry" id="@cdk_utils/iam.glue.GlueActions.property.actionGetRegistry"></a>

```typescript
public readonly actionGetRegistry: string;
```

- *Type:* string

[Read] glue:GetRegistry.

---

##### `actionGetResourcePolicies`<sup>Required</sup> <a name="actionGetResourcePolicies" id="@cdk_utils/iam.glue.GlueActions.property.actionGetResourcePolicies"></a>

```typescript
public readonly actionGetResourcePolicies: string;
```

- *Type:* string

[Read] glue:GetResourcePolicies.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.glue.GlueActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] glue:GetResourcePolicy.

---

##### `actionGetSchema`<sup>Required</sup> <a name="actionGetSchema" id="@cdk_utils/iam.glue.GlueActions.property.actionGetSchema"></a>

```typescript
public readonly actionGetSchema: string;
```

- *Type:* string

[Read] glue:GetSchema.

---

##### `actionGetSchemaByDefinition`<sup>Required</sup> <a name="actionGetSchemaByDefinition" id="@cdk_utils/iam.glue.GlueActions.property.actionGetSchemaByDefinition"></a>

```typescript
public readonly actionGetSchemaByDefinition: string;
```

- *Type:* string

[Read] glue:GetSchemaByDefinition.

---

##### `actionGetSchemaVersion`<sup>Required</sup> <a name="actionGetSchemaVersion" id="@cdk_utils/iam.glue.GlueActions.property.actionGetSchemaVersion"></a>

```typescript
public readonly actionGetSchemaVersion: string;
```

- *Type:* string

[Read] glue:GetSchemaVersion.

---

##### `actionGetSchemaVersionsDiff`<sup>Required</sup> <a name="actionGetSchemaVersionsDiff" id="@cdk_utils/iam.glue.GlueActions.property.actionGetSchemaVersionsDiff"></a>

```typescript
public readonly actionGetSchemaVersionsDiff: string;
```

- *Type:* string

[Read] glue:GetSchemaVersionsDiff.

---

##### `actionGetSecurityConfiguration`<sup>Required</sup> <a name="actionGetSecurityConfiguration" id="@cdk_utils/iam.glue.GlueActions.property.actionGetSecurityConfiguration"></a>

```typescript
public readonly actionGetSecurityConfiguration: string;
```

- *Type:* string

[Read] glue:GetSecurityConfiguration.

---

##### `actionGetSecurityConfigurations`<sup>Required</sup> <a name="actionGetSecurityConfigurations" id="@cdk_utils/iam.glue.GlueActions.property.actionGetSecurityConfigurations"></a>

```typescript
public readonly actionGetSecurityConfigurations: string;
```

- *Type:* string

[Read] glue:GetSecurityConfigurations.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.glue.GlueActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] glue:GetSession.

---

##### `actionGetSessionEndpoint`<sup>Required</sup> <a name="actionGetSessionEndpoint" id="@cdk_utils/iam.glue.GlueActions.property.actionGetSessionEndpoint"></a>

```typescript
public readonly actionGetSessionEndpoint: string;
```

- *Type:* string

[Read] glue:GetSessionEndpoint.

---

##### `actionGetStage`<sup>Required</sup> <a name="actionGetStage" id="@cdk_utils/iam.glue.GlueActions.property.actionGetStage"></a>

```typescript
public readonly actionGetStage: string;
```

- *Type:* string

[PermissionManagement] glue:GetStage.

---

##### `actionGetStageAttempt`<sup>Required</sup> <a name="actionGetStageAttempt" id="@cdk_utils/iam.glue.GlueActions.property.actionGetStageAttempt"></a>

```typescript
public readonly actionGetStageAttempt: string;
```

- *Type:* string

[PermissionManagement] glue:GetStageAttempt.

---

##### `actionGetStageAttemptTaskList`<sup>Required</sup> <a name="actionGetStageAttemptTaskList" id="@cdk_utils/iam.glue.GlueActions.property.actionGetStageAttemptTaskList"></a>

```typescript
public readonly actionGetStageAttemptTaskList: string;
```

- *Type:* string

[PermissionManagement] glue:GetStageAttemptTaskList.

---

##### `actionGetStageAttemptTaskSummary`<sup>Required</sup> <a name="actionGetStageAttemptTaskSummary" id="@cdk_utils/iam.glue.GlueActions.property.actionGetStageAttemptTaskSummary"></a>

```typescript
public readonly actionGetStageAttemptTaskSummary: string;
```

- *Type:* string

[PermissionManagement] glue:GetStageAttemptTaskSummary.

---

##### `actionGetStageFiles`<sup>Required</sup> <a name="actionGetStageFiles" id="@cdk_utils/iam.glue.GlueActions.property.actionGetStageFiles"></a>

```typescript
public readonly actionGetStageFiles: string;
```

- *Type:* string

[PermissionManagement] glue:GetStageFiles.

---

##### `actionGetStages`<sup>Required</sup> <a name="actionGetStages" id="@cdk_utils/iam.glue.GlueActions.property.actionGetStages"></a>

```typescript
public readonly actionGetStages: string;
```

- *Type:* string

[PermissionManagement] glue:GetStages.

---

##### `actionGetStatement`<sup>Required</sup> <a name="actionGetStatement" id="@cdk_utils/iam.glue.GlueActions.property.actionGetStatement"></a>

```typescript
public readonly actionGetStatement: string;
```

- *Type:* string

[Read] glue:GetStatement.

---

##### `actionGetStorage`<sup>Required</sup> <a name="actionGetStorage" id="@cdk_utils/iam.glue.GlueActions.property.actionGetStorage"></a>

```typescript
public readonly actionGetStorage: string;
```

- *Type:* string

[PermissionManagement] glue:GetStorage.

---

##### `actionGetStorageUnit`<sup>Required</sup> <a name="actionGetStorageUnit" id="@cdk_utils/iam.glue.GlueActions.property.actionGetStorageUnit"></a>

```typescript
public readonly actionGetStorageUnit: string;
```

- *Type:* string

[PermissionManagement] glue:GetStorageUnit.

---

##### `actionGetTable`<sup>Required</sup> <a name="actionGetTable" id="@cdk_utils/iam.glue.GlueActions.property.actionGetTable"></a>

```typescript
public readonly actionGetTable: string;
```

- *Type:* string

[Read] glue:GetTable.

---

##### `actionGetTableOptimizer`<sup>Required</sup> <a name="actionGetTableOptimizer" id="@cdk_utils/iam.glue.GlueActions.property.actionGetTableOptimizer"></a>

```typescript
public readonly actionGetTableOptimizer: string;
```

- *Type:* string

[Read] glue:GetTableOptimizer.

---

##### `actionGetTables`<sup>Required</sup> <a name="actionGetTables" id="@cdk_utils/iam.glue.GlueActions.property.actionGetTables"></a>

```typescript
public readonly actionGetTables: string;
```

- *Type:* string

[Read] glue:GetTables.

---

##### `actionGetTableVersion`<sup>Required</sup> <a name="actionGetTableVersion" id="@cdk_utils/iam.glue.GlueActions.property.actionGetTableVersion"></a>

```typescript
public readonly actionGetTableVersion: string;
```

- *Type:* string

[Read] glue:GetTableVersion.

---

##### `actionGetTableVersions`<sup>Required</sup> <a name="actionGetTableVersions" id="@cdk_utils/iam.glue.GlueActions.property.actionGetTableVersions"></a>

```typescript
public readonly actionGetTableVersions: string;
```

- *Type:* string

[Read] glue:GetTableVersions.

---

##### `actionGetTags`<sup>Required</sup> <a name="actionGetTags" id="@cdk_utils/iam.glue.GlueActions.property.actionGetTags"></a>

```typescript
public readonly actionGetTags: string;
```

- *Type:* string

[Read] glue:GetTags.

---

##### `actionGetTrigger`<sup>Required</sup> <a name="actionGetTrigger" id="@cdk_utils/iam.glue.GlueActions.property.actionGetTrigger"></a>

```typescript
public readonly actionGetTrigger: string;
```

- *Type:* string

[Read] glue:GetTrigger.

---

##### `actionGetTriggers`<sup>Required</sup> <a name="actionGetTriggers" id="@cdk_utils/iam.glue.GlueActions.property.actionGetTriggers"></a>

```typescript
public readonly actionGetTriggers: string;
```

- *Type:* string

[Read] glue:GetTriggers.

---

##### `actionGetUsageProfile`<sup>Required</sup> <a name="actionGetUsageProfile" id="@cdk_utils/iam.glue.GlueActions.property.actionGetUsageProfile"></a>

```typescript
public readonly actionGetUsageProfile: string;
```

- *Type:* string

[Read] glue:GetUsageProfile.

---

##### `actionGetUserDefinedFunction`<sup>Required</sup> <a name="actionGetUserDefinedFunction" id="@cdk_utils/iam.glue.GlueActions.property.actionGetUserDefinedFunction"></a>

```typescript
public readonly actionGetUserDefinedFunction: string;
```

- *Type:* string

[Read] glue:GetUserDefinedFunction.

---

##### `actionGetUserDefinedFunctions`<sup>Required</sup> <a name="actionGetUserDefinedFunctions" id="@cdk_utils/iam.glue.GlueActions.property.actionGetUserDefinedFunctions"></a>

```typescript
public readonly actionGetUserDefinedFunctions: string;
```

- *Type:* string

[Read] glue:GetUserDefinedFunctions.

---

##### `actionGetWorkflow`<sup>Required</sup> <a name="actionGetWorkflow" id="@cdk_utils/iam.glue.GlueActions.property.actionGetWorkflow"></a>

```typescript
public readonly actionGetWorkflow: string;
```

- *Type:* string

[Read] glue:GetWorkflow.

---

##### `actionGetWorkflowRun`<sup>Required</sup> <a name="actionGetWorkflowRun" id="@cdk_utils/iam.glue.GlueActions.property.actionGetWorkflowRun"></a>

```typescript
public readonly actionGetWorkflowRun: string;
```

- *Type:* string

[Read] glue:GetWorkflowRun.

---

##### `actionGetWorkflowRunProperties`<sup>Required</sup> <a name="actionGetWorkflowRunProperties" id="@cdk_utils/iam.glue.GlueActions.property.actionGetWorkflowRunProperties"></a>

```typescript
public readonly actionGetWorkflowRunProperties: string;
```

- *Type:* string

[Read] glue:GetWorkflowRunProperties.

---

##### `actionGetWorkflowRuns`<sup>Required</sup> <a name="actionGetWorkflowRuns" id="@cdk_utils/iam.glue.GlueActions.property.actionGetWorkflowRuns"></a>

```typescript
public readonly actionGetWorkflowRuns: string;
```

- *Type:* string

[Read] glue:GetWorkflowRuns.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.glue.GlueActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.glue.GlueActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.glue.GlueActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.glue.GlueActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.glue.GlueActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AuthorizeInboundIntegration`<sup>Required</sup> <a name="AuthorizeInboundIntegration" id="@cdk_utils/iam.glue.GlueActions.property.AuthorizeInboundIntegration"></a>

```typescript
public readonly AuthorizeInboundIntegration: string;
```

- *Type:* string

[Write] glue:AuthorizeInboundIntegration.

---

##### `BatchCreatePartition`<sup>Required</sup> <a name="BatchCreatePartition" id="@cdk_utils/iam.glue.GlueActions.property.BatchCreatePartition"></a>

```typescript
public readonly BatchCreatePartition: string;
```

- *Type:* string

[Write] glue:BatchCreatePartition.

---

##### `BatchDeleteConnection`<sup>Required</sup> <a name="BatchDeleteConnection" id="@cdk_utils/iam.glue.GlueActions.property.BatchDeleteConnection"></a>

```typescript
public readonly BatchDeleteConnection: string;
```

- *Type:* string

[Write] glue:BatchDeleteConnection.

---

##### `BatchDeletePartition`<sup>Required</sup> <a name="BatchDeletePartition" id="@cdk_utils/iam.glue.GlueActions.property.BatchDeletePartition"></a>

```typescript
public readonly BatchDeletePartition: string;
```

- *Type:* string

[Write] glue:BatchDeletePartition.

---

##### `BatchDeleteTable`<sup>Required</sup> <a name="BatchDeleteTable" id="@cdk_utils/iam.glue.GlueActions.property.BatchDeleteTable"></a>

```typescript
public readonly BatchDeleteTable: string;
```

- *Type:* string

[Write] glue:BatchDeleteTable.

---

##### `BatchDeleteTableVersion`<sup>Required</sup> <a name="BatchDeleteTableVersion" id="@cdk_utils/iam.glue.GlueActions.property.BatchDeleteTableVersion"></a>

```typescript
public readonly BatchDeleteTableVersion: string;
```

- *Type:* string

[Write] glue:BatchDeleteTableVersion.

---

##### `BatchGetBlueprints`<sup>Required</sup> <a name="BatchGetBlueprints" id="@cdk_utils/iam.glue.GlueActions.property.BatchGetBlueprints"></a>

```typescript
public readonly BatchGetBlueprints: string;
```

- *Type:* string

[Read] glue:BatchGetBlueprints.

---

##### `BatchGetCrawlers`<sup>Required</sup> <a name="BatchGetCrawlers" id="@cdk_utils/iam.glue.GlueActions.property.BatchGetCrawlers"></a>

```typescript
public readonly BatchGetCrawlers: string;
```

- *Type:* string

[Read] glue:BatchGetCrawlers.

---

##### `BatchGetCustomEntityTypes`<sup>Required</sup> <a name="BatchGetCustomEntityTypes" id="@cdk_utils/iam.glue.GlueActions.property.BatchGetCustomEntityTypes"></a>

```typescript
public readonly BatchGetCustomEntityTypes: string;
```

- *Type:* string

[Read] glue:BatchGetCustomEntityTypes.

---

##### `BatchGetDevEndpoints`<sup>Required</sup> <a name="BatchGetDevEndpoints" id="@cdk_utils/iam.glue.GlueActions.property.BatchGetDevEndpoints"></a>

```typescript
public readonly BatchGetDevEndpoints: string;
```

- *Type:* string

[Read] glue:BatchGetDevEndpoints.

---

##### `BatchGetJobs`<sup>Required</sup> <a name="BatchGetJobs" id="@cdk_utils/iam.glue.GlueActions.property.BatchGetJobs"></a>

```typescript
public readonly BatchGetJobs: string;
```

- *Type:* string

[Read] glue:BatchGetJobs.

---

##### `BatchGetPartition`<sup>Required</sup> <a name="BatchGetPartition" id="@cdk_utils/iam.glue.GlueActions.property.BatchGetPartition"></a>

```typescript
public readonly BatchGetPartition: string;
```

- *Type:* string

[Read] glue:BatchGetPartition.

---

##### `BatchGetStageFiles`<sup>Required</sup> <a name="BatchGetStageFiles" id="@cdk_utils/iam.glue.GlueActions.property.BatchGetStageFiles"></a>

```typescript
public readonly BatchGetStageFiles: string;
```

- *Type:* string

[PermissionManagement] glue:BatchGetStageFiles.

---

##### `BatchGetTableOptimizer`<sup>Required</sup> <a name="BatchGetTableOptimizer" id="@cdk_utils/iam.glue.GlueActions.property.BatchGetTableOptimizer"></a>

```typescript
public readonly BatchGetTableOptimizer: string;
```

- *Type:* string

[Read] glue:BatchGetTableOptimizer.

---

##### `BatchGetTriggers`<sup>Required</sup> <a name="BatchGetTriggers" id="@cdk_utils/iam.glue.GlueActions.property.BatchGetTriggers"></a>

```typescript
public readonly BatchGetTriggers: string;
```

- *Type:* string

[Read] glue:BatchGetTriggers.

---

##### `BatchGetWorkflows`<sup>Required</sup> <a name="BatchGetWorkflows" id="@cdk_utils/iam.glue.GlueActions.property.BatchGetWorkflows"></a>

```typescript
public readonly BatchGetWorkflows: string;
```

- *Type:* string

[Read] glue:BatchGetWorkflows.

---

##### `BatchStopJobRun`<sup>Required</sup> <a name="BatchStopJobRun" id="@cdk_utils/iam.glue.GlueActions.property.BatchStopJobRun"></a>

```typescript
public readonly BatchStopJobRun: string;
```

- *Type:* string

[Write] glue:BatchStopJobRun.

---

##### `BatchUpdatePartition`<sup>Required</sup> <a name="BatchUpdatePartition" id="@cdk_utils/iam.glue.GlueActions.property.BatchUpdatePartition"></a>

```typescript
public readonly BatchUpdatePartition: string;
```

- *Type:* string

[Write] glue:BatchUpdatePartition.

---

##### `CancelDataQualityRuleRecommendationRun`<sup>Required</sup> <a name="CancelDataQualityRuleRecommendationRun" id="@cdk_utils/iam.glue.GlueActions.property.CancelDataQualityRuleRecommendationRun"></a>

```typescript
public readonly CancelDataQualityRuleRecommendationRun: string;
```

- *Type:* string

[Write] glue:CancelDataQualityRuleRecommendationRun.

---

##### `CancelDataQualityRulesetEvaluationRun`<sup>Required</sup> <a name="CancelDataQualityRulesetEvaluationRun" id="@cdk_utils/iam.glue.GlueActions.property.CancelDataQualityRulesetEvaluationRun"></a>

```typescript
public readonly CancelDataQualityRulesetEvaluationRun: string;
```

- *Type:* string

[Write] glue:CancelDataQualityRulesetEvaluationRun.

---

##### `CancelMLTaskRun`<sup>Required</sup> <a name="CancelMLTaskRun" id="@cdk_utils/iam.glue.GlueActions.property.CancelMLTaskRun"></a>

```typescript
public readonly CancelMLTaskRun: string;
```

- *Type:* string

[Write] glue:CancelMLTaskRun.

---

##### `CancelStatement`<sup>Required</sup> <a name="CancelStatement" id="@cdk_utils/iam.glue.GlueActions.property.CancelStatement"></a>

```typescript
public readonly CancelStatement: string;
```

- *Type:* string

[Write] glue:CancelStatement.

---

##### `CheckSchemaVersionValidity`<sup>Required</sup> <a name="CheckSchemaVersionValidity" id="@cdk_utils/iam.glue.GlueActions.property.CheckSchemaVersionValidity"></a>

```typescript
public readonly CheckSchemaVersionValidity: string;
```

- *Type:* string

[Read] glue:CheckSchemaVersionValidity.

---

##### `CreateBlueprint`<sup>Required</sup> <a name="CreateBlueprint" id="@cdk_utils/iam.glue.GlueActions.property.CreateBlueprint"></a>

```typescript
public readonly CreateBlueprint: string;
```

- *Type:* string

[Write] glue:CreateBlueprint.

---

##### `CreateCatalog`<sup>Required</sup> <a name="CreateCatalog" id="@cdk_utils/iam.glue.GlueActions.property.CreateCatalog"></a>

```typescript
public readonly CreateCatalog: string;
```

- *Type:* string

[Write] glue:CreateCatalog.

---

##### `CreateClassifier`<sup>Required</sup> <a name="CreateClassifier" id="@cdk_utils/iam.glue.GlueActions.property.CreateClassifier"></a>

```typescript
public readonly CreateClassifier: string;
```

- *Type:* string

[Write] glue:CreateClassifier.

---

##### `CreateColumnStatisticsTaskSettings`<sup>Required</sup> <a name="CreateColumnStatisticsTaskSettings" id="@cdk_utils/iam.glue.GlueActions.property.CreateColumnStatisticsTaskSettings"></a>

```typescript
public readonly CreateColumnStatisticsTaskSettings: string;
```

- *Type:* string

[Write] glue:CreateColumnStatisticsTaskSettings.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.glue.GlueActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] glue:CreateConnection.

---

##### `CreateCrawler`<sup>Required</sup> <a name="CreateCrawler" id="@cdk_utils/iam.glue.GlueActions.property.CreateCrawler"></a>

```typescript
public readonly CreateCrawler: string;
```

- *Type:* string

[Write] glue:CreateCrawler.

---

##### `CreateCustomEntityType`<sup>Required</sup> <a name="CreateCustomEntityType" id="@cdk_utils/iam.glue.GlueActions.property.CreateCustomEntityType"></a>

```typescript
public readonly CreateCustomEntityType: string;
```

- *Type:* string

[Write] glue:CreateCustomEntityType.

---

##### `CreateDatabase`<sup>Required</sup> <a name="CreateDatabase" id="@cdk_utils/iam.glue.GlueActions.property.CreateDatabase"></a>

```typescript
public readonly CreateDatabase: string;
```

- *Type:* string

[Write] glue:CreateDatabase.

---

##### `CreateDataQualityRuleset`<sup>Required</sup> <a name="CreateDataQualityRuleset" id="@cdk_utils/iam.glue.GlueActions.property.CreateDataQualityRuleset"></a>

```typescript
public readonly CreateDataQualityRuleset: string;
```

- *Type:* string

[Write] glue:CreateDataQualityRuleset.

---

##### `CreateDevEndpoint`<sup>Required</sup> <a name="CreateDevEndpoint" id="@cdk_utils/iam.glue.GlueActions.property.CreateDevEndpoint"></a>

```typescript
public readonly CreateDevEndpoint: string;
```

- *Type:* string

[Write] glue:CreateDevEndpoint.

---

##### `CreateGlueIdentityCenterConfiguration`<sup>Required</sup> <a name="CreateGlueIdentityCenterConfiguration" id="@cdk_utils/iam.glue.GlueActions.property.CreateGlueIdentityCenterConfiguration"></a>

```typescript
public readonly CreateGlueIdentityCenterConfiguration: string;
```

- *Type:* string

[Write] glue:CreateGlueIdentityCenterConfiguration.

---

##### `CreateInboundIntegration`<sup>Required</sup> <a name="CreateInboundIntegration" id="@cdk_utils/iam.glue.GlueActions.property.CreateInboundIntegration"></a>

```typescript
public readonly CreateInboundIntegration: string;
```

- *Type:* string

[Write] glue:CreateInboundIntegration.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.glue.GlueActions.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string;
```

- *Type:* string

[Write] glue:CreateIntegration.

---

##### `CreateIntegrationResourceProperty`<sup>Required</sup> <a name="CreateIntegrationResourceProperty" id="@cdk_utils/iam.glue.GlueActions.property.CreateIntegrationResourceProperty"></a>

```typescript
public readonly CreateIntegrationResourceProperty: string;
```

- *Type:* string

[Write] glue:CreateIntegrationResourceProperty.

---

##### `CreateIntegrationTableProperties`<sup>Required</sup> <a name="CreateIntegrationTableProperties" id="@cdk_utils/iam.glue.GlueActions.property.CreateIntegrationTableProperties"></a>

```typescript
public readonly CreateIntegrationTableProperties: string;
```

- *Type:* string

[Write] glue:CreateIntegrationTableProperties.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.glue.GlueActions.property.CreateJob"></a>

```typescript
public readonly CreateJob: string;
```

- *Type:* string

[Write] glue:CreateJob.

---

##### `CreateMLTransform`<sup>Required</sup> <a name="CreateMLTransform" id="@cdk_utils/iam.glue.GlueActions.property.CreateMLTransform"></a>

```typescript
public readonly CreateMLTransform: string;
```

- *Type:* string

[Write] glue:CreateMLTransform.

---

##### `CreatePartition`<sup>Required</sup> <a name="CreatePartition" id="@cdk_utils/iam.glue.GlueActions.property.CreatePartition"></a>

```typescript
public readonly CreatePartition: string;
```

- *Type:* string

[Write] glue:CreatePartition.

---

##### `CreatePartitionIndex`<sup>Required</sup> <a name="CreatePartitionIndex" id="@cdk_utils/iam.glue.GlueActions.property.CreatePartitionIndex"></a>

```typescript
public readonly CreatePartitionIndex: string;
```

- *Type:* string

[Write] glue:CreatePartitionIndex.

---

##### `CreateRegistry`<sup>Required</sup> <a name="CreateRegistry" id="@cdk_utils/iam.glue.GlueActions.property.CreateRegistry"></a>

```typescript
public readonly CreateRegistry: string;
```

- *Type:* string

[Write] glue:CreateRegistry.

---

##### `CreateSchema`<sup>Required</sup> <a name="CreateSchema" id="@cdk_utils/iam.glue.GlueActions.property.CreateSchema"></a>

```typescript
public readonly CreateSchema: string;
```

- *Type:* string

[Write] glue:CreateSchema.

---

##### `CreateScript`<sup>Required</sup> <a name="CreateScript" id="@cdk_utils/iam.glue.GlueActions.property.CreateScript"></a>

```typescript
public readonly CreateScript: string;
```

- *Type:* string

[Write] glue:CreateScript.

---

##### `CreateSecurityConfiguration`<sup>Required</sup> <a name="CreateSecurityConfiguration" id="@cdk_utils/iam.glue.GlueActions.property.CreateSecurityConfiguration"></a>

```typescript
public readonly CreateSecurityConfiguration: string;
```

- *Type:* string

[Write] glue:CreateSecurityConfiguration.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.glue.GlueActions.property.CreateSession"></a>

```typescript
public readonly CreateSession: string;
```

- *Type:* string

[Write] glue:CreateSession.

---

##### `CreateTable`<sup>Required</sup> <a name="CreateTable" id="@cdk_utils/iam.glue.GlueActions.property.CreateTable"></a>

```typescript
public readonly CreateTable: string;
```

- *Type:* string

[Write] glue:CreateTable.

---

##### `CreateTableOptimizer`<sup>Required</sup> <a name="CreateTableOptimizer" id="@cdk_utils/iam.glue.GlueActions.property.CreateTableOptimizer"></a>

```typescript
public readonly CreateTableOptimizer: string;
```

- *Type:* string

[Write] glue:CreateTableOptimizer.

---

##### `CreateTrigger`<sup>Required</sup> <a name="CreateTrigger" id="@cdk_utils/iam.glue.GlueActions.property.CreateTrigger"></a>

```typescript
public readonly CreateTrigger: string;
```

- *Type:* string

[Write] glue:CreateTrigger.

---

##### `CreateUsageProfile`<sup>Required</sup> <a name="CreateUsageProfile" id="@cdk_utils/iam.glue.GlueActions.property.CreateUsageProfile"></a>

```typescript
public readonly CreateUsageProfile: string;
```

- *Type:* string

[Write] glue:CreateUsageProfile.

---

##### `CreateUserDefinedFunction`<sup>Required</sup> <a name="CreateUserDefinedFunction" id="@cdk_utils/iam.glue.GlueActions.property.CreateUserDefinedFunction"></a>

```typescript
public readonly CreateUserDefinedFunction: string;
```

- *Type:* string

[Write] glue:CreateUserDefinedFunction.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.glue.GlueActions.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string;
```

- *Type:* string

[Write] glue:CreateWorkflow.

---

##### `DeleteBlueprint`<sup>Required</sup> <a name="DeleteBlueprint" id="@cdk_utils/iam.glue.GlueActions.property.DeleteBlueprint"></a>

```typescript
public readonly DeleteBlueprint: string;
```

- *Type:* string

[Write] glue:DeleteBlueprint.

---

##### `DeleteCatalog`<sup>Required</sup> <a name="DeleteCatalog" id="@cdk_utils/iam.glue.GlueActions.property.DeleteCatalog"></a>

```typescript
public readonly DeleteCatalog: string;
```

- *Type:* string

[Write] glue:DeleteCatalog.

---

##### `DeleteClassifier`<sup>Required</sup> <a name="DeleteClassifier" id="@cdk_utils/iam.glue.GlueActions.property.DeleteClassifier"></a>

```typescript
public readonly DeleteClassifier: string;
```

- *Type:* string

[Write] glue:DeleteClassifier.

---

##### `DeleteColumnStatisticsForPartition`<sup>Required</sup> <a name="DeleteColumnStatisticsForPartition" id="@cdk_utils/iam.glue.GlueActions.property.DeleteColumnStatisticsForPartition"></a>

```typescript
public readonly DeleteColumnStatisticsForPartition: string;
```

- *Type:* string

[Write] glue:DeleteColumnStatisticsForPartition.

---

##### `DeleteColumnStatisticsForTable`<sup>Required</sup> <a name="DeleteColumnStatisticsForTable" id="@cdk_utils/iam.glue.GlueActions.property.DeleteColumnStatisticsForTable"></a>

```typescript
public readonly DeleteColumnStatisticsForTable: string;
```

- *Type:* string

[Write] glue:DeleteColumnStatisticsForTable.

---

##### `DeleteColumnStatisticsTaskSettings`<sup>Required</sup> <a name="DeleteColumnStatisticsTaskSettings" id="@cdk_utils/iam.glue.GlueActions.property.DeleteColumnStatisticsTaskSettings"></a>

```typescript
public readonly DeleteColumnStatisticsTaskSettings: string;
```

- *Type:* string

[Write] glue:DeleteColumnStatisticsTaskSettings.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.glue.GlueActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] glue:DeleteConnection.

---

##### `DeleteConnectionType`<sup>Required</sup> <a name="DeleteConnectionType" id="@cdk_utils/iam.glue.GlueActions.property.DeleteConnectionType"></a>

```typescript
public readonly DeleteConnectionType: string;
```

- *Type:* string

[Write] glue:DeleteConnectionType.

---

##### `DeleteCrawler`<sup>Required</sup> <a name="DeleteCrawler" id="@cdk_utils/iam.glue.GlueActions.property.DeleteCrawler"></a>

```typescript
public readonly DeleteCrawler: string;
```

- *Type:* string

[Write] glue:DeleteCrawler.

---

##### `DeleteCustomEntityType`<sup>Required</sup> <a name="DeleteCustomEntityType" id="@cdk_utils/iam.glue.GlueActions.property.DeleteCustomEntityType"></a>

```typescript
public readonly DeleteCustomEntityType: string;
```

- *Type:* string

[Write] glue:DeleteCustomEntityType.

---

##### `DeleteDatabase`<sup>Required</sup> <a name="DeleteDatabase" id="@cdk_utils/iam.glue.GlueActions.property.DeleteDatabase"></a>

```typescript
public readonly DeleteDatabase: string;
```

- *Type:* string

[Write] glue:DeleteDatabase.

---

##### `DeleteDataQualityRuleset`<sup>Required</sup> <a name="DeleteDataQualityRuleset" id="@cdk_utils/iam.glue.GlueActions.property.DeleteDataQualityRuleset"></a>

```typescript
public readonly DeleteDataQualityRuleset: string;
```

- *Type:* string

[Write] glue:DeleteDataQualityRuleset.

---

##### `DeleteDevEndpoint`<sup>Required</sup> <a name="DeleteDevEndpoint" id="@cdk_utils/iam.glue.GlueActions.property.DeleteDevEndpoint"></a>

```typescript
public readonly DeleteDevEndpoint: string;
```

- *Type:* string

[Write] glue:DeleteDevEndpoint.

---

##### `DeleteGlueIdentityCenterConfiguration`<sup>Required</sup> <a name="DeleteGlueIdentityCenterConfiguration" id="@cdk_utils/iam.glue.GlueActions.property.DeleteGlueIdentityCenterConfiguration"></a>

```typescript
public readonly DeleteGlueIdentityCenterConfiguration: string;
```

- *Type:* string

[Write] glue:DeleteGlueIdentityCenterConfiguration.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.glue.GlueActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] glue:DeleteIntegration.

---

##### `DeleteIntegrationResourceProperty`<sup>Required</sup> <a name="DeleteIntegrationResourceProperty" id="@cdk_utils/iam.glue.GlueActions.property.DeleteIntegrationResourceProperty"></a>

```typescript
public readonly DeleteIntegrationResourceProperty: string;
```

- *Type:* string

[Write] glue:DeleteIntegrationResourceProperty.

---

##### `DeleteIntegrationTableProperties`<sup>Required</sup> <a name="DeleteIntegrationTableProperties" id="@cdk_utils/iam.glue.GlueActions.property.DeleteIntegrationTableProperties"></a>

```typescript
public readonly DeleteIntegrationTableProperties: string;
```

- *Type:* string

[Write] glue:DeleteIntegrationTableProperties.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.glue.GlueActions.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string;
```

- *Type:* string

[Write] glue:DeleteJob.

---

##### `DeleteMLTransform`<sup>Required</sup> <a name="DeleteMLTransform" id="@cdk_utils/iam.glue.GlueActions.property.DeleteMLTransform"></a>

```typescript
public readonly DeleteMLTransform: string;
```

- *Type:* string

[Write] glue:DeleteMLTransform.

---

##### `DeletePartition`<sup>Required</sup> <a name="DeletePartition" id="@cdk_utils/iam.glue.GlueActions.property.DeletePartition"></a>

```typescript
public readonly DeletePartition: string;
```

- *Type:* string

[Write] glue:DeletePartition.

---

##### `DeletePartitionIndex`<sup>Required</sup> <a name="DeletePartitionIndex" id="@cdk_utils/iam.glue.GlueActions.property.DeletePartitionIndex"></a>

```typescript
public readonly DeletePartitionIndex: string;
```

- *Type:* string

[Write] glue:DeletePartitionIndex.

---

##### `DeleteRegistry`<sup>Required</sup> <a name="DeleteRegistry" id="@cdk_utils/iam.glue.GlueActions.property.DeleteRegistry"></a>

```typescript
public readonly DeleteRegistry: string;
```

- *Type:* string

[Write] glue:DeleteRegistry.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.glue.GlueActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] glue:DeleteResourcePolicy.

---

##### `DeleteSchema`<sup>Required</sup> <a name="DeleteSchema" id="@cdk_utils/iam.glue.GlueActions.property.DeleteSchema"></a>

```typescript
public readonly DeleteSchema: string;
```

- *Type:* string

[Write] glue:DeleteSchema.

---

##### `DeleteSchemaVersions`<sup>Required</sup> <a name="DeleteSchemaVersions" id="@cdk_utils/iam.glue.GlueActions.property.DeleteSchemaVersions"></a>

```typescript
public readonly DeleteSchemaVersions: string;
```

- *Type:* string

[Write] glue:DeleteSchemaVersions.

---

##### `DeleteSecurityConfiguration`<sup>Required</sup> <a name="DeleteSecurityConfiguration" id="@cdk_utils/iam.glue.GlueActions.property.DeleteSecurityConfiguration"></a>

```typescript
public readonly DeleteSecurityConfiguration: string;
```

- *Type:* string

[Write] glue:DeleteSecurityConfiguration.

---

##### `DeleteSession`<sup>Required</sup> <a name="DeleteSession" id="@cdk_utils/iam.glue.GlueActions.property.DeleteSession"></a>

```typescript
public readonly DeleteSession: string;
```

- *Type:* string

[Write] glue:DeleteSession.

---

##### `DeleteTable`<sup>Required</sup> <a name="DeleteTable" id="@cdk_utils/iam.glue.GlueActions.property.DeleteTable"></a>

```typescript
public readonly DeleteTable: string;
```

- *Type:* string

[Write] glue:DeleteTable.

---

##### `DeleteTableOptimizer`<sup>Required</sup> <a name="DeleteTableOptimizer" id="@cdk_utils/iam.glue.GlueActions.property.DeleteTableOptimizer"></a>

```typescript
public readonly DeleteTableOptimizer: string;
```

- *Type:* string

[Write] glue:DeleteTableOptimizer.

---

##### `DeleteTableVersion`<sup>Required</sup> <a name="DeleteTableVersion" id="@cdk_utils/iam.glue.GlueActions.property.DeleteTableVersion"></a>

```typescript
public readonly DeleteTableVersion: string;
```

- *Type:* string

[Write] glue:DeleteTableVersion.

---

##### `DeleteTrigger`<sup>Required</sup> <a name="DeleteTrigger" id="@cdk_utils/iam.glue.GlueActions.property.DeleteTrigger"></a>

```typescript
public readonly DeleteTrigger: string;
```

- *Type:* string

[Write] glue:DeleteTrigger.

---

##### `DeleteUsageProfile`<sup>Required</sup> <a name="DeleteUsageProfile" id="@cdk_utils/iam.glue.GlueActions.property.DeleteUsageProfile"></a>

```typescript
public readonly DeleteUsageProfile: string;
```

- *Type:* string

[Write] glue:DeleteUsageProfile.

---

##### `DeleteUserDefinedFunction`<sup>Required</sup> <a name="DeleteUserDefinedFunction" id="@cdk_utils/iam.glue.GlueActions.property.DeleteUserDefinedFunction"></a>

```typescript
public readonly DeleteUserDefinedFunction: string;
```

- *Type:* string

[Write] glue:DeleteUserDefinedFunction.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.glue.GlueActions.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string;
```

- *Type:* string

[Write] glue:DeleteWorkflow.

---

##### `DeregisterDataPreview`<sup>Required</sup> <a name="DeregisterDataPreview" id="@cdk_utils/iam.glue.GlueActions.property.DeregisterDataPreview"></a>

```typescript
public readonly DeregisterDataPreview: string;
```

- *Type:* string

[PermissionManagement] glue:DeregisterDataPreview.

---

##### `DescribeConnectionType`<sup>Required</sup> <a name="DescribeConnectionType" id="@cdk_utils/iam.glue.GlueActions.property.DescribeConnectionType"></a>

```typescript
public readonly DescribeConnectionType: string;
```

- *Type:* string

[PermissionManagement] glue:DescribeConnectionType.

---

##### `DescribeEntity`<sup>Required</sup> <a name="DescribeEntity" id="@cdk_utils/iam.glue.GlueActions.property.DescribeEntity"></a>

```typescript
public readonly DescribeEntity: string;
```

- *Type:* string

[PermissionManagement] glue:DescribeEntity.

---

##### `DescribeInboundIntegrations`<sup>Required</sup> <a name="DescribeInboundIntegrations" id="@cdk_utils/iam.glue.GlueActions.property.DescribeInboundIntegrations"></a>

```typescript
public readonly DescribeInboundIntegrations: string;
```

- *Type:* string

[List] glue:DescribeInboundIntegrations.

---

##### `DescribeIntegrations`<sup>Required</sup> <a name="DescribeIntegrations" id="@cdk_utils/iam.glue.GlueActions.property.DescribeIntegrations"></a>

```typescript
public readonly DescribeIntegrations: string;
```

- *Type:* string

[List] glue:DescribeIntegrations.

---

##### `FederateAuthorization`<sup>Required</sup> <a name="FederateAuthorization" id="@cdk_utils/iam.glue.GlueActions.property.FederateAuthorization"></a>

```typescript
public readonly FederateAuthorization: string;
```

- *Type:* string

[Write] glue:FederateAuthorization.

---

##### `GlueNotebookAuthorize`<sup>Required</sup> <a name="GlueNotebookAuthorize" id="@cdk_utils/iam.glue.GlueActions.property.GlueNotebookAuthorize"></a>

```typescript
public readonly GlueNotebookAuthorize: string;
```

- *Type:* string

[PermissionManagement] glue:GlueNotebookAuthorize.

---

##### `GlueNotebookRefreshCredentials`<sup>Required</sup> <a name="GlueNotebookRefreshCredentials" id="@cdk_utils/iam.glue.GlueActions.property.GlueNotebookRefreshCredentials"></a>

```typescript
public readonly GlueNotebookRefreshCredentials: string;
```

- *Type:* string

[PermissionManagement] glue:GlueNotebookRefreshCredentials.

---

##### `ImportCatalogToGlue`<sup>Required</sup> <a name="ImportCatalogToGlue" id="@cdk_utils/iam.glue.GlueActions.property.ImportCatalogToGlue"></a>

```typescript
public readonly ImportCatalogToGlue: string;
```

- *Type:* string

[Write] glue:ImportCatalogToGlue.

---

##### `ListBlueprints`<sup>Required</sup> <a name="ListBlueprints" id="@cdk_utils/iam.glue.GlueActions.property.ListBlueprints"></a>

```typescript
public readonly ListBlueprints: string;
```

- *Type:* string

[List] glue:ListBlueprints.

---

##### `ListColumnStatisticsTaskRuns`<sup>Required</sup> <a name="ListColumnStatisticsTaskRuns" id="@cdk_utils/iam.glue.GlueActions.property.ListColumnStatisticsTaskRuns"></a>

```typescript
public readonly ListColumnStatisticsTaskRuns: string;
```

- *Type:* string

[Read] glue:ListColumnStatisticsTaskRuns.

---

##### `ListConnectionTypes`<sup>Required</sup> <a name="ListConnectionTypes" id="@cdk_utils/iam.glue.GlueActions.property.ListConnectionTypes"></a>

```typescript
public readonly ListConnectionTypes: string;
```

- *Type:* string

[PermissionManagement] glue:ListConnectionTypes.

---

##### `ListCrawlers`<sup>Required</sup> <a name="ListCrawlers" id="@cdk_utils/iam.glue.GlueActions.property.ListCrawlers"></a>

```typescript
public readonly ListCrawlers: string;
```

- *Type:* string

[List] glue:ListCrawlers.

---

##### `ListCrawls`<sup>Required</sup> <a name="ListCrawls" id="@cdk_utils/iam.glue.GlueActions.property.ListCrawls"></a>

```typescript
public readonly ListCrawls: string;
```

- *Type:* string

[List] glue:ListCrawls.

---

##### `ListCustomEntityTypes`<sup>Required</sup> <a name="ListCustomEntityTypes" id="@cdk_utils/iam.glue.GlueActions.property.ListCustomEntityTypes"></a>

```typescript
public readonly ListCustomEntityTypes: string;
```

- *Type:* string

[List] glue:ListCustomEntityTypes.

---

##### `ListDataQualityResults`<sup>Required</sup> <a name="ListDataQualityResults" id="@cdk_utils/iam.glue.GlueActions.property.ListDataQualityResults"></a>

```typescript
public readonly ListDataQualityResults: string;
```

- *Type:* string

[List] glue:ListDataQualityResults.

---

##### `ListDataQualityRuleRecommendationRuns`<sup>Required</sup> <a name="ListDataQualityRuleRecommendationRuns" id="@cdk_utils/iam.glue.GlueActions.property.ListDataQualityRuleRecommendationRuns"></a>

```typescript
public readonly ListDataQualityRuleRecommendationRuns: string;
```

- *Type:* string

[List] glue:ListDataQualityRuleRecommendationRuns.

---

##### `ListDataQualityRulesetEvaluationRuns`<sup>Required</sup> <a name="ListDataQualityRulesetEvaluationRuns" id="@cdk_utils/iam.glue.GlueActions.property.ListDataQualityRulesetEvaluationRuns"></a>

```typescript
public readonly ListDataQualityRulesetEvaluationRuns: string;
```

- *Type:* string

[List] glue:ListDataQualityRulesetEvaluationRuns.

---

##### `ListDataQualityRulesets`<sup>Required</sup> <a name="ListDataQualityRulesets" id="@cdk_utils/iam.glue.GlueActions.property.ListDataQualityRulesets"></a>

```typescript
public readonly ListDataQualityRulesets: string;
```

- *Type:* string

[List] glue:ListDataQualityRulesets.

---

##### `ListDevEndpoints`<sup>Required</sup> <a name="ListDevEndpoints" id="@cdk_utils/iam.glue.GlueActions.property.ListDevEndpoints"></a>

```typescript
public readonly ListDevEndpoints: string;
```

- *Type:* string

[List] glue:ListDevEndpoints.

---

##### `ListEntities`<sup>Required</sup> <a name="ListEntities" id="@cdk_utils/iam.glue.GlueActions.property.ListEntities"></a>

```typescript
public readonly ListEntities: string;
```

- *Type:* string

[PermissionManagement] glue:ListEntities.

---

##### `ListIntegrationResourceProperties`<sup>Required</sup> <a name="ListIntegrationResourceProperties" id="@cdk_utils/iam.glue.GlueActions.property.ListIntegrationResourceProperties"></a>

```typescript
public readonly ListIntegrationResourceProperties: string;
```

- *Type:* string

[List] glue:ListIntegrationResourceProperties.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.glue.GlueActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] glue:ListJobs.

---

##### `ListJobUpgradeAnalyses`<sup>Required</sup> <a name="ListJobUpgradeAnalyses" id="@cdk_utils/iam.glue.GlueActions.property.ListJobUpgradeAnalyses"></a>

```typescript
public readonly ListJobUpgradeAnalyses: string;
```

- *Type:* string

[List] glue:ListJobUpgradeAnalyses.

---

##### `ListMLTransforms`<sup>Required</sup> <a name="ListMLTransforms" id="@cdk_utils/iam.glue.GlueActions.property.ListMLTransforms"></a>

```typescript
public readonly ListMLTransforms: string;
```

- *Type:* string

[List] glue:ListMLTransforms.

---

##### `ListRegistries`<sup>Required</sup> <a name="ListRegistries" id="@cdk_utils/iam.glue.GlueActions.property.ListRegistries"></a>

```typescript
public readonly ListRegistries: string;
```

- *Type:* string

[List] glue:ListRegistries.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.glue.GlueActions.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string;
```

- *Type:* string

[List] glue:ListSchemas.

---

##### `ListSchemaVersions`<sup>Required</sup> <a name="ListSchemaVersions" id="@cdk_utils/iam.glue.GlueActions.property.ListSchemaVersions"></a>

```typescript
public readonly ListSchemaVersions: string;
```

- *Type:* string

[List] glue:ListSchemaVersions.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.glue.GlueActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[List] glue:ListSessions.

---

##### `ListStatements`<sup>Required</sup> <a name="ListStatements" id="@cdk_utils/iam.glue.GlueActions.property.ListStatements"></a>

```typescript
public readonly ListStatements: string;
```

- *Type:* string

[List] glue:ListStatements.

---

##### `ListTableOptimizerRuns`<sup>Required</sup> <a name="ListTableOptimizerRuns" id="@cdk_utils/iam.glue.GlueActions.property.ListTableOptimizerRuns"></a>

```typescript
public readonly ListTableOptimizerRuns: string;
```

- *Type:* string

[List] glue:ListTableOptimizerRuns.

---

##### `ListTriggers`<sup>Required</sup> <a name="ListTriggers" id="@cdk_utils/iam.glue.GlueActions.property.ListTriggers"></a>

```typescript
public readonly ListTriggers: string;
```

- *Type:* string

[List] glue:ListTriggers.

---

##### `ListUsageProfiles`<sup>Required</sup> <a name="ListUsageProfiles" id="@cdk_utils/iam.glue.GlueActions.property.ListUsageProfiles"></a>

```typescript
public readonly ListUsageProfiles: string;
```

- *Type:* string

[List] glue:ListUsageProfiles.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.glue.GlueActions.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string;
```

- *Type:* string

[List] glue:ListWorkflows.

---

##### `ManagedConnector`<sup>Required</sup> <a name="ManagedConnector" id="@cdk_utils/iam.glue.GlueActions.property.ManagedConnector"></a>

```typescript
public readonly ManagedConnector: string;
```

- *Type:* string

[PermissionManagement] glue:ManagedConnector.

---

##### `ModifyIntegration`<sup>Required</sup> <a name="ModifyIntegration" id="@cdk_utils/iam.glue.GlueActions.property.ModifyIntegration"></a>

```typescript
public readonly ModifyIntegration: string;
```

- *Type:* string

[Write] glue:ModifyIntegration.

---

##### `NotifyEvent`<sup>Required</sup> <a name="NotifyEvent" id="@cdk_utils/iam.glue.GlueActions.property.NotifyEvent"></a>

```typescript
public readonly NotifyEvent: string;
```

- *Type:* string

[Write] glue:NotifyEvent.

---

##### `PassConnection`<sup>Required</sup> <a name="PassConnection" id="@cdk_utils/iam.glue.GlueActions.property.PassConnection"></a>

```typescript
public readonly PassConnection: string;
```

- *Type:* string

[Write] glue:PassConnection.

---

##### `PublishDataQuality`<sup>Required</sup> <a name="PublishDataQuality" id="@cdk_utils/iam.glue.GlueActions.property.PublishDataQuality"></a>

```typescript
public readonly PublishDataQuality: string;
```

- *Type:* string

[Write] glue:PublishDataQuality.

---

##### `PutDataCatalogEncryptionSettings`<sup>Required</sup> <a name="PutDataCatalogEncryptionSettings" id="@cdk_utils/iam.glue.GlueActions.property.PutDataCatalogEncryptionSettings"></a>

```typescript
public readonly PutDataCatalogEncryptionSettings: string;
```

- *Type:* string

[Write] glue:PutDataCatalogEncryptionSettings.

---

##### `PutDataQualityProfileAnnotation`<sup>Required</sup> <a name="PutDataQualityProfileAnnotation" id="@cdk_utils/iam.glue.GlueActions.property.PutDataQualityProfileAnnotation"></a>

```typescript
public readonly PutDataQualityProfileAnnotation: string;
```

- *Type:* string

[Write] glue:PutDataQualityProfileAnnotation.

---

##### `PutDataQualityStatisticAnnotation`<sup>Required</sup> <a name="PutDataQualityStatisticAnnotation" id="@cdk_utils/iam.glue.GlueActions.property.PutDataQualityStatisticAnnotation"></a>

```typescript
public readonly PutDataQualityStatisticAnnotation: string;
```

- *Type:* string

[Write] glue:PutDataQualityStatisticAnnotation.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.glue.GlueActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] glue:PutResourcePolicy.

---

##### `PutSchemaVersionMetadata`<sup>Required</sup> <a name="PutSchemaVersionMetadata" id="@cdk_utils/iam.glue.GlueActions.property.PutSchemaVersionMetadata"></a>

```typescript
public readonly PutSchemaVersionMetadata: string;
```

- *Type:* string

[Write] glue:PutSchemaVersionMetadata.

---

##### `PutWorkflowRunProperties`<sup>Required</sup> <a name="PutWorkflowRunProperties" id="@cdk_utils/iam.glue.GlueActions.property.PutWorkflowRunProperties"></a>

```typescript
public readonly PutWorkflowRunProperties: string;
```

- *Type:* string

[Write] glue:PutWorkflowRunProperties.

---

##### `QuerySchemaVersionMetadata`<sup>Required</sup> <a name="QuerySchemaVersionMetadata" id="@cdk_utils/iam.glue.GlueActions.property.QuerySchemaVersionMetadata"></a>

```typescript
public readonly QuerySchemaVersionMetadata: string;
```

- *Type:* string

[List] glue:QuerySchemaVersionMetadata.

---

##### `RefreshOAuth2Tokens`<sup>Required</sup> <a name="RefreshOAuth2Tokens" id="@cdk_utils/iam.glue.GlueActions.property.RefreshOAuth2Tokens"></a>

```typescript
public readonly RefreshOAuth2Tokens: string;
```

- *Type:* string

[PermissionManagement] glue:RefreshOAuth2Tokens.

---

##### `RegisterConnectionType`<sup>Required</sup> <a name="RegisterConnectionType" id="@cdk_utils/iam.glue.GlueActions.property.RegisterConnectionType"></a>

```typescript
public readonly RegisterConnectionType: string;
```

- *Type:* string

[Write] glue:RegisterConnectionType.

---

##### `RegisterSchemaVersion`<sup>Required</sup> <a name="RegisterSchemaVersion" id="@cdk_utils/iam.glue.GlueActions.property.RegisterSchemaVersion"></a>

```typescript
public readonly RegisterSchemaVersion: string;
```

- *Type:* string

[Write] glue:RegisterSchemaVersion.

---

##### `RemoveSchemaVersionMetadata`<sup>Required</sup> <a name="RemoveSchemaVersionMetadata" id="@cdk_utils/iam.glue.GlueActions.property.RemoveSchemaVersionMetadata"></a>

```typescript
public readonly RemoveSchemaVersionMetadata: string;
```

- *Type:* string

[Write] glue:RemoveSchemaVersionMetadata.

---

##### `RenameTable`<sup>Required</sup> <a name="RenameTable" id="@cdk_utils/iam.glue.GlueActions.property.RenameTable"></a>

```typescript
public readonly RenameTable: string;
```

- *Type:* string

[Write] glue:RenameTable.

---

##### `RequestLogParsing`<sup>Required</sup> <a name="RequestLogParsing" id="@cdk_utils/iam.glue.GlueActions.property.RequestLogParsing"></a>

```typescript
public readonly RequestLogParsing: string;
```

- *Type:* string

[PermissionManagement] glue:RequestLogParsing.

---

##### `ResetJobBookmark`<sup>Required</sup> <a name="ResetJobBookmark" id="@cdk_utils/iam.glue.GlueActions.property.ResetJobBookmark"></a>

```typescript
public readonly ResetJobBookmark: string;
```

- *Type:* string

[Write] glue:ResetJobBookmark.

---

##### `ResumeWorkflowRun`<sup>Required</sup> <a name="ResumeWorkflowRun" id="@cdk_utils/iam.glue.GlueActions.property.ResumeWorkflowRun"></a>

```typescript
public readonly ResumeWorkflowRun: string;
```

- *Type:* string

[Write] glue:ResumeWorkflowRun.

---

##### `RunDataPreviewStatement`<sup>Required</sup> <a name="RunDataPreviewStatement" id="@cdk_utils/iam.glue.GlueActions.property.RunDataPreviewStatement"></a>

```typescript
public readonly RunDataPreviewStatement: string;
```

- *Type:* string

[PermissionManagement] glue:RunDataPreviewStatement.

---

##### `RunStatement`<sup>Required</sup> <a name="RunStatement" id="@cdk_utils/iam.glue.GlueActions.property.RunStatement"></a>

```typescript
public readonly RunStatement: string;
```

- *Type:* string

[Write] glue:RunStatement.

---

##### `SearchTables`<sup>Required</sup> <a name="SearchTables" id="@cdk_utils/iam.glue.GlueActions.property.SearchTables"></a>

```typescript
public readonly SearchTables: string;
```

- *Type:* string

[Read] glue:SearchTables.

---

##### `SendFeedback`<sup>Required</sup> <a name="SendFeedback" id="@cdk_utils/iam.glue.GlueActions.property.SendFeedback"></a>

```typescript
public readonly SendFeedback: string;
```

- *Type:* string

[Write] glue:SendFeedback.

---

##### `SendRecipeAction`<sup>Required</sup> <a name="SendRecipeAction" id="@cdk_utils/iam.glue.GlueActions.property.SendRecipeAction"></a>

```typescript
public readonly SendRecipeAction: string;
```

- *Type:* string

[PermissionManagement] glue:SendRecipeAction.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.glue.GlueActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBlueprintRun`<sup>Required</sup> <a name="StartBlueprintRun" id="@cdk_utils/iam.glue.GlueActions.property.StartBlueprintRun"></a>

```typescript
public readonly StartBlueprintRun: string;
```

- *Type:* string

[Write] glue:StartBlueprintRun.

---

##### `StartColumnStatisticsTaskRun`<sup>Required</sup> <a name="StartColumnStatisticsTaskRun" id="@cdk_utils/iam.glue.GlueActions.property.StartColumnStatisticsTaskRun"></a>

```typescript
public readonly StartColumnStatisticsTaskRun: string;
```

- *Type:* string

[Write] glue:StartColumnStatisticsTaskRun.

---

##### `StartColumnStatisticsTaskRunSchedule`<sup>Required</sup> <a name="StartColumnStatisticsTaskRunSchedule" id="@cdk_utils/iam.glue.GlueActions.property.StartColumnStatisticsTaskRunSchedule"></a>

```typescript
public readonly StartColumnStatisticsTaskRunSchedule: string;
```

- *Type:* string

[Write] glue:StartColumnStatisticsTaskRunSchedule.

---

##### `StartCompletion`<sup>Required</sup> <a name="StartCompletion" id="@cdk_utils/iam.glue.GlueActions.property.StartCompletion"></a>

```typescript
public readonly StartCompletion: string;
```

- *Type:* string

[Write] glue:StartCompletion.

---

##### `StartCrawler`<sup>Required</sup> <a name="StartCrawler" id="@cdk_utils/iam.glue.GlueActions.property.StartCrawler"></a>

```typescript
public readonly StartCrawler: string;
```

- *Type:* string

[Write] glue:StartCrawler.

---

##### `StartCrawlerSchedule`<sup>Required</sup> <a name="StartCrawlerSchedule" id="@cdk_utils/iam.glue.GlueActions.property.StartCrawlerSchedule"></a>

```typescript
public readonly StartCrawlerSchedule: string;
```

- *Type:* string

[Write] glue:StartCrawlerSchedule.

---

##### `StartDataQualityRuleRecommendationRun`<sup>Required</sup> <a name="StartDataQualityRuleRecommendationRun" id="@cdk_utils/iam.glue.GlueActions.property.StartDataQualityRuleRecommendationRun"></a>

```typescript
public readonly StartDataQualityRuleRecommendationRun: string;
```

- *Type:* string

[Write] glue:StartDataQualityRuleRecommendationRun.

---

##### `StartDataQualityRulesetEvaluationRun`<sup>Required</sup> <a name="StartDataQualityRulesetEvaluationRun" id="@cdk_utils/iam.glue.GlueActions.property.StartDataQualityRulesetEvaluationRun"></a>

```typescript
public readonly StartDataQualityRulesetEvaluationRun: string;
```

- *Type:* string

[Write] glue:StartDataQualityRulesetEvaluationRun.

---

##### `StartExportLabelsTaskRun`<sup>Required</sup> <a name="StartExportLabelsTaskRun" id="@cdk_utils/iam.glue.GlueActions.property.StartExportLabelsTaskRun"></a>

```typescript
public readonly StartExportLabelsTaskRun: string;
```

- *Type:* string

[Write] glue:StartExportLabelsTaskRun.

---

##### `StartImportLabelsTaskRun`<sup>Required</sup> <a name="StartImportLabelsTaskRun" id="@cdk_utils/iam.glue.GlueActions.property.StartImportLabelsTaskRun"></a>

```typescript
public readonly StartImportLabelsTaskRun: string;
```

- *Type:* string

[Write] glue:StartImportLabelsTaskRun.

---

##### `StartJobRun`<sup>Required</sup> <a name="StartJobRun" id="@cdk_utils/iam.glue.GlueActions.property.StartJobRun"></a>

```typescript
public readonly StartJobRun: string;
```

- *Type:* string

[Write] glue:StartJobRun.

---

##### `StartJobUpgradeAnalysis`<sup>Required</sup> <a name="StartJobUpgradeAnalysis" id="@cdk_utils/iam.glue.GlueActions.property.StartJobUpgradeAnalysis"></a>

```typescript
public readonly StartJobUpgradeAnalysis: string;
```

- *Type:* string

[Write] glue:StartJobUpgradeAnalysis.

---

##### `StartMLEvaluationTaskRun`<sup>Required</sup> <a name="StartMLEvaluationTaskRun" id="@cdk_utils/iam.glue.GlueActions.property.StartMLEvaluationTaskRun"></a>

```typescript
public readonly StartMLEvaluationTaskRun: string;
```

- *Type:* string

[Write] glue:StartMLEvaluationTaskRun.

---

##### `StartMLLabelingSetGenerationTaskRun`<sup>Required</sup> <a name="StartMLLabelingSetGenerationTaskRun" id="@cdk_utils/iam.glue.GlueActions.property.StartMLLabelingSetGenerationTaskRun"></a>

```typescript
public readonly StartMLLabelingSetGenerationTaskRun: string;
```

- *Type:* string

[Write] glue:StartMLLabelingSetGenerationTaskRun.

---

##### `StartNotebook`<sup>Required</sup> <a name="StartNotebook" id="@cdk_utils/iam.glue.GlueActions.property.StartNotebook"></a>

```typescript
public readonly StartNotebook: string;
```

- *Type:* string

[PermissionManagement] glue:StartNotebook.

---

##### `StartTrigger`<sup>Required</sup> <a name="StartTrigger" id="@cdk_utils/iam.glue.GlueActions.property.StartTrigger"></a>

```typescript
public readonly StartTrigger: string;
```

- *Type:* string

[Write] glue:StartTrigger.

---

##### `StartWorkflowRun`<sup>Required</sup> <a name="StartWorkflowRun" id="@cdk_utils/iam.glue.GlueActions.property.StartWorkflowRun"></a>

```typescript
public readonly StartWorkflowRun: string;
```

- *Type:* string

[Write] glue:StartWorkflowRun.

---

##### `StopColumnStatisticsTaskRun`<sup>Required</sup> <a name="StopColumnStatisticsTaskRun" id="@cdk_utils/iam.glue.GlueActions.property.StopColumnStatisticsTaskRun"></a>

```typescript
public readonly StopColumnStatisticsTaskRun: string;
```

- *Type:* string

[Write] glue:StopColumnStatisticsTaskRun.

---

##### `StopColumnStatisticsTaskRunSchedule`<sup>Required</sup> <a name="StopColumnStatisticsTaskRunSchedule" id="@cdk_utils/iam.glue.GlueActions.property.StopColumnStatisticsTaskRunSchedule"></a>

```typescript
public readonly StopColumnStatisticsTaskRunSchedule: string;
```

- *Type:* string

[Write] glue:StopColumnStatisticsTaskRunSchedule.

---

##### `StopCrawler`<sup>Required</sup> <a name="StopCrawler" id="@cdk_utils/iam.glue.GlueActions.property.StopCrawler"></a>

```typescript
public readonly StopCrawler: string;
```

- *Type:* string

[Write] glue:StopCrawler.

---

##### `StopCrawlerSchedule`<sup>Required</sup> <a name="StopCrawlerSchedule" id="@cdk_utils/iam.glue.GlueActions.property.StopCrawlerSchedule"></a>

```typescript
public readonly StopCrawlerSchedule: string;
```

- *Type:* string

[Write] glue:StopCrawlerSchedule.

---

##### `StopJobUpgradeAnalysis`<sup>Required</sup> <a name="StopJobUpgradeAnalysis" id="@cdk_utils/iam.glue.GlueActions.property.StopJobUpgradeAnalysis"></a>

```typescript
public readonly StopJobUpgradeAnalysis: string;
```

- *Type:* string

[Write] glue:StopJobUpgradeAnalysis.

---

##### `StopSession`<sup>Required</sup> <a name="StopSession" id="@cdk_utils/iam.glue.GlueActions.property.StopSession"></a>

```typescript
public readonly StopSession: string;
```

- *Type:* string

[Write] glue:StopSession.

---

##### `StopTrigger`<sup>Required</sup> <a name="StopTrigger" id="@cdk_utils/iam.glue.GlueActions.property.StopTrigger"></a>

```typescript
public readonly StopTrigger: string;
```

- *Type:* string

[Write] glue:StopTrigger.

---

##### `StopWorkflowRun`<sup>Required</sup> <a name="StopWorkflowRun" id="@cdk_utils/iam.glue.GlueActions.property.StopWorkflowRun"></a>

```typescript
public readonly StopWorkflowRun: string;
```

- *Type:* string

[Write] glue:StopWorkflowRun.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.glue.GlueActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] glue:TagResource.

---

##### `TerminateNotebook`<sup>Required</sup> <a name="TerminateNotebook" id="@cdk_utils/iam.glue.GlueActions.property.TerminateNotebook"></a>

```typescript
public readonly TerminateNotebook: string;
```

- *Type:* string

[PermissionManagement] glue:TerminateNotebook.

---

##### `TestConnection`<sup>Required</sup> <a name="TestConnection" id="@cdk_utils/iam.glue.GlueActions.property.TestConnection"></a>

```typescript
public readonly TestConnection: string;
```

- *Type:* string

[PermissionManagement] glue:TestConnection.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.glue.GlueActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] glue:UntagResource.

---

##### `UpdateBlueprint`<sup>Required</sup> <a name="UpdateBlueprint" id="@cdk_utils/iam.glue.GlueActions.property.UpdateBlueprint"></a>

```typescript
public readonly UpdateBlueprint: string;
```

- *Type:* string

[Write] glue:UpdateBlueprint.

---

##### `UpdateCatalog`<sup>Required</sup> <a name="UpdateCatalog" id="@cdk_utils/iam.glue.GlueActions.property.UpdateCatalog"></a>

```typescript
public readonly UpdateCatalog: string;
```

- *Type:* string

[Write] glue:UpdateCatalog.

---

##### `UpdateClassifier`<sup>Required</sup> <a name="UpdateClassifier" id="@cdk_utils/iam.glue.GlueActions.property.UpdateClassifier"></a>

```typescript
public readonly UpdateClassifier: string;
```

- *Type:* string

[Write] glue:UpdateClassifier.

---

##### `UpdateColumnStatisticsForPartition`<sup>Required</sup> <a name="UpdateColumnStatisticsForPartition" id="@cdk_utils/iam.glue.GlueActions.property.UpdateColumnStatisticsForPartition"></a>

```typescript
public readonly UpdateColumnStatisticsForPartition: string;
```

- *Type:* string

[Write] glue:UpdateColumnStatisticsForPartition.

---

##### `UpdateColumnStatisticsForTable`<sup>Required</sup> <a name="UpdateColumnStatisticsForTable" id="@cdk_utils/iam.glue.GlueActions.property.UpdateColumnStatisticsForTable"></a>

```typescript
public readonly UpdateColumnStatisticsForTable: string;
```

- *Type:* string

[Write] glue:UpdateColumnStatisticsForTable.

---

##### `UpdateColumnStatisticsTaskSettings`<sup>Required</sup> <a name="UpdateColumnStatisticsTaskSettings" id="@cdk_utils/iam.glue.GlueActions.property.UpdateColumnStatisticsTaskSettings"></a>

```typescript
public readonly UpdateColumnStatisticsTaskSettings: string;
```

- *Type:* string

[Write] glue:UpdateColumnStatisticsTaskSettings.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.glue.GlueActions.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string;
```

- *Type:* string

[Write] glue:UpdateConnection.

---

##### `UpdateCrawler`<sup>Required</sup> <a name="UpdateCrawler" id="@cdk_utils/iam.glue.GlueActions.property.UpdateCrawler"></a>

```typescript
public readonly UpdateCrawler: string;
```

- *Type:* string

[Write] glue:UpdateCrawler.

---

##### `UpdateCrawlerSchedule`<sup>Required</sup> <a name="UpdateCrawlerSchedule" id="@cdk_utils/iam.glue.GlueActions.property.UpdateCrawlerSchedule"></a>

```typescript
public readonly UpdateCrawlerSchedule: string;
```

- *Type:* string

[Write] glue:UpdateCrawlerSchedule.

---

##### `UpdateDatabase`<sup>Required</sup> <a name="UpdateDatabase" id="@cdk_utils/iam.glue.GlueActions.property.UpdateDatabase"></a>

```typescript
public readonly UpdateDatabase: string;
```

- *Type:* string

[Write] glue:UpdateDatabase.

---

##### `UpdateDataQualityRuleset`<sup>Required</sup> <a name="UpdateDataQualityRuleset" id="@cdk_utils/iam.glue.GlueActions.property.UpdateDataQualityRuleset"></a>

```typescript
public readonly UpdateDataQualityRuleset: string;
```

- *Type:* string

[Write] glue:UpdateDataQualityRuleset.

---

##### `UpdateDevEndpoint`<sup>Required</sup> <a name="UpdateDevEndpoint" id="@cdk_utils/iam.glue.GlueActions.property.UpdateDevEndpoint"></a>

```typescript
public readonly UpdateDevEndpoint: string;
```

- *Type:* string

[Write] glue:UpdateDevEndpoint.

---

##### `UpdateGlueIdentityCenterConfiguration`<sup>Required</sup> <a name="UpdateGlueIdentityCenterConfiguration" id="@cdk_utils/iam.glue.GlueActions.property.UpdateGlueIdentityCenterConfiguration"></a>

```typescript
public readonly UpdateGlueIdentityCenterConfiguration: string;
```

- *Type:* string

[Write] glue:UpdateGlueIdentityCenterConfiguration.

---

##### `UpdateIntegrationResourceProperty`<sup>Required</sup> <a name="UpdateIntegrationResourceProperty" id="@cdk_utils/iam.glue.GlueActions.property.UpdateIntegrationResourceProperty"></a>

```typescript
public readonly UpdateIntegrationResourceProperty: string;
```

- *Type:* string

[Write] glue:UpdateIntegrationResourceProperty.

---

##### `UpdateIntegrationTableProperties`<sup>Required</sup> <a name="UpdateIntegrationTableProperties" id="@cdk_utils/iam.glue.GlueActions.property.UpdateIntegrationTableProperties"></a>

```typescript
public readonly UpdateIntegrationTableProperties: string;
```

- *Type:* string

[Write] glue:UpdateIntegrationTableProperties.

---

##### `UpdateJob`<sup>Required</sup> <a name="UpdateJob" id="@cdk_utils/iam.glue.GlueActions.property.UpdateJob"></a>

```typescript
public readonly UpdateJob: string;
```

- *Type:* string

[Write] glue:UpdateJob.

---

##### `UpdateJobFromSourceControl`<sup>Required</sup> <a name="UpdateJobFromSourceControl" id="@cdk_utils/iam.glue.GlueActions.property.UpdateJobFromSourceControl"></a>

```typescript
public readonly UpdateJobFromSourceControl: string;
```

- *Type:* string

[Write] glue:UpdateJobFromSourceControl.

---

##### `UpdateMLTransform`<sup>Required</sup> <a name="UpdateMLTransform" id="@cdk_utils/iam.glue.GlueActions.property.UpdateMLTransform"></a>

```typescript
public readonly UpdateMLTransform: string;
```

- *Type:* string

[Write] glue:UpdateMLTransform.

---

##### `UpdatePartition`<sup>Required</sup> <a name="UpdatePartition" id="@cdk_utils/iam.glue.GlueActions.property.UpdatePartition"></a>

```typescript
public readonly UpdatePartition: string;
```

- *Type:* string

[Write] glue:UpdatePartition.

---

##### `UpdateRegistry`<sup>Required</sup> <a name="UpdateRegistry" id="@cdk_utils/iam.glue.GlueActions.property.UpdateRegistry"></a>

```typescript
public readonly UpdateRegistry: string;
```

- *Type:* string

[Write] glue:UpdateRegistry.

---

##### `UpdateSchema`<sup>Required</sup> <a name="UpdateSchema" id="@cdk_utils/iam.glue.GlueActions.property.UpdateSchema"></a>

```typescript
public readonly UpdateSchema: string;
```

- *Type:* string

[Write] glue:UpdateSchema.

---

##### `UpdateSourceControlFromJob`<sup>Required</sup> <a name="UpdateSourceControlFromJob" id="@cdk_utils/iam.glue.GlueActions.property.UpdateSourceControlFromJob"></a>

```typescript
public readonly UpdateSourceControlFromJob: string;
```

- *Type:* string

[Write] glue:UpdateSourceControlFromJob.

---

##### `UpdateTable`<sup>Required</sup> <a name="UpdateTable" id="@cdk_utils/iam.glue.GlueActions.property.UpdateTable"></a>

```typescript
public readonly UpdateTable: string;
```

- *Type:* string

[Write] glue:UpdateTable.

---

##### `UpdateTableOptimizer`<sup>Required</sup> <a name="UpdateTableOptimizer" id="@cdk_utils/iam.glue.GlueActions.property.UpdateTableOptimizer"></a>

```typescript
public readonly UpdateTableOptimizer: string;
```

- *Type:* string

[Write] glue:UpdateTableOptimizer.

---

##### `UpdateTrigger`<sup>Required</sup> <a name="UpdateTrigger" id="@cdk_utils/iam.glue.GlueActions.property.UpdateTrigger"></a>

```typescript
public readonly UpdateTrigger: string;
```

- *Type:* string

[Write] glue:UpdateTrigger.

---

##### `UpdateUsageProfile`<sup>Required</sup> <a name="UpdateUsageProfile" id="@cdk_utils/iam.glue.GlueActions.property.UpdateUsageProfile"></a>

```typescript
public readonly UpdateUsageProfile: string;
```

- *Type:* string

[Write] glue:UpdateUsageProfile.

---

##### `UpdateUserDefinedFunction`<sup>Required</sup> <a name="UpdateUserDefinedFunction" id="@cdk_utils/iam.glue.GlueActions.property.UpdateUserDefinedFunction"></a>

```typescript
public readonly UpdateUserDefinedFunction: string;
```

- *Type:* string

[Write] glue:UpdateUserDefinedFunction.

---

##### `UpdateWorkflow`<sup>Required</sup> <a name="UpdateWorkflow" id="@cdk_utils/iam.glue.GlueActions.property.UpdateWorkflow"></a>

```typescript
public readonly UpdateWorkflow: string;
```

- *Type:* string

[Write] glue:UpdateWorkflow.

---

##### `UpgradeJob`<sup>Required</sup> <a name="UpgradeJob" id="@cdk_utils/iam.glue.GlueActions.property.UpgradeJob"></a>

```typescript
public readonly UpgradeJob: string;
```

- *Type:* string

[Write] glue:UpgradeJob.

---

##### `UseGlueStudio`<sup>Required</sup> <a name="UseGlueStudio" id="@cdk_utils/iam.glue.GlueActions.property.UseGlueStudio"></a>

```typescript
public readonly UseGlueStudio: string;
```

- *Type:* string

[PermissionManagement] glue:UseGlueStudio.

---

##### `UseMLTransforms`<sup>Required</sup> <a name="UseMLTransforms" id="@cdk_utils/iam.glue.GlueActions.property.UseMLTransforms"></a>

```typescript
public readonly UseMLTransforms: string;
```

- *Type:* string

[Write] glue:UseMLTransforms.

---

### GlueConditions <a name="GlueConditions" id="@cdk_utils/iam.glue.GlueConditions"></a>

Condition key constants and builders for glue.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.glue.GlueConditions.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

new glue.GlueConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.credentialIssuingService">credentialIssuingService</a></code> | Generates a condition block for `glue:CredentialIssuingService`. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.enabledForRedshiftAutoDiscovery">enabledForRedshiftAutoDiscovery</a></code> | Generates a condition block for `glue:EnabledForRedshiftAutoDiscovery`. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.federatedAuthorizationSource">federatedAuthorizationSource</a></code> | Generates a condition block for `glue:FederatedAuthorizationSource`. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.lakeFormationPermissions">lakeFormationPermissions</a></code> | Generates a condition block for `glue:LakeFormationPermissions`. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.roleAssumedBy">roleAssumedBy</a></code> | Generates a condition block for `glue:RoleAssumedBy`. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.securityGroupIds">securityGroupIds</a></code> | Generates a condition block for `glue:SecurityGroupIds`. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.subnetIds">subnetIds</a></code> | Generates a condition block for `glue:SubnetIds`. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.vpcIds">vpcIds</a></code> | Generates a condition block for `glue:VpcIds`. |

---

##### `credentialIssuingService` <a name="credentialIssuingService" id="@cdk_utils/iam.glue.GlueConditions.credentialIssuingService"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.credentialIssuingService(value: string)
```

Generates a condition block for `glue:CredentialIssuingService`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.glue.GlueConditions.credentialIssuingService.parameter.value"></a>

- *Type:* string

---

##### `enabledForRedshiftAutoDiscovery` <a name="enabledForRedshiftAutoDiscovery" id="@cdk_utils/iam.glue.GlueConditions.enabledForRedshiftAutoDiscovery"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.enabledForRedshiftAutoDiscovery(value: boolean)
```

Generates a condition block for `glue:EnabledForRedshiftAutoDiscovery`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.glue.GlueConditions.enabledForRedshiftAutoDiscovery.parameter.value"></a>

- *Type:* boolean

---

##### `federatedAuthorizationSource` <a name="federatedAuthorizationSource" id="@cdk_utils/iam.glue.GlueConditions.federatedAuthorizationSource"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.federatedAuthorizationSource(value: string)
```

Generates a condition block for `glue:FederatedAuthorizationSource`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.glue.GlueConditions.federatedAuthorizationSource.parameter.value"></a>

- *Type:* string

---

##### `lakeFormationPermissions` <a name="lakeFormationPermissions" id="@cdk_utils/iam.glue.GlueConditions.lakeFormationPermissions"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.lakeFormationPermissions(value: string)
```

Generates a condition block for `glue:LakeFormationPermissions`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.glue.GlueConditions.lakeFormationPermissions.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.glue.GlueConditions.requestTag"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.glue.GlueConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.glue.GlueConditions.resourceTag"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.glue.GlueConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `roleAssumedBy` <a name="roleAssumedBy" id="@cdk_utils/iam.glue.GlueConditions.roleAssumedBy"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.roleAssumedBy(value: string)
```

Generates a condition block for `glue:RoleAssumedBy`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.glue.GlueConditions.roleAssumedBy.parameter.value"></a>

- *Type:* string

---

##### `securityGroupIds` <a name="securityGroupIds" id="@cdk_utils/iam.glue.GlueConditions.securityGroupIds"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.securityGroupIds(values: string[])
```

Generates a condition block for `glue:SecurityGroupIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.glue.GlueConditions.securityGroupIds.parameter.values"></a>

- *Type:* string[]

---

##### `subnetIds` <a name="subnetIds" id="@cdk_utils/iam.glue.GlueConditions.subnetIds"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.subnetIds(values: string[])
```

Generates a condition block for `glue:SubnetIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.glue.GlueConditions.subnetIds.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.glue.GlueConditions.tagKeys"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.glue.GlueConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `vpcIds` <a name="vpcIds" id="@cdk_utils/iam.glue.GlueConditions.vpcIds"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueConditions.vpcIds(values: string[])
```

Generates a condition block for `glue:VpcIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.glue.GlueConditions.vpcIds.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetCatalogConditionKeys">actionGetCatalogConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCatalog action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetCatalogImportStatusConditionKeys">actionGetCatalogImportStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCatalogImportStatus action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetCatalogsConditionKeys">actionGetCatalogsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCatalogs action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetColumnStatisticsForPartitionConditionKeys">actionGetColumnStatisticsForPartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetColumnStatisticsForPartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetColumnStatisticsForTableConditionKeys">actionGetColumnStatisticsForTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetColumnStatisticsForTable action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetConnectionConditionKeys">actionGetConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConnection action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetConnectionsConditionKeys">actionGetConnectionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConnections action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetDatabaseConditionKeys">actionGetDatabaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDatabase action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetDatabasesConditionKeys">actionGetDatabasesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDatabases action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetPartitionConditionKeys">actionGetPartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetPartitionIndexesConditionKeys">actionGetPartitionIndexesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPartitionIndexes action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetPartitionsConditionKeys">actionGetPartitionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPartitions action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetTableConditionKeys">actionGetTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTable action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetTablesConditionKeys">actionGetTablesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTables action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetTableVersionConditionKeys">actionGetTableVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableVersion action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetTableVersionsConditionKeys">actionGetTableVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTableVersions action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetUserDefinedFunctionConditionKeys">actionGetUserDefinedFunctionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetUserDefinedFunction action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.actionGetUserDefinedFunctionsConditionKeys">actionGetUserDefinedFunctionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetUserDefinedFunctions action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.BatchCreatePartitionConditionKeys">BatchCreatePartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchCreatePartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.BatchDeleteConnectionConditionKeys">BatchDeleteConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDeleteConnection action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.BatchDeletePartitionConditionKeys">BatchDeletePartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDeletePartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.BatchDeleteTableConditionKeys">BatchDeleteTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDeleteTable action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.BatchDeleteTableVersionConditionKeys">BatchDeleteTableVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDeleteTableVersion action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.BatchGetPartitionConditionKeys">BatchGetPartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchGetPartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.BatchUpdatePartitionConditionKeys">BatchUpdatePartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchUpdatePartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateBlueprintConditionKeys">CreateBlueprintConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBlueprint action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateCatalogConditionKeys">CreateCatalogConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCatalog action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateConnectionConditionKeys">CreateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnection action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateCrawlerConditionKeys">CreateCrawlerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCrawler action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateCustomEntityTypeConditionKeys">CreateCustomEntityTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomEntityType action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateDatabaseConditionKeys">CreateDatabaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDatabase action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateDataQualityRulesetConditionKeys">CreateDataQualityRulesetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataQualityRuleset action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateDevEndpointConditionKeys">CreateDevEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDevEndpoint action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateIntegrationConditionKeys">CreateIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIntegration action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateIntegrationResourcePropertyConditionKeys">CreateIntegrationResourcePropertyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIntegrationResourceProperty action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateJobConditionKeys">CreateJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJob action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateMLTransformConditionKeys">CreateMLTransformConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMLTransform action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreatePartitionConditionKeys">CreatePartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreatePartitionIndexConditionKeys">CreatePartitionIndexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePartitionIndex action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateRegistryConditionKeys">CreateRegistryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRegistry action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateSchemaConditionKeys">CreateSchemaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSchema action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateSessionConditionKeys">CreateSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSession action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateTableConditionKeys">CreateTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTable action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateTriggerConditionKeys">CreateTriggerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTrigger action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateUsageProfileConditionKeys">CreateUsageProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUsageProfile action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateUserDefinedFunctionConditionKeys">CreateUserDefinedFunctionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUserDefinedFunction action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CreateWorkflowConditionKeys">CreateWorkflowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkflow action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.CREDENTIAL_ISSUING_SERVICE">CREDENTIAL_ISSUING_SERVICE</a></code> | <code>string</code> | Condition key: glue:CredentialIssuingService (String). |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeleteCatalogConditionKeys">DeleteCatalogConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCatalog action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeleteColumnStatisticsForPartitionConditionKeys">DeleteColumnStatisticsForPartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteColumnStatisticsForPartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeleteColumnStatisticsForTableConditionKeys">DeleteColumnStatisticsForTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteColumnStatisticsForTable action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeleteConnectionConditionKeys">DeleteConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteConnection action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeleteDatabaseConditionKeys">DeleteDatabaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDatabase action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeleteIntegrationConditionKeys">DeleteIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteIntegration action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeletePartitionConditionKeys">DeletePartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeletePartitionIndexConditionKeys">DeletePartitionIndexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePartitionIndex action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeleteTableConditionKeys">DeleteTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTable action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeleteTableVersionConditionKeys">DeleteTableVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTableVersion action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DeleteUserDefinedFunctionConditionKeys">DeleteUserDefinedFunctionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUserDefinedFunction action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.DescribeIntegrationsConditionKeys">DescribeIntegrationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeIntegrations action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.ENABLED_FOR_REDSHIFT_AUTO_DISCOVERY">ENABLED_FOR_REDSHIFT_AUTO_DISCOVERY</a></code> | <code>string</code> | Condition key: glue:EnabledForRedshiftAutoDiscovery (Bool). |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.FederateAuthorizationConditionKeys">FederateAuthorizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the FederateAuthorization action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.FEDERATED_AUTHORIZATION_SOURCE">FEDERATED_AUTHORIZATION_SOURCE</a></code> | <code>string</code> | Condition key: glue:FederatedAuthorizationSource (String). |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.ImportCatalogToGlueConditionKeys">ImportCatalogToGlueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportCatalogToGlue action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.LAKE_FORMATION_PERMISSIONS">LAKE_FORMATION_PERMISSIONS</a></code> | <code>string</code> | Condition key: glue:LakeFormationPermissions (String). |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.ModifyIntegrationConditionKeys">ModifyIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyIntegration action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.RegisterConnectionTypeConditionKeys">RegisterConnectionTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterConnectionType action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.RenameTableConditionKeys">RenameTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RenameTable action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.ROLE_ASSUMED_BY">ROLE_ASSUMED_BY</a></code> | <code>string</code> | Condition key: glue:RoleAssumedBy (String). |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.SearchTablesConditionKeys">SearchTablesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchTables action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.SECURITY_GROUP_IDS">SECURITY_GROUP_IDS</a></code> | <code>string</code> | Condition key: glue:SecurityGroupIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.SUBNET_IDS">SUBNET_IDS</a></code> | <code>string</code> | Condition key: glue:SubnetIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.UpdateCatalogConditionKeys">UpdateCatalogConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCatalog action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.UpdateColumnStatisticsForPartitionConditionKeys">UpdateColumnStatisticsForPartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateColumnStatisticsForPartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.UpdateColumnStatisticsForTableConditionKeys">UpdateColumnStatisticsForTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateColumnStatisticsForTable action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.UpdateConnectionConditionKeys">UpdateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConnection action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.UpdateDatabaseConditionKeys">UpdateDatabaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDatabase action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.UpdateJobConditionKeys">UpdateJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateJob action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.UpdatePartitionConditionKeys">UpdatePartitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePartition action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.UpdateTableConditionKeys">UpdateTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTable action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.UpdateUserDefinedFunctionConditionKeys">UpdateUserDefinedFunctionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserDefinedFunction action. |
| <code><a href="#@cdk_utils/iam.glue.GlueConditions.property.VPC_IDS">VPC_IDS</a></code> | <code>string</code> | Condition key: glue:VpcIds (ArrayOfString). |

---

##### `actionGetCatalogConditionKeys`<sup>Required</sup> <a name="actionGetCatalogConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetCatalogConditionKeys"></a>

```typescript
public readonly actionGetCatalogConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCatalog action.

---

##### `actionGetCatalogImportStatusConditionKeys`<sup>Required</sup> <a name="actionGetCatalogImportStatusConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetCatalogImportStatusConditionKeys"></a>

```typescript
public readonly actionGetCatalogImportStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCatalogImportStatus action.

---

##### `actionGetCatalogsConditionKeys`<sup>Required</sup> <a name="actionGetCatalogsConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetCatalogsConditionKeys"></a>

```typescript
public readonly actionGetCatalogsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCatalogs action.

---

##### `actionGetColumnStatisticsForPartitionConditionKeys`<sup>Required</sup> <a name="actionGetColumnStatisticsForPartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetColumnStatisticsForPartitionConditionKeys"></a>

```typescript
public readonly actionGetColumnStatisticsForPartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetColumnStatisticsForPartition action.

---

##### `actionGetColumnStatisticsForTableConditionKeys`<sup>Required</sup> <a name="actionGetColumnStatisticsForTableConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetColumnStatisticsForTableConditionKeys"></a>

```typescript
public readonly actionGetColumnStatisticsForTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetColumnStatisticsForTable action.

---

##### `actionGetConnectionConditionKeys`<sup>Required</sup> <a name="actionGetConnectionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetConnectionConditionKeys"></a>

```typescript
public readonly actionGetConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConnection action.

---

##### `actionGetConnectionsConditionKeys`<sup>Required</sup> <a name="actionGetConnectionsConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetConnectionsConditionKeys"></a>

```typescript
public readonly actionGetConnectionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConnections action.

---

##### `actionGetDatabaseConditionKeys`<sup>Required</sup> <a name="actionGetDatabaseConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetDatabaseConditionKeys"></a>

```typescript
public readonly actionGetDatabaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDatabase action.

---

##### `actionGetDatabasesConditionKeys`<sup>Required</sup> <a name="actionGetDatabasesConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetDatabasesConditionKeys"></a>

```typescript
public readonly actionGetDatabasesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDatabases action.

---

##### `actionGetPartitionConditionKeys`<sup>Required</sup> <a name="actionGetPartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetPartitionConditionKeys"></a>

```typescript
public readonly actionGetPartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPartition action.

---

##### `actionGetPartitionIndexesConditionKeys`<sup>Required</sup> <a name="actionGetPartitionIndexesConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetPartitionIndexesConditionKeys"></a>

```typescript
public readonly actionGetPartitionIndexesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPartitionIndexes action.

---

##### `actionGetPartitionsConditionKeys`<sup>Required</sup> <a name="actionGetPartitionsConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetPartitionsConditionKeys"></a>

```typescript
public readonly actionGetPartitionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPartitions action.

---

##### `actionGetTableConditionKeys`<sup>Required</sup> <a name="actionGetTableConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetTableConditionKeys"></a>

```typescript
public readonly actionGetTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTable action.

---

##### `actionGetTablesConditionKeys`<sup>Required</sup> <a name="actionGetTablesConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetTablesConditionKeys"></a>

```typescript
public readonly actionGetTablesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTables action.

---

##### `actionGetTableVersionConditionKeys`<sup>Required</sup> <a name="actionGetTableVersionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetTableVersionConditionKeys"></a>

```typescript
public readonly actionGetTableVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableVersion action.

---

##### `actionGetTableVersionsConditionKeys`<sup>Required</sup> <a name="actionGetTableVersionsConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetTableVersionsConditionKeys"></a>

```typescript
public readonly actionGetTableVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTableVersions action.

---

##### `actionGetUserDefinedFunctionConditionKeys`<sup>Required</sup> <a name="actionGetUserDefinedFunctionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetUserDefinedFunctionConditionKeys"></a>

```typescript
public readonly actionGetUserDefinedFunctionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetUserDefinedFunction action.

---

##### `actionGetUserDefinedFunctionsConditionKeys`<sup>Required</sup> <a name="actionGetUserDefinedFunctionsConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.actionGetUserDefinedFunctionsConditionKeys"></a>

```typescript
public readonly actionGetUserDefinedFunctionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetUserDefinedFunctions action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.glue.GlueConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.glue.GlueConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.glue.GlueConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchCreatePartitionConditionKeys`<sup>Required</sup> <a name="BatchCreatePartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.BatchCreatePartitionConditionKeys"></a>

```typescript
public readonly BatchCreatePartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchCreatePartition action.

---

##### `BatchDeleteConnectionConditionKeys`<sup>Required</sup> <a name="BatchDeleteConnectionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.BatchDeleteConnectionConditionKeys"></a>

```typescript
public readonly BatchDeleteConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDeleteConnection action.

---

##### `BatchDeletePartitionConditionKeys`<sup>Required</sup> <a name="BatchDeletePartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.BatchDeletePartitionConditionKeys"></a>

```typescript
public readonly BatchDeletePartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDeletePartition action.

---

##### `BatchDeleteTableConditionKeys`<sup>Required</sup> <a name="BatchDeleteTableConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.BatchDeleteTableConditionKeys"></a>

```typescript
public readonly BatchDeleteTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDeleteTable action.

---

##### `BatchDeleteTableVersionConditionKeys`<sup>Required</sup> <a name="BatchDeleteTableVersionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.BatchDeleteTableVersionConditionKeys"></a>

```typescript
public readonly BatchDeleteTableVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDeleteTableVersion action.

---

##### `BatchGetPartitionConditionKeys`<sup>Required</sup> <a name="BatchGetPartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.BatchGetPartitionConditionKeys"></a>

```typescript
public readonly BatchGetPartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchGetPartition action.

---

##### `BatchUpdatePartitionConditionKeys`<sup>Required</sup> <a name="BatchUpdatePartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.BatchUpdatePartitionConditionKeys"></a>

```typescript
public readonly BatchUpdatePartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchUpdatePartition action.

---

##### `CreateBlueprintConditionKeys`<sup>Required</sup> <a name="CreateBlueprintConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateBlueprintConditionKeys"></a>

```typescript
public readonly CreateBlueprintConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBlueprint action.

---

##### `CreateCatalogConditionKeys`<sup>Required</sup> <a name="CreateCatalogConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateCatalogConditionKeys"></a>

```typescript
public readonly CreateCatalogConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCatalog action.

---

##### `CreateConnectionConditionKeys`<sup>Required</sup> <a name="CreateConnectionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateConnectionConditionKeys"></a>

```typescript
public readonly CreateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnection action.

---

##### `CreateCrawlerConditionKeys`<sup>Required</sup> <a name="CreateCrawlerConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateCrawlerConditionKeys"></a>

```typescript
public readonly CreateCrawlerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCrawler action.

---

##### `CreateCustomEntityTypeConditionKeys`<sup>Required</sup> <a name="CreateCustomEntityTypeConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateCustomEntityTypeConditionKeys"></a>

```typescript
public readonly CreateCustomEntityTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomEntityType action.

---

##### `CreateDatabaseConditionKeys`<sup>Required</sup> <a name="CreateDatabaseConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateDatabaseConditionKeys"></a>

```typescript
public readonly CreateDatabaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDatabase action.

---

##### `CreateDataQualityRulesetConditionKeys`<sup>Required</sup> <a name="CreateDataQualityRulesetConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateDataQualityRulesetConditionKeys"></a>

```typescript
public readonly CreateDataQualityRulesetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataQualityRuleset action.

---

##### `CreateDevEndpointConditionKeys`<sup>Required</sup> <a name="CreateDevEndpointConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateDevEndpointConditionKeys"></a>

```typescript
public readonly CreateDevEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDevEndpoint action.

---

##### `CreateIntegrationConditionKeys`<sup>Required</sup> <a name="CreateIntegrationConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateIntegrationConditionKeys"></a>

```typescript
public readonly CreateIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIntegration action.

---

##### `CreateIntegrationResourcePropertyConditionKeys`<sup>Required</sup> <a name="CreateIntegrationResourcePropertyConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateIntegrationResourcePropertyConditionKeys"></a>

```typescript
public readonly CreateIntegrationResourcePropertyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIntegrationResourceProperty action.

---

##### `CreateJobConditionKeys`<sup>Required</sup> <a name="CreateJobConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateJobConditionKeys"></a>

```typescript
public readonly CreateJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJob action.

---

##### `CreateMLTransformConditionKeys`<sup>Required</sup> <a name="CreateMLTransformConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateMLTransformConditionKeys"></a>

```typescript
public readonly CreateMLTransformConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMLTransform action.

---

##### `CreatePartitionConditionKeys`<sup>Required</sup> <a name="CreatePartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreatePartitionConditionKeys"></a>

```typescript
public readonly CreatePartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePartition action.

---

##### `CreatePartitionIndexConditionKeys`<sup>Required</sup> <a name="CreatePartitionIndexConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreatePartitionIndexConditionKeys"></a>

```typescript
public readonly CreatePartitionIndexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePartitionIndex action.

---

##### `CreateRegistryConditionKeys`<sup>Required</sup> <a name="CreateRegistryConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateRegistryConditionKeys"></a>

```typescript
public readonly CreateRegistryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRegistry action.

---

##### `CreateSchemaConditionKeys`<sup>Required</sup> <a name="CreateSchemaConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateSchemaConditionKeys"></a>

```typescript
public readonly CreateSchemaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSchema action.

---

##### `CreateSessionConditionKeys`<sup>Required</sup> <a name="CreateSessionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateSessionConditionKeys"></a>

```typescript
public readonly CreateSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSession action.

---

##### `CreateTableConditionKeys`<sup>Required</sup> <a name="CreateTableConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateTableConditionKeys"></a>

```typescript
public readonly CreateTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTable action.

---

##### `CreateTriggerConditionKeys`<sup>Required</sup> <a name="CreateTriggerConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateTriggerConditionKeys"></a>

```typescript
public readonly CreateTriggerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTrigger action.

---

##### `CreateUsageProfileConditionKeys`<sup>Required</sup> <a name="CreateUsageProfileConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateUsageProfileConditionKeys"></a>

```typescript
public readonly CreateUsageProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUsageProfile action.

---

##### `CreateUserDefinedFunctionConditionKeys`<sup>Required</sup> <a name="CreateUserDefinedFunctionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateUserDefinedFunctionConditionKeys"></a>

```typescript
public readonly CreateUserDefinedFunctionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUserDefinedFunction action.

---

##### `CreateWorkflowConditionKeys`<sup>Required</sup> <a name="CreateWorkflowConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.CreateWorkflowConditionKeys"></a>

```typescript
public readonly CreateWorkflowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkflow action.

---

##### `CREDENTIAL_ISSUING_SERVICE`<sup>Required</sup> <a name="CREDENTIAL_ISSUING_SERVICE" id="@cdk_utils/iam.glue.GlueConditions.property.CREDENTIAL_ISSUING_SERVICE"></a>

```typescript
public readonly CREDENTIAL_ISSUING_SERVICE: string;
```

- *Type:* string

Condition key: glue:CredentialIssuingService (String).

---

##### `DeleteCatalogConditionKeys`<sup>Required</sup> <a name="DeleteCatalogConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeleteCatalogConditionKeys"></a>

```typescript
public readonly DeleteCatalogConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCatalog action.

---

##### `DeleteColumnStatisticsForPartitionConditionKeys`<sup>Required</sup> <a name="DeleteColumnStatisticsForPartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeleteColumnStatisticsForPartitionConditionKeys"></a>

```typescript
public readonly DeleteColumnStatisticsForPartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteColumnStatisticsForPartition action.

---

##### `DeleteColumnStatisticsForTableConditionKeys`<sup>Required</sup> <a name="DeleteColumnStatisticsForTableConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeleteColumnStatisticsForTableConditionKeys"></a>

```typescript
public readonly DeleteColumnStatisticsForTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteColumnStatisticsForTable action.

---

##### `DeleteConnectionConditionKeys`<sup>Required</sup> <a name="DeleteConnectionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeleteConnectionConditionKeys"></a>

```typescript
public readonly DeleteConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteConnection action.

---

##### `DeleteDatabaseConditionKeys`<sup>Required</sup> <a name="DeleteDatabaseConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeleteDatabaseConditionKeys"></a>

```typescript
public readonly DeleteDatabaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDatabase action.

---

##### `DeleteIntegrationConditionKeys`<sup>Required</sup> <a name="DeleteIntegrationConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeleteIntegrationConditionKeys"></a>

```typescript
public readonly DeleteIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteIntegration action.

---

##### `DeletePartitionConditionKeys`<sup>Required</sup> <a name="DeletePartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeletePartitionConditionKeys"></a>

```typescript
public readonly DeletePartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePartition action.

---

##### `DeletePartitionIndexConditionKeys`<sup>Required</sup> <a name="DeletePartitionIndexConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeletePartitionIndexConditionKeys"></a>

```typescript
public readonly DeletePartitionIndexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePartitionIndex action.

---

##### `DeleteTableConditionKeys`<sup>Required</sup> <a name="DeleteTableConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeleteTableConditionKeys"></a>

```typescript
public readonly DeleteTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTable action.

---

##### `DeleteTableVersionConditionKeys`<sup>Required</sup> <a name="DeleteTableVersionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeleteTableVersionConditionKeys"></a>

```typescript
public readonly DeleteTableVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTableVersion action.

---

##### `DeleteUserDefinedFunctionConditionKeys`<sup>Required</sup> <a name="DeleteUserDefinedFunctionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DeleteUserDefinedFunctionConditionKeys"></a>

```typescript
public readonly DeleteUserDefinedFunctionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUserDefinedFunction action.

---

##### `DescribeIntegrationsConditionKeys`<sup>Required</sup> <a name="DescribeIntegrationsConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.DescribeIntegrationsConditionKeys"></a>

```typescript
public readonly DescribeIntegrationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeIntegrations action.

---

##### `ENABLED_FOR_REDSHIFT_AUTO_DISCOVERY`<sup>Required</sup> <a name="ENABLED_FOR_REDSHIFT_AUTO_DISCOVERY" id="@cdk_utils/iam.glue.GlueConditions.property.ENABLED_FOR_REDSHIFT_AUTO_DISCOVERY"></a>

```typescript
public readonly ENABLED_FOR_REDSHIFT_AUTO_DISCOVERY: string;
```

- *Type:* string

Condition key: glue:EnabledForRedshiftAutoDiscovery (Bool).

---

##### `FederateAuthorizationConditionKeys`<sup>Required</sup> <a name="FederateAuthorizationConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.FederateAuthorizationConditionKeys"></a>

```typescript
public readonly FederateAuthorizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the FederateAuthorization action.

---

##### `FEDERATED_AUTHORIZATION_SOURCE`<sup>Required</sup> <a name="FEDERATED_AUTHORIZATION_SOURCE" id="@cdk_utils/iam.glue.GlueConditions.property.FEDERATED_AUTHORIZATION_SOURCE"></a>

```typescript
public readonly FEDERATED_AUTHORIZATION_SOURCE: string;
```

- *Type:* string

Condition key: glue:FederatedAuthorizationSource (String).

---

##### `ImportCatalogToGlueConditionKeys`<sup>Required</sup> <a name="ImportCatalogToGlueConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.ImportCatalogToGlueConditionKeys"></a>

```typescript
public readonly ImportCatalogToGlueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportCatalogToGlue action.

---

##### `LAKE_FORMATION_PERMISSIONS`<sup>Required</sup> <a name="LAKE_FORMATION_PERMISSIONS" id="@cdk_utils/iam.glue.GlueConditions.property.LAKE_FORMATION_PERMISSIONS"></a>

```typescript
public readonly LAKE_FORMATION_PERMISSIONS: string;
```

- *Type:* string

Condition key: glue:LakeFormationPermissions (String).

---

##### `ModifyIntegrationConditionKeys`<sup>Required</sup> <a name="ModifyIntegrationConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.ModifyIntegrationConditionKeys"></a>

```typescript
public readonly ModifyIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyIntegration action.

---

##### `RegisterConnectionTypeConditionKeys`<sup>Required</sup> <a name="RegisterConnectionTypeConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.RegisterConnectionTypeConditionKeys"></a>

```typescript
public readonly RegisterConnectionTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterConnectionType action.

---

##### `RenameTableConditionKeys`<sup>Required</sup> <a name="RenameTableConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.RenameTableConditionKeys"></a>

```typescript
public readonly RenameTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RenameTable action.

---

##### `ROLE_ASSUMED_BY`<sup>Required</sup> <a name="ROLE_ASSUMED_BY" id="@cdk_utils/iam.glue.GlueConditions.property.ROLE_ASSUMED_BY"></a>

```typescript
public readonly ROLE_ASSUMED_BY: string;
```

- *Type:* string

Condition key: glue:RoleAssumedBy (String).

---

##### `SearchTablesConditionKeys`<sup>Required</sup> <a name="SearchTablesConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.SearchTablesConditionKeys"></a>

```typescript
public readonly SearchTablesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchTables action.

---

##### `SECURITY_GROUP_IDS`<sup>Required</sup> <a name="SECURITY_GROUP_IDS" id="@cdk_utils/iam.glue.GlueConditions.property.SECURITY_GROUP_IDS"></a>

```typescript
public readonly SECURITY_GROUP_IDS: string;
```

- *Type:* string

Condition key: glue:SecurityGroupIds (ArrayOfString).

---

##### `SUBNET_IDS`<sup>Required</sup> <a name="SUBNET_IDS" id="@cdk_utils/iam.glue.GlueConditions.property.SUBNET_IDS"></a>

```typescript
public readonly SUBNET_IDS: string;
```

- *Type:* string

Condition key: glue:SubnetIds (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCatalogConditionKeys`<sup>Required</sup> <a name="UpdateCatalogConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.UpdateCatalogConditionKeys"></a>

```typescript
public readonly UpdateCatalogConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCatalog action.

---

##### `UpdateColumnStatisticsForPartitionConditionKeys`<sup>Required</sup> <a name="UpdateColumnStatisticsForPartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.UpdateColumnStatisticsForPartitionConditionKeys"></a>

```typescript
public readonly UpdateColumnStatisticsForPartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateColumnStatisticsForPartition action.

---

##### `UpdateColumnStatisticsForTableConditionKeys`<sup>Required</sup> <a name="UpdateColumnStatisticsForTableConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.UpdateColumnStatisticsForTableConditionKeys"></a>

```typescript
public readonly UpdateColumnStatisticsForTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateColumnStatisticsForTable action.

---

##### `UpdateConnectionConditionKeys`<sup>Required</sup> <a name="UpdateConnectionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.UpdateConnectionConditionKeys"></a>

```typescript
public readonly UpdateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConnection action.

---

##### `UpdateDatabaseConditionKeys`<sup>Required</sup> <a name="UpdateDatabaseConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.UpdateDatabaseConditionKeys"></a>

```typescript
public readonly UpdateDatabaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDatabase action.

---

##### `UpdateJobConditionKeys`<sup>Required</sup> <a name="UpdateJobConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.UpdateJobConditionKeys"></a>

```typescript
public readonly UpdateJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateJob action.

---

##### `UpdatePartitionConditionKeys`<sup>Required</sup> <a name="UpdatePartitionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.UpdatePartitionConditionKeys"></a>

```typescript
public readonly UpdatePartitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePartition action.

---

##### `UpdateTableConditionKeys`<sup>Required</sup> <a name="UpdateTableConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.UpdateTableConditionKeys"></a>

```typescript
public readonly UpdateTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTable action.

---

##### `UpdateUserDefinedFunctionConditionKeys`<sup>Required</sup> <a name="UpdateUserDefinedFunctionConditionKeys" id="@cdk_utils/iam.glue.GlueConditions.property.UpdateUserDefinedFunctionConditionKeys"></a>

```typescript
public readonly UpdateUserDefinedFunctionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserDefinedFunction action.

---

##### `VPC_IDS`<sup>Required</sup> <a name="VPC_IDS" id="@cdk_utils/iam.glue.GlueConditions.property.VPC_IDS"></a>

```typescript
public readonly VPC_IDS: string;
```

- *Type:* string

Condition key: glue:VpcIds (ArrayOfString).

---

### GlueOperations <a name="GlueOperations" id="@cdk_utils/iam.glue.GlueOperations"></a>

API operation to required IAM actions mapping for glue.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.glue.GlueOperations.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

new glue.GlueOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.AssociateGlossaryTerms">AssociateGlossaryTerms</a></code> | <code>string[]</code> | IAM actions required for the AssociateGlossaryTerms API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchCreatePartition">BatchCreatePartition</a></code> | <code>string[]</code> | IAM actions required for the BatchCreatePartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchDeleteConnection">BatchDeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchDeletePartition">BatchDeletePartition</a></code> | <code>string[]</code> | IAM actions required for the BatchDeletePartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchDeleteTable">BatchDeleteTable</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteTable API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchDeleteTableVersion">BatchDeleteTableVersion</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteTableVersion API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetBlueprints">BatchGetBlueprints</a></code> | <code>string[]</code> | IAM actions required for the BatchGetBlueprints API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetCrawlers">BatchGetCrawlers</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCrawlers API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetCustomEntityTypes">BatchGetCustomEntityTypes</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCustomEntityTypes API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetDataQualityResult">BatchGetDataQualityResult</a></code> | <code>string[]</code> | IAM actions required for the BatchGetDataQualityResult API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetDataQualityRulesetEvaluationRun">BatchGetDataQualityRulesetEvaluationRun</a></code> | <code>string[]</code> | IAM actions required for the BatchGetDataQualityRulesetEvaluationRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetDevEndpoints">BatchGetDevEndpoints</a></code> | <code>string[]</code> | IAM actions required for the BatchGetDevEndpoints API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetIterableForms">BatchGetIterableForms</a></code> | <code>string[]</code> | IAM actions required for the BatchGetIterableForms API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetJobs">BatchGetJobs</a></code> | <code>string[]</code> | IAM actions required for the BatchGetJobs API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetPartition">BatchGetPartition</a></code> | <code>string[]</code> | IAM actions required for the BatchGetPartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetTableOptimizer">BatchGetTableOptimizer</a></code> | <code>string[]</code> | IAM actions required for the BatchGetTableOptimizer API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetTriggers">BatchGetTriggers</a></code> | <code>string[]</code> | IAM actions required for the BatchGetTriggers API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchGetWorkflows">BatchGetWorkflows</a></code> | <code>string[]</code> | IAM actions required for the BatchGetWorkflows API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchPutDataQualityStatisticAnnotation">BatchPutDataQualityStatisticAnnotation</a></code> | <code>string[]</code> | IAM actions required for the BatchPutDataQualityStatisticAnnotation API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchStopJobRun">BatchStopJobRun</a></code> | <code>string[]</code> | IAM actions required for the BatchStopJobRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.BatchUpdatePartition">BatchUpdatePartition</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdatePartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CancelDataQualityRuleRecommendationRun">CancelDataQualityRuleRecommendationRun</a></code> | <code>string[]</code> | IAM actions required for the CancelDataQualityRuleRecommendationRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CancelDataQualityRulesetEvaluationRun">CancelDataQualityRulesetEvaluationRun</a></code> | <code>string[]</code> | IAM actions required for the CancelDataQualityRulesetEvaluationRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CancelMLTaskRun">CancelMLTaskRun</a></code> | <code>string[]</code> | IAM actions required for the CancelMLTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CancelStatement">CancelStatement</a></code> | <code>string[]</code> | IAM actions required for the CancelStatement API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CheckSchemaVersionValidity">CheckSchemaVersionValidity</a></code> | <code>string[]</code> | IAM actions required for the CheckSchemaVersionValidity API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateBlueprint">CreateBlueprint</a></code> | <code>string[]</code> | IAM actions required for the CreateBlueprint API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateCatalog">CreateCatalog</a></code> | <code>string[]</code> | IAM actions required for the CreateCatalog API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateClassifier">CreateClassifier</a></code> | <code>string[]</code> | IAM actions required for the CreateClassifier API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateColumnStatisticsTaskSettings">CreateColumnStatisticsTaskSettings</a></code> | <code>string[]</code> | IAM actions required for the CreateColumnStatisticsTaskSettings API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateConnection">CreateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateConnection API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateCrawler">CreateCrawler</a></code> | <code>string[]</code> | IAM actions required for the CreateCrawler API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateCustomEntityType">CreateCustomEntityType</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomEntityType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateDatabase">CreateDatabase</a></code> | <code>string[]</code> | IAM actions required for the CreateDatabase API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateDataQualityRuleset">CreateDataQualityRuleset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataQualityRuleset API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateDevEndpoint">CreateDevEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateDevEndpoint API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateGlossary">CreateGlossary</a></code> | <code>string[]</code> | IAM actions required for the CreateGlossary API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateGlossaryTerm">CreateGlossaryTerm</a></code> | <code>string[]</code> | IAM actions required for the CreateGlossaryTerm API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateGlueIdentityCenterConfiguration">CreateGlueIdentityCenterConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateGlueIdentityCenterConfiguration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateIntegration">CreateIntegration</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateIntegrationResourceProperty">CreateIntegrationResourceProperty</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegrationResourceProperty API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateIntegrationTableProperties">CreateIntegrationTableProperties</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegrationTableProperties API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateJob">CreateJob</a></code> | <code>string[]</code> | IAM actions required for the CreateJob API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateMLTransform">CreateMLTransform</a></code> | <code>string[]</code> | IAM actions required for the CreateMLTransform API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreatePartition">CreatePartition</a></code> | <code>string[]</code> | IAM actions required for the CreatePartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreatePartitionIndex">CreatePartitionIndex</a></code> | <code>string[]</code> | IAM actions required for the CreatePartitionIndex API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateRegistry">CreateRegistry</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistry API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateSchema">CreateSchema</a></code> | <code>string[]</code> | IAM actions required for the CreateSchema API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateScript">CreateScript</a></code> | <code>string[]</code> | IAM actions required for the CreateScript API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateSecurityConfiguration">CreateSecurityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateSecurityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateSession">CreateSession</a></code> | <code>string[]</code> | IAM actions required for the CreateSession API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateTable">CreateTable</a></code> | <code>string[]</code> | IAM actions required for the CreateTable API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateTableOptimizer">CreateTableOptimizer</a></code> | <code>string[]</code> | IAM actions required for the CreateTableOptimizer API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateTrigger">CreateTrigger</a></code> | <code>string[]</code> | IAM actions required for the CreateTrigger API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateUsageProfile">CreateUsageProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateUsageProfile API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateUserDefinedFunction">CreateUserDefinedFunction</a></code> | <code>string[]</code> | IAM actions required for the CreateUserDefinedFunction API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflow API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteAsset">DeleteAsset</a></code> | <code>string[]</code> | IAM actions required for the DeleteAsset API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteAssetType">DeleteAssetType</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssetType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteAttachment">DeleteAttachment</a></code> | <code>string[]</code> | IAM actions required for the DeleteAttachment API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteBlueprint">DeleteBlueprint</a></code> | <code>string[]</code> | IAM actions required for the DeleteBlueprint API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteCatalog">DeleteCatalog</a></code> | <code>string[]</code> | IAM actions required for the DeleteCatalog API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteClassifier">DeleteClassifier</a></code> | <code>string[]</code> | IAM actions required for the DeleteClassifier API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteColumnStatisticsForPartition">DeleteColumnStatisticsForPartition</a></code> | <code>string[]</code> | IAM actions required for the DeleteColumnStatisticsForPartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteColumnStatisticsForTable">DeleteColumnStatisticsForTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteColumnStatisticsForTable API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteColumnStatisticsTaskSettings">DeleteColumnStatisticsTaskSettings</a></code> | <code>string[]</code> | IAM actions required for the DeleteColumnStatisticsTaskSettings API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteConnectionType">DeleteConnectionType</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectionType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteCrawler">DeleteCrawler</a></code> | <code>string[]</code> | IAM actions required for the DeleteCrawler API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteCustomEntityType">DeleteCustomEntityType</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomEntityType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteDatabase">DeleteDatabase</a></code> | <code>string[]</code> | IAM actions required for the DeleteDatabase API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteDataQualityRuleset">DeleteDataQualityRuleset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataQualityRuleset API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteDevEndpoint">DeleteDevEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteDevEndpoint API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteFormType">DeleteFormType</a></code> | <code>string[]</code> | IAM actions required for the DeleteFormType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteGlossary">DeleteGlossary</a></code> | <code>string[]</code> | IAM actions required for the DeleteGlossary API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteGlossaryTerm">DeleteGlossaryTerm</a></code> | <code>string[]</code> | IAM actions required for the DeleteGlossaryTerm API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteGlueIdentityCenterConfiguration">DeleteGlueIdentityCenterConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteGlueIdentityCenterConfiguration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteIntegrationResourceProperty">DeleteIntegrationResourceProperty</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegrationResourceProperty API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteIntegrationTableProperties">DeleteIntegrationTableProperties</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegrationTableProperties API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteJob">DeleteJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteJob API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteMLTransform">DeleteMLTransform</a></code> | <code>string[]</code> | IAM actions required for the DeleteMLTransform API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeletePartition">DeletePartition</a></code> | <code>string[]</code> | IAM actions required for the DeletePartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeletePartitionIndex">DeletePartitionIndex</a></code> | <code>string[]</code> | IAM actions required for the DeletePartitionIndex API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteRegistry">DeleteRegistry</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistry API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteSchema">DeleteSchema</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchema API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteSchemaVersions">DeleteSchemaVersions</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchemaVersions API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteSecurityConfiguration">DeleteSecurityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSecurityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteSession">DeleteSession</a></code> | <code>string[]</code> | IAM actions required for the DeleteSession API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteTable">DeleteTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteTable API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteTableOptimizer">DeleteTableOptimizer</a></code> | <code>string[]</code> | IAM actions required for the DeleteTableOptimizer API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteTableVersion">DeleteTableVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteTableVersion API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteTrigger">DeleteTrigger</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrigger API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteUsageProfile">DeleteUsageProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteUsageProfile API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteUserDefinedFunction">DeleteUserDefinedFunction</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserDefinedFunction API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflow API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DescribeConnectionType">DescribeConnectionType</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectionType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DescribeEntity">DescribeEntity</a></code> | <code>string[]</code> | IAM actions required for the DescribeEntity API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DescribeInboundIntegrations">DescribeInboundIntegrations</a></code> | <code>string[]</code> | IAM actions required for the DescribeInboundIntegrations API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DescribeIntegrations">DescribeIntegrations</a></code> | <code>string[]</code> | IAM actions required for the DescribeIntegrations API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.DisassociateGlossaryTerms">DisassociateGlossaryTerms</a></code> | <code>string[]</code> | IAM actions required for the DisassociateGlossaryTerms API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ImportCatalogToGlue">ImportCatalogToGlue</a></code> | <code>string[]</code> | IAM actions required for the ImportCatalogToGlue API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListAssetTypes">ListAssetTypes</a></code> | <code>string[]</code> | IAM actions required for the ListAssetTypes API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListBlueprints">ListBlueprints</a></code> | <code>string[]</code> | IAM actions required for the ListBlueprints API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListColumnStatisticsTaskRuns">ListColumnStatisticsTaskRuns</a></code> | <code>string[]</code> | IAM actions required for the ListColumnStatisticsTaskRuns API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListConnectionTypes">ListConnectionTypes</a></code> | <code>string[]</code> | IAM actions required for the ListConnectionTypes API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListCrawlers">ListCrawlers</a></code> | <code>string[]</code> | IAM actions required for the ListCrawlers API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListCrawls">ListCrawls</a></code> | <code>string[]</code> | IAM actions required for the ListCrawls API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListCustomEntityTypes">ListCustomEntityTypes</a></code> | <code>string[]</code> | IAM actions required for the ListCustomEntityTypes API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityResults">ListDataQualityResults</a></code> | <code>string[]</code> | IAM actions required for the ListDataQualityResults API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityRuleRecommendationRuns">ListDataQualityRuleRecommendationRuns</a></code> | <code>string[]</code> | IAM actions required for the ListDataQualityRuleRecommendationRuns API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityRulesetEvaluationRuns">ListDataQualityRulesetEvaluationRuns</a></code> | <code>string[]</code> | IAM actions required for the ListDataQualityRulesetEvaluationRuns API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityRulesets">ListDataQualityRulesets</a></code> | <code>string[]</code> | IAM actions required for the ListDataQualityRulesets API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityStatisticAnnotations">ListDataQualityStatisticAnnotations</a></code> | <code>string[]</code> | IAM actions required for the ListDataQualityStatisticAnnotations API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityStatistics">ListDataQualityStatistics</a></code> | <code>string[]</code> | IAM actions required for the ListDataQualityStatistics API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListDevEndpoints">ListDevEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListDevEndpoints API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListEntities">ListEntities</a></code> | <code>string[]</code> | IAM actions required for the ListEntities API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListFormTypes">ListFormTypes</a></code> | <code>string[]</code> | IAM actions required for the ListFormTypes API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListGlossaries">ListGlossaries</a></code> | <code>string[]</code> | IAM actions required for the ListGlossaries API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListGlossaryTerms">ListGlossaryTerms</a></code> | <code>string[]</code> | IAM actions required for the ListGlossaryTerms API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListIntegrationResourceProperties">ListIntegrationResourceProperties</a></code> | <code>string[]</code> | IAM actions required for the ListIntegrationResourceProperties API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListIterableForms">ListIterableForms</a></code> | <code>string[]</code> | IAM actions required for the ListIterableForms API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListMaterializedViewRefreshTaskRuns">ListMaterializedViewRefreshTaskRuns</a></code> | <code>string[]</code> | IAM actions required for the ListMaterializedViewRefreshTaskRuns API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListMLTransforms">ListMLTransforms</a></code> | <code>string[]</code> | IAM actions required for the ListMLTransforms API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListRegistries">ListRegistries</a></code> | <code>string[]</code> | IAM actions required for the ListRegistries API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListSchemas">ListSchemas</a></code> | <code>string[]</code> | IAM actions required for the ListSchemas API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListSchemaVersions">ListSchemaVersions</a></code> | <code>string[]</code> | IAM actions required for the ListSchemaVersions API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListStatements">ListStatements</a></code> | <code>string[]</code> | IAM actions required for the ListStatements API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListTableOptimizerRuns">ListTableOptimizerRuns</a></code> | <code>string[]</code> | IAM actions required for the ListTableOptimizerRuns API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListTriggers">ListTriggers</a></code> | <code>string[]</code> | IAM actions required for the ListTriggers API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListUsageProfiles">ListUsageProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListUsageProfiles API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ListWorkflows">ListWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflows API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ModifyIntegration">ModifyIntegration</a></code> | <code>string[]</code> | IAM actions required for the ModifyIntegration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetAsset">opGetAsset</a></code> | <code>string[]</code> | IAM actions required for the GetAsset API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetAssetType">opGetAssetType</a></code> | <code>string[]</code> | IAM actions required for the GetAssetType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetBlueprint">opGetBlueprint</a></code> | <code>string[]</code> | IAM actions required for the GetBlueprint API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetBlueprintRun">opGetBlueprintRun</a></code> | <code>string[]</code> | IAM actions required for the GetBlueprintRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetBlueprintRuns">opGetBlueprintRuns</a></code> | <code>string[]</code> | IAM actions required for the GetBlueprintRuns API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetCatalog">opGetCatalog</a></code> | <code>string[]</code> | IAM actions required for the GetCatalog API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetCatalogImportStatus">opGetCatalogImportStatus</a></code> | <code>string[]</code> | IAM actions required for the GetCatalogImportStatus API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetCatalogs">opGetCatalogs</a></code> | <code>string[]</code> | IAM actions required for the GetCatalogs API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetClassifier">opGetClassifier</a></code> | <code>string[]</code> | IAM actions required for the GetClassifier API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetClassifiers">opGetClassifiers</a></code> | <code>string[]</code> | IAM actions required for the GetClassifiers API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetColumnStatisticsForPartition">opGetColumnStatisticsForPartition</a></code> | <code>string[]</code> | IAM actions required for the GetColumnStatisticsForPartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetColumnStatisticsForTable">opGetColumnStatisticsForTable</a></code> | <code>string[]</code> | IAM actions required for the GetColumnStatisticsForTable API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetColumnStatisticsTaskRun">opGetColumnStatisticsTaskRun</a></code> | <code>string[]</code> | IAM actions required for the GetColumnStatisticsTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetColumnStatisticsTaskRuns">opGetColumnStatisticsTaskRuns</a></code> | <code>string[]</code> | IAM actions required for the GetColumnStatisticsTaskRuns API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetColumnStatisticsTaskSettings">opGetColumnStatisticsTaskSettings</a></code> | <code>string[]</code> | IAM actions required for the GetColumnStatisticsTaskSettings API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetConnection">opGetConnection</a></code> | <code>string[]</code> | IAM actions required for the GetConnection API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetConnections">opGetConnections</a></code> | <code>string[]</code> | IAM actions required for the GetConnections API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetCrawler">opGetCrawler</a></code> | <code>string[]</code> | IAM actions required for the GetCrawler API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetCrawlerMetrics">opGetCrawlerMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetCrawlerMetrics API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetCrawlers">opGetCrawlers</a></code> | <code>string[]</code> | IAM actions required for the GetCrawlers API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetCustomEntityType">opGetCustomEntityType</a></code> | <code>string[]</code> | IAM actions required for the GetCustomEntityType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDashboardUrl">opGetDashboardUrl</a></code> | <code>string[]</code> | IAM actions required for the GetDashboardUrl API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDatabase">opGetDatabase</a></code> | <code>string[]</code> | IAM actions required for the GetDatabase API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDatabases">opGetDatabases</a></code> | <code>string[]</code> | IAM actions required for the GetDatabases API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDataCatalogEncryptionSettings">opGetDataCatalogEncryptionSettings</a></code> | <code>string[]</code> | IAM actions required for the GetDataCatalogEncryptionSettings API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDataCatalogExportConfiguration">opGetDataCatalogExportConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetDataCatalogExportConfiguration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDataflowGraph">opGetDataflowGraph</a></code> | <code>string[]</code> | IAM actions required for the GetDataflowGraph API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityModel">opGetDataQualityModel</a></code> | <code>string[]</code> | IAM actions required for the GetDataQualityModel API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityModelResult">opGetDataQualityModelResult</a></code> | <code>string[]</code> | IAM actions required for the GetDataQualityModelResult API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityResult">opGetDataQualityResult</a></code> | <code>string[]</code> | IAM actions required for the GetDataQualityResult API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityRuleRecommendationRun">opGetDataQualityRuleRecommendationRun</a></code> | <code>string[]</code> | IAM actions required for the GetDataQualityRuleRecommendationRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityRuleset">opGetDataQualityRuleset</a></code> | <code>string[]</code> | IAM actions required for the GetDataQualityRuleset API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityRulesetEvaluationRun">opGetDataQualityRulesetEvaluationRun</a></code> | <code>string[]</code> | IAM actions required for the GetDataQualityRulesetEvaluationRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDevEndpoint">opGetDevEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetDevEndpoint API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetDevEndpoints">opGetDevEndpoints</a></code> | <code>string[]</code> | IAM actions required for the GetDevEndpoints API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetEntityRecords">opGetEntityRecords</a></code> | <code>string[]</code> | IAM actions required for the GetEntityRecords API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetFormType">opGetFormType</a></code> | <code>string[]</code> | IAM actions required for the GetFormType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetGlossary">opGetGlossary</a></code> | <code>string[]</code> | IAM actions required for the GetGlossary API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetGlossaryTerm">opGetGlossaryTerm</a></code> | <code>string[]</code> | IAM actions required for the GetGlossaryTerm API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetGlueIdentityCenterConfiguration">opGetGlueIdentityCenterConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetGlueIdentityCenterConfiguration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetIntegrationResourceProperty">opGetIntegrationResourceProperty</a></code> | <code>string[]</code> | IAM actions required for the GetIntegrationResourceProperty API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetIntegrationTableProperties">opGetIntegrationTableProperties</a></code> | <code>string[]</code> | IAM actions required for the GetIntegrationTableProperties API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetJob">opGetJob</a></code> | <code>string[]</code> | IAM actions required for the GetJob API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetJobBookmark">opGetJobBookmark</a></code> | <code>string[]</code> | IAM actions required for the GetJobBookmark API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetJobRun">opGetJobRun</a></code> | <code>string[]</code> | IAM actions required for the GetJobRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetJobRuns">opGetJobRuns</a></code> | <code>string[]</code> | IAM actions required for the GetJobRuns API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetJobs">opGetJobs</a></code> | <code>string[]</code> | IAM actions required for the GetJobs API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetMapping">opGetMapping</a></code> | <code>string[]</code> | IAM actions required for the GetMapping API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetMaterializedViewRefreshTaskRun">opGetMaterializedViewRefreshTaskRun</a></code> | <code>string[]</code> | IAM actions required for the GetMaterializedViewRefreshTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetMLTaskRun">opGetMLTaskRun</a></code> | <code>string[]</code> | IAM actions required for the GetMLTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetMLTaskRuns">opGetMLTaskRuns</a></code> | <code>string[]</code> | IAM actions required for the GetMLTaskRuns API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetMLTransform">opGetMLTransform</a></code> | <code>string[]</code> | IAM actions required for the GetMLTransform API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetMLTransforms">opGetMLTransforms</a></code> | <code>string[]</code> | IAM actions required for the GetMLTransforms API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetPartition">opGetPartition</a></code> | <code>string[]</code> | IAM actions required for the GetPartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetPartitionIndexes">opGetPartitionIndexes</a></code> | <code>string[]</code> | IAM actions required for the GetPartitionIndexes API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetPartitions">opGetPartitions</a></code> | <code>string[]</code> | IAM actions required for the GetPartitions API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetPlan">opGetPlan</a></code> | <code>string[]</code> | IAM actions required for the GetPlan API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetRegistry">opGetRegistry</a></code> | <code>string[]</code> | IAM actions required for the GetRegistry API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetResourcePolicies">opGetResourcePolicies</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicies API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetSchema">opGetSchema</a></code> | <code>string[]</code> | IAM actions required for the GetSchema API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetSchemaByDefinition">opGetSchemaByDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetSchemaByDefinition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetSchemaVersion">opGetSchemaVersion</a></code> | <code>string[]</code> | IAM actions required for the GetSchemaVersion API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetSchemaVersionsDiff">opGetSchemaVersionsDiff</a></code> | <code>string[]</code> | IAM actions required for the GetSchemaVersionsDiff API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetSecurityConfiguration">opGetSecurityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetSecurityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetSecurityConfigurations">opGetSecurityConfigurations</a></code> | <code>string[]</code> | IAM actions required for the GetSecurityConfigurations API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetSession">opGetSession</a></code> | <code>string[]</code> | IAM actions required for the GetSession API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetSessionEndpoint">opGetSessionEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetSessionEndpoint API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetStatement">opGetStatement</a></code> | <code>string[]</code> | IAM actions required for the GetStatement API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetTable">opGetTable</a></code> | <code>string[]</code> | IAM actions required for the GetTable API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetTableOptimizer">opGetTableOptimizer</a></code> | <code>string[]</code> | IAM actions required for the GetTableOptimizer API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetTables">opGetTables</a></code> | <code>string[]</code> | IAM actions required for the GetTables API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetTableVersion">opGetTableVersion</a></code> | <code>string[]</code> | IAM actions required for the GetTableVersion API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetTableVersions">opGetTableVersions</a></code> | <code>string[]</code> | IAM actions required for the GetTableVersions API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetTags">opGetTags</a></code> | <code>string[]</code> | IAM actions required for the GetTags API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetTrigger">opGetTrigger</a></code> | <code>string[]</code> | IAM actions required for the GetTrigger API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetTriggers">opGetTriggers</a></code> | <code>string[]</code> | IAM actions required for the GetTriggers API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetUnfilteredPartitionMetadata">opGetUnfilteredPartitionMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetUnfilteredPartitionMetadata API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetUnfilteredPartitionsMetadata">opGetUnfilteredPartitionsMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetUnfilteredPartitionsMetadata API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetUnfilteredTableMetadata">opGetUnfilteredTableMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetUnfilteredTableMetadata API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetUsageProfile">opGetUsageProfile</a></code> | <code>string[]</code> | IAM actions required for the GetUsageProfile API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetUserDefinedFunction">opGetUserDefinedFunction</a></code> | <code>string[]</code> | IAM actions required for the GetUserDefinedFunction API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetUserDefinedFunctions">opGetUserDefinedFunctions</a></code> | <code>string[]</code> | IAM actions required for the GetUserDefinedFunctions API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetWorkflow">opGetWorkflow</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflow API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetWorkflowRun">opGetWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetWorkflowRunProperties">opGetWorkflowRunProperties</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowRunProperties API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.opGetWorkflowRuns">opGetWorkflowRuns</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowRuns API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.PutAsset">PutAsset</a></code> | <code>string[]</code> | IAM actions required for the PutAsset API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.PutAssetType">PutAssetType</a></code> | <code>string[]</code> | IAM actions required for the PutAssetType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.PutAttachment">PutAttachment</a></code> | <code>string[]</code> | IAM actions required for the PutAttachment API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.PutDataCatalogEncryptionSettings">PutDataCatalogEncryptionSettings</a></code> | <code>string[]</code> | IAM actions required for the PutDataCatalogEncryptionSettings API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.PutDataCatalogExportConfiguration">PutDataCatalogExportConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutDataCatalogExportConfiguration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.PutDataQualityProfileAnnotation">PutDataQualityProfileAnnotation</a></code> | <code>string[]</code> | IAM actions required for the PutDataQualityProfileAnnotation API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.PutFormType">PutFormType</a></code> | <code>string[]</code> | IAM actions required for the PutFormType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.PutSchemaVersionMetadata">PutSchemaVersionMetadata</a></code> | <code>string[]</code> | IAM actions required for the PutSchemaVersionMetadata API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.PutWorkflowRunProperties">PutWorkflowRunProperties</a></code> | <code>string[]</code> | IAM actions required for the PutWorkflowRunProperties API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.QuerySchemaVersionMetadata">QuerySchemaVersionMetadata</a></code> | <code>string[]</code> | IAM actions required for the QuerySchemaVersionMetadata API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.RegisterConnectionType">RegisterConnectionType</a></code> | <code>string[]</code> | IAM actions required for the RegisterConnectionType API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.RegisterSchemaVersion">RegisterSchemaVersion</a></code> | <code>string[]</code> | IAM actions required for the RegisterSchemaVersion API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.RemoveSchemaVersionMetadata">RemoveSchemaVersionMetadata</a></code> | <code>string[]</code> | IAM actions required for the RemoveSchemaVersionMetadata API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ResetJobBookmark">ResetJobBookmark</a></code> | <code>string[]</code> | IAM actions required for the ResetJobBookmark API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.ResumeWorkflowRun">ResumeWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the ResumeWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.RunStatement">RunStatement</a></code> | <code>string[]</code> | IAM actions required for the RunStatement API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.SearchAssets">SearchAssets</a></code> | <code>string[]</code> | IAM actions required for the SearchAssets API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.SearchTables">SearchTables</a></code> | <code>string[]</code> | IAM actions required for the SearchTables API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartBlueprintRun">StartBlueprintRun</a></code> | <code>string[]</code> | IAM actions required for the StartBlueprintRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartColumnStatisticsTaskRun">StartColumnStatisticsTaskRun</a></code> | <code>string[]</code> | IAM actions required for the StartColumnStatisticsTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartColumnStatisticsTaskRunSchedule">StartColumnStatisticsTaskRunSchedule</a></code> | <code>string[]</code> | IAM actions required for the StartColumnStatisticsTaskRunSchedule API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartCrawler">StartCrawler</a></code> | <code>string[]</code> | IAM actions required for the StartCrawler API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartCrawlerSchedule">StartCrawlerSchedule</a></code> | <code>string[]</code> | IAM actions required for the StartCrawlerSchedule API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartDataQualityRuleRecommendationRun">StartDataQualityRuleRecommendationRun</a></code> | <code>string[]</code> | IAM actions required for the StartDataQualityRuleRecommendationRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartDataQualityRulesetEvaluationRun">StartDataQualityRulesetEvaluationRun</a></code> | <code>string[]</code> | IAM actions required for the StartDataQualityRulesetEvaluationRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartExportLabelsTaskRun">StartExportLabelsTaskRun</a></code> | <code>string[]</code> | IAM actions required for the StartExportLabelsTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartImportLabelsTaskRun">StartImportLabelsTaskRun</a></code> | <code>string[]</code> | IAM actions required for the StartImportLabelsTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartJobRun">StartJobRun</a></code> | <code>string[]</code> | IAM actions required for the StartJobRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartMaterializedViewRefreshTaskRun">StartMaterializedViewRefreshTaskRun</a></code> | <code>string[]</code> | IAM actions required for the StartMaterializedViewRefreshTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartMLEvaluationTaskRun">StartMLEvaluationTaskRun</a></code> | <code>string[]</code> | IAM actions required for the StartMLEvaluationTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartMLLabelingSetGenerationTaskRun">StartMLLabelingSetGenerationTaskRun</a></code> | <code>string[]</code> | IAM actions required for the StartMLLabelingSetGenerationTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartTrigger">StartTrigger</a></code> | <code>string[]</code> | IAM actions required for the StartTrigger API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StartWorkflowRun">StartWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the StartWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StopColumnStatisticsTaskRun">StopColumnStatisticsTaskRun</a></code> | <code>string[]</code> | IAM actions required for the StopColumnStatisticsTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StopColumnStatisticsTaskRunSchedule">StopColumnStatisticsTaskRunSchedule</a></code> | <code>string[]</code> | IAM actions required for the StopColumnStatisticsTaskRunSchedule API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StopCrawler">StopCrawler</a></code> | <code>string[]</code> | IAM actions required for the StopCrawler API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StopCrawlerSchedule">StopCrawlerSchedule</a></code> | <code>string[]</code> | IAM actions required for the StopCrawlerSchedule API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StopMaterializedViewRefreshTaskRun">StopMaterializedViewRefreshTaskRun</a></code> | <code>string[]</code> | IAM actions required for the StopMaterializedViewRefreshTaskRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StopSession">StopSession</a></code> | <code>string[]</code> | IAM actions required for the StopSession API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StopTrigger">StopTrigger</a></code> | <code>string[]</code> | IAM actions required for the StopTrigger API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.StopWorkflowRun">StopWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the StopWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.TestConnection">TestConnection</a></code> | <code>string[]</code> | IAM actions required for the TestConnection API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateAsset">UpdateAsset</a></code> | <code>string[]</code> | IAM actions required for the UpdateAsset API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateBlueprint">UpdateBlueprint</a></code> | <code>string[]</code> | IAM actions required for the UpdateBlueprint API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateCatalog">UpdateCatalog</a></code> | <code>string[]</code> | IAM actions required for the UpdateCatalog API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateClassifier">UpdateClassifier</a></code> | <code>string[]</code> | IAM actions required for the UpdateClassifier API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateColumnStatisticsForPartition">UpdateColumnStatisticsForPartition</a></code> | <code>string[]</code> | IAM actions required for the UpdateColumnStatisticsForPartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateColumnStatisticsForTable">UpdateColumnStatisticsForTable</a></code> | <code>string[]</code> | IAM actions required for the UpdateColumnStatisticsForTable API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateColumnStatisticsTaskSettings">UpdateColumnStatisticsTaskSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateColumnStatisticsTaskSettings API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateConnection">UpdateConnection</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnection API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateCrawler">UpdateCrawler</a></code> | <code>string[]</code> | IAM actions required for the UpdateCrawler API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateCrawlerSchedule">UpdateCrawlerSchedule</a></code> | <code>string[]</code> | IAM actions required for the UpdateCrawlerSchedule API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateDatabase">UpdateDatabase</a></code> | <code>string[]</code> | IAM actions required for the UpdateDatabase API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateDataQualityRuleset">UpdateDataQualityRuleset</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataQualityRuleset API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateDevEndpoint">UpdateDevEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateDevEndpoint API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateGlossary">UpdateGlossary</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlossary API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateGlossaryTerm">UpdateGlossaryTerm</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlossaryTerm API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateGlueIdentityCenterConfiguration">UpdateGlueIdentityCenterConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlueIdentityCenterConfiguration API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateIntegrationResourceProperty">UpdateIntegrationResourceProperty</a></code> | <code>string[]</code> | IAM actions required for the UpdateIntegrationResourceProperty API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateIntegrationTableProperties">UpdateIntegrationTableProperties</a></code> | <code>string[]</code> | IAM actions required for the UpdateIntegrationTableProperties API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateJob">UpdateJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateJob API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateJobFromSourceControl">UpdateJobFromSourceControl</a></code> | <code>string[]</code> | IAM actions required for the UpdateJobFromSourceControl API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateMLTransform">UpdateMLTransform</a></code> | <code>string[]</code> | IAM actions required for the UpdateMLTransform API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdatePartition">UpdatePartition</a></code> | <code>string[]</code> | IAM actions required for the UpdatePartition API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateRegistry">UpdateRegistry</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegistry API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateSchema">UpdateSchema</a></code> | <code>string[]</code> | IAM actions required for the UpdateSchema API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateSourceControlFromJob">UpdateSourceControlFromJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateSourceControlFromJob API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateTable">UpdateTable</a></code> | <code>string[]</code> | IAM actions required for the UpdateTable API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateTableOptimizer">UpdateTableOptimizer</a></code> | <code>string[]</code> | IAM actions required for the UpdateTableOptimizer API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateTrigger">UpdateTrigger</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrigger API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateUsageProfile">UpdateUsageProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateUsageProfile API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateUserDefinedFunction">UpdateUserDefinedFunction</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserDefinedFunction API call. |
| <code><a href="#@cdk_utils/iam.glue.GlueOperations.property.UpdateWorkflow">UpdateWorkflow</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkflow API call. |

---

##### `AssociateGlossaryTerms`<sup>Required</sup> <a name="AssociateGlossaryTerms" id="@cdk_utils/iam.glue.GlueOperations.property.AssociateGlossaryTerms"></a>

```typescript
public readonly AssociateGlossaryTerms: string[];
```

- *Type:* string[]

IAM actions required for the AssociateGlossaryTerms API call.

---

##### `BatchCreatePartition`<sup>Required</sup> <a name="BatchCreatePartition" id="@cdk_utils/iam.glue.GlueOperations.property.BatchCreatePartition"></a>

```typescript
public readonly BatchCreatePartition: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreatePartition API call.

---

##### `BatchDeleteConnection`<sup>Required</sup> <a name="BatchDeleteConnection" id="@cdk_utils/iam.glue.GlueOperations.property.BatchDeleteConnection"></a>

```typescript
public readonly BatchDeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteConnection API call.

---

##### `BatchDeletePartition`<sup>Required</sup> <a name="BatchDeletePartition" id="@cdk_utils/iam.glue.GlueOperations.property.BatchDeletePartition"></a>

```typescript
public readonly BatchDeletePartition: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeletePartition API call.

---

##### `BatchDeleteTable`<sup>Required</sup> <a name="BatchDeleteTable" id="@cdk_utils/iam.glue.GlueOperations.property.BatchDeleteTable"></a>

```typescript
public readonly BatchDeleteTable: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteTable API call.

---

##### `BatchDeleteTableVersion`<sup>Required</sup> <a name="BatchDeleteTableVersion" id="@cdk_utils/iam.glue.GlueOperations.property.BatchDeleteTableVersion"></a>

```typescript
public readonly BatchDeleteTableVersion: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteTableVersion API call.

---

##### `BatchGetBlueprints`<sup>Required</sup> <a name="BatchGetBlueprints" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetBlueprints"></a>

```typescript
public readonly BatchGetBlueprints: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetBlueprints API call.

---

##### `BatchGetCrawlers`<sup>Required</sup> <a name="BatchGetCrawlers" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetCrawlers"></a>

```typescript
public readonly BatchGetCrawlers: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCrawlers API call.

---

##### `BatchGetCustomEntityTypes`<sup>Required</sup> <a name="BatchGetCustomEntityTypes" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetCustomEntityTypes"></a>

```typescript
public readonly BatchGetCustomEntityTypes: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCustomEntityTypes API call.

---

##### `BatchGetDataQualityResult`<sup>Required</sup> <a name="BatchGetDataQualityResult" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetDataQualityResult"></a>

```typescript
public readonly BatchGetDataQualityResult: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetDataQualityResult API call.

---

##### `BatchGetDataQualityRulesetEvaluationRun`<sup>Required</sup> <a name="BatchGetDataQualityRulesetEvaluationRun" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetDataQualityRulesetEvaluationRun"></a>

```typescript
public readonly BatchGetDataQualityRulesetEvaluationRun: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetDataQualityRulesetEvaluationRun API call.

---

##### `BatchGetDevEndpoints`<sup>Required</sup> <a name="BatchGetDevEndpoints" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetDevEndpoints"></a>

```typescript
public readonly BatchGetDevEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetDevEndpoints API call.

---

##### `BatchGetIterableForms`<sup>Required</sup> <a name="BatchGetIterableForms" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetIterableForms"></a>

```typescript
public readonly BatchGetIterableForms: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetIterableForms API call.

---

##### `BatchGetJobs`<sup>Required</sup> <a name="BatchGetJobs" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetJobs"></a>

```typescript
public readonly BatchGetJobs: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetJobs API call.

---

##### `BatchGetPartition`<sup>Required</sup> <a name="BatchGetPartition" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetPartition"></a>

```typescript
public readonly BatchGetPartition: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetPartition API call.

---

##### `BatchGetTableOptimizer`<sup>Required</sup> <a name="BatchGetTableOptimizer" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetTableOptimizer"></a>

```typescript
public readonly BatchGetTableOptimizer: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetTableOptimizer API call.

---

##### `BatchGetTriggers`<sup>Required</sup> <a name="BatchGetTriggers" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetTriggers"></a>

```typescript
public readonly BatchGetTriggers: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetTriggers API call.

---

##### `BatchGetWorkflows`<sup>Required</sup> <a name="BatchGetWorkflows" id="@cdk_utils/iam.glue.GlueOperations.property.BatchGetWorkflows"></a>

```typescript
public readonly BatchGetWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetWorkflows API call.

---

##### `BatchPutDataQualityStatisticAnnotation`<sup>Required</sup> <a name="BatchPutDataQualityStatisticAnnotation" id="@cdk_utils/iam.glue.GlueOperations.property.BatchPutDataQualityStatisticAnnotation"></a>

```typescript
public readonly BatchPutDataQualityStatisticAnnotation: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutDataQualityStatisticAnnotation API call.

---

##### `BatchStopJobRun`<sup>Required</sup> <a name="BatchStopJobRun" id="@cdk_utils/iam.glue.GlueOperations.property.BatchStopJobRun"></a>

```typescript
public readonly BatchStopJobRun: string[];
```

- *Type:* string[]

IAM actions required for the BatchStopJobRun API call.

---

##### `BatchUpdatePartition`<sup>Required</sup> <a name="BatchUpdatePartition" id="@cdk_utils/iam.glue.GlueOperations.property.BatchUpdatePartition"></a>

```typescript
public readonly BatchUpdatePartition: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdatePartition API call.

---

##### `CancelDataQualityRuleRecommendationRun`<sup>Required</sup> <a name="CancelDataQualityRuleRecommendationRun" id="@cdk_utils/iam.glue.GlueOperations.property.CancelDataQualityRuleRecommendationRun"></a>

```typescript
public readonly CancelDataQualityRuleRecommendationRun: string[];
```

- *Type:* string[]

IAM actions required for the CancelDataQualityRuleRecommendationRun API call.

---

##### `CancelDataQualityRulesetEvaluationRun`<sup>Required</sup> <a name="CancelDataQualityRulesetEvaluationRun" id="@cdk_utils/iam.glue.GlueOperations.property.CancelDataQualityRulesetEvaluationRun"></a>

```typescript
public readonly CancelDataQualityRulesetEvaluationRun: string[];
```

- *Type:* string[]

IAM actions required for the CancelDataQualityRulesetEvaluationRun API call.

---

##### `CancelMLTaskRun`<sup>Required</sup> <a name="CancelMLTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.CancelMLTaskRun"></a>

```typescript
public readonly CancelMLTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the CancelMLTaskRun API call.

---

##### `CancelStatement`<sup>Required</sup> <a name="CancelStatement" id="@cdk_utils/iam.glue.GlueOperations.property.CancelStatement"></a>

```typescript
public readonly CancelStatement: string[];
```

- *Type:* string[]

IAM actions required for the CancelStatement API call.

---

##### `CheckSchemaVersionValidity`<sup>Required</sup> <a name="CheckSchemaVersionValidity" id="@cdk_utils/iam.glue.GlueOperations.property.CheckSchemaVersionValidity"></a>

```typescript
public readonly CheckSchemaVersionValidity: string[];
```

- *Type:* string[]

IAM actions required for the CheckSchemaVersionValidity API call.

---

##### `CreateBlueprint`<sup>Required</sup> <a name="CreateBlueprint" id="@cdk_utils/iam.glue.GlueOperations.property.CreateBlueprint"></a>

```typescript
public readonly CreateBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the CreateBlueprint API call.

---

##### `CreateCatalog`<sup>Required</sup> <a name="CreateCatalog" id="@cdk_utils/iam.glue.GlueOperations.property.CreateCatalog"></a>

```typescript
public readonly CreateCatalog: string[];
```

- *Type:* string[]

IAM actions required for the CreateCatalog API call.

---

##### `CreateClassifier`<sup>Required</sup> <a name="CreateClassifier" id="@cdk_utils/iam.glue.GlueOperations.property.CreateClassifier"></a>

```typescript
public readonly CreateClassifier: string[];
```

- *Type:* string[]

IAM actions required for the CreateClassifier API call.

---

##### `CreateColumnStatisticsTaskSettings`<sup>Required</sup> <a name="CreateColumnStatisticsTaskSettings" id="@cdk_utils/iam.glue.GlueOperations.property.CreateColumnStatisticsTaskSettings"></a>

```typescript
public readonly CreateColumnStatisticsTaskSettings: string[];
```

- *Type:* string[]

IAM actions required for the CreateColumnStatisticsTaskSettings API call.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.glue.GlueOperations.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnection API call.

---

##### `CreateCrawler`<sup>Required</sup> <a name="CreateCrawler" id="@cdk_utils/iam.glue.GlueOperations.property.CreateCrawler"></a>

```typescript
public readonly CreateCrawler: string[];
```

- *Type:* string[]

IAM actions required for the CreateCrawler API call.

---

##### `CreateCustomEntityType`<sup>Required</sup> <a name="CreateCustomEntityType" id="@cdk_utils/iam.glue.GlueOperations.property.CreateCustomEntityType"></a>

```typescript
public readonly CreateCustomEntityType: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomEntityType API call.

---

##### `CreateDatabase`<sup>Required</sup> <a name="CreateDatabase" id="@cdk_utils/iam.glue.GlueOperations.property.CreateDatabase"></a>

```typescript
public readonly CreateDatabase: string[];
```

- *Type:* string[]

IAM actions required for the CreateDatabase API call.

---

##### `CreateDataQualityRuleset`<sup>Required</sup> <a name="CreateDataQualityRuleset" id="@cdk_utils/iam.glue.GlueOperations.property.CreateDataQualityRuleset"></a>

```typescript
public readonly CreateDataQualityRuleset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataQualityRuleset API call.

---

##### `CreateDevEndpoint`<sup>Required</sup> <a name="CreateDevEndpoint" id="@cdk_utils/iam.glue.GlueOperations.property.CreateDevEndpoint"></a>

```typescript
public readonly CreateDevEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateDevEndpoint API call.

---

##### `CreateGlossary`<sup>Required</sup> <a name="CreateGlossary" id="@cdk_utils/iam.glue.GlueOperations.property.CreateGlossary"></a>

```typescript
public readonly CreateGlossary: string[];
```

- *Type:* string[]

IAM actions required for the CreateGlossary API call.

---

##### `CreateGlossaryTerm`<sup>Required</sup> <a name="CreateGlossaryTerm" id="@cdk_utils/iam.glue.GlueOperations.property.CreateGlossaryTerm"></a>

```typescript
public readonly CreateGlossaryTerm: string[];
```

- *Type:* string[]

IAM actions required for the CreateGlossaryTerm API call.

---

##### `CreateGlueIdentityCenterConfiguration`<sup>Required</sup> <a name="CreateGlueIdentityCenterConfiguration" id="@cdk_utils/iam.glue.GlueOperations.property.CreateGlueIdentityCenterConfiguration"></a>

```typescript
public readonly CreateGlueIdentityCenterConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateGlueIdentityCenterConfiguration API call.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.glue.GlueOperations.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegration API call.

---

##### `CreateIntegrationResourceProperty`<sup>Required</sup> <a name="CreateIntegrationResourceProperty" id="@cdk_utils/iam.glue.GlueOperations.property.CreateIntegrationResourceProperty"></a>

```typescript
public readonly CreateIntegrationResourceProperty: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegrationResourceProperty API call.

---

##### `CreateIntegrationTableProperties`<sup>Required</sup> <a name="CreateIntegrationTableProperties" id="@cdk_utils/iam.glue.GlueOperations.property.CreateIntegrationTableProperties"></a>

```typescript
public readonly CreateIntegrationTableProperties: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegrationTableProperties API call.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.glue.GlueOperations.property.CreateJob"></a>

```typescript
public readonly CreateJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateJob API call.

---

##### `CreateMLTransform`<sup>Required</sup> <a name="CreateMLTransform" id="@cdk_utils/iam.glue.GlueOperations.property.CreateMLTransform"></a>

```typescript
public readonly CreateMLTransform: string[];
```

- *Type:* string[]

IAM actions required for the CreateMLTransform API call.

---

##### `CreatePartition`<sup>Required</sup> <a name="CreatePartition" id="@cdk_utils/iam.glue.GlueOperations.property.CreatePartition"></a>

```typescript
public readonly CreatePartition: string[];
```

- *Type:* string[]

IAM actions required for the CreatePartition API call.

---

##### `CreatePartitionIndex`<sup>Required</sup> <a name="CreatePartitionIndex" id="@cdk_utils/iam.glue.GlueOperations.property.CreatePartitionIndex"></a>

```typescript
public readonly CreatePartitionIndex: string[];
```

- *Type:* string[]

IAM actions required for the CreatePartitionIndex API call.

---

##### `CreateRegistry`<sup>Required</sup> <a name="CreateRegistry" id="@cdk_utils/iam.glue.GlueOperations.property.CreateRegistry"></a>

```typescript
public readonly CreateRegistry: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistry API call.

---

##### `CreateSchema`<sup>Required</sup> <a name="CreateSchema" id="@cdk_utils/iam.glue.GlueOperations.property.CreateSchema"></a>

```typescript
public readonly CreateSchema: string[];
```

- *Type:* string[]

IAM actions required for the CreateSchema API call.

---

##### `CreateScript`<sup>Required</sup> <a name="CreateScript" id="@cdk_utils/iam.glue.GlueOperations.property.CreateScript"></a>

```typescript
public readonly CreateScript: string[];
```

- *Type:* string[]

IAM actions required for the CreateScript API call.

---

##### `CreateSecurityConfiguration`<sup>Required</sup> <a name="CreateSecurityConfiguration" id="@cdk_utils/iam.glue.GlueOperations.property.CreateSecurityConfiguration"></a>

```typescript
public readonly CreateSecurityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateSecurityConfiguration API call.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.glue.GlueOperations.property.CreateSession"></a>

```typescript
public readonly CreateSession: string[];
```

- *Type:* string[]

IAM actions required for the CreateSession API call.

---

##### `CreateTable`<sup>Required</sup> <a name="CreateTable" id="@cdk_utils/iam.glue.GlueOperations.property.CreateTable"></a>

```typescript
public readonly CreateTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateTable API call.

---

##### `CreateTableOptimizer`<sup>Required</sup> <a name="CreateTableOptimizer" id="@cdk_utils/iam.glue.GlueOperations.property.CreateTableOptimizer"></a>

```typescript
public readonly CreateTableOptimizer: string[];
```

- *Type:* string[]

IAM actions required for the CreateTableOptimizer API call.

---

##### `CreateTrigger`<sup>Required</sup> <a name="CreateTrigger" id="@cdk_utils/iam.glue.GlueOperations.property.CreateTrigger"></a>

```typescript
public readonly CreateTrigger: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrigger API call.

---

##### `CreateUsageProfile`<sup>Required</sup> <a name="CreateUsageProfile" id="@cdk_utils/iam.glue.GlueOperations.property.CreateUsageProfile"></a>

```typescript
public readonly CreateUsageProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateUsageProfile API call.

---

##### `CreateUserDefinedFunction`<sup>Required</sup> <a name="CreateUserDefinedFunction" id="@cdk_utils/iam.glue.GlueOperations.property.CreateUserDefinedFunction"></a>

```typescript
public readonly CreateUserDefinedFunction: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserDefinedFunction API call.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.glue.GlueOperations.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflow API call.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAsset API call.

---

##### `DeleteAssetType`<sup>Required</sup> <a name="DeleteAssetType" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteAssetType"></a>

```typescript
public readonly DeleteAssetType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssetType API call.

---

##### `DeleteAttachment`<sup>Required</sup> <a name="DeleteAttachment" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteAttachment"></a>

```typescript
public readonly DeleteAttachment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAttachment API call.

---

##### `DeleteBlueprint`<sup>Required</sup> <a name="DeleteBlueprint" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteBlueprint"></a>

```typescript
public readonly DeleteBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBlueprint API call.

---

##### `DeleteCatalog`<sup>Required</sup> <a name="DeleteCatalog" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteCatalog"></a>

```typescript
public readonly DeleteCatalog: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCatalog API call.

---

##### `DeleteClassifier`<sup>Required</sup> <a name="DeleteClassifier" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteClassifier"></a>

```typescript
public readonly DeleteClassifier: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClassifier API call.

---

##### `DeleteColumnStatisticsForPartition`<sup>Required</sup> <a name="DeleteColumnStatisticsForPartition" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteColumnStatisticsForPartition"></a>

```typescript
public readonly DeleteColumnStatisticsForPartition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteColumnStatisticsForPartition API call.

---

##### `DeleteColumnStatisticsForTable`<sup>Required</sup> <a name="DeleteColumnStatisticsForTable" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteColumnStatisticsForTable"></a>

```typescript
public readonly DeleteColumnStatisticsForTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteColumnStatisticsForTable API call.

---

##### `DeleteColumnStatisticsTaskSettings`<sup>Required</sup> <a name="DeleteColumnStatisticsTaskSettings" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteColumnStatisticsTaskSettings"></a>

```typescript
public readonly DeleteColumnStatisticsTaskSettings: string[];
```

- *Type:* string[]

IAM actions required for the DeleteColumnStatisticsTaskSettings API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DeleteConnectionType`<sup>Required</sup> <a name="DeleteConnectionType" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteConnectionType"></a>

```typescript
public readonly DeleteConnectionType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectionType API call.

---

##### `DeleteCrawler`<sup>Required</sup> <a name="DeleteCrawler" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteCrawler"></a>

```typescript
public readonly DeleteCrawler: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCrawler API call.

---

##### `DeleteCustomEntityType`<sup>Required</sup> <a name="DeleteCustomEntityType" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteCustomEntityType"></a>

```typescript
public readonly DeleteCustomEntityType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomEntityType API call.

---

##### `DeleteDatabase`<sup>Required</sup> <a name="DeleteDatabase" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteDatabase"></a>

```typescript
public readonly DeleteDatabase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDatabase API call.

---

##### `DeleteDataQualityRuleset`<sup>Required</sup> <a name="DeleteDataQualityRuleset" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteDataQualityRuleset"></a>

```typescript
public readonly DeleteDataQualityRuleset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataQualityRuleset API call.

---

##### `DeleteDevEndpoint`<sup>Required</sup> <a name="DeleteDevEndpoint" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteDevEndpoint"></a>

```typescript
public readonly DeleteDevEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDevEndpoint API call.

---

##### `DeleteFormType`<sup>Required</sup> <a name="DeleteFormType" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteFormType"></a>

```typescript
public readonly DeleteFormType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFormType API call.

---

##### `DeleteGlossary`<sup>Required</sup> <a name="DeleteGlossary" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteGlossary"></a>

```typescript
public readonly DeleteGlossary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGlossary API call.

---

##### `DeleteGlossaryTerm`<sup>Required</sup> <a name="DeleteGlossaryTerm" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteGlossaryTerm"></a>

```typescript
public readonly DeleteGlossaryTerm: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGlossaryTerm API call.

---

##### `DeleteGlueIdentityCenterConfiguration`<sup>Required</sup> <a name="DeleteGlueIdentityCenterConfiguration" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteGlueIdentityCenterConfiguration"></a>

```typescript
public readonly DeleteGlueIdentityCenterConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGlueIdentityCenterConfiguration API call.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegration API call.

---

##### `DeleteIntegrationResourceProperty`<sup>Required</sup> <a name="DeleteIntegrationResourceProperty" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteIntegrationResourceProperty"></a>

```typescript
public readonly DeleteIntegrationResourceProperty: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegrationResourceProperty API call.

---

##### `DeleteIntegrationTableProperties`<sup>Required</sup> <a name="DeleteIntegrationTableProperties" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteIntegrationTableProperties"></a>

```typescript
public readonly DeleteIntegrationTableProperties: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegrationTableProperties API call.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJob API call.

---

##### `DeleteMLTransform`<sup>Required</sup> <a name="DeleteMLTransform" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteMLTransform"></a>

```typescript
public readonly DeleteMLTransform: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMLTransform API call.

---

##### `DeletePartition`<sup>Required</sup> <a name="DeletePartition" id="@cdk_utils/iam.glue.GlueOperations.property.DeletePartition"></a>

```typescript
public readonly DeletePartition: string[];
```

- *Type:* string[]

IAM actions required for the DeletePartition API call.

---

##### `DeletePartitionIndex`<sup>Required</sup> <a name="DeletePartitionIndex" id="@cdk_utils/iam.glue.GlueOperations.property.DeletePartitionIndex"></a>

```typescript
public readonly DeletePartitionIndex: string[];
```

- *Type:* string[]

IAM actions required for the DeletePartitionIndex API call.

---

##### `DeleteRegistry`<sup>Required</sup> <a name="DeleteRegistry" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteRegistry"></a>

```typescript
public readonly DeleteRegistry: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistry API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteSchema`<sup>Required</sup> <a name="DeleteSchema" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteSchema"></a>

```typescript
public readonly DeleteSchema: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchema API call.

---

##### `DeleteSchemaVersions`<sup>Required</sup> <a name="DeleteSchemaVersions" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteSchemaVersions"></a>

```typescript
public readonly DeleteSchemaVersions: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchemaVersions API call.

---

##### `DeleteSecurityConfiguration`<sup>Required</sup> <a name="DeleteSecurityConfiguration" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteSecurityConfiguration"></a>

```typescript
public readonly DeleteSecurityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSecurityConfiguration API call.

---

##### `DeleteSession`<sup>Required</sup> <a name="DeleteSession" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteSession"></a>

```typescript
public readonly DeleteSession: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSession API call.

---

##### `DeleteTable`<sup>Required</sup> <a name="DeleteTable" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteTable"></a>

```typescript
public readonly DeleteTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTable API call.

---

##### `DeleteTableOptimizer`<sup>Required</sup> <a name="DeleteTableOptimizer" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteTableOptimizer"></a>

```typescript
public readonly DeleteTableOptimizer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTableOptimizer API call.

---

##### `DeleteTableVersion`<sup>Required</sup> <a name="DeleteTableVersion" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteTableVersion"></a>

```typescript
public readonly DeleteTableVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTableVersion API call.

---

##### `DeleteTrigger`<sup>Required</sup> <a name="DeleteTrigger" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteTrigger"></a>

```typescript
public readonly DeleteTrigger: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrigger API call.

---

##### `DeleteUsageProfile`<sup>Required</sup> <a name="DeleteUsageProfile" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteUsageProfile"></a>

```typescript
public readonly DeleteUsageProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUsageProfile API call.

---

##### `DeleteUserDefinedFunction`<sup>Required</sup> <a name="DeleteUserDefinedFunction" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteUserDefinedFunction"></a>

```typescript
public readonly DeleteUserDefinedFunction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserDefinedFunction API call.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.glue.GlueOperations.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflow API call.

---

##### `DescribeConnectionType`<sup>Required</sup> <a name="DescribeConnectionType" id="@cdk_utils/iam.glue.GlueOperations.property.DescribeConnectionType"></a>

```typescript
public readonly DescribeConnectionType: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectionType API call.

---

##### `DescribeEntity`<sup>Required</sup> <a name="DescribeEntity" id="@cdk_utils/iam.glue.GlueOperations.property.DescribeEntity"></a>

```typescript
public readonly DescribeEntity: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEntity API call.

---

##### `DescribeInboundIntegrations`<sup>Required</sup> <a name="DescribeInboundIntegrations" id="@cdk_utils/iam.glue.GlueOperations.property.DescribeInboundIntegrations"></a>

```typescript
public readonly DescribeInboundIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInboundIntegrations API call.

---

##### `DescribeIntegrations`<sup>Required</sup> <a name="DescribeIntegrations" id="@cdk_utils/iam.glue.GlueOperations.property.DescribeIntegrations"></a>

```typescript
public readonly DescribeIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIntegrations API call.

---

##### `DisassociateGlossaryTerms`<sup>Required</sup> <a name="DisassociateGlossaryTerms" id="@cdk_utils/iam.glue.GlueOperations.property.DisassociateGlossaryTerms"></a>

```typescript
public readonly DisassociateGlossaryTerms: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateGlossaryTerms API call.

---

##### `ImportCatalogToGlue`<sup>Required</sup> <a name="ImportCatalogToGlue" id="@cdk_utils/iam.glue.GlueOperations.property.ImportCatalogToGlue"></a>

```typescript
public readonly ImportCatalogToGlue: string[];
```

- *Type:* string[]

IAM actions required for the ImportCatalogToGlue API call.

---

##### `ListAssetTypes`<sup>Required</sup> <a name="ListAssetTypes" id="@cdk_utils/iam.glue.GlueOperations.property.ListAssetTypes"></a>

```typescript
public readonly ListAssetTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetTypes API call.

---

##### `ListBlueprints`<sup>Required</sup> <a name="ListBlueprints" id="@cdk_utils/iam.glue.GlueOperations.property.ListBlueprints"></a>

```typescript
public readonly ListBlueprints: string[];
```

- *Type:* string[]

IAM actions required for the ListBlueprints API call.

---

##### `ListColumnStatisticsTaskRuns`<sup>Required</sup> <a name="ListColumnStatisticsTaskRuns" id="@cdk_utils/iam.glue.GlueOperations.property.ListColumnStatisticsTaskRuns"></a>

```typescript
public readonly ListColumnStatisticsTaskRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListColumnStatisticsTaskRuns API call.

---

##### `ListConnectionTypes`<sup>Required</sup> <a name="ListConnectionTypes" id="@cdk_utils/iam.glue.GlueOperations.property.ListConnectionTypes"></a>

```typescript
public readonly ListConnectionTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectionTypes API call.

---

##### `ListCrawlers`<sup>Required</sup> <a name="ListCrawlers" id="@cdk_utils/iam.glue.GlueOperations.property.ListCrawlers"></a>

```typescript
public readonly ListCrawlers: string[];
```

- *Type:* string[]

IAM actions required for the ListCrawlers API call.

---

##### `ListCrawls`<sup>Required</sup> <a name="ListCrawls" id="@cdk_utils/iam.glue.GlueOperations.property.ListCrawls"></a>

```typescript
public readonly ListCrawls: string[];
```

- *Type:* string[]

IAM actions required for the ListCrawls API call.

---

##### `ListCustomEntityTypes`<sup>Required</sup> <a name="ListCustomEntityTypes" id="@cdk_utils/iam.glue.GlueOperations.property.ListCustomEntityTypes"></a>

```typescript
public readonly ListCustomEntityTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomEntityTypes API call.

---

##### `ListDataQualityResults`<sup>Required</sup> <a name="ListDataQualityResults" id="@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityResults"></a>

```typescript
public readonly ListDataQualityResults: string[];
```

- *Type:* string[]

IAM actions required for the ListDataQualityResults API call.

---

##### `ListDataQualityRuleRecommendationRuns`<sup>Required</sup> <a name="ListDataQualityRuleRecommendationRuns" id="@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityRuleRecommendationRuns"></a>

```typescript
public readonly ListDataQualityRuleRecommendationRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListDataQualityRuleRecommendationRuns API call.

---

##### `ListDataQualityRulesetEvaluationRuns`<sup>Required</sup> <a name="ListDataQualityRulesetEvaluationRuns" id="@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityRulesetEvaluationRuns"></a>

```typescript
public readonly ListDataQualityRulesetEvaluationRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListDataQualityRulesetEvaluationRuns API call.

---

##### `ListDataQualityRulesets`<sup>Required</sup> <a name="ListDataQualityRulesets" id="@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityRulesets"></a>

```typescript
public readonly ListDataQualityRulesets: string[];
```

- *Type:* string[]

IAM actions required for the ListDataQualityRulesets API call.

---

##### `ListDataQualityStatisticAnnotations`<sup>Required</sup> <a name="ListDataQualityStatisticAnnotations" id="@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityStatisticAnnotations"></a>

```typescript
public readonly ListDataQualityStatisticAnnotations: string[];
```

- *Type:* string[]

IAM actions required for the ListDataQualityStatisticAnnotations API call.

---

##### `ListDataQualityStatistics`<sup>Required</sup> <a name="ListDataQualityStatistics" id="@cdk_utils/iam.glue.GlueOperations.property.ListDataQualityStatistics"></a>

```typescript
public readonly ListDataQualityStatistics: string[];
```

- *Type:* string[]

IAM actions required for the ListDataQualityStatistics API call.

---

##### `ListDevEndpoints`<sup>Required</sup> <a name="ListDevEndpoints" id="@cdk_utils/iam.glue.GlueOperations.property.ListDevEndpoints"></a>

```typescript
public readonly ListDevEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListDevEndpoints API call.

---

##### `ListEntities`<sup>Required</sup> <a name="ListEntities" id="@cdk_utils/iam.glue.GlueOperations.property.ListEntities"></a>

```typescript
public readonly ListEntities: string[];
```

- *Type:* string[]

IAM actions required for the ListEntities API call.

---

##### `ListFormTypes`<sup>Required</sup> <a name="ListFormTypes" id="@cdk_utils/iam.glue.GlueOperations.property.ListFormTypes"></a>

```typescript
public readonly ListFormTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListFormTypes API call.

---

##### `ListGlossaries`<sup>Required</sup> <a name="ListGlossaries" id="@cdk_utils/iam.glue.GlueOperations.property.ListGlossaries"></a>

```typescript
public readonly ListGlossaries: string[];
```

- *Type:* string[]

IAM actions required for the ListGlossaries API call.

---

##### `ListGlossaryTerms`<sup>Required</sup> <a name="ListGlossaryTerms" id="@cdk_utils/iam.glue.GlueOperations.property.ListGlossaryTerms"></a>

```typescript
public readonly ListGlossaryTerms: string[];
```

- *Type:* string[]

IAM actions required for the ListGlossaryTerms API call.

---

##### `ListIntegrationResourceProperties`<sup>Required</sup> <a name="ListIntegrationResourceProperties" id="@cdk_utils/iam.glue.GlueOperations.property.ListIntegrationResourceProperties"></a>

```typescript
public readonly ListIntegrationResourceProperties: string[];
```

- *Type:* string[]

IAM actions required for the ListIntegrationResourceProperties API call.

---

##### `ListIterableForms`<sup>Required</sup> <a name="ListIterableForms" id="@cdk_utils/iam.glue.GlueOperations.property.ListIterableForms"></a>

```typescript
public readonly ListIterableForms: string[];
```

- *Type:* string[]

IAM actions required for the ListIterableForms API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.glue.GlueOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListMaterializedViewRefreshTaskRuns`<sup>Required</sup> <a name="ListMaterializedViewRefreshTaskRuns" id="@cdk_utils/iam.glue.GlueOperations.property.ListMaterializedViewRefreshTaskRuns"></a>

```typescript
public readonly ListMaterializedViewRefreshTaskRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListMaterializedViewRefreshTaskRuns API call.

---

##### `ListMLTransforms`<sup>Required</sup> <a name="ListMLTransforms" id="@cdk_utils/iam.glue.GlueOperations.property.ListMLTransforms"></a>

```typescript
public readonly ListMLTransforms: string[];
```

- *Type:* string[]

IAM actions required for the ListMLTransforms API call.

---

##### `ListRegistries`<sup>Required</sup> <a name="ListRegistries" id="@cdk_utils/iam.glue.GlueOperations.property.ListRegistries"></a>

```typescript
public readonly ListRegistries: string[];
```

- *Type:* string[]

IAM actions required for the ListRegistries API call.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.glue.GlueOperations.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string[];
```

- *Type:* string[]

IAM actions required for the ListSchemas API call.

---

##### `ListSchemaVersions`<sup>Required</sup> <a name="ListSchemaVersions" id="@cdk_utils/iam.glue.GlueOperations.property.ListSchemaVersions"></a>

```typescript
public readonly ListSchemaVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListSchemaVersions API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.glue.GlueOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListStatements`<sup>Required</sup> <a name="ListStatements" id="@cdk_utils/iam.glue.GlueOperations.property.ListStatements"></a>

```typescript
public readonly ListStatements: string[];
```

- *Type:* string[]

IAM actions required for the ListStatements API call.

---

##### `ListTableOptimizerRuns`<sup>Required</sup> <a name="ListTableOptimizerRuns" id="@cdk_utils/iam.glue.GlueOperations.property.ListTableOptimizerRuns"></a>

```typescript
public readonly ListTableOptimizerRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListTableOptimizerRuns API call.

---

##### `ListTriggers`<sup>Required</sup> <a name="ListTriggers" id="@cdk_utils/iam.glue.GlueOperations.property.ListTriggers"></a>

```typescript
public readonly ListTriggers: string[];
```

- *Type:* string[]

IAM actions required for the ListTriggers API call.

---

##### `ListUsageProfiles`<sup>Required</sup> <a name="ListUsageProfiles" id="@cdk_utils/iam.glue.GlueOperations.property.ListUsageProfiles"></a>

```typescript
public readonly ListUsageProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListUsageProfiles API call.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.glue.GlueOperations.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflows API call.

---

##### `ModifyIntegration`<sup>Required</sup> <a name="ModifyIntegration" id="@cdk_utils/iam.glue.GlueOperations.property.ModifyIntegration"></a>

```typescript
public readonly ModifyIntegration: string[];
```

- *Type:* string[]

IAM actions required for the ModifyIntegration API call.

---

##### `opGetAsset`<sup>Required</sup> <a name="opGetAsset" id="@cdk_utils/iam.glue.GlueOperations.property.opGetAsset"></a>

```typescript
public readonly opGetAsset: string[];
```

- *Type:* string[]

IAM actions required for the GetAsset API call.

---

##### `opGetAssetType`<sup>Required</sup> <a name="opGetAssetType" id="@cdk_utils/iam.glue.GlueOperations.property.opGetAssetType"></a>

```typescript
public readonly opGetAssetType: string[];
```

- *Type:* string[]

IAM actions required for the GetAssetType API call.

---

##### `opGetBlueprint`<sup>Required</sup> <a name="opGetBlueprint" id="@cdk_utils/iam.glue.GlueOperations.property.opGetBlueprint"></a>

```typescript
public readonly opGetBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the GetBlueprint API call.

---

##### `opGetBlueprintRun`<sup>Required</sup> <a name="opGetBlueprintRun" id="@cdk_utils/iam.glue.GlueOperations.property.opGetBlueprintRun"></a>

```typescript
public readonly opGetBlueprintRun: string[];
```

- *Type:* string[]

IAM actions required for the GetBlueprintRun API call.

---

##### `opGetBlueprintRuns`<sup>Required</sup> <a name="opGetBlueprintRuns" id="@cdk_utils/iam.glue.GlueOperations.property.opGetBlueprintRuns"></a>

```typescript
public readonly opGetBlueprintRuns: string[];
```

- *Type:* string[]

IAM actions required for the GetBlueprintRuns API call.

---

##### `opGetCatalog`<sup>Required</sup> <a name="opGetCatalog" id="@cdk_utils/iam.glue.GlueOperations.property.opGetCatalog"></a>

```typescript
public readonly opGetCatalog: string[];
```

- *Type:* string[]

IAM actions required for the GetCatalog API call.

---

##### `opGetCatalogImportStatus`<sup>Required</sup> <a name="opGetCatalogImportStatus" id="@cdk_utils/iam.glue.GlueOperations.property.opGetCatalogImportStatus"></a>

```typescript
public readonly opGetCatalogImportStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetCatalogImportStatus API call.

---

##### `opGetCatalogs`<sup>Required</sup> <a name="opGetCatalogs" id="@cdk_utils/iam.glue.GlueOperations.property.opGetCatalogs"></a>

```typescript
public readonly opGetCatalogs: string[];
```

- *Type:* string[]

IAM actions required for the GetCatalogs API call.

---

##### `opGetClassifier`<sup>Required</sup> <a name="opGetClassifier" id="@cdk_utils/iam.glue.GlueOperations.property.opGetClassifier"></a>

```typescript
public readonly opGetClassifier: string[];
```

- *Type:* string[]

IAM actions required for the GetClassifier API call.

---

##### `opGetClassifiers`<sup>Required</sup> <a name="opGetClassifiers" id="@cdk_utils/iam.glue.GlueOperations.property.opGetClassifiers"></a>

```typescript
public readonly opGetClassifiers: string[];
```

- *Type:* string[]

IAM actions required for the GetClassifiers API call.

---

##### `opGetColumnStatisticsForPartition`<sup>Required</sup> <a name="opGetColumnStatisticsForPartition" id="@cdk_utils/iam.glue.GlueOperations.property.opGetColumnStatisticsForPartition"></a>

```typescript
public readonly opGetColumnStatisticsForPartition: string[];
```

- *Type:* string[]

IAM actions required for the GetColumnStatisticsForPartition API call.

---

##### `opGetColumnStatisticsForTable`<sup>Required</sup> <a name="opGetColumnStatisticsForTable" id="@cdk_utils/iam.glue.GlueOperations.property.opGetColumnStatisticsForTable"></a>

```typescript
public readonly opGetColumnStatisticsForTable: string[];
```

- *Type:* string[]

IAM actions required for the GetColumnStatisticsForTable API call.

---

##### `opGetColumnStatisticsTaskRun`<sup>Required</sup> <a name="opGetColumnStatisticsTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.opGetColumnStatisticsTaskRun"></a>

```typescript
public readonly opGetColumnStatisticsTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the GetColumnStatisticsTaskRun API call.

---

##### `opGetColumnStatisticsTaskRuns`<sup>Required</sup> <a name="opGetColumnStatisticsTaskRuns" id="@cdk_utils/iam.glue.GlueOperations.property.opGetColumnStatisticsTaskRuns"></a>

```typescript
public readonly opGetColumnStatisticsTaskRuns: string[];
```

- *Type:* string[]

IAM actions required for the GetColumnStatisticsTaskRuns API call.

---

##### `opGetColumnStatisticsTaskSettings`<sup>Required</sup> <a name="opGetColumnStatisticsTaskSettings" id="@cdk_utils/iam.glue.GlueOperations.property.opGetColumnStatisticsTaskSettings"></a>

```typescript
public readonly opGetColumnStatisticsTaskSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetColumnStatisticsTaskSettings API call.

---

##### `opGetConnection`<sup>Required</sup> <a name="opGetConnection" id="@cdk_utils/iam.glue.GlueOperations.property.opGetConnection"></a>

```typescript
public readonly opGetConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetConnection API call.

---

##### `opGetConnections`<sup>Required</sup> <a name="opGetConnections" id="@cdk_utils/iam.glue.GlueOperations.property.opGetConnections"></a>

```typescript
public readonly opGetConnections: string[];
```

- *Type:* string[]

IAM actions required for the GetConnections API call.

---

##### `opGetCrawler`<sup>Required</sup> <a name="opGetCrawler" id="@cdk_utils/iam.glue.GlueOperations.property.opGetCrawler"></a>

```typescript
public readonly opGetCrawler: string[];
```

- *Type:* string[]

IAM actions required for the GetCrawler API call.

---

##### `opGetCrawlerMetrics`<sup>Required</sup> <a name="opGetCrawlerMetrics" id="@cdk_utils/iam.glue.GlueOperations.property.opGetCrawlerMetrics"></a>

```typescript
public readonly opGetCrawlerMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetCrawlerMetrics API call.

---

##### `opGetCrawlers`<sup>Required</sup> <a name="opGetCrawlers" id="@cdk_utils/iam.glue.GlueOperations.property.opGetCrawlers"></a>

```typescript
public readonly opGetCrawlers: string[];
```

- *Type:* string[]

IAM actions required for the GetCrawlers API call.

---

##### `opGetCustomEntityType`<sup>Required</sup> <a name="opGetCustomEntityType" id="@cdk_utils/iam.glue.GlueOperations.property.opGetCustomEntityType"></a>

```typescript
public readonly opGetCustomEntityType: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomEntityType API call.

---

##### `opGetDashboardUrl`<sup>Required</sup> <a name="opGetDashboardUrl" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDashboardUrl"></a>

```typescript
public readonly opGetDashboardUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetDashboardUrl API call.

---

##### `opGetDatabase`<sup>Required</sup> <a name="opGetDatabase" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDatabase"></a>

```typescript
public readonly opGetDatabase: string[];
```

- *Type:* string[]

IAM actions required for the GetDatabase API call.

---

##### `opGetDatabases`<sup>Required</sup> <a name="opGetDatabases" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDatabases"></a>

```typescript
public readonly opGetDatabases: string[];
```

- *Type:* string[]

IAM actions required for the GetDatabases API call.

---

##### `opGetDataCatalogEncryptionSettings`<sup>Required</sup> <a name="opGetDataCatalogEncryptionSettings" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDataCatalogEncryptionSettings"></a>

```typescript
public readonly opGetDataCatalogEncryptionSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetDataCatalogEncryptionSettings API call.

---

##### `opGetDataCatalogExportConfiguration`<sup>Required</sup> <a name="opGetDataCatalogExportConfiguration" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDataCatalogExportConfiguration"></a>

```typescript
public readonly opGetDataCatalogExportConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetDataCatalogExportConfiguration API call.

---

##### `opGetDataflowGraph`<sup>Required</sup> <a name="opGetDataflowGraph" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDataflowGraph"></a>

```typescript
public readonly opGetDataflowGraph: string[];
```

- *Type:* string[]

IAM actions required for the GetDataflowGraph API call.

---

##### `opGetDataQualityModel`<sup>Required</sup> <a name="opGetDataQualityModel" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityModel"></a>

```typescript
public readonly opGetDataQualityModel: string[];
```

- *Type:* string[]

IAM actions required for the GetDataQualityModel API call.

---

##### `opGetDataQualityModelResult`<sup>Required</sup> <a name="opGetDataQualityModelResult" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityModelResult"></a>

```typescript
public readonly opGetDataQualityModelResult: string[];
```

- *Type:* string[]

IAM actions required for the GetDataQualityModelResult API call.

---

##### `opGetDataQualityResult`<sup>Required</sup> <a name="opGetDataQualityResult" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityResult"></a>

```typescript
public readonly opGetDataQualityResult: string[];
```

- *Type:* string[]

IAM actions required for the GetDataQualityResult API call.

---

##### `opGetDataQualityRuleRecommendationRun`<sup>Required</sup> <a name="opGetDataQualityRuleRecommendationRun" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityRuleRecommendationRun"></a>

```typescript
public readonly opGetDataQualityRuleRecommendationRun: string[];
```

- *Type:* string[]

IAM actions required for the GetDataQualityRuleRecommendationRun API call.

---

##### `opGetDataQualityRuleset`<sup>Required</sup> <a name="opGetDataQualityRuleset" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityRuleset"></a>

```typescript
public readonly opGetDataQualityRuleset: string[];
```

- *Type:* string[]

IAM actions required for the GetDataQualityRuleset API call.

---

##### `opGetDataQualityRulesetEvaluationRun`<sup>Required</sup> <a name="opGetDataQualityRulesetEvaluationRun" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDataQualityRulesetEvaluationRun"></a>

```typescript
public readonly opGetDataQualityRulesetEvaluationRun: string[];
```

- *Type:* string[]

IAM actions required for the GetDataQualityRulesetEvaluationRun API call.

---

##### `opGetDevEndpoint`<sup>Required</sup> <a name="opGetDevEndpoint" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDevEndpoint"></a>

```typescript
public readonly opGetDevEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetDevEndpoint API call.

---

##### `opGetDevEndpoints`<sup>Required</sup> <a name="opGetDevEndpoints" id="@cdk_utils/iam.glue.GlueOperations.property.opGetDevEndpoints"></a>

```typescript
public readonly opGetDevEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the GetDevEndpoints API call.

---

##### `opGetEntityRecords`<sup>Required</sup> <a name="opGetEntityRecords" id="@cdk_utils/iam.glue.GlueOperations.property.opGetEntityRecords"></a>

```typescript
public readonly opGetEntityRecords: string[];
```

- *Type:* string[]

IAM actions required for the GetEntityRecords API call.

---

##### `opGetFormType`<sup>Required</sup> <a name="opGetFormType" id="@cdk_utils/iam.glue.GlueOperations.property.opGetFormType"></a>

```typescript
public readonly opGetFormType: string[];
```

- *Type:* string[]

IAM actions required for the GetFormType API call.

---

##### `opGetGlossary`<sup>Required</sup> <a name="opGetGlossary" id="@cdk_utils/iam.glue.GlueOperations.property.opGetGlossary"></a>

```typescript
public readonly opGetGlossary: string[];
```

- *Type:* string[]

IAM actions required for the GetGlossary API call.

---

##### `opGetGlossaryTerm`<sup>Required</sup> <a name="opGetGlossaryTerm" id="@cdk_utils/iam.glue.GlueOperations.property.opGetGlossaryTerm"></a>

```typescript
public readonly opGetGlossaryTerm: string[];
```

- *Type:* string[]

IAM actions required for the GetGlossaryTerm API call.

---

##### `opGetGlueIdentityCenterConfiguration`<sup>Required</sup> <a name="opGetGlueIdentityCenterConfiguration" id="@cdk_utils/iam.glue.GlueOperations.property.opGetGlueIdentityCenterConfiguration"></a>

```typescript
public readonly opGetGlueIdentityCenterConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetGlueIdentityCenterConfiguration API call.

---

##### `opGetIntegrationResourceProperty`<sup>Required</sup> <a name="opGetIntegrationResourceProperty" id="@cdk_utils/iam.glue.GlueOperations.property.opGetIntegrationResourceProperty"></a>

```typescript
public readonly opGetIntegrationResourceProperty: string[];
```

- *Type:* string[]

IAM actions required for the GetIntegrationResourceProperty API call.

---

##### `opGetIntegrationTableProperties`<sup>Required</sup> <a name="opGetIntegrationTableProperties" id="@cdk_utils/iam.glue.GlueOperations.property.opGetIntegrationTableProperties"></a>

```typescript
public readonly opGetIntegrationTableProperties: string[];
```

- *Type:* string[]

IAM actions required for the GetIntegrationTableProperties API call.

---

##### `opGetJob`<sup>Required</sup> <a name="opGetJob" id="@cdk_utils/iam.glue.GlueOperations.property.opGetJob"></a>

```typescript
public readonly opGetJob: string[];
```

- *Type:* string[]

IAM actions required for the GetJob API call.

---

##### `opGetJobBookmark`<sup>Required</sup> <a name="opGetJobBookmark" id="@cdk_utils/iam.glue.GlueOperations.property.opGetJobBookmark"></a>

```typescript
public readonly opGetJobBookmark: string[];
```

- *Type:* string[]

IAM actions required for the GetJobBookmark API call.

---

##### `opGetJobRun`<sup>Required</sup> <a name="opGetJobRun" id="@cdk_utils/iam.glue.GlueOperations.property.opGetJobRun"></a>

```typescript
public readonly opGetJobRun: string[];
```

- *Type:* string[]

IAM actions required for the GetJobRun API call.

---

##### `opGetJobRuns`<sup>Required</sup> <a name="opGetJobRuns" id="@cdk_utils/iam.glue.GlueOperations.property.opGetJobRuns"></a>

```typescript
public readonly opGetJobRuns: string[];
```

- *Type:* string[]

IAM actions required for the GetJobRuns API call.

---

##### `opGetJobs`<sup>Required</sup> <a name="opGetJobs" id="@cdk_utils/iam.glue.GlueOperations.property.opGetJobs"></a>

```typescript
public readonly opGetJobs: string[];
```

- *Type:* string[]

IAM actions required for the GetJobs API call.

---

##### `opGetMapping`<sup>Required</sup> <a name="opGetMapping" id="@cdk_utils/iam.glue.GlueOperations.property.opGetMapping"></a>

```typescript
public readonly opGetMapping: string[];
```

- *Type:* string[]

IAM actions required for the GetMapping API call.

---

##### `opGetMaterializedViewRefreshTaskRun`<sup>Required</sup> <a name="opGetMaterializedViewRefreshTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.opGetMaterializedViewRefreshTaskRun"></a>

```typescript
public readonly opGetMaterializedViewRefreshTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the GetMaterializedViewRefreshTaskRun API call.

---

##### `opGetMLTaskRun`<sup>Required</sup> <a name="opGetMLTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.opGetMLTaskRun"></a>

```typescript
public readonly opGetMLTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the GetMLTaskRun API call.

---

##### `opGetMLTaskRuns`<sup>Required</sup> <a name="opGetMLTaskRuns" id="@cdk_utils/iam.glue.GlueOperations.property.opGetMLTaskRuns"></a>

```typescript
public readonly opGetMLTaskRuns: string[];
```

- *Type:* string[]

IAM actions required for the GetMLTaskRuns API call.

---

##### `opGetMLTransform`<sup>Required</sup> <a name="opGetMLTransform" id="@cdk_utils/iam.glue.GlueOperations.property.opGetMLTransform"></a>

```typescript
public readonly opGetMLTransform: string[];
```

- *Type:* string[]

IAM actions required for the GetMLTransform API call.

---

##### `opGetMLTransforms`<sup>Required</sup> <a name="opGetMLTransforms" id="@cdk_utils/iam.glue.GlueOperations.property.opGetMLTransforms"></a>

```typescript
public readonly opGetMLTransforms: string[];
```

- *Type:* string[]

IAM actions required for the GetMLTransforms API call.

---

##### `opGetPartition`<sup>Required</sup> <a name="opGetPartition" id="@cdk_utils/iam.glue.GlueOperations.property.opGetPartition"></a>

```typescript
public readonly opGetPartition: string[];
```

- *Type:* string[]

IAM actions required for the GetPartition API call.

---

##### `opGetPartitionIndexes`<sup>Required</sup> <a name="opGetPartitionIndexes" id="@cdk_utils/iam.glue.GlueOperations.property.opGetPartitionIndexes"></a>

```typescript
public readonly opGetPartitionIndexes: string[];
```

- *Type:* string[]

IAM actions required for the GetPartitionIndexes API call.

---

##### `opGetPartitions`<sup>Required</sup> <a name="opGetPartitions" id="@cdk_utils/iam.glue.GlueOperations.property.opGetPartitions"></a>

```typescript
public readonly opGetPartitions: string[];
```

- *Type:* string[]

IAM actions required for the GetPartitions API call.

---

##### `opGetPlan`<sup>Required</sup> <a name="opGetPlan" id="@cdk_utils/iam.glue.GlueOperations.property.opGetPlan"></a>

```typescript
public readonly opGetPlan: string[];
```

- *Type:* string[]

IAM actions required for the GetPlan API call.

---

##### `opGetRegistry`<sup>Required</sup> <a name="opGetRegistry" id="@cdk_utils/iam.glue.GlueOperations.property.opGetRegistry"></a>

```typescript
public readonly opGetRegistry: string[];
```

- *Type:* string[]

IAM actions required for the GetRegistry API call.

---

##### `opGetResourcePolicies`<sup>Required</sup> <a name="opGetResourcePolicies" id="@cdk_utils/iam.glue.GlueOperations.property.opGetResourcePolicies"></a>

```typescript
public readonly opGetResourcePolicies: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicies API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.glue.GlueOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetSchema`<sup>Required</sup> <a name="opGetSchema" id="@cdk_utils/iam.glue.GlueOperations.property.opGetSchema"></a>

```typescript
public readonly opGetSchema: string[];
```

- *Type:* string[]

IAM actions required for the GetSchema API call.

---

##### `opGetSchemaByDefinition`<sup>Required</sup> <a name="opGetSchemaByDefinition" id="@cdk_utils/iam.glue.GlueOperations.property.opGetSchemaByDefinition"></a>

```typescript
public readonly opGetSchemaByDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetSchemaByDefinition API call.

---

##### `opGetSchemaVersion`<sup>Required</sup> <a name="opGetSchemaVersion" id="@cdk_utils/iam.glue.GlueOperations.property.opGetSchemaVersion"></a>

```typescript
public readonly opGetSchemaVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetSchemaVersion API call.

---

##### `opGetSchemaVersionsDiff`<sup>Required</sup> <a name="opGetSchemaVersionsDiff" id="@cdk_utils/iam.glue.GlueOperations.property.opGetSchemaVersionsDiff"></a>

```typescript
public readonly opGetSchemaVersionsDiff: string[];
```

- *Type:* string[]

IAM actions required for the GetSchemaVersionsDiff API call.

---

##### `opGetSecurityConfiguration`<sup>Required</sup> <a name="opGetSecurityConfiguration" id="@cdk_utils/iam.glue.GlueOperations.property.opGetSecurityConfiguration"></a>

```typescript
public readonly opGetSecurityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetSecurityConfiguration API call.

---

##### `opGetSecurityConfigurations`<sup>Required</sup> <a name="opGetSecurityConfigurations" id="@cdk_utils/iam.glue.GlueOperations.property.opGetSecurityConfigurations"></a>

```typescript
public readonly opGetSecurityConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the GetSecurityConfigurations API call.

---

##### `opGetSession`<sup>Required</sup> <a name="opGetSession" id="@cdk_utils/iam.glue.GlueOperations.property.opGetSession"></a>

```typescript
public readonly opGetSession: string[];
```

- *Type:* string[]

IAM actions required for the GetSession API call.

---

##### `opGetSessionEndpoint`<sup>Required</sup> <a name="opGetSessionEndpoint" id="@cdk_utils/iam.glue.GlueOperations.property.opGetSessionEndpoint"></a>

```typescript
public readonly opGetSessionEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetSessionEndpoint API call.

---

##### `opGetStatement`<sup>Required</sup> <a name="opGetStatement" id="@cdk_utils/iam.glue.GlueOperations.property.opGetStatement"></a>

```typescript
public readonly opGetStatement: string[];
```

- *Type:* string[]

IAM actions required for the GetStatement API call.

---

##### `opGetTable`<sup>Required</sup> <a name="opGetTable" id="@cdk_utils/iam.glue.GlueOperations.property.opGetTable"></a>

```typescript
public readonly opGetTable: string[];
```

- *Type:* string[]

IAM actions required for the GetTable API call.

---

##### `opGetTableOptimizer`<sup>Required</sup> <a name="opGetTableOptimizer" id="@cdk_utils/iam.glue.GlueOperations.property.opGetTableOptimizer"></a>

```typescript
public readonly opGetTableOptimizer: string[];
```

- *Type:* string[]

IAM actions required for the GetTableOptimizer API call.

---

##### `opGetTables`<sup>Required</sup> <a name="opGetTables" id="@cdk_utils/iam.glue.GlueOperations.property.opGetTables"></a>

```typescript
public readonly opGetTables: string[];
```

- *Type:* string[]

IAM actions required for the GetTables API call.

---

##### `opGetTableVersion`<sup>Required</sup> <a name="opGetTableVersion" id="@cdk_utils/iam.glue.GlueOperations.property.opGetTableVersion"></a>

```typescript
public readonly opGetTableVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetTableVersion API call.

---

##### `opGetTableVersions`<sup>Required</sup> <a name="opGetTableVersions" id="@cdk_utils/iam.glue.GlueOperations.property.opGetTableVersions"></a>

```typescript
public readonly opGetTableVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetTableVersions API call.

---

##### `opGetTags`<sup>Required</sup> <a name="opGetTags" id="@cdk_utils/iam.glue.GlueOperations.property.opGetTags"></a>

```typescript
public readonly opGetTags: string[];
```

- *Type:* string[]

IAM actions required for the GetTags API call.

---

##### `opGetTrigger`<sup>Required</sup> <a name="opGetTrigger" id="@cdk_utils/iam.glue.GlueOperations.property.opGetTrigger"></a>

```typescript
public readonly opGetTrigger: string[];
```

- *Type:* string[]

IAM actions required for the GetTrigger API call.

---

##### `opGetTriggers`<sup>Required</sup> <a name="opGetTriggers" id="@cdk_utils/iam.glue.GlueOperations.property.opGetTriggers"></a>

```typescript
public readonly opGetTriggers: string[];
```

- *Type:* string[]

IAM actions required for the GetTriggers API call.

---

##### `opGetUnfilteredPartitionMetadata`<sup>Required</sup> <a name="opGetUnfilteredPartitionMetadata" id="@cdk_utils/iam.glue.GlueOperations.property.opGetUnfilteredPartitionMetadata"></a>

```typescript
public readonly opGetUnfilteredPartitionMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetUnfilteredPartitionMetadata API call.

---

##### `opGetUnfilteredPartitionsMetadata`<sup>Required</sup> <a name="opGetUnfilteredPartitionsMetadata" id="@cdk_utils/iam.glue.GlueOperations.property.opGetUnfilteredPartitionsMetadata"></a>

```typescript
public readonly opGetUnfilteredPartitionsMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetUnfilteredPartitionsMetadata API call.

---

##### `opGetUnfilteredTableMetadata`<sup>Required</sup> <a name="opGetUnfilteredTableMetadata" id="@cdk_utils/iam.glue.GlueOperations.property.opGetUnfilteredTableMetadata"></a>

```typescript
public readonly opGetUnfilteredTableMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetUnfilteredTableMetadata API call.

---

##### `opGetUsageProfile`<sup>Required</sup> <a name="opGetUsageProfile" id="@cdk_utils/iam.glue.GlueOperations.property.opGetUsageProfile"></a>

```typescript
public readonly opGetUsageProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetUsageProfile API call.

---

##### `opGetUserDefinedFunction`<sup>Required</sup> <a name="opGetUserDefinedFunction" id="@cdk_utils/iam.glue.GlueOperations.property.opGetUserDefinedFunction"></a>

```typescript
public readonly opGetUserDefinedFunction: string[];
```

- *Type:* string[]

IAM actions required for the GetUserDefinedFunction API call.

---

##### `opGetUserDefinedFunctions`<sup>Required</sup> <a name="opGetUserDefinedFunctions" id="@cdk_utils/iam.glue.GlueOperations.property.opGetUserDefinedFunctions"></a>

```typescript
public readonly opGetUserDefinedFunctions: string[];
```

- *Type:* string[]

IAM actions required for the GetUserDefinedFunctions API call.

---

##### `opGetWorkflow`<sup>Required</sup> <a name="opGetWorkflow" id="@cdk_utils/iam.glue.GlueOperations.property.opGetWorkflow"></a>

```typescript
public readonly opGetWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflow API call.

---

##### `opGetWorkflowRun`<sup>Required</sup> <a name="opGetWorkflowRun" id="@cdk_utils/iam.glue.GlueOperations.property.opGetWorkflowRun"></a>

```typescript
public readonly opGetWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowRun API call.

---

##### `opGetWorkflowRunProperties`<sup>Required</sup> <a name="opGetWorkflowRunProperties" id="@cdk_utils/iam.glue.GlueOperations.property.opGetWorkflowRunProperties"></a>

```typescript
public readonly opGetWorkflowRunProperties: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowRunProperties API call.

---

##### `opGetWorkflowRuns`<sup>Required</sup> <a name="opGetWorkflowRuns" id="@cdk_utils/iam.glue.GlueOperations.property.opGetWorkflowRuns"></a>

```typescript
public readonly opGetWorkflowRuns: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowRuns API call.

---

##### `PutAsset`<sup>Required</sup> <a name="PutAsset" id="@cdk_utils/iam.glue.GlueOperations.property.PutAsset"></a>

```typescript
public readonly PutAsset: string[];
```

- *Type:* string[]

IAM actions required for the PutAsset API call.

---

##### `PutAssetType`<sup>Required</sup> <a name="PutAssetType" id="@cdk_utils/iam.glue.GlueOperations.property.PutAssetType"></a>

```typescript
public readonly PutAssetType: string[];
```

- *Type:* string[]

IAM actions required for the PutAssetType API call.

---

##### `PutAttachment`<sup>Required</sup> <a name="PutAttachment" id="@cdk_utils/iam.glue.GlueOperations.property.PutAttachment"></a>

```typescript
public readonly PutAttachment: string[];
```

- *Type:* string[]

IAM actions required for the PutAttachment API call.

---

##### `PutDataCatalogEncryptionSettings`<sup>Required</sup> <a name="PutDataCatalogEncryptionSettings" id="@cdk_utils/iam.glue.GlueOperations.property.PutDataCatalogEncryptionSettings"></a>

```typescript
public readonly PutDataCatalogEncryptionSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutDataCatalogEncryptionSettings API call.

---

##### `PutDataCatalogExportConfiguration`<sup>Required</sup> <a name="PutDataCatalogExportConfiguration" id="@cdk_utils/iam.glue.GlueOperations.property.PutDataCatalogExportConfiguration"></a>

```typescript
public readonly PutDataCatalogExportConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutDataCatalogExportConfiguration API call.

---

##### `PutDataQualityProfileAnnotation`<sup>Required</sup> <a name="PutDataQualityProfileAnnotation" id="@cdk_utils/iam.glue.GlueOperations.property.PutDataQualityProfileAnnotation"></a>

```typescript
public readonly PutDataQualityProfileAnnotation: string[];
```

- *Type:* string[]

IAM actions required for the PutDataQualityProfileAnnotation API call.

---

##### `PutFormType`<sup>Required</sup> <a name="PutFormType" id="@cdk_utils/iam.glue.GlueOperations.property.PutFormType"></a>

```typescript
public readonly PutFormType: string[];
```

- *Type:* string[]

IAM actions required for the PutFormType API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.glue.GlueOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `PutSchemaVersionMetadata`<sup>Required</sup> <a name="PutSchemaVersionMetadata" id="@cdk_utils/iam.glue.GlueOperations.property.PutSchemaVersionMetadata"></a>

```typescript
public readonly PutSchemaVersionMetadata: string[];
```

- *Type:* string[]

IAM actions required for the PutSchemaVersionMetadata API call.

---

##### `PutWorkflowRunProperties`<sup>Required</sup> <a name="PutWorkflowRunProperties" id="@cdk_utils/iam.glue.GlueOperations.property.PutWorkflowRunProperties"></a>

```typescript
public readonly PutWorkflowRunProperties: string[];
```

- *Type:* string[]

IAM actions required for the PutWorkflowRunProperties API call.

---

##### `QuerySchemaVersionMetadata`<sup>Required</sup> <a name="QuerySchemaVersionMetadata" id="@cdk_utils/iam.glue.GlueOperations.property.QuerySchemaVersionMetadata"></a>

```typescript
public readonly QuerySchemaVersionMetadata: string[];
```

- *Type:* string[]

IAM actions required for the QuerySchemaVersionMetadata API call.

---

##### `RegisterConnectionType`<sup>Required</sup> <a name="RegisterConnectionType" id="@cdk_utils/iam.glue.GlueOperations.property.RegisterConnectionType"></a>

```typescript
public readonly RegisterConnectionType: string[];
```

- *Type:* string[]

IAM actions required for the RegisterConnectionType API call.

---

##### `RegisterSchemaVersion`<sup>Required</sup> <a name="RegisterSchemaVersion" id="@cdk_utils/iam.glue.GlueOperations.property.RegisterSchemaVersion"></a>

```typescript
public readonly RegisterSchemaVersion: string[];
```

- *Type:* string[]

IAM actions required for the RegisterSchemaVersion API call.

---

##### `RemoveSchemaVersionMetadata`<sup>Required</sup> <a name="RemoveSchemaVersionMetadata" id="@cdk_utils/iam.glue.GlueOperations.property.RemoveSchemaVersionMetadata"></a>

```typescript
public readonly RemoveSchemaVersionMetadata: string[];
```

- *Type:* string[]

IAM actions required for the RemoveSchemaVersionMetadata API call.

---

##### `ResetJobBookmark`<sup>Required</sup> <a name="ResetJobBookmark" id="@cdk_utils/iam.glue.GlueOperations.property.ResetJobBookmark"></a>

```typescript
public readonly ResetJobBookmark: string[];
```

- *Type:* string[]

IAM actions required for the ResetJobBookmark API call.

---

##### `ResumeWorkflowRun`<sup>Required</sup> <a name="ResumeWorkflowRun" id="@cdk_utils/iam.glue.GlueOperations.property.ResumeWorkflowRun"></a>

```typescript
public readonly ResumeWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the ResumeWorkflowRun API call.

---

##### `RunStatement`<sup>Required</sup> <a name="RunStatement" id="@cdk_utils/iam.glue.GlueOperations.property.RunStatement"></a>

```typescript
public readonly RunStatement: string[];
```

- *Type:* string[]

IAM actions required for the RunStatement API call.

---

##### `SearchAssets`<sup>Required</sup> <a name="SearchAssets" id="@cdk_utils/iam.glue.GlueOperations.property.SearchAssets"></a>

```typescript
public readonly SearchAssets: string[];
```

- *Type:* string[]

IAM actions required for the SearchAssets API call.

---

##### `SearchTables`<sup>Required</sup> <a name="SearchTables" id="@cdk_utils/iam.glue.GlueOperations.property.SearchTables"></a>

```typescript
public readonly SearchTables: string[];
```

- *Type:* string[]

IAM actions required for the SearchTables API call.

---

##### `StartBlueprintRun`<sup>Required</sup> <a name="StartBlueprintRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartBlueprintRun"></a>

```typescript
public readonly StartBlueprintRun: string[];
```

- *Type:* string[]

IAM actions required for the StartBlueprintRun API call.

---

##### `StartColumnStatisticsTaskRun`<sup>Required</sup> <a name="StartColumnStatisticsTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartColumnStatisticsTaskRun"></a>

```typescript
public readonly StartColumnStatisticsTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the StartColumnStatisticsTaskRun API call.

---

##### `StartColumnStatisticsTaskRunSchedule`<sup>Required</sup> <a name="StartColumnStatisticsTaskRunSchedule" id="@cdk_utils/iam.glue.GlueOperations.property.StartColumnStatisticsTaskRunSchedule"></a>

```typescript
public readonly StartColumnStatisticsTaskRunSchedule: string[];
```

- *Type:* string[]

IAM actions required for the StartColumnStatisticsTaskRunSchedule API call.

---

##### `StartCrawler`<sup>Required</sup> <a name="StartCrawler" id="@cdk_utils/iam.glue.GlueOperations.property.StartCrawler"></a>

```typescript
public readonly StartCrawler: string[];
```

- *Type:* string[]

IAM actions required for the StartCrawler API call.

---

##### `StartCrawlerSchedule`<sup>Required</sup> <a name="StartCrawlerSchedule" id="@cdk_utils/iam.glue.GlueOperations.property.StartCrawlerSchedule"></a>

```typescript
public readonly StartCrawlerSchedule: string[];
```

- *Type:* string[]

IAM actions required for the StartCrawlerSchedule API call.

---

##### `StartDataQualityRuleRecommendationRun`<sup>Required</sup> <a name="StartDataQualityRuleRecommendationRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartDataQualityRuleRecommendationRun"></a>

```typescript
public readonly StartDataQualityRuleRecommendationRun: string[];
```

- *Type:* string[]

IAM actions required for the StartDataQualityRuleRecommendationRun API call.

---

##### `StartDataQualityRulesetEvaluationRun`<sup>Required</sup> <a name="StartDataQualityRulesetEvaluationRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartDataQualityRulesetEvaluationRun"></a>

```typescript
public readonly StartDataQualityRulesetEvaluationRun: string[];
```

- *Type:* string[]

IAM actions required for the StartDataQualityRulesetEvaluationRun API call.

---

##### `StartExportLabelsTaskRun`<sup>Required</sup> <a name="StartExportLabelsTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartExportLabelsTaskRun"></a>

```typescript
public readonly StartExportLabelsTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the StartExportLabelsTaskRun API call.

---

##### `StartImportLabelsTaskRun`<sup>Required</sup> <a name="StartImportLabelsTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartImportLabelsTaskRun"></a>

```typescript
public readonly StartImportLabelsTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the StartImportLabelsTaskRun API call.

---

##### `StartJobRun`<sup>Required</sup> <a name="StartJobRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartJobRun"></a>

```typescript
public readonly StartJobRun: string[];
```

- *Type:* string[]

IAM actions required for the StartJobRun API call.

---

##### `StartMaterializedViewRefreshTaskRun`<sup>Required</sup> <a name="StartMaterializedViewRefreshTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartMaterializedViewRefreshTaskRun"></a>

```typescript
public readonly StartMaterializedViewRefreshTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the StartMaterializedViewRefreshTaskRun API call.

---

##### `StartMLEvaluationTaskRun`<sup>Required</sup> <a name="StartMLEvaluationTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartMLEvaluationTaskRun"></a>

```typescript
public readonly StartMLEvaluationTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the StartMLEvaluationTaskRun API call.

---

##### `StartMLLabelingSetGenerationTaskRun`<sup>Required</sup> <a name="StartMLLabelingSetGenerationTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartMLLabelingSetGenerationTaskRun"></a>

```typescript
public readonly StartMLLabelingSetGenerationTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the StartMLLabelingSetGenerationTaskRun API call.

---

##### `StartTrigger`<sup>Required</sup> <a name="StartTrigger" id="@cdk_utils/iam.glue.GlueOperations.property.StartTrigger"></a>

```typescript
public readonly StartTrigger: string[];
```

- *Type:* string[]

IAM actions required for the StartTrigger API call.

---

##### `StartWorkflowRun`<sup>Required</sup> <a name="StartWorkflowRun" id="@cdk_utils/iam.glue.GlueOperations.property.StartWorkflowRun"></a>

```typescript
public readonly StartWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the StartWorkflowRun API call.

---

##### `StopColumnStatisticsTaskRun`<sup>Required</sup> <a name="StopColumnStatisticsTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.StopColumnStatisticsTaskRun"></a>

```typescript
public readonly StopColumnStatisticsTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the StopColumnStatisticsTaskRun API call.

---

##### `StopColumnStatisticsTaskRunSchedule`<sup>Required</sup> <a name="StopColumnStatisticsTaskRunSchedule" id="@cdk_utils/iam.glue.GlueOperations.property.StopColumnStatisticsTaskRunSchedule"></a>

```typescript
public readonly StopColumnStatisticsTaskRunSchedule: string[];
```

- *Type:* string[]

IAM actions required for the StopColumnStatisticsTaskRunSchedule API call.

---

##### `StopCrawler`<sup>Required</sup> <a name="StopCrawler" id="@cdk_utils/iam.glue.GlueOperations.property.StopCrawler"></a>

```typescript
public readonly StopCrawler: string[];
```

- *Type:* string[]

IAM actions required for the StopCrawler API call.

---

##### `StopCrawlerSchedule`<sup>Required</sup> <a name="StopCrawlerSchedule" id="@cdk_utils/iam.glue.GlueOperations.property.StopCrawlerSchedule"></a>

```typescript
public readonly StopCrawlerSchedule: string[];
```

- *Type:* string[]

IAM actions required for the StopCrawlerSchedule API call.

---

##### `StopMaterializedViewRefreshTaskRun`<sup>Required</sup> <a name="StopMaterializedViewRefreshTaskRun" id="@cdk_utils/iam.glue.GlueOperations.property.StopMaterializedViewRefreshTaskRun"></a>

```typescript
public readonly StopMaterializedViewRefreshTaskRun: string[];
```

- *Type:* string[]

IAM actions required for the StopMaterializedViewRefreshTaskRun API call.

---

##### `StopSession`<sup>Required</sup> <a name="StopSession" id="@cdk_utils/iam.glue.GlueOperations.property.StopSession"></a>

```typescript
public readonly StopSession: string[];
```

- *Type:* string[]

IAM actions required for the StopSession API call.

---

##### `StopTrigger`<sup>Required</sup> <a name="StopTrigger" id="@cdk_utils/iam.glue.GlueOperations.property.StopTrigger"></a>

```typescript
public readonly StopTrigger: string[];
```

- *Type:* string[]

IAM actions required for the StopTrigger API call.

---

##### `StopWorkflowRun`<sup>Required</sup> <a name="StopWorkflowRun" id="@cdk_utils/iam.glue.GlueOperations.property.StopWorkflowRun"></a>

```typescript
public readonly StopWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the StopWorkflowRun API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.glue.GlueOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestConnection`<sup>Required</sup> <a name="TestConnection" id="@cdk_utils/iam.glue.GlueOperations.property.TestConnection"></a>

```typescript
public readonly TestConnection: string[];
```

- *Type:* string[]

IAM actions required for the TestConnection API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.glue.GlueOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAsset`<sup>Required</sup> <a name="UpdateAsset" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateAsset"></a>

```typescript
public readonly UpdateAsset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAsset API call.

---

##### `UpdateBlueprint`<sup>Required</sup> <a name="UpdateBlueprint" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateBlueprint"></a>

```typescript
public readonly UpdateBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBlueprint API call.

---

##### `UpdateCatalog`<sup>Required</sup> <a name="UpdateCatalog" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateCatalog"></a>

```typescript
public readonly UpdateCatalog: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCatalog API call.

---

##### `UpdateClassifier`<sup>Required</sup> <a name="UpdateClassifier" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateClassifier"></a>

```typescript
public readonly UpdateClassifier: string[];
```

- *Type:* string[]

IAM actions required for the UpdateClassifier API call.

---

##### `UpdateColumnStatisticsForPartition`<sup>Required</sup> <a name="UpdateColumnStatisticsForPartition" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateColumnStatisticsForPartition"></a>

```typescript
public readonly UpdateColumnStatisticsForPartition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateColumnStatisticsForPartition API call.

---

##### `UpdateColumnStatisticsForTable`<sup>Required</sup> <a name="UpdateColumnStatisticsForTable" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateColumnStatisticsForTable"></a>

```typescript
public readonly UpdateColumnStatisticsForTable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateColumnStatisticsForTable API call.

---

##### `UpdateColumnStatisticsTaskSettings`<sup>Required</sup> <a name="UpdateColumnStatisticsTaskSettings" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateColumnStatisticsTaskSettings"></a>

```typescript
public readonly UpdateColumnStatisticsTaskSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateColumnStatisticsTaskSettings API call.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnection API call.

---

##### `UpdateCrawler`<sup>Required</sup> <a name="UpdateCrawler" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateCrawler"></a>

```typescript
public readonly UpdateCrawler: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCrawler API call.

---

##### `UpdateCrawlerSchedule`<sup>Required</sup> <a name="UpdateCrawlerSchedule" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateCrawlerSchedule"></a>

```typescript
public readonly UpdateCrawlerSchedule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCrawlerSchedule API call.

---

##### `UpdateDatabase`<sup>Required</sup> <a name="UpdateDatabase" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateDatabase"></a>

```typescript
public readonly UpdateDatabase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDatabase API call.

---

##### `UpdateDataQualityRuleset`<sup>Required</sup> <a name="UpdateDataQualityRuleset" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateDataQualityRuleset"></a>

```typescript
public readonly UpdateDataQualityRuleset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataQualityRuleset API call.

---

##### `UpdateDevEndpoint`<sup>Required</sup> <a name="UpdateDevEndpoint" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateDevEndpoint"></a>

```typescript
public readonly UpdateDevEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDevEndpoint API call.

---

##### `UpdateGlossary`<sup>Required</sup> <a name="UpdateGlossary" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateGlossary"></a>

```typescript
public readonly UpdateGlossary: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlossary API call.

---

##### `UpdateGlossaryTerm`<sup>Required</sup> <a name="UpdateGlossaryTerm" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateGlossaryTerm"></a>

```typescript
public readonly UpdateGlossaryTerm: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlossaryTerm API call.

---

##### `UpdateGlueIdentityCenterConfiguration`<sup>Required</sup> <a name="UpdateGlueIdentityCenterConfiguration" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateGlueIdentityCenterConfiguration"></a>

```typescript
public readonly UpdateGlueIdentityCenterConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlueIdentityCenterConfiguration API call.

---

##### `UpdateIntegrationResourceProperty`<sup>Required</sup> <a name="UpdateIntegrationResourceProperty" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateIntegrationResourceProperty"></a>

```typescript
public readonly UpdateIntegrationResourceProperty: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIntegrationResourceProperty API call.

---

##### `UpdateIntegrationTableProperties`<sup>Required</sup> <a name="UpdateIntegrationTableProperties" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateIntegrationTableProperties"></a>

```typescript
public readonly UpdateIntegrationTableProperties: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIntegrationTableProperties API call.

---

##### `UpdateJob`<sup>Required</sup> <a name="UpdateJob" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateJob"></a>

```typescript
public readonly UpdateJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJob API call.

---

##### `UpdateJobFromSourceControl`<sup>Required</sup> <a name="UpdateJobFromSourceControl" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateJobFromSourceControl"></a>

```typescript
public readonly UpdateJobFromSourceControl: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJobFromSourceControl API call.

---

##### `UpdateMLTransform`<sup>Required</sup> <a name="UpdateMLTransform" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateMLTransform"></a>

```typescript
public readonly UpdateMLTransform: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMLTransform API call.

---

##### `UpdatePartition`<sup>Required</sup> <a name="UpdatePartition" id="@cdk_utils/iam.glue.GlueOperations.property.UpdatePartition"></a>

```typescript
public readonly UpdatePartition: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePartition API call.

---

##### `UpdateRegistry`<sup>Required</sup> <a name="UpdateRegistry" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateRegistry"></a>

```typescript
public readonly UpdateRegistry: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegistry API call.

---

##### `UpdateSchema`<sup>Required</sup> <a name="UpdateSchema" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateSchema"></a>

```typescript
public readonly UpdateSchema: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSchema API call.

---

##### `UpdateSourceControlFromJob`<sup>Required</sup> <a name="UpdateSourceControlFromJob" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateSourceControlFromJob"></a>

```typescript
public readonly UpdateSourceControlFromJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSourceControlFromJob API call.

---

##### `UpdateTable`<sup>Required</sup> <a name="UpdateTable" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateTable"></a>

```typescript
public readonly UpdateTable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTable API call.

---

##### `UpdateTableOptimizer`<sup>Required</sup> <a name="UpdateTableOptimizer" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateTableOptimizer"></a>

```typescript
public readonly UpdateTableOptimizer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTableOptimizer API call.

---

##### `UpdateTrigger`<sup>Required</sup> <a name="UpdateTrigger" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateTrigger"></a>

```typescript
public readonly UpdateTrigger: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrigger API call.

---

##### `UpdateUsageProfile`<sup>Required</sup> <a name="UpdateUsageProfile" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateUsageProfile"></a>

```typescript
public readonly UpdateUsageProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUsageProfile API call.

---

##### `UpdateUserDefinedFunction`<sup>Required</sup> <a name="UpdateUserDefinedFunction" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateUserDefinedFunction"></a>

```typescript
public readonly UpdateUserDefinedFunction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserDefinedFunction API call.

---

##### `UpdateWorkflow`<sup>Required</sup> <a name="UpdateWorkflow" id="@cdk_utils/iam.glue.GlueOperations.property.UpdateWorkflow"></a>

```typescript
public readonly UpdateWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkflow API call.

---

### GlueResources <a name="GlueResources" id="@cdk_utils/iam.glue.GlueResources"></a>

ARN builders, validators, and parsers for glue resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.glue.GlueResources.Initializer"></a>

```typescript
import { glue } from '@cdk_utils/iam'

new glue.GlueResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.blueprint">blueprint</a></code> | Builds an ARN for the blueprint resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.catalog">catalog</a></code> | Builds an ARN for the catalog resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.completion">completion</a></code> | Builds an ARN for the completion resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.connection">connection</a></code> | Builds an ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.connectionType">connectionType</a></code> | Builds an ARN for the connectionType resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.crawler">crawler</a></code> | Builds an ARN for the crawler resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.customEntityType">customEntityType</a></code> | Builds an ARN for the customEntityType resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.database">database</a></code> | Builds an ARN for the database resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.dataQualityRuleset">dataQualityRuleset</a></code> | Builds an ARN for the dataQualityRuleset resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.devendpoint">devendpoint</a></code> | Builds an ARN for the devendpoint resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.integration">integration</a></code> | Builds an ARN for the integration resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.integrationResourceProperty">integrationResourceProperty</a></code> | Builds an ARN for the integrationResourceProperty resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidBlueprintArn">isValidBlueprintArn</a></code> | Validates whether a string is a valid ARN for the blueprint resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidCatalogArn">isValidCatalogArn</a></code> | Validates whether a string is a valid ARN for the catalog resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidCompletionArn">isValidCompletionArn</a></code> | Validates whether a string is a valid ARN for the completion resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidConnectionArn">isValidConnectionArn</a></code> | Validates whether a string is a valid ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidConnectionTypeArn">isValidConnectionTypeArn</a></code> | Validates whether a string is a valid ARN for the connectionType resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidCrawlerArn">isValidCrawlerArn</a></code> | Validates whether a string is a valid ARN for the crawler resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidCustomEntityTypeArn">isValidCustomEntityTypeArn</a></code> | Validates whether a string is a valid ARN for the customEntityType resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidDatabaseArn">isValidDatabaseArn</a></code> | Validates whether a string is a valid ARN for the database resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidDataQualityRulesetArn">isValidDataQualityRulesetArn</a></code> | Validates whether a string is a valid ARN for the dataQualityRuleset resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidDevendpointArn">isValidDevendpointArn</a></code> | Validates whether a string is a valid ARN for the devendpoint resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidIntegrationArn">isValidIntegrationArn</a></code> | Validates whether a string is a valid ARN for the integration resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidIntegrationResourcePropertyArn">isValidIntegrationResourcePropertyArn</a></code> | Validates whether a string is a valid ARN for the integrationResourceProperty resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidMlTransformArn">isValidMlTransformArn</a></code> | Validates whether a string is a valid ARN for the mlTransform resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidRegistryArn">isValidRegistryArn</a></code> | Validates whether a string is a valid ARN for the registry resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidRootcatalogArn">isValidRootcatalogArn</a></code> | Validates whether a string is a valid ARN for the rootcatalog resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidSchemaArn">isValidSchemaArn</a></code> | Validates whether a string is a valid ARN for the schema resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidTableArn">isValidTableArn</a></code> | Validates whether a string is a valid ARN for the table resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidTableversionArn">isValidTableversionArn</a></code> | Validates whether a string is a valid ARN for the tableversion resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidTriggerArn">isValidTriggerArn</a></code> | Validates whether a string is a valid ARN for the trigger resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidUsageProfileArn">isValidUsageProfileArn</a></code> | Validates whether a string is a valid ARN for the usageProfile resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidUserdefinedfunctionArn">isValidUserdefinedfunctionArn</a></code> | Validates whether a string is a valid ARN for the userdefinedfunction resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.isValidWorkflowArn">isValidWorkflowArn</a></code> | Validates whether a string is a valid ARN for the workflow resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.job">job</a></code> | Builds an ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.mlTransform">mlTransform</a></code> | Builds an ARN for the mlTransform resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseBlueprintArn">parseBlueprintArn</a></code> | Parses a blueprint ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseCatalogArn">parseCatalogArn</a></code> | Parses a catalog ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseCompletionArn">parseCompletionArn</a></code> | Parses a completion ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseConnectionArn">parseConnectionArn</a></code> | Parses a connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseConnectionTypeArn">parseConnectionTypeArn</a></code> | Parses a connectionType ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseCrawlerArn">parseCrawlerArn</a></code> | Parses a crawler ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseCustomEntityTypeArn">parseCustomEntityTypeArn</a></code> | Parses a customEntityType ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseDatabaseArn">parseDatabaseArn</a></code> | Parses a database ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseDataQualityRulesetArn">parseDataQualityRulesetArn</a></code> | Parses a dataQualityRuleset ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseDevendpointArn">parseDevendpointArn</a></code> | Parses a devendpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseIntegrationArn">parseIntegrationArn</a></code> | Parses a integration ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseIntegrationResourcePropertyArn">parseIntegrationResourcePropertyArn</a></code> | Parses a integrationResourceProperty ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseJobArn">parseJobArn</a></code> | Parses a job ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseMlTransformArn">parseMlTransformArn</a></code> | Parses a mlTransform ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseRegistryArn">parseRegistryArn</a></code> | Parses a registry ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseRootcatalogArn">parseRootcatalogArn</a></code> | Parses a rootcatalog ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseSchemaArn">parseSchemaArn</a></code> | Parses a schema ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseSessionArn">parseSessionArn</a></code> | Parses a session ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseTableArn">parseTableArn</a></code> | Parses a table ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseTableversionArn">parseTableversionArn</a></code> | Parses a tableversion ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseTriggerArn">parseTriggerArn</a></code> | Parses a trigger ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseUsageProfileArn">parseUsageProfileArn</a></code> | Parses a usageProfile ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseUserdefinedfunctionArn">parseUserdefinedfunctionArn</a></code> | Parses a userdefinedfunction ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.parseWorkflowArn">parseWorkflowArn</a></code> | Parses a workflow ARN into its components. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.registry">registry</a></code> | Builds an ARN for the registry resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.rootcatalog">rootcatalog</a></code> | Builds an ARN for the rootcatalog resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.schema">schema</a></code> | Builds an ARN for the schema resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.session">session</a></code> | Builds an ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.table">table</a></code> | Builds an ARN for the table resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.tableversion">tableversion</a></code> | Builds an ARN for the tableversion resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.trigger">trigger</a></code> | Builds an ARN for the trigger resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.usageProfile">usageProfile</a></code> | Builds an ARN for the usageProfile resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.userdefinedfunction">userdefinedfunction</a></code> | Builds an ARN for the userdefinedfunction resource. |
| <code><a href="#@cdk_utils/iam.glue.GlueResources.workflow">workflow</a></code> | Builds an ARN for the workflow resource. |

---

##### `blueprint` <a name="blueprint" id="@cdk_utils/iam.glue.GlueResources.blueprint"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.blueprint(props: GlueBlueprintArnProps)
```

Builds an ARN for the blueprint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.blueprint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueBlueprintArnProps">GlueBlueprintArnProps</a>

---

##### `catalog` <a name="catalog" id="@cdk_utils/iam.glue.GlueResources.catalog"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.catalog(props: GlueCatalogArnProps)
```

Builds an ARN for the catalog resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.catalog.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueCatalogArnProps">GlueCatalogArnProps</a>

---

##### `completion` <a name="completion" id="@cdk_utils/iam.glue.GlueResources.completion"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.completion(props: GlueCompletionArnProps)
```

Builds an ARN for the completion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.completion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueCompletionArnProps">GlueCompletionArnProps</a>

---

##### `connection` <a name="connection" id="@cdk_utils/iam.glue.GlueResources.connection"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.connection(props: GlueConnectionArnProps)
```

Builds an ARN for the connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.connection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueConnectionArnProps">GlueConnectionArnProps</a>

---

##### `connectionType` <a name="connectionType" id="@cdk_utils/iam.glue.GlueResources.connectionType"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.connectionType(props: GlueConnectionTypeArnProps)
```

Builds an ARN for the connectionType resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.connectionType.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueConnectionTypeArnProps">GlueConnectionTypeArnProps</a>

---

##### `crawler` <a name="crawler" id="@cdk_utils/iam.glue.GlueResources.crawler"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.crawler(props: GlueCrawlerArnProps)
```

Builds an ARN for the crawler resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.crawler.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueCrawlerArnProps">GlueCrawlerArnProps</a>

---

##### `customEntityType` <a name="customEntityType" id="@cdk_utils/iam.glue.GlueResources.customEntityType"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.customEntityType(props: GlueCustomEntityTypeArnProps)
```

Builds an ARN for the customEntityType resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.customEntityType.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueCustomEntityTypeArnProps">GlueCustomEntityTypeArnProps</a>

---

##### `database` <a name="database" id="@cdk_utils/iam.glue.GlueResources.database"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.database(props: GlueDatabaseArnProps)
```

Builds an ARN for the database resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.database.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueDatabaseArnProps">GlueDatabaseArnProps</a>

---

##### `dataQualityRuleset` <a name="dataQualityRuleset" id="@cdk_utils/iam.glue.GlueResources.dataQualityRuleset"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.dataQualityRuleset(props: GlueDataQualityRulesetArnProps)
```

Builds an ARN for the dataQualityRuleset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.dataQualityRuleset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueDataQualityRulesetArnProps">GlueDataQualityRulesetArnProps</a>

---

##### `devendpoint` <a name="devendpoint" id="@cdk_utils/iam.glue.GlueResources.devendpoint"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.devendpoint(props: GlueDevendpointArnProps)
```

Builds an ARN for the devendpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.devendpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueDevendpointArnProps">GlueDevendpointArnProps</a>

---

##### `integration` <a name="integration" id="@cdk_utils/iam.glue.GlueResources.integration"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.integration(props: GlueIntegrationArnProps)
```

Builds an ARN for the integration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.integration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueIntegrationArnProps">GlueIntegrationArnProps</a>

---

##### `integrationResourceProperty` <a name="integrationResourceProperty" id="@cdk_utils/iam.glue.GlueResources.integrationResourceProperty"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.integrationResourceProperty(props: GlueIntegrationResourcePropertyArnProps)
```

Builds an ARN for the integrationResourceProperty resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.integrationResourceProperty.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueIntegrationResourcePropertyArnProps">GlueIntegrationResourcePropertyArnProps</a>

---

##### `isValidBlueprintArn` <a name="isValidBlueprintArn" id="@cdk_utils/iam.glue.GlueResources.isValidBlueprintArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidBlueprintArn(arn: string)
```

Validates whether a string is a valid ARN for the blueprint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidBlueprintArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCatalogArn` <a name="isValidCatalogArn" id="@cdk_utils/iam.glue.GlueResources.isValidCatalogArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidCatalogArn(arn: string)
```

Validates whether a string is a valid ARN for the catalog resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidCatalogArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCompletionArn` <a name="isValidCompletionArn" id="@cdk_utils/iam.glue.GlueResources.isValidCompletionArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidCompletionArn(arn: string)
```

Validates whether a string is a valid ARN for the completion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidCompletionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionArn` <a name="isValidConnectionArn" id="@cdk_utils/iam.glue.GlueResources.isValidConnectionArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionTypeArn` <a name="isValidConnectionTypeArn" id="@cdk_utils/iam.glue.GlueResources.isValidConnectionTypeArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidConnectionTypeArn(arn: string)
```

Validates whether a string is a valid ARN for the connectionType resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidConnectionTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCrawlerArn` <a name="isValidCrawlerArn" id="@cdk_utils/iam.glue.GlueResources.isValidCrawlerArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidCrawlerArn(arn: string)
```

Validates whether a string is a valid ARN for the crawler resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidCrawlerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomEntityTypeArn` <a name="isValidCustomEntityTypeArn" id="@cdk_utils/iam.glue.GlueResources.isValidCustomEntityTypeArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidCustomEntityTypeArn(arn: string)
```

Validates whether a string is a valid ARN for the customEntityType resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidCustomEntityTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatabaseArn` <a name="isValidDatabaseArn" id="@cdk_utils/iam.glue.GlueResources.isValidDatabaseArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidDatabaseArn(arn: string)
```

Validates whether a string is a valid ARN for the database resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataQualityRulesetArn` <a name="isValidDataQualityRulesetArn" id="@cdk_utils/iam.glue.GlueResources.isValidDataQualityRulesetArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidDataQualityRulesetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataQualityRuleset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidDataQualityRulesetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDevendpointArn` <a name="isValidDevendpointArn" id="@cdk_utils/iam.glue.GlueResources.isValidDevendpointArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidDevendpointArn(arn: string)
```

Validates whether a string is a valid ARN for the devendpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidDevendpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationArn` <a name="isValidIntegrationArn" id="@cdk_utils/iam.glue.GlueResources.isValidIntegrationArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationResourcePropertyArn` <a name="isValidIntegrationResourcePropertyArn" id="@cdk_utils/iam.glue.GlueResources.isValidIntegrationResourcePropertyArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidIntegrationResourcePropertyArn(arn: string)
```

Validates whether a string is a valid ARN for the integrationResourceProperty resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidIntegrationResourcePropertyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.glue.GlueResources.isValidJobArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMlTransformArn` <a name="isValidMlTransformArn" id="@cdk_utils/iam.glue.GlueResources.isValidMlTransformArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidMlTransformArn(arn: string)
```

Validates whether a string is a valid ARN for the mlTransform resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidMlTransformArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegistryArn` <a name="isValidRegistryArn" id="@cdk_utils/iam.glue.GlueResources.isValidRegistryArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidRegistryArn(arn: string)
```

Validates whether a string is a valid ARN for the registry resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidRegistryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRootcatalogArn` <a name="isValidRootcatalogArn" id="@cdk_utils/iam.glue.GlueResources.isValidRootcatalogArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidRootcatalogArn(arn: string)
```

Validates whether a string is a valid ARN for the rootcatalog resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidRootcatalogArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSchemaArn` <a name="isValidSchemaArn" id="@cdk_utils/iam.glue.GlueResources.isValidSchemaArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidSchemaArn(arn: string)
```

Validates whether a string is a valid ARN for the schema resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.glue.GlueResources.isValidSessionArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTableArn` <a name="isValidTableArn" id="@cdk_utils/iam.glue.GlueResources.isValidTableArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidTableArn(arn: string)
```

Validates whether a string is a valid ARN for the table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidTableArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTableversionArn` <a name="isValidTableversionArn" id="@cdk_utils/iam.glue.GlueResources.isValidTableversionArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidTableversionArn(arn: string)
```

Validates whether a string is a valid ARN for the tableversion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidTableversionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTriggerArn` <a name="isValidTriggerArn" id="@cdk_utils/iam.glue.GlueResources.isValidTriggerArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidTriggerArn(arn: string)
```

Validates whether a string is a valid ARN for the trigger resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidTriggerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUsageProfileArn` <a name="isValidUsageProfileArn" id="@cdk_utils/iam.glue.GlueResources.isValidUsageProfileArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidUsageProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the usageProfile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidUsageProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserdefinedfunctionArn` <a name="isValidUserdefinedfunctionArn" id="@cdk_utils/iam.glue.GlueResources.isValidUserdefinedfunctionArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidUserdefinedfunctionArn(arn: string)
```

Validates whether a string is a valid ARN for the userdefinedfunction resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidUserdefinedfunctionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkflowArn` <a name="isValidWorkflowArn" id="@cdk_utils/iam.glue.GlueResources.isValidWorkflowArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.isValidWorkflowArn(arn: string)
```

Validates whether a string is a valid ARN for the workflow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.isValidWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.glue.GlueResources.job"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.job(props: GlueJobArnProps)
```

Builds an ARN for the job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueJobArnProps">GlueJobArnProps</a>

---

##### `mlTransform` <a name="mlTransform" id="@cdk_utils/iam.glue.GlueResources.mlTransform"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.mlTransform(props: GlueMlTransformArnProps)
```

Builds an ARN for the mlTransform resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.mlTransform.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueMlTransformArnProps">GlueMlTransformArnProps</a>

---

##### `parseBlueprintArn` <a name="parseBlueprintArn" id="@cdk_utils/iam.glue.GlueResources.parseBlueprintArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseBlueprintArn(arn: string)
```

Parses a blueprint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseBlueprintArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCatalogArn` <a name="parseCatalogArn" id="@cdk_utils/iam.glue.GlueResources.parseCatalogArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseCatalogArn(arn: string)
```

Parses a catalog ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseCatalogArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCompletionArn` <a name="parseCompletionArn" id="@cdk_utils/iam.glue.GlueResources.parseCompletionArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseCompletionArn(arn: string)
```

Parses a completion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseCompletionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionArn` <a name="parseConnectionArn" id="@cdk_utils/iam.glue.GlueResources.parseConnectionArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseConnectionArn(arn: string)
```

Parses a connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionTypeArn` <a name="parseConnectionTypeArn" id="@cdk_utils/iam.glue.GlueResources.parseConnectionTypeArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseConnectionTypeArn(arn: string)
```

Parses a connectionType ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseConnectionTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCrawlerArn` <a name="parseCrawlerArn" id="@cdk_utils/iam.glue.GlueResources.parseCrawlerArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseCrawlerArn(arn: string)
```

Parses a crawler ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseCrawlerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomEntityTypeArn` <a name="parseCustomEntityTypeArn" id="@cdk_utils/iam.glue.GlueResources.parseCustomEntityTypeArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseCustomEntityTypeArn(arn: string)
```

Parses a customEntityType ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseCustomEntityTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatabaseArn` <a name="parseDatabaseArn" id="@cdk_utils/iam.glue.GlueResources.parseDatabaseArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseDatabaseArn(arn: string)
```

Parses a database ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataQualityRulesetArn` <a name="parseDataQualityRulesetArn" id="@cdk_utils/iam.glue.GlueResources.parseDataQualityRulesetArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseDataQualityRulesetArn(arn: string)
```

Parses a dataQualityRuleset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseDataQualityRulesetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDevendpointArn` <a name="parseDevendpointArn" id="@cdk_utils/iam.glue.GlueResources.parseDevendpointArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseDevendpointArn(arn: string)
```

Parses a devendpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseDevendpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationArn` <a name="parseIntegrationArn" id="@cdk_utils/iam.glue.GlueResources.parseIntegrationArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseIntegrationArn(arn: string)
```

Parses a integration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationResourcePropertyArn` <a name="parseIntegrationResourcePropertyArn" id="@cdk_utils/iam.glue.GlueResources.parseIntegrationResourcePropertyArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseIntegrationResourcePropertyArn(arn: string)
```

Parses a integrationResourceProperty ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseIntegrationResourcePropertyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.glue.GlueResources.parseJobArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseJobArn(arn: string)
```

Parses a job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMlTransformArn` <a name="parseMlTransformArn" id="@cdk_utils/iam.glue.GlueResources.parseMlTransformArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseMlTransformArn(arn: string)
```

Parses a mlTransform ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseMlTransformArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegistryArn` <a name="parseRegistryArn" id="@cdk_utils/iam.glue.GlueResources.parseRegistryArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseRegistryArn(arn: string)
```

Parses a registry ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseRegistryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRootcatalogArn` <a name="parseRootcatalogArn" id="@cdk_utils/iam.glue.GlueResources.parseRootcatalogArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseRootcatalogArn(arn: string)
```

Parses a rootcatalog ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseRootcatalogArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSchemaArn` <a name="parseSchemaArn" id="@cdk_utils/iam.glue.GlueResources.parseSchemaArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseSchemaArn(arn: string)
```

Parses a schema ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.glue.GlueResources.parseSessionArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseSessionArn(arn: string)
```

Parses a session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTableArn` <a name="parseTableArn" id="@cdk_utils/iam.glue.GlueResources.parseTableArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseTableArn(arn: string)
```

Parses a table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseTableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTableversionArn` <a name="parseTableversionArn" id="@cdk_utils/iam.glue.GlueResources.parseTableversionArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseTableversionArn(arn: string)
```

Parses a tableversion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseTableversionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTriggerArn` <a name="parseTriggerArn" id="@cdk_utils/iam.glue.GlueResources.parseTriggerArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseTriggerArn(arn: string)
```

Parses a trigger ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseTriggerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUsageProfileArn` <a name="parseUsageProfileArn" id="@cdk_utils/iam.glue.GlueResources.parseUsageProfileArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseUsageProfileArn(arn: string)
```

Parses a usageProfile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseUsageProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserdefinedfunctionArn` <a name="parseUserdefinedfunctionArn" id="@cdk_utils/iam.glue.GlueResources.parseUserdefinedfunctionArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseUserdefinedfunctionArn(arn: string)
```

Parses a userdefinedfunction ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseUserdefinedfunctionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowArn` <a name="parseWorkflowArn" id="@cdk_utils/iam.glue.GlueResources.parseWorkflowArn"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.parseWorkflowArn(arn: string)
```

Parses a workflow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.glue.GlueResources.parseWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `registry` <a name="registry" id="@cdk_utils/iam.glue.GlueResources.registry"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.registry(props: GlueRegistryArnProps)
```

Builds an ARN for the registry resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.registry.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueRegistryArnProps">GlueRegistryArnProps</a>

---

##### `rootcatalog` <a name="rootcatalog" id="@cdk_utils/iam.glue.GlueResources.rootcatalog"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.rootcatalog(props: GlueRootcatalogArnProps)
```

Builds an ARN for the rootcatalog resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.rootcatalog.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueRootcatalogArnProps">GlueRootcatalogArnProps</a>

---

##### `schema` <a name="schema" id="@cdk_utils/iam.glue.GlueResources.schema"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.schema(props: GlueSchemaArnProps)
```

Builds an ARN for the schema resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.schema.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueSchemaArnProps">GlueSchemaArnProps</a>

---

##### `session` <a name="session" id="@cdk_utils/iam.glue.GlueResources.session"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.session(props: GlueSessionArnProps)
```

Builds an ARN for the session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueSessionArnProps">GlueSessionArnProps</a>

---

##### `table` <a name="table" id="@cdk_utils/iam.glue.GlueResources.table"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.table(props: GlueTableArnProps)
```

Builds an ARN for the table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.table.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueTableArnProps">GlueTableArnProps</a>

---

##### `tableversion` <a name="tableversion" id="@cdk_utils/iam.glue.GlueResources.tableversion"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.tableversion(props: GlueTableversionArnProps)
```

Builds an ARN for the tableversion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.tableversion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueTableversionArnProps">GlueTableversionArnProps</a>

---

##### `trigger` <a name="trigger" id="@cdk_utils/iam.glue.GlueResources.trigger"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.trigger(props: GlueTriggerArnProps)
```

Builds an ARN for the trigger resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.trigger.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueTriggerArnProps">GlueTriggerArnProps</a>

---

##### `usageProfile` <a name="usageProfile" id="@cdk_utils/iam.glue.GlueResources.usageProfile"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.usageProfile(props: GlueUsageProfileArnProps)
```

Builds an ARN for the usageProfile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.usageProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueUsageProfileArnProps">GlueUsageProfileArnProps</a>

---

##### `userdefinedfunction` <a name="userdefinedfunction" id="@cdk_utils/iam.glue.GlueResources.userdefinedfunction"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.userdefinedfunction(props: GlueUserdefinedfunctionArnProps)
```

Builds an ARN for the userdefinedfunction resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.userdefinedfunction.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueUserdefinedfunctionArnProps">GlueUserdefinedfunctionArnProps</a>

---

##### `workflow` <a name="workflow" id="@cdk_utils/iam.glue.GlueResources.workflow"></a>

```typescript
import { glue } from '@cdk_utils/iam'

glue.GlueResources.workflow(props: GlueWorkflowArnProps)
```

Builds an ARN for the workflow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.glue.GlueResources.workflow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.glue.GlueWorkflowArnProps">GlueWorkflowArnProps</a>

---




