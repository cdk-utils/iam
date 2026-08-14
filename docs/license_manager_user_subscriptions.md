# `license_manager_user_subscriptions` Submodule <a name="`license_manager_user_subscriptions` Submodule" id="@cdk_utils/iam.license_manager_user_subscriptions"></a>


## Structs <a name="Structs" id="Structs"></a>

### LicenseManagerUserSubscriptionsIdentityProviderArnComponents <a name="LicenseManagerUserSubscriptionsIdentityProviderArnComponents" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents"></a>

Parsed components of a identity-provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

const licenseManagerUserSubscriptionsIdentityProviderArnComponents: license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | The IdentityProviderId component. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

The IdentityProviderId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LicenseManagerUserSubscriptionsIdentityProviderArnProps <a name="LicenseManagerUserSubscriptionsIdentityProviderArnProps" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps"></a>

Properties for building a identity-provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

const licenseManagerUserSubscriptionsIdentityProviderArnProps: license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | The IdentityProviderId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

The IdentityProviderId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LicenseManagerUserSubscriptionsInstanceUserArnComponents <a name="LicenseManagerUserSubscriptionsInstanceUserArnComponents" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents"></a>

Parsed components of a instance-user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

const licenseManagerUserSubscriptionsInstanceUserArnComponents: license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents.property.instanceUserId">instanceUserId</a></code> | <code>string</code> | The InstanceUserId component. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceUserId`<sup>Required</sup> <a name="instanceUserId" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents.property.instanceUserId"></a>

```typescript
public readonly instanceUserId: string;
```

- *Type:* string

The InstanceUserId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LicenseManagerUserSubscriptionsInstanceUserArnProps <a name="LicenseManagerUserSubscriptionsInstanceUserArnProps" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps"></a>

Properties for building a instance-user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

const licenseManagerUserSubscriptionsInstanceUserArnProps: license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps.property.instanceUserId">instanceUserId</a></code> | <code>string</code> | The InstanceUserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceUserId`<sup>Required</sup> <a name="instanceUserId" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps.property.instanceUserId"></a>

```typescript
public readonly instanceUserId: string;
```

- *Type:* string

The InstanceUserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents <a name="LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents"></a>

Parsed components of a license-server-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

const licenseManagerUserSubscriptionsLicenseServerEndpointArnComponents: license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents.property.licenseServerEndpointId">licenseServerEndpointId</a></code> | <code>string</code> | The LicenseServerEndpointId component. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `licenseServerEndpointId`<sup>Required</sup> <a name="licenseServerEndpointId" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents.property.licenseServerEndpointId"></a>

```typescript
public readonly licenseServerEndpointId: string;
```

- *Type:* string

The LicenseServerEndpointId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps <a name="LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps"></a>

Properties for building a license-server-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

const licenseManagerUserSubscriptionsLicenseServerEndpointArnProps: license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps.property.licenseServerEndpointId">licenseServerEndpointId</a></code> | <code>string</code> | The LicenseServerEndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `licenseServerEndpointId`<sup>Required</sup> <a name="licenseServerEndpointId" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps.property.licenseServerEndpointId"></a>

```typescript
public readonly licenseServerEndpointId: string;
```

- *Type:* string

The LicenseServerEndpointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LicenseManagerUserSubscriptionsProductSubscriptionArnComponents <a name="LicenseManagerUserSubscriptionsProductSubscriptionArnComponents" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents"></a>

Parsed components of a product-subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

const licenseManagerUserSubscriptionsProductSubscriptionArnComponents: license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents.property.productSubscriptionId">productSubscriptionId</a></code> | <code>string</code> | The ProductSubscriptionId component. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `productSubscriptionId`<sup>Required</sup> <a name="productSubscriptionId" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents.property.productSubscriptionId"></a>

```typescript
public readonly productSubscriptionId: string;
```

- *Type:* string

The ProductSubscriptionId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LicenseManagerUserSubscriptionsProductSubscriptionArnProps <a name="LicenseManagerUserSubscriptionsProductSubscriptionArnProps" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps"></a>

Properties for building a product-subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

const licenseManagerUserSubscriptionsProductSubscriptionArnProps: license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps.property.productSubscriptionId">productSubscriptionId</a></code> | <code>string</code> | The ProductSubscriptionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `productSubscriptionId`<sup>Required</sup> <a name="productSubscriptionId" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps.property.productSubscriptionId"></a>

