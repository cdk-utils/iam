# `sso` Submodule <a name="`sso` Submodule" id="@cdk_utils/iam.sso"></a>


## Structs <a name="Structs" id="Structs"></a>

### SSOAccountArnComponents <a name="SSOAccountArnComponents" id="@cdk_utils/iam.sso.SSOAccountArnComponents"></a>

Parsed components of a Account ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOAccountArnComponents.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOAccountArnComponents: sso.SSOAccountArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOAccountArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOAccountArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.sso.SSOAccountArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOAccountArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sso.SSOAccountArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.sso.SSOAccountArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOAccountArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sso.SSOAccountArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSOAccountArnProps <a name="SSOAccountArnProps" id="@cdk_utils/iam.sso.SSOAccountArnProps"></a>

Properties for building a Account ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOAccountArnProps.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOAccountArnProps: sso.SSOAccountArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOAccountArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOAccountArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOAccountArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOAccountArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.sso.SSOAccountArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sso.SSOAccountArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOAccountArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sso.SSOAccountArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSOApplicationArnComponents <a name="SSOApplicationArnComponents" id="@cdk_utils/iam.sso.SSOApplicationArnComponents"></a>

Parsed components of a Application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOApplicationArnComponents.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOApplicationArnComponents: sso.SSOApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sso.SSOApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.sso.SSOApplicationArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.sso.SSOApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.sso.SSOApplicationArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sso.SSOApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSOApplicationArnProps <a name="SSOApplicationArnProps" id="@cdk_utils/iam.sso.SSOApplicationArnProps"></a>

Properties for building a Application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOApplicationArnProps.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOApplicationArnProps: sso.SSOApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.sso.SSOApplicationArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.sso.SSOApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.sso.SSOApplicationArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sso.SSOApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sso.SSOApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSOApplicationProviderArnComponents <a name="SSOApplicationProviderArnComponents" id="@cdk_utils/iam.sso.SSOApplicationProviderArnComponents"></a>

Parsed components of a ApplicationProvider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOApplicationProviderArnComponents.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOApplicationProviderArnComponents: sso.SSOApplicationProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationProviderArnComponents.property.applicationProviderId">applicationProviderId</a></code> | <code>string</code> | The ApplicationProviderId component. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sso.SSOApplicationProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationProviderId`<sup>Required</sup> <a name="applicationProviderId" id="@cdk_utils/iam.sso.SSOApplicationProviderArnComponents.property.applicationProviderId"></a>

```typescript
public readonly applicationProviderId: string;
```

- *Type:* string

The ApplicationProviderId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOApplicationProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sso.SSOApplicationProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSOApplicationProviderArnProps <a name="SSOApplicationProviderArnProps" id="@cdk_utils/iam.sso.SSOApplicationProviderArnProps"></a>

Properties for building a ApplicationProvider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOApplicationProviderArnProps.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOApplicationProviderArnProps: sso.SSOApplicationProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationProviderArnProps.property.applicationProviderId">applicationProviderId</a></code> | <code>string</code> | The ApplicationProviderId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOApplicationProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationProviderId`<sup>Required</sup> <a name="applicationProviderId" id="@cdk_utils/iam.sso.SSOApplicationProviderArnProps.property.applicationProviderId"></a>

```typescript
public readonly applicationProviderId: string;
```

- *Type:* string

The ApplicationProviderId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sso.SSOApplicationProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOApplicationProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sso.SSOApplicationProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSOInstanceArnComponents <a name="SSOInstanceArnComponents" id="@cdk_utils/iam.sso.SSOInstanceArnComponents"></a>

Parsed components of a Instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOInstanceArnComponents.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOInstanceArnComponents: sso.SSOInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOInstanceArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.sso.SSOInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sso.SSOInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.sso.SSOInstanceArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sso.SSOInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSOInstanceArnProps <a name="SSOInstanceArnProps" id="@cdk_utils/iam.sso.SSOInstanceArnProps"></a>

Properties for building a Instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOInstanceArnProps.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOInstanceArnProps: sso.SSOInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOInstanceArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.sso.SSOInstanceArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sso.SSOInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sso.SSOInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSOPermissionSetArnComponents <a name="SSOPermissionSetArnComponents" id="@cdk_utils/iam.sso.SSOPermissionSetArnComponents"></a>

Parsed components of a PermissionSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOPermissionSetArnComponents.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOPermissionSetArnComponents: sso.SSOPermissionSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOPermissionSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOPermissionSetArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.sso.SSOPermissionSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOPermissionSetArnComponents.property.permissionSetId">permissionSetId</a></code> | <code>string</code> | The PermissionSetId component. |
| <code><a href="#@cdk_utils/iam.sso.SSOPermissionSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sso.SSOPermissionSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.sso.SSOPermissionSetArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOPermissionSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `permissionSetId`<sup>Required</sup> <a name="permissionSetId" id="@cdk_utils/iam.sso.SSOPermissionSetArnComponents.property.permissionSetId"></a>

```typescript
public readonly permissionSetId: string;
```

- *Type:* string

The PermissionSetId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sso.SSOPermissionSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSOPermissionSetArnProps <a name="SSOPermissionSetArnProps" id="@cdk_utils/iam.sso.SSOPermissionSetArnProps"></a>

Properties for building a PermissionSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOPermissionSetArnProps.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOPermissionSetArnProps: sso.SSOPermissionSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOPermissionSetArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOPermissionSetArnProps.property.permissionSetId">permissionSetId</a></code> | <code>string</code> | The PermissionSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOPermissionSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOPermissionSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOPermissionSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.sso.SSOPermissionSetArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `permissionSetId`<sup>Required</sup> <a name="permissionSetId" id="@cdk_utils/iam.sso.SSOPermissionSetArnProps.property.permissionSetId"></a>

```typescript
public readonly permissionSetId: string;
```

- *Type:* string

The PermissionSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sso.SSOPermissionSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOPermissionSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sso.SSOPermissionSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSOTrustedTokenIssuerArnComponents <a name="SSOTrustedTokenIssuerArnComponents" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents"></a>

Parsed components of a TrustedTokenIssuer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOTrustedTokenIssuerArnComponents: sso.SSOTrustedTokenIssuerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.trustedTokenIssuerId">trustedTokenIssuerId</a></code> | <code>string</code> | The TrustedTokenIssuerId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `trustedTokenIssuerId`<sup>Required</sup> <a name="trustedTokenIssuerId" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnComponents.property.trustedTokenIssuerId"></a>

```typescript
public readonly trustedTokenIssuerId: string;
```

- *Type:* string

The TrustedTokenIssuerId component.

---

### SSOTrustedTokenIssuerArnProps <a name="SSOTrustedTokenIssuerArnProps" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps"></a>

Properties for building a TrustedTokenIssuer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

const sSOTrustedTokenIssuerArnProps: sso.SSOTrustedTokenIssuerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.trustedTokenIssuerId">trustedTokenIssuerId</a></code> | <code>string</code> | The TrustedTokenIssuerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `trustedTokenIssuerId`<sup>Required</sup> <a name="trustedTokenIssuerId" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.trustedTokenIssuerId"></a>

```typescript
public readonly trustedTokenIssuerId: string;
```

- *Type:* string

The TrustedTokenIssuerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SSOActions <a name="SSOActions" id="@cdk_utils/iam.sso.SSOActions"></a>

IAM action constants for the sso service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sso.SSOActions.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

