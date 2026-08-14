# `sms_voice` Submodule <a name="`sms_voice` Submodule" id="@cdk_utils/iam.sms_voice"></a>


## Structs <a name="Structs" id="Structs"></a>

### SMSVoiceConfigurationSetArnComponents <a name="SMSVoiceConfigurationSetArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnComponents"></a>

Parsed components of a ConfigurationSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceConfigurationSetArnComponents: sms_voice.SMSVoiceConfigurationSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnComponents.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | The ConfigurationSetName component. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnComponents.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

The ConfigurationSetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SMSVoiceConfigurationSetArnProps <a name="SMSVoiceConfigurationSetArnProps" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps"></a>

Properties for building a ConfigurationSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceConfigurationSetArnProps: sms_voice.SMSVoiceConfigurationSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | The ConfigurationSetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

The ConfigurationSetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoiceMessageArnComponents <a name="SMSVoiceMessageArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnComponents"></a>

Parsed components of a Message ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceMessageArnComponents: sms_voice.SMSVoiceMessageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceMessageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceMessageArnComponents.property.messageId">messageId</a></code> | <code>string</code> | The MessageId component. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceMessageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceMessageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `messageId`<sup>Required</sup> <a name="messageId" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnComponents.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

The MessageId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SMSVoiceMessageArnProps <a name="SMSVoiceMessageArnProps" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps"></a>

Properties for building a Message ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceMessageArnProps: sms_voice.SMSVoiceMessageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps.property.messageId">messageId</a></code> | <code>string</code> | The MessageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `messageId`<sup>Required</sup> <a name="messageId" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

The MessageId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoiceNotifyConfigurationArnComponents <a name="SMSVoiceNotifyConfigurationArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnComponents"></a>

Parsed components of a NotifyConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceNotifyConfigurationArnComponents: sms_voice.SMSVoiceNotifyConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnComponents.property.notifyConfigurationId">notifyConfigurationId</a></code> | <code>string</code> | The NotifyConfigurationId component. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `notifyConfigurationId`<sup>Required</sup> <a name="notifyConfigurationId" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnComponents.property.notifyConfigurationId"></a>

```typescript
public readonly notifyConfigurationId: string;
```

- *Type:* string

The NotifyConfigurationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SMSVoiceNotifyConfigurationArnProps <a name="SMSVoiceNotifyConfigurationArnProps" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps"></a>

Properties for building a NotifyConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceNotifyConfigurationArnProps: sms_voice.SMSVoiceNotifyConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps.property.notifyConfigurationId">notifyConfigurationId</a></code> | <code>string</code> | The NotifyConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `notifyConfigurationId`<sup>Required</sup> <a name="notifyConfigurationId" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps.property.notifyConfigurationId"></a>

```typescript
public readonly notifyConfigurationId: string;
```

- *Type:* string

The NotifyConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoiceOptOutListArnComponents <a name="SMSVoiceOptOutListArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnComponents"></a>

Parsed components of a OptOutList ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceOptOutListArnComponents: sms_voice.SMSVoiceOptOutListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnComponents.property.optOutListName">optOutListName</a></code> | <code>string</code> | The OptOutListName component. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnComponents.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

The OptOutListName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SMSVoiceOptOutListArnProps <a name="SMSVoiceOptOutListArnProps" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps"></a>

Properties for building a OptOutList ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceOptOutListArnProps: sms_voice.SMSVoiceOptOutListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps.property.optOutListName">optOutListName</a></code> | <code>string</code> | The OptOutListName component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

The OptOutListName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoicePhoneNumberArnComponents <a name="SMSVoicePhoneNumberArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnComponents"></a>

Parsed components of a PhoneNumber ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoicePhoneNumberArnComponents: sms_voice.SMSVoicePhoneNumberArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnComponents.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | The PhoneNumberId component. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnComponents.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

The PhoneNumberId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SMSVoicePhoneNumberArnProps <a name="SMSVoicePhoneNumberArnProps" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps"></a>

Properties for building a PhoneNumber ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoicePhoneNumberArnProps: sms_voice.SMSVoicePhoneNumberArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | The PhoneNumberId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

The PhoneNumberId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoicePoolArnComponents <a name="SMSVoicePoolArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnComponents"></a>

Parsed components of a Pool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoicePoolArnComponents: sms_voice.SMSVoicePoolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePoolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePoolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePoolArnComponents.property.poolId">poolId</a></code> | <code>string</code> | The PoolId component. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePoolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnComponents.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

The PoolId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SMSVoicePoolArnProps <a name="SMSVoicePoolArnProps" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps"></a>

Properties for building a Pool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoicePoolArnProps: sms_voice.SMSVoicePoolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps.property.poolId">poolId</a></code> | <code>string</code> | The PoolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

The PoolId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoiceProtectConfigurationArnComponents <a name="SMSVoiceProtectConfigurationArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnComponents"></a>

Parsed components of a ProtectConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceProtectConfigurationArnComponents: sms_voice.SMSVoiceProtectConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnComponents.property.protectConfigurationId">protectConfigurationId</a></code> | <code>string</code> | The ProtectConfigurationId component. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `protectConfigurationId`<sup>Required</sup> <a name="protectConfigurationId" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnComponents.property.protectConfigurationId"></a>

```typescript
public readonly protectConfigurationId: string;
```

- *Type:* string

The ProtectConfigurationId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SMSVoiceProtectConfigurationArnProps <a name="SMSVoiceProtectConfigurationArnProps" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps"></a>

Properties for building a ProtectConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceProtectConfigurationArnProps: sms_voice.SMSVoiceProtectConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps.property.protectConfigurationId">protectConfigurationId</a></code> | <code>string</code> | The ProtectConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `protectConfigurationId`<sup>Required</sup> <a name="protectConfigurationId" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps.property.protectConfigurationId"></a>

```typescript
public readonly protectConfigurationId: string;
```

- *Type:* string

The ProtectConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoiceRcsAgentArnComponents <a name="SMSVoiceRcsAgentArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnComponents"></a>

Parsed components of a RcsAgent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceRcsAgentArnComponents: sms_voice.SMSVoiceRcsAgentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnComponents.property.rcsAgentId">rcsAgentId</a></code> | <code>string</code> | The RcsAgentId component. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `rcsAgentId`<sup>Required</sup> <a name="rcsAgentId" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnComponents.property.rcsAgentId"></a>

```typescript
public readonly rcsAgentId: string;
```

- *Type:* string

The RcsAgentId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SMSVoiceRcsAgentArnProps <a name="SMSVoiceRcsAgentArnProps" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps"></a>

Properties for building a RcsAgent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceRcsAgentArnProps: sms_voice.SMSVoiceRcsAgentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps.property.rcsAgentId">rcsAgentId</a></code> | <code>string</code> | The RcsAgentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `rcsAgentId`<sup>Required</sup> <a name="rcsAgentId" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps.property.rcsAgentId"></a>

```typescript
public readonly rcsAgentId: string;
```

- *Type:* string

The RcsAgentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoiceRegistrationArnComponents <a name="SMSVoiceRegistrationArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnComponents"></a>

Parsed components of a Registration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceRegistrationArnComponents: sms_voice.SMSVoiceRegistrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnComponents.property.registrationId">registrationId</a></code> | <code>string</code> | The RegistrationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `registrationId`<sup>Required</sup> <a name="registrationId" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnComponents.property.registrationId"></a>

```typescript
public readonly registrationId: string;
```

- *Type:* string

The RegistrationId component.

---

### SMSVoiceRegistrationArnProps <a name="SMSVoiceRegistrationArnProps" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps"></a>

Properties for building a Registration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceRegistrationArnProps: sms_voice.SMSVoiceRegistrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps.property.registrationId">registrationId</a></code> | <code>string</code> | The RegistrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `registrationId`<sup>Required</sup> <a name="registrationId" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps.property.registrationId"></a>

```typescript
public readonly registrationId: string;
```

- *Type:* string

The RegistrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoiceRegistrationAttachmentArnComponents <a name="SMSVoiceRegistrationAttachmentArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnComponents"></a>

Parsed components of a RegistrationAttachment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceRegistrationAttachmentArnComponents: sms_voice.SMSVoiceRegistrationAttachmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnComponents.property.registrationAttachmentId">registrationAttachmentId</a></code> | <code>string</code> | The RegistrationAttachmentId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `registrationAttachmentId`<sup>Required</sup> <a name="registrationAttachmentId" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnComponents.property.registrationAttachmentId"></a>

```typescript
public readonly registrationAttachmentId: string;
```

- *Type:* string

The RegistrationAttachmentId component.

---

### SMSVoiceRegistrationAttachmentArnProps <a name="SMSVoiceRegistrationAttachmentArnProps" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps"></a>

Properties for building a RegistrationAttachment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceRegistrationAttachmentArnProps: sms_voice.SMSVoiceRegistrationAttachmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps.property.registrationAttachmentId">registrationAttachmentId</a></code> | <code>string</code> | The RegistrationAttachmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `registrationAttachmentId`<sup>Required</sup> <a name="registrationAttachmentId" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps.property.registrationAttachmentId"></a>

```typescript
public readonly registrationAttachmentId: string;
```

- *Type:* string

The RegistrationAttachmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoiceSenderIdArnComponents <a name="SMSVoiceSenderIdArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents"></a>

Parsed components of a SenderId ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceSenderIdArnComponents: sms_voice.SMSVoiceSenderIdArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.property.isoCountryCode">isoCountryCode</a></code> | <code>string</code> | The IsoCountryCode component. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.property.senderId">senderId</a></code> | <code>string</code> | The SenderId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.property.isoCountryCode"></a>

```typescript
public readonly isoCountryCode: string;
```

- *Type:* string

The IsoCountryCode component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `senderId`<sup>Required</sup> <a name="senderId" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnComponents.property.senderId"></a>

```typescript
public readonly senderId: string;
```

- *Type:* string

The SenderId component.

---

### SMSVoiceSenderIdArnProps <a name="SMSVoiceSenderIdArnProps" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps"></a>

Properties for building a SenderId ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceSenderIdArnProps: sms_voice.SMSVoiceSenderIdArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.property.isoCountryCode">isoCountryCode</a></code> | <code>string</code> | The IsoCountryCode component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.property.senderId">senderId</a></code> | <code>string</code> | The SenderId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.property.isoCountryCode"></a>

```typescript
public readonly isoCountryCode: string;
```

- *Type:* string

The IsoCountryCode component of the ARN.

---

##### `senderId`<sup>Required</sup> <a name="senderId" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.property.senderId"></a>

```typescript
public readonly senderId: string;
```

- *Type:* string

The SenderId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SMSVoiceVerifiedDestinationNumberArnComponents <a name="SMSVoiceVerifiedDestinationNumberArnComponents" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents"></a>

Parsed components of a VerifiedDestinationNumber ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceVerifiedDestinationNumberArnComponents: sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents.property.verifiedDestinationNumberId">verifiedDestinationNumberId</a></code> | <code>string</code> | The VerifiedDestinationNumberId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `verifiedDestinationNumberId`<sup>Required</sup> <a name="verifiedDestinationNumberId" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnComponents.property.verifiedDestinationNumberId"></a>

```typescript
public readonly verifiedDestinationNumberId: string;
```

- *Type:* string

The VerifiedDestinationNumberId component.

---

### SMSVoiceVerifiedDestinationNumberArnProps <a name="SMSVoiceVerifiedDestinationNumberArnProps" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps"></a>

Properties for building a VerifiedDestinationNumber ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

const sMSVoiceVerifiedDestinationNumberArnProps: sms_voice.SMSVoiceVerifiedDestinationNumberArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps.property.verifiedDestinationNumberId">verifiedDestinationNumberId</a></code> | <code>string</code> | The VerifiedDestinationNumberId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `verifiedDestinationNumberId`<sup>Required</sup> <a name="verifiedDestinationNumberId" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps.property.verifiedDestinationNumberId"></a>

```typescript
public readonly verifiedDestinationNumberId: string;
```

- *Type:* string

The VerifiedDestinationNumberId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SMSVoiceActions <a name="SMSVoiceActions" id="@cdk_utils/iam.sms_voice.SMSVoiceActions"></a>

IAM action constants for the sms-voice service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

