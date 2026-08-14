# `bedrock_agentcore` Submodule <a name="`bedrock_agentcore` Submodule" id="@cdk_utils/iam.bedrock_agentcore"></a>


## Structs <a name="Structs" id="Structs"></a>

### BedrockAgentcoreAbTestArnComponents <a name="BedrockAgentcoreAbTestArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnComponents"></a>

Parsed components of a ab-test ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreAbTestArnComponents: bedrock_agentcore.BedrockAgentcoreAbTestArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnComponents.property.abTestId">abTestId</a></code> | <code>string</code> | The ABTestId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `abTestId`<sup>Required</sup> <a name="abTestId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnComponents.property.abTestId"></a>

```typescript
public readonly abTestId: string;
```

- *Type:* string

The ABTestId component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreAbTestArnProps <a name="BedrockAgentcoreAbTestArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps"></a>

Properties for building a ab-test ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreAbTestArnProps: bedrock_agentcore.BedrockAgentcoreAbTestArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps.property.abTestId">abTestId</a></code> | <code>string</code> | The ABTestId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `abTestId`<sup>Required</sup> <a name="abTestId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps.property.abTestId"></a>

```typescript
public readonly abTestId: string;
```

- *Type:* string

The ABTestId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreApikeycredentialproviderArnComponents <a name="BedrockAgentcoreApikeycredentialproviderArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents"></a>

Parsed components of a apikeycredentialprovider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreApikeycredentialproviderArnComponents: bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.property.tokenVaultId">tokenVaultId</a></code> | <code>string</code> | The TokenVaultId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tokenVaultId`<sup>Required</sup> <a name="tokenVaultId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnComponents.property.tokenVaultId"></a>

```typescript
public readonly tokenVaultId: string;
```

- *Type:* string

The TokenVaultId component.

---

### BedrockAgentcoreApikeycredentialproviderArnProps <a name="BedrockAgentcoreApikeycredentialproviderArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps"></a>

Properties for building a apikeycredentialprovider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreApikeycredentialproviderArnProps: bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.property.tokenVaultId">tokenVaultId</a></code> | <code>string</code> | The TokenVaultId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `tokenVaultId`<sup>Required</sup> <a name="tokenVaultId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.property.tokenVaultId"></a>

```typescript
public readonly tokenVaultId: string;
```

- *Type:* string

The TokenVaultId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreBatchEvaluateArnComponents <a name="BedrockAgentcoreBatchEvaluateArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents"></a>

Parsed components of a batch-evaluate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreBatchEvaluateArnComponents: bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents.property.batchEvaluationId">batchEvaluationId</a></code> | <code>string</code> | The BatchEvaluationId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `batchEvaluationId`<sup>Required</sup> <a name="batchEvaluationId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents.property.batchEvaluationId"></a>

```typescript
public readonly batchEvaluationId: string;
```

- *Type:* string

The BatchEvaluationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreBatchEvaluateArnProps <a name="BedrockAgentcoreBatchEvaluateArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps"></a>

Properties for building a batch-evaluate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreBatchEvaluateArnProps: bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps.property.batchEvaluationId">batchEvaluationId</a></code> | <code>string</code> | The BatchEvaluationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `batchEvaluationId`<sup>Required</sup> <a name="batchEvaluationId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps.property.batchEvaluationId"></a>

```typescript
public readonly batchEvaluationId: string;
```

- *Type:* string

The BatchEvaluationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreBrowserArnComponents <a name="BedrockAgentcoreBrowserArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnComponents"></a>

Parsed components of a browser ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreBrowserArnComponents: bedrock_agentcore.BedrockAgentcoreBrowserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnComponents.property.browserId">browserId</a></code> | <code>string</code> | The BrowserId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `browserId`<sup>Required</sup> <a name="browserId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnComponents.property.browserId"></a>

```typescript
public readonly browserId: string;
```

- *Type:* string

The BrowserId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreBrowserArnProps <a name="BedrockAgentcoreBrowserArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps"></a>

Properties for building a browser ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreBrowserArnProps: bedrock_agentcore.BedrockAgentcoreBrowserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps.property.browserId">browserId</a></code> | <code>string</code> | The BrowserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `browserId`<sup>Required</sup> <a name="browserId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps.property.browserId"></a>

```typescript
public readonly browserId: string;
```

- *Type:* string

The BrowserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreBrowserCustomArnComponents <a name="BedrockAgentcoreBrowserCustomArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents"></a>

Parsed components of a browser-custom ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreBrowserCustomArnComponents: bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents.property.browserId">browserId</a></code> | <code>string</code> | The BrowserId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `browserId`<sup>Required</sup> <a name="browserId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents.property.browserId"></a>

```typescript
public readonly browserId: string;
```

- *Type:* string

The BrowserId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreBrowserCustomArnProps <a name="BedrockAgentcoreBrowserCustomArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps"></a>

Properties for building a browser-custom ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreBrowserCustomArnProps: bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps.property.browserId">browserId</a></code> | <code>string</code> | The BrowserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `browserId`<sup>Required</sup> <a name="browserId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps.property.browserId"></a>

```typescript
public readonly browserId: string;
```

- *Type:* string

The BrowserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreBrowserProfileArnComponents <a name="BedrockAgentcoreBrowserProfileArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents"></a>

Parsed components of a browser-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreBrowserProfileArnComponents: bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents.property.browserProfileId">browserProfileId</a></code> | <code>string</code> | The BrowserProfileId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `browserProfileId`<sup>Required</sup> <a name="browserProfileId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents.property.browserProfileId"></a>

```typescript
public readonly browserProfileId: string;
```

- *Type:* string

The BrowserProfileId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreBrowserProfileArnProps <a name="BedrockAgentcoreBrowserProfileArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps"></a>

Properties for building a browser-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreBrowserProfileArnProps: bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps.property.browserProfileId">browserProfileId</a></code> | <code>string</code> | The BrowserProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `browserProfileId`<sup>Required</sup> <a name="browserProfileId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps.property.browserProfileId"></a>

```typescript
public readonly browserProfileId: string;
```

- *Type:* string

The BrowserProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreCapacityProviderArnComponents <a name="BedrockAgentcoreCapacityProviderArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents"></a>

Parsed components of a capacity-provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreCapacityProviderArnComponents: bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents.property.capacityProviderId">capacityProviderId</a></code> | <code>string</code> | The CapacityProviderId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `capacityProviderId`<sup>Required</sup> <a name="capacityProviderId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents.property.capacityProviderId"></a>

```typescript
public readonly capacityProviderId: string;
```

- *Type:* string

The CapacityProviderId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreCapacityProviderArnProps <a name="BedrockAgentcoreCapacityProviderArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps"></a>

Properties for building a capacity-provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreCapacityProviderArnProps: bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps.property.capacityProviderId">capacityProviderId</a></code> | <code>string</code> | The CapacityProviderId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `capacityProviderId`<sup>Required</sup> <a name="capacityProviderId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps.property.capacityProviderId"></a>

```typescript
public readonly capacityProviderId: string;
```

- *Type:* string

The CapacityProviderId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreCodeInterpreterArnComponents <a name="BedrockAgentcoreCodeInterpreterArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents"></a>

Parsed components of a code-interpreter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreCodeInterpreterArnComponents: bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents.property.codeInterpreterId">codeInterpreterId</a></code> | <code>string</code> | The CodeInterpreterId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `codeInterpreterId`<sup>Required</sup> <a name="codeInterpreterId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents.property.codeInterpreterId"></a>

```typescript
public readonly codeInterpreterId: string;
```

- *Type:* string

The CodeInterpreterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreCodeInterpreterArnProps <a name="BedrockAgentcoreCodeInterpreterArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps"></a>

Properties for building a code-interpreter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreCodeInterpreterArnProps: bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps.property.codeInterpreterId">codeInterpreterId</a></code> | <code>string</code> | The CodeInterpreterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `codeInterpreterId`<sup>Required</sup> <a name="codeInterpreterId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps.property.codeInterpreterId"></a>

```typescript
public readonly codeInterpreterId: string;
```

- *Type:* string

The CodeInterpreterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreCodeInterpreterCustomArnComponents <a name="BedrockAgentcoreCodeInterpreterCustomArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents"></a>

Parsed components of a code-interpreter-custom ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreCodeInterpreterCustomArnComponents: bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents.property.codeInterpreterId">codeInterpreterId</a></code> | <code>string</code> | The CodeInterpreterId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `codeInterpreterId`<sup>Required</sup> <a name="codeInterpreterId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents.property.codeInterpreterId"></a>

```typescript
public readonly codeInterpreterId: string;
```

- *Type:* string

The CodeInterpreterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreCodeInterpreterCustomArnProps <a name="BedrockAgentcoreCodeInterpreterCustomArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps"></a>

Properties for building a code-interpreter-custom ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreCodeInterpreterCustomArnProps: bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps.property.codeInterpreterId">codeInterpreterId</a></code> | <code>string</code> | The CodeInterpreterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `codeInterpreterId`<sup>Required</sup> <a name="codeInterpreterId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps.property.codeInterpreterId"></a>

```typescript
public readonly codeInterpreterId: string;
```

- *Type:* string

The CodeInterpreterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreConfigurationBundleArnComponents <a name="BedrockAgentcoreConfigurationBundleArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents"></a>

Parsed components of a configuration-bundle ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreConfigurationBundleArnComponents: bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents.property.configurationBundleId">configurationBundleId</a></code> | <code>string</code> | The ConfigurationBundleId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configurationBundleId`<sup>Required</sup> <a name="configurationBundleId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents.property.configurationBundleId"></a>

```typescript
public readonly configurationBundleId: string;
```

- *Type:* string

The ConfigurationBundleId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreConfigurationBundleArnProps <a name="BedrockAgentcoreConfigurationBundleArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps"></a>

Properties for building a configuration-bundle ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreConfigurationBundleArnProps: bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps.property.configurationBundleId">configurationBundleId</a></code> | <code>string</code> | The ConfigurationBundleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configurationBundleId`<sup>Required</sup> <a name="configurationBundleId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps.property.configurationBundleId"></a>

```typescript
public readonly configurationBundleId: string;
```

- *Type:* string

The ConfigurationBundleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreDatasetArnComponents <a name="BedrockAgentcoreDatasetArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreDatasetArnComponents: bedrock_agentcore.BedrockAgentcoreDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnComponents.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnComponents.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreDatasetArnProps <a name="BedrockAgentcoreDatasetArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreDatasetArnProps: bedrock_agentcore.BedrockAgentcoreDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreEvaluatorArnComponents <a name="BedrockAgentcoreEvaluatorArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents"></a>

Parsed components of a evaluator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreEvaluatorArnComponents: bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents.property.evaluatorId">evaluatorId</a></code> | <code>string</code> | The EvaluatorId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `evaluatorId`<sup>Required</sup> <a name="evaluatorId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents.property.evaluatorId"></a>

```typescript
public readonly evaluatorId: string;
```

- *Type:* string

The EvaluatorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreEvaluatorArnProps <a name="BedrockAgentcoreEvaluatorArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps"></a>

Properties for building a evaluator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreEvaluatorArnProps: bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps.property.evaluatorId">evaluatorId</a></code> | <code>string</code> | The EvaluatorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `evaluatorId`<sup>Required</sup> <a name="evaluatorId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps.property.evaluatorId"></a>

```typescript
public readonly evaluatorId: string;
```

- *Type:* string

The EvaluatorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreGatewayArnComponents <a name="BedrockAgentcoreGatewayArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnComponents"></a>

Parsed components of a gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreGatewayArnComponents: bedrock_agentcore.BedrockAgentcoreGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreGatewayArnProps <a name="BedrockAgentcoreGatewayArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps"></a>

Properties for building a gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreGatewayArnProps: bedrock_agentcore.BedrockAgentcoreGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreHarnessArnComponents <a name="BedrockAgentcoreHarnessArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnComponents"></a>

Parsed components of a harness ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreHarnessArnComponents: bedrock_agentcore.BedrockAgentcoreHarnessArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnComponents.property.harnessId">harnessId</a></code> | <code>string</code> | The HarnessId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `harnessId`<sup>Required</sup> <a name="harnessId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnComponents.property.harnessId"></a>

```typescript
public readonly harnessId: string;
```

- *Type:* string

The HarnessId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreHarnessArnProps <a name="BedrockAgentcoreHarnessArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps"></a>

Properties for building a harness ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreHarnessArnProps: bedrock_agentcore.BedrockAgentcoreHarnessArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps.property.harnessId">harnessId</a></code> | <code>string</code> | The HarnessId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `harnessId`<sup>Required</sup> <a name="harnessId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps.property.harnessId"></a>

```typescript
public readonly harnessId: string;
```

- *Type:* string

The HarnessId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreHarnessEndpointArnComponents <a name="BedrockAgentcoreHarnessEndpointArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents"></a>

Parsed components of a harness-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreHarnessEndpointArnComponents: bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.property.harnessId">harnessId</a></code> | <code>string</code> | The HarnessId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `harnessId`<sup>Required</sup> <a name="harnessId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.property.harnessId"></a>

```typescript
public readonly harnessId: string;
```

- *Type:* string

The HarnessId component.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreHarnessEndpointArnProps <a name="BedrockAgentcoreHarnessEndpointArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps"></a>

Properties for building a harness-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreHarnessEndpointArnProps: bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.property.harnessId">harnessId</a></code> | <code>string</code> | The HarnessId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `harnessId`<sup>Required</sup> <a name="harnessId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.property.harnessId"></a>

```typescript
public readonly harnessId: string;
```

- *Type:* string

The HarnessId component of the ARN.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreMemoryArnComponents <a name="BedrockAgentcoreMemoryArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnComponents"></a>

Parsed components of a memory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreMemoryArnComponents: bedrock_agentcore.BedrockAgentcoreMemoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnComponents.property.memoryId">memoryId</a></code> | <code>string</code> | The MemoryId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `memoryId`<sup>Required</sup> <a name="memoryId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnComponents.property.memoryId"></a>

```typescript
public readonly memoryId: string;
```

- *Type:* string

The MemoryId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreMemoryArnProps <a name="BedrockAgentcoreMemoryArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps"></a>

Properties for building a memory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreMemoryArnProps: bedrock_agentcore.BedrockAgentcoreMemoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps.property.memoryId">memoryId</a></code> | <code>string</code> | The MemoryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `memoryId`<sup>Required</sup> <a name="memoryId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps.property.memoryId"></a>

```typescript
public readonly memoryId: string;
```

- *Type:* string

The MemoryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreOauth2credentialproviderArnComponents <a name="BedrockAgentcoreOauth2credentialproviderArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents"></a>

Parsed components of a oauth2credentialprovider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreOauth2credentialproviderArnComponents: bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.property.tokenVaultId">tokenVaultId</a></code> | <code>string</code> | The TokenVaultId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tokenVaultId`<sup>Required</sup> <a name="tokenVaultId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnComponents.property.tokenVaultId"></a>

```typescript
public readonly tokenVaultId: string;
```

- *Type:* string

The TokenVaultId component.

---

### BedrockAgentcoreOauth2credentialproviderArnProps <a name="BedrockAgentcoreOauth2credentialproviderArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps"></a>

Properties for building a oauth2credentialprovider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreOauth2credentialproviderArnProps: bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.property.tokenVaultId">tokenVaultId</a></code> | <code>string</code> | The TokenVaultId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `tokenVaultId`<sup>Required</sup> <a name="tokenVaultId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.property.tokenVaultId"></a>

```typescript
public readonly tokenVaultId: string;
```

- *Type:* string

The TokenVaultId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreOnlineEvaluationConfigArnComponents <a name="BedrockAgentcoreOnlineEvaluationConfigArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents"></a>

Parsed components of a online-evaluation-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreOnlineEvaluationConfigArnComponents: bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents.property.onlineEvaluationConfigId">onlineEvaluationConfigId</a></code> | <code>string</code> | The OnlineEvaluationConfigId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `onlineEvaluationConfigId`<sup>Required</sup> <a name="onlineEvaluationConfigId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents.property.onlineEvaluationConfigId"></a>

```typescript
public readonly onlineEvaluationConfigId: string;
```

- *Type:* string

The OnlineEvaluationConfigId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreOnlineEvaluationConfigArnProps <a name="BedrockAgentcoreOnlineEvaluationConfigArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps"></a>

Properties for building a online-evaluation-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreOnlineEvaluationConfigArnProps: bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps.property.onlineEvaluationConfigId">onlineEvaluationConfigId</a></code> | <code>string</code> | The OnlineEvaluationConfigId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `onlineEvaluationConfigId`<sup>Required</sup> <a name="onlineEvaluationConfigId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps.property.onlineEvaluationConfigId"></a>

```typescript
public readonly onlineEvaluationConfigId: string;
```

- *Type:* string

The OnlineEvaluationConfigId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcorePaymentcredentialproviderArnComponents <a name="BedrockAgentcorePaymentcredentialproviderArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents"></a>

Parsed components of a paymentcredentialprovider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcorePaymentcredentialproviderArnComponents: bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.property.tokenVaultId">tokenVaultId</a></code> | <code>string</code> | The TokenVaultId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tokenVaultId`<sup>Required</sup> <a name="tokenVaultId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnComponents.property.tokenVaultId"></a>

```typescript
public readonly tokenVaultId: string;
```

- *Type:* string

The TokenVaultId component.

---

### BedrockAgentcorePaymentcredentialproviderArnProps <a name="BedrockAgentcorePaymentcredentialproviderArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps"></a>

Properties for building a paymentcredentialprovider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcorePaymentcredentialproviderArnProps: bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.property.tokenVaultId">tokenVaultId</a></code> | <code>string</code> | The TokenVaultId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `tokenVaultId`<sup>Required</sup> <a name="tokenVaultId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.property.tokenVaultId"></a>

```typescript
public readonly tokenVaultId: string;
```

- *Type:* string

The TokenVaultId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcorePaymentManagerArnComponents <a name="BedrockAgentcorePaymentManagerArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents"></a>

Parsed components of a payment-manager ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcorePaymentManagerArnComponents: bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents.property.paymentManagerId">paymentManagerId</a></code> | <code>string</code> | The PaymentManagerId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `paymentManagerId`<sup>Required</sup> <a name="paymentManagerId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents.property.paymentManagerId"></a>

```typescript
public readonly paymentManagerId: string;
```

- *Type:* string

The PaymentManagerId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcorePaymentManagerArnProps <a name="BedrockAgentcorePaymentManagerArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps"></a>

Properties for building a payment-manager ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcorePaymentManagerArnProps: bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps.property.paymentManagerId">paymentManagerId</a></code> | <code>string</code> | The PaymentManagerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `paymentManagerId`<sup>Required</sup> <a name="paymentManagerId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps.property.paymentManagerId"></a>

```typescript
public readonly paymentManagerId: string;
```

- *Type:* string

The PaymentManagerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcorePolicyArnComponents <a name="BedrockAgentcorePolicyArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents"></a>

Parsed components of a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcorePolicyArnComponents: bedrock_agentcore.BedrockAgentcorePolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The PolicyEngineId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The PolicyEngineId component.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcorePolicyArnProps <a name="BedrockAgentcorePolicyArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps"></a>

Properties for building a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcorePolicyArnProps: bedrock_agentcore.BedrockAgentcorePolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The PolicyEngineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The PolicyEngineId component of the ARN.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcorePolicyEngineArnComponents <a name="BedrockAgentcorePolicyEngineArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents"></a>

Parsed components of a policy-engine ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcorePolicyEngineArnComponents: bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The PolicyEngineId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The PolicyEngineId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcorePolicyEngineArnProps <a name="BedrockAgentcorePolicyEngineArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps"></a>

Properties for building a policy-engine ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcorePolicyEngineArnProps: bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The PolicyEngineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The PolicyEngineId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcorePolicyGenerationArnComponents <a name="BedrockAgentcorePolicyGenerationArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents"></a>

Parsed components of a policy-generation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcorePolicyGenerationArnComponents: bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The PolicyEngineId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.property.policyGenerationId">policyGenerationId</a></code> | <code>string</code> | The PolicyGenerationId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The PolicyEngineId component.

---

##### `policyGenerationId`<sup>Required</sup> <a name="policyGenerationId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.property.policyGenerationId"></a>

```typescript
public readonly policyGenerationId: string;
```

- *Type:* string

The PolicyGenerationId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcorePolicyGenerationArnProps <a name="BedrockAgentcorePolicyGenerationArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps"></a>

Properties for building a policy-generation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcorePolicyGenerationArnProps: bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The PolicyEngineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.property.policyGenerationId">policyGenerationId</a></code> | <code>string</code> | The PolicyGenerationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The PolicyEngineId component of the ARN.

---

##### `policyGenerationId`<sup>Required</sup> <a name="policyGenerationId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.property.policyGenerationId"></a>

```typescript
public readonly policyGenerationId: string;
```

- *Type:* string

The PolicyGenerationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreRecommendationArnComponents <a name="BedrockAgentcoreRecommendationArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents"></a>

Parsed components of a recommendation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreRecommendationArnComponents: bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents.property.recommendationId">recommendationId</a></code> | <code>string</code> | The RecommendationId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recommendationId`<sup>Required</sup> <a name="recommendationId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents.property.recommendationId"></a>

```typescript
public readonly recommendationId: string;
```

- *Type:* string

The RecommendationId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreRecommendationArnProps <a name="BedrockAgentcoreRecommendationArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps"></a>

Properties for building a recommendation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreRecommendationArnProps: bedrock_agentcore.BedrockAgentcoreRecommendationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps.property.recommendationId">recommendationId</a></code> | <code>string</code> | The RecommendationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `recommendationId`<sup>Required</sup> <a name="recommendationId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps.property.recommendationId"></a>

```typescript
public readonly recommendationId: string;
```

- *Type:* string

The RecommendationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreRegistryArnComponents <a name="BedrockAgentcoreRegistryArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnComponents"></a>

Parsed components of a registry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreRegistryArnComponents: bedrock_agentcore.BedrockAgentcoreRegistryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnComponents.property.registryId">registryId</a></code> | <code>string</code> | The RegistryId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnComponents.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

The RegistryId component.

---

### BedrockAgentcoreRegistryArnProps <a name="BedrockAgentcoreRegistryArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps"></a>

Properties for building a registry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreRegistryArnProps: bedrock_agentcore.BedrockAgentcoreRegistryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps.property.registryId">registryId</a></code> | <code>string</code> | The RegistryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

The RegistryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreRegistryRecordArnComponents <a name="BedrockAgentcoreRegistryRecordArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents"></a>

Parsed components of a registry-record ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreRegistryRecordArnComponents: bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.property.recordId">recordId</a></code> | <code>string</code> | The RecordId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.property.registryId">registryId</a></code> | <code>string</code> | The RegistryId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recordId`<sup>Required</sup> <a name="recordId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.property.recordId"></a>

```typescript
public readonly recordId: string;
```

- *Type:* string

The RecordId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnComponents.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

The RegistryId component.

---

### BedrockAgentcoreRegistryRecordArnProps <a name="BedrockAgentcoreRegistryRecordArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps"></a>

Properties for building a registry-record ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreRegistryRecordArnProps: bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.property.recordId">recordId</a></code> | <code>string</code> | The RecordId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.property.registryId">registryId</a></code> | <code>string</code> | The RegistryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `recordId`<sup>Required</sup> <a name="recordId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.property.recordId"></a>

```typescript
public readonly recordId: string;
```

- *Type:* string

The RecordId component of the ARN.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

The RegistryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreRuntimeArnComponents <a name="BedrockAgentcoreRuntimeArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents"></a>

Parsed components of a runtime ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreRuntimeArnComponents: bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents.property.runtimeId">runtimeId</a></code> | <code>string</code> | The RuntimeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `runtimeId`<sup>Required</sup> <a name="runtimeId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnComponents.property.runtimeId"></a>

```typescript
public readonly runtimeId: string;
```

- *Type:* string

The RuntimeId component.

---

### BedrockAgentcoreRuntimeArnProps <a name="BedrockAgentcoreRuntimeArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps"></a>

Properties for building a runtime ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreRuntimeArnProps: bedrock_agentcore.BedrockAgentcoreRuntimeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps.property.runtimeId">runtimeId</a></code> | <code>string</code> | The RuntimeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `runtimeId`<sup>Required</sup> <a name="runtimeId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps.property.runtimeId"></a>

```typescript
public readonly runtimeId: string;
```

- *Type:* string

The RuntimeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreRuntimeEndpointArnComponents <a name="BedrockAgentcoreRuntimeEndpointArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents"></a>

Parsed components of a runtime-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreRuntimeEndpointArnComponents: bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.property.runtimeId">runtimeId</a></code> | <code>string</code> | The RuntimeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `runtimeId`<sup>Required</sup> <a name="runtimeId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnComponents.property.runtimeId"></a>

```typescript
public readonly runtimeId: string;
```

- *Type:* string

The RuntimeId component.

---

### BedrockAgentcoreRuntimeEndpointArnProps <a name="BedrockAgentcoreRuntimeEndpointArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps"></a>

Properties for building a runtime-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreRuntimeEndpointArnProps: bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.property.runtimeId">runtimeId</a></code> | <code>string</code> | The RuntimeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `runtimeId`<sup>Required</sup> <a name="runtimeId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.property.runtimeId"></a>

```typescript
public readonly runtimeId: string;
```

- *Type:* string

The RuntimeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreTokenVaultArnComponents <a name="BedrockAgentcoreTokenVaultArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents"></a>

Parsed components of a token-vault ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreTokenVaultArnComponents: bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents.property.tokenVaultId">tokenVaultId</a></code> | <code>string</code> | The TokenVaultId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tokenVaultId`<sup>Required</sup> <a name="tokenVaultId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnComponents.property.tokenVaultId"></a>

```typescript
public readonly tokenVaultId: string;
```

- *Type:* string

The TokenVaultId component.

---

### BedrockAgentcoreTokenVaultArnProps <a name="BedrockAgentcoreTokenVaultArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps"></a>

Properties for building a token-vault ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreTokenVaultArnProps: bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps.property.tokenVaultId">tokenVaultId</a></code> | <code>string</code> | The TokenVaultId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tokenVaultId`<sup>Required</sup> <a name="tokenVaultId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps.property.tokenVaultId"></a>

```typescript
public readonly tokenVaultId: string;
```

- *Type:* string

The TokenVaultId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreWebSearchArnComponents <a name="BedrockAgentcoreWebSearchArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnComponents"></a>

Parsed components of a web-search ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreWebSearchArnComponents: bedrock_agentcore.BedrockAgentcoreWebSearchArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreWebSearchArnProps <a name="BedrockAgentcoreWebSearchArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnProps"></a>

Properties for building a web-search ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreWebSearchArnProps: bedrock_agentcore.BedrockAgentcoreWebSearchArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreWorkloadIdentityArnComponents <a name="BedrockAgentcoreWorkloadIdentityArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents"></a>

Parsed components of a workload-identity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreWorkloadIdentityArnComponents: bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.property.workloadIdentityName">workloadIdentityName</a></code> | <code>string</code> | The WorkloadIdentityName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workloadIdentityName`<sup>Required</sup> <a name="workloadIdentityName" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnComponents.property.workloadIdentityName"></a>

```typescript
public readonly workloadIdentityName: string;
```

- *Type:* string

The WorkloadIdentityName component.

---

### BedrockAgentcoreWorkloadIdentityArnProps <a name="BedrockAgentcoreWorkloadIdentityArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps"></a>

Properties for building a workload-identity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreWorkloadIdentityArnProps: bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.property.workloadIdentityName">workloadIdentityName</a></code> | <code>string</code> | The WorkloadIdentityName component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component of the ARN.

---

##### `workloadIdentityName`<sup>Required</sup> <a name="workloadIdentityName" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.property.workloadIdentityName"></a>

```typescript
public readonly workloadIdentityName: string;
```

- *Type:* string

The WorkloadIdentityName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentcoreWorkloadIdentityDirectoryArnComponents <a name="BedrockAgentcoreWorkloadIdentityDirectoryArnComponents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents"></a>

Parsed components of a workload-identity-directory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreWorkloadIdentityDirectoryArnComponents: bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentcoreWorkloadIdentityDirectoryArnProps <a name="BedrockAgentcoreWorkloadIdentityDirectoryArnProps" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps"></a>

Properties for building a workload-identity-directory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

const bedrockAgentcoreWorkloadIdentityDirectoryArnProps: bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAgentcoreActions <a name="BedrockAgentcoreActions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions"></a>

IAM action constants for the bedrock-agentcore service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

