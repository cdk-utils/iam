# `appsync` Submodule <a name="`appsync` Submodule" id="@cdk_utils/iam.appsync"></a>


## Structs <a name="Structs" id="Structs"></a>

### AppsyncAPIArnComponents <a name="AppsyncAPIArnComponents" id="@cdk_utils/iam.appsync.AppsyncAPIArnComponents"></a>

Parsed components of a api ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncAPIArnComponents.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncAPIArnComponents: appsync.AppsyncAPIArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncAPIArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncAPIArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncAPIArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncAPIArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncAPIArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.appsync.AppsyncAPIArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncAPIArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncAPIArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppsyncAPIArnProps <a name="AppsyncAPIArnProps" id="@cdk_utils/iam.appsync.AppsyncAPIArnProps"></a>

Properties for building a api ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncAPIArnProps.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncAPIArnProps: appsync.AppsyncAPIArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncAPIArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncAPIArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncAPIArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncAPIArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.appsync.AppsyncAPIArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncAPIArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncAPIArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncAPIArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppsyncChannelNamespaceArnComponents <a name="AppsyncChannelNamespaceArnComponents" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents"></a>

Parsed components of a channelNamespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncChannelNamespaceArnComponents: appsync.AppsyncChannelNamespaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.property.channelNamespaceName">channelNamespaceName</a></code> | <code>string</code> | The ChannelNamespaceName component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `channelNamespaceName`<sup>Required</sup> <a name="channelNamespaceName" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.property.channelNamespaceName"></a>

```typescript
public readonly channelNamespaceName: string;
```

- *Type:* string

The ChannelNamespaceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppsyncChannelNamespaceArnProps <a name="AppsyncChannelNamespaceArnProps" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps"></a>

Properties for building a channelNamespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncChannelNamespaceArnProps: appsync.AppsyncChannelNamespaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.property.channelNamespaceName">channelNamespaceName</a></code> | <code>string</code> | The ChannelNamespaceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `channelNamespaceName`<sup>Required</sup> <a name="channelNamespaceName" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.property.channelNamespaceName"></a>

```typescript
public readonly channelNamespaceName: string;
```

- *Type:* string

The ChannelNamespaceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppsyncDatasourceArnComponents <a name="AppsyncDatasourceArnComponents" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents"></a>

Parsed components of a datasource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncDatasourceArnComponents: appsync.AppsyncDatasourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.property.datasourceName">datasourceName</a></code> | <code>string</code> | The DatasourceName component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.property.datasourceName"></a>

```typescript
public readonly datasourceName: string;
```

- *Type:* string

The DatasourceName component.

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppsyncDatasourceArnProps <a name="AppsyncDatasourceArnProps" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnProps"></a>

Properties for building a datasource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncDatasourceArnProps: appsync.AppsyncDatasourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.property.datasourceName">datasourceName</a></code> | <code>string</code> | The DatasourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.property.datasourceName"></a>

```typescript
public readonly datasourceName: string;
```

- *Type:* string

The DatasourceName component of the ARN.

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncDatasourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppsyncDomainArnComponents <a name="AppsyncDomainArnComponents" id="@cdk_utils/iam.appsync.AppsyncDomainArnComponents"></a>

Parsed components of a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncDomainArnComponents.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncDomainArnComponents: appsync.AppsyncDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDomainArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.appsync.AppsyncDomainArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppsyncDomainArnProps <a name="AppsyncDomainArnProps" id="@cdk_utils/iam.appsync.AppsyncDomainArnProps"></a>

Properties for building a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncDomainArnProps.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncDomainArnProps: appsync.AppsyncDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDomainArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.appsync.AppsyncDomainArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppsyncFieldArnComponents <a name="AppsyncFieldArnComponents" id="@cdk_utils/iam.appsync.AppsyncFieldArnComponents"></a>

Parsed components of a field ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncFieldArnComponents.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncFieldArnComponents: appsync.AppsyncFieldArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.fieldName">fieldName</a></code> | <code>string</code> | The FieldName component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.typeName">typeName</a></code> | <code>string</code> | The TypeName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The FieldName component.

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdk_utils/iam.appsync.AppsyncFieldArnComponents.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

The TypeName component.

---

### AppsyncFieldArnProps <a name="AppsyncFieldArnProps" id="@cdk_utils/iam.appsync.AppsyncFieldArnProps"></a>

Properties for building a field ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncFieldArnProps.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncFieldArnProps: appsync.AppsyncFieldArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.fieldName">fieldName</a></code> | <code>string</code> | The FieldName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.typeName">typeName</a></code> | <code>string</code> | The TypeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The FieldName component of the ARN.

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component of the ARN.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

The TypeName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncFieldArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppsyncFunctionArnComponents <a name="AppsyncFunctionArnComponents" id="@cdk_utils/iam.appsync.AppsyncFunctionArnComponents"></a>

Parsed components of a function ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncFunctionArnComponents: appsync.AppsyncFunctionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.property.functionId">functionId</a></code> | <code>string</code> | The FunctionId component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

The FunctionId component.

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncFunctionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppsyncFunctionArnProps <a name="AppsyncFunctionArnProps" id="@cdk_utils/iam.appsync.AppsyncFunctionArnProps"></a>

Properties for building a function ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncFunctionArnProps.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncFunctionArnProps: appsync.AppsyncFunctionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnProps.property.functionId">functionId</a></code> | <code>string</code> | The FunctionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnProps.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdk_utils/iam.appsync.AppsyncFunctionArnProps.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

The FunctionId component of the ARN.

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.appsync.AppsyncFunctionArnProps.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncFunctionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncFunctionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncFunctionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppsyncGraphqlapiArnComponents <a name="AppsyncGraphqlapiArnComponents" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnComponents"></a>

Parsed components of a graphqlapi ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnComponents.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncGraphqlapiArnComponents: appsync.AppsyncGraphqlapiArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncGraphqlapiArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncGraphqlapiArnComponents.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncGraphqlapiArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncGraphqlapiArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnComponents.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppsyncGraphqlapiArnProps <a name="AppsyncGraphqlapiArnProps" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps"></a>

Properties for building a graphqlapi ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncGraphqlapiArnProps: appsync.AppsyncGraphqlapiArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppsyncMergedAPIAssociationArnComponents <a name="AppsyncMergedAPIAssociationArnComponents" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents"></a>

Parsed components of a mergedApiAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncMergedAPIAssociationArnComponents: appsync.AppsyncMergedAPIAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.property.associationid">associationid</a></code> | <code>string</code> | The Associationid component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.property.sourceGraphQlapiId">sourceGraphQlapiId</a></code> | <code>string</code> | The SourceGraphQLAPIId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `associationid`<sup>Required</sup> <a name="associationid" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.property.associationid"></a>

```typescript
public readonly associationid: string;
```

- *Type:* string

