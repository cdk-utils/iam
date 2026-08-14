# `iq` Submodule <a name="`iq` Submodule" id="@cdk_utils/iam.iq"></a>


## Structs <a name="Structs" id="Structs"></a>

### IqAttachmentArnComponents <a name="IqAttachmentArnComponents" id="@cdk_utils/iam.iq.IqAttachmentArnComponents"></a>

Parsed components of a attachment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqAttachmentArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqAttachmentArnComponents: iq.IqAttachmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqAttachmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqAttachmentArnComponents.property.attachmentId">attachmentId</a></code> | <code>string</code> | The AttachmentId component. |
| <code><a href="#@cdk_utils/iam.iq.IqAttachmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqAttachmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqAttachmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdk_utils/iam.iq.IqAttachmentArnComponents.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

The AttachmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqAttachmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqAttachmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqAttachmentArnProps <a name="IqAttachmentArnProps" id="@cdk_utils/iam.iq.IqAttachmentArnProps"></a>

Properties for building a attachment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqAttachmentArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqAttachmentArnProps: iq.IqAttachmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqAttachmentArnProps.property.attachmentId">attachmentId</a></code> | <code>string</code> | The AttachmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqAttachmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqAttachmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqAttachmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdk_utils/iam.iq.IqAttachmentArnProps.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

The AttachmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqAttachmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqAttachmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqAttachmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqBuyerArnComponents <a name="IqBuyerArnComponents" id="@cdk_utils/iam.iq.IqBuyerArnComponents"></a>

Parsed components of a buyer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqBuyerArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqBuyerArnComponents: iq.IqBuyerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqBuyerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqBuyerArnComponents.property.buyerId">buyerId</a></code> | <code>string</code> | The BuyerId component. |
| <code><a href="#@cdk_utils/iam.iq.IqBuyerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqBuyerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqBuyerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `buyerId`<sup>Required</sup> <a name="buyerId" id="@cdk_utils/iam.iq.IqBuyerArnComponents.property.buyerId"></a>

```typescript
public readonly buyerId: string;
```

- *Type:* string

The BuyerId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqBuyerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqBuyerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqBuyerArnProps <a name="IqBuyerArnProps" id="@cdk_utils/iam.iq.IqBuyerArnProps"></a>

Properties for building a buyer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqBuyerArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqBuyerArnProps: iq.IqBuyerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqBuyerArnProps.property.buyerId">buyerId</a></code> | <code>string</code> | The BuyerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqBuyerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqBuyerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqBuyerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `buyerId`<sup>Required</sup> <a name="buyerId" id="@cdk_utils/iam.iq.IqBuyerArnProps.property.buyerId"></a>

```typescript
public readonly buyerId: string;
```

- *Type:* string

The BuyerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqBuyerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqBuyerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqBuyerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqCallArnComponents <a name="IqCallArnComponents" id="@cdk_utils/iam.iq.IqCallArnComponents"></a>

Parsed components of a call ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqCallArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqCallArnComponents: iq.IqCallArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqCallArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqCallArnComponents.property.callId">callId</a></code> | <code>string</code> | The CallId component. |
| <code><a href="#@cdk_utils/iam.iq.IqCallArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqCallArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqCallArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `callId`<sup>Required</sup> <a name="callId" id="@cdk_utils/iam.iq.IqCallArnComponents.property.callId"></a>

```typescript
public readonly callId: string;
```

- *Type:* string

The CallId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqCallArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqCallArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqCallArnProps <a name="IqCallArnProps" id="@cdk_utils/iam.iq.IqCallArnProps"></a>

Properties for building a call ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqCallArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqCallArnProps: iq.IqCallArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqCallArnProps.property.callId">callId</a></code> | <code>string</code> | The CallId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqCallArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqCallArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqCallArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `callId`<sup>Required</sup> <a name="callId" id="@cdk_utils/iam.iq.IqCallArnProps.property.callId"></a>

```typescript
public readonly callId: string;
```

- *Type:* string

The CallId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqCallArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqCallArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqCallArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqCompanyArnComponents <a name="IqCompanyArnComponents" id="@cdk_utils/iam.iq.IqCompanyArnComponents"></a>

Parsed components of a company ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqCompanyArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqCompanyArnComponents: iq.IqCompanyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqCompanyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqCompanyArnComponents.property.companyId">companyId</a></code> | <code>string</code> | The CompanyId component. |
| <code><a href="#@cdk_utils/iam.iq.IqCompanyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqCompanyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqCompanyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `companyId`<sup>Required</sup> <a name="companyId" id="@cdk_utils/iam.iq.IqCompanyArnComponents.property.companyId"></a>

```typescript
public readonly companyId: string;
```

- *Type:* string

The CompanyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqCompanyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqCompanyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqCompanyArnProps <a name="IqCompanyArnProps" id="@cdk_utils/iam.iq.IqCompanyArnProps"></a>

Properties for building a company ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqCompanyArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqCompanyArnProps: iq.IqCompanyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqCompanyArnProps.property.companyId">companyId</a></code> | <code>string</code> | The CompanyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqCompanyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqCompanyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqCompanyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `companyId`<sup>Required</sup> <a name="companyId" id="@cdk_utils/iam.iq.IqCompanyArnProps.property.companyId"></a>

```typescript
public readonly companyId: string;
```

- *Type:* string

The CompanyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqCompanyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqCompanyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqCompanyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqConversationArnComponents <a name="IqConversationArnComponents" id="@cdk_utils/iam.iq.IqConversationArnComponents"></a>

Parsed components of a conversation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqConversationArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqConversationArnComponents: iq.IqConversationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqConversationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqConversationArnComponents.property.conversationId">conversationId</a></code> | <code>string</code> | The ConversationId component. |
| <code><a href="#@cdk_utils/iam.iq.IqConversationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqConversationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqConversationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `conversationId`<sup>Required</sup> <a name="conversationId" id="@cdk_utils/iam.iq.IqConversationArnComponents.property.conversationId"></a>

```typescript
public readonly conversationId: string;
```

- *Type:* string

The ConversationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqConversationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqConversationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqConversationArnProps <a name="IqConversationArnProps" id="@cdk_utils/iam.iq.IqConversationArnProps"></a>

Properties for building a conversation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqConversationArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqConversationArnProps: iq.IqConversationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqConversationArnProps.property.conversationId">conversationId</a></code> | <code>string</code> | The ConversationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqConversationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqConversationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqConversationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `conversationId`<sup>Required</sup> <a name="conversationId" id="@cdk_utils/iam.iq.IqConversationArnProps.property.conversationId"></a>

```typescript
public readonly conversationId: string;
```

- *Type:* string

The ConversationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqConversationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqConversationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqConversationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqExpertArnComponents <a name="IqExpertArnComponents" id="@cdk_utils/iam.iq.IqExpertArnComponents"></a>

Parsed components of a expert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqExpertArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqExpertArnComponents: iq.IqExpertArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqExpertArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqExpertArnComponents.property.expertId">expertId</a></code> | <code>string</code> | The ExpertId component. |
| <code><a href="#@cdk_utils/iam.iq.IqExpertArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqExpertArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqExpertArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `expertId`<sup>Required</sup> <a name="expertId" id="@cdk_utils/iam.iq.IqExpertArnComponents.property.expertId"></a>

```typescript
public readonly expertId: string;
```

- *Type:* string

The ExpertId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqExpertArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqExpertArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqExpertArnProps <a name="IqExpertArnProps" id="@cdk_utils/iam.iq.IqExpertArnProps"></a>

