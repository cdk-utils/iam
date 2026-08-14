# `entityresolution` Submodule <a name="`entityresolution` Submodule" id="@cdk_utils/iam.entityresolution"></a>


## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionIdMappingWorkflowArnComponents <a name="EntityresolutionIdMappingWorkflowArnComponents" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnComponents"></a>

Parsed components of a IdMappingWorkflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnComponents.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

const entityresolutionIdMappingWorkflowArnComponents: entityresolution.EntityresolutionIdMappingWorkflowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnComponents.property.workflowName">workflowName</a></code> | <code>string</code> | The WorkflowName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnComponents.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The WorkflowName component.

---

### EntityresolutionIdMappingWorkflowArnProps <a name="EntityresolutionIdMappingWorkflowArnProps" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps"></a>

Properties for building a IdMappingWorkflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

const entityresolutionIdMappingWorkflowArnProps: entityresolution.EntityresolutionIdMappingWorkflowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps.property.workflowName">workflowName</a></code> | <code>string</code> | The WorkflowName component of the ARN. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The WorkflowName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EntityresolutionIdNamespaceArnComponents <a name="EntityresolutionIdNamespaceArnComponents" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnComponents"></a>

Parsed components of a IdNamespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnComponents.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

const entityresolutionIdNamespaceArnComponents: entityresolution.EntityresolutionIdNamespaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnComponents.property.idNamespaceName">idNamespaceName</a></code> | <code>string</code> | The IdNamespaceName component. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `idNamespaceName`<sup>Required</sup> <a name="idNamespaceName" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnComponents.property.idNamespaceName"></a>

```typescript
public readonly idNamespaceName: string;
```

- *Type:* string

The IdNamespaceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EntityresolutionIdNamespaceArnProps <a name="EntityresolutionIdNamespaceArnProps" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps"></a>

Properties for building a IdNamespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

const entityresolutionIdNamespaceArnProps: entityresolution.EntityresolutionIdNamespaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps.property.idNamespaceName">idNamespaceName</a></code> | <code>string</code> | The IdNamespaceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `idNamespaceName`<sup>Required</sup> <a name="idNamespaceName" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps.property.idNamespaceName"></a>

```typescript
public readonly idNamespaceName: string;
```

- *Type:* string

The IdNamespaceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EntityresolutionMatchingWorkflowArnComponents <a name="EntityresolutionMatchingWorkflowArnComponents" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnComponents"></a>

Parsed components of a MatchingWorkflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnComponents.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

const entityresolutionMatchingWorkflowArnComponents: entityresolution.EntityresolutionMatchingWorkflowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnComponents.property.workflowName">workflowName</a></code> | <code>string</code> | The WorkflowName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnComponents.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The WorkflowName component.

---

### EntityresolutionMatchingWorkflowArnProps <a name="EntityresolutionMatchingWorkflowArnProps" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps"></a>

Properties for building a MatchingWorkflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

const entityresolutionMatchingWorkflowArnProps: entityresolution.EntityresolutionMatchingWorkflowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps.property.workflowName">workflowName</a></code> | <code>string</code> | The WorkflowName component of the ARN. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The WorkflowName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EntityresolutionProviderServiceArnComponents <a name="EntityresolutionProviderServiceArnComponents" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents"></a>

Parsed components of a ProviderService ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

const entityresolutionProviderServiceArnComponents: entityresolution.EntityresolutionProviderServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.property.providerName">providerName</a></code> | <code>string</code> | The ProviderName component. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.property.providerServiceName">providerServiceName</a></code> | <code>string</code> | The ProviderServiceName component. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

The ProviderName component.

---

##### `providerServiceName`<sup>Required</sup> <a name="providerServiceName" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.property.providerServiceName"></a>

```typescript
public readonly providerServiceName: string;
```

- *Type:* string

The ProviderServiceName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EntityresolutionProviderServiceArnProps <a name="EntityresolutionProviderServiceArnProps" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps"></a>

Properties for building a ProviderService ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

const entityresolutionProviderServiceArnProps: entityresolution.EntityresolutionProviderServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.property.providerName">providerName</a></code> | <code>string</code> | The ProviderName component of the ARN. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.property.providerServiceName">providerServiceName</a></code> | <code>string</code> | The ProviderServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

The ProviderName component of the ARN.

---

##### `providerServiceName`<sup>Required</sup> <a name="providerServiceName" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.property.providerServiceName"></a>

```typescript
public readonly providerServiceName: string;
```

- *Type:* string

The ProviderServiceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EntityresolutionSchemaMappingArnComponents <a name="EntityresolutionSchemaMappingArnComponents" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnComponents"></a>

Parsed components of a SchemaMapping ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnComponents.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

const entityresolutionSchemaMappingArnComponents: entityresolution.EntityresolutionSchemaMappingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnComponents.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnComponents.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component.

---

### EntityresolutionSchemaMappingArnProps <a name="EntityresolutionSchemaMappingArnProps" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps"></a>

Properties for building a SchemaMapping ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

const entityresolutionSchemaMappingArnProps: entityresolution.EntityresolutionSchemaMappingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps.property.schemaName">schemaName</a></code> | <code>string</code> | The SchemaName component of the ARN. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The SchemaName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionActions <a name="EntityresolutionActions" id="@cdk_utils/iam.entityresolution.EntityresolutionActions"></a>

