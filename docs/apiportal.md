# `apiportal` Submodule <a name="`apiportal` Submodule" id="@cdk_utils/iam.apiportal"></a>


## Structs <a name="Structs" id="Structs"></a>

### ApiportalDiscoveryConfigurationArnComponents <a name="ApiportalDiscoveryConfigurationArnComponents" id="@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnComponents"></a>

Parsed components of a DiscoveryConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnComponents.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalDiscoveryConfigurationArnComponents: apiportal.ApiportalDiscoveryConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiportalDiscoveryConfigurationArnProps <a name="ApiportalDiscoveryConfigurationArnProps" id="@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnProps"></a>

Properties for building a DiscoveryConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnProps.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalDiscoveryConfigurationArnProps: apiportal.ApiportalDiscoveryConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiportalManagedAPIArnComponents <a name="ApiportalManagedAPIArnComponents" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnComponents"></a>

Parsed components of a ManagedApi ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnComponents.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalManagedAPIArnComponents: apiportal.ApiportalManagedAPIArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalManagedAPIArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalManagedAPIArnComponents.property.managedAPIId">managedAPIId</a></code> | <code>string</code> | The ManagedApiId component. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalManagedAPIArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalManagedAPIArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `managedAPIId`<sup>Required</sup> <a name="managedAPIId" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnComponents.property.managedAPIId"></a>

```typescript
public readonly managedAPIId: string;
```

- *Type:* string

The ManagedApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiportalManagedAPIArnProps <a name="ApiportalManagedAPIArnProps" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps"></a>

Properties for building a ManagedApi ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalManagedAPIArnProps: apiportal.ApiportalManagedAPIArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps.property.managedAPIId">managedAPIId</a></code> | <code>string</code> | The ManagedApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `managedAPIId`<sup>Required</sup> <a name="managedAPIId" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps.property.managedAPIId"></a>

```typescript
public readonly managedAPIId: string;
```

- *Type:* string

The ManagedApiId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiportalOrganizationDiscoveryConfigurationArnComponents <a name="ApiportalOrganizationDiscoveryConfigurationArnComponents" id="@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnComponents"></a>

Parsed components of a OrganizationDiscoveryConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnComponents.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalOrganizationDiscoveryConfigurationArnComponents: apiportal.ApiportalOrganizationDiscoveryConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiportalOrganizationDiscoveryConfigurationArnProps <a name="ApiportalOrganizationDiscoveryConfigurationArnProps" id="@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnProps"></a>

Properties for building a OrganizationDiscoveryConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnProps.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalOrganizationDiscoveryConfigurationArnProps: apiportal.ApiportalOrganizationDiscoveryConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiportalPortalArnComponents <a name="ApiportalPortalArnComponents" id="@cdk_utils/iam.apiportal.ApiportalPortalArnComponents"></a>

Parsed components of a Portal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalPortalArnComponents.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalPortalArnComponents: apiportal.ApiportalPortalArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalPortalArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalPortalArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalPortalArnComponents.property.portalId">portalId</a></code> | <code>string</code> | The PortalId component. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalPortalArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalPortalArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalPortalArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdk_utils/iam.apiportal.ApiportalPortalArnComponents.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

The PortalId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalPortalArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiportalPortalArnProps <a name="ApiportalPortalArnProps" id="@cdk_utils/iam.apiportal.ApiportalPortalArnProps"></a>

Properties for building a Portal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalPortalArnProps.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalPortalArnProps: apiportal.ApiportalPortalArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalPortalArnProps.property.portalId">portalId</a></code> | <code>string</code> | The PortalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalPortalArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalPortalArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalPortalArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdk_utils/iam.apiportal.ApiportalPortalArnProps.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

The PortalId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalPortalArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalPortalArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalPortalArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiportalProductAPIPageArnComponents <a name="ApiportalProductAPIPageArnComponents" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents"></a>

Parsed components of a ProductApiPage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalProductAPIPageArnComponents: apiportal.ApiportalProductAPIPageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.property.productAPIPageId">productAPIPageId</a></code> | <code>string</code> | The ProductApiPageId component. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.property.productId">productId</a></code> | <code>string</code> | The ProductId component. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `productAPIPageId`<sup>Required</sup> <a name="productAPIPageId" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.property.productAPIPageId"></a>

```typescript
public readonly productAPIPageId: string;
```

- *Type:* string

The ProductApiPageId component.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiportalProductAPIPageArnProps <a name="ApiportalProductAPIPageArnProps" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps"></a>

Properties for building a ProductApiPage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalProductAPIPageArnProps: apiportal.ApiportalProductAPIPageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.property.productAPIPageId">productAPIPageId</a></code> | <code>string</code> | The ProductApiPageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.property.productId">productId</a></code> | <code>string</code> | The ProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `productAPIPageId`<sup>Required</sup> <a name="productAPIPageId" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.property.productAPIPageId"></a>

```typescript
public readonly productAPIPageId: string;
```

- *Type:* string

The ProductApiPageId component of the ARN.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiportalProductArnComponents <a name="ApiportalProductArnComponents" id="@cdk_utils/iam.apiportal.ApiportalProductArnComponents"></a>

Parsed components of a Product ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalProductArnComponents.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalProductArnComponents: apiportal.ApiportalProductArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductArnComponents.property.productId">productId</a></code> | <code>string</code> | The ProductId component. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalProductArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalProductArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.apiportal.ApiportalProductArnComponents.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalProductArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiportalProductArnProps <a name="ApiportalProductArnProps" id="@cdk_utils/iam.apiportal.ApiportalProductArnProps"></a>

Properties for building a Product ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalProductArnProps.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalProductArnProps: apiportal.ApiportalProductArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductArnProps.property.productId">productId</a></code> | <code>string</code> | The ProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.apiportal.ApiportalProductArnProps.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalProductArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalProductArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalProductArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiportalProductPageArnComponents <a name="ApiportalProductPageArnComponents" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents"></a>

Parsed components of a ProductPage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalProductPageArnComponents: apiportal.ApiportalProductPageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.property.productId">productId</a></code> | <code>string</code> | The ProductId component. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.property.productPageId">productPageId</a></code> | <code>string</code> | The ProductPageId component. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component.

---

##### `productPageId`<sup>Required</sup> <a name="productPageId" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.property.productPageId"></a>

```typescript
public readonly productPageId: string;
```

- *Type:* string

The ProductPageId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiportalProductPageArnProps <a name="ApiportalProductPageArnProps" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnProps"></a>

Properties for building a ProductPage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalProductPageArnProps: apiportal.ApiportalProductPageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.property.productId">productId</a></code> | <code>string</code> | The ProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.property.productPageId">productPageId</a></code> | <code>string</code> | The ProductPageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component of the ARN.

---

##### `productPageId`<sup>Required</sup> <a name="productPageId" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.property.productPageId"></a>

```typescript
public readonly productPageId: string;
```

- *Type:* string