Properties for building a expert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqExpertArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqExpertArnProps: iq.IqExpertArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqExpertArnProps.property.expertId">expertId</a></code> | <code>string</code> | The ExpertId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqExpertArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqExpertArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqExpertArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `expertId`<sup>Required</sup> <a name="expertId" id="@cdk_utils/iam.iq.IqExpertArnProps.property.expertId"></a>

```typescript
public readonly expertId: string;
```

- *Type:* string

The ExpertId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqExpertArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqExpertArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqExpertArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqListingArnComponents <a name="IqListingArnComponents" id="@cdk_utils/iam.iq.IqListingArnComponents"></a>

Parsed components of a listing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqListingArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqListingArnComponents: iq.IqListingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqListingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqListingArnComponents.property.listingId">listingId</a></code> | <code>string</code> | The ListingId component. |
| <code><a href="#@cdk_utils/iam.iq.IqListingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqListingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqListingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdk_utils/iam.iq.IqListingArnComponents.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

The ListingId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqListingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqListingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqListingArnProps <a name="IqListingArnProps" id="@cdk_utils/iam.iq.IqListingArnProps"></a>

Properties for building a listing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqListingArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqListingArnProps: iq.IqListingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqListingArnProps.property.listingId">listingId</a></code> | <code>string</code> | The ListingId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqListingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqListingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqListingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdk_utils/iam.iq.IqListingArnProps.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

The ListingId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqListingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqListingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqListingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqPaymentRequestArnComponents <a name="IqPaymentRequestArnComponents" id="@cdk_utils/iam.iq.IqPaymentRequestArnComponents"></a>

Parsed components of a paymentRequest ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqPaymentRequestArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqPaymentRequestArnComponents: iq.IqPaymentRequestArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.conversationId">conversationId</a></code> | <code>string</code> | The ConversationId component. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.paymentRequestId">paymentRequestId</a></code> | <code>string</code> | The PaymentRequestId component. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.proposalId">proposalId</a></code> | <code>string</code> | The ProposalId component. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `conversationId`<sup>Required</sup> <a name="conversationId" id="@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.conversationId"></a>

```typescript
public readonly conversationId: string;
```

- *Type:* string

The ConversationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `paymentRequestId`<sup>Required</sup> <a name="paymentRequestId" id="@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.paymentRequestId"></a>

```typescript
public readonly paymentRequestId: string;
```

- *Type:* string

The PaymentRequestId component.

---

##### `proposalId`<sup>Required</sup> <a name="proposalId" id="@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.proposalId"></a>

```typescript
public readonly proposalId: string;
```

- *Type:* string

The ProposalId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqPaymentRequestArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqPaymentRequestArnProps <a name="IqPaymentRequestArnProps" id="@cdk_utils/iam.iq.IqPaymentRequestArnProps"></a>

Properties for building a paymentRequest ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqPaymentRequestArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqPaymentRequestArnProps: iq.IqPaymentRequestArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.conversationId">conversationId</a></code> | <code>string</code> | The ConversationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.paymentRequestId">paymentRequestId</a></code> | <code>string</code> | The PaymentRequestId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.proposalId">proposalId</a></code> | <code>string</code> | The ProposalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `conversationId`<sup>Required</sup> <a name="conversationId" id="@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.conversationId"></a>

```typescript
public readonly conversationId: string;
```

- *Type:* string

The ConversationId component of the ARN.

---

##### `paymentRequestId`<sup>Required</sup> <a name="paymentRequestId" id="@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.paymentRequestId"></a>

```typescript
public readonly paymentRequestId: string;
```

- *Type:* string

The PaymentRequestId component of the ARN.

---

##### `proposalId`<sup>Required</sup> <a name="proposalId" id="@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.proposalId"></a>

```typescript
public readonly proposalId: string;
```

- *Type:* string

The ProposalId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqPaymentRequestArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqPaymentScheduleArnComponents <a name="IqPaymentScheduleArnComponents" id="@cdk_utils/iam.iq.IqPaymentScheduleArnComponents"></a>

Parsed components of a paymentSchedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqPaymentScheduleArnComponents: iq.IqPaymentScheduleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.conversationId">conversationId</a></code> | <code>string</code> | The ConversationId component. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.proposalId">proposalId</a></code> | <code>string</code> | The ProposalId component. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `conversationId`<sup>Required</sup> <a name="conversationId" id="@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.conversationId"></a>

```typescript
public readonly conversationId: string;
```

- *Type:* string

The ConversationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `proposalId`<sup>Required</sup> <a name="proposalId" id="@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.proposalId"></a>

```typescript
public readonly proposalId: string;
```

- *Type:* string

The ProposalId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.iq.IqPaymentScheduleArnComponents.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component.

---

### IqPaymentScheduleArnProps <a name="IqPaymentScheduleArnProps" id="@cdk_utils/iam.iq.IqPaymentScheduleArnProps"></a>

Properties for building a paymentSchedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqPaymentScheduleArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqPaymentScheduleArnProps: iq.IqPaymentScheduleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.conversationId">conversationId</a></code> | <code>string</code> | The ConversationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.proposalId">proposalId</a></code> | <code>string</code> | The ProposalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `conversationId`<sup>Required</sup> <a name="conversationId" id="@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.conversationId"></a>

```typescript
public readonly conversationId: string;
```

- *Type:* string

The ConversationId component of the ARN.

---

##### `proposalId`<sup>Required</sup> <a name="proposalId" id="@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.proposalId"></a>

```typescript
public readonly proposalId: string;
```

- *Type:* string

The ProposalId component of the ARN.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqPaymentScheduleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqPermissionArnComponents <a name="IqPermissionArnComponents" id="@cdk_utils/iam.iq.IqPermissionArnComponents"></a>

Parsed components of a permission ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqPermissionArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqPermissionArnComponents: iq.IqPermissionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqPermissionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqPermissionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqPermissionArnComponents.property.permissionRequestId">permissionRequestId</a></code> | <code>string</code> | The PermissionRequestId component. |
| <code><a href="#@cdk_utils/iam.iq.IqPermissionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqPermissionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqPermissionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `permissionRequestId`<sup>Required</sup> <a name="permissionRequestId" id="@cdk_utils/iam.iq.IqPermissionArnComponents.property.permissionRequestId"></a>

```typescript
public readonly permissionRequestId: string;
```

- *Type:* string

The PermissionRequestId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqPermissionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqPermissionArnProps <a name="IqPermissionArnProps" id="@cdk_utils/iam.iq.IqPermissionArnProps"></a>

Properties for building a permission ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqPermissionArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqPermissionArnProps: iq.IqPermissionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqPermissionArnProps.property.permissionRequestId">permissionRequestId</a></code> | <code>string</code> | The PermissionRequestId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqPermissionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqPermissionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqPermissionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `permissionRequestId`<sup>Required</sup> <a name="permissionRequestId" id="@cdk_utils/iam.iq.IqPermissionArnProps.property.permissionRequestId"></a>

```typescript
public readonly permissionRequestId: string;
```

- *Type:* string

The PermissionRequestId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqPermissionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqPermissionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqPermissionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqProposalArnComponents <a name="IqProposalArnComponents" id="@cdk_utils/iam.iq.IqProposalArnComponents"></a>

Parsed components of a proposal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqProposalArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqProposalArnComponents: iq.IqProposalArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqProposalArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqProposalArnComponents.property.conversationId">conversationId</a></code> | <code>string</code> | The ConversationId component. |
| <code><a href="#@cdk_utils/iam.iq.IqProposalArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqProposalArnComponents.property.proposalId">proposalId</a></code> | <code>string</code> | The ProposalId component. |
| <code><a href="#@cdk_utils/iam.iq.IqProposalArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqProposalArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `conversationId`<sup>Required</sup> <a name="conversationId" id="@cdk_utils/iam.iq.IqProposalArnComponents.property.conversationId"></a>

