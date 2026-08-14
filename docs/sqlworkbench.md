# `sqlworkbench` Submodule <a name="`sqlworkbench` Submodule" id="@cdk_utils/iam.sqlworkbench"></a>


## Structs <a name="Structs" id="Structs"></a>

### SqlworkbenchChartArnComponents <a name="SqlworkbenchChartArnComponents" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnComponents"></a>

Parsed components of a chart ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnComponents.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

const sqlworkbenchChartArnComponents: sqlworkbench.SqlworkbenchChartArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SqlworkbenchChartArnProps <a name="SqlworkbenchChartArnProps" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps"></a>

Properties for building a chart ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

const sqlworkbenchChartArnProps: sqlworkbench.SqlworkbenchChartArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SqlworkbenchConnectionArnComponents <a name="SqlworkbenchConnectionArnComponents" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnComponents"></a>

Parsed components of a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnComponents.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

const sqlworkbenchConnectionArnComponents: sqlworkbench.SqlworkbenchConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SqlworkbenchConnectionArnProps <a name="SqlworkbenchConnectionArnProps" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps"></a>

Properties for building a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

const sqlworkbenchConnectionArnProps: sqlworkbench.SqlworkbenchConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SqlworkbenchNotebookArnComponents <a name="SqlworkbenchNotebookArnComponents" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnComponents"></a>

Parsed components of a notebook ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnComponents.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

const sqlworkbenchNotebookArnComponents: sqlworkbench.SqlworkbenchNotebookArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SqlworkbenchNotebookArnProps <a name="SqlworkbenchNotebookArnProps" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps"></a>

Properties for building a notebook ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

const sqlworkbenchNotebookArnProps: sqlworkbench.SqlworkbenchNotebookArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SqlworkbenchQueryArnComponents <a name="SqlworkbenchQueryArnComponents" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnComponents"></a>

Parsed components of a query ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnComponents.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

const sqlworkbenchQueryArnComponents: sqlworkbench.SqlworkbenchQueryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SqlworkbenchQueryArnProps <a name="SqlworkbenchQueryArnProps" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps"></a>

Properties for building a query ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

const sqlworkbenchQueryArnProps: sqlworkbench.SqlworkbenchQueryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SqlworkbenchActions <a name="SqlworkbenchActions" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions"></a>

IAM action constants for the sqlworkbench service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