IAM action constants for the entityresolution service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

new entityresolution.EntityresolutionActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetIdMappingJob">actionGetIdMappingJob</a></code> | <code>string</code> | [Read] entityresolution:GetIdMappingJob. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetIdMappingWorkflow">actionGetIdMappingWorkflow</a></code> | <code>string</code> | [Read] entityresolution:GetIdMappingWorkflow. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetIdNamespace">actionGetIdNamespace</a></code> | <code>string</code> | [Read] entityresolution:GetIdNamespace. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetMatchId">actionGetMatchId</a></code> | <code>string</code> | [Read] entityresolution:GetMatchId. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetMatchingJob">actionGetMatchingJob</a></code> | <code>string</code> | [Read] entityresolution:GetMatchingJob. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetMatchingWorkflow">actionGetMatchingWorkflow</a></code> | <code>string</code> | [Read] entityresolution:GetMatchingWorkflow. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] entityresolution:GetPolicy. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetProviderService">actionGetProviderService</a></code> | <code>string</code> | [Read] entityresolution:GetProviderService. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetSchemaMapping">actionGetSchemaMapping</a></code> | <code>string</code> | [Read] entityresolution:GetSchemaMapping. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AddPolicyStatement">AddPolicyStatement</a></code> | <code>string</code> | [PermissionManagement] entityresolution:AddPolicyStatement. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.BatchDeleteUniqueId">BatchDeleteUniqueId</a></code> | <code>string</code> | [Write] entityresolution:BatchDeleteUniqueId. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.CreateIdMappingWorkflow">CreateIdMappingWorkflow</a></code> | <code>string</code> | [Write] entityresolution:CreateIdMappingWorkflow. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.CreateIdNamespace">CreateIdNamespace</a></code> | <code>string</code> | [Write] entityresolution:CreateIdNamespace. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.CreateMatchingWorkflow">CreateMatchingWorkflow</a></code> | <code>string</code> | [Write] entityresolution:CreateMatchingWorkflow. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.CreateSchemaMapping">CreateSchemaMapping</a></code> | <code>string</code> | [Write] entityresolution:CreateSchemaMapping. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.DeleteIdMappingWorkflow">DeleteIdMappingWorkflow</a></code> | <code>string</code> | [Write] entityresolution:DeleteIdMappingWorkflow. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.DeleteIdNamespace">DeleteIdNamespace</a></code> | <code>string</code> | [Write] entityresolution:DeleteIdNamespace. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.DeleteMatchingWorkflow">DeleteMatchingWorkflow</a></code> | <code>string</code> | [Write] entityresolution:DeleteMatchingWorkflow. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.DeletePolicyStatement">DeletePolicyStatement</a></code> | <code>string</code> | [PermissionManagement] entityresolution:DeletePolicyStatement. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.DeleteSchemaMapping">DeleteSchemaMapping</a></code> | <code>string</code> | [Write] entityresolution:DeleteSchemaMapping. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.GenerateMatchId">GenerateMatchId</a></code> | <code>string</code> | [Write] entityresolution:GenerateMatchId. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListIdMappingJobs">ListIdMappingJobs</a></code> | <code>string</code> | [List] entityresolution:ListIdMappingJobs. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListIdMappingWorkflows">ListIdMappingWorkflows</a></code> | <code>string</code> | [List] entityresolution:ListIdMappingWorkflows. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListIdNamespaces">ListIdNamespaces</a></code> | <code>string</code> | [List] entityresolution:ListIdNamespaces. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListMatchingJobs">ListMatchingJobs</a></code> | <code>string</code> | [List] entityresolution:ListMatchingJobs. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListMatchingWorkflows">ListMatchingWorkflows</a></code> | <code>string</code> | [List] entityresolution:ListMatchingWorkflows. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListProviderServices">ListProviderServices</a></code> | <code>string</code> | [List] entityresolution:ListProviderServices. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListSchemaMappings">ListSchemaMappings</a></code> | <code>string</code> | [List] entityresolution:ListSchemaMappings. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] entityresolution:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.PutPolicy">PutPolicy</a></code> | <code>string</code> | [PermissionManagement] entityresolution:PutPolicy. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.StartIdMappingJob">StartIdMappingJob</a></code> | <code>string</code> | [Write] entityresolution:StartIdMappingJob. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.StartMatchingJob">StartMatchingJob</a></code> | <code>string</code> | [Write] entityresolution:StartMatchingJob. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] entityresolution:TagResource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] entityresolution:UntagResource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UpdateIdMappingWorkflow">UpdateIdMappingWorkflow</a></code> | <code>string</code> | [Write] entityresolution:UpdateIdMappingWorkflow. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UpdateIdNamespace">UpdateIdNamespace</a></code> | <code>string</code> | [Write] entityresolution:UpdateIdNamespace. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UpdateMatchingWorkflow">UpdateMatchingWorkflow</a></code> | <code>string</code> | [Write] entityresolution:UpdateMatchingWorkflow. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UpdateSchemaMapping">UpdateSchemaMapping</a></code> | <code>string</code> | [Write] entityresolution:UpdateSchemaMapping. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UseIdNamespace">UseIdNamespace</a></code> | <code>string</code> | [PermissionManagement] entityresolution:UseIdNamespace. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UseWorkflow">UseWorkflow</a></code> | <code>string</code> | [PermissionManagement] entityresolution:UseWorkflow. |