```typescript
public readonly conversationId: string;
```

- *Type:* string

The ConversationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqProposalArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `proposalId`<sup>Required</sup> <a name="proposalId" id="@cdk_utils/iam.iq.IqProposalArnComponents.property.proposalId"></a>

```typescript
public readonly proposalId: string;
```

- *Type:* string

The ProposalId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqProposalArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqProposalArnProps <a name="IqProposalArnProps" id="@cdk_utils/iam.iq.IqProposalArnProps"></a>

Properties for building a proposal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqProposalArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqProposalArnProps: iq.IqProposalArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqProposalArnProps.property.conversationId">conversationId</a></code> | <code>string</code> | The ConversationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqProposalArnProps.property.proposalId">proposalId</a></code> | <code>string</code> | The ProposalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqProposalArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqProposalArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqProposalArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `conversationId`<sup>Required</sup> <a name="conversationId" id="@cdk_utils/iam.iq.IqProposalArnProps.property.conversationId"></a>

```typescript
public readonly conversationId: string;
```

- *Type:* string

The ConversationId component of the ARN.

---

##### `proposalId`<sup>Required</sup> <a name="proposalId" id="@cdk_utils/iam.iq.IqProposalArnProps.property.proposalId"></a>

```typescript
public readonly proposalId: string;
```

- *Type:* string

The ProposalId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqProposalArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqProposalArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqProposalArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqRequestArnComponents <a name="IqRequestArnComponents" id="@cdk_utils/iam.iq.IqRequestArnComponents"></a>

Parsed components of a request ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqRequestArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqRequestArnComponents: iq.IqRequestArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqRequestArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqRequestArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqRequestArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iq.IqRequestArnComponents.property.requestId">requestId</a></code> | <code>string</code> | The RequestId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqRequestArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqRequestArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqRequestArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdk_utils/iam.iq.IqRequestArnComponents.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

The RequestId component.

---

### IqRequestArnProps <a name="IqRequestArnProps" id="@cdk_utils/iam.iq.IqRequestArnProps"></a>

Properties for building a request ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqRequestArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqRequestArnProps: iq.IqRequestArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqRequestArnProps.property.requestId">requestId</a></code> | <code>string</code> | The RequestId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqRequestArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqRequestArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqRequestArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdk_utils/iam.iq.IqRequestArnProps.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

The RequestId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqRequestArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqRequestArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqRequestArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqSellerArnComponents <a name="IqSellerArnComponents" id="@cdk_utils/iam.iq.IqSellerArnComponents"></a>

Parsed components of a seller ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqSellerArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqSellerArnComponents: iq.IqSellerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqSellerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqSellerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqSellerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iq.IqSellerArnComponents.property.sellerAWSAccountId">sellerAWSAccountId</a></code> | <code>string</code> | The SellerAwsAccountId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqSellerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqSellerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqSellerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sellerAWSAccountId`<sup>Required</sup> <a name="sellerAWSAccountId" id="@cdk_utils/iam.iq.IqSellerArnComponents.property.sellerAWSAccountId"></a>

```typescript
public readonly sellerAWSAccountId: string;
```

- *Type:* string

The SellerAwsAccountId component.

---

### IqSellerArnProps <a name="IqSellerArnProps" id="@cdk_utils/iam.iq.IqSellerArnProps"></a>

Properties for building a seller ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqSellerArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqSellerArnProps: iq.IqSellerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqSellerArnProps.property.sellerAWSAccountId">sellerAWSAccountId</a></code> | <code>string</code> | The SellerAwsAccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqSellerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqSellerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqSellerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sellerAWSAccountId`<sup>Required</sup> <a name="sellerAWSAccountId" id="@cdk_utils/iam.iq.IqSellerArnProps.property.sellerAWSAccountId"></a>

```typescript
public readonly sellerAWSAccountId: string;
```

- *Type:* string

The SellerAwsAccountId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqSellerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqSellerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqSellerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IqTokenArnComponents <a name="IqTokenArnComponents" id="@cdk_utils/iam.iq.IqTokenArnComponents"></a>

Parsed components of a token ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqTokenArnComponents.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqTokenArnComponents: iq.IqTokenArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqTokenArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqTokenArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqTokenArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iq.IqTokenArnComponents.property.tokenId">tokenId</a></code> | <code>string</code> | The TokenId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq.IqTokenArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq.IqTokenArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq.IqTokenArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tokenId`<sup>Required</sup> <a name="tokenId" id="@cdk_utils/iam.iq.IqTokenArnComponents.property.tokenId"></a>

```typescript
public readonly tokenId: string;
```

- *Type:* string

The TokenId component.

---

### IqTokenArnProps <a name="IqTokenArnProps" id="@cdk_utils/iam.iq.IqTokenArnProps"></a>

Properties for building a token ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq.IqTokenArnProps.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

const iqTokenArnProps: iq.IqTokenArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqTokenArnProps.property.tokenId">tokenId</a></code> | <code>string</code> | The TokenId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq.IqTokenArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq.IqTokenArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq.IqTokenArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tokenId`<sup>Required</sup> <a name="tokenId" id="@cdk_utils/iam.iq.IqTokenArnProps.property.tokenId"></a>

```typescript
public readonly tokenId: string;
```

- *Type:* string

The TokenId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq.IqTokenArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq.IqTokenArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq.IqTokenArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IqActions <a name="IqActions" id="@cdk_utils/iam.iq.IqActions"></a>

IAM action constants for the iq service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iq.IqActions.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