new bedrock_agentcore.BedrockAgentcoreActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetABTest">actionGetABTest</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetABTest. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetAgentCard">actionGetAgentCard</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetAgentCard. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetAgentRuntime">actionGetAgentRuntime</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetAgentRuntime. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetAgentRuntimeEndpoint">actionGetAgentRuntimeEndpoint</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetAgentRuntimeEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetApiKeyCredentialProvider">actionGetApiKeyCredentialProvider</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetApiKeyCredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetBatchEvaluation">actionGetBatchEvaluation</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetBatchEvaluation. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetBrowser">actionGetBrowser</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetBrowser. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetBrowserProfile">actionGetBrowserProfile</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetBrowserProfile. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetBrowserSession">actionGetBrowserSession</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetBrowserSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetCapacityProvider">actionGetCapacityProvider</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetCapacityProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetCodeInterpreter">actionGetCodeInterpreter</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetCodeInterpreter. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetCodeInterpreterSession">actionGetCodeInterpreterSession</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetCodeInterpreterSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetConfigurationBundle">actionGetConfigurationBundle</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetConfigurationBundle. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetConfigurationBundleVersion">actionGetConfigurationBundleVersion</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetConfigurationBundleVersion. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetDataset">actionGetDataset</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetDataset. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetEvaluator">actionGetEvaluator</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetEvaluator. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetEvent">actionGetEvent</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetEvent. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetGateway">actionGetGateway</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetGateway. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetGatewayRateLimit">actionGetGatewayRateLimit</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetGatewayRateLimit. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetGatewayRule">actionGetGatewayRule</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetGatewayRule. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetGatewayTarget">actionGetGatewayTarget</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetGatewayTarget. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetHarness">actionGetHarness</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetHarness. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetHarnessEndpoint">actionGetHarnessEndpoint</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetHarnessEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetMemory">actionGetMemory</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetMemory. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetMemoryRecord">actionGetMemoryRecord</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetMemoryRecord. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetOauth2CredentialProvider">actionGetOauth2CredentialProvider</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetOauth2CredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetOnlineEvaluationConfig">actionGetOnlineEvaluationConfig</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetOnlineEvaluationConfig. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentConnector">actionGetPaymentConnector</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPaymentConnector. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentCredentialProvider">actionGetPaymentCredentialProvider</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPaymentCredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentInstrument">actionGetPaymentInstrument</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPaymentInstrument. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentInstrumentBalance">actionGetPaymentInstrumentBalance</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPaymentInstrumentBalance. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentManager">actionGetPaymentManager</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPaymentManager. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentSession">actionGetPaymentSession</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPaymentSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPolicy. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicyEngine">actionGetPolicyEngine</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPolicyEngine. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicyEngineSummary">actionGetPolicyEngineSummary</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPolicyEngineSummary. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicyGeneration">actionGetPolicyGeneration</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPolicyGeneration. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicyGenerationSummary">actionGetPolicyGenerationSummary</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPolicyGenerationSummary. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicySummary">actionGetPolicySummary</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetPolicySummary. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetRecommendation">actionGetRecommendation</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetRecommendation. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetRegistry">actionGetRegistry</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetRegistry. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetRegistryRecord">actionGetRegistryRecord</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetRegistryRecord. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetResourceApiKey">actionGetResourceApiKey</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetResourceApiKey. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetResourceOauth2Token">actionGetResourceOauth2Token</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetResourceOauth2Token. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetResourcePaymentToken">actionGetResourcePaymentToken</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetResourcePaymentToken. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetTokenVault">actionGetTokenVault</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetTokenVault. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetWorkloadAccessToken">actionGetWorkloadAccessToken</a></code> | <code>string</code> | [Write] bedrock-agentcore:GetWorkloadAccessToken. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetWorkloadAccessTokenForJWT">actionGetWorkloadAccessTokenForJWT</a></code> | <code>string</code> | [Write] bedrock-agentcore:GetWorkloadAccessTokenForJWT. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetWorkloadAccessTokenForUserId">actionGetWorkloadAccessTokenForUserId</a></code> | <code>string</code> | [Write] bedrock-agentcore:GetWorkloadAccessTokenForUserId. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetWorkloadIdentity">actionGetWorkloadIdentity</a></code> | <code>string</code> | [Read] bedrock-agentcore:GetWorkloadIdentity. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionSetTokenVaultCMK">actionSetTokenVaultCMK</a></code> | <code>string</code> | [Write] bedrock-agentcore:SetTokenVaultCMK. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AddDatasetExamples">AddDatasetExamples</a></code> | <code>string</code> | [Write] bedrock-agentcore:AddDatasetExamples. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] bedrock-agentcore:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AuthorizeAction">AuthorizeAction</a></code> | <code>string</code> | [PermissionManagement] bedrock-agentcore:AuthorizeAction. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.BatchCreateMemoryRecords">BatchCreateMemoryRecords</a></code> | <code>string</code> | [Write] bedrock-agentcore:BatchCreateMemoryRecords. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.BatchDeleteMemoryRecords">BatchDeleteMemoryRecords</a></code> | <code>string</code> | [Write] bedrock-agentcore:BatchDeleteMemoryRecords. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.BatchPutGatewayRateLimits">BatchPutGatewayRateLimits</a></code> | <code>string</code> | [Write] bedrock-agentcore:BatchPutGatewayRateLimits. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.BatchUpdateMemoryRecords">BatchUpdateMemoryRecords</a></code> | <code>string</code> | [Write] bedrock-agentcore:BatchUpdateMemoryRecords. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CompleteResourceTokenAuth">CompleteResourceTokenAuth</a></code> | <code>string</code> | [Read] bedrock-agentcore:CompleteResourceTokenAuth. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ConnectBrowserAutomationStream">ConnectBrowserAutomationStream</a></code> | <code>string</code> | [Read] bedrock-agentcore:ConnectBrowserAutomationStream. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ConnectBrowserLiveViewStream">ConnectBrowserLiveViewStream</a></code> | <code>string</code> | [Read] bedrock-agentcore:ConnectBrowserLiveViewStream. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateABTest">CreateABTest</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateABTest. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateAgentRuntime">CreateAgentRuntime</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateAgentRuntime. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateAgentRuntimeEndpoint">CreateAgentRuntimeEndpoint</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateAgentRuntimeEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateApiKeyCredentialProvider">CreateApiKeyCredentialProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateApiKeyCredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateBrowser">CreateBrowser</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateBrowser. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateBrowserProfile">CreateBrowserProfile</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateBrowserProfile. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateCapacityProvider">CreateCapacityProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateCapacityProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateCodeInterpreter">CreateCodeInterpreter</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateCodeInterpreter. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateConfigurationBundle">CreateConfigurationBundle</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateConfigurationBundle. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateDataset. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateDatasetVersion">CreateDatasetVersion</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateDatasetVersion. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateEvaluator">CreateEvaluator</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateEvaluator. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateEvent">CreateEvent</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateEvent. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateGateway">CreateGateway</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateGateway. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateGatewayRateLimit">CreateGatewayRateLimit</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateGatewayRateLimit. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateGatewayRule">CreateGatewayRule</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateGatewayRule. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateGatewayTarget">CreateGatewayTarget</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateGatewayTarget. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateHarness">CreateHarness</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateHarness. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateHarnessEndpoint">CreateHarnessEndpoint</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateHarnessEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateMemory">CreateMemory</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateMemory. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateOauth2CredentialProvider">CreateOauth2CredentialProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateOauth2CredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateOnlineEvaluationConfig">CreateOnlineEvaluationConfig</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateOnlineEvaluationConfig. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePaymentConnector">CreatePaymentConnector</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreatePaymentConnector. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePaymentCredentialProvider">CreatePaymentCredentialProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreatePaymentCredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePaymentInstrument">CreatePaymentInstrument</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreatePaymentInstrument. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePaymentManager">CreatePaymentManager</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreatePaymentManager. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePaymentSession">CreatePaymentSession</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreatePaymentSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePolicy">CreatePolicy</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreatePolicy. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePolicyEngine">CreatePolicyEngine</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreatePolicyEngine. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateRegistry">CreateRegistry</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateRegistry. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateRegistryRecord">CreateRegistryRecord</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateRegistryRecord. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateWorkloadIdentity">CreateWorkloadIdentity</a></code> | <code>string</code> | [Write] bedrock-agentcore:CreateWorkloadIdentity. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteABTest">DeleteABTest</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteABTest. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteAgentRuntime">DeleteAgentRuntime</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteAgentRuntime. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteAgentRuntimeEndpoint">DeleteAgentRuntimeEndpoint</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteAgentRuntimeEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteApiKeyCredentialProvider">DeleteApiKeyCredentialProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteApiKeyCredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteBatchEvaluation">DeleteBatchEvaluation</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteBatchEvaluation. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteBrowser">DeleteBrowser</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteBrowser. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteBrowserProfile">DeleteBrowserProfile</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteBrowserProfile. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteCapacityProvider">DeleteCapacityProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteCapacityProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteCapacityProviderSession">DeleteCapacityProviderSession</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteCapacityProviderSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteCodeInterpreter">DeleteCodeInterpreter</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteCodeInterpreter. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteConfigurationBundle">DeleteConfigurationBundle</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteConfigurationBundle. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteDatasetExamples">DeleteDatasetExamples</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteDatasetExamples. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteEvaluator">DeleteEvaluator</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteEvaluator. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteEvent">DeleteEvent</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteEvent. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteGateway">DeleteGateway</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteGateway. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteGatewayRateLimit">DeleteGatewayRateLimit</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteGatewayRateLimit. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteGatewayRule">DeleteGatewayRule</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteGatewayRule. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteGatewayTarget">DeleteGatewayTarget</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteGatewayTarget. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteHarness">DeleteHarness</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteHarness. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteHarnessEndpoint">DeleteHarnessEndpoint</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteHarnessEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteMemory">DeleteMemory</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteMemory. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteMemoryRecord">DeleteMemoryRecord</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteMemoryRecord. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteOauth2CredentialProvider">DeleteOauth2CredentialProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteOauth2CredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteOnlineEvaluationConfig">DeleteOnlineEvaluationConfig</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteOnlineEvaluationConfig. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePaymentConnector">DeletePaymentConnector</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeletePaymentConnector. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePaymentCredentialProvider">DeletePaymentCredentialProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeletePaymentCredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePaymentInstrument">DeletePaymentInstrument</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeletePaymentInstrument. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePaymentManager">DeletePaymentManager</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeletePaymentManager. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePaymentSession">DeletePaymentSession</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeletePaymentSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePolicyEngine">DeletePolicyEngine</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeletePolicyEngine. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteRecommendation">DeleteRecommendation</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteRecommendation. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteRegistry">DeleteRegistry</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteRegistry. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteRegistryRecord">DeleteRegistryRecord</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteRegistryRecord. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteWorkloadIdentity">DeleteWorkloadIdentity</a></code> | <code>string</code> | [Write] bedrock-agentcore:DeleteWorkloadIdentity. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.Evaluate">Evaluate</a></code> | <code>string</code> | [Write] bedrock-agentcore:Evaluate. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.GatewayAssociateWebACL">GatewayAssociateWebACL</a></code> | <code>string</code> | [Write] bedrock-agentcore:GatewayAssociateWebACL. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.GatewayDisassociateWebACL">GatewayDisassociateWebACL</a></code> | <code>string</code> | [Write] bedrock-agentcore:GatewayDisassociateWebACL. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.GatewayGetWebACLForResource">GatewayGetWebACLForResource</a></code> | <code>string</code> | [Read] bedrock-agentcore:GatewayGetWebACLForResource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.GatewayListResourcesForWebACL">GatewayListResourcesForWebACL</a></code> | <code>string</code> | [List] bedrock-agentcore:GatewayListResourcesForWebACL. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntime">InvokeAgentRuntime</a></code> | <code>string</code> | [Write] bedrock-agentcore:InvokeAgentRuntime. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntimeCommand">InvokeAgentRuntimeCommand</a></code> | <code>string</code> | [Write] bedrock-agentcore:InvokeAgentRuntimeCommand. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntimeCommandShell">InvokeAgentRuntimeCommandShell</a></code> | <code>string</code> | [Write] bedrock-agentcore:InvokeAgentRuntimeCommandShell. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntimeForUser">InvokeAgentRuntimeForUser</a></code> | <code>string</code> | [Write] bedrock-agentcore:InvokeAgentRuntimeForUser. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntimeWithWebSocketStream">InvokeAgentRuntimeWithWebSocketStream</a></code> | <code>string</code> | [Write] bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStream. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntimeWithWebSocketStreamForUser">InvokeAgentRuntimeWithWebSocketStreamForUser</a></code> | <code>string</code> | [Write] bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStreamForUser. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeCodeInterpreter">InvokeCodeInterpreter</a></code> | <code>string</code> | [Write] bedrock-agentcore:InvokeCodeInterpreter. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeGateway">InvokeGateway</a></code> | <code>string</code> | [PermissionManagement] bedrock-agentcore:InvokeGateway. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeHarness">InvokeHarness</a></code> | <code>string</code> | [Write] bedrock-agentcore:InvokeHarness. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeRegistryMcp">InvokeRegistryMcp</a></code> | <code>string</code> | [Read] bedrock-agentcore:InvokeRegistryMcp. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeWebSearch">InvokeWebSearch</a></code> | <code>string</code> | [PermissionManagement] bedrock-agentcore:InvokeWebSearch. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListABTests">ListABTests</a></code> | <code>string</code> | [List] bedrock-agentcore:ListABTests. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListActors">ListActors</a></code> | <code>string</code> | [List] bedrock-agentcore:ListActors. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListAgentRuntimeEndpoints">ListAgentRuntimeEndpoints</a></code> | <code>string</code> | [List] bedrock-agentcore:ListAgentRuntimeEndpoints. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListAgentRuntimes">ListAgentRuntimes</a></code> | <code>string</code> | [List] bedrock-agentcore:ListAgentRuntimes. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListAgentRuntimeVersions">ListAgentRuntimeVersions</a></code> | <code>string</code> | [List] bedrock-agentcore:ListAgentRuntimeVersions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListAgentRuntimeVersionsByCapacityProvider">ListAgentRuntimeVersionsByCapacityProvider</a></code> | <code>string</code> | [List] bedrock-agentcore:ListAgentRuntimeVersionsByCapacityProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListApiKeyCredentialProviders">ListApiKeyCredentialProviders</a></code> | <code>string</code> | [Read] bedrock-agentcore:ListApiKeyCredentialProviders. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListBatchEvaluations">ListBatchEvaluations</a></code> | <code>string</code> | [List] bedrock-agentcore:ListBatchEvaluations. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListBrowserProfiles">ListBrowserProfiles</a></code> | <code>string</code> | [List] bedrock-agentcore:ListBrowserProfiles. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListBrowsers">ListBrowsers</a></code> | <code>string</code> | [List] bedrock-agentcore:ListBrowsers. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListBrowserSessions">ListBrowserSessions</a></code> | <code>string</code> | [List] bedrock-agentcore:ListBrowserSessions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListCapacityProviders">ListCapacityProviders</a></code> | <code>string</code> | [List] bedrock-agentcore:ListCapacityProviders. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListCodeInterpreters">ListCodeInterpreters</a></code> | <code>string</code> | [List] bedrock-agentcore:ListCodeInterpreters. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListCodeInterpreterSessions">ListCodeInterpreterSessions</a></code> | <code>string</code> | [List] bedrock-agentcore:ListCodeInterpreterSessions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListConfigurationBundles">ListConfigurationBundles</a></code> | <code>string</code> | [List] bedrock-agentcore:ListConfigurationBundles. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListConfigurationBundleVersions">ListConfigurationBundleVersions</a></code> | <code>string</code> | [List] bedrock-agentcore:ListConfigurationBundleVersions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListDatasetExamples">ListDatasetExamples</a></code> | <code>string</code> | [List] bedrock-agentcore:ListDatasetExamples. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListDatasets">ListDatasets</a></code> | <code>string</code> | [List] bedrock-agentcore:ListDatasets. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListDatasetVersions">ListDatasetVersions</a></code> | <code>string</code> | [List] bedrock-agentcore:ListDatasetVersions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListEvaluators">ListEvaluators</a></code> | <code>string</code> | [List] bedrock-agentcore:ListEvaluators. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListEvents">ListEvents</a></code> | <code>string</code> | [List] bedrock-agentcore:ListEvents. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListGatewayRateLimits">ListGatewayRateLimits</a></code> | <code>string</code> | [List] bedrock-agentcore:ListGatewayRateLimits. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListGatewayRules">ListGatewayRules</a></code> | <code>string</code> | [List] bedrock-agentcore:ListGatewayRules. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListGateways">ListGateways</a></code> | <code>string</code> | [List] bedrock-agentcore:ListGateways. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListGatewayTargets">ListGatewayTargets</a></code> | <code>string</code> | [List] bedrock-agentcore:ListGatewayTargets. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListHarnessEndpoints">ListHarnessEndpoints</a></code> | <code>string</code> | [List] bedrock-agentcore:ListHarnessEndpoints. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListHarnesses">ListHarnesses</a></code> | <code>string</code> | [List] bedrock-agentcore:ListHarnesses. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListHarnessVersions">ListHarnessVersions</a></code> | <code>string</code> | [List] bedrock-agentcore:ListHarnessVersions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListMemories">ListMemories</a></code> | <code>string</code> | [List] bedrock-agentcore:ListMemories. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListMemoryExtractionJobs">ListMemoryExtractionJobs</a></code> | <code>string</code> | [List] bedrock-agentcore:ListMemoryExtractionJobs. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListMemoryRecords">ListMemoryRecords</a></code> | <code>string</code> | [List] bedrock-agentcore:ListMemoryRecords. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListOauth2CredentialProviders">ListOauth2CredentialProviders</a></code> | <code>string</code> | [Read] bedrock-agentcore:ListOauth2CredentialProviders. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListOnlineEvaluationConfigs">ListOnlineEvaluationConfigs</a></code> | <code>string</code> | [List] bedrock-agentcore:ListOnlineEvaluationConfigs. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPaymentConnectors">ListPaymentConnectors</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPaymentConnectors. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPaymentCredentialProviders">ListPaymentCredentialProviders</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPaymentCredentialProviders. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPaymentInstruments">ListPaymentInstruments</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPaymentInstruments. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPaymentManagers">ListPaymentManagers</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPaymentManagers. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPaymentSessions">ListPaymentSessions</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPaymentSessions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicies">ListPolicies</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPolicies. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicyEngines">ListPolicyEngines</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPolicyEngines. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicyEngineSummaries">ListPolicyEngineSummaries</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPolicyEngineSummaries. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicyGenerationAssets">ListPolicyGenerationAssets</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPolicyGenerationAssets. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicyGenerations">ListPolicyGenerations</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPolicyGenerations. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicyGenerationSummaries">ListPolicyGenerationSummaries</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPolicyGenerationSummaries. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicySummaries">ListPolicySummaries</a></code> | <code>string</code> | [List] bedrock-agentcore:ListPolicySummaries. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListRecommendations">ListRecommendations</a></code> | <code>string</code> | [List] bedrock-agentcore:ListRecommendations. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListRegistries">ListRegistries</a></code> | <code>string</code> | [List] bedrock-agentcore:ListRegistries. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListRegistryRecords">ListRegistryRecords</a></code> | <code>string</code> | [List] bedrock-agentcore:ListRegistryRecords. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [List] bedrock-agentcore:ListSessions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] bedrock-agentcore:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListWorkloadIdentities">ListWorkloadIdentities</a></code> | <code>string</code> | [Read] bedrock-agentcore:ListWorkloadIdentities. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ManageAdminPolicy">ManageAdminPolicy</a></code> | <code>string</code> | [PermissionManagement] bedrock-agentcore:ManageAdminPolicy. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ManageResourceScopedPolicy">ManageResourceScopedPolicy</a></code> | <code>string</code> | [PermissionManagement] bedrock-agentcore:ManageResourceScopedPolicy. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.PartiallyAuthorizeActions">PartiallyAuthorizeActions</a></code> | <code>string</code> | [PermissionManagement] bedrock-agentcore:PartiallyAuthorizeActions. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.PassCapacityProvider">PassCapacityProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:PassCapacityProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ProcessPayment">ProcessPayment</a></code> | <code>string</code> | [Write] bedrock-agentcore:ProcessPayment. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] bedrock-agentcore:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.PutSystemLogEvents">PutSystemLogEvents</a></code> | <code>string</code> | [Write] bedrock-agentcore:PutSystemLogEvents. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.RetrieveMemoryRecords">RetrieveMemoryRecords</a></code> | <code>string</code> | [List] bedrock-agentcore:RetrieveMemoryRecords. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.SaveBrowserSessionProfile">SaveBrowserSessionProfile</a></code> | <code>string</code> | [Write] bedrock-agentcore:SaveBrowserSessionProfile. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.SearchRegistryRecords">SearchRegistryRecords</a></code> | <code>string</code> | [Read] bedrock-agentcore:SearchRegistryRecords. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartBatchEvaluation">StartBatchEvaluation</a></code> | <code>string</code> | [Write] bedrock-agentcore:StartBatchEvaluation. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartBrowserSession">StartBrowserSession</a></code> | <code>string</code> | [Write] bedrock-agentcore:StartBrowserSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartCodeInterpreterSession">StartCodeInterpreterSession</a></code> | <code>string</code> | [Write] bedrock-agentcore:StartCodeInterpreterSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartMemoryExtractionJob">StartMemoryExtractionJob</a></code> | <code>string</code> | [Write] bedrock-agentcore:StartMemoryExtractionJob. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartPolicyGeneration">StartPolicyGeneration</a></code> | <code>string</code> | [Write] bedrock-agentcore:StartPolicyGeneration. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartRecommendation">StartRecommendation</a></code> | <code>string</code> | [Write] bedrock-agentcore:StartRecommendation. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StopBatchEvaluation">StopBatchEvaluation</a></code> | <code>string</code> | [Write] bedrock-agentcore:StopBatchEvaluation. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StopBrowserSession">StopBrowserSession</a></code> | <code>string</code> | [Write] bedrock-agentcore:StopBrowserSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StopCodeInterpreterSession">StopCodeInterpreterSession</a></code> | <code>string</code> | [Write] bedrock-agentcore:StopCodeInterpreterSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StopRuntimeSession">StopRuntimeSession</a></code> | <code>string</code> | [Write] bedrock-agentcore:StopRuntimeSession. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.SubmitRegistryRecordForApproval">SubmitRegistryRecordForApproval</a></code> | <code>string</code> | [Write] bedrock-agentcore:SubmitRegistryRecordForApproval. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.SynchronizeGatewayTargets">SynchronizeGatewayTargets</a></code> | <code>string</code> | [PermissionManagement] bedrock-agentcore:SynchronizeGatewayTargets. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] bedrock-agentcore:TagResource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] bedrock-agentcore:UntagResource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateABTest">UpdateABTest</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateABTest. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateAgentRuntime">UpdateAgentRuntime</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateAgentRuntime. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateAgentRuntimeEndpoint">UpdateAgentRuntimeEndpoint</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateAgentRuntimeEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateApiKeyCredentialProvider">UpdateApiKeyCredentialProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateApiKeyCredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateBrowserStream">UpdateBrowserStream</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateBrowserStream. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateCapacityProvider">UpdateCapacityProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateCapacityProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateConfigurationBundle">UpdateConfigurationBundle</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateConfigurationBundle. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateDataset">UpdateDataset</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateDataset. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateDatasetExamples">UpdateDatasetExamples</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateDatasetExamples. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateEvaluator">UpdateEvaluator</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateEvaluator. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateGateway">UpdateGateway</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateGateway. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateGatewayRateLimit">UpdateGatewayRateLimit</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateGatewayRateLimit. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateGatewayRule">UpdateGatewayRule</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateGatewayRule. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateGatewayTarget">UpdateGatewayTarget</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateGatewayTarget. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateHarness">UpdateHarness</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateHarness. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateHarnessEndpoint">UpdateHarnessEndpoint</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateHarnessEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateMemory">UpdateMemory</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateMemory. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateOauth2CredentialProvider">UpdateOauth2CredentialProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateOauth2CredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateOnlineEvaluationConfig">UpdateOnlineEvaluationConfig</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateOnlineEvaluationConfig. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdatePaymentConnector">UpdatePaymentConnector</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdatePaymentConnector. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdatePaymentCredentialProvider">UpdatePaymentCredentialProvider</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdatePaymentCredentialProvider. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdatePaymentManager">UpdatePaymentManager</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdatePaymentManager. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdatePolicy">UpdatePolicy</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdatePolicy. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdatePolicyEngine">UpdatePolicyEngine</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdatePolicyEngine. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateRegistry">UpdateRegistry</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateRegistry. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateRegistryRecord">UpdateRegistryRecord</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateRegistryRecord. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateRegistryRecordStatus">UpdateRegistryRecordStatus</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateRegistryRecordStatus. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateWorkloadIdentity">UpdateWorkloadIdentity</a></code> | <code>string</code> | [Write] bedrock-agentcore:UpdateWorkloadIdentity. |

---

##### `actionGetABTest`<sup>Required</sup> <a name="actionGetABTest" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetABTest"></a>

```typescript
public readonly actionGetABTest: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetABTest.

---

##### `actionGetAgentCard`<sup>Required</sup> <a name="actionGetAgentCard" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetAgentCard"></a>

```typescript
public readonly actionGetAgentCard: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetAgentCard.

---

##### `actionGetAgentRuntime`<sup>Required</sup> <a name="actionGetAgentRuntime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetAgentRuntime"></a>

```typescript
public readonly actionGetAgentRuntime: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetAgentRuntime.

---

##### `actionGetAgentRuntimeEndpoint`<sup>Required</sup> <a name="actionGetAgentRuntimeEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetAgentRuntimeEndpoint"></a>

```typescript
public readonly actionGetAgentRuntimeEndpoint: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetAgentRuntimeEndpoint.

---

##### `actionGetApiKeyCredentialProvider`<sup>Required</sup> <a name="actionGetApiKeyCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetApiKeyCredentialProvider"></a>

```typescript
public readonly actionGetApiKeyCredentialProvider: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetApiKeyCredentialProvider.

---

##### `actionGetBatchEvaluation`<sup>Required</sup> <a name="actionGetBatchEvaluation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetBatchEvaluation"></a>

```typescript
public readonly actionGetBatchEvaluation: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetBatchEvaluation.

---

##### `actionGetBrowser`<sup>Required</sup> <a name="actionGetBrowser" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetBrowser"></a>

```typescript
public readonly actionGetBrowser: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetBrowser.

---

##### `actionGetBrowserProfile`<sup>Required</sup> <a name="actionGetBrowserProfile" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetBrowserProfile"></a>

```typescript
public readonly actionGetBrowserProfile: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetBrowserProfile.

---

##### `actionGetBrowserSession`<sup>Required</sup> <a name="actionGetBrowserSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetBrowserSession"></a>

```typescript
public readonly actionGetBrowserSession: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetBrowserSession.

---

##### `actionGetCapacityProvider`<sup>Required</sup> <a name="actionGetCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetCapacityProvider"></a>

```typescript
public readonly actionGetCapacityProvider: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetCapacityProvider.

---

##### `actionGetCodeInterpreter`<sup>Required</sup> <a name="actionGetCodeInterpreter" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetCodeInterpreter"></a>

```typescript
public readonly actionGetCodeInterpreter: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetCodeInterpreter.

---

##### `actionGetCodeInterpreterSession`<sup>Required</sup> <a name="actionGetCodeInterpreterSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetCodeInterpreterSession"></a>

```typescript
public readonly actionGetCodeInterpreterSession: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetCodeInterpreterSession.

---

##### `actionGetConfigurationBundle`<sup>Required</sup> <a name="actionGetConfigurationBundle" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetConfigurationBundle"></a>

```typescript
public readonly actionGetConfigurationBundle: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetConfigurationBundle.

---

##### `actionGetConfigurationBundleVersion`<sup>Required</sup> <a name="actionGetConfigurationBundleVersion" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetConfigurationBundleVersion"></a>

```typescript
public readonly actionGetConfigurationBundleVersion: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetConfigurationBundleVersion.

---

##### `actionGetDataset`<sup>Required</sup> <a name="actionGetDataset" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetDataset"></a>

```typescript
public readonly actionGetDataset: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetDataset.

---

##### `actionGetEvaluator`<sup>Required</sup> <a name="actionGetEvaluator" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetEvaluator"></a>

```typescript
public readonly actionGetEvaluator: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetEvaluator.

---

##### `actionGetEvent`<sup>Required</sup> <a name="actionGetEvent" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetEvent"></a>

```typescript
public readonly actionGetEvent: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetEvent.

---

##### `actionGetGateway`<sup>Required</sup> <a name="actionGetGateway" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetGateway"></a>

```typescript
public readonly actionGetGateway: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetGateway.

---

##### `actionGetGatewayRateLimit`<sup>Required</sup> <a name="actionGetGatewayRateLimit" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetGatewayRateLimit"></a>

```typescript
public readonly actionGetGatewayRateLimit: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetGatewayRateLimit.

---

##### `actionGetGatewayRule`<sup>Required</sup> <a name="actionGetGatewayRule" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetGatewayRule"></a>

```typescript
public readonly actionGetGatewayRule: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetGatewayRule.

---

##### `actionGetGatewayTarget`<sup>Required</sup> <a name="actionGetGatewayTarget" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetGatewayTarget"></a>

```typescript
public readonly actionGetGatewayTarget: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetGatewayTarget.

---

##### `actionGetHarness`<sup>Required</sup> <a name="actionGetHarness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetHarness"></a>

```typescript
public readonly actionGetHarness: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetHarness.

---

##### `actionGetHarnessEndpoint`<sup>Required</sup> <a name="actionGetHarnessEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetHarnessEndpoint"></a>

```typescript
public readonly actionGetHarnessEndpoint: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetHarnessEndpoint.

---

##### `actionGetMemory`<sup>Required</sup> <a name="actionGetMemory" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetMemory"></a>

```typescript
public readonly actionGetMemory: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetMemory.

---

##### `actionGetMemoryRecord`<sup>Required</sup> <a name="actionGetMemoryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetMemoryRecord"></a>

```typescript
public readonly actionGetMemoryRecord: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetMemoryRecord.

---

##### `actionGetOauth2CredentialProvider`<sup>Required</sup> <a name="actionGetOauth2CredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetOauth2CredentialProvider"></a>

```typescript
public readonly actionGetOauth2CredentialProvider: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetOauth2CredentialProvider.

---

##### `actionGetOnlineEvaluationConfig`<sup>Required</sup> <a name="actionGetOnlineEvaluationConfig" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetOnlineEvaluationConfig"></a>

```typescript
public readonly actionGetOnlineEvaluationConfig: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetOnlineEvaluationConfig.

---

##### `actionGetPaymentConnector`<sup>Required</sup> <a name="actionGetPaymentConnector" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentConnector"></a>

```typescript
public readonly actionGetPaymentConnector: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPaymentConnector.

---

##### `actionGetPaymentCredentialProvider`<sup>Required</sup> <a name="actionGetPaymentCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentCredentialProvider"></a>

```typescript
public readonly actionGetPaymentCredentialProvider: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPaymentCredentialProvider.

---

##### `actionGetPaymentInstrument`<sup>Required</sup> <a name="actionGetPaymentInstrument" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentInstrument"></a>

```typescript
public readonly actionGetPaymentInstrument: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPaymentInstrument.

---

##### `actionGetPaymentInstrumentBalance`<sup>Required</sup> <a name="actionGetPaymentInstrumentBalance" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentInstrumentBalance"></a>

```typescript
public readonly actionGetPaymentInstrumentBalance: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPaymentInstrumentBalance.

---

##### `actionGetPaymentManager`<sup>Required</sup> <a name="actionGetPaymentManager" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentManager"></a>

```typescript
public readonly actionGetPaymentManager: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPaymentManager.

---

##### `actionGetPaymentSession`<sup>Required</sup> <a name="actionGetPaymentSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPaymentSession"></a>

```typescript
public readonly actionGetPaymentSession: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPaymentSession.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPolicy.

---

##### `actionGetPolicyEngine`<sup>Required</sup> <a name="actionGetPolicyEngine" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicyEngine"></a>

```typescript
public readonly actionGetPolicyEngine: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPolicyEngine.

---

##### `actionGetPolicyEngineSummary`<sup>Required</sup> <a name="actionGetPolicyEngineSummary" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicyEngineSummary"></a>

```typescript
public readonly actionGetPolicyEngineSummary: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPolicyEngineSummary.

---

##### `actionGetPolicyGeneration`<sup>Required</sup> <a name="actionGetPolicyGeneration" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicyGeneration"></a>

```typescript
public readonly actionGetPolicyGeneration: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPolicyGeneration.

---

##### `actionGetPolicyGenerationSummary`<sup>Required</sup> <a name="actionGetPolicyGenerationSummary" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicyGenerationSummary"></a>

```typescript
public readonly actionGetPolicyGenerationSummary: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPolicyGenerationSummary.

---

##### `actionGetPolicySummary`<sup>Required</sup> <a name="actionGetPolicySummary" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetPolicySummary"></a>

```typescript
public readonly actionGetPolicySummary: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetPolicySummary.

---

##### `actionGetRecommendation`<sup>Required</sup> <a name="actionGetRecommendation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetRecommendation"></a>

```typescript
public readonly actionGetRecommendation: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetRecommendation.

---

##### `actionGetRegistry`<sup>Required</sup> <a name="actionGetRegistry" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetRegistry"></a>

```typescript
public readonly actionGetRegistry: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetRegistry.

---

##### `actionGetRegistryRecord`<sup>Required</sup> <a name="actionGetRegistryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetRegistryRecord"></a>

```typescript
public readonly actionGetRegistryRecord: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetRegistryRecord.

---

##### `actionGetResourceApiKey`<sup>Required</sup> <a name="actionGetResourceApiKey" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetResourceApiKey"></a>

```typescript
public readonly actionGetResourceApiKey: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetResourceApiKey.

---

##### `actionGetResourceOauth2Token`<sup>Required</sup> <a name="actionGetResourceOauth2Token" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetResourceOauth2Token"></a>

```typescript
public readonly actionGetResourceOauth2Token: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetResourceOauth2Token.

---

##### `actionGetResourcePaymentToken`<sup>Required</sup> <a name="actionGetResourcePaymentToken" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetResourcePaymentToken"></a>

```typescript
public readonly actionGetResourcePaymentToken: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetResourcePaymentToken.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetResourcePolicy.

---

##### `actionGetTokenVault`<sup>Required</sup> <a name="actionGetTokenVault" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetTokenVault"></a>