The Associationid component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sourceGraphQlapiId`<sup>Required</sup> <a name="sourceGraphQlapiId" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnComponents.property.sourceGraphQlapiId"></a>

```typescript
public readonly sourceGraphQlapiId: string;
```

- *Type:* string

The SourceGraphQLAPIId component.

---

### AppsyncMergedAPIAssociationArnProps <a name="AppsyncMergedAPIAssociationArnProps" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps"></a>

Properties for building a mergedApiAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncMergedAPIAssociationArnProps: appsync.AppsyncMergedAPIAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.property.associationid">associationid</a></code> | <code>string</code> | The Associationid component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.property.sourceGraphQlapiId">sourceGraphQlapiId</a></code> | <code>string</code> | The SourceGraphQLAPIId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `associationid`<sup>Required</sup> <a name="associationid" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.property.associationid"></a>

```typescript
public readonly associationid: string;
```

- *Type:* string

The Associationid component of the ARN.

---

##### `sourceGraphQlapiId`<sup>Required</sup> <a name="sourceGraphQlapiId" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.property.sourceGraphQlapiId"></a>

```typescript
public readonly sourceGraphQlapiId: string;
```

- *Type:* string

The SourceGraphQLAPIId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppsyncSourceAPIAssociationArnComponents <a name="AppsyncSourceAPIAssociationArnComponents" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents"></a>

Parsed components of a sourceApiAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncSourceAPIAssociationArnComponents: appsync.AppsyncSourceAPIAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.property.associationid">associationid</a></code> | <code>string</code> | The Associationid component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.property.mergedGraphQlapiId">mergedGraphQlapiId</a></code> | <code>string</code> | The MergedGraphQLAPIId component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `associationid`<sup>Required</sup> <a name="associationid" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.property.associationid"></a>

```typescript
public readonly associationid: string;
```

- *Type:* string

The Associationid component.

---

##### `mergedGraphQlapiId`<sup>Required</sup> <a name="mergedGraphQlapiId" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.property.mergedGraphQlapiId"></a>

```typescript
public readonly mergedGraphQlapiId: string;
```

- *Type:* string

The MergedGraphQLAPIId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppsyncSourceAPIAssociationArnProps <a name="AppsyncSourceAPIAssociationArnProps" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps"></a>

Properties for building a sourceApiAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncSourceAPIAssociationArnProps: appsync.AppsyncSourceAPIAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.property.associationid">associationid</a></code> | <code>string</code> | The Associationid component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.property.mergedGraphQlapiId">mergedGraphQlapiId</a></code> | <code>string</code> | The MergedGraphQLAPIId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `associationid`<sup>Required</sup> <a name="associationid" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.property.associationid"></a>

```typescript
public readonly associationid: string;
```

- *Type:* string

The Associationid component of the ARN.

---

##### `mergedGraphQlapiId`<sup>Required</sup> <a name="mergedGraphQlapiId" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.property.mergedGraphQlapiId"></a>

```typescript
public readonly mergedGraphQlapiId: string;
```

- *Type:* string

The MergedGraphQLAPIId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppsyncTypeArnComponents <a name="AppsyncTypeArnComponents" id="@cdk_utils/iam.appsync.AppsyncTypeArnComponents"></a>

Parsed components of a type ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncTypeArnComponents.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncTypeArnComponents: appsync.AppsyncTypeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncTypeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncTypeArnComponents.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncTypeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncTypeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncTypeArnComponents.property.typeName">typeName</a></code> | <code>string</code> | The TypeName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncTypeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.appsync.AppsyncTypeArnComponents.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncTypeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncTypeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdk_utils/iam.appsync.AppsyncTypeArnComponents.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

The TypeName component.

---

### AppsyncTypeArnProps <a name="AppsyncTypeArnProps" id="@cdk_utils/iam.appsync.AppsyncTypeArnProps"></a>

Properties for building a type ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appsync.AppsyncTypeArnProps.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

const appsyncTypeArnProps: appsync.AppsyncTypeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncTypeArnProps.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncTypeArnProps.property.typeName">typeName</a></code> | <code>string</code> | The TypeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncTypeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncTypeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncTypeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.appsync.AppsyncTypeArnProps.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component of the ARN.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdk_utils/iam.appsync.AppsyncTypeArnProps.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

The TypeName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appsync.AppsyncTypeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appsync.AppsyncTypeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appsync.AppsyncTypeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncActions <a name="AppsyncActions" id="@cdk_utils/iam.appsync.AppsyncActions"></a>

IAM action constants for the appsync service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appsync.AppsyncActions.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

new appsync.AppsyncActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetApi">actionGetApi</a></code> | <code>string</code> | [Read] appsync:GetApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetApiAssociation">actionGetApiAssociation</a></code> | <code>string</code> | [Read] appsync:GetApiAssociation. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetApiCache">actionGetApiCache</a></code> | <code>string</code> | [Read] appsync:GetApiCache. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetChannelNamespace">actionGetChannelNamespace</a></code> | <code>string</code> | [Read] appsync:GetChannelNamespace. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetDataSource">actionGetDataSource</a></code> | <code>string</code> | [Read] appsync:GetDataSource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetDataSourceIntrospection">actionGetDataSourceIntrospection</a></code> | <code>string</code> | [Read] appsync:GetDataSourceIntrospection. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetDomainName">actionGetDomainName</a></code> | <code>string</code> | [Read] appsync:GetDomainName. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetFunction">actionGetFunction</a></code> | <code>string</code> | [Read] appsync:GetFunction. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetGraphqlApi">actionGetGraphqlApi</a></code> | <code>string</code> | [Read] appsync:GetGraphqlApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetGraphqlApiEnvironmentVariables">actionGetGraphqlApiEnvironmentVariables</a></code> | <code>string</code> | [Read] appsync:GetGraphqlApiEnvironmentVariables. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetIntrospectionSchema">actionGetIntrospectionSchema</a></code> | <code>string</code> | [Read] appsync:GetIntrospectionSchema. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetResolver">actionGetResolver</a></code> | <code>string</code> | [Read] appsync:GetResolver. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] appsync:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetSchemaCreationStatus">actionGetSchemaCreationStatus</a></code> | <code>string</code> | [Read] appsync:GetSchemaCreationStatus. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetSourceApiAssociation">actionGetSourceApiAssociation</a></code> | <code>string</code> | [Read] appsync:GetSourceApiAssociation. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetType">actionGetType</a></code> | <code>string</code> | [Read] appsync:GetType. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionGetWebACLForResource">actionGetWebACLForResource</a></code> | <code>string</code> | [Read] appsync:GetWebACLForResource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.actionSetWebACL">actionSetWebACL</a></code> | <code>string</code> | [PermissionManagement] appsync:SetWebACL. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.AssociateApi">AssociateApi</a></code> | <code>string</code> | [Write] appsync:AssociateApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.AssociateMergedGraphqlApi">AssociateMergedGraphqlApi</a></code> | <code>string</code> | [Write] appsync:AssociateMergedGraphqlApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.AssociateSourceGraphqlApi">AssociateSourceGraphqlApi</a></code> | <code>string</code> | [Write] appsync:AssociateSourceGraphqlApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.AssociateWebACL">AssociateWebACL</a></code> | <code>string</code> | [Write] appsync:AssociateWebACL. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.CreateApi">CreateApi</a></code> | <code>string</code> | [Write] appsync:CreateApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.CreateApiCache">CreateApiCache</a></code> | <code>string</code> | [Write] appsync:CreateApiCache. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.CreateApiKey">CreateApiKey</a></code> | <code>string</code> | [Write] appsync:CreateApiKey. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.CreateChannelNamespace">CreateChannelNamespace</a></code> | <code>string</code> | [Write] appsync:CreateChannelNamespace. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.CreateDataSource">CreateDataSource</a></code> | <code>string</code> | [Write] appsync:CreateDataSource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.CreateDomainName">CreateDomainName</a></code> | <code>string</code> | [Write] appsync:CreateDomainName. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.CreateFunction">CreateFunction</a></code> | <code>string</code> | [Write] appsync:CreateFunction. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.CreateGraphqlApi">CreateGraphqlApi</a></code> | <code>string</code> | [Write] appsync:CreateGraphqlApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.CreateResolver">CreateResolver</a></code> | <code>string</code> | [Write] appsync:CreateResolver. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.CreateType">CreateType</a></code> | <code>string</code> | [Write] appsync:CreateType. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteApi">DeleteApi</a></code> | <code>string</code> | [Write] appsync:DeleteApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteApiCache">DeleteApiCache</a></code> | <code>string</code> | [Write] appsync:DeleteApiCache. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteApiKey">DeleteApiKey</a></code> | <code>string</code> | [Write] appsync:DeleteApiKey. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteChannelNamespace">DeleteChannelNamespace</a></code> | <code>string</code> | [Write] appsync:DeleteChannelNamespace. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string</code> | [Write] appsync:DeleteDataSource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteDomainName">DeleteDomainName</a></code> | <code>string</code> | [Write] appsync:DeleteDomainName. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteFunction">DeleteFunction</a></code> | <code>string</code> | [Write] appsync:DeleteFunction. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteGraphqlApi">DeleteGraphqlApi</a></code> | <code>string</code> | [Write] appsync:DeleteGraphqlApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteResolver">DeleteResolver</a></code> | <code>string</code> | [Write] appsync:DeleteResolver. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] appsync:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DeleteType">DeleteType</a></code> | <code>string</code> | [Write] appsync:DeleteType. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DisassociateApi">DisassociateApi</a></code> | <code>string</code> | [Write] appsync:DisassociateApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DisassociateMergedGraphqlApi">DisassociateMergedGraphqlApi</a></code> | <code>string</code> | [Write] appsync:DisassociateMergedGraphqlApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DisassociateSourceGraphqlApi">DisassociateSourceGraphqlApi</a></code> | <code>string</code> | [Write] appsync:DisassociateSourceGraphqlApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.DisassociateWebACL">DisassociateWebACL</a></code> | <code>string</code> | [Write] appsync:DisassociateWebACL. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.EvaluateCode">EvaluateCode</a></code> | <code>string</code> | [Read] appsync:EvaluateCode. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.EvaluateMappingTemplate">EvaluateMappingTemplate</a></code> | <code>string</code> | [Read] appsync:EvaluateMappingTemplate. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.EventConnect">EventConnect</a></code> | <code>string</code> | [Write] appsync:EventConnect. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.EventPublish">EventPublish</a></code> | <code>string</code> | [Write] appsync:EventPublish. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.EventSubscribe">EventSubscribe</a></code> | <code>string</code> | [Write] appsync:EventSubscribe. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.FlushApiCache">FlushApiCache</a></code> | <code>string</code> | [Write] appsync:FlushApiCache. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.GraphQL">GraphQL</a></code> | <code>string</code> | [Write] appsync:GraphQL. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListApiKeys">ListApiKeys</a></code> | <code>string</code> | [List] appsync:ListApiKeys. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListApis">ListApis</a></code> | <code>string</code> | [List] appsync:ListApis. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListChannelNamespaces">ListChannelNamespaces</a></code> | <code>string</code> | [List] appsync:ListChannelNamespaces. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListDataSources">ListDataSources</a></code> | <code>string</code> | [List] appsync:ListDataSources. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListDomainNames">ListDomainNames</a></code> | <code>string</code> | [List] appsync:ListDomainNames. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListFunctions">ListFunctions</a></code> | <code>string</code> | [List] appsync:ListFunctions. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListGraphqlApis">ListGraphqlApis</a></code> | <code>string</code> | [List] appsync:ListGraphqlApis. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListResolvers">ListResolvers</a></code> | <code>string</code> | [List] appsync:ListResolvers. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListResolversByFunction">ListResolversByFunction</a></code> | <code>string</code> | [List] appsync:ListResolversByFunction. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListResourcesForWebACL">ListResourcesForWebACL</a></code> | <code>string</code> | [List] appsync:ListResourcesForWebACL. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListSourceApiAssociations">ListSourceApiAssociations</a></code> | <code>string</code> | [List] appsync:ListSourceApiAssociations. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] appsync:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListTypes">ListTypes</a></code> | <code>string</code> | [List] appsync:ListTypes. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.ListTypesByAssociation">ListTypesByAssociation</a></code> | <code>string</code> | [List] appsync:ListTypesByAssociation. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.PutGraphqlApiEnvironmentVariables">PutGraphqlApiEnvironmentVariables</a></code> | <code>string</code> | [Write] appsync:PutGraphqlApiEnvironmentVariables. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] appsync:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.SourceGraphQL">SourceGraphQL</a></code> | <code>string</code> | [Write] appsync:SourceGraphQL. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.StartDataSourceIntrospection">StartDataSourceIntrospection</a></code> | <code>string</code> | [Write] appsync:StartDataSourceIntrospection. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.StartSchemaCreation">StartSchemaCreation</a></code> | <code>string</code> | [Write] appsync:StartSchemaCreation. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.StartSchemaMerge">StartSchemaMerge</a></code> | <code>string</code> | [Write] appsync:StartSchemaMerge. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] appsync:TagResource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] appsync:UntagResource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateApi">UpdateApi</a></code> | <code>string</code> | [Write] appsync:UpdateApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateApiCache">UpdateApiCache</a></code> | <code>string</code> | [Write] appsync:UpdateApiCache. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateApiKey">UpdateApiKey</a></code> | <code>string</code> | [Write] appsync:UpdateApiKey. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateChannelNamespace">UpdateChannelNamespace</a></code> | <code>string</code> | [Write] appsync:UpdateChannelNamespace. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string</code> | [Write] appsync:UpdateDataSource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateDomainName">UpdateDomainName</a></code> | <code>string</code> | [Write] appsync:UpdateDomainName. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateFunction">UpdateFunction</a></code> | <code>string</code> | [Write] appsync:UpdateFunction. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateGraphqlApi">UpdateGraphqlApi</a></code> | <code>string</code> | [Write] appsync:UpdateGraphqlApi. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateResolver">UpdateResolver</a></code> | <code>string</code> | [Write] appsync:UpdateResolver. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateSourceApiAssociation">UpdateSourceApiAssociation</a></code> | <code>string</code> | [Write] appsync:UpdateSourceApiAssociation. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncActions.property.UpdateType">UpdateType</a></code> | <code>string</code> | [Write] appsync:UpdateType. |

---

##### `actionGetApi`<sup>Required</sup> <a name="actionGetApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetApi"></a>

```typescript
public readonly actionGetApi: string;
```

- *Type:* string

[Read] appsync:GetApi.

---

##### `actionGetApiAssociation`<sup>Required</sup> <a name="actionGetApiAssociation" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetApiAssociation"></a>

```typescript
public readonly actionGetApiAssociation: string;
```

- *Type:* string

[Read] appsync:GetApiAssociation.

---

##### `actionGetApiCache`<sup>Required</sup> <a name="actionGetApiCache" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetApiCache"></a>

```typescript
public readonly actionGetApiCache: string;
```

- *Type:* string

[Read] appsync:GetApiCache.

---

##### `actionGetChannelNamespace`<sup>Required</sup> <a name="actionGetChannelNamespace" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetChannelNamespace"></a>

```typescript
public readonly actionGetChannelNamespace: string;
```

- *Type:* string

[Read] appsync:GetChannelNamespace.

---

##### `actionGetDataSource`<sup>Required</sup> <a name="actionGetDataSource" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetDataSource"></a>

```typescript
public readonly actionGetDataSource: string;
```

- *Type:* string

[Read] appsync:GetDataSource.

---

##### `actionGetDataSourceIntrospection`<sup>Required</sup> <a name="actionGetDataSourceIntrospection" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetDataSourceIntrospection"></a>

```typescript
public readonly actionGetDataSourceIntrospection: string;
```

- *Type:* string

[Read] appsync:GetDataSourceIntrospection.

---

##### `actionGetDomainName`<sup>Required</sup> <a name="actionGetDomainName" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetDomainName"></a>

```typescript
public readonly actionGetDomainName: string;
```

- *Type:* string

[Read] appsync:GetDomainName.

---

##### `actionGetFunction`<sup>Required</sup> <a name="actionGetFunction" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetFunction"></a>

```typescript
public readonly actionGetFunction: string;
```

- *Type:* string

[Read] appsync:GetFunction.

---

##### `actionGetGraphqlApi`<sup>Required</sup> <a name="actionGetGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetGraphqlApi"></a>

```typescript
public readonly actionGetGraphqlApi: string;
```

- *Type:* string

[Read] appsync:GetGraphqlApi.

---

##### `actionGetGraphqlApiEnvironmentVariables`<sup>Required</sup> <a name="actionGetGraphqlApiEnvironmentVariables" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetGraphqlApiEnvironmentVariables"></a>

```typescript
public readonly actionGetGraphqlApiEnvironmentVariables: string;
```

- *Type:* string

[Read] appsync:GetGraphqlApiEnvironmentVariables.

---

##### `actionGetIntrospectionSchema`<sup>Required</sup> <a name="actionGetIntrospectionSchema" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetIntrospectionSchema"></a>

```typescript
public readonly actionGetIntrospectionSchema: string;
```

- *Type:* string

[Read] appsync:GetIntrospectionSchema.

---

##### `actionGetResolver`<sup>Required</sup> <a name="actionGetResolver" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetResolver"></a>

```typescript
public readonly actionGetResolver: string;
```

- *Type:* string

[Read] appsync:GetResolver.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] appsync:GetResourcePolicy.

---

##### `actionGetSchemaCreationStatus`<sup>Required</sup> <a name="actionGetSchemaCreationStatus" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetSchemaCreationStatus"></a>

```typescript
public readonly actionGetSchemaCreationStatus: string;
```

- *Type:* string

[Read] appsync:GetSchemaCreationStatus.

---

##### `actionGetSourceApiAssociation`<sup>Required</sup> <a name="actionGetSourceApiAssociation" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetSourceApiAssociation"></a>

```typescript
public readonly actionGetSourceApiAssociation: string;
```

- *Type:* string

[Read] appsync:GetSourceApiAssociation.

---

##### `actionGetType`<sup>Required</sup> <a name="actionGetType" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetType"></a>

```typescript
public readonly actionGetType: string;
```

- *Type:* string

[Read] appsync:GetType.

---

##### `actionGetWebACLForResource`<sup>Required</sup> <a name="actionGetWebACLForResource" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionGetWebACLForResource"></a>

```typescript
public readonly actionGetWebACLForResource: string;
```

- *Type:* string

[Read] appsync:GetWebACLForResource.

---

##### `actionSetWebACL`<sup>Required</sup> <a name="actionSetWebACL" id="@cdk_utils/iam.appsync.AppsyncActions.property.actionSetWebACL"></a>

```typescript
public readonly actionSetWebACL: string;
```

- *Type:* string

[PermissionManagement] appsync:SetWebACL.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.appsync.AppsyncActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.appsync.AppsyncActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.appsync.AppsyncActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.appsync.AppsyncActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.appsync.AppsyncActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateApi`<sup>Required</sup> <a name="AssociateApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.AssociateApi"></a>