The ProductPageId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalProductPageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApiportalProductSharingPolicyArnComponents <a name="ApiportalProductSharingPolicyArnComponents" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnComponents"></a>

Parsed components of a ProductSharingPolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnComponents.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalProductSharingPolicyArnComponents: apiportal.ApiportalProductSharingPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnComponents.property.productId">productId</a></code> | <code>string</code> | The ProductId component. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnComponents.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApiportalProductSharingPolicyArnProps <a name="ApiportalProductSharingPolicyArnProps" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps"></a>

Properties for building a ProductSharingPolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

const apiportalProductSharingPolicyArnProps: apiportal.ApiportalProductSharingPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps.property.productId">productId</a></code> | <code>string</code> | The ProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalActions <a name="ApiportalActions" id="@cdk_utils/iam.apiportal.ApiportalActions"></a>

IAM action constants for the apiportal service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apiportal.ApiportalActions.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

new apiportal.ApiportalActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetApiInventoryItem">actionGetApiInventoryItem</a></code> | <code>string</code> | [Read] apiportal:GetApiInventoryItem. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetDiscoveryConfiguration">actionGetDiscoveryConfiguration</a></code> | <code>string</code> | [Read] apiportal:GetDiscoveryConfiguration. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetManagedApi">actionGetManagedApi</a></code> | <code>string</code> | [Read] apiportal:GetManagedApi. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetOrganizationDiscoveryConfiguration">actionGetOrganizationDiscoveryConfiguration</a></code> | <code>string</code> | [Read] apiportal:GetOrganizationDiscoveryConfiguration. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetPortal">actionGetPortal</a></code> | <code>string</code> | [Read] apiportal:GetPortal. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetProduct">actionGetProduct</a></code> | <code>string</code> | [Read] apiportal:GetProduct. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetProductApiPage">actionGetProductApiPage</a></code> | <code>string</code> | [Read] apiportal:GetProductApiPage. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetProductPage">actionGetProductPage</a></code> | <code>string</code> | [Read] apiportal:GetProductPage. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetProductSharingPolicy">actionGetProductSharingPolicy</a></code> | <code>string</code> | [Read] apiportal:GetProductSharingPolicy. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.AssociateManagedApis">AssociateManagedApis</a></code> | <code>string</code> | [Write] apiportal:AssociateManagedApis. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.CreateManagedApi">CreateManagedApi</a></code> | <code>string</code> | [Write] apiportal:CreateManagedApi. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.CreatePortal">CreatePortal</a></code> | <code>string</code> | [Write] apiportal:CreatePortal. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.CreatePortalPreview">CreatePortalPreview</a></code> | <code>string</code> | [Write] apiportal:CreatePortalPreview. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.CreateProduct">CreateProduct</a></code> | <code>string</code> | [Write] apiportal:CreateProduct. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.CreateProductApiPage">CreateProductApiPage</a></code> | <code>string</code> | [Write] apiportal:CreateProductApiPage. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.CreateProductPage">CreateProductPage</a></code> | <code>string</code> | [Write] apiportal:CreateProductPage. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteDiscoveryConfiguration">DeleteDiscoveryConfiguration</a></code> | <code>string</code> | [Write] apiportal:DeleteDiscoveryConfiguration. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteManagedApi">DeleteManagedApi</a></code> | <code>string</code> | [Write] apiportal:DeleteManagedApi. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteOrganizationDiscoveryConfiguration">DeleteOrganizationDiscoveryConfiguration</a></code> | <code>string</code> | [Write] apiportal:DeleteOrganizationDiscoveryConfiguration. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.DeletePortal">DeletePortal</a></code> | <code>string</code> | [Write] apiportal:DeletePortal. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteProduct">DeleteProduct</a></code> | <code>string</code> | [Write] apiportal:DeleteProduct. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteProductApiPage">DeleteProductApiPage</a></code> | <code>string</code> | [Write] apiportal:DeleteProductApiPage. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteProductPage">DeleteProductPage</a></code> | <code>string</code> | [Write] apiportal:DeleteProductPage. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteProductSharingPolicy">DeleteProductSharingPolicy</a></code> | <code>string</code> | [PermissionManagement] apiportal:DeleteProductSharingPolicy. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.DisassociateManagedApis">DisassociateManagedApis</a></code> | <code>string</code> | [Write] apiportal:DisassociateManagedApis. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.ListApiInventoryItems">ListApiInventoryItems</a></code> | <code>string</code> | [List] apiportal:ListApiInventoryItems. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.ListDiscoveryStatuses">ListDiscoveryStatuses</a></code> | <code>string</code> | [List] apiportal:ListDiscoveryStatuses. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.ListManagedApiEvents">ListManagedApiEvents</a></code> | <code>string</code> | [List] apiportal:ListManagedApiEvents. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.ListManagedApis">ListManagedApis</a></code> | <code>string</code> | [List] apiportal:ListManagedApis. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.ListPortals">ListPortals</a></code> | <code>string</code> | [List] apiportal:ListPortals. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.ListProductApiPages">ListProductApiPages</a></code> | <code>string</code> | [List] apiportal:ListProductApiPages. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.ListProductPages">ListProductPages</a></code> | <code>string</code> | [List] apiportal:ListProductPages. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.ListProducts">ListProducts</a></code> | <code>string</code> | [List] apiportal:ListProducts. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] apiportal:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.PutDiscoveryConfiguration">PutDiscoveryConfiguration</a></code> | <code>string</code> | [Write] apiportal:PutDiscoveryConfiguration. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.PutOrganizationDiscoveryConfiguration">PutOrganizationDiscoveryConfiguration</a></code> | <code>string</code> | [Write] apiportal:PutOrganizationDiscoveryConfiguration. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.PutProductSharingPolicy">PutProductSharingPolicy</a></code> | <code>string</code> | [PermissionManagement] apiportal:PutProductSharingPolicy. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.StartDiscovery">StartDiscovery</a></code> | <code>string</code> | [Write] apiportal:StartDiscovery. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.StopDiscovery">StopDiscovery</a></code> | <code>string</code> | [Write] apiportal:StopDiscovery. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] apiportal:TagResource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] apiportal:UntagResource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.UpdatePortal">UpdatePortal</a></code> | <code>string</code> | [Write] apiportal:UpdatePortal. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.UpdatePortalPublishStatus">UpdatePortalPublishStatus</a></code> | <code>string</code> | [Write] apiportal:UpdatePortalPublishStatus. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.UpdateProduct">UpdateProduct</a></code> | <code>string</code> | [Write] apiportal:UpdateProduct. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.UpdateProductApiPage">UpdateProductApiPage</a></code> | <code>string</code> | [Write] apiportal:UpdateProductApiPage. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalActions.property.UpdateProductPage">UpdateProductPage</a></code> | <code>string</code> | [Write] apiportal:UpdateProductPage. |

---

##### `actionGetApiInventoryItem`<sup>Required</sup> <a name="actionGetApiInventoryItem" id="@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetApiInventoryItem"></a>

```typescript
public readonly actionGetApiInventoryItem: string;
```

- *Type:* string