new sso.SSOActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationAccessScope">actionGetApplicationAccessScope</a></code> | <code>string</code> | [Read] sso:GetApplicationAccessScope. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationAssignmentConfiguration">actionGetApplicationAssignmentConfiguration</a></code> | <code>string</code> | [Read] sso:GetApplicationAssignmentConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationAuthenticationMethod">actionGetApplicationAuthenticationMethod</a></code> | <code>string</code> | [Read] sso:GetApplicationAuthenticationMethod. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationGrant">actionGetApplicationGrant</a></code> | <code>string</code> | [Read] sso:GetApplicationGrant. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationInstance">actionGetApplicationInstance</a></code> | <code>string</code> | [Read] sso:GetApplicationInstance. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationSessionConfiguration">actionGetApplicationSessionConfiguration</a></code> | <code>string</code> | [Read] sso:GetApplicationSessionConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationTemplate">actionGetApplicationTemplate</a></code> | <code>string</code> | [Read] sso:GetApplicationTemplate. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetInlinePolicyForPermissionSet">actionGetInlinePolicyForPermissionSet</a></code> | <code>string</code> | [Read] sso:GetInlinePolicyForPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetManagedApplicationInstance">actionGetManagedApplicationInstance</a></code> | <code>string</code> | [Read] sso:GetManagedApplicationInstance. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetMfaDeviceManagementForDirectory">actionGetMfaDeviceManagementForDirectory</a></code> | <code>string</code> | [Read] sso:GetMfaDeviceManagementForDirectory. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetPermissionsBoundaryForPermissionSet">actionGetPermissionsBoundaryForPermissionSet</a></code> | <code>string</code> | [Read] sso:GetPermissionsBoundaryForPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetPermissionSet">actionGetPermissionSet</a></code> | <code>string</code> | [Read] sso:GetPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetProfile">actionGetProfile</a></code> | <code>string</code> | [Read] sso:GetProfile. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetSharedSsoConfiguration">actionGetSharedSsoConfiguration</a></code> | <code>string</code> | [Read] sso:GetSharedSsoConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetSsoConfiguration">actionGetSsoConfiguration</a></code> | <code>string</code> | [Read] sso:GetSsoConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetSSOStatus">actionGetSSOStatus</a></code> | <code>string</code> | [Read] sso:GetSSOStatus. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.actionGetTrust">actionGetTrust</a></code> | <code>string</code> | [Read] sso:GetTrust. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.AddRegion">AddRegion</a></code> | <code>string</code> | [Write] sso:AddRegion. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.AssociateDirectory">AssociateDirectory</a></code> | <code>string</code> | [Write] sso:AssociateDirectory. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.AssociateProfile">AssociateProfile</a></code> | <code>string</code> | [Write] sso:AssociateProfile. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.AttachCustomerManagedPolicyReferenceToPermissionSet">AttachCustomerManagedPolicyReferenceToPermissionSet</a></code> | <code>string</code> | [PermissionManagement] sso:AttachCustomerManagedPolicyReferenceToPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.AttachManagedPolicyToPermissionSet">AttachManagedPolicyToPermissionSet</a></code> | <code>string</code> | [PermissionManagement] sso:AttachManagedPolicyToPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateAccountAssignment">CreateAccountAssignment</a></code> | <code>string</code> | [Write] sso:CreateAccountAssignment. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] sso:CreateApplication. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateApplicationAssignment">CreateApplicationAssignment</a></code> | <code>string</code> | [Write] sso:CreateApplicationAssignment. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateApplicationInstance">CreateApplicationInstance</a></code> | <code>string</code> | [Write] sso:CreateApplicationInstance. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateApplicationInstanceCertificate">CreateApplicationInstanceCertificate</a></code> | <code>string</code> | [Write] sso:CreateApplicationInstanceCertificate. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateInstance">CreateInstance</a></code> | <code>string</code> | [Write] sso:CreateInstance. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateInstanceAccessControlAttributeConfiguration">CreateInstanceAccessControlAttributeConfiguration</a></code> | <code>string</code> | [Write] sso:CreateInstanceAccessControlAttributeConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateManagedApplicationInstance">CreateManagedApplicationInstance</a></code> | <code>string</code> | [Write] sso:CreateManagedApplicationInstance. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreatePermissionSet">CreatePermissionSet</a></code> | <code>string</code> | [Write] sso:CreatePermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateProfile">CreateProfile</a></code> | <code>string</code> | [Write] sso:CreateProfile. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateTrust">CreateTrust</a></code> | <code>string</code> | [Write] sso:CreateTrust. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.CreateTrustedTokenIssuer">CreateTrustedTokenIssuer</a></code> | <code>string</code> | [Write] sso:CreateTrustedTokenIssuer. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteAccountAssignment">DeleteAccountAssignment</a></code> | <code>string</code> | [Write] sso:DeleteAccountAssignment. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] sso:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationAccessScope">DeleteApplicationAccessScope</a></code> | <code>string</code> | [Write] sso:DeleteApplicationAccessScope. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationAssignment">DeleteApplicationAssignment</a></code> | <code>string</code> | [Write] sso:DeleteApplicationAssignment. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationAuthenticationMethod">DeleteApplicationAuthenticationMethod</a></code> | <code>string</code> | [Write] sso:DeleteApplicationAuthenticationMethod. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationGrant">DeleteApplicationGrant</a></code> | <code>string</code> | [Write] sso:DeleteApplicationGrant. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationInstance">DeleteApplicationInstance</a></code> | <code>string</code> | [Write] sso:DeleteApplicationInstance. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationInstanceCertificate">DeleteApplicationInstanceCertificate</a></code> | <code>string</code> | [Write] sso:DeleteApplicationInstanceCertificate. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteInlinePolicyFromPermissionSet">DeleteInlinePolicyFromPermissionSet</a></code> | <code>string</code> | [Write] sso:DeleteInlinePolicyFromPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteInstance">DeleteInstance</a></code> | <code>string</code> | [Write] sso:DeleteInstance. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteInstanceAccessControlAttributeConfiguration">DeleteInstanceAccessControlAttributeConfiguration</a></code> | <code>string</code> | [Write] sso:DeleteInstanceAccessControlAttributeConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteManagedApplicationInstance">DeleteManagedApplicationInstance</a></code> | <code>string</code> | [Write] sso:DeleteManagedApplicationInstance. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeletePermissionsBoundaryFromPermissionSet">DeletePermissionsBoundaryFromPermissionSet</a></code> | <code>string</code> | [PermissionManagement] sso:DeletePermissionsBoundaryFromPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeletePermissionSet">DeletePermissionSet</a></code> | <code>string</code> | [Write] sso:DeletePermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteProfile">DeleteProfile</a></code> | <code>string</code> | [Write] sso:DeleteProfile. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DeleteTrustedTokenIssuer">DeleteTrustedTokenIssuer</a></code> | <code>string</code> | [Write] sso:DeleteTrustedTokenIssuer. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribeAccountAssignmentCreationStatus">DescribeAccountAssignmentCreationStatus</a></code> | <code>string</code> | [Read] sso:DescribeAccountAssignmentCreationStatus. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribeAccountAssignmentDeletionStatus">DescribeAccountAssignmentDeletionStatus</a></code> | <code>string</code> | [Read] sso:DescribeAccountAssignmentDeletionStatus. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribeApplication">DescribeApplication</a></code> | <code>string</code> | [Read] sso:DescribeApplication. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribeApplicationAssignment">DescribeApplicationAssignment</a></code> | <code>string</code> | [Read] sso:DescribeApplicationAssignment. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribeApplicationProvider">DescribeApplicationProvider</a></code> | <code>string</code> | [Read] sso:DescribeApplicationProvider. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribeInstance">DescribeInstance</a></code> | <code>string</code> | [Read] sso:DescribeInstance. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribeInstanceAccessControlAttributeConfiguration">DescribeInstanceAccessControlAttributeConfiguration</a></code> | <code>string</code> | [Read] sso:DescribeInstanceAccessControlAttributeConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribePermissionSet">DescribePermissionSet</a></code> | <code>string</code> | [Read] sso:DescribePermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribePermissionSetProvisioningStatus">DescribePermissionSetProvisioningStatus</a></code> | <code>string</code> | [Read] sso:DescribePermissionSetProvisioningStatus. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribeRegion">DescribeRegion</a></code> | <code>string</code> | [Read] sso:DescribeRegion. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribeRegisteredRegions">DescribeRegisteredRegions</a></code> | <code>string</code> | [Read] sso:DescribeRegisteredRegions. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DescribeTrustedTokenIssuer">DescribeTrustedTokenIssuer</a></code> | <code>string</code> | [Read] sso:DescribeTrustedTokenIssuer. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DetachCustomerManagedPolicyReferenceFromPermissionSet">DetachCustomerManagedPolicyReferenceFromPermissionSet</a></code> | <code>string</code> | [PermissionManagement] sso:DetachCustomerManagedPolicyReferenceFromPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DetachManagedPolicyFromPermissionSet">DetachManagedPolicyFromPermissionSet</a></code> | <code>string</code> | [PermissionManagement] sso:DetachManagedPolicyFromPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DisassociateDirectory">DisassociateDirectory</a></code> | <code>string</code> | [Write] sso:DisassociateDirectory. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.DisassociateProfile">DisassociateProfile</a></code> | <code>string</code> | [Write] sso:DisassociateProfile. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ImportApplicationInstanceServiceProviderMetadata">ImportApplicationInstanceServiceProviderMetadata</a></code> | <code>string</code> | [Write] sso:ImportApplicationInstanceServiceProviderMetadata. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListAccountAssignmentCreationStatus">ListAccountAssignmentCreationStatus</a></code> | <code>string</code> | [List] sso:ListAccountAssignmentCreationStatus. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListAccountAssignmentDeletionStatus">ListAccountAssignmentDeletionStatus</a></code> | <code>string</code> | [List] sso:ListAccountAssignmentDeletionStatus. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListAccountAssignments">ListAccountAssignments</a></code> | <code>string</code> | [List] sso:ListAccountAssignments. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListAccountAssignmentsForPrincipal">ListAccountAssignmentsForPrincipal</a></code> | <code>string</code> | [List] sso:ListAccountAssignmentsForPrincipal. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListAccountsForProvisionedPermissionSet">ListAccountsForProvisionedPermissionSet</a></code> | <code>string</code> | [List] sso:ListAccountsForProvisionedPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListApplicationAccessScopes">ListApplicationAccessScopes</a></code> | <code>string</code> | [List] sso:ListApplicationAccessScopes. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListApplicationAssignments">ListApplicationAssignments</a></code> | <code>string</code> | [List] sso:ListApplicationAssignments. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListApplicationAssignmentsForPrincipal">ListApplicationAssignmentsForPrincipal</a></code> | <code>string</code> | [List] sso:ListApplicationAssignmentsForPrincipal. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListApplicationAuthenticationMethods">ListApplicationAuthenticationMethods</a></code> | <code>string</code> | [List] sso:ListApplicationAuthenticationMethods. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListApplicationGrants">ListApplicationGrants</a></code> | <code>string</code> | [List] sso:ListApplicationGrants. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListApplicationInstanceCertificates">ListApplicationInstanceCertificates</a></code> | <code>string</code> | [Read] sso:ListApplicationInstanceCertificates. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListApplicationInstances">ListApplicationInstances</a></code> | <code>string</code> | [List] sso:ListApplicationInstances. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListApplicationProviders">ListApplicationProviders</a></code> | <code>string</code> | [List] sso:ListApplicationProviders. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] sso:ListApplications. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListApplicationTemplates">ListApplicationTemplates</a></code> | <code>string</code> | [List] sso:ListApplicationTemplates. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListCustomerManagedPolicyReferencesInPermissionSet">ListCustomerManagedPolicyReferencesInPermissionSet</a></code> | <code>string</code> | [List] sso:ListCustomerManagedPolicyReferencesInPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListDirectoryAssociations">ListDirectoryAssociations</a></code> | <code>string</code> | [Read] sso:ListDirectoryAssociations. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListInstances">ListInstances</a></code> | <code>string</code> | [List] sso:ListInstances. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListManagedPoliciesInPermissionSet">ListManagedPoliciesInPermissionSet</a></code> | <code>string</code> | [List] sso:ListManagedPoliciesInPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListPermissionSetProvisioningStatus">ListPermissionSetProvisioningStatus</a></code> | <code>string</code> | [List] sso:ListPermissionSetProvisioningStatus. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListPermissionSets">ListPermissionSets</a></code> | <code>string</code> | [List] sso:ListPermissionSets. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListPermissionSetsProvisionedToAccount">ListPermissionSetsProvisionedToAccount</a></code> | <code>string</code> | [List] sso:ListPermissionSetsProvisionedToAccount. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListProfileAssociations">ListProfileAssociations</a></code> | <code>string</code> | [Read] sso:ListProfileAssociations. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListProfiles">ListProfiles</a></code> | <code>string</code> | [List] sso:ListProfiles. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListRegions">ListRegions</a></code> | <code>string</code> | [List] sso:ListRegions. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] sso:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ListTrustedTokenIssuers">ListTrustedTokenIssuers</a></code> | <code>string</code> | [List] sso:ListTrustedTokenIssuers. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.ProvisionPermissionSet">ProvisionPermissionSet</a></code> | <code>string</code> | [Write] sso:ProvisionPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.PutApplicationAccessScope">PutApplicationAccessScope</a></code> | <code>string</code> | [Write] sso:PutApplicationAccessScope. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.PutApplicationAssignmentConfiguration">PutApplicationAssignmentConfiguration</a></code> | <code>string</code> | [Write] sso:PutApplicationAssignmentConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.PutApplicationAuthenticationMethod">PutApplicationAuthenticationMethod</a></code> | <code>string</code> | [Write] sso:PutApplicationAuthenticationMethod. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.PutApplicationGrant">PutApplicationGrant</a></code> | <code>string</code> | [Write] sso:PutApplicationGrant. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.PutApplicationSessionConfiguration">PutApplicationSessionConfiguration</a></code> | <code>string</code> | [Write] sso:PutApplicationSessionConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.PutInlinePolicyToPermissionSet">PutInlinePolicyToPermissionSet</a></code> | <code>string</code> | [Write] sso:PutInlinePolicyToPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.PutMfaDeviceManagementForDirectory">PutMfaDeviceManagementForDirectory</a></code> | <code>string</code> | [Write] sso:PutMfaDeviceManagementForDirectory. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.PutPermissionsBoundaryToPermissionSet">PutPermissionsBoundaryToPermissionSet</a></code> | <code>string</code> | [PermissionManagement] sso:PutPermissionsBoundaryToPermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.PutPermissionsPolicy">PutPermissionsPolicy</a></code> | <code>string</code> | [PermissionManagement] sso:PutPermissionsPolicy. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.RemoveRegion">RemoveRegion</a></code> | <code>string</code> | [Write] sso:RemoveRegion. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.SearchGroups">SearchGroups</a></code> | <code>string</code> | [Read] sso:SearchGroups. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.SearchUsers">SearchUsers</a></code> | <code>string</code> | [Read] sso:SearchUsers. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.StartSSO">StartSSO</a></code> | <code>string</code> | [Write] sso:StartSSO. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] sso:TagResource. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] sso:UntagResource. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] sso:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceActiveCertificate">UpdateApplicationInstanceActiveCertificate</a></code> | <code>string</code> | [Write] sso:UpdateApplicationInstanceActiveCertificate. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceDisplayData">UpdateApplicationInstanceDisplayData</a></code> | <code>string</code> | [Write] sso:UpdateApplicationInstanceDisplayData. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceResponseConfiguration">UpdateApplicationInstanceResponseConfiguration</a></code> | <code>string</code> | [Write] sso:UpdateApplicationInstanceResponseConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceResponseSchemaConfiguration">UpdateApplicationInstanceResponseSchemaConfiguration</a></code> | <code>string</code> | [Write] sso:UpdateApplicationInstanceResponseSchemaConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceSecurityConfiguration">UpdateApplicationInstanceSecurityConfiguration</a></code> | <code>string</code> | [Write] sso:UpdateApplicationInstanceSecurityConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceServiceProviderConfiguration">UpdateApplicationInstanceServiceProviderConfiguration</a></code> | <code>string</code> | [Write] sso:UpdateApplicationInstanceServiceProviderConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceStatus">UpdateApplicationInstanceStatus</a></code> | <code>string</code> | [Write] sso:UpdateApplicationInstanceStatus. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateInstance">UpdateInstance</a></code> | <code>string</code> | [Write] sso:UpdateInstance. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateInstanceAccessControlAttributeConfiguration">UpdateInstanceAccessControlAttributeConfiguration</a></code> | <code>string</code> | [Write] sso:UpdateInstanceAccessControlAttributeConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateManagedApplicationInstanceStatus">UpdateManagedApplicationInstanceStatus</a></code> | <code>string</code> | [Write] sso:UpdateManagedApplicationInstanceStatus. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdatePermissionSet">UpdatePermissionSet</a></code> | <code>string</code> | [PermissionManagement] sso:UpdatePermissionSet. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateProfile">UpdateProfile</a></code> | <code>string</code> | [Write] sso:UpdateProfile. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateSSOConfiguration">UpdateSSOConfiguration</a></code> | <code>string</code> | [Write] sso:UpdateSSOConfiguration. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateTrust">UpdateTrust</a></code> | <code>string</code> | [Write] sso:UpdateTrust. |
| <code><a href="#@cdk_utils/iam.sso.SSOActions.property.UpdateTrustedTokenIssuer">UpdateTrustedTokenIssuer</a></code> | <code>string</code> | [Write] sso:UpdateTrustedTokenIssuer. |

---

##### `actionGetApplicationAccessScope`<sup>Required</sup> <a name="actionGetApplicationAccessScope" id="@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationAccessScope"></a>

```typescript
public readonly actionGetApplicationAccessScope: string;
```

- *Type:* string

[Read] sso:GetApplicationAccessScope.

---

##### `actionGetApplicationAssignmentConfiguration`<sup>Required</sup> <a name="actionGetApplicationAssignmentConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationAssignmentConfiguration"></a>

```typescript
public readonly actionGetApplicationAssignmentConfiguration: string;
```

- *Type:* string

[Read] sso:GetApplicationAssignmentConfiguration.

---

##### `actionGetApplicationAuthenticationMethod`<sup>Required</sup> <a name="actionGetApplicationAuthenticationMethod" id="@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationAuthenticationMethod"></a>

```typescript
public readonly actionGetApplicationAuthenticationMethod: string;
```

- *Type:* string

[Read] sso:GetApplicationAuthenticationMethod.

---

##### `actionGetApplicationGrant`<sup>Required</sup> <a name="actionGetApplicationGrant" id="@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationGrant"></a>

```typescript
public readonly actionGetApplicationGrant: string;
```

- *Type:* string

[Read] sso:GetApplicationGrant.

---

##### `actionGetApplicationInstance`<sup>Required</sup> <a name="actionGetApplicationInstance" id="@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationInstance"></a>

```typescript
public readonly actionGetApplicationInstance: string;
```

- *Type:* string

[Read] sso:GetApplicationInstance.

---

##### `actionGetApplicationSessionConfiguration`<sup>Required</sup> <a name="actionGetApplicationSessionConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationSessionConfiguration"></a>

```typescript
public readonly actionGetApplicationSessionConfiguration: string;
```

- *Type:* string

[Read] sso:GetApplicationSessionConfiguration.

---

##### `actionGetApplicationTemplate`<sup>Required</sup> <a name="actionGetApplicationTemplate" id="@cdk_utils/iam.sso.SSOActions.property.actionGetApplicationTemplate"></a>

```typescript
public readonly actionGetApplicationTemplate: string;
```

- *Type:* string

[Read] sso:GetApplicationTemplate.

---

##### `actionGetInlinePolicyForPermissionSet`<sup>Required</sup> <a name="actionGetInlinePolicyForPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.actionGetInlinePolicyForPermissionSet"></a>

```typescript
public readonly actionGetInlinePolicyForPermissionSet: string;
```

- *Type:* string

[Read] sso:GetInlinePolicyForPermissionSet.

---

##### `actionGetManagedApplicationInstance`<sup>Required</sup> <a name="actionGetManagedApplicationInstance" id="@cdk_utils/iam.sso.SSOActions.property.actionGetManagedApplicationInstance"></a>

```typescript
public readonly actionGetManagedApplicationInstance: string;
```

- *Type:* string

[Read] sso:GetManagedApplicationInstance.

---

##### `actionGetMfaDeviceManagementForDirectory`<sup>Required</sup> <a name="actionGetMfaDeviceManagementForDirectory" id="@cdk_utils/iam.sso.SSOActions.property.actionGetMfaDeviceManagementForDirectory"></a>

```typescript
public readonly actionGetMfaDeviceManagementForDirectory: string;
```

- *Type:* string

[Read] sso:GetMfaDeviceManagementForDirectory.

---

##### `actionGetPermissionsBoundaryForPermissionSet`<sup>Required</sup> <a name="actionGetPermissionsBoundaryForPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.actionGetPermissionsBoundaryForPermissionSet"></a>

```typescript
public readonly actionGetPermissionsBoundaryForPermissionSet: string;
```

- *Type:* string

[Read] sso:GetPermissionsBoundaryForPermissionSet.

---

##### `actionGetPermissionSet`<sup>Required</sup> <a name="actionGetPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.actionGetPermissionSet"></a>

```typescript
public readonly actionGetPermissionSet: string;
```

- *Type:* string

[Read] sso:GetPermissionSet.

---

##### `actionGetProfile`<sup>Required</sup> <a name="actionGetProfile" id="@cdk_utils/iam.sso.SSOActions.property.actionGetProfile"></a>