```typescript
public readonly AssociateApi: string;
```

- *Type:* string

[Write] appsync:AssociateApi.

---

##### `AssociateMergedGraphqlApi`<sup>Required</sup> <a name="AssociateMergedGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.AssociateMergedGraphqlApi"></a>

```typescript
public readonly AssociateMergedGraphqlApi: string;
```

- *Type:* string

[Write] appsync:AssociateMergedGraphqlApi.

---

##### `AssociateSourceGraphqlApi`<sup>Required</sup> <a name="AssociateSourceGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.AssociateSourceGraphqlApi"></a>

```typescript
public readonly AssociateSourceGraphqlApi: string;
```

- *Type:* string

[Write] appsync:AssociateSourceGraphqlApi.

---

##### `AssociateWebACL`<sup>Required</sup> <a name="AssociateWebACL" id="@cdk_utils/iam.appsync.AppsyncActions.property.AssociateWebACL"></a>

```typescript
public readonly AssociateWebACL: string;
```

- *Type:* string

[Write] appsync:AssociateWebACL.

---

##### `CreateApi`<sup>Required</sup> <a name="CreateApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.CreateApi"></a>

```typescript
public readonly CreateApi: string;
```

- *Type:* string

[Write] appsync:CreateApi.

---

##### `CreateApiCache`<sup>Required</sup> <a name="CreateApiCache" id="@cdk_utils/iam.appsync.AppsyncActions.property.CreateApiCache"></a>

```typescript
public readonly CreateApiCache: string;
```

- *Type:* string

[Write] appsync:CreateApiCache.

---

##### `CreateApiKey`<sup>Required</sup> <a name="CreateApiKey" id="@cdk_utils/iam.appsync.AppsyncActions.property.CreateApiKey"></a>

```typescript
public readonly CreateApiKey: string;
```

- *Type:* string

[Write] appsync:CreateApiKey.

---

##### `CreateChannelNamespace`<sup>Required</sup> <a name="CreateChannelNamespace" id="@cdk_utils/iam.appsync.AppsyncActions.property.CreateChannelNamespace"></a>

```typescript
public readonly CreateChannelNamespace: string;
```

- *Type:* string

[Write] appsync:CreateChannelNamespace.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.appsync.AppsyncActions.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string;
```

- *Type:* string

[Write] appsync:CreateDataSource.

---

##### `CreateDomainName`<sup>Required</sup> <a name="CreateDomainName" id="@cdk_utils/iam.appsync.AppsyncActions.property.CreateDomainName"></a>

```typescript
public readonly CreateDomainName: string;
```

- *Type:* string

[Write] appsync:CreateDomainName.

---

##### `CreateFunction`<sup>Required</sup> <a name="CreateFunction" id="@cdk_utils/iam.appsync.AppsyncActions.property.CreateFunction"></a>

```typescript
public readonly CreateFunction: string;
```

- *Type:* string

[Write] appsync:CreateFunction.

---

##### `CreateGraphqlApi`<sup>Required</sup> <a name="CreateGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.CreateGraphqlApi"></a>

```typescript
public readonly CreateGraphqlApi: string;
```

- *Type:* string

[Write] appsync:CreateGraphqlApi.

---

##### `CreateResolver`<sup>Required</sup> <a name="CreateResolver" id="@cdk_utils/iam.appsync.AppsyncActions.property.CreateResolver"></a>

```typescript
public readonly CreateResolver: string;
```

- *Type:* string

[Write] appsync:CreateResolver.

---

##### `CreateType`<sup>Required</sup> <a name="CreateType" id="@cdk_utils/iam.appsync.AppsyncActions.property.CreateType"></a>

```typescript
public readonly CreateType: string;
```

- *Type:* string

[Write] appsync:CreateType.

---

##### `DeleteApi`<sup>Required</sup> <a name="DeleteApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteApi"></a>

```typescript
public readonly DeleteApi: string;
```

- *Type:* string

[Write] appsync:DeleteApi.

---

##### `DeleteApiCache`<sup>Required</sup> <a name="DeleteApiCache" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteApiCache"></a>

```typescript
public readonly DeleteApiCache: string;
```

- *Type:* string

[Write] appsync:DeleteApiCache.

---

##### `DeleteApiKey`<sup>Required</sup> <a name="DeleteApiKey" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteApiKey"></a>

```typescript
public readonly DeleteApiKey: string;
```

- *Type:* string

[Write] appsync:DeleteApiKey.

---

##### `DeleteChannelNamespace`<sup>Required</sup> <a name="DeleteChannelNamespace" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteChannelNamespace"></a>

```typescript
public readonly DeleteChannelNamespace: string;
```

- *Type:* string

[Write] appsync:DeleteChannelNamespace.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string;
```

- *Type:* string

[Write] appsync:DeleteDataSource.

---

##### `DeleteDomainName`<sup>Required</sup> <a name="DeleteDomainName" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteDomainName"></a>

```typescript
public readonly DeleteDomainName: string;
```

- *Type:* string

[Write] appsync:DeleteDomainName.

---

##### `DeleteFunction`<sup>Required</sup> <a name="DeleteFunction" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteFunction"></a>

```typescript
public readonly DeleteFunction: string;
```

- *Type:* string

[Write] appsync:DeleteFunction.

---

##### `DeleteGraphqlApi`<sup>Required</sup> <a name="DeleteGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteGraphqlApi"></a>

```typescript
public readonly DeleteGraphqlApi: string;
```

- *Type:* string

[Write] appsync:DeleteGraphqlApi.

---

##### `DeleteResolver`<sup>Required</sup> <a name="DeleteResolver" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteResolver"></a>

```typescript
public readonly DeleteResolver: string;
```

- *Type:* string

[Write] appsync:DeleteResolver.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] appsync:DeleteResourcePolicy.

---

##### `DeleteType`<sup>Required</sup> <a name="DeleteType" id="@cdk_utils/iam.appsync.AppsyncActions.property.DeleteType"></a>

```typescript
public readonly DeleteType: string;
```

- *Type:* string

[Write] appsync:DeleteType.

---

##### `DisassociateApi`<sup>Required</sup> <a name="DisassociateApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.DisassociateApi"></a>

