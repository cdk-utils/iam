# `qbusiness` Submodule <a name="`qbusiness` Submodule" id="@cdk_utils/iam.qbusiness"></a>


## Structs <a name="Structs" id="Structs"></a>

### QbusinessApplicationArnComponents <a name="QbusinessApplicationArnComponents" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnComponents.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessApplicationArnComponents: qbusiness.QbusinessApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QbusinessApplicationArnProps <a name="QbusinessApplicationArnProps" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessApplicationArnProps: qbusiness.QbusinessApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QbusinessChatResponseConfigurationArnComponents <a name="QbusinessChatResponseConfigurationArnComponents" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents"></a>

Parsed components of a chat-response-configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessChatResponseConfigurationArnComponents: qbusiness.QbusinessChatResponseConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.property.chatResponseConfigurationId">chatResponseConfigurationId</a></code> | <code>string</code> | The ChatResponseConfigurationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `chatResponseConfigurationId`<sup>Required</sup> <a name="chatResponseConfigurationId" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.property.chatResponseConfigurationId"></a>

```typescript
public readonly chatResponseConfigurationId: string;
```

- *Type:* string

The ChatResponseConfigurationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QbusinessChatResponseConfigurationArnProps <a name="QbusinessChatResponseConfigurationArnProps" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps"></a>

Properties for building a chat-response-configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessChatResponseConfigurationArnProps: qbusiness.QbusinessChatResponseConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.property.chatResponseConfigurationId">chatResponseConfigurationId</a></code> | <code>string</code> | The ChatResponseConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `chatResponseConfigurationId`<sup>Required</sup> <a name="chatResponseConfigurationId" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.property.chatResponseConfigurationId"></a>

```typescript
public readonly chatResponseConfigurationId: string;
```

- *Type:* string

The ChatResponseConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QbusinessDataAccessorArnComponents <a name="QbusinessDataAccessorArnComponents" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents"></a>

Parsed components of a data-accessor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessDataAccessorArnComponents: qbusiness.QbusinessDataAccessorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.property.dataAccessorId">dataAccessorId</a></code> | <code>string</code> | The DataAccessorId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `dataAccessorId`<sup>Required</sup> <a name="dataAccessorId" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.property.dataAccessorId"></a>

```typescript
public readonly dataAccessorId: string;
```

- *Type:* string

The DataAccessorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QbusinessDataAccessorArnProps <a name="QbusinessDataAccessorArnProps" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps"></a>

Properties for building a data-accessor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessDataAccessorArnProps: qbusiness.QbusinessDataAccessorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.property.dataAccessorId">dataAccessorId</a></code> | <code>string</code> | The DataAccessorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `dataAccessorId`<sup>Required</sup> <a name="dataAccessorId" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.property.dataAccessorId"></a>

```typescript
public readonly dataAccessorId: string;
```

- *Type:* string

The DataAccessorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QbusinessDataSourceArnComponents <a name="QbusinessDataSourceArnComponents" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents"></a>

Parsed components of a data-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessDataSourceArnComponents: qbusiness.QbusinessDataSourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The DataSourceId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The DataSourceId component.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QbusinessDataSourceArnProps <a name="QbusinessDataSourceArnProps" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps"></a>

Properties for building a data-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessDataSourceArnProps: qbusiness.QbusinessDataSourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The DataSourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The DataSourceId component of the ARN.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QbusinessIndexArnComponents <a name="QbusinessIndexArnComponents" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents"></a>

Parsed components of a index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessIndexArnComponents: qbusiness.QbusinessIndexArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QbusinessIndexArnProps <a name="QbusinessIndexArnProps" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnProps"></a>

Properties for building a index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessIndexArnProps: qbusiness.QbusinessIndexArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessIndexArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QbusinessIntegrationArnComponents <a name="QbusinessIntegrationArnComponents" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents"></a>

Parsed components of a integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessIntegrationArnComponents: qbusiness.QbusinessIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QbusinessIntegrationArnProps <a name="QbusinessIntegrationArnProps" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps"></a>

Properties for building a integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessIntegrationArnProps: qbusiness.QbusinessIntegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QbusinessPluginArnComponents <a name="QbusinessPluginArnComponents" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents"></a>

Parsed components of a plugin ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessPluginArnComponents: qbusiness.QbusinessPluginArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.property.pluginId">pluginId</a></code> | <code>string</code> | The PluginId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

The PluginId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QbusinessPluginArnProps <a name="QbusinessPluginArnProps" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnProps"></a>

Properties for building a plugin ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessPluginArnProps: qbusiness.QbusinessPluginArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.property.pluginId">pluginId</a></code> | <code>string</code> | The PluginId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

The PluginId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessPluginArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QbusinessRetrieverArnComponents <a name="QbusinessRetrieverArnComponents" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents"></a>

Parsed components of a retriever ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessRetrieverArnComponents: qbusiness.QbusinessRetrieverArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.property.retrieverId">retrieverId</a></code> | <code>string</code> | The RetrieverId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `retrieverId`<sup>Required</sup> <a name="retrieverId" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnComponents.property.retrieverId"></a>

```typescript
public readonly retrieverId: string;
```

- *Type:* string

The RetrieverId component.

---

### QbusinessRetrieverArnProps <a name="QbusinessRetrieverArnProps" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps"></a>

Properties for building a retriever ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessRetrieverArnProps: qbusiness.QbusinessRetrieverArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.property.retrieverId">retrieverId</a></code> | <code>string</code> | The RetrieverId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `retrieverId`<sup>Required</sup> <a name="retrieverId" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.property.retrieverId"></a>

```typescript
public readonly retrieverId: string;
```

- *Type:* string

The RetrieverId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QbusinessSubscriptionArnComponents <a name="QbusinessSubscriptionArnComponents" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents"></a>

Parsed components of a subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessSubscriptionArnComponents: qbusiness.QbusinessSubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The SubscriptionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnComponents.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The SubscriptionId component.

---

### QbusinessSubscriptionArnProps <a name="QbusinessSubscriptionArnProps" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps"></a>

Properties for building a subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessSubscriptionArnProps: qbusiness.QbusinessSubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The SubscriptionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The SubscriptionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QbusinessWebExperienceArnComponents <a name="QbusinessWebExperienceArnComponents" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents"></a>

Parsed components of a web-experience ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessWebExperienceArnComponents: qbusiness.QbusinessWebExperienceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.property.webExperienceId">webExperienceId</a></code> | <code>string</code> | The WebExperienceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `webExperienceId`<sup>Required</sup> <a name="webExperienceId" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnComponents.property.webExperienceId"></a>

```typescript
public readonly webExperienceId: string;
```

- *Type:* string

The WebExperienceId component.

---

### QbusinessWebExperienceArnProps <a name="QbusinessWebExperienceArnProps" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps"></a>

Properties for building a web-experience ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

const qbusinessWebExperienceArnProps: qbusiness.QbusinessWebExperienceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.property.webExperienceId">webExperienceId</a></code> | <code>string</code> | The WebExperienceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `webExperienceId`<sup>Required</sup> <a name="webExperienceId" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.property.webExperienceId"></a>

```typescript
public readonly webExperienceId: string;
```

- *Type:* string

The WebExperienceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessActions <a name="QbusinessActions" id="@cdk_utils/iam.qbusiness.QbusinessActions"></a>

IAM action constants for the qbusiness service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qbusiness.QbusinessActions.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

