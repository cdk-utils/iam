# `ses` Submodule <a name="`ses` Submodule" id="@cdk_utils/iam.ses"></a>


## Structs <a name="Structs" id="Structs"></a>

### SesAddonInstanceArnComponents <a name="SesAddonInstanceArnComponents" id="@cdk_utils/iam.ses.SesAddonInstanceArnComponents"></a>

Parsed components of a addon-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesAddonInstanceArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesAddonInstanceArnComponents: ses.SesAddonInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesAddonInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonInstanceArnComponents.property.addonInstanceId">addonInstanceId</a></code> | <code>string</code> | The AddonInstanceId component. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesAddonInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `addonInstanceId`<sup>Required</sup> <a name="addonInstanceId" id="@cdk_utils/iam.ses.SesAddonInstanceArnComponents.property.addonInstanceId"></a>

```typescript
public readonly addonInstanceId: string;
```

- *Type:* string

The AddonInstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesAddonInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesAddonInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesAddonInstanceArnProps <a name="SesAddonInstanceArnProps" id="@cdk_utils/iam.ses.SesAddonInstanceArnProps"></a>

Properties for building a addon-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesAddonInstanceArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesAddonInstanceArnProps: ses.SesAddonInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesAddonInstanceArnProps.property.addonInstanceId">addonInstanceId</a></code> | <code>string</code> | The AddonInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `addonInstanceId`<sup>Required</sup> <a name="addonInstanceId" id="@cdk_utils/iam.ses.SesAddonInstanceArnProps.property.addonInstanceId"></a>

```typescript
public readonly addonInstanceId: string;
```

- *Type:* string

The AddonInstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesAddonInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesAddonInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesAddonInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesAddonSubscriptionArnComponents <a name="SesAddonSubscriptionArnComponents" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnComponents"></a>

Parsed components of a addon-subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesAddonSubscriptionArnComponents: ses.SesAddonSubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesAddonSubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonSubscriptionArnComponents.property.addonSubscriptionId">addonSubscriptionId</a></code> | <code>string</code> | The AddonSubscriptionId component. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonSubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonSubscriptionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `addonSubscriptionId`<sup>Required</sup> <a name="addonSubscriptionId" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnComponents.property.addonSubscriptionId"></a>

```typescript
public readonly addonSubscriptionId: string;
```

- *Type:* string

The AddonSubscriptionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesAddonSubscriptionArnProps <a name="SesAddonSubscriptionArnProps" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnProps"></a>

Properties for building a addon-subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesAddonSubscriptionArnProps: ses.SesAddonSubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesAddonSubscriptionArnProps.property.addonSubscriptionId">addonSubscriptionId</a></code> | <code>string</code> | The AddonSubscriptionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonSubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonSubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesAddonSubscriptionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `addonSubscriptionId`<sup>Required</sup> <a name="addonSubscriptionId" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnProps.property.addonSubscriptionId"></a>

```typescript
public readonly addonSubscriptionId: string;
```

- *Type:* string

The AddonSubscriptionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesAddonSubscriptionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesConfigurationSetArnComponents <a name="SesConfigurationSetArnComponents" id="@cdk_utils/iam.ses.SesConfigurationSetArnComponents"></a>

Parsed components of a configuration-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesConfigurationSetArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesConfigurationSetArnComponents: ses.SesConfigurationSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesConfigurationSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesConfigurationSetArnComponents.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | The ConfigurationSetName component. |
| <code><a href="#@cdk_utils/iam.ses.SesConfigurationSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesConfigurationSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesConfigurationSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdk_utils/iam.ses.SesConfigurationSetArnComponents.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

The ConfigurationSetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesConfigurationSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesConfigurationSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesConfigurationSetArnProps <a name="SesConfigurationSetArnProps" id="@cdk_utils/iam.ses.SesConfigurationSetArnProps"></a>

Properties for building a configuration-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesConfigurationSetArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesConfigurationSetArnProps: ses.SesConfigurationSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesConfigurationSetArnProps.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | The ConfigurationSetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesConfigurationSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesConfigurationSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesConfigurationSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdk_utils/iam.ses.SesConfigurationSetArnProps.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

The ConfigurationSetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesConfigurationSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesConfigurationSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesConfigurationSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesContactListArnComponents <a name="SesContactListArnComponents" id="@cdk_utils/iam.ses.SesContactListArnComponents"></a>

Parsed components of a contact-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesContactListArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesContactListArnComponents: ses.SesContactListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesContactListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesContactListArnComponents.property.contactListName">contactListName</a></code> | <code>string</code> | The ContactListName component. |
| <code><a href="#@cdk_utils/iam.ses.SesContactListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesContactListArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesContactListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contactListName`<sup>Required</sup> <a name="contactListName" id="@cdk_utils/iam.ses.SesContactListArnComponents.property.contactListName"></a>

```typescript
public readonly contactListName: string;
```

- *Type:* string

The ContactListName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesContactListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesContactListArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesContactListArnProps <a name="SesContactListArnProps" id="@cdk_utils/iam.ses.SesContactListArnProps"></a>

Properties for building a contact-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesContactListArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesContactListArnProps: ses.SesContactListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesContactListArnProps.property.contactListName">contactListName</a></code> | <code>string</code> | The ContactListName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesContactListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesContactListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesContactListArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contactListName`<sup>Required</sup> <a name="contactListName" id="@cdk_utils/iam.ses.SesContactListArnProps.property.contactListName"></a>

```typescript
public readonly contactListName: string;
```

- *Type:* string

The ContactListName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesContactListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesContactListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesContactListArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesCustomVerificationEmailTemplateArnComponents <a name="SesCustomVerificationEmailTemplateArnComponents" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnComponents"></a>

Parsed components of a custom-verification-email-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesCustomVerificationEmailTemplateArnComponents: ses.SesCustomVerificationEmailTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnComponents.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnComponents.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component.

---

### SesCustomVerificationEmailTemplateArnProps <a name="SesCustomVerificationEmailTemplateArnProps" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps"></a>

Properties for building a custom-verification-email-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesCustomVerificationEmailTemplateArnProps: ses.SesCustomVerificationEmailTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesDedicatedIPPoolArnComponents <a name="SesDedicatedIPPoolArnComponents" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnComponents"></a>

Parsed components of a dedicated-ip-pool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesDedicatedIPPoolArnComponents: ses.SesDedicatedIPPoolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesDedicatedIPPoolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesDedicatedIPPoolArnComponents.property.dedicatedIPPool">dedicatedIPPool</a></code> | <code>string</code> | The DedicatedIPPool component. |
| <code><a href="#@cdk_utils/iam.ses.SesDedicatedIPPoolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesDedicatedIPPoolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dedicatedIPPool`<sup>Required</sup> <a name="dedicatedIPPool" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnComponents.property.dedicatedIPPool"></a>

```typescript
public readonly dedicatedIPPool: string;
```

- *Type:* string

The DedicatedIPPool component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesDedicatedIPPoolArnProps <a name="SesDedicatedIPPoolArnProps" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps"></a>

Properties for building a dedicated-ip-pool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesDedicatedIPPoolArnProps: ses.SesDedicatedIPPoolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps.property.dedicatedIPPool">dedicatedIPPool</a></code> | <code>string</code> | The DedicatedIPPool component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dedicatedIPPool`<sup>Required</sup> <a name="dedicatedIPPool" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps.property.dedicatedIPPool"></a>

```typescript
public readonly dedicatedIPPool: string;
```

- *Type:* string

The DedicatedIPPool component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesDeliverabilityTestReportArnComponents <a name="SesDeliverabilityTestReportArnComponents" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnComponents"></a>

Parsed components of a deliverability-test-report ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesDeliverabilityTestReportArnComponents: ses.SesDeliverabilityTestReportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesDeliverabilityTestReportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesDeliverabilityTestReportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesDeliverabilityTestReportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ses.SesDeliverabilityTestReportArnComponents.property.reportId">reportId</a></code> | <code>string</code> | The ReportId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reportId`<sup>Required</sup> <a name="reportId" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnComponents.property.reportId"></a>

```typescript
public readonly reportId: string;
```

- *Type:* string

The ReportId component.

---

### SesDeliverabilityTestReportArnProps <a name="SesDeliverabilityTestReportArnProps" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps"></a>

Properties for building a deliverability-test-report ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesDeliverabilityTestReportArnProps: ses.SesDeliverabilityTestReportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps.property.reportId">reportId</a></code> | <code>string</code> | The ReportId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reportId`<sup>Required</sup> <a name="reportId" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps.property.reportId"></a>

```typescript
public readonly reportId: string;
```

- *Type:* string

The ReportId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesExportJobArnComponents <a name="SesExportJobArnComponents" id="@cdk_utils/iam.ses.SesExportJobArnComponents"></a>

Parsed components of a export-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesExportJobArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesExportJobArnComponents: ses.SesExportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesExportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesExportJobArnComponents.property.exportJobId">exportJobId</a></code> | <code>string</code> | The ExportJobId component. |
| <code><a href="#@cdk_utils/iam.ses.SesExportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesExportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesExportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `exportJobId`<sup>Required</sup> <a name="exportJobId" id="@cdk_utils/iam.ses.SesExportJobArnComponents.property.exportJobId"></a>

```typescript
public readonly exportJobId: string;
```

- *Type:* string

The ExportJobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesExportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesExportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesExportJobArnProps <a name="SesExportJobArnProps" id="@cdk_utils/iam.ses.SesExportJobArnProps"></a>

Properties for building a export-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesExportJobArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesExportJobArnProps: ses.SesExportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesExportJobArnProps.property.exportJobId">exportJobId</a></code> | <code>string</code> | The ExportJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesExportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesExportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesExportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `exportJobId`<sup>Required</sup> <a name="exportJobId" id="@cdk_utils/iam.ses.SesExportJobArnProps.property.exportJobId"></a>

```typescript
public readonly exportJobId: string;
```

- *Type:* string

The ExportJobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesExportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesExportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesExportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesIdentityArnComponents <a name="SesIdentityArnComponents" id="@cdk_utils/iam.ses.SesIdentityArnComponents"></a>

Parsed components of a identity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesIdentityArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesIdentityArnComponents: ses.SesIdentityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesIdentityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesIdentityArnComponents.property.identityName">identityName</a></code> | <code>string</code> | The IdentityName component. |
| <code><a href="#@cdk_utils/iam.ses.SesIdentityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesIdentityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesIdentityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identityName`<sup>Required</sup> <a name="identityName" id="@cdk_utils/iam.ses.SesIdentityArnComponents.property.identityName"></a>

```typescript
public readonly identityName: string;
```

- *Type:* string

The IdentityName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesIdentityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesIdentityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesIdentityArnProps <a name="SesIdentityArnProps" id="@cdk_utils/iam.ses.SesIdentityArnProps"></a>

Properties for building a identity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesIdentityArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesIdentityArnProps: ses.SesIdentityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesIdentityArnProps.property.identityName">identityName</a></code> | <code>string</code> | The IdentityName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesIdentityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesIdentityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesIdentityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identityName`<sup>Required</sup> <a name="identityName" id="@cdk_utils/iam.ses.SesIdentityArnProps.property.identityName"></a>

```typescript
public readonly identityName: string;
```

- *Type:* string

The IdentityName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesIdentityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesIdentityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesIdentityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesImportJobArnComponents <a name="SesImportJobArnComponents" id="@cdk_utils/iam.ses.SesImportJobArnComponents"></a>

Parsed components of a import-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesImportJobArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesImportJobArnComponents: ses.SesImportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesImportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesImportJobArnComponents.property.importJobId">importJobId</a></code> | <code>string</code> | The ImportJobId component. |
| <code><a href="#@cdk_utils/iam.ses.SesImportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesImportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesImportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `importJobId`<sup>Required</sup> <a name="importJobId" id="@cdk_utils/iam.ses.SesImportJobArnComponents.property.importJobId"></a>

```typescript
public readonly importJobId: string;
```

- *Type:* string

The ImportJobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesImportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesImportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesImportJobArnProps <a name="SesImportJobArnProps" id="@cdk_utils/iam.ses.SesImportJobArnProps"></a>

Properties for building a import-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesImportJobArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesImportJobArnProps: ses.SesImportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesImportJobArnProps.property.importJobId">importJobId</a></code> | <code>string</code> | The ImportJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesImportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesImportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesImportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `importJobId`<sup>Required</sup> <a name="importJobId" id="@cdk_utils/iam.ses.SesImportJobArnProps.property.importJobId"></a>

```typescript
public readonly importJobId: string;
```

- *Type:* string

The ImportJobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesImportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesImportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesImportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesMailmanagerAddressListArnComponents <a name="SesMailmanagerAddressListArnComponents" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnComponents"></a>

Parsed components of a mailmanager-address-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerAddressListArnComponents: ses.SesMailmanagerAddressListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerAddressListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerAddressListArnComponents.property.addressListId">addressListId</a></code> | <code>string</code> | The AddressListId component. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerAddressListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerAddressListArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `addressListId`<sup>Required</sup> <a name="addressListId" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnComponents.property.addressListId"></a>

```typescript
public readonly addressListId: string;
```

- *Type:* string

The AddressListId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesMailmanagerAddressListArnProps <a name="SesMailmanagerAddressListArnProps" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps"></a>

Properties for building a mailmanager-address-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerAddressListArnProps: ses.SesMailmanagerAddressListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps.property.addressListId">addressListId</a></code> | <code>string</code> | The AddressListId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `addressListId`<sup>Required</sup> <a name="addressListId" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps.property.addressListId"></a>

```typescript
public readonly addressListId: string;
```

- *Type:* string

The AddressListId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesMailmanagerArchiveArnComponents <a name="SesMailmanagerArchiveArnComponents" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnComponents"></a>

Parsed components of a mailmanager-archive ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerArchiveArnComponents: ses.SesMailmanagerArchiveArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerArchiveArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerArchiveArnComponents.property.archiveId">archiveId</a></code> | <code>string</code> | The ArchiveId component. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerArchiveArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerArchiveArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `archiveId`<sup>Required</sup> <a name="archiveId" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnComponents.property.archiveId"></a>

```typescript
public readonly archiveId: string;
```

- *Type:* string

The ArchiveId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesMailmanagerArchiveArnProps <a name="SesMailmanagerArchiveArnProps" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps"></a>

Properties for building a mailmanager-archive ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerArchiveArnProps: ses.SesMailmanagerArchiveArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps.property.archiveId">archiveId</a></code> | <code>string</code> | The ArchiveId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `archiveId`<sup>Required</sup> <a name="archiveId" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps.property.archiveId"></a>

```typescript
public readonly archiveId: string;
```

- *Type:* string

The ArchiveId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesMailmanagerIngressPointArnComponents <a name="SesMailmanagerIngressPointArnComponents" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnComponents"></a>

Parsed components of a mailmanager-ingress-point ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerIngressPointArnComponents: ses.SesMailmanagerIngressPointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerIngressPointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerIngressPointArnComponents.property.ingressPointId">ingressPointId</a></code> | <code>string</code> | The IngressPointId component. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerIngressPointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerIngressPointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ingressPointId`<sup>Required</sup> <a name="ingressPointId" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnComponents.property.ingressPointId"></a>

```typescript
public readonly ingressPointId: string;
```

- *Type:* string

The IngressPointId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesMailmanagerIngressPointArnProps <a name="SesMailmanagerIngressPointArnProps" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps"></a>

Properties for building a mailmanager-ingress-point ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerIngressPointArnProps: ses.SesMailmanagerIngressPointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps.property.ingressPointId">ingressPointId</a></code> | <code>string</code> | The IngressPointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ingressPointId`<sup>Required</sup> <a name="ingressPointId" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps.property.ingressPointId"></a>

```typescript
public readonly ingressPointId: string;
```

- *Type:* string

The IngressPointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesMailmanagerRuleSetArnComponents <a name="SesMailmanagerRuleSetArnComponents" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnComponents"></a>

Parsed components of a mailmanager-rule-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerRuleSetArnComponents: ses.SesMailmanagerRuleSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerRuleSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerRuleSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerRuleSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerRuleSetArnComponents.property.ruleSetId">ruleSetId</a></code> | <code>string</code> | The RuleSetId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnComponents.property.ruleSetId"></a>

```typescript
public readonly ruleSetId: string;
```

- *Type:* string

The RuleSetId component.

---

### SesMailmanagerRuleSetArnProps <a name="SesMailmanagerRuleSetArnProps" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps"></a>

Properties for building a mailmanager-rule-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerRuleSetArnProps: ses.SesMailmanagerRuleSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps.property.ruleSetId">ruleSetId</a></code> | <code>string</code> | The RuleSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps.property.ruleSetId"></a>

```typescript
public readonly ruleSetId: string;
```

- *Type:* string

The RuleSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesMailmanagerSmtpRelayArnComponents <a name="SesMailmanagerSmtpRelayArnComponents" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnComponents"></a>

Parsed components of a mailmanager-smtp-relay ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerSmtpRelayArnComponents: ses.SesMailmanagerSmtpRelayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnComponents.property.relayId">relayId</a></code> | <code>string</code> | The RelayId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `relayId`<sup>Required</sup> <a name="relayId" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnComponents.property.relayId"></a>

```typescript
public readonly relayId: string;
```

- *Type:* string

The RelayId component.

---

### SesMailmanagerSmtpRelayArnProps <a name="SesMailmanagerSmtpRelayArnProps" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps"></a>

Properties for building a mailmanager-smtp-relay ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerSmtpRelayArnProps: ses.SesMailmanagerSmtpRelayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps.property.relayId">relayId</a></code> | <code>string</code> | The RelayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `relayId`<sup>Required</sup> <a name="relayId" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps.property.relayId"></a>

```typescript
public readonly relayId: string;
```

- *Type:* string

The RelayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesMailmanagerTrafficPolicyArnComponents <a name="SesMailmanagerTrafficPolicyArnComponents" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnComponents"></a>

Parsed components of a mailmanager-traffic-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerTrafficPolicyArnComponents: ses.SesMailmanagerTrafficPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnComponents.property.trafficPolicyId">trafficPolicyId</a></code> | <code>string</code> | The TrafficPolicyId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnComponents.property.trafficPolicyId"></a>

```typescript
public readonly trafficPolicyId: string;
```

- *Type:* string

The TrafficPolicyId component.

---

### SesMailmanagerTrafficPolicyArnProps <a name="SesMailmanagerTrafficPolicyArnProps" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps"></a>

Properties for building a mailmanager-traffic-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMailmanagerTrafficPolicyArnProps: ses.SesMailmanagerTrafficPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps.property.trafficPolicyId">trafficPolicyId</a></code> | <code>string</code> | The TrafficPolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps.property.trafficPolicyId"></a>

```typescript
public readonly trafficPolicyId: string;
```

- *Type:* string

The TrafficPolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesMultiRegionEndpointArnComponents <a name="SesMultiRegionEndpointArnComponents" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnComponents"></a>

Parsed components of a multi-region-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMultiRegionEndpointArnComponents: ses.SesMultiRegionEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMultiRegionEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMultiRegionEndpointArnComponents.property.endpointName">endpointName</a></code> | <code>string</code> | The EndpointName component. |
| <code><a href="#@cdk_utils/iam.ses.SesMultiRegionEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMultiRegionEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnComponents.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

The EndpointName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SesMultiRegionEndpointArnProps <a name="SesMultiRegionEndpointArnProps" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps"></a>

Properties for building a multi-region-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesMultiRegionEndpointArnProps: ses.SesMultiRegionEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps.property.endpointName">endpointName</a></code> | <code>string</code> | The EndpointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

The EndpointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesReputationPolicyArnComponents <a name="SesReputationPolicyArnComponents" id="@cdk_utils/iam.ses.SesReputationPolicyArnComponents"></a>

Parsed components of a reputation-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesReputationPolicyArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesReputationPolicyArnComponents: ses.SesReputationPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesReputationPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesReputationPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesReputationPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ses.SesReputationPolicyArnComponents.property.reputationPolicyName">reputationPolicyName</a></code> | <code>string</code> | The ReputationPolicyName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesReputationPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesReputationPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesReputationPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reputationPolicyName`<sup>Required</sup> <a name="reputationPolicyName" id="@cdk_utils/iam.ses.SesReputationPolicyArnComponents.property.reputationPolicyName"></a>

```typescript
public readonly reputationPolicyName: string;
```

- *Type:* string

The ReputationPolicyName component.

---

### SesReputationPolicyArnProps <a name="SesReputationPolicyArnProps" id="@cdk_utils/iam.ses.SesReputationPolicyArnProps"></a>

Properties for building a reputation-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesReputationPolicyArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesReputationPolicyArnProps: ses.SesReputationPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesReputationPolicyArnProps.property.reputationPolicyName">reputationPolicyName</a></code> | <code>string</code> | The ReputationPolicyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesReputationPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesReputationPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesReputationPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reputationPolicyName`<sup>Required</sup> <a name="reputationPolicyName" id="@cdk_utils/iam.ses.SesReputationPolicyArnProps.property.reputationPolicyName"></a>

```typescript
public readonly reputationPolicyName: string;
```

- *Type:* string

The ReputationPolicyName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesReputationPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesReputationPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesReputationPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesTemplateArnComponents <a name="SesTemplateArnComponents" id="@cdk_utils/iam.ses.SesTemplateArnComponents"></a>

Parsed components of a template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesTemplateArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesTemplateArnComponents: ses.SesTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ses.SesTemplateArnComponents.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.ses.SesTemplateArnComponents.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component.

---

### SesTemplateArnProps <a name="SesTemplateArnProps" id="@cdk_utils/iam.ses.SesTemplateArnProps"></a>

Properties for building a template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesTemplateArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesTemplateArnProps: ses.SesTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesTemplateArnProps.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.ses.SesTemplateArnProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SesTenantArnComponents <a name="SesTenantArnComponents" id="@cdk_utils/iam.ses.SesTenantArnComponents"></a>

Parsed components of a tenant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesTenantArnComponents.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesTenantArnComponents: ses.SesTenantArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesTenantArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesTenantArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesTenantArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ses.SesTenantArnComponents.property.tenantId">tenantId</a></code> | <code>string</code> | The TenantId component. |
| <code><a href="#@cdk_utils/iam.ses.SesTenantArnComponents.property.tenantName">tenantName</a></code> | <code>string</code> | The TenantName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ses.SesTenantArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ses.SesTenantArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ses.SesTenantArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdk_utils/iam.ses.SesTenantArnComponents.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The TenantId component.

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdk_utils/iam.ses.SesTenantArnComponents.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

The TenantName component.

---

### SesTenantArnProps <a name="SesTenantArnProps" id="@cdk_utils/iam.ses.SesTenantArnProps"></a>

Properties for building a tenant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ses.SesTenantArnProps.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

const sesTenantArnProps: ses.SesTenantArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesTenantArnProps.property.tenantId">tenantId</a></code> | <code>string</code> | The TenantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesTenantArnProps.property.tenantName">tenantName</a></code> | <code>string</code> | The TenantName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ses.SesTenantArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ses.SesTenantArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ses.SesTenantArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdk_utils/iam.ses.SesTenantArnProps.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The TenantId component of the ARN.

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdk_utils/iam.ses.SesTenantArnProps.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

The TenantName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ses.SesTenantArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ses.SesTenantArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ses.SesTenantArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SesActions <a name="SesActions" id="@cdk_utils/iam.ses.SesActions"></a>

IAM action constants for the ses service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ses.SesActions.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

new ses.SesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetAccount">actionGetAccount</a></code> | <code>string</code> | [Read] ses:GetAccount. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetAccountSendingEnabled">actionGetAccountSendingEnabled</a></code> | <code>string</code> | [Read] ses:GetAccountSendingEnabled. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetAddonInstance">actionGetAddonInstance</a></code> | <code>string</code> | [Read] ses:GetAddonInstance. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetAddonSubscription">actionGetAddonSubscription</a></code> | <code>string</code> | [Read] ses:GetAddonSubscription. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetAddressList">actionGetAddressList</a></code> | <code>string</code> | [Read] ses:GetAddressList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetAddressListImportJob">actionGetAddressListImportJob</a></code> | <code>string</code> | [Read] ses:GetAddressListImportJob. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetArchive">actionGetArchive</a></code> | <code>string</code> | [Read] ses:GetArchive. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetArchiveExport">actionGetArchiveExport</a></code> | <code>string</code> | [Read] ses:GetArchiveExport. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetArchiveMessage">actionGetArchiveMessage</a></code> | <code>string</code> | [Read] ses:GetArchiveMessage. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetArchiveMessageContent">actionGetArchiveMessageContent</a></code> | <code>string</code> | [Read] ses:GetArchiveMessageContent. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetArchiveSearch">actionGetArchiveSearch</a></code> | <code>string</code> | [Read] ses:GetArchiveSearch. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetArchiveSearchResults">actionGetArchiveSearchResults</a></code> | <code>string</code> | [Read] ses:GetArchiveSearchResults. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetBlacklistReports">actionGetBlacklistReports</a></code> | <code>string</code> | [Read] ses:GetBlacklistReports. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetConfigurationSet">actionGetConfigurationSet</a></code> | <code>string</code> | [Read] ses:GetConfigurationSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetConfigurationSetEventDestinations">actionGetConfigurationSetEventDestinations</a></code> | <code>string</code> | [Read] ses:GetConfigurationSetEventDestinations. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetContact">actionGetContact</a></code> | <code>string</code> | [Read] ses:GetContact. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetContactList">actionGetContactList</a></code> | <code>string</code> | [Read] ses:GetContactList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetCustomVerificationEmailTemplate">actionGetCustomVerificationEmailTemplate</a></code> | <code>string</code> | [Read] ses:GetCustomVerificationEmailTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetDedicatedIp">actionGetDedicatedIp</a></code> | <code>string</code> | [Read] ses:GetDedicatedIp. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetDedicatedIpPool">actionGetDedicatedIpPool</a></code> | <code>string</code> | [Read] ses:GetDedicatedIpPool. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetDedicatedIps">actionGetDedicatedIps</a></code> | <code>string</code> | [Read] ses:GetDedicatedIps. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetDeliverabilityDashboardOptions">actionGetDeliverabilityDashboardOptions</a></code> | <code>string</code> | [Read] ses:GetDeliverabilityDashboardOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetDeliverabilityTestReport">actionGetDeliverabilityTestReport</a></code> | <code>string</code> | [Read] ses:GetDeliverabilityTestReport. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetDomainDeliverabilityCampaign">actionGetDomainDeliverabilityCampaign</a></code> | <code>string</code> | [Read] ses:GetDomainDeliverabilityCampaign. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetDomainStatisticsReport">actionGetDomainStatisticsReport</a></code> | <code>string</code> | [Read] ses:GetDomainStatisticsReport. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetEmailAddressInsights">actionGetEmailAddressInsights</a></code> | <code>string</code> | [Read] ses:GetEmailAddressInsights. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetEmailIdentity">actionGetEmailIdentity</a></code> | <code>string</code> | [Read] ses:GetEmailIdentity. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetEmailIdentityPolicies">actionGetEmailIdentityPolicies</a></code> | <code>string</code> | [Read] ses:GetEmailIdentityPolicies. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetEmailTemplate">actionGetEmailTemplate</a></code> | <code>string</code> | [Read] ses:GetEmailTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetExportJob">actionGetExportJob</a></code> | <code>string</code> | [Read] ses:GetExportJob. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetIdentityDkimAttributes">actionGetIdentityDkimAttributes</a></code> | <code>string</code> | [Read] ses:GetIdentityDkimAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetIdentityMailFromDomainAttributes">actionGetIdentityMailFromDomainAttributes</a></code> | <code>string</code> | [Read] ses:GetIdentityMailFromDomainAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetIdentityNotificationAttributes">actionGetIdentityNotificationAttributes</a></code> | <code>string</code> | [Read] ses:GetIdentityNotificationAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetIdentityPolicies">actionGetIdentityPolicies</a></code> | <code>string</code> | [Read] ses:GetIdentityPolicies. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetIdentityVerificationAttributes">actionGetIdentityVerificationAttributes</a></code> | <code>string</code> | [Read] ses:GetIdentityVerificationAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetImportJob">actionGetImportJob</a></code> | <code>string</code> | [Read] ses:GetImportJob. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetIngressPoint">actionGetIngressPoint</a></code> | <code>string</code> | [Read] ses:GetIngressPoint. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetMemberOfAddressList">actionGetMemberOfAddressList</a></code> | <code>string</code> | [Read] ses:GetMemberOfAddressList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetMessageInsights">actionGetMessageInsights</a></code> | <code>string</code> | [Read] ses:GetMessageInsights. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetMultiRegionEndpoint">actionGetMultiRegionEndpoint</a></code> | <code>string</code> | [Read] ses:GetMultiRegionEndpoint. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetRelay">actionGetRelay</a></code> | <code>string</code> | [Read] ses:GetRelay. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetReputationEntity">actionGetReputationEntity</a></code> | <code>string</code> | [Read] ses:GetReputationEntity. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetRuleSet">actionGetRuleSet</a></code> | <code>string</code> | [Read] ses:GetRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetSendQuota">actionGetSendQuota</a></code> | <code>string</code> | [Read] ses:GetSendQuota. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetSendStatistics">actionGetSendStatistics</a></code> | <code>string</code> | [Read] ses:GetSendStatistics. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetSuppressedDestination">actionGetSuppressedDestination</a></code> | <code>string</code> | [Read] ses:GetSuppressedDestination. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetTemplate">actionGetTemplate</a></code> | <code>string</code> | [Read] ses:GetTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetTenant">actionGetTenant</a></code> | <code>string</code> | [Read] ses:GetTenant. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionGetTrafficPolicy">actionGetTrafficPolicy</a></code> | <code>string</code> | [Read] ses:GetTrafficPolicy. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionSetActiveReceiptRuleSet">actionSetActiveReceiptRuleSet</a></code> | <code>string</code> | [Write] ses:SetActiveReceiptRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionSetIdentityDkimEnabled">actionSetIdentityDkimEnabled</a></code> | <code>string</code> | [Write] ses:SetIdentityDkimEnabled. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionSetIdentityFeedbackForwardingEnabled">actionSetIdentityFeedbackForwardingEnabled</a></code> | <code>string</code> | [Write] ses:SetIdentityFeedbackForwardingEnabled. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionSetIdentityHeadersInNotificationsEnabled">actionSetIdentityHeadersInNotificationsEnabled</a></code> | <code>string</code> | [Write] ses:SetIdentityHeadersInNotificationsEnabled. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionSetIdentityMailFromDomain">actionSetIdentityMailFromDomain</a></code> | <code>string</code> | [Write] ses:SetIdentityMailFromDomain. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionSetIdentityNotificationTopic">actionSetIdentityNotificationTopic</a></code> | <code>string</code> | [Write] ses:SetIdentityNotificationTopic. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.actionSetReceiptRulePosition">actionSetReceiptRulePosition</a></code> | <code>string</code> | [Write] ses:SetReceiptRulePosition. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] ses:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.BatchGetMetricData">BatchGetMetricData</a></code> | <code>string</code> | [Read] ses:BatchGetMetricData. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CancelExportJob">CancelExportJob</a></code> | <code>string</code> | [Write] ses:CancelExportJob. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CloneReceiptRuleSet">CloneReceiptRuleSet</a></code> | <code>string</code> | [Write] ses:CloneReceiptRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateAddonInstance">CreateAddonInstance</a></code> | <code>string</code> | [Write] ses:CreateAddonInstance. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateAddonSubscription">CreateAddonSubscription</a></code> | <code>string</code> | [Write] ses:CreateAddonSubscription. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateAddressList">CreateAddressList</a></code> | <code>string</code> | [Write] ses:CreateAddressList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateAddressListImportJob">CreateAddressListImportJob</a></code> | <code>string</code> | [Write] ses:CreateAddressListImportJob. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateArchive">CreateArchive</a></code> | <code>string</code> | [Write] ses:CreateArchive. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateConfigurationSet">CreateConfigurationSet</a></code> | <code>string</code> | [Write] ses:CreateConfigurationSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateConfigurationSetEventDestination">CreateConfigurationSetEventDestination</a></code> | <code>string</code> | [Write] ses:CreateConfigurationSetEventDestination. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateConfigurationSetTrackingOptions">CreateConfigurationSetTrackingOptions</a></code> | <code>string</code> | [Write] ses:CreateConfigurationSetTrackingOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateContact">CreateContact</a></code> | <code>string</code> | [Write] ses:CreateContact. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateContactList">CreateContactList</a></code> | <code>string</code> | [Write] ses:CreateContactList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateCustomVerificationEmailTemplate">CreateCustomVerificationEmailTemplate</a></code> | <code>string</code> | [Write] ses:CreateCustomVerificationEmailTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateDedicatedIpPool">CreateDedicatedIpPool</a></code> | <code>string</code> | [Write] ses:CreateDedicatedIpPool. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateDeliverabilityTestReport">CreateDeliverabilityTestReport</a></code> | <code>string</code> | [Write] ses:CreateDeliverabilityTestReport. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateEmailIdentity">CreateEmailIdentity</a></code> | <code>string</code> | [Write] ses:CreateEmailIdentity. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateEmailIdentityPolicy">CreateEmailIdentityPolicy</a></code> | <code>string</code> | [PermissionManagement] ses:CreateEmailIdentityPolicy. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateEmailTemplate">CreateEmailTemplate</a></code> | <code>string</code> | [Write] ses:CreateEmailTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateExportJob">CreateExportJob</a></code> | <code>string</code> | [Write] ses:CreateExportJob. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateImportJob">CreateImportJob</a></code> | <code>string</code> | [Write] ses:CreateImportJob. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateIngressPoint">CreateIngressPoint</a></code> | <code>string</code> | [Write] ses:CreateIngressPoint. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateMultiRegionEndpoint">CreateMultiRegionEndpoint</a></code> | <code>string</code> | [Write] ses:CreateMultiRegionEndpoint. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateReceiptFilter">CreateReceiptFilter</a></code> | <code>string</code> | [Write] ses:CreateReceiptFilter. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateReceiptRule">CreateReceiptRule</a></code> | <code>string</code> | [Write] ses:CreateReceiptRule. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateReceiptRuleSet">CreateReceiptRuleSet</a></code> | <code>string</code> | [Write] ses:CreateReceiptRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateRelay">CreateRelay</a></code> | <code>string</code> | [Write] ses:CreateRelay. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateRuleSet">CreateRuleSet</a></code> | <code>string</code> | [Write] ses:CreateRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateTemplate">CreateTemplate</a></code> | <code>string</code> | [Write] ses:CreateTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateTenant">CreateTenant</a></code> | <code>string</code> | [Write] ses:CreateTenant. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateTenantResourceAssociation">CreateTenantResourceAssociation</a></code> | <code>string</code> | [Write] ses:CreateTenantResourceAssociation. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.CreateTrafficPolicy">CreateTrafficPolicy</a></code> | <code>string</code> | [Write] ses:CreateTrafficPolicy. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteAddonInstance">DeleteAddonInstance</a></code> | <code>string</code> | [Write] ses:DeleteAddonInstance. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteAddonSubscription">DeleteAddonSubscription</a></code> | <code>string</code> | [Write] ses:DeleteAddonSubscription. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteAddressList">DeleteAddressList</a></code> | <code>string</code> | [Write] ses:DeleteAddressList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteArchive">DeleteArchive</a></code> | <code>string</code> | [Write] ses:DeleteArchive. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteConfigurationSet">DeleteConfigurationSet</a></code> | <code>string</code> | [Write] ses:DeleteConfigurationSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteConfigurationSetEventDestination">DeleteConfigurationSetEventDestination</a></code> | <code>string</code> | [Write] ses:DeleteConfigurationSetEventDestination. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteConfigurationSetTrackingOptions">DeleteConfigurationSetTrackingOptions</a></code> | <code>string</code> | [Write] ses:DeleteConfigurationSetTrackingOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteContact">DeleteContact</a></code> | <code>string</code> | [Write] ses:DeleteContact. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteContactList">DeleteContactList</a></code> | <code>string</code> | [Write] ses:DeleteContactList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteCustomVerificationEmailTemplate">DeleteCustomVerificationEmailTemplate</a></code> | <code>string</code> | [Write] ses:DeleteCustomVerificationEmailTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteDedicatedIpPool">DeleteDedicatedIpPool</a></code> | <code>string</code> | [Write] ses:DeleteDedicatedIpPool. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteEmailIdentity">DeleteEmailIdentity</a></code> | <code>string</code> | [Write] ses:DeleteEmailIdentity. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteEmailIdentityPolicy">DeleteEmailIdentityPolicy</a></code> | <code>string</code> | [PermissionManagement] ses:DeleteEmailIdentityPolicy. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteEmailTemplate">DeleteEmailTemplate</a></code> | <code>string</code> | [Write] ses:DeleteEmailTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteIdentity">DeleteIdentity</a></code> | <code>string</code> | [Write] ses:DeleteIdentity. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteIdentityPolicy">DeleteIdentityPolicy</a></code> | <code>string</code> | [PermissionManagement] ses:DeleteIdentityPolicy. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteIngressPoint">DeleteIngressPoint</a></code> | <code>string</code> | [Write] ses:DeleteIngressPoint. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteMultiRegionEndpoint">DeleteMultiRegionEndpoint</a></code> | <code>string</code> | [Write] ses:DeleteMultiRegionEndpoint. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteReceiptFilter">DeleteReceiptFilter</a></code> | <code>string</code> | [Write] ses:DeleteReceiptFilter. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteReceiptRule">DeleteReceiptRule</a></code> | <code>string</code> | [Write] ses:DeleteReceiptRule. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteReceiptRuleSet">DeleteReceiptRuleSet</a></code> | <code>string</code> | [Write] ses:DeleteReceiptRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteRelay">DeleteRelay</a></code> | <code>string</code> | [Write] ses:DeleteRelay. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteRuleSet">DeleteRuleSet</a></code> | <code>string</code> | [Write] ses:DeleteRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteSuppressedDestination">DeleteSuppressedDestination</a></code> | <code>string</code> | [Write] ses:DeleteSuppressedDestination. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string</code> | [Write] ses:DeleteTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteTenant">DeleteTenant</a></code> | <code>string</code> | [Write] ses:DeleteTenant. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteTenantResourceAssociation">DeleteTenantResourceAssociation</a></code> | <code>string</code> | [Write] ses:DeleteTenantResourceAssociation. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteTrafficPolicy">DeleteTrafficPolicy</a></code> | <code>string</code> | [Write] ses:DeleteTrafficPolicy. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeleteVerifiedEmailAddress">DeleteVerifiedEmailAddress</a></code> | <code>string</code> | [Write] ses:DeleteVerifiedEmailAddress. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DeregisterMemberFromAddressList">DeregisterMemberFromAddressList</a></code> | <code>string</code> | [Write] ses:DeregisterMemberFromAddressList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DescribeActiveReceiptRuleSet">DescribeActiveReceiptRuleSet</a></code> | <code>string</code> | [Read] ses:DescribeActiveReceiptRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DescribeConfigurationSet">DescribeConfigurationSet</a></code> | <code>string</code> | [Read] ses:DescribeConfigurationSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DescribeReceiptRule">DescribeReceiptRule</a></code> | <code>string</code> | [Read] ses:DescribeReceiptRule. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.DescribeReceiptRuleSet">DescribeReceiptRuleSet</a></code> | <code>string</code> | [Read] ses:DescribeReceiptRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListAddonInstances">ListAddonInstances</a></code> | <code>string</code> | [List] ses:ListAddonInstances. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListAddonSubscriptions">ListAddonSubscriptions</a></code> | <code>string</code> | [List] ses:ListAddonSubscriptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListAddressListImportJobs">ListAddressListImportJobs</a></code> | <code>string</code> | [List] ses:ListAddressListImportJobs. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListAddressLists">ListAddressLists</a></code> | <code>string</code> | [List] ses:ListAddressLists. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListArchiveExports">ListArchiveExports</a></code> | <code>string</code> | [List] ses:ListArchiveExports. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListArchives">ListArchives</a></code> | <code>string</code> | [List] ses:ListArchives. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListArchiveSearches">ListArchiveSearches</a></code> | <code>string</code> | [List] ses:ListArchiveSearches. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListConfigurationSets">ListConfigurationSets</a></code> | <code>string</code> | [List] ses:ListConfigurationSets. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListContactLists">ListContactLists</a></code> | <code>string</code> | [List] ses:ListContactLists. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListContacts">ListContacts</a></code> | <code>string</code> | [List] ses:ListContacts. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListCustomVerificationEmailTemplates">ListCustomVerificationEmailTemplates</a></code> | <code>string</code> | [List] ses:ListCustomVerificationEmailTemplates. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListDedicatedIpPools">ListDedicatedIpPools</a></code> | <code>string</code> | [List] ses:ListDedicatedIpPools. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListDeliverabilityTestReports">ListDeliverabilityTestReports</a></code> | <code>string</code> | [List] ses:ListDeliverabilityTestReports. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListDomainDeliverabilityCampaigns">ListDomainDeliverabilityCampaigns</a></code> | <code>string</code> | [Read] ses:ListDomainDeliverabilityCampaigns. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListEmailIdentities">ListEmailIdentities</a></code> | <code>string</code> | [List] ses:ListEmailIdentities. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListEmailTemplates">ListEmailTemplates</a></code> | <code>string</code> | [List] ses:ListEmailTemplates. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListExportJobs">ListExportJobs</a></code> | <code>string</code> | [List] ses:ListExportJobs. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListIdentities">ListIdentities</a></code> | <code>string</code> | [List] ses:ListIdentities. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListIdentityPolicies">ListIdentityPolicies</a></code> | <code>string</code> | [List] ses:ListIdentityPolicies. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListImportJobs">ListImportJobs</a></code> | <code>string</code> | [List] ses:ListImportJobs. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListIngressPoints">ListIngressPoints</a></code> | <code>string</code> | [List] ses:ListIngressPoints. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListMembersOfAddressList">ListMembersOfAddressList</a></code> | <code>string</code> | [List] ses:ListMembersOfAddressList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListMultiRegionEndpoints">ListMultiRegionEndpoints</a></code> | <code>string</code> | [List] ses:ListMultiRegionEndpoints. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListReceiptFilters">ListReceiptFilters</a></code> | <code>string</code> | [Read] ses:ListReceiptFilters. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListReceiptRuleSets">ListReceiptRuleSets</a></code> | <code>string</code> | [Read] ses:ListReceiptRuleSets. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListRecommendations">ListRecommendations</a></code> | <code>string</code> | [Read] ses:ListRecommendations. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListRelays">ListRelays</a></code> | <code>string</code> | [List] ses:ListRelays. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListReputationEntities">ListReputationEntities</a></code> | <code>string</code> | [List] ses:ListReputationEntities. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListResourceTenants">ListResourceTenants</a></code> | <code>string</code> | [List] ses:ListResourceTenants. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListRuleSets">ListRuleSets</a></code> | <code>string</code> | [List] ses:ListRuleSets. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListSuppressedDestinations">ListSuppressedDestinations</a></code> | <code>string</code> | [Read] ses:ListSuppressedDestinations. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ses:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListTemplates">ListTemplates</a></code> | <code>string</code> | [List] ses:ListTemplates. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListTenantResources">ListTenantResources</a></code> | <code>string</code> | [List] ses:ListTenantResources. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListTenants">ListTenants</a></code> | <code>string</code> | [List] ses:ListTenants. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListTrafficPolicies">ListTrafficPolicies</a></code> | <code>string</code> | [List] ses:ListTrafficPolicies. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ListVerifiedEmailAddresses">ListVerifiedEmailAddresses</a></code> | <code>string</code> | [Read] ses:ListVerifiedEmailAddresses. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutAccountDedicatedIpWarmupAttributes">PutAccountDedicatedIpWarmupAttributes</a></code> | <code>string</code> | [Write] ses:PutAccountDedicatedIpWarmupAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutAccountDetails">PutAccountDetails</a></code> | <code>string</code> | [Write] ses:PutAccountDetails. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutAccountPricingAttributes">PutAccountPricingAttributes</a></code> | <code>string</code> | [Write] ses:PutAccountPricingAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutAccountSendingAttributes">PutAccountSendingAttributes</a></code> | <code>string</code> | [Write] ses:PutAccountSendingAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutAccountSuppressionAttributes">PutAccountSuppressionAttributes</a></code> | <code>string</code> | [Write] ses:PutAccountSuppressionAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutAccountVdmAttributes">PutAccountVdmAttributes</a></code> | <code>string</code> | [Write] ses:PutAccountVdmAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetArchivingOptions">PutConfigurationSetArchivingOptions</a></code> | <code>string</code> | [Write] ses:PutConfigurationSetArchivingOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetDeliveryOptions">PutConfigurationSetDeliveryOptions</a></code> | <code>string</code> | [Write] ses:PutConfigurationSetDeliveryOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetReputationOptions">PutConfigurationSetReputationOptions</a></code> | <code>string</code> | [Write] ses:PutConfigurationSetReputationOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetSendingOptions">PutConfigurationSetSendingOptions</a></code> | <code>string</code> | [Write] ses:PutConfigurationSetSendingOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetSuppressionOptions">PutConfigurationSetSuppressionOptions</a></code> | <code>string</code> | [Write] ses:PutConfigurationSetSuppressionOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetTrackingOptions">PutConfigurationSetTrackingOptions</a></code> | <code>string</code> | [Write] ses:PutConfigurationSetTrackingOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetVdmOptions">PutConfigurationSetVdmOptions</a></code> | <code>string</code> | [Write] ses:PutConfigurationSetVdmOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutDedicatedIpInPool">PutDedicatedIpInPool</a></code> | <code>string</code> | [Write] ses:PutDedicatedIpInPool. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutDedicatedIpPoolScalingAttributes">PutDedicatedIpPoolScalingAttributes</a></code> | <code>string</code> | [Write] ses:PutDedicatedIpPoolScalingAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutDedicatedIpWarmupAttributes">PutDedicatedIpWarmupAttributes</a></code> | <code>string</code> | [Write] ses:PutDedicatedIpWarmupAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutDeliverabilityDashboardOption">PutDeliverabilityDashboardOption</a></code> | <code>string</code> | [Write] ses:PutDeliverabilityDashboardOption. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutEmailIdentityConfigurationSetAttributes">PutEmailIdentityConfigurationSetAttributes</a></code> | <code>string</code> | [Write] ses:PutEmailIdentityConfigurationSetAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutEmailIdentityDkimAttributes">PutEmailIdentityDkimAttributes</a></code> | <code>string</code> | [Write] ses:PutEmailIdentityDkimAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutEmailIdentityDkimSigningAttributes">PutEmailIdentityDkimSigningAttributes</a></code> | <code>string</code> | [Write] ses:PutEmailIdentityDkimSigningAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutEmailIdentityFeedbackAttributes">PutEmailIdentityFeedbackAttributes</a></code> | <code>string</code> | [Write] ses:PutEmailIdentityFeedbackAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutEmailIdentityMailFromAttributes">PutEmailIdentityMailFromAttributes</a></code> | <code>string</code> | [Write] ses:PutEmailIdentityMailFromAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutIdentityPolicy">PutIdentityPolicy</a></code> | <code>string</code> | [PermissionManagement] ses:PutIdentityPolicy. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutSuppressedDestination">PutSuppressedDestination</a></code> | <code>string</code> | [Write] ses:PutSuppressedDestination. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.PutTenantSuppressionAttributes">PutTenantSuppressionAttributes</a></code> | <code>string</code> | [Write] ses:PutTenantSuppressionAttributes. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.RegisterMemberToAddressList">RegisterMemberToAddressList</a></code> | <code>string</code> | [Write] ses:RegisterMemberToAddressList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ReorderReceiptRuleSet">ReorderReceiptRuleSet</a></code> | <code>string</code> | [Write] ses:ReorderReceiptRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.ReplicateEmailIdentityDkimSigningKey">ReplicateEmailIdentityDkimSigningKey</a></code> | <code>string</code> | [PermissionManagement] ses:ReplicateEmailIdentityDkimSigningKey. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.SendBounce">SendBounce</a></code> | <code>string</code> | [Write] ses:SendBounce. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.SendBulkEmail">SendBulkEmail</a></code> | <code>string</code> | [Write] ses:SendBulkEmail. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.SendBulkTemplatedEmail">SendBulkTemplatedEmail</a></code> | <code>string</code> | [Write] ses:SendBulkTemplatedEmail. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.SendCustomVerificationEmail">SendCustomVerificationEmail</a></code> | <code>string</code> | [Write] ses:SendCustomVerificationEmail. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.SendEmail">SendEmail</a></code> | <code>string</code> | [Write] ses:SendEmail. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.SendRawEmail">SendRawEmail</a></code> | <code>string</code> | [Write] ses:SendRawEmail. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.SendTemplatedEmail">SendTemplatedEmail</a></code> | <code>string</code> | [Write] ses:SendTemplatedEmail. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.StartAddressListImportJob">StartAddressListImportJob</a></code> | <code>string</code> | [Write] ses:StartAddressListImportJob. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.StartArchiveExport">StartArchiveExport</a></code> | <code>string</code> | [Write] ses:StartArchiveExport. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.StartArchiveSearch">StartArchiveSearch</a></code> | <code>string</code> | [Write] ses:StartArchiveSearch. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.StopAddressListImportJob">StopAddressListImportJob</a></code> | <code>string</code> | [Write] ses:StopAddressListImportJob. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.StopArchiveExport">StopArchiveExport</a></code> | <code>string</code> | [Write] ses:StopArchiveExport. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.StopArchiveSearch">StopArchiveSearch</a></code> | <code>string</code> | [Write] ses:StopArchiveSearch. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ses:TagResource. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.TestRenderEmailTemplate">TestRenderEmailTemplate</a></code> | <code>string</code> | [Write] ses:TestRenderEmailTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.TestRenderTemplate">TestRenderTemplate</a></code> | <code>string</code> | [Write] ses:TestRenderTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ses:UntagResource. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateAccountSendingEnabled">UpdateAccountSendingEnabled</a></code> | <code>string</code> | [Write] ses:UpdateAccountSendingEnabled. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateArchive">UpdateArchive</a></code> | <code>string</code> | [Write] ses:UpdateArchive. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateConfigurationSetEventDestination">UpdateConfigurationSetEventDestination</a></code> | <code>string</code> | [Write] ses:UpdateConfigurationSetEventDestination. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateConfigurationSetReputationMetricsEnabled">UpdateConfigurationSetReputationMetricsEnabled</a></code> | <code>string</code> | [Write] ses:UpdateConfigurationSetReputationMetricsEnabled. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateConfigurationSetSendingEnabled">UpdateConfigurationSetSendingEnabled</a></code> | <code>string</code> | [Write] ses:UpdateConfigurationSetSendingEnabled. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateConfigurationSetTrackingOptions">UpdateConfigurationSetTrackingOptions</a></code> | <code>string</code> | [Write] ses:UpdateConfigurationSetTrackingOptions. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateContact">UpdateContact</a></code> | <code>string</code> | [Write] ses:UpdateContact. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateContactList">UpdateContactList</a></code> | <code>string</code> | [Write] ses:UpdateContactList. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateCustomVerificationEmailTemplate">UpdateCustomVerificationEmailTemplate</a></code> | <code>string</code> | [Write] ses:UpdateCustomVerificationEmailTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateEmailIdentityPolicy">UpdateEmailIdentityPolicy</a></code> | <code>string</code> | [PermissionManagement] ses:UpdateEmailIdentityPolicy. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateEmailTemplate">UpdateEmailTemplate</a></code> | <code>string</code> | [Write] ses:UpdateEmailTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateIngressPoint">UpdateIngressPoint</a></code> | <code>string</code> | [Write] ses:UpdateIngressPoint. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateReceiptRule">UpdateReceiptRule</a></code> | <code>string</code> | [Write] ses:UpdateReceiptRule. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateRelay">UpdateRelay</a></code> | <code>string</code> | [Write] ses:UpdateRelay. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateReputationEntityCustomerManagedStatus">UpdateReputationEntityCustomerManagedStatus</a></code> | <code>string</code> | [Write] ses:UpdateReputationEntityCustomerManagedStatus. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateReputationEntityPolicy">UpdateReputationEntityPolicy</a></code> | <code>string</code> | [Write] ses:UpdateReputationEntityPolicy. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateRuleSet">UpdateRuleSet</a></code> | <code>string</code> | [Write] ses:UpdateRuleSet. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string</code> | [Write] ses:UpdateTemplate. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.UpdateTrafficPolicy">UpdateTrafficPolicy</a></code> | <code>string</code> | [Write] ses:UpdateTrafficPolicy. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.VerifyDomainDkim">VerifyDomainDkim</a></code> | <code>string</code> | [Write] ses:VerifyDomainDkim. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.VerifyDomainIdentity">VerifyDomainIdentity</a></code> | <code>string</code> | [Write] ses:VerifyDomainIdentity. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.VerifyEmailAddress">VerifyEmailAddress</a></code> | <code>string</code> | [Write] ses:VerifyEmailAddress. |
| <code><a href="#@cdk_utils/iam.ses.SesActions.property.VerifyEmailIdentity">VerifyEmailIdentity</a></code> | <code>string</code> | [Write] ses:VerifyEmailIdentity. |