```typescript
public readonly actionGetProfile: string;
```

- *Type:* string

[Read] sso:GetProfile.

---

##### `actionGetSharedSsoConfiguration`<sup>Required</sup> <a name="actionGetSharedSsoConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.actionGetSharedSsoConfiguration"></a>

```typescript
public readonly actionGetSharedSsoConfiguration: string;
```

- *Type:* string

[Read] sso:GetSharedSsoConfiguration.

---

##### `actionGetSsoConfiguration`<sup>Required</sup> <a name="actionGetSsoConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.actionGetSsoConfiguration"></a>

```typescript
public readonly actionGetSsoConfiguration: string;
```

- *Type:* string

[Read] sso:GetSsoConfiguration.

---

##### `actionGetSSOStatus`<sup>Required</sup> <a name="actionGetSSOStatus" id="@cdk_utils/iam.sso.SSOActions.property.actionGetSSOStatus"></a>

```typescript
public readonly actionGetSSOStatus: string;
```

- *Type:* string

[Read] sso:GetSSOStatus.

---

##### `actionGetTrust`<sup>Required</sup> <a name="actionGetTrust" id="@cdk_utils/iam.sso.SSOActions.property.actionGetTrust"></a>

```typescript
public readonly actionGetTrust: string;
```

- *Type:* string

[Read] sso:GetTrust.

---

##### `AddRegion`<sup>Required</sup> <a name="AddRegion" id="@cdk_utils/iam.sso.SSOActions.property.AddRegion"></a>

```typescript
public readonly AddRegion: string;
```

- *Type:* string

[Write] sso:AddRegion.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sso.SSOActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sso.SSOActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sso.SSOActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sso.SSOActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sso.SSOActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateDirectory`<sup>Required</sup> <a name="AssociateDirectory" id="@cdk_utils/iam.sso.SSOActions.property.AssociateDirectory"></a>

```typescript
public readonly AssociateDirectory: string;
```

- *Type:* string

[Write] sso:AssociateDirectory.

---

##### `AssociateProfile`<sup>Required</sup> <a name="AssociateProfile" id="@cdk_utils/iam.sso.SSOActions.property.AssociateProfile"></a>

```typescript
public readonly AssociateProfile: string;
```

- *Type:* string

[Write] sso:AssociateProfile.

---

##### `AttachCustomerManagedPolicyReferenceToPermissionSet`<sup>Required</sup> <a name="AttachCustomerManagedPolicyReferenceToPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.AttachCustomerManagedPolicyReferenceToPermissionSet"></a>

```typescript
public readonly AttachCustomerManagedPolicyReferenceToPermissionSet: string;
```

- *Type:* string

[PermissionManagement] sso:AttachCustomerManagedPolicyReferenceToPermissionSet.

---

##### `AttachManagedPolicyToPermissionSet`<sup>Required</sup> <a name="AttachManagedPolicyToPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.AttachManagedPolicyToPermissionSet"></a>

```typescript
public readonly AttachManagedPolicyToPermissionSet: string;
```

- *Type:* string

[PermissionManagement] sso:AttachManagedPolicyToPermissionSet.

---

##### `CreateAccountAssignment`<sup>Required</sup> <a name="CreateAccountAssignment" id="@cdk_utils/iam.sso.SSOActions.property.CreateAccountAssignment"></a>

```typescript
public readonly CreateAccountAssignment: string;
```

- *Type:* string

[Write] sso:CreateAccountAssignment.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.sso.SSOActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] sso:CreateApplication.

---

##### `CreateApplicationAssignment`<sup>Required</sup> <a name="CreateApplicationAssignment" id="@cdk_utils/iam.sso.SSOActions.property.CreateApplicationAssignment"></a>

```typescript
public readonly CreateApplicationAssignment: string;
```

- *Type:* string

[Write] sso:CreateApplicationAssignment.

---

##### `CreateApplicationInstance`<sup>Required</sup> <a name="CreateApplicationInstance" id="@cdk_utils/iam.sso.SSOActions.property.CreateApplicationInstance"></a>

```typescript
public readonly CreateApplicationInstance: string;
```

- *Type:* string

[Write] sso:CreateApplicationInstance.

---

##### `CreateApplicationInstanceCertificate`<sup>Required</sup> <a name="CreateApplicationInstanceCertificate" id="@cdk_utils/iam.sso.SSOActions.property.CreateApplicationInstanceCertificate"></a>

```typescript
public readonly CreateApplicationInstanceCertificate: string;
```

- *Type:* string

[Write] sso:CreateApplicationInstanceCertificate.

---

##### `CreateInstance`<sup>Required</sup> <a name="CreateInstance" id="@cdk_utils/iam.sso.SSOActions.property.CreateInstance"></a>

```typescript
public readonly CreateInstance: string;
```

- *Type:* string

[Write] sso:CreateInstance.

---

##### `CreateInstanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="CreateInstanceAccessControlAttributeConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.CreateInstanceAccessControlAttributeConfiguration"></a>

```typescript
public readonly CreateInstanceAccessControlAttributeConfiguration: string;
```

- *Type:* string

[Write] sso:CreateInstanceAccessControlAttributeConfiguration.

---

##### `CreateManagedApplicationInstance`<sup>Required</sup> <a name="CreateManagedApplicationInstance" id="@cdk_utils/iam.sso.SSOActions.property.CreateManagedApplicationInstance"></a>

```typescript
public readonly CreateManagedApplicationInstance: string;
```

- *Type:* string

[Write] sso:CreateManagedApplicationInstance.

---

##### `CreatePermissionSet`<sup>Required</sup> <a name="CreatePermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.CreatePermissionSet"></a>

```typescript
public readonly CreatePermissionSet: string;
```

- *Type:* string

[Write] sso:CreatePermissionSet.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.sso.SSOActions.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string;
```

- *Type:* string

[Write] sso:CreateProfile.

---

##### `CreateTrust`<sup>Required</sup> <a name="CreateTrust" id="@cdk_utils/iam.sso.SSOActions.property.CreateTrust"></a>

```typescript
public readonly CreateTrust: string;
```

- *Type:* string

[Write] sso:CreateTrust.

---

##### `CreateTrustedTokenIssuer`<sup>Required</sup> <a name="CreateTrustedTokenIssuer" id="@cdk_utils/iam.sso.SSOActions.property.CreateTrustedTokenIssuer"></a>

```typescript
public readonly CreateTrustedTokenIssuer: string;
```

- *Type:* string

[Write] sso:CreateTrustedTokenIssuer.

---

##### `DeleteAccountAssignment`<sup>Required</sup> <a name="DeleteAccountAssignment" id="@cdk_utils/iam.sso.SSOActions.property.DeleteAccountAssignment"></a>

```typescript
public readonly DeleteAccountAssignment: string;
```

- *Type:* string

[Write] sso:DeleteAccountAssignment.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.sso.SSOActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] sso:DeleteApplication.

---

##### `DeleteApplicationAccessScope`<sup>Required</sup> <a name="DeleteApplicationAccessScope" id="@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationAccessScope"></a>

```typescript
public readonly DeleteApplicationAccessScope: string;
```

- *Type:* string

[Write] sso:DeleteApplicationAccessScope.

---

##### `DeleteApplicationAssignment`<sup>Required</sup> <a name="DeleteApplicationAssignment" id="@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationAssignment"></a>

```typescript
public readonly DeleteApplicationAssignment: string;
```

- *Type:* string

[Write] sso:DeleteApplicationAssignment.

---

##### `DeleteApplicationAuthenticationMethod`<sup>Required</sup> <a name="DeleteApplicationAuthenticationMethod" id="@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationAuthenticationMethod"></a>

```typescript
public readonly DeleteApplicationAuthenticationMethod: string;
```

- *Type:* string

[Write] sso:DeleteApplicationAuthenticationMethod.

---

##### `DeleteApplicationGrant`<sup>Required</sup> <a name="DeleteApplicationGrant" id="@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationGrant"></a>

```typescript
public readonly DeleteApplicationGrant: string;
```

- *Type:* string

[Write] sso:DeleteApplicationGrant.

---

##### `DeleteApplicationInstance`<sup>Required</sup> <a name="DeleteApplicationInstance" id="@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationInstance"></a>

```typescript
public readonly DeleteApplicationInstance: string;
```

- *Type:* string

[Write] sso:DeleteApplicationInstance.

---

##### `DeleteApplicationInstanceCertificate`<sup>Required</sup> <a name="DeleteApplicationInstanceCertificate" id="@cdk_utils/iam.sso.SSOActions.property.DeleteApplicationInstanceCertificate"></a>

```typescript
public readonly DeleteApplicationInstanceCertificate: string;
```

- *Type:* string

[Write] sso:DeleteApplicationInstanceCertificate.

---

##### `DeleteInlinePolicyFromPermissionSet`<sup>Required</sup> <a name="DeleteInlinePolicyFromPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.DeleteInlinePolicyFromPermissionSet"></a>

```typescript
public readonly DeleteInlinePolicyFromPermissionSet: string;
```

- *Type:* string

[Write] sso:DeleteInlinePolicyFromPermissionSet.

---

##### `DeleteInstance`<sup>Required</sup> <a name="DeleteInstance" id="@cdk_utils/iam.sso.SSOActions.property.DeleteInstance"></a>

```typescript
public readonly DeleteInstance: string;
```

- *Type:* string

[Write] sso:DeleteInstance.

---

##### `DeleteInstanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="DeleteInstanceAccessControlAttributeConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.DeleteInstanceAccessControlAttributeConfiguration"></a>

```typescript
public readonly DeleteInstanceAccessControlAttributeConfiguration: string;
```

- *Type:* string

[Write] sso:DeleteInstanceAccessControlAttributeConfiguration.

---

##### `DeleteManagedApplicationInstance`<sup>Required</sup> <a name="DeleteManagedApplicationInstance" id="@cdk_utils/iam.sso.SSOActions.property.DeleteManagedApplicationInstance"></a>

```typescript
public readonly DeleteManagedApplicationInstance: string;
```

- *Type:* string

[Write] sso:DeleteManagedApplicationInstance.

---

##### `DeletePermissionsBoundaryFromPermissionSet`<sup>Required</sup> <a name="DeletePermissionsBoundaryFromPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.DeletePermissionsBoundaryFromPermissionSet"></a>

```typescript
public readonly DeletePermissionsBoundaryFromPermissionSet: string;
```

- *Type:* string

[PermissionManagement] sso:DeletePermissionsBoundaryFromPermissionSet.

---

##### `DeletePermissionSet`<sup>Required</sup> <a name="DeletePermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.DeletePermissionSet"></a>

```typescript
public readonly DeletePermissionSet: string;
```

- *Type:* string

[Write] sso:DeletePermissionSet.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.sso.SSOActions.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string;
```

- *Type:* string

[Write] sso:DeleteProfile.

---

##### `DeleteTrustedTokenIssuer`<sup>Required</sup> <a name="DeleteTrustedTokenIssuer" id="@cdk_utils/iam.sso.SSOActions.property.DeleteTrustedTokenIssuer"></a>

```typescript
public readonly DeleteTrustedTokenIssuer: string;
```

- *Type:* string

[Write] sso:DeleteTrustedTokenIssuer.

---

##### `DescribeAccountAssignmentCreationStatus`<sup>Required</sup> <a name="DescribeAccountAssignmentCreationStatus" id="@cdk_utils/iam.sso.SSOActions.property.DescribeAccountAssignmentCreationStatus"></a>

```typescript
public readonly DescribeAccountAssignmentCreationStatus: string;
```

- *Type:* string

[Read] sso:DescribeAccountAssignmentCreationStatus.

---

##### `DescribeAccountAssignmentDeletionStatus`<sup>Required</sup> <a name="DescribeAccountAssignmentDeletionStatus" id="@cdk_utils/iam.sso.SSOActions.property.DescribeAccountAssignmentDeletionStatus"></a>

```typescript
public readonly DescribeAccountAssignmentDeletionStatus: string;
```

- *Type:* string

[Read] sso:DescribeAccountAssignmentDeletionStatus.

---

##### `DescribeApplication`<sup>Required</sup> <a name="DescribeApplication" id="@cdk_utils/iam.sso.SSOActions.property.DescribeApplication"></a>

```typescript
public readonly DescribeApplication: string;
```

- *Type:* string

[Read] sso:DescribeApplication.

---

##### `DescribeApplicationAssignment`<sup>Required</sup> <a name="DescribeApplicationAssignment" id="@cdk_utils/iam.sso.SSOActions.property.DescribeApplicationAssignment"></a>

```typescript
public readonly DescribeApplicationAssignment: string;
```

- *Type:* string

[Read] sso:DescribeApplicationAssignment.

---

##### `DescribeApplicationProvider`<sup>Required</sup> <a name="DescribeApplicationProvider" id="@cdk_utils/iam.sso.SSOActions.property.DescribeApplicationProvider"></a>

```typescript
public readonly DescribeApplicationProvider: string;
```

- *Type:* string

[Read] sso:DescribeApplicationProvider.

---

##### `DescribeInstance`<sup>Required</sup> <a name="DescribeInstance" id="@cdk_utils/iam.sso.SSOActions.property.DescribeInstance"></a>

```typescript
public readonly DescribeInstance: string;
```

- *Type:* string

[Read] sso:DescribeInstance.

---

##### `DescribeInstanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="DescribeInstanceAccessControlAttributeConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.DescribeInstanceAccessControlAttributeConfiguration"></a>

```typescript
public readonly DescribeInstanceAccessControlAttributeConfiguration: string;
```

- *Type:* string

[Read] sso:DescribeInstanceAccessControlAttributeConfiguration.

---

##### `DescribePermissionSet`<sup>Required</sup> <a name="DescribePermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.DescribePermissionSet"></a>

```typescript
public readonly DescribePermissionSet: string;
```

- *Type:* string

[Read] sso:DescribePermissionSet.

---

##### `DescribePermissionSetProvisioningStatus`<sup>Required</sup> <a name="DescribePermissionSetProvisioningStatus" id="@cdk_utils/iam.sso.SSOActions.property.DescribePermissionSetProvisioningStatus"></a>

```typescript
public readonly DescribePermissionSetProvisioningStatus: string;
```

- *Type:* string

[Read] sso:DescribePermissionSetProvisioningStatus.

---

##### `DescribeRegion`<sup>Required</sup> <a name="DescribeRegion" id="@cdk_utils/iam.sso.SSOActions.property.DescribeRegion"></a>

```typescript
public readonly DescribeRegion: string;
```

- *Type:* string

[Read] sso:DescribeRegion.

---