```typescript
public readonly productSubscriptionId: string;
```

- *Type:* string

The ProductSubscriptionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LicenseManagerUserSubscriptionsActions <a name="LicenseManagerUserSubscriptionsActions" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions"></a>

IAM action constants for the license-manager-user-subscriptions service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

new license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AssociateUser">AssociateUser</a></code> | <code>string</code> | [Write] license-manager-user-subscriptions:AssociateUser. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.CreateLicenseServerEndpoint">CreateLicenseServerEndpoint</a></code> | <code>string</code> | [Write] license-manager-user-subscriptions:CreateLicenseServerEndpoint. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.DeleteLicenseServerEndpoint">DeleteLicenseServerEndpoint</a></code> | <code>string</code> | [Write] license-manager-user-subscriptions:DeleteLicenseServerEndpoint. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.DeregisterIdentityProvider">DeregisterIdentityProvider</a></code> | <code>string</code> | [Write] license-manager-user-subscriptions:DeregisterIdentityProvider. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.DisassociateUser">DisassociateUser</a></code> | <code>string</code> | [Write] license-manager-user-subscriptions:DisassociateUser. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListIdentityProviders">ListIdentityProviders</a></code> | <code>string</code> | [List] license-manager-user-subscriptions:ListIdentityProviders. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListInstances">ListInstances</a></code> | <code>string</code> | [List] license-manager-user-subscriptions:ListInstances. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListLicenseServerEndpoints">ListLicenseServerEndpoints</a></code> | <code>string</code> | [List] license-manager-user-subscriptions:ListLicenseServerEndpoints. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListProductSubscriptions">ListProductSubscriptions</a></code> | <code>string</code> | [List] license-manager-user-subscriptions:ListProductSubscriptions. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] license-manager-user-subscriptions:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListUserAssociations">ListUserAssociations</a></code> | <code>string</code> | [List] license-manager-user-subscriptions:ListUserAssociations. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.RegisterIdentityProvider">RegisterIdentityProvider</a></code> | <code>string</code> | [Write] license-manager-user-subscriptions:RegisterIdentityProvider. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.StartProductSubscription">StartProductSubscription</a></code> | <code>string</code> | [Write] license-manager-user-subscriptions:StartProductSubscription. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.StopProductSubscription">StopProductSubscription</a></code> | <code>string</code> | [Write] license-manager-user-subscriptions:StopProductSubscription. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] license-manager-user-subscriptions:TagResource. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] license-manager-user-subscriptions:UntagResource. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.UpdateIdentityProviderSettings">UpdateIdentityProviderSettings</a></code> | <code>string</code> | [Write] license-manager-user-subscriptions:UpdateIdentityProviderSettings. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateUser`<sup>Required</sup> <a name="AssociateUser" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.AssociateUser"></a>

```typescript
public readonly AssociateUser: string;
```

- *Type:* string

[Write] license-manager-user-subscriptions:AssociateUser.

---

##### `CreateLicenseServerEndpoint`<sup>Required</sup> <a name="CreateLicenseServerEndpoint" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.CreateLicenseServerEndpoint"></a>

```typescript
public readonly CreateLicenseServerEndpoint: string;
```

- *Type:* string

[Write] license-manager-user-subscriptions:CreateLicenseServerEndpoint.

---

##### `DeleteLicenseServerEndpoint`<sup>Required</sup> <a name="DeleteLicenseServerEndpoint" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.DeleteLicenseServerEndpoint"></a>

```typescript
public readonly DeleteLicenseServerEndpoint: string;
```

- *Type:* string

[Write] license-manager-user-subscriptions:DeleteLicenseServerEndpoint.

---

##### `DeregisterIdentityProvider`<sup>Required</sup> <a name="DeregisterIdentityProvider" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.DeregisterIdentityProvider"></a>

```typescript
public readonly DeregisterIdentityProvider: string;
```

- *Type:* string

[Write] license-manager-user-subscriptions:DeregisterIdentityProvider.

---

##### `DisassociateUser`<sup>Required</sup> <a name="DisassociateUser" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.DisassociateUser"></a>

```typescript
public readonly DisassociateUser: string;
```

- *Type:* string

[Write] license-manager-user-subscriptions:DisassociateUser.

---

##### `ListIdentityProviders`<sup>Required</sup> <a name="ListIdentityProviders" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListIdentityProviders"></a>

```typescript
public readonly ListIdentityProviders: string;
```

- *Type:* string

[List] license-manager-user-subscriptions:ListIdentityProviders.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListInstances"></a>

```typescript
public readonly ListInstances: string;
```

- *Type:* string

[List] license-manager-user-subscriptions:ListInstances.

---

##### `ListLicenseServerEndpoints`<sup>Required</sup> <a name="ListLicenseServerEndpoints" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListLicenseServerEndpoints"></a>

```typescript
public readonly ListLicenseServerEndpoints: string;
```

- *Type:* string

[List] license-manager-user-subscriptions:ListLicenseServerEndpoints.

---

##### `ListProductSubscriptions`<sup>Required</sup> <a name="ListProductSubscriptions" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListProductSubscriptions"></a>

```typescript
public readonly ListProductSubscriptions: string;
```

- *Type:* string

[List] license-manager-user-subscriptions:ListProductSubscriptions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] license-manager-user-subscriptions:ListTagsForResource.

---

##### `ListUserAssociations`<sup>Required</sup> <a name="ListUserAssociations" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.ListUserAssociations"></a>

```typescript
public readonly ListUserAssociations: string;
```

- *Type:* string

[List] license-manager-user-subscriptions:ListUserAssociations.

---

##### `RegisterIdentityProvider`<sup>Required</sup> <a name="RegisterIdentityProvider" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.RegisterIdentityProvider"></a>

```typescript
public readonly RegisterIdentityProvider: string;
```

- *Type:* string

[Write] license-manager-user-subscriptions:RegisterIdentityProvider.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartProductSubscription`<sup>Required</sup> <a name="StartProductSubscription" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.StartProductSubscription"></a>

