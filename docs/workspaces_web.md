# `workspaces_web` Submodule <a name="`workspaces_web` Submodule" id="@cdk_utils/iam.workspaces_web"></a>


## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWebBrowserSettingsArnComponents <a name="WorkspacesWebBrowserSettingsArnComponents" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnComponents"></a>

Parsed components of a browserSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnComponents.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebBrowserSettingsArnComponents: workspaces_web.WorkspacesWebBrowserSettingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnComponents.property.browserSettingsId">browserSettingsId</a></code> | <code>string</code> | The BrowserSettingsId component. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `browserSettingsId`<sup>Required</sup> <a name="browserSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnComponents.property.browserSettingsId"></a>

```typescript
public readonly browserSettingsId: string;
```

- *Type:* string

The BrowserSettingsId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkspacesWebBrowserSettingsArnProps <a name="WorkspacesWebBrowserSettingsArnProps" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps"></a>

Properties for building a browserSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebBrowserSettingsArnProps: workspaces_web.WorkspacesWebBrowserSettingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps.property.browserSettingsId">browserSettingsId</a></code> | <code>string</code> | The BrowserSettingsId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `browserSettingsId`<sup>Required</sup> <a name="browserSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps.property.browserSettingsId"></a>

```typescript
public readonly browserSettingsId: string;
```

- *Type:* string

The BrowserSettingsId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkspacesWebDataProtectionSettingsArnComponents <a name="WorkspacesWebDataProtectionSettingsArnComponents" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents"></a>

Parsed components of a dataProtectionSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebDataProtectionSettingsArnComponents: workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents.property.dataProtectionSettingsId">dataProtectionSettingsId</a></code> | <code>string</code> | The DataProtectionSettingsId component. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataProtectionSettingsId`<sup>Required</sup> <a name="dataProtectionSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents.property.dataProtectionSettingsId"></a>

```typescript
public readonly dataProtectionSettingsId: string;
```

- *Type:* string

The DataProtectionSettingsId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkspacesWebDataProtectionSettingsArnProps <a name="WorkspacesWebDataProtectionSettingsArnProps" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps"></a>

Properties for building a dataProtectionSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebDataProtectionSettingsArnProps: workspaces_web.WorkspacesWebDataProtectionSettingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps.property.dataProtectionSettingsId">dataProtectionSettingsId</a></code> | <code>string</code> | The DataProtectionSettingsId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataProtectionSettingsId`<sup>Required</sup> <a name="dataProtectionSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps.property.dataProtectionSettingsId"></a>

```typescript
public readonly dataProtectionSettingsId: string;
```

- *Type:* string

The DataProtectionSettingsId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkspacesWebIdentityProviderArnComponents <a name="WorkspacesWebIdentityProviderArnComponents" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents"></a>

Parsed components of a identityProvider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebIdentityProviderArnComponents: workspaces_web.WorkspacesWebIdentityProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | The IdentityProviderId component. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.property.portalId">portalId</a></code> | <code>string</code> | The PortalId component. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

The IdentityProviderId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

The PortalId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkspacesWebIdentityProviderArnProps <a name="WorkspacesWebIdentityProviderArnProps" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps"></a>

Properties for building a identityProvider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebIdentityProviderArnProps: workspaces_web.WorkspacesWebIdentityProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | The IdentityProviderId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.property.portalId">portalId</a></code> | <code>string</code> | The PortalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

The IdentityProviderId component of the ARN.

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

The PortalId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkspacesWebIPAccessSettingsArnComponents <a name="WorkspacesWebIPAccessSettingsArnComponents" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnComponents"></a>

Parsed components of a ipAccessSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnComponents.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebIPAccessSettingsArnComponents: workspaces_web.WorkspacesWebIPAccessSettingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnComponents.property.ipAccessSettingsId">ipAccessSettingsId</a></code> | <code>string</code> | The IpAccessSettingsId component. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ipAccessSettingsId`<sup>Required</sup> <a name="ipAccessSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnComponents.property.ipAccessSettingsId"></a>

```typescript
public readonly ipAccessSettingsId: string;
```

- *Type:* string

The IpAccessSettingsId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkspacesWebIPAccessSettingsArnProps <a name="WorkspacesWebIPAccessSettingsArnProps" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps"></a>

Properties for building a ipAccessSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebIPAccessSettingsArnProps: workspaces_web.WorkspacesWebIPAccessSettingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps.property.ipAccessSettingsId">ipAccessSettingsId</a></code> | <code>string</code> | The IpAccessSettingsId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ipAccessSettingsId`<sup>Required</sup> <a name="ipAccessSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps.property.ipAccessSettingsId"></a>

```typescript
public readonly ipAccessSettingsId: string;
```

- *Type:* string

The IpAccessSettingsId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkspacesWebNetworkSettingsArnComponents <a name="WorkspacesWebNetworkSettingsArnComponents" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnComponents"></a>

Parsed components of a networkSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnComponents.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebNetworkSettingsArnComponents: workspaces_web.WorkspacesWebNetworkSettingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnComponents.property.networkSettingsId">networkSettingsId</a></code> | <code>string</code> | The NetworkSettingsId component. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkSettingsId`<sup>Required</sup> <a name="networkSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnComponents.property.networkSettingsId"></a>

```typescript
public readonly networkSettingsId: string;
```

- *Type:* string

The NetworkSettingsId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkspacesWebNetworkSettingsArnProps <a name="WorkspacesWebNetworkSettingsArnProps" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps"></a>

Properties for building a networkSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebNetworkSettingsArnProps: workspaces_web.WorkspacesWebNetworkSettingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps.property.networkSettingsId">networkSettingsId</a></code> | <code>string</code> | The NetworkSettingsId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkSettingsId`<sup>Required</sup> <a name="networkSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps.property.networkSettingsId"></a>

```typescript
public readonly networkSettingsId: string;
```

- *Type:* string

The NetworkSettingsId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkspacesWebPortalArnComponents <a name="WorkspacesWebPortalArnComponents" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnComponents"></a>

Parsed components of a portal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnComponents.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebPortalArnComponents: workspaces_web.WorkspacesWebPortalArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnComponents.property.portalId">portalId</a></code> | <code>string</code> | The PortalId component. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnComponents.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

The PortalId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkspacesWebPortalArnProps <a name="WorkspacesWebPortalArnProps" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps"></a>

Properties for building a portal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebPortalArnProps: workspaces_web.WorkspacesWebPortalArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps.property.portalId">portalId</a></code> | <code>string</code> | The PortalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

The PortalId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkspacesWebSessionLoggerArnComponents <a name="WorkspacesWebSessionLoggerArnComponents" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnComponents"></a>

Parsed components of a sessionLogger ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnComponents.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebSessionLoggerArnComponents: workspaces_web.WorkspacesWebSessionLoggerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnComponents.property.sessionLoggerId">sessionLoggerId</a></code> | <code>string</code> | The SessionLoggerId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionLoggerId`<sup>Required</sup> <a name="sessionLoggerId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnComponents.property.sessionLoggerId"></a>

```typescript
public readonly sessionLoggerId: string;
```

- *Type:* string

The SessionLoggerId component.

---

### WorkspacesWebSessionLoggerArnProps <a name="WorkspacesWebSessionLoggerArnProps" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps"></a>

Properties for building a sessionLogger ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebSessionLoggerArnProps: workspaces_web.WorkspacesWebSessionLoggerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps.property.sessionLoggerId">sessionLoggerId</a></code> | <code>string</code> | The SessionLoggerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sessionLoggerId`<sup>Required</sup> <a name="sessionLoggerId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps.property.sessionLoggerId"></a>

```typescript
public readonly sessionLoggerId: string;
```

- *Type:* string

The SessionLoggerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkspacesWebTrustStoreArnComponents <a name="WorkspacesWebTrustStoreArnComponents" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnComponents"></a>

Parsed components of a trustStore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnComponents.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebTrustStoreArnComponents: workspaces_web.WorkspacesWebTrustStoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnComponents.property.trustStoreId">trustStoreId</a></code> | <code>string</code> | The TrustStoreId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `trustStoreId`<sup>Required</sup> <a name="trustStoreId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnComponents.property.trustStoreId"></a>

```typescript
public readonly trustStoreId: string;
```

- *Type:* string

The TrustStoreId component.

---

### WorkspacesWebTrustStoreArnProps <a name="WorkspacesWebTrustStoreArnProps" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps"></a>

Properties for building a trustStore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebTrustStoreArnProps: workspaces_web.WorkspacesWebTrustStoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps.property.trustStoreId">trustStoreId</a></code> | <code>string</code> | The TrustStoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `trustStoreId`<sup>Required</sup> <a name="trustStoreId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps.property.trustStoreId"></a>

```typescript
public readonly trustStoreId: string;
```

- *Type:* string

The TrustStoreId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkspacesWebUserAccessLoggingSettingsArnComponents <a name="WorkspacesWebUserAccessLoggingSettingsArnComponents" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents"></a>

Parsed components of a userAccessLoggingSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebUserAccessLoggingSettingsArnComponents: workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents.property.userAccessLoggingSettingsId">userAccessLoggingSettingsId</a></code> | <code>string</code> | The UserAccessLoggingSettingsId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userAccessLoggingSettingsId`<sup>Required</sup> <a name="userAccessLoggingSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnComponents.property.userAccessLoggingSettingsId"></a>

```typescript
public readonly userAccessLoggingSettingsId: string;
```

- *Type:* string

The UserAccessLoggingSettingsId component.

---

### WorkspacesWebUserAccessLoggingSettingsArnProps <a name="WorkspacesWebUserAccessLoggingSettingsArnProps" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps"></a>