new sms_voice.SMSVoiceActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionGetConfigurationSetEventDestinations">actionGetConfigurationSetEventDestinations</a></code> | <code>string</code> | [Read] sms-voice:GetConfigurationSetEventDestinations. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionGetProtectConfigurationCountryRuleSet">actionGetProtectConfigurationCountryRuleSet</a></code> | <code>string</code> | [Read] sms-voice:GetProtectConfigurationCountryRuleSet. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] sms-voice:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetAccountDefaultProtectConfiguration">actionSetAccountDefaultProtectConfiguration</a></code> | <code>string</code> | [Write] sms-voice:SetAccountDefaultProtectConfiguration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetDefaultMessageFeedbackEnabled">actionSetDefaultMessageFeedbackEnabled</a></code> | <code>string</code> | [Write] sms-voice:SetDefaultMessageFeedbackEnabled. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetDefaultMessageType">actionSetDefaultMessageType</a></code> | <code>string</code> | [Write] sms-voice:SetDefaultMessageType. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetDefaultSenderId">actionSetDefaultSenderId</a></code> | <code>string</code> | [Write] sms-voice:SetDefaultSenderId. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetMediaMessageSpendLimitOverride">actionSetMediaMessageSpendLimitOverride</a></code> | <code>string</code> | [Write] sms-voice:SetMediaMessageSpendLimitOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetNotifyMessageSpendLimitOverride">actionSetNotifyMessageSpendLimitOverride</a></code> | <code>string</code> | [Write] sms-voice:SetNotifyMessageSpendLimitOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetRcsMessageSpendLimitOverride">actionSetRcsMessageSpendLimitOverride</a></code> | <code>string</code> | [Write] sms-voice:SetRcsMessageSpendLimitOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetTextMessageSpendLimitOverride">actionSetTextMessageSpendLimitOverride</a></code> | <code>string</code> | [Write] sms-voice:SetTextMessageSpendLimitOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetVoiceMessageSpendLimitOverride">actionSetVoiceMessageSpendLimitOverride</a></code> | <code>string</code> | [Write] sms-voice:SetVoiceMessageSpendLimitOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AssociateOriginationIdentity">AssociateOriginationIdentity</a></code> | <code>string</code> | [Write] sms-voice:AssociateOriginationIdentity. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AssociateProtectConfiguration">AssociateProtectConfiguration</a></code> | <code>string</code> | [Write] sms-voice:AssociateProtectConfiguration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CarrierLookup">CarrierLookup</a></code> | <code>string</code> | [Read] sms-voice:CarrierLookup. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateConfigurationSet">CreateConfigurationSet</a></code> | <code>string</code> | [Write] sms-voice:CreateConfigurationSet. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateConfigurationSetEventDestination">CreateConfigurationSetEventDestination</a></code> | <code>string</code> | [Write] sms-voice:CreateConfigurationSetEventDestination. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateEventDestination">CreateEventDestination</a></code> | <code>string</code> | [Write] sms-voice:CreateEventDestination. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateNotifyConfiguration">CreateNotifyConfiguration</a></code> | <code>string</code> | [Write] sms-voice:CreateNotifyConfiguration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateOptOutList">CreateOptOutList</a></code> | <code>string</code> | [Write] sms-voice:CreateOptOutList. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreatePool">CreatePool</a></code> | <code>string</code> | [Write] sms-voice:CreatePool. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateProtectConfiguration">CreateProtectConfiguration</a></code> | <code>string</code> | [Write] sms-voice:CreateProtectConfiguration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateRcsAgent">CreateRcsAgent</a></code> | <code>string</code> | [Write] sms-voice:CreateRcsAgent. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateRegistration">CreateRegistration</a></code> | <code>string</code> | [Write] sms-voice:CreateRegistration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateRegistrationAssociation">CreateRegistrationAssociation</a></code> | <code>string</code> | [Write] sms-voice:CreateRegistrationAssociation. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateRegistrationAttachment">CreateRegistrationAttachment</a></code> | <code>string</code> | [Write] sms-voice:CreateRegistrationAttachment. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateRegistrationVersion">CreateRegistrationVersion</a></code> | <code>string</code> | [Write] sms-voice:CreateRegistrationVersion. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateVerifiedDestinationNumber">CreateVerifiedDestinationNumber</a></code> | <code>string</code> | [Write] sms-voice:CreateVerifiedDestinationNumber. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteAccountDefaultProtectConfiguration">DeleteAccountDefaultProtectConfiguration</a></code> | <code>string</code> | [Write] sms-voice:DeleteAccountDefaultProtectConfiguration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteConfigurationSet">DeleteConfigurationSet</a></code> | <code>string</code> | [Write] sms-voice:DeleteConfigurationSet. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteConfigurationSetEventDestination">DeleteConfigurationSetEventDestination</a></code> | <code>string</code> | [Write] sms-voice:DeleteConfigurationSetEventDestination. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteDefaultMessageType">DeleteDefaultMessageType</a></code> | <code>string</code> | [Write] sms-voice:DeleteDefaultMessageType. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteDefaultSenderId">DeleteDefaultSenderId</a></code> | <code>string</code> | [Write] sms-voice:DeleteDefaultSenderId. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteEventDestination">DeleteEventDestination</a></code> | <code>string</code> | [Write] sms-voice:DeleteEventDestination. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteKeyword">DeleteKeyword</a></code> | <code>string</code> | [Write] sms-voice:DeleteKeyword. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteMediaMessageSpendLimitOverride">DeleteMediaMessageSpendLimitOverride</a></code> | <code>string</code> | [Write] sms-voice:DeleteMediaMessageSpendLimitOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteNotifyConfiguration">DeleteNotifyConfiguration</a></code> | <code>string</code> | [Write] sms-voice:DeleteNotifyConfiguration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteNotifyMessageSpendLimitOverride">DeleteNotifyMessageSpendLimitOverride</a></code> | <code>string</code> | [Write] sms-voice:DeleteNotifyMessageSpendLimitOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteOptedOutNumber">DeleteOptedOutNumber</a></code> | <code>string</code> | [Write] sms-voice:DeleteOptedOutNumber. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteOptOutList">DeleteOptOutList</a></code> | <code>string</code> | [Write] sms-voice:DeleteOptOutList. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeletePool">DeletePool</a></code> | <code>string</code> | [Write] sms-voice:DeletePool. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteProtectConfiguration">DeleteProtectConfiguration</a></code> | <code>string</code> | [Write] sms-voice:DeleteProtectConfiguration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteProtectConfigurationRuleSetNumberOverride">DeleteProtectConfigurationRuleSetNumberOverride</a></code> | <code>string</code> | [Write] sms-voice:DeleteProtectConfigurationRuleSetNumberOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteRcsAgent">DeleteRcsAgent</a></code> | <code>string</code> | [Write] sms-voice:DeleteRcsAgent. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteRcsMessageSpendLimitOverride">DeleteRcsMessageSpendLimitOverride</a></code> | <code>string</code> | [Write] sms-voice:DeleteRcsMessageSpendLimitOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteRegistration">DeleteRegistration</a></code> | <code>string</code> | [Write] sms-voice:DeleteRegistration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteRegistrationAttachment">DeleteRegistrationAttachment</a></code> | <code>string</code> | [Write] sms-voice:DeleteRegistrationAttachment. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteRegistrationFieldValue">DeleteRegistrationFieldValue</a></code> | <code>string</code> | [Write] sms-voice:DeleteRegistrationFieldValue. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] sms-voice:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteTextMessageSpendLimitOverride">DeleteTextMessageSpendLimitOverride</a></code> | <code>string</code> | [Write] sms-voice:DeleteTextMessageSpendLimitOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteVerifiedDestinationNumber">DeleteVerifiedDestinationNumber</a></code> | <code>string</code> | [Write] sms-voice:DeleteVerifiedDestinationNumber. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteVoiceMessageSpendLimitOverride">DeleteVoiceMessageSpendLimitOverride</a></code> | <code>string</code> | [Write] sms-voice:DeleteVoiceMessageSpendLimitOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string</code> | [Read] sms-voice:DescribeAccountAttributes. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeAccountLimits">DescribeAccountLimits</a></code> | <code>string</code> | [Read] sms-voice:DescribeAccountLimits. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeConfigurationSets">DescribeConfigurationSets</a></code> | <code>string</code> | [Read] sms-voice:DescribeConfigurationSets. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeKeywords">DescribeKeywords</a></code> | <code>string</code> | [Read] sms-voice:DescribeKeywords. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeNotifyConfigurations">DescribeNotifyConfigurations</a></code> | <code>string</code> | [Read] sms-voice:DescribeNotifyConfigurations. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeNotifyTemplates">DescribeNotifyTemplates</a></code> | <code>string</code> | [Read] sms-voice:DescribeNotifyTemplates. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeOptedOutNumbers">DescribeOptedOutNumbers</a></code> | <code>string</code> | [Read] sms-voice:DescribeOptedOutNumbers. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeOptOutLists">DescribeOptOutLists</a></code> | <code>string</code> | [Read] sms-voice:DescribeOptOutLists. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribePhoneNumbers">DescribePhoneNumbers</a></code> | <code>string</code> | [Read] sms-voice:DescribePhoneNumbers. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribePools">DescribePools</a></code> | <code>string</code> | [Read] sms-voice:DescribePools. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeProtectConfigurations">DescribeProtectConfigurations</a></code> | <code>string</code> | [Read] sms-voice:DescribeProtectConfigurations. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRcsAgentCountryLaunchStatus">DescribeRcsAgentCountryLaunchStatus</a></code> | <code>string</code> | [Read] sms-voice:DescribeRcsAgentCountryLaunchStatus. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRcsAgents">DescribeRcsAgents</a></code> | <code>string</code> | [Read] sms-voice:DescribeRcsAgents. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationAttachments">DescribeRegistrationAttachments</a></code> | <code>string</code> | [Read] sms-voice:DescribeRegistrationAttachments. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationFieldDefinitions">DescribeRegistrationFieldDefinitions</a></code> | <code>string</code> | [Read] sms-voice:DescribeRegistrationFieldDefinitions. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationFieldValues">DescribeRegistrationFieldValues</a></code> | <code>string</code> | [Read] sms-voice:DescribeRegistrationFieldValues. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrations">DescribeRegistrations</a></code> | <code>string</code> | [Read] sms-voice:DescribeRegistrations. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationSectionDefinitions">DescribeRegistrationSectionDefinitions</a></code> | <code>string</code> | [Read] sms-voice:DescribeRegistrationSectionDefinitions. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationTypeDefinitions">DescribeRegistrationTypeDefinitions</a></code> | <code>string</code> | [Read] sms-voice:DescribeRegistrationTypeDefinitions. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationVersions">DescribeRegistrationVersions</a></code> | <code>string</code> | [Read] sms-voice:DescribeRegistrationVersions. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeSenderIds">DescribeSenderIds</a></code> | <code>string</code> | [Read] sms-voice:DescribeSenderIds. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeSpendLimits">DescribeSpendLimits</a></code> | <code>string</code> | [Read] sms-voice:DescribeSpendLimits. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeVerifiedDestinationNumbers">DescribeVerifiedDestinationNumbers</a></code> | <code>string</code> | [Read] sms-voice:DescribeVerifiedDestinationNumbers. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DisassociateOriginationIdentity">DisassociateOriginationIdentity</a></code> | <code>string</code> | [Write] sms-voice:DisassociateOriginationIdentity. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DisassociateProtectConfiguration">DisassociateProtectConfiguration</a></code> | <code>string</code> | [Write] sms-voice:DisassociateProtectConfiguration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DiscardRegistrationVersion">DiscardRegistrationVersion</a></code> | <code>string</code> | [Write] sms-voice:DiscardRegistrationVersion. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListConfigurationSets">ListConfigurationSets</a></code> | <code>string</code> | [Read] sms-voice:ListConfigurationSets. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListNotifyCountries">ListNotifyCountries</a></code> | <code>string</code> | [Read] sms-voice:ListNotifyCountries. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListPoolOriginationIdentities">ListPoolOriginationIdentities</a></code> | <code>string</code> | [Read] sms-voice:ListPoolOriginationIdentities. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListProtectConfigurationRuleSetNumberOverrides">ListProtectConfigurationRuleSetNumberOverrides</a></code> | <code>string</code> | [Read] sms-voice:ListProtectConfigurationRuleSetNumberOverrides. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListRegistrationAssociations">ListRegistrationAssociations</a></code> | <code>string</code> | [Read] sms-voice:ListRegistrationAssociations. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] sms-voice:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutKeyword">PutKeyword</a></code> | <code>string</code> | [Write] sms-voice:PutKeyword. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutMessageFeedback">PutMessageFeedback</a></code> | <code>string</code> | [Write] sms-voice:PutMessageFeedback. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutOptedOutNumber">PutOptedOutNumber</a></code> | <code>string</code> | [Write] sms-voice:PutOptedOutNumber. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutProtectConfigurationRuleSetNumberOverride">PutProtectConfigurationRuleSetNumberOverride</a></code> | <code>string</code> | [Write] sms-voice:PutProtectConfigurationRuleSetNumberOverride. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutRegistrationFieldValue">PutRegistrationFieldValue</a></code> | <code>string</code> | [Write] sms-voice:PutRegistrationFieldValue. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] sms-voice:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ReleasePhoneNumber">ReleasePhoneNumber</a></code> | <code>string</code> | [Write] sms-voice:ReleasePhoneNumber. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ReleaseSenderId">ReleaseSenderId</a></code> | <code>string</code> | [Write] sms-voice:ReleaseSenderId. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.RequestPhoneNumber">RequestPhoneNumber</a></code> | <code>string</code> | [Write] sms-voice:RequestPhoneNumber. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.RequestSenderId">RequestSenderId</a></code> | <code>string</code> | [Write] sms-voice:RequestSenderId. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendDestinationNumberVerificationCode">SendDestinationNumberVerificationCode</a></code> | <code>string</code> | [Write] sms-voice:SendDestinationNumberVerificationCode. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendMediaMessage">SendMediaMessage</a></code> | <code>string</code> | [Write] sms-voice:SendMediaMessage. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendNotifyTextMessage">SendNotifyTextMessage</a></code> | <code>string</code> | [Write] sms-voice:SendNotifyTextMessage. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendNotifyVoiceMessage">SendNotifyVoiceMessage</a></code> | <code>string</code> | [Write] sms-voice:SendNotifyVoiceMessage. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendRcsMessage">SendRcsMessage</a></code> | <code>string</code> | [Write] sms-voice:SendRcsMessage. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendTextMessage">SendTextMessage</a></code> | <code>string</code> | [Write] sms-voice:SendTextMessage. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendVoiceMessage">SendVoiceMessage</a></code> | <code>string</code> | [Write] sms-voice:SendVoiceMessage. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SubmitRegistrationVersion">SubmitRegistrationVersion</a></code> | <code>string</code> | [Write] sms-voice:SubmitRegistrationVersion. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] sms-voice:TagResource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] sms-voice:UntagResource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateConfigurationSetEventDestination">UpdateConfigurationSetEventDestination</a></code> | <code>string</code> | [Write] sms-voice:UpdateConfigurationSetEventDestination. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateEventDestination">UpdateEventDestination</a></code> | <code>string</code> | [Write] sms-voice:UpdateEventDestination. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateNotifyConfiguration">UpdateNotifyConfiguration</a></code> | <code>string</code> | [Write] sms-voice:UpdateNotifyConfiguration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdatePhoneNumber">UpdatePhoneNumber</a></code> | <code>string</code> | [Write] sms-voice:UpdatePhoneNumber. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdatePool">UpdatePool</a></code> | <code>string</code> | [Write] sms-voice:UpdatePool. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateProtectConfiguration">UpdateProtectConfiguration</a></code> | <code>string</code> | [Write] sms-voice:UpdateProtectConfiguration. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateProtectConfigurationCountryRuleSet">UpdateProtectConfigurationCountryRuleSet</a></code> | <code>string</code> | [Write] sms-voice:UpdateProtectConfigurationCountryRuleSet. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateRcsAgent">UpdateRcsAgent</a></code> | <code>string</code> | [Write] sms-voice:UpdateRcsAgent. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateSenderId">UpdateSenderId</a></code> | <code>string</code> | [Write] sms-voice:UpdateSenderId. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceActions.property.VerifyDestinationNumber">VerifyDestinationNumber</a></code> | <code>string</code> | [Write] sms-voice:VerifyDestinationNumber. |

---

##### `actionGetConfigurationSetEventDestinations`<sup>Required</sup> <a name="actionGetConfigurationSetEventDestinations" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionGetConfigurationSetEventDestinations"></a>

```typescript
public readonly actionGetConfigurationSetEventDestinations: string;
```

- *Type:* string

[Read] sms-voice:GetConfigurationSetEventDestinations.

---

##### `actionGetProtectConfigurationCountryRuleSet`<sup>Required</sup> <a name="actionGetProtectConfigurationCountryRuleSet" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionGetProtectConfigurationCountryRuleSet"></a>