```typescript
public readonly StartProductSubscription: string;
```

- *Type:* string

[Write] license-manager-user-subscriptions:StartProductSubscription.

---

##### `StopProductSubscription`<sup>Required</sup> <a name="StopProductSubscription" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.StopProductSubscription"></a>

```typescript
public readonly StopProductSubscription: string;
```

- *Type:* string

[Write] license-manager-user-subscriptions:StopProductSubscription.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] license-manager-user-subscriptions:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] license-manager-user-subscriptions:UntagResource.

---

##### `UpdateIdentityProviderSettings`<sup>Required</sup> <a name="UpdateIdentityProviderSettings" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsActions.property.UpdateIdentityProviderSettings"></a>

```typescript
public readonly UpdateIdentityProviderSettings: string;
```

- *Type:* string

[Write] license-manager-user-subscriptions:UpdateIdentityProviderSettings.

---

### LicenseManagerUserSubscriptionsConditions <a name="LicenseManagerUserSubscriptionsConditions" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions"></a>

Condition key constants and builders for license-manager-user-subscriptions.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

new license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.requestTag"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.resourceTag"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.tagKeys"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.AssociateUserConditionKeys">AssociateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateUser action. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.CreateLicenseServerEndpointConditionKeys">CreateLicenseServerEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLicenseServerEndpoint action. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.RegisterIdentityProviderConditionKeys">RegisterIdentityProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterIdentityProvider action. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.StartProductSubscriptionConditionKeys">StartProductSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartProductSubscription action. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |

---

##### `AssociateUserConditionKeys`<sup>Required</sup> <a name="AssociateUserConditionKeys" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.AssociateUserConditionKeys"></a>

```typescript
public readonly AssociateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateUser action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateLicenseServerEndpointConditionKeys`<sup>Required</sup> <a name="CreateLicenseServerEndpointConditionKeys" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.CreateLicenseServerEndpointConditionKeys"></a>

```typescript
public readonly CreateLicenseServerEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLicenseServerEndpoint action.

---

##### `RegisterIdentityProviderConditionKeys`<sup>Required</sup> <a name="RegisterIdentityProviderConditionKeys" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.RegisterIdentityProviderConditionKeys"></a>

```typescript
public readonly RegisterIdentityProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterIdentityProvider action.

---

##### `StartProductSubscriptionConditionKeys`<sup>Required</sup> <a name="StartProductSubscriptionConditionKeys" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.StartProductSubscriptionConditionKeys"></a>

