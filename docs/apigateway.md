# `apigateway` Submodule <a name="`apigateway` Submodule" id="@cdk_utils/iam.apigateway"></a>


## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayAccessLogSettingsArnComponents <a name="ApiGatewayAccessLogSettingsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents"></a>

Parsed components of a AccessLogSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAccessLogSettingsArnComponents: apigateway.ApiGatewayAccessLogSettingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.property.stageName">stageName</a></code> | <code>string</code> | The StageName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnComponents.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component.

---

### ApiGatewayAccessLogSettingsArnProps <a name="ApiGatewayAccessLogSettingsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps"></a>

Properties for building a AccessLogSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAccessLogSettingsArnProps: apigateway.ApiGatewayAccessLogSettingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.property.stageName">stageName</a></code> | <code>string</code> | The StageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAccountArnComponents <a name="ApiGatewayAccountArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayAccountArnComponents"></a>

Parsed components of a Account ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAccountArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAccountArnComponents: apigateway.ApiGatewayAccountArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccountArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccountArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccountArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAccountArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAccountArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAccountArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayAccountArnProps <a name="ApiGatewayAccountArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAccountArnProps"></a>

Properties for building a Account ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAccountArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAccountArnProps: apigateway.ApiGatewayAccountArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccountArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccountArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAccountArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAccountArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAccountArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAccountArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAPIArnComponents <a name="ApiGatewayAPIArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnComponents"></a>

Parsed components of a Api ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAPIArnComponents: apigateway.ApiGatewayAPIArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayAPIArnProps <a name="ApiGatewayAPIArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps"></a>

Properties for building a Api ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAPIArnProps: apigateway.ApiGatewayAPIArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAPIKeyArnComponents <a name="ApiGatewayAPIKeyArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnComponents"></a>

Parsed components of a ApiKey ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAPIKeyArnComponents: apigateway.ApiGatewayAPIKeyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnComponents.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | The ApiKeyId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnComponents.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

The ApiKeyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayAPIKeyArnProps <a name="ApiGatewayAPIKeyArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps"></a>

Properties for building a ApiKey ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAPIKeyArnProps: apigateway.ApiGatewayAPIKeyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | The ApiKeyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

The ApiKeyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAPIKeysArnComponents <a name="ApiGatewayAPIKeysArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnComponents"></a>

Parsed components of a ApiKeys ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAPIKeysArnComponents: apigateway.ApiGatewayAPIKeysArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayAPIKeysArnProps <a name="ApiGatewayAPIKeysArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnProps"></a>

Properties for building a ApiKeys ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAPIKeysArnProps: apigateway.ApiGatewayAPIKeysArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAPIMappingArnComponents <a name="ApiGatewayAPIMappingArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents"></a>

Parsed components of a ApiMapping ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAPIMappingArnComponents: apigateway.ApiGatewayAPIMappingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.property.apiMappingId">apiMappingId</a></code> | <code>string</code> | The ApiMappingId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiMappingId`<sup>Required</sup> <a name="apiMappingId" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.property.apiMappingId"></a>

```typescript
public readonly apiMappingId: string;
```

- *Type:* string

The ApiMappingId component.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayAPIMappingArnProps <a name="ApiGatewayAPIMappingArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps"></a>

Properties for building a ApiMapping ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAPIMappingArnProps: apigateway.ApiGatewayAPIMappingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.property.apiMappingId">apiMappingId</a></code> | <code>string</code> | The ApiMappingId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiMappingId`<sup>Required</sup> <a name="apiMappingId" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.property.apiMappingId"></a>

```typescript
public readonly apiMappingId: string;
```

- *Type:* string

The ApiMappingId component of the ARN.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAPIMappingsArnComponents <a name="ApiGatewayAPIMappingsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnComponents"></a>

Parsed components of a ApiMappings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAPIMappingsArnComponents: apigateway.ApiGatewayAPIMappingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayAPIMappingsArnProps <a name="ApiGatewayAPIMappingsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps"></a>

Properties for building a ApiMappings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAPIMappingsArnProps: apigateway.ApiGatewayAPIMappingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayApisArnComponents <a name="ApiGatewayApisArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayApisArnComponents"></a>

Parsed components of a Apis ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayApisArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayApisArnComponents: apigateway.ApiGatewayApisArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayApisArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayApisArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayApisArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayApisArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayApisArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayApisArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayApisArnProps <a name="ApiGatewayApisArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayApisArnProps"></a>

Properties for building a Apis ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayApisArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayApisArnProps: apigateway.ApiGatewayApisArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayApisArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayApisArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayApisArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayApisArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayApisArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayApisArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAuthorizerArnComponents <a name="ApiGatewayAuthorizerArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents"></a>

Parsed components of a Authorizer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAuthorizerArnComponents: apigateway.ApiGatewayAuthorizerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.property.authorizerId">authorizerId</a></code> | <code>string</code> | The AuthorizerId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

The AuthorizerId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayAuthorizersArnComponents <a name="ApiGatewayAuthorizersArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersArnComponents"></a>

Parsed components of a Authorizers ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAuthorizersArnComponents: apigateway.ApiGatewayAuthorizersArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayAuthorizersCacheArnComponents <a name="ApiGatewayAuthorizersCacheArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents"></a>

Parsed components of a AuthorizersCache ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAuthorizersCacheArnComponents: apigateway.ApiGatewayAuthorizersCacheArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.property.stageName">stageName</a></code> | <code>string</code> | The StageName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnComponents.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component.

---

### ApiGatewayAuthorizersCacheArnProps <a name="ApiGatewayAuthorizersCacheArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps"></a>

Properties for building a AuthorizersCache ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAuthorizersCacheArnProps: apigateway.ApiGatewayAuthorizersCacheArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.property.stageName">stageName</a></code> | <code>string</code> | The StageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAuthorizersVariant1ArnProps <a name="ApiGatewayAuthorizersVariant1ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps"></a>

Properties for building a AuthorizersVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAuthorizersVariant1ArnProps: apigateway.ApiGatewayAuthorizersVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAuthorizersVariant2ArnProps <a name="ApiGatewayAuthorizersVariant2ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps"></a>

Properties for building a AuthorizersVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAuthorizersVariant2ArnProps: apigateway.ApiGatewayAuthorizersVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAuthorizerVariant1ArnProps <a name="ApiGatewayAuthorizerVariant1ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps"></a>

Properties for building a AuthorizerVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAuthorizerVariant1ArnProps: apigateway.ApiGatewayAuthorizerVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.property.authorizerId">authorizerId</a></code> | <code>string</code> | The AuthorizerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

The AuthorizerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayAuthorizerVariant2ArnProps <a name="ApiGatewayAuthorizerVariant2ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps"></a>

Properties for building a AuthorizerVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayAuthorizerVariant2ArnProps: apigateway.ApiGatewayAuthorizerVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.property.authorizerId">authorizerId</a></code> | <code>string</code> | The AuthorizerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

The AuthorizerId component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayBasePathMappingArnComponents <a name="ApiGatewayBasePathMappingArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents"></a>

Parsed components of a BasePathMapping ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayBasePathMappingArnComponents: apigateway.ApiGatewayBasePathMappingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.property.basePath">basePath</a></code> | <code>string</code> | The BasePath component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

The BasePath component.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayBasePathMappingArnProps <a name="ApiGatewayBasePathMappingArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps"></a>

Properties for building a BasePathMapping ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayBasePathMappingArnProps: apigateway.ApiGatewayBasePathMappingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.property.basePath">basePath</a></code> | <code>string</code> | The BasePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

The BasePath component of the ARN.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayBasePathMappingsArnComponents <a name="ApiGatewayBasePathMappingsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnComponents"></a>

Parsed components of a BasePathMappings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayBasePathMappingsArnComponents: apigateway.ApiGatewayBasePathMappingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayBasePathMappingsArnProps <a name="ApiGatewayBasePathMappingsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps"></a>

Properties for building a BasePathMappings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayBasePathMappingsArnProps: apigateway.ApiGatewayBasePathMappingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayClientCertificateArnComponents <a name="ApiGatewayClientCertificateArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnComponents"></a>

Parsed components of a ClientCertificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayClientCertificateArnComponents: apigateway.ApiGatewayClientCertificateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnComponents.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | The ClientCertificateId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnComponents.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

The ClientCertificateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayClientCertificateArnProps <a name="ApiGatewayClientCertificateArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps"></a>

Properties for building a ClientCertificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayClientCertificateArnProps: apigateway.ApiGatewayClientCertificateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | The ClientCertificateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

The ClientCertificateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayClientCertificatesArnComponents <a name="ApiGatewayClientCertificatesArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnComponents"></a>

Parsed components of a ClientCertificates ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayClientCertificatesArnComponents: apigateway.ApiGatewayClientCertificatesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayClientCertificatesArnProps <a name="ApiGatewayClientCertificatesArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnProps"></a>

Properties for building a ClientCertificates ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayClientCertificatesArnProps: apigateway.ApiGatewayClientCertificatesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayCorsArnComponents <a name="ApiGatewayCorsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnComponents"></a>

Parsed components of a Cors ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayCorsArnComponents: apigateway.ApiGatewayCorsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayCorsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayCorsArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayCorsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayCorsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayCorsArnProps <a name="ApiGatewayCorsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps"></a>

Properties for building a Cors ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayCorsArnProps: apigateway.ApiGatewayCorsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDeploymentArnComponents <a name="ApiGatewayDeploymentArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents"></a>

Parsed components of a Deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDeploymentArnComponents: apigateway.ApiGatewayDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayDeploymentsArnComponents <a name="ApiGatewayDeploymentsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsArnComponents"></a>

Parsed components of a Deployments ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDeploymentsArnComponents: apigateway.ApiGatewayDeploymentsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayDeploymentsVariant1ArnProps <a name="ApiGatewayDeploymentsVariant1ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps"></a>

Properties for building a DeploymentsVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDeploymentsVariant1ArnProps: apigateway.ApiGatewayDeploymentsVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDeploymentsVariant2ArnProps <a name="ApiGatewayDeploymentsVariant2ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps"></a>

Properties for building a DeploymentsVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDeploymentsVariant2ArnProps: apigateway.ApiGatewayDeploymentsVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDeploymentVariant1ArnProps <a name="ApiGatewayDeploymentVariant1ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps"></a>

Properties for building a DeploymentVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDeploymentVariant1ArnProps: apigateway.ApiGatewayDeploymentVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDeploymentVariant2ArnProps <a name="ApiGatewayDeploymentVariant2ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps"></a>

Properties for building a DeploymentVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDeploymentVariant2ArnProps: apigateway.ApiGatewayDeploymentVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDocumentationPartArnComponents <a name="ApiGatewayDocumentationPartArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents"></a>

Parsed components of a DocumentationPart ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDocumentationPartArnComponents: apigateway.ApiGatewayDocumentationPartArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.property.documentationPartId">documentationPartId</a></code> | <code>string</code> | The DocumentationPartId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `documentationPartId`<sup>Required</sup> <a name="documentationPartId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.property.documentationPartId"></a>

```typescript
public readonly documentationPartId: string;
```

- *Type:* string

The DocumentationPartId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayDocumentationPartArnProps <a name="ApiGatewayDocumentationPartArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps"></a>

Properties for building a DocumentationPart ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDocumentationPartArnProps: apigateway.ApiGatewayDocumentationPartArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.property.documentationPartId">documentationPartId</a></code> | <code>string</code> | The DocumentationPartId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `documentationPartId`<sup>Required</sup> <a name="documentationPartId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.property.documentationPartId"></a>

```typescript
public readonly documentationPartId: string;
```

- *Type:* string

The DocumentationPartId component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDocumentationPartsArnComponents <a name="ApiGatewayDocumentationPartsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnComponents"></a>

Parsed components of a DocumentationParts ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDocumentationPartsArnComponents: apigateway.ApiGatewayDocumentationPartsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayDocumentationPartsArnProps <a name="ApiGatewayDocumentationPartsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps"></a>

Properties for building a DocumentationParts ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDocumentationPartsArnProps: apigateway.ApiGatewayDocumentationPartsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDocumentationVersionArnComponents <a name="ApiGatewayDocumentationVersionArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents"></a>

Parsed components of a DocumentationVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDocumentationVersionArnComponents: apigateway.ApiGatewayDocumentationVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.property.documentationVersionId">documentationVersionId</a></code> | <code>string</code> | The DocumentationVersionId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `documentationVersionId`<sup>Required</sup> <a name="documentationVersionId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.property.documentationVersionId"></a>

```typescript
public readonly documentationVersionId: string;
```

- *Type:* string

The DocumentationVersionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayDocumentationVersionArnProps <a name="ApiGatewayDocumentationVersionArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps"></a>

Properties for building a DocumentationVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDocumentationVersionArnProps: apigateway.ApiGatewayDocumentationVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.property.documentationVersionId">documentationVersionId</a></code> | <code>string</code> | The DocumentationVersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `documentationVersionId`<sup>Required</sup> <a name="documentationVersionId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.property.documentationVersionId"></a>

```typescript
public readonly documentationVersionId: string;
```

- *Type:* string

The DocumentationVersionId component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDocumentationVersionsArnComponents <a name="ApiGatewayDocumentationVersionsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnComponents"></a>

Parsed components of a DocumentationVersions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDocumentationVersionsArnComponents: apigateway.ApiGatewayDocumentationVersionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayDocumentationVersionsArnProps <a name="ApiGatewayDocumentationVersionsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps"></a>

Properties for building a DocumentationVersions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDocumentationVersionsArnProps: apigateway.ApiGatewayDocumentationVersionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDomainNameAccessAssociationArnComponents <a name="ApiGatewayDomainNameAccessAssociationArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents"></a>

Parsed components of a DomainNameAccessAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDomainNameAccessAssociationArnComponents: apigateway.ApiGatewayDomainNameAccessAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.sourceId">sourceId</a></code> | <code>string</code> | The SourceId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.sourceType">sourceType</a></code> | <code>string</code> | The SourceType component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

The SourceId component.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnComponents.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

The SourceType component.

---

### ApiGatewayDomainNameAccessAssociationArnProps <a name="ApiGatewayDomainNameAccessAssociationArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps"></a>

Properties for building a DomainNameAccessAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDomainNameAccessAssociationArnProps: apigateway.ApiGatewayDomainNameAccessAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.sourceId">sourceId</a></code> | <code>string</code> | The SourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.sourceType">sourceType</a></code> | <code>string</code> | The SourceType component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

The SourceId component of the ARN.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

The SourceType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDomainNameAccessAssociationsArnComponents <a name="ApiGatewayDomainNameAccessAssociationsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnComponents"></a>

Parsed components of a DomainNameAccessAssociations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDomainNameAccessAssociationsArnComponents: apigateway.ApiGatewayDomainNameAccessAssociationsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayDomainNameAccessAssociationsArnProps <a name="ApiGatewayDomainNameAccessAssociationsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnProps"></a>

Properties for building a DomainNameAccessAssociations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDomainNameAccessAssociationsArnProps: apigateway.ApiGatewayDomainNameAccessAssociationsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDomainNameArnComponents <a name="ApiGatewayDomainNameArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnComponents"></a>

Parsed components of a DomainName ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDomainNameArnComponents: apigateway.ApiGatewayDomainNameArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayDomainNameArnProps <a name="ApiGatewayDomainNameArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps"></a>

Properties for building a DomainName ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDomainNameArnProps: apigateway.ApiGatewayDomainNameArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayDomainNamesArnComponents <a name="ApiGatewayDomainNamesArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnComponents"></a>

Parsed components of a DomainNames ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDomainNamesArnComponents: apigateway.ApiGatewayDomainNamesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayDomainNamesArnProps <a name="ApiGatewayDomainNamesArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnProps"></a>

Properties for building a DomainNames ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayDomainNamesArnProps: apigateway.ApiGatewayDomainNamesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayExportedAPIArnComponents <a name="ApiGatewayExportedAPIArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents"></a>

Parsed components of a ExportedAPI ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayExportedAPIArnComponents: apigateway.ApiGatewayExportedAPIArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.property.specification">specification</a></code> | <code>string</code> | The Specification component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnComponents.property.specification"></a>

```typescript
public readonly specification: string;
```

- *Type:* string

The Specification component.

---

### ApiGatewayExportedAPIArnProps <a name="ApiGatewayExportedAPIArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps"></a>

Properties for building a ExportedAPI ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayExportedAPIArnProps: apigateway.ApiGatewayExportedAPIArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.property.specification">specification</a></code> | <code>string</code> | The Specification component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.property.specification"></a>

```typescript
public readonly specification: string;
```

- *Type:* string

The Specification component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayGatewayResponseArnComponents <a name="ApiGatewayGatewayResponseArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents"></a>

Parsed components of a GatewayResponse ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayGatewayResponseArnComponents: apigateway.ApiGatewayGatewayResponseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.property.responseType">responseType</a></code> | <code>string</code> | The ResponseType component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

The ResponseType component.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayGatewayResponseArnProps <a name="ApiGatewayGatewayResponseArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps"></a>

Properties for building a GatewayResponse ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayGatewayResponseArnProps: apigateway.ApiGatewayGatewayResponseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.property.responseType">responseType</a></code> | <code>string</code> | The ResponseType component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

The ResponseType component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayGatewayResponsesArnComponents <a name="ApiGatewayGatewayResponsesArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnComponents"></a>

Parsed components of a GatewayResponses ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayGatewayResponsesArnComponents: apigateway.ApiGatewayGatewayResponsesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayGatewayResponsesArnProps <a name="ApiGatewayGatewayResponsesArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps"></a>

Properties for building a GatewayResponses ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayGatewayResponsesArnProps: apigateway.ApiGatewayGatewayResponsesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayIntegrationArnComponents <a name="ApiGatewayIntegrationArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents"></a>

Parsed components of a Integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayIntegrationArnComponents: apigateway.ApiGatewayIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayIntegrationResponseArnComponents <a name="ApiGatewayIntegrationResponseArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents"></a>

Parsed components of a IntegrationResponse ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayIntegrationResponseArnComponents: apigateway.ApiGatewayIntegrationResponseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.integrationResponseId">integrationResponseId</a></code> | <code>string</code> | The IntegrationResponseId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component.

---

##### `integrationResponseId`<sup>Required</sup> <a name="integrationResponseId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.integrationResponseId"></a>

```typescript
public readonly integrationResponseId: string;
```

- *Type:* string

The IntegrationResponseId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayIntegrationResponsesArnComponents <a name="ApiGatewayIntegrationResponsesArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents"></a>

Parsed components of a IntegrationResponses ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayIntegrationResponsesArnComponents: apigateway.ApiGatewayIntegrationResponsesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayIntegrationResponsesArnProps <a name="ApiGatewayIntegrationResponsesArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps"></a>

Properties for building a IntegrationResponses ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayIntegrationResponsesArnProps: apigateway.ApiGatewayIntegrationResponsesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayIntegrationResponseVariant1ArnProps <a name="ApiGatewayIntegrationResponseVariant1ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps"></a>

Properties for building a IntegrationResponseVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayIntegrationResponseVariant1ArnProps: apigateway.ApiGatewayIntegrationResponseVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.integrationResponseId">integrationResponseId</a></code> | <code>string</code> | The IntegrationResponseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component of the ARN.

---

##### `integrationResponseId`<sup>Required</sup> <a name="integrationResponseId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.integrationResponseId"></a>

```typescript
public readonly integrationResponseId: string;
```

- *Type:* string

The IntegrationResponseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayIntegrationResponseVariant2ArnProps <a name="ApiGatewayIntegrationResponseVariant2ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps"></a>

Properties for building a IntegrationResponseVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayIntegrationResponseVariant2ArnProps: apigateway.ApiGatewayIntegrationResponseVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.httpMethodType">httpMethodType</a></code> | <code>string</code> | The HttpMethodType component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.statusCode">statusCode</a></code> | <code>string</code> | The StatusCode component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `httpMethodType`<sup>Required</sup> <a name="httpMethodType" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.httpMethodType"></a>

```typescript
public readonly httpMethodType: string;
```

- *Type:* string

The HttpMethodType component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

The StatusCode component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayIntegrationsArnComponents <a name="ApiGatewayIntegrationsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnComponents"></a>

Parsed components of a Integrations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayIntegrationsArnComponents: apigateway.ApiGatewayIntegrationsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayIntegrationsArnProps <a name="ApiGatewayIntegrationsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps"></a>

Properties for building a Integrations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayIntegrationsArnProps: apigateway.ApiGatewayIntegrationsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayIntegrationVariant1ArnProps <a name="ApiGatewayIntegrationVariant1ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps"></a>

Properties for building a IntegrationVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayIntegrationVariant1ArnProps: apigateway.ApiGatewayIntegrationVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayIntegrationVariant2ArnProps <a name="ApiGatewayIntegrationVariant2ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps"></a>

Properties for building a IntegrationVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayIntegrationVariant2ArnProps: apigateway.ApiGatewayIntegrationVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.httpMethodType">httpMethodType</a></code> | <code>string</code> | The HttpMethodType component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `httpMethodType`<sup>Required</sup> <a name="httpMethodType" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.httpMethodType"></a>

```typescript
public readonly httpMethodType: string;
```

- *Type:* string

The HttpMethodType component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayMethodArnComponents <a name="ApiGatewayMethodArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents"></a>

Parsed components of a Method ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayMethodArnComponents: apigateway.ApiGatewayMethodArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.httpMethodType">httpMethodType</a></code> | <code>string</code> | The HttpMethodType component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `httpMethodType`<sup>Required</sup> <a name="httpMethodType" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.httpMethodType"></a>

```typescript
public readonly httpMethodType: string;
```

- *Type:* string

The HttpMethodType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayMethodArnProps <a name="ApiGatewayMethodArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps"></a>

Properties for building a Method ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayMethodArnProps: apigateway.ApiGatewayMethodArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.httpMethodType">httpMethodType</a></code> | <code>string</code> | The HttpMethodType component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `httpMethodType`<sup>Required</sup> <a name="httpMethodType" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.httpMethodType"></a>

```typescript
public readonly httpMethodType: string;
```

- *Type:* string

The HttpMethodType component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayMethodResponseArnComponents <a name="ApiGatewayMethodResponseArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents"></a>

Parsed components of a MethodResponse ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayMethodResponseArnComponents: apigateway.ApiGatewayMethodResponseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.httpMethodType">httpMethodType</a></code> | <code>string</code> | The HttpMethodType component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.statusCode">statusCode</a></code> | <code>string</code> | The StatusCode component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `httpMethodType`<sup>Required</sup> <a name="httpMethodType" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.httpMethodType"></a>

```typescript
public readonly httpMethodType: string;
```

- *Type:* string

The HttpMethodType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnComponents.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

The StatusCode component.

---

### ApiGatewayMethodResponseArnProps <a name="ApiGatewayMethodResponseArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps"></a>

Properties for building a MethodResponse ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayMethodResponseArnProps: apigateway.ApiGatewayMethodResponseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.httpMethodType">httpMethodType</a></code> | <code>string</code> | The HttpMethodType component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.statusCode">statusCode</a></code> | <code>string</code> | The StatusCode component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `httpMethodType`<sup>Required</sup> <a name="httpMethodType" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.httpMethodType"></a>

```typescript
public readonly httpMethodType: string;
```

- *Type:* string

The HttpMethodType component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

The StatusCode component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayModelArnComponents <a name="ApiGatewayModelArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents"></a>

Parsed components of a Model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayModelArnComponents: apigateway.ApiGatewayModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.property.modelId">modelId</a></code> | <code>string</code> | The ModelId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

The ModelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayModelsArnComponents <a name="ApiGatewayModelsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayModelsArnComponents"></a>

Parsed components of a Models ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayModelsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayModelsArnComponents: apigateway.ApiGatewayModelsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayModelsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayModelsArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayModelsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayModelsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayModelsVariant1ArnProps <a name="ApiGatewayModelsVariant1ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps"></a>

Properties for building a ModelsVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayModelsVariant1ArnProps: apigateway.ApiGatewayModelsVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayModelsVariant2ArnProps <a name="ApiGatewayModelsVariant2ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps"></a>

Properties for building a ModelsVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayModelsVariant2ArnProps: apigateway.ApiGatewayModelsVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayModelTemplateArnComponents <a name="ApiGatewayModelTemplateArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents"></a>

Parsed components of a ModelTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayModelTemplateArnComponents: apigateway.ApiGatewayModelTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.property.modelId">modelId</a></code> | <code>string</code> | The ModelId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

The ModelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayModelTemplateArnProps <a name="ApiGatewayModelTemplateArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps"></a>

Properties for building a ModelTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayModelTemplateArnProps: apigateway.ApiGatewayModelTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.property.modelId">modelId</a></code> | <code>string</code> | The ModelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

The ModelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayModelVariant1ArnProps <a name="ApiGatewayModelVariant1ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps"></a>

Properties for building a ModelVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayModelVariant1ArnProps: apigateway.ApiGatewayModelVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.property.modelId">modelId</a></code> | <code>string</code> | The ModelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

The ModelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayModelVariant2ArnProps <a name="ApiGatewayModelVariant2ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps"></a>

Properties for building a ModelVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayModelVariant2ArnProps: apigateway.ApiGatewayModelVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.property.modelName">modelName</a></code> | <code>string</code> | The ModelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The ModelName component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayPortalArnComponents <a name="ApiGatewayPortalArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnComponents"></a>

Parsed components of a Portal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayPortalArnComponents: apigateway.ApiGatewayPortalArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalArnComponents.property.portalId">portalId</a></code> | <code>string</code> | The PortalId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnComponents.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

The PortalId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayPortalArnProps <a name="ApiGatewayPortalArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps"></a>

Properties for building a Portal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayPortalArnProps: apigateway.ApiGatewayPortalArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps.property.portalId">portalId</a></code> | <code>string</code> | The PortalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

The PortalId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayPortalProductArnComponents <a name="ApiGatewayPortalProductArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnComponents"></a>

Parsed components of a PortalProduct ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayPortalProductArnComponents: apigateway.ApiGatewayPortalProductArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnComponents.property.portalProductId">portalProductId</a></code> | <code>string</code> | The PortalProductId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `portalProductId`<sup>Required</sup> <a name="portalProductId" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnComponents.property.portalProductId"></a>

```typescript
public readonly portalProductId: string;
```

- *Type:* string

The PortalProductId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayPortalProductArnProps <a name="ApiGatewayPortalProductArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps"></a>

Properties for building a PortalProduct ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayPortalProductArnProps: apigateway.ApiGatewayPortalProductArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps.property.portalProductId">portalProductId</a></code> | <code>string</code> | The PortalProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `portalProductId`<sup>Required</sup> <a name="portalProductId" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps.property.portalProductId"></a>

```typescript
public readonly portalProductId: string;
```

- *Type:* string

The PortalProductId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayPrivateBasePathMappingArnComponents <a name="ApiGatewayPrivateBasePathMappingArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents"></a>

Parsed components of a PrivateBasePathMapping ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayPrivateBasePathMappingArnComponents: apigateway.ApiGatewayPrivateBasePathMappingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.basePath">basePath</a></code> | <code>string</code> | The BasePath component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The DomainIdentifier component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

The BasePath component.

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The DomainIdentifier component.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayPrivateBasePathMappingArnProps <a name="ApiGatewayPrivateBasePathMappingArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps"></a>

Properties for building a PrivateBasePathMapping ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayPrivateBasePathMappingArnProps: apigateway.ApiGatewayPrivateBasePathMappingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.basePath">basePath</a></code> | <code>string</code> | The BasePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The DomainIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

The BasePath component of the ARN.

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The DomainIdentifier component of the ARN.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayPrivateBasePathMappingsArnComponents <a name="ApiGatewayPrivateBasePathMappingsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents"></a>

Parsed components of a PrivateBasePathMappings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayPrivateBasePathMappingsArnComponents: apigateway.ApiGatewayPrivateBasePathMappingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The DomainIdentifier component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The DomainIdentifier component.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayPrivateBasePathMappingsArnProps <a name="ApiGatewayPrivateBasePathMappingsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps"></a>

Properties for building a PrivateBasePathMappings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayPrivateBasePathMappingsArnProps: apigateway.ApiGatewayPrivateBasePathMappingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The DomainIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The DomainIdentifier component of the ARN.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayPrivateDomainNameArnComponents <a name="ApiGatewayPrivateDomainNameArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents"></a>

Parsed components of a PrivateDomainName ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayPrivateDomainNameArnComponents: apigateway.ApiGatewayPrivateDomainNameArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The DomainIdentifier component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The DomainIdentifier component.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayPrivateDomainNameArnProps <a name="ApiGatewayPrivateDomainNameArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps"></a>

Properties for building a PrivateDomainName ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayPrivateDomainNameArnProps: apigateway.ApiGatewayPrivateDomainNameArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The DomainIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The DomainIdentifier component of the ARN.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayProductPageArnComponents <a name="ApiGatewayProductPageArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents"></a>

Parsed components of a ProductPage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayProductPageArnComponents: apigateway.ApiGatewayProductPageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.property.portalProductId">portalProductId</a></code> | <code>string</code> | The PortalProductId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.property.productPageId">productPageId</a></code> | <code>string</code> | The ProductPageId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `portalProductId`<sup>Required</sup> <a name="portalProductId" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.property.portalProductId"></a>

```typescript
public readonly portalProductId: string;
```

- *Type:* string

The PortalProductId component.

---

##### `productPageId`<sup>Required</sup> <a name="productPageId" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.property.productPageId"></a>

```typescript
public readonly productPageId: string;
```

- *Type:* string

The ProductPageId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayProductPageArnProps <a name="ApiGatewayProductPageArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps"></a>

Properties for building a ProductPage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayProductPageArnProps: apigateway.ApiGatewayProductPageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.property.portalProductId">portalProductId</a></code> | <code>string</code> | The PortalProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.property.productPageId">productPageId</a></code> | <code>string</code> | The ProductPageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `portalProductId`<sup>Required</sup> <a name="portalProductId" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.property.portalProductId"></a>

```typescript
public readonly portalProductId: string;
```

- *Type:* string

The PortalProductId component of the ARN.

---

##### `productPageId`<sup>Required</sup> <a name="productPageId" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.property.productPageId"></a>

```typescript
public readonly productPageId: string;
```

- *Type:* string

The ProductPageId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayProductRestEndpointPageArnComponents <a name="ApiGatewayProductRestEndpointPageArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents"></a>

Parsed components of a ProductRestEndpointPage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayProductRestEndpointPageArnComponents: apigateway.ApiGatewayProductRestEndpointPageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.property.portalProductId">portalProductId</a></code> | <code>string</code> | The PortalProductId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.property.productRestEndpointPageId">productRestEndpointPageId</a></code> | <code>string</code> | The ProductRestEndpointPageId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `portalProductId`<sup>Required</sup> <a name="portalProductId" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.property.portalProductId"></a>

```typescript
public readonly portalProductId: string;
```

- *Type:* string

The PortalProductId component.

---

##### `productRestEndpointPageId`<sup>Required</sup> <a name="productRestEndpointPageId" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.property.productRestEndpointPageId"></a>

```typescript
public readonly productRestEndpointPageId: string;
```

- *Type:* string

The ProductRestEndpointPageId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayProductRestEndpointPageArnProps <a name="ApiGatewayProductRestEndpointPageArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps"></a>

Properties for building a ProductRestEndpointPage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayProductRestEndpointPageArnProps: apigateway.ApiGatewayProductRestEndpointPageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.property.portalProductId">portalProductId</a></code> | <code>string</code> | The PortalProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.property.productRestEndpointPageId">productRestEndpointPageId</a></code> | <code>string</code> | The ProductRestEndpointPageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `portalProductId`<sup>Required</sup> <a name="portalProductId" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.property.portalProductId"></a>