new qbusiness.QbusinessActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] qbusiness:GetApplication. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetChatControlsConfiguration">actionGetChatControlsConfiguration</a></code> | <code>string</code> | [List] qbusiness:GetChatControlsConfiguration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetChatResponseConfiguration">actionGetChatResponseConfiguration</a></code> | <code>string</code> | [Read] qbusiness:GetChatResponseConfiguration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetDataAccessor">actionGetDataAccessor</a></code> | <code>string</code> | [Read] qbusiness:GetDataAccessor. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetDataSource">actionGetDataSource</a></code> | <code>string</code> | [Read] qbusiness:GetDataSource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetDocumentContent">actionGetDocumentContent</a></code> | <code>string</code> | [Read] qbusiness:GetDocumentContent. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetGroup">actionGetGroup</a></code> | <code>string</code> | [Read] qbusiness:GetGroup. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetIndex">actionGetIndex</a></code> | <code>string</code> | [Read] qbusiness:GetIndex. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetIntegration">actionGetIntegration</a></code> | <code>string</code> | [Read] qbusiness:GetIntegration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetMedia">actionGetMedia</a></code> | <code>string</code> | [Read] qbusiness:GetMedia. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetPlugin">actionGetPlugin</a></code> | <code>string</code> | [Read] qbusiness:GetPlugin. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] qbusiness:GetPolicy. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetRetriever">actionGetRetriever</a></code> | <code>string</code> | [Read] qbusiness:GetRetriever. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetUser">actionGetUser</a></code> | <code>string</code> | [Read] qbusiness:GetUser. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetWebExperience">actionGetWebExperience</a></code> | <code>string</code> | [Read] qbusiness:GetWebExperience. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] qbusiness:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.AssociatePermission">AssociatePermission</a></code> | <code>string</code> | [Write] qbusiness:AssociatePermission. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.BatchDeleteDocument">BatchDeleteDocument</a></code> | <code>string</code> | [Write] qbusiness:BatchDeleteDocument. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.BatchPutDocument">BatchPutDocument</a></code> | <code>string</code> | [Write] qbusiness:BatchPutDocument. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CancelSubscription">CancelSubscription</a></code> | <code>string</code> | [Write] qbusiness:CancelSubscription. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.Chat">Chat</a></code> | <code>string</code> | [Read] qbusiness:Chat. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ChatSync">ChatSync</a></code> | <code>string</code> | [Read] qbusiness:ChatSync. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CheckDocumentAccess">CheckDocumentAccess</a></code> | <code>string</code> | [Read] qbusiness:CheckDocumentAccess. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateAnonymousWebExperienceUrl">CreateAnonymousWebExperienceUrl</a></code> | <code>string</code> | [Write] qbusiness:CreateAnonymousWebExperienceUrl. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] qbusiness:CreateApplication. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateChatResponseConfiguration">CreateChatResponseConfiguration</a></code> | <code>string</code> | [Write] qbusiness:CreateChatResponseConfiguration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateDataAccessor">CreateDataAccessor</a></code> | <code>string</code> | [Write] qbusiness:CreateDataAccessor. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateDataAccessorWithTti">CreateDataAccessorWithTti</a></code> | <code>string</code> | [Write] qbusiness:CreateDataAccessorWithTti. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateDataSource">CreateDataSource</a></code> | <code>string</code> | [Write] qbusiness:CreateDataSource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateIndex">CreateIndex</a></code> | <code>string</code> | [Write] qbusiness:CreateIndex. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateIntegration">CreateIntegration</a></code> | <code>string</code> | [Write] qbusiness:CreateIntegration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreatePlugin">CreatePlugin</a></code> | <code>string</code> | [Write] qbusiness:CreatePlugin. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateRetriever">CreateRetriever</a></code> | <code>string</code> | [Write] qbusiness:CreateRetriever. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateSubscription">CreateSubscription</a></code> | <code>string</code> | [Write] qbusiness:CreateSubscription. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] qbusiness:CreateUser. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateWebExperience">CreateWebExperience</a></code> | <code>string</code> | [Write] qbusiness:CreateWebExperience. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] qbusiness:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteAttachment">DeleteAttachment</a></code> | <code>string</code> | [Write] qbusiness:DeleteAttachment. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteChatControlsConfiguration">DeleteChatControlsConfiguration</a></code> | <code>string</code> | [Write] qbusiness:DeleteChatControlsConfiguration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteChatResponseConfiguration">DeleteChatResponseConfiguration</a></code> | <code>string</code> | [Write] qbusiness:DeleteChatResponseConfiguration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteConversation">DeleteConversation</a></code> | <code>string</code> | [Write] qbusiness:DeleteConversation. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteDataAccessor">DeleteDataAccessor</a></code> | <code>string</code> | [Write] qbusiness:DeleteDataAccessor. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string</code> | [Write] qbusiness:DeleteDataSource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] qbusiness:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteIndex">DeleteIndex</a></code> | <code>string</code> | [Write] qbusiness:DeleteIndex. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] qbusiness:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeletePlugin">DeletePlugin</a></code> | <code>string</code> | [Write] qbusiness:DeletePlugin. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteRetriever">DeleteRetriever</a></code> | <code>string</code> | [Write] qbusiness:DeleteRetriever. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] qbusiness:DeleteUser. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteWebExperience">DeleteWebExperience</a></code> | <code>string</code> | [Write] qbusiness:DeleteWebExperience. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DisableAclOnDataSource">DisableAclOnDataSource</a></code> | <code>string</code> | [Write] qbusiness:DisableAclOnDataSource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.DisassociatePermission">DisassociatePermission</a></code> | <code>string</code> | [Write] qbusiness:DisassociatePermission. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] qbusiness:ListApplications. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListAttachments">ListAttachments</a></code> | <code>string</code> | [List] qbusiness:ListAttachments. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListChatResponseConfigurations">ListChatResponseConfigurations</a></code> | <code>string</code> | [List] qbusiness:ListChatResponseConfigurations. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListConversations">ListConversations</a></code> | <code>string</code> | [List] qbusiness:ListConversations. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListDataAccessors">ListDataAccessors</a></code> | <code>string</code> | [List] qbusiness:ListDataAccessors. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListDataSources">ListDataSources</a></code> | <code>string</code> | [List] qbusiness:ListDataSources. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListDataSourceSyncJobs">ListDataSourceSyncJobs</a></code> | <code>string</code> | [List] qbusiness:ListDataSourceSyncJobs. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListDocuments">ListDocuments</a></code> | <code>string</code> | [List] qbusiness:ListDocuments. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] qbusiness:ListGroups. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListIndices">ListIndices</a></code> | <code>string</code> | [List] qbusiness:ListIndices. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListIntegrations">ListIntegrations</a></code> | <code>string</code> | [List] qbusiness:ListIntegrations. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListMessages">ListMessages</a></code> | <code>string</code> | [List] qbusiness:ListMessages. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListPluginActions">ListPluginActions</a></code> | <code>string</code> | [Read] qbusiness:ListPluginActions. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListPlugins">ListPlugins</a></code> | <code>string</code> | [List] qbusiness:ListPlugins. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListPluginTypeActions">ListPluginTypeActions</a></code> | <code>string</code> | [Read] qbusiness:ListPluginTypeActions. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListPluginTypeMetadata">ListPluginTypeMetadata</a></code> | <code>string</code> | [Read] qbusiness:ListPluginTypeMetadata. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListRetrievers">ListRetrievers</a></code> | <code>string</code> | [List] qbusiness:ListRetrievers. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string</code> | [List] qbusiness:ListSubscriptions. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] qbusiness:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.ListWebExperiences">ListWebExperiences</a></code> | <code>string</code> | [List] qbusiness:ListWebExperiences. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.PutFeedback">PutFeedback</a></code> | <code>string</code> | [Write] qbusiness:PutFeedback. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.PutGroup">PutGroup</a></code> | <code>string</code> | [Write] qbusiness:PutGroup. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] qbusiness:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.SearchRelevantContent">SearchRelevantContent</a></code> | <code>string</code> | [Read] qbusiness:SearchRelevantContent. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.StartDataSourceSyncJob">StartDataSourceSyncJob</a></code> | <code>string</code> | [Write] qbusiness:StartDataSourceSyncJob. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.StartDeployment">StartDeployment</a></code> | <code>string</code> | [Write] qbusiness:StartDeployment. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.StopDataSourceSyncJob">StopDataSourceSyncJob</a></code> | <code>string</code> | [Write] qbusiness:StopDataSourceSyncJob. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] qbusiness:TagResource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] qbusiness:UntagResource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] qbusiness:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateChatControlsConfiguration">UpdateChatControlsConfiguration</a></code> | <code>string</code> | [Write] qbusiness:UpdateChatControlsConfiguration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateChatResponseConfiguration">UpdateChatResponseConfiguration</a></code> | <code>string</code> | [Write] qbusiness:UpdateChatResponseConfiguration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateDataAccessor">UpdateDataAccessor</a></code> | <code>string</code> | [Write] qbusiness:UpdateDataAccessor. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string</code> | [Write] qbusiness:UpdateDataSource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateIndex">UpdateIndex</a></code> | <code>string</code> | [Write] qbusiness:UpdateIndex. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateIntegration">UpdateIntegration</a></code> | <code>string</code> | [Write] qbusiness:UpdateIntegration. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdatePlugin">UpdatePlugin</a></code> | <code>string</code> | [Write] qbusiness:UpdatePlugin. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateRetriever">UpdateRetriever</a></code> | <code>string</code> | [Write] qbusiness:UpdateRetriever. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateSubscription">UpdateSubscription</a></code> | <code>string</code> | [Write] qbusiness:UpdateSubscription. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] qbusiness:UpdateUser. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateWebExperience">UpdateWebExperience</a></code> | <code>string</code> | [Write] qbusiness:UpdateWebExperience. |

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] qbusiness:GetApplication.

---

##### `actionGetChatControlsConfiguration`<sup>Required</sup> <a name="actionGetChatControlsConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetChatControlsConfiguration"></a>

```typescript
public readonly actionGetChatControlsConfiguration: string;
```

- *Type:* string

[List] qbusiness:GetChatControlsConfiguration.

---

##### `actionGetChatResponseConfiguration`<sup>Required</sup> <a name="actionGetChatResponseConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetChatResponseConfiguration"></a>

```typescript
public readonly actionGetChatResponseConfiguration: string;
```

- *Type:* string

[Read] qbusiness:GetChatResponseConfiguration.

---

##### `actionGetDataAccessor`<sup>Required</sup> <a name="actionGetDataAccessor" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetDataAccessor"></a>

