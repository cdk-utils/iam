# `ssm_contacts` Submodule <a name="`ssm_contacts` Submodule" id="@cdk_utils/iam.ssm_contacts"></a>


## Structs <a name="Structs" id="Structs"></a>

### SSMContactsContactArnComponents <a name="SSMContactsContactArnComponents" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnComponents"></a>

Parsed components of a contact ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnComponents.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

const sSMContactsContactArnComponents: ssm_contacts.SSMContactsContactArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactArnComponents.property.contactAlias">contactAlias</a></code> | <code>string</code> | The ContactAlias component. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contactAlias`<sup>Required</sup> <a name="contactAlias" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnComponents.property.contactAlias"></a>

```typescript
public readonly contactAlias: string;
```

- *Type:* string

The ContactAlias component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMContactsContactArnProps <a name="SSMContactsContactArnProps" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps"></a>

Properties for building a contact ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

const sSMContactsContactArnProps: ssm_contacts.SSMContactsContactArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps.property.contactAlias">contactAlias</a></code> | <code>string</code> | The ContactAlias component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contactAlias`<sup>Required</sup> <a name="contactAlias" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps.property.contactAlias"></a>

```typescript
public readonly contactAlias: string;
```

- *Type:* string

The ContactAlias component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMContactsContactchannelArnComponents <a name="SSMContactsContactchannelArnComponents" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents"></a>

Parsed components of a contactchannel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

const sSMContactsContactchannelArnComponents: ssm_contacts.SSMContactsContactchannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.property.contactAlias">contactAlias</a></code> | <code>string</code> | The ContactAlias component. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.property.contactChannelId">contactChannelId</a></code> | <code>string</code> | The ContactChannelId component. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contactAlias`<sup>Required</sup> <a name="contactAlias" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.property.contactAlias"></a>

```typescript
public readonly contactAlias: string;
```

- *Type:* string

The ContactAlias component.

---

##### `contactChannelId`<sup>Required</sup> <a name="contactChannelId" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.property.contactChannelId"></a>

```typescript
public readonly contactChannelId: string;
```

- *Type:* string

The ContactChannelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMContactsContactchannelArnProps <a name="SSMContactsContactchannelArnProps" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps"></a>

Properties for building a contactchannel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

const sSMContactsContactchannelArnProps: ssm_contacts.SSMContactsContactchannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.property.contactAlias">contactAlias</a></code> | <code>string</code> | The ContactAlias component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.property.contactChannelId">contactChannelId</a></code> | <code>string</code> | The ContactChannelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contactAlias`<sup>Required</sup> <a name="contactAlias" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.property.contactAlias"></a>

```typescript
public readonly contactAlias: string;
```

- *Type:* string

The ContactAlias component of the ARN.

---

##### `contactChannelId`<sup>Required</sup> <a name="contactChannelId" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.property.contactChannelId"></a>

```typescript
public readonly contactChannelId: string;
```

- *Type:* string

The ContactChannelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMContactsEngagementArnComponents <a name="SSMContactsEngagementArnComponents" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents"></a>

Parsed components of a engagement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

const sSMContactsEngagementArnComponents: ssm_contacts.SSMContactsEngagementArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.property.contactAlias">contactAlias</a></code> | <code>string</code> | The ContactAlias component. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.property.engagementId">engagementId</a></code> | <code>string</code> | The EngagementId component. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contactAlias`<sup>Required</sup> <a name="contactAlias" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.property.contactAlias"></a>

```typescript
public readonly contactAlias: string;
```

- *Type:* string

The ContactAlias component.

---

##### `engagementId`<sup>Required</sup> <a name="engagementId" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.property.engagementId"></a>

```typescript
public readonly engagementId: string;
```

- *Type:* string

The EngagementId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMContactsEngagementArnProps <a name="SSMContactsEngagementArnProps" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps"></a>

Properties for building a engagement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

const sSMContactsEngagementArnProps: ssm_contacts.SSMContactsEngagementArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.property.contactAlias">contactAlias</a></code> | <code>string</code> | The ContactAlias component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.property.engagementId">engagementId</a></code> | <code>string</code> | The EngagementId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contactAlias`<sup>Required</sup> <a name="contactAlias" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.property.contactAlias"></a>

```typescript
public readonly contactAlias: string;
```

- *Type:* string

The ContactAlias component of the ARN.

---

##### `engagementId`<sup>Required</sup> <a name="engagementId" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.property.engagementId"></a>

```typescript
public readonly engagementId: string;
```

- *Type:* string

The EngagementId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMContactsPageArnComponents <a name="SSMContactsPageArnComponents" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents"></a>

Parsed components of a page ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

