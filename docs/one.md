# `one` Submodule <a name="`one` Submodule" id="@cdk_utils/iam.one"></a>


## Structs <a name="Structs" id="Structs"></a>

### OneConfigurationArnComponents <a name="OneConfigurationArnComponents" id="@cdk_utils/iam.one.OneConfigurationArnComponents"></a>

Parsed components of a configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.one.OneConfigurationArnComponents.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

const oneConfigurationArnComponents: one.OneConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.one.OneConfigurationArnComponents.property.deviceInstanceId">deviceInstanceId</a></code> | <code>string</code> | The DeviceInstanceId component. |
| <code><a href="#@cdk_utils/iam.one.OneConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.one.OneConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.one.OneConfigurationArnComponents.property.version">version</a></code> | <code>string</code> | The Version component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.one.OneConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceInstanceId`<sup>Required</sup> <a name="deviceInstanceId" id="@cdk_utils/iam.one.OneConfigurationArnComponents.property.deviceInstanceId"></a>

```typescript
public readonly deviceInstanceId: string;
```

- *Type:* string

The DeviceInstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.one.OneConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.one.OneConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.one.OneConfigurationArnComponents.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component.

---

### OneConfigurationArnProps <a name="OneConfigurationArnProps" id="@cdk_utils/iam.one.OneConfigurationArnProps"></a>

Properties for building a configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.one.OneConfigurationArnProps.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

const oneConfigurationArnProps: one.OneConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneConfigurationArnProps.property.deviceInstanceId">deviceInstanceId</a></code> | <code>string</code> | The DeviceInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.one.OneConfigurationArnProps.property.version">version</a></code> | <code>string</code> | The Version component of the ARN. |
| <code><a href="#@cdk_utils/iam.one.OneConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.one.OneConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.one.OneConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deviceInstanceId`<sup>Required</sup> <a name="deviceInstanceId" id="@cdk_utils/iam.one.OneConfigurationArnProps.property.deviceInstanceId"></a>

```typescript
public readonly deviceInstanceId: string;
```

- *Type:* string

The DeviceInstanceId component of the ARN.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.one.OneConfigurationArnProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.one.OneConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.one.OneConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.one.OneConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OneDeviceConfigurationTemplateArnComponents <a name="OneDeviceConfigurationTemplateArnComponents" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnComponents"></a>

Parsed components of a device-configuration-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnComponents.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

const oneDeviceConfigurationTemplateArnComponents: one.OneDeviceConfigurationTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnComponents.property.templateId">templateId</a></code> | <code>string</code> | The TemplateId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnComponents.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The TemplateId component.

---

### OneDeviceConfigurationTemplateArnProps <a name="OneDeviceConfigurationTemplateArnProps" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps"></a>

Properties for building a device-configuration-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

const oneDeviceConfigurationTemplateArnProps: one.OneDeviceConfigurationTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps.property.templateId">templateId</a></code> | <code>string</code> | The TemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The TemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OneDeviceInstanceArnComponents <a name="OneDeviceInstanceArnComponents" id="@cdk_utils/iam.one.OneDeviceInstanceArnComponents"></a>

Parsed components of a device-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.one.OneDeviceInstanceArnComponents.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

const oneDeviceInstanceArnComponents: one.OneDeviceInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneDeviceInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceInstanceArnComponents.property.deviceInstanceId">deviceInstanceId</a></code> | <code>string</code> | The DeviceInstanceId component. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.one.OneDeviceInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceInstanceId`<sup>Required</sup> <a name="deviceInstanceId" id="@cdk_utils/iam.one.OneDeviceInstanceArnComponents.property.deviceInstanceId"></a>

```typescript
public readonly deviceInstanceId: string;
```

- *Type:* string

The DeviceInstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.one.OneDeviceInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.one.OneDeviceInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OneDeviceInstanceArnProps <a name="OneDeviceInstanceArnProps" id="@cdk_utils/iam.one.OneDeviceInstanceArnProps"></a>

Properties for building a device-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.one.OneDeviceInstanceArnProps.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

