# `pca_connector_ad` Submodule <a name="`pca_connector_ad` Submodule" id="@cdk_utils/iam.pca_connector_ad"></a>


## Structs <a name="Structs" id="Structs"></a>

### PcaConnectorAdConnectorArnComponents <a name="PcaConnectorAdConnectorArnComponents" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnComponents"></a>

Parsed components of a Connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnComponents.Initializer"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

const pcaConnectorAdConnectorArnComponents: pca_connector_ad.PcaConnectorAdConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnComponents.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnComponents.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PcaConnectorAdConnectorArnProps <a name="PcaConnectorAdConnectorArnProps" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps"></a>

Properties for building a Connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps.Initializer"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

const pcaConnectorAdConnectorArnProps: pca_connector_ad.PcaConnectorAdConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PcaConnectorAdDirectoryRegistrationArnComponents <a name="PcaConnectorAdDirectoryRegistrationArnComponents" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents"></a>

Parsed components of a DirectoryRegistration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents.Initializer"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

const pcaConnectorAdDirectoryRegistrationArnComponents: pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PcaConnectorAdDirectoryRegistrationArnProps <a name="PcaConnectorAdDirectoryRegistrationArnProps" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps"></a>

Properties for building a DirectoryRegistration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps.Initializer"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

const pcaConnectorAdDirectoryRegistrationArnProps: pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PcaConnectorAdTemplateArnComponents <a name="PcaConnectorAdTemplateArnComponents" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents"></a>

Parsed components of a Template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.Initializer"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

const pcaConnectorAdTemplateArnComponents: pca_connector_ad.PcaConnectorAdTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.property.templateId">templateId</a></code> | <code>string</code> | The TemplateId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnComponents.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The TemplateId component.

---

### PcaConnectorAdTemplateArnProps <a name="PcaConnectorAdTemplateArnProps" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps"></a>

Properties for building a Template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.Initializer"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

const pcaConnectorAdTemplateArnProps: pca_connector_ad.PcaConnectorAdTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.property.templateId">templateId</a></code> | <code>string</code> | The TemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component of the ARN.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The TemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PcaConnectorAdActions <a name="PcaConnectorAdActions" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions"></a>

IAM action constants for the pca-connector-ad service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.Initializer"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