##### `DescribeRegisteredRegions`<sup>Required</sup> <a name="DescribeRegisteredRegions" id="@cdk_utils/iam.sso.SSOActions.property.DescribeRegisteredRegions"></a>

```typescript
public readonly DescribeRegisteredRegions: string;
```

- *Type:* string

[Read] sso:DescribeRegisteredRegions.

---

##### `DescribeTrustedTokenIssuer`<sup>Required</sup> <a name="DescribeTrustedTokenIssuer" id="@cdk_utils/iam.sso.SSOActions.property.DescribeTrustedTokenIssuer"></a>

```typescript
public readonly DescribeTrustedTokenIssuer: string;
```

- *Type:* string

[Read] sso:DescribeTrustedTokenIssuer.

---

##### `DetachCustomerManagedPolicyReferenceFromPermissionSet`<sup>Required</sup> <a name="DetachCustomerManagedPolicyReferenceFromPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.DetachCustomerManagedPolicyReferenceFromPermissionSet"></a>

```typescript
public readonly DetachCustomerManagedPolicyReferenceFromPermissionSet: string;
```

- *Type:* string

[PermissionManagement] sso:DetachCustomerManagedPolicyReferenceFromPermissionSet.

---

##### `DetachManagedPolicyFromPermissionSet`<sup>Required</sup> <a name="DetachManagedPolicyFromPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.DetachManagedPolicyFromPermissionSet"></a>

```typescript
public readonly DetachManagedPolicyFromPermissionSet: string;
```

- *Type:* string

[PermissionManagement] sso:DetachManagedPolicyFromPermissionSet.

---

##### `DisassociateDirectory`<sup>Required</sup> <a name="DisassociateDirectory" id="@cdk_utils/iam.sso.SSOActions.property.DisassociateDirectory"></a>

```typescript
public readonly DisassociateDirectory: string;
```

- *Type:* string

[Write] sso:DisassociateDirectory.

---

##### `DisassociateProfile`<sup>Required</sup> <a name="DisassociateProfile" id="@cdk_utils/iam.sso.SSOActions.property.DisassociateProfile"></a>

```typescript
public readonly DisassociateProfile: string;
```

- *Type:* string

[Write] sso:DisassociateProfile.

---

##### `ImportApplicationInstanceServiceProviderMetadata`<sup>Required</sup> <a name="ImportApplicationInstanceServiceProviderMetadata" id="@cdk_utils/iam.sso.SSOActions.property.ImportApplicationInstanceServiceProviderMetadata"></a>

```typescript
public readonly ImportApplicationInstanceServiceProviderMetadata: string;
```

- *Type:* string

[Write] sso:ImportApplicationInstanceServiceProviderMetadata.

---

##### `ListAccountAssignmentCreationStatus`<sup>Required</sup> <a name="ListAccountAssignmentCreationStatus" id="@cdk_utils/iam.sso.SSOActions.property.ListAccountAssignmentCreationStatus"></a>

```typescript
public readonly ListAccountAssignmentCreationStatus: string;
```

- *Type:* string

[List] sso:ListAccountAssignmentCreationStatus.

---

##### `ListAccountAssignmentDeletionStatus`<sup>Required</sup> <a name="ListAccountAssignmentDeletionStatus" id="@cdk_utils/iam.sso.SSOActions.property.ListAccountAssignmentDeletionStatus"></a>

```typescript
public readonly ListAccountAssignmentDeletionStatus: string;
```

- *Type:* string

[List] sso:ListAccountAssignmentDeletionStatus.

---

##### `ListAccountAssignments`<sup>Required</sup> <a name="ListAccountAssignments" id="@cdk_utils/iam.sso.SSOActions.property.ListAccountAssignments"></a>

```typescript
public readonly ListAccountAssignments: string;
```

- *Type:* string

[List] sso:ListAccountAssignments.

---

##### `ListAccountAssignmentsForPrincipal`<sup>Required</sup> <a name="ListAccountAssignmentsForPrincipal" id="@cdk_utils/iam.sso.SSOActions.property.ListAccountAssignmentsForPrincipal"></a>

```typescript
public readonly ListAccountAssignmentsForPrincipal: string;
```

- *Type:* string

[List] sso:ListAccountAssignmentsForPrincipal.

---

##### `ListAccountsForProvisionedPermissionSet`<sup>Required</sup> <a name="ListAccountsForProvisionedPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.ListAccountsForProvisionedPermissionSet"></a>

```typescript
public readonly ListAccountsForProvisionedPermissionSet: string;
```

- *Type:* string

[List] sso:ListAccountsForProvisionedPermissionSet.

---

##### `ListApplicationAccessScopes`<sup>Required</sup> <a name="ListApplicationAccessScopes" id="@cdk_utils/iam.sso.SSOActions.property.ListApplicationAccessScopes"></a>

```typescript
public readonly ListApplicationAccessScopes: string;
```

- *Type:* string

[List] sso:ListApplicationAccessScopes.

---

##### `ListApplicationAssignments`<sup>Required</sup> <a name="ListApplicationAssignments" id="@cdk_utils/iam.sso.SSOActions.property.ListApplicationAssignments"></a>

```typescript
public readonly ListApplicationAssignments: string;
```

- *Type:* string

[List] sso:ListApplicationAssignments.

---

##### `ListApplicationAssignmentsForPrincipal`<sup>Required</sup> <a name="ListApplicationAssignmentsForPrincipal" id="@cdk_utils/iam.sso.SSOActions.property.ListApplicationAssignmentsForPrincipal"></a>

```typescript
public readonly ListApplicationAssignmentsForPrincipal: string;
```

- *Type:* string

[List] sso:ListApplicationAssignmentsForPrincipal.

---

##### `ListApplicationAuthenticationMethods`<sup>Required</sup> <a name="ListApplicationAuthenticationMethods" id="@cdk_utils/iam.sso.SSOActions.property.ListApplicationAuthenticationMethods"></a>

```typescript
public readonly ListApplicationAuthenticationMethods: string;
```

- *Type:* string

[List] sso:ListApplicationAuthenticationMethods.

---

##### `ListApplicationGrants`<sup>Required</sup> <a name="ListApplicationGrants" id="@cdk_utils/iam.sso.SSOActions.property.ListApplicationGrants"></a>

```typescript
public readonly ListApplicationGrants: string;
```

- *Type:* string

[List] sso:ListApplicationGrants.

---

##### `ListApplicationInstanceCertificates`<sup>Required</sup> <a name="ListApplicationInstanceCertificates" id="@cdk_utils/iam.sso.SSOActions.property.ListApplicationInstanceCertificates"></a>

```typescript
public readonly ListApplicationInstanceCertificates: string;
```

- *Type:* string

[Read] sso:ListApplicationInstanceCertificates.

---

##### `ListApplicationInstances`<sup>Required</sup> <a name="ListApplicationInstances" id="@cdk_utils/iam.sso.SSOActions.property.ListApplicationInstances"></a>

```typescript
public readonly ListApplicationInstances: string;
```

- *Type:* string

[List] sso:ListApplicationInstances.

---

##### `ListApplicationProviders`<sup>Required</sup> <a name="ListApplicationProviders" id="@cdk_utils/iam.sso.SSOActions.property.ListApplicationProviders"></a>

```typescript
public readonly ListApplicationProviders: string;
```

- *Type:* string

[List] sso:ListApplicationProviders.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.sso.SSOActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] sso:ListApplications.

---

##### `ListApplicationTemplates`<sup>Required</sup> <a name="ListApplicationTemplates" id="@cdk_utils/iam.sso.SSOActions.property.ListApplicationTemplates"></a>

```typescript
public readonly ListApplicationTemplates: string;
```

- *Type:* string

[List] sso:ListApplicationTemplates.

---

##### `ListCustomerManagedPolicyReferencesInPermissionSet`<sup>Required</sup> <a name="ListCustomerManagedPolicyReferencesInPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.ListCustomerManagedPolicyReferencesInPermissionSet"></a>

```typescript
public readonly ListCustomerManagedPolicyReferencesInPermissionSet: string;
```

- *Type:* string

[List] sso:ListCustomerManagedPolicyReferencesInPermissionSet.

---

##### `ListDirectoryAssociations`<sup>Required</sup> <a name="ListDirectoryAssociations" id="@cdk_utils/iam.sso.SSOActions.property.ListDirectoryAssociations"></a>

```typescript
public readonly ListDirectoryAssociations: string;
```

- *Type:* string

[Read] sso:ListDirectoryAssociations.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.sso.SSOActions.property.ListInstances"></a>

```typescript
public readonly ListInstances: string;
```

- *Type:* string

[List] sso:ListInstances.

---

##### `ListManagedPoliciesInPermissionSet`<sup>Required</sup> <a name="ListManagedPoliciesInPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.ListManagedPoliciesInPermissionSet"></a>

```typescript
public readonly ListManagedPoliciesInPermissionSet: string;
```

- *Type:* string

[List] sso:ListManagedPoliciesInPermissionSet.

---

##### `ListPermissionSetProvisioningStatus`<sup>Required</sup> <a name="ListPermissionSetProvisioningStatus" id="@cdk_utils/iam.sso.SSOActions.property.ListPermissionSetProvisioningStatus"></a>

```typescript
public readonly ListPermissionSetProvisioningStatus: string;
```

- *Type:* string

[List] sso:ListPermissionSetProvisioningStatus.

---

##### `ListPermissionSets`<sup>Required</sup> <a name="ListPermissionSets" id="@cdk_utils/iam.sso.SSOActions.property.ListPermissionSets"></a>

```typescript
public readonly ListPermissionSets: string;
```

- *Type:* string

[List] sso:ListPermissionSets.

---

##### `ListPermissionSetsProvisionedToAccount`<sup>Required</sup> <a name="ListPermissionSetsProvisionedToAccount" id="@cdk_utils/iam.sso.SSOActions.property.ListPermissionSetsProvisionedToAccount"></a>

```typescript
public readonly ListPermissionSetsProvisionedToAccount: string;
```

- *Type:* string

[List] sso:ListPermissionSetsProvisionedToAccount.

---

##### `ListProfileAssociations`<sup>Required</sup> <a name="ListProfileAssociations" id="@cdk_utils/iam.sso.SSOActions.property.ListProfileAssociations"></a>

```typescript
public readonly ListProfileAssociations: string;
```

- *Type:* string

[Read] sso:ListProfileAssociations.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.sso.SSOActions.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string;
```

- *Type:* string

[List] sso:ListProfiles.

---

##### `ListRegions`<sup>Required</sup> <a name="ListRegions" id="@cdk_utils/iam.sso.SSOActions.property.ListRegions"></a>

```typescript
public readonly ListRegions: string;
```

- *Type:* string

[List] sso:ListRegions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.sso.SSOActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] sso:ListTagsForResource.

---

##### `ListTrustedTokenIssuers`<sup>Required</sup> <a name="ListTrustedTokenIssuers" id="@cdk_utils/iam.sso.SSOActions.property.ListTrustedTokenIssuers"></a>

```typescript
public readonly ListTrustedTokenIssuers: string;
```

- *Type:* string

[List] sso:ListTrustedTokenIssuers.

---

##### `ProvisionPermissionSet`<sup>Required</sup> <a name="ProvisionPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.ProvisionPermissionSet"></a>

```typescript
public readonly ProvisionPermissionSet: string;
```

- *Type:* string

[Write] sso:ProvisionPermissionSet.

---

##### `PutApplicationAccessScope`<sup>Required</sup> <a name="PutApplicationAccessScope" id="@cdk_utils/iam.sso.SSOActions.property.PutApplicationAccessScope"></a>

```typescript
public readonly PutApplicationAccessScope: string;
```

- *Type:* string

[Write] sso:PutApplicationAccessScope.

---

##### `PutApplicationAssignmentConfiguration`<sup>Required</sup> <a name="PutApplicationAssignmentConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.PutApplicationAssignmentConfiguration"></a>

```typescript
public readonly PutApplicationAssignmentConfiguration: string;
```

- *Type:* string

[Write] sso:PutApplicationAssignmentConfiguration.

---

##### `PutApplicationAuthenticationMethod`<sup>Required</sup> <a name="PutApplicationAuthenticationMethod" id="@cdk_utils/iam.sso.SSOActions.property.PutApplicationAuthenticationMethod"></a>

```typescript
public readonly PutApplicationAuthenticationMethod: string;
```

- *Type:* string

[Write] sso:PutApplicationAuthenticationMethod.

---

##### `PutApplicationGrant`<sup>Required</sup> <a name="PutApplicationGrant" id="@cdk_utils/iam.sso.SSOActions.property.PutApplicationGrant"></a>

```typescript
public readonly PutApplicationGrant: string;
```

- *Type:* string

[Write] sso:PutApplicationGrant.

---

##### `PutApplicationSessionConfiguration`<sup>Required</sup> <a name="PutApplicationSessionConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.PutApplicationSessionConfiguration"></a>

```typescript
public readonly PutApplicationSessionConfiguration: string;
```

- *Type:* string

[Write] sso:PutApplicationSessionConfiguration.

---

##### `PutInlinePolicyToPermissionSet`<sup>Required</sup> <a name="PutInlinePolicyToPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.PutInlinePolicyToPermissionSet"></a>

```typescript
public readonly PutInlinePolicyToPermissionSet: string;
```

- *Type:* string

[Write] sso:PutInlinePolicyToPermissionSet.

---

##### `PutMfaDeviceManagementForDirectory`<sup>Required</sup> <a name="PutMfaDeviceManagementForDirectory" id="@cdk_utils/iam.sso.SSOActions.property.PutMfaDeviceManagementForDirectory"></a>

```typescript
public readonly PutMfaDeviceManagementForDirectory: string;
```

- *Type:* string

[Write] sso:PutMfaDeviceManagementForDirectory.

---

##### `PutPermissionsBoundaryToPermissionSet`<sup>Required</sup> <a name="PutPermissionsBoundaryToPermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.PutPermissionsBoundaryToPermissionSet"></a>

```typescript
public readonly PutPermissionsBoundaryToPermissionSet: string;
```

- *Type:* string

[PermissionManagement] sso:PutPermissionsBoundaryToPermissionSet.

---

##### `PutPermissionsPolicy`<sup>Required</sup> <a name="PutPermissionsPolicy" id="@cdk_utils/iam.sso.SSOActions.property.PutPermissionsPolicy"></a>

```typescript
public readonly PutPermissionsPolicy: string;
```

- *Type:* string

[PermissionManagement] sso:PutPermissionsPolicy.

---

##### `RemoveRegion`<sup>Required</sup> <a name="RemoveRegion" id="@cdk_utils/iam.sso.SSOActions.property.RemoveRegion"></a>

```typescript
public readonly RemoveRegion: string;
```

- *Type:* string

[Write] sso:RemoveRegion.

---

##### `SearchGroups`<sup>Required</sup> <a name="SearchGroups" id="@cdk_utils/iam.sso.SSOActions.property.SearchGroups"></a>

```typescript
public readonly SearchGroups: string;
```

- *Type:* string

[Read] sso:SearchGroups.

---

##### `SearchUsers`<sup>Required</sup> <a name="SearchUsers" id="@cdk_utils/iam.sso.SSOActions.property.SearchUsers"></a>

```typescript
public readonly SearchUsers: string;
```

- *Type:* string

[Read] sso:SearchUsers.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sso.SSOActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartSSO`<sup>Required</sup> <a name="StartSSO" id="@cdk_utils/iam.sso.SSOActions.property.StartSSO"></a>