Properties for building a userAccessLoggingSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebUserAccessLoggingSettingsArnProps: workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps.property.userAccessLoggingSettingsId">userAccessLoggingSettingsId</a></code> | <code>string</code> | The UserAccessLoggingSettingsId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `userAccessLoggingSettingsId`<sup>Required</sup> <a name="userAccessLoggingSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps.property.userAccessLoggingSettingsId"></a>

```typescript
public readonly userAccessLoggingSettingsId: string;
```

- *Type:* string

The UserAccessLoggingSettingsId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkspacesWebUserSettingsArnComponents <a name="WorkspacesWebUserSettingsArnComponents" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnComponents"></a>

Parsed components of a userSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnComponents.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebUserSettingsArnComponents: workspaces_web.WorkspacesWebUserSettingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnComponents.property.userSettingsId">userSettingsId</a></code> | <code>string</code> | The UserSettingsId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userSettingsId`<sup>Required</sup> <a name="userSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnComponents.property.userSettingsId"></a>

```typescript
public readonly userSettingsId: string;
```

- *Type:* string

The UserSettingsId component.

---

### WorkspacesWebUserSettingsArnProps <a name="WorkspacesWebUserSettingsArnProps" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps"></a>

Properties for building a userSettings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

const workspacesWebUserSettingsArnProps: workspaces_web.WorkspacesWebUserSettingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps.property.userSettingsId">userSettingsId</a></code> | <code>string</code> | The UserSettingsId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `userSettingsId`<sup>Required</sup> <a name="userSettingsId" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps.property.userSettingsId"></a>

```typescript
public readonly userSettingsId: string;
```

- *Type:* string

The UserSettingsId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWebActions <a name="WorkspacesWebActions" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions"></a>

IAM action constants for the workspaces-web service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

new workspaces_web.WorkspacesWebActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetBrowserSettings">actionGetBrowserSettings</a></code> | <code>string</code> | [Read] workspaces-web:GetBrowserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetDataProtectionSettings">actionGetDataProtectionSettings</a></code> | <code>string</code> | [Read] workspaces-web:GetDataProtectionSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetIdentityProvider">actionGetIdentityProvider</a></code> | <code>string</code> | [Read] workspaces-web:GetIdentityProvider. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetIpAccessSettings">actionGetIpAccessSettings</a></code> | <code>string</code> | [Read] workspaces-web:GetIpAccessSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetNetworkSettings">actionGetNetworkSettings</a></code> | <code>string</code> | [Read] workspaces-web:GetNetworkSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetPortal">actionGetPortal</a></code> | <code>string</code> | [Read] workspaces-web:GetPortal. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetPortalServiceProviderMetadata">actionGetPortalServiceProviderMetadata</a></code> | <code>string</code> | [Read] workspaces-web:GetPortalServiceProviderMetadata. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] workspaces-web:GetSession. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetSessionLogger">actionGetSessionLogger</a></code> | <code>string</code> | [Read] workspaces-web:GetSessionLogger. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetTrustStore">actionGetTrustStore</a></code> | <code>string</code> | [Read] workspaces-web:GetTrustStore. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetTrustStoreCertificate">actionGetTrustStoreCertificate</a></code> | <code>string</code> | [Read] workspaces-web:GetTrustStoreCertificate. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetUserAccessLoggingSettings">actionGetUserAccessLoggingSettings</a></code> | <code>string</code> | [Read] workspaces-web:GetUserAccessLoggingSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetUserSettings">actionGetUserSettings</a></code> | <code>string</code> | [Read] workspaces-web:GetUserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateBrowserSettings">AssociateBrowserSettings</a></code> | <code>string</code> | [Write] workspaces-web:AssociateBrowserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateDataProtectionSettings">AssociateDataProtectionSettings</a></code> | <code>string</code> | [Write] workspaces-web:AssociateDataProtectionSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateIpAccessSettings">AssociateIpAccessSettings</a></code> | <code>string</code> | [Write] workspaces-web:AssociateIpAccessSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateNetworkSettings">AssociateNetworkSettings</a></code> | <code>string</code> | [Write] workspaces-web:AssociateNetworkSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateSessionLogger">AssociateSessionLogger</a></code> | <code>string</code> | [Write] workspaces-web:AssociateSessionLogger. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateTrustStore">AssociateTrustStore</a></code> | <code>string</code> | [Write] workspaces-web:AssociateTrustStore. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateUserAccessLoggingSettings">AssociateUserAccessLoggingSettings</a></code> | <code>string</code> | [Write] workspaces-web:AssociateUserAccessLoggingSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateUserSettings">AssociateUserSettings</a></code> | <code>string</code> | [Write] workspaces-web:AssociateUserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateBrowserSettings">CreateBrowserSettings</a></code> | <code>string</code> | [Write] workspaces-web:CreateBrowserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateDataProtectionSettings">CreateDataProtectionSettings</a></code> | <code>string</code> | [Write] workspaces-web:CreateDataProtectionSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateIdentityProvider">CreateIdentityProvider</a></code> | <code>string</code> | [Write] workspaces-web:CreateIdentityProvider. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateIpAccessSettings">CreateIpAccessSettings</a></code> | <code>string</code> | [Write] workspaces-web:CreateIpAccessSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateNetworkSettings">CreateNetworkSettings</a></code> | <code>string</code> | [Write] workspaces-web:CreateNetworkSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreatePortal">CreatePortal</a></code> | <code>string</code> | [Write] workspaces-web:CreatePortal. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateSessionLogger">CreateSessionLogger</a></code> | <code>string</code> | [Write] workspaces-web:CreateSessionLogger. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateTrustStore">CreateTrustStore</a></code> | <code>string</code> | [Write] workspaces-web:CreateTrustStore. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateUserAccessLoggingSettings">CreateUserAccessLoggingSettings</a></code> | <code>string</code> | [Write] workspaces-web:CreateUserAccessLoggingSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateUserSettings">CreateUserSettings</a></code> | <code>string</code> | [Write] workspaces-web:CreateUserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteBrowserSettings">DeleteBrowserSettings</a></code> | <code>string</code> | [Write] workspaces-web:DeleteBrowserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteDataProtectionSettings">DeleteDataProtectionSettings</a></code> | <code>string</code> | [Write] workspaces-web:DeleteDataProtectionSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteIdentityProvider">DeleteIdentityProvider</a></code> | <code>string</code> | [Write] workspaces-web:DeleteIdentityProvider. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteIpAccessSettings">DeleteIpAccessSettings</a></code> | <code>string</code> | [Write] workspaces-web:DeleteIpAccessSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteNetworkSettings">DeleteNetworkSettings</a></code> | <code>string</code> | [Write] workspaces-web:DeleteNetworkSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeletePortal">DeletePortal</a></code> | <code>string</code> | [Write] workspaces-web:DeletePortal. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteSessionLogger">DeleteSessionLogger</a></code> | <code>string</code> | [Write] workspaces-web:DeleteSessionLogger. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteTrustStore">DeleteTrustStore</a></code> | <code>string</code> | [Write] workspaces-web:DeleteTrustStore. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteUserAccessLoggingSettings">DeleteUserAccessLoggingSettings</a></code> | <code>string</code> | [Write] workspaces-web:DeleteUserAccessLoggingSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteUserSettings">DeleteUserSettings</a></code> | <code>string</code> | [Write] workspaces-web:DeleteUserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateBrowserSettings">DisassociateBrowserSettings</a></code> | <code>string</code> | [Write] workspaces-web:DisassociateBrowserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateDataProtectionSettings">DisassociateDataProtectionSettings</a></code> | <code>string</code> | [Write] workspaces-web:DisassociateDataProtectionSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateIpAccessSettings">DisassociateIpAccessSettings</a></code> | <code>string</code> | [Write] workspaces-web:DisassociateIpAccessSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateNetworkSettings">DisassociateNetworkSettings</a></code> | <code>string</code> | [Write] workspaces-web:DisassociateNetworkSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateSessionLogger">DisassociateSessionLogger</a></code> | <code>string</code> | [Write] workspaces-web:DisassociateSessionLogger. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateTrustStore">DisassociateTrustStore</a></code> | <code>string</code> | [Write] workspaces-web:DisassociateTrustStore. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateUserAccessLoggingSettings">DisassociateUserAccessLoggingSettings</a></code> | <code>string</code> | [Write] workspaces-web:DisassociateUserAccessLoggingSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateUserSettings">DisassociateUserSettings</a></code> | <code>string</code> | [Write] workspaces-web:DisassociateUserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ExpireSession">ExpireSession</a></code> | <code>string</code> | [Write] workspaces-web:ExpireSession. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListBrowserSettings">ListBrowserSettings</a></code> | <code>string</code> | [Read] workspaces-web:ListBrowserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListDataProtectionSettings">ListDataProtectionSettings</a></code> | <code>string</code> | [Read] workspaces-web:ListDataProtectionSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListIdentityProviders">ListIdentityProviders</a></code> | <code>string</code> | [Read] workspaces-web:ListIdentityProviders. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListIpAccessSettings">ListIpAccessSettings</a></code> | <code>string</code> | [Read] workspaces-web:ListIpAccessSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListNetworkSettings">ListNetworkSettings</a></code> | <code>string</code> | [Read] workspaces-web:ListNetworkSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListPortals">ListPortals</a></code> | <code>string</code> | [Read] workspaces-web:ListPortals. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListSessionLoggers">ListSessionLoggers</a></code> | <code>string</code> | [Read] workspaces-web:ListSessionLoggers. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [Read] workspaces-web:ListSessions. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] workspaces-web:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListTrustStoreCertificates">ListTrustStoreCertificates</a></code> | <code>string</code> | [Read] workspaces-web:ListTrustStoreCertificates. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListTrustStores">ListTrustStores</a></code> | <code>string</code> | [Read] workspaces-web:ListTrustStores. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListUserAccessLoggingSettings">ListUserAccessLoggingSettings</a></code> | <code>string</code> | [Read] workspaces-web:ListUserAccessLoggingSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListUserSettings">ListUserSettings</a></code> | <code>string</code> | [Read] workspaces-web:ListUserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] workspaces-web:TagResource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] workspaces-web:UntagResource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateBrowserSettings">UpdateBrowserSettings</a></code> | <code>string</code> | [Write] workspaces-web:UpdateBrowserSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateDataProtectionSettings">UpdateDataProtectionSettings</a></code> | <code>string</code> | [Write] workspaces-web:UpdateDataProtectionSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateIdentityProvider">UpdateIdentityProvider</a></code> | <code>string</code> | [Write] workspaces-web:UpdateIdentityProvider. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateIpAccessSettings">UpdateIpAccessSettings</a></code> | <code>string</code> | [Write] workspaces-web:UpdateIpAccessSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateNetworkSettings">UpdateNetworkSettings</a></code> | <code>string</code> | [Write] workspaces-web:UpdateNetworkSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdatePortal">UpdatePortal</a></code> | <code>string</code> | [Write] workspaces-web:UpdatePortal. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateSessionLogger">UpdateSessionLogger</a></code> | <code>string</code> | [Write] workspaces-web:UpdateSessionLogger. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateTrustStore">UpdateTrustStore</a></code> | <code>string</code> | [Write] workspaces-web:UpdateTrustStore. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateUserAccessLoggingSettings">UpdateUserAccessLoggingSettings</a></code> | <code>string</code> | [Write] workspaces-web:UpdateUserAccessLoggingSettings. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateUserSettings">UpdateUserSettings</a></code> | <code>string</code> | [Write] workspaces-web:UpdateUserSettings. |