```typescript
public readonly actionGetDataAccessor: string;
```

- *Type:* string

[Read] qbusiness:GetDataAccessor.

---

##### `actionGetDataSource`<sup>Required</sup> <a name="actionGetDataSource" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetDataSource"></a>

```typescript
public readonly actionGetDataSource: string;
```

- *Type:* string

[Read] qbusiness:GetDataSource.

---

##### `actionGetDocumentContent`<sup>Required</sup> <a name="actionGetDocumentContent" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetDocumentContent"></a>

```typescript
public readonly actionGetDocumentContent: string;
```

- *Type:* string

[Read] qbusiness:GetDocumentContent.

---

##### `actionGetGroup`<sup>Required</sup> <a name="actionGetGroup" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetGroup"></a>

```typescript
public readonly actionGetGroup: string;
```

- *Type:* string

[Read] qbusiness:GetGroup.

---

##### `actionGetIndex`<sup>Required</sup> <a name="actionGetIndex" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetIndex"></a>

```typescript
public readonly actionGetIndex: string;
```

- *Type:* string

[Read] qbusiness:GetIndex.

---

##### `actionGetIntegration`<sup>Required</sup> <a name="actionGetIntegration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetIntegration"></a>

```typescript
public readonly actionGetIntegration: string;
```

- *Type:* string

[Read] qbusiness:GetIntegration.

---

##### `actionGetMedia`<sup>Required</sup> <a name="actionGetMedia" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetMedia"></a>

```typescript
public readonly actionGetMedia: string;
```

- *Type:* string

[Read] qbusiness:GetMedia.

---

##### `actionGetPlugin`<sup>Required</sup> <a name="actionGetPlugin" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetPlugin"></a>

```typescript
public readonly actionGetPlugin: string;
```

- *Type:* string

[Read] qbusiness:GetPlugin.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] qbusiness:GetPolicy.

---

##### `actionGetRetriever`<sup>Required</sup> <a name="actionGetRetriever" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetRetriever"></a>

```typescript
public readonly actionGetRetriever: string;
```

- *Type:* string

[Read] qbusiness:GetRetriever.

---

##### `actionGetUser`<sup>Required</sup> <a name="actionGetUser" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetUser"></a>

```typescript
public readonly actionGetUser: string;
```

- *Type:* string

[Read] qbusiness:GetUser.

---

##### `actionGetWebExperience`<sup>Required</sup> <a name="actionGetWebExperience" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.actionGetWebExperience"></a>

```typescript
public readonly actionGetWebExperience: string;
```

- *Type:* string

[Read] qbusiness:GetWebExperience.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] qbusiness:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociatePermission`<sup>Required</sup> <a name="AssociatePermission" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.AssociatePermission"></a>

```typescript
public readonly AssociatePermission: string;
```

- *Type:* string

[Write] qbusiness:AssociatePermission.

---

##### `BatchDeleteDocument`<sup>Required</sup> <a name="BatchDeleteDocument" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.BatchDeleteDocument"></a>

```typescript
public readonly BatchDeleteDocument: string;
```

- *Type:* string

[Write] qbusiness:BatchDeleteDocument.

---

##### `BatchPutDocument`<sup>Required</sup> <a name="BatchPutDocument" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.BatchPutDocument"></a>

```typescript
public readonly BatchPutDocument: string;
```

- *Type:* string

[Write] qbusiness:BatchPutDocument.

---

##### `CancelSubscription`<sup>Required</sup> <a name="CancelSubscription" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CancelSubscription"></a>

```typescript
public readonly CancelSubscription: string;
```

- *Type:* string

[Write] qbusiness:CancelSubscription.

---

##### `Chat`<sup>Required</sup> <a name="Chat" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.Chat"></a>

```typescript
public readonly Chat: string;
```

- *Type:* string

[Read] qbusiness:Chat.

---

##### `ChatSync`<sup>Required</sup> <a name="ChatSync" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ChatSync"></a>

```typescript
public readonly ChatSync: string;
```

- *Type:* string

[Read] qbusiness:ChatSync.

---

##### `CheckDocumentAccess`<sup>Required</sup> <a name="CheckDocumentAccess" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CheckDocumentAccess"></a>

```typescript
public readonly CheckDocumentAccess: string;
```

- *Type:* string

[Read] qbusiness:CheckDocumentAccess.

---

##### `CreateAnonymousWebExperienceUrl`<sup>Required</sup> <a name="CreateAnonymousWebExperienceUrl" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateAnonymousWebExperienceUrl"></a>

```typescript
public readonly CreateAnonymousWebExperienceUrl: string;
```

- *Type:* string

[Write] qbusiness:CreateAnonymousWebExperienceUrl.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] qbusiness:CreateApplication.

---

##### `CreateChatResponseConfiguration`<sup>Required</sup> <a name="CreateChatResponseConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateChatResponseConfiguration"></a>

```typescript
public readonly CreateChatResponseConfiguration: string;
```

- *Type:* string

[Write] qbusiness:CreateChatResponseConfiguration.

---

##### `CreateDataAccessor`<sup>Required</sup> <a name="CreateDataAccessor" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateDataAccessor"></a>

```typescript
public readonly CreateDataAccessor: string;
```

- *Type:* string

[Write] qbusiness:CreateDataAccessor.

---

##### `CreateDataAccessorWithTti`<sup>Required</sup> <a name="CreateDataAccessorWithTti" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateDataAccessorWithTti"></a>

```typescript
public readonly CreateDataAccessorWithTti: string;
```

- *Type:* string

[Write] qbusiness:CreateDataAccessorWithTti.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string;
```

- *Type:* string

[Write] qbusiness:CreateDataSource.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string;
```

- *Type:* string

[Write] qbusiness:CreateIndex.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string;
```

- *Type:* string

[Write] qbusiness:CreateIntegration.

---

##### `CreatePlugin`<sup>Required</sup> <a name="CreatePlugin" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreatePlugin"></a>

```typescript
public readonly CreatePlugin: string;
```

- *Type:* string

[Write] qbusiness:CreatePlugin.

---

##### `CreateRetriever`<sup>Required</sup> <a name="CreateRetriever" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateRetriever"></a>

```typescript
public readonly CreateRetriever: string;
```

- *Type:* string

[Write] qbusiness:CreateRetriever.

---

##### `CreateSubscription`<sup>Required</sup> <a name="CreateSubscription" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateSubscription"></a>

```typescript
public readonly CreateSubscription: string;
```

- *Type:* string

[Write] qbusiness:CreateSubscription.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] qbusiness:CreateUser.

---

##### `CreateWebExperience`<sup>Required</sup> <a name="CreateWebExperience" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.CreateWebExperience"></a>

```typescript
public readonly CreateWebExperience: string;
```

- *Type:* string

[Write] qbusiness:CreateWebExperience.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] qbusiness:DeleteApplication.

---

##### `DeleteAttachment`<sup>Required</sup> <a name="DeleteAttachment" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteAttachment"></a>

```typescript
public readonly DeleteAttachment: string;
```

- *Type:* string

[Write] qbusiness:DeleteAttachment.

---

##### `DeleteChatControlsConfiguration`<sup>Required</sup> <a name="DeleteChatControlsConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteChatControlsConfiguration"></a>

```typescript
public readonly DeleteChatControlsConfiguration: string;
```

- *Type:* string

[Write] qbusiness:DeleteChatControlsConfiguration.

---

##### `DeleteChatResponseConfiguration`<sup>Required</sup> <a name="DeleteChatResponseConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteChatResponseConfiguration"></a>

```typescript
public readonly DeleteChatResponseConfiguration: string;
```

- *Type:* string

[Write] qbusiness:DeleteChatResponseConfiguration.

---

##### `DeleteConversation`<sup>Required</sup> <a name="DeleteConversation" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteConversation"></a>

```typescript
public readonly DeleteConversation: string;
```

- *Type:* string

[Write] qbusiness:DeleteConversation.

---

##### `DeleteDataAccessor`<sup>Required</sup> <a name="DeleteDataAccessor" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteDataAccessor"></a>

```typescript
public readonly DeleteDataAccessor: string;
```

- *Type:* string

[Write] qbusiness:DeleteDataAccessor.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string;
```

- *Type:* string

[Write] qbusiness:DeleteDataSource.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] qbusiness:DeleteGroup.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string;
```

- *Type:* string

[Write] qbusiness:DeleteIndex.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] qbusiness:DeleteIntegration.

---

##### `DeletePlugin`<sup>Required</sup> <a name="DeletePlugin" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeletePlugin"></a>

```typescript
public readonly DeletePlugin: string;
```

- *Type:* string

[Write] qbusiness:DeletePlugin.

---

##### `DeleteRetriever`<sup>Required</sup> <a name="DeleteRetriever" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteRetriever"></a>

```typescript
public readonly DeleteRetriever: string;
```

- *Type:* string

[Write] qbusiness:DeleteRetriever.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] qbusiness:DeleteUser.

---

