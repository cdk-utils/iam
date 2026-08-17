# `bedrock` Submodule <a name="`bedrock` Submodule" id="@cdk_utils/iam.bedrock"></a>


## Structs <a name="Structs" id="Structs"></a>

### BedrockAdvancedPromptOptimizationJobArnComponents <a name="BedrockAdvancedPromptOptimizationJobArnComponents" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnComponents"></a>

Parsed components of a advanced-prompt-optimization-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAdvancedPromptOptimizationJobArnComponents: bedrock.BedrockAdvancedPromptOptimizationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockAdvancedPromptOptimizationJobArnProps <a name="BedrockAdvancedPromptOptimizationJobArnProps" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps"></a>

Properties for building a advanced-prompt-optimization-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAdvancedPromptOptimizationJobArnProps: bedrock.BedrockAdvancedPromptOptimizationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentAliasArnComponents <a name="BedrockAgentAliasArnComponents" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents"></a>

Parsed components of a agent-alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAgentAliasArnComponents: bedrock.BedrockAgentAliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.property.agentAliasId">agentAliasId</a></code> | <code>string</code> | The AgentAliasId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agentAliasId`<sup>Required</sup> <a name="agentAliasId" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.property.agentAliasId"></a>

```typescript
public readonly agentAliasId: string;
```

- *Type:* string

The AgentAliasId component.

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentAliasArnProps <a name="BedrockAgentAliasArnProps" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps"></a>

Properties for building a agent-alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAgentAliasArnProps: bedrock.BedrockAgentAliasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.property.agentAliasId">agentAliasId</a></code> | <code>string</code> | The AgentAliasId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agentAliasId`<sup>Required</sup> <a name="agentAliasId" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.property.agentAliasId"></a>

```typescript
public readonly agentAliasId: string;
```

- *Type:* string

The AgentAliasId component of the ARN.

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAgentArnComponents <a name="BedrockAgentArnComponents" id="@cdk_utils/iam.bedrock.BedrockAgentArnComponents"></a>

Parsed components of a agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAgentArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAgentArnComponents: bedrock.BedrockAgentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentArnComponents.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAgentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.bedrock.BedrockAgentArnComponents.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAgentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAgentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAgentArnProps <a name="BedrockAgentArnProps" id="@cdk_utils/iam.bedrock.BedrockAgentArnProps"></a>

Properties for building a agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAgentArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAgentArnProps: bedrock.BedrockAgentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentArnProps.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAgentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.bedrock.BedrockAgentArnProps.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAgentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAgentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAgentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockApplicationInferenceProfileArnComponents <a name="BedrockApplicationInferenceProfileArnComponents" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnComponents"></a>

Parsed components of a application-inference-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockApplicationInferenceProfileArnComponents: bedrock.BedrockApplicationInferenceProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockApplicationInferenceProfileArnProps <a name="BedrockApplicationInferenceProfileArnProps" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps"></a>

Properties for building a application-inference-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockApplicationInferenceProfileArnProps: bedrock.BedrockApplicationInferenceProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAsyncInvokeArnComponents <a name="BedrockAsyncInvokeArnComponents" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnComponents"></a>

Parsed components of a async-invoke ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAsyncInvokeArnComponents: bedrock.BedrockAsyncInvokeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockAsyncInvokeArnProps <a name="BedrockAsyncInvokeArnProps" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps"></a>

Properties for building a async-invoke ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAsyncInvokeArnProps: bedrock.BedrockAsyncInvokeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAutomatedReasoningPolicyArnComponents <a name="BedrockAutomatedReasoningPolicyArnComponents" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnComponents"></a>

Parsed components of a automated-reasoning-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAutomatedReasoningPolicyArnComponents: bedrock.BedrockAutomatedReasoningPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnComponents.property.automatedReasoningPolicyId">automatedReasoningPolicyId</a></code> | <code>string</code> | The AutomatedReasoningPolicyId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `automatedReasoningPolicyId`<sup>Required</sup> <a name="automatedReasoningPolicyId" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnComponents.property.automatedReasoningPolicyId"></a>

```typescript
public readonly automatedReasoningPolicyId: string;
```

- *Type:* string

The AutomatedReasoningPolicyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAutomatedReasoningPolicyArnProps <a name="BedrockAutomatedReasoningPolicyArnProps" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps"></a>

Properties for building a automated-reasoning-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAutomatedReasoningPolicyArnProps: bedrock.BedrockAutomatedReasoningPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps.property.automatedReasoningPolicyId">automatedReasoningPolicyId</a></code> | <code>string</code> | The AutomatedReasoningPolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `automatedReasoningPolicyId`<sup>Required</sup> <a name="automatedReasoningPolicyId" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps.property.automatedReasoningPolicyId"></a>

```typescript
public readonly automatedReasoningPolicyId: string;
```

- *Type:* string

The AutomatedReasoningPolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockAutomatedReasoningPolicyVersionArnComponents <a name="BedrockAutomatedReasoningPolicyVersionArnComponents" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents"></a>

Parsed components of a automated-reasoning-policy-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAutomatedReasoningPolicyVersionArnComponents: bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.property.automatedReasoningPolicyId">automatedReasoningPolicyId</a></code> | <code>string</code> | The AutomatedReasoningPolicyId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.property.automatedReasoningPolicyVersion">automatedReasoningPolicyVersion</a></code> | <code>string</code> | The AutomatedReasoningPolicyVersion component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `automatedReasoningPolicyId`<sup>Required</sup> <a name="automatedReasoningPolicyId" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.property.automatedReasoningPolicyId"></a>

```typescript
public readonly automatedReasoningPolicyId: string;
```

- *Type:* string

The AutomatedReasoningPolicyId component.

---

##### `automatedReasoningPolicyVersion`<sup>Required</sup> <a name="automatedReasoningPolicyVersion" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.property.automatedReasoningPolicyVersion"></a>

```typescript
public readonly automatedReasoningPolicyVersion: string;
```

- *Type:* string

The AutomatedReasoningPolicyVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockAutomatedReasoningPolicyVersionArnProps <a name="BedrockAutomatedReasoningPolicyVersionArnProps" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps"></a>

Properties for building a automated-reasoning-policy-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockAutomatedReasoningPolicyVersionArnProps: bedrock.BedrockAutomatedReasoningPolicyVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.property.automatedReasoningPolicyId">automatedReasoningPolicyId</a></code> | <code>string</code> | The AutomatedReasoningPolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.property.automatedReasoningPolicyVersion">automatedReasoningPolicyVersion</a></code> | <code>string</code> | The AutomatedReasoningPolicyVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `automatedReasoningPolicyId`<sup>Required</sup> <a name="automatedReasoningPolicyId" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.property.automatedReasoningPolicyId"></a>

```typescript
public readonly automatedReasoningPolicyId: string;
```

- *Type:* string

The AutomatedReasoningPolicyId component of the ARN.

---

##### `automatedReasoningPolicyVersion`<sup>Required</sup> <a name="automatedReasoningPolicyVersion" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.property.automatedReasoningPolicyVersion"></a>

```typescript
public readonly automatedReasoningPolicyVersion: string;
```

- *Type:* string

The AutomatedReasoningPolicyVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockBedrockMarketplaceModelEndpointArnComponents <a name="BedrockBedrockMarketplaceModelEndpointArnComponents" id="@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnComponents"></a>

Parsed components of a bedrock-marketplace-model-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockBedrockMarketplaceModelEndpointArnComponents: bedrock.BedrockBedrockMarketplaceModelEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockBedrockMarketplaceModelEndpointArnProps <a name="BedrockBedrockMarketplaceModelEndpointArnProps" id="@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnProps"></a>

Properties for building a bedrock-marketplace-model-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockBedrockMarketplaceModelEndpointArnProps: bedrock.BedrockBedrockMarketplaceModelEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockBlueprintArnComponents <a name="BedrockBlueprintArnComponents" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnComponents"></a>

Parsed components of a blueprint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockBlueprintArnComponents: bedrock.BedrockBlueprintArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintArnComponents.property.blueprintId">blueprintId</a></code> | <code>string</code> | The BlueprintId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `blueprintId`<sup>Required</sup> <a name="blueprintId" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnComponents.property.blueprintId"></a>

```typescript
public readonly blueprintId: string;
```

- *Type:* string

The BlueprintId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockBlueprintArnProps <a name="BedrockBlueprintArnProps" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnProps"></a>

Properties for building a blueprint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockBlueprintArnProps: bedrock.BedrockBlueprintArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintArnProps.property.blueprintId">blueprintId</a></code> | <code>string</code> | The BlueprintId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `blueprintId`<sup>Required</sup> <a name="blueprintId" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnProps.property.blueprintId"></a>

```typescript
public readonly blueprintId: string;
```

- *Type:* string

The BlueprintId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockBlueprintArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockBlueprintOptimizationInvocationArnComponents <a name="BedrockBlueprintOptimizationInvocationArnComponents" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnComponents"></a>

Parsed components of a blueprint-optimization-invocation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockBlueprintOptimizationInvocationArnComponents: bedrock.BedrockBlueprintOptimizationInvocationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockBlueprintOptimizationInvocationArnProps <a name="BedrockBlueprintOptimizationInvocationArnProps" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps"></a>

Properties for building a blueprint-optimization-invocation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockBlueprintOptimizationInvocationArnProps: bedrock.BedrockBlueprintOptimizationInvocationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockCustomModelArnComponents <a name="BedrockCustomModelArnComponents" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnComponents"></a>

Parsed components of a custom-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockCustomModelArnComponents: bedrock.BedrockCustomModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockCustomModelArnProps <a name="BedrockCustomModelArnProps" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnProps"></a>

Properties for building a custom-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockCustomModelArnProps: bedrock.BedrockCustomModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockCustomModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockCustomModelDeploymentArnComponents <a name="BedrockCustomModelDeploymentArnComponents" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnComponents"></a>

Parsed components of a custom-model-deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockCustomModelDeploymentArnComponents: bedrock.BedrockCustomModelDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockCustomModelDeploymentArnProps <a name="BedrockCustomModelDeploymentArnProps" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps"></a>

Properties for building a custom-model-deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockCustomModelDeploymentArnProps: bedrock.BedrockCustomModelDeploymentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockDataAutomationInvocationJobArnComponents <a name="BedrockDataAutomationInvocationJobArnComponents" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnComponents"></a>

Parsed components of a data-automation-invocation-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDataAutomationInvocationJobArnComponents: bedrock.BedrockDataAutomationInvocationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockDataAutomationInvocationJobArnProps <a name="BedrockDataAutomationInvocationJobArnProps" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps"></a>

Properties for building a data-automation-invocation-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDataAutomationInvocationJobArnProps: bedrock.BedrockDataAutomationInvocationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockDataAutomationLibraryArnComponents <a name="BedrockDataAutomationLibraryArnComponents" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnComponents"></a>

Parsed components of a data-automation-library ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDataAutomationLibraryArnComponents: bedrock.BedrockDataAutomationLibraryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnComponents.property.dataAutomationLibraryId">dataAutomationLibraryId</a></code> | <code>string</code> | The DataAutomationLibraryId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataAutomationLibraryId`<sup>Required</sup> <a name="dataAutomationLibraryId" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnComponents.property.dataAutomationLibraryId"></a>

```typescript
public readonly dataAutomationLibraryId: string;
```

- *Type:* string

The DataAutomationLibraryId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockDataAutomationLibraryArnProps <a name="BedrockDataAutomationLibraryArnProps" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps"></a>

Properties for building a data-automation-library ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDataAutomationLibraryArnProps: bedrock.BedrockDataAutomationLibraryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps.property.dataAutomationLibraryId">dataAutomationLibraryId</a></code> | <code>string</code> | The DataAutomationLibraryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataAutomationLibraryId`<sup>Required</sup> <a name="dataAutomationLibraryId" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps.property.dataAutomationLibraryId"></a>

```typescript
public readonly dataAutomationLibraryId: string;
```

- *Type:* string

The DataAutomationLibraryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockDataAutomationLibraryIngestionJobArnComponents <a name="BedrockDataAutomationLibraryIngestionJobArnComponents" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents"></a>

Parsed components of a data-automation-library-ingestion-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDataAutomationLibraryIngestionJobArnComponents: bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents.property.ingestionJobId">ingestionJobId</a></code> | <code>string</code> | The IngestionJobId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ingestionJobId`<sup>Required</sup> <a name="ingestionJobId" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents.property.ingestionJobId"></a>

```typescript
public readonly ingestionJobId: string;
```

- *Type:* string

The IngestionJobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockDataAutomationLibraryIngestionJobArnProps <a name="BedrockDataAutomationLibraryIngestionJobArnProps" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps"></a>

Properties for building a data-automation-library-ingestion-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDataAutomationLibraryIngestionJobArnProps: bedrock.BedrockDataAutomationLibraryIngestionJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps.property.ingestionJobId">ingestionJobId</a></code> | <code>string</code> | The IngestionJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ingestionJobId`<sup>Required</sup> <a name="ingestionJobId" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps.property.ingestionJobId"></a>

```typescript
public readonly ingestionJobId: string;
```

- *Type:* string

The IngestionJobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockDataAutomationProfileArnComponents <a name="BedrockDataAutomationProfileArnComponents" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnComponents"></a>

Parsed components of a data-automation-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDataAutomationProfileArnComponents: bedrock.BedrockDataAutomationProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnComponents.property.profileId">profileId</a></code> | <code>string</code> | The ProfileId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnComponents.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ProfileId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockDataAutomationProfileArnProps <a name="BedrockDataAutomationProfileArnProps" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps"></a>

Properties for building a data-automation-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDataAutomationProfileArnProps: bedrock.BedrockDataAutomationProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps.property.profileId">profileId</a></code> | <code>string</code> | The ProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockDataAutomationProjectArnComponents <a name="BedrockDataAutomationProjectArnComponents" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnComponents"></a>

Parsed components of a data-automation-project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDataAutomationProjectArnComponents: bedrock.BedrockDataAutomationProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnComponents.property.projectId">projectId</a></code> | <code>string</code> | The ProjectId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnComponents.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ProjectId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockDataAutomationProjectArnProps <a name="BedrockDataAutomationProjectArnProps" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps"></a>

Properties for building a data-automation-project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDataAutomationProjectArnProps: bedrock.BedrockDataAutomationProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps.property.projectId">projectId</a></code> | <code>string</code> | The ProjectId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ProjectId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockDefaultPromptRouterArnComponents <a name="BedrockDefaultPromptRouterArnComponents" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnComponents"></a>

Parsed components of a default-prompt-router ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDefaultPromptRouterArnComponents: bedrock.BedrockDefaultPromptRouterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockDefaultPromptRouterArnProps <a name="BedrockDefaultPromptRouterArnProps" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps"></a>

Properties for building a default-prompt-router ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockDefaultPromptRouterArnProps: bedrock.BedrockDefaultPromptRouterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockEvaluationJobArnComponents <a name="BedrockEvaluationJobArnComponents" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnComponents"></a>

Parsed components of a evaluation-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockEvaluationJobArnComponents: bedrock.BedrockEvaluationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockEvaluationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockEvaluationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockEvaluationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockEvaluationJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockEvaluationJobArnProps <a name="BedrockEvaluationJobArnProps" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps"></a>

Properties for building a evaluation-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockEvaluationJobArnProps: bedrock.BedrockEvaluationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockFlowAliasArnComponents <a name="BedrockFlowAliasArnComponents" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents"></a>

Parsed components of a flow-alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockFlowAliasArnComponents: bedrock.BedrockFlowAliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.property.flowAliasId">flowAliasId</a></code> | <code>string</code> | The FlowAliasId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `flowAliasId`<sup>Required</sup> <a name="flowAliasId" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.property.flowAliasId"></a>

```typescript
public readonly flowAliasId: string;
```

- *Type:* string

The FlowAliasId component.

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockFlowAliasArnProps <a name="BedrockFlowAliasArnProps" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps"></a>

Properties for building a flow-alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockFlowAliasArnProps: bedrock.BedrockFlowAliasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.property.flowAliasId">flowAliasId</a></code> | <code>string</code> | The FlowAliasId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `flowAliasId`<sup>Required</sup> <a name="flowAliasId" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.property.flowAliasId"></a>

```typescript
public readonly flowAliasId: string;
```

- *Type:* string

The FlowAliasId component of the ARN.

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockFlowArnComponents <a name="BedrockFlowArnComponents" id="@cdk_utils/iam.bedrock.BedrockFlowArnComponents"></a>

Parsed components of a flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockFlowArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockFlowArnComponents: bedrock.BedrockFlowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowArnComponents.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockFlowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.bedrock.BedrockFlowArnComponents.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockFlowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockFlowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockFlowArnProps <a name="BedrockFlowArnProps" id="@cdk_utils/iam.bedrock.BedrockFlowArnProps"></a>

Properties for building a flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockFlowArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockFlowArnProps: bedrock.BedrockFlowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowArnProps.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.bedrock.BedrockFlowArnProps.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockFlowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockFlowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockFlowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockFlowExecutionArnComponents <a name="BedrockFlowExecutionArnComponents" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents"></a>

Parsed components of a flow-execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockFlowExecutionArnComponents: bedrock.BedrockFlowExecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.flowAliasId">flowAliasId</a></code> | <code>string</code> | The FlowAliasId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.flowExecutionId">flowExecutionId</a></code> | <code>string</code> | The FlowExecutionId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `flowAliasId`<sup>Required</sup> <a name="flowAliasId" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.flowAliasId"></a>

```typescript
public readonly flowAliasId: string;
```

- *Type:* string

The FlowAliasId component.

---

##### `flowExecutionId`<sup>Required</sup> <a name="flowExecutionId" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.flowExecutionId"></a>

```typescript
public readonly flowExecutionId: string;
```

- *Type:* string

The FlowExecutionId component.

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockFlowExecutionArnProps <a name="BedrockFlowExecutionArnProps" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps"></a>

Properties for building a flow-execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockFlowExecutionArnProps: bedrock.BedrockFlowExecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.flowAliasId">flowAliasId</a></code> | <code>string</code> | The FlowAliasId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.flowExecutionId">flowExecutionId</a></code> | <code>string</code> | The FlowExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `flowAliasId`<sup>Required</sup> <a name="flowAliasId" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.flowAliasId"></a>

```typescript
public readonly flowAliasId: string;
```

- *Type:* string

The FlowAliasId component of the ARN.

---

##### `flowExecutionId`<sup>Required</sup> <a name="flowExecutionId" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.flowExecutionId"></a>

```typescript
public readonly flowExecutionId: string;
```

- *Type:* string

The FlowExecutionId component of the ARN.

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockFoundationModelArnComponents <a name="BedrockFoundationModelArnComponents" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnComponents"></a>

Parsed components of a foundation-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockFoundationModelArnComponents: bedrock.BedrockFoundationModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFoundationModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFoundationModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFoundationModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFoundationModelArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockFoundationModelArnProps <a name="BedrockFoundationModelArnProps" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps"></a>

Properties for building a foundation-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockFoundationModelArnProps: bedrock.BedrockFoundationModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockGuardrailArnComponents <a name="BedrockGuardrailArnComponents" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnComponents"></a>

Parsed components of a guardrail ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockGuardrailArnComponents: bedrock.BedrockGuardrailArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailArnComponents.property.guardrailId">guardrailId</a></code> | <code>string</code> | The GuardrailId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnComponents.property.guardrailId"></a>

```typescript
public readonly guardrailId: string;
```

- *Type:* string

The GuardrailId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockGuardrailArnProps <a name="BedrockGuardrailArnProps" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnProps"></a>

Properties for building a guardrail ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockGuardrailArnProps: bedrock.BedrockGuardrailArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailArnProps.property.guardrailId">guardrailId</a></code> | <code>string</code> | The GuardrailId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnProps.property.guardrailId"></a>

```typescript
public readonly guardrailId: string;
```

- *Type:* string

The GuardrailId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockGuardrailArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockGuardrailProfileArnComponents <a name="BedrockGuardrailProfileArnComponents" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnComponents"></a>

Parsed components of a guardrail-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockGuardrailProfileArnComponents: bedrock.BedrockGuardrailProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockGuardrailProfileArnProps <a name="BedrockGuardrailProfileArnProps" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps"></a>

Properties for building a guardrail-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockGuardrailProfileArnProps: bedrock.BedrockGuardrailProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockImportedModelArnComponents <a name="BedrockImportedModelArnComponents" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnComponents"></a>

Parsed components of a imported-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockImportedModelArnComponents: bedrock.BedrockImportedModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockImportedModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockImportedModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockImportedModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockImportedModelArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockImportedModelArnProps <a name="BedrockImportedModelArnProps" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnProps"></a>

Properties for building a imported-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockImportedModelArnProps: bedrock.BedrockImportedModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockImportedModelArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockImportedModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockImportedModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockImportedModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockImportedModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockInferenceProfileArnComponents <a name="BedrockInferenceProfileArnComponents" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnComponents"></a>

Parsed components of a inference-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockInferenceProfileArnComponents: bedrock.BedrockInferenceProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockInferenceProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockInferenceProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockInferenceProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockInferenceProfileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockInferenceProfileArnProps <a name="BedrockInferenceProfileArnProps" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps"></a>

Properties for building a inference-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockInferenceProfileArnProps: bedrock.BedrockInferenceProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockKnowledgeBaseArnComponents <a name="BedrockKnowledgeBaseArnComponents" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnComponents"></a>

Parsed components of a knowledge-base ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockKnowledgeBaseArnComponents: bedrock.BedrockKnowledgeBaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnComponents.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnComponents.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockKnowledgeBaseArnProps <a name="BedrockKnowledgeBaseArnProps" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps"></a>

Properties for building a knowledge-base ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockKnowledgeBaseArnProps: bedrock.BedrockKnowledgeBaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockModelCopyJobArnComponents <a name="BedrockModelCopyJobArnComponents" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnComponents"></a>

Parsed components of a model-copy-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockModelCopyJobArnComponents: bedrock.BedrockModelCopyJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCopyJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCopyJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCopyJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCopyJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockModelCopyJobArnProps <a name="BedrockModelCopyJobArnProps" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps"></a>

Properties for building a model-copy-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockModelCopyJobArnProps: bedrock.BedrockModelCopyJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockModelCustomizationJobArnComponents <a name="BedrockModelCustomizationJobArnComponents" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnComponents"></a>

Parsed components of a model-customization-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockModelCustomizationJobArnComponents: bedrock.BedrockModelCustomizationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockModelCustomizationJobArnProps <a name="BedrockModelCustomizationJobArnProps" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps"></a>

Properties for building a model-customization-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockModelCustomizationJobArnProps: bedrock.BedrockModelCustomizationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockModelEvaluationJobArnComponents <a name="BedrockModelEvaluationJobArnComponents" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnComponents"></a>

Parsed components of a model-evaluation-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockModelEvaluationJobArnComponents: bedrock.BedrockModelEvaluationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockModelEvaluationJobArnProps <a name="BedrockModelEvaluationJobArnProps" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps"></a>

Properties for building a model-evaluation-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockModelEvaluationJobArnProps: bedrock.BedrockModelEvaluationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockModelImportJobArnComponents <a name="BedrockModelImportJobArnComponents" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnComponents"></a>

Parsed components of a model-import-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockModelImportJobArnComponents: bedrock.BedrockModelImportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelImportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelImportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelImportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelImportJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockModelImportJobArnProps <a name="BedrockModelImportJobArnProps" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps"></a>

Properties for building a model-import-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockModelImportJobArnProps: bedrock.BedrockModelImportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockModelInvocationJobArnComponents <a name="BedrockModelInvocationJobArnComponents" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnComponents"></a>

Parsed components of a model-invocation-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockModelInvocationJobArnComponents: bedrock.BedrockModelInvocationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnComponents.property.jobIdentifier">jobIdentifier</a></code> | <code>string</code> | The JobIdentifier component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobIdentifier`<sup>Required</sup> <a name="jobIdentifier" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnComponents.property.jobIdentifier"></a>

```typescript
public readonly jobIdentifier: string;
```

- *Type:* string

The JobIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockModelInvocationJobArnProps <a name="BedrockModelInvocationJobArnProps" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps"></a>

Properties for building a model-invocation-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockModelInvocationJobArnProps: bedrock.BedrockModelInvocationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps.property.jobIdentifier">jobIdentifier</a></code> | <code>string</code> | The JobIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobIdentifier`<sup>Required</sup> <a name="jobIdentifier" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps.property.jobIdentifier"></a>

```typescript
public readonly jobIdentifier: string;
```

- *Type:* string

The JobIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockProjectArnComponents <a name="BedrockProjectArnComponents" id="@cdk_utils/iam.bedrock.BedrockProjectArnComponents"></a>

Parsed components of a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockProjectArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockProjectArnComponents: bedrock.BedrockProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProjectArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockProjectArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockProjectArnProps <a name="BedrockProjectArnProps" id="@cdk_utils/iam.bedrock.BedrockProjectArnProps"></a>

Properties for building a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockProjectArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockProjectArnProps: bedrock.BedrockProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProjectArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockProjectArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockPromptArnComponents <a name="BedrockPromptArnComponents" id="@cdk_utils/iam.bedrock.BedrockPromptArnComponents"></a>

Parsed components of a prompt ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockPromptArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockPromptArnComponents: bedrock.BedrockPromptArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptArnComponents.property.promptId">promptId</a></code> | <code>string</code> | The PromptId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockPromptArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockPromptArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="@cdk_utils/iam.bedrock.BedrockPromptArnComponents.property.promptId"></a>

```typescript
public readonly promptId: string;
```

- *Type:* string

The PromptId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockPromptArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockPromptArnProps <a name="BedrockPromptArnProps" id="@cdk_utils/iam.bedrock.BedrockPromptArnProps"></a>

Properties for building a prompt ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockPromptArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockPromptArnProps: bedrock.BedrockPromptArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptArnProps.property.promptId">promptId</a></code> | <code>string</code> | The PromptId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="@cdk_utils/iam.bedrock.BedrockPromptArnProps.property.promptId"></a>

```typescript
public readonly promptId: string;
```

- *Type:* string

The PromptId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockPromptArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockPromptArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockPromptArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockPromptRouterArnComponents <a name="BedrockPromptRouterArnComponents" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnComponents"></a>

Parsed components of a prompt-router ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockPromptRouterArnComponents: bedrock.BedrockPromptRouterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptRouterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptRouterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptRouterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptRouterArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockPromptRouterArnProps <a name="BedrockPromptRouterArnProps" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps"></a>

Properties for building a prompt-router ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockPromptRouterArnProps: bedrock.BedrockPromptRouterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockPromptVersionArnComponents <a name="BedrockPromptVersionArnComponents" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents"></a>

Parsed components of a prompt-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockPromptVersionArnComponents: bedrock.BedrockPromptVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.property.promptId">promptId</a></code> | <code>string</code> | The PromptId component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.property.promptVersion">promptVersion</a></code> | <code>string</code> | The PromptVersion component. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.property.promptId"></a>

```typescript
public readonly promptId: string;
```

- *Type:* string

The PromptId component.

---

##### `promptVersion`<sup>Required</sup> <a name="promptVersion" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.property.promptVersion"></a>

```typescript
public readonly promptVersion: string;
```

- *Type:* string

The PromptVersion component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BedrockPromptVersionArnProps <a name="BedrockPromptVersionArnProps" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps"></a>

Properties for building a prompt-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockPromptVersionArnProps: bedrock.BedrockPromptVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.property.promptId">promptId</a></code> | <code>string</code> | The PromptId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.property.promptVersion">promptVersion</a></code> | <code>string</code> | The PromptVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.property.promptId"></a>

```typescript
public readonly promptId: string;
```

- *Type:* string

The PromptId component of the ARN.

---

##### `promptVersion`<sup>Required</sup> <a name="promptVersion" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.property.promptVersion"></a>

```typescript
public readonly promptVersion: string;
```

- *Type:* string

The PromptVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockProvisionedModelArnComponents <a name="BedrockProvisionedModelArnComponents" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnComponents"></a>

Parsed components of a provisioned-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockProvisionedModelArnComponents: bedrock.BedrockProvisionedModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProvisionedModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProvisionedModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProvisionedModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProvisionedModelArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockProvisionedModelArnProps <a name="BedrockProvisionedModelArnProps" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps"></a>

Properties for building a provisioned-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockProvisionedModelArnProps: bedrock.BedrockProvisionedModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockSessionArnComponents <a name="BedrockSessionArnComponents" id="@cdk_utils/iam.bedrock.BedrockSessionArnComponents"></a>

Parsed components of a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockSessionArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockSessionArnComponents: bedrock.BedrockSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.bedrock.BedrockSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

### BedrockSessionArnProps <a name="BedrockSessionArnProps" id="@cdk_utils/iam.bedrock.BedrockSessionArnProps"></a>

Properties for building a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockSessionArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockSessionArnProps: bedrock.BedrockSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.bedrock.BedrockSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock.BedrockSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockSystemToolArnComponents <a name="BedrockSystemToolArnComponents" id="@cdk_utils/iam.bedrock.BedrockSystemToolArnComponents"></a>

Parsed components of a system-tool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockSystemToolArnComponents.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockSystemToolArnComponents: bedrock.BedrockSystemToolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSystemToolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSystemToolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSystemToolArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockSystemToolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockSystemToolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockSystemToolArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockSystemToolArnProps <a name="BedrockSystemToolArnProps" id="@cdk_utils/iam.bedrock.BedrockSystemToolArnProps"></a>

Properties for building a system-tool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock.BedrockSystemToolArnProps.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

const bedrockSystemToolArnProps: bedrock.BedrockSystemToolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSystemToolArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSystemToolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockSystemToolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock.BedrockSystemToolArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock.BedrockSystemToolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock.BedrockSystemToolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockActions <a name="BedrockActions" id="@cdk_utils/iam.bedrock.BedrockActions"></a>

IAM action constants for the bedrock service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock.BedrockActions.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