```typescript
public readonly DisassociateApi: string;
```

- *Type:* string

[Write] appsync:DisassociateApi.

---

##### `DisassociateMergedGraphqlApi`<sup>Required</sup> <a name="DisassociateMergedGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.DisassociateMergedGraphqlApi"></a>

```typescript
public readonly DisassociateMergedGraphqlApi: string;
```

- *Type:* string

[Write] appsync:DisassociateMergedGraphqlApi.

---

##### `DisassociateSourceGraphqlApi`<sup>Required</sup> <a name="DisassociateSourceGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.DisassociateSourceGraphqlApi"></a>

```typescript
public readonly DisassociateSourceGraphqlApi: string;
```

- *Type:* string

[Write] appsync:DisassociateSourceGraphqlApi.

---

##### `DisassociateWebACL`<sup>Required</sup> <a name="DisassociateWebACL" id="@cdk_utils/iam.appsync.AppsyncActions.property.DisassociateWebACL"></a>

```typescript
public readonly DisassociateWebACL: string;
```

- *Type:* string

[Write] appsync:DisassociateWebACL.

---

##### `EvaluateCode`<sup>Required</sup> <a name="EvaluateCode" id="@cdk_utils/iam.appsync.AppsyncActions.property.EvaluateCode"></a>

```typescript
public readonly EvaluateCode: string;
```

- *Type:* string

[Read] appsync:EvaluateCode.

---

##### `EvaluateMappingTemplate`<sup>Required</sup> <a name="EvaluateMappingTemplate" id="@cdk_utils/iam.appsync.AppsyncActions.property.EvaluateMappingTemplate"></a>

```typescript
public readonly EvaluateMappingTemplate: string;
```

- *Type:* string

[Read] appsync:EvaluateMappingTemplate.

---

##### `EventConnect`<sup>Required</sup> <a name="EventConnect" id="@cdk_utils/iam.appsync.AppsyncActions.property.EventConnect"></a>

```typescript
public readonly EventConnect: string;
```

- *Type:* string

[Write] appsync:EventConnect.

---

##### `EventPublish`<sup>Required</sup> <a name="EventPublish" id="@cdk_utils/iam.appsync.AppsyncActions.property.EventPublish"></a>

```typescript
public readonly EventPublish: string;
```

- *Type:* string

[Write] appsync:EventPublish.

---

##### `EventSubscribe`<sup>Required</sup> <a name="EventSubscribe" id="@cdk_utils/iam.appsync.AppsyncActions.property.EventSubscribe"></a>

```typescript
public readonly EventSubscribe: string;
```

- *Type:* string

[Write] appsync:EventSubscribe.

---

##### `FlushApiCache`<sup>Required</sup> <a name="FlushApiCache" id="@cdk_utils/iam.appsync.AppsyncActions.property.FlushApiCache"></a>

```typescript
public readonly FlushApiCache: string;
```

- *Type:* string

[Write] appsync:FlushApiCache.

---

##### `GraphQL`<sup>Required</sup> <a name="GraphQL" id="@cdk_utils/iam.appsync.AppsyncActions.property.GraphQL"></a>

```typescript
public readonly GraphQL: string;
```

- *Type:* string

[Write] appsync:GraphQL.

---

##### `ListApiKeys`<sup>Required</sup> <a name="ListApiKeys" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListApiKeys"></a>

```typescript
public readonly ListApiKeys: string;
```

- *Type:* string

[List] appsync:ListApiKeys.

---

##### `ListApis`<sup>Required</sup> <a name="ListApis" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListApis"></a>

```typescript
public readonly ListApis: string;
```

- *Type:* string

[List] appsync:ListApis.

---

##### `ListChannelNamespaces`<sup>Required</sup> <a name="ListChannelNamespaces" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListChannelNamespaces"></a>

```typescript
public readonly ListChannelNamespaces: string;
```

- *Type:* string

[List] appsync:ListChannelNamespaces.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string;
```

- *Type:* string

[List] appsync:ListDataSources.

---

##### `ListDomainNames`<sup>Required</sup> <a name="ListDomainNames" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListDomainNames"></a>

```typescript
public readonly ListDomainNames: string;
```

- *Type:* string

[List] appsync:ListDomainNames.

---

##### `ListFunctions`<sup>Required</sup> <a name="ListFunctions" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListFunctions"></a>

```typescript
public readonly ListFunctions: string;
```

- *Type:* string

[List] appsync:ListFunctions.

---

##### `ListGraphqlApis`<sup>Required</sup> <a name="ListGraphqlApis" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListGraphqlApis"></a>

```typescript
public readonly ListGraphqlApis: string;
```

- *Type:* string

[List] appsync:ListGraphqlApis.

---

##### `ListResolvers`<sup>Required</sup> <a name="ListResolvers" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListResolvers"></a>

```typescript
public readonly ListResolvers: string;
```

- *Type:* string

[List] appsync:ListResolvers.

---

##### `ListResolversByFunction`<sup>Required</sup> <a name="ListResolversByFunction" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListResolversByFunction"></a>

```typescript
public readonly ListResolversByFunction: string;
```

- *Type:* string

[List] appsync:ListResolversByFunction.

---

##### `ListResourcesForWebACL`<sup>Required</sup> <a name="ListResourcesForWebACL" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListResourcesForWebACL"></a>

```typescript
public readonly ListResourcesForWebACL: string;
```

- *Type:* string

[List] appsync:ListResourcesForWebACL.

---

##### `ListSourceApiAssociations`<sup>Required</sup> <a name="ListSourceApiAssociations" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListSourceApiAssociations"></a>

```typescript
public readonly ListSourceApiAssociations: string;
```

- *Type:* string

[List] appsync:ListSourceApiAssociations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] appsync:ListTagsForResource.

---

##### `ListTypes`<sup>Required</sup> <a name="ListTypes" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListTypes"></a>

```typescript
public readonly ListTypes: string;
```

- *Type:* string

[List] appsync:ListTypes.

---

##### `ListTypesByAssociation`<sup>Required</sup> <a name="ListTypesByAssociation" id="@cdk_utils/iam.appsync.AppsyncActions.property.ListTypesByAssociation"></a>

```typescript
public readonly ListTypesByAssociation: string;
```

- *Type:* string

[List] appsync:ListTypesByAssociation.

---

##### `PutGraphqlApiEnvironmentVariables`<sup>Required</sup> <a name="PutGraphqlApiEnvironmentVariables" id="@cdk_utils/iam.appsync.AppsyncActions.property.PutGraphqlApiEnvironmentVariables"></a>

```typescript
public readonly PutGraphqlApiEnvironmentVariables: string;
```

- *Type:* string

[Write] appsync:PutGraphqlApiEnvironmentVariables.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.appsync.AppsyncActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] appsync:PutResourcePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.appsync.AppsyncActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SourceGraphQL`<sup>Required</sup> <a name="SourceGraphQL" id="@cdk_utils/iam.appsync.AppsyncActions.property.SourceGraphQL"></a>

```typescript
public readonly SourceGraphQL: string;
```

- *Type:* string

[Write] appsync:SourceGraphQL.

---

##### `StartDataSourceIntrospection`<sup>Required</sup> <a name="StartDataSourceIntrospection" id="@cdk_utils/iam.appsync.AppsyncActions.property.StartDataSourceIntrospection"></a>

```typescript
public readonly StartDataSourceIntrospection: string;
```

- *Type:* string

[Write] appsync:StartDataSourceIntrospection.

---

##### `StartSchemaCreation`<sup>Required</sup> <a name="StartSchemaCreation" id="@cdk_utils/iam.appsync.AppsyncActions.property.StartSchemaCreation"></a>

```typescript
public readonly StartSchemaCreation: string;
```

- *Type:* string

[Write] appsync:StartSchemaCreation.

---

##### `StartSchemaMerge`<sup>Required</sup> <a name="StartSchemaMerge" id="@cdk_utils/iam.appsync.AppsyncActions.property.StartSchemaMerge"></a>

```typescript
public readonly StartSchemaMerge: string;
```

- *Type:* string

[Write] appsync:StartSchemaMerge.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appsync.AppsyncActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] appsync:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appsync.AppsyncActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] appsync:UntagResource.

---

##### `UpdateApi`<sup>Required</sup> <a name="UpdateApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateApi"></a>

```typescript
public readonly UpdateApi: string;
```

- *Type:* string

[Write] appsync:UpdateApi.

---

##### `UpdateApiCache`<sup>Required</sup> <a name="UpdateApiCache" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateApiCache"></a>

```typescript
public readonly UpdateApiCache: string;
```

- *Type:* string

[Write] appsync:UpdateApiCache.

---

##### `UpdateApiKey`<sup>Required</sup> <a name="UpdateApiKey" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateApiKey"></a>

```typescript
public readonly UpdateApiKey: string;
```

- *Type:* string

[Write] appsync:UpdateApiKey.

---

##### `UpdateChannelNamespace`<sup>Required</sup> <a name="UpdateChannelNamespace" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateChannelNamespace"></a>

```typescript
public readonly UpdateChannelNamespace: string;
```

- *Type:* string

[Write] appsync:UpdateChannelNamespace.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string;
```

- *Type:* string

[Write] appsync:UpdateDataSource.

---

##### `UpdateDomainName`<sup>Required</sup> <a name="UpdateDomainName" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateDomainName"></a>

```typescript
public readonly UpdateDomainName: string;
```

- *Type:* string

[Write] appsync:UpdateDomainName.

---

##### `UpdateFunction`<sup>Required</sup> <a name="UpdateFunction" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateFunction"></a>

```typescript
public readonly UpdateFunction: string;
```

- *Type:* string

[Write] appsync:UpdateFunction.

---

##### `UpdateGraphqlApi`<sup>Required</sup> <a name="UpdateGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateGraphqlApi"></a>

```typescript
public readonly UpdateGraphqlApi: string;
```

- *Type:* string

[Write] appsync:UpdateGraphqlApi.

---

##### `UpdateResolver`<sup>Required</sup> <a name="UpdateResolver" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateResolver"></a>

```typescript
public readonly UpdateResolver: string;
```

- *Type:* string

[Write] appsync:UpdateResolver.

---

##### `UpdateSourceApiAssociation`<sup>Required</sup> <a name="UpdateSourceApiAssociation" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateSourceApiAssociation"></a>

```typescript
public readonly UpdateSourceApiAssociation: string;
```

- *Type:* string

[Write] appsync:UpdateSourceApiAssociation.

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="@cdk_utils/iam.appsync.AppsyncActions.property.UpdateType"></a>

```typescript
public readonly UpdateType: string;
```

- *Type:* string

[Write] appsync:UpdateType.

---

### AppsyncConditions <a name="AppsyncConditions" id="@cdk_utils/iam.appsync.AppsyncConditions"></a>

Condition key constants and builders for appsync.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appsync.AppsyncConditions.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

new appsync.AppsyncConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.visibility">visibility</a></code> | Generates a condition block for `appsync:Visibility`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.appsync.AppsyncConditions.requestTag"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appsync.AppsyncConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.appsync.AppsyncConditions.resourceTag"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appsync.AppsyncConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.tagKeys"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.appsync.AppsyncConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `visibility` <a name="visibility" id="@cdk_utils/iam.appsync.AppsyncConditions.visibility"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncConditions.visibility(value: string)
```