---

##### `actionGetBrowserSettings`<sup>Required</sup> <a name="actionGetBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetBrowserSettings"></a>

```typescript
public readonly actionGetBrowserSettings: string;
```

- *Type:* string

[Read] workspaces-web:GetBrowserSettings.

---

##### `actionGetDataProtectionSettings`<sup>Required</sup> <a name="actionGetDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetDataProtectionSettings"></a>

```typescript
public readonly actionGetDataProtectionSettings: string;
```

- *Type:* string

[Read] workspaces-web:GetDataProtectionSettings.

---

##### `actionGetIdentityProvider`<sup>Required</sup> <a name="actionGetIdentityProvider" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetIdentityProvider"></a>

```typescript
public readonly actionGetIdentityProvider: string;
```

- *Type:* string

[Read] workspaces-web:GetIdentityProvider.

---

##### `actionGetIpAccessSettings`<sup>Required</sup> <a name="actionGetIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetIpAccessSettings"></a>

```typescript
public readonly actionGetIpAccessSettings: string;
```

- *Type:* string

[Read] workspaces-web:GetIpAccessSettings.

---

##### `actionGetNetworkSettings`<sup>Required</sup> <a name="actionGetNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetNetworkSettings"></a>

```typescript
public readonly actionGetNetworkSettings: string;
```

- *Type:* string

[Read] workspaces-web:GetNetworkSettings.

---

##### `actionGetPortal`<sup>Required</sup> <a name="actionGetPortal" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetPortal"></a>

```typescript
public readonly actionGetPortal: string;
```

- *Type:* string

[Read] workspaces-web:GetPortal.

---

##### `actionGetPortalServiceProviderMetadata`<sup>Required</sup> <a name="actionGetPortalServiceProviderMetadata" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetPortalServiceProviderMetadata"></a>

```typescript
public readonly actionGetPortalServiceProviderMetadata: string;
```

- *Type:* string

[Read] workspaces-web:GetPortalServiceProviderMetadata.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] workspaces-web:GetSession.

---

##### `actionGetSessionLogger`<sup>Required</sup> <a name="actionGetSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetSessionLogger"></a>

```typescript
public readonly actionGetSessionLogger: string;
```

- *Type:* string

[Read] workspaces-web:GetSessionLogger.

---

##### `actionGetTrustStore`<sup>Required</sup> <a name="actionGetTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetTrustStore"></a>

```typescript
public readonly actionGetTrustStore: string;
```

- *Type:* string

[Read] workspaces-web:GetTrustStore.

---

##### `actionGetTrustStoreCertificate`<sup>Required</sup> <a name="actionGetTrustStoreCertificate" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetTrustStoreCertificate"></a>

```typescript
public readonly actionGetTrustStoreCertificate: string;
```

- *Type:* string

[Read] workspaces-web:GetTrustStoreCertificate.

---

##### `actionGetUserAccessLoggingSettings`<sup>Required</sup> <a name="actionGetUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetUserAccessLoggingSettings"></a>

```typescript
public readonly actionGetUserAccessLoggingSettings: string;
```

- *Type:* string

[Read] workspaces-web:GetUserAccessLoggingSettings.

---

##### `actionGetUserSettings`<sup>Required</sup> <a name="actionGetUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.actionGetUserSettings"></a>

```typescript
public readonly actionGetUserSettings: string;
```

- *Type:* string