[Read] apiportal:GetApiInventoryItem.

---

##### `actionGetDiscoveryConfiguration`<sup>Required</sup> <a name="actionGetDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetDiscoveryConfiguration"></a>

```typescript
public readonly actionGetDiscoveryConfiguration: string;
```

- *Type:* string

[Read] apiportal:GetDiscoveryConfiguration.

---

##### `actionGetManagedApi`<sup>Required</sup> <a name="actionGetManagedApi" id="@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetManagedApi"></a>

```typescript
public readonly actionGetManagedApi: string;
```

- *Type:* string

[Read] apiportal:GetManagedApi.

---

##### `actionGetOrganizationDiscoveryConfiguration`<sup>Required</sup> <a name="actionGetOrganizationDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetOrganizationDiscoveryConfiguration"></a>

```typescript
public readonly actionGetOrganizationDiscoveryConfiguration: string;
```

- *Type:* string

[Read] apiportal:GetOrganizationDiscoveryConfiguration.

---

##### `actionGetPortal`<sup>Required</sup> <a name="actionGetPortal" id="@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetPortal"></a>

```typescript
public readonly actionGetPortal: string;
```

- *Type:* string

[Read] apiportal:GetPortal.

---

##### `actionGetProduct`<sup>Required</sup> <a name="actionGetProduct" id="@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetProduct"></a>

```typescript
public readonly actionGetProduct: string;
```

- *Type:* string

[Read] apiportal:GetProduct.

---

##### `actionGetProductApiPage`<sup>Required</sup> <a name="actionGetProductApiPage" id="@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetProductApiPage"></a>

```typescript
public readonly actionGetProductApiPage: string;
```

- *Type:* string

[Read] apiportal:GetProductApiPage.

---

##### `actionGetProductPage`<sup>Required</sup> <a name="actionGetProductPage" id="@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetProductPage"></a>

```typescript
public readonly actionGetProductPage: string;
```

- *Type:* string

[Read] apiportal:GetProductPage.

---

##### `actionGetProductSharingPolicy`<sup>Required</sup> <a name="actionGetProductSharingPolicy" id="@cdk_utils/iam.apiportal.ApiportalActions.property.actionGetProductSharingPolicy"></a>

```typescript
public readonly actionGetProductSharingPolicy: string;
```

- *Type:* string

[Read] apiportal:GetProductSharingPolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.apiportal.ApiportalActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.apiportal.ApiportalActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.apiportal.ApiportalActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.apiportal.ApiportalActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.apiportal.ApiportalActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateManagedApis`<sup>Required</sup> <a name="AssociateManagedApis" id="@cdk_utils/iam.apiportal.ApiportalActions.property.AssociateManagedApis"></a>

```typescript
public readonly AssociateManagedApis: string;
```

- *Type:* string

[Write] apiportal:AssociateManagedApis.

---

##### `CreateManagedApi`<sup>Required</sup> <a name="CreateManagedApi" id="@cdk_utils/iam.apiportal.ApiportalActions.property.CreateManagedApi"></a>

```typescript
public readonly CreateManagedApi: string;
```

- *Type:* string

[Write] apiportal:CreateManagedApi.

---

##### `CreatePortal`<sup>Required</sup> <a name="CreatePortal" id="@cdk_utils/iam.apiportal.ApiportalActions.property.CreatePortal"></a>

```typescript
public readonly CreatePortal: string;
```

- *Type:* string

[Write] apiportal:CreatePortal.

---

##### `CreatePortalPreview`<sup>Required</sup> <a name="CreatePortalPreview" id="@cdk_utils/iam.apiportal.ApiportalActions.property.CreatePortalPreview"></a>

```typescript
public readonly CreatePortalPreview: string;
```

- *Type:* string

[Write] apiportal:CreatePortalPreview.

---

##### `CreateProduct`<sup>Required</sup> <a name="CreateProduct" id="@cdk_utils/iam.apiportal.ApiportalActions.property.CreateProduct"></a>

```typescript
public readonly CreateProduct: string;
```

- *Type:* string

[Write] apiportal:CreateProduct.

---

##### `CreateProductApiPage`<sup>Required</sup> <a name="CreateProductApiPage" id="@cdk_utils/iam.apiportal.ApiportalActions.property.CreateProductApiPage"></a>

```typescript
public readonly CreateProductApiPage: string;
```

- *Type:* string

[Write] apiportal:CreateProductApiPage.

---

##### `CreateProductPage`<sup>Required</sup> <a name="CreateProductPage" id="@cdk_utils/iam.apiportal.ApiportalActions.property.CreateProductPage"></a>

```typescript
public readonly CreateProductPage: string;
```

- *Type:* string

[Write] apiportal:CreateProductPage.

---

##### `DeleteDiscoveryConfiguration`<sup>Required</sup> <a name="DeleteDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteDiscoveryConfiguration"></a>

```typescript
public readonly DeleteDiscoveryConfiguration: string;
```

- *Type:* string

[Write] apiportal:DeleteDiscoveryConfiguration.

---

##### `DeleteManagedApi`<sup>Required</sup> <a name="DeleteManagedApi" id="@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteManagedApi"></a>

```typescript
public readonly DeleteManagedApi: string;
```

- *Type:* string

[Write] apiportal:DeleteManagedApi.

---

##### `DeleteOrganizationDiscoveryConfiguration`<sup>Required</sup> <a name="DeleteOrganizationDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteOrganizationDiscoveryConfiguration"></a>

```typescript
public readonly DeleteOrganizationDiscoveryConfiguration: string;
```

- *Type:* string

[Write] apiportal:DeleteOrganizationDiscoveryConfiguration.

---

##### `DeletePortal`<sup>Required</sup> <a name="DeletePortal" id="@cdk_utils/iam.apiportal.ApiportalActions.property.DeletePortal"></a>

```typescript
public readonly DeletePortal: string;
```

- *Type:* string

[Write] apiportal:DeletePortal.

---

##### `DeleteProduct`<sup>Required</sup> <a name="DeleteProduct" id="@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteProduct"></a>

```typescript
public readonly DeleteProduct: string;
```

- *Type:* string

[Write] apiportal:DeleteProduct.

---

##### `DeleteProductApiPage`<sup>Required</sup> <a name="DeleteProductApiPage" id="@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteProductApiPage"></a>

```typescript
public readonly DeleteProductApiPage: string;
```

- *Type:* string

[Write] apiportal:DeleteProductApiPage.

---

##### `DeleteProductPage`<sup>Required</sup> <a name="DeleteProductPage" id="@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteProductPage"></a>

```typescript
public readonly DeleteProductPage: string;
```

- *Type:* string

[Write] apiportal:DeleteProductPage.

---

##### `DeleteProductSharingPolicy`<sup>Required</sup> <a name="DeleteProductSharingPolicy" id="@cdk_utils/iam.apiportal.ApiportalActions.property.DeleteProductSharingPolicy"></a>

```typescript
public readonly DeleteProductSharingPolicy: string;
```

- *Type:* string

[PermissionManagement] apiportal:DeleteProductSharingPolicy.

---

##### `DisassociateManagedApis`<sup>Required</sup> <a name="DisassociateManagedApis" id="@cdk_utils/iam.apiportal.ApiportalActions.property.DisassociateManagedApis"></a>

```typescript
public readonly DisassociateManagedApis: string;
```

- *Type:* string

[Write] apiportal:DisassociateManagedApis.

---

##### `ListApiInventoryItems`<sup>Required</sup> <a name="ListApiInventoryItems" id="@cdk_utils/iam.apiportal.ApiportalActions.property.ListApiInventoryItems"></a>

```typescript
public readonly ListApiInventoryItems: string;
```

- *Type:* string

[List] apiportal:ListApiInventoryItems.

---

##### `ListDiscoveryStatuses`<sup>Required</sup> <a name="ListDiscoveryStatuses" id="@cdk_utils/iam.apiportal.ApiportalActions.property.ListDiscoveryStatuses"></a>

```typescript
public readonly ListDiscoveryStatuses: string;
```

- *Type:* string

[List] apiportal:ListDiscoveryStatuses.

---

##### `ListManagedApiEvents`<sup>Required</sup> <a name="ListManagedApiEvents" id="@cdk_utils/iam.apiportal.ApiportalActions.property.ListManagedApiEvents"></a>

```typescript
public readonly ListManagedApiEvents: string;
```

- *Type:* string

[List] apiportal:ListManagedApiEvents.

---

##### `ListManagedApis`<sup>Required</sup> <a name="ListManagedApis" id="@cdk_utils/iam.apiportal.ApiportalActions.property.ListManagedApis"></a>

```typescript
public readonly ListManagedApis: string;
```

- *Type:* string

[List] apiportal:ListManagedApis.

---

##### `ListPortals`<sup>Required</sup> <a name="ListPortals" id="@cdk_utils/iam.apiportal.ApiportalActions.property.ListPortals"></a>

```typescript
public readonly ListPortals: string;
```

- *Type:* string

[List] apiportal:ListPortals.

---

##### `ListProductApiPages`<sup>Required</sup> <a name="ListProductApiPages" id="@cdk_utils/iam.apiportal.ApiportalActions.property.ListProductApiPages"></a>

```typescript
public readonly ListProductApiPages: string;
```

- *Type:* string

[List] apiportal:ListProductApiPages.

---

##### `ListProductPages`<sup>Required</sup> <a name="ListProductPages" id="@cdk_utils/iam.apiportal.ApiportalActions.property.ListProductPages"></a>

```typescript
public readonly ListProductPages: string;
```

- *Type:* string

[List] apiportal:ListProductPages.

---

##### `ListProducts`<sup>Required</sup> <a name="ListProducts" id="@cdk_utils/iam.apiportal.ApiportalActions.property.ListProducts"></a>

```typescript
public readonly ListProducts: string;
```

- *Type:* string

[List] apiportal:ListProducts.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.apiportal.ApiportalActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] apiportal:ListTagsForResource.

---

##### `PutDiscoveryConfiguration`<sup>Required</sup> <a name="PutDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalActions.property.PutDiscoveryConfiguration"></a>

```typescript
public readonly PutDiscoveryConfiguration: string;
```

- *Type:* string

[Write] apiportal:PutDiscoveryConfiguration.

---

##### `PutOrganizationDiscoveryConfiguration`<sup>Required</sup> <a name="PutOrganizationDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalActions.property.PutOrganizationDiscoveryConfiguration"></a>

```typescript
public readonly PutOrganizationDiscoveryConfiguration: string;
```

- *Type:* string

[Write] apiportal:PutOrganizationDiscoveryConfiguration.

---

##### `PutProductSharingPolicy`<sup>Required</sup> <a name="PutProductSharingPolicy" id="@cdk_utils/iam.apiportal.ApiportalActions.property.PutProductSharingPolicy"></a>

```typescript
public readonly PutProductSharingPolicy: string;
```

- *Type:* string

[PermissionManagement] apiportal:PutProductSharingPolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.apiportal.ApiportalActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDiscovery`<sup>Required</sup> <a name="StartDiscovery" id="@cdk_utils/iam.apiportal.ApiportalActions.property.StartDiscovery"></a>