const sSMContactsPageArnComponents: ssm_contacts.SSMContactsPageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.property.contactAlias">contactAlias</a></code> | <code>string</code> | The ContactAlias component. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.property.pageId">pageId</a></code> | <code>string</code> | The PageId component. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contactAlias`<sup>Required</sup> <a name="contactAlias" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.property.contactAlias"></a>

```typescript
public readonly contactAlias: string;
```

- *Type:* string

The ContactAlias component.

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.property.pageId"></a>

```typescript
public readonly pageId: string;
```

- *Type:* string

The PageId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMContactsPageArnProps <a name="SSMContactsPageArnProps" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps"></a>

Properties for building a page ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

const sSMContactsPageArnProps: ssm_contacts.SSMContactsPageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.property.contactAlias">contactAlias</a></code> | <code>string</code> | The ContactAlias component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.property.pageId">pageId</a></code> | <code>string</code> | The PageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contactAlias`<sup>Required</sup> <a name="contactAlias" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.property.contactAlias"></a>

```typescript
public readonly contactAlias: string;
```

- *Type:* string

The ContactAlias component of the ARN.

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.property.pageId"></a>

```typescript
public readonly pageId: string;
```

- *Type:* string

The PageId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMContactsRotationArnComponents <a name="SSMContactsRotationArnComponents" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnComponents"></a>

Parsed components of a rotation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnComponents.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

const sSMContactsRotationArnComponents: ssm_contacts.SSMContactsRotationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnComponents.property.rotationId">rotationId</a></code> | <code>string</code> | The RotationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `rotationId`<sup>Required</sup> <a name="rotationId" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnComponents.property.rotationId"></a>

```typescript
public readonly rotationId: string;
```

- *Type:* string

The RotationId component.

---

### SSMContactsRotationArnProps <a name="SSMContactsRotationArnProps" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps"></a>

Properties for building a rotation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

const sSMContactsRotationArnProps: ssm_contacts.SSMContactsRotationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps.property.rotationId">rotationId</a></code> | <code>string</code> | The RotationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `rotationId`<sup>Required</sup> <a name="rotationId" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps.property.rotationId"></a>

```typescript
public readonly rotationId: string;
```

- *Type:* string

The RotationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SSMContactsActions <a name="SSMContactsActions" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions"></a>

IAM action constants for the ssm-contacts service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

new ssm_contacts.SSMContactsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AcceptPage">AcceptPage</a></code> | <code>string</code> | [Write] ssm-contacts:AcceptPage. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.actionGetContact">actionGetContact</a></code> | <code>string</code> | [Read] ssm-contacts:GetContact. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.actionGetContactChannel">actionGetContactChannel</a></code> | <code>string</code> | [Read] ssm-contacts:GetContactChannel. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.actionGetContactPolicy">actionGetContactPolicy</a></code> | <code>string</code> | [Read] ssm-contacts:GetContactPolicy. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.actionGetRotation">actionGetRotation</a></code> | <code>string</code> | [Read] ssm-contacts:GetRotation. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.actionGetRotationOverride">actionGetRotationOverride</a></code> | <code>string</code> | [Read] ssm-contacts:GetRotationOverride. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ActivateContactChannel">ActivateContactChannel</a></code> | <code>string</code> | [Write] ssm-contacts:ActivateContactChannel. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AssociateContact">AssociateContact</a></code> | <code>string</code> | [PermissionManagement] ssm-contacts:AssociateContact. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.CreateContact">CreateContact</a></code> | <code>string</code> | [Write] ssm-contacts:CreateContact. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.CreateContactChannel">CreateContactChannel</a></code> | <code>string</code> | [Write] ssm-contacts:CreateContactChannel. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.CreateRotation">CreateRotation</a></code> | <code>string</code> | [Write] ssm-contacts:CreateRotation. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.CreateRotationOverride">CreateRotationOverride</a></code> | <code>string</code> | [Write] ssm-contacts:CreateRotationOverride. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DeactivateContactChannel">DeactivateContactChannel</a></code> | <code>string</code> | [Write] ssm-contacts:DeactivateContactChannel. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DeleteContact">DeleteContact</a></code> | <code>string</code> | [Write] ssm-contacts:DeleteContact. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DeleteContactChannel">DeleteContactChannel</a></code> | <code>string</code> | [Write] ssm-contacts:DeleteContactChannel. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DeleteRotation">DeleteRotation</a></code> | <code>string</code> | [Write] ssm-contacts:DeleteRotation. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DeleteRotationOverride">DeleteRotationOverride</a></code> | <code>string</code> | [Write] ssm-contacts:DeleteRotationOverride. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DescribeEngagement">DescribeEngagement</a></code> | <code>string</code> | [Read] ssm-contacts:DescribeEngagement. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DescribePage">DescribePage</a></code> | <code>string</code> | [Read] ssm-contacts:DescribePage. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListContactChannels">ListContactChannels</a></code> | <code>string</code> | [List] ssm-contacts:ListContactChannels. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListContacts">ListContacts</a></code> | <code>string</code> | [List] ssm-contacts:ListContacts. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListEngagements">ListEngagements</a></code> | <code>string</code> | [List] ssm-contacts:ListEngagements. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListPageReceipts">ListPageReceipts</a></code> | <code>string</code> | [List] ssm-contacts:ListPageReceipts. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListPageResolutions">ListPageResolutions</a></code> | <code>string</code> | [List] ssm-contacts:ListPageResolutions. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListPagesByContact">ListPagesByContact</a></code> | <code>string</code> | [List] ssm-contacts:ListPagesByContact. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListPagesByEngagement">ListPagesByEngagement</a></code> | <code>string</code> | [List] ssm-contacts:ListPagesByEngagement. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListPreviewRotationShifts">ListPreviewRotationShifts</a></code> | <code>string</code> | [List] ssm-contacts:ListPreviewRotationShifts. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListRotationOverrides">ListRotationOverrides</a></code> | <code>string</code> | [List] ssm-contacts:ListRotationOverrides. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListRotations">ListRotations</a></code> | <code>string</code> | [List] ssm-contacts:ListRotations. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListRotationShifts">ListRotationShifts</a></code> | <code>string</code> | [List] ssm-contacts:ListRotationShifts. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ssm-contacts:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.PutContactPolicy">PutContactPolicy</a></code> | <code>string</code> | [Write] ssm-contacts:PutContactPolicy. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.SendActivationCode">SendActivationCode</a></code> | <code>string</code> | [Write] ssm-contacts:SendActivationCode. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.StartEngagement">StartEngagement</a></code> | <code>string</code> | [Write] ssm-contacts:StartEngagement. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.StopEngagement">StopEngagement</a></code> | <code>string</code> | [Write] ssm-contacts:StopEngagement. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ssm-contacts:TagResource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ssm-contacts:UntagResource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.UpdateContact">UpdateContact</a></code> | <code>string</code> | [Write] ssm-contacts:UpdateContact. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.UpdateContactChannel">UpdateContactChannel</a></code> | <code>string</code> | [Write] ssm-contacts:UpdateContactChannel. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.UpdateRotation">UpdateRotation</a></code> | <code>string</code> | [Write] ssm-contacts:UpdateRotation. |