```typescript
public readonly actionGetTokenVault: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetTokenVault.

---

##### `actionGetWorkloadAccessToken`<sup>Required</sup> <a name="actionGetWorkloadAccessToken" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetWorkloadAccessToken"></a>

```typescript
public readonly actionGetWorkloadAccessToken: string;
```

- *Type:* string

[Write] bedrock-agentcore:GetWorkloadAccessToken.

---

##### `actionGetWorkloadAccessTokenForJWT`<sup>Required</sup> <a name="actionGetWorkloadAccessTokenForJWT" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetWorkloadAccessTokenForJWT"></a>

```typescript
public readonly actionGetWorkloadAccessTokenForJWT: string;
```

- *Type:* string

[Write] bedrock-agentcore:GetWorkloadAccessTokenForJWT.

---

##### `actionGetWorkloadAccessTokenForUserId`<sup>Required</sup> <a name="actionGetWorkloadAccessTokenForUserId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetWorkloadAccessTokenForUserId"></a>

```typescript
public readonly actionGetWorkloadAccessTokenForUserId: string;
```

- *Type:* string

[Write] bedrock-agentcore:GetWorkloadAccessTokenForUserId.

---

##### `actionGetWorkloadIdentity`<sup>Required</sup> <a name="actionGetWorkloadIdentity" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionGetWorkloadIdentity"></a>

```typescript
public readonly actionGetWorkloadIdentity: string;
```

- *Type:* string

[Read] bedrock-agentcore:GetWorkloadIdentity.

---

##### `actionSetTokenVaultCMK`<sup>Required</sup> <a name="actionSetTokenVaultCMK" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.actionSetTokenVaultCMK"></a>

```typescript
public readonly actionSetTokenVaultCMK: string;
```

- *Type:* string

[Write] bedrock-agentcore:SetTokenVaultCMK.

---

##### `AddDatasetExamples`<sup>Required</sup> <a name="AddDatasetExamples" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AddDatasetExamples"></a>

```typescript
public readonly AddDatasetExamples: string;
```

- *Type:* string

[Write] bedrock-agentcore:AddDatasetExamples.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] bedrock-agentcore:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AuthorizeAction`<sup>Required</sup> <a name="AuthorizeAction" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.AuthorizeAction"></a>

```typescript
public readonly AuthorizeAction: string;
```

- *Type:* string

[PermissionManagement] bedrock-agentcore:AuthorizeAction.

---

##### `BatchCreateMemoryRecords`<sup>Required</sup> <a name="BatchCreateMemoryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.BatchCreateMemoryRecords"></a>

```typescript
public readonly BatchCreateMemoryRecords: string;
```

- *Type:* string

[Write] bedrock-agentcore:BatchCreateMemoryRecords.

---

##### `BatchDeleteMemoryRecords`<sup>Required</sup> <a name="BatchDeleteMemoryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.BatchDeleteMemoryRecords"></a>

```typescript
public readonly BatchDeleteMemoryRecords: string;
```

- *Type:* string

[Write] bedrock-agentcore:BatchDeleteMemoryRecords.

---

##### `BatchPutGatewayRateLimits`<sup>Required</sup> <a name="BatchPutGatewayRateLimits" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.BatchPutGatewayRateLimits"></a>

```typescript
public readonly BatchPutGatewayRateLimits: string;
```

- *Type:* string

[Write] bedrock-agentcore:BatchPutGatewayRateLimits.

---

##### `BatchUpdateMemoryRecords`<sup>Required</sup> <a name="BatchUpdateMemoryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.BatchUpdateMemoryRecords"></a>

```typescript
public readonly BatchUpdateMemoryRecords: string;
```

- *Type:* string

[Write] bedrock-agentcore:BatchUpdateMemoryRecords.

---

##### `CompleteResourceTokenAuth`<sup>Required</sup> <a name="CompleteResourceTokenAuth" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CompleteResourceTokenAuth"></a>

```typescript
public readonly CompleteResourceTokenAuth: string;
```

- *Type:* string

[Read] bedrock-agentcore:CompleteResourceTokenAuth.

---

##### `ConnectBrowserAutomationStream`<sup>Required</sup> <a name="ConnectBrowserAutomationStream" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ConnectBrowserAutomationStream"></a>

```typescript
public readonly ConnectBrowserAutomationStream: string;
```

- *Type:* string

[Read] bedrock-agentcore:ConnectBrowserAutomationStream.

---

##### `ConnectBrowserLiveViewStream`<sup>Required</sup> <a name="ConnectBrowserLiveViewStream" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ConnectBrowserLiveViewStream"></a>

```typescript
public readonly ConnectBrowserLiveViewStream: string;
```

- *Type:* string

[Read] bedrock-agentcore:ConnectBrowserLiveViewStream.

---

##### `CreateABTest`<sup>Required</sup> <a name="CreateABTest" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateABTest"></a>

```typescript
public readonly CreateABTest: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateABTest.

---

##### `CreateAgentRuntime`<sup>Required</sup> <a name="CreateAgentRuntime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateAgentRuntime"></a>

```typescript
public readonly CreateAgentRuntime: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateAgentRuntime.

---

##### `CreateAgentRuntimeEndpoint`<sup>Required</sup> <a name="CreateAgentRuntimeEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateAgentRuntimeEndpoint"></a>

```typescript
public readonly CreateAgentRuntimeEndpoint: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateAgentRuntimeEndpoint.

---

##### `CreateApiKeyCredentialProvider`<sup>Required</sup> <a name="CreateApiKeyCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateApiKeyCredentialProvider"></a>

```typescript
public readonly CreateApiKeyCredentialProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateApiKeyCredentialProvider.

---

##### `CreateBrowser`<sup>Required</sup> <a name="CreateBrowser" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateBrowser"></a>

```typescript
public readonly CreateBrowser: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateBrowser.

---

##### `CreateBrowserProfile`<sup>Required</sup> <a name="CreateBrowserProfile" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateBrowserProfile"></a>

```typescript
public readonly CreateBrowserProfile: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateBrowserProfile.

---

##### `CreateCapacityProvider`<sup>Required</sup> <a name="CreateCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateCapacityProvider"></a>

```typescript
public readonly CreateCapacityProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateCapacityProvider.

---

##### `CreateCodeInterpreter`<sup>Required</sup> <a name="CreateCodeInterpreter" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateCodeInterpreter"></a>

```typescript
public readonly CreateCodeInterpreter: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateCodeInterpreter.

---

##### `CreateConfigurationBundle`<sup>Required</sup> <a name="CreateConfigurationBundle" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateConfigurationBundle"></a>

```typescript
public readonly CreateConfigurationBundle: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateConfigurationBundle.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateDataset.

---

##### `CreateDatasetVersion`<sup>Required</sup> <a name="CreateDatasetVersion" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateDatasetVersion"></a>

```typescript
public readonly CreateDatasetVersion: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateDatasetVersion.

---

##### `CreateEvaluator`<sup>Required</sup> <a name="CreateEvaluator" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateEvaluator"></a>

```typescript
public readonly CreateEvaluator: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateEvaluator.

---

##### `CreateEvent`<sup>Required</sup> <a name="CreateEvent" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateEvent"></a>

```typescript
public readonly CreateEvent: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateEvent.

---

##### `CreateGateway`<sup>Required</sup> <a name="CreateGateway" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateGateway"></a>

```typescript
public readonly CreateGateway: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateGateway.

---

##### `CreateGatewayRateLimit`<sup>Required</sup> <a name="CreateGatewayRateLimit" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateGatewayRateLimit"></a>

```typescript
public readonly CreateGatewayRateLimit: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateGatewayRateLimit.

---

##### `CreateGatewayRule`<sup>Required</sup> <a name="CreateGatewayRule" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateGatewayRule"></a>

```typescript
public readonly CreateGatewayRule: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateGatewayRule.

---

##### `CreateGatewayTarget`<sup>Required</sup> <a name="CreateGatewayTarget" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateGatewayTarget"></a>

```typescript
public readonly CreateGatewayTarget: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateGatewayTarget.

---

##### `CreateHarness`<sup>Required</sup> <a name="CreateHarness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateHarness"></a>

```typescript
public readonly CreateHarness: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateHarness.

---

##### `CreateHarnessEndpoint`<sup>Required</sup> <a name="CreateHarnessEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateHarnessEndpoint"></a>

```typescript
public readonly CreateHarnessEndpoint: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateHarnessEndpoint.

---

##### `CreateMemory`<sup>Required</sup> <a name="CreateMemory" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateMemory"></a>

```typescript
public readonly CreateMemory: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateMemory.

---

##### `CreateOauth2CredentialProvider`<sup>Required</sup> <a name="CreateOauth2CredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateOauth2CredentialProvider"></a>

```typescript
public readonly CreateOauth2CredentialProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateOauth2CredentialProvider.

---

##### `CreateOnlineEvaluationConfig`<sup>Required</sup> <a name="CreateOnlineEvaluationConfig" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateOnlineEvaluationConfig"></a>

```typescript
public readonly CreateOnlineEvaluationConfig: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateOnlineEvaluationConfig.

---

##### `CreatePaymentConnector`<sup>Required</sup> <a name="CreatePaymentConnector" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePaymentConnector"></a>

```typescript
public readonly CreatePaymentConnector: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreatePaymentConnector.

---

##### `CreatePaymentCredentialProvider`<sup>Required</sup> <a name="CreatePaymentCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePaymentCredentialProvider"></a>

```typescript
public readonly CreatePaymentCredentialProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreatePaymentCredentialProvider.

---

##### `CreatePaymentInstrument`<sup>Required</sup> <a name="CreatePaymentInstrument" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePaymentInstrument"></a>

```typescript
public readonly CreatePaymentInstrument: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreatePaymentInstrument.

---

##### `CreatePaymentManager`<sup>Required</sup> <a name="CreatePaymentManager" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePaymentManager"></a>

```typescript
public readonly CreatePaymentManager: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreatePaymentManager.

---

##### `CreatePaymentSession`<sup>Required</sup> <a name="CreatePaymentSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePaymentSession"></a>

```typescript
public readonly CreatePaymentSession: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreatePaymentSession.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreatePolicy.

---

##### `CreatePolicyEngine`<sup>Required</sup> <a name="CreatePolicyEngine" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreatePolicyEngine"></a>

```typescript
public readonly CreatePolicyEngine: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreatePolicyEngine.

---

##### `CreateRegistry`<sup>Required</sup> <a name="CreateRegistry" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateRegistry"></a>

```typescript
public readonly CreateRegistry: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateRegistry.

---

##### `CreateRegistryRecord`<sup>Required</sup> <a name="CreateRegistryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateRegistryRecord"></a>

```typescript
public readonly CreateRegistryRecord: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateRegistryRecord.

---

##### `CreateWorkloadIdentity`<sup>Required</sup> <a name="CreateWorkloadIdentity" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.CreateWorkloadIdentity"></a>

```typescript
public readonly CreateWorkloadIdentity: string;
```

- *Type:* string

[Write] bedrock-agentcore:CreateWorkloadIdentity.

---

##### `DeleteABTest`<sup>Required</sup> <a name="DeleteABTest" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteABTest"></a>

```typescript
public readonly DeleteABTest: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteABTest.

---

##### `DeleteAgentRuntime`<sup>Required</sup> <a name="DeleteAgentRuntime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteAgentRuntime"></a>

```typescript
public readonly DeleteAgentRuntime: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteAgentRuntime.

---

##### `DeleteAgentRuntimeEndpoint`<sup>Required</sup> <a name="DeleteAgentRuntimeEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteAgentRuntimeEndpoint"></a>

```typescript
public readonly DeleteAgentRuntimeEndpoint: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteAgentRuntimeEndpoint.

---

##### `DeleteApiKeyCredentialProvider`<sup>Required</sup> <a name="DeleteApiKeyCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteApiKeyCredentialProvider"></a>

```typescript
public readonly DeleteApiKeyCredentialProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteApiKeyCredentialProvider.

---

##### `DeleteBatchEvaluation`<sup>Required</sup> <a name="DeleteBatchEvaluation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteBatchEvaluation"></a>

```typescript
public readonly DeleteBatchEvaluation: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteBatchEvaluation.

---

##### `DeleteBrowser`<sup>Required</sup> <a name="DeleteBrowser" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteBrowser"></a>

```typescript
public readonly DeleteBrowser: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteBrowser.

---

##### `DeleteBrowserProfile`<sup>Required</sup> <a name="DeleteBrowserProfile" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteBrowserProfile"></a>

```typescript
public readonly DeleteBrowserProfile: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteBrowserProfile.

---

##### `DeleteCapacityProvider`<sup>Required</sup> <a name="DeleteCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteCapacityProvider"></a>

```typescript
public readonly DeleteCapacityProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteCapacityProvider.

---

##### `DeleteCapacityProviderSession`<sup>Required</sup> <a name="DeleteCapacityProviderSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteCapacityProviderSession"></a>

```typescript
public readonly DeleteCapacityProviderSession: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteCapacityProviderSession.

---

##### `DeleteCodeInterpreter`<sup>Required</sup> <a name="DeleteCodeInterpreter" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteCodeInterpreter"></a>

```typescript
public readonly DeleteCodeInterpreter: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteCodeInterpreter.

---

##### `DeleteConfigurationBundle`<sup>Required</sup> <a name="DeleteConfigurationBundle" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteConfigurationBundle"></a>

```typescript
public readonly DeleteConfigurationBundle: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteConfigurationBundle.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteDataset.

---

##### `DeleteDatasetExamples`<sup>Required</sup> <a name="DeleteDatasetExamples" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteDatasetExamples"></a>

```typescript
public readonly DeleteDatasetExamples: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteDatasetExamples.

---

##### `DeleteEvaluator`<sup>Required</sup> <a name="DeleteEvaluator" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteEvaluator"></a>

```typescript
public readonly DeleteEvaluator: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteEvaluator.

---

##### `DeleteEvent`<sup>Required</sup> <a name="DeleteEvent" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteEvent"></a>

```typescript
public readonly DeleteEvent: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteEvent.

---

##### `DeleteGateway`<sup>Required</sup> <a name="DeleteGateway" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteGateway"></a>

```typescript
public readonly DeleteGateway: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteGateway.

---

##### `DeleteGatewayRateLimit`<sup>Required</sup> <a name="DeleteGatewayRateLimit" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteGatewayRateLimit"></a>

```typescript
public readonly DeleteGatewayRateLimit: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteGatewayRateLimit.

---

##### `DeleteGatewayRule`<sup>Required</sup> <a name="DeleteGatewayRule" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteGatewayRule"></a>

```typescript
public readonly DeleteGatewayRule: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteGatewayRule.

---

##### `DeleteGatewayTarget`<sup>Required</sup> <a name="DeleteGatewayTarget" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteGatewayTarget"></a>

```typescript
public readonly DeleteGatewayTarget: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteGatewayTarget.

---

##### `DeleteHarness`<sup>Required</sup> <a name="DeleteHarness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteHarness"></a>

```typescript
public readonly DeleteHarness: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteHarness.

---

##### `DeleteHarnessEndpoint`<sup>Required</sup> <a name="DeleteHarnessEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteHarnessEndpoint"></a>

```typescript
public readonly DeleteHarnessEndpoint: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteHarnessEndpoint.

---

##### `DeleteMemory`<sup>Required</sup> <a name="DeleteMemory" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteMemory"></a>

```typescript
public readonly DeleteMemory: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteMemory.

---

##### `DeleteMemoryRecord`<sup>Required</sup> <a name="DeleteMemoryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteMemoryRecord"></a>

```typescript
public readonly DeleteMemoryRecord: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteMemoryRecord.

---

##### `DeleteOauth2CredentialProvider`<sup>Required</sup> <a name="DeleteOauth2CredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteOauth2CredentialProvider"></a>

```typescript
public readonly DeleteOauth2CredentialProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteOauth2CredentialProvider.

---

##### `DeleteOnlineEvaluationConfig`<sup>Required</sup> <a name="DeleteOnlineEvaluationConfig" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteOnlineEvaluationConfig"></a>

```typescript
public readonly DeleteOnlineEvaluationConfig: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteOnlineEvaluationConfig.

---

##### `DeletePaymentConnector`<sup>Required</sup> <a name="DeletePaymentConnector" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePaymentConnector"></a>

```typescript
public readonly DeletePaymentConnector: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeletePaymentConnector.

---

##### `DeletePaymentCredentialProvider`<sup>Required</sup> <a name="DeletePaymentCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePaymentCredentialProvider"></a>

```typescript
public readonly DeletePaymentCredentialProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeletePaymentCredentialProvider.

---

##### `DeletePaymentInstrument`<sup>Required</sup> <a name="DeletePaymentInstrument" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePaymentInstrument"></a>

```typescript
public readonly DeletePaymentInstrument: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeletePaymentInstrument.

---

##### `DeletePaymentManager`<sup>Required</sup> <a name="DeletePaymentManager" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePaymentManager"></a>

```typescript
public readonly DeletePaymentManager: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeletePaymentManager.

---

##### `DeletePaymentSession`<sup>Required</sup> <a name="DeletePaymentSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePaymentSession"></a>

```typescript
public readonly DeletePaymentSession: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeletePaymentSession.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeletePolicy.

---

##### `DeletePolicyEngine`<sup>Required</sup> <a name="DeletePolicyEngine" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeletePolicyEngine"></a>

```typescript
public readonly DeletePolicyEngine: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeletePolicyEngine.

---

##### `DeleteRecommendation`<sup>Required</sup> <a name="DeleteRecommendation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteRecommendation"></a>

```typescript
public readonly DeleteRecommendation: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteRecommendation.

---

##### `DeleteRegistry`<sup>Required</sup> <a name="DeleteRegistry" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteRegistry"></a>

```typescript
public readonly DeleteRegistry: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteRegistry.

---

##### `DeleteRegistryRecord`<sup>Required</sup> <a name="DeleteRegistryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteRegistryRecord"></a>

```typescript
public readonly DeleteRegistryRecord: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteRegistryRecord.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteResourcePolicy.

---

##### `DeleteWorkloadIdentity`<sup>Required</sup> <a name="DeleteWorkloadIdentity" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.DeleteWorkloadIdentity"></a>

```typescript
public readonly DeleteWorkloadIdentity: string;
```

- *Type:* string

[Write] bedrock-agentcore:DeleteWorkloadIdentity.

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.Evaluate"></a>

```typescript
public readonly Evaluate: string;
```

- *Type:* string

[Write] bedrock-agentcore:Evaluate.

---

##### `GatewayAssociateWebACL`<sup>Required</sup> <a name="GatewayAssociateWebACL" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.GatewayAssociateWebACL"></a>

```typescript
public readonly GatewayAssociateWebACL: string;
```

- *Type:* string

[Write] bedrock-agentcore:GatewayAssociateWebACL.

---

##### `GatewayDisassociateWebACL`<sup>Required</sup> <a name="GatewayDisassociateWebACL" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.GatewayDisassociateWebACL"></a>

```typescript
public readonly GatewayDisassociateWebACL: string;
```

- *Type:* string

[Write] bedrock-agentcore:GatewayDisassociateWebACL.

---

##### `GatewayGetWebACLForResource`<sup>Required</sup> <a name="GatewayGetWebACLForResource" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.GatewayGetWebACLForResource"></a>

```typescript
public readonly GatewayGetWebACLForResource: string;
```

- *Type:* string

[Read] bedrock-agentcore:GatewayGetWebACLForResource.

---

##### `GatewayListResourcesForWebACL`<sup>Required</sup> <a name="GatewayListResourcesForWebACL" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.GatewayListResourcesForWebACL"></a>

```typescript
public readonly GatewayListResourcesForWebACL: string;
```

- *Type:* string

[List] bedrock-agentcore:GatewayListResourcesForWebACL.

---

##### `InvokeAgentRuntime`<sup>Required</sup> <a name="InvokeAgentRuntime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntime"></a>

```typescript
public readonly InvokeAgentRuntime: string;
```

- *Type:* string

[Write] bedrock-agentcore:InvokeAgentRuntime.

---

##### `InvokeAgentRuntimeCommand`<sup>Required</sup> <a name="InvokeAgentRuntimeCommand" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntimeCommand"></a>

```typescript
public readonly InvokeAgentRuntimeCommand: string;
```

- *Type:* string

[Write] bedrock-agentcore:InvokeAgentRuntimeCommand.

---

##### `InvokeAgentRuntimeCommandShell`<sup>Required</sup> <a name="InvokeAgentRuntimeCommandShell" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntimeCommandShell"></a>

```typescript
public readonly InvokeAgentRuntimeCommandShell: string;
```

- *Type:* string

[Write] bedrock-agentcore:InvokeAgentRuntimeCommandShell.

---

##### `InvokeAgentRuntimeForUser`<sup>Required</sup> <a name="InvokeAgentRuntimeForUser" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntimeForUser"></a>

```typescript
public readonly InvokeAgentRuntimeForUser: string;
```

- *Type:* string

[Write] bedrock-agentcore:InvokeAgentRuntimeForUser.

---

##### `InvokeAgentRuntimeWithWebSocketStream`<sup>Required</sup> <a name="InvokeAgentRuntimeWithWebSocketStream" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntimeWithWebSocketStream"></a>

```typescript
public readonly InvokeAgentRuntimeWithWebSocketStream: string;
```

- *Type:* string

[Write] bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStream.

---

##### `InvokeAgentRuntimeWithWebSocketStreamForUser`<sup>Required</sup> <a name="InvokeAgentRuntimeWithWebSocketStreamForUser" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeAgentRuntimeWithWebSocketStreamForUser"></a>

```typescript
public readonly InvokeAgentRuntimeWithWebSocketStreamForUser: string;
```

- *Type:* string

[Write] bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStreamForUser.

---

##### `InvokeCodeInterpreter`<sup>Required</sup> <a name="InvokeCodeInterpreter" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeCodeInterpreter"></a>

```typescript
public readonly InvokeCodeInterpreter: string;
```

- *Type:* string

[Write] bedrock-agentcore:InvokeCodeInterpreter.

---

##### `InvokeGateway`<sup>Required</sup> <a name="InvokeGateway" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeGateway"></a>

```typescript
public readonly InvokeGateway: string;
```

- *Type:* string

[PermissionManagement] bedrock-agentcore:InvokeGateway.

---

##### `InvokeHarness`<sup>Required</sup> <a name="InvokeHarness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeHarness"></a>

```typescript
public readonly InvokeHarness: string;
```

- *Type:* string

[Write] bedrock-agentcore:InvokeHarness.

---

##### `InvokeRegistryMcp`<sup>Required</sup> <a name="InvokeRegistryMcp" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeRegistryMcp"></a>

```typescript
public readonly InvokeRegistryMcp: string;
```

- *Type:* string

[Read] bedrock-agentcore:InvokeRegistryMcp.

---

##### `InvokeWebSearch`<sup>Required</sup> <a name="InvokeWebSearch" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.InvokeWebSearch"></a>

```typescript
public readonly InvokeWebSearch: string;
```

- *Type:* string

[PermissionManagement] bedrock-agentcore:InvokeWebSearch.

---

##### `ListABTests`<sup>Required</sup> <a name="ListABTests" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListABTests"></a>

```typescript
public readonly ListABTests: string;
```

- *Type:* string

[List] bedrock-agentcore:ListABTests.

---

##### `ListActors`<sup>Required</sup> <a name="ListActors" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListActors"></a>

```typescript
public readonly ListActors: string;
```

- *Type:* string

[List] bedrock-agentcore:ListActors.

---

##### `ListAgentRuntimeEndpoints`<sup>Required</sup> <a name="ListAgentRuntimeEndpoints" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListAgentRuntimeEndpoints"></a>

```typescript
public readonly ListAgentRuntimeEndpoints: string;
```

- *Type:* string

[List] bedrock-agentcore:ListAgentRuntimeEndpoints.

---

##### `ListAgentRuntimes`<sup>Required</sup> <a name="ListAgentRuntimes" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListAgentRuntimes"></a>

```typescript
public readonly ListAgentRuntimes: string;
```

- *Type:* string

[List] bedrock-agentcore:ListAgentRuntimes.

---

##### `ListAgentRuntimeVersions`<sup>Required</sup> <a name="ListAgentRuntimeVersions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListAgentRuntimeVersions"></a>

```typescript
public readonly ListAgentRuntimeVersions: string;
```

- *Type:* string

[List] bedrock-agentcore:ListAgentRuntimeVersions.

---

##### `ListAgentRuntimeVersionsByCapacityProvider`<sup>Required</sup> <a name="ListAgentRuntimeVersionsByCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListAgentRuntimeVersionsByCapacityProvider"></a>

```typescript
public readonly ListAgentRuntimeVersionsByCapacityProvider: string;
```

- *Type:* string

[List] bedrock-agentcore:ListAgentRuntimeVersionsByCapacityProvider.

---

##### `ListApiKeyCredentialProviders`<sup>Required</sup> <a name="ListApiKeyCredentialProviders" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListApiKeyCredentialProviders"></a>

```typescript
public readonly ListApiKeyCredentialProviders: string;
```

- *Type:* string

[Read] bedrock-agentcore:ListApiKeyCredentialProviders.

---

##### `ListBatchEvaluations`<sup>Required</sup> <a name="ListBatchEvaluations" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListBatchEvaluations"></a>

```typescript
public readonly ListBatchEvaluations: string;
```

- *Type:* string

[List] bedrock-agentcore:ListBatchEvaluations.

---

##### `ListBrowserProfiles`<sup>Required</sup> <a name="ListBrowserProfiles" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListBrowserProfiles"></a>

```typescript
public readonly ListBrowserProfiles: string;
```

- *Type:* string

[List] bedrock-agentcore:ListBrowserProfiles.

---

##### `ListBrowsers`<sup>Required</sup> <a name="ListBrowsers" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListBrowsers"></a>

```typescript
public readonly ListBrowsers: string;
```

- *Type:* string

[List] bedrock-agentcore:ListBrowsers.

---

##### `ListBrowserSessions`<sup>Required</sup> <a name="ListBrowserSessions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListBrowserSessions"></a>

```typescript
public readonly ListBrowserSessions: string;
```

- *Type:* string

[List] bedrock-agentcore:ListBrowserSessions.

---

##### `ListCapacityProviders`<sup>Required</sup> <a name="ListCapacityProviders" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListCapacityProviders"></a>

```typescript
public readonly ListCapacityProviders: string;
```

- *Type:* string

[List] bedrock-agentcore:ListCapacityProviders.

---

##### `ListCodeInterpreters`<sup>Required</sup> <a name="ListCodeInterpreters" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListCodeInterpreters"></a>

```typescript
public readonly ListCodeInterpreters: string;
```

- *Type:* string

[List] bedrock-agentcore:ListCodeInterpreters.

---

##### `ListCodeInterpreterSessions`<sup>Required</sup> <a name="ListCodeInterpreterSessions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListCodeInterpreterSessions"></a>

```typescript
public readonly ListCodeInterpreterSessions: string;
```

- *Type:* string

[List] bedrock-agentcore:ListCodeInterpreterSessions.

---

##### `ListConfigurationBundles`<sup>Required</sup> <a name="ListConfigurationBundles" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListConfigurationBundles"></a>

```typescript
public readonly ListConfigurationBundles: string;
```

- *Type:* string

[List] bedrock-agentcore:ListConfigurationBundles.

---

##### `ListConfigurationBundleVersions`<sup>Required</sup> <a name="ListConfigurationBundleVersions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListConfigurationBundleVersions"></a>

```typescript
public readonly ListConfigurationBundleVersions: string;
```

- *Type:* string

[List] bedrock-agentcore:ListConfigurationBundleVersions.

---

##### `ListDatasetExamples`<sup>Required</sup> <a name="ListDatasetExamples" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListDatasetExamples"></a>

```typescript
public readonly ListDatasetExamples: string;
```

- *Type:* string

[List] bedrock-agentcore:ListDatasetExamples.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string;
```

- *Type:* string

[List] bedrock-agentcore:ListDatasets.

---

##### `ListDatasetVersions`<sup>Required</sup> <a name="ListDatasetVersions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListDatasetVersions"></a>

```typescript
public readonly ListDatasetVersions: string;
```

- *Type:* string

[List] bedrock-agentcore:ListDatasetVersions.

---

##### `ListEvaluators`<sup>Required</sup> <a name="ListEvaluators" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListEvaluators"></a>

```typescript
public readonly ListEvaluators: string;
```

- *Type:* string

[List] bedrock-agentcore:ListEvaluators.

---

##### `ListEvents`<sup>Required</sup> <a name="ListEvents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListEvents"></a>

```typescript
public readonly ListEvents: string;
```

- *Type:* string

[List] bedrock-agentcore:ListEvents.

---

##### `ListGatewayRateLimits`<sup>Required</sup> <a name="ListGatewayRateLimits" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListGatewayRateLimits"></a>

```typescript
public readonly ListGatewayRateLimits: string;
```

- *Type:* string

[List] bedrock-agentcore:ListGatewayRateLimits.

---

##### `ListGatewayRules`<sup>Required</sup> <a name="ListGatewayRules" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListGatewayRules"></a>

```typescript
public readonly ListGatewayRules: string;
```

- *Type:* string

[List] bedrock-agentcore:ListGatewayRules.

---

##### `ListGateways`<sup>Required</sup> <a name="ListGateways" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListGateways"></a>

```typescript
public readonly ListGateways: string;
```

- *Type:* string

[List] bedrock-agentcore:ListGateways.

---

##### `ListGatewayTargets`<sup>Required</sup> <a name="ListGatewayTargets" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListGatewayTargets"></a>

```typescript
public readonly ListGatewayTargets: string;
```

- *Type:* string

[List] bedrock-agentcore:ListGatewayTargets.

---

##### `ListHarnessEndpoints`<sup>Required</sup> <a name="ListHarnessEndpoints" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListHarnessEndpoints"></a>

```typescript
public readonly ListHarnessEndpoints: string;
```

- *Type:* string

[List] bedrock-agentcore:ListHarnessEndpoints.

---

##### `ListHarnesses`<sup>Required</sup> <a name="ListHarnesses" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListHarnesses"></a>

```typescript
public readonly ListHarnesses: string;
```

- *Type:* string

[List] bedrock-agentcore:ListHarnesses.

---

##### `ListHarnessVersions`<sup>Required</sup> <a name="ListHarnessVersions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListHarnessVersions"></a>

```typescript
public readonly ListHarnessVersions: string;
```

- *Type:* string

[List] bedrock-agentcore:ListHarnessVersions.

---

##### `ListMemories`<sup>Required</sup> <a name="ListMemories" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListMemories"></a>

```typescript
public readonly ListMemories: string;
```

- *Type:* string

[List] bedrock-agentcore:ListMemories.

---

##### `ListMemoryExtractionJobs`<sup>Required</sup> <a name="ListMemoryExtractionJobs" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListMemoryExtractionJobs"></a>

```typescript
public readonly ListMemoryExtractionJobs: string;
```

- *Type:* string

[List] bedrock-agentcore:ListMemoryExtractionJobs.

---

##### `ListMemoryRecords`<sup>Required</sup> <a name="ListMemoryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListMemoryRecords"></a>

```typescript
public readonly ListMemoryRecords: string;
```

- *Type:* string

[List] bedrock-agentcore:ListMemoryRecords.

---

##### `ListOauth2CredentialProviders`<sup>Required</sup> <a name="ListOauth2CredentialProviders" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListOauth2CredentialProviders"></a>

```typescript
public readonly ListOauth2CredentialProviders: string;
```

- *Type:* string

[Read] bedrock-agentcore:ListOauth2CredentialProviders.

---

##### `ListOnlineEvaluationConfigs`<sup>Required</sup> <a name="ListOnlineEvaluationConfigs" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListOnlineEvaluationConfigs"></a>

```typescript
public readonly ListOnlineEvaluationConfigs: string;
```

- *Type:* string

[List] bedrock-agentcore:ListOnlineEvaluationConfigs.

---

##### `ListPaymentConnectors`<sup>Required</sup> <a name="ListPaymentConnectors" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPaymentConnectors"></a>

```typescript
public readonly ListPaymentConnectors: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPaymentConnectors.