---

##### `actionGetAccount`<sup>Required</sup> <a name="actionGetAccount" id="@cdk_utils/iam.ses.SesActions.property.actionGetAccount"></a>

```typescript
public readonly actionGetAccount: string;
```

- *Type:* string

[Read] ses:GetAccount.

---

##### `actionGetAccountSendingEnabled`<sup>Required</sup> <a name="actionGetAccountSendingEnabled" id="@cdk_utils/iam.ses.SesActions.property.actionGetAccountSendingEnabled"></a>

```typescript
public readonly actionGetAccountSendingEnabled: string;
```

- *Type:* string

[Read] ses:GetAccountSendingEnabled.

---

##### `actionGetAddonInstance`<sup>Required</sup> <a name="actionGetAddonInstance" id="@cdk_utils/iam.ses.SesActions.property.actionGetAddonInstance"></a>

```typescript
public readonly actionGetAddonInstance: string;
```

- *Type:* string

[Read] ses:GetAddonInstance.

---

##### `actionGetAddonSubscription`<sup>Required</sup> <a name="actionGetAddonSubscription" id="@cdk_utils/iam.ses.SesActions.property.actionGetAddonSubscription"></a>

```typescript
public readonly actionGetAddonSubscription: string;
```

- *Type:* string

[Read] ses:GetAddonSubscription.

---

##### `actionGetAddressList`<sup>Required</sup> <a name="actionGetAddressList" id="@cdk_utils/iam.ses.SesActions.property.actionGetAddressList"></a>

```typescript
public readonly actionGetAddressList: string;
```

- *Type:* string

[Read] ses:GetAddressList.

---

##### `actionGetAddressListImportJob`<sup>Required</sup> <a name="actionGetAddressListImportJob" id="@cdk_utils/iam.ses.SesActions.property.actionGetAddressListImportJob"></a>

```typescript
public readonly actionGetAddressListImportJob: string;
```

- *Type:* string

[Read] ses:GetAddressListImportJob.

---

##### `actionGetArchive`<sup>Required</sup> <a name="actionGetArchive" id="@cdk_utils/iam.ses.SesActions.property.actionGetArchive"></a>

```typescript
public readonly actionGetArchive: string;
```

- *Type:* string

[Read] ses:GetArchive.

---

##### `actionGetArchiveExport`<sup>Required</sup> <a name="actionGetArchiveExport" id="@cdk_utils/iam.ses.SesActions.property.actionGetArchiveExport"></a>

```typescript
public readonly actionGetArchiveExport: string;
```

- *Type:* string

[Read] ses:GetArchiveExport.

---

##### `actionGetArchiveMessage`<sup>Required</sup> <a name="actionGetArchiveMessage" id="@cdk_utils/iam.ses.SesActions.property.actionGetArchiveMessage"></a>

```typescript
public readonly actionGetArchiveMessage: string;
```

- *Type:* string

[Read] ses:GetArchiveMessage.

---

##### `actionGetArchiveMessageContent`<sup>Required</sup> <a name="actionGetArchiveMessageContent" id="@cdk_utils/iam.ses.SesActions.property.actionGetArchiveMessageContent"></a>

```typescript
public readonly actionGetArchiveMessageContent: string;
```

- *Type:* string

[Read] ses:GetArchiveMessageContent.

---

##### `actionGetArchiveSearch`<sup>Required</sup> <a name="actionGetArchiveSearch" id="@cdk_utils/iam.ses.SesActions.property.actionGetArchiveSearch"></a>

```typescript
public readonly actionGetArchiveSearch: string;
```

- *Type:* string

[Read] ses:GetArchiveSearch.

---

##### `actionGetArchiveSearchResults`<sup>Required</sup> <a name="actionGetArchiveSearchResults" id="@cdk_utils/iam.ses.SesActions.property.actionGetArchiveSearchResults"></a>

```typescript
public readonly actionGetArchiveSearchResults: string;
```

- *Type:* string

[Read] ses:GetArchiveSearchResults.

---

##### `actionGetBlacklistReports`<sup>Required</sup> <a name="actionGetBlacklistReports" id="@cdk_utils/iam.ses.SesActions.property.actionGetBlacklistReports"></a>

```typescript
public readonly actionGetBlacklistReports: string;
```

- *Type:* string

[Read] ses:GetBlacklistReports.

---

##### `actionGetConfigurationSet`<sup>Required</sup> <a name="actionGetConfigurationSet" id="@cdk_utils/iam.ses.SesActions.property.actionGetConfigurationSet"></a>

```typescript
public readonly actionGetConfigurationSet: string;
```

- *Type:* string

[Read] ses:GetConfigurationSet.

---

##### `actionGetConfigurationSetEventDestinations`<sup>Required</sup> <a name="actionGetConfigurationSetEventDestinations" id="@cdk_utils/iam.ses.SesActions.property.actionGetConfigurationSetEventDestinations"></a>

```typescript
public readonly actionGetConfigurationSetEventDestinations: string;
```

- *Type:* string

[Read] ses:GetConfigurationSetEventDestinations.

---

##### `actionGetContact`<sup>Required</sup> <a name="actionGetContact" id="@cdk_utils/iam.ses.SesActions.property.actionGetContact"></a>

```typescript
public readonly actionGetContact: string;
```

- *Type:* string

[Read] ses:GetContact.

---

##### `actionGetContactList`<sup>Required</sup> <a name="actionGetContactList" id="@cdk_utils/iam.ses.SesActions.property.actionGetContactList"></a>

```typescript
public readonly actionGetContactList: string;
```

- *Type:* string

[Read] ses:GetContactList.

---

##### `actionGetCustomVerificationEmailTemplate`<sup>Required</sup> <a name="actionGetCustomVerificationEmailTemplate" id="@cdk_utils/iam.ses.SesActions.property.actionGetCustomVerificationEmailTemplate"></a>

```typescript
public readonly actionGetCustomVerificationEmailTemplate: string;
```

- *Type:* string

[Read] ses:GetCustomVerificationEmailTemplate.

---

##### `actionGetDedicatedIp`<sup>Required</sup> <a name="actionGetDedicatedIp" id="@cdk_utils/iam.ses.SesActions.property.actionGetDedicatedIp"></a>

```typescript
public readonly actionGetDedicatedIp: string;
```

- *Type:* string

[Read] ses:GetDedicatedIp.

---

##### `actionGetDedicatedIpPool`<sup>Required</sup> <a name="actionGetDedicatedIpPool" id="@cdk_utils/iam.ses.SesActions.property.actionGetDedicatedIpPool"></a>

```typescript
public readonly actionGetDedicatedIpPool: string;
```

- *Type:* string

[Read] ses:GetDedicatedIpPool.

---

##### `actionGetDedicatedIps`<sup>Required</sup> <a name="actionGetDedicatedIps" id="@cdk_utils/iam.ses.SesActions.property.actionGetDedicatedIps"></a>

```typescript
public readonly actionGetDedicatedIps: string;
```

- *Type:* string

[Read] ses:GetDedicatedIps.

---

##### `actionGetDeliverabilityDashboardOptions`<sup>Required</sup> <a name="actionGetDeliverabilityDashboardOptions" id="@cdk_utils/iam.ses.SesActions.property.actionGetDeliverabilityDashboardOptions"></a>

```typescript
public readonly actionGetDeliverabilityDashboardOptions: string;
```

- *Type:* string

[Read] ses:GetDeliverabilityDashboardOptions.

---

##### `actionGetDeliverabilityTestReport`<sup>Required</sup> <a name="actionGetDeliverabilityTestReport" id="@cdk_utils/iam.ses.SesActions.property.actionGetDeliverabilityTestReport"></a>

```typescript
public readonly actionGetDeliverabilityTestReport: string;
```

- *Type:* string

[Read] ses:GetDeliverabilityTestReport.

---

##### `actionGetDomainDeliverabilityCampaign`<sup>Required</sup> <a name="actionGetDomainDeliverabilityCampaign" id="@cdk_utils/iam.ses.SesActions.property.actionGetDomainDeliverabilityCampaign"></a>

```typescript
public readonly actionGetDomainDeliverabilityCampaign: string;
```

- *Type:* string

[Read] ses:GetDomainDeliverabilityCampaign.

---

##### `actionGetDomainStatisticsReport`<sup>Required</sup> <a name="actionGetDomainStatisticsReport" id="@cdk_utils/iam.ses.SesActions.property.actionGetDomainStatisticsReport"></a>

```typescript
public readonly actionGetDomainStatisticsReport: string;
```

- *Type:* string

[Read] ses:GetDomainStatisticsReport.

---

##### `actionGetEmailAddressInsights`<sup>Required</sup> <a name="actionGetEmailAddressInsights" id="@cdk_utils/iam.ses.SesActions.property.actionGetEmailAddressInsights"></a>

```typescript
public readonly actionGetEmailAddressInsights: string;
```

- *Type:* string

[Read] ses:GetEmailAddressInsights.

---

##### `actionGetEmailIdentity`<sup>Required</sup> <a name="actionGetEmailIdentity" id="@cdk_utils/iam.ses.SesActions.property.actionGetEmailIdentity"></a>

```typescript
public readonly actionGetEmailIdentity: string;
```

- *Type:* string

[Read] ses:GetEmailIdentity.

---

##### `actionGetEmailIdentityPolicies`<sup>Required</sup> <a name="actionGetEmailIdentityPolicies" id="@cdk_utils/iam.ses.SesActions.property.actionGetEmailIdentityPolicies"></a>

```typescript
public readonly actionGetEmailIdentityPolicies: string;
```

- *Type:* string

[Read] ses:GetEmailIdentityPolicies.

---

##### `actionGetEmailTemplate`<sup>Required</sup> <a name="actionGetEmailTemplate" id="@cdk_utils/iam.ses.SesActions.property.actionGetEmailTemplate"></a>

```typescript
public readonly actionGetEmailTemplate: string;
```

- *Type:* string

[Read] ses:GetEmailTemplate.

---

##### `actionGetExportJob`<sup>Required</sup> <a name="actionGetExportJob" id="@cdk_utils/iam.ses.SesActions.property.actionGetExportJob"></a>

```typescript
public readonly actionGetExportJob: string;
```

- *Type:* string

[Read] ses:GetExportJob.

---

##### `actionGetIdentityDkimAttributes`<sup>Required</sup> <a name="actionGetIdentityDkimAttributes" id="@cdk_utils/iam.ses.SesActions.property.actionGetIdentityDkimAttributes"></a>

```typescript
public readonly actionGetIdentityDkimAttributes: string;
```

- *Type:* string

[Read] ses:GetIdentityDkimAttributes.

---

##### `actionGetIdentityMailFromDomainAttributes`<sup>Required</sup> <a name="actionGetIdentityMailFromDomainAttributes" id="@cdk_utils/iam.ses.SesActions.property.actionGetIdentityMailFromDomainAttributes"></a>

```typescript
public readonly actionGetIdentityMailFromDomainAttributes: string;
```

- *Type:* string

[Read] ses:GetIdentityMailFromDomainAttributes.

---

##### `actionGetIdentityNotificationAttributes`<sup>Required</sup> <a name="actionGetIdentityNotificationAttributes" id="@cdk_utils/iam.ses.SesActions.property.actionGetIdentityNotificationAttributes"></a>

```typescript
public readonly actionGetIdentityNotificationAttributes: string;
```

- *Type:* string

[Read] ses:GetIdentityNotificationAttributes.

---

##### `actionGetIdentityPolicies`<sup>Required</sup> <a name="actionGetIdentityPolicies" id="@cdk_utils/iam.ses.SesActions.property.actionGetIdentityPolicies"></a>

```typescript
public readonly actionGetIdentityPolicies: string;
```

- *Type:* string

[Read] ses:GetIdentityPolicies.

---

##### `actionGetIdentityVerificationAttributes`<sup>Required</sup> <a name="actionGetIdentityVerificationAttributes" id="@cdk_utils/iam.ses.SesActions.property.actionGetIdentityVerificationAttributes"></a>

```typescript
public readonly actionGetIdentityVerificationAttributes: string;
```

- *Type:* string

[Read] ses:GetIdentityVerificationAttributes.

---

##### `actionGetImportJob`<sup>Required</sup> <a name="actionGetImportJob" id="@cdk_utils/iam.ses.SesActions.property.actionGetImportJob"></a>

```typescript
public readonly actionGetImportJob: string;
```

- *Type:* string

[Read] ses:GetImportJob.

---

##### `actionGetIngressPoint`<sup>Required</sup> <a name="actionGetIngressPoint" id="@cdk_utils/iam.ses.SesActions.property.actionGetIngressPoint"></a>

```typescript
public readonly actionGetIngressPoint: string;
```

- *Type:* string

[Read] ses:GetIngressPoint.

---

##### `actionGetMemberOfAddressList`<sup>Required</sup> <a name="actionGetMemberOfAddressList" id="@cdk_utils/iam.ses.SesActions.property.actionGetMemberOfAddressList"></a>

```typescript
public readonly actionGetMemberOfAddressList: string;
```

- *Type:* string

[Read] ses:GetMemberOfAddressList.

---

##### `actionGetMessageInsights`<sup>Required</sup> <a name="actionGetMessageInsights" id="@cdk_utils/iam.ses.SesActions.property.actionGetMessageInsights"></a>

```typescript
public readonly actionGetMessageInsights: string;
```

- *Type:* string

[Read] ses:GetMessageInsights.

---

##### `actionGetMultiRegionEndpoint`<sup>Required</sup> <a name="actionGetMultiRegionEndpoint" id="@cdk_utils/iam.ses.SesActions.property.actionGetMultiRegionEndpoint"></a>

```typescript
public readonly actionGetMultiRegionEndpoint: string;
```

- *Type:* string

[Read] ses:GetMultiRegionEndpoint.

---

##### `actionGetRelay`<sup>Required</sup> <a name="actionGetRelay" id="@cdk_utils/iam.ses.SesActions.property.actionGetRelay"></a>

```typescript
public readonly actionGetRelay: string;
```

- *Type:* string

[Read] ses:GetRelay.

---

##### `actionGetReputationEntity`<sup>Required</sup> <a name="actionGetReputationEntity" id="@cdk_utils/iam.ses.SesActions.property.actionGetReputationEntity"></a>

```typescript
public readonly actionGetReputationEntity: string;
```

- *Type:* string

[Read] ses:GetReputationEntity.

---

##### `actionGetRuleSet`<sup>Required</sup> <a name="actionGetRuleSet" id="@cdk_utils/iam.ses.SesActions.property.actionGetRuleSet"></a>

```typescript
public readonly actionGetRuleSet: string;
```

- *Type:* string

[Read] ses:GetRuleSet.

---

##### `actionGetSendQuota`<sup>Required</sup> <a name="actionGetSendQuota" id="@cdk_utils/iam.ses.SesActions.property.actionGetSendQuota"></a>

```typescript
public readonly actionGetSendQuota: string;
```

- *Type:* string

[Read] ses:GetSendQuota.

---

##### `actionGetSendStatistics`<sup>Required</sup> <a name="actionGetSendStatistics" id="@cdk_utils/iam.ses.SesActions.property.actionGetSendStatistics"></a>

```typescript
public readonly actionGetSendStatistics: string;
```

- *Type:* string

[Read] ses:GetSendStatistics.

---

##### `actionGetSuppressedDestination`<sup>Required</sup> <a name="actionGetSuppressedDestination" id="@cdk_utils/iam.ses.SesActions.property.actionGetSuppressedDestination"></a>

```typescript
public readonly actionGetSuppressedDestination: string;
```

- *Type:* string

[Read] ses:GetSuppressedDestination.

---

##### `actionGetTemplate`<sup>Required</sup> <a name="actionGetTemplate" id="@cdk_utils/iam.ses.SesActions.property.actionGetTemplate"></a>

```typescript
public readonly actionGetTemplate: string;
```

- *Type:* string

[Read] ses:GetTemplate.

---

##### `actionGetTenant`<sup>Required</sup> <a name="actionGetTenant" id="@cdk_utils/iam.ses.SesActions.property.actionGetTenant"></a>

```typescript
public readonly actionGetTenant: string;
```

- *Type:* string

[Read] ses:GetTenant.

---

##### `actionGetTrafficPolicy`<sup>Required</sup> <a name="actionGetTrafficPolicy" id="@cdk_utils/iam.ses.SesActions.property.actionGetTrafficPolicy"></a>

```typescript
public readonly actionGetTrafficPolicy: string;
```

- *Type:* string

[Read] ses:GetTrafficPolicy.

---

##### `actionSetActiveReceiptRuleSet`<sup>Required</sup> <a name="actionSetActiveReceiptRuleSet" id="@cdk_utils/iam.ses.SesActions.property.actionSetActiveReceiptRuleSet"></a>

```typescript
public readonly actionSetActiveReceiptRuleSet: string;
```

- *Type:* string

[Write] ses:SetActiveReceiptRuleSet.

---

##### `actionSetIdentityDkimEnabled`<sup>Required</sup> <a name="actionSetIdentityDkimEnabled" id="@cdk_utils/iam.ses.SesActions.property.actionSetIdentityDkimEnabled"></a>

```typescript
public readonly actionSetIdentityDkimEnabled: string;
```

- *Type:* string

[Write] ses:SetIdentityDkimEnabled.

---

##### `actionSetIdentityFeedbackForwardingEnabled`<sup>Required</sup> <a name="actionSetIdentityFeedbackForwardingEnabled" id="@cdk_utils/iam.ses.SesActions.property.actionSetIdentityFeedbackForwardingEnabled"></a>

```typescript
public readonly actionSetIdentityFeedbackForwardingEnabled: string;
```

- *Type:* string

[Write] ses:SetIdentityFeedbackForwardingEnabled.

---

##### `actionSetIdentityHeadersInNotificationsEnabled`<sup>Required</sup> <a name="actionSetIdentityHeadersInNotificationsEnabled" id="@cdk_utils/iam.ses.SesActions.property.actionSetIdentityHeadersInNotificationsEnabled"></a>

```typescript
public readonly actionSetIdentityHeadersInNotificationsEnabled: string;
```

- *Type:* string

[Write] ses:SetIdentityHeadersInNotificationsEnabled.

---

##### `actionSetIdentityMailFromDomain`<sup>Required</sup> <a name="actionSetIdentityMailFromDomain" id="@cdk_utils/iam.ses.SesActions.property.actionSetIdentityMailFromDomain"></a>

```typescript
public readonly actionSetIdentityMailFromDomain: string;
```

- *Type:* string

[Write] ses:SetIdentityMailFromDomain.

---

##### `actionSetIdentityNotificationTopic`<sup>Required</sup> <a name="actionSetIdentityNotificationTopic" id="@cdk_utils/iam.ses.SesActions.property.actionSetIdentityNotificationTopic"></a>

```typescript
public readonly actionSetIdentityNotificationTopic: string;
```

- *Type:* string

[Write] ses:SetIdentityNotificationTopic.

---

##### `actionSetReceiptRulePosition`<sup>Required</sup> <a name="actionSetReceiptRulePosition" id="@cdk_utils/iam.ses.SesActions.property.actionSetReceiptRulePosition"></a>

```typescript
public readonly actionSetReceiptRulePosition: string;
```

- *Type:* string

[Write] ses:SetReceiptRulePosition.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ses.SesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.ses.SesActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] ses:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ses.SesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ses.SesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ses.SesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ses.SesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetMetricData`<sup>Required</sup> <a name="BatchGetMetricData" id="@cdk_utils/iam.ses.SesActions.property.BatchGetMetricData"></a>

```typescript
public readonly BatchGetMetricData: string;
```

- *Type:* string

[Read] ses:BatchGetMetricData.

---

##### `CancelExportJob`<sup>Required</sup> <a name="CancelExportJob" id="@cdk_utils/iam.ses.SesActions.property.CancelExportJob"></a>

```typescript
public readonly CancelExportJob: string;
```

- *Type:* string

[Write] ses:CancelExportJob.

---

##### `CloneReceiptRuleSet`<sup>Required</sup> <a name="CloneReceiptRuleSet" id="@cdk_utils/iam.ses.SesActions.property.CloneReceiptRuleSet"></a>

```typescript
public readonly CloneReceiptRuleSet: string;
```

- *Type:* string

[Write] ses:CloneReceiptRuleSet.

---

##### `CreateAddonInstance`<sup>Required</sup> <a name="CreateAddonInstance" id="@cdk_utils/iam.ses.SesActions.property.CreateAddonInstance"></a>

```typescript
public readonly CreateAddonInstance: string;
```

- *Type:* string

[Write] ses:CreateAddonInstance.

---

##### `CreateAddonSubscription`<sup>Required</sup> <a name="CreateAddonSubscription" id="@cdk_utils/iam.ses.SesActions.property.CreateAddonSubscription"></a>

```typescript
public readonly CreateAddonSubscription: string;
```

- *Type:* string

[Write] ses:CreateAddonSubscription.

---

##### `CreateAddressList`<sup>Required</sup> <a name="CreateAddressList" id="@cdk_utils/iam.ses.SesActions.property.CreateAddressList"></a>

```typescript
public readonly CreateAddressList: string;
```

- *Type:* string

[Write] ses:CreateAddressList.

---

##### `CreateAddressListImportJob`<sup>Required</sup> <a name="CreateAddressListImportJob" id="@cdk_utils/iam.ses.SesActions.property.CreateAddressListImportJob"></a>

```typescript
public readonly CreateAddressListImportJob: string;
```

- *Type:* string

[Write] ses:CreateAddressListImportJob.

---

##### `CreateArchive`<sup>Required</sup> <a name="CreateArchive" id="@cdk_utils/iam.ses.SesActions.property.CreateArchive"></a>

```typescript
public readonly CreateArchive: string;
```

- *Type:* string

[Write] ses:CreateArchive.

---

##### `CreateConfigurationSet`<sup>Required</sup> <a name="CreateConfigurationSet" id="@cdk_utils/iam.ses.SesActions.property.CreateConfigurationSet"></a>

```typescript
public readonly CreateConfigurationSet: string;
```

- *Type:* string

[Write] ses:CreateConfigurationSet.

---

##### `CreateConfigurationSetEventDestination`<sup>Required</sup> <a name="CreateConfigurationSetEventDestination" id="@cdk_utils/iam.ses.SesActions.property.CreateConfigurationSetEventDestination"></a>

```typescript
public readonly CreateConfigurationSetEventDestination: string;
```

- *Type:* string

[Write] ses:CreateConfigurationSetEventDestination.

---

##### `CreateConfigurationSetTrackingOptions`<sup>Required</sup> <a name="CreateConfigurationSetTrackingOptions" id="@cdk_utils/iam.ses.SesActions.property.CreateConfigurationSetTrackingOptions"></a>

```typescript
public readonly CreateConfigurationSetTrackingOptions: string;
```

- *Type:* string

[Write] ses:CreateConfigurationSetTrackingOptions.

---

##### `CreateContact`<sup>Required</sup> <a name="CreateContact" id="@cdk_utils/iam.ses.SesActions.property.CreateContact"></a>

```typescript
public readonly CreateContact: string;
```

- *Type:* string

[Write] ses:CreateContact.

---

##### `CreateContactList`<sup>Required</sup> <a name="CreateContactList" id="@cdk_utils/iam.ses.SesActions.property.CreateContactList"></a>

```typescript
public readonly CreateContactList: string;
```

- *Type:* string

[Write] ses:CreateContactList.

---

##### `CreateCustomVerificationEmailTemplate`<sup>Required</sup> <a name="CreateCustomVerificationEmailTemplate" id="@cdk_utils/iam.ses.SesActions.property.CreateCustomVerificationEmailTemplate"></a>

```typescript
public readonly CreateCustomVerificationEmailTemplate: string;
```

- *Type:* string

[Write] ses:CreateCustomVerificationEmailTemplate.

---

##### `CreateDedicatedIpPool`<sup>Required</sup> <a name="CreateDedicatedIpPool" id="@cdk_utils/iam.ses.SesActions.property.CreateDedicatedIpPool"></a>

```typescript
public readonly CreateDedicatedIpPool: string;
```

- *Type:* string

[Write] ses:CreateDedicatedIpPool.

---

##### `CreateDeliverabilityTestReport`<sup>Required</sup> <a name="CreateDeliverabilityTestReport" id="@cdk_utils/iam.ses.SesActions.property.CreateDeliverabilityTestReport"></a>

```typescript
public readonly CreateDeliverabilityTestReport: string;
```

- *Type:* string

[Write] ses:CreateDeliverabilityTestReport.

---

##### `CreateEmailIdentity`<sup>Required</sup> <a name="CreateEmailIdentity" id="@cdk_utils/iam.ses.SesActions.property.CreateEmailIdentity"></a>

```typescript
public readonly CreateEmailIdentity: string;
```

- *Type:* string

[Write] ses:CreateEmailIdentity.

---

##### `CreateEmailIdentityPolicy`<sup>Required</sup> <a name="CreateEmailIdentityPolicy" id="@cdk_utils/iam.ses.SesActions.property.CreateEmailIdentityPolicy"></a>

```typescript
public readonly CreateEmailIdentityPolicy: string;
```

- *Type:* string

[PermissionManagement] ses:CreateEmailIdentityPolicy.

---

##### `CreateEmailTemplate`<sup>Required</sup> <a name="CreateEmailTemplate" id="@cdk_utils/iam.ses.SesActions.property.CreateEmailTemplate"></a>

```typescript
public readonly CreateEmailTemplate: string;
```

- *Type:* string

[Write] ses:CreateEmailTemplate.

---

##### `CreateExportJob`<sup>Required</sup> <a name="CreateExportJob" id="@cdk_utils/iam.ses.SesActions.property.CreateExportJob"></a>

```typescript
public readonly CreateExportJob: string;
```

- *Type:* string

[Write] ses:CreateExportJob.

---

##### `CreateImportJob`<sup>Required</sup> <a name="CreateImportJob" id="@cdk_utils/iam.ses.SesActions.property.CreateImportJob"></a>

```typescript
public readonly CreateImportJob: string;
```

- *Type:* string

[Write] ses:CreateImportJob.

---

##### `CreateIngressPoint`<sup>Required</sup> <a name="CreateIngressPoint" id="@cdk_utils/iam.ses.SesActions.property.CreateIngressPoint"></a>

```typescript
public readonly CreateIngressPoint: string;
```

- *Type:* string

[Write] ses:CreateIngressPoint.

---

##### `CreateMultiRegionEndpoint`<sup>Required</sup> <a name="CreateMultiRegionEndpoint" id="@cdk_utils/iam.ses.SesActions.property.CreateMultiRegionEndpoint"></a>

```typescript
public readonly CreateMultiRegionEndpoint: string;
```

- *Type:* string

[Write] ses:CreateMultiRegionEndpoint.

---

##### `CreateReceiptFilter`<sup>Required</sup> <a name="CreateReceiptFilter" id="@cdk_utils/iam.ses.SesActions.property.CreateReceiptFilter"></a>

```typescript
public readonly CreateReceiptFilter: string;
```

- *Type:* string

[Write] ses:CreateReceiptFilter.

---

##### `CreateReceiptRule`<sup>Required</sup> <a name="CreateReceiptRule" id="@cdk_utils/iam.ses.SesActions.property.CreateReceiptRule"></a>

```typescript
public readonly CreateReceiptRule: string;
```

- *Type:* string

[Write] ses:CreateReceiptRule.

---

##### `CreateReceiptRuleSet`<sup>Required</sup> <a name="CreateReceiptRuleSet" id="@cdk_utils/iam.ses.SesActions.property.CreateReceiptRuleSet"></a>

```typescript
public readonly CreateReceiptRuleSet: string;
```

- *Type:* string

[Write] ses:CreateReceiptRuleSet.

---

##### `CreateRelay`<sup>Required</sup> <a name="CreateRelay" id="@cdk_utils/iam.ses.SesActions.property.CreateRelay"></a>

```typescript
public readonly CreateRelay: string;
```

- *Type:* string

[Write] ses:CreateRelay.

---

##### `CreateRuleSet`<sup>Required</sup> <a name="CreateRuleSet" id="@cdk_utils/iam.ses.SesActions.property.CreateRuleSet"></a>

```typescript
public readonly CreateRuleSet: string;
```

- *Type:* string

[Write] ses:CreateRuleSet.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.ses.SesActions.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string;
```