---

##### `AcceptPage`<sup>Required</sup> <a name="AcceptPage" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AcceptPage"></a>

```typescript
public readonly AcceptPage: string;
```

- *Type:* string

[Write] ssm-contacts:AcceptPage.

---

##### `actionGetContact`<sup>Required</sup> <a name="actionGetContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.actionGetContact"></a>

```typescript
public readonly actionGetContact: string;
```

- *Type:* string

[Read] ssm-contacts:GetContact.

---

##### `actionGetContactChannel`<sup>Required</sup> <a name="actionGetContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.actionGetContactChannel"></a>

```typescript
public readonly actionGetContactChannel: string;
```

- *Type:* string

[Read] ssm-contacts:GetContactChannel.

---

##### `actionGetContactPolicy`<sup>Required</sup> <a name="actionGetContactPolicy" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.actionGetContactPolicy"></a>

```typescript
public readonly actionGetContactPolicy: string;
```

- *Type:* string

[Read] ssm-contacts:GetContactPolicy.

---

##### `actionGetRotation`<sup>Required</sup> <a name="actionGetRotation" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.actionGetRotation"></a>

```typescript
public readonly actionGetRotation: string;
```

- *Type:* string

[Read] ssm-contacts:GetRotation.

---

##### `actionGetRotationOverride`<sup>Required</sup> <a name="actionGetRotationOverride" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.actionGetRotationOverride"></a>

```typescript
public readonly actionGetRotationOverride: string;
```

- *Type:* string

[Read] ssm-contacts:GetRotationOverride.

---

##### `ActivateContactChannel`<sup>Required</sup> <a name="ActivateContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ActivateContactChannel"></a>

```typescript
public readonly ActivateContactChannel: string;
```

- *Type:* string