```typescript
public readonly StartDiscovery: string;
```

- *Type:* string

[Write] apiportal:StartDiscovery.

---

##### `StopDiscovery`<sup>Required</sup> <a name="StopDiscovery" id="@cdk_utils/iam.apiportal.ApiportalActions.property.StopDiscovery"></a>

```typescript
public readonly StopDiscovery: string;
```

- *Type:* string

[Write] apiportal:StopDiscovery.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.apiportal.ApiportalActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] apiportal:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.apiportal.ApiportalActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] apiportal:UntagResource.

---

##### `UpdatePortal`<sup>Required</sup> <a name="UpdatePortal" id="@cdk_utils/iam.apiportal.ApiportalActions.property.UpdatePortal"></a>

```typescript
public readonly UpdatePortal: string;
```

- *Type:* string

[Write] apiportal:UpdatePortal.

---

##### `UpdatePortalPublishStatus`<sup>Required</sup> <a name="UpdatePortalPublishStatus" id="@cdk_utils/iam.apiportal.ApiportalActions.property.UpdatePortalPublishStatus"></a>

```typescript
public readonly UpdatePortalPublishStatus: string;
```

- *Type:* string

[Write] apiportal:UpdatePortalPublishStatus.

---

##### `UpdateProduct`<sup>Required</sup> <a name="UpdateProduct" id="@cdk_utils/iam.apiportal.ApiportalActions.property.UpdateProduct"></a>

```typescript
public readonly UpdateProduct: string;
```

- *Type:* string

[Write] apiportal:UpdateProduct.

---

##### `UpdateProductApiPage`<sup>Required</sup> <a name="UpdateProductApiPage" id="@cdk_utils/iam.apiportal.ApiportalActions.property.UpdateProductApiPage"></a>

```typescript
public readonly UpdateProductApiPage: string;
```

- *Type:* string

[Write] apiportal:UpdateProductApiPage.

---

##### `UpdateProductPage`<sup>Required</sup> <a name="UpdateProductPage" id="@cdk_utils/iam.apiportal.ApiportalActions.property.UpdateProductPage"></a>

```typescript
public readonly UpdateProductPage: string;
```

- *Type:* string

[Write] apiportal:UpdateProductPage.

---

### ApiportalConditions <a name="ApiportalConditions" id="@cdk_utils/iam.apiportal.ApiportalConditions"></a>

Condition key constants and builders for apiportal.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apiportal.ApiportalConditions.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