new bedrock.BedrockActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAccountDataRetention">actionGetAccountDataRetention</a></code> | <code>string</code> | [Read] bedrock:GetAccountDataRetention. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAdvancedPromptOptimizationJob">actionGetAdvancedPromptOptimizationJob</a></code> | <code>string</code> | [Read] bedrock:GetAdvancedPromptOptimizationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgent">actionGetAgent</a></code> | <code>string</code> | [Read] bedrock:GetAgent. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentActionGroup">actionGetAgentActionGroup</a></code> | <code>string</code> | [Read] bedrock:GetAgentActionGroup. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentAlias">actionGetAgentAlias</a></code> | <code>string</code> | [Read] bedrock:GetAgentAlias. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentCollaborator">actionGetAgentCollaborator</a></code> | <code>string</code> | [Read] bedrock:GetAgentCollaborator. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentKnowledgeBase">actionGetAgentKnowledgeBase</a></code> | <code>string</code> | [Read] bedrock:GetAgentKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentMemory">actionGetAgentMemory</a></code> | <code>string</code> | [Read] bedrock:GetAgentMemory. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentVersion">actionGetAgentVersion</a></code> | <code>string</code> | [Read] bedrock:GetAgentVersion. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAsyncInvoke">actionGetAsyncInvoke</a></code> | <code>string</code> | [Read] bedrock:GetAsyncInvoke. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicy">actionGetAutomatedReasoningPolicy</a></code> | <code>string</code> | [Read] bedrock:GetAutomatedReasoningPolicy. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyAnnotations">actionGetAutomatedReasoningPolicyAnnotations</a></code> | <code>string</code> | [Read] bedrock:GetAutomatedReasoningPolicyAnnotations. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyBuildWorkflow">actionGetAutomatedReasoningPolicyBuildWorkflow</a></code> | <code>string</code> | [Read] bedrock:GetAutomatedReasoningPolicyBuildWorkflow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyBuildWorkflowResultAssets">actionGetAutomatedReasoningPolicyBuildWorkflowResultAssets</a></code> | <code>string</code> | [Read] bedrock:GetAutomatedReasoningPolicyBuildWorkflowResultAssets. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyNextScenario">actionGetAutomatedReasoningPolicyNextScenario</a></code> | <code>string</code> | [Read] bedrock:GetAutomatedReasoningPolicyNextScenario. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyTestCase">actionGetAutomatedReasoningPolicyTestCase</a></code> | <code>string</code> | [Read] bedrock:GetAutomatedReasoningPolicyTestCase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyTestResult">actionGetAutomatedReasoningPolicyTestResult</a></code> | <code>string</code> | [Read] bedrock:GetAutomatedReasoningPolicyTestResult. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetBlueprint">actionGetBlueprint</a></code> | <code>string</code> | [Read] bedrock:GetBlueprint. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetBlueprintOptimizationStatus">actionGetBlueprintOptimizationStatus</a></code> | <code>string</code> | [Read] bedrock:GetBlueprintOptimizationStatus. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetBlueprintRecommendation">actionGetBlueprintRecommendation</a></code> | <code>string</code> | [Read] bedrock:GetBlueprintRecommendation. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetCustomModel">actionGetCustomModel</a></code> | <code>string</code> | [Read] bedrock:GetCustomModel. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetCustomModelDeployment">actionGetCustomModelDeployment</a></code> | <code>string</code> | [Read] bedrock:GetCustomModelDeployment. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataAutomationLibrary">actionGetDataAutomationLibrary</a></code> | <code>string</code> | [Read] bedrock:GetDataAutomationLibrary. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataAutomationLibraryEntity">actionGetDataAutomationLibraryEntity</a></code> | <code>string</code> | [Read] bedrock:GetDataAutomationLibraryEntity. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataAutomationLibraryIngestionJob">actionGetDataAutomationLibraryIngestionJob</a></code> | <code>string</code> | [Read] bedrock:GetDataAutomationLibraryIngestionJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataAutomationProject">actionGetDataAutomationProject</a></code> | <code>string</code> | [Read] bedrock:GetDataAutomationProject. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataAutomationStatus">actionGetDataAutomationStatus</a></code> | <code>string</code> | [Read] bedrock:GetDataAutomationStatus. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataSource">actionGetDataSource</a></code> | <code>string</code> | [Read] bedrock:GetDataSource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDocumentContent">actionGetDocumentContent</a></code> | <code>string</code> | [Read] bedrock:GetDocumentContent. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetEvaluationJob">actionGetEvaluationJob</a></code> | <code>string</code> | [Read] bedrock:GetEvaluationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetExecutionFlowSnapshot">actionGetExecutionFlowSnapshot</a></code> | <code>string</code> | [Read] bedrock:GetExecutionFlowSnapshot. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFlow">actionGetFlow</a></code> | <code>string</code> | [Read] bedrock:GetFlow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFlowAlias">actionGetFlowAlias</a></code> | <code>string</code> | [Read] bedrock:GetFlowAlias. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFlowExecution">actionGetFlowExecution</a></code> | <code>string</code> | [Read] bedrock:GetFlowExecution. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFlowVersion">actionGetFlowVersion</a></code> | <code>string</code> | [Read] bedrock:GetFlowVersion. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFoundationModel">actionGetFoundationModel</a></code> | <code>string</code> | [Read] bedrock:GetFoundationModel. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFoundationModelAvailability">actionGetFoundationModelAvailability</a></code> | <code>string</code> | [Read] bedrock:GetFoundationModelAvailability. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetGuardrail">actionGetGuardrail</a></code> | <code>string</code> | [Read] bedrock:GetGuardrail. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetImportedModel">actionGetImportedModel</a></code> | <code>string</code> | [Read] bedrock:GetImportedModel. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetInferenceProfile">actionGetInferenceProfile</a></code> | <code>string</code> | [Read] bedrock:GetInferenceProfile. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetIngestedDocumentAcl">actionGetIngestedDocumentAcl</a></code> | <code>string</code> | [Read] bedrock:GetIngestedDocumentAcl. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetIngestionJob">actionGetIngestionJob</a></code> | <code>string</code> | [Read] bedrock:GetIngestionJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetInvocationStep">actionGetInvocationStep</a></code> | <code>string</code> | [Read] bedrock:GetInvocationStep. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetInvoke">actionGetInvoke</a></code> | <code>string</code> | [Read] bedrock:GetInvoke. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetKnowledgeBase">actionGetKnowledgeBase</a></code> | <code>string</code> | [Read] bedrock:GetKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetKnowledgeBaseDocuments">actionGetKnowledgeBaseDocuments</a></code> | <code>string</code> | [Read] bedrock:GetKnowledgeBaseDocuments. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetMarketplaceModelEndpoint">actionGetMarketplaceModelEndpoint</a></code> | <code>string</code> | [Read] bedrock:GetMarketplaceModelEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelCopyJob">actionGetModelCopyJob</a></code> | <code>string</code> | [Read] bedrock:GetModelCopyJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelCustomizationJob">actionGetModelCustomizationJob</a></code> | <code>string</code> | [Read] bedrock:GetModelCustomizationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelEvaluationJob">actionGetModelEvaluationJob</a></code> | <code>string</code> | [Read] bedrock:GetModelEvaluationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelImportJob">actionGetModelImportJob</a></code> | <code>string</code> | [Read] bedrock:GetModelImportJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelInvocationJob">actionGetModelInvocationJob</a></code> | <code>string</code> | [Read] bedrock:GetModelInvocationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelInvocationLoggingConfiguration">actionGetModelInvocationLoggingConfiguration</a></code> | <code>string</code> | [Read] bedrock:GetModelInvocationLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetPrompt">actionGetPrompt</a></code> | <code>string</code> | [Read] bedrock:GetPrompt. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetPromptRouter">actionGetPromptRouter</a></code> | <code>string</code> | [Read] bedrock:GetPromptRouter. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetProvisionedModelThroughput">actionGetProvisionedModelThroughput</a></code> | <code>string</code> | [Read] bedrock:GetProvisionedModelThroughput. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] bedrock:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] bedrock:GetSession. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.actionGetUseCaseForModelAccess">actionGetUseCaseForModelAccess</a></code> | <code>string</code> | [Read] bedrock:GetUseCaseForModelAccess. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.AgenticRetrieveStream">AgenticRetrieveStream</a></code> | <code>string</code> | [Read] bedrock:AgenticRetrieveStream. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] bedrock:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ApplyGuardrail">ApplyGuardrail</a></code> | <code>string</code> | [Read] bedrock:ApplyGuardrail. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.AssociateAgentCollaborator">AssociateAgentCollaborator</a></code> | <code>string</code> | [Write] bedrock:AssociateAgentCollaborator. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.AssociateAgentKnowledgeBase">AssociateAgentKnowledgeBase</a></code> | <code>string</code> | [Write] bedrock:AssociateAgentKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.AssociateThirdPartyKnowledgeBase">AssociateThirdPartyKnowledgeBase</a></code> | <code>string</code> | [Write] bedrock:AssociateThirdPartyKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.BatchDeleteAdvancedPromptOptimizationJob">BatchDeleteAdvancedPromptOptimizationJob</a></code> | <code>string</code> | [Write] bedrock:BatchDeleteAdvancedPromptOptimizationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.BatchDeleteEvaluationJob">BatchDeleteEvaluationJob</a></code> | <code>string</code> | [Write] bedrock:BatchDeleteEvaluationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CallWithBearerToken">CallWithBearerToken</a></code> | <code>string</code> | [Read] bedrock:CallWithBearerToken. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CancelAutomatedReasoningPolicyBuildWorkflow">CancelAutomatedReasoningPolicyBuildWorkflow</a></code> | <code>string</code> | [Write] bedrock:CancelAutomatedReasoningPolicyBuildWorkflow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CancelInvoke">CancelInvoke</a></code> | <code>string</code> | [Write] bedrock:CancelInvoke. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CheckIngestedDocumentAcl">CheckIngestedDocumentAcl</a></code> | <code>string</code> | [Read] bedrock:CheckIngestedDocumentAcl. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CopyBlueprintStage">CopyBlueprintStage</a></code> | <code>string</code> | [Write] bedrock:CopyBlueprintStage. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CountTokens">CountTokens</a></code> | <code>string</code> | [Read] bedrock:CountTokens. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateAdvancedPromptOptimizationJob">CreateAdvancedPromptOptimizationJob</a></code> | <code>string</code> | [Write] bedrock:CreateAdvancedPromptOptimizationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateAgent">CreateAgent</a></code> | <code>string</code> | [Write] bedrock:CreateAgent. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateAgentActionGroup">CreateAgentActionGroup</a></code> | <code>string</code> | [Write] bedrock:CreateAgentActionGroup. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateAgentAlias">CreateAgentAlias</a></code> | <code>string</code> | [Write] bedrock:CreateAgentAlias. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateAutomatedReasoningPolicy">CreateAutomatedReasoningPolicy</a></code> | <code>string</code> | [Write] bedrock:CreateAutomatedReasoningPolicy. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateAutomatedReasoningPolicyTestCase">CreateAutomatedReasoningPolicyTestCase</a></code> | <code>string</code> | [Write] bedrock:CreateAutomatedReasoningPolicyTestCase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateAutomatedReasoningPolicyVersion">CreateAutomatedReasoningPolicyVersion</a></code> | <code>string</code> | [Write] bedrock:CreateAutomatedReasoningPolicyVersion. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateBlueprint">CreateBlueprint</a></code> | <code>string</code> | [Write] bedrock:CreateBlueprint. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateBlueprintVersion">CreateBlueprintVersion</a></code> | <code>string</code> | [Write] bedrock:CreateBlueprintVersion. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateCustomModel">CreateCustomModel</a></code> | <code>string</code> | [Write] bedrock:CreateCustomModel. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateCustomModelDeployment">CreateCustomModelDeployment</a></code> | <code>string</code> | [Write] bedrock:CreateCustomModelDeployment. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateDataAutomationLibrary">CreateDataAutomationLibrary</a></code> | <code>string</code> | [Write] bedrock:CreateDataAutomationLibrary. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateDataAutomationProject">CreateDataAutomationProject</a></code> | <code>string</code> | [Write] bedrock:CreateDataAutomationProject. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateDataSource">CreateDataSource</a></code> | <code>string</code> | [Write] bedrock:CreateDataSource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateEvaluationJob">CreateEvaluationJob</a></code> | <code>string</code> | [Write] bedrock:CreateEvaluationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateFlow">CreateFlow</a></code> | <code>string</code> | [Write] bedrock:CreateFlow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateFlowAlias">CreateFlowAlias</a></code> | <code>string</code> | [Write] bedrock:CreateFlowAlias. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateFlowVersion">CreateFlowVersion</a></code> | <code>string</code> | [Write] bedrock:CreateFlowVersion. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateFoundationModelAgreement">CreateFoundationModelAgreement</a></code> | <code>string</code> | [Write] bedrock:CreateFoundationModelAgreement. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateGuardrail">CreateGuardrail</a></code> | <code>string</code> | [Write] bedrock:CreateGuardrail. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateGuardrailVersion">CreateGuardrailVersion</a></code> | <code>string</code> | [Write] bedrock:CreateGuardrailVersion. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateInferenceProfile">CreateInferenceProfile</a></code> | <code>string</code> | [Write] bedrock:CreateInferenceProfile. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateInvocation">CreateInvocation</a></code> | <code>string</code> | [Write] bedrock:CreateInvocation. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateKnowledgeBase">CreateKnowledgeBase</a></code> | <code>string</code> | [Write] bedrock:CreateKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateMarketplaceModelEndpoint">CreateMarketplaceModelEndpoint</a></code> | <code>string</code> | [Write] bedrock:CreateMarketplaceModelEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateModelCopyJob">CreateModelCopyJob</a></code> | <code>string</code> | [Write] bedrock:CreateModelCopyJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateModelCustomizationJob">CreateModelCustomizationJob</a></code> | <code>string</code> | [Write] bedrock:CreateModelCustomizationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateModelEvaluationJob">CreateModelEvaluationJob</a></code> | <code>string</code> | [Write] bedrock:CreateModelEvaluationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateModelImportJob">CreateModelImportJob</a></code> | <code>string</code> | [Write] bedrock:CreateModelImportJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateModelInvocationJob">CreateModelInvocationJob</a></code> | <code>string</code> | [Write] bedrock:CreateModelInvocationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreatePrompt">CreatePrompt</a></code> | <code>string</code> | [Write] bedrock:CreatePrompt. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreatePromptRouter">CreatePromptRouter</a></code> | <code>string</code> | [Write] bedrock:CreatePromptRouter. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreatePromptVersion">CreatePromptVersion</a></code> | <code>string</code> | [Write] bedrock:CreatePromptVersion. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateProvisionedModelThroughput">CreateProvisionedModelThroughput</a></code> | <code>string</code> | [Write] bedrock:CreateProvisionedModelThroughput. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.CreateSession">CreateSession</a></code> | <code>string</code> | [Write] bedrock:CreateSession. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAgent">DeleteAgent</a></code> | <code>string</code> | [Write] bedrock:DeleteAgent. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAgentActionGroup">DeleteAgentActionGroup</a></code> | <code>string</code> | [Write] bedrock:DeleteAgentActionGroup. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAgentAlias">DeleteAgentAlias</a></code> | <code>string</code> | [Write] bedrock:DeleteAgentAlias. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAgentMemory">DeleteAgentMemory</a></code> | <code>string</code> | [Write] bedrock:DeleteAgentMemory. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAgentVersion">DeleteAgentVersion</a></code> | <code>string</code> | [Write] bedrock:DeleteAgentVersion. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAutomatedReasoningPolicy">DeleteAutomatedReasoningPolicy</a></code> | <code>string</code> | [Write] bedrock:DeleteAutomatedReasoningPolicy. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAutomatedReasoningPolicyBuildWorkflow">DeleteAutomatedReasoningPolicyBuildWorkflow</a></code> | <code>string</code> | [Write] bedrock:DeleteAutomatedReasoningPolicyBuildWorkflow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAutomatedReasoningPolicyTestCase">DeleteAutomatedReasoningPolicyTestCase</a></code> | <code>string</code> | [Write] bedrock:DeleteAutomatedReasoningPolicyTestCase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteBlueprint">DeleteBlueprint</a></code> | <code>string</code> | [Write] bedrock:DeleteBlueprint. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteCustomModel">DeleteCustomModel</a></code> | <code>string</code> | [Write] bedrock:DeleteCustomModel. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteCustomModelDeployment">DeleteCustomModelDeployment</a></code> | <code>string</code> | [Write] bedrock:DeleteCustomModelDeployment. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteDataAutomationLibrary">DeleteDataAutomationLibrary</a></code> | <code>string</code> | [Write] bedrock:DeleteDataAutomationLibrary. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteDataAutomationProject">DeleteDataAutomationProject</a></code> | <code>string</code> | [Write] bedrock:DeleteDataAutomationProject. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string</code> | [Write] bedrock:DeleteDataSource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteEnforcedGuardrailConfiguration">DeleteEnforcedGuardrailConfiguration</a></code> | <code>string</code> | [Write] bedrock:DeleteEnforcedGuardrailConfiguration. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteFlow">DeleteFlow</a></code> | <code>string</code> | [Write] bedrock:DeleteFlow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteFlowAlias">DeleteFlowAlias</a></code> | <code>string</code> | [Write] bedrock:DeleteFlowAlias. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteFlowVersion">DeleteFlowVersion</a></code> | <code>string</code> | [Write] bedrock:DeleteFlowVersion. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteFoundationModelAgreement">DeleteFoundationModelAgreement</a></code> | <code>string</code> | [Write] bedrock:DeleteFoundationModelAgreement. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteGuardrail">DeleteGuardrail</a></code> | <code>string</code> | [Write] bedrock:DeleteGuardrail. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteImportedModel">DeleteImportedModel</a></code> | <code>string</code> | [Write] bedrock:DeleteImportedModel. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteInferenceProfile">DeleteInferenceProfile</a></code> | <code>string</code> | [Write] bedrock:DeleteInferenceProfile. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteInvoke">DeleteInvoke</a></code> | <code>string</code> | [Write] bedrock:DeleteInvoke. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteKnowledgeBase">DeleteKnowledgeBase</a></code> | <code>string</code> | [Write] bedrock:DeleteKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteKnowledgeBaseDocuments">DeleteKnowledgeBaseDocuments</a></code> | <code>string</code> | [Write] bedrock:DeleteKnowledgeBaseDocuments. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteMarketplaceModelAgreement">DeleteMarketplaceModelAgreement</a></code> | <code>string</code> | [Write] bedrock:DeleteMarketplaceModelAgreement. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteMarketplaceModelEndpoint">DeleteMarketplaceModelEndpoint</a></code> | <code>string</code> | [Write] bedrock:DeleteMarketplaceModelEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteModelInvocationLoggingConfiguration">DeleteModelInvocationLoggingConfiguration</a></code> | <code>string</code> | [Write] bedrock:DeleteModelInvocationLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeletePrompt">DeletePrompt</a></code> | <code>string</code> | [Write] bedrock:DeletePrompt. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeletePromptRouter">DeletePromptRouter</a></code> | <code>string</code> | [Write] bedrock:DeletePromptRouter. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteProvisionedModelThroughput">DeleteProvisionedModelThroughput</a></code> | <code>string</code> | [Write] bedrock:DeleteProvisionedModelThroughput. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] bedrock:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeleteSession">DeleteSession</a></code> | <code>string</code> | [Write] bedrock:DeleteSession. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DeregisterMarketplaceModelEndpoint">DeregisterMarketplaceModelEndpoint</a></code> | <code>string</code> | [Write] bedrock:DeregisterMarketplaceModelEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DetectGeneratedContent">DetectGeneratedContent</a></code> | <code>string</code> | [Read] bedrock:DetectGeneratedContent. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DisassociateAgentCollaborator">DisassociateAgentCollaborator</a></code> | <code>string</code> | [Write] bedrock:DisassociateAgentCollaborator. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.DisassociateAgentKnowledgeBase">DisassociateAgentKnowledgeBase</a></code> | <code>string</code> | [Write] bedrock:DisassociateAgentKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.EndSession">EndSession</a></code> | <code>string</code> | [Write] bedrock:EndSession. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ExportAutomatedReasoningPolicyVersion">ExportAutomatedReasoningPolicyVersion</a></code> | <code>string</code> | [Read] bedrock:ExportAutomatedReasoningPolicyVersion. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.GenerateQuery">GenerateQuery</a></code> | <code>string</code> | [Read] bedrock:GenerateQuery. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.IngestKnowledgeBaseDocuments">IngestKnowledgeBaseDocuments</a></code> | <code>string</code> | [Write] bedrock:IngestKnowledgeBaseDocuments. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeAgent">InvokeAgent</a></code> | <code>string</code> | [Read] bedrock:InvokeAgent. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeAutomatedReasoningPolicy">InvokeAutomatedReasoningPolicy</a></code> | <code>string</code> | [Read] bedrock:InvokeAutomatedReasoningPolicy. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeBlueprintOptimizationAsync">InvokeBlueprintOptimizationAsync</a></code> | <code>string</code> | [Write] bedrock:InvokeBlueprintOptimizationAsync. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeBlueprintRecommendationAsync">InvokeBlueprintRecommendationAsync</a></code> | <code>string</code> | [Write] bedrock:InvokeBlueprintRecommendationAsync. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeBuilder">InvokeBuilder</a></code> | <code>string</code> | [Write] bedrock:InvokeBuilder. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeDataAutomation">InvokeDataAutomation</a></code> | <code>string</code> | [Write] bedrock:InvokeDataAutomation. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeDataAutomationAsync">InvokeDataAutomationAsync</a></code> | <code>string</code> | [Write] bedrock:InvokeDataAutomationAsync. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeDataAutomationLibraryIngestionJob">InvokeDataAutomationLibraryIngestionJob</a></code> | <code>string</code> | [Write] bedrock:InvokeDataAutomationLibraryIngestionJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeFlow">InvokeFlow</a></code> | <code>string</code> | [Read] bedrock:InvokeFlow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeGuardrailChecks">InvokeGuardrailChecks</a></code> | <code>string</code> | [Read] bedrock:InvokeGuardrailChecks. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeInlineAgent">InvokeInlineAgent</a></code> | <code>string</code> | [Read] bedrock:InvokeInlineAgent. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeModel">InvokeModel</a></code> | <code>string</code> | [Read] bedrock:InvokeModel. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeModelWithResponseStream">InvokeModelWithResponseStream</a></code> | <code>string</code> | [Read] bedrock:InvokeModelWithResponseStream. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.InvokeTool">InvokeTool</a></code> | <code>string</code> | [Read] bedrock:InvokeTool. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAdvancedPromptOptimizationJobs">ListAdvancedPromptOptimizationJobs</a></code> | <code>string</code> | [List] bedrock:ListAdvancedPromptOptimizationJobs. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAgentActionGroups">ListAgentActionGroups</a></code> | <code>string</code> | [List] bedrock:ListAgentActionGroups. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAgentAliases">ListAgentAliases</a></code> | <code>string</code> | [List] bedrock:ListAgentAliases. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAgentCollaborators">ListAgentCollaborators</a></code> | <code>string</code> | [List] bedrock:ListAgentCollaborators. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAgentKnowledgeBases">ListAgentKnowledgeBases</a></code> | <code>string</code> | [List] bedrock:ListAgentKnowledgeBases. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAgents">ListAgents</a></code> | <code>string</code> | [List] bedrock:ListAgents. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAgentVersions">ListAgentVersions</a></code> | <code>string</code> | [List] bedrock:ListAgentVersions. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAsyncInvokes">ListAsyncInvokes</a></code> | <code>string</code> | [List] bedrock:ListAsyncInvokes. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAutomatedReasoningPolicies">ListAutomatedReasoningPolicies</a></code> | <code>string</code> | [List] bedrock:ListAutomatedReasoningPolicies. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAutomatedReasoningPolicyBuildWorkflows">ListAutomatedReasoningPolicyBuildWorkflows</a></code> | <code>string</code> | [List] bedrock:ListAutomatedReasoningPolicyBuildWorkflows. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAutomatedReasoningPolicyTestCases">ListAutomatedReasoningPolicyTestCases</a></code> | <code>string</code> | [List] bedrock:ListAutomatedReasoningPolicyTestCases. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListAutomatedReasoningPolicyTestResults">ListAutomatedReasoningPolicyTestResults</a></code> | <code>string</code> | [List] bedrock:ListAutomatedReasoningPolicyTestResults. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListBlueprints">ListBlueprints</a></code> | <code>string</code> | [List] bedrock:ListBlueprints. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListCustomModelDeployments">ListCustomModelDeployments</a></code> | <code>string</code> | [List] bedrock:ListCustomModelDeployments. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListCustomModels">ListCustomModels</a></code> | <code>string</code> | [List] bedrock:ListCustomModels. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListDataAutomationLibraries">ListDataAutomationLibraries</a></code> | <code>string</code> | [List] bedrock:ListDataAutomationLibraries. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListDataAutomationLibraryEntities">ListDataAutomationLibraryEntities</a></code> | <code>string</code> | [List] bedrock:ListDataAutomationLibraryEntities. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListDataAutomationLibraryIngestionJobs">ListDataAutomationLibraryIngestionJobs</a></code> | <code>string</code> | [List] bedrock:ListDataAutomationLibraryIngestionJobs. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListDataAutomationProjects">ListDataAutomationProjects</a></code> | <code>string</code> | [List] bedrock:ListDataAutomationProjects. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListDataSources">ListDataSources</a></code> | <code>string</code> | [List] bedrock:ListDataSources. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListEnforcedGuardrailsConfiguration">ListEnforcedGuardrailsConfiguration</a></code> | <code>string</code> | [List] bedrock:ListEnforcedGuardrailsConfiguration. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListEvaluationJobs">ListEvaluationJobs</a></code> | <code>string</code> | [List] bedrock:ListEvaluationJobs. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListFlowAliases">ListFlowAliases</a></code> | <code>string</code> | [List] bedrock:ListFlowAliases. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListFlowExecutionEvents">ListFlowExecutionEvents</a></code> | <code>string</code> | [List] bedrock:ListFlowExecutionEvents. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListFlowExecutions">ListFlowExecutions</a></code> | <code>string</code> | [List] bedrock:ListFlowExecutions. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListFlows">ListFlows</a></code> | <code>string</code> | [List] bedrock:ListFlows. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListFlowVersions">ListFlowVersions</a></code> | <code>string</code> | [List] bedrock:ListFlowVersions. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListFoundationModelAgreementOffers">ListFoundationModelAgreementOffers</a></code> | <code>string</code> | [List] bedrock:ListFoundationModelAgreementOffers. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListFoundationModels">ListFoundationModels</a></code> | <code>string</code> | [List] bedrock:ListFoundationModels. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListGuardrails">ListGuardrails</a></code> | <code>string</code> | [List] bedrock:ListGuardrails. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListImportedModels">ListImportedModels</a></code> | <code>string</code> | [List] bedrock:ListImportedModels. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListInferenceProfiles">ListInferenceProfiles</a></code> | <code>string</code> | [List] bedrock:ListInferenceProfiles. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListIngestionJobs">ListIngestionJobs</a></code> | <code>string</code> | [List] bedrock:ListIngestionJobs. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListInvocations">ListInvocations</a></code> | <code>string</code> | [List] bedrock:ListInvocations. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListInvocationSteps">ListInvocationSteps</a></code> | <code>string</code> | [List] bedrock:ListInvocationSteps. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListKnowledgeBaseDocuments">ListKnowledgeBaseDocuments</a></code> | <code>string</code> | [List] bedrock:ListKnowledgeBaseDocuments. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListKnowledgeBases">ListKnowledgeBases</a></code> | <code>string</code> | [List] bedrock:ListKnowledgeBases. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListMarketplaceModelEndpoints">ListMarketplaceModelEndpoints</a></code> | <code>string</code> | [Read] bedrock:ListMarketplaceModelEndpoints. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListModelCopyJobs">ListModelCopyJobs</a></code> | <code>string</code> | [List] bedrock:ListModelCopyJobs. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListModelCustomizationJobs">ListModelCustomizationJobs</a></code> | <code>string</code> | [List] bedrock:ListModelCustomizationJobs. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListModelEvaluationJobs">ListModelEvaluationJobs</a></code> | <code>string</code> | [List] bedrock:ListModelEvaluationJobs. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListModelImportJobs">ListModelImportJobs</a></code> | <code>string</code> | [List] bedrock:ListModelImportJobs. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListModelInvocationJobs">ListModelInvocationJobs</a></code> | <code>string</code> | [List] bedrock:ListModelInvocationJobs. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListPromptRouters">ListPromptRouters</a></code> | <code>string</code> | [List] bedrock:ListPromptRouters. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListPrompts">ListPrompts</a></code> | <code>string</code> | [List] bedrock:ListPrompts. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListProvisionedModelThroughputs">ListProvisionedModelThroughputs</a></code> | <code>string</code> | [List] bedrock:ListProvisionedModelThroughputs. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [List] bedrock:ListSessions. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] bedrock:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.OptimizePrompt">OptimizePrompt</a></code> | <code>string</code> | [Read] bedrock:OptimizePrompt. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.PrepareAgent">PrepareAgent</a></code> | <code>string</code> | [Write] bedrock:PrepareAgent. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.PrepareFlow">PrepareFlow</a></code> | <code>string</code> | [Write] bedrock:PrepareFlow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.PutAccountDataRetention">PutAccountDataRetention</a></code> | <code>string</code> | [Write] bedrock:PutAccountDataRetention. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.PutEnforcedGuardrailConfiguration">PutEnforcedGuardrailConfiguration</a></code> | <code>string</code> | [Write] bedrock:PutEnforcedGuardrailConfiguration. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.PutFoundationModelEntitlement">PutFoundationModelEntitlement</a></code> | <code>string</code> | [Write] bedrock:PutFoundationModelEntitlement. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.PutInvocationStep">PutInvocationStep</a></code> | <code>string</code> | [Write] bedrock:PutInvocationStep. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.PutModelInvocationLoggingConfiguration">PutModelInvocationLoggingConfiguration</a></code> | <code>string</code> | [Write] bedrock:PutModelInvocationLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] bedrock:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.PutUseCaseForModelAccess">PutUseCaseForModelAccess</a></code> | <code>string</code> | [Write] bedrock:PutUseCaseForModelAccess. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.RegisterMarketplaceModelEndpoint">RegisterMarketplaceModelEndpoint</a></code> | <code>string</code> | [Write] bedrock:RegisterMarketplaceModelEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.RenderPrompt">RenderPrompt</a></code> | <code>string</code> | [Read] bedrock:RenderPrompt. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.Rerank">Rerank</a></code> | <code>string</code> | [Write] bedrock:Rerank. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.Retrieve">Retrieve</a></code> | <code>string</code> | [Read] bedrock:Retrieve. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.RetrieveAndGenerate">RetrieveAndGenerate</a></code> | <code>string</code> | [Write] bedrock:RetrieveAndGenerate. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.StartAutomatedReasoningPolicyBuildWorkflow">StartAutomatedReasoningPolicyBuildWorkflow</a></code> | <code>string</code> | [Write] bedrock:StartAutomatedReasoningPolicyBuildWorkflow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.StartAutomatedReasoningPolicyTestWorkflow">StartAutomatedReasoningPolicyTestWorkflow</a></code> | <code>string</code> | [Write] bedrock:StartAutomatedReasoningPolicyTestWorkflow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.StartFlowExecution">StartFlowExecution</a></code> | <code>string</code> | [Write] bedrock:StartFlowExecution. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.StartIngestionJob">StartIngestionJob</a></code> | <code>string</code> | [Write] bedrock:StartIngestionJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.StopAdvancedPromptOptimizationJob">StopAdvancedPromptOptimizationJob</a></code> | <code>string</code> | [Write] bedrock:StopAdvancedPromptOptimizationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.StopEvaluationJob">StopEvaluationJob</a></code> | <code>string</code> | [Write] bedrock:StopEvaluationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.StopFlowExecution">StopFlowExecution</a></code> | <code>string</code> | [Write] bedrock:StopFlowExecution. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.StopIngestionJob">StopIngestionJob</a></code> | <code>string</code> | [Write] bedrock:StopIngestionJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.StopModelCustomizationJob">StopModelCustomizationJob</a></code> | <code>string</code> | [Write] bedrock:StopModelCustomizationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.StopModelInvocationJob">StopModelInvocationJob</a></code> | <code>string</code> | [Write] bedrock:StopModelInvocationJob. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] bedrock:TagResource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] bedrock:UntagResource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAgent">UpdateAgent</a></code> | <code>string</code> | [Write] bedrock:UpdateAgent. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAgentActionGroup">UpdateAgentActionGroup</a></code> | <code>string</code> | [Write] bedrock:UpdateAgentActionGroup. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAgentAlias">UpdateAgentAlias</a></code> | <code>string</code> | [Write] bedrock:UpdateAgentAlias. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAgentCollaborator">UpdateAgentCollaborator</a></code> | <code>string</code> | [Write] bedrock:UpdateAgentCollaborator. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAgentKnowledgeBase">UpdateAgentKnowledgeBase</a></code> | <code>string</code> | [Write] bedrock:UpdateAgentKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAutomatedReasoningPolicy">UpdateAutomatedReasoningPolicy</a></code> | <code>string</code> | [Write] bedrock:UpdateAutomatedReasoningPolicy. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAutomatedReasoningPolicyAnnotations">UpdateAutomatedReasoningPolicyAnnotations</a></code> | <code>string</code> | [Write] bedrock:UpdateAutomatedReasoningPolicyAnnotations. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAutomatedReasoningPolicyTestCase">UpdateAutomatedReasoningPolicyTestCase</a></code> | <code>string</code> | [Write] bedrock:UpdateAutomatedReasoningPolicyTestCase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateBlueprint">UpdateBlueprint</a></code> | <code>string</code> | [Write] bedrock:UpdateBlueprint. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateCustomModelDeployment">UpdateCustomModelDeployment</a></code> | <code>string</code> | [Write] bedrock:UpdateCustomModelDeployment. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateDataAutomationLibrary">UpdateDataAutomationLibrary</a></code> | <code>string</code> | [Write] bedrock:UpdateDataAutomationLibrary. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateDataAutomationProject">UpdateDataAutomationProject</a></code> | <code>string</code> | [Write] bedrock:UpdateDataAutomationProject. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string</code> | [Write] bedrock:UpdateDataSource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateFlow">UpdateFlow</a></code> | <code>string</code> | [Write] bedrock:UpdateFlow. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateFlowAlias">UpdateFlowAlias</a></code> | <code>string</code> | [Write] bedrock:UpdateFlowAlias. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateGuardrail">UpdateGuardrail</a></code> | <code>string</code> | [Write] bedrock:UpdateGuardrail. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateKnowledgeBase">UpdateKnowledgeBase</a></code> | <code>string</code> | [Write] bedrock:UpdateKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateMarketplaceModelEndpoint">UpdateMarketplaceModelEndpoint</a></code> | <code>string</code> | [Write] bedrock:UpdateMarketplaceModelEndpoint. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdatePrompt">UpdatePrompt</a></code> | <code>string</code> | [Write] bedrock:UpdatePrompt. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateProvisionedModelThroughput">UpdateProvisionedModelThroughput</a></code> | <code>string</code> | [Write] bedrock:UpdateProvisionedModelThroughput. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.UpdateSession">UpdateSession</a></code> | <code>string</code> | [Write] bedrock:UpdateSession. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockActions.property.ValidateFlowDefinition">ValidateFlowDefinition</a></code> | <code>string</code> | [Read] bedrock:ValidateFlowDefinition. |

---

##### `actionGetAccountDataRetention`<sup>Required</sup> <a name="actionGetAccountDataRetention" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAccountDataRetention"></a>

```typescript
public readonly actionGetAccountDataRetention: string;
```

- *Type:* string

[Read] bedrock:GetAccountDataRetention.

---

##### `actionGetAdvancedPromptOptimizationJob`<sup>Required</sup> <a name="actionGetAdvancedPromptOptimizationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAdvancedPromptOptimizationJob"></a>

```typescript
public readonly actionGetAdvancedPromptOptimizationJob: string;
```

- *Type:* string

[Read] bedrock:GetAdvancedPromptOptimizationJob.

---

##### `actionGetAgent`<sup>Required</sup> <a name="actionGetAgent" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgent"></a>

```typescript
public readonly actionGetAgent: string;
```

- *Type:* string

[Read] bedrock:GetAgent.

---

##### `actionGetAgentActionGroup`<sup>Required</sup> <a name="actionGetAgentActionGroup" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentActionGroup"></a>

```typescript
public readonly actionGetAgentActionGroup: string;
```

- *Type:* string

[Read] bedrock:GetAgentActionGroup.

---

##### `actionGetAgentAlias`<sup>Required</sup> <a name="actionGetAgentAlias" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentAlias"></a>

```typescript
public readonly actionGetAgentAlias: string;
```

- *Type:* string

[Read] bedrock:GetAgentAlias.

---

##### `actionGetAgentCollaborator`<sup>Required</sup> <a name="actionGetAgentCollaborator" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentCollaborator"></a>

```typescript
public readonly actionGetAgentCollaborator: string;
```

- *Type:* string

[Read] bedrock:GetAgentCollaborator.

---

##### `actionGetAgentKnowledgeBase`<sup>Required</sup> <a name="actionGetAgentKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentKnowledgeBase"></a>

```typescript
public readonly actionGetAgentKnowledgeBase: string;
```

- *Type:* string

[Read] bedrock:GetAgentKnowledgeBase.

---

##### `actionGetAgentMemory`<sup>Required</sup> <a name="actionGetAgentMemory" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentMemory"></a>

```typescript
public readonly actionGetAgentMemory: string;
```

- *Type:* string

[Read] bedrock:GetAgentMemory.

---

##### `actionGetAgentVersion`<sup>Required</sup> <a name="actionGetAgentVersion" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAgentVersion"></a>

```typescript
public readonly actionGetAgentVersion: string;
```

- *Type:* string

[Read] bedrock:GetAgentVersion.

---

##### `actionGetAsyncInvoke`<sup>Required</sup> <a name="actionGetAsyncInvoke" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAsyncInvoke"></a>

```typescript
public readonly actionGetAsyncInvoke: string;
```

- *Type:* string

[Read] bedrock:GetAsyncInvoke.

---

##### `actionGetAutomatedReasoningPolicy`<sup>Required</sup> <a name="actionGetAutomatedReasoningPolicy" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicy"></a>

```typescript
public readonly actionGetAutomatedReasoningPolicy: string;
```

- *Type:* string

[Read] bedrock:GetAutomatedReasoningPolicy.

---

##### `actionGetAutomatedReasoningPolicyAnnotations`<sup>Required</sup> <a name="actionGetAutomatedReasoningPolicyAnnotations" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyAnnotations"></a>

```typescript
public readonly actionGetAutomatedReasoningPolicyAnnotations: string;
```

- *Type:* string

[Read] bedrock:GetAutomatedReasoningPolicyAnnotations.

---

##### `actionGetAutomatedReasoningPolicyBuildWorkflow`<sup>Required</sup> <a name="actionGetAutomatedReasoningPolicyBuildWorkflow" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyBuildWorkflow"></a>

```typescript
public readonly actionGetAutomatedReasoningPolicyBuildWorkflow: string;
```

- *Type:* string

[Read] bedrock:GetAutomatedReasoningPolicyBuildWorkflow.

---

##### `actionGetAutomatedReasoningPolicyBuildWorkflowResultAssets`<sup>Required</sup> <a name="actionGetAutomatedReasoningPolicyBuildWorkflowResultAssets" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyBuildWorkflowResultAssets"></a>

```typescript
public readonly actionGetAutomatedReasoningPolicyBuildWorkflowResultAssets: string;
```

- *Type:* string

[Read] bedrock:GetAutomatedReasoningPolicyBuildWorkflowResultAssets.

---

##### `actionGetAutomatedReasoningPolicyNextScenario`<sup>Required</sup> <a name="actionGetAutomatedReasoningPolicyNextScenario" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyNextScenario"></a>

```typescript
public readonly actionGetAutomatedReasoningPolicyNextScenario: string;
```

- *Type:* string

[Read] bedrock:GetAutomatedReasoningPolicyNextScenario.

---

##### `actionGetAutomatedReasoningPolicyTestCase`<sup>Required</sup> <a name="actionGetAutomatedReasoningPolicyTestCase" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyTestCase"></a>

```typescript
public readonly actionGetAutomatedReasoningPolicyTestCase: string;
```

- *Type:* string

[Read] bedrock:GetAutomatedReasoningPolicyTestCase.

---

##### `actionGetAutomatedReasoningPolicyTestResult`<sup>Required</sup> <a name="actionGetAutomatedReasoningPolicyTestResult" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetAutomatedReasoningPolicyTestResult"></a>

```typescript
public readonly actionGetAutomatedReasoningPolicyTestResult: string;
```

- *Type:* string

[Read] bedrock:GetAutomatedReasoningPolicyTestResult.

---

##### `actionGetBlueprint`<sup>Required</sup> <a name="actionGetBlueprint" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetBlueprint"></a>

```typescript
public readonly actionGetBlueprint: string;
```

- *Type:* string

[Read] bedrock:GetBlueprint.

---

##### `actionGetBlueprintOptimizationStatus`<sup>Required</sup> <a name="actionGetBlueprintOptimizationStatus" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetBlueprintOptimizationStatus"></a>

```typescript
public readonly actionGetBlueprintOptimizationStatus: string;
```

- *Type:* string

[Read] bedrock:GetBlueprintOptimizationStatus.

---

##### `actionGetBlueprintRecommendation`<sup>Required</sup> <a name="actionGetBlueprintRecommendation" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetBlueprintRecommendation"></a>

```typescript
public readonly actionGetBlueprintRecommendation: string;
```

- *Type:* string

[Read] bedrock:GetBlueprintRecommendation.

---

##### `actionGetCustomModel`<sup>Required</sup> <a name="actionGetCustomModel" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetCustomModel"></a>

```typescript
public readonly actionGetCustomModel: string;
```

- *Type:* string

[Read] bedrock:GetCustomModel.

---

##### `actionGetCustomModelDeployment`<sup>Required</sup> <a name="actionGetCustomModelDeployment" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetCustomModelDeployment"></a>

```typescript
public readonly actionGetCustomModelDeployment: string;
```

- *Type:* string

[Read] bedrock:GetCustomModelDeployment.

---

##### `actionGetDataAutomationLibrary`<sup>Required</sup> <a name="actionGetDataAutomationLibrary" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataAutomationLibrary"></a>

```typescript
public readonly actionGetDataAutomationLibrary: string;
```

- *Type:* string

[Read] bedrock:GetDataAutomationLibrary.

---

##### `actionGetDataAutomationLibraryEntity`<sup>Required</sup> <a name="actionGetDataAutomationLibraryEntity" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataAutomationLibraryEntity"></a>

```typescript
public readonly actionGetDataAutomationLibraryEntity: string;
```

- *Type:* string

[Read] bedrock:GetDataAutomationLibraryEntity.

---

##### `actionGetDataAutomationLibraryIngestionJob`<sup>Required</sup> <a name="actionGetDataAutomationLibraryIngestionJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataAutomationLibraryIngestionJob"></a>

```typescript
public readonly actionGetDataAutomationLibraryIngestionJob: string;
```

- *Type:* string

[Read] bedrock:GetDataAutomationLibraryIngestionJob.

---

##### `actionGetDataAutomationProject`<sup>Required</sup> <a name="actionGetDataAutomationProject" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataAutomationProject"></a>

```typescript
public readonly actionGetDataAutomationProject: string;
```

- *Type:* string

[Read] bedrock:GetDataAutomationProject.

---

##### `actionGetDataAutomationStatus`<sup>Required</sup> <a name="actionGetDataAutomationStatus" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataAutomationStatus"></a>

```typescript
public readonly actionGetDataAutomationStatus: string;
```

- *Type:* string

[Read] bedrock:GetDataAutomationStatus.

---

##### `actionGetDataSource`<sup>Required</sup> <a name="actionGetDataSource" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDataSource"></a>

```typescript
public readonly actionGetDataSource: string;
```

- *Type:* string

[Read] bedrock:GetDataSource.

---

##### `actionGetDocumentContent`<sup>Required</sup> <a name="actionGetDocumentContent" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetDocumentContent"></a>

```typescript
public readonly actionGetDocumentContent: string;
```

- *Type:* string

[Read] bedrock:GetDocumentContent.

---

##### `actionGetEvaluationJob`<sup>Required</sup> <a name="actionGetEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetEvaluationJob"></a>

```typescript
public readonly actionGetEvaluationJob: string;
```

- *Type:* string

[Read] bedrock:GetEvaluationJob.

---

##### `actionGetExecutionFlowSnapshot`<sup>Required</sup> <a name="actionGetExecutionFlowSnapshot" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetExecutionFlowSnapshot"></a>

```typescript
public readonly actionGetExecutionFlowSnapshot: string;
```

- *Type:* string

[Read] bedrock:GetExecutionFlowSnapshot.

---

##### `actionGetFlow`<sup>Required</sup> <a name="actionGetFlow" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFlow"></a>

```typescript
public readonly actionGetFlow: string;
```

- *Type:* string

[Read] bedrock:GetFlow.

---

##### `actionGetFlowAlias`<sup>Required</sup> <a name="actionGetFlowAlias" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFlowAlias"></a>

```typescript
public readonly actionGetFlowAlias: string;
```

- *Type:* string

[Read] bedrock:GetFlowAlias.

---

##### `actionGetFlowExecution`<sup>Required</sup> <a name="actionGetFlowExecution" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFlowExecution"></a>

```typescript
public readonly actionGetFlowExecution: string;
```

- *Type:* string

[Read] bedrock:GetFlowExecution.

---

##### `actionGetFlowVersion`<sup>Required</sup> <a name="actionGetFlowVersion" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFlowVersion"></a>

```typescript
public readonly actionGetFlowVersion: string;
```

- *Type:* string

[Read] bedrock:GetFlowVersion.

---

##### `actionGetFoundationModel`<sup>Required</sup> <a name="actionGetFoundationModel" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFoundationModel"></a>

```typescript
public readonly actionGetFoundationModel: string;
```

- *Type:* string

[Read] bedrock:GetFoundationModel.

---

##### `actionGetFoundationModelAvailability`<sup>Required</sup> <a name="actionGetFoundationModelAvailability" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetFoundationModelAvailability"></a>

```typescript
public readonly actionGetFoundationModelAvailability: string;
```

- *Type:* string

[Read] bedrock:GetFoundationModelAvailability.

---

##### `actionGetGuardrail`<sup>Required</sup> <a name="actionGetGuardrail" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetGuardrail"></a>

```typescript
public readonly actionGetGuardrail: string;
```

- *Type:* string

[Read] bedrock:GetGuardrail.

---

##### `actionGetImportedModel`<sup>Required</sup> <a name="actionGetImportedModel" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetImportedModel"></a>

```typescript
public readonly actionGetImportedModel: string;
```

- *Type:* string

[Read] bedrock:GetImportedModel.

---

##### `actionGetInferenceProfile`<sup>Required</sup> <a name="actionGetInferenceProfile" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetInferenceProfile"></a>

```typescript
public readonly actionGetInferenceProfile: string;
```

- *Type:* string

[Read] bedrock:GetInferenceProfile.

---

##### `actionGetIngestedDocumentAcl`<sup>Required</sup> <a name="actionGetIngestedDocumentAcl" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetIngestedDocumentAcl"></a>

```typescript
public readonly actionGetIngestedDocumentAcl: string;
```

- *Type:* string

[Read] bedrock:GetIngestedDocumentAcl.

---

##### `actionGetIngestionJob`<sup>Required</sup> <a name="actionGetIngestionJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetIngestionJob"></a>

```typescript
public readonly actionGetIngestionJob: string;
```

- *Type:* string

[Read] bedrock:GetIngestionJob.

---

##### `actionGetInvocationStep`<sup>Required</sup> <a name="actionGetInvocationStep" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetInvocationStep"></a>

```typescript
public readonly actionGetInvocationStep: string;
```

- *Type:* string

[Read] bedrock:GetInvocationStep.

---

##### `actionGetInvoke`<sup>Required</sup> <a name="actionGetInvoke" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetInvoke"></a>

```typescript
public readonly actionGetInvoke: string;
```

- *Type:* string

[Read] bedrock:GetInvoke.

---

##### `actionGetKnowledgeBase`<sup>Required</sup> <a name="actionGetKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetKnowledgeBase"></a>

```typescript
public readonly actionGetKnowledgeBase: string;
```

- *Type:* string

[Read] bedrock:GetKnowledgeBase.

---

##### `actionGetKnowledgeBaseDocuments`<sup>Required</sup> <a name="actionGetKnowledgeBaseDocuments" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetKnowledgeBaseDocuments"></a>

```typescript
public readonly actionGetKnowledgeBaseDocuments: string;
```

- *Type:* string

[Read] bedrock:GetKnowledgeBaseDocuments.

---

##### `actionGetMarketplaceModelEndpoint`<sup>Required</sup> <a name="actionGetMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetMarketplaceModelEndpoint"></a>

```typescript
public readonly actionGetMarketplaceModelEndpoint: string;
```

- *Type:* string

[Read] bedrock:GetMarketplaceModelEndpoint.

---

##### `actionGetModelCopyJob`<sup>Required</sup> <a name="actionGetModelCopyJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelCopyJob"></a>

```typescript
public readonly actionGetModelCopyJob: string;
```

- *Type:* string

[Read] bedrock:GetModelCopyJob.

---

##### `actionGetModelCustomizationJob`<sup>Required</sup> <a name="actionGetModelCustomizationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelCustomizationJob"></a>

```typescript
public readonly actionGetModelCustomizationJob: string;
```

- *Type:* string

[Read] bedrock:GetModelCustomizationJob.

---

##### `actionGetModelEvaluationJob`<sup>Required</sup> <a name="actionGetModelEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelEvaluationJob"></a>

```typescript
public readonly actionGetModelEvaluationJob: string;
```

- *Type:* string

[Read] bedrock:GetModelEvaluationJob.

---

##### `actionGetModelImportJob`<sup>Required</sup> <a name="actionGetModelImportJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelImportJob"></a>

```typescript
public readonly actionGetModelImportJob: string;
```

- *Type:* string

[Read] bedrock:GetModelImportJob.

---

##### `actionGetModelInvocationJob`<sup>Required</sup> <a name="actionGetModelInvocationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelInvocationJob"></a>

```typescript
public readonly actionGetModelInvocationJob: string;
```

- *Type:* string

[Read] bedrock:GetModelInvocationJob.

---

##### `actionGetModelInvocationLoggingConfiguration`<sup>Required</sup> <a name="actionGetModelInvocationLoggingConfiguration" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetModelInvocationLoggingConfiguration"></a>

```typescript
public readonly actionGetModelInvocationLoggingConfiguration: string;
```

- *Type:* string

[Read] bedrock:GetModelInvocationLoggingConfiguration.

---

##### `actionGetPrompt`<sup>Required</sup> <a name="actionGetPrompt" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetPrompt"></a>

```typescript
public readonly actionGetPrompt: string;
```

- *Type:* string

[Read] bedrock:GetPrompt.

---

##### `actionGetPromptRouter`<sup>Required</sup> <a name="actionGetPromptRouter" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetPromptRouter"></a>

```typescript
public readonly actionGetPromptRouter: string;
```

- *Type:* string

[Read] bedrock:GetPromptRouter.

---

##### `actionGetProvisionedModelThroughput`<sup>Required</sup> <a name="actionGetProvisionedModelThroughput" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetProvisionedModelThroughput"></a>

```typescript
public readonly actionGetProvisionedModelThroughput: string;
```

- *Type:* string

[Read] bedrock:GetProvisionedModelThroughput.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] bedrock:GetResourcePolicy.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] bedrock:GetSession.

---

##### `actionGetUseCaseForModelAccess`<sup>Required</sup> <a name="actionGetUseCaseForModelAccess" id="@cdk_utils/iam.bedrock.BedrockActions.property.actionGetUseCaseForModelAccess"></a>

```typescript
public readonly actionGetUseCaseForModelAccess: string;
```

- *Type:* string

[Read] bedrock:GetUseCaseForModelAccess.

---

##### `AgenticRetrieveStream`<sup>Required</sup> <a name="AgenticRetrieveStream" id="@cdk_utils/iam.bedrock.BedrockActions.property.AgenticRetrieveStream"></a>

```typescript
public readonly AgenticRetrieveStream: string;
```

- *Type:* string

[Read] bedrock:AgenticRetrieveStream.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.bedrock.BedrockActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.bedrock.BedrockActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] bedrock:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.bedrock.BedrockActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.bedrock.BedrockActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.bedrock.BedrockActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.bedrock.BedrockActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApplyGuardrail`<sup>Required</sup> <a name="ApplyGuardrail" id="@cdk_utils/iam.bedrock.BedrockActions.property.ApplyGuardrail"></a>

```typescript
public readonly ApplyGuardrail: string;
```

- *Type:* string

[Read] bedrock:ApplyGuardrail.

---

##### `AssociateAgentCollaborator`<sup>Required</sup> <a name="AssociateAgentCollaborator" id="@cdk_utils/iam.bedrock.BedrockActions.property.AssociateAgentCollaborator"></a>

```typescript
public readonly AssociateAgentCollaborator: string;
```

- *Type:* string

[Write] bedrock:AssociateAgentCollaborator.

---

##### `AssociateAgentKnowledgeBase`<sup>Required</sup> <a name="AssociateAgentKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockActions.property.AssociateAgentKnowledgeBase"></a>

```typescript
public readonly AssociateAgentKnowledgeBase: string;
```

- *Type:* string

[Write] bedrock:AssociateAgentKnowledgeBase.

---

##### `AssociateThirdPartyKnowledgeBase`<sup>Required</sup> <a name="AssociateThirdPartyKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockActions.property.AssociateThirdPartyKnowledgeBase"></a>

```typescript
public readonly AssociateThirdPartyKnowledgeBase: string;
```

- *Type:* string

[Write] bedrock:AssociateThirdPartyKnowledgeBase.

---

##### `BatchDeleteAdvancedPromptOptimizationJob`<sup>Required</sup> <a name="BatchDeleteAdvancedPromptOptimizationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.BatchDeleteAdvancedPromptOptimizationJob"></a>

```typescript
public readonly BatchDeleteAdvancedPromptOptimizationJob: string;
```

- *Type:* string

[Write] bedrock:BatchDeleteAdvancedPromptOptimizationJob.

---

##### `BatchDeleteEvaluationJob`<sup>Required</sup> <a name="BatchDeleteEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.BatchDeleteEvaluationJob"></a>

```typescript
public readonly BatchDeleteEvaluationJob: string;
```

- *Type:* string

[Write] bedrock:BatchDeleteEvaluationJob.

---

##### `CallWithBearerToken`<sup>Required</sup> <a name="CallWithBearerToken" id="@cdk_utils/iam.bedrock.BedrockActions.property.CallWithBearerToken"></a>

```typescript
public readonly CallWithBearerToken: string;
```

- *Type:* string

[Read] bedrock:CallWithBearerToken.

---

##### `CancelAutomatedReasoningPolicyBuildWorkflow`<sup>Required</sup> <a name="CancelAutomatedReasoningPolicyBuildWorkflow" id="@cdk_utils/iam.bedrock.BedrockActions.property.CancelAutomatedReasoningPolicyBuildWorkflow"></a>

```typescript
public readonly CancelAutomatedReasoningPolicyBuildWorkflow: string;
```

- *Type:* string

[Write] bedrock:CancelAutomatedReasoningPolicyBuildWorkflow.

---

##### `CancelInvoke`<sup>Required</sup> <a name="CancelInvoke" id="@cdk_utils/iam.bedrock.BedrockActions.property.CancelInvoke"></a>

```typescript
public readonly CancelInvoke: string;
```

- *Type:* string

[Write] bedrock:CancelInvoke.

---

##### `CheckIngestedDocumentAcl`<sup>Required</sup> <a name="CheckIngestedDocumentAcl" id="@cdk_utils/iam.bedrock.BedrockActions.property.CheckIngestedDocumentAcl"></a>

```typescript
public readonly CheckIngestedDocumentAcl: string;
```

- *Type:* string

[Read] bedrock:CheckIngestedDocumentAcl.

---

##### `CopyBlueprintStage`<sup>Required</sup> <a name="CopyBlueprintStage" id="@cdk_utils/iam.bedrock.BedrockActions.property.CopyBlueprintStage"></a>

```typescript
public readonly CopyBlueprintStage: string;
```

- *Type:* string

[Write] bedrock:CopyBlueprintStage.

---

##### `CountTokens`<sup>Required</sup> <a name="CountTokens" id="@cdk_utils/iam.bedrock.BedrockActions.property.CountTokens"></a>

```typescript
public readonly CountTokens: string;
```

- *Type:* string

[Read] bedrock:CountTokens.

---

##### `CreateAdvancedPromptOptimizationJob`<sup>Required</sup> <a name="CreateAdvancedPromptOptimizationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateAdvancedPromptOptimizationJob"></a>

```typescript
public readonly CreateAdvancedPromptOptimizationJob: string;
```

- *Type:* string

[Write] bedrock:CreateAdvancedPromptOptimizationJob.

---

##### `CreateAgent`<sup>Required</sup> <a name="CreateAgent" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateAgent"></a>

```typescript
public readonly CreateAgent: string;
```

- *Type:* string

[Write] bedrock:CreateAgent.

---

##### `CreateAgentActionGroup`<sup>Required</sup> <a name="CreateAgentActionGroup" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateAgentActionGroup"></a>

```typescript
public readonly CreateAgentActionGroup: string;
```

- *Type:* string

[Write] bedrock:CreateAgentActionGroup.

---

##### `CreateAgentAlias`<sup>Required</sup> <a name="CreateAgentAlias" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateAgentAlias"></a>

```typescript
public readonly CreateAgentAlias: string;
```

- *Type:* string

[Write] bedrock:CreateAgentAlias.

---

##### `CreateAutomatedReasoningPolicy`<sup>Required</sup> <a name="CreateAutomatedReasoningPolicy" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateAutomatedReasoningPolicy"></a>

```typescript
public readonly CreateAutomatedReasoningPolicy: string;
```

- *Type:* string

[Write] bedrock:CreateAutomatedReasoningPolicy.

---

##### `CreateAutomatedReasoningPolicyTestCase`<sup>Required</sup> <a name="CreateAutomatedReasoningPolicyTestCase" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateAutomatedReasoningPolicyTestCase"></a>

```typescript
public readonly CreateAutomatedReasoningPolicyTestCase: string;
```

- *Type:* string

[Write] bedrock:CreateAutomatedReasoningPolicyTestCase.

---

##### `CreateAutomatedReasoningPolicyVersion`<sup>Required</sup> <a name="CreateAutomatedReasoningPolicyVersion" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateAutomatedReasoningPolicyVersion"></a>

```typescript
public readonly CreateAutomatedReasoningPolicyVersion: string;
```

- *Type:* string

[Write] bedrock:CreateAutomatedReasoningPolicyVersion.

---

##### `CreateBlueprint`<sup>Required</sup> <a name="CreateBlueprint" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateBlueprint"></a>

```typescript
public readonly CreateBlueprint: string;
```

- *Type:* string

[Write] bedrock:CreateBlueprint.

---

##### `CreateBlueprintVersion`<sup>Required</sup> <a name="CreateBlueprintVersion" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateBlueprintVersion"></a>

```typescript
public readonly CreateBlueprintVersion: string;
```

- *Type:* string

[Write] bedrock:CreateBlueprintVersion.

---

##### `CreateCustomModel`<sup>Required</sup> <a name="CreateCustomModel" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateCustomModel"></a>

```typescript
public readonly CreateCustomModel: string;
```

- *Type:* string

[Write] bedrock:CreateCustomModel.

---

##### `CreateCustomModelDeployment`<sup>Required</sup> <a name="CreateCustomModelDeployment" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateCustomModelDeployment"></a>

```typescript
public readonly CreateCustomModelDeployment: string;
```

- *Type:* string

[Write] bedrock:CreateCustomModelDeployment.

---

##### `CreateDataAutomationLibrary`<sup>Required</sup> <a name="CreateDataAutomationLibrary" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateDataAutomationLibrary"></a>

```typescript
public readonly CreateDataAutomationLibrary: string;
```

- *Type:* string

[Write] bedrock:CreateDataAutomationLibrary.

---

##### `CreateDataAutomationProject`<sup>Required</sup> <a name="CreateDataAutomationProject" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateDataAutomationProject"></a>

```typescript
public readonly CreateDataAutomationProject: string;
```

- *Type:* string

[Write] bedrock:CreateDataAutomationProject.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string;
```

- *Type:* string

[Write] bedrock:CreateDataSource.

---

##### `CreateEvaluationJob`<sup>Required</sup> <a name="CreateEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateEvaluationJob"></a>

```typescript
public readonly CreateEvaluationJob: string;
```

- *Type:* string

[Write] bedrock:CreateEvaluationJob.

---

##### `CreateFlow`<sup>Required</sup> <a name="CreateFlow" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateFlow"></a>

```typescript
public readonly CreateFlow: string;
```

- *Type:* string

[Write] bedrock:CreateFlow.

---

##### `CreateFlowAlias`<sup>Required</sup> <a name="CreateFlowAlias" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateFlowAlias"></a>

```typescript
public readonly CreateFlowAlias: string;
```

- *Type:* string

[Write] bedrock:CreateFlowAlias.

---

##### `CreateFlowVersion`<sup>Required</sup> <a name="CreateFlowVersion" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateFlowVersion"></a>

```typescript
public readonly CreateFlowVersion: string;
```

- *Type:* string

[Write] bedrock:CreateFlowVersion.

---

##### `CreateFoundationModelAgreement`<sup>Required</sup> <a name="CreateFoundationModelAgreement" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateFoundationModelAgreement"></a>

```typescript
public readonly CreateFoundationModelAgreement: string;
```

- *Type:* string

[Write] bedrock:CreateFoundationModelAgreement.

---

##### `CreateGuardrail`<sup>Required</sup> <a name="CreateGuardrail" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateGuardrail"></a>

```typescript
public readonly CreateGuardrail: string;
```

- *Type:* string

[Write] bedrock:CreateGuardrail.

---

##### `CreateGuardrailVersion`<sup>Required</sup> <a name="CreateGuardrailVersion" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateGuardrailVersion"></a>

```typescript
public readonly CreateGuardrailVersion: string;
```

- *Type:* string

[Write] bedrock:CreateGuardrailVersion.

---

##### `CreateInferenceProfile`<sup>Required</sup> <a name="CreateInferenceProfile" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateInferenceProfile"></a>

```typescript
public readonly CreateInferenceProfile: string;
```

- *Type:* string

[Write] bedrock:CreateInferenceProfile.

---

##### `CreateInvocation`<sup>Required</sup> <a name="CreateInvocation" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateInvocation"></a>

```typescript
public readonly CreateInvocation: string;
```

- *Type:* string

[Write] bedrock:CreateInvocation.

---

##### `CreateKnowledgeBase`<sup>Required</sup> <a name="CreateKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateKnowledgeBase"></a>

```typescript
public readonly CreateKnowledgeBase: string;
```

- *Type:* string

[Write] bedrock:CreateKnowledgeBase.

---

##### `CreateMarketplaceModelEndpoint`<sup>Required</sup> <a name="CreateMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateMarketplaceModelEndpoint"></a>

```typescript
public readonly CreateMarketplaceModelEndpoint: string;
```

- *Type:* string

[Write] bedrock:CreateMarketplaceModelEndpoint.

---

##### `CreateModelCopyJob`<sup>Required</sup> <a name="CreateModelCopyJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateModelCopyJob"></a>

```typescript
public readonly CreateModelCopyJob: string;
```

- *Type:* string

[Write] bedrock:CreateModelCopyJob.

---

##### `CreateModelCustomizationJob`<sup>Required</sup> <a name="CreateModelCustomizationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateModelCustomizationJob"></a>

```typescript
public readonly CreateModelCustomizationJob: string;
```

- *Type:* string

[Write] bedrock:CreateModelCustomizationJob.

---

##### `CreateModelEvaluationJob`<sup>Required</sup> <a name="CreateModelEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateModelEvaluationJob"></a>

```typescript
public readonly CreateModelEvaluationJob: string;
```

- *Type:* string

[Write] bedrock:CreateModelEvaluationJob.

---

##### `CreateModelImportJob`<sup>Required</sup> <a name="CreateModelImportJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateModelImportJob"></a>

```typescript
public readonly CreateModelImportJob: string;
```

- *Type:* string

[Write] bedrock:CreateModelImportJob.

---

##### `CreateModelInvocationJob`<sup>Required</sup> <a name="CreateModelInvocationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateModelInvocationJob"></a>

```typescript
public readonly CreateModelInvocationJob: string;
```

- *Type:* string

[Write] bedrock:CreateModelInvocationJob.

---

##### `CreatePrompt`<sup>Required</sup> <a name="CreatePrompt" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreatePrompt"></a>

```typescript
public readonly CreatePrompt: string;
```

- *Type:* string

[Write] bedrock:CreatePrompt.

---

##### `CreatePromptRouter`<sup>Required</sup> <a name="CreatePromptRouter" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreatePromptRouter"></a>

```typescript
public readonly CreatePromptRouter: string;
```

- *Type:* string

[Write] bedrock:CreatePromptRouter.

---

##### `CreatePromptVersion`<sup>Required</sup> <a name="CreatePromptVersion" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreatePromptVersion"></a>

```typescript
public readonly CreatePromptVersion: string;
```

- *Type:* string

[Write] bedrock:CreatePromptVersion.

---

##### `CreateProvisionedModelThroughput`<sup>Required</sup> <a name="CreateProvisionedModelThroughput" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateProvisionedModelThroughput"></a>

```typescript
public readonly CreateProvisionedModelThroughput: string;
```

- *Type:* string

[Write] bedrock:CreateProvisionedModelThroughput.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.bedrock.BedrockActions.property.CreateSession"></a>

```typescript
public readonly CreateSession: string;
```

- *Type:* string

[Write] bedrock:CreateSession.

---

##### `DeleteAgent`<sup>Required</sup> <a name="DeleteAgent" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAgent"></a>

```typescript
public readonly DeleteAgent: string;
```

- *Type:* string

[Write] bedrock:DeleteAgent.

---

##### `DeleteAgentActionGroup`<sup>Required</sup> <a name="DeleteAgentActionGroup" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAgentActionGroup"></a>

```typescript
public readonly DeleteAgentActionGroup: string;
```

- *Type:* string

[Write] bedrock:DeleteAgentActionGroup.

---

##### `DeleteAgentAlias`<sup>Required</sup> <a name="DeleteAgentAlias" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAgentAlias"></a>

```typescript
public readonly DeleteAgentAlias: string;
```

- *Type:* string

[Write] bedrock:DeleteAgentAlias.

---

##### `DeleteAgentMemory`<sup>Required</sup> <a name="DeleteAgentMemory" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAgentMemory"></a>

```typescript
public readonly DeleteAgentMemory: string;
```

- *Type:* string

[Write] bedrock:DeleteAgentMemory.

---

##### `DeleteAgentVersion`<sup>Required</sup> <a name="DeleteAgentVersion" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAgentVersion"></a>

```typescript
public readonly DeleteAgentVersion: string;
```

- *Type:* string

[Write] bedrock:DeleteAgentVersion.

---

##### `DeleteAutomatedReasoningPolicy`<sup>Required</sup> <a name="DeleteAutomatedReasoningPolicy" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAutomatedReasoningPolicy"></a>

```typescript
public readonly DeleteAutomatedReasoningPolicy: string;
```

- *Type:* string

[Write] bedrock:DeleteAutomatedReasoningPolicy.

---

##### `DeleteAutomatedReasoningPolicyBuildWorkflow`<sup>Required</sup> <a name="DeleteAutomatedReasoningPolicyBuildWorkflow" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAutomatedReasoningPolicyBuildWorkflow"></a>

```typescript
public readonly DeleteAutomatedReasoningPolicyBuildWorkflow: string;
```

- *Type:* string

[Write] bedrock:DeleteAutomatedReasoningPolicyBuildWorkflow.

---

##### `DeleteAutomatedReasoningPolicyTestCase`<sup>Required</sup> <a name="DeleteAutomatedReasoningPolicyTestCase" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteAutomatedReasoningPolicyTestCase"></a>

```typescript
public readonly DeleteAutomatedReasoningPolicyTestCase: string;
```

- *Type:* string

[Write] bedrock:DeleteAutomatedReasoningPolicyTestCase.

---

##### `DeleteBlueprint`<sup>Required</sup> <a name="DeleteBlueprint" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteBlueprint"></a>

```typescript
public readonly DeleteBlueprint: string;
```

- *Type:* string

[Write] bedrock:DeleteBlueprint.

---

##### `DeleteCustomModel`<sup>Required</sup> <a name="DeleteCustomModel" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteCustomModel"></a>

```typescript
public readonly DeleteCustomModel: string;
```

- *Type:* string

[Write] bedrock:DeleteCustomModel.

---

##### `DeleteCustomModelDeployment`<sup>Required</sup> <a name="DeleteCustomModelDeployment" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteCustomModelDeployment"></a>

```typescript
public readonly DeleteCustomModelDeployment: string;
```

- *Type:* string

[Write] bedrock:DeleteCustomModelDeployment.

---

##### `DeleteDataAutomationLibrary`<sup>Required</sup> <a name="DeleteDataAutomationLibrary" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteDataAutomationLibrary"></a>

```typescript
public readonly DeleteDataAutomationLibrary: string;
```

- *Type:* string

[Write] bedrock:DeleteDataAutomationLibrary.

---

##### `DeleteDataAutomationProject`<sup>Required</sup> <a name="DeleteDataAutomationProject" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteDataAutomationProject"></a>

```typescript
public readonly DeleteDataAutomationProject: string;
```

- *Type:* string

[Write] bedrock:DeleteDataAutomationProject.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string;
```

- *Type:* string

[Write] bedrock:DeleteDataSource.

---

##### `DeleteEnforcedGuardrailConfiguration`<sup>Required</sup> <a name="DeleteEnforcedGuardrailConfiguration" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteEnforcedGuardrailConfiguration"></a>

```typescript
public readonly DeleteEnforcedGuardrailConfiguration: string;
```

- *Type:* string

[Write] bedrock:DeleteEnforcedGuardrailConfiguration.

---

##### `DeleteFlow`<sup>Required</sup> <a name="DeleteFlow" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteFlow"></a>

```typescript
public readonly DeleteFlow: string;
```

- *Type:* string

[Write] bedrock:DeleteFlow.

---

##### `DeleteFlowAlias`<sup>Required</sup> <a name="DeleteFlowAlias" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteFlowAlias"></a>

```typescript
public readonly DeleteFlowAlias: string;
```

- *Type:* string

[Write] bedrock:DeleteFlowAlias.

---

##### `DeleteFlowVersion`<sup>Required</sup> <a name="DeleteFlowVersion" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteFlowVersion"></a>

```typescript
public readonly DeleteFlowVersion: string;
```

- *Type:* string

[Write] bedrock:DeleteFlowVersion.

---

##### `DeleteFoundationModelAgreement`<sup>Required</sup> <a name="DeleteFoundationModelAgreement" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteFoundationModelAgreement"></a>

```typescript
public readonly DeleteFoundationModelAgreement: string;
```

- *Type:* string

[Write] bedrock:DeleteFoundationModelAgreement.

---

##### `DeleteGuardrail`<sup>Required</sup> <a name="DeleteGuardrail" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteGuardrail"></a>

```typescript
public readonly DeleteGuardrail: string;
```

- *Type:* string

[Write] bedrock:DeleteGuardrail.

---

##### `DeleteImportedModel`<sup>Required</sup> <a name="DeleteImportedModel" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteImportedModel"></a>

```typescript
public readonly DeleteImportedModel: string;
```

- *Type:* string

[Write] bedrock:DeleteImportedModel.

---

##### `DeleteInferenceProfile`<sup>Required</sup> <a name="DeleteInferenceProfile" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteInferenceProfile"></a>

```typescript
public readonly DeleteInferenceProfile: string;
```

- *Type:* string

[Write] bedrock:DeleteInferenceProfile.

---

##### `DeleteInvoke`<sup>Required</sup> <a name="DeleteInvoke" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteInvoke"></a>

```typescript
public readonly DeleteInvoke: string;
```

- *Type:* string

[Write] bedrock:DeleteInvoke.

---

##### `DeleteKnowledgeBase`<sup>Required</sup> <a name="DeleteKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteKnowledgeBase"></a>

```typescript
public readonly DeleteKnowledgeBase: string;
```

- *Type:* string

[Write] bedrock:DeleteKnowledgeBase.

---

##### `DeleteKnowledgeBaseDocuments`<sup>Required</sup> <a name="DeleteKnowledgeBaseDocuments" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteKnowledgeBaseDocuments"></a>

```typescript
public readonly DeleteKnowledgeBaseDocuments: string;
```

- *Type:* string

[Write] bedrock:DeleteKnowledgeBaseDocuments.

---

##### `DeleteMarketplaceModelAgreement`<sup>Required</sup> <a name="DeleteMarketplaceModelAgreement" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteMarketplaceModelAgreement"></a>

```typescript
public readonly DeleteMarketplaceModelAgreement: string;
```

- *Type:* string

[Write] bedrock:DeleteMarketplaceModelAgreement.

---

##### `DeleteMarketplaceModelEndpoint`<sup>Required</sup> <a name="DeleteMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteMarketplaceModelEndpoint"></a>

```typescript
public readonly DeleteMarketplaceModelEndpoint: string;
```

- *Type:* string

[Write] bedrock:DeleteMarketplaceModelEndpoint.

---

##### `DeleteModelInvocationLoggingConfiguration`<sup>Required</sup> <a name="DeleteModelInvocationLoggingConfiguration" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteModelInvocationLoggingConfiguration"></a>

```typescript
public readonly DeleteModelInvocationLoggingConfiguration: string;
```

- *Type:* string

[Write] bedrock:DeleteModelInvocationLoggingConfiguration.

---

##### `DeletePrompt`<sup>Required</sup> <a name="DeletePrompt" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeletePrompt"></a>

```typescript
public readonly DeletePrompt: string;
```

- *Type:* string

[Write] bedrock:DeletePrompt.

---

##### `DeletePromptRouter`<sup>Required</sup> <a name="DeletePromptRouter" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeletePromptRouter"></a>

```typescript
public readonly DeletePromptRouter: string;
```

- *Type:* string

[Write] bedrock:DeletePromptRouter.

---

##### `DeleteProvisionedModelThroughput`<sup>Required</sup> <a name="DeleteProvisionedModelThroughput" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteProvisionedModelThroughput"></a>

```typescript
public readonly DeleteProvisionedModelThroughput: string;
```

- *Type:* string

[Write] bedrock:DeleteProvisionedModelThroughput.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] bedrock:DeleteResourcePolicy.

---

##### `DeleteSession`<sup>Required</sup> <a name="DeleteSession" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeleteSession"></a>

```typescript
public readonly DeleteSession: string;
```

- *Type:* string

[Write] bedrock:DeleteSession.

---

##### `DeregisterMarketplaceModelEndpoint`<sup>Required</sup> <a name="DeregisterMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockActions.property.DeregisterMarketplaceModelEndpoint"></a>

```typescript
public readonly DeregisterMarketplaceModelEndpoint: string;
```

- *Type:* string

[Write] bedrock:DeregisterMarketplaceModelEndpoint.

---

##### `DetectGeneratedContent`<sup>Required</sup> <a name="DetectGeneratedContent" id="@cdk_utils/iam.bedrock.BedrockActions.property.DetectGeneratedContent"></a>

```typescript
public readonly DetectGeneratedContent: string;
```

- *Type:* string

[Read] bedrock:DetectGeneratedContent.

---

##### `DisassociateAgentCollaborator`<sup>Required</sup> <a name="DisassociateAgentCollaborator" id="@cdk_utils/iam.bedrock.BedrockActions.property.DisassociateAgentCollaborator"></a>

```typescript
public readonly DisassociateAgentCollaborator: string;
```

- *Type:* string

[Write] bedrock:DisassociateAgentCollaborator.

---

##### `DisassociateAgentKnowledgeBase`<sup>Required</sup> <a name="DisassociateAgentKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockActions.property.DisassociateAgentKnowledgeBase"></a>

```typescript
public readonly DisassociateAgentKnowledgeBase: string;
```

- *Type:* string

[Write] bedrock:DisassociateAgentKnowledgeBase.

---

##### `EndSession`<sup>Required</sup> <a name="EndSession" id="@cdk_utils/iam.bedrock.BedrockActions.property.EndSession"></a>

```typescript
public readonly EndSession: string;
```

- *Type:* string

[Write] bedrock:EndSession.

---

##### `ExportAutomatedReasoningPolicyVersion`<sup>Required</sup> <a name="ExportAutomatedReasoningPolicyVersion" id="@cdk_utils/iam.bedrock.BedrockActions.property.ExportAutomatedReasoningPolicyVersion"></a>

```typescript
public readonly ExportAutomatedReasoningPolicyVersion: string;
```

- *Type:* string

[Read] bedrock:ExportAutomatedReasoningPolicyVersion.

---

##### `GenerateQuery`<sup>Required</sup> <a name="GenerateQuery" id="@cdk_utils/iam.bedrock.BedrockActions.property.GenerateQuery"></a>

```typescript
public readonly GenerateQuery: string;
```

- *Type:* string

[Read] bedrock:GenerateQuery.

---

##### `IngestKnowledgeBaseDocuments`<sup>Required</sup> <a name="IngestKnowledgeBaseDocuments" id="@cdk_utils/iam.bedrock.BedrockActions.property.IngestKnowledgeBaseDocuments"></a>

```typescript
public readonly IngestKnowledgeBaseDocuments: string;
```

- *Type:* string

[Write] bedrock:IngestKnowledgeBaseDocuments.

---

##### `InvokeAgent`<sup>Required</sup> <a name="InvokeAgent" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeAgent"></a>

```typescript
public readonly InvokeAgent: string;
```

- *Type:* string

[Read] bedrock:InvokeAgent.

---

##### `InvokeAutomatedReasoningPolicy`<sup>Required</sup> <a name="InvokeAutomatedReasoningPolicy" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeAutomatedReasoningPolicy"></a>

```typescript
public readonly InvokeAutomatedReasoningPolicy: string;
```

- *Type:* string

[Read] bedrock:InvokeAutomatedReasoningPolicy.

---

##### `InvokeBlueprintOptimizationAsync`<sup>Required</sup> <a name="InvokeBlueprintOptimizationAsync" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeBlueprintOptimizationAsync"></a>

```typescript
public readonly InvokeBlueprintOptimizationAsync: string;
```

- *Type:* string

[Write] bedrock:InvokeBlueprintOptimizationAsync.

---

##### `InvokeBlueprintRecommendationAsync`<sup>Required</sup> <a name="InvokeBlueprintRecommendationAsync" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeBlueprintRecommendationAsync"></a>

```typescript
public readonly InvokeBlueprintRecommendationAsync: string;
```

- *Type:* string

[Write] bedrock:InvokeBlueprintRecommendationAsync.

---

##### `InvokeBuilder`<sup>Required</sup> <a name="InvokeBuilder" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeBuilder"></a>

```typescript
public readonly InvokeBuilder: string;
```

- *Type:* string

[Write] bedrock:InvokeBuilder.

---

##### `InvokeDataAutomation`<sup>Required</sup> <a name="InvokeDataAutomation" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeDataAutomation"></a>

```typescript
public readonly InvokeDataAutomation: string;
```

- *Type:* string

[Write] bedrock:InvokeDataAutomation.

---

##### `InvokeDataAutomationAsync`<sup>Required</sup> <a name="InvokeDataAutomationAsync" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeDataAutomationAsync"></a>

```typescript
public readonly InvokeDataAutomationAsync: string;
```

- *Type:* string

[Write] bedrock:InvokeDataAutomationAsync.

---

##### `InvokeDataAutomationLibraryIngestionJob`<sup>Required</sup> <a name="InvokeDataAutomationLibraryIngestionJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeDataAutomationLibraryIngestionJob"></a>

```typescript
public readonly InvokeDataAutomationLibraryIngestionJob: string;
```

- *Type:* string

[Write] bedrock:InvokeDataAutomationLibraryIngestionJob.

---

##### `InvokeFlow`<sup>Required</sup> <a name="InvokeFlow" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeFlow"></a>

```typescript
public readonly InvokeFlow: string;
```

- *Type:* string

[Read] bedrock:InvokeFlow.

---

##### `InvokeGuardrailChecks`<sup>Required</sup> <a name="InvokeGuardrailChecks" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeGuardrailChecks"></a>

```typescript
public readonly InvokeGuardrailChecks: string;
```

- *Type:* string

[Read] bedrock:InvokeGuardrailChecks.

---

##### `InvokeInlineAgent`<sup>Required</sup> <a name="InvokeInlineAgent" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeInlineAgent"></a>

```typescript
public readonly InvokeInlineAgent: string;
```

- *Type:* string

[Read] bedrock:InvokeInlineAgent.

---

##### `InvokeModel`<sup>Required</sup> <a name="InvokeModel" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeModel"></a>

```typescript
public readonly InvokeModel: string;
```

- *Type:* string

[Read] bedrock:InvokeModel.

---

##### `InvokeModelWithResponseStream`<sup>Required</sup> <a name="InvokeModelWithResponseStream" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeModelWithResponseStream"></a>

```typescript
public readonly InvokeModelWithResponseStream: string;
```

- *Type:* string

[Read] bedrock:InvokeModelWithResponseStream.

---

##### `InvokeTool`<sup>Required</sup> <a name="InvokeTool" id="@cdk_utils/iam.bedrock.BedrockActions.property.InvokeTool"></a>

```typescript
public readonly InvokeTool: string;
```

- *Type:* string

[Read] bedrock:InvokeTool.

---

##### `ListAdvancedPromptOptimizationJobs`<sup>Required</sup> <a name="ListAdvancedPromptOptimizationJobs" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAdvancedPromptOptimizationJobs"></a>

```typescript
public readonly ListAdvancedPromptOptimizationJobs: string;
```

- *Type:* string

[List] bedrock:ListAdvancedPromptOptimizationJobs.

---

##### `ListAgentActionGroups`<sup>Required</sup> <a name="ListAgentActionGroups" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAgentActionGroups"></a>

```typescript
public readonly ListAgentActionGroups: string;
```

- *Type:* string

[List] bedrock:ListAgentActionGroups.

---

##### `ListAgentAliases`<sup>Required</sup> <a name="ListAgentAliases" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAgentAliases"></a>

```typescript
public readonly ListAgentAliases: string;
```

- *Type:* string

[List] bedrock:ListAgentAliases.

---

##### `ListAgentCollaborators`<sup>Required</sup> <a name="ListAgentCollaborators" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAgentCollaborators"></a>

```typescript
public readonly ListAgentCollaborators: string;
```

- *Type:* string

[List] bedrock:ListAgentCollaborators.

---

##### `ListAgentKnowledgeBases`<sup>Required</sup> <a name="ListAgentKnowledgeBases" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAgentKnowledgeBases"></a>

```typescript
public readonly ListAgentKnowledgeBases: string;
```

- *Type:* string

[List] bedrock:ListAgentKnowledgeBases.

---

##### `ListAgents`<sup>Required</sup> <a name="ListAgents" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAgents"></a>

```typescript
public readonly ListAgents: string;
```

- *Type:* string

[List] bedrock:ListAgents.

---

##### `ListAgentVersions`<sup>Required</sup> <a name="ListAgentVersions" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAgentVersions"></a>

```typescript
public readonly ListAgentVersions: string;
```

- *Type:* string

[List] bedrock:ListAgentVersions.

---

##### `ListAsyncInvokes`<sup>Required</sup> <a name="ListAsyncInvokes" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAsyncInvokes"></a>

```typescript
public readonly ListAsyncInvokes: string;
```

- *Type:* string

[List] bedrock:ListAsyncInvokes.

---

##### `ListAutomatedReasoningPolicies`<sup>Required</sup> <a name="ListAutomatedReasoningPolicies" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAutomatedReasoningPolicies"></a>

```typescript
public readonly ListAutomatedReasoningPolicies: string;
```

- *Type:* string

[List] bedrock:ListAutomatedReasoningPolicies.

---

##### `ListAutomatedReasoningPolicyBuildWorkflows`<sup>Required</sup> <a name="ListAutomatedReasoningPolicyBuildWorkflows" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAutomatedReasoningPolicyBuildWorkflows"></a>

```typescript
public readonly ListAutomatedReasoningPolicyBuildWorkflows: string;
```

- *Type:* string

[List] bedrock:ListAutomatedReasoningPolicyBuildWorkflows.

---

##### `ListAutomatedReasoningPolicyTestCases`<sup>Required</sup> <a name="ListAutomatedReasoningPolicyTestCases" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAutomatedReasoningPolicyTestCases"></a>

```typescript
public readonly ListAutomatedReasoningPolicyTestCases: string;
```

- *Type:* string

[List] bedrock:ListAutomatedReasoningPolicyTestCases.

---

##### `ListAutomatedReasoningPolicyTestResults`<sup>Required</sup> <a name="ListAutomatedReasoningPolicyTestResults" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListAutomatedReasoningPolicyTestResults"></a>

```typescript
public readonly ListAutomatedReasoningPolicyTestResults: string;
```

- *Type:* string

[List] bedrock:ListAutomatedReasoningPolicyTestResults.

---

##### `ListBlueprints`<sup>Required</sup> <a name="ListBlueprints" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListBlueprints"></a>

```typescript
public readonly ListBlueprints: string;
```

- *Type:* string

[List] bedrock:ListBlueprints.

---

##### `ListCustomModelDeployments`<sup>Required</sup> <a name="ListCustomModelDeployments" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListCustomModelDeployments"></a>

```typescript
public readonly ListCustomModelDeployments: string;
```

- *Type:* string

[List] bedrock:ListCustomModelDeployments.

---

##### `ListCustomModels`<sup>Required</sup> <a name="ListCustomModels" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListCustomModels"></a>

```typescript
public readonly ListCustomModels: string;
```

- *Type:* string

[List] bedrock:ListCustomModels.

---

##### `ListDataAutomationLibraries`<sup>Required</sup> <a name="ListDataAutomationLibraries" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListDataAutomationLibraries"></a>

```typescript
public readonly ListDataAutomationLibraries: string;
```

- *Type:* string

[List] bedrock:ListDataAutomationLibraries.

---

##### `ListDataAutomationLibraryEntities`<sup>Required</sup> <a name="ListDataAutomationLibraryEntities" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListDataAutomationLibraryEntities"></a>

```typescript
public readonly ListDataAutomationLibraryEntities: string;
```

- *Type:* string

[List] bedrock:ListDataAutomationLibraryEntities.

---

##### `ListDataAutomationLibraryIngestionJobs`<sup>Required</sup> <a name="ListDataAutomationLibraryIngestionJobs" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListDataAutomationLibraryIngestionJobs"></a>

```typescript
public readonly ListDataAutomationLibraryIngestionJobs: string;
```

- *Type:* string

[List] bedrock:ListDataAutomationLibraryIngestionJobs.

---

##### `ListDataAutomationProjects`<sup>Required</sup> <a name="ListDataAutomationProjects" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListDataAutomationProjects"></a>

```typescript
public readonly ListDataAutomationProjects: string;
```

- *Type:* string

[List] bedrock:ListDataAutomationProjects.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string;
```