[Write] ssm-contacts:ActivateContactChannel.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateContact`<sup>Required</sup> <a name="AssociateContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.AssociateContact"></a>

```typescript
public readonly AssociateContact: string;
```

- *Type:* string

[PermissionManagement] ssm-contacts:AssociateContact.

---

##### `CreateContact`<sup>Required</sup> <a name="CreateContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.CreateContact"></a>

```typescript
public readonly CreateContact: string;
```

- *Type:* string

[Write] ssm-contacts:CreateContact.

---

##### `CreateContactChannel`<sup>Required</sup> <a name="CreateContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.CreateContactChannel"></a>

```typescript
public readonly CreateContactChannel: string;
```

- *Type:* string

[Write] ssm-contacts:CreateContactChannel.

---

##### `CreateRotation`<sup>Required</sup> <a name="CreateRotation" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.CreateRotation"></a>

```typescript
public readonly CreateRotation: string;
```

- *Type:* string

[Write] ssm-contacts:CreateRotation.

---

##### `CreateRotationOverride`<sup>Required</sup> <a name="CreateRotationOverride" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.CreateRotationOverride"></a>

```typescript
public readonly CreateRotationOverride: string;
```

- *Type:* string

[Write] ssm-contacts:CreateRotationOverride.

---

##### `DeactivateContactChannel`<sup>Required</sup> <a name="DeactivateContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DeactivateContactChannel"></a>

```typescript
public readonly DeactivateContactChannel: string;
```

- *Type:* string

[Write] ssm-contacts:DeactivateContactChannel.

---

##### `DeleteContact`<sup>Required</sup> <a name="DeleteContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DeleteContact"></a>

```typescript
public readonly DeleteContact: string;
```

- *Type:* string

[Write] ssm-contacts:DeleteContact.

---

##### `DeleteContactChannel`<sup>Required</sup> <a name="DeleteContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DeleteContactChannel"></a>

```typescript
public readonly DeleteContactChannel: string;
```

- *Type:* string

[Write] ssm-contacts:DeleteContactChannel.

---

##### `DeleteRotation`<sup>Required</sup> <a name="DeleteRotation" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DeleteRotation"></a>

```typescript
public readonly DeleteRotation: string;
```

- *Type:* string

[Write] ssm-contacts:DeleteRotation.

---

##### `DeleteRotationOverride`<sup>Required</sup> <a name="DeleteRotationOverride" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DeleteRotationOverride"></a>

```typescript
public readonly DeleteRotationOverride: string;
```

- *Type:* string

[Write] ssm-contacts:DeleteRotationOverride.

---

##### `DescribeEngagement`<sup>Required</sup> <a name="DescribeEngagement" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DescribeEngagement"></a>

```typescript
public readonly DescribeEngagement: string;
```

- *Type:* string

[Read] ssm-contacts:DescribeEngagement.

---

##### `DescribePage`<sup>Required</sup> <a name="DescribePage" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.DescribePage"></a>

```typescript
public readonly DescribePage: string;
```

- *Type:* string

[Read] ssm-contacts:DescribePage.

---

##### `ListContactChannels`<sup>Required</sup> <a name="ListContactChannels" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListContactChannels"></a>

```typescript
public readonly ListContactChannels: string;
```

- *Type:* string

[List] ssm-contacts:ListContactChannels.

---

##### `ListContacts`<sup>Required</sup> <a name="ListContacts" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListContacts"></a>

```typescript
public readonly ListContacts: string;
```

- *Type:* string

[List] ssm-contacts:ListContacts.

---

##### `ListEngagements`<sup>Required</sup> <a name="ListEngagements" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListEngagements"></a>

```typescript
public readonly ListEngagements: string;
```

- *Type:* string

[List] ssm-contacts:ListEngagements.

---

##### `ListPageReceipts`<sup>Required</sup> <a name="ListPageReceipts" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListPageReceipts"></a>

```typescript
public readonly ListPageReceipts: string;
```

- *Type:* string

[List] ssm-contacts:ListPageReceipts.

---

##### `ListPageResolutions`<sup>Required</sup> <a name="ListPageResolutions" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListPageResolutions"></a>

```typescript
public readonly ListPageResolutions: string;
```

- *Type:* string

[List] ssm-contacts:ListPageResolutions.

---

##### `ListPagesByContact`<sup>Required</sup> <a name="ListPagesByContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListPagesByContact"></a>

```typescript
public readonly ListPagesByContact: string;
```

- *Type:* string

[List] ssm-contacts:ListPagesByContact.

---

##### `ListPagesByEngagement`<sup>Required</sup> <a name="ListPagesByEngagement" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListPagesByEngagement"></a>

```typescript
public readonly ListPagesByEngagement: string;
```

- *Type:* string

[List] ssm-contacts:ListPagesByEngagement.

---

##### `ListPreviewRotationShifts`<sup>Required</sup> <a name="ListPreviewRotationShifts" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListPreviewRotationShifts"></a>

```typescript
public readonly ListPreviewRotationShifts: string;
```

- *Type:* string

[List] ssm-contacts:ListPreviewRotationShifts.

---

##### `ListRotationOverrides`<sup>Required</sup> <a name="ListRotationOverrides" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListRotationOverrides"></a>

```typescript
public readonly ListRotationOverrides: string;
```

- *Type:* string

[List] ssm-contacts:ListRotationOverrides.

---

##### `ListRotations`<sup>Required</sup> <a name="ListRotations" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListRotations"></a>

```typescript
public readonly ListRotations: string;
```

- *Type:* string

[List] ssm-contacts:ListRotations.

---

##### `ListRotationShifts`<sup>Required</sup> <a name="ListRotationShifts" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListRotationShifts"></a>

```typescript
public readonly ListRotationShifts: string;
```

- *Type:* string

[List] ssm-contacts:ListRotationShifts.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ssm-contacts:ListTagsForResource.

---

##### `PutContactPolicy`<sup>Required</sup> <a name="PutContactPolicy" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.PutContactPolicy"></a>

```typescript
public readonly PutContactPolicy: string;
```

- *Type:* string

[Write] ssm-contacts:PutContactPolicy.

---

##### `SendActivationCode`<sup>Required</sup> <a name="SendActivationCode" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.SendActivationCode"></a>

```typescript
public readonly SendActivationCode: string;
```

- *Type:* string

[Write] ssm-contacts:SendActivationCode.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartEngagement`<sup>Required</sup> <a name="StartEngagement" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.StartEngagement"></a>