---

##### `actionGetIdMappingJob`<sup>Required</sup> <a name="actionGetIdMappingJob" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetIdMappingJob"></a>

```typescript
public readonly actionGetIdMappingJob: string;
```

- *Type:* string

[Read] entityresolution:GetIdMappingJob.

---

##### `actionGetIdMappingWorkflow`<sup>Required</sup> <a name="actionGetIdMappingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetIdMappingWorkflow"></a>

```typescript
public readonly actionGetIdMappingWorkflow: string;
```

- *Type:* string

[Read] entityresolution:GetIdMappingWorkflow.

---

##### `actionGetIdNamespace`<sup>Required</sup> <a name="actionGetIdNamespace" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetIdNamespace"></a>

```typescript
public readonly actionGetIdNamespace: string;
```

- *Type:* string

[Read] entityresolution:GetIdNamespace.

---

##### `actionGetMatchId`<sup>Required</sup> <a name="actionGetMatchId" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetMatchId"></a>

```typescript
public readonly actionGetMatchId: string;
```

- *Type:* string

[Read] entityresolution:GetMatchId.

---

##### `actionGetMatchingJob`<sup>Required</sup> <a name="actionGetMatchingJob" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetMatchingJob"></a>

```typescript
public readonly actionGetMatchingJob: string;
```

- *Type:* string

[Read] entityresolution:GetMatchingJob.

---

##### `actionGetMatchingWorkflow`<sup>Required</sup> <a name="actionGetMatchingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetMatchingWorkflow"></a>

```typescript
public readonly actionGetMatchingWorkflow: string;
```

- *Type:* string

[Read] entityresolution:GetMatchingWorkflow.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] entityresolution:GetPolicy.

---

##### `actionGetProviderService`<sup>Required</sup> <a name="actionGetProviderService" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetProviderService"></a>

```typescript
public readonly actionGetProviderService: string;
```

- *Type:* string

[Read] entityresolution:GetProviderService.

---

##### `actionGetSchemaMapping`<sup>Required</sup> <a name="actionGetSchemaMapping" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.actionGetSchemaMapping"></a>

```typescript
public readonly actionGetSchemaMapping: string;
```

- *Type:* string

[Read] entityresolution:GetSchemaMapping.

---

##### `AddPolicyStatement`<sup>Required</sup> <a name="AddPolicyStatement" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AddPolicyStatement"></a>

```typescript
public readonly AddPolicyStatement: string;
```

- *Type:* string