```typescript
public readonly StartProductSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartProductSubscription action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

### LicenseManagerUserSubscriptionsOperations <a name="LicenseManagerUserSubscriptionsOperations" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations"></a>

API operation to required IAM actions mapping for license-manager-user-subscriptions.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

new license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.AssociateUser">AssociateUser</a></code> | <code>string[]</code> | IAM actions required for the AssociateUser API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.CreateLicenseServerEndpoint">CreateLicenseServerEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateLicenseServerEndpoint API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.DeleteLicenseServerEndpoint">DeleteLicenseServerEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteLicenseServerEndpoint API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.DeregisterIdentityProvider">DeregisterIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the DeregisterIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.DisassociateUser">DisassociateUser</a></code> | <code>string[]</code> | IAM actions required for the DisassociateUser API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListIdentityProviders">ListIdentityProviders</a></code> | <code>string[]</code> | IAM actions required for the ListIdentityProviders API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListInstances">ListInstances</a></code> | <code>string[]</code> | IAM actions required for the ListInstances API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListLicenseServerEndpoints">ListLicenseServerEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListLicenseServerEndpoints API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListProductSubscriptions">ListProductSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListProductSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListUserAssociations">ListUserAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListUserAssociations API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.RegisterIdentityProvider">RegisterIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the RegisterIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.StartProductSubscription">StartProductSubscription</a></code> | <code>string[]</code> | IAM actions required for the StartProductSubscription API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.StopProductSubscription">StopProductSubscription</a></code> | <code>string[]</code> | IAM actions required for the StopProductSubscription API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.UpdateIdentityProviderSettings">UpdateIdentityProviderSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateIdentityProviderSettings API call. |

---

##### `AssociateUser`<sup>Required</sup> <a name="AssociateUser" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.AssociateUser"></a>

```typescript
public readonly AssociateUser: string[];
```

- *Type:* string[]

IAM actions required for the AssociateUser API call.

---

##### `CreateLicenseServerEndpoint`<sup>Required</sup> <a name="CreateLicenseServerEndpoint" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.CreateLicenseServerEndpoint"></a>

```typescript
public readonly CreateLicenseServerEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateLicenseServerEndpoint API call.

---

##### `DeleteLicenseServerEndpoint`<sup>Required</sup> <a name="DeleteLicenseServerEndpoint" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.DeleteLicenseServerEndpoint"></a>

```typescript
public readonly DeleteLicenseServerEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLicenseServerEndpoint API call.

---

##### `DeregisterIdentityProvider`<sup>Required</sup> <a name="DeregisterIdentityProvider" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.DeregisterIdentityProvider"></a>

```typescript
public readonly DeregisterIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterIdentityProvider API call.

---

##### `DisassociateUser`<sup>Required</sup> <a name="DisassociateUser" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.DisassociateUser"></a>

```typescript
public readonly DisassociateUser: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateUser API call.

---

##### `ListIdentityProviders`<sup>Required</sup> <a name="ListIdentityProviders" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListIdentityProviders"></a>

```typescript
public readonly ListIdentityProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentityProviders API call.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListInstances"></a>

```typescript
public readonly ListInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListInstances API call.

---

##### `ListLicenseServerEndpoints`<sup>Required</sup> <a name="ListLicenseServerEndpoints" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListLicenseServerEndpoints"></a>

```typescript
public readonly ListLicenseServerEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenseServerEndpoints API call.

---

##### `ListProductSubscriptions`<sup>Required</sup> <a name="ListProductSubscriptions" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListProductSubscriptions"></a>

```typescript
public readonly ListProductSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListProductSubscriptions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListUserAssociations`<sup>Required</sup> <a name="ListUserAssociations" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.ListUserAssociations"></a>

```typescript
public readonly ListUserAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListUserAssociations API call.

---

##### `RegisterIdentityProvider`<sup>Required</sup> <a name="RegisterIdentityProvider" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.RegisterIdentityProvider"></a>

```typescript
public readonly RegisterIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the RegisterIdentityProvider API call.

---

##### `StartProductSubscription`<sup>Required</sup> <a name="StartProductSubscription" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.StartProductSubscription"></a>

```typescript
public readonly StartProductSubscription: string[];
```

- *Type:* string[]

IAM actions required for the StartProductSubscription API call.

---

##### `StopProductSubscription`<sup>Required</sup> <a name="StopProductSubscription" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.StopProductSubscription"></a>

```typescript
public readonly StopProductSubscription: string[];
```

- *Type:* string[]

IAM actions required for the StopProductSubscription API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateIdentityProviderSettings`<sup>Required</sup> <a name="UpdateIdentityProviderSettings" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsOperations.property.UpdateIdentityProviderSettings"></a>

```typescript
public readonly UpdateIdentityProviderSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIdentityProviderSettings API call.

---