new apiportal.ApiportalConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.apiportal.ApiportalConditions.requestTag"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apiportal.ApiportalConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.apiportal.ApiportalConditions.resourceTag"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apiportal.ApiportalConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.tagKeys"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apiportal.ApiportalConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.CreateManagedApiConditionKeys">CreateManagedApiConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateManagedApi action. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.CreatePortalConditionKeys">CreatePortalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePortal action. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.CreateProductApiPageConditionKeys">CreateProductApiPageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProductApiPage action. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.CreateProductConditionKeys">CreateProductConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProduct action. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.CreateProductPageConditionKeys">CreateProductPageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProductPage action. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.PutDiscoveryConfigurationConditionKeys">PutDiscoveryConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDiscoveryConfiguration action. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.PutOrganizationDiscoveryConfigurationConditionKeys">PutOrganizationDiscoveryConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutOrganizationDiscoveryConfiguration action. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.PutProductSharingPolicyConditionKeys">PutProductSharingPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutProductSharingPolicy action. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateManagedApiConditionKeys`<sup>Required</sup> <a name="CreateManagedApiConditionKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.CreateManagedApiConditionKeys"></a>

```typescript
public readonly CreateManagedApiConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateManagedApi action.

---

##### `CreatePortalConditionKeys`<sup>Required</sup> <a name="CreatePortalConditionKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.CreatePortalConditionKeys"></a>

```typescript
public readonly CreatePortalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePortal action.

---

##### `CreateProductApiPageConditionKeys`<sup>Required</sup> <a name="CreateProductApiPageConditionKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.CreateProductApiPageConditionKeys"></a>

```typescript
public readonly CreateProductApiPageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProductApiPage action.

---

##### `CreateProductConditionKeys`<sup>Required</sup> <a name="CreateProductConditionKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.CreateProductConditionKeys"></a>

```typescript
public readonly CreateProductConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProduct action.

---

##### `CreateProductPageConditionKeys`<sup>Required</sup> <a name="CreateProductPageConditionKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.CreateProductPageConditionKeys"></a>

```typescript
public readonly CreateProductPageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProductPage action.

---

##### `PutDiscoveryConfigurationConditionKeys`<sup>Required</sup> <a name="PutDiscoveryConfigurationConditionKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.PutDiscoveryConfigurationConditionKeys"></a>

```typescript
public readonly PutDiscoveryConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDiscoveryConfiguration action.

---

##### `PutOrganizationDiscoveryConfigurationConditionKeys`<sup>Required</sup> <a name="PutOrganizationDiscoveryConfigurationConditionKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.PutOrganizationDiscoveryConfigurationConditionKeys"></a>

```typescript
public readonly PutOrganizationDiscoveryConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutOrganizationDiscoveryConfiguration action.

---

##### `PutProductSharingPolicyConditionKeys`<sup>Required</sup> <a name="PutProductSharingPolicyConditionKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.PutProductSharingPolicyConditionKeys"></a>

```typescript
public readonly PutProductSharingPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutProductSharingPolicy action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.apiportal.ApiportalConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ApiportalOperations <a name="ApiportalOperations" id="@cdk_utils/iam.apiportal.ApiportalOperations"></a>

API operation to required IAM actions mapping for apiportal.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apiportal.ApiportalOperations.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

new apiportal.ApiportalOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.AssociateManagedApis">AssociateManagedApis</a></code> | <code>string[]</code> | IAM actions required for the AssociateManagedApis API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.CreateManagedApi">CreateManagedApi</a></code> | <code>string[]</code> | IAM actions required for the CreateManagedApi API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.CreatePortal">CreatePortal</a></code> | <code>string[]</code> | IAM actions required for the CreatePortal API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.CreatePortalPreview">CreatePortalPreview</a></code> | <code>string[]</code> | IAM actions required for the CreatePortalPreview API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.CreateProduct">CreateProduct</a></code> | <code>string[]</code> | IAM actions required for the CreateProduct API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.CreateProductApiPage">CreateProductApiPage</a></code> | <code>string[]</code> | IAM actions required for the CreateProductApiPage API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.CreateProductPage">CreateProductPage</a></code> | <code>string[]</code> | IAM actions required for the CreateProductPage API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteDiscoveryConfiguration">DeleteDiscoveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteDiscoveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteManagedApi">DeleteManagedApi</a></code> | <code>string[]</code> | IAM actions required for the DeleteManagedApi API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteOrganizationDiscoveryConfiguration">DeleteOrganizationDiscoveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteOrganizationDiscoveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.DeletePortal">DeletePortal</a></code> | <code>string[]</code> | IAM actions required for the DeletePortal API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteProduct">DeleteProduct</a></code> | <code>string[]</code> | IAM actions required for the DeleteProduct API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteProductApiPage">DeleteProductApiPage</a></code> | <code>string[]</code> | IAM actions required for the DeleteProductApiPage API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteProductPage">DeleteProductPage</a></code> | <code>string[]</code> | IAM actions required for the DeleteProductPage API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteProductSharingPolicy">DeleteProductSharingPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteProductSharingPolicy API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.DisassociateManagedApis">DisassociateManagedApis</a></code> | <code>string[]</code> | IAM actions required for the DisassociateManagedApis API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.ListApiInventoryItems">ListApiInventoryItems</a></code> | <code>string[]</code> | IAM actions required for the ListApiInventoryItems API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.ListDiscoveryStatuses">ListDiscoveryStatuses</a></code> | <code>string[]</code> | IAM actions required for the ListDiscoveryStatuses API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.ListManagedApiEvents">ListManagedApiEvents</a></code> | <code>string[]</code> | IAM actions required for the ListManagedApiEvents API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.ListManagedApis">ListManagedApis</a></code> | <code>string[]</code> | IAM actions required for the ListManagedApis API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.ListPortals">ListPortals</a></code> | <code>string[]</code> | IAM actions required for the ListPortals API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.ListProductApiPages">ListProductApiPages</a></code> | <code>string[]</code> | IAM actions required for the ListProductApiPages API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.ListProductPages">ListProductPages</a></code> | <code>string[]</code> | IAM actions required for the ListProductPages API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.ListProducts">ListProducts</a></code> | <code>string[]</code> | IAM actions required for the ListProducts API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetApiInventoryItem">opGetApiInventoryItem</a></code> | <code>string[]</code> | IAM actions required for the GetApiInventoryItem API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetDiscoveryConfiguration">opGetDiscoveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetDiscoveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetManagedApi">opGetManagedApi</a></code> | <code>string[]</code> | IAM actions required for the GetManagedApi API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetOrganizationDiscoveryConfiguration">opGetOrganizationDiscoveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetOrganizationDiscoveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetPortal">opGetPortal</a></code> | <code>string[]</code> | IAM actions required for the GetPortal API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetProduct">opGetProduct</a></code> | <code>string[]</code> | IAM actions required for the GetProduct API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetProductApiPage">opGetProductApiPage</a></code> | <code>string[]</code> | IAM actions required for the GetProductApiPage API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetProductPage">opGetProductPage</a></code> | <code>string[]</code> | IAM actions required for the GetProductPage API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetProductSharingPolicy">opGetProductSharingPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetProductSharingPolicy API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.PutDiscoveryConfiguration">PutDiscoveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutDiscoveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.PutOrganizationDiscoveryConfiguration">PutOrganizationDiscoveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutOrganizationDiscoveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.PutProductSharingPolicy">PutProductSharingPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutProductSharingPolicy API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.StartDiscovery">StartDiscovery</a></code> | <code>string[]</code> | IAM actions required for the StartDiscovery API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.StopDiscovery">StopDiscovery</a></code> | <code>string[]</code> | IAM actions required for the StopDiscovery API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.UpdatePortal">UpdatePortal</a></code> | <code>string[]</code> | IAM actions required for the UpdatePortal API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.UpdatePortalPublishStatus">UpdatePortalPublishStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdatePortalPublishStatus API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.UpdateProduct">UpdateProduct</a></code> | <code>string[]</code> | IAM actions required for the UpdateProduct API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.UpdateProductApiPage">UpdateProductApiPage</a></code> | <code>string[]</code> | IAM actions required for the UpdateProductApiPage API call. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalOperations.property.UpdateProductPage">UpdateProductPage</a></code> | <code>string[]</code> | IAM actions required for the UpdateProductPage API call. |