[Read] workspaces-web:GetUserSettings.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateBrowserSettings`<sup>Required</sup> <a name="AssociateBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateBrowserSettings"></a>

```typescript
public readonly AssociateBrowserSettings: string;
```

- *Type:* string

[Write] workspaces-web:AssociateBrowserSettings.

---

##### `AssociateDataProtectionSettings`<sup>Required</sup> <a name="AssociateDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateDataProtectionSettings"></a>

```typescript
public readonly AssociateDataProtectionSettings: string;
```

- *Type:* string

[Write] workspaces-web:AssociateDataProtectionSettings.

---

##### `AssociateIpAccessSettings`<sup>Required</sup> <a name="AssociateIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateIpAccessSettings"></a>

```typescript
public readonly AssociateIpAccessSettings: string;
```

- *Type:* string

[Write] workspaces-web:AssociateIpAccessSettings.

---

##### `AssociateNetworkSettings`<sup>Required</sup> <a name="AssociateNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateNetworkSettings"></a>

```typescript
public readonly AssociateNetworkSettings: string;
```

- *Type:* string

[Write] workspaces-web:AssociateNetworkSettings.

---

##### `AssociateSessionLogger`<sup>Required</sup> <a name="AssociateSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateSessionLogger"></a>

```typescript
public readonly AssociateSessionLogger: string;
```

- *Type:* string

[Write] workspaces-web:AssociateSessionLogger.

---

##### `AssociateTrustStore`<sup>Required</sup> <a name="AssociateTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateTrustStore"></a>

```typescript
public readonly AssociateTrustStore: string;
```

- *Type:* string

[Write] workspaces-web:AssociateTrustStore.

---

##### `AssociateUserAccessLoggingSettings`<sup>Required</sup> <a name="AssociateUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateUserAccessLoggingSettings"></a>

```typescript
public readonly AssociateUserAccessLoggingSettings: string;
```

- *Type:* string

[Write] workspaces-web:AssociateUserAccessLoggingSettings.

---

##### `AssociateUserSettings`<sup>Required</sup> <a name="AssociateUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.AssociateUserSettings"></a>

```typescript
public readonly AssociateUserSettings: string;
```

- *Type:* string

[Write] workspaces-web:AssociateUserSettings.

---

##### `CreateBrowserSettings`<sup>Required</sup> <a name="CreateBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateBrowserSettings"></a>

```typescript
public readonly CreateBrowserSettings: string;
```

- *Type:* string

[Write] workspaces-web:CreateBrowserSettings.

---

##### `CreateDataProtectionSettings`<sup>Required</sup> <a name="CreateDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateDataProtectionSettings"></a>

```typescript
public readonly CreateDataProtectionSettings: string;
```

- *Type:* string

[Write] workspaces-web:CreateDataProtectionSettings.

---

##### `CreateIdentityProvider`<sup>Required</sup> <a name="CreateIdentityProvider" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateIdentityProvider"></a>

```typescript
public readonly CreateIdentityProvider: string;
```

- *Type:* string

[Write] workspaces-web:CreateIdentityProvider.

---

##### `CreateIpAccessSettings`<sup>Required</sup> <a name="CreateIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateIpAccessSettings"></a>

```typescript
public readonly CreateIpAccessSettings: string;
```

- *Type:* string

[Write] workspaces-web:CreateIpAccessSettings.

---

##### `CreateNetworkSettings`<sup>Required</sup> <a name="CreateNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateNetworkSettings"></a>

```typescript
public readonly CreateNetworkSettings: string;
```

- *Type:* string

[Write] workspaces-web:CreateNetworkSettings.

---

##### `CreatePortal`<sup>Required</sup> <a name="CreatePortal" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreatePortal"></a>

```typescript
public readonly CreatePortal: string;
```

- *Type:* string

[Write] workspaces-web:CreatePortal.

---

##### `CreateSessionLogger`<sup>Required</sup> <a name="CreateSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateSessionLogger"></a>

```typescript
public readonly CreateSessionLogger: string;
```

- *Type:* string

[Write] workspaces-web:CreateSessionLogger.

---

##### `CreateTrustStore`<sup>Required</sup> <a name="CreateTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateTrustStore"></a>

```typescript
public readonly CreateTrustStore: string;
```

- *Type:* string

[Write] workspaces-web:CreateTrustStore.

---

##### `CreateUserAccessLoggingSettings`<sup>Required</sup> <a name="CreateUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateUserAccessLoggingSettings"></a>

```typescript
public readonly CreateUserAccessLoggingSettings: string;
```

- *Type:* string

[Write] workspaces-web:CreateUserAccessLoggingSettings.

---

##### `CreateUserSettings`<sup>Required</sup> <a name="CreateUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.CreateUserSettings"></a>

```typescript
public readonly CreateUserSettings: string;
```

- *Type:* string

[Write] workspaces-web:CreateUserSettings.

---

##### `DeleteBrowserSettings`<sup>Required</sup> <a name="DeleteBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteBrowserSettings"></a>

```typescript
public readonly DeleteBrowserSettings: string;
```

- *Type:* string

[Write] workspaces-web:DeleteBrowserSettings.

---

##### `DeleteDataProtectionSettings`<sup>Required</sup> <a name="DeleteDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteDataProtectionSettings"></a>

```typescript
public readonly DeleteDataProtectionSettings: string;
```

- *Type:* string

[Write] workspaces-web:DeleteDataProtectionSettings.

---

##### `DeleteIdentityProvider`<sup>Required</sup> <a name="DeleteIdentityProvider" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteIdentityProvider"></a>

```typescript
public readonly DeleteIdentityProvider: string;
```

- *Type:* string

[Write] workspaces-web:DeleteIdentityProvider.

---

##### `DeleteIpAccessSettings`<sup>Required</sup> <a name="DeleteIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteIpAccessSettings"></a>

```typescript
public readonly DeleteIpAccessSettings: string;
```

- *Type:* string

[Write] workspaces-web:DeleteIpAccessSettings.

---

##### `DeleteNetworkSettings`<sup>Required</sup> <a name="DeleteNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteNetworkSettings"></a>

```typescript
public readonly DeleteNetworkSettings: string;
```

- *Type:* string

[Write] workspaces-web:DeleteNetworkSettings.

---

##### `DeletePortal`<sup>Required</sup> <a name="DeletePortal" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeletePortal"></a>

```typescript
public readonly DeletePortal: string;
```

- *Type:* string

[Write] workspaces-web:DeletePortal.

---

##### `DeleteSessionLogger`<sup>Required</sup> <a name="DeleteSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteSessionLogger"></a>

```typescript
public readonly DeleteSessionLogger: string;
```

- *Type:* string

[Write] workspaces-web:DeleteSessionLogger.

---

##### `DeleteTrustStore`<sup>Required</sup> <a name="DeleteTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteTrustStore"></a>

```typescript
public readonly DeleteTrustStore: string;
```

- *Type:* string

[Write] workspaces-web:DeleteTrustStore.

---

##### `DeleteUserAccessLoggingSettings`<sup>Required</sup> <a name="DeleteUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteUserAccessLoggingSettings"></a>

```typescript
public readonly DeleteUserAccessLoggingSettings: string;
```

- *Type:* string

[Write] workspaces-web:DeleteUserAccessLoggingSettings.

---

##### `DeleteUserSettings`<sup>Required</sup> <a name="DeleteUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DeleteUserSettings"></a>

```typescript
public readonly DeleteUserSettings: string;
```

- *Type:* string

[Write] workspaces-web:DeleteUserSettings.

---

##### `DisassociateBrowserSettings`<sup>Required</sup> <a name="DisassociateBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateBrowserSettings"></a>

```typescript
public readonly DisassociateBrowserSettings: string;
```

- *Type:* string

[Write] workspaces-web:DisassociateBrowserSettings.

---

##### `DisassociateDataProtectionSettings`<sup>Required</sup> <a name="DisassociateDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateDataProtectionSettings"></a>

```typescript
public readonly DisassociateDataProtectionSettings: string;
```

- *Type:* string

[Write] workspaces-web:DisassociateDataProtectionSettings.

---

##### `DisassociateIpAccessSettings`<sup>Required</sup> <a name="DisassociateIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateIpAccessSettings"></a>

```typescript
public readonly DisassociateIpAccessSettings: string;
```

- *Type:* string

[Write] workspaces-web:DisassociateIpAccessSettings.

---

##### `DisassociateNetworkSettings`<sup>Required</sup> <a name="DisassociateNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateNetworkSettings"></a>

```typescript
public readonly DisassociateNetworkSettings: string;
```

- *Type:* string

[Write] workspaces-web:DisassociateNetworkSettings.

---

##### `DisassociateSessionLogger`<sup>Required</sup> <a name="DisassociateSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateSessionLogger"></a>

```typescript
public readonly DisassociateSessionLogger: string;
```

- *Type:* string

[Write] workspaces-web:DisassociateSessionLogger.

---

##### `DisassociateTrustStore`<sup>Required</sup> <a name="DisassociateTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateTrustStore"></a>

```typescript
public readonly DisassociateTrustStore: string;
```

- *Type:* string

[Write] workspaces-web:DisassociateTrustStore.

---

##### `DisassociateUserAccessLoggingSettings`<sup>Required</sup> <a name="DisassociateUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateUserAccessLoggingSettings"></a>

```typescript
public readonly DisassociateUserAccessLoggingSettings: string;
```

- *Type:* string

[Write] workspaces-web:DisassociateUserAccessLoggingSettings.

---

##### `DisassociateUserSettings`<sup>Required</sup> <a name="DisassociateUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.DisassociateUserSettings"></a>

```typescript
public readonly DisassociateUserSettings: string;
```

- *Type:* string

[Write] workspaces-web:DisassociateUserSettings.

---

##### `ExpireSession`<sup>Required</sup> <a name="ExpireSession" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ExpireSession"></a>

```typescript
public readonly ExpireSession: string;
```

- *Type:* string

[Write] workspaces-web:ExpireSession.

---

##### `ListBrowserSettings`<sup>Required</sup> <a name="ListBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListBrowserSettings"></a>

```typescript
public readonly ListBrowserSettings: string;
```

- *Type:* string

[Read] workspaces-web:ListBrowserSettings.

---

##### `ListDataProtectionSettings`<sup>Required</sup> <a name="ListDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListDataProtectionSettings"></a>

```typescript
public readonly ListDataProtectionSettings: string;
```

- *Type:* string

[Read] workspaces-web:ListDataProtectionSettings.

---

##### `ListIdentityProviders`<sup>Required</sup> <a name="ListIdentityProviders" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListIdentityProviders"></a>

```typescript
public readonly ListIdentityProviders: string;
```

- *Type:* string

[Read] workspaces-web:ListIdentityProviders.

---

##### `ListIpAccessSettings`<sup>Required</sup> <a name="ListIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListIpAccessSettings"></a>

```typescript
public readonly ListIpAccessSettings: string;
```

- *Type:* string

[Read] workspaces-web:ListIpAccessSettings.

---

##### `ListNetworkSettings`<sup>Required</sup> <a name="ListNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListNetworkSettings"></a>

```typescript
public readonly ListNetworkSettings: string;
```

- *Type:* string

[Read] workspaces-web:ListNetworkSettings.

---

##### `ListPortals`<sup>Required</sup> <a name="ListPortals" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListPortals"></a>

```typescript
public readonly ListPortals: string;
```

- *Type:* string

[Read] workspaces-web:ListPortals.

---

##### `ListSessionLoggers`<sup>Required</sup> <a name="ListSessionLoggers" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListSessionLoggers"></a>

```typescript
public readonly ListSessionLoggers: string;
```

- *Type:* string

[Read] workspaces-web:ListSessionLoggers.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[Read] workspaces-web:ListSessions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] workspaces-web:ListTagsForResource.

---

##### `ListTrustStoreCertificates`<sup>Required</sup> <a name="ListTrustStoreCertificates" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListTrustStoreCertificates"></a>

```typescript
public readonly ListTrustStoreCertificates: string;
```

- *Type:* string

[Read] workspaces-web:ListTrustStoreCertificates.

---

##### `ListTrustStores`<sup>Required</sup> <a name="ListTrustStores" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListTrustStores"></a>

```typescript
public readonly ListTrustStores: string;
```

- *Type:* string

[Read] workspaces-web:ListTrustStores.

---

##### `ListUserAccessLoggingSettings`<sup>Required</sup> <a name="ListUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListUserAccessLoggingSettings"></a>

```typescript
public readonly ListUserAccessLoggingSettings: string;
```

- *Type:* string

[Read] workspaces-web:ListUserAccessLoggingSettings.

---

##### `ListUserSettings`<sup>Required</sup> <a name="ListUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.ListUserSettings"></a>

```typescript
public readonly ListUserSettings: string;
```

- *Type:* string

[Read] workspaces-web:ListUserSettings.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] workspaces-web:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] workspaces-web:UntagResource.

---

##### `UpdateBrowserSettings`<sup>Required</sup> <a name="UpdateBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateBrowserSettings"></a>

```typescript
public readonly UpdateBrowserSettings: string;
```

- *Type:* string

[Write] workspaces-web:UpdateBrowserSettings.

---

##### `UpdateDataProtectionSettings`<sup>Required</sup> <a name="UpdateDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateDataProtectionSettings"></a>

```typescript
public readonly UpdateDataProtectionSettings: string;
```

- *Type:* string

[Write] workspaces-web:UpdateDataProtectionSettings.

---

##### `UpdateIdentityProvider`<sup>Required</sup> <a name="UpdateIdentityProvider" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateIdentityProvider"></a>

```typescript
public readonly UpdateIdentityProvider: string;
```

- *Type:* string

[Write] workspaces-web:UpdateIdentityProvider.

---

##### `UpdateIpAccessSettings`<sup>Required</sup> <a name="UpdateIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateIpAccessSettings"></a>

```typescript
public readonly UpdateIpAccessSettings: string;
```

- *Type:* string

[Write] workspaces-web:UpdateIpAccessSettings.

---

##### `UpdateNetworkSettings`<sup>Required</sup> <a name="UpdateNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateNetworkSettings"></a>

```typescript
public readonly UpdateNetworkSettings: string;
```

- *Type:* string

[Write] workspaces-web:UpdateNetworkSettings.

---

##### `UpdatePortal`<sup>Required</sup> <a name="UpdatePortal" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdatePortal"></a>

```typescript
public readonly UpdatePortal: string;
```

- *Type:* string

[Write] workspaces-web:UpdatePortal.

---

##### `UpdateSessionLogger`<sup>Required</sup> <a name="UpdateSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateSessionLogger"></a>

```typescript
public readonly UpdateSessionLogger: string;
```

- *Type:* string

[Write] workspaces-web:UpdateSessionLogger.

---

##### `UpdateTrustStore`<sup>Required</sup> <a name="UpdateTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateTrustStore"></a>

```typescript
public readonly UpdateTrustStore: string;
```

- *Type:* string

[Write] workspaces-web:UpdateTrustStore.

---

##### `UpdateUserAccessLoggingSettings`<sup>Required</sup> <a name="UpdateUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateUserAccessLoggingSettings"></a>

```typescript
public readonly UpdateUserAccessLoggingSettings: string;
```

- *Type:* string

[Write] workspaces-web:UpdateUserAccessLoggingSettings.

---

##### `UpdateUserSettings`<sup>Required</sup> <a name="UpdateUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebActions.property.UpdateUserSettings"></a>

```typescript
public readonly UpdateUserSettings: string;
```

- *Type:* string

[Write] workspaces-web:UpdateUserSettings.

---

### WorkspacesWebConditions <a name="WorkspacesWebConditions" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions"></a>

Condition key constants and builders for workspaces-web.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

new workspaces_web.WorkspacesWebConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.requestTag"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.resourceTag"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.tagKeys"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateBrowserSettingsConditionKeys">CreateBrowserSettingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBrowserSettings action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateDataProtectionSettingsConditionKeys">CreateDataProtectionSettingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataProtectionSettings action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateIdentityProviderConditionKeys">CreateIdentityProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIdentityProvider action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateIpAccessSettingsConditionKeys">CreateIpAccessSettingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIpAccessSettings action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateNetworkSettingsConditionKeys">CreateNetworkSettingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNetworkSettings action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreatePortalConditionKeys">CreatePortalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePortal action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateSessionLoggerConditionKeys">CreateSessionLoggerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSessionLogger action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateTrustStoreConditionKeys">CreateTrustStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTrustStore action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateUserAccessLoggingSettingsConditionKeys">CreateUserAccessLoggingSettingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUserAccessLoggingSettings action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateUserSettingsConditionKeys">CreateUserSettingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUserSettings action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateBrowserSettingsConditionKeys`<sup>Required</sup> <a name="CreateBrowserSettingsConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateBrowserSettingsConditionKeys"></a>

```typescript
public readonly CreateBrowserSettingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBrowserSettings action.

---

##### `CreateDataProtectionSettingsConditionKeys`<sup>Required</sup> <a name="CreateDataProtectionSettingsConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateDataProtectionSettingsConditionKeys"></a>

```typescript
public readonly CreateDataProtectionSettingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataProtectionSettings action.

---

##### `CreateIdentityProviderConditionKeys`<sup>Required</sup> <a name="CreateIdentityProviderConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateIdentityProviderConditionKeys"></a>

```typescript
public readonly CreateIdentityProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIdentityProvider action.

---

##### `CreateIpAccessSettingsConditionKeys`<sup>Required</sup> <a name="CreateIpAccessSettingsConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateIpAccessSettingsConditionKeys"></a>

```typescript
public readonly CreateIpAccessSettingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIpAccessSettings action.

---

##### `CreateNetworkSettingsConditionKeys`<sup>Required</sup> <a name="CreateNetworkSettingsConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateNetworkSettingsConditionKeys"></a>

```typescript
public readonly CreateNetworkSettingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNetworkSettings action.

---

##### `CreatePortalConditionKeys`<sup>Required</sup> <a name="CreatePortalConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreatePortalConditionKeys"></a>

```typescript
public readonly CreatePortalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePortal action.

---

##### `CreateSessionLoggerConditionKeys`<sup>Required</sup> <a name="CreateSessionLoggerConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateSessionLoggerConditionKeys"></a>

```typescript
public readonly CreateSessionLoggerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSessionLogger action.

---

##### `CreateTrustStoreConditionKeys`<sup>Required</sup> <a name="CreateTrustStoreConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateTrustStoreConditionKeys"></a>

```typescript
public readonly CreateTrustStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTrustStore action.

---

##### `CreateUserAccessLoggingSettingsConditionKeys`<sup>Required</sup> <a name="CreateUserAccessLoggingSettingsConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateUserAccessLoggingSettingsConditionKeys"></a>

```typescript
public readonly CreateUserAccessLoggingSettingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUserAccessLoggingSettings action.

---

##### `CreateUserSettingsConditionKeys`<sup>Required</sup> <a name="CreateUserSettingsConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.CreateUserSettingsConditionKeys"></a>

```typescript
public readonly CreateUserSettingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUserSettings action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.workspaces_web.WorkspacesWebConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### WorkspacesWebOperations <a name="WorkspacesWebOperations" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations"></a>

API operation to required IAM actions mapping for workspaces-web.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

new workspaces_web.WorkspacesWebOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateBrowserSettings">AssociateBrowserSettings</a></code> | <code>string[]</code> | IAM actions required for the AssociateBrowserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateDataProtectionSettings">AssociateDataProtectionSettings</a></code> | <code>string[]</code> | IAM actions required for the AssociateDataProtectionSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateIpAccessSettings">AssociateIpAccessSettings</a></code> | <code>string[]</code> | IAM actions required for the AssociateIpAccessSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateNetworkSettings">AssociateNetworkSettings</a></code> | <code>string[]</code> | IAM actions required for the AssociateNetworkSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateSessionLogger">AssociateSessionLogger</a></code> | <code>string[]</code> | IAM actions required for the AssociateSessionLogger API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateTrustStore">AssociateTrustStore</a></code> | <code>string[]</code> | IAM actions required for the AssociateTrustStore API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateUserAccessLoggingSettings">AssociateUserAccessLoggingSettings</a></code> | <code>string[]</code> | IAM actions required for the AssociateUserAccessLoggingSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateUserSettings">AssociateUserSettings</a></code> | <code>string[]</code> | IAM actions required for the AssociateUserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateBrowserSettings">CreateBrowserSettings</a></code> | <code>string[]</code> | IAM actions required for the CreateBrowserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateDataProtectionSettings">CreateDataProtectionSettings</a></code> | <code>string[]</code> | IAM actions required for the CreateDataProtectionSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateIdentityProvider">CreateIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateIpAccessSettings">CreateIpAccessSettings</a></code> | <code>string[]</code> | IAM actions required for the CreateIpAccessSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateNetworkSettings">CreateNetworkSettings</a></code> | <code>string[]</code> | IAM actions required for the CreateNetworkSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreatePortal">CreatePortal</a></code> | <code>string[]</code> | IAM actions required for the CreatePortal API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateSessionLogger">CreateSessionLogger</a></code> | <code>string[]</code> | IAM actions required for the CreateSessionLogger API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateTrustStore">CreateTrustStore</a></code> | <code>string[]</code> | IAM actions required for the CreateTrustStore API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateUserAccessLoggingSettings">CreateUserAccessLoggingSettings</a></code> | <code>string[]</code> | IAM actions required for the CreateUserAccessLoggingSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateUserSettings">CreateUserSettings</a></code> | <code>string[]</code> | IAM actions required for the CreateUserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteBrowserSettings">DeleteBrowserSettings</a></code> | <code>string[]</code> | IAM actions required for the DeleteBrowserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteDataProtectionSettings">DeleteDataProtectionSettings</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataProtectionSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteIdentityProvider">DeleteIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteIpAccessSettings">DeleteIpAccessSettings</a></code> | <code>string[]</code> | IAM actions required for the DeleteIpAccessSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteNetworkSettings">DeleteNetworkSettings</a></code> | <code>string[]</code> | IAM actions required for the DeleteNetworkSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeletePortal">DeletePortal</a></code> | <code>string[]</code> | IAM actions required for the DeletePortal API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteSessionLogger">DeleteSessionLogger</a></code> | <code>string[]</code> | IAM actions required for the DeleteSessionLogger API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteTrustStore">DeleteTrustStore</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrustStore API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteUserAccessLoggingSettings">DeleteUserAccessLoggingSettings</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserAccessLoggingSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteUserSettings">DeleteUserSettings</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateBrowserSettings">DisassociateBrowserSettings</a></code> | <code>string[]</code> | IAM actions required for the DisassociateBrowserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateDataProtectionSettings">DisassociateDataProtectionSettings</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDataProtectionSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateIpAccessSettings">DisassociateIpAccessSettings</a></code> | <code>string[]</code> | IAM actions required for the DisassociateIpAccessSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateNetworkSettings">DisassociateNetworkSettings</a></code> | <code>string[]</code> | IAM actions required for the DisassociateNetworkSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateSessionLogger">DisassociateSessionLogger</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSessionLogger API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateTrustStore">DisassociateTrustStore</a></code> | <code>string[]</code> | IAM actions required for the DisassociateTrustStore API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateUserAccessLoggingSettings">DisassociateUserAccessLoggingSettings</a></code> | <code>string[]</code> | IAM actions required for the DisassociateUserAccessLoggingSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateUserSettings">DisassociateUserSettings</a></code> | <code>string[]</code> | IAM actions required for the DisassociateUserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ExpireSession">ExpireSession</a></code> | <code>string[]</code> | IAM actions required for the ExpireSession API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListBrowserSettings">ListBrowserSettings</a></code> | <code>string[]</code> | IAM actions required for the ListBrowserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListDataProtectionSettings">ListDataProtectionSettings</a></code> | <code>string[]</code> | IAM actions required for the ListDataProtectionSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListIdentityProviders">ListIdentityProviders</a></code> | <code>string[]</code> | IAM actions required for the ListIdentityProviders API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListIpAccessSettings">ListIpAccessSettings</a></code> | <code>string[]</code> | IAM actions required for the ListIpAccessSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListNetworkSettings">ListNetworkSettings</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListPortals">ListPortals</a></code> | <code>string[]</code> | IAM actions required for the ListPortals API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListSessionLoggers">ListSessionLoggers</a></code> | <code>string[]</code> | IAM actions required for the ListSessionLoggers API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListTrustStoreCertificates">ListTrustStoreCertificates</a></code> | <code>string[]</code> | IAM actions required for the ListTrustStoreCertificates API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListTrustStores">ListTrustStores</a></code> | <code>string[]</code> | IAM actions required for the ListTrustStores API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListUserAccessLoggingSettings">ListUserAccessLoggingSettings</a></code> | <code>string[]</code> | IAM actions required for the ListUserAccessLoggingSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListUserSettings">ListUserSettings</a></code> | <code>string[]</code> | IAM actions required for the ListUserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetBrowserSettings">opGetBrowserSettings</a></code> | <code>string[]</code> | IAM actions required for the GetBrowserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetDataProtectionSettings">opGetDataProtectionSettings</a></code> | <code>string[]</code> | IAM actions required for the GetDataProtectionSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetIdentityProvider">opGetIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetIpAccessSettings">opGetIpAccessSettings</a></code> | <code>string[]</code> | IAM actions required for the GetIpAccessSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetNetworkSettings">opGetNetworkSettings</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetPortal">opGetPortal</a></code> | <code>string[]</code> | IAM actions required for the GetPortal API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetPortalServiceProviderMetadata">opGetPortalServiceProviderMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetPortalServiceProviderMetadata API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetSession">opGetSession</a></code> | <code>string[]</code> | IAM actions required for the GetSession API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetSessionLogger">opGetSessionLogger</a></code> | <code>string[]</code> | IAM actions required for the GetSessionLogger API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetTrustStore">opGetTrustStore</a></code> | <code>string[]</code> | IAM actions required for the GetTrustStore API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetTrustStoreCertificate">opGetTrustStoreCertificate</a></code> | <code>string[]</code> | IAM actions required for the GetTrustStoreCertificate API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetUserAccessLoggingSettings">opGetUserAccessLoggingSettings</a></code> | <code>string[]</code> | IAM actions required for the GetUserAccessLoggingSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetUserSettings">opGetUserSettings</a></code> | <code>string[]</code> | IAM actions required for the GetUserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateBrowserSettings">UpdateBrowserSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrowserSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateDataProtectionSettings">UpdateDataProtectionSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataProtectionSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateIdentityProvider">UpdateIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the UpdateIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateIpAccessSettings">UpdateIpAccessSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateIpAccessSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateNetworkSettings">UpdateNetworkSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateNetworkSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdatePortal">UpdatePortal</a></code> | <code>string[]</code> | IAM actions required for the UpdatePortal API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateSessionLogger">UpdateSessionLogger</a></code> | <code>string[]</code> | IAM actions required for the UpdateSessionLogger API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateTrustStore">UpdateTrustStore</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrustStore API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateUserAccessLoggingSettings">UpdateUserAccessLoggingSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserAccessLoggingSettings API call. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateUserSettings">UpdateUserSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserSettings API call. |