- *Type:* string

[Write] ses:CreateTemplate.

---

##### `CreateTenant`<sup>Required</sup> <a name="CreateTenant" id="@cdk_utils/iam.ses.SesActions.property.CreateTenant"></a>

```typescript
public readonly CreateTenant: string;
```

- *Type:* string

[Write] ses:CreateTenant.

---

##### `CreateTenantResourceAssociation`<sup>Required</sup> <a name="CreateTenantResourceAssociation" id="@cdk_utils/iam.ses.SesActions.property.CreateTenantResourceAssociation"></a>

```typescript
public readonly CreateTenantResourceAssociation: string;
```

- *Type:* string

[Write] ses:CreateTenantResourceAssociation.

---

##### `CreateTrafficPolicy`<sup>Required</sup> <a name="CreateTrafficPolicy" id="@cdk_utils/iam.ses.SesActions.property.CreateTrafficPolicy"></a>

```typescript
public readonly CreateTrafficPolicy: string;
```

- *Type:* string

[Write] ses:CreateTrafficPolicy.

---

##### `DeleteAddonInstance`<sup>Required</sup> <a name="DeleteAddonInstance" id="@cdk_utils/iam.ses.SesActions.property.DeleteAddonInstance"></a>

```typescript
public readonly DeleteAddonInstance: string;
```

- *Type:* string

[Write] ses:DeleteAddonInstance.

---

##### `DeleteAddonSubscription`<sup>Required</sup> <a name="DeleteAddonSubscription" id="@cdk_utils/iam.ses.SesActions.property.DeleteAddonSubscription"></a>

```typescript
public readonly DeleteAddonSubscription: string;
```

- *Type:* string

[Write] ses:DeleteAddonSubscription.

---

##### `DeleteAddressList`<sup>Required</sup> <a name="DeleteAddressList" id="@cdk_utils/iam.ses.SesActions.property.DeleteAddressList"></a>

```typescript
public readonly DeleteAddressList: string;
```

- *Type:* string

[Write] ses:DeleteAddressList.

---

##### `DeleteArchive`<sup>Required</sup> <a name="DeleteArchive" id="@cdk_utils/iam.ses.SesActions.property.DeleteArchive"></a>

```typescript
public readonly DeleteArchive: string;
```

- *Type:* string

[Write] ses:DeleteArchive.

---

##### `DeleteConfigurationSet`<sup>Required</sup> <a name="DeleteConfigurationSet" id="@cdk_utils/iam.ses.SesActions.property.DeleteConfigurationSet"></a>

```typescript
public readonly DeleteConfigurationSet: string;
```

- *Type:* string

[Write] ses:DeleteConfigurationSet.

---

##### `DeleteConfigurationSetEventDestination`<sup>Required</sup> <a name="DeleteConfigurationSetEventDestination" id="@cdk_utils/iam.ses.SesActions.property.DeleteConfigurationSetEventDestination"></a>

```typescript
public readonly DeleteConfigurationSetEventDestination: string;
```

- *Type:* string

[Write] ses:DeleteConfigurationSetEventDestination.

---

##### `DeleteConfigurationSetTrackingOptions`<sup>Required</sup> <a name="DeleteConfigurationSetTrackingOptions" id="@cdk_utils/iam.ses.SesActions.property.DeleteConfigurationSetTrackingOptions"></a>

```typescript
public readonly DeleteConfigurationSetTrackingOptions: string;
```

- *Type:* string

[Write] ses:DeleteConfigurationSetTrackingOptions.

---

##### `DeleteContact`<sup>Required</sup> <a name="DeleteContact" id="@cdk_utils/iam.ses.SesActions.property.DeleteContact"></a>

```typescript
public readonly DeleteContact: string;
```

- *Type:* string

[Write] ses:DeleteContact.

---

##### `DeleteContactList`<sup>Required</sup> <a name="DeleteContactList" id="@cdk_utils/iam.ses.SesActions.property.DeleteContactList"></a>

```typescript
public readonly DeleteContactList: string;
```

- *Type:* string

[Write] ses:DeleteContactList.

---

##### `DeleteCustomVerificationEmailTemplate`<sup>Required</sup> <a name="DeleteCustomVerificationEmailTemplate" id="@cdk_utils/iam.ses.SesActions.property.DeleteCustomVerificationEmailTemplate"></a>

```typescript
public readonly DeleteCustomVerificationEmailTemplate: string;
```

- *Type:* string

[Write] ses:DeleteCustomVerificationEmailTemplate.

---

##### `DeleteDedicatedIpPool`<sup>Required</sup> <a name="DeleteDedicatedIpPool" id="@cdk_utils/iam.ses.SesActions.property.DeleteDedicatedIpPool"></a>

```typescript
public readonly DeleteDedicatedIpPool: string;
```

- *Type:* string

[Write] ses:DeleteDedicatedIpPool.

---

##### `DeleteEmailIdentity`<sup>Required</sup> <a name="DeleteEmailIdentity" id="@cdk_utils/iam.ses.SesActions.property.DeleteEmailIdentity"></a>

```typescript
public readonly DeleteEmailIdentity: string;
```

- *Type:* string

[Write] ses:DeleteEmailIdentity.

---

##### `DeleteEmailIdentityPolicy`<sup>Required</sup> <a name="DeleteEmailIdentityPolicy" id="@cdk_utils/iam.ses.SesActions.property.DeleteEmailIdentityPolicy"></a>

```typescript
public readonly DeleteEmailIdentityPolicy: string;
```

- *Type:* string

[PermissionManagement] ses:DeleteEmailIdentityPolicy.

---

##### `DeleteEmailTemplate`<sup>Required</sup> <a name="DeleteEmailTemplate" id="@cdk_utils/iam.ses.SesActions.property.DeleteEmailTemplate"></a>

```typescript
public readonly DeleteEmailTemplate: string;
```

- *Type:* string

[Write] ses:DeleteEmailTemplate.

---

##### `DeleteIdentity`<sup>Required</sup> <a name="DeleteIdentity" id="@cdk_utils/iam.ses.SesActions.property.DeleteIdentity"></a>

```typescript
public readonly DeleteIdentity: string;
```

- *Type:* string

[Write] ses:DeleteIdentity.

---

##### `DeleteIdentityPolicy`<sup>Required</sup> <a name="DeleteIdentityPolicy" id="@cdk_utils/iam.ses.SesActions.property.DeleteIdentityPolicy"></a>

```typescript
public readonly DeleteIdentityPolicy: string;
```

- *Type:* string

[PermissionManagement] ses:DeleteIdentityPolicy.

---

##### `DeleteIngressPoint`<sup>Required</sup> <a name="DeleteIngressPoint" id="@cdk_utils/iam.ses.SesActions.property.DeleteIngressPoint"></a>

```typescript
public readonly DeleteIngressPoint: string;
```

- *Type:* string

[Write] ses:DeleteIngressPoint.

---

##### `DeleteMultiRegionEndpoint`<sup>Required</sup> <a name="DeleteMultiRegionEndpoint" id="@cdk_utils/iam.ses.SesActions.property.DeleteMultiRegionEndpoint"></a>

```typescript
public readonly DeleteMultiRegionEndpoint: string;
```

- *Type:* string

[Write] ses:DeleteMultiRegionEndpoint.

---

##### `DeleteReceiptFilter`<sup>Required</sup> <a name="DeleteReceiptFilter" id="@cdk_utils/iam.ses.SesActions.property.DeleteReceiptFilter"></a>

```typescript
public readonly DeleteReceiptFilter: string;
```

- *Type:* string

[Write] ses:DeleteReceiptFilter.

---

##### `DeleteReceiptRule`<sup>Required</sup> <a name="DeleteReceiptRule" id="@cdk_utils/iam.ses.SesActions.property.DeleteReceiptRule"></a>

```typescript
public readonly DeleteReceiptRule: string;
```

- *Type:* string

[Write] ses:DeleteReceiptRule.

---

##### `DeleteReceiptRuleSet`<sup>Required</sup> <a name="DeleteReceiptRuleSet" id="@cdk_utils/iam.ses.SesActions.property.DeleteReceiptRuleSet"></a>

```typescript
public readonly DeleteReceiptRuleSet: string;
```

- *Type:* string

[Write] ses:DeleteReceiptRuleSet.

---

##### `DeleteRelay`<sup>Required</sup> <a name="DeleteRelay" id="@cdk_utils/iam.ses.SesActions.property.DeleteRelay"></a>

```typescript
public readonly DeleteRelay: string;
```

- *Type:* string

[Write] ses:DeleteRelay.

---

##### `DeleteRuleSet`<sup>Required</sup> <a name="DeleteRuleSet" id="@cdk_utils/iam.ses.SesActions.property.DeleteRuleSet"></a>

```typescript
public readonly DeleteRuleSet: string;
```

- *Type:* string

[Write] ses:DeleteRuleSet.

---

##### `DeleteSuppressedDestination`<sup>Required</sup> <a name="DeleteSuppressedDestination" id="@cdk_utils/iam.ses.SesActions.property.DeleteSuppressedDestination"></a>

```typescript
public readonly DeleteSuppressedDestination: string;
```

- *Type:* string

[Write] ses:DeleteSuppressedDestination.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.ses.SesActions.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string;
```

- *Type:* string

[Write] ses:DeleteTemplate.

---

##### `DeleteTenant`<sup>Required</sup> <a name="DeleteTenant" id="@cdk_utils/iam.ses.SesActions.property.DeleteTenant"></a>

```typescript
public readonly DeleteTenant: string;
```

- *Type:* string

[Write] ses:DeleteTenant.

---

##### `DeleteTenantResourceAssociation`<sup>Required</sup> <a name="DeleteTenantResourceAssociation" id="@cdk_utils/iam.ses.SesActions.property.DeleteTenantResourceAssociation"></a>

```typescript
public readonly DeleteTenantResourceAssociation: string;
```

- *Type:* string

[Write] ses:DeleteTenantResourceAssociation.

---

##### `DeleteTrafficPolicy`<sup>Required</sup> <a name="DeleteTrafficPolicy" id="@cdk_utils/iam.ses.SesActions.property.DeleteTrafficPolicy"></a>

```typescript
public readonly DeleteTrafficPolicy: string;
```

- *Type:* string

[Write] ses:DeleteTrafficPolicy.

---

##### `DeleteVerifiedEmailAddress`<sup>Required</sup> <a name="DeleteVerifiedEmailAddress" id="@cdk_utils/iam.ses.SesActions.property.DeleteVerifiedEmailAddress"></a>

```typescript
public readonly DeleteVerifiedEmailAddress: string;
```

- *Type:* string

[Write] ses:DeleteVerifiedEmailAddress.

---

##### `DeregisterMemberFromAddressList`<sup>Required</sup> <a name="DeregisterMemberFromAddressList" id="@cdk_utils/iam.ses.SesActions.property.DeregisterMemberFromAddressList"></a>

```typescript
public readonly DeregisterMemberFromAddressList: string;
```

- *Type:* string

[Write] ses:DeregisterMemberFromAddressList.

---

##### `DescribeActiveReceiptRuleSet`<sup>Required</sup> <a name="DescribeActiveReceiptRuleSet" id="@cdk_utils/iam.ses.SesActions.property.DescribeActiveReceiptRuleSet"></a>

```typescript
public readonly DescribeActiveReceiptRuleSet: string;
```

- *Type:* string

[Read] ses:DescribeActiveReceiptRuleSet.

---

##### `DescribeConfigurationSet`<sup>Required</sup> <a name="DescribeConfigurationSet" id="@cdk_utils/iam.ses.SesActions.property.DescribeConfigurationSet"></a>

```typescript
public readonly DescribeConfigurationSet: string;
```

- *Type:* string

[Read] ses:DescribeConfigurationSet.

---

##### `DescribeReceiptRule`<sup>Required</sup> <a name="DescribeReceiptRule" id="@cdk_utils/iam.ses.SesActions.property.DescribeReceiptRule"></a>

```typescript
public readonly DescribeReceiptRule: string;
```

- *Type:* string

[Read] ses:DescribeReceiptRule.

---

##### `DescribeReceiptRuleSet`<sup>Required</sup> <a name="DescribeReceiptRuleSet" id="@cdk_utils/iam.ses.SesActions.property.DescribeReceiptRuleSet"></a>

```typescript
public readonly DescribeReceiptRuleSet: string;
```

- *Type:* string

[Read] ses:DescribeReceiptRuleSet.

---

##### `ListAddonInstances`<sup>Required</sup> <a name="ListAddonInstances" id="@cdk_utils/iam.ses.SesActions.property.ListAddonInstances"></a>

```typescript
public readonly ListAddonInstances: string;
```

- *Type:* string

[List] ses:ListAddonInstances.

---

##### `ListAddonSubscriptions`<sup>Required</sup> <a name="ListAddonSubscriptions" id="@cdk_utils/iam.ses.SesActions.property.ListAddonSubscriptions"></a>

```typescript
public readonly ListAddonSubscriptions: string;
```

- *Type:* string

[List] ses:ListAddonSubscriptions.

---

##### `ListAddressListImportJobs`<sup>Required</sup> <a name="ListAddressListImportJobs" id="@cdk_utils/iam.ses.SesActions.property.ListAddressListImportJobs"></a>

```typescript
public readonly ListAddressListImportJobs: string;
```

- *Type:* string

[List] ses:ListAddressListImportJobs.

---

##### `ListAddressLists`<sup>Required</sup> <a name="ListAddressLists" id="@cdk_utils/iam.ses.SesActions.property.ListAddressLists"></a>

```typescript
public readonly ListAddressLists: string;
```

- *Type:* string

[List] ses:ListAddressLists.

---

##### `ListArchiveExports`<sup>Required</sup> <a name="ListArchiveExports" id="@cdk_utils/iam.ses.SesActions.property.ListArchiveExports"></a>

```typescript
public readonly ListArchiveExports: string;
```

- *Type:* string

[List] ses:ListArchiveExports.

---

##### `ListArchives`<sup>Required</sup> <a name="ListArchives" id="@cdk_utils/iam.ses.SesActions.property.ListArchives"></a>

```typescript
public readonly ListArchives: string;
```

- *Type:* string

[List] ses:ListArchives.

---

##### `ListArchiveSearches`<sup>Required</sup> <a name="ListArchiveSearches" id="@cdk_utils/iam.ses.SesActions.property.ListArchiveSearches"></a>

```typescript
public readonly ListArchiveSearches: string;
```

- *Type:* string

[List] ses:ListArchiveSearches.

---

##### `ListConfigurationSets`<sup>Required</sup> <a name="ListConfigurationSets" id="@cdk_utils/iam.ses.SesActions.property.ListConfigurationSets"></a>

```typescript
public readonly ListConfigurationSets: string;
```

- *Type:* string

[List] ses:ListConfigurationSets.

---

##### `ListContactLists`<sup>Required</sup> <a name="ListContactLists" id="@cdk_utils/iam.ses.SesActions.property.ListContactLists"></a>

```typescript
public readonly ListContactLists: string;
```

- *Type:* string

[List] ses:ListContactLists.

---

##### `ListContacts`<sup>Required</sup> <a name="ListContacts" id="@cdk_utils/iam.ses.SesActions.property.ListContacts"></a>

```typescript
public readonly ListContacts: string;
```

- *Type:* string

[List] ses:ListContacts.

---

##### `ListCustomVerificationEmailTemplates`<sup>Required</sup> <a name="ListCustomVerificationEmailTemplates" id="@cdk_utils/iam.ses.SesActions.property.ListCustomVerificationEmailTemplates"></a>

```typescript
public readonly ListCustomVerificationEmailTemplates: string;
```

- *Type:* string

[List] ses:ListCustomVerificationEmailTemplates.

---

##### `ListDedicatedIpPools`<sup>Required</sup> <a name="ListDedicatedIpPools" id="@cdk_utils/iam.ses.SesActions.property.ListDedicatedIpPools"></a>

```typescript
public readonly ListDedicatedIpPools: string;
```

- *Type:* string

[List] ses:ListDedicatedIpPools.

---

##### `ListDeliverabilityTestReports`<sup>Required</sup> <a name="ListDeliverabilityTestReports" id="@cdk_utils/iam.ses.SesActions.property.ListDeliverabilityTestReports"></a>

```typescript
public readonly ListDeliverabilityTestReports: string;
```

- *Type:* string

[List] ses:ListDeliverabilityTestReports.

---

##### `ListDomainDeliverabilityCampaigns`<sup>Required</sup> <a name="ListDomainDeliverabilityCampaigns" id="@cdk_utils/iam.ses.SesActions.property.ListDomainDeliverabilityCampaigns"></a>

```typescript
public readonly ListDomainDeliverabilityCampaigns: string;
```

- *Type:* string

[Read] ses:ListDomainDeliverabilityCampaigns.

---

##### `ListEmailIdentities`<sup>Required</sup> <a name="ListEmailIdentities" id="@cdk_utils/iam.ses.SesActions.property.ListEmailIdentities"></a>

```typescript
public readonly ListEmailIdentities: string;
```

- *Type:* string

[List] ses:ListEmailIdentities.

---

##### `ListEmailTemplates`<sup>Required</sup> <a name="ListEmailTemplates" id="@cdk_utils/iam.ses.SesActions.property.ListEmailTemplates"></a>

```typescript
public readonly ListEmailTemplates: string;
```

- *Type:* string

[List] ses:ListEmailTemplates.

---

##### `ListExportJobs`<sup>Required</sup> <a name="ListExportJobs" id="@cdk_utils/iam.ses.SesActions.property.ListExportJobs"></a>

```typescript
public readonly ListExportJobs: string;
```

- *Type:* string

[List] ses:ListExportJobs.

---

##### `ListIdentities`<sup>Required</sup> <a name="ListIdentities" id="@cdk_utils/iam.ses.SesActions.property.ListIdentities"></a>

```typescript
public readonly ListIdentities: string;
```

- *Type:* string

[List] ses:ListIdentities.

---

##### `ListIdentityPolicies`<sup>Required</sup> <a name="ListIdentityPolicies" id="@cdk_utils/iam.ses.SesActions.property.ListIdentityPolicies"></a>

```typescript
public readonly ListIdentityPolicies: string;
```

- *Type:* string

[List] ses:ListIdentityPolicies.

---

##### `ListImportJobs`<sup>Required</sup> <a name="ListImportJobs" id="@cdk_utils/iam.ses.SesActions.property.ListImportJobs"></a>

```typescript
public readonly ListImportJobs: string;
```

- *Type:* string

[List] ses:ListImportJobs.

---

##### `ListIngressPoints`<sup>Required</sup> <a name="ListIngressPoints" id="@cdk_utils/iam.ses.SesActions.property.ListIngressPoints"></a>

```typescript
public readonly ListIngressPoints: string;
```

- *Type:* string

[List] ses:ListIngressPoints.

---

##### `ListMembersOfAddressList`<sup>Required</sup> <a name="ListMembersOfAddressList" id="@cdk_utils/iam.ses.SesActions.property.ListMembersOfAddressList"></a>

```typescript
public readonly ListMembersOfAddressList: string;
```

- *Type:* string

[List] ses:ListMembersOfAddressList.

---

##### `ListMultiRegionEndpoints`<sup>Required</sup> <a name="ListMultiRegionEndpoints" id="@cdk_utils/iam.ses.SesActions.property.ListMultiRegionEndpoints"></a>

```typescript
public readonly ListMultiRegionEndpoints: string;
```

- *Type:* string

[List] ses:ListMultiRegionEndpoints.

---

##### `ListReceiptFilters`<sup>Required</sup> <a name="ListReceiptFilters" id="@cdk_utils/iam.ses.SesActions.property.ListReceiptFilters"></a>

```typescript
public readonly ListReceiptFilters: string;
```

- *Type:* string

[Read] ses:ListReceiptFilters.

---

##### `ListReceiptRuleSets`<sup>Required</sup> <a name="ListReceiptRuleSets" id="@cdk_utils/iam.ses.SesActions.property.ListReceiptRuleSets"></a>

```typescript
public readonly ListReceiptRuleSets: string;
```

- *Type:* string

[Read] ses:ListReceiptRuleSets.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.ses.SesActions.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string;
```

- *Type:* string

[Read] ses:ListRecommendations.

---

##### `ListRelays`<sup>Required</sup> <a name="ListRelays" id="@cdk_utils/iam.ses.SesActions.property.ListRelays"></a>

```typescript
public readonly ListRelays: string;
```

- *Type:* string

[List] ses:ListRelays.

---

##### `ListReputationEntities`<sup>Required</sup> <a name="ListReputationEntities" id="@cdk_utils/iam.ses.SesActions.property.ListReputationEntities"></a>

```typescript
public readonly ListReputationEntities: string;
```

- *Type:* string

[List] ses:ListReputationEntities.

---

##### `ListResourceTenants`<sup>Required</sup> <a name="ListResourceTenants" id="@cdk_utils/iam.ses.SesActions.property.ListResourceTenants"></a>

```typescript
public readonly ListResourceTenants: string;
```

- *Type:* string

[List] ses:ListResourceTenants.

---

##### `ListRuleSets`<sup>Required</sup> <a name="ListRuleSets" id="@cdk_utils/iam.ses.SesActions.property.ListRuleSets"></a>

```typescript
public readonly ListRuleSets: string;
```

- *Type:* string

[List] ses:ListRuleSets.

---

##### `ListSuppressedDestinations`<sup>Required</sup> <a name="ListSuppressedDestinations" id="@cdk_utils/iam.ses.SesActions.property.ListSuppressedDestinations"></a>

```typescript
public readonly ListSuppressedDestinations: string;
```

- *Type:* string

[Read] ses:ListSuppressedDestinations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ses.SesActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ses:ListTagsForResource.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.ses.SesActions.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string;
```

- *Type:* string

[List] ses:ListTemplates.

---

##### `ListTenantResources`<sup>Required</sup> <a name="ListTenantResources" id="@cdk_utils/iam.ses.SesActions.property.ListTenantResources"></a>

```typescript
public readonly ListTenantResources: string;
```

- *Type:* string

[List] ses:ListTenantResources.

---

##### `ListTenants`<sup>Required</sup> <a name="ListTenants" id="@cdk_utils/iam.ses.SesActions.property.ListTenants"></a>

```typescript
public readonly ListTenants: string;
```

- *Type:* string

[List] ses:ListTenants.

---

##### `ListTrafficPolicies`<sup>Required</sup> <a name="ListTrafficPolicies" id="@cdk_utils/iam.ses.SesActions.property.ListTrafficPolicies"></a>

```typescript
public readonly ListTrafficPolicies: string;
```

- *Type:* string

[List] ses:ListTrafficPolicies.

---

##### `ListVerifiedEmailAddresses`<sup>Required</sup> <a name="ListVerifiedEmailAddresses" id="@cdk_utils/iam.ses.SesActions.property.ListVerifiedEmailAddresses"></a>

```typescript
public readonly ListVerifiedEmailAddresses: string;
```

- *Type:* string

[Read] ses:ListVerifiedEmailAddresses.

---

##### `PutAccountDedicatedIpWarmupAttributes`<sup>Required</sup> <a name="PutAccountDedicatedIpWarmupAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutAccountDedicatedIpWarmupAttributes"></a>

```typescript
public readonly PutAccountDedicatedIpWarmupAttributes: string;
```

- *Type:* string

[Write] ses:PutAccountDedicatedIpWarmupAttributes.

---

##### `PutAccountDetails`<sup>Required</sup> <a name="PutAccountDetails" id="@cdk_utils/iam.ses.SesActions.property.PutAccountDetails"></a>

```typescript
public readonly PutAccountDetails: string;
```

- *Type:* string

[Write] ses:PutAccountDetails.

---

##### `PutAccountPricingAttributes`<sup>Required</sup> <a name="PutAccountPricingAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutAccountPricingAttributes"></a>

```typescript
public readonly PutAccountPricingAttributes: string;
```

- *Type:* string

[Write] ses:PutAccountPricingAttributes.

---

##### `PutAccountSendingAttributes`<sup>Required</sup> <a name="PutAccountSendingAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutAccountSendingAttributes"></a>

```typescript
public readonly PutAccountSendingAttributes: string;
```

- *Type:* string

[Write] ses:PutAccountSendingAttributes.

---

##### `PutAccountSuppressionAttributes`<sup>Required</sup> <a name="PutAccountSuppressionAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutAccountSuppressionAttributes"></a>

```typescript
public readonly PutAccountSuppressionAttributes: string;
```

- *Type:* string

[Write] ses:PutAccountSuppressionAttributes.

---

##### `PutAccountVdmAttributes`<sup>Required</sup> <a name="PutAccountVdmAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutAccountVdmAttributes"></a>

```typescript
public readonly PutAccountVdmAttributes: string;
```

- *Type:* string

[Write] ses:PutAccountVdmAttributes.

---

##### `PutConfigurationSetArchivingOptions`<sup>Required</sup> <a name="PutConfigurationSetArchivingOptions" id="@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetArchivingOptions"></a>

```typescript
public readonly PutConfigurationSetArchivingOptions: string;
```

- *Type:* string

[Write] ses:PutConfigurationSetArchivingOptions.

---

##### `PutConfigurationSetDeliveryOptions`<sup>Required</sup> <a name="PutConfigurationSetDeliveryOptions" id="@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetDeliveryOptions"></a>

```typescript
public readonly PutConfigurationSetDeliveryOptions: string;
```

- *Type:* string

[Write] ses:PutConfigurationSetDeliveryOptions.

---

##### `PutConfigurationSetReputationOptions`<sup>Required</sup> <a name="PutConfigurationSetReputationOptions" id="@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetReputationOptions"></a>

```typescript
public readonly PutConfigurationSetReputationOptions: string;
```

- *Type:* string

[Write] ses:PutConfigurationSetReputationOptions.

---

##### `PutConfigurationSetSendingOptions`<sup>Required</sup> <a name="PutConfigurationSetSendingOptions" id="@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetSendingOptions"></a>

```typescript
public readonly PutConfigurationSetSendingOptions: string;
```

- *Type:* string

[Write] ses:PutConfigurationSetSendingOptions.

---

##### `PutConfigurationSetSuppressionOptions`<sup>Required</sup> <a name="PutConfigurationSetSuppressionOptions" id="@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetSuppressionOptions"></a>

```typescript
public readonly PutConfigurationSetSuppressionOptions: string;
```

- *Type:* string

[Write] ses:PutConfigurationSetSuppressionOptions.

---

##### `PutConfigurationSetTrackingOptions`<sup>Required</sup> <a name="PutConfigurationSetTrackingOptions" id="@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetTrackingOptions"></a>

```typescript
public readonly PutConfigurationSetTrackingOptions: string;
```

- *Type:* string

[Write] ses:PutConfigurationSetTrackingOptions.

---

##### `PutConfigurationSetVdmOptions`<sup>Required</sup> <a name="PutConfigurationSetVdmOptions" id="@cdk_utils/iam.ses.SesActions.property.PutConfigurationSetVdmOptions"></a>

```typescript
public readonly PutConfigurationSetVdmOptions: string;
```

- *Type:* string

[Write] ses:PutConfigurationSetVdmOptions.

---

##### `PutDedicatedIpInPool`<sup>Required</sup> <a name="PutDedicatedIpInPool" id="@cdk_utils/iam.ses.SesActions.property.PutDedicatedIpInPool"></a>

```typescript
public readonly PutDedicatedIpInPool: string;
```

- *Type:* string

[Write] ses:PutDedicatedIpInPool.

---

##### `PutDedicatedIpPoolScalingAttributes`<sup>Required</sup> <a name="PutDedicatedIpPoolScalingAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutDedicatedIpPoolScalingAttributes"></a>

```typescript
public readonly PutDedicatedIpPoolScalingAttributes: string;
```

- *Type:* string

[Write] ses:PutDedicatedIpPoolScalingAttributes.

---

##### `PutDedicatedIpWarmupAttributes`<sup>Required</sup> <a name="PutDedicatedIpWarmupAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutDedicatedIpWarmupAttributes"></a>

```typescript
public readonly PutDedicatedIpWarmupAttributes: string;
```

- *Type:* string

[Write] ses:PutDedicatedIpWarmupAttributes.

---

##### `PutDeliverabilityDashboardOption`<sup>Required</sup> <a name="PutDeliverabilityDashboardOption" id="@cdk_utils/iam.ses.SesActions.property.PutDeliverabilityDashboardOption"></a>

```typescript
public readonly PutDeliverabilityDashboardOption: string;
```

- *Type:* string

[Write] ses:PutDeliverabilityDashboardOption.

---

##### `PutEmailIdentityConfigurationSetAttributes`<sup>Required</sup> <a name="PutEmailIdentityConfigurationSetAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutEmailIdentityConfigurationSetAttributes"></a>

```typescript
public readonly PutEmailIdentityConfigurationSetAttributes: string;
```

- *Type:* string

[Write] ses:PutEmailIdentityConfigurationSetAttributes.

---

##### `PutEmailIdentityDkimAttributes`<sup>Required</sup> <a name="PutEmailIdentityDkimAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutEmailIdentityDkimAttributes"></a>

```typescript
public readonly PutEmailIdentityDkimAttributes: string;
```

- *Type:* string

[Write] ses:PutEmailIdentityDkimAttributes.

---

##### `PutEmailIdentityDkimSigningAttributes`<sup>Required</sup> <a name="PutEmailIdentityDkimSigningAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutEmailIdentityDkimSigningAttributes"></a>

```typescript
public readonly PutEmailIdentityDkimSigningAttributes: string;
```

- *Type:* string

[Write] ses:PutEmailIdentityDkimSigningAttributes.

---

##### `PutEmailIdentityFeedbackAttributes`<sup>Required</sup> <a name="PutEmailIdentityFeedbackAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutEmailIdentityFeedbackAttributes"></a>

```typescript
public readonly PutEmailIdentityFeedbackAttributes: string;
```

- *Type:* string

[Write] ses:PutEmailIdentityFeedbackAttributes.

---

##### `PutEmailIdentityMailFromAttributes`<sup>Required</sup> <a name="PutEmailIdentityMailFromAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutEmailIdentityMailFromAttributes"></a>

```typescript
public readonly PutEmailIdentityMailFromAttributes: string;
```

- *Type:* string

[Write] ses:PutEmailIdentityMailFromAttributes.

---

##### `PutIdentityPolicy`<sup>Required</sup> <a name="PutIdentityPolicy" id="@cdk_utils/iam.ses.SesActions.property.PutIdentityPolicy"></a>

```typescript
public readonly PutIdentityPolicy: string;
```

- *Type:* string

[PermissionManagement] ses:PutIdentityPolicy.

---

##### `PutSuppressedDestination`<sup>Required</sup> <a name="PutSuppressedDestination" id="@cdk_utils/iam.ses.SesActions.property.PutSuppressedDestination"></a>

```typescript
public readonly PutSuppressedDestination: string;
```

- *Type:* string

[Write] ses:PutSuppressedDestination.

---

##### `PutTenantSuppressionAttributes`<sup>Required</sup> <a name="PutTenantSuppressionAttributes" id="@cdk_utils/iam.ses.SesActions.property.PutTenantSuppressionAttributes"></a>

```typescript
public readonly PutTenantSuppressionAttributes: string;
```

- *Type:* string

[Write] ses:PutTenantSuppressionAttributes.

---

##### `RegisterMemberToAddressList`<sup>Required</sup> <a name="RegisterMemberToAddressList" id="@cdk_utils/iam.ses.SesActions.property.RegisterMemberToAddressList"></a>

```typescript
public readonly RegisterMemberToAddressList: string;
```

- *Type:* string

[Write] ses:RegisterMemberToAddressList.

---

##### `ReorderReceiptRuleSet`<sup>Required</sup> <a name="ReorderReceiptRuleSet" id="@cdk_utils/iam.ses.SesActions.property.ReorderReceiptRuleSet"></a>

```typescript
public readonly ReorderReceiptRuleSet: string;
```

- *Type:* string

[Write] ses:ReorderReceiptRuleSet.

---

##### `ReplicateEmailIdentityDkimSigningKey`<sup>Required</sup> <a name="ReplicateEmailIdentityDkimSigningKey" id="@cdk_utils/iam.ses.SesActions.property.ReplicateEmailIdentityDkimSigningKey"></a>

```typescript
public readonly ReplicateEmailIdentityDkimSigningKey: string;
```

- *Type:* string

[PermissionManagement] ses:ReplicateEmailIdentityDkimSigningKey.

---

##### `SendBounce`<sup>Required</sup> <a name="SendBounce" id="@cdk_utils/iam.ses.SesActions.property.SendBounce"></a>

```typescript
public readonly SendBounce: string;
```

- *Type:* string

[Write] ses:SendBounce.

---

##### `SendBulkEmail`<sup>Required</sup> <a name="SendBulkEmail" id="@cdk_utils/iam.ses.SesActions.property.SendBulkEmail"></a>

```typescript
public readonly SendBulkEmail: string;
```

- *Type:* string

[Write] ses:SendBulkEmail.

---

##### `SendBulkTemplatedEmail`<sup>Required</sup> <a name="SendBulkTemplatedEmail" id="@cdk_utils/iam.ses.SesActions.property.SendBulkTemplatedEmail"></a>

```typescript
public readonly SendBulkTemplatedEmail: string;
```

- *Type:* string

[Write] ses:SendBulkTemplatedEmail.

---

##### `SendCustomVerificationEmail`<sup>Required</sup> <a name="SendCustomVerificationEmail" id="@cdk_utils/iam.ses.SesActions.property.SendCustomVerificationEmail"></a>

```typescript
public readonly SendCustomVerificationEmail: string;
```

- *Type:* string

[Write] ses:SendCustomVerificationEmail.

---

##### `SendEmail`<sup>Required</sup> <a name="SendEmail" id="@cdk_utils/iam.ses.SesActions.property.SendEmail"></a>

```typescript
public readonly SendEmail: string;
```

- *Type:* string

[Write] ses:SendEmail.

---

##### `SendRawEmail`<sup>Required</sup> <a name="SendRawEmail" id="@cdk_utils/iam.ses.SesActions.property.SendRawEmail"></a>

```typescript
public readonly SendRawEmail: string;
```

- *Type:* string

[Write] ses:SendRawEmail.

---

##### `SendTemplatedEmail`<sup>Required</sup> <a name="SendTemplatedEmail" id="@cdk_utils/iam.ses.SesActions.property.SendTemplatedEmail"></a>

```typescript
public readonly SendTemplatedEmail: string;
```

- *Type:* string

[Write] ses:SendTemplatedEmail.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ses.SesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAddressListImportJob`<sup>Required</sup> <a name="StartAddressListImportJob" id="@cdk_utils/iam.ses.SesActions.property.StartAddressListImportJob"></a>

```typescript
public readonly StartAddressListImportJob: string;
```

- *Type:* string

[Write] ses:StartAddressListImportJob.

---

##### `StartArchiveExport`<sup>Required</sup> <a name="StartArchiveExport" id="@cdk_utils/iam.ses.SesActions.property.StartArchiveExport"></a>

```typescript
public readonly StartArchiveExport: string;
```

- *Type:* string

[Write] ses:StartArchiveExport.

---

##### `StartArchiveSearch`<sup>Required</sup> <a name="StartArchiveSearch" id="@cdk_utils/iam.ses.SesActions.property.StartArchiveSearch"></a>

```typescript
public readonly StartArchiveSearch: string;
```

- *Type:* string

[Write] ses:StartArchiveSearch.

---

##### `StopAddressListImportJob`<sup>Required</sup> <a name="StopAddressListImportJob" id="@cdk_utils/iam.ses.SesActions.property.StopAddressListImportJob"></a>

```typescript
public readonly StopAddressListImportJob: string;
```

- *Type:* string

[Write] ses:StopAddressListImportJob.

---

##### `StopArchiveExport`<sup>Required</sup> <a name="StopArchiveExport" id="@cdk_utils/iam.ses.SesActions.property.StopArchiveExport"></a>

```typescript
public readonly StopArchiveExport: string;
```

- *Type:* string

[Write] ses:StopArchiveExport.

---

##### `StopArchiveSearch`<sup>Required</sup> <a name="StopArchiveSearch" id="@cdk_utils/iam.ses.SesActions.property.StopArchiveSearch"></a>

```typescript
public readonly StopArchiveSearch: string;
```

- *Type:* string

[Write] ses:StopArchiveSearch.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ses.SesActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ses:TagResource.

---

##### `TestRenderEmailTemplate`<sup>Required</sup> <a name="TestRenderEmailTemplate" id="@cdk_utils/iam.ses.SesActions.property.TestRenderEmailTemplate"></a>

```typescript
public readonly TestRenderEmailTemplate: string;
```

- *Type:* string

[Write] ses:TestRenderEmailTemplate.

---

##### `TestRenderTemplate`<sup>Required</sup> <a name="TestRenderTemplate" id="@cdk_utils/iam.ses.SesActions.property.TestRenderTemplate"></a>

```typescript
public readonly TestRenderTemplate: string;
```

- *Type:* string

[Write] ses:TestRenderTemplate.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ses.SesActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ses:UntagResource.

---

##### `UpdateAccountSendingEnabled`<sup>Required</sup> <a name="UpdateAccountSendingEnabled" id="@cdk_utils/iam.ses.SesActions.property.UpdateAccountSendingEnabled"></a>

```typescript
public readonly UpdateAccountSendingEnabled: string;
```

- *Type:* string

[Write] ses:UpdateAccountSendingEnabled.

---

##### `UpdateArchive`<sup>Required</sup> <a name="UpdateArchive" id="@cdk_utils/iam.ses.SesActions.property.UpdateArchive"></a>

```typescript
public readonly UpdateArchive: string;
```

- *Type:* string