```typescript
public readonly StartSSO: string;
```

- *Type:* string

[Write] sso:StartSSO.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.sso.SSOActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] sso:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.sso.SSOActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] sso:UntagResource.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.sso.SSOActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] sso:UpdateApplication.

---

##### `UpdateApplicationInstanceActiveCertificate`<sup>Required</sup> <a name="UpdateApplicationInstanceActiveCertificate" id="@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceActiveCertificate"></a>

```typescript
public readonly UpdateApplicationInstanceActiveCertificate: string;
```

- *Type:* string

[Write] sso:UpdateApplicationInstanceActiveCertificate.

---

##### `UpdateApplicationInstanceDisplayData`<sup>Required</sup> <a name="UpdateApplicationInstanceDisplayData" id="@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceDisplayData"></a>

```typescript
public readonly UpdateApplicationInstanceDisplayData: string;
```

- *Type:* string

[Write] sso:UpdateApplicationInstanceDisplayData.

---

##### `UpdateApplicationInstanceResponseConfiguration`<sup>Required</sup> <a name="UpdateApplicationInstanceResponseConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceResponseConfiguration"></a>

```typescript
public readonly UpdateApplicationInstanceResponseConfiguration: string;
```

- *Type:* string

[Write] sso:UpdateApplicationInstanceResponseConfiguration.

---

##### `UpdateApplicationInstanceResponseSchemaConfiguration`<sup>Required</sup> <a name="UpdateApplicationInstanceResponseSchemaConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceResponseSchemaConfiguration"></a>

```typescript
public readonly UpdateApplicationInstanceResponseSchemaConfiguration: string;
```

- *Type:* string

[Write] sso:UpdateApplicationInstanceResponseSchemaConfiguration.

---

##### `UpdateApplicationInstanceSecurityConfiguration`<sup>Required</sup> <a name="UpdateApplicationInstanceSecurityConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceSecurityConfiguration"></a>

```typescript
public readonly UpdateApplicationInstanceSecurityConfiguration: string;
```

- *Type:* string

[Write] sso:UpdateApplicationInstanceSecurityConfiguration.

---

##### `UpdateApplicationInstanceServiceProviderConfiguration`<sup>Required</sup> <a name="UpdateApplicationInstanceServiceProviderConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceServiceProviderConfiguration"></a>

```typescript
public readonly UpdateApplicationInstanceServiceProviderConfiguration: string;
```

- *Type:* string

[Write] sso:UpdateApplicationInstanceServiceProviderConfiguration.

---

##### `UpdateApplicationInstanceStatus`<sup>Required</sup> <a name="UpdateApplicationInstanceStatus" id="@cdk_utils/iam.sso.SSOActions.property.UpdateApplicationInstanceStatus"></a>

```typescript
public readonly UpdateApplicationInstanceStatus: string;
```

- *Type:* string

[Write] sso:UpdateApplicationInstanceStatus.

---

##### `UpdateInstance`<sup>Required</sup> <a name="UpdateInstance" id="@cdk_utils/iam.sso.SSOActions.property.UpdateInstance"></a>

```typescript
public readonly UpdateInstance: string;
```

- *Type:* string

[Write] sso:UpdateInstance.

---

##### `UpdateInstanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="UpdateInstanceAccessControlAttributeConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.UpdateInstanceAccessControlAttributeConfiguration"></a>

```typescript
public readonly UpdateInstanceAccessControlAttributeConfiguration: string;
```

- *Type:* string

[Write] sso:UpdateInstanceAccessControlAttributeConfiguration.

---

##### `UpdateManagedApplicationInstanceStatus`<sup>Required</sup> <a name="UpdateManagedApplicationInstanceStatus" id="@cdk_utils/iam.sso.SSOActions.property.UpdateManagedApplicationInstanceStatus"></a>

```typescript
public readonly UpdateManagedApplicationInstanceStatus: string;
```

- *Type:* string

[Write] sso:UpdateManagedApplicationInstanceStatus.

---

##### `UpdatePermissionSet`<sup>Required</sup> <a name="UpdatePermissionSet" id="@cdk_utils/iam.sso.SSOActions.property.UpdatePermissionSet"></a>

```typescript
public readonly UpdatePermissionSet: string;
```

- *Type:* string

[PermissionManagement] sso:UpdatePermissionSet.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.sso.SSOActions.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string;
```

- *Type:* string

[Write] sso:UpdateProfile.

---

##### `UpdateSSOConfiguration`<sup>Required</sup> <a name="UpdateSSOConfiguration" id="@cdk_utils/iam.sso.SSOActions.property.UpdateSSOConfiguration"></a>

```typescript
public readonly UpdateSSOConfiguration: string;
```

- *Type:* string

[Write] sso:UpdateSSOConfiguration.

---

##### `UpdateTrust`<sup>Required</sup> <a name="UpdateTrust" id="@cdk_utils/iam.sso.SSOActions.property.UpdateTrust"></a>

```typescript
public readonly UpdateTrust: string;
```

- *Type:* string

[Write] sso:UpdateTrust.

---

##### `UpdateTrustedTokenIssuer`<sup>Required</sup> <a name="UpdateTrustedTokenIssuer" id="@cdk_utils/iam.sso.SSOActions.property.UpdateTrustedTokenIssuer"></a>

```typescript
public readonly UpdateTrustedTokenIssuer: string;
```

- *Type:* string

[Write] sso:UpdateTrustedTokenIssuer.

---

### SSOConditions <a name="SSOConditions" id="@cdk_utils/iam.sso.SSOConditions"></a>

Condition key constants and builders for sso.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sso.SSOConditions.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

new sso.SSOConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.applicationAccount">applicationAccount</a></code> | Generates a condition block for `sso:ApplicationAccount`. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.primaryRegion">primaryRegion</a></code> | Generates a condition block for `sso:PrimaryRegion`. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `applicationAccount` <a name="applicationAccount" id="@cdk_utils/iam.sso.SSOConditions.applicationAccount"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOConditions.applicationAccount(value: string)
```

Generates a condition block for `sso:ApplicationAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sso.SSOConditions.applicationAccount.parameter.value"></a>

- *Type:* string

---

##### `primaryRegion` <a name="primaryRegion" id="@cdk_utils/iam.sso.SSOConditions.primaryRegion"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOConditions.primaryRegion(value: string)
```

Generates a condition block for `sso:PrimaryRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sso.SSOConditions.primaryRegion.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.sso.SSOConditions.requestTag"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sso.SSOConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.sso.SSOConditions.resourceTag"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sso.SSOConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.sso.SSOConditions.tagKeys"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.sso.SSOConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.actionGetApplicationAccessScopeConditionKeys">actionGetApplicationAccessScopeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApplicationAccessScope action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.actionGetApplicationAssignmentConfigurationConditionKeys">actionGetApplicationAssignmentConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApplicationAssignmentConfiguration action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.actionGetApplicationAuthenticationMethodConditionKeys">actionGetApplicationAuthenticationMethodConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApplicationAuthenticationMethod action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.actionGetApplicationGrantConditionKeys">actionGetApplicationGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApplicationGrant action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.actionGetApplicationSessionConfigurationConditionKeys">actionGetApplicationSessionConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApplicationSessionConfiguration action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.APPLICATION_ACCOUNT">APPLICATION_ACCOUNT</a></code> | <code>string</code> | Condition key: sso:ApplicationAccount (String). |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.APPLICATION_ARN">APPLICATION_ARN</a></code> | <code>string</code> | Condition key: identitycenter:ApplicationArn (ARN). |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.CreateApplicationAssignmentConditionKeys">CreateApplicationAssignmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplicationAssignment action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.CreateInstanceConditionKeys">CreateInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInstance action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.CreatePermissionSetConditionKeys">CreatePermissionSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePermissionSet action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.CreateTrustedTokenIssuerConditionKeys">CreateTrustedTokenIssuerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTrustedTokenIssuer action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.DeleteApplicationAccessScopeConditionKeys">DeleteApplicationAccessScopeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteApplicationAccessScope action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.DeleteApplicationAssignmentConditionKeys">DeleteApplicationAssignmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteApplicationAssignment action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.DeleteApplicationAuthenticationMethodConditionKeys">DeleteApplicationAuthenticationMethodConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteApplicationAuthenticationMethod action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.DeleteApplicationConditionKeys">DeleteApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteApplication action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.DeleteApplicationGrantConditionKeys">DeleteApplicationGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteApplicationGrant action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.DescribeApplicationAssignmentConditionKeys">DescribeApplicationAssignmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeApplicationAssignment action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.DescribeApplicationConditionKeys">DescribeApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeApplication action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.INSTANCE_ARN">INSTANCE_ARN</a></code> | <code>string</code> | Condition key: identitycenter:InstanceArn (ARN). |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.ListApplicationAccessScopesConditionKeys">ListApplicationAccessScopesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListApplicationAccessScopes action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.ListApplicationAssignmentsConditionKeys">ListApplicationAssignmentsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListApplicationAssignments action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.ListApplicationAssignmentsForPrincipalConditionKeys">ListApplicationAssignmentsForPrincipalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListApplicationAssignmentsForPrincipal action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.ListApplicationAuthenticationMethodsConditionKeys">ListApplicationAuthenticationMethodsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListApplicationAuthenticationMethods action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.ListApplicationGrantsConditionKeys">ListApplicationGrantsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListApplicationGrants action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.PRIMARY_REGION">PRIMARY_REGION</a></code> | <code>string</code> | Condition key: sso:PrimaryRegion (String). |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.PutApplicationAccessScopeConditionKeys">PutApplicationAccessScopeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutApplicationAccessScope action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.PutApplicationAssignmentConfigurationConditionKeys">PutApplicationAssignmentConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutApplicationAssignmentConfiguration action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.PutApplicationAuthenticationMethodConditionKeys">PutApplicationAuthenticationMethodConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutApplicationAuthenticationMethod action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.PutApplicationGrantConditionKeys">PutApplicationGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutApplicationGrant action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.PutApplicationSessionConfigurationConditionKeys">PutApplicationSessionConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutApplicationSessionConfiguration action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.sso.SSOConditions.property.UpdateApplicationConditionKeys">UpdateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateApplication action. |

---

##### `actionGetApplicationAccessScopeConditionKeys`<sup>Required</sup> <a name="actionGetApplicationAccessScopeConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.actionGetApplicationAccessScopeConditionKeys"></a>

```typescript
public readonly actionGetApplicationAccessScopeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApplicationAccessScope action.

---

##### `actionGetApplicationAssignmentConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetApplicationAssignmentConfigurationConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.actionGetApplicationAssignmentConfigurationConditionKeys"></a>

```typescript
public readonly actionGetApplicationAssignmentConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApplicationAssignmentConfiguration action.

---

##### `actionGetApplicationAuthenticationMethodConditionKeys`<sup>Required</sup> <a name="actionGetApplicationAuthenticationMethodConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.actionGetApplicationAuthenticationMethodConditionKeys"></a>

```typescript
public readonly actionGetApplicationAuthenticationMethodConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApplicationAuthenticationMethod action.

---

##### `actionGetApplicationGrantConditionKeys`<sup>Required</sup> <a name="actionGetApplicationGrantConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.actionGetApplicationGrantConditionKeys"></a>

```typescript
public readonly actionGetApplicationGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApplicationGrant action.

---

##### `actionGetApplicationSessionConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetApplicationSessionConfigurationConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.actionGetApplicationSessionConfigurationConditionKeys"></a>

```typescript
public readonly actionGetApplicationSessionConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApplicationSessionConfiguration action.

---

##### `APPLICATION_ACCOUNT`<sup>Required</sup> <a name="APPLICATION_ACCOUNT" id="@cdk_utils/iam.sso.SSOConditions.property.APPLICATION_ACCOUNT"></a>

```typescript
public readonly APPLICATION_ACCOUNT: string;
```

- *Type:* string

Condition key: sso:ApplicationAccount (String).

---

##### `APPLICATION_ARN`<sup>Required</sup> <a name="APPLICATION_ARN" id="@cdk_utils/iam.sso.SSOConditions.property.APPLICATION_ARN"></a>

```typescript
public readonly APPLICATION_ARN: string;
```

- *Type:* string

Condition key: identitycenter:ApplicationArn (ARN).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.sso.SSOConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.sso.SSOConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.sso.SSOConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationAssignmentConditionKeys`<sup>Required</sup> <a name="CreateApplicationAssignmentConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.CreateApplicationAssignmentConditionKeys"></a>

```typescript
public readonly CreateApplicationAssignmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplicationAssignment action.

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateInstanceConditionKeys`<sup>Required</sup> <a name="CreateInstanceConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.CreateInstanceConditionKeys"></a>

```typescript
public readonly CreateInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInstance action.

---

##### `CreatePermissionSetConditionKeys`<sup>Required</sup> <a name="CreatePermissionSetConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.CreatePermissionSetConditionKeys"></a>

```typescript
public readonly CreatePermissionSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePermissionSet action.

---

##### `CreateTrustedTokenIssuerConditionKeys`<sup>Required</sup> <a name="CreateTrustedTokenIssuerConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.CreateTrustedTokenIssuerConditionKeys"></a>

```typescript
public readonly CreateTrustedTokenIssuerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTrustedTokenIssuer action.

---

##### `DeleteApplicationAccessScopeConditionKeys`<sup>Required</sup> <a name="DeleteApplicationAccessScopeConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.DeleteApplicationAccessScopeConditionKeys"></a>

```typescript
public readonly DeleteApplicationAccessScopeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteApplicationAccessScope action.

---

##### `DeleteApplicationAssignmentConditionKeys`<sup>Required</sup> <a name="DeleteApplicationAssignmentConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.DeleteApplicationAssignmentConditionKeys"></a>