new iq.IqActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.AcceptCall">AcceptCall</a></code> | <code>string</code> | [Write] iq:AcceptCall. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetBuyer">actionGetBuyer</a></code> | <code>string</code> | [Read] iq:GetBuyer. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetCall">actionGetCall</a></code> | <code>string</code> | [Read] iq:GetCall. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetChatInfo">actionGetChatInfo</a></code> | <code>string</code> | [Read] iq:GetChatInfo. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetChatMessages">actionGetChatMessages</a></code> | <code>string</code> | [Read] iq:GetChatMessages. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetChatToken">actionGetChatToken</a></code> | <code>string</code> | [Read] iq:GetChatToken. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetCompanyChatMessages">actionGetCompanyChatMessages</a></code> | <code>string</code> | [Read] iq:GetCompanyChatMessages. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetCompanyProfile">actionGetCompanyProfile</a></code> | <code>string</code> | [Read] iq:GetCompanyProfile. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetConversation">actionGetConversation</a></code> | <code>string</code> | [Read] iq:GetConversation. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetExpert">actionGetExpert</a></code> | <code>string</code> | [Read] iq:GetExpert. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetListing">actionGetListing</a></code> | <code>string</code> | [Read] iq:GetListing. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetMarketplaceSeller">actionGetMarketplaceSeller</a></code> | <code>string</code> | [Read] iq:GetMarketplaceSeller. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetPaymentRequest">actionGetPaymentRequest</a></code> | <code>string</code> | [Read] iq:GetPaymentRequest. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetProposal">actionGetProposal</a></code> | <code>string</code> | [Read] iq:GetProposal. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetRequest">actionGetRequest</a></code> | <code>string</code> | [Read] iq:GetRequest. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.actionGetReview">actionGetReview</a></code> | <code>string</code> | [Read] iq:GetReview. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ApprovePaymentRequest">ApprovePaymentRequest</a></code> | <code>string</code> | [Write] iq:ApprovePaymentRequest. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ApproveProposal">ApproveProposal</a></code> | <code>string</code> | [Write] iq:ApproveProposal. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ArchiveConversation">ArchiveConversation</a></code> | <code>string</code> | [Write] iq:ArchiveConversation. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CompleteProposal">CompleteProposal</a></code> | <code>string</code> | [Write] iq:CompleteProposal. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CreateConversation">CreateConversation</a></code> | <code>string</code> | [Write] iq:CreateConversation. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CreateExpert">CreateExpert</a></code> | <code>string</code> | [Write] iq:CreateExpert. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CreateListing">CreateListing</a></code> | <code>string</code> | [Write] iq:CreateListing. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CreateMilestoneProposal">CreateMilestoneProposal</a></code> | <code>string</code> | [Write] iq:CreateMilestoneProposal. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CreatePaymentRequest">CreatePaymentRequest</a></code> | <code>string</code> | [Write] iq:CreatePaymentRequest. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] iq:CreateProject. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CreateRequest">CreateRequest</a></code> | <code>string</code> | [Write] iq:CreateRequest. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CreateScheduledProposal">CreateScheduledProposal</a></code> | <code>string</code> | [Write] iq:CreateScheduledProposal. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CreateSeller">CreateSeller</a></code> | <code>string</code> | [Write] iq:CreateSeller. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.CreateUpfrontProposal">CreateUpfrontProposal</a></code> | <code>string</code> | [Write] iq:CreateUpfrontProposal. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.DeclineCall">DeclineCall</a></code> | <code>string</code> | [Write] iq:DeclineCall. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.DeleteAttachment">DeleteAttachment</a></code> | <code>string</code> | [Write] iq:DeleteAttachment. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.DisableIndividualPublicProfile">DisableIndividualPublicProfile</a></code> | <code>string</code> | [Write] iq:DisableIndividualPublicProfile. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.DownloadAttachment">DownloadAttachment</a></code> | <code>string</code> | [Read] iq:DownloadAttachment. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.EnableIndividualPublicProfile">EnableIndividualPublicProfile</a></code> | <code>string</code> | [Write] iq:EnableIndividualPublicProfile. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.EndCall">EndCall</a></code> | <code>string</code> | [Write] iq:EndCall. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.HideRequest">HideRequest</a></code> | <code>string</code> | [Write] iq:HideRequest. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.InitiateCall">InitiateCall</a></code> | <code>string</code> | [Write] iq:InitiateCall. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.LinkAwsCertification">LinkAwsCertification</a></code> | <code>string</code> | [Write] iq:LinkAwsCertification. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ListAttachments">ListAttachments</a></code> | <code>string</code> | [List] iq:ListAttachments. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ListConversations">ListConversations</a></code> | <code>string</code> | [Read] iq:ListConversations. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ListExpertAccessLogs">ListExpertAccessLogs</a></code> | <code>string</code> | [Read] iq:ListExpertAccessLogs. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ListListings">ListListings</a></code> | <code>string</code> | [Read] iq:ListListings. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ListPaymentRequests">ListPaymentRequests</a></code> | <code>string</code> | [Read] iq:ListPaymentRequests. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ListProposals">ListProposals</a></code> | <code>string</code> | [Read] iq:ListProposals. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ListRequests">ListRequests</a></code> | <code>string</code> | [Read] iq:ListRequests. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.ListReviews">ListReviews</a></code> | <code>string</code> | [Read] iq:ListReviews. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.MarkChatMessageRead">MarkChatMessageRead</a></code> | <code>string</code> | [Write] iq:MarkChatMessageRead. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.RejectPaymentRequest">RejectPaymentRequest</a></code> | <code>string</code> | [Write] iq:RejectPaymentRequest. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.RejectProposal">RejectProposal</a></code> | <code>string</code> | [Write] iq:RejectProposal. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.SendCompanyChatMessage">SendCompanyChatMessage</a></code> | <code>string</code> | [Write] iq:SendCompanyChatMessage. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.SendIndividualChatMessage">SendIndividualChatMessage</a></code> | <code>string</code> | [Write] iq:SendIndividualChatMessage. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.UnarchiveConversation">UnarchiveConversation</a></code> | <code>string</code> | [Write] iq:UnarchiveConversation. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.UnlinkAwsCertification">UnlinkAwsCertification</a></code> | <code>string</code> | [Write] iq:UnlinkAwsCertification. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.UpdateCompanyProfile">UpdateCompanyProfile</a></code> | <code>string</code> | [Write] iq:UpdateCompanyProfile. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.UpdateConversationMembers">UpdateConversationMembers</a></code> | <code>string</code> | [Write] iq:UpdateConversationMembers. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.UpdateExpert">UpdateExpert</a></code> | <code>string</code> | [Write] iq:UpdateExpert. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.UpdateListing">UpdateListing</a></code> | <code>string</code> | [Write] iq:UpdateListing. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.UpdateRequest">UpdateRequest</a></code> | <code>string</code> | [Write] iq:UpdateRequest. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.UploadAttachment">UploadAttachment</a></code> | <code>string</code> | [Write] iq:UploadAttachment. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.WithdrawPaymentRequest">WithdrawPaymentRequest</a></code> | <code>string</code> | [Write] iq:WithdrawPaymentRequest. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.WithdrawProposal">WithdrawProposal</a></code> | <code>string</code> | [Write] iq:WithdrawProposal. |
| <code><a href="#@cdk_utils/iam.iq.IqActions.property.WriteReview">WriteReview</a></code> | <code>string</code> | [Write] iq:WriteReview. |

---

##### `AcceptCall`<sup>Required</sup> <a name="AcceptCall" id="@cdk_utils/iam.iq.IqActions.property.AcceptCall"></a>

```typescript
public readonly AcceptCall: string;
```

- *Type:* string

[Write] iq:AcceptCall.

---

##### `actionGetBuyer`<sup>Required</sup> <a name="actionGetBuyer" id="@cdk_utils/iam.iq.IqActions.property.actionGetBuyer"></a>

```typescript
public readonly actionGetBuyer: string;
```

- *Type:* string

[Read] iq:GetBuyer.

---

##### `actionGetCall`<sup>Required</sup> <a name="actionGetCall" id="@cdk_utils/iam.iq.IqActions.property.actionGetCall"></a>

```typescript
public readonly actionGetCall: string;
```

- *Type:* string

[Read] iq:GetCall.

---

##### `actionGetChatInfo`<sup>Required</sup> <a name="actionGetChatInfo" id="@cdk_utils/iam.iq.IqActions.property.actionGetChatInfo"></a>

```typescript
public readonly actionGetChatInfo: string;
```

- *Type:* string

[Read] iq:GetChatInfo.

---

##### `actionGetChatMessages`<sup>Required</sup> <a name="actionGetChatMessages" id="@cdk_utils/iam.iq.IqActions.property.actionGetChatMessages"></a>

```typescript
public readonly actionGetChatMessages: string;
```

- *Type:* string

[Read] iq:GetChatMessages.

---

##### `actionGetChatToken`<sup>Required</sup> <a name="actionGetChatToken" id="@cdk_utils/iam.iq.IqActions.property.actionGetChatToken"></a>

```typescript
public readonly actionGetChatToken: string;
```

- *Type:* string

[Read] iq:GetChatToken.

---

##### `actionGetCompanyChatMessages`<sup>Required</sup> <a name="actionGetCompanyChatMessages" id="@cdk_utils/iam.iq.IqActions.property.actionGetCompanyChatMessages"></a>

```typescript
public readonly actionGetCompanyChatMessages: string;
```

- *Type:* string

[Read] iq:GetCompanyChatMessages.

---