const oneDeviceInstanceArnProps: one.OneDeviceInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneDeviceInstanceArnProps.property.deviceInstanceId">deviceInstanceId</a></code> | <code>string</code> | The DeviceInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.one.OneDeviceInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deviceInstanceId`<sup>Required</sup> <a name="deviceInstanceId" id="@cdk_utils/iam.one.OneDeviceInstanceArnProps.property.deviceInstanceId"></a>

```typescript
public readonly deviceInstanceId: string;
```

- *Type:* string

The DeviceInstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.one.OneDeviceInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.one.OneDeviceInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.one.OneDeviceInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OneSiteArnComponents <a name="OneSiteArnComponents" id="@cdk_utils/iam.one.OneSiteArnComponents"></a>

Parsed components of a site ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.one.OneSiteArnComponents.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

const oneSiteArnComponents: one.OneSiteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneSiteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.one.OneSiteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.one.OneSiteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.one.OneSiteArnComponents.property.siteId">siteId</a></code> | <code>string</code> | The SiteId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.one.OneSiteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.one.OneSiteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.one.OneSiteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdk_utils/iam.one.OneSiteArnComponents.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

The SiteId component.

---

### OneSiteArnProps <a name="OneSiteArnProps" id="@cdk_utils/iam.one.OneSiteArnProps"></a>

Properties for building a site ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.one.OneSiteArnProps.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

const oneSiteArnProps: one.OneSiteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneSiteArnProps.property.siteId">siteId</a></code> | <code>string</code> | The SiteId component of the ARN. |
| <code><a href="#@cdk_utils/iam.one.OneSiteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.one.OneSiteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.one.OneSiteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdk_utils/iam.one.OneSiteArnProps.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

The SiteId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.one.OneSiteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.one.OneSiteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.one.OneSiteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OneUserArnComponents <a name="OneUserArnComponents" id="@cdk_utils/iam.one.OneUserArnComponents"></a>

Parsed components of a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.one.OneUserArnComponents.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

const oneUserArnComponents: one.OneUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.one.OneUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.one.OneUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.one.OneUserArnComponents.property.userId">userId</a></code> | <code>string</code> | The UserId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.one.OneUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.one.OneUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.one.OneUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.one.OneUserArnComponents.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component.

---

### OneUserArnProps <a name="OneUserArnProps" id="@cdk_utils/iam.one.OneUserArnProps"></a>

Properties for building a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.one.OneUserArnProps.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

const oneUserArnProps: one.OneUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneUserArnProps.property.userId">userId</a></code> | <code>string</code> | The UserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.one.OneUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.one.OneUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.one.OneUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.one.OneUserArnProps.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.one.OneUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.one.OneUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.one.OneUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### OneActions <a name="OneActions" id="@cdk_utils/iam.one.OneActions"></a>

IAM action constants for the one service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.one.OneActions.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

