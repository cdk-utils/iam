# `wisdom` Submodule <a name="`wisdom` Submodule" id="@cdk_utils/iam.wisdom"></a>


## Structs <a name="Structs" id="Structs"></a>

### WisdomAiAgentArnComponents <a name="WisdomAiAgentArnComponents" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents"></a>

Parsed components of a AIAgent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomAiAgentArnComponents: wisdom.WisdomAiAgentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.property.aiAgentId">aiAgentId</a></code> | <code>string</code> | The AIAgentId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aiAgentId`<sup>Required</sup> <a name="aiAgentId" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.property.aiAgentId"></a>

```typescript
public readonly aiAgentId: string;
```

- *Type:* string

The AIAgentId component.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WisdomAiAgentArnProps <a name="WisdomAiAgentArnProps" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnProps"></a>

Properties for building a AIAgent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomAiAgentArnProps: wisdom.WisdomAiAgentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.property.aiAgentId">aiAgentId</a></code> | <code>string</code> | The AIAgentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aiAgentId`<sup>Required</sup> <a name="aiAgentId" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.property.aiAgentId"></a>

```typescript
public readonly aiAgentId: string;
```

- *Type:* string

The AIAgentId component of the ARN.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomAiAgentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WisdomAiGuardrailArnComponents <a name="WisdomAiGuardrailArnComponents" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents"></a>

Parsed components of a AIGuardrail ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomAiGuardrailArnComponents: wisdom.WisdomAiGuardrailArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.property.aiGuardrailId">aiGuardrailId</a></code> | <code>string</code> | The AIGuardrailId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aiGuardrailId`<sup>Required</sup> <a name="aiGuardrailId" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.property.aiGuardrailId"></a>

```typescript
public readonly aiGuardrailId: string;
```

- *Type:* string

The AIGuardrailId component.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WisdomAiGuardrailArnProps <a name="WisdomAiGuardrailArnProps" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps"></a>

Properties for building a AIGuardrail ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomAiGuardrailArnProps: wisdom.WisdomAiGuardrailArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.property.aiGuardrailId">aiGuardrailId</a></code> | <code>string</code> | The AIGuardrailId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aiGuardrailId`<sup>Required</sup> <a name="aiGuardrailId" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.property.aiGuardrailId"></a>

```typescript
public readonly aiGuardrailId: string;
```

- *Type:* string

The AIGuardrailId component of the ARN.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WisdomAiPromptArnComponents <a name="WisdomAiPromptArnComponents" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents"></a>

Parsed components of a AIPrompt ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomAiPromptArnComponents: wisdom.WisdomAiPromptArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.property.aiPromptId">aiPromptId</a></code> | <code>string</code> | The AIPromptId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aiPromptId`<sup>Required</sup> <a name="aiPromptId" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.property.aiPromptId"></a>

```typescript
public readonly aiPromptId: string;
```

- *Type:* string

The AIPromptId component.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WisdomAiPromptArnProps <a name="WisdomAiPromptArnProps" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnProps"></a>

Properties for building a AIPrompt ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomAiPromptArnProps: wisdom.WisdomAiPromptArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.property.aiPromptId">aiPromptId</a></code> | <code>string</code> | The AIPromptId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aiPromptId`<sup>Required</sup> <a name="aiPromptId" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.property.aiPromptId"></a>

```typescript
public readonly aiPromptId: string;
```

- *Type:* string

The AIPromptId component of the ARN.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomAiPromptArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WisdomAssistantArnComponents <a name="WisdomAssistantArnComponents" id="@cdk_utils/iam.wisdom.WisdomAssistantArnComponents"></a>

Parsed components of a Assistant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomAssistantArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomAssistantArnComponents: wisdom.WisdomAssistantArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantArnComponents.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomAssistantArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomAssistantArnComponents.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomAssistantArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomAssistantArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WisdomAssistantArnProps <a name="WisdomAssistantArnProps" id="@cdk_utils/iam.wisdom.WisdomAssistantArnProps"></a>

Properties for building a Assistant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomAssistantArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomAssistantArnProps: wisdom.WisdomAssistantArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantArnProps.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomAssistantArnProps.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomAssistantArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomAssistantArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomAssistantArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WisdomAssistantAssociationArnComponents <a name="WisdomAssistantAssociationArnComponents" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents"></a>

Parsed components of a AssistantAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomAssistantAssociationArnComponents: wisdom.WisdomAssistantAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.property.assistantAssociationId">assistantAssociationId</a></code> | <code>string</code> | The AssistantAssociationId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assistantAssociationId`<sup>Required</sup> <a name="assistantAssociationId" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.property.assistantAssociationId"></a>

```typescript
public readonly assistantAssociationId: string;
```

- *Type:* string

The AssistantAssociationId component.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WisdomAssistantAssociationArnProps <a name="WisdomAssistantAssociationArnProps" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps"></a>

Properties for building a AssistantAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomAssistantAssociationArnProps: wisdom.WisdomAssistantAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.property.assistantAssociationId">assistantAssociationId</a></code> | <code>string</code> | The AssistantAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assistantAssociationId`<sup>Required</sup> <a name="assistantAssociationId" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.property.assistantAssociationId"></a>

```typescript
public readonly assistantAssociationId: string;
```

- *Type:* string

The AssistantAssociationId component of the ARN.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WisdomContentArnComponents <a name="WisdomContentArnComponents" id="@cdk_utils/iam.wisdom.WisdomContentArnComponents"></a>

Parsed components of a Content ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomContentArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomContentArnComponents: wisdom.WisdomContentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentArnComponents.property.contentId">contentId</a></code> | <code>string</code> | The ContentId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentArnComponents.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomContentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contentId`<sup>Required</sup> <a name="contentId" id="@cdk_utils/iam.wisdom.WisdomContentArnComponents.property.contentId"></a>

```typescript
public readonly contentId: string;
```

- *Type:* string

The ContentId component.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.wisdom.WisdomContentArnComponents.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomContentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomContentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WisdomContentArnProps <a name="WisdomContentArnProps" id="@cdk_utils/iam.wisdom.WisdomContentArnProps"></a>

Properties for building a Content ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomContentArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomContentArnProps: wisdom.WisdomContentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentArnProps.property.contentId">contentId</a></code> | <code>string</code> | The ContentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentArnProps.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contentId`<sup>Required</sup> <a name="contentId" id="@cdk_utils/iam.wisdom.WisdomContentArnProps.property.contentId"></a>

```typescript
public readonly contentId: string;
```

- *Type:* string

The ContentId component of the ARN.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.wisdom.WisdomContentArnProps.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomContentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomContentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomContentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WisdomContentAssociationArnComponents <a name="WisdomContentAssociationArnComponents" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents"></a>

Parsed components of a ContentAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomContentAssociationArnComponents: wisdom.WisdomContentAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.contentAssociationId">contentAssociationId</a></code> | <code>string</code> | The ContentAssociationId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.contentId">contentId</a></code> | <code>string</code> | The ContentId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contentAssociationId`<sup>Required</sup> <a name="contentAssociationId" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.contentAssociationId"></a>

```typescript
public readonly contentAssociationId: string;
```

- *Type:* string

The ContentAssociationId component.

---

##### `contentId`<sup>Required</sup> <a name="contentId" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.contentId"></a>

```typescript
public readonly contentId: string;
```

- *Type:* string

The ContentId component.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WisdomContentAssociationArnProps <a name="WisdomContentAssociationArnProps" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps"></a>

Properties for building a ContentAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomContentAssociationArnProps: wisdom.WisdomContentAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.contentAssociationId">contentAssociationId</a></code> | <code>string</code> | The ContentAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.contentId">contentId</a></code> | <code>string</code> | The ContentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contentAssociationId`<sup>Required</sup> <a name="contentAssociationId" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.contentAssociationId"></a>

```typescript
public readonly contentAssociationId: string;
```

- *Type:* string

The ContentAssociationId component of the ARN.

---

##### `contentId`<sup>Required</sup> <a name="contentId" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.contentId"></a>

```typescript
public readonly contentId: string;
```

- *Type:* string

The ContentId component of the ARN.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WisdomKnowledgeBaseArnComponents <a name="WisdomKnowledgeBaseArnComponents" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnComponents"></a>

Parsed components of a KnowledgeBase ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomKnowledgeBaseArnComponents: wisdom.WisdomKnowledgeBaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnComponents.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnComponents.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WisdomKnowledgeBaseArnProps <a name="WisdomKnowledgeBaseArnProps" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps"></a>

Properties for building a KnowledgeBase ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomKnowledgeBaseArnProps: wisdom.WisdomKnowledgeBaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WisdomMessageTemplateArnComponents <a name="WisdomMessageTemplateArnComponents" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents"></a>

Parsed components of a MessageTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomMessageTemplateArnComponents: wisdom.WisdomMessageTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.property.messageTemplateId">messageTemplateId</a></code> | <code>string</code> | The MessageTemplateId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component.

---

##### `messageTemplateId`<sup>Required</sup> <a name="messageTemplateId" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.property.messageTemplateId"></a>

```typescript
public readonly messageTemplateId: string;
```

- *Type:* string

The MessageTemplateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WisdomMessageTemplateArnProps <a name="WisdomMessageTemplateArnProps" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps"></a>

Properties for building a MessageTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomMessageTemplateArnProps: wisdom.WisdomMessageTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.property.messageTemplateId">messageTemplateId</a></code> | <code>string</code> | The MessageTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component of the ARN.

---

##### `messageTemplateId`<sup>Required</sup> <a name="messageTemplateId" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.property.messageTemplateId"></a>

```typescript
public readonly messageTemplateId: string;
```

- *Type:* string

The MessageTemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WisdomQuickResponseArnComponents <a name="WisdomQuickResponseArnComponents" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents"></a>

Parsed components of a QuickResponse ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomQuickResponseArnComponents: wisdom.WisdomQuickResponseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.property.quickResponseId">quickResponseId</a></code> | <code>string</code> | The QuickResponseId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `quickResponseId`<sup>Required</sup> <a name="quickResponseId" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.property.quickResponseId"></a>

```typescript
public readonly quickResponseId: string;
```

- *Type:* string

The QuickResponseId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WisdomQuickResponseArnProps <a name="WisdomQuickResponseArnProps" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps"></a>

Properties for building a QuickResponse ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomQuickResponseArnProps: wisdom.WisdomQuickResponseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The KnowledgeBaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.property.quickResponseId">quickResponseId</a></code> | <code>string</code> | The QuickResponseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The KnowledgeBaseId component of the ARN.

---

##### `quickResponseId`<sup>Required</sup> <a name="quickResponseId" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.property.quickResponseId"></a>

```typescript
public readonly quickResponseId: string;
```

- *Type:* string

The QuickResponseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WisdomSessionArnComponents <a name="WisdomSessionArnComponents" id="@cdk_utils/iam.wisdom.WisdomSessionArnComponents"></a>

Parsed components of a Session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomSessionArnComponents.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomSessionArnComponents: wisdom.WisdomSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomSessionArnComponents.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomSessionArnComponents.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.wisdom.WisdomSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

### WisdomSessionArnProps <a name="WisdomSessionArnProps" id="@cdk_utils/iam.wisdom.WisdomSessionArnProps"></a>

Properties for building a Session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wisdom.WisdomSessionArnProps.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

const wisdomSessionArnProps: wisdom.WisdomSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomSessionArnProps.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.wisdom.WisdomSessionArnProps.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component of the ARN.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.wisdom.WisdomSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wisdom.WisdomSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wisdom.WisdomSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wisdom.WisdomSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomActions <a name="WisdomActions" id="@cdk_utils/iam.wisdom.WisdomActions"></a>

IAM action constants for the wisdom service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wisdom.WisdomActions.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