```typescript
public readonly DeleteApplicationAssignmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteApplicationAssignment action.

---

##### `DeleteApplicationAuthenticationMethodConditionKeys`<sup>Required</sup> <a name="DeleteApplicationAuthenticationMethodConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.DeleteApplicationAuthenticationMethodConditionKeys"></a>

```typescript
public readonly DeleteApplicationAuthenticationMethodConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteApplicationAuthenticationMethod action.

---

##### `DeleteApplicationConditionKeys`<sup>Required</sup> <a name="DeleteApplicationConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.DeleteApplicationConditionKeys"></a>

```typescript
public readonly DeleteApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteApplication action.

---

##### `DeleteApplicationGrantConditionKeys`<sup>Required</sup> <a name="DeleteApplicationGrantConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.DeleteApplicationGrantConditionKeys"></a>

```typescript
public readonly DeleteApplicationGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteApplicationGrant action.

---

##### `DescribeApplicationAssignmentConditionKeys`<sup>Required</sup> <a name="DescribeApplicationAssignmentConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.DescribeApplicationAssignmentConditionKeys"></a>

```typescript
public readonly DescribeApplicationAssignmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeApplicationAssignment action.

---

##### `DescribeApplicationConditionKeys`<sup>Required</sup> <a name="DescribeApplicationConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.DescribeApplicationConditionKeys"></a>

```typescript
public readonly DescribeApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeApplication action.

---

##### `INSTANCE_ARN`<sup>Required</sup> <a name="INSTANCE_ARN" id="@cdk_utils/iam.sso.SSOConditions.property.INSTANCE_ARN"></a>

```typescript
public readonly INSTANCE_ARN: string;
```

- *Type:* string

Condition key: identitycenter:InstanceArn (ARN).

---

##### `ListApplicationAccessScopesConditionKeys`<sup>Required</sup> <a name="ListApplicationAccessScopesConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.ListApplicationAccessScopesConditionKeys"></a>

```typescript
public readonly ListApplicationAccessScopesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListApplicationAccessScopes action.

---

##### `ListApplicationAssignmentsConditionKeys`<sup>Required</sup> <a name="ListApplicationAssignmentsConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.ListApplicationAssignmentsConditionKeys"></a>

```typescript
public readonly ListApplicationAssignmentsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListApplicationAssignments action.

---

##### `ListApplicationAssignmentsForPrincipalConditionKeys`<sup>Required</sup> <a name="ListApplicationAssignmentsForPrincipalConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.ListApplicationAssignmentsForPrincipalConditionKeys"></a>

```typescript
public readonly ListApplicationAssignmentsForPrincipalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListApplicationAssignmentsForPrincipal action.

---

##### `ListApplicationAuthenticationMethodsConditionKeys`<sup>Required</sup> <a name="ListApplicationAuthenticationMethodsConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.ListApplicationAuthenticationMethodsConditionKeys"></a>

```typescript
public readonly ListApplicationAuthenticationMethodsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListApplicationAuthenticationMethods action.

---

##### `ListApplicationGrantsConditionKeys`<sup>Required</sup> <a name="ListApplicationGrantsConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.ListApplicationGrantsConditionKeys"></a>

```typescript
public readonly ListApplicationGrantsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListApplicationGrants action.

---

##### `PRIMARY_REGION`<sup>Required</sup> <a name="PRIMARY_REGION" id="@cdk_utils/iam.sso.SSOConditions.property.PRIMARY_REGION"></a>

```typescript
public readonly PRIMARY_REGION: string;
```

- *Type:* string

Condition key: sso:PrimaryRegion (String).

---

##### `PutApplicationAccessScopeConditionKeys`<sup>Required</sup> <a name="PutApplicationAccessScopeConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.PutApplicationAccessScopeConditionKeys"></a>

```typescript
public readonly PutApplicationAccessScopeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutApplicationAccessScope action.

---

##### `PutApplicationAssignmentConfigurationConditionKeys`<sup>Required</sup> <a name="PutApplicationAssignmentConfigurationConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.PutApplicationAssignmentConfigurationConditionKeys"></a>

```typescript
public readonly PutApplicationAssignmentConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutApplicationAssignmentConfiguration action.

---

##### `PutApplicationAuthenticationMethodConditionKeys`<sup>Required</sup> <a name="PutApplicationAuthenticationMethodConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.PutApplicationAuthenticationMethodConditionKeys"></a>

```typescript
public readonly PutApplicationAuthenticationMethodConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutApplicationAuthenticationMethod action.

---

##### `PutApplicationGrantConditionKeys`<sup>Required</sup> <a name="PutApplicationGrantConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.PutApplicationGrantConditionKeys"></a>

```typescript
public readonly PutApplicationGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutApplicationGrant action.

---

##### `PutApplicationSessionConfigurationConditionKeys`<sup>Required</sup> <a name="PutApplicationSessionConfigurationConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.PutApplicationSessionConfigurationConditionKeys"></a>

```typescript
public readonly PutApplicationSessionConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutApplicationSessionConfiguration action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateApplicationConditionKeys`<sup>Required</sup> <a name="UpdateApplicationConditionKeys" id="@cdk_utils/iam.sso.SSOConditions.property.UpdateApplicationConditionKeys"></a>

```typescript
public readonly UpdateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateApplication action.

---

### SSOOperations <a name="SSOOperations" id="@cdk_utils/iam.sso.SSOOperations"></a>

API operation to required IAM actions mapping for sso.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sso.SSOOperations.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

new sso.SSOOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.AddRegion">AddRegion</a></code> | <code>string[]</code> | IAM actions required for the AddRegion API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.AttachCustomerManagedPolicyReferenceToPermissionSet">AttachCustomerManagedPolicyReferenceToPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the AttachCustomerManagedPolicyReferenceToPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.AttachManagedPolicyToPermissionSet">AttachManagedPolicyToPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the AttachManagedPolicyToPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.CreateAccountAssignment">CreateAccountAssignment</a></code> | <code>string[]</code> | IAM actions required for the CreateAccountAssignment API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.CreateApplicationAssignment">CreateApplicationAssignment</a></code> | <code>string[]</code> | IAM actions required for the CreateApplicationAssignment API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.CreateInstance">CreateInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateInstance API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.CreateInstanceAccessControlAttributeConfiguration">CreateInstanceAccessControlAttributeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateInstanceAccessControlAttributeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.CreatePermissionSet">CreatePermissionSet</a></code> | <code>string[]</code> | IAM actions required for the CreatePermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.CreateTrustedTokenIssuer">CreateTrustedTokenIssuer</a></code> | <code>string[]</code> | IAM actions required for the CreateTrustedTokenIssuer API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeleteAccountAssignment">DeleteAccountAssignment</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountAssignment API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeleteApplicationAccessScope">DeleteApplicationAccessScope</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationAccessScope API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeleteApplicationAssignment">DeleteApplicationAssignment</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationAssignment API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeleteApplicationAuthenticationMethod">DeleteApplicationAuthenticationMethod</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationAuthenticationMethod API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeleteApplicationGrant">DeleteApplicationGrant</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationGrant API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeleteInlinePolicyFromPermissionSet">DeleteInlinePolicyFromPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteInlinePolicyFromPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeleteInstance">DeleteInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstance API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeleteInstanceAccessControlAttributeConfiguration">DeleteInstanceAccessControlAttributeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstanceAccessControlAttributeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeletePermissionsBoundaryFromPermissionSet">DeletePermissionsBoundaryFromPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the DeletePermissionsBoundaryFromPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeletePermissionSet">DeletePermissionSet</a></code> | <code>string[]</code> | IAM actions required for the DeletePermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DeleteTrustedTokenIssuer">DeleteTrustedTokenIssuer</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrustedTokenIssuer API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribeAccountAssignmentCreationStatus">DescribeAccountAssignmentCreationStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountAssignmentCreationStatus API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribeAccountAssignmentDeletionStatus">DescribeAccountAssignmentDeletionStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountAssignmentDeletionStatus API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribeApplication">DescribeApplication</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplication API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribeApplicationAssignment">DescribeApplicationAssignment</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplicationAssignment API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribeApplicationProvider">DescribeApplicationProvider</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplicationProvider API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribeInstance">DescribeInstance</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstance API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribeInstanceAccessControlAttributeConfiguration">DescribeInstanceAccessControlAttributeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstanceAccessControlAttributeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribePermissionSet">DescribePermissionSet</a></code> | <code>string[]</code> | IAM actions required for the DescribePermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribePermissionSetProvisioningStatus">DescribePermissionSetProvisioningStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribePermissionSetProvisioningStatus API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribeRegion">DescribeRegion</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegion API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DescribeTrustedTokenIssuer">DescribeTrustedTokenIssuer</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrustedTokenIssuer API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DetachCustomerManagedPolicyReferenceFromPermissionSet">DetachCustomerManagedPolicyReferenceFromPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the DetachCustomerManagedPolicyReferenceFromPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.DetachManagedPolicyFromPermissionSet">DetachManagedPolicyFromPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the DetachManagedPolicyFromPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListAccountAssignmentCreationStatus">ListAccountAssignmentCreationStatus</a></code> | <code>string[]</code> | IAM actions required for the ListAccountAssignmentCreationStatus API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListAccountAssignmentDeletionStatus">ListAccountAssignmentDeletionStatus</a></code> | <code>string[]</code> | IAM actions required for the ListAccountAssignmentDeletionStatus API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListAccountAssignments">ListAccountAssignments</a></code> | <code>string[]</code> | IAM actions required for the ListAccountAssignments API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListAccountAssignmentsForPrincipal">ListAccountAssignmentsForPrincipal</a></code> | <code>string[]</code> | IAM actions required for the ListAccountAssignmentsForPrincipal API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListAccountRoles">ListAccountRoles</a></code> | <code>string[]</code> | IAM actions required for the ListAccountRoles API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListAccounts">ListAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListAccounts API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListAccountsForProvisionedPermissionSet">ListAccountsForProvisionedPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the ListAccountsForProvisionedPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListApplicationAccessScopes">ListApplicationAccessScopes</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationAccessScopes API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListApplicationAssignments">ListApplicationAssignments</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationAssignments API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListApplicationAssignmentsForPrincipal">ListApplicationAssignmentsForPrincipal</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationAssignmentsForPrincipal API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListApplicationAuthenticationMethods">ListApplicationAuthenticationMethods</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationAuthenticationMethods API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListApplicationGrants">ListApplicationGrants</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationGrants API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListApplicationProviders">ListApplicationProviders</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationProviders API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListCustomerManagedPolicyReferencesInPermissionSet">ListCustomerManagedPolicyReferencesInPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the ListCustomerManagedPolicyReferencesInPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListInstances">ListInstances</a></code> | <code>string[]</code> | IAM actions required for the ListInstances API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListManagedPoliciesInPermissionSet">ListManagedPoliciesInPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the ListManagedPoliciesInPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListPermissionSetProvisioningStatus">ListPermissionSetProvisioningStatus</a></code> | <code>string[]</code> | IAM actions required for the ListPermissionSetProvisioningStatus API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListPermissionSets">ListPermissionSets</a></code> | <code>string[]</code> | IAM actions required for the ListPermissionSets API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListPermissionSetsProvisionedToAccount">ListPermissionSetsProvisionedToAccount</a></code> | <code>string[]</code> | IAM actions required for the ListPermissionSetsProvisionedToAccount API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListRegions">ListRegions</a></code> | <code>string[]</code> | IAM actions required for the ListRegions API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ListTrustedTokenIssuers">ListTrustedTokenIssuers</a></code> | <code>string[]</code> | IAM actions required for the ListTrustedTokenIssuers API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.Logout">Logout</a></code> | <code>string[]</code> | IAM actions required for the Logout API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.opGetApplicationAccessScope">opGetApplicationAccessScope</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationAccessScope API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.opGetApplicationAssignmentConfiguration">opGetApplicationAssignmentConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationAssignmentConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.opGetApplicationAuthenticationMethod">opGetApplicationAuthenticationMethod</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationAuthenticationMethod API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.opGetApplicationGrant">opGetApplicationGrant</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationGrant API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.opGetApplicationSessionConfiguration">opGetApplicationSessionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationSessionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.opGetInlinePolicyForPermissionSet">opGetInlinePolicyForPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the GetInlinePolicyForPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.opGetPermissionsBoundaryForPermissionSet">opGetPermissionsBoundaryForPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the GetPermissionsBoundaryForPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.opGetRoleCredentials">opGetRoleCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetRoleCredentials API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.ProvisionPermissionSet">ProvisionPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the ProvisionPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.PutApplicationAccessScope">PutApplicationAccessScope</a></code> | <code>string[]</code> | IAM actions required for the PutApplicationAccessScope API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.PutApplicationAssignmentConfiguration">PutApplicationAssignmentConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutApplicationAssignmentConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.PutApplicationAuthenticationMethod">PutApplicationAuthenticationMethod</a></code> | <code>string[]</code> | IAM actions required for the PutApplicationAuthenticationMethod API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.PutApplicationGrant">PutApplicationGrant</a></code> | <code>string[]</code> | IAM actions required for the PutApplicationGrant API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.PutApplicationSessionConfiguration">PutApplicationSessionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutApplicationSessionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.PutInlinePolicyToPermissionSet">PutInlinePolicyToPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the PutInlinePolicyToPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.PutPermissionsBoundaryToPermissionSet">PutPermissionsBoundaryToPermissionSet</a></code> | <code>string[]</code> | IAM actions required for the PutPermissionsBoundaryToPermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.RemoveRegion">RemoveRegion</a></code> | <code>string[]</code> | IAM actions required for the RemoveRegion API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.UpdateInstance">UpdateInstance</a></code> | <code>string[]</code> | IAM actions required for the UpdateInstance API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.UpdateInstanceAccessControlAttributeConfiguration">UpdateInstanceAccessControlAttributeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateInstanceAccessControlAttributeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.UpdatePermissionSet">UpdatePermissionSet</a></code> | <code>string[]</code> | IAM actions required for the UpdatePermissionSet API call. |
| <code><a href="#@cdk_utils/iam.sso.SSOOperations.property.UpdateTrustedTokenIssuer">UpdateTrustedTokenIssuer</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrustedTokenIssuer API call. |

---

##### `AddRegion`<sup>Required</sup> <a name="AddRegion" id="@cdk_utils/iam.sso.SSOOperations.property.AddRegion"></a>

```typescript
public readonly AddRegion: string[];
```

- *Type:* string[]

IAM actions required for the AddRegion API call.

---