Generates a condition block for `appsync:Visibility`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appsync.AppsyncConditions.visibility.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.actionGetApiConditionKeys">actionGetApiConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApi action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.actionGetChannelNamespaceConditionKeys">actionGetChannelNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetChannelNamespace action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.actionGetDomainNameConditionKeys">actionGetDomainNameConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDomainName action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.actionGetGraphqlApiConditionKeys">actionGetGraphqlApiConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetGraphqlApi action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.CreateApiConditionKeys">CreateApiConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApi action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.CreateChannelNamespaceConditionKeys">CreateChannelNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannelNamespace action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.CreateDomainNameConditionKeys">CreateDomainNameConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDomainName action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.CreateGraphqlApiConditionKeys">CreateGraphqlApiConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGraphqlApi action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.DeleteApiConditionKeys">DeleteApiConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteApi action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.DeleteChannelNamespaceConditionKeys">DeleteChannelNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteChannelNamespace action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.DeleteDomainNameConditionKeys">DeleteDomainNameConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDomainName action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.DeleteGraphqlApiConditionKeys">DeleteGraphqlApiConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteGraphqlApi action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.ListApisConditionKeys">ListApisConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListApis action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.ListChannelNamespacesConditionKeys">ListChannelNamespacesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListChannelNamespaces action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.ListDomainNamesConditionKeys">ListDomainNamesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDomainNames action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.UpdateApiConditionKeys">UpdateApiConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateApi action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.UpdateChannelNamespaceConditionKeys">UpdateChannelNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateChannelNamespace action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.UpdateDomainNameConditionKeys">UpdateDomainNameConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDomainName action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.UpdateGraphqlApiConditionKeys">UpdateGraphqlApiConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateGraphqlApi action. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncConditions.property.VISIBILITY">VISIBILITY</a></code> | <code>string</code> | Condition key: appsync:Visibility (String). |

---

##### `actionGetApiConditionKeys`<sup>Required</sup> <a name="actionGetApiConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.actionGetApiConditionKeys"></a>

```typescript
public readonly actionGetApiConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApi action.

---

##### `actionGetChannelNamespaceConditionKeys`<sup>Required</sup> <a name="actionGetChannelNamespaceConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.actionGetChannelNamespaceConditionKeys"></a>

```typescript
public readonly actionGetChannelNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetChannelNamespace action.

---

##### `actionGetDomainNameConditionKeys`<sup>Required</sup> <a name="actionGetDomainNameConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.actionGetDomainNameConditionKeys"></a>

```typescript
public readonly actionGetDomainNameConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDomainName action.

---

##### `actionGetGraphqlApiConditionKeys`<sup>Required</sup> <a name="actionGetGraphqlApiConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.actionGetGraphqlApiConditionKeys"></a>

```typescript
public readonly actionGetGraphqlApiConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetGraphqlApi action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.appsync.AppsyncConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.appsync.AppsyncConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.appsync.AppsyncConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApiConditionKeys`<sup>Required</sup> <a name="CreateApiConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.CreateApiConditionKeys"></a>

```typescript
public readonly CreateApiConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApi action.

---

##### `CreateChannelNamespaceConditionKeys`<sup>Required</sup> <a name="CreateChannelNamespaceConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.CreateChannelNamespaceConditionKeys"></a>

```typescript
public readonly CreateChannelNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannelNamespace action.

---

##### `CreateDomainNameConditionKeys`<sup>Required</sup> <a name="CreateDomainNameConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.CreateDomainNameConditionKeys"></a>

```typescript
public readonly CreateDomainNameConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDomainName action.

---

##### `CreateGraphqlApiConditionKeys`<sup>Required</sup> <a name="CreateGraphqlApiConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.CreateGraphqlApiConditionKeys"></a>

```typescript
public readonly CreateGraphqlApiConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGraphqlApi action.

---

##### `DeleteApiConditionKeys`<sup>Required</sup> <a name="DeleteApiConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.DeleteApiConditionKeys"></a>

```typescript
public readonly DeleteApiConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteApi action.

---

##### `DeleteChannelNamespaceConditionKeys`<sup>Required</sup> <a name="DeleteChannelNamespaceConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.DeleteChannelNamespaceConditionKeys"></a>

```typescript
public readonly DeleteChannelNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteChannelNamespace action.

---

##### `DeleteDomainNameConditionKeys`<sup>Required</sup> <a name="DeleteDomainNameConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.DeleteDomainNameConditionKeys"></a>

```typescript
public readonly DeleteDomainNameConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDomainName action.

---

##### `DeleteGraphqlApiConditionKeys`<sup>Required</sup> <a name="DeleteGraphqlApiConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.DeleteGraphqlApiConditionKeys"></a>

```typescript
public readonly DeleteGraphqlApiConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteGraphqlApi action.

---

##### `ListApisConditionKeys`<sup>Required</sup> <a name="ListApisConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.ListApisConditionKeys"></a>

```typescript
public readonly ListApisConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListApis action.

---

##### `ListChannelNamespacesConditionKeys`<sup>Required</sup> <a name="ListChannelNamespacesConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.ListChannelNamespacesConditionKeys"></a>

```typescript
public readonly ListChannelNamespacesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListChannelNamespaces action.

---

##### `ListDomainNamesConditionKeys`<sup>Required</sup> <a name="ListDomainNamesConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.ListDomainNamesConditionKeys"></a>

```typescript
public readonly ListDomainNamesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDomainNames action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateApiConditionKeys`<sup>Required</sup> <a name="UpdateApiConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.UpdateApiConditionKeys"></a>

```typescript
public readonly UpdateApiConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateApi action.

---

##### `UpdateChannelNamespaceConditionKeys`<sup>Required</sup> <a name="UpdateChannelNamespaceConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.UpdateChannelNamespaceConditionKeys"></a>

```typescript
public readonly UpdateChannelNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateChannelNamespace action.

---

##### `UpdateDomainNameConditionKeys`<sup>Required</sup> <a name="UpdateDomainNameConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.UpdateDomainNameConditionKeys"></a>

```typescript
public readonly UpdateDomainNameConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDomainName action.

---

##### `UpdateGraphqlApiConditionKeys`<sup>Required</sup> <a name="UpdateGraphqlApiConditionKeys" id="@cdk_utils/iam.appsync.AppsyncConditions.property.UpdateGraphqlApiConditionKeys"></a>