new wisdom.WisdomActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetAIAgent">actionGetAIAgent</a></code> | <code>string</code> | [Read] wisdom:GetAIAgent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetAIGuardrail">actionGetAIGuardrail</a></code> | <code>string</code> | [Read] wisdom:GetAIGuardrail. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetAIPrompt">actionGetAIPrompt</a></code> | <code>string</code> | [Read] wisdom:GetAIPrompt. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetAssistant">actionGetAssistant</a></code> | <code>string</code> | [Read] wisdom:GetAssistant. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetAssistantAssociation">actionGetAssistantAssociation</a></code> | <code>string</code> | [Read] wisdom:GetAssistantAssociation. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetContent">actionGetContent</a></code> | <code>string</code> | [Read] wisdom:GetContent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetContentAssociation">actionGetContentAssociation</a></code> | <code>string</code> | [Read] wisdom:GetContentAssociation. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetContentSummary">actionGetContentSummary</a></code> | <code>string</code> | [Read] wisdom:GetContentSummary. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetImportJob">actionGetImportJob</a></code> | <code>string</code> | [Read] wisdom:GetImportJob. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetKnowledgeBase">actionGetKnowledgeBase</a></code> | <code>string</code> | [Read] wisdom:GetKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetMessageTemplate">actionGetMessageTemplate</a></code> | <code>string</code> | [Read] wisdom:GetMessageTemplate. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetNextMessage">actionGetNextMessage</a></code> | <code>string</code> | [Read] wisdom:GetNextMessage. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetQuickResponse">actionGetQuickResponse</a></code> | <code>string</code> | [Read] wisdom:GetQuickResponse. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetRecommendations">actionGetRecommendations</a></code> | <code>string</code> | [Read] wisdom:GetRecommendations. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] wisdom:GetSession. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ActivateMessageTemplate">ActivateMessageTemplate</a></code> | <code>string</code> | [Write] wisdom:ActivateMessageTemplate. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] wisdom:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIAgent">CreateAIAgent</a></code> | <code>string</code> | [Write] wisdom:CreateAIAgent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIAgentVersion">CreateAIAgentVersion</a></code> | <code>string</code> | [Write] wisdom:CreateAIAgentVersion. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIGuardrail">CreateAIGuardrail</a></code> | <code>string</code> | [Write] wisdom:CreateAIGuardrail. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIGuardrailVersion">CreateAIGuardrailVersion</a></code> | <code>string</code> | [Write] wisdom:CreateAIGuardrailVersion. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIPrompt">CreateAIPrompt</a></code> | <code>string</code> | [Write] wisdom:CreateAIPrompt. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIPromptVersion">CreateAIPromptVersion</a></code> | <code>string</code> | [Write] wisdom:CreateAIPromptVersion. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateAssistant">CreateAssistant</a></code> | <code>string</code> | [Write] wisdom:CreateAssistant. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateAssistantAssociation">CreateAssistantAssociation</a></code> | <code>string</code> | [Write] wisdom:CreateAssistantAssociation. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateContent">CreateContent</a></code> | <code>string</code> | [Write] wisdom:CreateContent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateContentAssociation">CreateContentAssociation</a></code> | <code>string</code> | [Write] wisdom:CreateContentAssociation. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateKnowledgeBase">CreateKnowledgeBase</a></code> | <code>string</code> | [Write] wisdom:CreateKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateMessageTemplate">CreateMessageTemplate</a></code> | <code>string</code> | [Write] wisdom:CreateMessageTemplate. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateMessageTemplateAttachment">CreateMessageTemplateAttachment</a></code> | <code>string</code> | [Write] wisdom:CreateMessageTemplateAttachment. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateMessageTemplateVersion">CreateMessageTemplateVersion</a></code> | <code>string</code> | [Write] wisdom:CreateMessageTemplateVersion. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateQuickResponse">CreateQuickResponse</a></code> | <code>string</code> | [Write] wisdom:CreateQuickResponse. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.CreateSession">CreateSession</a></code> | <code>string</code> | [Write] wisdom:CreateSession. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeactivateMessageTemplate">DeactivateMessageTemplate</a></code> | <code>string</code> | [Write] wisdom:DeactivateMessageTemplate. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIAgent">DeleteAIAgent</a></code> | <code>string</code> | [Write] wisdom:DeleteAIAgent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIAgentVersion">DeleteAIAgentVersion</a></code> | <code>string</code> | [Write] wisdom:DeleteAIAgentVersion. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIGuardrail">DeleteAIGuardrail</a></code> | <code>string</code> | [Write] wisdom:DeleteAIGuardrail. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIGuardrailVersion">DeleteAIGuardrailVersion</a></code> | <code>string</code> | [Write] wisdom:DeleteAIGuardrailVersion. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIPrompt">DeleteAIPrompt</a></code> | <code>string</code> | [Write] wisdom:DeleteAIPrompt. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIPromptVersion">DeleteAIPromptVersion</a></code> | <code>string</code> | [Write] wisdom:DeleteAIPromptVersion. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAssistant">DeleteAssistant</a></code> | <code>string</code> | [Write] wisdom:DeleteAssistant. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAssistantAssociation">DeleteAssistantAssociation</a></code> | <code>string</code> | [Write] wisdom:DeleteAssistantAssociation. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteContent">DeleteContent</a></code> | <code>string</code> | [Write] wisdom:DeleteContent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteContentAssociation">DeleteContentAssociation</a></code> | <code>string</code> | [Write] wisdom:DeleteContentAssociation. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteImportJob">DeleteImportJob</a></code> | <code>string</code> | [Write] wisdom:DeleteImportJob. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteKnowledgeBase">DeleteKnowledgeBase</a></code> | <code>string</code> | [Write] wisdom:DeleteKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteMessageTemplate">DeleteMessageTemplate</a></code> | <code>string</code> | [Write] wisdom:DeleteMessageTemplate. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteMessageTemplateAttachment">DeleteMessageTemplateAttachment</a></code> | <code>string</code> | [Write] wisdom:DeleteMessageTemplateAttachment. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.DeleteQuickResponse">DeleteQuickResponse</a></code> | <code>string</code> | [Write] wisdom:DeleteQuickResponse. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListAIAgents">ListAIAgents</a></code> | <code>string</code> | [List] wisdom:ListAIAgents. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListAIAgentVersions">ListAIAgentVersions</a></code> | <code>string</code> | [List] wisdom:ListAIAgentVersions. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListAIGuardrails">ListAIGuardrails</a></code> | <code>string</code> | [List] wisdom:ListAIGuardrails. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListAIGuardrailVersions">ListAIGuardrailVersions</a></code> | <code>string</code> | [List] wisdom:ListAIGuardrailVersions. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListAIPrompts">ListAIPrompts</a></code> | <code>string</code> | [List] wisdom:ListAIPrompts. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListAIPromptVersions">ListAIPromptVersions</a></code> | <code>string</code> | [List] wisdom:ListAIPromptVersions. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListAssistantAssociations">ListAssistantAssociations</a></code> | <code>string</code> | [List] wisdom:ListAssistantAssociations. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListAssistants">ListAssistants</a></code> | <code>string</code> | [List] wisdom:ListAssistants. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListContentAssociations">ListContentAssociations</a></code> | <code>string</code> | [List] wisdom:ListContentAssociations. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListContents">ListContents</a></code> | <code>string</code> | [List] wisdom:ListContents. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListImportJobs">ListImportJobs</a></code> | <code>string</code> | [List] wisdom:ListImportJobs. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListKnowledgeBases">ListKnowledgeBases</a></code> | <code>string</code> | [List] wisdom:ListKnowledgeBases. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListMessages">ListMessages</a></code> | <code>string</code> | [List] wisdom:ListMessages. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListMessageTemplates">ListMessageTemplates</a></code> | <code>string</code> | [List] wisdom:ListMessageTemplates. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListMessageTemplateVersions">ListMessageTemplateVersions</a></code> | <code>string</code> | [List] wisdom:ListMessageTemplateVersions. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListModels">ListModels</a></code> | <code>string</code> | [List] wisdom:ListModels. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListQuickResponses">ListQuickResponses</a></code> | <code>string</code> | [List] wisdom:ListQuickResponses. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListSpans">ListSpans</a></code> | <code>string</code> | [List] wisdom:ListSpans. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] wisdom:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.NotifyRecommendationsReceived">NotifyRecommendationsReceived</a></code> | <code>string</code> | [Write] wisdom:NotifyRecommendationsReceived. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.PutFeedback">PutFeedback</a></code> | <code>string</code> | [Write] wisdom:PutFeedback. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.QueryAssistant">QueryAssistant</a></code> | <code>string</code> | [Read] wisdom:QueryAssistant. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.RemoveAssistantAIAgent">RemoveAssistantAIAgent</a></code> | <code>string</code> | [Write] wisdom:RemoveAssistantAIAgent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.RemoveKnowledgeBaseTemplateUri">RemoveKnowledgeBaseTemplateUri</a></code> | <code>string</code> | [Write] wisdom:RemoveKnowledgeBaseTemplateUri. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.RenderMessageTemplate">RenderMessageTemplate</a></code> | <code>string</code> | [Read] wisdom:RenderMessageTemplate. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.Retrieve">Retrieve</a></code> | <code>string</code> | [Read] wisdom:Retrieve. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.SearchContent">SearchContent</a></code> | <code>string</code> | [Read] wisdom:SearchContent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.SearchMessageTemplates">SearchMessageTemplates</a></code> | <code>string</code> | [Read] wisdom:SearchMessageTemplates. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.SearchQuickResponses">SearchQuickResponses</a></code> | <code>string</code> | [Read] wisdom:SearchQuickResponses. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.SearchSessions">SearchSessions</a></code> | <code>string</code> | [Read] wisdom:SearchSessions. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.SendMessage">SendMessage</a></code> | <code>string</code> | [Write] wisdom:SendMessage. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.StartContentUpload">StartContentUpload</a></code> | <code>string</code> | [Write] wisdom:StartContentUpload. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.StartImportJob">StartImportJob</a></code> | <code>string</code> | [Write] wisdom:StartImportJob. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] wisdom:TagResource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] wisdom:UntagResource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateAIAgent">UpdateAIAgent</a></code> | <code>string</code> | [Write] wisdom:UpdateAIAgent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateAIGuardrail">UpdateAIGuardrail</a></code> | <code>string</code> | [Write] wisdom:UpdateAIGuardrail. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateAIPrompt">UpdateAIPrompt</a></code> | <code>string</code> | [Write] wisdom:UpdateAIPrompt. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateAssistantAIAgent">UpdateAssistantAIAgent</a></code> | <code>string</code> | [Write] wisdom:UpdateAssistantAIAgent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateContent">UpdateContent</a></code> | <code>string</code> | [Write] wisdom:UpdateContent. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateKnowledgeBaseTemplateUri">UpdateKnowledgeBaseTemplateUri</a></code> | <code>string</code> | [Write] wisdom:UpdateKnowledgeBaseTemplateUri. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateMessageTemplate">UpdateMessageTemplate</a></code> | <code>string</code> | [Write] wisdom:UpdateMessageTemplate. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateMessageTemplateMetadata">UpdateMessageTemplateMetadata</a></code> | <code>string</code> | [Write] wisdom:UpdateMessageTemplateMetadata. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateQuickResponse">UpdateQuickResponse</a></code> | <code>string</code> | [Write] wisdom:UpdateQuickResponse. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateSession">UpdateSession</a></code> | <code>string</code> | [Write] wisdom:UpdateSession. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomActions.property.UpdateSessionData">UpdateSessionData</a></code> | <code>string</code> | [Write] wisdom:UpdateSessionData. |

---

##### `actionGetAIAgent`<sup>Required</sup> <a name="actionGetAIAgent" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetAIAgent"></a>

```typescript
public readonly actionGetAIAgent: string;
```

- *Type:* string

[Read] wisdom:GetAIAgent.

---

##### `actionGetAIGuardrail`<sup>Required</sup> <a name="actionGetAIGuardrail" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetAIGuardrail"></a>

```typescript
public readonly actionGetAIGuardrail: string;
```

- *Type:* string

[Read] wisdom:GetAIGuardrail.

---

##### `actionGetAIPrompt`<sup>Required</sup> <a name="actionGetAIPrompt" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetAIPrompt"></a>

```typescript
public readonly actionGetAIPrompt: string;
```

- *Type:* string

[Read] wisdom:GetAIPrompt.

---

##### `actionGetAssistant`<sup>Required</sup> <a name="actionGetAssistant" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetAssistant"></a>

```typescript
public readonly actionGetAssistant: string;
```

- *Type:* string

[Read] wisdom:GetAssistant.

---

##### `actionGetAssistantAssociation`<sup>Required</sup> <a name="actionGetAssistantAssociation" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetAssistantAssociation"></a>

```typescript
public readonly actionGetAssistantAssociation: string;
```

- *Type:* string

[Read] wisdom:GetAssistantAssociation.

---

##### `actionGetContent`<sup>Required</sup> <a name="actionGetContent" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetContent"></a>

```typescript
public readonly actionGetContent: string;
```

- *Type:* string

[Read] wisdom:GetContent.

---

##### `actionGetContentAssociation`<sup>Required</sup> <a name="actionGetContentAssociation" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetContentAssociation"></a>