[PermissionManagement] entityresolution:AddPolicyStatement.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDeleteUniqueId`<sup>Required</sup> <a name="BatchDeleteUniqueId" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.BatchDeleteUniqueId"></a>

```typescript
public readonly BatchDeleteUniqueId: string;
```

- *Type:* string

[Write] entityresolution:BatchDeleteUniqueId.

---

##### `CreateIdMappingWorkflow`<sup>Required</sup> <a name="CreateIdMappingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.CreateIdMappingWorkflow"></a>

```typescript
public readonly CreateIdMappingWorkflow: string;
```

- *Type:* string

[Write] entityresolution:CreateIdMappingWorkflow.

---

##### `CreateIdNamespace`<sup>Required</sup> <a name="CreateIdNamespace" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.CreateIdNamespace"></a>

```typescript
public readonly CreateIdNamespace: string;
```

- *Type:* string

[Write] entityresolution:CreateIdNamespace.

---

##### `CreateMatchingWorkflow`<sup>Required</sup> <a name="CreateMatchingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.CreateMatchingWorkflow"></a>

```typescript
public readonly CreateMatchingWorkflow: string;
```

- *Type:* string

[Write] entityresolution:CreateMatchingWorkflow.

---

##### `CreateSchemaMapping`<sup>Required</sup> <a name="CreateSchemaMapping" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.CreateSchemaMapping"></a>

```typescript
public readonly CreateSchemaMapping: string;
```

- *Type:* string

[Write] entityresolution:CreateSchemaMapping.

---

##### `DeleteIdMappingWorkflow`<sup>Required</sup> <a name="DeleteIdMappingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.DeleteIdMappingWorkflow"></a>

```typescript
public readonly DeleteIdMappingWorkflow: string;
```

- *Type:* string

[Write] entityresolution:DeleteIdMappingWorkflow.

---

##### `DeleteIdNamespace`<sup>Required</sup> <a name="DeleteIdNamespace" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.DeleteIdNamespace"></a>

```typescript
public readonly DeleteIdNamespace: string;
```

- *Type:* string

[Write] entityresolution:DeleteIdNamespace.

---

##### `DeleteMatchingWorkflow`<sup>Required</sup> <a name="DeleteMatchingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.DeleteMatchingWorkflow"></a>

```typescript
public readonly DeleteMatchingWorkflow: string;
```

- *Type:* string

[Write] entityresolution:DeleteMatchingWorkflow.

---

##### `DeletePolicyStatement`<sup>Required</sup> <a name="DeletePolicyStatement" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.DeletePolicyStatement"></a>

```typescript
public readonly DeletePolicyStatement: string;
```

- *Type:* string

[PermissionManagement] entityresolution:DeletePolicyStatement.

---

##### `DeleteSchemaMapping`<sup>Required</sup> <a name="DeleteSchemaMapping" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.DeleteSchemaMapping"></a>

```typescript
public readonly DeleteSchemaMapping: string;
```

- *Type:* string

[Write] entityresolution:DeleteSchemaMapping.

---

##### `GenerateMatchId`<sup>Required</sup> <a name="GenerateMatchId" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.GenerateMatchId"></a>

```typescript
public readonly GenerateMatchId: string;
```

- *Type:* string

[Write] entityresolution:GenerateMatchId.

---

##### `ListIdMappingJobs`<sup>Required</sup> <a name="ListIdMappingJobs" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListIdMappingJobs"></a>

```typescript
public readonly ListIdMappingJobs: string;
```

- *Type:* string

[List] entityresolution:ListIdMappingJobs.

---

##### `ListIdMappingWorkflows`<sup>Required</sup> <a name="ListIdMappingWorkflows" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListIdMappingWorkflows"></a>

```typescript
public readonly ListIdMappingWorkflows: string;
```

- *Type:* string

[List] entityresolution:ListIdMappingWorkflows.

---

##### `ListIdNamespaces`<sup>Required</sup> <a name="ListIdNamespaces" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListIdNamespaces"></a>

```typescript
public readonly ListIdNamespaces: string;
```

- *Type:* string

[List] entityresolution:ListIdNamespaces.

---

##### `ListMatchingJobs`<sup>Required</sup> <a name="ListMatchingJobs" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListMatchingJobs"></a>

```typescript
public readonly ListMatchingJobs: string;
```

- *Type:* string

[List] entityresolution:ListMatchingJobs.

---

##### `ListMatchingWorkflows`<sup>Required</sup> <a name="ListMatchingWorkflows" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListMatchingWorkflows"></a>

```typescript
public readonly ListMatchingWorkflows: string;
```

- *Type:* string

[List] entityresolution:ListMatchingWorkflows.

---

##### `ListProviderServices`<sup>Required</sup> <a name="ListProviderServices" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListProviderServices"></a>

```typescript
public readonly ListProviderServices: string;
```

- *Type:* string

[List] entityresolution:ListProviderServices.

---

##### `ListSchemaMappings`<sup>Required</sup> <a name="ListSchemaMappings" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListSchemaMappings"></a>

```typescript
public readonly ListSchemaMappings: string;
```

- *Type:* string

[List] entityresolution:ListSchemaMappings.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] entityresolution:ListTagsForResource.

---

##### `PutPolicy`<sup>Required</sup> <a name="PutPolicy" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.PutPolicy"></a>

```typescript
public readonly PutPolicy: string;
```

- *Type:* string

[PermissionManagement] entityresolution:PutPolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartIdMappingJob`<sup>Required</sup> <a name="StartIdMappingJob" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.StartIdMappingJob"></a>

```typescript
public readonly StartIdMappingJob: string;
```

- *Type:* string

[Write] entityresolution:StartIdMappingJob.

---

##### `StartMatchingJob`<sup>Required</sup> <a name="StartMatchingJob" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.StartMatchingJob"></a>

```typescript
public readonly StartMatchingJob: string;
```

- *Type:* string

[Write] entityresolution:StartMatchingJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] entityresolution:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] entityresolution:UntagResource.

---

##### `UpdateIdMappingWorkflow`<sup>Required</sup> <a name="UpdateIdMappingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UpdateIdMappingWorkflow"></a>

```typescript
public readonly UpdateIdMappingWorkflow: string;
```

- *Type:* string

[Write] entityresolution:UpdateIdMappingWorkflow.

---

##### `UpdateIdNamespace`<sup>Required</sup> <a name="UpdateIdNamespace" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UpdateIdNamespace"></a>

```typescript
public readonly UpdateIdNamespace: string;
```

- *Type:* string

[Write] entityresolution:UpdateIdNamespace.

---

##### `UpdateMatchingWorkflow`<sup>Required</sup> <a name="UpdateMatchingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UpdateMatchingWorkflow"></a>

```typescript
public readonly UpdateMatchingWorkflow: string;
```

- *Type:* string

[Write] entityresolution:UpdateMatchingWorkflow.

---

##### `UpdateSchemaMapping`<sup>Required</sup> <a name="UpdateSchemaMapping" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UpdateSchemaMapping"></a>

```typescript
public readonly UpdateSchemaMapping: string;
```

- *Type:* string

[Write] entityresolution:UpdateSchemaMapping.

---

##### `UseIdNamespace`<sup>Required</sup> <a name="UseIdNamespace" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UseIdNamespace"></a>

```typescript
public readonly UseIdNamespace: string;
```

- *Type:* string

[PermissionManagement] entityresolution:UseIdNamespace.

---

##### `UseWorkflow`<sup>Required</sup> <a name="UseWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionActions.property.UseWorkflow"></a>

```typescript
public readonly UseWorkflow: string;
```

- *Type:* string

[PermissionManagement] entityresolution:UseWorkflow.

---

### EntityresolutionConditions <a name="EntityresolutionConditions" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions"></a>