```typescript
public readonly actionGetProtectConfigurationCountryRuleSet: string;
```

- *Type:* string

[Read] sms-voice:GetProtectConfigurationCountryRuleSet.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] sms-voice:GetResourcePolicy.

---

##### `actionSetAccountDefaultProtectConfiguration`<sup>Required</sup> <a name="actionSetAccountDefaultProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetAccountDefaultProtectConfiguration"></a>

```typescript
public readonly actionSetAccountDefaultProtectConfiguration: string;
```

- *Type:* string

[Write] sms-voice:SetAccountDefaultProtectConfiguration.

---

##### `actionSetDefaultMessageFeedbackEnabled`<sup>Required</sup> <a name="actionSetDefaultMessageFeedbackEnabled" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetDefaultMessageFeedbackEnabled"></a>

```typescript
public readonly actionSetDefaultMessageFeedbackEnabled: string;
```

- *Type:* string

[Write] sms-voice:SetDefaultMessageFeedbackEnabled.

---

##### `actionSetDefaultMessageType`<sup>Required</sup> <a name="actionSetDefaultMessageType" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetDefaultMessageType"></a>

```typescript
public readonly actionSetDefaultMessageType: string;
```

- *Type:* string

[Write] sms-voice:SetDefaultMessageType.

---

##### `actionSetDefaultSenderId`<sup>Required</sup> <a name="actionSetDefaultSenderId" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetDefaultSenderId"></a>

```typescript
public readonly actionSetDefaultSenderId: string;
```

- *Type:* string

[Write] sms-voice:SetDefaultSenderId.

---

##### `actionSetMediaMessageSpendLimitOverride`<sup>Required</sup> <a name="actionSetMediaMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetMediaMessageSpendLimitOverride"></a>

```typescript
public readonly actionSetMediaMessageSpendLimitOverride: string;
```

- *Type:* string

[Write] sms-voice:SetMediaMessageSpendLimitOverride.

---

##### `actionSetNotifyMessageSpendLimitOverride`<sup>Required</sup> <a name="actionSetNotifyMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetNotifyMessageSpendLimitOverride"></a>

```typescript
public readonly actionSetNotifyMessageSpendLimitOverride: string;
```

- *Type:* string

[Write] sms-voice:SetNotifyMessageSpendLimitOverride.

---

##### `actionSetRcsMessageSpendLimitOverride`<sup>Required</sup> <a name="actionSetRcsMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetRcsMessageSpendLimitOverride"></a>

```typescript
public readonly actionSetRcsMessageSpendLimitOverride: string;
```

- *Type:* string

[Write] sms-voice:SetRcsMessageSpendLimitOverride.

---

##### `actionSetTextMessageSpendLimitOverride`<sup>Required</sup> <a name="actionSetTextMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetTextMessageSpendLimitOverride"></a>

```typescript
public readonly actionSetTextMessageSpendLimitOverride: string;
```

- *Type:* string

[Write] sms-voice:SetTextMessageSpendLimitOverride.

---

##### `actionSetVoiceMessageSpendLimitOverride`<sup>Required</sup> <a name="actionSetVoiceMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.actionSetVoiceMessageSpendLimitOverride"></a>

```typescript
public readonly actionSetVoiceMessageSpendLimitOverride: string;
```

- *Type:* string

[Write] sms-voice:SetVoiceMessageSpendLimitOverride.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateOriginationIdentity`<sup>Required</sup> <a name="AssociateOriginationIdentity" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AssociateOriginationIdentity"></a>

```typescript
public readonly AssociateOriginationIdentity: string;
```

- *Type:* string

[Write] sms-voice:AssociateOriginationIdentity.

---

##### `AssociateProtectConfiguration`<sup>Required</sup> <a name="AssociateProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.AssociateProtectConfiguration"></a>

```typescript
public readonly AssociateProtectConfiguration: string;
```

- *Type:* string

[Write] sms-voice:AssociateProtectConfiguration.

---

##### `CarrierLookup`<sup>Required</sup> <a name="CarrierLookup" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CarrierLookup"></a>

```typescript
public readonly CarrierLookup: string;
```

- *Type:* string

[Read] sms-voice:CarrierLookup.

---

##### `CreateConfigurationSet`<sup>Required</sup> <a name="CreateConfigurationSet" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateConfigurationSet"></a>

```typescript
public readonly CreateConfigurationSet: string;
```

- *Type:* string

[Write] sms-voice:CreateConfigurationSet.

---

##### `CreateConfigurationSetEventDestination`<sup>Required</sup> <a name="CreateConfigurationSetEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateConfigurationSetEventDestination"></a>

```typescript
public readonly CreateConfigurationSetEventDestination: string;
```

- *Type:* string

[Write] sms-voice:CreateConfigurationSetEventDestination.

---

##### `CreateEventDestination`<sup>Required</sup> <a name="CreateEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateEventDestination"></a>

```typescript
public readonly CreateEventDestination: string;
```

- *Type:* string

[Write] sms-voice:CreateEventDestination.

---

##### `CreateNotifyConfiguration`<sup>Required</sup> <a name="CreateNotifyConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateNotifyConfiguration"></a>

```typescript
public readonly CreateNotifyConfiguration: string;
```

- *Type:* string

[Write] sms-voice:CreateNotifyConfiguration.

---

##### `CreateOptOutList`<sup>Required</sup> <a name="CreateOptOutList" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateOptOutList"></a>

```typescript
public readonly CreateOptOutList: string;
```

- *Type:* string

[Write] sms-voice:CreateOptOutList.

---

##### `CreatePool`<sup>Required</sup> <a name="CreatePool" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreatePool"></a>

```typescript
public readonly CreatePool: string;
```

- *Type:* string

[Write] sms-voice:CreatePool.

---

##### `CreateProtectConfiguration`<sup>Required</sup> <a name="CreateProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateProtectConfiguration"></a>

```typescript
public readonly CreateProtectConfiguration: string;
```

- *Type:* string

[Write] sms-voice:CreateProtectConfiguration.

---

##### `CreateRcsAgent`<sup>Required</sup> <a name="CreateRcsAgent" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateRcsAgent"></a>

```typescript
public readonly CreateRcsAgent: string;
```

- *Type:* string

[Write] sms-voice:CreateRcsAgent.

---

##### `CreateRegistration`<sup>Required</sup> <a name="CreateRegistration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateRegistration"></a>

```typescript
public readonly CreateRegistration: string;
```

- *Type:* string

[Write] sms-voice:CreateRegistration.

---

##### `CreateRegistrationAssociation`<sup>Required</sup> <a name="CreateRegistrationAssociation" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateRegistrationAssociation"></a>

```typescript
public readonly CreateRegistrationAssociation: string;
```

- *Type:* string

[Write] sms-voice:CreateRegistrationAssociation.

---

##### `CreateRegistrationAttachment`<sup>Required</sup> <a name="CreateRegistrationAttachment" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateRegistrationAttachment"></a>

```typescript
public readonly CreateRegistrationAttachment: string;
```

- *Type:* string

[Write] sms-voice:CreateRegistrationAttachment.

---

##### `CreateRegistrationVersion`<sup>Required</sup> <a name="CreateRegistrationVersion" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateRegistrationVersion"></a>

```typescript
public readonly CreateRegistrationVersion: string;
```

- *Type:* string

[Write] sms-voice:CreateRegistrationVersion.

---

##### `CreateVerifiedDestinationNumber`<sup>Required</sup> <a name="CreateVerifiedDestinationNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.CreateVerifiedDestinationNumber"></a>

```typescript
public readonly CreateVerifiedDestinationNumber: string;
```

- *Type:* string

[Write] sms-voice:CreateVerifiedDestinationNumber.

---

##### `DeleteAccountDefaultProtectConfiguration`<sup>Required</sup> <a name="DeleteAccountDefaultProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteAccountDefaultProtectConfiguration"></a>

```typescript
public readonly DeleteAccountDefaultProtectConfiguration: string;
```

- *Type:* string

[Write] sms-voice:DeleteAccountDefaultProtectConfiguration.

---

##### `DeleteConfigurationSet`<sup>Required</sup> <a name="DeleteConfigurationSet" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteConfigurationSet"></a>

```typescript
public readonly DeleteConfigurationSet: string;
```

- *Type:* string

[Write] sms-voice:DeleteConfigurationSet.

---

##### `DeleteConfigurationSetEventDestination`<sup>Required</sup> <a name="DeleteConfigurationSetEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteConfigurationSetEventDestination"></a>

```typescript
public readonly DeleteConfigurationSetEventDestination: string;
```

- *Type:* string

[Write] sms-voice:DeleteConfigurationSetEventDestination.

---

##### `DeleteDefaultMessageType`<sup>Required</sup> <a name="DeleteDefaultMessageType" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteDefaultMessageType"></a>

```typescript
public readonly DeleteDefaultMessageType: string;
```

- *Type:* string

[Write] sms-voice:DeleteDefaultMessageType.

---

##### `DeleteDefaultSenderId`<sup>Required</sup> <a name="DeleteDefaultSenderId" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteDefaultSenderId"></a>

```typescript
public readonly DeleteDefaultSenderId: string;
```

- *Type:* string

[Write] sms-voice:DeleteDefaultSenderId.

---

##### `DeleteEventDestination`<sup>Required</sup> <a name="DeleteEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteEventDestination"></a>

```typescript
public readonly DeleteEventDestination: string;
```

- *Type:* string

[Write] sms-voice:DeleteEventDestination.

---

##### `DeleteKeyword`<sup>Required</sup> <a name="DeleteKeyword" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteKeyword"></a>

```typescript
public readonly DeleteKeyword: string;
```

- *Type:* string

[Write] sms-voice:DeleteKeyword.

---

##### `DeleteMediaMessageSpendLimitOverride`<sup>Required</sup> <a name="DeleteMediaMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteMediaMessageSpendLimitOverride"></a>

```typescript
public readonly DeleteMediaMessageSpendLimitOverride: string;
```

- *Type:* string

[Write] sms-voice:DeleteMediaMessageSpendLimitOverride.

---

##### `DeleteNotifyConfiguration`<sup>Required</sup> <a name="DeleteNotifyConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteNotifyConfiguration"></a>

```typescript
public readonly DeleteNotifyConfiguration: string;
```

- *Type:* string

[Write] sms-voice:DeleteNotifyConfiguration.

---

##### `DeleteNotifyMessageSpendLimitOverride`<sup>Required</sup> <a name="DeleteNotifyMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteNotifyMessageSpendLimitOverride"></a>

```typescript
public readonly DeleteNotifyMessageSpendLimitOverride: string;
```

- *Type:* string

[Write] sms-voice:DeleteNotifyMessageSpendLimitOverride.

---

##### `DeleteOptedOutNumber`<sup>Required</sup> <a name="DeleteOptedOutNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteOptedOutNumber"></a>

```typescript
public readonly DeleteOptedOutNumber: string;
```

- *Type:* string

[Write] sms-voice:DeleteOptedOutNumber.

---

##### `DeleteOptOutList`<sup>Required</sup> <a name="DeleteOptOutList" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteOptOutList"></a>

```typescript
public readonly DeleteOptOutList: string;
```

- *Type:* string

[Write] sms-voice:DeleteOptOutList.

---

##### `DeletePool`<sup>Required</sup> <a name="DeletePool" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeletePool"></a>

```typescript
public readonly DeletePool: string;
```

- *Type:* string

[Write] sms-voice:DeletePool.

---

##### `DeleteProtectConfiguration`<sup>Required</sup> <a name="DeleteProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteProtectConfiguration"></a>

```typescript
public readonly DeleteProtectConfiguration: string;
```

- *Type:* string

[Write] sms-voice:DeleteProtectConfiguration.

---

##### `DeleteProtectConfigurationRuleSetNumberOverride`<sup>Required</sup> <a name="DeleteProtectConfigurationRuleSetNumberOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteProtectConfigurationRuleSetNumberOverride"></a>

```typescript
public readonly DeleteProtectConfigurationRuleSetNumberOverride: string;
```

- *Type:* string

[Write] sms-voice:DeleteProtectConfigurationRuleSetNumberOverride.

---

##### `DeleteRcsAgent`<sup>Required</sup> <a name="DeleteRcsAgent" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteRcsAgent"></a>

```typescript
public readonly DeleteRcsAgent: string;
```

- *Type:* string

[Write] sms-voice:DeleteRcsAgent.

---

##### `DeleteRcsMessageSpendLimitOverride`<sup>Required</sup> <a name="DeleteRcsMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteRcsMessageSpendLimitOverride"></a>

```typescript
public readonly DeleteRcsMessageSpendLimitOverride: string;
```

- *Type:* string

[Write] sms-voice:DeleteRcsMessageSpendLimitOverride.

---

##### `DeleteRegistration`<sup>Required</sup> <a name="DeleteRegistration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteRegistration"></a>

```typescript
public readonly DeleteRegistration: string;
```

- *Type:* string

[Write] sms-voice:DeleteRegistration.

---

##### `DeleteRegistrationAttachment`<sup>Required</sup> <a name="DeleteRegistrationAttachment" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteRegistrationAttachment"></a>

```typescript
public readonly DeleteRegistrationAttachment: string;
```

- *Type:* string

[Write] sms-voice:DeleteRegistrationAttachment.

---

##### `DeleteRegistrationFieldValue`<sup>Required</sup> <a name="DeleteRegistrationFieldValue" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteRegistrationFieldValue"></a>

```typescript
public readonly DeleteRegistrationFieldValue: string;
```

- *Type:* string

[Write] sms-voice:DeleteRegistrationFieldValue.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] sms-voice:DeleteResourcePolicy.

---

##### `DeleteTextMessageSpendLimitOverride`<sup>Required</sup> <a name="DeleteTextMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteTextMessageSpendLimitOverride"></a>

```typescript
public readonly DeleteTextMessageSpendLimitOverride: string;
```

- *Type:* string

[Write] sms-voice:DeleteTextMessageSpendLimitOverride.

---

##### `DeleteVerifiedDestinationNumber`<sup>Required</sup> <a name="DeleteVerifiedDestinationNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteVerifiedDestinationNumber"></a>

```typescript
public readonly DeleteVerifiedDestinationNumber: string;
```

- *Type:* string

[Write] sms-voice:DeleteVerifiedDestinationNumber.

---

##### `DeleteVoiceMessageSpendLimitOverride`<sup>Required</sup> <a name="DeleteVoiceMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DeleteVoiceMessageSpendLimitOverride"></a>

```typescript
public readonly DeleteVoiceMessageSpendLimitOverride: string;
```

- *Type:* string

[Write] sms-voice:DeleteVoiceMessageSpendLimitOverride.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string;
```