new one.OneActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.actionGetDeviceConfigurationTemplate">actionGetDeviceConfigurationTemplate</a></code> | <code>string</code> | [Read] one:GetDeviceConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.actionGetDeviceInstance">actionGetDeviceInstance</a></code> | <code>string</code> | [Read] one:GetDeviceInstance. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.actionGetDeviceInstanceConfiguration">actionGetDeviceInstanceConfiguration</a></code> | <code>string</code> | [Read] one:GetDeviceInstanceConfiguration. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.actionGetSite">actionGetSite</a></code> | <code>string</code> | [Read] one:GetSite. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.actionGetSiteAddress">actionGetSiteAddress</a></code> | <code>string</code> | [Read] one:GetSiteAddress. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.CreateDeviceActivationQrCode">CreateDeviceActivationQrCode</a></code> | <code>string</code> | [Write] one:CreateDeviceActivationQrCode. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.CreateDeviceConfigurationTemplate">CreateDeviceConfigurationTemplate</a></code> | <code>string</code> | [Write] one:CreateDeviceConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.CreateDeviceInstance">CreateDeviceInstance</a></code> | <code>string</code> | [Write] one:CreateDeviceInstance. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.CreateDeviceInstanceConfiguration">CreateDeviceInstanceConfiguration</a></code> | <code>string</code> | [Write] one:CreateDeviceInstanceConfiguration. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.CreateSite">CreateSite</a></code> | <code>string</code> | [Write] one:CreateSite. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.DeleteAssociatedDevice">DeleteAssociatedDevice</a></code> | <code>string</code> | [Write] one:DeleteAssociatedDevice. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.DeleteDeviceConfigurationTemplate">DeleteDeviceConfigurationTemplate</a></code> | <code>string</code> | [Write] one:DeleteDeviceConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.DeleteDeviceInstance">DeleteDeviceInstance</a></code> | <code>string</code> | [Write] one:DeleteDeviceInstance. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.DeleteSite">DeleteSite</a></code> | <code>string</code> | [Write] one:DeleteSite. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.DeleteUserV1">DeleteUserV1</a></code> | <code>string</code> | [Write] one:DeleteUserV1. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.ListDeviceConfigurationTemplates">ListDeviceConfigurationTemplates</a></code> | <code>string</code> | [List] one:ListDeviceConfigurationTemplates. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.ListDeviceInstances">ListDeviceInstances</a></code> | <code>string</code> | [List] one:ListDeviceInstances. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.ListSites">ListSites</a></code> | <code>string</code> | [List] one:ListSites. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] one:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] one:ListUsers. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.ListUsersV1">ListUsersV1</a></code> | <code>string</code> | [List] one:ListUsersV1. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.RebootDevice">RebootDevice</a></code> | <code>string</code> | [Write] one:RebootDevice. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] one:TagResource. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] one:UntagResource. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.UpdateDeviceConfigurationTemplate">UpdateDeviceConfigurationTemplate</a></code> | <code>string</code> | [Write] one:UpdateDeviceConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.UpdateDeviceInstance">UpdateDeviceInstance</a></code> | <code>string</code> | [Write] one:UpdateDeviceInstance. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.UpdateSite">UpdateSite</a></code> | <code>string</code> | [Write] one:UpdateSite. |
| <code><a href="#@cdk_utils/iam.one.OneActions.property.UpdateSiteAddress">UpdateSiteAddress</a></code> | <code>string</code> | [Write] one:UpdateSiteAddress. |

---

##### `actionGetDeviceConfigurationTemplate`<sup>Required</sup> <a name="actionGetDeviceConfigurationTemplate" id="@cdk_utils/iam.one.OneActions.property.actionGetDeviceConfigurationTemplate"></a>

```typescript
public readonly actionGetDeviceConfigurationTemplate: string;
```

- *Type:* string

[Read] one:GetDeviceConfigurationTemplate.

---

##### `actionGetDeviceInstance`<sup>Required</sup> <a name="actionGetDeviceInstance" id="@cdk_utils/iam.one.OneActions.property.actionGetDeviceInstance"></a>

```typescript
public readonly actionGetDeviceInstance: string;
```

- *Type:* string

[Read] one:GetDeviceInstance.

---

##### `actionGetDeviceInstanceConfiguration`<sup>Required</sup> <a name="actionGetDeviceInstanceConfiguration" id="@cdk_utils/iam.one.OneActions.property.actionGetDeviceInstanceConfiguration"></a>

```typescript
public readonly actionGetDeviceInstanceConfiguration: string;
```

- *Type:* string

[Read] one:GetDeviceInstanceConfiguration.

---

##### `actionGetSite`<sup>Required</sup> <a name="actionGetSite" id="@cdk_utils/iam.one.OneActions.property.actionGetSite"></a>

```typescript
public readonly actionGetSite: string;
```

- *Type:* string

[Read] one:GetSite.

---

##### `actionGetSiteAddress`<sup>Required</sup> <a name="actionGetSiteAddress" id="@cdk_utils/iam.one.OneActions.property.actionGetSiteAddress"></a>

```typescript
public readonly actionGetSiteAddress: string;
```

- *Type:* string