new sqlworkbench.SqlworkbenchActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetAccountInfo">actionGetAccountInfo</a></code> | <code>string</code> | [Read] sqlworkbench:GetAccountInfo. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] sqlworkbench:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetAutocompletionMetadata">actionGetAutocompletionMetadata</a></code> | <code>string</code> | [Read] sqlworkbench:GetAutocompletionMetadata. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetAutocompletionResource">actionGetAutocompletionResource</a></code> | <code>string</code> | [Read] sqlworkbench:GetAutocompletionResource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetChart">actionGetChart</a></code> | <code>string</code> | [Read] sqlworkbench:GetChart. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] sqlworkbench:GetConnection. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetNotebook">actionGetNotebook</a></code> | <code>string</code> | [Read] sqlworkbench:GetNotebook. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetNotebookVersion">actionGetNotebookVersion</a></code> | <code>string</code> | [Read] sqlworkbench:GetNotebookVersion. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetQCustomContext">actionGetQCustomContext</a></code> | <code>string</code> | [Read] sqlworkbench:GetQCustomContext. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetQSqlPromptQuotas">actionGetQSqlPromptQuotas</a></code> | <code>string</code> | [Read] sqlworkbench:GetQSqlPromptQuotas. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetQSqlRecommendations">actionGetQSqlRecommendations</a></code> | <code>string</code> | [Read] sqlworkbench:GetQSqlRecommendations. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetQueryExecutionHistory">actionGetQueryExecutionHistory</a></code> | <code>string</code> | [Read] sqlworkbench:GetQueryExecutionHistory. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetSavedQuery">actionGetSavedQuery</a></code> | <code>string</code> | [Read] sqlworkbench:GetSavedQuery. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetSchemaInference">actionGetSchemaInference</a></code> | <code>string</code> | [Read] sqlworkbench:GetSchemaInference. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetSqlGenerationContext">actionGetSqlGenerationContext</a></code> | <code>string</code> | [Read] sqlworkbench:GetSqlGenerationContext. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetSqlRecommendations">actionGetSqlRecommendations</a></code> | <code>string</code> | [Read] sqlworkbench:GetSqlRecommendations. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetUserInfo">actionGetUserInfo</a></code> | <code>string</code> | [Read] sqlworkbench:GetUserInfo. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetUserWorkspaceSettings">actionGetUserWorkspaceSettings</a></code> | <code>string</code> | [Read] sqlworkbench:GetUserWorkspaceSettings. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AssociateConnectionWithChart">AssociateConnectionWithChart</a></code> | <code>string</code> | [Write] sqlworkbench:AssociateConnectionWithChart. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AssociateConnectionWithTab">AssociateConnectionWithTab</a></code> | <code>string</code> | [Write] sqlworkbench:AssociateConnectionWithTab. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AssociateNotebookWithTab">AssociateNotebookWithTab</a></code> | <code>string</code> | [Write] sqlworkbench:AssociateNotebookWithTab. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AssociateQueryWithTab">AssociateQueryWithTab</a></code> | <code>string</code> | [Write] sqlworkbench:AssociateQueryWithTab. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.BatchDeleteFolder">BatchDeleteFolder</a></code> | <code>string</code> | [Write] sqlworkbench:BatchDeleteFolder. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.BatchGetNotebookCell">BatchGetNotebookCell</a></code> | <code>string</code> | [Read] sqlworkbench:BatchGetNotebookCell. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateAccount">CreateAccount</a></code> | <code>string</code> | [Write] sqlworkbench:CreateAccount. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateChart">CreateChart</a></code> | <code>string</code> | [Write] sqlworkbench:CreateChart. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] sqlworkbench:CreateConnection. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateFolder">CreateFolder</a></code> | <code>string</code> | [Write] sqlworkbench:CreateFolder. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateNotebook">CreateNotebook</a></code> | <code>string</code> | [Write] sqlworkbench:CreateNotebook. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateNotebookCell">CreateNotebookCell</a></code> | <code>string</code> | [Write] sqlworkbench:CreateNotebookCell. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateNotebookFromVersion">CreateNotebookFromVersion</a></code> | <code>string</code> | [Write] sqlworkbench:CreateNotebookFromVersion. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateNotebookVersion">CreateNotebookVersion</a></code> | <code>string</code> | [Write] sqlworkbench:CreateNotebookVersion. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateSavedQuery">CreateSavedQuery</a></code> | <code>string</code> | [Write] sqlworkbench:CreateSavedQuery. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteChart">DeleteChart</a></code> | <code>string</code> | [Write] sqlworkbench:DeleteChart. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] sqlworkbench:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteNotebook">DeleteNotebook</a></code> | <code>string</code> | [Write] sqlworkbench:DeleteNotebook. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteNotebookCell">DeleteNotebookCell</a></code> | <code>string</code> | [Write] sqlworkbench:DeleteNotebookCell. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteNotebookVersion">DeleteNotebookVersion</a></code> | <code>string</code> | [Write] sqlworkbench:DeleteNotebookVersion. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteQCustomContext">DeleteQCustomContext</a></code> | <code>string</code> | [Write] sqlworkbench:DeleteQCustomContext. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteSavedQuery">DeleteSavedQuery</a></code> | <code>string</code> | [Write] sqlworkbench:DeleteSavedQuery. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteSqlGenerationContext">DeleteSqlGenerationContext</a></code> | <code>string</code> | [Write] sqlworkbench:DeleteSqlGenerationContext. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteTab">DeleteTab</a></code> | <code>string</code> | [Write] sqlworkbench:DeleteTab. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DriverExecute">DriverExecute</a></code> | <code>string</code> | [Write] sqlworkbench:DriverExecute. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DuplicateNotebook">DuplicateNotebook</a></code> | <code>string</code> | [Write] sqlworkbench:DuplicateNotebook. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ExportNotebook">ExportNotebook</a></code> | <code>string</code> | [Read] sqlworkbench:ExportNotebook. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.GenerateSession">GenerateSession</a></code> | <code>string</code> | [Write] sqlworkbench:GenerateSession. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ImportNotebook">ImportNotebook</a></code> | <code>string</code> | [Write] sqlworkbench:ImportNotebook. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] sqlworkbench:ListConnections. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListDatabases">ListDatabases</a></code> | <code>string</code> | [List] sqlworkbench:ListDatabases. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListFiles">ListFiles</a></code> | <code>string</code> | [List] sqlworkbench:ListFiles. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListNotebooks">ListNotebooks</a></code> | <code>string</code> | [List] sqlworkbench:ListNotebooks. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListNotebookVersions">ListNotebookVersions</a></code> | <code>string</code> | [List] sqlworkbench:ListNotebookVersions. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListQueryExecutionHistory">ListQueryExecutionHistory</a></code> | <code>string</code> | [List] sqlworkbench:ListQueryExecutionHistory. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListRedshiftClusters">ListRedshiftClusters</a></code> | <code>string</code> | [List] sqlworkbench:ListRedshiftClusters. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListSampleDatabases">ListSampleDatabases</a></code> | <code>string</code> | [Read] sqlworkbench:ListSampleDatabases. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListSavedQueryVersions">ListSavedQueryVersions</a></code> | <code>string</code> | [List] sqlworkbench:ListSavedQueryVersions. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListTabs">ListTabs</a></code> | <code>string</code> | [List] sqlworkbench:ListTabs. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListTaggedResources">ListTaggedResources</a></code> | <code>string</code> | [Read] sqlworkbench:ListTaggedResources. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] sqlworkbench:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.PassAccountSettings">PassAccountSettings</a></code> | <code>string</code> | [Write] sqlworkbench:PassAccountSettings. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.PutQCustomContext">PutQCustomContext</a></code> | <code>string</code> | [Write] sqlworkbench:PutQCustomContext. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.PutSqlGenerationContext">PutSqlGenerationContext</a></code> | <code>string</code> | [Write] sqlworkbench:PutSqlGenerationContext. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.PutTab">PutTab</a></code> | <code>string</code> | [Write] sqlworkbench:PutTab. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.PutUserWorkspaceSettings">PutUserWorkspaceSettings</a></code> | <code>string</code> | [Write] sqlworkbench:PutUserWorkspaceSettings. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.RestoreNotebookVersion">RestoreNotebookVersion</a></code> | <code>string</code> | [Write] sqlworkbench:RestoreNotebookVersion. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] sqlworkbench:TagResource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] sqlworkbench:UntagResource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateAccountConnectionSettings">UpdateAccountConnectionSettings</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateAccountConnectionSettings. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateAccountExportSettings">UpdateAccountExportSettings</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateAccountExportSettings. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateAccountGeneralSettings">UpdateAccountGeneralSettings</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateAccountGeneralSettings. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateAccountQSqlSettings">UpdateAccountQSqlSettings</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateAccountQSqlSettings. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateChart">UpdateChart</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateChart. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateConnection">UpdateConnection</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateConnection. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateFileFolder">UpdateFileFolder</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateFileFolder. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateFolder">UpdateFolder</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateFolder. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateNotebook">UpdateNotebook</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateNotebook. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateNotebookCellContent">UpdateNotebookCellContent</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateNotebookCellContent. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateNotebookCellLayout">UpdateNotebookCellLayout</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateNotebookCellLayout. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateSavedQuery">UpdateSavedQuery</a></code> | <code>string</code> | [Write] sqlworkbench:UpdateSavedQuery. |