- *Type:* string

[List] bedrock:ListDataSources.

---

##### `ListEnforcedGuardrailsConfiguration`<sup>Required</sup> <a name="ListEnforcedGuardrailsConfiguration" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListEnforcedGuardrailsConfiguration"></a>

```typescript
public readonly ListEnforcedGuardrailsConfiguration: string;
```

- *Type:* string

[List] bedrock:ListEnforcedGuardrailsConfiguration.

---

##### `ListEvaluationJobs`<sup>Required</sup> <a name="ListEvaluationJobs" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListEvaluationJobs"></a>

```typescript
public readonly ListEvaluationJobs: string;
```

- *Type:* string

[List] bedrock:ListEvaluationJobs.

---

##### `ListFlowAliases`<sup>Required</sup> <a name="ListFlowAliases" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListFlowAliases"></a>

```typescript
public readonly ListFlowAliases: string;
```

- *Type:* string

[List] bedrock:ListFlowAliases.

---

##### `ListFlowExecutionEvents`<sup>Required</sup> <a name="ListFlowExecutionEvents" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListFlowExecutionEvents"></a>

```typescript
public readonly ListFlowExecutionEvents: string;
```

- *Type:* string

[List] bedrock:ListFlowExecutionEvents.

---

##### `ListFlowExecutions`<sup>Required</sup> <a name="ListFlowExecutions" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListFlowExecutions"></a>

```typescript
public readonly ListFlowExecutions: string;
```

- *Type:* string

[List] bedrock:ListFlowExecutions.

---

##### `ListFlows`<sup>Required</sup> <a name="ListFlows" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListFlows"></a>

```typescript
public readonly ListFlows: string;
```

- *Type:* string

[List] bedrock:ListFlows.

---

##### `ListFlowVersions`<sup>Required</sup> <a name="ListFlowVersions" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListFlowVersions"></a>

```typescript
public readonly ListFlowVersions: string;
```

- *Type:* string

[List] bedrock:ListFlowVersions.

---

##### `ListFoundationModelAgreementOffers`<sup>Required</sup> <a name="ListFoundationModelAgreementOffers" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListFoundationModelAgreementOffers"></a>

```typescript
public readonly ListFoundationModelAgreementOffers: string;
```

- *Type:* string

[List] bedrock:ListFoundationModelAgreementOffers.

---

##### `ListFoundationModels`<sup>Required</sup> <a name="ListFoundationModels" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListFoundationModels"></a>

```typescript
public readonly ListFoundationModels: string;
```

- *Type:* string

[List] bedrock:ListFoundationModels.

---

##### `ListGuardrails`<sup>Required</sup> <a name="ListGuardrails" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListGuardrails"></a>

```typescript
public readonly ListGuardrails: string;
```

- *Type:* string

[List] bedrock:ListGuardrails.

---

##### `ListImportedModels`<sup>Required</sup> <a name="ListImportedModels" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListImportedModels"></a>

```typescript
public readonly ListImportedModels: string;
```

- *Type:* string

[List] bedrock:ListImportedModels.

---

##### `ListInferenceProfiles`<sup>Required</sup> <a name="ListInferenceProfiles" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListInferenceProfiles"></a>

```typescript
public readonly ListInferenceProfiles: string;
```

- *Type:* string

[List] bedrock:ListInferenceProfiles.

---

##### `ListIngestionJobs`<sup>Required</sup> <a name="ListIngestionJobs" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListIngestionJobs"></a>

```typescript
public readonly ListIngestionJobs: string;
```

- *Type:* string

[List] bedrock:ListIngestionJobs.

---

##### `ListInvocations`<sup>Required</sup> <a name="ListInvocations" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListInvocations"></a>

```typescript
public readonly ListInvocations: string;
```

- *Type:* string

[List] bedrock:ListInvocations.

---

##### `ListInvocationSteps`<sup>Required</sup> <a name="ListInvocationSteps" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListInvocationSteps"></a>

```typescript
public readonly ListInvocationSteps: string;
```

- *Type:* string

[List] bedrock:ListInvocationSteps.

---

##### `ListKnowledgeBaseDocuments`<sup>Required</sup> <a name="ListKnowledgeBaseDocuments" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListKnowledgeBaseDocuments"></a>

```typescript
public readonly ListKnowledgeBaseDocuments: string;
```

- *Type:* string

[List] bedrock:ListKnowledgeBaseDocuments.

---

##### `ListKnowledgeBases`<sup>Required</sup> <a name="ListKnowledgeBases" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListKnowledgeBases"></a>

```typescript
public readonly ListKnowledgeBases: string;
```

- *Type:* string

[List] bedrock:ListKnowledgeBases.

---

##### `ListMarketplaceModelEndpoints`<sup>Required</sup> <a name="ListMarketplaceModelEndpoints" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListMarketplaceModelEndpoints"></a>

```typescript
public readonly ListMarketplaceModelEndpoints: string;
```

- *Type:* string

[Read] bedrock:ListMarketplaceModelEndpoints.

---

##### `ListModelCopyJobs`<sup>Required</sup> <a name="ListModelCopyJobs" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListModelCopyJobs"></a>

```typescript
public readonly ListModelCopyJobs: string;
```

- *Type:* string

[List] bedrock:ListModelCopyJobs.

---

##### `ListModelCustomizationJobs`<sup>Required</sup> <a name="ListModelCustomizationJobs" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListModelCustomizationJobs"></a>

```typescript
public readonly ListModelCustomizationJobs: string;
```

- *Type:* string

[List] bedrock:ListModelCustomizationJobs.

---

##### `ListModelEvaluationJobs`<sup>Required</sup> <a name="ListModelEvaluationJobs" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListModelEvaluationJobs"></a>

```typescript
public readonly ListModelEvaluationJobs: string;
```

- *Type:* string

[List] bedrock:ListModelEvaluationJobs.

---

##### `ListModelImportJobs`<sup>Required</sup> <a name="ListModelImportJobs" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListModelImportJobs"></a>

```typescript
public readonly ListModelImportJobs: string;
```

- *Type:* string

[List] bedrock:ListModelImportJobs.

---

##### `ListModelInvocationJobs`<sup>Required</sup> <a name="ListModelInvocationJobs" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListModelInvocationJobs"></a>

```typescript
public readonly ListModelInvocationJobs: string;
```

- *Type:* string

[List] bedrock:ListModelInvocationJobs.

---

##### `ListPromptRouters`<sup>Required</sup> <a name="ListPromptRouters" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListPromptRouters"></a>

```typescript
public readonly ListPromptRouters: string;
```

- *Type:* string

[List] bedrock:ListPromptRouters.

---

##### `ListPrompts`<sup>Required</sup> <a name="ListPrompts" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListPrompts"></a>

```typescript
public readonly ListPrompts: string;
```

- *Type:* string

[List] bedrock:ListPrompts.

---

##### `ListProvisionedModelThroughputs`<sup>Required</sup> <a name="ListProvisionedModelThroughputs" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListProvisionedModelThroughputs"></a>

```typescript
public readonly ListProvisionedModelThroughputs: string;
```

- *Type:* string

[List] bedrock:ListProvisionedModelThroughputs.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[List] bedrock:ListSessions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bedrock.BedrockActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] bedrock:ListTagsForResource.

---

##### `OptimizePrompt`<sup>Required</sup> <a name="OptimizePrompt" id="@cdk_utils/iam.bedrock.BedrockActions.property.OptimizePrompt"></a>

```typescript
public readonly OptimizePrompt: string;
```

- *Type:* string

[Read] bedrock:OptimizePrompt.

---

##### `PrepareAgent`<sup>Required</sup> <a name="PrepareAgent" id="@cdk_utils/iam.bedrock.BedrockActions.property.PrepareAgent"></a>

```typescript
public readonly PrepareAgent: string;
```

- *Type:* string

[Write] bedrock:PrepareAgent.

---

##### `PrepareFlow`<sup>Required</sup> <a name="PrepareFlow" id="@cdk_utils/iam.bedrock.BedrockActions.property.PrepareFlow"></a>

```typescript
public readonly PrepareFlow: string;
```

- *Type:* string

[Write] bedrock:PrepareFlow.

---

##### `PutAccountDataRetention`<sup>Required</sup> <a name="PutAccountDataRetention" id="@cdk_utils/iam.bedrock.BedrockActions.property.PutAccountDataRetention"></a>

```typescript
public readonly PutAccountDataRetention: string;
```

- *Type:* string

[Write] bedrock:PutAccountDataRetention.

---

##### `PutEnforcedGuardrailConfiguration`<sup>Required</sup> <a name="PutEnforcedGuardrailConfiguration" id="@cdk_utils/iam.bedrock.BedrockActions.property.PutEnforcedGuardrailConfiguration"></a>

```typescript
public readonly PutEnforcedGuardrailConfiguration: string;
```

- *Type:* string

[Write] bedrock:PutEnforcedGuardrailConfiguration.

---

##### `PutFoundationModelEntitlement`<sup>Required</sup> <a name="PutFoundationModelEntitlement" id="@cdk_utils/iam.bedrock.BedrockActions.property.PutFoundationModelEntitlement"></a>

```typescript
public readonly PutFoundationModelEntitlement: string;
```

- *Type:* string

[Write] bedrock:PutFoundationModelEntitlement.

---

##### `PutInvocationStep`<sup>Required</sup> <a name="PutInvocationStep" id="@cdk_utils/iam.bedrock.BedrockActions.property.PutInvocationStep"></a>

```typescript
public readonly PutInvocationStep: string;
```

- *Type:* string

[Write] bedrock:PutInvocationStep.

---

##### `PutModelInvocationLoggingConfiguration`<sup>Required</sup> <a name="PutModelInvocationLoggingConfiguration" id="@cdk_utils/iam.bedrock.BedrockActions.property.PutModelInvocationLoggingConfiguration"></a>

```typescript
public readonly PutModelInvocationLoggingConfiguration: string;
```

- *Type:* string

[Write] bedrock:PutModelInvocationLoggingConfiguration.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.bedrock.BedrockActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] bedrock:PutResourcePolicy.

---

##### `PutUseCaseForModelAccess`<sup>Required</sup> <a name="PutUseCaseForModelAccess" id="@cdk_utils/iam.bedrock.BedrockActions.property.PutUseCaseForModelAccess"></a>

```typescript
public readonly PutUseCaseForModelAccess: string;
```

- *Type:* string

[Write] bedrock:PutUseCaseForModelAccess.

---

##### `RegisterMarketplaceModelEndpoint`<sup>Required</sup> <a name="RegisterMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockActions.property.RegisterMarketplaceModelEndpoint"></a>

```typescript
public readonly RegisterMarketplaceModelEndpoint: string;
```

- *Type:* string

[Write] bedrock:RegisterMarketplaceModelEndpoint.

---

##### `RenderPrompt`<sup>Required</sup> <a name="RenderPrompt" id="@cdk_utils/iam.bedrock.BedrockActions.property.RenderPrompt"></a>

```typescript
public readonly RenderPrompt: string;
```

- *Type:* string

[Read] bedrock:RenderPrompt.

---

##### `Rerank`<sup>Required</sup> <a name="Rerank" id="@cdk_utils/iam.bedrock.BedrockActions.property.Rerank"></a>

```typescript
public readonly Rerank: string;
```

- *Type:* string

[Write] bedrock:Rerank.

---

##### `Retrieve`<sup>Required</sup> <a name="Retrieve" id="@cdk_utils/iam.bedrock.BedrockActions.property.Retrieve"></a>

```typescript
public readonly Retrieve: string;
```

- *Type:* string

[Read] bedrock:Retrieve.

---

##### `RetrieveAndGenerate`<sup>Required</sup> <a name="RetrieveAndGenerate" id="@cdk_utils/iam.bedrock.BedrockActions.property.RetrieveAndGenerate"></a>

```typescript
public readonly RetrieveAndGenerate: string;
```

- *Type:* string

[Write] bedrock:RetrieveAndGenerate.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.bedrock.BedrockActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAutomatedReasoningPolicyBuildWorkflow`<sup>Required</sup> <a name="StartAutomatedReasoningPolicyBuildWorkflow" id="@cdk_utils/iam.bedrock.BedrockActions.property.StartAutomatedReasoningPolicyBuildWorkflow"></a>

```typescript
public readonly StartAutomatedReasoningPolicyBuildWorkflow: string;
```

- *Type:* string

[Write] bedrock:StartAutomatedReasoningPolicyBuildWorkflow.

---

##### `StartAutomatedReasoningPolicyTestWorkflow`<sup>Required</sup> <a name="StartAutomatedReasoningPolicyTestWorkflow" id="@cdk_utils/iam.bedrock.BedrockActions.property.StartAutomatedReasoningPolicyTestWorkflow"></a>

```typescript
public readonly StartAutomatedReasoningPolicyTestWorkflow: string;
```

- *Type:* string

[Write] bedrock:StartAutomatedReasoningPolicyTestWorkflow.

---

##### `StartFlowExecution`<sup>Required</sup> <a name="StartFlowExecution" id="@cdk_utils/iam.bedrock.BedrockActions.property.StartFlowExecution"></a>

```typescript
public readonly StartFlowExecution: string;
```

- *Type:* string

[Write] bedrock:StartFlowExecution.

---

##### `StartIngestionJob`<sup>Required</sup> <a name="StartIngestionJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.StartIngestionJob"></a>

```typescript
public readonly StartIngestionJob: string;
```

- *Type:* string

[Write] bedrock:StartIngestionJob.

---

##### `StopAdvancedPromptOptimizationJob`<sup>Required</sup> <a name="StopAdvancedPromptOptimizationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.StopAdvancedPromptOptimizationJob"></a>

```typescript
public readonly StopAdvancedPromptOptimizationJob: string;
```

- *Type:* string

[Write] bedrock:StopAdvancedPromptOptimizationJob.

---

##### `StopEvaluationJob`<sup>Required</sup> <a name="StopEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.StopEvaluationJob"></a>

```typescript
public readonly StopEvaluationJob: string;
```

- *Type:* string

[Write] bedrock:StopEvaluationJob.

---

##### `StopFlowExecution`<sup>Required</sup> <a name="StopFlowExecution" id="@cdk_utils/iam.bedrock.BedrockActions.property.StopFlowExecution"></a>

```typescript
public readonly StopFlowExecution: string;
```

- *Type:* string

[Write] bedrock:StopFlowExecution.

---

##### `StopIngestionJob`<sup>Required</sup> <a name="StopIngestionJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.StopIngestionJob"></a>

```typescript
public readonly StopIngestionJob: string;
```

- *Type:* string

[Write] bedrock:StopIngestionJob.

---

##### `StopModelCustomizationJob`<sup>Required</sup> <a name="StopModelCustomizationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.StopModelCustomizationJob"></a>

```typescript
public readonly StopModelCustomizationJob: string;
```

- *Type:* string

[Write] bedrock:StopModelCustomizationJob.

---

##### `StopModelInvocationJob`<sup>Required</sup> <a name="StopModelInvocationJob" id="@cdk_utils/iam.bedrock.BedrockActions.property.StopModelInvocationJob"></a>

```typescript
public readonly StopModelInvocationJob: string;
```

- *Type:* string

[Write] bedrock:StopModelInvocationJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bedrock.BedrockActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] bedrock:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bedrock.BedrockActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] bedrock:UntagResource.

---

##### `UpdateAgent`<sup>Required</sup> <a name="UpdateAgent" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAgent"></a>

```typescript
public readonly UpdateAgent: string;
```

- *Type:* string

[Write] bedrock:UpdateAgent.

---

##### `UpdateAgentActionGroup`<sup>Required</sup> <a name="UpdateAgentActionGroup" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAgentActionGroup"></a>

```typescript
public readonly UpdateAgentActionGroup: string;
```

- *Type:* string

[Write] bedrock:UpdateAgentActionGroup.

---

##### `UpdateAgentAlias`<sup>Required</sup> <a name="UpdateAgentAlias" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAgentAlias"></a>

```typescript
public readonly UpdateAgentAlias: string;
```

- *Type:* string

[Write] bedrock:UpdateAgentAlias.

---

##### `UpdateAgentCollaborator`<sup>Required</sup> <a name="UpdateAgentCollaborator" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAgentCollaborator"></a>

```typescript
public readonly UpdateAgentCollaborator: string;
```

- *Type:* string

[Write] bedrock:UpdateAgentCollaborator.

---

##### `UpdateAgentKnowledgeBase`<sup>Required</sup> <a name="UpdateAgentKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAgentKnowledgeBase"></a>

```typescript
public readonly UpdateAgentKnowledgeBase: string;
```

- *Type:* string

[Write] bedrock:UpdateAgentKnowledgeBase.

---

##### `UpdateAutomatedReasoningPolicy`<sup>Required</sup> <a name="UpdateAutomatedReasoningPolicy" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAutomatedReasoningPolicy"></a>

```typescript
public readonly UpdateAutomatedReasoningPolicy: string;
```

- *Type:* string

[Write] bedrock:UpdateAutomatedReasoningPolicy.

---

##### `UpdateAutomatedReasoningPolicyAnnotations`<sup>Required</sup> <a name="UpdateAutomatedReasoningPolicyAnnotations" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAutomatedReasoningPolicyAnnotations"></a>

```typescript
public readonly UpdateAutomatedReasoningPolicyAnnotations: string;
```

- *Type:* string

[Write] bedrock:UpdateAutomatedReasoningPolicyAnnotations.

---

##### `UpdateAutomatedReasoningPolicyTestCase`<sup>Required</sup> <a name="UpdateAutomatedReasoningPolicyTestCase" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateAutomatedReasoningPolicyTestCase"></a>

```typescript
public readonly UpdateAutomatedReasoningPolicyTestCase: string;
```

- *Type:* string

[Write] bedrock:UpdateAutomatedReasoningPolicyTestCase.

---

##### `UpdateBlueprint`<sup>Required</sup> <a name="UpdateBlueprint" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateBlueprint"></a>

```typescript
public readonly UpdateBlueprint: string;
```

- *Type:* string

[Write] bedrock:UpdateBlueprint.

---

##### `UpdateCustomModelDeployment`<sup>Required</sup> <a name="UpdateCustomModelDeployment" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateCustomModelDeployment"></a>

```typescript
public readonly UpdateCustomModelDeployment: string;
```

- *Type:* string

[Write] bedrock:UpdateCustomModelDeployment.

---

##### `UpdateDataAutomationLibrary`<sup>Required</sup> <a name="UpdateDataAutomationLibrary" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateDataAutomationLibrary"></a>

```typescript
public readonly UpdateDataAutomationLibrary: string;
```

- *Type:* string

[Write] bedrock:UpdateDataAutomationLibrary.

---

##### `UpdateDataAutomationProject`<sup>Required</sup> <a name="UpdateDataAutomationProject" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateDataAutomationProject"></a>

```typescript
public readonly UpdateDataAutomationProject: string;
```

- *Type:* string

[Write] bedrock:UpdateDataAutomationProject.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string;
```

- *Type:* string

[Write] bedrock:UpdateDataSource.

---

##### `UpdateFlow`<sup>Required</sup> <a name="UpdateFlow" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateFlow"></a>

```typescript
public readonly UpdateFlow: string;
```

- *Type:* string

[Write] bedrock:UpdateFlow.

---

##### `UpdateFlowAlias`<sup>Required</sup> <a name="UpdateFlowAlias" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateFlowAlias"></a>

```typescript
public readonly UpdateFlowAlias: string;
```

- *Type:* string

[Write] bedrock:UpdateFlowAlias.

---

##### `UpdateGuardrail`<sup>Required</sup> <a name="UpdateGuardrail" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateGuardrail"></a>

```typescript
public readonly UpdateGuardrail: string;
```

- *Type:* string

[Write] bedrock:UpdateGuardrail.

---

##### `UpdateKnowledgeBase`<sup>Required</sup> <a name="UpdateKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateKnowledgeBase"></a>

```typescript
public readonly UpdateKnowledgeBase: string;
```

- *Type:* string

[Write] bedrock:UpdateKnowledgeBase.

---

##### `UpdateMarketplaceModelEndpoint`<sup>Required</sup> <a name="UpdateMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateMarketplaceModelEndpoint"></a>

```typescript
public readonly UpdateMarketplaceModelEndpoint: string;
```

- *Type:* string

[Write] bedrock:UpdateMarketplaceModelEndpoint.

---

##### `UpdatePrompt`<sup>Required</sup> <a name="UpdatePrompt" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdatePrompt"></a>

```typescript
public readonly UpdatePrompt: string;
```

- *Type:* string

[Write] bedrock:UpdatePrompt.

---

##### `UpdateProvisionedModelThroughput`<sup>Required</sup> <a name="UpdateProvisionedModelThroughput" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateProvisionedModelThroughput"></a>

```typescript
public readonly UpdateProvisionedModelThroughput: string;
```

- *Type:* string

[Write] bedrock:UpdateProvisionedModelThroughput.

---

##### `UpdateSession`<sup>Required</sup> <a name="UpdateSession" id="@cdk_utils/iam.bedrock.BedrockActions.property.UpdateSession"></a>

```typescript
public readonly UpdateSession: string;
```

- *Type:* string

[Write] bedrock:UpdateSession.

---

##### `ValidateFlowDefinition`<sup>Required</sup> <a name="ValidateFlowDefinition" id="@cdk_utils/iam.bedrock.BedrockActions.property.ValidateFlowDefinition"></a>

```typescript
public readonly ValidateFlowDefinition: string;
```

- *Type:* string

[Read] bedrock:ValidateFlowDefinition.

---

### BedrockConditions <a name="BedrockConditions" id="@cdk_utils/iam.bedrock.BedrockConditions"></a>

Condition key constants and builders for bedrock.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock.BedrockConditions.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

new bedrock.BedrockConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.bearerTokenType">bearerTokenType</a></code> | Generates a condition block for `bedrock:BearerTokenType`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.dataRetentionMode">dataRetentionMode</a></code> | Generates a condition block for `bedrock:DataRetentionMode`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.guardrailIdentifier">guardrailIdentifier</a></code> | Generates a condition block for `bedrock:GuardrailIdentifier`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.inferenceProfileARN">inferenceProfileARN</a></code> | Generates a condition block for `bedrock:InferenceProfileArn`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.inlineAgentName">inlineAgentName</a></code> | Generates a condition block for `bedrock:InlineAgentName`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.modelARN">modelARN</a></code> | Generates a condition block for `bedrock:ModelArn`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.projectARN">projectARN</a></code> | Generates a condition block for `bedrock:ProjectArn`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.promptRouterARN">promptRouterARN</a></code> | Generates a condition block for `bedrock:PromptRouterArn`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.serviceTier">serviceTier</a></code> | Generates a condition block for `bedrock:ServiceTier`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.thirdPartyKnowledgeBaseCredentialsSecretARN">thirdPartyKnowledgeBaseCredentialsSecretARN</a></code> | Generates a condition block for `bedrock:ThirdPartyKnowledgeBaseCredentialsSecretArn`. |

---

##### `bearerTokenType` <a name="bearerTokenType" id="@cdk_utils/iam.bedrock.BedrockConditions.bearerTokenType"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.bearerTokenType(value: string)
```

Generates a condition block for `bedrock:BearerTokenType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.bearerTokenType.parameter.value"></a>

- *Type:* string

---

##### `dataRetentionMode` <a name="dataRetentionMode" id="@cdk_utils/iam.bedrock.BedrockConditions.dataRetentionMode"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.dataRetentionMode(value: string)
```

Generates a condition block for `bedrock:DataRetentionMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.dataRetentionMode.parameter.value"></a>

- *Type:* string

---

##### `guardrailIdentifier` <a name="guardrailIdentifier" id="@cdk_utils/iam.bedrock.BedrockConditions.guardrailIdentifier"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.guardrailIdentifier(value: string)
```

Generates a condition block for `bedrock:GuardrailIdentifier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.guardrailIdentifier.parameter.value"></a>

- *Type:* string

---

##### `inferenceProfileARN` <a name="inferenceProfileARN" id="@cdk_utils/iam.bedrock.BedrockConditions.inferenceProfileARN"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.inferenceProfileARN(value: string)
```

Generates a condition block for `bedrock:InferenceProfileArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.inferenceProfileARN.parameter.value"></a>

- *Type:* string

---

##### `inlineAgentName` <a name="inlineAgentName" id="@cdk_utils/iam.bedrock.BedrockConditions.inlineAgentName"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.inlineAgentName(value: string)
```

Generates a condition block for `bedrock:InlineAgentName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.inlineAgentName.parameter.value"></a>

- *Type:* string

---

##### `modelARN` <a name="modelARN" id="@cdk_utils/iam.bedrock.BedrockConditions.modelARN"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.modelARN(value: string)
```

Generates a condition block for `bedrock:ModelArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.modelARN.parameter.value"></a>

- *Type:* string

---

##### `projectARN` <a name="projectARN" id="@cdk_utils/iam.bedrock.BedrockConditions.projectARN"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.projectARN(value: string)
```

Generates a condition block for `bedrock:ProjectArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.projectARN.parameter.value"></a>

- *Type:* string

---

##### `promptRouterARN` <a name="promptRouterARN" id="@cdk_utils/iam.bedrock.BedrockConditions.promptRouterARN"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.promptRouterARN(value: string)
```

Generates a condition block for `bedrock:PromptRouterArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.promptRouterARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.bedrock.BedrockConditions.requestTag"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.bedrock.BedrockConditions.resourceTag"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `serviceTier` <a name="serviceTier" id="@cdk_utils/iam.bedrock.BedrockConditions.serviceTier"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.serviceTier(value: string)
```

Generates a condition block for `bedrock:ServiceTier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.serviceTier.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.tagKeys"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock.BedrockConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `thirdPartyKnowledgeBaseCredentialsSecretARN` <a name="thirdPartyKnowledgeBaseCredentialsSecretARN" id="@cdk_utils/iam.bedrock.BedrockConditions.thirdPartyKnowledgeBaseCredentialsSecretARN"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockConditions.thirdPartyKnowledgeBaseCredentialsSecretARN(value: string)
```

Generates a condition block for `bedrock:ThirdPartyKnowledgeBaseCredentialsSecretArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock.BedrockConditions.thirdPartyKnowledgeBaseCredentialsSecretARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.AssociateThirdPartyKnowledgeBaseConditionKeys">AssociateThirdPartyKnowledgeBaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateThirdPartyKnowledgeBase action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.BEARER_TOKEN_TYPE">BEARER_TOKEN_TYPE</a></code> | <code>string</code> | Condition key: bedrock:BearerTokenType (String). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CallWithBearerTokenConditionKeys">CallWithBearerTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CallWithBearerToken action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAdvancedPromptOptimizationJobConditionKeys">CreateAdvancedPromptOptimizationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAdvancedPromptOptimizationJob action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAgentActionGroupConditionKeys">CreateAgentActionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgentActionGroup action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAgentAliasConditionKeys">CreateAgentAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgentAlias action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAgentConditionKeys">CreateAgentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgent action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAutomatedReasoningPolicyConditionKeys">CreateAutomatedReasoningPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAutomatedReasoningPolicy action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAutomatedReasoningPolicyVersionConditionKeys">CreateAutomatedReasoningPolicyVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAutomatedReasoningPolicyVersion action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateBlueprintConditionKeys">CreateBlueprintConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBlueprint action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateCustomModelConditionKeys">CreateCustomModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomModel action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateCustomModelDeploymentConditionKeys">CreateCustomModelDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomModelDeployment action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateDataAutomationLibraryConditionKeys">CreateDataAutomationLibraryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataAutomationLibrary action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateDataAutomationProjectConditionKeys">CreateDataAutomationProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataAutomationProject action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateEvaluationJobConditionKeys">CreateEvaluationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEvaluationJob action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateFlowAliasConditionKeys">CreateFlowAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFlowAlias action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateFlowConditionKeys">CreateFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFlow action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateGuardrailConditionKeys">CreateGuardrailConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGuardrail action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateInferenceProfileConditionKeys">CreateInferenceProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInferenceProfile action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateKnowledgeBaseConditionKeys">CreateKnowledgeBaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKnowledgeBase action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateModelCopyJobConditionKeys">CreateModelCopyJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateModelCopyJob action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateModelCustomizationJobConditionKeys">CreateModelCustomizationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateModelCustomizationJob action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateModelEvaluationJobConditionKeys">CreateModelEvaluationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateModelEvaluationJob action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateModelImportJobConditionKeys">CreateModelImportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateModelImportJob action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateModelInvocationJobConditionKeys">CreateModelInvocationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateModelInvocationJob action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreatePromptConditionKeys">CreatePromptConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePrompt action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreatePromptRouterConditionKeys">CreatePromptRouterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePromptRouter action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreatePromptVersionConditionKeys">CreatePromptVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePromptVersion action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateProvisionedModelThroughputConditionKeys">CreateProvisionedModelThroughputConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProvisionedModelThroughput action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.CreateSessionConditionKeys">CreateSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSession action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.DATA_RETENTION_MODE">DATA_RETENTION_MODE</a></code> | <code>string</code> | Condition key: bedrock:DataRetentionMode (String). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.GUARDRAIL_IDENTIFIER">GUARDRAIL_IDENTIFIER</a></code> | <code>string</code> | Condition key: bedrock:GuardrailIdentifier (ARN). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.INFERENCE_PROFILE_ARN">INFERENCE_PROFILE_ARN</a></code> | <code>string</code> | Condition key: bedrock:InferenceProfileArn (ARN). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.INLINE_AGENT_NAME">INLINE_AGENT_NAME</a></code> | <code>string</code> | Condition key: bedrock:InlineAgentName (String). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeBlueprintOptimizationAsyncConditionKeys">InvokeBlueprintOptimizationAsyncConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InvokeBlueprintOptimizationAsync action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeDataAutomationAsyncConditionKeys">InvokeDataAutomationAsyncConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InvokeDataAutomationAsync action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeDataAutomationLibraryIngestionJobConditionKeys">InvokeDataAutomationLibraryIngestionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InvokeDataAutomationLibraryIngestionJob action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeInlineAgentConditionKeys">InvokeInlineAgentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InvokeInlineAgent action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeModelConditionKeys">InvokeModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InvokeModel action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeModelWithResponseStreamConditionKeys">InvokeModelWithResponseStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InvokeModelWithResponseStream action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.MODEL_ARN">MODEL_ARN</a></code> | <code>string</code> | Condition key: bedrock:ModelArn (ARN). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.PROJECT_ARN">PROJECT_ARN</a></code> | <code>string</code> | Condition key: bedrock:ProjectArn (ARN). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.PROMPT_ROUTER_ARN">PROMPT_ROUTER_ARN</a></code> | <code>string</code> | Condition key: bedrock:PromptRouterArn (ARN). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.PutAccountDataRetentionConditionKeys">PutAccountDataRetentionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountDataRetention action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.PutResourcePolicyConditionKeys">PutResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.SERVICE_TIER">SERVICE_TIER</a></code> | <code>string</code> | Condition key: bedrock:ServiceTier (String). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.THIRD_PARTY_KNOWLEDGE_BASE_CREDENTIALS_SECRET_ARN">THIRD_PARTY_KNOWLEDGE_BASE_CREDENTIALS_SECRET_ARN</a></code> | <code>string</code> | Condition key: bedrock:ThirdPartyKnowledgeBaseCredentialsSecretArn (ARN). |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AssociateThirdPartyKnowledgeBaseConditionKeys`<sup>Required</sup> <a name="AssociateThirdPartyKnowledgeBaseConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.AssociateThirdPartyKnowledgeBaseConditionKeys"></a>