[Read] one:GetSiteAddress.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.one.OneActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.one.OneActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.one.OneActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.one.OneActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.one.OneActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateDeviceActivationQrCode`<sup>Required</sup> <a name="CreateDeviceActivationQrCode" id="@cdk_utils/iam.one.OneActions.property.CreateDeviceActivationQrCode"></a>

```typescript
public readonly CreateDeviceActivationQrCode: string;
```

- *Type:* string

[Write] one:CreateDeviceActivationQrCode.

---

##### `CreateDeviceConfigurationTemplate`<sup>Required</sup> <a name="CreateDeviceConfigurationTemplate" id="@cdk_utils/iam.one.OneActions.property.CreateDeviceConfigurationTemplate"></a>

```typescript
public readonly CreateDeviceConfigurationTemplate: string;
```

- *Type:* string

[Write] one:CreateDeviceConfigurationTemplate.

---

##### `CreateDeviceInstance`<sup>Required</sup> <a name="CreateDeviceInstance" id="@cdk_utils/iam.one.OneActions.property.CreateDeviceInstance"></a>

```typescript
public readonly CreateDeviceInstance: string;
```

- *Type:* string

[Write] one:CreateDeviceInstance.

---

##### `CreateDeviceInstanceConfiguration`<sup>Required</sup> <a name="CreateDeviceInstanceConfiguration" id="@cdk_utils/iam.one.OneActions.property.CreateDeviceInstanceConfiguration"></a>

```typescript
public readonly CreateDeviceInstanceConfiguration: string;
```

- *Type:* string

[Write] one:CreateDeviceInstanceConfiguration.

---

##### `CreateSite`<sup>Required</sup> <a name="CreateSite" id="@cdk_utils/iam.one.OneActions.property.CreateSite"></a>

```typescript
public readonly CreateSite: string;
```

- *Type:* string

[Write] one:CreateSite.

---

##### `DeleteAssociatedDevice`<sup>Required</sup> <a name="DeleteAssociatedDevice" id="@cdk_utils/iam.one.OneActions.property.DeleteAssociatedDevice"></a>

```typescript
public readonly DeleteAssociatedDevice: string;
```

- *Type:* string

[Write] one:DeleteAssociatedDevice.

---

##### `DeleteDeviceConfigurationTemplate`<sup>Required</sup> <a name="DeleteDeviceConfigurationTemplate" id="@cdk_utils/iam.one.OneActions.property.DeleteDeviceConfigurationTemplate"></a>

```typescript
public readonly DeleteDeviceConfigurationTemplate: string;
```

- *Type:* string

[Write] one:DeleteDeviceConfigurationTemplate.

---

##### `DeleteDeviceInstance`<sup>Required</sup> <a name="DeleteDeviceInstance" id="@cdk_utils/iam.one.OneActions.property.DeleteDeviceInstance"></a>

```typescript
public readonly DeleteDeviceInstance: string;
```

- *Type:* string

[Write] one:DeleteDeviceInstance.

---

##### `DeleteSite`<sup>Required</sup> <a name="DeleteSite" id="@cdk_utils/iam.one.OneActions.property.DeleteSite"></a>

```typescript
public readonly DeleteSite: string;
```

- *Type:* string

[Write] one:DeleteSite.

---

##### `DeleteUserV1`<sup>Required</sup> <a name="DeleteUserV1" id="@cdk_utils/iam.one.OneActions.property.DeleteUserV1"></a>

```typescript
public readonly DeleteUserV1: string;
```

- *Type:* string

[Write] one:DeleteUserV1.

---

##### `ListDeviceConfigurationTemplates`<sup>Required</sup> <a name="ListDeviceConfigurationTemplates" id="@cdk_utils/iam.one.OneActions.property.ListDeviceConfigurationTemplates"></a>

```typescript
public readonly ListDeviceConfigurationTemplates: string;
```

- *Type:* string

[List] one:ListDeviceConfigurationTemplates.

---

##### `ListDeviceInstances`<sup>Required</sup> <a name="ListDeviceInstances" id="@cdk_utils/iam.one.OneActions.property.ListDeviceInstances"></a>

```typescript
public readonly ListDeviceInstances: string;
```

- *Type:* string

[List] one:ListDeviceInstances.

---

##### `ListSites`<sup>Required</sup> <a name="ListSites" id="@cdk_utils/iam.one.OneActions.property.ListSites"></a>

```typescript
public readonly ListSites: string;
```

- *Type:* string

[List] one:ListSites.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.one.OneActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] one:ListTagsForResource.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.one.OneActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] one:ListUsers.

---

##### `ListUsersV1`<sup>Required</sup> <a name="ListUsersV1" id="@cdk_utils/iam.one.OneActions.property.ListUsersV1"></a>

```typescript
public readonly ListUsersV1: string;
```

- *Type:* string

[List] one:ListUsersV1.

---

##### `RebootDevice`<sup>Required</sup> <a name="RebootDevice" id="@cdk_utils/iam.one.OneActions.property.RebootDevice"></a>

```typescript
public readonly RebootDevice: string;
```

- *Type:* string

[Write] one:RebootDevice.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.one.OneActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.one.OneActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] one:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.one.OneActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] one:UntagResource.

---

##### `UpdateDeviceConfigurationTemplate`<sup>Required</sup> <a name="UpdateDeviceConfigurationTemplate" id="@cdk_utils/iam.one.OneActions.property.UpdateDeviceConfigurationTemplate"></a>

```typescript
public readonly UpdateDeviceConfigurationTemplate: string;
```

- *Type:* string

[Write] one:UpdateDeviceConfigurationTemplate.

---

##### `UpdateDeviceInstance`<sup>Required</sup> <a name="UpdateDeviceInstance" id="@cdk_utils/iam.one.OneActions.property.UpdateDeviceInstance"></a>

```typescript
public readonly UpdateDeviceInstance: string;
```

- *Type:* string

[Write] one:UpdateDeviceInstance.

---

##### `UpdateSite`<sup>Required</sup> <a name="UpdateSite" id="@cdk_utils/iam.one.OneActions.property.UpdateSite"></a>

```typescript
public readonly UpdateSite: string;
```

- *Type:* string

[Write] one:UpdateSite.

---

##### `UpdateSiteAddress`<sup>Required</sup> <a name="UpdateSiteAddress" id="@cdk_utils/iam.one.OneActions.property.UpdateSiteAddress"></a>

```typescript
public readonly UpdateSiteAddress: string;
```

- *Type:* string

[Write] one:UpdateSiteAddress.

---

### OneConditions <a name="OneConditions" id="@cdk_utils/iam.one.OneConditions"></a>

Condition key constants and builders for one.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.one.OneConditions.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

new one.OneConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.one.OneConditions.requestTag"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.one.OneConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.one.OneConditions.resourceTag"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.one.OneConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.one.OneConditions.tagKeys"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.one.OneConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.actionGetDeviceConfigurationTemplateConditionKeys">actionGetDeviceConfigurationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDeviceConfigurationTemplate action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.actionGetDeviceInstanceConditionKeys">actionGetDeviceInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDeviceInstance action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.actionGetDeviceInstanceConfigurationConditionKeys">actionGetDeviceInstanceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDeviceInstanceConfiguration action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.actionGetSiteAddressConditionKeys">actionGetSiteAddressConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSiteAddress action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.actionGetSiteConditionKeys">actionGetSiteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSite action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.CreateDeviceActivationQrCodeConditionKeys">CreateDeviceActivationQrCodeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeviceActivationQrCode action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.CreateDeviceConfigurationTemplateConditionKeys">CreateDeviceConfigurationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeviceConfigurationTemplate action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.CreateDeviceInstanceConditionKeys">CreateDeviceInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeviceInstance action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.CreateDeviceInstanceConfigurationConditionKeys">CreateDeviceInstanceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeviceInstanceConfiguration action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.CreateSiteConditionKeys">CreateSiteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSite action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.DeleteAssociatedDeviceConditionKeys">DeleteAssociatedDeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAssociatedDevice action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.DeleteDeviceConfigurationTemplateConditionKeys">DeleteDeviceConfigurationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDeviceConfigurationTemplate action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.DeleteDeviceInstanceConditionKeys">DeleteDeviceInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDeviceInstance action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.DeleteSiteConditionKeys">DeleteSiteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSite action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.RebootDeviceConditionKeys">RebootDeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RebootDevice action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.UpdateDeviceConfigurationTemplateConditionKeys">UpdateDeviceConfigurationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDeviceConfigurationTemplate action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.UpdateDeviceInstanceConditionKeys">UpdateDeviceInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDeviceInstance action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.UpdateSiteAddressConditionKeys">UpdateSiteAddressConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSiteAddress action. |
| <code><a href="#@cdk_utils/iam.one.OneConditions.property.UpdateSiteConditionKeys">UpdateSiteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSite action. |

---

##### `actionGetDeviceConfigurationTemplateConditionKeys`<sup>Required</sup> <a name="actionGetDeviceConfigurationTemplateConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.actionGetDeviceConfigurationTemplateConditionKeys"></a>

```typescript
public readonly actionGetDeviceConfigurationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDeviceConfigurationTemplate action.

---

##### `actionGetDeviceInstanceConditionKeys`<sup>Required</sup> <a name="actionGetDeviceInstanceConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.actionGetDeviceInstanceConditionKeys"></a>

```typescript
public readonly actionGetDeviceInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDeviceInstance action.

---

##### `actionGetDeviceInstanceConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetDeviceInstanceConfigurationConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.actionGetDeviceInstanceConfigurationConditionKeys"></a>

```typescript
public readonly actionGetDeviceInstanceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDeviceInstanceConfiguration action.

---

##### `actionGetSiteAddressConditionKeys`<sup>Required</sup> <a name="actionGetSiteAddressConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.actionGetSiteAddressConditionKeys"></a>

```typescript
public readonly actionGetSiteAddressConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSiteAddress action.

---

##### `actionGetSiteConditionKeys`<sup>Required</sup> <a name="actionGetSiteConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.actionGetSiteConditionKeys"></a>

```typescript
public readonly actionGetSiteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSite action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.one.OneConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.one.OneConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.one.OneConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDeviceActivationQrCodeConditionKeys`<sup>Required</sup> <a name="CreateDeviceActivationQrCodeConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.CreateDeviceActivationQrCodeConditionKeys"></a>

```typescript
public readonly CreateDeviceActivationQrCodeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeviceActivationQrCode action.

---

##### `CreateDeviceConfigurationTemplateConditionKeys`<sup>Required</sup> <a name="CreateDeviceConfigurationTemplateConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.CreateDeviceConfigurationTemplateConditionKeys"></a>

```typescript
public readonly CreateDeviceConfigurationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeviceConfigurationTemplate action.