##### `actionGetCompanyProfile`<sup>Required</sup> <a name="actionGetCompanyProfile" id="@cdk_utils/iam.iq.IqActions.property.actionGetCompanyProfile"></a>

```typescript
public readonly actionGetCompanyProfile: string;
```

- *Type:* string

[Read] iq:GetCompanyProfile.

---

##### `actionGetConversation`<sup>Required</sup> <a name="actionGetConversation" id="@cdk_utils/iam.iq.IqActions.property.actionGetConversation"></a>

```typescript
public readonly actionGetConversation: string;
```

- *Type:* string

[Read] iq:GetConversation.

---

##### `actionGetExpert`<sup>Required</sup> <a name="actionGetExpert" id="@cdk_utils/iam.iq.IqActions.property.actionGetExpert"></a>

```typescript
public readonly actionGetExpert: string;
```

- *Type:* string

[Read] iq:GetExpert.

---

##### `actionGetListing`<sup>Required</sup> <a name="actionGetListing" id="@cdk_utils/iam.iq.IqActions.property.actionGetListing"></a>

```typescript
public readonly actionGetListing: string;
```

- *Type:* string

[Read] iq:GetListing.

---

##### `actionGetMarketplaceSeller`<sup>Required</sup> <a name="actionGetMarketplaceSeller" id="@cdk_utils/iam.iq.IqActions.property.actionGetMarketplaceSeller"></a>

```typescript
public readonly actionGetMarketplaceSeller: string;
```

- *Type:* string

[Read] iq:GetMarketplaceSeller.

---

##### `actionGetPaymentRequest`<sup>Required</sup> <a name="actionGetPaymentRequest" id="@cdk_utils/iam.iq.IqActions.property.actionGetPaymentRequest"></a>

```typescript
public readonly actionGetPaymentRequest: string;
```

- *Type:* string

[Read] iq:GetPaymentRequest.

---

##### `actionGetProposal`<sup>Required</sup> <a name="actionGetProposal" id="@cdk_utils/iam.iq.IqActions.property.actionGetProposal"></a>

```typescript
public readonly actionGetProposal: string;
```

- *Type:* string

[Read] iq:GetProposal.

---

##### `actionGetRequest`<sup>Required</sup> <a name="actionGetRequest" id="@cdk_utils/iam.iq.IqActions.property.actionGetRequest"></a>

```typescript
public readonly actionGetRequest: string;
```

- *Type:* string

[Read] iq:GetRequest.

---

##### `actionGetReview`<sup>Required</sup> <a name="actionGetReview" id="@cdk_utils/iam.iq.IqActions.property.actionGetReview"></a>

```typescript
public readonly actionGetReview: string;
```

- *Type:* string