```typescript
public readonly AssociateThirdPartyKnowledgeBaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateThirdPartyKnowledgeBase action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.bedrock.BedrockConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.bedrock.BedrockConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.bedrock.BedrockConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BEARER_TOKEN_TYPE`<sup>Required</sup> <a name="BEARER_TOKEN_TYPE" id="@cdk_utils/iam.bedrock.BedrockConditions.property.BEARER_TOKEN_TYPE"></a>

```typescript
public readonly BEARER_TOKEN_TYPE: string;
```

- *Type:* string

Condition key: bedrock:BearerTokenType (String).

---

##### `CallWithBearerTokenConditionKeys`<sup>Required</sup> <a name="CallWithBearerTokenConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CallWithBearerTokenConditionKeys"></a>

```typescript
public readonly CallWithBearerTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CallWithBearerToken action.

---

##### `CreateAdvancedPromptOptimizationJobConditionKeys`<sup>Required</sup> <a name="CreateAdvancedPromptOptimizationJobConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAdvancedPromptOptimizationJobConditionKeys"></a>

```typescript
public readonly CreateAdvancedPromptOptimizationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAdvancedPromptOptimizationJob action.

---

##### `CreateAgentActionGroupConditionKeys`<sup>Required</sup> <a name="CreateAgentActionGroupConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAgentActionGroupConditionKeys"></a>

```typescript
public readonly CreateAgentActionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgentActionGroup action.

---

##### `CreateAgentAliasConditionKeys`<sup>Required</sup> <a name="CreateAgentAliasConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAgentAliasConditionKeys"></a>

```typescript
public readonly CreateAgentAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgentAlias action.

---

##### `CreateAgentConditionKeys`<sup>Required</sup> <a name="CreateAgentConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAgentConditionKeys"></a>

```typescript
public readonly CreateAgentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgent action.

---

##### `CreateAutomatedReasoningPolicyConditionKeys`<sup>Required</sup> <a name="CreateAutomatedReasoningPolicyConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAutomatedReasoningPolicyConditionKeys"></a>

```typescript
public readonly CreateAutomatedReasoningPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAutomatedReasoningPolicy action.

---

##### `CreateAutomatedReasoningPolicyVersionConditionKeys`<sup>Required</sup> <a name="CreateAutomatedReasoningPolicyVersionConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateAutomatedReasoningPolicyVersionConditionKeys"></a>

```typescript
public readonly CreateAutomatedReasoningPolicyVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAutomatedReasoningPolicyVersion action.

---

##### `CreateBlueprintConditionKeys`<sup>Required</sup> <a name="CreateBlueprintConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateBlueprintConditionKeys"></a>

```typescript
public readonly CreateBlueprintConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBlueprint action.

---

##### `CreateCustomModelConditionKeys`<sup>Required</sup> <a name="CreateCustomModelConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateCustomModelConditionKeys"></a>

```typescript
public readonly CreateCustomModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomModel action.

---

##### `CreateCustomModelDeploymentConditionKeys`<sup>Required</sup> <a name="CreateCustomModelDeploymentConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateCustomModelDeploymentConditionKeys"></a>

```typescript
public readonly CreateCustomModelDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomModelDeployment action.

---

##### `CreateDataAutomationLibraryConditionKeys`<sup>Required</sup> <a name="CreateDataAutomationLibraryConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateDataAutomationLibraryConditionKeys"></a>

```typescript
public readonly CreateDataAutomationLibraryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataAutomationLibrary action.

---

##### `CreateDataAutomationProjectConditionKeys`<sup>Required</sup> <a name="CreateDataAutomationProjectConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateDataAutomationProjectConditionKeys"></a>

```typescript
public readonly CreateDataAutomationProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataAutomationProject action.

---

##### `CreateEvaluationJobConditionKeys`<sup>Required</sup> <a name="CreateEvaluationJobConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateEvaluationJobConditionKeys"></a>

```typescript
public readonly CreateEvaluationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEvaluationJob action.

---

##### `CreateFlowAliasConditionKeys`<sup>Required</sup> <a name="CreateFlowAliasConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateFlowAliasConditionKeys"></a>

```typescript
public readonly CreateFlowAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFlowAlias action.

---

##### `CreateFlowConditionKeys`<sup>Required</sup> <a name="CreateFlowConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateFlowConditionKeys"></a>

```typescript
public readonly CreateFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFlow action.

---

##### `CreateGuardrailConditionKeys`<sup>Required</sup> <a name="CreateGuardrailConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateGuardrailConditionKeys"></a>

```typescript
public readonly CreateGuardrailConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGuardrail action.

---

##### `CreateInferenceProfileConditionKeys`<sup>Required</sup> <a name="CreateInferenceProfileConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateInferenceProfileConditionKeys"></a>

```typescript
public readonly CreateInferenceProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInferenceProfile action.

---

##### `CreateKnowledgeBaseConditionKeys`<sup>Required</sup> <a name="CreateKnowledgeBaseConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateKnowledgeBaseConditionKeys"></a>

```typescript
public readonly CreateKnowledgeBaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKnowledgeBase action.

---

##### `CreateModelCopyJobConditionKeys`<sup>Required</sup> <a name="CreateModelCopyJobConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateModelCopyJobConditionKeys"></a>

```typescript
public readonly CreateModelCopyJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateModelCopyJob action.

---

##### `CreateModelCustomizationJobConditionKeys`<sup>Required</sup> <a name="CreateModelCustomizationJobConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateModelCustomizationJobConditionKeys"></a>

```typescript
public readonly CreateModelCustomizationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateModelCustomizationJob action.

---

##### `CreateModelEvaluationJobConditionKeys`<sup>Required</sup> <a name="CreateModelEvaluationJobConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateModelEvaluationJobConditionKeys"></a>

```typescript
public readonly CreateModelEvaluationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateModelEvaluationJob action.

---

##### `CreateModelImportJobConditionKeys`<sup>Required</sup> <a name="CreateModelImportJobConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateModelImportJobConditionKeys"></a>

```typescript
public readonly CreateModelImportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateModelImportJob action.

---

##### `CreateModelInvocationJobConditionKeys`<sup>Required</sup> <a name="CreateModelInvocationJobConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateModelInvocationJobConditionKeys"></a>

```typescript
public readonly CreateModelInvocationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateModelInvocationJob action.

---

##### `CreatePromptConditionKeys`<sup>Required</sup> <a name="CreatePromptConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreatePromptConditionKeys"></a>

```typescript
public readonly CreatePromptConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePrompt action.

---

##### `CreatePromptRouterConditionKeys`<sup>Required</sup> <a name="CreatePromptRouterConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreatePromptRouterConditionKeys"></a>

```typescript
public readonly CreatePromptRouterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePromptRouter action.

---

##### `CreatePromptVersionConditionKeys`<sup>Required</sup> <a name="CreatePromptVersionConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreatePromptVersionConditionKeys"></a>

```typescript
public readonly CreatePromptVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePromptVersion action.

---

##### `CreateProvisionedModelThroughputConditionKeys`<sup>Required</sup> <a name="CreateProvisionedModelThroughputConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateProvisionedModelThroughputConditionKeys"></a>

```typescript
public readonly CreateProvisionedModelThroughputConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProvisionedModelThroughput action.

---

##### `CreateSessionConditionKeys`<sup>Required</sup> <a name="CreateSessionConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.CreateSessionConditionKeys"></a>

```typescript
public readonly CreateSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSession action.

---

##### `DATA_RETENTION_MODE`<sup>Required</sup> <a name="DATA_RETENTION_MODE" id="@cdk_utils/iam.bedrock.BedrockConditions.property.DATA_RETENTION_MODE"></a>

```typescript
public readonly DATA_RETENTION_MODE: string;
```

- *Type:* string

Condition key: bedrock:DataRetentionMode (String).

---

##### `GUARDRAIL_IDENTIFIER`<sup>Required</sup> <a name="GUARDRAIL_IDENTIFIER" id="@cdk_utils/iam.bedrock.BedrockConditions.property.GUARDRAIL_IDENTIFIER"></a>

```typescript
public readonly GUARDRAIL_IDENTIFIER: string;
```

- *Type:* string

Condition key: bedrock:GuardrailIdentifier (ARN).

---

##### `INFERENCE_PROFILE_ARN`<sup>Required</sup> <a name="INFERENCE_PROFILE_ARN" id="@cdk_utils/iam.bedrock.BedrockConditions.property.INFERENCE_PROFILE_ARN"></a>

```typescript
public readonly INFERENCE_PROFILE_ARN: string;
```

- *Type:* string

Condition key: bedrock:InferenceProfileArn (ARN).

---

##### `INLINE_AGENT_NAME`<sup>Required</sup> <a name="INLINE_AGENT_NAME" id="@cdk_utils/iam.bedrock.BedrockConditions.property.INLINE_AGENT_NAME"></a>

```typescript
public readonly INLINE_AGENT_NAME: string;
```

- *Type:* string

Condition key: bedrock:InlineAgentName (String).

---

##### `InvokeBlueprintOptimizationAsyncConditionKeys`<sup>Required</sup> <a name="InvokeBlueprintOptimizationAsyncConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeBlueprintOptimizationAsyncConditionKeys"></a>

```typescript
public readonly InvokeBlueprintOptimizationAsyncConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InvokeBlueprintOptimizationAsync action.

---

##### `InvokeDataAutomationAsyncConditionKeys`<sup>Required</sup> <a name="InvokeDataAutomationAsyncConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeDataAutomationAsyncConditionKeys"></a>

```typescript
public readonly InvokeDataAutomationAsyncConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InvokeDataAutomationAsync action.

---

##### `InvokeDataAutomationLibraryIngestionJobConditionKeys`<sup>Required</sup> <a name="InvokeDataAutomationLibraryIngestionJobConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeDataAutomationLibraryIngestionJobConditionKeys"></a>

```typescript
public readonly InvokeDataAutomationLibraryIngestionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InvokeDataAutomationLibraryIngestionJob action.

---

##### `InvokeInlineAgentConditionKeys`<sup>Required</sup> <a name="InvokeInlineAgentConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeInlineAgentConditionKeys"></a>

```typescript
public readonly InvokeInlineAgentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InvokeInlineAgent action.

---

##### `InvokeModelConditionKeys`<sup>Required</sup> <a name="InvokeModelConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeModelConditionKeys"></a>

```typescript
public readonly InvokeModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InvokeModel action.

---

##### `InvokeModelWithResponseStreamConditionKeys`<sup>Required</sup> <a name="InvokeModelWithResponseStreamConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.InvokeModelWithResponseStreamConditionKeys"></a>

```typescript
public readonly InvokeModelWithResponseStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InvokeModelWithResponseStream action.

---

##### `MODEL_ARN`<sup>Required</sup> <a name="MODEL_ARN" id="@cdk_utils/iam.bedrock.BedrockConditions.property.MODEL_ARN"></a>

```typescript
public readonly MODEL_ARN: string;
```

- *Type:* string

Condition key: bedrock:ModelArn (ARN).

---

##### `PROJECT_ARN`<sup>Required</sup> <a name="PROJECT_ARN" id="@cdk_utils/iam.bedrock.BedrockConditions.property.PROJECT_ARN"></a>

```typescript
public readonly PROJECT_ARN: string;
```

- *Type:* string

Condition key: bedrock:ProjectArn (ARN).

---

##### `PROMPT_ROUTER_ARN`<sup>Required</sup> <a name="PROMPT_ROUTER_ARN" id="@cdk_utils/iam.bedrock.BedrockConditions.property.PROMPT_ROUTER_ARN"></a>

```typescript
public readonly PROMPT_ROUTER_ARN: string;
```

- *Type:* string

Condition key: bedrock:PromptRouterArn (ARN).

---

##### `PutAccountDataRetentionConditionKeys`<sup>Required</sup> <a name="PutAccountDataRetentionConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.PutAccountDataRetentionConditionKeys"></a>

```typescript
public readonly PutAccountDataRetentionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountDataRetention action.

---

##### `PutResourcePolicyConditionKeys`<sup>Required</sup> <a name="PutResourcePolicyConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.PutResourcePolicyConditionKeys"></a>

```typescript
public readonly PutResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutResourcePolicy action.

---

##### `SERVICE_TIER`<sup>Required</sup> <a name="SERVICE_TIER" id="@cdk_utils/iam.bedrock.BedrockConditions.property.SERVICE_TIER"></a>

```typescript
public readonly SERVICE_TIER: string;
```

- *Type:* string