```typescript
public readonly actionGetContentAssociation: string;
```

- *Type:* string

[Read] wisdom:GetContentAssociation.

---

##### `actionGetContentSummary`<sup>Required</sup> <a name="actionGetContentSummary" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetContentSummary"></a>

```typescript
public readonly actionGetContentSummary: string;
```

- *Type:* string

[Read] wisdom:GetContentSummary.

---

##### `actionGetImportJob`<sup>Required</sup> <a name="actionGetImportJob" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetImportJob"></a>

```typescript
public readonly actionGetImportJob: string;
```

- *Type:* string

[Read] wisdom:GetImportJob.

---

##### `actionGetKnowledgeBase`<sup>Required</sup> <a name="actionGetKnowledgeBase" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetKnowledgeBase"></a>

```typescript
public readonly actionGetKnowledgeBase: string;
```

- *Type:* string

[Read] wisdom:GetKnowledgeBase.

---

##### `actionGetMessageTemplate`<sup>Required</sup> <a name="actionGetMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetMessageTemplate"></a>

```typescript
public readonly actionGetMessageTemplate: string;
```

- *Type:* string

[Read] wisdom:GetMessageTemplate.

---

##### `actionGetNextMessage`<sup>Required</sup> <a name="actionGetNextMessage" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetNextMessage"></a>

```typescript
public readonly actionGetNextMessage: string;
```

- *Type:* string

[Read] wisdom:GetNextMessage.

---

##### `actionGetQuickResponse`<sup>Required</sup> <a name="actionGetQuickResponse" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetQuickResponse"></a>

```typescript
public readonly actionGetQuickResponse: string;
```

- *Type:* string

[Read] wisdom:GetQuickResponse.

---

##### `actionGetRecommendations`<sup>Required</sup> <a name="actionGetRecommendations" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetRecommendations"></a>

```typescript
public readonly actionGetRecommendations: string;
```

- *Type:* string

[Read] wisdom:GetRecommendations.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.wisdom.WisdomActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] wisdom:GetSession.

---

##### `ActivateMessageTemplate`<sup>Required</sup> <a name="ActivateMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomActions.property.ActivateMessageTemplate"></a>

```typescript
public readonly ActivateMessageTemplate: string;
```

- *Type:* string

[Write] wisdom:ActivateMessageTemplate.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.wisdom.WisdomActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.wisdom.WisdomActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] wisdom:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.wisdom.WisdomActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.wisdom.WisdomActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.wisdom.WisdomActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.wisdom.WisdomActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAIAgent`<sup>Required</sup> <a name="CreateAIAgent" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIAgent"></a>

```typescript
public readonly CreateAIAgent: string;
```

- *Type:* string

[Write] wisdom:CreateAIAgent.

---

##### `CreateAIAgentVersion`<sup>Required</sup> <a name="CreateAIAgentVersion" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIAgentVersion"></a>

```typescript
public readonly CreateAIAgentVersion: string;
```

- *Type:* string

[Write] wisdom:CreateAIAgentVersion.

---

##### `CreateAIGuardrail`<sup>Required</sup> <a name="CreateAIGuardrail" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIGuardrail"></a>

```typescript
public readonly CreateAIGuardrail: string;
```

- *Type:* string

[Write] wisdom:CreateAIGuardrail.

---

##### `CreateAIGuardrailVersion`<sup>Required</sup> <a name="CreateAIGuardrailVersion" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIGuardrailVersion"></a>

```typescript
public readonly CreateAIGuardrailVersion: string;
```

- *Type:* string

[Write] wisdom:CreateAIGuardrailVersion.

---

##### `CreateAIPrompt`<sup>Required</sup> <a name="CreateAIPrompt" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIPrompt"></a>

```typescript
public readonly CreateAIPrompt: string;
```

- *Type:* string

[Write] wisdom:CreateAIPrompt.

---

##### `CreateAIPromptVersion`<sup>Required</sup> <a name="CreateAIPromptVersion" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateAIPromptVersion"></a>

```typescript
public readonly CreateAIPromptVersion: string;
```

- *Type:* string

[Write] wisdom:CreateAIPromptVersion.

---

##### `CreateAssistant`<sup>Required</sup> <a name="CreateAssistant" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateAssistant"></a>

```typescript
public readonly CreateAssistant: string;
```

- *Type:* string

[Write] wisdom:CreateAssistant.

---

##### `CreateAssistantAssociation`<sup>Required</sup> <a name="CreateAssistantAssociation" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateAssistantAssociation"></a>

```typescript
public readonly CreateAssistantAssociation: string;
```

- *Type:* string

[Write] wisdom:CreateAssistantAssociation.

---

##### `CreateContent`<sup>Required</sup> <a name="CreateContent" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateContent"></a>

```typescript
public readonly CreateContent: string;
```

- *Type:* string

[Write] wisdom:CreateContent.

---

##### `CreateContentAssociation`<sup>Required</sup> <a name="CreateContentAssociation" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateContentAssociation"></a>

```typescript
public readonly CreateContentAssociation: string;
```

- *Type:* string

[Write] wisdom:CreateContentAssociation.

---

##### `CreateKnowledgeBase`<sup>Required</sup> <a name="CreateKnowledgeBase" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateKnowledgeBase"></a>

```typescript
public readonly CreateKnowledgeBase: string;
```

- *Type:* string

[Write] wisdom:CreateKnowledgeBase.

---

##### `CreateMessageTemplate`<sup>Required</sup> <a name="CreateMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateMessageTemplate"></a>

```typescript
public readonly CreateMessageTemplate: string;
```

- *Type:* string

[Write] wisdom:CreateMessageTemplate.

---

##### `CreateMessageTemplateAttachment`<sup>Required</sup> <a name="CreateMessageTemplateAttachment" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateMessageTemplateAttachment"></a>

```typescript
public readonly CreateMessageTemplateAttachment: string;
```

- *Type:* string

[Write] wisdom:CreateMessageTemplateAttachment.

---

##### `CreateMessageTemplateVersion`<sup>Required</sup> <a name="CreateMessageTemplateVersion" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateMessageTemplateVersion"></a>

```typescript
public readonly CreateMessageTemplateVersion: string;
```

- *Type:* string

[Write] wisdom:CreateMessageTemplateVersion.

---

##### `CreateQuickResponse`<sup>Required</sup> <a name="CreateQuickResponse" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateQuickResponse"></a>

```typescript
public readonly CreateQuickResponse: string;
```

- *Type:* string

[Write] wisdom:CreateQuickResponse.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.wisdom.WisdomActions.property.CreateSession"></a>

```typescript
public readonly CreateSession: string;
```

- *Type:* string

[Write] wisdom:CreateSession.

---

##### `DeactivateMessageTemplate`<sup>Required</sup> <a name="DeactivateMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeactivateMessageTemplate"></a>

```typescript
public readonly DeactivateMessageTemplate: string;
```

- *Type:* string

[Write] wisdom:DeactivateMessageTemplate.

---

##### `DeleteAIAgent`<sup>Required</sup> <a name="DeleteAIAgent" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIAgent"></a>

```typescript
public readonly DeleteAIAgent: string;
```

- *Type:* string

[Write] wisdom:DeleteAIAgent.

---

##### `DeleteAIAgentVersion`<sup>Required</sup> <a name="DeleteAIAgentVersion" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIAgentVersion"></a>

```typescript
public readonly DeleteAIAgentVersion: string;
```

- *Type:* string

[Write] wisdom:DeleteAIAgentVersion.

---

##### `DeleteAIGuardrail`<sup>Required</sup> <a name="DeleteAIGuardrail" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIGuardrail"></a>

```typescript
public readonly DeleteAIGuardrail: string;
```

- *Type:* string

[Write] wisdom:DeleteAIGuardrail.

---

##### `DeleteAIGuardrailVersion`<sup>Required</sup> <a name="DeleteAIGuardrailVersion" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIGuardrailVersion"></a>

```typescript
public readonly DeleteAIGuardrailVersion: string;
```

- *Type:* string

[Write] wisdom:DeleteAIGuardrailVersion.

---

##### `DeleteAIPrompt`<sup>Required</sup> <a name="DeleteAIPrompt" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIPrompt"></a>

```typescript
public readonly DeleteAIPrompt: string;
```

- *Type:* string

[Write] wisdom:DeleteAIPrompt.

---

##### `DeleteAIPromptVersion`<sup>Required</sup> <a name="DeleteAIPromptVersion" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAIPromptVersion"></a>

```typescript
public readonly DeleteAIPromptVersion: string;
```

- *Type:* string

[Write] wisdom:DeleteAIPromptVersion.

---

##### `DeleteAssistant`<sup>Required</sup> <a name="DeleteAssistant" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAssistant"></a>

```typescript
public readonly DeleteAssistant: string;
```

- *Type:* string

[Write] wisdom:DeleteAssistant.

---

##### `DeleteAssistantAssociation`<sup>Required</sup> <a name="DeleteAssistantAssociation" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteAssistantAssociation"></a>

```typescript
public readonly DeleteAssistantAssociation: string;
```

- *Type:* string

[Write] wisdom:DeleteAssistantAssociation.

---

##### `DeleteContent`<sup>Required</sup> <a name="DeleteContent" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteContent"></a>

```typescript
public readonly DeleteContent: string;
```

- *Type:* string

[Write] wisdom:DeleteContent.

---

##### `DeleteContentAssociation`<sup>Required</sup> <a name="DeleteContentAssociation" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteContentAssociation"></a>

```typescript
public readonly DeleteContentAssociation: string;
```

- *Type:* string

[Write] wisdom:DeleteContentAssociation.

---

##### `DeleteImportJob`<sup>Required</sup> <a name="DeleteImportJob" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteImportJob"></a>

```typescript
public readonly DeleteImportJob: string;
```

- *Type:* string

[Write] wisdom:DeleteImportJob.

---

##### `DeleteKnowledgeBase`<sup>Required</sup> <a name="DeleteKnowledgeBase" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteKnowledgeBase"></a>

```typescript
public readonly DeleteKnowledgeBase: string;
```

- *Type:* string

[Write] wisdom:DeleteKnowledgeBase.

---

##### `DeleteMessageTemplate`<sup>Required</sup> <a name="DeleteMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteMessageTemplate"></a>

```typescript
public readonly DeleteMessageTemplate: string;
```

- *Type:* string

[Write] wisdom:DeleteMessageTemplate.

---

##### `DeleteMessageTemplateAttachment`<sup>Required</sup> <a name="DeleteMessageTemplateAttachment" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteMessageTemplateAttachment"></a>

```typescript
public readonly DeleteMessageTemplateAttachment: string;
```

- *Type:* string

[Write] wisdom:DeleteMessageTemplateAttachment.

---

##### `DeleteQuickResponse`<sup>Required</sup> <a name="DeleteQuickResponse" id="@cdk_utils/iam.wisdom.WisdomActions.property.DeleteQuickResponse"></a>

```typescript
public readonly DeleteQuickResponse: string;
```

- *Type:* string

[Write] wisdom:DeleteQuickResponse.

---

##### `ListAIAgents`<sup>Required</sup> <a name="ListAIAgents" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListAIAgents"></a>

```typescript
public readonly ListAIAgents: string;
```

- *Type:* string

[List] wisdom:ListAIAgents.

---

##### `ListAIAgentVersions`<sup>Required</sup> <a name="ListAIAgentVersions" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListAIAgentVersions"></a>

```typescript
public readonly ListAIAgentVersions: string;
```

- *Type:* string

[List] wisdom:ListAIAgentVersions.

---

##### `ListAIGuardrails`<sup>Required</sup> <a name="ListAIGuardrails" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListAIGuardrails"></a>

```typescript
public readonly ListAIGuardrails: string;
```

- *Type:* string

[List] wisdom:ListAIGuardrails.

---

##### `ListAIGuardrailVersions`<sup>Required</sup> <a name="ListAIGuardrailVersions" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListAIGuardrailVersions"></a>

```typescript
public readonly ListAIGuardrailVersions: string;
```

- *Type:* string

[List] wisdom:ListAIGuardrailVersions.

---

##### `ListAIPrompts`<sup>Required</sup> <a name="ListAIPrompts" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListAIPrompts"></a>

```typescript
public readonly ListAIPrompts: string;
```

- *Type:* string

[List] wisdom:ListAIPrompts.

---

##### `ListAIPromptVersions`<sup>Required</sup> <a name="ListAIPromptVersions" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListAIPromptVersions"></a>

```typescript
public readonly ListAIPromptVersions: string;
```

- *Type:* string

[List] wisdom:ListAIPromptVersions.

---

##### `ListAssistantAssociations`<sup>Required</sup> <a name="ListAssistantAssociations" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListAssistantAssociations"></a>

```typescript
public readonly ListAssistantAssociations: string;
```

- *Type:* string

[List] wisdom:ListAssistantAssociations.

---

##### `ListAssistants`<sup>Required</sup> <a name="ListAssistants" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListAssistants"></a>

```typescript
public readonly ListAssistants: string;
```

- *Type:* string

[List] wisdom:ListAssistants.

---

##### `ListContentAssociations`<sup>Required</sup> <a name="ListContentAssociations" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListContentAssociations"></a>

```typescript
public readonly ListContentAssociations: string;
```

- *Type:* string

[List] wisdom:ListContentAssociations.

---

##### `ListContents`<sup>Required</sup> <a name="ListContents" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListContents"></a>

```typescript
public readonly ListContents: string;
```

- *Type:* string

[List] wisdom:ListContents.

---

##### `ListImportJobs`<sup>Required</sup> <a name="ListImportJobs" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListImportJobs"></a>

```typescript
public readonly ListImportJobs: string;
```

- *Type:* string

[List] wisdom:ListImportJobs.

---

##### `ListKnowledgeBases`<sup>Required</sup> <a name="ListKnowledgeBases" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListKnowledgeBases"></a>

```typescript
public readonly ListKnowledgeBases: string;
```

- *Type:* string

[List] wisdom:ListKnowledgeBases.

---

##### `ListMessages`<sup>Required</sup> <a name="ListMessages" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListMessages"></a>

```typescript
public readonly ListMessages: string;
```

- *Type:* string

[List] wisdom:ListMessages.

---

##### `ListMessageTemplates`<sup>Required</sup> <a name="ListMessageTemplates" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListMessageTemplates"></a>

```typescript
public readonly ListMessageTemplates: string;
```

- *Type:* string

[List] wisdom:ListMessageTemplates.

---

##### `ListMessageTemplateVersions`<sup>Required</sup> <a name="ListMessageTemplateVersions" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListMessageTemplateVersions"></a>

```typescript
public readonly ListMessageTemplateVersions: string;
```

- *Type:* string

[List] wisdom:ListMessageTemplateVersions.

---

##### `ListModels`<sup>Required</sup> <a name="ListModels" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListModels"></a>

```typescript
public readonly ListModels: string;
```

- *Type:* string

[List] wisdom:ListModels.

---

##### `ListQuickResponses`<sup>Required</sup> <a name="ListQuickResponses" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListQuickResponses"></a>

```typescript
public readonly ListQuickResponses: string;
```

- *Type:* string

[List] wisdom:ListQuickResponses.

---

##### `ListSpans`<sup>Required</sup> <a name="ListSpans" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListSpans"></a>

```typescript
public readonly ListSpans: string;
```

- *Type:* string

[List] wisdom:ListSpans.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.wisdom.WisdomActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] wisdom:ListTagsForResource.

---

##### `NotifyRecommendationsReceived`<sup>Required</sup> <a name="NotifyRecommendationsReceived" id="@cdk_utils/iam.wisdom.WisdomActions.property.NotifyRecommendationsReceived"></a>

```typescript
public readonly NotifyRecommendationsReceived: string;
```

- *Type:* string

[Write] wisdom:NotifyRecommendationsReceived.

---

##### `PutFeedback`<sup>Required</sup> <a name="PutFeedback" id="@cdk_utils/iam.wisdom.WisdomActions.property.PutFeedback"></a>

```typescript
public readonly PutFeedback: string;
```

- *Type:* string

[Write] wisdom:PutFeedback.

---

##### `QueryAssistant`<sup>Required</sup> <a name="QueryAssistant" id="@cdk_utils/iam.wisdom.WisdomActions.property.QueryAssistant"></a>

```typescript
public readonly QueryAssistant: string;
```

- *Type:* string

[Read] wisdom:QueryAssistant.

---

##### `RemoveAssistantAIAgent`<sup>Required</sup> <a name="RemoveAssistantAIAgent" id="@cdk_utils/iam.wisdom.WisdomActions.property.RemoveAssistantAIAgent"></a>

```typescript
public readonly RemoveAssistantAIAgent: string;
```

- *Type:* string

[Write] wisdom:RemoveAssistantAIAgent.

---

##### `RemoveKnowledgeBaseTemplateUri`<sup>Required</sup> <a name="RemoveKnowledgeBaseTemplateUri" id="@cdk_utils/iam.wisdom.WisdomActions.property.RemoveKnowledgeBaseTemplateUri"></a>

```typescript
public readonly RemoveKnowledgeBaseTemplateUri: string;
```

- *Type:* string

[Write] wisdom:RemoveKnowledgeBaseTemplateUri.

---

##### `RenderMessageTemplate`<sup>Required</sup> <a name="RenderMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomActions.property.RenderMessageTemplate"></a>

```typescript
public readonly RenderMessageTemplate: string;
```

- *Type:* string

[Read] wisdom:RenderMessageTemplate.

---

##### `Retrieve`<sup>Required</sup> <a name="Retrieve" id="@cdk_utils/iam.wisdom.WisdomActions.property.Retrieve"></a>

```typescript
public readonly Retrieve: string;
```

- *Type:* string

[Read] wisdom:Retrieve.

---

##### `SearchContent`<sup>Required</sup> <a name="SearchContent" id="@cdk_utils/iam.wisdom.WisdomActions.property.SearchContent"></a>

```typescript
public readonly SearchContent: string;
```

- *Type:* string

[Read] wisdom:SearchContent.

---

##### `SearchMessageTemplates`<sup>Required</sup> <a name="SearchMessageTemplates" id="@cdk_utils/iam.wisdom.WisdomActions.property.SearchMessageTemplates"></a>

```typescript
public readonly SearchMessageTemplates: string;
```

- *Type:* string

[Read] wisdom:SearchMessageTemplates.

---

##### `SearchQuickResponses`<sup>Required</sup> <a name="SearchQuickResponses" id="@cdk_utils/iam.wisdom.WisdomActions.property.SearchQuickResponses"></a>

```typescript
public readonly SearchQuickResponses: string;
```

- *Type:* string

[Read] wisdom:SearchQuickResponses.

---

##### `SearchSessions`<sup>Required</sup> <a name="SearchSessions" id="@cdk_utils/iam.wisdom.WisdomActions.property.SearchSessions"></a>

```typescript
public readonly SearchSessions: string;
```

- *Type:* string

[Read] wisdom:SearchSessions.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.wisdom.WisdomActions.property.SendMessage"></a>

```typescript
public readonly SendMessage: string;
```

- *Type:* string

[Write] wisdom:SendMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.wisdom.WisdomActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartContentUpload`<sup>Required</sup> <a name="StartContentUpload" id="@cdk_utils/iam.wisdom.WisdomActions.property.StartContentUpload"></a>