---

##### `actionGetAccountInfo`<sup>Required</sup> <a name="actionGetAccountInfo" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetAccountInfo"></a>

```typescript
public readonly actionGetAccountInfo: string;
```

- *Type:* string

[Read] sqlworkbench:GetAccountInfo.

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] sqlworkbench:GetAccountSettings.

---

##### `actionGetAutocompletionMetadata`<sup>Required</sup> <a name="actionGetAutocompletionMetadata" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetAutocompletionMetadata"></a>

```typescript
public readonly actionGetAutocompletionMetadata: string;
```

- *Type:* string

[Read] sqlworkbench:GetAutocompletionMetadata.

---

##### `actionGetAutocompletionResource`<sup>Required</sup> <a name="actionGetAutocompletionResource" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetAutocompletionResource"></a>

```typescript
public readonly actionGetAutocompletionResource: string;
```

- *Type:* string

[Read] sqlworkbench:GetAutocompletionResource.

---

##### `actionGetChart`<sup>Required</sup> <a name="actionGetChart" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetChart"></a>

```typescript
public readonly actionGetChart: string;
```

- *Type:* string

[Read] sqlworkbench:GetChart.

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] sqlworkbench:GetConnection.

---

##### `actionGetNotebook`<sup>Required</sup> <a name="actionGetNotebook" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetNotebook"></a>

```typescript
public readonly actionGetNotebook: string;
```

- *Type:* string

[Read] sqlworkbench:GetNotebook.

---

##### `actionGetNotebookVersion`<sup>Required</sup> <a name="actionGetNotebookVersion" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetNotebookVersion"></a>

```typescript
public readonly actionGetNotebookVersion: string;
```

- *Type:* string

[Read] sqlworkbench:GetNotebookVersion.

---

##### `actionGetQCustomContext`<sup>Required</sup> <a name="actionGetQCustomContext" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetQCustomContext"></a>

```typescript
public readonly actionGetQCustomContext: string;
```

- *Type:* string

[Read] sqlworkbench:GetQCustomContext.

---

##### `actionGetQSqlPromptQuotas`<sup>Required</sup> <a name="actionGetQSqlPromptQuotas" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetQSqlPromptQuotas"></a>

```typescript
public readonly actionGetQSqlPromptQuotas: string;
```

- *Type:* string

[Read] sqlworkbench:GetQSqlPromptQuotas.

---

##### `actionGetQSqlRecommendations`<sup>Required</sup> <a name="actionGetQSqlRecommendations" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetQSqlRecommendations"></a>

```typescript
public readonly actionGetQSqlRecommendations: string;
```

- *Type:* string

[Read] sqlworkbench:GetQSqlRecommendations.

---

##### `actionGetQueryExecutionHistory`<sup>Required</sup> <a name="actionGetQueryExecutionHistory" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetQueryExecutionHistory"></a>

```typescript
public readonly actionGetQueryExecutionHistory: string;
```

- *Type:* string

[Read] sqlworkbench:GetQueryExecutionHistory.

---

##### `actionGetSavedQuery`<sup>Required</sup> <a name="actionGetSavedQuery" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetSavedQuery"></a>