```typescript
public readonly StartEngagement: string;
```

- *Type:* string

[Write] ssm-contacts:StartEngagement.

---

##### `StopEngagement`<sup>Required</sup> <a name="StopEngagement" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.StopEngagement"></a>

```typescript
public readonly StopEngagement: string;
```

- *Type:* string

[Write] ssm-contacts:StopEngagement.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ssm-contacts:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ssm-contacts:UntagResource.

---

##### `UpdateContact`<sup>Required</sup> <a name="UpdateContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.UpdateContact"></a>

```typescript
public readonly UpdateContact: string;
```

- *Type:* string

[Write] ssm-contacts:UpdateContact.

---

##### `UpdateContactChannel`<sup>Required</sup> <a name="UpdateContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.UpdateContactChannel"></a>

```typescript
public readonly UpdateContactChannel: string;
```

- *Type:* string

[Write] ssm-contacts:UpdateContactChannel.

---

##### `UpdateRotation`<sup>Required</sup> <a name="UpdateRotation" id="@cdk_utils/iam.ssm_contacts.SSMContactsActions.property.UpdateRotation"></a>

```typescript
public readonly UpdateRotation: string;
```

- *Type:* string

[Write] ssm-contacts:UpdateRotation.

---

### SSMContactsConditions <a name="SSMContactsConditions" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions"></a>

Condition key constants and builders for ssm-contacts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

new ssm_contacts.SSMContactsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.requestTag"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.resourceTag"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.tagKeys"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.CreateContactConditionKeys">CreateContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContact action. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.CreateRotationConditionKeys">CreateRotationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRotation action. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateContactConditionKeys`<sup>Required</sup> <a name="CreateContactConditionKeys" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.CreateContactConditionKeys"></a>

```typescript
public readonly CreateContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContact action.

---

##### `CreateRotationConditionKeys`<sup>Required</sup> <a name="CreateRotationConditionKeys" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.CreateRotationConditionKeys"></a>

```typescript
public readonly CreateRotationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRotation action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ssm_contacts.SSMContactsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SSMContactsOperations <a name="SSMContactsOperations" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations"></a>

API operation to required IAM actions mapping for ssm-contacts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

new ssm_contacts.SSMContactsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.AcceptPage">AcceptPage</a></code> | <code>string[]</code> | IAM actions required for the AcceptPage API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ActivateContactChannel">ActivateContactChannel</a></code> | <code>string[]</code> | IAM actions required for the ActivateContactChannel API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.CreateContact">CreateContact</a></code> | <code>string[]</code> | IAM actions required for the CreateContact API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.CreateContactChannel">CreateContactChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateContactChannel API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.CreateRotation">CreateRotation</a></code> | <code>string[]</code> | IAM actions required for the CreateRotation API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.CreateRotationOverride">CreateRotationOverride</a></code> | <code>string[]</code> | IAM actions required for the CreateRotationOverride API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DeactivateContactChannel">DeactivateContactChannel</a></code> | <code>string[]</code> | IAM actions required for the DeactivateContactChannel API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DeleteContact">DeleteContact</a></code> | <code>string[]</code> | IAM actions required for the DeleteContact API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DeleteContactChannel">DeleteContactChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteContactChannel API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DeleteRotation">DeleteRotation</a></code> | <code>string[]</code> | IAM actions required for the DeleteRotation API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DeleteRotationOverride">DeleteRotationOverride</a></code> | <code>string[]</code> | IAM actions required for the DeleteRotationOverride API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DescribeEngagement">DescribeEngagement</a></code> | <code>string[]</code> | IAM actions required for the DescribeEngagement API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DescribePage">DescribePage</a></code> | <code>string[]</code> | IAM actions required for the DescribePage API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListContactChannels">ListContactChannels</a></code> | <code>string[]</code> | IAM actions required for the ListContactChannels API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListContacts">ListContacts</a></code> | <code>string[]</code> | IAM actions required for the ListContacts API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListEngagements">ListEngagements</a></code> | <code>string[]</code> | IAM actions required for the ListEngagements API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListPageReceipts">ListPageReceipts</a></code> | <code>string[]</code> | IAM actions required for the ListPageReceipts API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListPageResolutions">ListPageResolutions</a></code> | <code>string[]</code> | IAM actions required for the ListPageResolutions API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListPagesByContact">ListPagesByContact</a></code> | <code>string[]</code> | IAM actions required for the ListPagesByContact API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListPagesByEngagement">ListPagesByEngagement</a></code> | <code>string[]</code> | IAM actions required for the ListPagesByEngagement API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListPreviewRotationShifts">ListPreviewRotationShifts</a></code> | <code>string[]</code> | IAM actions required for the ListPreviewRotationShifts API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListRotationOverrides">ListRotationOverrides</a></code> | <code>string[]</code> | IAM actions required for the ListRotationOverrides API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListRotations">ListRotations</a></code> | <code>string[]</code> | IAM actions required for the ListRotations API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListRotationShifts">ListRotationShifts</a></code> | <code>string[]</code> | IAM actions required for the ListRotationShifts API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.opGetContact">opGetContact</a></code> | <code>string[]</code> | IAM actions required for the GetContact API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.opGetContactChannel">opGetContactChannel</a></code> | <code>string[]</code> | IAM actions required for the GetContactChannel API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.opGetContactPolicy">opGetContactPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetContactPolicy API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.opGetRotation">opGetRotation</a></code> | <code>string[]</code> | IAM actions required for the GetRotation API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.opGetRotationOverride">opGetRotationOverride</a></code> | <code>string[]</code> | IAM actions required for the GetRotationOverride API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.PutContactPolicy">PutContactPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutContactPolicy API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.SendActivationCode">SendActivationCode</a></code> | <code>string[]</code> | IAM actions required for the SendActivationCode API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.StartEngagement">StartEngagement</a></code> | <code>string[]</code> | IAM actions required for the StartEngagement API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.StopEngagement">StopEngagement</a></code> | <code>string[]</code> | IAM actions required for the StopEngagement API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.UpdateContact">UpdateContact</a></code> | <code>string[]</code> | IAM actions required for the UpdateContact API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.UpdateContactChannel">UpdateContactChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactChannel API call. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.UpdateRotation">UpdateRotation</a></code> | <code>string[]</code> | IAM actions required for the UpdateRotation API call. |