new pca_connector_ad.PcaConnectorAdActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.actionGetConnector">actionGetConnector</a></code> | <code>string</code> | [Read] pca-connector-ad:GetConnector. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.actionGetDirectoryRegistration">actionGetDirectoryRegistration</a></code> | <code>string</code> | [Read] pca-connector-ad:GetDirectoryRegistration. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.actionGetServicePrincipalName">actionGetServicePrincipalName</a></code> | <code>string</code> | [Read] pca-connector-ad:GetServicePrincipalName. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.actionGetTemplate">actionGetTemplate</a></code> | <code>string</code> | [Read] pca-connector-ad:GetTemplate. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.actionGetTemplateGroupAccessControlEntry">actionGetTemplateGroupAccessControlEntry</a></code> | <code>string</code> | [Read] pca-connector-ad:GetTemplateGroupAccessControlEntry. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.CreateConnector">CreateConnector</a></code> | <code>string</code> | [Write] pca-connector-ad:CreateConnector. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.CreateDirectoryRegistration">CreateDirectoryRegistration</a></code> | <code>string</code> | [Write] pca-connector-ad:CreateDirectoryRegistration. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.CreateServicePrincipalName">CreateServicePrincipalName</a></code> | <code>string</code> | [Write] pca-connector-ad:CreateServicePrincipalName. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.CreateTemplate">CreateTemplate</a></code> | <code>string</code> | [Write] pca-connector-ad:CreateTemplate. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.CreateTemplateGroupAccessControlEntry">CreateTemplateGroupAccessControlEntry</a></code> | <code>string</code> | [Write] pca-connector-ad:CreateTemplateGroupAccessControlEntry. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.DeleteConnector">DeleteConnector</a></code> | <code>string</code> | [Write] pca-connector-ad:DeleteConnector. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.DeleteDirectoryRegistration">DeleteDirectoryRegistration</a></code> | <code>string</code> | [Write] pca-connector-ad:DeleteDirectoryRegistration. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.DeleteServicePrincipalName">DeleteServicePrincipalName</a></code> | <code>string</code> | [Write] pca-connector-ad:DeleteServicePrincipalName. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string</code> | [Write] pca-connector-ad:DeleteTemplate. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.DeleteTemplateGroupAccessControlEntry">DeleteTemplateGroupAccessControlEntry</a></code> | <code>string</code> | [Write] pca-connector-ad:DeleteTemplateGroupAccessControlEntry. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListConnectors">ListConnectors</a></code> | <code>string</code> | [List] pca-connector-ad:ListConnectors. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListDirectoryRegistrations">ListDirectoryRegistrations</a></code> | <code>string</code> | [List] pca-connector-ad:ListDirectoryRegistrations. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListServicePrincipalNames">ListServicePrincipalNames</a></code> | <code>string</code> | [List] pca-connector-ad:ListServicePrincipalNames. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] pca-connector-ad:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListTemplateGroupAccessControlEntries">ListTemplateGroupAccessControlEntries</a></code> | <code>string</code> | [List] pca-connector-ad:ListTemplateGroupAccessControlEntries. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListTemplates">ListTemplates</a></code> | <code>string</code> | [List] pca-connector-ad:ListTemplates. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] pca-connector-ad:TagResource. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] pca-connector-ad:UntagResource. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string</code> | [Write] pca-connector-ad:UpdateTemplate. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.UpdateTemplateGroupAccessControlEntry">UpdateTemplateGroupAccessControlEntry</a></code> | <code>string</code> | [Write] pca-connector-ad:UpdateTemplateGroupAccessControlEntry. |

---

##### `actionGetConnector`<sup>Required</sup> <a name="actionGetConnector" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.actionGetConnector"></a>

```typescript
public readonly actionGetConnector: string;
```

- *Type:* string

[Read] pca-connector-ad:GetConnector.

---

##### `actionGetDirectoryRegistration`<sup>Required</sup> <a name="actionGetDirectoryRegistration" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.actionGetDirectoryRegistration"></a>

```typescript
public readonly actionGetDirectoryRegistration: string;
```

- *Type:* string

[Read] pca-connector-ad:GetDirectoryRegistration.

---

##### `actionGetServicePrincipalName`<sup>Required</sup> <a name="actionGetServicePrincipalName" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.actionGetServicePrincipalName"></a>

```typescript
public readonly actionGetServicePrincipalName: string;
```

- *Type:* string

[Read] pca-connector-ad:GetServicePrincipalName.

---

##### `actionGetTemplate`<sup>Required</sup> <a name="actionGetTemplate" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.actionGetTemplate"></a>

```typescript
public readonly actionGetTemplate: string;
```

- *Type:* string

[Read] pca-connector-ad:GetTemplate.

---

##### `actionGetTemplateGroupAccessControlEntry`<sup>Required</sup> <a name="actionGetTemplateGroupAccessControlEntry" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.actionGetTemplateGroupAccessControlEntry"></a>

```typescript
public readonly actionGetTemplateGroupAccessControlEntry: string;
```

- *Type:* string

[Read] pca-connector-ad:GetTemplateGroupAccessControlEntry.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string;
```

- *Type:* string

[Write] pca-connector-ad:CreateConnector.

---

##### `CreateDirectoryRegistration`<sup>Required</sup> <a name="CreateDirectoryRegistration" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.CreateDirectoryRegistration"></a>

```typescript
public readonly CreateDirectoryRegistration: string;
```

- *Type:* string

[Write] pca-connector-ad:CreateDirectoryRegistration.

---

##### `CreateServicePrincipalName`<sup>Required</sup> <a name="CreateServicePrincipalName" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.CreateServicePrincipalName"></a>

```typescript
public readonly CreateServicePrincipalName: string;
```

- *Type:* string

[Write] pca-connector-ad:CreateServicePrincipalName.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string;
```