---

##### `AssociateBrowserSettings`<sup>Required</sup> <a name="AssociateBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateBrowserSettings"></a>

```typescript
public readonly AssociateBrowserSettings: string[];
```

- *Type:* string[]

IAM actions required for the AssociateBrowserSettings API call.

---

##### `AssociateDataProtectionSettings`<sup>Required</sup> <a name="AssociateDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateDataProtectionSettings"></a>

```typescript
public readonly AssociateDataProtectionSettings: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDataProtectionSettings API call.

---

##### `AssociateIpAccessSettings`<sup>Required</sup> <a name="AssociateIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateIpAccessSettings"></a>

```typescript
public readonly AssociateIpAccessSettings: string[];
```

- *Type:* string[]

IAM actions required for the AssociateIpAccessSettings API call.

---

##### `AssociateNetworkSettings`<sup>Required</sup> <a name="AssociateNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateNetworkSettings"></a>

```typescript
public readonly AssociateNetworkSettings: string[];
```

- *Type:* string[]

IAM actions required for the AssociateNetworkSettings API call.

---

##### `AssociateSessionLogger`<sup>Required</sup> <a name="AssociateSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateSessionLogger"></a>

```typescript
public readonly AssociateSessionLogger: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSessionLogger API call.

---

##### `AssociateTrustStore`<sup>Required</sup> <a name="AssociateTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateTrustStore"></a>

```typescript
public readonly AssociateTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the AssociateTrustStore API call.

---

##### `AssociateUserAccessLoggingSettings`<sup>Required</sup> <a name="AssociateUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateUserAccessLoggingSettings"></a>

```typescript
public readonly AssociateUserAccessLoggingSettings: string[];
```

- *Type:* string[]

IAM actions required for the AssociateUserAccessLoggingSettings API call.

---

##### `AssociateUserSettings`<sup>Required</sup> <a name="AssociateUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.AssociateUserSettings"></a>

```typescript
public readonly AssociateUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the AssociateUserSettings API call.

---

##### `CreateBrowserSettings`<sup>Required</sup> <a name="CreateBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateBrowserSettings"></a>

```typescript
public readonly CreateBrowserSettings: string[];
```

- *Type:* string[]

IAM actions required for the CreateBrowserSettings API call.

---

##### `CreateDataProtectionSettings`<sup>Required</sup> <a name="CreateDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateDataProtectionSettings"></a>

```typescript
public readonly CreateDataProtectionSettings: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataProtectionSettings API call.

---

##### `CreateIdentityProvider`<sup>Required</sup> <a name="CreateIdentityProvider" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateIdentityProvider"></a>

```typescript
public readonly CreateIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateIdentityProvider API call.

---

##### `CreateIpAccessSettings`<sup>Required</sup> <a name="CreateIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateIpAccessSettings"></a>

```typescript
public readonly CreateIpAccessSettings: string[];
```

- *Type:* string[]

IAM actions required for the CreateIpAccessSettings API call.

---

##### `CreateNetworkSettings`<sup>Required</sup> <a name="CreateNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateNetworkSettings"></a>

```typescript
public readonly CreateNetworkSettings: string[];
```

- *Type:* string[]

IAM actions required for the CreateNetworkSettings API call.

---

##### `CreatePortal`<sup>Required</sup> <a name="CreatePortal" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreatePortal"></a>

```typescript
public readonly CreatePortal: string[];
```

- *Type:* string[]

IAM actions required for the CreatePortal API call.

---

##### `CreateSessionLogger`<sup>Required</sup> <a name="CreateSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateSessionLogger"></a>

```typescript
public readonly CreateSessionLogger: string[];
```

- *Type:* string[]

IAM actions required for the CreateSessionLogger API call.

---

##### `CreateTrustStore`<sup>Required</sup> <a name="CreateTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateTrustStore"></a>

```typescript
public readonly CreateTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrustStore API call.

---

##### `CreateUserAccessLoggingSettings`<sup>Required</sup> <a name="CreateUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateUserAccessLoggingSettings"></a>

```typescript
public readonly CreateUserAccessLoggingSettings: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserAccessLoggingSettings API call.

---

##### `CreateUserSettings`<sup>Required</sup> <a name="CreateUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.CreateUserSettings"></a>

```typescript
public readonly CreateUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserSettings API call.

---

##### `DeleteBrowserSettings`<sup>Required</sup> <a name="DeleteBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteBrowserSettings"></a>

```typescript
public readonly DeleteBrowserSettings: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBrowserSettings API call.

---

##### `DeleteDataProtectionSettings`<sup>Required</sup> <a name="DeleteDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteDataProtectionSettings"></a>

```typescript
public readonly DeleteDataProtectionSettings: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataProtectionSettings API call.

---

##### `DeleteIdentityProvider`<sup>Required</sup> <a name="DeleteIdentityProvider" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteIdentityProvider"></a>

```typescript
public readonly DeleteIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentityProvider API call.

---

##### `DeleteIpAccessSettings`<sup>Required</sup> <a name="DeleteIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteIpAccessSettings"></a>

```typescript
public readonly DeleteIpAccessSettings: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIpAccessSettings API call.

---

##### `DeleteNetworkSettings`<sup>Required</sup> <a name="DeleteNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteNetworkSettings"></a>

```typescript
public readonly DeleteNetworkSettings: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNetworkSettings API call.

---

##### `DeletePortal`<sup>Required</sup> <a name="DeletePortal" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeletePortal"></a>

```typescript
public readonly DeletePortal: string[];
```

- *Type:* string[]

IAM actions required for the DeletePortal API call.

---

##### `DeleteSessionLogger`<sup>Required</sup> <a name="DeleteSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteSessionLogger"></a>

```typescript
public readonly DeleteSessionLogger: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSessionLogger API call.

---

##### `DeleteTrustStore`<sup>Required</sup> <a name="DeleteTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteTrustStore"></a>

```typescript
public readonly DeleteTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrustStore API call.

---

##### `DeleteUserAccessLoggingSettings`<sup>Required</sup> <a name="DeleteUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteUserAccessLoggingSettings"></a>

```typescript
public readonly DeleteUserAccessLoggingSettings: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserAccessLoggingSettings API call.

---

##### `DeleteUserSettings`<sup>Required</sup> <a name="DeleteUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DeleteUserSettings"></a>

```typescript
public readonly DeleteUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserSettings API call.

---

##### `DisassociateBrowserSettings`<sup>Required</sup> <a name="DisassociateBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateBrowserSettings"></a>

```typescript
public readonly DisassociateBrowserSettings: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateBrowserSettings API call.

---

##### `DisassociateDataProtectionSettings`<sup>Required</sup> <a name="DisassociateDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateDataProtectionSettings"></a>

```typescript
public readonly DisassociateDataProtectionSettings: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDataProtectionSettings API call.

---