##### `DeleteWebExperience`<sup>Required</sup> <a name="DeleteWebExperience" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DeleteWebExperience"></a>

```typescript
public readonly DeleteWebExperience: string;
```

- *Type:* string

[Write] qbusiness:DeleteWebExperience.

---

##### `DisableAclOnDataSource`<sup>Required</sup> <a name="DisableAclOnDataSource" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DisableAclOnDataSource"></a>

```typescript
public readonly DisableAclOnDataSource: string;
```

- *Type:* string

[Write] qbusiness:DisableAclOnDataSource.

---

##### `DisassociatePermission`<sup>Required</sup> <a name="DisassociatePermission" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.DisassociatePermission"></a>

```typescript
public readonly DisassociatePermission: string;
```

- *Type:* string

[Write] qbusiness:DisassociatePermission.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] qbusiness:ListApplications.

---

##### `ListAttachments`<sup>Required</sup> <a name="ListAttachments" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListAttachments"></a>

```typescript
public readonly ListAttachments: string;
```

- *Type:* string

[List] qbusiness:ListAttachments.

---

##### `ListChatResponseConfigurations`<sup>Required</sup> <a name="ListChatResponseConfigurations" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListChatResponseConfigurations"></a>

```typescript
public readonly ListChatResponseConfigurations: string;
```

- *Type:* string

[List] qbusiness:ListChatResponseConfigurations.

---

##### `ListConversations`<sup>Required</sup> <a name="ListConversations" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListConversations"></a>

```typescript
public readonly ListConversations: string;
```

- *Type:* string

[List] qbusiness:ListConversations.

---

##### `ListDataAccessors`<sup>Required</sup> <a name="ListDataAccessors" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListDataAccessors"></a>

```typescript
public readonly ListDataAccessors: string;
```

- *Type:* string

[List] qbusiness:ListDataAccessors.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string;
```

- *Type:* string

[List] qbusiness:ListDataSources.

---

##### `ListDataSourceSyncJobs`<sup>Required</sup> <a name="ListDataSourceSyncJobs" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListDataSourceSyncJobs"></a>

```typescript
public readonly ListDataSourceSyncJobs: string;
```

- *Type:* string

[List] qbusiness:ListDataSourceSyncJobs.

---

##### `ListDocuments`<sup>Required</sup> <a name="ListDocuments" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListDocuments"></a>

```typescript
public readonly ListDocuments: string;
```

- *Type:* string

[List] qbusiness:ListDocuments.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] qbusiness:ListGroups.

---

##### `ListIndices`<sup>Required</sup> <a name="ListIndices" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListIndices"></a>

```typescript
public readonly ListIndices: string;
```

- *Type:* string

[List] qbusiness:ListIndices.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string;
```

- *Type:* string

[List] qbusiness:ListIntegrations.

---

##### `ListMessages`<sup>Required</sup> <a name="ListMessages" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListMessages"></a>

```typescript
public readonly ListMessages: string;
```

- *Type:* string

[List] qbusiness:ListMessages.

---

##### `ListPluginActions`<sup>Required</sup> <a name="ListPluginActions" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListPluginActions"></a>

```typescript
public readonly ListPluginActions: string;
```

- *Type:* string

[Read] qbusiness:ListPluginActions.

---

##### `ListPlugins`<sup>Required</sup> <a name="ListPlugins" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListPlugins"></a>

```typescript
public readonly ListPlugins: string;
```

- *Type:* string

[List] qbusiness:ListPlugins.

---

##### `ListPluginTypeActions`<sup>Required</sup> <a name="ListPluginTypeActions" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListPluginTypeActions"></a>

```typescript
public readonly ListPluginTypeActions: string;
```

- *Type:* string

[Read] qbusiness:ListPluginTypeActions.

---

##### `ListPluginTypeMetadata`<sup>Required</sup> <a name="ListPluginTypeMetadata" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListPluginTypeMetadata"></a>

```typescript
public readonly ListPluginTypeMetadata: string;
```

- *Type:* string

[Read] qbusiness:ListPluginTypeMetadata.

---

##### `ListRetrievers`<sup>Required</sup> <a name="ListRetrievers" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListRetrievers"></a>

```typescript
public readonly ListRetrievers: string;
```

- *Type:* string

[List] qbusiness:ListRetrievers.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string;
```

- *Type:* string

[List] qbusiness:ListSubscriptions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] qbusiness:ListTagsForResource.

---

##### `ListWebExperiences`<sup>Required</sup> <a name="ListWebExperiences" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.ListWebExperiences"></a>

```typescript
public readonly ListWebExperiences: string;
```

- *Type:* string

[List] qbusiness:ListWebExperiences.

---

##### `PutFeedback`<sup>Required</sup> <a name="PutFeedback" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.PutFeedback"></a>

```typescript
public readonly PutFeedback: string;
```

- *Type:* string

[Write] qbusiness:PutFeedback.

---

##### `PutGroup`<sup>Required</sup> <a name="PutGroup" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.PutGroup"></a>

```typescript
public readonly PutGroup: string;
```

- *Type:* string

[Write] qbusiness:PutGroup.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] qbusiness:PutResourcePolicy.

---

##### `SearchRelevantContent`<sup>Required</sup> <a name="SearchRelevantContent" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.SearchRelevantContent"></a>

```typescript
public readonly SearchRelevantContent: string;
```

- *Type:* string

[Read] qbusiness:SearchRelevantContent.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDataSourceSyncJob`<sup>Required</sup> <a name="StartDataSourceSyncJob" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.StartDataSourceSyncJob"></a>

```typescript
public readonly StartDataSourceSyncJob: string;
```

- *Type:* string

[Write] qbusiness:StartDataSourceSyncJob.

---

##### `StartDeployment`<sup>Required</sup> <a name="StartDeployment" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.StartDeployment"></a>

```typescript
public readonly StartDeployment: string;
```

- *Type:* string

[Write] qbusiness:StartDeployment.

---

##### `StopDataSourceSyncJob`<sup>Required</sup> <a name="StopDataSourceSyncJob" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.StopDataSourceSyncJob"></a>

```typescript
public readonly StopDataSourceSyncJob: string;
```

- *Type:* string

[Write] qbusiness:StopDataSourceSyncJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] qbusiness:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] qbusiness:UntagResource.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] qbusiness:UpdateApplication.

---

##### `UpdateChatControlsConfiguration`<sup>Required</sup> <a name="UpdateChatControlsConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateChatControlsConfiguration"></a>

```typescript
public readonly UpdateChatControlsConfiguration: string;
```

- *Type:* string

[Write] qbusiness:UpdateChatControlsConfiguration.

---

##### `UpdateChatResponseConfiguration`<sup>Required</sup> <a name="UpdateChatResponseConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateChatResponseConfiguration"></a>

```typescript
public readonly UpdateChatResponseConfiguration: string;
```

- *Type:* string

[Write] qbusiness:UpdateChatResponseConfiguration.

---

##### `UpdateDataAccessor`<sup>Required</sup> <a name="UpdateDataAccessor" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateDataAccessor"></a>

```typescript
public readonly UpdateDataAccessor: string;
```

- *Type:* string