---

##### `AcceptPage`<sup>Required</sup> <a name="AcceptPage" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.AcceptPage"></a>

```typescript
public readonly AcceptPage: string[];
```

- *Type:* string[]

IAM actions required for the AcceptPage API call.

---

##### `ActivateContactChannel`<sup>Required</sup> <a name="ActivateContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ActivateContactChannel"></a>

```typescript
public readonly ActivateContactChannel: string[];
```

- *Type:* string[]

IAM actions required for the ActivateContactChannel API call.

---

##### `CreateContact`<sup>Required</sup> <a name="CreateContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.CreateContact"></a>

```typescript
public readonly CreateContact: string[];
```

- *Type:* string[]

IAM actions required for the CreateContact API call.

---

##### `CreateContactChannel`<sup>Required</sup> <a name="CreateContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.CreateContactChannel"></a>

```typescript
public readonly CreateContactChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateContactChannel API call.

---

##### `CreateRotation`<sup>Required</sup> <a name="CreateRotation" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.CreateRotation"></a>

```typescript
public readonly CreateRotation: string[];
```

- *Type:* string[]

IAM actions required for the CreateRotation API call.

---

##### `CreateRotationOverride`<sup>Required</sup> <a name="CreateRotationOverride" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.CreateRotationOverride"></a>

```typescript
public readonly CreateRotationOverride: string[];
```

- *Type:* string[]

IAM actions required for the CreateRotationOverride API call.

---

##### `DeactivateContactChannel`<sup>Required</sup> <a name="DeactivateContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DeactivateContactChannel"></a>

```typescript
public readonly DeactivateContactChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeactivateContactChannel API call.

---

##### `DeleteContact`<sup>Required</sup> <a name="DeleteContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DeleteContact"></a>

```typescript
public readonly DeleteContact: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContact API call.

---

##### `DeleteContactChannel`<sup>Required</sup> <a name="DeleteContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DeleteContactChannel"></a>

```typescript
public readonly DeleteContactChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContactChannel API call.

---

##### `DeleteRotation`<sup>Required</sup> <a name="DeleteRotation" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DeleteRotation"></a>

```typescript
public readonly DeleteRotation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRotation API call.

---

##### `DeleteRotationOverride`<sup>Required</sup> <a name="DeleteRotationOverride" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DeleteRotationOverride"></a>

```typescript
public readonly DeleteRotationOverride: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRotationOverride API call.

---

##### `DescribeEngagement`<sup>Required</sup> <a name="DescribeEngagement" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DescribeEngagement"></a>

```typescript
public readonly DescribeEngagement: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEngagement API call.

---

##### `DescribePage`<sup>Required</sup> <a name="DescribePage" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.DescribePage"></a>

```typescript
public readonly DescribePage: string[];
```

- *Type:* string[]

IAM actions required for the DescribePage API call.

---

##### `ListContactChannels`<sup>Required</sup> <a name="ListContactChannels" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListContactChannels"></a>

```typescript
public readonly ListContactChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListContactChannels API call.

---

##### `ListContacts`<sup>Required</sup> <a name="ListContacts" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListContacts"></a>