- *Type:* string

[Read] sms-voice:DescribeAccountAttributes.

---

##### `DescribeAccountLimits`<sup>Required</sup> <a name="DescribeAccountLimits" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeAccountLimits"></a>

```typescript
public readonly DescribeAccountLimits: string;
```

- *Type:* string

[Read] sms-voice:DescribeAccountLimits.

---

##### `DescribeConfigurationSets`<sup>Required</sup> <a name="DescribeConfigurationSets" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeConfigurationSets"></a>

```typescript
public readonly DescribeConfigurationSets: string;
```

- *Type:* string

[Read] sms-voice:DescribeConfigurationSets.

---

##### `DescribeKeywords`<sup>Required</sup> <a name="DescribeKeywords" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeKeywords"></a>

```typescript
public readonly DescribeKeywords: string;
```

- *Type:* string

[Read] sms-voice:DescribeKeywords.

---

##### `DescribeNotifyConfigurations`<sup>Required</sup> <a name="DescribeNotifyConfigurations" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeNotifyConfigurations"></a>

```typescript
public readonly DescribeNotifyConfigurations: string;
```

- *Type:* string

[Read] sms-voice:DescribeNotifyConfigurations.

---

##### `DescribeNotifyTemplates`<sup>Required</sup> <a name="DescribeNotifyTemplates" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeNotifyTemplates"></a>

```typescript
public readonly DescribeNotifyTemplates: string;
```

- *Type:* string

[Read] sms-voice:DescribeNotifyTemplates.

---

##### `DescribeOptedOutNumbers`<sup>Required</sup> <a name="DescribeOptedOutNumbers" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeOptedOutNumbers"></a>

```typescript
public readonly DescribeOptedOutNumbers: string;
```

- *Type:* string

[Read] sms-voice:DescribeOptedOutNumbers.

---

##### `DescribeOptOutLists`<sup>Required</sup> <a name="DescribeOptOutLists" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeOptOutLists"></a>

```typescript
public readonly DescribeOptOutLists: string;
```

- *Type:* string

[Read] sms-voice:DescribeOptOutLists.

---

##### `DescribePhoneNumbers`<sup>Required</sup> <a name="DescribePhoneNumbers" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribePhoneNumbers"></a>

```typescript
public readonly DescribePhoneNumbers: string;
```

- *Type:* string

[Read] sms-voice:DescribePhoneNumbers.

---

##### `DescribePools`<sup>Required</sup> <a name="DescribePools" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribePools"></a>

```typescript
public readonly DescribePools: string;
```

- *Type:* string

[Read] sms-voice:DescribePools.

---

##### `DescribeProtectConfigurations`<sup>Required</sup> <a name="DescribeProtectConfigurations" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeProtectConfigurations"></a>

```typescript
public readonly DescribeProtectConfigurations: string;
```

- *Type:* string

[Read] sms-voice:DescribeProtectConfigurations.

---

##### `DescribeRcsAgentCountryLaunchStatus`<sup>Required</sup> <a name="DescribeRcsAgentCountryLaunchStatus" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRcsAgentCountryLaunchStatus"></a>

```typescript
public readonly DescribeRcsAgentCountryLaunchStatus: string;
```

- *Type:* string

[Read] sms-voice:DescribeRcsAgentCountryLaunchStatus.

---

##### `DescribeRcsAgents`<sup>Required</sup> <a name="DescribeRcsAgents" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRcsAgents"></a>

```typescript
public readonly DescribeRcsAgents: string;
```

- *Type:* string

[Read] sms-voice:DescribeRcsAgents.

---

##### `DescribeRegistrationAttachments`<sup>Required</sup> <a name="DescribeRegistrationAttachments" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationAttachments"></a>

```typescript
public readonly DescribeRegistrationAttachments: string;
```

- *Type:* string

[Read] sms-voice:DescribeRegistrationAttachments.

---

##### `DescribeRegistrationFieldDefinitions`<sup>Required</sup> <a name="DescribeRegistrationFieldDefinitions" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationFieldDefinitions"></a>

```typescript
public readonly DescribeRegistrationFieldDefinitions: string;
```

- *Type:* string

[Read] sms-voice:DescribeRegistrationFieldDefinitions.

---

##### `DescribeRegistrationFieldValues`<sup>Required</sup> <a name="DescribeRegistrationFieldValues" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationFieldValues"></a>

```typescript
public readonly DescribeRegistrationFieldValues: string;
```

- *Type:* string

[Read] sms-voice:DescribeRegistrationFieldValues.

---

##### `DescribeRegistrations`<sup>Required</sup> <a name="DescribeRegistrations" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrations"></a>

```typescript
public readonly DescribeRegistrations: string;
```

- *Type:* string

[Read] sms-voice:DescribeRegistrations.

---

##### `DescribeRegistrationSectionDefinitions`<sup>Required</sup> <a name="DescribeRegistrationSectionDefinitions" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationSectionDefinitions"></a>

```typescript
public readonly DescribeRegistrationSectionDefinitions: string;
```

- *Type:* string

[Read] sms-voice:DescribeRegistrationSectionDefinitions.

---

##### `DescribeRegistrationTypeDefinitions`<sup>Required</sup> <a name="DescribeRegistrationTypeDefinitions" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationTypeDefinitions"></a>

```typescript
public readonly DescribeRegistrationTypeDefinitions: string;
```

- *Type:* string

[Read] sms-voice:DescribeRegistrationTypeDefinitions.

---

##### `DescribeRegistrationVersions`<sup>Required</sup> <a name="DescribeRegistrationVersions" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeRegistrationVersions"></a>

```typescript
public readonly DescribeRegistrationVersions: string;
```

- *Type:* string

[Read] sms-voice:DescribeRegistrationVersions.

---

##### `DescribeSenderIds`<sup>Required</sup> <a name="DescribeSenderIds" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeSenderIds"></a>

```typescript
public readonly DescribeSenderIds: string;
```

- *Type:* string

[Read] sms-voice:DescribeSenderIds.

---

##### `DescribeSpendLimits`<sup>Required</sup> <a name="DescribeSpendLimits" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeSpendLimits"></a>

```typescript
public readonly DescribeSpendLimits: string;
```

- *Type:* string

[Read] sms-voice:DescribeSpendLimits.

---

##### `DescribeVerifiedDestinationNumbers`<sup>Required</sup> <a name="DescribeVerifiedDestinationNumbers" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DescribeVerifiedDestinationNumbers"></a>

```typescript
public readonly DescribeVerifiedDestinationNumbers: string;
```

- *Type:* string

[Read] sms-voice:DescribeVerifiedDestinationNumbers.

---

##### `DisassociateOriginationIdentity`<sup>Required</sup> <a name="DisassociateOriginationIdentity" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DisassociateOriginationIdentity"></a>

```typescript
public readonly DisassociateOriginationIdentity: string;
```

- *Type:* string

[Write] sms-voice:DisassociateOriginationIdentity.

---

##### `DisassociateProtectConfiguration`<sup>Required</sup> <a name="DisassociateProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DisassociateProtectConfiguration"></a>

```typescript
public readonly DisassociateProtectConfiguration: string;
```

- *Type:* string

[Write] sms-voice:DisassociateProtectConfiguration.

---

##### `DiscardRegistrationVersion`<sup>Required</sup> <a name="DiscardRegistrationVersion" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.DiscardRegistrationVersion"></a>

```typescript
public readonly DiscardRegistrationVersion: string;
```

- *Type:* string

[Write] sms-voice:DiscardRegistrationVersion.

---

##### `ListConfigurationSets`<sup>Required</sup> <a name="ListConfigurationSets" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListConfigurationSets"></a>

```typescript
public readonly ListConfigurationSets: string;
```

- *Type:* string

[Read] sms-voice:ListConfigurationSets.

---

##### `ListNotifyCountries`<sup>Required</sup> <a name="ListNotifyCountries" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListNotifyCountries"></a>

```typescript
public readonly ListNotifyCountries: string;
```

- *Type:* string

[Read] sms-voice:ListNotifyCountries.

---

##### `ListPoolOriginationIdentities`<sup>Required</sup> <a name="ListPoolOriginationIdentities" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListPoolOriginationIdentities"></a>

```typescript
public readonly ListPoolOriginationIdentities: string;
```

- *Type:* string

[Read] sms-voice:ListPoolOriginationIdentities.

---

##### `ListProtectConfigurationRuleSetNumberOverrides`<sup>Required</sup> <a name="ListProtectConfigurationRuleSetNumberOverrides" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListProtectConfigurationRuleSetNumberOverrides"></a>

```typescript
public readonly ListProtectConfigurationRuleSetNumberOverrides: string;
```

- *Type:* string

[Read] sms-voice:ListProtectConfigurationRuleSetNumberOverrides.

---

##### `ListRegistrationAssociations`<sup>Required</sup> <a name="ListRegistrationAssociations" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListRegistrationAssociations"></a>

```typescript
public readonly ListRegistrationAssociations: string;
```

- *Type:* string

[Read] sms-voice:ListRegistrationAssociations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] sms-voice:ListTagsForResource.

---

##### `PutKeyword`<sup>Required</sup> <a name="PutKeyword" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutKeyword"></a>

```typescript
public readonly PutKeyword: string;
```

- *Type:* string

[Write] sms-voice:PutKeyword.

---

##### `PutMessageFeedback`<sup>Required</sup> <a name="PutMessageFeedback" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutMessageFeedback"></a>

```typescript
public readonly PutMessageFeedback: string;
```

- *Type:* string

[Write] sms-voice:PutMessageFeedback.

---

##### `PutOptedOutNumber`<sup>Required</sup> <a name="PutOptedOutNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutOptedOutNumber"></a>

```typescript
public readonly PutOptedOutNumber: string;
```

- *Type:* string

[Write] sms-voice:PutOptedOutNumber.

---

##### `PutProtectConfigurationRuleSetNumberOverride`<sup>Required</sup> <a name="PutProtectConfigurationRuleSetNumberOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutProtectConfigurationRuleSetNumberOverride"></a>

```typescript
public readonly PutProtectConfigurationRuleSetNumberOverride: string;
```

- *Type:* string

[Write] sms-voice:PutProtectConfigurationRuleSetNumberOverride.

---

##### `PutRegistrationFieldValue`<sup>Required</sup> <a name="PutRegistrationFieldValue" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutRegistrationFieldValue"></a>

```typescript
public readonly PutRegistrationFieldValue: string;
```

- *Type:* string

[Write] sms-voice:PutRegistrationFieldValue.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] sms-voice:PutResourcePolicy.

---

##### `ReleasePhoneNumber`<sup>Required</sup> <a name="ReleasePhoneNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ReleasePhoneNumber"></a>

```typescript
public readonly ReleasePhoneNumber: string;
```

- *Type:* string

[Write] sms-voice:ReleasePhoneNumber.

---

##### `ReleaseSenderId`<sup>Required</sup> <a name="ReleaseSenderId" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.ReleaseSenderId"></a>

```typescript
public readonly ReleaseSenderId: string;
```

- *Type:* string

[Write] sms-voice:ReleaseSenderId.

---

##### `RequestPhoneNumber`<sup>Required</sup> <a name="RequestPhoneNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.RequestPhoneNumber"></a>

```typescript
public readonly RequestPhoneNumber: string;
```

- *Type:* string

[Write] sms-voice:RequestPhoneNumber.

---

##### `RequestSenderId`<sup>Required</sup> <a name="RequestSenderId" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.RequestSenderId"></a>

```typescript
public readonly RequestSenderId: string;
```

- *Type:* string

[Write] sms-voice:RequestSenderId.

---

##### `SendDestinationNumberVerificationCode`<sup>Required</sup> <a name="SendDestinationNumberVerificationCode" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendDestinationNumberVerificationCode"></a>

```typescript
public readonly SendDestinationNumberVerificationCode: string;
```

- *Type:* string

[Write] sms-voice:SendDestinationNumberVerificationCode.

---

##### `SendMediaMessage`<sup>Required</sup> <a name="SendMediaMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendMediaMessage"></a>

```typescript
public readonly SendMediaMessage: string;
```

- *Type:* string

[Write] sms-voice:SendMediaMessage.

---

##### `SendNotifyTextMessage`<sup>Required</sup> <a name="SendNotifyTextMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendNotifyTextMessage"></a>

```typescript
public readonly SendNotifyTextMessage: string;
```

- *Type:* string

[Write] sms-voice:SendNotifyTextMessage.

---

##### `SendNotifyVoiceMessage`<sup>Required</sup> <a name="SendNotifyVoiceMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendNotifyVoiceMessage"></a>

```typescript
public readonly SendNotifyVoiceMessage: string;
```

- *Type:* string

[Write] sms-voice:SendNotifyVoiceMessage.

---

##### `SendRcsMessage`<sup>Required</sup> <a name="SendRcsMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendRcsMessage"></a>

```typescript
public readonly SendRcsMessage: string;
```

- *Type:* string

[Write] sms-voice:SendRcsMessage.

---

##### `SendTextMessage`<sup>Required</sup> <a name="SendTextMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendTextMessage"></a>

```typescript
public readonly SendTextMessage: string;
```

- *Type:* string

[Write] sms-voice:SendTextMessage.

---

##### `SendVoiceMessage`<sup>Required</sup> <a name="SendVoiceMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SendVoiceMessage"></a>

```typescript
public readonly SendVoiceMessage: string;
```

- *Type:* string