Condition key constants and builders for entityresolution.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

new entityresolution.EntityresolutionConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.requestTag"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.resourceTag"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.tagKeys"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.CreateIdMappingWorkflowConditionKeys">CreateIdMappingWorkflowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIdMappingWorkflow action. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.CreateIdNamespaceConditionKeys">CreateIdNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIdNamespace action. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.CreateMatchingWorkflowConditionKeys">CreateMatchingWorkflowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMatchingWorkflow action. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.CreateSchemaMappingConditionKeys">CreateSchemaMappingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSchemaMapping action. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateIdMappingWorkflowConditionKeys`<sup>Required</sup> <a name="CreateIdMappingWorkflowConditionKeys" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.CreateIdMappingWorkflowConditionKeys"></a>

```typescript
public readonly CreateIdMappingWorkflowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIdMappingWorkflow action.

---

##### `CreateIdNamespaceConditionKeys`<sup>Required</sup> <a name="CreateIdNamespaceConditionKeys" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.CreateIdNamespaceConditionKeys"></a>

```typescript
public readonly CreateIdNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIdNamespace action.

---

##### `CreateMatchingWorkflowConditionKeys`<sup>Required</sup> <a name="CreateMatchingWorkflowConditionKeys" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.CreateMatchingWorkflowConditionKeys"></a>

```typescript
public readonly CreateMatchingWorkflowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMatchingWorkflow action.

---

##### `CreateSchemaMappingConditionKeys`<sup>Required</sup> <a name="CreateSchemaMappingConditionKeys" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.CreateSchemaMappingConditionKeys"></a>

```typescript
public readonly CreateSchemaMappingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSchemaMapping action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.entityresolution.EntityresolutionConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### EntityresolutionOperations <a name="EntityresolutionOperations" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations"></a>

API operation to required IAM actions mapping for entityresolution.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

new entityresolution.EntityresolutionOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.AddPolicyStatement">AddPolicyStatement</a></code> | <code>string[]</code> | IAM actions required for the AddPolicyStatement API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.BatchDeleteUniqueId">BatchDeleteUniqueId</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteUniqueId API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.CreateIdMappingWorkflow">CreateIdMappingWorkflow</a></code> | <code>string[]</code> | IAM actions required for the CreateIdMappingWorkflow API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.CreateIdNamespace">CreateIdNamespace</a></code> | <code>string[]</code> | IAM actions required for the CreateIdNamespace API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.CreateMatchingWorkflow">CreateMatchingWorkflow</a></code> | <code>string[]</code> | IAM actions required for the CreateMatchingWorkflow API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.CreateSchemaMapping">CreateSchemaMapping</a></code> | <code>string[]</code> | IAM actions required for the CreateSchemaMapping API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.DeleteIdMappingWorkflow">DeleteIdMappingWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdMappingWorkflow API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.DeleteIdNamespace">DeleteIdNamespace</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdNamespace API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.DeleteMatchingWorkflow">DeleteMatchingWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DeleteMatchingWorkflow API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.DeletePolicyStatement">DeletePolicyStatement</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicyStatement API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.DeleteSchemaMapping">DeleteSchemaMapping</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchemaMapping API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.GenerateMatchId">GenerateMatchId</a></code> | <code>string[]</code> | IAM actions required for the GenerateMatchId API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListIdMappingJobs">ListIdMappingJobs</a></code> | <code>string[]</code> | IAM actions required for the ListIdMappingJobs API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListIdMappingWorkflows">ListIdMappingWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListIdMappingWorkflows API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListIdNamespaces">ListIdNamespaces</a></code> | <code>string[]</code> | IAM actions required for the ListIdNamespaces API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListMatchingJobs">ListMatchingJobs</a></code> | <code>string[]</code> | IAM actions required for the ListMatchingJobs API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListMatchingWorkflows">ListMatchingWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListMatchingWorkflows API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListProviderServices">ListProviderServices</a></code> | <code>string[]</code> | IAM actions required for the ListProviderServices API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListSchemaMappings">ListSchemaMappings</a></code> | <code>string[]</code> | IAM actions required for the ListSchemaMappings API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetIdMappingJob">opGetIdMappingJob</a></code> | <code>string[]</code> | IAM actions required for the GetIdMappingJob API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetIdMappingWorkflow">opGetIdMappingWorkflow</a></code> | <code>string[]</code> | IAM actions required for the GetIdMappingWorkflow API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetIdNamespace">opGetIdNamespace</a></code> | <code>string[]</code> | IAM actions required for the GetIdNamespace API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetMatchId">opGetMatchId</a></code> | <code>string[]</code> | IAM actions required for the GetMatchId API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetMatchingJob">opGetMatchingJob</a></code> | <code>string[]</code> | IAM actions required for the GetMatchingJob API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetMatchingWorkflow">opGetMatchingWorkflow</a></code> | <code>string[]</code> | IAM actions required for the GetMatchingWorkflow API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetProviderService">opGetProviderService</a></code> | <code>string[]</code> | IAM actions required for the GetProviderService API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetSchemaMapping">opGetSchemaMapping</a></code> | <code>string[]</code> | IAM actions required for the GetSchemaMapping API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.PutPolicy">PutPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutPolicy API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.StartIdMappingJob">StartIdMappingJob</a></code> | <code>string[]</code> | IAM actions required for the StartIdMappingJob API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.StartMatchingJob">StartMatchingJob</a></code> | <code>string[]</code> | IAM actions required for the StartMatchingJob API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.UpdateIdMappingWorkflow">UpdateIdMappingWorkflow</a></code> | <code>string[]</code> | IAM actions required for the UpdateIdMappingWorkflow API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.UpdateIdNamespace">UpdateIdNamespace</a></code> | <code>string[]</code> | IAM actions required for the UpdateIdNamespace API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.UpdateMatchingWorkflow">UpdateMatchingWorkflow</a></code> | <code>string[]</code> | IAM actions required for the UpdateMatchingWorkflow API call. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.UpdateSchemaMapping">UpdateSchemaMapping</a></code> | <code>string[]</code> | IAM actions required for the UpdateSchemaMapping API call. |