[Read] iq:GetReview.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iq.IqActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iq.IqActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iq.IqActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iq.IqActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iq.IqActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApprovePaymentRequest`<sup>Required</sup> <a name="ApprovePaymentRequest" id="@cdk_utils/iam.iq.IqActions.property.ApprovePaymentRequest"></a>

```typescript
public readonly ApprovePaymentRequest: string;
```

- *Type:* string

[Write] iq:ApprovePaymentRequest.

---

##### `ApproveProposal`<sup>Required</sup> <a name="ApproveProposal" id="@cdk_utils/iam.iq.IqActions.property.ApproveProposal"></a>

```typescript
public readonly ApproveProposal: string;
```

- *Type:* string

[Write] iq:ApproveProposal.

---

##### `ArchiveConversation`<sup>Required</sup> <a name="ArchiveConversation" id="@cdk_utils/iam.iq.IqActions.property.ArchiveConversation"></a>

```typescript
public readonly ArchiveConversation: string;
```

- *Type:* string

[Write] iq:ArchiveConversation.

---

##### `CompleteProposal`<sup>Required</sup> <a name="CompleteProposal" id="@cdk_utils/iam.iq.IqActions.property.CompleteProposal"></a>

```typescript
public readonly CompleteProposal: string;
```

- *Type:* string

[Write] iq:CompleteProposal.

---

##### `CreateConversation`<sup>Required</sup> <a name="CreateConversation" id="@cdk_utils/iam.iq.IqActions.property.CreateConversation"></a>

```typescript
public readonly CreateConversation: string;
```

- *Type:* string

[Write] iq:CreateConversation.

---

##### `CreateExpert`<sup>Required</sup> <a name="CreateExpert" id="@cdk_utils/iam.iq.IqActions.property.CreateExpert"></a>

```typescript
public readonly CreateExpert: string;
```

- *Type:* string

[Write] iq:CreateExpert.

---

##### `CreateListing`<sup>Required</sup> <a name="CreateListing" id="@cdk_utils/iam.iq.IqActions.property.CreateListing"></a>

```typescript
public readonly CreateListing: string;
```

- *Type:* string

[Write] iq:CreateListing.

---

##### `CreateMilestoneProposal`<sup>Required</sup> <a name="CreateMilestoneProposal" id="@cdk_utils/iam.iq.IqActions.property.CreateMilestoneProposal"></a>

```typescript
public readonly CreateMilestoneProposal: string;
```

- *Type:* string

[Write] iq:CreateMilestoneProposal.

---

##### `CreatePaymentRequest`<sup>Required</sup> <a name="CreatePaymentRequest" id="@cdk_utils/iam.iq.IqActions.property.CreatePaymentRequest"></a>

```typescript
public readonly CreatePaymentRequest: string;
```

- *Type:* string

[Write] iq:CreatePaymentRequest.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.iq.IqActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] iq:CreateProject.

---

##### `CreateRequest`<sup>Required</sup> <a name="CreateRequest" id="@cdk_utils/iam.iq.IqActions.property.CreateRequest"></a>

```typescript
public readonly CreateRequest: string;
```

- *Type:* string

[Write] iq:CreateRequest.

---

##### `CreateScheduledProposal`<sup>Required</sup> <a name="CreateScheduledProposal" id="@cdk_utils/iam.iq.IqActions.property.CreateScheduledProposal"></a>

```typescript
public readonly CreateScheduledProposal: string;
```

- *Type:* string

[Write] iq:CreateScheduledProposal.

---

##### `CreateSeller`<sup>Required</sup> <a name="CreateSeller" id="@cdk_utils/iam.iq.IqActions.property.CreateSeller"></a>

```typescript
public readonly CreateSeller: string;
```

- *Type:* string

[Write] iq:CreateSeller.

---

##### `CreateUpfrontProposal`<sup>Required</sup> <a name="CreateUpfrontProposal" id="@cdk_utils/iam.iq.IqActions.property.CreateUpfrontProposal"></a>

```typescript
public readonly CreateUpfrontProposal: string;
```

- *Type:* string

[Write] iq:CreateUpfrontProposal.

---

##### `DeclineCall`<sup>Required</sup> <a name="DeclineCall" id="@cdk_utils/iam.iq.IqActions.property.DeclineCall"></a>

```typescript
public readonly DeclineCall: string;
```

- *Type:* string

[Write] iq:DeclineCall.

---

##### `DeleteAttachment`<sup>Required</sup> <a name="DeleteAttachment" id="@cdk_utils/iam.iq.IqActions.property.DeleteAttachment"></a>

```typescript
public readonly DeleteAttachment: string;
```

- *Type:* string

[Write] iq:DeleteAttachment.

---

##### `DisableIndividualPublicProfile`<sup>Required</sup> <a name="DisableIndividualPublicProfile" id="@cdk_utils/iam.iq.IqActions.property.DisableIndividualPublicProfile"></a>

```typescript
public readonly DisableIndividualPublicProfile: string;
```

- *Type:* string

[Write] iq:DisableIndividualPublicProfile.

---

##### `DownloadAttachment`<sup>Required</sup> <a name="DownloadAttachment" id="@cdk_utils/iam.iq.IqActions.property.DownloadAttachment"></a>

```typescript
public readonly DownloadAttachment: string;
```

- *Type:* string

[Read] iq:DownloadAttachment.

---

##### `EnableIndividualPublicProfile`<sup>Required</sup> <a name="EnableIndividualPublicProfile" id="@cdk_utils/iam.iq.IqActions.property.EnableIndividualPublicProfile"></a>

```typescript
public readonly EnableIndividualPublicProfile: string;
```

- *Type:* string

[Write] iq:EnableIndividualPublicProfile.

---

##### `EndCall`<sup>Required</sup> <a name="EndCall" id="@cdk_utils/iam.iq.IqActions.property.EndCall"></a>

```typescript
public readonly EndCall: string;
```

- *Type:* string

[Write] iq:EndCall.

---

##### `HideRequest`<sup>Required</sup> <a name="HideRequest" id="@cdk_utils/iam.iq.IqActions.property.HideRequest"></a>

```typescript
public readonly HideRequest: string;
```

- *Type:* string

[Write] iq:HideRequest.

---

##### `InitiateCall`<sup>Required</sup> <a name="InitiateCall" id="@cdk_utils/iam.iq.IqActions.property.InitiateCall"></a>

```typescript
public readonly InitiateCall: string;
```

- *Type:* string

[Write] iq:InitiateCall.

---

##### `LinkAwsCertification`<sup>Required</sup> <a name="LinkAwsCertification" id="@cdk_utils/iam.iq.IqActions.property.LinkAwsCertification"></a>

```typescript
public readonly LinkAwsCertification: string;
```

- *Type:* string

[Write] iq:LinkAwsCertification.

---

##### `ListAttachments`<sup>Required</sup> <a name="ListAttachments" id="@cdk_utils/iam.iq.IqActions.property.ListAttachments"></a>

```typescript
public readonly ListAttachments: string;
```

- *Type:* string

[List] iq:ListAttachments.

---

##### `ListConversations`<sup>Required</sup> <a name="ListConversations" id="@cdk_utils/iam.iq.IqActions.property.ListConversations"></a>

```typescript
public readonly ListConversations: string;
```

- *Type:* string

[Read] iq:ListConversations.

---

##### `ListExpertAccessLogs`<sup>Required</sup> <a name="ListExpertAccessLogs" id="@cdk_utils/iam.iq.IqActions.property.ListExpertAccessLogs"></a>

```typescript
public readonly ListExpertAccessLogs: string;
```

- *Type:* string

[Read] iq:ListExpertAccessLogs.

---

##### `ListListings`<sup>Required</sup> <a name="ListListings" id="@cdk_utils/iam.iq.IqActions.property.ListListings"></a>

```typescript
public readonly ListListings: string;
```

- *Type:* string

[Read] iq:ListListings.

---

##### `ListPaymentRequests`<sup>Required</sup> <a name="ListPaymentRequests" id="@cdk_utils/iam.iq.IqActions.property.ListPaymentRequests"></a>

```typescript
public readonly ListPaymentRequests: string;
```

- *Type:* string

[Read] iq:ListPaymentRequests.

---

##### `ListProposals`<sup>Required</sup> <a name="ListProposals" id="@cdk_utils/iam.iq.IqActions.property.ListProposals"></a>

```typescript
public readonly ListProposals: string;
```

- *Type:* string

[Read] iq:ListProposals.

---

##### `ListRequests`<sup>Required</sup> <a name="ListRequests" id="@cdk_utils/iam.iq.IqActions.property.ListRequests"></a>

```typescript
public readonly ListRequests: string;
```

- *Type:* string

[Read] iq:ListRequests.

---

##### `ListReviews`<sup>Required</sup> <a name="ListReviews" id="@cdk_utils/iam.iq.IqActions.property.ListReviews"></a>

```typescript
public readonly ListReviews: string;
```

- *Type:* string

[Read] iq:ListReviews.

---

##### `MarkChatMessageRead`<sup>Required</sup> <a name="MarkChatMessageRead" id="@cdk_utils/iam.iq.IqActions.property.MarkChatMessageRead"></a>

```typescript
public readonly MarkChatMessageRead: string;
```

- *Type:* string

[Write] iq:MarkChatMessageRead.

---

##### `RejectPaymentRequest`<sup>Required</sup> <a name="RejectPaymentRequest" id="@cdk_utils/iam.iq.IqActions.property.RejectPaymentRequest"></a>

```typescript
public readonly RejectPaymentRequest: string;
```

- *Type:* string

[Write] iq:RejectPaymentRequest.

---

##### `RejectProposal`<sup>Required</sup> <a name="RejectProposal" id="@cdk_utils/iam.iq.IqActions.property.RejectProposal"></a>

```typescript
public readonly RejectProposal: string;
```

- *Type:* string

[Write] iq:RejectProposal.

---

##### `SendCompanyChatMessage`<sup>Required</sup> <a name="SendCompanyChatMessage" id="@cdk_utils/iam.iq.IqActions.property.SendCompanyChatMessage"></a>

```typescript
public readonly SendCompanyChatMessage: string;
```

- *Type:* string

[Write] iq:SendCompanyChatMessage.

---

##### `SendIndividualChatMessage`<sup>Required</sup> <a name="SendIndividualChatMessage" id="@cdk_utils/iam.iq.IqActions.property.SendIndividualChatMessage"></a>

```typescript
public readonly SendIndividualChatMessage: string;
```

- *Type:* string

[Write] iq:SendIndividualChatMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iq.IqActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UnarchiveConversation`<sup>Required</sup> <a name="UnarchiveConversation" id="@cdk_utils/iam.iq.IqActions.property.UnarchiveConversation"></a>

```typescript
public readonly UnarchiveConversation: string;
```

- *Type:* string

[Write] iq:UnarchiveConversation.

---

##### `UnlinkAwsCertification`<sup>Required</sup> <a name="UnlinkAwsCertification" id="@cdk_utils/iam.iq.IqActions.property.UnlinkAwsCertification"></a>

```typescript
public readonly UnlinkAwsCertification: string;
```

- *Type:* string

[Write] iq:UnlinkAwsCertification.

---

##### `UpdateCompanyProfile`<sup>Required</sup> <a name="UpdateCompanyProfile" id="@cdk_utils/iam.iq.IqActions.property.UpdateCompanyProfile"></a>

```typescript
public readonly UpdateCompanyProfile: string;
```

- *Type:* string

[Write] iq:UpdateCompanyProfile.

---

##### `UpdateConversationMembers`<sup>Required</sup> <a name="UpdateConversationMembers" id="@cdk_utils/iam.iq.IqActions.property.UpdateConversationMembers"></a>

```typescript
public readonly UpdateConversationMembers: string;
```

- *Type:* string

[Write] iq:UpdateConversationMembers.

---

##### `UpdateExpert`<sup>Required</sup> <a name="UpdateExpert" id="@cdk_utils/iam.iq.IqActions.property.UpdateExpert"></a>

```typescript
public readonly UpdateExpert: string;
```

- *Type:* string

[Write] iq:UpdateExpert.

---

##### `UpdateListing`<sup>Required</sup> <a name="UpdateListing" id="@cdk_utils/iam.iq.IqActions.property.UpdateListing"></a>

```typescript
public readonly UpdateListing: string;
```

- *Type:* string

[Write] iq:UpdateListing.

---

##### `UpdateRequest`<sup>Required</sup> <a name="UpdateRequest" id="@cdk_utils/iam.iq.IqActions.property.UpdateRequest"></a>