- *Type:* string

[Write] pca-connector-ad:CreateTemplate.

---

##### `CreateTemplateGroupAccessControlEntry`<sup>Required</sup> <a name="CreateTemplateGroupAccessControlEntry" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.CreateTemplateGroupAccessControlEntry"></a>

```typescript
public readonly CreateTemplateGroupAccessControlEntry: string;
```

- *Type:* string

[Write] pca-connector-ad:CreateTemplateGroupAccessControlEntry.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string;
```

- *Type:* string

[Write] pca-connector-ad:DeleteConnector.

---

##### `DeleteDirectoryRegistration`<sup>Required</sup> <a name="DeleteDirectoryRegistration" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.DeleteDirectoryRegistration"></a>

```typescript
public readonly DeleteDirectoryRegistration: string;
```

- *Type:* string

[Write] pca-connector-ad:DeleteDirectoryRegistration.

---

##### `DeleteServicePrincipalName`<sup>Required</sup> <a name="DeleteServicePrincipalName" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.DeleteServicePrincipalName"></a>

```typescript
public readonly DeleteServicePrincipalName: string;
```

- *Type:* string

[Write] pca-connector-ad:DeleteServicePrincipalName.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string;
```

- *Type:* string

[Write] pca-connector-ad:DeleteTemplate.

---

##### `DeleteTemplateGroupAccessControlEntry`<sup>Required</sup> <a name="DeleteTemplateGroupAccessControlEntry" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.DeleteTemplateGroupAccessControlEntry"></a>

```typescript
public readonly DeleteTemplateGroupAccessControlEntry: string;
```

- *Type:* string

[Write] pca-connector-ad:DeleteTemplateGroupAccessControlEntry.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string;
```

- *Type:* string

[List] pca-connector-ad:ListConnectors.

---

##### `ListDirectoryRegistrations`<sup>Required</sup> <a name="ListDirectoryRegistrations" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListDirectoryRegistrations"></a>

```typescript
public readonly ListDirectoryRegistrations: string;
```

- *Type:* string

[List] pca-connector-ad:ListDirectoryRegistrations.

---

##### `ListServicePrincipalNames`<sup>Required</sup> <a name="ListServicePrincipalNames" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListServicePrincipalNames"></a>

```typescript
public readonly ListServicePrincipalNames: string;
```

- *Type:* string

[List] pca-connector-ad:ListServicePrincipalNames.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] pca-connector-ad:ListTagsForResource.

---

##### `ListTemplateGroupAccessControlEntries`<sup>Required</sup> <a name="ListTemplateGroupAccessControlEntries" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListTemplateGroupAccessControlEntries"></a>

```typescript
public readonly ListTemplateGroupAccessControlEntries: string;
```

- *Type:* string

[List] pca-connector-ad:ListTemplateGroupAccessControlEntries.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string;
```

- *Type:* string

[List] pca-connector-ad:ListTemplates.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] pca-connector-ad:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] pca-connector-ad:UntagResource.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string;
```

- *Type:* string

[Write] pca-connector-ad:UpdateTemplate.

---

##### `UpdateTemplateGroupAccessControlEntry`<sup>Required</sup> <a name="UpdateTemplateGroupAccessControlEntry" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdActions.property.UpdateTemplateGroupAccessControlEntry"></a>

```typescript
public readonly UpdateTemplateGroupAccessControlEntry: string;
```

- *Type:* string

[Write] pca-connector-ad:UpdateTemplateGroupAccessControlEntry.

---

### PcaConnectorAdConditions <a name="PcaConnectorAdConditions" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions"></a>

Condition key constants and builders for pca-connector-ad.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.Initializer"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

new pca_connector_ad.PcaConnectorAdConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.requestTag"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.resourceTag"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.tagKeys"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.CreateConnectorConditionKeys">CreateConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnector action. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.CreateDirectoryRegistrationConditionKeys">CreateDirectoryRegistrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDirectoryRegistration action. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.CreateTemplateConditionKeys">CreateTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTemplate action. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateConnectorConditionKeys`<sup>Required</sup> <a name="CreateConnectorConditionKeys" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.CreateConnectorConditionKeys"></a>