---

##### `CreateDeviceInstanceConditionKeys`<sup>Required</sup> <a name="CreateDeviceInstanceConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.CreateDeviceInstanceConditionKeys"></a>

```typescript
public readonly CreateDeviceInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeviceInstance action.

---

##### `CreateDeviceInstanceConfigurationConditionKeys`<sup>Required</sup> <a name="CreateDeviceInstanceConfigurationConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.CreateDeviceInstanceConfigurationConditionKeys"></a>

```typescript
public readonly CreateDeviceInstanceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeviceInstanceConfiguration action.

---

##### `CreateSiteConditionKeys`<sup>Required</sup> <a name="CreateSiteConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.CreateSiteConditionKeys"></a>

```typescript
public readonly CreateSiteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSite action.

---

##### `DeleteAssociatedDeviceConditionKeys`<sup>Required</sup> <a name="DeleteAssociatedDeviceConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.DeleteAssociatedDeviceConditionKeys"></a>

```typescript
public readonly DeleteAssociatedDeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAssociatedDevice action.

---

##### `DeleteDeviceConfigurationTemplateConditionKeys`<sup>Required</sup> <a name="DeleteDeviceConfigurationTemplateConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.DeleteDeviceConfigurationTemplateConditionKeys"></a>

```typescript
public readonly DeleteDeviceConfigurationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDeviceConfigurationTemplate action.

---

##### `DeleteDeviceInstanceConditionKeys`<sup>Required</sup> <a name="DeleteDeviceInstanceConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.DeleteDeviceInstanceConditionKeys"></a>

```typescript
public readonly DeleteDeviceInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDeviceInstance action.