[Write] ses:UpdateArchive.

---

##### `UpdateConfigurationSetEventDestination`<sup>Required</sup> <a name="UpdateConfigurationSetEventDestination" id="@cdk_utils/iam.ses.SesActions.property.UpdateConfigurationSetEventDestination"></a>

```typescript
public readonly UpdateConfigurationSetEventDestination: string;
```

- *Type:* string

[Write] ses:UpdateConfigurationSetEventDestination.

---

##### `UpdateConfigurationSetReputationMetricsEnabled`<sup>Required</sup> <a name="UpdateConfigurationSetReputationMetricsEnabled" id="@cdk_utils/iam.ses.SesActions.property.UpdateConfigurationSetReputationMetricsEnabled"></a>

```typescript
public readonly UpdateConfigurationSetReputationMetricsEnabled: string;
```

- *Type:* string

[Write] ses:UpdateConfigurationSetReputationMetricsEnabled.

---

##### `UpdateConfigurationSetSendingEnabled`<sup>Required</sup> <a name="UpdateConfigurationSetSendingEnabled" id="@cdk_utils/iam.ses.SesActions.property.UpdateConfigurationSetSendingEnabled"></a>

```typescript
public readonly UpdateConfigurationSetSendingEnabled: string;
```

- *Type:* string

[Write] ses:UpdateConfigurationSetSendingEnabled.

---

##### `UpdateConfigurationSetTrackingOptions`<sup>Required</sup> <a name="UpdateConfigurationSetTrackingOptions" id="@cdk_utils/iam.ses.SesActions.property.UpdateConfigurationSetTrackingOptions"></a>

```typescript
public readonly UpdateConfigurationSetTrackingOptions: string;
```

- *Type:* string

[Write] ses:UpdateConfigurationSetTrackingOptions.

---

##### `UpdateContact`<sup>Required</sup> <a name="UpdateContact" id="@cdk_utils/iam.ses.SesActions.property.UpdateContact"></a>

```typescript
public readonly UpdateContact: string;
```

- *Type:* string

[Write] ses:UpdateContact.

---

##### `UpdateContactList`<sup>Required</sup> <a name="UpdateContactList" id="@cdk_utils/iam.ses.SesActions.property.UpdateContactList"></a>

```typescript
public readonly UpdateContactList: string;
```

- *Type:* string

[Write] ses:UpdateContactList.

---

##### `UpdateCustomVerificationEmailTemplate`<sup>Required</sup> <a name="UpdateCustomVerificationEmailTemplate" id="@cdk_utils/iam.ses.SesActions.property.UpdateCustomVerificationEmailTemplate"></a>

```typescript
public readonly UpdateCustomVerificationEmailTemplate: string;
```

- *Type:* string

[Write] ses:UpdateCustomVerificationEmailTemplate.

---

##### `UpdateEmailIdentityPolicy`<sup>Required</sup> <a name="UpdateEmailIdentityPolicy" id="@cdk_utils/iam.ses.SesActions.property.UpdateEmailIdentityPolicy"></a>

```typescript
public readonly UpdateEmailIdentityPolicy: string;
```

- *Type:* string

[PermissionManagement] ses:UpdateEmailIdentityPolicy.

---

##### `UpdateEmailTemplate`<sup>Required</sup> <a name="UpdateEmailTemplate" id="@cdk_utils/iam.ses.SesActions.property.UpdateEmailTemplate"></a>

```typescript
public readonly UpdateEmailTemplate: string;
```

- *Type:* string

[Write] ses:UpdateEmailTemplate.

---

##### `UpdateIngressPoint`<sup>Required</sup> <a name="UpdateIngressPoint" id="@cdk_utils/iam.ses.SesActions.property.UpdateIngressPoint"></a>

```typescript
public readonly UpdateIngressPoint: string;
```

- *Type:* string

[Write] ses:UpdateIngressPoint.

---

##### `UpdateReceiptRule`<sup>Required</sup> <a name="UpdateReceiptRule" id="@cdk_utils/iam.ses.SesActions.property.UpdateReceiptRule"></a>

```typescript
public readonly UpdateReceiptRule: string;
```

- *Type:* string

[Write] ses:UpdateReceiptRule.

---

##### `UpdateRelay`<sup>Required</sup> <a name="UpdateRelay" id="@cdk_utils/iam.ses.SesActions.property.UpdateRelay"></a>

```typescript
public readonly UpdateRelay: string;
```

- *Type:* string

[Write] ses:UpdateRelay.

---

##### `UpdateReputationEntityCustomerManagedStatus`<sup>Required</sup> <a name="UpdateReputationEntityCustomerManagedStatus" id="@cdk_utils/iam.ses.SesActions.property.UpdateReputationEntityCustomerManagedStatus"></a>

```typescript
public readonly UpdateReputationEntityCustomerManagedStatus: string;
```

- *Type:* string

[Write] ses:UpdateReputationEntityCustomerManagedStatus.

---

##### `UpdateReputationEntityPolicy`<sup>Required</sup> <a name="UpdateReputationEntityPolicy" id="@cdk_utils/iam.ses.SesActions.property.UpdateReputationEntityPolicy"></a>

```typescript
public readonly UpdateReputationEntityPolicy: string;
```

- *Type:* string

[Write] ses:UpdateReputationEntityPolicy.

---

##### `UpdateRuleSet`<sup>Required</sup> <a name="UpdateRuleSet" id="@cdk_utils/iam.ses.SesActions.property.UpdateRuleSet"></a>

```typescript
public readonly UpdateRuleSet: string;
```

- *Type:* string

[Write] ses:UpdateRuleSet.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.ses.SesActions.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string;
```

- *Type:* string

[Write] ses:UpdateTemplate.

---

##### `UpdateTrafficPolicy`<sup>Required</sup> <a name="UpdateTrafficPolicy" id="@cdk_utils/iam.ses.SesActions.property.UpdateTrafficPolicy"></a>

```typescript
public readonly UpdateTrafficPolicy: string;
```

- *Type:* string

[Write] ses:UpdateTrafficPolicy.

---

##### `VerifyDomainDkim`<sup>Required</sup> <a name="VerifyDomainDkim" id="@cdk_utils/iam.ses.SesActions.property.VerifyDomainDkim"></a>

```typescript
public readonly VerifyDomainDkim: string;
```

- *Type:* string

[Write] ses:VerifyDomainDkim.

---

##### `VerifyDomainIdentity`<sup>Required</sup> <a name="VerifyDomainIdentity" id="@cdk_utils/iam.ses.SesActions.property.VerifyDomainIdentity"></a>

```typescript
public readonly VerifyDomainIdentity: string;
```

- *Type:* string

[Write] ses:VerifyDomainIdentity.

---

##### `VerifyEmailAddress`<sup>Required</sup> <a name="VerifyEmailAddress" id="@cdk_utils/iam.ses.SesActions.property.VerifyEmailAddress"></a>

```typescript
public readonly VerifyEmailAddress: string;
```

- *Type:* string

[Write] ses:VerifyEmailAddress.

---

##### `VerifyEmailIdentity`<sup>Required</sup> <a name="VerifyEmailIdentity" id="@cdk_utils/iam.ses.SesActions.property.VerifyEmailIdentity"></a>

```typescript
public readonly VerifyEmailIdentity: string;
```

- *Type:* string

[Write] ses:VerifyEmailIdentity.

---

### SesConditions <a name="SesConditions" id="@cdk_utils/iam.ses.SesConditions"></a>

Condition key constants and builders for ses.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ses.SesConditions.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

new ses.SesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.addonSubscriptionARN">addonSubscriptionARN</a></code> | Generates a condition block for `ses:AddonSubscriptionArn`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.apiVersion">apiVersion</a></code> | Generates a condition block for `ses:ApiVersion`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.exportSourceType">exportSourceType</a></code> | Generates a condition block for `ses:ExportSourceType`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.feedbackAddress">feedbackAddress</a></code> | Generates a condition block for `ses:FeedbackAddress`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.fromAddress">fromAddress</a></code> | Generates a condition block for `ses:FromAddress`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.fromDisplayName">fromDisplayName</a></code> | Generates a condition block for `ses:FromDisplayName`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.mailManagerIngressPointType">mailManagerIngressPointType</a></code> | Generates a condition block for `ses:MailManagerIngressPointType`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.mailManagerRuleSetARN">mailManagerRuleSetARN</a></code> | Generates a condition block for `ses:MailManagerRuleSetArn`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.mailManagerTrafficPolicyARN">mailManagerTrafficPolicyARN</a></code> | Generates a condition block for `ses:MailManagerTrafficPolicyArn`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.multiRegionEndpointId">multiRegionEndpointId</a></code> | Generates a condition block for `ses:MultiRegionEndpointId`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.recipients">recipients</a></code> | Generates a condition block for `ses:Recipients`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.replicaRegion">replicaRegion</a></code> | Generates a condition block for `ses:ReplicaRegion`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.tenantName">tenantName</a></code> | Generates a condition block for `ses:TenantName`. |

---

##### `addonSubscriptionARN` <a name="addonSubscriptionARN" id="@cdk_utils/iam.ses.SesConditions.addonSubscriptionARN"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.addonSubscriptionARN(value: string)
```

Generates a condition block for `ses:AddonSubscriptionArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.addonSubscriptionARN.parameter.value"></a>

- *Type:* string

---

##### `apiVersion` <a name="apiVersion" id="@cdk_utils/iam.ses.SesConditions.apiVersion"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.apiVersion(value: string)
```

Generates a condition block for `ses:ApiVersion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.apiVersion.parameter.value"></a>

- *Type:* string

---

##### `exportSourceType` <a name="exportSourceType" id="@cdk_utils/iam.ses.SesConditions.exportSourceType"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.exportSourceType(value: string)
```

Generates a condition block for `ses:ExportSourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.exportSourceType.parameter.value"></a>

- *Type:* string

---

##### `feedbackAddress` <a name="feedbackAddress" id="@cdk_utils/iam.ses.SesConditions.feedbackAddress"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.feedbackAddress(value: string)
```

Generates a condition block for `ses:FeedbackAddress`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.feedbackAddress.parameter.value"></a>

- *Type:* string

---

##### `fromAddress` <a name="fromAddress" id="@cdk_utils/iam.ses.SesConditions.fromAddress"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.fromAddress(value: string)
```

Generates a condition block for `ses:FromAddress`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.fromAddress.parameter.value"></a>

- *Type:* string

---

##### `fromDisplayName` <a name="fromDisplayName" id="@cdk_utils/iam.ses.SesConditions.fromDisplayName"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.fromDisplayName(value: string)
```

Generates a condition block for `ses:FromDisplayName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.fromDisplayName.parameter.value"></a>

- *Type:* string

---

##### `mailManagerIngressPointType` <a name="mailManagerIngressPointType" id="@cdk_utils/iam.ses.SesConditions.mailManagerIngressPointType"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.mailManagerIngressPointType(value: string)
```

Generates a condition block for `ses:MailManagerIngressPointType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.mailManagerIngressPointType.parameter.value"></a>

- *Type:* string

---

##### `mailManagerRuleSetARN` <a name="mailManagerRuleSetARN" id="@cdk_utils/iam.ses.SesConditions.mailManagerRuleSetARN"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.mailManagerRuleSetARN(value: string)
```

Generates a condition block for `ses:MailManagerRuleSetArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.mailManagerRuleSetARN.parameter.value"></a>

- *Type:* string

---

##### `mailManagerTrafficPolicyARN` <a name="mailManagerTrafficPolicyARN" id="@cdk_utils/iam.ses.SesConditions.mailManagerTrafficPolicyARN"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.mailManagerTrafficPolicyARN(value: string)
```

Generates a condition block for `ses:MailManagerTrafficPolicyArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.mailManagerTrafficPolicyARN.parameter.value"></a>

- *Type:* string

---

##### `multiRegionEndpointId` <a name="multiRegionEndpointId" id="@cdk_utils/iam.ses.SesConditions.multiRegionEndpointId"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.multiRegionEndpointId(value: string)
```

Generates a condition block for `ses:MultiRegionEndpointId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.multiRegionEndpointId.parameter.value"></a>

- *Type:* string

---

##### `recipients` <a name="recipients" id="@cdk_utils/iam.ses.SesConditions.recipients"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.recipients(values: string[])
```

Generates a condition block for `ses:Recipients`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ses.SesConditions.recipients.parameter.values"></a>

- *Type:* string[]

---

##### `replicaRegion` <a name="replicaRegion" id="@cdk_utils/iam.ses.SesConditions.replicaRegion"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.replicaRegion(values: string[])
```

Generates a condition block for `ses:ReplicaRegion`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ses.SesConditions.replicaRegion.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ses.SesConditions.requestTag"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ses.SesConditions.resourceTag"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ses.SesConditions.tagKeys"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ses.SesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `tenantName` <a name="tenantName" id="@cdk_utils/iam.ses.SesConditions.tenantName"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesConditions.tenantName(value: string)
```

Generates a condition block for `ses:TenantName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ses.SesConditions.tenantName.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetAccountConditionKeys">actionGetAccountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccount action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetAccountSendingEnabledConditionKeys">actionGetAccountSendingEnabledConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccountSendingEnabled action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetBlacklistReportsConditionKeys">actionGetBlacklistReportsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBlacklistReports action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetConfigurationSetConditionKeys">actionGetConfigurationSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConfigurationSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetConfigurationSetEventDestinationsConditionKeys">actionGetConfigurationSetEventDestinationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConfigurationSetEventDestinations action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetContactConditionKeys">actionGetContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetContact action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetContactListConditionKeys">actionGetContactListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetContactList action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetCustomVerificationEmailTemplateConditionKeys">actionGetCustomVerificationEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCustomVerificationEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetDedicatedIpConditionKeys">actionGetDedicatedIpConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDedicatedIp action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetDedicatedIpPoolConditionKeys">actionGetDedicatedIpPoolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDedicatedIpPool action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetDedicatedIpsConditionKeys">actionGetDedicatedIpsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDedicatedIps action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetDeliverabilityDashboardOptionsConditionKeys">actionGetDeliverabilityDashboardOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDeliverabilityDashboardOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetDeliverabilityTestReportConditionKeys">actionGetDeliverabilityTestReportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDeliverabilityTestReport action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetDomainDeliverabilityCampaignConditionKeys">actionGetDomainDeliverabilityCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDomainDeliverabilityCampaign action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetDomainStatisticsReportConditionKeys">actionGetDomainStatisticsReportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDomainStatisticsReport action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetEmailAddressInsightsConditionKeys">actionGetEmailAddressInsightsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEmailAddressInsights action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetEmailIdentityConditionKeys">actionGetEmailIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEmailIdentity action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetEmailIdentityPoliciesConditionKeys">actionGetEmailIdentityPoliciesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEmailIdentityPolicies action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetEmailTemplateConditionKeys">actionGetEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetExportJobConditionKeys">actionGetExportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetExportJob action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetIdentityDkimAttributesConditionKeys">actionGetIdentityDkimAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIdentityDkimAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetIdentityMailFromDomainAttributesConditionKeys">actionGetIdentityMailFromDomainAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIdentityMailFromDomainAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetIdentityNotificationAttributesConditionKeys">actionGetIdentityNotificationAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIdentityNotificationAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetIdentityPoliciesConditionKeys">actionGetIdentityPoliciesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIdentityPolicies action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetIdentityVerificationAttributesConditionKeys">actionGetIdentityVerificationAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIdentityVerificationAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetImportJobConditionKeys">actionGetImportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetImportJob action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetMessageInsightsConditionKeys">actionGetMessageInsightsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMessageInsights action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetMultiRegionEndpointConditionKeys">actionGetMultiRegionEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMultiRegionEndpoint action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetReputationEntityConditionKeys">actionGetReputationEntityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetReputationEntity action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetSendQuotaConditionKeys">actionGetSendQuotaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSendQuota action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetSendStatisticsConditionKeys">actionGetSendStatisticsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSendStatistics action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetSuppressedDestinationConditionKeys">actionGetSuppressedDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSuppressedDestination action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetTemplateConditionKeys">actionGetTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionGetTenantConditionKeys">actionGetTenantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTenant action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionSetActiveReceiptRuleSetConditionKeys">actionSetActiveReceiptRuleSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetActiveReceiptRuleSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionSetIdentityDkimEnabledConditionKeys">actionSetIdentityDkimEnabledConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetIdentityDkimEnabled action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionSetIdentityFeedbackForwardingEnabledConditionKeys">actionSetIdentityFeedbackForwardingEnabledConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetIdentityFeedbackForwardingEnabled action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionSetIdentityHeadersInNotificationsEnabledConditionKeys">actionSetIdentityHeadersInNotificationsEnabledConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetIdentityHeadersInNotificationsEnabled action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionSetIdentityMailFromDomainConditionKeys">actionSetIdentityMailFromDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetIdentityMailFromDomain action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionSetIdentityNotificationTopicConditionKeys">actionSetIdentityNotificationTopicConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetIdentityNotificationTopic action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.actionSetReceiptRulePositionConditionKeys">actionSetReceiptRulePositionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetReceiptRulePosition action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ADDON_SUBSCRIPTION_ARN">ADDON_SUBSCRIPTION_ARN</a></code> | <code>string</code> | Condition key: ses:AddonSubscriptionArn (ARN). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.API_VERSION">API_VERSION</a></code> | <code>string</code> | Condition key: ses:ApiVersion (String). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.BatchGetMetricDataConditionKeys">BatchGetMetricDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchGetMetricData action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CancelExportJobConditionKeys">CancelExportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelExportJob action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CloneReceiptRuleSetConditionKeys">CloneReceiptRuleSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CloneReceiptRuleSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateAddonInstanceConditionKeys">CreateAddonInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAddonInstance action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateAddonSubscriptionConditionKeys">CreateAddonSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAddonSubscription action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateAddressListConditionKeys">CreateAddressListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAddressList action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateArchiveConditionKeys">CreateArchiveConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateArchive action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateConfigurationSetConditionKeys">CreateConfigurationSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConfigurationSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateConfigurationSetEventDestinationConditionKeys">CreateConfigurationSetEventDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConfigurationSetEventDestination action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateConfigurationSetTrackingOptionsConditionKeys">CreateConfigurationSetTrackingOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConfigurationSetTrackingOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateContactConditionKeys">CreateContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContact action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateContactListConditionKeys">CreateContactListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContactList action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateCustomVerificationEmailTemplateConditionKeys">CreateCustomVerificationEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomVerificationEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateDedicatedIpPoolConditionKeys">CreateDedicatedIpPoolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDedicatedIpPool action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateDeliverabilityTestReportConditionKeys">CreateDeliverabilityTestReportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeliverabilityTestReport action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateEmailIdentityConditionKeys">CreateEmailIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEmailIdentity action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateEmailIdentityPolicyConditionKeys">CreateEmailIdentityPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEmailIdentityPolicy action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateEmailTemplateConditionKeys">CreateEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateExportJobConditionKeys">CreateExportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExportJob action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateImportJobConditionKeys">CreateImportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateImportJob action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateIngressPointConditionKeys">CreateIngressPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIngressPoint action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateMultiRegionEndpointConditionKeys">CreateMultiRegionEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMultiRegionEndpoint action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateReceiptFilterConditionKeys">CreateReceiptFilterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReceiptFilter action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateReceiptRuleConditionKeys">CreateReceiptRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReceiptRule action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateReceiptRuleSetConditionKeys">CreateReceiptRuleSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReceiptRuleSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateRelayConditionKeys">CreateRelayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRelay action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateRuleSetConditionKeys">CreateRuleSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRuleSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateTemplateConditionKeys">CreateTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateTenantConditionKeys">CreateTenantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTenant action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateTenantResourceAssociationConditionKeys">CreateTenantResourceAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTenantResourceAssociation action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.CreateTrafficPolicyConditionKeys">CreateTrafficPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTrafficPolicy action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteConfigurationSetConditionKeys">DeleteConfigurationSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteConfigurationSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteConfigurationSetEventDestinationConditionKeys">DeleteConfigurationSetEventDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteConfigurationSetEventDestination action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteConfigurationSetTrackingOptionsConditionKeys">DeleteConfigurationSetTrackingOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteConfigurationSetTrackingOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteContactConditionKeys">DeleteContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteContact action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteContactListConditionKeys">DeleteContactListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteContactList action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteCustomVerificationEmailTemplateConditionKeys">DeleteCustomVerificationEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCustomVerificationEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteDedicatedIpPoolConditionKeys">DeleteDedicatedIpPoolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDedicatedIpPool action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteEmailIdentityConditionKeys">DeleteEmailIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEmailIdentity action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteEmailIdentityPolicyConditionKeys">DeleteEmailIdentityPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEmailIdentityPolicy action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteEmailTemplateConditionKeys">DeleteEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteIdentityConditionKeys">DeleteIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteIdentity action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteIdentityPolicyConditionKeys">DeleteIdentityPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteIdentityPolicy action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteMultiRegionEndpointConditionKeys">DeleteMultiRegionEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteMultiRegionEndpoint action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteReceiptFilterConditionKeys">DeleteReceiptFilterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteReceiptFilter action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteReceiptRuleConditionKeys">DeleteReceiptRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteReceiptRule action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteReceiptRuleSetConditionKeys">DeleteReceiptRuleSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteReceiptRuleSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteSuppressedDestinationConditionKeys">DeleteSuppressedDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSuppressedDestination action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteTemplateConditionKeys">DeleteTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteTenantConditionKeys">DeleteTenantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTenant action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteTenantResourceAssociationConditionKeys">DeleteTenantResourceAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTenantResourceAssociation action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DeleteVerifiedEmailAddressConditionKeys">DeleteVerifiedEmailAddressConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteVerifiedEmailAddress action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DescribeActiveReceiptRuleSetConditionKeys">DescribeActiveReceiptRuleSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeActiveReceiptRuleSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DescribeConfigurationSetConditionKeys">DescribeConfigurationSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeConfigurationSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DescribeReceiptRuleConditionKeys">DescribeReceiptRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeReceiptRule action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.DescribeReceiptRuleSetConditionKeys">DescribeReceiptRuleSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeReceiptRuleSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.EXPORT_SOURCE_TYPE">EXPORT_SOURCE_TYPE</a></code> | <code>string</code> | Condition key: ses:ExportSourceType (String). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.FEEDBACK_ADDRESS">FEEDBACK_ADDRESS</a></code> | <code>string</code> | Condition key: ses:FeedbackAddress (String). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.FROM_ADDRESS">FROM_ADDRESS</a></code> | <code>string</code> | Condition key: ses:FromAddress (String). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.FROM_DISPLAY_NAME">FROM_DISPLAY_NAME</a></code> | <code>string</code> | Condition key: ses:FromDisplayName (String). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListConfigurationSetsConditionKeys">ListConfigurationSetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListConfigurationSets action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListContactListsConditionKeys">ListContactListsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListContactLists action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListContactsConditionKeys">ListContactsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListContacts action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListCustomVerificationEmailTemplatesConditionKeys">ListCustomVerificationEmailTemplatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListCustomVerificationEmailTemplates action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListDedicatedIpPoolsConditionKeys">ListDedicatedIpPoolsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDedicatedIpPools action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListDeliverabilityTestReportsConditionKeys">ListDeliverabilityTestReportsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDeliverabilityTestReports action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListDomainDeliverabilityCampaignsConditionKeys">ListDomainDeliverabilityCampaignsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDomainDeliverabilityCampaigns action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListEmailIdentitiesConditionKeys">ListEmailIdentitiesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEmailIdentities action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListEmailTemplatesConditionKeys">ListEmailTemplatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEmailTemplates action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListExportJobsConditionKeys">ListExportJobsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListExportJobs action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListIdentitiesConditionKeys">ListIdentitiesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListIdentities action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListIdentityPoliciesConditionKeys">ListIdentityPoliciesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListIdentityPolicies action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListImportJobsConditionKeys">ListImportJobsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListImportJobs action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListMultiRegionEndpointsConditionKeys">ListMultiRegionEndpointsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListMultiRegionEndpoints action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListReceiptFiltersConditionKeys">ListReceiptFiltersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListReceiptFilters action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListReceiptRuleSetsConditionKeys">ListReceiptRuleSetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListReceiptRuleSets action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListRecommendationsConditionKeys">ListRecommendationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRecommendations action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListReputationEntitiesConditionKeys">ListReputationEntitiesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListReputationEntities action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListResourceTenantsConditionKeys">ListResourceTenantsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceTenants action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListSuppressedDestinationsConditionKeys">ListSuppressedDestinationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSuppressedDestinations action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListTemplatesConditionKeys">ListTemplatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTemplates action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListTenantResourcesConditionKeys">ListTenantResourcesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTenantResources action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListTenantsConditionKeys">ListTenantsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTenants action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ListVerifiedEmailAddressesConditionKeys">ListVerifiedEmailAddressesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListVerifiedEmailAddresses action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.MAIL_MANAGER_INGRESS_POINT_TYPE">MAIL_MANAGER_INGRESS_POINT_TYPE</a></code> | <code>string</code> | Condition key: ses:MailManagerIngressPointType (String). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.MAIL_MANAGER_RULE_SET_ARN">MAIL_MANAGER_RULE_SET_ARN</a></code> | <code>string</code> | Condition key: ses:MailManagerRuleSetArn (ARN). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.MAIL_MANAGER_TRAFFIC_POLICY_ARN">MAIL_MANAGER_TRAFFIC_POLICY_ARN</a></code> | <code>string</code> | Condition key: ses:MailManagerTrafficPolicyArn (ARN). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.MULTI_REGION_ENDPOINT_ID">MULTI_REGION_ENDPOINT_ID</a></code> | <code>string</code> | Condition key: ses:MultiRegionEndpointId (String). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutAccountDedicatedIpWarmupAttributesConditionKeys">PutAccountDedicatedIpWarmupAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountDedicatedIpWarmupAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutAccountDetailsConditionKeys">PutAccountDetailsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountDetails action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutAccountPricingAttributesConditionKeys">PutAccountPricingAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountPricingAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutAccountSendingAttributesConditionKeys">PutAccountSendingAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountSendingAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutAccountSuppressionAttributesConditionKeys">PutAccountSuppressionAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountSuppressionAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutAccountVdmAttributesConditionKeys">PutAccountVdmAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountVdmAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetArchivingOptionsConditionKeys">PutConfigurationSetArchivingOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConfigurationSetArchivingOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetDeliveryOptionsConditionKeys">PutConfigurationSetDeliveryOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConfigurationSetDeliveryOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetReputationOptionsConditionKeys">PutConfigurationSetReputationOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConfigurationSetReputationOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetSendingOptionsConditionKeys">PutConfigurationSetSendingOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConfigurationSetSendingOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetSuppressionOptionsConditionKeys">PutConfigurationSetSuppressionOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConfigurationSetSuppressionOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetTrackingOptionsConditionKeys">PutConfigurationSetTrackingOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConfigurationSetTrackingOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetVdmOptionsConditionKeys">PutConfigurationSetVdmOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConfigurationSetVdmOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutDedicatedIpInPoolConditionKeys">PutDedicatedIpInPoolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDedicatedIpInPool action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutDedicatedIpPoolScalingAttributesConditionKeys">PutDedicatedIpPoolScalingAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDedicatedIpPoolScalingAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutDedicatedIpWarmupAttributesConditionKeys">PutDedicatedIpWarmupAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDedicatedIpWarmupAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutDeliverabilityDashboardOptionConditionKeys">PutDeliverabilityDashboardOptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDeliverabilityDashboardOption action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutEmailIdentityConfigurationSetAttributesConditionKeys">PutEmailIdentityConfigurationSetAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutEmailIdentityConfigurationSetAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutEmailIdentityDkimAttributesConditionKeys">PutEmailIdentityDkimAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutEmailIdentityDkimAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutEmailIdentityDkimSigningAttributesConditionKeys">PutEmailIdentityDkimSigningAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutEmailIdentityDkimSigningAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutEmailIdentityFeedbackAttributesConditionKeys">PutEmailIdentityFeedbackAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutEmailIdentityFeedbackAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutEmailIdentityMailFromAttributesConditionKeys">PutEmailIdentityMailFromAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutEmailIdentityMailFromAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutIdentityPolicyConditionKeys">PutIdentityPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutIdentityPolicy action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutSuppressedDestinationConditionKeys">PutSuppressedDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutSuppressedDestination action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.PutTenantSuppressionAttributesConditionKeys">PutTenantSuppressionAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTenantSuppressionAttributes action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.RECIPIENTS">RECIPIENTS</a></code> | <code>string</code> | Condition key: ses:Recipients (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ReorderReceiptRuleSetConditionKeys">ReorderReceiptRuleSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReorderReceiptRuleSet action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.REPLICA_REGION">REPLICA_REGION</a></code> | <code>string</code> | Condition key: ses:ReplicaRegion (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.ReplicateEmailIdentityDkimSigningKeyConditionKeys">ReplicateEmailIdentityDkimSigningKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReplicateEmailIdentityDkimSigningKey action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.SendBounceConditionKeys">SendBounceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendBounce action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.SendBulkEmailConditionKeys">SendBulkEmailConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendBulkEmail action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.SendBulkTemplatedEmailConditionKeys">SendBulkTemplatedEmailConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendBulkTemplatedEmail action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.SendCustomVerificationEmailConditionKeys">SendCustomVerificationEmailConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendCustomVerificationEmail action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.SendEmailConditionKeys">SendEmailConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendEmail action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.SendRawEmailConditionKeys">SendRawEmailConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendRawEmail action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.SendTemplatedEmailConditionKeys">SendTemplatedEmailConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendTemplatedEmail action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.TENANT_NAME">TENANT_NAME</a></code> | <code>string</code> | Condition key: ses:TenantName (String). |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.TestRenderEmailTemplateConditionKeys">TestRenderEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TestRenderEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.TestRenderTemplateConditionKeys">TestRenderTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TestRenderTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateAccountSendingEnabledConditionKeys">UpdateAccountSendingEnabledConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAccountSendingEnabled action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateConfigurationSetEventDestinationConditionKeys">UpdateConfigurationSetEventDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConfigurationSetEventDestination action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateConfigurationSetReputationMetricsEnabledConditionKeys">UpdateConfigurationSetReputationMetricsEnabledConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConfigurationSetReputationMetricsEnabled action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateConfigurationSetSendingEnabledConditionKeys">UpdateConfigurationSetSendingEnabledConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConfigurationSetSendingEnabled action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateConfigurationSetTrackingOptionsConditionKeys">UpdateConfigurationSetTrackingOptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConfigurationSetTrackingOptions action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateContactConditionKeys">UpdateContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContact action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateContactListConditionKeys">UpdateContactListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactList action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateCustomVerificationEmailTemplateConditionKeys">UpdateCustomVerificationEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCustomVerificationEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateEmailIdentityPolicyConditionKeys">UpdateEmailIdentityPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEmailIdentityPolicy action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateEmailTemplateConditionKeys">UpdateEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateIngressPointConditionKeys">UpdateIngressPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateIngressPoint action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateReceiptRuleConditionKeys">UpdateReceiptRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateReceiptRule action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateReputationEntityCustomerManagedStatusConditionKeys">UpdateReputationEntityCustomerManagedStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateReputationEntityCustomerManagedStatus action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateReputationEntityPolicyConditionKeys">UpdateReputationEntityPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateReputationEntityPolicy action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.UpdateTemplateConditionKeys">UpdateTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTemplate action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.VerifyDomainDkimConditionKeys">VerifyDomainDkimConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyDomainDkim action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.VerifyDomainIdentityConditionKeys">VerifyDomainIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyDomainIdentity action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.VerifyEmailAddressConditionKeys">VerifyEmailAddressConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyEmailAddress action. |
| <code><a href="#@cdk_utils/iam.ses.SesConditions.property.VerifyEmailIdentityConditionKeys">VerifyEmailIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyEmailIdentity action. |

---

##### `actionGetAccountConditionKeys`<sup>Required</sup> <a name="actionGetAccountConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetAccountConditionKeys"></a>

```typescript
public readonly actionGetAccountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccount action.

---

##### `actionGetAccountSendingEnabledConditionKeys`<sup>Required</sup> <a name="actionGetAccountSendingEnabledConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetAccountSendingEnabledConditionKeys"></a>

```typescript
public readonly actionGetAccountSendingEnabledConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccountSendingEnabled action.

---

##### `actionGetBlacklistReportsConditionKeys`<sup>Required</sup> <a name="actionGetBlacklistReportsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetBlacklistReportsConditionKeys"></a>

```typescript
public readonly actionGetBlacklistReportsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBlacklistReports action.

---

##### `actionGetConfigurationSetConditionKeys`<sup>Required</sup> <a name="actionGetConfigurationSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetConfigurationSetConditionKeys"></a>

```typescript
public readonly actionGetConfigurationSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConfigurationSet action.

---

##### `actionGetConfigurationSetEventDestinationsConditionKeys`<sup>Required</sup> <a name="actionGetConfigurationSetEventDestinationsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetConfigurationSetEventDestinationsConditionKeys"></a>

```typescript
public readonly actionGetConfigurationSetEventDestinationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConfigurationSetEventDestinations action.

---

##### `actionGetContactConditionKeys`<sup>Required</sup> <a name="actionGetContactConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetContactConditionKeys"></a>

```typescript
public readonly actionGetContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetContact action.

---

##### `actionGetContactListConditionKeys`<sup>Required</sup> <a name="actionGetContactListConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetContactListConditionKeys"></a>

```typescript
public readonly actionGetContactListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetContactList action.

---

##### `actionGetCustomVerificationEmailTemplateConditionKeys`<sup>Required</sup> <a name="actionGetCustomVerificationEmailTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetCustomVerificationEmailTemplateConditionKeys"></a>

```typescript
public readonly actionGetCustomVerificationEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCustomVerificationEmailTemplate action.

---

##### `actionGetDedicatedIpConditionKeys`<sup>Required</sup> <a name="actionGetDedicatedIpConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetDedicatedIpConditionKeys"></a>

```typescript
public readonly actionGetDedicatedIpConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDedicatedIp action.

---

##### `actionGetDedicatedIpPoolConditionKeys`<sup>Required</sup> <a name="actionGetDedicatedIpPoolConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetDedicatedIpPoolConditionKeys"></a>

```typescript
public readonly actionGetDedicatedIpPoolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDedicatedIpPool action.

---

##### `actionGetDedicatedIpsConditionKeys`<sup>Required</sup> <a name="actionGetDedicatedIpsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetDedicatedIpsConditionKeys"></a>

```typescript
public readonly actionGetDedicatedIpsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDedicatedIps action.

---

##### `actionGetDeliverabilityDashboardOptionsConditionKeys`<sup>Required</sup> <a name="actionGetDeliverabilityDashboardOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetDeliverabilityDashboardOptionsConditionKeys"></a>

```typescript
public readonly actionGetDeliverabilityDashboardOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDeliverabilityDashboardOptions action.

---

##### `actionGetDeliverabilityTestReportConditionKeys`<sup>Required</sup> <a name="actionGetDeliverabilityTestReportConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetDeliverabilityTestReportConditionKeys"></a>

```typescript
public readonly actionGetDeliverabilityTestReportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDeliverabilityTestReport action.

---

##### `actionGetDomainDeliverabilityCampaignConditionKeys`<sup>Required</sup> <a name="actionGetDomainDeliverabilityCampaignConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetDomainDeliverabilityCampaignConditionKeys"></a>

```typescript
public readonly actionGetDomainDeliverabilityCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDomainDeliverabilityCampaign action.

---

##### `actionGetDomainStatisticsReportConditionKeys`<sup>Required</sup> <a name="actionGetDomainStatisticsReportConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetDomainStatisticsReportConditionKeys"></a>

```typescript
public readonly actionGetDomainStatisticsReportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDomainStatisticsReport action.

---

##### `actionGetEmailAddressInsightsConditionKeys`<sup>Required</sup> <a name="actionGetEmailAddressInsightsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetEmailAddressInsightsConditionKeys"></a>

```typescript
public readonly actionGetEmailAddressInsightsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEmailAddressInsights action.

---

##### `actionGetEmailIdentityConditionKeys`<sup>Required</sup> <a name="actionGetEmailIdentityConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetEmailIdentityConditionKeys"></a>

```typescript
public readonly actionGetEmailIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEmailIdentity action.

---

##### `actionGetEmailIdentityPoliciesConditionKeys`<sup>Required</sup> <a name="actionGetEmailIdentityPoliciesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetEmailIdentityPoliciesConditionKeys"></a>

```typescript
public readonly actionGetEmailIdentityPoliciesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEmailIdentityPolicies action.

---

##### `actionGetEmailTemplateConditionKeys`<sup>Required</sup> <a name="actionGetEmailTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetEmailTemplateConditionKeys"></a>

```typescript
public readonly actionGetEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEmailTemplate action.

---

##### `actionGetExportJobConditionKeys`<sup>Required</sup> <a name="actionGetExportJobConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetExportJobConditionKeys"></a>

```typescript
public readonly actionGetExportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetExportJob action.

---

##### `actionGetIdentityDkimAttributesConditionKeys`<sup>Required</sup> <a name="actionGetIdentityDkimAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetIdentityDkimAttributesConditionKeys"></a>

```typescript
public readonly actionGetIdentityDkimAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIdentityDkimAttributes action.

---

##### `actionGetIdentityMailFromDomainAttributesConditionKeys`<sup>Required</sup> <a name="actionGetIdentityMailFromDomainAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetIdentityMailFromDomainAttributesConditionKeys"></a>

```typescript
public readonly actionGetIdentityMailFromDomainAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIdentityMailFromDomainAttributes action.

---

##### `actionGetIdentityNotificationAttributesConditionKeys`<sup>Required</sup> <a name="actionGetIdentityNotificationAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetIdentityNotificationAttributesConditionKeys"></a>

```typescript
public readonly actionGetIdentityNotificationAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIdentityNotificationAttributes action.

---

##### `actionGetIdentityPoliciesConditionKeys`<sup>Required</sup> <a name="actionGetIdentityPoliciesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetIdentityPoliciesConditionKeys"></a>

```typescript
public readonly actionGetIdentityPoliciesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIdentityPolicies action.

---

##### `actionGetIdentityVerificationAttributesConditionKeys`<sup>Required</sup> <a name="actionGetIdentityVerificationAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetIdentityVerificationAttributesConditionKeys"></a>

```typescript
public readonly actionGetIdentityVerificationAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIdentityVerificationAttributes action.

---

##### `actionGetImportJobConditionKeys`<sup>Required</sup> <a name="actionGetImportJobConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetImportJobConditionKeys"></a>

```typescript
public readonly actionGetImportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetImportJob action.

---

##### `actionGetMessageInsightsConditionKeys`<sup>Required</sup> <a name="actionGetMessageInsightsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetMessageInsightsConditionKeys"></a>

```typescript
public readonly actionGetMessageInsightsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMessageInsights action.

---

##### `actionGetMultiRegionEndpointConditionKeys`<sup>Required</sup> <a name="actionGetMultiRegionEndpointConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetMultiRegionEndpointConditionKeys"></a>

```typescript
public readonly actionGetMultiRegionEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMultiRegionEndpoint action.

---

##### `actionGetReputationEntityConditionKeys`<sup>Required</sup> <a name="actionGetReputationEntityConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetReputationEntityConditionKeys"></a>

```typescript
public readonly actionGetReputationEntityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetReputationEntity action.

---

##### `actionGetSendQuotaConditionKeys`<sup>Required</sup> <a name="actionGetSendQuotaConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetSendQuotaConditionKeys"></a>

```typescript
public readonly actionGetSendQuotaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSendQuota action.

---

##### `actionGetSendStatisticsConditionKeys`<sup>Required</sup> <a name="actionGetSendStatisticsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetSendStatisticsConditionKeys"></a>

```typescript
public readonly actionGetSendStatisticsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSendStatistics action.

---

##### `actionGetSuppressedDestinationConditionKeys`<sup>Required</sup> <a name="actionGetSuppressedDestinationConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetSuppressedDestinationConditionKeys"></a>

```typescript
public readonly actionGetSuppressedDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSuppressedDestination action.

---

##### `actionGetTemplateConditionKeys`<sup>Required</sup> <a name="actionGetTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetTemplateConditionKeys"></a>

```typescript
public readonly actionGetTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTemplate action.

---

##### `actionGetTenantConditionKeys`<sup>Required</sup> <a name="actionGetTenantConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionGetTenantConditionKeys"></a>

```typescript
public readonly actionGetTenantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTenant action.

---

##### `actionSetActiveReceiptRuleSetConditionKeys`<sup>Required</sup> <a name="actionSetActiveReceiptRuleSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionSetActiveReceiptRuleSetConditionKeys"></a>

```typescript
public readonly actionSetActiveReceiptRuleSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetActiveReceiptRuleSet action.

---

##### `actionSetIdentityDkimEnabledConditionKeys`<sup>Required</sup> <a name="actionSetIdentityDkimEnabledConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionSetIdentityDkimEnabledConditionKeys"></a>

```typescript
public readonly actionSetIdentityDkimEnabledConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetIdentityDkimEnabled action.

---

##### `actionSetIdentityFeedbackForwardingEnabledConditionKeys`<sup>Required</sup> <a name="actionSetIdentityFeedbackForwardingEnabledConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionSetIdentityFeedbackForwardingEnabledConditionKeys"></a>

```typescript
public readonly actionSetIdentityFeedbackForwardingEnabledConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetIdentityFeedbackForwardingEnabled action.

---

##### `actionSetIdentityHeadersInNotificationsEnabledConditionKeys`<sup>Required</sup> <a name="actionSetIdentityHeadersInNotificationsEnabledConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionSetIdentityHeadersInNotificationsEnabledConditionKeys"></a>

```typescript
public readonly actionSetIdentityHeadersInNotificationsEnabledConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetIdentityHeadersInNotificationsEnabled action.

---

##### `actionSetIdentityMailFromDomainConditionKeys`<sup>Required</sup> <a name="actionSetIdentityMailFromDomainConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionSetIdentityMailFromDomainConditionKeys"></a>

```typescript
public readonly actionSetIdentityMailFromDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetIdentityMailFromDomain action.

---

##### `actionSetIdentityNotificationTopicConditionKeys`<sup>Required</sup> <a name="actionSetIdentityNotificationTopicConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionSetIdentityNotificationTopicConditionKeys"></a>

```typescript
public readonly actionSetIdentityNotificationTopicConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetIdentityNotificationTopic action.

---

##### `actionSetReceiptRulePositionConditionKeys`<sup>Required</sup> <a name="actionSetReceiptRulePositionConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.actionSetReceiptRulePositionConditionKeys"></a>

```typescript
public readonly actionSetReceiptRulePositionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetReceiptRulePosition action.

---

##### `ADDON_SUBSCRIPTION_ARN`<sup>Required</sup> <a name="ADDON_SUBSCRIPTION_ARN" id="@cdk_utils/iam.ses.SesConditions.property.ADDON_SUBSCRIPTION_ARN"></a>

```typescript
public readonly ADDON_SUBSCRIPTION_ARN: string;
```

- *Type:* string

Condition key: ses:AddonSubscriptionArn (ARN).

---

##### `API_VERSION`<sup>Required</sup> <a name="API_VERSION" id="@cdk_utils/iam.ses.SesConditions.property.API_VERSION"></a>

```typescript
public readonly API_VERSION: string;
```

- *Type:* string