---

##### `AddPolicyStatement`<sup>Required</sup> <a name="AddPolicyStatement" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.AddPolicyStatement"></a>

```typescript
public readonly AddPolicyStatement: string[];
```

- *Type:* string[]

IAM actions required for the AddPolicyStatement API call.

---

##### `BatchDeleteUniqueId`<sup>Required</sup> <a name="BatchDeleteUniqueId" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.BatchDeleteUniqueId"></a>

```typescript
public readonly BatchDeleteUniqueId: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteUniqueId API call.

---

##### `CreateIdMappingWorkflow`<sup>Required</sup> <a name="CreateIdMappingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.CreateIdMappingWorkflow"></a>

```typescript
public readonly CreateIdMappingWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the CreateIdMappingWorkflow API call.

---

##### `CreateIdNamespace`<sup>Required</sup> <a name="CreateIdNamespace" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.CreateIdNamespace"></a>

```typescript
public readonly CreateIdNamespace: string[];
```

- *Type:* string[]

IAM actions required for the CreateIdNamespace API call.

---

##### `CreateMatchingWorkflow`<sup>Required</sup> <a name="CreateMatchingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.CreateMatchingWorkflow"></a>

```typescript
public readonly CreateMatchingWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the CreateMatchingWorkflow API call.

---

##### `CreateSchemaMapping`<sup>Required</sup> <a name="CreateSchemaMapping" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.CreateSchemaMapping"></a>

```typescript
public readonly CreateSchemaMapping: string[];
```

- *Type:* string[]

IAM actions required for the CreateSchemaMapping API call.

---

##### `DeleteIdMappingWorkflow`<sup>Required</sup> <a name="DeleteIdMappingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.DeleteIdMappingWorkflow"></a>

```typescript
public readonly DeleteIdMappingWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdMappingWorkflow API call.

---

##### `DeleteIdNamespace`<sup>Required</sup> <a name="DeleteIdNamespace" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.DeleteIdNamespace"></a>

```typescript
public readonly DeleteIdNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdNamespace API call.

---

##### `DeleteMatchingWorkflow`<sup>Required</sup> <a name="DeleteMatchingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.DeleteMatchingWorkflow"></a>

```typescript
public readonly DeleteMatchingWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMatchingWorkflow API call.

---

##### `DeletePolicyStatement`<sup>Required</sup> <a name="DeletePolicyStatement" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.DeletePolicyStatement"></a>

```typescript
public readonly DeletePolicyStatement: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicyStatement API call.

---

##### `DeleteSchemaMapping`<sup>Required</sup> <a name="DeleteSchemaMapping" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.DeleteSchemaMapping"></a>

```typescript
public readonly DeleteSchemaMapping: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchemaMapping API call.

---

##### `GenerateMatchId`<sup>Required</sup> <a name="GenerateMatchId" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.GenerateMatchId"></a>

```typescript
public readonly GenerateMatchId: string[];
```

- *Type:* string[]

IAM actions required for the GenerateMatchId API call.

---

##### `ListIdMappingJobs`<sup>Required</sup> <a name="ListIdMappingJobs" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListIdMappingJobs"></a>

```typescript
public readonly ListIdMappingJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListIdMappingJobs API call.

---

##### `ListIdMappingWorkflows`<sup>Required</sup> <a name="ListIdMappingWorkflows" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListIdMappingWorkflows"></a>

```typescript
public readonly ListIdMappingWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListIdMappingWorkflows API call.

---

##### `ListIdNamespaces`<sup>Required</sup> <a name="ListIdNamespaces" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListIdNamespaces"></a>

```typescript
public readonly ListIdNamespaces: string[];
```

- *Type:* string[]

IAM actions required for the ListIdNamespaces API call.

---

##### `ListMatchingJobs`<sup>Required</sup> <a name="ListMatchingJobs" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListMatchingJobs"></a>

```typescript
public readonly ListMatchingJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListMatchingJobs API call.

---

##### `ListMatchingWorkflows`<sup>Required</sup> <a name="ListMatchingWorkflows" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListMatchingWorkflows"></a>

```typescript
public readonly ListMatchingWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListMatchingWorkflows API call.

---

##### `ListProviderServices`<sup>Required</sup> <a name="ListProviderServices" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListProviderServices"></a>

```typescript
public readonly ListProviderServices: string[];
```