### LicenseManagerUserSubscriptionsResources <a name="LicenseManagerUserSubscriptionsResources" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources"></a>

ARN builders, validators, and parsers for license-manager-user-subscriptions resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.Initializer"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

new license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.identityProvider">identityProvider</a></code> | Builds an ARN for the identity-provider resource. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.instanceUser">instanceUser</a></code> | Builds an ARN for the instance-user resource. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidIdentityProviderArn">isValidIdentityProviderArn</a></code> | Validates whether a string is a valid ARN for the identity-provider resource. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidInstanceUserArn">isValidInstanceUserArn</a></code> | Validates whether a string is a valid ARN for the instance-user resource. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidLicenseServerEndpointArn">isValidLicenseServerEndpointArn</a></code> | Validates whether a string is a valid ARN for the license-server-endpoint resource. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidProductSubscriptionArn">isValidProductSubscriptionArn</a></code> | Validates whether a string is a valid ARN for the product-subscription resource. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.licenseServerEndpoint">licenseServerEndpoint</a></code> | Builds an ARN for the license-server-endpoint resource. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseIdentityProviderArn">parseIdentityProviderArn</a></code> | Parses a identity-provider ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseInstanceUserArn">parseInstanceUserArn</a></code> | Parses a instance-user ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseLicenseServerEndpointArn">parseLicenseServerEndpointArn</a></code> | Parses a license-server-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseProductSubscriptionArn">parseProductSubscriptionArn</a></code> | Parses a product-subscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.productSubscription">productSubscription</a></code> | Builds an ARN for the product-subscription resource. |

---

##### `identityProvider` <a name="identityProvider" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.identityProvider"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.identityProvider(props: LicenseManagerUserSubscriptionsIdentityProviderArnProps)
```

Builds an ARN for the identity-provider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.identityProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsIdentityProviderArnProps">LicenseManagerUserSubscriptionsIdentityProviderArnProps</a>

---

##### `instanceUser` <a name="instanceUser" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.instanceUser"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.instanceUser(props: LicenseManagerUserSubscriptionsInstanceUserArnProps)
```

Builds an ARN for the instance-user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.instanceUser.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsInstanceUserArnProps">LicenseManagerUserSubscriptionsInstanceUserArnProps</a>

---

##### `isValidIdentityProviderArn` <a name="isValidIdentityProviderArn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidIdentityProviderArn"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidIdentityProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the identity-provider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidIdentityProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceUserArn` <a name="isValidInstanceUserArn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidInstanceUserArn"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidInstanceUserArn(arn: string)
```

Validates whether a string is a valid ARN for the instance-user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidInstanceUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLicenseServerEndpointArn` <a name="isValidLicenseServerEndpointArn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidLicenseServerEndpointArn"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidLicenseServerEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the license-server-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidLicenseServerEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProductSubscriptionArn` <a name="isValidProductSubscriptionArn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidProductSubscriptionArn"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidProductSubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the product-subscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.isValidProductSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `licenseServerEndpoint` <a name="licenseServerEndpoint" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.licenseServerEndpoint"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.licenseServerEndpoint(props: LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps)
```

Builds an ARN for the license-server-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.licenseServerEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps">LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps</a>

---

##### `parseIdentityProviderArn` <a name="parseIdentityProviderArn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseIdentityProviderArn"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseIdentityProviderArn(arn: string)
```

Parses a identity-provider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseIdentityProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceUserArn` <a name="parseInstanceUserArn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseInstanceUserArn"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseInstanceUserArn(arn: string)
```

Parses a instance-user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseInstanceUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLicenseServerEndpointArn` <a name="parseLicenseServerEndpointArn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseLicenseServerEndpointArn"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseLicenseServerEndpointArn(arn: string)
```

Parses a license-server-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseLicenseServerEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProductSubscriptionArn` <a name="parseProductSubscriptionArn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseProductSubscriptionArn"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseProductSubscriptionArn(arn: string)
```

Parses a product-subscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.parseProductSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `productSubscription` <a name="productSubscription" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.productSubscription"></a>

```typescript
import { license_manager_user_subscriptions } from '@cdk_utils/iam'

license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.productSubscription(props: LicenseManagerUserSubscriptionsProductSubscriptionArnProps)
```

Builds an ARN for the product-subscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsResources.productSubscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager_user_subscriptions.LicenseManagerUserSubscriptionsProductSubscriptionArnProps">LicenseManagerUserSubscriptionsProductSubscriptionArnProps</a>

---