```typescript
public readonly CreateConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnector action.

---

##### `CreateDirectoryRegistrationConditionKeys`<sup>Required</sup> <a name="CreateDirectoryRegistrationConditionKeys" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.CreateDirectoryRegistrationConditionKeys"></a>

```typescript
public readonly CreateDirectoryRegistrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDirectoryRegistration action.

---

##### `CreateTemplateConditionKeys`<sup>Required</sup> <a name="CreateTemplateConditionKeys" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.CreateTemplateConditionKeys"></a>

```typescript
public readonly CreateTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTemplate action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### PcaConnectorAdOperations <a name="PcaConnectorAdOperations" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations"></a>

API operation to required IAM actions mapping for pca-connector-ad.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.Initializer"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

new pca_connector_ad.PcaConnectorAdOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.CreateConnector">CreateConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateConnector API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.CreateDirectoryRegistration">CreateDirectoryRegistration</a></code> | <code>string[]</code> | IAM actions required for the CreateDirectoryRegistration API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.CreateServicePrincipalName">CreateServicePrincipalName</a></code> | <code>string[]</code> | IAM actions required for the CreateServicePrincipalName API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.CreateTemplate">CreateTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplate API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.CreateTemplateGroupAccessControlEntry">CreateTemplateGroupAccessControlEntry</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplateGroupAccessControlEntry API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.DeleteConnector">DeleteConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnector API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.DeleteDirectoryRegistration">DeleteDirectoryRegistration</a></code> | <code>string[]</code> | IAM actions required for the DeleteDirectoryRegistration API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.DeleteServicePrincipalName">DeleteServicePrincipalName</a></code> | <code>string[]</code> | IAM actions required for the DeleteServicePrincipalName API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteTemplate API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.DeleteTemplateGroupAccessControlEntry">DeleteTemplateGroupAccessControlEntry</a></code> | <code>string[]</code> | IAM actions required for the DeleteTemplateGroupAccessControlEntry API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListConnectors">ListConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListConnectors API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListDirectoryRegistrations">ListDirectoryRegistrations</a></code> | <code>string[]</code> | IAM actions required for the ListDirectoryRegistrations API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListServicePrincipalNames">ListServicePrincipalNames</a></code> | <code>string[]</code> | IAM actions required for the ListServicePrincipalNames API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListTemplateGroupAccessControlEntries">ListTemplateGroupAccessControlEntries</a></code> | <code>string[]</code> | IAM actions required for the ListTemplateGroupAccessControlEntries API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListTemplates">ListTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListTemplates API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.opGetConnector">opGetConnector</a></code> | <code>string[]</code> | IAM actions required for the GetConnector API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.opGetDirectoryRegistration">opGetDirectoryRegistration</a></code> | <code>string[]</code> | IAM actions required for the GetDirectoryRegistration API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.opGetServicePrincipalName">opGetServicePrincipalName</a></code> | <code>string[]</code> | IAM actions required for the GetServicePrincipalName API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.opGetTemplate">opGetTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetTemplate API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.opGetTemplateGroupAccessControlEntry">opGetTemplateGroupAccessControlEntry</a></code> | <code>string[]</code> | IAM actions required for the GetTemplateGroupAccessControlEntry API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplate API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.UpdateTemplateGroupAccessControlEntry">UpdateTemplateGroupAccessControlEntry</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplateGroupAccessControlEntry API call. |

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnector API call.

---

##### `CreateDirectoryRegistration`<sup>Required</sup> <a name="CreateDirectoryRegistration" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.CreateDirectoryRegistration"></a>

```typescript
public readonly CreateDirectoryRegistration: string[];
```

- *Type:* string[]

IAM actions required for the CreateDirectoryRegistration API call.

---

##### `CreateServicePrincipalName`<sup>Required</sup> <a name="CreateServicePrincipalName" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.CreateServicePrincipalName"></a>

```typescript
public readonly CreateServicePrincipalName: string[];
```

- *Type:* string[]

IAM actions required for the CreateServicePrincipalName API call.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplate API call.

---

##### `CreateTemplateGroupAccessControlEntry`<sup>Required</sup> <a name="CreateTemplateGroupAccessControlEntry" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.CreateTemplateGroupAccessControlEntry"></a>

```typescript
public readonly CreateTemplateGroupAccessControlEntry: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplateGroupAccessControlEntry API call.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnector API call.