```typescript
public readonly ListContacts: string[];
```

- *Type:* string[]

IAM actions required for the ListContacts API call.

---

##### `ListEngagements`<sup>Required</sup> <a name="ListEngagements" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListEngagements"></a>

```typescript
public readonly ListEngagements: string[];
```

- *Type:* string[]

IAM actions required for the ListEngagements API call.

---

##### `ListPageReceipts`<sup>Required</sup> <a name="ListPageReceipts" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListPageReceipts"></a>

```typescript
public readonly ListPageReceipts: string[];
```

- *Type:* string[]

IAM actions required for the ListPageReceipts API call.

---

##### `ListPageResolutions`<sup>Required</sup> <a name="ListPageResolutions" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListPageResolutions"></a>

```typescript
public readonly ListPageResolutions: string[];
```

- *Type:* string[]

IAM actions required for the ListPageResolutions API call.

---

##### `ListPagesByContact`<sup>Required</sup> <a name="ListPagesByContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListPagesByContact"></a>

```typescript
public readonly ListPagesByContact: string[];
```

- *Type:* string[]

IAM actions required for the ListPagesByContact API call.

---

##### `ListPagesByEngagement`<sup>Required</sup> <a name="ListPagesByEngagement" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListPagesByEngagement"></a>

```typescript
public readonly ListPagesByEngagement: string[];
```

- *Type:* string[]

IAM actions required for the ListPagesByEngagement API call.

---

##### `ListPreviewRotationShifts`<sup>Required</sup> <a name="ListPreviewRotationShifts" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListPreviewRotationShifts"></a>

```typescript
public readonly ListPreviewRotationShifts: string[];
```

- *Type:* string[]

IAM actions required for the ListPreviewRotationShifts API call.

---

##### `ListRotationOverrides`<sup>Required</sup> <a name="ListRotationOverrides" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListRotationOverrides"></a>

```typescript
public readonly ListRotationOverrides: string[];
```

- *Type:* string[]

IAM actions required for the ListRotationOverrides API call.

---

##### `ListRotations`<sup>Required</sup> <a name="ListRotations" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListRotations"></a>

```typescript
public readonly ListRotations: string[];
```

- *Type:* string[]

IAM actions required for the ListRotations API call.

---

##### `ListRotationShifts`<sup>Required</sup> <a name="ListRotationShifts" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListRotationShifts"></a>

```typescript
public readonly ListRotationShifts: string[];
```

- *Type:* string[]

IAM actions required for the ListRotationShifts API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetContact`<sup>Required</sup> <a name="opGetContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.opGetContact"></a>

```typescript
public readonly opGetContact: string[];
```

- *Type:* string[]

IAM actions required for the GetContact API call.

---

##### `opGetContactChannel`<sup>Required</sup> <a name="opGetContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.opGetContactChannel"></a>

```typescript
public readonly opGetContactChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetContactChannel API call.

---

##### `opGetContactPolicy`<sup>Required</sup> <a name="opGetContactPolicy" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.opGetContactPolicy"></a>

```typescript
public readonly opGetContactPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetContactPolicy API call.

---

##### `opGetRotation`<sup>Required</sup> <a name="opGetRotation" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.opGetRotation"></a>

```typescript
public readonly opGetRotation: string[];
```

- *Type:* string[]

IAM actions required for the GetRotation API call.

---

##### `opGetRotationOverride`<sup>Required</sup> <a name="opGetRotationOverride" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.opGetRotationOverride"></a>

```typescript
public readonly opGetRotationOverride: string[];
```

- *Type:* string[]

IAM actions required for the GetRotationOverride API call.

---

##### `PutContactPolicy`<sup>Required</sup> <a name="PutContactPolicy" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.PutContactPolicy"></a>

```typescript
public readonly PutContactPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutContactPolicy API call.

---

##### `SendActivationCode`<sup>Required</sup> <a name="SendActivationCode" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.SendActivationCode"></a>

```typescript
public readonly SendActivationCode: string[];
```

- *Type:* string[]

IAM actions required for the SendActivationCode API call.

---

##### `StartEngagement`<sup>Required</sup> <a name="StartEngagement" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.StartEngagement"></a>

```typescript
public readonly StartEngagement: string[];
```

- *Type:* string[]

IAM actions required for the StartEngagement API call.

---

##### `StopEngagement`<sup>Required</sup> <a name="StopEngagement" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.StopEngagement"></a>

```typescript
public readonly StopEngagement: string[];
```

- *Type:* string[]

IAM actions required for the StopEngagement API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateContact`<sup>Required</sup> <a name="UpdateContact" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.UpdateContact"></a>

```typescript
public readonly UpdateContact: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContact API call.

---

##### `UpdateContactChannel`<sup>Required</sup> <a name="UpdateContactChannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.UpdateContactChannel"></a>