```typescript
public readonly portalProductId: string;
```

- *Type:* string

The PortalProductId component of the ARN.

---

##### `productRestEndpointPageId`<sup>Required</sup> <a name="productRestEndpointPageId" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.property.productRestEndpointPageId"></a>

```typescript
public readonly productRestEndpointPageId: string;
```

- *Type:* string

The ProductRestEndpointPageId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRequestValidatorArnComponents <a name="ApiGatewayRequestValidatorArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents"></a>

Parsed components of a RequestValidator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRequestValidatorArnComponents: apigateway.ApiGatewayRequestValidatorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.property.requestValidatorId">requestValidatorId</a></code> | <code>string</code> | The RequestValidatorId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `requestValidatorId`<sup>Required</sup> <a name="requestValidatorId" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.property.requestValidatorId"></a>

```typescript
public readonly requestValidatorId: string;
```

- *Type:* string

The RequestValidatorId component.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayRequestValidatorArnProps <a name="ApiGatewayRequestValidatorArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps"></a>

Properties for building a RequestValidator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRequestValidatorArnProps: apigateway.ApiGatewayRequestValidatorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.property.requestValidatorId">requestValidatorId</a></code> | <code>string</code> | The RequestValidatorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `requestValidatorId`<sup>Required</sup> <a name="requestValidatorId" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.property.requestValidatorId"></a>

```typescript
public readonly requestValidatorId: string;
```

- *Type:* string

The RequestValidatorId component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRequestValidatorsArnComponents <a name="ApiGatewayRequestValidatorsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnComponents"></a>

Parsed components of a RequestValidators ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRequestValidatorsArnComponents: apigateway.ApiGatewayRequestValidatorsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayRequestValidatorsArnProps <a name="ApiGatewayRequestValidatorsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps"></a>

Properties for building a RequestValidators ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRequestValidatorsArnProps: apigateway.ApiGatewayRequestValidatorsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayResourceArnComponents <a name="ApiGatewayResourceArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents"></a>

Parsed components of a Resource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayResourceArnComponents: apigateway.ApiGatewayResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayResourceArnProps <a name="ApiGatewayResourceArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps"></a>

Properties for building a Resource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayResourceArnProps: apigateway.ApiGatewayResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayResourcesArnComponents <a name="ApiGatewayResourcesArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnComponents"></a>

Parsed components of a Resources ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayResourcesArnComponents: apigateway.ApiGatewayResourcesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourcesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourcesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourcesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourcesArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayResourcesArnProps <a name="ApiGatewayResourcesArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps"></a>

Properties for building a Resources ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayResourcesArnProps: apigateway.ApiGatewayResourcesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRestAPIArnComponents <a name="ApiGatewayRestAPIArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnComponents"></a>

Parsed components of a RestApi ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRestAPIArnComponents: apigateway.ApiGatewayRestAPIArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

### ApiGatewayRestAPIArnProps <a name="ApiGatewayRestAPIArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps"></a>

Properties for building a RestApi ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRestAPIArnProps: apigateway.ApiGatewayRestAPIArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRestApisArnComponents <a name="ApiGatewayRestApisArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRestApisArnComponents"></a>

Parsed components of a RestApis ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRestApisArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRestApisArnComponents: apigateway.ApiGatewayRestApisArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestApisArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestApisArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestApisArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRestApisArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRestApisArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRestApisArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayRestApisArnProps <a name="ApiGatewayRestApisArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRestApisArnProps"></a>

Properties for building a RestApis ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRestApisArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRestApisArnProps: apigateway.ApiGatewayRestApisArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestApisArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestApisArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRestApisArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRestApisArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRestApisArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRestApisArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRouteArnComponents <a name="ApiGatewayRouteArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents"></a>

Parsed components of a Route ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRouteArnComponents: apigateway.ApiGatewayRouteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.property.routeId">routeId</a></code> | <code>string</code> | The RouteId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnComponents.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The RouteId component.

---

### ApiGatewayRouteArnProps <a name="ApiGatewayRouteArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps"></a>

Properties for building a Route ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRouteArnProps: apigateway.ApiGatewayRouteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.property.routeId">routeId</a></code> | <code>string</code> | The RouteId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The RouteId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRouteRequestParameterArnComponents <a name="ApiGatewayRouteRequestParameterArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents"></a>

Parsed components of a RouteRequestParameter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRouteRequestParameterArnComponents: apigateway.ApiGatewayRouteRequestParameterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.requestParameterKey">requestParameterKey</a></code> | <code>string</code> | The RequestParameterKey component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.routeId">routeId</a></code> | <code>string</code> | The RouteId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `requestParameterKey`<sup>Required</sup> <a name="requestParameterKey" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.requestParameterKey"></a>

```typescript
public readonly requestParameterKey: string;
```

- *Type:* string

The RequestParameterKey component.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnComponents.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The RouteId component.

---

### ApiGatewayRouteRequestParameterArnProps <a name="ApiGatewayRouteRequestParameterArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps"></a>

Properties for building a RouteRequestParameter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRouteRequestParameterArnProps: apigateway.ApiGatewayRouteRequestParameterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.requestParameterKey">requestParameterKey</a></code> | <code>string</code> | The RequestParameterKey component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.routeId">routeId</a></code> | <code>string</code> | The RouteId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `requestParameterKey`<sup>Required</sup> <a name="requestParameterKey" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.requestParameterKey"></a>

```typescript
public readonly requestParameterKey: string;
```

- *Type:* string

The RequestParameterKey component of the ARN.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The RouteId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRouteResponseArnComponents <a name="ApiGatewayRouteResponseArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents"></a>

Parsed components of a RouteResponse ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRouteResponseArnComponents: apigateway.ApiGatewayRouteResponseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.routeId">routeId</a></code> | <code>string</code> | The RouteId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.routeResponseId">routeResponseId</a></code> | <code>string</code> | The RouteResponseId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The RouteId component.

---

##### `routeResponseId`<sup>Required</sup> <a name="routeResponseId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnComponents.property.routeResponseId"></a>

```typescript
public readonly routeResponseId: string;
```

- *Type:* string

The RouteResponseId component.

---

### ApiGatewayRouteResponseArnProps <a name="ApiGatewayRouteResponseArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps"></a>

Properties for building a RouteResponse ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRouteResponseArnProps: apigateway.ApiGatewayRouteResponseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.routeId">routeId</a></code> | <code>string</code> | The RouteId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.routeResponseId">routeResponseId</a></code> | <code>string</code> | The RouteResponseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The RouteId component of the ARN.

---

##### `routeResponseId`<sup>Required</sup> <a name="routeResponseId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.routeResponseId"></a>

```typescript
public readonly routeResponseId: string;
```

- *Type:* string

The RouteResponseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRouteResponsesArnComponents <a name="ApiGatewayRouteResponsesArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents"></a>

Parsed components of a RouteResponses ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRouteResponsesArnComponents: apigateway.ApiGatewayRouteResponsesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.property.routeId">routeId</a></code> | <code>string</code> | The RouteId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnComponents.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The RouteId component.

---

### ApiGatewayRouteResponsesArnProps <a name="ApiGatewayRouteResponsesArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps"></a>

Properties for building a RouteResponses ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRouteResponsesArnProps: apigateway.ApiGatewayRouteResponsesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.property.routeId">routeId</a></code> | <code>string</code> | The RouteId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The RouteId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRoutesArnComponents <a name="ApiGatewayRoutesArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnComponents"></a>

Parsed components of a Routes ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRoutesArnComponents: apigateway.ApiGatewayRoutesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutesArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayRoutesArnProps <a name="ApiGatewayRoutesArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps"></a>

Properties for building a Routes ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRoutesArnProps: apigateway.ApiGatewayRoutesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRouteSettingsArnComponents <a name="ApiGatewayRouteSettingsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents"></a>

Parsed components of a RouteSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRouteSettingsArnComponents: apigateway.ApiGatewayRouteSettingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.routeKey">routeKey</a></code> | <code>string</code> | The RouteKey component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.stageName">stageName</a></code> | <code>string</code> | The StageName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

The RouteKey component.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnComponents.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component.

---

### ApiGatewayRouteSettingsArnProps <a name="ApiGatewayRouteSettingsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps"></a>

Properties for building a RouteSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRouteSettingsArnProps: apigateway.ApiGatewayRouteSettingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.routeKey">routeKey</a></code> | <code>string</code> | The RouteKey component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.stageName">stageName</a></code> | <code>string</code> | The StageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

The RouteKey component of the ARN.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayRoutingRuleArnComponents <a name="ApiGatewayRoutingRuleArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents"></a>

Parsed components of a RoutingRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRoutingRuleArnComponents: apigateway.ApiGatewayRoutingRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.property.routingRuleId">routingRuleId</a></code> | <code>string</code> | The RoutingRuleId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routingRuleId`<sup>Required</sup> <a name="routingRuleId" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnComponents.property.routingRuleId"></a>

```typescript
public readonly routingRuleId: string;
```

- *Type:* string

The RoutingRuleId component.

---

### ApiGatewayRoutingRuleArnProps <a name="ApiGatewayRoutingRuleArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps"></a>

Properties for building a RoutingRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayRoutingRuleArnProps: apigateway.ApiGatewayRoutingRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.property.routingRuleId">routingRuleId</a></code> | <code>string</code> | The RoutingRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `routingRuleId`<sup>Required</sup> <a name="routingRuleId" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.property.routingRuleId"></a>

```typescript
public readonly routingRuleId: string;
```

- *Type:* string

The RoutingRuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewaySDKArnComponents <a name="ApiGatewaySDKArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents"></a>

Parsed components of a Sdk ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewaySDKArnComponents: apigateway.ApiGatewaySDKArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.sdkType">sdkType</a></code> | <code>string</code> | The SdkType component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.stageName">stageName</a></code> | <code>string</code> | The StageName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component.

---

##### `sdkType`<sup>Required</sup> <a name="sdkType" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.sdkType"></a>

```typescript
public readonly sdkType: string;
```

- *Type:* string

The SdkType component.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnComponents.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component.

---

### ApiGatewaySDKArnProps <a name="ApiGatewaySDKArnProps" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps"></a>

Properties for building a Sdk ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewaySDKArnProps: apigateway.ApiGatewaySDKArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.sdkType">sdkType</a></code> | <code>string</code> | The SdkType component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.stageName">stageName</a></code> | <code>string</code> | The StageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `sdkType`<sup>Required</sup> <a name="sdkType" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.sdkType"></a>

```typescript
public readonly sdkType: string;
```

- *Type:* string

The SdkType component of the ARN.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayStageArnComponents <a name="ApiGatewayStageArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents"></a>

Parsed components of a Stage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayStageArnComponents: apigateway.ApiGatewayStageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.property.stageName">stageName</a></code> | <code>string</code> | The StageName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewayStageArnComponents.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component.

---

### ApiGatewayStagesArnComponents <a name="ApiGatewayStagesArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayStagesArnComponents"></a>

Parsed components of a Stages ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayStagesArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayStagesArnComponents: apigateway.ApiGatewayStagesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayStagesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayStagesArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayStagesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayStagesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayStagesVariant1ArnProps <a name="ApiGatewayStagesVariant1ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps"></a>

Properties for building a StagesVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayStagesVariant1ArnProps: apigateway.ApiGatewayStagesVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayStagesVariant2ArnProps <a name="ApiGatewayStagesVariant2ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps"></a>

Properties for building a StagesVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayStagesVariant2ArnProps: apigateway.ApiGatewayStagesVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayStageVariant1ArnProps <a name="ApiGatewayStageVariant1ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps"></a>

Properties for building a StageVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayStageVariant1ArnProps: apigateway.ApiGatewayStageVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.property.stageName">stageName</a></code> | <code>string</code> | The StageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayStageVariant2ArnProps <a name="ApiGatewayStageVariant2ArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps"></a>

Properties for building a StageVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayStageVariant2ArnProps: apigateway.ApiGatewayStageVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.property.restAPIId">restAPIId</a></code> | <code>string</code> | The RestApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.property.stageName">stageName</a></code> | <code>string</code> | The StageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restAPIId`<sup>Required</sup> <a name="restAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.property.restAPIId"></a>

```typescript
public readonly restAPIId: string;
```

- *Type:* string

The RestApiId component of the ARN.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayTagsArnComponents <a name="ApiGatewayTagsArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnComponents"></a>

Parsed components of a Tags ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayTagsArnComponents: apigateway.ApiGatewayTagsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTagsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTagsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTagsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTagsArnComponents.property.urlEncodedResourceARN">urlEncodedResourceARN</a></code> | <code>string</code> | The UrlEncodedResourceARN component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `urlEncodedResourceARN`<sup>Required</sup> <a name="urlEncodedResourceARN" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnComponents.property.urlEncodedResourceARN"></a>

```typescript
public readonly urlEncodedResourceARN: string;
```

- *Type:* string

The UrlEncodedResourceARN component.

---

### ApiGatewayTagsArnProps <a name="ApiGatewayTagsArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps"></a>

Properties for building a Tags ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayTagsArnProps: apigateway.ApiGatewayTagsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps.property.urlEncodedResourceARN">urlEncodedResourceARN</a></code> | <code>string</code> | The UrlEncodedResourceARN component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `urlEncodedResourceARN`<sup>Required</sup> <a name="urlEncodedResourceARN" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps.property.urlEncodedResourceARN"></a>

```typescript
public readonly urlEncodedResourceARN: string;
```

- *Type:* string

The UrlEncodedResourceARN component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayTemplateArnComponents <a name="ApiGatewayTemplateArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnComponents"></a>

Parsed components of a Template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayTemplateArnComponents: apigateway.ApiGatewayTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTemplateArnComponents.property.modelName">modelName</a></code> | <code>string</code> | The ModelName component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnComponents.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The ModelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayTemplateArnProps <a name="ApiGatewayTemplateArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps"></a>

Properties for building a Template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayTemplateArnProps: apigateway.ApiGatewayTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps.property.modelName">modelName</a></code> | <code>string</code> | The ModelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The ModelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayUsagePlanArnComponents <a name="ApiGatewayUsagePlanArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnComponents"></a>

Parsed components of a UsagePlan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayUsagePlanArnComponents: apigateway.ApiGatewayUsagePlanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnComponents.property.usagePlanId">usagePlanId</a></code> | <code>string</code> | The UsagePlanId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnComponents.property.usagePlanId"></a>

```typescript
public readonly usagePlanId: string;
```

- *Type:* string

The UsagePlanId component.

---

### ApiGatewayUsagePlanArnProps <a name="ApiGatewayUsagePlanArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps"></a>

Properties for building a UsagePlan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayUsagePlanArnProps: apigateway.ApiGatewayUsagePlanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps.property.usagePlanId">usagePlanId</a></code> | <code>string</code> | The UsagePlanId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps.property.usagePlanId"></a>

```typescript
public readonly usagePlanId: string;
```

- *Type:* string

The UsagePlanId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayUsagePlanKeyArnComponents <a name="ApiGatewayUsagePlanKeyArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents"></a>

Parsed components of a UsagePlanKey ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayUsagePlanKeyArnComponents: apigateway.ApiGatewayUsagePlanKeyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.property.usagePlanId">usagePlanId</a></code> | <code>string</code> | The UsagePlanId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnComponents.property.usagePlanId"></a>

```typescript
public readonly usagePlanId: string;
```

- *Type:* string

The UsagePlanId component.

---

### ApiGatewayUsagePlanKeyArnProps <a name="ApiGatewayUsagePlanKeyArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps"></a>

Properties for building a UsagePlanKey ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayUsagePlanKeyArnProps: apigateway.ApiGatewayUsagePlanKeyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.property.usagePlanId">usagePlanId</a></code> | <code>string</code> | The UsagePlanId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.property.usagePlanId"></a>

```typescript
public readonly usagePlanId: string;
```

- *Type:* string

The UsagePlanId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayUsagePlanKeysArnComponents <a name="ApiGatewayUsagePlanKeysArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnComponents"></a>

Parsed components of a UsagePlanKeys ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayUsagePlanKeysArnComponents: apigateway.ApiGatewayUsagePlanKeysArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnComponents.property.usagePlanId">usagePlanId</a></code> | <code>string</code> | The UsagePlanId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnComponents.property.usagePlanId"></a>

```typescript
public readonly usagePlanId: string;
```

- *Type:* string

The UsagePlanId component.

---

### ApiGatewayUsagePlanKeysArnProps <a name="ApiGatewayUsagePlanKeysArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps"></a>

Properties for building a UsagePlanKeys ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayUsagePlanKeysArnProps: apigateway.ApiGatewayUsagePlanKeysArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps.property.usagePlanId">usagePlanId</a></code> | <code>string</code> | The UsagePlanId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps.property.usagePlanId"></a>

```typescript
public readonly usagePlanId: string;
```

- *Type:* string

The UsagePlanId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayUsagePlansArnComponents <a name="ApiGatewayUsagePlansArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnComponents"></a>

Parsed components of a UsagePlans ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayUsagePlansArnComponents: apigateway.ApiGatewayUsagePlansArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayUsagePlansArnProps <a name="ApiGatewayUsagePlansArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnProps"></a>

Properties for building a UsagePlans ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayUsagePlansArnProps: apigateway.ApiGatewayUsagePlansArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayVPCLinkArnComponents <a name="ApiGatewayVPCLinkArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnComponents"></a>

Parsed components of a VpcLink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayVPCLinkArnComponents: apigateway.ApiGatewayVPCLinkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnComponents.property.vpcLinkId">vpcLinkId</a></code> | <code>string</code> | The VpcLinkId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vpcLinkId`<sup>Required</sup> <a name="vpcLinkId" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnComponents.property.vpcLinkId"></a>

```typescript
public readonly vpcLinkId: string;
```

- *Type:* string

The VpcLinkId component.

---

### ApiGatewayVPCLinkArnProps <a name="ApiGatewayVPCLinkArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps"></a>

Properties for building a VpcLink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayVPCLinkArnProps: apigateway.ApiGatewayVPCLinkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps.property.vpcLinkId">vpcLinkId</a></code> | <code>string</code> | The VpcLinkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vpcLinkId`<sup>Required</sup> <a name="vpcLinkId" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps.property.vpcLinkId"></a>

```typescript
public readonly vpcLinkId: string;
```

- *Type:* string

The VpcLinkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiGatewayVPCLinksArnComponents <a name="ApiGatewayVPCLinksArnComponents" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnComponents"></a>

Parsed components of a VpcLinks ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnComponents.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayVPCLinksArnComponents: apigateway.ApiGatewayVPCLinksArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiGatewayVPCLinksArnProps <a name="ApiGatewayVPCLinksArnProps" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnProps"></a>

Properties for building a VpcLinks ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnProps.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

const apiGatewayVPCLinksArnProps: apigateway.ApiGatewayVPCLinksArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayActions <a name="ApiGatewayActions" id="@cdk_utils/iam.apigateway.ApiGatewayActions"></a>

IAM action constants for the apigateway service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apigateway.ApiGatewayActions.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

new apigateway.ApiGatewayActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetPortal">actionGetPortal</a></code> | <code>string</code> | [Read] apigateway:GetPortal. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetPortalProduct">actionGetPortalProduct</a></code> | <code>string</code> | [Read] apigateway:GetPortalProduct. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetPortalProductSharingPolicy">actionGetPortalProductSharingPolicy</a></code> | <code>string</code> | [Read] apigateway:GetPortalProductSharingPolicy. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetProductPage">actionGetProductPage</a></code> | <code>string</code> | [Read] apigateway:GetProductPage. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetProductRestEndpointPage">actionGetProductRestEndpointPage</a></code> | <code>string</code> | [Read] apigateway:GetProductRestEndpointPage. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetRoutingRule">actionGetRoutingRule</a></code> | <code>string</code> | [Read] apigateway:GetRoutingRule. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionSetWebACL">actionSetWebACL</a></code> | <code>string</code> | [PermissionManagement] apigateway:SetWebACL. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.AddCertificateToDomain">AddCertificateToDomain</a></code> | <code>string</code> | [PermissionManagement] apigateway:AddCertificateToDomain. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreateAccessAssociation">CreateAccessAssociation</a></code> | <code>string</code> | [PermissionManagement] apigateway:CreateAccessAssociation. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreatePortal">CreatePortal</a></code> | <code>string</code> | [Write] apigateway:CreatePortal. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreatePortalProduct">CreatePortalProduct</a></code> | <code>string</code> | [Write] apigateway:CreatePortalProduct. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreateProductPage">CreateProductPage</a></code> | <code>string</code> | [Write] apigateway:CreateProductPage. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreateProductRestEndpointPage">CreateProductRestEndpointPage</a></code> | <code>string</code> | [Write] apigateway:CreateProductRestEndpointPage. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreateRoutingRule">CreateRoutingRule</a></code> | <code>string</code> | [Write] apigateway:CreateRoutingRule. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.DELETE">DELETE</a></code> | <code>string</code> | [Write] apigateway:DELETE. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeletePortal">DeletePortal</a></code> | <code>string</code> | [Write] apigateway:DeletePortal. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeletePortalProduct">DeletePortalProduct</a></code> | <code>string</code> | [Write] apigateway:DeletePortalProduct. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeletePortalProductSharingPolicy">DeletePortalProductSharingPolicy</a></code> | <code>string</code> | [PermissionManagement] apigateway:DeletePortalProductSharingPolicy. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeleteProductPage">DeleteProductPage</a></code> | <code>string</code> | [Write] apigateway:DeleteProductPage. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeleteProductRestEndpointPage">DeleteProductRestEndpointPage</a></code> | <code>string</code> | [Write] apigateway:DeleteProductRestEndpointPage. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeleteRoutingRule">DeleteRoutingRule</a></code> | <code>string</code> | [Write] apigateway:DeleteRoutingRule. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.DisablePortal">DisablePortal</a></code> | <code>string</code> | [Write] apigateway:DisablePortal. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.GET">GET</a></code> | <code>string</code> | [Read] apigateway:GET. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.ListPortalProducts">ListPortalProducts</a></code> | <code>string</code> | [List] apigateway:ListPortalProducts. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.ListPortals">ListPortals</a></code> | <code>string</code> | [List] apigateway:ListPortals. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.ListProductPages">ListProductPages</a></code> | <code>string</code> | [List] apigateway:ListProductPages. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.ListProductRestEndpointPages">ListProductRestEndpointPages</a></code> | <code>string</code> | [List] apigateway:ListProductRestEndpointPages. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.ListRoutingRules">ListRoutingRules</a></code> | <code>string</code> | [List] apigateway:ListRoutingRules. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.PATCH">PATCH</a></code> | <code>string</code> | [Write] apigateway:PATCH. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.POST">POST</a></code> | <code>string</code> | [Write] apigateway:POST. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.PreviewPortal">PreviewPortal</a></code> | <code>string</code> | [Write] apigateway:PreviewPortal. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.PublishPortal">PublishPortal</a></code> | <code>string</code> | [Write] apigateway:PublishPortal. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.PUT">PUT</a></code> | <code>string</code> | [Write] apigateway:PUT. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.PutPortalProductSharingPolicy">PutPortalProductSharingPolicy</a></code> | <code>string</code> | [PermissionManagement] apigateway:PutPortalProductSharingPolicy. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.RejectAccessAssociation">RejectAccessAssociation</a></code> | <code>string</code> | [PermissionManagement] apigateway:RejectAccessAssociation. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.RemoveCertificateFromDomain">RemoveCertificateFromDomain</a></code> | <code>string</code> | [PermissionManagement] apigateway:RemoveCertificateFromDomain. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateDomainNameManagementPolicy">UpdateDomainNameManagementPolicy</a></code> | <code>string</code> | [PermissionManagement] apigateway:UpdateDomainNameManagementPolicy. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateDomainNamePolicy">UpdateDomainNamePolicy</a></code> | <code>string</code> | [PermissionManagement] apigateway:UpdateDomainNamePolicy. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdatePortal">UpdatePortal</a></code> | <code>string</code> | [Write] apigateway:UpdatePortal. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdatePortalProduct">UpdatePortalProduct</a></code> | <code>string</code> | [Write] apigateway:UpdatePortalProduct. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateProductPage">UpdateProductPage</a></code> | <code>string</code> | [Write] apigateway:UpdateProductPage. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateProductRestEndpointPage">UpdateProductRestEndpointPage</a></code> | <code>string</code> | [Write] apigateway:UpdateProductRestEndpointPage. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateRestApiPolicy">UpdateRestApiPolicy</a></code> | <code>string</code> | [PermissionManagement] apigateway:UpdateRestApiPolicy. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateRoutingRule">UpdateRoutingRule</a></code> | <code>string</code> | [Write] apigateway:UpdateRoutingRule. |

---

##### `actionGetPortal`<sup>Required</sup> <a name="actionGetPortal" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetPortal"></a>

```typescript
public readonly actionGetPortal: string;
```

- *Type:* string

[Read] apigateway:GetPortal.

---

##### `actionGetPortalProduct`<sup>Required</sup> <a name="actionGetPortalProduct" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetPortalProduct"></a>

```typescript
public readonly actionGetPortalProduct: string;
```

- *Type:* string

[Read] apigateway:GetPortalProduct.

---

##### `actionGetPortalProductSharingPolicy`<sup>Required</sup> <a name="actionGetPortalProductSharingPolicy" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetPortalProductSharingPolicy"></a>

```typescript
public readonly actionGetPortalProductSharingPolicy: string;
```

- *Type:* string

[Read] apigateway:GetPortalProductSharingPolicy.

---

##### `actionGetProductPage`<sup>Required</sup> <a name="actionGetProductPage" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetProductPage"></a>

```typescript
public readonly actionGetProductPage: string;
```

- *Type:* string

[Read] apigateway:GetProductPage.

---

##### `actionGetProductRestEndpointPage`<sup>Required</sup> <a name="actionGetProductRestEndpointPage" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetProductRestEndpointPage"></a>

```typescript
public readonly actionGetProductRestEndpointPage: string;
```

- *Type:* string

[Read] apigateway:GetProductRestEndpointPage.

---

##### `actionGetRoutingRule`<sup>Required</sup> <a name="actionGetRoutingRule" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionGetRoutingRule"></a>

```typescript
public readonly actionGetRoutingRule: string;
```

- *Type:* string

[Read] apigateway:GetRoutingRule.

---

##### `actionSetWebACL`<sup>Required</sup> <a name="actionSetWebACL" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.actionSetWebACL"></a>

```typescript
public readonly actionSetWebACL: string;
```

- *Type:* string

[PermissionManagement] apigateway:SetWebACL.

---

##### `AddCertificateToDomain`<sup>Required</sup> <a name="AddCertificateToDomain" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.AddCertificateToDomain"></a>

```typescript
public readonly AddCertificateToDomain: string;
```

- *Type:* string

[PermissionManagement] apigateway:AddCertificateToDomain.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAccessAssociation`<sup>Required</sup> <a name="CreateAccessAssociation" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreateAccessAssociation"></a>

```typescript
public readonly CreateAccessAssociation: string;
```

- *Type:* string

[PermissionManagement] apigateway:CreateAccessAssociation.

---

##### `CreatePortal`<sup>Required</sup> <a name="CreatePortal" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreatePortal"></a>

```typescript
public readonly CreatePortal: string;
```

- *Type:* string

[Write] apigateway:CreatePortal.

---

##### `CreatePortalProduct`<sup>Required</sup> <a name="CreatePortalProduct" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreatePortalProduct"></a>

```typescript
public readonly CreatePortalProduct: string;
```

- *Type:* string

[Write] apigateway:CreatePortalProduct.

---

##### `CreateProductPage`<sup>Required</sup> <a name="CreateProductPage" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreateProductPage"></a>

```typescript
public readonly CreateProductPage: string;
```

- *Type:* string

[Write] apigateway:CreateProductPage.

---

##### `CreateProductRestEndpointPage`<sup>Required</sup> <a name="CreateProductRestEndpointPage" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreateProductRestEndpointPage"></a>

```typescript
public readonly CreateProductRestEndpointPage: string;
```

- *Type:* string

[Write] apigateway:CreateProductRestEndpointPage.

---

##### `CreateRoutingRule`<sup>Required</sup> <a name="CreateRoutingRule" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.CreateRoutingRule"></a>

```typescript
public readonly CreateRoutingRule: string;
```

- *Type:* string

[Write] apigateway:CreateRoutingRule.

---

##### `DELETE`<sup>Required</sup> <a name="DELETE" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.DELETE"></a>

```typescript
public readonly DELETE: string;
```

- *Type:* string

[Write] apigateway:DELETE.

---

##### `DeletePortal`<sup>Required</sup> <a name="DeletePortal" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeletePortal"></a>

```typescript
public readonly DeletePortal: string;
```

- *Type:* string

[Write] apigateway:DeletePortal.

---

##### `DeletePortalProduct`<sup>Required</sup> <a name="DeletePortalProduct" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeletePortalProduct"></a>

```typescript
public readonly DeletePortalProduct: string;
```

- *Type:* string

[Write] apigateway:DeletePortalProduct.

---

##### `DeletePortalProductSharingPolicy`<sup>Required</sup> <a name="DeletePortalProductSharingPolicy" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeletePortalProductSharingPolicy"></a>

```typescript
public readonly DeletePortalProductSharingPolicy: string;
```

- *Type:* string

[PermissionManagement] apigateway:DeletePortalProductSharingPolicy.

---

##### `DeleteProductPage`<sup>Required</sup> <a name="DeleteProductPage" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeleteProductPage"></a>

```typescript
public readonly DeleteProductPage: string;
```

- *Type:* string

[Write] apigateway:DeleteProductPage.

---

##### `DeleteProductRestEndpointPage`<sup>Required</sup> <a name="DeleteProductRestEndpointPage" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeleteProductRestEndpointPage"></a>

```typescript
public readonly DeleteProductRestEndpointPage: string;
```

- *Type:* string

[Write] apigateway:DeleteProductRestEndpointPage.

---

##### `DeleteRoutingRule`<sup>Required</sup> <a name="DeleteRoutingRule" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.DeleteRoutingRule"></a>

```typescript
public readonly DeleteRoutingRule: string;
```

- *Type:* string

[Write] apigateway:DeleteRoutingRule.

---

##### `DisablePortal`<sup>Required</sup> <a name="DisablePortal" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.DisablePortal"></a>

```typescript
public readonly DisablePortal: string;
```

- *Type:* string

[Write] apigateway:DisablePortal.

---

##### `GET`<sup>Required</sup> <a name="GET" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.GET"></a>

```typescript
public readonly GET: string;
```

- *Type:* string

[Read] apigateway:GET.

---

##### `ListPortalProducts`<sup>Required</sup> <a name="ListPortalProducts" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.ListPortalProducts"></a>

```typescript
public readonly ListPortalProducts: string;
```

- *Type:* string

[List] apigateway:ListPortalProducts.

---

##### `ListPortals`<sup>Required</sup> <a name="ListPortals" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.ListPortals"></a>

```typescript
public readonly ListPortals: string;
```

- *Type:* string

[List] apigateway:ListPortals.

---

##### `ListProductPages`<sup>Required</sup> <a name="ListProductPages" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.ListProductPages"></a>

```typescript
public readonly ListProductPages: string;
```

- *Type:* string

[List] apigateway:ListProductPages.

---

##### `ListProductRestEndpointPages`<sup>Required</sup> <a name="ListProductRestEndpointPages" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.ListProductRestEndpointPages"></a>

```typescript
public readonly ListProductRestEndpointPages: string;
```

- *Type:* string

[List] apigateway:ListProductRestEndpointPages.

---

##### `ListRoutingRules`<sup>Required</sup> <a name="ListRoutingRules" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.ListRoutingRules"></a>

```typescript
public readonly ListRoutingRules: string;
```

- *Type:* string

[List] apigateway:ListRoutingRules.

---

##### `PATCH`<sup>Required</sup> <a name="PATCH" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.PATCH"></a>

```typescript
public readonly PATCH: string;
```

- *Type:* string

[Write] apigateway:PATCH.

---

##### `POST`<sup>Required</sup> <a name="POST" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.POST"></a>

```typescript
public readonly POST: string;
```

- *Type:* string

[Write] apigateway:POST.

---

##### `PreviewPortal`<sup>Required</sup> <a name="PreviewPortal" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.PreviewPortal"></a>

```typescript
public readonly PreviewPortal: string;
```

- *Type:* string

[Write] apigateway:PreviewPortal.

---

##### `PublishPortal`<sup>Required</sup> <a name="PublishPortal" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.PublishPortal"></a>

```typescript
public readonly PublishPortal: string;
```

- *Type:* string

[Write] apigateway:PublishPortal.

---

##### `PUT`<sup>Required</sup> <a name="PUT" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.PUT"></a>

```typescript
public readonly PUT: string;
```

- *Type:* string

[Write] apigateway:PUT.

---

##### `PutPortalProductSharingPolicy`<sup>Required</sup> <a name="PutPortalProductSharingPolicy" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.PutPortalProductSharingPolicy"></a>

```typescript
public readonly PutPortalProductSharingPolicy: string;
```

- *Type:* string

[PermissionManagement] apigateway:PutPortalProductSharingPolicy.

---

##### `RejectAccessAssociation`<sup>Required</sup> <a name="RejectAccessAssociation" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.RejectAccessAssociation"></a>

```typescript
public readonly RejectAccessAssociation: string;
```

- *Type:* string

[PermissionManagement] apigateway:RejectAccessAssociation.

---

##### `RemoveCertificateFromDomain`<sup>Required</sup> <a name="RemoveCertificateFromDomain" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.RemoveCertificateFromDomain"></a>

```typescript
public readonly RemoveCertificateFromDomain: string;
```

- *Type:* string

[PermissionManagement] apigateway:RemoveCertificateFromDomain.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateDomainNameManagementPolicy`<sup>Required</sup> <a name="UpdateDomainNameManagementPolicy" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateDomainNameManagementPolicy"></a>

```typescript
public readonly UpdateDomainNameManagementPolicy: string;
```

- *Type:* string

[PermissionManagement] apigateway:UpdateDomainNameManagementPolicy.

---

##### `UpdateDomainNamePolicy`<sup>Required</sup> <a name="UpdateDomainNamePolicy" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateDomainNamePolicy"></a>

```typescript
public readonly UpdateDomainNamePolicy: string;
```

- *Type:* string

[PermissionManagement] apigateway:UpdateDomainNamePolicy.

---

##### `UpdatePortal`<sup>Required</sup> <a name="UpdatePortal" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdatePortal"></a>

```typescript
public readonly UpdatePortal: string;
```

- *Type:* string

[Write] apigateway:UpdatePortal.

---

##### `UpdatePortalProduct`<sup>Required</sup> <a name="UpdatePortalProduct" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdatePortalProduct"></a>

```typescript
public readonly UpdatePortalProduct: string;
```

- *Type:* string

[Write] apigateway:UpdatePortalProduct.

---

##### `UpdateProductPage`<sup>Required</sup> <a name="UpdateProductPage" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateProductPage"></a>

```typescript
public readonly UpdateProductPage: string;
```

- *Type:* string

[Write] apigateway:UpdateProductPage.

---

##### `UpdateProductRestEndpointPage`<sup>Required</sup> <a name="UpdateProductRestEndpointPage" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateProductRestEndpointPage"></a>

```typescript
public readonly UpdateProductRestEndpointPage: string;
```

- *Type:* string

[Write] apigateway:UpdateProductRestEndpointPage.

---

##### `UpdateRestApiPolicy`<sup>Required</sup> <a name="UpdateRestApiPolicy" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateRestApiPolicy"></a>

```typescript
public readonly UpdateRestApiPolicy: string;
```

- *Type:* string

[PermissionManagement] apigateway:UpdateRestApiPolicy.

---

##### `UpdateRoutingRule`<sup>Required</sup> <a name="UpdateRoutingRule" id="@cdk_utils/iam.apigateway.ApiGatewayActions.property.UpdateRoutingRule"></a>

```typescript
public readonly UpdateRoutingRule: string;
```

- *Type:* string

[Write] apigateway:UpdateRoutingRule.

---

### ApiGatewayConditions <a name="ApiGatewayConditions" id="@cdk_utils/iam.apigateway.ApiGatewayConditions"></a>

Condition key constants and builders for apigateway.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

new apigateway.ApiGatewayConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAccessAssociationSource">requestAccessAssociationSource</a></code> | Generates a condition block for `apigateway:Request/AccessAssociationSource`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAccessLoggingDestination">requestAccessLoggingDestination</a></code> | Generates a condition block for `apigateway:Request/AccessLoggingDestination`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAccessLoggingFormat">requestAccessLoggingFormat</a></code> | Generates a condition block for `apigateway:Request/AccessLoggingFormat`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAPIKeyRequired">requestAPIKeyRequired</a></code> | Generates a condition block for `apigateway:Request/ApiKeyRequired`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAPIName">requestAPIName</a></code> | Generates a condition block for `apigateway:Request/ApiName`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAuthorizerType">requestAuthorizerType</a></code> | Generates a condition block for `apigateway:Request/AuthorizerType`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAuthorizerURI">requestAuthorizerURI</a></code> | Generates a condition block for `apigateway:Request/AuthorizerUri`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestCognitoUserPoolARN">requestCognitoUserPoolARN</a></code> | Generates a condition block for `apigateway:Request/CognitoUserPoolArn`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestConditionBasePaths">requestConditionBasePaths</a></code> | Generates a condition block for `apigateway:Request/ConditionBasePaths`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestDisableExecuteAPIEndpoint">requestDisableExecuteAPIEndpoint</a></code> | Generates a condition block for `apigateway:Request/DisableExecuteApiEndpoint`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestDomainNameARN">requestDomainNameARN</a></code> | Generates a condition block for `apigateway:Request/DomainNameArn`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestEndpointType">requestEndpointType</a></code> | Generates a condition block for `apigateway:Request/EndpointType`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestMethod">requestMethod</a></code> | Generates a condition block for `apigateway:Request/Method`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestMtlsTrustStoreURI">requestMtlsTrustStoreURI</a></code> | Generates a condition block for `apigateway:Request/MtlsTrustStoreUri`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestMtlsTrustStoreVersion">requestMtlsTrustStoreVersion</a></code> | Generates a condition block for `apigateway:Request/MtlsTrustStoreVersion`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPortalDisplayName">requestPortalDisplayName</a></code> | Generates a condition block for `apigateway:Request/PortalDisplayName`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPortalDomainName">requestPortalDomainName</a></code> | Generates a condition block for `apigateway:Request/PortalDomainName`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPortalProductDisplayName">requestPortalProductDisplayName</a></code> | Generates a condition block for `apigateway:Request/PortalProductDisplayName`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPriority">requestPriority</a></code> | Generates a condition block for `apigateway:Request/Priority`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestProductPageTitle">requestProductPageTitle</a></code> | Generates a condition block for `apigateway:Request/ProductPageTitle`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestProductRestEndpointPageEndpointPrefix">requestProductRestEndpointPageEndpointPrefix</a></code> | Generates a condition block for `apigateway:Request/ProductRestEndpointPageEndpointPrefix`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestRestAPIId">requestRestAPIId</a></code> | Generates a condition block for `apigateway:Request/RestApiId`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestRouteAuthorizationType">requestRouteAuthorizationType</a></code> | Generates a condition block for `apigateway:Request/RouteAuthorizationType`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestRoutingMode">requestRoutingMode</a></code> | Generates a condition block for `apigateway:Request/RoutingMode`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestSecurityPolicy">requestSecurityPolicy</a></code> | Generates a condition block for `apigateway:Request/SecurityPolicy`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestStage">requestStage</a></code> | Generates a condition block for `apigateway:Request/Stage`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestStageName">requestStageName</a></code> | Generates a condition block for `apigateway:Request/StageName`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAccessLoggingDestination">resourceAccessLoggingDestination</a></code> | Generates a condition block for `apigateway:Resource/AccessLoggingDestination`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAccessLoggingFormat">resourceAccessLoggingFormat</a></code> | Generates a condition block for `apigateway:Resource/AccessLoggingFormat`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAPIKeyRequired">resourceAPIKeyRequired</a></code> | Generates a condition block for `apigateway:Resource/ApiKeyRequired`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAPIName">resourceAPIName</a></code> | Generates a condition block for `apigateway:Resource/ApiName`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAuthorizerType">resourceAuthorizerType</a></code> | Generates a condition block for `apigateway:Resource/AuthorizerType`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAuthorizerURI">resourceAuthorizerURI</a></code> | Generates a condition block for `apigateway:Resource/AuthorizerUri`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceCognitoUserPoolARN">resourceCognitoUserPoolARN</a></code> | Generates a condition block for `apigateway:Resource/CognitoUserPoolArn`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceConditionBasePaths">resourceConditionBasePaths</a></code> | Generates a condition block for `apigateway:Resource/ConditionBasePaths`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceDisableExecuteAPIEndpoint">resourceDisableExecuteAPIEndpoint</a></code> | Generates a condition block for `apigateway:Resource/DisableExecuteApiEndpoint`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceEndpointType">resourceEndpointType</a></code> | Generates a condition block for `apigateway:Resource/EndpointType`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceMethod">resourceMethod</a></code> | Generates a condition block for `apigateway:Resource/Method`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceMtlsTrustStoreURI">resourceMtlsTrustStoreURI</a></code> | Generates a condition block for `apigateway:Resource/MtlsTrustStoreUri`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceMtlsTrustStoreVersion">resourceMtlsTrustStoreVersion</a></code> | Generates a condition block for `apigateway:Resource/MtlsTrustStoreVersion`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalDisplayName">resourcePortalDisplayName</a></code> | Generates a condition block for `apigateway:Resource/PortalDisplayName`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalDomainName">resourcePortalDomainName</a></code> | Generates a condition block for `apigateway:Resource/PortalDomainName`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalProductDisplayName">resourcePortalProductDisplayName</a></code> | Generates a condition block for `apigateway:Resource/PortalProductDisplayName`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalPublishStatus">resourcePortalPublishStatus</a></code> | Generates a condition block for `apigateway:Resource/PortalPublishStatus`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePriority">resourcePriority</a></code> | Generates a condition block for `apigateway:Resource/Priority`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceProductPageTitle">resourceProductPageTitle</a></code> | Generates a condition block for `apigateway:Resource/ProductPageTitle`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceProductRestEndpointPageEndpointPrefix">resourceProductRestEndpointPageEndpointPrefix</a></code> | Generates a condition block for `apigateway:Resource/ProductRestEndpointPageEndpointPrefix`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceRestAPIId">resourceRestAPIId</a></code> | Generates a condition block for `apigateway:Resource/RestApiId`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceRouteAuthorizationType">resourceRouteAuthorizationType</a></code> | Generates a condition block for `apigateway:Resource/RouteAuthorizationType`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceRoutingMode">resourceRoutingMode</a></code> | Generates a condition block for `apigateway:Resource/RoutingMode`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceSecurityPolicy">resourceSecurityPolicy</a></code> | Generates a condition block for `apigateway:Resource/SecurityPolicy`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceStage">resourceStage</a></code> | Generates a condition block for `apigateway:Resource/Stage`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestAccessAssociationSource` <a name="requestAccessAssociationSource" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAccessAssociationSource"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestAccessAssociationSource(value: string)
```

Generates a condition block for `apigateway:Request/AccessAssociationSource`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAccessAssociationSource.parameter.value"></a>

- *Type:* string

---

##### `requestAccessLoggingDestination` <a name="requestAccessLoggingDestination" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAccessLoggingDestination"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestAccessLoggingDestination(value: string)
```

Generates a condition block for `apigateway:Request/AccessLoggingDestination`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAccessLoggingDestination.parameter.value"></a>

- *Type:* string

---

##### `requestAccessLoggingFormat` <a name="requestAccessLoggingFormat" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAccessLoggingFormat"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestAccessLoggingFormat(value: string)
```

Generates a condition block for `apigateway:Request/AccessLoggingFormat`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAccessLoggingFormat.parameter.value"></a>

- *Type:* string

---

##### `requestAPIKeyRequired` <a name="requestAPIKeyRequired" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAPIKeyRequired"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestAPIKeyRequired(values: boolean[])
```

Generates a condition block for `apigateway:Request/ApiKeyRequired`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAPIKeyRequired.parameter.values"></a>

- *Type:* boolean[]

---

##### `requestAPIName` <a name="requestAPIName" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAPIName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestAPIName(value: string)
```

Generates a condition block for `apigateway:Request/ApiName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAPIName.parameter.value"></a>

- *Type:* string

---

##### `requestAuthorizerType` <a name="requestAuthorizerType" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAuthorizerType"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestAuthorizerType(values: string[])
```

Generates a condition block for `apigateway:Request/AuthorizerType`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAuthorizerType.parameter.values"></a>

- *Type:* string[]

---

##### `requestAuthorizerURI` <a name="requestAuthorizerURI" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAuthorizerURI"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestAuthorizerURI(values: string[])
```

Generates a condition block for `apigateway:Request/AuthorizerUri`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestAuthorizerURI.parameter.values"></a>

- *Type:* string[]

---

##### `requestCognitoUserPoolARN` <a name="requestCognitoUserPoolARN" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestCognitoUserPoolARN"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestCognitoUserPoolARN(value: string)
```

Generates a condition block for `apigateway:Request/CognitoUserPoolArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestCognitoUserPoolARN.parameter.value"></a>

- *Type:* string

---

##### `requestConditionBasePaths` <a name="requestConditionBasePaths" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestConditionBasePaths"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestConditionBasePaths(values: string[])
```

Generates a condition block for `apigateway:Request/ConditionBasePaths`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestConditionBasePaths.parameter.values"></a>

- *Type:* string[]

---

##### `requestDisableExecuteAPIEndpoint` <a name="requestDisableExecuteAPIEndpoint" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestDisableExecuteAPIEndpoint"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestDisableExecuteAPIEndpoint(value: boolean)
```

Generates a condition block for `apigateway:Request/DisableExecuteApiEndpoint`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestDisableExecuteAPIEndpoint.parameter.value"></a>

- *Type:* boolean

---

##### `requestDomainNameARN` <a name="requestDomainNameARN" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestDomainNameARN"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestDomainNameARN(value: string)
```

Generates a condition block for `apigateway:Request/DomainNameArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestDomainNameARN.parameter.value"></a>

- *Type:* string

---

##### `requestEndpointType` <a name="requestEndpointType" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestEndpointType"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestEndpointType(values: string[])
```

Generates a condition block for `apigateway:Request/EndpointType`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestEndpointType.parameter.values"></a>

- *Type:* string[]

---

##### `requestMethod` <a name="requestMethod" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestMethod"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestMethod(value: string)
```

Generates a condition block for `apigateway:Request/Method`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestMethod.parameter.value"></a>

- *Type:* string

---

##### `requestMtlsTrustStoreURI` <a name="requestMtlsTrustStoreURI" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestMtlsTrustStoreURI"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestMtlsTrustStoreURI(value: string)
```

Generates a condition block for `apigateway:Request/MtlsTrustStoreUri`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestMtlsTrustStoreURI.parameter.value"></a>

- *Type:* string

---

##### `requestMtlsTrustStoreVersion` <a name="requestMtlsTrustStoreVersion" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestMtlsTrustStoreVersion"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestMtlsTrustStoreVersion(value: string)
```

Generates a condition block for `apigateway:Request/MtlsTrustStoreVersion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestMtlsTrustStoreVersion.parameter.value"></a>

- *Type:* string

---

##### `requestPortalDisplayName` <a name="requestPortalDisplayName" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPortalDisplayName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestPortalDisplayName(value: string)
```

Generates a condition block for `apigateway:Request/PortalDisplayName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPortalDisplayName.parameter.value"></a>

- *Type:* string

---

##### `requestPortalDomainName` <a name="requestPortalDomainName" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPortalDomainName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestPortalDomainName(value: string)
```

Generates a condition block for `apigateway:Request/PortalDomainName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPortalDomainName.parameter.value"></a>

- *Type:* string

---

##### `requestPortalProductDisplayName` <a name="requestPortalProductDisplayName" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPortalProductDisplayName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestPortalProductDisplayName(value: string)
```

Generates a condition block for `apigateway:Request/PortalProductDisplayName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPortalProductDisplayName.parameter.value"></a>

- *Type:* string

---

##### `requestPriority` <a name="requestPriority" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPriority"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestPriority(value: number)
```

Generates a condition block for `apigateway:Request/Priority`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestPriority.parameter.value"></a>

- *Type:* number

---

##### `requestProductPageTitle` <a name="requestProductPageTitle" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestProductPageTitle"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestProductPageTitle(value: string)
```

Generates a condition block for `apigateway:Request/ProductPageTitle`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestProductPageTitle.parameter.value"></a>

- *Type:* string

---

##### `requestProductRestEndpointPageEndpointPrefix` <a name="requestProductRestEndpointPageEndpointPrefix" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestProductRestEndpointPageEndpointPrefix"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestProductRestEndpointPageEndpointPrefix(value: string)
```

Generates a condition block for `apigateway:Request/ProductRestEndpointPageEndpointPrefix`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestProductRestEndpointPageEndpointPrefix.parameter.value"></a>

- *Type:* string

---

##### `requestRestAPIId` <a name="requestRestAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestRestAPIId"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestRestAPIId(value: string)
```

Generates a condition block for `apigateway:Request/RestApiId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestRestAPIId.parameter.value"></a>

- *Type:* string

---

##### `requestRouteAuthorizationType` <a name="requestRouteAuthorizationType" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestRouteAuthorizationType"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestRouteAuthorizationType(values: string[])
```

Generates a condition block for `apigateway:Request/RouteAuthorizationType`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestRouteAuthorizationType.parameter.values"></a>

- *Type:* string[]

---

##### `requestRoutingMode` <a name="requestRoutingMode" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestRoutingMode"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestRoutingMode(value: string)
```

Generates a condition block for `apigateway:Request/RoutingMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestRoutingMode.parameter.value"></a>

- *Type:* string

---

##### `requestSecurityPolicy` <a name="requestSecurityPolicy" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestSecurityPolicy"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestSecurityPolicy(values: string[])
```

Generates a condition block for `apigateway:Request/SecurityPolicy`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestSecurityPolicy.parameter.values"></a>

- *Type:* string[]

---

##### `requestStage` <a name="requestStage" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestStage"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestStage(value: string)
```

Generates a condition block for `apigateway:Request/Stage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestStage.parameter.value"></a>

- *Type:* string

---

##### `requestStageName` <a name="requestStageName" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestStageName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestStageName(value: string)
```

Generates a condition block for `apigateway:Request/StageName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestStageName.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestTag"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceAccessLoggingDestination` <a name="resourceAccessLoggingDestination" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAccessLoggingDestination"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceAccessLoggingDestination(value: string)
```

Generates a condition block for `apigateway:Resource/AccessLoggingDestination`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAccessLoggingDestination.parameter.value"></a>

- *Type:* string

---

##### `resourceAccessLoggingFormat` <a name="resourceAccessLoggingFormat" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAccessLoggingFormat"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceAccessLoggingFormat(value: string)
```

Generates a condition block for `apigateway:Resource/AccessLoggingFormat`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAccessLoggingFormat.parameter.value"></a>

- *Type:* string

---

##### `resourceAPIKeyRequired` <a name="resourceAPIKeyRequired" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAPIKeyRequired"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceAPIKeyRequired(values: boolean[])
```

Generates a condition block for `apigateway:Resource/ApiKeyRequired`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAPIKeyRequired.parameter.values"></a>

- *Type:* boolean[]

---

##### `resourceAPIName` <a name="resourceAPIName" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAPIName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceAPIName(value: string)
```

Generates a condition block for `apigateway:Resource/ApiName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAPIName.parameter.value"></a>

- *Type:* string

---

##### `resourceAuthorizerType` <a name="resourceAuthorizerType" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAuthorizerType"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceAuthorizerType(values: string[])
```

Generates a condition block for `apigateway:Resource/AuthorizerType`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAuthorizerType.parameter.values"></a>

- *Type:* string[]

---

##### `resourceAuthorizerURI` <a name="resourceAuthorizerURI" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAuthorizerURI"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceAuthorizerURI(values: string[])
```

Generates a condition block for `apigateway:Resource/AuthorizerUri`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceAuthorizerURI.parameter.values"></a>

- *Type:* string[]

---

##### `resourceCognitoUserPoolARN` <a name="resourceCognitoUserPoolARN" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceCognitoUserPoolARN"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceCognitoUserPoolARN(value: string)
```

Generates a condition block for `apigateway:Resource/CognitoUserPoolArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceCognitoUserPoolARN.parameter.value"></a>

- *Type:* string

---

##### `resourceConditionBasePaths` <a name="resourceConditionBasePaths" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceConditionBasePaths"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceConditionBasePaths(values: string[])
```

Generates a condition block for `apigateway:Resource/ConditionBasePaths`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceConditionBasePaths.parameter.values"></a>

- *Type:* string[]

---

##### `resourceDisableExecuteAPIEndpoint` <a name="resourceDisableExecuteAPIEndpoint" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceDisableExecuteAPIEndpoint"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceDisableExecuteAPIEndpoint(value: boolean)
```

Generates a condition block for `apigateway:Resource/DisableExecuteApiEndpoint`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceDisableExecuteAPIEndpoint.parameter.value"></a>

- *Type:* boolean

---

##### `resourceEndpointType` <a name="resourceEndpointType" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceEndpointType"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceEndpointType(values: string[])
```

Generates a condition block for `apigateway:Resource/EndpointType`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceEndpointType.parameter.values"></a>

- *Type:* string[]

---

##### `resourceMethod` <a name="resourceMethod" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceMethod"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceMethod(value: string)
```

Generates a condition block for `apigateway:Resource/Method`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceMethod.parameter.value"></a>

- *Type:* string

---

##### `resourceMtlsTrustStoreURI` <a name="resourceMtlsTrustStoreURI" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceMtlsTrustStoreURI"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceMtlsTrustStoreURI(value: string)
```

Generates a condition block for `apigateway:Resource/MtlsTrustStoreUri`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceMtlsTrustStoreURI.parameter.value"></a>

- *Type:* string

---

##### `resourceMtlsTrustStoreVersion` <a name="resourceMtlsTrustStoreVersion" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceMtlsTrustStoreVersion"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceMtlsTrustStoreVersion(value: string)
```

Generates a condition block for `apigateway:Resource/MtlsTrustStoreVersion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceMtlsTrustStoreVersion.parameter.value"></a>

- *Type:* string

---

##### `resourcePortalDisplayName` <a name="resourcePortalDisplayName" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalDisplayName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourcePortalDisplayName(value: string)
```

Generates a condition block for `apigateway:Resource/PortalDisplayName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalDisplayName.parameter.value"></a>

- *Type:* string

---

##### `resourcePortalDomainName` <a name="resourcePortalDomainName" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalDomainName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourcePortalDomainName(value: string)
```

Generates a condition block for `apigateway:Resource/PortalDomainName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalDomainName.parameter.value"></a>

- *Type:* string

---

##### `resourcePortalProductDisplayName` <a name="resourcePortalProductDisplayName" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalProductDisplayName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourcePortalProductDisplayName(value: string)
```

Generates a condition block for `apigateway:Resource/PortalProductDisplayName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalProductDisplayName.parameter.value"></a>

- *Type:* string

---

##### `resourcePortalPublishStatus` <a name="resourcePortalPublishStatus" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalPublishStatus"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourcePortalPublishStatus(value: string)
```

Generates a condition block for `apigateway:Resource/PortalPublishStatus`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePortalPublishStatus.parameter.value"></a>

- *Type:* string

---

##### `resourcePriority` <a name="resourcePriority" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePriority"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourcePriority(value: number)
```

Generates a condition block for `apigateway:Resource/Priority`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourcePriority.parameter.value"></a>

- *Type:* number

---

##### `resourceProductPageTitle` <a name="resourceProductPageTitle" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceProductPageTitle"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceProductPageTitle(value: string)
```

Generates a condition block for `apigateway:Resource/ProductPageTitle`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceProductPageTitle.parameter.value"></a>

- *Type:* string

---

##### `resourceProductRestEndpointPageEndpointPrefix` <a name="resourceProductRestEndpointPageEndpointPrefix" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceProductRestEndpointPageEndpointPrefix"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceProductRestEndpointPageEndpointPrefix(value: string)
```

Generates a condition block for `apigateway:Resource/ProductRestEndpointPageEndpointPrefix`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceProductRestEndpointPageEndpointPrefix.parameter.value"></a>

- *Type:* string

---

##### `resourceRestAPIId` <a name="resourceRestAPIId" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceRestAPIId"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceRestAPIId(value: string)
```

Generates a condition block for `apigateway:Resource/RestApiId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceRestAPIId.parameter.value"></a>

- *Type:* string

---

##### `resourceRouteAuthorizationType` <a name="resourceRouteAuthorizationType" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceRouteAuthorizationType"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceRouteAuthorizationType(values: string[])
```

Generates a condition block for `apigateway:Resource/RouteAuthorizationType`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceRouteAuthorizationType.parameter.values"></a>

- *Type:* string[]

---

##### `resourceRoutingMode` <a name="resourceRoutingMode" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceRoutingMode"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceRoutingMode(value: string)
```

Generates a condition block for `apigateway:Resource/RoutingMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceRoutingMode.parameter.value"></a>

- *Type:* string

---

##### `resourceSecurityPolicy` <a name="resourceSecurityPolicy" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceSecurityPolicy"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceSecurityPolicy(values: string[])
```

Generates a condition block for `apigateway:Resource/SecurityPolicy`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceSecurityPolicy.parameter.values"></a>

- *Type:* string[]

---