Condition key: bedrock:ServiceTier (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `THIRD_PARTY_KNOWLEDGE_BASE_CREDENTIALS_SECRET_ARN`<sup>Required</sup> <a name="THIRD_PARTY_KNOWLEDGE_BASE_CREDENTIALS_SECRET_ARN" id="@cdk_utils/iam.bedrock.BedrockConditions.property.THIRD_PARTY_KNOWLEDGE_BASE_CREDENTIALS_SECRET_ARN"></a>

```typescript
public readonly THIRD_PARTY_KNOWLEDGE_BASE_CREDENTIALS_SECRET_ARN: string;
```

- *Type:* string

Condition key: bedrock:ThirdPartyKnowledgeBaseCredentialsSecretArn (ARN).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.bedrock.BedrockConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### BedrockOperations <a name="BedrockOperations" id="@cdk_utils/iam.bedrock.BedrockOperations"></a>

API operation to required IAM actions mapping for bedrock.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock.BedrockOperations.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

new bedrock.BedrockOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.AgenticRetrieveStream">AgenticRetrieveStream</a></code> | <code>string[]</code> | IAM actions required for the AgenticRetrieveStream API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ApplyGuardrail">ApplyGuardrail</a></code> | <code>string[]</code> | IAM actions required for the ApplyGuardrail API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.AssociateAgentCollaborator">AssociateAgentCollaborator</a></code> | <code>string[]</code> | IAM actions required for the AssociateAgentCollaborator API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.AssociateAgentKnowledgeBase">AssociateAgentKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the AssociateAgentKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.BatchDeleteAdvancedPromptOptimizationJob">BatchDeleteAdvancedPromptOptimizationJob</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteAdvancedPromptOptimizationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.BatchDeleteEvaluationJob">BatchDeleteEvaluationJob</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteEvaluationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CancelAutomatedReasoningPolicyBuildWorkflow">CancelAutomatedReasoningPolicyBuildWorkflow</a></code> | <code>string[]</code> | IAM actions required for the CancelAutomatedReasoningPolicyBuildWorkflow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CheckIngestedDocumentAcl">CheckIngestedDocumentAcl</a></code> | <code>string[]</code> | IAM actions required for the CheckIngestedDocumentAcl API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.Converse">Converse</a></code> | <code>string[]</code> | IAM actions required for the Converse API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ConverseStream">ConverseStream</a></code> | <code>string[]</code> | IAM actions required for the ConverseStream API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CopyBlueprintStage">CopyBlueprintStage</a></code> | <code>string[]</code> | IAM actions required for the CopyBlueprintStage API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CountTokens">CountTokens</a></code> | <code>string[]</code> | IAM actions required for the CountTokens API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAdvancedPromptOptimizationJob">CreateAdvancedPromptOptimizationJob</a></code> | <code>string[]</code> | IAM actions required for the CreateAdvancedPromptOptimizationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAgent">CreateAgent</a></code> | <code>string[]</code> | IAM actions required for the CreateAgent API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAgentActionGroup">CreateAgentActionGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateAgentActionGroup API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAgentAlias">CreateAgentAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateAgentAlias API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAutomatedReasoningPolicy">CreateAutomatedReasoningPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateAutomatedReasoningPolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAutomatedReasoningPolicyTestCase">CreateAutomatedReasoningPolicyTestCase</a></code> | <code>string[]</code> | IAM actions required for the CreateAutomatedReasoningPolicyTestCase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAutomatedReasoningPolicyVersion">CreateAutomatedReasoningPolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateAutomatedReasoningPolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateBlueprint">CreateBlueprint</a></code> | <code>string[]</code> | IAM actions required for the CreateBlueprint API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateBlueprintVersion">CreateBlueprintVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateBlueprintVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateCustomModel">CreateCustomModel</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomModel API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateCustomModelDeployment">CreateCustomModelDeployment</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomModelDeployment API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateDataAutomationLibrary">CreateDataAutomationLibrary</a></code> | <code>string[]</code> | IAM actions required for the CreateDataAutomationLibrary API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateDataAutomationProject">CreateDataAutomationProject</a></code> | <code>string[]</code> | IAM actions required for the CreateDataAutomationProject API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateDataSource">CreateDataSource</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSource API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateEvaluationJob">CreateEvaluationJob</a></code> | <code>string[]</code> | IAM actions required for the CreateEvaluationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateFlow">CreateFlow</a></code> | <code>string[]</code> | IAM actions required for the CreateFlow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateFlowAlias">CreateFlowAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateFlowAlias API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateFlowVersion">CreateFlowVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateFlowVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateFoundationModelAgreement">CreateFoundationModelAgreement</a></code> | <code>string[]</code> | IAM actions required for the CreateFoundationModelAgreement API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateGuardrail">CreateGuardrail</a></code> | <code>string[]</code> | IAM actions required for the CreateGuardrail API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateGuardrailVersion">CreateGuardrailVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateGuardrailVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateInferenceProfile">CreateInferenceProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateInferenceProfile API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateInvocation">CreateInvocation</a></code> | <code>string[]</code> | IAM actions required for the CreateInvocation API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateKnowledgeBase">CreateKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the CreateKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateMarketplaceModelEndpoint">CreateMarketplaceModelEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateMarketplaceModelEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateModelCopyJob">CreateModelCopyJob</a></code> | <code>string[]</code> | IAM actions required for the CreateModelCopyJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateModelCustomizationJob">CreateModelCustomizationJob</a></code> | <code>string[]</code> | IAM actions required for the CreateModelCustomizationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateModelImportJob">CreateModelImportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateModelImportJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateModelInvocationJob">CreateModelInvocationJob</a></code> | <code>string[]</code> | IAM actions required for the CreateModelInvocationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreatePrompt">CreatePrompt</a></code> | <code>string[]</code> | IAM actions required for the CreatePrompt API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreatePromptRouter">CreatePromptRouter</a></code> | <code>string[]</code> | IAM actions required for the CreatePromptRouter API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreatePromptVersion">CreatePromptVersion</a></code> | <code>string[]</code> | IAM actions required for the CreatePromptVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateProvisionedModelThroughput">CreateProvisionedModelThroughput</a></code> | <code>string[]</code> | IAM actions required for the CreateProvisionedModelThroughput API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.CreateSession">CreateSession</a></code> | <code>string[]</code> | IAM actions required for the CreateSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAgent">DeleteAgent</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgent API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAgentActionGroup">DeleteAgentActionGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentActionGroup API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAgentAlias">DeleteAgentAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentAlias API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAgentMemory">DeleteAgentMemory</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentMemory API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAgentVersion">DeleteAgentVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAutomatedReasoningPolicy">DeleteAutomatedReasoningPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutomatedReasoningPolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAutomatedReasoningPolicyBuildWorkflow">DeleteAutomatedReasoningPolicyBuildWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutomatedReasoningPolicyBuildWorkflow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAutomatedReasoningPolicyTestCase">DeleteAutomatedReasoningPolicyTestCase</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutomatedReasoningPolicyTestCase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteBlueprint">DeleteBlueprint</a></code> | <code>string[]</code> | IAM actions required for the DeleteBlueprint API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteCustomModel">DeleteCustomModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomModel API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteCustomModelDeployment">DeleteCustomModelDeployment</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomModelDeployment API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteDataAutomationLibrary">DeleteDataAutomationLibrary</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataAutomationLibrary API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteDataAutomationProject">DeleteDataAutomationProject</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataAutomationProject API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSource API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteEnforcedGuardrailConfiguration">DeleteEnforcedGuardrailConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnforcedGuardrailConfiguration API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteFlow">DeleteFlow</a></code> | <code>string[]</code> | IAM actions required for the DeleteFlow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteFlowAlias">DeleteFlowAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteFlowAlias API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteFlowVersion">DeleteFlowVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteFlowVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteFoundationModelAgreement">DeleteFoundationModelAgreement</a></code> | <code>string[]</code> | IAM actions required for the DeleteFoundationModelAgreement API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteGuardrail">DeleteGuardrail</a></code> | <code>string[]</code> | IAM actions required for the DeleteGuardrail API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteImportedModel">DeleteImportedModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteImportedModel API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteInferenceProfile">DeleteInferenceProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteInferenceProfile API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteKnowledgeBase">DeleteKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the DeleteKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteKnowledgeBaseDocuments">DeleteKnowledgeBaseDocuments</a></code> | <code>string[]</code> | IAM actions required for the DeleteKnowledgeBaseDocuments API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteMarketplaceModelEndpoint">DeleteMarketplaceModelEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteMarketplaceModelEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteModelInvocationLoggingConfiguration">DeleteModelInvocationLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteModelInvocationLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeletePrompt">DeletePrompt</a></code> | <code>string[]</code> | IAM actions required for the DeletePrompt API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeletePromptRouter">DeletePromptRouter</a></code> | <code>string[]</code> | IAM actions required for the DeletePromptRouter API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteProvisionedModelThroughput">DeleteProvisionedModelThroughput</a></code> | <code>string[]</code> | IAM actions required for the DeleteProvisionedModelThroughput API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteSession">DeleteSession</a></code> | <code>string[]</code> | IAM actions required for the DeleteSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DeregisterMarketplaceModelEndpoint">DeregisterMarketplaceModelEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeregisterMarketplaceModelEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DisassociateAgentCollaborator">DisassociateAgentCollaborator</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAgentCollaborator API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.DisassociateAgentKnowledgeBase">DisassociateAgentKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAgentKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.EndSession">EndSession</a></code> | <code>string[]</code> | IAM actions required for the EndSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ExportAutomatedReasoningPolicyVersion">ExportAutomatedReasoningPolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the ExportAutomatedReasoningPolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.GenerateQuery">GenerateQuery</a></code> | <code>string[]</code> | IAM actions required for the GenerateQuery API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.IngestKnowledgeBaseDocuments">IngestKnowledgeBaseDocuments</a></code> | <code>string[]</code> | IAM actions required for the IngestKnowledgeBaseDocuments API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeAgent">InvokeAgent</a></code> | <code>string[]</code> | IAM actions required for the InvokeAgent API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeBlueprintOptimizationAsync">InvokeBlueprintOptimizationAsync</a></code> | <code>string[]</code> | IAM actions required for the InvokeBlueprintOptimizationAsync API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeDataAutomation">InvokeDataAutomation</a></code> | <code>string[]</code> | IAM actions required for the InvokeDataAutomation API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeDataAutomationAsync">InvokeDataAutomationAsync</a></code> | <code>string[]</code> | IAM actions required for the InvokeDataAutomationAsync API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeDataAutomationLibraryIngestionJob">InvokeDataAutomationLibraryIngestionJob</a></code> | <code>string[]</code> | IAM actions required for the InvokeDataAutomationLibraryIngestionJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeFlow">InvokeFlow</a></code> | <code>string[]</code> | IAM actions required for the InvokeFlow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeGuardrailChecks">InvokeGuardrailChecks</a></code> | <code>string[]</code> | IAM actions required for the InvokeGuardrailChecks API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeInlineAgent">InvokeInlineAgent</a></code> | <code>string[]</code> | IAM actions required for the InvokeInlineAgent API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeModel">InvokeModel</a></code> | <code>string[]</code> | IAM actions required for the InvokeModel API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeModelWithBidirectionalStream">InvokeModelWithBidirectionalStream</a></code> | <code>string[]</code> | IAM actions required for the InvokeModelWithBidirectionalStream API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeModelWithResponseStream">InvokeModelWithResponseStream</a></code> | <code>string[]</code> | IAM actions required for the InvokeModelWithResponseStream API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAdvancedPromptOptimizationJobs">ListAdvancedPromptOptimizationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListAdvancedPromptOptimizationJobs API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgentActionGroups">ListAgentActionGroups</a></code> | <code>string[]</code> | IAM actions required for the ListAgentActionGroups API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgentAliases">ListAgentAliases</a></code> | <code>string[]</code> | IAM actions required for the ListAgentAliases API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgentCollaborators">ListAgentCollaborators</a></code> | <code>string[]</code> | IAM actions required for the ListAgentCollaborators API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgentKnowledgeBases">ListAgentKnowledgeBases</a></code> | <code>string[]</code> | IAM actions required for the ListAgentKnowledgeBases API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgents">ListAgents</a></code> | <code>string[]</code> | IAM actions required for the ListAgents API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgentVersions">ListAgentVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAgentVersions API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAsyncInvokes">ListAsyncInvokes</a></code> | <code>string[]</code> | IAM actions required for the ListAsyncInvokes API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAutomatedReasoningPolicies">ListAutomatedReasoningPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListAutomatedReasoningPolicies API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAutomatedReasoningPolicyBuildWorkflows">ListAutomatedReasoningPolicyBuildWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListAutomatedReasoningPolicyBuildWorkflows API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAutomatedReasoningPolicyTestCases">ListAutomatedReasoningPolicyTestCases</a></code> | <code>string[]</code> | IAM actions required for the ListAutomatedReasoningPolicyTestCases API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListAutomatedReasoningPolicyTestResults">ListAutomatedReasoningPolicyTestResults</a></code> | <code>string[]</code> | IAM actions required for the ListAutomatedReasoningPolicyTestResults API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListBlueprints">ListBlueprints</a></code> | <code>string[]</code> | IAM actions required for the ListBlueprints API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListCustomModelDeployments">ListCustomModelDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListCustomModelDeployments API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListCustomModels">ListCustomModels</a></code> | <code>string[]</code> | IAM actions required for the ListCustomModels API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListDataAutomationLibraries">ListDataAutomationLibraries</a></code> | <code>string[]</code> | IAM actions required for the ListDataAutomationLibraries API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListDataAutomationLibraryEntities">ListDataAutomationLibraryEntities</a></code> | <code>string[]</code> | IAM actions required for the ListDataAutomationLibraryEntities API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListDataAutomationLibraryIngestionJobs">ListDataAutomationLibraryIngestionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDataAutomationLibraryIngestionJobs API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListDataAutomationProjects">ListDataAutomationProjects</a></code> | <code>string[]</code> | IAM actions required for the ListDataAutomationProjects API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListDataSources">ListDataSources</a></code> | <code>string[]</code> | IAM actions required for the ListDataSources API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListEnforcedGuardrailsConfiguration">ListEnforcedGuardrailsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ListEnforcedGuardrailsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListEvaluationJobs">ListEvaluationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListEvaluationJobs API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListFlowAliases">ListFlowAliases</a></code> | <code>string[]</code> | IAM actions required for the ListFlowAliases API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListFlowExecutionEvents">ListFlowExecutionEvents</a></code> | <code>string[]</code> | IAM actions required for the ListFlowExecutionEvents API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListFlowExecutions">ListFlowExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListFlowExecutions API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListFlows">ListFlows</a></code> | <code>string[]</code> | IAM actions required for the ListFlows API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListFlowVersions">ListFlowVersions</a></code> | <code>string[]</code> | IAM actions required for the ListFlowVersions API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListFoundationModelAgreementOffers">ListFoundationModelAgreementOffers</a></code> | <code>string[]</code> | IAM actions required for the ListFoundationModelAgreementOffers API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListFoundationModels">ListFoundationModels</a></code> | <code>string[]</code> | IAM actions required for the ListFoundationModels API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListGuardrails">ListGuardrails</a></code> | <code>string[]</code> | IAM actions required for the ListGuardrails API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListImportedModels">ListImportedModels</a></code> | <code>string[]</code> | IAM actions required for the ListImportedModels API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListInferenceProfiles">ListInferenceProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListInferenceProfiles API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListIngestionJobs">ListIngestionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListIngestionJobs API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListInvocations">ListInvocations</a></code> | <code>string[]</code> | IAM actions required for the ListInvocations API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListInvocationSteps">ListInvocationSteps</a></code> | <code>string[]</code> | IAM actions required for the ListInvocationSteps API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListKnowledgeBaseDocuments">ListKnowledgeBaseDocuments</a></code> | <code>string[]</code> | IAM actions required for the ListKnowledgeBaseDocuments API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListKnowledgeBases">ListKnowledgeBases</a></code> | <code>string[]</code> | IAM actions required for the ListKnowledgeBases API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListMarketplaceModelEndpoints">ListMarketplaceModelEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListMarketplaceModelEndpoints API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListModelCopyJobs">ListModelCopyJobs</a></code> | <code>string[]</code> | IAM actions required for the ListModelCopyJobs API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListModelCustomizationJobs">ListModelCustomizationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListModelCustomizationJobs API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListModelImportJobs">ListModelImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListModelImportJobs API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListModelInvocationJobs">ListModelInvocationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListModelInvocationJobs API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListPromptRouters">ListPromptRouters</a></code> | <code>string[]</code> | IAM actions required for the ListPromptRouters API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListPrompts">ListPrompts</a></code> | <code>string[]</code> | IAM actions required for the ListPrompts API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListProvisionedModelThroughputs">ListProvisionedModelThroughputs</a></code> | <code>string[]</code> | IAM actions required for the ListProvisionedModelThroughputs API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAccountDataRetention">opGetAccountDataRetention</a></code> | <code>string[]</code> | IAM actions required for the GetAccountDataRetention API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAdvancedPromptOptimizationJob">opGetAdvancedPromptOptimizationJob</a></code> | <code>string[]</code> | IAM actions required for the GetAdvancedPromptOptimizationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgent">opGetAgent</a></code> | <code>string[]</code> | IAM actions required for the GetAgent API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentActionGroup">opGetAgentActionGroup</a></code> | <code>string[]</code> | IAM actions required for the GetAgentActionGroup API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentAlias">opGetAgentAlias</a></code> | <code>string[]</code> | IAM actions required for the GetAgentAlias API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentCollaborator">opGetAgentCollaborator</a></code> | <code>string[]</code> | IAM actions required for the GetAgentCollaborator API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentKnowledgeBase">opGetAgentKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the GetAgentKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentMemory">opGetAgentMemory</a></code> | <code>string[]</code> | IAM actions required for the GetAgentMemory API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentVersion">opGetAgentVersion</a></code> | <code>string[]</code> | IAM actions required for the GetAgentVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAsyncInvoke">opGetAsyncInvoke</a></code> | <code>string[]</code> | IAM actions required for the GetAsyncInvoke API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicy">opGetAutomatedReasoningPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetAutomatedReasoningPolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyAnnotations">opGetAutomatedReasoningPolicyAnnotations</a></code> | <code>string[]</code> | IAM actions required for the GetAutomatedReasoningPolicyAnnotations API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyBuildWorkflow">opGetAutomatedReasoningPolicyBuildWorkflow</a></code> | <code>string[]</code> | IAM actions required for the GetAutomatedReasoningPolicyBuildWorkflow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyBuildWorkflowResultAssets">opGetAutomatedReasoningPolicyBuildWorkflowResultAssets</a></code> | <code>string[]</code> | IAM actions required for the GetAutomatedReasoningPolicyBuildWorkflowResultAssets API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyNextScenario">opGetAutomatedReasoningPolicyNextScenario</a></code> | <code>string[]</code> | IAM actions required for the GetAutomatedReasoningPolicyNextScenario API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyTestCase">opGetAutomatedReasoningPolicyTestCase</a></code> | <code>string[]</code> | IAM actions required for the GetAutomatedReasoningPolicyTestCase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyTestResult">opGetAutomatedReasoningPolicyTestResult</a></code> | <code>string[]</code> | IAM actions required for the GetAutomatedReasoningPolicyTestResult API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetBlueprint">opGetBlueprint</a></code> | <code>string[]</code> | IAM actions required for the GetBlueprint API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetBlueprintOptimizationStatus">opGetBlueprintOptimizationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetBlueprintOptimizationStatus API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetCustomModel">opGetCustomModel</a></code> | <code>string[]</code> | IAM actions required for the GetCustomModel API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetCustomModelDeployment">opGetCustomModelDeployment</a></code> | <code>string[]</code> | IAM actions required for the GetCustomModelDeployment API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataAutomationLibrary">opGetDataAutomationLibrary</a></code> | <code>string[]</code> | IAM actions required for the GetDataAutomationLibrary API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataAutomationLibraryEntity">opGetDataAutomationLibraryEntity</a></code> | <code>string[]</code> | IAM actions required for the GetDataAutomationLibraryEntity API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataAutomationLibraryIngestionJob">opGetDataAutomationLibraryIngestionJob</a></code> | <code>string[]</code> | IAM actions required for the GetDataAutomationLibraryIngestionJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataAutomationProject">opGetDataAutomationProject</a></code> | <code>string[]</code> | IAM actions required for the GetDataAutomationProject API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataAutomationStatus">opGetDataAutomationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetDataAutomationStatus API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataSource">opGetDataSource</a></code> | <code>string[]</code> | IAM actions required for the GetDataSource API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDocumentContent">opGetDocumentContent</a></code> | <code>string[]</code> | IAM actions required for the GetDocumentContent API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetEvaluationJob">opGetEvaluationJob</a></code> | <code>string[]</code> | IAM actions required for the GetEvaluationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetExecutionFlowSnapshot">opGetExecutionFlowSnapshot</a></code> | <code>string[]</code> | IAM actions required for the GetExecutionFlowSnapshot API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFlow">opGetFlow</a></code> | <code>string[]</code> | IAM actions required for the GetFlow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFlowAlias">opGetFlowAlias</a></code> | <code>string[]</code> | IAM actions required for the GetFlowAlias API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFlowExecution">opGetFlowExecution</a></code> | <code>string[]</code> | IAM actions required for the GetFlowExecution API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFlowVersion">opGetFlowVersion</a></code> | <code>string[]</code> | IAM actions required for the GetFlowVersion API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFoundationModel">opGetFoundationModel</a></code> | <code>string[]</code> | IAM actions required for the GetFoundationModel API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFoundationModelAvailability">opGetFoundationModelAvailability</a></code> | <code>string[]</code> | IAM actions required for the GetFoundationModelAvailability API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetGuardrail">opGetGuardrail</a></code> | <code>string[]</code> | IAM actions required for the GetGuardrail API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetImportedModel">opGetImportedModel</a></code> | <code>string[]</code> | IAM actions required for the GetImportedModel API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetInferenceProfile">opGetInferenceProfile</a></code> | <code>string[]</code> | IAM actions required for the GetInferenceProfile API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetIngestedDocumentAcl">opGetIngestedDocumentAcl</a></code> | <code>string[]</code> | IAM actions required for the GetIngestedDocumentAcl API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetIngestionJob">opGetIngestionJob</a></code> | <code>string[]</code> | IAM actions required for the GetIngestionJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetInvocationStep">opGetInvocationStep</a></code> | <code>string[]</code> | IAM actions required for the GetInvocationStep API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetKnowledgeBase">opGetKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the GetKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetKnowledgeBaseDocuments">opGetKnowledgeBaseDocuments</a></code> | <code>string[]</code> | IAM actions required for the GetKnowledgeBaseDocuments API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetMarketplaceModelEndpoint">opGetMarketplaceModelEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetMarketplaceModelEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetModelCopyJob">opGetModelCopyJob</a></code> | <code>string[]</code> | IAM actions required for the GetModelCopyJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetModelCustomizationJob">opGetModelCustomizationJob</a></code> | <code>string[]</code> | IAM actions required for the GetModelCustomizationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetModelImportJob">opGetModelImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetModelImportJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetModelInvocationJob">opGetModelInvocationJob</a></code> | <code>string[]</code> | IAM actions required for the GetModelInvocationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetModelInvocationLoggingConfiguration">opGetModelInvocationLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetModelInvocationLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetPrompt">opGetPrompt</a></code> | <code>string[]</code> | IAM actions required for the GetPrompt API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetPromptRouter">opGetPromptRouter</a></code> | <code>string[]</code> | IAM actions required for the GetPromptRouter API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetProvisionedModelThroughput">opGetProvisionedModelThroughput</a></code> | <code>string[]</code> | IAM actions required for the GetProvisionedModelThroughput API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetSession">opGetSession</a></code> | <code>string[]</code> | IAM actions required for the GetSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.opGetUseCaseForModelAccess">opGetUseCaseForModelAccess</a></code> | <code>string[]</code> | IAM actions required for the GetUseCaseForModelAccess API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.OptimizePrompt">OptimizePrompt</a></code> | <code>string[]</code> | IAM actions required for the OptimizePrompt API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.PrepareAgent">PrepareAgent</a></code> | <code>string[]</code> | IAM actions required for the PrepareAgent API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.PrepareFlow">PrepareFlow</a></code> | <code>string[]</code> | IAM actions required for the PrepareFlow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.PutAccountDataRetention">PutAccountDataRetention</a></code> | <code>string[]</code> | IAM actions required for the PutAccountDataRetention API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.PutEnforcedGuardrailConfiguration">PutEnforcedGuardrailConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutEnforcedGuardrailConfiguration API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.PutInvocationStep">PutInvocationStep</a></code> | <code>string[]</code> | IAM actions required for the PutInvocationStep API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.PutModelInvocationLoggingConfiguration">PutModelInvocationLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutModelInvocationLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.PutUseCaseForModelAccess">PutUseCaseForModelAccess</a></code> | <code>string[]</code> | IAM actions required for the PutUseCaseForModelAccess API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.RegisterMarketplaceModelEndpoint">RegisterMarketplaceModelEndpoint</a></code> | <code>string[]</code> | IAM actions required for the RegisterMarketplaceModelEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.Rerank">Rerank</a></code> | <code>string[]</code> | IAM actions required for the Rerank API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.Retrieve">Retrieve</a></code> | <code>string[]</code> | IAM actions required for the Retrieve API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.RetrieveAndGenerate">RetrieveAndGenerate</a></code> | <code>string[]</code> | IAM actions required for the RetrieveAndGenerate API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.RetrieveAndGenerateStream">RetrieveAndGenerateStream</a></code> | <code>string[]</code> | IAM actions required for the RetrieveAndGenerateStream API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StartAsyncInvoke">StartAsyncInvoke</a></code> | <code>string[]</code> | IAM actions required for the StartAsyncInvoke API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StartAutomatedReasoningPolicyBuildWorkflow">StartAutomatedReasoningPolicyBuildWorkflow</a></code> | <code>string[]</code> | IAM actions required for the StartAutomatedReasoningPolicyBuildWorkflow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StartAutomatedReasoningPolicyTestWorkflow">StartAutomatedReasoningPolicyTestWorkflow</a></code> | <code>string[]</code> | IAM actions required for the StartAutomatedReasoningPolicyTestWorkflow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StartFlowExecution">StartFlowExecution</a></code> | <code>string[]</code> | IAM actions required for the StartFlowExecution API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StartIngestionJob">StartIngestionJob</a></code> | <code>string[]</code> | IAM actions required for the StartIngestionJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StopAdvancedPromptOptimizationJob">StopAdvancedPromptOptimizationJob</a></code> | <code>string[]</code> | IAM actions required for the StopAdvancedPromptOptimizationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StopEvaluationJob">StopEvaluationJob</a></code> | <code>string[]</code> | IAM actions required for the StopEvaluationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StopFlowExecution">StopFlowExecution</a></code> | <code>string[]</code> | IAM actions required for the StopFlowExecution API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StopIngestionJob">StopIngestionJob</a></code> | <code>string[]</code> | IAM actions required for the StopIngestionJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StopModelCustomizationJob">StopModelCustomizationJob</a></code> | <code>string[]</code> | IAM actions required for the StopModelCustomizationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.StopModelInvocationJob">StopModelInvocationJob</a></code> | <code>string[]</code> | IAM actions required for the StopModelInvocationJob API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAgent">UpdateAgent</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgent API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAgentActionGroup">UpdateAgentActionGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentActionGroup API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAgentAlias">UpdateAgentAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentAlias API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAgentCollaborator">UpdateAgentCollaborator</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentCollaborator API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAgentKnowledgeBase">UpdateAgentKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAutomatedReasoningPolicy">UpdateAutomatedReasoningPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutomatedReasoningPolicy API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAutomatedReasoningPolicyAnnotations">UpdateAutomatedReasoningPolicyAnnotations</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutomatedReasoningPolicyAnnotations API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAutomatedReasoningPolicyTestCase">UpdateAutomatedReasoningPolicyTestCase</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutomatedReasoningPolicyTestCase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateBlueprint">UpdateBlueprint</a></code> | <code>string[]</code> | IAM actions required for the UpdateBlueprint API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateCustomModelDeployment">UpdateCustomModelDeployment</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomModelDeployment API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateDataAutomationLibrary">UpdateDataAutomationLibrary</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataAutomationLibrary API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateDataAutomationProject">UpdateDataAutomationProject</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataAutomationProject API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSource API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateFlow">UpdateFlow</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlow API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateFlowAlias">UpdateFlowAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlowAlias API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateGuardrail">UpdateGuardrail</a></code> | <code>string[]</code> | IAM actions required for the UpdateGuardrail API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateKnowledgeBase">UpdateKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the UpdateKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateMarketplaceModelEndpoint">UpdateMarketplaceModelEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateMarketplaceModelEndpoint API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdatePrompt">UpdatePrompt</a></code> | <code>string[]</code> | IAM actions required for the UpdatePrompt API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateProvisionedModelThroughput">UpdateProvisionedModelThroughput</a></code> | <code>string[]</code> | IAM actions required for the UpdateProvisionedModelThroughput API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateSession">UpdateSession</a></code> | <code>string[]</code> | IAM actions required for the UpdateSession API call. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockOperations.property.ValidateFlowDefinition">ValidateFlowDefinition</a></code> | <code>string[]</code> | IAM actions required for the ValidateFlowDefinition API call. |

---

##### `AgenticRetrieveStream`<sup>Required</sup> <a name="AgenticRetrieveStream" id="@cdk_utils/iam.bedrock.BedrockOperations.property.AgenticRetrieveStream"></a>

```typescript
public readonly AgenticRetrieveStream: string[];
```

- *Type:* string[]

IAM actions required for the AgenticRetrieveStream API call.

---

##### `ApplyGuardrail`<sup>Required</sup> <a name="ApplyGuardrail" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ApplyGuardrail"></a>

```typescript
public readonly ApplyGuardrail: string[];
```

- *Type:* string[]

IAM actions required for the ApplyGuardrail API call.

---

##### `AssociateAgentCollaborator`<sup>Required</sup> <a name="AssociateAgentCollaborator" id="@cdk_utils/iam.bedrock.BedrockOperations.property.AssociateAgentCollaborator"></a>

```typescript
public readonly AssociateAgentCollaborator: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAgentCollaborator API call.

---

##### `AssociateAgentKnowledgeBase`<sup>Required</sup> <a name="AssociateAgentKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.AssociateAgentKnowledgeBase"></a>

```typescript
public readonly AssociateAgentKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAgentKnowledgeBase API call.

---

##### `BatchDeleteAdvancedPromptOptimizationJob`<sup>Required</sup> <a name="BatchDeleteAdvancedPromptOptimizationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.BatchDeleteAdvancedPromptOptimizationJob"></a>

```typescript
public readonly BatchDeleteAdvancedPromptOptimizationJob: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteAdvancedPromptOptimizationJob API call.

---

##### `BatchDeleteEvaluationJob`<sup>Required</sup> <a name="BatchDeleteEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.BatchDeleteEvaluationJob"></a>

```typescript
public readonly BatchDeleteEvaluationJob: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteEvaluationJob API call.

---

##### `CancelAutomatedReasoningPolicyBuildWorkflow`<sup>Required</sup> <a name="CancelAutomatedReasoningPolicyBuildWorkflow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CancelAutomatedReasoningPolicyBuildWorkflow"></a>

```typescript
public readonly CancelAutomatedReasoningPolicyBuildWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the CancelAutomatedReasoningPolicyBuildWorkflow API call.

---

##### `CheckIngestedDocumentAcl`<sup>Required</sup> <a name="CheckIngestedDocumentAcl" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CheckIngestedDocumentAcl"></a>

```typescript
public readonly CheckIngestedDocumentAcl: string[];
```

- *Type:* string[]

IAM actions required for the CheckIngestedDocumentAcl API call.

---

##### `Converse`<sup>Required</sup> <a name="Converse" id="@cdk_utils/iam.bedrock.BedrockOperations.property.Converse"></a>

```typescript
public readonly Converse: string[];
```

- *Type:* string[]

IAM actions required for the Converse API call.

---

##### `ConverseStream`<sup>Required</sup> <a name="ConverseStream" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ConverseStream"></a>

```typescript
public readonly ConverseStream: string[];
```

- *Type:* string[]

IAM actions required for the ConverseStream API call.

---

##### `CopyBlueprintStage`<sup>Required</sup> <a name="CopyBlueprintStage" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CopyBlueprintStage"></a>

```typescript
public readonly CopyBlueprintStage: string[];
```

- *Type:* string[]

IAM actions required for the CopyBlueprintStage API call.

---

##### `CountTokens`<sup>Required</sup> <a name="CountTokens" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CountTokens"></a>

```typescript
public readonly CountTokens: string[];
```

- *Type:* string[]

IAM actions required for the CountTokens API call.

---

##### `CreateAdvancedPromptOptimizationJob`<sup>Required</sup> <a name="CreateAdvancedPromptOptimizationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAdvancedPromptOptimizationJob"></a>

```typescript
public readonly CreateAdvancedPromptOptimizationJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateAdvancedPromptOptimizationJob API call.

---

##### `CreateAgent`<sup>Required</sup> <a name="CreateAgent" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAgent"></a>

```typescript
public readonly CreateAgent: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgent API call.

---

##### `CreateAgentActionGroup`<sup>Required</sup> <a name="CreateAgentActionGroup" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAgentActionGroup"></a>

```typescript
public readonly CreateAgentActionGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgentActionGroup API call.

---

##### `CreateAgentAlias`<sup>Required</sup> <a name="CreateAgentAlias" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAgentAlias"></a>

```typescript
public readonly CreateAgentAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgentAlias API call.

---

##### `CreateAutomatedReasoningPolicy`<sup>Required</sup> <a name="CreateAutomatedReasoningPolicy" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAutomatedReasoningPolicy"></a>

```typescript
public readonly CreateAutomatedReasoningPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutomatedReasoningPolicy API call.

---

##### `CreateAutomatedReasoningPolicyTestCase`<sup>Required</sup> <a name="CreateAutomatedReasoningPolicyTestCase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAutomatedReasoningPolicyTestCase"></a>

```typescript
public readonly CreateAutomatedReasoningPolicyTestCase: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutomatedReasoningPolicyTestCase API call.

---

##### `CreateAutomatedReasoningPolicyVersion`<sup>Required</sup> <a name="CreateAutomatedReasoningPolicyVersion" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateAutomatedReasoningPolicyVersion"></a>

```typescript
public readonly CreateAutomatedReasoningPolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutomatedReasoningPolicyVersion API call.

---

##### `CreateBlueprint`<sup>Required</sup> <a name="CreateBlueprint" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateBlueprint"></a>

```typescript
public readonly CreateBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the CreateBlueprint API call.

---

##### `CreateBlueprintVersion`<sup>Required</sup> <a name="CreateBlueprintVersion" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateBlueprintVersion"></a>

```typescript
public readonly CreateBlueprintVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateBlueprintVersion API call.

---

##### `CreateCustomModel`<sup>Required</sup> <a name="CreateCustomModel" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateCustomModel"></a>

```typescript
public readonly CreateCustomModel: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomModel API call.

---

##### `CreateCustomModelDeployment`<sup>Required</sup> <a name="CreateCustomModelDeployment" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateCustomModelDeployment"></a>

```typescript
public readonly CreateCustomModelDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomModelDeployment API call.

---

##### `CreateDataAutomationLibrary`<sup>Required</sup> <a name="CreateDataAutomationLibrary" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateDataAutomationLibrary"></a>

```typescript
public readonly CreateDataAutomationLibrary: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataAutomationLibrary API call.

---

##### `CreateDataAutomationProject`<sup>Required</sup> <a name="CreateDataAutomationProject" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateDataAutomationProject"></a>

```typescript
public readonly CreateDataAutomationProject: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataAutomationProject API call.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSource API call.

---

##### `CreateEvaluationJob`<sup>Required</sup> <a name="CreateEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateEvaluationJob"></a>

```typescript
public readonly CreateEvaluationJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateEvaluationJob API call.

---

##### `CreateFlow`<sup>Required</sup> <a name="CreateFlow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateFlow"></a>

```typescript
public readonly CreateFlow: string[];
```

- *Type:* string[]

IAM actions required for the CreateFlow API call.

---

##### `CreateFlowAlias`<sup>Required</sup> <a name="CreateFlowAlias" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateFlowAlias"></a>

```typescript
public readonly CreateFlowAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateFlowAlias API call.

---

##### `CreateFlowVersion`<sup>Required</sup> <a name="CreateFlowVersion" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateFlowVersion"></a>

```typescript
public readonly CreateFlowVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateFlowVersion API call.

---

##### `CreateFoundationModelAgreement`<sup>Required</sup> <a name="CreateFoundationModelAgreement" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateFoundationModelAgreement"></a>

```typescript
public readonly CreateFoundationModelAgreement: string[];
```

- *Type:* string[]

IAM actions required for the CreateFoundationModelAgreement API call.

---

##### `CreateGuardrail`<sup>Required</sup> <a name="CreateGuardrail" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateGuardrail"></a>

```typescript
public readonly CreateGuardrail: string[];
```

- *Type:* string[]

IAM actions required for the CreateGuardrail API call.

---

##### `CreateGuardrailVersion`<sup>Required</sup> <a name="CreateGuardrailVersion" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateGuardrailVersion"></a>

```typescript
public readonly CreateGuardrailVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateGuardrailVersion API call.

---

##### `CreateInferenceProfile`<sup>Required</sup> <a name="CreateInferenceProfile" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateInferenceProfile"></a>

```typescript
public readonly CreateInferenceProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateInferenceProfile API call.

---

##### `CreateInvocation`<sup>Required</sup> <a name="CreateInvocation" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateInvocation"></a>

```typescript
public readonly CreateInvocation: string[];
```

- *Type:* string[]

IAM actions required for the CreateInvocation API call.

---

##### `CreateKnowledgeBase`<sup>Required</sup> <a name="CreateKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateKnowledgeBase"></a>

```typescript
public readonly CreateKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the CreateKnowledgeBase API call.

---

##### `CreateMarketplaceModelEndpoint`<sup>Required</sup> <a name="CreateMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateMarketplaceModelEndpoint"></a>

```typescript
public readonly CreateMarketplaceModelEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateMarketplaceModelEndpoint API call.

---

##### `CreateModelCopyJob`<sup>Required</sup> <a name="CreateModelCopyJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateModelCopyJob"></a>

```typescript
public readonly CreateModelCopyJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateModelCopyJob API call.

---

##### `CreateModelCustomizationJob`<sup>Required</sup> <a name="CreateModelCustomizationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateModelCustomizationJob"></a>

```typescript
public readonly CreateModelCustomizationJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateModelCustomizationJob API call.

---

##### `CreateModelImportJob`<sup>Required</sup> <a name="CreateModelImportJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateModelImportJob"></a>

```typescript
public readonly CreateModelImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateModelImportJob API call.

---

##### `CreateModelInvocationJob`<sup>Required</sup> <a name="CreateModelInvocationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateModelInvocationJob"></a>

```typescript
public readonly CreateModelInvocationJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateModelInvocationJob API call.

---

##### `CreatePrompt`<sup>Required</sup> <a name="CreatePrompt" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreatePrompt"></a>

```typescript
public readonly CreatePrompt: string[];
```

- *Type:* string[]

IAM actions required for the CreatePrompt API call.

---

##### `CreatePromptRouter`<sup>Required</sup> <a name="CreatePromptRouter" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreatePromptRouter"></a>

```typescript
public readonly CreatePromptRouter: string[];
```

- *Type:* string[]

IAM actions required for the CreatePromptRouter API call.

---

##### `CreatePromptVersion`<sup>Required</sup> <a name="CreatePromptVersion" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreatePromptVersion"></a>

```typescript
public readonly CreatePromptVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreatePromptVersion API call.

---

##### `CreateProvisionedModelThroughput`<sup>Required</sup> <a name="CreateProvisionedModelThroughput" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateProvisionedModelThroughput"></a>

```typescript
public readonly CreateProvisionedModelThroughput: string[];
```

- *Type:* string[]

IAM actions required for the CreateProvisionedModelThroughput API call.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.bedrock.BedrockOperations.property.CreateSession"></a>

```typescript
public readonly CreateSession: string[];
```

- *Type:* string[]

IAM actions required for the CreateSession API call.

---

##### `DeleteAgent`<sup>Required</sup> <a name="DeleteAgent" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAgent"></a>

```typescript
public readonly DeleteAgent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgent API call.

---

##### `DeleteAgentActionGroup`<sup>Required</sup> <a name="DeleteAgentActionGroup" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAgentActionGroup"></a>

```typescript
public readonly DeleteAgentActionGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentActionGroup API call.

---

##### `DeleteAgentAlias`<sup>Required</sup> <a name="DeleteAgentAlias" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAgentAlias"></a>

```typescript
public readonly DeleteAgentAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentAlias API call.

---

##### `DeleteAgentMemory`<sup>Required</sup> <a name="DeleteAgentMemory" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAgentMemory"></a>

```typescript
public readonly DeleteAgentMemory: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentMemory API call.

---

##### `DeleteAgentVersion`<sup>Required</sup> <a name="DeleteAgentVersion" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAgentVersion"></a>

```typescript
public readonly DeleteAgentVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentVersion API call.

---

##### `DeleteAutomatedReasoningPolicy`<sup>Required</sup> <a name="DeleteAutomatedReasoningPolicy" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAutomatedReasoningPolicy"></a>

```typescript
public readonly DeleteAutomatedReasoningPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutomatedReasoningPolicy API call.

---

##### `DeleteAutomatedReasoningPolicyBuildWorkflow`<sup>Required</sup> <a name="DeleteAutomatedReasoningPolicyBuildWorkflow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAutomatedReasoningPolicyBuildWorkflow"></a>

```typescript
public readonly DeleteAutomatedReasoningPolicyBuildWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutomatedReasoningPolicyBuildWorkflow API call.

---

##### `DeleteAutomatedReasoningPolicyTestCase`<sup>Required</sup> <a name="DeleteAutomatedReasoningPolicyTestCase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteAutomatedReasoningPolicyTestCase"></a>

```typescript
public readonly DeleteAutomatedReasoningPolicyTestCase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutomatedReasoningPolicyTestCase API call.

---

##### `DeleteBlueprint`<sup>Required</sup> <a name="DeleteBlueprint" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteBlueprint"></a>

```typescript
public readonly DeleteBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBlueprint API call.

---

##### `DeleteCustomModel`<sup>Required</sup> <a name="DeleteCustomModel" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteCustomModel"></a>

```typescript
public readonly DeleteCustomModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomModel API call.

---

##### `DeleteCustomModelDeployment`<sup>Required</sup> <a name="DeleteCustomModelDeployment" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteCustomModelDeployment"></a>

```typescript
public readonly DeleteCustomModelDeployment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomModelDeployment API call.

---

##### `DeleteDataAutomationLibrary`<sup>Required</sup> <a name="DeleteDataAutomationLibrary" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteDataAutomationLibrary"></a>

```typescript
public readonly DeleteDataAutomationLibrary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataAutomationLibrary API call.

---

##### `DeleteDataAutomationProject`<sup>Required</sup> <a name="DeleteDataAutomationProject" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteDataAutomationProject"></a>

```typescript
public readonly DeleteDataAutomationProject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataAutomationProject API call.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSource API call.

---

##### `DeleteEnforcedGuardrailConfiguration`<sup>Required</sup> <a name="DeleteEnforcedGuardrailConfiguration" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteEnforcedGuardrailConfiguration"></a>

```typescript
public readonly DeleteEnforcedGuardrailConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnforcedGuardrailConfiguration API call.

---

##### `DeleteFlow`<sup>Required</sup> <a name="DeleteFlow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteFlow"></a>

```typescript
public readonly DeleteFlow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFlow API call.

---

##### `DeleteFlowAlias`<sup>Required</sup> <a name="DeleteFlowAlias" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteFlowAlias"></a>

```typescript
public readonly DeleteFlowAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFlowAlias API call.

---

##### `DeleteFlowVersion`<sup>Required</sup> <a name="DeleteFlowVersion" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteFlowVersion"></a>

```typescript
public readonly DeleteFlowVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFlowVersion API call.

---

##### `DeleteFoundationModelAgreement`<sup>Required</sup> <a name="DeleteFoundationModelAgreement" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteFoundationModelAgreement"></a>

```typescript
public readonly DeleteFoundationModelAgreement: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFoundationModelAgreement API call.

---

##### `DeleteGuardrail`<sup>Required</sup> <a name="DeleteGuardrail" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteGuardrail"></a>

```typescript
public readonly DeleteGuardrail: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGuardrail API call.

---

##### `DeleteImportedModel`<sup>Required</sup> <a name="DeleteImportedModel" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteImportedModel"></a>

```typescript
public readonly DeleteImportedModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImportedModel API call.

---

##### `DeleteInferenceProfile`<sup>Required</sup> <a name="DeleteInferenceProfile" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteInferenceProfile"></a>

```typescript
public readonly DeleteInferenceProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInferenceProfile API call.

---

##### `DeleteKnowledgeBase`<sup>Required</sup> <a name="DeleteKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteKnowledgeBase"></a>

```typescript
public readonly DeleteKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKnowledgeBase API call.

---

##### `DeleteKnowledgeBaseDocuments`<sup>Required</sup> <a name="DeleteKnowledgeBaseDocuments" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteKnowledgeBaseDocuments"></a>

```typescript
public readonly DeleteKnowledgeBaseDocuments: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKnowledgeBaseDocuments API call.

---

##### `DeleteMarketplaceModelEndpoint`<sup>Required</sup> <a name="DeleteMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteMarketplaceModelEndpoint"></a>

```typescript
public readonly DeleteMarketplaceModelEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMarketplaceModelEndpoint API call.

---

##### `DeleteModelInvocationLoggingConfiguration`<sup>Required</sup> <a name="DeleteModelInvocationLoggingConfiguration" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteModelInvocationLoggingConfiguration"></a>

```typescript
public readonly DeleteModelInvocationLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteModelInvocationLoggingConfiguration API call.

---

##### `DeletePrompt`<sup>Required</sup> <a name="DeletePrompt" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeletePrompt"></a>

```typescript
public readonly DeletePrompt: string[];
```

- *Type:* string[]

IAM actions required for the DeletePrompt API call.

---

##### `DeletePromptRouter`<sup>Required</sup> <a name="DeletePromptRouter" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeletePromptRouter"></a>

```typescript
public readonly DeletePromptRouter: string[];
```

- *Type:* string[]

IAM actions required for the DeletePromptRouter API call.

---

##### `DeleteProvisionedModelThroughput`<sup>Required</sup> <a name="DeleteProvisionedModelThroughput" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteProvisionedModelThroughput"></a>

```typescript
public readonly DeleteProvisionedModelThroughput: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProvisionedModelThroughput API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteSession`<sup>Required</sup> <a name="DeleteSession" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeleteSession"></a>

```typescript
public readonly DeleteSession: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSession API call.

---

##### `DeregisterMarketplaceModelEndpoint`<sup>Required</sup> <a name="DeregisterMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DeregisterMarketplaceModelEndpoint"></a>

```typescript
public readonly DeregisterMarketplaceModelEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterMarketplaceModelEndpoint API call.

---

##### `DisassociateAgentCollaborator`<sup>Required</sup> <a name="DisassociateAgentCollaborator" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DisassociateAgentCollaborator"></a>

```typescript
public readonly DisassociateAgentCollaborator: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAgentCollaborator API call.

---

##### `DisassociateAgentKnowledgeBase`<sup>Required</sup> <a name="DisassociateAgentKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.DisassociateAgentKnowledgeBase"></a>

```typescript
public readonly DisassociateAgentKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAgentKnowledgeBase API call.

---

##### `EndSession`<sup>Required</sup> <a name="EndSession" id="@cdk_utils/iam.bedrock.BedrockOperations.property.EndSession"></a>

```typescript
public readonly EndSession: string[];
```

- *Type:* string[]

IAM actions required for the EndSession API call.

---

##### `ExportAutomatedReasoningPolicyVersion`<sup>Required</sup> <a name="ExportAutomatedReasoningPolicyVersion" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ExportAutomatedReasoningPolicyVersion"></a>

```typescript
public readonly ExportAutomatedReasoningPolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the ExportAutomatedReasoningPolicyVersion API call.

---

##### `GenerateQuery`<sup>Required</sup> <a name="GenerateQuery" id="@cdk_utils/iam.bedrock.BedrockOperations.property.GenerateQuery"></a>

```typescript
public readonly GenerateQuery: string[];
```

- *Type:* string[]

IAM actions required for the GenerateQuery API call.

---

##### `IngestKnowledgeBaseDocuments`<sup>Required</sup> <a name="IngestKnowledgeBaseDocuments" id="@cdk_utils/iam.bedrock.BedrockOperations.property.IngestKnowledgeBaseDocuments"></a>

```typescript
public readonly IngestKnowledgeBaseDocuments: string[];
```

- *Type:* string[]

IAM actions required for the IngestKnowledgeBaseDocuments API call.

---

##### `InvokeAgent`<sup>Required</sup> <a name="InvokeAgent" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeAgent"></a>

```typescript
public readonly InvokeAgent: string[];
```

- *Type:* string[]

IAM actions required for the InvokeAgent API call.

---

##### `InvokeBlueprintOptimizationAsync`<sup>Required</sup> <a name="InvokeBlueprintOptimizationAsync" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeBlueprintOptimizationAsync"></a>

```typescript
public readonly InvokeBlueprintOptimizationAsync: string[];
```

- *Type:* string[]

IAM actions required for the InvokeBlueprintOptimizationAsync API call.

---

##### `InvokeDataAutomation`<sup>Required</sup> <a name="InvokeDataAutomation" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeDataAutomation"></a>

```typescript
public readonly InvokeDataAutomation: string[];
```

- *Type:* string[]

IAM actions required for the InvokeDataAutomation API call.

---

##### `InvokeDataAutomationAsync`<sup>Required</sup> <a name="InvokeDataAutomationAsync" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeDataAutomationAsync"></a>

```typescript
public readonly InvokeDataAutomationAsync: string[];
```

- *Type:* string[]

IAM actions required for the InvokeDataAutomationAsync API call.

---

##### `InvokeDataAutomationLibraryIngestionJob`<sup>Required</sup> <a name="InvokeDataAutomationLibraryIngestionJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeDataAutomationLibraryIngestionJob"></a>

```typescript
public readonly InvokeDataAutomationLibraryIngestionJob: string[];
```

- *Type:* string[]

IAM actions required for the InvokeDataAutomationLibraryIngestionJob API call.

---

##### `InvokeFlow`<sup>Required</sup> <a name="InvokeFlow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeFlow"></a>

```typescript
public readonly InvokeFlow: string[];
```

- *Type:* string[]

IAM actions required for the InvokeFlow API call.

---

##### `InvokeGuardrailChecks`<sup>Required</sup> <a name="InvokeGuardrailChecks" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeGuardrailChecks"></a>

```typescript
public readonly InvokeGuardrailChecks: string[];
```

- *Type:* string[]

IAM actions required for the InvokeGuardrailChecks API call.

---

##### `InvokeInlineAgent`<sup>Required</sup> <a name="InvokeInlineAgent" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeInlineAgent"></a>

```typescript
public readonly InvokeInlineAgent: string[];
```

- *Type:* string[]

IAM actions required for the InvokeInlineAgent API call.

---

##### `InvokeModel`<sup>Required</sup> <a name="InvokeModel" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeModel"></a>

```typescript
public readonly InvokeModel: string[];
```

- *Type:* string[]

IAM actions required for the InvokeModel API call.

---

##### `InvokeModelWithBidirectionalStream`<sup>Required</sup> <a name="InvokeModelWithBidirectionalStream" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeModelWithBidirectionalStream"></a>

```typescript
public readonly InvokeModelWithBidirectionalStream: string[];
```

- *Type:* string[]

IAM actions required for the InvokeModelWithBidirectionalStream API call.

---

##### `InvokeModelWithResponseStream`<sup>Required</sup> <a name="InvokeModelWithResponseStream" id="@cdk_utils/iam.bedrock.BedrockOperations.property.InvokeModelWithResponseStream"></a>

```typescript
public readonly InvokeModelWithResponseStream: string[];
```

- *Type:* string[]

IAM actions required for the InvokeModelWithResponseStream API call.

---

##### `ListAdvancedPromptOptimizationJobs`<sup>Required</sup> <a name="ListAdvancedPromptOptimizationJobs" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAdvancedPromptOptimizationJobs"></a>

```typescript
public readonly ListAdvancedPromptOptimizationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListAdvancedPromptOptimizationJobs API call.

---

##### `ListAgentActionGroups`<sup>Required</sup> <a name="ListAgentActionGroups" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgentActionGroups"></a>

```typescript
public readonly ListAgentActionGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentActionGroups API call.

---

##### `ListAgentAliases`<sup>Required</sup> <a name="ListAgentAliases" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgentAliases"></a>

```typescript
public readonly ListAgentAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentAliases API call.

---

##### `ListAgentCollaborators`<sup>Required</sup> <a name="ListAgentCollaborators" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgentCollaborators"></a>

```typescript
public readonly ListAgentCollaborators: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentCollaborators API call.

---

##### `ListAgentKnowledgeBases`<sup>Required</sup> <a name="ListAgentKnowledgeBases" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgentKnowledgeBases"></a>

```typescript
public readonly ListAgentKnowledgeBases: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentKnowledgeBases API call.

---

##### `ListAgents`<sup>Required</sup> <a name="ListAgents" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgents"></a>

```typescript
public readonly ListAgents: string[];
```

- *Type:* string[]

IAM actions required for the ListAgents API call.

---

##### `ListAgentVersions`<sup>Required</sup> <a name="ListAgentVersions" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAgentVersions"></a>

```typescript
public readonly ListAgentVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentVersions API call.

---

##### `ListAsyncInvokes`<sup>Required</sup> <a name="ListAsyncInvokes" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAsyncInvokes"></a>

```typescript
public readonly ListAsyncInvokes: string[];
```

- *Type:* string[]

IAM actions required for the ListAsyncInvokes API call.

---

##### `ListAutomatedReasoningPolicies`<sup>Required</sup> <a name="ListAutomatedReasoningPolicies" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAutomatedReasoningPolicies"></a>

```typescript
public readonly ListAutomatedReasoningPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomatedReasoningPolicies API call.

---

##### `ListAutomatedReasoningPolicyBuildWorkflows`<sup>Required</sup> <a name="ListAutomatedReasoningPolicyBuildWorkflows" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAutomatedReasoningPolicyBuildWorkflows"></a>

```typescript
public readonly ListAutomatedReasoningPolicyBuildWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomatedReasoningPolicyBuildWorkflows API call.

---

##### `ListAutomatedReasoningPolicyTestCases`<sup>Required</sup> <a name="ListAutomatedReasoningPolicyTestCases" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAutomatedReasoningPolicyTestCases"></a>

```typescript
public readonly ListAutomatedReasoningPolicyTestCases: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomatedReasoningPolicyTestCases API call.

---

##### `ListAutomatedReasoningPolicyTestResults`<sup>Required</sup> <a name="ListAutomatedReasoningPolicyTestResults" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListAutomatedReasoningPolicyTestResults"></a>

```typescript
public readonly ListAutomatedReasoningPolicyTestResults: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomatedReasoningPolicyTestResults API call.

---

##### `ListBlueprints`<sup>Required</sup> <a name="ListBlueprints" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListBlueprints"></a>

```typescript
public readonly ListBlueprints: string[];
```

- *Type:* string[]

IAM actions required for the ListBlueprints API call.

---

##### `ListCustomModelDeployments`<sup>Required</sup> <a name="ListCustomModelDeployments" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListCustomModelDeployments"></a>

```typescript
public readonly ListCustomModelDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomModelDeployments API call.

---

##### `ListCustomModels`<sup>Required</sup> <a name="ListCustomModels" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListCustomModels"></a>

```typescript
public readonly ListCustomModels: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomModels API call.

---

##### `ListDataAutomationLibraries`<sup>Required</sup> <a name="ListDataAutomationLibraries" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListDataAutomationLibraries"></a>

```typescript
public readonly ListDataAutomationLibraries: string[];
```

- *Type:* string[]

IAM actions required for the ListDataAutomationLibraries API call.

---

##### `ListDataAutomationLibraryEntities`<sup>Required</sup> <a name="ListDataAutomationLibraryEntities" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListDataAutomationLibraryEntities"></a>

```typescript
public readonly ListDataAutomationLibraryEntities: string[];
```

- *Type:* string[]

IAM actions required for the ListDataAutomationLibraryEntities API call.

---

##### `ListDataAutomationLibraryIngestionJobs`<sup>Required</sup> <a name="ListDataAutomationLibraryIngestionJobs" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListDataAutomationLibraryIngestionJobs"></a>

```typescript
public readonly ListDataAutomationLibraryIngestionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDataAutomationLibraryIngestionJobs API call.

---

##### `ListDataAutomationProjects`<sup>Required</sup> <a name="ListDataAutomationProjects" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListDataAutomationProjects"></a>

```typescript
public readonly ListDataAutomationProjects: string[];
```

- *Type:* string[]

IAM actions required for the ListDataAutomationProjects API call.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSources API call.

---

##### `ListEnforcedGuardrailsConfiguration`<sup>Required</sup> <a name="ListEnforcedGuardrailsConfiguration" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListEnforcedGuardrailsConfiguration"></a>

```typescript
public readonly ListEnforcedGuardrailsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ListEnforcedGuardrailsConfiguration API call.

---

##### `ListEvaluationJobs`<sup>Required</sup> <a name="ListEvaluationJobs" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListEvaluationJobs"></a>

```typescript
public readonly ListEvaluationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListEvaluationJobs API call.

---

##### `ListFlowAliases`<sup>Required</sup> <a name="ListFlowAliases" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListFlowAliases"></a>

```typescript
public readonly ListFlowAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListFlowAliases API call.

---

##### `ListFlowExecutionEvents`<sup>Required</sup> <a name="ListFlowExecutionEvents" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListFlowExecutionEvents"></a>

```typescript
public readonly ListFlowExecutionEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListFlowExecutionEvents API call.

---

##### `ListFlowExecutions`<sup>Required</sup> <a name="ListFlowExecutions" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListFlowExecutions"></a>

```typescript
public readonly ListFlowExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListFlowExecutions API call.

---

##### `ListFlows`<sup>Required</sup> <a name="ListFlows" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListFlows"></a>

```typescript
public readonly ListFlows: string[];
```

- *Type:* string[]

IAM actions required for the ListFlows API call.

---

##### `ListFlowVersions`<sup>Required</sup> <a name="ListFlowVersions" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListFlowVersions"></a>

```typescript
public readonly ListFlowVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListFlowVersions API call.

---

##### `ListFoundationModelAgreementOffers`<sup>Required</sup> <a name="ListFoundationModelAgreementOffers" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListFoundationModelAgreementOffers"></a>

```typescript
public readonly ListFoundationModelAgreementOffers: string[];
```

- *Type:* string[]

IAM actions required for the ListFoundationModelAgreementOffers API call.

---

##### `ListFoundationModels`<sup>Required</sup> <a name="ListFoundationModels" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListFoundationModels"></a>

```typescript
public readonly ListFoundationModels: string[];
```

- *Type:* string[]

IAM actions required for the ListFoundationModels API call.

---

##### `ListGuardrails`<sup>Required</sup> <a name="ListGuardrails" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListGuardrails"></a>

```typescript
public readonly ListGuardrails: string[];
```

- *Type:* string[]

IAM actions required for the ListGuardrails API call.

---

##### `ListImportedModels`<sup>Required</sup> <a name="ListImportedModels" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListImportedModels"></a>

```typescript
public readonly ListImportedModels: string[];
```

- *Type:* string[]

IAM actions required for the ListImportedModels API call.

---

##### `ListInferenceProfiles`<sup>Required</sup> <a name="ListInferenceProfiles" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListInferenceProfiles"></a>

```typescript
public readonly ListInferenceProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListInferenceProfiles API call.

---

##### `ListIngestionJobs`<sup>Required</sup> <a name="ListIngestionJobs" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListIngestionJobs"></a>

```typescript
public readonly ListIngestionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListIngestionJobs API call.

---

##### `ListInvocations`<sup>Required</sup> <a name="ListInvocations" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListInvocations"></a>

```typescript
public readonly ListInvocations: string[];
```

- *Type:* string[]

IAM actions required for the ListInvocations API call.

---

##### `ListInvocationSteps`<sup>Required</sup> <a name="ListInvocationSteps" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListInvocationSteps"></a>

```typescript
public readonly ListInvocationSteps: string[];
```

- *Type:* string[]

IAM actions required for the ListInvocationSteps API call.

---

##### `ListKnowledgeBaseDocuments`<sup>Required</sup> <a name="ListKnowledgeBaseDocuments" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListKnowledgeBaseDocuments"></a>

```typescript
public readonly ListKnowledgeBaseDocuments: string[];
```

- *Type:* string[]

IAM actions required for the ListKnowledgeBaseDocuments API call.

---

##### `ListKnowledgeBases`<sup>Required</sup> <a name="ListKnowledgeBases" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListKnowledgeBases"></a>

```typescript
public readonly ListKnowledgeBases: string[];
```

- *Type:* string[]

IAM actions required for the ListKnowledgeBases API call.

---

##### `ListMarketplaceModelEndpoints`<sup>Required</sup> <a name="ListMarketplaceModelEndpoints" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListMarketplaceModelEndpoints"></a>

```typescript
public readonly ListMarketplaceModelEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListMarketplaceModelEndpoints API call.

---

##### `ListModelCopyJobs`<sup>Required</sup> <a name="ListModelCopyJobs" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListModelCopyJobs"></a>

```typescript
public readonly ListModelCopyJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListModelCopyJobs API call.

---

##### `ListModelCustomizationJobs`<sup>Required</sup> <a name="ListModelCustomizationJobs" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListModelCustomizationJobs"></a>

```typescript
public readonly ListModelCustomizationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListModelCustomizationJobs API call.

---

##### `ListModelImportJobs`<sup>Required</sup> <a name="ListModelImportJobs" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListModelImportJobs"></a>

```typescript
public readonly ListModelImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListModelImportJobs API call.

---

##### `ListModelInvocationJobs`<sup>Required</sup> <a name="ListModelInvocationJobs" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListModelInvocationJobs"></a>

```typescript
public readonly ListModelInvocationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListModelInvocationJobs API call.

---

##### `ListPromptRouters`<sup>Required</sup> <a name="ListPromptRouters" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListPromptRouters"></a>

```typescript
public readonly ListPromptRouters: string[];
```

- *Type:* string[]

IAM actions required for the ListPromptRouters API call.

---

##### `ListPrompts`<sup>Required</sup> <a name="ListPrompts" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListPrompts"></a>

```typescript
public readonly ListPrompts: string[];
```

- *Type:* string[]

IAM actions required for the ListPrompts API call.

---

##### `ListProvisionedModelThroughputs`<sup>Required</sup> <a name="ListProvisionedModelThroughputs" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListProvisionedModelThroughputs"></a>

```typescript
public readonly ListProvisionedModelThroughputs: string[];
```

- *Type:* string[]

IAM actions required for the ListProvisionedModelThroughputs API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccountDataRetention`<sup>Required</sup> <a name="opGetAccountDataRetention" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAccountDataRetention"></a>

```typescript
public readonly opGetAccountDataRetention: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountDataRetention API call.

---

##### `opGetAdvancedPromptOptimizationJob`<sup>Required</sup> <a name="opGetAdvancedPromptOptimizationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAdvancedPromptOptimizationJob"></a>

```typescript
public readonly opGetAdvancedPromptOptimizationJob: string[];
```

- *Type:* string[]

IAM actions required for the GetAdvancedPromptOptimizationJob API call.

---

##### `opGetAgent`<sup>Required</sup> <a name="opGetAgent" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgent"></a>

```typescript
public readonly opGetAgent: string[];
```

- *Type:* string[]

IAM actions required for the GetAgent API call.

---

##### `opGetAgentActionGroup`<sup>Required</sup> <a name="opGetAgentActionGroup" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentActionGroup"></a>

```typescript
public readonly opGetAgentActionGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentActionGroup API call.

---

##### `opGetAgentAlias`<sup>Required</sup> <a name="opGetAgentAlias" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentAlias"></a>

```typescript
public readonly opGetAgentAlias: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentAlias API call.

---

##### `opGetAgentCollaborator`<sup>Required</sup> <a name="opGetAgentCollaborator" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentCollaborator"></a>

```typescript
public readonly opGetAgentCollaborator: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentCollaborator API call.

---

##### `opGetAgentKnowledgeBase`<sup>Required</sup> <a name="opGetAgentKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentKnowledgeBase"></a>

```typescript
public readonly opGetAgentKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentKnowledgeBase API call.

---

##### `opGetAgentMemory`<sup>Required</sup> <a name="opGetAgentMemory" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentMemory"></a>

```typescript
public readonly opGetAgentMemory: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentMemory API call.

---

##### `opGetAgentVersion`<sup>Required</sup> <a name="opGetAgentVersion" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAgentVersion"></a>

```typescript
public readonly opGetAgentVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentVersion API call.

---

##### `opGetAsyncInvoke`<sup>Required</sup> <a name="opGetAsyncInvoke" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAsyncInvoke"></a>

```typescript
public readonly opGetAsyncInvoke: string[];
```

- *Type:* string[]

IAM actions required for the GetAsyncInvoke API call.

---

##### `opGetAutomatedReasoningPolicy`<sup>Required</sup> <a name="opGetAutomatedReasoningPolicy" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicy"></a>

```typescript
public readonly opGetAutomatedReasoningPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomatedReasoningPolicy API call.

---

##### `opGetAutomatedReasoningPolicyAnnotations`<sup>Required</sup> <a name="opGetAutomatedReasoningPolicyAnnotations" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyAnnotations"></a>

```typescript
public readonly opGetAutomatedReasoningPolicyAnnotations: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomatedReasoningPolicyAnnotations API call.

---

##### `opGetAutomatedReasoningPolicyBuildWorkflow`<sup>Required</sup> <a name="opGetAutomatedReasoningPolicyBuildWorkflow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyBuildWorkflow"></a>

```typescript
public readonly opGetAutomatedReasoningPolicyBuildWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomatedReasoningPolicyBuildWorkflow API call.

---

##### `opGetAutomatedReasoningPolicyBuildWorkflowResultAssets`<sup>Required</sup> <a name="opGetAutomatedReasoningPolicyBuildWorkflowResultAssets" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyBuildWorkflowResultAssets"></a>

```typescript
public readonly opGetAutomatedReasoningPolicyBuildWorkflowResultAssets: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomatedReasoningPolicyBuildWorkflowResultAssets API call.

---

##### `opGetAutomatedReasoningPolicyNextScenario`<sup>Required</sup> <a name="opGetAutomatedReasoningPolicyNextScenario" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyNextScenario"></a>

```typescript
public readonly opGetAutomatedReasoningPolicyNextScenario: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomatedReasoningPolicyNextScenario API call.

---

##### `opGetAutomatedReasoningPolicyTestCase`<sup>Required</sup> <a name="opGetAutomatedReasoningPolicyTestCase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyTestCase"></a>

```typescript
public readonly opGetAutomatedReasoningPolicyTestCase: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomatedReasoningPolicyTestCase API call.

---

##### `opGetAutomatedReasoningPolicyTestResult`<sup>Required</sup> <a name="opGetAutomatedReasoningPolicyTestResult" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetAutomatedReasoningPolicyTestResult"></a>

```typescript
public readonly opGetAutomatedReasoningPolicyTestResult: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomatedReasoningPolicyTestResult API call.

---

##### `opGetBlueprint`<sup>Required</sup> <a name="opGetBlueprint" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetBlueprint"></a>

```typescript
public readonly opGetBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the GetBlueprint API call.

---

##### `opGetBlueprintOptimizationStatus`<sup>Required</sup> <a name="opGetBlueprintOptimizationStatus" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetBlueprintOptimizationStatus"></a>

```typescript
public readonly opGetBlueprintOptimizationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetBlueprintOptimizationStatus API call.

---

##### `opGetCustomModel`<sup>Required</sup> <a name="opGetCustomModel" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetCustomModel"></a>

```typescript
public readonly opGetCustomModel: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomModel API call.

---

##### `opGetCustomModelDeployment`<sup>Required</sup> <a name="opGetCustomModelDeployment" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetCustomModelDeployment"></a>

```typescript
public readonly opGetCustomModelDeployment: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomModelDeployment API call.

---

##### `opGetDataAutomationLibrary`<sup>Required</sup> <a name="opGetDataAutomationLibrary" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataAutomationLibrary"></a>

```typescript
public readonly opGetDataAutomationLibrary: string[];
```

- *Type:* string[]

IAM actions required for the GetDataAutomationLibrary API call.

---

##### `opGetDataAutomationLibraryEntity`<sup>Required</sup> <a name="opGetDataAutomationLibraryEntity" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataAutomationLibraryEntity"></a>

```typescript
public readonly opGetDataAutomationLibraryEntity: string[];
```

- *Type:* string[]

IAM actions required for the GetDataAutomationLibraryEntity API call.

---

##### `opGetDataAutomationLibraryIngestionJob`<sup>Required</sup> <a name="opGetDataAutomationLibraryIngestionJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataAutomationLibraryIngestionJob"></a>

```typescript
public readonly opGetDataAutomationLibraryIngestionJob: string[];
```

- *Type:* string[]

IAM actions required for the GetDataAutomationLibraryIngestionJob API call.

---

##### `opGetDataAutomationProject`<sup>Required</sup> <a name="opGetDataAutomationProject" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataAutomationProject"></a>

```typescript
public readonly opGetDataAutomationProject: string[];
```

- *Type:* string[]

IAM actions required for the GetDataAutomationProject API call.

---

##### `opGetDataAutomationStatus`<sup>Required</sup> <a name="opGetDataAutomationStatus" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataAutomationStatus"></a>

```typescript
public readonly opGetDataAutomationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetDataAutomationStatus API call.

---

##### `opGetDataSource`<sup>Required</sup> <a name="opGetDataSource" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDataSource"></a>

```typescript
public readonly opGetDataSource: string[];
```

- *Type:* string[]

IAM actions required for the GetDataSource API call.

---

##### `opGetDocumentContent`<sup>Required</sup> <a name="opGetDocumentContent" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetDocumentContent"></a>

```typescript
public readonly opGetDocumentContent: string[];
```

- *Type:* string[]

IAM actions required for the GetDocumentContent API call.

---

##### `opGetEvaluationJob`<sup>Required</sup> <a name="opGetEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetEvaluationJob"></a>

```typescript
public readonly opGetEvaluationJob: string[];
```

- *Type:* string[]

IAM actions required for the GetEvaluationJob API call.

---

##### `opGetExecutionFlowSnapshot`<sup>Required</sup> <a name="opGetExecutionFlowSnapshot" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetExecutionFlowSnapshot"></a>

```typescript
public readonly opGetExecutionFlowSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the GetExecutionFlowSnapshot API call.

---

##### `opGetFlow`<sup>Required</sup> <a name="opGetFlow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFlow"></a>

```typescript
public readonly opGetFlow: string[];
```

- *Type:* string[]

IAM actions required for the GetFlow API call.

---

##### `opGetFlowAlias`<sup>Required</sup> <a name="opGetFlowAlias" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFlowAlias"></a>

```typescript
public readonly opGetFlowAlias: string[];
```

- *Type:* string[]

IAM actions required for the GetFlowAlias API call.

---

##### `opGetFlowExecution`<sup>Required</sup> <a name="opGetFlowExecution" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFlowExecution"></a>

```typescript
public readonly opGetFlowExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetFlowExecution API call.

---

##### `opGetFlowVersion`<sup>Required</sup> <a name="opGetFlowVersion" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFlowVersion"></a>

```typescript
public readonly opGetFlowVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetFlowVersion API call.

---

##### `opGetFoundationModel`<sup>Required</sup> <a name="opGetFoundationModel" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFoundationModel"></a>

```typescript
public readonly opGetFoundationModel: string[];
```

- *Type:* string[]

IAM actions required for the GetFoundationModel API call.

---

##### `opGetFoundationModelAvailability`<sup>Required</sup> <a name="opGetFoundationModelAvailability" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetFoundationModelAvailability"></a>

```typescript
public readonly opGetFoundationModelAvailability: string[];
```

- *Type:* string[]

IAM actions required for the GetFoundationModelAvailability API call.

---

##### `opGetGuardrail`<sup>Required</sup> <a name="opGetGuardrail" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetGuardrail"></a>

```typescript
public readonly opGetGuardrail: string[];
```

- *Type:* string[]

IAM actions required for the GetGuardrail API call.

---

##### `opGetImportedModel`<sup>Required</sup> <a name="opGetImportedModel" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetImportedModel"></a>

```typescript
public readonly opGetImportedModel: string[];
```

- *Type:* string[]

IAM actions required for the GetImportedModel API call.

---

##### `opGetInferenceProfile`<sup>Required</sup> <a name="opGetInferenceProfile" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetInferenceProfile"></a>

```typescript
public readonly opGetInferenceProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetInferenceProfile API call.

---

##### `opGetIngestedDocumentAcl`<sup>Required</sup> <a name="opGetIngestedDocumentAcl" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetIngestedDocumentAcl"></a>

```typescript
public readonly opGetIngestedDocumentAcl: string[];
```

- *Type:* string[]

IAM actions required for the GetIngestedDocumentAcl API call.

---

##### `opGetIngestionJob`<sup>Required</sup> <a name="opGetIngestionJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetIngestionJob"></a>

```typescript
public readonly opGetIngestionJob: string[];
```

- *Type:* string[]

IAM actions required for the GetIngestionJob API call.

---

##### `opGetInvocationStep`<sup>Required</sup> <a name="opGetInvocationStep" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetInvocationStep"></a>

```typescript
public readonly opGetInvocationStep: string[];
```

- *Type:* string[]

IAM actions required for the GetInvocationStep API call.

---

##### `opGetKnowledgeBase`<sup>Required</sup> <a name="opGetKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetKnowledgeBase"></a>

```typescript
public readonly opGetKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the GetKnowledgeBase API call.

---

##### `opGetKnowledgeBaseDocuments`<sup>Required</sup> <a name="opGetKnowledgeBaseDocuments" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetKnowledgeBaseDocuments"></a>

```typescript
public readonly opGetKnowledgeBaseDocuments: string[];
```

- *Type:* string[]

IAM actions required for the GetKnowledgeBaseDocuments API call.

---

##### `opGetMarketplaceModelEndpoint`<sup>Required</sup> <a name="opGetMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetMarketplaceModelEndpoint"></a>

```typescript
public readonly opGetMarketplaceModelEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetMarketplaceModelEndpoint API call.

---

##### `opGetModelCopyJob`<sup>Required</sup> <a name="opGetModelCopyJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetModelCopyJob"></a>

```typescript
public readonly opGetModelCopyJob: string[];
```

- *Type:* string[]

IAM actions required for the GetModelCopyJob API call.

---

##### `opGetModelCustomizationJob`<sup>Required</sup> <a name="opGetModelCustomizationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetModelCustomizationJob"></a>

```typescript
public readonly opGetModelCustomizationJob: string[];
```

- *Type:* string[]

IAM actions required for the GetModelCustomizationJob API call.

---

##### `opGetModelImportJob`<sup>Required</sup> <a name="opGetModelImportJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetModelImportJob"></a>

```typescript
public readonly opGetModelImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetModelImportJob API call.

---

##### `opGetModelInvocationJob`<sup>Required</sup> <a name="opGetModelInvocationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetModelInvocationJob"></a>

```typescript
public readonly opGetModelInvocationJob: string[];
```

- *Type:* string[]

IAM actions required for the GetModelInvocationJob API call.

---

##### `opGetModelInvocationLoggingConfiguration`<sup>Required</sup> <a name="opGetModelInvocationLoggingConfiguration" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetModelInvocationLoggingConfiguration"></a>

```typescript
public readonly opGetModelInvocationLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetModelInvocationLoggingConfiguration API call.

---

##### `opGetPrompt`<sup>Required</sup> <a name="opGetPrompt" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetPrompt"></a>

```typescript
public readonly opGetPrompt: string[];
```

- *Type:* string[]

IAM actions required for the GetPrompt API call.

---

##### `opGetPromptRouter`<sup>Required</sup> <a name="opGetPromptRouter" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetPromptRouter"></a>

```typescript
public readonly opGetPromptRouter: string[];
```

- *Type:* string[]

IAM actions required for the GetPromptRouter API call.

---

##### `opGetProvisionedModelThroughput`<sup>Required</sup> <a name="opGetProvisionedModelThroughput" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetProvisionedModelThroughput"></a>

```typescript
public readonly opGetProvisionedModelThroughput: string[];
```

- *Type:* string[]

IAM actions required for the GetProvisionedModelThroughput API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetSession`<sup>Required</sup> <a name="opGetSession" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetSession"></a>

```typescript
public readonly opGetSession: string[];
```

- *Type:* string[]

IAM actions required for the GetSession API call.

---

##### `opGetUseCaseForModelAccess`<sup>Required</sup> <a name="opGetUseCaseForModelAccess" id="@cdk_utils/iam.bedrock.BedrockOperations.property.opGetUseCaseForModelAccess"></a>

```typescript
public readonly opGetUseCaseForModelAccess: string[];
```

- *Type:* string[]

IAM actions required for the GetUseCaseForModelAccess API call.

---

##### `OptimizePrompt`<sup>Required</sup> <a name="OptimizePrompt" id="@cdk_utils/iam.bedrock.BedrockOperations.property.OptimizePrompt"></a>

```typescript
public readonly OptimizePrompt: string[];
```

- *Type:* string[]

IAM actions required for the OptimizePrompt API call.

---

##### `PrepareAgent`<sup>Required</sup> <a name="PrepareAgent" id="@cdk_utils/iam.bedrock.BedrockOperations.property.PrepareAgent"></a>

```typescript
public readonly PrepareAgent: string[];
```

- *Type:* string[]

IAM actions required for the PrepareAgent API call.

---

##### `PrepareFlow`<sup>Required</sup> <a name="PrepareFlow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.PrepareFlow"></a>

```typescript
public readonly PrepareFlow: string[];
```

- *Type:* string[]

IAM actions required for the PrepareFlow API call.

---

##### `PutAccountDataRetention`<sup>Required</sup> <a name="PutAccountDataRetention" id="@cdk_utils/iam.bedrock.BedrockOperations.property.PutAccountDataRetention"></a>

```typescript
public readonly PutAccountDataRetention: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountDataRetention API call.

---

##### `PutEnforcedGuardrailConfiguration`<sup>Required</sup> <a name="PutEnforcedGuardrailConfiguration" id="@cdk_utils/iam.bedrock.BedrockOperations.property.PutEnforcedGuardrailConfiguration"></a>

```typescript
public readonly PutEnforcedGuardrailConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutEnforcedGuardrailConfiguration API call.

---

##### `PutInvocationStep`<sup>Required</sup> <a name="PutInvocationStep" id="@cdk_utils/iam.bedrock.BedrockOperations.property.PutInvocationStep"></a>

```typescript
public readonly PutInvocationStep: string[];
```

- *Type:* string[]

IAM actions required for the PutInvocationStep API call.

---

##### `PutModelInvocationLoggingConfiguration`<sup>Required</sup> <a name="PutModelInvocationLoggingConfiguration" id="@cdk_utils/iam.bedrock.BedrockOperations.property.PutModelInvocationLoggingConfiguration"></a>

```typescript
public readonly PutModelInvocationLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutModelInvocationLoggingConfiguration API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.bedrock.BedrockOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `PutUseCaseForModelAccess`<sup>Required</sup> <a name="PutUseCaseForModelAccess" id="@cdk_utils/iam.bedrock.BedrockOperations.property.PutUseCaseForModelAccess"></a>

```typescript
public readonly PutUseCaseForModelAccess: string[];
```

- *Type:* string[]

IAM actions required for the PutUseCaseForModelAccess API call.

---

##### `RegisterMarketplaceModelEndpoint`<sup>Required</sup> <a name="RegisterMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockOperations.property.RegisterMarketplaceModelEndpoint"></a>

```typescript
public readonly RegisterMarketplaceModelEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the RegisterMarketplaceModelEndpoint API call.

---

##### `Rerank`<sup>Required</sup> <a name="Rerank" id="@cdk_utils/iam.bedrock.BedrockOperations.property.Rerank"></a>

```typescript
public readonly Rerank: string[];
```

- *Type:* string[]

IAM actions required for the Rerank API call.

---

##### `Retrieve`<sup>Required</sup> <a name="Retrieve" id="@cdk_utils/iam.bedrock.BedrockOperations.property.Retrieve"></a>

```typescript
public readonly Retrieve: string[];
```

- *Type:* string[]

IAM actions required for the Retrieve API call.

---

##### `RetrieveAndGenerate`<sup>Required</sup> <a name="RetrieveAndGenerate" id="@cdk_utils/iam.bedrock.BedrockOperations.property.RetrieveAndGenerate"></a>

```typescript
public readonly RetrieveAndGenerate: string[];
```

- *Type:* string[]

IAM actions required for the RetrieveAndGenerate API call.

---

##### `RetrieveAndGenerateStream`<sup>Required</sup> <a name="RetrieveAndGenerateStream" id="@cdk_utils/iam.bedrock.BedrockOperations.property.RetrieveAndGenerateStream"></a>

```typescript
public readonly RetrieveAndGenerateStream: string[];
```

- *Type:* string[]

IAM actions required for the RetrieveAndGenerateStream API call.

---

##### `StartAsyncInvoke`<sup>Required</sup> <a name="StartAsyncInvoke" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StartAsyncInvoke"></a>

```typescript
public readonly StartAsyncInvoke: string[];
```

- *Type:* string[]

IAM actions required for the StartAsyncInvoke API call.

---

##### `StartAutomatedReasoningPolicyBuildWorkflow`<sup>Required</sup> <a name="StartAutomatedReasoningPolicyBuildWorkflow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StartAutomatedReasoningPolicyBuildWorkflow"></a>

```typescript
public readonly StartAutomatedReasoningPolicyBuildWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the StartAutomatedReasoningPolicyBuildWorkflow API call.

---

##### `StartAutomatedReasoningPolicyTestWorkflow`<sup>Required</sup> <a name="StartAutomatedReasoningPolicyTestWorkflow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StartAutomatedReasoningPolicyTestWorkflow"></a>

```typescript
public readonly StartAutomatedReasoningPolicyTestWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the StartAutomatedReasoningPolicyTestWorkflow API call.

---

##### `StartFlowExecution`<sup>Required</sup> <a name="StartFlowExecution" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StartFlowExecution"></a>

```typescript
public readonly StartFlowExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartFlowExecution API call.

---

##### `StartIngestionJob`<sup>Required</sup> <a name="StartIngestionJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StartIngestionJob"></a>

```typescript
public readonly StartIngestionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartIngestionJob API call.

---

##### `StopAdvancedPromptOptimizationJob`<sup>Required</sup> <a name="StopAdvancedPromptOptimizationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StopAdvancedPromptOptimizationJob"></a>

```typescript
public readonly StopAdvancedPromptOptimizationJob: string[];
```

- *Type:* string[]

IAM actions required for the StopAdvancedPromptOptimizationJob API call.

---

##### `StopEvaluationJob`<sup>Required</sup> <a name="StopEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StopEvaluationJob"></a>

```typescript
public readonly StopEvaluationJob: string[];
```

- *Type:* string[]

IAM actions required for the StopEvaluationJob API call.

---

##### `StopFlowExecution`<sup>Required</sup> <a name="StopFlowExecution" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StopFlowExecution"></a>

```typescript
public readonly StopFlowExecution: string[];
```

- *Type:* string[]

IAM actions required for the StopFlowExecution API call.

---

##### `StopIngestionJob`<sup>Required</sup> <a name="StopIngestionJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StopIngestionJob"></a>

```typescript
public readonly StopIngestionJob: string[];
```

- *Type:* string[]

IAM actions required for the StopIngestionJob API call.

---

##### `StopModelCustomizationJob`<sup>Required</sup> <a name="StopModelCustomizationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StopModelCustomizationJob"></a>

```typescript
public readonly StopModelCustomizationJob: string[];
```

- *Type:* string[]

IAM actions required for the StopModelCustomizationJob API call.

---

##### `StopModelInvocationJob`<sup>Required</sup> <a name="StopModelInvocationJob" id="@cdk_utils/iam.bedrock.BedrockOperations.property.StopModelInvocationJob"></a>

```typescript
public readonly StopModelInvocationJob: string[];
```

- *Type:* string[]

IAM actions required for the StopModelInvocationJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bedrock.BedrockOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAgent`<sup>Required</sup> <a name="UpdateAgent" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAgent"></a>

```typescript
public readonly UpdateAgent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgent API call.

---

##### `UpdateAgentActionGroup`<sup>Required</sup> <a name="UpdateAgentActionGroup" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAgentActionGroup"></a>

```typescript
public readonly UpdateAgentActionGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentActionGroup API call.

---

##### `UpdateAgentAlias`<sup>Required</sup> <a name="UpdateAgentAlias" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAgentAlias"></a>

```typescript
public readonly UpdateAgentAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentAlias API call.

---

##### `UpdateAgentCollaborator`<sup>Required</sup> <a name="UpdateAgentCollaborator" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAgentCollaborator"></a>

```typescript
public readonly UpdateAgentCollaborator: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentCollaborator API call.

---

##### `UpdateAgentKnowledgeBase`<sup>Required</sup> <a name="UpdateAgentKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAgentKnowledgeBase"></a>

```typescript
public readonly UpdateAgentKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentKnowledgeBase API call.

---

##### `UpdateAutomatedReasoningPolicy`<sup>Required</sup> <a name="UpdateAutomatedReasoningPolicy" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAutomatedReasoningPolicy"></a>

```typescript
public readonly UpdateAutomatedReasoningPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutomatedReasoningPolicy API call.

---

##### `UpdateAutomatedReasoningPolicyAnnotations`<sup>Required</sup> <a name="UpdateAutomatedReasoningPolicyAnnotations" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAutomatedReasoningPolicyAnnotations"></a>

```typescript
public readonly UpdateAutomatedReasoningPolicyAnnotations: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutomatedReasoningPolicyAnnotations API call.

---

##### `UpdateAutomatedReasoningPolicyTestCase`<sup>Required</sup> <a name="UpdateAutomatedReasoningPolicyTestCase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateAutomatedReasoningPolicyTestCase"></a>

```typescript
public readonly UpdateAutomatedReasoningPolicyTestCase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutomatedReasoningPolicyTestCase API call.

---

##### `UpdateBlueprint`<sup>Required</sup> <a name="UpdateBlueprint" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateBlueprint"></a>

```typescript
public readonly UpdateBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBlueprint API call.

---

##### `UpdateCustomModelDeployment`<sup>Required</sup> <a name="UpdateCustomModelDeployment" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateCustomModelDeployment"></a>

```typescript
public readonly UpdateCustomModelDeployment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomModelDeployment API call.

---

##### `UpdateDataAutomationLibrary`<sup>Required</sup> <a name="UpdateDataAutomationLibrary" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateDataAutomationLibrary"></a>

```typescript
public readonly UpdateDataAutomationLibrary: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataAutomationLibrary API call.

---

##### `UpdateDataAutomationProject`<sup>Required</sup> <a name="UpdateDataAutomationProject" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateDataAutomationProject"></a>

```typescript
public readonly UpdateDataAutomationProject: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataAutomationProject API call.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSource API call.

---

##### `UpdateFlow`<sup>Required</sup> <a name="UpdateFlow" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateFlow"></a>

```typescript
public readonly UpdateFlow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlow API call.

---

##### `UpdateFlowAlias`<sup>Required</sup> <a name="UpdateFlowAlias" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateFlowAlias"></a>

```typescript
public readonly UpdateFlowAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlowAlias API call.

---

##### `UpdateGuardrail`<sup>Required</sup> <a name="UpdateGuardrail" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateGuardrail"></a>

```typescript
public readonly UpdateGuardrail: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGuardrail API call.

---

##### `UpdateKnowledgeBase`<sup>Required</sup> <a name="UpdateKnowledgeBase" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateKnowledgeBase"></a>

```typescript
public readonly UpdateKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKnowledgeBase API call.

---

##### `UpdateMarketplaceModelEndpoint`<sup>Required</sup> <a name="UpdateMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateMarketplaceModelEndpoint"></a>

```typescript
public readonly UpdateMarketplaceModelEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMarketplaceModelEndpoint API call.

---

##### `UpdatePrompt`<sup>Required</sup> <a name="UpdatePrompt" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdatePrompt"></a>

```typescript
public readonly UpdatePrompt: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePrompt API call.

---

##### `UpdateProvisionedModelThroughput`<sup>Required</sup> <a name="UpdateProvisionedModelThroughput" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateProvisionedModelThroughput"></a>

```typescript
public readonly UpdateProvisionedModelThroughput: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProvisionedModelThroughput API call.

---

##### `UpdateSession`<sup>Required</sup> <a name="UpdateSession" id="@cdk_utils/iam.bedrock.BedrockOperations.property.UpdateSession"></a>

```typescript
public readonly UpdateSession: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSession API call.

---

##### `ValidateFlowDefinition`<sup>Required</sup> <a name="ValidateFlowDefinition" id="@cdk_utils/iam.bedrock.BedrockOperations.property.ValidateFlowDefinition"></a>

```typescript
public readonly ValidateFlowDefinition: string[];
```

- *Type:* string[]

IAM actions required for the ValidateFlowDefinition API call.

---

### BedrockResources <a name="BedrockResources" id="@cdk_utils/iam.bedrock.BedrockResources"></a>

ARN builders, validators, and parsers for bedrock resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock.BedrockResources.Initializer"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

new bedrock.BedrockResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.advancedPromptOptimizationJob">advancedPromptOptimizationJob</a></code> | Builds an ARN for the advanced-prompt-optimization-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.agent">agent</a></code> | Builds an ARN for the agent resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.agentAlias">agentAlias</a></code> | Builds an ARN for the agent-alias resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.applicationInferenceProfile">applicationInferenceProfile</a></code> | Builds an ARN for the application-inference-profile resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.asyncInvoke">asyncInvoke</a></code> | Builds an ARN for the async-invoke resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.automatedReasoningPolicy">automatedReasoningPolicy</a></code> | Builds an ARN for the automated-reasoning-policy resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.automatedReasoningPolicyVersion">automatedReasoningPolicyVersion</a></code> | Builds an ARN for the automated-reasoning-policy-version resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.bedrockMarketplaceModelEndpoint">bedrockMarketplaceModelEndpoint</a></code> | Builds an ARN for the bedrock-marketplace-model-endpoint resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.blueprint">blueprint</a></code> | Builds an ARN for the blueprint resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.blueprintOptimizationInvocation">blueprintOptimizationInvocation</a></code> | Builds an ARN for the blueprint-optimization-invocation resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.customModel">customModel</a></code> | Builds an ARN for the custom-model resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.customModelDeployment">customModelDeployment</a></code> | Builds an ARN for the custom-model-deployment resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.dataAutomationInvocationJob">dataAutomationInvocationJob</a></code> | Builds an ARN for the data-automation-invocation-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.dataAutomationLibrary">dataAutomationLibrary</a></code> | Builds an ARN for the data-automation-library resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.dataAutomationLibraryIngestionJob">dataAutomationLibraryIngestionJob</a></code> | Builds an ARN for the data-automation-library-ingestion-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.dataAutomationProfile">dataAutomationProfile</a></code> | Builds an ARN for the data-automation-profile resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.dataAutomationProject">dataAutomationProject</a></code> | Builds an ARN for the data-automation-project resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.defaultPromptRouter">defaultPromptRouter</a></code> | Builds an ARN for the default-prompt-router resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.evaluationJob">evaluationJob</a></code> | Builds an ARN for the evaluation-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.flow">flow</a></code> | Builds an ARN for the flow resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.flowAlias">flowAlias</a></code> | Builds an ARN for the flow-alias resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.flowExecution">flowExecution</a></code> | Builds an ARN for the flow-execution resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.foundationModel">foundationModel</a></code> | Builds an ARN for the foundation-model resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.guardrail">guardrail</a></code> | Builds an ARN for the guardrail resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.guardrailProfile">guardrailProfile</a></code> | Builds an ARN for the guardrail-profile resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.importedModel">importedModel</a></code> | Builds an ARN for the imported-model resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.inferenceProfile">inferenceProfile</a></code> | Builds an ARN for the inference-profile resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidAdvancedPromptOptimizationJobArn">isValidAdvancedPromptOptimizationJobArn</a></code> | Validates whether a string is a valid ARN for the advanced-prompt-optimization-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidAgentAliasArn">isValidAgentAliasArn</a></code> | Validates whether a string is a valid ARN for the agent-alias resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidAgentArn">isValidAgentArn</a></code> | Validates whether a string is a valid ARN for the agent resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidApplicationInferenceProfileArn">isValidApplicationInferenceProfileArn</a></code> | Validates whether a string is a valid ARN for the application-inference-profile resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidAsyncInvokeArn">isValidAsyncInvokeArn</a></code> | Validates whether a string is a valid ARN for the async-invoke resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidAutomatedReasoningPolicyArn">isValidAutomatedReasoningPolicyArn</a></code> | Validates whether a string is a valid ARN for the automated-reasoning-policy resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidAutomatedReasoningPolicyVersionArn">isValidAutomatedReasoningPolicyVersionArn</a></code> | Validates whether a string is a valid ARN for the automated-reasoning-policy-version resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidBedrockMarketplaceModelEndpointArn">isValidBedrockMarketplaceModelEndpointArn</a></code> | Validates whether a string is a valid ARN for the bedrock-marketplace-model-endpoint resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidBlueprintArn">isValidBlueprintArn</a></code> | Validates whether a string is a valid ARN for the blueprint resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidBlueprintOptimizationInvocationArn">isValidBlueprintOptimizationInvocationArn</a></code> | Validates whether a string is a valid ARN for the blueprint-optimization-invocation resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidCustomModelArn">isValidCustomModelArn</a></code> | Validates whether a string is a valid ARN for the custom-model resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidCustomModelDeploymentArn">isValidCustomModelDeploymentArn</a></code> | Validates whether a string is a valid ARN for the custom-model-deployment resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationInvocationJobArn">isValidDataAutomationInvocationJobArn</a></code> | Validates whether a string is a valid ARN for the data-automation-invocation-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationLibraryArn">isValidDataAutomationLibraryArn</a></code> | Validates whether a string is a valid ARN for the data-automation-library resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationLibraryIngestionJobArn">isValidDataAutomationLibraryIngestionJobArn</a></code> | Validates whether a string is a valid ARN for the data-automation-library-ingestion-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationProfileArn">isValidDataAutomationProfileArn</a></code> | Validates whether a string is a valid ARN for the data-automation-profile resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationProjectArn">isValidDataAutomationProjectArn</a></code> | Validates whether a string is a valid ARN for the data-automation-project resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidDefaultPromptRouterArn">isValidDefaultPromptRouterArn</a></code> | Validates whether a string is a valid ARN for the default-prompt-router resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidEvaluationJobArn">isValidEvaluationJobArn</a></code> | Validates whether a string is a valid ARN for the evaluation-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidFlowAliasArn">isValidFlowAliasArn</a></code> | Validates whether a string is a valid ARN for the flow-alias resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidFlowArn">isValidFlowArn</a></code> | Validates whether a string is a valid ARN for the flow resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidFlowExecutionArn">isValidFlowExecutionArn</a></code> | Validates whether a string is a valid ARN for the flow-execution resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidFoundationModelArn">isValidFoundationModelArn</a></code> | Validates whether a string is a valid ARN for the foundation-model resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidGuardrailArn">isValidGuardrailArn</a></code> | Validates whether a string is a valid ARN for the guardrail resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidGuardrailProfileArn">isValidGuardrailProfileArn</a></code> | Validates whether a string is a valid ARN for the guardrail-profile resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidImportedModelArn">isValidImportedModelArn</a></code> | Validates whether a string is a valid ARN for the imported-model resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidInferenceProfileArn">isValidInferenceProfileArn</a></code> | Validates whether a string is a valid ARN for the inference-profile resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidKnowledgeBaseArn">isValidKnowledgeBaseArn</a></code> | Validates whether a string is a valid ARN for the knowledge-base resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidModelCopyJobArn">isValidModelCopyJobArn</a></code> | Validates whether a string is a valid ARN for the model-copy-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidModelCustomizationJobArn">isValidModelCustomizationJobArn</a></code> | Validates whether a string is a valid ARN for the model-customization-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidModelEvaluationJobArn">isValidModelEvaluationJobArn</a></code> | Validates whether a string is a valid ARN for the model-evaluation-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidModelImportJobArn">isValidModelImportJobArn</a></code> | Validates whether a string is a valid ARN for the model-import-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidModelInvocationJobArn">isValidModelInvocationJobArn</a></code> | Validates whether a string is a valid ARN for the model-invocation-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidPromptArn">isValidPromptArn</a></code> | Validates whether a string is a valid ARN for the prompt resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidPromptRouterArn">isValidPromptRouterArn</a></code> | Validates whether a string is a valid ARN for the prompt-router resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidPromptVersionArn">isValidPromptVersionArn</a></code> | Validates whether a string is a valid ARN for the prompt-version resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidProvisionedModelArn">isValidProvisionedModelArn</a></code> | Validates whether a string is a valid ARN for the provisioned-model resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.isValidSystemToolArn">isValidSystemToolArn</a></code> | Validates whether a string is a valid ARN for the system-tool resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.knowledgeBase">knowledgeBase</a></code> | Builds an ARN for the knowledge-base resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.modelCopyJob">modelCopyJob</a></code> | Builds an ARN for the model-copy-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.modelCustomizationJob">modelCustomizationJob</a></code> | Builds an ARN for the model-customization-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.modelEvaluationJob">modelEvaluationJob</a></code> | Builds an ARN for the model-evaluation-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.modelImportJob">modelImportJob</a></code> | Builds an ARN for the model-import-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.modelInvocationJob">modelInvocationJob</a></code> | Builds an ARN for the model-invocation-job resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseAdvancedPromptOptimizationJobArn">parseAdvancedPromptOptimizationJobArn</a></code> | Parses a advanced-prompt-optimization-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseAgentAliasArn">parseAgentAliasArn</a></code> | Parses a agent-alias ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseAgentArn">parseAgentArn</a></code> | Parses a agent ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseApplicationInferenceProfileArn">parseApplicationInferenceProfileArn</a></code> | Parses a application-inference-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseAsyncInvokeArn">parseAsyncInvokeArn</a></code> | Parses a async-invoke ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseAutomatedReasoningPolicyArn">parseAutomatedReasoningPolicyArn</a></code> | Parses a automated-reasoning-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseAutomatedReasoningPolicyVersionArn">parseAutomatedReasoningPolicyVersionArn</a></code> | Parses a automated-reasoning-policy-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseBedrockMarketplaceModelEndpointArn">parseBedrockMarketplaceModelEndpointArn</a></code> | Parses a bedrock-marketplace-model-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseBlueprintArn">parseBlueprintArn</a></code> | Parses a blueprint ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseBlueprintOptimizationInvocationArn">parseBlueprintOptimizationInvocationArn</a></code> | Parses a blueprint-optimization-invocation ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseCustomModelArn">parseCustomModelArn</a></code> | Parses a custom-model ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseCustomModelDeploymentArn">parseCustomModelDeploymentArn</a></code> | Parses a custom-model-deployment ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationInvocationJobArn">parseDataAutomationInvocationJobArn</a></code> | Parses a data-automation-invocation-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationLibraryArn">parseDataAutomationLibraryArn</a></code> | Parses a data-automation-library ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationLibraryIngestionJobArn">parseDataAutomationLibraryIngestionJobArn</a></code> | Parses a data-automation-library-ingestion-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationProfileArn">parseDataAutomationProfileArn</a></code> | Parses a data-automation-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationProjectArn">parseDataAutomationProjectArn</a></code> | Parses a data-automation-project ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseDefaultPromptRouterArn">parseDefaultPromptRouterArn</a></code> | Parses a default-prompt-router ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseEvaluationJobArn">parseEvaluationJobArn</a></code> | Parses a evaluation-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseFlowAliasArn">parseFlowAliasArn</a></code> | Parses a flow-alias ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseFlowArn">parseFlowArn</a></code> | Parses a flow ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseFlowExecutionArn">parseFlowExecutionArn</a></code> | Parses a flow-execution ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseFoundationModelArn">parseFoundationModelArn</a></code> | Parses a foundation-model ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseGuardrailArn">parseGuardrailArn</a></code> | Parses a guardrail ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseGuardrailProfileArn">parseGuardrailProfileArn</a></code> | Parses a guardrail-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseImportedModelArn">parseImportedModelArn</a></code> | Parses a imported-model ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseInferenceProfileArn">parseInferenceProfileArn</a></code> | Parses a inference-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseKnowledgeBaseArn">parseKnowledgeBaseArn</a></code> | Parses a knowledge-base ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseModelCopyJobArn">parseModelCopyJobArn</a></code> | Parses a model-copy-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseModelCustomizationJobArn">parseModelCustomizationJobArn</a></code> | Parses a model-customization-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseModelEvaluationJobArn">parseModelEvaluationJobArn</a></code> | Parses a model-evaluation-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseModelImportJobArn">parseModelImportJobArn</a></code> | Parses a model-import-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseModelInvocationJobArn">parseModelInvocationJobArn</a></code> | Parses a model-invocation-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseProjectArn">parseProjectArn</a></code> | Parses a project ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parsePromptArn">parsePromptArn</a></code> | Parses a prompt ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parsePromptRouterArn">parsePromptRouterArn</a></code> | Parses a prompt-router ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parsePromptVersionArn">parsePromptVersionArn</a></code> | Parses a prompt-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseProvisionedModelArn">parseProvisionedModelArn</a></code> | Parses a provisioned-model ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseSessionArn">parseSessionArn</a></code> | Parses a session ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.parseSystemToolArn">parseSystemToolArn</a></code> | Parses a system-tool ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.project">project</a></code> | Builds an ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.prompt">prompt</a></code> | Builds an ARN for the prompt resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.promptRouter">promptRouter</a></code> | Builds an ARN for the prompt-router resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.promptVersion">promptVersion</a></code> | Builds an ARN for the prompt-version resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.provisionedModel">provisionedModel</a></code> | Builds an ARN for the provisioned-model resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.session">session</a></code> | Builds an ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.bedrock.BedrockResources.systemTool">systemTool</a></code> | Builds an ARN for the system-tool resource. |

---

##### `advancedPromptOptimizationJob` <a name="advancedPromptOptimizationJob" id="@cdk_utils/iam.bedrock.BedrockResources.advancedPromptOptimizationJob"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.advancedPromptOptimizationJob(props: BedrockAdvancedPromptOptimizationJobArnProps)
```

Builds an ARN for the advanced-prompt-optimization-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.advancedPromptOptimizationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockAdvancedPromptOptimizationJobArnProps">BedrockAdvancedPromptOptimizationJobArnProps</a>

---

##### `agent` <a name="agent" id="@cdk_utils/iam.bedrock.BedrockResources.agent"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.agent(props: BedrockAgentArnProps)
```

Builds an ARN for the agent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.agent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockAgentArnProps">BedrockAgentArnProps</a>

---

##### `agentAlias` <a name="agentAlias" id="@cdk_utils/iam.bedrock.BedrockResources.agentAlias"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.agentAlias(props: BedrockAgentAliasArnProps)
```

Builds an ARN for the agent-alias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.agentAlias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockAgentAliasArnProps">BedrockAgentAliasArnProps</a>

---

##### `applicationInferenceProfile` <a name="applicationInferenceProfile" id="@cdk_utils/iam.bedrock.BedrockResources.applicationInferenceProfile"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.applicationInferenceProfile(props: BedrockApplicationInferenceProfileArnProps)
```

Builds an ARN for the application-inference-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.applicationInferenceProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockApplicationInferenceProfileArnProps">BedrockApplicationInferenceProfileArnProps</a>

---

##### `asyncInvoke` <a name="asyncInvoke" id="@cdk_utils/iam.bedrock.BedrockResources.asyncInvoke"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.asyncInvoke(props: BedrockAsyncInvokeArnProps)
```

Builds an ARN for the async-invoke resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.asyncInvoke.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockAsyncInvokeArnProps">BedrockAsyncInvokeArnProps</a>

---

##### `automatedReasoningPolicy` <a name="automatedReasoningPolicy" id="@cdk_utils/iam.bedrock.BedrockResources.automatedReasoningPolicy"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.automatedReasoningPolicy(props: BedrockAutomatedReasoningPolicyArnProps)
```

Builds an ARN for the automated-reasoning-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.automatedReasoningPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyArnProps">BedrockAutomatedReasoningPolicyArnProps</a>

---

##### `automatedReasoningPolicyVersion` <a name="automatedReasoningPolicyVersion" id="@cdk_utils/iam.bedrock.BedrockResources.automatedReasoningPolicyVersion"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.automatedReasoningPolicyVersion(props: BedrockAutomatedReasoningPolicyVersionArnProps)
```

Builds an ARN for the automated-reasoning-policy-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.automatedReasoningPolicyVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockAutomatedReasoningPolicyVersionArnProps">BedrockAutomatedReasoningPolicyVersionArnProps</a>

---

##### `bedrockMarketplaceModelEndpoint` <a name="bedrockMarketplaceModelEndpoint" id="@cdk_utils/iam.bedrock.BedrockResources.bedrockMarketplaceModelEndpoint"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.bedrockMarketplaceModelEndpoint(props: BedrockBedrockMarketplaceModelEndpointArnProps)
```

Builds an ARN for the bedrock-marketplace-model-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.bedrockMarketplaceModelEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockBedrockMarketplaceModelEndpointArnProps">BedrockBedrockMarketplaceModelEndpointArnProps</a>

---

##### `blueprint` <a name="blueprint" id="@cdk_utils/iam.bedrock.BedrockResources.blueprint"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.blueprint(props: BedrockBlueprintArnProps)
```

Builds an ARN for the blueprint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.blueprint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockBlueprintArnProps">BedrockBlueprintArnProps</a>

---

##### `blueprintOptimizationInvocation` <a name="blueprintOptimizationInvocation" id="@cdk_utils/iam.bedrock.BedrockResources.blueprintOptimizationInvocation"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.blueprintOptimizationInvocation(props: BedrockBlueprintOptimizationInvocationArnProps)
```

Builds an ARN for the blueprint-optimization-invocation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.blueprintOptimizationInvocation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockBlueprintOptimizationInvocationArnProps">BedrockBlueprintOptimizationInvocationArnProps</a>

---

##### `customModel` <a name="customModel" id="@cdk_utils/iam.bedrock.BedrockResources.customModel"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.customModel(props: BedrockCustomModelArnProps)
```

Builds an ARN for the custom-model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.customModel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockCustomModelArnProps">BedrockCustomModelArnProps</a>

---

##### `customModelDeployment` <a name="customModelDeployment" id="@cdk_utils/iam.bedrock.BedrockResources.customModelDeployment"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.customModelDeployment(props: BedrockCustomModelDeploymentArnProps)
```

Builds an ARN for the custom-model-deployment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.customModelDeployment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockCustomModelDeploymentArnProps">BedrockCustomModelDeploymentArnProps</a>

---

##### `dataAutomationInvocationJob` <a name="dataAutomationInvocationJob" id="@cdk_utils/iam.bedrock.BedrockResources.dataAutomationInvocationJob"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.dataAutomationInvocationJob(props: BedrockDataAutomationInvocationJobArnProps)
```

Builds an ARN for the data-automation-invocation-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.dataAutomationInvocationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationInvocationJobArnProps">BedrockDataAutomationInvocationJobArnProps</a>

---

##### `dataAutomationLibrary` <a name="dataAutomationLibrary" id="@cdk_utils/iam.bedrock.BedrockResources.dataAutomationLibrary"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.dataAutomationLibrary(props: BedrockDataAutomationLibraryArnProps)
```

Builds an ARN for the data-automation-library resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.dataAutomationLibrary.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryArnProps">BedrockDataAutomationLibraryArnProps</a>

---

##### `dataAutomationLibraryIngestionJob` <a name="dataAutomationLibraryIngestionJob" id="@cdk_utils/iam.bedrock.BedrockResources.dataAutomationLibraryIngestionJob"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.dataAutomationLibraryIngestionJob(props: BedrockDataAutomationLibraryIngestionJobArnProps)
```

Builds an ARN for the data-automation-library-ingestion-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.dataAutomationLibraryIngestionJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationLibraryIngestionJobArnProps">BedrockDataAutomationLibraryIngestionJobArnProps</a>

---

##### `dataAutomationProfile` <a name="dataAutomationProfile" id="@cdk_utils/iam.bedrock.BedrockResources.dataAutomationProfile"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.dataAutomationProfile(props: BedrockDataAutomationProfileArnProps)
```

Builds an ARN for the data-automation-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.dataAutomationProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProfileArnProps">BedrockDataAutomationProfileArnProps</a>

---

##### `dataAutomationProject` <a name="dataAutomationProject" id="@cdk_utils/iam.bedrock.BedrockResources.dataAutomationProject"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.dataAutomationProject(props: BedrockDataAutomationProjectArnProps)
```

Builds an ARN for the data-automation-project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.dataAutomationProject.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockDataAutomationProjectArnProps">BedrockDataAutomationProjectArnProps</a>

---

##### `defaultPromptRouter` <a name="defaultPromptRouter" id="@cdk_utils/iam.bedrock.BedrockResources.defaultPromptRouter"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.defaultPromptRouter(props: BedrockDefaultPromptRouterArnProps)
```

Builds an ARN for the default-prompt-router resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.defaultPromptRouter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockDefaultPromptRouterArnProps">BedrockDefaultPromptRouterArnProps</a>

---

##### `evaluationJob` <a name="evaluationJob" id="@cdk_utils/iam.bedrock.BedrockResources.evaluationJob"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.evaluationJob(props: BedrockEvaluationJobArnProps)
```

Builds an ARN for the evaluation-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.evaluationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockEvaluationJobArnProps">BedrockEvaluationJobArnProps</a>

---

##### `flow` <a name="flow" id="@cdk_utils/iam.bedrock.BedrockResources.flow"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.flow(props: BedrockFlowArnProps)
```

Builds an ARN for the flow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.flow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockFlowArnProps">BedrockFlowArnProps</a>

---

##### `flowAlias` <a name="flowAlias" id="@cdk_utils/iam.bedrock.BedrockResources.flowAlias"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.flowAlias(props: BedrockFlowAliasArnProps)
```

Builds an ARN for the flow-alias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.flowAlias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockFlowAliasArnProps">BedrockFlowAliasArnProps</a>

---

##### `flowExecution` <a name="flowExecution" id="@cdk_utils/iam.bedrock.BedrockResources.flowExecution"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.flowExecution(props: BedrockFlowExecutionArnProps)
```

Builds an ARN for the flow-execution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.flowExecution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockFlowExecutionArnProps">BedrockFlowExecutionArnProps</a>

---

##### `foundationModel` <a name="foundationModel" id="@cdk_utils/iam.bedrock.BedrockResources.foundationModel"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.foundationModel(props: BedrockFoundationModelArnProps)
```

Builds an ARN for the foundation-model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.foundationModel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockFoundationModelArnProps">BedrockFoundationModelArnProps</a>

---

##### `guardrail` <a name="guardrail" id="@cdk_utils/iam.bedrock.BedrockResources.guardrail"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.guardrail(props: BedrockGuardrailArnProps)
```

Builds an ARN for the guardrail resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.guardrail.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockGuardrailArnProps">BedrockGuardrailArnProps</a>

---

##### `guardrailProfile` <a name="guardrailProfile" id="@cdk_utils/iam.bedrock.BedrockResources.guardrailProfile"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.guardrailProfile(props: BedrockGuardrailProfileArnProps)
```

Builds an ARN for the guardrail-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.guardrailProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockGuardrailProfileArnProps">BedrockGuardrailProfileArnProps</a>

---

##### `importedModel` <a name="importedModel" id="@cdk_utils/iam.bedrock.BedrockResources.importedModel"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.importedModel(props: BedrockImportedModelArnProps)
```

Builds an ARN for the imported-model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.importedModel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockImportedModelArnProps">BedrockImportedModelArnProps</a>

---

##### `inferenceProfile` <a name="inferenceProfile" id="@cdk_utils/iam.bedrock.BedrockResources.inferenceProfile"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.inferenceProfile(props: BedrockInferenceProfileArnProps)
```

Builds an ARN for the inference-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.inferenceProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockInferenceProfileArnProps">BedrockInferenceProfileArnProps</a>

---

##### `isValidAdvancedPromptOptimizationJobArn` <a name="isValidAdvancedPromptOptimizationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAdvancedPromptOptimizationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidAdvancedPromptOptimizationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the advanced-prompt-optimization-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAdvancedPromptOptimizationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAgentAliasArn` <a name="isValidAgentAliasArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAgentAliasArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidAgentAliasArn(arn: string)
```

Validates whether a string is a valid ARN for the agent-alias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAgentAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAgentArn` <a name="isValidAgentArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAgentArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidAgentArn(arn: string)
```

Validates whether a string is a valid ARN for the agent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApplicationInferenceProfileArn` <a name="isValidApplicationInferenceProfileArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidApplicationInferenceProfileArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidApplicationInferenceProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the application-inference-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidApplicationInferenceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAsyncInvokeArn` <a name="isValidAsyncInvokeArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAsyncInvokeArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidAsyncInvokeArn(arn: string)
```

Validates whether a string is a valid ARN for the async-invoke resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAsyncInvokeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutomatedReasoningPolicyArn` <a name="isValidAutomatedReasoningPolicyArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAutomatedReasoningPolicyArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidAutomatedReasoningPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the automated-reasoning-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAutomatedReasoningPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutomatedReasoningPolicyVersionArn` <a name="isValidAutomatedReasoningPolicyVersionArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAutomatedReasoningPolicyVersionArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidAutomatedReasoningPolicyVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the automated-reasoning-policy-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidAutomatedReasoningPolicyVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBedrockMarketplaceModelEndpointArn` <a name="isValidBedrockMarketplaceModelEndpointArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidBedrockMarketplaceModelEndpointArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidBedrockMarketplaceModelEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the bedrock-marketplace-model-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidBedrockMarketplaceModelEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBlueprintArn` <a name="isValidBlueprintArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidBlueprintArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidBlueprintArn(arn: string)
```

Validates whether a string is a valid ARN for the blueprint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidBlueprintArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBlueprintOptimizationInvocationArn` <a name="isValidBlueprintOptimizationInvocationArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidBlueprintOptimizationInvocationArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidBlueprintOptimizationInvocationArn(arn: string)
```

Validates whether a string is a valid ARN for the blueprint-optimization-invocation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidBlueprintOptimizationInvocationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomModelArn` <a name="isValidCustomModelArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidCustomModelArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidCustomModelArn(arn: string)
```

Validates whether a string is a valid ARN for the custom-model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidCustomModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomModelDeploymentArn` <a name="isValidCustomModelDeploymentArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidCustomModelDeploymentArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidCustomModelDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the custom-model-deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidCustomModelDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataAutomationInvocationJobArn` <a name="isValidDataAutomationInvocationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationInvocationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidDataAutomationInvocationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the data-automation-invocation-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationInvocationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataAutomationLibraryArn` <a name="isValidDataAutomationLibraryArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationLibraryArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidDataAutomationLibraryArn(arn: string)
```

Validates whether a string is a valid ARN for the data-automation-library resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationLibraryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataAutomationLibraryIngestionJobArn` <a name="isValidDataAutomationLibraryIngestionJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationLibraryIngestionJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidDataAutomationLibraryIngestionJobArn(arn: string)
```

Validates whether a string is a valid ARN for the data-automation-library-ingestion-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationLibraryIngestionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataAutomationProfileArn` <a name="isValidDataAutomationProfileArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationProfileArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidDataAutomationProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the data-automation-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataAutomationProjectArn` <a name="isValidDataAutomationProjectArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationProjectArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidDataAutomationProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the data-automation-project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDataAutomationProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDefaultPromptRouterArn` <a name="isValidDefaultPromptRouterArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDefaultPromptRouterArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidDefaultPromptRouterArn(arn: string)
```

Validates whether a string is a valid ARN for the default-prompt-router resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidDefaultPromptRouterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEvaluationJobArn` <a name="isValidEvaluationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidEvaluationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidEvaluationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the evaluation-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidEvaluationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFlowAliasArn` <a name="isValidFlowAliasArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidFlowAliasArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidFlowAliasArn(arn: string)
```

Validates whether a string is a valid ARN for the flow-alias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidFlowAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFlowArn` <a name="isValidFlowArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidFlowArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidFlowArn(arn: string)
```

Validates whether a string is a valid ARN for the flow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFlowExecutionArn` <a name="isValidFlowExecutionArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidFlowExecutionArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidFlowExecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the flow-execution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidFlowExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFoundationModelArn` <a name="isValidFoundationModelArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidFoundationModelArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidFoundationModelArn(arn: string)
```

Validates whether a string is a valid ARN for the foundation-model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidFoundationModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGuardrailArn` <a name="isValidGuardrailArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidGuardrailArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidGuardrailArn(arn: string)
```

Validates whether a string is a valid ARN for the guardrail resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidGuardrailArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGuardrailProfileArn` <a name="isValidGuardrailProfileArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidGuardrailProfileArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidGuardrailProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the guardrail-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidGuardrailProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImportedModelArn` <a name="isValidImportedModelArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidImportedModelArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidImportedModelArn(arn: string)
```

Validates whether a string is a valid ARN for the imported-model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidImportedModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInferenceProfileArn` <a name="isValidInferenceProfileArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidInferenceProfileArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidInferenceProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the inference-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidInferenceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKnowledgeBaseArn` <a name="isValidKnowledgeBaseArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidKnowledgeBaseArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidKnowledgeBaseArn(arn: string)
```

Validates whether a string is a valid ARN for the knowledge-base resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidKnowledgeBaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelCopyJobArn` <a name="isValidModelCopyJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidModelCopyJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidModelCopyJobArn(arn: string)
```

Validates whether a string is a valid ARN for the model-copy-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidModelCopyJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelCustomizationJobArn` <a name="isValidModelCustomizationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidModelCustomizationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidModelCustomizationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the model-customization-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidModelCustomizationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelEvaluationJobArn` <a name="isValidModelEvaluationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidModelEvaluationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidModelEvaluationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the model-evaluation-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidModelEvaluationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelImportJobArn` <a name="isValidModelImportJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidModelImportJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidModelImportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the model-import-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidModelImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelInvocationJobArn` <a name="isValidModelInvocationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidModelInvocationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidModelInvocationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the model-invocation-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidModelInvocationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidProjectArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPromptArn` <a name="isValidPromptArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidPromptArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidPromptArn(arn: string)
```

Validates whether a string is a valid ARN for the prompt resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidPromptArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPromptRouterArn` <a name="isValidPromptRouterArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidPromptRouterArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidPromptRouterArn(arn: string)
```

Validates whether a string is a valid ARN for the prompt-router resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidPromptRouterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPromptVersionArn` <a name="isValidPromptVersionArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidPromptVersionArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidPromptVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the prompt-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidPromptVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProvisionedModelArn` <a name="isValidProvisionedModelArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidProvisionedModelArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidProvisionedModelArn(arn: string)
```

Validates whether a string is a valid ARN for the provisioned-model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidProvisionedModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidSessionArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSystemToolArn` <a name="isValidSystemToolArn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidSystemToolArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.isValidSystemToolArn(arn: string)
```

Validates whether a string is a valid ARN for the system-tool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.isValidSystemToolArn.parameter.arn"></a>

- *Type:* string

---

##### `knowledgeBase` <a name="knowledgeBase" id="@cdk_utils/iam.bedrock.BedrockResources.knowledgeBase"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.knowledgeBase(props: BedrockKnowledgeBaseArnProps)
```

Builds an ARN for the knowledge-base resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.knowledgeBase.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockKnowledgeBaseArnProps">BedrockKnowledgeBaseArnProps</a>

---

##### `modelCopyJob` <a name="modelCopyJob" id="@cdk_utils/iam.bedrock.BedrockResources.modelCopyJob"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.modelCopyJob(props: BedrockModelCopyJobArnProps)
```

Builds an ARN for the model-copy-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.modelCopyJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockModelCopyJobArnProps">BedrockModelCopyJobArnProps</a>

---

##### `modelCustomizationJob` <a name="modelCustomizationJob" id="@cdk_utils/iam.bedrock.BedrockResources.modelCustomizationJob"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.modelCustomizationJob(props: BedrockModelCustomizationJobArnProps)
```

Builds an ARN for the model-customization-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.modelCustomizationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockModelCustomizationJobArnProps">BedrockModelCustomizationJobArnProps</a>

---

##### `modelEvaluationJob` <a name="modelEvaluationJob" id="@cdk_utils/iam.bedrock.BedrockResources.modelEvaluationJob"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.modelEvaluationJob(props: BedrockModelEvaluationJobArnProps)
```

Builds an ARN for the model-evaluation-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.modelEvaluationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockModelEvaluationJobArnProps">BedrockModelEvaluationJobArnProps</a>

---

##### `modelImportJob` <a name="modelImportJob" id="@cdk_utils/iam.bedrock.BedrockResources.modelImportJob"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.modelImportJob(props: BedrockModelImportJobArnProps)
```

Builds an ARN for the model-import-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.modelImportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockModelImportJobArnProps">BedrockModelImportJobArnProps</a>

---

##### `modelInvocationJob` <a name="modelInvocationJob" id="@cdk_utils/iam.bedrock.BedrockResources.modelInvocationJob"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.modelInvocationJob(props: BedrockModelInvocationJobArnProps)
```

Builds an ARN for the model-invocation-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.modelInvocationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockModelInvocationJobArnProps">BedrockModelInvocationJobArnProps</a>

---

##### `parseAdvancedPromptOptimizationJobArn` <a name="parseAdvancedPromptOptimizationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAdvancedPromptOptimizationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseAdvancedPromptOptimizationJobArn(arn: string)
```

Parses a advanced-prompt-optimization-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAdvancedPromptOptimizationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAgentAliasArn` <a name="parseAgentAliasArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAgentAliasArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseAgentAliasArn(arn: string)
```

Parses a agent-alias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAgentAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAgentArn` <a name="parseAgentArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAgentArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseAgentArn(arn: string)
```

Parses a agent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationInferenceProfileArn` <a name="parseApplicationInferenceProfileArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseApplicationInferenceProfileArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseApplicationInferenceProfileArn(arn: string)
```

Parses a application-inference-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseApplicationInferenceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAsyncInvokeArn` <a name="parseAsyncInvokeArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAsyncInvokeArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseAsyncInvokeArn(arn: string)
```

Parses a async-invoke ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAsyncInvokeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomatedReasoningPolicyArn` <a name="parseAutomatedReasoningPolicyArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAutomatedReasoningPolicyArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseAutomatedReasoningPolicyArn(arn: string)
```

Parses a automated-reasoning-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAutomatedReasoningPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomatedReasoningPolicyVersionArn` <a name="parseAutomatedReasoningPolicyVersionArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAutomatedReasoningPolicyVersionArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseAutomatedReasoningPolicyVersionArn(arn: string)
```

Parses a automated-reasoning-policy-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseAutomatedReasoningPolicyVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBedrockMarketplaceModelEndpointArn` <a name="parseBedrockMarketplaceModelEndpointArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseBedrockMarketplaceModelEndpointArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseBedrockMarketplaceModelEndpointArn(arn: string)
```

Parses a bedrock-marketplace-model-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseBedrockMarketplaceModelEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBlueprintArn` <a name="parseBlueprintArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseBlueprintArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseBlueprintArn(arn: string)
```

Parses a blueprint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseBlueprintArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBlueprintOptimizationInvocationArn` <a name="parseBlueprintOptimizationInvocationArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseBlueprintOptimizationInvocationArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseBlueprintOptimizationInvocationArn(arn: string)
```

Parses a blueprint-optimization-invocation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseBlueprintOptimizationInvocationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomModelArn` <a name="parseCustomModelArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseCustomModelArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseCustomModelArn(arn: string)
```

Parses a custom-model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseCustomModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomModelDeploymentArn` <a name="parseCustomModelDeploymentArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseCustomModelDeploymentArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseCustomModelDeploymentArn(arn: string)
```

Parses a custom-model-deployment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseCustomModelDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataAutomationInvocationJobArn` <a name="parseDataAutomationInvocationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationInvocationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseDataAutomationInvocationJobArn(arn: string)
```

Parses a data-automation-invocation-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationInvocationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataAutomationLibraryArn` <a name="parseDataAutomationLibraryArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationLibraryArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseDataAutomationLibraryArn(arn: string)
```

Parses a data-automation-library ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationLibraryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataAutomationLibraryIngestionJobArn` <a name="parseDataAutomationLibraryIngestionJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationLibraryIngestionJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseDataAutomationLibraryIngestionJobArn(arn: string)
```

Parses a data-automation-library-ingestion-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationLibraryIngestionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataAutomationProfileArn` <a name="parseDataAutomationProfileArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationProfileArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseDataAutomationProfileArn(arn: string)
```

Parses a data-automation-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataAutomationProjectArn` <a name="parseDataAutomationProjectArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationProjectArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseDataAutomationProjectArn(arn: string)
```

Parses a data-automation-project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDataAutomationProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDefaultPromptRouterArn` <a name="parseDefaultPromptRouterArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDefaultPromptRouterArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseDefaultPromptRouterArn(arn: string)
```

Parses a default-prompt-router ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseDefaultPromptRouterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEvaluationJobArn` <a name="parseEvaluationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseEvaluationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseEvaluationJobArn(arn: string)
```

Parses a evaluation-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseEvaluationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFlowAliasArn` <a name="parseFlowAliasArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseFlowAliasArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseFlowAliasArn(arn: string)
```

Parses a flow-alias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseFlowAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFlowArn` <a name="parseFlowArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseFlowArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseFlowArn(arn: string)
```

Parses a flow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFlowExecutionArn` <a name="parseFlowExecutionArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseFlowExecutionArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseFlowExecutionArn(arn: string)
```

Parses a flow-execution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseFlowExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFoundationModelArn` <a name="parseFoundationModelArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseFoundationModelArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseFoundationModelArn(arn: string)
```

Parses a foundation-model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseFoundationModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGuardrailArn` <a name="parseGuardrailArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseGuardrailArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseGuardrailArn(arn: string)
```

Parses a guardrail ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseGuardrailArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGuardrailProfileArn` <a name="parseGuardrailProfileArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseGuardrailProfileArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseGuardrailProfileArn(arn: string)
```

Parses a guardrail-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseGuardrailProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImportedModelArn` <a name="parseImportedModelArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseImportedModelArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseImportedModelArn(arn: string)
```

Parses a imported-model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseImportedModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInferenceProfileArn` <a name="parseInferenceProfileArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseInferenceProfileArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseInferenceProfileArn(arn: string)
```

Parses a inference-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseInferenceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKnowledgeBaseArn` <a name="parseKnowledgeBaseArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseKnowledgeBaseArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseKnowledgeBaseArn(arn: string)
```

Parses a knowledge-base ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseKnowledgeBaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelCopyJobArn` <a name="parseModelCopyJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseModelCopyJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseModelCopyJobArn(arn: string)
```

Parses a model-copy-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseModelCopyJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelCustomizationJobArn` <a name="parseModelCustomizationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseModelCustomizationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseModelCustomizationJobArn(arn: string)
```

Parses a model-customization-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseModelCustomizationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelEvaluationJobArn` <a name="parseModelEvaluationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseModelEvaluationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseModelEvaluationJobArn(arn: string)
```

Parses a model-evaluation-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseModelEvaluationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelImportJobArn` <a name="parseModelImportJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseModelImportJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseModelImportJobArn(arn: string)
```

Parses a model-import-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseModelImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelInvocationJobArn` <a name="parseModelInvocationJobArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseModelInvocationJobArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseModelInvocationJobArn(arn: string)
```

Parses a model-invocation-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseModelInvocationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseProjectArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseProjectArn(arn: string)
```

Parses a project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePromptArn` <a name="parsePromptArn" id="@cdk_utils/iam.bedrock.BedrockResources.parsePromptArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parsePromptArn(arn: string)
```

Parses a prompt ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parsePromptArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePromptRouterArn` <a name="parsePromptRouterArn" id="@cdk_utils/iam.bedrock.BedrockResources.parsePromptRouterArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parsePromptRouterArn(arn: string)
```

Parses a prompt-router ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parsePromptRouterArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePromptVersionArn` <a name="parsePromptVersionArn" id="@cdk_utils/iam.bedrock.BedrockResources.parsePromptVersionArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parsePromptVersionArn(arn: string)
```

Parses a prompt-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parsePromptVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProvisionedModelArn` <a name="parseProvisionedModelArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseProvisionedModelArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseProvisionedModelArn(arn: string)
```

Parses a provisioned-model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseProvisionedModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseSessionArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseSessionArn(arn: string)
```

Parses a session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSystemToolArn` <a name="parseSystemToolArn" id="@cdk_utils/iam.bedrock.BedrockResources.parseSystemToolArn"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.parseSystemToolArn(arn: string)
```

Parses a system-tool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock.BedrockResources.parseSystemToolArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.bedrock.BedrockResources.project"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.project(props: BedrockProjectArnProps)
```

Builds an ARN for the project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockProjectArnProps">BedrockProjectArnProps</a>

---

##### `prompt` <a name="prompt" id="@cdk_utils/iam.bedrock.BedrockResources.prompt"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.prompt(props: BedrockPromptArnProps)
```

Builds an ARN for the prompt resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.prompt.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockPromptArnProps">BedrockPromptArnProps</a>

---

##### `promptRouter` <a name="promptRouter" id="@cdk_utils/iam.bedrock.BedrockResources.promptRouter"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.promptRouter(props: BedrockPromptRouterArnProps)
```

Builds an ARN for the prompt-router resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.promptRouter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockPromptRouterArnProps">BedrockPromptRouterArnProps</a>

---

##### `promptVersion` <a name="promptVersion" id="@cdk_utils/iam.bedrock.BedrockResources.promptVersion"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.promptVersion(props: BedrockPromptVersionArnProps)
```

Builds an ARN for the prompt-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.promptVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockPromptVersionArnProps">BedrockPromptVersionArnProps</a>

---

##### `provisionedModel` <a name="provisionedModel" id="@cdk_utils/iam.bedrock.BedrockResources.provisionedModel"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.provisionedModel(props: BedrockProvisionedModelArnProps)
```

Builds an ARN for the provisioned-model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.provisionedModel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockProvisionedModelArnProps">BedrockProvisionedModelArnProps</a>

---

##### `session` <a name="session" id="@cdk_utils/iam.bedrock.BedrockResources.session"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.session(props: BedrockSessionArnProps)
```

Builds an ARN for the session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockSessionArnProps">BedrockSessionArnProps</a>

---

##### `systemTool` <a name="systemTool" id="@cdk_utils/iam.bedrock.BedrockResources.systemTool"></a>

```typescript
import { bedrock } from '@cdk_utils/iam'

bedrock.BedrockResources.systemTool(props: BedrockSystemToolArnProps)
```

Builds an ARN for the system-tool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock.BedrockResources.systemTool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock.BedrockSystemToolArnProps">BedrockSystemToolArnProps</a>

---