[Write] sms-voice:SendVoiceMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SubmitRegistrationVersion`<sup>Required</sup> <a name="SubmitRegistrationVersion" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.SubmitRegistrationVersion"></a>

```typescript
public readonly SubmitRegistrationVersion: string;
```

- *Type:* string

[Write] sms-voice:SubmitRegistrationVersion.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] sms-voice:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] sms-voice:UntagResource.

---

##### `UpdateConfigurationSetEventDestination`<sup>Required</sup> <a name="UpdateConfigurationSetEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateConfigurationSetEventDestination"></a>

```typescript
public readonly UpdateConfigurationSetEventDestination: string;
```

- *Type:* string

[Write] sms-voice:UpdateConfigurationSetEventDestination.

---

##### `UpdateEventDestination`<sup>Required</sup> <a name="UpdateEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateEventDestination"></a>

```typescript
public readonly UpdateEventDestination: string;
```

- *Type:* string

[Write] sms-voice:UpdateEventDestination.

---

##### `UpdateNotifyConfiguration`<sup>Required</sup> <a name="UpdateNotifyConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateNotifyConfiguration"></a>

```typescript
public readonly UpdateNotifyConfiguration: string;
```

- *Type:* string

[Write] sms-voice:UpdateNotifyConfiguration.

---

##### `UpdatePhoneNumber`<sup>Required</sup> <a name="UpdatePhoneNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdatePhoneNumber"></a>

```typescript
public readonly UpdatePhoneNumber: string;
```

- *Type:* string

[Write] sms-voice:UpdatePhoneNumber.

---

##### `UpdatePool`<sup>Required</sup> <a name="UpdatePool" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdatePool"></a>

```typescript
public readonly UpdatePool: string;
```

- *Type:* string

[Write] sms-voice:UpdatePool.

---

##### `UpdateProtectConfiguration`<sup>Required</sup> <a name="UpdateProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateProtectConfiguration"></a>

```typescript
public readonly UpdateProtectConfiguration: string;
```

- *Type:* string

[Write] sms-voice:UpdateProtectConfiguration.

---

##### `UpdateProtectConfigurationCountryRuleSet`<sup>Required</sup> <a name="UpdateProtectConfigurationCountryRuleSet" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateProtectConfigurationCountryRuleSet"></a>

```typescript
public readonly UpdateProtectConfigurationCountryRuleSet: string;
```

- *Type:* string

[Write] sms-voice:UpdateProtectConfigurationCountryRuleSet.

---

##### `UpdateRcsAgent`<sup>Required</sup> <a name="UpdateRcsAgent" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateRcsAgent"></a>

```typescript
public readonly UpdateRcsAgent: string;
```

- *Type:* string

[Write] sms-voice:UpdateRcsAgent.

---

##### `UpdateSenderId`<sup>Required</sup> <a name="UpdateSenderId" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.UpdateSenderId"></a>

```typescript
public readonly UpdateSenderId: string;
```

- *Type:* string

[Write] sms-voice:UpdateSenderId.

---

##### `VerifyDestinationNumber`<sup>Required</sup> <a name="VerifyDestinationNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceActions.property.VerifyDestinationNumber"></a>

```typescript
public readonly VerifyDestinationNumber: string;
```

- *Type:* string

[Write] sms-voice:VerifyDestinationNumber.

---

### SMSVoiceConditions <a name="SMSVoiceConditions" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions"></a>

Condition key constants and builders for sms-voice.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

new sms_voice.SMSVoiceConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.requestTag"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.resourceTag"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.tagKeys"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateConfigurationSetConditionKeys">CreateConfigurationSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConfigurationSet action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateNotifyConfigurationConditionKeys">CreateNotifyConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNotifyConfiguration action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateOptOutListConditionKeys">CreateOptOutListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOptOutList action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreatePoolConditionKeys">CreatePoolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePool action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateProtectConfigurationConditionKeys">CreateProtectConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProtectConfiguration action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateRcsAgentConditionKeys">CreateRcsAgentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRcsAgent action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateRegistrationAttachmentConditionKeys">CreateRegistrationAttachmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRegistrationAttachment action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateRegistrationConditionKeys">CreateRegistrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRegistration action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateVerifiedDestinationNumberConditionKeys">CreateVerifiedDestinationNumberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVerifiedDestinationNumber action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.RequestPhoneNumberConditionKeys">RequestPhoneNumberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RequestPhoneNumber action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.RequestSenderIdConditionKeys">RequestSenderIdConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RequestSenderId action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateConfigurationSetConditionKeys`<sup>Required</sup> <a name="CreateConfigurationSetConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateConfigurationSetConditionKeys"></a>

```typescript
public readonly CreateConfigurationSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConfigurationSet action.

---

##### `CreateNotifyConfigurationConditionKeys`<sup>Required</sup> <a name="CreateNotifyConfigurationConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateNotifyConfigurationConditionKeys"></a>

```typescript
public readonly CreateNotifyConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNotifyConfiguration action.

---

##### `CreateOptOutListConditionKeys`<sup>Required</sup> <a name="CreateOptOutListConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateOptOutListConditionKeys"></a>

```typescript
public readonly CreateOptOutListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOptOutList action.

---

##### `CreatePoolConditionKeys`<sup>Required</sup> <a name="CreatePoolConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreatePoolConditionKeys"></a>

```typescript
public readonly CreatePoolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePool action.

---

##### `CreateProtectConfigurationConditionKeys`<sup>Required</sup> <a name="CreateProtectConfigurationConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateProtectConfigurationConditionKeys"></a>

```typescript
public readonly CreateProtectConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProtectConfiguration action.

---

##### `CreateRcsAgentConditionKeys`<sup>Required</sup> <a name="CreateRcsAgentConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateRcsAgentConditionKeys"></a>

```typescript
public readonly CreateRcsAgentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRcsAgent action.

---

##### `CreateRegistrationAttachmentConditionKeys`<sup>Required</sup> <a name="CreateRegistrationAttachmentConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateRegistrationAttachmentConditionKeys"></a>

```typescript
public readonly CreateRegistrationAttachmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRegistrationAttachment action.

---

##### `CreateRegistrationConditionKeys`<sup>Required</sup> <a name="CreateRegistrationConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateRegistrationConditionKeys"></a>

```typescript
public readonly CreateRegistrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRegistration action.

---

##### `CreateVerifiedDestinationNumberConditionKeys`<sup>Required</sup> <a name="CreateVerifiedDestinationNumberConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.CreateVerifiedDestinationNumberConditionKeys"></a>

```typescript
public readonly CreateVerifiedDestinationNumberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVerifiedDestinationNumber action.

---

##### `RequestPhoneNumberConditionKeys`<sup>Required</sup> <a name="RequestPhoneNumberConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.RequestPhoneNumberConditionKeys"></a>

```typescript
public readonly RequestPhoneNumberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RequestPhoneNumber action.

---

##### `RequestSenderIdConditionKeys`<sup>Required</sup> <a name="RequestSenderIdConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.RequestSenderIdConditionKeys"></a>

```typescript
public readonly RequestSenderIdConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RequestSenderId action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.sms_voice.SMSVoiceConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SMSVoiceOperations <a name="SMSVoiceOperations" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations"></a>

API operation to required IAM actions mapping for sms-voice.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

new sms_voice.SMSVoiceOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.AssociateOriginationIdentity">AssociateOriginationIdentity</a></code> | <code>string[]</code> | IAM actions required for the AssociateOriginationIdentity API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.AssociateProtectConfiguration">AssociateProtectConfiguration</a></code> | <code>string[]</code> | IAM actions required for the AssociateProtectConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CarrierLookup">CarrierLookup</a></code> | <code>string[]</code> | IAM actions required for the CarrierLookup API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateConfigurationSet">CreateConfigurationSet</a></code> | <code>string[]</code> | IAM actions required for the CreateConfigurationSet API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateConfigurationSetEventDestination">CreateConfigurationSetEventDestination</a></code> | <code>string[]</code> | IAM actions required for the CreateConfigurationSetEventDestination API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateEventDestination">CreateEventDestination</a></code> | <code>string[]</code> | IAM actions required for the CreateEventDestination API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateNotifyConfiguration">CreateNotifyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateNotifyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateOptOutList">CreateOptOutList</a></code> | <code>string[]</code> | IAM actions required for the CreateOptOutList API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreatePool">CreatePool</a></code> | <code>string[]</code> | IAM actions required for the CreatePool API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateProtectConfiguration">CreateProtectConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateProtectConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateRcsAgent">CreateRcsAgent</a></code> | <code>string[]</code> | IAM actions required for the CreateRcsAgent API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateRegistration">CreateRegistration</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateRegistrationAssociation">CreateRegistrationAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistrationAssociation API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateRegistrationAttachment">CreateRegistrationAttachment</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistrationAttachment API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateRegistrationVersion">CreateRegistrationVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistrationVersion API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateVerifiedDestinationNumber">CreateVerifiedDestinationNumber</a></code> | <code>string[]</code> | IAM actions required for the CreateVerifiedDestinationNumber API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteAccountDefaultProtectConfiguration">DeleteAccountDefaultProtectConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountDefaultProtectConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteConfigurationSet">DeleteConfigurationSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationSet API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteConfigurationSetEventDestination">DeleteConfigurationSetEventDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationSetEventDestination API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteDefaultMessageType">DeleteDefaultMessageType</a></code> | <code>string[]</code> | IAM actions required for the DeleteDefaultMessageType API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteDefaultSenderId">DeleteDefaultSenderId</a></code> | <code>string[]</code> | IAM actions required for the DeleteDefaultSenderId API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteEventDestination">DeleteEventDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventDestination API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteKeyword">DeleteKeyword</a></code> | <code>string[]</code> | IAM actions required for the DeleteKeyword API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteMediaMessageSpendLimitOverride">DeleteMediaMessageSpendLimitOverride</a></code> | <code>string[]</code> | IAM actions required for the DeleteMediaMessageSpendLimitOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteNotifyConfiguration">DeleteNotifyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotifyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteNotifyMessageSpendLimitOverride">DeleteNotifyMessageSpendLimitOverride</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotifyMessageSpendLimitOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteOptedOutNumber">DeleteOptedOutNumber</a></code> | <code>string[]</code> | IAM actions required for the DeleteOptedOutNumber API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteOptOutList">DeleteOptOutList</a></code> | <code>string[]</code> | IAM actions required for the DeleteOptOutList API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeletePool">DeletePool</a></code> | <code>string[]</code> | IAM actions required for the DeletePool API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteProtectConfiguration">DeleteProtectConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteProtectConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteProtectConfigurationRuleSetNumberOverride">DeleteProtectConfigurationRuleSetNumberOverride</a></code> | <code>string[]</code> | IAM actions required for the DeleteProtectConfigurationRuleSetNumberOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteRcsAgent">DeleteRcsAgent</a></code> | <code>string[]</code> | IAM actions required for the DeleteRcsAgent API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteRcsMessageSpendLimitOverride">DeleteRcsMessageSpendLimitOverride</a></code> | <code>string[]</code> | IAM actions required for the DeleteRcsMessageSpendLimitOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteRegistration">DeleteRegistration</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteRegistrationAttachment">DeleteRegistrationAttachment</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistrationAttachment API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteRegistrationFieldValue">DeleteRegistrationFieldValue</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistrationFieldValue API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteTextMessageSpendLimitOverride">DeleteTextMessageSpendLimitOverride</a></code> | <code>string[]</code> | IAM actions required for the DeleteTextMessageSpendLimitOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteVerifiedDestinationNumber">DeleteVerifiedDestinationNumber</a></code> | <code>string[]</code> | IAM actions required for the DeleteVerifiedDestinationNumber API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteVoiceMessageSpendLimitOverride">DeleteVoiceMessageSpendLimitOverride</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceMessageSpendLimitOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountAttributes API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeAccountLimits">DescribeAccountLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountLimits API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeConfigurationSets">DescribeConfigurationSets</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationSets API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeKeywords">DescribeKeywords</a></code> | <code>string[]</code> | IAM actions required for the DescribeKeywords API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeNotifyConfigurations">DescribeNotifyConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeNotifyConfigurations API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeNotifyTemplates">DescribeNotifyTemplates</a></code> | <code>string[]</code> | IAM actions required for the DescribeNotifyTemplates API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeOptedOutNumbers">DescribeOptedOutNumbers</a></code> | <code>string[]</code> | IAM actions required for the DescribeOptedOutNumbers API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeOptOutLists">DescribeOptOutLists</a></code> | <code>string[]</code> | IAM actions required for the DescribeOptOutLists API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribePhoneNumbers">DescribePhoneNumbers</a></code> | <code>string[]</code> | IAM actions required for the DescribePhoneNumbers API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribePools">DescribePools</a></code> | <code>string[]</code> | IAM actions required for the DescribePools API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeProtectConfigurations">DescribeProtectConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeProtectConfigurations API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRcsAgentCountryLaunchStatus">DescribeRcsAgentCountryLaunchStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeRcsAgentCountryLaunchStatus API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRcsAgents">DescribeRcsAgents</a></code> | <code>string[]</code> | IAM actions required for the DescribeRcsAgents API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationAttachments">DescribeRegistrationAttachments</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegistrationAttachments API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationFieldDefinitions">DescribeRegistrationFieldDefinitions</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegistrationFieldDefinitions API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationFieldValues">DescribeRegistrationFieldValues</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegistrationFieldValues API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrations">DescribeRegistrations</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegistrations API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationSectionDefinitions">DescribeRegistrationSectionDefinitions</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegistrationSectionDefinitions API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationTypeDefinitions">DescribeRegistrationTypeDefinitions</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegistrationTypeDefinitions API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationVersions">DescribeRegistrationVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegistrationVersions API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeSenderIds">DescribeSenderIds</a></code> | <code>string[]</code> | IAM actions required for the DescribeSenderIds API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeSpendLimits">DescribeSpendLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeSpendLimits API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeVerifiedDestinationNumbers">DescribeVerifiedDestinationNumbers</a></code> | <code>string[]</code> | IAM actions required for the DescribeVerifiedDestinationNumbers API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DisassociateOriginationIdentity">DisassociateOriginationIdentity</a></code> | <code>string[]</code> | IAM actions required for the DisassociateOriginationIdentity API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DisassociateProtectConfiguration">DisassociateProtectConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DisassociateProtectConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DiscardRegistrationVersion">DiscardRegistrationVersion</a></code> | <code>string[]</code> | IAM actions required for the DiscardRegistrationVersion API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListConfigurationSets">ListConfigurationSets</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationSets API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListNotifyCountries">ListNotifyCountries</a></code> | <code>string[]</code> | IAM actions required for the ListNotifyCountries API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListPoolOriginationIdentities">ListPoolOriginationIdentities</a></code> | <code>string[]</code> | IAM actions required for the ListPoolOriginationIdentities API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListProtectConfigurationRuleSetNumberOverrides">ListProtectConfigurationRuleSetNumberOverrides</a></code> | <code>string[]</code> | IAM actions required for the ListProtectConfigurationRuleSetNumberOverrides API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListRegistrationAssociations">ListRegistrationAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListRegistrationAssociations API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opGetConfigurationSetEventDestinations">opGetConfigurationSetEventDestinations</a></code> | <code>string[]</code> | IAM actions required for the GetConfigurationSetEventDestinations API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opGetProtectConfigurationCountryRuleSet">opGetProtectConfigurationCountryRuleSet</a></code> | <code>string[]</code> | IAM actions required for the GetProtectConfigurationCountryRuleSet API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetAccountDefaultProtectConfiguration">opSetAccountDefaultProtectConfiguration</a></code> | <code>string[]</code> | IAM actions required for the SetAccountDefaultProtectConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetDefaultMessageFeedbackEnabled">opSetDefaultMessageFeedbackEnabled</a></code> | <code>string[]</code> | IAM actions required for the SetDefaultMessageFeedbackEnabled API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetDefaultMessageType">opSetDefaultMessageType</a></code> | <code>string[]</code> | IAM actions required for the SetDefaultMessageType API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetDefaultSenderId">opSetDefaultSenderId</a></code> | <code>string[]</code> | IAM actions required for the SetDefaultSenderId API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetMediaMessageSpendLimitOverride">opSetMediaMessageSpendLimitOverride</a></code> | <code>string[]</code> | IAM actions required for the SetMediaMessageSpendLimitOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetNotifyMessageSpendLimitOverride">opSetNotifyMessageSpendLimitOverride</a></code> | <code>string[]</code> | IAM actions required for the SetNotifyMessageSpendLimitOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetRcsMessageSpendLimitOverride">opSetRcsMessageSpendLimitOverride</a></code> | <code>string[]</code> | IAM actions required for the SetRcsMessageSpendLimitOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetTextMessageSpendLimitOverride">opSetTextMessageSpendLimitOverride</a></code> | <code>string[]</code> | IAM actions required for the SetTextMessageSpendLimitOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetVoiceMessageSpendLimitOverride">opSetVoiceMessageSpendLimitOverride</a></code> | <code>string[]</code> | IAM actions required for the SetVoiceMessageSpendLimitOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutKeyword">PutKeyword</a></code> | <code>string[]</code> | IAM actions required for the PutKeyword API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutMessageFeedback">PutMessageFeedback</a></code> | <code>string[]</code> | IAM actions required for the PutMessageFeedback API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutOptedOutNumber">PutOptedOutNumber</a></code> | <code>string[]</code> | IAM actions required for the PutOptedOutNumber API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutProtectConfigurationRuleSetNumberOverride">PutProtectConfigurationRuleSetNumberOverride</a></code> | <code>string[]</code> | IAM actions required for the PutProtectConfigurationRuleSetNumberOverride API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutRegistrationFieldValue">PutRegistrationFieldValue</a></code> | <code>string[]</code> | IAM actions required for the PutRegistrationFieldValue API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ReleasePhoneNumber">ReleasePhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the ReleasePhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ReleaseSenderId">ReleaseSenderId</a></code> | <code>string[]</code> | IAM actions required for the ReleaseSenderId API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.RequestPhoneNumber">RequestPhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the RequestPhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.RequestSenderId">RequestSenderId</a></code> | <code>string[]</code> | IAM actions required for the RequestSenderId API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendDestinationNumberVerificationCode">SendDestinationNumberVerificationCode</a></code> | <code>string[]</code> | IAM actions required for the SendDestinationNumberVerificationCode API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendMediaMessage">SendMediaMessage</a></code> | <code>string[]</code> | IAM actions required for the SendMediaMessage API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendNotifyTextMessage">SendNotifyTextMessage</a></code> | <code>string[]</code> | IAM actions required for the SendNotifyTextMessage API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendNotifyVoiceMessage">SendNotifyVoiceMessage</a></code> | <code>string[]</code> | IAM actions required for the SendNotifyVoiceMessage API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendRcsMessage">SendRcsMessage</a></code> | <code>string[]</code> | IAM actions required for the SendRcsMessage API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendTextMessage">SendTextMessage</a></code> | <code>string[]</code> | IAM actions required for the SendTextMessage API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendVoiceMessage">SendVoiceMessage</a></code> | <code>string[]</code> | IAM actions required for the SendVoiceMessage API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SubmitRegistrationVersion">SubmitRegistrationVersion</a></code> | <code>string[]</code> | IAM actions required for the SubmitRegistrationVersion API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateConfigurationSetEventDestination">UpdateConfigurationSetEventDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationSetEventDestination API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateEventDestination">UpdateEventDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventDestination API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateNotifyConfiguration">UpdateNotifyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotifyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdatePhoneNumber">UpdatePhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the UpdatePhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdatePool">UpdatePool</a></code> | <code>string[]</code> | IAM actions required for the UpdatePool API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateProtectConfiguration">UpdateProtectConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateProtectConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateProtectConfigurationCountryRuleSet">UpdateProtectConfigurationCountryRuleSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateProtectConfigurationCountryRuleSet API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateRcsAgent">UpdateRcsAgent</a></code> | <code>string[]</code> | IAM actions required for the UpdateRcsAgent API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateSenderId">UpdateSenderId</a></code> | <code>string[]</code> | IAM actions required for the UpdateSenderId API call. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.VerifyDestinationNumber">VerifyDestinationNumber</a></code> | <code>string[]</code> | IAM actions required for the VerifyDestinationNumber API call. |

---

##### `AssociateOriginationIdentity`<sup>Required</sup> <a name="AssociateOriginationIdentity" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.AssociateOriginationIdentity"></a>

```typescript
public readonly AssociateOriginationIdentity: string[];
```

- *Type:* string[]

IAM actions required for the AssociateOriginationIdentity API call.

---

##### `AssociateProtectConfiguration`<sup>Required</sup> <a name="AssociateProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.AssociateProtectConfiguration"></a>

```typescript
public readonly AssociateProtectConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the AssociateProtectConfiguration API call.