---

##### `ListPaymentCredentialProviders`<sup>Required</sup> <a name="ListPaymentCredentialProviders" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPaymentCredentialProviders"></a>

```typescript
public readonly ListPaymentCredentialProviders: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPaymentCredentialProviders.

---

##### `ListPaymentInstruments`<sup>Required</sup> <a name="ListPaymentInstruments" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPaymentInstruments"></a>

```typescript
public readonly ListPaymentInstruments: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPaymentInstruments.

---

##### `ListPaymentManagers`<sup>Required</sup> <a name="ListPaymentManagers" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPaymentManagers"></a>

```typescript
public readonly ListPaymentManagers: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPaymentManagers.

---

##### `ListPaymentSessions`<sup>Required</sup> <a name="ListPaymentSessions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPaymentSessions"></a>

```typescript
public readonly ListPaymentSessions: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPaymentSessions.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPolicies.

---

##### `ListPolicyEngines`<sup>Required</sup> <a name="ListPolicyEngines" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicyEngines"></a>

```typescript
public readonly ListPolicyEngines: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPolicyEngines.

---

##### `ListPolicyEngineSummaries`<sup>Required</sup> <a name="ListPolicyEngineSummaries" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicyEngineSummaries"></a>

```typescript
public readonly ListPolicyEngineSummaries: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPolicyEngineSummaries.

---

##### `ListPolicyGenerationAssets`<sup>Required</sup> <a name="ListPolicyGenerationAssets" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicyGenerationAssets"></a>

```typescript
public readonly ListPolicyGenerationAssets: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPolicyGenerationAssets.

---

##### `ListPolicyGenerations`<sup>Required</sup> <a name="ListPolicyGenerations" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicyGenerations"></a>

```typescript
public readonly ListPolicyGenerations: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPolicyGenerations.

---

##### `ListPolicyGenerationSummaries`<sup>Required</sup> <a name="ListPolicyGenerationSummaries" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicyGenerationSummaries"></a>

```typescript
public readonly ListPolicyGenerationSummaries: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPolicyGenerationSummaries.

---

##### `ListPolicySummaries`<sup>Required</sup> <a name="ListPolicySummaries" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListPolicySummaries"></a>

```typescript
public readonly ListPolicySummaries: string;
```

- *Type:* string

[List] bedrock-agentcore:ListPolicySummaries.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string;
```

- *Type:* string

[List] bedrock-agentcore:ListRecommendations.

---

##### `ListRegistries`<sup>Required</sup> <a name="ListRegistries" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListRegistries"></a>

```typescript
public readonly ListRegistries: string;
```

- *Type:* string

[List] bedrock-agentcore:ListRegistries.

---

##### `ListRegistryRecords`<sup>Required</sup> <a name="ListRegistryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListRegistryRecords"></a>

```typescript
public readonly ListRegistryRecords: string;
```

- *Type:* string

[List] bedrock-agentcore:ListRegistryRecords.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[List] bedrock-agentcore:ListSessions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] bedrock-agentcore:ListTagsForResource.

---

##### `ListWorkloadIdentities`<sup>Required</sup> <a name="ListWorkloadIdentities" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ListWorkloadIdentities"></a>

```typescript
public readonly ListWorkloadIdentities: string;
```

- *Type:* string

[Read] bedrock-agentcore:ListWorkloadIdentities.

---

##### `ManageAdminPolicy`<sup>Required</sup> <a name="ManageAdminPolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ManageAdminPolicy"></a>

```typescript
public readonly ManageAdminPolicy: string;
```

- *Type:* string

[PermissionManagement] bedrock-agentcore:ManageAdminPolicy.

---

##### `ManageResourceScopedPolicy`<sup>Required</sup> <a name="ManageResourceScopedPolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ManageResourceScopedPolicy"></a>

```typescript
public readonly ManageResourceScopedPolicy: string;
```

- *Type:* string

[PermissionManagement] bedrock-agentcore:ManageResourceScopedPolicy.

---

##### `PartiallyAuthorizeActions`<sup>Required</sup> <a name="PartiallyAuthorizeActions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.PartiallyAuthorizeActions"></a>

```typescript
public readonly PartiallyAuthorizeActions: string;
```

- *Type:* string

[PermissionManagement] bedrock-agentcore:PartiallyAuthorizeActions.

---

##### `PassCapacityProvider`<sup>Required</sup> <a name="PassCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.PassCapacityProvider"></a>

```typescript
public readonly PassCapacityProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:PassCapacityProvider.

---

##### `ProcessPayment`<sup>Required</sup> <a name="ProcessPayment" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.ProcessPayment"></a>

```typescript
public readonly ProcessPayment: string;
```

- *Type:* string

[Write] bedrock-agentcore:ProcessPayment.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] bedrock-agentcore:PutResourcePolicy.

---

##### `PutSystemLogEvents`<sup>Required</sup> <a name="PutSystemLogEvents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.PutSystemLogEvents"></a>

```typescript
public readonly PutSystemLogEvents: string;
```

- *Type:* string

[Write] bedrock-agentcore:PutSystemLogEvents.

---

##### `RetrieveMemoryRecords`<sup>Required</sup> <a name="RetrieveMemoryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.RetrieveMemoryRecords"></a>

```typescript
public readonly RetrieveMemoryRecords: string;
```

- *Type:* string

[List] bedrock-agentcore:RetrieveMemoryRecords.

---

##### `SaveBrowserSessionProfile`<sup>Required</sup> <a name="SaveBrowserSessionProfile" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.SaveBrowserSessionProfile"></a>

```typescript
public readonly SaveBrowserSessionProfile: string;
```

- *Type:* string

[Write] bedrock-agentcore:SaveBrowserSessionProfile.

---

##### `SearchRegistryRecords`<sup>Required</sup> <a name="SearchRegistryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.SearchRegistryRecords"></a>

```typescript
public readonly SearchRegistryRecords: string;
```

- *Type:* string

[Read] bedrock-agentcore:SearchRegistryRecords.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBatchEvaluation`<sup>Required</sup> <a name="StartBatchEvaluation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartBatchEvaluation"></a>

```typescript
public readonly StartBatchEvaluation: string;
```

- *Type:* string

[Write] bedrock-agentcore:StartBatchEvaluation.

---

##### `StartBrowserSession`<sup>Required</sup> <a name="StartBrowserSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartBrowserSession"></a>

```typescript
public readonly StartBrowserSession: string;
```

- *Type:* string

[Write] bedrock-agentcore:StartBrowserSession.

---

##### `StartCodeInterpreterSession`<sup>Required</sup> <a name="StartCodeInterpreterSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartCodeInterpreterSession"></a>

```typescript
public readonly StartCodeInterpreterSession: string;
```

- *Type:* string

[Write] bedrock-agentcore:StartCodeInterpreterSession.

---

##### `StartMemoryExtractionJob`<sup>Required</sup> <a name="StartMemoryExtractionJob" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartMemoryExtractionJob"></a>

```typescript
public readonly StartMemoryExtractionJob: string;
```

- *Type:* string

[Write] bedrock-agentcore:StartMemoryExtractionJob.

---

##### `StartPolicyGeneration`<sup>Required</sup> <a name="StartPolicyGeneration" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartPolicyGeneration"></a>

```typescript
public readonly StartPolicyGeneration: string;
```

- *Type:* string

[Write] bedrock-agentcore:StartPolicyGeneration.

---

##### `StartRecommendation`<sup>Required</sup> <a name="StartRecommendation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StartRecommendation"></a>

```typescript
public readonly StartRecommendation: string;
```

- *Type:* string

[Write] bedrock-agentcore:StartRecommendation.

---

##### `StopBatchEvaluation`<sup>Required</sup> <a name="StopBatchEvaluation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StopBatchEvaluation"></a>

```typescript
public readonly StopBatchEvaluation: string;
```

- *Type:* string

[Write] bedrock-agentcore:StopBatchEvaluation.

---

##### `StopBrowserSession`<sup>Required</sup> <a name="StopBrowserSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StopBrowserSession"></a>

```typescript
public readonly StopBrowserSession: string;
```

- *Type:* string

[Write] bedrock-agentcore:StopBrowserSession.

---

##### `StopCodeInterpreterSession`<sup>Required</sup> <a name="StopCodeInterpreterSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StopCodeInterpreterSession"></a>

```typescript
public readonly StopCodeInterpreterSession: string;
```

- *Type:* string

[Write] bedrock-agentcore:StopCodeInterpreterSession.

---

##### `StopRuntimeSession`<sup>Required</sup> <a name="StopRuntimeSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.StopRuntimeSession"></a>

```typescript
public readonly StopRuntimeSession: string;
```

- *Type:* string

[Write] bedrock-agentcore:StopRuntimeSession.

---

##### `SubmitRegistryRecordForApproval`<sup>Required</sup> <a name="SubmitRegistryRecordForApproval" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.SubmitRegistryRecordForApproval"></a>

```typescript
public readonly SubmitRegistryRecordForApproval: string;
```

- *Type:* string

[Write] bedrock-agentcore:SubmitRegistryRecordForApproval.

---

##### `SynchronizeGatewayTargets`<sup>Required</sup> <a name="SynchronizeGatewayTargets" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.SynchronizeGatewayTargets"></a>

```typescript
public readonly SynchronizeGatewayTargets: string;
```

- *Type:* string

[PermissionManagement] bedrock-agentcore:SynchronizeGatewayTargets.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] bedrock-agentcore:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] bedrock-agentcore:UntagResource.

---

##### `UpdateABTest`<sup>Required</sup> <a name="UpdateABTest" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateABTest"></a>

```typescript
public readonly UpdateABTest: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateABTest.

---

##### `UpdateAgentRuntime`<sup>Required</sup> <a name="UpdateAgentRuntime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateAgentRuntime"></a>

```typescript
public readonly UpdateAgentRuntime: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateAgentRuntime.

---

##### `UpdateAgentRuntimeEndpoint`<sup>Required</sup> <a name="UpdateAgentRuntimeEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateAgentRuntimeEndpoint"></a>

```typescript
public readonly UpdateAgentRuntimeEndpoint: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateAgentRuntimeEndpoint.

---

##### `UpdateApiKeyCredentialProvider`<sup>Required</sup> <a name="UpdateApiKeyCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateApiKeyCredentialProvider"></a>

```typescript
public readonly UpdateApiKeyCredentialProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateApiKeyCredentialProvider.

---

##### `UpdateBrowserStream`<sup>Required</sup> <a name="UpdateBrowserStream" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateBrowserStream"></a>

```typescript
public readonly UpdateBrowserStream: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateBrowserStream.

---

##### `UpdateCapacityProvider`<sup>Required</sup> <a name="UpdateCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateCapacityProvider"></a>

```typescript
public readonly UpdateCapacityProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateCapacityProvider.

---

##### `UpdateConfigurationBundle`<sup>Required</sup> <a name="UpdateConfigurationBundle" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateConfigurationBundle"></a>

```typescript
public readonly UpdateConfigurationBundle: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateConfigurationBundle.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateDataset.

---

##### `UpdateDatasetExamples`<sup>Required</sup> <a name="UpdateDatasetExamples" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateDatasetExamples"></a>

```typescript
public readonly UpdateDatasetExamples: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateDatasetExamples.

---

##### `UpdateEvaluator`<sup>Required</sup> <a name="UpdateEvaluator" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateEvaluator"></a>

```typescript
public readonly UpdateEvaluator: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateEvaluator.

---

##### `UpdateGateway`<sup>Required</sup> <a name="UpdateGateway" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateGateway"></a>

```typescript
public readonly UpdateGateway: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateGateway.

---

##### `UpdateGatewayRateLimit`<sup>Required</sup> <a name="UpdateGatewayRateLimit" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateGatewayRateLimit"></a>

```typescript
public readonly UpdateGatewayRateLimit: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateGatewayRateLimit.

---

##### `UpdateGatewayRule`<sup>Required</sup> <a name="UpdateGatewayRule" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateGatewayRule"></a>

```typescript
public readonly UpdateGatewayRule: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateGatewayRule.

---

##### `UpdateGatewayTarget`<sup>Required</sup> <a name="UpdateGatewayTarget" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateGatewayTarget"></a>

```typescript
public readonly UpdateGatewayTarget: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateGatewayTarget.

---

##### `UpdateHarness`<sup>Required</sup> <a name="UpdateHarness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateHarness"></a>

```typescript
public readonly UpdateHarness: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateHarness.

---

##### `UpdateHarnessEndpoint`<sup>Required</sup> <a name="UpdateHarnessEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateHarnessEndpoint"></a>

```typescript
public readonly UpdateHarnessEndpoint: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateHarnessEndpoint.

---

##### `UpdateMemory`<sup>Required</sup> <a name="UpdateMemory" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateMemory"></a>

```typescript
public readonly UpdateMemory: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateMemory.

---

##### `UpdateOauth2CredentialProvider`<sup>Required</sup> <a name="UpdateOauth2CredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateOauth2CredentialProvider"></a>

```typescript
public readonly UpdateOauth2CredentialProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateOauth2CredentialProvider.

---

##### `UpdateOnlineEvaluationConfig`<sup>Required</sup> <a name="UpdateOnlineEvaluationConfig" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateOnlineEvaluationConfig"></a>

```typescript
public readonly UpdateOnlineEvaluationConfig: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateOnlineEvaluationConfig.

---

##### `UpdatePaymentConnector`<sup>Required</sup> <a name="UpdatePaymentConnector" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdatePaymentConnector"></a>

```typescript
public readonly UpdatePaymentConnector: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdatePaymentConnector.

---

##### `UpdatePaymentCredentialProvider`<sup>Required</sup> <a name="UpdatePaymentCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdatePaymentCredentialProvider"></a>

```typescript
public readonly UpdatePaymentCredentialProvider: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdatePaymentCredentialProvider.

---

##### `UpdatePaymentManager`<sup>Required</sup> <a name="UpdatePaymentManager" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdatePaymentManager"></a>

```typescript
public readonly UpdatePaymentManager: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdatePaymentManager.

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdatePolicy"></a>

```typescript
public readonly UpdatePolicy: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdatePolicy.

---

##### `UpdatePolicyEngine`<sup>Required</sup> <a name="UpdatePolicyEngine" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdatePolicyEngine"></a>

```typescript
public readonly UpdatePolicyEngine: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdatePolicyEngine.

---

##### `UpdateRegistry`<sup>Required</sup> <a name="UpdateRegistry" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateRegistry"></a>

```typescript
public readonly UpdateRegistry: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateRegistry.

---

##### `UpdateRegistryRecord`<sup>Required</sup> <a name="UpdateRegistryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateRegistryRecord"></a>

```typescript
public readonly UpdateRegistryRecord: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateRegistryRecord.

---

##### `UpdateRegistryRecordStatus`<sup>Required</sup> <a name="UpdateRegistryRecordStatus" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateRegistryRecordStatus"></a>

```typescript
public readonly UpdateRegistryRecordStatus: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateRegistryRecordStatus.

---

##### `UpdateWorkloadIdentity`<sup>Required</sup> <a name="UpdateWorkloadIdentity" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreActions.property.UpdateWorkloadIdentity"></a>

```typescript
public readonly UpdateWorkloadIdentity: string;
```

- *Type:* string

[Write] bedrock-agentcore:UpdateWorkloadIdentity.

---

### BedrockAgentcoreConditions <a name="BedrockAgentcoreConditions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions"></a>

Condition key constants and builders for bedrock-agentcore.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

new bedrock_agentcore.BedrockAgentcoreConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.actorId">actorId</a></code> | Generates a condition block for `bedrock-agentcore:actorId`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.allowedQueryParameters">allowedQueryParameters</a></code> | Generates a condition block for `bedrock-agentcore:AllowedQueryParameters`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.allowedRequestHeaders">allowedRequestHeaders</a></code> | Generates a condition block for `bedrock-agentcore:AllowedRequestHeaders`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.allowedResponseHeaders">allowedResponseHeaders</a></code> | Generates a condition block for `bedrock-agentcore:AllowedResponseHeaders`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.credentialProviderScope">credentialProviderScope</a></code> | Generates a condition block for `bedrock-agentcore:CredentialProviderScope`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.credentialProviderType">credentialProviderType</a></code> | Generates a condition block for `bedrock-agentcore:CredentialProviderType`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.discoveryURL">discoveryURL</a></code> | Generates a condition block for `bedrock-agentcore:DiscoveryUrl`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.gatewayAuthorizerType">gatewayAuthorizerType</a></code> | Generates a condition block for `bedrock-agentcore:GatewayAuthorizerType`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.httpTargetConfigurationType">httpTargetConfigurationType</a></code> | Generates a condition block for `bedrock-agentcore:HttpTargetConfigurationType`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimAud">inboundJwtClaimAud</a></code> | Generates a condition block for `bedrock-agentcore:InboundJwtClaim/aud`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimClientId">inboundJwtClaimClientId</a></code> | Generates a condition block for `bedrock-agentcore:InboundJwtClaim/client_id`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimIss">inboundJwtClaimIss</a></code> | Generates a condition block for `bedrock-agentcore:InboundJwtClaim/iss`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimScope">inboundJwtClaimScope</a></code> | Generates a condition block for `bedrock-agentcore:InboundJwtClaim/scope`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimSub">inboundJwtClaimSub</a></code> | Generates a condition block for `bedrock-agentcore:InboundJwtClaim/sub`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inferenceTargetConfigurationType">inferenceTargetConfigurationType</a></code> | Generates a condition block for `bedrock-agentcore:InferenceTargetConfigurationType`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.kmsKeyARN">kmsKeyARN</a></code> | Generates a condition block for `bedrock-agentcore:KmsKeyArn`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.mcpTargetConfigurationType">mcpTargetConfigurationType</a></code> | Generates a condition block for `bedrock-agentcore:McpTargetConfigurationType`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.namespace">namespace</a></code> | Generates a condition block for `bedrock-agentcore:namespace`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.policyEngineARN">policyEngineARN</a></code> | Generates a condition block for `bedrock-agentcore:PolicyEngineArn`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.policyEngineMode">policyEngineMode</a></code> | Generates a condition block for `bedrock-agentcore:PolicyEngineMode`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.privateEndpointType">privateEndpointType</a></code> | Generates a condition block for `bedrock-agentcore:PrivateEndpointType`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.protocolType">protocolType</a></code> | Generates a condition block for `bedrock-agentcore:ProtocolType`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | Generates a condition block for `bedrock-agentcore:ResourceConfigurationIdentifier`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.runtimeAuthorizerType">runtimeAuthorizerType</a></code> | Generates a condition block for `bedrock-agentcore:RuntimeAuthorizerType`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.runtimeSessionId">runtimeSessionId</a></code> | Generates a condition block for `bedrock-agentcore:runtimeSessionId`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.securityGroups">securityGroups</a></code> | Generates a condition block for `bedrock-agentcore:securityGroups`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.sessionId">sessionId</a></code> | Generates a condition block for `bedrock-agentcore:sessionId`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.strategyId">strategyId</a></code> | Generates a condition block for `bedrock-agentcore:strategyId`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.subnets">subnets</a></code> | Generates a condition block for `bedrock-agentcore:subnets`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.userid">userid</a></code> | Generates a condition block for `bedrock-agentcore:userid`. |

---

##### `actorId` <a name="actorId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.actorId"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.actorId(value: string)
```

Generates a condition block for `bedrock-agentcore:actorId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.actorId.parameter.value"></a>

- *Type:* string

---

##### `allowedQueryParameters` <a name="allowedQueryParameters" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.allowedQueryParameters"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.allowedQueryParameters(values: string[])
```

Generates a condition block for `bedrock-agentcore:AllowedQueryParameters`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.allowedQueryParameters.parameter.values"></a>

- *Type:* string[]

---

##### `allowedRequestHeaders` <a name="allowedRequestHeaders" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.allowedRequestHeaders"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.allowedRequestHeaders(values: string[])
```

Generates a condition block for `bedrock-agentcore:AllowedRequestHeaders`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.allowedRequestHeaders.parameter.values"></a>

- *Type:* string[]

---

##### `allowedResponseHeaders` <a name="allowedResponseHeaders" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.allowedResponseHeaders"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.allowedResponseHeaders(values: string[])
```

Generates a condition block for `bedrock-agentcore:AllowedResponseHeaders`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.allowedResponseHeaders.parameter.values"></a>

- *Type:* string[]

---

##### `credentialProviderScope` <a name="credentialProviderScope" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.credentialProviderScope"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.credentialProviderScope(values: string[])
```

Generates a condition block for `bedrock-agentcore:CredentialProviderScope`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.credentialProviderScope.parameter.values"></a>

- *Type:* string[]

---

##### `credentialProviderType` <a name="credentialProviderType" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.credentialProviderType"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.credentialProviderType(value: string)
```

Generates a condition block for `bedrock-agentcore:CredentialProviderType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.credentialProviderType.parameter.value"></a>

- *Type:* string

---

##### `discoveryURL` <a name="discoveryURL" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.discoveryURL"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.discoveryURL(value: string)
```

Generates a condition block for `bedrock-agentcore:DiscoveryUrl`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.discoveryURL.parameter.value"></a>

- *Type:* string

---

##### `gatewayAuthorizerType` <a name="gatewayAuthorizerType" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.gatewayAuthorizerType"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.gatewayAuthorizerType(value: string)
```

Generates a condition block for `bedrock-agentcore:GatewayAuthorizerType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.gatewayAuthorizerType.parameter.value"></a>

- *Type:* string

---

##### `httpTargetConfigurationType` <a name="httpTargetConfigurationType" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.httpTargetConfigurationType"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.httpTargetConfigurationType(value: string)
```

Generates a condition block for `bedrock-agentcore:HttpTargetConfigurationType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.httpTargetConfigurationType.parameter.value"></a>

- *Type:* string

---

##### `inboundJwtClaimAud` <a name="inboundJwtClaimAud" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimAud"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimAud(values: string[])
```

Generates a condition block for `bedrock-agentcore:InboundJwtClaim/aud`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimAud.parameter.values"></a>

- *Type:* string[]

---

##### `inboundJwtClaimClientId` <a name="inboundJwtClaimClientId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimClientId"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimClientId(value: string)
```

Generates a condition block for `bedrock-agentcore:InboundJwtClaim/client_id`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimClientId.parameter.value"></a>

- *Type:* string

---

##### `inboundJwtClaimIss` <a name="inboundJwtClaimIss" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimIss"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimIss(value: string)
```

Generates a condition block for `bedrock-agentcore:InboundJwtClaim/iss`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimIss.parameter.value"></a>

- *Type:* string

---

##### `inboundJwtClaimScope` <a name="inboundJwtClaimScope" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimScope"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimScope(values: string[])
```

Generates a condition block for `bedrock-agentcore:InboundJwtClaim/scope`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimScope.parameter.values"></a>

- *Type:* string[]

---

##### `inboundJwtClaimSub` <a name="inboundJwtClaimSub" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimSub"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimSub(value: string)
```

Generates a condition block for `bedrock-agentcore:InboundJwtClaim/sub`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inboundJwtClaimSub.parameter.value"></a>

- *Type:* string

---

##### `inferenceTargetConfigurationType` <a name="inferenceTargetConfigurationType" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inferenceTargetConfigurationType"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.inferenceTargetConfigurationType(value: string)
```

Generates a condition block for `bedrock-agentcore:InferenceTargetConfigurationType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.inferenceTargetConfigurationType.parameter.value"></a>

- *Type:* string

---

##### `kmsKeyARN` <a name="kmsKeyARN" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.kmsKeyARN"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.kmsKeyARN(value: string)
```

Generates a condition block for `bedrock-agentcore:KmsKeyArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.kmsKeyARN.parameter.value"></a>

- *Type:* string

---

##### `mcpTargetConfigurationType` <a name="mcpTargetConfigurationType" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.mcpTargetConfigurationType"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.mcpTargetConfigurationType(value: string)
```

Generates a condition block for `bedrock-agentcore:McpTargetConfigurationType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.mcpTargetConfigurationType.parameter.value"></a>

- *Type:* string

---

##### `namespace` <a name="namespace" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.namespace"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.namespace(value: string)
```

Generates a condition block for `bedrock-agentcore:namespace`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.namespace.parameter.value"></a>

- *Type:* string

---

##### `policyEngineARN` <a name="policyEngineARN" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.policyEngineARN"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.policyEngineARN(value: string)
```

Generates a condition block for `bedrock-agentcore:PolicyEngineArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.policyEngineARN.parameter.value"></a>

- *Type:* string

---

##### `policyEngineMode` <a name="policyEngineMode" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.policyEngineMode"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.policyEngineMode(value: string)
```

Generates a condition block for `bedrock-agentcore:PolicyEngineMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.policyEngineMode.parameter.value"></a>

- *Type:* string

---

##### `privateEndpointType` <a name="privateEndpointType" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.privateEndpointType"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.privateEndpointType(value: string)
```

Generates a condition block for `bedrock-agentcore:PrivateEndpointType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.privateEndpointType.parameter.value"></a>

- *Type:* string

---

##### `protocolType` <a name="protocolType" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.protocolType"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.protocolType(value: string)
```

Generates a condition block for `bedrock-agentcore:ProtocolType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.protocolType.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.requestTag"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceConfigurationIdentifier` <a name="resourceConfigurationIdentifier" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.resourceConfigurationIdentifier"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.resourceConfigurationIdentifier(value: string)
```

Generates a condition block for `bedrock-agentcore:ResourceConfigurationIdentifier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.resourceConfigurationIdentifier.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.resourceTag"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `runtimeAuthorizerType` <a name="runtimeAuthorizerType" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.runtimeAuthorizerType"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.runtimeAuthorizerType(value: string)
```

Generates a condition block for `bedrock-agentcore:RuntimeAuthorizerType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.runtimeAuthorizerType.parameter.value"></a>

- *Type:* string

---

##### `runtimeSessionId` <a name="runtimeSessionId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.runtimeSessionId"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.runtimeSessionId(value: string)
```

Generates a condition block for `bedrock-agentcore:runtimeSessionId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.runtimeSessionId.parameter.value"></a>

- *Type:* string

---

##### `securityGroups` <a name="securityGroups" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.securityGroups"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.securityGroups(values: string[])
```

Generates a condition block for `bedrock-agentcore:securityGroups`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.securityGroups.parameter.values"></a>

- *Type:* string[]

---

##### `sessionId` <a name="sessionId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.sessionId"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.sessionId(value: string)
```

Generates a condition block for `bedrock-agentcore:sessionId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.sessionId.parameter.value"></a>

- *Type:* string

---

##### `strategyId` <a name="strategyId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.strategyId"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.strategyId(value: string)
```

Generates a condition block for `bedrock-agentcore:strategyId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.strategyId.parameter.value"></a>

- *Type:* string

---

##### `subnets` <a name="subnets" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.subnets"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.subnets(values: string[])
```

Generates a condition block for `bedrock-agentcore:subnets`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.subnets.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.tagKeys"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `userid` <a name="userid" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.userid"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreConditions.userid(value: string)
```

Generates a condition block for `bedrock-agentcore:userid`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.userid.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.actionGetEventConditionKeys">actionGetEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEvent action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.actionGetWorkloadAccessTokenForJWTConditionKeys">actionGetWorkloadAccessTokenForJWTConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetWorkloadAccessTokenForJWT action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.actionGetWorkloadAccessTokenForUserIdConditionKeys">actionGetWorkloadAccessTokenForUserIdConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetWorkloadAccessTokenForUserId action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ACTOR_ID">ACTOR_ID</a></code> | <code>string</code> | Condition key: bedrock-agentcore:actorId (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ALLOWED_QUERY_PARAMETERS">ALLOWED_QUERY_PARAMETERS</a></code> | <code>string</code> | Condition key: bedrock-agentcore:AllowedQueryParameters (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ALLOWED_REQUEST_HEADERS">ALLOWED_REQUEST_HEADERS</a></code> | <code>string</code> | Condition key: bedrock-agentcore:AllowedRequestHeaders (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ALLOWED_RESPONSE_HEADERS">ALLOWED_RESPONSE_HEADERS</a></code> | <code>string</code> | Condition key: bedrock-agentcore:AllowedResponseHeaders (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.BatchCreateMemoryRecordsConditionKeys">BatchCreateMemoryRecordsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchCreateMemoryRecords action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.BatchUpdateMemoryRecordsConditionKeys">BatchUpdateMemoryRecordsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchUpdateMemoryRecords action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CompleteResourceTokenAuthConditionKeys">CompleteResourceTokenAuthConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CompleteResourceTokenAuth action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateAgentRuntimeConditionKeys">CreateAgentRuntimeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgentRuntime action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateAgentRuntimeEndpointConditionKeys">CreateAgentRuntimeEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgentRuntimeEndpoint action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateApiKeyCredentialProviderConditionKeys">CreateApiKeyCredentialProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApiKeyCredentialProvider action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateBrowserConditionKeys">CreateBrowserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBrowser action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateBrowserProfileConditionKeys">CreateBrowserProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBrowserProfile action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateCapacityProviderConditionKeys">CreateCapacityProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCapacityProvider action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateCodeInterpreterConditionKeys">CreateCodeInterpreterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCodeInterpreter action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateDatasetConditionKeys">CreateDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataset action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateEvaluatorConditionKeys">CreateEvaluatorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEvaluator action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateEventConditionKeys">CreateEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEvent action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateGatewayConditionKeys">CreateGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGateway action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateHarnessConditionKeys">CreateHarnessConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHarness action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateHarnessEndpointConditionKeys">CreateHarnessEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHarnessEndpoint action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateMemoryConditionKeys">CreateMemoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMemory action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateOauth2CredentialProviderConditionKeys">CreateOauth2CredentialProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOauth2CredentialProvider action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateOnlineEvaluationConfigConditionKeys">CreateOnlineEvaluationConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOnlineEvaluationConfig action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreatePaymentCredentialProviderConditionKeys">CreatePaymentCredentialProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePaymentCredentialProvider action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreatePaymentManagerConditionKeys">CreatePaymentManagerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePaymentManager action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreatePolicyEngineConditionKeys">CreatePolicyEngineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePolicyEngine action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateWorkloadIdentityConditionKeys">CreateWorkloadIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkloadIdentity action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CREDENTIAL_PROVIDER_SCOPE">CREDENTIAL_PROVIDER_SCOPE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:CredentialProviderScope (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CREDENTIAL_PROVIDER_TYPE">CREDENTIAL_PROVIDER_TYPE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:CredentialProviderType (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.DeleteEventConditionKeys">DeleteEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEvent action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.DISCOVERY_URL">DISCOVERY_URL</a></code> | <code>string</code> | Condition key: bedrock-agentcore:DiscoveryUrl (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.GATEWAY_AUTHORIZER_TYPE">GATEWAY_AUTHORIZER_TYPE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:GatewayAuthorizerType (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.HTTP_TARGET_CONFIGURATION_TYPE">HTTP_TARGET_CONFIGURATION_TYPE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:HttpTargetConfigurationType (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INBOUND_JWT_CLAIM_AUD">INBOUND_JWT_CLAIM_AUD</a></code> | <code>string</code> | Condition key: bedrock-agentcore:InboundJwtClaim/aud (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INBOUND_JWT_CLAIM_CLIENT_ID">INBOUND_JWT_CLAIM_CLIENT_ID</a></code> | <code>string</code> | Condition key: bedrock-agentcore:InboundJwtClaim/client_id (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INBOUND_JWT_CLAIM_ISS">INBOUND_JWT_CLAIM_ISS</a></code> | <code>string</code> | Condition key: bedrock-agentcore:InboundJwtClaim/iss (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INBOUND_JWT_CLAIM_SCOPE">INBOUND_JWT_CLAIM_SCOPE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:InboundJwtClaim/scope (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INBOUND_JWT_CLAIM_SUB">INBOUND_JWT_CLAIM_SUB</a></code> | <code>string</code> | Condition key: bedrock-agentcore:InboundJwtClaim/sub (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INFERENCE_TARGET_CONFIGURATION_TYPE">INFERENCE_TARGET_CONFIGURATION_TYPE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:InferenceTargetConfigurationType (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.KMS_KEY_ARN">KMS_KEY_ARN</a></code> | <code>string</code> | Condition key: bedrock-agentcore:KmsKeyArn (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ListEventsConditionKeys">ListEventsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEvents action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ListMemoryRecordsConditionKeys">ListMemoryRecordsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListMemoryRecords action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ListSessionsConditionKeys">ListSessionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSessions action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.MCP_TARGET_CONFIGURATION_TYPE">MCP_TARGET_CONFIGURATION_TYPE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:McpTargetConfigurationType (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.NAMESPACE">NAMESPACE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:namespace (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.POLICY_ENGINE_ARN">POLICY_ENGINE_ARN</a></code> | <code>string</code> | Condition key: bedrock-agentcore:PolicyEngineArn (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.POLICY_ENGINE_MODE">POLICY_ENGINE_MODE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:PolicyEngineMode (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.PRIVATE_ENDPOINT_TYPE">PRIVATE_ENDPOINT_TYPE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:PrivateEndpointType (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.PROTOCOL_TYPE">PROTOCOL_TYPE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:ProtocolType (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.PutSystemLogEventsConditionKeys">PutSystemLogEventsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutSystemLogEvents action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.RESOURCE_CONFIGURATION_IDENTIFIER">RESOURCE_CONFIGURATION_IDENTIFIER</a></code> | <code>string</code> | Condition key: bedrock-agentcore:ResourceConfigurationIdentifier (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.RetrieveMemoryRecordsConditionKeys">RetrieveMemoryRecordsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RetrieveMemoryRecords action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.RUNTIME_AUTHORIZER_TYPE">RUNTIME_AUTHORIZER_TYPE</a></code> | <code>string</code> | Condition key: bedrock-agentcore:RuntimeAuthorizerType (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.RUNTIME_SESSION_ID">RUNTIME_SESSION_ID</a></code> | <code>string</code> | Condition key: bedrock-agentcore:runtimeSessionId (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.SECURITY_GROUPS">SECURITY_GROUPS</a></code> | <code>string</code> | Condition key: bedrock-agentcore:securityGroups (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.SESSION_ID">SESSION_ID</a></code> | <code>string</code> | Condition key: bedrock-agentcore:sessionId (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.StartMemoryExtractionJobConditionKeys">StartMemoryExtractionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartMemoryExtractionJob action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.STRATEGY_ID">STRATEGY_ID</a></code> | <code>string</code> | Condition key: bedrock-agentcore:strategyId (String). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.SUBNETS">SUBNETS</a></code> | <code>string</code> | Condition key: bedrock-agentcore:subnets (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.UpdateAgentRuntimeConditionKeys">UpdateAgentRuntimeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAgentRuntime action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.UpdatePaymentManagerConditionKeys">UpdatePaymentManagerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePaymentManager action. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.USERID">USERID</a></code> | <code>string</code> | Condition key: bedrock-agentcore:userid (String). |

---

##### `actionGetEventConditionKeys`<sup>Required</sup> <a name="actionGetEventConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.actionGetEventConditionKeys"></a>

```typescript
public readonly actionGetEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEvent action.