```typescript
public readonly actionGetSavedQuery: string;
```

- *Type:* string

[Read] sqlworkbench:GetSavedQuery.

---

##### `actionGetSchemaInference`<sup>Required</sup> <a name="actionGetSchemaInference" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetSchemaInference"></a>

```typescript
public readonly actionGetSchemaInference: string;
```

- *Type:* string

[Read] sqlworkbench:GetSchemaInference.

---

##### `actionGetSqlGenerationContext`<sup>Required</sup> <a name="actionGetSqlGenerationContext" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetSqlGenerationContext"></a>

```typescript
public readonly actionGetSqlGenerationContext: string;
```

- *Type:* string

[Read] sqlworkbench:GetSqlGenerationContext.

---

##### `actionGetSqlRecommendations`<sup>Required</sup> <a name="actionGetSqlRecommendations" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetSqlRecommendations"></a>

```typescript
public readonly actionGetSqlRecommendations: string;
```

- *Type:* string

[Read] sqlworkbench:GetSqlRecommendations.

---

##### `actionGetUserInfo`<sup>Required</sup> <a name="actionGetUserInfo" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetUserInfo"></a>

```typescript
public readonly actionGetUserInfo: string;
```

- *Type:* string

[Read] sqlworkbench:GetUserInfo.

---

##### `actionGetUserWorkspaceSettings`<sup>Required</sup> <a name="actionGetUserWorkspaceSettings" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.actionGetUserWorkspaceSettings"></a>

```typescript
public readonly actionGetUserWorkspaceSettings: string;
```

- *Type:* string