##### `resourceStage` <a name="resourceStage" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceStage"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceStage(value: string)
```

Generates a condition block for `apigateway:Resource/Stage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceStage.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceTag"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.tagKeys"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.actionGetRoutingRuleConditionKeys">actionGetRoutingRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRoutingRule action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.CreatePortalConditionKeys">CreatePortalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePortal action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.CreatePortalProductConditionKeys">CreatePortalProductConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePortalProduct action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.CreateProductPageConditionKeys">CreateProductPageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProductPage action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.CreateProductRestEndpointPageConditionKeys">CreateProductRestEndpointPageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProductRestEndpointPage action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.CreateRoutingRuleConditionKeys">CreateRoutingRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRoutingRule action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.DELETEConditionKeys">DELETEConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DELETE action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.DeleteRoutingRuleConditionKeys">DeleteRoutingRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRoutingRule action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.ListRoutingRulesConditionKeys">ListRoutingRulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRoutingRules action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.PATCHConditionKeys">PATCHConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PATCH action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.POSTConditionKeys">POSTConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the POST action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.PUTConditionKeys">PUTConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PUT action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ACCESS_ASSOCIATION_SOURCE">REQUEST_ACCESS_ASSOCIATION_SOURCE</a></code> | <code>string</code> | Condition key: apigateway:Request/AccessAssociationSource (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ACCESS_LOGGING_DESTINATION">REQUEST_ACCESS_LOGGING_DESTINATION</a></code> | <code>string</code> | Condition key: apigateway:Request/AccessLoggingDestination (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ACCESS_LOGGING_FORMAT">REQUEST_ACCESS_LOGGING_FORMAT</a></code> | <code>string</code> | Condition key: apigateway:Request/AccessLoggingFormat (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_API_KEY_REQUIRED">REQUEST_API_KEY_REQUIRED</a></code> | <code>string</code> | Condition key: apigateway:Request/ApiKeyRequired (ArrayOfBool). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_API_NAME">REQUEST_API_NAME</a></code> | <code>string</code> | Condition key: apigateway:Request/ApiName (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_AUTHORIZER_TYPE">REQUEST_AUTHORIZER_TYPE</a></code> | <code>string</code> | Condition key: apigateway:Request/AuthorizerType (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_AUTHORIZER_URI">REQUEST_AUTHORIZER_URI</a></code> | <code>string</code> | Condition key: apigateway:Request/AuthorizerUri (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_COGNITO_USER_POOL_ARN">REQUEST_COGNITO_USER_POOL_ARN</a></code> | <code>string</code> | Condition key: apigateway:Request/CognitoUserPoolArn (ARN). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_CONDITION_BASE_PATHS">REQUEST_CONDITION_BASE_PATHS</a></code> | <code>string</code> | Condition key: apigateway:Request/ConditionBasePaths (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_DISABLE_EXECUTE_API_ENDPOINT">REQUEST_DISABLE_EXECUTE_API_ENDPOINT</a></code> | <code>string</code> | Condition key: apigateway:Request/DisableExecuteApiEndpoint (Bool). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_DOMAIN_NAME_ARN">REQUEST_DOMAIN_NAME_ARN</a></code> | <code>string</code> | Condition key: apigateway:Request/DomainNameArn (ARN). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ENDPOINT_TYPE">REQUEST_ENDPOINT_TYPE</a></code> | <code>string</code> | Condition key: apigateway:Request/EndpointType (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_METHOD">REQUEST_METHOD</a></code> | <code>string</code> | Condition key: apigateway:Request/Method (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_MTLS_TRUST_STORE_URI">REQUEST_MTLS_TRUST_STORE_URI</a></code> | <code>string</code> | Condition key: apigateway:Request/MtlsTrustStoreUri (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_MTLS_TRUST_STORE_VERSION">REQUEST_MTLS_TRUST_STORE_VERSION</a></code> | <code>string</code> | Condition key: apigateway:Request/MtlsTrustStoreVersion (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PORTAL_DISPLAY_NAME">REQUEST_PORTAL_DISPLAY_NAME</a></code> | <code>string</code> | Condition key: apigateway:Request/PortalDisplayName (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PORTAL_DOMAIN_NAME">REQUEST_PORTAL_DOMAIN_NAME</a></code> | <code>string</code> | Condition key: apigateway:Request/PortalDomainName (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PORTAL_PRODUCT_DISPLAY_NAME">REQUEST_PORTAL_PRODUCT_DISPLAY_NAME</a></code> | <code>string</code> | Condition key: apigateway:Request/PortalProductDisplayName (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PRIORITY">REQUEST_PRIORITY</a></code> | <code>string</code> | Condition key: apigateway:Request/Priority (Numeric). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PRODUCT_PAGE_TITLE">REQUEST_PRODUCT_PAGE_TITLE</a></code> | <code>string</code> | Condition key: apigateway:Request/ProductPageTitle (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX">REQUEST_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX</a></code> | <code>string</code> | Condition key: apigateway:Request/ProductRestEndpointPageEndpointPrefix (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_REST_API_ID">REQUEST_REST_API_ID</a></code> | <code>string</code> | Condition key: apigateway:Request/RestApiId (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ROUTE_AUTHORIZATION_TYPE">REQUEST_ROUTE_AUTHORIZATION_TYPE</a></code> | <code>string</code> | Condition key: apigateway:Request/RouteAuthorizationType (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ROUTING_MODE">REQUEST_ROUTING_MODE</a></code> | <code>string</code> | Condition key: apigateway:Request/RoutingMode (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_SECURITY_POLICY">REQUEST_SECURITY_POLICY</a></code> | <code>string</code> | Condition key: apigateway:Request/SecurityPolicy (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_STAGE">REQUEST_STAGE</a></code> | <code>string</code> | Condition key: apigateway:Request/Stage (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_STAGE_NAME">REQUEST_STAGE_NAME</a></code> | <code>string</code> | Condition key: apigateway:Request/StageName (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_ACCESS_LOGGING_DESTINATION">RESOURCE_ACCESS_LOGGING_DESTINATION</a></code> | <code>string</code> | Condition key: apigateway:Resource/AccessLoggingDestination (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_ACCESS_LOGGING_FORMAT">RESOURCE_ACCESS_LOGGING_FORMAT</a></code> | <code>string</code> | Condition key: apigateway:Resource/AccessLoggingFormat (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_API_KEY_REQUIRED">RESOURCE_API_KEY_REQUIRED</a></code> | <code>string</code> | Condition key: apigateway:Resource/ApiKeyRequired (ArrayOfBool). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_API_NAME">RESOURCE_API_NAME</a></code> | <code>string</code> | Condition key: apigateway:Resource/ApiName (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_AUTHORIZER_TYPE">RESOURCE_AUTHORIZER_TYPE</a></code> | <code>string</code> | Condition key: apigateway:Resource/AuthorizerType (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_AUTHORIZER_URI">RESOURCE_AUTHORIZER_URI</a></code> | <code>string</code> | Condition key: apigateway:Resource/AuthorizerUri (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_COGNITO_USER_POOL_ARN">RESOURCE_COGNITO_USER_POOL_ARN</a></code> | <code>string</code> | Condition key: apigateway:Resource/CognitoUserPoolArn (ARN). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_CONDITION_BASE_PATHS">RESOURCE_CONDITION_BASE_PATHS</a></code> | <code>string</code> | Condition key: apigateway:Resource/ConditionBasePaths (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_DISABLE_EXECUTE_API_ENDPOINT">RESOURCE_DISABLE_EXECUTE_API_ENDPOINT</a></code> | <code>string</code> | Condition key: apigateway:Resource/DisableExecuteApiEndpoint (Bool). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_ENDPOINT_TYPE">RESOURCE_ENDPOINT_TYPE</a></code> | <code>string</code> | Condition key: apigateway:Resource/EndpointType (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_METHOD">RESOURCE_METHOD</a></code> | <code>string</code> | Condition key: apigateway:Resource/Method (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_MTLS_TRUST_STORE_URI">RESOURCE_MTLS_TRUST_STORE_URI</a></code> | <code>string</code> | Condition key: apigateway:Resource/MtlsTrustStoreUri (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_MTLS_TRUST_STORE_VERSION">RESOURCE_MTLS_TRUST_STORE_VERSION</a></code> | <code>string</code> | Condition key: apigateway:Resource/MtlsTrustStoreVersion (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PORTAL_DISPLAY_NAME">RESOURCE_PORTAL_DISPLAY_NAME</a></code> | <code>string</code> | Condition key: apigateway:Resource/PortalDisplayName (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PORTAL_DOMAIN_NAME">RESOURCE_PORTAL_DOMAIN_NAME</a></code> | <code>string</code> | Condition key: apigateway:Resource/PortalDomainName (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PORTAL_PRODUCT_DISPLAY_NAME">RESOURCE_PORTAL_PRODUCT_DISPLAY_NAME</a></code> | <code>string</code> | Condition key: apigateway:Resource/PortalProductDisplayName (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PORTAL_PUBLISH_STATUS">RESOURCE_PORTAL_PUBLISH_STATUS</a></code> | <code>string</code> | Condition key: apigateway:Resource/PortalPublishStatus (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PRIORITY">RESOURCE_PRIORITY</a></code> | <code>string</code> | Condition key: apigateway:Resource/Priority (Numeric). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PRODUCT_PAGE_TITLE">RESOURCE_PRODUCT_PAGE_TITLE</a></code> | <code>string</code> | Condition key: apigateway:Resource/ProductPageTitle (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX">RESOURCE_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX</a></code> | <code>string</code> | Condition key: apigateway:Resource/ProductRestEndpointPageEndpointPrefix (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_REST_API_ID">RESOURCE_REST_API_ID</a></code> | <code>string</code> | Condition key: apigateway:Resource/RestApiId (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_ROUTE_AUTHORIZATION_TYPE">RESOURCE_ROUTE_AUTHORIZATION_TYPE</a></code> | <code>string</code> | Condition key: apigateway:Resource/RouteAuthorizationType (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_ROUTING_MODE">RESOURCE_ROUTING_MODE</a></code> | <code>string</code> | Condition key: apigateway:Resource/RoutingMode (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_SECURITY_POLICY">RESOURCE_SECURITY_POLICY</a></code> | <code>string</code> | Condition key: apigateway:Resource/SecurityPolicy (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_STAGE">RESOURCE_STAGE</a></code> | <code>string</code> | Condition key: apigateway:Resource/Stage (String). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.UpdatePortalConditionKeys">UpdatePortalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePortal action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.UpdatePortalProductConditionKeys">UpdatePortalProductConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePortalProduct action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.UpdateProductPageConditionKeys">UpdateProductPageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProductPage action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.UpdateProductRestEndpointPageConditionKeys">UpdateProductRestEndpointPageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProductRestEndpointPage action. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayConditions.property.UpdateRoutingRuleConditionKeys">UpdateRoutingRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRoutingRule action. |

---

##### `actionGetRoutingRuleConditionKeys`<sup>Required</sup> <a name="actionGetRoutingRuleConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.actionGetRoutingRuleConditionKeys"></a>

```typescript
public readonly actionGetRoutingRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRoutingRule action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreatePortalConditionKeys`<sup>Required</sup> <a name="CreatePortalConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.CreatePortalConditionKeys"></a>

```typescript
public readonly CreatePortalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePortal action.

---

##### `CreatePortalProductConditionKeys`<sup>Required</sup> <a name="CreatePortalProductConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.CreatePortalProductConditionKeys"></a>

```typescript
public readonly CreatePortalProductConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePortalProduct action.

---

##### `CreateProductPageConditionKeys`<sup>Required</sup> <a name="CreateProductPageConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.CreateProductPageConditionKeys"></a>

```typescript
public readonly CreateProductPageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProductPage action.

---

##### `CreateProductRestEndpointPageConditionKeys`<sup>Required</sup> <a name="CreateProductRestEndpointPageConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.CreateProductRestEndpointPageConditionKeys"></a>

```typescript
public readonly CreateProductRestEndpointPageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProductRestEndpointPage action.

---

##### `CreateRoutingRuleConditionKeys`<sup>Required</sup> <a name="CreateRoutingRuleConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.CreateRoutingRuleConditionKeys"></a>

```typescript
public readonly CreateRoutingRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRoutingRule action.

---

##### `DELETEConditionKeys`<sup>Required</sup> <a name="DELETEConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.DELETEConditionKeys"></a>

```typescript
public readonly DELETEConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DELETE action.

---

##### `DeleteRoutingRuleConditionKeys`<sup>Required</sup> <a name="DeleteRoutingRuleConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.DeleteRoutingRuleConditionKeys"></a>

```typescript
public readonly DeleteRoutingRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRoutingRule action.

---

##### `ListRoutingRulesConditionKeys`<sup>Required</sup> <a name="ListRoutingRulesConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.ListRoutingRulesConditionKeys"></a>

```typescript
public readonly ListRoutingRulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRoutingRules action.

---

##### `PATCHConditionKeys`<sup>Required</sup> <a name="PATCHConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.PATCHConditionKeys"></a>

```typescript
public readonly PATCHConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PATCH action.

---

##### `POSTConditionKeys`<sup>Required</sup> <a name="POSTConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.POSTConditionKeys"></a>

```typescript
public readonly POSTConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the POST action.

---

##### `PUTConditionKeys`<sup>Required</sup> <a name="PUTConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.PUTConditionKeys"></a>

```typescript
public readonly PUTConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PUT action.

---

##### `REQUEST_ACCESS_ASSOCIATION_SOURCE`<sup>Required</sup> <a name="REQUEST_ACCESS_ASSOCIATION_SOURCE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ACCESS_ASSOCIATION_SOURCE"></a>

```typescript
public readonly REQUEST_ACCESS_ASSOCIATION_SOURCE: string;
```

- *Type:* string

Condition key: apigateway:Request/AccessAssociationSource (String).

---

##### `REQUEST_ACCESS_LOGGING_DESTINATION`<sup>Required</sup> <a name="REQUEST_ACCESS_LOGGING_DESTINATION" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ACCESS_LOGGING_DESTINATION"></a>

```typescript
public readonly REQUEST_ACCESS_LOGGING_DESTINATION: string;
```

- *Type:* string

Condition key: apigateway:Request/AccessLoggingDestination (String).

---

##### `REQUEST_ACCESS_LOGGING_FORMAT`<sup>Required</sup> <a name="REQUEST_ACCESS_LOGGING_FORMAT" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ACCESS_LOGGING_FORMAT"></a>

```typescript
public readonly REQUEST_ACCESS_LOGGING_FORMAT: string;
```

- *Type:* string

Condition key: apigateway:Request/AccessLoggingFormat (String).

---

##### `REQUEST_API_KEY_REQUIRED`<sup>Required</sup> <a name="REQUEST_API_KEY_REQUIRED" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_API_KEY_REQUIRED"></a>

```typescript
public readonly REQUEST_API_KEY_REQUIRED: string;
```

- *Type:* string

Condition key: apigateway:Request/ApiKeyRequired (ArrayOfBool).

---

##### `REQUEST_API_NAME`<sup>Required</sup> <a name="REQUEST_API_NAME" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_API_NAME"></a>

```typescript
public readonly REQUEST_API_NAME: string;
```

- *Type:* string

Condition key: apigateway:Request/ApiName (String).

---

##### `REQUEST_AUTHORIZER_TYPE`<sup>Required</sup> <a name="REQUEST_AUTHORIZER_TYPE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_AUTHORIZER_TYPE"></a>

```typescript
public readonly REQUEST_AUTHORIZER_TYPE: string;
```

- *Type:* string

Condition key: apigateway:Request/AuthorizerType (ArrayOfString).

---

##### `REQUEST_AUTHORIZER_URI`<sup>Required</sup> <a name="REQUEST_AUTHORIZER_URI" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_AUTHORIZER_URI"></a>

```typescript
public readonly REQUEST_AUTHORIZER_URI: string;
```

- *Type:* string

Condition key: apigateway:Request/AuthorizerUri (ArrayOfString).

---

##### `REQUEST_COGNITO_USER_POOL_ARN`<sup>Required</sup> <a name="REQUEST_COGNITO_USER_POOL_ARN" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_COGNITO_USER_POOL_ARN"></a>

```typescript
public readonly REQUEST_COGNITO_USER_POOL_ARN: string;
```

- *Type:* string

Condition key: apigateway:Request/CognitoUserPoolArn (ARN).

---

##### `REQUEST_CONDITION_BASE_PATHS`<sup>Required</sup> <a name="REQUEST_CONDITION_BASE_PATHS" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_CONDITION_BASE_PATHS"></a>

```typescript
public readonly REQUEST_CONDITION_BASE_PATHS: string;
```

- *Type:* string

Condition key: apigateway:Request/ConditionBasePaths (ArrayOfString).

---

##### `REQUEST_DISABLE_EXECUTE_API_ENDPOINT`<sup>Required</sup> <a name="REQUEST_DISABLE_EXECUTE_API_ENDPOINT" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_DISABLE_EXECUTE_API_ENDPOINT"></a>

```typescript
public readonly REQUEST_DISABLE_EXECUTE_API_ENDPOINT: string;
```

- *Type:* string

Condition key: apigateway:Request/DisableExecuteApiEndpoint (Bool).

---

##### `REQUEST_DOMAIN_NAME_ARN`<sup>Required</sup> <a name="REQUEST_DOMAIN_NAME_ARN" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_DOMAIN_NAME_ARN"></a>

```typescript
public readonly REQUEST_DOMAIN_NAME_ARN: string;
```

- *Type:* string

Condition key: apigateway:Request/DomainNameArn (ARN).

---

##### `REQUEST_ENDPOINT_TYPE`<sup>Required</sup> <a name="REQUEST_ENDPOINT_TYPE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ENDPOINT_TYPE"></a>

```typescript
public readonly REQUEST_ENDPOINT_TYPE: string;
```

- *Type:* string

Condition key: apigateway:Request/EndpointType (ArrayOfString).

---

##### `REQUEST_METHOD`<sup>Required</sup> <a name="REQUEST_METHOD" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_METHOD"></a>

```typescript
public readonly REQUEST_METHOD: string;
```

- *Type:* string

Condition key: apigateway:Request/Method (String).

---

##### `REQUEST_MTLS_TRUST_STORE_URI`<sup>Required</sup> <a name="REQUEST_MTLS_TRUST_STORE_URI" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_MTLS_TRUST_STORE_URI"></a>

```typescript
public readonly REQUEST_MTLS_TRUST_STORE_URI: string;
```

- *Type:* string

Condition key: apigateway:Request/MtlsTrustStoreUri (String).

---

##### `REQUEST_MTLS_TRUST_STORE_VERSION`<sup>Required</sup> <a name="REQUEST_MTLS_TRUST_STORE_VERSION" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_MTLS_TRUST_STORE_VERSION"></a>

```typescript
public readonly REQUEST_MTLS_TRUST_STORE_VERSION: string;
```

- *Type:* string

Condition key: apigateway:Request/MtlsTrustStoreVersion (String).

---

##### `REQUEST_PORTAL_DISPLAY_NAME`<sup>Required</sup> <a name="REQUEST_PORTAL_DISPLAY_NAME" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PORTAL_DISPLAY_NAME"></a>

```typescript
public readonly REQUEST_PORTAL_DISPLAY_NAME: string;
```

- *Type:* string

Condition key: apigateway:Request/PortalDisplayName (String).

---

##### `REQUEST_PORTAL_DOMAIN_NAME`<sup>Required</sup> <a name="REQUEST_PORTAL_DOMAIN_NAME" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PORTAL_DOMAIN_NAME"></a>

```typescript
public readonly REQUEST_PORTAL_DOMAIN_NAME: string;
```

- *Type:* string

Condition key: apigateway:Request/PortalDomainName (String).

---

##### `REQUEST_PORTAL_PRODUCT_DISPLAY_NAME`<sup>Required</sup> <a name="REQUEST_PORTAL_PRODUCT_DISPLAY_NAME" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PORTAL_PRODUCT_DISPLAY_NAME"></a>

```typescript
public readonly REQUEST_PORTAL_PRODUCT_DISPLAY_NAME: string;
```

- *Type:* string

Condition key: apigateway:Request/PortalProductDisplayName (String).

---

##### `REQUEST_PRIORITY`<sup>Required</sup> <a name="REQUEST_PRIORITY" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PRIORITY"></a>

```typescript
public readonly REQUEST_PRIORITY: string;
```

- *Type:* string

Condition key: apigateway:Request/Priority (Numeric).

---

##### `REQUEST_PRODUCT_PAGE_TITLE`<sup>Required</sup> <a name="REQUEST_PRODUCT_PAGE_TITLE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PRODUCT_PAGE_TITLE"></a>

```typescript
public readonly REQUEST_PRODUCT_PAGE_TITLE: string;
```

- *Type:* string

Condition key: apigateway:Request/ProductPageTitle (String).

---

##### `REQUEST_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX`<sup>Required</sup> <a name="REQUEST_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX"></a>

```typescript
public readonly REQUEST_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX: string;
```

- *Type:* string

Condition key: apigateway:Request/ProductRestEndpointPageEndpointPrefix (String).

---

##### `REQUEST_REST_API_ID`<sup>Required</sup> <a name="REQUEST_REST_API_ID" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_REST_API_ID"></a>

```typescript
public readonly REQUEST_REST_API_ID: string;
```

- *Type:* string

Condition key: apigateway:Request/RestApiId (String).

---

##### `REQUEST_ROUTE_AUTHORIZATION_TYPE`<sup>Required</sup> <a name="REQUEST_ROUTE_AUTHORIZATION_TYPE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ROUTE_AUTHORIZATION_TYPE"></a>

```typescript
public readonly REQUEST_ROUTE_AUTHORIZATION_TYPE: string;
```

- *Type:* string

Condition key: apigateway:Request/RouteAuthorizationType (ArrayOfString).

---

##### `REQUEST_ROUTING_MODE`<sup>Required</sup> <a name="REQUEST_ROUTING_MODE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_ROUTING_MODE"></a>

```typescript
public readonly REQUEST_ROUTING_MODE: string;
```

- *Type:* string

Condition key: apigateway:Request/RoutingMode (String).

---

##### `REQUEST_SECURITY_POLICY`<sup>Required</sup> <a name="REQUEST_SECURITY_POLICY" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_SECURITY_POLICY"></a>

```typescript
public readonly REQUEST_SECURITY_POLICY: string;
```

- *Type:* string

Condition key: apigateway:Request/SecurityPolicy (ArrayOfString).

---

##### `REQUEST_STAGE`<sup>Required</sup> <a name="REQUEST_STAGE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_STAGE"></a>

```typescript
public readonly REQUEST_STAGE: string;
```

- *Type:* string

Condition key: apigateway:Request/Stage (String).

---

##### `REQUEST_STAGE_NAME`<sup>Required</sup> <a name="REQUEST_STAGE_NAME" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.REQUEST_STAGE_NAME"></a>

```typescript
public readonly REQUEST_STAGE_NAME: string;
```

- *Type:* string

Condition key: apigateway:Request/StageName (String).

---

##### `RESOURCE_ACCESS_LOGGING_DESTINATION`<sup>Required</sup> <a name="RESOURCE_ACCESS_LOGGING_DESTINATION" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_ACCESS_LOGGING_DESTINATION"></a>

```typescript
public readonly RESOURCE_ACCESS_LOGGING_DESTINATION: string;
```

- *Type:* string

Condition key: apigateway:Resource/AccessLoggingDestination (String).

---

##### `RESOURCE_ACCESS_LOGGING_FORMAT`<sup>Required</sup> <a name="RESOURCE_ACCESS_LOGGING_FORMAT" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_ACCESS_LOGGING_FORMAT"></a>

```typescript
public readonly RESOURCE_ACCESS_LOGGING_FORMAT: string;
```

- *Type:* string

Condition key: apigateway:Resource/AccessLoggingFormat (String).

---

##### `RESOURCE_API_KEY_REQUIRED`<sup>Required</sup> <a name="RESOURCE_API_KEY_REQUIRED" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_API_KEY_REQUIRED"></a>

```typescript
public readonly RESOURCE_API_KEY_REQUIRED: string;
```

- *Type:* string

Condition key: apigateway:Resource/ApiKeyRequired (ArrayOfBool).

---

##### `RESOURCE_API_NAME`<sup>Required</sup> <a name="RESOURCE_API_NAME" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_API_NAME"></a>

```typescript
public readonly RESOURCE_API_NAME: string;
```

- *Type:* string

Condition key: apigateway:Resource/ApiName (String).

---

##### `RESOURCE_AUTHORIZER_TYPE`<sup>Required</sup> <a name="RESOURCE_AUTHORIZER_TYPE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_AUTHORIZER_TYPE"></a>

```typescript
public readonly RESOURCE_AUTHORIZER_TYPE: string;
```

- *Type:* string

Condition key: apigateway:Resource/AuthorizerType (ArrayOfString).

---

##### `RESOURCE_AUTHORIZER_URI`<sup>Required</sup> <a name="RESOURCE_AUTHORIZER_URI" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_AUTHORIZER_URI"></a>

```typescript
public readonly RESOURCE_AUTHORIZER_URI: string;
```

- *Type:* string

Condition key: apigateway:Resource/AuthorizerUri (ArrayOfString).

---

##### `RESOURCE_COGNITO_USER_POOL_ARN`<sup>Required</sup> <a name="RESOURCE_COGNITO_USER_POOL_ARN" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_COGNITO_USER_POOL_ARN"></a>

```typescript
public readonly RESOURCE_COGNITO_USER_POOL_ARN: string;
```

- *Type:* string

Condition key: apigateway:Resource/CognitoUserPoolArn (ARN).

---

##### `RESOURCE_CONDITION_BASE_PATHS`<sup>Required</sup> <a name="RESOURCE_CONDITION_BASE_PATHS" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_CONDITION_BASE_PATHS"></a>

```typescript
public readonly RESOURCE_CONDITION_BASE_PATHS: string;
```

- *Type:* string

Condition key: apigateway:Resource/ConditionBasePaths (ArrayOfString).

---

##### `RESOURCE_DISABLE_EXECUTE_API_ENDPOINT`<sup>Required</sup> <a name="RESOURCE_DISABLE_EXECUTE_API_ENDPOINT" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_DISABLE_EXECUTE_API_ENDPOINT"></a>

```typescript
public readonly RESOURCE_DISABLE_EXECUTE_API_ENDPOINT: string;
```

- *Type:* string

Condition key: apigateway:Resource/DisableExecuteApiEndpoint (Bool).

---

##### `RESOURCE_ENDPOINT_TYPE`<sup>Required</sup> <a name="RESOURCE_ENDPOINT_TYPE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_ENDPOINT_TYPE"></a>

```typescript
public readonly RESOURCE_ENDPOINT_TYPE: string;
```

- *Type:* string

Condition key: apigateway:Resource/EndpointType (ArrayOfString).

---

##### `RESOURCE_METHOD`<sup>Required</sup> <a name="RESOURCE_METHOD" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_METHOD"></a>

```typescript
public readonly RESOURCE_METHOD: string;
```

- *Type:* string

Condition key: apigateway:Resource/Method (String).

---

##### `RESOURCE_MTLS_TRUST_STORE_URI`<sup>Required</sup> <a name="RESOURCE_MTLS_TRUST_STORE_URI" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_MTLS_TRUST_STORE_URI"></a>

```typescript
public readonly RESOURCE_MTLS_TRUST_STORE_URI: string;
```

- *Type:* string

Condition key: apigateway:Resource/MtlsTrustStoreUri (String).

---

##### `RESOURCE_MTLS_TRUST_STORE_VERSION`<sup>Required</sup> <a name="RESOURCE_MTLS_TRUST_STORE_VERSION" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_MTLS_TRUST_STORE_VERSION"></a>

```typescript
public readonly RESOURCE_MTLS_TRUST_STORE_VERSION: string;
```

- *Type:* string

Condition key: apigateway:Resource/MtlsTrustStoreVersion (String).

---

##### `RESOURCE_PORTAL_DISPLAY_NAME`<sup>Required</sup> <a name="RESOURCE_PORTAL_DISPLAY_NAME" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PORTAL_DISPLAY_NAME"></a>

```typescript
public readonly RESOURCE_PORTAL_DISPLAY_NAME: string;
```

- *Type:* string

Condition key: apigateway:Resource/PortalDisplayName (String).

---

##### `RESOURCE_PORTAL_DOMAIN_NAME`<sup>Required</sup> <a name="RESOURCE_PORTAL_DOMAIN_NAME" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PORTAL_DOMAIN_NAME"></a>

```typescript
public readonly RESOURCE_PORTAL_DOMAIN_NAME: string;
```

- *Type:* string

Condition key: apigateway:Resource/PortalDomainName (String).

---

##### `RESOURCE_PORTAL_PRODUCT_DISPLAY_NAME`<sup>Required</sup> <a name="RESOURCE_PORTAL_PRODUCT_DISPLAY_NAME" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PORTAL_PRODUCT_DISPLAY_NAME"></a>

```typescript
public readonly RESOURCE_PORTAL_PRODUCT_DISPLAY_NAME: string;
```

- *Type:* string

Condition key: apigateway:Resource/PortalProductDisplayName (String).

---

##### `RESOURCE_PORTAL_PUBLISH_STATUS`<sup>Required</sup> <a name="RESOURCE_PORTAL_PUBLISH_STATUS" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PORTAL_PUBLISH_STATUS"></a>

```typescript
public readonly RESOURCE_PORTAL_PUBLISH_STATUS: string;
```

- *Type:* string

Condition key: apigateway:Resource/PortalPublishStatus (String).

---

##### `RESOURCE_PRIORITY`<sup>Required</sup> <a name="RESOURCE_PRIORITY" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PRIORITY"></a>

```typescript
public readonly RESOURCE_PRIORITY: string;
```

- *Type:* string

Condition key: apigateway:Resource/Priority (Numeric).

---

##### `RESOURCE_PRODUCT_PAGE_TITLE`<sup>Required</sup> <a name="RESOURCE_PRODUCT_PAGE_TITLE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PRODUCT_PAGE_TITLE"></a>

```typescript
public readonly RESOURCE_PRODUCT_PAGE_TITLE: string;
```

- *Type:* string

Condition key: apigateway:Resource/ProductPageTitle (String).

---

##### `RESOURCE_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX`<sup>Required</sup> <a name="RESOURCE_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX"></a>

```typescript
public readonly RESOURCE_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX: string;
```

- *Type:* string

Condition key: apigateway:Resource/ProductRestEndpointPageEndpointPrefix (String).

---

##### `RESOURCE_REST_API_ID`<sup>Required</sup> <a name="RESOURCE_REST_API_ID" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_REST_API_ID"></a>

```typescript
public readonly RESOURCE_REST_API_ID: string;
```

- *Type:* string

Condition key: apigateway:Resource/RestApiId (String).

---

##### `RESOURCE_ROUTE_AUTHORIZATION_TYPE`<sup>Required</sup> <a name="RESOURCE_ROUTE_AUTHORIZATION_TYPE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_ROUTE_AUTHORIZATION_TYPE"></a>

```typescript
public readonly RESOURCE_ROUTE_AUTHORIZATION_TYPE: string;
```

- *Type:* string

Condition key: apigateway:Resource/RouteAuthorizationType (ArrayOfString).

---

##### `RESOURCE_ROUTING_MODE`<sup>Required</sup> <a name="RESOURCE_ROUTING_MODE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_ROUTING_MODE"></a>

```typescript
public readonly RESOURCE_ROUTING_MODE: string;
```

- *Type:* string

Condition key: apigateway:Resource/RoutingMode (String).

---

##### `RESOURCE_SECURITY_POLICY`<sup>Required</sup> <a name="RESOURCE_SECURITY_POLICY" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_SECURITY_POLICY"></a>

```typescript
public readonly RESOURCE_SECURITY_POLICY: string;
```

- *Type:* string

Condition key: apigateway:Resource/SecurityPolicy (ArrayOfString).

---

##### `RESOURCE_STAGE`<sup>Required</sup> <a name="RESOURCE_STAGE" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.RESOURCE_STAGE"></a>

```typescript
public readonly RESOURCE_STAGE: string;
```

- *Type:* string

Condition key: apigateway:Resource/Stage (String).

---

##### `UpdatePortalConditionKeys`<sup>Required</sup> <a name="UpdatePortalConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.UpdatePortalConditionKeys"></a>

```typescript
public readonly UpdatePortalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePortal action.

---

##### `UpdatePortalProductConditionKeys`<sup>Required</sup> <a name="UpdatePortalProductConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.UpdatePortalProductConditionKeys"></a>

```typescript
public readonly UpdatePortalProductConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePortalProduct action.

---

##### `UpdateProductPageConditionKeys`<sup>Required</sup> <a name="UpdateProductPageConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.UpdateProductPageConditionKeys"></a>

```typescript
public readonly UpdateProductPageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProductPage action.

---

##### `UpdateProductRestEndpointPageConditionKeys`<sup>Required</sup> <a name="UpdateProductRestEndpointPageConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.UpdateProductRestEndpointPageConditionKeys"></a>

```typescript
public readonly UpdateProductRestEndpointPageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProductRestEndpointPage action.

---

##### `UpdateRoutingRuleConditionKeys`<sup>Required</sup> <a name="UpdateRoutingRuleConditionKeys" id="@cdk_utils/iam.apigateway.ApiGatewayConditions.property.UpdateRoutingRuleConditionKeys"></a>

```typescript
public readonly UpdateRoutingRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRoutingRule action.

---

### ApiGatewayOperations <a name="ApiGatewayOperations" id="@cdk_utils/iam.apigateway.ApiGatewayOperations"></a>

API operation to required IAM actions mapping for apigateway.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

new apigateway.ApiGatewayOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateApi">CreateApi</a></code> | <code>string[]</code> | IAM actions required for the CreateApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateApiKey">CreateApiKey</a></code> | <code>string[]</code> | IAM actions required for the CreateApiKey API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateApiMapping">CreateApiMapping</a></code> | <code>string[]</code> | IAM actions required for the CreateApiMapping API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateAuthorizer">CreateAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the CreateAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateBasePathMapping">CreateBasePathMapping</a></code> | <code>string[]</code> | IAM actions required for the CreateBasePathMapping API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateDeployment">CreateDeployment</a></code> | <code>string[]</code> | IAM actions required for the CreateDeployment API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateDocumentationPart">CreateDocumentationPart</a></code> | <code>string[]</code> | IAM actions required for the CreateDocumentationPart API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateDocumentationVersion">CreateDocumentationVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateDocumentationVersion API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateDomainName">CreateDomainName</a></code> | <code>string[]</code> | IAM actions required for the CreateDomainName API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateDomainNameAccessAssociation">CreateDomainNameAccessAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateDomainNameAccessAssociation API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateIntegration">CreateIntegration</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegration API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateIntegrationResponse">CreateIntegrationResponse</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegrationResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateModel">CreateModel</a></code> | <code>string[]</code> | IAM actions required for the CreateModel API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreatePortal">CreatePortal</a></code> | <code>string[]</code> | IAM actions required for the CreatePortal API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreatePortalProduct">CreatePortalProduct</a></code> | <code>string[]</code> | IAM actions required for the CreatePortalProduct API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateProductPage">CreateProductPage</a></code> | <code>string[]</code> | IAM actions required for the CreateProductPage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateProductRestEndpointPage">CreateProductRestEndpointPage</a></code> | <code>string[]</code> | IAM actions required for the CreateProductRestEndpointPage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateRequestValidator">CreateRequestValidator</a></code> | <code>string[]</code> | IAM actions required for the CreateRequestValidator API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateResource">CreateResource</a></code> | <code>string[]</code> | IAM actions required for the CreateResource API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateRestApi">CreateRestApi</a></code> | <code>string[]</code> | IAM actions required for the CreateRestApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateRoute">CreateRoute</a></code> | <code>string[]</code> | IAM actions required for the CreateRoute API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateRouteResponse">CreateRouteResponse</a></code> | <code>string[]</code> | IAM actions required for the CreateRouteResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateRoutingRule">CreateRoutingRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRoutingRule API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateStage">CreateStage</a></code> | <code>string[]</code> | IAM actions required for the CreateStage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateUsagePlan">CreateUsagePlan</a></code> | <code>string[]</code> | IAM actions required for the CreateUsagePlan API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateUsagePlanKey">CreateUsagePlanKey</a></code> | <code>string[]</code> | IAM actions required for the CreateUsagePlanKey API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateVpcLink">CreateVpcLink</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcLink API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteAccessLogSettings">DeleteAccessLogSettings</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessLogSettings API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteApi">DeleteApi</a></code> | <code>string[]</code> | IAM actions required for the DeleteApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteApiKey">DeleteApiKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteApiKey API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteApiMapping">DeleteApiMapping</a></code> | <code>string[]</code> | IAM actions required for the DeleteApiMapping API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteAuthorizer">DeleteAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the DeleteAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteBasePathMapping">DeleteBasePathMapping</a></code> | <code>string[]</code> | IAM actions required for the DeleteBasePathMapping API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteClientCertificate">DeleteClientCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteClientCertificate API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteCorsConfiguration">DeleteCorsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteCorsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteDeployment">DeleteDeployment</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeployment API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteDocumentationPart">DeleteDocumentationPart</a></code> | <code>string[]</code> | IAM actions required for the DeleteDocumentationPart API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteDocumentationVersion">DeleteDocumentationVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteDocumentationVersion API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteDomainName">DeleteDomainName</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainName API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteDomainNameAccessAssociation">DeleteDomainNameAccessAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainNameAccessAssociation API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteGatewayResponse">DeleteGatewayResponse</a></code> | <code>string[]</code> | IAM actions required for the DeleteGatewayResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegration API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteIntegrationResponse">DeleteIntegrationResponse</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegrationResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteMethod">DeleteMethod</a></code> | <code>string[]</code> | IAM actions required for the DeleteMethod API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteMethodResponse">DeleteMethodResponse</a></code> | <code>string[]</code> | IAM actions required for the DeleteMethodResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteModel">DeleteModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteModel API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeletePortal">DeletePortal</a></code> | <code>string[]</code> | IAM actions required for the DeletePortal API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeletePortalProduct">DeletePortalProduct</a></code> | <code>string[]</code> | IAM actions required for the DeletePortalProduct API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeletePortalProductSharingPolicy">DeletePortalProductSharingPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePortalProductSharingPolicy API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteProductPage">DeleteProductPage</a></code> | <code>string[]</code> | IAM actions required for the DeleteProductPage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteProductRestEndpointPage">DeleteProductRestEndpointPage</a></code> | <code>string[]</code> | IAM actions required for the DeleteProductRestEndpointPage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRequestValidator">DeleteRequestValidator</a></code> | <code>string[]</code> | IAM actions required for the DeleteRequestValidator API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteResource">DeleteResource</a></code> | <code>string[]</code> | IAM actions required for the DeleteResource API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRestApi">DeleteRestApi</a></code> | <code>string[]</code> | IAM actions required for the DeleteRestApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRoute">DeleteRoute</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoute API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRouteRequestParameter">DeleteRouteRequestParameter</a></code> | <code>string[]</code> | IAM actions required for the DeleteRouteRequestParameter API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRouteResponse">DeleteRouteResponse</a></code> | <code>string[]</code> | IAM actions required for the DeleteRouteResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRouteSettings">DeleteRouteSettings</a></code> | <code>string[]</code> | IAM actions required for the DeleteRouteSettings API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRoutingRule">DeleteRoutingRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoutingRule API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteStage">DeleteStage</a></code> | <code>string[]</code> | IAM actions required for the DeleteStage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteUsagePlan">DeleteUsagePlan</a></code> | <code>string[]</code> | IAM actions required for the DeleteUsagePlan API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteUsagePlanKey">DeleteUsagePlanKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteUsagePlanKey API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteVpcLink">DeleteVpcLink</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcLink API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DisablePortal">DisablePortal</a></code> | <code>string[]</code> | IAM actions required for the DisablePortal API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ExportApi">ExportApi</a></code> | <code>string[]</code> | IAM actions required for the ExportApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.FlushStageAuthorizersCache">FlushStageAuthorizersCache</a></code> | <code>string[]</code> | IAM actions required for the FlushStageAuthorizersCache API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.FlushStageCache">FlushStageCache</a></code> | <code>string[]</code> | IAM actions required for the FlushStageCache API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.GenerateClientCertificate">GenerateClientCertificate</a></code> | <code>string[]</code> | IAM actions required for the GenerateClientCertificate API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ImportApi">ImportApi</a></code> | <code>string[]</code> | IAM actions required for the ImportApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ImportApiKeys">ImportApiKeys</a></code> | <code>string[]</code> | IAM actions required for the ImportApiKeys API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ImportDocumentationParts">ImportDocumentationParts</a></code> | <code>string[]</code> | IAM actions required for the ImportDocumentationParts API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ImportRestApi">ImportRestApi</a></code> | <code>string[]</code> | IAM actions required for the ImportRestApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ListPortalProducts">ListPortalProducts</a></code> | <code>string[]</code> | IAM actions required for the ListPortalProducts API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ListPortals">ListPortals</a></code> | <code>string[]</code> | IAM actions required for the ListPortals API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ListProductPages">ListProductPages</a></code> | <code>string[]</code> | IAM actions required for the ListProductPages API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ListProductRestEndpointPages">ListProductRestEndpointPages</a></code> | <code>string[]</code> | IAM actions required for the ListProductRestEndpointPages API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ListRoutingRules">ListRoutingRules</a></code> | <code>string[]</code> | IAM actions required for the ListRoutingRules API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetAccount">opGetAccount</a></code> | <code>string[]</code> | IAM actions required for the GetAccount API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApi">opGetApi</a></code> | <code>string[]</code> | IAM actions required for the GetApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApiKey">opGetApiKey</a></code> | <code>string[]</code> | IAM actions required for the GetApiKey API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApiKeys">opGetApiKeys</a></code> | <code>string[]</code> | IAM actions required for the GetApiKeys API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApiMapping">opGetApiMapping</a></code> | <code>string[]</code> | IAM actions required for the GetApiMapping API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApiMappings">opGetApiMappings</a></code> | <code>string[]</code> | IAM actions required for the GetApiMappings API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApis">opGetApis</a></code> | <code>string[]</code> | IAM actions required for the GetApis API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetAuthorizer">opGetAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the GetAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetAuthorizers">opGetAuthorizers</a></code> | <code>string[]</code> | IAM actions required for the GetAuthorizers API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetBasePathMapping">opGetBasePathMapping</a></code> | <code>string[]</code> | IAM actions required for the GetBasePathMapping API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetBasePathMappings">opGetBasePathMappings</a></code> | <code>string[]</code> | IAM actions required for the GetBasePathMappings API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetClientCertificate">opGetClientCertificate</a></code> | <code>string[]</code> | IAM actions required for the GetClientCertificate API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetClientCertificates">opGetClientCertificates</a></code> | <code>string[]</code> | IAM actions required for the GetClientCertificates API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDeployment">opGetDeployment</a></code> | <code>string[]</code> | IAM actions required for the GetDeployment API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDeployments">opGetDeployments</a></code> | <code>string[]</code> | IAM actions required for the GetDeployments API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDocumentationPart">opGetDocumentationPart</a></code> | <code>string[]</code> | IAM actions required for the GetDocumentationPart API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDocumentationParts">opGetDocumentationParts</a></code> | <code>string[]</code> | IAM actions required for the GetDocumentationParts API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDocumentationVersion">opGetDocumentationVersion</a></code> | <code>string[]</code> | IAM actions required for the GetDocumentationVersion API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDocumentationVersions">opGetDocumentationVersions</a></code> | <code>string[]</code> | IAM actions required for the GetDocumentationVersions API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDomainName">opGetDomainName</a></code> | <code>string[]</code> | IAM actions required for the GetDomainName API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDomainNameAccessAssociations">opGetDomainNameAccessAssociations</a></code> | <code>string[]</code> | IAM actions required for the GetDomainNameAccessAssociations API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDomainNames">opGetDomainNames</a></code> | <code>string[]</code> | IAM actions required for the GetDomainNames API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetExport">opGetExport</a></code> | <code>string[]</code> | IAM actions required for the GetExport API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetGatewayResponse">opGetGatewayResponse</a></code> | <code>string[]</code> | IAM actions required for the GetGatewayResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetGatewayResponses">opGetGatewayResponses</a></code> | <code>string[]</code> | IAM actions required for the GetGatewayResponses API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetIntegration">opGetIntegration</a></code> | <code>string[]</code> | IAM actions required for the GetIntegration API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetIntegrationResponse">opGetIntegrationResponse</a></code> | <code>string[]</code> | IAM actions required for the GetIntegrationResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetIntegrationResponses">opGetIntegrationResponses</a></code> | <code>string[]</code> | IAM actions required for the GetIntegrationResponses API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetIntegrations">opGetIntegrations</a></code> | <code>string[]</code> | IAM actions required for the GetIntegrations API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetMethod">opGetMethod</a></code> | <code>string[]</code> | IAM actions required for the GetMethod API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetMethodResponse">opGetMethodResponse</a></code> | <code>string[]</code> | IAM actions required for the GetMethodResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetModel">opGetModel</a></code> | <code>string[]</code> | IAM actions required for the GetModel API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetModels">opGetModels</a></code> | <code>string[]</code> | IAM actions required for the GetModels API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetModelTemplate">opGetModelTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetModelTemplate API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetPortal">opGetPortal</a></code> | <code>string[]</code> | IAM actions required for the GetPortal API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetPortalProduct">opGetPortalProduct</a></code> | <code>string[]</code> | IAM actions required for the GetPortalProduct API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetPortalProductSharingPolicy">opGetPortalProductSharingPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPortalProductSharingPolicy API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetProductPage">opGetProductPage</a></code> | <code>string[]</code> | IAM actions required for the GetProductPage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetProductRestEndpointPage">opGetProductRestEndpointPage</a></code> | <code>string[]</code> | IAM actions required for the GetProductRestEndpointPage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRequestValidator">opGetRequestValidator</a></code> | <code>string[]</code> | IAM actions required for the GetRequestValidator API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRequestValidators">opGetRequestValidators</a></code> | <code>string[]</code> | IAM actions required for the GetRequestValidators API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetResource">opGetResource</a></code> | <code>string[]</code> | IAM actions required for the GetResource API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetResources">opGetResources</a></code> | <code>string[]</code> | IAM actions required for the GetResources API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRestApi">opGetRestApi</a></code> | <code>string[]</code> | IAM actions required for the GetRestApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRestApis">opGetRestApis</a></code> | <code>string[]</code> | IAM actions required for the GetRestApis API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRoute">opGetRoute</a></code> | <code>string[]</code> | IAM actions required for the GetRoute API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRouteResponse">opGetRouteResponse</a></code> | <code>string[]</code> | IAM actions required for the GetRouteResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRouteResponses">opGetRouteResponses</a></code> | <code>string[]</code> | IAM actions required for the GetRouteResponses API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRoutes">opGetRoutes</a></code> | <code>string[]</code> | IAM actions required for the GetRoutes API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRoutingRule">opGetRoutingRule</a></code> | <code>string[]</code> | IAM actions required for the GetRoutingRule API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetSdk">opGetSdk</a></code> | <code>string[]</code> | IAM actions required for the GetSdk API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetSdkType">opGetSdkType</a></code> | <code>string[]</code> | IAM actions required for the GetSdkType API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetSdkTypes">opGetSdkTypes</a></code> | <code>string[]</code> | IAM actions required for the GetSdkTypes API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetStage">opGetStage</a></code> | <code>string[]</code> | IAM actions required for the GetStage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetStages">opGetStages</a></code> | <code>string[]</code> | IAM actions required for the GetStages API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetTags">opGetTags</a></code> | <code>string[]</code> | IAM actions required for the GetTags API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetUsage">opGetUsage</a></code> | <code>string[]</code> | IAM actions required for the GetUsage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetUsagePlan">opGetUsagePlan</a></code> | <code>string[]</code> | IAM actions required for the GetUsagePlan API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetUsagePlanKey">opGetUsagePlanKey</a></code> | <code>string[]</code> | IAM actions required for the GetUsagePlanKey API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetUsagePlanKeys">opGetUsagePlanKeys</a></code> | <code>string[]</code> | IAM actions required for the GetUsagePlanKeys API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetUsagePlans">opGetUsagePlans</a></code> | <code>string[]</code> | IAM actions required for the GetUsagePlans API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetVpcLink">opGetVpcLink</a></code> | <code>string[]</code> | IAM actions required for the GetVpcLink API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetVpcLinks">opGetVpcLinks</a></code> | <code>string[]</code> | IAM actions required for the GetVpcLinks API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PreviewPortal">PreviewPortal</a></code> | <code>string[]</code> | IAM actions required for the PreviewPortal API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PublishPortal">PublishPortal</a></code> | <code>string[]</code> | IAM actions required for the PublishPortal API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutGatewayResponse">PutGatewayResponse</a></code> | <code>string[]</code> | IAM actions required for the PutGatewayResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutIntegration">PutIntegration</a></code> | <code>string[]</code> | IAM actions required for the PutIntegration API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutIntegrationResponse">PutIntegrationResponse</a></code> | <code>string[]</code> | IAM actions required for the PutIntegrationResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutMethod">PutMethod</a></code> | <code>string[]</code> | IAM actions required for the PutMethod API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutMethodResponse">PutMethodResponse</a></code> | <code>string[]</code> | IAM actions required for the PutMethodResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutPortalProductSharingPolicy">PutPortalProductSharingPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutPortalProductSharingPolicy API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutRestApi">PutRestApi</a></code> | <code>string[]</code> | IAM actions required for the PutRestApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutRoutingRule">PutRoutingRule</a></code> | <code>string[]</code> | IAM actions required for the PutRoutingRule API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ReimportApi">ReimportApi</a></code> | <code>string[]</code> | IAM actions required for the ReimportApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.RejectDomainNameAccessAssociation">RejectDomainNameAccessAssociation</a></code> | <code>string[]</code> | IAM actions required for the RejectDomainNameAccessAssociation API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ResetAuthorizersCache">ResetAuthorizersCache</a></code> | <code>string[]</code> | IAM actions required for the ResetAuthorizersCache API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.TestInvokeAuthorizer">TestInvokeAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the TestInvokeAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.TestInvokeMethod">TestInvokeMethod</a></code> | <code>string[]</code> | IAM actions required for the TestInvokeMethod API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateAccount">UpdateAccount</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccount API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateApi">UpdateApi</a></code> | <code>string[]</code> | IAM actions required for the UpdateApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateApiKey">UpdateApiKey</a></code> | <code>string[]</code> | IAM actions required for the UpdateApiKey API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateApiMapping">UpdateApiMapping</a></code> | <code>string[]</code> | IAM actions required for the UpdateApiMapping API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateAuthorizer">UpdateAuthorizer</a></code> | <code>string[]</code> | IAM actions required for the UpdateAuthorizer API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateBasePathMapping">UpdateBasePathMapping</a></code> | <code>string[]</code> | IAM actions required for the UpdateBasePathMapping API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateClientCertificate">UpdateClientCertificate</a></code> | <code>string[]</code> | IAM actions required for the UpdateClientCertificate API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateDeployment">UpdateDeployment</a></code> | <code>string[]</code> | IAM actions required for the UpdateDeployment API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateDocumentationPart">UpdateDocumentationPart</a></code> | <code>string[]</code> | IAM actions required for the UpdateDocumentationPart API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateDocumentationVersion">UpdateDocumentationVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateDocumentationVersion API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateDomainName">UpdateDomainName</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainName API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateGatewayResponse">UpdateGatewayResponse</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewayResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateIntegration">UpdateIntegration</a></code> | <code>string[]</code> | IAM actions required for the UpdateIntegration API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateIntegrationResponse">UpdateIntegrationResponse</a></code> | <code>string[]</code> | IAM actions required for the UpdateIntegrationResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateMethod">UpdateMethod</a></code> | <code>string[]</code> | IAM actions required for the UpdateMethod API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateMethodResponse">UpdateMethodResponse</a></code> | <code>string[]</code> | IAM actions required for the UpdateMethodResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateModel">UpdateModel</a></code> | <code>string[]</code> | IAM actions required for the UpdateModel API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdatePortal">UpdatePortal</a></code> | <code>string[]</code> | IAM actions required for the UpdatePortal API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdatePortalProduct">UpdatePortalProduct</a></code> | <code>string[]</code> | IAM actions required for the UpdatePortalProduct API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateProductPage">UpdateProductPage</a></code> | <code>string[]</code> | IAM actions required for the UpdateProductPage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateProductRestEndpointPage">UpdateProductRestEndpointPage</a></code> | <code>string[]</code> | IAM actions required for the UpdateProductRestEndpointPage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateRequestValidator">UpdateRequestValidator</a></code> | <code>string[]</code> | IAM actions required for the UpdateRequestValidator API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateResource">UpdateResource</a></code> | <code>string[]</code> | IAM actions required for the UpdateResource API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateRestApi">UpdateRestApi</a></code> | <code>string[]</code> | IAM actions required for the UpdateRestApi API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateRoute">UpdateRoute</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoute API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateRouteResponse">UpdateRouteResponse</a></code> | <code>string[]</code> | IAM actions required for the UpdateRouteResponse API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateStage">UpdateStage</a></code> | <code>string[]</code> | IAM actions required for the UpdateStage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateUsage">UpdateUsage</a></code> | <code>string[]</code> | IAM actions required for the UpdateUsage API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateUsagePlan">UpdateUsagePlan</a></code> | <code>string[]</code> | IAM actions required for the UpdateUsagePlan API call. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateVpcLink">UpdateVpcLink</a></code> | <code>string[]</code> | IAM actions required for the UpdateVpcLink API call. |

---

##### `CreateApi`<sup>Required</sup> <a name="CreateApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateApi"></a>

```typescript
public readonly CreateApi: string[];
```

- *Type:* string[]

IAM actions required for the CreateApi API call.

---

##### `CreateApiKey`<sup>Required</sup> <a name="CreateApiKey" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateApiKey"></a>

```typescript
public readonly CreateApiKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateApiKey API call.

---

##### `CreateApiMapping`<sup>Required</sup> <a name="CreateApiMapping" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateApiMapping"></a>

```typescript
public readonly CreateApiMapping: string[];
```

- *Type:* string[]

IAM actions required for the CreateApiMapping API call.

---

##### `CreateAuthorizer`<sup>Required</sup> <a name="CreateAuthorizer" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateAuthorizer"></a>

```typescript
public readonly CreateAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the CreateAuthorizer API call.

---

##### `CreateBasePathMapping`<sup>Required</sup> <a name="CreateBasePathMapping" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateBasePathMapping"></a>

```typescript
public readonly CreateBasePathMapping: string[];
```

- *Type:* string[]

IAM actions required for the CreateBasePathMapping API call.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeployment API call.

---

##### `CreateDocumentationPart`<sup>Required</sup> <a name="CreateDocumentationPart" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateDocumentationPart"></a>

```typescript
public readonly CreateDocumentationPart: string[];
```

- *Type:* string[]

IAM actions required for the CreateDocumentationPart API call.

---

##### `CreateDocumentationVersion`<sup>Required</sup> <a name="CreateDocumentationVersion" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateDocumentationVersion"></a>

```typescript
public readonly CreateDocumentationVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateDocumentationVersion API call.

---

##### `CreateDomainName`<sup>Required</sup> <a name="CreateDomainName" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateDomainName"></a>

```typescript
public readonly CreateDomainName: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomainName API call.

---

##### `CreateDomainNameAccessAssociation`<sup>Required</sup> <a name="CreateDomainNameAccessAssociation" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateDomainNameAccessAssociation"></a>

```typescript
public readonly CreateDomainNameAccessAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomainNameAccessAssociation API call.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegration API call.

---

##### `CreateIntegrationResponse`<sup>Required</sup> <a name="CreateIntegrationResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateIntegrationResponse"></a>

```typescript
public readonly CreateIntegrationResponse: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegrationResponse API call.

---

##### `CreateModel`<sup>Required</sup> <a name="CreateModel" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateModel"></a>

```typescript
public readonly CreateModel: string[];
```

- *Type:* string[]

IAM actions required for the CreateModel API call.

---

##### `CreatePortal`<sup>Required</sup> <a name="CreatePortal" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreatePortal"></a>

```typescript
public readonly CreatePortal: string[];
```

- *Type:* string[]

IAM actions required for the CreatePortal API call.

---

##### `CreatePortalProduct`<sup>Required</sup> <a name="CreatePortalProduct" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreatePortalProduct"></a>

```typescript
public readonly CreatePortalProduct: string[];
```

- *Type:* string[]

IAM actions required for the CreatePortalProduct API call.

---

##### `CreateProductPage`<sup>Required</sup> <a name="CreateProductPage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateProductPage"></a>

```typescript
public readonly CreateProductPage: string[];
```

- *Type:* string[]

IAM actions required for the CreateProductPage API call.

---

##### `CreateProductRestEndpointPage`<sup>Required</sup> <a name="CreateProductRestEndpointPage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateProductRestEndpointPage"></a>

```typescript
public readonly CreateProductRestEndpointPage: string[];
```

- *Type:* string[]

IAM actions required for the CreateProductRestEndpointPage API call.

---

##### `CreateRequestValidator`<sup>Required</sup> <a name="CreateRequestValidator" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateRequestValidator"></a>

```typescript
public readonly CreateRequestValidator: string[];
```

- *Type:* string[]

IAM actions required for the CreateRequestValidator API call.

---

##### `CreateResource`<sup>Required</sup> <a name="CreateResource" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateResource"></a>

```typescript
public readonly CreateResource: string[];
```

- *Type:* string[]

IAM actions required for the CreateResource API call.

---

##### `CreateRestApi`<sup>Required</sup> <a name="CreateRestApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateRestApi"></a>

```typescript
public readonly CreateRestApi: string[];
```

- *Type:* string[]

IAM actions required for the CreateRestApi API call.

---

##### `CreateRoute`<sup>Required</sup> <a name="CreateRoute" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateRoute"></a>

```typescript
public readonly CreateRoute: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoute API call.

---

##### `CreateRouteResponse`<sup>Required</sup> <a name="CreateRouteResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateRouteResponse"></a>

```typescript
public readonly CreateRouteResponse: string[];
```

- *Type:* string[]

IAM actions required for the CreateRouteResponse API call.

---

##### `CreateRoutingRule`<sup>Required</sup> <a name="CreateRoutingRule" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateRoutingRule"></a>

```typescript
public readonly CreateRoutingRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoutingRule API call.

---

##### `CreateStage`<sup>Required</sup> <a name="CreateStage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateStage"></a>

```typescript
public readonly CreateStage: string[];
```

- *Type:* string[]

IAM actions required for the CreateStage API call.

---

##### `CreateUsagePlan`<sup>Required</sup> <a name="CreateUsagePlan" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateUsagePlan"></a>

```typescript
public readonly CreateUsagePlan: string[];
```

- *Type:* string[]

IAM actions required for the CreateUsagePlan API call.

---

##### `CreateUsagePlanKey`<sup>Required</sup> <a name="CreateUsagePlanKey" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateUsagePlanKey"></a>

```typescript
public readonly CreateUsagePlanKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateUsagePlanKey API call.

---

##### `CreateVpcLink`<sup>Required</sup> <a name="CreateVpcLink" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.CreateVpcLink"></a>

```typescript
public readonly CreateVpcLink: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcLink API call.

---

##### `DeleteAccessLogSettings`<sup>Required</sup> <a name="DeleteAccessLogSettings" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteAccessLogSettings"></a>

```typescript
public readonly DeleteAccessLogSettings: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessLogSettings API call.

---

##### `DeleteApi`<sup>Required</sup> <a name="DeleteApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteApi"></a>

```typescript
public readonly DeleteApi: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApi API call.

---

##### `DeleteApiKey`<sup>Required</sup> <a name="DeleteApiKey" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteApiKey"></a>

```typescript
public readonly DeleteApiKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApiKey API call.

---

##### `DeleteApiMapping`<sup>Required</sup> <a name="DeleteApiMapping" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteApiMapping"></a>

```typescript
public readonly DeleteApiMapping: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApiMapping API call.

---

##### `DeleteAuthorizer`<sup>Required</sup> <a name="DeleteAuthorizer" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteAuthorizer"></a>

```typescript
public readonly DeleteAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAuthorizer API call.

---

##### `DeleteBasePathMapping`<sup>Required</sup> <a name="DeleteBasePathMapping" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteBasePathMapping"></a>

```typescript
public readonly DeleteBasePathMapping: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBasePathMapping API call.

---

##### `DeleteClientCertificate`<sup>Required</sup> <a name="DeleteClientCertificate" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteClientCertificate"></a>

```typescript
public readonly DeleteClientCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClientCertificate API call.

---

##### `DeleteCorsConfiguration`<sup>Required</sup> <a name="DeleteCorsConfiguration" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteCorsConfiguration"></a>

```typescript
public readonly DeleteCorsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCorsConfiguration API call.

---

##### `DeleteDeployment`<sup>Required</sup> <a name="DeleteDeployment" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteDeployment"></a>

```typescript
public readonly DeleteDeployment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeployment API call.

---

##### `DeleteDocumentationPart`<sup>Required</sup> <a name="DeleteDocumentationPart" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteDocumentationPart"></a>

```typescript
public readonly DeleteDocumentationPart: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDocumentationPart API call.

---

##### `DeleteDocumentationVersion`<sup>Required</sup> <a name="DeleteDocumentationVersion" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteDocumentationVersion"></a>

```typescript
public readonly DeleteDocumentationVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDocumentationVersion API call.

---

##### `DeleteDomainName`<sup>Required</sup> <a name="DeleteDomainName" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteDomainName"></a>

```typescript
public readonly DeleteDomainName: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainName API call.

---

##### `DeleteDomainNameAccessAssociation`<sup>Required</sup> <a name="DeleteDomainNameAccessAssociation" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteDomainNameAccessAssociation"></a>

```typescript
public readonly DeleteDomainNameAccessAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainNameAccessAssociation API call.

---

##### `DeleteGatewayResponse`<sup>Required</sup> <a name="DeleteGatewayResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteGatewayResponse"></a>

```typescript
public readonly DeleteGatewayResponse: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGatewayResponse API call.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegration API call.

---

##### `DeleteIntegrationResponse`<sup>Required</sup> <a name="DeleteIntegrationResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteIntegrationResponse"></a>

```typescript
public readonly DeleteIntegrationResponse: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegrationResponse API call.

---

##### `DeleteMethod`<sup>Required</sup> <a name="DeleteMethod" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteMethod"></a>

```typescript
public readonly DeleteMethod: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMethod API call.

---

##### `DeleteMethodResponse`<sup>Required</sup> <a name="DeleteMethodResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteMethodResponse"></a>

```typescript
public readonly DeleteMethodResponse: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMethodResponse API call.

---

##### `DeleteModel`<sup>Required</sup> <a name="DeleteModel" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteModel"></a>

```typescript
public readonly DeleteModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteModel API call.

---

##### `DeletePortal`<sup>Required</sup> <a name="DeletePortal" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeletePortal"></a>

```typescript
public readonly DeletePortal: string[];
```

- *Type:* string[]

IAM actions required for the DeletePortal API call.

---

##### `DeletePortalProduct`<sup>Required</sup> <a name="DeletePortalProduct" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeletePortalProduct"></a>

```typescript
public readonly DeletePortalProduct: string[];
```

- *Type:* string[]

IAM actions required for the DeletePortalProduct API call.

---

##### `DeletePortalProductSharingPolicy`<sup>Required</sup> <a name="DeletePortalProductSharingPolicy" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeletePortalProductSharingPolicy"></a>

```typescript
public readonly DeletePortalProductSharingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePortalProductSharingPolicy API call.

---

##### `DeleteProductPage`<sup>Required</sup> <a name="DeleteProductPage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteProductPage"></a>

```typescript
public readonly DeleteProductPage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProductPage API call.

---

##### `DeleteProductRestEndpointPage`<sup>Required</sup> <a name="DeleteProductRestEndpointPage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteProductRestEndpointPage"></a>

```typescript
public readonly DeleteProductRestEndpointPage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProductRestEndpointPage API call.

---

##### `DeleteRequestValidator`<sup>Required</sup> <a name="DeleteRequestValidator" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRequestValidator"></a>

```typescript
public readonly DeleteRequestValidator: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRequestValidator API call.

---

##### `DeleteResource`<sup>Required</sup> <a name="DeleteResource" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteResource"></a>

```typescript
public readonly DeleteResource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResource API call.

---

##### `DeleteRestApi`<sup>Required</sup> <a name="DeleteRestApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRestApi"></a>

```typescript
public readonly DeleteRestApi: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRestApi API call.

---

##### `DeleteRoute`<sup>Required</sup> <a name="DeleteRoute" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRoute"></a>

```typescript
public readonly DeleteRoute: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoute API call.

---

##### `DeleteRouteRequestParameter`<sup>Required</sup> <a name="DeleteRouteRequestParameter" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRouteRequestParameter"></a>

```typescript
public readonly DeleteRouteRequestParameter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRouteRequestParameter API call.

---

##### `DeleteRouteResponse`<sup>Required</sup> <a name="DeleteRouteResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRouteResponse"></a>

```typescript
public readonly DeleteRouteResponse: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRouteResponse API call.

---

##### `DeleteRouteSettings`<sup>Required</sup> <a name="DeleteRouteSettings" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRouteSettings"></a>

```typescript
public readonly DeleteRouteSettings: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRouteSettings API call.

---

##### `DeleteRoutingRule`<sup>Required</sup> <a name="DeleteRoutingRule" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteRoutingRule"></a>

```typescript
public readonly DeleteRoutingRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoutingRule API call.

---

##### `DeleteStage`<sup>Required</sup> <a name="DeleteStage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteStage"></a>

```typescript
public readonly DeleteStage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStage API call.

---

##### `DeleteUsagePlan`<sup>Required</sup> <a name="DeleteUsagePlan" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteUsagePlan"></a>

```typescript
public readonly DeleteUsagePlan: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUsagePlan API call.

---

##### `DeleteUsagePlanKey`<sup>Required</sup> <a name="DeleteUsagePlanKey" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteUsagePlanKey"></a>

```typescript
public readonly DeleteUsagePlanKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUsagePlanKey API call.

---

##### `DeleteVpcLink`<sup>Required</sup> <a name="DeleteVpcLink" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DeleteVpcLink"></a>

```typescript
public readonly DeleteVpcLink: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcLink API call.

---

##### `DisablePortal`<sup>Required</sup> <a name="DisablePortal" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.DisablePortal"></a>

```typescript
public readonly DisablePortal: string[];
```

- *Type:* string[]

IAM actions required for the DisablePortal API call.

---

##### `ExportApi`<sup>Required</sup> <a name="ExportApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ExportApi"></a>

```typescript
public readonly ExportApi: string[];
```

- *Type:* string[]

IAM actions required for the ExportApi API call.

---

##### `FlushStageAuthorizersCache`<sup>Required</sup> <a name="FlushStageAuthorizersCache" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.FlushStageAuthorizersCache"></a>

```typescript
public readonly FlushStageAuthorizersCache: string[];
```

- *Type:* string[]

IAM actions required for the FlushStageAuthorizersCache API call.

---

##### `FlushStageCache`<sup>Required</sup> <a name="FlushStageCache" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.FlushStageCache"></a>

```typescript
public readonly FlushStageCache: string[];
```

- *Type:* string[]

IAM actions required for the FlushStageCache API call.

---

##### `GenerateClientCertificate`<sup>Required</sup> <a name="GenerateClientCertificate" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.GenerateClientCertificate"></a>

```typescript
public readonly GenerateClientCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GenerateClientCertificate API call.

---

##### `ImportApi`<sup>Required</sup> <a name="ImportApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ImportApi"></a>

```typescript
public readonly ImportApi: string[];
```

- *Type:* string[]

IAM actions required for the ImportApi API call.

---

##### `ImportApiKeys`<sup>Required</sup> <a name="ImportApiKeys" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ImportApiKeys"></a>

```typescript
public readonly ImportApiKeys: string[];
```

- *Type:* string[]

IAM actions required for the ImportApiKeys API call.

---

##### `ImportDocumentationParts`<sup>Required</sup> <a name="ImportDocumentationParts" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ImportDocumentationParts"></a>

```typescript
public readonly ImportDocumentationParts: string[];
```

- *Type:* string[]

IAM actions required for the ImportDocumentationParts API call.

---

##### `ImportRestApi`<sup>Required</sup> <a name="ImportRestApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ImportRestApi"></a>

```typescript
public readonly ImportRestApi: string[];
```

- *Type:* string[]

IAM actions required for the ImportRestApi API call.

---

##### `ListPortalProducts`<sup>Required</sup> <a name="ListPortalProducts" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ListPortalProducts"></a>

```typescript
public readonly ListPortalProducts: string[];
```

- *Type:* string[]

IAM actions required for the ListPortalProducts API call.

---

##### `ListPortals`<sup>Required</sup> <a name="ListPortals" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ListPortals"></a>

```typescript
public readonly ListPortals: string[];
```

- *Type:* string[]

IAM actions required for the ListPortals API call.

---

##### `ListProductPages`<sup>Required</sup> <a name="ListProductPages" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ListProductPages"></a>

```typescript
public readonly ListProductPages: string[];
```

- *Type:* string[]

IAM actions required for the ListProductPages API call.

---

##### `ListProductRestEndpointPages`<sup>Required</sup> <a name="ListProductRestEndpointPages" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ListProductRestEndpointPages"></a>

```typescript
public readonly ListProductRestEndpointPages: string[];
```

- *Type:* string[]

IAM actions required for the ListProductRestEndpointPages API call.

---

##### `ListRoutingRules`<sup>Required</sup> <a name="ListRoutingRules" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ListRoutingRules"></a>

```typescript
public readonly ListRoutingRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRoutingRules API call.

---

##### `opGetAccount`<sup>Required</sup> <a name="opGetAccount" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetAccount"></a>

```typescript
public readonly opGetAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetAccount API call.

---

##### `opGetApi`<sup>Required</sup> <a name="opGetApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApi"></a>

```typescript
public readonly opGetApi: string[];
```

- *Type:* string[]

IAM actions required for the GetApi API call.

---

##### `opGetApiKey`<sup>Required</sup> <a name="opGetApiKey" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApiKey"></a>

```typescript
public readonly opGetApiKey: string[];
```

- *Type:* string[]

IAM actions required for the GetApiKey API call.

---

##### `opGetApiKeys`<sup>Required</sup> <a name="opGetApiKeys" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApiKeys"></a>

```typescript
public readonly opGetApiKeys: string[];
```

- *Type:* string[]

IAM actions required for the GetApiKeys API call.

---

##### `opGetApiMapping`<sup>Required</sup> <a name="opGetApiMapping" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApiMapping"></a>

```typescript
public readonly opGetApiMapping: string[];
```

- *Type:* string[]

IAM actions required for the GetApiMapping API call.

---

##### `opGetApiMappings`<sup>Required</sup> <a name="opGetApiMappings" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApiMappings"></a>

```typescript
public readonly opGetApiMappings: string[];
```

- *Type:* string[]

IAM actions required for the GetApiMappings API call.

---

##### `opGetApis`<sup>Required</sup> <a name="opGetApis" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetApis"></a>

```typescript
public readonly opGetApis: string[];
```

- *Type:* string[]

IAM actions required for the GetApis API call.

---

##### `opGetAuthorizer`<sup>Required</sup> <a name="opGetAuthorizer" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetAuthorizer"></a>

```typescript
public readonly opGetAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the GetAuthorizer API call.

---

##### `opGetAuthorizers`<sup>Required</sup> <a name="opGetAuthorizers" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetAuthorizers"></a>

```typescript
public readonly opGetAuthorizers: string[];
```

- *Type:* string[]

IAM actions required for the GetAuthorizers API call.

---

##### `opGetBasePathMapping`<sup>Required</sup> <a name="opGetBasePathMapping" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetBasePathMapping"></a>

```typescript
public readonly opGetBasePathMapping: string[];
```

- *Type:* string[]

IAM actions required for the GetBasePathMapping API call.

---

##### `opGetBasePathMappings`<sup>Required</sup> <a name="opGetBasePathMappings" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetBasePathMappings"></a>

```typescript
public readonly opGetBasePathMappings: string[];
```

- *Type:* string[]

IAM actions required for the GetBasePathMappings API call.

---

##### `opGetClientCertificate`<sup>Required</sup> <a name="opGetClientCertificate" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetClientCertificate"></a>

```typescript
public readonly opGetClientCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GetClientCertificate API call.

---

##### `opGetClientCertificates`<sup>Required</sup> <a name="opGetClientCertificates" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetClientCertificates"></a>

```typescript
public readonly opGetClientCertificates: string[];
```

- *Type:* string[]

IAM actions required for the GetClientCertificates API call.

---

##### `opGetDeployment`<sup>Required</sup> <a name="opGetDeployment" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDeployment"></a>

```typescript
public readonly opGetDeployment: string[];
```

- *Type:* string[]

IAM actions required for the GetDeployment API call.

---

##### `opGetDeployments`<sup>Required</sup> <a name="opGetDeployments" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDeployments"></a>

```typescript
public readonly opGetDeployments: string[];
```

- *Type:* string[]

IAM actions required for the GetDeployments API call.

---

##### `opGetDocumentationPart`<sup>Required</sup> <a name="opGetDocumentationPart" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDocumentationPart"></a>

```typescript
public readonly opGetDocumentationPart: string[];
```

- *Type:* string[]

IAM actions required for the GetDocumentationPart API call.

---

##### `opGetDocumentationParts`<sup>Required</sup> <a name="opGetDocumentationParts" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDocumentationParts"></a>

```typescript
public readonly opGetDocumentationParts: string[];
```

- *Type:* string[]

IAM actions required for the GetDocumentationParts API call.

---

##### `opGetDocumentationVersion`<sup>Required</sup> <a name="opGetDocumentationVersion" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDocumentationVersion"></a>

```typescript
public readonly opGetDocumentationVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetDocumentationVersion API call.

---

##### `opGetDocumentationVersions`<sup>Required</sup> <a name="opGetDocumentationVersions" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDocumentationVersions"></a>

```typescript
public readonly opGetDocumentationVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetDocumentationVersions API call.

---

##### `opGetDomainName`<sup>Required</sup> <a name="opGetDomainName" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDomainName"></a>

```typescript
public readonly opGetDomainName: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainName API call.

---

##### `opGetDomainNameAccessAssociations`<sup>Required</sup> <a name="opGetDomainNameAccessAssociations" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDomainNameAccessAssociations"></a>

```typescript
public readonly opGetDomainNameAccessAssociations: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainNameAccessAssociations API call.

---

##### `opGetDomainNames`<sup>Required</sup> <a name="opGetDomainNames" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetDomainNames"></a>

```typescript
public readonly opGetDomainNames: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainNames API call.

---

##### `opGetExport`<sup>Required</sup> <a name="opGetExport" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetExport"></a>

```typescript
public readonly opGetExport: string[];
```

- *Type:* string[]

IAM actions required for the GetExport API call.

---

##### `opGetGatewayResponse`<sup>Required</sup> <a name="opGetGatewayResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetGatewayResponse"></a>

```typescript
public readonly opGetGatewayResponse: string[];
```

- *Type:* string[]

IAM actions required for the GetGatewayResponse API call.

---

##### `opGetGatewayResponses`<sup>Required</sup> <a name="opGetGatewayResponses" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetGatewayResponses"></a>

```typescript
public readonly opGetGatewayResponses: string[];
```

- *Type:* string[]

IAM actions required for the GetGatewayResponses API call.

---

##### `opGetIntegration`<sup>Required</sup> <a name="opGetIntegration" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetIntegration"></a>

```typescript
public readonly opGetIntegration: string[];
```

- *Type:* string[]

IAM actions required for the GetIntegration API call.

---

##### `opGetIntegrationResponse`<sup>Required</sup> <a name="opGetIntegrationResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetIntegrationResponse"></a>

```typescript
public readonly opGetIntegrationResponse: string[];
```

- *Type:* string[]

IAM actions required for the GetIntegrationResponse API call.

---

##### `opGetIntegrationResponses`<sup>Required</sup> <a name="opGetIntegrationResponses" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetIntegrationResponses"></a>

```typescript
public readonly opGetIntegrationResponses: string[];
```

- *Type:* string[]

IAM actions required for the GetIntegrationResponses API call.

---

##### `opGetIntegrations`<sup>Required</sup> <a name="opGetIntegrations" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetIntegrations"></a>

```typescript
public readonly opGetIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the GetIntegrations API call.

---

##### `opGetMethod`<sup>Required</sup> <a name="opGetMethod" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetMethod"></a>

```typescript
public readonly opGetMethod: string[];
```

- *Type:* string[]

IAM actions required for the GetMethod API call.

---

##### `opGetMethodResponse`<sup>Required</sup> <a name="opGetMethodResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetMethodResponse"></a>

```typescript
public readonly opGetMethodResponse: string[];
```

- *Type:* string[]

IAM actions required for the GetMethodResponse API call.

---

##### `opGetModel`<sup>Required</sup> <a name="opGetModel" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetModel"></a>

```typescript
public readonly opGetModel: string[];
```

- *Type:* string[]

IAM actions required for the GetModel API call.

---

##### `opGetModels`<sup>Required</sup> <a name="opGetModels" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetModels"></a>

```typescript
public readonly opGetModels: string[];
```

- *Type:* string[]

IAM actions required for the GetModels API call.

---

##### `opGetModelTemplate`<sup>Required</sup> <a name="opGetModelTemplate" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetModelTemplate"></a>

```typescript
public readonly opGetModelTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetModelTemplate API call.

---

##### `opGetPortal`<sup>Required</sup> <a name="opGetPortal" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetPortal"></a>

```typescript
public readonly opGetPortal: string[];
```

- *Type:* string[]

IAM actions required for the GetPortal API call.

---

##### `opGetPortalProduct`<sup>Required</sup> <a name="opGetPortalProduct" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetPortalProduct"></a>

```typescript
public readonly opGetPortalProduct: string[];
```

- *Type:* string[]

IAM actions required for the GetPortalProduct API call.

---

##### `opGetPortalProductSharingPolicy`<sup>Required</sup> <a name="opGetPortalProductSharingPolicy" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetPortalProductSharingPolicy"></a>

```typescript
public readonly opGetPortalProductSharingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPortalProductSharingPolicy API call.

---

##### `opGetProductPage`<sup>Required</sup> <a name="opGetProductPage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetProductPage"></a>

```typescript
public readonly opGetProductPage: string[];
```

- *Type:* string[]

IAM actions required for the GetProductPage API call.

---

##### `opGetProductRestEndpointPage`<sup>Required</sup> <a name="opGetProductRestEndpointPage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetProductRestEndpointPage"></a>

```typescript
public readonly opGetProductRestEndpointPage: string[];
```

- *Type:* string[]

IAM actions required for the GetProductRestEndpointPage API call.

---

##### `opGetRequestValidator`<sup>Required</sup> <a name="opGetRequestValidator" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRequestValidator"></a>

```typescript
public readonly opGetRequestValidator: string[];
```

- *Type:* string[]

IAM actions required for the GetRequestValidator API call.

---

##### `opGetRequestValidators`<sup>Required</sup> <a name="opGetRequestValidators" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRequestValidators"></a>

```typescript
public readonly opGetRequestValidators: string[];
```

- *Type:* string[]

IAM actions required for the GetRequestValidators API call.

---

##### `opGetResource`<sup>Required</sup> <a name="opGetResource" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetResource"></a>

```typescript
public readonly opGetResource: string[];
```

- *Type:* string[]

IAM actions required for the GetResource API call.

---

##### `opGetResources`<sup>Required</sup> <a name="opGetResources" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetResources"></a>

```typescript
public readonly opGetResources: string[];
```

- *Type:* string[]

IAM actions required for the GetResources API call.

---

##### `opGetRestApi`<sup>Required</sup> <a name="opGetRestApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRestApi"></a>

```typescript
public readonly opGetRestApi: string[];
```

- *Type:* string[]

IAM actions required for the GetRestApi API call.

---

##### `opGetRestApis`<sup>Required</sup> <a name="opGetRestApis" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRestApis"></a>

```typescript
public readonly opGetRestApis: string[];
```

- *Type:* string[]

IAM actions required for the GetRestApis API call.

---

##### `opGetRoute`<sup>Required</sup> <a name="opGetRoute" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRoute"></a>

```typescript
public readonly opGetRoute: string[];
```

- *Type:* string[]

IAM actions required for the GetRoute API call.

---

##### `opGetRouteResponse`<sup>Required</sup> <a name="opGetRouteResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRouteResponse"></a>

```typescript
public readonly opGetRouteResponse: string[];
```

- *Type:* string[]

IAM actions required for the GetRouteResponse API call.

---

##### `opGetRouteResponses`<sup>Required</sup> <a name="opGetRouteResponses" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRouteResponses"></a>

```typescript
public readonly opGetRouteResponses: string[];
```

- *Type:* string[]

IAM actions required for the GetRouteResponses API call.

---

##### `opGetRoutes`<sup>Required</sup> <a name="opGetRoutes" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRoutes"></a>

```typescript
public readonly opGetRoutes: string[];
```

- *Type:* string[]

IAM actions required for the GetRoutes API call.

---

##### `opGetRoutingRule`<sup>Required</sup> <a name="opGetRoutingRule" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetRoutingRule"></a>

```typescript
public readonly opGetRoutingRule: string[];
```

- *Type:* string[]

IAM actions required for the GetRoutingRule API call.

---

##### `opGetSdk`<sup>Required</sup> <a name="opGetSdk" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetSdk"></a>

```typescript
public readonly opGetSdk: string[];
```

- *Type:* string[]

IAM actions required for the GetSdk API call.

---

##### `opGetSdkType`<sup>Required</sup> <a name="opGetSdkType" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetSdkType"></a>

```typescript
public readonly opGetSdkType: string[];
```

- *Type:* string[]

IAM actions required for the GetSdkType API call.

---

##### `opGetSdkTypes`<sup>Required</sup> <a name="opGetSdkTypes" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetSdkTypes"></a>

```typescript
public readonly opGetSdkTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetSdkTypes API call.

---

##### `opGetStage`<sup>Required</sup> <a name="opGetStage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetStage"></a>

```typescript
public readonly opGetStage: string[];
```

- *Type:* string[]

IAM actions required for the GetStage API call.

---

##### `opGetStages`<sup>Required</sup> <a name="opGetStages" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetStages"></a>

```typescript
public readonly opGetStages: string[];
```

- *Type:* string[]

IAM actions required for the GetStages API call.

---

##### `opGetTags`<sup>Required</sup> <a name="opGetTags" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetTags"></a>

```typescript
public readonly opGetTags: string[];
```

- *Type:* string[]

IAM actions required for the GetTags API call.

---

##### `opGetUsage`<sup>Required</sup> <a name="opGetUsage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetUsage"></a>

```typescript
public readonly opGetUsage: string[];
```

- *Type:* string[]

IAM actions required for the GetUsage API call.

---

##### `opGetUsagePlan`<sup>Required</sup> <a name="opGetUsagePlan" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetUsagePlan"></a>

```typescript
public readonly opGetUsagePlan: string[];
```

- *Type:* string[]

IAM actions required for the GetUsagePlan API call.

---

##### `opGetUsagePlanKey`<sup>Required</sup> <a name="opGetUsagePlanKey" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetUsagePlanKey"></a>

```typescript
public readonly opGetUsagePlanKey: string[];
```

- *Type:* string[]

IAM actions required for the GetUsagePlanKey API call.

---

##### `opGetUsagePlanKeys`<sup>Required</sup> <a name="opGetUsagePlanKeys" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetUsagePlanKeys"></a>

```typescript
public readonly opGetUsagePlanKeys: string[];
```

- *Type:* string[]

IAM actions required for the GetUsagePlanKeys API call.

---

##### `opGetUsagePlans`<sup>Required</sup> <a name="opGetUsagePlans" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetUsagePlans"></a>

```typescript
public readonly opGetUsagePlans: string[];
```

- *Type:* string[]

IAM actions required for the GetUsagePlans API call.

---

##### `opGetVpcLink`<sup>Required</sup> <a name="opGetVpcLink" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetVpcLink"></a>

```typescript
public readonly opGetVpcLink: string[];
```

- *Type:* string[]

IAM actions required for the GetVpcLink API call.

---

##### `opGetVpcLinks`<sup>Required</sup> <a name="opGetVpcLinks" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.opGetVpcLinks"></a>

```typescript
public readonly opGetVpcLinks: string[];
```

- *Type:* string[]

IAM actions required for the GetVpcLinks API call.

---

##### `PreviewPortal`<sup>Required</sup> <a name="PreviewPortal" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PreviewPortal"></a>

```typescript
public readonly PreviewPortal: string[];
```

- *Type:* string[]

IAM actions required for the PreviewPortal API call.

---

##### `PublishPortal`<sup>Required</sup> <a name="PublishPortal" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PublishPortal"></a>

```typescript
public readonly PublishPortal: string[];
```

- *Type:* string[]

IAM actions required for the PublishPortal API call.

---

##### `PutGatewayResponse`<sup>Required</sup> <a name="PutGatewayResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutGatewayResponse"></a>

```typescript
public readonly PutGatewayResponse: string[];
```

- *Type:* string[]

IAM actions required for the PutGatewayResponse API call.

---

##### `PutIntegration`<sup>Required</sup> <a name="PutIntegration" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutIntegration"></a>

```typescript
public readonly PutIntegration: string[];
```

- *Type:* string[]

IAM actions required for the PutIntegration API call.

---

##### `PutIntegrationResponse`<sup>Required</sup> <a name="PutIntegrationResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutIntegrationResponse"></a>

```typescript
public readonly PutIntegrationResponse: string[];
```

- *Type:* string[]

IAM actions required for the PutIntegrationResponse API call.

---

##### `PutMethod`<sup>Required</sup> <a name="PutMethod" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutMethod"></a>

```typescript
public readonly PutMethod: string[];
```

- *Type:* string[]

IAM actions required for the PutMethod API call.

---

##### `PutMethodResponse`<sup>Required</sup> <a name="PutMethodResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutMethodResponse"></a>

```typescript
public readonly PutMethodResponse: string[];
```

- *Type:* string[]

IAM actions required for the PutMethodResponse API call.

---

##### `PutPortalProductSharingPolicy`<sup>Required</sup> <a name="PutPortalProductSharingPolicy" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutPortalProductSharingPolicy"></a>

```typescript
public readonly PutPortalProductSharingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutPortalProductSharingPolicy API call.

---

##### `PutRestApi`<sup>Required</sup> <a name="PutRestApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutRestApi"></a>

```typescript
public readonly PutRestApi: string[];
```

- *Type:* string[]

IAM actions required for the PutRestApi API call.

---

##### `PutRoutingRule`<sup>Required</sup> <a name="PutRoutingRule" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.PutRoutingRule"></a>

```typescript
public readonly PutRoutingRule: string[];
```

- *Type:* string[]

IAM actions required for the PutRoutingRule API call.

---

##### `ReimportApi`<sup>Required</sup> <a name="ReimportApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ReimportApi"></a>

```typescript
public readonly ReimportApi: string[];
```

- *Type:* string[]

IAM actions required for the ReimportApi API call.

---

##### `RejectDomainNameAccessAssociation`<sup>Required</sup> <a name="RejectDomainNameAccessAssociation" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.RejectDomainNameAccessAssociation"></a>

```typescript
public readonly RejectDomainNameAccessAssociation: string[];
```

- *Type:* string[]

IAM actions required for the RejectDomainNameAccessAssociation API call.

---

##### `ResetAuthorizersCache`<sup>Required</sup> <a name="ResetAuthorizersCache" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.ResetAuthorizersCache"></a>

```typescript
public readonly ResetAuthorizersCache: string[];
```

- *Type:* string[]

IAM actions required for the ResetAuthorizersCache API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestInvokeAuthorizer`<sup>Required</sup> <a name="TestInvokeAuthorizer" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.TestInvokeAuthorizer"></a>

```typescript
public readonly TestInvokeAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the TestInvokeAuthorizer API call.

---

##### `TestInvokeMethod`<sup>Required</sup> <a name="TestInvokeMethod" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.TestInvokeMethod"></a>

```typescript
public readonly TestInvokeMethod: string[];
```

- *Type:* string[]

IAM actions required for the TestInvokeMethod API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccount`<sup>Required</sup> <a name="UpdateAccount" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateAccount"></a>

```typescript
public readonly UpdateAccount: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccount API call.

---

##### `UpdateApi`<sup>Required</sup> <a name="UpdateApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateApi"></a>

```typescript
public readonly UpdateApi: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApi API call.

---

##### `UpdateApiKey`<sup>Required</sup> <a name="UpdateApiKey" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateApiKey"></a>

```typescript
public readonly UpdateApiKey: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApiKey API call.

---

##### `UpdateApiMapping`<sup>Required</sup> <a name="UpdateApiMapping" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateApiMapping"></a>

```typescript
public readonly UpdateApiMapping: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApiMapping API call.

---

##### `UpdateAuthorizer`<sup>Required</sup> <a name="UpdateAuthorizer" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateAuthorizer"></a>

```typescript
public readonly UpdateAuthorizer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAuthorizer API call.

---

##### `UpdateBasePathMapping`<sup>Required</sup> <a name="UpdateBasePathMapping" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateBasePathMapping"></a>

```typescript
public readonly UpdateBasePathMapping: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBasePathMapping API call.

---

##### `UpdateClientCertificate`<sup>Required</sup> <a name="UpdateClientCertificate" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateClientCertificate"></a>

```typescript
public readonly UpdateClientCertificate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateClientCertificate API call.

---

##### `UpdateDeployment`<sup>Required</sup> <a name="UpdateDeployment" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateDeployment"></a>

```typescript
public readonly UpdateDeployment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDeployment API call.

---

##### `UpdateDocumentationPart`<sup>Required</sup> <a name="UpdateDocumentationPart" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateDocumentationPart"></a>

```typescript
public readonly UpdateDocumentationPart: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDocumentationPart API call.

---

##### `UpdateDocumentationVersion`<sup>Required</sup> <a name="UpdateDocumentationVersion" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateDocumentationVersion"></a>

```typescript
public readonly UpdateDocumentationVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDocumentationVersion API call.

---

##### `UpdateDomainName`<sup>Required</sup> <a name="UpdateDomainName" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateDomainName"></a>

```typescript
public readonly UpdateDomainName: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainName API call.

---

##### `UpdateGatewayResponse`<sup>Required</sup> <a name="UpdateGatewayResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateGatewayResponse"></a>

```typescript
public readonly UpdateGatewayResponse: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewayResponse API call.

---

##### `UpdateIntegration`<sup>Required</sup> <a name="UpdateIntegration" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateIntegration"></a>

```typescript
public readonly UpdateIntegration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIntegration API call.

---

##### `UpdateIntegrationResponse`<sup>Required</sup> <a name="UpdateIntegrationResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateIntegrationResponse"></a>

```typescript
public readonly UpdateIntegrationResponse: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIntegrationResponse API call.

---

##### `UpdateMethod`<sup>Required</sup> <a name="UpdateMethod" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateMethod"></a>

```typescript
public readonly UpdateMethod: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMethod API call.

---

##### `UpdateMethodResponse`<sup>Required</sup> <a name="UpdateMethodResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateMethodResponse"></a>

```typescript
public readonly UpdateMethodResponse: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMethodResponse API call.

---

##### `UpdateModel`<sup>Required</sup> <a name="UpdateModel" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateModel"></a>

```typescript
public readonly UpdateModel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateModel API call.

---

##### `UpdatePortal`<sup>Required</sup> <a name="UpdatePortal" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdatePortal"></a>

```typescript
public readonly UpdatePortal: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePortal API call.

---

##### `UpdatePortalProduct`<sup>Required</sup> <a name="UpdatePortalProduct" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdatePortalProduct"></a>

```typescript
public readonly UpdatePortalProduct: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePortalProduct API call.

---

##### `UpdateProductPage`<sup>Required</sup> <a name="UpdateProductPage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateProductPage"></a>

```typescript
public readonly UpdateProductPage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProductPage API call.

---

##### `UpdateProductRestEndpointPage`<sup>Required</sup> <a name="UpdateProductRestEndpointPage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateProductRestEndpointPage"></a>

```typescript
public readonly UpdateProductRestEndpointPage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProductRestEndpointPage API call.

---

##### `UpdateRequestValidator`<sup>Required</sup> <a name="UpdateRequestValidator" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateRequestValidator"></a>

```typescript
public readonly UpdateRequestValidator: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRequestValidator API call.

---

##### `UpdateResource`<sup>Required</sup> <a name="UpdateResource" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateResource"></a>

```typescript
public readonly UpdateResource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResource API call.

---

##### `UpdateRestApi`<sup>Required</sup> <a name="UpdateRestApi" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateRestApi"></a>

```typescript
public readonly UpdateRestApi: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRestApi API call.

---

##### `UpdateRoute`<sup>Required</sup> <a name="UpdateRoute" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateRoute"></a>

```typescript
public readonly UpdateRoute: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoute API call.

---

##### `UpdateRouteResponse`<sup>Required</sup> <a name="UpdateRouteResponse" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateRouteResponse"></a>

```typescript
public readonly UpdateRouteResponse: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRouteResponse API call.

---

##### `UpdateStage`<sup>Required</sup> <a name="UpdateStage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateStage"></a>

```typescript
public readonly UpdateStage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStage API call.

---

##### `UpdateUsage`<sup>Required</sup> <a name="UpdateUsage" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateUsage"></a>

```typescript
public readonly UpdateUsage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUsage API call.

---

##### `UpdateUsagePlan`<sup>Required</sup> <a name="UpdateUsagePlan" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateUsagePlan"></a>

```typescript
public readonly UpdateUsagePlan: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUsagePlan API call.

---

##### `UpdateVpcLink`<sup>Required</sup> <a name="UpdateVpcLink" id="@cdk_utils/iam.apigateway.ApiGatewayOperations.property.UpdateVpcLink"></a>

```typescript
public readonly UpdateVpcLink: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVpcLink API call.

---

### ApiGatewayResources <a name="ApiGatewayResources" id="@cdk_utils/iam.apigateway.ApiGatewayResources"></a>

ARN builders, validators, and parsers for apigateway resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apigateway.ApiGatewayResources.Initializer"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

new apigateway.ApiGatewayResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.accessLogSettings">accessLogSettings</a></code> | Builds an ARN for the AccessLogSettings resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.account">account</a></code> | Builds an ARN for the Account resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.api">api</a></code> | Builds an ARN for the Api resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.apiKey">apiKey</a></code> | Builds an ARN for the ApiKey resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.apiKeys">apiKeys</a></code> | Builds an ARN for the ApiKeys resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.apiMapping">apiMapping</a></code> | Builds an ARN for the ApiMapping resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.apiMappings">apiMappings</a></code> | Builds an ARN for the ApiMappings resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.apis">apis</a></code> | Builds an ARN for the Apis resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.authorizersCache">authorizersCache</a></code> | Builds an ARN for the AuthorizersCache resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.authorizersVariant1">authorizersVariant1</a></code> | Builds an ARN for the AuthorizersVariant1 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.authorizersVariant2">authorizersVariant2</a></code> | Builds an ARN for the AuthorizersVariant2 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.authorizerVariant1">authorizerVariant1</a></code> | Builds an ARN for the AuthorizerVariant1 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.authorizerVariant2">authorizerVariant2</a></code> | Builds an ARN for the AuthorizerVariant2 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.basePathMapping">basePathMapping</a></code> | Builds an ARN for the BasePathMapping resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.basePathMappings">basePathMappings</a></code> | Builds an ARN for the BasePathMappings resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.clientCertificate">clientCertificate</a></code> | Builds an ARN for the ClientCertificate resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.clientCertificates">clientCertificates</a></code> | Builds an ARN for the ClientCertificates resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.cors">cors</a></code> | Builds an ARN for the Cors resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentsVariant1">deploymentsVariant1</a></code> | Builds an ARN for the DeploymentsVariant1 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentsVariant2">deploymentsVariant2</a></code> | Builds an ARN for the DeploymentsVariant2 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentVariant1">deploymentVariant1</a></code> | Builds an ARN for the DeploymentVariant1 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentVariant2">deploymentVariant2</a></code> | Builds an ARN for the DeploymentVariant2 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.documentationPart">documentationPart</a></code> | Builds an ARN for the DocumentationPart resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.documentationParts">documentationParts</a></code> | Builds an ARN for the DocumentationParts resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.documentationVersion">documentationVersion</a></code> | Builds an ARN for the DocumentationVersion resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.documentationVersions">documentationVersions</a></code> | Builds an ARN for the DocumentationVersions resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.domainName">domainName</a></code> | Builds an ARN for the DomainName resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.domainNameAccessAssociation">domainNameAccessAssociation</a></code> | Builds an ARN for the DomainNameAccessAssociation resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.domainNameAccessAssociations">domainNameAccessAssociations</a></code> | Builds an ARN for the DomainNameAccessAssociations resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.domainNames">domainNames</a></code> | Builds an ARN for the DomainNames resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.exportedAPI">exportedAPI</a></code> | Builds an ARN for the ExportedAPI resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.gatewayResponse">gatewayResponse</a></code> | Builds an ARN for the GatewayResponse resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.gatewayResponses">gatewayResponses</a></code> | Builds an ARN for the GatewayResponses resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.integrationResponses">integrationResponses</a></code> | Builds an ARN for the IntegrationResponses resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.integrationResponseVariant1">integrationResponseVariant1</a></code> | Builds an ARN for the IntegrationResponseVariant1 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.integrationResponseVariant2">integrationResponseVariant2</a></code> | Builds an ARN for the IntegrationResponseVariant2 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.integrations">integrations</a></code> | Builds an ARN for the Integrations resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.integrationVariant1">integrationVariant1</a></code> | Builds an ARN for the IntegrationVariant1 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.integrationVariant2">integrationVariant2</a></code> | Builds an ARN for the IntegrationVariant2 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAccessLogSettingsArn">isValidAccessLogSettingsArn</a></code> | Validates whether a string is a valid ARN for the AccessLogSettings resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAccountArn">isValidAccountArn</a></code> | Validates whether a string is a valid ARN for the Account resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIArn">isValidAPIArn</a></code> | Validates whether a string is a valid ARN for the Api resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIKeyArn">isValidAPIKeyArn</a></code> | Validates whether a string is a valid ARN for the ApiKey resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIKeysArn">isValidAPIKeysArn</a></code> | Validates whether a string is a valid ARN for the ApiKeys resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIMappingArn">isValidAPIMappingArn</a></code> | Validates whether a string is a valid ARN for the ApiMapping resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIMappingsArn">isValidAPIMappingsArn</a></code> | Validates whether a string is a valid ARN for the ApiMappings resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidApisArn">isValidApisArn</a></code> | Validates whether a string is a valid ARN for the Apis resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAuthorizerArn">isValidAuthorizerArn</a></code> | Validates whether a string is a valid ARN for the Authorizer resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAuthorizersArn">isValidAuthorizersArn</a></code> | Validates whether a string is a valid ARN for the Authorizers resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAuthorizersCacheArn">isValidAuthorizersCacheArn</a></code> | Validates whether a string is a valid ARN for the AuthorizersCache resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidBasePathMappingArn">isValidBasePathMappingArn</a></code> | Validates whether a string is a valid ARN for the BasePathMapping resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidBasePathMappingsArn">isValidBasePathMappingsArn</a></code> | Validates whether a string is a valid ARN for the BasePathMappings resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidClientCertificateArn">isValidClientCertificateArn</a></code> | Validates whether a string is a valid ARN for the ClientCertificate resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidClientCertificatesArn">isValidClientCertificatesArn</a></code> | Validates whether a string is a valid ARN for the ClientCertificates resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidCorsArn">isValidCorsArn</a></code> | Validates whether a string is a valid ARN for the Cors resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDeploymentArn">isValidDeploymentArn</a></code> | Validates whether a string is a valid ARN for the Deployment resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDeploymentsArn">isValidDeploymentsArn</a></code> | Validates whether a string is a valid ARN for the Deployments resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationPartArn">isValidDocumentationPartArn</a></code> | Validates whether a string is a valid ARN for the DocumentationPart resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationPartsArn">isValidDocumentationPartsArn</a></code> | Validates whether a string is a valid ARN for the DocumentationParts resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationVersionArn">isValidDocumentationVersionArn</a></code> | Validates whether a string is a valid ARN for the DocumentationVersion resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationVersionsArn">isValidDocumentationVersionsArn</a></code> | Validates whether a string is a valid ARN for the DocumentationVersions resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNameAccessAssociationArn">isValidDomainNameAccessAssociationArn</a></code> | Validates whether a string is a valid ARN for the DomainNameAccessAssociation resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNameAccessAssociationsArn">isValidDomainNameAccessAssociationsArn</a></code> | Validates whether a string is a valid ARN for the DomainNameAccessAssociations resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNameArn">isValidDomainNameArn</a></code> | Validates whether a string is a valid ARN for the DomainName resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNamesArn">isValidDomainNamesArn</a></code> | Validates whether a string is a valid ARN for the DomainNames resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidExportedAPIArn">isValidExportedAPIArn</a></code> | Validates whether a string is a valid ARN for the ExportedAPI resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidGatewayResponseArn">isValidGatewayResponseArn</a></code> | Validates whether a string is a valid ARN for the GatewayResponse resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidGatewayResponsesArn">isValidGatewayResponsesArn</a></code> | Validates whether a string is a valid ARN for the GatewayResponses resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationArn">isValidIntegrationArn</a></code> | Validates whether a string is a valid ARN for the Integration resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationResponseArn">isValidIntegrationResponseArn</a></code> | Validates whether a string is a valid ARN for the IntegrationResponse resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationResponsesArn">isValidIntegrationResponsesArn</a></code> | Validates whether a string is a valid ARN for the IntegrationResponses resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationsArn">isValidIntegrationsArn</a></code> | Validates whether a string is a valid ARN for the Integrations resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidMethodArn">isValidMethodArn</a></code> | Validates whether a string is a valid ARN for the Method resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidMethodResponseArn">isValidMethodResponseArn</a></code> | Validates whether a string is a valid ARN for the MethodResponse resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidModelArn">isValidModelArn</a></code> | Validates whether a string is a valid ARN for the Model resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidModelsArn">isValidModelsArn</a></code> | Validates whether a string is a valid ARN for the Models resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidModelTemplateArn">isValidModelTemplateArn</a></code> | Validates whether a string is a valid ARN for the ModelTemplate resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPortalArn">isValidPortalArn</a></code> | Validates whether a string is a valid ARN for the Portal resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPortalProductArn">isValidPortalProductArn</a></code> | Validates whether a string is a valid ARN for the PortalProduct resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPrivateBasePathMappingArn">isValidPrivateBasePathMappingArn</a></code> | Validates whether a string is a valid ARN for the PrivateBasePathMapping resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPrivateBasePathMappingsArn">isValidPrivateBasePathMappingsArn</a></code> | Validates whether a string is a valid ARN for the PrivateBasePathMappings resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPrivateDomainNameArn">isValidPrivateDomainNameArn</a></code> | Validates whether a string is a valid ARN for the PrivateDomainName resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidProductPageArn">isValidProductPageArn</a></code> | Validates whether a string is a valid ARN for the ProductPage resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidProductRestEndpointPageArn">isValidProductRestEndpointPageArn</a></code> | Validates whether a string is a valid ARN for the ProductRestEndpointPage resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRequestValidatorArn">isValidRequestValidatorArn</a></code> | Validates whether a string is a valid ARN for the RequestValidator resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRequestValidatorsArn">isValidRequestValidatorsArn</a></code> | Validates whether a string is a valid ARN for the RequestValidators resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidResourceArn">isValidResourceArn</a></code> | Validates whether a string is a valid ARN for the Resource resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidResourcesArn">isValidResourcesArn</a></code> | Validates whether a string is a valid ARN for the Resources resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRestAPIArn">isValidRestAPIArn</a></code> | Validates whether a string is a valid ARN for the RestApi resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRestApisArn">isValidRestApisArn</a></code> | Validates whether a string is a valid ARN for the RestApis resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteArn">isValidRouteArn</a></code> | Validates whether a string is a valid ARN for the Route resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteRequestParameterArn">isValidRouteRequestParameterArn</a></code> | Validates whether a string is a valid ARN for the RouteRequestParameter resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteResponseArn">isValidRouteResponseArn</a></code> | Validates whether a string is a valid ARN for the RouteResponse resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteResponsesArn">isValidRouteResponsesArn</a></code> | Validates whether a string is a valid ARN for the RouteResponses resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRoutesArn">isValidRoutesArn</a></code> | Validates whether a string is a valid ARN for the Routes resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteSettingsArn">isValidRouteSettingsArn</a></code> | Validates whether a string is a valid ARN for the RouteSettings resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRoutingRuleArn">isValidRoutingRuleArn</a></code> | Validates whether a string is a valid ARN for the RoutingRule resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidSDKArn">isValidSDKArn</a></code> | Validates whether a string is a valid ARN for the Sdk resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidStageArn">isValidStageArn</a></code> | Validates whether a string is a valid ARN for the Stage resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidStagesArn">isValidStagesArn</a></code> | Validates whether a string is a valid ARN for the Stages resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidTagsArn">isValidTagsArn</a></code> | Validates whether a string is a valid ARN for the Tags resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidTemplateArn">isValidTemplateArn</a></code> | Validates whether a string is a valid ARN for the Template resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlanArn">isValidUsagePlanArn</a></code> | Validates whether a string is a valid ARN for the UsagePlan resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlanKeyArn">isValidUsagePlanKeyArn</a></code> | Validates whether a string is a valid ARN for the UsagePlanKey resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlanKeysArn">isValidUsagePlanKeysArn</a></code> | Validates whether a string is a valid ARN for the UsagePlanKeys resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlansArn">isValidUsagePlansArn</a></code> | Validates whether a string is a valid ARN for the UsagePlans resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidVPCLinkArn">isValidVPCLinkArn</a></code> | Validates whether a string is a valid ARN for the VpcLink resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.isValidVPCLinksArn">isValidVPCLinksArn</a></code> | Validates whether a string is a valid ARN for the VpcLinks resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.method">method</a></code> | Builds an ARN for the Method resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.methodResponse">methodResponse</a></code> | Builds an ARN for the MethodResponse resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.modelsVariant1">modelsVariant1</a></code> | Builds an ARN for the ModelsVariant1 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.modelsVariant2">modelsVariant2</a></code> | Builds an ARN for the ModelsVariant2 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.modelTemplate">modelTemplate</a></code> | Builds an ARN for the ModelTemplate resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.modelVariant1">modelVariant1</a></code> | Builds an ARN for the ModelVariant1 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.modelVariant2">modelVariant2</a></code> | Builds an ARN for the ModelVariant2 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseAccessLogSettingsArn">parseAccessLogSettingsArn</a></code> | Parses a AccessLogSettings ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseAccountArn">parseAccountArn</a></code> | Parses a Account ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIArn">parseAPIArn</a></code> | Parses a Api ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIKeyArn">parseAPIKeyArn</a></code> | Parses a ApiKey ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIKeysArn">parseAPIKeysArn</a></code> | Parses a ApiKeys ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIMappingArn">parseAPIMappingArn</a></code> | Parses a ApiMapping ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIMappingsArn">parseAPIMappingsArn</a></code> | Parses a ApiMappings ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseApisArn">parseApisArn</a></code> | Parses a Apis ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseAuthorizerArn">parseAuthorizerArn</a></code> | Parses a Authorizer ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseAuthorizersArn">parseAuthorizersArn</a></code> | Parses a Authorizers ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseAuthorizersCacheArn">parseAuthorizersCacheArn</a></code> | Parses a AuthorizersCache ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseBasePathMappingArn">parseBasePathMappingArn</a></code> | Parses a BasePathMapping ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseBasePathMappingsArn">parseBasePathMappingsArn</a></code> | Parses a BasePathMappings ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseClientCertificateArn">parseClientCertificateArn</a></code> | Parses a ClientCertificate ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseClientCertificatesArn">parseClientCertificatesArn</a></code> | Parses a ClientCertificates ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseCorsArn">parseCorsArn</a></code> | Parses a Cors ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseDeploymentArn">parseDeploymentArn</a></code> | Parses a Deployment ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseDeploymentsArn">parseDeploymentsArn</a></code> | Parses a Deployments ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationPartArn">parseDocumentationPartArn</a></code> | Parses a DocumentationPart ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationPartsArn">parseDocumentationPartsArn</a></code> | Parses a DocumentationParts ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationVersionArn">parseDocumentationVersionArn</a></code> | Parses a DocumentationVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationVersionsArn">parseDocumentationVersionsArn</a></code> | Parses a DocumentationVersions ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNameAccessAssociationArn">parseDomainNameAccessAssociationArn</a></code> | Parses a DomainNameAccessAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNameAccessAssociationsArn">parseDomainNameAccessAssociationsArn</a></code> | Parses a DomainNameAccessAssociations ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNameArn">parseDomainNameArn</a></code> | Parses a DomainName ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNamesArn">parseDomainNamesArn</a></code> | Parses a DomainNames ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseExportedAPIArn">parseExportedAPIArn</a></code> | Parses a ExportedAPI ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseGatewayResponseArn">parseGatewayResponseArn</a></code> | Parses a GatewayResponse ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseGatewayResponsesArn">parseGatewayResponsesArn</a></code> | Parses a GatewayResponses ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationArn">parseIntegrationArn</a></code> | Parses a Integration ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationResponseArn">parseIntegrationResponseArn</a></code> | Parses a IntegrationResponse ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationResponsesArn">parseIntegrationResponsesArn</a></code> | Parses a IntegrationResponses ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationsArn">parseIntegrationsArn</a></code> | Parses a Integrations ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseMethodArn">parseMethodArn</a></code> | Parses a Method ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseMethodResponseArn">parseMethodResponseArn</a></code> | Parses a MethodResponse ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseModelArn">parseModelArn</a></code> | Parses a Model ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseModelsArn">parseModelsArn</a></code> | Parses a Models ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseModelTemplateArn">parseModelTemplateArn</a></code> | Parses a ModelTemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parsePortalArn">parsePortalArn</a></code> | Parses a Portal ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parsePortalProductArn">parsePortalProductArn</a></code> | Parses a PortalProduct ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parsePrivateBasePathMappingArn">parsePrivateBasePathMappingArn</a></code> | Parses a PrivateBasePathMapping ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parsePrivateBasePathMappingsArn">parsePrivateBasePathMappingsArn</a></code> | Parses a PrivateBasePathMappings ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parsePrivateDomainNameArn">parsePrivateDomainNameArn</a></code> | Parses a PrivateDomainName ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseProductPageArn">parseProductPageArn</a></code> | Parses a ProductPage ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseProductRestEndpointPageArn">parseProductRestEndpointPageArn</a></code> | Parses a ProductRestEndpointPage ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRequestValidatorArn">parseRequestValidatorArn</a></code> | Parses a RequestValidator ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRequestValidatorsArn">parseRequestValidatorsArn</a></code> | Parses a RequestValidators ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseResourceArn">parseResourceArn</a></code> | Parses a Resource ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseResourcesArn">parseResourcesArn</a></code> | Parses a Resources ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRestAPIArn">parseRestAPIArn</a></code> | Parses a RestApi ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRestApisArn">parseRestApisArn</a></code> | Parses a RestApis ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteArn">parseRouteArn</a></code> | Parses a Route ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteRequestParameterArn">parseRouteRequestParameterArn</a></code> | Parses a RouteRequestParameter ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteResponseArn">parseRouteResponseArn</a></code> | Parses a RouteResponse ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteResponsesArn">parseRouteResponsesArn</a></code> | Parses a RouteResponses ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRoutesArn">parseRoutesArn</a></code> | Parses a Routes ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteSettingsArn">parseRouteSettingsArn</a></code> | Parses a RouteSettings ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseRoutingRuleArn">parseRoutingRuleArn</a></code> | Parses a RoutingRule ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseSDKArn">parseSDKArn</a></code> | Parses a Sdk ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseStageArn">parseStageArn</a></code> | Parses a Stage ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseStagesArn">parseStagesArn</a></code> | Parses a Stages ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseTagsArn">parseTagsArn</a></code> | Parses a Tags ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseTemplateArn">parseTemplateArn</a></code> | Parses a Template ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlanArn">parseUsagePlanArn</a></code> | Parses a UsagePlan ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlanKeyArn">parseUsagePlanKeyArn</a></code> | Parses a UsagePlanKey ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlanKeysArn">parseUsagePlanKeysArn</a></code> | Parses a UsagePlanKeys ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlansArn">parseUsagePlansArn</a></code> | Parses a UsagePlans ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseVPCLinkArn">parseVPCLinkArn</a></code> | Parses a VpcLink ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.parseVPCLinksArn">parseVPCLinksArn</a></code> | Parses a VpcLinks ARN into its components. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.portal">portal</a></code> | Builds an ARN for the Portal resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.portalProduct">portalProduct</a></code> | Builds an ARN for the PortalProduct resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.privateBasePathMapping">privateBasePathMapping</a></code> | Builds an ARN for the PrivateBasePathMapping resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.privateBasePathMappings">privateBasePathMappings</a></code> | Builds an ARN for the PrivateBasePathMappings resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.privateDomainName">privateDomainName</a></code> | Builds an ARN for the PrivateDomainName resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.productPage">productPage</a></code> | Builds an ARN for the ProductPage resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.productRestEndpointPage">productRestEndpointPage</a></code> | Builds an ARN for the ProductRestEndpointPage resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.requestValidator">requestValidator</a></code> | Builds an ARN for the RequestValidator resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.requestValidators">requestValidators</a></code> | Builds an ARN for the RequestValidators resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.resource">resource</a></code> | Builds an ARN for the Resource resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.resources">resources</a></code> | Builds an ARN for the Resources resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.restAPI">restAPI</a></code> | Builds an ARN for the RestApi resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.restApis">restApis</a></code> | Builds an ARN for the RestApis resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.route">route</a></code> | Builds an ARN for the Route resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.routeRequestParameter">routeRequestParameter</a></code> | Builds an ARN for the RouteRequestParameter resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.routeResponse">routeResponse</a></code> | Builds an ARN for the RouteResponse resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.routeResponses">routeResponses</a></code> | Builds an ARN for the RouteResponses resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.routes">routes</a></code> | Builds an ARN for the Routes resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.routeSettings">routeSettings</a></code> | Builds an ARN for the RouteSettings resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.routingRule">routingRule</a></code> | Builds an ARN for the RoutingRule resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.sdk">sdk</a></code> | Builds an ARN for the Sdk resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.stagesVariant1">stagesVariant1</a></code> | Builds an ARN for the StagesVariant1 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.stagesVariant2">stagesVariant2</a></code> | Builds an ARN for the StagesVariant2 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.stageVariant1">stageVariant1</a></code> | Builds an ARN for the StageVariant1 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.stageVariant2">stageVariant2</a></code> | Builds an ARN for the StageVariant2 resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.tags">tags</a></code> | Builds an ARN for the Tags resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.template">template</a></code> | Builds an ARN for the Template resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlan">usagePlan</a></code> | Builds an ARN for the UsagePlan resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlanKey">usagePlanKey</a></code> | Builds an ARN for the UsagePlanKey resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlanKeys">usagePlanKeys</a></code> | Builds an ARN for the UsagePlanKeys resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlans">usagePlans</a></code> | Builds an ARN for the UsagePlans resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.vpcLink">vpcLink</a></code> | Builds an ARN for the VpcLink resource. |
| <code><a href="#@cdk_utils/iam.apigateway.ApiGatewayResources.vpcLinks">vpcLinks</a></code> | Builds an ARN for the VpcLinks resource. |

---

##### `accessLogSettings` <a name="accessLogSettings" id="@cdk_utils/iam.apigateway.ApiGatewayResources.accessLogSettings"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.accessLogSettings(props: ApiGatewayAccessLogSettingsArnProps)
```

Builds an ARN for the AccessLogSettings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.accessLogSettings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAccessLogSettingsArnProps">ApiGatewayAccessLogSettingsArnProps</a>

---

##### `account` <a name="account" id="@cdk_utils/iam.apigateway.ApiGatewayResources.account"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.account(props: ApiGatewayAccountArnProps)
```

Builds an ARN for the Account resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.account.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAccountArnProps">ApiGatewayAccountArnProps</a>

---

##### `api` <a name="api" id="@cdk_utils/iam.apigateway.ApiGatewayResources.api"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.api(props: ApiGatewayAPIArnProps)
```

Builds an ARN for the Api resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.api.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIArnProps">ApiGatewayAPIArnProps</a>

---

##### `apiKey` <a name="apiKey" id="@cdk_utils/iam.apigateway.ApiGatewayResources.apiKey"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.apiKey(props: ApiGatewayAPIKeyArnProps)
```

Builds an ARN for the ApiKey resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.apiKey.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeyArnProps">ApiGatewayAPIKeyArnProps</a>

---

##### `apiKeys` <a name="apiKeys" id="@cdk_utils/iam.apigateway.ApiGatewayResources.apiKeys"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.apiKeys(props: ApiGatewayAPIKeysArnProps)
```

Builds an ARN for the ApiKeys resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.apiKeys.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIKeysArnProps">ApiGatewayAPIKeysArnProps</a>

---

##### `apiMapping` <a name="apiMapping" id="@cdk_utils/iam.apigateway.ApiGatewayResources.apiMapping"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.apiMapping(props: ApiGatewayAPIMappingArnProps)
```

Builds an ARN for the ApiMapping resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.apiMapping.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingArnProps">ApiGatewayAPIMappingArnProps</a>

---

##### `apiMappings` <a name="apiMappings" id="@cdk_utils/iam.apigateway.ApiGatewayResources.apiMappings"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.apiMappings(props: ApiGatewayAPIMappingsArnProps)
```

Builds an ARN for the ApiMappings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.apiMappings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAPIMappingsArnProps">ApiGatewayAPIMappingsArnProps</a>

---

##### `apis` <a name="apis" id="@cdk_utils/iam.apigateway.ApiGatewayResources.apis"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.apis(props: ApiGatewayApisArnProps)
```

Builds an ARN for the Apis resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.apis.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayApisArnProps">ApiGatewayApisArnProps</a>

---

##### `authorizersCache` <a name="authorizersCache" id="@cdk_utils/iam.apigateway.ApiGatewayResources.authorizersCache"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.authorizersCache(props: ApiGatewayAuthorizersCacheArnProps)
```

Builds an ARN for the AuthorizersCache resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.authorizersCache.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersCacheArnProps">ApiGatewayAuthorizersCacheArnProps</a>

---

##### `authorizersVariant1` <a name="authorizersVariant1" id="@cdk_utils/iam.apigateway.ApiGatewayResources.authorizersVariant1"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.authorizersVariant1(props: ApiGatewayAuthorizersVariant1ArnProps)
```

Builds an ARN for the AuthorizersVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.authorizersVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant1ArnProps">ApiGatewayAuthorizersVariant1ArnProps</a>

---

##### `authorizersVariant2` <a name="authorizersVariant2" id="@cdk_utils/iam.apigateway.ApiGatewayResources.authorizersVariant2"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.authorizersVariant2(props: ApiGatewayAuthorizersVariant2ArnProps)
```

Builds an ARN for the AuthorizersVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.authorizersVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizersVariant2ArnProps">ApiGatewayAuthorizersVariant2ArnProps</a>

---

##### `authorizerVariant1` <a name="authorizerVariant1" id="@cdk_utils/iam.apigateway.ApiGatewayResources.authorizerVariant1"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.authorizerVariant1(props: ApiGatewayAuthorizerVariant1ArnProps)
```

Builds an ARN for the AuthorizerVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.authorizerVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant1ArnProps">ApiGatewayAuthorizerVariant1ArnProps</a>

---

##### `authorizerVariant2` <a name="authorizerVariant2" id="@cdk_utils/iam.apigateway.ApiGatewayResources.authorizerVariant2"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.authorizerVariant2(props: ApiGatewayAuthorizerVariant2ArnProps)
```

Builds an ARN for the AuthorizerVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.authorizerVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayAuthorizerVariant2ArnProps">ApiGatewayAuthorizerVariant2ArnProps</a>

---

##### `basePathMapping` <a name="basePathMapping" id="@cdk_utils/iam.apigateway.ApiGatewayResources.basePathMapping"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.basePathMapping(props: ApiGatewayBasePathMappingArnProps)
```

Builds an ARN for the BasePathMapping resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.basePathMapping.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingArnProps">ApiGatewayBasePathMappingArnProps</a>

---

##### `basePathMappings` <a name="basePathMappings" id="@cdk_utils/iam.apigateway.ApiGatewayResources.basePathMappings"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.basePathMappings(props: ApiGatewayBasePathMappingsArnProps)
```

Builds an ARN for the BasePathMappings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.basePathMappings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayBasePathMappingsArnProps">ApiGatewayBasePathMappingsArnProps</a>

---

##### `clientCertificate` <a name="clientCertificate" id="@cdk_utils/iam.apigateway.ApiGatewayResources.clientCertificate"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.clientCertificate(props: ApiGatewayClientCertificateArnProps)
```

Builds an ARN for the ClientCertificate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.clientCertificate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificateArnProps">ApiGatewayClientCertificateArnProps</a>

---

##### `clientCertificates` <a name="clientCertificates" id="@cdk_utils/iam.apigateway.ApiGatewayResources.clientCertificates"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.clientCertificates(props: ApiGatewayClientCertificatesArnProps)
```

Builds an ARN for the ClientCertificates resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.clientCertificates.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayClientCertificatesArnProps">ApiGatewayClientCertificatesArnProps</a>

---

##### `cors` <a name="cors" id="@cdk_utils/iam.apigateway.ApiGatewayResources.cors"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.cors(props: ApiGatewayCorsArnProps)
```

Builds an ARN for the Cors resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.cors.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayCorsArnProps">ApiGatewayCorsArnProps</a>

---

##### `deploymentsVariant1` <a name="deploymentsVariant1" id="@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentsVariant1"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.deploymentsVariant1(props: ApiGatewayDeploymentsVariant1ArnProps)
```

Builds an ARN for the DeploymentsVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentsVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant1ArnProps">ApiGatewayDeploymentsVariant1ArnProps</a>

---

##### `deploymentsVariant2` <a name="deploymentsVariant2" id="@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentsVariant2"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.deploymentsVariant2(props: ApiGatewayDeploymentsVariant2ArnProps)
```

Builds an ARN for the DeploymentsVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentsVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentsVariant2ArnProps">ApiGatewayDeploymentsVariant2ArnProps</a>

---

##### `deploymentVariant1` <a name="deploymentVariant1" id="@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentVariant1"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.deploymentVariant1(props: ApiGatewayDeploymentVariant1ArnProps)
```

Builds an ARN for the DeploymentVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant1ArnProps">ApiGatewayDeploymentVariant1ArnProps</a>

---

##### `deploymentVariant2` <a name="deploymentVariant2" id="@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentVariant2"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.deploymentVariant2(props: ApiGatewayDeploymentVariant2ArnProps)
```

Builds an ARN for the DeploymentVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.deploymentVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDeploymentVariant2ArnProps">ApiGatewayDeploymentVariant2ArnProps</a>

---

##### `documentationPart` <a name="documentationPart" id="@cdk_utils/iam.apigateway.ApiGatewayResources.documentationPart"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.documentationPart(props: ApiGatewayDocumentationPartArnProps)
```

Builds an ARN for the DocumentationPart resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.documentationPart.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartArnProps">ApiGatewayDocumentationPartArnProps</a>

---

##### `documentationParts` <a name="documentationParts" id="@cdk_utils/iam.apigateway.ApiGatewayResources.documentationParts"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.documentationParts(props: ApiGatewayDocumentationPartsArnProps)
```

Builds an ARN for the DocumentationParts resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.documentationParts.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationPartsArnProps">ApiGatewayDocumentationPartsArnProps</a>

---

##### `documentationVersion` <a name="documentationVersion" id="@cdk_utils/iam.apigateway.ApiGatewayResources.documentationVersion"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.documentationVersion(props: ApiGatewayDocumentationVersionArnProps)
```

Builds an ARN for the DocumentationVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.documentationVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionArnProps">ApiGatewayDocumentationVersionArnProps</a>

---

##### `documentationVersions` <a name="documentationVersions" id="@cdk_utils/iam.apigateway.ApiGatewayResources.documentationVersions"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.documentationVersions(props: ApiGatewayDocumentationVersionsArnProps)
```

Builds an ARN for the DocumentationVersions resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.documentationVersions.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDocumentationVersionsArnProps">ApiGatewayDocumentationVersionsArnProps</a>

---

##### `domainName` <a name="domainName" id="@cdk_utils/iam.apigateway.ApiGatewayResources.domainName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.domainName(props: ApiGatewayDomainNameArnProps)
```

Builds an ARN for the DomainName resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.domainName.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameArnProps">ApiGatewayDomainNameArnProps</a>

---

##### `domainNameAccessAssociation` <a name="domainNameAccessAssociation" id="@cdk_utils/iam.apigateway.ApiGatewayResources.domainNameAccessAssociation"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.domainNameAccessAssociation(props: ApiGatewayDomainNameAccessAssociationArnProps)
```

Builds an ARN for the DomainNameAccessAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.domainNameAccessAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationArnProps">ApiGatewayDomainNameAccessAssociationArnProps</a>

---

##### `domainNameAccessAssociations` <a name="domainNameAccessAssociations" id="@cdk_utils/iam.apigateway.ApiGatewayResources.domainNameAccessAssociations"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.domainNameAccessAssociations(props: ApiGatewayDomainNameAccessAssociationsArnProps)
```

Builds an ARN for the DomainNameAccessAssociations resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.domainNameAccessAssociations.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNameAccessAssociationsArnProps">ApiGatewayDomainNameAccessAssociationsArnProps</a>

---

##### `domainNames` <a name="domainNames" id="@cdk_utils/iam.apigateway.ApiGatewayResources.domainNames"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.domainNames(props: ApiGatewayDomainNamesArnProps)
```

Builds an ARN for the DomainNames resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.domainNames.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayDomainNamesArnProps">ApiGatewayDomainNamesArnProps</a>

---

##### `exportedAPI` <a name="exportedAPI" id="@cdk_utils/iam.apigateway.ApiGatewayResources.exportedAPI"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.exportedAPI(props: ApiGatewayExportedAPIArnProps)
```

Builds an ARN for the ExportedAPI resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.exportedAPI.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayExportedAPIArnProps">ApiGatewayExportedAPIArnProps</a>

---

##### `gatewayResponse` <a name="gatewayResponse" id="@cdk_utils/iam.apigateway.ApiGatewayResources.gatewayResponse"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.gatewayResponse(props: ApiGatewayGatewayResponseArnProps)
```

Builds an ARN for the GatewayResponse resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.gatewayResponse.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponseArnProps">ApiGatewayGatewayResponseArnProps</a>

---

##### `gatewayResponses` <a name="gatewayResponses" id="@cdk_utils/iam.apigateway.ApiGatewayResources.gatewayResponses"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.gatewayResponses(props: ApiGatewayGatewayResponsesArnProps)
```

Builds an ARN for the GatewayResponses resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.gatewayResponses.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayGatewayResponsesArnProps">ApiGatewayGatewayResponsesArnProps</a>

---

##### `integrationResponses` <a name="integrationResponses" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrationResponses"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.integrationResponses(props: ApiGatewayIntegrationResponsesArnProps)
```

Builds an ARN for the IntegrationResponses resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrationResponses.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponsesArnProps">ApiGatewayIntegrationResponsesArnProps</a>

---

##### `integrationResponseVariant1` <a name="integrationResponseVariant1" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrationResponseVariant1"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.integrationResponseVariant1(props: ApiGatewayIntegrationResponseVariant1ArnProps)
```

Builds an ARN for the IntegrationResponseVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrationResponseVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant1ArnProps">ApiGatewayIntegrationResponseVariant1ArnProps</a>

---

##### `integrationResponseVariant2` <a name="integrationResponseVariant2" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrationResponseVariant2"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.integrationResponseVariant2(props: ApiGatewayIntegrationResponseVariant2ArnProps)
```

Builds an ARN for the IntegrationResponseVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrationResponseVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationResponseVariant2ArnProps">ApiGatewayIntegrationResponseVariant2ArnProps</a>

---

##### `integrations` <a name="integrations" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrations"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.integrations(props: ApiGatewayIntegrationsArnProps)
```

Builds an ARN for the Integrations resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrations.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationsArnProps">ApiGatewayIntegrationsArnProps</a>

---

##### `integrationVariant1` <a name="integrationVariant1" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrationVariant1"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.integrationVariant1(props: ApiGatewayIntegrationVariant1ArnProps)
```

Builds an ARN for the IntegrationVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrationVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant1ArnProps">ApiGatewayIntegrationVariant1ArnProps</a>

---

##### `integrationVariant2` <a name="integrationVariant2" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrationVariant2"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.integrationVariant2(props: ApiGatewayIntegrationVariant2ArnProps)
```

Builds an ARN for the IntegrationVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.integrationVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayIntegrationVariant2ArnProps">ApiGatewayIntegrationVariant2ArnProps</a>

---

##### `isValidAccessLogSettingsArn` <a name="isValidAccessLogSettingsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAccessLogSettingsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidAccessLogSettingsArn(arn: string)
```

Validates whether a string is a valid ARN for the AccessLogSettings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAccessLogSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAccountArn` <a name="isValidAccountArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAccountArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidAccountArn(arn: string)
```

Validates whether a string is a valid ARN for the Account resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAPIArn` <a name="isValidAPIArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidAPIArn(arn: string)
```

Validates whether a string is a valid ARN for the Api resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAPIKeyArn` <a name="isValidAPIKeyArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIKeyArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidAPIKeyArn(arn: string)
```

Validates whether a string is a valid ARN for the ApiKey resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAPIKeysArn` <a name="isValidAPIKeysArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIKeysArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidAPIKeysArn(arn: string)
```

Validates whether a string is a valid ARN for the ApiKeys resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIKeysArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAPIMappingArn` <a name="isValidAPIMappingArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIMappingArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidAPIMappingArn(arn: string)
```

Validates whether a string is a valid ARN for the ApiMapping resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIMappingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAPIMappingsArn` <a name="isValidAPIMappingsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIMappingsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidAPIMappingsArn(arn: string)
```

Validates whether a string is a valid ARN for the ApiMappings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAPIMappingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApisArn` <a name="isValidApisArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidApisArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidApisArn(arn: string)
```

Validates whether a string is a valid ARN for the Apis resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidApisArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAuthorizerArn` <a name="isValidAuthorizerArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAuthorizerArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidAuthorizerArn(arn: string)
```

Validates whether a string is a valid ARN for the Authorizer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAuthorizerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAuthorizersArn` <a name="isValidAuthorizersArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAuthorizersArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidAuthorizersArn(arn: string)
```

Validates whether a string is a valid ARN for the Authorizers resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAuthorizersArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAuthorizersCacheArn` <a name="isValidAuthorizersCacheArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAuthorizersCacheArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidAuthorizersCacheArn(arn: string)
```

Validates whether a string is a valid ARN for the AuthorizersCache resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidAuthorizersCacheArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBasePathMappingArn` <a name="isValidBasePathMappingArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidBasePathMappingArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidBasePathMappingArn(arn: string)
```

Validates whether a string is a valid ARN for the BasePathMapping resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidBasePathMappingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBasePathMappingsArn` <a name="isValidBasePathMappingsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidBasePathMappingsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidBasePathMappingsArn(arn: string)
```

Validates whether a string is a valid ARN for the BasePathMappings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidBasePathMappingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClientCertificateArn` <a name="isValidClientCertificateArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidClientCertificateArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidClientCertificateArn(arn: string)
```

Validates whether a string is a valid ARN for the ClientCertificate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidClientCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClientCertificatesArn` <a name="isValidClientCertificatesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidClientCertificatesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidClientCertificatesArn(arn: string)
```

Validates whether a string is a valid ARN for the ClientCertificates resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidClientCertificatesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCorsArn` <a name="isValidCorsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidCorsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidCorsArn(arn: string)
```

Validates whether a string is a valid ARN for the Cors resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidCorsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentArn` <a name="isValidDeploymentArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDeploymentArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the Deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentsArn` <a name="isValidDeploymentsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDeploymentsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidDeploymentsArn(arn: string)
```

Validates whether a string is a valid ARN for the Deployments resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDeploymentsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDocumentationPartArn` <a name="isValidDocumentationPartArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationPartArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidDocumentationPartArn(arn: string)
```

Validates whether a string is a valid ARN for the DocumentationPart resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationPartArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDocumentationPartsArn` <a name="isValidDocumentationPartsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationPartsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidDocumentationPartsArn(arn: string)
```

Validates whether a string is a valid ARN for the DocumentationParts resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationPartsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDocumentationVersionArn` <a name="isValidDocumentationVersionArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationVersionArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidDocumentationVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the DocumentationVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDocumentationVersionsArn` <a name="isValidDocumentationVersionsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationVersionsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidDocumentationVersionsArn(arn: string)
```

Validates whether a string is a valid ARN for the DocumentationVersions resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDocumentationVersionsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainNameAccessAssociationArn` <a name="isValidDomainNameAccessAssociationArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNameAccessAssociationArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidDomainNameAccessAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the DomainNameAccessAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNameAccessAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainNameAccessAssociationsArn` <a name="isValidDomainNameAccessAssociationsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNameAccessAssociationsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidDomainNameAccessAssociationsArn(arn: string)
```

Validates whether a string is a valid ARN for the DomainNameAccessAssociations resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNameAccessAssociationsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainNameArn` <a name="isValidDomainNameArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNameArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidDomainNameArn(arn: string)
```

Validates whether a string is a valid ARN for the DomainName resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNameArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainNamesArn` <a name="isValidDomainNamesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNamesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidDomainNamesArn(arn: string)
```

Validates whether a string is a valid ARN for the DomainNames resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidDomainNamesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExportedAPIArn` <a name="isValidExportedAPIArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidExportedAPIArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidExportedAPIArn(arn: string)
```

Validates whether a string is a valid ARN for the ExportedAPI resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidExportedAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGatewayResponseArn` <a name="isValidGatewayResponseArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidGatewayResponseArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidGatewayResponseArn(arn: string)
```

Validates whether a string is a valid ARN for the GatewayResponse resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidGatewayResponseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGatewayResponsesArn` <a name="isValidGatewayResponsesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidGatewayResponsesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidGatewayResponsesArn(arn: string)
```

Validates whether a string is a valid ARN for the GatewayResponses resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidGatewayResponsesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationArn` <a name="isValidIntegrationArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the Integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationResponseArn` <a name="isValidIntegrationResponseArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationResponseArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidIntegrationResponseArn(arn: string)
```

Validates whether a string is a valid ARN for the IntegrationResponse resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationResponseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationResponsesArn` <a name="isValidIntegrationResponsesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationResponsesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidIntegrationResponsesArn(arn: string)
```

Validates whether a string is a valid ARN for the IntegrationResponses resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationResponsesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationsArn` <a name="isValidIntegrationsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidIntegrationsArn(arn: string)
```

Validates whether a string is a valid ARN for the Integrations resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidIntegrationsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMethodArn` <a name="isValidMethodArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidMethodArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidMethodArn(arn: string)
```

Validates whether a string is a valid ARN for the Method resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidMethodArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMethodResponseArn` <a name="isValidMethodResponseArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidMethodResponseArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidMethodResponseArn(arn: string)
```

Validates whether a string is a valid ARN for the MethodResponse resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidMethodResponseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelArn` <a name="isValidModelArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidModelArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidModelArn(arn: string)
```

Validates whether a string is a valid ARN for the Model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelsArn` <a name="isValidModelsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidModelsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidModelsArn(arn: string)
```

Validates whether a string is a valid ARN for the Models resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidModelsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelTemplateArn` <a name="isValidModelTemplateArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidModelTemplateArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidModelTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the ModelTemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidModelTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPortalArn` <a name="isValidPortalArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPortalArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidPortalArn(arn: string)
```

Validates whether a string is a valid ARN for the Portal resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPortalArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPortalProductArn` <a name="isValidPortalProductArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPortalProductArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidPortalProductArn(arn: string)
```

Validates whether a string is a valid ARN for the PortalProduct resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPortalProductArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPrivateBasePathMappingArn` <a name="isValidPrivateBasePathMappingArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPrivateBasePathMappingArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidPrivateBasePathMappingArn(arn: string)
```

Validates whether a string is a valid ARN for the PrivateBasePathMapping resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPrivateBasePathMappingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPrivateBasePathMappingsArn` <a name="isValidPrivateBasePathMappingsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPrivateBasePathMappingsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidPrivateBasePathMappingsArn(arn: string)
```

Validates whether a string is a valid ARN for the PrivateBasePathMappings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPrivateBasePathMappingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPrivateDomainNameArn` <a name="isValidPrivateDomainNameArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPrivateDomainNameArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidPrivateDomainNameArn(arn: string)
```

Validates whether a string is a valid ARN for the PrivateDomainName resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidPrivateDomainNameArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProductPageArn` <a name="isValidProductPageArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidProductPageArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidProductPageArn(arn: string)
```

Validates whether a string is a valid ARN for the ProductPage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidProductPageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProductRestEndpointPageArn` <a name="isValidProductRestEndpointPageArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidProductRestEndpointPageArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidProductRestEndpointPageArn(arn: string)
```

Validates whether a string is a valid ARN for the ProductRestEndpointPage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidProductRestEndpointPageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRequestValidatorArn` <a name="isValidRequestValidatorArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRequestValidatorArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRequestValidatorArn(arn: string)
```

Validates whether a string is a valid ARN for the RequestValidator resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRequestValidatorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRequestValidatorsArn` <a name="isValidRequestValidatorsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRequestValidatorsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRequestValidatorsArn(arn: string)
```

Validates whether a string is a valid ARN for the RequestValidators resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRequestValidatorsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceArn` <a name="isValidResourceArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidResourceArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the Resource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourcesArn` <a name="isValidResourcesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidResourcesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidResourcesArn(arn: string)
```

Validates whether a string is a valid ARN for the Resources resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidResourcesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRestAPIArn` <a name="isValidRestAPIArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRestAPIArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRestAPIArn(arn: string)
```

Validates whether a string is a valid ARN for the RestApi resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRestAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRestApisArn` <a name="isValidRestApisArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRestApisArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRestApisArn(arn: string)
```

Validates whether a string is a valid ARN for the RestApis resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRestApisArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouteArn` <a name="isValidRouteArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRouteArn(arn: string)
```

Validates whether a string is a valid ARN for the Route resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouteRequestParameterArn` <a name="isValidRouteRequestParameterArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteRequestParameterArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRouteRequestParameterArn(arn: string)
```

Validates whether a string is a valid ARN for the RouteRequestParameter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteRequestParameterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouteResponseArn` <a name="isValidRouteResponseArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteResponseArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRouteResponseArn(arn: string)
```

Validates whether a string is a valid ARN for the RouteResponse resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteResponseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouteResponsesArn` <a name="isValidRouteResponsesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteResponsesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRouteResponsesArn(arn: string)
```

Validates whether a string is a valid ARN for the RouteResponses resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteResponsesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRoutesArn` <a name="isValidRoutesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRoutesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRoutesArn(arn: string)
```

Validates whether a string is a valid ARN for the Routes resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRoutesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouteSettingsArn` <a name="isValidRouteSettingsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteSettingsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRouteSettingsArn(arn: string)
```

Validates whether a string is a valid ARN for the RouteSettings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRouteSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRoutingRuleArn` <a name="isValidRoutingRuleArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRoutingRuleArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidRoutingRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the RoutingRule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidRoutingRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSDKArn` <a name="isValidSDKArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidSDKArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidSDKArn(arn: string)
```

Validates whether a string is a valid ARN for the Sdk resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidSDKArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStageArn` <a name="isValidStageArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidStageArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidStageArn(arn: string)
```

Validates whether a string is a valid ARN for the Stage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidStageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStagesArn` <a name="isValidStagesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidStagesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidStagesArn(arn: string)
```

Validates whether a string is a valid ARN for the Stages resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidStagesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTagsArn` <a name="isValidTagsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidTagsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidTagsArn(arn: string)
```

Validates whether a string is a valid ARN for the Tags resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidTagsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTemplateArn` <a name="isValidTemplateArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidTemplateArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the Template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUsagePlanArn` <a name="isValidUsagePlanArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlanArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidUsagePlanArn(arn: string)
```

Validates whether a string is a valid ARN for the UsagePlan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlanArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUsagePlanKeyArn` <a name="isValidUsagePlanKeyArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlanKeyArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidUsagePlanKeyArn(arn: string)
```

Validates whether a string is a valid ARN for the UsagePlanKey resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlanKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUsagePlanKeysArn` <a name="isValidUsagePlanKeysArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlanKeysArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidUsagePlanKeysArn(arn: string)
```

Validates whether a string is a valid ARN for the UsagePlanKeys resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlanKeysArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUsagePlansArn` <a name="isValidUsagePlansArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlansArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidUsagePlansArn(arn: string)
```

Validates whether a string is a valid ARN for the UsagePlans resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidUsagePlansArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVPCLinkArn` <a name="isValidVPCLinkArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidVPCLinkArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidVPCLinkArn(arn: string)
```

Validates whether a string is a valid ARN for the VpcLink resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidVPCLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVPCLinksArn` <a name="isValidVPCLinksArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidVPCLinksArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.isValidVPCLinksArn(arn: string)
```

Validates whether a string is a valid ARN for the VpcLinks resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.isValidVPCLinksArn.parameter.arn"></a>

- *Type:* string

---

##### `method` <a name="method" id="@cdk_utils/iam.apigateway.ApiGatewayResources.method"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.method(props: ApiGatewayMethodArnProps)
```

Builds an ARN for the Method resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.method.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodArnProps">ApiGatewayMethodArnProps</a>

---

##### `methodResponse` <a name="methodResponse" id="@cdk_utils/iam.apigateway.ApiGatewayResources.methodResponse"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.methodResponse(props: ApiGatewayMethodResponseArnProps)
```

Builds an ARN for the MethodResponse resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.methodResponse.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayMethodResponseArnProps">ApiGatewayMethodResponseArnProps</a>

---

##### `modelsVariant1` <a name="modelsVariant1" id="@cdk_utils/iam.apigateway.ApiGatewayResources.modelsVariant1"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.modelsVariant1(props: ApiGatewayModelsVariant1ArnProps)
```

Builds an ARN for the ModelsVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.modelsVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsVariant1ArnProps">ApiGatewayModelsVariant1ArnProps</a>

---

##### `modelsVariant2` <a name="modelsVariant2" id="@cdk_utils/iam.apigateway.ApiGatewayResources.modelsVariant2"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.modelsVariant2(props: ApiGatewayModelsVariant2ArnProps)
```

Builds an ARN for the ModelsVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.modelsVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayModelsVariant2ArnProps">ApiGatewayModelsVariant2ArnProps</a>

---

##### `modelTemplate` <a name="modelTemplate" id="@cdk_utils/iam.apigateway.ApiGatewayResources.modelTemplate"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.modelTemplate(props: ApiGatewayModelTemplateArnProps)
```

Builds an ARN for the ModelTemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.modelTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayModelTemplateArnProps">ApiGatewayModelTemplateArnProps</a>

---

##### `modelVariant1` <a name="modelVariant1" id="@cdk_utils/iam.apigateway.ApiGatewayResources.modelVariant1"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.modelVariant1(props: ApiGatewayModelVariant1ArnProps)
```

Builds an ARN for the ModelVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.modelVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant1ArnProps">ApiGatewayModelVariant1ArnProps</a>

---

##### `modelVariant2` <a name="modelVariant2" id="@cdk_utils/iam.apigateway.ApiGatewayResources.modelVariant2"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.modelVariant2(props: ApiGatewayModelVariant2ArnProps)
```

Builds an ARN for the ModelVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.modelVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayModelVariant2ArnProps">ApiGatewayModelVariant2ArnProps</a>

---

##### `parseAccessLogSettingsArn` <a name="parseAccessLogSettingsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAccessLogSettingsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseAccessLogSettingsArn(arn: string)
```

Parses a AccessLogSettings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAccessLogSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccountArn` <a name="parseAccountArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAccountArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseAccountArn(arn: string)
```

Parses a Account ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAPIArn` <a name="parseAPIArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseAPIArn(arn: string)
```

Parses a Api ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAPIKeyArn` <a name="parseAPIKeyArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIKeyArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseAPIKeyArn(arn: string)
```

Parses a ApiKey ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAPIKeysArn` <a name="parseAPIKeysArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIKeysArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseAPIKeysArn(arn: string)
```

Parses a ApiKeys ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIKeysArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAPIMappingArn` <a name="parseAPIMappingArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIMappingArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseAPIMappingArn(arn: string)
```

Parses a ApiMapping ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIMappingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAPIMappingsArn` <a name="parseAPIMappingsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIMappingsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseAPIMappingsArn(arn: string)
```

Parses a ApiMappings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAPIMappingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApisArn` <a name="parseApisArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseApisArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseApisArn(arn: string)
```

Parses a Apis ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseApisArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAuthorizerArn` <a name="parseAuthorizerArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAuthorizerArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseAuthorizerArn(arn: string)
```

Parses a Authorizer ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAuthorizerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAuthorizersArn` <a name="parseAuthorizersArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAuthorizersArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseAuthorizersArn(arn: string)
```

Parses a Authorizers ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAuthorizersArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAuthorizersCacheArn` <a name="parseAuthorizersCacheArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAuthorizersCacheArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseAuthorizersCacheArn(arn: string)
```

Parses a AuthorizersCache ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseAuthorizersCacheArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBasePathMappingArn` <a name="parseBasePathMappingArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseBasePathMappingArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseBasePathMappingArn(arn: string)
```

Parses a BasePathMapping ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseBasePathMappingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBasePathMappingsArn` <a name="parseBasePathMappingsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseBasePathMappingsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseBasePathMappingsArn(arn: string)
```

Parses a BasePathMappings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseBasePathMappingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClientCertificateArn` <a name="parseClientCertificateArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseClientCertificateArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseClientCertificateArn(arn: string)
```

Parses a ClientCertificate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseClientCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClientCertificatesArn` <a name="parseClientCertificatesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseClientCertificatesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseClientCertificatesArn(arn: string)
```

Parses a ClientCertificates ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseClientCertificatesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCorsArn` <a name="parseCorsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseCorsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseCorsArn(arn: string)
```

Parses a Cors ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseCorsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentArn` <a name="parseDeploymentArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDeploymentArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseDeploymentArn(arn: string)
```

Parses a Deployment ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentsArn` <a name="parseDeploymentsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDeploymentsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseDeploymentsArn(arn: string)
```

Parses a Deployments ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDeploymentsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDocumentationPartArn` <a name="parseDocumentationPartArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationPartArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseDocumentationPartArn(arn: string)
```

Parses a DocumentationPart ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationPartArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDocumentationPartsArn` <a name="parseDocumentationPartsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationPartsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseDocumentationPartsArn(arn: string)
```

Parses a DocumentationParts ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationPartsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDocumentationVersionArn` <a name="parseDocumentationVersionArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationVersionArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseDocumentationVersionArn(arn: string)
```

Parses a DocumentationVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDocumentationVersionsArn` <a name="parseDocumentationVersionsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationVersionsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseDocumentationVersionsArn(arn: string)
```

Parses a DocumentationVersions ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDocumentationVersionsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainNameAccessAssociationArn` <a name="parseDomainNameAccessAssociationArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNameAccessAssociationArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseDomainNameAccessAssociationArn(arn: string)
```

Parses a DomainNameAccessAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNameAccessAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainNameAccessAssociationsArn` <a name="parseDomainNameAccessAssociationsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNameAccessAssociationsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseDomainNameAccessAssociationsArn(arn: string)
```

Parses a DomainNameAccessAssociations ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNameAccessAssociationsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainNameArn` <a name="parseDomainNameArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNameArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseDomainNameArn(arn: string)
```

Parses a DomainName ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNameArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainNamesArn` <a name="parseDomainNamesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNamesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseDomainNamesArn(arn: string)
```

Parses a DomainNames ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseDomainNamesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExportedAPIArn` <a name="parseExportedAPIArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseExportedAPIArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseExportedAPIArn(arn: string)
```

Parses a ExportedAPI ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseExportedAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGatewayResponseArn` <a name="parseGatewayResponseArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseGatewayResponseArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseGatewayResponseArn(arn: string)
```

Parses a GatewayResponse ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseGatewayResponseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGatewayResponsesArn` <a name="parseGatewayResponsesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseGatewayResponsesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseGatewayResponsesArn(arn: string)
```

Parses a GatewayResponses ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseGatewayResponsesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationArn` <a name="parseIntegrationArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseIntegrationArn(arn: string)
```

Parses a Integration ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationResponseArn` <a name="parseIntegrationResponseArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationResponseArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseIntegrationResponseArn(arn: string)
```

Parses a IntegrationResponse ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationResponseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationResponsesArn` <a name="parseIntegrationResponsesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationResponsesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseIntegrationResponsesArn(arn: string)
```

Parses a IntegrationResponses ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationResponsesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationsArn` <a name="parseIntegrationsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseIntegrationsArn(arn: string)
```

Parses a Integrations ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseIntegrationsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMethodArn` <a name="parseMethodArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseMethodArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseMethodArn(arn: string)
```

Parses a Method ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseMethodArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMethodResponseArn` <a name="parseMethodResponseArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseMethodResponseArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseMethodResponseArn(arn: string)
```

Parses a MethodResponse ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseMethodResponseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelArn` <a name="parseModelArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseModelArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseModelArn(arn: string)
```

Parses a Model ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelsArn` <a name="parseModelsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseModelsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseModelsArn(arn: string)
```

Parses a Models ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseModelsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelTemplateArn` <a name="parseModelTemplateArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseModelTemplateArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseModelTemplateArn(arn: string)
```

Parses a ModelTemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseModelTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePortalArn` <a name="parsePortalArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parsePortalArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parsePortalArn(arn: string)
```

Parses a Portal ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parsePortalArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePortalProductArn` <a name="parsePortalProductArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parsePortalProductArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parsePortalProductArn(arn: string)
```

Parses a PortalProduct ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parsePortalProductArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePrivateBasePathMappingArn` <a name="parsePrivateBasePathMappingArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parsePrivateBasePathMappingArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parsePrivateBasePathMappingArn(arn: string)
```

Parses a PrivateBasePathMapping ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parsePrivateBasePathMappingArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePrivateBasePathMappingsArn` <a name="parsePrivateBasePathMappingsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parsePrivateBasePathMappingsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parsePrivateBasePathMappingsArn(arn: string)
```

Parses a PrivateBasePathMappings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parsePrivateBasePathMappingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePrivateDomainNameArn` <a name="parsePrivateDomainNameArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parsePrivateDomainNameArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parsePrivateDomainNameArn(arn: string)
```

Parses a PrivateDomainName ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parsePrivateDomainNameArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProductPageArn` <a name="parseProductPageArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseProductPageArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseProductPageArn(arn: string)
```

Parses a ProductPage ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseProductPageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProductRestEndpointPageArn` <a name="parseProductRestEndpointPageArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseProductRestEndpointPageArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseProductRestEndpointPageArn(arn: string)
```

Parses a ProductRestEndpointPage ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseProductRestEndpointPageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRequestValidatorArn` <a name="parseRequestValidatorArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRequestValidatorArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRequestValidatorArn(arn: string)
```

Parses a RequestValidator ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRequestValidatorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRequestValidatorsArn` <a name="parseRequestValidatorsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRequestValidatorsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRequestValidatorsArn(arn: string)
```

Parses a RequestValidators ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRequestValidatorsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceArn` <a name="parseResourceArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseResourceArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseResourceArn(arn: string)
```

Parses a Resource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourcesArn` <a name="parseResourcesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseResourcesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseResourcesArn(arn: string)
```

Parses a Resources ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseResourcesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRestAPIArn` <a name="parseRestAPIArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRestAPIArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRestAPIArn(arn: string)
```

Parses a RestApi ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRestAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRestApisArn` <a name="parseRestApisArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRestApisArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRestApisArn(arn: string)
```

Parses a RestApis ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRestApisArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouteArn` <a name="parseRouteArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRouteArn(arn: string)
```

Parses a Route ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouteRequestParameterArn` <a name="parseRouteRequestParameterArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteRequestParameterArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRouteRequestParameterArn(arn: string)
```

Parses a RouteRequestParameter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteRequestParameterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouteResponseArn` <a name="parseRouteResponseArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteResponseArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRouteResponseArn(arn: string)
```

Parses a RouteResponse ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteResponseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouteResponsesArn` <a name="parseRouteResponsesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteResponsesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRouteResponsesArn(arn: string)
```

Parses a RouteResponses ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteResponsesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRoutesArn` <a name="parseRoutesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRoutesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRoutesArn(arn: string)
```

Parses a Routes ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRoutesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouteSettingsArn` <a name="parseRouteSettingsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteSettingsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRouteSettingsArn(arn: string)
```

Parses a RouteSettings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRouteSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRoutingRuleArn` <a name="parseRoutingRuleArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRoutingRuleArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseRoutingRuleArn(arn: string)
```

Parses a RoutingRule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseRoutingRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSDKArn` <a name="parseSDKArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseSDKArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseSDKArn(arn: string)
```

Parses a Sdk ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseSDKArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStageArn` <a name="parseStageArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseStageArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseStageArn(arn: string)
```

Parses a Stage ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseStageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStagesArn` <a name="parseStagesArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseStagesArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseStagesArn(arn: string)
```

Parses a Stages ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseStagesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTagsArn` <a name="parseTagsArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseTagsArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseTagsArn(arn: string)
```

Parses a Tags ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseTagsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTemplateArn` <a name="parseTemplateArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseTemplateArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseTemplateArn(arn: string)
```

Parses a Template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUsagePlanArn` <a name="parseUsagePlanArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlanArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseUsagePlanArn(arn: string)
```

Parses a UsagePlan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlanArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUsagePlanKeyArn` <a name="parseUsagePlanKeyArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlanKeyArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseUsagePlanKeyArn(arn: string)
```

Parses a UsagePlanKey ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlanKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUsagePlanKeysArn` <a name="parseUsagePlanKeysArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlanKeysArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseUsagePlanKeysArn(arn: string)
```

Parses a UsagePlanKeys ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlanKeysArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUsagePlansArn` <a name="parseUsagePlansArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlansArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseUsagePlansArn(arn: string)
```

Parses a UsagePlans ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseUsagePlansArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVPCLinkArn` <a name="parseVPCLinkArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseVPCLinkArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseVPCLinkArn(arn: string)
```

Parses a VpcLink ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseVPCLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVPCLinksArn` <a name="parseVPCLinksArn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseVPCLinksArn"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.parseVPCLinksArn(arn: string)
```

Parses a VpcLinks ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apigateway.ApiGatewayResources.parseVPCLinksArn.parameter.arn"></a>

- *Type:* string

---

##### `portal` <a name="portal" id="@cdk_utils/iam.apigateway.ApiGatewayResources.portal"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.portal(props: ApiGatewayPortalArnProps)
```

Builds an ARN for the Portal resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.portal.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalArnProps">ApiGatewayPortalArnProps</a>

---

##### `portalProduct` <a name="portalProduct" id="@cdk_utils/iam.apigateway.ApiGatewayResources.portalProduct"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.portalProduct(props: ApiGatewayPortalProductArnProps)
```

Builds an ARN for the PortalProduct resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.portalProduct.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayPortalProductArnProps">ApiGatewayPortalProductArnProps</a>

---

##### `privateBasePathMapping` <a name="privateBasePathMapping" id="@cdk_utils/iam.apigateway.ApiGatewayResources.privateBasePathMapping"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.privateBasePathMapping(props: ApiGatewayPrivateBasePathMappingArnProps)
```

Builds an ARN for the PrivateBasePathMapping resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.privateBasePathMapping.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingArnProps">ApiGatewayPrivateBasePathMappingArnProps</a>

---

##### `privateBasePathMappings` <a name="privateBasePathMappings" id="@cdk_utils/iam.apigateway.ApiGatewayResources.privateBasePathMappings"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.privateBasePathMappings(props: ApiGatewayPrivateBasePathMappingsArnProps)
```

Builds an ARN for the PrivateBasePathMappings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.privateBasePathMappings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateBasePathMappingsArnProps">ApiGatewayPrivateBasePathMappingsArnProps</a>

---

##### `privateDomainName` <a name="privateDomainName" id="@cdk_utils/iam.apigateway.ApiGatewayResources.privateDomainName"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.privateDomainName(props: ApiGatewayPrivateDomainNameArnProps)
```

Builds an ARN for the PrivateDomainName resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.privateDomainName.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayPrivateDomainNameArnProps">ApiGatewayPrivateDomainNameArnProps</a>

---

##### `productPage` <a name="productPage" id="@cdk_utils/iam.apigateway.ApiGatewayResources.productPage"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.productPage(props: ApiGatewayProductPageArnProps)
```

Builds an ARN for the ProductPage resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.productPage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayProductPageArnProps">ApiGatewayProductPageArnProps</a>

---

##### `productRestEndpointPage` <a name="productRestEndpointPage" id="@cdk_utils/iam.apigateway.ApiGatewayResources.productRestEndpointPage"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.productRestEndpointPage(props: ApiGatewayProductRestEndpointPageArnProps)
```

Builds an ARN for the ProductRestEndpointPage resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.productRestEndpointPage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayProductRestEndpointPageArnProps">ApiGatewayProductRestEndpointPageArnProps</a>

---

##### `requestValidator` <a name="requestValidator" id="@cdk_utils/iam.apigateway.ApiGatewayResources.requestValidator"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.requestValidator(props: ApiGatewayRequestValidatorArnProps)
```

Builds an ARN for the RequestValidator resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.requestValidator.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorArnProps">ApiGatewayRequestValidatorArnProps</a>

---

##### `requestValidators` <a name="requestValidators" id="@cdk_utils/iam.apigateway.ApiGatewayResources.requestValidators"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.requestValidators(props: ApiGatewayRequestValidatorsArnProps)
```

Builds an ARN for the RequestValidators resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.requestValidators.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRequestValidatorsArnProps">ApiGatewayRequestValidatorsArnProps</a>

---

##### `resource` <a name="resource" id="@cdk_utils/iam.apigateway.ApiGatewayResources.resource"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.resource(props: ApiGatewayResourceArnProps)
```

Builds an ARN for the Resource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.resource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayResourceArnProps">ApiGatewayResourceArnProps</a>

---

##### `resources` <a name="resources" id="@cdk_utils/iam.apigateway.ApiGatewayResources.resources"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.resources(props: ApiGatewayResourcesArnProps)
```

Builds an ARN for the Resources resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.resources.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayResourcesArnProps">ApiGatewayResourcesArnProps</a>

---

##### `restAPI` <a name="restAPI" id="@cdk_utils/iam.apigateway.ApiGatewayResources.restAPI"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.restAPI(props: ApiGatewayRestAPIArnProps)
```

Builds an ARN for the RestApi resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.restAPI.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRestAPIArnProps">ApiGatewayRestAPIArnProps</a>

---

##### `restApis` <a name="restApis" id="@cdk_utils/iam.apigateway.ApiGatewayResources.restApis"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.restApis(props: ApiGatewayRestApisArnProps)
```

Builds an ARN for the RestApis resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.restApis.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRestApisArnProps">ApiGatewayRestApisArnProps</a>

---

##### `route` <a name="route" id="@cdk_utils/iam.apigateway.ApiGatewayResources.route"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.route(props: ApiGatewayRouteArnProps)
```

Builds an ARN for the Route resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.route.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteArnProps">ApiGatewayRouteArnProps</a>

---

##### `routeRequestParameter` <a name="routeRequestParameter" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routeRequestParameter"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.routeRequestParameter(props: ApiGatewayRouteRequestParameterArnProps)
```

Builds an ARN for the RouteRequestParameter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routeRequestParameter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteRequestParameterArnProps">ApiGatewayRouteRequestParameterArnProps</a>

---

##### `routeResponse` <a name="routeResponse" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routeResponse"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.routeResponse(props: ApiGatewayRouteResponseArnProps)
```

Builds an ARN for the RouteResponse resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routeResponse.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponseArnProps">ApiGatewayRouteResponseArnProps</a>

---

##### `routeResponses` <a name="routeResponses" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routeResponses"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.routeResponses(props: ApiGatewayRouteResponsesArnProps)
```

Builds an ARN for the RouteResponses resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routeResponses.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteResponsesArnProps">ApiGatewayRouteResponsesArnProps</a>

---

##### `routes` <a name="routes" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routes"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.routes(props: ApiGatewayRoutesArnProps)
```

Builds an ARN for the Routes resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routes.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutesArnProps">ApiGatewayRoutesArnProps</a>

---

##### `routeSettings` <a name="routeSettings" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routeSettings"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.routeSettings(props: ApiGatewayRouteSettingsArnProps)
```

Builds an ARN for the RouteSettings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routeSettings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRouteSettingsArnProps">ApiGatewayRouteSettingsArnProps</a>

---

##### `routingRule` <a name="routingRule" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routingRule"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.routingRule(props: ApiGatewayRoutingRuleArnProps)
```

Builds an ARN for the RoutingRule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.routingRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayRoutingRuleArnProps">ApiGatewayRoutingRuleArnProps</a>

---

##### `sdk` <a name="sdk" id="@cdk_utils/iam.apigateway.ApiGatewayResources.sdk"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.sdk(props: ApiGatewaySDKArnProps)
```

Builds an ARN for the Sdk resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.sdk.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewaySDKArnProps">ApiGatewaySDKArnProps</a>

---

##### `stagesVariant1` <a name="stagesVariant1" id="@cdk_utils/iam.apigateway.ApiGatewayResources.stagesVariant1"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.stagesVariant1(props: ApiGatewayStagesVariant1ArnProps)
```

Builds an ARN for the StagesVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.stagesVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesVariant1ArnProps">ApiGatewayStagesVariant1ArnProps</a>

---

##### `stagesVariant2` <a name="stagesVariant2" id="@cdk_utils/iam.apigateway.ApiGatewayResources.stagesVariant2"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.stagesVariant2(props: ApiGatewayStagesVariant2ArnProps)
```

Builds an ARN for the StagesVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.stagesVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayStagesVariant2ArnProps">ApiGatewayStagesVariant2ArnProps</a>

---

##### `stageVariant1` <a name="stageVariant1" id="@cdk_utils/iam.apigateway.ApiGatewayResources.stageVariant1"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.stageVariant1(props: ApiGatewayStageVariant1ArnProps)
```

Builds an ARN for the StageVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.stageVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant1ArnProps">ApiGatewayStageVariant1ArnProps</a>

---

##### `stageVariant2` <a name="stageVariant2" id="@cdk_utils/iam.apigateway.ApiGatewayResources.stageVariant2"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.stageVariant2(props: ApiGatewayStageVariant2ArnProps)
```

Builds an ARN for the StageVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.stageVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayStageVariant2ArnProps">ApiGatewayStageVariant2ArnProps</a>

---

##### `tags` <a name="tags" id="@cdk_utils/iam.apigateway.ApiGatewayResources.tags"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.tags(props: ApiGatewayTagsArnProps)
```

Builds an ARN for the Tags resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.tags.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayTagsArnProps">ApiGatewayTagsArnProps</a>

---

##### `template` <a name="template" id="@cdk_utils/iam.apigateway.ApiGatewayResources.template"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.template(props: ApiGatewayTemplateArnProps)
```

Builds an ARN for the Template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.template.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayTemplateArnProps">ApiGatewayTemplateArnProps</a>

---

##### `usagePlan` <a name="usagePlan" id="@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlan"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.usagePlan(props: ApiGatewayUsagePlanArnProps)
```

Builds an ARN for the UsagePlan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanArnProps">ApiGatewayUsagePlanArnProps</a>

---

##### `usagePlanKey` <a name="usagePlanKey" id="@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlanKey"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.usagePlanKey(props: ApiGatewayUsagePlanKeyArnProps)
```

Builds an ARN for the UsagePlanKey resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlanKey.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeyArnProps">ApiGatewayUsagePlanKeyArnProps</a>

---

##### `usagePlanKeys` <a name="usagePlanKeys" id="@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlanKeys"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.usagePlanKeys(props: ApiGatewayUsagePlanKeysArnProps)
```

Builds an ARN for the UsagePlanKeys resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlanKeys.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlanKeysArnProps">ApiGatewayUsagePlanKeysArnProps</a>

---

##### `usagePlans` <a name="usagePlans" id="@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlans"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.usagePlans(props: ApiGatewayUsagePlansArnProps)
```

Builds an ARN for the UsagePlans resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.usagePlans.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayUsagePlansArnProps">ApiGatewayUsagePlansArnProps</a>

---

##### `vpcLink` <a name="vpcLink" id="@cdk_utils/iam.apigateway.ApiGatewayResources.vpcLink"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.vpcLink(props: ApiGatewayVPCLinkArnProps)
```

Builds an ARN for the VpcLink resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.vpcLink.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinkArnProps">ApiGatewayVPCLinkArnProps</a>

---

##### `vpcLinks` <a name="vpcLinks" id="@cdk_utils/iam.apigateway.ApiGatewayResources.vpcLinks"></a>

```typescript
import { apigateway } from '@cdk_utils/iam'

apigateway.ApiGatewayResources.vpcLinks(props: ApiGatewayVPCLinksArnProps)
```

Builds an ARN for the VpcLinks resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apigateway.ApiGatewayResources.vpcLinks.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apigateway.ApiGatewayVPCLinksArnProps">ApiGatewayVPCLinksArnProps</a>

---