---

##### `CarrierLookup`<sup>Required</sup> <a name="CarrierLookup" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CarrierLookup"></a>

```typescript
public readonly CarrierLookup: string[];
```

- *Type:* string[]

IAM actions required for the CarrierLookup API call.

---

##### `CreateConfigurationSet`<sup>Required</sup> <a name="CreateConfigurationSet" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateConfigurationSet"></a>

```typescript
public readonly CreateConfigurationSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfigurationSet API call.

---

##### `CreateConfigurationSetEventDestination`<sup>Required</sup> <a name="CreateConfigurationSetEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateConfigurationSetEventDestination"></a>

```typescript
public readonly CreateConfigurationSetEventDestination: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfigurationSetEventDestination API call.

---

##### `CreateEventDestination`<sup>Required</sup> <a name="CreateEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateEventDestination"></a>

```typescript
public readonly CreateEventDestination: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventDestination API call.

---

##### `CreateNotifyConfiguration`<sup>Required</sup> <a name="CreateNotifyConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateNotifyConfiguration"></a>

```typescript
public readonly CreateNotifyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateNotifyConfiguration API call.

---

##### `CreateOptOutList`<sup>Required</sup> <a name="CreateOptOutList" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateOptOutList"></a>

```typescript
public readonly CreateOptOutList: string[];
```

- *Type:* string[]

IAM actions required for the CreateOptOutList API call.

---

##### `CreatePool`<sup>Required</sup> <a name="CreatePool" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreatePool"></a>

```typescript
public readonly CreatePool: string[];
```

- *Type:* string[]

IAM actions required for the CreatePool API call.

---

##### `CreateProtectConfiguration`<sup>Required</sup> <a name="CreateProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateProtectConfiguration"></a>

```typescript
public readonly CreateProtectConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateProtectConfiguration API call.

---

##### `CreateRcsAgent`<sup>Required</sup> <a name="CreateRcsAgent" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateRcsAgent"></a>

```typescript
public readonly CreateRcsAgent: string[];
```

- *Type:* string[]

IAM actions required for the CreateRcsAgent API call.

---

##### `CreateRegistration`<sup>Required</sup> <a name="CreateRegistration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateRegistration"></a>

```typescript
public readonly CreateRegistration: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistration API call.

---

##### `CreateRegistrationAssociation`<sup>Required</sup> <a name="CreateRegistrationAssociation" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateRegistrationAssociation"></a>

```typescript
public readonly CreateRegistrationAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistrationAssociation API call.

---

##### `CreateRegistrationAttachment`<sup>Required</sup> <a name="CreateRegistrationAttachment" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateRegistrationAttachment"></a>

```typescript
public readonly CreateRegistrationAttachment: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistrationAttachment API call.

---

##### `CreateRegistrationVersion`<sup>Required</sup> <a name="CreateRegistrationVersion" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateRegistrationVersion"></a>

```typescript
public readonly CreateRegistrationVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistrationVersion API call.

---

##### `CreateVerifiedDestinationNumber`<sup>Required</sup> <a name="CreateVerifiedDestinationNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.CreateVerifiedDestinationNumber"></a>

```typescript
public readonly CreateVerifiedDestinationNumber: string[];
```

- *Type:* string[]

IAM actions required for the CreateVerifiedDestinationNumber API call.

---

##### `DeleteAccountDefaultProtectConfiguration`<sup>Required</sup> <a name="DeleteAccountDefaultProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteAccountDefaultProtectConfiguration"></a>

```typescript
public readonly DeleteAccountDefaultProtectConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountDefaultProtectConfiguration API call.

---

##### `DeleteConfigurationSet`<sup>Required</sup> <a name="DeleteConfigurationSet" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteConfigurationSet"></a>

```typescript
public readonly DeleteConfigurationSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationSet API call.

---

##### `DeleteConfigurationSetEventDestination`<sup>Required</sup> <a name="DeleteConfigurationSetEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteConfigurationSetEventDestination"></a>

```typescript
public readonly DeleteConfigurationSetEventDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationSetEventDestination API call.

---

##### `DeleteDefaultMessageType`<sup>Required</sup> <a name="DeleteDefaultMessageType" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteDefaultMessageType"></a>

```typescript
public readonly DeleteDefaultMessageType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDefaultMessageType API call.

---

##### `DeleteDefaultSenderId`<sup>Required</sup> <a name="DeleteDefaultSenderId" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteDefaultSenderId"></a>

```typescript
public readonly DeleteDefaultSenderId: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDefaultSenderId API call.

---

##### `DeleteEventDestination`<sup>Required</sup> <a name="DeleteEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteEventDestination"></a>

```typescript
public readonly DeleteEventDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventDestination API call.

---

##### `DeleteKeyword`<sup>Required</sup> <a name="DeleteKeyword" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteKeyword"></a>

```typescript
public readonly DeleteKeyword: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKeyword API call.

---

##### `DeleteMediaMessageSpendLimitOverride`<sup>Required</sup> <a name="DeleteMediaMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteMediaMessageSpendLimitOverride"></a>

```typescript
public readonly DeleteMediaMessageSpendLimitOverride: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMediaMessageSpendLimitOverride API call.

---

##### `DeleteNotifyConfiguration`<sup>Required</sup> <a name="DeleteNotifyConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteNotifyConfiguration"></a>

```typescript
public readonly DeleteNotifyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotifyConfiguration API call.

---

##### `DeleteNotifyMessageSpendLimitOverride`<sup>Required</sup> <a name="DeleteNotifyMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteNotifyMessageSpendLimitOverride"></a>

```typescript
public readonly DeleteNotifyMessageSpendLimitOverride: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotifyMessageSpendLimitOverride API call.

---

##### `DeleteOptedOutNumber`<sup>Required</sup> <a name="DeleteOptedOutNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteOptedOutNumber"></a>

```typescript
public readonly DeleteOptedOutNumber: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOptedOutNumber API call.

---

##### `DeleteOptOutList`<sup>Required</sup> <a name="DeleteOptOutList" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteOptOutList"></a>

```typescript
public readonly DeleteOptOutList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOptOutList API call.

---

##### `DeletePool`<sup>Required</sup> <a name="DeletePool" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeletePool"></a>

```typescript
public readonly DeletePool: string[];
```

- *Type:* string[]

IAM actions required for the DeletePool API call.

---

##### `DeleteProtectConfiguration`<sup>Required</sup> <a name="DeleteProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteProtectConfiguration"></a>

```typescript
public readonly DeleteProtectConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProtectConfiguration API call.

---

##### `DeleteProtectConfigurationRuleSetNumberOverride`<sup>Required</sup> <a name="DeleteProtectConfigurationRuleSetNumberOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteProtectConfigurationRuleSetNumberOverride"></a>

```typescript
public readonly DeleteProtectConfigurationRuleSetNumberOverride: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProtectConfigurationRuleSetNumberOverride API call.

---

##### `DeleteRcsAgent`<sup>Required</sup> <a name="DeleteRcsAgent" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteRcsAgent"></a>

```typescript
public readonly DeleteRcsAgent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRcsAgent API call.

---

##### `DeleteRcsMessageSpendLimitOverride`<sup>Required</sup> <a name="DeleteRcsMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteRcsMessageSpendLimitOverride"></a>

```typescript
public readonly DeleteRcsMessageSpendLimitOverride: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRcsMessageSpendLimitOverride API call.

---

##### `DeleteRegistration`<sup>Required</sup> <a name="DeleteRegistration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteRegistration"></a>

```typescript
public readonly DeleteRegistration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistration API call.

---

##### `DeleteRegistrationAttachment`<sup>Required</sup> <a name="DeleteRegistrationAttachment" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteRegistrationAttachment"></a>

```typescript
public readonly DeleteRegistrationAttachment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistrationAttachment API call.

---

##### `DeleteRegistrationFieldValue`<sup>Required</sup> <a name="DeleteRegistrationFieldValue" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteRegistrationFieldValue"></a>

```typescript
public readonly DeleteRegistrationFieldValue: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistrationFieldValue API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteTextMessageSpendLimitOverride`<sup>Required</sup> <a name="DeleteTextMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteTextMessageSpendLimitOverride"></a>

```typescript
public readonly DeleteTextMessageSpendLimitOverride: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTextMessageSpendLimitOverride API call.

---

##### `DeleteVerifiedDestinationNumber`<sup>Required</sup> <a name="DeleteVerifiedDestinationNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteVerifiedDestinationNumber"></a>

```typescript
public readonly DeleteVerifiedDestinationNumber: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVerifiedDestinationNumber API call.

---

##### `DeleteVoiceMessageSpendLimitOverride`<sup>Required</sup> <a name="DeleteVoiceMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DeleteVoiceMessageSpendLimitOverride"></a>

```typescript
public readonly DeleteVoiceMessageSpendLimitOverride: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceMessageSpendLimitOverride API call.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountAttributes API call.

---

##### `DescribeAccountLimits`<sup>Required</sup> <a name="DescribeAccountLimits" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeAccountLimits"></a>

```typescript
public readonly DescribeAccountLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountLimits API call.

---

##### `DescribeConfigurationSets`<sup>Required</sup> <a name="DescribeConfigurationSets" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeConfigurationSets"></a>

```typescript
public readonly DescribeConfigurationSets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationSets API call.

---

##### `DescribeKeywords`<sup>Required</sup> <a name="DescribeKeywords" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeKeywords"></a>

```typescript
public readonly DescribeKeywords: string[];
```

- *Type:* string[]

IAM actions required for the DescribeKeywords API call.

---

##### `DescribeNotifyConfigurations`<sup>Required</sup> <a name="DescribeNotifyConfigurations" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeNotifyConfigurations"></a>