[Read] sqlworkbench:GetUserWorkspaceSettings.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateConnectionWithChart`<sup>Required</sup> <a name="AssociateConnectionWithChart" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AssociateConnectionWithChart"></a>

```typescript
public readonly AssociateConnectionWithChart: string;
```

- *Type:* string

[Write] sqlworkbench:AssociateConnectionWithChart.

---

##### `AssociateConnectionWithTab`<sup>Required</sup> <a name="AssociateConnectionWithTab" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AssociateConnectionWithTab"></a>

```typescript
public readonly AssociateConnectionWithTab: string;
```

- *Type:* string

[Write] sqlworkbench:AssociateConnectionWithTab.

---

##### `AssociateNotebookWithTab`<sup>Required</sup> <a name="AssociateNotebookWithTab" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AssociateNotebookWithTab"></a>

```typescript
public readonly AssociateNotebookWithTab: string;
```

- *Type:* string

[Write] sqlworkbench:AssociateNotebookWithTab.

---

##### `AssociateQueryWithTab`<sup>Required</sup> <a name="AssociateQueryWithTab" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.AssociateQueryWithTab"></a>

```typescript
public readonly AssociateQueryWithTab: string;
```

- *Type:* string

[Write] sqlworkbench:AssociateQueryWithTab.

---

##### `BatchDeleteFolder`<sup>Required</sup> <a name="BatchDeleteFolder" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.BatchDeleteFolder"></a>

```typescript
public readonly BatchDeleteFolder: string;
```

- *Type:* string

[Write] sqlworkbench:BatchDeleteFolder.

---

##### `BatchGetNotebookCell`<sup>Required</sup> <a name="BatchGetNotebookCell" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.BatchGetNotebookCell"></a>

```typescript
public readonly BatchGetNotebookCell: string;
```

- *Type:* string

[Read] sqlworkbench:BatchGetNotebookCell.

---

##### `CreateAccount`<sup>Required</sup> <a name="CreateAccount" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateAccount"></a>

```typescript
public readonly CreateAccount: string;
```

- *Type:* string

[Write] sqlworkbench:CreateAccount.

---

##### `CreateChart`<sup>Required</sup> <a name="CreateChart" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateChart"></a>

```typescript
public readonly CreateChart: string;
```

- *Type:* string

[Write] sqlworkbench:CreateChart.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] sqlworkbench:CreateConnection.

---

##### `CreateFolder`<sup>Required</sup> <a name="CreateFolder" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateFolder"></a>

```typescript
public readonly CreateFolder: string;
```

- *Type:* string

[Write] sqlworkbench:CreateFolder.

---

##### `CreateNotebook`<sup>Required</sup> <a name="CreateNotebook" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateNotebook"></a>

```typescript
public readonly CreateNotebook: string;
```

- *Type:* string

[Write] sqlworkbench:CreateNotebook.

---

##### `CreateNotebookCell`<sup>Required</sup> <a name="CreateNotebookCell" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateNotebookCell"></a>

```typescript
public readonly CreateNotebookCell: string;
```

- *Type:* string

[Write] sqlworkbench:CreateNotebookCell.

---

##### `CreateNotebookFromVersion`<sup>Required</sup> <a name="CreateNotebookFromVersion" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateNotebookFromVersion"></a>

```typescript
public readonly CreateNotebookFromVersion: string;
```

- *Type:* string

[Write] sqlworkbench:CreateNotebookFromVersion.

---

##### `CreateNotebookVersion`<sup>Required</sup> <a name="CreateNotebookVersion" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateNotebookVersion"></a>

```typescript
public readonly CreateNotebookVersion: string;
```

- *Type:* string

[Write] sqlworkbench:CreateNotebookVersion.

---

##### `CreateSavedQuery`<sup>Required</sup> <a name="CreateSavedQuery" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.CreateSavedQuery"></a>

```typescript
public readonly CreateSavedQuery: string;
```

- *Type:* string

[Write] sqlworkbench:CreateSavedQuery.

---

##### `DeleteChart`<sup>Required</sup> <a name="DeleteChart" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteChart"></a>

```typescript
public readonly DeleteChart: string;
```

- *Type:* string

[Write] sqlworkbench:DeleteChart.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] sqlworkbench:DeleteConnection.

---

##### `DeleteNotebook`<sup>Required</sup> <a name="DeleteNotebook" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteNotebook"></a>

```typescript
public readonly DeleteNotebook: string;
```

- *Type:* string

[Write] sqlworkbench:DeleteNotebook.

---

##### `DeleteNotebookCell`<sup>Required</sup> <a name="DeleteNotebookCell" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteNotebookCell"></a>

```typescript
public readonly DeleteNotebookCell: string;
```

- *Type:* string

[Write] sqlworkbench:DeleteNotebookCell.

---

##### `DeleteNotebookVersion`<sup>Required</sup> <a name="DeleteNotebookVersion" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteNotebookVersion"></a>

```typescript
public readonly DeleteNotebookVersion: string;
```

- *Type:* string

[Write] sqlworkbench:DeleteNotebookVersion.

---

##### `DeleteQCustomContext`<sup>Required</sup> <a name="DeleteQCustomContext" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteQCustomContext"></a>

```typescript
public readonly DeleteQCustomContext: string;
```

- *Type:* string

[Write] sqlworkbench:DeleteQCustomContext.

---

##### `DeleteSavedQuery`<sup>Required</sup> <a name="DeleteSavedQuery" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteSavedQuery"></a>

```typescript
public readonly DeleteSavedQuery: string;
```

- *Type:* string

[Write] sqlworkbench:DeleteSavedQuery.

---

##### `DeleteSqlGenerationContext`<sup>Required</sup> <a name="DeleteSqlGenerationContext" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteSqlGenerationContext"></a>

```typescript
public readonly DeleteSqlGenerationContext: string;
```

- *Type:* string

[Write] sqlworkbench:DeleteSqlGenerationContext.

---

##### `DeleteTab`<sup>Required</sup> <a name="DeleteTab" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DeleteTab"></a>

```typescript
public readonly DeleteTab: string;
```

- *Type:* string

[Write] sqlworkbench:DeleteTab.

---

##### `DriverExecute`<sup>Required</sup> <a name="DriverExecute" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DriverExecute"></a>

```typescript
public readonly DriverExecute: string;
```

- *Type:* string

[Write] sqlworkbench:DriverExecute.

---

##### `DuplicateNotebook`<sup>Required</sup> <a name="DuplicateNotebook" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.DuplicateNotebook"></a>

```typescript
public readonly DuplicateNotebook: string;
```

- *Type:* string

[Write] sqlworkbench:DuplicateNotebook.

---

##### `ExportNotebook`<sup>Required</sup> <a name="ExportNotebook" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ExportNotebook"></a>

```typescript
public readonly ExportNotebook: string;
```

- *Type:* string

[Read] sqlworkbench:ExportNotebook.

---

##### `GenerateSession`<sup>Required</sup> <a name="GenerateSession" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.GenerateSession"></a>

```typescript
public readonly GenerateSession: string;
```

- *Type:* string

[Write] sqlworkbench:GenerateSession.

---

##### `ImportNotebook`<sup>Required</sup> <a name="ImportNotebook" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ImportNotebook"></a>

```typescript
public readonly ImportNotebook: string;
```

- *Type:* string

[Write] sqlworkbench:ImportNotebook.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] sqlworkbench:ListConnections.

---

##### `ListDatabases`<sup>Required</sup> <a name="ListDatabases" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListDatabases"></a>

```typescript
public readonly ListDatabases: string;
```

- *Type:* string

[List] sqlworkbench:ListDatabases.

---

##### `ListFiles`<sup>Required</sup> <a name="ListFiles" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListFiles"></a>

```typescript
public readonly ListFiles: string;
```

- *Type:* string

[List] sqlworkbench:ListFiles.

---

##### `ListNotebooks`<sup>Required</sup> <a name="ListNotebooks" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListNotebooks"></a>

```typescript
public readonly ListNotebooks: string;
```

- *Type:* string

[List] sqlworkbench:ListNotebooks.

---

##### `ListNotebookVersions`<sup>Required</sup> <a name="ListNotebookVersions" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListNotebookVersions"></a>

```typescript
public readonly ListNotebookVersions: string;
```

- *Type:* string

[List] sqlworkbench:ListNotebookVersions.

---

##### `ListQueryExecutionHistory`<sup>Required</sup> <a name="ListQueryExecutionHistory" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListQueryExecutionHistory"></a>

```typescript
public readonly ListQueryExecutionHistory: string;
```

- *Type:* string

[List] sqlworkbench:ListQueryExecutionHistory.

---

##### `ListRedshiftClusters`<sup>Required</sup> <a name="ListRedshiftClusters" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListRedshiftClusters"></a>

```typescript
public readonly ListRedshiftClusters: string;
```

- *Type:* string

[List] sqlworkbench:ListRedshiftClusters.

---

##### `ListSampleDatabases`<sup>Required</sup> <a name="ListSampleDatabases" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListSampleDatabases"></a>

```typescript
public readonly ListSampleDatabases: string;
```

- *Type:* string

[Read] sqlworkbench:ListSampleDatabases.

---

##### `ListSavedQueryVersions`<sup>Required</sup> <a name="ListSavedQueryVersions" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListSavedQueryVersions"></a>

```typescript
public readonly ListSavedQueryVersions: string;
```

- *Type:* string

[List] sqlworkbench:ListSavedQueryVersions.

---

##### `ListTabs`<sup>Required</sup> <a name="ListTabs" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListTabs"></a>

```typescript
public readonly ListTabs: string;
```

- *Type:* string

[List] sqlworkbench:ListTabs.

---

##### `ListTaggedResources`<sup>Required</sup> <a name="ListTaggedResources" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListTaggedResources"></a>

```typescript
public readonly ListTaggedResources: string;
```

- *Type:* string

[Read] sqlworkbench:ListTaggedResources.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] sqlworkbench:ListTagsForResource.

---

##### `PassAccountSettings`<sup>Required</sup> <a name="PassAccountSettings" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.PassAccountSettings"></a>

```typescript
public readonly PassAccountSettings: string;
```

- *Type:* string

[Write] sqlworkbench:PassAccountSettings.

---

##### `PutQCustomContext`<sup>Required</sup> <a name="PutQCustomContext" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.PutQCustomContext"></a>

```typescript
public readonly PutQCustomContext: string;
```

- *Type:* string

[Write] sqlworkbench:PutQCustomContext.

---

##### `PutSqlGenerationContext`<sup>Required</sup> <a name="PutSqlGenerationContext" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.PutSqlGenerationContext"></a>

```typescript
public readonly PutSqlGenerationContext: string;
```

- *Type:* string

[Write] sqlworkbench:PutSqlGenerationContext.

---

##### `PutTab`<sup>Required</sup> <a name="PutTab" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.PutTab"></a>

```typescript
public readonly PutTab: string;
```

- *Type:* string

[Write] sqlworkbench:PutTab.

---

##### `PutUserWorkspaceSettings`<sup>Required</sup> <a name="PutUserWorkspaceSettings" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.PutUserWorkspaceSettings"></a>

```typescript
public readonly PutUserWorkspaceSettings: string;
```

- *Type:* string

[Write] sqlworkbench:PutUserWorkspaceSettings.

---

##### `RestoreNotebookVersion`<sup>Required</sup> <a name="RestoreNotebookVersion" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.RestoreNotebookVersion"></a>

```typescript
public readonly RestoreNotebookVersion: string;
```

- *Type:* string

[Write] sqlworkbench:RestoreNotebookVersion.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] sqlworkbench:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] sqlworkbench:UntagResource.

---

##### `UpdateAccountConnectionSettings`<sup>Required</sup> <a name="UpdateAccountConnectionSettings" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateAccountConnectionSettings"></a>

```typescript
public readonly UpdateAccountConnectionSettings: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateAccountConnectionSettings.