---

##### `AssociateManagedApis`<sup>Required</sup> <a name="AssociateManagedApis" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.AssociateManagedApis"></a>

```typescript
public readonly AssociateManagedApis: string[];
```

- *Type:* string[]

IAM actions required for the AssociateManagedApis API call.

---

##### `CreateManagedApi`<sup>Required</sup> <a name="CreateManagedApi" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.CreateManagedApi"></a>

```typescript
public readonly CreateManagedApi: string[];
```

- *Type:* string[]

IAM actions required for the CreateManagedApi API call.

---

##### `CreatePortal`<sup>Required</sup> <a name="CreatePortal" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.CreatePortal"></a>

```typescript
public readonly CreatePortal: string[];
```

- *Type:* string[]

IAM actions required for the CreatePortal API call.

---

##### `CreatePortalPreview`<sup>Required</sup> <a name="CreatePortalPreview" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.CreatePortalPreview"></a>

```typescript
public readonly CreatePortalPreview: string[];
```

- *Type:* string[]

IAM actions required for the CreatePortalPreview API call.

---

##### `CreateProduct`<sup>Required</sup> <a name="CreateProduct" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.CreateProduct"></a>

```typescript
public readonly CreateProduct: string[];
```

- *Type:* string[]

IAM actions required for the CreateProduct API call.

---

##### `CreateProductApiPage`<sup>Required</sup> <a name="CreateProductApiPage" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.CreateProductApiPage"></a>

```typescript
public readonly CreateProductApiPage: string[];
```

- *Type:* string[]

IAM actions required for the CreateProductApiPage API call.

---

##### `CreateProductPage`<sup>Required</sup> <a name="CreateProductPage" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.CreateProductPage"></a>

```typescript
public readonly CreateProductPage: string[];
```

- *Type:* string[]

IAM actions required for the CreateProductPage API call.

---

##### `DeleteDiscoveryConfiguration`<sup>Required</sup> <a name="DeleteDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteDiscoveryConfiguration"></a>

```typescript
public readonly DeleteDiscoveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDiscoveryConfiguration API call.

---

##### `DeleteManagedApi`<sup>Required</sup> <a name="DeleteManagedApi" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteManagedApi"></a>

```typescript
public readonly DeleteManagedApi: string[];
```

- *Type:* string[]

IAM actions required for the DeleteManagedApi API call.

---

##### `DeleteOrganizationDiscoveryConfiguration`<sup>Required</sup> <a name="DeleteOrganizationDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteOrganizationDiscoveryConfiguration"></a>

```typescript
public readonly DeleteOrganizationDiscoveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOrganizationDiscoveryConfiguration API call.

---

##### `DeletePortal`<sup>Required</sup> <a name="DeletePortal" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.DeletePortal"></a>

```typescript
public readonly DeletePortal: string[];
```

- *Type:* string[]

IAM actions required for the DeletePortal API call.

---

##### `DeleteProduct`<sup>Required</sup> <a name="DeleteProduct" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteProduct"></a>

```typescript
public readonly DeleteProduct: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProduct API call.

---

##### `DeleteProductApiPage`<sup>Required</sup> <a name="DeleteProductApiPage" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteProductApiPage"></a>

```typescript
public readonly DeleteProductApiPage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProductApiPage API call.

---

##### `DeleteProductPage`<sup>Required</sup> <a name="DeleteProductPage" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteProductPage"></a>

```typescript
public readonly DeleteProductPage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProductPage API call.

---

##### `DeleteProductSharingPolicy`<sup>Required</sup> <a name="DeleteProductSharingPolicy" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.DeleteProductSharingPolicy"></a>

```typescript
public readonly DeleteProductSharingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProductSharingPolicy API call.

---

##### `DisassociateManagedApis`<sup>Required</sup> <a name="DisassociateManagedApis" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.DisassociateManagedApis"></a>

```typescript
public readonly DisassociateManagedApis: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateManagedApis API call.

---

##### `ListApiInventoryItems`<sup>Required</sup> <a name="ListApiInventoryItems" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.ListApiInventoryItems"></a>

```typescript
public readonly ListApiInventoryItems: string[];
```

- *Type:* string[]

IAM actions required for the ListApiInventoryItems API call.

---

##### `ListDiscoveryStatuses`<sup>Required</sup> <a name="ListDiscoveryStatuses" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.ListDiscoveryStatuses"></a>

```typescript
public readonly ListDiscoveryStatuses: string[];
```

- *Type:* string[]

IAM actions required for the ListDiscoveryStatuses API call.

---

##### `ListManagedApiEvents`<sup>Required</sup> <a name="ListManagedApiEvents" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.ListManagedApiEvents"></a>

```typescript
public readonly ListManagedApiEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedApiEvents API call.

---

##### `ListManagedApis`<sup>Required</sup> <a name="ListManagedApis" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.ListManagedApis"></a>

```typescript
public readonly ListManagedApis: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedApis API call.

---

##### `ListPortals`<sup>Required</sup> <a name="ListPortals" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.ListPortals"></a>

```typescript
public readonly ListPortals: string[];
```

- *Type:* string[]

IAM actions required for the ListPortals API call.

---

##### `ListProductApiPages`<sup>Required</sup> <a name="ListProductApiPages" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.ListProductApiPages"></a>

```typescript
public readonly ListProductApiPages: string[];
```

- *Type:* string[]

IAM actions required for the ListProductApiPages API call.

---

##### `ListProductPages`<sup>Required</sup> <a name="ListProductPages" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.ListProductPages"></a>

```typescript
public readonly ListProductPages: string[];
```

- *Type:* string[]

IAM actions required for the ListProductPages API call.

---

##### `ListProducts`<sup>Required</sup> <a name="ListProducts" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.ListProducts"></a>

```typescript
public readonly ListProducts: string[];
```

- *Type:* string[]

IAM actions required for the ListProducts API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetApiInventoryItem`<sup>Required</sup> <a name="opGetApiInventoryItem" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetApiInventoryItem"></a>

```typescript
public readonly opGetApiInventoryItem: string[];
```

- *Type:* string[]

IAM actions required for the GetApiInventoryItem API call.

---

##### `opGetDiscoveryConfiguration`<sup>Required</sup> <a name="opGetDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetDiscoveryConfiguration"></a>