```typescript
public readonly DescribeNotifyConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNotifyConfigurations API call.

---

##### `DescribeNotifyTemplates`<sup>Required</sup> <a name="DescribeNotifyTemplates" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeNotifyTemplates"></a>

```typescript
public readonly DescribeNotifyTemplates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNotifyTemplates API call.

---

##### `DescribeOptedOutNumbers`<sup>Required</sup> <a name="DescribeOptedOutNumbers" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeOptedOutNumbers"></a>

```typescript
public readonly DescribeOptedOutNumbers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOptedOutNumbers API call.

---

##### `DescribeOptOutLists`<sup>Required</sup> <a name="DescribeOptOutLists" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeOptOutLists"></a>

```typescript
public readonly DescribeOptOutLists: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOptOutLists API call.

---

##### `DescribePhoneNumbers`<sup>Required</sup> <a name="DescribePhoneNumbers" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribePhoneNumbers"></a>

```typescript
public readonly DescribePhoneNumbers: string[];
```

- *Type:* string[]

IAM actions required for the DescribePhoneNumbers API call.

---

##### `DescribePools`<sup>Required</sup> <a name="DescribePools" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribePools"></a>

```typescript
public readonly DescribePools: string[];
```

- *Type:* string[]

IAM actions required for the DescribePools API call.

---

##### `DescribeProtectConfigurations`<sup>Required</sup> <a name="DescribeProtectConfigurations" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeProtectConfigurations"></a>

```typescript
public readonly DescribeProtectConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProtectConfigurations API call.

---

##### `DescribeRcsAgentCountryLaunchStatus`<sup>Required</sup> <a name="DescribeRcsAgentCountryLaunchStatus" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRcsAgentCountryLaunchStatus"></a>

```typescript
public readonly DescribeRcsAgentCountryLaunchStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRcsAgentCountryLaunchStatus API call.

---

##### `DescribeRcsAgents`<sup>Required</sup> <a name="DescribeRcsAgents" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRcsAgents"></a>

```typescript
public readonly DescribeRcsAgents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRcsAgents API call.

---

##### `DescribeRegistrationAttachments`<sup>Required</sup> <a name="DescribeRegistrationAttachments" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationAttachments"></a>

```typescript
public readonly DescribeRegistrationAttachments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegistrationAttachments API call.

---

##### `DescribeRegistrationFieldDefinitions`<sup>Required</sup> <a name="DescribeRegistrationFieldDefinitions" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationFieldDefinitions"></a>

```typescript
public readonly DescribeRegistrationFieldDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegistrationFieldDefinitions API call.

---

##### `DescribeRegistrationFieldValues`<sup>Required</sup> <a name="DescribeRegistrationFieldValues" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationFieldValues"></a>

```typescript
public readonly DescribeRegistrationFieldValues: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegistrationFieldValues API call.

---

##### `DescribeRegistrations`<sup>Required</sup> <a name="DescribeRegistrations" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrations"></a>

```typescript
public readonly DescribeRegistrations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegistrations API call.

---

##### `DescribeRegistrationSectionDefinitions`<sup>Required</sup> <a name="DescribeRegistrationSectionDefinitions" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationSectionDefinitions"></a>

```typescript
public readonly DescribeRegistrationSectionDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegistrationSectionDefinitions API call.

---

##### `DescribeRegistrationTypeDefinitions`<sup>Required</sup> <a name="DescribeRegistrationTypeDefinitions" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationTypeDefinitions"></a>

```typescript
public readonly DescribeRegistrationTypeDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegistrationTypeDefinitions API call.

---

##### `DescribeRegistrationVersions`<sup>Required</sup> <a name="DescribeRegistrationVersions" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeRegistrationVersions"></a>

```typescript
public readonly DescribeRegistrationVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegistrationVersions API call.

---

##### `DescribeSenderIds`<sup>Required</sup> <a name="DescribeSenderIds" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeSenderIds"></a>

```typescript
public readonly DescribeSenderIds: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSenderIds API call.

---

##### `DescribeSpendLimits`<sup>Required</sup> <a name="DescribeSpendLimits" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeSpendLimits"></a>

```typescript
public readonly DescribeSpendLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSpendLimits API call.

---

##### `DescribeVerifiedDestinationNumbers`<sup>Required</sup> <a name="DescribeVerifiedDestinationNumbers" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DescribeVerifiedDestinationNumbers"></a>

```typescript
public readonly DescribeVerifiedDestinationNumbers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVerifiedDestinationNumbers API call.

---

##### `DisassociateOriginationIdentity`<sup>Required</sup> <a name="DisassociateOriginationIdentity" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DisassociateOriginationIdentity"></a>

```typescript
public readonly DisassociateOriginationIdentity: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateOriginationIdentity API call.

---

##### `DisassociateProtectConfiguration`<sup>Required</sup> <a name="DisassociateProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DisassociateProtectConfiguration"></a>

```typescript
public readonly DisassociateProtectConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateProtectConfiguration API call.

---

##### `DiscardRegistrationVersion`<sup>Required</sup> <a name="DiscardRegistrationVersion" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.DiscardRegistrationVersion"></a>

```typescript
public readonly DiscardRegistrationVersion: string[];
```

- *Type:* string[]

IAM actions required for the DiscardRegistrationVersion API call.

---

##### `ListConfigurationSets`<sup>Required</sup> <a name="ListConfigurationSets" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListConfigurationSets"></a>

```typescript
public readonly ListConfigurationSets: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationSets API call.

---

##### `ListNotifyCountries`<sup>Required</sup> <a name="ListNotifyCountries" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListNotifyCountries"></a>

```typescript
public readonly ListNotifyCountries: string[];
```

- *Type:* string[]

IAM actions required for the ListNotifyCountries API call.

---

##### `ListPoolOriginationIdentities`<sup>Required</sup> <a name="ListPoolOriginationIdentities" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListPoolOriginationIdentities"></a>

```typescript
public readonly ListPoolOriginationIdentities: string[];
```

- *Type:* string[]

IAM actions required for the ListPoolOriginationIdentities API call.

---

##### `ListProtectConfigurationRuleSetNumberOverrides`<sup>Required</sup> <a name="ListProtectConfigurationRuleSetNumberOverrides" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListProtectConfigurationRuleSetNumberOverrides"></a>

```typescript
public readonly ListProtectConfigurationRuleSetNumberOverrides: string[];
```

- *Type:* string[]

IAM actions required for the ListProtectConfigurationRuleSetNumberOverrides API call.

---

##### `ListRegistrationAssociations`<sup>Required</sup> <a name="ListRegistrationAssociations" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListRegistrationAssociations"></a>

```typescript
public readonly ListRegistrationAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListRegistrationAssociations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetConfigurationSetEventDestinations`<sup>Required</sup> <a name="opGetConfigurationSetEventDestinations" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opGetConfigurationSetEventDestinations"></a>

```typescript
public readonly opGetConfigurationSetEventDestinations: string[];
```

- *Type:* string[]

IAM actions required for the GetConfigurationSetEventDestinations API call.

---

##### `opGetProtectConfigurationCountryRuleSet`<sup>Required</sup> <a name="opGetProtectConfigurationCountryRuleSet" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opGetProtectConfigurationCountryRuleSet"></a>

```typescript
public readonly opGetProtectConfigurationCountryRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the GetProtectConfigurationCountryRuleSet API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opSetAccountDefaultProtectConfiguration`<sup>Required</sup> <a name="opSetAccountDefaultProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetAccountDefaultProtectConfiguration"></a>

```typescript
public readonly opSetAccountDefaultProtectConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the SetAccountDefaultProtectConfiguration API call.

---

##### `opSetDefaultMessageFeedbackEnabled`<sup>Required</sup> <a name="opSetDefaultMessageFeedbackEnabled" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetDefaultMessageFeedbackEnabled"></a>

```typescript
public readonly opSetDefaultMessageFeedbackEnabled: string[];
```

- *Type:* string[]

IAM actions required for the SetDefaultMessageFeedbackEnabled API call.

---

##### `opSetDefaultMessageType`<sup>Required</sup> <a name="opSetDefaultMessageType" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetDefaultMessageType"></a>

```typescript
public readonly opSetDefaultMessageType: string[];
```

- *Type:* string[]

IAM actions required for the SetDefaultMessageType API call.

---

##### `opSetDefaultSenderId`<sup>Required</sup> <a name="opSetDefaultSenderId" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetDefaultSenderId"></a>

```typescript
public readonly opSetDefaultSenderId: string[];
```

- *Type:* string[]

IAM actions required for the SetDefaultSenderId API call.

---

##### `opSetMediaMessageSpendLimitOverride`<sup>Required</sup> <a name="opSetMediaMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetMediaMessageSpendLimitOverride"></a>

```typescript
public readonly opSetMediaMessageSpendLimitOverride: string[];
```

- *Type:* string[]

IAM actions required for the SetMediaMessageSpendLimitOverride API call.

---

##### `opSetNotifyMessageSpendLimitOverride`<sup>Required</sup> <a name="opSetNotifyMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetNotifyMessageSpendLimitOverride"></a>

```typescript
public readonly opSetNotifyMessageSpendLimitOverride: string[];
```

- *Type:* string[]

IAM actions required for the SetNotifyMessageSpendLimitOverride API call.

---

##### `opSetRcsMessageSpendLimitOverride`<sup>Required</sup> <a name="opSetRcsMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetRcsMessageSpendLimitOverride"></a>

```typescript
public readonly opSetRcsMessageSpendLimitOverride: string[];
```

- *Type:* string[]

IAM actions required for the SetRcsMessageSpendLimitOverride API call.

---

##### `opSetTextMessageSpendLimitOverride`<sup>Required</sup> <a name="opSetTextMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetTextMessageSpendLimitOverride"></a>

```typescript
public readonly opSetTextMessageSpendLimitOverride: string[];
```

- *Type:* string[]

IAM actions required for the SetTextMessageSpendLimitOverride API call.

---

##### `opSetVoiceMessageSpendLimitOverride`<sup>Required</sup> <a name="opSetVoiceMessageSpendLimitOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.opSetVoiceMessageSpendLimitOverride"></a>

```typescript
public readonly opSetVoiceMessageSpendLimitOverride: string[];
```

- *Type:* string[]

IAM actions required for the SetVoiceMessageSpendLimitOverride API call.

---

##### `PutKeyword`<sup>Required</sup> <a name="PutKeyword" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutKeyword"></a>

```typescript
public readonly PutKeyword: string[];
```

- *Type:* string[]

IAM actions required for the PutKeyword API call.

---

##### `PutMessageFeedback`<sup>Required</sup> <a name="PutMessageFeedback" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutMessageFeedback"></a>

```typescript
public readonly PutMessageFeedback: string[];
```

- *Type:* string[]

IAM actions required for the PutMessageFeedback API call.

---

##### `PutOptedOutNumber`<sup>Required</sup> <a name="PutOptedOutNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutOptedOutNumber"></a>

```typescript
public readonly PutOptedOutNumber: string[];
```

- *Type:* string[]

IAM actions required for the PutOptedOutNumber API call.

---

##### `PutProtectConfigurationRuleSetNumberOverride`<sup>Required</sup> <a name="PutProtectConfigurationRuleSetNumberOverride" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutProtectConfigurationRuleSetNumberOverride"></a>

```typescript
public readonly PutProtectConfigurationRuleSetNumberOverride: string[];
```

- *Type:* string[]

IAM actions required for the PutProtectConfigurationRuleSetNumberOverride API call.

---

##### `PutRegistrationFieldValue`<sup>Required</sup> <a name="PutRegistrationFieldValue" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutRegistrationFieldValue"></a>

```typescript
public readonly PutRegistrationFieldValue: string[];
```

- *Type:* string[]

IAM actions required for the PutRegistrationFieldValue API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `ReleasePhoneNumber`<sup>Required</sup> <a name="ReleasePhoneNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ReleasePhoneNumber"></a>

```typescript
public readonly ReleasePhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the ReleasePhoneNumber API call.

---

##### `ReleaseSenderId`<sup>Required</sup> <a name="ReleaseSenderId" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.ReleaseSenderId"></a>

```typescript
public readonly ReleaseSenderId: string[];
```

- *Type:* string[]

IAM actions required for the ReleaseSenderId API call.

---

##### `RequestPhoneNumber`<sup>Required</sup> <a name="RequestPhoneNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.RequestPhoneNumber"></a>

```typescript
public readonly RequestPhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the RequestPhoneNumber API call.

---

##### `RequestSenderId`<sup>Required</sup> <a name="RequestSenderId" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.RequestSenderId"></a>

```typescript
public readonly RequestSenderId: string[];
```

- *Type:* string[]

IAM actions required for the RequestSenderId API call.

---

##### `SendDestinationNumberVerificationCode`<sup>Required</sup> <a name="SendDestinationNumberVerificationCode" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendDestinationNumberVerificationCode"></a>

```typescript
public readonly SendDestinationNumberVerificationCode: string[];
```

- *Type:* string[]

IAM actions required for the SendDestinationNumberVerificationCode API call.

---

##### `SendMediaMessage`<sup>Required</sup> <a name="SendMediaMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendMediaMessage"></a>

```typescript
public readonly SendMediaMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendMediaMessage API call.

---

##### `SendNotifyTextMessage`<sup>Required</sup> <a name="SendNotifyTextMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendNotifyTextMessage"></a>

```typescript
public readonly SendNotifyTextMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendNotifyTextMessage API call.

---

##### `SendNotifyVoiceMessage`<sup>Required</sup> <a name="SendNotifyVoiceMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendNotifyVoiceMessage"></a>

```typescript
public readonly SendNotifyVoiceMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendNotifyVoiceMessage API call.

---

##### `SendRcsMessage`<sup>Required</sup> <a name="SendRcsMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendRcsMessage"></a>

```typescript
public readonly SendRcsMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendRcsMessage API call.

---

##### `SendTextMessage`<sup>Required</sup> <a name="SendTextMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendTextMessage"></a>

```typescript
public readonly SendTextMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendTextMessage API call.

---

##### `SendVoiceMessage`<sup>Required</sup> <a name="SendVoiceMessage" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SendVoiceMessage"></a>

```typescript
public readonly SendVoiceMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendVoiceMessage API call.

---

##### `SubmitRegistrationVersion`<sup>Required</sup> <a name="SubmitRegistrationVersion" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.SubmitRegistrationVersion"></a>

```typescript
public readonly SubmitRegistrationVersion: string[];
```

- *Type:* string[]

IAM actions required for the SubmitRegistrationVersion API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateConfigurationSetEventDestination`<sup>Required</sup> <a name="UpdateConfigurationSetEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateConfigurationSetEventDestination"></a>

```typescript
public readonly UpdateConfigurationSetEventDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationSetEventDestination API call.

---

##### `UpdateEventDestination`<sup>Required</sup> <a name="UpdateEventDestination" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateEventDestination"></a>

```typescript
public readonly UpdateEventDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventDestination API call.

---

##### `UpdateNotifyConfiguration`<sup>Required</sup> <a name="UpdateNotifyConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateNotifyConfiguration"></a>

```typescript
public readonly UpdateNotifyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotifyConfiguration API call.

---

##### `UpdatePhoneNumber`<sup>Required</sup> <a name="UpdatePhoneNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdatePhoneNumber"></a>

```typescript
public readonly UpdatePhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePhoneNumber API call.

---

##### `UpdatePool`<sup>Required</sup> <a name="UpdatePool" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdatePool"></a>

```typescript
public readonly UpdatePool: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePool API call.

---

##### `UpdateProtectConfiguration`<sup>Required</sup> <a name="UpdateProtectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateProtectConfiguration"></a>

```typescript
public readonly UpdateProtectConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProtectConfiguration API call.

---

##### `UpdateProtectConfigurationCountryRuleSet`<sup>Required</sup> <a name="UpdateProtectConfigurationCountryRuleSet" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateProtectConfigurationCountryRuleSet"></a>

```typescript
public readonly UpdateProtectConfigurationCountryRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProtectConfigurationCountryRuleSet API call.

---

##### `UpdateRcsAgent`<sup>Required</sup> <a name="UpdateRcsAgent" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateRcsAgent"></a>

```typescript
public readonly UpdateRcsAgent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRcsAgent API call.

---

##### `UpdateSenderId`<sup>Required</sup> <a name="UpdateSenderId" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.UpdateSenderId"></a>

```typescript
public readonly UpdateSenderId: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSenderId API call.

---

##### `VerifyDestinationNumber`<sup>Required</sup> <a name="VerifyDestinationNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceOperations.property.VerifyDestinationNumber"></a>

```typescript
public readonly VerifyDestinationNumber: string[];
```

- *Type:* string[]

IAM actions required for the VerifyDestinationNumber API call.

---

### SMSVoiceResources <a name="SMSVoiceResources" id="@cdk_utils/iam.sms_voice.SMSVoiceResources"></a>

ARN builders, validators, and parsers for sms-voice resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.Initializer"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

new sms_voice.SMSVoiceResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.configurationSet">configurationSet</a></code> | Builds an ARN for the ConfigurationSet resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidConfigurationSetArn">isValidConfigurationSetArn</a></code> | Validates whether a string is a valid ARN for the ConfigurationSet resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidMessageArn">isValidMessageArn</a></code> | Validates whether a string is a valid ARN for the Message resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidNotifyConfigurationArn">isValidNotifyConfigurationArn</a></code> | Validates whether a string is a valid ARN for the NotifyConfiguration resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidOptOutListArn">isValidOptOutListArn</a></code> | Validates whether a string is a valid ARN for the OptOutList resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidPhoneNumberArn">isValidPhoneNumberArn</a></code> | Validates whether a string is a valid ARN for the PhoneNumber resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidPoolArn">isValidPoolArn</a></code> | Validates whether a string is a valid ARN for the Pool resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidProtectConfigurationArn">isValidProtectConfigurationArn</a></code> | Validates whether a string is a valid ARN for the ProtectConfiguration resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidRcsAgentArn">isValidRcsAgentArn</a></code> | Validates whether a string is a valid ARN for the RcsAgent resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidRegistrationArn">isValidRegistrationArn</a></code> | Validates whether a string is a valid ARN for the Registration resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidRegistrationAttachmentArn">isValidRegistrationAttachmentArn</a></code> | Validates whether a string is a valid ARN for the RegistrationAttachment resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidSenderIdArn">isValidSenderIdArn</a></code> | Validates whether a string is a valid ARN for the SenderId resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidVerifiedDestinationNumberArn">isValidVerifiedDestinationNumberArn</a></code> | Validates whether a string is a valid ARN for the VerifiedDestinationNumber resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.message">message</a></code> | Builds an ARN for the Message resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.notifyConfiguration">notifyConfiguration</a></code> | Builds an ARN for the NotifyConfiguration resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.optOutList">optOutList</a></code> | Builds an ARN for the OptOutList resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parseConfigurationSetArn">parseConfigurationSetArn</a></code> | Parses a ConfigurationSet ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parseMessageArn">parseMessageArn</a></code> | Parses a Message ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parseNotifyConfigurationArn">parseNotifyConfigurationArn</a></code> | Parses a NotifyConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parseOptOutListArn">parseOptOutListArn</a></code> | Parses a OptOutList ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parsePhoneNumberArn">parsePhoneNumberArn</a></code> | Parses a PhoneNumber ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parsePoolArn">parsePoolArn</a></code> | Parses a Pool ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parseProtectConfigurationArn">parseProtectConfigurationArn</a></code> | Parses a ProtectConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parseRcsAgentArn">parseRcsAgentArn</a></code> | Parses a RcsAgent ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parseRegistrationArn">parseRegistrationArn</a></code> | Parses a Registration ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parseRegistrationAttachmentArn">parseRegistrationAttachmentArn</a></code> | Parses a RegistrationAttachment ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parseSenderIdArn">parseSenderIdArn</a></code> | Parses a SenderId ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.parseVerifiedDestinationNumberArn">parseVerifiedDestinationNumberArn</a></code> | Parses a VerifiedDestinationNumber ARN into its components. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.phoneNumber">phoneNumber</a></code> | Builds an ARN for the PhoneNumber resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.pool">pool</a></code> | Builds an ARN for the Pool resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.protectConfiguration">protectConfiguration</a></code> | Builds an ARN for the ProtectConfiguration resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.rcsAgent">rcsAgent</a></code> | Builds an ARN for the RcsAgent resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.registration">registration</a></code> | Builds an ARN for the Registration resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.registrationAttachment">registrationAttachment</a></code> | Builds an ARN for the RegistrationAttachment resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.senderId">senderId</a></code> | Builds an ARN for the SenderId resource. |
| <code><a href="#@cdk_utils/iam.sms_voice.SMSVoiceResources.verifiedDestinationNumber">verifiedDestinationNumber</a></code> | Builds an ARN for the VerifiedDestinationNumber resource. |

---

##### `configurationSet` <a name="configurationSet" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.configurationSet"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.configurationSet(props: SMSVoiceConfigurationSetArnProps)
```

Builds an ARN for the ConfigurationSet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.configurationSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoiceConfigurationSetArnProps">SMSVoiceConfigurationSetArnProps</a>

---

##### `isValidConfigurationSetArn` <a name="isValidConfigurationSetArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidConfigurationSetArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidConfigurationSetArn(arn: string)
```

Validates whether a string is a valid ARN for the ConfigurationSet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidConfigurationSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMessageArn` <a name="isValidMessageArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidMessageArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidMessageArn(arn: string)
```

Validates whether a string is a valid ARN for the Message resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidMessageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNotifyConfigurationArn` <a name="isValidNotifyConfigurationArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidNotifyConfigurationArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidNotifyConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the NotifyConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidNotifyConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOptOutListArn` <a name="isValidOptOutListArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidOptOutListArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidOptOutListArn(arn: string)
```

Validates whether a string is a valid ARN for the OptOutList resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidOptOutListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPhoneNumberArn` <a name="isValidPhoneNumberArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidPhoneNumberArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidPhoneNumberArn(arn: string)
```

Validates whether a string is a valid ARN for the PhoneNumber resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidPhoneNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPoolArn` <a name="isValidPoolArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidPoolArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidPoolArn(arn: string)
```

Validates whether a string is a valid ARN for the Pool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidPoolArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProtectConfigurationArn` <a name="isValidProtectConfigurationArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidProtectConfigurationArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidProtectConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the ProtectConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidProtectConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRcsAgentArn` <a name="isValidRcsAgentArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidRcsAgentArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidRcsAgentArn(arn: string)
```

Validates whether a string is a valid ARN for the RcsAgent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidRcsAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegistrationArn` <a name="isValidRegistrationArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidRegistrationArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidRegistrationArn(arn: string)
```

Validates whether a string is a valid ARN for the Registration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidRegistrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegistrationAttachmentArn` <a name="isValidRegistrationAttachmentArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidRegistrationAttachmentArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidRegistrationAttachmentArn(arn: string)
```

Validates whether a string is a valid ARN for the RegistrationAttachment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidRegistrationAttachmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSenderIdArn` <a name="isValidSenderIdArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidSenderIdArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidSenderIdArn(arn: string)
```

Validates whether a string is a valid ARN for the SenderId resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidSenderIdArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVerifiedDestinationNumberArn` <a name="isValidVerifiedDestinationNumberArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidVerifiedDestinationNumberArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.isValidVerifiedDestinationNumberArn(arn: string)
```

Validates whether a string is a valid ARN for the VerifiedDestinationNumber resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.isValidVerifiedDestinationNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `message` <a name="message" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.message"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.message(props: SMSVoiceMessageArnProps)
```

Builds an ARN for the Message resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.message.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoiceMessageArnProps">SMSVoiceMessageArnProps</a>

---

##### `notifyConfiguration` <a name="notifyConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.notifyConfiguration"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.notifyConfiguration(props: SMSVoiceNotifyConfigurationArnProps)
```

Builds an ARN for the NotifyConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.notifyConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoiceNotifyConfigurationArnProps">SMSVoiceNotifyConfigurationArnProps</a>

---

##### `optOutList` <a name="optOutList" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.optOutList"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.optOutList(props: SMSVoiceOptOutListArnProps)
```

Builds an ARN for the OptOutList resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.optOutList.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoiceOptOutListArnProps">SMSVoiceOptOutListArnProps</a>

---

##### `parseConfigurationSetArn` <a name="parseConfigurationSetArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseConfigurationSetArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parseConfigurationSetArn(arn: string)
```

Parses a ConfigurationSet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseConfigurationSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMessageArn` <a name="parseMessageArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseMessageArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parseMessageArn(arn: string)
```

Parses a Message ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseMessageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNotifyConfigurationArn` <a name="parseNotifyConfigurationArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseNotifyConfigurationArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parseNotifyConfigurationArn(arn: string)
```

Parses a NotifyConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseNotifyConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOptOutListArn` <a name="parseOptOutListArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseOptOutListArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parseOptOutListArn(arn: string)
```

Parses a OptOutList ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseOptOutListArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePhoneNumberArn` <a name="parsePhoneNumberArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parsePhoneNumberArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parsePhoneNumberArn(arn: string)
```

Parses a PhoneNumber ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parsePhoneNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePoolArn` <a name="parsePoolArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parsePoolArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parsePoolArn(arn: string)
```

Parses a Pool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parsePoolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProtectConfigurationArn` <a name="parseProtectConfigurationArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseProtectConfigurationArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parseProtectConfigurationArn(arn: string)
```

Parses a ProtectConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseProtectConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRcsAgentArn` <a name="parseRcsAgentArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseRcsAgentArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parseRcsAgentArn(arn: string)
```

Parses a RcsAgent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseRcsAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegistrationArn` <a name="parseRegistrationArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseRegistrationArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parseRegistrationArn(arn: string)
```

Parses a Registration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseRegistrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegistrationAttachmentArn` <a name="parseRegistrationAttachmentArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseRegistrationAttachmentArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parseRegistrationAttachmentArn(arn: string)
```

Parses a RegistrationAttachment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseRegistrationAttachmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSenderIdArn` <a name="parseSenderIdArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseSenderIdArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parseSenderIdArn(arn: string)
```

Parses a SenderId ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseSenderIdArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVerifiedDestinationNumberArn` <a name="parseVerifiedDestinationNumberArn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseVerifiedDestinationNumberArn"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.parseVerifiedDestinationNumberArn(arn: string)
```

Parses a VerifiedDestinationNumber ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.parseVerifiedDestinationNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `phoneNumber` <a name="phoneNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.phoneNumber"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.phoneNumber(props: SMSVoicePhoneNumberArnProps)
```

Builds an ARN for the PhoneNumber resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.phoneNumber.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoicePhoneNumberArnProps">SMSVoicePhoneNumberArnProps</a>

---

##### `pool` <a name="pool" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.pool"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.pool(props: SMSVoicePoolArnProps)
```

Builds an ARN for the Pool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.pool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoicePoolArnProps">SMSVoicePoolArnProps</a>

---

##### `protectConfiguration` <a name="protectConfiguration" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.protectConfiguration"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.protectConfiguration(props: SMSVoiceProtectConfigurationArnProps)
```

Builds an ARN for the ProtectConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.protectConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoiceProtectConfigurationArnProps">SMSVoiceProtectConfigurationArnProps</a>

---

##### `rcsAgent` <a name="rcsAgent" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.rcsAgent"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.rcsAgent(props: SMSVoiceRcsAgentArnProps)
```

Builds an ARN for the RcsAgent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.rcsAgent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoiceRcsAgentArnProps">SMSVoiceRcsAgentArnProps</a>

---

##### `registration` <a name="registration" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.registration"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.registration(props: SMSVoiceRegistrationArnProps)
```

Builds an ARN for the Registration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.registration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationArnProps">SMSVoiceRegistrationArnProps</a>

---

##### `registrationAttachment` <a name="registrationAttachment" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.registrationAttachment"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.registrationAttachment(props: SMSVoiceRegistrationAttachmentArnProps)
```

Builds an ARN for the RegistrationAttachment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.registrationAttachment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoiceRegistrationAttachmentArnProps">SMSVoiceRegistrationAttachmentArnProps</a>

---

##### `senderId` <a name="senderId" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.senderId"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.senderId(props: SMSVoiceSenderIdArnProps)
```

Builds an ARN for the SenderId resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.senderId.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoiceSenderIdArnProps">SMSVoiceSenderIdArnProps</a>

---

##### `verifiedDestinationNumber` <a name="verifiedDestinationNumber" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.verifiedDestinationNumber"></a>

```typescript
import { sms_voice } from '@cdk_utils/iam'

sms_voice.SMSVoiceResources.verifiedDestinationNumber(props: SMSVoiceVerifiedDestinationNumberArnProps)
```

Builds an ARN for the VerifiedDestinationNumber resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sms_voice.SMSVoiceResources.verifiedDestinationNumber.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sms_voice.SMSVoiceVerifiedDestinationNumberArnProps">SMSVoiceVerifiedDestinationNumberArnProps</a>

---