---

##### `UpdateAccountExportSettings`<sup>Required</sup> <a name="UpdateAccountExportSettings" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateAccountExportSettings"></a>

```typescript
public readonly UpdateAccountExportSettings: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateAccountExportSettings.

---

##### `UpdateAccountGeneralSettings`<sup>Required</sup> <a name="UpdateAccountGeneralSettings" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateAccountGeneralSettings"></a>

```typescript
public readonly UpdateAccountGeneralSettings: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateAccountGeneralSettings.

---

##### `UpdateAccountQSqlSettings`<sup>Required</sup> <a name="UpdateAccountQSqlSettings" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateAccountQSqlSettings"></a>

```typescript
public readonly UpdateAccountQSqlSettings: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateAccountQSqlSettings.

---

##### `UpdateChart`<sup>Required</sup> <a name="UpdateChart" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateChart"></a>

```typescript
public readonly UpdateChart: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateChart.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateConnection.

---

##### `UpdateFileFolder`<sup>Required</sup> <a name="UpdateFileFolder" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateFileFolder"></a>

```typescript
public readonly UpdateFileFolder: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateFileFolder.

---

##### `UpdateFolder`<sup>Required</sup> <a name="UpdateFolder" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateFolder"></a>

```typescript
public readonly UpdateFolder: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateFolder.

---