```typescript
public readonly opGetDiscoveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetDiscoveryConfiguration API call.

---

##### `opGetManagedApi`<sup>Required</sup> <a name="opGetManagedApi" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetManagedApi"></a>

```typescript
public readonly opGetManagedApi: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedApi API call.

---

##### `opGetOrganizationDiscoveryConfiguration`<sup>Required</sup> <a name="opGetOrganizationDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetOrganizationDiscoveryConfiguration"></a>

```typescript
public readonly opGetOrganizationDiscoveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetOrganizationDiscoveryConfiguration API call.

---

##### `opGetPortal`<sup>Required</sup> <a name="opGetPortal" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetPortal"></a>

```typescript
public readonly opGetPortal: string[];
```

- *Type:* string[]

IAM actions required for the GetPortal API call.

---

##### `opGetProduct`<sup>Required</sup> <a name="opGetProduct" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetProduct"></a>

```typescript
public readonly opGetProduct: string[];
```

- *Type:* string[]

IAM actions required for the GetProduct API call.

---

##### `opGetProductApiPage`<sup>Required</sup> <a name="opGetProductApiPage" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetProductApiPage"></a>

```typescript
public readonly opGetProductApiPage: string[];
```

- *Type:* string[]

IAM actions required for the GetProductApiPage API call.

---

##### `opGetProductPage`<sup>Required</sup> <a name="opGetProductPage" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetProductPage"></a>

```typescript
public readonly opGetProductPage: string[];
```

- *Type:* string[]

IAM actions required for the GetProductPage API call.

---

##### `opGetProductSharingPolicy`<sup>Required</sup> <a name="opGetProductSharingPolicy" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.opGetProductSharingPolicy"></a>

```typescript
public readonly opGetProductSharingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetProductSharingPolicy API call.

---

##### `PutDiscoveryConfiguration`<sup>Required</sup> <a name="PutDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.PutDiscoveryConfiguration"></a>

```typescript
public readonly PutDiscoveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutDiscoveryConfiguration API call.

---

##### `PutOrganizationDiscoveryConfiguration`<sup>Required</sup> <a name="PutOrganizationDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.PutOrganizationDiscoveryConfiguration"></a>

```typescript
public readonly PutOrganizationDiscoveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutOrganizationDiscoveryConfiguration API call.

---

##### `PutProductSharingPolicy`<sup>Required</sup> <a name="PutProductSharingPolicy" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.PutProductSharingPolicy"></a>

```typescript
public readonly PutProductSharingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutProductSharingPolicy API call.

---

##### `StartDiscovery`<sup>Required</sup> <a name="StartDiscovery" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.StartDiscovery"></a>

```typescript
public readonly StartDiscovery: string[];
```

- *Type:* string[]

IAM actions required for the StartDiscovery API call.

---

##### `StopDiscovery`<sup>Required</sup> <a name="StopDiscovery" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.StopDiscovery"></a>

```typescript
public readonly StopDiscovery: string[];
```

- *Type:* string[]

IAM actions required for the StopDiscovery API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdatePortal`<sup>Required</sup> <a name="UpdatePortal" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.UpdatePortal"></a>

```typescript
public readonly UpdatePortal: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePortal API call.

---

##### `UpdatePortalPublishStatus`<sup>Required</sup> <a name="UpdatePortalPublishStatus" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.UpdatePortalPublishStatus"></a>

```typescript
public readonly UpdatePortalPublishStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePortalPublishStatus API call.

---

##### `UpdateProduct`<sup>Required</sup> <a name="UpdateProduct" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.UpdateProduct"></a>

```typescript
public readonly UpdateProduct: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProduct API call.

---

##### `UpdateProductApiPage`<sup>Required</sup> <a name="UpdateProductApiPage" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.UpdateProductApiPage"></a>

```typescript
public readonly UpdateProductApiPage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProductApiPage API call.

---

##### `UpdateProductPage`<sup>Required</sup> <a name="UpdateProductPage" id="@cdk_utils/iam.apiportal.ApiportalOperations.property.UpdateProductPage"></a>

```typescript
public readonly UpdateProductPage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProductPage API call.

---

### ApiportalResources <a name="ApiportalResources" id="@cdk_utils/iam.apiportal.ApiportalResources"></a>

ARN builders, validators, and parsers for apiportal resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apiportal.ApiportalResources.Initializer"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

new apiportal.ApiportalResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.discoveryConfiguration">discoveryConfiguration</a></code> | Builds an ARN for the DiscoveryConfiguration resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.isValidDiscoveryConfigurationArn">isValidDiscoveryConfigurationArn</a></code> | Validates whether a string is a valid ARN for the DiscoveryConfiguration resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.isValidManagedAPIArn">isValidManagedAPIArn</a></code> | Validates whether a string is a valid ARN for the ManagedApi resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.isValidOrganizationDiscoveryConfigurationArn">isValidOrganizationDiscoveryConfigurationArn</a></code> | Validates whether a string is a valid ARN for the OrganizationDiscoveryConfiguration resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.isValidPortalArn">isValidPortalArn</a></code> | Validates whether a string is a valid ARN for the Portal resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.isValidProductAPIPageArn">isValidProductAPIPageArn</a></code> | Validates whether a string is a valid ARN for the ProductApiPage resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.isValidProductArn">isValidProductArn</a></code> | Validates whether a string is a valid ARN for the Product resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.isValidProductPageArn">isValidProductPageArn</a></code> | Validates whether a string is a valid ARN for the ProductPage resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.isValidProductSharingPolicyArn">isValidProductSharingPolicyArn</a></code> | Validates whether a string is a valid ARN for the ProductSharingPolicy resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.managedAPI">managedAPI</a></code> | Builds an ARN for the ManagedApi resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.organizationDiscoveryConfiguration">organizationDiscoveryConfiguration</a></code> | Builds an ARN for the OrganizationDiscoveryConfiguration resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.parseDiscoveryConfigurationArn">parseDiscoveryConfigurationArn</a></code> | Parses a DiscoveryConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.parseManagedAPIArn">parseManagedAPIArn</a></code> | Parses a ManagedApi ARN into its components. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.parseOrganizationDiscoveryConfigurationArn">parseOrganizationDiscoveryConfigurationArn</a></code> | Parses a OrganizationDiscoveryConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.parsePortalArn">parsePortalArn</a></code> | Parses a Portal ARN into its components. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.parseProductAPIPageArn">parseProductAPIPageArn</a></code> | Parses a ProductApiPage ARN into its components. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.parseProductArn">parseProductArn</a></code> | Parses a Product ARN into its components. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.parseProductPageArn">parseProductPageArn</a></code> | Parses a ProductPage ARN into its components. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.parseProductSharingPolicyArn">parseProductSharingPolicyArn</a></code> | Parses a ProductSharingPolicy ARN into its components. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.portal">portal</a></code> | Builds an ARN for the Portal resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.product">product</a></code> | Builds an ARN for the Product resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.productAPIPage">productAPIPage</a></code> | Builds an ARN for the ProductApiPage resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.productPage">productPage</a></code> | Builds an ARN for the ProductPage resource. |
| <code><a href="#@cdk_utils/iam.apiportal.ApiportalResources.productSharingPolicy">productSharingPolicy</a></code> | Builds an ARN for the ProductSharingPolicy resource. |

---

##### `discoveryConfiguration` <a name="discoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalResources.discoveryConfiguration"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.discoveryConfiguration(props: ApiportalDiscoveryConfigurationArnProps)
```