[Write] qbusiness:UpdateDataAccessor.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string;
```

- *Type:* string

[Write] qbusiness:UpdateDataSource.

---

##### `UpdateIndex`<sup>Required</sup> <a name="UpdateIndex" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateIndex"></a>

```typescript
public readonly UpdateIndex: string;
```

- *Type:* string

[Write] qbusiness:UpdateIndex.

---

##### `UpdateIntegration`<sup>Required</sup> <a name="UpdateIntegration" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateIntegration"></a>

```typescript
public readonly UpdateIntegration: string;
```

- *Type:* string

[Write] qbusiness:UpdateIntegration.

---

##### `UpdatePlugin`<sup>Required</sup> <a name="UpdatePlugin" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdatePlugin"></a>

```typescript
public readonly UpdatePlugin: string;
```

- *Type:* string

[Write] qbusiness:UpdatePlugin.

---

##### `UpdateRetriever`<sup>Required</sup> <a name="UpdateRetriever" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateRetriever"></a>

```typescript
public readonly UpdateRetriever: string;
```

- *Type:* string

[Write] qbusiness:UpdateRetriever.

---

##### `UpdateSubscription`<sup>Required</sup> <a name="UpdateSubscription" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateSubscription"></a>

```typescript
public readonly UpdateSubscription: string;
```

- *Type:* string

[Write] qbusiness:UpdateSubscription.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] qbusiness:UpdateUser.

---

##### `UpdateWebExperience`<sup>Required</sup> <a name="UpdateWebExperience" id="@cdk_utils/iam.qbusiness.QbusinessActions.property.UpdateWebExperience"></a>

```typescript
public readonly UpdateWebExperience: string;
```

- *Type:* string

[Write] qbusiness:UpdateWebExperience.

---

### QbusinessConditions <a name="QbusinessConditions" id="@cdk_utils/iam.qbusiness.QbusinessConditions"></a>

Condition key constants and builders for qbusiness.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qbusiness.QbusinessConditions.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

new qbusiness.QbusinessConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.qbusiness.QbusinessConditions.requestTag"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qbusiness.QbusinessConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.qbusiness.QbusinessConditions.resourceTag"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qbusiness.QbusinessConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.tagKeys"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.qbusiness.QbusinessConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.AllowVendedLogDeliveryForResourceConditionKeys">AllowVendedLogDeliveryForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AllowVendedLogDeliveryForResource action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateChatResponseConfigurationConditionKeys">CreateChatResponseConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChatResponseConfiguration action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateDataAccessorConditionKeys">CreateDataAccessorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataAccessor action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateDataSourceConditionKeys">CreateDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataSource action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateIndexConditionKeys">CreateIndexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIndex action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateIntegrationConditionKeys">CreateIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIntegration action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreatePluginConditionKeys">CreatePluginConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePlugin action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateRetrieverConditionKeys">CreateRetrieverConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRetriever action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateSubscriptionConditionKeys">CreateSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSubscription action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateWebExperienceConditionKeys">CreateWebExperienceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWebExperience action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.GROUP_ID">GROUP_ID</a></code> | <code>string</code> | Condition key: identitystore:GroupId (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessConditions.property.USER_ID">USER_ID</a></code> | <code>string</code> | Condition key: identitystore:UserId (ArrayOfString). |

---

##### `AllowVendedLogDeliveryForResourceConditionKeys`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResourceConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.AllowVendedLogDeliveryForResourceConditionKeys"></a>

```typescript
public readonly AllowVendedLogDeliveryForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AllowVendedLogDeliveryForResource action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateChatResponseConfigurationConditionKeys`<sup>Required</sup> <a name="CreateChatResponseConfigurationConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateChatResponseConfigurationConditionKeys"></a>

```typescript
public readonly CreateChatResponseConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChatResponseConfiguration action.

---

##### `CreateDataAccessorConditionKeys`<sup>Required</sup> <a name="CreateDataAccessorConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateDataAccessorConditionKeys"></a>

```typescript
public readonly CreateDataAccessorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataAccessor action.

---

##### `CreateDataSourceConditionKeys`<sup>Required</sup> <a name="CreateDataSourceConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateDataSourceConditionKeys"></a>

```typescript
public readonly CreateDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataSource action.

---

##### `CreateIndexConditionKeys`<sup>Required</sup> <a name="CreateIndexConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateIndexConditionKeys"></a>

```typescript
public readonly CreateIndexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIndex action.

---

##### `CreateIntegrationConditionKeys`<sup>Required</sup> <a name="CreateIntegrationConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateIntegrationConditionKeys"></a>

```typescript
public readonly CreateIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIntegration action.

---

##### `CreatePluginConditionKeys`<sup>Required</sup> <a name="CreatePluginConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreatePluginConditionKeys"></a>

```typescript
public readonly CreatePluginConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePlugin action.

---

##### `CreateRetrieverConditionKeys`<sup>Required</sup> <a name="CreateRetrieverConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateRetrieverConditionKeys"></a>

```typescript
public readonly CreateRetrieverConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRetriever action.

---

##### `CreateSubscriptionConditionKeys`<sup>Required</sup> <a name="CreateSubscriptionConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateSubscriptionConditionKeys"></a>

```typescript
public readonly CreateSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSubscription action.

---

##### `CreateWebExperienceConditionKeys`<sup>Required</sup> <a name="CreateWebExperienceConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.CreateWebExperienceConditionKeys"></a>

```typescript
public readonly CreateWebExperienceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWebExperience action.

---

##### `GROUP_ID`<sup>Required</sup> <a name="GROUP_ID" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.GROUP_ID"></a>

```typescript
public readonly GROUP_ID: string;
```

- *Type:* string