##### `UpdateNotebook`<sup>Required</sup> <a name="UpdateNotebook" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateNotebook"></a>

```typescript
public readonly UpdateNotebook: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateNotebook.

---

##### `UpdateNotebookCellContent`<sup>Required</sup> <a name="UpdateNotebookCellContent" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateNotebookCellContent"></a>

```typescript
public readonly UpdateNotebookCellContent: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateNotebookCellContent.

---

##### `UpdateNotebookCellLayout`<sup>Required</sup> <a name="UpdateNotebookCellLayout" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateNotebookCellLayout"></a>

```typescript
public readonly UpdateNotebookCellLayout: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateNotebookCellLayout.

---

##### `UpdateSavedQuery`<sup>Required</sup> <a name="UpdateSavedQuery" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchActions.property.UpdateSavedQuery"></a>

```typescript
public readonly UpdateSavedQuery: string;
```

- *Type:* string

[Write] sqlworkbench:UpdateSavedQuery.

---

### SqlworkbenchConditions <a name="SqlworkbenchConditions" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions"></a>

Condition key constants and builders for sqlworkbench.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

new sqlworkbench.SqlworkbenchConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.requestTag"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.resourceTag"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.tagKeys"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateChartConditionKeys">CreateChartConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChart action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateConnectionConditionKeys">CreateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnection action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateNotebookCellConditionKeys">CreateNotebookCellConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNotebookCell action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateNotebookConditionKeys">CreateNotebookConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNotebook action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateNotebookFromVersionConditionKeys">CreateNotebookFromVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNotebookFromVersion action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateNotebookVersionConditionKeys">CreateNotebookVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNotebookVersion action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateSavedQueryConditionKeys">CreateSavedQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSavedQuery action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.DuplicateNotebookConditionKeys">DuplicateNotebookConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DuplicateNotebook action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.ImportNotebookConditionKeys">ImportNotebookConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportNotebook action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.RestoreNotebookVersionConditionKeys">RestoreNotebookVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreNotebookVersion action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateChartConditionKeys">UpdateChartConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateChart action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateConnectionConditionKeys">UpdateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConnection action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateNotebookCellContentConditionKeys">UpdateNotebookCellContentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateNotebookCellContent action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateNotebookCellLayoutConditionKeys">UpdateNotebookCellLayoutConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateNotebookCellLayout action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateNotebookConditionKeys">UpdateNotebookConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateNotebook action. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateSavedQueryConditionKeys">UpdateSavedQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSavedQuery action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChartConditionKeys`<sup>Required</sup> <a name="CreateChartConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateChartConditionKeys"></a>

```typescript
public readonly CreateChartConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChart action.

---

##### `CreateConnectionConditionKeys`<sup>Required</sup> <a name="CreateConnectionConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateConnectionConditionKeys"></a>

```typescript
public readonly CreateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnection action.

---

##### `CreateNotebookCellConditionKeys`<sup>Required</sup> <a name="CreateNotebookCellConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateNotebookCellConditionKeys"></a>

```typescript
public readonly CreateNotebookCellConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNotebookCell action.

---

##### `CreateNotebookConditionKeys`<sup>Required</sup> <a name="CreateNotebookConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateNotebookConditionKeys"></a>

```typescript
public readonly CreateNotebookConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNotebook action.

---

##### `CreateNotebookFromVersionConditionKeys`<sup>Required</sup> <a name="CreateNotebookFromVersionConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateNotebookFromVersionConditionKeys"></a>

```typescript
public readonly CreateNotebookFromVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNotebookFromVersion action.

---

##### `CreateNotebookVersionConditionKeys`<sup>Required</sup> <a name="CreateNotebookVersionConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateNotebookVersionConditionKeys"></a>

```typescript
public readonly CreateNotebookVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNotebookVersion action.

---

##### `CreateSavedQueryConditionKeys`<sup>Required</sup> <a name="CreateSavedQueryConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.CreateSavedQueryConditionKeys"></a>

```typescript
public readonly CreateSavedQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSavedQuery action.

---

##### `DuplicateNotebookConditionKeys`<sup>Required</sup> <a name="DuplicateNotebookConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.DuplicateNotebookConditionKeys"></a>

```typescript
public readonly DuplicateNotebookConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DuplicateNotebook action.

---

##### `ImportNotebookConditionKeys`<sup>Required</sup> <a name="ImportNotebookConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.ImportNotebookConditionKeys"></a>

```typescript
public readonly ImportNotebookConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportNotebook action.

---

##### `RestoreNotebookVersionConditionKeys`<sup>Required</sup> <a name="RestoreNotebookVersionConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.RestoreNotebookVersionConditionKeys"></a>

```typescript
public readonly RestoreNotebookVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreNotebookVersion action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateChartConditionKeys`<sup>Required</sup> <a name="UpdateChartConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateChartConditionKeys"></a>

```typescript
public readonly UpdateChartConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateChart action.