```typescript
public readonly UpdateGraphqlApiConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateGraphqlApi action.

---

##### `VISIBILITY`<sup>Required</sup> <a name="VISIBILITY" id="@cdk_utils/iam.appsync.AppsyncConditions.property.VISIBILITY"></a>

```typescript
public readonly VISIBILITY: string;
```

- *Type:* string

Condition key: appsync:Visibility (String).

---

### AppsyncOperations <a name="AppsyncOperations" id="@cdk_utils/iam.appsync.AppsyncOperations"></a>

API operation to required IAM actions mapping for appsync.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appsync.AppsyncOperations.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

new appsync.AppsyncOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.AssociateApi">AssociateApi</a></code> | <code>string[]</code> | IAM actions required for the AssociateApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.AssociateMergedGraphqlApi">AssociateMergedGraphqlApi</a></code> | <code>string[]</code> | IAM actions required for the AssociateMergedGraphqlApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.AssociateSourceGraphqlApi">AssociateSourceGraphqlApi</a></code> | <code>string[]</code> | IAM actions required for the AssociateSourceGraphqlApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.CreateApi">CreateApi</a></code> | <code>string[]</code> | IAM actions required for the CreateApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.CreateApiCache">CreateApiCache</a></code> | <code>string[]</code> | IAM actions required for the CreateApiCache API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.CreateApiKey">CreateApiKey</a></code> | <code>string[]</code> | IAM actions required for the CreateApiKey API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.CreateChannelNamespace">CreateChannelNamespace</a></code> | <code>string[]</code> | IAM actions required for the CreateChannelNamespace API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.CreateDataSource">CreateDataSource</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSource API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.CreateDomainName">CreateDomainName</a></code> | <code>string[]</code> | IAM actions required for the CreateDomainName API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.CreateFunction">CreateFunction</a></code> | <code>string[]</code> | IAM actions required for the CreateFunction API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.CreateGraphqlApi">CreateGraphqlApi</a></code> | <code>string[]</code> | IAM actions required for the CreateGraphqlApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.CreateResolver">CreateResolver</a></code> | <code>string[]</code> | IAM actions required for the CreateResolver API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.CreateType">CreateType</a></code> | <code>string[]</code> | IAM actions required for the CreateType API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteApi">DeleteApi</a></code> | <code>string[]</code> | IAM actions required for the DeleteApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteApiCache">DeleteApiCache</a></code> | <code>string[]</code> | IAM actions required for the DeleteApiCache API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteApiKey">DeleteApiKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteApiKey API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteChannelNamespace">DeleteChannelNamespace</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannelNamespace API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSource API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteDomainName">DeleteDomainName</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainName API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteFunction">DeleteFunction</a></code> | <code>string[]</code> | IAM actions required for the DeleteFunction API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteGraphqlApi">DeleteGraphqlApi</a></code> | <code>string[]</code> | IAM actions required for the DeleteGraphqlApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteResolver">DeleteResolver</a></code> | <code>string[]</code> | IAM actions required for the DeleteResolver API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteType">DeleteType</a></code> | <code>string[]</code> | IAM actions required for the DeleteType API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DisassociateApi">DisassociateApi</a></code> | <code>string[]</code> | IAM actions required for the DisassociateApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DisassociateMergedGraphqlApi">DisassociateMergedGraphqlApi</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMergedGraphqlApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.DisassociateSourceGraphqlApi">DisassociateSourceGraphqlApi</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSourceGraphqlApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.EvaluateCode">EvaluateCode</a></code> | <code>string[]</code> | IAM actions required for the EvaluateCode API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.EvaluateMappingTemplate">EvaluateMappingTemplate</a></code> | <code>string[]</code> | IAM actions required for the EvaluateMappingTemplate API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.FlushApiCache">FlushApiCache</a></code> | <code>string[]</code> | IAM actions required for the FlushApiCache API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListApiKeys">ListApiKeys</a></code> | <code>string[]</code> | IAM actions required for the ListApiKeys API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListApis">ListApis</a></code> | <code>string[]</code> | IAM actions required for the ListApis API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListChannelNamespaces">ListChannelNamespaces</a></code> | <code>string[]</code> | IAM actions required for the ListChannelNamespaces API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListDataSources">ListDataSources</a></code> | <code>string[]</code> | IAM actions required for the ListDataSources API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListDomainNames">ListDomainNames</a></code> | <code>string[]</code> | IAM actions required for the ListDomainNames API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListFunctions">ListFunctions</a></code> | <code>string[]</code> | IAM actions required for the ListFunctions API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListGraphqlApis">ListGraphqlApis</a></code> | <code>string[]</code> | IAM actions required for the ListGraphqlApis API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListResolvers">ListResolvers</a></code> | <code>string[]</code> | IAM actions required for the ListResolvers API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListResolversByFunction">ListResolversByFunction</a></code> | <code>string[]</code> | IAM actions required for the ListResolversByFunction API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListSourceApiAssociations">ListSourceApiAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListSourceApiAssociations API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListTypes">ListTypes</a></code> | <code>string[]</code> | IAM actions required for the ListTypes API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.ListTypesByAssociation">ListTypesByAssociation</a></code> | <code>string[]</code> | IAM actions required for the ListTypesByAssociation API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetApi">opGetApi</a></code> | <code>string[]</code> | IAM actions required for the GetApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetApiAssociation">opGetApiAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetApiAssociation API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetApiCache">opGetApiCache</a></code> | <code>string[]</code> | IAM actions required for the GetApiCache API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetChannelNamespace">opGetChannelNamespace</a></code> | <code>string[]</code> | IAM actions required for the GetChannelNamespace API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetDataSource">opGetDataSource</a></code> | <code>string[]</code> | IAM actions required for the GetDataSource API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetDataSourceIntrospection">opGetDataSourceIntrospection</a></code> | <code>string[]</code> | IAM actions required for the GetDataSourceIntrospection API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetDomainName">opGetDomainName</a></code> | <code>string[]</code> | IAM actions required for the GetDomainName API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetFunction">opGetFunction</a></code> | <code>string[]</code> | IAM actions required for the GetFunction API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetGraphqlApi">opGetGraphqlApi</a></code> | <code>string[]</code> | IAM actions required for the GetGraphqlApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetGraphqlApiEnvironmentVariables">opGetGraphqlApiEnvironmentVariables</a></code> | <code>string[]</code> | IAM actions required for the GetGraphqlApiEnvironmentVariables API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetIntrospectionSchema">opGetIntrospectionSchema</a></code> | <code>string[]</code> | IAM actions required for the GetIntrospectionSchema API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetResolver">opGetResolver</a></code> | <code>string[]</code> | IAM actions required for the GetResolver API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetSchemaCreationStatus">opGetSchemaCreationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetSchemaCreationStatus API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetSourceApiAssociation">opGetSourceApiAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetSourceApiAssociation API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.opGetType">opGetType</a></code> | <code>string[]</code> | IAM actions required for the GetType API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.PutGraphqlApiEnvironmentVariables">PutGraphqlApiEnvironmentVariables</a></code> | <code>string[]</code> | IAM actions required for the PutGraphqlApiEnvironmentVariables API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.StartDataSourceIntrospection">StartDataSourceIntrospection</a></code> | <code>string[]</code> | IAM actions required for the StartDataSourceIntrospection API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.StartSchemaCreation">StartSchemaCreation</a></code> | <code>string[]</code> | IAM actions required for the StartSchemaCreation API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.StartSchemaMerge">StartSchemaMerge</a></code> | <code>string[]</code> | IAM actions required for the StartSchemaMerge API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateApi">UpdateApi</a></code> | <code>string[]</code> | IAM actions required for the UpdateApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateApiCache">UpdateApiCache</a></code> | <code>string[]</code> | IAM actions required for the UpdateApiCache API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateApiKey">UpdateApiKey</a></code> | <code>string[]</code> | IAM actions required for the UpdateApiKey API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateChannelNamespace">UpdateChannelNamespace</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannelNamespace API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSource API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateDomainName">UpdateDomainName</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainName API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateFunction">UpdateFunction</a></code> | <code>string[]</code> | IAM actions required for the UpdateFunction API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateGraphqlApi">UpdateGraphqlApi</a></code> | <code>string[]</code> | IAM actions required for the UpdateGraphqlApi API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateResolver">UpdateResolver</a></code> | <code>string[]</code> | IAM actions required for the UpdateResolver API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateSourceApiAssociation">UpdateSourceApiAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateSourceApiAssociation API call. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateType">UpdateType</a></code> | <code>string[]</code> | IAM actions required for the UpdateType API call. |

---

##### `AssociateApi`<sup>Required</sup> <a name="AssociateApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.AssociateApi"></a>

```typescript
public readonly AssociateApi: string[];
```

- *Type:* string[]

IAM actions required for the AssociateApi API call.

---

##### `AssociateMergedGraphqlApi`<sup>Required</sup> <a name="AssociateMergedGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.AssociateMergedGraphqlApi"></a>

```typescript
public readonly AssociateMergedGraphqlApi: string[];
```

- *Type:* string[]

IAM actions required for the AssociateMergedGraphqlApi API call.

---

##### `AssociateSourceGraphqlApi`<sup>Required</sup> <a name="AssociateSourceGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.AssociateSourceGraphqlApi"></a>

```typescript
public readonly AssociateSourceGraphqlApi: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSourceGraphqlApi API call.

---

##### `CreateApi`<sup>Required</sup> <a name="CreateApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.CreateApi"></a>

```typescript
public readonly CreateApi: string[];
```

- *Type:* string[]

IAM actions required for the CreateApi API call.

---

##### `CreateApiCache`<sup>Required</sup> <a name="CreateApiCache" id="@cdk_utils/iam.appsync.AppsyncOperations.property.CreateApiCache"></a>

```typescript
public readonly CreateApiCache: string[];
```

- *Type:* string[]

IAM actions required for the CreateApiCache API call.

---

##### `CreateApiKey`<sup>Required</sup> <a name="CreateApiKey" id="@cdk_utils/iam.appsync.AppsyncOperations.property.CreateApiKey"></a>

```typescript
public readonly CreateApiKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateApiKey API call.

---

##### `CreateChannelNamespace`<sup>Required</sup> <a name="CreateChannelNamespace" id="@cdk_utils/iam.appsync.AppsyncOperations.property.CreateChannelNamespace"></a>

```typescript
public readonly CreateChannelNamespace: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannelNamespace API call.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.appsync.AppsyncOperations.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSource API call.

---

##### `CreateDomainName`<sup>Required</sup> <a name="CreateDomainName" id="@cdk_utils/iam.appsync.AppsyncOperations.property.CreateDomainName"></a>

```typescript
public readonly CreateDomainName: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomainName API call.

---

##### `CreateFunction`<sup>Required</sup> <a name="CreateFunction" id="@cdk_utils/iam.appsync.AppsyncOperations.property.CreateFunction"></a>

```typescript
public readonly CreateFunction: string[];
```

- *Type:* string[]

IAM actions required for the CreateFunction API call.

---

##### `CreateGraphqlApi`<sup>Required</sup> <a name="CreateGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.CreateGraphqlApi"></a>

```typescript
public readonly CreateGraphqlApi: string[];
```

- *Type:* string[]

IAM actions required for the CreateGraphqlApi API call.

---

##### `CreateResolver`<sup>Required</sup> <a name="CreateResolver" id="@cdk_utils/iam.appsync.AppsyncOperations.property.CreateResolver"></a>

```typescript
public readonly CreateResolver: string[];
```

- *Type:* string[]

IAM actions required for the CreateResolver API call.

---

##### `CreateType`<sup>Required</sup> <a name="CreateType" id="@cdk_utils/iam.appsync.AppsyncOperations.property.CreateType"></a>

```typescript
public readonly CreateType: string[];
```

- *Type:* string[]

IAM actions required for the CreateType API call.

---

##### `DeleteApi`<sup>Required</sup> <a name="DeleteApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteApi"></a>

```typescript
public readonly DeleteApi: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApi API call.

---

##### `DeleteApiCache`<sup>Required</sup> <a name="DeleteApiCache" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteApiCache"></a>

```typescript
public readonly DeleteApiCache: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApiCache API call.

---

##### `DeleteApiKey`<sup>Required</sup> <a name="DeleteApiKey" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteApiKey"></a>

```typescript
public readonly DeleteApiKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApiKey API call.

---

##### `DeleteChannelNamespace`<sup>Required</sup> <a name="DeleteChannelNamespace" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteChannelNamespace"></a>

```typescript
public readonly DeleteChannelNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannelNamespace API call.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSource API call.

---

##### `DeleteDomainName`<sup>Required</sup> <a name="DeleteDomainName" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteDomainName"></a>

```typescript
public readonly DeleteDomainName: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainName API call.

---

##### `DeleteFunction`<sup>Required</sup> <a name="DeleteFunction" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteFunction"></a>

```typescript
public readonly DeleteFunction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFunction API call.

---

##### `DeleteGraphqlApi`<sup>Required</sup> <a name="DeleteGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteGraphqlApi"></a>

```typescript
public readonly DeleteGraphqlApi: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGraphqlApi API call.

---

##### `DeleteResolver`<sup>Required</sup> <a name="DeleteResolver" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteResolver"></a>

```typescript
public readonly DeleteResolver: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResolver API call.

---

##### `DeleteType`<sup>Required</sup> <a name="DeleteType" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DeleteType"></a>

```typescript
public readonly DeleteType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteType API call.

---

##### `DisassociateApi`<sup>Required</sup> <a name="DisassociateApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DisassociateApi"></a>

```typescript
public readonly DisassociateApi: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateApi API call.

---

##### `DisassociateMergedGraphqlApi`<sup>Required</sup> <a name="DisassociateMergedGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DisassociateMergedGraphqlApi"></a>

```typescript
public readonly DisassociateMergedGraphqlApi: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMergedGraphqlApi API call.

---

##### `DisassociateSourceGraphqlApi`<sup>Required</sup> <a name="DisassociateSourceGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.DisassociateSourceGraphqlApi"></a>