Builds an ARN for the DiscoveryConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apiportal.ApiportalResources.discoveryConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apiportal.ApiportalDiscoveryConfigurationArnProps">ApiportalDiscoveryConfigurationArnProps</a>

---

##### `isValidDiscoveryConfigurationArn` <a name="isValidDiscoveryConfigurationArn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidDiscoveryConfigurationArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.isValidDiscoveryConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the DiscoveryConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidDiscoveryConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedAPIArn` <a name="isValidManagedAPIArn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidManagedAPIArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.isValidManagedAPIArn(arn: string)
```

Validates whether a string is a valid ARN for the ManagedApi resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidManagedAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOrganizationDiscoveryConfigurationArn` <a name="isValidOrganizationDiscoveryConfigurationArn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidOrganizationDiscoveryConfigurationArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.isValidOrganizationDiscoveryConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the OrganizationDiscoveryConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidOrganizationDiscoveryConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPortalArn` <a name="isValidPortalArn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidPortalArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.isValidPortalArn(arn: string)
```

Validates whether a string is a valid ARN for the Portal resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidPortalArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProductAPIPageArn` <a name="isValidProductAPIPageArn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidProductAPIPageArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.isValidProductAPIPageArn(arn: string)
```

Validates whether a string is a valid ARN for the ProductApiPage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidProductAPIPageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProductArn` <a name="isValidProductArn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidProductArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.isValidProductArn(arn: string)
```

Validates whether a string is a valid ARN for the Product resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidProductArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProductPageArn` <a name="isValidProductPageArn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidProductPageArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.isValidProductPageArn(arn: string)
```

Validates whether a string is a valid ARN for the ProductPage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidProductPageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProductSharingPolicyArn` <a name="isValidProductSharingPolicyArn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidProductSharingPolicyArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.isValidProductSharingPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the ProductSharingPolicy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.isValidProductSharingPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `managedAPI` <a name="managedAPI" id="@cdk_utils/iam.apiportal.ApiportalResources.managedAPI"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.managedAPI(props: ApiportalManagedAPIArnProps)
```

Builds an ARN for the ManagedApi resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apiportal.ApiportalResources.managedAPI.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apiportal.ApiportalManagedAPIArnProps">ApiportalManagedAPIArnProps</a>

---

##### `organizationDiscoveryConfiguration` <a name="organizationDiscoveryConfiguration" id="@cdk_utils/iam.apiportal.ApiportalResources.organizationDiscoveryConfiguration"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.organizationDiscoveryConfiguration(props: ApiportalOrganizationDiscoveryConfigurationArnProps)
```

Builds an ARN for the OrganizationDiscoveryConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apiportal.ApiportalResources.organizationDiscoveryConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apiportal.ApiportalOrganizationDiscoveryConfigurationArnProps">ApiportalOrganizationDiscoveryConfigurationArnProps</a>

---

##### `parseDiscoveryConfigurationArn` <a name="parseDiscoveryConfigurationArn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseDiscoveryConfigurationArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.parseDiscoveryConfigurationArn(arn: string)
```

Parses a DiscoveryConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseDiscoveryConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedAPIArn` <a name="parseManagedAPIArn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseManagedAPIArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.parseManagedAPIArn(arn: string)
```

Parses a ManagedApi ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseManagedAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOrganizationDiscoveryConfigurationArn` <a name="parseOrganizationDiscoveryConfigurationArn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseOrganizationDiscoveryConfigurationArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.parseOrganizationDiscoveryConfigurationArn(arn: string)
```

Parses a OrganizationDiscoveryConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseOrganizationDiscoveryConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePortalArn` <a name="parsePortalArn" id="@cdk_utils/iam.apiportal.ApiportalResources.parsePortalArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.parsePortalArn(arn: string)
```

Parses a Portal ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.parsePortalArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProductAPIPageArn` <a name="parseProductAPIPageArn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseProductAPIPageArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.parseProductAPIPageArn(arn: string)
```

Parses a ProductApiPage ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseProductAPIPageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProductArn` <a name="parseProductArn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseProductArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.parseProductArn(arn: string)
```

Parses a Product ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseProductArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProductPageArn` <a name="parseProductPageArn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseProductPageArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.parseProductPageArn(arn: string)
```

Parses a ProductPage ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseProductPageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProductSharingPolicyArn` <a name="parseProductSharingPolicyArn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseProductSharingPolicyArn"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.parseProductSharingPolicyArn(arn: string)
```

Parses a ProductSharingPolicy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apiportal.ApiportalResources.parseProductSharingPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `portal` <a name="portal" id="@cdk_utils/iam.apiportal.ApiportalResources.portal"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.portal(props: ApiportalPortalArnProps)
```

Builds an ARN for the Portal resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apiportal.ApiportalResources.portal.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apiportal.ApiportalPortalArnProps">ApiportalPortalArnProps</a>

---

##### `product` <a name="product" id="@cdk_utils/iam.apiportal.ApiportalResources.product"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.product(props: ApiportalProductArnProps)
```

Builds an ARN for the Product resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apiportal.ApiportalResources.product.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apiportal.ApiportalProductArnProps">ApiportalProductArnProps</a>

---

##### `productAPIPage` <a name="productAPIPage" id="@cdk_utils/iam.apiportal.ApiportalResources.productAPIPage"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.productAPIPage(props: ApiportalProductAPIPageArnProps)
```

Builds an ARN for the ProductApiPage resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apiportal.ApiportalResources.productAPIPage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apiportal.ApiportalProductAPIPageArnProps">ApiportalProductAPIPageArnProps</a>

---

##### `productPage` <a name="productPage" id="@cdk_utils/iam.apiportal.ApiportalResources.productPage"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.productPage(props: ApiportalProductPageArnProps)
```

Builds an ARN for the ProductPage resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apiportal.ApiportalResources.productPage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apiportal.ApiportalProductPageArnProps">ApiportalProductPageArnProps</a>

---

##### `productSharingPolicy` <a name="productSharingPolicy" id="@cdk_utils/iam.apiportal.ApiportalResources.productSharingPolicy"></a>

```typescript
import { apiportal } from '@cdk_utils/iam'

apiportal.ApiportalResources.productSharingPolicy(props: ApiportalProductSharingPolicyArnProps)
```

Builds an ARN for the ProductSharingPolicy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apiportal.ApiportalResources.productSharingPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apiportal.ApiportalProductSharingPolicyArnProps">ApiportalProductSharingPolicyArnProps</a>

---