---

##### `DeleteDirectoryRegistration`<sup>Required</sup> <a name="DeleteDirectoryRegistration" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.DeleteDirectoryRegistration"></a>

```typescript
public readonly DeleteDirectoryRegistration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDirectoryRegistration API call.

---

##### `DeleteServicePrincipalName`<sup>Required</sup> <a name="DeleteServicePrincipalName" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.DeleteServicePrincipalName"></a>

```typescript
public readonly DeleteServicePrincipalName: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServicePrincipalName API call.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTemplate API call.

---

##### `DeleteTemplateGroupAccessControlEntry`<sup>Required</sup> <a name="DeleteTemplateGroupAccessControlEntry" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.DeleteTemplateGroupAccessControlEntry"></a>

```typescript
public readonly DeleteTemplateGroupAccessControlEntry: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTemplateGroupAccessControlEntry API call.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectors API call.

---

##### `ListDirectoryRegistrations`<sup>Required</sup> <a name="ListDirectoryRegistrations" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListDirectoryRegistrations"></a>

```typescript
public readonly ListDirectoryRegistrations: string[];
```

- *Type:* string[]

IAM actions required for the ListDirectoryRegistrations API call.

---

##### `ListServicePrincipalNames`<sup>Required</sup> <a name="ListServicePrincipalNames" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListServicePrincipalNames"></a>

```typescript
public readonly ListServicePrincipalNames: string[];
```

- *Type:* string[]

IAM actions required for the ListServicePrincipalNames API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTemplateGroupAccessControlEntries`<sup>Required</sup> <a name="ListTemplateGroupAccessControlEntries" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListTemplateGroupAccessControlEntries"></a>

```typescript
public readonly ListTemplateGroupAccessControlEntries: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplateGroupAccessControlEntries API call.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplates API call.

---

##### `opGetConnector`<sup>Required</sup> <a name="opGetConnector" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.opGetConnector"></a>

```typescript
public readonly opGetConnector: string[];
```

- *Type:* string[]

IAM actions required for the GetConnector API call.

---

##### `opGetDirectoryRegistration`<sup>Required</sup> <a name="opGetDirectoryRegistration" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.opGetDirectoryRegistration"></a>

```typescript
public readonly opGetDirectoryRegistration: string[];
```

- *Type:* string[]

IAM actions required for the GetDirectoryRegistration API call.

---

##### `opGetServicePrincipalName`<sup>Required</sup> <a name="opGetServicePrincipalName" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.opGetServicePrincipalName"></a>

```typescript
public readonly opGetServicePrincipalName: string[];
```

- *Type:* string[]

IAM actions required for the GetServicePrincipalName API call.

---

##### `opGetTemplate`<sup>Required</sup> <a name="opGetTemplate" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.opGetTemplate"></a>

```typescript
public readonly opGetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplate API call.

---

##### `opGetTemplateGroupAccessControlEntry`<sup>Required</sup> <a name="opGetTemplateGroupAccessControlEntry" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.opGetTemplateGroupAccessControlEntry"></a>