```typescript
public readonly StartContentUpload: string;
```

- *Type:* string

[Write] wisdom:StartContentUpload.

---

##### `StartImportJob`<sup>Required</sup> <a name="StartImportJob" id="@cdk_utils/iam.wisdom.WisdomActions.property.StartImportJob"></a>

```typescript
public readonly StartImportJob: string;
```

- *Type:* string

[Write] wisdom:StartImportJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.wisdom.WisdomActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] wisdom:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.wisdom.WisdomActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] wisdom:UntagResource.

---

##### `UpdateAIAgent`<sup>Required</sup> <a name="UpdateAIAgent" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateAIAgent"></a>

```typescript
public readonly UpdateAIAgent: string;
```

- *Type:* string

[Write] wisdom:UpdateAIAgent.

---

##### `UpdateAIGuardrail`<sup>Required</sup> <a name="UpdateAIGuardrail" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateAIGuardrail"></a>

```typescript
public readonly UpdateAIGuardrail: string;
```

- *Type:* string

[Write] wisdom:UpdateAIGuardrail.

---

##### `UpdateAIPrompt`<sup>Required</sup> <a name="UpdateAIPrompt" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateAIPrompt"></a>

```typescript
public readonly UpdateAIPrompt: string;
```

- *Type:* string

[Write] wisdom:UpdateAIPrompt.

---

##### `UpdateAssistantAIAgent`<sup>Required</sup> <a name="UpdateAssistantAIAgent" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateAssistantAIAgent"></a>

```typescript
public readonly UpdateAssistantAIAgent: string;
```

- *Type:* string

[Write] wisdom:UpdateAssistantAIAgent.

---

##### `UpdateContent`<sup>Required</sup> <a name="UpdateContent" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateContent"></a>

```typescript
public readonly UpdateContent: string;
```

- *Type:* string

[Write] wisdom:UpdateContent.

---

##### `UpdateKnowledgeBaseTemplateUri`<sup>Required</sup> <a name="UpdateKnowledgeBaseTemplateUri" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateKnowledgeBaseTemplateUri"></a>

```typescript
public readonly UpdateKnowledgeBaseTemplateUri: string;
```

- *Type:* string

[Write] wisdom:UpdateKnowledgeBaseTemplateUri.

---

##### `UpdateMessageTemplate`<sup>Required</sup> <a name="UpdateMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateMessageTemplate"></a>

```typescript
public readonly UpdateMessageTemplate: string;
```

- *Type:* string

[Write] wisdom:UpdateMessageTemplate.

---

##### `UpdateMessageTemplateMetadata`<sup>Required</sup> <a name="UpdateMessageTemplateMetadata" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateMessageTemplateMetadata"></a>

```typescript
public readonly UpdateMessageTemplateMetadata: string;
```

- *Type:* string

[Write] wisdom:UpdateMessageTemplateMetadata.

---

##### `UpdateQuickResponse`<sup>Required</sup> <a name="UpdateQuickResponse" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateQuickResponse"></a>

```typescript
public readonly UpdateQuickResponse: string;
```

- *Type:* string

[Write] wisdom:UpdateQuickResponse.

---

##### `UpdateSession`<sup>Required</sup> <a name="UpdateSession" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateSession"></a>

```typescript
public readonly UpdateSession: string;
```

- *Type:* string

[Write] wisdom:UpdateSession.

---

##### `UpdateSessionData`<sup>Required</sup> <a name="UpdateSessionData" id="@cdk_utils/iam.wisdom.WisdomActions.property.UpdateSessionData"></a>

```typescript
public readonly UpdateSessionData: string;
```

- *Type:* string

[Write] wisdom:UpdateSessionData.

---

### WisdomConditions <a name="WisdomConditions" id="@cdk_utils/iam.wisdom.WisdomConditions"></a>

Condition key constants and builders for wisdom.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wisdom.WisdomConditions.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

new wisdom.WisdomConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.messageTemplateRoutingProfileARN">messageTemplateRoutingProfileARN</a></code> | Generates a condition block for `wisdom:MessageTemplate/RoutingProfileArn`. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.searchFilterQualifier">searchFilterQualifier</a></code> | Generates a condition block for `wisdom:SearchFilter/Qualifier`. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.searchFilterRoutingProfileARN">searchFilterRoutingProfileARN</a></code> | Generates a condition block for `wisdom:SearchFilter/RoutingProfileArn`. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `messageTemplateRoutingProfileARN` <a name="messageTemplateRoutingProfileARN" id="@cdk_utils/iam.wisdom.WisdomConditions.messageTemplateRoutingProfileARN"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomConditions.messageTemplateRoutingProfileARN(values: string[])
```

Generates a condition block for `wisdom:MessageTemplate/RoutingProfileArn`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.wisdom.WisdomConditions.messageTemplateRoutingProfileARN.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.wisdom.WisdomConditions.requestTag"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wisdom.WisdomConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.wisdom.WisdomConditions.resourceTag"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wisdom.WisdomConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `searchFilterQualifier` <a name="searchFilterQualifier" id="@cdk_utils/iam.wisdom.WisdomConditions.searchFilterQualifier"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomConditions.searchFilterQualifier(values: string[])
```

Generates a condition block for `wisdom:SearchFilter/Qualifier`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.wisdom.WisdomConditions.searchFilterQualifier.parameter.values"></a>

- *Type:* string[]

---