- *Type:* string[]

IAM actions required for the ListProviderServices API call.

---

##### `ListSchemaMappings`<sup>Required</sup> <a name="ListSchemaMappings" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListSchemaMappings"></a>

```typescript
public readonly ListSchemaMappings: string[];
```

- *Type:* string[]

IAM actions required for the ListSchemaMappings API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetIdMappingJob`<sup>Required</sup> <a name="opGetIdMappingJob" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetIdMappingJob"></a>

```typescript
public readonly opGetIdMappingJob: string[];
```

- *Type:* string[]

IAM actions required for the GetIdMappingJob API call.

---

##### `opGetIdMappingWorkflow`<sup>Required</sup> <a name="opGetIdMappingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetIdMappingWorkflow"></a>

```typescript
public readonly opGetIdMappingWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the GetIdMappingWorkflow API call.

---

##### `opGetIdNamespace`<sup>Required</sup> <a name="opGetIdNamespace" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetIdNamespace"></a>

```typescript
public readonly opGetIdNamespace: string[];
```

- *Type:* string[]

IAM actions required for the GetIdNamespace API call.

---

##### `opGetMatchId`<sup>Required</sup> <a name="opGetMatchId" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetMatchId"></a>

```typescript
public readonly opGetMatchId: string[];
```

- *Type:* string[]

IAM actions required for the GetMatchId API call.

---

##### `opGetMatchingJob`<sup>Required</sup> <a name="opGetMatchingJob" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetMatchingJob"></a>

```typescript
public readonly opGetMatchingJob: string[];
```

- *Type:* string[]

IAM actions required for the GetMatchingJob API call.

---

##### `opGetMatchingWorkflow`<sup>Required</sup> <a name="opGetMatchingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetMatchingWorkflow"></a>

```typescript
public readonly opGetMatchingWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the GetMatchingWorkflow API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetProviderService`<sup>Required</sup> <a name="opGetProviderService" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetProviderService"></a>

```typescript
public readonly opGetProviderService: string[];
```

- *Type:* string[]

IAM actions required for the GetProviderService API call.

---

##### `opGetSchemaMapping`<sup>Required</sup> <a name="opGetSchemaMapping" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.opGetSchemaMapping"></a>

```typescript
public readonly opGetSchemaMapping: string[];
```

- *Type:* string[]

IAM actions required for the GetSchemaMapping API call.

---

##### `PutPolicy`<sup>Required</sup> <a name="PutPolicy" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.PutPolicy"></a>

```typescript
public readonly PutPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutPolicy API call.

---

##### `StartIdMappingJob`<sup>Required</sup> <a name="StartIdMappingJob" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.StartIdMappingJob"></a>

```typescript
public readonly StartIdMappingJob: string[];
```

- *Type:* string[]

IAM actions required for the StartIdMappingJob API call.

---

##### `StartMatchingJob`<sup>Required</sup> <a name="StartMatchingJob" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.StartMatchingJob"></a>

```typescript
public readonly StartMatchingJob: string[];
```

- *Type:* string[]

IAM actions required for the StartMatchingJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateIdMappingWorkflow`<sup>Required</sup> <a name="UpdateIdMappingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.UpdateIdMappingWorkflow"></a>

```typescript
public readonly UpdateIdMappingWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIdMappingWorkflow API call.

---

##### `UpdateIdNamespace`<sup>Required</sup> <a name="UpdateIdNamespace" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.UpdateIdNamespace"></a>

```typescript
public readonly UpdateIdNamespace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIdNamespace API call.

---

##### `UpdateMatchingWorkflow`<sup>Required</sup> <a name="UpdateMatchingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.UpdateMatchingWorkflow"></a>

```typescript
public readonly UpdateMatchingWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMatchingWorkflow API call.

---

##### `UpdateSchemaMapping`<sup>Required</sup> <a name="UpdateSchemaMapping" id="@cdk_utils/iam.entityresolution.EntityresolutionOperations.property.UpdateSchemaMapping"></a>

```typescript
public readonly UpdateSchemaMapping: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSchemaMapping API call.

---

### EntityresolutionResources <a name="EntityresolutionResources" id="@cdk_utils/iam.entityresolution.EntityresolutionResources"></a>

ARN builders, validators, and parsers for entityresolution resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.Initializer"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

new entityresolution.EntityresolutionResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.idMappingWorkflow">idMappingWorkflow</a></code> | Builds an ARN for the IdMappingWorkflow resource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.idNamespace">idNamespace</a></code> | Builds an ARN for the IdNamespace resource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidIdMappingWorkflowArn">isValidIdMappingWorkflowArn</a></code> | Validates whether a string is a valid ARN for the IdMappingWorkflow resource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidIdNamespaceArn">isValidIdNamespaceArn</a></code> | Validates whether a string is a valid ARN for the IdNamespace resource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidMatchingWorkflowArn">isValidMatchingWorkflowArn</a></code> | Validates whether a string is a valid ARN for the MatchingWorkflow resource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidProviderServiceArn">isValidProviderServiceArn</a></code> | Validates whether a string is a valid ARN for the ProviderService resource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidSchemaMappingArn">isValidSchemaMappingArn</a></code> | Validates whether a string is a valid ARN for the SchemaMapping resource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.matchingWorkflow">matchingWorkflow</a></code> | Builds an ARN for the MatchingWorkflow resource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.parseIdMappingWorkflowArn">parseIdMappingWorkflowArn</a></code> | Parses a IdMappingWorkflow ARN into its components. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.parseIdNamespaceArn">parseIdNamespaceArn</a></code> | Parses a IdNamespace ARN into its components. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.parseMatchingWorkflowArn">parseMatchingWorkflowArn</a></code> | Parses a MatchingWorkflow ARN into its components. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.parseProviderServiceArn">parseProviderServiceArn</a></code> | Parses a ProviderService ARN into its components. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.parseSchemaMappingArn">parseSchemaMappingArn</a></code> | Parses a SchemaMapping ARN into its components. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.providerService">providerService</a></code> | Builds an ARN for the ProviderService resource. |
| <code><a href="#@cdk_utils/iam.entityresolution.EntityresolutionResources.schemaMapping">schemaMapping</a></code> | Builds an ARN for the SchemaMapping resource. |