##### `DisassociateIpAccessSettings`<sup>Required</sup> <a name="DisassociateIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateIpAccessSettings"></a>

```typescript
public readonly DisassociateIpAccessSettings: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateIpAccessSettings API call.

---

##### `DisassociateNetworkSettings`<sup>Required</sup> <a name="DisassociateNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateNetworkSettings"></a>

```typescript
public readonly DisassociateNetworkSettings: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateNetworkSettings API call.

---

##### `DisassociateSessionLogger`<sup>Required</sup> <a name="DisassociateSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateSessionLogger"></a>

```typescript
public readonly DisassociateSessionLogger: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSessionLogger API call.

---

##### `DisassociateTrustStore`<sup>Required</sup> <a name="DisassociateTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateTrustStore"></a>

```typescript
public readonly DisassociateTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateTrustStore API call.

---

##### `DisassociateUserAccessLoggingSettings`<sup>Required</sup> <a name="DisassociateUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateUserAccessLoggingSettings"></a>

```typescript
public readonly DisassociateUserAccessLoggingSettings: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateUserAccessLoggingSettings API call.

---

##### `DisassociateUserSettings`<sup>Required</sup> <a name="DisassociateUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.DisassociateUserSettings"></a>

```typescript
public readonly DisassociateUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateUserSettings API call.

---

##### `ExpireSession`<sup>Required</sup> <a name="ExpireSession" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ExpireSession"></a>

```typescript
public readonly ExpireSession: string[];
```

- *Type:* string[]

IAM actions required for the ExpireSession API call.

---

##### `ListBrowserSettings`<sup>Required</sup> <a name="ListBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListBrowserSettings"></a>

```typescript
public readonly ListBrowserSettings: string[];
```

- *Type:* string[]

IAM actions required for the ListBrowserSettings API call.

---

##### `ListDataProtectionSettings`<sup>Required</sup> <a name="ListDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListDataProtectionSettings"></a>

```typescript
public readonly ListDataProtectionSettings: string[];
```

- *Type:* string[]

IAM actions required for the ListDataProtectionSettings API call.

---

##### `ListIdentityProviders`<sup>Required</sup> <a name="ListIdentityProviders" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListIdentityProviders"></a>

```typescript
public readonly ListIdentityProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentityProviders API call.

---

##### `ListIpAccessSettings`<sup>Required</sup> <a name="ListIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListIpAccessSettings"></a>

```typescript
public readonly ListIpAccessSettings: string[];
```

- *Type:* string[]

IAM actions required for the ListIpAccessSettings API call.

---

##### `ListNetworkSettings`<sup>Required</sup> <a name="ListNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListNetworkSettings"></a>

```typescript
public readonly ListNetworkSettings: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkSettings API call.

---

##### `ListPortals`<sup>Required</sup> <a name="ListPortals" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListPortals"></a>

```typescript
public readonly ListPortals: string[];
```

- *Type:* string[]

IAM actions required for the ListPortals API call.

---

##### `ListSessionLoggers`<sup>Required</sup> <a name="ListSessionLoggers" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListSessionLoggers"></a>

```typescript
public readonly ListSessionLoggers: string[];
```

- *Type:* string[]

IAM actions required for the ListSessionLoggers API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTrustStoreCertificates`<sup>Required</sup> <a name="ListTrustStoreCertificates" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListTrustStoreCertificates"></a>

```typescript
public readonly ListTrustStoreCertificates: string[];
```

- *Type:* string[]

IAM actions required for the ListTrustStoreCertificates API call.

---

##### `ListTrustStores`<sup>Required</sup> <a name="ListTrustStores" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListTrustStores"></a>

```typescript
public readonly ListTrustStores: string[];
```

- *Type:* string[]

IAM actions required for the ListTrustStores API call.

---

##### `ListUserAccessLoggingSettings`<sup>Required</sup> <a name="ListUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListUserAccessLoggingSettings"></a>

```typescript
public readonly ListUserAccessLoggingSettings: string[];
```

- *Type:* string[]

IAM actions required for the ListUserAccessLoggingSettings API call.

---

##### `ListUserSettings`<sup>Required</sup> <a name="ListUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.ListUserSettings"></a>

```typescript
public readonly ListUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the ListUserSettings API call.

---

##### `opGetBrowserSettings`<sup>Required</sup> <a name="opGetBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetBrowserSettings"></a>

```typescript
public readonly opGetBrowserSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetBrowserSettings API call.

---

##### `opGetDataProtectionSettings`<sup>Required</sup> <a name="opGetDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetDataProtectionSettings"></a>

```typescript
public readonly opGetDataProtectionSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetDataProtectionSettings API call.

---

##### `opGetIdentityProvider`<sup>Required</sup> <a name="opGetIdentityProvider" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetIdentityProvider"></a>

```typescript
public readonly opGetIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityProvider API call.

---

##### `opGetIpAccessSettings`<sup>Required</sup> <a name="opGetIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetIpAccessSettings"></a>

```typescript
public readonly opGetIpAccessSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetIpAccessSettings API call.

---

##### `opGetNetworkSettings`<sup>Required</sup> <a name="opGetNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetNetworkSettings"></a>

```typescript
public readonly opGetNetworkSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkSettings API call.

---

##### `opGetPortal`<sup>Required</sup> <a name="opGetPortal" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetPortal"></a>

```typescript
public readonly opGetPortal: string[];
```

- *Type:* string[]

IAM actions required for the GetPortal API call.

---

##### `opGetPortalServiceProviderMetadata`<sup>Required</sup> <a name="opGetPortalServiceProviderMetadata" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetPortalServiceProviderMetadata"></a>

```typescript
public readonly opGetPortalServiceProviderMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetPortalServiceProviderMetadata API call.

---

##### `opGetSession`<sup>Required</sup> <a name="opGetSession" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetSession"></a>

```typescript
public readonly opGetSession: string[];
```

- *Type:* string[]

IAM actions required for the GetSession API call.

---

##### `opGetSessionLogger`<sup>Required</sup> <a name="opGetSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetSessionLogger"></a>

```typescript
public readonly opGetSessionLogger: string[];
```

- *Type:* string[]

IAM actions required for the GetSessionLogger API call.

---

##### `opGetTrustStore`<sup>Required</sup> <a name="opGetTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetTrustStore"></a>

```typescript
public readonly opGetTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the GetTrustStore API call.

---

##### `opGetTrustStoreCertificate`<sup>Required</sup> <a name="opGetTrustStoreCertificate" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetTrustStoreCertificate"></a>

```typescript
public readonly opGetTrustStoreCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GetTrustStoreCertificate API call.

---

##### `opGetUserAccessLoggingSettings`<sup>Required</sup> <a name="opGetUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetUserAccessLoggingSettings"></a>

```typescript
public readonly opGetUserAccessLoggingSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetUserAccessLoggingSettings API call.

---

##### `opGetUserSettings`<sup>Required</sup> <a name="opGetUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.opGetUserSettings"></a>

```typescript
public readonly opGetUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetUserSettings API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBrowserSettings`<sup>Required</sup> <a name="UpdateBrowserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateBrowserSettings"></a>

```typescript
public readonly UpdateBrowserSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrowserSettings API call.

---

##### `UpdateDataProtectionSettings`<sup>Required</sup> <a name="UpdateDataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateDataProtectionSettings"></a>

```typescript
public readonly UpdateDataProtectionSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataProtectionSettings API call.

---

##### `UpdateIdentityProvider`<sup>Required</sup> <a name="UpdateIdentityProvider" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateIdentityProvider"></a>

```typescript
public readonly UpdateIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIdentityProvider API call.

---

##### `UpdateIpAccessSettings`<sup>Required</sup> <a name="UpdateIpAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateIpAccessSettings"></a>

```typescript
public readonly UpdateIpAccessSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIpAccessSettings API call.

---

##### `UpdateNetworkSettings`<sup>Required</sup> <a name="UpdateNetworkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateNetworkSettings"></a>

```typescript
public readonly UpdateNetworkSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNetworkSettings API call.

---

##### `UpdatePortal`<sup>Required</sup> <a name="UpdatePortal" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdatePortal"></a>

```typescript
public readonly UpdatePortal: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePortal API call.

---

##### `UpdateSessionLogger`<sup>Required</sup> <a name="UpdateSessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateSessionLogger"></a>

```typescript
public readonly UpdateSessionLogger: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSessionLogger API call.

---

##### `UpdateTrustStore`<sup>Required</sup> <a name="UpdateTrustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateTrustStore"></a>

```typescript
public readonly UpdateTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrustStore API call.

---

##### `UpdateUserAccessLoggingSettings`<sup>Required</sup> <a name="UpdateUserAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateUserAccessLoggingSettings"></a>

```typescript
public readonly UpdateUserAccessLoggingSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserAccessLoggingSettings API call.

---

##### `UpdateUserSettings`<sup>Required</sup> <a name="UpdateUserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebOperations.property.UpdateUserSettings"></a>