```typescript
public readonly UpdateRequest: string;
```

- *Type:* string

[Write] iq:UpdateRequest.

---

##### `UploadAttachment`<sup>Required</sup> <a name="UploadAttachment" id="@cdk_utils/iam.iq.IqActions.property.UploadAttachment"></a>

```typescript
public readonly UploadAttachment: string;
```

- *Type:* string

[Write] iq:UploadAttachment.

---

##### `WithdrawPaymentRequest`<sup>Required</sup> <a name="WithdrawPaymentRequest" id="@cdk_utils/iam.iq.IqActions.property.WithdrawPaymentRequest"></a>

```typescript
public readonly WithdrawPaymentRequest: string;
```

- *Type:* string

[Write] iq:WithdrawPaymentRequest.

---

##### `WithdrawProposal`<sup>Required</sup> <a name="WithdrawProposal" id="@cdk_utils/iam.iq.IqActions.property.WithdrawProposal"></a>

```typescript
public readonly WithdrawProposal: string;
```

- *Type:* string

[Write] iq:WithdrawProposal.

---

##### `WriteReview`<sup>Required</sup> <a name="WriteReview" id="@cdk_utils/iam.iq.IqActions.property.WriteReview"></a>

```typescript
public readonly WriteReview: string;
```

- *Type:* string

[Write] iq:WriteReview.

---

### IqResources <a name="IqResources" id="@cdk_utils/iam.iq.IqResources"></a>

ARN builders, validators, and parsers for iq resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iq.IqResources.Initializer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

new iq.IqResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iq.IqResources.attachment">attachment</a></code> | Builds an ARN for the attachment resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.buyer">buyer</a></code> | Builds an ARN for the buyer resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.call">call</a></code> | Builds an ARN for the call resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.company">company</a></code> | Builds an ARN for the company resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.conversation">conversation</a></code> | Builds an ARN for the conversation resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.expert">expert</a></code> | Builds an ARN for the expert resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidAttachmentArn">isValidAttachmentArn</a></code> | Validates whether a string is a valid ARN for the attachment resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidBuyerArn">isValidBuyerArn</a></code> | Validates whether a string is a valid ARN for the buyer resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidCallArn">isValidCallArn</a></code> | Validates whether a string is a valid ARN for the call resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidCompanyArn">isValidCompanyArn</a></code> | Validates whether a string is a valid ARN for the company resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidConversationArn">isValidConversationArn</a></code> | Validates whether a string is a valid ARN for the conversation resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidExpertArn">isValidExpertArn</a></code> | Validates whether a string is a valid ARN for the expert resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidListingArn">isValidListingArn</a></code> | Validates whether a string is a valid ARN for the listing resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidPaymentRequestArn">isValidPaymentRequestArn</a></code> | Validates whether a string is a valid ARN for the paymentRequest resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidPaymentScheduleArn">isValidPaymentScheduleArn</a></code> | Validates whether a string is a valid ARN for the paymentSchedule resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidPermissionArn">isValidPermissionArn</a></code> | Validates whether a string is a valid ARN for the permission resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidProposalArn">isValidProposalArn</a></code> | Validates whether a string is a valid ARN for the proposal resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidRequestArn">isValidRequestArn</a></code> | Validates whether a string is a valid ARN for the request resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidSellerArn">isValidSellerArn</a></code> | Validates whether a string is a valid ARN for the seller resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.isValidTokenArn">isValidTokenArn</a></code> | Validates whether a string is a valid ARN for the token resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.listing">listing</a></code> | Builds an ARN for the listing resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseAttachmentArn">parseAttachmentArn</a></code> | Parses a attachment ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseBuyerArn">parseBuyerArn</a></code> | Parses a buyer ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseCallArn">parseCallArn</a></code> | Parses a call ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseCompanyArn">parseCompanyArn</a></code> | Parses a company ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseConversationArn">parseConversationArn</a></code> | Parses a conversation ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseExpertArn">parseExpertArn</a></code> | Parses a expert ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseListingArn">parseListingArn</a></code> | Parses a listing ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parsePaymentRequestArn">parsePaymentRequestArn</a></code> | Parses a paymentRequest ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parsePaymentScheduleArn">parsePaymentScheduleArn</a></code> | Parses a paymentSchedule ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parsePermissionArn">parsePermissionArn</a></code> | Parses a permission ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseProposalArn">parseProposalArn</a></code> | Parses a proposal ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseRequestArn">parseRequestArn</a></code> | Parses a request ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseSellerArn">parseSellerArn</a></code> | Parses a seller ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.parseTokenArn">parseTokenArn</a></code> | Parses a token ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.paymentRequest">paymentRequest</a></code> | Builds an ARN for the paymentRequest resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.paymentSchedule">paymentSchedule</a></code> | Builds an ARN for the paymentSchedule resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.permission">permission</a></code> | Builds an ARN for the permission resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.proposal">proposal</a></code> | Builds an ARN for the proposal resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.request">request</a></code> | Builds an ARN for the request resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.seller">seller</a></code> | Builds an ARN for the seller resource. |
| <code><a href="#@cdk_utils/iam.iq.IqResources.token">token</a></code> | Builds an ARN for the token resource. |

---

##### `attachment` <a name="attachment" id="@cdk_utils/iam.iq.IqResources.attachment"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.attachment(props: IqAttachmentArnProps)
```

Builds an ARN for the attachment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.attachment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqAttachmentArnProps">IqAttachmentArnProps</a>

---

##### `buyer` <a name="buyer" id="@cdk_utils/iam.iq.IqResources.buyer"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.buyer(props: IqBuyerArnProps)
```

Builds an ARN for the buyer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.buyer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqBuyerArnProps">IqBuyerArnProps</a>

---

##### `call` <a name="call" id="@cdk_utils/iam.iq.IqResources.call"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.call(props: IqCallArnProps)
```

Builds an ARN for the call resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.call.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqCallArnProps">IqCallArnProps</a>

---

##### `company` <a name="company" id="@cdk_utils/iam.iq.IqResources.company"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.company(props: IqCompanyArnProps)
```

Builds an ARN for the company resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.company.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqCompanyArnProps">IqCompanyArnProps</a>

---

##### `conversation` <a name="conversation" id="@cdk_utils/iam.iq.IqResources.conversation"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.conversation(props: IqConversationArnProps)
```

Builds an ARN for the conversation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.conversation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqConversationArnProps">IqConversationArnProps</a>

---

##### `expert` <a name="expert" id="@cdk_utils/iam.iq.IqResources.expert"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.expert(props: IqExpertArnProps)
```

Builds an ARN for the expert resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.expert.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqExpertArnProps">IqExpertArnProps</a>

---