##### `searchFilterRoutingProfileARN` <a name="searchFilterRoutingProfileARN" id="@cdk_utils/iam.wisdom.WisdomConditions.searchFilterRoutingProfileARN"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomConditions.searchFilterRoutingProfileARN(value: string)
```

Generates a condition block for `wisdom:SearchFilter/RoutingProfileArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wisdom.WisdomConditions.searchFilterRoutingProfileARN.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.tagKeys"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.wisdom.WisdomConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.actionGetMessageTemplateConditionKeys">actionGetMessageTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMessageTemplate action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIAgentConditionKeys">CreateAIAgentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAIAgent action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIAgentVersionConditionKeys">CreateAIAgentVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAIAgentVersion action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIGuardrailConditionKeys">CreateAIGuardrailConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAIGuardrail action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIGuardrailVersionConditionKeys">CreateAIGuardrailVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAIGuardrailVersion action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIPromptConditionKeys">CreateAIPromptConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAIPrompt action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIPromptVersionConditionKeys">CreateAIPromptVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAIPromptVersion action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAssistantAssociationConditionKeys">CreateAssistantAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAssistantAssociation action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAssistantConditionKeys">CreateAssistantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAssistant action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateContentAssociationConditionKeys">CreateContentAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContentAssociation action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateContentConditionKeys">CreateContentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContent action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateKnowledgeBaseConditionKeys">CreateKnowledgeBaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKnowledgeBase action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateMessageTemplateConditionKeys">CreateMessageTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMessageTemplate action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateQuickResponseConditionKeys">CreateQuickResponseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQuickResponse action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.CreateSessionConditionKeys">CreateSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSession action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.MESSAGE_TEMPLATE_ROUTING_PROFILE_ARN">MESSAGE_TEMPLATE_ROUTING_PROFILE_ARN</a></code> | <code>string</code> | Condition key: wisdom:MessageTemplate/RoutingProfileArn (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.RenderMessageTemplateConditionKeys">RenderMessageTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RenderMessageTemplate action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.SEARCH_FILTER_QUALIFIER">SEARCH_FILTER_QUALIFIER</a></code> | <code>string</code> | Condition key: wisdom:SearchFilter/Qualifier (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.SEARCH_FILTER_ROUTING_PROFILE_ARN">SEARCH_FILTER_ROUTING_PROFILE_ARN</a></code> | <code>string</code> | Condition key: wisdom:SearchFilter/RoutingProfileArn (ARN). |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.SearchMessageTemplatesConditionKeys">SearchMessageTemplatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchMessageTemplates action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.SearchQuickResponsesConditionKeys">SearchQuickResponsesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchQuickResponses action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.StartImportJobConditionKeys">StartImportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartImportJob action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetMessageTemplateConditionKeys`<sup>Required</sup> <a name="actionGetMessageTemplateConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.actionGetMessageTemplateConditionKeys"></a>

```typescript
public readonly actionGetMessageTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMessageTemplate action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.wisdom.WisdomConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.wisdom.WisdomConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.wisdom.WisdomConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAIAgentConditionKeys`<sup>Required</sup> <a name="CreateAIAgentConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIAgentConditionKeys"></a>

```typescript
public readonly CreateAIAgentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAIAgent action.

---

##### `CreateAIAgentVersionConditionKeys`<sup>Required</sup> <a name="CreateAIAgentVersionConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIAgentVersionConditionKeys"></a>

```typescript
public readonly CreateAIAgentVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAIAgentVersion action.

---

##### `CreateAIGuardrailConditionKeys`<sup>Required</sup> <a name="CreateAIGuardrailConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIGuardrailConditionKeys"></a>

```typescript
public readonly CreateAIGuardrailConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAIGuardrail action.

---

##### `CreateAIGuardrailVersionConditionKeys`<sup>Required</sup> <a name="CreateAIGuardrailVersionConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIGuardrailVersionConditionKeys"></a>

```typescript
public readonly CreateAIGuardrailVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAIGuardrailVersion action.

---

##### `CreateAIPromptConditionKeys`<sup>Required</sup> <a name="CreateAIPromptConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIPromptConditionKeys"></a>

```typescript
public readonly CreateAIPromptConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAIPrompt action.

---

##### `CreateAIPromptVersionConditionKeys`<sup>Required</sup> <a name="CreateAIPromptVersionConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAIPromptVersionConditionKeys"></a>

```typescript
public readonly CreateAIPromptVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAIPromptVersion action.

---

##### `CreateAssistantAssociationConditionKeys`<sup>Required</sup> <a name="CreateAssistantAssociationConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAssistantAssociationConditionKeys"></a>

```typescript
public readonly CreateAssistantAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAssistantAssociation action.

---

##### `CreateAssistantConditionKeys`<sup>Required</sup> <a name="CreateAssistantConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateAssistantConditionKeys"></a>

```typescript
public readonly CreateAssistantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAssistant action.

---

##### `CreateContentAssociationConditionKeys`<sup>Required</sup> <a name="CreateContentAssociationConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateContentAssociationConditionKeys"></a>

```typescript
public readonly CreateContentAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContentAssociation action.

---

##### `CreateContentConditionKeys`<sup>Required</sup> <a name="CreateContentConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateContentConditionKeys"></a>

```typescript
public readonly CreateContentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContent action.

---

##### `CreateKnowledgeBaseConditionKeys`<sup>Required</sup> <a name="CreateKnowledgeBaseConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateKnowledgeBaseConditionKeys"></a>

```typescript
public readonly CreateKnowledgeBaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKnowledgeBase action.

---

##### `CreateMessageTemplateConditionKeys`<sup>Required</sup> <a name="CreateMessageTemplateConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateMessageTemplateConditionKeys"></a>

```typescript
public readonly CreateMessageTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMessageTemplate action.

---

##### `CreateQuickResponseConditionKeys`<sup>Required</sup> <a name="CreateQuickResponseConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateQuickResponseConditionKeys"></a>

```typescript
public readonly CreateQuickResponseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQuickResponse action.

---

##### `CreateSessionConditionKeys`<sup>Required</sup> <a name="CreateSessionConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.CreateSessionConditionKeys"></a>

```typescript
public readonly CreateSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSession action.

---

##### `MESSAGE_TEMPLATE_ROUTING_PROFILE_ARN`<sup>Required</sup> <a name="MESSAGE_TEMPLATE_ROUTING_PROFILE_ARN" id="@cdk_utils/iam.wisdom.WisdomConditions.property.MESSAGE_TEMPLATE_ROUTING_PROFILE_ARN"></a>

```typescript
public readonly MESSAGE_TEMPLATE_ROUTING_PROFILE_ARN: string;
```

- *Type:* string

Condition key: wisdom:MessageTemplate/RoutingProfileArn (ArrayOfARN).

---

##### `RenderMessageTemplateConditionKeys`<sup>Required</sup> <a name="RenderMessageTemplateConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.RenderMessageTemplateConditionKeys"></a>

```typescript
public readonly RenderMessageTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RenderMessageTemplate action.

---

##### `SEARCH_FILTER_QUALIFIER`<sup>Required</sup> <a name="SEARCH_FILTER_QUALIFIER" id="@cdk_utils/iam.wisdom.WisdomConditions.property.SEARCH_FILTER_QUALIFIER"></a>

```typescript
public readonly SEARCH_FILTER_QUALIFIER: string;
```

- *Type:* string

Condition key: wisdom:SearchFilter/Qualifier (ArrayOfString).

---

##### `SEARCH_FILTER_ROUTING_PROFILE_ARN`<sup>Required</sup> <a name="SEARCH_FILTER_ROUTING_PROFILE_ARN" id="@cdk_utils/iam.wisdom.WisdomConditions.property.SEARCH_FILTER_ROUTING_PROFILE_ARN"></a>

```typescript
public readonly SEARCH_FILTER_ROUTING_PROFILE_ARN: string;
```

- *Type:* string

Condition key: wisdom:SearchFilter/RoutingProfileArn (ARN).

---

##### `SearchMessageTemplatesConditionKeys`<sup>Required</sup> <a name="SearchMessageTemplatesConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.SearchMessageTemplatesConditionKeys"></a>

```typescript
public readonly SearchMessageTemplatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchMessageTemplates action.

---

##### `SearchQuickResponsesConditionKeys`<sup>Required</sup> <a name="SearchQuickResponsesConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.SearchQuickResponsesConditionKeys"></a>

```typescript
public readonly SearchQuickResponsesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchQuickResponses action.

---

##### `StartImportJobConditionKeys`<sup>Required</sup> <a name="StartImportJobConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.StartImportJobConditionKeys"></a>

```typescript
public readonly StartImportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartImportJob action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.wisdom.WisdomConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### WisdomOperations <a name="WisdomOperations" id="@cdk_utils/iam.wisdom.WisdomOperations"></a>

API operation to required IAM actions mapping for wisdom.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wisdom.WisdomOperations.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