##### `AttachCustomerManagedPolicyReferenceToPermissionSet`<sup>Required</sup> <a name="AttachCustomerManagedPolicyReferenceToPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.AttachCustomerManagedPolicyReferenceToPermissionSet"></a>

```typescript
public readonly AttachCustomerManagedPolicyReferenceToPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the AttachCustomerManagedPolicyReferenceToPermissionSet API call.

---

##### `AttachManagedPolicyToPermissionSet`<sup>Required</sup> <a name="AttachManagedPolicyToPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.AttachManagedPolicyToPermissionSet"></a>

```typescript
public readonly AttachManagedPolicyToPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the AttachManagedPolicyToPermissionSet API call.

---

##### `CreateAccountAssignment`<sup>Required</sup> <a name="CreateAccountAssignment" id="@cdk_utils/iam.sso.SSOOperations.property.CreateAccountAssignment"></a>

```typescript
public readonly CreateAccountAssignment: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccountAssignment API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.sso.SSOOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateApplicationAssignment`<sup>Required</sup> <a name="CreateApplicationAssignment" id="@cdk_utils/iam.sso.SSOOperations.property.CreateApplicationAssignment"></a>

```typescript
public readonly CreateApplicationAssignment: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplicationAssignment API call.

---

##### `CreateInstance`<sup>Required</sup> <a name="CreateInstance" id="@cdk_utils/iam.sso.SSOOperations.property.CreateInstance"></a>

```typescript
public readonly CreateInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstance API call.

---

##### `CreateInstanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="CreateInstanceAccessControlAttributeConfiguration" id="@cdk_utils/iam.sso.SSOOperations.property.CreateInstanceAccessControlAttributeConfiguration"></a>

```typescript
public readonly CreateInstanceAccessControlAttributeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstanceAccessControlAttributeConfiguration API call.

---

##### `CreatePermissionSet`<sup>Required</sup> <a name="CreatePermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.CreatePermissionSet"></a>

```typescript
public readonly CreatePermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the CreatePermissionSet API call.

---

##### `CreateTrustedTokenIssuer`<sup>Required</sup> <a name="CreateTrustedTokenIssuer" id="@cdk_utils/iam.sso.SSOOperations.property.CreateTrustedTokenIssuer"></a>

```typescript
public readonly CreateTrustedTokenIssuer: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrustedTokenIssuer API call.

---

##### `DeleteAccountAssignment`<sup>Required</sup> <a name="DeleteAccountAssignment" id="@cdk_utils/iam.sso.SSOOperations.property.DeleteAccountAssignment"></a>

```typescript
public readonly DeleteAccountAssignment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountAssignment API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.sso.SSOOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteApplicationAccessScope`<sup>Required</sup> <a name="DeleteApplicationAccessScope" id="@cdk_utils/iam.sso.SSOOperations.property.DeleteApplicationAccessScope"></a>

```typescript
public readonly DeleteApplicationAccessScope: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationAccessScope API call.

---

##### `DeleteApplicationAssignment`<sup>Required</sup> <a name="DeleteApplicationAssignment" id="@cdk_utils/iam.sso.SSOOperations.property.DeleteApplicationAssignment"></a>

```typescript
public readonly DeleteApplicationAssignment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationAssignment API call.

---

##### `DeleteApplicationAuthenticationMethod`<sup>Required</sup> <a name="DeleteApplicationAuthenticationMethod" id="@cdk_utils/iam.sso.SSOOperations.property.DeleteApplicationAuthenticationMethod"></a>

```typescript
public readonly DeleteApplicationAuthenticationMethod: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationAuthenticationMethod API call.

---

##### `DeleteApplicationGrant`<sup>Required</sup> <a name="DeleteApplicationGrant" id="@cdk_utils/iam.sso.SSOOperations.property.DeleteApplicationGrant"></a>

```typescript
public readonly DeleteApplicationGrant: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationGrant API call.

---

##### `DeleteInlinePolicyFromPermissionSet`<sup>Required</sup> <a name="DeleteInlinePolicyFromPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.DeleteInlinePolicyFromPermissionSet"></a>

```typescript
public readonly DeleteInlinePolicyFromPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInlinePolicyFromPermissionSet API call.

---

##### `DeleteInstance`<sup>Required</sup> <a name="DeleteInstance" id="@cdk_utils/iam.sso.SSOOperations.property.DeleteInstance"></a>

```typescript
public readonly DeleteInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstance API call.

---

##### `DeleteInstanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="DeleteInstanceAccessControlAttributeConfiguration" id="@cdk_utils/iam.sso.SSOOperations.property.DeleteInstanceAccessControlAttributeConfiguration"></a>

```typescript
public readonly DeleteInstanceAccessControlAttributeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstanceAccessControlAttributeConfiguration API call.

---

##### `DeletePermissionsBoundaryFromPermissionSet`<sup>Required</sup> <a name="DeletePermissionsBoundaryFromPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.DeletePermissionsBoundaryFromPermissionSet"></a>

```typescript
public readonly DeletePermissionsBoundaryFromPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the DeletePermissionsBoundaryFromPermissionSet API call.

---

##### `DeletePermissionSet`<sup>Required</sup> <a name="DeletePermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.DeletePermissionSet"></a>

```typescript
public readonly DeletePermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the DeletePermissionSet API call.

---

##### `DeleteTrustedTokenIssuer`<sup>Required</sup> <a name="DeleteTrustedTokenIssuer" id="@cdk_utils/iam.sso.SSOOperations.property.DeleteTrustedTokenIssuer"></a>

```typescript
public readonly DeleteTrustedTokenIssuer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrustedTokenIssuer API call.

---

##### `DescribeAccountAssignmentCreationStatus`<sup>Required</sup> <a name="DescribeAccountAssignmentCreationStatus" id="@cdk_utils/iam.sso.SSOOperations.property.DescribeAccountAssignmentCreationStatus"></a>

```typescript
public readonly DescribeAccountAssignmentCreationStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountAssignmentCreationStatus API call.

---

##### `DescribeAccountAssignmentDeletionStatus`<sup>Required</sup> <a name="DescribeAccountAssignmentDeletionStatus" id="@cdk_utils/iam.sso.SSOOperations.property.DescribeAccountAssignmentDeletionStatus"></a>

```typescript
public readonly DescribeAccountAssignmentDeletionStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountAssignmentDeletionStatus API call.

---

##### `DescribeApplication`<sup>Required</sup> <a name="DescribeApplication" id="@cdk_utils/iam.sso.SSOOperations.property.DescribeApplication"></a>

```typescript
public readonly DescribeApplication: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplication API call.

---

##### `DescribeApplicationAssignment`<sup>Required</sup> <a name="DescribeApplicationAssignment" id="@cdk_utils/iam.sso.SSOOperations.property.DescribeApplicationAssignment"></a>

```typescript
public readonly DescribeApplicationAssignment: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplicationAssignment API call.

---

##### `DescribeApplicationProvider`<sup>Required</sup> <a name="DescribeApplicationProvider" id="@cdk_utils/iam.sso.SSOOperations.property.DescribeApplicationProvider"></a>

```typescript
public readonly DescribeApplicationProvider: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplicationProvider API call.

---

##### `DescribeInstance`<sup>Required</sup> <a name="DescribeInstance" id="@cdk_utils/iam.sso.SSOOperations.property.DescribeInstance"></a>

```typescript
public readonly DescribeInstance: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstance API call.

---

##### `DescribeInstanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="DescribeInstanceAccessControlAttributeConfiguration" id="@cdk_utils/iam.sso.SSOOperations.property.DescribeInstanceAccessControlAttributeConfiguration"></a>

```typescript
public readonly DescribeInstanceAccessControlAttributeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstanceAccessControlAttributeConfiguration API call.

---

##### `DescribePermissionSet`<sup>Required</sup> <a name="DescribePermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.DescribePermissionSet"></a>

```typescript
public readonly DescribePermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the DescribePermissionSet API call.

---

##### `DescribePermissionSetProvisioningStatus`<sup>Required</sup> <a name="DescribePermissionSetProvisioningStatus" id="@cdk_utils/iam.sso.SSOOperations.property.DescribePermissionSetProvisioningStatus"></a>

```typescript
public readonly DescribePermissionSetProvisioningStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribePermissionSetProvisioningStatus API call.

---

##### `DescribeRegion`<sup>Required</sup> <a name="DescribeRegion" id="@cdk_utils/iam.sso.SSOOperations.property.DescribeRegion"></a>

```typescript
public readonly DescribeRegion: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegion API call.

---

##### `DescribeTrustedTokenIssuer`<sup>Required</sup> <a name="DescribeTrustedTokenIssuer" id="@cdk_utils/iam.sso.SSOOperations.property.DescribeTrustedTokenIssuer"></a>

```typescript
public readonly DescribeTrustedTokenIssuer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrustedTokenIssuer API call.

---

##### `DetachCustomerManagedPolicyReferenceFromPermissionSet`<sup>Required</sup> <a name="DetachCustomerManagedPolicyReferenceFromPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.DetachCustomerManagedPolicyReferenceFromPermissionSet"></a>

```typescript
public readonly DetachCustomerManagedPolicyReferenceFromPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the DetachCustomerManagedPolicyReferenceFromPermissionSet API call.

---

##### `DetachManagedPolicyFromPermissionSet`<sup>Required</sup> <a name="DetachManagedPolicyFromPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.DetachManagedPolicyFromPermissionSet"></a>

```typescript
public readonly DetachManagedPolicyFromPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the DetachManagedPolicyFromPermissionSet API call.

---

##### `ListAccountAssignmentCreationStatus`<sup>Required</sup> <a name="ListAccountAssignmentCreationStatus" id="@cdk_utils/iam.sso.SSOOperations.property.ListAccountAssignmentCreationStatus"></a>

```typescript
public readonly ListAccountAssignmentCreationStatus: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountAssignmentCreationStatus API call.

---

##### `ListAccountAssignmentDeletionStatus`<sup>Required</sup> <a name="ListAccountAssignmentDeletionStatus" id="@cdk_utils/iam.sso.SSOOperations.property.ListAccountAssignmentDeletionStatus"></a>

```typescript
public readonly ListAccountAssignmentDeletionStatus: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountAssignmentDeletionStatus API call.

---

##### `ListAccountAssignments`<sup>Required</sup> <a name="ListAccountAssignments" id="@cdk_utils/iam.sso.SSOOperations.property.ListAccountAssignments"></a>

```typescript
public readonly ListAccountAssignments: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountAssignments API call.

---

##### `ListAccountAssignmentsForPrincipal`<sup>Required</sup> <a name="ListAccountAssignmentsForPrincipal" id="@cdk_utils/iam.sso.SSOOperations.property.ListAccountAssignmentsForPrincipal"></a>

```typescript
public readonly ListAccountAssignmentsForPrincipal: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountAssignmentsForPrincipal API call.

---

##### `ListAccountRoles`<sup>Required</sup> <a name="ListAccountRoles" id="@cdk_utils/iam.sso.SSOOperations.property.ListAccountRoles"></a>

```typescript
public readonly ListAccountRoles: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountRoles API call.

---

##### `ListAccounts`<sup>Required</sup> <a name="ListAccounts" id="@cdk_utils/iam.sso.SSOOperations.property.ListAccounts"></a>

```typescript
public readonly ListAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListAccounts API call.

---

##### `ListAccountsForProvisionedPermissionSet`<sup>Required</sup> <a name="ListAccountsForProvisionedPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.ListAccountsForProvisionedPermissionSet"></a>

```typescript
public readonly ListAccountsForProvisionedPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountsForProvisionedPermissionSet API call.

---

##### `ListApplicationAccessScopes`<sup>Required</sup> <a name="ListApplicationAccessScopes" id="@cdk_utils/iam.sso.SSOOperations.property.ListApplicationAccessScopes"></a>

```typescript
public readonly ListApplicationAccessScopes: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationAccessScopes API call.

---

##### `ListApplicationAssignments`<sup>Required</sup> <a name="ListApplicationAssignments" id="@cdk_utils/iam.sso.SSOOperations.property.ListApplicationAssignments"></a>

```typescript
public readonly ListApplicationAssignments: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationAssignments API call.

---

##### `ListApplicationAssignmentsForPrincipal`<sup>Required</sup> <a name="ListApplicationAssignmentsForPrincipal" id="@cdk_utils/iam.sso.SSOOperations.property.ListApplicationAssignmentsForPrincipal"></a>

```typescript
public readonly ListApplicationAssignmentsForPrincipal: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationAssignmentsForPrincipal API call.

---

##### `ListApplicationAuthenticationMethods`<sup>Required</sup> <a name="ListApplicationAuthenticationMethods" id="@cdk_utils/iam.sso.SSOOperations.property.ListApplicationAuthenticationMethods"></a>

```typescript
public readonly ListApplicationAuthenticationMethods: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationAuthenticationMethods API call.

---

##### `ListApplicationGrants`<sup>Required</sup> <a name="ListApplicationGrants" id="@cdk_utils/iam.sso.SSOOperations.property.ListApplicationGrants"></a>

```typescript
public readonly ListApplicationGrants: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationGrants API call.

---

##### `ListApplicationProviders`<sup>Required</sup> <a name="ListApplicationProviders" id="@cdk_utils/iam.sso.SSOOperations.property.ListApplicationProviders"></a>

```typescript
public readonly ListApplicationProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationProviders API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.sso.SSOOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListCustomerManagedPolicyReferencesInPermissionSet`<sup>Required</sup> <a name="ListCustomerManagedPolicyReferencesInPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.ListCustomerManagedPolicyReferencesInPermissionSet"></a>

```typescript
public readonly ListCustomerManagedPolicyReferencesInPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomerManagedPolicyReferencesInPermissionSet API call.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.sso.SSOOperations.property.ListInstances"></a>

```typescript
public readonly ListInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListInstances API call.

---

##### `ListManagedPoliciesInPermissionSet`<sup>Required</sup> <a name="ListManagedPoliciesInPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.ListManagedPoliciesInPermissionSet"></a>

```typescript
public readonly ListManagedPoliciesInPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedPoliciesInPermissionSet API call.

---

##### `ListPermissionSetProvisioningStatus`<sup>Required</sup> <a name="ListPermissionSetProvisioningStatus" id="@cdk_utils/iam.sso.SSOOperations.property.ListPermissionSetProvisioningStatus"></a>

```typescript
public readonly ListPermissionSetProvisioningStatus: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissionSetProvisioningStatus API call.

---

##### `ListPermissionSets`<sup>Required</sup> <a name="ListPermissionSets" id="@cdk_utils/iam.sso.SSOOperations.property.ListPermissionSets"></a>

```typescript
public readonly ListPermissionSets: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissionSets API call.