---

##### `actionGetWorkloadAccessTokenForJWTConditionKeys`<sup>Required</sup> <a name="actionGetWorkloadAccessTokenForJWTConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.actionGetWorkloadAccessTokenForJWTConditionKeys"></a>

```typescript
public readonly actionGetWorkloadAccessTokenForJWTConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetWorkloadAccessTokenForJWT action.

---

##### `actionGetWorkloadAccessTokenForUserIdConditionKeys`<sup>Required</sup> <a name="actionGetWorkloadAccessTokenForUserIdConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.actionGetWorkloadAccessTokenForUserIdConditionKeys"></a>

```typescript
public readonly actionGetWorkloadAccessTokenForUserIdConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetWorkloadAccessTokenForUserId action.

---

##### `ACTOR_ID`<sup>Required</sup> <a name="ACTOR_ID" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ACTOR_ID"></a>

```typescript
public readonly ACTOR_ID: string;
```

- *Type:* string

Condition key: bedrock-agentcore:actorId (String).

---

##### `ALLOWED_QUERY_PARAMETERS`<sup>Required</sup> <a name="ALLOWED_QUERY_PARAMETERS" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ALLOWED_QUERY_PARAMETERS"></a>

```typescript
public readonly ALLOWED_QUERY_PARAMETERS: string;
```

- *Type:* string

Condition key: bedrock-agentcore:AllowedQueryParameters (ArrayOfString).

---

##### `ALLOWED_REQUEST_HEADERS`<sup>Required</sup> <a name="ALLOWED_REQUEST_HEADERS" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ALLOWED_REQUEST_HEADERS"></a>

```typescript
public readonly ALLOWED_REQUEST_HEADERS: string;
```

- *Type:* string

Condition key: bedrock-agentcore:AllowedRequestHeaders (ArrayOfString).

---

##### `ALLOWED_RESPONSE_HEADERS`<sup>Required</sup> <a name="ALLOWED_RESPONSE_HEADERS" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ALLOWED_RESPONSE_HEADERS"></a>

```typescript
public readonly ALLOWED_RESPONSE_HEADERS: string;
```

- *Type:* string

Condition key: bedrock-agentcore:AllowedResponseHeaders (ArrayOfString).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchCreateMemoryRecordsConditionKeys`<sup>Required</sup> <a name="BatchCreateMemoryRecordsConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.BatchCreateMemoryRecordsConditionKeys"></a>

```typescript
public readonly BatchCreateMemoryRecordsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchCreateMemoryRecords action.

---

##### `BatchUpdateMemoryRecordsConditionKeys`<sup>Required</sup> <a name="BatchUpdateMemoryRecordsConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.BatchUpdateMemoryRecordsConditionKeys"></a>

```typescript
public readonly BatchUpdateMemoryRecordsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchUpdateMemoryRecords action.

---

##### `CompleteResourceTokenAuthConditionKeys`<sup>Required</sup> <a name="CompleteResourceTokenAuthConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CompleteResourceTokenAuthConditionKeys"></a>

```typescript
public readonly CompleteResourceTokenAuthConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CompleteResourceTokenAuth action.

---

##### `CreateAgentRuntimeConditionKeys`<sup>Required</sup> <a name="CreateAgentRuntimeConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateAgentRuntimeConditionKeys"></a>

```typescript
public readonly CreateAgentRuntimeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgentRuntime action.

---

##### `CreateAgentRuntimeEndpointConditionKeys`<sup>Required</sup> <a name="CreateAgentRuntimeEndpointConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateAgentRuntimeEndpointConditionKeys"></a>

```typescript
public readonly CreateAgentRuntimeEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgentRuntimeEndpoint action.

---

##### `CreateApiKeyCredentialProviderConditionKeys`<sup>Required</sup> <a name="CreateApiKeyCredentialProviderConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateApiKeyCredentialProviderConditionKeys"></a>

```typescript
public readonly CreateApiKeyCredentialProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApiKeyCredentialProvider action.

---

##### `CreateBrowserConditionKeys`<sup>Required</sup> <a name="CreateBrowserConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateBrowserConditionKeys"></a>

```typescript
public readonly CreateBrowserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBrowser action.

---

##### `CreateBrowserProfileConditionKeys`<sup>Required</sup> <a name="CreateBrowserProfileConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateBrowserProfileConditionKeys"></a>

```typescript
public readonly CreateBrowserProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBrowserProfile action.

---

##### `CreateCapacityProviderConditionKeys`<sup>Required</sup> <a name="CreateCapacityProviderConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateCapacityProviderConditionKeys"></a>

```typescript
public readonly CreateCapacityProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCapacityProvider action.

---

##### `CreateCodeInterpreterConditionKeys`<sup>Required</sup> <a name="CreateCodeInterpreterConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateCodeInterpreterConditionKeys"></a>

```typescript
public readonly CreateCodeInterpreterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCodeInterpreter action.

---

##### `CreateDatasetConditionKeys`<sup>Required</sup> <a name="CreateDatasetConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateDatasetConditionKeys"></a>

```typescript
public readonly CreateDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataset action.

---

##### `CreateEvaluatorConditionKeys`<sup>Required</sup> <a name="CreateEvaluatorConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateEvaluatorConditionKeys"></a>

```typescript
public readonly CreateEvaluatorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEvaluator action.

---

##### `CreateEventConditionKeys`<sup>Required</sup> <a name="CreateEventConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateEventConditionKeys"></a>

```typescript
public readonly CreateEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEvent action.

---

##### `CreateGatewayConditionKeys`<sup>Required</sup> <a name="CreateGatewayConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateGatewayConditionKeys"></a>

```typescript
public readonly CreateGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGateway action.

---

##### `CreateHarnessConditionKeys`<sup>Required</sup> <a name="CreateHarnessConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateHarnessConditionKeys"></a>

```typescript
public readonly CreateHarnessConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHarness action.

---

##### `CreateHarnessEndpointConditionKeys`<sup>Required</sup> <a name="CreateHarnessEndpointConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateHarnessEndpointConditionKeys"></a>

```typescript
public readonly CreateHarnessEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHarnessEndpoint action.

---

##### `CreateMemoryConditionKeys`<sup>Required</sup> <a name="CreateMemoryConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateMemoryConditionKeys"></a>

```typescript
public readonly CreateMemoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMemory action.

---

##### `CreateOauth2CredentialProviderConditionKeys`<sup>Required</sup> <a name="CreateOauth2CredentialProviderConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateOauth2CredentialProviderConditionKeys"></a>

```typescript
public readonly CreateOauth2CredentialProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOauth2CredentialProvider action.

---

##### `CreateOnlineEvaluationConfigConditionKeys`<sup>Required</sup> <a name="CreateOnlineEvaluationConfigConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateOnlineEvaluationConfigConditionKeys"></a>

```typescript
public readonly CreateOnlineEvaluationConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOnlineEvaluationConfig action.

---

##### `CreatePaymentCredentialProviderConditionKeys`<sup>Required</sup> <a name="CreatePaymentCredentialProviderConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreatePaymentCredentialProviderConditionKeys"></a>

```typescript
public readonly CreatePaymentCredentialProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePaymentCredentialProvider action.

---

##### `CreatePaymentManagerConditionKeys`<sup>Required</sup> <a name="CreatePaymentManagerConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreatePaymentManagerConditionKeys"></a>

```typescript
public readonly CreatePaymentManagerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePaymentManager action.

---

##### `CreatePolicyEngineConditionKeys`<sup>Required</sup> <a name="CreatePolicyEngineConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreatePolicyEngineConditionKeys"></a>

```typescript
public readonly CreatePolicyEngineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePolicyEngine action.

---

##### `CreateWorkloadIdentityConditionKeys`<sup>Required</sup> <a name="CreateWorkloadIdentityConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CreateWorkloadIdentityConditionKeys"></a>

```typescript
public readonly CreateWorkloadIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkloadIdentity action.

---

##### `CREDENTIAL_PROVIDER_SCOPE`<sup>Required</sup> <a name="CREDENTIAL_PROVIDER_SCOPE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CREDENTIAL_PROVIDER_SCOPE"></a>

```typescript
public readonly CREDENTIAL_PROVIDER_SCOPE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:CredentialProviderScope (ArrayOfString).

---

##### `CREDENTIAL_PROVIDER_TYPE`<sup>Required</sup> <a name="CREDENTIAL_PROVIDER_TYPE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.CREDENTIAL_PROVIDER_TYPE"></a>

```typescript
public readonly CREDENTIAL_PROVIDER_TYPE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:CredentialProviderType (String).

---

##### `DeleteEventConditionKeys`<sup>Required</sup> <a name="DeleteEventConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.DeleteEventConditionKeys"></a>

```typescript
public readonly DeleteEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEvent action.

---

##### `DISCOVERY_URL`<sup>Required</sup> <a name="DISCOVERY_URL" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.DISCOVERY_URL"></a>

```typescript
public readonly DISCOVERY_URL: string;
```

- *Type:* string

Condition key: bedrock-agentcore:DiscoveryUrl (String).

---

##### `GATEWAY_AUTHORIZER_TYPE`<sup>Required</sup> <a name="GATEWAY_AUTHORIZER_TYPE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.GATEWAY_AUTHORIZER_TYPE"></a>

```typescript
public readonly GATEWAY_AUTHORIZER_TYPE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:GatewayAuthorizerType (String).

---

##### `HTTP_TARGET_CONFIGURATION_TYPE`<sup>Required</sup> <a name="HTTP_TARGET_CONFIGURATION_TYPE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.HTTP_TARGET_CONFIGURATION_TYPE"></a>

```typescript
public readonly HTTP_TARGET_CONFIGURATION_TYPE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:HttpTargetConfigurationType (String).

---

##### `INBOUND_JWT_CLAIM_AUD`<sup>Required</sup> <a name="INBOUND_JWT_CLAIM_AUD" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INBOUND_JWT_CLAIM_AUD"></a>

```typescript
public readonly INBOUND_JWT_CLAIM_AUD: string;
```

- *Type:* string

Condition key: bedrock-agentcore:InboundJwtClaim/aud (ArrayOfString).

---

##### `INBOUND_JWT_CLAIM_CLIENT_ID`<sup>Required</sup> <a name="INBOUND_JWT_CLAIM_CLIENT_ID" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INBOUND_JWT_CLAIM_CLIENT_ID"></a>

```typescript
public readonly INBOUND_JWT_CLAIM_CLIENT_ID: string;
```

- *Type:* string

Condition key: bedrock-agentcore:InboundJwtClaim/client_id (String).

---

##### `INBOUND_JWT_CLAIM_ISS`<sup>Required</sup> <a name="INBOUND_JWT_CLAIM_ISS" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INBOUND_JWT_CLAIM_ISS"></a>

```typescript
public readonly INBOUND_JWT_CLAIM_ISS: string;
```

- *Type:* string

Condition key: bedrock-agentcore:InboundJwtClaim/iss (String).

---

##### `INBOUND_JWT_CLAIM_SCOPE`<sup>Required</sup> <a name="INBOUND_JWT_CLAIM_SCOPE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INBOUND_JWT_CLAIM_SCOPE"></a>

```typescript
public readonly INBOUND_JWT_CLAIM_SCOPE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:InboundJwtClaim/scope (ArrayOfString).

---

##### `INBOUND_JWT_CLAIM_SUB`<sup>Required</sup> <a name="INBOUND_JWT_CLAIM_SUB" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INBOUND_JWT_CLAIM_SUB"></a>

```typescript
public readonly INBOUND_JWT_CLAIM_SUB: string;
```

- *Type:* string

Condition key: bedrock-agentcore:InboundJwtClaim/sub (String).

---

##### `INFERENCE_TARGET_CONFIGURATION_TYPE`<sup>Required</sup> <a name="INFERENCE_TARGET_CONFIGURATION_TYPE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.INFERENCE_TARGET_CONFIGURATION_TYPE"></a>

```typescript
public readonly INFERENCE_TARGET_CONFIGURATION_TYPE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:InferenceTargetConfigurationType (String).

---

##### `KMS_KEY_ARN`<sup>Required</sup> <a name="KMS_KEY_ARN" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.KMS_KEY_ARN"></a>

```typescript
public readonly KMS_KEY_ARN: string;
```

- *Type:* string

Condition key: bedrock-agentcore:KmsKeyArn (String).

---

##### `ListEventsConditionKeys`<sup>Required</sup> <a name="ListEventsConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ListEventsConditionKeys"></a>

```typescript
public readonly ListEventsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEvents action.

---

##### `ListMemoryRecordsConditionKeys`<sup>Required</sup> <a name="ListMemoryRecordsConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ListMemoryRecordsConditionKeys"></a>

```typescript
public readonly ListMemoryRecordsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListMemoryRecords action.

---

##### `ListSessionsConditionKeys`<sup>Required</sup> <a name="ListSessionsConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.ListSessionsConditionKeys"></a>

```typescript
public readonly ListSessionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSessions action.

---

##### `MCP_TARGET_CONFIGURATION_TYPE`<sup>Required</sup> <a name="MCP_TARGET_CONFIGURATION_TYPE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.MCP_TARGET_CONFIGURATION_TYPE"></a>

```typescript
public readonly MCP_TARGET_CONFIGURATION_TYPE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:McpTargetConfigurationType (String).

---

##### `NAMESPACE`<sup>Required</sup> <a name="NAMESPACE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.NAMESPACE"></a>

```typescript
public readonly NAMESPACE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:namespace (String).

---

##### `POLICY_ENGINE_ARN`<sup>Required</sup> <a name="POLICY_ENGINE_ARN" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.POLICY_ENGINE_ARN"></a>

```typescript
public readonly POLICY_ENGINE_ARN: string;
```

- *Type:* string

Condition key: bedrock-agentcore:PolicyEngineArn (String).

---

##### `POLICY_ENGINE_MODE`<sup>Required</sup> <a name="POLICY_ENGINE_MODE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.POLICY_ENGINE_MODE"></a>

```typescript
public readonly POLICY_ENGINE_MODE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:PolicyEngineMode (String).

---

##### `PRIVATE_ENDPOINT_TYPE`<sup>Required</sup> <a name="PRIVATE_ENDPOINT_TYPE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.PRIVATE_ENDPOINT_TYPE"></a>

```typescript
public readonly PRIVATE_ENDPOINT_TYPE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:PrivateEndpointType (String).

---

##### `PROTOCOL_TYPE`<sup>Required</sup> <a name="PROTOCOL_TYPE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.PROTOCOL_TYPE"></a>

```typescript
public readonly PROTOCOL_TYPE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:ProtocolType (String).

---

##### `PutSystemLogEventsConditionKeys`<sup>Required</sup> <a name="PutSystemLogEventsConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.PutSystemLogEventsConditionKeys"></a>

```typescript
public readonly PutSystemLogEventsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutSystemLogEvents action.

---

##### `RESOURCE_CONFIGURATION_IDENTIFIER`<sup>Required</sup> <a name="RESOURCE_CONFIGURATION_IDENTIFIER" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.RESOURCE_CONFIGURATION_IDENTIFIER"></a>

```typescript
public readonly RESOURCE_CONFIGURATION_IDENTIFIER: string;
```

- *Type:* string

Condition key: bedrock-agentcore:ResourceConfigurationIdentifier (String).

---

##### `RetrieveMemoryRecordsConditionKeys`<sup>Required</sup> <a name="RetrieveMemoryRecordsConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.RetrieveMemoryRecordsConditionKeys"></a>

```typescript
public readonly RetrieveMemoryRecordsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RetrieveMemoryRecords action.

---

##### `RUNTIME_AUTHORIZER_TYPE`<sup>Required</sup> <a name="RUNTIME_AUTHORIZER_TYPE" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.RUNTIME_AUTHORIZER_TYPE"></a>

```typescript
public readonly RUNTIME_AUTHORIZER_TYPE: string;
```

- *Type:* string

Condition key: bedrock-agentcore:RuntimeAuthorizerType (String).

---

##### `RUNTIME_SESSION_ID`<sup>Required</sup> <a name="RUNTIME_SESSION_ID" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.RUNTIME_SESSION_ID"></a>

```typescript
public readonly RUNTIME_SESSION_ID: string;
```

- *Type:* string

Condition key: bedrock-agentcore:runtimeSessionId (String).

---

##### `SECURITY_GROUPS`<sup>Required</sup> <a name="SECURITY_GROUPS" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.SECURITY_GROUPS"></a>

```typescript
public readonly SECURITY_GROUPS: string;
```

- *Type:* string

Condition key: bedrock-agentcore:securityGroups (ArrayOfString).

---

##### `SESSION_ID`<sup>Required</sup> <a name="SESSION_ID" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.SESSION_ID"></a>

```typescript
public readonly SESSION_ID: string;
```

- *Type:* string

Condition key: bedrock-agentcore:sessionId (String).

---

##### `StartMemoryExtractionJobConditionKeys`<sup>Required</sup> <a name="StartMemoryExtractionJobConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.StartMemoryExtractionJobConditionKeys"></a>

```typescript
public readonly StartMemoryExtractionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartMemoryExtractionJob action.

---

##### `STRATEGY_ID`<sup>Required</sup> <a name="STRATEGY_ID" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.STRATEGY_ID"></a>

```typescript
public readonly STRATEGY_ID: string;
```

- *Type:* string

Condition key: bedrock-agentcore:strategyId (String).

---

##### `SUBNETS`<sup>Required</sup> <a name="SUBNETS" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.SUBNETS"></a>

```typescript
public readonly SUBNETS: string;
```

- *Type:* string