---

##### `DeleteSiteConditionKeys`<sup>Required</sup> <a name="DeleteSiteConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.DeleteSiteConditionKeys"></a>

```typescript
public readonly DeleteSiteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSite action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `RebootDeviceConditionKeys`<sup>Required</sup> <a name="RebootDeviceConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.RebootDeviceConditionKeys"></a>

```typescript
public readonly RebootDeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RebootDevice action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateDeviceConfigurationTemplateConditionKeys`<sup>Required</sup> <a name="UpdateDeviceConfigurationTemplateConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.UpdateDeviceConfigurationTemplateConditionKeys"></a>

```typescript
public readonly UpdateDeviceConfigurationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDeviceConfigurationTemplate action.

---

##### `UpdateDeviceInstanceConditionKeys`<sup>Required</sup> <a name="UpdateDeviceInstanceConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.UpdateDeviceInstanceConditionKeys"></a>

```typescript
public readonly UpdateDeviceInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDeviceInstance action.

---

##### `UpdateSiteAddressConditionKeys`<sup>Required</sup> <a name="UpdateSiteAddressConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.UpdateSiteAddressConditionKeys"></a>

```typescript
public readonly UpdateSiteAddressConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSiteAddress action.

---

##### `UpdateSiteConditionKeys`<sup>Required</sup> <a name="UpdateSiteConditionKeys" id="@cdk_utils/iam.one.OneConditions.property.UpdateSiteConditionKeys"></a>

```typescript
public readonly UpdateSiteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSite action.

---

### OneResources <a name="OneResources" id="@cdk_utils/iam.one.OneResources"></a>

ARN builders, validators, and parsers for one resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.one.OneResources.Initializer"></a>

```typescript
import { one } from '@cdk_utils/iam'

new one.OneResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.one.OneResources.configuration">configuration</a></code> | Builds an ARN for the configuration resource. |
| <code><a href="#@cdk_utils/iam.one.OneResources.deviceConfigurationTemplate">deviceConfigurationTemplate</a></code> | Builds an ARN for the device-configuration-template resource. |
| <code><a href="#@cdk_utils/iam.one.OneResources.deviceInstance">deviceInstance</a></code> | Builds an ARN for the device-instance resource. |
| <code><a href="#@cdk_utils/iam.one.OneResources.isValidConfigurationArn">isValidConfigurationArn</a></code> | Validates whether a string is a valid ARN for the configuration resource. |
| <code><a href="#@cdk_utils/iam.one.OneResources.isValidDeviceConfigurationTemplateArn">isValidDeviceConfigurationTemplateArn</a></code> | Validates whether a string is a valid ARN for the device-configuration-template resource. |
| <code><a href="#@cdk_utils/iam.one.OneResources.isValidDeviceInstanceArn">isValidDeviceInstanceArn</a></code> | Validates whether a string is a valid ARN for the device-instance resource. |
| <code><a href="#@cdk_utils/iam.one.OneResources.isValidSiteArn">isValidSiteArn</a></code> | Validates whether a string is a valid ARN for the site resource. |
| <code><a href="#@cdk_utils/iam.one.OneResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.one.OneResources.parseConfigurationArn">parseConfigurationArn</a></code> | Parses a configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.one.OneResources.parseDeviceConfigurationTemplateArn">parseDeviceConfigurationTemplateArn</a></code> | Parses a device-configuration-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.one.OneResources.parseDeviceInstanceArn">parseDeviceInstanceArn</a></code> | Parses a device-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.one.OneResources.parseSiteArn">parseSiteArn</a></code> | Parses a site ARN into its components. |
| <code><a href="#@cdk_utils/iam.one.OneResources.parseUserArn">parseUserArn</a></code> | Parses a user ARN into its components. |
| <code><a href="#@cdk_utils/iam.one.OneResources.site">site</a></code> | Builds an ARN for the site resource. |
| <code><a href="#@cdk_utils/iam.one.OneResources.user">user</a></code> | Builds an ARN for the user resource. |