new wisdom.WisdomOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ActivateMessageTemplate">ActivateMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the ActivateMessageTemplate API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIAgent">CreateAIAgent</a></code> | <code>string[]</code> | IAM actions required for the CreateAIAgent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIAgentVersion">CreateAIAgentVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateAIAgentVersion API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIGuardrail">CreateAIGuardrail</a></code> | <code>string[]</code> | IAM actions required for the CreateAIGuardrail API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIGuardrailVersion">CreateAIGuardrailVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateAIGuardrailVersion API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIPrompt">CreateAIPrompt</a></code> | <code>string[]</code> | IAM actions required for the CreateAIPrompt API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIPromptVersion">CreateAIPromptVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateAIPromptVersion API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAssistant">CreateAssistant</a></code> | <code>string[]</code> | IAM actions required for the CreateAssistant API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAssistantAssociation">CreateAssistantAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateAssistantAssociation API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateContent">CreateContent</a></code> | <code>string[]</code> | IAM actions required for the CreateContent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateContentAssociation">CreateContentAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateContentAssociation API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateKnowledgeBase">CreateKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the CreateKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateMessageTemplate">CreateMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateMessageTemplate API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateMessageTemplateAttachment">CreateMessageTemplateAttachment</a></code> | <code>string[]</code> | IAM actions required for the CreateMessageTemplateAttachment API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateMessageTemplateVersion">CreateMessageTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateMessageTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateQuickResponse">CreateQuickResponse</a></code> | <code>string[]</code> | IAM actions required for the CreateQuickResponse API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.CreateSession">CreateSession</a></code> | <code>string[]</code> | IAM actions required for the CreateSession API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeactivateMessageTemplate">DeactivateMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeactivateMessageTemplate API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIAgent">DeleteAIAgent</a></code> | <code>string[]</code> | IAM actions required for the DeleteAIAgent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIAgentVersion">DeleteAIAgentVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteAIAgentVersion API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIGuardrail">DeleteAIGuardrail</a></code> | <code>string[]</code> | IAM actions required for the DeleteAIGuardrail API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIGuardrailVersion">DeleteAIGuardrailVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteAIGuardrailVersion API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIPrompt">DeleteAIPrompt</a></code> | <code>string[]</code> | IAM actions required for the DeleteAIPrompt API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIPromptVersion">DeleteAIPromptVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteAIPromptVersion API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAssistant">DeleteAssistant</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssistant API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAssistantAssociation">DeleteAssistantAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssistantAssociation API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteContent">DeleteContent</a></code> | <code>string[]</code> | IAM actions required for the DeleteContent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteContentAssociation">DeleteContentAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteContentAssociation API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteImportJob">DeleteImportJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteImportJob API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteKnowledgeBase">DeleteKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the DeleteKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteMessageTemplate">DeleteMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteMessageTemplate API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteMessageTemplateAttachment">DeleteMessageTemplateAttachment</a></code> | <code>string[]</code> | IAM actions required for the DeleteMessageTemplateAttachment API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteQuickResponse">DeleteQuickResponse</a></code> | <code>string[]</code> | IAM actions required for the DeleteQuickResponse API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIAgents">ListAIAgents</a></code> | <code>string[]</code> | IAM actions required for the ListAIAgents API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIAgentVersions">ListAIAgentVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAIAgentVersions API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIGuardrails">ListAIGuardrails</a></code> | <code>string[]</code> | IAM actions required for the ListAIGuardrails API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIGuardrailVersions">ListAIGuardrailVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAIGuardrailVersions API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIPrompts">ListAIPrompts</a></code> | <code>string[]</code> | IAM actions required for the ListAIPrompts API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIPromptVersions">ListAIPromptVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAIPromptVersions API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListAssistantAssociations">ListAssistantAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListAssistantAssociations API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListAssistants">ListAssistants</a></code> | <code>string[]</code> | IAM actions required for the ListAssistants API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListContentAssociations">ListContentAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListContentAssociations API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListContents">ListContents</a></code> | <code>string[]</code> | IAM actions required for the ListContents API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListImportJobs">ListImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListImportJobs API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListKnowledgeBases">ListKnowledgeBases</a></code> | <code>string[]</code> | IAM actions required for the ListKnowledgeBases API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListMessages">ListMessages</a></code> | <code>string[]</code> | IAM actions required for the ListMessages API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListMessageTemplates">ListMessageTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListMessageTemplates API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListMessageTemplateVersions">ListMessageTemplateVersions</a></code> | <code>string[]</code> | IAM actions required for the ListMessageTemplateVersions API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListModels">ListModels</a></code> | <code>string[]</code> | IAM actions required for the ListModels API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListQuickResponses">ListQuickResponses</a></code> | <code>string[]</code> | IAM actions required for the ListQuickResponses API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListSpans">ListSpans</a></code> | <code>string[]</code> | IAM actions required for the ListSpans API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.NotifyRecommendationsReceived">NotifyRecommendationsReceived</a></code> | <code>string[]</code> | IAM actions required for the NotifyRecommendationsReceived API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetAIAgent">opGetAIAgent</a></code> | <code>string[]</code> | IAM actions required for the GetAIAgent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetAIGuardrail">opGetAIGuardrail</a></code> | <code>string[]</code> | IAM actions required for the GetAIGuardrail API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetAIPrompt">opGetAIPrompt</a></code> | <code>string[]</code> | IAM actions required for the GetAIPrompt API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetAssistant">opGetAssistant</a></code> | <code>string[]</code> | IAM actions required for the GetAssistant API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetAssistantAssociation">opGetAssistantAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetAssistantAssociation API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetContent">opGetContent</a></code> | <code>string[]</code> | IAM actions required for the GetContent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetContentAssociation">opGetContentAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetContentAssociation API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetContentSummary">opGetContentSummary</a></code> | <code>string[]</code> | IAM actions required for the GetContentSummary API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetImportJob">opGetImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetImportJob API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetKnowledgeBase">opGetKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the GetKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetMessageTemplate">opGetMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetMessageTemplate API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetNextMessage">opGetNextMessage</a></code> | <code>string[]</code> | IAM actions required for the GetNextMessage API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetQuickResponse">opGetQuickResponse</a></code> | <code>string[]</code> | IAM actions required for the GetQuickResponse API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetRecommendations">opGetRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetRecommendations API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.opGetSession">opGetSession</a></code> | <code>string[]</code> | IAM actions required for the GetSession API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.PutFeedback">PutFeedback</a></code> | <code>string[]</code> | IAM actions required for the PutFeedback API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.QueryAssistant">QueryAssistant</a></code> | <code>string[]</code> | IAM actions required for the QueryAssistant API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.RemoveAssistantAIAgent">RemoveAssistantAIAgent</a></code> | <code>string[]</code> | IAM actions required for the RemoveAssistantAIAgent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.RemoveKnowledgeBaseTemplateUri">RemoveKnowledgeBaseTemplateUri</a></code> | <code>string[]</code> | IAM actions required for the RemoveKnowledgeBaseTemplateUri API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.RenderMessageTemplate">RenderMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the RenderMessageTemplate API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.Retrieve">Retrieve</a></code> | <code>string[]</code> | IAM actions required for the Retrieve API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.SearchContent">SearchContent</a></code> | <code>string[]</code> | IAM actions required for the SearchContent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.SearchMessageTemplates">SearchMessageTemplates</a></code> | <code>string[]</code> | IAM actions required for the SearchMessageTemplates API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.SearchQuickResponses">SearchQuickResponses</a></code> | <code>string[]</code> | IAM actions required for the SearchQuickResponses API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.SearchSessions">SearchSessions</a></code> | <code>string[]</code> | IAM actions required for the SearchSessions API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.SendMessage">SendMessage</a></code> | <code>string[]</code> | IAM actions required for the SendMessage API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.StartContentUpload">StartContentUpload</a></code> | <code>string[]</code> | IAM actions required for the StartContentUpload API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.StartImportJob">StartImportJob</a></code> | <code>string[]</code> | IAM actions required for the StartImportJob API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateAIAgent">UpdateAIAgent</a></code> | <code>string[]</code> | IAM actions required for the UpdateAIAgent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateAIGuardrail">UpdateAIGuardrail</a></code> | <code>string[]</code> | IAM actions required for the UpdateAIGuardrail API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateAIPrompt">UpdateAIPrompt</a></code> | <code>string[]</code> | IAM actions required for the UpdateAIPrompt API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateAssistantAIAgent">UpdateAssistantAIAgent</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssistantAIAgent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateContent">UpdateContent</a></code> | <code>string[]</code> | IAM actions required for the UpdateContent API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateKnowledgeBaseTemplateUri">UpdateKnowledgeBaseTemplateUri</a></code> | <code>string[]</code> | IAM actions required for the UpdateKnowledgeBaseTemplateUri API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateMessageTemplate">UpdateMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateMessageTemplate API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateMessageTemplateMetadata">UpdateMessageTemplateMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateMessageTemplateMetadata API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateQuickResponse">UpdateQuickResponse</a></code> | <code>string[]</code> | IAM actions required for the UpdateQuickResponse API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateSession">UpdateSession</a></code> | <code>string[]</code> | IAM actions required for the UpdateSession API call. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateSessionData">UpdateSessionData</a></code> | <code>string[]</code> | IAM actions required for the UpdateSessionData API call. |

---

##### `ActivateMessageTemplate`<sup>Required</sup> <a name="ActivateMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ActivateMessageTemplate"></a>

```typescript
public readonly ActivateMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the ActivateMessageTemplate API call.

---

##### `CreateAIAgent`<sup>Required</sup> <a name="CreateAIAgent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIAgent"></a>

```typescript
public readonly CreateAIAgent: string[];
```

- *Type:* string[]

IAM actions required for the CreateAIAgent API call.

---

##### `CreateAIAgentVersion`<sup>Required</sup> <a name="CreateAIAgentVersion" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIAgentVersion"></a>

```typescript
public readonly CreateAIAgentVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateAIAgentVersion API call.

---

##### `CreateAIGuardrail`<sup>Required</sup> <a name="CreateAIGuardrail" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIGuardrail"></a>

```typescript
public readonly CreateAIGuardrail: string[];
```

- *Type:* string[]

IAM actions required for the CreateAIGuardrail API call.

---

##### `CreateAIGuardrailVersion`<sup>Required</sup> <a name="CreateAIGuardrailVersion" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIGuardrailVersion"></a>

```typescript
public readonly CreateAIGuardrailVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateAIGuardrailVersion API call.

---

##### `CreateAIPrompt`<sup>Required</sup> <a name="CreateAIPrompt" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIPrompt"></a>

```typescript
public readonly CreateAIPrompt: string[];
```

- *Type:* string[]

IAM actions required for the CreateAIPrompt API call.

---

##### `CreateAIPromptVersion`<sup>Required</sup> <a name="CreateAIPromptVersion" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAIPromptVersion"></a>

```typescript
public readonly CreateAIPromptVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateAIPromptVersion API call.

---

##### `CreateAssistant`<sup>Required</sup> <a name="CreateAssistant" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAssistant"></a>

```typescript
public readonly CreateAssistant: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssistant API call.

---

##### `CreateAssistantAssociation`<sup>Required</sup> <a name="CreateAssistantAssociation" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateAssistantAssociation"></a>

```typescript
public readonly CreateAssistantAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssistantAssociation API call.

---

##### `CreateContent`<sup>Required</sup> <a name="CreateContent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateContent"></a>

```typescript
public readonly CreateContent: string[];
```

- *Type:* string[]

IAM actions required for the CreateContent API call.

---

##### `CreateContentAssociation`<sup>Required</sup> <a name="CreateContentAssociation" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateContentAssociation"></a>

```typescript
public readonly CreateContentAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateContentAssociation API call.

---

##### `CreateKnowledgeBase`<sup>Required</sup> <a name="CreateKnowledgeBase" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateKnowledgeBase"></a>

```typescript
public readonly CreateKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the CreateKnowledgeBase API call.

---

##### `CreateMessageTemplate`<sup>Required</sup> <a name="CreateMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateMessageTemplate"></a>

```typescript
public readonly CreateMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateMessageTemplate API call.

---

##### `CreateMessageTemplateAttachment`<sup>Required</sup> <a name="CreateMessageTemplateAttachment" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateMessageTemplateAttachment"></a>

```typescript
public readonly CreateMessageTemplateAttachment: string[];
```

- *Type:* string[]

IAM actions required for the CreateMessageTemplateAttachment API call.

---

##### `CreateMessageTemplateVersion`<sup>Required</sup> <a name="CreateMessageTemplateVersion" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateMessageTemplateVersion"></a>

```typescript
public readonly CreateMessageTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateMessageTemplateVersion API call.

---

##### `CreateQuickResponse`<sup>Required</sup> <a name="CreateQuickResponse" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateQuickResponse"></a>

```typescript
public readonly CreateQuickResponse: string[];
```

- *Type:* string[]

IAM actions required for the CreateQuickResponse API call.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.wisdom.WisdomOperations.property.CreateSession"></a>

```typescript
public readonly CreateSession: string[];
```

- *Type:* string[]

IAM actions required for the CreateSession API call.

---

##### `DeactivateMessageTemplate`<sup>Required</sup> <a name="DeactivateMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeactivateMessageTemplate"></a>

```typescript
public readonly DeactivateMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeactivateMessageTemplate API call.

---

##### `DeleteAIAgent`<sup>Required</sup> <a name="DeleteAIAgent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIAgent"></a>

```typescript
public readonly DeleteAIAgent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAIAgent API call.

---

##### `DeleteAIAgentVersion`<sup>Required</sup> <a name="DeleteAIAgentVersion" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIAgentVersion"></a>

```typescript
public readonly DeleteAIAgentVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAIAgentVersion API call.

---

##### `DeleteAIGuardrail`<sup>Required</sup> <a name="DeleteAIGuardrail" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIGuardrail"></a>

```typescript
public readonly DeleteAIGuardrail: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAIGuardrail API call.

---

##### `DeleteAIGuardrailVersion`<sup>Required</sup> <a name="DeleteAIGuardrailVersion" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIGuardrailVersion"></a>

```typescript
public readonly DeleteAIGuardrailVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAIGuardrailVersion API call.

---

##### `DeleteAIPrompt`<sup>Required</sup> <a name="DeleteAIPrompt" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIPrompt"></a>

```typescript
public readonly DeleteAIPrompt: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAIPrompt API call.

---

##### `DeleteAIPromptVersion`<sup>Required</sup> <a name="DeleteAIPromptVersion" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAIPromptVersion"></a>

```typescript
public readonly DeleteAIPromptVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAIPromptVersion API call.

---

##### `DeleteAssistant`<sup>Required</sup> <a name="DeleteAssistant" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAssistant"></a>

```typescript
public readonly DeleteAssistant: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssistant API call.

---

##### `DeleteAssistantAssociation`<sup>Required</sup> <a name="DeleteAssistantAssociation" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteAssistantAssociation"></a>

```typescript
public readonly DeleteAssistantAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssistantAssociation API call.

---

##### `DeleteContent`<sup>Required</sup> <a name="DeleteContent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteContent"></a>

```typescript
public readonly DeleteContent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContent API call.

---

##### `DeleteContentAssociation`<sup>Required</sup> <a name="DeleteContentAssociation" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteContentAssociation"></a>

```typescript
public readonly DeleteContentAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContentAssociation API call.

---

##### `DeleteImportJob`<sup>Required</sup> <a name="DeleteImportJob" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteImportJob"></a>

```typescript
public readonly DeleteImportJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImportJob API call.

---

##### `DeleteKnowledgeBase`<sup>Required</sup> <a name="DeleteKnowledgeBase" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteKnowledgeBase"></a>

```typescript
public readonly DeleteKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKnowledgeBase API call.

---

##### `DeleteMessageTemplate`<sup>Required</sup> <a name="DeleteMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteMessageTemplate"></a>

```typescript
public readonly DeleteMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMessageTemplate API call.

---

##### `DeleteMessageTemplateAttachment`<sup>Required</sup> <a name="DeleteMessageTemplateAttachment" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteMessageTemplateAttachment"></a>

```typescript
public readonly DeleteMessageTemplateAttachment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMessageTemplateAttachment API call.

---

##### `DeleteQuickResponse`<sup>Required</sup> <a name="DeleteQuickResponse" id="@cdk_utils/iam.wisdom.WisdomOperations.property.DeleteQuickResponse"></a>

```typescript
public readonly DeleteQuickResponse: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQuickResponse API call.