Condition key: bedrock-agentcore:subnets (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAgentRuntimeConditionKeys`<sup>Required</sup> <a name="UpdateAgentRuntimeConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.UpdateAgentRuntimeConditionKeys"></a>

```typescript
public readonly UpdateAgentRuntimeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAgentRuntime action.

---

##### `UpdatePaymentManagerConditionKeys`<sup>Required</sup> <a name="UpdatePaymentManagerConditionKeys" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.UpdatePaymentManagerConditionKeys"></a>

```typescript
public readonly UpdatePaymentManagerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePaymentManager action.

---

##### `USERID`<sup>Required</sup> <a name="USERID" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConditions.property.USERID"></a>

```typescript
public readonly USERID: string;
```

- *Type:* string

Condition key: bedrock-agentcore:userid (String).

---

### BedrockAgentcoreOperations <a name="BedrockAgentcoreOperations" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations"></a>

API operation to required IAM actions mapping for bedrock-agentcore.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

new bedrock_agentcore.BedrockAgentcoreOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.AddDatasetExamples">AddDatasetExamples</a></code> | <code>string[]</code> | IAM actions required for the AddDatasetExamples API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.BatchCreateMemoryRecords">BatchCreateMemoryRecords</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateMemoryRecords API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.BatchDeleteMemoryRecords">BatchDeleteMemoryRecords</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteMemoryRecords API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.BatchPutGatewayRateLimits">BatchPutGatewayRateLimits</a></code> | <code>string[]</code> | IAM actions required for the BatchPutGatewayRateLimits API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.BatchUpdateMemoryRecords">BatchUpdateMemoryRecords</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateMemoryRecords API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CompleteResourceTokenAuth">CompleteResourceTokenAuth</a></code> | <code>string[]</code> | IAM actions required for the CompleteResourceTokenAuth API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateABTest">CreateABTest</a></code> | <code>string[]</code> | IAM actions required for the CreateABTest API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateAgentRuntime">CreateAgentRuntime</a></code> | <code>string[]</code> | IAM actions required for the CreateAgentRuntime API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateAgentRuntimeEndpoint">CreateAgentRuntimeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateAgentRuntimeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateApiKeyCredentialProvider">CreateApiKeyCredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateApiKeyCredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateBrowser">CreateBrowser</a></code> | <code>string[]</code> | IAM actions required for the CreateBrowser API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateBrowserProfile">CreateBrowserProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateBrowserProfile API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateCapacityProvider">CreateCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateCodeInterpreter">CreateCodeInterpreter</a></code> | <code>string[]</code> | IAM actions required for the CreateCodeInterpreter API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateConfigurationBundle">CreateConfigurationBundle</a></code> | <code>string[]</code> | IAM actions required for the CreateConfigurationBundle API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateDataset">CreateDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataset API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateDatasetVersion">CreateDatasetVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateDatasetVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateEvaluator">CreateEvaluator</a></code> | <code>string[]</code> | IAM actions required for the CreateEvaluator API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateEvent">CreateEvent</a></code> | <code>string[]</code> | IAM actions required for the CreateEvent API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateGateway">CreateGateway</a></code> | <code>string[]</code> | IAM actions required for the CreateGateway API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateGatewayRateLimit">CreateGatewayRateLimit</a></code> | <code>string[]</code> | IAM actions required for the CreateGatewayRateLimit API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateGatewayRule">CreateGatewayRule</a></code> | <code>string[]</code> | IAM actions required for the CreateGatewayRule API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateGatewayTarget">CreateGatewayTarget</a></code> | <code>string[]</code> | IAM actions required for the CreateGatewayTarget API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateHarness">CreateHarness</a></code> | <code>string[]</code> | IAM actions required for the CreateHarness API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateHarnessEndpoint">CreateHarnessEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateHarnessEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateMemory">CreateMemory</a></code> | <code>string[]</code> | IAM actions required for the CreateMemory API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateOauth2CredentialProvider">CreateOauth2CredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateOauth2CredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateOnlineEvaluationConfig">CreateOnlineEvaluationConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateOnlineEvaluationConfig API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePaymentConnector">CreatePaymentConnector</a></code> | <code>string[]</code> | IAM actions required for the CreatePaymentConnector API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePaymentCredentialProvider">CreatePaymentCredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the CreatePaymentCredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePaymentInstrument">CreatePaymentInstrument</a></code> | <code>string[]</code> | IAM actions required for the CreatePaymentInstrument API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePaymentManager">CreatePaymentManager</a></code> | <code>string[]</code> | IAM actions required for the CreatePaymentManager API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePaymentSession">CreatePaymentSession</a></code> | <code>string[]</code> | IAM actions required for the CreatePaymentSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePolicy">CreatePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePolicyEngine">CreatePolicyEngine</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicyEngine API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateRegistry">CreateRegistry</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistry API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateRegistryRecord">CreateRegistryRecord</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistryRecord API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateWorkloadIdentity">CreateWorkloadIdentity</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkloadIdentity API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteABTest">DeleteABTest</a></code> | <code>string[]</code> | IAM actions required for the DeleteABTest API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteAgentRuntime">DeleteAgentRuntime</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentRuntime API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteAgentRuntimeEndpoint">DeleteAgentRuntimeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentRuntimeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteApiKeyCredentialProvider">DeleteApiKeyCredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteApiKeyCredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteBatchEvaluation">DeleteBatchEvaluation</a></code> | <code>string[]</code> | IAM actions required for the DeleteBatchEvaluation API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteBrowser">DeleteBrowser</a></code> | <code>string[]</code> | IAM actions required for the DeleteBrowser API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteBrowserProfile">DeleteBrowserProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteBrowserProfile API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteCapacityProvider">DeleteCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteCapacityProviderSession">DeleteCapacityProviderSession</a></code> | <code>string[]</code> | IAM actions required for the DeleteCapacityProviderSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteCodeInterpreter">DeleteCodeInterpreter</a></code> | <code>string[]</code> | IAM actions required for the DeleteCodeInterpreter API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteConfigurationBundle">DeleteConfigurationBundle</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationBundle API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteDataset">DeleteDataset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataset API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteDatasetExamples">DeleteDatasetExamples</a></code> | <code>string[]</code> | IAM actions required for the DeleteDatasetExamples API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteEvaluator">DeleteEvaluator</a></code> | <code>string[]</code> | IAM actions required for the DeleteEvaluator API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteEvent">DeleteEvent</a></code> | <code>string[]</code> | IAM actions required for the DeleteEvent API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteGateway">DeleteGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteGateway API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteGatewayRateLimit">DeleteGatewayRateLimit</a></code> | <code>string[]</code> | IAM actions required for the DeleteGatewayRateLimit API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteGatewayRule">DeleteGatewayRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteGatewayRule API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteGatewayTarget">DeleteGatewayTarget</a></code> | <code>string[]</code> | IAM actions required for the DeleteGatewayTarget API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteHarness">DeleteHarness</a></code> | <code>string[]</code> | IAM actions required for the DeleteHarness API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteHarnessEndpoint">DeleteHarnessEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteHarnessEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteMemory">DeleteMemory</a></code> | <code>string[]</code> | IAM actions required for the DeleteMemory API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteMemoryRecord">DeleteMemoryRecord</a></code> | <code>string[]</code> | IAM actions required for the DeleteMemoryRecord API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteOauth2CredentialProvider">DeleteOauth2CredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteOauth2CredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteOnlineEvaluationConfig">DeleteOnlineEvaluationConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteOnlineEvaluationConfig API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePaymentConnector">DeletePaymentConnector</a></code> | <code>string[]</code> | IAM actions required for the DeletePaymentConnector API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePaymentCredentialProvider">DeletePaymentCredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the DeletePaymentCredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePaymentInstrument">DeletePaymentInstrument</a></code> | <code>string[]</code> | IAM actions required for the DeletePaymentInstrument API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePaymentManager">DeletePaymentManager</a></code> | <code>string[]</code> | IAM actions required for the DeletePaymentManager API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePaymentSession">DeletePaymentSession</a></code> | <code>string[]</code> | IAM actions required for the DeletePaymentSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePolicyEngine">DeletePolicyEngine</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicyEngine API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteRecommendation">DeleteRecommendation</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecommendation API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteRegistry">DeleteRegistry</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistry API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteRegistryRecord">DeleteRegistryRecord</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistryRecord API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteWorkloadIdentity">DeleteWorkloadIdentity</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkloadIdentity API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.Evaluate">Evaluate</a></code> | <code>string[]</code> | IAM actions required for the Evaluate API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.InvokeAgentRuntime">InvokeAgentRuntime</a></code> | <code>string[]</code> | IAM actions required for the InvokeAgentRuntime API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.InvokeAgentRuntimeCommand">InvokeAgentRuntimeCommand</a></code> | <code>string[]</code> | IAM actions required for the InvokeAgentRuntimeCommand API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.InvokeBrowser">InvokeBrowser</a></code> | <code>string[]</code> | IAM actions required for the InvokeBrowser API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.InvokeCodeInterpreter">InvokeCodeInterpreter</a></code> | <code>string[]</code> | IAM actions required for the InvokeCodeInterpreter API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.InvokeHarness">InvokeHarness</a></code> | <code>string[]</code> | IAM actions required for the InvokeHarness API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListABTests">ListABTests</a></code> | <code>string[]</code> | IAM actions required for the ListABTests API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListActors">ListActors</a></code> | <code>string[]</code> | IAM actions required for the ListActors API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListAgentRuntimeEndpoints">ListAgentRuntimeEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListAgentRuntimeEndpoints API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListAgentRuntimes">ListAgentRuntimes</a></code> | <code>string[]</code> | IAM actions required for the ListAgentRuntimes API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListAgentRuntimeVersions">ListAgentRuntimeVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAgentRuntimeVersions API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListAgentRuntimeVersionsByCapacityProvider">ListAgentRuntimeVersionsByCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the ListAgentRuntimeVersionsByCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListApiKeyCredentialProviders">ListApiKeyCredentialProviders</a></code> | <code>string[]</code> | IAM actions required for the ListApiKeyCredentialProviders API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListBatchEvaluations">ListBatchEvaluations</a></code> | <code>string[]</code> | IAM actions required for the ListBatchEvaluations API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListBrowserProfiles">ListBrowserProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListBrowserProfiles API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListBrowsers">ListBrowsers</a></code> | <code>string[]</code> | IAM actions required for the ListBrowsers API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListBrowserSessions">ListBrowserSessions</a></code> | <code>string[]</code> | IAM actions required for the ListBrowserSessions API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListCapacityProviders">ListCapacityProviders</a></code> | <code>string[]</code> | IAM actions required for the ListCapacityProviders API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListCodeInterpreters">ListCodeInterpreters</a></code> | <code>string[]</code> | IAM actions required for the ListCodeInterpreters API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListCodeInterpreterSessions">ListCodeInterpreterSessions</a></code> | <code>string[]</code> | IAM actions required for the ListCodeInterpreterSessions API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListConfigurationBundles">ListConfigurationBundles</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationBundles API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListConfigurationBundleVersions">ListConfigurationBundleVersions</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationBundleVersions API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListDatasetExamples">ListDatasetExamples</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetExamples API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListDatasets">ListDatasets</a></code> | <code>string[]</code> | IAM actions required for the ListDatasets API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListDatasetVersions">ListDatasetVersions</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetVersions API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListEvaluators">ListEvaluators</a></code> | <code>string[]</code> | IAM actions required for the ListEvaluators API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListEvents">ListEvents</a></code> | <code>string[]</code> | IAM actions required for the ListEvents API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListGatewayRateLimits">ListGatewayRateLimits</a></code> | <code>string[]</code> | IAM actions required for the ListGatewayRateLimits API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListGatewayRules">ListGatewayRules</a></code> | <code>string[]</code> | IAM actions required for the ListGatewayRules API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListGateways">ListGateways</a></code> | <code>string[]</code> | IAM actions required for the ListGateways API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListGatewayTargets">ListGatewayTargets</a></code> | <code>string[]</code> | IAM actions required for the ListGatewayTargets API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListHarnessEndpoints">ListHarnessEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListHarnessEndpoints API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListHarnesses">ListHarnesses</a></code> | <code>string[]</code> | IAM actions required for the ListHarnesses API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListHarnessVersions">ListHarnessVersions</a></code> | <code>string[]</code> | IAM actions required for the ListHarnessVersions API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListMemories">ListMemories</a></code> | <code>string[]</code> | IAM actions required for the ListMemories API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListMemoryExtractionJobs">ListMemoryExtractionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListMemoryExtractionJobs API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListMemoryRecords">ListMemoryRecords</a></code> | <code>string[]</code> | IAM actions required for the ListMemoryRecords API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListOauth2CredentialProviders">ListOauth2CredentialProviders</a></code> | <code>string[]</code> | IAM actions required for the ListOauth2CredentialProviders API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListOnlineEvaluationConfigs">ListOnlineEvaluationConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListOnlineEvaluationConfigs API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPaymentConnectors">ListPaymentConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListPaymentConnectors API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPaymentCredentialProviders">ListPaymentCredentialProviders</a></code> | <code>string[]</code> | IAM actions required for the ListPaymentCredentialProviders API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPaymentInstruments">ListPaymentInstruments</a></code> | <code>string[]</code> | IAM actions required for the ListPaymentInstruments API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPaymentManagers">ListPaymentManagers</a></code> | <code>string[]</code> | IAM actions required for the ListPaymentManagers API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPaymentSessions">ListPaymentSessions</a></code> | <code>string[]</code> | IAM actions required for the ListPaymentSessions API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicies">ListPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPolicies API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicyEngines">ListPolicyEngines</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyEngines API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicyEngineSummaries">ListPolicyEngineSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyEngineSummaries API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicyGenerationAssets">ListPolicyGenerationAssets</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyGenerationAssets API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicyGenerations">ListPolicyGenerations</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyGenerations API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicyGenerationSummaries">ListPolicyGenerationSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyGenerationSummaries API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicySummaries">ListPolicySummaries</a></code> | <code>string[]</code> | IAM actions required for the ListPolicySummaries API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListRecommendations">ListRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendations API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListRegistries">ListRegistries</a></code> | <code>string[]</code> | IAM actions required for the ListRegistries API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListRegistryRecords">ListRegistryRecords</a></code> | <code>string[]</code> | IAM actions required for the ListRegistryRecords API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListWorkloadIdentities">ListWorkloadIdentities</a></code> | <code>string[]</code> | IAM actions required for the ListWorkloadIdentities API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetABTest">opGetABTest</a></code> | <code>string[]</code> | IAM actions required for the GetABTest API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetAgentCard">opGetAgentCard</a></code> | <code>string[]</code> | IAM actions required for the GetAgentCard API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetAgentRuntime">opGetAgentRuntime</a></code> | <code>string[]</code> | IAM actions required for the GetAgentRuntime API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetAgentRuntimeEndpoint">opGetAgentRuntimeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetAgentRuntimeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetApiKeyCredentialProvider">opGetApiKeyCredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the GetApiKeyCredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetBatchEvaluation">opGetBatchEvaluation</a></code> | <code>string[]</code> | IAM actions required for the GetBatchEvaluation API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetBrowser">opGetBrowser</a></code> | <code>string[]</code> | IAM actions required for the GetBrowser API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetBrowserProfile">opGetBrowserProfile</a></code> | <code>string[]</code> | IAM actions required for the GetBrowserProfile API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetBrowserSession">opGetBrowserSession</a></code> | <code>string[]</code> | IAM actions required for the GetBrowserSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetCapacityProvider">opGetCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the GetCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetCodeInterpreter">opGetCodeInterpreter</a></code> | <code>string[]</code> | IAM actions required for the GetCodeInterpreter API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetCodeInterpreterSession">opGetCodeInterpreterSession</a></code> | <code>string[]</code> | IAM actions required for the GetCodeInterpreterSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetConfigurationBundle">opGetConfigurationBundle</a></code> | <code>string[]</code> | IAM actions required for the GetConfigurationBundle API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetConfigurationBundleVersion">opGetConfigurationBundleVersion</a></code> | <code>string[]</code> | IAM actions required for the GetConfigurationBundleVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetDataset">opGetDataset</a></code> | <code>string[]</code> | IAM actions required for the GetDataset API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetEvaluator">opGetEvaluator</a></code> | <code>string[]</code> | IAM actions required for the GetEvaluator API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetEvent">opGetEvent</a></code> | <code>string[]</code> | IAM actions required for the GetEvent API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetGateway">opGetGateway</a></code> | <code>string[]</code> | IAM actions required for the GetGateway API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetGatewayRateLimit">opGetGatewayRateLimit</a></code> | <code>string[]</code> | IAM actions required for the GetGatewayRateLimit API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetGatewayRule">opGetGatewayRule</a></code> | <code>string[]</code> | IAM actions required for the GetGatewayRule API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetGatewayTarget">opGetGatewayTarget</a></code> | <code>string[]</code> | IAM actions required for the GetGatewayTarget API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetHarness">opGetHarness</a></code> | <code>string[]</code> | IAM actions required for the GetHarness API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetHarnessEndpoint">opGetHarnessEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetHarnessEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetMemory">opGetMemory</a></code> | <code>string[]</code> | IAM actions required for the GetMemory API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetMemoryRecord">opGetMemoryRecord</a></code> | <code>string[]</code> | IAM actions required for the GetMemoryRecord API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetOauth2CredentialProvider">opGetOauth2CredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the GetOauth2CredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetOnlineEvaluationConfig">opGetOnlineEvaluationConfig</a></code> | <code>string[]</code> | IAM actions required for the GetOnlineEvaluationConfig API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentConnector">opGetPaymentConnector</a></code> | <code>string[]</code> | IAM actions required for the GetPaymentConnector API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentCredentialProvider">opGetPaymentCredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the GetPaymentCredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentInstrument">opGetPaymentInstrument</a></code> | <code>string[]</code> | IAM actions required for the GetPaymentInstrument API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentInstrumentBalance">opGetPaymentInstrumentBalance</a></code> | <code>string[]</code> | IAM actions required for the GetPaymentInstrumentBalance API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentManager">opGetPaymentManager</a></code> | <code>string[]</code> | IAM actions required for the GetPaymentManager API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentSession">opGetPaymentSession</a></code> | <code>string[]</code> | IAM actions required for the GetPaymentSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicyEngine">opGetPolicyEngine</a></code> | <code>string[]</code> | IAM actions required for the GetPolicyEngine API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicyEngineSummary">opGetPolicyEngineSummary</a></code> | <code>string[]</code> | IAM actions required for the GetPolicyEngineSummary API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicyGeneration">opGetPolicyGeneration</a></code> | <code>string[]</code> | IAM actions required for the GetPolicyGeneration API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicyGenerationSummary">opGetPolicyGenerationSummary</a></code> | <code>string[]</code> | IAM actions required for the GetPolicyGenerationSummary API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicySummary">opGetPolicySummary</a></code> | <code>string[]</code> | IAM actions required for the GetPolicySummary API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetRecommendation">opGetRecommendation</a></code> | <code>string[]</code> | IAM actions required for the GetRecommendation API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetRegistry">opGetRegistry</a></code> | <code>string[]</code> | IAM actions required for the GetRegistry API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetRegistryRecord">opGetRegistryRecord</a></code> | <code>string[]</code> | IAM actions required for the GetRegistryRecord API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetResourceApiKey">opGetResourceApiKey</a></code> | <code>string[]</code> | IAM actions required for the GetResourceApiKey API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetResourceOauth2Token">opGetResourceOauth2Token</a></code> | <code>string[]</code> | IAM actions required for the GetResourceOauth2Token API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetResourcePaymentToken">opGetResourcePaymentToken</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePaymentToken API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetTokenVault">opGetTokenVault</a></code> | <code>string[]</code> | IAM actions required for the GetTokenVault API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetWorkloadAccessToken">opGetWorkloadAccessToken</a></code> | <code>string[]</code> | IAM actions required for the GetWorkloadAccessToken API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetWorkloadAccessTokenForJWT">opGetWorkloadAccessTokenForJWT</a></code> | <code>string[]</code> | IAM actions required for the GetWorkloadAccessTokenForJWT API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetWorkloadAccessTokenForUserId">opGetWorkloadAccessTokenForUserId</a></code> | <code>string[]</code> | IAM actions required for the GetWorkloadAccessTokenForUserId API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetWorkloadIdentity">opGetWorkloadIdentity</a></code> | <code>string[]</code> | IAM actions required for the GetWorkloadIdentity API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opSetTokenVaultCMK">opSetTokenVaultCMK</a></code> | <code>string[]</code> | IAM actions required for the SetTokenVaultCMK API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ProcessPayment">ProcessPayment</a></code> | <code>string[]</code> | IAM actions required for the ProcessPayment API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.RetrieveMemoryRecords">RetrieveMemoryRecords</a></code> | <code>string[]</code> | IAM actions required for the RetrieveMemoryRecords API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.SaveBrowserSessionProfile">SaveBrowserSessionProfile</a></code> | <code>string[]</code> | IAM actions required for the SaveBrowserSessionProfile API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.SearchRegistryRecords">SearchRegistryRecords</a></code> | <code>string[]</code> | IAM actions required for the SearchRegistryRecords API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartBatchEvaluation">StartBatchEvaluation</a></code> | <code>string[]</code> | IAM actions required for the StartBatchEvaluation API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartBrowserSession">StartBrowserSession</a></code> | <code>string[]</code> | IAM actions required for the StartBrowserSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartCodeInterpreterSession">StartCodeInterpreterSession</a></code> | <code>string[]</code> | IAM actions required for the StartCodeInterpreterSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartMemoryExtractionJob">StartMemoryExtractionJob</a></code> | <code>string[]</code> | IAM actions required for the StartMemoryExtractionJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartPolicyGeneration">StartPolicyGeneration</a></code> | <code>string[]</code> | IAM actions required for the StartPolicyGeneration API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartRecommendation">StartRecommendation</a></code> | <code>string[]</code> | IAM actions required for the StartRecommendation API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StopBatchEvaluation">StopBatchEvaluation</a></code> | <code>string[]</code> | IAM actions required for the StopBatchEvaluation API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StopBrowserSession">StopBrowserSession</a></code> | <code>string[]</code> | IAM actions required for the StopBrowserSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StopCodeInterpreterSession">StopCodeInterpreterSession</a></code> | <code>string[]</code> | IAM actions required for the StopCodeInterpreterSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StopRuntimeSession">StopRuntimeSession</a></code> | <code>string[]</code> | IAM actions required for the StopRuntimeSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.SubmitRegistryRecordForApproval">SubmitRegistryRecordForApproval</a></code> | <code>string[]</code> | IAM actions required for the SubmitRegistryRecordForApproval API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.SynchronizeGatewayTargets">SynchronizeGatewayTargets</a></code> | <code>string[]</code> | IAM actions required for the SynchronizeGatewayTargets API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateABTest">UpdateABTest</a></code> | <code>string[]</code> | IAM actions required for the UpdateABTest API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateAgentRuntime">UpdateAgentRuntime</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentRuntime API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateAgentRuntimeEndpoint">UpdateAgentRuntimeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentRuntimeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateApiKeyCredentialProvider">UpdateApiKeyCredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the UpdateApiKeyCredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateBrowserStream">UpdateBrowserStream</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrowserStream API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateCapacityProvider">UpdateCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the UpdateCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateConfigurationBundle">UpdateConfigurationBundle</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationBundle API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateDataset">UpdateDataset</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataset API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateDatasetExamples">UpdateDatasetExamples</a></code> | <code>string[]</code> | IAM actions required for the UpdateDatasetExamples API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateEvaluator">UpdateEvaluator</a></code> | <code>string[]</code> | IAM actions required for the UpdateEvaluator API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateGateway">UpdateGateway</a></code> | <code>string[]</code> | IAM actions required for the UpdateGateway API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateGatewayRateLimit">UpdateGatewayRateLimit</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewayRateLimit API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateGatewayRule">UpdateGatewayRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewayRule API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateGatewayTarget">UpdateGatewayTarget</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewayTarget API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateHarness">UpdateHarness</a></code> | <code>string[]</code> | IAM actions required for the UpdateHarness API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateHarnessEndpoint">UpdateHarnessEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateHarnessEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateMemory">UpdateMemory</a></code> | <code>string[]</code> | IAM actions required for the UpdateMemory API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateOauth2CredentialProvider">UpdateOauth2CredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the UpdateOauth2CredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateOnlineEvaluationConfig">UpdateOnlineEvaluationConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateOnlineEvaluationConfig API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdatePaymentConnector">UpdatePaymentConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdatePaymentConnector API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdatePaymentCredentialProvider">UpdatePaymentCredentialProvider</a></code> | <code>string[]</code> | IAM actions required for the UpdatePaymentCredentialProvider API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdatePaymentManager">UpdatePaymentManager</a></code> | <code>string[]</code> | IAM actions required for the UpdatePaymentManager API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdatePolicy">UpdatePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdatePolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdatePolicyEngine">UpdatePolicyEngine</a></code> | <code>string[]</code> | IAM actions required for the UpdatePolicyEngine API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateRegistry">UpdateRegistry</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegistry API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateRegistryRecord">UpdateRegistryRecord</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegistryRecord API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateRegistryRecordStatus">UpdateRegistryRecordStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegistryRecordStatus API call. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateWorkloadIdentity">UpdateWorkloadIdentity</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkloadIdentity API call. |

---

##### `AddDatasetExamples`<sup>Required</sup> <a name="AddDatasetExamples" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.AddDatasetExamples"></a>

```typescript
public readonly AddDatasetExamples: string[];
```

- *Type:* string[]

IAM actions required for the AddDatasetExamples API call.

---

##### `BatchCreateMemoryRecords`<sup>Required</sup> <a name="BatchCreateMemoryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.BatchCreateMemoryRecords"></a>

```typescript
public readonly BatchCreateMemoryRecords: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateMemoryRecords API call.

---

##### `BatchDeleteMemoryRecords`<sup>Required</sup> <a name="BatchDeleteMemoryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.BatchDeleteMemoryRecords"></a>

```typescript
public readonly BatchDeleteMemoryRecords: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteMemoryRecords API call.

---

##### `BatchPutGatewayRateLimits`<sup>Required</sup> <a name="BatchPutGatewayRateLimits" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.BatchPutGatewayRateLimits"></a>

```typescript
public readonly BatchPutGatewayRateLimits: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutGatewayRateLimits API call.

---

##### `BatchUpdateMemoryRecords`<sup>Required</sup> <a name="BatchUpdateMemoryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.BatchUpdateMemoryRecords"></a>

```typescript
public readonly BatchUpdateMemoryRecords: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateMemoryRecords API call.

---

##### `CompleteResourceTokenAuth`<sup>Required</sup> <a name="CompleteResourceTokenAuth" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CompleteResourceTokenAuth"></a>

```typescript
public readonly CompleteResourceTokenAuth: string[];
```

- *Type:* string[]

IAM actions required for the CompleteResourceTokenAuth API call.

---

##### `CreateABTest`<sup>Required</sup> <a name="CreateABTest" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateABTest"></a>

```typescript
public readonly CreateABTest: string[];
```

- *Type:* string[]

IAM actions required for the CreateABTest API call.

---

##### `CreateAgentRuntime`<sup>Required</sup> <a name="CreateAgentRuntime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateAgentRuntime"></a>

```typescript
public readonly CreateAgentRuntime: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgentRuntime API call.

---

##### `CreateAgentRuntimeEndpoint`<sup>Required</sup> <a name="CreateAgentRuntimeEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateAgentRuntimeEndpoint"></a>

```typescript
public readonly CreateAgentRuntimeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgentRuntimeEndpoint API call.

---

##### `CreateApiKeyCredentialProvider`<sup>Required</sup> <a name="CreateApiKeyCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateApiKeyCredentialProvider"></a>

```typescript
public readonly CreateApiKeyCredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateApiKeyCredentialProvider API call.

---

##### `CreateBrowser`<sup>Required</sup> <a name="CreateBrowser" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateBrowser"></a>

```typescript
public readonly CreateBrowser: string[];
```

- *Type:* string[]

IAM actions required for the CreateBrowser API call.

---

##### `CreateBrowserProfile`<sup>Required</sup> <a name="CreateBrowserProfile" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateBrowserProfile"></a>

```typescript
public readonly CreateBrowserProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateBrowserProfile API call.

---

##### `CreateCapacityProvider`<sup>Required</sup> <a name="CreateCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateCapacityProvider"></a>

```typescript
public readonly CreateCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateCapacityProvider API call.

---

##### `CreateCodeInterpreter`<sup>Required</sup> <a name="CreateCodeInterpreter" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateCodeInterpreter"></a>

```typescript
public readonly CreateCodeInterpreter: string[];
```

- *Type:* string[]

IAM actions required for the CreateCodeInterpreter API call.

---

##### `CreateConfigurationBundle`<sup>Required</sup> <a name="CreateConfigurationBundle" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateConfigurationBundle"></a>

```typescript
public readonly CreateConfigurationBundle: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfigurationBundle API call.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataset API call.

---

##### `CreateDatasetVersion`<sup>Required</sup> <a name="CreateDatasetVersion" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateDatasetVersion"></a>

```typescript
public readonly CreateDatasetVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateDatasetVersion API call.

---

##### `CreateEvaluator`<sup>Required</sup> <a name="CreateEvaluator" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateEvaluator"></a>

```typescript
public readonly CreateEvaluator: string[];
```

- *Type:* string[]

IAM actions required for the CreateEvaluator API call.

---

##### `CreateEvent`<sup>Required</sup> <a name="CreateEvent" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateEvent"></a>

```typescript
public readonly CreateEvent: string[];
```

- *Type:* string[]

IAM actions required for the CreateEvent API call.

---

##### `CreateGateway`<sup>Required</sup> <a name="CreateGateway" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateGateway"></a>

```typescript
public readonly CreateGateway: string[];
```

- *Type:* string[]

IAM actions required for the CreateGateway API call.

---

##### `CreateGatewayRateLimit`<sup>Required</sup> <a name="CreateGatewayRateLimit" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateGatewayRateLimit"></a>

```typescript
public readonly CreateGatewayRateLimit: string[];
```

- *Type:* string[]

IAM actions required for the CreateGatewayRateLimit API call.

---

##### `CreateGatewayRule`<sup>Required</sup> <a name="CreateGatewayRule" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateGatewayRule"></a>

```typescript
public readonly CreateGatewayRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateGatewayRule API call.

---

##### `CreateGatewayTarget`<sup>Required</sup> <a name="CreateGatewayTarget" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateGatewayTarget"></a>

```typescript
public readonly CreateGatewayTarget: string[];
```

- *Type:* string[]

IAM actions required for the CreateGatewayTarget API call.

---

##### `CreateHarness`<sup>Required</sup> <a name="CreateHarness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateHarness"></a>

```typescript
public readonly CreateHarness: string[];
```

- *Type:* string[]

IAM actions required for the CreateHarness API call.

---

##### `CreateHarnessEndpoint`<sup>Required</sup> <a name="CreateHarnessEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateHarnessEndpoint"></a>

```typescript
public readonly CreateHarnessEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateHarnessEndpoint API call.

---

##### `CreateMemory`<sup>Required</sup> <a name="CreateMemory" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateMemory"></a>

```typescript
public readonly CreateMemory: string[];
```

- *Type:* string[]

IAM actions required for the CreateMemory API call.

---

##### `CreateOauth2CredentialProvider`<sup>Required</sup> <a name="CreateOauth2CredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateOauth2CredentialProvider"></a>

```typescript
public readonly CreateOauth2CredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateOauth2CredentialProvider API call.

---

##### `CreateOnlineEvaluationConfig`<sup>Required</sup> <a name="CreateOnlineEvaluationConfig" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateOnlineEvaluationConfig"></a>

```typescript
public readonly CreateOnlineEvaluationConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateOnlineEvaluationConfig API call.

---

##### `CreatePaymentConnector`<sup>Required</sup> <a name="CreatePaymentConnector" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePaymentConnector"></a>

```typescript
public readonly CreatePaymentConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreatePaymentConnector API call.

---

##### `CreatePaymentCredentialProvider`<sup>Required</sup> <a name="CreatePaymentCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePaymentCredentialProvider"></a>

```typescript
public readonly CreatePaymentCredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreatePaymentCredentialProvider API call.

---

##### `CreatePaymentInstrument`<sup>Required</sup> <a name="CreatePaymentInstrument" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePaymentInstrument"></a>

```typescript
public readonly CreatePaymentInstrument: string[];
```

- *Type:* string[]

IAM actions required for the CreatePaymentInstrument API call.

---

##### `CreatePaymentManager`<sup>Required</sup> <a name="CreatePaymentManager" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePaymentManager"></a>

```typescript
public readonly CreatePaymentManager: string[];
```

- *Type:* string[]

IAM actions required for the CreatePaymentManager API call.

---

##### `CreatePaymentSession`<sup>Required</sup> <a name="CreatePaymentSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePaymentSession"></a>

```typescript
public readonly CreatePaymentSession: string[];
```

- *Type:* string[]

IAM actions required for the CreatePaymentSession API call.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicy API call.

---

##### `CreatePolicyEngine`<sup>Required</sup> <a name="CreatePolicyEngine" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreatePolicyEngine"></a>

```typescript
public readonly CreatePolicyEngine: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicyEngine API call.

---

##### `CreateRegistry`<sup>Required</sup> <a name="CreateRegistry" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateRegistry"></a>

```typescript
public readonly CreateRegistry: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistry API call.

---

##### `CreateRegistryRecord`<sup>Required</sup> <a name="CreateRegistryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateRegistryRecord"></a>

```typescript
public readonly CreateRegistryRecord: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistryRecord API call.

---

##### `CreateWorkloadIdentity`<sup>Required</sup> <a name="CreateWorkloadIdentity" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.CreateWorkloadIdentity"></a>

```typescript
public readonly CreateWorkloadIdentity: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkloadIdentity API call.

---

##### `DeleteABTest`<sup>Required</sup> <a name="DeleteABTest" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteABTest"></a>

```typescript
public readonly DeleteABTest: string[];
```

- *Type:* string[]

IAM actions required for the DeleteABTest API call.

---

##### `DeleteAgentRuntime`<sup>Required</sup> <a name="DeleteAgentRuntime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteAgentRuntime"></a>

```typescript
public readonly DeleteAgentRuntime: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentRuntime API call.

---

##### `DeleteAgentRuntimeEndpoint`<sup>Required</sup> <a name="DeleteAgentRuntimeEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteAgentRuntimeEndpoint"></a>

```typescript
public readonly DeleteAgentRuntimeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentRuntimeEndpoint API call.

---

##### `DeleteApiKeyCredentialProvider`<sup>Required</sup> <a name="DeleteApiKeyCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteApiKeyCredentialProvider"></a>

```typescript
public readonly DeleteApiKeyCredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApiKeyCredentialProvider API call.

---

##### `DeleteBatchEvaluation`<sup>Required</sup> <a name="DeleteBatchEvaluation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteBatchEvaluation"></a>

```typescript
public readonly DeleteBatchEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBatchEvaluation API call.

---

##### `DeleteBrowser`<sup>Required</sup> <a name="DeleteBrowser" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteBrowser"></a>

```typescript
public readonly DeleteBrowser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBrowser API call.

---

##### `DeleteBrowserProfile`<sup>Required</sup> <a name="DeleteBrowserProfile" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteBrowserProfile"></a>

```typescript
public readonly DeleteBrowserProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBrowserProfile API call.

---

##### `DeleteCapacityProvider`<sup>Required</sup> <a name="DeleteCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteCapacityProvider"></a>

```typescript
public readonly DeleteCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCapacityProvider API call.

---

##### `DeleteCapacityProviderSession`<sup>Required</sup> <a name="DeleteCapacityProviderSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteCapacityProviderSession"></a>

```typescript
public readonly DeleteCapacityProviderSession: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCapacityProviderSession API call.

---

##### `DeleteCodeInterpreter`<sup>Required</sup> <a name="DeleteCodeInterpreter" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteCodeInterpreter"></a>

```typescript
public readonly DeleteCodeInterpreter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCodeInterpreter API call.

---

##### `DeleteConfigurationBundle`<sup>Required</sup> <a name="DeleteConfigurationBundle" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteConfigurationBundle"></a>

```typescript
public readonly DeleteConfigurationBundle: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationBundle API call.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataset API call.

---

##### `DeleteDatasetExamples`<sup>Required</sup> <a name="DeleteDatasetExamples" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteDatasetExamples"></a>

```typescript
public readonly DeleteDatasetExamples: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDatasetExamples API call.

---

##### `DeleteEvaluator`<sup>Required</sup> <a name="DeleteEvaluator" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteEvaluator"></a>

```typescript
public readonly DeleteEvaluator: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEvaluator API call.

---

##### `DeleteEvent`<sup>Required</sup> <a name="DeleteEvent" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteEvent"></a>

```typescript
public readonly DeleteEvent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEvent API call.

---

##### `DeleteGateway`<sup>Required</sup> <a name="DeleteGateway" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteGateway"></a>

```typescript
public readonly DeleteGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGateway API call.

---

##### `DeleteGatewayRateLimit`<sup>Required</sup> <a name="DeleteGatewayRateLimit" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteGatewayRateLimit"></a>

```typescript
public readonly DeleteGatewayRateLimit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGatewayRateLimit API call.

---

##### `DeleteGatewayRule`<sup>Required</sup> <a name="DeleteGatewayRule" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteGatewayRule"></a>

```typescript
public readonly DeleteGatewayRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGatewayRule API call.

---

##### `DeleteGatewayTarget`<sup>Required</sup> <a name="DeleteGatewayTarget" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteGatewayTarget"></a>

```typescript
public readonly DeleteGatewayTarget: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGatewayTarget API call.

---

##### `DeleteHarness`<sup>Required</sup> <a name="DeleteHarness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteHarness"></a>

```typescript
public readonly DeleteHarness: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHarness API call.

---

##### `DeleteHarnessEndpoint`<sup>Required</sup> <a name="DeleteHarnessEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteHarnessEndpoint"></a>

```typescript
public readonly DeleteHarnessEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHarnessEndpoint API call.

---

##### `DeleteMemory`<sup>Required</sup> <a name="DeleteMemory" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteMemory"></a>

```typescript
public readonly DeleteMemory: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMemory API call.

---

##### `DeleteMemoryRecord`<sup>Required</sup> <a name="DeleteMemoryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteMemoryRecord"></a>

```typescript
public readonly DeleteMemoryRecord: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMemoryRecord API call.

---

##### `DeleteOauth2CredentialProvider`<sup>Required</sup> <a name="DeleteOauth2CredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteOauth2CredentialProvider"></a>

```typescript
public readonly DeleteOauth2CredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOauth2CredentialProvider API call.

---

##### `DeleteOnlineEvaluationConfig`<sup>Required</sup> <a name="DeleteOnlineEvaluationConfig" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteOnlineEvaluationConfig"></a>

```typescript
public readonly DeleteOnlineEvaluationConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOnlineEvaluationConfig API call.

---

##### `DeletePaymentConnector`<sup>Required</sup> <a name="DeletePaymentConnector" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePaymentConnector"></a>

```typescript
public readonly DeletePaymentConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeletePaymentConnector API call.

---

##### `DeletePaymentCredentialProvider`<sup>Required</sup> <a name="DeletePaymentCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePaymentCredentialProvider"></a>

```typescript
public readonly DeletePaymentCredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeletePaymentCredentialProvider API call.

---

##### `DeletePaymentInstrument`<sup>Required</sup> <a name="DeletePaymentInstrument" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePaymentInstrument"></a>

```typescript
public readonly DeletePaymentInstrument: string[];
```

- *Type:* string[]

IAM actions required for the DeletePaymentInstrument API call.

---

##### `DeletePaymentManager`<sup>Required</sup> <a name="DeletePaymentManager" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePaymentManager"></a>

```typescript
public readonly DeletePaymentManager: string[];
```

- *Type:* string[]

IAM actions required for the DeletePaymentManager API call.

---

##### `DeletePaymentSession`<sup>Required</sup> <a name="DeletePaymentSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePaymentSession"></a>

```typescript
public readonly DeletePaymentSession: string[];
```

- *Type:* string[]

IAM actions required for the DeletePaymentSession API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DeletePolicyEngine`<sup>Required</sup> <a name="DeletePolicyEngine" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeletePolicyEngine"></a>

```typescript
public readonly DeletePolicyEngine: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicyEngine API call.

---

##### `DeleteRecommendation`<sup>Required</sup> <a name="DeleteRecommendation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteRecommendation"></a>

```typescript
public readonly DeleteRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecommendation API call.

---

##### `DeleteRegistry`<sup>Required</sup> <a name="DeleteRegistry" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteRegistry"></a>

```typescript
public readonly DeleteRegistry: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistry API call.

---

##### `DeleteRegistryRecord`<sup>Required</sup> <a name="DeleteRegistryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteRegistryRecord"></a>

```typescript
public readonly DeleteRegistryRecord: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistryRecord API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteWorkloadIdentity`<sup>Required</sup> <a name="DeleteWorkloadIdentity" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.DeleteWorkloadIdentity"></a>

```typescript
public readonly DeleteWorkloadIdentity: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkloadIdentity API call.

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.Evaluate"></a>

```typescript
public readonly Evaluate: string[];
```

- *Type:* string[]

IAM actions required for the Evaluate API call.

---

##### `InvokeAgentRuntime`<sup>Required</sup> <a name="InvokeAgentRuntime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.InvokeAgentRuntime"></a>

```typescript
public readonly InvokeAgentRuntime: string[];
```

- *Type:* string[]

IAM actions required for the InvokeAgentRuntime API call.

---

##### `InvokeAgentRuntimeCommand`<sup>Required</sup> <a name="InvokeAgentRuntimeCommand" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.InvokeAgentRuntimeCommand"></a>

```typescript
public readonly InvokeAgentRuntimeCommand: string[];
```

- *Type:* string[]

IAM actions required for the InvokeAgentRuntimeCommand API call.

---

##### `InvokeBrowser`<sup>Required</sup> <a name="InvokeBrowser" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.InvokeBrowser"></a>

```typescript
public readonly InvokeBrowser: string[];
```

- *Type:* string[]

IAM actions required for the InvokeBrowser API call.

---

##### `InvokeCodeInterpreter`<sup>Required</sup> <a name="InvokeCodeInterpreter" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.InvokeCodeInterpreter"></a>

```typescript
public readonly InvokeCodeInterpreter: string[];
```

- *Type:* string[]

IAM actions required for the InvokeCodeInterpreter API call.

---

##### `InvokeHarness`<sup>Required</sup> <a name="InvokeHarness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.InvokeHarness"></a>

```typescript
public readonly InvokeHarness: string[];
```

- *Type:* string[]

IAM actions required for the InvokeHarness API call.

---

##### `ListABTests`<sup>Required</sup> <a name="ListABTests" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListABTests"></a>

```typescript
public readonly ListABTests: string[];
```

- *Type:* string[]

IAM actions required for the ListABTests API call.

---

##### `ListActors`<sup>Required</sup> <a name="ListActors" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListActors"></a>

```typescript
public readonly ListActors: string[];
```

- *Type:* string[]

IAM actions required for the ListActors API call.

---

##### `ListAgentRuntimeEndpoints`<sup>Required</sup> <a name="ListAgentRuntimeEndpoints" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListAgentRuntimeEndpoints"></a>

```typescript
public readonly ListAgentRuntimeEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentRuntimeEndpoints API call.

---

##### `ListAgentRuntimes`<sup>Required</sup> <a name="ListAgentRuntimes" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListAgentRuntimes"></a>

```typescript
public readonly ListAgentRuntimes: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentRuntimes API call.

---

##### `ListAgentRuntimeVersions`<sup>Required</sup> <a name="ListAgentRuntimeVersions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListAgentRuntimeVersions"></a>

```typescript
public readonly ListAgentRuntimeVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentRuntimeVersions API call.

---

##### `ListAgentRuntimeVersionsByCapacityProvider`<sup>Required</sup> <a name="ListAgentRuntimeVersionsByCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListAgentRuntimeVersionsByCapacityProvider"></a>

```typescript
public readonly ListAgentRuntimeVersionsByCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentRuntimeVersionsByCapacityProvider API call.

---

##### `ListApiKeyCredentialProviders`<sup>Required</sup> <a name="ListApiKeyCredentialProviders" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListApiKeyCredentialProviders"></a>

```typescript
public readonly ListApiKeyCredentialProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListApiKeyCredentialProviders API call.

---

##### `ListBatchEvaluations`<sup>Required</sup> <a name="ListBatchEvaluations" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListBatchEvaluations"></a>

```typescript
public readonly ListBatchEvaluations: string[];
```

- *Type:* string[]

IAM actions required for the ListBatchEvaluations API call.

---

##### `ListBrowserProfiles`<sup>Required</sup> <a name="ListBrowserProfiles" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListBrowserProfiles"></a>

```typescript
public readonly ListBrowserProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListBrowserProfiles API call.

---

##### `ListBrowsers`<sup>Required</sup> <a name="ListBrowsers" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListBrowsers"></a>

```typescript
public readonly ListBrowsers: string[];
```

- *Type:* string[]

IAM actions required for the ListBrowsers API call.

---

##### `ListBrowserSessions`<sup>Required</sup> <a name="ListBrowserSessions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListBrowserSessions"></a>

```typescript
public readonly ListBrowserSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListBrowserSessions API call.

---

##### `ListCapacityProviders`<sup>Required</sup> <a name="ListCapacityProviders" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListCapacityProviders"></a>

```typescript
public readonly ListCapacityProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListCapacityProviders API call.

---

##### `ListCodeInterpreters`<sup>Required</sup> <a name="ListCodeInterpreters" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListCodeInterpreters"></a>

```typescript
public readonly ListCodeInterpreters: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeInterpreters API call.

---

##### `ListCodeInterpreterSessions`<sup>Required</sup> <a name="ListCodeInterpreterSessions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListCodeInterpreterSessions"></a>

```typescript
public readonly ListCodeInterpreterSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeInterpreterSessions API call.

---

##### `ListConfigurationBundles`<sup>Required</sup> <a name="ListConfigurationBundles" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListConfigurationBundles"></a>

```typescript
public readonly ListConfigurationBundles: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationBundles API call.

---

##### `ListConfigurationBundleVersions`<sup>Required</sup> <a name="ListConfigurationBundleVersions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListConfigurationBundleVersions"></a>

```typescript
public readonly ListConfigurationBundleVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationBundleVersions API call.

---

##### `ListDatasetExamples`<sup>Required</sup> <a name="ListDatasetExamples" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListDatasetExamples"></a>

```typescript
public readonly ListDatasetExamples: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetExamples API call.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasets API call.

---

##### `ListDatasetVersions`<sup>Required</sup> <a name="ListDatasetVersions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListDatasetVersions"></a>

```typescript
public readonly ListDatasetVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetVersions API call.

---

##### `ListEvaluators`<sup>Required</sup> <a name="ListEvaluators" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListEvaluators"></a>

```typescript
public readonly ListEvaluators: string[];
```

- *Type:* string[]

IAM actions required for the ListEvaluators API call.

---

##### `ListEvents`<sup>Required</sup> <a name="ListEvents" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListEvents"></a>

```typescript
public readonly ListEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListEvents API call.

---

##### `ListGatewayRateLimits`<sup>Required</sup> <a name="ListGatewayRateLimits" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListGatewayRateLimits"></a>

```typescript
public readonly ListGatewayRateLimits: string[];
```

- *Type:* string[]

IAM actions required for the ListGatewayRateLimits API call.

---

##### `ListGatewayRules`<sup>Required</sup> <a name="ListGatewayRules" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListGatewayRules"></a>

```typescript
public readonly ListGatewayRules: string[];
```

- *Type:* string[]

IAM actions required for the ListGatewayRules API call.

---

##### `ListGateways`<sup>Required</sup> <a name="ListGateways" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListGateways"></a>

```typescript
public readonly ListGateways: string[];
```

- *Type:* string[]

IAM actions required for the ListGateways API call.

---

##### `ListGatewayTargets`<sup>Required</sup> <a name="ListGatewayTargets" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListGatewayTargets"></a>

```typescript
public readonly ListGatewayTargets: string[];
```

- *Type:* string[]

IAM actions required for the ListGatewayTargets API call.

---

##### `ListHarnessEndpoints`<sup>Required</sup> <a name="ListHarnessEndpoints" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListHarnessEndpoints"></a>

```typescript
public readonly ListHarnessEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListHarnessEndpoints API call.

---

##### `ListHarnesses`<sup>Required</sup> <a name="ListHarnesses" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListHarnesses"></a>

```typescript
public readonly ListHarnesses: string[];
```

- *Type:* string[]

IAM actions required for the ListHarnesses API call.

---

##### `ListHarnessVersions`<sup>Required</sup> <a name="ListHarnessVersions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListHarnessVersions"></a>

```typescript
public readonly ListHarnessVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListHarnessVersions API call.

---

##### `ListMemories`<sup>Required</sup> <a name="ListMemories" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListMemories"></a>

```typescript
public readonly ListMemories: string[];
```

- *Type:* string[]

IAM actions required for the ListMemories API call.

---

##### `ListMemoryExtractionJobs`<sup>Required</sup> <a name="ListMemoryExtractionJobs" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListMemoryExtractionJobs"></a>

```typescript
public readonly ListMemoryExtractionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListMemoryExtractionJobs API call.

---

##### `ListMemoryRecords`<sup>Required</sup> <a name="ListMemoryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListMemoryRecords"></a>

```typescript
public readonly ListMemoryRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListMemoryRecords API call.

---

##### `ListOauth2CredentialProviders`<sup>Required</sup> <a name="ListOauth2CredentialProviders" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListOauth2CredentialProviders"></a>

```typescript
public readonly ListOauth2CredentialProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListOauth2CredentialProviders API call.

---

##### `ListOnlineEvaluationConfigs`<sup>Required</sup> <a name="ListOnlineEvaluationConfigs" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListOnlineEvaluationConfigs"></a>

```typescript
public readonly ListOnlineEvaluationConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListOnlineEvaluationConfigs API call.

---

##### `ListPaymentConnectors`<sup>Required</sup> <a name="ListPaymentConnectors" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPaymentConnectors"></a>

```typescript
public readonly ListPaymentConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListPaymentConnectors API call.

---

##### `ListPaymentCredentialProviders`<sup>Required</sup> <a name="ListPaymentCredentialProviders" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPaymentCredentialProviders"></a>

```typescript
public readonly ListPaymentCredentialProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListPaymentCredentialProviders API call.

---

##### `ListPaymentInstruments`<sup>Required</sup> <a name="ListPaymentInstruments" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPaymentInstruments"></a>

```typescript
public readonly ListPaymentInstruments: string[];
```

- *Type:* string[]

IAM actions required for the ListPaymentInstruments API call.

---

##### `ListPaymentManagers`<sup>Required</sup> <a name="ListPaymentManagers" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPaymentManagers"></a>

```typescript
public readonly ListPaymentManagers: string[];
```

- *Type:* string[]

IAM actions required for the ListPaymentManagers API call.

---

##### `ListPaymentSessions`<sup>Required</sup> <a name="ListPaymentSessions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPaymentSessions"></a>

```typescript
public readonly ListPaymentSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListPaymentSessions API call.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicies API call.

---

##### `ListPolicyEngines`<sup>Required</sup> <a name="ListPolicyEngines" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicyEngines"></a>

```typescript
public readonly ListPolicyEngines: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyEngines API call.

---

##### `ListPolicyEngineSummaries`<sup>Required</sup> <a name="ListPolicyEngineSummaries" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicyEngineSummaries"></a>

```typescript
public readonly ListPolicyEngineSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyEngineSummaries API call.

---

##### `ListPolicyGenerationAssets`<sup>Required</sup> <a name="ListPolicyGenerationAssets" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicyGenerationAssets"></a>

```typescript
public readonly ListPolicyGenerationAssets: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyGenerationAssets API call.

---

##### `ListPolicyGenerations`<sup>Required</sup> <a name="ListPolicyGenerations" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicyGenerations"></a>

```typescript
public readonly ListPolicyGenerations: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyGenerations API call.

---

##### `ListPolicyGenerationSummaries`<sup>Required</sup> <a name="ListPolicyGenerationSummaries" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicyGenerationSummaries"></a>

```typescript
public readonly ListPolicyGenerationSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyGenerationSummaries API call.

---

##### `ListPolicySummaries`<sup>Required</sup> <a name="ListPolicySummaries" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListPolicySummaries"></a>

```typescript
public readonly ListPolicySummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicySummaries API call.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendations API call.

---

##### `ListRegistries`<sup>Required</sup> <a name="ListRegistries" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListRegistries"></a>

```typescript
public readonly ListRegistries: string[];
```

- *Type:* string[]

IAM actions required for the ListRegistries API call.

---

##### `ListRegistryRecords`<sup>Required</sup> <a name="ListRegistryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListRegistryRecords"></a>

```typescript
public readonly ListRegistryRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListRegistryRecords API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWorkloadIdentities`<sup>Required</sup> <a name="ListWorkloadIdentities" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ListWorkloadIdentities"></a>

```typescript
public readonly ListWorkloadIdentities: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkloadIdentities API call.

---

##### `opGetABTest`<sup>Required</sup> <a name="opGetABTest" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetABTest"></a>

```typescript
public readonly opGetABTest: string[];
```

- *Type:* string[]

IAM actions required for the GetABTest API call.

---

##### `opGetAgentCard`<sup>Required</sup> <a name="opGetAgentCard" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetAgentCard"></a>

```typescript
public readonly opGetAgentCard: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentCard API call.

---

##### `opGetAgentRuntime`<sup>Required</sup> <a name="opGetAgentRuntime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetAgentRuntime"></a>

```typescript
public readonly opGetAgentRuntime: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentRuntime API call.

---

##### `opGetAgentRuntimeEndpoint`<sup>Required</sup> <a name="opGetAgentRuntimeEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetAgentRuntimeEndpoint"></a>

```typescript
public readonly opGetAgentRuntimeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentRuntimeEndpoint API call.

---

##### `opGetApiKeyCredentialProvider`<sup>Required</sup> <a name="opGetApiKeyCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetApiKeyCredentialProvider"></a>

```typescript
public readonly opGetApiKeyCredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the GetApiKeyCredentialProvider API call.

---

##### `opGetBatchEvaluation`<sup>Required</sup> <a name="opGetBatchEvaluation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetBatchEvaluation"></a>

```typescript
public readonly opGetBatchEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the GetBatchEvaluation API call.

---

##### `opGetBrowser`<sup>Required</sup> <a name="opGetBrowser" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetBrowser"></a>

```typescript
public readonly opGetBrowser: string[];
```

- *Type:* string[]

IAM actions required for the GetBrowser API call.

---

##### `opGetBrowserProfile`<sup>Required</sup> <a name="opGetBrowserProfile" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetBrowserProfile"></a>

```typescript
public readonly opGetBrowserProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetBrowserProfile API call.

---

##### `opGetBrowserSession`<sup>Required</sup> <a name="opGetBrowserSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetBrowserSession"></a>

```typescript
public readonly opGetBrowserSession: string[];
```

- *Type:* string[]

IAM actions required for the GetBrowserSession API call.

---

##### `opGetCapacityProvider`<sup>Required</sup> <a name="opGetCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetCapacityProvider"></a>

```typescript
public readonly opGetCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the GetCapacityProvider API call.

---

##### `opGetCodeInterpreter`<sup>Required</sup> <a name="opGetCodeInterpreter" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetCodeInterpreter"></a>

```typescript
public readonly opGetCodeInterpreter: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeInterpreter API call.

---

##### `opGetCodeInterpreterSession`<sup>Required</sup> <a name="opGetCodeInterpreterSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetCodeInterpreterSession"></a>

```typescript
public readonly opGetCodeInterpreterSession: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeInterpreterSession API call.

---

##### `opGetConfigurationBundle`<sup>Required</sup> <a name="opGetConfigurationBundle" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetConfigurationBundle"></a>

```typescript
public readonly opGetConfigurationBundle: string[];
```

- *Type:* string[]

IAM actions required for the GetConfigurationBundle API call.

---

##### `opGetConfigurationBundleVersion`<sup>Required</sup> <a name="opGetConfigurationBundleVersion" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetConfigurationBundleVersion"></a>

```typescript
public readonly opGetConfigurationBundleVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetConfigurationBundleVersion API call.

---

##### `opGetDataset`<sup>Required</sup> <a name="opGetDataset" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetDataset"></a>

```typescript
public readonly opGetDataset: string[];
```

- *Type:* string[]

IAM actions required for the GetDataset API call.

---

##### `opGetEvaluator`<sup>Required</sup> <a name="opGetEvaluator" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetEvaluator"></a>

```typescript
public readonly opGetEvaluator: string[];
```

- *Type:* string[]

IAM actions required for the GetEvaluator API call.

---

##### `opGetEvent`<sup>Required</sup> <a name="opGetEvent" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetEvent"></a>

```typescript
public readonly opGetEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetEvent API call.

---

##### `opGetGateway`<sup>Required</sup> <a name="opGetGateway" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetGateway"></a>

```typescript
public readonly opGetGateway: string[];
```

- *Type:* string[]

IAM actions required for the GetGateway API call.

---

##### `opGetGatewayRateLimit`<sup>Required</sup> <a name="opGetGatewayRateLimit" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetGatewayRateLimit"></a>

```typescript
public readonly opGetGatewayRateLimit: string[];
```

- *Type:* string[]

IAM actions required for the GetGatewayRateLimit API call.

---

##### `opGetGatewayRule`<sup>Required</sup> <a name="opGetGatewayRule" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetGatewayRule"></a>

```typescript
public readonly opGetGatewayRule: string[];
```

- *Type:* string[]

IAM actions required for the GetGatewayRule API call.

---

##### `opGetGatewayTarget`<sup>Required</sup> <a name="opGetGatewayTarget" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetGatewayTarget"></a>

```typescript
public readonly opGetGatewayTarget: string[];
```

- *Type:* string[]

IAM actions required for the GetGatewayTarget API call.

---

##### `opGetHarness`<sup>Required</sup> <a name="opGetHarness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetHarness"></a>

```typescript
public readonly opGetHarness: string[];
```

- *Type:* string[]

IAM actions required for the GetHarness API call.

---

##### `opGetHarnessEndpoint`<sup>Required</sup> <a name="opGetHarnessEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetHarnessEndpoint"></a>

```typescript
public readonly opGetHarnessEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetHarnessEndpoint API call.

---

##### `opGetMemory`<sup>Required</sup> <a name="opGetMemory" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetMemory"></a>

```typescript
public readonly opGetMemory: string[];
```

- *Type:* string[]

IAM actions required for the GetMemory API call.

---

##### `opGetMemoryRecord`<sup>Required</sup> <a name="opGetMemoryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetMemoryRecord"></a>

```typescript
public readonly opGetMemoryRecord: string[];
```

- *Type:* string[]

IAM actions required for the GetMemoryRecord API call.

---

##### `opGetOauth2CredentialProvider`<sup>Required</sup> <a name="opGetOauth2CredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetOauth2CredentialProvider"></a>

```typescript
public readonly opGetOauth2CredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the GetOauth2CredentialProvider API call.

---

##### `opGetOnlineEvaluationConfig`<sup>Required</sup> <a name="opGetOnlineEvaluationConfig" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetOnlineEvaluationConfig"></a>

```typescript
public readonly opGetOnlineEvaluationConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetOnlineEvaluationConfig API call.

---

##### `opGetPaymentConnector`<sup>Required</sup> <a name="opGetPaymentConnector" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentConnector"></a>

```typescript
public readonly opGetPaymentConnector: string[];
```

- *Type:* string[]

IAM actions required for the GetPaymentConnector API call.

---

##### `opGetPaymentCredentialProvider`<sup>Required</sup> <a name="opGetPaymentCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentCredentialProvider"></a>

```typescript
public readonly opGetPaymentCredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the GetPaymentCredentialProvider API call.

---

##### `opGetPaymentInstrument`<sup>Required</sup> <a name="opGetPaymentInstrument" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentInstrument"></a>

```typescript
public readonly opGetPaymentInstrument: string[];
```

- *Type:* string[]

IAM actions required for the GetPaymentInstrument API call.

---

##### `opGetPaymentInstrumentBalance`<sup>Required</sup> <a name="opGetPaymentInstrumentBalance" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentInstrumentBalance"></a>

```typescript
public readonly opGetPaymentInstrumentBalance: string[];
```

- *Type:* string[]

IAM actions required for the GetPaymentInstrumentBalance API call.

---

##### `opGetPaymentManager`<sup>Required</sup> <a name="opGetPaymentManager" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentManager"></a>

```typescript
public readonly opGetPaymentManager: string[];
```

- *Type:* string[]

IAM actions required for the GetPaymentManager API call.

---

##### `opGetPaymentSession`<sup>Required</sup> <a name="opGetPaymentSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPaymentSession"></a>

```typescript
public readonly opGetPaymentSession: string[];
```

- *Type:* string[]

IAM actions required for the GetPaymentSession API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetPolicyEngine`<sup>Required</sup> <a name="opGetPolicyEngine" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicyEngine"></a>

```typescript
public readonly opGetPolicyEngine: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicyEngine API call.

---

##### `opGetPolicyEngineSummary`<sup>Required</sup> <a name="opGetPolicyEngineSummary" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicyEngineSummary"></a>

```typescript
public readonly opGetPolicyEngineSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicyEngineSummary API call.

---

##### `opGetPolicyGeneration`<sup>Required</sup> <a name="opGetPolicyGeneration" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicyGeneration"></a>

```typescript
public readonly opGetPolicyGeneration: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicyGeneration API call.

---

##### `opGetPolicyGenerationSummary`<sup>Required</sup> <a name="opGetPolicyGenerationSummary" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicyGenerationSummary"></a>

```typescript
public readonly opGetPolicyGenerationSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicyGenerationSummary API call.

---

##### `opGetPolicySummary`<sup>Required</sup> <a name="opGetPolicySummary" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetPolicySummary"></a>

```typescript
public readonly opGetPolicySummary: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicySummary API call.

---

##### `opGetRecommendation`<sup>Required</sup> <a name="opGetRecommendation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetRecommendation"></a>

```typescript
public readonly opGetRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommendation API call.

---

##### `opGetRegistry`<sup>Required</sup> <a name="opGetRegistry" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetRegistry"></a>

```typescript
public readonly opGetRegistry: string[];
```

- *Type:* string[]

IAM actions required for the GetRegistry API call.

---

##### `opGetRegistryRecord`<sup>Required</sup> <a name="opGetRegistryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetRegistryRecord"></a>

```typescript
public readonly opGetRegistryRecord: string[];
```

- *Type:* string[]

IAM actions required for the GetRegistryRecord API call.

---

##### `opGetResourceApiKey`<sup>Required</sup> <a name="opGetResourceApiKey" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetResourceApiKey"></a>

```typescript
public readonly opGetResourceApiKey: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceApiKey API call.

---

##### `opGetResourceOauth2Token`<sup>Required</sup> <a name="opGetResourceOauth2Token" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetResourceOauth2Token"></a>

```typescript
public readonly opGetResourceOauth2Token: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceOauth2Token API call.

---

##### `opGetResourcePaymentToken`<sup>Required</sup> <a name="opGetResourcePaymentToken" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetResourcePaymentToken"></a>

```typescript
public readonly opGetResourcePaymentToken: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePaymentToken API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetTokenVault`<sup>Required</sup> <a name="opGetTokenVault" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetTokenVault"></a>

```typescript
public readonly opGetTokenVault: string[];
```

- *Type:* string[]

IAM actions required for the GetTokenVault API call.

---

##### `opGetWorkloadAccessToken`<sup>Required</sup> <a name="opGetWorkloadAccessToken" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetWorkloadAccessToken"></a>

```typescript
public readonly opGetWorkloadAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkloadAccessToken API call.

---

##### `opGetWorkloadAccessTokenForJWT`<sup>Required</sup> <a name="opGetWorkloadAccessTokenForJWT" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetWorkloadAccessTokenForJWT"></a>

```typescript
public readonly opGetWorkloadAccessTokenForJWT: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkloadAccessTokenForJWT API call.

---

##### `opGetWorkloadAccessTokenForUserId`<sup>Required</sup> <a name="opGetWorkloadAccessTokenForUserId" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetWorkloadAccessTokenForUserId"></a>

```typescript
public readonly opGetWorkloadAccessTokenForUserId: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkloadAccessTokenForUserId API call.

---

##### `opGetWorkloadIdentity`<sup>Required</sup> <a name="opGetWorkloadIdentity" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opGetWorkloadIdentity"></a>

```typescript
public readonly opGetWorkloadIdentity: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkloadIdentity API call.

---

##### `opSetTokenVaultCMK`<sup>Required</sup> <a name="opSetTokenVaultCMK" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.opSetTokenVaultCMK"></a>

```typescript
public readonly opSetTokenVaultCMK: string[];
```

- *Type:* string[]

IAM actions required for the SetTokenVaultCMK API call.

---

##### `ProcessPayment`<sup>Required</sup> <a name="ProcessPayment" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.ProcessPayment"></a>

```typescript
public readonly ProcessPayment: string[];
```

- *Type:* string[]

IAM actions required for the ProcessPayment API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RetrieveMemoryRecords`<sup>Required</sup> <a name="RetrieveMemoryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.RetrieveMemoryRecords"></a>

```typescript
public readonly RetrieveMemoryRecords: string[];
```

- *Type:* string[]

IAM actions required for the RetrieveMemoryRecords API call.

---

##### `SaveBrowserSessionProfile`<sup>Required</sup> <a name="SaveBrowserSessionProfile" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.SaveBrowserSessionProfile"></a>

```typescript
public readonly SaveBrowserSessionProfile: string[];
```

- *Type:* string[]

IAM actions required for the SaveBrowserSessionProfile API call.

---

##### `SearchRegistryRecords`<sup>Required</sup> <a name="SearchRegistryRecords" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.SearchRegistryRecords"></a>

```typescript
public readonly SearchRegistryRecords: string[];
```

- *Type:* string[]

IAM actions required for the SearchRegistryRecords API call.

---

##### `StartBatchEvaluation`<sup>Required</sup> <a name="StartBatchEvaluation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartBatchEvaluation"></a>

```typescript
public readonly StartBatchEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the StartBatchEvaluation API call.

---

##### `StartBrowserSession`<sup>Required</sup> <a name="StartBrowserSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartBrowserSession"></a>

```typescript
public readonly StartBrowserSession: string[];
```

- *Type:* string[]

IAM actions required for the StartBrowserSession API call.

---

##### `StartCodeInterpreterSession`<sup>Required</sup> <a name="StartCodeInterpreterSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartCodeInterpreterSession"></a>

```typescript
public readonly StartCodeInterpreterSession: string[];
```

- *Type:* string[]

IAM actions required for the StartCodeInterpreterSession API call.

---

##### `StartMemoryExtractionJob`<sup>Required</sup> <a name="StartMemoryExtractionJob" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartMemoryExtractionJob"></a>

```typescript
public readonly StartMemoryExtractionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartMemoryExtractionJob API call.

---

##### `StartPolicyGeneration`<sup>Required</sup> <a name="StartPolicyGeneration" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartPolicyGeneration"></a>

```typescript
public readonly StartPolicyGeneration: string[];
```

- *Type:* string[]

IAM actions required for the StartPolicyGeneration API call.

---

##### `StartRecommendation`<sup>Required</sup> <a name="StartRecommendation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StartRecommendation"></a>

```typescript
public readonly StartRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the StartRecommendation API call.

---

##### `StopBatchEvaluation`<sup>Required</sup> <a name="StopBatchEvaluation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StopBatchEvaluation"></a>

```typescript
public readonly StopBatchEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the StopBatchEvaluation API call.

---

##### `StopBrowserSession`<sup>Required</sup> <a name="StopBrowserSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StopBrowserSession"></a>

```typescript
public readonly StopBrowserSession: string[];
```

- *Type:* string[]

IAM actions required for the StopBrowserSession API call.

---

##### `StopCodeInterpreterSession`<sup>Required</sup> <a name="StopCodeInterpreterSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StopCodeInterpreterSession"></a>

```typescript
public readonly StopCodeInterpreterSession: string[];
```

- *Type:* string[]

IAM actions required for the StopCodeInterpreterSession API call.

---

##### `StopRuntimeSession`<sup>Required</sup> <a name="StopRuntimeSession" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.StopRuntimeSession"></a>

```typescript
public readonly StopRuntimeSession: string[];
```

- *Type:* string[]

IAM actions required for the StopRuntimeSession API call.

---

##### `SubmitRegistryRecordForApproval`<sup>Required</sup> <a name="SubmitRegistryRecordForApproval" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.SubmitRegistryRecordForApproval"></a>

```typescript
public readonly SubmitRegistryRecordForApproval: string[];
```

- *Type:* string[]

IAM actions required for the SubmitRegistryRecordForApproval API call.

---

##### `SynchronizeGatewayTargets`<sup>Required</sup> <a name="SynchronizeGatewayTargets" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.SynchronizeGatewayTargets"></a>

```typescript
public readonly SynchronizeGatewayTargets: string[];
```

- *Type:* string[]

IAM actions required for the SynchronizeGatewayTargets API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateABTest`<sup>Required</sup> <a name="UpdateABTest" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateABTest"></a>

```typescript
public readonly UpdateABTest: string[];
```

- *Type:* string[]

IAM actions required for the UpdateABTest API call.

---

##### `UpdateAgentRuntime`<sup>Required</sup> <a name="UpdateAgentRuntime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateAgentRuntime"></a>

```typescript
public readonly UpdateAgentRuntime: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentRuntime API call.

---

##### `UpdateAgentRuntimeEndpoint`<sup>Required</sup> <a name="UpdateAgentRuntimeEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateAgentRuntimeEndpoint"></a>

```typescript
public readonly UpdateAgentRuntimeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentRuntimeEndpoint API call.

---

##### `UpdateApiKeyCredentialProvider`<sup>Required</sup> <a name="UpdateApiKeyCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateApiKeyCredentialProvider"></a>

```typescript
public readonly UpdateApiKeyCredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApiKeyCredentialProvider API call.

---

##### `UpdateBrowserStream`<sup>Required</sup> <a name="UpdateBrowserStream" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateBrowserStream"></a>

```typescript
public readonly UpdateBrowserStream: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrowserStream API call.

---

##### `UpdateCapacityProvider`<sup>Required</sup> <a name="UpdateCapacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateCapacityProvider"></a>

```typescript
public readonly UpdateCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCapacityProvider API call.

---

##### `UpdateConfigurationBundle`<sup>Required</sup> <a name="UpdateConfigurationBundle" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateConfigurationBundle"></a>

```typescript
public readonly UpdateConfigurationBundle: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationBundle API call.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataset API call.

---

##### `UpdateDatasetExamples`<sup>Required</sup> <a name="UpdateDatasetExamples" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateDatasetExamples"></a>

```typescript
public readonly UpdateDatasetExamples: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDatasetExamples API call.

---

##### `UpdateEvaluator`<sup>Required</sup> <a name="UpdateEvaluator" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateEvaluator"></a>

```typescript
public readonly UpdateEvaluator: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEvaluator API call.

---

##### `UpdateGateway`<sup>Required</sup> <a name="UpdateGateway" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateGateway"></a>

```typescript
public readonly UpdateGateway: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGateway API call.

---

##### `UpdateGatewayRateLimit`<sup>Required</sup> <a name="UpdateGatewayRateLimit" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateGatewayRateLimit"></a>

```typescript
public readonly UpdateGatewayRateLimit: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewayRateLimit API call.

---

##### `UpdateGatewayRule`<sup>Required</sup> <a name="UpdateGatewayRule" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateGatewayRule"></a>

```typescript
public readonly UpdateGatewayRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewayRule API call.

---

##### `UpdateGatewayTarget`<sup>Required</sup> <a name="UpdateGatewayTarget" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateGatewayTarget"></a>

```typescript
public readonly UpdateGatewayTarget: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewayTarget API call.

---

##### `UpdateHarness`<sup>Required</sup> <a name="UpdateHarness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateHarness"></a>

```typescript
public readonly UpdateHarness: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHarness API call.

---

##### `UpdateHarnessEndpoint`<sup>Required</sup> <a name="UpdateHarnessEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateHarnessEndpoint"></a>

```typescript
public readonly UpdateHarnessEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHarnessEndpoint API call.

---

##### `UpdateMemory`<sup>Required</sup> <a name="UpdateMemory" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateMemory"></a>

```typescript
public readonly UpdateMemory: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMemory API call.

---

##### `UpdateOauth2CredentialProvider`<sup>Required</sup> <a name="UpdateOauth2CredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateOauth2CredentialProvider"></a>

```typescript
public readonly UpdateOauth2CredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOauth2CredentialProvider API call.

---

##### `UpdateOnlineEvaluationConfig`<sup>Required</sup> <a name="UpdateOnlineEvaluationConfig" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateOnlineEvaluationConfig"></a>

```typescript
public readonly UpdateOnlineEvaluationConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOnlineEvaluationConfig API call.

---

##### `UpdatePaymentConnector`<sup>Required</sup> <a name="UpdatePaymentConnector" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdatePaymentConnector"></a>

```typescript
public readonly UpdatePaymentConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePaymentConnector API call.

---

##### `UpdatePaymentCredentialProvider`<sup>Required</sup> <a name="UpdatePaymentCredentialProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdatePaymentCredentialProvider"></a>

```typescript
public readonly UpdatePaymentCredentialProvider: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePaymentCredentialProvider API call.

---

##### `UpdatePaymentManager`<sup>Required</sup> <a name="UpdatePaymentManager" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdatePaymentManager"></a>

```typescript
public readonly UpdatePaymentManager: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePaymentManager API call.

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdatePolicy"></a>

```typescript
public readonly UpdatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePolicy API call.

---

##### `UpdatePolicyEngine`<sup>Required</sup> <a name="UpdatePolicyEngine" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdatePolicyEngine"></a>

```typescript
public readonly UpdatePolicyEngine: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePolicyEngine API call.

---

##### `UpdateRegistry`<sup>Required</sup> <a name="UpdateRegistry" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateRegistry"></a>

```typescript
public readonly UpdateRegistry: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegistry API call.

---

##### `UpdateRegistryRecord`<sup>Required</sup> <a name="UpdateRegistryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateRegistryRecord"></a>

```typescript
public readonly UpdateRegistryRecord: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegistryRecord API call.

---

##### `UpdateRegistryRecordStatus`<sup>Required</sup> <a name="UpdateRegistryRecordStatus" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateRegistryRecordStatus"></a>

```typescript
public readonly UpdateRegistryRecordStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegistryRecordStatus API call.

---

##### `UpdateWorkloadIdentity`<sup>Required</sup> <a name="UpdateWorkloadIdentity" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOperations.property.UpdateWorkloadIdentity"></a>

```typescript
public readonly UpdateWorkloadIdentity: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkloadIdentity API call.

---

### BedrockAgentcoreResources <a name="BedrockAgentcoreResources" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources"></a>

ARN builders, validators, and parsers for bedrock-agentcore resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.Initializer"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

new bedrock_agentcore.BedrockAgentcoreResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.abTest">abTest</a></code> | Builds an ARN for the ab-test resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.apikeycredentialprovider">apikeycredentialprovider</a></code> | Builds an ARN for the apikeycredentialprovider resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.batchEvaluate">batchEvaluate</a></code> | Builds an ARN for the batch-evaluate resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.browser">browser</a></code> | Builds an ARN for the browser resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.browserCustom">browserCustom</a></code> | Builds an ARN for the browser-custom resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.browserProfile">browserProfile</a></code> | Builds an ARN for the browser-profile resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.capacityProvider">capacityProvider</a></code> | Builds an ARN for the capacity-provider resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.codeInterpreter">codeInterpreter</a></code> | Builds an ARN for the code-interpreter resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.codeInterpreterCustom">codeInterpreterCustom</a></code> | Builds an ARN for the code-interpreter-custom resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.configurationBundle">configurationBundle</a></code> | Builds an ARN for the configuration-bundle resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.evaluator">evaluator</a></code> | Builds an ARN for the evaluator resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.gateway">gateway</a></code> | Builds an ARN for the gateway resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.harness">harness</a></code> | Builds an ARN for the harness resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.harnessEndpoint">harnessEndpoint</a></code> | Builds an ARN for the harness-endpoint resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidAbTestArn">isValidAbTestArn</a></code> | Validates whether a string is a valid ARN for the ab-test resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidApikeycredentialproviderArn">isValidApikeycredentialproviderArn</a></code> | Validates whether a string is a valid ARN for the apikeycredentialprovider resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBatchEvaluateArn">isValidBatchEvaluateArn</a></code> | Validates whether a string is a valid ARN for the batch-evaluate resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserArn">isValidBrowserArn</a></code> | Validates whether a string is a valid ARN for the browser resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserCustomArn">isValidBrowserCustomArn</a></code> | Validates whether a string is a valid ARN for the browser-custom resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserProfileArn">isValidBrowserProfileArn</a></code> | Validates whether a string is a valid ARN for the browser-profile resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidCapacityProviderArn">isValidCapacityProviderArn</a></code> | Validates whether a string is a valid ARN for the capacity-provider resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidCodeInterpreterArn">isValidCodeInterpreterArn</a></code> | Validates whether a string is a valid ARN for the code-interpreter resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidCodeInterpreterCustomArn">isValidCodeInterpreterCustomArn</a></code> | Validates whether a string is a valid ARN for the code-interpreter-custom resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidConfigurationBundleArn">isValidConfigurationBundleArn</a></code> | Validates whether a string is a valid ARN for the configuration-bundle resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidEvaluatorArn">isValidEvaluatorArn</a></code> | Validates whether a string is a valid ARN for the evaluator resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidGatewayArn">isValidGatewayArn</a></code> | Validates whether a string is a valid ARN for the gateway resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidHarnessArn">isValidHarnessArn</a></code> | Validates whether a string is a valid ARN for the harness resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidHarnessEndpointArn">isValidHarnessEndpointArn</a></code> | Validates whether a string is a valid ARN for the harness-endpoint resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidMemoryArn">isValidMemoryArn</a></code> | Validates whether a string is a valid ARN for the memory resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidOauth2credentialproviderArn">isValidOauth2credentialproviderArn</a></code> | Validates whether a string is a valid ARN for the oauth2credentialprovider resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidOnlineEvaluationConfigArn">isValidOnlineEvaluationConfigArn</a></code> | Validates whether a string is a valid ARN for the online-evaluation-config resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPaymentcredentialproviderArn">isValidPaymentcredentialproviderArn</a></code> | Validates whether a string is a valid ARN for the paymentcredentialprovider resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPaymentManagerArn">isValidPaymentManagerArn</a></code> | Validates whether a string is a valid ARN for the payment-manager resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyArn">isValidPolicyArn</a></code> | Validates whether a string is a valid ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyEngineArn">isValidPolicyEngineArn</a></code> | Validates whether a string is a valid ARN for the policy-engine resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyGenerationArn">isValidPolicyGenerationArn</a></code> | Validates whether a string is a valid ARN for the policy-generation resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRecommendationArn">isValidRecommendationArn</a></code> | Validates whether a string is a valid ARN for the recommendation resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRegistryArn">isValidRegistryArn</a></code> | Validates whether a string is a valid ARN for the registry resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRegistryRecordArn">isValidRegistryRecordArn</a></code> | Validates whether a string is a valid ARN for the registry-record resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRuntimeArn">isValidRuntimeArn</a></code> | Validates whether a string is a valid ARN for the runtime resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRuntimeEndpointArn">isValidRuntimeEndpointArn</a></code> | Validates whether a string is a valid ARN for the runtime-endpoint resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidTokenVaultArn">isValidTokenVaultArn</a></code> | Validates whether a string is a valid ARN for the token-vault resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidWebSearchArn">isValidWebSearchArn</a></code> | Validates whether a string is a valid ARN for the web-search resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidWorkloadIdentityArn">isValidWorkloadIdentityArn</a></code> | Validates whether a string is a valid ARN for the workload-identity resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidWorkloadIdentityDirectoryArn">isValidWorkloadIdentityDirectoryArn</a></code> | Validates whether a string is a valid ARN for the workload-identity-directory resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.memory">memory</a></code> | Builds an ARN for the memory resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.oauth2credentialprovider">oauth2credentialprovider</a></code> | Builds an ARN for the oauth2credentialprovider resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.onlineEvaluationConfig">onlineEvaluationConfig</a></code> | Builds an ARN for the online-evaluation-config resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseAbTestArn">parseAbTestArn</a></code> | Parses a ab-test ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseApikeycredentialproviderArn">parseApikeycredentialproviderArn</a></code> | Parses a apikeycredentialprovider ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBatchEvaluateArn">parseBatchEvaluateArn</a></code> | Parses a batch-evaluate ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBrowserArn">parseBrowserArn</a></code> | Parses a browser ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBrowserCustomArn">parseBrowserCustomArn</a></code> | Parses a browser-custom ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBrowserProfileArn">parseBrowserProfileArn</a></code> | Parses a browser-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseCapacityProviderArn">parseCapacityProviderArn</a></code> | Parses a capacity-provider ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseCodeInterpreterArn">parseCodeInterpreterArn</a></code> | Parses a code-interpreter ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseCodeInterpreterCustomArn">parseCodeInterpreterCustomArn</a></code> | Parses a code-interpreter-custom ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseConfigurationBundleArn">parseConfigurationBundleArn</a></code> | Parses a configuration-bundle ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseEvaluatorArn">parseEvaluatorArn</a></code> | Parses a evaluator ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseGatewayArn">parseGatewayArn</a></code> | Parses a gateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseHarnessArn">parseHarnessArn</a></code> | Parses a harness ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseHarnessEndpointArn">parseHarnessEndpointArn</a></code> | Parses a harness-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseMemoryArn">parseMemoryArn</a></code> | Parses a memory ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseOauth2credentialproviderArn">parseOauth2credentialproviderArn</a></code> | Parses a oauth2credentialprovider ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseOnlineEvaluationConfigArn">parseOnlineEvaluationConfigArn</a></code> | Parses a online-evaluation-config ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePaymentcredentialproviderArn">parsePaymentcredentialproviderArn</a></code> | Parses a paymentcredentialprovider ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePaymentManagerArn">parsePaymentManagerArn</a></code> | Parses a payment-manager ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePolicyArn">parsePolicyArn</a></code> | Parses a policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePolicyEngineArn">parsePolicyEngineArn</a></code> | Parses a policy-engine ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePolicyGenerationArn">parsePolicyGenerationArn</a></code> | Parses a policy-generation ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRecommendationArn">parseRecommendationArn</a></code> | Parses a recommendation ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRegistryArn">parseRegistryArn</a></code> | Parses a registry ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRegistryRecordArn">parseRegistryRecordArn</a></code> | Parses a registry-record ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRuntimeArn">parseRuntimeArn</a></code> | Parses a runtime ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRuntimeEndpointArn">parseRuntimeEndpointArn</a></code> | Parses a runtime-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseTokenVaultArn">parseTokenVaultArn</a></code> | Parses a token-vault ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseWebSearchArn">parseWebSearchArn</a></code> | Parses a web-search ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseWorkloadIdentityArn">parseWorkloadIdentityArn</a></code> | Parses a workload-identity ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseWorkloadIdentityDirectoryArn">parseWorkloadIdentityDirectoryArn</a></code> | Parses a workload-identity-directory ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.paymentcredentialprovider">paymentcredentialprovider</a></code> | Builds an ARN for the paymentcredentialprovider resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.paymentManager">paymentManager</a></code> | Builds an ARN for the payment-manager resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.policy">policy</a></code> | Builds an ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.policyEngine">policyEngine</a></code> | Builds an ARN for the policy-engine resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.policyGeneration">policyGeneration</a></code> | Builds an ARN for the policy-generation resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.recommendation">recommendation</a></code> | Builds an ARN for the recommendation resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.registry">registry</a></code> | Builds an ARN for the registry resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.registryRecord">registryRecord</a></code> | Builds an ARN for the registry-record resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.runtime">runtime</a></code> | Builds an ARN for the runtime resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.runtimeEndpoint">runtimeEndpoint</a></code> | Builds an ARN for the runtime-endpoint resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.tokenVault">tokenVault</a></code> | Builds an ARN for the token-vault resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.webSearch">webSearch</a></code> | Builds an ARN for the web-search resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.workloadIdentity">workloadIdentity</a></code> | Builds an ARN for the workload-identity resource. |
| <code><a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.workloadIdentityDirectory">workloadIdentityDirectory</a></code> | Builds an ARN for the workload-identity-directory resource. |

---

##### `abTest` <a name="abTest" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.abTest"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.abTest(props: BedrockAgentcoreAbTestArnProps)
```

Builds an ARN for the ab-test resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.abTest.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreAbTestArnProps">BedrockAgentcoreAbTestArnProps</a>

---

##### `apikeycredentialprovider` <a name="apikeycredentialprovider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.apikeycredentialprovider"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.apikeycredentialprovider(props: BedrockAgentcoreApikeycredentialproviderArnProps)
```

Builds an ARN for the apikeycredentialprovider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.apikeycredentialprovider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreApikeycredentialproviderArnProps">BedrockAgentcoreApikeycredentialproviderArnProps</a>

---

##### `batchEvaluate` <a name="batchEvaluate" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.batchEvaluate"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.batchEvaluate(props: BedrockAgentcoreBatchEvaluateArnProps)
```

Builds an ARN for the batch-evaluate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.batchEvaluate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBatchEvaluateArnProps">BedrockAgentcoreBatchEvaluateArnProps</a>

---

##### `browser` <a name="browser" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.browser"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.browser(props: BedrockAgentcoreBrowserArnProps)
```

Builds an ARN for the browser resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.browser.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserArnProps">BedrockAgentcoreBrowserArnProps</a>

---

##### `browserCustom` <a name="browserCustom" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.browserCustom"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.browserCustom(props: BedrockAgentcoreBrowserCustomArnProps)
```

Builds an ARN for the browser-custom resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.browserCustom.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserCustomArnProps">BedrockAgentcoreBrowserCustomArnProps</a>

---

##### `browserProfile` <a name="browserProfile" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.browserProfile"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.browserProfile(props: BedrockAgentcoreBrowserProfileArnProps)
```

Builds an ARN for the browser-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.browserProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreBrowserProfileArnProps">BedrockAgentcoreBrowserProfileArnProps</a>

---

##### `capacityProvider` <a name="capacityProvider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.capacityProvider"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.capacityProvider(props: BedrockAgentcoreCapacityProviderArnProps)
```

Builds an ARN for the capacity-provider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.capacityProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCapacityProviderArnProps">BedrockAgentcoreCapacityProviderArnProps</a>

---

##### `codeInterpreter` <a name="codeInterpreter" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.codeInterpreter"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.codeInterpreter(props: BedrockAgentcoreCodeInterpreterArnProps)
```

Builds an ARN for the code-interpreter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.codeInterpreter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterArnProps">BedrockAgentcoreCodeInterpreterArnProps</a>

---

##### `codeInterpreterCustom` <a name="codeInterpreterCustom" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.codeInterpreterCustom"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.codeInterpreterCustom(props: BedrockAgentcoreCodeInterpreterCustomArnProps)
```

Builds an ARN for the code-interpreter-custom resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.codeInterpreterCustom.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreCodeInterpreterCustomArnProps">BedrockAgentcoreCodeInterpreterCustomArnProps</a>

---

##### `configurationBundle` <a name="configurationBundle" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.configurationBundle"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.configurationBundle(props: BedrockAgentcoreConfigurationBundleArnProps)
```

Builds an ARN for the configuration-bundle resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.configurationBundle.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreConfigurationBundleArnProps">BedrockAgentcoreConfigurationBundleArnProps</a>

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.dataset"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.dataset(props: BedrockAgentcoreDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreDatasetArnProps">BedrockAgentcoreDatasetArnProps</a>

---

##### `evaluator` <a name="evaluator" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.evaluator"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.evaluator(props: BedrockAgentcoreEvaluatorArnProps)
```

Builds an ARN for the evaluator resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.evaluator.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreEvaluatorArnProps">BedrockAgentcoreEvaluatorArnProps</a>

---

##### `gateway` <a name="gateway" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.gateway"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.gateway(props: BedrockAgentcoreGatewayArnProps)
```

Builds an ARN for the gateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.gateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreGatewayArnProps">BedrockAgentcoreGatewayArnProps</a>

---

##### `harness` <a name="harness" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.harness"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.harness(props: BedrockAgentcoreHarnessArnProps)
```

Builds an ARN for the harness resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.harness.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessArnProps">BedrockAgentcoreHarnessArnProps</a>

---

##### `harnessEndpoint` <a name="harnessEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.harnessEndpoint"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.harnessEndpoint(props: BedrockAgentcoreHarnessEndpointArnProps)
```

Builds an ARN for the harness-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.harnessEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreHarnessEndpointArnProps">BedrockAgentcoreHarnessEndpointArnProps</a>

---

##### `isValidAbTestArn` <a name="isValidAbTestArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidAbTestArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidAbTestArn(arn: string)
```

Validates whether a string is a valid ARN for the ab-test resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidAbTestArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApikeycredentialproviderArn` <a name="isValidApikeycredentialproviderArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidApikeycredentialproviderArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidApikeycredentialproviderArn(arn: string)
```

Validates whether a string is a valid ARN for the apikeycredentialprovider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidApikeycredentialproviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBatchEvaluateArn` <a name="isValidBatchEvaluateArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBatchEvaluateArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidBatchEvaluateArn(arn: string)
```

Validates whether a string is a valid ARN for the batch-evaluate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBatchEvaluateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBrowserArn` <a name="isValidBrowserArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserArn(arn: string)
```

Validates whether a string is a valid ARN for the browser resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBrowserCustomArn` <a name="isValidBrowserCustomArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserCustomArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserCustomArn(arn: string)
```

Validates whether a string is a valid ARN for the browser-custom resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserCustomArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBrowserProfileArn` <a name="isValidBrowserProfileArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserProfileArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the browser-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidBrowserProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCapacityProviderArn` <a name="isValidCapacityProviderArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidCapacityProviderArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidCapacityProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the capacity-provider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidCapacityProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCodeInterpreterArn` <a name="isValidCodeInterpreterArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidCodeInterpreterArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidCodeInterpreterArn(arn: string)
```

Validates whether a string is a valid ARN for the code-interpreter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidCodeInterpreterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCodeInterpreterCustomArn` <a name="isValidCodeInterpreterCustomArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidCodeInterpreterCustomArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidCodeInterpreterCustomArn(arn: string)
```

Validates whether a string is a valid ARN for the code-interpreter-custom resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidCodeInterpreterCustomArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationBundleArn` <a name="isValidConfigurationBundleArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidConfigurationBundleArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidConfigurationBundleArn(arn: string)
```

Validates whether a string is a valid ARN for the configuration-bundle resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidConfigurationBundleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidDatasetArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEvaluatorArn` <a name="isValidEvaluatorArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidEvaluatorArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidEvaluatorArn(arn: string)
```

Validates whether a string is a valid ARN for the evaluator resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidEvaluatorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGatewayArn` <a name="isValidGatewayArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidGatewayArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the gateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHarnessArn` <a name="isValidHarnessArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidHarnessArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidHarnessArn(arn: string)
```

Validates whether a string is a valid ARN for the harness resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidHarnessArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHarnessEndpointArn` <a name="isValidHarnessEndpointArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidHarnessEndpointArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidHarnessEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the harness-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidHarnessEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMemoryArn` <a name="isValidMemoryArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidMemoryArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidMemoryArn(arn: string)
```

Validates whether a string is a valid ARN for the memory resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidMemoryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOauth2credentialproviderArn` <a name="isValidOauth2credentialproviderArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidOauth2credentialproviderArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidOauth2credentialproviderArn(arn: string)
```

Validates whether a string is a valid ARN for the oauth2credentialprovider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidOauth2credentialproviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOnlineEvaluationConfigArn` <a name="isValidOnlineEvaluationConfigArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidOnlineEvaluationConfigArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidOnlineEvaluationConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the online-evaluation-config resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidOnlineEvaluationConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPaymentcredentialproviderArn` <a name="isValidPaymentcredentialproviderArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPaymentcredentialproviderArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidPaymentcredentialproviderArn(arn: string)
```

Validates whether a string is a valid ARN for the paymentcredentialprovider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPaymentcredentialproviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPaymentManagerArn` <a name="isValidPaymentManagerArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPaymentManagerArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidPaymentManagerArn(arn: string)
```

Validates whether a string is a valid ARN for the payment-manager resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPaymentManagerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicyArn` <a name="isValidPolicyArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicyEngineArn` <a name="isValidPolicyEngineArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyEngineArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyEngineArn(arn: string)
```

Validates whether a string is a valid ARN for the policy-engine resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyEngineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicyGenerationArn` <a name="isValidPolicyGenerationArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyGenerationArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyGenerationArn(arn: string)
```

Validates whether a string is a valid ARN for the policy-generation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidPolicyGenerationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecommendationArn` <a name="isValidRecommendationArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRecommendationArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidRecommendationArn(arn: string)
```

Validates whether a string is a valid ARN for the recommendation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRecommendationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegistryArn` <a name="isValidRegistryArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRegistryArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidRegistryArn(arn: string)
```

Validates whether a string is a valid ARN for the registry resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRegistryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegistryRecordArn` <a name="isValidRegistryRecordArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRegistryRecordArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidRegistryRecordArn(arn: string)
```

Validates whether a string is a valid ARN for the registry-record resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRegistryRecordArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuntimeArn` <a name="isValidRuntimeArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRuntimeArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidRuntimeArn(arn: string)
```

Validates whether a string is a valid ARN for the runtime resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRuntimeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuntimeEndpointArn` <a name="isValidRuntimeEndpointArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRuntimeEndpointArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidRuntimeEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the runtime-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidRuntimeEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTokenVaultArn` <a name="isValidTokenVaultArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidTokenVaultArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidTokenVaultArn(arn: string)
```

Validates whether a string is a valid ARN for the token-vault resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidTokenVaultArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWebSearchArn` <a name="isValidWebSearchArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidWebSearchArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidWebSearchArn(arn: string)
```

Validates whether a string is a valid ARN for the web-search resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidWebSearchArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkloadIdentityArn` <a name="isValidWorkloadIdentityArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidWorkloadIdentityArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidWorkloadIdentityArn(arn: string)
```

Validates whether a string is a valid ARN for the workload-identity resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidWorkloadIdentityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkloadIdentityDirectoryArn` <a name="isValidWorkloadIdentityDirectoryArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidWorkloadIdentityDirectoryArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.isValidWorkloadIdentityDirectoryArn(arn: string)
```

Validates whether a string is a valid ARN for the workload-identity-directory resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.isValidWorkloadIdentityDirectoryArn.parameter.arn"></a>

- *Type:* string

---

##### `memory` <a name="memory" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.memory"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.memory(props: BedrockAgentcoreMemoryArnProps)
```

Builds an ARN for the memory resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.memory.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreMemoryArnProps">BedrockAgentcoreMemoryArnProps</a>

---

##### `oauth2credentialprovider` <a name="oauth2credentialprovider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.oauth2credentialprovider"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.oauth2credentialprovider(props: BedrockAgentcoreOauth2credentialproviderArnProps)
```

Builds an ARN for the oauth2credentialprovider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.oauth2credentialprovider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOauth2credentialproviderArnProps">BedrockAgentcoreOauth2credentialproviderArnProps</a>

---

##### `onlineEvaluationConfig` <a name="onlineEvaluationConfig" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.onlineEvaluationConfig"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.onlineEvaluationConfig(props: BedrockAgentcoreOnlineEvaluationConfigArnProps)
```

Builds an ARN for the online-evaluation-config resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.onlineEvaluationConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreOnlineEvaluationConfigArnProps">BedrockAgentcoreOnlineEvaluationConfigArnProps</a>

---

##### `parseAbTestArn` <a name="parseAbTestArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseAbTestArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseAbTestArn(arn: string)
```

Parses a ab-test ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseAbTestArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApikeycredentialproviderArn` <a name="parseApikeycredentialproviderArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseApikeycredentialproviderArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseApikeycredentialproviderArn(arn: string)
```

Parses a apikeycredentialprovider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseApikeycredentialproviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBatchEvaluateArn` <a name="parseBatchEvaluateArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBatchEvaluateArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseBatchEvaluateArn(arn: string)
```

Parses a batch-evaluate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBatchEvaluateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBrowserArn` <a name="parseBrowserArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBrowserArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseBrowserArn(arn: string)
```

Parses a browser ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBrowserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBrowserCustomArn` <a name="parseBrowserCustomArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBrowserCustomArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseBrowserCustomArn(arn: string)
```

Parses a browser-custom ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBrowserCustomArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBrowserProfileArn` <a name="parseBrowserProfileArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBrowserProfileArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseBrowserProfileArn(arn: string)
```

Parses a browser-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseBrowserProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCapacityProviderArn` <a name="parseCapacityProviderArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseCapacityProviderArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseCapacityProviderArn(arn: string)
```

Parses a capacity-provider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseCapacityProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCodeInterpreterArn` <a name="parseCodeInterpreterArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseCodeInterpreterArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseCodeInterpreterArn(arn: string)
```

Parses a code-interpreter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseCodeInterpreterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCodeInterpreterCustomArn` <a name="parseCodeInterpreterCustomArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseCodeInterpreterCustomArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseCodeInterpreterCustomArn(arn: string)
```

Parses a code-interpreter-custom ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseCodeInterpreterCustomArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationBundleArn` <a name="parseConfigurationBundleArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseConfigurationBundleArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseConfigurationBundleArn(arn: string)
```

Parses a configuration-bundle ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseConfigurationBundleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseDatasetArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEvaluatorArn` <a name="parseEvaluatorArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseEvaluatorArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseEvaluatorArn(arn: string)
```

Parses a evaluator ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseEvaluatorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGatewayArn` <a name="parseGatewayArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseGatewayArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseGatewayArn(arn: string)
```

Parses a gateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHarnessArn` <a name="parseHarnessArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseHarnessArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseHarnessArn(arn: string)
```

Parses a harness ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseHarnessArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHarnessEndpointArn` <a name="parseHarnessEndpointArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseHarnessEndpointArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseHarnessEndpointArn(arn: string)
```

Parses a harness-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseHarnessEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMemoryArn` <a name="parseMemoryArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseMemoryArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseMemoryArn(arn: string)
```

Parses a memory ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseMemoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOauth2credentialproviderArn` <a name="parseOauth2credentialproviderArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseOauth2credentialproviderArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseOauth2credentialproviderArn(arn: string)
```

Parses a oauth2credentialprovider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseOauth2credentialproviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOnlineEvaluationConfigArn` <a name="parseOnlineEvaluationConfigArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseOnlineEvaluationConfigArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseOnlineEvaluationConfigArn(arn: string)
```

Parses a online-evaluation-config ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseOnlineEvaluationConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePaymentcredentialproviderArn` <a name="parsePaymentcredentialproviderArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePaymentcredentialproviderArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parsePaymentcredentialproviderArn(arn: string)
```

Parses a paymentcredentialprovider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePaymentcredentialproviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePaymentManagerArn` <a name="parsePaymentManagerArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePaymentManagerArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parsePaymentManagerArn(arn: string)
```

Parses a payment-manager ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePaymentManagerArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyArn` <a name="parsePolicyArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePolicyArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parsePolicyArn(arn: string)
```

Parses a policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyEngineArn` <a name="parsePolicyEngineArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePolicyEngineArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parsePolicyEngineArn(arn: string)
```

Parses a policy-engine ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePolicyEngineArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyGenerationArn` <a name="parsePolicyGenerationArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePolicyGenerationArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parsePolicyGenerationArn(arn: string)
```

Parses a policy-generation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parsePolicyGenerationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecommendationArn` <a name="parseRecommendationArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRecommendationArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseRecommendationArn(arn: string)
```

Parses a recommendation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRecommendationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegistryArn` <a name="parseRegistryArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRegistryArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseRegistryArn(arn: string)
```

Parses a registry ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRegistryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegistryRecordArn` <a name="parseRegistryRecordArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRegistryRecordArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseRegistryRecordArn(arn: string)
```

Parses a registry-record ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRegistryRecordArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuntimeArn` <a name="parseRuntimeArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRuntimeArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseRuntimeArn(arn: string)
```

Parses a runtime ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRuntimeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuntimeEndpointArn` <a name="parseRuntimeEndpointArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRuntimeEndpointArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseRuntimeEndpointArn(arn: string)
```

Parses a runtime-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseRuntimeEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTokenVaultArn` <a name="parseTokenVaultArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseTokenVaultArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseTokenVaultArn(arn: string)
```

Parses a token-vault ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseTokenVaultArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWebSearchArn` <a name="parseWebSearchArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseWebSearchArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseWebSearchArn(arn: string)
```

Parses a web-search ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseWebSearchArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkloadIdentityArn` <a name="parseWorkloadIdentityArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseWorkloadIdentityArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseWorkloadIdentityArn(arn: string)
```

Parses a workload-identity ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseWorkloadIdentityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkloadIdentityDirectoryArn` <a name="parseWorkloadIdentityDirectoryArn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseWorkloadIdentityDirectoryArn"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.parseWorkloadIdentityDirectoryArn(arn: string)
```

Parses a workload-identity-directory ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.parseWorkloadIdentityDirectoryArn.parameter.arn"></a>

- *Type:* string

---

##### `paymentcredentialprovider` <a name="paymentcredentialprovider" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.paymentcredentialprovider"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.paymentcredentialprovider(props: BedrockAgentcorePaymentcredentialproviderArnProps)
```

Builds an ARN for the paymentcredentialprovider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.paymentcredentialprovider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentcredentialproviderArnProps">BedrockAgentcorePaymentcredentialproviderArnProps</a>

---

##### `paymentManager` <a name="paymentManager" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.paymentManager"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.paymentManager(props: BedrockAgentcorePaymentManagerArnProps)
```

Builds an ARN for the payment-manager resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.paymentManager.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePaymentManagerArnProps">BedrockAgentcorePaymentManagerArnProps</a>

---

##### `policy` <a name="policy" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.policy"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.policy(props: BedrockAgentcorePolicyArnProps)
```

Builds an ARN for the policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.policy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyArnProps">BedrockAgentcorePolicyArnProps</a>

---

##### `policyEngine` <a name="policyEngine" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.policyEngine"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.policyEngine(props: BedrockAgentcorePolicyEngineArnProps)
```

Builds an ARN for the policy-engine resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.policyEngine.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyEngineArnProps">BedrockAgentcorePolicyEngineArnProps</a>

---

##### `policyGeneration` <a name="policyGeneration" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.policyGeneration"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.policyGeneration(props: BedrockAgentcorePolicyGenerationArnProps)
```

Builds an ARN for the policy-generation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.policyGeneration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcorePolicyGenerationArnProps">BedrockAgentcorePolicyGenerationArnProps</a>

---

##### `recommendation` <a name="recommendation" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.recommendation"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.recommendation(props: BedrockAgentcoreRecommendationArnProps)
```

Builds an ARN for the recommendation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.recommendation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRecommendationArnProps">BedrockAgentcoreRecommendationArnProps</a>

---

##### `registry` <a name="registry" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.registry"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.registry(props: BedrockAgentcoreRegistryArnProps)
```

Builds an ARN for the registry resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.registry.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryArnProps">BedrockAgentcoreRegistryArnProps</a>

---

##### `registryRecord` <a name="registryRecord" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.registryRecord"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.registryRecord(props: BedrockAgentcoreRegistryRecordArnProps)
```

Builds an ARN for the registry-record resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.registryRecord.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRegistryRecordArnProps">BedrockAgentcoreRegistryRecordArnProps</a>

---

##### `runtime` <a name="runtime" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.runtime"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.runtime(props: BedrockAgentcoreRuntimeArnProps)
```

Builds an ARN for the runtime resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.runtime.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeArnProps">BedrockAgentcoreRuntimeArnProps</a>

---

##### `runtimeEndpoint` <a name="runtimeEndpoint" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.runtimeEndpoint"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.runtimeEndpoint(props: BedrockAgentcoreRuntimeEndpointArnProps)
```

Builds an ARN for the runtime-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.runtimeEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreRuntimeEndpointArnProps">BedrockAgentcoreRuntimeEndpointArnProps</a>

---

##### `tokenVault` <a name="tokenVault" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.tokenVault"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.tokenVault(props: BedrockAgentcoreTokenVaultArnProps)
```

Builds an ARN for the token-vault resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.tokenVault.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreTokenVaultArnProps">BedrockAgentcoreTokenVaultArnProps</a>

---

##### `webSearch` <a name="webSearch" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.webSearch"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.webSearch(props: BedrockAgentcoreWebSearchArnProps)
```

Builds an ARN for the web-search resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.webSearch.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWebSearchArnProps">BedrockAgentcoreWebSearchArnProps</a>

---

##### `workloadIdentity` <a name="workloadIdentity" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.workloadIdentity"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.workloadIdentity(props: BedrockAgentcoreWorkloadIdentityArnProps)
```

Builds an ARN for the workload-identity resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.workloadIdentity.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityArnProps">BedrockAgentcoreWorkloadIdentityArnProps</a>

---

##### `workloadIdentityDirectory` <a name="workloadIdentityDirectory" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.workloadIdentityDirectory"></a>

```typescript
import { bedrock_agentcore } from '@cdk_utils/iam'

bedrock_agentcore.BedrockAgentcoreResources.workloadIdentityDirectory(props: BedrockAgentcoreWorkloadIdentityDirectoryArnProps)
```

Builds an ARN for the workload-identity-directory resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreResources.workloadIdentityDirectory.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_agentcore.BedrockAgentcoreWorkloadIdentityDirectoryArnProps">BedrockAgentcoreWorkloadIdentityDirectoryArnProps</a>

---