---

##### `ListPermissionSetsProvisionedToAccount`<sup>Required</sup> <a name="ListPermissionSetsProvisionedToAccount" id="@cdk_utils/iam.sso.SSOOperations.property.ListPermissionSetsProvisionedToAccount"></a>

```typescript
public readonly ListPermissionSetsProvisionedToAccount: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissionSetsProvisionedToAccount API call.

---

##### `ListRegions`<sup>Required</sup> <a name="ListRegions" id="@cdk_utils/iam.sso.SSOOperations.property.ListRegions"></a>

```typescript
public readonly ListRegions: string[];
```

- *Type:* string[]

IAM actions required for the ListRegions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.sso.SSOOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTrustedTokenIssuers`<sup>Required</sup> <a name="ListTrustedTokenIssuers" id="@cdk_utils/iam.sso.SSOOperations.property.ListTrustedTokenIssuers"></a>

```typescript
public readonly ListTrustedTokenIssuers: string[];
```

- *Type:* string[]

IAM actions required for the ListTrustedTokenIssuers API call.

---

##### `Logout`<sup>Required</sup> <a name="Logout" id="@cdk_utils/iam.sso.SSOOperations.property.Logout"></a>

```typescript
public readonly Logout: string[];
```

- *Type:* string[]

IAM actions required for the Logout API call.

---

##### `opGetApplicationAccessScope`<sup>Required</sup> <a name="opGetApplicationAccessScope" id="@cdk_utils/iam.sso.SSOOperations.property.opGetApplicationAccessScope"></a>

```typescript
public readonly opGetApplicationAccessScope: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationAccessScope API call.

---

##### `opGetApplicationAssignmentConfiguration`<sup>Required</sup> <a name="opGetApplicationAssignmentConfiguration" id="@cdk_utils/iam.sso.SSOOperations.property.opGetApplicationAssignmentConfiguration"></a>

```typescript
public readonly opGetApplicationAssignmentConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationAssignmentConfiguration API call.

---

##### `opGetApplicationAuthenticationMethod`<sup>Required</sup> <a name="opGetApplicationAuthenticationMethod" id="@cdk_utils/iam.sso.SSOOperations.property.opGetApplicationAuthenticationMethod"></a>

```typescript
public readonly opGetApplicationAuthenticationMethod: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationAuthenticationMethod API call.

---

##### `opGetApplicationGrant`<sup>Required</sup> <a name="opGetApplicationGrant" id="@cdk_utils/iam.sso.SSOOperations.property.opGetApplicationGrant"></a>

```typescript
public readonly opGetApplicationGrant: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationGrant API call.

---

##### `opGetApplicationSessionConfiguration`<sup>Required</sup> <a name="opGetApplicationSessionConfiguration" id="@cdk_utils/iam.sso.SSOOperations.property.opGetApplicationSessionConfiguration"></a>

```typescript
public readonly opGetApplicationSessionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationSessionConfiguration API call.

---

##### `opGetInlinePolicyForPermissionSet`<sup>Required</sup> <a name="opGetInlinePolicyForPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.opGetInlinePolicyForPermissionSet"></a>

```typescript
public readonly opGetInlinePolicyForPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the GetInlinePolicyForPermissionSet API call.

---

##### `opGetPermissionsBoundaryForPermissionSet`<sup>Required</sup> <a name="opGetPermissionsBoundaryForPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.opGetPermissionsBoundaryForPermissionSet"></a>

```typescript
public readonly opGetPermissionsBoundaryForPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the GetPermissionsBoundaryForPermissionSet API call.

---

##### `opGetRoleCredentials`<sup>Required</sup> <a name="opGetRoleCredentials" id="@cdk_utils/iam.sso.SSOOperations.property.opGetRoleCredentials"></a>

```typescript
public readonly opGetRoleCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetRoleCredentials API call.

---

##### `ProvisionPermissionSet`<sup>Required</sup> <a name="ProvisionPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.ProvisionPermissionSet"></a>

```typescript
public readonly ProvisionPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the ProvisionPermissionSet API call.

---

##### `PutApplicationAccessScope`<sup>Required</sup> <a name="PutApplicationAccessScope" id="@cdk_utils/iam.sso.SSOOperations.property.PutApplicationAccessScope"></a>

```typescript
public readonly PutApplicationAccessScope: string[];
```

- *Type:* string[]

IAM actions required for the PutApplicationAccessScope API call.

---

##### `PutApplicationAssignmentConfiguration`<sup>Required</sup> <a name="PutApplicationAssignmentConfiguration" id="@cdk_utils/iam.sso.SSOOperations.property.PutApplicationAssignmentConfiguration"></a>

```typescript
public readonly PutApplicationAssignmentConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutApplicationAssignmentConfiguration API call.

---

##### `PutApplicationAuthenticationMethod`<sup>Required</sup> <a name="PutApplicationAuthenticationMethod" id="@cdk_utils/iam.sso.SSOOperations.property.PutApplicationAuthenticationMethod"></a>

```typescript
public readonly PutApplicationAuthenticationMethod: string[];
```

- *Type:* string[]

IAM actions required for the PutApplicationAuthenticationMethod API call.

---

##### `PutApplicationGrant`<sup>Required</sup> <a name="PutApplicationGrant" id="@cdk_utils/iam.sso.SSOOperations.property.PutApplicationGrant"></a>

```typescript
public readonly PutApplicationGrant: string[];
```

- *Type:* string[]

IAM actions required for the PutApplicationGrant API call.

---

##### `PutApplicationSessionConfiguration`<sup>Required</sup> <a name="PutApplicationSessionConfiguration" id="@cdk_utils/iam.sso.SSOOperations.property.PutApplicationSessionConfiguration"></a>

```typescript
public readonly PutApplicationSessionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutApplicationSessionConfiguration API call.

---

##### `PutInlinePolicyToPermissionSet`<sup>Required</sup> <a name="PutInlinePolicyToPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.PutInlinePolicyToPermissionSet"></a>

```typescript
public readonly PutInlinePolicyToPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the PutInlinePolicyToPermissionSet API call.

---

##### `PutPermissionsBoundaryToPermissionSet`<sup>Required</sup> <a name="PutPermissionsBoundaryToPermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.PutPermissionsBoundaryToPermissionSet"></a>

```typescript
public readonly PutPermissionsBoundaryToPermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the PutPermissionsBoundaryToPermissionSet API call.

---

##### `RemoveRegion`<sup>Required</sup> <a name="RemoveRegion" id="@cdk_utils/iam.sso.SSOOperations.property.RemoveRegion"></a>

```typescript
public readonly RemoveRegion: string[];
```

- *Type:* string[]

IAM actions required for the RemoveRegion API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.sso.SSOOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.sso.SSOOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.sso.SSOOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateInstance`<sup>Required</sup> <a name="UpdateInstance" id="@cdk_utils/iam.sso.SSOOperations.property.UpdateInstance"></a>

```typescript
public readonly UpdateInstance: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInstance API call.

---

##### `UpdateInstanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="UpdateInstanceAccessControlAttributeConfiguration" id="@cdk_utils/iam.sso.SSOOperations.property.UpdateInstanceAccessControlAttributeConfiguration"></a>

```typescript
public readonly UpdateInstanceAccessControlAttributeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInstanceAccessControlAttributeConfiguration API call.

---

##### `UpdatePermissionSet`<sup>Required</sup> <a name="UpdatePermissionSet" id="@cdk_utils/iam.sso.SSOOperations.property.UpdatePermissionSet"></a>

```typescript
public readonly UpdatePermissionSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePermissionSet API call.

---

##### `UpdateTrustedTokenIssuer`<sup>Required</sup> <a name="UpdateTrustedTokenIssuer" id="@cdk_utils/iam.sso.SSOOperations.property.UpdateTrustedTokenIssuer"></a>

```typescript
public readonly UpdateTrustedTokenIssuer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrustedTokenIssuer API call.

---

### SSOResources <a name="SSOResources" id="@cdk_utils/iam.sso.SSOResources"></a>

ARN builders, validators, and parsers for sso resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sso.SSOResources.Initializer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

new sso.SSOResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.account">account</a></code> | Builds an ARN for the Account resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.application">application</a></code> | Builds an ARN for the Application resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.applicationProvider">applicationProvider</a></code> | Builds an ARN for the ApplicationProvider resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.instance">instance</a></code> | Builds an ARN for the Instance resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.isValidAccountArn">isValidAccountArn</a></code> | Validates whether a string is a valid ARN for the Account resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the Application resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.isValidApplicationProviderArn">isValidApplicationProviderArn</a></code> | Validates whether a string is a valid ARN for the ApplicationProvider resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.isValidInstanceArn">isValidInstanceArn</a></code> | Validates whether a string is a valid ARN for the Instance resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.isValidPermissionSetArn">isValidPermissionSetArn</a></code> | Validates whether a string is a valid ARN for the PermissionSet resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.isValidTrustedTokenIssuerArn">isValidTrustedTokenIssuerArn</a></code> | Validates whether a string is a valid ARN for the TrustedTokenIssuer resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.parseAccountArn">parseAccountArn</a></code> | Parses a Account ARN into its components. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a Application ARN into its components. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.parseApplicationProviderArn">parseApplicationProviderArn</a></code> | Parses a ApplicationProvider ARN into its components. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.parseInstanceArn">parseInstanceArn</a></code> | Parses a Instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.parsePermissionSetArn">parsePermissionSetArn</a></code> | Parses a PermissionSet ARN into its components. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.parseTrustedTokenIssuerArn">parseTrustedTokenIssuerArn</a></code> | Parses a TrustedTokenIssuer ARN into its components. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.permissionSet">permissionSet</a></code> | Builds an ARN for the PermissionSet resource. |
| <code><a href="#@cdk_utils/iam.sso.SSOResources.trustedTokenIssuer">trustedTokenIssuer</a></code> | Builds an ARN for the TrustedTokenIssuer resource. |

---

##### `account` <a name="account" id="@cdk_utils/iam.sso.SSOResources.account"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.account(props: SSOAccountArnProps)
```

Builds an ARN for the Account resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sso.SSOResources.account.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sso.SSOAccountArnProps">SSOAccountArnProps</a>

---

##### `application` <a name="application" id="@cdk_utils/iam.sso.SSOResources.application"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.application(props: SSOApplicationArnProps)
```

Builds an ARN for the Application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sso.SSOResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sso.SSOApplicationArnProps">SSOApplicationArnProps</a>

---

##### `applicationProvider` <a name="applicationProvider" id="@cdk_utils/iam.sso.SSOResources.applicationProvider"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.applicationProvider(props: SSOApplicationProviderArnProps)
```

Builds an ARN for the ApplicationProvider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sso.SSOResources.applicationProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sso.SSOApplicationProviderArnProps">SSOApplicationProviderArnProps</a>

---

##### `instance` <a name="instance" id="@cdk_utils/iam.sso.SSOResources.instance"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.instance(props: SSOInstanceArnProps)
```

Builds an ARN for the Instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sso.SSOResources.instance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sso.SSOInstanceArnProps">SSOInstanceArnProps</a>

---

##### `isValidAccountArn` <a name="isValidAccountArn" id="@cdk_utils/iam.sso.SSOResources.isValidAccountArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.isValidAccountArn(arn: string)
```

Validates whether a string is a valid ARN for the Account resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.isValidAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.sso.SSOResources.isValidApplicationArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the Application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApplicationProviderArn` <a name="isValidApplicationProviderArn" id="@cdk_utils/iam.sso.SSOResources.isValidApplicationProviderArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.isValidApplicationProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the ApplicationProvider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.isValidApplicationProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceArn` <a name="isValidInstanceArn" id="@cdk_utils/iam.sso.SSOResources.isValidInstanceArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.isValidInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the Instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.isValidInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPermissionSetArn` <a name="isValidPermissionSetArn" id="@cdk_utils/iam.sso.SSOResources.isValidPermissionSetArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.isValidPermissionSetArn(arn: string)
```

Validates whether a string is a valid ARN for the PermissionSet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.isValidPermissionSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTrustedTokenIssuerArn` <a name="isValidTrustedTokenIssuerArn" id="@cdk_utils/iam.sso.SSOResources.isValidTrustedTokenIssuerArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.isValidTrustedTokenIssuerArn(arn: string)
```

Validates whether a string is a valid ARN for the TrustedTokenIssuer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.isValidTrustedTokenIssuerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccountArn` <a name="parseAccountArn" id="@cdk_utils/iam.sso.SSOResources.parseAccountArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.parseAccountArn(arn: string)
```

Parses a Account ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.parseAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.sso.SSOResources.parseApplicationArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.parseApplicationArn(arn: string)
```

Parses a Application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationProviderArn` <a name="parseApplicationProviderArn" id="@cdk_utils/iam.sso.SSOResources.parseApplicationProviderArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.parseApplicationProviderArn(arn: string)
```

Parses a ApplicationProvider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.parseApplicationProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceArn` <a name="parseInstanceArn" id="@cdk_utils/iam.sso.SSOResources.parseInstanceArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.parseInstanceArn(arn: string)
```

Parses a Instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.parseInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePermissionSetArn` <a name="parsePermissionSetArn" id="@cdk_utils/iam.sso.SSOResources.parsePermissionSetArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.parsePermissionSetArn(arn: string)
```

Parses a PermissionSet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.parsePermissionSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTrustedTokenIssuerArn` <a name="parseTrustedTokenIssuerArn" id="@cdk_utils/iam.sso.SSOResources.parseTrustedTokenIssuerArn"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.parseTrustedTokenIssuerArn(arn: string)
```

Parses a TrustedTokenIssuer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso.SSOResources.parseTrustedTokenIssuerArn.parameter.arn"></a>

- *Type:* string

---

##### `permissionSet` <a name="permissionSet" id="@cdk_utils/iam.sso.SSOResources.permissionSet"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.permissionSet(props: SSOPermissionSetArnProps)
```

Builds an ARN for the PermissionSet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sso.SSOResources.permissionSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sso.SSOPermissionSetArnProps">SSOPermissionSetArnProps</a>

---

##### `trustedTokenIssuer` <a name="trustedTokenIssuer" id="@cdk_utils/iam.sso.SSOResources.trustedTokenIssuer"></a>

```typescript
import { sso } from '@cdk_utils/iam'

sso.SSOResources.trustedTokenIssuer(props: SSOTrustedTokenIssuerArnProps)
```

Builds an ARN for the TrustedTokenIssuer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sso.SSOResources.trustedTokenIssuer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sso.SSOTrustedTokenIssuerArnProps">SSOTrustedTokenIssuerArnProps</a>

---