---

##### `ListAIAgents`<sup>Required</sup> <a name="ListAIAgents" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIAgents"></a>

```typescript
public readonly ListAIAgents: string[];
```

- *Type:* string[]

IAM actions required for the ListAIAgents API call.

---

##### `ListAIAgentVersions`<sup>Required</sup> <a name="ListAIAgentVersions" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIAgentVersions"></a>

```typescript
public readonly ListAIAgentVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAIAgentVersions API call.

---

##### `ListAIGuardrails`<sup>Required</sup> <a name="ListAIGuardrails" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIGuardrails"></a>

```typescript
public readonly ListAIGuardrails: string[];
```

- *Type:* string[]

IAM actions required for the ListAIGuardrails API call.

---

##### `ListAIGuardrailVersions`<sup>Required</sup> <a name="ListAIGuardrailVersions" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIGuardrailVersions"></a>

```typescript
public readonly ListAIGuardrailVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAIGuardrailVersions API call.

---

##### `ListAIPrompts`<sup>Required</sup> <a name="ListAIPrompts" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIPrompts"></a>

```typescript
public readonly ListAIPrompts: string[];
```

- *Type:* string[]

IAM actions required for the ListAIPrompts API call.

---

##### `ListAIPromptVersions`<sup>Required</sup> <a name="ListAIPromptVersions" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListAIPromptVersions"></a>

```typescript
public readonly ListAIPromptVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAIPromptVersions API call.

---

##### `ListAssistantAssociations`<sup>Required</sup> <a name="ListAssistantAssociations" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListAssistantAssociations"></a>

```typescript
public readonly ListAssistantAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListAssistantAssociations API call.

---

##### `ListAssistants`<sup>Required</sup> <a name="ListAssistants" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListAssistants"></a>

```typescript
public readonly ListAssistants: string[];
```

- *Type:* string[]

IAM actions required for the ListAssistants API call.

---

##### `ListContentAssociations`<sup>Required</sup> <a name="ListContentAssociations" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListContentAssociations"></a>

```typescript
public readonly ListContentAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListContentAssociations API call.

---

##### `ListContents`<sup>Required</sup> <a name="ListContents" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListContents"></a>

```typescript
public readonly ListContents: string[];
```

- *Type:* string[]

IAM actions required for the ListContents API call.

---

##### `ListImportJobs`<sup>Required</sup> <a name="ListImportJobs" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListImportJobs"></a>

```typescript
public readonly ListImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListImportJobs API call.

---

##### `ListKnowledgeBases`<sup>Required</sup> <a name="ListKnowledgeBases" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListKnowledgeBases"></a>

```typescript
public readonly ListKnowledgeBases: string[];
```

- *Type:* string[]

IAM actions required for the ListKnowledgeBases API call.

---

##### `ListMessages`<sup>Required</sup> <a name="ListMessages" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListMessages"></a>

```typescript
public readonly ListMessages: string[];
```

- *Type:* string[]

IAM actions required for the ListMessages API call.

---

##### `ListMessageTemplates`<sup>Required</sup> <a name="ListMessageTemplates" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListMessageTemplates"></a>

```typescript
public readonly ListMessageTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListMessageTemplates API call.

---

##### `ListMessageTemplateVersions`<sup>Required</sup> <a name="ListMessageTemplateVersions" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListMessageTemplateVersions"></a>

```typescript
public readonly ListMessageTemplateVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListMessageTemplateVersions API call.

---

##### `ListModels`<sup>Required</sup> <a name="ListModels" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListModels"></a>

```typescript
public readonly ListModels: string[];
```

- *Type:* string[]

IAM actions required for the ListModels API call.

---

##### `ListQuickResponses`<sup>Required</sup> <a name="ListQuickResponses" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListQuickResponses"></a>

```typescript
public readonly ListQuickResponses: string[];
```

- *Type:* string[]

IAM actions required for the ListQuickResponses API call.

---

##### `ListSpans`<sup>Required</sup> <a name="ListSpans" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListSpans"></a>

```typescript
public readonly ListSpans: string[];
```

- *Type:* string[]

IAM actions required for the ListSpans API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.wisdom.WisdomOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `NotifyRecommendationsReceived`<sup>Required</sup> <a name="NotifyRecommendationsReceived" id="@cdk_utils/iam.wisdom.WisdomOperations.property.NotifyRecommendationsReceived"></a>

```typescript
public readonly NotifyRecommendationsReceived: string[];
```

- *Type:* string[]

IAM actions required for the NotifyRecommendationsReceived API call.

---

##### `opGetAIAgent`<sup>Required</sup> <a name="opGetAIAgent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetAIAgent"></a>

```typescript
public readonly opGetAIAgent: string[];
```

- *Type:* string[]

IAM actions required for the GetAIAgent API call.

---

##### `opGetAIGuardrail`<sup>Required</sup> <a name="opGetAIGuardrail" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetAIGuardrail"></a>

```typescript
public readonly opGetAIGuardrail: string[];
```

- *Type:* string[]

IAM actions required for the GetAIGuardrail API call.

---

##### `opGetAIPrompt`<sup>Required</sup> <a name="opGetAIPrompt" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetAIPrompt"></a>

```typescript
public readonly opGetAIPrompt: string[];
```

- *Type:* string[]

IAM actions required for the GetAIPrompt API call.

---

##### `opGetAssistant`<sup>Required</sup> <a name="opGetAssistant" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetAssistant"></a>

```typescript
public readonly opGetAssistant: string[];
```

- *Type:* string[]

IAM actions required for the GetAssistant API call.

---

##### `opGetAssistantAssociation`<sup>Required</sup> <a name="opGetAssistantAssociation" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetAssistantAssociation"></a>

```typescript
public readonly opGetAssistantAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetAssistantAssociation API call.

---

##### `opGetContent`<sup>Required</sup> <a name="opGetContent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetContent"></a>

```typescript
public readonly opGetContent: string[];
```

- *Type:* string[]

IAM actions required for the GetContent API call.

---

##### `opGetContentAssociation`<sup>Required</sup> <a name="opGetContentAssociation" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetContentAssociation"></a>

```typescript
public readonly opGetContentAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetContentAssociation API call.

---

##### `opGetContentSummary`<sup>Required</sup> <a name="opGetContentSummary" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetContentSummary"></a>

```typescript
public readonly opGetContentSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetContentSummary API call.

---

##### `opGetImportJob`<sup>Required</sup> <a name="opGetImportJob" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetImportJob"></a>

```typescript
public readonly opGetImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetImportJob API call.

---

##### `opGetKnowledgeBase`<sup>Required</sup> <a name="opGetKnowledgeBase" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetKnowledgeBase"></a>

```typescript
public readonly opGetKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the GetKnowledgeBase API call.

---

##### `opGetMessageTemplate`<sup>Required</sup> <a name="opGetMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetMessageTemplate"></a>

```typescript
public readonly opGetMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetMessageTemplate API call.

---

##### `opGetNextMessage`<sup>Required</sup> <a name="opGetNextMessage" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetNextMessage"></a>

```typescript
public readonly opGetNextMessage: string[];
```

- *Type:* string[]

IAM actions required for the GetNextMessage API call.

---

##### `opGetQuickResponse`<sup>Required</sup> <a name="opGetQuickResponse" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetQuickResponse"></a>

```typescript
public readonly opGetQuickResponse: string[];
```

- *Type:* string[]

IAM actions required for the GetQuickResponse API call.

---

##### `opGetRecommendations`<sup>Required</sup> <a name="opGetRecommendations" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetRecommendations"></a>

```typescript
public readonly opGetRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommendations API call.

---

##### `opGetSession`<sup>Required</sup> <a name="opGetSession" id="@cdk_utils/iam.wisdom.WisdomOperations.property.opGetSession"></a>

```typescript
public readonly opGetSession: string[];
```

- *Type:* string[]

IAM actions required for the GetSession API call.

---

##### `PutFeedback`<sup>Required</sup> <a name="PutFeedback" id="@cdk_utils/iam.wisdom.WisdomOperations.property.PutFeedback"></a>

```typescript
public readonly PutFeedback: string[];
```

- *Type:* string[]

IAM actions required for the PutFeedback API call.

---

##### `QueryAssistant`<sup>Required</sup> <a name="QueryAssistant" id="@cdk_utils/iam.wisdom.WisdomOperations.property.QueryAssistant"></a>

```typescript
public readonly QueryAssistant: string[];
```

- *Type:* string[]

IAM actions required for the QueryAssistant API call.

---

##### `RemoveAssistantAIAgent`<sup>Required</sup> <a name="RemoveAssistantAIAgent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.RemoveAssistantAIAgent"></a>

```typescript
public readonly RemoveAssistantAIAgent: string[];
```

- *Type:* string[]

IAM actions required for the RemoveAssistantAIAgent API call.

---

##### `RemoveKnowledgeBaseTemplateUri`<sup>Required</sup> <a name="RemoveKnowledgeBaseTemplateUri" id="@cdk_utils/iam.wisdom.WisdomOperations.property.RemoveKnowledgeBaseTemplateUri"></a>

```typescript
public readonly RemoveKnowledgeBaseTemplateUri: string[];
```

- *Type:* string[]

IAM actions required for the RemoveKnowledgeBaseTemplateUri API call.

---

##### `RenderMessageTemplate`<sup>Required</sup> <a name="RenderMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomOperations.property.RenderMessageTemplate"></a>

```typescript
public readonly RenderMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the RenderMessageTemplate API call.

---

##### `Retrieve`<sup>Required</sup> <a name="Retrieve" id="@cdk_utils/iam.wisdom.WisdomOperations.property.Retrieve"></a>

```typescript
public readonly Retrieve: string[];
```

- *Type:* string[]

IAM actions required for the Retrieve API call.

---

##### `SearchContent`<sup>Required</sup> <a name="SearchContent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.SearchContent"></a>

```typescript
public readonly SearchContent: string[];
```

- *Type:* string[]

IAM actions required for the SearchContent API call.

---

##### `SearchMessageTemplates`<sup>Required</sup> <a name="SearchMessageTemplates" id="@cdk_utils/iam.wisdom.WisdomOperations.property.SearchMessageTemplates"></a>

```typescript
public readonly SearchMessageTemplates: string[];
```

- *Type:* string[]

IAM actions required for the SearchMessageTemplates API call.

---

##### `SearchQuickResponses`<sup>Required</sup> <a name="SearchQuickResponses" id="@cdk_utils/iam.wisdom.WisdomOperations.property.SearchQuickResponses"></a>

```typescript
public readonly SearchQuickResponses: string[];
```

- *Type:* string[]

IAM actions required for the SearchQuickResponses API call.

---

##### `SearchSessions`<sup>Required</sup> <a name="SearchSessions" id="@cdk_utils/iam.wisdom.WisdomOperations.property.SearchSessions"></a>

```typescript
public readonly SearchSessions: string[];
```

- *Type:* string[]

IAM actions required for the SearchSessions API call.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.wisdom.WisdomOperations.property.SendMessage"></a>

```typescript
public readonly SendMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendMessage API call.

---

##### `StartContentUpload`<sup>Required</sup> <a name="StartContentUpload" id="@cdk_utils/iam.wisdom.WisdomOperations.property.StartContentUpload"></a>

```typescript
public readonly StartContentUpload: string[];
```

- *Type:* string[]

IAM actions required for the StartContentUpload API call.

---

##### `StartImportJob`<sup>Required</sup> <a name="StartImportJob" id="@cdk_utils/iam.wisdom.WisdomOperations.property.StartImportJob"></a>

```typescript
public readonly StartImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartImportJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.wisdom.WisdomOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAIAgent`<sup>Required</sup> <a name="UpdateAIAgent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateAIAgent"></a>

```typescript
public readonly UpdateAIAgent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAIAgent API call.

---

##### `UpdateAIGuardrail`<sup>Required</sup> <a name="UpdateAIGuardrail" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateAIGuardrail"></a>

```typescript
public readonly UpdateAIGuardrail: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAIGuardrail API call.

---

##### `UpdateAIPrompt`<sup>Required</sup> <a name="UpdateAIPrompt" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateAIPrompt"></a>

```typescript
public readonly UpdateAIPrompt: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAIPrompt API call.

---

##### `UpdateAssistantAIAgent`<sup>Required</sup> <a name="UpdateAssistantAIAgent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateAssistantAIAgent"></a>