```typescript
public readonly UpdateUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserSettings API call.

---

### WorkspacesWebResources <a name="WorkspacesWebResources" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources"></a>

ARN builders, validators, and parsers for workspaces-web resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.Initializer"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

new workspaces_web.WorkspacesWebResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.browserSettings">browserSettings</a></code> | Builds an ARN for the browserSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.dataProtectionSettings">dataProtectionSettings</a></code> | Builds an ARN for the dataProtectionSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.identityProvider">identityProvider</a></code> | Builds an ARN for the identityProvider resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.ipAccessSettings">ipAccessSettings</a></code> | Builds an ARN for the ipAccessSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidBrowserSettingsArn">isValidBrowserSettingsArn</a></code> | Validates whether a string is a valid ARN for the browserSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidDataProtectionSettingsArn">isValidDataProtectionSettingsArn</a></code> | Validates whether a string is a valid ARN for the dataProtectionSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidIdentityProviderArn">isValidIdentityProviderArn</a></code> | Validates whether a string is a valid ARN for the identityProvider resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidIPAccessSettingsArn">isValidIPAccessSettingsArn</a></code> | Validates whether a string is a valid ARN for the ipAccessSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidNetworkSettingsArn">isValidNetworkSettingsArn</a></code> | Validates whether a string is a valid ARN for the networkSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidPortalArn">isValidPortalArn</a></code> | Validates whether a string is a valid ARN for the portal resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidSessionLoggerArn">isValidSessionLoggerArn</a></code> | Validates whether a string is a valid ARN for the sessionLogger resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidTrustStoreArn">isValidTrustStoreArn</a></code> | Validates whether a string is a valid ARN for the trustStore resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidUserAccessLoggingSettingsArn">isValidUserAccessLoggingSettingsArn</a></code> | Validates whether a string is a valid ARN for the userAccessLoggingSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidUserSettingsArn">isValidUserSettingsArn</a></code> | Validates whether a string is a valid ARN for the userSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.networkSettings">networkSettings</a></code> | Builds an ARN for the networkSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseBrowserSettingsArn">parseBrowserSettingsArn</a></code> | Parses a browserSettings ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseDataProtectionSettingsArn">parseDataProtectionSettingsArn</a></code> | Parses a dataProtectionSettings ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseIdentityProviderArn">parseIdentityProviderArn</a></code> | Parses a identityProvider ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseIPAccessSettingsArn">parseIPAccessSettingsArn</a></code> | Parses a ipAccessSettings ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseNetworkSettingsArn">parseNetworkSettingsArn</a></code> | Parses a networkSettings ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parsePortalArn">parsePortalArn</a></code> | Parses a portal ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseSessionLoggerArn">parseSessionLoggerArn</a></code> | Parses a sessionLogger ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseTrustStoreArn">parseTrustStoreArn</a></code> | Parses a trustStore ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseUserAccessLoggingSettingsArn">parseUserAccessLoggingSettingsArn</a></code> | Parses a userAccessLoggingSettings ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseUserSettingsArn">parseUserSettingsArn</a></code> | Parses a userSettings ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.portal">portal</a></code> | Builds an ARN for the portal resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.sessionLogger">sessionLogger</a></code> | Builds an ARN for the sessionLogger resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.trustStore">trustStore</a></code> | Builds an ARN for the trustStore resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.userAccessLoggingSettings">userAccessLoggingSettings</a></code> | Builds an ARN for the userAccessLoggingSettings resource. |
| <code><a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebResources.userSettings">userSettings</a></code> | Builds an ARN for the userSettings resource. |

---

##### `browserSettings` <a name="browserSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.browserSettings"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.browserSettings(props: WorkspacesWebBrowserSettingsArnProps)
```

Builds an ARN for the browserSettings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.browserSettings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebBrowserSettingsArnProps">WorkspacesWebBrowserSettingsArnProps</a>

---

##### `dataProtectionSettings` <a name="dataProtectionSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.dataProtectionSettings"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.dataProtectionSettings(props: WorkspacesWebDataProtectionSettingsArnProps)
```

Builds an ARN for the dataProtectionSettings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.dataProtectionSettings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebDataProtectionSettingsArnProps">WorkspacesWebDataProtectionSettingsArnProps</a>

---

##### `identityProvider` <a name="identityProvider" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.identityProvider"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.identityProvider(props: WorkspacesWebIdentityProviderArnProps)
```

Builds an ARN for the identityProvider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.identityProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIdentityProviderArnProps">WorkspacesWebIdentityProviderArnProps</a>

---

##### `ipAccessSettings` <a name="ipAccessSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.ipAccessSettings"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.ipAccessSettings(props: WorkspacesWebIPAccessSettingsArnProps)
```

Builds an ARN for the ipAccessSettings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.ipAccessSettings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebIPAccessSettingsArnProps">WorkspacesWebIPAccessSettingsArnProps</a>

---

##### `isValidBrowserSettingsArn` <a name="isValidBrowserSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidBrowserSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.isValidBrowserSettingsArn(arn: string)
```

Validates whether a string is a valid ARN for the browserSettings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidBrowserSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataProtectionSettingsArn` <a name="isValidDataProtectionSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidDataProtectionSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.isValidDataProtectionSettingsArn(arn: string)
```

Validates whether a string is a valid ARN for the dataProtectionSettings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidDataProtectionSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdentityProviderArn` <a name="isValidIdentityProviderArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidIdentityProviderArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.isValidIdentityProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the identityProvider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidIdentityProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIPAccessSettingsArn` <a name="isValidIPAccessSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidIPAccessSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.isValidIPAccessSettingsArn(arn: string)
```

Validates whether a string is a valid ARN for the ipAccessSettings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidIPAccessSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkSettingsArn` <a name="isValidNetworkSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidNetworkSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.isValidNetworkSettingsArn(arn: string)
```

Validates whether a string is a valid ARN for the networkSettings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidNetworkSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPortalArn` <a name="isValidPortalArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidPortalArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.isValidPortalArn(arn: string)
```

Validates whether a string is a valid ARN for the portal resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidPortalArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionLoggerArn` <a name="isValidSessionLoggerArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidSessionLoggerArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.isValidSessionLoggerArn(arn: string)
```

Validates whether a string is a valid ARN for the sessionLogger resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidSessionLoggerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTrustStoreArn` <a name="isValidTrustStoreArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidTrustStoreArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.isValidTrustStoreArn(arn: string)
```

Validates whether a string is a valid ARN for the trustStore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidTrustStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserAccessLoggingSettingsArn` <a name="isValidUserAccessLoggingSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidUserAccessLoggingSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.isValidUserAccessLoggingSettingsArn(arn: string)
```

Validates whether a string is a valid ARN for the userAccessLoggingSettings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidUserAccessLoggingSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserSettingsArn` <a name="isValidUserSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidUserSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.isValidUserSettingsArn(arn: string)
```

Validates whether a string is a valid ARN for the userSettings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.isValidUserSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `networkSettings` <a name="networkSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.networkSettings"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.networkSettings(props: WorkspacesWebNetworkSettingsArnProps)
```

Builds an ARN for the networkSettings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.networkSettings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebNetworkSettingsArnProps">WorkspacesWebNetworkSettingsArnProps</a>

---

##### `parseBrowserSettingsArn` <a name="parseBrowserSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseBrowserSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.parseBrowserSettingsArn(arn: string)
```

Parses a browserSettings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseBrowserSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataProtectionSettingsArn` <a name="parseDataProtectionSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseDataProtectionSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.parseDataProtectionSettingsArn(arn: string)
```

Parses a dataProtectionSettings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseDataProtectionSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdentityProviderArn` <a name="parseIdentityProviderArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseIdentityProviderArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.parseIdentityProviderArn(arn: string)
```

Parses a identityProvider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseIdentityProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIPAccessSettingsArn` <a name="parseIPAccessSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseIPAccessSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.parseIPAccessSettingsArn(arn: string)
```

Parses a ipAccessSettings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseIPAccessSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkSettingsArn` <a name="parseNetworkSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseNetworkSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.parseNetworkSettingsArn(arn: string)
```

Parses a networkSettings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseNetworkSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePortalArn` <a name="parsePortalArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parsePortalArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.parsePortalArn(arn: string)
```

Parses a portal ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parsePortalArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionLoggerArn` <a name="parseSessionLoggerArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseSessionLoggerArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.parseSessionLoggerArn(arn: string)
```

Parses a sessionLogger ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseSessionLoggerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTrustStoreArn` <a name="parseTrustStoreArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseTrustStoreArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.parseTrustStoreArn(arn: string)
```

Parses a trustStore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseTrustStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserAccessLoggingSettingsArn` <a name="parseUserAccessLoggingSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseUserAccessLoggingSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.parseUserAccessLoggingSettingsArn(arn: string)
```

Parses a userAccessLoggingSettings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseUserAccessLoggingSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserSettingsArn` <a name="parseUserSettingsArn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseUserSettingsArn"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.parseUserSettingsArn(arn: string)
```

Parses a userSettings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.parseUserSettingsArn.parameter.arn"></a>

- *Type:* string

---

##### `portal` <a name="portal" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.portal"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.portal(props: WorkspacesWebPortalArnProps)
```

Builds an ARN for the portal resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.portal.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebPortalArnProps">WorkspacesWebPortalArnProps</a>

---

##### `sessionLogger` <a name="sessionLogger" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.sessionLogger"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.sessionLogger(props: WorkspacesWebSessionLoggerArnProps)
```

Builds an ARN for the sessionLogger resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.sessionLogger.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebSessionLoggerArnProps">WorkspacesWebSessionLoggerArnProps</a>

---

##### `trustStore` <a name="trustStore" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.trustStore"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.trustStore(props: WorkspacesWebTrustStoreArnProps)
```

Builds an ARN for the trustStore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.trustStore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebTrustStoreArnProps">WorkspacesWebTrustStoreArnProps</a>

---

##### `userAccessLoggingSettings` <a name="userAccessLoggingSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.userAccessLoggingSettings"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.userAccessLoggingSettings(props: WorkspacesWebUserAccessLoggingSettingsArnProps)
```

Builds an ARN for the userAccessLoggingSettings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.userAccessLoggingSettings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserAccessLoggingSettingsArnProps">WorkspacesWebUserAccessLoggingSettingsArnProps</a>

---

##### `userSettings` <a name="userSettings" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.userSettings"></a>

```typescript
import { workspaces_web } from '@cdk_utils/iam'

workspaces_web.WorkspacesWebResources.userSettings(props: WorkspacesWebUserSettingsArnProps)
```

Builds an ARN for the userSettings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_web.WorkspacesWebResources.userSettings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_web.WorkspacesWebUserSettingsArnProps">WorkspacesWebUserSettingsArnProps</a>

---