Condition key: ses:ApiVersion (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ses.SesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ses.SesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ses.SesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchGetMetricDataConditionKeys`<sup>Required</sup> <a name="BatchGetMetricDataConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.BatchGetMetricDataConditionKeys"></a>

```typescript
public readonly BatchGetMetricDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchGetMetricData action.

---

##### `CancelExportJobConditionKeys`<sup>Required</sup> <a name="CancelExportJobConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CancelExportJobConditionKeys"></a>

```typescript
public readonly CancelExportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelExportJob action.

---

##### `CloneReceiptRuleSetConditionKeys`<sup>Required</sup> <a name="CloneReceiptRuleSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CloneReceiptRuleSetConditionKeys"></a>

```typescript
public readonly CloneReceiptRuleSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CloneReceiptRuleSet action.

---

##### `CreateAddonInstanceConditionKeys`<sup>Required</sup> <a name="CreateAddonInstanceConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateAddonInstanceConditionKeys"></a>

```typescript
public readonly CreateAddonInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAddonInstance action.

---

##### `CreateAddonSubscriptionConditionKeys`<sup>Required</sup> <a name="CreateAddonSubscriptionConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateAddonSubscriptionConditionKeys"></a>

```typescript
public readonly CreateAddonSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAddonSubscription action.

---

##### `CreateAddressListConditionKeys`<sup>Required</sup> <a name="CreateAddressListConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateAddressListConditionKeys"></a>

```typescript
public readonly CreateAddressListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAddressList action.

---

##### `CreateArchiveConditionKeys`<sup>Required</sup> <a name="CreateArchiveConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateArchiveConditionKeys"></a>

```typescript
public readonly CreateArchiveConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateArchive action.

---

##### `CreateConfigurationSetConditionKeys`<sup>Required</sup> <a name="CreateConfigurationSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateConfigurationSetConditionKeys"></a>

```typescript
public readonly CreateConfigurationSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConfigurationSet action.

---

##### `CreateConfigurationSetEventDestinationConditionKeys`<sup>Required</sup> <a name="CreateConfigurationSetEventDestinationConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateConfigurationSetEventDestinationConditionKeys"></a>

```typescript
public readonly CreateConfigurationSetEventDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConfigurationSetEventDestination action.

---

##### `CreateConfigurationSetTrackingOptionsConditionKeys`<sup>Required</sup> <a name="CreateConfigurationSetTrackingOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateConfigurationSetTrackingOptionsConditionKeys"></a>

```typescript
public readonly CreateConfigurationSetTrackingOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConfigurationSetTrackingOptions action.

---

##### `CreateContactConditionKeys`<sup>Required</sup> <a name="CreateContactConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateContactConditionKeys"></a>

```typescript
public readonly CreateContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContact action.

---

##### `CreateContactListConditionKeys`<sup>Required</sup> <a name="CreateContactListConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateContactListConditionKeys"></a>

```typescript
public readonly CreateContactListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContactList action.

---

##### `CreateCustomVerificationEmailTemplateConditionKeys`<sup>Required</sup> <a name="CreateCustomVerificationEmailTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateCustomVerificationEmailTemplateConditionKeys"></a>

```typescript
public readonly CreateCustomVerificationEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomVerificationEmailTemplate action.

---

##### `CreateDedicatedIpPoolConditionKeys`<sup>Required</sup> <a name="CreateDedicatedIpPoolConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateDedicatedIpPoolConditionKeys"></a>

```typescript
public readonly CreateDedicatedIpPoolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDedicatedIpPool action.

---

##### `CreateDeliverabilityTestReportConditionKeys`<sup>Required</sup> <a name="CreateDeliverabilityTestReportConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateDeliverabilityTestReportConditionKeys"></a>

```typescript
public readonly CreateDeliverabilityTestReportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeliverabilityTestReport action.

---

##### `CreateEmailIdentityConditionKeys`<sup>Required</sup> <a name="CreateEmailIdentityConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateEmailIdentityConditionKeys"></a>

```typescript
public readonly CreateEmailIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEmailIdentity action.

---

##### `CreateEmailIdentityPolicyConditionKeys`<sup>Required</sup> <a name="CreateEmailIdentityPolicyConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateEmailIdentityPolicyConditionKeys"></a>

```typescript
public readonly CreateEmailIdentityPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEmailIdentityPolicy action.

---

##### `CreateEmailTemplateConditionKeys`<sup>Required</sup> <a name="CreateEmailTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateEmailTemplateConditionKeys"></a>

```typescript
public readonly CreateEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEmailTemplate action.

---

##### `CreateExportJobConditionKeys`<sup>Required</sup> <a name="CreateExportJobConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateExportJobConditionKeys"></a>

```typescript
public readonly CreateExportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExportJob action.

---

##### `CreateImportJobConditionKeys`<sup>Required</sup> <a name="CreateImportJobConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateImportJobConditionKeys"></a>

```typescript
public readonly CreateImportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateImportJob action.

---

##### `CreateIngressPointConditionKeys`<sup>Required</sup> <a name="CreateIngressPointConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateIngressPointConditionKeys"></a>

```typescript
public readonly CreateIngressPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIngressPoint action.

---

##### `CreateMultiRegionEndpointConditionKeys`<sup>Required</sup> <a name="CreateMultiRegionEndpointConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateMultiRegionEndpointConditionKeys"></a>

```typescript
public readonly CreateMultiRegionEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMultiRegionEndpoint action.

---

##### `CreateReceiptFilterConditionKeys`<sup>Required</sup> <a name="CreateReceiptFilterConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateReceiptFilterConditionKeys"></a>

```typescript
public readonly CreateReceiptFilterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReceiptFilter action.

---

##### `CreateReceiptRuleConditionKeys`<sup>Required</sup> <a name="CreateReceiptRuleConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateReceiptRuleConditionKeys"></a>

```typescript
public readonly CreateReceiptRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReceiptRule action.

---

##### `CreateReceiptRuleSetConditionKeys`<sup>Required</sup> <a name="CreateReceiptRuleSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateReceiptRuleSetConditionKeys"></a>

```typescript
public readonly CreateReceiptRuleSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReceiptRuleSet action.

---

##### `CreateRelayConditionKeys`<sup>Required</sup> <a name="CreateRelayConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateRelayConditionKeys"></a>

```typescript
public readonly CreateRelayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRelay action.

---

##### `CreateRuleSetConditionKeys`<sup>Required</sup> <a name="CreateRuleSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateRuleSetConditionKeys"></a>

```typescript
public readonly CreateRuleSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRuleSet action.

---

##### `CreateTemplateConditionKeys`<sup>Required</sup> <a name="CreateTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateTemplateConditionKeys"></a>

```typescript
public readonly CreateTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTemplate action.

---

##### `CreateTenantConditionKeys`<sup>Required</sup> <a name="CreateTenantConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateTenantConditionKeys"></a>

```typescript
public readonly CreateTenantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTenant action.

---

##### `CreateTenantResourceAssociationConditionKeys`<sup>Required</sup> <a name="CreateTenantResourceAssociationConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateTenantResourceAssociationConditionKeys"></a>

```typescript
public readonly CreateTenantResourceAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTenantResourceAssociation action.

---

##### `CreateTrafficPolicyConditionKeys`<sup>Required</sup> <a name="CreateTrafficPolicyConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.CreateTrafficPolicyConditionKeys"></a>

```typescript
public readonly CreateTrafficPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTrafficPolicy action.

---

##### `DeleteConfigurationSetConditionKeys`<sup>Required</sup> <a name="DeleteConfigurationSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteConfigurationSetConditionKeys"></a>

```typescript
public readonly DeleteConfigurationSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteConfigurationSet action.

---

##### `DeleteConfigurationSetEventDestinationConditionKeys`<sup>Required</sup> <a name="DeleteConfigurationSetEventDestinationConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteConfigurationSetEventDestinationConditionKeys"></a>

```typescript
public readonly DeleteConfigurationSetEventDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteConfigurationSetEventDestination action.

---

##### `DeleteConfigurationSetTrackingOptionsConditionKeys`<sup>Required</sup> <a name="DeleteConfigurationSetTrackingOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteConfigurationSetTrackingOptionsConditionKeys"></a>

```typescript
public readonly DeleteConfigurationSetTrackingOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteConfigurationSetTrackingOptions action.

---

##### `DeleteContactConditionKeys`<sup>Required</sup> <a name="DeleteContactConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteContactConditionKeys"></a>

```typescript
public readonly DeleteContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteContact action.

---

##### `DeleteContactListConditionKeys`<sup>Required</sup> <a name="DeleteContactListConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteContactListConditionKeys"></a>

```typescript
public readonly DeleteContactListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteContactList action.

---

##### `DeleteCustomVerificationEmailTemplateConditionKeys`<sup>Required</sup> <a name="DeleteCustomVerificationEmailTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteCustomVerificationEmailTemplateConditionKeys"></a>

```typescript
public readonly DeleteCustomVerificationEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCustomVerificationEmailTemplate action.

---

##### `DeleteDedicatedIpPoolConditionKeys`<sup>Required</sup> <a name="DeleteDedicatedIpPoolConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteDedicatedIpPoolConditionKeys"></a>

```typescript
public readonly DeleteDedicatedIpPoolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDedicatedIpPool action.

---

##### `DeleteEmailIdentityConditionKeys`<sup>Required</sup> <a name="DeleteEmailIdentityConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteEmailIdentityConditionKeys"></a>

```typescript
public readonly DeleteEmailIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEmailIdentity action.

---

##### `DeleteEmailIdentityPolicyConditionKeys`<sup>Required</sup> <a name="DeleteEmailIdentityPolicyConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteEmailIdentityPolicyConditionKeys"></a>

```typescript
public readonly DeleteEmailIdentityPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEmailIdentityPolicy action.

---

##### `DeleteEmailTemplateConditionKeys`<sup>Required</sup> <a name="DeleteEmailTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteEmailTemplateConditionKeys"></a>

```typescript
public readonly DeleteEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEmailTemplate action.

---

##### `DeleteIdentityConditionKeys`<sup>Required</sup> <a name="DeleteIdentityConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteIdentityConditionKeys"></a>

```typescript
public readonly DeleteIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteIdentity action.

---

##### `DeleteIdentityPolicyConditionKeys`<sup>Required</sup> <a name="DeleteIdentityPolicyConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteIdentityPolicyConditionKeys"></a>

```typescript
public readonly DeleteIdentityPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteIdentityPolicy action.

---

##### `DeleteMultiRegionEndpointConditionKeys`<sup>Required</sup> <a name="DeleteMultiRegionEndpointConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteMultiRegionEndpointConditionKeys"></a>

```typescript
public readonly DeleteMultiRegionEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteMultiRegionEndpoint action.

---

##### `DeleteReceiptFilterConditionKeys`<sup>Required</sup> <a name="DeleteReceiptFilterConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteReceiptFilterConditionKeys"></a>

```typescript
public readonly DeleteReceiptFilterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteReceiptFilter action.

---

##### `DeleteReceiptRuleConditionKeys`<sup>Required</sup> <a name="DeleteReceiptRuleConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteReceiptRuleConditionKeys"></a>

```typescript
public readonly DeleteReceiptRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteReceiptRule action.

---

##### `DeleteReceiptRuleSetConditionKeys`<sup>Required</sup> <a name="DeleteReceiptRuleSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteReceiptRuleSetConditionKeys"></a>

```typescript
public readonly DeleteReceiptRuleSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteReceiptRuleSet action.

---

##### `DeleteSuppressedDestinationConditionKeys`<sup>Required</sup> <a name="DeleteSuppressedDestinationConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteSuppressedDestinationConditionKeys"></a>

```typescript
public readonly DeleteSuppressedDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSuppressedDestination action.

---

##### `DeleteTemplateConditionKeys`<sup>Required</sup> <a name="DeleteTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteTemplateConditionKeys"></a>

```typescript
public readonly DeleteTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTemplate action.

---

##### `DeleteTenantConditionKeys`<sup>Required</sup> <a name="DeleteTenantConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteTenantConditionKeys"></a>

```typescript
public readonly DeleteTenantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTenant action.

---

##### `DeleteTenantResourceAssociationConditionKeys`<sup>Required</sup> <a name="DeleteTenantResourceAssociationConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteTenantResourceAssociationConditionKeys"></a>

```typescript
public readonly DeleteTenantResourceAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTenantResourceAssociation action.

---

##### `DeleteVerifiedEmailAddressConditionKeys`<sup>Required</sup> <a name="DeleteVerifiedEmailAddressConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DeleteVerifiedEmailAddressConditionKeys"></a>

```typescript
public readonly DeleteVerifiedEmailAddressConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteVerifiedEmailAddress action.

---

##### `DescribeActiveReceiptRuleSetConditionKeys`<sup>Required</sup> <a name="DescribeActiveReceiptRuleSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DescribeActiveReceiptRuleSetConditionKeys"></a>

```typescript
public readonly DescribeActiveReceiptRuleSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeActiveReceiptRuleSet action.

---

##### `DescribeConfigurationSetConditionKeys`<sup>Required</sup> <a name="DescribeConfigurationSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DescribeConfigurationSetConditionKeys"></a>

```typescript
public readonly DescribeConfigurationSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeConfigurationSet action.

---

##### `DescribeReceiptRuleConditionKeys`<sup>Required</sup> <a name="DescribeReceiptRuleConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DescribeReceiptRuleConditionKeys"></a>

```typescript
public readonly DescribeReceiptRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeReceiptRule action.

---

##### `DescribeReceiptRuleSetConditionKeys`<sup>Required</sup> <a name="DescribeReceiptRuleSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.DescribeReceiptRuleSetConditionKeys"></a>

```typescript
public readonly DescribeReceiptRuleSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeReceiptRuleSet action.

---

##### `EXPORT_SOURCE_TYPE`<sup>Required</sup> <a name="EXPORT_SOURCE_TYPE" id="@cdk_utils/iam.ses.SesConditions.property.EXPORT_SOURCE_TYPE"></a>

```typescript
public readonly EXPORT_SOURCE_TYPE: string;
```

- *Type:* string

Condition key: ses:ExportSourceType (String).

---

##### `FEEDBACK_ADDRESS`<sup>Required</sup> <a name="FEEDBACK_ADDRESS" id="@cdk_utils/iam.ses.SesConditions.property.FEEDBACK_ADDRESS"></a>

```typescript
public readonly FEEDBACK_ADDRESS: string;
```

- *Type:* string

Condition key: ses:FeedbackAddress (String).

---

##### `FROM_ADDRESS`<sup>Required</sup> <a name="FROM_ADDRESS" id="@cdk_utils/iam.ses.SesConditions.property.FROM_ADDRESS"></a>

```typescript
public readonly FROM_ADDRESS: string;
```

- *Type:* string

Condition key: ses:FromAddress (String).

---

##### `FROM_DISPLAY_NAME`<sup>Required</sup> <a name="FROM_DISPLAY_NAME" id="@cdk_utils/iam.ses.SesConditions.property.FROM_DISPLAY_NAME"></a>

```typescript
public readonly FROM_DISPLAY_NAME: string;
```

- *Type:* string

Condition key: ses:FromDisplayName (String).

---

##### `ListConfigurationSetsConditionKeys`<sup>Required</sup> <a name="ListConfigurationSetsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListConfigurationSetsConditionKeys"></a>

```typescript
public readonly ListConfigurationSetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListConfigurationSets action.

---

##### `ListContactListsConditionKeys`<sup>Required</sup> <a name="ListContactListsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListContactListsConditionKeys"></a>

```typescript
public readonly ListContactListsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListContactLists action.

---

##### `ListContactsConditionKeys`<sup>Required</sup> <a name="ListContactsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListContactsConditionKeys"></a>

```typescript
public readonly ListContactsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListContacts action.

---

##### `ListCustomVerificationEmailTemplatesConditionKeys`<sup>Required</sup> <a name="ListCustomVerificationEmailTemplatesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListCustomVerificationEmailTemplatesConditionKeys"></a>

```typescript
public readonly ListCustomVerificationEmailTemplatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListCustomVerificationEmailTemplates action.

---

##### `ListDedicatedIpPoolsConditionKeys`<sup>Required</sup> <a name="ListDedicatedIpPoolsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListDedicatedIpPoolsConditionKeys"></a>

```typescript
public readonly ListDedicatedIpPoolsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDedicatedIpPools action.

---

##### `ListDeliverabilityTestReportsConditionKeys`<sup>Required</sup> <a name="ListDeliverabilityTestReportsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListDeliverabilityTestReportsConditionKeys"></a>

```typescript
public readonly ListDeliverabilityTestReportsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDeliverabilityTestReports action.

---

##### `ListDomainDeliverabilityCampaignsConditionKeys`<sup>Required</sup> <a name="ListDomainDeliverabilityCampaignsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListDomainDeliverabilityCampaignsConditionKeys"></a>

```typescript
public readonly ListDomainDeliverabilityCampaignsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDomainDeliverabilityCampaigns action.

---

##### `ListEmailIdentitiesConditionKeys`<sup>Required</sup> <a name="ListEmailIdentitiesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListEmailIdentitiesConditionKeys"></a>

```typescript
public readonly ListEmailIdentitiesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEmailIdentities action.

---

##### `ListEmailTemplatesConditionKeys`<sup>Required</sup> <a name="ListEmailTemplatesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListEmailTemplatesConditionKeys"></a>

```typescript
public readonly ListEmailTemplatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEmailTemplates action.

---

##### `ListExportJobsConditionKeys`<sup>Required</sup> <a name="ListExportJobsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListExportJobsConditionKeys"></a>

```typescript
public readonly ListExportJobsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListExportJobs action.

---

##### `ListIdentitiesConditionKeys`<sup>Required</sup> <a name="ListIdentitiesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListIdentitiesConditionKeys"></a>

```typescript
public readonly ListIdentitiesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListIdentities action.

---

##### `ListIdentityPoliciesConditionKeys`<sup>Required</sup> <a name="ListIdentityPoliciesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListIdentityPoliciesConditionKeys"></a>

```typescript
public readonly ListIdentityPoliciesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListIdentityPolicies action.

---

##### `ListImportJobsConditionKeys`<sup>Required</sup> <a name="ListImportJobsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListImportJobsConditionKeys"></a>

```typescript
public readonly ListImportJobsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListImportJobs action.

---

##### `ListMultiRegionEndpointsConditionKeys`<sup>Required</sup> <a name="ListMultiRegionEndpointsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListMultiRegionEndpointsConditionKeys"></a>

```typescript
public readonly ListMultiRegionEndpointsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListMultiRegionEndpoints action.

---

##### `ListReceiptFiltersConditionKeys`<sup>Required</sup> <a name="ListReceiptFiltersConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListReceiptFiltersConditionKeys"></a>

```typescript
public readonly ListReceiptFiltersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListReceiptFilters action.

---

##### `ListReceiptRuleSetsConditionKeys`<sup>Required</sup> <a name="ListReceiptRuleSetsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListReceiptRuleSetsConditionKeys"></a>

```typescript
public readonly ListReceiptRuleSetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListReceiptRuleSets action.

---

##### `ListRecommendationsConditionKeys`<sup>Required</sup> <a name="ListRecommendationsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListRecommendationsConditionKeys"></a>

```typescript
public readonly ListRecommendationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRecommendations action.

---

##### `ListReputationEntitiesConditionKeys`<sup>Required</sup> <a name="ListReputationEntitiesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListReputationEntitiesConditionKeys"></a>

```typescript
public readonly ListReputationEntitiesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListReputationEntities action.

---

##### `ListResourceTenantsConditionKeys`<sup>Required</sup> <a name="ListResourceTenantsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListResourceTenantsConditionKeys"></a>

```typescript
public readonly ListResourceTenantsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceTenants action.

---

##### `ListSuppressedDestinationsConditionKeys`<sup>Required</sup> <a name="ListSuppressedDestinationsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListSuppressedDestinationsConditionKeys"></a>

```typescript
public readonly ListSuppressedDestinationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSuppressedDestinations action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ListTemplatesConditionKeys`<sup>Required</sup> <a name="ListTemplatesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListTemplatesConditionKeys"></a>

```typescript
public readonly ListTemplatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTemplates action.

---

##### `ListTenantResourcesConditionKeys`<sup>Required</sup> <a name="ListTenantResourcesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListTenantResourcesConditionKeys"></a>

```typescript
public readonly ListTenantResourcesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTenantResources action.

---

##### `ListTenantsConditionKeys`<sup>Required</sup> <a name="ListTenantsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListTenantsConditionKeys"></a>

```typescript
public readonly ListTenantsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTenants action.

---

##### `ListVerifiedEmailAddressesConditionKeys`<sup>Required</sup> <a name="ListVerifiedEmailAddressesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ListVerifiedEmailAddressesConditionKeys"></a>

```typescript
public readonly ListVerifiedEmailAddressesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListVerifiedEmailAddresses action.

---

##### `MAIL_MANAGER_INGRESS_POINT_TYPE`<sup>Required</sup> <a name="MAIL_MANAGER_INGRESS_POINT_TYPE" id="@cdk_utils/iam.ses.SesConditions.property.MAIL_MANAGER_INGRESS_POINT_TYPE"></a>

```typescript
public readonly MAIL_MANAGER_INGRESS_POINT_TYPE: string;
```

- *Type:* string

Condition key: ses:MailManagerIngressPointType (String).

---

##### `MAIL_MANAGER_RULE_SET_ARN`<sup>Required</sup> <a name="MAIL_MANAGER_RULE_SET_ARN" id="@cdk_utils/iam.ses.SesConditions.property.MAIL_MANAGER_RULE_SET_ARN"></a>

```typescript
public readonly MAIL_MANAGER_RULE_SET_ARN: string;
```

- *Type:* string

Condition key: ses:MailManagerRuleSetArn (ARN).

---

##### `MAIL_MANAGER_TRAFFIC_POLICY_ARN`<sup>Required</sup> <a name="MAIL_MANAGER_TRAFFIC_POLICY_ARN" id="@cdk_utils/iam.ses.SesConditions.property.MAIL_MANAGER_TRAFFIC_POLICY_ARN"></a>

```typescript
public readonly MAIL_MANAGER_TRAFFIC_POLICY_ARN: string;
```

- *Type:* string

Condition key: ses:MailManagerTrafficPolicyArn (ARN).

---

##### `MULTI_REGION_ENDPOINT_ID`<sup>Required</sup> <a name="MULTI_REGION_ENDPOINT_ID" id="@cdk_utils/iam.ses.SesConditions.property.MULTI_REGION_ENDPOINT_ID"></a>

```typescript
public readonly MULTI_REGION_ENDPOINT_ID: string;
```

- *Type:* string

Condition key: ses:MultiRegionEndpointId (String).

---

##### `PutAccountDedicatedIpWarmupAttributesConditionKeys`<sup>Required</sup> <a name="PutAccountDedicatedIpWarmupAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutAccountDedicatedIpWarmupAttributesConditionKeys"></a>

```typescript
public readonly PutAccountDedicatedIpWarmupAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountDedicatedIpWarmupAttributes action.

---

##### `PutAccountDetailsConditionKeys`<sup>Required</sup> <a name="PutAccountDetailsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutAccountDetailsConditionKeys"></a>

```typescript
public readonly PutAccountDetailsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountDetails action.

---

##### `PutAccountPricingAttributesConditionKeys`<sup>Required</sup> <a name="PutAccountPricingAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutAccountPricingAttributesConditionKeys"></a>

```typescript
public readonly PutAccountPricingAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountPricingAttributes action.

---

##### `PutAccountSendingAttributesConditionKeys`<sup>Required</sup> <a name="PutAccountSendingAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutAccountSendingAttributesConditionKeys"></a>

```typescript
public readonly PutAccountSendingAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountSendingAttributes action.

---

##### `PutAccountSuppressionAttributesConditionKeys`<sup>Required</sup> <a name="PutAccountSuppressionAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutAccountSuppressionAttributesConditionKeys"></a>

```typescript
public readonly PutAccountSuppressionAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountSuppressionAttributes action.

---

##### `PutAccountVdmAttributesConditionKeys`<sup>Required</sup> <a name="PutAccountVdmAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutAccountVdmAttributesConditionKeys"></a>

```typescript
public readonly PutAccountVdmAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountVdmAttributes action.

---

##### `PutConfigurationSetArchivingOptionsConditionKeys`<sup>Required</sup> <a name="PutConfigurationSetArchivingOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetArchivingOptionsConditionKeys"></a>

```typescript
public readonly PutConfigurationSetArchivingOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConfigurationSetArchivingOptions action.

---

##### `PutConfigurationSetDeliveryOptionsConditionKeys`<sup>Required</sup> <a name="PutConfigurationSetDeliveryOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetDeliveryOptionsConditionKeys"></a>

```typescript
public readonly PutConfigurationSetDeliveryOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConfigurationSetDeliveryOptions action.

---

##### `PutConfigurationSetReputationOptionsConditionKeys`<sup>Required</sup> <a name="PutConfigurationSetReputationOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetReputationOptionsConditionKeys"></a>

```typescript
public readonly PutConfigurationSetReputationOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConfigurationSetReputationOptions action.

---

##### `PutConfigurationSetSendingOptionsConditionKeys`<sup>Required</sup> <a name="PutConfigurationSetSendingOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetSendingOptionsConditionKeys"></a>

```typescript
public readonly PutConfigurationSetSendingOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConfigurationSetSendingOptions action.

---

##### `PutConfigurationSetSuppressionOptionsConditionKeys`<sup>Required</sup> <a name="PutConfigurationSetSuppressionOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetSuppressionOptionsConditionKeys"></a>

```typescript
public readonly PutConfigurationSetSuppressionOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConfigurationSetSuppressionOptions action.

---

##### `PutConfigurationSetTrackingOptionsConditionKeys`<sup>Required</sup> <a name="PutConfigurationSetTrackingOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetTrackingOptionsConditionKeys"></a>

```typescript
public readonly PutConfigurationSetTrackingOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConfigurationSetTrackingOptions action.

---

##### `PutConfigurationSetVdmOptionsConditionKeys`<sup>Required</sup> <a name="PutConfigurationSetVdmOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutConfigurationSetVdmOptionsConditionKeys"></a>

```typescript
public readonly PutConfigurationSetVdmOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConfigurationSetVdmOptions action.

---

##### `PutDedicatedIpInPoolConditionKeys`<sup>Required</sup> <a name="PutDedicatedIpInPoolConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutDedicatedIpInPoolConditionKeys"></a>

```typescript
public readonly PutDedicatedIpInPoolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDedicatedIpInPool action.

---

##### `PutDedicatedIpPoolScalingAttributesConditionKeys`<sup>Required</sup> <a name="PutDedicatedIpPoolScalingAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutDedicatedIpPoolScalingAttributesConditionKeys"></a>

```typescript
public readonly PutDedicatedIpPoolScalingAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDedicatedIpPoolScalingAttributes action.

---

##### `PutDedicatedIpWarmupAttributesConditionKeys`<sup>Required</sup> <a name="PutDedicatedIpWarmupAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutDedicatedIpWarmupAttributesConditionKeys"></a>

```typescript
public readonly PutDedicatedIpWarmupAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDedicatedIpWarmupAttributes action.

---

##### `PutDeliverabilityDashboardOptionConditionKeys`<sup>Required</sup> <a name="PutDeliverabilityDashboardOptionConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutDeliverabilityDashboardOptionConditionKeys"></a>

```typescript
public readonly PutDeliverabilityDashboardOptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDeliverabilityDashboardOption action.

---

##### `PutEmailIdentityConfigurationSetAttributesConditionKeys`<sup>Required</sup> <a name="PutEmailIdentityConfigurationSetAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutEmailIdentityConfigurationSetAttributesConditionKeys"></a>

```typescript
public readonly PutEmailIdentityConfigurationSetAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutEmailIdentityConfigurationSetAttributes action.

---

##### `PutEmailIdentityDkimAttributesConditionKeys`<sup>Required</sup> <a name="PutEmailIdentityDkimAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutEmailIdentityDkimAttributesConditionKeys"></a>

```typescript
public readonly PutEmailIdentityDkimAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutEmailIdentityDkimAttributes action.

---

##### `PutEmailIdentityDkimSigningAttributesConditionKeys`<sup>Required</sup> <a name="PutEmailIdentityDkimSigningAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutEmailIdentityDkimSigningAttributesConditionKeys"></a>

```typescript
public readonly PutEmailIdentityDkimSigningAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutEmailIdentityDkimSigningAttributes action.

---

##### `PutEmailIdentityFeedbackAttributesConditionKeys`<sup>Required</sup> <a name="PutEmailIdentityFeedbackAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutEmailIdentityFeedbackAttributesConditionKeys"></a>

```typescript
public readonly PutEmailIdentityFeedbackAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutEmailIdentityFeedbackAttributes action.

---

##### `PutEmailIdentityMailFromAttributesConditionKeys`<sup>Required</sup> <a name="PutEmailIdentityMailFromAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutEmailIdentityMailFromAttributesConditionKeys"></a>

```typescript
public readonly PutEmailIdentityMailFromAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutEmailIdentityMailFromAttributes action.

---

##### `PutIdentityPolicyConditionKeys`<sup>Required</sup> <a name="PutIdentityPolicyConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutIdentityPolicyConditionKeys"></a>

```typescript
public readonly PutIdentityPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutIdentityPolicy action.

---

##### `PutSuppressedDestinationConditionKeys`<sup>Required</sup> <a name="PutSuppressedDestinationConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutSuppressedDestinationConditionKeys"></a>

```typescript
public readonly PutSuppressedDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutSuppressedDestination action.

---

##### `PutTenantSuppressionAttributesConditionKeys`<sup>Required</sup> <a name="PutTenantSuppressionAttributesConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.PutTenantSuppressionAttributesConditionKeys"></a>

```typescript
public readonly PutTenantSuppressionAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTenantSuppressionAttributes action.

---

##### `RECIPIENTS`<sup>Required</sup> <a name="RECIPIENTS" id="@cdk_utils/iam.ses.SesConditions.property.RECIPIENTS"></a>

```typescript
public readonly RECIPIENTS: string;
```

- *Type:* string

Condition key: ses:Recipients (ArrayOfString).

---

##### `ReorderReceiptRuleSetConditionKeys`<sup>Required</sup> <a name="ReorderReceiptRuleSetConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ReorderReceiptRuleSetConditionKeys"></a>

```typescript
public readonly ReorderReceiptRuleSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReorderReceiptRuleSet action.

---

##### `REPLICA_REGION`<sup>Required</sup> <a name="REPLICA_REGION" id="@cdk_utils/iam.ses.SesConditions.property.REPLICA_REGION"></a>

```typescript
public readonly REPLICA_REGION: string;
```

- *Type:* string

Condition key: ses:ReplicaRegion (ArrayOfString).

---

##### `ReplicateEmailIdentityDkimSigningKeyConditionKeys`<sup>Required</sup> <a name="ReplicateEmailIdentityDkimSigningKeyConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.ReplicateEmailIdentityDkimSigningKeyConditionKeys"></a>

```typescript
public readonly ReplicateEmailIdentityDkimSigningKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReplicateEmailIdentityDkimSigningKey action.

---

##### `SendBounceConditionKeys`<sup>Required</sup> <a name="SendBounceConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.SendBounceConditionKeys"></a>

```typescript
public readonly SendBounceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendBounce action.

---

##### `SendBulkEmailConditionKeys`<sup>Required</sup> <a name="SendBulkEmailConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.SendBulkEmailConditionKeys"></a>

```typescript
public readonly SendBulkEmailConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendBulkEmail action.

---

##### `SendBulkTemplatedEmailConditionKeys`<sup>Required</sup> <a name="SendBulkTemplatedEmailConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.SendBulkTemplatedEmailConditionKeys"></a>

```typescript
public readonly SendBulkTemplatedEmailConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendBulkTemplatedEmail action.

---

##### `SendCustomVerificationEmailConditionKeys`<sup>Required</sup> <a name="SendCustomVerificationEmailConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.SendCustomVerificationEmailConditionKeys"></a>

```typescript
public readonly SendCustomVerificationEmailConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendCustomVerificationEmail action.

---

##### `SendEmailConditionKeys`<sup>Required</sup> <a name="SendEmailConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.SendEmailConditionKeys"></a>

```typescript
public readonly SendEmailConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendEmail action.

---

##### `SendRawEmailConditionKeys`<sup>Required</sup> <a name="SendRawEmailConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.SendRawEmailConditionKeys"></a>

```typescript
public readonly SendRawEmailConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendRawEmail action.

---

##### `SendTemplatedEmailConditionKeys`<sup>Required</sup> <a name="SendTemplatedEmailConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.SendTemplatedEmailConditionKeys"></a>

```typescript
public readonly SendTemplatedEmailConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendTemplatedEmail action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TENANT_NAME`<sup>Required</sup> <a name="TENANT_NAME" id="@cdk_utils/iam.ses.SesConditions.property.TENANT_NAME"></a>

```typescript
public readonly TENANT_NAME: string;
```

- *Type:* string

Condition key: ses:TenantName (String).

---

##### `TestRenderEmailTemplateConditionKeys`<sup>Required</sup> <a name="TestRenderEmailTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.TestRenderEmailTemplateConditionKeys"></a>

```typescript
public readonly TestRenderEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TestRenderEmailTemplate action.

---

##### `TestRenderTemplateConditionKeys`<sup>Required</sup> <a name="TestRenderTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.TestRenderTemplateConditionKeys"></a>

```typescript
public readonly TestRenderTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TestRenderTemplate action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAccountSendingEnabledConditionKeys`<sup>Required</sup> <a name="UpdateAccountSendingEnabledConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateAccountSendingEnabledConditionKeys"></a>

```typescript
public readonly UpdateAccountSendingEnabledConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAccountSendingEnabled action.

---

##### `UpdateConfigurationSetEventDestinationConditionKeys`<sup>Required</sup> <a name="UpdateConfigurationSetEventDestinationConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateConfigurationSetEventDestinationConditionKeys"></a>

```typescript
public readonly UpdateConfigurationSetEventDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConfigurationSetEventDestination action.

---

##### `UpdateConfigurationSetReputationMetricsEnabledConditionKeys`<sup>Required</sup> <a name="UpdateConfigurationSetReputationMetricsEnabledConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateConfigurationSetReputationMetricsEnabledConditionKeys"></a>

```typescript
public readonly UpdateConfigurationSetReputationMetricsEnabledConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConfigurationSetReputationMetricsEnabled action.

---

##### `UpdateConfigurationSetSendingEnabledConditionKeys`<sup>Required</sup> <a name="UpdateConfigurationSetSendingEnabledConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateConfigurationSetSendingEnabledConditionKeys"></a>

```typescript
public readonly UpdateConfigurationSetSendingEnabledConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConfigurationSetSendingEnabled action.

---

##### `UpdateConfigurationSetTrackingOptionsConditionKeys`<sup>Required</sup> <a name="UpdateConfigurationSetTrackingOptionsConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateConfigurationSetTrackingOptionsConditionKeys"></a>

```typescript
public readonly UpdateConfigurationSetTrackingOptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConfigurationSetTrackingOptions action.

---

##### `UpdateContactConditionKeys`<sup>Required</sup> <a name="UpdateContactConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateContactConditionKeys"></a>

```typescript
public readonly UpdateContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContact action.

---

##### `UpdateContactListConditionKeys`<sup>Required</sup> <a name="UpdateContactListConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateContactListConditionKeys"></a>

```typescript
public readonly UpdateContactListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactList action.

---

##### `UpdateCustomVerificationEmailTemplateConditionKeys`<sup>Required</sup> <a name="UpdateCustomVerificationEmailTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateCustomVerificationEmailTemplateConditionKeys"></a>

```typescript
public readonly UpdateCustomVerificationEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCustomVerificationEmailTemplate action.

---

##### `UpdateEmailIdentityPolicyConditionKeys`<sup>Required</sup> <a name="UpdateEmailIdentityPolicyConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateEmailIdentityPolicyConditionKeys"></a>

```typescript
public readonly UpdateEmailIdentityPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEmailIdentityPolicy action.

---

##### `UpdateEmailTemplateConditionKeys`<sup>Required</sup> <a name="UpdateEmailTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateEmailTemplateConditionKeys"></a>

```typescript
public readonly UpdateEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEmailTemplate action.

---

##### `UpdateIngressPointConditionKeys`<sup>Required</sup> <a name="UpdateIngressPointConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateIngressPointConditionKeys"></a>

```typescript
public readonly UpdateIngressPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateIngressPoint action.

---

##### `UpdateReceiptRuleConditionKeys`<sup>Required</sup> <a name="UpdateReceiptRuleConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateReceiptRuleConditionKeys"></a>

```typescript
public readonly UpdateReceiptRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateReceiptRule action.

---

##### `UpdateReputationEntityCustomerManagedStatusConditionKeys`<sup>Required</sup> <a name="UpdateReputationEntityCustomerManagedStatusConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateReputationEntityCustomerManagedStatusConditionKeys"></a>

```typescript
public readonly UpdateReputationEntityCustomerManagedStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateReputationEntityCustomerManagedStatus action.

---

##### `UpdateReputationEntityPolicyConditionKeys`<sup>Required</sup> <a name="UpdateReputationEntityPolicyConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateReputationEntityPolicyConditionKeys"></a>

```typescript
public readonly UpdateReputationEntityPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateReputationEntityPolicy action.

---

##### `UpdateTemplateConditionKeys`<sup>Required</sup> <a name="UpdateTemplateConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.UpdateTemplateConditionKeys"></a>

```typescript
public readonly UpdateTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTemplate action.

---

##### `VerifyDomainDkimConditionKeys`<sup>Required</sup> <a name="VerifyDomainDkimConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.VerifyDomainDkimConditionKeys"></a>

```typescript
public readonly VerifyDomainDkimConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyDomainDkim action.

---

##### `VerifyDomainIdentityConditionKeys`<sup>Required</sup> <a name="VerifyDomainIdentityConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.VerifyDomainIdentityConditionKeys"></a>

```typescript
public readonly VerifyDomainIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyDomainIdentity action.

---

##### `VerifyEmailAddressConditionKeys`<sup>Required</sup> <a name="VerifyEmailAddressConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.VerifyEmailAddressConditionKeys"></a>

```typescript
public readonly VerifyEmailAddressConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyEmailAddress action.

---

##### `VerifyEmailIdentityConditionKeys`<sup>Required</sup> <a name="VerifyEmailIdentityConditionKeys" id="@cdk_utils/iam.ses.SesConditions.property.VerifyEmailIdentityConditionKeys"></a>

```typescript
public readonly VerifyEmailIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyEmailIdentity action.

---

### SesOperations <a name="SesOperations" id="@cdk_utils/iam.ses.SesOperations"></a>

API operation to required IAM actions mapping for ses.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ses.SesOperations.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

new ses.SesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.AssociateEmailIdentityCertificate">AssociateEmailIdentityCertificate</a></code> | <code>string[]</code> | IAM actions required for the AssociateEmailIdentityCertificate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.BatchGetMetricData">BatchGetMetricData</a></code> | <code>string[]</code> | IAM actions required for the BatchGetMetricData API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CancelExportJob">CancelExportJob</a></code> | <code>string[]</code> | IAM actions required for the CancelExportJob API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CloneReceiptRuleSet">CloneReceiptRuleSet</a></code> | <code>string[]</code> | IAM actions required for the CloneReceiptRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateAddonInstance">CreateAddonInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateAddonInstance API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateAddonSubscription">CreateAddonSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateAddonSubscription API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateAddressList">CreateAddressList</a></code> | <code>string[]</code> | IAM actions required for the CreateAddressList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateAddressListImportJob">CreateAddressListImportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateAddressListImportJob API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateArchive">CreateArchive</a></code> | <code>string[]</code> | IAM actions required for the CreateArchive API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateConfigurationSet">CreateConfigurationSet</a></code> | <code>string[]</code> | IAM actions required for the CreateConfigurationSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateConfigurationSetEventDestination">CreateConfigurationSetEventDestination</a></code> | <code>string[]</code> | IAM actions required for the CreateConfigurationSetEventDestination API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateConfigurationSetTrackingOptions">CreateConfigurationSetTrackingOptions</a></code> | <code>string[]</code> | IAM actions required for the CreateConfigurationSetTrackingOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateContact">CreateContact</a></code> | <code>string[]</code> | IAM actions required for the CreateContact API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateContactList">CreateContactList</a></code> | <code>string[]</code> | IAM actions required for the CreateContactList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateCustomVerificationEmailTemplate">CreateCustomVerificationEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomVerificationEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateDedicatedIpPool">CreateDedicatedIpPool</a></code> | <code>string[]</code> | IAM actions required for the CreateDedicatedIpPool API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateDeliverabilityTestReport">CreateDeliverabilityTestReport</a></code> | <code>string[]</code> | IAM actions required for the CreateDeliverabilityTestReport API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateEmailIdentity">CreateEmailIdentity</a></code> | <code>string[]</code> | IAM actions required for the CreateEmailIdentity API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateEmailIdentityPolicy">CreateEmailIdentityPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateEmailIdentityPolicy API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateEmailTemplate">CreateEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateExportJob">CreateExportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateExportJob API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateImportJob">CreateImportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateImportJob API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateIngressPoint">CreateIngressPoint</a></code> | <code>string[]</code> | IAM actions required for the CreateIngressPoint API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateMultiRegionEndpoint">CreateMultiRegionEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateMultiRegionEndpoint API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateReceiptFilter">CreateReceiptFilter</a></code> | <code>string[]</code> | IAM actions required for the CreateReceiptFilter API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateReceiptRule">CreateReceiptRule</a></code> | <code>string[]</code> | IAM actions required for the CreateReceiptRule API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateReceiptRuleSet">CreateReceiptRuleSet</a></code> | <code>string[]</code> | IAM actions required for the CreateReceiptRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateRelay">CreateRelay</a></code> | <code>string[]</code> | IAM actions required for the CreateRelay API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateRuleSet">CreateRuleSet</a></code> | <code>string[]</code> | IAM actions required for the CreateRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateTemplate">CreateTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateTenant">CreateTenant</a></code> | <code>string[]</code> | IAM actions required for the CreateTenant API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateTenantResourceAssociation">CreateTenantResourceAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateTenantResourceAssociation API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.CreateTrafficPolicy">CreateTrafficPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateTrafficPolicy API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteAddonInstance">DeleteAddonInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteAddonInstance API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteAddonSubscription">DeleteAddonSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteAddonSubscription API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteAddressList">DeleteAddressList</a></code> | <code>string[]</code> | IAM actions required for the DeleteAddressList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteArchive">DeleteArchive</a></code> | <code>string[]</code> | IAM actions required for the DeleteArchive API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteConfigurationSet">DeleteConfigurationSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteConfigurationSetEventDestination">DeleteConfigurationSetEventDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationSetEventDestination API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteConfigurationSetTrackingOptions">DeleteConfigurationSetTrackingOptions</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationSetTrackingOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteContact">DeleteContact</a></code> | <code>string[]</code> | IAM actions required for the DeleteContact API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteContactList">DeleteContactList</a></code> | <code>string[]</code> | IAM actions required for the DeleteContactList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteCustomVerificationEmailTemplate">DeleteCustomVerificationEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomVerificationEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteDedicatedIpPool">DeleteDedicatedIpPool</a></code> | <code>string[]</code> | IAM actions required for the DeleteDedicatedIpPool API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteEmailIdentity">DeleteEmailIdentity</a></code> | <code>string[]</code> | IAM actions required for the DeleteEmailIdentity API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteEmailIdentityPolicy">DeleteEmailIdentityPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteEmailIdentityPolicy API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteEmailTemplate">DeleteEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteIdentity">DeleteIdentity</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentity API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteIdentityPolicy">DeleteIdentityPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentityPolicy API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteIngressPoint">DeleteIngressPoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteIngressPoint API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteMultiRegionEndpoint">DeleteMultiRegionEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteMultiRegionEndpoint API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteReceiptFilter">DeleteReceiptFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteReceiptFilter API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteReceiptRule">DeleteReceiptRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteReceiptRule API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteReceiptRuleSet">DeleteReceiptRuleSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteReceiptRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteRelay">DeleteRelay</a></code> | <code>string[]</code> | IAM actions required for the DeleteRelay API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteRuleSet">DeleteRuleSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteSuppressedDestination">DeleteSuppressedDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteSuppressedDestination API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteTenant">DeleteTenant</a></code> | <code>string[]</code> | IAM actions required for the DeleteTenant API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteTenantResourceAssociation">DeleteTenantResourceAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteTenantResourceAssociation API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteTrafficPolicy">DeleteTrafficPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrafficPolicy API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeleteVerifiedEmailAddress">DeleteVerifiedEmailAddress</a></code> | <code>string[]</code> | IAM actions required for the DeleteVerifiedEmailAddress API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DeregisterMemberFromAddressList">DeregisterMemberFromAddressList</a></code> | <code>string[]</code> | IAM actions required for the DeregisterMemberFromAddressList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DescribeActiveReceiptRuleSet">DescribeActiveReceiptRuleSet</a></code> | <code>string[]</code> | IAM actions required for the DescribeActiveReceiptRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DescribeConfigurationSet">DescribeConfigurationSet</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DescribeReceiptRule">DescribeReceiptRule</a></code> | <code>string[]</code> | IAM actions required for the DescribeReceiptRule API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DescribeReceiptRuleSet">DescribeReceiptRuleSet</a></code> | <code>string[]</code> | IAM actions required for the DescribeReceiptRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.DisassociateEmailIdentityCertificate">DisassociateEmailIdentityCertificate</a></code> | <code>string[]</code> | IAM actions required for the DisassociateEmailIdentityCertificate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListAddonInstances">ListAddonInstances</a></code> | <code>string[]</code> | IAM actions required for the ListAddonInstances API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListAddonSubscriptions">ListAddonSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListAddonSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListAddressListImportJobs">ListAddressListImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListAddressListImportJobs API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListAddressLists">ListAddressLists</a></code> | <code>string[]</code> | IAM actions required for the ListAddressLists API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListArchiveExports">ListArchiveExports</a></code> | <code>string[]</code> | IAM actions required for the ListArchiveExports API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListArchives">ListArchives</a></code> | <code>string[]</code> | IAM actions required for the ListArchives API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListArchiveSearches">ListArchiveSearches</a></code> | <code>string[]</code> | IAM actions required for the ListArchiveSearches API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListConfigurationSets">ListConfigurationSets</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationSets API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListContactLists">ListContactLists</a></code> | <code>string[]</code> | IAM actions required for the ListContactLists API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListContacts">ListContacts</a></code> | <code>string[]</code> | IAM actions required for the ListContacts API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListCustomVerificationEmailTemplates">ListCustomVerificationEmailTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListCustomVerificationEmailTemplates API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListDedicatedIpPools">ListDedicatedIpPools</a></code> | <code>string[]</code> | IAM actions required for the ListDedicatedIpPools API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListDeliverabilityTestReports">ListDeliverabilityTestReports</a></code> | <code>string[]</code> | IAM actions required for the ListDeliverabilityTestReports API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListDomainDeliverabilityCampaigns">ListDomainDeliverabilityCampaigns</a></code> | <code>string[]</code> | IAM actions required for the ListDomainDeliverabilityCampaigns API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListEmailIdentities">ListEmailIdentities</a></code> | <code>string[]</code> | IAM actions required for the ListEmailIdentities API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListEmailIdentityCertificates">ListEmailIdentityCertificates</a></code> | <code>string[]</code> | IAM actions required for the ListEmailIdentityCertificates API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListEmailTemplates">ListEmailTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListEmailTemplates API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListExportJobs">ListExportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListExportJobs API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListIdentities">ListIdentities</a></code> | <code>string[]</code> | IAM actions required for the ListIdentities API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListIdentityPolicies">ListIdentityPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListIdentityPolicies API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListImportJobs">ListImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListImportJobs API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListIngressPoints">ListIngressPoints</a></code> | <code>string[]</code> | IAM actions required for the ListIngressPoints API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListMembersOfAddressList">ListMembersOfAddressList</a></code> | <code>string[]</code> | IAM actions required for the ListMembersOfAddressList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListMultiRegionEndpoints">ListMultiRegionEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListMultiRegionEndpoints API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListReceiptFilters">ListReceiptFilters</a></code> | <code>string[]</code> | IAM actions required for the ListReceiptFilters API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListReceiptRuleSets">ListReceiptRuleSets</a></code> | <code>string[]</code> | IAM actions required for the ListReceiptRuleSets API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListRecommendations">ListRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendations API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListRelays">ListRelays</a></code> | <code>string[]</code> | IAM actions required for the ListRelays API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListReputationEntities">ListReputationEntities</a></code> | <code>string[]</code> | IAM actions required for the ListReputationEntities API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListResourceTenants">ListResourceTenants</a></code> | <code>string[]</code> | IAM actions required for the ListResourceTenants API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListRuleSets">ListRuleSets</a></code> | <code>string[]</code> | IAM actions required for the ListRuleSets API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListSuppressedDestinations">ListSuppressedDestinations</a></code> | <code>string[]</code> | IAM actions required for the ListSuppressedDestinations API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListTemplates">ListTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListTemplates API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListTenantResources">ListTenantResources</a></code> | <code>string[]</code> | IAM actions required for the ListTenantResources API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListTenants">ListTenants</a></code> | <code>string[]</code> | IAM actions required for the ListTenants API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListTrafficPolicies">ListTrafficPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListTrafficPolicies API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ListVerifiedEmailAddresses">ListVerifiedEmailAddresses</a></code> | <code>string[]</code> | IAM actions required for the ListVerifiedEmailAddresses API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetAccount">opGetAccount</a></code> | <code>string[]</code> | IAM actions required for the GetAccount API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetAccountSendingEnabled">opGetAccountSendingEnabled</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSendingEnabled API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetAddonInstance">opGetAddonInstance</a></code> | <code>string[]</code> | IAM actions required for the GetAddonInstance API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetAddonSubscription">opGetAddonSubscription</a></code> | <code>string[]</code> | IAM actions required for the GetAddonSubscription API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetAddressList">opGetAddressList</a></code> | <code>string[]</code> | IAM actions required for the GetAddressList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetAddressListImportJob">opGetAddressListImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetAddressListImportJob API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetArchive">opGetArchive</a></code> | <code>string[]</code> | IAM actions required for the GetArchive API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetArchiveExport">opGetArchiveExport</a></code> | <code>string[]</code> | IAM actions required for the GetArchiveExport API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetArchiveMessage">opGetArchiveMessage</a></code> | <code>string[]</code> | IAM actions required for the GetArchiveMessage API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetArchiveMessageContent">opGetArchiveMessageContent</a></code> | <code>string[]</code> | IAM actions required for the GetArchiveMessageContent API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetArchiveSearch">opGetArchiveSearch</a></code> | <code>string[]</code> | IAM actions required for the GetArchiveSearch API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetArchiveSearchResults">opGetArchiveSearchResults</a></code> | <code>string[]</code> | IAM actions required for the GetArchiveSearchResults API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetBlacklistReports">opGetBlacklistReports</a></code> | <code>string[]</code> | IAM actions required for the GetBlacklistReports API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetConfigurationSet">opGetConfigurationSet</a></code> | <code>string[]</code> | IAM actions required for the GetConfigurationSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetConfigurationSetEventDestinations">opGetConfigurationSetEventDestinations</a></code> | <code>string[]</code> | IAM actions required for the GetConfigurationSetEventDestinations API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetContact">opGetContact</a></code> | <code>string[]</code> | IAM actions required for the GetContact API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetContactList">opGetContactList</a></code> | <code>string[]</code> | IAM actions required for the GetContactList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetCustomVerificationEmailTemplate">opGetCustomVerificationEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetCustomVerificationEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetDedicatedIp">opGetDedicatedIp</a></code> | <code>string[]</code> | IAM actions required for the GetDedicatedIp API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetDedicatedIpPool">opGetDedicatedIpPool</a></code> | <code>string[]</code> | IAM actions required for the GetDedicatedIpPool API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetDedicatedIps">opGetDedicatedIps</a></code> | <code>string[]</code> | IAM actions required for the GetDedicatedIps API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetDeliverabilityDashboardOptions">opGetDeliverabilityDashboardOptions</a></code> | <code>string[]</code> | IAM actions required for the GetDeliverabilityDashboardOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetDeliverabilityTestReport">opGetDeliverabilityTestReport</a></code> | <code>string[]</code> | IAM actions required for the GetDeliverabilityTestReport API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetDomainDeliverabilityCampaign">opGetDomainDeliverabilityCampaign</a></code> | <code>string[]</code> | IAM actions required for the GetDomainDeliverabilityCampaign API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetDomainStatisticsReport">opGetDomainStatisticsReport</a></code> | <code>string[]</code> | IAM actions required for the GetDomainStatisticsReport API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetEmailAddressInsights">opGetEmailAddressInsights</a></code> | <code>string[]</code> | IAM actions required for the GetEmailAddressInsights API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetEmailIdentity">opGetEmailIdentity</a></code> | <code>string[]</code> | IAM actions required for the GetEmailIdentity API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetEmailIdentityPolicies">opGetEmailIdentityPolicies</a></code> | <code>string[]</code> | IAM actions required for the GetEmailIdentityPolicies API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetEmailTemplate">opGetEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetExportJob">opGetExportJob</a></code> | <code>string[]</code> | IAM actions required for the GetExportJob API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetIdentityDkimAttributes">opGetIdentityDkimAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityDkimAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetIdentityMailFromDomainAttributes">opGetIdentityMailFromDomainAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityMailFromDomainAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetIdentityNotificationAttributes">opGetIdentityNotificationAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityNotificationAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetIdentityPolicies">opGetIdentityPolicies</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityPolicies API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetIdentityVerificationAttributes">opGetIdentityVerificationAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityVerificationAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetImportJob">opGetImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetImportJob API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetIngressPoint">opGetIngressPoint</a></code> | <code>string[]</code> | IAM actions required for the GetIngressPoint API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetMemberOfAddressList">opGetMemberOfAddressList</a></code> | <code>string[]</code> | IAM actions required for the GetMemberOfAddressList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetMessageInsights">opGetMessageInsights</a></code> | <code>string[]</code> | IAM actions required for the GetMessageInsights API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetMultiRegionEndpoint">opGetMultiRegionEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetMultiRegionEndpoint API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetRelay">opGetRelay</a></code> | <code>string[]</code> | IAM actions required for the GetRelay API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetReputationEntity">opGetReputationEntity</a></code> | <code>string[]</code> | IAM actions required for the GetReputationEntity API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetRuleSet">opGetRuleSet</a></code> | <code>string[]</code> | IAM actions required for the GetRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetSendQuota">opGetSendQuota</a></code> | <code>string[]</code> | IAM actions required for the GetSendQuota API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetSendStatistics">opGetSendStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetSendStatistics API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetSuppressedDestination">opGetSuppressedDestination</a></code> | <code>string[]</code> | IAM actions required for the GetSuppressedDestination API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetTemplate">opGetTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetTenant">opGetTenant</a></code> | <code>string[]</code> | IAM actions required for the GetTenant API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opGetTrafficPolicy">opGetTrafficPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetTrafficPolicy API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opSetActiveReceiptRuleSet">opSetActiveReceiptRuleSet</a></code> | <code>string[]</code> | IAM actions required for the SetActiveReceiptRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opSetIdentityDkimEnabled">opSetIdentityDkimEnabled</a></code> | <code>string[]</code> | IAM actions required for the SetIdentityDkimEnabled API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opSetIdentityFeedbackForwardingEnabled">opSetIdentityFeedbackForwardingEnabled</a></code> | <code>string[]</code> | IAM actions required for the SetIdentityFeedbackForwardingEnabled API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opSetIdentityHeadersInNotificationsEnabled">opSetIdentityHeadersInNotificationsEnabled</a></code> | <code>string[]</code> | IAM actions required for the SetIdentityHeadersInNotificationsEnabled API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opSetIdentityMailFromDomain">opSetIdentityMailFromDomain</a></code> | <code>string[]</code> | IAM actions required for the SetIdentityMailFromDomain API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opSetIdentityNotificationTopic">opSetIdentityNotificationTopic</a></code> | <code>string[]</code> | IAM actions required for the SetIdentityNotificationTopic API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.opSetReceiptRulePosition">opSetReceiptRulePosition</a></code> | <code>string[]</code> | IAM actions required for the SetReceiptRulePosition API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutAccountDedicatedIpWarmupAttributes">PutAccountDedicatedIpWarmupAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutAccountDedicatedIpWarmupAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutAccountDetails">PutAccountDetails</a></code> | <code>string[]</code> | IAM actions required for the PutAccountDetails API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutAccountPricingAttributes">PutAccountPricingAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutAccountPricingAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutAccountSendingAttributes">PutAccountSendingAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutAccountSendingAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutAccountSuppressionAttributes">PutAccountSuppressionAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutAccountSuppressionAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutAccountVdmAttributes">PutAccountVdmAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutAccountVdmAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetArchivingOptions">PutConfigurationSetArchivingOptions</a></code> | <code>string[]</code> | IAM actions required for the PutConfigurationSetArchivingOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetDeliveryOptions">PutConfigurationSetDeliveryOptions</a></code> | <code>string[]</code> | IAM actions required for the PutConfigurationSetDeliveryOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetReputationOptions">PutConfigurationSetReputationOptions</a></code> | <code>string[]</code> | IAM actions required for the PutConfigurationSetReputationOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetSendingOptions">PutConfigurationSetSendingOptions</a></code> | <code>string[]</code> | IAM actions required for the PutConfigurationSetSendingOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetSuppressionOptions">PutConfigurationSetSuppressionOptions</a></code> | <code>string[]</code> | IAM actions required for the PutConfigurationSetSuppressionOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetTrackingOptions">PutConfigurationSetTrackingOptions</a></code> | <code>string[]</code> | IAM actions required for the PutConfigurationSetTrackingOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetVdmOptions">PutConfigurationSetVdmOptions</a></code> | <code>string[]</code> | IAM actions required for the PutConfigurationSetVdmOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutDedicatedIpInPool">PutDedicatedIpInPool</a></code> | <code>string[]</code> | IAM actions required for the PutDedicatedIpInPool API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutDedicatedIpPoolScalingAttributes">PutDedicatedIpPoolScalingAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutDedicatedIpPoolScalingAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutDedicatedIpWarmupAttributes">PutDedicatedIpWarmupAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutDedicatedIpWarmupAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutDeliverabilityDashboardOption">PutDeliverabilityDashboardOption</a></code> | <code>string[]</code> | IAM actions required for the PutDeliverabilityDashboardOption API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutEmailIdentityConfigurationSetAttributes">PutEmailIdentityConfigurationSetAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutEmailIdentityConfigurationSetAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutEmailIdentityDkimAttributes">PutEmailIdentityDkimAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutEmailIdentityDkimAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutEmailIdentityDkimSigningAttributes">PutEmailIdentityDkimSigningAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutEmailIdentityDkimSigningAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutEmailIdentityFeedbackAttributes">PutEmailIdentityFeedbackAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutEmailIdentityFeedbackAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutEmailIdentityMailFromAttributes">PutEmailIdentityMailFromAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutEmailIdentityMailFromAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutIdentityPolicy">PutIdentityPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutIdentityPolicy API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutSuppressedDestination">PutSuppressedDestination</a></code> | <code>string[]</code> | IAM actions required for the PutSuppressedDestination API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.PutTenantSuppressionAttributes">PutTenantSuppressionAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutTenantSuppressionAttributes API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.RegisterMemberToAddressList">RegisterMemberToAddressList</a></code> | <code>string[]</code> | IAM actions required for the RegisterMemberToAddressList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.ReorderReceiptRuleSet">ReorderReceiptRuleSet</a></code> | <code>string[]</code> | IAM actions required for the ReorderReceiptRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.SendBounce">SendBounce</a></code> | <code>string[]</code> | IAM actions required for the SendBounce API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.SendBulkEmail">SendBulkEmail</a></code> | <code>string[]</code> | IAM actions required for the SendBulkEmail API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.SendBulkTemplatedEmail">SendBulkTemplatedEmail</a></code> | <code>string[]</code> | IAM actions required for the SendBulkTemplatedEmail API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.SendCustomVerificationEmail">SendCustomVerificationEmail</a></code> | <code>string[]</code> | IAM actions required for the SendCustomVerificationEmail API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.SendEmail">SendEmail</a></code> | <code>string[]</code> | IAM actions required for the SendEmail API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.SendRawEmail">SendRawEmail</a></code> | <code>string[]</code> | IAM actions required for the SendRawEmail API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.SendTemplatedEmail">SendTemplatedEmail</a></code> | <code>string[]</code> | IAM actions required for the SendTemplatedEmail API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.StartAddressListImportJob">StartAddressListImportJob</a></code> | <code>string[]</code> | IAM actions required for the StartAddressListImportJob API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.StartArchiveExport">StartArchiveExport</a></code> | <code>string[]</code> | IAM actions required for the StartArchiveExport API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.StartArchiveSearch">StartArchiveSearch</a></code> | <code>string[]</code> | IAM actions required for the StartArchiveSearch API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.StopAddressListImportJob">StopAddressListImportJob</a></code> | <code>string[]</code> | IAM actions required for the StopAddressListImportJob API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.StopArchiveExport">StopArchiveExport</a></code> | <code>string[]</code> | IAM actions required for the StopArchiveExport API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.StopArchiveSearch">StopArchiveSearch</a></code> | <code>string[]</code> | IAM actions required for the StopArchiveSearch API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.TestRenderEmailTemplate">TestRenderEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the TestRenderEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.TestRenderTemplate">TestRenderTemplate</a></code> | <code>string[]</code> | IAM actions required for the TestRenderTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateAccountSendingEnabled">UpdateAccountSendingEnabled</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountSendingEnabled API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateArchive">UpdateArchive</a></code> | <code>string[]</code> | IAM actions required for the UpdateArchive API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateConfigurationSet">UpdateConfigurationSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateConfigurationSetEventDestination">UpdateConfigurationSetEventDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationSetEventDestination API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateConfigurationSetReputationMetricsEnabled">UpdateConfigurationSetReputationMetricsEnabled</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationSetReputationMetricsEnabled API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateConfigurationSetSendingEnabled">UpdateConfigurationSetSendingEnabled</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationSetSendingEnabled API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateConfigurationSetTrackingOptions">UpdateConfigurationSetTrackingOptions</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationSetTrackingOptions API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateContact">UpdateContact</a></code> | <code>string[]</code> | IAM actions required for the UpdateContact API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateContactList">UpdateContactList</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactList API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateCustomVerificationEmailTemplate">UpdateCustomVerificationEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomVerificationEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateEmailIdentityPolicy">UpdateEmailIdentityPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateEmailIdentityPolicy API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateEmailTemplate">UpdateEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateIngressPoint">UpdateIngressPoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateIngressPoint API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateReceiptRule">UpdateReceiptRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateReceiptRule API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateRelay">UpdateRelay</a></code> | <code>string[]</code> | IAM actions required for the UpdateRelay API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateReputationEntityCustomerManagedStatus">UpdateReputationEntityCustomerManagedStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateReputationEntityCustomerManagedStatus API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateReputationEntityPolicy">UpdateReputationEntityPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateReputationEntityPolicy API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateRuleSet">UpdateRuleSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateRuleSet API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplate API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.UpdateTrafficPolicy">UpdateTrafficPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrafficPolicy API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.VerifyDomainDkim">VerifyDomainDkim</a></code> | <code>string[]</code> | IAM actions required for the VerifyDomainDkim API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.VerifyDomainIdentity">VerifyDomainIdentity</a></code> | <code>string[]</code> | IAM actions required for the VerifyDomainIdentity API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.VerifyEmailAddress">VerifyEmailAddress</a></code> | <code>string[]</code> | IAM actions required for the VerifyEmailAddress API call. |
| <code><a href="#@cdk_utils/iam.ses.SesOperations.property.VerifyEmailIdentity">VerifyEmailIdentity</a></code> | <code>string[]</code> | IAM actions required for the VerifyEmailIdentity API call. |

---

##### `AssociateEmailIdentityCertificate`<sup>Required</sup> <a name="AssociateEmailIdentityCertificate" id="@cdk_utils/iam.ses.SesOperations.property.AssociateEmailIdentityCertificate"></a>

```typescript
public readonly AssociateEmailIdentityCertificate: string[];
```

- *Type:* string[]

IAM actions required for the AssociateEmailIdentityCertificate API call.

---

##### `BatchGetMetricData`<sup>Required</sup> <a name="BatchGetMetricData" id="@cdk_utils/iam.ses.SesOperations.property.BatchGetMetricData"></a>

```typescript
public readonly BatchGetMetricData: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetMetricData API call.

---

##### `CancelExportJob`<sup>Required</sup> <a name="CancelExportJob" id="@cdk_utils/iam.ses.SesOperations.property.CancelExportJob"></a>

```typescript
public readonly CancelExportJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelExportJob API call.

---

##### `CloneReceiptRuleSet`<sup>Required</sup> <a name="CloneReceiptRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.CloneReceiptRuleSet"></a>

```typescript
public readonly CloneReceiptRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the CloneReceiptRuleSet API call.

---

##### `CreateAddonInstance`<sup>Required</sup> <a name="CreateAddonInstance" id="@cdk_utils/iam.ses.SesOperations.property.CreateAddonInstance"></a>

```typescript
public readonly CreateAddonInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateAddonInstance API call.

---

##### `CreateAddonSubscription`<sup>Required</sup> <a name="CreateAddonSubscription" id="@cdk_utils/iam.ses.SesOperations.property.CreateAddonSubscription"></a>

```typescript
public readonly CreateAddonSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateAddonSubscription API call.

---

##### `CreateAddressList`<sup>Required</sup> <a name="CreateAddressList" id="@cdk_utils/iam.ses.SesOperations.property.CreateAddressList"></a>

```typescript
public readonly CreateAddressList: string[];
```

- *Type:* string[]

IAM actions required for the CreateAddressList API call.

---

##### `CreateAddressListImportJob`<sup>Required</sup> <a name="CreateAddressListImportJob" id="@cdk_utils/iam.ses.SesOperations.property.CreateAddressListImportJob"></a>

```typescript
public readonly CreateAddressListImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateAddressListImportJob API call.

---

##### `CreateArchive`<sup>Required</sup> <a name="CreateArchive" id="@cdk_utils/iam.ses.SesOperations.property.CreateArchive"></a>

```typescript
public readonly CreateArchive: string[];
```

- *Type:* string[]

IAM actions required for the CreateArchive API call.

---

##### `CreateConfigurationSet`<sup>Required</sup> <a name="CreateConfigurationSet" id="@cdk_utils/iam.ses.SesOperations.property.CreateConfigurationSet"></a>

```typescript
public readonly CreateConfigurationSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfigurationSet API call.

---

##### `CreateConfigurationSetEventDestination`<sup>Required</sup> <a name="CreateConfigurationSetEventDestination" id="@cdk_utils/iam.ses.SesOperations.property.CreateConfigurationSetEventDestination"></a>

```typescript
public readonly CreateConfigurationSetEventDestination: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfigurationSetEventDestination API call.

---

##### `CreateConfigurationSetTrackingOptions`<sup>Required</sup> <a name="CreateConfigurationSetTrackingOptions" id="@cdk_utils/iam.ses.SesOperations.property.CreateConfigurationSetTrackingOptions"></a>

```typescript
public readonly CreateConfigurationSetTrackingOptions: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfigurationSetTrackingOptions API call.

---

##### `CreateContact`<sup>Required</sup> <a name="CreateContact" id="@cdk_utils/iam.ses.SesOperations.property.CreateContact"></a>

```typescript
public readonly CreateContact: string[];
```

- *Type:* string[]

IAM actions required for the CreateContact API call.

---

##### `CreateContactList`<sup>Required</sup> <a name="CreateContactList" id="@cdk_utils/iam.ses.SesOperations.property.CreateContactList"></a>

```typescript
public readonly CreateContactList: string[];
```

- *Type:* string[]

IAM actions required for the CreateContactList API call.

---

##### `CreateCustomVerificationEmailTemplate`<sup>Required</sup> <a name="CreateCustomVerificationEmailTemplate" id="@cdk_utils/iam.ses.SesOperations.property.CreateCustomVerificationEmailTemplate"></a>

```typescript
public readonly CreateCustomVerificationEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomVerificationEmailTemplate API call.

---

##### `CreateDedicatedIpPool`<sup>Required</sup> <a name="CreateDedicatedIpPool" id="@cdk_utils/iam.ses.SesOperations.property.CreateDedicatedIpPool"></a>

```typescript
public readonly CreateDedicatedIpPool: string[];
```

- *Type:* string[]

IAM actions required for the CreateDedicatedIpPool API call.

---

##### `CreateDeliverabilityTestReport`<sup>Required</sup> <a name="CreateDeliverabilityTestReport" id="@cdk_utils/iam.ses.SesOperations.property.CreateDeliverabilityTestReport"></a>

```typescript
public readonly CreateDeliverabilityTestReport: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeliverabilityTestReport API call.

---

##### `CreateEmailIdentity`<sup>Required</sup> <a name="CreateEmailIdentity" id="@cdk_utils/iam.ses.SesOperations.property.CreateEmailIdentity"></a>

```typescript
public readonly CreateEmailIdentity: string[];
```

- *Type:* string[]

IAM actions required for the CreateEmailIdentity API call.

---

##### `CreateEmailIdentityPolicy`<sup>Required</sup> <a name="CreateEmailIdentityPolicy" id="@cdk_utils/iam.ses.SesOperations.property.CreateEmailIdentityPolicy"></a>

```typescript
public readonly CreateEmailIdentityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateEmailIdentityPolicy API call.

---

##### `CreateEmailTemplate`<sup>Required</sup> <a name="CreateEmailTemplate" id="@cdk_utils/iam.ses.SesOperations.property.CreateEmailTemplate"></a>

```typescript
public readonly CreateEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateEmailTemplate API call.

---

##### `CreateExportJob`<sup>Required</sup> <a name="CreateExportJob" id="@cdk_utils/iam.ses.SesOperations.property.CreateExportJob"></a>

```typescript
public readonly CreateExportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateExportJob API call.

---

##### `CreateImportJob`<sup>Required</sup> <a name="CreateImportJob" id="@cdk_utils/iam.ses.SesOperations.property.CreateImportJob"></a>

```typescript
public readonly CreateImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateImportJob API call.

---

##### `CreateIngressPoint`<sup>Required</sup> <a name="CreateIngressPoint" id="@cdk_utils/iam.ses.SesOperations.property.CreateIngressPoint"></a>

```typescript
public readonly CreateIngressPoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateIngressPoint API call.

---

##### `CreateMultiRegionEndpoint`<sup>Required</sup> <a name="CreateMultiRegionEndpoint" id="@cdk_utils/iam.ses.SesOperations.property.CreateMultiRegionEndpoint"></a>

```typescript
public readonly CreateMultiRegionEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateMultiRegionEndpoint API call.

---

##### `CreateReceiptFilter`<sup>Required</sup> <a name="CreateReceiptFilter" id="@cdk_utils/iam.ses.SesOperations.property.CreateReceiptFilter"></a>

```typescript
public readonly CreateReceiptFilter: string[];
```

- *Type:* string[]

IAM actions required for the CreateReceiptFilter API call.

---

##### `CreateReceiptRule`<sup>Required</sup> <a name="CreateReceiptRule" id="@cdk_utils/iam.ses.SesOperations.property.CreateReceiptRule"></a>

```typescript
public readonly CreateReceiptRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateReceiptRule API call.

---

##### `CreateReceiptRuleSet`<sup>Required</sup> <a name="CreateReceiptRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.CreateReceiptRuleSet"></a>

```typescript
public readonly CreateReceiptRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateReceiptRuleSet API call.

---

##### `CreateRelay`<sup>Required</sup> <a name="CreateRelay" id="@cdk_utils/iam.ses.SesOperations.property.CreateRelay"></a>

```typescript
public readonly CreateRelay: string[];
```

- *Type:* string[]

IAM actions required for the CreateRelay API call.

---

##### `CreateRuleSet`<sup>Required</sup> <a name="CreateRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.CreateRuleSet"></a>

```typescript
public readonly CreateRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateRuleSet API call.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.ses.SesOperations.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplate API call.

---

##### `CreateTenant`<sup>Required</sup> <a name="CreateTenant" id="@cdk_utils/iam.ses.SesOperations.property.CreateTenant"></a>

```typescript
public readonly CreateTenant: string[];
```

- *Type:* string[]

IAM actions required for the CreateTenant API call.

---

##### `CreateTenantResourceAssociation`<sup>Required</sup> <a name="CreateTenantResourceAssociation" id="@cdk_utils/iam.ses.SesOperations.property.CreateTenantResourceAssociation"></a>

```typescript
public readonly CreateTenantResourceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateTenantResourceAssociation API call.

---

##### `CreateTrafficPolicy`<sup>Required</sup> <a name="CreateTrafficPolicy" id="@cdk_utils/iam.ses.SesOperations.property.CreateTrafficPolicy"></a>

```typescript
public readonly CreateTrafficPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrafficPolicy API call.

---

##### `DeleteAddonInstance`<sup>Required</sup> <a name="DeleteAddonInstance" id="@cdk_utils/iam.ses.SesOperations.property.DeleteAddonInstance"></a>

```typescript
public readonly DeleteAddonInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAddonInstance API call.

---

##### `DeleteAddonSubscription`<sup>Required</sup> <a name="DeleteAddonSubscription" id="@cdk_utils/iam.ses.SesOperations.property.DeleteAddonSubscription"></a>

```typescript
public readonly DeleteAddonSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAddonSubscription API call.

---

##### `DeleteAddressList`<sup>Required</sup> <a name="DeleteAddressList" id="@cdk_utils/iam.ses.SesOperations.property.DeleteAddressList"></a>

```typescript
public readonly DeleteAddressList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAddressList API call.

---

##### `DeleteArchive`<sup>Required</sup> <a name="DeleteArchive" id="@cdk_utils/iam.ses.SesOperations.property.DeleteArchive"></a>

```typescript
public readonly DeleteArchive: string[];
```

- *Type:* string[]

IAM actions required for the DeleteArchive API call.

---

##### `DeleteConfigurationSet`<sup>Required</sup> <a name="DeleteConfigurationSet" id="@cdk_utils/iam.ses.SesOperations.property.DeleteConfigurationSet"></a>

```typescript
public readonly DeleteConfigurationSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationSet API call.

---

##### `DeleteConfigurationSetEventDestination`<sup>Required</sup> <a name="DeleteConfigurationSetEventDestination" id="@cdk_utils/iam.ses.SesOperations.property.DeleteConfigurationSetEventDestination"></a>

```typescript
public readonly DeleteConfigurationSetEventDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationSetEventDestination API call.

---

##### `DeleteConfigurationSetTrackingOptions`<sup>Required</sup> <a name="DeleteConfigurationSetTrackingOptions" id="@cdk_utils/iam.ses.SesOperations.property.DeleteConfigurationSetTrackingOptions"></a>

```typescript
public readonly DeleteConfigurationSetTrackingOptions: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationSetTrackingOptions API call.

---

##### `DeleteContact`<sup>Required</sup> <a name="DeleteContact" id="@cdk_utils/iam.ses.SesOperations.property.DeleteContact"></a>

```typescript
public readonly DeleteContact: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContact API call.

---

##### `DeleteContactList`<sup>Required</sup> <a name="DeleteContactList" id="@cdk_utils/iam.ses.SesOperations.property.DeleteContactList"></a>

```typescript
public readonly DeleteContactList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContactList API call.

---

##### `DeleteCustomVerificationEmailTemplate`<sup>Required</sup> <a name="DeleteCustomVerificationEmailTemplate" id="@cdk_utils/iam.ses.SesOperations.property.DeleteCustomVerificationEmailTemplate"></a>

```typescript
public readonly DeleteCustomVerificationEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomVerificationEmailTemplate API call.

---

##### `DeleteDedicatedIpPool`<sup>Required</sup> <a name="DeleteDedicatedIpPool" id="@cdk_utils/iam.ses.SesOperations.property.DeleteDedicatedIpPool"></a>

```typescript
public readonly DeleteDedicatedIpPool: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDedicatedIpPool API call.

---

##### `DeleteEmailIdentity`<sup>Required</sup> <a name="DeleteEmailIdentity" id="@cdk_utils/iam.ses.SesOperations.property.DeleteEmailIdentity"></a>

```typescript
public readonly DeleteEmailIdentity: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEmailIdentity API call.

---

##### `DeleteEmailIdentityPolicy`<sup>Required</sup> <a name="DeleteEmailIdentityPolicy" id="@cdk_utils/iam.ses.SesOperations.property.DeleteEmailIdentityPolicy"></a>

```typescript
public readonly DeleteEmailIdentityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEmailIdentityPolicy API call.

---

##### `DeleteEmailTemplate`<sup>Required</sup> <a name="DeleteEmailTemplate" id="@cdk_utils/iam.ses.SesOperations.property.DeleteEmailTemplate"></a>

```typescript
public readonly DeleteEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEmailTemplate API call.

---

##### `DeleteIdentity`<sup>Required</sup> <a name="DeleteIdentity" id="@cdk_utils/iam.ses.SesOperations.property.DeleteIdentity"></a>

```typescript
public readonly DeleteIdentity: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentity API call.

---

##### `DeleteIdentityPolicy`<sup>Required</sup> <a name="DeleteIdentityPolicy" id="@cdk_utils/iam.ses.SesOperations.property.DeleteIdentityPolicy"></a>

```typescript
public readonly DeleteIdentityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentityPolicy API call.

---

##### `DeleteIngressPoint`<sup>Required</sup> <a name="DeleteIngressPoint" id="@cdk_utils/iam.ses.SesOperations.property.DeleteIngressPoint"></a>

```typescript
public readonly DeleteIngressPoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIngressPoint API call.

---

##### `DeleteMultiRegionEndpoint`<sup>Required</sup> <a name="DeleteMultiRegionEndpoint" id="@cdk_utils/iam.ses.SesOperations.property.DeleteMultiRegionEndpoint"></a>

```typescript
public readonly DeleteMultiRegionEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMultiRegionEndpoint API call.

---

##### `DeleteReceiptFilter`<sup>Required</sup> <a name="DeleteReceiptFilter" id="@cdk_utils/iam.ses.SesOperations.property.DeleteReceiptFilter"></a>

```typescript
public readonly DeleteReceiptFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReceiptFilter API call.

---

##### `DeleteReceiptRule`<sup>Required</sup> <a name="DeleteReceiptRule" id="@cdk_utils/iam.ses.SesOperations.property.DeleteReceiptRule"></a>

```typescript
public readonly DeleteReceiptRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReceiptRule API call.

---

##### `DeleteReceiptRuleSet`<sup>Required</sup> <a name="DeleteReceiptRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.DeleteReceiptRuleSet"></a>

```typescript
public readonly DeleteReceiptRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReceiptRuleSet API call.

---

##### `DeleteRelay`<sup>Required</sup> <a name="DeleteRelay" id="@cdk_utils/iam.ses.SesOperations.property.DeleteRelay"></a>

```typescript
public readonly DeleteRelay: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRelay API call.

---

##### `DeleteRuleSet`<sup>Required</sup> <a name="DeleteRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.DeleteRuleSet"></a>

```typescript
public readonly DeleteRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRuleSet API call.

---

##### `DeleteSuppressedDestination`<sup>Required</sup> <a name="DeleteSuppressedDestination" id="@cdk_utils/iam.ses.SesOperations.property.DeleteSuppressedDestination"></a>

```typescript
public readonly DeleteSuppressedDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSuppressedDestination API call.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.ses.SesOperations.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTemplate API call.

---

##### `DeleteTenant`<sup>Required</sup> <a name="DeleteTenant" id="@cdk_utils/iam.ses.SesOperations.property.DeleteTenant"></a>

```typescript
public readonly DeleteTenant: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTenant API call.

---

##### `DeleteTenantResourceAssociation`<sup>Required</sup> <a name="DeleteTenantResourceAssociation" id="@cdk_utils/iam.ses.SesOperations.property.DeleteTenantResourceAssociation"></a>

```typescript
public readonly DeleteTenantResourceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTenantResourceAssociation API call.

---

##### `DeleteTrafficPolicy`<sup>Required</sup> <a name="DeleteTrafficPolicy" id="@cdk_utils/iam.ses.SesOperations.property.DeleteTrafficPolicy"></a>

```typescript
public readonly DeleteTrafficPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrafficPolicy API call.

---

##### `DeleteVerifiedEmailAddress`<sup>Required</sup> <a name="DeleteVerifiedEmailAddress" id="@cdk_utils/iam.ses.SesOperations.property.DeleteVerifiedEmailAddress"></a>

```typescript
public readonly DeleteVerifiedEmailAddress: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVerifiedEmailAddress API call.

---

##### `DeregisterMemberFromAddressList`<sup>Required</sup> <a name="DeregisterMemberFromAddressList" id="@cdk_utils/iam.ses.SesOperations.property.DeregisterMemberFromAddressList"></a>

```typescript
public readonly DeregisterMemberFromAddressList: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterMemberFromAddressList API call.

---

##### `DescribeActiveReceiptRuleSet`<sup>Required</sup> <a name="DescribeActiveReceiptRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.DescribeActiveReceiptRuleSet"></a>

```typescript
public readonly DescribeActiveReceiptRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the DescribeActiveReceiptRuleSet API call.

---

##### `DescribeConfigurationSet`<sup>Required</sup> <a name="DescribeConfigurationSet" id="@cdk_utils/iam.ses.SesOperations.property.DescribeConfigurationSet"></a>

```typescript
public readonly DescribeConfigurationSet: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationSet API call.

---

##### `DescribeReceiptRule`<sup>Required</sup> <a name="DescribeReceiptRule" id="@cdk_utils/iam.ses.SesOperations.property.DescribeReceiptRule"></a>

```typescript
public readonly DescribeReceiptRule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReceiptRule API call.

---

##### `DescribeReceiptRuleSet`<sup>Required</sup> <a name="DescribeReceiptRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.DescribeReceiptRuleSet"></a>

```typescript
public readonly DescribeReceiptRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReceiptRuleSet API call.

---

##### `DisassociateEmailIdentityCertificate`<sup>Required</sup> <a name="DisassociateEmailIdentityCertificate" id="@cdk_utils/iam.ses.SesOperations.property.DisassociateEmailIdentityCertificate"></a>

```typescript
public readonly DisassociateEmailIdentityCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateEmailIdentityCertificate API call.

---

##### `ListAddonInstances`<sup>Required</sup> <a name="ListAddonInstances" id="@cdk_utils/iam.ses.SesOperations.property.ListAddonInstances"></a>

```typescript
public readonly ListAddonInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListAddonInstances API call.

---

##### `ListAddonSubscriptions`<sup>Required</sup> <a name="ListAddonSubscriptions" id="@cdk_utils/iam.ses.SesOperations.property.ListAddonSubscriptions"></a>

```typescript
public readonly ListAddonSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListAddonSubscriptions API call.

---

##### `ListAddressListImportJobs`<sup>Required</sup> <a name="ListAddressListImportJobs" id="@cdk_utils/iam.ses.SesOperations.property.ListAddressListImportJobs"></a>

```typescript
public readonly ListAddressListImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListAddressListImportJobs API call.

---

##### `ListAddressLists`<sup>Required</sup> <a name="ListAddressLists" id="@cdk_utils/iam.ses.SesOperations.property.ListAddressLists"></a>

```typescript
public readonly ListAddressLists: string[];
```

- *Type:* string[]

IAM actions required for the ListAddressLists API call.

---

##### `ListArchiveExports`<sup>Required</sup> <a name="ListArchiveExports" id="@cdk_utils/iam.ses.SesOperations.property.ListArchiveExports"></a>

```typescript
public readonly ListArchiveExports: string[];
```

- *Type:* string[]

IAM actions required for the ListArchiveExports API call.

---

##### `ListArchives`<sup>Required</sup> <a name="ListArchives" id="@cdk_utils/iam.ses.SesOperations.property.ListArchives"></a>

```typescript
public readonly ListArchives: string[];
```

- *Type:* string[]

IAM actions required for the ListArchives API call.

---

##### `ListArchiveSearches`<sup>Required</sup> <a name="ListArchiveSearches" id="@cdk_utils/iam.ses.SesOperations.property.ListArchiveSearches"></a>

```typescript
public readonly ListArchiveSearches: string[];
```

- *Type:* string[]

IAM actions required for the ListArchiveSearches API call.

---

##### `ListConfigurationSets`<sup>Required</sup> <a name="ListConfigurationSets" id="@cdk_utils/iam.ses.SesOperations.property.ListConfigurationSets"></a>

```typescript
public readonly ListConfigurationSets: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationSets API call.

---

##### `ListContactLists`<sup>Required</sup> <a name="ListContactLists" id="@cdk_utils/iam.ses.SesOperations.property.ListContactLists"></a>

```typescript
public readonly ListContactLists: string[];
```

- *Type:* string[]

IAM actions required for the ListContactLists API call.

---

##### `ListContacts`<sup>Required</sup> <a name="ListContacts" id="@cdk_utils/iam.ses.SesOperations.property.ListContacts"></a>

```typescript
public readonly ListContacts: string[];
```

- *Type:* string[]

IAM actions required for the ListContacts API call.

---

##### `ListCustomVerificationEmailTemplates`<sup>Required</sup> <a name="ListCustomVerificationEmailTemplates" id="@cdk_utils/iam.ses.SesOperations.property.ListCustomVerificationEmailTemplates"></a>

```typescript
public readonly ListCustomVerificationEmailTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomVerificationEmailTemplates API call.

---

##### `ListDedicatedIpPools`<sup>Required</sup> <a name="ListDedicatedIpPools" id="@cdk_utils/iam.ses.SesOperations.property.ListDedicatedIpPools"></a>

```typescript
public readonly ListDedicatedIpPools: string[];
```

- *Type:* string[]

IAM actions required for the ListDedicatedIpPools API call.

---

##### `ListDeliverabilityTestReports`<sup>Required</sup> <a name="ListDeliverabilityTestReports" id="@cdk_utils/iam.ses.SesOperations.property.ListDeliverabilityTestReports"></a>

```typescript
public readonly ListDeliverabilityTestReports: string[];
```

- *Type:* string[]

IAM actions required for the ListDeliverabilityTestReports API call.

---

##### `ListDomainDeliverabilityCampaigns`<sup>Required</sup> <a name="ListDomainDeliverabilityCampaigns" id="@cdk_utils/iam.ses.SesOperations.property.ListDomainDeliverabilityCampaigns"></a>

```typescript
public readonly ListDomainDeliverabilityCampaigns: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainDeliverabilityCampaigns API call.

---

##### `ListEmailIdentities`<sup>Required</sup> <a name="ListEmailIdentities" id="@cdk_utils/iam.ses.SesOperations.property.ListEmailIdentities"></a>

```typescript
public readonly ListEmailIdentities: string[];
```

- *Type:* string[]

IAM actions required for the ListEmailIdentities API call.

---

##### `ListEmailIdentityCertificates`<sup>Required</sup> <a name="ListEmailIdentityCertificates" id="@cdk_utils/iam.ses.SesOperations.property.ListEmailIdentityCertificates"></a>

```typescript
public readonly ListEmailIdentityCertificates: string[];
```

- *Type:* string[]

IAM actions required for the ListEmailIdentityCertificates API call.

---

##### `ListEmailTemplates`<sup>Required</sup> <a name="ListEmailTemplates" id="@cdk_utils/iam.ses.SesOperations.property.ListEmailTemplates"></a>

```typescript
public readonly ListEmailTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListEmailTemplates API call.

---

##### `ListExportJobs`<sup>Required</sup> <a name="ListExportJobs" id="@cdk_utils/iam.ses.SesOperations.property.ListExportJobs"></a>

```typescript
public readonly ListExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListExportJobs API call.

---

##### `ListIdentities`<sup>Required</sup> <a name="ListIdentities" id="@cdk_utils/iam.ses.SesOperations.property.ListIdentities"></a>

```typescript
public readonly ListIdentities: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentities API call.

---

##### `ListIdentityPolicies`<sup>Required</sup> <a name="ListIdentityPolicies" id="@cdk_utils/iam.ses.SesOperations.property.ListIdentityPolicies"></a>

```typescript
public readonly ListIdentityPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentityPolicies API call.

---

##### `ListImportJobs`<sup>Required</sup> <a name="ListImportJobs" id="@cdk_utils/iam.ses.SesOperations.property.ListImportJobs"></a>

```typescript
public readonly ListImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListImportJobs API call.

---

##### `ListIngressPoints`<sup>Required</sup> <a name="ListIngressPoints" id="@cdk_utils/iam.ses.SesOperations.property.ListIngressPoints"></a>

```typescript
public readonly ListIngressPoints: string[];
```

- *Type:* string[]

IAM actions required for the ListIngressPoints API call.

---

##### `ListMembersOfAddressList`<sup>Required</sup> <a name="ListMembersOfAddressList" id="@cdk_utils/iam.ses.SesOperations.property.ListMembersOfAddressList"></a>

```typescript
public readonly ListMembersOfAddressList: string[];
```

- *Type:* string[]

IAM actions required for the ListMembersOfAddressList API call.

---

##### `ListMultiRegionEndpoints`<sup>Required</sup> <a name="ListMultiRegionEndpoints" id="@cdk_utils/iam.ses.SesOperations.property.ListMultiRegionEndpoints"></a>

```typescript
public readonly ListMultiRegionEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListMultiRegionEndpoints API call.

---

##### `ListReceiptFilters`<sup>Required</sup> <a name="ListReceiptFilters" id="@cdk_utils/iam.ses.SesOperations.property.ListReceiptFilters"></a>

```typescript
public readonly ListReceiptFilters: string[];
```

- *Type:* string[]

IAM actions required for the ListReceiptFilters API call.

---

##### `ListReceiptRuleSets`<sup>Required</sup> <a name="ListReceiptRuleSets" id="@cdk_utils/iam.ses.SesOperations.property.ListReceiptRuleSets"></a>

```typescript
public readonly ListReceiptRuleSets: string[];
```

- *Type:* string[]

IAM actions required for the ListReceiptRuleSets API call.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.ses.SesOperations.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendations API call.

---

##### `ListRelays`<sup>Required</sup> <a name="ListRelays" id="@cdk_utils/iam.ses.SesOperations.property.ListRelays"></a>

```typescript
public readonly ListRelays: string[];
```

- *Type:* string[]

IAM actions required for the ListRelays API call.

---

##### `ListReputationEntities`<sup>Required</sup> <a name="ListReputationEntities" id="@cdk_utils/iam.ses.SesOperations.property.ListReputationEntities"></a>

```typescript
public readonly ListReputationEntities: string[];
```

- *Type:* string[]

IAM actions required for the ListReputationEntities API call.

---

##### `ListResourceTenants`<sup>Required</sup> <a name="ListResourceTenants" id="@cdk_utils/iam.ses.SesOperations.property.ListResourceTenants"></a>

```typescript
public readonly ListResourceTenants: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceTenants API call.

---

##### `ListRuleSets`<sup>Required</sup> <a name="ListRuleSets" id="@cdk_utils/iam.ses.SesOperations.property.ListRuleSets"></a>

```typescript
public readonly ListRuleSets: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleSets API call.

---

##### `ListSuppressedDestinations`<sup>Required</sup> <a name="ListSuppressedDestinations" id="@cdk_utils/iam.ses.SesOperations.property.ListSuppressedDestinations"></a>

```typescript
public readonly ListSuppressedDestinations: string[];
```

- *Type:* string[]

IAM actions required for the ListSuppressedDestinations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ses.SesOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.ses.SesOperations.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplates API call.

---

##### `ListTenantResources`<sup>Required</sup> <a name="ListTenantResources" id="@cdk_utils/iam.ses.SesOperations.property.ListTenantResources"></a>

```typescript
public readonly ListTenantResources: string[];
```

- *Type:* string[]

IAM actions required for the ListTenantResources API call.

---

##### `ListTenants`<sup>Required</sup> <a name="ListTenants" id="@cdk_utils/iam.ses.SesOperations.property.ListTenants"></a>

```typescript
public readonly ListTenants: string[];
```

- *Type:* string[]

IAM actions required for the ListTenants API call.

---

##### `ListTrafficPolicies`<sup>Required</sup> <a name="ListTrafficPolicies" id="@cdk_utils/iam.ses.SesOperations.property.ListTrafficPolicies"></a>

```typescript
public readonly ListTrafficPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListTrafficPolicies API call.

---

##### `ListVerifiedEmailAddresses`<sup>Required</sup> <a name="ListVerifiedEmailAddresses" id="@cdk_utils/iam.ses.SesOperations.property.ListVerifiedEmailAddresses"></a>

```typescript
public readonly ListVerifiedEmailAddresses: string[];
```

- *Type:* string[]

IAM actions required for the ListVerifiedEmailAddresses API call.

---

##### `opGetAccount`<sup>Required</sup> <a name="opGetAccount" id="@cdk_utils/iam.ses.SesOperations.property.opGetAccount"></a>

```typescript
public readonly opGetAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetAccount API call.

---

##### `opGetAccountSendingEnabled`<sup>Required</sup> <a name="opGetAccountSendingEnabled" id="@cdk_utils/iam.ses.SesOperations.property.opGetAccountSendingEnabled"></a>

```typescript
public readonly opGetAccountSendingEnabled: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSendingEnabled API call.

---

##### `opGetAddonInstance`<sup>Required</sup> <a name="opGetAddonInstance" id="@cdk_utils/iam.ses.SesOperations.property.opGetAddonInstance"></a>

```typescript
public readonly opGetAddonInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetAddonInstance API call.

---

##### `opGetAddonSubscription`<sup>Required</sup> <a name="opGetAddonSubscription" id="@cdk_utils/iam.ses.SesOperations.property.opGetAddonSubscription"></a>

```typescript
public readonly opGetAddonSubscription: string[];
```

- *Type:* string[]

IAM actions required for the GetAddonSubscription API call.

---

##### `opGetAddressList`<sup>Required</sup> <a name="opGetAddressList" id="@cdk_utils/iam.ses.SesOperations.property.opGetAddressList"></a>

```typescript
public readonly opGetAddressList: string[];
```

- *Type:* string[]

IAM actions required for the GetAddressList API call.

---

##### `opGetAddressListImportJob`<sup>Required</sup> <a name="opGetAddressListImportJob" id="@cdk_utils/iam.ses.SesOperations.property.opGetAddressListImportJob"></a>

```typescript
public readonly opGetAddressListImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetAddressListImportJob API call.

---

##### `opGetArchive`<sup>Required</sup> <a name="opGetArchive" id="@cdk_utils/iam.ses.SesOperations.property.opGetArchive"></a>

```typescript
public readonly opGetArchive: string[];
```

- *Type:* string[]

IAM actions required for the GetArchive API call.

---

##### `opGetArchiveExport`<sup>Required</sup> <a name="opGetArchiveExport" id="@cdk_utils/iam.ses.SesOperations.property.opGetArchiveExport"></a>

```typescript
public readonly opGetArchiveExport: string[];
```

- *Type:* string[]

IAM actions required for the GetArchiveExport API call.

---

##### `opGetArchiveMessage`<sup>Required</sup> <a name="opGetArchiveMessage" id="@cdk_utils/iam.ses.SesOperations.property.opGetArchiveMessage"></a>

```typescript
public readonly opGetArchiveMessage: string[];
```

- *Type:* string[]

IAM actions required for the GetArchiveMessage API call.

---

##### `opGetArchiveMessageContent`<sup>Required</sup> <a name="opGetArchiveMessageContent" id="@cdk_utils/iam.ses.SesOperations.property.opGetArchiveMessageContent"></a>

```typescript
public readonly opGetArchiveMessageContent: string[];
```

- *Type:* string[]

IAM actions required for the GetArchiveMessageContent API call.

---

##### `opGetArchiveSearch`<sup>Required</sup> <a name="opGetArchiveSearch" id="@cdk_utils/iam.ses.SesOperations.property.opGetArchiveSearch"></a>

```typescript
public readonly opGetArchiveSearch: string[];
```

- *Type:* string[]

IAM actions required for the GetArchiveSearch API call.

---

##### `opGetArchiveSearchResults`<sup>Required</sup> <a name="opGetArchiveSearchResults" id="@cdk_utils/iam.ses.SesOperations.property.opGetArchiveSearchResults"></a>

```typescript
public readonly opGetArchiveSearchResults: string[];
```

- *Type:* string[]

IAM actions required for the GetArchiveSearchResults API call.

---

##### `opGetBlacklistReports`<sup>Required</sup> <a name="opGetBlacklistReports" id="@cdk_utils/iam.ses.SesOperations.property.opGetBlacklistReports"></a>

```typescript
public readonly opGetBlacklistReports: string[];
```

- *Type:* string[]

IAM actions required for the GetBlacklistReports API call.

---

##### `opGetConfigurationSet`<sup>Required</sup> <a name="opGetConfigurationSet" id="@cdk_utils/iam.ses.SesOperations.property.opGetConfigurationSet"></a>

```typescript
public readonly opGetConfigurationSet: string[];
```

- *Type:* string[]

IAM actions required for the GetConfigurationSet API call.

---

##### `opGetConfigurationSetEventDestinations`<sup>Required</sup> <a name="opGetConfigurationSetEventDestinations" id="@cdk_utils/iam.ses.SesOperations.property.opGetConfigurationSetEventDestinations"></a>

```typescript
public readonly opGetConfigurationSetEventDestinations: string[];
```

- *Type:* string[]

IAM actions required for the GetConfigurationSetEventDestinations API call.

---

##### `opGetContact`<sup>Required</sup> <a name="opGetContact" id="@cdk_utils/iam.ses.SesOperations.property.opGetContact"></a>

```typescript
public readonly opGetContact: string[];
```

- *Type:* string[]

IAM actions required for the GetContact API call.

---

##### `opGetContactList`<sup>Required</sup> <a name="opGetContactList" id="@cdk_utils/iam.ses.SesOperations.property.opGetContactList"></a>

```typescript
public readonly opGetContactList: string[];
```

- *Type:* string[]

IAM actions required for the GetContactList API call.

---

##### `opGetCustomVerificationEmailTemplate`<sup>Required</sup> <a name="opGetCustomVerificationEmailTemplate" id="@cdk_utils/iam.ses.SesOperations.property.opGetCustomVerificationEmailTemplate"></a>

```typescript
public readonly opGetCustomVerificationEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomVerificationEmailTemplate API call.

---

##### `opGetDedicatedIp`<sup>Required</sup> <a name="opGetDedicatedIp" id="@cdk_utils/iam.ses.SesOperations.property.opGetDedicatedIp"></a>

```typescript
public readonly opGetDedicatedIp: string[];
```

- *Type:* string[]

IAM actions required for the GetDedicatedIp API call.

---

##### `opGetDedicatedIpPool`<sup>Required</sup> <a name="opGetDedicatedIpPool" id="@cdk_utils/iam.ses.SesOperations.property.opGetDedicatedIpPool"></a>

```typescript
public readonly opGetDedicatedIpPool: string[];
```

- *Type:* string[]

IAM actions required for the GetDedicatedIpPool API call.

---

##### `opGetDedicatedIps`<sup>Required</sup> <a name="opGetDedicatedIps" id="@cdk_utils/iam.ses.SesOperations.property.opGetDedicatedIps"></a>

```typescript
public readonly opGetDedicatedIps: string[];
```

- *Type:* string[]

IAM actions required for the GetDedicatedIps API call.

---

##### `opGetDeliverabilityDashboardOptions`<sup>Required</sup> <a name="opGetDeliverabilityDashboardOptions" id="@cdk_utils/iam.ses.SesOperations.property.opGetDeliverabilityDashboardOptions"></a>

```typescript
public readonly opGetDeliverabilityDashboardOptions: string[];
```

- *Type:* string[]

IAM actions required for the GetDeliverabilityDashboardOptions API call.

---

##### `opGetDeliverabilityTestReport`<sup>Required</sup> <a name="opGetDeliverabilityTestReport" id="@cdk_utils/iam.ses.SesOperations.property.opGetDeliverabilityTestReport"></a>

```typescript
public readonly opGetDeliverabilityTestReport: string[];
```

- *Type:* string[]

IAM actions required for the GetDeliverabilityTestReport API call.

---

##### `opGetDomainDeliverabilityCampaign`<sup>Required</sup> <a name="opGetDomainDeliverabilityCampaign" id="@cdk_utils/iam.ses.SesOperations.property.opGetDomainDeliverabilityCampaign"></a>

```typescript
public readonly opGetDomainDeliverabilityCampaign: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainDeliverabilityCampaign API call.

---

##### `opGetDomainStatisticsReport`<sup>Required</sup> <a name="opGetDomainStatisticsReport" id="@cdk_utils/iam.ses.SesOperations.property.opGetDomainStatisticsReport"></a>

```typescript
public readonly opGetDomainStatisticsReport: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainStatisticsReport API call.

---

##### `opGetEmailAddressInsights`<sup>Required</sup> <a name="opGetEmailAddressInsights" id="@cdk_utils/iam.ses.SesOperations.property.opGetEmailAddressInsights"></a>

```typescript
public readonly opGetEmailAddressInsights: string[];
```

- *Type:* string[]

IAM actions required for the GetEmailAddressInsights API call.

---

##### `opGetEmailIdentity`<sup>Required</sup> <a name="opGetEmailIdentity" id="@cdk_utils/iam.ses.SesOperations.property.opGetEmailIdentity"></a>

```typescript
public readonly opGetEmailIdentity: string[];
```

- *Type:* string[]

IAM actions required for the GetEmailIdentity API call.

---

##### `opGetEmailIdentityPolicies`<sup>Required</sup> <a name="opGetEmailIdentityPolicies" id="@cdk_utils/iam.ses.SesOperations.property.opGetEmailIdentityPolicies"></a>

```typescript
public readonly opGetEmailIdentityPolicies: string[];
```

- *Type:* string[]

IAM actions required for the GetEmailIdentityPolicies API call.

---

##### `opGetEmailTemplate`<sup>Required</sup> <a name="opGetEmailTemplate" id="@cdk_utils/iam.ses.SesOperations.property.opGetEmailTemplate"></a>

```typescript
public readonly opGetEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetEmailTemplate API call.

---

##### `opGetExportJob`<sup>Required</sup> <a name="opGetExportJob" id="@cdk_utils/iam.ses.SesOperations.property.opGetExportJob"></a>

```typescript
public readonly opGetExportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetExportJob API call.

---

##### `opGetIdentityDkimAttributes`<sup>Required</sup> <a name="opGetIdentityDkimAttributes" id="@cdk_utils/iam.ses.SesOperations.property.opGetIdentityDkimAttributes"></a>

```typescript
public readonly opGetIdentityDkimAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityDkimAttributes API call.

---

##### `opGetIdentityMailFromDomainAttributes`<sup>Required</sup> <a name="opGetIdentityMailFromDomainAttributes" id="@cdk_utils/iam.ses.SesOperations.property.opGetIdentityMailFromDomainAttributes"></a>

```typescript
public readonly opGetIdentityMailFromDomainAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityMailFromDomainAttributes API call.

---

##### `opGetIdentityNotificationAttributes`<sup>Required</sup> <a name="opGetIdentityNotificationAttributes" id="@cdk_utils/iam.ses.SesOperations.property.opGetIdentityNotificationAttributes"></a>

```typescript
public readonly opGetIdentityNotificationAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityNotificationAttributes API call.

---

##### `opGetIdentityPolicies`<sup>Required</sup> <a name="opGetIdentityPolicies" id="@cdk_utils/iam.ses.SesOperations.property.opGetIdentityPolicies"></a>

```typescript
public readonly opGetIdentityPolicies: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityPolicies API call.

---

##### `opGetIdentityVerificationAttributes`<sup>Required</sup> <a name="opGetIdentityVerificationAttributes" id="@cdk_utils/iam.ses.SesOperations.property.opGetIdentityVerificationAttributes"></a>

```typescript
public readonly opGetIdentityVerificationAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityVerificationAttributes API call.

---

##### `opGetImportJob`<sup>Required</sup> <a name="opGetImportJob" id="@cdk_utils/iam.ses.SesOperations.property.opGetImportJob"></a>

```typescript
public readonly opGetImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetImportJob API call.

---

##### `opGetIngressPoint`<sup>Required</sup> <a name="opGetIngressPoint" id="@cdk_utils/iam.ses.SesOperations.property.opGetIngressPoint"></a>

```typescript
public readonly opGetIngressPoint: string[];
```

- *Type:* string[]

IAM actions required for the GetIngressPoint API call.

---

##### `opGetMemberOfAddressList`<sup>Required</sup> <a name="opGetMemberOfAddressList" id="@cdk_utils/iam.ses.SesOperations.property.opGetMemberOfAddressList"></a>

```typescript
public readonly opGetMemberOfAddressList: string[];
```

- *Type:* string[]

IAM actions required for the GetMemberOfAddressList API call.

---

##### `opGetMessageInsights`<sup>Required</sup> <a name="opGetMessageInsights" id="@cdk_utils/iam.ses.SesOperations.property.opGetMessageInsights"></a>

```typescript
public readonly opGetMessageInsights: string[];
```

- *Type:* string[]

IAM actions required for the GetMessageInsights API call.

---

##### `opGetMultiRegionEndpoint`<sup>Required</sup> <a name="opGetMultiRegionEndpoint" id="@cdk_utils/iam.ses.SesOperations.property.opGetMultiRegionEndpoint"></a>

```typescript
public readonly opGetMultiRegionEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetMultiRegionEndpoint API call.

---

##### `opGetRelay`<sup>Required</sup> <a name="opGetRelay" id="@cdk_utils/iam.ses.SesOperations.property.opGetRelay"></a>

```typescript
public readonly opGetRelay: string[];
```

- *Type:* string[]

IAM actions required for the GetRelay API call.

---

##### `opGetReputationEntity`<sup>Required</sup> <a name="opGetReputationEntity" id="@cdk_utils/iam.ses.SesOperations.property.opGetReputationEntity"></a>

```typescript
public readonly opGetReputationEntity: string[];
```

- *Type:* string[]

IAM actions required for the GetReputationEntity API call.

---

##### `opGetRuleSet`<sup>Required</sup> <a name="opGetRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.opGetRuleSet"></a>

```typescript
public readonly opGetRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the GetRuleSet API call.

---

##### `opGetSendQuota`<sup>Required</sup> <a name="opGetSendQuota" id="@cdk_utils/iam.ses.SesOperations.property.opGetSendQuota"></a>

```typescript
public readonly opGetSendQuota: string[];
```

- *Type:* string[]

IAM actions required for the GetSendQuota API call.

---

##### `opGetSendStatistics`<sup>Required</sup> <a name="opGetSendStatistics" id="@cdk_utils/iam.ses.SesOperations.property.opGetSendStatistics"></a>

```typescript
public readonly opGetSendStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetSendStatistics API call.

---

##### `opGetSuppressedDestination`<sup>Required</sup> <a name="opGetSuppressedDestination" id="@cdk_utils/iam.ses.SesOperations.property.opGetSuppressedDestination"></a>

```typescript
public readonly opGetSuppressedDestination: string[];
```

- *Type:* string[]

IAM actions required for the GetSuppressedDestination API call.

---

##### `opGetTemplate`<sup>Required</sup> <a name="opGetTemplate" id="@cdk_utils/iam.ses.SesOperations.property.opGetTemplate"></a>

```typescript
public readonly opGetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplate API call.

---

##### `opGetTenant`<sup>Required</sup> <a name="opGetTenant" id="@cdk_utils/iam.ses.SesOperations.property.opGetTenant"></a>

```typescript
public readonly opGetTenant: string[];
```

- *Type:* string[]

IAM actions required for the GetTenant API call.

---

##### `opGetTrafficPolicy`<sup>Required</sup> <a name="opGetTrafficPolicy" id="@cdk_utils/iam.ses.SesOperations.property.opGetTrafficPolicy"></a>

```typescript
public readonly opGetTrafficPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetTrafficPolicy API call.

---

##### `opSetActiveReceiptRuleSet`<sup>Required</sup> <a name="opSetActiveReceiptRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.opSetActiveReceiptRuleSet"></a>

```typescript
public readonly opSetActiveReceiptRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the SetActiveReceiptRuleSet API call.

---

##### `opSetIdentityDkimEnabled`<sup>Required</sup> <a name="opSetIdentityDkimEnabled" id="@cdk_utils/iam.ses.SesOperations.property.opSetIdentityDkimEnabled"></a>

```typescript
public readonly opSetIdentityDkimEnabled: string[];
```

- *Type:* string[]

IAM actions required for the SetIdentityDkimEnabled API call.

---

##### `opSetIdentityFeedbackForwardingEnabled`<sup>Required</sup> <a name="opSetIdentityFeedbackForwardingEnabled" id="@cdk_utils/iam.ses.SesOperations.property.opSetIdentityFeedbackForwardingEnabled"></a>

```typescript
public readonly opSetIdentityFeedbackForwardingEnabled: string[];
```

- *Type:* string[]

IAM actions required for the SetIdentityFeedbackForwardingEnabled API call.

---

##### `opSetIdentityHeadersInNotificationsEnabled`<sup>Required</sup> <a name="opSetIdentityHeadersInNotificationsEnabled" id="@cdk_utils/iam.ses.SesOperations.property.opSetIdentityHeadersInNotificationsEnabled"></a>

```typescript
public readonly opSetIdentityHeadersInNotificationsEnabled: string[];
```

- *Type:* string[]

IAM actions required for the SetIdentityHeadersInNotificationsEnabled API call.

---

##### `opSetIdentityMailFromDomain`<sup>Required</sup> <a name="opSetIdentityMailFromDomain" id="@cdk_utils/iam.ses.SesOperations.property.opSetIdentityMailFromDomain"></a>

```typescript
public readonly opSetIdentityMailFromDomain: string[];
```

- *Type:* string[]

IAM actions required for the SetIdentityMailFromDomain API call.

---

##### `opSetIdentityNotificationTopic`<sup>Required</sup> <a name="opSetIdentityNotificationTopic" id="@cdk_utils/iam.ses.SesOperations.property.opSetIdentityNotificationTopic"></a>

```typescript
public readonly opSetIdentityNotificationTopic: string[];
```

- *Type:* string[]

IAM actions required for the SetIdentityNotificationTopic API call.

---

##### `opSetReceiptRulePosition`<sup>Required</sup> <a name="opSetReceiptRulePosition" id="@cdk_utils/iam.ses.SesOperations.property.opSetReceiptRulePosition"></a>

```typescript
public readonly opSetReceiptRulePosition: string[];
```

- *Type:* string[]

IAM actions required for the SetReceiptRulePosition API call.

---

##### `PutAccountDedicatedIpWarmupAttributes`<sup>Required</sup> <a name="PutAccountDedicatedIpWarmupAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutAccountDedicatedIpWarmupAttributes"></a>

```typescript
public readonly PutAccountDedicatedIpWarmupAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountDedicatedIpWarmupAttributes API call.

---

##### `PutAccountDetails`<sup>Required</sup> <a name="PutAccountDetails" id="@cdk_utils/iam.ses.SesOperations.property.PutAccountDetails"></a>

```typescript
public readonly PutAccountDetails: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountDetails API call.

---

##### `PutAccountPricingAttributes`<sup>Required</sup> <a name="PutAccountPricingAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutAccountPricingAttributes"></a>

```typescript
public readonly PutAccountPricingAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountPricingAttributes API call.

---

##### `PutAccountSendingAttributes`<sup>Required</sup> <a name="PutAccountSendingAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutAccountSendingAttributes"></a>

```typescript
public readonly PutAccountSendingAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountSendingAttributes API call.

---

##### `PutAccountSuppressionAttributes`<sup>Required</sup> <a name="PutAccountSuppressionAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutAccountSuppressionAttributes"></a>

```typescript
public readonly PutAccountSuppressionAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountSuppressionAttributes API call.

---

##### `PutAccountVdmAttributes`<sup>Required</sup> <a name="PutAccountVdmAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutAccountVdmAttributes"></a>

```typescript
public readonly PutAccountVdmAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountVdmAttributes API call.

---

##### `PutConfigurationSetArchivingOptions`<sup>Required</sup> <a name="PutConfigurationSetArchivingOptions" id="@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetArchivingOptions"></a>

```typescript
public readonly PutConfigurationSetArchivingOptions: string[];
```

- *Type:* string[]

IAM actions required for the PutConfigurationSetArchivingOptions API call.

---

##### `PutConfigurationSetDeliveryOptions`<sup>Required</sup> <a name="PutConfigurationSetDeliveryOptions" id="@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetDeliveryOptions"></a>

```typescript
public readonly PutConfigurationSetDeliveryOptions: string[];
```

- *Type:* string[]

IAM actions required for the PutConfigurationSetDeliveryOptions API call.

---

##### `PutConfigurationSetReputationOptions`<sup>Required</sup> <a name="PutConfigurationSetReputationOptions" id="@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetReputationOptions"></a>

```typescript
public readonly PutConfigurationSetReputationOptions: string[];
```

- *Type:* string[]

IAM actions required for the PutConfigurationSetReputationOptions API call.

---

##### `PutConfigurationSetSendingOptions`<sup>Required</sup> <a name="PutConfigurationSetSendingOptions" id="@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetSendingOptions"></a>

```typescript
public readonly PutConfigurationSetSendingOptions: string[];
```

- *Type:* string[]

IAM actions required for the PutConfigurationSetSendingOptions API call.

---

##### `PutConfigurationSetSuppressionOptions`<sup>Required</sup> <a name="PutConfigurationSetSuppressionOptions" id="@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetSuppressionOptions"></a>

```typescript
public readonly PutConfigurationSetSuppressionOptions: string[];
```

- *Type:* string[]

IAM actions required for the PutConfigurationSetSuppressionOptions API call.

---

##### `PutConfigurationSetTrackingOptions`<sup>Required</sup> <a name="PutConfigurationSetTrackingOptions" id="@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetTrackingOptions"></a>

```typescript
public readonly PutConfigurationSetTrackingOptions: string[];
```

- *Type:* string[]

IAM actions required for the PutConfigurationSetTrackingOptions API call.

---

##### `PutConfigurationSetVdmOptions`<sup>Required</sup> <a name="PutConfigurationSetVdmOptions" id="@cdk_utils/iam.ses.SesOperations.property.PutConfigurationSetVdmOptions"></a>

```typescript
public readonly PutConfigurationSetVdmOptions: string[];
```

- *Type:* string[]

IAM actions required for the PutConfigurationSetVdmOptions API call.

---

##### `PutDedicatedIpInPool`<sup>Required</sup> <a name="PutDedicatedIpInPool" id="@cdk_utils/iam.ses.SesOperations.property.PutDedicatedIpInPool"></a>

```typescript
public readonly PutDedicatedIpInPool: string[];
```

- *Type:* string[]

IAM actions required for the PutDedicatedIpInPool API call.

---

##### `PutDedicatedIpPoolScalingAttributes`<sup>Required</sup> <a name="PutDedicatedIpPoolScalingAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutDedicatedIpPoolScalingAttributes"></a>

```typescript
public readonly PutDedicatedIpPoolScalingAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutDedicatedIpPoolScalingAttributes API call.

---

##### `PutDedicatedIpWarmupAttributes`<sup>Required</sup> <a name="PutDedicatedIpWarmupAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutDedicatedIpWarmupAttributes"></a>

```typescript
public readonly PutDedicatedIpWarmupAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutDedicatedIpWarmupAttributes API call.

---

##### `PutDeliverabilityDashboardOption`<sup>Required</sup> <a name="PutDeliverabilityDashboardOption" id="@cdk_utils/iam.ses.SesOperations.property.PutDeliverabilityDashboardOption"></a>

```typescript
public readonly PutDeliverabilityDashboardOption: string[];
```

- *Type:* string[]

IAM actions required for the PutDeliverabilityDashboardOption API call.

---

##### `PutEmailIdentityConfigurationSetAttributes`<sup>Required</sup> <a name="PutEmailIdentityConfigurationSetAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutEmailIdentityConfigurationSetAttributes"></a>

```typescript
public readonly PutEmailIdentityConfigurationSetAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutEmailIdentityConfigurationSetAttributes API call.

---

##### `PutEmailIdentityDkimAttributes`<sup>Required</sup> <a name="PutEmailIdentityDkimAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutEmailIdentityDkimAttributes"></a>

```typescript
public readonly PutEmailIdentityDkimAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutEmailIdentityDkimAttributes API call.

---

##### `PutEmailIdentityDkimSigningAttributes`<sup>Required</sup> <a name="PutEmailIdentityDkimSigningAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutEmailIdentityDkimSigningAttributes"></a>

```typescript
public readonly PutEmailIdentityDkimSigningAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutEmailIdentityDkimSigningAttributes API call.

---

##### `PutEmailIdentityFeedbackAttributes`<sup>Required</sup> <a name="PutEmailIdentityFeedbackAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutEmailIdentityFeedbackAttributes"></a>

```typescript
public readonly PutEmailIdentityFeedbackAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutEmailIdentityFeedbackAttributes API call.

---

##### `PutEmailIdentityMailFromAttributes`<sup>Required</sup> <a name="PutEmailIdentityMailFromAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutEmailIdentityMailFromAttributes"></a>

```typescript
public readonly PutEmailIdentityMailFromAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutEmailIdentityMailFromAttributes API call.

---

##### `PutIdentityPolicy`<sup>Required</sup> <a name="PutIdentityPolicy" id="@cdk_utils/iam.ses.SesOperations.property.PutIdentityPolicy"></a>

```typescript
public readonly PutIdentityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutIdentityPolicy API call.

---

##### `PutSuppressedDestination`<sup>Required</sup> <a name="PutSuppressedDestination" id="@cdk_utils/iam.ses.SesOperations.property.PutSuppressedDestination"></a>

```typescript
public readonly PutSuppressedDestination: string[];
```

- *Type:* string[]

IAM actions required for the PutSuppressedDestination API call.

---

##### `PutTenantSuppressionAttributes`<sup>Required</sup> <a name="PutTenantSuppressionAttributes" id="@cdk_utils/iam.ses.SesOperations.property.PutTenantSuppressionAttributes"></a>

```typescript
public readonly PutTenantSuppressionAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutTenantSuppressionAttributes API call.

---

##### `RegisterMemberToAddressList`<sup>Required</sup> <a name="RegisterMemberToAddressList" id="@cdk_utils/iam.ses.SesOperations.property.RegisterMemberToAddressList"></a>

```typescript
public readonly RegisterMemberToAddressList: string[];
```

- *Type:* string[]

IAM actions required for the RegisterMemberToAddressList API call.

---

##### `ReorderReceiptRuleSet`<sup>Required</sup> <a name="ReorderReceiptRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.ReorderReceiptRuleSet"></a>

```typescript
public readonly ReorderReceiptRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the ReorderReceiptRuleSet API call.

---

##### `SendBounce`<sup>Required</sup> <a name="SendBounce" id="@cdk_utils/iam.ses.SesOperations.property.SendBounce"></a>

```typescript
public readonly SendBounce: string[];
```

- *Type:* string[]

IAM actions required for the SendBounce API call.

---

##### `SendBulkEmail`<sup>Required</sup> <a name="SendBulkEmail" id="@cdk_utils/iam.ses.SesOperations.property.SendBulkEmail"></a>

```typescript
public readonly SendBulkEmail: string[];
```

- *Type:* string[]

IAM actions required for the SendBulkEmail API call.

---

##### `SendBulkTemplatedEmail`<sup>Required</sup> <a name="SendBulkTemplatedEmail" id="@cdk_utils/iam.ses.SesOperations.property.SendBulkTemplatedEmail"></a>

```typescript
public readonly SendBulkTemplatedEmail: string[];
```

- *Type:* string[]

IAM actions required for the SendBulkTemplatedEmail API call.

---

##### `SendCustomVerificationEmail`<sup>Required</sup> <a name="SendCustomVerificationEmail" id="@cdk_utils/iam.ses.SesOperations.property.SendCustomVerificationEmail"></a>

```typescript
public readonly SendCustomVerificationEmail: string[];
```

- *Type:* string[]

IAM actions required for the SendCustomVerificationEmail API call.

---

##### `SendEmail`<sup>Required</sup> <a name="SendEmail" id="@cdk_utils/iam.ses.SesOperations.property.SendEmail"></a>

```typescript
public readonly SendEmail: string[];
```

- *Type:* string[]

IAM actions required for the SendEmail API call.

---

##### `SendRawEmail`<sup>Required</sup> <a name="SendRawEmail" id="@cdk_utils/iam.ses.SesOperations.property.SendRawEmail"></a>

```typescript
public readonly SendRawEmail: string[];
```

- *Type:* string[]

IAM actions required for the SendRawEmail API call.

---

##### `SendTemplatedEmail`<sup>Required</sup> <a name="SendTemplatedEmail" id="@cdk_utils/iam.ses.SesOperations.property.SendTemplatedEmail"></a>

```typescript
public readonly SendTemplatedEmail: string[];
```

- *Type:* string[]

IAM actions required for the SendTemplatedEmail API call.

---

##### `StartAddressListImportJob`<sup>Required</sup> <a name="StartAddressListImportJob" id="@cdk_utils/iam.ses.SesOperations.property.StartAddressListImportJob"></a>

```typescript
public readonly StartAddressListImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartAddressListImportJob API call.

---

##### `StartArchiveExport`<sup>Required</sup> <a name="StartArchiveExport" id="@cdk_utils/iam.ses.SesOperations.property.StartArchiveExport"></a>

```typescript
public readonly StartArchiveExport: string[];
```

- *Type:* string[]

IAM actions required for the StartArchiveExport API call.

---

##### `StartArchiveSearch`<sup>Required</sup> <a name="StartArchiveSearch" id="@cdk_utils/iam.ses.SesOperations.property.StartArchiveSearch"></a>

```typescript
public readonly StartArchiveSearch: string[];
```

- *Type:* string[]

IAM actions required for the StartArchiveSearch API call.

---

##### `StopAddressListImportJob`<sup>Required</sup> <a name="StopAddressListImportJob" id="@cdk_utils/iam.ses.SesOperations.property.StopAddressListImportJob"></a>

```typescript
public readonly StopAddressListImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StopAddressListImportJob API call.

---

##### `StopArchiveExport`<sup>Required</sup> <a name="StopArchiveExport" id="@cdk_utils/iam.ses.SesOperations.property.StopArchiveExport"></a>

```typescript
public readonly StopArchiveExport: string[];
```

- *Type:* string[]

IAM actions required for the StopArchiveExport API call.

---

##### `StopArchiveSearch`<sup>Required</sup> <a name="StopArchiveSearch" id="@cdk_utils/iam.ses.SesOperations.property.StopArchiveSearch"></a>

```typescript
public readonly StopArchiveSearch: string[];
```

- *Type:* string[]

IAM actions required for the StopArchiveSearch API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ses.SesOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestRenderEmailTemplate`<sup>Required</sup> <a name="TestRenderEmailTemplate" id="@cdk_utils/iam.ses.SesOperations.property.TestRenderEmailTemplate"></a>

```typescript
public readonly TestRenderEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the TestRenderEmailTemplate API call.

---

##### `TestRenderTemplate`<sup>Required</sup> <a name="TestRenderTemplate" id="@cdk_utils/iam.ses.SesOperations.property.TestRenderTemplate"></a>

```typescript
public readonly TestRenderTemplate: string[];
```

- *Type:* string[]

IAM actions required for the TestRenderTemplate API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ses.SesOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountSendingEnabled`<sup>Required</sup> <a name="UpdateAccountSendingEnabled" id="@cdk_utils/iam.ses.SesOperations.property.UpdateAccountSendingEnabled"></a>

```typescript
public readonly UpdateAccountSendingEnabled: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountSendingEnabled API call.

---

##### `UpdateArchive`<sup>Required</sup> <a name="UpdateArchive" id="@cdk_utils/iam.ses.SesOperations.property.UpdateArchive"></a>

```typescript
public readonly UpdateArchive: string[];
```

- *Type:* string[]

IAM actions required for the UpdateArchive API call.

---

##### `UpdateConfigurationSet`<sup>Required</sup> <a name="UpdateConfigurationSet" id="@cdk_utils/iam.ses.SesOperations.property.UpdateConfigurationSet"></a>

```typescript
public readonly UpdateConfigurationSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationSet API call.

---

##### `UpdateConfigurationSetEventDestination`<sup>Required</sup> <a name="UpdateConfigurationSetEventDestination" id="@cdk_utils/iam.ses.SesOperations.property.UpdateConfigurationSetEventDestination"></a>

```typescript
public readonly UpdateConfigurationSetEventDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationSetEventDestination API call.

---

##### `UpdateConfigurationSetReputationMetricsEnabled`<sup>Required</sup> <a name="UpdateConfigurationSetReputationMetricsEnabled" id="@cdk_utils/iam.ses.SesOperations.property.UpdateConfigurationSetReputationMetricsEnabled"></a>

```typescript
public readonly UpdateConfigurationSetReputationMetricsEnabled: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationSetReputationMetricsEnabled API call.

---

##### `UpdateConfigurationSetSendingEnabled`<sup>Required</sup> <a name="UpdateConfigurationSetSendingEnabled" id="@cdk_utils/iam.ses.SesOperations.property.UpdateConfigurationSetSendingEnabled"></a>

```typescript
public readonly UpdateConfigurationSetSendingEnabled: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationSetSendingEnabled API call.

---

##### `UpdateConfigurationSetTrackingOptions`<sup>Required</sup> <a name="UpdateConfigurationSetTrackingOptions" id="@cdk_utils/iam.ses.SesOperations.property.UpdateConfigurationSetTrackingOptions"></a>

```typescript
public readonly UpdateConfigurationSetTrackingOptions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationSetTrackingOptions API call.

---

##### `UpdateContact`<sup>Required</sup> <a name="UpdateContact" id="@cdk_utils/iam.ses.SesOperations.property.UpdateContact"></a>

```typescript
public readonly UpdateContact: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContact API call.

---

##### `UpdateContactList`<sup>Required</sup> <a name="UpdateContactList" id="@cdk_utils/iam.ses.SesOperations.property.UpdateContactList"></a>

```typescript
public readonly UpdateContactList: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactList API call.

---

##### `UpdateCustomVerificationEmailTemplate`<sup>Required</sup> <a name="UpdateCustomVerificationEmailTemplate" id="@cdk_utils/iam.ses.SesOperations.property.UpdateCustomVerificationEmailTemplate"></a>

```typescript
public readonly UpdateCustomVerificationEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomVerificationEmailTemplate API call.

---

##### `UpdateEmailIdentityPolicy`<sup>Required</sup> <a name="UpdateEmailIdentityPolicy" id="@cdk_utils/iam.ses.SesOperations.property.UpdateEmailIdentityPolicy"></a>

```typescript
public readonly UpdateEmailIdentityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEmailIdentityPolicy API call.

---

##### `UpdateEmailTemplate`<sup>Required</sup> <a name="UpdateEmailTemplate" id="@cdk_utils/iam.ses.SesOperations.property.UpdateEmailTemplate"></a>

```typescript
public readonly UpdateEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEmailTemplate API call.

---

##### `UpdateIngressPoint`<sup>Required</sup> <a name="UpdateIngressPoint" id="@cdk_utils/iam.ses.SesOperations.property.UpdateIngressPoint"></a>

```typescript
public readonly UpdateIngressPoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIngressPoint API call.

---

##### `UpdateReceiptRule`<sup>Required</sup> <a name="UpdateReceiptRule" id="@cdk_utils/iam.ses.SesOperations.property.UpdateReceiptRule"></a>

```typescript
public readonly UpdateReceiptRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReceiptRule API call.

---

##### `UpdateRelay`<sup>Required</sup> <a name="UpdateRelay" id="@cdk_utils/iam.ses.SesOperations.property.UpdateRelay"></a>

```typescript
public readonly UpdateRelay: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRelay API call.

---

##### `UpdateReputationEntityCustomerManagedStatus`<sup>Required</sup> <a name="UpdateReputationEntityCustomerManagedStatus" id="@cdk_utils/iam.ses.SesOperations.property.UpdateReputationEntityCustomerManagedStatus"></a>

```typescript
public readonly UpdateReputationEntityCustomerManagedStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReputationEntityCustomerManagedStatus API call.

---

##### `UpdateReputationEntityPolicy`<sup>Required</sup> <a name="UpdateReputationEntityPolicy" id="@cdk_utils/iam.ses.SesOperations.property.UpdateReputationEntityPolicy"></a>

```typescript
public readonly UpdateReputationEntityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReputationEntityPolicy API call.

---

##### `UpdateRuleSet`<sup>Required</sup> <a name="UpdateRuleSet" id="@cdk_utils/iam.ses.SesOperations.property.UpdateRuleSet"></a>

```typescript
public readonly UpdateRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRuleSet API call.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.ses.SesOperations.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplate API call.

---

##### `UpdateTrafficPolicy`<sup>Required</sup> <a name="UpdateTrafficPolicy" id="@cdk_utils/iam.ses.SesOperations.property.UpdateTrafficPolicy"></a>

```typescript
public readonly UpdateTrafficPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrafficPolicy API call.

---

##### `VerifyDomainDkim`<sup>Required</sup> <a name="VerifyDomainDkim" id="@cdk_utils/iam.ses.SesOperations.property.VerifyDomainDkim"></a>

```typescript
public readonly VerifyDomainDkim: string[];
```

- *Type:* string[]

IAM actions required for the VerifyDomainDkim API call.

---

##### `VerifyDomainIdentity`<sup>Required</sup> <a name="VerifyDomainIdentity" id="@cdk_utils/iam.ses.SesOperations.property.VerifyDomainIdentity"></a>

```typescript
public readonly VerifyDomainIdentity: string[];
```

- *Type:* string[]

IAM actions required for the VerifyDomainIdentity API call.

---

##### `VerifyEmailAddress`<sup>Required</sup> <a name="VerifyEmailAddress" id="@cdk_utils/iam.ses.SesOperations.property.VerifyEmailAddress"></a>

```typescript
public readonly VerifyEmailAddress: string[];
```

- *Type:* string[]

IAM actions required for the VerifyEmailAddress API call.

---

##### `VerifyEmailIdentity`<sup>Required</sup> <a name="VerifyEmailIdentity" id="@cdk_utils/iam.ses.SesOperations.property.VerifyEmailIdentity"></a>

```typescript
public readonly VerifyEmailIdentity: string[];
```

- *Type:* string[]

IAM actions required for the VerifyEmailIdentity API call.

---

### SesResources <a name="SesResources" id="@cdk_utils/iam.ses.SesResources"></a>

ARN builders, validators, and parsers for ses resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ses.SesResources.Initializer"></a>

```typescript
import { ses } from '@cdk_utils/iam'

new ses.SesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ses.SesResources.addonInstance">addonInstance</a></code> | Builds an ARN for the addon-instance resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.addonSubscription">addonSubscription</a></code> | Builds an ARN for the addon-subscription resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.configurationSet">configurationSet</a></code> | Builds an ARN for the configuration-set resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.contactList">contactList</a></code> | Builds an ARN for the contact-list resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.customVerificationEmailTemplate">customVerificationEmailTemplate</a></code> | Builds an ARN for the custom-verification-email-template resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.dedicatedIPPool">dedicatedIPPool</a></code> | Builds an ARN for the dedicated-ip-pool resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.deliverabilityTestReport">deliverabilityTestReport</a></code> | Builds an ARN for the deliverability-test-report resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.exportJob">exportJob</a></code> | Builds an ARN for the export-job resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.identity">identity</a></code> | Builds an ARN for the identity resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.importJob">importJob</a></code> | Builds an ARN for the import-job resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidAddonInstanceArn">isValidAddonInstanceArn</a></code> | Validates whether a string is a valid ARN for the addon-instance resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidAddonSubscriptionArn">isValidAddonSubscriptionArn</a></code> | Validates whether a string is a valid ARN for the addon-subscription resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidConfigurationSetArn">isValidConfigurationSetArn</a></code> | Validates whether a string is a valid ARN for the configuration-set resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidContactListArn">isValidContactListArn</a></code> | Validates whether a string is a valid ARN for the contact-list resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidCustomVerificationEmailTemplateArn">isValidCustomVerificationEmailTemplateArn</a></code> | Validates whether a string is a valid ARN for the custom-verification-email-template resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidDedicatedIPPoolArn">isValidDedicatedIPPoolArn</a></code> | Validates whether a string is a valid ARN for the dedicated-ip-pool resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidDeliverabilityTestReportArn">isValidDeliverabilityTestReportArn</a></code> | Validates whether a string is a valid ARN for the deliverability-test-report resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidExportJobArn">isValidExportJobArn</a></code> | Validates whether a string is a valid ARN for the export-job resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidIdentityArn">isValidIdentityArn</a></code> | Validates whether a string is a valid ARN for the identity resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidImportJobArn">isValidImportJobArn</a></code> | Validates whether a string is a valid ARN for the import-job resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidMailmanagerAddressListArn">isValidMailmanagerAddressListArn</a></code> | Validates whether a string is a valid ARN for the mailmanager-address-list resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidMailmanagerArchiveArn">isValidMailmanagerArchiveArn</a></code> | Validates whether a string is a valid ARN for the mailmanager-archive resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidMailmanagerIngressPointArn">isValidMailmanagerIngressPointArn</a></code> | Validates whether a string is a valid ARN for the mailmanager-ingress-point resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidMailmanagerRuleSetArn">isValidMailmanagerRuleSetArn</a></code> | Validates whether a string is a valid ARN for the mailmanager-rule-set resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidMailmanagerSmtpRelayArn">isValidMailmanagerSmtpRelayArn</a></code> | Validates whether a string is a valid ARN for the mailmanager-smtp-relay resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidMailmanagerTrafficPolicyArn">isValidMailmanagerTrafficPolicyArn</a></code> | Validates whether a string is a valid ARN for the mailmanager-traffic-policy resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidMultiRegionEndpointArn">isValidMultiRegionEndpointArn</a></code> | Validates whether a string is a valid ARN for the multi-region-endpoint resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidReputationPolicyArn">isValidReputationPolicyArn</a></code> | Validates whether a string is a valid ARN for the reputation-policy resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidTemplateArn">isValidTemplateArn</a></code> | Validates whether a string is a valid ARN for the template resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.isValidTenantArn">isValidTenantArn</a></code> | Validates whether a string is a valid ARN for the tenant resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.mailmanagerAddressList">mailmanagerAddressList</a></code> | Builds an ARN for the mailmanager-address-list resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.mailmanagerArchive">mailmanagerArchive</a></code> | Builds an ARN for the mailmanager-archive resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.mailmanagerIngressPoint">mailmanagerIngressPoint</a></code> | Builds an ARN for the mailmanager-ingress-point resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.mailmanagerRuleSet">mailmanagerRuleSet</a></code> | Builds an ARN for the mailmanager-rule-set resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.mailmanagerSmtpRelay">mailmanagerSmtpRelay</a></code> | Builds an ARN for the mailmanager-smtp-relay resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.mailmanagerTrafficPolicy">mailmanagerTrafficPolicy</a></code> | Builds an ARN for the mailmanager-traffic-policy resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.multiRegionEndpoint">multiRegionEndpoint</a></code> | Builds an ARN for the multi-region-endpoint resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseAddonInstanceArn">parseAddonInstanceArn</a></code> | Parses a addon-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseAddonSubscriptionArn">parseAddonSubscriptionArn</a></code> | Parses a addon-subscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseConfigurationSetArn">parseConfigurationSetArn</a></code> | Parses a configuration-set ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseContactListArn">parseContactListArn</a></code> | Parses a contact-list ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseCustomVerificationEmailTemplateArn">parseCustomVerificationEmailTemplateArn</a></code> | Parses a custom-verification-email-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseDedicatedIPPoolArn">parseDedicatedIPPoolArn</a></code> | Parses a dedicated-ip-pool ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseDeliverabilityTestReportArn">parseDeliverabilityTestReportArn</a></code> | Parses a deliverability-test-report ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseExportJobArn">parseExportJobArn</a></code> | Parses a export-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseIdentityArn">parseIdentityArn</a></code> | Parses a identity ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseImportJobArn">parseImportJobArn</a></code> | Parses a import-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseMailmanagerAddressListArn">parseMailmanagerAddressListArn</a></code> | Parses a mailmanager-address-list ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseMailmanagerArchiveArn">parseMailmanagerArchiveArn</a></code> | Parses a mailmanager-archive ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseMailmanagerIngressPointArn">parseMailmanagerIngressPointArn</a></code> | Parses a mailmanager-ingress-point ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseMailmanagerRuleSetArn">parseMailmanagerRuleSetArn</a></code> | Parses a mailmanager-rule-set ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseMailmanagerSmtpRelayArn">parseMailmanagerSmtpRelayArn</a></code> | Parses a mailmanager-smtp-relay ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseMailmanagerTrafficPolicyArn">parseMailmanagerTrafficPolicyArn</a></code> | Parses a mailmanager-traffic-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseMultiRegionEndpointArn">parseMultiRegionEndpointArn</a></code> | Parses a multi-region-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseReputationPolicyArn">parseReputationPolicyArn</a></code> | Parses a reputation-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseTemplateArn">parseTemplateArn</a></code> | Parses a template ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.parseTenantArn">parseTenantArn</a></code> | Parses a tenant ARN into its components. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.reputationPolicy">reputationPolicy</a></code> | Builds an ARN for the reputation-policy resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.template">template</a></code> | Builds an ARN for the template resource. |
| <code><a href="#@cdk_utils/iam.ses.SesResources.tenant">tenant</a></code> | Builds an ARN for the tenant resource. |

---

##### `addonInstance` <a name="addonInstance" id="@cdk_utils/iam.ses.SesResources.addonInstance"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.addonInstance(props: SesAddonInstanceArnProps)
```

Builds an ARN for the addon-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.addonInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesAddonInstanceArnProps">SesAddonInstanceArnProps</a>

---

##### `addonSubscription` <a name="addonSubscription" id="@cdk_utils/iam.ses.SesResources.addonSubscription"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.addonSubscription(props: SesAddonSubscriptionArnProps)
```

Builds an ARN for the addon-subscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.addonSubscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesAddonSubscriptionArnProps">SesAddonSubscriptionArnProps</a>

---

##### `configurationSet` <a name="configurationSet" id="@cdk_utils/iam.ses.SesResources.configurationSet"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.configurationSet(props: SesConfigurationSetArnProps)
```

Builds an ARN for the configuration-set resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.configurationSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesConfigurationSetArnProps">SesConfigurationSetArnProps</a>

---

##### `contactList` <a name="contactList" id="@cdk_utils/iam.ses.SesResources.contactList"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.contactList(props: SesContactListArnProps)
```

Builds an ARN for the contact-list resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.contactList.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesContactListArnProps">SesContactListArnProps</a>

---

##### `customVerificationEmailTemplate` <a name="customVerificationEmailTemplate" id="@cdk_utils/iam.ses.SesResources.customVerificationEmailTemplate"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.customVerificationEmailTemplate(props: SesCustomVerificationEmailTemplateArnProps)
```

Builds an ARN for the custom-verification-email-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.customVerificationEmailTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesCustomVerificationEmailTemplateArnProps">SesCustomVerificationEmailTemplateArnProps</a>

---

##### `dedicatedIPPool` <a name="dedicatedIPPool" id="@cdk_utils/iam.ses.SesResources.dedicatedIPPool"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.dedicatedIPPool(props: SesDedicatedIPPoolArnProps)
```

Builds an ARN for the dedicated-ip-pool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.dedicatedIPPool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesDedicatedIPPoolArnProps">SesDedicatedIPPoolArnProps</a>

---

##### `deliverabilityTestReport` <a name="deliverabilityTestReport" id="@cdk_utils/iam.ses.SesResources.deliverabilityTestReport"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.deliverabilityTestReport(props: SesDeliverabilityTestReportArnProps)
```

Builds an ARN for the deliverability-test-report resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.deliverabilityTestReport.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesDeliverabilityTestReportArnProps">SesDeliverabilityTestReportArnProps</a>

---

##### `exportJob` <a name="exportJob" id="@cdk_utils/iam.ses.SesResources.exportJob"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.exportJob(props: SesExportJobArnProps)
```

Builds an ARN for the export-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.exportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesExportJobArnProps">SesExportJobArnProps</a>

---

##### `identity` <a name="identity" id="@cdk_utils/iam.ses.SesResources.identity"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.identity(props: SesIdentityArnProps)
```

Builds an ARN for the identity resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.identity.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesIdentityArnProps">SesIdentityArnProps</a>

---

##### `importJob` <a name="importJob" id="@cdk_utils/iam.ses.SesResources.importJob"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.importJob(props: SesImportJobArnProps)
```

Builds an ARN for the import-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.importJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesImportJobArnProps">SesImportJobArnProps</a>

---

##### `isValidAddonInstanceArn` <a name="isValidAddonInstanceArn" id="@cdk_utils/iam.ses.SesResources.isValidAddonInstanceArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidAddonInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the addon-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidAddonInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAddonSubscriptionArn` <a name="isValidAddonSubscriptionArn" id="@cdk_utils/iam.ses.SesResources.isValidAddonSubscriptionArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidAddonSubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the addon-subscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidAddonSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationSetArn` <a name="isValidConfigurationSetArn" id="@cdk_utils/iam.ses.SesResources.isValidConfigurationSetArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidConfigurationSetArn(arn: string)
```

Validates whether a string is a valid ARN for the configuration-set resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidConfigurationSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContactListArn` <a name="isValidContactListArn" id="@cdk_utils/iam.ses.SesResources.isValidContactListArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidContactListArn(arn: string)
```

Validates whether a string is a valid ARN for the contact-list resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidContactListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomVerificationEmailTemplateArn` <a name="isValidCustomVerificationEmailTemplateArn" id="@cdk_utils/iam.ses.SesResources.isValidCustomVerificationEmailTemplateArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidCustomVerificationEmailTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the custom-verification-email-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidCustomVerificationEmailTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDedicatedIPPoolArn` <a name="isValidDedicatedIPPoolArn" id="@cdk_utils/iam.ses.SesResources.isValidDedicatedIPPoolArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidDedicatedIPPoolArn(arn: string)
```

Validates whether a string is a valid ARN for the dedicated-ip-pool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidDedicatedIPPoolArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeliverabilityTestReportArn` <a name="isValidDeliverabilityTestReportArn" id="@cdk_utils/iam.ses.SesResources.isValidDeliverabilityTestReportArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidDeliverabilityTestReportArn(arn: string)
```

Validates whether a string is a valid ARN for the deliverability-test-report resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidDeliverabilityTestReportArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExportJobArn` <a name="isValidExportJobArn" id="@cdk_utils/iam.ses.SesResources.isValidExportJobArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidExportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the export-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdentityArn` <a name="isValidIdentityArn" id="@cdk_utils/iam.ses.SesResources.isValidIdentityArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidIdentityArn(arn: string)
```

Validates whether a string is a valid ARN for the identity resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidIdentityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImportJobArn` <a name="isValidImportJobArn" id="@cdk_utils/iam.ses.SesResources.isValidImportJobArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidImportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the import-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMailmanagerAddressListArn` <a name="isValidMailmanagerAddressListArn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerAddressListArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidMailmanagerAddressListArn(arn: string)
```

Validates whether a string is a valid ARN for the mailmanager-address-list resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerAddressListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMailmanagerArchiveArn` <a name="isValidMailmanagerArchiveArn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerArchiveArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidMailmanagerArchiveArn(arn: string)
```

Validates whether a string is a valid ARN for the mailmanager-archive resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerArchiveArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMailmanagerIngressPointArn` <a name="isValidMailmanagerIngressPointArn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerIngressPointArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidMailmanagerIngressPointArn(arn: string)
```

Validates whether a string is a valid ARN for the mailmanager-ingress-point resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerIngressPointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMailmanagerRuleSetArn` <a name="isValidMailmanagerRuleSetArn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerRuleSetArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidMailmanagerRuleSetArn(arn: string)
```

Validates whether a string is a valid ARN for the mailmanager-rule-set resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerRuleSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMailmanagerSmtpRelayArn` <a name="isValidMailmanagerSmtpRelayArn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerSmtpRelayArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidMailmanagerSmtpRelayArn(arn: string)
```

Validates whether a string is a valid ARN for the mailmanager-smtp-relay resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerSmtpRelayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMailmanagerTrafficPolicyArn` <a name="isValidMailmanagerTrafficPolicyArn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerTrafficPolicyArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidMailmanagerTrafficPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the mailmanager-traffic-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidMailmanagerTrafficPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMultiRegionEndpointArn` <a name="isValidMultiRegionEndpointArn" id="@cdk_utils/iam.ses.SesResources.isValidMultiRegionEndpointArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidMultiRegionEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the multi-region-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidMultiRegionEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReputationPolicyArn` <a name="isValidReputationPolicyArn" id="@cdk_utils/iam.ses.SesResources.isValidReputationPolicyArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidReputationPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the reputation-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidReputationPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTemplateArn` <a name="isValidTemplateArn" id="@cdk_utils/iam.ses.SesResources.isValidTemplateArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTenantArn` <a name="isValidTenantArn" id="@cdk_utils/iam.ses.SesResources.isValidTenantArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.isValidTenantArn(arn: string)
```

Validates whether a string is a valid ARN for the tenant resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.isValidTenantArn.parameter.arn"></a>

- *Type:* string

---

##### `mailmanagerAddressList` <a name="mailmanagerAddressList" id="@cdk_utils/iam.ses.SesResources.mailmanagerAddressList"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.mailmanagerAddressList(props: SesMailmanagerAddressListArnProps)
```

Builds an ARN for the mailmanager-address-list resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.mailmanagerAddressList.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesMailmanagerAddressListArnProps">SesMailmanagerAddressListArnProps</a>

---

##### `mailmanagerArchive` <a name="mailmanagerArchive" id="@cdk_utils/iam.ses.SesResources.mailmanagerArchive"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.mailmanagerArchive(props: SesMailmanagerArchiveArnProps)
```

Builds an ARN for the mailmanager-archive resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.mailmanagerArchive.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesMailmanagerArchiveArnProps">SesMailmanagerArchiveArnProps</a>

---

##### `mailmanagerIngressPoint` <a name="mailmanagerIngressPoint" id="@cdk_utils/iam.ses.SesResources.mailmanagerIngressPoint"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.mailmanagerIngressPoint(props: SesMailmanagerIngressPointArnProps)
```

Builds an ARN for the mailmanager-ingress-point resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.mailmanagerIngressPoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesMailmanagerIngressPointArnProps">SesMailmanagerIngressPointArnProps</a>

---

##### `mailmanagerRuleSet` <a name="mailmanagerRuleSet" id="@cdk_utils/iam.ses.SesResources.mailmanagerRuleSet"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.mailmanagerRuleSet(props: SesMailmanagerRuleSetArnProps)
```

Builds an ARN for the mailmanager-rule-set resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.mailmanagerRuleSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesMailmanagerRuleSetArnProps">SesMailmanagerRuleSetArnProps</a>

---

##### `mailmanagerSmtpRelay` <a name="mailmanagerSmtpRelay" id="@cdk_utils/iam.ses.SesResources.mailmanagerSmtpRelay"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.mailmanagerSmtpRelay(props: SesMailmanagerSmtpRelayArnProps)
```

Builds an ARN for the mailmanager-smtp-relay resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.mailmanagerSmtpRelay.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesMailmanagerSmtpRelayArnProps">SesMailmanagerSmtpRelayArnProps</a>

---

##### `mailmanagerTrafficPolicy` <a name="mailmanagerTrafficPolicy" id="@cdk_utils/iam.ses.SesResources.mailmanagerTrafficPolicy"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.mailmanagerTrafficPolicy(props: SesMailmanagerTrafficPolicyArnProps)
```

Builds an ARN for the mailmanager-traffic-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.mailmanagerTrafficPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesMailmanagerTrafficPolicyArnProps">SesMailmanagerTrafficPolicyArnProps</a>

---

##### `multiRegionEndpoint` <a name="multiRegionEndpoint" id="@cdk_utils/iam.ses.SesResources.multiRegionEndpoint"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.multiRegionEndpoint(props: SesMultiRegionEndpointArnProps)
```

Builds an ARN for the multi-region-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.multiRegionEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesMultiRegionEndpointArnProps">SesMultiRegionEndpointArnProps</a>

---

##### `parseAddonInstanceArn` <a name="parseAddonInstanceArn" id="@cdk_utils/iam.ses.SesResources.parseAddonInstanceArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseAddonInstanceArn(arn: string)
```

Parses a addon-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseAddonInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAddonSubscriptionArn` <a name="parseAddonSubscriptionArn" id="@cdk_utils/iam.ses.SesResources.parseAddonSubscriptionArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseAddonSubscriptionArn(arn: string)
```

Parses a addon-subscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseAddonSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationSetArn` <a name="parseConfigurationSetArn" id="@cdk_utils/iam.ses.SesResources.parseConfigurationSetArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseConfigurationSetArn(arn: string)
```

Parses a configuration-set ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseConfigurationSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContactListArn` <a name="parseContactListArn" id="@cdk_utils/iam.ses.SesResources.parseContactListArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseContactListArn(arn: string)
```

Parses a contact-list ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseContactListArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomVerificationEmailTemplateArn` <a name="parseCustomVerificationEmailTemplateArn" id="@cdk_utils/iam.ses.SesResources.parseCustomVerificationEmailTemplateArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseCustomVerificationEmailTemplateArn(arn: string)
```

Parses a custom-verification-email-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseCustomVerificationEmailTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDedicatedIPPoolArn` <a name="parseDedicatedIPPoolArn" id="@cdk_utils/iam.ses.SesResources.parseDedicatedIPPoolArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseDedicatedIPPoolArn(arn: string)
```

Parses a dedicated-ip-pool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseDedicatedIPPoolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeliverabilityTestReportArn` <a name="parseDeliverabilityTestReportArn" id="@cdk_utils/iam.ses.SesResources.parseDeliverabilityTestReportArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseDeliverabilityTestReportArn(arn: string)
```

Parses a deliverability-test-report ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseDeliverabilityTestReportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExportJobArn` <a name="parseExportJobArn" id="@cdk_utils/iam.ses.SesResources.parseExportJobArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseExportJobArn(arn: string)
```

Parses a export-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdentityArn` <a name="parseIdentityArn" id="@cdk_utils/iam.ses.SesResources.parseIdentityArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseIdentityArn(arn: string)
```

Parses a identity ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseIdentityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImportJobArn` <a name="parseImportJobArn" id="@cdk_utils/iam.ses.SesResources.parseImportJobArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseImportJobArn(arn: string)
```

Parses a import-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMailmanagerAddressListArn` <a name="parseMailmanagerAddressListArn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerAddressListArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseMailmanagerAddressListArn(arn: string)
```

Parses a mailmanager-address-list ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerAddressListArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMailmanagerArchiveArn` <a name="parseMailmanagerArchiveArn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerArchiveArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseMailmanagerArchiveArn(arn: string)
```

Parses a mailmanager-archive ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerArchiveArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMailmanagerIngressPointArn` <a name="parseMailmanagerIngressPointArn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerIngressPointArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseMailmanagerIngressPointArn(arn: string)
```

Parses a mailmanager-ingress-point ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerIngressPointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMailmanagerRuleSetArn` <a name="parseMailmanagerRuleSetArn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerRuleSetArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseMailmanagerRuleSetArn(arn: string)
```

Parses a mailmanager-rule-set ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerRuleSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMailmanagerSmtpRelayArn` <a name="parseMailmanagerSmtpRelayArn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerSmtpRelayArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseMailmanagerSmtpRelayArn(arn: string)
```

Parses a mailmanager-smtp-relay ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerSmtpRelayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMailmanagerTrafficPolicyArn` <a name="parseMailmanagerTrafficPolicyArn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerTrafficPolicyArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseMailmanagerTrafficPolicyArn(arn: string)
```

Parses a mailmanager-traffic-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseMailmanagerTrafficPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMultiRegionEndpointArn` <a name="parseMultiRegionEndpointArn" id="@cdk_utils/iam.ses.SesResources.parseMultiRegionEndpointArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseMultiRegionEndpointArn(arn: string)
```

Parses a multi-region-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseMultiRegionEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReputationPolicyArn` <a name="parseReputationPolicyArn" id="@cdk_utils/iam.ses.SesResources.parseReputationPolicyArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseReputationPolicyArn(arn: string)
```

Parses a reputation-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseReputationPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTemplateArn` <a name="parseTemplateArn" id="@cdk_utils/iam.ses.SesResources.parseTemplateArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseTemplateArn(arn: string)
```

Parses a template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTenantArn` <a name="parseTenantArn" id="@cdk_utils/iam.ses.SesResources.parseTenantArn"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.parseTenantArn(arn: string)
```

Parses a tenant ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ses.SesResources.parseTenantArn.parameter.arn"></a>

- *Type:* string

---

##### `reputationPolicy` <a name="reputationPolicy" id="@cdk_utils/iam.ses.SesResources.reputationPolicy"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.reputationPolicy(props: SesReputationPolicyArnProps)
```

Builds an ARN for the reputation-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.reputationPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesReputationPolicyArnProps">SesReputationPolicyArnProps</a>

---

##### `template` <a name="template" id="@cdk_utils/iam.ses.SesResources.template"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.template(props: SesTemplateArnProps)
```

Builds an ARN for the template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.template.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesTemplateArnProps">SesTemplateArnProps</a>

---

##### `tenant` <a name="tenant" id="@cdk_utils/iam.ses.SesResources.tenant"></a>

```typescript
import { ses } from '@cdk_utils/iam'

ses.SesResources.tenant(props: SesTenantArnProps)
```

Builds an ARN for the tenant resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ses.SesResources.tenant.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ses.SesTenantArnProps">SesTenantArnProps</a>

---