Condition key: identitystore:GroupId (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `USER_ID`<sup>Required</sup> <a name="USER_ID" id="@cdk_utils/iam.qbusiness.QbusinessConditions.property.USER_ID"></a>

```typescript
public readonly USER_ID: string;
```

- *Type:* string

Condition key: identitystore:UserId (ArrayOfString).

---

### QbusinessOperations <a name="QbusinessOperations" id="@cdk_utils/iam.qbusiness.QbusinessOperations"></a>

API operation to required IAM actions mapping for qbusiness.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qbusiness.QbusinessOperations.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

new qbusiness.QbusinessOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.AssociatePermission">AssociatePermission</a></code> | <code>string[]</code> | IAM actions required for the AssociatePermission API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.BatchDeleteDocument">BatchDeleteDocument</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteDocument API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.BatchPutDocument">BatchPutDocument</a></code> | <code>string[]</code> | IAM actions required for the BatchPutDocument API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CancelSubscription">CancelSubscription</a></code> | <code>string[]</code> | IAM actions required for the CancelSubscription API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.Chat">Chat</a></code> | <code>string[]</code> | IAM actions required for the Chat API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ChatSync">ChatSync</a></code> | <code>string[]</code> | IAM actions required for the ChatSync API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CheckDocumentAccess">CheckDocumentAccess</a></code> | <code>string[]</code> | IAM actions required for the CheckDocumentAccess API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateAnonymousWebExperienceUrl">CreateAnonymousWebExperienceUrl</a></code> | <code>string[]</code> | IAM actions required for the CreateAnonymousWebExperienceUrl API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateChatResponseConfiguration">CreateChatResponseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateChatResponseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateDataAccessor">CreateDataAccessor</a></code> | <code>string[]</code> | IAM actions required for the CreateDataAccessor API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateDataSource">CreateDataSource</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSource API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateIndex">CreateIndex</a></code> | <code>string[]</code> | IAM actions required for the CreateIndex API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreatePlugin">CreatePlugin</a></code> | <code>string[]</code> | IAM actions required for the CreatePlugin API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateRetriever">CreateRetriever</a></code> | <code>string[]</code> | IAM actions required for the CreateRetriever API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateSubscription">CreateSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscription API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateWebExperience">CreateWebExperience</a></code> | <code>string[]</code> | IAM actions required for the CreateWebExperience API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteAttachment">DeleteAttachment</a></code> | <code>string[]</code> | IAM actions required for the DeleteAttachment API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteChatControlsConfiguration">DeleteChatControlsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteChatControlsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteChatResponseConfiguration">DeleteChatResponseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteChatResponseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteConversation">DeleteConversation</a></code> | <code>string[]</code> | IAM actions required for the DeleteConversation API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteDataAccessor">DeleteDataAccessor</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataAccessor API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSource API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteIndex">DeleteIndex</a></code> | <code>string[]</code> | IAM actions required for the DeleteIndex API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeletePlugin">DeletePlugin</a></code> | <code>string[]</code> | IAM actions required for the DeletePlugin API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteRetriever">DeleteRetriever</a></code> | <code>string[]</code> | IAM actions required for the DeleteRetriever API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteWebExperience">DeleteWebExperience</a></code> | <code>string[]</code> | IAM actions required for the DeleteWebExperience API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.DisassociatePermission">DisassociatePermission</a></code> | <code>string[]</code> | IAM actions required for the DisassociatePermission API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListAttachments">ListAttachments</a></code> | <code>string[]</code> | IAM actions required for the ListAttachments API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListChatResponseConfigurations">ListChatResponseConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListChatResponseConfigurations API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListConversations">ListConversations</a></code> | <code>string[]</code> | IAM actions required for the ListConversations API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListDataAccessors">ListDataAccessors</a></code> | <code>string[]</code> | IAM actions required for the ListDataAccessors API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListDataSources">ListDataSources</a></code> | <code>string[]</code> | IAM actions required for the ListDataSources API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListDataSourceSyncJobs">ListDataSourceSyncJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDataSourceSyncJobs API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListDocuments">ListDocuments</a></code> | <code>string[]</code> | IAM actions required for the ListDocuments API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListGroups">ListGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGroups API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListIndices">ListIndices</a></code> | <code>string[]</code> | IAM actions required for the ListIndices API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListMessages">ListMessages</a></code> | <code>string[]</code> | IAM actions required for the ListMessages API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListPluginActions">ListPluginActions</a></code> | <code>string[]</code> | IAM actions required for the ListPluginActions API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListPlugins">ListPlugins</a></code> | <code>string[]</code> | IAM actions required for the ListPlugins API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListPluginTypeActions">ListPluginTypeActions</a></code> | <code>string[]</code> | IAM actions required for the ListPluginTypeActions API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListPluginTypeMetadata">ListPluginTypeMetadata</a></code> | <code>string[]</code> | IAM actions required for the ListPluginTypeMetadata API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListRetrievers">ListRetrievers</a></code> | <code>string[]</code> | IAM actions required for the ListRetrievers API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListWebExperiences">ListWebExperiences</a></code> | <code>string[]</code> | IAM actions required for the ListWebExperiences API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetChatControlsConfiguration">opGetChatControlsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetChatControlsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetChatResponseConfiguration">opGetChatResponseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetChatResponseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetDataAccessor">opGetDataAccessor</a></code> | <code>string[]</code> | IAM actions required for the GetDataAccessor API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetDataSource">opGetDataSource</a></code> | <code>string[]</code> | IAM actions required for the GetDataSource API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetDocumentContent">opGetDocumentContent</a></code> | <code>string[]</code> | IAM actions required for the GetDocumentContent API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetGroup">opGetGroup</a></code> | <code>string[]</code> | IAM actions required for the GetGroup API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetIndex">opGetIndex</a></code> | <code>string[]</code> | IAM actions required for the GetIndex API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetMedia">opGetMedia</a></code> | <code>string[]</code> | IAM actions required for the GetMedia API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetPlugin">opGetPlugin</a></code> | <code>string[]</code> | IAM actions required for the GetPlugin API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetRetriever">opGetRetriever</a></code> | <code>string[]</code> | IAM actions required for the GetRetriever API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetUser">opGetUser</a></code> | <code>string[]</code> | IAM actions required for the GetUser API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetWebExperience">opGetWebExperience</a></code> | <code>string[]</code> | IAM actions required for the GetWebExperience API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.PutFeedback">PutFeedback</a></code> | <code>string[]</code> | IAM actions required for the PutFeedback API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.PutGroup">PutGroup</a></code> | <code>string[]</code> | IAM actions required for the PutGroup API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.SearchRelevantContent">SearchRelevantContent</a></code> | <code>string[]</code> | IAM actions required for the SearchRelevantContent API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.StartDataSourceSyncJob">StartDataSourceSyncJob</a></code> | <code>string[]</code> | IAM actions required for the StartDataSourceSyncJob API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.StopDataSourceSyncJob">StopDataSourceSyncJob</a></code> | <code>string[]</code> | IAM actions required for the StopDataSourceSyncJob API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateChatControlsConfiguration">UpdateChatControlsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateChatControlsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateChatResponseConfiguration">UpdateChatResponseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateChatResponseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateDataAccessor">UpdateDataAccessor</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataAccessor API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSource API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateIndex">UpdateIndex</a></code> | <code>string[]</code> | IAM actions required for the UpdateIndex API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdatePlugin">UpdatePlugin</a></code> | <code>string[]</code> | IAM actions required for the UpdatePlugin API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateRetriever">UpdateRetriever</a></code> | <code>string[]</code> | IAM actions required for the UpdateRetriever API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateSubscription">UpdateSubscription</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscription API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateWebExperience">UpdateWebExperience</a></code> | <code>string[]</code> | IAM actions required for the UpdateWebExperience API call. |

---

##### `AssociatePermission`<sup>Required</sup> <a name="AssociatePermission" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.AssociatePermission"></a>

```typescript
public readonly AssociatePermission: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePermission API call.

---

##### `BatchDeleteDocument`<sup>Required</sup> <a name="BatchDeleteDocument" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.BatchDeleteDocument"></a>

```typescript
public readonly BatchDeleteDocument: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteDocument API call.

---

##### `BatchPutDocument`<sup>Required</sup> <a name="BatchPutDocument" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.BatchPutDocument"></a>

```typescript
public readonly BatchPutDocument: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutDocument API call.

---

##### `CancelSubscription`<sup>Required</sup> <a name="CancelSubscription" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CancelSubscription"></a>

```typescript
public readonly CancelSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CancelSubscription API call.

---

##### `Chat`<sup>Required</sup> <a name="Chat" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.Chat"></a>

```typescript
public readonly Chat: string[];
```

- *Type:* string[]

IAM actions required for the Chat API call.

---

##### `ChatSync`<sup>Required</sup> <a name="ChatSync" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ChatSync"></a>

```typescript
public readonly ChatSync: string[];
```

- *Type:* string[]

IAM actions required for the ChatSync API call.

---

##### `CheckDocumentAccess`<sup>Required</sup> <a name="CheckDocumentAccess" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CheckDocumentAccess"></a>

```typescript
public readonly CheckDocumentAccess: string[];
```

- *Type:* string[]

IAM actions required for the CheckDocumentAccess API call.

---

##### `CreateAnonymousWebExperienceUrl`<sup>Required</sup> <a name="CreateAnonymousWebExperienceUrl" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateAnonymousWebExperienceUrl"></a>

```typescript
public readonly CreateAnonymousWebExperienceUrl: string[];
```

- *Type:* string[]

IAM actions required for the CreateAnonymousWebExperienceUrl API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateChatResponseConfiguration`<sup>Required</sup> <a name="CreateChatResponseConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateChatResponseConfiguration"></a>

```typescript
public readonly CreateChatResponseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateChatResponseConfiguration API call.

---

##### `CreateDataAccessor`<sup>Required</sup> <a name="CreateDataAccessor" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateDataAccessor"></a>

```typescript
public readonly CreateDataAccessor: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataAccessor API call.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSource API call.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string[];
```

- *Type:* string[]

IAM actions required for the CreateIndex API call.

---

##### `CreatePlugin`<sup>Required</sup> <a name="CreatePlugin" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreatePlugin"></a>

```typescript
public readonly CreatePlugin: string[];
```

- *Type:* string[]

IAM actions required for the CreatePlugin API call.

---

##### `CreateRetriever`<sup>Required</sup> <a name="CreateRetriever" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateRetriever"></a>

```typescript
public readonly CreateRetriever: string[];
```

- *Type:* string[]

IAM actions required for the CreateRetriever API call.

---

##### `CreateSubscription`<sup>Required</sup> <a name="CreateSubscription" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateSubscription"></a>

```typescript
public readonly CreateSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscription API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `CreateWebExperience`<sup>Required</sup> <a name="CreateWebExperience" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.CreateWebExperience"></a>

```typescript
public readonly CreateWebExperience: string[];
```

- *Type:* string[]

IAM actions required for the CreateWebExperience API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteAttachment`<sup>Required</sup> <a name="DeleteAttachment" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteAttachment"></a>

```typescript
public readonly DeleteAttachment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAttachment API call.

---

##### `DeleteChatControlsConfiguration`<sup>Required</sup> <a name="DeleteChatControlsConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteChatControlsConfiguration"></a>

```typescript
public readonly DeleteChatControlsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChatControlsConfiguration API call.

---

##### `DeleteChatResponseConfiguration`<sup>Required</sup> <a name="DeleteChatResponseConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteChatResponseConfiguration"></a>

```typescript
public readonly DeleteChatResponseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChatResponseConfiguration API call.

---

##### `DeleteConversation`<sup>Required</sup> <a name="DeleteConversation" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteConversation"></a>

```typescript
public readonly DeleteConversation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConversation API call.

---

##### `DeleteDataAccessor`<sup>Required</sup> <a name="DeleteDataAccessor" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteDataAccessor"></a>

```typescript
public readonly DeleteDataAccessor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataAccessor API call.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSource API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIndex API call.

---

##### `DeletePlugin`<sup>Required</sup> <a name="DeletePlugin" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeletePlugin"></a>

```typescript
public readonly DeletePlugin: string[];
```

- *Type:* string[]

IAM actions required for the DeletePlugin API call.

---

##### `DeleteRetriever`<sup>Required</sup> <a name="DeleteRetriever" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteRetriever"></a>

```typescript
public readonly DeleteRetriever: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRetriever API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DeleteWebExperience`<sup>Required</sup> <a name="DeleteWebExperience" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DeleteWebExperience"></a>

```typescript
public readonly DeleteWebExperience: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWebExperience API call.

---

##### `DisassociatePermission`<sup>Required</sup> <a name="DisassociatePermission" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.DisassociatePermission"></a>

```typescript
public readonly DisassociatePermission: string[];
```

- *Type:* string[]

IAM actions required for the DisassociatePermission API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListAttachments`<sup>Required</sup> <a name="ListAttachments" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListAttachments"></a>

```typescript
public readonly ListAttachments: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachments API call.

---

##### `ListChatResponseConfigurations`<sup>Required</sup> <a name="ListChatResponseConfigurations" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListChatResponseConfigurations"></a>

```typescript
public readonly ListChatResponseConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListChatResponseConfigurations API call.

---

##### `ListConversations`<sup>Required</sup> <a name="ListConversations" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListConversations"></a>

```typescript
public readonly ListConversations: string[];
```

- *Type:* string[]

IAM actions required for the ListConversations API call.

---

##### `ListDataAccessors`<sup>Required</sup> <a name="ListDataAccessors" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListDataAccessors"></a>

```typescript
public readonly ListDataAccessors: string[];
```

- *Type:* string[]

IAM actions required for the ListDataAccessors API call.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSources API call.

---

##### `ListDataSourceSyncJobs`<sup>Required</sup> <a name="ListDataSourceSyncJobs" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListDataSourceSyncJobs"></a>

```typescript
public readonly ListDataSourceSyncJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSourceSyncJobs API call.

---

##### `ListDocuments`<sup>Required</sup> <a name="ListDocuments" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListDocuments"></a>

```typescript
public readonly ListDocuments: string[];
```

- *Type:* string[]

IAM actions required for the ListDocuments API call.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListGroups"></a>

```typescript
public readonly ListGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGroups API call.

---

##### `ListIndices`<sup>Required</sup> <a name="ListIndices" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListIndices"></a>

```typescript
public readonly ListIndices: string[];
```

- *Type:* string[]

IAM actions required for the ListIndices API call.

---

##### `ListMessages`<sup>Required</sup> <a name="ListMessages" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListMessages"></a>

```typescript
public readonly ListMessages: string[];
```

- *Type:* string[]

IAM actions required for the ListMessages API call.

---

##### `ListPluginActions`<sup>Required</sup> <a name="ListPluginActions" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListPluginActions"></a>

```typescript
public readonly ListPluginActions: string[];
```

- *Type:* string[]

IAM actions required for the ListPluginActions API call.

---

##### `ListPlugins`<sup>Required</sup> <a name="ListPlugins" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListPlugins"></a>

```typescript
public readonly ListPlugins: string[];
```

- *Type:* string[]

IAM actions required for the ListPlugins API call.

---

##### `ListPluginTypeActions`<sup>Required</sup> <a name="ListPluginTypeActions" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListPluginTypeActions"></a>

```typescript
public readonly ListPluginTypeActions: string[];
```

- *Type:* string[]

IAM actions required for the ListPluginTypeActions API call.

---

##### `ListPluginTypeMetadata`<sup>Required</sup> <a name="ListPluginTypeMetadata" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListPluginTypeMetadata"></a>

```typescript
public readonly ListPluginTypeMetadata: string[];
```

- *Type:* string[]

IAM actions required for the ListPluginTypeMetadata API call.

---

##### `ListRetrievers`<sup>Required</sup> <a name="ListRetrievers" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListRetrievers"></a>

```typescript
public readonly ListRetrievers: string[];
```

- *Type:* string[]

IAM actions required for the ListRetrievers API call.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWebExperiences`<sup>Required</sup> <a name="ListWebExperiences" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.ListWebExperiences"></a>

```typescript
public readonly ListWebExperiences: string[];
```

- *Type:* string[]

IAM actions required for the ListWebExperiences API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetChatControlsConfiguration`<sup>Required</sup> <a name="opGetChatControlsConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetChatControlsConfiguration"></a>

```typescript
public readonly opGetChatControlsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetChatControlsConfiguration API call.

---

##### `opGetChatResponseConfiguration`<sup>Required</sup> <a name="opGetChatResponseConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetChatResponseConfiguration"></a>

```typescript
public readonly opGetChatResponseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetChatResponseConfiguration API call.

---

##### `opGetDataAccessor`<sup>Required</sup> <a name="opGetDataAccessor" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetDataAccessor"></a>

```typescript
public readonly opGetDataAccessor: string[];
```

- *Type:* string[]

IAM actions required for the GetDataAccessor API call.

---

##### `opGetDataSource`<sup>Required</sup> <a name="opGetDataSource" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetDataSource"></a>

```typescript
public readonly opGetDataSource: string[];
```

- *Type:* string[]

IAM actions required for the GetDataSource API call.

---

##### `opGetDocumentContent`<sup>Required</sup> <a name="opGetDocumentContent" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetDocumentContent"></a>

```typescript
public readonly opGetDocumentContent: string[];
```

- *Type:* string[]

IAM actions required for the GetDocumentContent API call.

---

##### `opGetGroup`<sup>Required</sup> <a name="opGetGroup" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetGroup"></a>

```typescript
public readonly opGetGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetGroup API call.

---

##### `opGetIndex`<sup>Required</sup> <a name="opGetIndex" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetIndex"></a>

```typescript
public readonly opGetIndex: string[];
```

- *Type:* string[]

IAM actions required for the GetIndex API call.

---

##### `opGetMedia`<sup>Required</sup> <a name="opGetMedia" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetMedia"></a>

```typescript
public readonly opGetMedia: string[];
```

- *Type:* string[]

IAM actions required for the GetMedia API call.

---

##### `opGetPlugin`<sup>Required</sup> <a name="opGetPlugin" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetPlugin"></a>

```typescript
public readonly opGetPlugin: string[];
```

- *Type:* string[]

IAM actions required for the GetPlugin API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetRetriever`<sup>Required</sup> <a name="opGetRetriever" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetRetriever"></a>

```typescript
public readonly opGetRetriever: string[];
```

- *Type:* string[]

IAM actions required for the GetRetriever API call.

---

##### `opGetUser`<sup>Required</sup> <a name="opGetUser" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetUser"></a>

```typescript
public readonly opGetUser: string[];
```

- *Type:* string[]

IAM actions required for the GetUser API call.

---

##### `opGetWebExperience`<sup>Required</sup> <a name="opGetWebExperience" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.opGetWebExperience"></a>

```typescript
public readonly opGetWebExperience: string[];
```

- *Type:* string[]

IAM actions required for the GetWebExperience API call.

---

##### `PutFeedback`<sup>Required</sup> <a name="PutFeedback" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.PutFeedback"></a>

```typescript
public readonly PutFeedback: string[];
```

- *Type:* string[]

IAM actions required for the PutFeedback API call.

---

##### `PutGroup`<sup>Required</sup> <a name="PutGroup" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.PutGroup"></a>

```typescript
public readonly PutGroup: string[];
```

- *Type:* string[]

IAM actions required for the PutGroup API call.

---

##### `SearchRelevantContent`<sup>Required</sup> <a name="SearchRelevantContent" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.SearchRelevantContent"></a>

```typescript
public readonly SearchRelevantContent: string[];
```

- *Type:* string[]

IAM actions required for the SearchRelevantContent API call.

---

##### `StartDataSourceSyncJob`<sup>Required</sup> <a name="StartDataSourceSyncJob" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.StartDataSourceSyncJob"></a>

```typescript
public readonly StartDataSourceSyncJob: string[];
```

- *Type:* string[]

IAM actions required for the StartDataSourceSyncJob API call.

---

##### `StopDataSourceSyncJob`<sup>Required</sup> <a name="StopDataSourceSyncJob" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.StopDataSourceSyncJob"></a>

```typescript
public readonly StopDataSourceSyncJob: string[];
```

- *Type:* string[]

IAM actions required for the StopDataSourceSyncJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateChatControlsConfiguration`<sup>Required</sup> <a name="UpdateChatControlsConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateChatControlsConfiguration"></a>

```typescript
public readonly UpdateChatControlsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChatControlsConfiguration API call.

---

##### `UpdateChatResponseConfiguration`<sup>Required</sup> <a name="UpdateChatResponseConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateChatResponseConfiguration"></a>

```typescript
public readonly UpdateChatResponseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChatResponseConfiguration API call.

---

##### `UpdateDataAccessor`<sup>Required</sup> <a name="UpdateDataAccessor" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateDataAccessor"></a>

```typescript
public readonly UpdateDataAccessor: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataAccessor API call.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSource API call.

---

##### `UpdateIndex`<sup>Required</sup> <a name="UpdateIndex" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateIndex"></a>

```typescript
public readonly UpdateIndex: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIndex API call.

---

##### `UpdatePlugin`<sup>Required</sup> <a name="UpdatePlugin" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdatePlugin"></a>

```typescript
public readonly UpdatePlugin: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePlugin API call.

---

##### `UpdateRetriever`<sup>Required</sup> <a name="UpdateRetriever" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateRetriever"></a>

```typescript
public readonly UpdateRetriever: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRetriever API call.

---

##### `UpdateSubscription`<sup>Required</sup> <a name="UpdateSubscription" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateSubscription"></a>

```typescript
public readonly UpdateSubscription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscription API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

##### `UpdateWebExperience`<sup>Required</sup> <a name="UpdateWebExperience" id="@cdk_utils/iam.qbusiness.QbusinessOperations.property.UpdateWebExperience"></a>

```typescript
public readonly UpdateWebExperience: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWebExperience API call.

---

### QbusinessResources <a name="QbusinessResources" id="@cdk_utils/iam.qbusiness.QbusinessResources"></a>

ARN builders, validators, and parsers for qbusiness resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qbusiness.QbusinessResources.Initializer"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

new qbusiness.QbusinessResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.chatResponseConfiguration">chatResponseConfiguration</a></code> | Builds an ARN for the chat-response-configuration resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.dataAccessor">dataAccessor</a></code> | Builds an ARN for the data-accessor resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.dataSource">dataSource</a></code> | Builds an ARN for the data-source resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.index">index</a></code> | Builds an ARN for the index resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.integration">integration</a></code> | Builds an ARN for the integration resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.isValidChatResponseConfigurationArn">isValidChatResponseConfigurationArn</a></code> | Validates whether a string is a valid ARN for the chat-response-configuration resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.isValidDataAccessorArn">isValidDataAccessorArn</a></code> | Validates whether a string is a valid ARN for the data-accessor resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.isValidDataSourceArn">isValidDataSourceArn</a></code> | Validates whether a string is a valid ARN for the data-source resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.isValidIndexArn">isValidIndexArn</a></code> | Validates whether a string is a valid ARN for the index resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.isValidIntegrationArn">isValidIntegrationArn</a></code> | Validates whether a string is a valid ARN for the integration resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.isValidPluginArn">isValidPluginArn</a></code> | Validates whether a string is a valid ARN for the plugin resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.isValidRetrieverArn">isValidRetrieverArn</a></code> | Validates whether a string is a valid ARN for the retriever resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.isValidSubscriptionArn">isValidSubscriptionArn</a></code> | Validates whether a string is a valid ARN for the subscription resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.isValidWebExperienceArn">isValidWebExperienceArn</a></code> | Validates whether a string is a valid ARN for the web-experience resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.parseChatResponseConfigurationArn">parseChatResponseConfigurationArn</a></code> | Parses a chat-response-configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.parseDataAccessorArn">parseDataAccessorArn</a></code> | Parses a data-accessor ARN into its components. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.parseDataSourceArn">parseDataSourceArn</a></code> | Parses a data-source ARN into its components. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.parseIndexArn">parseIndexArn</a></code> | Parses a index ARN into its components. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.parseIntegrationArn">parseIntegrationArn</a></code> | Parses a integration ARN into its components. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.parsePluginArn">parsePluginArn</a></code> | Parses a plugin ARN into its components. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.parseRetrieverArn">parseRetrieverArn</a></code> | Parses a retriever ARN into its components. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.parseSubscriptionArn">parseSubscriptionArn</a></code> | Parses a subscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.parseWebExperienceArn">parseWebExperienceArn</a></code> | Parses a web-experience ARN into its components. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.plugin">plugin</a></code> | Builds an ARN for the plugin resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.retriever">retriever</a></code> | Builds an ARN for the retriever resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.subscription">subscription</a></code> | Builds an ARN for the subscription resource. |
| <code><a href="#@cdk_utils/iam.qbusiness.QbusinessResources.webExperience">webExperience</a></code> | Builds an ARN for the web-experience resource. |

---

##### `application` <a name="application" id="@cdk_utils/iam.qbusiness.QbusinessResources.application"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.application(props: QbusinessApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qbusiness.QbusinessResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qbusiness.QbusinessApplicationArnProps">QbusinessApplicationArnProps</a>

---

##### `chatResponseConfiguration` <a name="chatResponseConfiguration" id="@cdk_utils/iam.qbusiness.QbusinessResources.chatResponseConfiguration"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.chatResponseConfiguration(props: QbusinessChatResponseConfigurationArnProps)
```

Builds an ARN for the chat-response-configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qbusiness.QbusinessResources.chatResponseConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qbusiness.QbusinessChatResponseConfigurationArnProps">QbusinessChatResponseConfigurationArnProps</a>

---

##### `dataAccessor` <a name="dataAccessor" id="@cdk_utils/iam.qbusiness.QbusinessResources.dataAccessor"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.dataAccessor(props: QbusinessDataAccessorArnProps)
```

Builds an ARN for the data-accessor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qbusiness.QbusinessResources.dataAccessor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qbusiness.QbusinessDataAccessorArnProps">QbusinessDataAccessorArnProps</a>

---

##### `dataSource` <a name="dataSource" id="@cdk_utils/iam.qbusiness.QbusinessResources.dataSource"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.dataSource(props: QbusinessDataSourceArnProps)
```

Builds an ARN for the data-source resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qbusiness.QbusinessResources.dataSource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qbusiness.QbusinessDataSourceArnProps">QbusinessDataSourceArnProps</a>

---

##### `index` <a name="index" id="@cdk_utils/iam.qbusiness.QbusinessResources.index"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.index(props: QbusinessIndexArnProps)
```

Builds an ARN for the index resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qbusiness.QbusinessResources.index.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qbusiness.QbusinessIndexArnProps">QbusinessIndexArnProps</a>

---

##### `integration` <a name="integration" id="@cdk_utils/iam.qbusiness.QbusinessResources.integration"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.integration(props: QbusinessIntegrationArnProps)
```

Builds an ARN for the integration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qbusiness.QbusinessResources.integration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qbusiness.QbusinessIntegrationArnProps">QbusinessIntegrationArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidApplicationArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChatResponseConfigurationArn` <a name="isValidChatResponseConfigurationArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidChatResponseConfigurationArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.isValidChatResponseConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the chat-response-configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidChatResponseConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataAccessorArn` <a name="isValidDataAccessorArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidDataAccessorArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.isValidDataAccessorArn(arn: string)
```

Validates whether a string is a valid ARN for the data-accessor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidDataAccessorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataSourceArn` <a name="isValidDataSourceArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidDataSourceArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.isValidDataSourceArn(arn: string)
```

Validates whether a string is a valid ARN for the data-source resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidDataSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIndexArn` <a name="isValidIndexArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidIndexArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.isValidIndexArn(arn: string)
```

Validates whether a string is a valid ARN for the index resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationArn` <a name="isValidIntegrationArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidIntegrationArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.isValidIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPluginArn` <a name="isValidPluginArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidPluginArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.isValidPluginArn(arn: string)
```

Validates whether a string is a valid ARN for the plugin resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidPluginArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRetrieverArn` <a name="isValidRetrieverArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidRetrieverArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.isValidRetrieverArn(arn: string)
```

Validates whether a string is a valid ARN for the retriever resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidRetrieverArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubscriptionArn` <a name="isValidSubscriptionArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidSubscriptionArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.isValidSubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the subscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWebExperienceArn` <a name="isValidWebExperienceArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidWebExperienceArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.isValidWebExperienceArn(arn: string)
```

Validates whether a string is a valid ARN for the web-experience resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.isValidWebExperienceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseApplicationArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChatResponseConfigurationArn` <a name="parseChatResponseConfigurationArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseChatResponseConfigurationArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.parseChatResponseConfigurationArn(arn: string)
```

Parses a chat-response-configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseChatResponseConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataAccessorArn` <a name="parseDataAccessorArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseDataAccessorArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.parseDataAccessorArn(arn: string)
```

Parses a data-accessor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseDataAccessorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataSourceArn` <a name="parseDataSourceArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseDataSourceArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.parseDataSourceArn(arn: string)
```

Parses a data-source ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseDataSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIndexArn` <a name="parseIndexArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseIndexArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.parseIndexArn(arn: string)
```

Parses a index ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationArn` <a name="parseIntegrationArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseIntegrationArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.parseIntegrationArn(arn: string)
```

Parses a integration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePluginArn` <a name="parsePluginArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parsePluginArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.parsePluginArn(arn: string)
```

Parses a plugin ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parsePluginArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRetrieverArn` <a name="parseRetrieverArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseRetrieverArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.parseRetrieverArn(arn: string)
```

Parses a retriever ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseRetrieverArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubscriptionArn` <a name="parseSubscriptionArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseSubscriptionArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.parseSubscriptionArn(arn: string)
```

Parses a subscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWebExperienceArn` <a name="parseWebExperienceArn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseWebExperienceArn"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.parseWebExperienceArn(arn: string)
```

Parses a web-experience ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qbusiness.QbusinessResources.parseWebExperienceArn.parameter.arn"></a>

- *Type:* string

---

##### `plugin` <a name="plugin" id="@cdk_utils/iam.qbusiness.QbusinessResources.plugin"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.plugin(props: QbusinessPluginArnProps)
```

Builds an ARN for the plugin resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qbusiness.QbusinessResources.plugin.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qbusiness.QbusinessPluginArnProps">QbusinessPluginArnProps</a>

---

##### `retriever` <a name="retriever" id="@cdk_utils/iam.qbusiness.QbusinessResources.retriever"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.retriever(props: QbusinessRetrieverArnProps)
```

Builds an ARN for the retriever resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qbusiness.QbusinessResources.retriever.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qbusiness.QbusinessRetrieverArnProps">QbusinessRetrieverArnProps</a>

---

##### `subscription` <a name="subscription" id="@cdk_utils/iam.qbusiness.QbusinessResources.subscription"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.subscription(props: QbusinessSubscriptionArnProps)
```

Builds an ARN for the subscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qbusiness.QbusinessResources.subscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qbusiness.QbusinessSubscriptionArnProps">QbusinessSubscriptionArnProps</a>

---

##### `webExperience` <a name="webExperience" id="@cdk_utils/iam.qbusiness.QbusinessResources.webExperience"></a>

```typescript
import { qbusiness } from '@cdk_utils/iam'

qbusiness.QbusinessResources.webExperience(props: QbusinessWebExperienceArnProps)
```

Builds an ARN for the web-experience resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qbusiness.QbusinessResources.webExperience.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qbusiness.QbusinessWebExperienceArnProps">QbusinessWebExperienceArnProps</a>

---