---

##### `UpdateConnectionConditionKeys`<sup>Required</sup> <a name="UpdateConnectionConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateConnectionConditionKeys"></a>

```typescript
public readonly UpdateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConnection action.

---

##### `UpdateNotebookCellContentConditionKeys`<sup>Required</sup> <a name="UpdateNotebookCellContentConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateNotebookCellContentConditionKeys"></a>

```typescript
public readonly UpdateNotebookCellContentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateNotebookCellContent action.

---

##### `UpdateNotebookCellLayoutConditionKeys`<sup>Required</sup> <a name="UpdateNotebookCellLayoutConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateNotebookCellLayoutConditionKeys"></a>

```typescript
public readonly UpdateNotebookCellLayoutConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateNotebookCellLayout action.

---

##### `UpdateNotebookConditionKeys`<sup>Required</sup> <a name="UpdateNotebookConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateNotebookConditionKeys"></a>

```typescript
public readonly UpdateNotebookConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateNotebook action.

---

##### `UpdateSavedQueryConditionKeys`<sup>Required</sup> <a name="UpdateSavedQueryConditionKeys" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchConditions.property.UpdateSavedQueryConditionKeys"></a>

```typescript
public readonly UpdateSavedQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSavedQuery action.

---

### SqlworkbenchResources <a name="SqlworkbenchResources" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources"></a>

ARN builders, validators, and parsers for sqlworkbench resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.Initializer"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

new sqlworkbench.SqlworkbenchResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.chart">chart</a></code> | Builds an ARN for the chart resource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.connection">connection</a></code> | Builds an ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidChartArn">isValidChartArn</a></code> | Validates whether a string is a valid ARN for the chart resource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidConnectionArn">isValidConnectionArn</a></code> | Validates whether a string is a valid ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidNotebookArn">isValidNotebookArn</a></code> | Validates whether a string is a valid ARN for the notebook resource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidQueryArn">isValidQueryArn</a></code> | Validates whether a string is a valid ARN for the query resource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.notebook">notebook</a></code> | Builds an ARN for the notebook resource. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseChartArn">parseChartArn</a></code> | Parses a chart ARN into its components. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseConnectionArn">parseConnectionArn</a></code> | Parses a connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseNotebookArn">parseNotebookArn</a></code> | Parses a notebook ARN into its components. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseQueryArn">parseQueryArn</a></code> | Parses a query ARN into its components. |
| <code><a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.query">query</a></code> | Builds an ARN for the query resource. |

---

##### `chart` <a name="chart" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.chart"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.chart(props: SqlworkbenchChartArnProps)
```

Builds an ARN for the chart resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.chart.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchChartArnProps">SqlworkbenchChartArnProps</a>

---

##### `connection` <a name="connection" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.connection"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.connection(props: SqlworkbenchConnectionArnProps)
```

Builds an ARN for the connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.connection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchConnectionArnProps">SqlworkbenchConnectionArnProps</a>

---

##### `isValidChartArn` <a name="isValidChartArn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidChartArn"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.isValidChartArn(arn: string)
```

Validates whether a string is a valid ARN for the chart resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidChartArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionArn` <a name="isValidConnectionArn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidConnectionArn"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.isValidConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNotebookArn` <a name="isValidNotebookArn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidNotebookArn"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.isValidNotebookArn(arn: string)
```

Validates whether a string is a valid ARN for the notebook resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidNotebookArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQueryArn` <a name="isValidQueryArn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidQueryArn"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.isValidQueryArn(arn: string)
```

Validates whether a string is a valid ARN for the query resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.isValidQueryArn.parameter.arn"></a>

- *Type:* string

---

##### `notebook` <a name="notebook" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.notebook"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.notebook(props: SqlworkbenchNotebookArnProps)
```

Builds an ARN for the notebook resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.notebook.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchNotebookArnProps">SqlworkbenchNotebookArnProps</a>

---

##### `parseChartArn` <a name="parseChartArn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseChartArn"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.parseChartArn(arn: string)
```

Parses a chart ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseChartArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionArn` <a name="parseConnectionArn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseConnectionArn"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.parseConnectionArn(arn: string)
```

Parses a connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNotebookArn` <a name="parseNotebookArn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseNotebookArn"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.parseNotebookArn(arn: string)
```

Parses a notebook ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseNotebookArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQueryArn` <a name="parseQueryArn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseQueryArn"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.parseQueryArn(arn: string)
```

Parses a query ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.parseQueryArn.parameter.arn"></a>

- *Type:* string

---

##### `query` <a name="query" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.query"></a>

```typescript
import { sqlworkbench } from '@cdk_utils/iam'

sqlworkbench.SqlworkbenchResources.query(props: SqlworkbenchQueryArnProps)
```

Builds an ARN for the query resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sqlworkbench.SqlworkbenchResources.query.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sqlworkbench.SqlworkbenchQueryArnProps">SqlworkbenchQueryArnProps</a>

---