```typescript
public readonly DisassociateSourceGraphqlApi: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSourceGraphqlApi API call.

---

##### `EvaluateCode`<sup>Required</sup> <a name="EvaluateCode" id="@cdk_utils/iam.appsync.AppsyncOperations.property.EvaluateCode"></a>

```typescript
public readonly EvaluateCode: string[];
```

- *Type:* string[]

IAM actions required for the EvaluateCode API call.

---

##### `EvaluateMappingTemplate`<sup>Required</sup> <a name="EvaluateMappingTemplate" id="@cdk_utils/iam.appsync.AppsyncOperations.property.EvaluateMappingTemplate"></a>

```typescript
public readonly EvaluateMappingTemplate: string[];
```

- *Type:* string[]

IAM actions required for the EvaluateMappingTemplate API call.

---

##### `FlushApiCache`<sup>Required</sup> <a name="FlushApiCache" id="@cdk_utils/iam.appsync.AppsyncOperations.property.FlushApiCache"></a>

```typescript
public readonly FlushApiCache: string[];
```

- *Type:* string[]

IAM actions required for the FlushApiCache API call.

---

##### `ListApiKeys`<sup>Required</sup> <a name="ListApiKeys" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListApiKeys"></a>

```typescript
public readonly ListApiKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListApiKeys API call.

---

##### `ListApis`<sup>Required</sup> <a name="ListApis" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListApis"></a>

```typescript
public readonly ListApis: string[];
```

- *Type:* string[]

IAM actions required for the ListApis API call.

---

##### `ListChannelNamespaces`<sup>Required</sup> <a name="ListChannelNamespaces" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListChannelNamespaces"></a>

```typescript
public readonly ListChannelNamespaces: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelNamespaces API call.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSources API call.

---

##### `ListDomainNames`<sup>Required</sup> <a name="ListDomainNames" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListDomainNames"></a>

```typescript
public readonly ListDomainNames: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainNames API call.

---

##### `ListFunctions`<sup>Required</sup> <a name="ListFunctions" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListFunctions"></a>

```typescript
public readonly ListFunctions: string[];
```

- *Type:* string[]

IAM actions required for the ListFunctions API call.

---

##### `ListGraphqlApis`<sup>Required</sup> <a name="ListGraphqlApis" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListGraphqlApis"></a>

```typescript
public readonly ListGraphqlApis: string[];
```

- *Type:* string[]

IAM actions required for the ListGraphqlApis API call.

---

##### `ListResolvers`<sup>Required</sup> <a name="ListResolvers" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListResolvers"></a>

```typescript
public readonly ListResolvers: string[];
```

- *Type:* string[]

IAM actions required for the ListResolvers API call.

---

##### `ListResolversByFunction`<sup>Required</sup> <a name="ListResolversByFunction" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListResolversByFunction"></a>

```typescript
public readonly ListResolversByFunction: string[];
```

- *Type:* string[]

IAM actions required for the ListResolversByFunction API call.

---

##### `ListSourceApiAssociations`<sup>Required</sup> <a name="ListSourceApiAssociations" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListSourceApiAssociations"></a>

```typescript
public readonly ListSourceApiAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListSourceApiAssociations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTypes`<sup>Required</sup> <a name="ListTypes" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListTypes"></a>

```typescript
public readonly ListTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListTypes API call.

---

##### `ListTypesByAssociation`<sup>Required</sup> <a name="ListTypesByAssociation" id="@cdk_utils/iam.appsync.AppsyncOperations.property.ListTypesByAssociation"></a>

```typescript
public readonly ListTypesByAssociation: string[];
```

- *Type:* string[]

IAM actions required for the ListTypesByAssociation API call.

---

##### `opGetApi`<sup>Required</sup> <a name="opGetApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetApi"></a>

```typescript
public readonly opGetApi: string[];
```

- *Type:* string[]

IAM actions required for the GetApi API call.

---

##### `opGetApiAssociation`<sup>Required</sup> <a name="opGetApiAssociation" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetApiAssociation"></a>

```typescript
public readonly opGetApiAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetApiAssociation API call.

---

##### `opGetApiCache`<sup>Required</sup> <a name="opGetApiCache" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetApiCache"></a>

```typescript
public readonly opGetApiCache: string[];
```

- *Type:* string[]

IAM actions required for the GetApiCache API call.

---

##### `opGetChannelNamespace`<sup>Required</sup> <a name="opGetChannelNamespace" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetChannelNamespace"></a>

```typescript
public readonly opGetChannelNamespace: string[];
```

- *Type:* string[]

IAM actions required for the GetChannelNamespace API call.

---

##### `opGetDataSource`<sup>Required</sup> <a name="opGetDataSource" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetDataSource"></a>

```typescript
public readonly opGetDataSource: string[];
```

- *Type:* string[]

IAM actions required for the GetDataSource API call.

---

##### `opGetDataSourceIntrospection`<sup>Required</sup> <a name="opGetDataSourceIntrospection" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetDataSourceIntrospection"></a>

```typescript
public readonly opGetDataSourceIntrospection: string[];
```

- *Type:* string[]

IAM actions required for the GetDataSourceIntrospection API call.

---

##### `opGetDomainName`<sup>Required</sup> <a name="opGetDomainName" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetDomainName"></a>

```typescript
public readonly opGetDomainName: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainName API call.

---

##### `opGetFunction`<sup>Required</sup> <a name="opGetFunction" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetFunction"></a>

```typescript
public readonly opGetFunction: string[];
```

- *Type:* string[]

IAM actions required for the GetFunction API call.

---

##### `opGetGraphqlApi`<sup>Required</sup> <a name="opGetGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetGraphqlApi"></a>

```typescript
public readonly opGetGraphqlApi: string[];
```

- *Type:* string[]

IAM actions required for the GetGraphqlApi API call.

---

##### `opGetGraphqlApiEnvironmentVariables`<sup>Required</sup> <a name="opGetGraphqlApiEnvironmentVariables" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetGraphqlApiEnvironmentVariables"></a>

```typescript
public readonly opGetGraphqlApiEnvironmentVariables: string[];
```

- *Type:* string[]

IAM actions required for the GetGraphqlApiEnvironmentVariables API call.

---

##### `opGetIntrospectionSchema`<sup>Required</sup> <a name="opGetIntrospectionSchema" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetIntrospectionSchema"></a>

```typescript
public readonly opGetIntrospectionSchema: string[];
```

- *Type:* string[]

IAM actions required for the GetIntrospectionSchema API call.

---

##### `opGetResolver`<sup>Required</sup> <a name="opGetResolver" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetResolver"></a>

```typescript
public readonly opGetResolver: string[];
```

- *Type:* string[]

IAM actions required for the GetResolver API call.

---

##### `opGetSchemaCreationStatus`<sup>Required</sup> <a name="opGetSchemaCreationStatus" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetSchemaCreationStatus"></a>

```typescript
public readonly opGetSchemaCreationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetSchemaCreationStatus API call.

---

##### `opGetSourceApiAssociation`<sup>Required</sup> <a name="opGetSourceApiAssociation" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetSourceApiAssociation"></a>

```typescript
public readonly opGetSourceApiAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetSourceApiAssociation API call.

---

##### `opGetType`<sup>Required</sup> <a name="opGetType" id="@cdk_utils/iam.appsync.AppsyncOperations.property.opGetType"></a>

```typescript
public readonly opGetType: string[];
```

- *Type:* string[]

IAM actions required for the GetType API call.

---

##### `PutGraphqlApiEnvironmentVariables`<sup>Required</sup> <a name="PutGraphqlApiEnvironmentVariables" id="@cdk_utils/iam.appsync.AppsyncOperations.property.PutGraphqlApiEnvironmentVariables"></a>

```typescript
public readonly PutGraphqlApiEnvironmentVariables: string[];
```

- *Type:* string[]

IAM actions required for the PutGraphqlApiEnvironmentVariables API call.

---

##### `StartDataSourceIntrospection`<sup>Required</sup> <a name="StartDataSourceIntrospection" id="@cdk_utils/iam.appsync.AppsyncOperations.property.StartDataSourceIntrospection"></a>

```typescript
public readonly StartDataSourceIntrospection: string[];
```

- *Type:* string[]

IAM actions required for the StartDataSourceIntrospection API call.

---

##### `StartSchemaCreation`<sup>Required</sup> <a name="StartSchemaCreation" id="@cdk_utils/iam.appsync.AppsyncOperations.property.StartSchemaCreation"></a>

```typescript
public readonly StartSchemaCreation: string[];
```

- *Type:* string[]

IAM actions required for the StartSchemaCreation API call.

---

##### `StartSchemaMerge`<sup>Required</sup> <a name="StartSchemaMerge" id="@cdk_utils/iam.appsync.AppsyncOperations.property.StartSchemaMerge"></a>

```typescript
public readonly StartSchemaMerge: string[];
```

- *Type:* string[]

IAM actions required for the StartSchemaMerge API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appsync.AppsyncOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApi`<sup>Required</sup> <a name="UpdateApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateApi"></a>

```typescript
public readonly UpdateApi: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApi API call.

---

##### `UpdateApiCache`<sup>Required</sup> <a name="UpdateApiCache" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateApiCache"></a>

```typescript
public readonly UpdateApiCache: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApiCache API call.

---

##### `UpdateApiKey`<sup>Required</sup> <a name="UpdateApiKey" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateApiKey"></a>

```typescript
public readonly UpdateApiKey: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApiKey API call.

---

##### `UpdateChannelNamespace`<sup>Required</sup> <a name="UpdateChannelNamespace" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateChannelNamespace"></a>

```typescript
public readonly UpdateChannelNamespace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannelNamespace API call.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSource API call.

---

##### `UpdateDomainName`<sup>Required</sup> <a name="UpdateDomainName" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateDomainName"></a>

```typescript
public readonly UpdateDomainName: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainName API call.

---

##### `UpdateFunction`<sup>Required</sup> <a name="UpdateFunction" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateFunction"></a>

```typescript
public readonly UpdateFunction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFunction API call.

---

##### `UpdateGraphqlApi`<sup>Required</sup> <a name="UpdateGraphqlApi" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateGraphqlApi"></a>

```typescript
public readonly UpdateGraphqlApi: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGraphqlApi API call.

---

##### `UpdateResolver`<sup>Required</sup> <a name="UpdateResolver" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateResolver"></a>

```typescript
public readonly UpdateResolver: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResolver API call.

---

##### `UpdateSourceApiAssociation`<sup>Required</sup> <a name="UpdateSourceApiAssociation" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateSourceApiAssociation"></a>

```typescript
public readonly UpdateSourceApiAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSourceApiAssociation API call.

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="@cdk_utils/iam.appsync.AppsyncOperations.property.UpdateType"></a>

```typescript
public readonly UpdateType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateType API call.

---

### AppsyncResources <a name="AppsyncResources" id="@cdk_utils/iam.appsync.AppsyncResources"></a>

ARN builders, validators, and parsers for appsync resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appsync.AppsyncResources.Initializer"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