---

##### `configuration` <a name="configuration" id="@cdk_utils/iam.one.OneResources.configuration"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.configuration(props: OneConfigurationArnProps)
```

Builds an ARN for the configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.one.OneResources.configuration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.one.OneConfigurationArnProps">OneConfigurationArnProps</a>

---

##### `deviceConfigurationTemplate` <a name="deviceConfigurationTemplate" id="@cdk_utils/iam.one.OneResources.deviceConfigurationTemplate"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.deviceConfigurationTemplate(props: OneDeviceConfigurationTemplateArnProps)
```

Builds an ARN for the device-configuration-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.one.OneResources.deviceConfigurationTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.one.OneDeviceConfigurationTemplateArnProps">OneDeviceConfigurationTemplateArnProps</a>

---

##### `deviceInstance` <a name="deviceInstance" id="@cdk_utils/iam.one.OneResources.deviceInstance"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.deviceInstance(props: OneDeviceInstanceArnProps)
```

Builds an ARN for the device-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.one.OneResources.deviceInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.one.OneDeviceInstanceArnProps">OneDeviceInstanceArnProps</a>

---

##### `isValidConfigurationArn` <a name="isValidConfigurationArn" id="@cdk_utils/iam.one.OneResources.isValidConfigurationArn"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.isValidConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.one.OneResources.isValidConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeviceConfigurationTemplateArn` <a name="isValidDeviceConfigurationTemplateArn" id="@cdk_utils/iam.one.OneResources.isValidDeviceConfigurationTemplateArn"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.isValidDeviceConfigurationTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the device-configuration-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.one.OneResources.isValidDeviceConfigurationTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeviceInstanceArn` <a name="isValidDeviceInstanceArn" id="@cdk_utils/iam.one.OneResources.isValidDeviceInstanceArn"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.isValidDeviceInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the device-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.one.OneResources.isValidDeviceInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSiteArn` <a name="isValidSiteArn" id="@cdk_utils/iam.one.OneResources.isValidSiteArn"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.isValidSiteArn(arn: string)
```

Validates whether a string is a valid ARN for the site resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.one.OneResources.isValidSiteArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.one.OneResources.isValidUserArn"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.one.OneResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationArn` <a name="parseConfigurationArn" id="@cdk_utils/iam.one.OneResources.parseConfigurationArn"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.parseConfigurationArn(arn: string)
```

Parses a configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.one.OneResources.parseConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceConfigurationTemplateArn` <a name="parseDeviceConfigurationTemplateArn" id="@cdk_utils/iam.one.OneResources.parseDeviceConfigurationTemplateArn"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.parseDeviceConfigurationTemplateArn(arn: string)
```

Parses a device-configuration-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.one.OneResources.parseDeviceConfigurationTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceInstanceArn` <a name="parseDeviceInstanceArn" id="@cdk_utils/iam.one.OneResources.parseDeviceInstanceArn"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.parseDeviceInstanceArn(arn: string)
```

Parses a device-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.one.OneResources.parseDeviceInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSiteArn` <a name="parseSiteArn" id="@cdk_utils/iam.one.OneResources.parseSiteArn"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.parseSiteArn(arn: string)
```

Parses a site ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.one.OneResources.parseSiteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.one.OneResources.parseUserArn"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.parseUserArn(arn: string)
```

Parses a user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.one.OneResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `site` <a name="site" id="@cdk_utils/iam.one.OneResources.site"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.site(props: OneSiteArnProps)
```

Builds an ARN for the site resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.one.OneResources.site.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.one.OneSiteArnProps">OneSiteArnProps</a>

---

##### `user` <a name="user" id="@cdk_utils/iam.one.OneResources.user"></a>

```typescript
import { one } from '@cdk_utils/iam'

one.OneResources.user(props: OneUserArnProps)
```

Builds an ARN for the user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.one.OneResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.one.OneUserArnProps">OneUserArnProps</a>

---