```typescript
public readonly UpdateContactChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactChannel API call.

---

##### `UpdateRotation`<sup>Required</sup> <a name="UpdateRotation" id="@cdk_utils/iam.ssm_contacts.SSMContactsOperations.property.UpdateRotation"></a>

```typescript
public readonly UpdateRotation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRotation API call.

---

### SSMContactsResources <a name="SSMContactsResources" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources"></a>

ARN builders, validators, and parsers for ssm-contacts resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.Initializer"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

new ssm_contacts.SSMContactsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.contact">contact</a></code> | Builds an ARN for the contact resource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.contactchannel">contactchannel</a></code> | Builds an ARN for the contactchannel resource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.engagement">engagement</a></code> | Builds an ARN for the engagement resource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidContactArn">isValidContactArn</a></code> | Validates whether a string is a valid ARN for the contact resource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidContactchannelArn">isValidContactchannelArn</a></code> | Validates whether a string is a valid ARN for the contactchannel resource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidEngagementArn">isValidEngagementArn</a></code> | Validates whether a string is a valid ARN for the engagement resource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidPageArn">isValidPageArn</a></code> | Validates whether a string is a valid ARN for the page resource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidRotationArn">isValidRotationArn</a></code> | Validates whether a string is a valid ARN for the rotation resource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.page">page</a></code> | Builds an ARN for the page resource. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseContactArn">parseContactArn</a></code> | Parses a contact ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseContactchannelArn">parseContactchannelArn</a></code> | Parses a contactchannel ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseEngagementArn">parseEngagementArn</a></code> | Parses a engagement ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.parsePageArn">parsePageArn</a></code> | Parses a page ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseRotationArn">parseRotationArn</a></code> | Parses a rotation ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm_contacts.SSMContactsResources.rotation">rotation</a></code> | Builds an ARN for the rotation resource. |

---

##### `contact` <a name="contact" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.contact"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.contact(props: SSMContactsContactArnProps)
```

Builds an ARN for the contact resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.contact.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactArnProps">SSMContactsContactArnProps</a>

---

##### `contactchannel` <a name="contactchannel" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.contactchannel"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.contactchannel(props: SSMContactsContactchannelArnProps)
```

Builds an ARN for the contactchannel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.contactchannel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_contacts.SSMContactsContactchannelArnProps">SSMContactsContactchannelArnProps</a>

---

##### `engagement` <a name="engagement" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.engagement"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.engagement(props: SSMContactsEngagementArnProps)
```

Builds an ARN for the engagement resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.engagement.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_contacts.SSMContactsEngagementArnProps">SSMContactsEngagementArnProps</a>

---

##### `isValidContactArn` <a name="isValidContactArn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidContactArn"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.isValidContactArn(arn: string)
```

Validates whether a string is a valid ARN for the contact resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidContactArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContactchannelArn` <a name="isValidContactchannelArn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidContactchannelArn"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.isValidContactchannelArn(arn: string)
```

Validates whether a string is a valid ARN for the contactchannel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidContactchannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEngagementArn` <a name="isValidEngagementArn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidEngagementArn"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.isValidEngagementArn(arn: string)
```

Validates whether a string is a valid ARN for the engagement resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidEngagementArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPageArn` <a name="isValidPageArn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidPageArn"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.isValidPageArn(arn: string)
```

Validates whether a string is a valid ARN for the page resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidPageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRotationArn` <a name="isValidRotationArn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidRotationArn"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.isValidRotationArn(arn: string)
```

Validates whether a string is a valid ARN for the rotation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.isValidRotationArn.parameter.arn"></a>

- *Type:* string

---

##### `page` <a name="page" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.page"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.page(props: SSMContactsPageArnProps)
```

Builds an ARN for the page resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.page.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_contacts.SSMContactsPageArnProps">SSMContactsPageArnProps</a>

---

##### `parseContactArn` <a name="parseContactArn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseContactArn"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.parseContactArn(arn: string)
```

Parses a contact ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseContactArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContactchannelArn` <a name="parseContactchannelArn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseContactchannelArn"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.parseContactchannelArn(arn: string)
```

Parses a contactchannel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseContactchannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEngagementArn` <a name="parseEngagementArn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseEngagementArn"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.parseEngagementArn(arn: string)
```

Parses a engagement ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseEngagementArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePageArn` <a name="parsePageArn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.parsePageArn"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.parsePageArn(arn: string)
```

Parses a page ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.parsePageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRotationArn` <a name="parseRotationArn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseRotationArn"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.parseRotationArn(arn: string)
```

Parses a rotation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.parseRotationArn.parameter.arn"></a>

- *Type:* string

---

##### `rotation` <a name="rotation" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.rotation"></a>

```typescript
import { ssm_contacts } from '@cdk_utils/iam'

ssm_contacts.SSMContactsResources.rotation(props: SSMContactsRotationArnProps)
```

Builds an ARN for the rotation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_contacts.SSMContactsResources.rotation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_contacts.SSMContactsRotationArnProps">SSMContactsRotationArnProps</a>

---