new appsync.AppsyncResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.api">api</a></code> | Builds an ARN for the api resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.channelNamespace">channelNamespace</a></code> | Builds an ARN for the channelNamespace resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.datasource">datasource</a></code> | Builds an ARN for the datasource resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.domain">domain</a></code> | Builds an ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.field">field</a></code> | Builds an ARN for the field resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.function">function</a></code> | Builds an ARN for the function resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.graphqlapi">graphqlapi</a></code> | Builds an ARN for the graphqlapi resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.isValidAPIArn">isValidAPIArn</a></code> | Validates whether a string is a valid ARN for the api resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.isValidChannelNamespaceArn">isValidChannelNamespaceArn</a></code> | Validates whether a string is a valid ARN for the channelNamespace resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.isValidDatasourceArn">isValidDatasourceArn</a></code> | Validates whether a string is a valid ARN for the datasource resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.isValidFieldArn">isValidFieldArn</a></code> | Validates whether a string is a valid ARN for the field resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.isValidFunctionArn">isValidFunctionArn</a></code> | Validates whether a string is a valid ARN for the function resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.isValidGraphqlapiArn">isValidGraphqlapiArn</a></code> | Validates whether a string is a valid ARN for the graphqlapi resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.isValidMergedAPIAssociationArn">isValidMergedAPIAssociationArn</a></code> | Validates whether a string is a valid ARN for the mergedApiAssociation resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.isValidSourceAPIAssociationArn">isValidSourceAPIAssociationArn</a></code> | Validates whether a string is a valid ARN for the sourceApiAssociation resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.isValidTypeArn">isValidTypeArn</a></code> | Validates whether a string is a valid ARN for the type resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.mergedAPIAssociation">mergedAPIAssociation</a></code> | Builds an ARN for the mergedApiAssociation resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.parseAPIArn">parseAPIArn</a></code> | Parses a api ARN into its components. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.parseChannelNamespaceArn">parseChannelNamespaceArn</a></code> | Parses a channelNamespace ARN into its components. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.parseDatasourceArn">parseDatasourceArn</a></code> | Parses a datasource ARN into its components. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.parseDomainArn">parseDomainArn</a></code> | Parses a domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.parseFieldArn">parseFieldArn</a></code> | Parses a field ARN into its components. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.parseFunctionArn">parseFunctionArn</a></code> | Parses a function ARN into its components. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.parseGraphqlapiArn">parseGraphqlapiArn</a></code> | Parses a graphqlapi ARN into its components. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.parseMergedAPIAssociationArn">parseMergedAPIAssociationArn</a></code> | Parses a mergedApiAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.parseSourceAPIAssociationArn">parseSourceAPIAssociationArn</a></code> | Parses a sourceApiAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.parseTypeArn">parseTypeArn</a></code> | Parses a type ARN into its components. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.sourceAPIAssociation">sourceAPIAssociation</a></code> | Builds an ARN for the sourceApiAssociation resource. |
| <code><a href="#@cdk_utils/iam.appsync.AppsyncResources.type">type</a></code> | Builds an ARN for the type resource. |

---

##### `api` <a name="api" id="@cdk_utils/iam.appsync.AppsyncResources.api"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.api(props: AppsyncAPIArnProps)
```

Builds an ARN for the api resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appsync.AppsyncResources.api.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appsync.AppsyncAPIArnProps">AppsyncAPIArnProps</a>

---

##### `channelNamespace` <a name="channelNamespace" id="@cdk_utils/iam.appsync.AppsyncResources.channelNamespace"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.channelNamespace(props: AppsyncChannelNamespaceArnProps)
```

Builds an ARN for the channelNamespace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appsync.AppsyncResources.channelNamespace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appsync.AppsyncChannelNamespaceArnProps">AppsyncChannelNamespaceArnProps</a>

---

##### `datasource` <a name="datasource" id="@cdk_utils/iam.appsync.AppsyncResources.datasource"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.datasource(props: AppsyncDatasourceArnProps)
```

Builds an ARN for the datasource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appsync.AppsyncResources.datasource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appsync.AppsyncDatasourceArnProps">AppsyncDatasourceArnProps</a>

---

##### `domain` <a name="domain" id="@cdk_utils/iam.appsync.AppsyncResources.domain"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.domain(props: AppsyncDomainArnProps)
```

Builds an ARN for the domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appsync.AppsyncResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appsync.AppsyncDomainArnProps">AppsyncDomainArnProps</a>

---

##### `field` <a name="field" id="@cdk_utils/iam.appsync.AppsyncResources.field"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.field(props: AppsyncFieldArnProps)
```

Builds an ARN for the field resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appsync.AppsyncResources.field.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appsync.AppsyncFieldArnProps">AppsyncFieldArnProps</a>

---

##### `function` <a name="function" id="@cdk_utils/iam.appsync.AppsyncResources.function"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.function(props: AppsyncFunctionArnProps)
```

Builds an ARN for the function resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appsync.AppsyncResources.function.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appsync.AppsyncFunctionArnProps">AppsyncFunctionArnProps</a>

---

##### `graphqlapi` <a name="graphqlapi" id="@cdk_utils/iam.appsync.AppsyncResources.graphqlapi"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.graphqlapi(props: AppsyncGraphqlapiArnProps)
```

Builds an ARN for the graphqlapi resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appsync.AppsyncResources.graphqlapi.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appsync.AppsyncGraphqlapiArnProps">AppsyncGraphqlapiArnProps</a>

---

##### `isValidAPIArn` <a name="isValidAPIArn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidAPIArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.isValidAPIArn(arn: string)
```

Validates whether a string is a valid ARN for the api resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelNamespaceArn` <a name="isValidChannelNamespaceArn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidChannelNamespaceArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.isValidChannelNamespaceArn(arn: string)
```

Validates whether a string is a valid ARN for the channelNamespace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidChannelNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasourceArn` <a name="isValidDatasourceArn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidDatasourceArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.isValidDatasourceArn(arn: string)
```

Validates whether a string is a valid ARN for the datasource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidDatasourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidDomainArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFieldArn` <a name="isValidFieldArn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidFieldArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.isValidFieldArn(arn: string)
```

Validates whether a string is a valid ARN for the field resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidFieldArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFunctionArn` <a name="isValidFunctionArn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidFunctionArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.isValidFunctionArn(arn: string)
```

Validates whether a string is a valid ARN for the function resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidFunctionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGraphqlapiArn` <a name="isValidGraphqlapiArn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidGraphqlapiArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.isValidGraphqlapiArn(arn: string)
```

Validates whether a string is a valid ARN for the graphqlapi resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidGraphqlapiArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMergedAPIAssociationArn` <a name="isValidMergedAPIAssociationArn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidMergedAPIAssociationArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.isValidMergedAPIAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the mergedApiAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidMergedAPIAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSourceAPIAssociationArn` <a name="isValidSourceAPIAssociationArn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidSourceAPIAssociationArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.isValidSourceAPIAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the sourceApiAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidSourceAPIAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTypeArn` <a name="isValidTypeArn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidTypeArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.isValidTypeArn(arn: string)
```

Validates whether a string is a valid ARN for the type resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.isValidTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `mergedAPIAssociation` <a name="mergedAPIAssociation" id="@cdk_utils/iam.appsync.AppsyncResources.mergedAPIAssociation"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.mergedAPIAssociation(props: AppsyncMergedAPIAssociationArnProps)
```

Builds an ARN for the mergedApiAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appsync.AppsyncResources.mergedAPIAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appsync.AppsyncMergedAPIAssociationArnProps">AppsyncMergedAPIAssociationArnProps</a>

---

##### `parseAPIArn` <a name="parseAPIArn" id="@cdk_utils/iam.appsync.AppsyncResources.parseAPIArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.parseAPIArn(arn: string)
```

Parses a api ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.parseAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelNamespaceArn` <a name="parseChannelNamespaceArn" id="@cdk_utils/iam.appsync.AppsyncResources.parseChannelNamespaceArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.parseChannelNamespaceArn(arn: string)
```

Parses a channelNamespace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.parseChannelNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasourceArn` <a name="parseDatasourceArn" id="@cdk_utils/iam.appsync.AppsyncResources.parseDatasourceArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.parseDatasourceArn(arn: string)
```

Parses a datasource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.parseDatasourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.appsync.AppsyncResources.parseDomainArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.parseDomainArn(arn: string)
```

Parses a domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFieldArn` <a name="parseFieldArn" id="@cdk_utils/iam.appsync.AppsyncResources.parseFieldArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.parseFieldArn(arn: string)
```

Parses a field ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.parseFieldArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFunctionArn` <a name="parseFunctionArn" id="@cdk_utils/iam.appsync.AppsyncResources.parseFunctionArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.parseFunctionArn(arn: string)
```

Parses a function ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.parseFunctionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGraphqlapiArn` <a name="parseGraphqlapiArn" id="@cdk_utils/iam.appsync.AppsyncResources.parseGraphqlapiArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.parseGraphqlapiArn(arn: string)
```

Parses a graphqlapi ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.parseGraphqlapiArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMergedAPIAssociationArn` <a name="parseMergedAPIAssociationArn" id="@cdk_utils/iam.appsync.AppsyncResources.parseMergedAPIAssociationArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.parseMergedAPIAssociationArn(arn: string)
```

Parses a mergedApiAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.parseMergedAPIAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSourceAPIAssociationArn` <a name="parseSourceAPIAssociationArn" id="@cdk_utils/iam.appsync.AppsyncResources.parseSourceAPIAssociationArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.parseSourceAPIAssociationArn(arn: string)
```

Parses a sourceApiAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.parseSourceAPIAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTypeArn` <a name="parseTypeArn" id="@cdk_utils/iam.appsync.AppsyncResources.parseTypeArn"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.parseTypeArn(arn: string)
```

Parses a type ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appsync.AppsyncResources.parseTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `sourceAPIAssociation` <a name="sourceAPIAssociation" id="@cdk_utils/iam.appsync.AppsyncResources.sourceAPIAssociation"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.sourceAPIAssociation(props: AppsyncSourceAPIAssociationArnProps)
```

Builds an ARN for the sourceApiAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appsync.AppsyncResources.sourceAPIAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appsync.AppsyncSourceAPIAssociationArnProps">AppsyncSourceAPIAssociationArnProps</a>

---

##### `type` <a name="type" id="@cdk_utils/iam.appsync.AppsyncResources.type"></a>

```typescript
import { appsync } from '@cdk_utils/iam'

appsync.AppsyncResources.type(props: AppsyncTypeArnProps)
```

Builds an ARN for the type resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appsync.AppsyncResources.type.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appsync.AppsyncTypeArnProps">AppsyncTypeArnProps</a>

---