---

##### `idMappingWorkflow` <a name="idMappingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.idMappingWorkflow"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.idMappingWorkflow(props: EntityresolutionIdMappingWorkflowArnProps)
```

Builds an ARN for the IdMappingWorkflow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.idMappingWorkflow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdMappingWorkflowArnProps">EntityresolutionIdMappingWorkflowArnProps</a>

---

##### `idNamespace` <a name="idNamespace" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.idNamespace"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.idNamespace(props: EntityresolutionIdNamespaceArnProps)
```

Builds an ARN for the IdNamespace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.idNamespace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.entityresolution.EntityresolutionIdNamespaceArnProps">EntityresolutionIdNamespaceArnProps</a>

---

##### `isValidIdMappingWorkflowArn` <a name="isValidIdMappingWorkflowArn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidIdMappingWorkflowArn"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.isValidIdMappingWorkflowArn(arn: string)
```

Validates whether a string is a valid ARN for the IdMappingWorkflow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidIdMappingWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdNamespaceArn` <a name="isValidIdNamespaceArn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidIdNamespaceArn"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.isValidIdNamespaceArn(arn: string)
```

Validates whether a string is a valid ARN for the IdNamespace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidIdNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMatchingWorkflowArn` <a name="isValidMatchingWorkflowArn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidMatchingWorkflowArn"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.isValidMatchingWorkflowArn(arn: string)
```

Validates whether a string is a valid ARN for the MatchingWorkflow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidMatchingWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProviderServiceArn` <a name="isValidProviderServiceArn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidProviderServiceArn"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.isValidProviderServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the ProviderService resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidProviderServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSchemaMappingArn` <a name="isValidSchemaMappingArn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidSchemaMappingArn"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.isValidSchemaMappingArn(arn: string)
```

Validates whether a string is a valid ARN for the SchemaMapping resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.isValidSchemaMappingArn.parameter.arn"></a>

- *Type:* string

---

##### `matchingWorkflow` <a name="matchingWorkflow" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.matchingWorkflow"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.matchingWorkflow(props: EntityresolutionMatchingWorkflowArnProps)
```

Builds an ARN for the MatchingWorkflow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.matchingWorkflow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.entityresolution.EntityresolutionMatchingWorkflowArnProps">EntityresolutionMatchingWorkflowArnProps</a>

---

##### `parseIdMappingWorkflowArn` <a name="parseIdMappingWorkflowArn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.parseIdMappingWorkflowArn"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.parseIdMappingWorkflowArn(arn: string)
```

Parses a IdMappingWorkflow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.parseIdMappingWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdNamespaceArn` <a name="parseIdNamespaceArn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.parseIdNamespaceArn"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.parseIdNamespaceArn(arn: string)
```

Parses a IdNamespace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.parseIdNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMatchingWorkflowArn` <a name="parseMatchingWorkflowArn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.parseMatchingWorkflowArn"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.parseMatchingWorkflowArn(arn: string)
```

Parses a MatchingWorkflow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.parseMatchingWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProviderServiceArn` <a name="parseProviderServiceArn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.parseProviderServiceArn"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.parseProviderServiceArn(arn: string)
```

Parses a ProviderService ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.parseProviderServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSchemaMappingArn` <a name="parseSchemaMappingArn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.parseSchemaMappingArn"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.parseSchemaMappingArn(arn: string)
```

Parses a SchemaMapping ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.parseSchemaMappingArn.parameter.arn"></a>

- *Type:* string

---

##### `providerService` <a name="providerService" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.providerService"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.providerService(props: EntityresolutionProviderServiceArnProps)
```

Builds an ARN for the ProviderService resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.providerService.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.entityresolution.EntityresolutionProviderServiceArnProps">EntityresolutionProviderServiceArnProps</a>

---

##### `schemaMapping` <a name="schemaMapping" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.schemaMapping"></a>

```typescript
import { entityresolution } from '@cdk_utils/iam'

entityresolution.EntityresolutionResources.schemaMapping(props: EntityresolutionSchemaMappingArnProps)
```

Builds an ARN for the SchemaMapping resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.entityresolution.EntityresolutionResources.schemaMapping.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.entityresolution.EntityresolutionSchemaMappingArnProps">EntityresolutionSchemaMappingArnProps</a>

---