```typescript
public readonly UpdateAssistantAIAgent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssistantAIAgent API call.

---

##### `UpdateContent`<sup>Required</sup> <a name="UpdateContent" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateContent"></a>

```typescript
public readonly UpdateContent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContent API call.

---

##### `UpdateKnowledgeBaseTemplateUri`<sup>Required</sup> <a name="UpdateKnowledgeBaseTemplateUri" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateKnowledgeBaseTemplateUri"></a>

```typescript
public readonly UpdateKnowledgeBaseTemplateUri: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKnowledgeBaseTemplateUri API call.

---

##### `UpdateMessageTemplate`<sup>Required</sup> <a name="UpdateMessageTemplate" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateMessageTemplate"></a>

```typescript
public readonly UpdateMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMessageTemplate API call.

---

##### `UpdateMessageTemplateMetadata`<sup>Required</sup> <a name="UpdateMessageTemplateMetadata" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateMessageTemplateMetadata"></a>

```typescript
public readonly UpdateMessageTemplateMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMessageTemplateMetadata API call.

---

##### `UpdateQuickResponse`<sup>Required</sup> <a name="UpdateQuickResponse" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateQuickResponse"></a>

```typescript
public readonly UpdateQuickResponse: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQuickResponse API call.

---

##### `UpdateSession`<sup>Required</sup> <a name="UpdateSession" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateSession"></a>

```typescript
public readonly UpdateSession: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSession API call.

---

##### `UpdateSessionData`<sup>Required</sup> <a name="UpdateSessionData" id="@cdk_utils/iam.wisdom.WisdomOperations.property.UpdateSessionData"></a>

```typescript
public readonly UpdateSessionData: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSessionData API call.

---

### WisdomResources <a name="WisdomResources" id="@cdk_utils/iam.wisdom.WisdomResources"></a>

ARN builders, validators, and parsers for wisdom resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wisdom.WisdomResources.Initializer"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

new wisdom.WisdomResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.aiAgent">aiAgent</a></code> | Builds an ARN for the AIAgent resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.aiGuardrail">aiGuardrail</a></code> | Builds an ARN for the AIGuardrail resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.aiPrompt">aiPrompt</a></code> | Builds an ARN for the AIPrompt resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.assistant">assistant</a></code> | Builds an ARN for the Assistant resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.assistantAssociation">assistantAssociation</a></code> | Builds an ARN for the AssistantAssociation resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.content">content</a></code> | Builds an ARN for the Content resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.contentAssociation">contentAssociation</a></code> | Builds an ARN for the ContentAssociation resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidAiAgentArn">isValidAiAgentArn</a></code> | Validates whether a string is a valid ARN for the AIAgent resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidAiGuardrailArn">isValidAiGuardrailArn</a></code> | Validates whether a string is a valid ARN for the AIGuardrail resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidAiPromptArn">isValidAiPromptArn</a></code> | Validates whether a string is a valid ARN for the AIPrompt resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidAssistantArn">isValidAssistantArn</a></code> | Validates whether a string is a valid ARN for the Assistant resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidAssistantAssociationArn">isValidAssistantAssociationArn</a></code> | Validates whether a string is a valid ARN for the AssistantAssociation resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidContentArn">isValidContentArn</a></code> | Validates whether a string is a valid ARN for the Content resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidContentAssociationArn">isValidContentAssociationArn</a></code> | Validates whether a string is a valid ARN for the ContentAssociation resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidKnowledgeBaseArn">isValidKnowledgeBaseArn</a></code> | Validates whether a string is a valid ARN for the KnowledgeBase resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidMessageTemplateArn">isValidMessageTemplateArn</a></code> | Validates whether a string is a valid ARN for the MessageTemplate resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidQuickResponseArn">isValidQuickResponseArn</a></code> | Validates whether a string is a valid ARN for the QuickResponse resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the Session resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.knowledgeBase">knowledgeBase</a></code> | Builds an ARN for the KnowledgeBase resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.messageTemplate">messageTemplate</a></code> | Builds an ARN for the MessageTemplate resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseAiAgentArn">parseAiAgentArn</a></code> | Parses a AIAgent ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseAiGuardrailArn">parseAiGuardrailArn</a></code> | Parses a AIGuardrail ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseAiPromptArn">parseAiPromptArn</a></code> | Parses a AIPrompt ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseAssistantArn">parseAssistantArn</a></code> | Parses a Assistant ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseAssistantAssociationArn">parseAssistantAssociationArn</a></code> | Parses a AssistantAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseContentArn">parseContentArn</a></code> | Parses a Content ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseContentAssociationArn">parseContentAssociationArn</a></code> | Parses a ContentAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseKnowledgeBaseArn">parseKnowledgeBaseArn</a></code> | Parses a KnowledgeBase ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseMessageTemplateArn">parseMessageTemplateArn</a></code> | Parses a MessageTemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseQuickResponseArn">parseQuickResponseArn</a></code> | Parses a QuickResponse ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.parseSessionArn">parseSessionArn</a></code> | Parses a Session ARN into its components. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.quickResponse">quickResponse</a></code> | Builds an ARN for the QuickResponse resource. |
| <code><a href="#@cdk_utils/iam.wisdom.WisdomResources.session">session</a></code> | Builds an ARN for the Session resource. |

---

##### `aiAgent` <a name="aiAgent" id="@cdk_utils/iam.wisdom.WisdomResources.aiAgent"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.aiAgent(props: WisdomAiAgentArnProps)
```

Builds an ARN for the AIAgent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.aiAgent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomAiAgentArnProps">WisdomAiAgentArnProps</a>

---

##### `aiGuardrail` <a name="aiGuardrail" id="@cdk_utils/iam.wisdom.WisdomResources.aiGuardrail"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.aiGuardrail(props: WisdomAiGuardrailArnProps)
```

Builds an ARN for the AIGuardrail resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.aiGuardrail.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomAiGuardrailArnProps">WisdomAiGuardrailArnProps</a>

---

##### `aiPrompt` <a name="aiPrompt" id="@cdk_utils/iam.wisdom.WisdomResources.aiPrompt"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.aiPrompt(props: WisdomAiPromptArnProps)
```

Builds an ARN for the AIPrompt resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.aiPrompt.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomAiPromptArnProps">WisdomAiPromptArnProps</a>

---

##### `assistant` <a name="assistant" id="@cdk_utils/iam.wisdom.WisdomResources.assistant"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.assistant(props: WisdomAssistantArnProps)
```

Builds an ARN for the Assistant resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.assistant.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomAssistantArnProps">WisdomAssistantArnProps</a>

---

##### `assistantAssociation` <a name="assistantAssociation" id="@cdk_utils/iam.wisdom.WisdomResources.assistantAssociation"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.assistantAssociation(props: WisdomAssistantAssociationArnProps)
```

Builds an ARN for the AssistantAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.assistantAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomAssistantAssociationArnProps">WisdomAssistantAssociationArnProps</a>

---

##### `content` <a name="content" id="@cdk_utils/iam.wisdom.WisdomResources.content"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.content(props: WisdomContentArnProps)
```

Builds an ARN for the Content resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.content.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomContentArnProps">WisdomContentArnProps</a>

---

##### `contentAssociation` <a name="contentAssociation" id="@cdk_utils/iam.wisdom.WisdomResources.contentAssociation"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.contentAssociation(props: WisdomContentAssociationArnProps)
```

Builds an ARN for the ContentAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.contentAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomContentAssociationArnProps">WisdomContentAssociationArnProps</a>

---

##### `isValidAiAgentArn` <a name="isValidAiAgentArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidAiAgentArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidAiAgentArn(arn: string)
```

Validates whether a string is a valid ARN for the AIAgent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidAiAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAiGuardrailArn` <a name="isValidAiGuardrailArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidAiGuardrailArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidAiGuardrailArn(arn: string)
```

Validates whether a string is a valid ARN for the AIGuardrail resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidAiGuardrailArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAiPromptArn` <a name="isValidAiPromptArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidAiPromptArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidAiPromptArn(arn: string)
```

Validates whether a string is a valid ARN for the AIPrompt resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidAiPromptArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssistantArn` <a name="isValidAssistantArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidAssistantArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidAssistantArn(arn: string)
```

Validates whether a string is a valid ARN for the Assistant resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidAssistantArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssistantAssociationArn` <a name="isValidAssistantAssociationArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidAssistantAssociationArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidAssistantAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the AssistantAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidAssistantAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContentArn` <a name="isValidContentArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidContentArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidContentArn(arn: string)
```

Validates whether a string is a valid ARN for the Content resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidContentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContentAssociationArn` <a name="isValidContentAssociationArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidContentAssociationArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidContentAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the ContentAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidContentAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKnowledgeBaseArn` <a name="isValidKnowledgeBaseArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidKnowledgeBaseArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidKnowledgeBaseArn(arn: string)
```

Validates whether a string is a valid ARN for the KnowledgeBase resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidKnowledgeBaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMessageTemplateArn` <a name="isValidMessageTemplateArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidMessageTemplateArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidMessageTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the MessageTemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidMessageTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQuickResponseArn` <a name="isValidQuickResponseArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidQuickResponseArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidQuickResponseArn(arn: string)
```

Validates whether a string is a valid ARN for the QuickResponse resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidQuickResponseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidSessionArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the Session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `knowledgeBase` <a name="knowledgeBase" id="@cdk_utils/iam.wisdom.WisdomResources.knowledgeBase"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.knowledgeBase(props: WisdomKnowledgeBaseArnProps)
```

Builds an ARN for the KnowledgeBase resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.knowledgeBase.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomKnowledgeBaseArnProps">WisdomKnowledgeBaseArnProps</a>

---

##### `messageTemplate` <a name="messageTemplate" id="@cdk_utils/iam.wisdom.WisdomResources.messageTemplate"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.messageTemplate(props: WisdomMessageTemplateArnProps)
```

Builds an ARN for the MessageTemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.messageTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomMessageTemplateArnProps">WisdomMessageTemplateArnProps</a>

---

##### `parseAiAgentArn` <a name="parseAiAgentArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseAiAgentArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseAiAgentArn(arn: string)
```

Parses a AIAgent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseAiAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAiGuardrailArn` <a name="parseAiGuardrailArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseAiGuardrailArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseAiGuardrailArn(arn: string)
```

Parses a AIGuardrail ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseAiGuardrailArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAiPromptArn` <a name="parseAiPromptArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseAiPromptArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseAiPromptArn(arn: string)
```

Parses a AIPrompt ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseAiPromptArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssistantArn` <a name="parseAssistantArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseAssistantArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseAssistantArn(arn: string)
```

Parses a Assistant ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseAssistantArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssistantAssociationArn` <a name="parseAssistantAssociationArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseAssistantAssociationArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseAssistantAssociationArn(arn: string)
```

Parses a AssistantAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseAssistantAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContentArn` <a name="parseContentArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseContentArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseContentArn(arn: string)
```

Parses a Content ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseContentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContentAssociationArn` <a name="parseContentAssociationArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseContentAssociationArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseContentAssociationArn(arn: string)
```

Parses a ContentAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseContentAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKnowledgeBaseArn` <a name="parseKnowledgeBaseArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseKnowledgeBaseArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseKnowledgeBaseArn(arn: string)
```

Parses a KnowledgeBase ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseKnowledgeBaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMessageTemplateArn` <a name="parseMessageTemplateArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseMessageTemplateArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseMessageTemplateArn(arn: string)
```

Parses a MessageTemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseMessageTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQuickResponseArn` <a name="parseQuickResponseArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseQuickResponseArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseQuickResponseArn(arn: string)
```

Parses a QuickResponse ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseQuickResponseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.wisdom.WisdomResources.parseSessionArn"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.parseSessionArn(arn: string)
```

Parses a Session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wisdom.WisdomResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `quickResponse` <a name="quickResponse" id="@cdk_utils/iam.wisdom.WisdomResources.quickResponse"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.quickResponse(props: WisdomQuickResponseArnProps)
```

Builds an ARN for the QuickResponse resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.quickResponse.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomQuickResponseArnProps">WisdomQuickResponseArnProps</a>

---

##### `session` <a name="session" id="@cdk_utils/iam.wisdom.WisdomResources.session"></a>

```typescript
import { wisdom } from '@cdk_utils/iam'

wisdom.WisdomResources.session(props: WisdomSessionArnProps)
```

Builds an ARN for the Session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wisdom.WisdomResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wisdom.WisdomSessionArnProps">WisdomSessionArnProps</a>

---