##### `isValidAttachmentArn` <a name="isValidAttachmentArn" id="@cdk_utils/iam.iq.IqResources.isValidAttachmentArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidAttachmentArn(arn: string)
```

Validates whether a string is a valid ARN for the attachment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidAttachmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBuyerArn` <a name="isValidBuyerArn" id="@cdk_utils/iam.iq.IqResources.isValidBuyerArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidBuyerArn(arn: string)
```

Validates whether a string is a valid ARN for the buyer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidBuyerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCallArn` <a name="isValidCallArn" id="@cdk_utils/iam.iq.IqResources.isValidCallArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidCallArn(arn: string)
```

Validates whether a string is a valid ARN for the call resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidCallArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCompanyArn` <a name="isValidCompanyArn" id="@cdk_utils/iam.iq.IqResources.isValidCompanyArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidCompanyArn(arn: string)
```

Validates whether a string is a valid ARN for the company resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidCompanyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConversationArn` <a name="isValidConversationArn" id="@cdk_utils/iam.iq.IqResources.isValidConversationArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidConversationArn(arn: string)
```

Validates whether a string is a valid ARN for the conversation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidConversationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExpertArn` <a name="isValidExpertArn" id="@cdk_utils/iam.iq.IqResources.isValidExpertArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidExpertArn(arn: string)
```

Validates whether a string is a valid ARN for the expert resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidExpertArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidListingArn` <a name="isValidListingArn" id="@cdk_utils/iam.iq.IqResources.isValidListingArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidListingArn(arn: string)
```

Validates whether a string is a valid ARN for the listing resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidListingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPaymentRequestArn` <a name="isValidPaymentRequestArn" id="@cdk_utils/iam.iq.IqResources.isValidPaymentRequestArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidPaymentRequestArn(arn: string)
```

Validates whether a string is a valid ARN for the paymentRequest resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidPaymentRequestArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPaymentScheduleArn` <a name="isValidPaymentScheduleArn" id="@cdk_utils/iam.iq.IqResources.isValidPaymentScheduleArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidPaymentScheduleArn(arn: string)
```

Validates whether a string is a valid ARN for the paymentSchedule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidPaymentScheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPermissionArn` <a name="isValidPermissionArn" id="@cdk_utils/iam.iq.IqResources.isValidPermissionArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidPermissionArn(arn: string)
```

Validates whether a string is a valid ARN for the permission resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidPermissionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProposalArn` <a name="isValidProposalArn" id="@cdk_utils/iam.iq.IqResources.isValidProposalArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidProposalArn(arn: string)
```

Validates whether a string is a valid ARN for the proposal resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidProposalArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRequestArn` <a name="isValidRequestArn" id="@cdk_utils/iam.iq.IqResources.isValidRequestArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidRequestArn(arn: string)
```

Validates whether a string is a valid ARN for the request resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidRequestArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSellerArn` <a name="isValidSellerArn" id="@cdk_utils/iam.iq.IqResources.isValidSellerArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidSellerArn(arn: string)
```

Validates whether a string is a valid ARN for the seller resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidSellerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTokenArn` <a name="isValidTokenArn" id="@cdk_utils/iam.iq.IqResources.isValidTokenArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.isValidTokenArn(arn: string)
```

Validates whether a string is a valid ARN for the token resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.isValidTokenArn.parameter.arn"></a>

- *Type:* string

---

##### `listing` <a name="listing" id="@cdk_utils/iam.iq.IqResources.listing"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.listing(props: IqListingArnProps)
```

Builds an ARN for the listing resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.listing.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqListingArnProps">IqListingArnProps</a>

---

##### `parseAttachmentArn` <a name="parseAttachmentArn" id="@cdk_utils/iam.iq.IqResources.parseAttachmentArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseAttachmentArn(arn: string)
```

Parses a attachment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseAttachmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBuyerArn` <a name="parseBuyerArn" id="@cdk_utils/iam.iq.IqResources.parseBuyerArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseBuyerArn(arn: string)
```

Parses a buyer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseBuyerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCallArn` <a name="parseCallArn" id="@cdk_utils/iam.iq.IqResources.parseCallArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseCallArn(arn: string)
```

Parses a call ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseCallArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCompanyArn` <a name="parseCompanyArn" id="@cdk_utils/iam.iq.IqResources.parseCompanyArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseCompanyArn(arn: string)
```

Parses a company ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseCompanyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConversationArn` <a name="parseConversationArn" id="@cdk_utils/iam.iq.IqResources.parseConversationArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseConversationArn(arn: string)
```

Parses a conversation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseConversationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExpertArn` <a name="parseExpertArn" id="@cdk_utils/iam.iq.IqResources.parseExpertArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseExpertArn(arn: string)
```

Parses a expert ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseExpertArn.parameter.arn"></a>

- *Type:* string

---

##### `parseListingArn` <a name="parseListingArn" id="@cdk_utils/iam.iq.IqResources.parseListingArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseListingArn(arn: string)
```

Parses a listing ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseListingArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePaymentRequestArn` <a name="parsePaymentRequestArn" id="@cdk_utils/iam.iq.IqResources.parsePaymentRequestArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parsePaymentRequestArn(arn: string)
```

Parses a paymentRequest ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parsePaymentRequestArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePaymentScheduleArn` <a name="parsePaymentScheduleArn" id="@cdk_utils/iam.iq.IqResources.parsePaymentScheduleArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parsePaymentScheduleArn(arn: string)
```

Parses a paymentSchedule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parsePaymentScheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePermissionArn` <a name="parsePermissionArn" id="@cdk_utils/iam.iq.IqResources.parsePermissionArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parsePermissionArn(arn: string)
```

Parses a permission ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parsePermissionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProposalArn` <a name="parseProposalArn" id="@cdk_utils/iam.iq.IqResources.parseProposalArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseProposalArn(arn: string)
```

Parses a proposal ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseProposalArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRequestArn` <a name="parseRequestArn" id="@cdk_utils/iam.iq.IqResources.parseRequestArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseRequestArn(arn: string)
```

Parses a request ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseRequestArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSellerArn` <a name="parseSellerArn" id="@cdk_utils/iam.iq.IqResources.parseSellerArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseSellerArn(arn: string)
```

Parses a seller ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseSellerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTokenArn` <a name="parseTokenArn" id="@cdk_utils/iam.iq.IqResources.parseTokenArn"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.parseTokenArn(arn: string)
```

Parses a token ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq.IqResources.parseTokenArn.parameter.arn"></a>

- *Type:* string

---

##### `paymentRequest` <a name="paymentRequest" id="@cdk_utils/iam.iq.IqResources.paymentRequest"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.paymentRequest(props: IqPaymentRequestArnProps)
```

Builds an ARN for the paymentRequest resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.paymentRequest.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqPaymentRequestArnProps">IqPaymentRequestArnProps</a>

---

##### `paymentSchedule` <a name="paymentSchedule" id="@cdk_utils/iam.iq.IqResources.paymentSchedule"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.paymentSchedule(props: IqPaymentScheduleArnProps)
```

Builds an ARN for the paymentSchedule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.paymentSchedule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqPaymentScheduleArnProps">IqPaymentScheduleArnProps</a>

---

##### `permission` <a name="permission" id="@cdk_utils/iam.iq.IqResources.permission"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.permission(props: IqPermissionArnProps)
```

Builds an ARN for the permission resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.permission.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqPermissionArnProps">IqPermissionArnProps</a>

---

##### `proposal` <a name="proposal" id="@cdk_utils/iam.iq.IqResources.proposal"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.proposal(props: IqProposalArnProps)
```

Builds an ARN for the proposal resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.proposal.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqProposalArnProps">IqProposalArnProps</a>

---

##### `request` <a name="request" id="@cdk_utils/iam.iq.IqResources.request"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.request(props: IqRequestArnProps)
```

Builds an ARN for the request resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.request.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqRequestArnProps">IqRequestArnProps</a>

---

##### `seller` <a name="seller" id="@cdk_utils/iam.iq.IqResources.seller"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.seller(props: IqSellerArnProps)
```

Builds an ARN for the seller resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.seller.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqSellerArnProps">IqSellerArnProps</a>

---

##### `token` <a name="token" id="@cdk_utils/iam.iq.IqResources.token"></a>

```typescript
import { iq } from '@cdk_utils/iam'

iq.IqResources.token(props: IqTokenArnProps)
```

Builds an ARN for the token resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq.IqResources.token.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq.IqTokenArnProps">IqTokenArnProps</a>

---