```typescript
public readonly opGetTemplateGroupAccessControlEntry: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplateGroupAccessControlEntry API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplate API call.

---

##### `UpdateTemplateGroupAccessControlEntry`<sup>Required</sup> <a name="UpdateTemplateGroupAccessControlEntry" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdOperations.property.UpdateTemplateGroupAccessControlEntry"></a>

```typescript
public readonly UpdateTemplateGroupAccessControlEntry: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplateGroupAccessControlEntry API call.

---

### PcaConnectorAdResources <a name="PcaConnectorAdResources" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources"></a>

ARN builders, validators, and parsers for pca-connector-ad resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.Initializer"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

new pca_connector_ad.PcaConnectorAdResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.connector">connector</a></code> | Builds an ARN for the Connector resource. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.directoryRegistration">directoryRegistration</a></code> | Builds an ARN for the DirectoryRegistration resource. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.isValidConnectorArn">isValidConnectorArn</a></code> | Validates whether a string is a valid ARN for the Connector resource. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.isValidDirectoryRegistrationArn">isValidDirectoryRegistrationArn</a></code> | Validates whether a string is a valid ARN for the DirectoryRegistration resource. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.isValidTemplateArn">isValidTemplateArn</a></code> | Validates whether a string is a valid ARN for the Template resource. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.parseConnectorArn">parseConnectorArn</a></code> | Parses a Connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.parseDirectoryRegistrationArn">parseDirectoryRegistrationArn</a></code> | Parses a DirectoryRegistration ARN into its components. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.parseTemplateArn">parseTemplateArn</a></code> | Parses a Template ARN into its components. |
| <code><a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.template">template</a></code> | Builds an ARN for the Template resource. |

---

##### `connector` <a name="connector" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.connector"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdResources.connector(props: PcaConnectorAdConnectorArnProps)
```

Builds an ARN for the Connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.connector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdConnectorArnProps">PcaConnectorAdConnectorArnProps</a>

---

##### `directoryRegistration` <a name="directoryRegistration" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.directoryRegistration"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdResources.directoryRegistration(props: PcaConnectorAdDirectoryRegistrationArnProps)
```

Builds an ARN for the DirectoryRegistration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.directoryRegistration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdDirectoryRegistrationArnProps">PcaConnectorAdDirectoryRegistrationArnProps</a>

---

##### `isValidConnectorArn` <a name="isValidConnectorArn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.isValidConnectorArn"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdResources.isValidConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the Connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.isValidConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDirectoryRegistrationArn` <a name="isValidDirectoryRegistrationArn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.isValidDirectoryRegistrationArn"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdResources.isValidDirectoryRegistrationArn(arn: string)
```

Validates whether a string is a valid ARN for the DirectoryRegistration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.isValidDirectoryRegistrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTemplateArn` <a name="isValidTemplateArn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.isValidTemplateArn"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdResources.isValidTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the Template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.isValidTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorArn` <a name="parseConnectorArn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.parseConnectorArn"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdResources.parseConnectorArn(arn: string)
```

Parses a Connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.parseConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDirectoryRegistrationArn` <a name="parseDirectoryRegistrationArn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.parseDirectoryRegistrationArn"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdResources.parseDirectoryRegistrationArn(arn: string)
```

Parses a DirectoryRegistration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.parseDirectoryRegistrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTemplateArn` <a name="parseTemplateArn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.parseTemplateArn"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdResources.parseTemplateArn(arn: string)
```

Parses a Template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.parseTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `template` <a name="template" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.template"></a>

```typescript
import { pca_connector_ad } from '@cdk_utils/iam'

pca_connector_ad.PcaConnectorAdResources.template(props: PcaConnectorAdTemplateArnProps)
```

Builds an ARN for the Template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pca_connector_ad.PcaConnectorAdResources.template.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pca_connector_ad.PcaConnectorAdTemplateArnProps">PcaConnectorAdTemplateArnProps</a>

---




